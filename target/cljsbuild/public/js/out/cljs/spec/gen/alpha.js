// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__31093__auto__,writer__31094__auto__,opt__31095__auto__){
return cljs.core._write.call(null,writer__31094__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42441 = arguments.length;
var i__31596__auto___42442 = (0);
while(true){
if((i__31596__auto___42442 < len__31595__auto___42441)){
args__31602__auto__.push((arguments[i__31596__auto___42442]));

var G__42443 = (i__31596__auto___42442 + (1));
i__31596__auto___42442 = G__42443;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq42440){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42440));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42445 = arguments.length;
var i__31596__auto___42446 = (0);
while(true){
if((i__31596__auto___42446 < len__31595__auto___42445)){
args__31602__auto__.push((arguments[i__31596__auto___42446]));

var G__42447 = (i__31596__auto___42446 + (1));
i__31596__auto___42446 = G__42447;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq42444){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42444));
});

var g_QMARK__42448 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_42449 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__42448){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__42448))
,null));
var mkg_42450 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__42448,g_42449){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__42448,g_42449))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__42448,g_42449,mkg_42450){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__42448).call(null,x);
});})(g_QMARK__42448,g_42449,mkg_42450))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__42448,g_42449,mkg_42450){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_42450).call(null,gfn);
});})(g_QMARK__42448,g_42449,mkg_42450))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__42448,g_42449,mkg_42450){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_42449).call(null,generator);
});})(g_QMARK__42448,g_42449,mkg_42450))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__37706__auto___42470 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__37706__auto___42470){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42471 = arguments.length;
var i__31596__auto___42472 = (0);
while(true){
if((i__31596__auto___42472 < len__31595__auto___42471)){
args__31602__auto__.push((arguments[i__31596__auto___42472]));

var G__42473 = (i__31596__auto___42472 + (1));
i__31596__auto___42472 = G__42473;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42470))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42470){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42470),args);
});})(g__37706__auto___42470))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__37706__auto___42470){
return (function (seq42451){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42451));
});})(g__37706__auto___42470))
;


var g__37706__auto___42474 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__37706__auto___42474){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42475 = arguments.length;
var i__31596__auto___42476 = (0);
while(true){
if((i__31596__auto___42476 < len__31595__auto___42475)){
args__31602__auto__.push((arguments[i__31596__auto___42476]));

var G__42477 = (i__31596__auto___42476 + (1));
i__31596__auto___42476 = G__42477;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42474))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42474){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42474),args);
});})(g__37706__auto___42474))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__37706__auto___42474){
return (function (seq42452){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42452));
});})(g__37706__auto___42474))
;


var g__37706__auto___42478 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__37706__auto___42478){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42479 = arguments.length;
var i__31596__auto___42480 = (0);
while(true){
if((i__31596__auto___42480 < len__31595__auto___42479)){
args__31602__auto__.push((arguments[i__31596__auto___42480]));

var G__42481 = (i__31596__auto___42480 + (1));
i__31596__auto___42480 = G__42481;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42478))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42478){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42478),args);
});})(g__37706__auto___42478))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__37706__auto___42478){
return (function (seq42453){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42453));
});})(g__37706__auto___42478))
;


var g__37706__auto___42482 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__37706__auto___42482){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42483 = arguments.length;
var i__31596__auto___42484 = (0);
while(true){
if((i__31596__auto___42484 < len__31595__auto___42483)){
args__31602__auto__.push((arguments[i__31596__auto___42484]));

var G__42485 = (i__31596__auto___42484 + (1));
i__31596__auto___42484 = G__42485;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42482))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42482){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42482),args);
});})(g__37706__auto___42482))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__37706__auto___42482){
return (function (seq42454){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42454));
});})(g__37706__auto___42482))
;


var g__37706__auto___42486 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__37706__auto___42486){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42487 = arguments.length;
var i__31596__auto___42488 = (0);
while(true){
if((i__31596__auto___42488 < len__31595__auto___42487)){
args__31602__auto__.push((arguments[i__31596__auto___42488]));

var G__42489 = (i__31596__auto___42488 + (1));
i__31596__auto___42488 = G__42489;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42486))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42486){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42486),args);
});})(g__37706__auto___42486))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__37706__auto___42486){
return (function (seq42455){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42455));
});})(g__37706__auto___42486))
;


var g__37706__auto___42490 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__37706__auto___42490){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42491 = arguments.length;
var i__31596__auto___42492 = (0);
while(true){
if((i__31596__auto___42492 < len__31595__auto___42491)){
args__31602__auto__.push((arguments[i__31596__auto___42492]));

var G__42493 = (i__31596__auto___42492 + (1));
i__31596__auto___42492 = G__42493;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42490))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42490){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42490),args);
});})(g__37706__auto___42490))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__37706__auto___42490){
return (function (seq42456){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42456));
});})(g__37706__auto___42490))
;


var g__37706__auto___42494 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__37706__auto___42494){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42495 = arguments.length;
var i__31596__auto___42496 = (0);
while(true){
if((i__31596__auto___42496 < len__31595__auto___42495)){
args__31602__auto__.push((arguments[i__31596__auto___42496]));

var G__42497 = (i__31596__auto___42496 + (1));
i__31596__auto___42496 = G__42497;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42494))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42494){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42494),args);
});})(g__37706__auto___42494))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__37706__auto___42494){
return (function (seq42457){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42457));
});})(g__37706__auto___42494))
;


var g__37706__auto___42498 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__37706__auto___42498){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42499 = arguments.length;
var i__31596__auto___42500 = (0);
while(true){
if((i__31596__auto___42500 < len__31595__auto___42499)){
args__31602__auto__.push((arguments[i__31596__auto___42500]));

var G__42501 = (i__31596__auto___42500 + (1));
i__31596__auto___42500 = G__42501;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42498))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42498){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42498),args);
});})(g__37706__auto___42498))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__37706__auto___42498){
return (function (seq42458){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42458));
});})(g__37706__auto___42498))
;


var g__37706__auto___42502 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__37706__auto___42502){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42503 = arguments.length;
var i__31596__auto___42504 = (0);
while(true){
if((i__31596__auto___42504 < len__31595__auto___42503)){
args__31602__auto__.push((arguments[i__31596__auto___42504]));

var G__42505 = (i__31596__auto___42504 + (1));
i__31596__auto___42504 = G__42505;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42502))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42502){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42502),args);
});})(g__37706__auto___42502))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__37706__auto___42502){
return (function (seq42459){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42459));
});})(g__37706__auto___42502))
;


var g__37706__auto___42506 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__37706__auto___42506){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42507 = arguments.length;
var i__31596__auto___42508 = (0);
while(true){
if((i__31596__auto___42508 < len__31595__auto___42507)){
args__31602__auto__.push((arguments[i__31596__auto___42508]));

var G__42509 = (i__31596__auto___42508 + (1));
i__31596__auto___42508 = G__42509;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42506))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42506){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42506),args);
});})(g__37706__auto___42506))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__37706__auto___42506){
return (function (seq42460){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42460));
});})(g__37706__auto___42506))
;


var g__37706__auto___42510 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__37706__auto___42510){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42511 = arguments.length;
var i__31596__auto___42512 = (0);
while(true){
if((i__31596__auto___42512 < len__31595__auto___42511)){
args__31602__auto__.push((arguments[i__31596__auto___42512]));

var G__42513 = (i__31596__auto___42512 + (1));
i__31596__auto___42512 = G__42513;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42510))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42510){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42510),args);
});})(g__37706__auto___42510))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__37706__auto___42510){
return (function (seq42461){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42461));
});})(g__37706__auto___42510))
;


var g__37706__auto___42514 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__37706__auto___42514){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42515 = arguments.length;
var i__31596__auto___42516 = (0);
while(true){
if((i__31596__auto___42516 < len__31595__auto___42515)){
args__31602__auto__.push((arguments[i__31596__auto___42516]));

var G__42517 = (i__31596__auto___42516 + (1));
i__31596__auto___42516 = G__42517;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42514))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42514){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42514),args);
});})(g__37706__auto___42514))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__37706__auto___42514){
return (function (seq42462){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42462));
});})(g__37706__auto___42514))
;


var g__37706__auto___42518 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__37706__auto___42518){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42519 = arguments.length;
var i__31596__auto___42520 = (0);
while(true){
if((i__31596__auto___42520 < len__31595__auto___42519)){
args__31602__auto__.push((arguments[i__31596__auto___42520]));

var G__42521 = (i__31596__auto___42520 + (1));
i__31596__auto___42520 = G__42521;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42518))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42518){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42518),args);
});})(g__37706__auto___42518))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__37706__auto___42518){
return (function (seq42463){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42463));
});})(g__37706__auto___42518))
;


var g__37706__auto___42522 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__37706__auto___42522){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42523 = arguments.length;
var i__31596__auto___42524 = (0);
while(true){
if((i__31596__auto___42524 < len__31595__auto___42523)){
args__31602__auto__.push((arguments[i__31596__auto___42524]));

var G__42525 = (i__31596__auto___42524 + (1));
i__31596__auto___42524 = G__42525;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42522))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42522){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42522),args);
});})(g__37706__auto___42522))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__37706__auto___42522){
return (function (seq42464){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42464));
});})(g__37706__auto___42522))
;


var g__37706__auto___42526 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__37706__auto___42526){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42527 = arguments.length;
var i__31596__auto___42528 = (0);
while(true){
if((i__31596__auto___42528 < len__31595__auto___42527)){
args__31602__auto__.push((arguments[i__31596__auto___42528]));

var G__42529 = (i__31596__auto___42528 + (1));
i__31596__auto___42528 = G__42529;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42526))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42526){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42526),args);
});})(g__37706__auto___42526))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__37706__auto___42526){
return (function (seq42465){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42465));
});})(g__37706__auto___42526))
;


var g__37706__auto___42530 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__37706__auto___42530){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42531 = arguments.length;
var i__31596__auto___42532 = (0);
while(true){
if((i__31596__auto___42532 < len__31595__auto___42531)){
args__31602__auto__.push((arguments[i__31596__auto___42532]));

var G__42533 = (i__31596__auto___42532 + (1));
i__31596__auto___42532 = G__42533;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42530))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42530){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42530),args);
});})(g__37706__auto___42530))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__37706__auto___42530){
return (function (seq42466){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42466));
});})(g__37706__auto___42530))
;


var g__37706__auto___42534 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__37706__auto___42534){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42535 = arguments.length;
var i__31596__auto___42536 = (0);
while(true){
if((i__31596__auto___42536 < len__31595__auto___42535)){
args__31602__auto__.push((arguments[i__31596__auto___42536]));

var G__42537 = (i__31596__auto___42536 + (1));
i__31596__auto___42536 = G__42537;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42534))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42534){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42534),args);
});})(g__37706__auto___42534))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__37706__auto___42534){
return (function (seq42467){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42467));
});})(g__37706__auto___42534))
;


var g__37706__auto___42538 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__37706__auto___42538){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42539 = arguments.length;
var i__31596__auto___42540 = (0);
while(true){
if((i__31596__auto___42540 < len__31595__auto___42539)){
args__31602__auto__.push((arguments[i__31596__auto___42540]));

var G__42541 = (i__31596__auto___42540 + (1));
i__31596__auto___42540 = G__42541;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42538))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42538){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42538),args);
});})(g__37706__auto___42538))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__37706__auto___42538){
return (function (seq42468){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42468));
});})(g__37706__auto___42538))
;


var g__37706__auto___42542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__37706__auto___42542){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42543 = arguments.length;
var i__31596__auto___42544 = (0);
while(true){
if((i__31596__auto___42544 < len__31595__auto___42543)){
args__31602__auto__.push((arguments[i__31596__auto___42544]));

var G__42545 = (i__31596__auto___42544 + (1));
i__31596__auto___42544 = G__42545;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37706__auto___42542))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37706__auto___42542){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37706__auto___42542),args);
});})(g__37706__auto___42542))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__37706__auto___42542){
return (function (seq42469){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42469));
});})(g__37706__auto___42542))
;

var g__37719__auto___42567 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__37719__auto___42567){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42568 = arguments.length;
var i__31596__auto___42569 = (0);
while(true){
if((i__31596__auto___42569 < len__31595__auto___42568)){
args__31602__auto__.push((arguments[i__31596__auto___42569]));

var G__42570 = (i__31596__auto___42569 + (1));
i__31596__auto___42569 = G__42570;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42567))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42567){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42567);
});})(g__37719__auto___42567))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__37719__auto___42567){
return (function (seq42546){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42546));
});})(g__37719__auto___42567))
;


var g__37719__auto___42571 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__37719__auto___42571){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42572 = arguments.length;
var i__31596__auto___42573 = (0);
while(true){
if((i__31596__auto___42573 < len__31595__auto___42572)){
args__31602__auto__.push((arguments[i__31596__auto___42573]));

var G__42574 = (i__31596__auto___42573 + (1));
i__31596__auto___42573 = G__42574;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42571))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42571){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42571);
});})(g__37719__auto___42571))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__37719__auto___42571){
return (function (seq42547){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42547));
});})(g__37719__auto___42571))
;


var g__37719__auto___42575 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__37719__auto___42575){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42576 = arguments.length;
var i__31596__auto___42577 = (0);
while(true){
if((i__31596__auto___42577 < len__31595__auto___42576)){
args__31602__auto__.push((arguments[i__31596__auto___42577]));

var G__42578 = (i__31596__auto___42577 + (1));
i__31596__auto___42577 = G__42578;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42575))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42575){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42575);
});})(g__37719__auto___42575))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__37719__auto___42575){
return (function (seq42548){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42548));
});})(g__37719__auto___42575))
;


var g__37719__auto___42579 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__37719__auto___42579){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42580 = arguments.length;
var i__31596__auto___42581 = (0);
while(true){
if((i__31596__auto___42581 < len__31595__auto___42580)){
args__31602__auto__.push((arguments[i__31596__auto___42581]));

var G__42582 = (i__31596__auto___42581 + (1));
i__31596__auto___42581 = G__42582;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42579))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42579){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42579);
});})(g__37719__auto___42579))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__37719__auto___42579){
return (function (seq42549){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42549));
});})(g__37719__auto___42579))
;


var g__37719__auto___42583 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__37719__auto___42583){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42584 = arguments.length;
var i__31596__auto___42585 = (0);
while(true){
if((i__31596__auto___42585 < len__31595__auto___42584)){
args__31602__auto__.push((arguments[i__31596__auto___42585]));

var G__42586 = (i__31596__auto___42585 + (1));
i__31596__auto___42585 = G__42586;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42583))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42583){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42583);
});})(g__37719__auto___42583))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__37719__auto___42583){
return (function (seq42550){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42550));
});})(g__37719__auto___42583))
;


var g__37719__auto___42587 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__37719__auto___42587){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42588 = arguments.length;
var i__31596__auto___42589 = (0);
while(true){
if((i__31596__auto___42589 < len__31595__auto___42588)){
args__31602__auto__.push((arguments[i__31596__auto___42589]));

var G__42590 = (i__31596__auto___42589 + (1));
i__31596__auto___42589 = G__42590;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42587))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42587){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42587);
});})(g__37719__auto___42587))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__37719__auto___42587){
return (function (seq42551){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42551));
});})(g__37719__auto___42587))
;


var g__37719__auto___42591 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__37719__auto___42591){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42592 = arguments.length;
var i__31596__auto___42593 = (0);
while(true){
if((i__31596__auto___42593 < len__31595__auto___42592)){
args__31602__auto__.push((arguments[i__31596__auto___42593]));

var G__42594 = (i__31596__auto___42593 + (1));
i__31596__auto___42593 = G__42594;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42591))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42591){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42591);
});})(g__37719__auto___42591))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__37719__auto___42591){
return (function (seq42552){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42552));
});})(g__37719__auto___42591))
;


var g__37719__auto___42595 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__37719__auto___42595){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42596 = arguments.length;
var i__31596__auto___42597 = (0);
while(true){
if((i__31596__auto___42597 < len__31595__auto___42596)){
args__31602__auto__.push((arguments[i__31596__auto___42597]));

var G__42598 = (i__31596__auto___42597 + (1));
i__31596__auto___42597 = G__42598;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42595))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42595){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42595);
});})(g__37719__auto___42595))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__37719__auto___42595){
return (function (seq42553){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42553));
});})(g__37719__auto___42595))
;


var g__37719__auto___42599 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__37719__auto___42599){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42600 = arguments.length;
var i__31596__auto___42601 = (0);
while(true){
if((i__31596__auto___42601 < len__31595__auto___42600)){
args__31602__auto__.push((arguments[i__31596__auto___42601]));

var G__42602 = (i__31596__auto___42601 + (1));
i__31596__auto___42601 = G__42602;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42599))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42599){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42599);
});})(g__37719__auto___42599))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__37719__auto___42599){
return (function (seq42554){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42554));
});})(g__37719__auto___42599))
;


var g__37719__auto___42603 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__37719__auto___42603){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42604 = arguments.length;
var i__31596__auto___42605 = (0);
while(true){
if((i__31596__auto___42605 < len__31595__auto___42604)){
args__31602__auto__.push((arguments[i__31596__auto___42605]));

var G__42606 = (i__31596__auto___42605 + (1));
i__31596__auto___42605 = G__42606;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42603))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42603){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42603);
});})(g__37719__auto___42603))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__37719__auto___42603){
return (function (seq42555){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42555));
});})(g__37719__auto___42603))
;


var g__37719__auto___42607 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__37719__auto___42607){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42608 = arguments.length;
var i__31596__auto___42609 = (0);
while(true){
if((i__31596__auto___42609 < len__31595__auto___42608)){
args__31602__auto__.push((arguments[i__31596__auto___42609]));

var G__42610 = (i__31596__auto___42609 + (1));
i__31596__auto___42609 = G__42610;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42607))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42607){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42607);
});})(g__37719__auto___42607))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__37719__auto___42607){
return (function (seq42556){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42556));
});})(g__37719__auto___42607))
;


var g__37719__auto___42611 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__37719__auto___42611){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42612 = arguments.length;
var i__31596__auto___42613 = (0);
while(true){
if((i__31596__auto___42613 < len__31595__auto___42612)){
args__31602__auto__.push((arguments[i__31596__auto___42613]));

var G__42614 = (i__31596__auto___42613 + (1));
i__31596__auto___42613 = G__42614;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42611))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42611){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42611);
});})(g__37719__auto___42611))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__37719__auto___42611){
return (function (seq42557){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42557));
});})(g__37719__auto___42611))
;


var g__37719__auto___42615 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__37719__auto___42615){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42616 = arguments.length;
var i__31596__auto___42617 = (0);
while(true){
if((i__31596__auto___42617 < len__31595__auto___42616)){
args__31602__auto__.push((arguments[i__31596__auto___42617]));

var G__42618 = (i__31596__auto___42617 + (1));
i__31596__auto___42617 = G__42618;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42615))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42615){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42615);
});})(g__37719__auto___42615))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__37719__auto___42615){
return (function (seq42558){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42558));
});})(g__37719__auto___42615))
;


var g__37719__auto___42619 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__37719__auto___42619){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42620 = arguments.length;
var i__31596__auto___42621 = (0);
while(true){
if((i__31596__auto___42621 < len__31595__auto___42620)){
args__31602__auto__.push((arguments[i__31596__auto___42621]));

var G__42622 = (i__31596__auto___42621 + (1));
i__31596__auto___42621 = G__42622;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42619))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42619){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42619);
});})(g__37719__auto___42619))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__37719__auto___42619){
return (function (seq42559){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42559));
});})(g__37719__auto___42619))
;


var g__37719__auto___42623 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__37719__auto___42623){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42624 = arguments.length;
var i__31596__auto___42625 = (0);
while(true){
if((i__31596__auto___42625 < len__31595__auto___42624)){
args__31602__auto__.push((arguments[i__31596__auto___42625]));

var G__42626 = (i__31596__auto___42625 + (1));
i__31596__auto___42625 = G__42626;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42623))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42623){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42623);
});})(g__37719__auto___42623))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__37719__auto___42623){
return (function (seq42560){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42560));
});})(g__37719__auto___42623))
;


var g__37719__auto___42627 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__37719__auto___42627){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42628 = arguments.length;
var i__31596__auto___42629 = (0);
while(true){
if((i__31596__auto___42629 < len__31595__auto___42628)){
args__31602__auto__.push((arguments[i__31596__auto___42629]));

var G__42630 = (i__31596__auto___42629 + (1));
i__31596__auto___42629 = G__42630;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42627))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42627){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42627);
});})(g__37719__auto___42627))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__37719__auto___42627){
return (function (seq42561){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42561));
});})(g__37719__auto___42627))
;


var g__37719__auto___42631 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__37719__auto___42631){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42632 = arguments.length;
var i__31596__auto___42633 = (0);
while(true){
if((i__31596__auto___42633 < len__31595__auto___42632)){
args__31602__auto__.push((arguments[i__31596__auto___42633]));

var G__42634 = (i__31596__auto___42633 + (1));
i__31596__auto___42633 = G__42634;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42631))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42631){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42631);
});})(g__37719__auto___42631))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__37719__auto___42631){
return (function (seq42562){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42562));
});})(g__37719__auto___42631))
;


var g__37719__auto___42635 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__37719__auto___42635){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42636 = arguments.length;
var i__31596__auto___42637 = (0);
while(true){
if((i__31596__auto___42637 < len__31595__auto___42636)){
args__31602__auto__.push((arguments[i__31596__auto___42637]));

var G__42638 = (i__31596__auto___42637 + (1));
i__31596__auto___42637 = G__42638;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42635))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42635){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42635);
});})(g__37719__auto___42635))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__37719__auto___42635){
return (function (seq42563){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42563));
});})(g__37719__auto___42635))
;


var g__37719__auto___42639 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__37719__auto___42639){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42640 = arguments.length;
var i__31596__auto___42641 = (0);
while(true){
if((i__31596__auto___42641 < len__31595__auto___42640)){
args__31602__auto__.push((arguments[i__31596__auto___42641]));

var G__42642 = (i__31596__auto___42641 + (1));
i__31596__auto___42641 = G__42642;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42639))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42639){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42639);
});})(g__37719__auto___42639))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__37719__auto___42639){
return (function (seq42564){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42564));
});})(g__37719__auto___42639))
;


var g__37719__auto___42643 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__37719__auto___42643){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42644 = arguments.length;
var i__31596__auto___42645 = (0);
while(true){
if((i__31596__auto___42645 < len__31595__auto___42644)){
args__31602__auto__.push((arguments[i__31596__auto___42645]));

var G__42646 = (i__31596__auto___42645 + (1));
i__31596__auto___42645 = G__42646;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42643))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42643){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42643);
});})(g__37719__auto___42643))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__37719__auto___42643){
return (function (seq42565){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42565));
});})(g__37719__auto___42643))
;


var g__37719__auto___42647 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__37719__auto___42647){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42648 = arguments.length;
var i__31596__auto___42649 = (0);
while(true){
if((i__31596__auto___42649 < len__31595__auto___42648)){
args__31602__auto__.push((arguments[i__31596__auto___42649]));

var G__42650 = (i__31596__auto___42649 + (1));
i__31596__auto___42649 = G__42650;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});})(g__37719__auto___42647))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37719__auto___42647){
return (function (args){
return cljs.core.deref.call(null,g__37719__auto___42647);
});})(g__37719__auto___42647))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__37719__auto___42647){
return (function (seq42566){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42566));
});})(g__37719__auto___42647))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31602__auto__ = [];
var len__31595__auto___42653 = arguments.length;
var i__31596__auto___42654 = (0);
while(true){
if((i__31596__auto___42654 < len__31595__auto___42653)){
args__31602__auto__.push((arguments[i__31596__auto___42654]));

var G__42655 = (i__31596__auto___42654 + (1));
i__31596__auto___42654 = G__42655;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((0) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31603__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__42651_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__42651_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq42652){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42652));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__42656_SHARP_){
return (new Date(p1__42656_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1497293551484