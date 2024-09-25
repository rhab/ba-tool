goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__30531){
var map__30532 = p__30531;
var map__30532__$1 = cljs.core.__destructure_map(map__30532);
var runtime = map__30532__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30532__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_30758 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_30758)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__30538 = runtime;
var G__30539 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_30758);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__30538,G__30539) : shadow.remote.runtime.shared.process.call(null, G__30538,G__30539));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__30540,res){
var map__30541 = p__30540;
var map__30541__$1 = cljs.core.__destructure_map(map__30541);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30541__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30541__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__30542 = res;
var G__30542__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30542,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__30542);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30542__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__30542__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__30548 = arguments.length;
switch (G__30548) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__30551,msg,handlers,timeout_after_ms){
var map__30553 = p__30551;
var map__30553__$1 = cljs.core.__destructure_map(map__30553);
var runtime = map__30553__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30553__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___30774 = arguments.length;
var i__5727__auto___30775 = (0);
while(true){
if((i__5727__auto___30775 < len__5726__auto___30774)){
args__5732__auto__.push((arguments[i__5727__auto___30775]));

var G__30778 = (i__5727__auto___30775 + (1));
i__5727__auto___30775 = G__30778;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30564,ev,args){
var map__30565 = p__30564;
var map__30565__$1 = cljs.core.__destructure_map(map__30565);
var runtime = map__30565__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30565__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__30569 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30572 = null;
var count__30573 = (0);
var i__30574 = (0);
while(true){
if((i__30574 < count__30573)){
var ext = chunk__30572.cljs$core$IIndexed$_nth$arity$2(null, i__30574);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30784 = seq__30569;
var G__30785 = chunk__30572;
var G__30786 = count__30573;
var G__30787 = (i__30574 + (1));
seq__30569 = G__30784;
chunk__30572 = G__30785;
count__30573 = G__30786;
i__30574 = G__30787;
continue;
} else {
var G__30788 = seq__30569;
var G__30789 = chunk__30572;
var G__30790 = count__30573;
var G__30791 = (i__30574 + (1));
seq__30569 = G__30788;
chunk__30572 = G__30789;
count__30573 = G__30790;
i__30574 = G__30791;
continue;
}
} else {
var temp__5811__auto__ = cljs.core.seq(seq__30569);
if(temp__5811__auto__){
var seq__30569__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30569__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30569__$1);
var G__30793 = cljs.core.chunk_rest(seq__30569__$1);
var G__30794 = c__5525__auto__;
var G__30795 = cljs.core.count(c__5525__auto__);
var G__30796 = (0);
seq__30569 = G__30793;
chunk__30572 = G__30794;
count__30573 = G__30795;
i__30574 = G__30796;
continue;
} else {
var ext = cljs.core.first(seq__30569__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__30798 = cljs.core.next(seq__30569__$1);
var G__30799 = null;
var G__30800 = (0);
var G__30801 = (0);
seq__30569 = G__30798;
chunk__30572 = G__30799;
count__30573 = G__30800;
i__30574 = G__30801;
continue;
} else {
var G__30804 = cljs.core.next(seq__30569__$1);
var G__30805 = null;
var G__30806 = (0);
var G__30807 = (0);
seq__30569 = G__30804;
chunk__30572 = G__30805;
count__30573 = G__30806;
i__30574 = G__30807;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq30554){
var G__30555 = cljs.core.first(seq30554);
var seq30554__$1 = cljs.core.next(seq30554);
var G__30556 = cljs.core.first(seq30554__$1);
var seq30554__$2 = cljs.core.next(seq30554__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30555,G__30556,seq30554__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__30605,p__30606){
var map__30607 = p__30605;
var map__30607__$1 = cljs.core.__destructure_map(map__30607);
var runtime = map__30607__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30607__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30608 = p__30606;
var map__30608__$1 = cljs.core.__destructure_map(map__30608);
var msg = map__30608__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30608__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__30615 = cljs.core.deref(state_ref);
var map__30615__$1 = cljs.core.__destructure_map(map__30615);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30615__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30615__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__30627,msg){
var map__30628 = p__30627;
var map__30628__$1 = cljs.core.__destructure_map(map__30628);
var runtime = map__30628__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30628__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__30638,key,p__30639){
var map__30640 = p__30638;
var map__30640__$1 = cljs.core.__destructure_map(map__30640);
var state = map__30640__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30640__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__30641 = p__30639;
var map__30641__$1 = cljs.core.__destructure_map(map__30641);
var spec = map__30641__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30641__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30641__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__30648,key,spec){
var map__30651 = p__30648;
var map__30651__$1 = cljs.core.__destructure_map(map__30651);
var runtime = map__30651__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30651__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5815__auto___30858 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5815__auto___30858 == null)){
} else {
var on_welcome_30868 = temp__5815__auto___30858;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_30868.cljs$core$IFn$_invoke$arity$0 ? on_welcome_30868.cljs$core$IFn$_invoke$arity$0() : on_welcome_30868.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__30656_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__30656_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__30657_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__30657_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__30658_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__30658_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__30659_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__30659_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__30660_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__30660_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__30677,key){
var map__30678 = p__30677;
var map__30678__$1 = cljs.core.__destructure_map(map__30678);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30678__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__30690,msg){
var map__30691 = p__30690;
var map__30691__$1 = cljs.core.__destructure_map(map__30691);
var runtime = map__30691__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30691__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__30701,p__30702){
var map__30704 = p__30701;
var map__30704__$1 = cljs.core.__destructure_map(map__30704);
var runtime = map__30704__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30704__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30705 = p__30702;
var map__30705__$1 = cljs.core.__destructure_map(map__30705);
var msg = map__30705__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30705__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30705__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__30717 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30719 = null;
var count__30720 = (0);
var i__30721 = (0);
while(true){
if((i__30721 < count__30720)){
var map__30739 = chunk__30719.cljs$core$IIndexed$_nth$arity$2(null, i__30721);
var map__30739__$1 = cljs.core.__destructure_map(map__30739);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30739__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__30914 = seq__30717;
var G__30915 = chunk__30719;
var G__30916 = count__30720;
var G__30917 = (i__30721 + (1));
seq__30717 = G__30914;
chunk__30719 = G__30915;
count__30720 = G__30916;
i__30721 = G__30917;
continue;
} else {
var G__30920 = seq__30717;
var G__30921 = chunk__30719;
var G__30922 = count__30720;
var G__30923 = (i__30721 + (1));
seq__30717 = G__30920;
chunk__30719 = G__30921;
count__30720 = G__30922;
i__30721 = G__30923;
continue;
}
} else {
var temp__5811__auto__ = cljs.core.seq(seq__30717);
if(temp__5811__auto__){
var seq__30717__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30717__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30717__$1);
var G__30925 = cljs.core.chunk_rest(seq__30717__$1);
var G__30926 = c__5525__auto__;
var G__30927 = cljs.core.count(c__5525__auto__);
var G__30928 = (0);
seq__30717 = G__30925;
chunk__30719 = G__30926;
count__30720 = G__30927;
i__30721 = G__30928;
continue;
} else {
var map__30742 = cljs.core.first(seq__30717__$1);
var map__30742__$1 = cljs.core.__destructure_map(map__30742);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30742__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__30930 = cljs.core.next(seq__30717__$1);
var G__30931 = null;
var G__30932 = (0);
var G__30933 = (0);
seq__30717 = G__30930;
chunk__30719 = G__30931;
count__30720 = G__30932;
i__30721 = G__30933;
continue;
} else {
var G__30934 = cljs.core.next(seq__30717__$1);
var G__30935 = null;
var G__30936 = (0);
var G__30937 = (0);
seq__30717 = G__30934;
chunk__30719 = G__30935;
count__30720 = G__30936;
i__30721 = G__30937;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
