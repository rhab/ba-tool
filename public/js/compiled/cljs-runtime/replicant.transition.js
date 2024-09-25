goog.provide('replicant.transition');
replicant.transition.get_transition_stats = (function replicant$transition$get_transition_stats(transition_duration_s){
var str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition_duration_s);
var n = (0);
var duration = (0);
while(true){
var s = str.indexOf("s");
var ms = str.indexOf("ms");
var comma = str.indexOf(",");
if((((s < (0))) && ((ms < (0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.unchecked_int(duration)], null);
} else {
var G__38185 = (((comma < (0)))?"":str.substring((comma + (1))).trimLeft());
var G__38186 = (n + (1));
var G__38187 = (function (){var x__5087__auto__ = duration;
var y__5088__auto__ = (((((s < ms)) || ((ms < (0)))))?((1000) * cljs.core.parse_double(str.substring((0),s))):cljs.core.parse_long(str.substring((0),ms)));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
str = G__38185;
n = G__38186;
duration = G__38187;
continue;
}
break;
}
});

//# sourceMappingURL=replicant.transition.js.map
