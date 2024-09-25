goog.provide('replicant.asserts');
replicant.asserts.camel__GT_dash = (function replicant$asserts$camel__GT_dash(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.re_seq(/[A-Z][a-z0-9]*|[a-z0-9]+/,s)));
});
replicant.asserts.camel__GT_dash_k = (function replicant$asserts$camel__GT_dash_k(k){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(replicant.asserts.camel__GT_dash(cljs.core.name(k)));
});

//# sourceMappingURL=replicant.asserts.js.map
