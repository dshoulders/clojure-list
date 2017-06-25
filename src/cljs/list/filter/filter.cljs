(ns list.filter.filter
  (:require [list.filter.text-filter :as text-filter]
            [list.filter.tag-filter :as tag-filter]))

(defn view []
  [:div
    [text-filter/view]
    [tag-filter/view]])
