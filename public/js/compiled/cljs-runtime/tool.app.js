goog.provide('tool.app');
if((typeof tool !== 'undefined') && (typeof tool.app !== 'undefined') && (typeof tool.app._BANG_state !== 'undefined')){
} else {
tool.app._BANG_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ui","banner-text","ui/banner-text",954434387),"An annoying banner"], null));
}
tool.app.event_handler2 = (function tool$app$event_handler2(replicant_data,handler_data){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Click!"], 0));
});
tool.app.edit_view = (function tool$app$edit_view(p__29500){
var map__29501 = p__29500;
var map__29501__$1 = cljs.core.__destructure_map(map__29501);
var draftdd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29501__$1,new cljs.core.Keyword("something","draftdd","something/draftdd",965612752));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"This tool, (The Brauer Analysis Tool) allows you to perform a Brauer Analysis of some data. Enter a message below. Separate each letter with spaces and each word with new line. Then press the 'Process' button. To see an example use the button 'Example'."], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","prevent-default","dom/prevent-default",813921313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","assoc","db/assoc",430913843),new cljs.core.Keyword("something","saved","something/saved",717330902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","get","db/get",1683179813),new cljs.core.Keyword("something","draft","something/draft",-273419524)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tool","process","tool/process",1621797858)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-container","div.flex-container",-1859832494),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Message"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#msg","textarea#msg",-1096540619),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","assoc","db/assoc",430913843),new cljs.core.Keyword("something","draft-input-element","something/draft-input-element",1091228319),new cljs.core.Keyword("dom","node","dom/node",581236848)], null)], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","assoc","db/assoc",430913843),new cljs.core.Keyword("something","draft","something/draft",-273419524),new cljs.core.Keyword("event","target.value","event/target.value",833322214)], null)], null)], null),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"rows","rows",850049680),(10)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Heights"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#hei","textarea#hei",-2112819336),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","assoc","db/assoc",430913843),new cljs.core.Keyword("something","height-input-element","something/height-input-element",-1001951625),new cljs.core.Keyword("dom","node","dom/node",581236848)], null)], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","assoc","db/assoc",430913843),new cljs.core.Keyword("something","height","something/height",1531680136),new cljs.core.Keyword("event","target.value","event/target.value",833322214)], null)], null)], null),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"rows","rows",850049680),(10)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Process"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Clean"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317)], null),"Example"], null)], null)], null);
});
tool.app.display_view = (function tool$app$display_view(p__29502){
var map__29503 = p__29502;
var map__29503__$1 = cljs.core.__destructure_map(map__29503);
var draft = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29503__$1,new cljs.core.Keyword("something","draft","something/draft",-273419524));
var saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29503__$1,new cljs.core.Keyword("something","saved","something/saved",717330902));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"On display"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","key","replicant/key",-670108117),"draft"], null),"Draft: ",draft], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("replicant","key","replicant/key",-670108117),"saved"], null),"Saved: ",saved], null)], null)], null);
});
tool.app.listar_vals = (function tool$app$listar_vals(lista){
if(cljs.core.empty_QMARK_(lista)){
return "";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(lista))," < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__29505 = cljs.core.rest(lista);
return (tool.app.listar_vals.cljs$core$IFn$_invoke$arity$1 ? tool.app.listar_vals.cljs$core$IFn$_invoke$arity$1(G__29505) : tool.app.listar_vals.call(null, G__29505));
})())].join('');

}
});
tool.app.display_results = (function tool$app$display_results(p__29508){
var map__29509 = p__29508;
var map__29509__$1 = cljs.core.__destructure_map(map__29509);
var sec_suc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29509__$1,new cljs.core.Keyword("something","sec-suc","something/sec-suc",-231106876));
var saved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29509__$1,new cljs.core.Keyword("something","saved","something/saved",717330902));
var frecuencias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29509__$1,new cljs.core.Keyword("something","frecuencias","something/frecuencias",51031581));
var sucesores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29509__$1,new cljs.core.Keyword("something","sucesores","something/sucesores",1230709178));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["desde adento: ",sec_suc,frecuencias], 0));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.collapsible","button.collapsible",-57472109),"\u25B7 Valencies"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29506_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29506_SHARP_),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((frecuencias.cljs$core$IFn$_invoke$arity$1 ? frecuencias.cljs$core$IFn$_invoke$arity$1(p1__29506_SHARP_) : frecuencias.call(null, p1__29506_SHARP_)))].join('')],null));
}),sec_suc))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.collapsible","button.collapsible",-57472109),"\u25B7 Succesor Sequences"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29507_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"li","li",723558921),["S_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.keys(p1__29507_SHARP_)))," = ",tool.app.listar_vals(cljs.core.first(cljs.core.vals(p1__29507_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(cljs.core.vals(p1__29507_SHARP_))))].join('')],null));
}),sucesores))], null)], null);
});
tool.app.main_view = (function tool$app$main_view(state){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"whatever","whatever",-1293903397)], null)], null)], null),"BA - TOOL"], null),tool.app.edit_view(state),tool.app.display_results(state),cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0))], null);
});
tool.app.render_BANG_ = (function tool$app$render_BANG_(state){
return replicant.dom.render(document.getElementById("app"),tool.app.main_view(state));
});
tool.app.enrich_action_from_event = (function tool$app$enrich_action_from_event(p__29510,actions){
var map__29511 = p__29510;
var map__29511__$1 = cljs.core.__destructure_map(map__29511);
var js_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29511__$1,new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146));
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29511__$1,new cljs.core.Keyword("replicant","node","replicant/node",1306451380));
return clojure.walk.postwalk((function (x){
if((x instanceof cljs.core.Keyword)){
var G__29512 = x;
var G__29512__$1 = (((G__29512 instanceof cljs.core.Keyword))?G__29512.fqn:null);
switch (G__29512__$1) {
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
return cljs.core.cons(["w_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_pal)].join(''),(function (){var G__29513 = cljs.core.rest(lista);
var G__29514 = nota;
var G__29515 = id_pal;
return (tool.app.suc_nota.cljs$core$IFn$_invoke$arity$3 ? tool.app.suc_nota.cljs$core$IFn$_invoke$arity$3(G__29513,G__29514,G__29515) : tool.app.suc_nota.call(null, G__29513,G__29514,G__29515));
})());
} else {
var G__29516 = cljs.core.rest(lista);
var G__29517 = nota;
var G__29518 = id_pal;
return (tool.app.suc_nota.cljs$core$IFn$_invoke$arity$3 ? tool.app.suc_nota.cljs$core$IFn$_invoke$arity$3(G__29516,G__29517,G__29518) : tool.app.suc_nota.call(null, G__29516,G__29517,G__29518));

}
}
});
tool.app.recorrer_vectores = (function tool$app$recorrer_vectores(lista,nota,pos){
if(cljs.core.empty_QMARK_(lista)){
return lista;
} else {
return cljs.core.cons(tool.app.suc_nota(cljs.core.first(lista),nota,pos),(function (){var G__29519 = cljs.core.rest(lista);
var G__29520 = nota;
var G__29521 = (pos + (1));
return (tool.app.recorrer_vectores.cljs$core$IFn$_invoke$arity$3 ? tool.app.recorrer_vectores.cljs$core$IFn$_invoke$arity$3(G__29519,G__29520,G__29521) : tool.app.recorrer_vectores.call(null, G__29519,G__29520,G__29521));
})());

}
});
tool.app.genfn_seq_suc = (function tool$app$genfn_seq_suc(w){
return (function (nota){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([nota,cljs.core.flatten(tool.app.recorrer_vectores(w,nota,(1)))]);
});
});
tool.app.process = (function tool$app$process(state){
var w = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29522_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__29522_SHARP_,/ /);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("something","draft","something/draft",-273419524).cljs$core$IFn$_invoke$arity$1(state),/\n/)));
var sec_suc = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(w));
var w_freq = cljs.core.frequencies(cljs.core.flatten(w));
var valencias = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29523_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__29523_SHARP_],[(w_freq.cljs$core$IFn$_invoke$arity$1 ? w_freq.cljs$core$IFn$_invoke$arity$1(p1__29523_SHARP_) : w_freq.call(null, p1__29523_SHARP_))]);
}),sec_suc);
var sucesores = cljs.core.map.cljs$core$IFn$_invoke$arity$2(tool.app.genfn_seq_suc(w),sec_suc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tool.app._BANG_state,cljs.core.assoc,new cljs.core.Keyword("something","frecuencias","something/frecuencias",51031581),w_freq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("something","sec-suc","something/sec-suc",-231106876),sec_suc,new cljs.core.Keyword("something","sucesores","something/sucesores",1230709178),sucesores], 0));

return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["w: ",w,"sec-suc: ",sec_suc," w-freq: ",w_freq," val: ",valencias], 0));
});
tool.app.event_handler = (function tool$app$event_handler(p__29524,actions){
var map__29525 = p__29524;
var map__29525__$1 = cljs.core.__destructure_map(map__29525);
var replicant_data = map__29525__$1;
var js_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29525__$1,new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146));
var seq__29526_29547 = cljs.core.seq(actions);
var chunk__29527_29548 = null;
var count__29528_29549 = (0);
var i__29529_29550 = (0);
while(true){
if((i__29529_29550 < count__29528_29549)){
var action_29551 = chunk__29527_29548.cljs$core$IIndexed$_nth$arity$2(null, i__29529_29550);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Triggered action",action_29551], 0));

var enriched_action_29552 = tool.app.enrich_action_from_state(cljs.core.deref(tool.app._BANG_state),tool.app.enrich_action_from_event(replicant_data,action_29551));
var vec__29538_29553 = enriched_action_29552;
var seq__29539_29554 = cljs.core.seq(vec__29538_29553);
var first__29540_29555 = cljs.core.first(seq__29539_29554);
var seq__29539_29556__$1 = cljs.core.next(seq__29539_29554);
var action_name_29557 = first__29540_29555;
var args_29558 = seq__29539_29556__$1;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Enriched action",enriched_action_29552], 0));

var G__29541_29559 = action_name_29557;
var G__29541_29560__$1 = (((G__29541_29559 instanceof cljs.core.Keyword))?G__29541_29559.fqn:null);
switch (G__29541_29560__$1) {
case "dom/prevent-default":
js_event.preventDefault();

break;
case "db/assoc":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,tool.app._BANG_state,cljs.core.assoc,args_29558);

break;
case "db/dissoc":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,tool.app._BANG_state,cljs.core.dissoc,args_29558);

break;
case "dom/set-input-text":
(cljs.core.first(args_29558).value = cljs.core.second(args_29558));

break;
case "dom/focus-element":
cljs.core.first(args_29558).focus();

break;
case "tool/process":
tool.app.process(cljs.core.deref(tool.app._BANG_state));

break;
default:
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unknown action",action_29551], 0));

}


var G__29562 = seq__29526_29547;
var G__29563 = chunk__29527_29548;
var G__29564 = count__29528_29549;
var G__29565 = (i__29529_29550 + (1));
seq__29526_29547 = G__29562;
chunk__29527_29548 = G__29563;
count__29528_29549 = G__29564;
i__29529_29550 = G__29565;
continue;
} else {
var temp__5811__auto___29566 = cljs.core.seq(seq__29526_29547);
if(temp__5811__auto___29566){
var seq__29526_29567__$1 = temp__5811__auto___29566;
if(cljs.core.chunked_seq_QMARK_(seq__29526_29567__$1)){
var c__5525__auto___29568 = cljs.core.chunk_first(seq__29526_29567__$1);
var G__29569 = cljs.core.chunk_rest(seq__29526_29567__$1);
var G__29570 = c__5525__auto___29568;
var G__29571 = cljs.core.count(c__5525__auto___29568);
var G__29572 = (0);
seq__29526_29547 = G__29569;
chunk__29527_29548 = G__29570;
count__29528_29549 = G__29571;
i__29529_29550 = G__29572;
continue;
} else {
var action_29573 = cljs.core.first(seq__29526_29567__$1);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Triggered action",action_29573], 0));

var enriched_action_29574 = tool.app.enrich_action_from_state(cljs.core.deref(tool.app._BANG_state),tool.app.enrich_action_from_event(replicant_data,action_29573));
var vec__29542_29575 = enriched_action_29574;
var seq__29543_29576 = cljs.core.seq(vec__29542_29575);
var first__29544_29577 = cljs.core.first(seq__29543_29576);
var seq__29543_29578__$1 = cljs.core.next(seq__29543_29576);
var action_name_29579 = first__29544_29577;
var args_29580 = seq__29543_29578__$1;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Enriched action",enriched_action_29574], 0));

var G__29545_29581 = action_name_29579;
var G__29545_29582__$1 = (((G__29545_29581 instanceof cljs.core.Keyword))?G__29545_29581.fqn:null);
switch (G__29545_29582__$1) {
case "dom/prevent-default":
js_event.preventDefault();

break;
case "db/assoc":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,tool.app._BANG_state,cljs.core.assoc,args_29580);

break;
case "db/dissoc":
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,tool.app._BANG_state,cljs.core.dissoc,args_29580);

break;
case "dom/set-input-text":
(cljs.core.first(args_29580).value = cljs.core.second(args_29580));

break;
case "dom/focus-element":
cljs.core.first(args_29580).focus();

break;
case "tool/process":
tool.app.process(cljs.core.deref(tool.app._BANG_state));

break;
default:
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unknown action",action_29573], 0));

}


var G__29584 = cljs.core.next(seq__29526_29567__$1);
var G__29585 = null;
var G__29586 = (0);
var G__29587 = (0);
seq__29526_29547 = G__29584;
chunk__29527_29548 = G__29585;
count__29528_29549 = G__29586;
i__29529_29550 = G__29587;
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
