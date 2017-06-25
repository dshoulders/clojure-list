// Compiled by ClojureScript 1.9.562 {}
goog.provide('list.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('list.styles.base_styles');
goog.require('list.items.browser');
goog.require('list.items.edit');
list.views.layout_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),"600px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),list.styles.base_styles.default_font_family,new cljs.core.Keyword(null,"color","color",1011675173),"rgb(60, 60, 60)"], null);
list.views.pages = (function list$views$pages(p__35266){
var vec__35271 = p__35266;
var page_name = cljs.core.nth.call(null,vec__35271,(0),null);
var params = cljs.core.nth.call(null,vec__35271,(1),null);
var G__35274 = page_name;
var G__35274__$1 = (((G__35274 instanceof cljs.core.Keyword))?G__35274.fqn:null);
switch (G__35274__$1) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list.items.browser.view], null);

break;
case "item-edit":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [list.items.edit.view,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params)], null);

break;
case "item-new":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list.items.edit.view], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
list.views.layout = (function list$views$layout(route){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),list.views.layout_style], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [list.views.pages,route], null)], null);
});
list.views.page_selector = (function list$views$page_selector(){
var route = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null));
return ((function (route){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [list.views.layout,cljs.core.deref.call(null,route)], null);
});
;})(route))
});

//# sourceMappingURL=views.js.map?rel=1498418314712