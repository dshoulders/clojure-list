// Compiled by ClojureScript 1.9.562 {}
goog.provide('list.actionspanel.panel');
goog.require('cljs.core');
goog.require('re_frame.core');
list.actionspanel.panel.panel_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"15px"], null);
list.actionspanel.panel.action_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"13px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),"#7b7b7b",new cljs.core.Keyword(null,"marginRight","marginRight",457313535),"15px"], null);
list.actionspanel.panel.view = (function list$actionspanel$panel$view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),list.actionspanel.panel.panel_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),list.actionspanel.panel.action_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-filter","clear-filter",-447106109)], null));
})], null),"\u00D7 Clear Filter"], null)], null);
});

//# sourceMappingURL=panel.js.map?rel=1497901145946