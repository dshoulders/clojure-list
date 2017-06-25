(ns list.actions-panel.panel
  (:require [accountant.core :as accountant]
            [re-frame.core :as re-frame]))

;; Styles
;; -----------------

(def panel-style
  {:marginBottom "15px"})

(def action-style
  {:fontSize "13px"
   :cursor "pointer"
   :color "#7b7b7b"
   :marginRight "15px"})

;; view
;; -----------------

(defn view []
  [:div {:style panel-style}
    [:span
      {:style action-style
       :on-click #(re-frame/dispatch [:clear-filter])}
      "× Clear Filter"]
    [:span
      {:style action-style
       :on-click #(accountant/navigate! "/item/new")}
      "+ Add New Item"]])
