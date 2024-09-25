goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36562,p__36563){
var map__36564 = p__36562;
var map__36564__$1 = cljs.core.__destructure_map(map__36564);
var svc = map__36564__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36564__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36564__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36564__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36565 = p__36563;
var map__36565__$1 = cljs.core.__destructure_map(map__36565);
var msg = map__36565__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36565__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36579,p__36580){
var map__36581 = p__36579;
var map__36581__$1 = cljs.core.__destructure_map(map__36581);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36581__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36582 = p__36580;
var map__36582__$1 = cljs.core.__destructure_map(map__36582);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36582__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36583,p__36584){
var map__36585 = p__36583;
var map__36585__$1 = cljs.core.__destructure_map(map__36585);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36585__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36585__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36587 = p__36584;
var map__36587__$1 = cljs.core.__destructure_map(map__36587);
var msg = map__36587__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36587__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36600,tid){
var map__36601 = p__36600;
var map__36601__$1 = cljs.core.__destructure_map(map__36601);
var svc = map__36601__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36601__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36632 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36633 = null;
var count__36634 = (0);
var i__36635 = (0);
while(true){
if((i__36635 < count__36634)){
var vec__36658 = chunk__36633.cljs$core$IIndexed$_nth$arity$2(null, i__36635);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36658,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36658,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36684 = seq__36632;
var G__36685 = chunk__36633;
var G__36686 = count__36634;
var G__36687 = (i__36635 + (1));
seq__36632 = G__36684;
chunk__36633 = G__36685;
count__36634 = G__36686;
i__36635 = G__36687;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__36632);
if(temp__5811__auto__){
var seq__36632__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36632__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36632__$1);
var G__36688 = cljs.core.chunk_rest(seq__36632__$1);
var G__36689 = c__5525__auto__;
var G__36690 = cljs.core.count(c__5525__auto__);
var G__36691 = (0);
seq__36632 = G__36688;
chunk__36633 = G__36689;
count__36634 = G__36690;
i__36635 = G__36691;
continue;
} else {
var vec__36664 = cljs.core.first(seq__36632__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36664,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36664,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36692 = cljs.core.next(seq__36632__$1);
var G__36693 = null;
var G__36694 = (0);
var G__36695 = (0);
seq__36632 = G__36692;
chunk__36633 = G__36693;
count__36634 = G__36694;
i__36635 = G__36695;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36604_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36604_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36605_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36605_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36607_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36607_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36608_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36608_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36668){
var map__36669 = p__36668;
var map__36669__$1 = cljs.core.__destructure_map(map__36669);
var svc = map__36669__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36669__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36669__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
