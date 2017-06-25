// Compiled by ClojureScript 1.9.562 {}
goog.provide('list.filter.text_filter');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('list.styles.base_styles');
list.filter.text_filter.view = (function list$filter$text_filter$view(){
var search_text = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-text","search-text",1559451259)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),list.styles.base_styles.input_styles,new cljs.core.Keyword(null,"on-input","on-input",-267523366),((function (search_text){
return (function (p1__34779_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-text","search-text",1559451259),p1__34779_SHARP_.target.value], null));
});})(search_text))
,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,search_text),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search"], null)], null);
});

//# sourceMappingURL=text_filter.js.map?rel=1497560878076