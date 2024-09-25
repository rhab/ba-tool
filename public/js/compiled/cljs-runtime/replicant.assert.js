goog.provide('replicant.assert');
replicant.assert.current_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
replicant.assert.current_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
replicant.assert.error = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
replicant.assert.assert_QMARK_ = (function replicant$assert$assert_QMARK_(){
var temp__5809__auto__ = (function (){var and__5000__auto__ = cljs.env._STAR_compiler_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5809__auto__)){
var options = temp__5809__auto__;
if(cljs.core.contains_QMARK_(options,new cljs.core.Keyword("replicant","asserts?","replicant/asserts?",1355237709))){
return new cljs.core.Keyword("replicant","asserts?","replicant/asserts?",1355237709).cljs$core$IFn$_invoke$arity$1(options);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476).cljs$core$IFn$_invoke$arity$1(options),"replicant/asserts?")){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),"replicant/asserts?"], null));
} else {
if(cljs.core.not((function (){var G__37826 = new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(options);
var fexpr__37825 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"simple","simple",-581868663),null,new cljs.core.Keyword(null,"advanced","advanced",-451287892),null], null), null);
return (fexpr__37825.cljs$core$IFn$_invoke$arity$1 ? fexpr__37825.cljs$core$IFn$_invoke$arity$1(G__37826) : fexpr__37825.call(null, G__37826));
})())){
return true;
} else {
return false;

}
}
}
} else {
return false;
}
});
replicant.assert.add_reporter = (function replicant$assert$add_reporter(k,f){
cljs.core.remove_watch(replicant.assert.error,new cljs.core.Keyword("replicant.assert","default","replicant.assert/default",-504441266));

return cljs.core.add_watch(replicant.assert.error,k,(function (_,___$1,___$2,error){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(error) : f.call(null, error));
}));
});
replicant.assert.remove_reporter = (function replicant$assert$remove_reporter(k){
return cljs.core.remove_watch(replicant.assert.error,k);
});

//# sourceMappingURL=replicant.assert.js.map
