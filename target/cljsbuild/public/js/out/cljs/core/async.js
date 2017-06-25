// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args33427 = [];
var len__31595__auto___33433 = arguments.length;
var i__31596__auto___33434 = (0);
while(true){
if((i__31596__auto___33434 < len__31595__auto___33433)){
args33427.push((arguments[i__31596__auto___33434]));

var G__33435 = (i__31596__auto___33434 + (1));
i__31596__auto___33434 = G__33435;
continue;
} else {
}
break;
}

var G__33429 = args33427.length;
switch (G__33429) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33427.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33430 = (function (f,blockable,meta33431){
this.f = f;
this.blockable = blockable;
this.meta33431 = meta33431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33432,meta33431__$1){
var self__ = this;
var _33432__$1 = this;
return (new cljs.core.async.t_cljs$core$async33430(self__.f,self__.blockable,meta33431__$1));
});

cljs.core.async.t_cljs$core$async33430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33432){
var self__ = this;
var _33432__$1 = this;
return self__.meta33431;
});

cljs.core.async.t_cljs$core$async33430.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33430.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33430.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33430.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33431","meta33431",-1842702080,null)], null);
});

cljs.core.async.t_cljs$core$async33430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33430";

cljs.core.async.t_cljs$core$async33430.cljs$lang$ctorPrWriter = (function (this__31093__auto__,writer__31094__auto__,opt__31095__auto__){
return cljs.core._write.call(null,writer__31094__auto__,"cljs.core.async/t_cljs$core$async33430");
});

cljs.core.async.__GT_t_cljs$core$async33430 = (function cljs$core$async$__GT_t_cljs$core$async33430(f__$1,blockable__$1,meta33431){
return (new cljs.core.async.t_cljs$core$async33430(f__$1,blockable__$1,meta33431));
});

}

return (new cljs.core.async.t_cljs$core$async33430(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args33439 = [];
var len__31595__auto___33442 = arguments.length;
var i__31596__auto___33443 = (0);
while(true){
if((i__31596__auto___33443 < len__31595__auto___33442)){
args33439.push((arguments[i__31596__auto___33443]));

var G__33444 = (i__31596__auto___33443 + (1));
i__31596__auto___33443 = G__33444;
continue;
} else {
}
break;
}

var G__33441 = args33439.length;
switch (G__33441) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33439.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args33446 = [];
var len__31595__auto___33449 = arguments.length;
var i__31596__auto___33450 = (0);
while(true){
if((i__31596__auto___33450 < len__31595__auto___33449)){
args33446.push((arguments[i__31596__auto___33450]));

var G__33451 = (i__31596__auto___33450 + (1));
i__31596__auto___33450 = G__33451;
continue;
} else {
}
break;
}

var G__33448 = args33446.length;
switch (G__33448) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33446.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args33453 = [];
var len__31595__auto___33456 = arguments.length;
var i__31596__auto___33457 = (0);
while(true){
if((i__31596__auto___33457 < len__31595__auto___33456)){
args33453.push((arguments[i__31596__auto___33457]));

var G__33458 = (i__31596__auto___33457 + (1));
i__31596__auto___33457 = G__33458;
continue;
} else {
}
break;
}

var G__33455 = args33453.length;
switch (G__33455) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33453.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33460 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33460);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33460,ret){
return (function (){
return fn1.call(null,val_33460);
});})(val_33460,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args33461 = [];
var len__31595__auto___33464 = arguments.length;
var i__31596__auto___33465 = (0);
while(true){
if((i__31596__auto___33465 < len__31595__auto___33464)){
args33461.push((arguments[i__31596__auto___33465]));

var G__33466 = (i__31596__auto___33465 + (1));
i__31596__auto___33465 = G__33466;
continue;
} else {
}
break;
}

var G__33463 = args33461.length;
switch (G__33463) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33461.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31405__auto___33468 = n;
var x_33469 = (0);
while(true){
if((x_33469 < n__31405__auto___33468)){
(a[x_33469] = (0));

var G__33470 = (x_33469 + (1));
x_33469 = G__33470;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33471 = (i + (1));
i = G__33471;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33475 = (function (flag,meta33476){
this.flag = flag;
this.meta33476 = meta33476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33477,meta33476__$1){
var self__ = this;
var _33477__$1 = this;
return (new cljs.core.async.t_cljs$core$async33475(self__.flag,meta33476__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33477){
var self__ = this;
var _33477__$1 = this;
return self__.meta33476;
});})(flag))
;

cljs.core.async.t_cljs$core$async33475.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33475.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33475.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33476","meta33476",1166484122,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33475";

cljs.core.async.t_cljs$core$async33475.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31093__auto__,writer__31094__auto__,opt__31095__auto__){
return cljs.core._write.call(null,writer__31094__auto__,"cljs.core.async/t_cljs$core$async33475");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33475 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33475(flag__$1,meta33476){
return (new cljs.core.async.t_cljs$core$async33475(flag__$1,meta33476));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33475(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33481 = (function (flag,cb,meta33482){
this.flag = flag;
this.cb = cb;
this.meta33482 = meta33482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33483,meta33482__$1){
var self__ = this;
var _33483__$1 = this;
return (new cljs.core.async.t_cljs$core$async33481(self__.flag,self__.cb,meta33482__$1));
});

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33483){
var self__ = this;
var _33483__$1 = this;
return self__.meta33482;
});

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33482","meta33482",1688915827,null)], null);
});

cljs.core.async.t_cljs$core$async33481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33481";

cljs.core.async.t_cljs$core$async33481.cljs$lang$ctorPrWriter = (function (this__31093__auto__,writer__31094__auto__,opt__31095__auto__){
return cljs.core._write.call(null,writer__31094__auto__,"cljs.core.async/t_cljs$core$async33481");
});

cljs.core.async.__GT_t_cljs$core$async33481 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33481(flag__$1,cb__$1,meta33482){
return (new cljs.core.async.t_cljs$core$async33481(flag__$1,cb__$1,meta33482));
});

}

return (new cljs.core.async.t_cljs$core$async33481(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33484_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33484_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33485_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33485_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30482__auto__ = wport;
if(cljs.core.truth_(or__30482__auto__)){
return or__30482__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33486 = (i + (1));
i = G__33486;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30482__auto__ = ret;
if(cljs.core.truth_(or__30482__auto__)){
return or__30482__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__30470__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30470__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30470__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31602__auto__ = [];
var len__31595__auto___33492 = arguments.length;
var i__31596__auto___33493 = (0);
while(true){
if((i__31596__auto___33493 < len__31595__auto___33492)){
args__31602__auto__.push((arguments[i__31596__auto___33493]));

var G__33494 = (i__31596__auto___33493 + (1));
i__31596__auto___33493 = G__33494;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((1) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31603__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33489){
var map__33490 = p__33489;
var map__33490__$1 = ((((!((map__33490 == null)))?((((map__33490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33490):map__33490);
var opts = map__33490__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33487){
var G__33488 = cljs.core.first.call(null,seq33487);
var seq33487__$1 = cljs.core.next.call(null,seq33487);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33488,seq33487__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args33495 = [];
var len__31595__auto___33545 = arguments.length;
var i__31596__auto___33546 = (0);
while(true){
if((i__31596__auto___33546 < len__31595__auto___33545)){
args33495.push((arguments[i__31596__auto___33546]));

var G__33547 = (i__31596__auto___33546 + (1));
i__31596__auto___33546 = G__33547;
continue;
} else {
}
break;
}

var G__33497 = args33495.length;
switch (G__33497) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33495.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33382__auto___33549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___33549){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___33549){
return (function (state_33521){
var state_val_33522 = (state_33521[(1)]);
if((state_val_33522 === (7))){
var inst_33517 = (state_33521[(2)]);
var state_33521__$1 = state_33521;
var statearr_33523_33550 = state_33521__$1;
(statearr_33523_33550[(2)] = inst_33517);

(statearr_33523_33550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (1))){
var state_33521__$1 = state_33521;
var statearr_33524_33551 = state_33521__$1;
(statearr_33524_33551[(2)] = null);

(statearr_33524_33551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (4))){
var inst_33500 = (state_33521[(7)]);
var inst_33500__$1 = (state_33521[(2)]);
var inst_33501 = (inst_33500__$1 == null);
var state_33521__$1 = (function (){var statearr_33525 = state_33521;
(statearr_33525[(7)] = inst_33500__$1);

return statearr_33525;
})();
if(cljs.core.truth_(inst_33501)){
var statearr_33526_33552 = state_33521__$1;
(statearr_33526_33552[(1)] = (5));

} else {
var statearr_33527_33553 = state_33521__$1;
(statearr_33527_33553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (13))){
var state_33521__$1 = state_33521;
var statearr_33528_33554 = state_33521__$1;
(statearr_33528_33554[(2)] = null);

(statearr_33528_33554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (6))){
var inst_33500 = (state_33521[(7)]);
var state_33521__$1 = state_33521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33521__$1,(11),to,inst_33500);
} else {
if((state_val_33522 === (3))){
var inst_33519 = (state_33521[(2)]);
var state_33521__$1 = state_33521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33521__$1,inst_33519);
} else {
if((state_val_33522 === (12))){
var state_33521__$1 = state_33521;
var statearr_33529_33555 = state_33521__$1;
(statearr_33529_33555[(2)] = null);

(statearr_33529_33555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (2))){
var state_33521__$1 = state_33521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33521__$1,(4),from);
} else {
if((state_val_33522 === (11))){
var inst_33510 = (state_33521[(2)]);
var state_33521__$1 = state_33521;
if(cljs.core.truth_(inst_33510)){
var statearr_33530_33556 = state_33521__$1;
(statearr_33530_33556[(1)] = (12));

} else {
var statearr_33531_33557 = state_33521__$1;
(statearr_33531_33557[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (9))){
var state_33521__$1 = state_33521;
var statearr_33532_33558 = state_33521__$1;
(statearr_33532_33558[(2)] = null);

(statearr_33532_33558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (5))){
var state_33521__$1 = state_33521;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33533_33559 = state_33521__$1;
(statearr_33533_33559[(1)] = (8));

} else {
var statearr_33534_33560 = state_33521__$1;
(statearr_33534_33560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (14))){
var inst_33515 = (state_33521[(2)]);
var state_33521__$1 = state_33521;
var statearr_33535_33561 = state_33521__$1;
(statearr_33535_33561[(2)] = inst_33515);

(statearr_33535_33561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (10))){
var inst_33507 = (state_33521[(2)]);
var state_33521__$1 = state_33521;
var statearr_33536_33562 = state_33521__$1;
(statearr_33536_33562[(2)] = inst_33507);

(statearr_33536_33562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33522 === (8))){
var inst_33504 = cljs.core.async.close_BANG_.call(null,to);
var state_33521__$1 = state_33521;
var statearr_33537_33563 = state_33521__$1;
(statearr_33537_33563[(2)] = inst_33504);

(statearr_33537_33563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___33549))
;
return ((function (switch__33270__auto__,c__33382__auto___33549){
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_33541 = [null,null,null,null,null,null,null,null];
(statearr_33541[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_33541[(1)] = (1));

return statearr_33541;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_33521){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_33521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e33542){if((e33542 instanceof Object)){
var ex__33274__auto__ = e33542;
var statearr_33543_33564 = state_33521;
(statearr_33543_33564[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33565 = state_33521;
state_33521 = G__33565;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_33521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_33521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___33549))
})();
var state__33384__auto__ = (function (){var statearr_33544 = f__33383__auto__.call(null);
(statearr_33544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___33549);

return statearr_33544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___33549))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33753){
var vec__33754 = p__33753;
var v = cljs.core.nth.call(null,vec__33754,(0),null);
var p = cljs.core.nth.call(null,vec__33754,(1),null);
var job = vec__33754;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33382__auto___33940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___33940,res,vec__33754,v,p,job,jobs,results){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___33940,res,vec__33754,v,p,job,jobs,results){
return (function (state_33761){
var state_val_33762 = (state_33761[(1)]);
if((state_val_33762 === (1))){
var state_33761__$1 = state_33761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33761__$1,(2),res,v);
} else {
if((state_val_33762 === (2))){
var inst_33758 = (state_33761[(2)]);
var inst_33759 = cljs.core.async.close_BANG_.call(null,res);
var state_33761__$1 = (function (){var statearr_33763 = state_33761;
(statearr_33763[(7)] = inst_33758);

return statearr_33763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33761__$1,inst_33759);
} else {
return null;
}
}
});})(c__33382__auto___33940,res,vec__33754,v,p,job,jobs,results))
;
return ((function (switch__33270__auto__,c__33382__auto___33940,res,vec__33754,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0 = (function (){
var statearr_33767 = [null,null,null,null,null,null,null,null];
(statearr_33767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__);

(statearr_33767[(1)] = (1));

return statearr_33767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1 = (function (state_33761){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_33761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e33768){if((e33768 instanceof Object)){
var ex__33274__auto__ = e33768;
var statearr_33769_33941 = state_33761;
(statearr_33769_33941[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33942 = state_33761;
state_33761 = G__33942;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = function(state_33761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1.call(this,state_33761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___33940,res,vec__33754,v,p,job,jobs,results))
})();
var state__33384__auto__ = (function (){var statearr_33770 = f__33383__auto__.call(null);
(statearr_33770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___33940);

return statearr_33770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___33940,res,vec__33754,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33771){
var vec__33772 = p__33771;
var v = cljs.core.nth.call(null,vec__33772,(0),null);
var p = cljs.core.nth.call(null,vec__33772,(1),null);
var job = vec__33772;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31405__auto___33943 = n;
var __33944 = (0);
while(true){
if((__33944 < n__31405__auto___33943)){
var G__33775_33945 = type;
var G__33775_33946__$1 = (((G__33775_33945 instanceof cljs.core.Keyword))?G__33775_33945.fqn:null);
switch (G__33775_33946__$1) {
case "compute":
var c__33382__auto___33948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33944,c__33382__auto___33948,G__33775_33945,G__33775_33946__$1,n__31405__auto___33943,jobs,results,process,async){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (__33944,c__33382__auto___33948,G__33775_33945,G__33775_33946__$1,n__31405__auto___33943,jobs,results,process,async){
return (function (state_33788){
var state_val_33789 = (state_33788[(1)]);
if((state_val_33789 === (1))){
var state_33788__$1 = state_33788;
var statearr_33790_33949 = state_33788__$1;
(statearr_33790_33949[(2)] = null);

(statearr_33790_33949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (2))){
var state_33788__$1 = state_33788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33788__$1,(4),jobs);
} else {
if((state_val_33789 === (3))){
var inst_33786 = (state_33788[(2)]);
var state_33788__$1 = state_33788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33788__$1,inst_33786);
} else {
if((state_val_33789 === (4))){
var inst_33778 = (state_33788[(2)]);
var inst_33779 = process.call(null,inst_33778);
var state_33788__$1 = state_33788;
if(cljs.core.truth_(inst_33779)){
var statearr_33791_33950 = state_33788__$1;
(statearr_33791_33950[(1)] = (5));

} else {
var statearr_33792_33951 = state_33788__$1;
(statearr_33792_33951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (5))){
var state_33788__$1 = state_33788;
var statearr_33793_33952 = state_33788__$1;
(statearr_33793_33952[(2)] = null);

(statearr_33793_33952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (6))){
var state_33788__$1 = state_33788;
var statearr_33794_33953 = state_33788__$1;
(statearr_33794_33953[(2)] = null);

(statearr_33794_33953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33789 === (7))){
var inst_33784 = (state_33788[(2)]);
var state_33788__$1 = state_33788;
var statearr_33795_33954 = state_33788__$1;
(statearr_33795_33954[(2)] = inst_33784);

(statearr_33795_33954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33944,c__33382__auto___33948,G__33775_33945,G__33775_33946__$1,n__31405__auto___33943,jobs,results,process,async))
;
return ((function (__33944,switch__33270__auto__,c__33382__auto___33948,G__33775_33945,G__33775_33946__$1,n__31405__auto___33943,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0 = (function (){
var statearr_33799 = [null,null,null,null,null,null,null];
(statearr_33799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__);

(statearr_33799[(1)] = (1));

return statearr_33799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1 = (function (state_33788){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_33788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e33800){if((e33800 instanceof Object)){
var ex__33274__auto__ = e33800;
var statearr_33801_33955 = state_33788;
(statearr_33801_33955[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33956 = state_33788;
state_33788 = G__33956;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = function(state_33788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1.call(this,state_33788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__;
})()
;})(__33944,switch__33270__auto__,c__33382__auto___33948,G__33775_33945,G__33775_33946__$1,n__31405__auto___33943,jobs,results,process,async))
})();
var state__33384__auto__ = (function (){var statearr_33802 = f__33383__auto__.call(null);
(statearr_33802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___33948);

return statearr_33802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(__33944,c__33382__auto___33948,G__33775_33945,G__33775_33946__$1,n__31405__auto___33943,jobs,results,process,async))
);


break;
case "async":
var c__33382__auto___33957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33944,c__33382__auto___33957,G__33775_33945,G__33775_33946__$1,n__31405__auto___33943,jobs,results,process,async){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (__33944,c__33382__auto___33957,G__33775_33945,G__33775_33946__$1,n__31405__auto___33943,jobs,results,process,async){
return (function (state_33815){
var state_val_33816 = (state_33815[(1)]);
if((state_val_33816 === (1))){
var state_33815__$1 = state_33815;
var statearr_33817_33958 = state_33815__$1;
(statearr_33817_33958[(2)] = null);

(statearr_33817_33958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (2))){
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33815__$1,(4),jobs);
} else {
if((state_val_33816 === (3))){
var inst_33813 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33815__$1,inst_33813);
} else {
if((state_val_33816 === (4))){
var inst_33805 = (state_33815[(2)]);
var inst_33806 = async.call(null,inst_33805);
var state_33815__$1 = state_33815;
if(cljs.core.truth_(inst_33806)){
var statearr_33818_33959 = state_33815__$1;
(statearr_33818_33959[(1)] = (5));

} else {
var statearr_33819_33960 = state_33815__$1;
(statearr_33819_33960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (5))){
var state_33815__$1 = state_33815;
var statearr_33820_33961 = state_33815__$1;
(statearr_33820_33961[(2)] = null);

(statearr_33820_33961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (6))){
var state_33815__$1 = state_33815;
var statearr_33821_33962 = state_33815__$1;
(statearr_33821_33962[(2)] = null);

(statearr_33821_33962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33816 === (7))){
var inst_33811 = (state_33815[(2)]);
var state_33815__$1 = state_33815;
var statearr_33822_33963 = state_33815__$1;
(statearr_33822_33963[(2)] = inst_33811);

(statearr_33822_33963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33944,c__33382__auto___33957,G__33775_33945,G__33775_33946__$1,n__31405__auto___33943,jobs,results,process,async))
;
return ((function (__33944,switch__33270__auto__,c__33382__auto___33957,G__33775_33945,G__33775_33946__$1,n__31405__auto___33943,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0 = (function (){
var statearr_33826 = [null,null,null,null,null,null,null];
(statearr_33826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__);

(statearr_33826[(1)] = (1));

return statearr_33826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1 = (function (state_33815){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_33815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e33827){if((e33827 instanceof Object)){
var ex__33274__auto__ = e33827;
var statearr_33828_33964 = state_33815;
(statearr_33828_33964[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33965 = state_33815;
state_33815 = G__33965;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = function(state_33815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1.call(this,state_33815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__;
})()
;})(__33944,switch__33270__auto__,c__33382__auto___33957,G__33775_33945,G__33775_33946__$1,n__31405__auto___33943,jobs,results,process,async))
})();
var state__33384__auto__ = (function (){var statearr_33829 = f__33383__auto__.call(null);
(statearr_33829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___33957);

return statearr_33829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(__33944,c__33382__auto___33957,G__33775_33945,G__33775_33946__$1,n__31405__auto___33943,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33775_33946__$1)].join('')));

}

var G__33966 = (__33944 + (1));
__33944 = G__33966;
continue;
} else {
}
break;
}

var c__33382__auto___33967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___33967,jobs,results,process,async){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___33967,jobs,results,process,async){
return (function (state_33851){
var state_val_33852 = (state_33851[(1)]);
if((state_val_33852 === (1))){
var state_33851__$1 = state_33851;
var statearr_33853_33968 = state_33851__$1;
(statearr_33853_33968[(2)] = null);

(statearr_33853_33968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (2))){
var state_33851__$1 = state_33851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33851__$1,(4),from);
} else {
if((state_val_33852 === (3))){
var inst_33849 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33851__$1,inst_33849);
} else {
if((state_val_33852 === (4))){
var inst_33832 = (state_33851[(7)]);
var inst_33832__$1 = (state_33851[(2)]);
var inst_33833 = (inst_33832__$1 == null);
var state_33851__$1 = (function (){var statearr_33854 = state_33851;
(statearr_33854[(7)] = inst_33832__$1);

return statearr_33854;
})();
if(cljs.core.truth_(inst_33833)){
var statearr_33855_33969 = state_33851__$1;
(statearr_33855_33969[(1)] = (5));

} else {
var statearr_33856_33970 = state_33851__$1;
(statearr_33856_33970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (5))){
var inst_33835 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33851__$1 = state_33851;
var statearr_33857_33971 = state_33851__$1;
(statearr_33857_33971[(2)] = inst_33835);

(statearr_33857_33971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (6))){
var inst_33837 = (state_33851[(8)]);
var inst_33832 = (state_33851[(7)]);
var inst_33837__$1 = cljs.core.async.chan.call(null,(1));
var inst_33838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33839 = [inst_33832,inst_33837__$1];
var inst_33840 = (new cljs.core.PersistentVector(null,2,(5),inst_33838,inst_33839,null));
var state_33851__$1 = (function (){var statearr_33858 = state_33851;
(statearr_33858[(8)] = inst_33837__$1);

return statearr_33858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33851__$1,(8),jobs,inst_33840);
} else {
if((state_val_33852 === (7))){
var inst_33847 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
var statearr_33859_33972 = state_33851__$1;
(statearr_33859_33972[(2)] = inst_33847);

(statearr_33859_33972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (8))){
var inst_33837 = (state_33851[(8)]);
var inst_33842 = (state_33851[(2)]);
var state_33851__$1 = (function (){var statearr_33860 = state_33851;
(statearr_33860[(9)] = inst_33842);

return statearr_33860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33851__$1,(9),results,inst_33837);
} else {
if((state_val_33852 === (9))){
var inst_33844 = (state_33851[(2)]);
var state_33851__$1 = (function (){var statearr_33861 = state_33851;
(statearr_33861[(10)] = inst_33844);

return statearr_33861;
})();
var statearr_33862_33973 = state_33851__$1;
(statearr_33862_33973[(2)] = null);

(statearr_33862_33973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___33967,jobs,results,process,async))
;
return ((function (switch__33270__auto__,c__33382__auto___33967,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0 = (function (){
var statearr_33866 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__);

(statearr_33866[(1)] = (1));

return statearr_33866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1 = (function (state_33851){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_33851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e33867){if((e33867 instanceof Object)){
var ex__33274__auto__ = e33867;
var statearr_33868_33974 = state_33851;
(statearr_33868_33974[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33975 = state_33851;
state_33851 = G__33975;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = function(state_33851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1.call(this,state_33851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___33967,jobs,results,process,async))
})();
var state__33384__auto__ = (function (){var statearr_33869 = f__33383__auto__.call(null);
(statearr_33869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___33967);

return statearr_33869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___33967,jobs,results,process,async))
);


var c__33382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto__,jobs,results,process,async){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto__,jobs,results,process,async){
return (function (state_33907){
var state_val_33908 = (state_33907[(1)]);
if((state_val_33908 === (7))){
var inst_33903 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33909_33976 = state_33907__$1;
(statearr_33909_33976[(2)] = inst_33903);

(statearr_33909_33976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (20))){
var state_33907__$1 = state_33907;
var statearr_33910_33977 = state_33907__$1;
(statearr_33910_33977[(2)] = null);

(statearr_33910_33977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (1))){
var state_33907__$1 = state_33907;
var statearr_33911_33978 = state_33907__$1;
(statearr_33911_33978[(2)] = null);

(statearr_33911_33978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (4))){
var inst_33872 = (state_33907[(7)]);
var inst_33872__$1 = (state_33907[(2)]);
var inst_33873 = (inst_33872__$1 == null);
var state_33907__$1 = (function (){var statearr_33912 = state_33907;
(statearr_33912[(7)] = inst_33872__$1);

return statearr_33912;
})();
if(cljs.core.truth_(inst_33873)){
var statearr_33913_33979 = state_33907__$1;
(statearr_33913_33979[(1)] = (5));

} else {
var statearr_33914_33980 = state_33907__$1;
(statearr_33914_33980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (15))){
var inst_33885 = (state_33907[(8)]);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33907__$1,(18),to,inst_33885);
} else {
if((state_val_33908 === (21))){
var inst_33898 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33915_33981 = state_33907__$1;
(statearr_33915_33981[(2)] = inst_33898);

(statearr_33915_33981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (13))){
var inst_33900 = (state_33907[(2)]);
var state_33907__$1 = (function (){var statearr_33916 = state_33907;
(statearr_33916[(9)] = inst_33900);

return statearr_33916;
})();
var statearr_33917_33982 = state_33907__$1;
(statearr_33917_33982[(2)] = null);

(statearr_33917_33982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (6))){
var inst_33872 = (state_33907[(7)]);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33907__$1,(11),inst_33872);
} else {
if((state_val_33908 === (17))){
var inst_33893 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
if(cljs.core.truth_(inst_33893)){
var statearr_33918_33983 = state_33907__$1;
(statearr_33918_33983[(1)] = (19));

} else {
var statearr_33919_33984 = state_33907__$1;
(statearr_33919_33984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (3))){
var inst_33905 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33907__$1,inst_33905);
} else {
if((state_val_33908 === (12))){
var inst_33882 = (state_33907[(10)]);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33907__$1,(14),inst_33882);
} else {
if((state_val_33908 === (2))){
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33907__$1,(4),results);
} else {
if((state_val_33908 === (19))){
var state_33907__$1 = state_33907;
var statearr_33920_33985 = state_33907__$1;
(statearr_33920_33985[(2)] = null);

(statearr_33920_33985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (11))){
var inst_33882 = (state_33907[(2)]);
var state_33907__$1 = (function (){var statearr_33921 = state_33907;
(statearr_33921[(10)] = inst_33882);

return statearr_33921;
})();
var statearr_33922_33986 = state_33907__$1;
(statearr_33922_33986[(2)] = null);

(statearr_33922_33986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (9))){
var state_33907__$1 = state_33907;
var statearr_33923_33987 = state_33907__$1;
(statearr_33923_33987[(2)] = null);

(statearr_33923_33987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (5))){
var state_33907__$1 = state_33907;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33924_33988 = state_33907__$1;
(statearr_33924_33988[(1)] = (8));

} else {
var statearr_33925_33989 = state_33907__$1;
(statearr_33925_33989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (14))){
var inst_33887 = (state_33907[(11)]);
var inst_33885 = (state_33907[(8)]);
var inst_33885__$1 = (state_33907[(2)]);
var inst_33886 = (inst_33885__$1 == null);
var inst_33887__$1 = cljs.core.not.call(null,inst_33886);
var state_33907__$1 = (function (){var statearr_33926 = state_33907;
(statearr_33926[(11)] = inst_33887__$1);

(statearr_33926[(8)] = inst_33885__$1);

return statearr_33926;
})();
if(inst_33887__$1){
var statearr_33927_33990 = state_33907__$1;
(statearr_33927_33990[(1)] = (15));

} else {
var statearr_33928_33991 = state_33907__$1;
(statearr_33928_33991[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (16))){
var inst_33887 = (state_33907[(11)]);
var state_33907__$1 = state_33907;
var statearr_33929_33992 = state_33907__$1;
(statearr_33929_33992[(2)] = inst_33887);

(statearr_33929_33992[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (10))){
var inst_33879 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33930_33993 = state_33907__$1;
(statearr_33930_33993[(2)] = inst_33879);

(statearr_33930_33993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (18))){
var inst_33890 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33931_33994 = state_33907__$1;
(statearr_33931_33994[(2)] = inst_33890);

(statearr_33931_33994[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (8))){
var inst_33876 = cljs.core.async.close_BANG_.call(null,to);
var state_33907__$1 = state_33907;
var statearr_33932_33995 = state_33907__$1;
(statearr_33932_33995[(2)] = inst_33876);

(statearr_33932_33995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto__,jobs,results,process,async))
;
return ((function (switch__33270__auto__,c__33382__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0 = (function (){
var statearr_33936 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33936[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__);

(statearr_33936[(1)] = (1));

return statearr_33936;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1 = (function (state_33907){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_33907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e33937){if((e33937 instanceof Object)){
var ex__33274__auto__ = e33937;
var statearr_33938_33996 = state_33907;
(statearr_33938_33996[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33997 = state_33907;
state_33907 = G__33997;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = function(state_33907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1.call(this,state_33907);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto__,jobs,results,process,async))
})();
var state__33384__auto__ = (function (){var statearr_33939 = f__33383__auto__.call(null);
(statearr_33939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto__);

return statearr_33939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto__,jobs,results,process,async))
);

return c__33382__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args33998 = [];
var len__31595__auto___34001 = arguments.length;
var i__31596__auto___34002 = (0);
while(true){
if((i__31596__auto___34002 < len__31595__auto___34001)){
args33998.push((arguments[i__31596__auto___34002]));

var G__34003 = (i__31596__auto___34002 + (1));
i__31596__auto___34002 = G__34003;
continue;
} else {
}
break;
}

var G__34000 = args33998.length;
switch (G__34000) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33998.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args34005 = [];
var len__31595__auto___34008 = arguments.length;
var i__31596__auto___34009 = (0);
while(true){
if((i__31596__auto___34009 < len__31595__auto___34008)){
args34005.push((arguments[i__31596__auto___34009]));

var G__34010 = (i__31596__auto___34009 + (1));
i__31596__auto___34009 = G__34010;
continue;
} else {
}
break;
}

var G__34007 = args34005.length;
switch (G__34007) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34005.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args34012 = [];
var len__31595__auto___34065 = arguments.length;
var i__31596__auto___34066 = (0);
while(true){
if((i__31596__auto___34066 < len__31595__auto___34065)){
args34012.push((arguments[i__31596__auto___34066]));

var G__34067 = (i__31596__auto___34066 + (1));
i__31596__auto___34066 = G__34067;
continue;
} else {
}
break;
}

var G__34014 = args34012.length;
switch (G__34014) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34012.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33382__auto___34069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___34069,tc,fc){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___34069,tc,fc){
return (function (state_34040){
var state_val_34041 = (state_34040[(1)]);
if((state_val_34041 === (7))){
var inst_34036 = (state_34040[(2)]);
var state_34040__$1 = state_34040;
var statearr_34042_34070 = state_34040__$1;
(statearr_34042_34070[(2)] = inst_34036);

(statearr_34042_34070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (1))){
var state_34040__$1 = state_34040;
var statearr_34043_34071 = state_34040__$1;
(statearr_34043_34071[(2)] = null);

(statearr_34043_34071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (4))){
var inst_34017 = (state_34040[(7)]);
var inst_34017__$1 = (state_34040[(2)]);
var inst_34018 = (inst_34017__$1 == null);
var state_34040__$1 = (function (){var statearr_34044 = state_34040;
(statearr_34044[(7)] = inst_34017__$1);

return statearr_34044;
})();
if(cljs.core.truth_(inst_34018)){
var statearr_34045_34072 = state_34040__$1;
(statearr_34045_34072[(1)] = (5));

} else {
var statearr_34046_34073 = state_34040__$1;
(statearr_34046_34073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (13))){
var state_34040__$1 = state_34040;
var statearr_34047_34074 = state_34040__$1;
(statearr_34047_34074[(2)] = null);

(statearr_34047_34074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (6))){
var inst_34017 = (state_34040[(7)]);
var inst_34023 = p.call(null,inst_34017);
var state_34040__$1 = state_34040;
if(cljs.core.truth_(inst_34023)){
var statearr_34048_34075 = state_34040__$1;
(statearr_34048_34075[(1)] = (9));

} else {
var statearr_34049_34076 = state_34040__$1;
(statearr_34049_34076[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (3))){
var inst_34038 = (state_34040[(2)]);
var state_34040__$1 = state_34040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34040__$1,inst_34038);
} else {
if((state_val_34041 === (12))){
var state_34040__$1 = state_34040;
var statearr_34050_34077 = state_34040__$1;
(statearr_34050_34077[(2)] = null);

(statearr_34050_34077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (2))){
var state_34040__$1 = state_34040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34040__$1,(4),ch);
} else {
if((state_val_34041 === (11))){
var inst_34017 = (state_34040[(7)]);
var inst_34027 = (state_34040[(2)]);
var state_34040__$1 = state_34040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34040__$1,(8),inst_34027,inst_34017);
} else {
if((state_val_34041 === (9))){
var state_34040__$1 = state_34040;
var statearr_34051_34078 = state_34040__$1;
(statearr_34051_34078[(2)] = tc);

(statearr_34051_34078[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (5))){
var inst_34020 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34021 = cljs.core.async.close_BANG_.call(null,fc);
var state_34040__$1 = (function (){var statearr_34052 = state_34040;
(statearr_34052[(8)] = inst_34020);

return statearr_34052;
})();
var statearr_34053_34079 = state_34040__$1;
(statearr_34053_34079[(2)] = inst_34021);

(statearr_34053_34079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (14))){
var inst_34034 = (state_34040[(2)]);
var state_34040__$1 = state_34040;
var statearr_34054_34080 = state_34040__$1;
(statearr_34054_34080[(2)] = inst_34034);

(statearr_34054_34080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (10))){
var state_34040__$1 = state_34040;
var statearr_34055_34081 = state_34040__$1;
(statearr_34055_34081[(2)] = fc);

(statearr_34055_34081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34041 === (8))){
var inst_34029 = (state_34040[(2)]);
var state_34040__$1 = state_34040;
if(cljs.core.truth_(inst_34029)){
var statearr_34056_34082 = state_34040__$1;
(statearr_34056_34082[(1)] = (12));

} else {
var statearr_34057_34083 = state_34040__$1;
(statearr_34057_34083[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___34069,tc,fc))
;
return ((function (switch__33270__auto__,c__33382__auto___34069,tc,fc){
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_34061 = [null,null,null,null,null,null,null,null,null];
(statearr_34061[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_34061[(1)] = (1));

return statearr_34061;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_34040){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_34040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e34062){if((e34062 instanceof Object)){
var ex__33274__auto__ = e34062;
var statearr_34063_34084 = state_34040;
(statearr_34063_34084[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34085 = state_34040;
state_34040 = G__34085;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_34040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_34040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___34069,tc,fc))
})();
var state__33384__auto__ = (function (){var statearr_34064 = f__33383__auto__.call(null);
(statearr_34064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___34069);

return statearr_34064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___34069,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto__){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto__){
return (function (state_34149){
var state_val_34150 = (state_34149[(1)]);
if((state_val_34150 === (7))){
var inst_34145 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34151_34172 = state_34149__$1;
(statearr_34151_34172[(2)] = inst_34145);

(statearr_34151_34172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (1))){
var inst_34129 = init;
var state_34149__$1 = (function (){var statearr_34152 = state_34149;
(statearr_34152[(7)] = inst_34129);

return statearr_34152;
})();
var statearr_34153_34173 = state_34149__$1;
(statearr_34153_34173[(2)] = null);

(statearr_34153_34173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (4))){
var inst_34132 = (state_34149[(8)]);
var inst_34132__$1 = (state_34149[(2)]);
var inst_34133 = (inst_34132__$1 == null);
var state_34149__$1 = (function (){var statearr_34154 = state_34149;
(statearr_34154[(8)] = inst_34132__$1);

return statearr_34154;
})();
if(cljs.core.truth_(inst_34133)){
var statearr_34155_34174 = state_34149__$1;
(statearr_34155_34174[(1)] = (5));

} else {
var statearr_34156_34175 = state_34149__$1;
(statearr_34156_34175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (6))){
var inst_34136 = (state_34149[(9)]);
var inst_34132 = (state_34149[(8)]);
var inst_34129 = (state_34149[(7)]);
var inst_34136__$1 = f.call(null,inst_34129,inst_34132);
var inst_34137 = cljs.core.reduced_QMARK_.call(null,inst_34136__$1);
var state_34149__$1 = (function (){var statearr_34157 = state_34149;
(statearr_34157[(9)] = inst_34136__$1);

return statearr_34157;
})();
if(inst_34137){
var statearr_34158_34176 = state_34149__$1;
(statearr_34158_34176[(1)] = (8));

} else {
var statearr_34159_34177 = state_34149__$1;
(statearr_34159_34177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (3))){
var inst_34147 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34149__$1,inst_34147);
} else {
if((state_val_34150 === (2))){
var state_34149__$1 = state_34149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34149__$1,(4),ch);
} else {
if((state_val_34150 === (9))){
var inst_34136 = (state_34149[(9)]);
var inst_34129 = inst_34136;
var state_34149__$1 = (function (){var statearr_34160 = state_34149;
(statearr_34160[(7)] = inst_34129);

return statearr_34160;
})();
var statearr_34161_34178 = state_34149__$1;
(statearr_34161_34178[(2)] = null);

(statearr_34161_34178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (5))){
var inst_34129 = (state_34149[(7)]);
var state_34149__$1 = state_34149;
var statearr_34162_34179 = state_34149__$1;
(statearr_34162_34179[(2)] = inst_34129);

(statearr_34162_34179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (10))){
var inst_34143 = (state_34149[(2)]);
var state_34149__$1 = state_34149;
var statearr_34163_34180 = state_34149__$1;
(statearr_34163_34180[(2)] = inst_34143);

(statearr_34163_34180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34150 === (8))){
var inst_34136 = (state_34149[(9)]);
var inst_34139 = cljs.core.deref.call(null,inst_34136);
var state_34149__$1 = state_34149;
var statearr_34164_34181 = state_34149__$1;
(statearr_34164_34181[(2)] = inst_34139);

(statearr_34164_34181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto__))
;
return ((function (switch__33270__auto__,c__33382__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33271__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33271__auto____0 = (function (){
var statearr_34168 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34168[(0)] = cljs$core$async$reduce_$_state_machine__33271__auto__);

(statearr_34168[(1)] = (1));

return statearr_34168;
});
var cljs$core$async$reduce_$_state_machine__33271__auto____1 = (function (state_34149){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_34149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e34169){if((e34169 instanceof Object)){
var ex__33274__auto__ = e34169;
var statearr_34170_34182 = state_34149;
(statearr_34170_34182[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34183 = state_34149;
state_34149 = G__34183;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33271__auto__ = function(state_34149){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33271__auto____1.call(this,state_34149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33271__auto____0;
cljs$core$async$reduce_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33271__auto____1;
return cljs$core$async$reduce_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto__))
})();
var state__33384__auto__ = (function (){var statearr_34171 = f__33383__auto__.call(null);
(statearr_34171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto__);

return statearr_34171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto__))
);

return c__33382__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args34184 = [];
var len__31595__auto___34236 = arguments.length;
var i__31596__auto___34237 = (0);
while(true){
if((i__31596__auto___34237 < len__31595__auto___34236)){
args34184.push((arguments[i__31596__auto___34237]));

var G__34238 = (i__31596__auto___34237 + (1));
i__31596__auto___34237 = G__34238;
continue;
} else {
}
break;
}

var G__34186 = args34184.length;
switch (G__34186) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34184.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto__){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto__){
return (function (state_34211){
var state_val_34212 = (state_34211[(1)]);
if((state_val_34212 === (7))){
var inst_34193 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34213_34240 = state_34211__$1;
(statearr_34213_34240[(2)] = inst_34193);

(statearr_34213_34240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (1))){
var inst_34187 = cljs.core.seq.call(null,coll);
var inst_34188 = inst_34187;
var state_34211__$1 = (function (){var statearr_34214 = state_34211;
(statearr_34214[(7)] = inst_34188);

return statearr_34214;
})();
var statearr_34215_34241 = state_34211__$1;
(statearr_34215_34241[(2)] = null);

(statearr_34215_34241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (4))){
var inst_34188 = (state_34211[(7)]);
var inst_34191 = cljs.core.first.call(null,inst_34188);
var state_34211__$1 = state_34211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34211__$1,(7),ch,inst_34191);
} else {
if((state_val_34212 === (13))){
var inst_34205 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34216_34242 = state_34211__$1;
(statearr_34216_34242[(2)] = inst_34205);

(statearr_34216_34242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (6))){
var inst_34196 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
if(cljs.core.truth_(inst_34196)){
var statearr_34217_34243 = state_34211__$1;
(statearr_34217_34243[(1)] = (8));

} else {
var statearr_34218_34244 = state_34211__$1;
(statearr_34218_34244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (3))){
var inst_34209 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34211__$1,inst_34209);
} else {
if((state_val_34212 === (12))){
var state_34211__$1 = state_34211;
var statearr_34219_34245 = state_34211__$1;
(statearr_34219_34245[(2)] = null);

(statearr_34219_34245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (2))){
var inst_34188 = (state_34211[(7)]);
var state_34211__$1 = state_34211;
if(cljs.core.truth_(inst_34188)){
var statearr_34220_34246 = state_34211__$1;
(statearr_34220_34246[(1)] = (4));

} else {
var statearr_34221_34247 = state_34211__$1;
(statearr_34221_34247[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (11))){
var inst_34202 = cljs.core.async.close_BANG_.call(null,ch);
var state_34211__$1 = state_34211;
var statearr_34222_34248 = state_34211__$1;
(statearr_34222_34248[(2)] = inst_34202);

(statearr_34222_34248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (9))){
var state_34211__$1 = state_34211;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34223_34249 = state_34211__$1;
(statearr_34223_34249[(1)] = (11));

} else {
var statearr_34224_34250 = state_34211__$1;
(statearr_34224_34250[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (5))){
var inst_34188 = (state_34211[(7)]);
var state_34211__$1 = state_34211;
var statearr_34225_34251 = state_34211__$1;
(statearr_34225_34251[(2)] = inst_34188);

(statearr_34225_34251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (10))){
var inst_34207 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34226_34252 = state_34211__$1;
(statearr_34226_34252[(2)] = inst_34207);

(statearr_34226_34252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (8))){
var inst_34188 = (state_34211[(7)]);
var inst_34198 = cljs.core.next.call(null,inst_34188);
var inst_34188__$1 = inst_34198;
var state_34211__$1 = (function (){var statearr_34227 = state_34211;
(statearr_34227[(7)] = inst_34188__$1);

return statearr_34227;
})();
var statearr_34228_34253 = state_34211__$1;
(statearr_34228_34253[(2)] = null);

(statearr_34228_34253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto__))
;
return ((function (switch__33270__auto__,c__33382__auto__){
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_34232 = [null,null,null,null,null,null,null,null];
(statearr_34232[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_34232[(1)] = (1));

return statearr_34232;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_34211){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_34211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e34233){if((e34233 instanceof Object)){
var ex__33274__auto__ = e34233;
var statearr_34234_34254 = state_34211;
(statearr_34234_34254[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34255 = state_34211;
state_34211 = G__34255;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_34211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_34211);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto__))
})();
var state__33384__auto__ = (function (){var statearr_34235 = f__33383__auto__.call(null);
(statearr_34235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto__);

return statearr_34235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto__))
);

return c__33382__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__31150__auto__ = (((_ == null))?null:_);
var m__31151__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,_);
} else {
var m__31151__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__31150__auto__ = (((m == null))?null:m);
var m__31151__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31151__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__31150__auto__ = (((m == null))?null:m);
var m__31151__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,m,ch);
} else {
var m__31151__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__31150__auto__ = (((m == null))?null:m);
var m__31151__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,m);
} else {
var m__31151__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34481 = (function (ch,cs,meta34482){
this.ch = ch;
this.cs = cs;
this.meta34482 = meta34482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34483,meta34482__$1){
var self__ = this;
var _34483__$1 = this;
return (new cljs.core.async.t_cljs$core$async34481(self__.ch,self__.cs,meta34482__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34483){
var self__ = this;
var _34483__$1 = this;
return self__.meta34482;
});})(cs))
;

cljs.core.async.t_cljs$core$async34481.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34481.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34481.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34481.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34481.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34481.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34481.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34482","meta34482",1361470147,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34481";

cljs.core.async.t_cljs$core$async34481.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31093__auto__,writer__31094__auto__,opt__31095__auto__){
return cljs.core._write.call(null,writer__31094__auto__,"cljs.core.async/t_cljs$core$async34481");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34481 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34481(ch__$1,cs__$1,meta34482){
return (new cljs.core.async.t_cljs$core$async34481(ch__$1,cs__$1,meta34482));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34481(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33382__auto___34706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___34706,cs,m,dchan,dctr,done){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___34706,cs,m,dchan,dctr,done){
return (function (state_34618){
var state_val_34619 = (state_34618[(1)]);
if((state_val_34619 === (7))){
var inst_34614 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34620_34707 = state_34618__$1;
(statearr_34620_34707[(2)] = inst_34614);

(statearr_34620_34707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (20))){
var inst_34517 = (state_34618[(7)]);
var inst_34529 = cljs.core.first.call(null,inst_34517);
var inst_34530 = cljs.core.nth.call(null,inst_34529,(0),null);
var inst_34531 = cljs.core.nth.call(null,inst_34529,(1),null);
var state_34618__$1 = (function (){var statearr_34621 = state_34618;
(statearr_34621[(8)] = inst_34530);

return statearr_34621;
})();
if(cljs.core.truth_(inst_34531)){
var statearr_34622_34708 = state_34618__$1;
(statearr_34622_34708[(1)] = (22));

} else {
var statearr_34623_34709 = state_34618__$1;
(statearr_34623_34709[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (27))){
var inst_34559 = (state_34618[(9)]);
var inst_34561 = (state_34618[(10)]);
var inst_34486 = (state_34618[(11)]);
var inst_34566 = (state_34618[(12)]);
var inst_34566__$1 = cljs.core._nth.call(null,inst_34559,inst_34561);
var inst_34567 = cljs.core.async.put_BANG_.call(null,inst_34566__$1,inst_34486,done);
var state_34618__$1 = (function (){var statearr_34624 = state_34618;
(statearr_34624[(12)] = inst_34566__$1);

return statearr_34624;
})();
if(cljs.core.truth_(inst_34567)){
var statearr_34625_34710 = state_34618__$1;
(statearr_34625_34710[(1)] = (30));

} else {
var statearr_34626_34711 = state_34618__$1;
(statearr_34626_34711[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (1))){
var state_34618__$1 = state_34618;
var statearr_34627_34712 = state_34618__$1;
(statearr_34627_34712[(2)] = null);

(statearr_34627_34712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (24))){
var inst_34517 = (state_34618[(7)]);
var inst_34536 = (state_34618[(2)]);
var inst_34537 = cljs.core.next.call(null,inst_34517);
var inst_34495 = inst_34537;
var inst_34496 = null;
var inst_34497 = (0);
var inst_34498 = (0);
var state_34618__$1 = (function (){var statearr_34628 = state_34618;
(statearr_34628[(13)] = inst_34536);

(statearr_34628[(14)] = inst_34498);

(statearr_34628[(15)] = inst_34497);

(statearr_34628[(16)] = inst_34495);

(statearr_34628[(17)] = inst_34496);

return statearr_34628;
})();
var statearr_34629_34713 = state_34618__$1;
(statearr_34629_34713[(2)] = null);

(statearr_34629_34713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (39))){
var state_34618__$1 = state_34618;
var statearr_34633_34714 = state_34618__$1;
(statearr_34633_34714[(2)] = null);

(statearr_34633_34714[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (4))){
var inst_34486 = (state_34618[(11)]);
var inst_34486__$1 = (state_34618[(2)]);
var inst_34487 = (inst_34486__$1 == null);
var state_34618__$1 = (function (){var statearr_34634 = state_34618;
(statearr_34634[(11)] = inst_34486__$1);

return statearr_34634;
})();
if(cljs.core.truth_(inst_34487)){
var statearr_34635_34715 = state_34618__$1;
(statearr_34635_34715[(1)] = (5));

} else {
var statearr_34636_34716 = state_34618__$1;
(statearr_34636_34716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (15))){
var inst_34498 = (state_34618[(14)]);
var inst_34497 = (state_34618[(15)]);
var inst_34495 = (state_34618[(16)]);
var inst_34496 = (state_34618[(17)]);
var inst_34513 = (state_34618[(2)]);
var inst_34514 = (inst_34498 + (1));
var tmp34630 = inst_34497;
var tmp34631 = inst_34495;
var tmp34632 = inst_34496;
var inst_34495__$1 = tmp34631;
var inst_34496__$1 = tmp34632;
var inst_34497__$1 = tmp34630;
var inst_34498__$1 = inst_34514;
var state_34618__$1 = (function (){var statearr_34637 = state_34618;
(statearr_34637[(18)] = inst_34513);

(statearr_34637[(14)] = inst_34498__$1);

(statearr_34637[(15)] = inst_34497__$1);

(statearr_34637[(16)] = inst_34495__$1);

(statearr_34637[(17)] = inst_34496__$1);

return statearr_34637;
})();
var statearr_34638_34717 = state_34618__$1;
(statearr_34638_34717[(2)] = null);

(statearr_34638_34717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (21))){
var inst_34540 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34642_34718 = state_34618__$1;
(statearr_34642_34718[(2)] = inst_34540);

(statearr_34642_34718[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (31))){
var inst_34566 = (state_34618[(12)]);
var inst_34570 = done.call(null,null);
var inst_34571 = cljs.core.async.untap_STAR_.call(null,m,inst_34566);
var state_34618__$1 = (function (){var statearr_34643 = state_34618;
(statearr_34643[(19)] = inst_34570);

return statearr_34643;
})();
var statearr_34644_34719 = state_34618__$1;
(statearr_34644_34719[(2)] = inst_34571);

(statearr_34644_34719[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (32))){
var inst_34560 = (state_34618[(20)]);
var inst_34558 = (state_34618[(21)]);
var inst_34559 = (state_34618[(9)]);
var inst_34561 = (state_34618[(10)]);
var inst_34573 = (state_34618[(2)]);
var inst_34574 = (inst_34561 + (1));
var tmp34639 = inst_34560;
var tmp34640 = inst_34558;
var tmp34641 = inst_34559;
var inst_34558__$1 = tmp34640;
var inst_34559__$1 = tmp34641;
var inst_34560__$1 = tmp34639;
var inst_34561__$1 = inst_34574;
var state_34618__$1 = (function (){var statearr_34645 = state_34618;
(statearr_34645[(20)] = inst_34560__$1);

(statearr_34645[(21)] = inst_34558__$1);

(statearr_34645[(9)] = inst_34559__$1);

(statearr_34645[(10)] = inst_34561__$1);

(statearr_34645[(22)] = inst_34573);

return statearr_34645;
})();
var statearr_34646_34720 = state_34618__$1;
(statearr_34646_34720[(2)] = null);

(statearr_34646_34720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (40))){
var inst_34586 = (state_34618[(23)]);
var inst_34590 = done.call(null,null);
var inst_34591 = cljs.core.async.untap_STAR_.call(null,m,inst_34586);
var state_34618__$1 = (function (){var statearr_34647 = state_34618;
(statearr_34647[(24)] = inst_34590);

return statearr_34647;
})();
var statearr_34648_34721 = state_34618__$1;
(statearr_34648_34721[(2)] = inst_34591);

(statearr_34648_34721[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (33))){
var inst_34577 = (state_34618[(25)]);
var inst_34579 = cljs.core.chunked_seq_QMARK_.call(null,inst_34577);
var state_34618__$1 = state_34618;
if(inst_34579){
var statearr_34649_34722 = state_34618__$1;
(statearr_34649_34722[(1)] = (36));

} else {
var statearr_34650_34723 = state_34618__$1;
(statearr_34650_34723[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (13))){
var inst_34507 = (state_34618[(26)]);
var inst_34510 = cljs.core.async.close_BANG_.call(null,inst_34507);
var state_34618__$1 = state_34618;
var statearr_34651_34724 = state_34618__$1;
(statearr_34651_34724[(2)] = inst_34510);

(statearr_34651_34724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (22))){
var inst_34530 = (state_34618[(8)]);
var inst_34533 = cljs.core.async.close_BANG_.call(null,inst_34530);
var state_34618__$1 = state_34618;
var statearr_34652_34725 = state_34618__$1;
(statearr_34652_34725[(2)] = inst_34533);

(statearr_34652_34725[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (36))){
var inst_34577 = (state_34618[(25)]);
var inst_34581 = cljs.core.chunk_first.call(null,inst_34577);
var inst_34582 = cljs.core.chunk_rest.call(null,inst_34577);
var inst_34583 = cljs.core.count.call(null,inst_34581);
var inst_34558 = inst_34582;
var inst_34559 = inst_34581;
var inst_34560 = inst_34583;
var inst_34561 = (0);
var state_34618__$1 = (function (){var statearr_34653 = state_34618;
(statearr_34653[(20)] = inst_34560);

(statearr_34653[(21)] = inst_34558);

(statearr_34653[(9)] = inst_34559);

(statearr_34653[(10)] = inst_34561);

return statearr_34653;
})();
var statearr_34654_34726 = state_34618__$1;
(statearr_34654_34726[(2)] = null);

(statearr_34654_34726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (41))){
var inst_34577 = (state_34618[(25)]);
var inst_34593 = (state_34618[(2)]);
var inst_34594 = cljs.core.next.call(null,inst_34577);
var inst_34558 = inst_34594;
var inst_34559 = null;
var inst_34560 = (0);
var inst_34561 = (0);
var state_34618__$1 = (function (){var statearr_34655 = state_34618;
(statearr_34655[(20)] = inst_34560);

(statearr_34655[(21)] = inst_34558);

(statearr_34655[(9)] = inst_34559);

(statearr_34655[(10)] = inst_34561);

(statearr_34655[(27)] = inst_34593);

return statearr_34655;
})();
var statearr_34656_34727 = state_34618__$1;
(statearr_34656_34727[(2)] = null);

(statearr_34656_34727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (43))){
var state_34618__$1 = state_34618;
var statearr_34657_34728 = state_34618__$1;
(statearr_34657_34728[(2)] = null);

(statearr_34657_34728[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (29))){
var inst_34602 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34658_34729 = state_34618__$1;
(statearr_34658_34729[(2)] = inst_34602);

(statearr_34658_34729[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (44))){
var inst_34611 = (state_34618[(2)]);
var state_34618__$1 = (function (){var statearr_34659 = state_34618;
(statearr_34659[(28)] = inst_34611);

return statearr_34659;
})();
var statearr_34660_34730 = state_34618__$1;
(statearr_34660_34730[(2)] = null);

(statearr_34660_34730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (6))){
var inst_34550 = (state_34618[(29)]);
var inst_34549 = cljs.core.deref.call(null,cs);
var inst_34550__$1 = cljs.core.keys.call(null,inst_34549);
var inst_34551 = cljs.core.count.call(null,inst_34550__$1);
var inst_34552 = cljs.core.reset_BANG_.call(null,dctr,inst_34551);
var inst_34557 = cljs.core.seq.call(null,inst_34550__$1);
var inst_34558 = inst_34557;
var inst_34559 = null;
var inst_34560 = (0);
var inst_34561 = (0);
var state_34618__$1 = (function (){var statearr_34661 = state_34618;
(statearr_34661[(20)] = inst_34560);

(statearr_34661[(21)] = inst_34558);

(statearr_34661[(30)] = inst_34552);

(statearr_34661[(29)] = inst_34550__$1);

(statearr_34661[(9)] = inst_34559);

(statearr_34661[(10)] = inst_34561);

return statearr_34661;
})();
var statearr_34662_34731 = state_34618__$1;
(statearr_34662_34731[(2)] = null);

(statearr_34662_34731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (28))){
var inst_34558 = (state_34618[(21)]);
var inst_34577 = (state_34618[(25)]);
var inst_34577__$1 = cljs.core.seq.call(null,inst_34558);
var state_34618__$1 = (function (){var statearr_34663 = state_34618;
(statearr_34663[(25)] = inst_34577__$1);

return statearr_34663;
})();
if(inst_34577__$1){
var statearr_34664_34732 = state_34618__$1;
(statearr_34664_34732[(1)] = (33));

} else {
var statearr_34665_34733 = state_34618__$1;
(statearr_34665_34733[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (25))){
var inst_34560 = (state_34618[(20)]);
var inst_34561 = (state_34618[(10)]);
var inst_34563 = (inst_34561 < inst_34560);
var inst_34564 = inst_34563;
var state_34618__$1 = state_34618;
if(cljs.core.truth_(inst_34564)){
var statearr_34666_34734 = state_34618__$1;
(statearr_34666_34734[(1)] = (27));

} else {
var statearr_34667_34735 = state_34618__$1;
(statearr_34667_34735[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (34))){
var state_34618__$1 = state_34618;
var statearr_34668_34736 = state_34618__$1;
(statearr_34668_34736[(2)] = null);

(statearr_34668_34736[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (17))){
var state_34618__$1 = state_34618;
var statearr_34669_34737 = state_34618__$1;
(statearr_34669_34737[(2)] = null);

(statearr_34669_34737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (3))){
var inst_34616 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34618__$1,inst_34616);
} else {
if((state_val_34619 === (12))){
var inst_34545 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34670_34738 = state_34618__$1;
(statearr_34670_34738[(2)] = inst_34545);

(statearr_34670_34738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (2))){
var state_34618__$1 = state_34618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34618__$1,(4),ch);
} else {
if((state_val_34619 === (23))){
var state_34618__$1 = state_34618;
var statearr_34671_34739 = state_34618__$1;
(statearr_34671_34739[(2)] = null);

(statearr_34671_34739[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (35))){
var inst_34600 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34672_34740 = state_34618__$1;
(statearr_34672_34740[(2)] = inst_34600);

(statearr_34672_34740[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (19))){
var inst_34517 = (state_34618[(7)]);
var inst_34521 = cljs.core.chunk_first.call(null,inst_34517);
var inst_34522 = cljs.core.chunk_rest.call(null,inst_34517);
var inst_34523 = cljs.core.count.call(null,inst_34521);
var inst_34495 = inst_34522;
var inst_34496 = inst_34521;
var inst_34497 = inst_34523;
var inst_34498 = (0);
var state_34618__$1 = (function (){var statearr_34673 = state_34618;
(statearr_34673[(14)] = inst_34498);

(statearr_34673[(15)] = inst_34497);

(statearr_34673[(16)] = inst_34495);

(statearr_34673[(17)] = inst_34496);

return statearr_34673;
})();
var statearr_34674_34741 = state_34618__$1;
(statearr_34674_34741[(2)] = null);

(statearr_34674_34741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (11))){
var inst_34495 = (state_34618[(16)]);
var inst_34517 = (state_34618[(7)]);
var inst_34517__$1 = cljs.core.seq.call(null,inst_34495);
var state_34618__$1 = (function (){var statearr_34675 = state_34618;
(statearr_34675[(7)] = inst_34517__$1);

return statearr_34675;
})();
if(inst_34517__$1){
var statearr_34676_34742 = state_34618__$1;
(statearr_34676_34742[(1)] = (16));

} else {
var statearr_34677_34743 = state_34618__$1;
(statearr_34677_34743[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (9))){
var inst_34547 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34678_34744 = state_34618__$1;
(statearr_34678_34744[(2)] = inst_34547);

(statearr_34678_34744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (5))){
var inst_34493 = cljs.core.deref.call(null,cs);
var inst_34494 = cljs.core.seq.call(null,inst_34493);
var inst_34495 = inst_34494;
var inst_34496 = null;
var inst_34497 = (0);
var inst_34498 = (0);
var state_34618__$1 = (function (){var statearr_34679 = state_34618;
(statearr_34679[(14)] = inst_34498);

(statearr_34679[(15)] = inst_34497);

(statearr_34679[(16)] = inst_34495);

(statearr_34679[(17)] = inst_34496);

return statearr_34679;
})();
var statearr_34680_34745 = state_34618__$1;
(statearr_34680_34745[(2)] = null);

(statearr_34680_34745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (14))){
var state_34618__$1 = state_34618;
var statearr_34681_34746 = state_34618__$1;
(statearr_34681_34746[(2)] = null);

(statearr_34681_34746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (45))){
var inst_34608 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34682_34747 = state_34618__$1;
(statearr_34682_34747[(2)] = inst_34608);

(statearr_34682_34747[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (26))){
var inst_34550 = (state_34618[(29)]);
var inst_34604 = (state_34618[(2)]);
var inst_34605 = cljs.core.seq.call(null,inst_34550);
var state_34618__$1 = (function (){var statearr_34683 = state_34618;
(statearr_34683[(31)] = inst_34604);

return statearr_34683;
})();
if(inst_34605){
var statearr_34684_34748 = state_34618__$1;
(statearr_34684_34748[(1)] = (42));

} else {
var statearr_34685_34749 = state_34618__$1;
(statearr_34685_34749[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (16))){
var inst_34517 = (state_34618[(7)]);
var inst_34519 = cljs.core.chunked_seq_QMARK_.call(null,inst_34517);
var state_34618__$1 = state_34618;
if(inst_34519){
var statearr_34686_34750 = state_34618__$1;
(statearr_34686_34750[(1)] = (19));

} else {
var statearr_34687_34751 = state_34618__$1;
(statearr_34687_34751[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (38))){
var inst_34597 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34688_34752 = state_34618__$1;
(statearr_34688_34752[(2)] = inst_34597);

(statearr_34688_34752[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (30))){
var state_34618__$1 = state_34618;
var statearr_34689_34753 = state_34618__$1;
(statearr_34689_34753[(2)] = null);

(statearr_34689_34753[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (10))){
var inst_34498 = (state_34618[(14)]);
var inst_34496 = (state_34618[(17)]);
var inst_34506 = cljs.core._nth.call(null,inst_34496,inst_34498);
var inst_34507 = cljs.core.nth.call(null,inst_34506,(0),null);
var inst_34508 = cljs.core.nth.call(null,inst_34506,(1),null);
var state_34618__$1 = (function (){var statearr_34690 = state_34618;
(statearr_34690[(26)] = inst_34507);

return statearr_34690;
})();
if(cljs.core.truth_(inst_34508)){
var statearr_34691_34754 = state_34618__$1;
(statearr_34691_34754[(1)] = (13));

} else {
var statearr_34692_34755 = state_34618__$1;
(statearr_34692_34755[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (18))){
var inst_34543 = (state_34618[(2)]);
var state_34618__$1 = state_34618;
var statearr_34693_34756 = state_34618__$1;
(statearr_34693_34756[(2)] = inst_34543);

(statearr_34693_34756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (42))){
var state_34618__$1 = state_34618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34618__$1,(45),dchan);
} else {
if((state_val_34619 === (37))){
var inst_34586 = (state_34618[(23)]);
var inst_34577 = (state_34618[(25)]);
var inst_34486 = (state_34618[(11)]);
var inst_34586__$1 = cljs.core.first.call(null,inst_34577);
var inst_34587 = cljs.core.async.put_BANG_.call(null,inst_34586__$1,inst_34486,done);
var state_34618__$1 = (function (){var statearr_34694 = state_34618;
(statearr_34694[(23)] = inst_34586__$1);

return statearr_34694;
})();
if(cljs.core.truth_(inst_34587)){
var statearr_34695_34757 = state_34618__$1;
(statearr_34695_34757[(1)] = (39));

} else {
var statearr_34696_34758 = state_34618__$1;
(statearr_34696_34758[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34619 === (8))){
var inst_34498 = (state_34618[(14)]);
var inst_34497 = (state_34618[(15)]);
var inst_34500 = (inst_34498 < inst_34497);
var inst_34501 = inst_34500;
var state_34618__$1 = state_34618;
if(cljs.core.truth_(inst_34501)){
var statearr_34697_34759 = state_34618__$1;
(statearr_34697_34759[(1)] = (10));

} else {
var statearr_34698_34760 = state_34618__$1;
(statearr_34698_34760[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___34706,cs,m,dchan,dctr,done))
;
return ((function (switch__33270__auto__,c__33382__auto___34706,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33271__auto__ = null;
var cljs$core$async$mult_$_state_machine__33271__auto____0 = (function (){
var statearr_34702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34702[(0)] = cljs$core$async$mult_$_state_machine__33271__auto__);

(statearr_34702[(1)] = (1));

return statearr_34702;
});
var cljs$core$async$mult_$_state_machine__33271__auto____1 = (function (state_34618){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_34618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e34703){if((e34703 instanceof Object)){
var ex__33274__auto__ = e34703;
var statearr_34704_34761 = state_34618;
(statearr_34704_34761[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34762 = state_34618;
state_34618 = G__34762;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33271__auto__ = function(state_34618){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33271__auto____1.call(this,state_34618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33271__auto____0;
cljs$core$async$mult_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33271__auto____1;
return cljs$core$async$mult_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___34706,cs,m,dchan,dctr,done))
})();
var state__33384__auto__ = (function (){var statearr_34705 = f__33383__auto__.call(null);
(statearr_34705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___34706);

return statearr_34705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___34706,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args34763 = [];
var len__31595__auto___34766 = arguments.length;
var i__31596__auto___34767 = (0);
while(true){
if((i__31596__auto___34767 < len__31595__auto___34766)){
args34763.push((arguments[i__31596__auto___34767]));

var G__34768 = (i__31596__auto___34767 + (1));
i__31596__auto___34767 = G__34768;
continue;
} else {
}
break;
}

var G__34765 = args34763.length;
switch (G__34765) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34763.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__31150__auto__ = (((m == null))?null:m);
var m__31151__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,m,ch);
} else {
var m__31151__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__31150__auto__ = (((m == null))?null:m);
var m__31151__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,m,ch);
} else {
var m__31151__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__31150__auto__ = (((m == null))?null:m);
var m__31151__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,m);
} else {
var m__31151__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__31150__auto__ = (((m == null))?null:m);
var m__31151__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,m,state_map);
} else {
var m__31151__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__31150__auto__ = (((m == null))?null:m);
var m__31151__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,m,mode);
} else {
var m__31151__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31602__auto__ = [];
var len__31595__auto___34780 = arguments.length;
var i__31596__auto___34781 = (0);
while(true){
if((i__31596__auto___34781 < len__31595__auto___34780)){
args__31602__auto__.push((arguments[i__31596__auto___34781]));

var G__34782 = (i__31596__auto___34781 + (1));
i__31596__auto___34781 = G__34782;
continue;
} else {
}
break;
}

var argseq__31603__auto__ = ((((3) < args__31602__auto__.length))?(new cljs.core.IndexedSeq(args__31602__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31603__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34774){
var map__34775 = p__34774;
var map__34775__$1 = ((((!((map__34775 == null)))?((((map__34775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34775):map__34775);
var opts = map__34775__$1;
var statearr_34777_34783 = state;
(statearr_34777_34783[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34775,map__34775__$1,opts){
return (function (val){
var statearr_34778_34784 = state;
(statearr_34778_34784[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34775,map__34775__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34779_34785 = state;
(statearr_34779_34785[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34770){
var G__34771 = cljs.core.first.call(null,seq34770);
var seq34770__$1 = cljs.core.next.call(null,seq34770);
var G__34772 = cljs.core.first.call(null,seq34770__$1);
var seq34770__$2 = cljs.core.next.call(null,seq34770__$1);
var G__34773 = cljs.core.first.call(null,seq34770__$2);
var seq34770__$3 = cljs.core.next.call(null,seq34770__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34771,G__34772,G__34773,seq34770__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34953 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34953 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34954){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34954 = meta34954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34955,meta34954__$1){
var self__ = this;
var _34955__$1 = this;
return (new cljs.core.async.t_cljs$core$async34953(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34954__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34953.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34955){
var self__ = this;
var _34955__$1 = this;
return self__.meta34954;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34953.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34953.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34953.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34953.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34953.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34953.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34953.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34953.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34953.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34954","meta34954",1856908407,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34953.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34953";

cljs.core.async.t_cljs$core$async34953.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31093__auto__,writer__31094__auto__,opt__31095__auto__){
return cljs.core._write.call(null,writer__31094__auto__,"cljs.core.async/t_cljs$core$async34953");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34953 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34953(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34954){
return (new cljs.core.async.t_cljs$core$async34953(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34954));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34953(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33382__auto___35120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___35120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___35120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35057){
var state_val_35058 = (state_35057[(1)]);
if((state_val_35058 === (7))){
var inst_34972 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35059_35121 = state_35057__$1;
(statearr_35059_35121[(2)] = inst_34972);

(statearr_35059_35121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (20))){
var inst_34984 = (state_35057[(7)]);
var state_35057__$1 = state_35057;
var statearr_35060_35122 = state_35057__$1;
(statearr_35060_35122[(2)] = inst_34984);

(statearr_35060_35122[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (27))){
var state_35057__$1 = state_35057;
var statearr_35061_35123 = state_35057__$1;
(statearr_35061_35123[(2)] = null);

(statearr_35061_35123[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (1))){
var inst_34959 = (state_35057[(8)]);
var inst_34959__$1 = calc_state.call(null);
var inst_34961 = (inst_34959__$1 == null);
var inst_34962 = cljs.core.not.call(null,inst_34961);
var state_35057__$1 = (function (){var statearr_35062 = state_35057;
(statearr_35062[(8)] = inst_34959__$1);

return statearr_35062;
})();
if(inst_34962){
var statearr_35063_35124 = state_35057__$1;
(statearr_35063_35124[(1)] = (2));

} else {
var statearr_35064_35125 = state_35057__$1;
(statearr_35064_35125[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (24))){
var inst_35008 = (state_35057[(9)]);
var inst_35017 = (state_35057[(10)]);
var inst_35031 = (state_35057[(11)]);
var inst_35031__$1 = inst_35008.call(null,inst_35017);
var state_35057__$1 = (function (){var statearr_35065 = state_35057;
(statearr_35065[(11)] = inst_35031__$1);

return statearr_35065;
})();
if(cljs.core.truth_(inst_35031__$1)){
var statearr_35066_35126 = state_35057__$1;
(statearr_35066_35126[(1)] = (29));

} else {
var statearr_35067_35127 = state_35057__$1;
(statearr_35067_35127[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (4))){
var inst_34975 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
if(cljs.core.truth_(inst_34975)){
var statearr_35068_35128 = state_35057__$1;
(statearr_35068_35128[(1)] = (8));

} else {
var statearr_35069_35129 = state_35057__$1;
(statearr_35069_35129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (15))){
var inst_35002 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
if(cljs.core.truth_(inst_35002)){
var statearr_35070_35130 = state_35057__$1;
(statearr_35070_35130[(1)] = (19));

} else {
var statearr_35071_35131 = state_35057__$1;
(statearr_35071_35131[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (21))){
var inst_35007 = (state_35057[(12)]);
var inst_35007__$1 = (state_35057[(2)]);
var inst_35008 = cljs.core.get.call(null,inst_35007__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35009 = cljs.core.get.call(null,inst_35007__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35010 = cljs.core.get.call(null,inst_35007__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35057__$1 = (function (){var statearr_35072 = state_35057;
(statearr_35072[(9)] = inst_35008);

(statearr_35072[(13)] = inst_35009);

(statearr_35072[(12)] = inst_35007__$1);

return statearr_35072;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35057__$1,(22),inst_35010);
} else {
if((state_val_35058 === (31))){
var inst_35039 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
if(cljs.core.truth_(inst_35039)){
var statearr_35073_35132 = state_35057__$1;
(statearr_35073_35132[(1)] = (32));

} else {
var statearr_35074_35133 = state_35057__$1;
(statearr_35074_35133[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (32))){
var inst_35016 = (state_35057[(14)]);
var state_35057__$1 = state_35057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35057__$1,(35),out,inst_35016);
} else {
if((state_val_35058 === (33))){
var inst_35007 = (state_35057[(12)]);
var inst_34984 = inst_35007;
var state_35057__$1 = (function (){var statearr_35075 = state_35057;
(statearr_35075[(7)] = inst_34984);

return statearr_35075;
})();
var statearr_35076_35134 = state_35057__$1;
(statearr_35076_35134[(2)] = null);

(statearr_35076_35134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (13))){
var inst_34984 = (state_35057[(7)]);
var inst_34991 = inst_34984.cljs$lang$protocol_mask$partition0$;
var inst_34992 = (inst_34991 & (64));
var inst_34993 = inst_34984.cljs$core$ISeq$;
var inst_34994 = (cljs.core.PROTOCOL_SENTINEL === inst_34993);
var inst_34995 = (inst_34992) || (inst_34994);
var state_35057__$1 = state_35057;
if(cljs.core.truth_(inst_34995)){
var statearr_35077_35135 = state_35057__$1;
(statearr_35077_35135[(1)] = (16));

} else {
var statearr_35078_35136 = state_35057__$1;
(statearr_35078_35136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (22))){
var inst_35017 = (state_35057[(10)]);
var inst_35016 = (state_35057[(14)]);
var inst_35015 = (state_35057[(2)]);
var inst_35016__$1 = cljs.core.nth.call(null,inst_35015,(0),null);
var inst_35017__$1 = cljs.core.nth.call(null,inst_35015,(1),null);
var inst_35018 = (inst_35016__$1 == null);
var inst_35019 = cljs.core._EQ_.call(null,inst_35017__$1,change);
var inst_35020 = (inst_35018) || (inst_35019);
var state_35057__$1 = (function (){var statearr_35079 = state_35057;
(statearr_35079[(10)] = inst_35017__$1);

(statearr_35079[(14)] = inst_35016__$1);

return statearr_35079;
})();
if(cljs.core.truth_(inst_35020)){
var statearr_35080_35137 = state_35057__$1;
(statearr_35080_35137[(1)] = (23));

} else {
var statearr_35081_35138 = state_35057__$1;
(statearr_35081_35138[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (36))){
var inst_35007 = (state_35057[(12)]);
var inst_34984 = inst_35007;
var state_35057__$1 = (function (){var statearr_35082 = state_35057;
(statearr_35082[(7)] = inst_34984);

return statearr_35082;
})();
var statearr_35083_35139 = state_35057__$1;
(statearr_35083_35139[(2)] = null);

(statearr_35083_35139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (29))){
var inst_35031 = (state_35057[(11)]);
var state_35057__$1 = state_35057;
var statearr_35084_35140 = state_35057__$1;
(statearr_35084_35140[(2)] = inst_35031);

(statearr_35084_35140[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (6))){
var state_35057__$1 = state_35057;
var statearr_35085_35141 = state_35057__$1;
(statearr_35085_35141[(2)] = false);

(statearr_35085_35141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (28))){
var inst_35027 = (state_35057[(2)]);
var inst_35028 = calc_state.call(null);
var inst_34984 = inst_35028;
var state_35057__$1 = (function (){var statearr_35086 = state_35057;
(statearr_35086[(15)] = inst_35027);

(statearr_35086[(7)] = inst_34984);

return statearr_35086;
})();
var statearr_35087_35142 = state_35057__$1;
(statearr_35087_35142[(2)] = null);

(statearr_35087_35142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (25))){
var inst_35053 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35088_35143 = state_35057__$1;
(statearr_35088_35143[(2)] = inst_35053);

(statearr_35088_35143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (34))){
var inst_35051 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35089_35144 = state_35057__$1;
(statearr_35089_35144[(2)] = inst_35051);

(statearr_35089_35144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (17))){
var state_35057__$1 = state_35057;
var statearr_35090_35145 = state_35057__$1;
(statearr_35090_35145[(2)] = false);

(statearr_35090_35145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (3))){
var state_35057__$1 = state_35057;
var statearr_35091_35146 = state_35057__$1;
(statearr_35091_35146[(2)] = false);

(statearr_35091_35146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (12))){
var inst_35055 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35057__$1,inst_35055);
} else {
if((state_val_35058 === (2))){
var inst_34959 = (state_35057[(8)]);
var inst_34964 = inst_34959.cljs$lang$protocol_mask$partition0$;
var inst_34965 = (inst_34964 & (64));
var inst_34966 = inst_34959.cljs$core$ISeq$;
var inst_34967 = (cljs.core.PROTOCOL_SENTINEL === inst_34966);
var inst_34968 = (inst_34965) || (inst_34967);
var state_35057__$1 = state_35057;
if(cljs.core.truth_(inst_34968)){
var statearr_35092_35147 = state_35057__$1;
(statearr_35092_35147[(1)] = (5));

} else {
var statearr_35093_35148 = state_35057__$1;
(statearr_35093_35148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (23))){
var inst_35016 = (state_35057[(14)]);
var inst_35022 = (inst_35016 == null);
var state_35057__$1 = state_35057;
if(cljs.core.truth_(inst_35022)){
var statearr_35094_35149 = state_35057__$1;
(statearr_35094_35149[(1)] = (26));

} else {
var statearr_35095_35150 = state_35057__$1;
(statearr_35095_35150[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (35))){
var inst_35042 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
if(cljs.core.truth_(inst_35042)){
var statearr_35096_35151 = state_35057__$1;
(statearr_35096_35151[(1)] = (36));

} else {
var statearr_35097_35152 = state_35057__$1;
(statearr_35097_35152[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (19))){
var inst_34984 = (state_35057[(7)]);
var inst_35004 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34984);
var state_35057__$1 = state_35057;
var statearr_35098_35153 = state_35057__$1;
(statearr_35098_35153[(2)] = inst_35004);

(statearr_35098_35153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (11))){
var inst_34984 = (state_35057[(7)]);
var inst_34988 = (inst_34984 == null);
var inst_34989 = cljs.core.not.call(null,inst_34988);
var state_35057__$1 = state_35057;
if(inst_34989){
var statearr_35099_35154 = state_35057__$1;
(statearr_35099_35154[(1)] = (13));

} else {
var statearr_35100_35155 = state_35057__$1;
(statearr_35100_35155[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (9))){
var inst_34959 = (state_35057[(8)]);
var state_35057__$1 = state_35057;
var statearr_35101_35156 = state_35057__$1;
(statearr_35101_35156[(2)] = inst_34959);

(statearr_35101_35156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (5))){
var state_35057__$1 = state_35057;
var statearr_35102_35157 = state_35057__$1;
(statearr_35102_35157[(2)] = true);

(statearr_35102_35157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (14))){
var state_35057__$1 = state_35057;
var statearr_35103_35158 = state_35057__$1;
(statearr_35103_35158[(2)] = false);

(statearr_35103_35158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (26))){
var inst_35017 = (state_35057[(10)]);
var inst_35024 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35017);
var state_35057__$1 = state_35057;
var statearr_35104_35159 = state_35057__$1;
(statearr_35104_35159[(2)] = inst_35024);

(statearr_35104_35159[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (16))){
var state_35057__$1 = state_35057;
var statearr_35105_35160 = state_35057__$1;
(statearr_35105_35160[(2)] = true);

(statearr_35105_35160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (38))){
var inst_35047 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35106_35161 = state_35057__$1;
(statearr_35106_35161[(2)] = inst_35047);

(statearr_35106_35161[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (30))){
var inst_35008 = (state_35057[(9)]);
var inst_35017 = (state_35057[(10)]);
var inst_35009 = (state_35057[(13)]);
var inst_35034 = cljs.core.empty_QMARK_.call(null,inst_35008);
var inst_35035 = inst_35009.call(null,inst_35017);
var inst_35036 = cljs.core.not.call(null,inst_35035);
var inst_35037 = (inst_35034) && (inst_35036);
var state_35057__$1 = state_35057;
var statearr_35107_35162 = state_35057__$1;
(statearr_35107_35162[(2)] = inst_35037);

(statearr_35107_35162[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (10))){
var inst_34959 = (state_35057[(8)]);
var inst_34980 = (state_35057[(2)]);
var inst_34981 = cljs.core.get.call(null,inst_34980,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34982 = cljs.core.get.call(null,inst_34980,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34983 = cljs.core.get.call(null,inst_34980,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34984 = inst_34959;
var state_35057__$1 = (function (){var statearr_35108 = state_35057;
(statearr_35108[(16)] = inst_34983);

(statearr_35108[(17)] = inst_34981);

(statearr_35108[(18)] = inst_34982);

(statearr_35108[(7)] = inst_34984);

return statearr_35108;
})();
var statearr_35109_35163 = state_35057__$1;
(statearr_35109_35163[(2)] = null);

(statearr_35109_35163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (18))){
var inst_34999 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35110_35164 = state_35057__$1;
(statearr_35110_35164[(2)] = inst_34999);

(statearr_35110_35164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (37))){
var state_35057__$1 = state_35057;
var statearr_35111_35165 = state_35057__$1;
(statearr_35111_35165[(2)] = null);

(statearr_35111_35165[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (8))){
var inst_34959 = (state_35057[(8)]);
var inst_34977 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34959);
var state_35057__$1 = state_35057;
var statearr_35112_35166 = state_35057__$1;
(statearr_35112_35166[(2)] = inst_34977);

(statearr_35112_35166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___35120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33270__auto__,c__33382__auto___35120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33271__auto__ = null;
var cljs$core$async$mix_$_state_machine__33271__auto____0 = (function (){
var statearr_35116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35116[(0)] = cljs$core$async$mix_$_state_machine__33271__auto__);

(statearr_35116[(1)] = (1));

return statearr_35116;
});
var cljs$core$async$mix_$_state_machine__33271__auto____1 = (function (state_35057){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_35057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35117){if((e35117 instanceof Object)){
var ex__33274__auto__ = e35117;
var statearr_35118_35167 = state_35057;
(statearr_35118_35167[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35168 = state_35057;
state_35057 = G__35168;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33271__auto__ = function(state_35057){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33271__auto____1.call(this,state_35057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33271__auto____0;
cljs$core$async$mix_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33271__auto____1;
return cljs$core$async$mix_$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___35120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33384__auto__ = (function (){var statearr_35119 = f__33383__auto__.call(null);
(statearr_35119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___35120);

return statearr_35119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___35120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__31150__auto__ = (((p == null))?null:p);
var m__31151__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31151__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__31150__auto__ = (((p == null))?null:p);
var m__31151__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,p,v,ch);
} else {
var m__31151__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args35169 = [];
var len__31595__auto___35172 = arguments.length;
var i__31596__auto___35173 = (0);
while(true){
if((i__31596__auto___35173 < len__31595__auto___35172)){
args35169.push((arguments[i__31596__auto___35173]));

var G__35174 = (i__31596__auto___35173 + (1));
i__31596__auto___35173 = G__35174;
continue;
} else {
}
break;
}

var G__35171 = args35169.length;
switch (G__35171) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35169.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31150__auto__ = (((p == null))?null:p);
var m__31151__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,p);
} else {
var m__31151__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__31150__auto__ = (((p == null))?null:p);
var m__31151__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31150__auto__)]);
if(!((m__31151__auto__ == null))){
return m__31151__auto__.call(null,p,v);
} else {
var m__31151__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31151__auto____$1 == null))){
return m__31151__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args35177 = [];
var len__31595__auto___35302 = arguments.length;
var i__31596__auto___35303 = (0);
while(true){
if((i__31596__auto___35303 < len__31595__auto___35302)){
args35177.push((arguments[i__31596__auto___35303]));

var G__35304 = (i__31596__auto___35303 + (1));
i__31596__auto___35303 = G__35304;
continue;
} else {
}
break;
}

var G__35179 = args35177.length;
switch (G__35179) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35177.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30482__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30482__auto__)){
return or__30482__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30482__auto__,mults){
return (function (p1__35176_SHARP_){
if(cljs.core.truth_(p1__35176_SHARP_.call(null,topic))){
return p1__35176_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35176_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30482__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35180 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35180 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35181){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35181 = meta35181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35182,meta35181__$1){
var self__ = this;
var _35182__$1 = this;
return (new cljs.core.async.t_cljs$core$async35180(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35181__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35182){
var self__ = this;
var _35182__$1 = this;
return self__.meta35181;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35180.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35180.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35181","meta35181",1114589379,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35180";

cljs.core.async.t_cljs$core$async35180.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31093__auto__,writer__31094__auto__,opt__31095__auto__){
return cljs.core._write.call(null,writer__31094__auto__,"cljs.core.async/t_cljs$core$async35180");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35180 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35180(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35181){
return (new cljs.core.async.t_cljs$core$async35180(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35181));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35180(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33382__auto___35306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___35306,mults,ensure_mult,p){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___35306,mults,ensure_mult,p){
return (function (state_35254){
var state_val_35255 = (state_35254[(1)]);
if((state_val_35255 === (7))){
var inst_35250 = (state_35254[(2)]);
var state_35254__$1 = state_35254;
var statearr_35256_35307 = state_35254__$1;
(statearr_35256_35307[(2)] = inst_35250);

(statearr_35256_35307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (20))){
var state_35254__$1 = state_35254;
var statearr_35257_35308 = state_35254__$1;
(statearr_35257_35308[(2)] = null);

(statearr_35257_35308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (1))){
var state_35254__$1 = state_35254;
var statearr_35258_35309 = state_35254__$1;
(statearr_35258_35309[(2)] = null);

(statearr_35258_35309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (24))){
var inst_35233 = (state_35254[(7)]);
var inst_35242 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35233);
var state_35254__$1 = state_35254;
var statearr_35259_35310 = state_35254__$1;
(statearr_35259_35310[(2)] = inst_35242);

(statearr_35259_35310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (4))){
var inst_35185 = (state_35254[(8)]);
var inst_35185__$1 = (state_35254[(2)]);
var inst_35186 = (inst_35185__$1 == null);
var state_35254__$1 = (function (){var statearr_35260 = state_35254;
(statearr_35260[(8)] = inst_35185__$1);

return statearr_35260;
})();
if(cljs.core.truth_(inst_35186)){
var statearr_35261_35311 = state_35254__$1;
(statearr_35261_35311[(1)] = (5));

} else {
var statearr_35262_35312 = state_35254__$1;
(statearr_35262_35312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (15))){
var inst_35227 = (state_35254[(2)]);
var state_35254__$1 = state_35254;
var statearr_35263_35313 = state_35254__$1;
(statearr_35263_35313[(2)] = inst_35227);

(statearr_35263_35313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (21))){
var inst_35247 = (state_35254[(2)]);
var state_35254__$1 = (function (){var statearr_35264 = state_35254;
(statearr_35264[(9)] = inst_35247);

return statearr_35264;
})();
var statearr_35265_35314 = state_35254__$1;
(statearr_35265_35314[(2)] = null);

(statearr_35265_35314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (13))){
var inst_35209 = (state_35254[(10)]);
var inst_35211 = cljs.core.chunked_seq_QMARK_.call(null,inst_35209);
var state_35254__$1 = state_35254;
if(inst_35211){
var statearr_35266_35315 = state_35254__$1;
(statearr_35266_35315[(1)] = (16));

} else {
var statearr_35267_35316 = state_35254__$1;
(statearr_35267_35316[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (22))){
var inst_35239 = (state_35254[(2)]);
var state_35254__$1 = state_35254;
if(cljs.core.truth_(inst_35239)){
var statearr_35268_35317 = state_35254__$1;
(statearr_35268_35317[(1)] = (23));

} else {
var statearr_35269_35318 = state_35254__$1;
(statearr_35269_35318[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (6))){
var inst_35235 = (state_35254[(11)]);
var inst_35233 = (state_35254[(7)]);
var inst_35185 = (state_35254[(8)]);
var inst_35233__$1 = topic_fn.call(null,inst_35185);
var inst_35234 = cljs.core.deref.call(null,mults);
var inst_35235__$1 = cljs.core.get.call(null,inst_35234,inst_35233__$1);
var state_35254__$1 = (function (){var statearr_35270 = state_35254;
(statearr_35270[(11)] = inst_35235__$1);

(statearr_35270[(7)] = inst_35233__$1);

return statearr_35270;
})();
if(cljs.core.truth_(inst_35235__$1)){
var statearr_35271_35319 = state_35254__$1;
(statearr_35271_35319[(1)] = (19));

} else {
var statearr_35272_35320 = state_35254__$1;
(statearr_35272_35320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (25))){
var inst_35244 = (state_35254[(2)]);
var state_35254__$1 = state_35254;
var statearr_35273_35321 = state_35254__$1;
(statearr_35273_35321[(2)] = inst_35244);

(statearr_35273_35321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (17))){
var inst_35209 = (state_35254[(10)]);
var inst_35218 = cljs.core.first.call(null,inst_35209);
var inst_35219 = cljs.core.async.muxch_STAR_.call(null,inst_35218);
var inst_35220 = cljs.core.async.close_BANG_.call(null,inst_35219);
var inst_35221 = cljs.core.next.call(null,inst_35209);
var inst_35195 = inst_35221;
var inst_35196 = null;
var inst_35197 = (0);
var inst_35198 = (0);
var state_35254__$1 = (function (){var statearr_35274 = state_35254;
(statearr_35274[(12)] = inst_35198);

(statearr_35274[(13)] = inst_35195);

(statearr_35274[(14)] = inst_35196);

(statearr_35274[(15)] = inst_35197);

(statearr_35274[(16)] = inst_35220);

return statearr_35274;
})();
var statearr_35275_35322 = state_35254__$1;
(statearr_35275_35322[(2)] = null);

(statearr_35275_35322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (3))){
var inst_35252 = (state_35254[(2)]);
var state_35254__$1 = state_35254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35254__$1,inst_35252);
} else {
if((state_val_35255 === (12))){
var inst_35229 = (state_35254[(2)]);
var state_35254__$1 = state_35254;
var statearr_35276_35323 = state_35254__$1;
(statearr_35276_35323[(2)] = inst_35229);

(statearr_35276_35323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (2))){
var state_35254__$1 = state_35254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35254__$1,(4),ch);
} else {
if((state_val_35255 === (23))){
var state_35254__$1 = state_35254;
var statearr_35277_35324 = state_35254__$1;
(statearr_35277_35324[(2)] = null);

(statearr_35277_35324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (19))){
var inst_35235 = (state_35254[(11)]);
var inst_35185 = (state_35254[(8)]);
var inst_35237 = cljs.core.async.muxch_STAR_.call(null,inst_35235);
var state_35254__$1 = state_35254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35254__$1,(22),inst_35237,inst_35185);
} else {
if((state_val_35255 === (11))){
var inst_35195 = (state_35254[(13)]);
var inst_35209 = (state_35254[(10)]);
var inst_35209__$1 = cljs.core.seq.call(null,inst_35195);
var state_35254__$1 = (function (){var statearr_35278 = state_35254;
(statearr_35278[(10)] = inst_35209__$1);

return statearr_35278;
})();
if(inst_35209__$1){
var statearr_35279_35325 = state_35254__$1;
(statearr_35279_35325[(1)] = (13));

} else {
var statearr_35280_35326 = state_35254__$1;
(statearr_35280_35326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (9))){
var inst_35231 = (state_35254[(2)]);
var state_35254__$1 = state_35254;
var statearr_35281_35327 = state_35254__$1;
(statearr_35281_35327[(2)] = inst_35231);

(statearr_35281_35327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (5))){
var inst_35192 = cljs.core.deref.call(null,mults);
var inst_35193 = cljs.core.vals.call(null,inst_35192);
var inst_35194 = cljs.core.seq.call(null,inst_35193);
var inst_35195 = inst_35194;
var inst_35196 = null;
var inst_35197 = (0);
var inst_35198 = (0);
var state_35254__$1 = (function (){var statearr_35282 = state_35254;
(statearr_35282[(12)] = inst_35198);

(statearr_35282[(13)] = inst_35195);

(statearr_35282[(14)] = inst_35196);

(statearr_35282[(15)] = inst_35197);

return statearr_35282;
})();
var statearr_35283_35328 = state_35254__$1;
(statearr_35283_35328[(2)] = null);

(statearr_35283_35328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (14))){
var state_35254__$1 = state_35254;
var statearr_35287_35329 = state_35254__$1;
(statearr_35287_35329[(2)] = null);

(statearr_35287_35329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (16))){
var inst_35209 = (state_35254[(10)]);
var inst_35213 = cljs.core.chunk_first.call(null,inst_35209);
var inst_35214 = cljs.core.chunk_rest.call(null,inst_35209);
var inst_35215 = cljs.core.count.call(null,inst_35213);
var inst_35195 = inst_35214;
var inst_35196 = inst_35213;
var inst_35197 = inst_35215;
var inst_35198 = (0);
var state_35254__$1 = (function (){var statearr_35288 = state_35254;
(statearr_35288[(12)] = inst_35198);

(statearr_35288[(13)] = inst_35195);

(statearr_35288[(14)] = inst_35196);

(statearr_35288[(15)] = inst_35197);

return statearr_35288;
})();
var statearr_35289_35330 = state_35254__$1;
(statearr_35289_35330[(2)] = null);

(statearr_35289_35330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (10))){
var inst_35198 = (state_35254[(12)]);
var inst_35195 = (state_35254[(13)]);
var inst_35196 = (state_35254[(14)]);
var inst_35197 = (state_35254[(15)]);
var inst_35203 = cljs.core._nth.call(null,inst_35196,inst_35198);
var inst_35204 = cljs.core.async.muxch_STAR_.call(null,inst_35203);
var inst_35205 = cljs.core.async.close_BANG_.call(null,inst_35204);
var inst_35206 = (inst_35198 + (1));
var tmp35284 = inst_35195;
var tmp35285 = inst_35196;
var tmp35286 = inst_35197;
var inst_35195__$1 = tmp35284;
var inst_35196__$1 = tmp35285;
var inst_35197__$1 = tmp35286;
var inst_35198__$1 = inst_35206;
var state_35254__$1 = (function (){var statearr_35290 = state_35254;
(statearr_35290[(12)] = inst_35198__$1);

(statearr_35290[(13)] = inst_35195__$1);

(statearr_35290[(17)] = inst_35205);

(statearr_35290[(14)] = inst_35196__$1);

(statearr_35290[(15)] = inst_35197__$1);

return statearr_35290;
})();
var statearr_35291_35331 = state_35254__$1;
(statearr_35291_35331[(2)] = null);

(statearr_35291_35331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (18))){
var inst_35224 = (state_35254[(2)]);
var state_35254__$1 = state_35254;
var statearr_35292_35332 = state_35254__$1;
(statearr_35292_35332[(2)] = inst_35224);

(statearr_35292_35332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35255 === (8))){
var inst_35198 = (state_35254[(12)]);
var inst_35197 = (state_35254[(15)]);
var inst_35200 = (inst_35198 < inst_35197);
var inst_35201 = inst_35200;
var state_35254__$1 = state_35254;
if(cljs.core.truth_(inst_35201)){
var statearr_35293_35333 = state_35254__$1;
(statearr_35293_35333[(1)] = (10));

} else {
var statearr_35294_35334 = state_35254__$1;
(statearr_35294_35334[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___35306,mults,ensure_mult,p))
;
return ((function (switch__33270__auto__,c__33382__auto___35306,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35298[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35298[(1)] = (1));

return statearr_35298;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35254){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_35254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35299){if((e35299 instanceof Object)){
var ex__33274__auto__ = e35299;
var statearr_35300_35335 = state_35254;
(statearr_35300_35335[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35336 = state_35254;
state_35254 = G__35336;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___35306,mults,ensure_mult,p))
})();
var state__33384__auto__ = (function (){var statearr_35301 = f__33383__auto__.call(null);
(statearr_35301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___35306);

return statearr_35301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___35306,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args35337 = [];
var len__31595__auto___35340 = arguments.length;
var i__31596__auto___35341 = (0);
while(true){
if((i__31596__auto___35341 < len__31595__auto___35340)){
args35337.push((arguments[i__31596__auto___35341]));

var G__35342 = (i__31596__auto___35341 + (1));
i__31596__auto___35341 = G__35342;
continue;
} else {
}
break;
}

var G__35339 = args35337.length;
switch (G__35339) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35337.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args35344 = [];
var len__31595__auto___35347 = arguments.length;
var i__31596__auto___35348 = (0);
while(true){
if((i__31596__auto___35348 < len__31595__auto___35347)){
args35344.push((arguments[i__31596__auto___35348]));

var G__35349 = (i__31596__auto___35348 + (1));
i__31596__auto___35348 = G__35349;
continue;
} else {
}
break;
}

var G__35346 = args35344.length;
switch (G__35346) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35344.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args35351 = [];
var len__31595__auto___35422 = arguments.length;
var i__31596__auto___35423 = (0);
while(true){
if((i__31596__auto___35423 < len__31595__auto___35422)){
args35351.push((arguments[i__31596__auto___35423]));

var G__35424 = (i__31596__auto___35423 + (1));
i__31596__auto___35423 = G__35424;
continue;
} else {
}
break;
}

var G__35353 = args35351.length;
switch (G__35353) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35351.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33382__auto___35426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___35426,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___35426,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35392){
var state_val_35393 = (state_35392[(1)]);
if((state_val_35393 === (7))){
var state_35392__$1 = state_35392;
var statearr_35394_35427 = state_35392__$1;
(statearr_35394_35427[(2)] = null);

(statearr_35394_35427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (1))){
var state_35392__$1 = state_35392;
var statearr_35395_35428 = state_35392__$1;
(statearr_35395_35428[(2)] = null);

(statearr_35395_35428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (4))){
var inst_35356 = (state_35392[(7)]);
var inst_35358 = (inst_35356 < cnt);
var state_35392__$1 = state_35392;
if(cljs.core.truth_(inst_35358)){
var statearr_35396_35429 = state_35392__$1;
(statearr_35396_35429[(1)] = (6));

} else {
var statearr_35397_35430 = state_35392__$1;
(statearr_35397_35430[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (15))){
var inst_35388 = (state_35392[(2)]);
var state_35392__$1 = state_35392;
var statearr_35398_35431 = state_35392__$1;
(statearr_35398_35431[(2)] = inst_35388);

(statearr_35398_35431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (13))){
var inst_35381 = cljs.core.async.close_BANG_.call(null,out);
var state_35392__$1 = state_35392;
var statearr_35399_35432 = state_35392__$1;
(statearr_35399_35432[(2)] = inst_35381);

(statearr_35399_35432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (6))){
var state_35392__$1 = state_35392;
var statearr_35400_35433 = state_35392__$1;
(statearr_35400_35433[(2)] = null);

(statearr_35400_35433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (3))){
var inst_35390 = (state_35392[(2)]);
var state_35392__$1 = state_35392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35392__$1,inst_35390);
} else {
if((state_val_35393 === (12))){
var inst_35378 = (state_35392[(8)]);
var inst_35378__$1 = (state_35392[(2)]);
var inst_35379 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35378__$1);
var state_35392__$1 = (function (){var statearr_35401 = state_35392;
(statearr_35401[(8)] = inst_35378__$1);

return statearr_35401;
})();
if(cljs.core.truth_(inst_35379)){
var statearr_35402_35434 = state_35392__$1;
(statearr_35402_35434[(1)] = (13));

} else {
var statearr_35403_35435 = state_35392__$1;
(statearr_35403_35435[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (2))){
var inst_35355 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35356 = (0);
var state_35392__$1 = (function (){var statearr_35404 = state_35392;
(statearr_35404[(9)] = inst_35355);

(statearr_35404[(7)] = inst_35356);

return statearr_35404;
})();
var statearr_35405_35436 = state_35392__$1;
(statearr_35405_35436[(2)] = null);

(statearr_35405_35436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (11))){
var inst_35356 = (state_35392[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35392,(10),Object,null,(9));
var inst_35365 = chs__$1.call(null,inst_35356);
var inst_35366 = done.call(null,inst_35356);
var inst_35367 = cljs.core.async.take_BANG_.call(null,inst_35365,inst_35366);
var state_35392__$1 = state_35392;
var statearr_35406_35437 = state_35392__$1;
(statearr_35406_35437[(2)] = inst_35367);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35392__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (9))){
var inst_35356 = (state_35392[(7)]);
var inst_35369 = (state_35392[(2)]);
var inst_35370 = (inst_35356 + (1));
var inst_35356__$1 = inst_35370;
var state_35392__$1 = (function (){var statearr_35407 = state_35392;
(statearr_35407[(10)] = inst_35369);

(statearr_35407[(7)] = inst_35356__$1);

return statearr_35407;
})();
var statearr_35408_35438 = state_35392__$1;
(statearr_35408_35438[(2)] = null);

(statearr_35408_35438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (5))){
var inst_35376 = (state_35392[(2)]);
var state_35392__$1 = (function (){var statearr_35409 = state_35392;
(statearr_35409[(11)] = inst_35376);

return statearr_35409;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35392__$1,(12),dchan);
} else {
if((state_val_35393 === (14))){
var inst_35378 = (state_35392[(8)]);
var inst_35383 = cljs.core.apply.call(null,f,inst_35378);
var state_35392__$1 = state_35392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35392__$1,(16),out,inst_35383);
} else {
if((state_val_35393 === (16))){
var inst_35385 = (state_35392[(2)]);
var state_35392__$1 = (function (){var statearr_35410 = state_35392;
(statearr_35410[(12)] = inst_35385);

return statearr_35410;
})();
var statearr_35411_35439 = state_35392__$1;
(statearr_35411_35439[(2)] = null);

(statearr_35411_35439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (10))){
var inst_35360 = (state_35392[(2)]);
var inst_35361 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35392__$1 = (function (){var statearr_35412 = state_35392;
(statearr_35412[(13)] = inst_35360);

return statearr_35412;
})();
var statearr_35413_35440 = state_35392__$1;
(statearr_35413_35440[(2)] = inst_35361);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35392__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35393 === (8))){
var inst_35374 = (state_35392[(2)]);
var state_35392__$1 = state_35392;
var statearr_35414_35441 = state_35392__$1;
(statearr_35414_35441[(2)] = inst_35374);

(statearr_35414_35441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___35426,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33270__auto__,c__33382__auto___35426,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35418[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35418[(1)] = (1));

return statearr_35418;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35392){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_35392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35419){if((e35419 instanceof Object)){
var ex__33274__auto__ = e35419;
var statearr_35420_35442 = state_35392;
(statearr_35420_35442[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35443 = state_35392;
state_35392 = G__35443;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35392);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___35426,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33384__auto__ = (function (){var statearr_35421 = f__33383__auto__.call(null);
(statearr_35421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___35426);

return statearr_35421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___35426,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args35445 = [];
var len__31595__auto___35503 = arguments.length;
var i__31596__auto___35504 = (0);
while(true){
if((i__31596__auto___35504 < len__31595__auto___35503)){
args35445.push((arguments[i__31596__auto___35504]));

var G__35505 = (i__31596__auto___35504 + (1));
i__31596__auto___35504 = G__35505;
continue;
} else {
}
break;
}

var G__35447 = args35445.length;
switch (G__35447) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35445.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33382__auto___35507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___35507,out){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___35507,out){
return (function (state_35479){
var state_val_35480 = (state_35479[(1)]);
if((state_val_35480 === (7))){
var inst_35458 = (state_35479[(7)]);
var inst_35459 = (state_35479[(8)]);
var inst_35458__$1 = (state_35479[(2)]);
var inst_35459__$1 = cljs.core.nth.call(null,inst_35458__$1,(0),null);
var inst_35460 = cljs.core.nth.call(null,inst_35458__$1,(1),null);
var inst_35461 = (inst_35459__$1 == null);
var state_35479__$1 = (function (){var statearr_35481 = state_35479;
(statearr_35481[(7)] = inst_35458__$1);

(statearr_35481[(9)] = inst_35460);

(statearr_35481[(8)] = inst_35459__$1);

return statearr_35481;
})();
if(cljs.core.truth_(inst_35461)){
var statearr_35482_35508 = state_35479__$1;
(statearr_35482_35508[(1)] = (8));

} else {
var statearr_35483_35509 = state_35479__$1;
(statearr_35483_35509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35480 === (1))){
var inst_35448 = cljs.core.vec.call(null,chs);
var inst_35449 = inst_35448;
var state_35479__$1 = (function (){var statearr_35484 = state_35479;
(statearr_35484[(10)] = inst_35449);

return statearr_35484;
})();
var statearr_35485_35510 = state_35479__$1;
(statearr_35485_35510[(2)] = null);

(statearr_35485_35510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35480 === (4))){
var inst_35449 = (state_35479[(10)]);
var state_35479__$1 = state_35479;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35479__$1,(7),inst_35449);
} else {
if((state_val_35480 === (6))){
var inst_35475 = (state_35479[(2)]);
var state_35479__$1 = state_35479;
var statearr_35486_35511 = state_35479__$1;
(statearr_35486_35511[(2)] = inst_35475);

(statearr_35486_35511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35480 === (3))){
var inst_35477 = (state_35479[(2)]);
var state_35479__$1 = state_35479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35479__$1,inst_35477);
} else {
if((state_val_35480 === (2))){
var inst_35449 = (state_35479[(10)]);
var inst_35451 = cljs.core.count.call(null,inst_35449);
var inst_35452 = (inst_35451 > (0));
var state_35479__$1 = state_35479;
if(cljs.core.truth_(inst_35452)){
var statearr_35488_35512 = state_35479__$1;
(statearr_35488_35512[(1)] = (4));

} else {
var statearr_35489_35513 = state_35479__$1;
(statearr_35489_35513[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35480 === (11))){
var inst_35449 = (state_35479[(10)]);
var inst_35468 = (state_35479[(2)]);
var tmp35487 = inst_35449;
var inst_35449__$1 = tmp35487;
var state_35479__$1 = (function (){var statearr_35490 = state_35479;
(statearr_35490[(11)] = inst_35468);

(statearr_35490[(10)] = inst_35449__$1);

return statearr_35490;
})();
var statearr_35491_35514 = state_35479__$1;
(statearr_35491_35514[(2)] = null);

(statearr_35491_35514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35480 === (9))){
var inst_35459 = (state_35479[(8)]);
var state_35479__$1 = state_35479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35479__$1,(11),out,inst_35459);
} else {
if((state_val_35480 === (5))){
var inst_35473 = cljs.core.async.close_BANG_.call(null,out);
var state_35479__$1 = state_35479;
var statearr_35492_35515 = state_35479__$1;
(statearr_35492_35515[(2)] = inst_35473);

(statearr_35492_35515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35480 === (10))){
var inst_35471 = (state_35479[(2)]);
var state_35479__$1 = state_35479;
var statearr_35493_35516 = state_35479__$1;
(statearr_35493_35516[(2)] = inst_35471);

(statearr_35493_35516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35480 === (8))){
var inst_35458 = (state_35479[(7)]);
var inst_35460 = (state_35479[(9)]);
var inst_35459 = (state_35479[(8)]);
var inst_35449 = (state_35479[(10)]);
var inst_35463 = (function (){var cs = inst_35449;
var vec__35454 = inst_35458;
var v = inst_35459;
var c = inst_35460;
return ((function (cs,vec__35454,v,c,inst_35458,inst_35460,inst_35459,inst_35449,state_val_35480,c__33382__auto___35507,out){
return (function (p1__35444_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35444_SHARP_);
});
;})(cs,vec__35454,v,c,inst_35458,inst_35460,inst_35459,inst_35449,state_val_35480,c__33382__auto___35507,out))
})();
var inst_35464 = cljs.core.filterv.call(null,inst_35463,inst_35449);
var inst_35449__$1 = inst_35464;
var state_35479__$1 = (function (){var statearr_35494 = state_35479;
(statearr_35494[(10)] = inst_35449__$1);

return statearr_35494;
})();
var statearr_35495_35517 = state_35479__$1;
(statearr_35495_35517[(2)] = null);

(statearr_35495_35517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___35507,out))
;
return ((function (switch__33270__auto__,c__33382__auto___35507,out){
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35499 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35499[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35499[(1)] = (1));

return statearr_35499;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35479){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_35479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35500){if((e35500 instanceof Object)){
var ex__33274__auto__ = e35500;
var statearr_35501_35518 = state_35479;
(statearr_35501_35518[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35519 = state_35479;
state_35479 = G__35519;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35479);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___35507,out))
})();
var state__33384__auto__ = (function (){var statearr_35502 = f__33383__auto__.call(null);
(statearr_35502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___35507);

return statearr_35502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___35507,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args35520 = [];
var len__31595__auto___35569 = arguments.length;
var i__31596__auto___35570 = (0);
while(true){
if((i__31596__auto___35570 < len__31595__auto___35569)){
args35520.push((arguments[i__31596__auto___35570]));

var G__35571 = (i__31596__auto___35570 + (1));
i__31596__auto___35570 = G__35571;
continue;
} else {
}
break;
}

var G__35522 = args35520.length;
switch (G__35522) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35520.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33382__auto___35573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___35573,out){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___35573,out){
return (function (state_35546){
var state_val_35547 = (state_35546[(1)]);
if((state_val_35547 === (7))){
var inst_35528 = (state_35546[(7)]);
var inst_35528__$1 = (state_35546[(2)]);
var inst_35529 = (inst_35528__$1 == null);
var inst_35530 = cljs.core.not.call(null,inst_35529);
var state_35546__$1 = (function (){var statearr_35548 = state_35546;
(statearr_35548[(7)] = inst_35528__$1);

return statearr_35548;
})();
if(inst_35530){
var statearr_35549_35574 = state_35546__$1;
(statearr_35549_35574[(1)] = (8));

} else {
var statearr_35550_35575 = state_35546__$1;
(statearr_35550_35575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (1))){
var inst_35523 = (0);
var state_35546__$1 = (function (){var statearr_35551 = state_35546;
(statearr_35551[(8)] = inst_35523);

return statearr_35551;
})();
var statearr_35552_35576 = state_35546__$1;
(statearr_35552_35576[(2)] = null);

(statearr_35552_35576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (4))){
var state_35546__$1 = state_35546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35546__$1,(7),ch);
} else {
if((state_val_35547 === (6))){
var inst_35541 = (state_35546[(2)]);
var state_35546__$1 = state_35546;
var statearr_35553_35577 = state_35546__$1;
(statearr_35553_35577[(2)] = inst_35541);

(statearr_35553_35577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (3))){
var inst_35543 = (state_35546[(2)]);
var inst_35544 = cljs.core.async.close_BANG_.call(null,out);
var state_35546__$1 = (function (){var statearr_35554 = state_35546;
(statearr_35554[(9)] = inst_35543);

return statearr_35554;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35546__$1,inst_35544);
} else {
if((state_val_35547 === (2))){
var inst_35523 = (state_35546[(8)]);
var inst_35525 = (inst_35523 < n);
var state_35546__$1 = state_35546;
if(cljs.core.truth_(inst_35525)){
var statearr_35555_35578 = state_35546__$1;
(statearr_35555_35578[(1)] = (4));

} else {
var statearr_35556_35579 = state_35546__$1;
(statearr_35556_35579[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (11))){
var inst_35523 = (state_35546[(8)]);
var inst_35533 = (state_35546[(2)]);
var inst_35534 = (inst_35523 + (1));
var inst_35523__$1 = inst_35534;
var state_35546__$1 = (function (){var statearr_35557 = state_35546;
(statearr_35557[(10)] = inst_35533);

(statearr_35557[(8)] = inst_35523__$1);

return statearr_35557;
})();
var statearr_35558_35580 = state_35546__$1;
(statearr_35558_35580[(2)] = null);

(statearr_35558_35580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (9))){
var state_35546__$1 = state_35546;
var statearr_35559_35581 = state_35546__$1;
(statearr_35559_35581[(2)] = null);

(statearr_35559_35581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (5))){
var state_35546__$1 = state_35546;
var statearr_35560_35582 = state_35546__$1;
(statearr_35560_35582[(2)] = null);

(statearr_35560_35582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (10))){
var inst_35538 = (state_35546[(2)]);
var state_35546__$1 = state_35546;
var statearr_35561_35583 = state_35546__$1;
(statearr_35561_35583[(2)] = inst_35538);

(statearr_35561_35583[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (8))){
var inst_35528 = (state_35546[(7)]);
var state_35546__$1 = state_35546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35546__$1,(11),out,inst_35528);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___35573,out))
;
return ((function (switch__33270__auto__,c__33382__auto___35573,out){
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35565[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35565[(1)] = (1));

return statearr_35565;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35546){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_35546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35566){if((e35566 instanceof Object)){
var ex__33274__auto__ = e35566;
var statearr_35567_35584 = state_35546;
(statearr_35567_35584[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35585 = state_35546;
state_35546 = G__35585;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___35573,out))
})();
var state__33384__auto__ = (function (){var statearr_35568 = f__33383__auto__.call(null);
(statearr_35568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___35573);

return statearr_35568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___35573,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35593 = (function (f,ch,meta35594){
this.f = f;
this.ch = ch;
this.meta35594 = meta35594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35595,meta35594__$1){
var self__ = this;
var _35595__$1 = this;
return (new cljs.core.async.t_cljs$core$async35593(self__.f,self__.ch,meta35594__$1));
});

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35595){
var self__ = this;
var _35595__$1 = this;
return self__.meta35594;
});

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35596 = (function (f,ch,meta35594,_,fn1,meta35597){
this.f = f;
this.ch = ch;
this.meta35594 = meta35594;
this._ = _;
this.fn1 = fn1;
this.meta35597 = meta35597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35598,meta35597__$1){
var self__ = this;
var _35598__$1 = this;
return (new cljs.core.async.t_cljs$core$async35596(self__.f,self__.ch,self__.meta35594,self__._,self__.fn1,meta35597__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35598){
var self__ = this;
var _35598__$1 = this;
return self__.meta35597;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35596.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35596.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35586_SHARP_){
return f1.call(null,(((p1__35586_SHARP_ == null))?null:self__.f.call(null,p1__35586_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35596.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35594","meta35594",705482815,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35593","cljs.core.async/t_cljs$core$async35593",-953187727,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35597","meta35597",-2100403809,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35596";

cljs.core.async.t_cljs$core$async35596.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31093__auto__,writer__31094__auto__,opt__31095__auto__){
return cljs.core._write.call(null,writer__31094__auto__,"cljs.core.async/t_cljs$core$async35596");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35596 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35596(f__$1,ch__$1,meta35594__$1,___$2,fn1__$1,meta35597){
return (new cljs.core.async.t_cljs$core$async35596(f__$1,ch__$1,meta35594__$1,___$2,fn1__$1,meta35597));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35596(self__.f,self__.ch,self__.meta35594,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30470__auto__ = ret;
if(cljs.core.truth_(and__30470__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30470__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35593.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35594","meta35594",705482815,null)], null);
});

cljs.core.async.t_cljs$core$async35593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35593";

cljs.core.async.t_cljs$core$async35593.cljs$lang$ctorPrWriter = (function (this__31093__auto__,writer__31094__auto__,opt__31095__auto__){
return cljs.core._write.call(null,writer__31094__auto__,"cljs.core.async/t_cljs$core$async35593");
});

cljs.core.async.__GT_t_cljs$core$async35593 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35593(f__$1,ch__$1,meta35594){
return (new cljs.core.async.t_cljs$core$async35593(f__$1,ch__$1,meta35594));
});

}

return (new cljs.core.async.t_cljs$core$async35593(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35602 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35602 = (function (f,ch,meta35603){
this.f = f;
this.ch = ch;
this.meta35603 = meta35603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35604,meta35603__$1){
var self__ = this;
var _35604__$1 = this;
return (new cljs.core.async.t_cljs$core$async35602(self__.f,self__.ch,meta35603__$1));
});

cljs.core.async.t_cljs$core$async35602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35604){
var self__ = this;
var _35604__$1 = this;
return self__.meta35603;
});

cljs.core.async.t_cljs$core$async35602.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35602.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35602.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35602.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35602.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35602.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35603","meta35603",1393582466,null)], null);
});

cljs.core.async.t_cljs$core$async35602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35602";

cljs.core.async.t_cljs$core$async35602.cljs$lang$ctorPrWriter = (function (this__31093__auto__,writer__31094__auto__,opt__31095__auto__){
return cljs.core._write.call(null,writer__31094__auto__,"cljs.core.async/t_cljs$core$async35602");
});

cljs.core.async.__GT_t_cljs$core$async35602 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35602(f__$1,ch__$1,meta35603){
return (new cljs.core.async.t_cljs$core$async35602(f__$1,ch__$1,meta35603));
});

}

return (new cljs.core.async.t_cljs$core$async35602(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35608 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35608 = (function (p,ch,meta35609){
this.p = p;
this.ch = ch;
this.meta35609 = meta35609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35610,meta35609__$1){
var self__ = this;
var _35610__$1 = this;
return (new cljs.core.async.t_cljs$core$async35608(self__.p,self__.ch,meta35609__$1));
});

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35610){
var self__ = this;
var _35610__$1 = this;
return self__.meta35609;
});

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35608.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35609","meta35609",461725756,null)], null);
});

cljs.core.async.t_cljs$core$async35608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35608";

cljs.core.async.t_cljs$core$async35608.cljs$lang$ctorPrWriter = (function (this__31093__auto__,writer__31094__auto__,opt__31095__auto__){
return cljs.core._write.call(null,writer__31094__auto__,"cljs.core.async/t_cljs$core$async35608");
});

cljs.core.async.__GT_t_cljs$core$async35608 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35608(p__$1,ch__$1,meta35609){
return (new cljs.core.async.t_cljs$core$async35608(p__$1,ch__$1,meta35609));
});

}

return (new cljs.core.async.t_cljs$core$async35608(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args35611 = [];
var len__31595__auto___35655 = arguments.length;
var i__31596__auto___35656 = (0);
while(true){
if((i__31596__auto___35656 < len__31595__auto___35655)){
args35611.push((arguments[i__31596__auto___35656]));

var G__35657 = (i__31596__auto___35656 + (1));
i__31596__auto___35656 = G__35657;
continue;
} else {
}
break;
}

var G__35613 = args35611.length;
switch (G__35613) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35611.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33382__auto___35659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___35659,out){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___35659,out){
return (function (state_35634){
var state_val_35635 = (state_35634[(1)]);
if((state_val_35635 === (7))){
var inst_35630 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35636_35660 = state_35634__$1;
(statearr_35636_35660[(2)] = inst_35630);

(statearr_35636_35660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (1))){
var state_35634__$1 = state_35634;
var statearr_35637_35661 = state_35634__$1;
(statearr_35637_35661[(2)] = null);

(statearr_35637_35661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (4))){
var inst_35616 = (state_35634[(7)]);
var inst_35616__$1 = (state_35634[(2)]);
var inst_35617 = (inst_35616__$1 == null);
var state_35634__$1 = (function (){var statearr_35638 = state_35634;
(statearr_35638[(7)] = inst_35616__$1);

return statearr_35638;
})();
if(cljs.core.truth_(inst_35617)){
var statearr_35639_35662 = state_35634__$1;
(statearr_35639_35662[(1)] = (5));

} else {
var statearr_35640_35663 = state_35634__$1;
(statearr_35640_35663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (6))){
var inst_35616 = (state_35634[(7)]);
var inst_35621 = p.call(null,inst_35616);
var state_35634__$1 = state_35634;
if(cljs.core.truth_(inst_35621)){
var statearr_35641_35664 = state_35634__$1;
(statearr_35641_35664[(1)] = (8));

} else {
var statearr_35642_35665 = state_35634__$1;
(statearr_35642_35665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (3))){
var inst_35632 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35634__$1,inst_35632);
} else {
if((state_val_35635 === (2))){
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35634__$1,(4),ch);
} else {
if((state_val_35635 === (11))){
var inst_35624 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35643_35666 = state_35634__$1;
(statearr_35643_35666[(2)] = inst_35624);

(statearr_35643_35666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (9))){
var state_35634__$1 = state_35634;
var statearr_35644_35667 = state_35634__$1;
(statearr_35644_35667[(2)] = null);

(statearr_35644_35667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (5))){
var inst_35619 = cljs.core.async.close_BANG_.call(null,out);
var state_35634__$1 = state_35634;
var statearr_35645_35668 = state_35634__$1;
(statearr_35645_35668[(2)] = inst_35619);

(statearr_35645_35668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (10))){
var inst_35627 = (state_35634[(2)]);
var state_35634__$1 = (function (){var statearr_35646 = state_35634;
(statearr_35646[(8)] = inst_35627);

return statearr_35646;
})();
var statearr_35647_35669 = state_35634__$1;
(statearr_35647_35669[(2)] = null);

(statearr_35647_35669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (8))){
var inst_35616 = (state_35634[(7)]);
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35634__$1,(11),out,inst_35616);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___35659,out))
;
return ((function (switch__33270__auto__,c__33382__auto___35659,out){
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35651 = [null,null,null,null,null,null,null,null,null];
(statearr_35651[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35651[(1)] = (1));

return statearr_35651;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35634){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_35634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35652){if((e35652 instanceof Object)){
var ex__33274__auto__ = e35652;
var statearr_35653_35670 = state_35634;
(statearr_35653_35670[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35671 = state_35634;
state_35634 = G__35671;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35634);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___35659,out))
})();
var state__33384__auto__ = (function (){var statearr_35654 = f__33383__auto__.call(null);
(statearr_35654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___35659);

return statearr_35654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___35659,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args35672 = [];
var len__31595__auto___35675 = arguments.length;
var i__31596__auto___35676 = (0);
while(true){
if((i__31596__auto___35676 < len__31595__auto___35675)){
args35672.push((arguments[i__31596__auto___35676]));

var G__35677 = (i__31596__auto___35676 + (1));
i__31596__auto___35676 = G__35677;
continue;
} else {
}
break;
}

var G__35674 = args35672.length;
switch (G__35674) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35672.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33382__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto__){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto__){
return (function (state_35844){
var state_val_35845 = (state_35844[(1)]);
if((state_val_35845 === (7))){
var inst_35840 = (state_35844[(2)]);
var state_35844__$1 = state_35844;
var statearr_35846_35887 = state_35844__$1;
(statearr_35846_35887[(2)] = inst_35840);

(statearr_35846_35887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (20))){
var inst_35810 = (state_35844[(7)]);
var inst_35821 = (state_35844[(2)]);
var inst_35822 = cljs.core.next.call(null,inst_35810);
var inst_35796 = inst_35822;
var inst_35797 = null;
var inst_35798 = (0);
var inst_35799 = (0);
var state_35844__$1 = (function (){var statearr_35847 = state_35844;
(statearr_35847[(8)] = inst_35797);

(statearr_35847[(9)] = inst_35821);

(statearr_35847[(10)] = inst_35798);

(statearr_35847[(11)] = inst_35796);

(statearr_35847[(12)] = inst_35799);

return statearr_35847;
})();
var statearr_35848_35888 = state_35844__$1;
(statearr_35848_35888[(2)] = null);

(statearr_35848_35888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (1))){
var state_35844__$1 = state_35844;
var statearr_35849_35889 = state_35844__$1;
(statearr_35849_35889[(2)] = null);

(statearr_35849_35889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (4))){
var inst_35785 = (state_35844[(13)]);
var inst_35785__$1 = (state_35844[(2)]);
var inst_35786 = (inst_35785__$1 == null);
var state_35844__$1 = (function (){var statearr_35850 = state_35844;
(statearr_35850[(13)] = inst_35785__$1);

return statearr_35850;
})();
if(cljs.core.truth_(inst_35786)){
var statearr_35851_35890 = state_35844__$1;
(statearr_35851_35890[(1)] = (5));

} else {
var statearr_35852_35891 = state_35844__$1;
(statearr_35852_35891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (15))){
var state_35844__$1 = state_35844;
var statearr_35856_35892 = state_35844__$1;
(statearr_35856_35892[(2)] = null);

(statearr_35856_35892[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (21))){
var state_35844__$1 = state_35844;
var statearr_35857_35893 = state_35844__$1;
(statearr_35857_35893[(2)] = null);

(statearr_35857_35893[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (13))){
var inst_35797 = (state_35844[(8)]);
var inst_35798 = (state_35844[(10)]);
var inst_35796 = (state_35844[(11)]);
var inst_35799 = (state_35844[(12)]);
var inst_35806 = (state_35844[(2)]);
var inst_35807 = (inst_35799 + (1));
var tmp35853 = inst_35797;
var tmp35854 = inst_35798;
var tmp35855 = inst_35796;
var inst_35796__$1 = tmp35855;
var inst_35797__$1 = tmp35853;
var inst_35798__$1 = tmp35854;
var inst_35799__$1 = inst_35807;
var state_35844__$1 = (function (){var statearr_35858 = state_35844;
(statearr_35858[(8)] = inst_35797__$1);

(statearr_35858[(10)] = inst_35798__$1);

(statearr_35858[(11)] = inst_35796__$1);

(statearr_35858[(14)] = inst_35806);

(statearr_35858[(12)] = inst_35799__$1);

return statearr_35858;
})();
var statearr_35859_35894 = state_35844__$1;
(statearr_35859_35894[(2)] = null);

(statearr_35859_35894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (22))){
var state_35844__$1 = state_35844;
var statearr_35860_35895 = state_35844__$1;
(statearr_35860_35895[(2)] = null);

(statearr_35860_35895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (6))){
var inst_35785 = (state_35844[(13)]);
var inst_35794 = f.call(null,inst_35785);
var inst_35795 = cljs.core.seq.call(null,inst_35794);
var inst_35796 = inst_35795;
var inst_35797 = null;
var inst_35798 = (0);
var inst_35799 = (0);
var state_35844__$1 = (function (){var statearr_35861 = state_35844;
(statearr_35861[(8)] = inst_35797);

(statearr_35861[(10)] = inst_35798);

(statearr_35861[(11)] = inst_35796);

(statearr_35861[(12)] = inst_35799);

return statearr_35861;
})();
var statearr_35862_35896 = state_35844__$1;
(statearr_35862_35896[(2)] = null);

(statearr_35862_35896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (17))){
var inst_35810 = (state_35844[(7)]);
var inst_35814 = cljs.core.chunk_first.call(null,inst_35810);
var inst_35815 = cljs.core.chunk_rest.call(null,inst_35810);
var inst_35816 = cljs.core.count.call(null,inst_35814);
var inst_35796 = inst_35815;
var inst_35797 = inst_35814;
var inst_35798 = inst_35816;
var inst_35799 = (0);
var state_35844__$1 = (function (){var statearr_35863 = state_35844;
(statearr_35863[(8)] = inst_35797);

(statearr_35863[(10)] = inst_35798);

(statearr_35863[(11)] = inst_35796);

(statearr_35863[(12)] = inst_35799);

return statearr_35863;
})();
var statearr_35864_35897 = state_35844__$1;
(statearr_35864_35897[(2)] = null);

(statearr_35864_35897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (3))){
var inst_35842 = (state_35844[(2)]);
var state_35844__$1 = state_35844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35844__$1,inst_35842);
} else {
if((state_val_35845 === (12))){
var inst_35830 = (state_35844[(2)]);
var state_35844__$1 = state_35844;
var statearr_35865_35898 = state_35844__$1;
(statearr_35865_35898[(2)] = inst_35830);

(statearr_35865_35898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (2))){
var state_35844__$1 = state_35844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35844__$1,(4),in$);
} else {
if((state_val_35845 === (23))){
var inst_35838 = (state_35844[(2)]);
var state_35844__$1 = state_35844;
var statearr_35866_35899 = state_35844__$1;
(statearr_35866_35899[(2)] = inst_35838);

(statearr_35866_35899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (19))){
var inst_35825 = (state_35844[(2)]);
var state_35844__$1 = state_35844;
var statearr_35867_35900 = state_35844__$1;
(statearr_35867_35900[(2)] = inst_35825);

(statearr_35867_35900[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (11))){
var inst_35810 = (state_35844[(7)]);
var inst_35796 = (state_35844[(11)]);
var inst_35810__$1 = cljs.core.seq.call(null,inst_35796);
var state_35844__$1 = (function (){var statearr_35868 = state_35844;
(statearr_35868[(7)] = inst_35810__$1);

return statearr_35868;
})();
if(inst_35810__$1){
var statearr_35869_35901 = state_35844__$1;
(statearr_35869_35901[(1)] = (14));

} else {
var statearr_35870_35902 = state_35844__$1;
(statearr_35870_35902[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (9))){
var inst_35832 = (state_35844[(2)]);
var inst_35833 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35844__$1 = (function (){var statearr_35871 = state_35844;
(statearr_35871[(15)] = inst_35832);

return statearr_35871;
})();
if(cljs.core.truth_(inst_35833)){
var statearr_35872_35903 = state_35844__$1;
(statearr_35872_35903[(1)] = (21));

} else {
var statearr_35873_35904 = state_35844__$1;
(statearr_35873_35904[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (5))){
var inst_35788 = cljs.core.async.close_BANG_.call(null,out);
var state_35844__$1 = state_35844;
var statearr_35874_35905 = state_35844__$1;
(statearr_35874_35905[(2)] = inst_35788);

(statearr_35874_35905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (14))){
var inst_35810 = (state_35844[(7)]);
var inst_35812 = cljs.core.chunked_seq_QMARK_.call(null,inst_35810);
var state_35844__$1 = state_35844;
if(inst_35812){
var statearr_35875_35906 = state_35844__$1;
(statearr_35875_35906[(1)] = (17));

} else {
var statearr_35876_35907 = state_35844__$1;
(statearr_35876_35907[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (16))){
var inst_35828 = (state_35844[(2)]);
var state_35844__$1 = state_35844;
var statearr_35877_35908 = state_35844__$1;
(statearr_35877_35908[(2)] = inst_35828);

(statearr_35877_35908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35845 === (10))){
var inst_35797 = (state_35844[(8)]);
var inst_35799 = (state_35844[(12)]);
var inst_35804 = cljs.core._nth.call(null,inst_35797,inst_35799);
var state_35844__$1 = state_35844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35844__$1,(13),out,inst_35804);
} else {
if((state_val_35845 === (18))){
var inst_35810 = (state_35844[(7)]);
var inst_35819 = cljs.core.first.call(null,inst_35810);
var state_35844__$1 = state_35844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35844__$1,(20),out,inst_35819);
} else {
if((state_val_35845 === (8))){
var inst_35798 = (state_35844[(10)]);
var inst_35799 = (state_35844[(12)]);
var inst_35801 = (inst_35799 < inst_35798);
var inst_35802 = inst_35801;
var state_35844__$1 = state_35844;
if(cljs.core.truth_(inst_35802)){
var statearr_35878_35909 = state_35844__$1;
(statearr_35878_35909[(1)] = (10));

} else {
var statearr_35879_35910 = state_35844__$1;
(statearr_35879_35910[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto__))
;
return ((function (switch__33270__auto__,c__33382__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33271__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33271__auto____0 = (function (){
var statearr_35883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35883[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33271__auto__);

(statearr_35883[(1)] = (1));

return statearr_35883;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33271__auto____1 = (function (state_35844){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_35844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35884){if((e35884 instanceof Object)){
var ex__33274__auto__ = e35884;
var statearr_35885_35911 = state_35844;
(statearr_35885_35911[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35912 = state_35844;
state_35844 = G__35912;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33271__auto__ = function(state_35844){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33271__auto____1.call(this,state_35844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33271__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33271__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto__))
})();
var state__33384__auto__ = (function (){var statearr_35886 = f__33383__auto__.call(null);
(statearr_35886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto__);

return statearr_35886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto__))
);

return c__33382__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args35913 = [];
var len__31595__auto___35916 = arguments.length;
var i__31596__auto___35917 = (0);
while(true){
if((i__31596__auto___35917 < len__31595__auto___35916)){
args35913.push((arguments[i__31596__auto___35917]));

var G__35918 = (i__31596__auto___35917 + (1));
i__31596__auto___35917 = G__35918;
continue;
} else {
}
break;
}

var G__35915 = args35913.length;
switch (G__35915) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35913.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args35920 = [];
var len__31595__auto___35923 = arguments.length;
var i__31596__auto___35924 = (0);
while(true){
if((i__31596__auto___35924 < len__31595__auto___35923)){
args35920.push((arguments[i__31596__auto___35924]));

var G__35925 = (i__31596__auto___35924 + (1));
i__31596__auto___35924 = G__35925;
continue;
} else {
}
break;
}

var G__35922 = args35920.length;
switch (G__35922) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35920.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args35927 = [];
var len__31595__auto___35978 = arguments.length;
var i__31596__auto___35979 = (0);
while(true){
if((i__31596__auto___35979 < len__31595__auto___35978)){
args35927.push((arguments[i__31596__auto___35979]));

var G__35980 = (i__31596__auto___35979 + (1));
i__31596__auto___35979 = G__35980;
continue;
} else {
}
break;
}

var G__35929 = args35927.length;
switch (G__35929) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35927.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33382__auto___35982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___35982,out){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___35982,out){
return (function (state_35953){
var state_val_35954 = (state_35953[(1)]);
if((state_val_35954 === (7))){
var inst_35948 = (state_35953[(2)]);
var state_35953__$1 = state_35953;
var statearr_35955_35983 = state_35953__$1;
(statearr_35955_35983[(2)] = inst_35948);

(statearr_35955_35983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35954 === (1))){
var inst_35930 = null;
var state_35953__$1 = (function (){var statearr_35956 = state_35953;
(statearr_35956[(7)] = inst_35930);

return statearr_35956;
})();
var statearr_35957_35984 = state_35953__$1;
(statearr_35957_35984[(2)] = null);

(statearr_35957_35984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35954 === (4))){
var inst_35933 = (state_35953[(8)]);
var inst_35933__$1 = (state_35953[(2)]);
var inst_35934 = (inst_35933__$1 == null);
var inst_35935 = cljs.core.not.call(null,inst_35934);
var state_35953__$1 = (function (){var statearr_35958 = state_35953;
(statearr_35958[(8)] = inst_35933__$1);

return statearr_35958;
})();
if(inst_35935){
var statearr_35959_35985 = state_35953__$1;
(statearr_35959_35985[(1)] = (5));

} else {
var statearr_35960_35986 = state_35953__$1;
(statearr_35960_35986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35954 === (6))){
var state_35953__$1 = state_35953;
var statearr_35961_35987 = state_35953__$1;
(statearr_35961_35987[(2)] = null);

(statearr_35961_35987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35954 === (3))){
var inst_35950 = (state_35953[(2)]);
var inst_35951 = cljs.core.async.close_BANG_.call(null,out);
var state_35953__$1 = (function (){var statearr_35962 = state_35953;
(statearr_35962[(9)] = inst_35950);

return statearr_35962;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35953__$1,inst_35951);
} else {
if((state_val_35954 === (2))){
var state_35953__$1 = state_35953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35953__$1,(4),ch);
} else {
if((state_val_35954 === (11))){
var inst_35933 = (state_35953[(8)]);
var inst_35942 = (state_35953[(2)]);
var inst_35930 = inst_35933;
var state_35953__$1 = (function (){var statearr_35963 = state_35953;
(statearr_35963[(10)] = inst_35942);

(statearr_35963[(7)] = inst_35930);

return statearr_35963;
})();
var statearr_35964_35988 = state_35953__$1;
(statearr_35964_35988[(2)] = null);

(statearr_35964_35988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35954 === (9))){
var inst_35933 = (state_35953[(8)]);
var state_35953__$1 = state_35953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35953__$1,(11),out,inst_35933);
} else {
if((state_val_35954 === (5))){
var inst_35933 = (state_35953[(8)]);
var inst_35930 = (state_35953[(7)]);
var inst_35937 = cljs.core._EQ_.call(null,inst_35933,inst_35930);
var state_35953__$1 = state_35953;
if(inst_35937){
var statearr_35966_35989 = state_35953__$1;
(statearr_35966_35989[(1)] = (8));

} else {
var statearr_35967_35990 = state_35953__$1;
(statearr_35967_35990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35954 === (10))){
var inst_35945 = (state_35953[(2)]);
var state_35953__$1 = state_35953;
var statearr_35968_35991 = state_35953__$1;
(statearr_35968_35991[(2)] = inst_35945);

(statearr_35968_35991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35954 === (8))){
var inst_35930 = (state_35953[(7)]);
var tmp35965 = inst_35930;
var inst_35930__$1 = tmp35965;
var state_35953__$1 = (function (){var statearr_35969 = state_35953;
(statearr_35969[(7)] = inst_35930__$1);

return statearr_35969;
})();
var statearr_35970_35992 = state_35953__$1;
(statearr_35970_35992[(2)] = null);

(statearr_35970_35992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___35982,out))
;
return ((function (switch__33270__auto__,c__33382__auto___35982,out){
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35974[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35974[(1)] = (1));

return statearr_35974;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35953){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_35953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35975){if((e35975 instanceof Object)){
var ex__33274__auto__ = e35975;
var statearr_35976_35993 = state_35953;
(statearr_35976_35993[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35994 = state_35953;
state_35953 = G__35994;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35953);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___35982,out))
})();
var state__33384__auto__ = (function (){var statearr_35977 = f__33383__auto__.call(null);
(statearr_35977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___35982);

return statearr_35977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___35982,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35995 = [];
var len__31595__auto___36065 = arguments.length;
var i__31596__auto___36066 = (0);
while(true){
if((i__31596__auto___36066 < len__31595__auto___36065)){
args35995.push((arguments[i__31596__auto___36066]));

var G__36067 = (i__31596__auto___36066 + (1));
i__31596__auto___36066 = G__36067;
continue;
} else {
}
break;
}

var G__35997 = args35995.length;
switch (G__35997) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35995.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33382__auto___36069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___36069,out){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___36069,out){
return (function (state_36035){
var state_val_36036 = (state_36035[(1)]);
if((state_val_36036 === (7))){
var inst_36031 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
var statearr_36037_36070 = state_36035__$1;
(statearr_36037_36070[(2)] = inst_36031);

(statearr_36037_36070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (1))){
var inst_35998 = (new Array(n));
var inst_35999 = inst_35998;
var inst_36000 = (0);
var state_36035__$1 = (function (){var statearr_36038 = state_36035;
(statearr_36038[(7)] = inst_35999);

(statearr_36038[(8)] = inst_36000);

return statearr_36038;
})();
var statearr_36039_36071 = state_36035__$1;
(statearr_36039_36071[(2)] = null);

(statearr_36039_36071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (4))){
var inst_36003 = (state_36035[(9)]);
var inst_36003__$1 = (state_36035[(2)]);
var inst_36004 = (inst_36003__$1 == null);
var inst_36005 = cljs.core.not.call(null,inst_36004);
var state_36035__$1 = (function (){var statearr_36040 = state_36035;
(statearr_36040[(9)] = inst_36003__$1);

return statearr_36040;
})();
if(inst_36005){
var statearr_36041_36072 = state_36035__$1;
(statearr_36041_36072[(1)] = (5));

} else {
var statearr_36042_36073 = state_36035__$1;
(statearr_36042_36073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (15))){
var inst_36025 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
var statearr_36043_36074 = state_36035__$1;
(statearr_36043_36074[(2)] = inst_36025);

(statearr_36043_36074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (13))){
var state_36035__$1 = state_36035;
var statearr_36044_36075 = state_36035__$1;
(statearr_36044_36075[(2)] = null);

(statearr_36044_36075[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (6))){
var inst_36000 = (state_36035[(8)]);
var inst_36021 = (inst_36000 > (0));
var state_36035__$1 = state_36035;
if(cljs.core.truth_(inst_36021)){
var statearr_36045_36076 = state_36035__$1;
(statearr_36045_36076[(1)] = (12));

} else {
var statearr_36046_36077 = state_36035__$1;
(statearr_36046_36077[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (3))){
var inst_36033 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36035__$1,inst_36033);
} else {
if((state_val_36036 === (12))){
var inst_35999 = (state_36035[(7)]);
var inst_36023 = cljs.core.vec.call(null,inst_35999);
var state_36035__$1 = state_36035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36035__$1,(15),out,inst_36023);
} else {
if((state_val_36036 === (2))){
var state_36035__$1 = state_36035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36035__$1,(4),ch);
} else {
if((state_val_36036 === (11))){
var inst_36015 = (state_36035[(2)]);
var inst_36016 = (new Array(n));
var inst_35999 = inst_36016;
var inst_36000 = (0);
var state_36035__$1 = (function (){var statearr_36047 = state_36035;
(statearr_36047[(10)] = inst_36015);

(statearr_36047[(7)] = inst_35999);

(statearr_36047[(8)] = inst_36000);

return statearr_36047;
})();
var statearr_36048_36078 = state_36035__$1;
(statearr_36048_36078[(2)] = null);

(statearr_36048_36078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (9))){
var inst_35999 = (state_36035[(7)]);
var inst_36013 = cljs.core.vec.call(null,inst_35999);
var state_36035__$1 = state_36035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36035__$1,(11),out,inst_36013);
} else {
if((state_val_36036 === (5))){
var inst_36008 = (state_36035[(11)]);
var inst_36003 = (state_36035[(9)]);
var inst_35999 = (state_36035[(7)]);
var inst_36000 = (state_36035[(8)]);
var inst_36007 = (inst_35999[inst_36000] = inst_36003);
var inst_36008__$1 = (inst_36000 + (1));
var inst_36009 = (inst_36008__$1 < n);
var state_36035__$1 = (function (){var statearr_36049 = state_36035;
(statearr_36049[(12)] = inst_36007);

(statearr_36049[(11)] = inst_36008__$1);

return statearr_36049;
})();
if(cljs.core.truth_(inst_36009)){
var statearr_36050_36079 = state_36035__$1;
(statearr_36050_36079[(1)] = (8));

} else {
var statearr_36051_36080 = state_36035__$1;
(statearr_36051_36080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (14))){
var inst_36028 = (state_36035[(2)]);
var inst_36029 = cljs.core.async.close_BANG_.call(null,out);
var state_36035__$1 = (function (){var statearr_36053 = state_36035;
(statearr_36053[(13)] = inst_36028);

return statearr_36053;
})();
var statearr_36054_36081 = state_36035__$1;
(statearr_36054_36081[(2)] = inst_36029);

(statearr_36054_36081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (10))){
var inst_36019 = (state_36035[(2)]);
var state_36035__$1 = state_36035;
var statearr_36055_36082 = state_36035__$1;
(statearr_36055_36082[(2)] = inst_36019);

(statearr_36055_36082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36036 === (8))){
var inst_36008 = (state_36035[(11)]);
var inst_35999 = (state_36035[(7)]);
var tmp36052 = inst_35999;
var inst_35999__$1 = tmp36052;
var inst_36000 = inst_36008;
var state_36035__$1 = (function (){var statearr_36056 = state_36035;
(statearr_36056[(7)] = inst_35999__$1);

(statearr_36056[(8)] = inst_36000);

return statearr_36056;
})();
var statearr_36057_36083 = state_36035__$1;
(statearr_36057_36083[(2)] = null);

(statearr_36057_36083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___36069,out))
;
return ((function (switch__33270__auto__,c__33382__auto___36069,out){
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_36061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36061[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_36061[(1)] = (1));

return statearr_36061;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_36035){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_36035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e36062){if((e36062 instanceof Object)){
var ex__33274__auto__ = e36062;
var statearr_36063_36084 = state_36035;
(statearr_36063_36084[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36085 = state_36035;
state_36035 = G__36085;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_36035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_36035);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___36069,out))
})();
var state__33384__auto__ = (function (){var statearr_36064 = f__33383__auto__.call(null);
(statearr_36064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___36069);

return statearr_36064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___36069,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args36086 = [];
var len__31595__auto___36160 = arguments.length;
var i__31596__auto___36161 = (0);
while(true){
if((i__31596__auto___36161 < len__31595__auto___36160)){
args36086.push((arguments[i__31596__auto___36161]));

var G__36162 = (i__31596__auto___36161 + (1));
i__31596__auto___36161 = G__36162;
continue;
} else {
}
break;
}

var G__36088 = args36086.length;
switch (G__36088) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36086.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33382__auto___36164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33382__auto___36164,out){
return (function (){
var f__33383__auto__ = (function (){var switch__33270__auto__ = ((function (c__33382__auto___36164,out){
return (function (state_36130){
var state_val_36131 = (state_36130[(1)]);
if((state_val_36131 === (7))){
var inst_36126 = (state_36130[(2)]);
var state_36130__$1 = state_36130;
var statearr_36132_36165 = state_36130__$1;
(statearr_36132_36165[(2)] = inst_36126);

(statearr_36132_36165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (1))){
var inst_36089 = [];
var inst_36090 = inst_36089;
var inst_36091 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36130__$1 = (function (){var statearr_36133 = state_36130;
(statearr_36133[(7)] = inst_36091);

(statearr_36133[(8)] = inst_36090);

return statearr_36133;
})();
var statearr_36134_36166 = state_36130__$1;
(statearr_36134_36166[(2)] = null);

(statearr_36134_36166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (4))){
var inst_36094 = (state_36130[(9)]);
var inst_36094__$1 = (state_36130[(2)]);
var inst_36095 = (inst_36094__$1 == null);
var inst_36096 = cljs.core.not.call(null,inst_36095);
var state_36130__$1 = (function (){var statearr_36135 = state_36130;
(statearr_36135[(9)] = inst_36094__$1);

return statearr_36135;
})();
if(inst_36096){
var statearr_36136_36167 = state_36130__$1;
(statearr_36136_36167[(1)] = (5));

} else {
var statearr_36137_36168 = state_36130__$1;
(statearr_36137_36168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (15))){
var inst_36120 = (state_36130[(2)]);
var state_36130__$1 = state_36130;
var statearr_36138_36169 = state_36130__$1;
(statearr_36138_36169[(2)] = inst_36120);

(statearr_36138_36169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (13))){
var state_36130__$1 = state_36130;
var statearr_36139_36170 = state_36130__$1;
(statearr_36139_36170[(2)] = null);

(statearr_36139_36170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (6))){
var inst_36090 = (state_36130[(8)]);
var inst_36115 = inst_36090.length;
var inst_36116 = (inst_36115 > (0));
var state_36130__$1 = state_36130;
if(cljs.core.truth_(inst_36116)){
var statearr_36140_36171 = state_36130__$1;
(statearr_36140_36171[(1)] = (12));

} else {
var statearr_36141_36172 = state_36130__$1;
(statearr_36141_36172[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (3))){
var inst_36128 = (state_36130[(2)]);
var state_36130__$1 = state_36130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36130__$1,inst_36128);
} else {
if((state_val_36131 === (12))){
var inst_36090 = (state_36130[(8)]);
var inst_36118 = cljs.core.vec.call(null,inst_36090);
var state_36130__$1 = state_36130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36130__$1,(15),out,inst_36118);
} else {
if((state_val_36131 === (2))){
var state_36130__$1 = state_36130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36130__$1,(4),ch);
} else {
if((state_val_36131 === (11))){
var inst_36098 = (state_36130[(10)]);
var inst_36094 = (state_36130[(9)]);
var inst_36108 = (state_36130[(2)]);
var inst_36109 = [];
var inst_36110 = inst_36109.push(inst_36094);
var inst_36090 = inst_36109;
var inst_36091 = inst_36098;
var state_36130__$1 = (function (){var statearr_36142 = state_36130;
(statearr_36142[(7)] = inst_36091);

(statearr_36142[(11)] = inst_36110);

(statearr_36142[(12)] = inst_36108);

(statearr_36142[(8)] = inst_36090);

return statearr_36142;
})();
var statearr_36143_36173 = state_36130__$1;
(statearr_36143_36173[(2)] = null);

(statearr_36143_36173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (9))){
var inst_36090 = (state_36130[(8)]);
var inst_36106 = cljs.core.vec.call(null,inst_36090);
var state_36130__$1 = state_36130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36130__$1,(11),out,inst_36106);
} else {
if((state_val_36131 === (5))){
var inst_36091 = (state_36130[(7)]);
var inst_36098 = (state_36130[(10)]);
var inst_36094 = (state_36130[(9)]);
var inst_36098__$1 = f.call(null,inst_36094);
var inst_36099 = cljs.core._EQ_.call(null,inst_36098__$1,inst_36091);
var inst_36100 = cljs.core.keyword_identical_QMARK_.call(null,inst_36091,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36101 = (inst_36099) || (inst_36100);
var state_36130__$1 = (function (){var statearr_36144 = state_36130;
(statearr_36144[(10)] = inst_36098__$1);

return statearr_36144;
})();
if(cljs.core.truth_(inst_36101)){
var statearr_36145_36174 = state_36130__$1;
(statearr_36145_36174[(1)] = (8));

} else {
var statearr_36146_36175 = state_36130__$1;
(statearr_36146_36175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (14))){
var inst_36123 = (state_36130[(2)]);
var inst_36124 = cljs.core.async.close_BANG_.call(null,out);
var state_36130__$1 = (function (){var statearr_36148 = state_36130;
(statearr_36148[(13)] = inst_36123);

return statearr_36148;
})();
var statearr_36149_36176 = state_36130__$1;
(statearr_36149_36176[(2)] = inst_36124);

(statearr_36149_36176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (10))){
var inst_36113 = (state_36130[(2)]);
var state_36130__$1 = state_36130;
var statearr_36150_36177 = state_36130__$1;
(statearr_36150_36177[(2)] = inst_36113);

(statearr_36150_36177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36131 === (8))){
var inst_36098 = (state_36130[(10)]);
var inst_36094 = (state_36130[(9)]);
var inst_36090 = (state_36130[(8)]);
var inst_36103 = inst_36090.push(inst_36094);
var tmp36147 = inst_36090;
var inst_36090__$1 = tmp36147;
var inst_36091 = inst_36098;
var state_36130__$1 = (function (){var statearr_36151 = state_36130;
(statearr_36151[(7)] = inst_36091);

(statearr_36151[(14)] = inst_36103);

(statearr_36151[(8)] = inst_36090__$1);

return statearr_36151;
})();
var statearr_36152_36178 = state_36130__$1;
(statearr_36152_36178[(2)] = null);

(statearr_36152_36178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33382__auto___36164,out))
;
return ((function (switch__33270__auto__,c__33382__auto___36164,out){
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_36156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36156[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_36156[(1)] = (1));

return statearr_36156;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_36130){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__.call(null,state_36130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e36157){if((e36157 instanceof Object)){
var ex__33274__auto__ = e36157;
var statearr_36158_36179 = state_36130;
(statearr_36158_36179[(5)] = ex__33274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36180 = state_36130;
state_36130 = G__36180;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_36130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_36130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
;})(switch__33270__auto__,c__33382__auto___36164,out))
})();
var state__33384__auto__ = (function (){var statearr_36159 = f__33383__auto__.call(null);
(statearr_36159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33382__auto___36164);

return statearr_36159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33384__auto__);
});})(c__33382__auto___36164,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1497293536527