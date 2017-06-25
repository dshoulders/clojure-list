(ns list.items.browser
  (:require [list.items.list :as item-list]
            [list.filter.filter :as filter]
            [list.actions-panel.panel :as panel]))

(defn view []
  [:div
    [filter/view]
    [panel/view]
    [item-list/view]])
