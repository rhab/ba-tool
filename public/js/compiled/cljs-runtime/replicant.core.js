goog.provide('replicant.core');
replicant.core.hiccup_QMARK_ = (function replicant$core$hiccup_QMARK_(sexp){
return ((cljs.core.vector_QMARK_(sexp)) && ((((!(cljs.core.map_entry_QMARK_(sexp)))) && ((cljs.core.first(sexp) instanceof cljs.core.Keyword)))));
});
replicant.core.parse_tag = (function replicant$core$parse_tag(tag){
if((!(cljs.core.not(cljs.core.re_find(/#($|\.)/,tag))))){
var fn__37781__auto___38873 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__37782__auto___38874 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__38213 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," contains an empty id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Either complete the id or remove the # character."], null);
var G__38213__$1 = (cljs.core.truth_(fn__37781__auto___38873)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38213,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__37781__auto___38873):G__38213);
if(cljs.core.truth_(fd__37782__auto___38874)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38213__$1,new cljs.core.Keyword(null,"data","data",-232669377),fd__37782__auto___38874);
} else {
return G__38213__$1;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/#[^a-zA-Z_\.]/,tag))))){
var fn__37781__auto___38878 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__37782__auto___38879 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__38253 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," contains an invalid id"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"IDs must start with a letter."], null);
var G__38253__$1 = (cljs.core.truth_(fn__37781__auto___38878)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38253,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__37781__auto___38878):G__38253);
if(cljs.core.truth_(fd__37782__auto___38879)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38253__$1,new cljs.core.Keyword(null,"data","data",-232669377),fd__37782__auto___38879);
} else {
return G__38253__$1;
}
})());
} else {
}

if((!(cljs.core.not(cljs.core.re_find(/\.$/,tag))))){
var fn__37781__auto___38880 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__37782__auto___38881 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__38256 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Hiccup tag ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," contains an empty class"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"This may cause a DOMException and is considered a coding error. Replicant will not sacrifice performance to work around it."], null);
var G__38256__$1 = (cljs.core.truth_(fn__37781__auto___38880)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38256,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__37781__auto___38880):G__38256);
if(cljs.core.truth_(fd__37782__auto___38881)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38256__$1,new cljs.core.Keyword(null,"data","data",-232669377),fd__37782__auto___38881);
} else {
return G__38256__$1;
}
})());
} else {
}

var id_index = (function (){var index = tag.indexOf("#");
if((index > (0))){
return index;
} else {
return null;
}
})();
var class_index = (function (){var index = tag.indexOf(".");
if((index > (0))){
return index;
} else {
return null;
}
})();
var tag_name = (cljs.core.truth_(id_index)?tag.substring((0),id_index):(cljs.core.truth_(class_index)?tag.substring((0),class_index):tag
));
var id = (cljs.core.truth_(id_index)?(cljs.core.truth_(class_index)?tag.substring((id_index + (1)),class_index):tag.substring((id_index + (1)))):null);
var classes = (cljs.core.truth_(class_index)?cljs.core.seq(tag.substring((class_index + (1))).split(".")):null);
return [tag_name,id,classes];
});
/**
 * Hiccup symbols can include tag name, id and classes. The argument map is
 *   optional. This function finds the important bits of the hiccup data structure
 *   and returns a "headers" tuple with a stable position for:
 * 
 *   - tag-name
 *   - id from the hiccup symbol
 *   - classes from the hiccup symbol
 *   - key
 *   - attributes
 *   - children
 *   - namespace
 *   - original s-expression
 * 
 *   Attributes and children are completely untouched. Headers can be used to
 *   quickly determine tag name and key, or sent to `get-attrs` and
 *   `get-children` for usable information about those things.
 * 
 *   Returns a tuple (instead of a map) for speed.
 * 
 *   - `sexp` is the hiccup to parse
 * 
 *   - `ns` is the namespace of the elements, used for SVG elements. The SVG
 *   element has an explicit namespace, which needs to be set on all of its
 *   children, so they can all be created with createElementNS etc.
 */
replicant.core.get_hiccup_headers = (function replicant$core$get_hiccup_headers(sexp,ns){
if(cljs.core.truth_(sexp)){
if(replicant.core.hiccup_QMARK_(sexp)){
var sym = cljs.core.first(sexp);
var args = cljs.core.rest(sexp);
var has_args_QMARK_ = cljs.core.map_QMARK_(cljs.core.first(args));
var attrs = ((has_args_QMARK_)?cljs.core.first(args):cljs.core.PersistentArrayMap.EMPTY);
var G__38316 = replicant.core.parse_tag(cljs.core.name(sym));
G__38316.push((function (){var temp__5811__auto__ = new cljs.core.Keyword("replicant","key","replicant/key",-670108117).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5811__auto__)){
var k__37610__auto__ = temp__5811__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(replicant.core.parse_tag(cljs.core.name(sym))[(0)]),k__37610__auto__], null);
} else {
return null;
}
})());

G__38316.push(attrs);

G__38316.push(((has_args_QMARK_)?cljs.core.rest(args):args));

G__38316.push(ns);

G__38316.push(sexp);

G__38316.push(null);

return G__38316;
} else {
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexp);
return (new Array(null,null,null,null,null,null,null,s,s));
}
} else {
return null;
}
});
replicant.core.get_classes = (function replicant$core$get_classes(classes){
if((classes instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(classes)], null);
} else {
if(cljs.core.empty_QMARK_(classes)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.coll_QMARK_(classes)){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (class$){
if(cljs.core.truth_(class$)){
if((class$ instanceof cljs.core.Keyword)){
return cljs.core.name(class$);
} else {
if(typeof class$ === 'string'){
return cljs.core.not_empty(class$.trim());
} else {
return null;
}
}
} else {
return null;
}
}),classes);
} else {
if(typeof classes === 'string'){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__38346_SHARP_){
return cljs.core.not_empty(p1__38346_SHARP_.trim());
}),classes.split(" "));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("class name is neither string, keyword, or a collection of those",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null));

}
}
}
}
});
replicant.core.skip_pixelize_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),null,new cljs.core.Keyword(null,"box-flex-group","box-flex-group",-1468550335),null,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),null,new cljs.core.Keyword(null,"column-count","column-count",1235131236),null,new cljs.core.Keyword(null,"flex-negative","flex-negative",-1543996476),null,new cljs.core.Keyword(null,"tab-size","tab-size",-1265790523),null,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),null,new cljs.core.Keyword(null,"flex-order","flex-order",-621251126),null,new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),null,new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),null,new cljs.core.Keyword(null,"flex","flex",-1425124628),null,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),null,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),null,new cljs.core.Keyword(null,"orphans","orphans",1913357231),null,new cljs.core.Keyword(null,"widows","widows",1989591025),null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"box-ordinal-group","box-ordinal-group",201694774),null,new cljs.core.Keyword(null,"order","order",-1254677256),null,new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),null,new cljs.core.Keyword(null,"line-clamp","line-clamp",-1079334403),null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),null,new cljs.core.Keyword(null,"flex-positive","flex-positive",-239614242),null,new cljs.core.Keyword(null,"box-flex","box-flex",-831196194),null], null), null);
/**
 * Converts string values for the style attribute to a map of keyword keys and
 *   string values.
 */
replicant.core.explode_styles = (function replicant$core$explode_styles(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (kv){
var vec__38407 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38389_SHARP_){
return p1__38389_SHARP_.trim();
}),kv.split(":"));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38407,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38407,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null);
}),s.split(";")));
});
replicant.core.get_style_val = (function replicant$core$get_style_val(attr,v){
if(typeof v === 'number'){
if(cljs.core.truth_((replicant.core.skip_pixelize_attrs.cljs$core$IFn$_invoke$arity$1 ? replicant.core.skip_pixelize_attrs.cljs$core$IFn$_invoke$arity$1(attr) : replicant.core.skip_pixelize_attrs.call(null, attr)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"px"].join('');
}
} else {
return v;
}
});
replicant.core.prep_attrs = (function replicant$core$prep_attrs(attrs,id,classes){
var classes__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(replicant.core.get_classes(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs)),classes);
var G__38447 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009)], 0));
var G__38447__$1 = (cljs.core.truth_(id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38447,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__38447);
var G__38447__$2 = ((cljs.core.seq(classes__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38447__$1,new cljs.core.Keyword(null,"classes","classes",2037804510),classes__$1):G__38447__$1);
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__38447__$2,new cljs.core.Keyword(null,"style","style",-496642736),replicant.core.explode_styles);
} else {
return G__38447__$2;
}
});
/**
 * Given `headers` as produced by `get-hiccup-headers`, returns a map of all HTML
 *   attributes.
 */
replicant.core.get_attrs = (function replicant$core$get_attrs(headers){
if((!((!(cljs.core.contains_QMARK_((headers[(4)]),new cljs.core.Keyword(null,"className","className",-1983287057))))))){
var fn__37781__auto___38891 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__37782__auto___38892 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__38496 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Use :class, not :className",new cljs.core.Keyword(null,"message","message",-406056002),":className is not supported, please use :class instead. It takes a keyword, a string, or a collection of either of those."], null);
var G__38496__$1 = (cljs.core.truth_(fn__37781__auto___38891)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38496,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__37781__auto___38891):G__38496);
if(cljs.core.truth_(fd__37782__auto___38892)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38496__$1,new cljs.core.Keyword(null,"data","data",-232669377),fd__37782__auto___38892);
} else {
return G__38496__$1;
}
})());
} else {
}

if((!((function (){var class__37879__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return (((!(typeof class__37879__auto__ === 'string'))) || ((class__37879__auto__.indexOf(" ") < (0))));
})()))){
var fn__37781__auto___38893 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__37782__auto___38894 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__38499 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid space separated :class strings",new cljs.core.Keyword(null,"message","message",-406056002),(function (){var class__37879__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
return [":class supports collections of keywords and/or strings as classes. These perform better, and are usually more convenient to work with. Solve by converting ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class__37879__auto__], 0))," to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(class__37879__auto__.split(" "))], 0))].join('');
})()], null);
var G__38499__$1 = (cljs.core.truth_(fn__37781__auto___38893)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38499,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__37781__auto___38893):G__38499);
if(cljs.core.truth_(fd__37782__auto___38894)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38499__$1,new cljs.core.Keyword(null,"data","data",-232669377),fd__37782__auto___38894);
} else {
return G__38499__$1;
}
})());
} else {
}

if((!((!(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1((headers[(4)])) === 'string'))))){
var fn__37781__auto___38895 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__37782__auto___38896 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__38503 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = (headers[(7)]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Avoid string styles",new cljs.core.Keyword(null,"message","message",-406056002),":style supports structured maps of CSS property/value pairs. Strings must be parsed, so they're both slower and harder to read and write."], null);
var G__38503__$1 = (cljs.core.truth_(fn__37781__auto___38895)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38503,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__37781__auto___38895):G__38503);
if(cljs.core.truth_(fd__37782__auto___38896)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38503__$1,new cljs.core.Keyword(null,"data","data",-232669377),fd__37782__auto___38896);
} else {
return G__38503__$1;
}
})());
} else {
}

return replicant.core.prep_attrs((headers[(4)]),(headers[(1)]),(headers[(2)]));
});
replicant.core.merge_attrs = (function replicant$core$merge_attrs(attrs,overrides){
var G__38509 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(overrides,new cljs.core.Keyword(null,"style","style",-496642736))], 0));
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides);
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38509,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(overrides));
} else {
return G__38509;
}
});
replicant.core.get_mounting_attrs = (function replicant$core$get_mounting_attrs(headers){
var temp__5809__auto__ = new cljs.core.Keyword("replicant","mounting","replicant/mounting",-699756499).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5809__auto__)){
var mounting = temp__5809__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers),(function (){var headers__$1 = (function (){var G__38510 = headers;
if(cljs.core.truth_(mounting)){
(G__38510[(4)] = replicant.core.merge_attrs((G__38510[(4)]),mounting));

return G__38510;
} else {
return G__38510;
}
})();
return replicant.core.prep_attrs((headers__$1[(4)]),(headers__$1[(1)]),(headers__$1[(2)]));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.core.get_attrs(headers)], null);
}
});
replicant.core.get_unmounting_attrs = (function replicant$core$get_unmounting_attrs(vdom){
if(cljs.core.truth_((vdom[(6)]))){
return replicant.core.prep_attrs(replicant.core.merge_attrs((vdom[(3)]),new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2((vdom[(7)]),(1)))),null,(vdom[(2)]));
} else {
return null;
}
});
replicant.core.flatten_seqs_STAR_ = (function replicant$core$flatten_seqs_STAR_(xs,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,x){
if(cljs.core.seq_QMARK_(x)){
return (replicant.core.flatten_seqs_STAR_.cljs$core$IFn$_invoke$arity$2 ? replicant.core.flatten_seqs_STAR_.cljs$core$IFn$_invoke$arity$2(x,coll) : replicant.core.flatten_seqs_STAR_.call(null, x,coll));
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(coll,x);

}
}),null,xs);
});
replicant.core.flatten_seqs = (function replicant$core$flatten_seqs(xs){
var coll = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
replicant.core.flatten_seqs_STAR_(xs,coll);

return cljs.core.persistent_BANG_(coll);
});
/**
 * Given an optional tag namespace `ns` (e.g. for SVG nodes) and `headers`, as
 *   produced by `get-hiccup-headers`, returns a flat collection of children as
 *   "hiccup headers". Children will carry the `ns`, if any.
 */
replicant.core.get_children = (function replicant$core$get_children(headers,ns){
if(cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers[(4)])))){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38515_SHARP_){
var G__38517 = p1__38515_SHARP_;
if((G__38517 == null)){
return null;
} else {
return replicant.core.get_hiccup_headers(G__38517,ns);
}
}),replicant.core.flatten_seqs((headers[(5)])));
}
});
/**
 * Like `get-children` but returns a tuple of `[children ks]` where `ks` is a set
 *   of the keys in `children`.
 */
replicant.core.get_children_ks = (function replicant$core$get_children_ks(headers,ns){
var vec__38519 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38522,hiccup){
var vec__38523 = p__38522;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38523,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38523,(1),null);
if(cljs.core.truth_(hiccup)){
var headers__$1 = replicant.core.get_hiccup_headers(hiccup,ns);
var k = (headers__$1[(3)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,headers__$1),(function (){var G__38526 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__38526,k);
} else {
return G__38526;
}
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY)], null),replicant.core.flatten_seqs((headers[(5)])));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38519,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38519,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks)], null);
});
replicant.core._STAR_dispatch_STAR_ = null;
/**
 * Returns the function to use for handling DOM events. Uses `handler` directly
 *   when it's a function or a string (assumed to be inline JavaScript, not really
 *   recommended), or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function. 
 */
replicant.core.get_event_handler = (function replicant$core$get_event_handler(handler,event){
var or__5002__auto__ = ((cljs.core.fn_QMARK_(handler))?handler:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = ((cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_))?(function (e){
var node = e.target;
var rd = (function (){var G__38530 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","dom-event","replicant.trigger/dom-event",930136738),new cljs.core.Keyword("replicant","js-event","replicant/js-event",1927942146),e], null);
if(cljs.core.truth_(node)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38530,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node);
} else {
return G__38530;
}
})();
return replicant.core._STAR_dispatch_STAR_.call(null, rd,handler);
}):null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = ((typeof handler === 'string')?handler:null);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot use non-function event handler when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
}
}
}
});
/**
 * Returns the function to use to dispatch life-cycle hooks on an element. Uses
 *   `handler` directly when it's a function, or a wrapper that dispatches through
 *   `replicant.core/*dispatch*`, if it is bound to a function.
 */
replicant.core.get_life_cycle_hook = (function replicant$core$get_life_cycle_hook(handler){
var or__5002__auto__ = ((cljs.core.fn_QMARK_(handler))?handler:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (cljs.core.truth_((function (){var and__5000__auto__ = handler;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.ifn_QMARK_(replicant.core._STAR_dispatch_STAR_);
} else {
return and__5000__auto__;
}
})())?(function (e){
return replicant.core._STAR_dispatch_STAR_.call(null, e,handler);
}):null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
if(cljs.core.truth_(handler)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot use non-function life-cycle hook when replicant.core/*dispatch* is not bound to a function",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),replicant.core._STAR_dispatch_STAR_], null));
} else {
return null;
}
}
}
});
replicant.core.call_hook = (function replicant$core$call_hook(p__38532){
var vec__38533 = p__38532;
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38533,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38533,(1),null);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38533,(2),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38533,(3),null);
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38533,(4),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38533,(5),null);
var f = replicant.core.get_life_cycle_hook(hook);
var life_cycle = (((old == null))?new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865):(((new$ == null))?new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184):new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235)
));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),k)) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","mount","replicant.life-cycle/mount",-1685508865))))) || (((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","unmount","replicant.life-cycle/unmount",-144344184))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(life_cycle,new cljs.core.Keyword("replicant.life-cycle","update","replicant.life-cycle/update",-439589235))))))))))){
var G__38537 = (function (){var G__38538 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("replicant","trigger","replicant/trigger",543650841),new cljs.core.Keyword("replicant.trigger","life-cycle","replicant.trigger/life-cycle",-205660972),new cljs.core.Keyword("replicant","life-cycle","replicant/life-cycle",1802888458),life_cycle,new cljs.core.Keyword("replicant","node","replicant/node",1306451380),node], null);
if(cljs.core.truth_(details)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38538,new cljs.core.Keyword("replicant","details","replicant/details",-1846218867),details);
} else {
return G__38538;
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__38537) : f.call(null, G__38537));
} else {
return null;
}
});
/**
 * Register the life-cycle hooks from the corresponding virtual DOM node to call
 *   in `impl`, if any. `details` is a vector of keywords that provide some detail
 *   about why the hook is invoked.
 */
replicant.core.register_hooks = (function replicant$core$register_hooks(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38915 = arguments.length;
var i__5727__auto___38916 = (0);
while(true){
if((i__5727__auto___38916 < len__5726__auto___38915)){
args__5732__auto__.push((arguments[i__5727__auto___38916]));

var G__38917 = (i__5727__auto___38916 + (1));
i__5727__auto___38916 = G__38917;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__38544,node,headers,p__38545){
var map__38546 = p__38544;
var map__38546__$1 = cljs.core.__destructure_map(map__38546);
var hooks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38546__$1,new cljs.core.Keyword(null,"hooks","hooks",-413590103));
var vec__38547 = p__38545;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38547,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38547,(1),null);
var target = (cljs.core.truth_(headers)?(headers[(4)]):(vdom[(3)]));
var new_hooks = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (life_cycle_key){
var temp__5811__auto__ = (life_cycle_key.cljs$core$IFn$_invoke$arity$1 ? life_cycle_key.cljs$core$IFn$_invoke$arity$1(target) : life_cycle_key.call(null, target));
if(cljs.core.truth_(temp__5811__auto__)){
var hook = temp__5811__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [life_cycle_key,hook], null);
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),new cljs.core.Keyword("replicant","on-mount","replicant/on-mount",-1518504162),new cljs.core.Keyword("replicant","on-unmount","replicant/on-unmount",-1287095753),new cljs.core.Keyword("replicant","on-update","replicant/on-update",-2121629394)], null));
if(cljs.core.empty_QMARK_(new_hooks)){
return null;
} else {
var headers_sexp = (function (){var G__38551 = headers;
if((G__38551 == null)){
return null;
} else {
return (G__38551[(7)]);
}
})();
var vdom_sexp = (function (){var G__38552 = vdom;
if((G__38552 == null)){
return null;
} else {
return (G__38552[(7)]);
}
})();
return cljs.core._vreset_BANG_(hooks,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(hooks),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38553){
var vec__38554 = p__38553;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38554,(0),null);
var hook = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38554,(1),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook,k,node,headers_sexp,vdom_sexp,details], null);
}),new_hooks)));
}
}));

(replicant.core.register_hooks.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.register_hooks.cljs$lang$applyTo = (function (seq38539){
var G__38540 = cljs.core.first(seq38539);
var seq38539__$1 = cljs.core.next(seq38539);
var G__38541 = cljs.core.first(seq38539__$1);
var seq38539__$2 = cljs.core.next(seq38539__$1);
var G__38542 = cljs.core.first(seq38539__$2);
var seq38539__$3 = cljs.core.next(seq38539__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38540,G__38541,G__38542,seq38539__$3);
}));

replicant.core.register_mount = (function replicant$core$register_mount(p__38558,node,mounting_attrs,attrs){
var map__38559 = p__38558;
var map__38559__$1 = cljs.core.__destructure_map(map__38559);
var mounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38559__$1,new cljs.core.Keyword(null,"mounts","mounts",-791474425));
return cljs.core._vreset_BANG_(mounts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(mounts),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,mounting_attrs,attrs], null)));
});
replicant.core.update_styles = (function replicant$core$update_styles(renderer,el,new_styles,old_styles){
var new_ks = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38561_SHARP_){
return ((p1__38561_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38561_SHARP_.cljs$core$IFn$_invoke$arity$1(new_styles) : p1__38561_SHARP_.call(null, new_styles)) == null);
}),cljs.core.keys(new_styles)));
var old_ks = cljs.core.set(cljs.core.keys(old_styles));
cljs.core.run_BANG_((function (p1__38562_SHARP_){
return replicant.protocols.remove_style(renderer,el,p1__38562_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new_ks,old_ks));

return cljs.core.run_BANG_((function (p1__38563_SHARP_){
var new_style = (p1__38563_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38563_SHARP_.cljs$core$IFn$_invoke$arity$1(new_styles) : p1__38563_SHARP_.call(null, new_styles));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_style,(p1__38563_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38563_SHARP_.cljs$core$IFn$_invoke$arity$1(old_styles) : p1__38563_SHARP_.call(null, old_styles)))){
if((!(((typeof p1__38563_SHARP_ === 'string') || ((((p1__38563_SHARP_ instanceof cljs.core.Keyword)) || ((p1__38563_SHARP_ instanceof cljs.core.Symbol)))))))){
var fn__37781__auto___38926 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__37782__auto___38927 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__38565 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38563_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant expects your style keys to be strings, or the very least something that supports `name`. Other types will not work as expected."], null);
var G__38565__$1 = (cljs.core.truth_(fn__37781__auto___38926)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38565,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__37781__auto___38926):G__38565);
if(cljs.core.truth_(fd__37782__auto___38927)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38565__$1,new cljs.core.Keyword(null,"data","data",-232669377),fd__37782__auto___38927);
} else {
return G__38565__$1;
}
})());
} else {
}

if((!((function (){var name__37969__auto__ = cljs.core.name(p1__38563_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__37969__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__37969__auto__,clojure.string.lower_case(name__37969__auto__))));
})()))){
var fn__37781__auto___38928 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__37782__auto___38929 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__38567 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__38563_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38563_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__38567__$1 = (cljs.core.truth_(fn__37781__auto___38928)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38567,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__37781__auto___38928):G__38567);
if(cljs.core.truth_(fd__37782__auto___38929)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38567__$1,new cljs.core.Keyword(null,"data","data",-232669377),fd__37782__auto___38929);
} else {
return G__38567__$1;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__38563_SHARP_,replicant.core.get_style_val(p1__38563_SHARP_,new_style));
} else {
return null;
}
}),new_ks);
});
replicant.core.update_classes = (function replicant$core$update_classes(renderer,el,new_classes,old_classes){
cljs.core.run_BANG_((function (p1__38569_SHARP_){
return replicant.protocols.remove_class(renderer,el,p1__38569_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new_classes),old_classes));

return cljs.core.run_BANG_((function (p1__38570_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__38570_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(old_classes),new_classes));
});
replicant.core.add_event_listeners = (function replicant$core$add_event_listeners(renderer,el,val){
return cljs.core.run_BANG_((function (p__38574){
var vec__38575 = p__38574;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38575,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38575,(1),null);
if((!((function (){var event__37901__auto__ = cljs.core.name(event);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("DOMContentLoaded",event__37901__auto__)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event__37901__auto__,clojure.string.lower_case(event__37901__auto__))));
})()))){
var fn__37781__auto___38930 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__37782__auto___38931 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__38578 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.name(event)))),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Most event names should be in all lower-case. Replicant passes your event names directly to addEventListener, and mis-cased event names will fail silently."], null);
var G__38578__$1 = (cljs.core.truth_(fn__37781__auto___38930)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38578,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__37781__auto___38930):G__38578);
if(cljs.core.truth_(fd__37782__auto___38931)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38578__$1,new cljs.core.Keyword(null,"data","data",-232669377),fd__37782__auto___38931);
} else {
return G__38578__$1;
}
})());
} else {
}

var temp__5811__auto__ = replicant.core.get_event_handler(handler,event);
if(cljs.core.truth_(temp__5811__auto__)){
var handler__$1 = temp__5811__auto__;
return replicant.protocols.set_event_handler(renderer,el,event,handler__$1);
} else {
return null;
}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),val));
});
replicant.core.update_event_listeners = (function replicant$core$update_event_listeners(renderer,el,new_handlers,old_handlers){
cljs.core.run_BANG_((function (p1__38581_SHARP_){
return replicant.protocols.remove_event_handler(renderer,el,p1__38581_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_handlers,cljs.core.keys(new_handlers))),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(old_handlers,cljs.core.keys(old_handlers))));

return replicant.core.add_event_listeners(renderer,el,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38582_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.val(p1__38582_SHARP_),cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_handlers,cljs.core.key(p1__38582_SHARP_)));
}),new_handlers));
});
replicant.core.xlinkns = "http://www.w3.org/1999/xlink";
replicant.core.xmlns = "http://www.w3.org/XML/1998/namespace";
replicant.core.set_attr_val = (function replicant$core$set_attr_val(renderer,el,attr,v){
var an = cljs.core.name(attr);
if((!((!(clojure.string.starts_with_QMARK_(cljs.core.name(attr),"on")))))){
var fn__37781__auto___38933 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__37782__auto___38934 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__38583 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Set event listeners in the :on map",new cljs.core.Keyword(null,"message","message",-406056002),["Event handler attributes are not supported. Instead of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)," set :on {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash(cljs.core.name(attr).substring((2)))))," ,,,}"].join('')], null);
var G__38583__$1 = (cljs.core.truth_(fn__37781__auto___38933)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38583,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__37781__auto___38933):G__38583);
if(cljs.core.truth_(fd__37782__auto___38934)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38583__$1,new cljs.core.Keyword(null,"data","data",-232669377),fd__37782__auto___38934);
} else {
return G__38583__$1;
}
})());
} else {
}

return replicant.protocols.set_attribute(renderer,el,an,(function (){var G__38585 = v;
if((((v instanceof cljs.core.Keyword)) || ((v instanceof cljs.core.Symbol)))){
return cljs.core.name(G__38585);
} else {
return G__38585;
}
})(),(function (){var G__38586 = cljs.core.PersistentArrayMap.EMPTY;
var G__38586__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xml:")))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38586,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xmlns):G__38586);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),an.indexOf("xlink:"))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38586__$1,new cljs.core.Keyword(null,"ns","ns",441598760),replicant.core.xlinkns);
} else {
return G__38586__$1;
}
})());
});
replicant.core.update_attr = (function replicant$core$update_attr(renderer,el,attr,new$,old){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__38590 = attr;
var G__38590__$1 = (((G__38590 instanceof cljs.core.Keyword))?G__38590.fqn:null);
switch (G__38590__$1) {
case "style":
return replicant.core.update_styles(renderer,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(old));

break;
case "classes":
return replicant.core.update_classes(renderer,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(old));

break;
case "on":
return replicant.core.update_event_listeners(renderer,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$),new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(old));

break;
default:
var temp__5809__auto__ = (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(new$) : attr.call(null, new$));
if(cljs.core.truth_(temp__5809__auto__)){
var v = temp__5809__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,(attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(old) : attr.call(null, old)))){
return replicant.core.set_attr_val(renderer,el,attr,v);
} else {
return null;
}
} else {
return replicant.protocols.remove_attribute(renderer,el,cljs.core.name(attr));
}

}
}
});
replicant.core.update_attributes = (function replicant$core$update_attributes(renderer,el,new_attrs,old_attrs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__38596_SHARP_,p2__38595_SHARP_){
return replicant.core.update_attr(renderer,el,p2__38595_SHARP_,new_attrs,old_attrs);
}),null,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(new_attrs)),cljs.core.keys(old_attrs)));
});
replicant.core.reconcile_attributes = (function replicant$core$reconcile_attributes(renderer,el,new_attrs,old_attrs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_attrs,old_attrs)){
return false;
} else {
replicant.core.update_attributes(renderer,el,new_attrs,old_attrs);

return true;
}
});
replicant.core.set_styles = (function replicant$core$set_styles(renderer,el,new_styles){
return cljs.core.run_BANG_((function (p1__38603_SHARP_){
if((!(((typeof p1__38603_SHARP_ === 'string') || ((((p1__38603_SHARP_ instanceof cljs.core.Keyword)) || ((p1__38603_SHARP_ instanceof cljs.core.Symbol)))))))){
var fn__37781__auto___38937 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__37782__auto___38938 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__38606 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Style key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38603_SHARP_)," should be a keyword"].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant expects your style keys to be strings, or the very least something that supports `name`. Other types will not work as expected."], null);
var G__38606__$1 = (cljs.core.truth_(fn__37781__auto___38937)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38606,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__37781__auto___38937):G__38606);
if(cljs.core.truth_(fd__37782__auto___38938)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38606__$1,new cljs.core.Keyword(null,"data","data",-232669377),fd__37782__auto___38938);
} else {
return G__38606__$1;
}
})());
} else {
}

if((!((function (){var name__37969__auto__ = cljs.core.name(p1__38603_SHARP_);
return ((clojure.string.starts_with_QMARK_(name__37969__auto__,"--")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name__37969__auto__,clojure.string.lower_case(name__37969__auto__))));
})()))){
var fn__37781__auto___38939 = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
var fd__37782__auto___38940 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(replicant.assert.current_context));
cljs.core.reset_BANG_(replicant.assert.error,(function (){var G__38613 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (){var or__5002__auto__ = null;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.deref(replicant.assert.current_node);
}
})(),new cljs.core.Keyword(null,"title","title",636505583),["Use ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash_k(p1__38603_SHARP_)),", not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38603_SHARP_)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),"Replicant passes style keys directly to `el.style.setProperty`, which expects CSS-style dash-cased property names."], null);
var G__38613__$1 = (cljs.core.truth_(fn__37781__auto___38939)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38613,new cljs.core.Keyword(null,"fname","fname",1500291491),fn__37781__auto___38939):G__38613);
if(cljs.core.truth_(fd__37782__auto___38940)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38613__$1,new cljs.core.Keyword(null,"data","data",-232669377),fd__37782__auto___38940);
} else {
return G__38613__$1;
}
})());
} else {
}

return replicant.protocols.set_style(renderer,el,p1__38603_SHARP_,replicant.core.get_style_val(p1__38603_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_styles,p1__38603_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_styles,cljs.core.keys(new_styles)));
});
replicant.core.set_classes = (function replicant$core$set_classes(renderer,el,new_classes){
return cljs.core.run_BANG_((function (p1__38621_SHARP_){
return replicant.protocols.add_class(renderer,el,p1__38621_SHARP_);
}),new_classes);
});
replicant.core.set_event_listeners = (function replicant$core$set_event_listeners(renderer,el,new_handlers){
return replicant.core.add_event_listeners(renderer,el,new_handlers);
});
replicant.core.set_attr = (function replicant$core$set_attr(renderer,el,attr,new$){
if(cljs.core.truth_(cljs.core.namespace(attr))){
return null;
} else {
var G__38628 = attr;
var G__38628__$1 = (((G__38628 instanceof cljs.core.Keyword))?G__38628.fqn:null);
switch (G__38628__$1) {
case "style":
return replicant.core.set_styles(renderer,el,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "classes":
return replicant.core.set_classes(renderer,el,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(new$));

break;
case "on":
return replicant.core.set_event_listeners(renderer,el,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(new$));

break;
default:
return replicant.core.set_attr_val(renderer,el,attr,(attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(new$) : attr.call(null, new$)));

}
}
});
replicant.core.set_attributes = (function replicant$core$set_attributes(renderer,el,new_attrs){
return cljs.core.run_BANG_((function (p1__38632_SHARP_){
return replicant.core.set_attr(renderer,el,p1__38632_SHARP_,new_attrs);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new_attrs,cljs.core.keys(new_attrs)));
});
/**
 * Create DOM node according to virtual DOM in `headers`. Register relevant
 *   life-cycle hooks from the new node or its descendants in `impl`. Returns a
 *   tuple of the newly created node and the fully realized vdom.
 */
replicant.core.create_node = (function replicant$core$create_node(p__38638,headers){
var map__38639 = p__38638;
var map__38639__$1 = cljs.core.__destructure_map(map__38639);
var impl = map__38639__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38639__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var temp__5809__auto__ = (headers[(8)]);
if(cljs.core.truth_(temp__5809__auto__)){
var text = temp__5809__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replicant.protocols.create_text_node(renderer,text),(new Array(null,null,null,null,null,null,false,text,text,null))], null);
} else {
var tag_name = (headers[(0)]);
var ns = (function (){var or__5002__auto__ = (headers[(6)]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",tag_name)){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
})();
var node = replicant.protocols.create_element(renderer,tag_name,(cljs.core.truth_(ns)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),ns], null):null));
var vec__38640 = replicant.core.get_mounting_attrs(headers);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38640,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38640,(1),null);
var _ = replicant.core.set_attributes(renderer,node,(function (){var or__5002__auto__ = mounting_attrs;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return attrs;
}
})());
var vec__38643 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38647,child_headers){
var vec__38648 = p__38647;
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38648,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38648,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38648,(2),null);
if(cljs.core.truth_(child_headers)){
var vec__38651 = (replicant.core.create_node.cljs$core$IFn$_invoke$arity$2 ? replicant.core.create_node.cljs$core$IFn$_invoke$arity$2(impl,child_headers) : replicant.core.create_node.call(null, impl,child_headers));
var child_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38651,(0),null);
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38651,(1),null);
var k = (vdom[(1)]);
replicant.protocols.append_child(renderer,node,child_node);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,vdom),(function (){var G__38654 = ks;
if(cljs.core.truth_(k)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__38654,k);
} else {
return G__38654;
}
})(),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(children,null),ks,n], null);
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),(0)], null),replicant.core.get_children(headers,ns));
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38643,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38643,(1),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38643,(2),null);
replicant.core.register_hooks(impl,node,headers);

if(cljs.core.truth_(mounting_attrs)){
replicant.core.register_mount(impl,node,mounting_attrs,attrs);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,(new Array((headers[(0)]),(headers[(3)]),(headers[(2)]),attrs,cljs.core.persistent_BANG_(children),cljs.core.persistent_BANG_(ks),cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers[(4)]))),(headers[(7)]),null,null,n_children))], null);
}
});
/**
 * Two elements are considered the similar enough for reuse if they are both
 *   hiccup elements with the same tag name and the same key (or both have no key)
 *   - or they are both strings.
 * 
 *   Similarity in this case indicates that the node can be used for reconciliation
 *   instead of creating a new node from scratch.
 */
replicant.core.reusable_QMARK_ = (function replicant$core$reusable_QMARK_(headers,vdom){
var or__5002__auto__ = (function (){var and__5000__auto__ = (headers[(8)]);
if(cljs.core.truth_(and__5000__auto__)){
return (vdom[(8)]);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(0)]),(vdom[(0)]))));
}
});
replicant.core.same_QMARK_ = (function replicant$core$same_QMARK_(headers,vdom){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(3)]),(vdom[(1)]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((headers[(0)]),(vdom[(0)]))));
});
replicant.core.index_of = (function replicant$core$index_of(f,xs){
var coll_n = (0);
var dom_n = (0);
var xs__$1 = cljs.core.seq(xs);
while(true){
if((xs__$1 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null);
} else {
if((cljs.core.first(xs__$1) == null)){
var G__38944 = (coll_n + (1));
var G__38945 = dom_n;
var G__38946 = cljs.core.next(xs__$1);
coll_n = G__38944;
dom_n = G__38945;
xs__$1 = G__38946;
continue;
} else {
if(cljs.core.truth_((function (){var G__38656 = cljs.core.first(xs__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__38656) : f.call(null, G__38656));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll_n,dom_n], null);
} else {
var G__38947 = (coll_n + (1));
var G__38948 = (dom_n + (1));
var G__38949 = cljs.core.next(xs__$1);
coll_n = G__38947;
dom_n = G__38948;
xs__$1 = G__38949;
continue;

}
}
}
break;
}
});
replicant.core.get_ns = (function replicant$core$get_ns(headers){
var or__5002__auto__ = (headers[(6)]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",(headers[(0)]))){
return "http://www.w3.org/2000/svg";
} else {
return null;
}
}
});
replicant.core.insert_children = (function replicant$core$insert_children(p__38660,el,children,vdom){
var map__38661 = p__38660;
var map__38661__$1 = cljs.core.__destructure_map(map__38661);
var impl = map__38661__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38661__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38662,child){
var vec__38663 = p__38662;
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38663,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38663,(1),null);
if(cljs.core.truth_(child)){
var vec__38666 = replicant.core.create_node(impl,child);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38666,(1),null);
replicant.protocols.append_child(renderer,el,node);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,vdom__$1),(n + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,null),n], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vdom,(0)], null),children);
});
replicant.core.remove_child = (function replicant$core$remove_child(p__38669,unmounts,el,n,vdom){
var map__38670 = p__38669;
var map__38670__$1 = cljs.core.__destructure_map(map__38670);
var impl = map__38670__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38670__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var temp__5809__auto__ = (vdom[(9)]);
if(cljs.core.truth_(temp__5809__auto__)){
var id = temp__5809__auto__;
if(cljs.core.truth_((unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(id) : unmounts.call(null, id)))){
return vdom;
} else {
return null;
}
} else {
var res = (function (){var temp__5809__auto____$1 = replicant.core.get_unmounting_attrs(vdom);
if(cljs.core.truth_(temp__5809__auto____$1)){
var attrs = temp__5809__auto____$1;
var vdom__$1 = (function (){
(vdom[(9)] = replicant.vdom.id.cljs$core$IVolatile$_vreset_BANG_$arity$2(null, (replicant.vdom.id.cljs$core$IDeref$_deref$arity$1(null, ) + (1))));

return vdom;
})()
;
var child = replicant.protocols.get_child(renderer,el,n);
replicant.core.update_attributes(renderer,child,attrs,(vdom__$1[(3)]));

cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.on_transition_end(renderer,child,(function (){
cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)),(vdom__$1[(9)])));

replicant.protocols.remove_child(renderer,el,child);

var temp__5811__auto___38955 = new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((vdom__$1[(3)]));
if(cljs.core.truth_(temp__5811__auto___38955)){
var hook_38956 = temp__5811__auto___38955;
replicant.core.call_hook(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [hook_38956,new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901),child,null,vdom__$1], null));
} else {
}

return renderer;
}));

return vdom__$1;
} else {
var child = replicant.protocols.get_child(renderer,el,n);
replicant.protocols.remove_child(renderer,el,child);

replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom], 0));

return null;
}
})();
return res;
}
});
replicant.core.move_node_details = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","move-node","replicant/move-node",-1189251602)], null);
replicant.core.unchanged_QMARK_ = (function replicant$core$unchanged_QMARK_(headers,vdom){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__38674 = headers;
if((G__38674 == null)){
return null;
} else {
return (G__38674[(7)]);
}
})(),(function (){var G__38675 = vdom;
if((G__38675 == null)){
return null;
} else {
return (G__38675[(7)]);
}
})());
});
replicant.core.move_nodes = (function replicant$core$move_nodes(p__38682,el,headers,new_children,vdom,old_children,n,n_children){
var map__38683 = p__38682;
var map__38683__$1 = cljs.core.__destructure_map(map__38683);
var impl = map__38683__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38683__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var vec__38684 = (cljs.core.truth_((headers[(3)]))?replicant.core.index_of((function (p1__38680_SHARP_){
return replicant.core.same_QMARK_(headers,p1__38680_SHARP_);
}),old_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var o_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38684,(0),null);
var o_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38684,(1),null);
var vec__38687 = (cljs.core.truth_((vdom[(1)]))?replicant.core.index_of((function (p1__38681_SHARP_){
return replicant.core.same_QMARK_(p1__38681_SHARP_,vdom);
}),new_children):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null));
var n_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38687,(0),null);
var n_dom_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38687,(1),null);
if((o_idx < n_idx)){
var idx = ((n + n_dom_idx) + (1));
var child = replicant.protocols.get_child(renderer,el,n);
if((idx < n_children)){
replicant.protocols.insert_before(renderer,el,child,replicant.protocols.get_child(renderer,el,idx));
} else {
replicant.protocols.append_child(renderer,el,child);
}

replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_children,n_idx),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,replicant.core.move_node_details], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_idx,cljs.core.next(old_children)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(old_children)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2((n_idx + (1)),old_children)], 0)),n,(idx - (1))], null);
} else {
var idx = (n + o_dom_idx);
var child = replicant.protocols.get_child(renderer,el,idx);
var corresponding_old_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(old_children,o_idx);
replicant.protocols.insert_before(renderer,el,child,replicant.protocols.get_child(renderer,el,n));

(replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,headers,corresponding_old_vdom,n) : replicant.core.reconcile_STAR_.call(null, impl,el,headers,corresponding_old_vdom,n));

if(replicant.core.unchanged_QMARK_(headers,corresponding_old_vdom)){
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([corresponding_old_vdom,replicant.core.move_node_details], 0));
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(new_children),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(o_idx,old_children),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((o_idx + (1)),old_children)),(n + (1)),((n + o_idx) + (1)),corresponding_old_vdom], null);
}
});
replicant.core.insert_node = (function replicant$core$insert_node(r,el,child,n,n_children){
if((n_children <= n)){
return replicant.protocols.append_child(r,el,child);
} else {
return replicant.protocols.insert_before(r,el,child,replicant.protocols.get_child(r,el,n));
}
});
replicant.core.update_children = (function replicant$core$update_children(impl,el,new_children,new_ks,old_children,old_ks,n_children){
var r = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(impl);
var unmounts = cljs.core.deref(new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl));
var new_c = cljs.core.seq(new_children);
var old_c = cljs.core.seq(old_children);
var n = (0);
var move_n = (0);
var n_children__$1 = (function (){var or__5002__auto__ = n_children;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})();
var changed_QMARK_ = false;
var vdom = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var new_headers = cljs.core.first(new_c);
var old_vdom = cljs.core.first(old_c);
var new_empty_QMARK_ = (new_c == null);
var old_empty_QMARK_ = (old_c == null);
var new_nil_QMARK_ = (new_headers == null);
var old_nil_QMARK_ = (old_vdom == null);
if(((new_empty_QMARK_) && (old_empty_QMARK_))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [changed_QMARK_,cljs.core.persistent_BANG_(vdom),new_ks,n_children__$1], null);
} else {
if(new_empty_QMARK_){
var children = cljs.core.seq(old_c);
var vdom__$1 = vdom;
var n__$1 = n;
var n_children__$2 = n_children__$1;
while(true){
if((children == null)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,n_children__$2], null);
} else {
if((cljs.core.first(children) == null)){
var G__38960 = cljs.core.next(children);
var G__38961 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,null);
var G__38962 = n__$1;
var G__38963 = n_children__$2;
children = G__38960;
vdom__$1 = G__38961;
n__$1 = G__38962;
n_children__$2 = G__38963;
continue;
} else {
var temp__5809__auto__ = replicant.core.remove_child(impl,unmounts,el,n__$1,cljs.core.first(children));
if(cljs.core.truth_(temp__5809__auto__)){
var pending_vdom = temp__5809__auto__;
var G__38965 = cljs.core.next(children);
var G__38966 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom__$1,pending_vdom);
var G__38967 = (n__$1 + (1));
var G__38968 = n_children__$2;
children = G__38965;
vdom__$1 = G__38966;
n__$1 = G__38967;
n_children__$2 = G__38968;
continue;
} else {
var G__38969 = cljs.core.next(children);
var G__38970 = vdom__$1;
var G__38971 = n__$1;
var G__38972 = (n_children__$2 - (1));
children = G__38969;
vdom__$1 = G__38970;
n__$1 = G__38971;
n_children__$2 = G__38972;
continue;
}

}
}
break;
}
} else {
if(old_empty_QMARK_){
var vec__38732 = replicant.core.insert_children(impl,el,new_c,vdom);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38732,(0),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38732,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.persistent_BANG_(vdom__$1),new_ks,(n_children__$1 + n__$1)], null);
} else {
if(((new_nil_QMARK_) && (old_nil_QMARK_))){
var G__38973 = cljs.core.next(new_c);
var G__38974 = cljs.core.next(old_c);
var G__38975 = n;
var G__38976 = move_n;
var G__38977 = n_children__$1;
var G__38978 = changed_QMARK_;
var G__38979 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__38973;
old_c = G__38974;
n = G__38975;
move_n = G__38976;
n_children__$1 = G__38977;
changed_QMARK_ = G__38978;
vdom = G__38979;
continue;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = old_vdom;
if(cljs.core.truth_(and__5000__auto__)){
return (old_vdom[(9)]);
} else {
return and__5000__auto__;
}
})())){
var vec__38736 = (cljs.core.truth_((function (){var and__5000__auto__ = new_headers;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not((function (){var G__38739 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__38739) : old_ks.call(null, G__38739));
})());
} else {
return and__5000__auto__;
}
})())?(function (){var res = replicant.core.create_node(impl,new_headers);
replicant.core.insert_node(r,el,cljs.core.first(res),n,n_children__$1);

return res;
})():null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38736,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38736,(1),null);
if(cljs.core.truth_((function (){var G__38740 = (old_vdom[(9)]);
return (unmounts.cljs$core$IFn$_invoke$arity$1 ? unmounts.cljs$core$IFn$_invoke$arity$1(G__38740) : unmounts.call(null, G__38740));
})())){
if(new_nil_QMARK_){
var G__38980 = cljs.core.next(new_c);
var G__38981 = cljs.core.next(old_c);
var G__38982 = (n + (1));
var G__38983 = move_n;
var G__38984 = n_children__$1;
var G__38985 = changed_QMARK_;
var G__38986 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__38980;
old_c = G__38981;
n = G__38982;
move_n = G__38983;
n_children__$1 = G__38984;
changed_QMARK_ = G__38985;
vdom = G__38986;
continue;
} else {
if(cljs.core.truth_(child)){
var G__38987 = cljs.core.next(new_c);
var G__38988 = cljs.core.next(old_c);
var G__38989 = (n + (2));
var G__38990 = move_n;
var G__38991 = (n_children__$1 + (1));
var G__38992 = true;
var G__38993 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__38987;
old_c = G__38988;
n = G__38989;
move_n = G__38990;
n_children__$1 = G__38991;
changed_QMARK_ = G__38992;
vdom = G__38993;
continue;
} else {
var G__38994 = new_c;
var G__38995 = cljs.core.next(old_c);
var G__38996 = (n + (1));
var G__38997 = move_n;
var G__38998 = n_children__$1;
var G__38999 = changed_QMARK_;
var G__39000 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,old_vdom);
new_c = G__38994;
old_c = G__38995;
n = G__38996;
move_n = G__38997;
n_children__$1 = G__38998;
changed_QMARK_ = G__38999;
vdom = G__39000;
continue;

}
}
} else {
if(new_nil_QMARK_){
var G__39001 = cljs.core.next(new_c);
var G__39002 = cljs.core.next(old_c);
var G__39003 = n;
var G__39004 = (move_n - (1));
var G__39005 = (n_children__$1 - (1));
var G__39006 = changed_QMARK_;
var G__39007 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__39001;
old_c = G__39002;
n = G__39003;
move_n = G__39004;
n_children__$1 = G__39005;
changed_QMARK_ = G__39006;
vdom = G__39007;
continue;
} else {
if(cljs.core.truth_(child)){
var G__39009 = cljs.core.next(new_c);
var G__39010 = cljs.core.next(old_c);
var G__39011 = (n + (1));
var G__39012 = move_n;
var G__39013 = n_children__$1;
var G__39014 = true;
var G__39015 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__39009;
old_c = G__39010;
n = G__39011;
move_n = G__39012;
n_children__$1 = G__39013;
changed_QMARK_ = G__39014;
vdom = G__39015;
continue;
} else {
var G__39016 = new_c;
var G__39017 = cljs.core.next(old_c);
var G__39018 = n;
var G__39019 = (move_n - (1));
var G__39020 = (n_children__$1 - (1));
var G__39021 = changed_QMARK_;
var G__39022 = vdom;
new_c = G__39016;
old_c = G__39017;
n = G__39018;
move_n = G__39019;
n_children__$1 = G__39020;
changed_QMARK_ = G__39021;
vdom = G__39022;
continue;

}
}
}
} else {
if(new_nil_QMARK_){
if(cljs.core.contains_QMARK_(new_ks,(old_vdom[(1)]))){
var G__39023 = cljs.core.next(new_c);
var G__39024 = old_c;
var G__39025 = n;
var G__39026 = move_n;
var G__39027 = n_children__$1;
var G__39028 = true;
var G__39029 = vdom;
new_c = G__39023;
old_c = G__39024;
n = G__39025;
move_n = G__39026;
n_children__$1 = G__39027;
changed_QMARK_ = G__39028;
vdom = G__39029;
continue;
} else {
var temp__5809__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5809__auto__)){
var unmounting_node = temp__5809__auto__;
var G__39030 = cljs.core.next(new_c);
var G__39031 = cljs.core.next(old_c);
var G__39032 = (n + (1));
var G__39033 = move_n;
var G__39034 = n_children__$1;
var G__39035 = true;
var G__39036 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__39030;
old_c = G__39031;
n = G__39032;
move_n = G__39033;
n_children__$1 = G__39034;
changed_QMARK_ = G__39035;
vdom = G__39036;
continue;
} else {
var G__39037 = cljs.core.next(new_c);
var G__39038 = cljs.core.next(old_c);
var G__39039 = n;
var G__39040 = move_n;
var G__39041 = (n_children__$1 - (1));
var G__39042 = true;
var G__39043 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,null);
new_c = G__39037;
old_c = G__39038;
n = G__39039;
move_n = G__39040;
n_children__$1 = G__39041;
changed_QMARK_ = G__39042;
vdom = G__39043;
continue;
}
}
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = old_vdom;
if(cljs.core.truth_(and__5000__auto__)){
return replicant.core.reusable_QMARK_(new_headers,old_vdom);
} else {
return and__5000__auto__;
}
})())){
var new_vdom = (replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5 ? replicant.core.reconcile_STAR_.cljs$core$IFn$_invoke$arity$5(impl,el,new_headers,old_vdom,n) : replicant.core.reconcile_STAR_.call(null, impl,el,new_headers,old_vdom,n));
var node_unchanged_QMARK_ = replicant.core.unchanged_QMARK_(new_headers,old_vdom);
if(((node_unchanged_QMARK_) && ((n < move_n)))){
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,replicant.protocols.get_child(r,el,n),new_headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_vdom,replicant.core.move_node_details], 0));
} else {
}

var G__39046 = cljs.core.next(new_c);
var G__39047 = cljs.core.next(old_c);
var G__39048 = (n + (1));
var G__39049 = move_n;
var G__39050 = n_children__$1;
var G__39051 = (function (){var or__5002__auto__ = changed_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (!(node_unchanged_QMARK_));
}
})();
var G__39052 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,new_vdom);
new_c = G__39046;
old_c = G__39047;
n = G__39048;
move_n = G__39049;
n_children__$1 = G__39050;
changed_QMARK_ = G__39051;
vdom = G__39052;
continue;
} else {
if(cljs.core.not((function (){var G__38789 = (new_headers[(3)]);
return (old_ks.cljs$core$IFn$_invoke$arity$1 ? old_ks.cljs$core$IFn$_invoke$arity$1(G__38789) : old_ks.call(null, G__38789));
})())){
var vec__38790 = replicant.core.create_node(impl,new_headers);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38790,(0),null);
var child_vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38790,(1),null);
replicant.core.insert_node(r,el,child,n,n_children__$1);

var G__39053 = cljs.core.next(new_c);
var G__39054 = (function (){var G__38793 = old_c;
if((old_vdom == null)){
return cljs.core.next(G__38793);
} else {
return G__38793;
}
})();
var G__39055 = (n + (1));
var G__39056 = move_n;
var G__39057 = (n_children__$1 + (1));
var G__39058 = true;
var G__39059 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,child_vdom);
new_c = G__39053;
old_c = G__39054;
n = G__39055;
move_n = G__39056;
n_children__$1 = G__39057;
changed_QMARK_ = G__39058;
vdom = G__39059;
continue;
} else {
if(((old_nil_QMARK_) || (cljs.core.not((function (){var G__38795 = (old_vdom[(1)]);
return (new_ks.cljs$core$IFn$_invoke$arity$1 ? new_ks.cljs$core$IFn$_invoke$arity$1(G__38795) : new_ks.call(null, G__38795));
})())))){
var temp__5809__auto__ = replicant.core.remove_child(impl,unmounts,el,n,old_vdom);
if(cljs.core.truth_(temp__5809__auto__)){
var unmounting_node = temp__5809__auto__;
var G__39063 = new_c;
var G__39064 = cljs.core.next(old_c);
var G__39065 = (n + (1));
var G__39066 = move_n;
var G__39067 = n_children__$1;
var G__39068 = true;
var G__39069 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vdom,unmounting_node);
new_c = G__39063;
old_c = G__39064;
n = G__39065;
move_n = G__39066;
n_children__$1 = G__39067;
changed_QMARK_ = G__39068;
vdom = G__39069;
continue;
} else {
var G__39070 = new_c;
var G__39071 = cljs.core.next(old_c);
var G__39072 = n;
var G__39073 = move_n;
var G__39074 = (move_n - (1));
var G__39075 = true;
var G__39076 = vdom;
new_c = G__39070;
old_c = G__39071;
n = G__39072;
move_n = G__39073;
n_children__$1 = G__39074;
changed_QMARK_ = G__39075;
vdom = G__39076;
continue;
}
} else {
var vec__38796 = replicant.core.move_nodes(impl,el,new_headers,new_c,old_vdom,old_c,n,n_children__$1);
var nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38796,(0),null);
var oc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38796,(1),null);
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38796,(2),null);
var move_n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38796,(3),null);
var vdom_node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38796,(4),null);
var G__39077 = nc;
var G__39078 = oc;
var G__39079 = n__$1;
var G__39080 = move_n__$1;
var G__39081 = n_children__$1;
var G__39082 = true;
var G__39083 = (function (){var G__38799 = vdom;
if(cljs.core.truth_(vdom_node)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__38799,vdom_node);
} else {
return G__38799;
}
})();
new_c = G__39077;
old_c = G__39078;
n = G__39079;
move_n = G__39080;
n_children__$1 = G__39081;
changed_QMARK_ = G__39082;
vdom = G__39083;
continue;

}
}
}
}
}
}
}
}
}
break;
}
});
replicant.core.reconcile_STAR_ = (function replicant$core$reconcile_STAR_(p__38801,el,headers,vdom,index){
var map__38806 = p__38801;
var map__38806__$1 = cljs.core.__destructure_map(map__38806);
var impl = map__38806__$1;
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38806__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
if(cljs.core.truth_(headers)){
var temp__5811__auto___39084 = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5811__auto___39084)){
var ctx__37775__auto___39086 = temp__5811__auto___39084;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__37775__auto___39086);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if(replicant.core.unchanged_QMARK_(headers,vdom)){
return vdom;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((headers[(8)]),(vdom[(8)]))){
var vec__38808 = replicant.core.create_node(impl,headers);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38808,(0),null);
var vdom__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38808,(1),null);
replicant.protocols.replace_child(renderer,el,node,replicant.protocols.get_child(renderer,el,index));

return vdom__$1;
} else {
var child = replicant.protocols.get_child(renderer,el,index);
var attrs = replicant.core.get_attrs(headers);
var vdom_attrs = (vdom[(3)]);
var attrs_changed_QMARK_ = replicant.core.reconcile_attributes(renderer,child,attrs,vdom_attrs);
var vec__38811 = (cljs.core.truth_(new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1((headers[(4)])))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,true], null):replicant.core.get_children_ks(headers,replicant.core.get_ns(headers)));
var new_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38811,(0),null);
var new_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38811,(1),null);
var inner_html_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38811,(2),null);
var vec__38814 = (cljs.core.truth_(new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530).cljs$core$IFn$_invoke$arity$1(vdom_attrs))?(function (){
replicant.protocols.remove_all_children(renderer,child);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null);
})()
:(cljs.core.truth_(inner_html_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(0)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vdom[(4)]),(vdom[(5)]),(vdom[(10)])], null)
));
var old_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38814,(0),null);
var old_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38814,(1),null);
var old_nc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38814,(2),null);
var vec__38817 = replicant.core.update_children(impl,child,new_children,new_ks,old_children,old_ks,old_nc);
var children_changed_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38817,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38817,(1),null);
var child_ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38817,(2),null);
var n_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38817,(3),null);
var attrs_changed_QMARK___$1 = ((attrs_changed_QMARK_) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1((headers[(4)])),new cljs.core.Keyword("replicant","on-render","replicant/on-render",1674377901).cljs$core$IFn$_invoke$arity$1(vdom_attrs))));
replicant.core.register_hooks.cljs$core$IFn$_invoke$arity$variadic(impl,child,headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vdom,(cljs.core.truth_((function (){var and__5000__auto__ = attrs_changed_QMARK___$1;
if(and__5000__auto__){
return children_changed_QMARK_;
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895),new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null):((attrs_changed_QMARK___$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-attrs","replicant/updated-attrs",295362895)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("replicant","updated-children","replicant/updated-children",2041302229)], null)
))], 0));

return (new Array((headers[(0)]),(headers[(3)]),(headers[(2)]),attrs,children,child_ks,cljs.core.boolean$(new cljs.core.Keyword("replicant","unmounting","replicant/unmounting",1629433009).cljs$core$IFn$_invoke$arity$1((headers[(4)]))),(headers[(7)]),null,null,n_children));

}
}
});
replicant.core.perform_post_mount_update = (function replicant$core$perform_post_mount_update(renderer,p__38823){
var vec__38828 = p__38823;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38828,(0),null);
var mounting_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38828,(1),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38828,(2),null);
return replicant.core.update_attributes(renderer,node,attrs,mounting_attrs);
});
/**
 * Reconcile the DOM in `el` by diffing `hiccup` with `vdom`. If there is no
 *   `vdom`, `reconcile` will create the DOM as per `hiccup`. Assumes that the DOM
 *   in `el` is in sync with `vdom` - if not, this will certainly not produce the
 *   desired result.
 */
replicant.core.reconcile = (function replicant$core$reconcile(var_args){
var args__5732__auto__ = [];
var len__5726__auto___39090 = arguments.length;
var i__5727__auto___39091 = (0);
while(true){
if((i__5727__auto___39091 < len__5726__auto___39090)){
args__5732__auto__.push((arguments[i__5727__auto___39091]));

var G__39093 = (i__5727__auto___39091 + (1));
i__5727__auto___39091 = G__39093;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(replicant.core.reconcile.cljs$core$IFn$_invoke$arity$variadic = (function (renderer,el,hiccup,p__38846){
var vec__38847 = p__38846;
var vdom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38847,(0),null);
var map__38850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38847,(1),null);
var map__38850__$1 = cljs.core.__destructure_map(map__38850);
var unmounts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38850__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521));
var impl = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"renderer","renderer",336841071),renderer,new cljs.core.Keyword(null,"hooks","hooks",-413590103),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"mounts","mounts",-791474425),cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"unmounts","unmounts",173366521),(function (){var or__5002__auto__ = unmounts;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
})()], null);
var vdom__$1 = (function (){var headers = replicant.core.get_hiccup_headers(hiccup,null);
if(cljs.core.truth_(headers)){
var temp__5811__auto___39105 = new cljs.core.Keyword("replicant","context","replicant/context",-909059467).cljs$core$IFn$_invoke$arity$1((headers[(4)]));
if(cljs.core.truth_(temp__5811__auto___39105)){
var ctx__37775__auto___39106 = temp__5811__auto___39105;
cljs.core.reset_BANG_(replicant.assert.current_context,ctx__37775__auto___39106);
} else {
}

cljs.core.reset_BANG_(replicant.assert.current_node,(headers[(7)]));
} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = headers;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = vdom;
if(cljs.core.truth_(and__5000__auto____$1)){
return ((replicant.core.unchanged_QMARK_(headers,cljs.core.first(vdom))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(vdom))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return vdom;
} else {
var k = (cljs.core.truth_(headers)?(headers[(3)]):null);
return cljs.core.second(replicant.core.update_children(impl,el,(cljs.core.truth_(headers)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [headers], null):null),(function (){var G__38855 = cljs.core.PersistentHashSet.EMPTY;
if(cljs.core.truth_(k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__38855,k);
} else {
return G__38855;
}
})(),vdom,cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__38837_SHARP_){
return (p1__38837_SHARP_[(1)]);
}),vdom)),(cljs.core.truth_(cljs.core.first(vdom))?(1):(0))));
}
})();
var hooks = cljs.core.deref(new cljs.core.Keyword(null,"hooks","hooks",-413590103).cljs$core$IFn$_invoke$arity$1(impl));
var temp__5809__auto___39110 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"mounts","mounts",-791474425).cljs$core$IFn$_invoke$arity$1(impl)));
if(temp__5809__auto___39110){
var mounts_39114 = temp__5809__auto___39110;
replicant.protocols.next_frame(renderer,(function (){
cljs.core.run_BANG_((function (p1__38838_SHARP_){
return replicant.core.perform_post_mount_update(renderer,p1__38838_SHARP_);
}),mounts_39114);

return cljs.core.run_BANG_(replicant.core.call_hook,hooks);
}));
} else {
cljs.core.run_BANG_(replicant.core.call_hook,hooks);
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hooks","hooks",-413590103),hooks,new cljs.core.Keyword(null,"vdom","vdom",953162958),vdom__$1,new cljs.core.Keyword(null,"unmounts","unmounts",173366521),new cljs.core.Keyword(null,"unmounts","unmounts",173366521).cljs$core$IFn$_invoke$arity$1(impl)], null);
}));

(replicant.core.reconcile.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(replicant.core.reconcile.cljs$lang$applyTo = (function (seq38839){
var G__38840 = cljs.core.first(seq38839);
var seq38839__$1 = cljs.core.next(seq38839);
var G__38841 = cljs.core.first(seq38839__$1);
var seq38839__$2 = cljs.core.next(seq38839__$1);
var G__38842 = cljs.core.first(seq38839__$2);
var seq38839__$3 = cljs.core.next(seq38839__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38840,G__38841,G__38842,seq38839__$3);
}));

cljs.core.add_watch(replicant.assert.error,new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266),(function (___37800__auto__,___37800__auto____$1,___37800__auto____$2,error__37801__auto__){
return replicant.console_logger.report(error__37801__auto__);
}));

//# sourceMappingURL=replicant.core.js.map
