(ns list.filter.tag-filter
  (:require [re-frame.core :as re-frame]
            [list.styles.base-styles :as base-styles]))

;;----------------
;; Styles

(def filter-styles
  {:marginBottom "8px"
    :display "flex"
    :flexWrap "wrap"})

(def deselected-tag-styles
  (merge
    base-styles/tag-styles
    {:marginRight "4px"
      :marginTop "4px"}))

(def selected-tag-styles
  (merge
    deselected-tag-styles
    {:color "#0087ff"}))

;; ------------------
;; Views

(defn all-tags [items]
  (reduce
    (fn [acc item]
      (concat acc (re-seq #"\B#\w*[a-zA-Z]+\w*" (:notes item))))
    [""]
   items))

(defn clean-tags [tags]
  (distinct (filter #(not= "" %) tags)))

(defn view []
  (let [items @(re-frame/subscribe [:items])
        all-tags (all-tags items)
        tags (clean-tags all-tags)
        selected-tag @(re-frame/subscribe [:search-tag])]
    (into [:div { :style filter-styles}]
      (for [tag tags]
        [:div
           {:style (if (= selected-tag tag) selected-tag-styles deselected-tag-styles)
            :on-click #(re-frame/dispatch [:search-tag tag])}
           tag]))))
