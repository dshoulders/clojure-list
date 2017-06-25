(ns list.items.list
  (:require [accountant.core :as accountant]
            [re-frame.core :as re-frame]
            [list.styles.base-styles :as base-styles :refer [tag-styles break-long-words]]))

;; ----------------------------
;; Styles

(def item-styles
  {:marginBottom "15px"
   :background "#fff"
   :padding "15px"
   :boxShadow "0px 0px 3px 0px rgba(0, 0, 0, 0.20)"
   :borderRadius "3px"})

(def title-styles
  {:fontSize "22px"
   :color "lightseagreen"})

(def note-styles (merge break-long-words { :marginTop "7px"}))


;; ------------------
;; Utils

(defn in?
  "true if coll contains elm"
  [coll elm]
  (some #(= elm %) coll))

(defn mark-tags [notes]
  (clojure.string/replace notes #"(https?://\S*)|(\B#\w*[a-zA-Z]+\w*)"  #(str "|" (first %) "|")))

(defn split-marks [marked-string]
  (clojure.string/split marked-string #"\|"))

(defn sort-by-title [items]
  (sort-by #(clojure.string/lower-case (:title %)) items))

(defn filter-visible [visible-item-ids items]
  (filter #(in? visible-item-ids (:id %)) items))

;; --------------------
;; View functions

(defn notes-html [notes-part]
  (if (clojure.string/starts-with? notes-part "http")
    [:a {:href notes-part} notes-part]
    (if (clojure.string/starts-with? notes-part "#")
      [:span {:style tag-styles} notes-part]
      [:span notes-part])))

(defn notes-display [notes]
  (into [:div]
    (for [notes-part (split-marks (mark-tags notes))]
      [notes-html notes-part])))

(defn view []
  (let [items (re-frame/subscribe [:items])
        visible-item-ids (re-frame/subscribe [:visible-item-ids])]
    [:div.item-list
      (for [item (sort-by-title (filter-visible @visible-item-ids @items))]
        ^{:key (:id item)}
        [:div
          {:style item-styles}
          [:div
            { :style title-styles
              :on-double-click #(accountant/navigate! (str "/item/edit/" (:id item)))}
            (:title item)]
          [:div
            { :style note-styles}
            [notes-display (:notes item)]]])]))
