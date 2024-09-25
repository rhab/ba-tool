goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38167 = arguments.length;
var i__5727__auto___38168 = (0);
while(true){
if((i__5727__auto___38168 < len__5726__auto___38167)){
args__5732__auto__.push((arguments[i__5727__auto___38168]));

var G__38169 = (i__5727__auto___38168 + (1));
i__5727__auto___38168 = G__38169;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37407){
var G__37408 = cljs.core.first(seq37407);
var seq37407__$1 = cljs.core.next(seq37407);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37408,seq37407__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37411 = cljs.core.seq(sources);
var chunk__37412 = null;
var count__37413 = (0);
var i__37414 = (0);
while(true){
if((i__37414 < count__37413)){
var map__37419 = chunk__37412.cljs$core$IIndexed$_nth$arity$2(null, i__37414);
var map__37419__$1 = cljs.core.__destructure_map(map__37419);
var src = map__37419__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37419__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37419__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37419__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37419__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37420){var e_38175 = e37420;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38175);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38175.message)].join('')));
}

var G__38177 = seq__37411;
var G__38178 = chunk__37412;
var G__38179 = count__37413;
var G__38180 = (i__37414 + (1));
seq__37411 = G__38177;
chunk__37412 = G__38178;
count__37413 = G__38179;
i__37414 = G__38180;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__37411);
if(temp__5811__auto__){
var seq__37411__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37411__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37411__$1);
var G__38181 = cljs.core.chunk_rest(seq__37411__$1);
var G__38182 = c__5525__auto__;
var G__38183 = cljs.core.count(c__5525__auto__);
var G__38184 = (0);
seq__37411 = G__38181;
chunk__37412 = G__38182;
count__37413 = G__38183;
i__37414 = G__38184;
continue;
} else {
var map__37421 = cljs.core.first(seq__37411__$1);
var map__37421__$1 = cljs.core.__destructure_map(map__37421);
var src = map__37421__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37421__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37421__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37421__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37421__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37422){var e_38188 = e37422;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38188);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38188.message)].join('')));
}

var G__38189 = cljs.core.next(seq__37411__$1);
var G__38190 = null;
var G__38191 = (0);
var G__38192 = (0);
seq__37411 = G__38189;
chunk__37412 = G__38190;
count__37413 = G__38191;
i__37414 = G__38192;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37423 = cljs.core.seq(js_requires);
var chunk__37424 = null;
var count__37425 = (0);
var i__37426 = (0);
while(true){
if((i__37426 < count__37425)){
var js_ns = chunk__37424.cljs$core$IIndexed$_nth$arity$2(null, i__37426);
var require_str_38193 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38193);


var G__38194 = seq__37423;
var G__38195 = chunk__37424;
var G__38196 = count__37425;
var G__38197 = (i__37426 + (1));
seq__37423 = G__38194;
chunk__37424 = G__38195;
count__37425 = G__38196;
i__37426 = G__38197;
continue;
} else {
var temp__5811__auto__ = cljs.core.seq(seq__37423);
if(temp__5811__auto__){
var seq__37423__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37423__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37423__$1);
var G__38198 = cljs.core.chunk_rest(seq__37423__$1);
var G__38199 = c__5525__auto__;
var G__38200 = cljs.core.count(c__5525__auto__);
var G__38201 = (0);
seq__37423 = G__38198;
chunk__37424 = G__38199;
count__37425 = G__38200;
i__37426 = G__38201;
continue;
} else {
var js_ns = cljs.core.first(seq__37423__$1);
var require_str_38202 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38202);


var G__38205 = cljs.core.next(seq__37423__$1);
var G__38206 = null;
var G__38207 = (0);
var G__38208 = (0);
seq__37423 = G__38205;
chunk__37424 = G__38206;
count__37425 = G__38207;
i__37426 = G__38208;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37431){
var map__37432 = p__37431;
var map__37432__$1 = cljs.core.__destructure_map(map__37432);
var msg = map__37432__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37433(s__37434){
return (new cljs.core.LazySeq(null,(function (){
var s__37434__$1 = s__37434;
while(true){
var temp__5811__auto__ = cljs.core.seq(s__37434__$1);
if(temp__5811__auto__){
var xs__6369__auto__ = temp__5811__auto__;
var map__37441 = cljs.core.first(xs__6369__auto__);
var map__37441__$1 = cljs.core.__destructure_map(map__37441);
var src = map__37441__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37441__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37441__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__37434__$1,map__37441,map__37441__$1,src,resource_name,warnings,xs__6369__auto__,temp__5811__auto__,map__37432,map__37432__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37433_$_iter__37435(s__37436){
return (new cljs.core.LazySeq(null,((function (s__37434__$1,map__37441,map__37441__$1,src,resource_name,warnings,xs__6369__auto__,temp__5811__auto__,map__37432,map__37432__$1,msg,info,reload_info){
return (function (){
var s__37436__$1 = s__37436;
while(true){
var temp__5811__auto____$1 = cljs.core.seq(s__37436__$1);
if(temp__5811__auto____$1){
var s__37436__$2 = temp__5811__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37436__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__37436__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__37438 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__37437 = (0);
while(true){
if((i__37437 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__37437);
cljs.core.chunk_append(b__37438,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38210 = (i__37437 + (1));
i__37437 = G__38210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37438),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37433_$_iter__37435(cljs.core.chunk_rest(s__37436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37438),null);
}
} else {
var warning = cljs.core.first(s__37436__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37433_$_iter__37435(cljs.core.rest(s__37436__$2)));
}
} else {
return null;
}
break;
}
});})(s__37434__$1,map__37441,map__37441__$1,src,resource_name,warnings,xs__6369__auto__,temp__5811__auto__,map__37432,map__37432__$1,msg,info,reload_info))
,null,null));
});})(s__37434__$1,map__37441,map__37441__$1,src,resource_name,warnings,xs__6369__auto__,temp__5811__auto__,map__37432,map__37432__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37433(cljs.core.rest(s__37434__$1)));
} else {
var G__38211 = cljs.core.rest(s__37434__$1);
s__37434__$1 = G__38211;
continue;
}
} else {
var G__38212 = cljs.core.rest(s__37434__$1);
s__37434__$1 = G__38212;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37444_38214 = cljs.core.seq(warnings);
var chunk__37445_38215 = null;
var count__37446_38216 = (0);
var i__37447_38217 = (0);
while(true){
if((i__37447_38217 < count__37446_38216)){
var map__37462_38221 = chunk__37445_38215.cljs$core$IIndexed$_nth$arity$2(null, i__37447_38217);
var map__37462_38222__$1 = cljs.core.__destructure_map(map__37462_38221);
var w_38223 = map__37462_38222__$1;
var msg_38224__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37462_38222__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37462_38222__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37462_38222__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37462_38222__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38227)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38225),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38226),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38224__$1)].join(''));


var G__38229 = seq__37444_38214;
var G__38230 = chunk__37445_38215;
var G__38231 = count__37446_38216;
var G__38232 = (i__37447_38217 + (1));
seq__37444_38214 = G__38229;
chunk__37445_38215 = G__38230;
count__37446_38216 = G__38231;
i__37447_38217 = G__38232;
continue;
} else {
var temp__5811__auto___38233 = cljs.core.seq(seq__37444_38214);
if(temp__5811__auto___38233){
var seq__37444_38234__$1 = temp__5811__auto___38233;
if(cljs.core.chunked_seq_QMARK_(seq__37444_38234__$1)){
var c__5525__auto___38235 = cljs.core.chunk_first(seq__37444_38234__$1);
var G__38236 = cljs.core.chunk_rest(seq__37444_38234__$1);
var G__38237 = c__5525__auto___38235;
var G__38238 = cljs.core.count(c__5525__auto___38235);
var G__38239 = (0);
seq__37444_38214 = G__38236;
chunk__37445_38215 = G__38237;
count__37446_38216 = G__38238;
i__37447_38217 = G__38239;
continue;
} else {
var map__37471_38240 = cljs.core.first(seq__37444_38234__$1);
var map__37471_38241__$1 = cljs.core.__destructure_map(map__37471_38240);
var w_38242 = map__37471_38241__$1;
var msg_38243__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37471_38241__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37471_38241__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37471_38241__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37471_38241__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38246)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38244),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38245),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38243__$1)].join(''));


var G__38249 = cljs.core.next(seq__37444_38234__$1);
var G__38250 = null;
var G__38251 = (0);
var G__38252 = (0);
seq__37444_38214 = G__38249;
chunk__37445_38215 = G__38250;
count__37446_38216 = G__38251;
i__37447_38217 = G__38252;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37430_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37430_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37496){
var map__37498 = p__37496;
var map__37498__$1 = cljs.core.__destructure_map(map__37498);
var msg = map__37498__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37498__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37498__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37499 = cljs.core.seq(updates);
var chunk__37501 = null;
var count__37502 = (0);
var i__37503 = (0);
while(true){
if((i__37503 < count__37502)){
var path = chunk__37501.cljs$core$IIndexed$_nth$arity$2(null, i__37503);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37815_38257 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37819_38259 = null;
var count__37820_38260 = (0);
var i__37821_38261 = (0);
while(true){
if((i__37821_38261 < count__37820_38260)){
var node_38262 = chunk__37819_38259.cljs$core$IIndexed$_nth$arity$2(null, i__37821_38261);
if(cljs.core.not(node_38262.shadow$old)){
var path_match_38263 = shadow.cljs.devtools.client.browser.match_paths(node_38262.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38263)){
var new_link_38264 = (function (){var G__37868 = node_38262.cloneNode(true);
G__37868.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38263),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37868;
})();
(node_38262.shadow$old = true);

(new_link_38264.onload = ((function (seq__37815_38257,chunk__37819_38259,count__37820_38260,i__37821_38261,seq__37499,chunk__37501,count__37502,i__37503,new_link_38264,path_match_38263,node_38262,path,map__37498,map__37498__$1,msg,updates,reload_info){
return (function (e){
var seq__37873_38266 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37875_38267 = null;
var count__37876_38268 = (0);
var i__37877_38269 = (0);
while(true){
if((i__37877_38269 < count__37876_38268)){
var map__37889_38270 = chunk__37875_38267.cljs$core$IIndexed$_nth$arity$2(null, i__37877_38269);
var map__37889_38271__$1 = cljs.core.__destructure_map(map__37889_38270);
var task_38272 = map__37889_38271__$1;
var fn_str_38273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37889_38271__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37889_38271__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38275 = goog.getObjectByName(fn_str_38273,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38274)].join(''));

(fn_obj_38275.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38275.cljs$core$IFn$_invoke$arity$2(path,new_link_38264) : fn_obj_38275.call(null, path,new_link_38264));


var G__38276 = seq__37873_38266;
var G__38277 = chunk__37875_38267;
var G__38278 = count__37876_38268;
var G__38279 = (i__37877_38269 + (1));
seq__37873_38266 = G__38276;
chunk__37875_38267 = G__38277;
count__37876_38268 = G__38278;
i__37877_38269 = G__38279;
continue;
} else {
var temp__5811__auto___38280 = cljs.core.seq(seq__37873_38266);
if(temp__5811__auto___38280){
var seq__37873_38281__$1 = temp__5811__auto___38280;
if(cljs.core.chunked_seq_QMARK_(seq__37873_38281__$1)){
var c__5525__auto___38282 = cljs.core.chunk_first(seq__37873_38281__$1);
var G__38283 = cljs.core.chunk_rest(seq__37873_38281__$1);
var G__38284 = c__5525__auto___38282;
var G__38285 = cljs.core.count(c__5525__auto___38282);
var G__38286 = (0);
seq__37873_38266 = G__38283;
chunk__37875_38267 = G__38284;
count__37876_38268 = G__38285;
i__37877_38269 = G__38286;
continue;
} else {
var map__37894_38287 = cljs.core.first(seq__37873_38281__$1);
var map__37894_38288__$1 = cljs.core.__destructure_map(map__37894_38287);
var task_38289 = map__37894_38288__$1;
var fn_str_38290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894_38288__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37894_38288__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38292 = goog.getObjectByName(fn_str_38290,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38291)].join(''));

(fn_obj_38292.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38292.cljs$core$IFn$_invoke$arity$2(path,new_link_38264) : fn_obj_38292.call(null, path,new_link_38264));


var G__38293 = cljs.core.next(seq__37873_38281__$1);
var G__38294 = null;
var G__38295 = (0);
var G__38296 = (0);
seq__37873_38266 = G__38293;
chunk__37875_38267 = G__38294;
count__37876_38268 = G__38295;
i__37877_38269 = G__38296;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38262);
});})(seq__37815_38257,chunk__37819_38259,count__37820_38260,i__37821_38261,seq__37499,chunk__37501,count__37502,i__37503,new_link_38264,path_match_38263,node_38262,path,map__37498,map__37498__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38263], 0));

goog.dom.insertSiblingAfter(new_link_38264,node_38262);


var G__38297 = seq__37815_38257;
var G__38298 = chunk__37819_38259;
var G__38299 = count__37820_38260;
var G__38300 = (i__37821_38261 + (1));
seq__37815_38257 = G__38297;
chunk__37819_38259 = G__38298;
count__37820_38260 = G__38299;
i__37821_38261 = G__38300;
continue;
} else {
var G__38301 = seq__37815_38257;
var G__38302 = chunk__37819_38259;
var G__38303 = count__37820_38260;
var G__38304 = (i__37821_38261 + (1));
seq__37815_38257 = G__38301;
chunk__37819_38259 = G__38302;
count__37820_38260 = G__38303;
i__37821_38261 = G__38304;
continue;
}
} else {
var G__38305 = seq__37815_38257;
var G__38306 = chunk__37819_38259;
var G__38307 = count__37820_38260;
var G__38308 = (i__37821_38261 + (1));
seq__37815_38257 = G__38305;
chunk__37819_38259 = G__38306;
count__37820_38260 = G__38307;
i__37821_38261 = G__38308;
continue;
}
} else {
var temp__5811__auto___38309 = cljs.core.seq(seq__37815_38257);
if(temp__5811__auto___38309){
var seq__37815_38310__$1 = temp__5811__auto___38309;
if(cljs.core.chunked_seq_QMARK_(seq__37815_38310__$1)){
var c__5525__auto___38311 = cljs.core.chunk_first(seq__37815_38310__$1);
var G__38312 = cljs.core.chunk_rest(seq__37815_38310__$1);
var G__38313 = c__5525__auto___38311;
var G__38314 = cljs.core.count(c__5525__auto___38311);
var G__38315 = (0);
seq__37815_38257 = G__38312;
chunk__37819_38259 = G__38313;
count__37820_38260 = G__38314;
i__37821_38261 = G__38315;
continue;
} else {
var node_38317 = cljs.core.first(seq__37815_38310__$1);
if(cljs.core.not(node_38317.shadow$old)){
var path_match_38318 = shadow.cljs.devtools.client.browser.match_paths(node_38317.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38318)){
var new_link_38319 = (function (){var G__37906 = node_38317.cloneNode(true);
G__37906.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38318),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37906;
})();
(node_38317.shadow$old = true);

(new_link_38319.onload = ((function (seq__37815_38257,chunk__37819_38259,count__37820_38260,i__37821_38261,seq__37499,chunk__37501,count__37502,i__37503,new_link_38319,path_match_38318,node_38317,seq__37815_38310__$1,temp__5811__auto___38309,path,map__37498,map__37498__$1,msg,updates,reload_info){
return (function (e){
var seq__37909_38320 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37911_38321 = null;
var count__37912_38322 = (0);
var i__37913_38323 = (0);
while(true){
if((i__37913_38323 < count__37912_38322)){
var map__37925_38324 = chunk__37911_38321.cljs$core$IIndexed$_nth$arity$2(null, i__37913_38323);
var map__37925_38325__$1 = cljs.core.__destructure_map(map__37925_38324);
var task_38326 = map__37925_38325__$1;
var fn_str_38327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37925_38325__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37925_38325__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38329 = goog.getObjectByName(fn_str_38327,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38328)].join(''));

(fn_obj_38329.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38329.cljs$core$IFn$_invoke$arity$2(path,new_link_38319) : fn_obj_38329.call(null, path,new_link_38319));


var G__38330 = seq__37909_38320;
var G__38331 = chunk__37911_38321;
var G__38332 = count__37912_38322;
var G__38333 = (i__37913_38323 + (1));
seq__37909_38320 = G__38330;
chunk__37911_38321 = G__38331;
count__37912_38322 = G__38332;
i__37913_38323 = G__38333;
continue;
} else {
var temp__5811__auto___38334__$1 = cljs.core.seq(seq__37909_38320);
if(temp__5811__auto___38334__$1){
var seq__37909_38335__$1 = temp__5811__auto___38334__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37909_38335__$1)){
var c__5525__auto___38336 = cljs.core.chunk_first(seq__37909_38335__$1);
var G__38337 = cljs.core.chunk_rest(seq__37909_38335__$1);
var G__38338 = c__5525__auto___38336;
var G__38339 = cljs.core.count(c__5525__auto___38336);
var G__38340 = (0);
seq__37909_38320 = G__38337;
chunk__37911_38321 = G__38338;
count__37912_38322 = G__38339;
i__37913_38323 = G__38340;
continue;
} else {
var map__37928_38341 = cljs.core.first(seq__37909_38335__$1);
var map__37928_38342__$1 = cljs.core.__destructure_map(map__37928_38341);
var task_38343 = map__37928_38342__$1;
var fn_str_38344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928_38342__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928_38342__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38347 = goog.getObjectByName(fn_str_38344,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38345)].join(''));

(fn_obj_38347.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38347.cljs$core$IFn$_invoke$arity$2(path,new_link_38319) : fn_obj_38347.call(null, path,new_link_38319));


var G__38348 = cljs.core.next(seq__37909_38335__$1);
var G__38349 = null;
var G__38350 = (0);
var G__38351 = (0);
seq__37909_38320 = G__38348;
chunk__37911_38321 = G__38349;
count__37912_38322 = G__38350;
i__37913_38323 = G__38351;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38317);
});})(seq__37815_38257,chunk__37819_38259,count__37820_38260,i__37821_38261,seq__37499,chunk__37501,count__37502,i__37503,new_link_38319,path_match_38318,node_38317,seq__37815_38310__$1,temp__5811__auto___38309,path,map__37498,map__37498__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38318], 0));

goog.dom.insertSiblingAfter(new_link_38319,node_38317);


var G__38352 = cljs.core.next(seq__37815_38310__$1);
var G__38353 = null;
var G__38354 = (0);
var G__38355 = (0);
seq__37815_38257 = G__38352;
chunk__37819_38259 = G__38353;
count__37820_38260 = G__38354;
i__37821_38261 = G__38355;
continue;
} else {
var G__38356 = cljs.core.next(seq__37815_38310__$1);
var G__38357 = null;
var G__38358 = (0);
var G__38359 = (0);
seq__37815_38257 = G__38356;
chunk__37819_38259 = G__38357;
count__37820_38260 = G__38358;
i__37821_38261 = G__38359;
continue;
}
} else {
var G__38360 = cljs.core.next(seq__37815_38310__$1);
var G__38361 = null;
var G__38362 = (0);
var G__38363 = (0);
seq__37815_38257 = G__38360;
chunk__37819_38259 = G__38361;
count__37820_38260 = G__38362;
i__37821_38261 = G__38363;
continue;
}
}
} else {
}
}
break;
}


var G__38364 = seq__37499;
var G__38365 = chunk__37501;
var G__38366 = count__37502;
var G__38367 = (i__37503 + (1));
seq__37499 = G__38364;
chunk__37501 = G__38365;
count__37502 = G__38366;
i__37503 = G__38367;
continue;
} else {
var G__38368 = seq__37499;
var G__38369 = chunk__37501;
var G__38370 = count__37502;
var G__38371 = (i__37503 + (1));
seq__37499 = G__38368;
chunk__37501 = G__38369;
count__37502 = G__38370;
i__37503 = G__38371;
continue;
}
} else {
var temp__5811__auto__ = cljs.core.seq(seq__37499);
if(temp__5811__auto__){
var seq__37499__$1 = temp__5811__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37499__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37499__$1);
var G__38372 = cljs.core.chunk_rest(seq__37499__$1);
var G__38373 = c__5525__auto__;
var G__38374 = cljs.core.count(c__5525__auto__);
var G__38375 = (0);
seq__37499 = G__38372;
chunk__37501 = G__38373;
count__37502 = G__38374;
i__37503 = G__38375;
continue;
} else {
var path = cljs.core.first(seq__37499__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37937_38377 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37941_38378 = null;
var count__37942_38379 = (0);
var i__37943_38380 = (0);
while(true){
if((i__37943_38380 < count__37942_38379)){
var node_38381 = chunk__37941_38378.cljs$core$IIndexed$_nth$arity$2(null, i__37943_38380);
if(cljs.core.not(node_38381.shadow$old)){
var path_match_38382 = shadow.cljs.devtools.client.browser.match_paths(node_38381.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38382)){
var new_link_38383 = (function (){var G__38007 = node_38381.cloneNode(true);
G__38007.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38382),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38007;
})();
(node_38381.shadow$old = true);

(new_link_38383.onload = ((function (seq__37937_38377,chunk__37941_38378,count__37942_38379,i__37943_38380,seq__37499,chunk__37501,count__37502,i__37503,new_link_38383,path_match_38382,node_38381,path,seq__37499__$1,temp__5811__auto__,map__37498,map__37498__$1,msg,updates,reload_info){
return (function (e){
var seq__38009_38385 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38011_38386 = null;
var count__38012_38387 = (0);
var i__38013_38388 = (0);
while(true){
if((i__38013_38388 < count__38012_38387)){
var map__38024_38390 = chunk__38011_38386.cljs$core$IIndexed$_nth$arity$2(null, i__38013_38388);
var map__38024_38391__$1 = cljs.core.__destructure_map(map__38024_38390);
var task_38392 = map__38024_38391__$1;
var fn_str_38393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38024_38391__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38024_38391__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38395 = goog.getObjectByName(fn_str_38393,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38394)].join(''));

(fn_obj_38395.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38395.cljs$core$IFn$_invoke$arity$2(path,new_link_38383) : fn_obj_38395.call(null, path,new_link_38383));


var G__38396 = seq__38009_38385;
var G__38397 = chunk__38011_38386;
var G__38398 = count__38012_38387;
var G__38399 = (i__38013_38388 + (1));
seq__38009_38385 = G__38396;
chunk__38011_38386 = G__38397;
count__38012_38387 = G__38398;
i__38013_38388 = G__38399;
continue;
} else {
var temp__5811__auto___38400__$1 = cljs.core.seq(seq__38009_38385);
if(temp__5811__auto___38400__$1){
var seq__38009_38401__$1 = temp__5811__auto___38400__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38009_38401__$1)){
var c__5525__auto___38402 = cljs.core.chunk_first(seq__38009_38401__$1);
var G__38403 = cljs.core.chunk_rest(seq__38009_38401__$1);
var G__38404 = c__5525__auto___38402;
var G__38405 = cljs.core.count(c__5525__auto___38402);
var G__38406 = (0);
seq__38009_38385 = G__38403;
chunk__38011_38386 = G__38404;
count__38012_38387 = G__38405;
i__38013_38388 = G__38406;
continue;
} else {
var map__38027_38410 = cljs.core.first(seq__38009_38401__$1);
var map__38027_38411__$1 = cljs.core.__destructure_map(map__38027_38410);
var task_38412 = map__38027_38411__$1;
var fn_str_38413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38027_38411__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38027_38411__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38415 = goog.getObjectByName(fn_str_38413,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38414)].join(''));

(fn_obj_38415.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38415.cljs$core$IFn$_invoke$arity$2(path,new_link_38383) : fn_obj_38415.call(null, path,new_link_38383));


var G__38416 = cljs.core.next(seq__38009_38401__$1);
var G__38417 = null;
var G__38418 = (0);
var G__38419 = (0);
seq__38009_38385 = G__38416;
chunk__38011_38386 = G__38417;
count__38012_38387 = G__38418;
i__38013_38388 = G__38419;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38381);
});})(seq__37937_38377,chunk__37941_38378,count__37942_38379,i__37943_38380,seq__37499,chunk__37501,count__37502,i__37503,new_link_38383,path_match_38382,node_38381,path,seq__37499__$1,temp__5811__auto__,map__37498,map__37498__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38382], 0));

goog.dom.insertSiblingAfter(new_link_38383,node_38381);


var G__38420 = seq__37937_38377;
var G__38421 = chunk__37941_38378;
var G__38422 = count__37942_38379;
var G__38423 = (i__37943_38380 + (1));
seq__37937_38377 = G__38420;
chunk__37941_38378 = G__38421;
count__37942_38379 = G__38422;
i__37943_38380 = G__38423;
continue;
} else {
var G__38424 = seq__37937_38377;
var G__38425 = chunk__37941_38378;
var G__38426 = count__37942_38379;
var G__38427 = (i__37943_38380 + (1));
seq__37937_38377 = G__38424;
chunk__37941_38378 = G__38425;
count__37942_38379 = G__38426;
i__37943_38380 = G__38427;
continue;
}
} else {
var G__38428 = seq__37937_38377;
var G__38429 = chunk__37941_38378;
var G__38430 = count__37942_38379;
var G__38431 = (i__37943_38380 + (1));
seq__37937_38377 = G__38428;
chunk__37941_38378 = G__38429;
count__37942_38379 = G__38430;
i__37943_38380 = G__38431;
continue;
}
} else {
var temp__5811__auto___38432__$1 = cljs.core.seq(seq__37937_38377);
if(temp__5811__auto___38432__$1){
var seq__37937_38433__$1 = temp__5811__auto___38432__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37937_38433__$1)){
var c__5525__auto___38434 = cljs.core.chunk_first(seq__37937_38433__$1);
var G__38435 = cljs.core.chunk_rest(seq__37937_38433__$1);
var G__38436 = c__5525__auto___38434;
var G__38437 = cljs.core.count(c__5525__auto___38434);
var G__38438 = (0);
seq__37937_38377 = G__38435;
chunk__37941_38378 = G__38436;
count__37942_38379 = G__38437;
i__37943_38380 = G__38438;
continue;
} else {
var node_38439 = cljs.core.first(seq__37937_38433__$1);
if(cljs.core.not(node_38439.shadow$old)){
var path_match_38440 = shadow.cljs.devtools.client.browser.match_paths(node_38439.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38440)){
var new_link_38441 = (function (){var G__38035 = node_38439.cloneNode(true);
G__38035.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38440),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38035;
})();
(node_38439.shadow$old = true);

(new_link_38441.onload = ((function (seq__37937_38377,chunk__37941_38378,count__37942_38379,i__37943_38380,seq__37499,chunk__37501,count__37502,i__37503,new_link_38441,path_match_38440,node_38439,seq__37937_38433__$1,temp__5811__auto___38432__$1,path,seq__37499__$1,temp__5811__auto__,map__37498,map__37498__$1,msg,updates,reload_info){
return (function (e){
var seq__38040_38443 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38042_38444 = null;
var count__38043_38445 = (0);
var i__38044_38446 = (0);
while(true){
if((i__38044_38446 < count__38043_38445)){
var map__38058_38448 = chunk__38042_38444.cljs$core$IIndexed$_nth$arity$2(null, i__38044_38446);
var map__38058_38449__$1 = cljs.core.__destructure_map(map__38058_38448);
var task_38450 = map__38058_38449__$1;
var fn_str_38451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38058_38449__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38058_38449__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38453 = goog.getObjectByName(fn_str_38451,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38452)].join(''));

(fn_obj_38453.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38453.cljs$core$IFn$_invoke$arity$2(path,new_link_38441) : fn_obj_38453.call(null, path,new_link_38441));


var G__38454 = seq__38040_38443;
var G__38455 = chunk__38042_38444;
var G__38456 = count__38043_38445;
var G__38457 = (i__38044_38446 + (1));
seq__38040_38443 = G__38454;
chunk__38042_38444 = G__38455;
count__38043_38445 = G__38456;
i__38044_38446 = G__38457;
continue;
} else {
var temp__5811__auto___38458__$2 = cljs.core.seq(seq__38040_38443);
if(temp__5811__auto___38458__$2){
var seq__38040_38459__$1 = temp__5811__auto___38458__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38040_38459__$1)){
var c__5525__auto___38460 = cljs.core.chunk_first(seq__38040_38459__$1);
var G__38461 = cljs.core.chunk_rest(seq__38040_38459__$1);
var G__38462 = c__5525__auto___38460;
var G__38463 = cljs.core.count(c__5525__auto___38460);
var G__38464 = (0);
seq__38040_38443 = G__38461;
chunk__38042_38444 = G__38462;
count__38043_38445 = G__38463;
i__38044_38446 = G__38464;
continue;
} else {
var map__38066_38465 = cljs.core.first(seq__38040_38459__$1);
var map__38066_38466__$1 = cljs.core.__destructure_map(map__38066_38465);
var task_38467 = map__38066_38466__$1;
var fn_str_38468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38066_38466__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38066_38466__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38470 = goog.getObjectByName(fn_str_38468,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38469)].join(''));

(fn_obj_38470.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38470.cljs$core$IFn$_invoke$arity$2(path,new_link_38441) : fn_obj_38470.call(null, path,new_link_38441));


var G__38471 = cljs.core.next(seq__38040_38459__$1);
var G__38472 = null;
var G__38473 = (0);
var G__38474 = (0);
seq__38040_38443 = G__38471;
chunk__38042_38444 = G__38472;
count__38043_38445 = G__38473;
i__38044_38446 = G__38474;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38439);
});})(seq__37937_38377,chunk__37941_38378,count__37942_38379,i__37943_38380,seq__37499,chunk__37501,count__37502,i__37503,new_link_38441,path_match_38440,node_38439,seq__37937_38433__$1,temp__5811__auto___38432__$1,path,seq__37499__$1,temp__5811__auto__,map__37498,map__37498__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38440], 0));

goog.dom.insertSiblingAfter(new_link_38441,node_38439);


var G__38476 = cljs.core.next(seq__37937_38433__$1);
var G__38477 = null;
var G__38478 = (0);
var G__38479 = (0);
seq__37937_38377 = G__38476;
chunk__37941_38378 = G__38477;
count__37942_38379 = G__38478;
i__37943_38380 = G__38479;
continue;
} else {
var G__38480 = cljs.core.next(seq__37937_38433__$1);
var G__38481 = null;
var G__38482 = (0);
var G__38483 = (0);
seq__37937_38377 = G__38480;
chunk__37941_38378 = G__38481;
count__37942_38379 = G__38482;
i__37943_38380 = G__38483;
continue;
}
} else {
var G__38484 = cljs.core.next(seq__37937_38433__$1);
var G__38485 = null;
var G__38486 = (0);
var G__38487 = (0);
seq__37937_38377 = G__38484;
chunk__37941_38378 = G__38485;
count__37942_38379 = G__38486;
i__37943_38380 = G__38487;
continue;
}
}
} else {
}
}
break;
}


var G__38488 = cljs.core.next(seq__37499__$1);
var G__38489 = null;
var G__38490 = (0);
var G__38491 = (0);
seq__37499 = G__38488;
chunk__37501 = G__38489;
count__37502 = G__38490;
i__37503 = G__38491;
continue;
} else {
var G__38492 = cljs.core.next(seq__37499__$1);
var G__38493 = null;
var G__38494 = (0);
var G__38495 = (0);
seq__37499 = G__38492;
chunk__37501 = G__38493;
count__37502 = G__38494;
i__37503 = G__38495;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__38102){
var map__38104 = p__38102;
var map__38104__$1 = cljs.core.__destructure_map(map__38104);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38104__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38107,done,error){
var map__38110 = p__38107;
var map__38110__$1 = cljs.core.__destructure_map(map__38110);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38110__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38114,done,error){
var map__38116 = p__38114;
var map__38116__$1 = cljs.core.__destructure_map(map__38116);
var msg = map__38116__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38116__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38116__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38116__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38124){
var map__38125 = p__38124;
var map__38125__$1 = cljs.core.__destructure_map(map__38125);
var src = map__38125__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38125__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38132 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38132) : done.call(null, G__38132));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38137){
var map__38138 = p__38137;
var map__38138__$1 = cljs.core.__destructure_map(map__38138);
var msg__$1 = map__38138__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38138__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e38140){var ex = e38140;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38146){
var map__38147 = p__38146;
var map__38147__$1 = cljs.core.__destructure_map(map__38147);
var env = map__38147__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38147__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38158){
var map__38159 = p__38158;
var map__38159__$1 = cljs.core.__destructure_map(map__38159);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38159__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38159__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38161){
var map__38162 = p__38161;
var map__38162__$1 = cljs.core.__destructure_map(map__38162);
var svc = map__38162__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38162__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
