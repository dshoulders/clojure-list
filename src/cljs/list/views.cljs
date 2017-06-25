(ns list.views
  (:require [re-frame.core :as re-frame]
            [list.styles.base-styles :as base-styles]
            [list.items.browser :as item-browser]
            [list.items.edit :as item-edit]))


 ;; Styles
 ;; -----------------------

(def layout-style
  {:maxWidth "600px"
   :margin "0 auto"
   :padding "20px"
   :fontFamily base-styles/default-font-family
   :color "rgb(60, 60, 60)"})

;; Views
;; ------------------------

(defn pages [[page-name params]]
    (case page-name
      :home [item-browser/view]
      :item-edit [item-edit/view (:id params)]
      :item-new [item-edit/view]
      [:div]))

(defn layout [route]
  [:div {:style layout-style}
    [pages route]])

(defn page-selector []
  (let [route (re-frame/subscribe [:page])]
    (fn []
      [layout @route])))
