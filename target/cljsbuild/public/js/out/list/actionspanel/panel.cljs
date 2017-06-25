(ns list.actionspanel.panel
  (:require [re-frame.core :as re-frame]))

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
      "× Clear Filter"]])
