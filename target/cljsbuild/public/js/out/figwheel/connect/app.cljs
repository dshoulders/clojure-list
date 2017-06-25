(ns figwheel.connect.app (:require [list.core] [list.dev] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/list.core.mount-root (apply js/list.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'list.core/mount-root' is missing"))), :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

