(ns list.items.edit
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [accountant.core :as accountant]
            [list.styles.base-styles :as base-styles]
            [list.firebase :as firebase]))

(def empty-item
  {:id id
   :title ""
   :notes ""})

;; Styles
;; ----------------

(def font-style
  {:fontFamily base-styles/default-font-family})

(def input-style
  (merge
    base-styles/input-styles
    {:fontSize "22px"
     :fontWeight (:normal base-styles/font-weights)}))

(def textarea-style
  (merge
    {:fontSize "16px"
     :padding "5px 10px"
     :width "100%"
     :height "200px"
     :border "none"
     :marginBottom "15px"}
    font-style))

(def action-style
  {:display "flex"
   :justifyContent "flex-end"})

(def save-style
  (merge
    {:marginLeft "15px"}
    font-style
    base-styles/button-styles))

(def cancel-style
  (merge
    font-style
    base-styles/button-styles
    {:background "#808080"}))

(def delete-style
  (merge
    font-style
    base-styles/button-styles
    {:background "#C53434"
     :marginRight "auto"}))

;; Views
;; --------------------------

(defn view [id]
  (let [item @(re-frame/subscribe [:item id])
        temp-item (r/atom (merge empty-item item))]

    (fn []
      [:div
        [:input
          {:style input-style
           :placeholder "Title"
           :on-change #(swap! temp-item assoc :title (-> % .-target .-value))
           :value (:title @temp-item)}]
        [:textarea
          {:style textarea-style
           :placeholder "Notes"
           :on-change #(swap! temp-item assoc :notes (-> % .-target .-value))
           :value (:notes @temp-item)}]
        [:div {:style action-style}
          [:button
            {:style delete-style
             :on-click (fn []
                         (firebase/remove-item @temp-item)
                         (accountant/navigate! "/"))}
            "Delete"]
          [:button
            {:style cancel-style
             :on-click #(accountant/navigate! "/")}
            "Canel"]
          [:button
            {:style save-style
             :on-click (fn []
                         (firebase/save-item @temp-item)
                         (accountant/navigate! "/"))}
            "Save"]]])))
