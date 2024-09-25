goog.provide('tool.app');
if((typeof tool !== 'undefined') && (typeof tool.app !== 'undefined') && (typeof tool.app._BANG_state !== 'undefined')){
} else {
tool.app._BANG_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","banner-text","ui/banner-text",954434387),"An annoying banner"], null));
}
tool.app.event_handler2 = (function tool$app$event_handler2(replicant_data,handler_data){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Click!"], 0));
});
tool.app.edit_view = (function tool$app$edit_view(p__29936){
var map__29937 = p__29936;
var map__29937__$1 = cljs.core.__destructure_map(map__29937);
var draftdd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29937__$1,new cljs.core.Keyword("something","draftdd","something/draftdd",965612752));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"This tool, (The Brauer Analysis Tool) allows you to perform a Brauer Analysis of some data. Enter a message below."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","prevent-default","dom/prevent-default",813921313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","assoc","db/assoc",430913843),new cljs.core.Keyword("something","saved","something/saved",717330902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get","db/get",1683179813),new cljs.core.Keyword("something","draft","something/draft",-273419524)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tool","process","tool/process",1621797858)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.wrap-input","span.wrap-input",-678006260),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#msg","textarea#msg",-1096540619),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","assoc","db/assoc",430913843),new cljs.core.Keyword("something","draft-input-element","something/draft-input-element",1091228319),new cljs.core.Keyword("dom","node","dom/node",581236848)], null)], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","assoc","db/assoc",430913843),new cljs.core.Keyword("something","draft","something/draft",-273419524),new cljs.core.Keyword("event","target.value","event/target.value",833322214)], null)], null)], null),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"rows","rows",850049680),(10)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Process"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Clean"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Example"], null)], null)], null);
});
tool.app.display_view = (function tool$app$display_view(p__29938){
var map__29939 = p__29938;
var map__29939__$1 = cljs.core.__destructure_map(map__29939);
var draft = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29939__$1,new cljs.core.Keyword("something","draft","something/draft",-273419524));
var saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29939__$1,new cljs.core.Keyword("something","saved","something/saved",717330902));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"On display"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","key","replicant/key",-670108117),"draft"], null),"Draft: ",draft], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","key","replicant/key",-670108117),"saved"], null),"Saved: ",saved], null)], null)], null);
});
tool.app.listar_vals = (function tool$app$listar_vals(lista){
if(cljs.core.empty_QMARK_(lista)){
return "";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(lista))," < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29941 = cljs.core.rest(lista);
return (tool.app.listar_vals.cljs$core$IFn$_invoke$arity$1 ? tool.app.listar_vals.cljs$core$IFn$_invoke$arity$1(G__29941) : tool.app.listar_vals.call(null, G__29941));
})())].join('');

}
});
tool.app.display_results = (function tool$app$display_results(p__29944){
var map__29945 = p__29944;
var map__29945__$1 = cljs.core.__destructure_map(map__29945);
var sec_suc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29945__$1,new cljs.core.Keyword("something","sec-suc","something/sec-suc",-231106876));
var saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29945__$1,new cljs.core.Keyword("something","saved","something/saved",717330902));
var frecuencias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29945__$1,new cljs.core.Keyword("something","frecuencias","something/frecuencias",51031581));
var sucesores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29945__$1,new cljs.core.Keyword("something","sucesores","something/sucesores",1230709178));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["desde adento: ",sec_suc,frecuencias], 0));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.collapsible","button.collapsible",-57472109),"Valencies"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29942_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29942_SHARP_),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((frecuencias.cljs$core$IFn$_invoke$arity$1 ? frecuencias.cljs$core$IFn$_invoke$arity$1(p1__29942_SHARP_) : frecuencias.call(null, p1__29942_SHARP_)))].join('')],null));
}),sec_suc))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.collapsible","button.collapsible",-57472109),"Succesor Sequences"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29943_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"li","li",723558921),["S_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.keys(p1__29943_SHARP_)))," = ",tool.app.listar_vals(cljs.core.first(cljs.core.vals(p1__29943_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(cljs.core.vals(p1__29943_SHARP_))))].join('')],null));
}),sucesores))], null)], null);
});
tool.app.main_view = (function tool$app$main_view(state){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whatever","whatever",-1293903397)], null)], null)], null),"BA - TOOL"], null),tool.app.edit_view(state),tool.app.display_view(state),tool.app.display_results(state),cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0))], null);
});
tool.app.render_BANG_ = (function tool$app$render_BANG_(state){
return replicant.dom.render(document.getElementById("app"),tool.app.main_view(state));
});
tool.app.enrich_action_from_event = (function tool$app$enrich_action_from_event(p__29946,actions){
var map__29947 = p__29946;
var map__29947__$1 = cljs.core.__destructure_map(map__29947);
var js_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29947__$1,new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29947__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return clojure.walk.postwalk((function (x){
if((x instanceof cljs.core.Keyword)){
var G__29948 = x;
var G__29948__$1 = (((G__29948 instanceof cljs.core.Keyword))?G__29948.fqn:null);
switch (G__29948__$1) {
case "event/target.value":
return js_event.target.value;

break;
case "dom/node":
return node;

break;
default:
return x;

}
} else {
return x;

}
}),actions);
});
tool.app.enrich_action_from_state = (function tool$app$enrich_action_from_state(state,action){
return clojure.walk.postwalk((function (x){
if(((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","get","db/get",1683179813),cljs.core.first(x))))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,cljs.core.second(x));
} else {
return x;

}
}),action);
});
tool.app.suc_nota = (function tool$app$suc_nota(lista,nota,id_pal){
if(cljs.core.empty_QMARK_(lista)){
return lista;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(lista),nota)){
return cljs.core.cons(["w_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_pal)].join(''),(function (){var G__29949 = cljs.core.rest(lista);
var G__29950 = nota;
var G__29951 = id_pal;
return (tool.app.suc_nota.cljs$core$IFn$_invoke$arity$3 ? tool.app.suc_nota.cljs$core$IFn$_invoke$arity$3(G__29949,G__29950,G__29951) : tool.app.suc_nota.call(null, G__29949,G__29950,G__29951));
})());
} else {
var G__29952 = cljs.core.rest(lista);
var G__29953 = nota;
var G__29954 = id_pal;
return (tool.app.suc_nota.cljs$core$IFn$_invoke$arity$3 ? tool.app.suc_nota.cljs$core$IFn$_invoke$arity$3(G__29952,G__29953,G__29954) : tool.app.suc_nota.call(null, G__29952,G__29953,G__29954));

}
}
});
tool.app.recorrer_vectores = (function tool$app$recorrer_vectores(lista,nota,pos){
if(cljs.core.empty_QMARK_(lista)){
return lista;
} else {
return cljs.core.cons(tool.app.suc_nota(cljs.core.first(lista),nota,pos),(function (){var G__29955 = cljs.core.rest(lista);
var G__29956 = nota;
var G__29957 = (pos + (1));
return (tool.app.recorrer_vectores.cljs$core$IFn$_invoke$arity$3 ? tool.app.recorrer_vectores.cljs$core$IFn$_invoke$arity$3(G__29955,G__29956,G__29957) : tool.app.recorrer_vectores.call(null, G__29955,G__29956,G__29957));
})());

}
});
tool.app.genfn_seq_suc = (function tool$app$genfn_seq_suc(w){
return (function (nota){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([nota,cljs.core.flatten(tool.app.recorrer_vectores(w,nota,(1)))]);
});
});
tool.app.process = (function tool$app$process(state){
var w = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29958_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__29958_SHARP_,/ /);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("something","draft","something/draft",-273419524).cljs$core$IFn$_invoke$arity$1(state),/\n/)));
var sec_suc = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(w));
var w_freq = cljs.core.frequencies(cljs.core.flatten(w));
var valencias = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29959_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__29959_SHARP_],[(w_freq.cljs$core$IFn$_invoke$arity$1 ? w_freq.cljs$core$IFn$_invoke$arity$1(p1__29959_SHARP_) : w_freq.call(null, p1__29959_SHARP_))]);
}),sec_suc);
var sucesores = cljs.core.map.cljs$core$IFn$_invoke$arity$2(tool.app.genfn_seq_suc(w),sec_suc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tool.app._BANG_state,cljs.core.assoc,new cljs.core.Keyword("something","frecuencias","something/frecuencias",51031581),w_freq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("something","sec-suc","something/sec-suc",-231106876),sec_suc,new cljs.core.Keyword("something","sucesores","something/sucesores",1230709178),sucesores], 0));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["w: ",w,"sec-suc: ",sec_suc," w-freq: ",w_freq," val: ",valencias], 0));
});
tool.app.event_handler = (function tool$app$event_handler(p__29960,actions){
var map__29961 = p__29960;
var map__29961__$1 = cljs.core.__destructure_map(map__29961);
var replicant_data = map__29961__$1;
var js_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29961__$1,new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146));
var seq__29962_29983 = cljs.core.seq(actions);
var chunk__29963_29984 = null;
var count__29964_29985 = (0);
var i__29965_29986 = (0);
while(true){
if((i__29965_29986 < count__29964_29985)){
var action_29987 = chunk__29963_29984.cljs$core$IIndexed$_nth$arity$2(null, i__29965_29986);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Triggered action",action_29987], 0));

var enriched_action_29988 = tool.app.enrich_action_from_state(cljs.core.deref(tool.app._BANG_state),tool.app.enrich_action_from_event(replicant_data,action_29987));
var vec__29974_29989 = enriched_action_29988;
var seq__29975_29990 = cljs.core.seq(vec__29974_29989);
var first__29976_29991 = cljs.core.first(seq__29975_29990);
var seq__29975_29992__$1 = cljs.core.next(seq__29975_29990);
var action_name_29993 = first__29976_29991;
var args_29994 = seq__29975_29992__$1;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Enriched action",enriched_action_29988], 0));

var G__29977_29995 = action_name_29993;
var G__29977_29996__$1 = (((G__29977_29995 instanceof cljs.core.Keyword))?G__29977_29995.fqn:null);
switch (G__29977_29996__$1) {
case "dom/prevent-default":
js_event.preventDefault();

break;
case "db/assoc":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,tool.app._BANG_state,cljs.core.assoc,args_29994);

break;
case "db/dissoc":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,tool.app._BANG_state,cljs.core.dissoc,args_29994);

break;
case "dom/set-input-text":
(cljs.core.first(args_29994).value = cljs.core.second(args_29994));

break;
case "dom/focus-element":
cljs.core.first(args_29994).focus();

break;
case "tool/process":
tool.app.process(cljs.core.deref(tool.app._BANG_state));

break;
default:
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unknown action",action_29987], 0));

}


var G__29998 = seq__29962_29983;
var G__29999 = chunk__29963_29984;
var G__30000 = count__29964_29985;
var G__30001 = (i__29965_29986 + (1));
seq__29962_29983 = G__29998;
chunk__29963_29984 = G__29999;
count__29964_29985 = G__30000;
i__29965_29986 = G__30001;
continue;
} else {
var temp__5811__auto___30002 = cljs.core.seq(seq__29962_29983);
if(temp__5811__auto___30002){
var seq__29962_30003__$1 = temp__5811__auto___30002;
if(cljs.core.chunked_seq_QMARK_(seq__29962_30003__$1)){
var c__5525__auto___30004 = cljs.core.chunk_first(seq__29962_30003__$1);
var G__30005 = cljs.core.chunk_rest(seq__29962_30003__$1);
var G__30006 = c__5525__auto___30004;
var G__30007 = cljs.core.count(c__5525__auto___30004);
var G__30008 = (0);
seq__29962_29983 = G__30005;
chunk__29963_29984 = G__30006;
count__29964_29985 = G__30007;
i__29965_29986 = G__30008;
continue;
} else {
var action_30009 = cljs.core.first(seq__29962_30003__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Triggered action",action_30009], 0));

var enriched_action_30010 = tool.app.enrich_action_from_state(cljs.core.deref(tool.app._BANG_state),tool.app.enrich_action_from_event(replicant_data,action_30009));
var vec__29978_30011 = enriched_action_30010;
var seq__29979_30012 = cljs.core.seq(vec__29978_30011);
var first__29980_30013 = cljs.core.first(seq__29979_30012);
var seq__29979_30014__$1 = cljs.core.next(seq__29979_30012);
var action_name_30015 = first__29980_30013;
var args_30016 = seq__29979_30014__$1;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Enriched action",enriched_action_30010], 0));

var G__29981_30017 = action_name_30015;
var G__29981_30018__$1 = (((G__29981_30017 instanceof cljs.core.Keyword))?G__29981_30017.fqn:null);
switch (G__29981_30018__$1) {
case "dom/prevent-default":
js_event.preventDefault();

break;
case "db/assoc":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,tool.app._BANG_state,cljs.core.assoc,args_30016);

break;
case "db/dissoc":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,tool.app._BANG_state,cljs.core.dissoc,args_30016);

break;
case "dom/set-input-text":
(cljs.core.first(args_30016).value = cljs.core.second(args_30016));

break;
case "dom/focus-element":
cljs.core.first(args_30016).focus();

break;
case "tool/process":
tool.app.process(cljs.core.deref(tool.app._BANG_state));

break;
default:
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unknown action",action_30009], 0));

}


var G__30020 = cljs.core.next(seq__29962_30003__$1);
var G__30021 = null;
var G__30022 = (0);
var G__30023 = (0);
seq__29962_29983 = G__30020;
chunk__29963_29984 = G__30021;
count__29964_29985 = G__30022;
i__29965_29986 = G__30023;
continue;
}
} else {
}
}
break;
}

return tool.app.render_BANG_(cljs.core.deref(tool.app._BANG_state));
});
tool.app.start_BANG_ = (function tool$app$start_BANG_(){
return tool.app.render_BANG_(cljs.core.deref(tool.app._BANG_state));
});
goog.exportSymbol('tool.app.start_BANG_', tool.app.start_BANG_);
tool.app.init_BANG_ = (function tool$app$init_BANG_(){
(gadget.inspector.inspect.cljs$core$IFn$_invoke$arity$2 ? gadget.inspector.inspect.cljs$core$IFn$_invoke$arity$2("App state",tool.app._BANG_state) : gadget.inspector.inspect.call(null, "App state",tool.app._BANG_state));

replicant.dom.set_dispatch_BANG_(tool.app.event_handler);

return tool.app.start_BANG_();
});
goog.exportSymbol('tool.app.init_BANG_', tool.app.init_BANG_);

//# sourceMappingURL=tool.app.js.map
