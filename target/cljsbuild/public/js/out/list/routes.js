// Compiled by ClojureScript 1.9.562 {}
goog.provide('list.routes');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('re_frame.core');
list.routes.hook_browser_navigation_BANG_ = (function list$routes$hook_browser_navigation_BANG_(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

return accountant.core.dispatch_current_BANG_.call(null);
});
list.routes.app_routes = (function list$routes$app_routes(){
var action__32606__auto___34564 = (function (params__32607__auto__){
if(cljs.core.map_QMARK_.call(null,params__32607__auto__)){
var map__34551 = params__32607__auto__;
var map__34551__$1 = ((((!((map__34551 == null)))?((((map__34551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34551):map__34551);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-page","set-page",1750905514),new cljs.core.Keyword(null,"home","home",-74557309)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__32607__auto__)){
var vec__34553 = params__32607__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-page","set-page",1750905514),new cljs.core.Keyword(null,"home","home",-74557309)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__32606__auto___34564);


var action__32606__auto___34565 = (function (params__32607__auto__){
if(cljs.core.map_QMARK_.call(null,params__32607__auto__)){
var map__34556 = params__32607__auto__;
var map__34556__$1 = ((((!((map__34556 == null)))?((((map__34556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34556):map__34556);
var params = map__34556__$1;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-page","set-page",1750905514),new cljs.core.Keyword(null,"item-edit","item-edit",-14823426),params], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__32607__auto__)){
var map__34558 = params__32607__auto__;
var map__34558__$1 = ((((!((map__34558 == null)))?((((map__34558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34558):map__34558);
var params = map__34558__$1;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-page","set-page",1750905514),new cljs.core.Keyword(null,"item-edit","item-edit",-14823426),params], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/item/edit/:id",action__32606__auto___34565);


var action__32606__auto___34566 = (function (params__32607__auto__){
if(cljs.core.map_QMARK_.call(null,params__32607__auto__)){
var map__34560 = params__32607__auto__;
var map__34560__$1 = ((((!((map__34560 == null)))?((((map__34560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34560.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34560):map__34560);
var params = map__34560__$1;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-page","set-page",1750905514),new cljs.core.Keyword(null,"item-edit","item-edit",-14823426),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"__NEW__"], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__32607__auto__)){
var map__34562 = params__32607__auto__;
var map__34562__$1 = ((((!((map__34562 == null)))?((((map__34562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34562):map__34562);
var params = map__34562__$1;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-page","set-page",1750905514),new cljs.core.Keyword(null,"item-edit","item-edit",-14823426),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"__NEW__"], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/item/new",action__32606__auto___34566);


return list.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1497906440278