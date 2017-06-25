// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.connect.app');
goog.require('cljs.core');
goog.require('list.core');
goog.require('list.dev');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__35641__delegate = function (x){
if(cljs.core.truth_(list.core.mount_root)){
return cljs.core.apply.call(null,list.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'list.core/mount-root' is missing");
}
};
var G__35641 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__35642__i = 0, G__35642__a = new Array(arguments.length -  0);
while (G__35642__i < G__35642__a.length) {G__35642__a[G__35642__i] = arguments[G__35642__i + 0]; ++G__35642__i;}
  x = new cljs.core.IndexedSeq(G__35642__a,0,null);
} 
return G__35641__delegate.call(this,x);};
G__35641.cljs$lang$maxFixedArity = 0;
G__35641.cljs$lang$applyTo = (function (arglist__35643){
var x = cljs.core.seq(arglist__35643);
return G__35641__delegate(x);
});
G__35641.cljs$core$IFn$_invoke$arity$variadic = G__35641__delegate;
return G__35641;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=app.js.map?rel=1498422729012