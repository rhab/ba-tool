goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31390 = (function (f,blockable,meta31391){
this.f = f;
this.blockable = blockable;
this.meta31391 = meta31391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31392,meta31391__$1){
var self__ = this;
var _31392__$1 = this;
return (new cljs.core.async.t_cljs$core$async31390(self__.f,self__.blockable,meta31391__$1));
}));

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31392){
var self__ = this;
var _31392__$1 = this;
return self__.meta31391;
}));

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31391","meta31391",-2059744173,null)], null);
}));

(cljs.core.async.t_cljs$core$async31390.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31390");

(cljs.core.async.t_cljs$core$async31390.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31390");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31390.
 */
cljs.core.async.__GT_t_cljs$core$async31390 = (function cljs$core$async$__GT_t_cljs$core$async31390(f,blockable,meta31391){
return (new cljs.core.async.t_cljs$core$async31390(f,blockable,meta31391));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31388 = arguments.length;
switch (G__31388) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async31390(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__31413 = arguments.length;
switch (G__31413) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31428 = arguments.length;
switch (G__31428) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__31441 = arguments.length;
switch (G__31441) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34562 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34562) : fn1.call(null, val_34562));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34562) : fn1.call(null, val_34562));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31460 = arguments.length;
switch (G__31460) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5809__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5809__auto__)){
var ret = temp__5809__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5809__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5809__auto__)){
var retb = temp__5809__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___34572 = n;
var x_34573 = (0);
while(true){
if((x_34573 < n__5593__auto___34572)){
(a[x_34573] = x_34573);

var G__34574 = (x_34573 + (1));
x_34573 = G__34574;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31476 = (function (flag,meta31477){
this.flag = flag;
this.meta31477 = meta31477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31478,meta31477__$1){
var self__ = this;
var _31478__$1 = this;
return (new cljs.core.async.t_cljs$core$async31476(self__.flag,meta31477__$1));
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31478){
var self__ = this;
var _31478__$1 = this;
return self__.meta31477;
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31477","meta31477",-356308200,null)], null);
}));

(cljs.core.async.t_cljs$core$async31476.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31476");

(cljs.core.async.t_cljs$core$async31476.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31476");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31476.
 */
cljs.core.async.__GT_t_cljs$core$async31476 = (function cljs$core$async$__GT_t_cljs$core$async31476(flag,meta31477){
return (new cljs.core.async.t_cljs$core$async31476(flag,meta31477));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31476(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31492 = (function (flag,cb,meta31493){
this.flag = flag;
this.cb = cb;
this.meta31493 = meta31493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31494,meta31493__$1){
var self__ = this;
var _31494__$1 = this;
return (new cljs.core.async.t_cljs$core$async31492(self__.flag,self__.cb,meta31493__$1));
}));

(cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31494){
var self__ = this;
var _31494__$1 = this;
return self__.meta31493;
}));

(cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31493","meta31493",-2100015289,null)], null);
}));

(cljs.core.async.t_cljs$core$async31492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31492");

(cljs.core.async.t_cljs$core$async31492.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31492.
 */
cljs.core.async.__GT_t_cljs$core$async31492 = (function cljs$core$async$__GT_t_cljs$core$async31492(flag,cb,meta31493){
return (new cljs.core.async.t_cljs$core$async31492(flag,cb,meta31493));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31492(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31512_SHARP_){
var G__31515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31512_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31515) : fret.call(null, G__31515));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31513_SHARP_){
var G__31517 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31513_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31517) : fret.call(null, G__31517));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34580 = (i + (1));
i = G__34580;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5811__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5811__auto__)){
var got = temp__5811__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5732__auto__ = [];
var len__5726__auto___34586 = arguments.length;
var i__5727__auto___34587 = (0);
while(true){
if((i__5727__auto___34587 < len__5726__auto___34586)){
args__5732__auto__.push((arguments[i__5727__auto___34587]));

var G__34588 = (i__5727__auto___34587 + (1));
i__5727__auto___34587 = G__34588;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31525){
var map__31526 = p__31525;
var map__31526__$1 = cljs.core.__destructure_map(map__31526);
var opts = map__31526__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31522){
var G__31523 = cljs.core.first(seq31522);
var seq31522__$1 = cljs.core.next(seq31522);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31523,seq31522__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__31545 = arguments.length;
switch (G__31545) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31270__auto___34590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_31587){
var state_val_31590 = (state_31587[(1)]);
if((state_val_31590 === (7))){
var inst_31580 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
var statearr_31597_34591 = state_31587__$1;
(statearr_31597_34591[(2)] = inst_31580);

(statearr_31597_34591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (1))){
var state_31587__$1 = state_31587;
var statearr_31599_34592 = state_31587__$1;
(statearr_31599_34592[(2)] = null);

(statearr_31599_34592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (4))){
var inst_31561 = (state_31587[(7)]);
var inst_31561__$1 = (state_31587[(2)]);
var inst_31562 = (inst_31561__$1 == null);
var state_31587__$1 = (function (){var statearr_31600 = state_31587;
(statearr_31600[(7)] = inst_31561__$1);

return statearr_31600;
})();
if(cljs.core.truth_(inst_31562)){
var statearr_31601_34595 = state_31587__$1;
(statearr_31601_34595[(1)] = (5));

} else {
var statearr_31602_34596 = state_31587__$1;
(statearr_31602_34596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (13))){
var state_31587__$1 = state_31587;
var statearr_31606_34597 = state_31587__$1;
(statearr_31606_34597[(2)] = null);

(statearr_31606_34597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (6))){
var inst_31561 = (state_31587[(7)]);
var state_31587__$1 = state_31587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31587__$1,(11),to,inst_31561);
} else {
if((state_val_31590 === (3))){
var inst_31584 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31587__$1,inst_31584);
} else {
if((state_val_31590 === (12))){
var state_31587__$1 = state_31587;
var statearr_31609_34602 = state_31587__$1;
(statearr_31609_34602[(2)] = null);

(statearr_31609_34602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (2))){
var state_31587__$1 = state_31587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31587__$1,(4),from);
} else {
if((state_val_31590 === (11))){
var inst_31572 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
if(cljs.core.truth_(inst_31572)){
var statearr_31611_34603 = state_31587__$1;
(statearr_31611_34603[(1)] = (12));

} else {
var statearr_31612_34604 = state_31587__$1;
(statearr_31612_34604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (9))){
var state_31587__$1 = state_31587;
var statearr_31617_34605 = state_31587__$1;
(statearr_31617_34605[(2)] = null);

(statearr_31617_34605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (5))){
var state_31587__$1 = state_31587;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31619_34606 = state_31587__$1;
(statearr_31619_34606[(1)] = (8));

} else {
var statearr_31620_34607 = state_31587__$1;
(statearr_31620_34607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (14))){
var inst_31578 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
var statearr_31621_34608 = state_31587__$1;
(statearr_31621_34608[(2)] = inst_31578);

(statearr_31621_34608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (10))){
var inst_31569 = (state_31587[(2)]);
var state_31587__$1 = state_31587;
var statearr_31622_34609 = state_31587__$1;
(statearr_31622_34609[(2)] = inst_31569);

(statearr_31622_34609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (8))){
var inst_31566 = cljs.core.async.close_BANG_(to);
var state_31587__$1 = state_31587;
var statearr_31627_34610 = state_31587__$1;
(statearr_31627_34610[(2)] = inst_31566);

(statearr_31627_34610[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__30343__auto__ = null;
var cljs$core$async$state_machine__30343__auto____0 = (function (){
var statearr_31630 = [null,null,null,null,null,null,null,null];
(statearr_31630[(0)] = cljs$core$async$state_machine__30343__auto__);

(statearr_31630[(1)] = (1));

return statearr_31630;
});
var cljs$core$async$state_machine__30343__auto____1 = (function (state_31587){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_31587);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e31633){var ex__30346__auto__ = e31633;
var statearr_31634_34611 = state_31587;
(statearr_31634_34611[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_31587[(4)]))){
var statearr_31635_34612 = state_31587;
(statearr_31635_34612[(1)] = cljs.core.first((state_31587[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34613 = state_31587;
state_31587 = G__34613;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$state_machine__30343__auto__ = function(state_31587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30343__auto____1.call(this,state_31587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30343__auto____0;
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30343__auto____1;
return cljs$core$async$state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_31636 = f__31271__auto__();
(statearr_31636[(6)] = c__31270__auto___34590);

return statearr_31636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__31649){
var vec__31650 = p__31649;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31650,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31650,(1),null);
var job = vec__31650;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31270__auto___34624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_31660){
var state_val_31661 = (state_31660[(1)]);
if((state_val_31661 === (1))){
var state_31660__$1 = state_31660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31660__$1,(2),res,v);
} else {
if((state_val_31661 === (2))){
var inst_31656 = (state_31660[(2)]);
var inst_31657 = cljs.core.async.close_BANG_(res);
var state_31660__$1 = (function (){var statearr_31664 = state_31660;
(statearr_31664[(7)] = inst_31656);

return statearr_31664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31660__$1,inst_31657);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0 = (function (){
var statearr_31665 = [null,null,null,null,null,null,null,null];
(statearr_31665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__);

(statearr_31665[(1)] = (1));

return statearr_31665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1 = (function (state_31660){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_31660);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e31666){var ex__30346__auto__ = e31666;
var statearr_31668_34628 = state_31660;
(statearr_31668_34628[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_31660[(4)]))){
var statearr_31669_34629 = state_31660;
(statearr_31669_34629[(1)] = cljs.core.first((state_31660[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34630 = state_31660;
state_31660 = G__34630;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__ = function(state_31660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1.call(this,state_31660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_31670 = f__31271__auto__();
(statearr_31670[(6)] = c__31270__auto___34624);

return statearr_31670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31672){
var vec__31674 = p__31672;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31674,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31674,(1),null);
var job = vec__31674;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___34634 = n;
var __34635 = (0);
while(true){
if((__34635 < n__5593__auto___34634)){
var G__31681_34636 = type;
var G__31681_34637__$1 = (((G__31681_34636 instanceof cljs.core.Keyword))?G__31681_34636.fqn:null);
switch (G__31681_34637__$1) {
case "compute":
var c__31270__auto___34639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34635,c__31270__auto___34639,G__31681_34636,G__31681_34637__$1,n__5593__auto___34634,jobs,results,process__$1,async){
return (function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = ((function (__34635,c__31270__auto___34639,G__31681_34636,G__31681_34637__$1,n__5593__auto___34634,jobs,results,process__$1,async){
return (function (state_31695){
var state_val_31696 = (state_31695[(1)]);
if((state_val_31696 === (1))){
var state_31695__$1 = state_31695;
var statearr_31700_34640 = state_31695__$1;
(statearr_31700_34640[(2)] = null);

(statearr_31700_34640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (2))){
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31695__$1,(4),jobs);
} else {
if((state_val_31696 === (3))){
var inst_31693 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31695__$1,inst_31693);
} else {
if((state_val_31696 === (4))){
var inst_31685 = (state_31695[(2)]);
var inst_31686 = process__$1(inst_31685);
var state_31695__$1 = state_31695;
if(cljs.core.truth_(inst_31686)){
var statearr_31703_34641 = state_31695__$1;
(statearr_31703_34641[(1)] = (5));

} else {
var statearr_31704_34642 = state_31695__$1;
(statearr_31704_34642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (5))){
var state_31695__$1 = state_31695;
var statearr_31705_34643 = state_31695__$1;
(statearr_31705_34643[(2)] = null);

(statearr_31705_34643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (6))){
var state_31695__$1 = state_31695;
var statearr_31706_34645 = state_31695__$1;
(statearr_31706_34645[(2)] = null);

(statearr_31706_34645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31696 === (7))){
var inst_31691 = (state_31695[(2)]);
var state_31695__$1 = state_31695;
var statearr_31707_34646 = state_31695__$1;
(statearr_31707_34646[(2)] = inst_31691);

(statearr_31707_34646[(1)] = (3));


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
});})(__34635,c__31270__auto___34639,G__31681_34636,G__31681_34637__$1,n__5593__auto___34634,jobs,results,process__$1,async))
;
return ((function (__34635,switch__30342__auto__,c__31270__auto___34639,G__31681_34636,G__31681_34637__$1,n__5593__auto___34634,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0 = (function (){
var statearr_31709 = [null,null,null,null,null,null,null];
(statearr_31709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__);

(statearr_31709[(1)] = (1));

return statearr_31709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1 = (function (state_31695){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_31695);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e31713){var ex__30346__auto__ = e31713;
var statearr_31714_34647 = state_31695;
(statearr_31714_34647[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_31695[(4)]))){
var statearr_31718_34648 = state_31695;
(statearr_31718_34648[(1)] = cljs.core.first((state_31695[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34652 = state_31695;
state_31695 = G__34652;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__ = function(state_31695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1.call(this,state_31695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__;
})()
;})(__34635,switch__30342__auto__,c__31270__auto___34639,G__31681_34636,G__31681_34637__$1,n__5593__auto___34634,jobs,results,process__$1,async))
})();
var state__31272__auto__ = (function (){var statearr_31720 = f__31271__auto__();
(statearr_31720[(6)] = c__31270__auto___34639);

return statearr_31720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
});})(__34635,c__31270__auto___34639,G__31681_34636,G__31681_34637__$1,n__5593__auto___34634,jobs,results,process__$1,async))
);


break;
case "async":
var c__31270__auto___34653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34635,c__31270__auto___34653,G__31681_34636,G__31681_34637__$1,n__5593__auto___34634,jobs,results,process__$1,async){
return (function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = ((function (__34635,c__31270__auto___34653,G__31681_34636,G__31681_34637__$1,n__5593__auto___34634,jobs,results,process__$1,async){
return (function (state_31736){
var state_val_31737 = (state_31736[(1)]);
if((state_val_31737 === (1))){
var state_31736__$1 = state_31736;
var statearr_31744_34654 = state_31736__$1;
(statearr_31744_34654[(2)] = null);

(statearr_31744_34654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (2))){
var state_31736__$1 = state_31736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31736__$1,(4),jobs);
} else {
if((state_val_31737 === (3))){
var inst_31734 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31736__$1,inst_31734);
} else {
if((state_val_31737 === (4))){
var inst_31724 = (state_31736[(2)]);
var inst_31725 = async(inst_31724);
var state_31736__$1 = state_31736;
if(cljs.core.truth_(inst_31725)){
var statearr_31746_34655 = state_31736__$1;
(statearr_31746_34655[(1)] = (5));

} else {
var statearr_31747_34656 = state_31736__$1;
(statearr_31747_34656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (5))){
var state_31736__$1 = state_31736;
var statearr_31748_34658 = state_31736__$1;
(statearr_31748_34658[(2)] = null);

(statearr_31748_34658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (6))){
var state_31736__$1 = state_31736;
var statearr_31749_34659 = state_31736__$1;
(statearr_31749_34659[(2)] = null);

(statearr_31749_34659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (7))){
var inst_31731 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
var statearr_31751_34663 = state_31736__$1;
(statearr_31751_34663[(2)] = inst_31731);

(statearr_31751_34663[(1)] = (3));


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
});})(__34635,c__31270__auto___34653,G__31681_34636,G__31681_34637__$1,n__5593__auto___34634,jobs,results,process__$1,async))
;
return ((function (__34635,switch__30342__auto__,c__31270__auto___34653,G__31681_34636,G__31681_34637__$1,n__5593__auto___34634,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0 = (function (){
var statearr_31752 = [null,null,null,null,null,null,null];
(statearr_31752[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__);

(statearr_31752[(1)] = (1));

return statearr_31752;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1 = (function (state_31736){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_31736);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e31755){var ex__30346__auto__ = e31755;
var statearr_31759_34664 = state_31736;
(statearr_31759_34664[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_31736[(4)]))){
var statearr_31760_34666 = state_31736;
(statearr_31760_34666[(1)] = cljs.core.first((state_31736[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34667 = state_31736;
state_31736 = G__34667;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__ = function(state_31736){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1.call(this,state_31736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__;
})()
;})(__34635,switch__30342__auto__,c__31270__auto___34653,G__31681_34636,G__31681_34637__$1,n__5593__auto___34634,jobs,results,process__$1,async))
})();
var state__31272__auto__ = (function (){var statearr_31761 = f__31271__auto__();
(statearr_31761[(6)] = c__31270__auto___34653);

return statearr_31761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
});})(__34635,c__31270__auto___34653,G__31681_34636,G__31681_34637__$1,n__5593__auto___34634,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31681_34637__$1)].join('')));

}

var G__34668 = (__34635 + (1));
__34635 = G__34668;
continue;
} else {
}
break;
}

var c__31270__auto___34669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_31789){
var state_val_31790 = (state_31789[(1)]);
if((state_val_31790 === (7))){
var inst_31785 = (state_31789[(2)]);
var state_31789__$1 = state_31789;
var statearr_31791_34670 = state_31789__$1;
(statearr_31791_34670[(2)] = inst_31785);

(statearr_31791_34670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (1))){
var state_31789__$1 = state_31789;
var statearr_31792_34672 = state_31789__$1;
(statearr_31792_34672[(2)] = null);

(statearr_31792_34672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (4))){
var inst_31769 = (state_31789[(7)]);
var inst_31769__$1 = (state_31789[(2)]);
var inst_31770 = (inst_31769__$1 == null);
var state_31789__$1 = (function (){var statearr_31795 = state_31789;
(statearr_31795[(7)] = inst_31769__$1);

return statearr_31795;
})();
if(cljs.core.truth_(inst_31770)){
var statearr_31796_34676 = state_31789__$1;
(statearr_31796_34676[(1)] = (5));

} else {
var statearr_31797_34677 = state_31789__$1;
(statearr_31797_34677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (6))){
var inst_31775 = (state_31789[(8)]);
var inst_31769 = (state_31789[(7)]);
var inst_31775__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31776 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31777 = [inst_31769,inst_31775__$1];
var inst_31778 = (new cljs.core.PersistentVector(null,2,(5),inst_31776,inst_31777,null));
var state_31789__$1 = (function (){var statearr_31801 = state_31789;
(statearr_31801[(8)] = inst_31775__$1);

return statearr_31801;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31789__$1,(8),jobs,inst_31778);
} else {
if((state_val_31790 === (3))){
var inst_31787 = (state_31789[(2)]);
var state_31789__$1 = state_31789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31789__$1,inst_31787);
} else {
if((state_val_31790 === (2))){
var state_31789__$1 = state_31789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31789__$1,(4),from);
} else {
if((state_val_31790 === (9))){
var inst_31782 = (state_31789[(2)]);
var state_31789__$1 = (function (){var statearr_31805 = state_31789;
(statearr_31805[(9)] = inst_31782);

return statearr_31805;
})();
var statearr_31808_34678 = state_31789__$1;
(statearr_31808_34678[(2)] = null);

(statearr_31808_34678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (5))){
var inst_31773 = cljs.core.async.close_BANG_(jobs);
var state_31789__$1 = state_31789;
var statearr_31811_34679 = state_31789__$1;
(statearr_31811_34679[(2)] = inst_31773);

(statearr_31811_34679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (8))){
var inst_31775 = (state_31789[(8)]);
var inst_31780 = (state_31789[(2)]);
var state_31789__$1 = (function (){var statearr_31812 = state_31789;
(statearr_31812[(10)] = inst_31780);

return statearr_31812;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31789__$1,(9),results,inst_31775);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0 = (function (){
var statearr_31813 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31813[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__);

(statearr_31813[(1)] = (1));

return statearr_31813;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1 = (function (state_31789){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_31789);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e31814){var ex__30346__auto__ = e31814;
var statearr_31815_34681 = state_31789;
(statearr_31815_34681[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_31789[(4)]))){
var statearr_31816_34682 = state_31789;
(statearr_31816_34682[(1)] = cljs.core.first((state_31789[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34683 = state_31789;
state_31789 = G__34683;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__ = function(state_31789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1.call(this,state_31789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_31817 = f__31271__auto__();
(statearr_31817[(6)] = c__31270__auto___34669);

return statearr_31817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


var c__31270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_31859){
var state_val_31860 = (state_31859[(1)]);
if((state_val_31860 === (7))){
var inst_31855 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
var statearr_31868_34684 = state_31859__$1;
(statearr_31868_34684[(2)] = inst_31855);

(statearr_31868_34684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (20))){
var state_31859__$1 = state_31859;
var statearr_31870_34685 = state_31859__$1;
(statearr_31870_34685[(2)] = null);

(statearr_31870_34685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (1))){
var state_31859__$1 = state_31859;
var statearr_31872_34686 = state_31859__$1;
(statearr_31872_34686[(2)] = null);

(statearr_31872_34686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (4))){
var inst_31821 = (state_31859[(7)]);
var inst_31821__$1 = (state_31859[(2)]);
var inst_31822 = (inst_31821__$1 == null);
var state_31859__$1 = (function (){var statearr_31873 = state_31859;
(statearr_31873[(7)] = inst_31821__$1);

return statearr_31873;
})();
if(cljs.core.truth_(inst_31822)){
var statearr_31874_34687 = state_31859__$1;
(statearr_31874_34687[(1)] = (5));

} else {
var statearr_31875_34688 = state_31859__$1;
(statearr_31875_34688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (15))){
var inst_31836 = (state_31859[(8)]);
var state_31859__$1 = state_31859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31859__$1,(18),to,inst_31836);
} else {
if((state_val_31860 === (21))){
var inst_31850 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
var statearr_31878_34690 = state_31859__$1;
(statearr_31878_34690[(2)] = inst_31850);

(statearr_31878_34690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (13))){
var inst_31852 = (state_31859[(2)]);
var state_31859__$1 = (function (){var statearr_31879 = state_31859;
(statearr_31879[(9)] = inst_31852);

return statearr_31879;
})();
var statearr_31880_34691 = state_31859__$1;
(statearr_31880_34691[(2)] = null);

(statearr_31880_34691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (6))){
var inst_31821 = (state_31859[(7)]);
var state_31859__$1 = state_31859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31859__$1,(11),inst_31821);
} else {
if((state_val_31860 === (17))){
var inst_31845 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
if(cljs.core.truth_(inst_31845)){
var statearr_31889_34692 = state_31859__$1;
(statearr_31889_34692[(1)] = (19));

} else {
var statearr_31890_34693 = state_31859__$1;
(statearr_31890_34693[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (3))){
var inst_31857 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31859__$1,inst_31857);
} else {
if((state_val_31860 === (12))){
var inst_31831 = (state_31859[(10)]);
var state_31859__$1 = state_31859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31859__$1,(14),inst_31831);
} else {
if((state_val_31860 === (2))){
var state_31859__$1 = state_31859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31859__$1,(4),results);
} else {
if((state_val_31860 === (19))){
var state_31859__$1 = state_31859;
var statearr_31894_34696 = state_31859__$1;
(statearr_31894_34696[(2)] = null);

(statearr_31894_34696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (11))){
var inst_31831 = (state_31859[(2)]);
var state_31859__$1 = (function (){var statearr_31895 = state_31859;
(statearr_31895[(10)] = inst_31831);

return statearr_31895;
})();
var statearr_31898_34697 = state_31859__$1;
(statearr_31898_34697[(2)] = null);

(statearr_31898_34697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (9))){
var state_31859__$1 = state_31859;
var statearr_31900_34698 = state_31859__$1;
(statearr_31900_34698[(2)] = null);

(statearr_31900_34698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (5))){
var state_31859__$1 = state_31859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31904_34702 = state_31859__$1;
(statearr_31904_34702[(1)] = (8));

} else {
var statearr_31905_34703 = state_31859__$1;
(statearr_31905_34703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (14))){
var inst_31839 = (state_31859[(11)]);
var inst_31836 = (state_31859[(8)]);
var inst_31836__$1 = (state_31859[(2)]);
var inst_31838 = (inst_31836__$1 == null);
var inst_31839__$1 = cljs.core.not(inst_31838);
var state_31859__$1 = (function (){var statearr_31906 = state_31859;
(statearr_31906[(11)] = inst_31839__$1);

(statearr_31906[(8)] = inst_31836__$1);

return statearr_31906;
})();
if(inst_31839__$1){
var statearr_31907_34705 = state_31859__$1;
(statearr_31907_34705[(1)] = (15));

} else {
var statearr_31908_34706 = state_31859__$1;
(statearr_31908_34706[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (16))){
var inst_31839 = (state_31859[(11)]);
var state_31859__$1 = state_31859;
var statearr_31909_34707 = state_31859__$1;
(statearr_31909_34707[(2)] = inst_31839);

(statearr_31909_34707[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (10))){
var inst_31828 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
var statearr_31910_34708 = state_31859__$1;
(statearr_31910_34708[(2)] = inst_31828);

(statearr_31910_34708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (18))){
var inst_31842 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
var statearr_31912_34709 = state_31859__$1;
(statearr_31912_34709[(2)] = inst_31842);

(statearr_31912_34709[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (8))){
var inst_31825 = cljs.core.async.close_BANG_(to);
var state_31859__$1 = state_31859;
var statearr_31917_34710 = state_31859__$1;
(statearr_31917_34710[(2)] = inst_31825);

(statearr_31917_34710[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0 = (function (){
var statearr_31922 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31922[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__);

(statearr_31922[(1)] = (1));

return statearr_31922;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1 = (function (state_31859){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_31859);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e31924){var ex__30346__auto__ = e31924;
var statearr_31926_34711 = state_31859;
(statearr_31926_34711[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_31859[(4)]))){
var statearr_31928_34712 = state_31859;
(statearr_31928_34712[(1)] = cljs.core.first((state_31859[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34714 = state_31859;
state_31859 = G__34714;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__ = function(state_31859){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1.call(this,state_31859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_31933 = f__31271__auto__();
(statearr_31933[(6)] = c__31270__auto__);

return statearr_31933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));

return c__31270__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31944 = arguments.length;
switch (G__31944) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__31962 = arguments.length;
switch (G__31962) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__31976 = arguments.length;
switch (G__31976) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31270__auto___34726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_32016){
var state_val_32018 = (state_32016[(1)]);
if((state_val_32018 === (7))){
var inst_32011 = (state_32016[(2)]);
var state_32016__$1 = state_32016;
var statearr_32023_34729 = state_32016__$1;
(statearr_32023_34729[(2)] = inst_32011);

(statearr_32023_34729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (1))){
var state_32016__$1 = state_32016;
var statearr_32031_34731 = state_32016__$1;
(statearr_32031_34731[(2)] = null);

(statearr_32031_34731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (4))){
var inst_31991 = (state_32016[(7)]);
var inst_31991__$1 = (state_32016[(2)]);
var inst_31992 = (inst_31991__$1 == null);
var state_32016__$1 = (function (){var statearr_32035 = state_32016;
(statearr_32035[(7)] = inst_31991__$1);

return statearr_32035;
})();
if(cljs.core.truth_(inst_31992)){
var statearr_32036_34736 = state_32016__$1;
(statearr_32036_34736[(1)] = (5));

} else {
var statearr_32038_34737 = state_32016__$1;
(statearr_32038_34737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (13))){
var state_32016__$1 = state_32016;
var statearr_32042_34738 = state_32016__$1;
(statearr_32042_34738[(2)] = null);

(statearr_32042_34738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (6))){
var inst_31991 = (state_32016[(7)]);
var inst_31998 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31991) : p.call(null, inst_31991));
var state_32016__$1 = state_32016;
if(cljs.core.truth_(inst_31998)){
var statearr_32046_34740 = state_32016__$1;
(statearr_32046_34740[(1)] = (9));

} else {
var statearr_32047_34741 = state_32016__$1;
(statearr_32047_34741[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (3))){
var inst_32014 = (state_32016[(2)]);
var state_32016__$1 = state_32016;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32016__$1,inst_32014);
} else {
if((state_val_32018 === (12))){
var state_32016__$1 = state_32016;
var statearr_32049_34745 = state_32016__$1;
(statearr_32049_34745[(2)] = null);

(statearr_32049_34745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (2))){
var state_32016__$1 = state_32016;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32016__$1,(4),ch);
} else {
if((state_val_32018 === (11))){
var inst_31991 = (state_32016[(7)]);
var inst_32002 = (state_32016[(2)]);
var state_32016__$1 = state_32016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32016__$1,(8),inst_32002,inst_31991);
} else {
if((state_val_32018 === (9))){
var state_32016__$1 = state_32016;
var statearr_32055_34749 = state_32016__$1;
(statearr_32055_34749[(2)] = tc);

(statearr_32055_34749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (5))){
var inst_31994 = cljs.core.async.close_BANG_(tc);
var inst_31995 = cljs.core.async.close_BANG_(fc);
var state_32016__$1 = (function (){var statearr_32057 = state_32016;
(statearr_32057[(8)] = inst_31994);

return statearr_32057;
})();
var statearr_32059_34750 = state_32016__$1;
(statearr_32059_34750[(2)] = inst_31995);

(statearr_32059_34750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (14))){
var inst_32009 = (state_32016[(2)]);
var state_32016__$1 = state_32016;
var statearr_32061_34751 = state_32016__$1;
(statearr_32061_34751[(2)] = inst_32009);

(statearr_32061_34751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (10))){
var state_32016__$1 = state_32016;
var statearr_32064_34752 = state_32016__$1;
(statearr_32064_34752[(2)] = fc);

(statearr_32064_34752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32018 === (8))){
var inst_32004 = (state_32016[(2)]);
var state_32016__$1 = state_32016;
if(cljs.core.truth_(inst_32004)){
var statearr_32065_34753 = state_32016__$1;
(statearr_32065_34753[(1)] = (12));

} else {
var statearr_32068_34754 = state_32016__$1;
(statearr_32068_34754[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__30343__auto__ = null;
var cljs$core$async$state_machine__30343__auto____0 = (function (){
var statearr_32072 = [null,null,null,null,null,null,null,null,null];
(statearr_32072[(0)] = cljs$core$async$state_machine__30343__auto__);

(statearr_32072[(1)] = (1));

return statearr_32072;
});
var cljs$core$async$state_machine__30343__auto____1 = (function (state_32016){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_32016);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e32073){var ex__30346__auto__ = e32073;
var statearr_32074_34760 = state_32016;
(statearr_32074_34760[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_32016[(4)]))){
var statearr_32077_34761 = state_32016;
(statearr_32077_34761[(1)] = cljs.core.first((state_32016[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34766 = state_32016;
state_32016 = G__34766;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$state_machine__30343__auto__ = function(state_32016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30343__auto____1.call(this,state_32016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30343__auto____0;
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30343__auto____1;
return cljs$core$async$state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_32085 = f__31271__auto__();
(statearr_32085[(6)] = c__31270__auto___34726);

return statearr_32085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_32120){
var state_val_32121 = (state_32120[(1)]);
if((state_val_32121 === (7))){
var inst_32116 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32131_34775 = state_32120__$1;
(statearr_32131_34775[(2)] = inst_32116);

(statearr_32131_34775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (1))){
var inst_32091 = init;
var inst_32093 = inst_32091;
var state_32120__$1 = (function (){var statearr_32132 = state_32120;
(statearr_32132[(7)] = inst_32093);

return statearr_32132;
})();
var statearr_32133_34776 = state_32120__$1;
(statearr_32133_34776[(2)] = null);

(statearr_32133_34776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (4))){
var inst_32097 = (state_32120[(8)]);
var inst_32097__$1 = (state_32120[(2)]);
var inst_32098 = (inst_32097__$1 == null);
var state_32120__$1 = (function (){var statearr_32135 = state_32120;
(statearr_32135[(8)] = inst_32097__$1);

return statearr_32135;
})();
if(cljs.core.truth_(inst_32098)){
var statearr_32138_34777 = state_32120__$1;
(statearr_32138_34777[(1)] = (5));

} else {
var statearr_32140_34778 = state_32120__$1;
(statearr_32140_34778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (6))){
var inst_32097 = (state_32120[(8)]);
var inst_32101 = (state_32120[(9)]);
var inst_32093 = (state_32120[(7)]);
var inst_32101__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32093,inst_32097) : f.call(null, inst_32093,inst_32097));
var inst_32102 = cljs.core.reduced_QMARK_(inst_32101__$1);
var state_32120__$1 = (function (){var statearr_32142 = state_32120;
(statearr_32142[(9)] = inst_32101__$1);

return statearr_32142;
})();
if(inst_32102){
var statearr_32143_34783 = state_32120__$1;
(statearr_32143_34783[(1)] = (8));

} else {
var statearr_32146_34784 = state_32120__$1;
(statearr_32146_34784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (3))){
var inst_32118 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32120__$1,inst_32118);
} else {
if((state_val_32121 === (2))){
var state_32120__$1 = state_32120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32120__$1,(4),ch);
} else {
if((state_val_32121 === (9))){
var inst_32101 = (state_32120[(9)]);
var inst_32093 = inst_32101;
var state_32120__$1 = (function (){var statearr_32152 = state_32120;
(statearr_32152[(7)] = inst_32093);

return statearr_32152;
})();
var statearr_32155_34785 = state_32120__$1;
(statearr_32155_34785[(2)] = null);

(statearr_32155_34785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (5))){
var inst_32093 = (state_32120[(7)]);
var state_32120__$1 = state_32120;
var statearr_32158_34786 = state_32120__$1;
(statearr_32158_34786[(2)] = inst_32093);

(statearr_32158_34786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (10))){
var inst_32113 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32160_34787 = state_32120__$1;
(statearr_32160_34787[(2)] = inst_32113);

(statearr_32160_34787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (8))){
var inst_32101 = (state_32120[(9)]);
var inst_32109 = cljs.core.deref(inst_32101);
var state_32120__$1 = state_32120;
var statearr_32164_34788 = state_32120__$1;
(statearr_32164_34788[(2)] = inst_32109);

(statearr_32164_34788[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30343__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30343__auto____0 = (function (){
var statearr_32166 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32166[(0)] = cljs$core$async$reduce_$_state_machine__30343__auto__);

(statearr_32166[(1)] = (1));

return statearr_32166;
});
var cljs$core$async$reduce_$_state_machine__30343__auto____1 = (function (state_32120){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_32120);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e32170){var ex__30346__auto__ = e32170;
var statearr_32172_34793 = state_32120;
(statearr_32172_34793[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_32120[(4)]))){
var statearr_32174_34794 = state_32120;
(statearr_32174_34794[(1)] = cljs.core.first((state_32120[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34797 = state_32120;
state_32120 = G__34797;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30343__auto__ = function(state_32120){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30343__auto____1.call(this,state_32120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30343__auto____0;
cljs$core$async$reduce_$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30343__auto____1;
return cljs$core$async$reduce_$_state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_32178 = f__31271__auto__();
(statearr_32178[(6)] = c__31270__auto__);

return statearr_32178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));

return c__31270__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__31270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_32191){
var state_val_32192 = (state_32191[(1)]);
if((state_val_32192 === (1))){
var inst_32184 = cljs.core.async.reduce(f__$1,init,ch);
var state_32191__$1 = state_32191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32191__$1,(2),inst_32184);
} else {
if((state_val_32192 === (2))){
var inst_32186 = (state_32191[(2)]);
var inst_32188 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32186) : f__$1.call(null, inst_32186));
var state_32191__$1 = state_32191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32191__$1,inst_32188);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30343__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30343__auto____0 = (function (){
var statearr_32200 = [null,null,null,null,null,null,null];
(statearr_32200[(0)] = cljs$core$async$transduce_$_state_machine__30343__auto__);

(statearr_32200[(1)] = (1));

return statearr_32200;
});
var cljs$core$async$transduce_$_state_machine__30343__auto____1 = (function (state_32191){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_32191);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e32202){var ex__30346__auto__ = e32202;
var statearr_32203_34799 = state_32191;
(statearr_32203_34799[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_32191[(4)]))){
var statearr_32206_34800 = state_32191;
(statearr_32206_34800[(1)] = cljs.core.first((state_32191[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34804 = state_32191;
state_32191 = G__34804;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30343__auto__ = function(state_32191){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30343__auto____1.call(this,state_32191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30343__auto____0;
cljs$core$async$transduce_$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30343__auto____1;
return cljs$core$async$transduce_$_state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_32214 = f__31271__auto__();
(statearr_32214[(6)] = c__31270__auto__);

return statearr_32214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));

return c__31270__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32220 = arguments.length;
switch (G__32220) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_32259){
var state_val_32260 = (state_32259[(1)]);
if((state_val_32260 === (7))){
var inst_32240 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
var statearr_32271_34841 = state_32259__$1;
(statearr_32271_34841[(2)] = inst_32240);

(statearr_32271_34841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (1))){
var inst_32229 = cljs.core.seq(coll);
var inst_32231 = inst_32229;
var state_32259__$1 = (function (){var statearr_32272 = state_32259;
(statearr_32272[(7)] = inst_32231);

return statearr_32272;
})();
var statearr_32275_34842 = state_32259__$1;
(statearr_32275_34842[(2)] = null);

(statearr_32275_34842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (4))){
var inst_32231 = (state_32259[(7)]);
var inst_32237 = cljs.core.first(inst_32231);
var state_32259__$1 = state_32259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32259__$1,(7),ch,inst_32237);
} else {
if((state_val_32260 === (13))){
var inst_32252 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
var statearr_32278_34843 = state_32259__$1;
(statearr_32278_34843[(2)] = inst_32252);

(statearr_32278_34843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (6))){
var inst_32243 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
if(cljs.core.truth_(inst_32243)){
var statearr_32280_34844 = state_32259__$1;
(statearr_32280_34844[(1)] = (8));

} else {
var statearr_32282_34845 = state_32259__$1;
(statearr_32282_34845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (3))){
var inst_32257 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32259__$1,inst_32257);
} else {
if((state_val_32260 === (12))){
var state_32259__$1 = state_32259;
var statearr_32285_34852 = state_32259__$1;
(statearr_32285_34852[(2)] = null);

(statearr_32285_34852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (2))){
var inst_32231 = (state_32259[(7)]);
var state_32259__$1 = state_32259;
if(cljs.core.truth_(inst_32231)){
var statearr_32287_34853 = state_32259__$1;
(statearr_32287_34853[(1)] = (4));

} else {
var statearr_32290_34854 = state_32259__$1;
(statearr_32290_34854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (11))){
var inst_32249 = cljs.core.async.close_BANG_(ch);
var state_32259__$1 = state_32259;
var statearr_32292_34858 = state_32259__$1;
(statearr_32292_34858[(2)] = inst_32249);

(statearr_32292_34858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (9))){
var state_32259__$1 = state_32259;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32294_34859 = state_32259__$1;
(statearr_32294_34859[(1)] = (11));

} else {
var statearr_32295_34860 = state_32259__$1;
(statearr_32295_34860[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (5))){
var inst_32231 = (state_32259[(7)]);
var state_32259__$1 = state_32259;
var statearr_32299_34861 = state_32259__$1;
(statearr_32299_34861[(2)] = inst_32231);

(statearr_32299_34861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (10))){
var inst_32254 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
var statearr_32300_34862 = state_32259__$1;
(statearr_32300_34862[(2)] = inst_32254);

(statearr_32300_34862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (8))){
var inst_32231 = (state_32259[(7)]);
var inst_32245 = cljs.core.next(inst_32231);
var inst_32231__$1 = inst_32245;
var state_32259__$1 = (function (){var statearr_32302 = state_32259;
(statearr_32302[(7)] = inst_32231__$1);

return statearr_32302;
})();
var statearr_32303_34867 = state_32259__$1;
(statearr_32303_34867[(2)] = null);

(statearr_32303_34867[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30343__auto__ = null;
var cljs$core$async$state_machine__30343__auto____0 = (function (){
var statearr_32307 = [null,null,null,null,null,null,null,null];
(statearr_32307[(0)] = cljs$core$async$state_machine__30343__auto__);

(statearr_32307[(1)] = (1));

return statearr_32307;
});
var cljs$core$async$state_machine__30343__auto____1 = (function (state_32259){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_32259);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e32309){var ex__30346__auto__ = e32309;
var statearr_32310_34869 = state_32259;
(statearr_32310_34869[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_32259[(4)]))){
var statearr_32314_34870 = state_32259;
(statearr_32314_34870[(1)] = cljs.core.first((state_32259[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34871 = state_32259;
state_32259 = G__34871;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$state_machine__30343__auto__ = function(state_32259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30343__auto____1.call(this,state_32259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30343__auto____0;
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30343__auto____1;
return cljs$core$async$state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_32322 = f__31271__auto__();
(statearr_32322[(6)] = c__31270__auto__);

return statearr_32322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));

return c__31270__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32346 = arguments.length;
switch (G__32346) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34877 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34877(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34878 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34878(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34879 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34879(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34880 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34880(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32400 = (function (ch,cs,meta32401){
this.ch = ch;
this.cs = cs;
this.meta32401 = meta32401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32402,meta32401__$1){
var self__ = this;
var _32402__$1 = this;
return (new cljs.core.async.t_cljs$core$async32400(self__.ch,self__.cs,meta32401__$1));
}));

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32402){
var self__ = this;
var _32402__$1 = this;
return self__.meta32401;
}));

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32400.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32401","meta32401",-502806695,null)], null);
}));

(cljs.core.async.t_cljs$core$async32400.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32400");

(cljs.core.async.t_cljs$core$async32400.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32400");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32400.
 */
cljs.core.async.__GT_t_cljs$core$async32400 = (function cljs$core$async$__GT_t_cljs$core$async32400(ch,cs,meta32401){
return (new cljs.core.async.t_cljs$core$async32400(ch,cs,meta32401));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async32400(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31270__auto___34885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_32610){
var state_val_32611 = (state_32610[(1)]);
if((state_val_32611 === (7))){
var inst_32606 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32616_34886 = state_32610__$1;
(statearr_32616_34886[(2)] = inst_32606);

(statearr_32616_34886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (20))){
var inst_32489 = (state_32610[(7)]);
var inst_32511 = cljs.core.first(inst_32489);
var inst_32512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32511,(0),null);
var inst_32513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32511,(1),null);
var state_32610__$1 = (function (){var statearr_32619 = state_32610;
(statearr_32619[(8)] = inst_32512);

return statearr_32619;
})();
if(cljs.core.truth_(inst_32513)){
var statearr_32620_34887 = state_32610__$1;
(statearr_32620_34887[(1)] = (22));

} else {
var statearr_32621_34888 = state_32610__$1;
(statearr_32621_34888[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (27))){
var inst_32442 = (state_32610[(9)]);
var inst_32543 = (state_32610[(10)]);
var inst_32541 = (state_32610[(11)]);
var inst_32553 = (state_32610[(12)]);
var inst_32553__$1 = cljs.core._nth(inst_32541,inst_32543);
var inst_32554 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32553__$1,inst_32442,done);
var state_32610__$1 = (function (){var statearr_32624 = state_32610;
(statearr_32624[(12)] = inst_32553__$1);

return statearr_32624;
})();
if(cljs.core.truth_(inst_32554)){
var statearr_32625_34891 = state_32610__$1;
(statearr_32625_34891[(1)] = (30));

} else {
var statearr_32626_34892 = state_32610__$1;
(statearr_32626_34892[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (1))){
var state_32610__$1 = state_32610;
var statearr_32627_34893 = state_32610__$1;
(statearr_32627_34893[(2)] = null);

(statearr_32627_34893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (24))){
var inst_32489 = (state_32610[(7)]);
var inst_32518 = (state_32610[(2)]);
var inst_32519 = cljs.core.next(inst_32489);
var inst_32453 = inst_32519;
var inst_32454 = null;
var inst_32455 = (0);
var inst_32456 = (0);
var state_32610__$1 = (function (){var statearr_32636 = state_32610;
(statearr_32636[(13)] = inst_32518);

(statearr_32636[(14)] = inst_32454);

(statearr_32636[(15)] = inst_32453);

(statearr_32636[(16)] = inst_32455);

(statearr_32636[(17)] = inst_32456);

return statearr_32636;
})();
var statearr_32637_34894 = state_32610__$1;
(statearr_32637_34894[(2)] = null);

(statearr_32637_34894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (39))){
var state_32610__$1 = state_32610;
var statearr_32642_34895 = state_32610__$1;
(statearr_32642_34895[(2)] = null);

(statearr_32642_34895[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (4))){
var inst_32442 = (state_32610[(9)]);
var inst_32442__$1 = (state_32610[(2)]);
var inst_32443 = (inst_32442__$1 == null);
var state_32610__$1 = (function (){var statearr_32652 = state_32610;
(statearr_32652[(9)] = inst_32442__$1);

return statearr_32652;
})();
if(cljs.core.truth_(inst_32443)){
var statearr_32654_34896 = state_32610__$1;
(statearr_32654_34896[(1)] = (5));

} else {
var statearr_32655_34897 = state_32610__$1;
(statearr_32655_34897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (15))){
var inst_32454 = (state_32610[(14)]);
var inst_32453 = (state_32610[(15)]);
var inst_32455 = (state_32610[(16)]);
var inst_32456 = (state_32610[(17)]);
var inst_32474 = (state_32610[(2)]);
var inst_32477 = (inst_32456 + (1));
var tmp32639 = inst_32454;
var tmp32640 = inst_32453;
var tmp32641 = inst_32455;
var inst_32453__$1 = tmp32640;
var inst_32454__$1 = tmp32639;
var inst_32455__$1 = tmp32641;
var inst_32456__$1 = inst_32477;
var state_32610__$1 = (function (){var statearr_32659 = state_32610;
(statearr_32659[(18)] = inst_32474);

(statearr_32659[(14)] = inst_32454__$1);

(statearr_32659[(15)] = inst_32453__$1);

(statearr_32659[(16)] = inst_32455__$1);

(statearr_32659[(17)] = inst_32456__$1);

return statearr_32659;
})();
var statearr_32660_34898 = state_32610__$1;
(statearr_32660_34898[(2)] = null);

(statearr_32660_34898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (21))){
var inst_32522 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32665_34899 = state_32610__$1;
(statearr_32665_34899[(2)] = inst_32522);

(statearr_32665_34899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (31))){
var inst_32553 = (state_32610[(12)]);
var inst_32557 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_32553);
var state_32610__$1 = state_32610;
var statearr_32669_34903 = state_32610__$1;
(statearr_32669_34903[(2)] = inst_32557);

(statearr_32669_34903[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (32))){
var inst_32540 = (state_32610[(19)]);
var inst_32543 = (state_32610[(10)]);
var inst_32542 = (state_32610[(20)]);
var inst_32541 = (state_32610[(11)]);
var inst_32559 = (state_32610[(2)]);
var inst_32561 = (inst_32543 + (1));
var tmp32662 = inst_32540;
var tmp32663 = inst_32542;
var tmp32664 = inst_32541;
var inst_32540__$1 = tmp32662;
var inst_32541__$1 = tmp32664;
var inst_32542__$1 = tmp32663;
var inst_32543__$1 = inst_32561;
var state_32610__$1 = (function (){var statearr_32671 = state_32610;
(statearr_32671[(19)] = inst_32540__$1);

(statearr_32671[(10)] = inst_32543__$1);

(statearr_32671[(20)] = inst_32542__$1);

(statearr_32671[(21)] = inst_32559);

(statearr_32671[(11)] = inst_32541__$1);

return statearr_32671;
})();
var statearr_32672_34907 = state_32610__$1;
(statearr_32672_34907[(2)] = null);

(statearr_32672_34907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (40))){
var inst_32573 = (state_32610[(22)]);
var inst_32581 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_32573);
var state_32610__$1 = state_32610;
var statearr_32673_34908 = state_32610__$1;
(statearr_32673_34908[(2)] = inst_32581);

(statearr_32673_34908[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (33))){
var inst_32564 = (state_32610[(23)]);
var inst_32566 = cljs.core.chunked_seq_QMARK_(inst_32564);
var state_32610__$1 = state_32610;
if(inst_32566){
var statearr_32674_34909 = state_32610__$1;
(statearr_32674_34909[(1)] = (36));

} else {
var statearr_32675_34910 = state_32610__$1;
(statearr_32675_34910[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (13))){
var inst_32468 = (state_32610[(24)]);
var inst_32471 = cljs.core.async.close_BANG_(inst_32468);
var state_32610__$1 = state_32610;
var statearr_32676_34911 = state_32610__$1;
(statearr_32676_34911[(2)] = inst_32471);

(statearr_32676_34911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (22))){
var inst_32512 = (state_32610[(8)]);
var inst_32515 = cljs.core.async.close_BANG_(inst_32512);
var state_32610__$1 = state_32610;
var statearr_32679_34912 = state_32610__$1;
(statearr_32679_34912[(2)] = inst_32515);

(statearr_32679_34912[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (36))){
var inst_32564 = (state_32610[(23)]);
var inst_32568 = cljs.core.chunk_first(inst_32564);
var inst_32569 = cljs.core.chunk_rest(inst_32564);
var inst_32570 = cljs.core.count(inst_32568);
var inst_32540 = inst_32569;
var inst_32541 = inst_32568;
var inst_32542 = inst_32570;
var inst_32543 = (0);
var state_32610__$1 = (function (){var statearr_32688 = state_32610;
(statearr_32688[(19)] = inst_32540);

(statearr_32688[(10)] = inst_32543);

(statearr_32688[(20)] = inst_32542);

(statearr_32688[(11)] = inst_32541);

return statearr_32688;
})();
var statearr_32689_34913 = state_32610__$1;
(statearr_32689_34913[(2)] = null);

(statearr_32689_34913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (41))){
var inst_32564 = (state_32610[(23)]);
var inst_32583 = (state_32610[(2)]);
var inst_32584 = cljs.core.next(inst_32564);
var inst_32540 = inst_32584;
var inst_32541 = null;
var inst_32542 = (0);
var inst_32543 = (0);
var state_32610__$1 = (function (){var statearr_32691 = state_32610;
(statearr_32691[(19)] = inst_32540);

(statearr_32691[(10)] = inst_32543);

(statearr_32691[(20)] = inst_32542);

(statearr_32691[(25)] = inst_32583);

(statearr_32691[(11)] = inst_32541);

return statearr_32691;
})();
var statearr_32692_34914 = state_32610__$1;
(statearr_32692_34914[(2)] = null);

(statearr_32692_34914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (43))){
var state_32610__$1 = state_32610;
var statearr_32693_34915 = state_32610__$1;
(statearr_32693_34915[(2)] = null);

(statearr_32693_34915[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (29))){
var inst_32592 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32703_34916 = state_32610__$1;
(statearr_32703_34916[(2)] = inst_32592);

(statearr_32703_34916[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (44))){
var inst_32603 = (state_32610[(2)]);
var state_32610__$1 = (function (){var statearr_32704 = state_32610;
(statearr_32704[(26)] = inst_32603);

return statearr_32704;
})();
var statearr_32705_34917 = state_32610__$1;
(statearr_32705_34917[(2)] = null);

(statearr_32705_34917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (6))){
var inst_32532 = (state_32610[(27)]);
var inst_32531 = cljs.core.deref(cs);
var inst_32532__$1 = cljs.core.keys(inst_32531);
var inst_32533 = cljs.core.count(inst_32532__$1);
var inst_32534 = cljs.core.reset_BANG_(dctr,inst_32533);
var inst_32539 = cljs.core.seq(inst_32532__$1);
var inst_32540 = inst_32539;
var inst_32541 = null;
var inst_32542 = (0);
var inst_32543 = (0);
var state_32610__$1 = (function (){var statearr_32706 = state_32610;
(statearr_32706[(19)] = inst_32540);

(statearr_32706[(28)] = inst_32534);

(statearr_32706[(10)] = inst_32543);

(statearr_32706[(20)] = inst_32542);

(statearr_32706[(27)] = inst_32532__$1);

(statearr_32706[(11)] = inst_32541);

return statearr_32706;
})();
var statearr_32711_34918 = state_32610__$1;
(statearr_32711_34918[(2)] = null);

(statearr_32711_34918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (28))){
var inst_32540 = (state_32610[(19)]);
var inst_32564 = (state_32610[(23)]);
var inst_32564__$1 = cljs.core.seq(inst_32540);
var state_32610__$1 = (function (){var statearr_32713 = state_32610;
(statearr_32713[(23)] = inst_32564__$1);

return statearr_32713;
})();
if(inst_32564__$1){
var statearr_32714_34919 = state_32610__$1;
(statearr_32714_34919[(1)] = (33));

} else {
var statearr_32715_34920 = state_32610__$1;
(statearr_32715_34920[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (25))){
var inst_32543 = (state_32610[(10)]);
var inst_32542 = (state_32610[(20)]);
var inst_32545 = (inst_32543 < inst_32542);
var inst_32546 = inst_32545;
var state_32610__$1 = state_32610;
if(cljs.core.truth_(inst_32546)){
var statearr_32716_34921 = state_32610__$1;
(statearr_32716_34921[(1)] = (27));

} else {
var statearr_32717_34922 = state_32610__$1;
(statearr_32717_34922[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (34))){
var state_32610__$1 = state_32610;
var statearr_32718_34924 = state_32610__$1;
(statearr_32718_34924[(2)] = null);

(statearr_32718_34924[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (17))){
var state_32610__$1 = state_32610;
var statearr_32725_34927 = state_32610__$1;
(statearr_32725_34927[(2)] = null);

(statearr_32725_34927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (3))){
var inst_32608 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32610__$1,inst_32608);
} else {
if((state_val_32611 === (12))){
var inst_32527 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32726_34928 = state_32610__$1;
(statearr_32726_34928[(2)] = inst_32527);

(statearr_32726_34928[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (2))){
var state_32610__$1 = state_32610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32610__$1,(4),ch);
} else {
if((state_val_32611 === (23))){
var state_32610__$1 = state_32610;
var statearr_32727_34929 = state_32610__$1;
(statearr_32727_34929[(2)] = null);

(statearr_32727_34929[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (35))){
var inst_32590 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32728_34930 = state_32610__$1;
(statearr_32728_34930[(2)] = inst_32590);

(statearr_32728_34930[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (19))){
var inst_32489 = (state_32610[(7)]);
var inst_32498 = cljs.core.chunk_first(inst_32489);
var inst_32501 = cljs.core.chunk_rest(inst_32489);
var inst_32504 = cljs.core.count(inst_32498);
var inst_32453 = inst_32501;
var inst_32454 = inst_32498;
var inst_32455 = inst_32504;
var inst_32456 = (0);
var state_32610__$1 = (function (){var statearr_32733 = state_32610;
(statearr_32733[(14)] = inst_32454);

(statearr_32733[(15)] = inst_32453);

(statearr_32733[(16)] = inst_32455);

(statearr_32733[(17)] = inst_32456);

return statearr_32733;
})();
var statearr_32734_34931 = state_32610__$1;
(statearr_32734_34931[(2)] = null);

(statearr_32734_34931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (11))){
var inst_32453 = (state_32610[(15)]);
var inst_32489 = (state_32610[(7)]);
var inst_32489__$1 = cljs.core.seq(inst_32453);
var state_32610__$1 = (function (){var statearr_32735 = state_32610;
(statearr_32735[(7)] = inst_32489__$1);

return statearr_32735;
})();
if(inst_32489__$1){
var statearr_32736_34932 = state_32610__$1;
(statearr_32736_34932[(1)] = (16));

} else {
var statearr_32737_34933 = state_32610__$1;
(statearr_32737_34933[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (9))){
var inst_32529 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32738_34934 = state_32610__$1;
(statearr_32738_34934[(2)] = inst_32529);

(statearr_32738_34934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (5))){
var inst_32449 = cljs.core.deref(cs);
var inst_32450 = cljs.core.seq(inst_32449);
var inst_32453 = inst_32450;
var inst_32454 = null;
var inst_32455 = (0);
var inst_32456 = (0);
var state_32610__$1 = (function (){var statearr_32739 = state_32610;
(statearr_32739[(14)] = inst_32454);

(statearr_32739[(15)] = inst_32453);

(statearr_32739[(16)] = inst_32455);

(statearr_32739[(17)] = inst_32456);

return statearr_32739;
})();
var statearr_32740_34935 = state_32610__$1;
(statearr_32740_34935[(2)] = null);

(statearr_32740_34935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (14))){
var state_32610__$1 = state_32610;
var statearr_32741_34936 = state_32610__$1;
(statearr_32741_34936[(2)] = null);

(statearr_32741_34936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (45))){
var inst_32600 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32742_34937 = state_32610__$1;
(statearr_32742_34937[(2)] = inst_32600);

(statearr_32742_34937[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (26))){
var inst_32532 = (state_32610[(27)]);
var inst_32594 = (state_32610[(2)]);
var inst_32596 = cljs.core.seq(inst_32532);
var state_32610__$1 = (function (){var statearr_32744 = state_32610;
(statearr_32744[(29)] = inst_32594);

return statearr_32744;
})();
if(inst_32596){
var statearr_32745_34938 = state_32610__$1;
(statearr_32745_34938[(1)] = (42));

} else {
var statearr_32746_34939 = state_32610__$1;
(statearr_32746_34939[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (16))){
var inst_32489 = (state_32610[(7)]);
var inst_32494 = cljs.core.chunked_seq_QMARK_(inst_32489);
var state_32610__$1 = state_32610;
if(inst_32494){
var statearr_32747_34940 = state_32610__$1;
(statearr_32747_34940[(1)] = (19));

} else {
var statearr_32748_34941 = state_32610__$1;
(statearr_32748_34941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (38))){
var inst_32587 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32749_34942 = state_32610__$1;
(statearr_32749_34942[(2)] = inst_32587);

(statearr_32749_34942[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (30))){
var state_32610__$1 = state_32610;
var statearr_32750_34943 = state_32610__$1;
(statearr_32750_34943[(2)] = null);

(statearr_32750_34943[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (10))){
var inst_32454 = (state_32610[(14)]);
var inst_32456 = (state_32610[(17)]);
var inst_32467 = cljs.core._nth(inst_32454,inst_32456);
var inst_32468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32467,(0),null);
var inst_32469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32467,(1),null);
var state_32610__$1 = (function (){var statearr_32751 = state_32610;
(statearr_32751[(24)] = inst_32468);

return statearr_32751;
})();
if(cljs.core.truth_(inst_32469)){
var statearr_32752_34944 = state_32610__$1;
(statearr_32752_34944[(1)] = (13));

} else {
var statearr_32753_34946 = state_32610__$1;
(statearr_32753_34946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (18))){
var inst_32525 = (state_32610[(2)]);
var state_32610__$1 = state_32610;
var statearr_32754_34950 = state_32610__$1;
(statearr_32754_34950[(2)] = inst_32525);

(statearr_32754_34950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (42))){
var state_32610__$1 = state_32610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32610__$1,(45),dchan);
} else {
if((state_val_32611 === (37))){
var inst_32442 = (state_32610[(9)]);
var inst_32564 = (state_32610[(23)]);
var inst_32573 = (state_32610[(22)]);
var inst_32573__$1 = cljs.core.first(inst_32564);
var inst_32577 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32573__$1,inst_32442,done);
var state_32610__$1 = (function (){var statearr_32755 = state_32610;
(statearr_32755[(22)] = inst_32573__$1);

return statearr_32755;
})();
if(cljs.core.truth_(inst_32577)){
var statearr_32756_34954 = state_32610__$1;
(statearr_32756_34954[(1)] = (39));

} else {
var statearr_32757_34955 = state_32610__$1;
(statearr_32757_34955[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32611 === (8))){
var inst_32455 = (state_32610[(16)]);
var inst_32456 = (state_32610[(17)]);
var inst_32458 = (inst_32456 < inst_32455);
var inst_32459 = inst_32458;
var state_32610__$1 = state_32610;
if(cljs.core.truth_(inst_32459)){
var statearr_32758_34956 = state_32610__$1;
(statearr_32758_34956[(1)] = (10));

} else {
var statearr_32759_34957 = state_32610__$1;
(statearr_32759_34957[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__30343__auto__ = null;
var cljs$core$async$mult_$_state_machine__30343__auto____0 = (function (){
var statearr_32761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32761[(0)] = cljs$core$async$mult_$_state_machine__30343__auto__);

(statearr_32761[(1)] = (1));

return statearr_32761;
});
var cljs$core$async$mult_$_state_machine__30343__auto____1 = (function (state_32610){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_32610);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e32764){var ex__30346__auto__ = e32764;
var statearr_32765_34958 = state_32610;
(statearr_32765_34958[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_32610[(4)]))){
var statearr_32766_34962 = state_32610;
(statearr_32766_34962[(1)] = cljs.core.first((state_32610[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34963 = state_32610;
state_32610 = G__34963;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30343__auto__ = function(state_32610){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30343__auto____1.call(this,state_32610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30343__auto____0;
cljs$core$async$mult_$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30343__auto____1;
return cljs$core$async$mult_$_state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_32767 = f__31271__auto__();
(statearr_32767[(6)] = c__31270__auto___34885);

return statearr_32767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32774 = arguments.length;
switch (G__32774) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34965 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34965(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34966 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34966(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34970 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34970(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34977 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34977(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34978 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34978(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___34979 = arguments.length;
var i__5727__auto___34980 = (0);
while(true){
if((i__5727__auto___34980 < len__5726__auto___34979)){
args__5732__auto__.push((arguments[i__5727__auto___34980]));

var G__34981 = (i__5727__auto___34980 + (1));
i__5727__auto___34980 = G__34981;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32809){
var map__32810 = p__32809;
var map__32810__$1 = cljs.core.__destructure_map(map__32810);
var opts = map__32810__$1;
var statearr_32811_34982 = state;
(statearr_32811_34982[(1)] = cont_block);


var temp__5811__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32812_34984 = state;
(statearr_32812_34984[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5811__auto__)){
var cb = temp__5811__auto__;
var statearr_32837_34985 = state;
(statearr_32837_34985[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32789){
var G__32790 = cljs.core.first(seq32789);
var seq32789__$1 = cljs.core.next(seq32789);
var G__32791 = cljs.core.first(seq32789__$1);
var seq32789__$2 = cljs.core.next(seq32789__$1);
var G__32792 = cljs.core.first(seq32789__$2);
var seq32789__$3 = cljs.core.next(seq32789__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32790,G__32791,G__32792,seq32789__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32853 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32854){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32854 = meta32854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32855,meta32854__$1){
var self__ = this;
var _32855__$1 = this;
return (new cljs.core.async.t_cljs$core$async32853(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32854__$1));
}));

(cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32855){
var self__ = this;
var _32855__$1 = this;
return self__.meta32854;
}));

(cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32853.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32854","meta32854",-1267057644,null)], null);
}));

(cljs.core.async.t_cljs$core$async32853.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32853");

(cljs.core.async.t_cljs$core$async32853.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32853");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32853.
 */
cljs.core.async.__GT_t_cljs$core$async32853 = (function cljs$core$async$__GT_t_cljs$core$async32853(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32854){
return (new cljs.core.async.t_cljs$core$async32853(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32854));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async32853(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31270__auto___34993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_32967){
var state_val_32968 = (state_32967[(1)]);
if((state_val_32968 === (7))){
var inst_32927 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
if(cljs.core.truth_(inst_32927)){
var statearr_32976_34994 = state_32967__$1;
(statearr_32976_34994[(1)] = (8));

} else {
var statearr_32977_34995 = state_32967__$1;
(statearr_32977_34995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (20))){
var inst_32919 = (state_32967[(7)]);
var state_32967__$1 = state_32967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32967__$1,(23),out,inst_32919);
} else {
if((state_val_32968 === (1))){
var inst_32890 = calc_state();
var inst_32894 = cljs.core.__destructure_map(inst_32890);
var inst_32895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32894,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32894,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32894,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32900 = inst_32890;
var state_32967__$1 = (function (){var statearr_32981 = state_32967;
(statearr_32981[(8)] = inst_32899);

(statearr_32981[(9)] = inst_32900);

(statearr_32981[(10)] = inst_32895);

(statearr_32981[(11)] = inst_32896);

return statearr_32981;
})();
var statearr_32982_34996 = state_32967__$1;
(statearr_32982_34996[(2)] = null);

(statearr_32982_34996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (24))){
var inst_32903 = (state_32967[(12)]);
var inst_32900 = inst_32903;
var state_32967__$1 = (function (){var statearr_32983 = state_32967;
(statearr_32983[(9)] = inst_32900);

return statearr_32983;
})();
var statearr_32984_34997 = state_32967__$1;
(statearr_32984_34997[(2)] = null);

(statearr_32984_34997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (4))){
var inst_32921 = (state_32967[(13)]);
var inst_32919 = (state_32967[(7)]);
var inst_32912 = (state_32967[(2)]);
var inst_32919__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32912,(0),null);
var inst_32920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32912,(1),null);
var inst_32921__$1 = (inst_32919__$1 == null);
var state_32967__$1 = (function (){var statearr_32988 = state_32967;
(statearr_32988[(13)] = inst_32921__$1);

(statearr_32988[(7)] = inst_32919__$1);

(statearr_32988[(14)] = inst_32920);

return statearr_32988;
})();
if(cljs.core.truth_(inst_32921__$1)){
var statearr_32989_35001 = state_32967__$1;
(statearr_32989_35001[(1)] = (5));

} else {
var statearr_32990_35002 = state_32967__$1;
(statearr_32990_35002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (15))){
var inst_32941 = (state_32967[(15)]);
var inst_32904 = (state_32967[(16)]);
var inst_32941__$1 = cljs.core.empty_QMARK_(inst_32904);
var state_32967__$1 = (function (){var statearr_32991 = state_32967;
(statearr_32991[(15)] = inst_32941__$1);

return statearr_32991;
})();
if(inst_32941__$1){
var statearr_32992_35003 = state_32967__$1;
(statearr_32992_35003[(1)] = (17));

} else {
var statearr_32993_35004 = state_32967__$1;
(statearr_32993_35004[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (21))){
var inst_32903 = (state_32967[(12)]);
var inst_32900 = inst_32903;
var state_32967__$1 = (function (){var statearr_32994 = state_32967;
(statearr_32994[(9)] = inst_32900);

return statearr_32994;
})();
var statearr_32995_35008 = state_32967__$1;
(statearr_32995_35008[(2)] = null);

(statearr_32995_35008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (13))){
var inst_32934 = (state_32967[(2)]);
var inst_32935 = calc_state();
var inst_32900 = inst_32935;
var state_32967__$1 = (function (){var statearr_32996 = state_32967;
(statearr_32996[(9)] = inst_32900);

(statearr_32996[(17)] = inst_32934);

return statearr_32996;
})();
var statearr_32997_35013 = state_32967__$1;
(statearr_32997_35013[(2)] = null);

(statearr_32997_35013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (22))){
var inst_32961 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
var statearr_32998_35014 = state_32967__$1;
(statearr_32998_35014[(2)] = inst_32961);

(statearr_32998_35014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (6))){
var inst_32920 = (state_32967[(14)]);
var inst_32925 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32920,change);
var state_32967__$1 = state_32967;
var statearr_33001_35015 = state_32967__$1;
(statearr_33001_35015[(2)] = inst_32925);

(statearr_33001_35015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (25))){
var state_32967__$1 = state_32967;
var statearr_33002_35019 = state_32967__$1;
(statearr_33002_35019[(2)] = null);

(statearr_33002_35019[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (17))){
var inst_32920 = (state_32967[(14)]);
var inst_32905 = (state_32967[(18)]);
var inst_32943 = (inst_32905.cljs$core$IFn$_invoke$arity$1 ? inst_32905.cljs$core$IFn$_invoke$arity$1(inst_32920) : inst_32905.call(null, inst_32920));
var inst_32944 = cljs.core.not(inst_32943);
var state_32967__$1 = state_32967;
var statearr_33007_35020 = state_32967__$1;
(statearr_33007_35020[(2)] = inst_32944);

(statearr_33007_35020[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (3))){
var inst_32965 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32967__$1,inst_32965);
} else {
if((state_val_32968 === (12))){
var state_32967__$1 = state_32967;
var statearr_33012_35021 = state_32967__$1;
(statearr_33012_35021[(2)] = null);

(statearr_33012_35021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (2))){
var inst_32900 = (state_32967[(9)]);
var inst_32903 = (state_32967[(12)]);
var inst_32903__$1 = cljs.core.__destructure_map(inst_32900);
var inst_32904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32903__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32903__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32903__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32967__$1 = (function (){var statearr_33013 = state_32967;
(statearr_33013[(16)] = inst_32904);

(statearr_33013[(18)] = inst_32905);

(statearr_33013[(12)] = inst_32903__$1);

return statearr_33013;
})();
return cljs.core.async.ioc_alts_BANG_(state_32967__$1,(4),inst_32906);
} else {
if((state_val_32968 === (23))){
var inst_32952 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
if(cljs.core.truth_(inst_32952)){
var statearr_33014_35022 = state_32967__$1;
(statearr_33014_35022[(1)] = (24));

} else {
var statearr_33015_35023 = state_32967__$1;
(statearr_33015_35023[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (19))){
var inst_32947 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
var statearr_33016_35024 = state_32967__$1;
(statearr_33016_35024[(2)] = inst_32947);

(statearr_33016_35024[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (11))){
var inst_32920 = (state_32967[(14)]);
var inst_32931 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32920);
var state_32967__$1 = state_32967;
var statearr_33017_35025 = state_32967__$1;
(statearr_33017_35025[(2)] = inst_32931);

(statearr_33017_35025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (9))){
var inst_32938 = (state_32967[(19)]);
var inst_32920 = (state_32967[(14)]);
var inst_32904 = (state_32967[(16)]);
var inst_32938__$1 = (inst_32904.cljs$core$IFn$_invoke$arity$1 ? inst_32904.cljs$core$IFn$_invoke$arity$1(inst_32920) : inst_32904.call(null, inst_32920));
var state_32967__$1 = (function (){var statearr_33018 = state_32967;
(statearr_33018[(19)] = inst_32938__$1);

return statearr_33018;
})();
if(cljs.core.truth_(inst_32938__$1)){
var statearr_33019_35026 = state_32967__$1;
(statearr_33019_35026[(1)] = (14));

} else {
var statearr_33020_35027 = state_32967__$1;
(statearr_33020_35027[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (5))){
var inst_32921 = (state_32967[(13)]);
var state_32967__$1 = state_32967;
var statearr_33021_35029 = state_32967__$1;
(statearr_33021_35029[(2)] = inst_32921);

(statearr_33021_35029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (14))){
var inst_32938 = (state_32967[(19)]);
var state_32967__$1 = state_32967;
var statearr_33022_35033 = state_32967__$1;
(statearr_33022_35033[(2)] = inst_32938);

(statearr_33022_35033[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (26))){
var inst_32957 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
var statearr_33023_35034 = state_32967__$1;
(statearr_33023_35034[(2)] = inst_32957);

(statearr_33023_35034[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (16))){
var inst_32949 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
if(cljs.core.truth_(inst_32949)){
var statearr_33025_35035 = state_32967__$1;
(statearr_33025_35035[(1)] = (20));

} else {
var statearr_33026_35036 = state_32967__$1;
(statearr_33026_35036[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (10))){
var inst_32963 = (state_32967[(2)]);
var state_32967__$1 = state_32967;
var statearr_33027_35037 = state_32967__$1;
(statearr_33027_35037[(2)] = inst_32963);

(statearr_33027_35037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (18))){
var inst_32941 = (state_32967[(15)]);
var state_32967__$1 = state_32967;
var statearr_33028_35041 = state_32967__$1;
(statearr_33028_35041[(2)] = inst_32941);

(statearr_33028_35041[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32968 === (8))){
var inst_32919 = (state_32967[(7)]);
var inst_32929 = (inst_32919 == null);
var state_32967__$1 = state_32967;
if(cljs.core.truth_(inst_32929)){
var statearr_33033_35042 = state_32967__$1;
(statearr_33033_35042[(1)] = (11));

} else {
var statearr_33034_35043 = state_32967__$1;
(statearr_33034_35043[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__30343__auto__ = null;
var cljs$core$async$mix_$_state_machine__30343__auto____0 = (function (){
var statearr_33042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33042[(0)] = cljs$core$async$mix_$_state_machine__30343__auto__);

(statearr_33042[(1)] = (1));

return statearr_33042;
});
var cljs$core$async$mix_$_state_machine__30343__auto____1 = (function (state_32967){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_32967);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e33044){var ex__30346__auto__ = e33044;
var statearr_33045_35044 = state_32967;
(statearr_33045_35044[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_32967[(4)]))){
var statearr_33046_35045 = state_32967;
(statearr_33046_35045[(1)] = cljs.core.first((state_32967[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35046 = state_32967;
state_32967 = G__35046;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30343__auto__ = function(state_32967){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30343__auto____1.call(this,state_32967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30343__auto____0;
cljs$core$async$mix_$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30343__auto____1;
return cljs$core$async$mix_$_state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_33049 = f__31271__auto__();
(statearr_33049[(6)] = c__31270__auto___34993);

return statearr_33049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35047 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35047(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35055 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35055(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35057 = (function() {
var G__35058 = null;
var G__35058__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35058__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35058 = function(p,v){
switch(arguments.length){
case 1:
return G__35058__1.call(this,p);
case 2:
return G__35058__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35058.cljs$core$IFn$_invoke$arity$1 = G__35058__1;
G__35058.cljs$core$IFn$_invoke$arity$2 = G__35058__2;
return G__35058;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33062 = arguments.length;
switch (G__33062) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35057(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35057(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33088 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33089){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33089 = meta33089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33090,meta33089__$1){
var self__ = this;
var _33090__$1 = this;
return (new cljs.core.async.t_cljs$core$async33088(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33089__$1));
}));

(cljs.core.async.t_cljs$core$async33088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33090){
var self__ = this;
var _33090__$1 = this;
return self__.meta33089;
}));

(cljs.core.async.t_cljs$core$async33088.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33088.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33088.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33088.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5811__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5811__auto__)){
var m = temp__5811__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33089","meta33089",-935465023,null)], null);
}));

(cljs.core.async.t_cljs$core$async33088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33088");

(cljs.core.async.t_cljs$core$async33088.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33088.
 */
cljs.core.async.__GT_t_cljs$core$async33088 = (function cljs$core$async$__GT_t_cljs$core$async33088(ch,topic_fn,buf_fn,mults,ensure_mult,meta33089){
return (new cljs.core.async.t_cljs$core$async33088(ch,topic_fn,buf_fn,mults,ensure_mult,meta33089));
});


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
var G__33078 = arguments.length;
switch (G__33078) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33068_SHARP_){
if(cljs.core.truth_((p1__33068_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33068_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33068_SHARP_.call(null, topic)))){
return p1__33068_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33068_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33088(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31270__auto___35070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_33192){
var state_val_33193 = (state_33192[(1)]);
if((state_val_33193 === (7))){
var inst_33185 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33202_35071 = state_33192__$1;
(statearr_33202_35071[(2)] = inst_33185);

(statearr_33202_35071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (20))){
var state_33192__$1 = state_33192;
var statearr_33207_35072 = state_33192__$1;
(statearr_33207_35072[(2)] = null);

(statearr_33207_35072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (1))){
var state_33192__$1 = state_33192;
var statearr_33210_35073 = state_33192__$1;
(statearr_33210_35073[(2)] = null);

(statearr_33210_35073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (24))){
var inst_33168 = (state_33192[(7)]);
var inst_33177 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33168);
var state_33192__$1 = state_33192;
var statearr_33214_35074 = state_33192__$1;
(statearr_33214_35074[(2)] = inst_33177);

(statearr_33214_35074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (4))){
var inst_33112 = (state_33192[(8)]);
var inst_33112__$1 = (state_33192[(2)]);
var inst_33115 = (inst_33112__$1 == null);
var state_33192__$1 = (function (){var statearr_33217 = state_33192;
(statearr_33217[(8)] = inst_33112__$1);

return statearr_33217;
})();
if(cljs.core.truth_(inst_33115)){
var statearr_33220_35075 = state_33192__$1;
(statearr_33220_35075[(1)] = (5));

} else {
var statearr_33221_35076 = state_33192__$1;
(statearr_33221_35076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (15))){
var inst_33162 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33222_35078 = state_33192__$1;
(statearr_33222_35078[(2)] = inst_33162);

(statearr_33222_35078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (21))){
var inst_33182 = (state_33192[(2)]);
var state_33192__$1 = (function (){var statearr_33224 = state_33192;
(statearr_33224[(9)] = inst_33182);

return statearr_33224;
})();
var statearr_33225_35082 = state_33192__$1;
(statearr_33225_35082[(2)] = null);

(statearr_33225_35082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (13))){
var inst_33141 = (state_33192[(10)]);
var inst_33143 = cljs.core.chunked_seq_QMARK_(inst_33141);
var state_33192__$1 = state_33192;
if(inst_33143){
var statearr_33227_35083 = state_33192__$1;
(statearr_33227_35083[(1)] = (16));

} else {
var statearr_33228_35084 = state_33192__$1;
(statearr_33228_35084[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (22))){
var inst_33174 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33174)){
var statearr_33229_35085 = state_33192__$1;
(statearr_33229_35085[(1)] = (23));

} else {
var statearr_33230_35086 = state_33192__$1;
(statearr_33230_35086[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (6))){
var inst_33112 = (state_33192[(8)]);
var inst_33170 = (state_33192[(11)]);
var inst_33168 = (state_33192[(7)]);
var inst_33168__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33112) : topic_fn.call(null, inst_33112));
var inst_33169 = cljs.core.deref(mults);
var inst_33170__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33169,inst_33168__$1);
var state_33192__$1 = (function (){var statearr_33231 = state_33192;
(statearr_33231[(11)] = inst_33170__$1);

(statearr_33231[(7)] = inst_33168__$1);

return statearr_33231;
})();
if(cljs.core.truth_(inst_33170__$1)){
var statearr_33236_35092 = state_33192__$1;
(statearr_33236_35092[(1)] = (19));

} else {
var statearr_33237_35093 = state_33192__$1;
(statearr_33237_35093[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (25))){
var inst_33179 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33238_35094 = state_33192__$1;
(statearr_33238_35094[(2)] = inst_33179);

(statearr_33238_35094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (17))){
var inst_33141 = (state_33192[(10)]);
var inst_33153 = cljs.core.first(inst_33141);
var inst_33154 = cljs.core.async.muxch_STAR_(inst_33153);
var inst_33155 = cljs.core.async.close_BANG_(inst_33154);
var inst_33156 = cljs.core.next(inst_33141);
var inst_33125 = inst_33156;
var inst_33126 = null;
var inst_33127 = (0);
var inst_33128 = (0);
var state_33192__$1 = (function (){var statearr_33240 = state_33192;
(statearr_33240[(12)] = inst_33128);

(statearr_33240[(13)] = inst_33155);

(statearr_33240[(14)] = inst_33126);

(statearr_33240[(15)] = inst_33125);

(statearr_33240[(16)] = inst_33127);

return statearr_33240;
})();
var statearr_33241_35095 = state_33192__$1;
(statearr_33241_35095[(2)] = null);

(statearr_33241_35095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (3))){
var inst_33188 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33192__$1,inst_33188);
} else {
if((state_val_33193 === (12))){
var inst_33164 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33242_35096 = state_33192__$1;
(statearr_33242_35096[(2)] = inst_33164);

(statearr_33242_35096[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (2))){
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33192__$1,(4),ch);
} else {
if((state_val_33193 === (23))){
var state_33192__$1 = state_33192;
var statearr_33244_35097 = state_33192__$1;
(statearr_33244_35097[(2)] = null);

(statearr_33244_35097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (19))){
var inst_33112 = (state_33192[(8)]);
var inst_33170 = (state_33192[(11)]);
var inst_33172 = cljs.core.async.muxch_STAR_(inst_33170);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33192__$1,(22),inst_33172,inst_33112);
} else {
if((state_val_33193 === (11))){
var inst_33141 = (state_33192[(10)]);
var inst_33125 = (state_33192[(15)]);
var inst_33141__$1 = cljs.core.seq(inst_33125);
var state_33192__$1 = (function (){var statearr_33251 = state_33192;
(statearr_33251[(10)] = inst_33141__$1);

return statearr_33251;
})();
if(inst_33141__$1){
var statearr_33252_35098 = state_33192__$1;
(statearr_33252_35098[(1)] = (13));

} else {
var statearr_33253_35099 = state_33192__$1;
(statearr_33253_35099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (9))){
var inst_33166 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33254_35100 = state_33192__$1;
(statearr_33254_35100[(2)] = inst_33166);

(statearr_33254_35100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (5))){
var inst_33122 = cljs.core.deref(mults);
var inst_33123 = cljs.core.vals(inst_33122);
var inst_33124 = cljs.core.seq(inst_33123);
var inst_33125 = inst_33124;
var inst_33126 = null;
var inst_33127 = (0);
var inst_33128 = (0);
var state_33192__$1 = (function (){var statearr_33255 = state_33192;
(statearr_33255[(12)] = inst_33128);

(statearr_33255[(14)] = inst_33126);

(statearr_33255[(15)] = inst_33125);

(statearr_33255[(16)] = inst_33127);

return statearr_33255;
})();
var statearr_33257_35101 = state_33192__$1;
(statearr_33257_35101[(2)] = null);

(statearr_33257_35101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (14))){
var state_33192__$1 = state_33192;
var statearr_33264_35102 = state_33192__$1;
(statearr_33264_35102[(2)] = null);

(statearr_33264_35102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (16))){
var inst_33141 = (state_33192[(10)]);
var inst_33147 = cljs.core.chunk_first(inst_33141);
var inst_33148 = cljs.core.chunk_rest(inst_33141);
var inst_33150 = cljs.core.count(inst_33147);
var inst_33125 = inst_33148;
var inst_33126 = inst_33147;
var inst_33127 = inst_33150;
var inst_33128 = (0);
var state_33192__$1 = (function (){var statearr_33269 = state_33192;
(statearr_33269[(12)] = inst_33128);

(statearr_33269[(14)] = inst_33126);

(statearr_33269[(15)] = inst_33125);

(statearr_33269[(16)] = inst_33127);

return statearr_33269;
})();
var statearr_33270_35103 = state_33192__$1;
(statearr_33270_35103[(2)] = null);

(statearr_33270_35103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (10))){
var inst_33128 = (state_33192[(12)]);
var inst_33126 = (state_33192[(14)]);
var inst_33125 = (state_33192[(15)]);
var inst_33127 = (state_33192[(16)]);
var inst_33133 = cljs.core._nth(inst_33126,inst_33128);
var inst_33134 = cljs.core.async.muxch_STAR_(inst_33133);
var inst_33135 = cljs.core.async.close_BANG_(inst_33134);
var inst_33138 = (inst_33128 + (1));
var tmp33261 = inst_33126;
var tmp33262 = inst_33125;
var tmp33263 = inst_33127;
var inst_33125__$1 = tmp33262;
var inst_33126__$1 = tmp33261;
var inst_33127__$1 = tmp33263;
var inst_33128__$1 = inst_33138;
var state_33192__$1 = (function (){var statearr_33274 = state_33192;
(statearr_33274[(12)] = inst_33128__$1);

(statearr_33274[(14)] = inst_33126__$1);

(statearr_33274[(15)] = inst_33125__$1);

(statearr_33274[(16)] = inst_33127__$1);

(statearr_33274[(17)] = inst_33135);

return statearr_33274;
})();
var statearr_33275_35108 = state_33192__$1;
(statearr_33275_35108[(2)] = null);

(statearr_33275_35108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (18))){
var inst_33159 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33276_35109 = state_33192__$1;
(statearr_33276_35109[(2)] = inst_33159);

(statearr_33276_35109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (8))){
var inst_33128 = (state_33192[(12)]);
var inst_33127 = (state_33192[(16)]);
var inst_33130 = (inst_33128 < inst_33127);
var inst_33131 = inst_33130;
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33131)){
var statearr_33280_35110 = state_33192__$1;
(statearr_33280_35110[(1)] = (10));

} else {
var statearr_33281_35111 = state_33192__$1;
(statearr_33281_35111[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__30343__auto__ = null;
var cljs$core$async$state_machine__30343__auto____0 = (function (){
var statearr_33282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33282[(0)] = cljs$core$async$state_machine__30343__auto__);

(statearr_33282[(1)] = (1));

return statearr_33282;
});
var cljs$core$async$state_machine__30343__auto____1 = (function (state_33192){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_33192);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e33283){var ex__30346__auto__ = e33283;
var statearr_33284_35122 = state_33192;
(statearr_33284_35122[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_33192[(4)]))){
var statearr_33287_35123 = state_33192;
(statearr_33287_35123[(1)] = cljs.core.first((state_33192[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35124 = state_33192;
state_33192 = G__35124;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$state_machine__30343__auto__ = function(state_33192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30343__auto____1.call(this,state_33192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30343__auto____0;
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30343__auto____1;
return cljs$core$async$state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_33288 = f__31271__auto__();
(statearr_33288[(6)] = c__31270__auto___35070);

return statearr_33288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33290 = arguments.length;
switch (G__33290) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33306 = arguments.length;
switch (G__33306) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__33316 = arguments.length;
switch (G__33316) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31270__auto___35140 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_33371){
var state_val_33372 = (state_33371[(1)]);
if((state_val_33372 === (7))){
var state_33371__$1 = state_33371;
var statearr_33385_35153 = state_33371__$1;
(statearr_33385_35153[(2)] = null);

(statearr_33385_35153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (1))){
var state_33371__$1 = state_33371;
var statearr_33386_35154 = state_33371__$1;
(statearr_33386_35154[(2)] = null);

(statearr_33386_35154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (4))){
var inst_33330 = (state_33371[(7)]);
var inst_33329 = (state_33371[(8)]);
var inst_33332 = (inst_33330 < inst_33329);
var state_33371__$1 = state_33371;
if(cljs.core.truth_(inst_33332)){
var statearr_33387_35155 = state_33371__$1;
(statearr_33387_35155[(1)] = (6));

} else {
var statearr_33388_35156 = state_33371__$1;
(statearr_33388_35156[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (15))){
var inst_33356 = (state_33371[(9)]);
var inst_33361 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33356);
var state_33371__$1 = state_33371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33371__$1,(17),out,inst_33361);
} else {
if((state_val_33372 === (13))){
var inst_33356 = (state_33371[(9)]);
var inst_33356__$1 = (state_33371[(2)]);
var inst_33357 = cljs.core.some(cljs.core.nil_QMARK_,inst_33356__$1);
var state_33371__$1 = (function (){var statearr_33396 = state_33371;
(statearr_33396[(9)] = inst_33356__$1);

return statearr_33396;
})();
if(cljs.core.truth_(inst_33357)){
var statearr_33397_35157 = state_33371__$1;
(statearr_33397_35157[(1)] = (14));

} else {
var statearr_33398_35158 = state_33371__$1;
(statearr_33398_35158[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (6))){
var state_33371__$1 = state_33371;
var statearr_33402_35159 = state_33371__$1;
(statearr_33402_35159[(2)] = null);

(statearr_33402_35159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (17))){
var inst_33363 = (state_33371[(2)]);
var state_33371__$1 = (function (){var statearr_33405 = state_33371;
(statearr_33405[(10)] = inst_33363);

return statearr_33405;
})();
var statearr_33406_35162 = state_33371__$1;
(statearr_33406_35162[(2)] = null);

(statearr_33406_35162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (3))){
var inst_33368 = (state_33371[(2)]);
var state_33371__$1 = state_33371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33371__$1,inst_33368);
} else {
if((state_val_33372 === (12))){
var _ = (function (){var statearr_33410 = state_33371;
(statearr_33410[(4)] = cljs.core.rest((state_33371[(4)])));

return statearr_33410;
})();
var state_33371__$1 = state_33371;
var ex33404 = (state_33371__$1[(2)]);
var statearr_33413_35163 = state_33371__$1;
(statearr_33413_35163[(5)] = ex33404);


if((ex33404 instanceof Object)){
var statearr_33416_35164 = state_33371__$1;
(statearr_33416_35164[(1)] = (11));

(statearr_33416_35164[(5)] = null);

} else {
throw ex33404;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (2))){
var inst_33328 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33329 = cnt;
var inst_33330 = (0);
var state_33371__$1 = (function (){var statearr_33423 = state_33371;
(statearr_33423[(11)] = inst_33328);

(statearr_33423[(7)] = inst_33330);

(statearr_33423[(8)] = inst_33329);

return statearr_33423;
})();
var statearr_33425_35165 = state_33371__$1;
(statearr_33425_35165[(2)] = null);

(statearr_33425_35165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (11))){
var inst_33335 = (state_33371[(2)]);
var inst_33336 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33371__$1 = (function (){var statearr_33428 = state_33371;
(statearr_33428[(12)] = inst_33335);

return statearr_33428;
})();
var statearr_33430_35166 = state_33371__$1;
(statearr_33430_35166[(2)] = inst_33336);

(statearr_33430_35166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (9))){
var inst_33330 = (state_33371[(7)]);
var _ = (function (){var statearr_33431 = state_33371;
(statearr_33431[(4)] = cljs.core.cons((12),(state_33371[(4)])));

return statearr_33431;
})();
var inst_33342 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33330) : chs__$1.call(null, inst_33330));
var inst_33343 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33330) : done.call(null, inst_33330));
var inst_33344 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33342,inst_33343);
var ___$1 = (function (){var statearr_33432 = state_33371;
(statearr_33432[(4)] = cljs.core.rest((state_33371[(4)])));

return statearr_33432;
})();
var state_33371__$1 = state_33371;
var statearr_33434_35167 = state_33371__$1;
(statearr_33434_35167[(2)] = inst_33344);

(statearr_33434_35167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (5))){
var inst_33354 = (state_33371[(2)]);
var state_33371__$1 = (function (){var statearr_33435 = state_33371;
(statearr_33435[(13)] = inst_33354);

return statearr_33435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33371__$1,(13),dchan);
} else {
if((state_val_33372 === (14))){
var inst_33359 = cljs.core.async.close_BANG_(out);
var state_33371__$1 = state_33371;
var statearr_33436_35168 = state_33371__$1;
(statearr_33436_35168[(2)] = inst_33359);

(statearr_33436_35168[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (16))){
var inst_33366 = (state_33371[(2)]);
var state_33371__$1 = state_33371;
var statearr_33440_35169 = state_33371__$1;
(statearr_33440_35169[(2)] = inst_33366);

(statearr_33440_35169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (10))){
var inst_33330 = (state_33371[(7)]);
var inst_33347 = (state_33371[(2)]);
var inst_33348 = (inst_33330 + (1));
var inst_33330__$1 = inst_33348;
var state_33371__$1 = (function (){var statearr_33442 = state_33371;
(statearr_33442[(14)] = inst_33347);

(statearr_33442[(7)] = inst_33330__$1);

return statearr_33442;
})();
var statearr_33444_35170 = state_33371__$1;
(statearr_33444_35170[(2)] = null);

(statearr_33444_35170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (8))){
var inst_33352 = (state_33371[(2)]);
var state_33371__$1 = state_33371;
var statearr_33445_35171 = state_33371__$1;
(statearr_33445_35171[(2)] = inst_33352);

(statearr_33445_35171[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__30343__auto__ = null;
var cljs$core$async$state_machine__30343__auto____0 = (function (){
var statearr_33447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33447[(0)] = cljs$core$async$state_machine__30343__auto__);

(statearr_33447[(1)] = (1));

return statearr_33447;
});
var cljs$core$async$state_machine__30343__auto____1 = (function (state_33371){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_33371);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e33450){var ex__30346__auto__ = e33450;
var statearr_33451_35172 = state_33371;
(statearr_33451_35172[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_33371[(4)]))){
var statearr_33454_35173 = state_33371;
(statearr_33454_35173[(1)] = cljs.core.first((state_33371[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35175 = state_33371;
state_33371 = G__35175;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$state_machine__30343__auto__ = function(state_33371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30343__auto____1.call(this,state_33371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30343__auto____0;
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30343__auto____1;
return cljs$core$async$state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_33455 = f__31271__auto__();
(statearr_33455[(6)] = c__31270__auto___35140);

return statearr_33455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33466 = arguments.length;
switch (G__33466) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31270__auto___35183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_33506){
var state_val_33507 = (state_33506[(1)]);
if((state_val_33507 === (7))){
var inst_33485 = (state_33506[(7)]);
var inst_33486 = (state_33506[(8)]);
var inst_33485__$1 = (state_33506[(2)]);
var inst_33486__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33485__$1,(0),null);
var inst_33487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33485__$1,(1),null);
var inst_33488 = (inst_33486__$1 == null);
var state_33506__$1 = (function (){var statearr_33511 = state_33506;
(statearr_33511[(9)] = inst_33487);

(statearr_33511[(7)] = inst_33485__$1);

(statearr_33511[(8)] = inst_33486__$1);

return statearr_33511;
})();
if(cljs.core.truth_(inst_33488)){
var statearr_33515_35184 = state_33506__$1;
(statearr_33515_35184[(1)] = (8));

} else {
var statearr_33516_35185 = state_33506__$1;
(statearr_33516_35185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (1))){
var inst_33475 = cljs.core.vec(chs);
var inst_33476 = inst_33475;
var state_33506__$1 = (function (){var statearr_33517 = state_33506;
(statearr_33517[(10)] = inst_33476);

return statearr_33517;
})();
var statearr_33518_35190 = state_33506__$1;
(statearr_33518_35190[(2)] = null);

(statearr_33518_35190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (4))){
var inst_33476 = (state_33506[(10)]);
var state_33506__$1 = state_33506;
return cljs.core.async.ioc_alts_BANG_(state_33506__$1,(7),inst_33476);
} else {
if((state_val_33507 === (6))){
var inst_33502 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33520_35193 = state_33506__$1;
(statearr_33520_35193[(2)] = inst_33502);

(statearr_33520_35193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (3))){
var inst_33504 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33506__$1,inst_33504);
} else {
if((state_val_33507 === (2))){
var inst_33476 = (state_33506[(10)]);
var inst_33478 = cljs.core.count(inst_33476);
var inst_33479 = (inst_33478 > (0));
var state_33506__$1 = state_33506;
if(cljs.core.truth_(inst_33479)){
var statearr_33523_35194 = state_33506__$1;
(statearr_33523_35194[(1)] = (4));

} else {
var statearr_33524_35195 = state_33506__$1;
(statearr_33524_35195[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (11))){
var inst_33476 = (state_33506[(10)]);
var inst_33495 = (state_33506[(2)]);
var tmp33521 = inst_33476;
var inst_33476__$1 = tmp33521;
var state_33506__$1 = (function (){var statearr_33525 = state_33506;
(statearr_33525[(11)] = inst_33495);

(statearr_33525[(10)] = inst_33476__$1);

return statearr_33525;
})();
var statearr_33526_35201 = state_33506__$1;
(statearr_33526_35201[(2)] = null);

(statearr_33526_35201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (9))){
var inst_33486 = (state_33506[(8)]);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33506__$1,(11),out,inst_33486);
} else {
if((state_val_33507 === (5))){
var inst_33500 = cljs.core.async.close_BANG_(out);
var state_33506__$1 = state_33506;
var statearr_33531_35203 = state_33506__$1;
(statearr_33531_35203[(2)] = inst_33500);

(statearr_33531_35203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (10))){
var inst_33498 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33532_35206 = state_33506__$1;
(statearr_33532_35206[(2)] = inst_33498);

(statearr_33532_35206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (8))){
var inst_33487 = (state_33506[(9)]);
var inst_33485 = (state_33506[(7)]);
var inst_33486 = (state_33506[(8)]);
var inst_33476 = (state_33506[(10)]);
var inst_33490 = (function (){var cs = inst_33476;
var vec__33481 = inst_33485;
var v = inst_33486;
var c = inst_33487;
return (function (p1__33462_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33462_SHARP_);
});
})();
var inst_33491 = cljs.core.filterv(inst_33490,inst_33476);
var inst_33476__$1 = inst_33491;
var state_33506__$1 = (function (){var statearr_33535 = state_33506;
(statearr_33535[(10)] = inst_33476__$1);

return statearr_33535;
})();
var statearr_33536_35217 = state_33506__$1;
(statearr_33536_35217[(2)] = null);

(statearr_33536_35217[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30343__auto__ = null;
var cljs$core$async$state_machine__30343__auto____0 = (function (){
var statearr_33537 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33537[(0)] = cljs$core$async$state_machine__30343__auto__);

(statearr_33537[(1)] = (1));

return statearr_33537;
});
var cljs$core$async$state_machine__30343__auto____1 = (function (state_33506){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_33506);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e33538){var ex__30346__auto__ = e33538;
var statearr_33539_35219 = state_33506;
(statearr_33539_35219[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_33506[(4)]))){
var statearr_33541_35220 = state_33506;
(statearr_33541_35220[(1)] = cljs.core.first((state_33506[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35221 = state_33506;
state_33506 = G__35221;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$state_machine__30343__auto__ = function(state_33506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30343__auto____1.call(this,state_33506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30343__auto____0;
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30343__auto____1;
return cljs$core$async$state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_33550 = f__31271__auto__();
(statearr_33550[(6)] = c__31270__auto___35183);

return statearr_33550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33565 = arguments.length;
switch (G__33565) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31270__auto___35230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_33609){
var state_val_33610 = (state_33609[(1)]);
if((state_val_33610 === (7))){
var inst_33591 = (state_33609[(7)]);
var inst_33591__$1 = (state_33609[(2)]);
var inst_33592 = (inst_33591__$1 == null);
var inst_33593 = cljs.core.not(inst_33592);
var state_33609__$1 = (function (){var statearr_33615 = state_33609;
(statearr_33615[(7)] = inst_33591__$1);

return statearr_33615;
})();
if(inst_33593){
var statearr_33617_35239 = state_33609__$1;
(statearr_33617_35239[(1)] = (8));

} else {
var statearr_33618_35240 = state_33609__$1;
(statearr_33618_35240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (1))){
var inst_33586 = (0);
var state_33609__$1 = (function (){var statearr_33619 = state_33609;
(statearr_33619[(8)] = inst_33586);

return statearr_33619;
})();
var statearr_33620_35241 = state_33609__$1;
(statearr_33620_35241[(2)] = null);

(statearr_33620_35241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (4))){
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33609__$1,(7),ch);
} else {
if((state_val_33610 === (6))){
var inst_33604 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33621_35242 = state_33609__$1;
(statearr_33621_35242[(2)] = inst_33604);

(statearr_33621_35242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (3))){
var inst_33606 = (state_33609[(2)]);
var inst_33607 = cljs.core.async.close_BANG_(out);
var state_33609__$1 = (function (){var statearr_33622 = state_33609;
(statearr_33622[(9)] = inst_33606);

return statearr_33622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33609__$1,inst_33607);
} else {
if((state_val_33610 === (2))){
var inst_33586 = (state_33609[(8)]);
var inst_33588 = (inst_33586 < n);
var state_33609__$1 = state_33609;
if(cljs.core.truth_(inst_33588)){
var statearr_33626_35249 = state_33609__$1;
(statearr_33626_35249[(1)] = (4));

} else {
var statearr_33627_35250 = state_33609__$1;
(statearr_33627_35250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (11))){
var inst_33586 = (state_33609[(8)]);
var inst_33596 = (state_33609[(2)]);
var inst_33597 = (inst_33586 + (1));
var inst_33586__$1 = inst_33597;
var state_33609__$1 = (function (){var statearr_33628 = state_33609;
(statearr_33628[(10)] = inst_33596);

(statearr_33628[(8)] = inst_33586__$1);

return statearr_33628;
})();
var statearr_33629_35251 = state_33609__$1;
(statearr_33629_35251[(2)] = null);

(statearr_33629_35251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (9))){
var state_33609__$1 = state_33609;
var statearr_33630_35253 = state_33609__$1;
(statearr_33630_35253[(2)] = null);

(statearr_33630_35253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (5))){
var state_33609__$1 = state_33609;
var statearr_33633_35257 = state_33609__$1;
(statearr_33633_35257[(2)] = null);

(statearr_33633_35257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (10))){
var inst_33601 = (state_33609[(2)]);
var state_33609__$1 = state_33609;
var statearr_33634_35258 = state_33609__$1;
(statearr_33634_35258[(2)] = inst_33601);

(statearr_33634_35258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33610 === (8))){
var inst_33591 = (state_33609[(7)]);
var state_33609__$1 = state_33609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33609__$1,(11),out,inst_33591);
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
});
return (function() {
var cljs$core$async$state_machine__30343__auto__ = null;
var cljs$core$async$state_machine__30343__auto____0 = (function (){
var statearr_33635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33635[(0)] = cljs$core$async$state_machine__30343__auto__);

(statearr_33635[(1)] = (1));

return statearr_33635;
});
var cljs$core$async$state_machine__30343__auto____1 = (function (state_33609){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_33609);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e33636){var ex__30346__auto__ = e33636;
var statearr_33637_35265 = state_33609;
(statearr_33637_35265[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_33609[(4)]))){
var statearr_33638_35266 = state_33609;
(statearr_33638_35266[(1)] = cljs.core.first((state_33609[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35267 = state_33609;
state_33609 = G__35267;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$state_machine__30343__auto__ = function(state_33609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30343__auto____1.call(this,state_33609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30343__auto____0;
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30343__auto____1;
return cljs$core$async$state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_33639 = f__31271__auto__();
(statearr_33639[(6)] = c__31270__auto___35230);

return statearr_33639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33651 = (function (f,ch,meta33646,_,fn1,meta33652){
this.f = f;
this.ch = ch;
this.meta33646 = meta33646;
this._ = _;
this.fn1 = fn1;
this.meta33652 = meta33652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33653,meta33652__$1){
var self__ = this;
var _33653__$1 = this;
return (new cljs.core.async.t_cljs$core$async33651(self__.f,self__.ch,self__.meta33646,self__._,self__.fn1,meta33652__$1));
}));

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33653){
var self__ = this;
var _33653__$1 = this;
return self__.meta33652;
}));

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33643_SHARP_){
var G__33656 = (((p1__33643_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33643_SHARP_) : self__.f.call(null, p1__33643_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33656) : f1.call(null, G__33656));
});
}));

(cljs.core.async.t_cljs$core$async33651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33646","meta33646",-314948612,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33645","cljs.core.async/t_cljs$core$async33645",1429127920,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33652","meta33652",1543111349,null)], null);
}));

(cljs.core.async.t_cljs$core$async33651.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33651");

(cljs.core.async.t_cljs$core$async33651.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33651");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33651.
 */
cljs.core.async.__GT_t_cljs$core$async33651 = (function cljs$core$async$__GT_t_cljs$core$async33651(f,ch,meta33646,_,fn1,meta33652){
return (new cljs.core.async.t_cljs$core$async33651(f,ch,meta33646,_,fn1,meta33652));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33645 = (function (f,ch,meta33646){
this.f = f;
this.ch = ch;
this.meta33646 = meta33646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33647,meta33646__$1){
var self__ = this;
var _33647__$1 = this;
return (new cljs.core.async.t_cljs$core$async33645(self__.f,self__.ch,meta33646__$1));
}));

(cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33647){
var self__ = this;
var _33647__$1 = this;
return self__.meta33646;
}));

(cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33651(self__.f,self__.ch,self__.meta33646,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33659 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33659) : self__.f.call(null, G__33659));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33646","meta33646",-314948612,null)], null);
}));

(cljs.core.async.t_cljs$core$async33645.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33645");

(cljs.core.async.t_cljs$core$async33645.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33645");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33645.
 */
cljs.core.async.__GT_t_cljs$core$async33645 = (function cljs$core$async$__GT_t_cljs$core$async33645(f,ch,meta33646){
return (new cljs.core.async.t_cljs$core$async33645(f,ch,meta33646));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33645(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33677 = (function (f,ch,meta33678){
this.f = f;
this.ch = ch;
this.meta33678 = meta33678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33679,meta33678__$1){
var self__ = this;
var _33679__$1 = this;
return (new cljs.core.async.t_cljs$core$async33677(self__.f,self__.ch,meta33678__$1));
}));

(cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33679){
var self__ = this;
var _33679__$1 = this;
return self__.meta33678;
}));

(cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33678","meta33678",-439843791,null)], null);
}));

(cljs.core.async.t_cljs$core$async33677.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33677");

(cljs.core.async.t_cljs$core$async33677.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33677");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33677.
 */
cljs.core.async.__GT_t_cljs$core$async33677 = (function cljs$core$async$__GT_t_cljs$core$async33677(f,ch,meta33678){
return (new cljs.core.async.t_cljs$core$async33677(f,ch,meta33678));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33677(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33694 = (function (p,ch,meta33695){
this.p = p;
this.ch = ch;
this.meta33695 = meta33695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33696,meta33695__$1){
var self__ = this;
var _33696__$1 = this;
return (new cljs.core.async.t_cljs$core$async33694(self__.p,self__.ch,meta33695__$1));
}));

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33696){
var self__ = this;
var _33696__$1 = this;
return self__.meta33695;
}));

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33695","meta33695",1963532221,null)], null);
}));

(cljs.core.async.t_cljs$core$async33694.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33694");

(cljs.core.async.t_cljs$core$async33694.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33694");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33694.
 */
cljs.core.async.__GT_t_cljs$core$async33694 = (function cljs$core$async$__GT_t_cljs$core$async33694(p,ch,meta33695){
return (new cljs.core.async.t_cljs$core$async33694(p,ch,meta33695));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33694(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33738 = arguments.length;
switch (G__33738) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31270__auto___35294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_33766){
var state_val_33767 = (state_33766[(1)]);
if((state_val_33767 === (7))){
var inst_33762 = (state_33766[(2)]);
var state_33766__$1 = state_33766;
var statearr_33768_35296 = state_33766__$1;
(statearr_33768_35296[(2)] = inst_33762);

(statearr_33768_35296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (1))){
var state_33766__$1 = state_33766;
var statearr_33769_35297 = state_33766__$1;
(statearr_33769_35297[(2)] = null);

(statearr_33769_35297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (4))){
var inst_33748 = (state_33766[(7)]);
var inst_33748__$1 = (state_33766[(2)]);
var inst_33749 = (inst_33748__$1 == null);
var state_33766__$1 = (function (){var statearr_33776 = state_33766;
(statearr_33776[(7)] = inst_33748__$1);

return statearr_33776;
})();
if(cljs.core.truth_(inst_33749)){
var statearr_33777_35298 = state_33766__$1;
(statearr_33777_35298[(1)] = (5));

} else {
var statearr_33778_35299 = state_33766__$1;
(statearr_33778_35299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (6))){
var inst_33748 = (state_33766[(7)]);
var inst_33753 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33748) : p.call(null, inst_33748));
var state_33766__$1 = state_33766;
if(cljs.core.truth_(inst_33753)){
var statearr_33784_35305 = state_33766__$1;
(statearr_33784_35305[(1)] = (8));

} else {
var statearr_33785_35306 = state_33766__$1;
(statearr_33785_35306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (3))){
var inst_33764 = (state_33766[(2)]);
var state_33766__$1 = state_33766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33766__$1,inst_33764);
} else {
if((state_val_33767 === (2))){
var state_33766__$1 = state_33766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33766__$1,(4),ch);
} else {
if((state_val_33767 === (11))){
var inst_33756 = (state_33766[(2)]);
var state_33766__$1 = state_33766;
var statearr_33796_35323 = state_33766__$1;
(statearr_33796_35323[(2)] = inst_33756);

(statearr_33796_35323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (9))){
var state_33766__$1 = state_33766;
var statearr_33798_35324 = state_33766__$1;
(statearr_33798_35324[(2)] = null);

(statearr_33798_35324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (5))){
var inst_33751 = cljs.core.async.close_BANG_(out);
var state_33766__$1 = state_33766;
var statearr_33803_35325 = state_33766__$1;
(statearr_33803_35325[(2)] = inst_33751);

(statearr_33803_35325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (10))){
var inst_33759 = (state_33766[(2)]);
var state_33766__$1 = (function (){var statearr_33808 = state_33766;
(statearr_33808[(8)] = inst_33759);

return statearr_33808;
})();
var statearr_33813_35327 = state_33766__$1;
(statearr_33813_35327[(2)] = null);

(statearr_33813_35327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33767 === (8))){
var inst_33748 = (state_33766[(7)]);
var state_33766__$1 = state_33766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33766__$1,(11),out,inst_33748);
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
});
return (function() {
var cljs$core$async$state_machine__30343__auto__ = null;
var cljs$core$async$state_machine__30343__auto____0 = (function (){
var statearr_33814 = [null,null,null,null,null,null,null,null,null];
(statearr_33814[(0)] = cljs$core$async$state_machine__30343__auto__);

(statearr_33814[(1)] = (1));

return statearr_33814;
});
var cljs$core$async$state_machine__30343__auto____1 = (function (state_33766){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_33766);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e33815){var ex__30346__auto__ = e33815;
var statearr_33819_35343 = state_33766;
(statearr_33819_35343[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_33766[(4)]))){
var statearr_33820_35344 = state_33766;
(statearr_33820_35344[(1)] = cljs.core.first((state_33766[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35345 = state_33766;
state_33766 = G__35345;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$state_machine__30343__auto__ = function(state_33766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30343__auto____1.call(this,state_33766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30343__auto____0;
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30343__auto____1;
return cljs$core$async$state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_33827 = f__31271__auto__();
(statearr_33827[(6)] = c__31270__auto___35294);

return statearr_33827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33839 = arguments.length;
switch (G__33839) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31270__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_33945){
var state_val_33946 = (state_33945[(1)]);
if((state_val_33946 === (7))){
var inst_33936 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_33950_35365 = state_33945__$1;
(statearr_33950_35365[(2)] = inst_33936);

(statearr_33950_35365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (20))){
var inst_33892 = (state_33945[(7)]);
var inst_33914 = (state_33945[(2)]);
var inst_33915 = cljs.core.next(inst_33892);
var inst_33867 = inst_33915;
var inst_33868 = null;
var inst_33869 = (0);
var inst_33870 = (0);
var state_33945__$1 = (function (){var statearr_33959 = state_33945;
(statearr_33959[(8)] = inst_33869);

(statearr_33959[(9)] = inst_33914);

(statearr_33959[(10)] = inst_33868);

(statearr_33959[(11)] = inst_33870);

(statearr_33959[(12)] = inst_33867);

return statearr_33959;
})();
var statearr_33960_35382 = state_33945__$1;
(statearr_33960_35382[(2)] = null);

(statearr_33960_35382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (1))){
var state_33945__$1 = state_33945;
var statearr_33964_35393 = state_33945__$1;
(statearr_33964_35393[(2)] = null);

(statearr_33964_35393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (4))){
var inst_33853 = (state_33945[(13)]);
var inst_33853__$1 = (state_33945[(2)]);
var inst_33854 = (inst_33853__$1 == null);
var state_33945__$1 = (function (){var statearr_33965 = state_33945;
(statearr_33965[(13)] = inst_33853__$1);

return statearr_33965;
})();
if(cljs.core.truth_(inst_33854)){
var statearr_33966_35394 = state_33945__$1;
(statearr_33966_35394[(1)] = (5));

} else {
var statearr_33967_35395 = state_33945__$1;
(statearr_33967_35395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (15))){
var state_33945__$1 = state_33945;
var statearr_33976_35400 = state_33945__$1;
(statearr_33976_35400[(2)] = null);

(statearr_33976_35400[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (21))){
var state_33945__$1 = state_33945;
var statearr_33977_35404 = state_33945__$1;
(statearr_33977_35404[(2)] = null);

(statearr_33977_35404[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (13))){
var inst_33869 = (state_33945[(8)]);
var inst_33868 = (state_33945[(10)]);
var inst_33870 = (state_33945[(11)]);
var inst_33867 = (state_33945[(12)]);
var inst_33881 = (state_33945[(2)]);
var inst_33886 = (inst_33870 + (1));
var tmp33971 = inst_33869;
var tmp33972 = inst_33868;
var tmp33973 = inst_33867;
var inst_33867__$1 = tmp33973;
var inst_33868__$1 = tmp33972;
var inst_33869__$1 = tmp33971;
var inst_33870__$1 = inst_33886;
var state_33945__$1 = (function (){var statearr_33981 = state_33945;
(statearr_33981[(14)] = inst_33881);

(statearr_33981[(8)] = inst_33869__$1);

(statearr_33981[(10)] = inst_33868__$1);

(statearr_33981[(11)] = inst_33870__$1);

(statearr_33981[(12)] = inst_33867__$1);

return statearr_33981;
})();
var statearr_33982_35414 = state_33945__$1;
(statearr_33982_35414[(2)] = null);

(statearr_33982_35414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (22))){
var state_33945__$1 = state_33945;
var statearr_33985_35415 = state_33945__$1;
(statearr_33985_35415[(2)] = null);

(statearr_33985_35415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (6))){
var inst_33853 = (state_33945[(13)]);
var inst_33865 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33853) : f.call(null, inst_33853));
var inst_33866 = cljs.core.seq(inst_33865);
var inst_33867 = inst_33866;
var inst_33868 = null;
var inst_33869 = (0);
var inst_33870 = (0);
var state_33945__$1 = (function (){var statearr_33987 = state_33945;
(statearr_33987[(8)] = inst_33869);

(statearr_33987[(10)] = inst_33868);

(statearr_33987[(11)] = inst_33870);

(statearr_33987[(12)] = inst_33867);

return statearr_33987;
})();
var statearr_33988_35430 = state_33945__$1;
(statearr_33988_35430[(2)] = null);

(statearr_33988_35430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (17))){
var inst_33892 = (state_33945[(7)]);
var inst_33907 = cljs.core.chunk_first(inst_33892);
var inst_33908 = cljs.core.chunk_rest(inst_33892);
var inst_33909 = cljs.core.count(inst_33907);
var inst_33867 = inst_33908;
var inst_33868 = inst_33907;
var inst_33869 = inst_33909;
var inst_33870 = (0);
var state_33945__$1 = (function (){var statearr_33992 = state_33945;
(statearr_33992[(8)] = inst_33869);

(statearr_33992[(10)] = inst_33868);

(statearr_33992[(11)] = inst_33870);

(statearr_33992[(12)] = inst_33867);

return statearr_33992;
})();
var statearr_33993_35434 = state_33945__$1;
(statearr_33993_35434[(2)] = null);

(statearr_33993_35434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (3))){
var inst_33938 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33945__$1,inst_33938);
} else {
if((state_val_33946 === (12))){
var inst_33923 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_33994_35444 = state_33945__$1;
(statearr_33994_35444[(2)] = inst_33923);

(statearr_33994_35444[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (2))){
var state_33945__$1 = state_33945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33945__$1,(4),in$);
} else {
if((state_val_33946 === (23))){
var inst_33934 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_33998_35446 = state_33945__$1;
(statearr_33998_35446[(2)] = inst_33934);

(statearr_33998_35446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (19))){
var inst_33918 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_34002_35451 = state_33945__$1;
(statearr_34002_35451[(2)] = inst_33918);

(statearr_34002_35451[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (11))){
var inst_33892 = (state_33945[(7)]);
var inst_33867 = (state_33945[(12)]);
var inst_33892__$1 = cljs.core.seq(inst_33867);
var state_33945__$1 = (function (){var statearr_34018 = state_33945;
(statearr_34018[(7)] = inst_33892__$1);

return statearr_34018;
})();
if(inst_33892__$1){
var statearr_34019_35460 = state_33945__$1;
(statearr_34019_35460[(1)] = (14));

} else {
var statearr_34020_35461 = state_33945__$1;
(statearr_34020_35461[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (9))){
var inst_33925 = (state_33945[(2)]);
var inst_33929 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33945__$1 = (function (){var statearr_34021 = state_33945;
(statearr_34021[(15)] = inst_33925);

return statearr_34021;
})();
if(cljs.core.truth_(inst_33929)){
var statearr_34022_35462 = state_33945__$1;
(statearr_34022_35462[(1)] = (21));

} else {
var statearr_34023_35463 = state_33945__$1;
(statearr_34023_35463[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (5))){
var inst_33859 = cljs.core.async.close_BANG_(out);
var state_33945__$1 = state_33945;
var statearr_34024_35464 = state_33945__$1;
(statearr_34024_35464[(2)] = inst_33859);

(statearr_34024_35464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (14))){
var inst_33892 = (state_33945[(7)]);
var inst_33902 = cljs.core.chunked_seq_QMARK_(inst_33892);
var state_33945__$1 = state_33945;
if(inst_33902){
var statearr_34025_35467 = state_33945__$1;
(statearr_34025_35467[(1)] = (17));

} else {
var statearr_34026_35468 = state_33945__$1;
(statearr_34026_35468[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (16))){
var inst_33921 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_34027_35469 = state_33945__$1;
(statearr_34027_35469[(2)] = inst_33921);

(statearr_34027_35469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (10))){
var inst_33868 = (state_33945[(10)]);
var inst_33870 = (state_33945[(11)]);
var inst_33879 = cljs.core._nth(inst_33868,inst_33870);
var state_33945__$1 = state_33945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33945__$1,(13),out,inst_33879);
} else {
if((state_val_33946 === (18))){
var inst_33892 = (state_33945[(7)]);
var inst_33912 = cljs.core.first(inst_33892);
var state_33945__$1 = state_33945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33945__$1,(20),out,inst_33912);
} else {
if((state_val_33946 === (8))){
var inst_33869 = (state_33945[(8)]);
var inst_33870 = (state_33945[(11)]);
var inst_33872 = (inst_33870 < inst_33869);
var inst_33873 = inst_33872;
var state_33945__$1 = state_33945;
if(cljs.core.truth_(inst_33873)){
var statearr_34028_35473 = state_33945__$1;
(statearr_34028_35473[(1)] = (10));

} else {
var statearr_34029_35478 = state_33945__$1;
(statearr_34029_35478[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30343__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30343__auto____0 = (function (){
var statearr_34030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34030[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30343__auto__);

(statearr_34030[(1)] = (1));

return statearr_34030;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30343__auto____1 = (function (state_33945){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_33945);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e34031){var ex__30346__auto__ = e34031;
var statearr_34032_35482 = state_33945;
(statearr_34032_35482[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_33945[(4)]))){
var statearr_34034_35484 = state_33945;
(statearr_34034_35484[(1)] = cljs.core.first((state_33945[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35487 = state_33945;
state_33945 = G__35487;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30343__auto__ = function(state_33945){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30343__auto____1.call(this,state_33945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30343__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30343__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_34036 = f__31271__auto__();
(statearr_34036[(6)] = c__31270__auto__);

return statearr_34036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));

return c__31270__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34039 = arguments.length;
switch (G__34039) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34068 = arguments.length;
switch (G__34068) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34071 = arguments.length;
switch (G__34071) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31270__auto___35505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_34095){
var state_val_34096 = (state_34095[(1)]);
if((state_val_34096 === (7))){
var inst_34090 = (state_34095[(2)]);
var state_34095__$1 = state_34095;
var statearr_34097_35506 = state_34095__$1;
(statearr_34097_35506[(2)] = inst_34090);

(statearr_34097_35506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (1))){
var inst_34072 = null;
var state_34095__$1 = (function (){var statearr_34098 = state_34095;
(statearr_34098[(7)] = inst_34072);

return statearr_34098;
})();
var statearr_34099_35512 = state_34095__$1;
(statearr_34099_35512[(2)] = null);

(statearr_34099_35512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (4))){
var inst_34075 = (state_34095[(8)]);
var inst_34075__$1 = (state_34095[(2)]);
var inst_34076 = (inst_34075__$1 == null);
var inst_34077 = cljs.core.not(inst_34076);
var state_34095__$1 = (function (){var statearr_34100 = state_34095;
(statearr_34100[(8)] = inst_34075__$1);

return statearr_34100;
})();
if(inst_34077){
var statearr_34101_35513 = state_34095__$1;
(statearr_34101_35513[(1)] = (5));

} else {
var statearr_34102_35514 = state_34095__$1;
(statearr_34102_35514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (6))){
var state_34095__$1 = state_34095;
var statearr_34103_35516 = state_34095__$1;
(statearr_34103_35516[(2)] = null);

(statearr_34103_35516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (3))){
var inst_34092 = (state_34095[(2)]);
var inst_34093 = cljs.core.async.close_BANG_(out);
var state_34095__$1 = (function (){var statearr_34112 = state_34095;
(statearr_34112[(9)] = inst_34092);

return statearr_34112;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34095__$1,inst_34093);
} else {
if((state_val_34096 === (2))){
var state_34095__$1 = state_34095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34095__$1,(4),ch);
} else {
if((state_val_34096 === (11))){
var inst_34075 = (state_34095[(8)]);
var inst_34084 = (state_34095[(2)]);
var inst_34072 = inst_34075;
var state_34095__$1 = (function (){var statearr_34116 = state_34095;
(statearr_34116[(10)] = inst_34084);

(statearr_34116[(7)] = inst_34072);

return statearr_34116;
})();
var statearr_34117_35522 = state_34095__$1;
(statearr_34117_35522[(2)] = null);

(statearr_34117_35522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (9))){
var inst_34075 = (state_34095[(8)]);
var state_34095__$1 = state_34095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34095__$1,(11),out,inst_34075);
} else {
if((state_val_34096 === (5))){
var inst_34075 = (state_34095[(8)]);
var inst_34072 = (state_34095[(7)]);
var inst_34079 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34075,inst_34072);
var state_34095__$1 = state_34095;
if(inst_34079){
var statearr_34121_35528 = state_34095__$1;
(statearr_34121_35528[(1)] = (8));

} else {
var statearr_34122_35534 = state_34095__$1;
(statearr_34122_35534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (10))){
var inst_34087 = (state_34095[(2)]);
var state_34095__$1 = state_34095;
var statearr_34123_35535 = state_34095__$1;
(statearr_34123_35535[(2)] = inst_34087);

(statearr_34123_35535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34096 === (8))){
var inst_34072 = (state_34095[(7)]);
var tmp34119 = inst_34072;
var inst_34072__$1 = tmp34119;
var state_34095__$1 = (function (){var statearr_34124 = state_34095;
(statearr_34124[(7)] = inst_34072__$1);

return statearr_34124;
})();
var statearr_34125_35540 = state_34095__$1;
(statearr_34125_35540[(2)] = null);

(statearr_34125_35540[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30343__auto__ = null;
var cljs$core$async$state_machine__30343__auto____0 = (function (){
var statearr_34135 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34135[(0)] = cljs$core$async$state_machine__30343__auto__);

(statearr_34135[(1)] = (1));

return statearr_34135;
});
var cljs$core$async$state_machine__30343__auto____1 = (function (state_34095){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_34095);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e34145){var ex__30346__auto__ = e34145;
var statearr_34146_35550 = state_34095;
(statearr_34146_35550[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_34095[(4)]))){
var statearr_34147_35551 = state_34095;
(statearr_34147_35551[(1)] = cljs.core.first((state_34095[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35553 = state_34095;
state_34095 = G__35553;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$state_machine__30343__auto__ = function(state_34095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30343__auto____1.call(this,state_34095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30343__auto____0;
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30343__auto____1;
return cljs$core$async$state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_34149 = f__31271__auto__();
(statearr_34149[(6)] = c__31270__auto___35505);

return statearr_34149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34154 = arguments.length;
switch (G__34154) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31270__auto___35562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_34198){
var state_val_34199 = (state_34198[(1)]);
if((state_val_34199 === (7))){
var inst_34194 = (state_34198[(2)]);
var state_34198__$1 = state_34198;
var statearr_34205_35563 = state_34198__$1;
(statearr_34205_35563[(2)] = inst_34194);

(statearr_34205_35563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (1))){
var inst_34160 = (new Array(n));
var inst_34161 = inst_34160;
var inst_34162 = (0);
var state_34198__$1 = (function (){var statearr_34206 = state_34198;
(statearr_34206[(7)] = inst_34161);

(statearr_34206[(8)] = inst_34162);

return statearr_34206;
})();
var statearr_34207_35564 = state_34198__$1;
(statearr_34207_35564[(2)] = null);

(statearr_34207_35564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (4))){
var inst_34165 = (state_34198[(9)]);
var inst_34165__$1 = (state_34198[(2)]);
var inst_34166 = (inst_34165__$1 == null);
var inst_34167 = cljs.core.not(inst_34166);
var state_34198__$1 = (function (){var statearr_34214 = state_34198;
(statearr_34214[(9)] = inst_34165__$1);

return statearr_34214;
})();
if(inst_34167){
var statearr_34216_35567 = state_34198__$1;
(statearr_34216_35567[(1)] = (5));

} else {
var statearr_34218_35570 = state_34198__$1;
(statearr_34218_35570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (15))){
var inst_34188 = (state_34198[(2)]);
var state_34198__$1 = state_34198;
var statearr_34219_35573 = state_34198__$1;
(statearr_34219_35573[(2)] = inst_34188);

(statearr_34219_35573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (13))){
var state_34198__$1 = state_34198;
var statearr_34220_35574 = state_34198__$1;
(statearr_34220_35574[(2)] = null);

(statearr_34220_35574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (6))){
var inst_34162 = (state_34198[(8)]);
var inst_34184 = (inst_34162 > (0));
var state_34198__$1 = state_34198;
if(cljs.core.truth_(inst_34184)){
var statearr_34221_35576 = state_34198__$1;
(statearr_34221_35576[(1)] = (12));

} else {
var statearr_34222_35577 = state_34198__$1;
(statearr_34222_35577[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (3))){
var inst_34196 = (state_34198[(2)]);
var state_34198__$1 = state_34198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34198__$1,inst_34196);
} else {
if((state_val_34199 === (12))){
var inst_34161 = (state_34198[(7)]);
var inst_34186 = cljs.core.vec(inst_34161);
var state_34198__$1 = state_34198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34198__$1,(15),out,inst_34186);
} else {
if((state_val_34199 === (2))){
var state_34198__$1 = state_34198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34198__$1,(4),ch);
} else {
if((state_val_34199 === (11))){
var inst_34178 = (state_34198[(2)]);
var inst_34179 = (new Array(n));
var inst_34161 = inst_34179;
var inst_34162 = (0);
var state_34198__$1 = (function (){var statearr_34233 = state_34198;
(statearr_34233[(7)] = inst_34161);

(statearr_34233[(10)] = inst_34178);

(statearr_34233[(8)] = inst_34162);

return statearr_34233;
})();
var statearr_34234_35582 = state_34198__$1;
(statearr_34234_35582[(2)] = null);

(statearr_34234_35582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (9))){
var inst_34161 = (state_34198[(7)]);
var inst_34176 = cljs.core.vec(inst_34161);
var state_34198__$1 = state_34198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34198__$1,(11),out,inst_34176);
} else {
if((state_val_34199 === (5))){
var inst_34165 = (state_34198[(9)]);
var inst_34170 = (state_34198[(11)]);
var inst_34161 = (state_34198[(7)]);
var inst_34162 = (state_34198[(8)]);
var inst_34169 = (inst_34161[inst_34162] = inst_34165);
var inst_34170__$1 = (inst_34162 + (1));
var inst_34171 = (inst_34170__$1 < n);
var state_34198__$1 = (function (){var statearr_34238 = state_34198;
(statearr_34238[(11)] = inst_34170__$1);

(statearr_34238[(12)] = inst_34169);

return statearr_34238;
})();
if(cljs.core.truth_(inst_34171)){
var statearr_34239_35601 = state_34198__$1;
(statearr_34239_35601[(1)] = (8));

} else {
var statearr_34240_35603 = state_34198__$1;
(statearr_34240_35603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (14))){
var inst_34191 = (state_34198[(2)]);
var inst_34192 = cljs.core.async.close_BANG_(out);
var state_34198__$1 = (function (){var statearr_34243 = state_34198;
(statearr_34243[(13)] = inst_34191);

return statearr_34243;
})();
var statearr_34244_35609 = state_34198__$1;
(statearr_34244_35609[(2)] = inst_34192);

(statearr_34244_35609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (10))){
var inst_34182 = (state_34198[(2)]);
var state_34198__$1 = state_34198;
var statearr_34245_35610 = state_34198__$1;
(statearr_34245_35610[(2)] = inst_34182);

(statearr_34245_35610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (8))){
var inst_34170 = (state_34198[(11)]);
var inst_34161 = (state_34198[(7)]);
var tmp34242 = inst_34161;
var inst_34161__$1 = tmp34242;
var inst_34162 = inst_34170;
var state_34198__$1 = (function (){var statearr_34247 = state_34198;
(statearr_34247[(7)] = inst_34161__$1);

(statearr_34247[(8)] = inst_34162);

return statearr_34247;
})();
var statearr_34248_35611 = state_34198__$1;
(statearr_34248_35611[(2)] = null);

(statearr_34248_35611[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__30343__auto__ = null;
var cljs$core$async$state_machine__30343__auto____0 = (function (){
var statearr_34257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34257[(0)] = cljs$core$async$state_machine__30343__auto__);

(statearr_34257[(1)] = (1));

return statearr_34257;
});
var cljs$core$async$state_machine__30343__auto____1 = (function (state_34198){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_34198);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e34258){var ex__30346__auto__ = e34258;
var statearr_34259_35622 = state_34198;
(statearr_34259_35622[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_34198[(4)]))){
var statearr_34261_35623 = state_34198;
(statearr_34261_35623[(1)] = cljs.core.first((state_34198[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35624 = state_34198;
state_34198 = G__35624;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$state_machine__30343__auto__ = function(state_34198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30343__auto____1.call(this,state_34198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30343__auto____0;
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30343__auto____1;
return cljs$core$async$state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_34265 = f__31271__auto__();
(statearr_34265[(6)] = c__31270__auto___35562);

return statearr_34265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34308 = arguments.length;
switch (G__34308) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31270__auto___35653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31271__auto__ = (function (){var switch__30342__auto__ = (function (state_34395){
var state_val_34399 = (state_34395[(1)]);
if((state_val_34399 === (7))){
var inst_34391 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34402_35654 = state_34395__$1;
(statearr_34402_35654[(2)] = inst_34391);

(statearr_34402_35654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (1))){
var inst_34342 = [];
var inst_34343 = inst_34342;
var inst_34344 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34395__$1 = (function (){var statearr_34404 = state_34395;
(statearr_34404[(7)] = inst_34344);

(statearr_34404[(8)] = inst_34343);

return statearr_34404;
})();
var statearr_34406_35662 = state_34395__$1;
(statearr_34406_35662[(2)] = null);

(statearr_34406_35662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (4))){
var inst_34347 = (state_34395[(9)]);
var inst_34347__$1 = (state_34395[(2)]);
var inst_34348 = (inst_34347__$1 == null);
var inst_34349 = cljs.core.not(inst_34348);
var state_34395__$1 = (function (){var statearr_34412 = state_34395;
(statearr_34412[(9)] = inst_34347__$1);

return statearr_34412;
})();
if(inst_34349){
var statearr_34417_35673 = state_34395__$1;
(statearr_34417_35673[(1)] = (5));

} else {
var statearr_34418_35674 = state_34395__$1;
(statearr_34418_35674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (15))){
var inst_34343 = (state_34395[(8)]);
var inst_34383 = cljs.core.vec(inst_34343);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34395__$1,(18),out,inst_34383);
} else {
if((state_val_34399 === (13))){
var inst_34376 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34422_35681 = state_34395__$1;
(statearr_34422_35681[(2)] = inst_34376);

(statearr_34422_35681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (6))){
var inst_34343 = (state_34395[(8)]);
var inst_34380 = inst_34343.length;
var inst_34381 = (inst_34380 > (0));
var state_34395__$1 = state_34395;
if(cljs.core.truth_(inst_34381)){
var statearr_34423_35682 = state_34395__$1;
(statearr_34423_35682[(1)] = (15));

} else {
var statearr_34424_35683 = state_34395__$1;
(statearr_34424_35683[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (17))){
var inst_34388 = (state_34395[(2)]);
var inst_34389 = cljs.core.async.close_BANG_(out);
var state_34395__$1 = (function (){var statearr_34425 = state_34395;
(statearr_34425[(10)] = inst_34388);

return statearr_34425;
})();
var statearr_34426_35684 = state_34395__$1;
(statearr_34426_35684[(2)] = inst_34389);

(statearr_34426_35684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (3))){
var inst_34393 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34395__$1,inst_34393);
} else {
if((state_val_34399 === (12))){
var inst_34343 = (state_34395[(8)]);
var inst_34366 = cljs.core.vec(inst_34343);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34395__$1,(14),out,inst_34366);
} else {
if((state_val_34399 === (2))){
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34395__$1,(4),ch);
} else {
if((state_val_34399 === (11))){
var inst_34347 = (state_34395[(9)]);
var inst_34343 = (state_34395[(8)]);
var inst_34351 = (state_34395[(11)]);
var inst_34362 = inst_34343.push(inst_34347);
var tmp34430 = inst_34343;
var inst_34343__$1 = tmp34430;
var inst_34344 = inst_34351;
var state_34395__$1 = (function (){var statearr_34435 = state_34395;
(statearr_34435[(12)] = inst_34362);

(statearr_34435[(7)] = inst_34344);

(statearr_34435[(8)] = inst_34343__$1);

return statearr_34435;
})();
var statearr_34443_35693 = state_34395__$1;
(statearr_34443_35693[(2)] = null);

(statearr_34443_35693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (9))){
var inst_34344 = (state_34395[(7)]);
var inst_34358 = cljs.core.keyword_identical_QMARK_(inst_34344,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34395__$1 = state_34395;
var statearr_34448_35694 = state_34395__$1;
(statearr_34448_35694[(2)] = inst_34358);

(statearr_34448_35694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (5))){
var inst_34344 = (state_34395[(7)]);
var inst_34353 = (state_34395[(13)]);
var inst_34347 = (state_34395[(9)]);
var inst_34351 = (state_34395[(11)]);
var inst_34351__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34347) : f.call(null, inst_34347));
var inst_34353__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34351__$1,inst_34344);
var state_34395__$1 = (function (){var statearr_34450 = state_34395;
(statearr_34450[(13)] = inst_34353__$1);

(statearr_34450[(11)] = inst_34351__$1);

return statearr_34450;
})();
if(inst_34353__$1){
var statearr_34451_35698 = state_34395__$1;
(statearr_34451_35698[(1)] = (8));

} else {
var statearr_34455_35699 = state_34395__$1;
(statearr_34455_35699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (14))){
var inst_34347 = (state_34395[(9)]);
var inst_34351 = (state_34395[(11)]);
var inst_34368 = (state_34395[(2)]);
var inst_34369 = [];
var inst_34370 = inst_34369.push(inst_34347);
var inst_34343 = inst_34369;
var inst_34344 = inst_34351;
var state_34395__$1 = (function (){var statearr_34458 = state_34395;
(statearr_34458[(7)] = inst_34344);

(statearr_34458[(14)] = inst_34370);

(statearr_34458[(15)] = inst_34368);

(statearr_34458[(8)] = inst_34343);

return statearr_34458;
})();
var statearr_34460_35700 = state_34395__$1;
(statearr_34460_35700[(2)] = null);

(statearr_34460_35700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (16))){
var state_34395__$1 = state_34395;
var statearr_34461_35701 = state_34395__$1;
(statearr_34461_35701[(2)] = null);

(statearr_34461_35701[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (10))){
var inst_34360 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
if(cljs.core.truth_(inst_34360)){
var statearr_34465_35703 = state_34395__$1;
(statearr_34465_35703[(1)] = (11));

} else {
var statearr_34466_35704 = state_34395__$1;
(statearr_34466_35704[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (18))){
var inst_34385 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34467_35705 = state_34395__$1;
(statearr_34467_35705[(2)] = inst_34385);

(statearr_34467_35705[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34399 === (8))){
var inst_34353 = (state_34395[(13)]);
var state_34395__$1 = state_34395;
var statearr_34471_35706 = state_34395__$1;
(statearr_34471_35706[(2)] = inst_34353);

(statearr_34471_35706[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__30343__auto__ = null;
var cljs$core$async$state_machine__30343__auto____0 = (function (){
var statearr_34473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34473[(0)] = cljs$core$async$state_machine__30343__auto__);

(statearr_34473[(1)] = (1));

return statearr_34473;
});
var cljs$core$async$state_machine__30343__auto____1 = (function (state_34395){
while(true){
var ret_value__30344__auto__ = (function (){try{while(true){
var result__30345__auto__ = switch__30342__auto__(state_34395);
if(cljs.core.keyword_identical_QMARK_(result__30345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30345__auto__;
}
break;
}
}catch (e34477){var ex__30346__auto__ = e34477;
var statearr_34480_35711 = state_34395;
(statearr_34480_35711[(2)] = ex__30346__auto__);


if(cljs.core.seq((state_34395[(4)]))){
var statearr_34481_35716 = state_34395;
(statearr_34481_35716[(1)] = cljs.core.first((state_34395[(4)])));

} else {
throw ex__30346__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35717 = state_34395;
state_34395 = G__35717;
continue;
} else {
return ret_value__30344__auto__;
}
break;
}
});
cljs$core$async$state_machine__30343__auto__ = function(state_34395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30343__auto____1.call(this,state_34395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30343__auto____0;
cljs$core$async$state_machine__30343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30343__auto____1;
return cljs$core$async$state_machine__30343__auto__;
})()
})();
var state__31272__auto__ = (function (){var statearr_34483 = f__31271__auto__();
(statearr_34483[(6)] = c__31270__auto___35653);

return statearr_34483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31272__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
