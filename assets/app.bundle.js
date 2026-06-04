function Lc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oa = { exports: {} }, il = {}, sa = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn = Symbol.for("react.element"), zc = Symbol.for("react.portal"), Pc = Symbol.for("react.fragment"), Tc = Symbol.for("react.strict_mode"), Rc = Symbol.for("react.profiler"), Mc = Symbol.for("react.provider"), Fc = Symbol.for("react.context"), Ic = Symbol.for("react.forward_ref"), bc = Symbol.for("react.suspense"), Oc = Symbol.for("react.memo"), Dc = Symbol.for("react.lazy"), Vo = Symbol.iterator;
function Ac(e) {
  return e === null || typeof e != "object" ? null : (e = Vo && e[Vo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var aa = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ua = Object.assign, ca = {};
function an(e, t, n) {
  this.props = e, this.context = t, this.refs = ca, this.updater = n || aa;
}
an.prototype.isReactComponent = {};
an.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
an.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function da() {
}
da.prototype = an.prototype;
function Ui(e, t, n) {
  this.props = e, this.context = t, this.refs = ca, this.updater = n || aa;
}
var Vi = Ui.prototype = new da();
Vi.constructor = Ui;
ua(Vi, an.prototype);
Vi.isPureReactComponent = !0;
var Ho = Array.isArray, fa = Object.prototype.hasOwnProperty, Hi = { current: null }, pa = { key: !0, ref: !0, __self: !0, __source: !0 };
function ha(e, t, n) {
  var r, l = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) fa.call(t, r) && !pa.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), f = 0; f < a; f++) u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: Jn, type: e, key: i, ref: s, props: l, _owner: Hi.current };
}
function $c(e, t) {
  return { $$typeof: Jn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Qi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jn;
}
function Bc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Qo = /\/+/g;
function Sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Bc("" + e.key) : t.toString(36);
}
function Nr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Jn:
        case zc:
          s = !0;
      }
  }
  if (s) return s = e, l = l(s), e = r === "" ? "." + Sl(s, 0) : r, Ho(l) ? (n = "", e != null && (n = e.replace(Qo, "$&/") + "/"), Nr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (Qi(l) && (l = $c(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(Qo, "$&/") + "/") + e)), t.push(l)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Ho(e)) for (var a = 0; a < e.length; a++) {
    i = e[a];
    var u = r + Sl(i, a);
    s += Nr(i, t, n, u, l);
  }
  else if (u = Ac(e), typeof u == "function") for (e = u.call(e), a = 0; !(i = e.next()).done; ) i = i.value, u = r + Sl(i, a++), s += Nr(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function or(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Nr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Wc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null }, Sr = { transition: null }, Uc = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: Sr, ReactCurrentOwner: Hi };
function ma() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = { map: or, forEach: function(e, t, n) {
  or(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return or(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return or(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Qi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = an;
M.Fragment = Pc;
M.Profiler = Rc;
M.PureComponent = Ui;
M.StrictMode = Tc;
M.Suspense = bc;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uc;
M.act = ma;
M.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ua({}, e.props), l = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Hi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (u in t) fa.call(t, u) && !pa.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var f = 0; f < u; f++) a[f] = arguments[f + 2];
    r.children = a;
  }
  return { $$typeof: Jn, type: e.type, key: l, ref: i, props: r, _owner: s };
};
M.createContext = function(e) {
  return e = { $$typeof: Fc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Mc, _context: e }, e.Consumer = e;
};
M.createElement = ha;
M.createFactory = function(e) {
  var t = ha.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: Ic, render: e };
};
M.isValidElement = Qi;
M.lazy = function(e) {
  return { $$typeof: Dc, _payload: { _status: -1, _result: e }, _init: Wc };
};
M.memo = function(e, t) {
  return { $$typeof: Oc, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function(e) {
  var t = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = t;
  }
};
M.unstable_act = ma;
M.useCallback = function(e, t) {
  return ue.current.useCallback(e, t);
};
M.useContext = function(e) {
  return ue.current.useContext(e);
};
M.useDebugValue = function() {
};
M.useDeferredValue = function(e) {
  return ue.current.useDeferredValue(e);
};
M.useEffect = function(e, t) {
  return ue.current.useEffect(e, t);
};
M.useId = function() {
  return ue.current.useId();
};
M.useImperativeHandle = function(e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function(e, t) {
  return ue.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function(e, t) {
  return ue.current.useLayoutEffect(e, t);
};
M.useMemo = function(e, t) {
  return ue.current.useMemo(e, t);
};
M.useReducer = function(e, t, n) {
  return ue.current.useReducer(e, t, n);
};
M.useRef = function(e) {
  return ue.current.useRef(e);
};
M.useState = function(e) {
  return ue.current.useState(e);
};
M.useSyncExternalStore = function(e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function() {
  return ue.current.useTransition();
};
M.version = "18.3.1";
sa.exports = M;
var Yi = sa.exports;
const z = /* @__PURE__ */ Lc(Yi);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vc = Yi, Hc = Symbol.for("react.element"), Qc = Symbol.for("react.fragment"), Yc = Object.prototype.hasOwnProperty, Xc = Vc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Kc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ga(e, t, n) {
  var r, l = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Yc.call(t, r) && !Kc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Hc, type: e, key: i, ref: s, props: l, _owner: Xc.current };
}
il.Fragment = Qc;
il.jsx = ga;
il.jsxs = ga;
oa.exports = il;
var o = oa.exports, xa = { exports: {} }, we = {}, va = { exports: {} }, ya = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(S, P) {
    var R = S.length;
    S.push(P);
    e: for (; 0 < R; ) {
      var H = R - 1 >>> 1, G = S[H];
      if (0 < l(G, P)) S[H] = P, S[R] = G, R = H;
      else break e;
    }
  }
  function n(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var P = S[0], R = S.pop();
    if (R !== P) {
      S[0] = R;
      e: for (var H = 0, G = S.length, lr = G >>> 1; H < lr; ) {
        var xt = 2 * (H + 1) - 1, Nl = S[xt], vt = xt + 1, ir = S[vt];
        if (0 > l(Nl, R)) vt < G && 0 > l(ir, Nl) ? (S[H] = ir, S[vt] = R, H = vt) : (S[H] = Nl, S[xt] = R, H = xt);
        else if (vt < G && 0 > l(ir, R)) S[H] = ir, S[vt] = R, H = vt;
        else break e;
      }
    }
    return P;
  }
  function l(S, P) {
    var R = S.sortIndex - P.sortIndex;
    return R !== 0 ? R : S.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var u = [], f = [], g = 1, m = null, h = 3, v = !1, y = !1, k = !1, _ = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(S) {
    for (var P = n(f); P !== null; ) {
      if (P.callback === null) r(f);
      else if (P.startTime <= S) r(f), P.sortIndex = P.expirationTime, t(u, P);
      else break;
      P = n(f);
    }
  }
  function x(S) {
    if (k = !1, p(S), !y) if (n(u) !== null) y = !0, kl(j);
    else {
      var P = n(f);
      P !== null && jl(x, P.startTime - S);
    }
  }
  function j(S, P) {
    y = !1, k && (k = !1, d(L), L = -1), v = !0;
    var R = h;
    try {
      for (p(P), m = n(u); m !== null && (!(m.expirationTime > P) || S && !Le()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, h = m.priorityLevel;
          var G = H(m.expirationTime <= P);
          P = e.unstable_now(), typeof G == "function" ? m.callback = G : m === n(u) && r(u), p(P);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var lr = !0;
      else {
        var xt = n(f);
        xt !== null && jl(x, xt.startTime - P), lr = !1;
      }
      return lr;
    } finally {
      m = null, h = R, v = !1;
    }
  }
  var E = !1, C = null, L = -1, A = 5, T = -1;
  function Le() {
    return !(e.unstable_now() - T < A);
  }
  function dn() {
    if (C !== null) {
      var S = e.unstable_now();
      T = S;
      var P = !0;
      try {
        P = C(!0, S);
      } finally {
        P ? fn() : (E = !1, C = null);
      }
    } else E = !1;
  }
  var fn;
  if (typeof c == "function") fn = function() {
    c(dn);
  };
  else if (typeof MessageChannel < "u") {
    var Uo = new MessageChannel(), _c = Uo.port2;
    Uo.port1.onmessage = dn, fn = function() {
      _c.postMessage(null);
    };
  } else fn = function() {
    _(dn, 0);
  };
  function kl(S) {
    C = S, E || (E = !0, fn());
  }
  function jl(S, P) {
    L = _(function() {
      S(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(S) {
    S.callback = null;
  }, e.unstable_continueExecution = function() {
    y || v || (y = !0, kl(j));
  }, e.unstable_forceFrameRate = function(S) {
    0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < S ? Math.floor(1e3 / S) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(S) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = h;
    }
    var R = h;
    h = P;
    try {
      return S();
    } finally {
      h = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(S, P) {
    switch (S) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        S = 3;
    }
    var R = h;
    h = S;
    try {
      return P();
    } finally {
      h = R;
    }
  }, e.unstable_scheduleCallback = function(S, P, R) {
    var H = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? H + R : H) : R = H, S) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = R + G, S = { id: g++, callback: P, priorityLevel: S, startTime: R, expirationTime: G, sortIndex: -1 }, R > H ? (S.sortIndex = R, t(f, S), n(u) === null && S === n(f) && (k ? (d(L), L = -1) : k = !0, jl(x, R - H))) : (S.sortIndex = G, t(u, S), y || v || (y = !0, kl(j))), S;
  }, e.unstable_shouldYield = Le, e.unstable_wrapCallback = function(S) {
    var P = h;
    return function() {
      var R = h;
      h = P;
      try {
        return S.apply(this, arguments);
      } finally {
        h = R;
      }
    };
  };
})(ya);
va.exports = ya;
var Gc = va.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zc = Yi, ye = Gc;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var wa = /* @__PURE__ */ new Set(), In = {};
function Rt(e, t) {
  en(e, t), en(e + "Capture", t);
}
function en(e, t) {
  for (In[e] = t, e = 0; e < t.length; e++) wa.add(t[e]);
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zl = Object.prototype.hasOwnProperty, Jc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Yo = {}, Xo = {};
function qc(e) {
  return Zl.call(Xo, e) ? !0 : Zl.call(Yo, e) ? !1 : Jc.test(e) ? Xo[e] = !0 : (Yo[e] = !0, !1);
}
function ed(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function td(e, t, n, r) {
  if (t === null || typeof t > "u" || ed(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function ce(e, t, n, r, l, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ne[e] = new ce(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Xi,
    Ki
  );
  ne[t] = new ce(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Xi, Ki);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Xi, Ki);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gi(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (td(t, n, l, r) && (n = null), r || l === null ? qc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = Zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sr = Symbol.for("react.element"), bt = Symbol.for("react.portal"), Ot = Symbol.for("react.fragment"), Zi = Symbol.for("react.strict_mode"), Jl = Symbol.for("react.profiler"), ka = Symbol.for("react.provider"), ja = Symbol.for("react.context"), Ji = Symbol.for("react.forward_ref"), ql = Symbol.for("react.suspense"), ei = Symbol.for("react.suspense_list"), qi = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), Na = Symbol.for("react.offscreen"), Ko = Symbol.iterator;
function pn(e) {
  return e === null || typeof e != "object" ? null : (e = Ko && e[Ko] || e["@@iterator"], typeof e == "function" ? e : null);
}
var U = Object.assign, El;
function kn(e) {
  if (El === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    El = t && t[1] || "";
  }
  return `
` + El + e;
}
var Cl = !1;
function _l(e, t) {
  if (!e || Cl) return "";
  Cl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (f) {
        var r = f;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (f) {
        r = f;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (var l = f.stack.split(`
`), i = r.stack.split(`
`), s = l.length - 1, a = i.length - 1; 1 <= s && 0 <= a && l[s] !== i[a]; ) a--;
      for (; 1 <= s && 0 <= a; s--, a--) if (l[s] !== i[a]) {
        if (s !== 1 || a !== 1)
          do
            if (s--, a--, 0 > a || l[s] !== i[a]) {
              var u = `
` + l[s].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= s && 0 <= a);
        break;
      }
    }
  } finally {
    Cl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}
function nd(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn("Lazy");
    case 13:
      return kn("Suspense");
    case 19:
      return kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = _l(e.type, !1), e;
    case 11:
      return e = _l(e.type.render, !1), e;
    case 1:
      return e = _l(e.type, !0), e;
    default:
      return "";
  }
}
function ti(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ot:
      return "Fragment";
    case bt:
      return "Portal";
    case Jl:
      return "Profiler";
    case Zi:
      return "StrictMode";
    case ql:
      return "Suspense";
    case ei:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ja:
      return (e.displayName || "Context") + ".Consumer";
    case ka:
      return (e._context.displayName || "Context") + ".Provider";
    case Ji:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case qi:
      return t = e.displayName || null, t !== null ? t : ti(e.type) || "Memo";
    case Je:
      t = e._payload, e = e._init;
      try {
        return ti(e(t));
      } catch {
      }
  }
  return null;
}
function rd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ti(t);
    case 8:
      return t === Zi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Sa(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ld(e) {
  var t = Sa(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function ar(e) {
  e._valueTracker || (e._valueTracker = ld(e));
}
function Ea(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Sa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ir(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ni(e, t) {
  var n = t.checked;
  return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Go(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ft(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ca(e, t) {
  t = t.checked, t != null && Gi(e, "checked", t, !1);
}
function ri(e, t) {
  Ca(e, t);
  var n = ft(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? li(e, t.type, n) : t.hasOwnProperty("defaultValue") && li(e, t.type, ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Zo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function li(e, t, n) {
  (t !== "number" || Ir(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jn = Array.isArray;
function Xt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ii(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Jo(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(w(92));
      if (jn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ft(n) };
}
function _a(e, t) {
  var n = ft(t.value), r = ft(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function qo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function La(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function oi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? La(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ur, za = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (ur = ur || document.createElement("div"), ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ur.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, id = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cn).forEach(function(e) {
  id.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Cn[t] = Cn[e];
  });
});
function Pa(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Cn.hasOwnProperty(e) && Cn[e] ? ("" + t).trim() : t + "px";
}
function Ta(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Pa(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var od = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function si(e, t) {
  if (t) {
    if (od[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function ai(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ui = null;
function eo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ci = null, Kt = null, Gt = null;
function es(e) {
  if (e = tr(e)) {
    if (typeof ci != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = cl(t), ci(e.stateNode, e.type, t));
  }
}
function Ra(e) {
  Kt ? Gt ? Gt.push(e) : Gt = [e] : Kt = e;
}
function Ma() {
  if (Kt) {
    var e = Kt, t = Gt;
    if (Gt = Kt = null, es(e), t) for (e = 0; e < t.length; e++) es(t[e]);
  }
}
function Fa(e, t) {
  return e(t);
}
function Ia() {
}
var Ll = !1;
function ba(e, t, n) {
  if (Ll) return e(t, n);
  Ll = !0;
  try {
    return Fa(e, t, n);
  } finally {
    Ll = !1, (Kt !== null || Gt !== null) && (Ia(), Ma());
  }
}
function On(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var di = !1;
if (Qe) try {
  var hn = {};
  Object.defineProperty(hn, "passive", { get: function() {
    di = !0;
  } }), window.addEventListener("test", hn, hn), window.removeEventListener("test", hn, hn);
} catch {
  di = !1;
}
function sd(e, t, n, r, l, i, s, a, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (g) {
    this.onError(g);
  }
}
var _n = !1, br = null, Or = !1, fi = null, ad = { onError: function(e) {
  _n = !0, br = e;
} };
function ud(e, t, n, r, l, i, s, a, u) {
  _n = !1, br = null, sd.apply(ad, arguments);
}
function cd(e, t, n, r, l, i, s, a, u) {
  if (ud.apply(this, arguments), _n) {
    if (_n) {
      var f = br;
      _n = !1, br = null;
    } else throw Error(w(198));
    Or || (Or = !0, fi = f);
  }
}
function Mt(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Oa(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ts(e) {
  if (Mt(e) !== e) throw Error(w(188));
}
function dd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Mt(e), t === null) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return ts(l), e;
        if (i === r) return ts(l), t;
        i = i.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var s = !1, a = l.child; a; ) {
        if (a === n) {
          s = !0, n = l, r = i;
          break;
        }
        if (a === r) {
          s = !0, r = l, n = i;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            s = !0, n = i, r = l;
            break;
          }
          if (a === r) {
            s = !0, r = i, n = l;
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function Da(e) {
  return e = dd(e), e !== null ? Aa(e) : null;
}
function Aa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Aa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $a = ye.unstable_scheduleCallback, ns = ye.unstable_cancelCallback, fd = ye.unstable_shouldYield, pd = ye.unstable_requestPaint, Q = ye.unstable_now, hd = ye.unstable_getCurrentPriorityLevel, to = ye.unstable_ImmediatePriority, Ba = ye.unstable_UserBlockingPriority, Dr = ye.unstable_NormalPriority, md = ye.unstable_LowPriority, Wa = ye.unstable_IdlePriority, ol = null, Ae = null;
function gd(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function") try {
    Ae.onCommitFiberRoot(ol, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Me = Math.clz32 ? Math.clz32 : yd, xd = Math.log, vd = Math.LN2;
function yd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (xd(e) / vd | 0) | 0;
}
var cr = 64, dr = 4194304;
function Nn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ar(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~l;
    a !== 0 ? r = Nn(a) : (i &= s, i !== 0 && (r = Nn(i)));
  } else s = n & ~l, s !== 0 ? r = Nn(s) : i !== 0 && (r = Nn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Me(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function wd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Me(i), a = 1 << s, u = l[s];
    u === -1 ? (!(a & n) || a & r) && (l[s] = wd(a, t)) : u <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function pi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ua() {
  var e = cr;
  return cr <<= 1, !(cr & 4194240) && (cr = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qn(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Me(t), e[t] = n;
}
function jd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function no(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var I = 0;
function Va(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ha, ro, Qa, Ya, Xa, hi = !1, fr = [], lt = null, it = null, ot = null, Dn = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), et = [], Nd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rs(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      An.delete(t.pointerId);
  }
}
function mn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = tr(t), t !== null && ro(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Sd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return lt = mn(lt, e, t, n, r, l), !0;
    case "dragenter":
      return it = mn(it, e, t, n, r, l), !0;
    case "mouseover":
      return ot = mn(ot, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Dn.set(i, mn(Dn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, An.set(i, mn(An.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Ka(e) {
  var t = jt(e.target);
  if (t !== null) {
    var n = Mt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Oa(n), t !== null) {
          e.blockedOn = t, Xa(e.priority, function() {
            Qa(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Er(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ui = r, n.target.dispatchEvent(r), ui = null;
    } else return t = tr(n), t !== null && ro(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ls(e, t, n) {
  Er(e) && n.delete(t);
}
function Ed() {
  hi = !1, lt !== null && Er(lt) && (lt = null), it !== null && Er(it) && (it = null), ot !== null && Er(ot) && (ot = null), Dn.forEach(ls), An.forEach(ls);
}
function gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, hi || (hi = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, Ed)));
}
function $n(e) {
  function t(l) {
    return gn(l, e);
  }
  if (0 < fr.length) {
    gn(fr[0], e);
    for (var n = 1; n < fr.length; n++) {
      var r = fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (lt !== null && gn(lt, e), it !== null && gn(it, e), ot !== null && gn(ot, e), Dn.forEach(t), An.forEach(t), n = 0; n < et.length; n++) r = et[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && (n = et[0], n.blockedOn === null); ) Ka(n), n.blockedOn === null && et.shift();
}
var Zt = Ge.ReactCurrentBatchConfig, $r = !0;
function Cd(e, t, n, r) {
  var l = I, i = Zt.transition;
  Zt.transition = null;
  try {
    I = 1, lo(e, t, n, r);
  } finally {
    I = l, Zt.transition = i;
  }
}
function _d(e, t, n, r) {
  var l = I, i = Zt.transition;
  Zt.transition = null;
  try {
    I = 4, lo(e, t, n, r);
  } finally {
    I = l, Zt.transition = i;
  }
}
function lo(e, t, n, r) {
  if ($r) {
    var l = mi(e, t, n, r);
    if (l === null) Al(e, t, r, Br, n), rs(e, r);
    else if (Sd(l, e, t, n, r)) r.stopPropagation();
    else if (rs(e, r), t & 4 && -1 < Nd.indexOf(e)) {
      for (; l !== null; ) {
        var i = tr(l);
        if (i !== null && Ha(i), i = mi(e, t, n, r), i === null && Al(e, t, r, Br, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Al(e, t, r, null, n);
  }
}
var Br = null;
function mi(e, t, n, r) {
  if (Br = null, e = eo(r), e = jt(e), e !== null) if (t = Mt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Oa(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Br = e, null;
}
function Ga(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (hd()) {
        case to:
          return 1;
        case Ba:
          return 4;
        case Dr:
        case md:
          return 16;
        case Wa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null, io = null, Cr = null;
function Za() {
  if (Cr) return Cr;
  var e, t = io, n = t.length, r, l = "value" in nt ? nt.value : nt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++) ;
  return Cr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function _r(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function pr() {
  return !0;
}
function is() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, s) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? pr : is, this.isPropagationStopped = is, this;
  }
  return U(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = pr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = pr);
  }, persist: function() {
  }, isPersistent: pr }), t;
}
var un = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, oo = ke(un), er = U({}, un, { view: 0, detail: 0 }), Ld = ke(er), Pl, Tl, xn, sl = U({}, er, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: so, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xn && (xn && e.type === "mousemove" ? (Pl = e.screenX - xn.screenX, Tl = e.screenY - xn.screenY) : Tl = Pl = 0, xn = e), Pl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Tl;
} }), os = ke(sl), zd = U({}, sl, { dataTransfer: 0 }), Pd = ke(zd), Td = U({}, er, { relatedTarget: 0 }), Rl = ke(Td), Rd = U({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Md = ke(Rd), Fd = U({}, un, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Id = ke(Fd), bd = U({}, un, { data: 0 }), ss = ke(bd), Od = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Dd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Ad = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function $d(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ad[e]) ? !!t[e] : !1;
}
function so() {
  return $d;
}
var Bd = U({}, er, { key: function(e) {
  if (e.key) {
    var t = Od[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = _r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Dd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: so, charCode: function(e) {
  return e.type === "keypress" ? _r(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Wd = ke(Bd), Ud = U({}, sl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), as = ke(Ud), Vd = U({}, er, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: so }), Hd = ke(Vd), Qd = U({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yd = ke(Qd), Xd = U({}, sl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Kd = ke(Xd), Gd = [9, 13, 27, 32], ao = Qe && "CompositionEvent" in window, Ln = null;
Qe && "documentMode" in document && (Ln = document.documentMode);
var Zd = Qe && "TextEvent" in window && !Ln, Ja = Qe && (!ao || Ln && 8 < Ln && 11 >= Ln), us = " ", cs = !1;
function qa(e, t) {
  switch (e) {
    case "keyup":
      return Gd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function eu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Dt = !1;
function Jd(e, t) {
  switch (e) {
    case "compositionend":
      return eu(t);
    case "keypress":
      return t.which !== 32 ? null : (cs = !0, us);
    case "textInput":
      return e = t.data, e === us && cs ? null : e;
    default:
      return null;
  }
}
function qd(e, t) {
  if (Dt) return e === "compositionend" || !ao && qa(e, t) ? (e = Za(), Cr = io = nt = null, Dt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ja && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ef = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ds(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ef[e.type] : t === "textarea";
}
function tu(e, t, n, r) {
  Ra(r), t = Wr(t, "onChange"), 0 < t.length && (n = new oo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var zn = null, Bn = null;
function tf(e) {
  fu(e, 0);
}
function al(e) {
  var t = Bt(e);
  if (Ea(t)) return e;
}
function nf(e, t) {
  if (e === "change") return t;
}
var nu = !1;
if (Qe) {
  var Ml;
  if (Qe) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var fs = document.createElement("div");
      fs.setAttribute("oninput", "return;"), Fl = typeof fs.oninput == "function";
    }
    Ml = Fl;
  } else Ml = !1;
  nu = Ml && (!document.documentMode || 9 < document.documentMode);
}
function ps() {
  zn && (zn.detachEvent("onpropertychange", ru), Bn = zn = null);
}
function ru(e) {
  if (e.propertyName === "value" && al(Bn)) {
    var t = [];
    tu(t, Bn, e, eo(e)), ba(tf, t);
  }
}
function rf(e, t, n) {
  e === "focusin" ? (ps(), zn = t, Bn = n, zn.attachEvent("onpropertychange", ru)) : e === "focusout" && ps();
}
function lf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return al(Bn);
}
function of(e, t) {
  if (e === "click") return al(t);
}
function sf(e, t) {
  if (e === "input" || e === "change") return al(t);
}
function af(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ie = typeof Object.is == "function" ? Object.is : af;
function Wn(e, t) {
  if (Ie(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Zl.call(t, l) || !Ie(e[l], t[l])) return !1;
  }
  return !0;
}
function hs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ms(e, t) {
  var n = hs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = hs(n);
  }
}
function lu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? lu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function iu() {
  for (var e = window, t = Ir(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ir(e.document);
  }
  return t;
}
function uo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function uf(e) {
  var t = iu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && lu(n.ownerDocument.documentElement, n)) {
    if (r !== null && uo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = ms(n, i);
        var s = ms(
          n,
          r
        );
        l && s && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var cf = Qe && "documentMode" in document && 11 >= document.documentMode, At = null, gi = null, Pn = null, xi = !1;
function gs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xi || At == null || At !== Ir(r) || (r = At, "selectionStart" in r && uo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Pn && Wn(Pn, r) || (Pn = r, r = Wr(gi, "onSelect"), 0 < r.length && (t = new oo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = At)));
}
function hr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var $t = { animationend: hr("Animation", "AnimationEnd"), animationiteration: hr("Animation", "AnimationIteration"), animationstart: hr("Animation", "AnimationStart"), transitionend: hr("Transition", "TransitionEnd") }, Il = {}, ou = {};
Qe && (ou = document.createElement("div").style, "AnimationEvent" in window || (delete $t.animationend.animation, delete $t.animationiteration.animation, delete $t.animationstart.animation), "TransitionEvent" in window || delete $t.transitionend.transition);
function ul(e) {
  if (Il[e]) return Il[e];
  if (!$t[e]) return e;
  var t = $t[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ou) return Il[e] = t[n];
  return e;
}
var su = ul("animationend"), au = ul("animationiteration"), uu = ul("animationstart"), cu = ul("transitionend"), du = /* @__PURE__ */ new Map(), xs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ht(e, t) {
  du.set(e, t), Rt(t, [e]);
}
for (var bl = 0; bl < xs.length; bl++) {
  var Ol = xs[bl], df = Ol.toLowerCase(), ff = Ol[0].toUpperCase() + Ol.slice(1);
  ht(df, "on" + ff);
}
ht(su, "onAnimationEnd");
ht(au, "onAnimationIteration");
ht(uu, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(cu, "onTransitionEnd");
en("onMouseEnter", ["mouseout", "mouseover"]);
en("onMouseLeave", ["mouseout", "mouseover"]);
en("onPointerEnter", ["pointerout", "pointerover"]);
en("onPointerLeave", ["pointerout", "pointerover"]);
Rt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));
function vs(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, cd(r, t, void 0, e), e.currentTarget = null;
}
function fu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], u = a.instance, f = a.currentTarget;
        if (a = a.listener, u !== i && l.isPropagationStopped()) break e;
        vs(l, a, f), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], u = a.instance, f = a.currentTarget, a = a.listener, u !== i && l.isPropagationStopped()) break e;
        vs(l, a, f), i = u;
      }
    }
  }
  if (Or) throw e = fi, Or = !1, fi = null, e;
}
function O(e, t) {
  var n = t[ji];
  n === void 0 && (n = t[ji] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (pu(t, e, 2, !1), n.add(r));
}
function Dl(e, t, n) {
  var r = 0;
  t && (r |= 4), pu(n, e, r, t);
}
var mr = "_reactListening" + Math.random().toString(36).slice(2);
function Un(e) {
  if (!e[mr]) {
    e[mr] = !0, wa.forEach(function(n) {
      n !== "selectionchange" && (pf.has(n) || Dl(n, !1, e), Dl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mr] || (t[mr] = !0, Dl("selectionchange", !1, t));
  }
}
function pu(e, t, n, r) {
  switch (Ga(t)) {
    case 1:
      var l = Cd;
      break;
    case 4:
      l = _d;
      break;
    default:
      l = lo;
  }
  n = l.bind(null, t, n, e), l = void 0, !di || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Al(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === l || a.nodeType === 8 && a.parentNode === l) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var u = s.tag;
        if ((u === 3 || u === 4) && (u = s.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
        s = s.return;
      }
      for (; a !== null; ) {
        if (s = jt(a), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = i = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  ba(function() {
    var f = i, g = eo(n), m = [];
    e: {
      var h = du.get(e);
      if (h !== void 0) {
        var v = oo, y = e;
        switch (e) {
          case "keypress":
            if (_r(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Wd;
            break;
          case "focusin":
            y = "focus", v = Rl;
            break;
          case "focusout":
            y = "blur", v = Rl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Rl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = os;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Pd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Hd;
            break;
          case su:
          case au:
          case uu:
            v = Md;
            break;
          case cu:
            v = Yd;
            break;
          case "scroll":
            v = Ld;
            break;
          case "wheel":
            v = Kd;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Id;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = as;
        }
        var k = (t & 4) !== 0, _ = !k && e === "scroll", d = k ? h !== null ? h + "Capture" : null : h;
        k = [];
        for (var c = f, p; c !== null; ) {
          p = c;
          var x = p.stateNode;
          if (p.tag === 5 && x !== null && (p = x, d !== null && (x = On(c, d), x != null && k.push(Vn(c, x, p)))), _) break;
          c = c.return;
        }
        0 < k.length && (h = new v(h, y, null, n, g), m.push({ event: h, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== ui && (y = n.relatedTarget || n.fromElement) && (jt(y) || y[Ye])) break e;
        if ((v || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = f, y = y ? jt(y) : null, y !== null && (_ = Mt(y), y !== _ || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = f), v !== y)) {
          if (k = os, x = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = as, x = "onPointerLeave", d = "onPointerEnter", c = "pointer"), _ = v == null ? h : Bt(v), p = y == null ? h : Bt(y), h = new k(x, c + "leave", v, n, g), h.target = _, h.relatedTarget = p, x = null, jt(g) === f && (k = new k(d, c + "enter", y, n, g), k.target = p, k.relatedTarget = _, x = k), _ = x, v && y) t: {
            for (k = v, d = y, c = 0, p = k; p; p = Ft(p)) c++;
            for (p = 0, x = d; x; x = Ft(x)) p++;
            for (; 0 < c - p; ) k = Ft(k), c--;
            for (; 0 < p - c; ) d = Ft(d), p--;
            for (; c--; ) {
              if (k === d || d !== null && k === d.alternate) break t;
              k = Ft(k), d = Ft(d);
            }
            k = null;
          }
          else k = null;
          v !== null && ys(m, h, v, k, !1), y !== null && _ !== null && ys(m, _, y, k, !0);
        }
      }
      e: {
        if (h = f ? Bt(f) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file") var j = nf;
        else if (ds(h)) if (nu) j = sf;
        else {
          j = lf;
          var E = rf;
        }
        else (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (j = of);
        if (j && (j = j(e, f))) {
          tu(m, j, n, g);
          break e;
        }
        E && E(e, h, f), e === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && li(h, "number", h.value);
      }
      switch (E = f ? Bt(f) : window, e) {
        case "focusin":
          (ds(E) || E.contentEditable === "true") && (At = E, gi = f, Pn = null);
          break;
        case "focusout":
          Pn = gi = At = null;
          break;
        case "mousedown":
          xi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xi = !1, gs(m, n, g);
          break;
        case "selectionchange":
          if (cf) break;
        case "keydown":
        case "keyup":
          gs(m, n, g);
      }
      var C;
      if (ao) e: {
        switch (e) {
          case "compositionstart":
            var L = "onCompositionStart";
            break e;
          case "compositionend":
            L = "onCompositionEnd";
            break e;
          case "compositionupdate":
            L = "onCompositionUpdate";
            break e;
        }
        L = void 0;
      }
      else Dt ? qa(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (Ja && n.locale !== "ko" && (Dt || L !== "onCompositionStart" ? L === "onCompositionEnd" && Dt && (C = Za()) : (nt = g, io = "value" in nt ? nt.value : nt.textContent, Dt = !0)), E = Wr(f, L), 0 < E.length && (L = new ss(L, e, null, n, g), m.push({ event: L, listeners: E }), C ? L.data = C : (C = eu(n), C !== null && (L.data = C)))), (C = Zd ? Jd(e, n) : qd(e, n)) && (f = Wr(f, "onBeforeInput"), 0 < f.length && (g = new ss("onBeforeInput", "beforeinput", null, n, g), m.push({ event: g, listeners: f }), g.data = C));
    }
    fu(m, t);
  });
}
function Vn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = On(e, n), i != null && r.unshift(Vn(e, i, l)), i = On(e, t), i != null && r.push(Vn(e, i, l))), e = e.return;
  }
  return r;
}
function Ft(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ys(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, u = a.alternate, f = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 && f !== null && (a = f, l ? (u = On(n, i), u != null && s.unshift(Vn(n, u, a))) : l || (u = On(n, i), u != null && s.push(Vn(n, u, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var hf = /\r\n?/g, mf = /\u0000|\uFFFD/g;
function ws(e) {
  return (typeof e == "string" ? e : "" + e).replace(hf, `
`).replace(mf, "");
}
function gr(e, t, n) {
  if (t = ws(t), ws(e) !== t && n) throw Error(w(425));
}
function Ur() {
}
var vi = null, yi = null;
function wi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ki = typeof setTimeout == "function" ? setTimeout : void 0, gf = typeof clearTimeout == "function" ? clearTimeout : void 0, ks = typeof Promise == "function" ? Promise : void 0, xf = typeof queueMicrotask == "function" ? queueMicrotask : typeof ks < "u" ? function(e) {
  return ks.resolve(null).then(e).catch(vf);
} : ki;
function vf(e) {
  setTimeout(function() {
    throw e;
  });
}
function $l(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), $n(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  $n(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function js(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var cn = Math.random().toString(36).slice(2), De = "__reactFiber$" + cn, Hn = "__reactProps$" + cn, Ye = "__reactContainer$" + cn, ji = "__reactEvents$" + cn, yf = "__reactListeners$" + cn, wf = "__reactHandles$" + cn;
function jt(e) {
  var t = e[De];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ye] || n[De]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = js(e); e !== null; ) {
        if (n = e[De]) return n;
        e = js(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function tr(e) {
  return e = e[De] || e[Ye], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function cl(e) {
  return e[Hn] || null;
}
var Ni = [], Wt = -1;
function mt(e) {
  return { current: e };
}
function D(e) {
  0 > Wt || (e.current = Ni[Wt], Ni[Wt] = null, Wt--);
}
function b(e, t) {
  Wt++, Ni[Wt] = e.current, e.current = t;
}
var pt = {}, oe = mt(pt), pe = mt(!1), _t = pt;
function tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function he(e) {
  return e = e.childContextTypes, e != null;
}
function Vr() {
  D(pe), D(oe);
}
function Ns(e, t, n) {
  if (oe.current !== pt) throw Error(w(168));
  b(oe, t), b(pe, n);
}
function hu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, rd(e) || "Unknown", l));
  return U({}, n, r);
}
function Hr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt, _t = oe.current, b(oe, e), b(pe, pe.current), !0;
}
function Ss(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = hu(e, t, _t), r.__reactInternalMemoizedMergedChildContext = e, D(pe), D(oe), b(oe, e)) : D(pe), b(pe, n);
}
var We = null, dl = !1, Bl = !1;
function mu(e) {
  We === null ? We = [e] : We.push(e);
}
function kf(e) {
  dl = !0, mu(e);
}
function gt() {
  if (!Bl && We !== null) {
    Bl = !0;
    var e = 0, t = I;
    try {
      var n = We;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      We = null, dl = !1;
    } catch (l) {
      throw We !== null && (We = We.slice(e + 1)), $a(to, gt), l;
    } finally {
      I = t, Bl = !1;
    }
  }
  return null;
}
var Ut = [], Vt = 0, Qr = null, Yr = 0, je = [], Ne = 0, Lt = null, Ue = 1, Ve = "";
function yt(e, t) {
  Ut[Vt++] = Yr, Ut[Vt++] = Qr, Qr = e, Yr = t;
}
function gu(e, t, n) {
  je[Ne++] = Ue, je[Ne++] = Ve, je[Ne++] = Lt, Lt = e;
  var r = Ue;
  e = Ve;
  var l = 32 - Me(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Me(t) + l;
  if (30 < i) {
    var s = l - l % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, Ue = 1 << 32 - Me(t) + l | n << l | r, Ve = i + e;
  } else Ue = 1 << i | n << l | r, Ve = e;
}
function co(e) {
  e.return !== null && (yt(e, 1), gu(e, 1, 0));
}
function fo(e) {
  for (; e === Qr; ) Qr = Ut[--Vt], Ut[Vt] = null, Yr = Ut[--Vt], Ut[Vt] = null;
  for (; e === Lt; ) Lt = je[--Ne], je[Ne] = null, Ve = je[--Ne], je[Ne] = null, Ue = je[--Ne], je[Ne] = null;
}
var ve = null, xe = null, $ = !1, Re = null;
function xu(e, t) {
  var n = Se(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Es(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ve = e, xe = st(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ve = e, xe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Lt !== null ? { id: Ue, overflow: Ve } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Se(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ve = e, xe = null, !0) : !1;
    default:
      return !1;
  }
}
function Si(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ei(e) {
  if ($) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Es(e, t)) {
        if (Si(e)) throw Error(w(418));
        t = st(n.nextSibling);
        var r = ve;
        t && Es(e, t) ? xu(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, ve = e);
      }
    } else {
      if (Si(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, $ = !1, ve = e;
    }
  }
}
function Cs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ve = e;
}
function xr(e) {
  if (e !== ve) return !1;
  if (!$) return Cs(e), $ = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps)), t && (t = xe)) {
    if (Si(e)) throw vu(), Error(w(418));
    for (; t; ) xu(e, t), t = st(t.nextSibling);
  }
  if (Cs(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = st(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = ve ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function vu() {
  for (var e = xe; e; ) e = st(e.nextSibling);
}
function nn() {
  xe = ve = null, $ = !1;
}
function po(e) {
  Re === null ? Re = [e] : Re.push(e);
}
var jf = Ge.ReactCurrentBatchConfig;
function vn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = l.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function vr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function _s(e) {
  var t = e._init;
  return t(e._payload);
}
function yu(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [c], d.flags |= 16) : p.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function l(d, c) {
    return d = dt(d, c), d.index = 0, d.sibling = null, d;
  }
  function i(d, c, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < c ? (d.flags |= 2, c) : p) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, c, p, x) {
    return c === null || c.tag !== 6 ? (c = Xl(p, d.mode, x), c.return = d, c) : (c = l(c, p), c.return = d, c);
  }
  function u(d, c, p, x) {
    var j = p.type;
    return j === Ot ? g(d, c, p.props.children, x, p.key) : c !== null && (c.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Je && _s(j) === c.type) ? (x = l(c, p.props), x.ref = vn(d, c, p), x.return = d, x) : (x = Fr(p.type, p.key, p.props, null, d.mode, x), x.ref = vn(d, c, p), x.return = d, x);
  }
  function f(d, c, p, x) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Kl(p, d.mode, x), c.return = d, c) : (c = l(c, p.children || []), c.return = d, c);
  }
  function g(d, c, p, x, j) {
    return c === null || c.tag !== 7 ? (c = Ct(p, d.mode, x, j), c.return = d, c) : (c = l(c, p), c.return = d, c);
  }
  function m(d, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Xl("" + c, d.mode, p), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case sr:
          return p = Fr(c.type, c.key, c.props, null, d.mode, p), p.ref = vn(d, null, c), p.return = d, p;
        case bt:
          return c = Kl(c, d.mode, p), c.return = d, c;
        case Je:
          var x = c._init;
          return m(d, x(c._payload), p);
      }
      if (jn(c) || pn(c)) return c = Ct(c, d.mode, p, null), c.return = d, c;
      vr(d, c);
    }
    return null;
  }
  function h(d, c, p, x) {
    var j = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return j !== null ? null : a(d, c, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case sr:
          return p.key === j ? u(d, c, p, x) : null;
        case bt:
          return p.key === j ? f(d, c, p, x) : null;
        case Je:
          return j = p._init, h(
            d,
            c,
            j(p._payload),
            x
          );
      }
      if (jn(p) || pn(p)) return j !== null ? null : g(d, c, p, x, null);
      vr(d, p);
    }
    return null;
  }
  function v(d, c, p, x, j) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return d = d.get(p) || null, a(c, d, "" + x, j);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case sr:
          return d = d.get(x.key === null ? p : x.key) || null, u(c, d, x, j);
        case bt:
          return d = d.get(x.key === null ? p : x.key) || null, f(c, d, x, j);
        case Je:
          var E = x._init;
          return v(d, c, p, E(x._payload), j);
      }
      if (jn(x) || pn(x)) return d = d.get(p) || null, g(c, d, x, j, null);
      vr(c, x);
    }
    return null;
  }
  function y(d, c, p, x) {
    for (var j = null, E = null, C = c, L = c = 0, A = null; C !== null && L < p.length; L++) {
      C.index > L ? (A = C, C = null) : A = C.sibling;
      var T = h(d, C, p[L], x);
      if (T === null) {
        C === null && (C = A);
        break;
      }
      e && C && T.alternate === null && t(d, C), c = i(T, c, L), E === null ? j = T : E.sibling = T, E = T, C = A;
    }
    if (L === p.length) return n(d, C), $ && yt(d, L), j;
    if (C === null) {
      for (; L < p.length; L++) C = m(d, p[L], x), C !== null && (c = i(C, c, L), E === null ? j = C : E.sibling = C, E = C);
      return $ && yt(d, L), j;
    }
    for (C = r(d, C); L < p.length; L++) A = v(C, d, L, p[L], x), A !== null && (e && A.alternate !== null && C.delete(A.key === null ? L : A.key), c = i(A, c, L), E === null ? j = A : E.sibling = A, E = A);
    return e && C.forEach(function(Le) {
      return t(d, Le);
    }), $ && yt(d, L), j;
  }
  function k(d, c, p, x) {
    var j = pn(p);
    if (typeof j != "function") throw Error(w(150));
    if (p = j.call(p), p == null) throw Error(w(151));
    for (var E = j = null, C = c, L = c = 0, A = null, T = p.next(); C !== null && !T.done; L++, T = p.next()) {
      C.index > L ? (A = C, C = null) : A = C.sibling;
      var Le = h(d, C, T.value, x);
      if (Le === null) {
        C === null && (C = A);
        break;
      }
      e && C && Le.alternate === null && t(d, C), c = i(Le, c, L), E === null ? j = Le : E.sibling = Le, E = Le, C = A;
    }
    if (T.done) return n(
      d,
      C
    ), $ && yt(d, L), j;
    if (C === null) {
      for (; !T.done; L++, T = p.next()) T = m(d, T.value, x), T !== null && (c = i(T, c, L), E === null ? j = T : E.sibling = T, E = T);
      return $ && yt(d, L), j;
    }
    for (C = r(d, C); !T.done; L++, T = p.next()) T = v(C, d, L, T.value, x), T !== null && (e && T.alternate !== null && C.delete(T.key === null ? L : T.key), c = i(T, c, L), E === null ? j = T : E.sibling = T, E = T);
    return e && C.forEach(function(dn) {
      return t(d, dn);
    }), $ && yt(d, L), j;
  }
  function _(d, c, p, x) {
    if (typeof p == "object" && p !== null && p.type === Ot && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case sr:
          e: {
            for (var j = p.key, E = c; E !== null; ) {
              if (E.key === j) {
                if (j = p.type, j === Ot) {
                  if (E.tag === 7) {
                    n(d, E.sibling), c = l(E, p.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (E.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Je && _s(j) === E.type) {
                  n(d, E.sibling), c = l(E, p.props), c.ref = vn(d, E, p), c.return = d, d = c;
                  break e;
                }
                n(d, E);
                break;
              } else t(d, E);
              E = E.sibling;
            }
            p.type === Ot ? (c = Ct(p.props.children, d.mode, x, p.key), c.return = d, d = c) : (x = Fr(p.type, p.key, p.props, null, d.mode, x), x.ref = vn(d, c, p), x.return = d, d = x);
          }
          return s(d);
        case bt:
          e: {
            for (E = p.key; c !== null; ) {
              if (c.key === E) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(d, c.sibling), c = l(c, p.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = Kl(p, d.mode, x), c.return = d, d = c;
          }
          return s(d);
        case Je:
          return E = p._init, _(d, c, E(p._payload), x);
      }
      if (jn(p)) return y(d, c, p, x);
      if (pn(p)) return k(d, c, p, x);
      vr(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, p), c.return = d, d = c) : (n(d, c), c = Xl(p, d.mode, x), c.return = d, d = c), s(d)) : n(d, c);
  }
  return _;
}
var rn = yu(!0), wu = yu(!1), Xr = mt(null), Kr = null, Ht = null, ho = null;
function mo() {
  ho = Ht = Kr = null;
}
function go(e) {
  var t = Xr.current;
  D(Xr), e._currentValue = t;
}
function Ci(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Jt(e, t) {
  Kr = e, ho = Ht = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null);
}
function Ce(e) {
  var t = e._currentValue;
  if (ho !== e) if (e = { context: e, memoizedValue: t, next: null }, Ht === null) {
    if (Kr === null) throw Error(w(308));
    Ht = e, Kr.dependencies = { lanes: 0, firstContext: e };
  } else Ht = Ht.next = e;
  return t;
}
var Nt = null;
function xo(e) {
  Nt === null ? Nt = [e] : Nt.push(e);
}
function ku(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, xo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Xe(e, r);
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var qe = !1;
function vo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ju(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function He(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Xe(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, xo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Xe(e, n);
}
function Lr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, no(e, n);
  }
}
function Ls(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Gr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
  var i = l.firstBaseUpdate, s = l.lastBaseUpdate, a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a, f = u.next;
    u.next = null, s === null ? i = f : s.next = f, s = u;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, a = g.lastBaseUpdate, a !== s && (a === null ? g.firstBaseUpdate = f : a.next = f, g.lastBaseUpdate = u));
  }
  if (i !== null) {
    var m = l.baseState;
    s = 0, g = f = u = null, a = i;
    do {
      var h = a.lane, v = a.eventTime;
      if ((r & h) === h) {
        g !== null && (g = g.next = {
          eventTime: v,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var y = e, k = a;
          switch (h = t, v = n, k.tag) {
            case 1:
              if (y = k.payload, typeof y == "function") {
                m = y.call(v, m, h);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = k.payload, h = typeof y == "function" ? y.call(v, m, h) : y, h == null) break e;
              m = U({}, m, h);
              break e;
            case 2:
              qe = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [a] : h.push(a));
      } else v = { eventTime: v, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, g === null ? (f = g = v, u = m) : g = g.next = v, s |= h;
      if (a = a.next, a === null) {
        if (a = l.shared.pending, a === null) break;
        h = a, a = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
      }
    } while (!0);
    if (g === null && (u = m), l.baseState = u, l.firstBaseUpdate = f, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        s |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Pt |= s, e.lanes = s, e.memoizedState = m;
  }
}
function zs(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(w(191, l));
      l.call(r);
    }
  }
}
var nr = {}, $e = mt(nr), Qn = mt(nr), Yn = mt(nr);
function St(e) {
  if (e === nr) throw Error(w(174));
  return e;
}
function yo(e, t) {
  switch (b(Yn, t), b(Qn, e), b($e, nr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : oi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = oi(t, e);
  }
  D($e), b($e, t);
}
function ln() {
  D($e), D(Qn), D(Yn);
}
function Nu(e) {
  St(Yn.current);
  var t = St($e.current), n = oi(t, e.type);
  t !== n && (b(Qn, e), b($e, n));
}
function wo(e) {
  Qn.current === e && (D($e), D(Qn));
}
var B = mt(0);
function Zr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Wl = [];
function ko() {
  for (var e = 0; e < Wl.length; e++) Wl[e]._workInProgressVersionPrimary = null;
  Wl.length = 0;
}
var zr = Ge.ReactCurrentDispatcher, Ul = Ge.ReactCurrentBatchConfig, zt = 0, W = null, X = null, Z = null, Jr = !1, Tn = !1, Xn = 0, Nf = 0;
function re() {
  throw Error(w(321));
}
function jo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ie(e[n], t[n])) return !1;
  return !0;
}
function No(e, t, n, r, l, i) {
  if (zt = i, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zr.current = e === null || e.memoizedState === null ? _f : Lf, e = n(r, l), Tn) {
    i = 0;
    do {
      if (Tn = !1, Xn = 0, 25 <= i) throw Error(w(301));
      i += 1, Z = X = null, t.updateQueue = null, zr.current = zf, e = n(r, l);
    } while (Tn);
  }
  if (zr.current = qr, t = X !== null && X.next !== null, zt = 0, Z = X = W = null, Jr = !1, t) throw Error(w(300));
  return e;
}
function So() {
  var e = Xn !== 0;
  return Xn = 0, e;
}
function Oe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? W.memoizedState = Z = e : Z = Z.next = e, Z;
}
function _e() {
  if (X === null) {
    var e = W.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = Z === null ? W.memoizedState : Z.next;
  if (t !== null) Z = t, X = e;
  else {
    if (e === null) throw Error(w(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, Z === null ? W.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
}
function Kn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vl(e) {
  var t = _e(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = X, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      l.next = i.next, i.next = s;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var a = s = null, u = null, f = i;
    do {
      var g = f.lane;
      if ((zt & g) === g) u !== null && (u = u.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var m = {
          lane: g,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        u === null ? (a = u = m, s = r) : u = u.next = m, W.lanes |= g, Pt |= g;
      }
      f = f.next;
    } while (f !== null && f !== i);
    u === null ? s = r : u.next = a, Ie(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, W.lanes |= i, Pt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Hl(e) {
  var t = _e(), n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = l = l.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== l);
    Ie(i, t.memoizedState) || (fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Su() {
}
function Eu(e, t) {
  var n = W, r = _e(), l = t(), i = !Ie(r.memoizedState, l);
  if (i && (r.memoizedState = l, fe = !0), r = r.queue, Eo(Lu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Z !== null && Z.memoizedState.tag & 1) {
    if (n.flags |= 2048, Gn(9, _u.bind(null, n, r, l, t), void 0, null), J === null) throw Error(w(349));
    zt & 30 || Cu(n, t, l);
  }
  return l;
}
function Cu(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = W.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, W.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function _u(e, t, n, r) {
  t.value = n, t.getSnapshot = r, zu(t) && Pu(e);
}
function Lu(e, t, n) {
  return n(function() {
    zu(t) && Pu(e);
  });
}
function zu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function Pu(e) {
  var t = Xe(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Ps(e) {
  var t = Oe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kn, lastRenderedState: e }, t.queue = e, e = e.dispatch = Cf.bind(null, W, e), [t.memoizedState, e];
}
function Gn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = W.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, W.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Tu() {
  return _e().memoizedState;
}
function Pr(e, t, n, r) {
  var l = Oe();
  W.flags |= e, l.memoizedState = Gn(1 | t, n, void 0, r === void 0 ? null : r);
}
function fl(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var s = X.memoizedState;
    if (i = s.destroy, r !== null && jo(r, s.deps)) {
      l.memoizedState = Gn(t, n, i, r);
      return;
    }
  }
  W.flags |= e, l.memoizedState = Gn(1 | t, n, i, r);
}
function Ts(e, t) {
  return Pr(8390656, 8, e, t);
}
function Eo(e, t) {
  return fl(2048, 8, e, t);
}
function Ru(e, t) {
  return fl(4, 2, e, t);
}
function Mu(e, t) {
  return fl(4, 4, e, t);
}
function Fu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Iu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, fl(4, 4, Fu.bind(null, t, e), n);
}
function Co() {
}
function bu(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ou(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Du(e, t, n) {
  return zt & 21 ? (Ie(n, t) || (n = Ua(), W.lanes |= n, Pt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n);
}
function Sf(e, t) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    I = n, Ul.transition = r;
  }
}
function Au() {
  return _e().memoizedState;
}
function Ef(e, t, n) {
  var r = ct(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $u(e)) Bu(t, n);
  else if (n = ku(e, t, n, r), n !== null) {
    var l = ae();
    Fe(n, e, r, l), Wu(n, t, r);
  }
}
function Cf(e, t, n) {
  var r = ct(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($u(e)) Bu(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, a = i(s, n);
      if (l.hasEagerState = !0, l.eagerState = a, Ie(a, s)) {
        var u = t.interleaved;
        u === null ? (l.next = l, xo(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = ku(e, t, l, r), n !== null && (l = ae(), Fe(n, e, r, l), Wu(n, t, r));
  }
}
function $u(e) {
  var t = e.alternate;
  return e === W || t !== null && t === W;
}
function Bu(e, t) {
  Tn = Jr = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Wu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, no(e, n);
  }
}
var qr = { readContext: Ce, useCallback: re, useContext: re, useEffect: re, useImperativeHandle: re, useInsertionEffect: re, useLayoutEffect: re, useMemo: re, useReducer: re, useRef: re, useState: re, useDebugValue: re, useDeferredValue: re, useTransition: re, useMutableSource: re, useSyncExternalStore: re, useId: re, unstable_isNewReconciler: !1 }, _f = { readContext: Ce, useCallback: function(e, t) {
  return Oe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ce, useEffect: Ts, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Pr(
    4194308,
    4,
    Fu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Pr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Pr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Oe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Oe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ef.bind(null, W, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Oe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ps, useDebugValue: Co, useDeferredValue: function(e) {
  return Oe().memoizedState = e;
}, useTransition: function() {
  var e = Ps(!1), t = e[0];
  return e = Sf.bind(null, e[1]), Oe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = W, l = Oe();
  if ($) {
    if (n === void 0) throw Error(w(407));
    n = n();
  } else {
    if (n = t(), J === null) throw Error(w(349));
    zt & 30 || Cu(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Ts(Lu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Gn(9, _u.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Oe(), t = J.identifierPrefix;
  if ($) {
    var n = Ve, r = Ue;
    n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Nf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Lf = {
  readContext: Ce,
  useCallback: bu,
  useContext: Ce,
  useEffect: Eo,
  useImperativeHandle: Iu,
  useInsertionEffect: Ru,
  useLayoutEffect: Mu,
  useMemo: Ou,
  useReducer: Vl,
  useRef: Tu,
  useState: function() {
    return Vl(Kn);
  },
  useDebugValue: Co,
  useDeferredValue: function(e) {
    var t = _e();
    return Du(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Vl(Kn)[0], t = _e().memoizedState;
    return [e, t];
  },
  useMutableSource: Su,
  useSyncExternalStore: Eu,
  useId: Au,
  unstable_isNewReconciler: !1
}, zf = { readContext: Ce, useCallback: bu, useContext: Ce, useEffect: Eo, useImperativeHandle: Iu, useInsertionEffect: Ru, useLayoutEffect: Mu, useMemo: Ou, useReducer: Hl, useRef: Tu, useState: function() {
  return Hl(Kn);
}, useDebugValue: Co, useDeferredValue: function(e) {
  var t = _e();
  return X === null ? t.memoizedState = e : Du(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Hl(Kn)[0], t = _e().memoizedState;
  return [e, t];
}, useMutableSource: Su, useSyncExternalStore: Eu, useId: Au, unstable_isNewReconciler: !1 };
function Pe(e, t) {
  if (e && e.defaultProps) {
    t = U({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function _i(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var pl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = ct(e), i = He(r, l);
  i.payload = t, n != null && (i.callback = n), t = at(e, i, l), t !== null && (Fe(t, e, l, r), Lr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = ct(e), i = He(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = at(e, i, l), t !== null && (Fe(t, e, l, r), Lr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ae(), r = ct(e), l = He(n, r);
  l.tag = 2, t != null && (l.callback = t), t = at(e, l, r), t !== null && (Fe(t, e, r, n), Lr(t, e, r));
} };
function Rs(e, t, n, r, l, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Wn(n, r) || !Wn(l, i) : !0;
}
function Uu(e, t, n) {
  var r = !1, l = pt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ce(i) : (l = he(t) ? _t : oe.current, r = t.contextTypes, i = (r = r != null) ? tn(e, l) : pt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = pl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ms(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && pl.enqueueReplaceState(t, t.state, null);
}
function Li(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, vo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ce(i) : (i = he(t) ? _t : oe.current, l.context = tn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (_i(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && pl.enqueueReplaceState(l, l.state, null), Gr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function on(e, t) {
  try {
    var n = "", r = t;
    do
      n += nd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Pf = typeof WeakMap == "function" ? WeakMap : Map;
function Vu(e, t, n) {
  n = He(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    tl || (tl = !0, Ai = r), zi(e, t);
  }, n;
}
function Hu(e, t, n) {
  n = He(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      zi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    zi(e, t), typeof r != "function" && (ut === null ? ut = /* @__PURE__ */ new Set([this]) : ut.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Fs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Pf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Vf.bind(null, e, t, n), t.then(e, e));
}
function Is(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function bs(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = He(-1, 1), t.tag = 2, at(n, t, 1))), n.lanes |= 1), e);
}
var Tf = Ge.ReactCurrentOwner, fe = !1;
function se(e, t, n, r) {
  t.child = e === null ? wu(t, null, n, r) : rn(t, e.child, n, r);
}
function Os(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return Jt(t, l), r = No(e, t, n, r, i, l), n = So(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ke(e, t, l)) : ($ && n && co(t), t.flags |= 1, se(e, t, r, l), t.child);
}
function Ds(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Fo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Qu(e, t, i, r, l)) : (e = Fr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Wn, n(s, r) && e.ref === t.ref) return Ke(e, t, l);
  }
  return t.flags |= 1, e = dt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Qu(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Wn(i, r) && e.ref === t.ref) if (fe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
    else return t.lanes = e.lanes, Ke(e, t, l);
  }
  return Pi(e, t, n, r, l);
}
function Yu(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, b(Yt, ge), ge |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, b(Yt, ge), ge |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, b(Yt, ge), ge |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, b(Yt, ge), ge |= r;
  return se(e, t, l, n), t.child;
}
function Xu(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Pi(e, t, n, r, l) {
  var i = he(n) ? _t : oe.current;
  return i = tn(t, i), Jt(t, l), n = No(e, t, n, r, i, l), r = So(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ke(e, t, l)) : ($ && r && co(t), t.flags |= 1, se(e, t, n, l), t.child);
}
function As(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    Hr(t);
  } else i = !1;
  if (Jt(t, l), t.stateNode === null) Tr(e, t), Uu(t, n, r), Li(t, n, r, l), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var u = s.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Ce(f) : (f = he(n) ? _t : oe.current, f = tn(t, f));
    var g = n.getDerivedStateFromProps, m = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || u !== f) && Ms(t, s, r, f), qe = !1;
    var h = t.memoizedState;
    s.state = h, Gr(t, r, s, l), u = t.memoizedState, a !== r || h !== u || pe.current || qe ? (typeof g == "function" && (_i(t, n, g, r), u = t.memoizedState), (a = qe || Rs(t, n, a, r, h, u, f)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = f, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, ju(e, t), a = t.memoizedProps, f = t.type === t.elementType ? a : Pe(t.type, a), s.props = f, m = t.pendingProps, h = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ce(u) : (u = he(n) ? _t : oe.current, u = tn(t, u));
    var v = n.getDerivedStateFromProps;
    (g = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== m || h !== u) && Ms(t, s, r, u), qe = !1, h = t.memoizedState, s.state = h, Gr(t, r, s, l);
    var y = t.memoizedState;
    a !== m || h !== y || pe.current || qe ? (typeof v == "function" && (_i(t, n, v, r), y = t.memoizedState), (f = qe || Rs(t, n, f, r, h, y, u) || !1) ? (g || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = u, r = f) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ti(e, t, n, r, i, l);
}
function Ti(e, t, n, r, l, i) {
  Xu(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && Ss(t, n, !1), Ke(e, t, i);
  r = t.stateNode, Tf.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = rn(t, e.child, null, i), t.child = rn(t, null, a, i)) : se(e, t, a, i), t.memoizedState = r.state, l && Ss(t, n, !0), t.child;
}
function Ku(e) {
  var t = e.stateNode;
  t.pendingContext ? Ns(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ns(e, t.context, !1), yo(e, t.containerInfo);
}
function $s(e, t, n, r, l) {
  return nn(), po(l), t.flags |= 256, se(e, t, n, r), t.child;
}
var Ri = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gu(e, t, n) {
  var r = t.pendingProps, l = B.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), b(B, l & 1), e === null)
    return Ei(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = gl(s, r, 0, null), e = Ct(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Mi(n), t.memoizedState = Ri, e) : _o(t, s));
  if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return Rf(e, t, s, r, a, l, n);
  if (i) {
    i = r.fallback, s = t.mode, l = e.child, a = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = dt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? i = dt(a, i) : (i = Ct(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Mi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Ri, r;
  }
  return i = e.child, e = i.sibling, r = dt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function _o(e, t) {
  return t = gl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function yr(e, t, n, r) {
  return r !== null && po(r), rn(t, e.child, null, n), e = _o(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Rf(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ql(Error(w(422))), yr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = gl({ mode: "visible", children: r.children }, l, 0, null), i = Ct(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && rn(t, e.child, null, s), t.child.memoizedState = Mi(s), t.memoizedState = Ri, i);
  if (!(t.mode & 1)) return yr(e, t, s, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(w(419)), r = Ql(i, r, void 0), yr(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, fe || a) {
    if (r = J, r !== null) {
      switch (s & -s) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Xe(e, l), Fe(r, e, l, -1));
    }
    return Mo(), r = Ql(Error(w(421))), yr(e, t, s, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Hf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, xe = st(l.nextSibling), ve = t, $ = !0, Re = null, e !== null && (je[Ne++] = Ue, je[Ne++] = Ve, je[Ne++] = Lt, Ue = e.id, Ve = e.overflow, Lt = t), t = _o(t, r.children), t.flags |= 4096, t);
}
function Bs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ci(e.return, t, n);
}
function Yl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Zu(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (se(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Bs(e, n, t);
      else if (e.tag === 19) Bs(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (b(B, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Zr(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Yl(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Zr(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Yl(t, !0, n, null, i);
      break;
    case "together":
      Yl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Tr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ke(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Pt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Mf(e, t, n) {
  switch (t.tag) {
    case 3:
      Ku(t), nn();
      break;
    case 5:
      Nu(t);
      break;
    case 1:
      he(t.type) && Hr(t);
      break;
    case 4:
      yo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      b(Xr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (b(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gu(e, t, n) : (b(B, B.current & 1), e = Ke(e, t, n), e !== null ? e.sibling : null);
      b(B, B.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Zu(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), b(B, B.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Yu(e, t, n);
  }
  return Ke(e, t, n);
}
var Ju, Fi, qu, ec;
Ju = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Fi = function() {
};
qu = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, St($e.current);
    var i = null;
    switch (n) {
      case "input":
        l = ni(e, l), r = ni(e, r), i = [];
        break;
      case "select":
        l = U({}, l, { value: void 0 }), r = U({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = ii(e, l), r = ii(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ur);
    }
    si(n, r);
    var s;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var a = l[f];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (In.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (a = l != null ? l[f] : void 0, r.hasOwnProperty(f) && u !== a && (u != null || a != null)) if (f === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in u) u.hasOwnProperty(s) && a[s] !== u[s] && (n || (n = {}), n[s] = u[s]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = u;
      else f === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, a = a ? a.__html : void 0, u != null && a !== u && (i = i || []).push(f, u)) : f === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(f, "" + u) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (In.hasOwnProperty(f) ? (u != null && f === "onScroll" && O("scroll", e), i || a === u || (i = [])) : (i = i || []).push(f, u));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
ec = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!$) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Ff(e, t, n) {
  var r = t.pendingProps;
  switch (fo(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && Vr(), le(t), null;
    case 3:
      return r = t.stateNode, ln(), D(pe), D(oe), ko(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Re !== null && (Wi(Re), Re = null))), Fi(e, t), le(t), null;
    case 5:
      wo(t);
      var l = St(Yn.current);
      if (n = t.type, e !== null && t.stateNode != null) qu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return le(t), null;
        }
        if (e = St($e.current), xr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[De] = t, r[Hn] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Sn.length; l++) O(Sn[l], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O(
                "error",
                r
              ), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              Go(r, i), O("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, O("invalid", r);
              break;
            case "textarea":
              Jo(r, i), O("invalid", r);
          }
          si(n, i), l = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var a = i[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && gr(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && gr(
              r.textContent,
              a,
              e
            ), l = ["children", "" + a]) : In.hasOwnProperty(s) && a != null && s === "onScroll" && O("scroll", r);
          }
          switch (n) {
            case "input":
              ar(r), Zo(r, i, !0);
              break;
            case "textarea":
              ar(r), qo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ur);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = La(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[De] = t, e[Hn] = r, Ju(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = ai(n, r), n) {
              case "dialog":
                O("cancel", e), O("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Sn.length; l++) O(Sn[l], e);
                l = r;
                break;
              case "source":
                O("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                O(
                  "error",
                  e
                ), O("load", e), l = r;
                break;
              case "details":
                O("toggle", e), l = r;
                break;
              case "input":
                Go(e, r), l = ni(e, r), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = U({}, r, { value: void 0 }), O("invalid", e);
                break;
              case "textarea":
                Jo(e, r), l = ii(e, r), O("invalid", e);
                break;
              default:
                l = r;
            }
            si(n, l), a = l;
            for (i in a) if (a.hasOwnProperty(i)) {
              var u = a[i];
              i === "style" ? Ta(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && za(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && bn(e, u) : typeof u == "number" && bn(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (In.hasOwnProperty(i) ? u != null && i === "onScroll" && O("scroll", e) : u != null && Gi(e, i, u, s));
            }
            switch (n) {
              case "input":
                ar(e), Zo(e, r, !1);
                break;
              case "textarea":
                ar(e), qo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Xt(e, !!r.multiple, i, !1) : r.defaultValue != null && Xt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ur);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) ec(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (n = St(Yn.current), St($e.current), xr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[De] = t, (i = r.nodeValue !== n) && (e = ve, e !== null)) switch (e.tag) {
            case 3:
              gr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && gr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[De] = t, t.stateNode = r;
      }
      return le(t), null;
    case 13:
      if (D(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && xe !== null && t.mode & 1 && !(t.flags & 128)) vu(), nn(), t.flags |= 98560, i = !1;
        else if (i = xr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(w(317));
            i[De] = t;
          } else nn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          le(t), i = !1;
        } else Re !== null && (Wi(Re), Re = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? K === 0 && (K = 3) : Mo())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
    case 4:
      return ln(), Fi(e, t), e === null && Un(t.stateNode.containerInfo), le(t), null;
    case 10:
      return go(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Vr(), le(t), null;
    case 19:
      if (D(B), i = t.memoizedState, i === null) return le(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) yn(i, !1);
      else {
        if (K !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Zr(e), s !== null) {
            for (t.flags |= 128, yn(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return b(B, B.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Q() > sn && (t.flags |= 128, r = !0, yn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Zr(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yn(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !$) return le(t), null;
        } else 2 * Q() - i.renderingStartTime > sn && n !== 1073741824 && (t.flags |= 128, r = !0, yn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Q(), t.sibling = null, n = B.current, b(B, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
    case 22:
    case 23:
      return Ro(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function If(e, t) {
  switch (fo(t), t.tag) {
    case 1:
      return he(t.type) && Vr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return ln(), D(pe), D(oe), ko(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return wo(t), null;
    case 13:
      if (D(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        nn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return D(B), null;
    case 4:
      return ln(), null;
    case 10:
      return go(t.type._context), null;
    case 22:
    case 23:
      return Ro(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wr = !1, ie = !1, bf = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function Qt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    V(e, t, r);
  }
  else n.current = null;
}
function Ii(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var Ws = !1;
function Of(e, t) {
  if (vi = $r, e = iu(), uo(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, a = -1, u = -1, f = 0, g = 0, m = e, h = null;
        t: for (; ; ) {
          for (var v; m !== n || l !== 0 && m.nodeType !== 3 || (a = s + l), m !== i || r !== 0 && m.nodeType !== 3 || (u = s + r), m.nodeType === 3 && (s += m.nodeValue.length), (v = m.firstChild) !== null; )
            h = m, m = v;
          for (; ; ) {
            if (m === e) break t;
            if (h === n && ++f === l && (a = s), h === i && ++g === r && (u = s), (v = m.nextSibling) !== null) break;
            m = h, h = m.parentNode;
          }
          m = v;
        }
        n = a === -1 || u === -1 ? null : { start: a, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yi = { focusedElem: e, selectionRange: n }, $r = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
  else for (; N !== null; ) {
    t = N;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var k = y.memoizedProps, _ = y.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Pe(t.type, k), _);
            d.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var p = t.stateNode.containerInfo;
          p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(w(163));
      }
    } catch (x) {
      V(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, N = e;
      break;
    }
    N = t.return;
  }
  return y = Ws, Ws = !1, y;
}
function Rn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Ii(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function hl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function tc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, tc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[De], delete t[Hn], delete t[ji], delete t[yf], delete t[wf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function nc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Us(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || nc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ur));
  else if (r !== 4 && (e = e.child, e !== null)) for (Oi(e, t, n), e = e.sibling; e !== null; ) Oi(e, t, n), e = e.sibling;
}
function Di(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Di(e, t, n), e = e.sibling; e !== null; ) Di(e, t, n), e = e.sibling;
}
var ee = null, Te = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) rc(e, t, n), n = n.sibling;
}
function rc(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function") try {
    Ae.onCommitFiberUnmount(ol, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ie || Qt(n, t);
    case 6:
      var r = ee, l = Te;
      ee = null, Ze(e, t, n), ee = r, Te = l, ee !== null && (Te ? (e = ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null && (Te ? (e = ee, n = n.stateNode, e.nodeType === 8 ? $l(e.parentNode, n) : e.nodeType === 1 && $l(e, n), $n(e)) : $l(ee, n.stateNode));
      break;
    case 4:
      r = ee, l = Te, ee = n.stateNode.containerInfo, Te = !0, Ze(e, t, n), ee = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Ii(n, t, s), l = l.next;
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (!ie && (Qt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        V(n, t, a);
      }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ie = (r = ie) || n.memoizedState !== null, Ze(e, t, n), ie = r) : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Vs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bf()), t.forEach(function(r) {
      var l = Qf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            ee = a.stateNode, Te = !1;
            break e;
          case 3:
            ee = a.stateNode.containerInfo, Te = !0;
            break e;
          case 4:
            ee = a.stateNode.containerInfo, Te = !0;
            break e;
        }
        a = a.return;
      }
      if (ee === null) throw Error(w(160));
      rc(i, s, l), ee = null, Te = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (f) {
      V(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) lc(t, e), t = t.sibling;
}
function lc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ze(t, e), be(e), r & 4) {
        try {
          Rn(3, e, e.return), hl(3, e);
        } catch (k) {
          V(e, e.return, k);
        }
        try {
          Rn(5, e, e.return);
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 1:
      ze(t, e), be(e), r & 512 && n !== null && Qt(n, n.return);
      break;
    case 5:
      if (ze(t, e), be(e), r & 512 && n !== null && Qt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          bn(l, "");
        } catch (k) {
          V(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          a === "input" && i.type === "radio" && i.name != null && Ca(l, i), ai(a, s);
          var f = ai(a, i);
          for (s = 0; s < u.length; s += 2) {
            var g = u[s], m = u[s + 1];
            g === "style" ? Ta(l, m) : g === "dangerouslySetInnerHTML" ? za(l, m) : g === "children" ? bn(l, m) : Gi(l, g, m, f);
          }
          switch (a) {
            case "input":
              ri(l, i);
              break;
            case "textarea":
              _a(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? Xt(l, !!i.multiple, v, !1) : h !== !!i.multiple && (i.defaultValue != null ? Xt(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Xt(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Hn] = i;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 6:
      if (ze(t, e), be(e), r & 4) {
        if (e.stateNode === null) throw Error(w(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 3:
      if (ze(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        $n(t.containerInfo);
      } catch (k) {
        V(e, e.return, k);
      }
      break;
    case 4:
      ze(t, e), be(e);
      break;
    case 13:
      ze(t, e), be(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Po = Q())), r & 4 && Vs(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (ie = (f = ie) || g, ze(t, e), ie = f) : ze(t, e), be(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !g && e.mode & 1) for (N = e, g = e.child; g !== null; ) {
          for (m = N = g; N !== null; ) {
            switch (h = N, v = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Rn(4, h, h.return);
                break;
              case 1:
                Qt(h, h.return);
                var y = h.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (k) {
                    V(r, n, k);
                  }
                }
                break;
              case 5:
                Qt(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  Qs(m);
                  continue;
                }
            }
            v !== null ? (v.return = h, N = v) : Qs(m);
          }
          g = g.sibling;
        }
        e: for (g = null, m = e; ; ) {
          if (m.tag === 5) {
            if (g === null) {
              g = m;
              try {
                l = m.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = m.stateNode, u = m.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Pa("display", s));
              } catch (k) {
                V(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (g === null) try {
              m.stateNode.nodeValue = f ? "" : m.memoizedProps;
            } catch (k) {
              V(e, e.return, k);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            g === m && (g = null), m = m.return;
          }
          g === m && (g = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      ze(t, e), be(e), r & 4 && Vs(e);
      break;
    case 21:
      break;
    default:
      ze(
        t,
        e
      ), be(e);
  }
}
function be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (nc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (bn(l, ""), r.flags &= -33);
          var i = Us(e);
          Di(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = Us(e);
          Oi(e, a, s);
          break;
        default:
          throw Error(w(161));
      }
    } catch (u) {
      V(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Df(e, t, n) {
  N = e, ic(e);
}
function ic(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || wr;
      if (!s) {
        var a = l.alternate, u = a !== null && a.memoizedState !== null || ie;
        a = wr;
        var f = ie;
        if (wr = s, (ie = u) && !f) for (N = l; N !== null; ) s = N, u = s.child, s.tag === 22 && s.memoizedState !== null ? Ys(l) : u !== null ? (u.return = s, N = u) : Ys(l);
        for (; i !== null; ) N = i, ic(i), i = i.sibling;
        N = l, wr = a, ie = f;
      }
      Hs(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, N = i) : Hs(e);
  }
}
function Hs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ie || hl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ie) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Pe(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && zs(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              zs(t, s, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && n.focus();
                  break;
                case "img":
                  u.src && (n.src = u.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var f = t.alternate;
              if (f !== null) {
                var g = f.memoizedState;
                if (g !== null) {
                  var m = g.dehydrated;
                  m !== null && $n(m);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(w(163));
        }
        ie || t.flags & 512 && bi(t);
      } catch (h) {
        V(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Qs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function Ys(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hl(4, t);
          } catch (u) {
            V(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              V(t, l, u);
            }
          }
          var i = t.return;
          try {
            bi(t);
          } catch (u) {
            V(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            bi(t);
          } catch (u) {
            V(t, s, u);
          }
      }
    } catch (u) {
      V(t, t.return, u);
    }
    if (t === e) {
      N = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, N = a;
      break;
    }
    N = t.return;
  }
}
var Af = Math.ceil, el = Ge.ReactCurrentDispatcher, Lo = Ge.ReactCurrentOwner, Ee = Ge.ReactCurrentBatchConfig, F = 0, J = null, Y = null, te = 0, ge = 0, Yt = mt(0), K = 0, Zn = null, Pt = 0, ml = 0, zo = 0, Mn = null, de = null, Po = 0, sn = 1 / 0, Be = null, tl = !1, Ai = null, ut = null, kr = !1, rt = null, nl = 0, Fn = 0, $i = null, Rr = -1, Mr = 0;
function ae() {
  return F & 6 ? Q() : Rr !== -1 ? Rr : Rr = Q();
}
function ct(e) {
  return e.mode & 1 ? F & 2 && te !== 0 ? te & -te : jf.transition !== null ? (Mr === 0 && (Mr = Ua()), Mr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ga(e.type)), e) : 1;
}
function Fe(e, t, n, r) {
  if (50 < Fn) throw Fn = 0, $i = null, Error(w(185));
  qn(e, n, r), (!(F & 2) || e !== J) && (e === J && (!(F & 2) && (ml |= n), K === 4 && tt(e, te)), me(e, r), n === 1 && F === 0 && !(t.mode & 1) && (sn = Q() + 500, dl && gt()));
}
function me(e, t) {
  var n = e.callbackNode;
  kd(e, t);
  var r = Ar(e, e === J ? te : 0);
  if (r === 0) n !== null && ns(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ns(n), t === 1) e.tag === 0 ? kf(Xs.bind(null, e)) : mu(Xs.bind(null, e)), xf(function() {
      !(F & 6) && gt();
    }), n = null;
    else {
      switch (Va(r)) {
        case 1:
          n = to;
          break;
        case 4:
          n = Ba;
          break;
        case 16:
          n = Dr;
          break;
        case 536870912:
          n = Wa;
          break;
        default:
          n = Dr;
      }
      n = pc(n, oc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function oc(e, t) {
  if (Rr = -1, Mr = 0, F & 6) throw Error(w(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = Ar(e, e === J ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = rl(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var i = ac();
    (J !== e || te !== t) && (Be = null, sn = Q() + 500, Et(e, t));
    do
      try {
        Wf();
        break;
      } catch (a) {
        sc(e, a);
      }
    while (!0);
    mo(), el.current = i, F = l, Y !== null ? t = 0 : (J = null, te = 0, t = K);
  }
  if (t !== 0) {
    if (t === 2 && (l = pi(e), l !== 0 && (r = l, t = Bi(e, l))), t === 1) throw n = Zn, Et(e, 0), tt(e, r), me(e, Q()), n;
    if (t === 6) tt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !$f(l) && (t = rl(e, r), t === 2 && (i = pi(e), i !== 0 && (r = i, t = Bi(e, i))), t === 1)) throw n = Zn, Et(e, 0), tt(e, r), me(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          wt(e, de, Be);
          break;
        case 3:
          if (tt(e, r), (r & 130023424) === r && (t = Po + 500 - Q(), 10 < t)) {
            if (Ar(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ae(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ki(wt.bind(null, e, de, Be), t);
            break;
          }
          wt(e, de, Be);
          break;
        case 4:
          if (tt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - Me(r);
            i = 1 << s, s = t[s], s > l && (l = s), r &= ~i;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Af(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ki(wt.bind(null, e, de, Be), r);
            break;
          }
          wt(e, de, Be);
          break;
        case 5:
          wt(e, de, Be);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return me(e, Q()), e.callbackNode === n ? oc.bind(null, e) : null;
}
function Bi(e, t) {
  var n = Mn;
  return e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256), e = rl(e, t), e !== 2 && (t = de, de = n, t !== null && Wi(t)), e;
}
function Wi(e) {
  de === null ? de = e : de.push.apply(de, e);
}
function $f(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Ie(i(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function tt(e, t) {
  for (t &= ~zo, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Me(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Xs(e) {
  if (F & 6) throw Error(w(327));
  qt();
  var t = Ar(e, 0);
  if (!(t & 1)) return me(e, Q()), null;
  var n = rl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = pi(e);
    r !== 0 && (t = r, n = Bi(e, r));
  }
  if (n === 1) throw n = Zn, Et(e, 0), tt(e, t), me(e, Q()), n;
  if (n === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, wt(e, de, Be), me(e, Q()), null;
}
function To(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (sn = Q() + 500, dl && gt());
  }
}
function Tt(e) {
  rt !== null && rt.tag === 0 && !(F & 6) && qt();
  var t = F;
  F |= 1;
  var n = Ee.transition, r = I;
  try {
    if (Ee.transition = null, I = 1, e) return e();
  } finally {
    I = r, Ee.transition = n, F = t, !(F & 6) && gt();
  }
}
function Ro() {
  ge = Yt.current, D(Yt);
}
function Et(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, gf(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (fo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Vr();
        break;
      case 3:
        ln(), D(pe), D(oe), ko();
        break;
      case 5:
        wo(r);
        break;
      case 4:
        ln();
        break;
      case 13:
        D(B);
        break;
      case 19:
        D(B);
        break;
      case 10:
        go(r.type._context);
        break;
      case 22:
      case 23:
        Ro();
    }
    n = n.return;
  }
  if (J = e, Y = e = dt(e.current, null), te = ge = t, K = 0, Zn = null, zo = ml = Pt = 0, de = Mn = null, Nt !== null) {
    for (t = 0; t < Nt.length; t++) if (n = Nt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = l, r.next = s;
      }
      n.pending = r;
    }
    Nt = null;
  }
  return e;
}
function sc(e, t) {
  do {
    var n = Y;
    try {
      if (mo(), zr.current = qr, Jr) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Jr = !1;
      }
      if (zt = 0, Z = X = W = null, Tn = !1, Xn = 0, Lo.current = null, n === null || n.return === null) {
        K = 1, Zn = t, Y = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, u = t;
        if (t = te, a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var f = u, g = a, m = g.tag;
          if (!(g.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = g.alternate;
            h ? (g.updateQueue = h.updateQueue, g.memoizedState = h.memoizedState, g.lanes = h.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var v = Is(s);
          if (v !== null) {
            v.flags &= -257, bs(v, s, a, i, t), v.mode & 1 && Fs(i, f, t), t = v, u = f;
            var y = t.updateQueue;
            if (y === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(u), t.updateQueue = k;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Fs(i, f, t), Mo();
              break e;
            }
            u = Error(w(426));
          }
        } else if ($ && a.mode & 1) {
          var _ = Is(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), bs(_, s, a, i, t), po(on(u, a));
            break e;
          }
        }
        i = u = on(u, a), K !== 4 && (K = 2), Mn === null ? Mn = [i] : Mn.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Vu(i, u, t);
              Ls(i, d);
              break e;
            case 1:
              a = u;
              var c = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ut === null || !ut.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = Hu(i, a, t);
                Ls(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      cc(n);
    } catch (j) {
      t = j, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ac() {
  var e = el.current;
  return el.current = qr, e === null ? qr : e;
}
function Mo() {
  (K === 0 || K === 3 || K === 2) && (K = 4), J === null || !(Pt & 268435455) && !(ml & 268435455) || tt(J, te);
}
function rl(e, t) {
  var n = F;
  F |= 2;
  var r = ac();
  (J !== e || te !== t) && (Be = null, Et(e, t));
  do
    try {
      Bf();
      break;
    } catch (l) {
      sc(e, l);
    }
  while (!0);
  if (mo(), F = n, el.current = r, Y !== null) throw Error(w(261));
  return J = null, te = 0, K;
}
function Bf() {
  for (; Y !== null; ) uc(Y);
}
function Wf() {
  for (; Y !== null && !fd(); ) uc(Y);
}
function uc(e) {
  var t = fc(e.alternate, e, ge);
  e.memoizedProps = e.pendingProps, t === null ? cc(e) : Y = t, Lo.current = null;
}
function cc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = If(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        K = 6, Y = null;
        return;
      }
    } else if (n = Ff(n, t, ge), n !== null) {
      Y = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  K === 0 && (K = 5);
}
function wt(e, t, n) {
  var r = I, l = Ee.transition;
  try {
    Ee.transition = null, I = 1, Uf(e, t, n, r);
  } finally {
    Ee.transition = l, I = r;
  }
  return null;
}
function Uf(e, t, n, r) {
  do
    qt();
  while (rt !== null);
  if (F & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (jd(e, i), e === J && (Y = J = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0, pc(Dr, function() {
    return qt(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ee.transition, Ee.transition = null;
    var s = I;
    I = 1;
    var a = F;
    F |= 4, Lo.current = null, Of(e, n), lc(n, e), uf(yi), $r = !!vi, yi = vi = null, e.current = n, Df(n), pd(), F = a, I = s, Ee.transition = i;
  } else e.current = n;
  if (kr && (kr = !1, rt = e, nl = l), i = e.pendingLanes, i === 0 && (ut = null), gd(n.stateNode), me(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (tl) throw tl = !1, e = Ai, Ai = null, e;
  return nl & 1 && e.tag !== 0 && qt(), i = e.pendingLanes, i & 1 ? e === $i ? Fn++ : (Fn = 0, $i = e) : Fn = 0, gt(), null;
}
function qt() {
  if (rt !== null) {
    var e = Va(nl), t = Ee.transition, n = I;
    try {
      if (Ee.transition = null, I = 16 > e ? 16 : e, rt === null) var r = !1;
      else {
        if (e = rt, rt = null, nl = 0, F & 6) throw Error(w(331));
        var l = F;
        for (F |= 4, N = e.current; N !== null; ) {
          var i = N, s = i.child;
          if (N.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var f = a[u];
                for (N = f; N !== null; ) {
                  var g = N;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, g, i);
                  }
                  var m = g.child;
                  if (m !== null) m.return = g, N = m;
                  else for (; N !== null; ) {
                    g = N;
                    var h = g.sibling, v = g.return;
                    if (tc(g), g === f) {
                      N = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = v, N = h;
                      break;
                    }
                    N = v;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var k = y.child;
                if (k !== null) {
                  y.child = null;
                  do {
                    var _ = k.sibling;
                    k.sibling = null, k = _;
                  } while (k !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, N = s;
          else e: for (; N !== null; ) {
            if (i = N, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Rn(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, N = d;
              break e;
            }
            N = i.return;
          }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          s = N;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) p.return = s, N = p;
          else e: for (s = c; N !== null; ) {
            if (a = N, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  hl(9, a);
              }
            } catch (j) {
              V(a, a.return, j);
            }
            if (a === s) {
              N = null;
              break e;
            }
            var x = a.sibling;
            if (x !== null) {
              x.return = a.return, N = x;
              break e;
            }
            N = a.return;
          }
        }
        if (F = l, gt(), Ae && typeof Ae.onPostCommitFiberRoot == "function") try {
          Ae.onPostCommitFiberRoot(ol, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      I = n, Ee.transition = t;
    }
  }
  return !1;
}
function Ks(e, t, n) {
  t = on(n, t), t = Vu(e, t, 1), e = at(e, t, 1), t = ae(), e !== null && (qn(e, 1, t), me(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) Ks(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ks(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ut === null || !ut.has(r))) {
        e = on(n, e), e = Hu(t, e, 1), t = at(t, e, 1), e = ae(), t !== null && (qn(t, 1, e), me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Vf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ae(), e.pingedLanes |= e.suspendedLanes & n, J === e && (te & n) === n && (K === 4 || K === 3 && (te & 130023424) === te && 500 > Q() - Po ? Et(e, 0) : zo |= n), me(e, t);
}
function dc(e, t) {
  t === 0 && (e.mode & 1 ? (t = dr, dr <<= 1, !(dr & 130023424) && (dr = 4194304)) : t = 1);
  var n = ae();
  e = Xe(e, t), e !== null && (qn(e, t, n), me(e, n));
}
function Hf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), dc(e, n);
}
function Qf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), dc(e, n);
}
var fc;
fc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, Mf(e, t, n);
    fe = !!(e.flags & 131072);
  }
  else fe = !1, $ && t.flags & 1048576 && gu(t, Yr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Tr(e, t), e = t.pendingProps;
      var l = tn(t, oe.current);
      Jt(t, n), l = No(null, t, r, e, l, n);
      var i = So();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, he(r) ? (i = !0, Hr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, vo(t), l.updater = pl, t.stateNode = l, l._reactInternals = t, Li(t, r, e, n), t = Ti(null, t, r, !0, i, n)) : (t.tag = 0, $ && i && co(t), se(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Tr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Xf(r), e = Pe(r, e), l) {
          case 0:
            t = Pi(null, t, r, e, n);
            break e;
          case 1:
            t = As(null, t, r, e, n);
            break e;
          case 11:
            t = Os(null, t, r, e, n);
            break e;
          case 14:
            t = Ds(null, t, r, Pe(r.type, e), n);
            break e;
        }
        throw Error(w(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), Pi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), As(e, t, r, l, n);
    case 3:
      e: {
        if (Ku(t), e === null) throw Error(w(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, ju(e, t), Gr(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = on(Error(w(423)), t), t = $s(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = on(Error(w(424)), t), t = $s(e, t, r, n, l);
          break e;
        } else for (xe = st(t.stateNode.containerInfo.firstChild), ve = t, $ = !0, Re = null, n = wu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (nn(), r === l) {
            t = Ke(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Nu(t), e === null && Ei(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, wi(r, l) ? s = null : i !== null && wi(r, i) && (t.flags |= 32), Xu(e, t), se(e, t, s, n), t.child;
    case 6:
      return e === null && Ei(t), null;
    case 13:
      return Gu(e, t, n);
    case 4:
      return yo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = rn(t, null, r, n) : se(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), Os(e, t, r, l, n);
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, b(Xr, r._currentValue), r._currentValue = s, i !== null) if (Ie(i.value, s)) {
          if (i.children === l.children && !pe.current) {
            t = Ke(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var a = i.dependencies;
          if (a !== null) {
            s = i.child;
            for (var u = a.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = He(-1, n & -n), u.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var g = f.pending;
                    g === null ? u.next = u : (u.next = g.next, g.next = u), f.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ci(
                  i.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(w(341));
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Ci(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        se(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, Jt(t, n), l = Ce(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Pe(r, t.pendingProps), l = Pe(r.type, l), Ds(e, t, r, l, n);
    case 15:
      return Qu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Pe(r, l), Tr(e, t), t.tag = 1, he(r) ? (e = !0, Hr(t)) : e = !1, Jt(t, n), Uu(t, r, l), Li(t, r, l, n), Ti(null, t, r, !0, e, n);
    case 19:
      return Zu(e, t, n);
    case 22:
      return Yu(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function pc(e, t) {
  return $a(e, t);
}
function Yf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Se(e, t, n, r) {
  return new Yf(e, t, n, r);
}
function Fo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Xf(e) {
  if (typeof e == "function") return Fo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ji) return 11;
    if (e === qi) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Se(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Fr(e, t, n, r, l, i) {
  var s = 2;
  if (r = e, typeof e == "function") Fo(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Ot:
      return Ct(n.children, l, i, t);
    case Zi:
      s = 8, l |= 8;
      break;
    case Jl:
      return e = Se(12, n, t, l | 2), e.elementType = Jl, e.lanes = i, e;
    case ql:
      return e = Se(13, n, t, l), e.elementType = ql, e.lanes = i, e;
    case ei:
      return e = Se(19, n, t, l), e.elementType = ei, e.lanes = i, e;
    case Na:
      return gl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ka:
          s = 10;
          break e;
        case ja:
          s = 9;
          break e;
        case Ji:
          s = 11;
          break e;
        case qi:
          s = 14;
          break e;
        case Je:
          s = 16, r = null;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = Se(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ct(e, t, n, r) {
  return e = Se(7, e, r, t), e.lanes = n, e;
}
function gl(e, t, n, r) {
  return e = Se(22, e, r, t), e.elementType = Na, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Xl(e, t, n) {
  return e = Se(6, e, null, t), e.lanes = n, e;
}
function Kl(e, t, n) {
  return t = Se(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Kf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zl(0), this.expirationTimes = zl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Io(e, t, n, r, l, i, s, a, u) {
  return e = new Kf(e, t, n, a, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Se(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, vo(i), e;
}
function Gf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: bt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function hc(e) {
  if (!e) return pt;
  e = e._reactInternals;
  e: {
    if (Mt(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return hu(e, n, t);
  }
  return t;
}
function mc(e, t, n, r, l, i, s, a, u) {
  return e = Io(n, r, !0, e, l, i, s, a, u), e.context = hc(null), n = e.current, r = ae(), l = ct(n), i = He(r, l), i.callback = t ?? null, at(n, i, l), e.current.lanes = l, qn(e, l, r), me(e, r), e;
}
function xl(e, t, n, r) {
  var l = t.current, i = ae(), s = ct(l);
  return n = hc(n), t.context === null ? t.context = n : t.pendingContext = n, t = He(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = at(l, t, s), e !== null && (Fe(e, l, s, i), Lr(e, l, s)), s;
}
function ll(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bo(e, t) {
  Gs(e, t), (e = e.alternate) && Gs(e, t);
}
function Zf() {
  return null;
}
var gc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Oo(e) {
  this._internalRoot = e;
}
vl.prototype.render = Oo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  xl(e, t, null, null);
};
vl.prototype.unmount = Oo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function() {
      xl(null, e, null, null);
    }), t[Ye] = null;
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ya();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++) ;
    et.splice(n, 0, e), n === 0 && Ka(e);
  }
};
function Do(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function yl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Zs() {
}
function Jf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = ll(s);
        i.call(f);
      };
    }
    var s = mc(t, r, e, 0, null, !1, !1, "", Zs);
    return e._reactRootContainer = s, e[Ye] = s.current, Un(e.nodeType === 8 ? e.parentNode : e), Tt(), s;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var f = ll(u);
      a.call(f);
    };
  }
  var u = Io(e, 0, !1, null, null, !1, !1, "", Zs);
  return e._reactRootContainer = u, e[Ye] = u.current, Un(e.nodeType === 8 ? e.parentNode : e), Tt(function() {
    xl(t, u, n, r);
  }), u;
}
function wl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == "function") {
      var a = l;
      l = function() {
        var u = ll(s);
        a.call(u);
      };
    }
    xl(t, s, e, l);
  } else s = Jf(n, t, e, l, r);
  return ll(s);
}
Ha = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 && (no(t, n | 1), me(t, Q()), !(F & 6) && (sn = Q() + 500, gt()));
      }
      break;
    case 13:
      Tt(function() {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ae();
          Fe(r, e, 1, l);
        }
      }), bo(e, 1);
  }
};
ro = function(e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ae();
      Fe(t, e, 134217728, n);
    }
    bo(e, 134217728);
  }
};
Qa = function(e) {
  if (e.tag === 13) {
    var t = ct(e), n = Xe(e, t);
    if (n !== null) {
      var r = ae();
      Fe(n, e, t, r);
    }
    bo(e, t);
  }
};
Ya = function() {
  return I;
};
Xa = function(e, t) {
  var n = I;
  try {
    return I = e, t();
  } finally {
    I = n;
  }
};
ci = function(e, t, n) {
  switch (t) {
    case "input":
      if (ri(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = cl(r);
            if (!l) throw Error(w(90));
            Ea(r), ri(r, l);
          }
        }
      }
      break;
    case "textarea":
      _a(e, n);
      break;
    case "select":
      t = n.value, t != null && Xt(e, !!n.multiple, t, !1);
  }
};
Fa = To;
Ia = Tt;
var qf = { usingClientEntryPoint: !1, Events: [tr, Bt, cl, Ra, Ma, To] }, wn = { findFiberByHostInstance: jt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ep = { bundleType: wn.bundleType, version: wn.version, rendererPackageName: wn.rendererPackageName, rendererConfig: wn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Da(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: wn.findFiberByHostInstance || Zf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber) try {
    ol = jr.inject(ep), Ae = jr;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qf;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Do(t)) throw Error(w(200));
  return Gf(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Do(e)) throw Error(w(299));
  var n = !1, r = "", l = gc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Io(e, 1, !1, null, null, n, !1, r, l), e[Ye] = t.current, Un(e.nodeType === 8 ? e.parentNode : e), new Oo(t);
};
we.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = Da(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return Tt(e);
};
we.hydrate = function(e, t, n) {
  if (!yl(t)) throw Error(w(200));
  return wl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Do(e)) throw Error(w(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", s = gc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = mc(t, null, e, 1, n ?? null, l, !1, i, s), e[Ye] = t.current, Un(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new vl(t);
};
we.render = function(e, t, n) {
  if (!yl(t)) throw Error(w(200));
  return wl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!yl(e)) throw Error(w(40));
  return e._reactRootContainer ? (Tt(function() {
    wl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ye] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = To;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!yl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return wl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function xc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xc);
    } catch (e) {
      console.error(e);
    }
}
xc(), xa.exports = we;
var tp = xa.exports, vc, Js = tp;
vc = Js.createRoot, Js.hydrateRoot;
const np = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;
function rp(e) {
  const [t, n] = z.useState(e), r = z.useCallback((l, i) => {
    const s = typeof l == "object" && l !== null ? l : { [l]: i };
    n((a) => ({ ...a, ...s })), window.parent.postMessage({ type: "__edit_mode_set_keys", edits: s }, "*"), window.dispatchEvent(new CustomEvent("tweakchange", { detail: s }));
  }, []);
  return [t, r];
}
function lp({ title: e = "Tweaks", noDeckControls: t = !1, children: n }) {
  const [r, l] = z.useState(!1), i = z.useRef(null), s = z.useMemo(
    () => typeof document < "u" && !!document.querySelector("deck-stage"),
    []
  ), [a, u] = z.useState(
    () => {
      var d;
      return s && !!((d = document.querySelector("deck-stage")) != null && d._railEnabled);
    }
  );
  z.useEffect(() => {
    if (!s || a) return;
    const d = (c) => {
      c.data && c.data.type === "__omelette_rail_enabled" && u(!0);
    };
    return window.addEventListener("message", d), () => window.removeEventListener("message", d);
  }, [s, a]);
  const [f, g] = z.useState(() => {
    try {
      return localStorage.getItem("deck-stage.railVisible") !== "0";
    } catch {
      return !0;
    }
  }), m = (d) => {
    g(d), window.postMessage({ type: "__deck_rail_visible", on: d }, "*");
  }, h = z.useRef({ x: 16, y: 16 }), v = 16, y = z.useCallback(() => {
    const d = i.current;
    if (!d) return;
    const c = d.offsetWidth, p = d.offsetHeight, x = Math.max(v, window.innerWidth - c - v), j = Math.max(v, window.innerHeight - p - v);
    h.current = {
      x: Math.min(x, Math.max(v, h.current.x)),
      y: Math.min(j, Math.max(v, h.current.y))
    }, d.style.right = h.current.x + "px", d.style.bottom = h.current.y + "px";
  }, []);
  z.useEffect(() => {
    if (!r) return;
    if (y(), typeof ResizeObserver > "u")
      return window.addEventListener("resize", y), () => window.removeEventListener("resize", y);
    const d = new ResizeObserver(y);
    return d.observe(document.documentElement), () => d.disconnect();
  }, [r, y]), z.useEffect(() => {
    const d = (c) => {
      var x;
      const p = (x = c == null ? void 0 : c.data) == null ? void 0 : x.type;
      p === "__activate_edit_mode" ? l(!0) : p === "__deactivate_edit_mode" && l(!1);
    };
    return window.addEventListener("message", d), window.parent.postMessage({ type: "__edit_mode_available" }, "*"), () => window.removeEventListener("message", d);
  }, []);
  const k = () => {
    l(!1), window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
  }, _ = (d) => {
    const c = i.current;
    if (!c) return;
    const p = c.getBoundingClientRect(), x = d.clientX, j = d.clientY, E = window.innerWidth - p.right, C = window.innerHeight - p.bottom, L = (T) => {
      h.current = {
        x: E - (T.clientX - x),
        y: C - (T.clientY - j)
      }, y();
    }, A = () => {
      window.removeEventListener("mousemove", L), window.removeEventListener("mouseup", A);
    };
    window.addEventListener("mousemove", L), window.addEventListener("mouseup", A);
  };
  return r ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("style", { children: np }),
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: i,
        className: "twk-panel",
        "data-noncommentable": "",
        style: { right: h.current.x, bottom: h.current.y },
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "twk-hd", onMouseDown: _, children: [
            /* @__PURE__ */ o.jsx("b", { children: e }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "twk-x",
                "aria-label": "Close tweaks",
                onMouseDown: (d) => d.stopPropagation(),
                onClick: k,
                children: "✕"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "twk-body", children: [
            n,
            s && a && !t && /* @__PURE__ */ o.jsx(kt, { label: "Deck", children: /* @__PURE__ */ o.jsx(En, { label: "Thumbnail rail", value: f, onChange: m }) })
          ] })
        ]
      }
    )
  ] }) : null;
}
function kt({ label: e, children: t }) {
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: "twk-sect", children: e }),
    t
  ] });
}
function rr({ label: e, value: t, children: n, inline: r = !1 }) {
  return /* @__PURE__ */ o.jsxs("div", { className: r ? "twk-row twk-row-h" : "twk-row", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "twk-lbl", children: [
      /* @__PURE__ */ o.jsx("span", { children: e }),
      t != null && /* @__PURE__ */ o.jsx("span", { className: "twk-val", children: t })
    ] }),
    n
  ] });
}
function It({ label: e, value: t, min: n = 0, max: r = 100, step: l = 1, unit: i = "", onChange: s }) {
  return /* @__PURE__ */ o.jsx(rr, { label: e, value: `${t}${i}`, children: /* @__PURE__ */ o.jsx(
    "input",
    {
      type: "range",
      className: "twk-slider",
      min: n,
      max: r,
      step: l,
      value: t,
      onChange: (a) => s(Number(a.target.value))
    }
  ) });
}
function En({ label: e, value: t, onChange: n }) {
  return /* @__PURE__ */ o.jsxs("div", { className: "twk-row twk-row-h", children: [
    /* @__PURE__ */ o.jsx("div", { className: "twk-lbl", children: /* @__PURE__ */ o.jsx("span", { children: e }) }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "twk-toggle",
        "data-on": t ? "1" : "0",
        role: "switch",
        "aria-checked": !!t,
        onClick: () => n(!t),
        children: /* @__PURE__ */ o.jsx("i", {})
      }
    )
  ] });
}
function Gl({ label: e, value: t, options: n, onChange: r }) {
  const l = z.useRef(null), [i, s] = z.useState(!1), a = z.useRef(t);
  a.current = t;
  const u = (_) => String(typeof _ == "object" ? _.label : _).length;
  if (!(n.reduce((_, d) => Math.max(_, u(d)), 0) <= ({ 2: 16, 3: 10 }[n.length] ?? 0))) {
    const _ = (d) => {
      const c = n.find((p) => String(typeof p == "object" ? p.value : p) === d);
      return c === void 0 ? d : typeof c == "object" ? c.value : c;
    };
    return /* @__PURE__ */ o.jsx(
      yc,
      {
        label: e,
        value: t,
        options: n,
        onChange: (d) => r(_(d))
      }
    );
  }
  const m = n.map((_) => typeof _ == "object" ? _ : { value: _, label: _ }), h = Math.max(0, m.findIndex((_) => _.value === t)), v = m.length, y = (_) => {
    const d = l.current.getBoundingClientRect(), c = d.width - 4, p = Math.floor((_ - d.left - 2) / c * v);
    return m[Math.max(0, Math.min(v - 1, p))].value;
  }, k = (_) => {
    s(!0);
    const d = y(_.clientX);
    d !== a.current && r(d);
    const c = (x) => {
      if (!l.current) return;
      const j = y(x.clientX);
      j !== a.current && r(j);
    }, p = () => {
      s(!1), window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p);
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", p);
  };
  return /* @__PURE__ */ o.jsx(rr, { label: e, children: /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: l,
      role: "radiogroup",
      onPointerDown: k,
      className: i ? "twk-seg dragging" : "twk-seg",
      children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "twk-seg-thumb",
            style: {
              left: `calc(2px + ${h} * (100% - 4px) / ${v})`,
              width: `calc((100% - 4px) / ${v})`
            }
          }
        ),
        m.map((_) => /* @__PURE__ */ o.jsx("button", { type: "button", role: "radio", "aria-checked": _.value === t, children: _.label }, _.value))
      ]
    }
  ) });
}
function yc({ label: e, value: t, options: n, onChange: r }) {
  return /* @__PURE__ */ o.jsx(rr, { label: e, children: /* @__PURE__ */ o.jsx("select", { className: "twk-field", value: t, onChange: (l) => r(l.target.value), children: n.map((l) => {
    const i = typeof l == "object" ? l.value : l, s = typeof l == "object" ? l.label : l;
    return /* @__PURE__ */ o.jsx("option", { value: i, children: s }, i);
  }) }) });
}
function qs({ label: e, value: t, placeholder: n, onChange: r }) {
  return /* @__PURE__ */ o.jsx(rr, { label: e, children: /* @__PURE__ */ o.jsx(
    "input",
    {
      className: "twk-field",
      type: "text",
      value: t,
      placeholder: n,
      onChange: (l) => r(l.target.value)
    }
  ) });
}
function ip(e) {
  const t = String(e).replace("#", ""), n = t.length === 3 ? t.replace(/./g, (a) => a + a) : t.padEnd(6, "0"), r = parseInt(n.slice(0, 6), 16);
  if (Number.isNaN(r)) return !0;
  const l = r >> 16 & 255, i = r >> 8 & 255, s = r & 255;
  return l * 299 + i * 587 + s * 114 > 148e3;
}
const op = ({ light: e }) => /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 14 14", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx(
  "path",
  {
    d: "M3 7.2 5.8 10 11 4.2",
    fill: "none",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: e ? "rgba(0,0,0,.78)" : "#fff"
  }
) });
function ea({ label: e, value: t, options: n, onChange: r }) {
  if (!n || !n.length)
    return /* @__PURE__ */ o.jsxs("div", { className: "twk-row twk-row-h", children: [
      /* @__PURE__ */ o.jsx("div", { className: "twk-lbl", children: /* @__PURE__ */ o.jsx("span", { children: e }) }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "color",
          className: "twk-swatch",
          value: t,
          onChange: (s) => r(s.target.value)
        }
      )
    ] });
  const l = (s) => String(JSON.stringify(s)).toLowerCase(), i = l(t);
  return /* @__PURE__ */ o.jsx(rr, { label: e, children: /* @__PURE__ */ o.jsx("div", { className: "twk-chips", role: "radiogroup", children: n.map((s, a) => {
    const u = Array.isArray(s) ? s : [s], [f, ...g] = u, m = g.slice(0, 4), h = l(s) === i;
    return /* @__PURE__ */ o.jsxs(
      "button",
      {
        type: "button",
        className: "twk-chip",
        role: "radio",
        "aria-checked": h,
        "data-on": h ? "1" : "0",
        "aria-label": u.join(", "),
        title: u.join(" · "),
        style: { background: f },
        onClick: () => r(s),
        children: [
          m.length > 0 && /* @__PURE__ */ o.jsx("span", { children: m.map((v, y) => /* @__PURE__ */ o.jsx("i", { style: { background: v } }, y)) }),
          h && /* @__PURE__ */ o.jsx(op, { light: ip(f) })
        ]
      },
      a
    );
  }) }) });
}
const sp = (
  /*EDITMODE-BEGIN*/
  {
    accent: "#5B2BE0",
    bg: "#FFFFFF",
    displayFont: "Frank Ruhl Libre",
    displayWeight: 800,
    displayScale: 1,
    letterSpacing: -0.5,
    radiusCard: 28,
    radiusSection: 48,
    containerWidth: 1280,
    density: 1,
    headline: "אתר שמביא לקוחות לא רק נראה טוב.",
    subhead: "בונים לכם אתר מקצועי תוך שבוע. מהיר, נקי, ומותאם לנייד. בלי עיכובים ובלי הפתעות.",
    hlMode: "accent",
    showStats: !0,
    showHeroBadge: !0,
    showPrices: !0,
    stickyStack: !0,
    workBg: "ink"
  }
), ap = [
  "#5B2BE0",
  // electric violet (brand)
  "#0F172A",
  // ink
  "#10B981",
  // green
  "#E24B4A",
  // red
  "#F59E0B",
  // amber
  "#0EA5E9"
  // sky
], up = ["#FFFFFF", "#F6F6F8", "#F0F0F5", "#0c0c0e"], cp = [
  "Frank Ruhl Libre",
  "Inter",
  "Heebo",
  "Manrope",
  "Space Grotesk",
  "Plus Jakarta Sans",
  "DM Sans"
];
function wc({ variant: e = "light" }) {
  const t = e === "dark", n = t ? "#9D7BF2" : "#5B2BE0", r = t ? "#ffffff" : "#0F0F12";
  return /* @__PURE__ */ o.jsxs("span", { className: "logo", "aria-label": "motion", children: [
    /* @__PURE__ */ o.jsxs("span", { className: "logo-bars", "aria-hidden": "true", children: [
      /* @__PURE__ */ o.jsx("span", { className: "logo-bar", style: { background: n, height: "55%" } }),
      /* @__PURE__ */ o.jsx("span", { className: "logo-bar", style: { background: n, height: "82%" } }),
      /* @__PURE__ */ o.jsx("span", { className: "logo-bar", style: { background: n, height: "36%" } })
    ] }),
    /* @__PURE__ */ o.jsx("span", { className: "logo-word", style: { color: r }, children: "motion" })
  ] });
}
function Ao({ size: e = 14 }) {
  return /* @__PURE__ */ o.jsx("svg", { width: e, height: e, viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M9 3L3 9M3 9V4M3 9H8", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function kc() {
  return /* @__PURE__ */ o.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }) });
}
function jc() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "6" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "2" })
  ] });
}
function Nc() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ o.jsx("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ o.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
    /* @__PURE__ */ o.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
  ] });
}
function Sc() {
  return /* @__PURE__ */ o.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) });
}
function dp() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("rect", { x: "2", y: "2", width: "20", height: "8", rx: "2" }),
    /* @__PURE__ */ o.jsx("rect", { x: "2", y: "14", width: "20", height: "8", rx: "2" }),
    /* @__PURE__ */ o.jsx("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }),
    /* @__PURE__ */ o.jsx("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" })
  ] });
}
function $o() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ o.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function fp() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
  ] });
}
function Ec() {
  return /* @__PURE__ */ o.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }) });
}
function Bo() {
  return /* @__PURE__ */ o.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function pp() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("polyline", { points: "23 6 13.5 15.5 8.5 10.5 1 18" }),
    /* @__PURE__ */ o.jsx("polyline", { points: "17 6 23 6 23 12" })
  ] });
}
function ta() {
  return /* @__PURE__ */ o.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("polyline", { points: "20 6 9 17 4 12" }) });
}
function hp() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ o.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] });
}
function mp() {
  const [e, t] = z.useState(0);
  return z.useEffect(() => {
    const n = () => {
      const r = document.documentElement, l = r.scrollHeight - r.clientHeight;
      t(l > 0 ? r.scrollTop / l * 100 : 0);
    };
    return window.addEventListener("scroll", n, { passive: !0 }), () => window.removeEventListener("scroll", n);
  }, []), e;
}
function q(e = 0.15) {
  const t = z.useRef(null), [n, r] = z.useState(!1);
  return z.useEffect(() => {
    const l = t.current;
    if (!l) return;
    const i = new IntersectionObserver(
      ([a]) => {
        a.isIntersecting && (r(!0), i.disconnect(), clearTimeout(s));
      },
      { threshold: e }
    );
    i.observe(l);
    const s = setTimeout(() => r(!0), 3e3);
    return () => {
      i.disconnect(), clearTimeout(s);
    };
  }, []), [t, n];
}
function Cc(e, t, n = 1200) {
  const [r, l] = z.useState(0);
  return z.useEffect(() => {
    if (!t || e <= 0) return;
    const i = Date.now(), s = () => {
      const a = Date.now() - i, u = Math.min(a / n, 1), f = 1 - Math.pow(1 - u, 3);
      l(Math.round(f * e)), u < 1 && requestAnimationFrame(s);
    };
    requestAnimationFrame(s);
  }, [t, e, n]), r;
}
function Wo(e, t, n = 90) {
  z.useEffect(() => {
    const r = e.current;
    if (!r) return;
    const l = Array.from(r.querySelectorAll(t)), i = new IntersectionObserver(
      (a) => {
        a.forEach((u) => {
          if (u.isIntersecting) {
            const f = l.indexOf(u.target);
            setTimeout(() => u.target.classList.add("in-view"), f * n), i.unobserve(u.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    l.forEach((a) => i.observe(a));
    const s = setTimeout(() => {
      l.forEach((a, u) => {
        setTimeout(() => a.classList.add("in-view"), u * n);
      });
    }, 3e3);
    return () => {
      i.disconnect(), clearTimeout(s);
    };
  }, []);
}
function gp() {
  const e = mp();
  return /* @__PURE__ */ o.jsx("div", { className: "scroll-progress", style: { width: `${e}%` } });
}
function xp() {
  const [e, t] = z.useState(""), [n, r] = z.useState(!1);
  z.useEffect(() => {
    const i = ["services", "work", "about", "faq", "pricing", "contact"];
    function s() {
      const a = window.scrollY + 80;
      let u = "";
      for (const f of i) {
        const g = document.getElementById(f);
        g && g.offsetTop <= a && (u = f);
      }
      t(u);
    }
    return window.addEventListener("scroll", s, { passive: !0 }), s(), () => window.removeEventListener("scroll", s);
  }, []);
  function l() {
    r(!1);
  }
  return /* @__PURE__ */ o.jsx("header", { className: "nav", children: /* @__PURE__ */ o.jsxs("div", { className: "nav-inner", children: [
    /* @__PURE__ */ o.jsx("a", { href: "#contact", className: "btn btn-primary btn-sm", onClick: l, children: "דברו איתנו" }),
    /* @__PURE__ */ o.jsxs("nav", { className: `nav-links${n ? " open" : ""}`, children: [
      /* @__PURE__ */ o.jsx("a", { href: "#services", className: e === "services" ? "nav-active" : "", onClick: l, children: "שירותים" }),
      /* @__PURE__ */ o.jsx("a", { href: "#work", className: e === "work" ? "nav-active" : "", onClick: l, children: "עבודות" }),
      /* @__PURE__ */ o.jsx("a", { href: "#about", className: e === "about" ? "nav-active" : "", onClick: l, children: "אודות" }),
      /* @__PURE__ */ o.jsx("a", { href: "#faq", className: e === "faq" ? "nav-active" : "", onClick: l, children: "שאלות נפוצות" }),
      /* @__PURE__ */ o.jsx("a", { href: "#pricing", className: e === "pricing" ? "nav-active" : "", onClick: l, children: "מחירים" }),
      /* @__PURE__ */ o.jsx("a", { href: "#contact", className: e === "contact" ? "nav-active" : "", onClick: l, children: "צור קשר" })
    ] }),
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        className: `nav-hamburger${n ? " open" : ""}`,
        onClick: () => r((i) => !i),
        "aria-label": "תפריט ניווט",
        "aria-expanded": n,
        children: [
          /* @__PURE__ */ o.jsx("span", {}),
          /* @__PURE__ */ o.jsx("span", {}),
          /* @__PURE__ */ o.jsx("span", {})
        ]
      }
    ),
    /* @__PURE__ */ o.jsx(wc, {})
  ] }) });
}
const vp = [
  { n: "01", name: "אתר תדמית", desc: "עמוד הבית של העסק שלכם. בהיר, מקצועי, ומסביר במשפט אחד מה אתם עושים. 5 עמודים בליבה, מותאם לנייד מהיום הראשון.", tag: "₪2,500" },
  { n: "02", name: "דף נחיתה", desc: "דף ממוקד אחד שמייצר לידים לקמפיין בלי הסחות, רק מסר ופעולה. כולל 3 עמודים, חיבור לפיקסל ו CRM.", tag: "₪1,500" }
];
function yp({ tweaks: e }) {
  const t = z.useRef(null);
  Wo(t, ".num-row", 110);
  const [n, r] = q();
  return /* @__PURE__ */ o.jsx("section", { id: "services", className: "section section-services", "data-screen-label": "03 Services", children: /* @__PURE__ */ o.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ o.jsxs("div", { ref: n, className: `section-head section-head-row reveal${r ? " in-view" : ""}`, children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsxs("span", { className: "eyebrow", children: [
          /* @__PURE__ */ o.jsx("span", { className: "eyebrow-dot" }),
          "שירותים"
        ] }),
        /* @__PURE__ */ o.jsxs("h2", { className: "section-title section-title-xl", children: [
          "מה אנחנו",
          /* @__PURE__ */ o.jsx("br", {}),
          "בונים."
        ] })
      ] }),
      /* @__PURE__ */ o.jsx("p", { className: "section-sub", style: { maxWidth: 380 }, children: "שתי קופסאות. בלי בלבול, בוחרים מה שמתאים ומתחילים." })
    ] }),
    /* @__PURE__ */ o.jsx("ul", { ref: t, className: "num-list", children: vp.map(
      (l) => /* @__PURE__ */ o.jsxs("li", { className: "num-row", children: [
        /* @__PURE__ */ o.jsx("span", { className: "num-row-n", children: l.n }),
        /* @__PURE__ */ o.jsxs("div", { className: "num-row-body", children: [
          /* @__PURE__ */ o.jsx("h3", { className: "num-row-name", children: l.name }),
          /* @__PURE__ */ o.jsx("p", { className: "num-row-desc", children: l.desc })
        ] }),
        e.showPrices && /* @__PURE__ */ o.jsx("span", { className: "num-row-tag", children: l.tag }),
        /* @__PURE__ */ o.jsx("a", { href: "#contact", className: "num-row-link", "aria-label": `התחל עם ${l.name}`, children: /* @__PURE__ */ o.jsx(Ao, { size: 18 }) })
      ] }, l.n)
    ) })
  ] }) });
}
const wp = [
  { n: "01", name: "שיחה", desc: "30 דקות בזום או טלפון. מבינים מה צריך, מה לא, ולמי זה מדבר.", icon: Bo },
  { n: "02", name: "עיצוב", desc: "מקבלים מוקאפ ראשון תוך 48 שעות לא פאוורפוינט, אלא קישור חי.", icon: Nc },
  { n: "03", name: "בנייה", desc: "בונים את האתר בצד שלנו. אתם רואים את ההתקדמות, מעירים, מאשרים.", icon: Ec },
  { n: "04", name: "השקה", desc: "מעלים לדומיין, מסירים לידיים שלכם.", icon: $o }
];
function kp() {
  const e = z.useRef(null);
  Wo(e, ".process-card", 110);
  const [t, n] = q();
  return /* @__PURE__ */ o.jsx("section", { className: "section section-process", "data-screen-label": "04 Process", children: /* @__PURE__ */ o.jsx("div", { className: "container", children: /* @__PURE__ */ o.jsxs("div", { className: "process-grid", children: [
    /* @__PURE__ */ o.jsxs("div", { ref: t, className: `process-intro reveal${n ? " in-view" : ""}`, children: [
      /* @__PURE__ */ o.jsxs("span", { className: "eyebrow", children: [
        /* @__PURE__ */ o.jsx("span", { className: "eyebrow-dot" }),
        "תהליך"
      ] }),
      /* @__PURE__ */ o.jsxs("h2", { className: "section-title section-title-xl", children: [
        "איך זה",
        /* @__PURE__ */ o.jsx("br", {}),
        "עובד."
      ] }),
      /* @__PURE__ */ o.jsx("p", { className: "section-sub", style: { maxWidth: 380 }, children: "ארבעה שלבים. ממוצע שבוע מהבריף ועד שהאתר באוויר, בלי הפתעות באמצע הדרך." }),
      /* @__PURE__ */ o.jsxs("a", { href: "#contact", className: "hero-new-cta-btn process-intro-cta", children: [
        "בואו נתחיל",
        /* @__PURE__ */ o.jsx(Ao, {})
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("ol", { ref: e, className: "process-cards", children: wp.map((r) => {
      const l = r.icon;
      return /* @__PURE__ */ o.jsxs("li", { className: "process-card", children: [
        /* @__PURE__ */ o.jsx("span", { className: "process-card-n", "aria-hidden": "true", children: r.n }),
        /* @__PURE__ */ o.jsx("span", { className: "process-card-icon", children: /* @__PURE__ */ o.jsx(l, {}) }),
        /* @__PURE__ */ o.jsx("h3", { className: "process-card-name", children: r.name }),
        /* @__PURE__ */ o.jsx("p", { className: "process-card-desc", children: r.desc })
      ] }, r.n);
    }) })
  ] }) }) });
}
const jp = `
  .gsap-reveal { visibility: hidden; }

  .film-grain {
    position: absolute; inset: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
    background-size: 60px 60px;
    background-image:
      linear-gradient(to right, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px),
      linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  .text-3d-matte {
    color: var(--color-foreground);
    text-shadow:
      0 10px 30px color-mix(in srgb, var(--color-foreground) 20%, transparent),
      0 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  }

  .text-silver-matte {
    background: linear-gradient(180deg, var(--color-foreground) 0%, color-mix(in srgb, var(--color-foreground) 40%, transparent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(0);
    filter:
      drop-shadow(0px 10px 20px color-mix(in srgb, var(--color-foreground) 15%, transparent))
      drop-shadow(0px 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent));
  }

  .text-card-silver-matte {
    background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(0);
    filter:
      drop-shadow(0px 12px 24px rgba(0,0,0,0.8))
      drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  .premium-depth-card {
    background: linear-gradient(145deg, #1c1040 0%, #0F0F12 100%);
    box-shadow:
      0 40px 100px -20px rgba(0, 0, 0, 0.9),
      0 20px 40px -20px rgba(0, 0, 0, 0.8),
      inset 0 1px 2px rgba(255, 255, 255, 0.2),
      inset 0 -2px 4px rgba(0, 0, 0, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.04);
    position: relative;
  }

  .card-sheen {
    position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
    background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
    mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  .iphone-bezel {
    background-color: #111;
    box-shadow:
      inset 0 0 0 2px #52525B,
      inset 0 0 0 7px #000,
      0 40px 80px -15px rgba(0,0,0,0.9),
      0 15px 25px -5px rgba(0,0,0,0.7);
    transform-style: preserve-3d;
  }

  .hardware-btn {
    background: linear-gradient(90deg, #404040 0%, #171717 100%);
    box-shadow:
      -2px 0 5px rgba(0,0,0,0.8),
      inset -1px 0 1px rgba(255,255,255,0.15),
      inset 1px 0 2px rgba(0,0,0,0.8);
    border-left: 1px solid rgba(255,255,255,0.05);
  }

  .screen-glare {
    background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
    background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
    box-shadow:
      0 10px 20px rgba(0,0,0,0.3),
      inset 0 1px 1px rgba(255,255,255,0.05),
      inset 0 -1px 1px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.1),
      0 25px 50px -12px rgba(0,0,0,0.8),
      inset 0 1px 1px rgba(255,255,255,0.2),
      inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  .btn-modern-light, .btn-modern-dark { transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1); }

  .btn-modern-light {
    background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%); color: #0F172A;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px #fff, inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px #fff, inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
    transform: translateY(1px);
    background: linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1), inset 0 3px 6px rgba(0,0,0,0.1);
  }

  .btn-modern-dark {
    background: linear-gradient(180deg, #27272A 0%, #18181B 100%); color: #FFFFFF;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.6), 0 12px 24px -4px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:hover {
    transform: translateY(-3px);
    background: linear-gradient(180deg, #3F3F46 0%, #27272A 100%);
    box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 6px 12px -2px rgba(0,0,0,0.7), 0 20px 32px -6px rgba(0,0,0,1), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:active {
    transform: translateY(1px); background: #18181B;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.05), inset 0 3px 8px rgba(0,0,0,0.9);
  }

  .progress-ring {
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: 402;
    stroke-dashoffset: 402;
    stroke-linecap: round;
  }
`;
function Np() {
  const e = z.useRef(null), t = z.useRef(null), n = z.useRef(null), r = z.useRef(null);
  return z.useEffect(() => {
    const l = (i) => {
      cancelAnimationFrame(r.current), r.current = requestAnimationFrame(() => {
        if (!t.current || !n.current) return;
        const s = t.current.getBoundingClientRect();
        t.current.style.setProperty("--mouse-x", `${i.clientX - s.left}px`), t.current.style.setProperty("--mouse-y", `${i.clientY - s.top}px`);
        const a = (i.clientX / window.innerWidth - 0.5) * 2, u = (i.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(n.current, { rotationY: a * 12, rotationX: -u * 12, ease: "power3.out", duration: 1.2 });
      });
    };
    return window.addEventListener("mousemove", l), () => {
      window.removeEventListener("mousemove", l), cancelAnimationFrame(r.current);
    };
  }, []), z.useEffect(() => {
    const l = window.innerWidth < 768, i = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 }), gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" }), gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 }), gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 }), gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" }), gsap.timeline({ delay: 0.3 }).to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" }).to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0"), gsap.timeline({
        scrollTrigger: {
          trigger: e.current,
          start: "top top",
          end: "+=7000",
          pin: !0,
          scrub: 1,
          anticipatePin: 1
        }
      }).to([".hero-text-wrapper", ".bg-grid-theme"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0).to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0).to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 }).fromTo(
        ".mockup-scroll-wrapper",
        { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
        { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 },
        "-=0.8"
      ).fromTo(
        ".phone-widget",
        { y: 40, autoAlpha: 0, scale: 0.95 },
        { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 },
        "-=1.5"
      ).to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2").to(".counter-val", { innerHTML: 100, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0").fromTo(
        ".floating-badge",
        { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 },
        { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 },
        "-=2.0"
      ).fromTo(
        ".card-left-text",
        { x: -50, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 },
        "-=1.5"
      ).fromTo(
        ".card-right-text",
        { x: 50, autoAlpha: 0, scale: 0.8 },
        { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 },
        "<"
      ).to({}, { duration: 2.5 }).set(".hero-text-wrapper", { autoAlpha: 0 }).set(".cta-wrapper", { autoAlpha: 1 }).to({}, { duration: 1.5 }).to(
        [".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"],
        { scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05 }
      ).to(".main-card", {
        width: l ? "92vw" : "85vw",
        height: l ? "92vh" : "85vh",
        borderRadius: l ? "32px" : "40px",
        ease: "expo.inOut",
        duration: 1.8
      }, "pullback").to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback").to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });
    }, e);
    return () => i.revert();
  }, []), /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: e,
      dir: "ltr",
      "data-screen-label": "05 Sobers Demo",
      className: "relative w-full h-screen overflow-hidden flex items-center justify-center font-sans antialiased",
      style: { background: "var(--bg)", color: "var(--ink)", perspective: "1500px" },
      children: [
        /* @__PURE__ */ o.jsx("style", { dangerouslySetInnerHTML: { __html: jp } }),
        /* @__PURE__ */ o.jsx("div", { className: "film-grain", "aria-hidden": "true" }),
        /* @__PURE__ */ o.jsx("div", { className: "bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50", "aria-hidden": "true" }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-full px-4 will-change-transform",
            style: { transformStyle: "preserve-3d" },
            children: [
              /* @__PURE__ */ o.jsx("h1", { className: "text-track gsap-reveal text-3d-matte text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2", children: "עיצוב ופיתוח" }),
              /* @__PURE__ */ o.jsx("h1", { className: "text-days gsap-reveal text-silver-matte text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter", children: "שמביא לקוחות." })
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: "cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-full px-4 gsap-reveal pointer-events-auto will-change-transform", children: [
          /* @__PURE__ */ o.jsx("h2", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-silver-matte", children: "מוכנים להתחיל?" }),
          /* @__PURE__ */ o.jsx("p", { className: "text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed", style: { color: "#6B7280" }, children: "שיחת היכרות בחינם, ללא התחייבות. מהיום ועד השקה — שבוע בממוצע." }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col sm:flex-row gap-6", children: [
            /* @__PURE__ */ o.jsxs("a", { href: "https://wa.me/972535406691", className: "btn-modern-light flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem]", children: [
              /* @__PURE__ */ o.jsx("svg", { className: "w-7 h-7 flex-shrink-0", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
              /* @__PURE__ */ o.jsx("span", { className: "text-xl font-bold leading-none tracking-tight", children: "WhatsApp" })
            ] }),
            /* @__PURE__ */ o.jsxs("a", { href: "#work", className: "btn-modern-dark flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem]", children: [
              /* @__PURE__ */ o.jsx("svg", { className: "w-5 h-5 flex-shrink-0", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 12H3m0 0l4-4m-4 4l4 4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
              /* @__PURE__ */ o.jsx("span", { className: "text-xl font-bold leading-none tracking-tight", children: "ראו עבודות" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "absolute inset-0 z-20 flex items-center justify-center pointer-events-none", style: { perspective: "1500px" }, children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            ref: t,
            className: "main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]",
            children: [
              /* @__PURE__ */ o.jsx("div", { className: "card-sheen", "aria-hidden": "true" }),
              /* @__PURE__ */ o.jsxs("div", { className: "relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0", children: [
                /* @__PURE__ */ o.jsx("div", { className: "card-right-text gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full", children: /* @__PURE__ */ o.jsx("h2", { className: "text-6xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter text-card-silver-matte", children: "MOTION" }) }),
                /* @__PURE__ */ o.jsx("div", { className: "mockup-scroll-wrapper order-2 lg:order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10", style: { perspective: "1000px" }, children: /* @__PURE__ */ o.jsxs("div", { className: "relative w-full h-full flex items-center justify-center scale-[0.65] md:scale-[0.85] lg:scale-100", children: [
                  /* @__PURE__ */ o.jsxs("div", { ref: n, className: "relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform", style: { transformStyle: "preserve-3d" }, children: [
                    /* @__PURE__ */ o.jsx("div", { className: "absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md", "aria-hidden": "true" }),
                    /* @__PURE__ */ o.jsx("div", { className: "absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md", "aria-hidden": "true" }),
                    /* @__PURE__ */ o.jsx("div", { className: "absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md", "aria-hidden": "true" }),
                    /* @__PURE__ */ o.jsx("div", { className: "absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md", style: { transform: "scaleX(-1)" }, "aria-hidden": "true" }),
                    /* @__PURE__ */ o.jsxs("div", { className: "absolute inset-[7px] rounded-[2.5rem] overflow-hidden z-10 text-white", style: { background: "#050914", boxShadow: "inset 0 0 15px #000" }, children: [
                      /* @__PURE__ */ o.jsx("div", { className: "absolute inset-0 screen-glare z-40 pointer-events-none", "aria-hidden": "true" }),
                      /* @__PURE__ */ o.jsx("div", { className: "absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3", children: /* @__PURE__ */ o.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse", style: { boxShadow: "0 0 8px rgba(34,197,94,0.8)" } }) }),
                      /* @__PURE__ */ o.jsxs("div", { className: "relative w-full h-full pt-12 px-5 pb-8 flex flex-col", children: [
                        /* @__PURE__ */ o.jsxs("div", { className: "phone-widget flex justify-between items-center mb-8", children: [
                          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col", children: [
                            /* @__PURE__ */ o.jsx("span", { className: "text-[10px] uppercase tracking-widest font-bold mb-1", style: { color: "#a3a3a3" }, children: "Motion" }),
                            /* @__PURE__ */ o.jsx("span", { className: "text-xl font-bold tracking-tight text-white", children: "Lighthouse" })
                          ] }),
                          /* @__PURE__ */ o.jsx("div", { className: "w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm", style: { background: "rgba(124,58,237,0.15)", color: "#c4b5fd", border: "1px solid rgba(124,58,237,0.3)" }, children: "M" })
                        ] }),
                        /* @__PURE__ */ o.jsxs("div", { className: "phone-widget relative w-44 h-44 mx-auto flex items-center justify-center mb-8", style: { filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.8))" }, children: [
                          /* @__PURE__ */ o.jsxs("svg", { className: "absolute inset-0 w-full h-full", "aria-hidden": "true", children: [
                            /* @__PURE__ */ o.jsx("circle", { cx: "88", cy: "88", r: "64", fill: "none", stroke: "rgba(255,255,255,0.03)", strokeWidth: "12" }),
                            /* @__PURE__ */ o.jsx("circle", { className: "progress-ring", cx: "88", cy: "88", r: "64", fill: "none", stroke: "#7C3AED", strokeWidth: "12" })
                          ] }),
                          /* @__PURE__ */ o.jsxs("div", { className: "text-center z-10 flex flex-col items-center", children: [
                            /* @__PURE__ */ o.jsx("span", { className: "counter-val text-4xl font-extrabold tracking-tighter text-white", children: "0" }),
                            /* @__PURE__ */ o.jsx("span", { className: "text-[8px] uppercase font-bold mt-0.5", style: { color: "rgba(196,181,253,0.5)", letterSpacing: "0.1em" }, children: "Performance" })
                          ] })
                        ] }),
                        /* @__PURE__ */ o.jsxs("div", { className: "space-y-3", children: [
                          /* @__PURE__ */ o.jsxs("div", { className: "phone-widget widget-depth rounded-2xl p-3 flex items-center", children: [
                            /* @__PURE__ */ o.jsx("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center mr-3 flex-shrink-0", style: { background: "linear-gradient(135deg,rgba(124,58,237,0.2),rgba(91,43,224,0.05))", border: "1px solid rgba(167,139,250,0.2)" }, children: /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "rgb(167,139,250)", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) }) }),
                            /* @__PURE__ */ o.jsxs("div", { className: "flex-1", children: [
                              /* @__PURE__ */ o.jsx("div", { className: "h-2 w-20 rounded-full mb-1.5", style: { background: "rgba(255,255,255,0.15)" } }),
                              /* @__PURE__ */ o.jsx("div", { className: "h-1.5 w-10 rounded-full", style: { background: "rgba(255,255,255,0.07)" } })
                            ] }),
                            /* @__PURE__ */ o.jsx("span", { className: "text-[9px] font-bold", style: { color: "#a78bfa" }, children: "0.8s" })
                          ] }),
                          /* @__PURE__ */ o.jsxs("div", { className: "phone-widget widget-depth rounded-2xl p-3 flex items-center", children: [
                            /* @__PURE__ */ o.jsx("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center mr-3 flex-shrink-0", style: { background: "linear-gradient(135deg,rgba(16,185,129,0.2),rgba(5,150,105,0.05))", border: "1px solid rgba(52,211,153,0.2)" }, children: /* @__PURE__ */ o.jsxs("svg", { className: "w-4 h-4", fill: "none", stroke: "rgb(52,211,153)", viewBox: "0 0 24 24", "aria-hidden": "true", children: [
                              /* @__PURE__ */ o.jsx("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
                              /* @__PURE__ */ o.jsx("line", { x1: "12", y1: "18", x2: "12.01", y2: "18", strokeLinecap: "round", strokeWidth: "2" })
                            ] }) }),
                            /* @__PURE__ */ o.jsxs("div", { className: "flex-1", children: [
                              /* @__PURE__ */ o.jsx("div", { className: "h-2 w-16 rounded-full mb-1.5", style: { background: "rgba(255,255,255,0.15)" } }),
                              /* @__PURE__ */ o.jsx("div", { className: "h-1.5 w-24 rounded-full", style: { background: "rgba(255,255,255,0.07)" } })
                            ] }),
                            /* @__PURE__ */ o.jsx("span", { className: "text-[9px] font-bold", style: { color: "#34d399" }, children: "100%" })
                          ] })
                        ] }),
                        /* @__PURE__ */ o.jsx("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] rounded-full", style: { background: "rgba(255,255,255,0.2)" } })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ o.jsxs("div", { className: "floating-badge absolute flex top-6 floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 z-30", style: { left: "-15px" }, children: [
                    /* @__PURE__ */ o.jsx("div", { className: "w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0", style: { background: "linear-gradient(180deg,rgba(124,58,237,0.25),rgba(91,43,224,0.1))", border: "1px solid rgba(167,139,250,0.35)" }, children: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "🚀" }) }),
                    /* @__PURE__ */ o.jsxs("div", { children: [
                      /* @__PURE__ */ o.jsx("p", { className: "text-white text-xs lg:text-sm font-bold tracking-tight", children: "אתר הושק!" }),
                      /* @__PURE__ */ o.jsx("p", { className: "text-[10px] lg:text-xs font-medium", style: { color: "rgba(196,181,253,0.6)" }, children: "תוך 5 ימים בלבד" })
                    ] })
                  ] }),
                  /* @__PURE__ */ o.jsxs("div", { className: "floating-badge absolute flex bottom-12 lg:bottom-20 floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 z-30", style: { right: "-15px" }, children: [
                    /* @__PURE__ */ o.jsx("div", { className: "w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0", style: { background: "linear-gradient(180deg,rgba(16,185,129,0.2),rgba(5,150,105,0.1))", border: "1px solid rgba(52,211,153,0.3)" }, children: /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: "📈" }) }),
                    /* @__PURE__ */ o.jsxs("div", { children: [
                      /* @__PURE__ */ o.jsx("p", { className: "text-white text-xs lg:text-sm font-bold tracking-tight", children: "+200% המרות" }),
                      /* @__PURE__ */ o.jsx("p", { className: "text-[10px] lg:text-xs font-medium", style: { color: "rgba(52,211,153,0.6)" }, children: "תוצאות מדידות" })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ o.jsxs("div", { className: "card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full px-4 lg:px-0", children: [
                  /* @__PURE__ */ o.jsx("h3", { className: "text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight", children: "בניית אתרים, מוגדרת מחדש." }),
                  /* @__PURE__ */ o.jsxs("p", { className: "hidden md:block text-sm md:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-sm lg:max-w-none", style: { color: "rgba(219,209,254,0.7)" }, children: [
                    /* @__PURE__ */ o.jsx("span", { className: "text-white font-semibold", children: "Motion" }),
                    " בונה אתרי תדמית ודפי נחיתה לעסקים. עיצוב מרהיב, קוד מהיר, והשקה בממוצע תוך שבוע — בלי עיכובים ובלי הפתעות."
                  ] })
                ] })
              ] })
            ]
          }
        ) })
      ]
    }
  );
}
const na = [
  { n: "01", client: "זיו חשמל+", kind: "אתר תדמית", line: "ציוד חשמלי לבית ולמקצוע. 3,000+ מוצרים במלאי, משלוח תוך 24 שעות וייעוץ טכני חינם.", metric: "3,000+ מוצרים במלאי", palette: ["#0f172a", "#1e3a5f", "#3b82f6"], url: "https://smoke-spkh.vercel.app", domain: "ziv-electrical.co.il", thumb: "assets/work/ziv.webp" },
  { n: "02", client: "סלי לוגו", kind: "דף נחיתה", line: "סטודיו לעיצוב לוגואים ומיתוג. עיצוב מודרני ונועז לעסקים שרוצים להיזכר.", metric: "80+ מותגים", palette: ["#0d0d0d", "#1a0a0e", "#e8445a"], url: "clients/sali-logo.html", domain: "sali-logo.co.il", thumb: "assets/work/sali.webp" },
  { n: "03", client: "Jack 3D", kind: "פורטפוליו", line: "יוצר תלת-ממד ומעצב תנועה. אנימציות, גרפיקה בתנועה ואמנות דיגיטלית שדוחפת את גבולות היצירתיות.", metric: "60+ פרויקטים", palette: ["#0c0c0c", "#111a00", "#bfff00"], url: "/clients/jack/index.html", domain: "jack-3d.co.il", thumb: "assets/work/jack.webp" }
];
function Sp({ raw: e, inView: t }) {
  const n = e.match(/(\d+)/), r = n ? parseInt(n[1], 10) : 0, l = Cc(r, t, 1400);
  if (!n) return /* @__PURE__ */ o.jsx("span", { className: "work-card-metric", children: e });
  const i = e.replace(n[1], t ? String(l) : "0");
  return /* @__PURE__ */ o.jsx("span", { className: "work-card-metric", children: i });
}
function Ep({ project: e, index: t, total: n, sticky: r }) {
  const l = z.useRef(null), [i, s] = q(0.3), [a, u] = z.useState(1), [f, g] = z.useState({ x: 0, y: 0, glow: !1 }), m = 1 - (n - 1 - t) * 0.04;
  z.useEffect(() => {
    if (!r) {
      u(1);
      return;
    }
    function k() {
      const _ = l.current;
      if (!_) return;
      const d = _.getBoundingClientRect(), c = 120, p = _.offsetHeight, x = c - d.top, j = Math.max(0, Math.min(1, x / (p * 0.8)));
      u(1 - j * (1 - m));
    }
    return k(), window.addEventListener("scroll", k, { passive: !0 }), () => window.removeEventListener("scroll", k);
  }, [m, r]);
  function h(k) {
    const _ = l.current;
    if (!_) return;
    const d = _.getBoundingClientRect(), c = d.left + d.width / 2, p = d.top + d.height / 2, x = (k.clientX - c) / (d.width / 2), j = (k.clientY - p) / (d.height / 2);
    g({ x: j * 5, y: -x * 5, glow: !0 });
  }
  function v() {
    g({ x: 0, y: 0, glow: !1 });
  }
  const y = r ? { transform: `scale(${a}) perspective(1200px) rotateX(${f.x}deg) rotateY(${f.y}deg)`, transformOrigin: "top center", transition: f.glow ? "transform 0.1s ease" : "transform 0.5s ease" } : { transform: `perspective(1200px) rotateX(${f.x}deg) rotateY(${f.y}deg)`, transition: f.glow ? "transform 0.1s ease" : "transform 0.5s ease" };
  return /* @__PURE__ */ o.jsx("div", { className: `work-slot ${r ? "work-slot-sticky" : ""}`, children: /* @__PURE__ */ o.jsxs(
    "article",
    {
      ref: l,
      className: "work-card",
      onMouseMove: h,
      onMouseLeave: v,
      style: y,
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "work-card-head", children: [
          /* @__PURE__ */ o.jsx("span", { className: "work-card-n", children: e.n }),
          /* @__PURE__ */ o.jsxs("div", { className: "work-card-meta", children: [
            /* @__PURE__ */ o.jsx("span", { className: "work-card-kind", children: e.kind }),
            /* @__PURE__ */ o.jsx("h3", { className: "work-card-client", children: e.client })
          ] }),
          /* @__PURE__ */ o.jsxs(
            "a",
            {
              className: "btn btn-ghost-dark btn-sm",
              href: e.url !== "#" ? e.url : void 0,
              target: "_blank",
              rel: "noopener noreferrer",
              style: { position: "relative", zIndex: 10 },
              onClick: (k) => {
                k.stopPropagation(), e.url && e.url !== "#" && (k.preventDefault(), window.open(e.url, "_blank", "noopener,noreferrer"));
              },
              children: [
                /* @__PURE__ */ o.jsx("span", { children: "פרויקט חי" }),
                /* @__PURE__ */ o.jsx(Ao, {})
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "work-card-thumb", style: {
          background: `linear-gradient(135deg, ${e.palette[0]} 0%, ${e.palette[1]} 55%, ${e.palette[2]} 100%)`
        }, children: [
          /* @__PURE__ */ o.jsxs("div", { className: "work-card-browser", children: [
            /* @__PURE__ */ o.jsx("span", { className: "m-tile-dot" }),
            /* @__PURE__ */ o.jsx("span", { className: "m-tile-dot" }),
            /* @__PURE__ */ o.jsx("span", { className: "m-tile-dot" }),
            /* @__PURE__ */ o.jsx("span", { className: "work-card-url", children: e.domain })
          ] }),
          e.thumb ? /* @__PURE__ */ o.jsx("div", { className: "work-card-iframe-wrap", children: /* @__PURE__ */ o.jsx(
            "img",
            {
              src: e.thumb,
              alt: `תצוגת האתר של ${e.client}`,
              loading: "lazy",
              decoding: "async"
            }
          ) }) : e.url && e.url !== "#" ? /* @__PURE__ */ o.jsx("div", { className: "work-card-iframe-wrap", children: /* @__PURE__ */ o.jsx(
            "iframe",
            {
              src: e.url,
              title: e.client,
              scrolling: "no",
              sandbox: "allow-scripts allow-same-origin"
            }
          ) }) : /* @__PURE__ */ o.jsxs("div", { className: "work-card-mockup", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "mockup-hero", children: [
              /* @__PURE__ */ o.jsx("div", { className: "mockup-h", style: { background: e.palette[2] } }),
              /* @__PURE__ */ o.jsx("div", { className: "mockup-h", style: { background: "rgba(255,255,255,.5)", width: "80%" } }),
              /* @__PURE__ */ o.jsx("div", { className: "mockup-h", style: { background: "rgba(255,255,255,.3)", width: "60%" } })
            ] }),
            /* @__PURE__ */ o.jsx("div", { className: "mockup-cta", style: { background: e.palette[2] } })
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { ref: i, className: "work-card-foot", children: [
          /* @__PURE__ */ o.jsx("p", { className: "work-card-line", children: e.line }),
          /* @__PURE__ */ o.jsx(Sp, { raw: e.metric, inView: s })
        ] })
      ]
    }
  ) });
}
function Cp({ tweaks: e }) {
  const t = e.workBg === "ink", [n, r] = q();
  return /* @__PURE__ */ o.jsx("section", { id: "work", className: `section section-work ${t ? "section-work-dark" : "section-work-light"}`, "data-screen-label": "05 Work", children: /* @__PURE__ */ o.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ o.jsxs("div", { ref: n, className: `section-head section-head-row reveal${r ? " in-view" : ""}`, children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsxs("span", { className: `eyebrow ${t ? "eyebrow-light" : ""}`, children: [
          /* @__PURE__ */ o.jsx("span", { className: "eyebrow-dot" }),
          "עבודות"
        ] }),
        /* @__PURE__ */ o.jsx("h2", { className: `section-title section-title-xl ${t ? "section-title-light" : ""}`, children: "תיק עבודות" })
      ] }),
      /* @__PURE__ */ o.jsx("p", { className: `section-sub ${t ? "section-sub-light" : ""}`, style: { maxWidth: 380 }, children: "כל פרויקט, תוצאה אמיתית. לא תבנית, לא קיצורי דרך." })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: `work-stack ${e.stickyStack ? "work-stack-sticky" : "work-stack-flat"}`, children: na.map(
      (l, i) => /* @__PURE__ */ o.jsx(Ep, { project: l, index: i, total: na.length, sticky: e.stickyStack }, l.n)
    ) })
  ] }) });
}
const _p = [
  {
    q: "כמה זמן זה באמת לוקח?",
    a: "ממוצע 5 עד 7 ימי עבודה מהבריף ועד שהאתר באוויר. אם הפרויקט מורכב יותר, אומרים מראש ומסכימים על לוח זמנים. אין הפתעות באמצע."
  },
  {
    q: "מה קורה אם אני לא מרוצה מהתוצאה?",
    a: "כל חבילה כוללת 3 סבבי תיקונים. אם משהו לא מדויק, אומרים ומתקנים. לא נשאיר אתכם עם תוצאה שאתם לא אוהבים."
  },
  {
    q: "למה לא פשוט לבנות אתר לבדי?",
    a: "אפשר. אבל אנחנו בונים אתרי פרמיום עם אנימציות תנועה מתקדמות, חוויית משתמש מחושבת, ועיצוב שמרגיש יוקרתי ולא גנרי. זה לא רק אתר שנראה טוב בתמונה, זה אתר שאנשים זוכרים. רמה כזו לוקחת שנות ניסיון, וזמן שלרוב בעלי עסקים פשוט אין."
  },
  {
    q: "מה כולל התחזוקה החודשית?",
    a: "אחסון, דומיין, SSL, תיקוני באגים קטנים ותמיכה טכנית. האתר תמיד יעבוד, גם אם משהו ישתבש בצד השרת."
  }
];
function Lp({ item: e, index: t }) {
  const [n, r] = z.useState(!1), [l, i] = q(0.05);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: l,
      style: {
        opacity: i ? 1 : 0,
        transform: i ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.45s ease ${t * 70}ms, transform 0.45s ease ${t * 70}ms`,
        borderBottom: "1px solid rgba(0,0,0,0.08)"
      },
      children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            onClick: () => r((s) => !s),
            "aria-expanded": n,
            style: {
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              padding: "20px 0",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "right"
            },
            children: [
              /* @__PURE__ */ o.jsx("span", { style: { fontSize: 16.5, fontWeight: 600, color: "#0F0F12", lineHeight: 1.4, flex: 1 }, children: e.q }),
              /* @__PURE__ */ o.jsx("span", { style: {
                width: 28,
                height: 28,
                borderRadius: "50%",
                flexShrink: 0,
                background: n ? "var(--accent,#5B2BE0)" : "rgba(0,0,0,0.06)",
                color: n ? "#fff" : "#0F0F12",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                lineHeight: 1,
                transition: "background 0.2s, color 0.2s, transform 0.25s",
                transform: n ? "rotate(45deg)" : "rotate(0deg)"
              }, children: "+" })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx("div", { style: {
          maxHeight: n ? "320px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
        }, children: /* @__PURE__ */ o.jsx("p", { style: {
          fontSize: 15,
          lineHeight: 1.8,
          color: "#4B5563",
          paddingBottom: 20,
          margin: 0,
          paddingRight: 2
        }, children: e.a }) })
      ]
    }
  );
}
function zp() {
  const [e, t] = q();
  return /* @__PURE__ */ o.jsx("section", { id: "faq", className: "section", "data-screen-label": "07 FAQ", style: { background: "#F6F6F8" }, children: /* @__PURE__ */ o.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: e,
        className: `section-head reveal${t ? " in-view" : ""}`,
        style: { textAlign: "center", marginBottom: 56 },
        children: [
          /* @__PURE__ */ o.jsxs("span", { className: "eyebrow", style: { display: "inline-flex", margin: "0 auto 16px" }, children: [
            /* @__PURE__ */ o.jsx("span", { className: "eyebrow-dot" }),
            "שאלות נפוצות"
          ] }),
          /* @__PURE__ */ o.jsx("h2", { className: "section-title section-title-xl", style: { textAlign: "center" }, children: "יש שאלות?" }),
          /* @__PURE__ */ o.jsx("p", { className: "section-sub", style: { textAlign: "center", maxWidth: 440, margin: "12px auto 0" }, children: "כל מה שרצית לשאול לפני שמתחילים." })
        ]
      }
    ),
    /* @__PURE__ */ o.jsx("div", { style: { maxWidth: 700, margin: "0 auto" }, children: _p.map((n, r) => /* @__PURE__ */ o.jsx(Lp, { item: n, index: r }, r)) })
  ] }) });
}
const Pp = [
  {
    target: 75,
    title: "שופטים את אמינות העסק לפי האתר",
    body: "שלושה מכל ארבעה לקוחות מחליטים אם אפשר לסמוך עליכם, לפי האתר בלבד, עוד לפני שדיברתם."
  },
  {
    target: 80,
    title: "מחפשים בגוגל לפני שקונים",
    body: "עוד לפני שהרימו טלפון, הלקוחות כבר בדקו אתכם אונליין. השאלה היחידה היא מה הם מצאו."
  },
  {
    display: "24/7",
    title: "האתר עובד גם כשאתם ישנים",
    body: "168 שעות בשבוע של נוכחות ושיווק שמביא פניות בלילה, בשבת ובחג, בלי לשלם משכורת."
  }
], Tp = [
  { label: "אתר רגיל", value: "עד 3%", w: 12 },
  { label: "דף נחיתה ממוקד", value: "עד 26%", w: 100, strong: !0 }
];
function Rp({ stat: e }) {
  const [t, n] = q(), r = Cc(e.target || 0, n), l = e.target ? r + "%" : e.display;
  return /* @__PURE__ */ o.jsxs("div", { ref: t, className: `whyx-stat reveal${n ? " in-view" : ""}`, children: [
    /* @__PURE__ */ o.jsx("span", { className: "whyx-stat-num", children: l }),
    /* @__PURE__ */ o.jsx("h3", { className: "whyx-stat-title", children: e.title }),
    /* @__PURE__ */ o.jsx("p", { className: "whyx-stat-body", children: e.body })
  ] });
}
function Mp() {
  const [e, t] = q();
  return /* @__PURE__ */ o.jsxs("div", { ref: e, className: `whyx-conv reveal${t ? " in-view" : ""}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "whyx-conv-head", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "whyx-conv-title", children: "אותו תקציב פרסום, פי כמה לקוחות" }),
      /* @__PURE__ */ o.jsx("p", { className: "whyx-conv-sub", children: "אתר תדמית בונה אמון. דף נחיתה ממוקד גורם לפעולה. כשמסירים את כל הסחות הדעת ומשאירים מסר אחד ופעולה אחת, אחוזי ההמרה מזנקים:" })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "whyx-bars", children: Tp.map((n, r) => /* @__PURE__ */ o.jsxs("div", { className: "whyx-bar-row", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "whyx-bar-top", children: [
        /* @__PURE__ */ o.jsx("span", { className: "whyx-bar-label", children: n.label }),
        /* @__PURE__ */ o.jsx("span", { className: `whyx-bar-val${n.strong ? " is-strong" : ""}`, children: n.value })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "whyx-bar-track", children: /* @__PURE__ */ o.jsx(
        "div",
        {
          className: `whyx-bar-fill${n.strong ? " is-strong" : ""}${t ? " in-view" : ""}`,
          style: { "--w": n.w + "%", transitionDelay: r * 0.12 + "s" }
        }
      ) })
    ] }, r)) }),
    /* @__PURE__ */ o.jsx("p", { className: "whyx-conv-foot", children: "אותם גולשים, אותו תקציב פרסום, אבל פי כמה לקוחות משלמים. זה ההבדל בין לשרוף תקציב לבין להחזיר אותו פי כמה." })
  ] });
}
function Fp() {
  const [e, t] = q(), [n, r] = q();
  return /* @__PURE__ */ o.jsx("section", { id: "why-website", className: "section section-need", "data-screen-label": "Why a website", children: /* @__PURE__ */ o.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: e,
        className: `section-head reveal${t ? " in-view" : ""}`,
        style: { textAlign: "center", marginBottom: 16 },
        children: [
          /* @__PURE__ */ o.jsxs("span", { className: "eyebrow", style: { display: "inline-flex", margin: "0 auto 16px" }, children: [
            /* @__PURE__ */ o.jsx("span", { className: "eyebrow-dot" }),
            "למה אתר"
          ] }),
          /* @__PURE__ */ o.jsx("h2", { className: "section-title section-title-xl", style: { textAlign: "center" }, children: "האתר שלך מחליט אם בוחרים בך" }),
          /* @__PURE__ */ o.jsx("p", { className: "section-sub", style: { textAlign: "center", maxWidth: 600, margin: "16px auto 44px" }, children: "בזמן שאתם קוראים את זה, מישהו חיפש עסק כמו שלכם, ובחר במתחרה שכבר נמצא אונליין. ככה המחקרים מוכיחים את זה:" })
        ]
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "whyx-stats", children: Pp.map((l, i) => /* @__PURE__ */ o.jsx(Rp, { stat: l }, i)) }),
    /* @__PURE__ */ o.jsx(Mp, {}),
    /* @__PURE__ */ o.jsx("div", { ref: n, className: `need-cta reveal${r ? " in-view" : ""}`, children: /* @__PURE__ */ o.jsx("a", { href: "#contact", className: "need-cta-link", children: "רוצים אתר שמביא לקוחות? דברו איתי ←" }) })
  ] }) });
}
const Ip = [
  {
    icon: /* @__PURE__ */ o.jsx(Bo, {}),
    title: "תקשורת ישירה",
    body: "מדברים ישירות עם מי שבונה את האתר. לא מנהל חשבון, לא מתווך."
  },
  {
    icon: /* @__PURE__ */ o.jsx(kc, {}),
    title: "קוד מקצועי",
    body: "React ו-Tailwind, לא Wix. אתר שנטען מהר ועובד בכל מכשיר."
  },
  {
    icon: /* @__PURE__ */ o.jsx(jc, {}),
    title: "5 ימים בממוצע",
    body: "מתחילים, בונים, משיקים. בלי שבועות של המתנה."
  },
  {
    icon: /* @__PURE__ */ o.jsx($o, {}),
    title: "ישראלי ומקומי",
    body: "מכיר את השוק, זמין בוואטסאפ, מדבר בשפה שלכם."
  },
  {
    icon: /* @__PURE__ */ o.jsx(Sc, {}),
    title: "מחיר שקוף",
    body: "אין 'תתקשרו לקבל מחיר'. הכל כתוב, בלי הפתעות בדרך."
  },
  {
    icon: /* @__PURE__ */ o.jsx(pp, {}),
    title: "מותאם לנייד",
    body: "נבנה ראשית למובייל, לא מותאם בדיעבד. 100% מהיום הראשון."
  }
], bp = [
  "אנימציות תנועה ומעברים חלקים בגלילה",
  "עיצוב מותאם אישית, לא תבנית מוכנה",
  "טעינה מהירה (React + Tailwind, לא Wix)",
  "100% מותאם לנייד מהיום הראשון",
  "טופס לידים וכפתור וואטסאפ ישיר מהאתר"
], Op = [
  "תבנית מוכנה שנראית כמו כולם",
  "סטטי, בלי תנועה או חיים",
  "איטי לטעינה",
  "אתה לבד מול תמיכה אוטומטית",
  '"מספיק טוב", לא בלתי-נשכח'
], Dp = [
  "עיצוב ייחודי שנבנה רק לכם",
  "אנימציות תנועה חיות שמושכות את העין",
  "נטען מהיר (React + Tailwind)",
  "מדברים ישירות איתי, בלי מתווכים",
  "חוויה שלקוחות זוכרים וחוזרים אליה"
];
function Ap() {
  const [e, t] = q(), [n, r] = q(), [l, i] = q(), s = z.useRef(null);
  return Wo(s, ".why-card", 80), /* @__PURE__ */ o.jsx("section", { id: "about", className: "section section-why", "data-screen-label": "05 About", children: /* @__PURE__ */ o.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: e,
        className: `section-head reveal${t ? " in-view" : ""}`,
        style: { textAlign: "center", marginBottom: 16 },
        children: [
          /* @__PURE__ */ o.jsxs("span", { className: "eyebrow", style: { display: "inline-flex", margin: "0 auto 16px" }, children: [
            /* @__PURE__ */ o.jsx("span", { className: "eyebrow-dot" }),
            "מאחורי Motion"
          ] }),
          /* @__PURE__ */ o.jsx("h2", { className: "section-title section-title-xl", style: { textAlign: "center" }, children: "אז מי אני?" }),
          /* @__PURE__ */ o.jsx("p", { className: "section-sub", style: { textAlign: "center", maxWidth: 560, margin: "16px auto 40px" }, children: "אני אליה, מפתח אתרים עצמאי מישראל, ואני לא בונה אתרים רגילים. אני בונה אתרים עם אנימציות תנועה חיות, חוויית משתמש מחושבת ועיצוב שמרגיש יוקרתי, בלי המחיר היוקרתי. הרמה של סטודיו גדול, במחיר שעסק קטן יכול להרשות לעצמו. וכשאתם עובדים איתי, אתם מדברים ישירות איתי, בלי מתווכים." })
        ]
      }
    ),
    /* @__PURE__ */ o.jsx("div", { ref: s, className: "why-grid", children: Ip.map((a, u) => /* @__PURE__ */ o.jsxs("div", { className: "why-card reveal", children: [
      /* @__PURE__ */ o.jsx("span", { className: "why-card-icon", children: a.icon }),
      /* @__PURE__ */ o.jsx("h3", { className: "why-card-title", children: a.title }),
      /* @__PURE__ */ o.jsx("p", { className: "why-card-body", children: a.body })
    ] }, u)) }),
    /* @__PURE__ */ o.jsxs("div", { ref: n, className: `includes-block reveal${r ? " in-view" : ""}`, children: [
      /* @__PURE__ */ o.jsx("h3", { className: "includes-title", children: "מה כל אתר כולל" }),
      /* @__PURE__ */ o.jsx("ul", { className: "includes-list", children: bp.map((a, u) => /* @__PURE__ */ o.jsxs("li", { className: "includes-item", children: [
        /* @__PURE__ */ o.jsx("span", { className: "includes-check", children: /* @__PURE__ */ o.jsx(ta, {}) }),
        a
      ] }, u)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { ref: l, className: `compare-block reveal${i ? " in-view" : ""}`, children: [
      /* @__PURE__ */ o.jsx("h3", { className: "compare-title", children: "ההבדל בין אתר רגיל לאתר של Motion" }),
      /* @__PURE__ */ o.jsxs("div", { className: "compare-cols", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "compare-col compare-col-bad", children: [
          /* @__PURE__ */ o.jsx("span", { className: "compare-col-title", children: "אתר תבנית רגיל" }),
          /* @__PURE__ */ o.jsx("ul", { className: "compare-list", children: Op.map((a, u) => /* @__PURE__ */ o.jsxs("li", { className: "compare-item", children: [
            /* @__PURE__ */ o.jsx("span", { className: "compare-mark", children: /* @__PURE__ */ o.jsx(hp, {}) }),
            a
          ] }, u)) })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "compare-col compare-col-good", children: [
          /* @__PURE__ */ o.jsx("span", { className: "compare-col-title", children: "אתר של Motion" }),
          /* @__PURE__ */ o.jsx("ul", { className: "compare-list", children: Dp.map((a, u) => /* @__PURE__ */ o.jsxs("li", { className: "compare-item", children: [
            /* @__PURE__ */ o.jsx("span", { className: "compare-mark", children: /* @__PURE__ */ o.jsx(ta, {}) }),
            a
          ] }, u)) })
        ] })
      ] })
    ] })
  ] }) });
}
const $p = [
  {
    name: "דף נחיתה",
    badge: null,
    desc: "דף ממוקד אחד לקמפיין או עסק.",
    setupFrom: "1,500",
    setupNoMaint: "1,200",
    monthly: "300",
    features: [
      "עיצוב UI/UX מותאם",
      "חיבור פיקסל + CRM",
      "טופס לידים חכם",
      "עד 3 סבבי תיקונים",
      "מותאם לנייד"
    ],
    cta: "מתחילים",
    highlight: !1
  },
  {
    name: "אתר תדמית",
    badge: "הכי פופולרי",
    desc: "אתר 5 עמודים לעסק שרוצה להיראות מקצועי.",
    setupFrom: "2,500",
    setupNoMaint: "2,000",
    monthly: "300",
    features: [
      "עיצוב UI/UX מותאם",
      "5 עמודים",
      "וואטסאפ שיחה מהאתר",
      "עד 3 סבבי תיקונים",
      "מותאם לנייד"
    ],
    cta: "מתחילים",
    highlight: !0
  }
];
function Bp({ plan: e, withMaintenance: t }) {
  const [n, r] = q(0.1);
  return /* @__PURE__ */ o.jsxs("div", { ref: n, className: `pricing-dark-card${e.highlight ? " pricing-dark-card-pop" : ""}${r ? " in-view" : ""}`, children: [
    e.badge && /* @__PURE__ */ o.jsx("div", { className: "pricing-dark-badge", children: e.badge }),
    /* @__PURE__ */ o.jsx("div", { className: "pricing-dark-name", children: e.name }),
    /* @__PURE__ */ o.jsx("p", { className: "pricing-dark-desc", children: e.desc }),
    /* @__PURE__ */ o.jsxs("div", { className: "pricing-dark-price-block", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "pricing-dark-price-row", children: [
        /* @__PURE__ */ o.jsx("span", { className: "pricing-dark-currency", children: "₪" }),
        /* @__PURE__ */ o.jsx("span", { className: "pricing-dark-price", children: t ? e.setupFrom : e.setupNoMaint }),
        /* @__PURE__ */ o.jsx("span", { className: "pricing-dark-price-label", children: "הקמה מ" })
      ] }),
      t && /* @__PURE__ */ o.jsxs("div", { className: "pricing-dark-monthly-row", children: [
        /* @__PURE__ */ o.jsx("span", { className: "pricing-dark-plus", children: "+" }),
        /* @__PURE__ */ o.jsxs("span", { className: "pricing-dark-monthly-price", children: [
          "₪",
          e.monthly
        ] }),
        /* @__PURE__ */ o.jsx("span", { className: "pricing-dark-monthly-label", children: "/חודש תחזוקה" })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("ul", { className: "pricing-dark-features", children: e.features.map((l, i) => {
      const s = i === 0 && l.startsWith("הכל");
      return /* @__PURE__ */ o.jsxs("li", { className: `pricing-dark-feature${s ? " pricing-dark-feature-inherit" : ""}`, children: [
        !s && /* @__PURE__ */ o.jsx("span", { className: "pricing-dark-dot" }),
        l
      ] }, i);
    }) }),
    /* @__PURE__ */ o.jsx("a", { href: "#contact", className: `pricing-dark-cta${e.highlight ? " pricing-dark-cta-solid" : " pricing-dark-cta-ghost"}`, children: e.cta })
  ] });
}
const Wp = [
  { n: "01", name: "אפיון", h: 56 },
  { n: "02", name: "עיצוב", h: 84 },
  { n: "03", name: "פיתוח", h: 112 },
  { n: "04", name: "בדיקות", h: 140 },
  { n: "05", name: "עלייה לאוויר", h: 168 }
];
function Up() {
  const [e, t] = q(0.3);
  return /* @__PURE__ */ o.jsxs("div", { ref: e, className: `pricing-process-strip${t ? " in-view" : ""}`, children: [
    /* @__PURE__ */ o.jsx("div", { className: "pricing-process-label", children: "תהליך העבודה" }),
    /* @__PURE__ */ o.jsx("div", { className: "pricing-process-chart", role: "list", children: Wp.map((n, r) => /* @__PURE__ */ o.jsxs("div", { className: "pricing-process-pillar", role: "listitem", children: [
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "pricing-process-bar",
          style: { "--bar-h": `${n.h}px`, "--bar-delay": `${r * 0.12}s` },
          children: /* @__PURE__ */ o.jsx("span", { className: "pricing-process-bar-num", children: n.n })
        }
      ),
      /* @__PURE__ */ o.jsx("span", { className: "pricing-process-pillar-name", children: n.name })
    ] }, n.n)) })
  ] });
}
const ra = [
  { icon: /* @__PURE__ */ o.jsx(dp, {}), label: "אחסון מאובטח" },
  { icon: /* @__PURE__ */ o.jsx($o, {}), label: "דומיין שנה ראשונה" },
  { icon: /* @__PURE__ */ o.jsx(fp, {}), label: "SSL מוגן" },
  { icon: /* @__PURE__ */ o.jsx(Ec, {}), label: "תיקוני באגים קטנים" },
  { icon: /* @__PURE__ */ o.jsx(Bo, {}), label: "תמיכה טכנית" }
];
function Vp({ withMaintenance: e }) {
  return e ? /* @__PURE__ */ o.jsxs("div", { className: "pricing-monthly-box", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "pricing-monthly-header", children: [
      /* @__PURE__ */ o.jsx("span", { className: "pricing-monthly-price-big", children: "₪300" }),
      /* @__PURE__ */ o.jsx("span", { className: "pricing-monthly-price-per", children: "/חודש" }),
      /* @__PURE__ */ o.jsx("span", { className: "pricing-monthly-title", children: "מה כולל?" })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "pricing-monthly-grid", children: ra.map((t, n) => /* @__PURE__ */ o.jsxs("div", { className: "pricing-monthly-item", children: [
      /* @__PURE__ */ o.jsx("span", { className: "pricing-monthly-icon", children: t.icon }),
      /* @__PURE__ */ o.jsx("span", { className: "pricing-monthly-label", children: t.label })
    ] }, n)) })
  ] }) : /* @__PURE__ */ o.jsxs("div", { className: "pricing-no-maint-box", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "pricing-no-maint-header", children: [
      /* @__PURE__ */ o.jsx("span", { className: "pricing-no-maint-icon", "aria-hidden": "true", children: /* @__PURE__ */ o.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ o.jsx("path", { d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" }),
        /* @__PURE__ */ o.jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
        /* @__PURE__ */ o.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
      ] }) }),
      /* @__PURE__ */ o.jsx("span", { className: "pricing-no-maint-title", children: "ללא תחזוקה, לא כולל:" })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "pricing-no-maint-grid", children: ra.map((t, n) => /* @__PURE__ */ o.jsxs("div", { className: "pricing-no-maint-item", children: [
      /* @__PURE__ */ o.jsx("span", { className: "pricing-no-maint-item-icon", children: t.icon }),
      /* @__PURE__ */ o.jsx("span", { children: t.label })
    ] }, n)) }),
    /* @__PURE__ */ o.jsx("p", { className: "pricing-no-maint-note", children: "מומלץ למי שכבר יש לו אחסון ומכיר את התחום. תצטרכו לנהל את כל אלה בעצמכם." })
  ] });
}
function Hp() {
  const [e, t] = q(), [n, r] = z.useState(!0);
  return /* @__PURE__ */ o.jsx(
    "section",
    {
      id: "pricing",
      className: "section section-pricing",
      "data-screen-label": "06 Pricing",
      children: /* @__PURE__ */ o.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            ref: e,
            className: `section-head reveal${t ? " in-view" : ""}`,
            style: { textAlign: "center", marginBottom: 40 },
            children: [
              /* @__PURE__ */ o.jsxs("span", { className: "eyebrow", style: { display: "inline-flex", margin: "0 auto 16px" }, children: [
                /* @__PURE__ */ o.jsx("span", { className: "eyebrow-dot" }),
                "מחירים"
              ] }),
              /* @__PURE__ */ o.jsx("h2", { className: "section-title section-title-xl", style: { textAlign: "center" }, children: "ללא הפתעות." }),
              /* @__PURE__ */ o.jsx("p", { className: "section-sub", style: { textAlign: "center", maxWidth: 480, margin: "12px auto 0" }, children: "חבילה ברורה, היקף מוגדר, מחיר שקוף. אתם יודעים מה מקבלים לפני שחותמים." })
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: "pricing-toggle-wrap", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `pricing-toggle-btn${n ? " active" : ""}`,
              onClick: () => r(!0),
              children: "עם תחזוקה"
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `pricing-toggle-btn${n ? "" : " active"}`,
              onClick: () => r(!1),
              children: "ללא תחזוקה"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { style: {
          background: "rgba(91,43,224,0.07)",
          border: "1.5px solid rgba(91,43,224,0.18)",
          borderRadius: 14,
          padding: "14px 24px",
          textAlign: "center",
          marginBottom: 32,
          direction: "rtl",
          fontSize: 15,
          color: "#5B2BE0",
          fontWeight: 500
        }, children: [
          /* @__PURE__ */ o.jsxs("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", style: { display: "inline-block", verticalAlign: "-2px", marginInlineEnd: 6 }, children: [
            /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "9" }),
            /* @__PURE__ */ o.jsx("path", { d: "M12 7v5l3 2" })
          ] }),
          /* @__PURE__ */ o.jsx("strong", { children: "כרגע לא מקבלים תשלומים" }),
          ". האתר בשלבי הקמה רשמית.",
          " ",
          /* @__PURE__ */ o.jsx("a", { href: "#contact", style: { color: "#5B2BE0", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }, children: "שלחו פנייה" }),
          " ",
          "ונחזור אליכם ברגע שנפתח רשמית."
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "pricing-dark-cards", children: $p.map((l, i) => /* @__PURE__ */ o.jsx(Bp, { plan: l, withMaintenance: n }, i)) }),
        /* @__PURE__ */ o.jsx(Vp, { withMaintenance: n }),
        /* @__PURE__ */ o.jsx(Up, {}),
        /* @__PURE__ */ o.jsx("p", { className: "pricing-disclaimer", children: "* המחיר הסופי עשוי להשתנות בהתאם לדרישות הפרויקט, היקף העבודה וזמן הפיתוח." })
      ] })
    }
  );
}
function Qp() {
  return /* @__PURE__ */ o.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M13.6 2.3A8 8 0 0 0 0 8a7.9 7.9 0 0 0 1.1 4L0 16l4.1-1.1A8 8 0 0 0 16 8a7.9 7.9 0 0 0-2.4-5.7zM8 14.7a6.7 6.7 0 0 1-3.4-.9l-.3-.1-2.5.6.7-2.4-.2-.3A6.7 6.7 0 1 1 8 14.7zm3.7-5a4.1 4.1 0 0 1-2-.5 4.5 4.5 0 0 1-1.8-1.6 4.1 4.1 0 0 1-.8-2c0-.6.3-1 .6-1.2.1-.1.3-.2.4-.2H8.5c.2 0 .3 0 .4.3l.4 1c0 .1 0 .2-.1.3l-.2.2-.3.3v.2a4.2 4.2 0 0 0 .8 1c.5.5 1 .7 1.2.8.1 0 .2 0 .3-.1l.6-.7c.1-.1.2-.1.3-.1l1.1.5c.2.1.3.1.3.2v.8c-.1.3-.6.6-.9.7z" }) });
}
function Yp() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("rect", { x: "1.5", y: "3", width: "13", height: "10", rx: "2", stroke: "currentColor", strokeWidth: "1.4" }),
    /* @__PURE__ */ o.jsx("path", { d: "M2 4l6 4 6-4", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
const Xp = [
  { icon: /* @__PURE__ */ o.jsx(kc, {}), text: "חזרה תוך 24 שעות בימי עסקים" },
  { icon: /* @__PURE__ */ o.jsx(jc, {}), text: "שיחת ייעוץ ראשונה, בחינם לחלוטין" },
  { icon: /* @__PURE__ */ o.jsx(Nc, {}), text: "הצעת מחיר מפורטת ללא התחייבות" },
  { icon: /* @__PURE__ */ o.jsx(Sc, {}), text: "פרטיות מלאה, המידע שלכם אצלנו בלבד" }
];
function Kp() {
  const [e, t] = q(), [n, r] = q(0.1), [l, i] = z.useState(!1), [s, a] = z.useState(!1), [u, f] = z.useState(!1), [g, m] = z.useState({ name: "", phone: "", type: "", message: "" });
  function h(y) {
    m((k) => ({ ...k, [y.target.name]: y.target.value }));
  }
  async function v(y) {
    y.preventDefault(), f(!0), a(!1);
    try {
      (await fetch("https://formspree.io/f/maqkkjab", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...g, _replyto: g.phone })
      })).ok ? i(!0) : a(!0);
    } catch {
      a(!0);
    } finally {
      f(!1);
    }
  }
  return /* @__PURE__ */ o.jsx("section", { id: "contact", className: "section section-contact", "data-screen-label": "08 Contact", children: /* @__PURE__ */ o.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: e,
        className: `section-head reveal${t ? " in-view" : ""}`,
        style: { textAlign: "center", marginBottom: 56 },
        children: [
          /* @__PURE__ */ o.jsxs("span", { className: "eyebrow", style: { display: "inline-flex", margin: "0 auto 16px" }, children: [
            /* @__PURE__ */ o.jsx("span", { className: "eyebrow-dot" }),
            "צור קשר"
          ] }),
          /* @__PURE__ */ o.jsx("h2", { className: "section-title section-title-xl", style: { textAlign: "center" }, children: "בואו נדבר." }),
          /* @__PURE__ */ o.jsx("p", { className: "section-sub", style: { textAlign: "center", maxWidth: 460, margin: "12px auto 0" }, children: "ספרו לנו על הפרויקט, נחזור עם הצעה ברורה תוך יום עסקים." })
        ]
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "contact-layout", children: [
      /* @__PURE__ */ o.jsx("div", { className: "contact-left", children: /* @__PURE__ */ o.jsx("ul", { className: "contact-promise-list", children: Xp.map((y, k) => /* @__PURE__ */ o.jsxs("li", { className: "contact-promise-item", children: [
        /* @__PURE__ */ o.jsx("span", { className: "contact-promise-icon", children: y.icon }),
        /* @__PURE__ */ o.jsx("span", { children: y.text })
      ] }, k)) }) }),
      /* @__PURE__ */ o.jsx("div", { ref: n, className: `contact-form reveal${r ? " in-view" : ""}`, children: l ? /* @__PURE__ */ o.jsxs("div", { className: "contact-success", children: [
        /* @__PURE__ */ o.jsx("div", { className: "contact-success-icon", children: "✓" }),
        /* @__PURE__ */ o.jsx("div", { className: "contact-success-title", children: "קיבלנו!" }),
        /* @__PURE__ */ o.jsx("p", { className: "contact-success-sub", children: "נחזור אליכם תוך יום עסקים אחד." })
      ] }) : /* @__PURE__ */ o.jsxs("form", { onSubmit: v, children: [
        /* @__PURE__ */ o.jsxs("div", { className: "contact-form-row", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "contact-field", children: [
            /* @__PURE__ */ o.jsx("label", { className: "contact-label", htmlFor: "cf-name", children: "שם מלא *" }),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                id: "cf-name",
                className: "contact-input",
                name: "name",
                required: !0,
                value: g.name,
                onChange: h,
                placeholder: "ישראל ישראלי"
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "contact-field", children: [
            /* @__PURE__ */ o.jsx("label", { className: "contact-label", htmlFor: "cf-phone", children: "טלפון / מייל *" }),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                id: "cf-phone",
                className: "contact-input",
                name: "phone",
                required: !0,
                value: g.phone,
                onChange: h,
                placeholder: "050-0000000"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "contact-field", children: [
          /* @__PURE__ */ o.jsx("label", { className: "contact-label", htmlFor: "cf-type", children: "סוג הפרויקט" }),
          /* @__PURE__ */ o.jsxs(
            "select",
            {
              id: "cf-type",
              className: "contact-select",
              name: "type",
              value: g.type,
              onChange: h,
              children: [
                /* @__PURE__ */ o.jsx("option", { value: "", children: "בחרו..." }),
                /* @__PURE__ */ o.jsx("option", { value: "landing", children: "דף נחיתה" }),
                /* @__PURE__ */ o.jsx("option", { value: "identity", children: "אתר תדמית" }),
                /* @__PURE__ */ o.jsx("option", { value: "other", children: "אחר" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "contact-field", children: [
          /* @__PURE__ */ o.jsx("label", { className: "contact-label", htmlFor: "cf-message", children: "ספרו לנו עוד" }),
          /* @__PURE__ */ o.jsx(
            "textarea",
            {
              id: "cf-message",
              className: "contact-textarea",
              name: "message",
              value: g.message,
              onChange: h,
              placeholder: "תארו בקצרה את העסק, מטרת האתר, ומה חשוב לכם..."
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx("button", { type: "submit", className: "contact-submit", disabled: u, children: u ? "שולח..." : "שלחו פנייה →" }),
        /* @__PURE__ */ o.jsx("p", { className: "contact-form-note", children: "* שדות חובה · לא שולחים ספאם, לעולם לא." }),
        s && /* @__PURE__ */ o.jsx("p", { style: { color: "#E24B4A", fontSize: 13, marginTop: 8 }, children: "משהו השתבש. נסו שוב או כתבו לנו ישירות." })
      ] }) })
    ] })
  ] }) });
}
function la({ href: e, children: t, variant: n, onClick: r }) {
  const l = z.useRef(null);
  z.useEffect(() => {
    const s = window.gsap;
    if (!s) return;
    const a = l.current;
    if (!a) return;
    function u(g) {
      const m = a.getBoundingClientRect(), h = (g.clientX - m.left - m.width / 2) * 0.4, v = (g.clientY - m.top - m.height / 2) * 0.4;
      s.to(a, { x: h, y: v, rotationX: -v * 0.15, rotationY: h * 0.15, scale: 1.05, ease: "power2.out", duration: 0.4 });
    }
    function f() {
      s.to(a, { x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.2 });
    }
    return a.addEventListener("mousemove", u), a.addEventListener("mouseleave", f), () => {
      a.removeEventListener("mousemove", u), a.removeEventListener("mouseleave", f);
    };
  }, []);
  const i = `cf2-pill${n ? ` cf2-pill-${n}` : ""}`;
  return r ? /* @__PURE__ */ o.jsx("button", { ref: l, onClick: r, className: i, children: t }) : /* @__PURE__ */ o.jsx("a", { ref: l, href: e, className: i, children: t });
}
const ia = [
  "בניית אתרים מקצועית",
  "✦",
  "עיצוב שממיר לקוחות",
  "✦",
  "חוויית משתמש מושלמת",
  "✦",
  "קוד מהיר ונקי",
  "✦",
  "מותאם לכל מכשיר",
  "✦"
];
function Gp() {
  const e = z.useRef(null), t = z.useRef(null), n = z.useRef(null), r = z.useRef(null);
  z.useEffect(() => {
    const i = window.gsap, s = window.ScrollTrigger;
    if (!i || !s) return;
    i.registerPlugin(s);
    const a = e.current;
    if (!a) return;
    t.current && i.fromTo(
      t.current,
      { y: "10vh", scale: 0.8, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: { trigger: a, start: "top 80%", end: "bottom bottom", scrub: 1 }
      }
    );
    const u = [n.current, r.current].filter(Boolean);
    return u.length && i.fromTo(
      u,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: a, start: "top 40%", end: "bottom bottom", scrub: 1 }
      }
    ), () => {
      s.getAll().filter((f) => f.vars && f.vars.trigger === a).forEach((f) => f.kill());
    };
  }, []);
  function l() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return /* @__PURE__ */ o.jsx("div", { ref: e, className: "cf2-wrapper", children: /* @__PURE__ */ o.jsxs("footer", { className: "cf2-footer", children: [
    /* @__PURE__ */ o.jsx("div", { className: "cf2-aurora", "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx("div", { className: "cf2-bg-grid", "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx("div", { ref: t, className: "cf2-giant-text", "aria-hidden": "true", children: "MOTION" }),
    /* @__PURE__ */ o.jsx("div", { className: "cf2-marquee-strip", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("div", { className: "cf2-marquee-track", children: [...ia, ...ia].map((i, s) => /* @__PURE__ */ o.jsx("span", { className: i === "✦" ? "cf2-sep" : "", children: i }, s)) }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "cf2-content", children: [
      /* @__PURE__ */ o.jsx("p", { className: "cf2-eyebrow", children: "בואו נדבר" }),
      /* @__PURE__ */ o.jsx("h2", { ref: n, className: "cf2-headline", children: "מוכנים להתחיל?" }),
      /* @__PURE__ */ o.jsx("p", { className: "cf2-sub", children: "שיחת היכרות בחינם, ללא התחייבות." }),
      /* @__PURE__ */ o.jsxs("div", { ref: r, className: "cf2-buttons", children: [
        /* @__PURE__ */ o.jsxs(la, { href: "https://wa.me/972535406691", variant: "primary", children: [
          /* @__PURE__ */ o.jsx(Qp, {}),
          /* @__PURE__ */ o.jsx("span", { children: "WhatsApp" })
        ] }),
        /* @__PURE__ */ o.jsxs(la, { href: "mailto:eliyaelmedwy555@gmail.com", children: [
          /* @__PURE__ */ o.jsx(Yp, {}),
          /* @__PURE__ */ o.jsx("span", { children: "שלחו מייל" })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "cf2-sub-links", children: [
        /* @__PURE__ */ o.jsx("a", { href: "#", className: "cf2-pill-sm", children: "תקנון" }),
        /* @__PURE__ */ o.jsx("a", { href: "#", className: "cf2-pill-sm", children: "פרטיות" }),
        /* @__PURE__ */ o.jsx("a", { href: "#", className: "cf2-pill-sm", children: "תמיכה" })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "cf2-bottom", children: [
      /* @__PURE__ */ o.jsx(wc, { variant: "dark" }),
      /* @__PURE__ */ o.jsxs("div", { className: "cf2-badge", children: [
        /* @__PURE__ */ o.jsx("span", { children: "נבנה עם" }),
        /* @__PURE__ */ o.jsx("span", { className: "cf2-heart", "aria-label": "אהבה", children: /* @__PURE__ */ o.jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" }) }) }),
        /* @__PURE__ */ o.jsx("span", { children: "על ידי Motion" })
      ] }),
      /* @__PURE__ */ o.jsx("button", { className: "cf2-top-btn", onClick: l, "aria-label": "חזרה למעלה", children: /* @__PURE__ */ o.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M5 10l7-7m0 0l7 7m-7-7v18" }) }) })
    ] })
  ] }) });
}
function Zp() {
  const [e, t] = rp(sp);
  return z.useEffect(() => {
    const n = document.documentElement;
    n.style.setProperty("--accent", e.accent), n.style.setProperty("--bg", e.bg), n.style.setProperty("--display-font", `"${e.displayFont}"`), n.style.setProperty("--display-weight", String(e.displayWeight)), n.style.setProperty("--display-scale", String(e.displayScale)), n.style.setProperty("--display-tracking", `${e.letterSpacing}px`), n.style.setProperty("--radius-card", `${e.radiusCard}px`), n.style.setProperty("--radius-section", `${e.radiusSection}px`), n.style.setProperty("--container-w", `${e.containerWidth}px`), n.style.setProperty("--density", String(e.density)), document.body.style.background = e.bg;
  }, [e.accent, e.bg, e.displayFont, e.displayWeight, e.displayScale, e.letterSpacing, e.radiusCard, e.radiusSection, e.containerWidth, e.density]), z.useEffect(() => {
    if (["Inter", "Heebo"].includes(e.displayFont)) return;
    const n = `font-${e.displayFont.replace(/\s+/g, "-")}`;
    if (document.getElementById(n)) return;
    const r = document.createElement("link");
    r.id = n, r.rel = "stylesheet", r.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(e.displayFont)}:wght@400;500;600;700;800;900&display=swap`, document.head.appendChild(r);
  }, [e.displayFont]), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("a", { href: "#main", className: "skip-link", children: "דלג לתוכן" }),
    /* @__PURE__ */ o.jsx(gp, {}),
    /* @__PURE__ */ o.jsx(xp, {}),
    /* @__PURE__ */ o.jsxs("main", { id: "main", tabIndex: -1, children: [
      /* @__PURE__ */ o.jsx(Np, {}),
      /* @__PURE__ */ o.jsx(Fp, {}),
      /* @__PURE__ */ o.jsx(yp, { tweaks: e }),
      /* @__PURE__ */ o.jsx(kp, {}),
      /* @__PURE__ */ o.jsx(Cp, { tweaks: e }),
      /* @__PURE__ */ o.jsx(Ap, {}),
      /* @__PURE__ */ o.jsx(zp, {}),
      /* @__PURE__ */ o.jsx(Hp, {}),
      /* @__PURE__ */ o.jsx(Kp, {})
    ] }),
    /* @__PURE__ */ o.jsx(Gp, {}),
    /* @__PURE__ */ o.jsxs(lp, { title: "Tweaks", children: [
      /* @__PURE__ */ o.jsx(kt, { label: "צבע" }),
      /* @__PURE__ */ o.jsx(
        ea,
        {
          label: "Accent",
          value: e.accent,
          options: ap,
          onChange: (n) => t("accent", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        ea,
        {
          label: "רקע אתר",
          value: e.bg,
          options: up,
          onChange: (n) => t("bg", n)
        }
      ),
      /* @__PURE__ */ o.jsx(kt, { label: "טיפוגרפיה" }),
      /* @__PURE__ */ o.jsx(
        yc,
        {
          label: "גופן תצוגה",
          value: e.displayFont,
          options: cp,
          onChange: (n) => t("displayFont", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Gl,
        {
          label: "עובי",
          value: e.displayWeight,
          options: [700, 800, 900],
          onChange: (n) => t("displayWeight", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        It,
        {
          label: "גודל כותרות",
          value: e.displayScale,
          min: 0.7,
          max: 1.4,
          step: 0.05,
          onChange: (n) => t("displayScale", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        It,
        {
          label: "ריווח אותיות",
          value: e.letterSpacing,
          min: -6,
          max: 2,
          step: 0.1,
          unit: "px",
          onChange: (n) => t("letterSpacing", n)
        }
      ),
      /* @__PURE__ */ o.jsx(kt, { label: "מבנה" }),
      /* @__PURE__ */ o.jsx(
        It,
        {
          label: "עיגול כרטיסים",
          value: e.radiusCard,
          min: 0,
          max: 48,
          step: 2,
          unit: "px",
          onChange: (n) => t("radiusCard", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        It,
        {
          label: "עיגול סקשנים",
          value: e.radiusSection,
          min: 0,
          max: 80,
          step: 4,
          unit: "px",
          onChange: (n) => t("radiusSection", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        It,
        {
          label: "רוחב מקסימלי",
          value: e.containerWidth,
          min: 1e3,
          max: 1600,
          step: 20,
          unit: "px",
          onChange: (n) => t("containerWidth", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        It,
        {
          label: "צפיפות",
          value: e.density,
          min: 0.7,
          max: 1.4,
          step: 0.05,
          onChange: (n) => t("density", n)
        }
      ),
      /* @__PURE__ */ o.jsx(kt, { label: "הירו" }),
      /* @__PURE__ */ o.jsx(
        Gl,
        {
          label: "הדגשה",
          value: e.hlMode,
          options: ["accent", "underline", "block"],
          onChange: (n) => t("hlMode", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        qs,
        {
          label: "כותרת",
          value: e.headline,
          onChange: (n) => t("headline", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        qs,
        {
          label: "תת-כותרת",
          value: e.subhead,
          onChange: (n) => t("subhead", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        En,
        {
          label: "מספרי אמון",
          value: e.showStats,
          onChange: (n) => t("showStats", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        En,
        {
          label: "תגית 'זמין'",
          value: e.showHeroBadge,
          onChange: (n) => t("showHeroBadge", n)
        }
      ),
      /* @__PURE__ */ o.jsx(kt, { label: "שירותים" }),
      /* @__PURE__ */ o.jsx(
        En,
        {
          label: "הצג תגי מחיר",
          value: e.showPrices,
          onChange: (n) => t("showPrices", n)
        }
      ),
      /* @__PURE__ */ o.jsx(kt, { label: "עבודות" }),
      /* @__PURE__ */ o.jsx(
        En,
        {
          label: "הצמדה ודחיסה",
          value: e.stickyStack,
          onChange: (n) => t("stickyStack", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Gl,
        {
          label: "רקע",
          value: e.workBg,
          options: ["ink", "light"],
          onChange: (n) => t("workBg", n)
        }
      )
    ] })
  ] });
}
vc(document.getElementById("root")).render(/* @__PURE__ */ o.jsx(Zp, {}));
