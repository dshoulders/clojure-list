(ns list.styles.base-styles)

(def default-font-family "Open Sans")

(def font-weights {
                    :bold "700"
                    :semiBold "600"
                    :normal "400"
                    :light "300"})

(def tag-styles {
                  :color "#ff9b00"
                  :background "whitesmoke"
                  :padding "0 5px"
                  :borderRadius "2px"
                  :cursor "pointer"
                  :font-weight (:normal font-weights)})

(def input-styles {
                    :marginBottom "15px"
                    :padding "5px 10px"
                    :borderTop "none"
                    :borderLeft "none"
                    :borderRight "none"
                    :borderBottom "1px solid #ccc"
                    :fontFamily default-font-family
                    :fontWeight (:light font-weights)
                    :fontSize "18px"
                    :outline "none"
                    :width "100%"})


(def button-styles {
                    :background "#00bf83"
                    :fontSize "14px"
                    :border "0px"
                    :borderRadius "2px"
                    :padding "5px 10px"
                    :cursor "pointer"
                    :color "#fff"})

(def break-long-words {
                        :word-wrap "break-word"
                        :overflow-wrap "break-word"
                        :-ms-word-break "break-all"
                        ;; This is the dangerous one in WebKit, as it breaks things wherever
                        :-moz-word-break "break-all"
                        ;; Instead use this non-standard one:
                        :word-break "break-word"
                        ;; Adds a hyphen where the word breaks, if supported (No Blink)
                        :-ms-hyphens "auto"
                        :-moz-hyphens "auto"
                        :-webkit-hyphens "auto"
                        :hyphens "auto"})
