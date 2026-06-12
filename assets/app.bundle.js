function zc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sa = { exports: {} }, ol = {}, aa = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn = Symbol.for("react.element"), Pc = Symbol.for("react.portal"), Tc = Symbol.for("react.fragment"), Rc = Symbol.for("react.strict_mode"), Mc = Symbol.for("react.profiler"), Fc = Symbol.for("react.provider"), bc = Symbol.for("react.context"), Ic = Symbol.for("react.forward_ref"), Oc = Symbol.for("react.suspense"), Dc = Symbol.for("react.memo"), Ac = Symbol.for("react.lazy"), Ho = Symbol.iterator;
function $c(e) {
  return e === null || typeof e != "object" ? null : (e = Ho && e[Ho] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ua = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ca = Object.assign, da = {};
function un(e, t, n) {
  this.props = e, this.context = t, this.refs = da, this.updater = n || ua;
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fa() {
}
fa.prototype = un.prototype;
function Vi(e, t, n) {
  this.props = e, this.context = t, this.refs = da, this.updater = n || ua;
}
var Hi = Vi.prototype = new fa();
Hi.constructor = Vi;
ca(Hi, un.prototype);
Hi.isPureReactComponent = !0;
var Qo = Array.isArray, pa = Object.prototype.hasOwnProperty, Qi = { current: null }, ha = { key: !0, ref: !0, __self: !0, __source: !0 };
function ma(e, t, n) {
  var r, l = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) pa.call(t, r) && !ha.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), f = 0; f < a; f++) u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: qn, type: e, key: i, ref: s, props: l, _owner: Qi.current };
}
function Bc(e, t) {
  return { $$typeof: qn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Yi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === qn;
}
function Wc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Yo = /\/+/g;
function El(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Wc("" + e.key) : t.toString(36);
}
function Sr(e, t, n, r, l) {
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
        case qn:
        case Pc:
          s = !0;
      }
  }
  if (s) return s = e, l = l(s), e = r === "" ? "." + El(s, 0) : r, Qo(l) ? (n = "", e != null && (n = e.replace(Yo, "$&/") + "/"), Sr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (Yi(l) && (l = Bc(l, n + (!l.key || s && s.key === l.key ? "" : ("" + l.key).replace(Yo, "$&/") + "/") + e)), t.push(l)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Qo(e)) for (var a = 0; a < e.length; a++) {
    i = e[a];
    var u = r + El(i, a);
    s += Sr(i, t, n, u, l);
  }
  else if (u = $c(e), typeof u == "function") for (e = u.call(e), a = 0; !(i = e.next()).done; ) i = i.value, u = r + El(i, a++), s += Sr(i, t, n, u, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function sr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Sr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Uc(e) {
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
var ue = { current: null }, Er = { transition: null }, Vc = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: Er, ReactCurrentOwner: Qi };
function ga() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = { map: sr, forEach: function(e, t, n) {
  sr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return sr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return sr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Yi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
M.Component = un;
M.Fragment = Tc;
M.Profiler = Mc;
M.PureComponent = Vi;
M.StrictMode = Rc;
M.Suspense = Oc;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vc;
M.act = ga;
M.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ca({}, e.props), l = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Qi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (u in t) pa.call(t, u) && !ha.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var f = 0; f < u; f++) a[f] = arguments[f + 2];
    r.children = a;
  }
  return { $$typeof: qn, type: e.type, key: l, ref: i, props: r, _owner: s };
};
M.createContext = function(e) {
  return e = { $$typeof: bc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Fc, _context: e }, e.Consumer = e;
};
M.createElement = ma;
M.createFactory = function(e) {
  var t = ma.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: Ic, render: e };
};
M.isValidElement = Yi;
M.lazy = function(e) {
  return { $$typeof: Ac, _payload: { _status: -1, _result: e }, _init: Uc };
};
M.memo = function(e, t) {
  return { $$typeof: Dc, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function(e) {
  var t = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = t;
  }
};
M.unstable_act = ga;
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
aa.exports = M;
var Xi = aa.exports;
const z = /* @__PURE__ */ zc(Xi);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hc = Xi, Qc = Symbol.for("react.element"), Yc = Symbol.for("react.fragment"), Xc = Object.prototype.hasOwnProperty, Kc = Hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function xa(e, t, n) {
  var r, l = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Xc.call(t, r) && !Gc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Qc, type: e, key: i, ref: s, props: l, _owner: Kc.current };
}
ol.Fragment = Yc;
ol.jsx = xa;
ol.jsxs = xa;
sa.exports = ol;
var o = sa.exports, va = { exports: {} }, ke = {}, ya = { exports: {} }, wa = {};
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
      e: for (var H = 0, G = S.length, ir = G >>> 1; H < ir; ) {
        var vt = 2 * (H + 1) - 1, Sl = S[vt], yt = vt + 1, or = S[yt];
        if (0 > l(Sl, R)) yt < G && 0 > l(or, Sl) ? (S[H] = or, S[yt] = R, H = yt) : (S[H] = Sl, S[vt] = R, H = vt);
        else if (yt < G && 0 > l(or, R)) S[H] = or, S[yt] = R, H = yt;
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
    if (k = !1, p(S), !y) if (n(u) !== null) y = !0, jl(j);
    else {
      var P = n(f);
      P !== null && Nl(x, P.startTime - S);
    }
  }
  function j(S, P) {
    y = !1, k && (k = !1, d(L), L = -1), v = !0;
    var R = h;
    try {
      for (p(P), m = n(u); m !== null && (!(m.expirationTime > P) || S && !ze()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, h = m.priorityLevel;
          var G = H(m.expirationTime <= P);
          P = e.unstable_now(), typeof G == "function" ? m.callback = G : m === n(u) && r(u), p(P);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var ir = !0;
      else {
        var vt = n(f);
        vt !== null && Nl(x, vt.startTime - P), ir = !1;
      }
      return ir;
    } finally {
      m = null, h = R, v = !1;
    }
  }
  var E = !1, C = null, L = -1, A = 5, T = -1;
  function ze() {
    return !(e.unstable_now() - T < A);
  }
  function fn() {
    if (C !== null) {
      var S = e.unstable_now();
      T = S;
      var P = !0;
      try {
        P = C(!0, S);
      } finally {
        P ? pn() : (E = !1, C = null);
      }
    } else E = !1;
  }
  var pn;
  if (typeof c == "function") pn = function() {
    c(fn);
  };
  else if (typeof MessageChannel < "u") {
    var Vo = new MessageChannel(), Lc = Vo.port2;
    Vo.port1.onmessage = fn, pn = function() {
      Lc.postMessage(null);
    };
  } else pn = function() {
    _(fn, 0);
  };
  function jl(S) {
    C = S, E || (E = !0, pn());
  }
  function Nl(S, P) {
    L = _(function() {
      S(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(S) {
    S.callback = null;
  }, e.unstable_continueExecution = function() {
    y || v || (y = !0, jl(j));
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
    return G = R + G, S = { id: g++, callback: P, priorityLevel: S, startTime: R, expirationTime: G, sortIndex: -1 }, R > H ? (S.sortIndex = R, t(f, S), n(u) === null && S === n(f) && (k ? (d(L), L = -1) : k = !0, Nl(x, R - H))) : (S.sortIndex = G, t(u, S), y || v || (y = !0, jl(j))), S;
  }, e.unstable_shouldYield = ze, e.unstable_wrapCallback = function(S) {
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
})(wa);
ya.exports = wa;
var Zc = ya.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc = Xi, ye = Zc;
function w(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ka = /* @__PURE__ */ new Set(), In = {};
function Mt(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (In[e] = t, e = 0; e < t.length; e++) ka.add(t[e]);
}
var Ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jl = Object.prototype.hasOwnProperty, qc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xo = {}, Ko = {};
function ed(e) {
  return Jl.call(Ko, e) ? !0 : Jl.call(Xo, e) ? !1 : qc.test(e) ? Ko[e] = !0 : (Xo[e] = !0, !1);
}
function td(e, t, n, r) {
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
function nd(e, t, n, r) {
  if (t === null || typeof t > "u" || td(e, t, n, r)) return !0;
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
var Ki = /[\-:]([a-z])/g;
function Gi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ki,
    Gi
  );
  ne[t] = new ce(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ki, Gi);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ki, Gi);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zi(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (nd(t, n, l, r) && (n = null), r || l === null ? ed(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ar = Symbol.for("react.element"), Ot = Symbol.for("react.portal"), Dt = Symbol.for("react.fragment"), Ji = Symbol.for("react.strict_mode"), ql = Symbol.for("react.profiler"), ja = Symbol.for("react.provider"), Na = Symbol.for("react.context"), qi = Symbol.for("react.forward_ref"), ei = Symbol.for("react.suspense"), ti = Symbol.for("react.suspense_list"), eo = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), Sa = Symbol.for("react.offscreen"), Go = Symbol.iterator;
function hn(e) {
  return e === null || typeof e != "object" ? null : (e = Go && e[Go] || e["@@iterator"], typeof e == "function" ? e : null);
}
var U = Object.assign, Cl;
function jn(e) {
  if (Cl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Cl = t && t[1] || "";
  }
  return `
` + Cl + e;
}
var _l = !1;
function Ll(e, t) {
  if (!e || _l) return "";
  _l = !0;
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
    _l = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? jn(e) : "";
}
function rd(e) {
  switch (e.tag) {
    case 5:
      return jn(e.type);
    case 16:
      return jn("Lazy");
    case 13:
      return jn("Suspense");
    case 19:
      return jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ll(e.type, !1), e;
    case 11:
      return e = Ll(e.type.render, !1), e;
    case 1:
      return e = Ll(e.type, !0), e;
    default:
      return "";
  }
}
function ni(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dt:
      return "Fragment";
    case Ot:
      return "Portal";
    case ql:
      return "Profiler";
    case Ji:
      return "StrictMode";
    case ei:
      return "Suspense";
    case ti:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Na:
      return (e.displayName || "Context") + ".Consumer";
    case ja:
      return (e._context.displayName || "Context") + ".Provider";
    case qi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case eo:
      return t = e.displayName || null, t !== null ? t : ni(e.type) || "Memo";
    case qe:
      t = e._payload, e = e._init;
      try {
        return ni(e(t));
      } catch {
      }
  }
  return null;
}
function ld(e) {
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
      return ni(t);
    case 8:
      return t === Ji ? "StrictMode" : "Mode";
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
function pt(e) {
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
function Ea(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function id(e) {
  var t = Ea(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ur(e) {
  e._valueTracker || (e._valueTracker = id(e));
}
function Ca(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ea(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ir(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ri(e, t) {
  var n = t.checked;
  return U({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Zo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = pt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function _a(e, t) {
  t = t.checked, t != null && Zi(e, "checked", t, !1);
}
function li(e, t) {
  _a(e, t);
  var n = pt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ii(e, t.type, n) : t.hasOwnProperty("defaultValue") && ii(e, t.type, pt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Jo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ii(e, t, n) {
  (t !== "number" || Ir(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nn = Array.isArray;
function Kt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function oi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return U({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function qo(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(w(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: pt(n) };
}
function La(e, t) {
  var n = pt(t.value), r = pt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function es(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function za(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function si(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? za(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var cr, Pa = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (cr = cr || document.createElement("div"), cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = cr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function On(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _n = {
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
}, od = ["Webkit", "ms", "Moz", "O"];
Object.keys(_n).forEach(function(e) {
  od.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), _n[t] = _n[e];
  });
});
function Ta(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || _n.hasOwnProperty(e) && _n[e] ? ("" + t).trim() : t + "px";
}
function Ra(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ta(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var sd = U({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ai(e, t) {
  if (t) {
    if (sd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function ui(e, t) {
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
var ci = null;
function to(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var di = null, Gt = null, Zt = null;
function ts(e) {
  if (e = nr(e)) {
    if (typeof di != "function") throw Error(w(280));
    var t = e.stateNode;
    t && (t = dl(t), di(e.stateNode, e.type, t));
  }
}
function Ma(e) {
  Gt ? Zt ? Zt.push(e) : Zt = [e] : Gt = e;
}
function Fa() {
  if (Gt) {
    var e = Gt, t = Zt;
    if (Zt = Gt = null, ts(e), t) for (e = 0; e < t.length; e++) ts(t[e]);
  }
}
function ba(e, t) {
  return e(t);
}
function Ia() {
}
var zl = !1;
function Oa(e, t, n) {
  if (zl) return e(t, n);
  zl = !0;
  try {
    return ba(e, t, n);
  } finally {
    zl = !1, (Gt !== null || Zt !== null) && (Ia(), Fa());
  }
}
function Dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = dl(n);
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
var fi = !1;
if (Ye) try {
  var mn = {};
  Object.defineProperty(mn, "passive", { get: function() {
    fi = !0;
  } }), window.addEventListener("test", mn, mn), window.removeEventListener("test", mn, mn);
} catch {
  fi = !1;
}
function ad(e, t, n, r, l, i, s, a, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (g) {
    this.onError(g);
  }
}
var Ln = !1, Or = null, Dr = !1, pi = null, ud = { onError: function(e) {
  Ln = !0, Or = e;
} };
function cd(e, t, n, r, l, i, s, a, u) {
  Ln = !1, Or = null, ad.apply(ud, arguments);
}
function dd(e, t, n, r, l, i, s, a, u) {
  if (cd.apply(this, arguments), Ln) {
    if (Ln) {
      var f = Or;
      Ln = !1, Or = null;
    } else throw Error(w(198));
    Dr || (Dr = !0, pi = f);
  }
}
function Ft(e) {
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
function Da(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ns(e) {
  if (Ft(e) !== e) throw Error(w(188));
}
function fd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ft(e), t === null) throw Error(w(188));
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
        if (i === n) return ns(l), e;
        if (i === r) return ns(l), t;
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
function Aa(e) {
  return e = fd(e), e !== null ? $a(e) : null;
}
function $a(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $a(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ba = ye.unstable_scheduleCallback, rs = ye.unstable_cancelCallback, pd = ye.unstable_shouldYield, hd = ye.unstable_requestPaint, Q = ye.unstable_now, md = ye.unstable_getCurrentPriorityLevel, no = ye.unstable_ImmediatePriority, Wa = ye.unstable_UserBlockingPriority, Ar = ye.unstable_NormalPriority, gd = ye.unstable_LowPriority, Ua = ye.unstable_IdlePriority, sl = null, $e = null;
function xd(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function") try {
    $e.onCommitFiberRoot(sl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Fe = Math.clz32 ? Math.clz32 : wd, vd = Math.log, yd = Math.LN2;
function wd(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (vd(e) / yd | 0) | 0;
}
var dr = 64, fr = 4194304;
function Sn(e) {
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
function $r(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~l;
    a !== 0 ? r = Sn(a) : (i &= s, i !== 0 && (r = Sn(i)));
  } else s = n & ~l, s !== 0 ? r = Sn(s) : i !== 0 && (r = Sn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Fe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function kd(e, t) {
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
function jd(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Fe(i), a = 1 << s, u = l[s];
    u === -1 ? (!(a & n) || a & r) && (l[s] = kd(a, t)) : u <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function hi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Va() {
  var e = dr;
  return dr <<= 1, !(dr & 4194240) && (dr = 64), e;
}
function Pl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function er(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Fe(t), e[t] = n;
}
function Nd(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Fe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function ro(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var b = 0;
function Ha(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Qa, lo, Ya, Xa, Ka, mi = !1, pr = [], it = null, ot = null, st = null, An = /* @__PURE__ */ new Map(), $n = /* @__PURE__ */ new Map(), tt = [], Sd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ls(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      st = null;
      break;
    case "pointerover":
    case "pointerout":
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $n.delete(t.pointerId);
  }
}
function gn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = nr(t), t !== null && lo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Ed(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return it = gn(it, e, t, n, r, l), !0;
    case "dragenter":
      return ot = gn(ot, e, t, n, r, l), !0;
    case "mouseover":
      return st = gn(st, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return An.set(i, gn(An.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, $n.set(i, gn($n.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Ga(e) {
  var t = Nt(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Da(n), t !== null) {
          e.blockedOn = t, Ka(e.priority, function() {
            Ya(n);
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
function Cr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ci = r, n.target.dispatchEvent(r), ci = null;
    } else return t = nr(n), t !== null && lo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function is(e, t, n) {
  Cr(e) && n.delete(t);
}
function Cd() {
  mi = !1, it !== null && Cr(it) && (it = null), ot !== null && Cr(ot) && (ot = null), st !== null && Cr(st) && (st = null), An.forEach(is), $n.forEach(is);
}
function xn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, mi || (mi = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, Cd)));
}
function Bn(e) {
  function t(l) {
    return xn(l, e);
  }
  if (0 < pr.length) {
    xn(pr[0], e);
    for (var n = 1; n < pr.length; n++) {
      var r = pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (it !== null && xn(it, e), ot !== null && xn(ot, e), st !== null && xn(st, e), An.forEach(t), $n.forEach(t), n = 0; n < tt.length; n++) r = tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && (n = tt[0], n.blockedOn === null); ) Ga(n), n.blockedOn === null && tt.shift();
}
var Jt = Ze.ReactCurrentBatchConfig, Br = !0;
function _d(e, t, n, r) {
  var l = b, i = Jt.transition;
  Jt.transition = null;
  try {
    b = 1, io(e, t, n, r);
  } finally {
    b = l, Jt.transition = i;
  }
}
function Ld(e, t, n, r) {
  var l = b, i = Jt.transition;
  Jt.transition = null;
  try {
    b = 4, io(e, t, n, r);
  } finally {
    b = l, Jt.transition = i;
  }
}
function io(e, t, n, r) {
  if (Br) {
    var l = gi(e, t, n, r);
    if (l === null) $l(e, t, r, Wr, n), ls(e, r);
    else if (Ed(l, e, t, n, r)) r.stopPropagation();
    else if (ls(e, r), t & 4 && -1 < Sd.indexOf(e)) {
      for (; l !== null; ) {
        var i = nr(l);
        if (i !== null && Qa(i), i = gi(e, t, n, r), i === null && $l(e, t, r, Wr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else $l(e, t, r, null, n);
  }
}
var Wr = null;
function gi(e, t, n, r) {
  if (Wr = null, e = to(r), e = Nt(e), e !== null) if (t = Ft(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Da(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Wr = e, null;
}
function Za(e) {
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
      switch (md()) {
        case no:
          return 1;
        case Wa:
          return 4;
        case Ar:
        case gd:
          return 16;
        case Ua:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null, oo = null, _r = null;
function Ja() {
  if (_r) return _r;
  var e, t = oo, n = t.length, r, l = "value" in rt ? rt.value : rt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++) ;
  return _r = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Lr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function hr() {
  return !0;
}
function os() {
  return !1;
}
function je(e) {
  function t(n, r, l, i, s) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? hr : os, this.isPropagationStopped = os, this;
  }
  return U(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = hr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = hr);
  }, persist: function() {
  }, isPersistent: hr }), t;
}
var cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, so = je(cn), tr = U({}, cn, { view: 0, detail: 0 }), zd = je(tr), Tl, Rl, vn, al = U({}, tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ao, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== vn && (vn && e.type === "mousemove" ? (Tl = e.screenX - vn.screenX, Rl = e.screenY - vn.screenY) : Rl = Tl = 0, vn = e), Tl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Rl;
} }), ss = je(al), Pd = U({}, al, { dataTransfer: 0 }), Td = je(Pd), Rd = U({}, tr, { relatedTarget: 0 }), Ml = je(Rd), Md = U({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Fd = je(Md), bd = U({}, cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Id = je(bd), Od = U({}, cn, { data: 0 }), as = je(Od), Dd = {
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
}, Ad = {
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
}, $d = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Bd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $d[e]) ? !!t[e] : !1;
}
function ao() {
  return Bd;
}
var Wd = U({}, tr, { key: function(e) {
  if (e.key) {
    var t = Dd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Lr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ad[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ao, charCode: function(e) {
  return e.type === "keypress" ? Lr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Lr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ud = je(Wd), Vd = U({}, al, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), us = je(Vd), Hd = U({}, tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ao }), Qd = je(Hd), Yd = U({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = je(Yd), Kd = U({}, al, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Gd = je(Kd), Zd = [9, 13, 27, 32], uo = Ye && "CompositionEvent" in window, zn = null;
Ye && "documentMode" in document && (zn = document.documentMode);
var Jd = Ye && "TextEvent" in window && !zn, qa = Ye && (!uo || zn && 8 < zn && 11 >= zn), cs = " ", ds = !1;
function eu(e, t) {
  switch (e) {
    case "keyup":
      return Zd.indexOf(t.keyCode) !== -1;
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
function tu(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var At = !1;
function qd(e, t) {
  switch (e) {
    case "compositionend":
      return tu(t);
    case "keypress":
      return t.which !== 32 ? null : (ds = !0, cs);
    case "textInput":
      return e = t.data, e === cs && ds ? null : e;
    default:
      return null;
  }
}
function ef(e, t) {
  if (At) return e === "compositionend" || !uo && eu(e, t) ? (e = Ja(), _r = oo = rt = null, At = !1, e) : null;
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
      return qa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var tf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function fs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!tf[e.type] : t === "textarea";
}
function nu(e, t, n, r) {
  Ma(r), t = Ur(t, "onChange"), 0 < t.length && (n = new so("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Pn = null, Wn = null;
function nf(e) {
  pu(e, 0);
}
function ul(e) {
  var t = Wt(e);
  if (Ca(t)) return e;
}
function rf(e, t) {
  if (e === "change") return t;
}
var ru = !1;
if (Ye) {
  var Fl;
  if (Ye) {
    var bl = "oninput" in document;
    if (!bl) {
      var ps = document.createElement("div");
      ps.setAttribute("oninput", "return;"), bl = typeof ps.oninput == "function";
    }
    Fl = bl;
  } else Fl = !1;
  ru = Fl && (!document.documentMode || 9 < document.documentMode);
}
function hs() {
  Pn && (Pn.detachEvent("onpropertychange", lu), Wn = Pn = null);
}
function lu(e) {
  if (e.propertyName === "value" && ul(Wn)) {
    var t = [];
    nu(t, Wn, e, to(e)), Oa(nf, t);
  }
}
function lf(e, t, n) {
  e === "focusin" ? (hs(), Pn = t, Wn = n, Pn.attachEvent("onpropertychange", lu)) : e === "focusout" && hs();
}
function of(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ul(Wn);
}
function sf(e, t) {
  if (e === "click") return ul(t);
}
function af(e, t) {
  if (e === "input" || e === "change") return ul(t);
}
function uf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ie = typeof Object.is == "function" ? Object.is : uf;
function Un(e, t) {
  if (Ie(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Jl.call(t, l) || !Ie(e[l], t[l])) return !1;
  }
  return !0;
}
function ms(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gs(e, t) {
  var n = ms(e);
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
    n = ms(n);
  }
}
function iu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? iu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ou() {
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
function co(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function cf(e) {
  var t = ou(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && iu(n.ownerDocument.documentElement, n)) {
    if (r !== null && co(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = gs(n, i);
        var s = gs(
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
var df = Ye && "documentMode" in document && 11 >= document.documentMode, $t = null, xi = null, Tn = null, vi = !1;
function xs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vi || $t == null || $t !== Ir(r) || (r = $t, "selectionStart" in r && co(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Tn && Un(Tn, r) || (Tn = r, r = Ur(xi, "onSelect"), 0 < r.length && (t = new so("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = $t)));
}
function mr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Bt = { animationend: mr("Animation", "AnimationEnd"), animationiteration: mr("Animation", "AnimationIteration"), animationstart: mr("Animation", "AnimationStart"), transitionend: mr("Transition", "TransitionEnd") }, Il = {}, su = {};
Ye && (su = document.createElement("div").style, "AnimationEvent" in window || (delete Bt.animationend.animation, delete Bt.animationiteration.animation, delete Bt.animationstart.animation), "TransitionEvent" in window || delete Bt.transitionend.transition);
function cl(e) {
  if (Il[e]) return Il[e];
  if (!Bt[e]) return e;
  var t = Bt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in su) return Il[e] = t[n];
  return e;
}
var au = cl("animationend"), uu = cl("animationiteration"), cu = cl("animationstart"), du = cl("transitionend"), fu = /* @__PURE__ */ new Map(), vs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mt(e, t) {
  fu.set(e, t), Mt(t, [e]);
}
for (var Ol = 0; Ol < vs.length; Ol++) {
  var Dl = vs[Ol], ff = Dl.toLowerCase(), pf = Dl[0].toUpperCase() + Dl.slice(1);
  mt(ff, "on" + pf);
}
mt(au, "onAnimationEnd");
mt(uu, "onAnimationIteration");
mt(cu, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(du, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
Mt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Mt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Mt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Mt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hf = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
function ys(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, dd(r, t, void 0, e), e.currentTarget = null;
}
function pu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], u = a.instance, f = a.currentTarget;
        if (a = a.listener, u !== i && l.isPropagationStopped()) break e;
        ys(l, a, f), i = u;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], u = a.instance, f = a.currentTarget, a = a.listener, u !== i && l.isPropagationStopped()) break e;
        ys(l, a, f), i = u;
      }
    }
  }
  if (Dr) throw e = pi, Dr = !1, pi = null, e;
}
function O(e, t) {
  var n = t[Ni];
  n === void 0 && (n = t[Ni] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (hu(t, e, 2, !1), n.add(r));
}
function Al(e, t, n) {
  var r = 0;
  t && (r |= 4), hu(n, e, r, t);
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Vn(e) {
  if (!e[gr]) {
    e[gr] = !0, ka.forEach(function(n) {
      n !== "selectionchange" && (hf.has(n) || Al(n, !1, e), Al(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gr] || (t[gr] = !0, Al("selectionchange", !1, t));
  }
}
function hu(e, t, n, r) {
  switch (Za(t)) {
    case 1:
      var l = _d;
      break;
    case 4:
      l = Ld;
      break;
    default:
      l = io;
  }
  n = l.bind(null, t, n, e), l = void 0, !fi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function $l(e, t, n, r, l) {
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
        if (s = Nt(a), s === null) return;
        if (u = s.tag, u === 5 || u === 6) {
          r = i = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Oa(function() {
    var f = i, g = to(n), m = [];
    e: {
      var h = fu.get(e);
      if (h !== void 0) {
        var v = so, y = e;
        switch (e) {
          case "keypress":
            if (Lr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Ud;
            break;
          case "focusin":
            y = "focus", v = Ml;
            break;
          case "focusout":
            y = "blur", v = Ml;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ml;
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
            v = ss;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Td;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Qd;
            break;
          case au:
          case uu:
          case cu:
            v = Fd;
            break;
          case du:
            v = Xd;
            break;
          case "scroll":
            v = zd;
            break;
          case "wheel":
            v = Gd;
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
            v = us;
        }
        var k = (t & 4) !== 0, _ = !k && e === "scroll", d = k ? h !== null ? h + "Capture" : null : h;
        k = [];
        for (var c = f, p; c !== null; ) {
          p = c;
          var x = p.stateNode;
          if (p.tag === 5 && x !== null && (p = x, d !== null && (x = Dn(c, d), x != null && k.push(Hn(c, x, p)))), _) break;
          c = c.return;
        }
        0 < k.length && (h = new v(h, y, null, n, g), m.push({ event: h, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== ci && (y = n.relatedTarget || n.fromElement) && (Nt(y) || y[Xe])) break e;
        if ((v || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = f, y = y ? Nt(y) : null, y !== null && (_ = Ft(y), y !== _ || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = f), v !== y)) {
          if (k = ss, x = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = us, x = "onPointerLeave", d = "onPointerEnter", c = "pointer"), _ = v == null ? h : Wt(v), p = y == null ? h : Wt(y), h = new k(x, c + "leave", v, n, g), h.target = _, h.relatedTarget = p, x = null, Nt(g) === f && (k = new k(d, c + "enter", y, n, g), k.target = p, k.relatedTarget = _, x = k), _ = x, v && y) t: {
            for (k = v, d = y, c = 0, p = k; p; p = bt(p)) c++;
            for (p = 0, x = d; x; x = bt(x)) p++;
            for (; 0 < c - p; ) k = bt(k), c--;
            for (; 0 < p - c; ) d = bt(d), p--;
            for (; c--; ) {
              if (k === d || d !== null && k === d.alternate) break t;
              k = bt(k), d = bt(d);
            }
            k = null;
          }
          else k = null;
          v !== null && ws(m, h, v, k, !1), y !== null && _ !== null && ws(m, _, y, k, !0);
        }
      }
      e: {
        if (h = f ? Wt(f) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file") var j = rf;
        else if (fs(h)) if (ru) j = af;
        else {
          j = of;
          var E = lf;
        }
        else (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (j = sf);
        if (j && (j = j(e, f))) {
          nu(m, j, n, g);
          break e;
        }
        E && E(e, h, f), e === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && ii(h, "number", h.value);
      }
      switch (E = f ? Wt(f) : window, e) {
        case "focusin":
          (fs(E) || E.contentEditable === "true") && ($t = E, xi = f, Tn = null);
          break;
        case "focusout":
          Tn = xi = $t = null;
          break;
        case "mousedown":
          vi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vi = !1, xs(m, n, g);
          break;
        case "selectionchange":
          if (df) break;
        case "keydown":
        case "keyup":
          xs(m, n, g);
      }
      var C;
      if (uo) e: {
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
      else At ? eu(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L && (qa && n.locale !== "ko" && (At || L !== "onCompositionStart" ? L === "onCompositionEnd" && At && (C = Ja()) : (rt = g, oo = "value" in rt ? rt.value : rt.textContent, At = !0)), E = Ur(f, L), 0 < E.length && (L = new as(L, e, null, n, g), m.push({ event: L, listeners: E }), C ? L.data = C : (C = tu(n), C !== null && (L.data = C)))), (C = Jd ? qd(e, n) : ef(e, n)) && (f = Ur(f, "onBeforeInput"), 0 < f.length && (g = new as("onBeforeInput", "beforeinput", null, n, g), m.push({ event: g, listeners: f }), g.data = C));
    }
    pu(m, t);
  });
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ur(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Dn(e, n), i != null && r.unshift(Hn(e, i, l)), i = Dn(e, t), i != null && r.push(Hn(e, i, l))), e = e.return;
  }
  return r;
}
function bt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ws(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, u = a.alternate, f = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 && f !== null && (a = f, l ? (u = Dn(n, i), u != null && s.unshift(Hn(n, u, a))) : l || (u = Dn(n, i), u != null && s.push(Hn(n, u, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var mf = /\r\n?/g, gf = /\u0000|\uFFFD/g;
function ks(e) {
  return (typeof e == "string" ? e : "" + e).replace(mf, `
`).replace(gf, "");
}
function xr(e, t, n) {
  if (t = ks(t), ks(e) !== t && n) throw Error(w(425));
}
function Vr() {
}
var yi = null, wi = null;
function ki(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ji = typeof setTimeout == "function" ? setTimeout : void 0, xf = typeof clearTimeout == "function" ? clearTimeout : void 0, js = typeof Promise == "function" ? Promise : void 0, vf = typeof queueMicrotask == "function" ? queueMicrotask : typeof js < "u" ? function(e) {
  return js.resolve(null).then(e).catch(yf);
} : ji;
function yf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Bl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Bn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Bn(t);
}
function at(e) {
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
function Ns(e) {
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
var dn = Math.random().toString(36).slice(2), Ae = "__reactFiber$" + dn, Qn = "__reactProps$" + dn, Xe = "__reactContainer$" + dn, Ni = "__reactEvents$" + dn, wf = "__reactListeners$" + dn, kf = "__reactHandles$" + dn;
function Nt(e) {
  var t = e[Ae];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Xe] || n[Ae]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ns(e); e !== null; ) {
        if (n = e[Ae]) return n;
        e = Ns(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function nr(e) {
  return e = e[Ae] || e[Xe], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Wt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function dl(e) {
  return e[Qn] || null;
}
var Si = [], Ut = -1;
function gt(e) {
  return { current: e };
}
function D(e) {
  0 > Ut || (e.current = Si[Ut], Si[Ut] = null, Ut--);
}
function I(e, t) {
  Ut++, Si[Ut] = e.current, e.current = t;
}
var ht = {}, oe = gt(ht), pe = gt(!1), Lt = ht;
function nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function he(e) {
  return e = e.childContextTypes, e != null;
}
function Hr() {
  D(pe), D(oe);
}
function Ss(e, t, n) {
  if (oe.current !== ht) throw Error(w(168));
  I(oe, t), I(pe, n);
}
function mu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, ld(e) || "Unknown", l));
  return U({}, n, r);
}
function Qr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ht, Lt = oe.current, I(oe, e), I(pe, pe.current), !0;
}
function Es(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n ? (e = mu(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, D(pe), D(oe), I(oe, e)) : D(pe), I(pe, n);
}
var Ue = null, fl = !1, Wl = !1;
function gu(e) {
  Ue === null ? Ue = [e] : Ue.push(e);
}
function jf(e) {
  fl = !0, gu(e);
}
function xt() {
  if (!Wl && Ue !== null) {
    Wl = !0;
    var e = 0, t = b;
    try {
      var n = Ue;
      for (b = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ue = null, fl = !1;
    } catch (l) {
      throw Ue !== null && (Ue = Ue.slice(e + 1)), Ba(no, xt), l;
    } finally {
      b = t, Wl = !1;
    }
  }
  return null;
}
var Vt = [], Ht = 0, Yr = null, Xr = 0, Ne = [], Se = 0, zt = null, Ve = 1, He = "";
function wt(e, t) {
  Vt[Ht++] = Xr, Vt[Ht++] = Yr, Yr = e, Xr = t;
}
function xu(e, t, n) {
  Ne[Se++] = Ve, Ne[Se++] = He, Ne[Se++] = zt, zt = e;
  var r = Ve;
  e = He;
  var l = 32 - Fe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Fe(t) + l;
  if (30 < i) {
    var s = l - l % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, l -= s, Ve = 1 << 32 - Fe(t) + l | n << l | r, He = i + e;
  } else Ve = 1 << i | n << l | r, He = e;
}
function fo(e) {
  e.return !== null && (wt(e, 1), xu(e, 1, 0));
}
function po(e) {
  for (; e === Yr; ) Yr = Vt[--Ht], Vt[Ht] = null, Xr = Vt[--Ht], Vt[Ht] = null;
  for (; e === zt; ) zt = Ne[--Se], Ne[Se] = null, He = Ne[--Se], Ne[Se] = null, Ve = Ne[--Se], Ne[Se] = null;
}
var ve = null, xe = null, $ = !1, Me = null;
function vu(e, t) {
  var n = Ee(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Cs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ve = e, xe = at(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ve = e, xe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zt !== null ? { id: Ve, overflow: He } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ee(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ve = e, xe = null, !0) : !1;
    default:
      return !1;
  }
}
function Ei(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ci(e) {
  if ($) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Cs(e, t)) {
        if (Ei(e)) throw Error(w(418));
        t = at(n.nextSibling);
        var r = ve;
        t && Cs(e, t) ? vu(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, ve = e);
      }
    } else {
      if (Ei(e)) throw Error(w(418));
      e.flags = e.flags & -4097 | 2, $ = !1, ve = e;
    }
  }
}
function _s(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ve = e;
}
function vr(e) {
  if (e !== ve) return !1;
  if (!$) return _s(e), $ = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ki(e.type, e.memoizedProps)), t && (t = xe)) {
    if (Ei(e)) throw yu(), Error(w(418));
    for (; t; ) vu(e, t), t = at(t.nextSibling);
  }
  if (_s(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = at(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = ve ? at(e.stateNode.nextSibling) : null;
  return !0;
}
function yu() {
  for (var e = xe; e; ) e = at(e.nextSibling);
}
function rn() {
  xe = ve = null, $ = !1;
}
function ho(e) {
  Me === null ? Me = [e] : Me.push(e);
}
var Nf = Ze.ReactCurrentBatchConfig;
function yn(e, t, n) {
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
function yr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(w(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ls(e) {
  var t = e._init;
  return t(e._payload);
}
function wu(e) {
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
    return d = ft(d, c), d.index = 0, d.sibling = null, d;
  }
  function i(d, c, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < c ? (d.flags |= 2, c) : p) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, c, p, x) {
    return c === null || c.tag !== 6 ? (c = Kl(p, d.mode, x), c.return = d, c) : (c = l(c, p), c.return = d, c);
  }
  function u(d, c, p, x) {
    var j = p.type;
    return j === Dt ? g(d, c, p.props.children, x, p.key) : c !== null && (c.elementType === j || typeof j == "object" && j !== null && j.$$typeof === qe && Ls(j) === c.type) ? (x = l(c, p.props), x.ref = yn(d, c, p), x.return = d, x) : (x = br(p.type, p.key, p.props, null, d.mode, x), x.ref = yn(d, c, p), x.return = d, x);
  }
  function f(d, c, p, x) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Gl(p, d.mode, x), c.return = d, c) : (c = l(c, p.children || []), c.return = d, c);
  }
  function g(d, c, p, x, j) {
    return c === null || c.tag !== 7 ? (c = _t(p, d.mode, x, j), c.return = d, c) : (c = l(c, p), c.return = d, c);
  }
  function m(d, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Kl("" + c, d.mode, p), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ar:
          return p = br(c.type, c.key, c.props, null, d.mode, p), p.ref = yn(d, null, c), p.return = d, p;
        case Ot:
          return c = Gl(c, d.mode, p), c.return = d, c;
        case qe:
          var x = c._init;
          return m(d, x(c._payload), p);
      }
      if (Nn(c) || hn(c)) return c = _t(c, d.mode, p, null), c.return = d, c;
      yr(d, c);
    }
    return null;
  }
  function h(d, c, p, x) {
    var j = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return j !== null ? null : a(d, c, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ar:
          return p.key === j ? u(d, c, p, x) : null;
        case Ot:
          return p.key === j ? f(d, c, p, x) : null;
        case qe:
          return j = p._init, h(
            d,
            c,
            j(p._payload),
            x
          );
      }
      if (Nn(p) || hn(p)) return j !== null ? null : g(d, c, p, x, null);
      yr(d, p);
    }
    return null;
  }
  function v(d, c, p, x, j) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return d = d.get(p) || null, a(c, d, "" + x, j);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ar:
          return d = d.get(x.key === null ? p : x.key) || null, u(c, d, x, j);
        case Ot:
          return d = d.get(x.key === null ? p : x.key) || null, f(c, d, x, j);
        case qe:
          var E = x._init;
          return v(d, c, p, E(x._payload), j);
      }
      if (Nn(x) || hn(x)) return d = d.get(p) || null, g(c, d, x, j, null);
      yr(c, x);
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
    if (L === p.length) return n(d, C), $ && wt(d, L), j;
    if (C === null) {
      for (; L < p.length; L++) C = m(d, p[L], x), C !== null && (c = i(C, c, L), E === null ? j = C : E.sibling = C, E = C);
      return $ && wt(d, L), j;
    }
    for (C = r(d, C); L < p.length; L++) A = v(C, d, L, p[L], x), A !== null && (e && A.alternate !== null && C.delete(A.key === null ? L : A.key), c = i(A, c, L), E === null ? j = A : E.sibling = A, E = A);
    return e && C.forEach(function(ze) {
      return t(d, ze);
    }), $ && wt(d, L), j;
  }
  function k(d, c, p, x) {
    var j = hn(p);
    if (typeof j != "function") throw Error(w(150));
    if (p = j.call(p), p == null) throw Error(w(151));
    for (var E = j = null, C = c, L = c = 0, A = null, T = p.next(); C !== null && !T.done; L++, T = p.next()) {
      C.index > L ? (A = C, C = null) : A = C.sibling;
      var ze = h(d, C, T.value, x);
      if (ze === null) {
        C === null && (C = A);
        break;
      }
      e && C && ze.alternate === null && t(d, C), c = i(ze, c, L), E === null ? j = ze : E.sibling = ze, E = ze, C = A;
    }
    if (T.done) return n(
      d,
      C
    ), $ && wt(d, L), j;
    if (C === null) {
      for (; !T.done; L++, T = p.next()) T = m(d, T.value, x), T !== null && (c = i(T, c, L), E === null ? j = T : E.sibling = T, E = T);
      return $ && wt(d, L), j;
    }
    for (C = r(d, C); !T.done; L++, T = p.next()) T = v(C, d, L, T.value, x), T !== null && (e && T.alternate !== null && C.delete(T.key === null ? L : T.key), c = i(T, c, L), E === null ? j = T : E.sibling = T, E = T);
    return e && C.forEach(function(fn) {
      return t(d, fn);
    }), $ && wt(d, L), j;
  }
  function _(d, c, p, x) {
    if (typeof p == "object" && p !== null && p.type === Dt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ar:
          e: {
            for (var j = p.key, E = c; E !== null; ) {
              if (E.key === j) {
                if (j = p.type, j === Dt) {
                  if (E.tag === 7) {
                    n(d, E.sibling), c = l(E, p.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (E.elementType === j || typeof j == "object" && j !== null && j.$$typeof === qe && Ls(j) === E.type) {
                  n(d, E.sibling), c = l(E, p.props), c.ref = yn(d, E, p), c.return = d, d = c;
                  break e;
                }
                n(d, E);
                break;
              } else t(d, E);
              E = E.sibling;
            }
            p.type === Dt ? (c = _t(p.props.children, d.mode, x, p.key), c.return = d, d = c) : (x = br(p.type, p.key, p.props, null, d.mode, x), x.ref = yn(d, c, p), x.return = d, d = x);
          }
          return s(d);
        case Ot:
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
            c = Gl(p, d.mode, x), c.return = d, d = c;
          }
          return s(d);
        case qe:
          return E = p._init, _(d, c, E(p._payload), x);
      }
      if (Nn(p)) return y(d, c, p, x);
      if (hn(p)) return k(d, c, p, x);
      yr(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(d, c.sibling), c = l(c, p), c.return = d, d = c) : (n(d, c), c = Kl(p, d.mode, x), c.return = d, d = c), s(d)) : n(d, c);
  }
  return _;
}
var ln = wu(!0), ku = wu(!1), Kr = gt(null), Gr = null, Qt = null, mo = null;
function go() {
  mo = Qt = Gr = null;
}
function xo(e) {
  var t = Kr.current;
  D(Kr), e._currentValue = t;
}
function _i(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function qt(e, t) {
  Gr = e, mo = Qt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null);
}
function _e(e) {
  var t = e._currentValue;
  if (mo !== e) if (e = { context: e, memoizedValue: t, next: null }, Qt === null) {
    if (Gr === null) throw Error(w(308));
    Qt = e, Gr.dependencies = { lanes: 0, firstContext: e };
  } else Qt = Qt.next = e;
  return t;
}
var St = null;
function vo(e) {
  St === null ? St = [e] : St.push(e);
}
function ju(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, vo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ke(e, r);
}
function Ke(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function yo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Nu(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Qe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ke(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, vo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ke(e, n);
}
function zr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ro(e, n);
  }
}
function zs(e, t) {
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
function Zr(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
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
              et = !0;
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
    Tt |= s, e.lanes = s, e.memoizedState = m;
  }
}
function Ps(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(w(191, l));
      l.call(r);
    }
  }
}
var rr = {}, Be = gt(rr), Yn = gt(rr), Xn = gt(rr);
function Et(e) {
  if (e === rr) throw Error(w(174));
  return e;
}
function wo(e, t) {
  switch (I(Xn, t), I(Yn, e), I(Be, rr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : si(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = si(t, e);
  }
  D(Be), I(Be, t);
}
function on() {
  D(Be), D(Yn), D(Xn);
}
function Su(e) {
  Et(Xn.current);
  var t = Et(Be.current), n = si(t, e.type);
  t !== n && (I(Yn, e), I(Be, n));
}
function ko(e) {
  Yn.current === e && (D(Be), D(Yn));
}
var B = gt(0);
function Jr(e) {
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
var Ul = [];
function jo() {
  for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var Pr = Ze.ReactCurrentDispatcher, Vl = Ze.ReactCurrentBatchConfig, Pt = 0, W = null, X = null, Z = null, qr = !1, Rn = !1, Kn = 0, Sf = 0;
function re() {
  throw Error(w(321));
}
function No(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ie(e[n], t[n])) return !1;
  return !0;
}
function So(e, t, n, r, l, i) {
  if (Pt = i, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Pr.current = e === null || e.memoizedState === null ? Lf : zf, e = n(r, l), Rn) {
    i = 0;
    do {
      if (Rn = !1, Kn = 0, 25 <= i) throw Error(w(301));
      i += 1, Z = X = null, t.updateQueue = null, Pr.current = Pf, e = n(r, l);
    } while (Rn);
  }
  if (Pr.current = el, t = X !== null && X.next !== null, Pt = 0, Z = X = W = null, qr = !1, t) throw Error(w(300));
  return e;
}
function Eo() {
  var e = Kn !== 0;
  return Kn = 0, e;
}
function De() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? W.memoizedState = Z = e : Z = Z.next = e, Z;
}
function Le() {
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
function Gn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Hl(e) {
  var t = Le(), n = t.queue;
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
      if ((Pt & g) === g) u !== null && (u = u.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var m = {
          lane: g,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        u === null ? (a = u = m, s = r) : u = u.next = m, W.lanes |= g, Tt |= g;
      }
      f = f.next;
    } while (f !== null && f !== i);
    u === null ? s = r : u.next = a, Ie(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, W.lanes |= i, Tt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ql(e) {
  var t = Le(), n = t.queue;
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
function Eu() {
}
function Cu(e, t) {
  var n = W, r = Le(), l = t(), i = !Ie(r.memoizedState, l);
  if (i && (r.memoizedState = l, fe = !0), r = r.queue, Co(zu.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Z !== null && Z.memoizedState.tag & 1) {
    if (n.flags |= 2048, Zn(9, Lu.bind(null, n, r, l, t), void 0, null), J === null) throw Error(w(349));
    Pt & 30 || _u(n, t, l);
  }
  return l;
}
function _u(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = W.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, W.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Lu(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Pu(t) && Tu(e);
}
function zu(e, t, n) {
  return n(function() {
    Pu(t) && Tu(e);
  });
}
function Pu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function Tu(e) {
  var t = Ke(e, 1);
  t !== null && be(t, e, 1, -1);
}
function Ts(e) {
  var t = De();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gn, lastRenderedState: e }, t.queue = e, e = e.dispatch = _f.bind(null, W, e), [t.memoizedState, e];
}
function Zn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = W.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, W.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ru() {
  return Le().memoizedState;
}
function Tr(e, t, n, r) {
  var l = De();
  W.flags |= e, l.memoizedState = Zn(1 | t, n, void 0, r === void 0 ? null : r);
}
function pl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var s = X.memoizedState;
    if (i = s.destroy, r !== null && No(r, s.deps)) {
      l.memoizedState = Zn(t, n, i, r);
      return;
    }
  }
  W.flags |= e, l.memoizedState = Zn(1 | t, n, i, r);
}
function Rs(e, t) {
  return Tr(8390656, 8, e, t);
}
function Co(e, t) {
  return pl(2048, 8, e, t);
}
function Mu(e, t) {
  return pl(4, 2, e, t);
}
function Fu(e, t) {
  return pl(4, 4, e, t);
}
function bu(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Iu(e, t, n) {
  return n = n != null ? n.concat([e]) : null, pl(4, 4, bu.bind(null, t, e), n);
}
function _o() {
}
function Ou(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && No(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Du(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && No(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Au(e, t, n) {
  return Pt & 21 ? (Ie(n, t) || (n = Va(), W.lanes |= n, Tt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n);
}
function Ef(e, t) {
  var n = b;
  b = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), t();
  } finally {
    b = n, Vl.transition = r;
  }
}
function $u() {
  return Le().memoizedState;
}
function Cf(e, t, n) {
  var r = dt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Bu(e)) Wu(t, n);
  else if (n = ju(e, t, n, r), n !== null) {
    var l = ae();
    be(n, e, r, l), Uu(n, t, r);
  }
}
function _f(e, t, n) {
  var r = dt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bu(e)) Wu(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, a = i(s, n);
      if (l.hasEagerState = !0, l.eagerState = a, Ie(a, s)) {
        var u = t.interleaved;
        u === null ? (l.next = l, vo(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = ju(e, t, l, r), n !== null && (l = ae(), be(n, e, r, l), Uu(n, t, r));
  }
}
function Bu(e) {
  var t = e.alternate;
  return e === W || t !== null && t === W;
}
function Wu(e, t) {
  Rn = qr = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Uu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ro(e, n);
  }
}
var el = { readContext: _e, useCallback: re, useContext: re, useEffect: re, useImperativeHandle: re, useInsertionEffect: re, useLayoutEffect: re, useMemo: re, useReducer: re, useRef: re, useState: re, useDebugValue: re, useDeferredValue: re, useTransition: re, useMutableSource: re, useSyncExternalStore: re, useId: re, unstable_isNewReconciler: !1 }, Lf = { readContext: _e, useCallback: function(e, t) {
  return De().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: _e, useEffect: Rs, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Tr(
    4194308,
    4,
    bu.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Tr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Tr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = De();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = De();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Cf.bind(null, W, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = De();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ts, useDebugValue: _o, useDeferredValue: function(e) {
  return De().memoizedState = e;
}, useTransition: function() {
  var e = Ts(!1), t = e[0];
  return e = Ef.bind(null, e[1]), De().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = W, l = De();
  if ($) {
    if (n === void 0) throw Error(w(407));
    n = n();
  } else {
    if (n = t(), J === null) throw Error(w(349));
    Pt & 30 || _u(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Rs(zu.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Zn(9, Lu.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = De(), t = J.identifierPrefix;
  if ($) {
    var n = He, r = Ve;
    n = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Sf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, zf = {
  readContext: _e,
  useCallback: Ou,
  useContext: _e,
  useEffect: Co,
  useImperativeHandle: Iu,
  useInsertionEffect: Mu,
  useLayoutEffect: Fu,
  useMemo: Du,
  useReducer: Hl,
  useRef: Ru,
  useState: function() {
    return Hl(Gn);
  },
  useDebugValue: _o,
  useDeferredValue: function(e) {
    var t = Le();
    return Au(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Hl(Gn)[0], t = Le().memoizedState;
    return [e, t];
  },
  useMutableSource: Eu,
  useSyncExternalStore: Cu,
  useId: $u,
  unstable_isNewReconciler: !1
}, Pf = { readContext: _e, useCallback: Ou, useContext: _e, useEffect: Co, useImperativeHandle: Iu, useInsertionEffect: Mu, useLayoutEffect: Fu, useMemo: Du, useReducer: Ql, useRef: Ru, useState: function() {
  return Ql(Gn);
}, useDebugValue: _o, useDeferredValue: function(e) {
  var t = Le();
  return X === null ? t.memoizedState = e : Au(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Ql(Gn)[0], t = Le().memoizedState;
  return [e, t];
}, useMutableSource: Eu, useSyncExternalStore: Cu, useId: $u, unstable_isNewReconciler: !1 };
function Te(e, t) {
  if (e && e.defaultProps) {
    t = U({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Li(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : U({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ft(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = dt(e), i = Qe(r, l);
  i.payload = t, n != null && (i.callback = n), t = ut(e, i, l), t !== null && (be(t, e, l, r), zr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = dt(e), i = Qe(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ut(e, i, l), t !== null && (be(t, e, l, r), zr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ae(), r = dt(e), l = Qe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = ut(e, l, r), t !== null && (be(t, e, r, n), zr(t, e, r));
} };
function Ms(e, t, n, r, l, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Un(n, r) || !Un(l, i) : !0;
}
function Vu(e, t, n) {
  var r = !1, l = ht, i = t.contextType;
  return typeof i == "object" && i !== null ? i = _e(i) : (l = he(t) ? Lt : oe.current, r = t.contextTypes, i = (r = r != null) ? nn(e, l) : ht), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Fs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function zi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, yo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = _e(i) : (i = he(t) ? Lt : oe.current, l.context = nn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Li(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && hl.enqueueReplaceState(l, l.state, null), Zr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function sn(e, t) {
  try {
    var n = "", r = t;
    do
      n += rd(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Yl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Tf = typeof WeakMap == "function" ? WeakMap : Map;
function Hu(e, t, n) {
  n = Qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    nl || (nl = !0, $i = r), Pi(e, t);
  }, n;
}
function Qu(e, t, n) {
  n = Qe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Pi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Pi(e, t), typeof r != "function" && (ct === null ? ct = /* @__PURE__ */ new Set([this]) : ct.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function bs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Tf();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Hf.bind(null, e, t, n), t.then(e, e));
}
function Is(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Os(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1), t.tag = 2, ut(n, t, 1))), n.lanes |= 1), e);
}
var Rf = Ze.ReactCurrentOwner, fe = !1;
function se(e, t, n, r) {
  t.child = e === null ? ku(t, null, n, r) : ln(t, e.child, n, r);
}
function Ds(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return qt(t, l), r = So(e, t, n, r, i, l), n = Eo(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : ($ && n && fo(t), t.flags |= 1, se(e, t, r, l), t.child);
}
function As(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !bo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Yu(e, t, i, r, l)) : (e = br(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Un, n(s, r) && e.ref === t.ref) return Ge(e, t, l);
  }
  return t.flags |= 1, e = ft(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Yu(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Un(i, r) && e.ref === t.ref) if (fe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
    else return t.lanes = e.lanes, Ge(e, t, l);
  }
  return Ti(e, t, n, r, l);
}
function Xu(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, I(Xt, ge), ge |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, I(Xt, ge), ge |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, I(Xt, ge), ge |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, I(Xt, ge), ge |= r;
  return se(e, t, l, n), t.child;
}
function Ku(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ti(e, t, n, r, l) {
  var i = he(n) ? Lt : oe.current;
  return i = nn(t, i), qt(t, l), n = So(e, t, n, r, i, l), r = Eo(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : ($ && r && fo(t), t.flags |= 1, se(e, t, n, l), t.child);
}
function $s(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    Qr(t);
  } else i = !1;
  if (qt(t, l), t.stateNode === null) Rr(e, t), Vu(t, n, r), zi(t, n, r, l), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var u = s.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = _e(f) : (f = he(n) ? Lt : oe.current, f = nn(t, f));
    var g = n.getDerivedStateFromProps, m = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || u !== f) && Fs(t, s, r, f), et = !1;
    var h = t.memoizedState;
    s.state = h, Zr(t, r, s, l), u = t.memoizedState, a !== r || h !== u || pe.current || et ? (typeof g == "function" && (Li(t, n, g, r), u = t.memoizedState), (a = et || Ms(t, n, a, r, h, u, f)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), s.props = r, s.state = u, s.context = f, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Nu(e, t), a = t.memoizedProps, f = t.type === t.elementType ? a : Te(t.type, a), s.props = f, m = t.pendingProps, h = s.context, u = n.contextType, typeof u == "object" && u !== null ? u = _e(u) : (u = he(n) ? Lt : oe.current, u = nn(t, u));
    var v = n.getDerivedStateFromProps;
    (g = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== m || h !== u) && Fs(t, s, r, u), et = !1, h = t.memoizedState, s.state = h, Zr(t, r, s, l);
    var y = t.memoizedState;
    a !== m || h !== y || pe.current || et ? (typeof v == "function" && (Li(t, n, v, r), y = t.memoizedState), (f = et || Ms(t, n, f, r, h, y, u) || !1) ? (g || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, u), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, u)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = u, r = f) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ri(e, t, n, r, i, l);
}
function Ri(e, t, n, r, l, i) {
  Ku(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && Es(t, n, !1), Ge(e, t, i);
  r = t.stateNode, Rf.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = ln(t, e.child, null, i), t.child = ln(t, null, a, i)) : se(e, t, a, i), t.memoizedState = r.state, l && Es(t, n, !0), t.child;
}
function Gu(e) {
  var t = e.stateNode;
  t.pendingContext ? Ss(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ss(e, t.context, !1), wo(e, t.containerInfo);
}
function Bs(e, t, n, r, l) {
  return rn(), ho(l), t.flags |= 256, se(e, t, n, r), t.child;
}
var Mi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zu(e, t, n) {
  var r = t.pendingProps, l = B.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), I(B, l & 1), e === null)
    return Ci(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = xl(s, r, 0, null), e = _t(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Fi(n), t.memoizedState = Mi, e) : Lo(t, s));
  if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return Mf(e, t, s, r, a, l, n);
  if (i) {
    i = r.fallback, s = t.mode, l = e.child, a = l.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = ft(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? i = ft(a, i) : (i = _t(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Fi(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Mi, r;
  }
  return i = e.child, e = i.sibling, r = ft(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Lo(e, t) {
  return t = xl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function wr(e, t, n, r) {
  return r !== null && ho(r), ln(t, e.child, null, n), e = Lo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Mf(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Yl(Error(w(422))), wr(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = xl({ mode: "visible", children: r.children }, l, 0, null), i = _t(i, l, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ln(t, e.child, null, s), t.child.memoizedState = Fi(s), t.memoizedState = Mi, i);
  if (!(t.mode & 1)) return wr(e, t, s, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(w(419)), r = Yl(i, r, void 0), wr(e, t, s, r);
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
      l = l & (r.suspendedLanes | s) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ke(e, l), be(r, e, l, -1));
    }
    return Fo(), r = Yl(Error(w(421))), wr(e, t, s, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Qf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, xe = at(l.nextSibling), ve = t, $ = !0, Me = null, e !== null && (Ne[Se++] = Ve, Ne[Se++] = He, Ne[Se++] = zt, Ve = e.id, He = e.overflow, zt = t), t = Lo(t, r.children), t.flags |= 4096, t);
}
function Ws(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _i(e.return, t, n);
}
function Xl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function Ju(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (se(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ws(e, n, t);
      else if (e.tag === 19) Ws(e, n, t);
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
  if (I(B, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Jr(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Xl(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && Jr(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Xl(t, !0, n, null, i);
      break;
    case "together":
      Xl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Rr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ge(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Tt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (e = t.child, n = ft(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = ft(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ff(e, t, n) {
  switch (t.tag) {
    case 3:
      Gu(t), rn();
      break;
    case 5:
      Su(t);
      break;
    case 1:
      he(t.type) && Qr(t);
      break;
    case 4:
      wo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      I(Kr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (I(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Zu(e, t, n) : (I(B, B.current & 1), e = Ge(e, t, n), e !== null ? e.sibling : null);
      I(B, B.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ju(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), I(B, B.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Xu(e, t, n);
  }
  return Ge(e, t, n);
}
var qu, bi, ec, tc;
qu = function(e, t) {
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
bi = function() {
};
ec = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Et(Be.current);
    var i = null;
    switch (n) {
      case "input":
        l = ri(e, l), r = ri(e, r), i = [];
        break;
      case "select":
        l = U({}, l, { value: void 0 }), r = U({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = oi(e, l), r = oi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vr);
    }
    ai(n, r);
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
tc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wn(e, t) {
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
function bf(e, t, n) {
  var r = t.pendingProps;
  switch (po(t), t.tag) {
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
      return he(t.type) && Hr(), le(t), null;
    case 3:
      return r = t.stateNode, on(), D(pe), D(oe), jo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (vr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (Ui(Me), Me = null))), bi(e, t), le(t), null;
    case 5:
      ko(t);
      var l = Et(Xn.current);
      if (n = t.type, e !== null && t.stateNode != null) ec(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return le(t), null;
        }
        if (e = Et(Be.current), vr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ae] = t, r[Qn] = i, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < En.length; l++) O(En[l], r);
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
              Zo(r, i), O("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, O("invalid", r);
              break;
            case "textarea":
              qo(r, i), O("invalid", r);
          }
          ai(n, i), l = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var a = i[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && xr(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && xr(
              r.textContent,
              a,
              e
            ), l = ["children", "" + a]) : In.hasOwnProperty(s) && a != null && s === "onScroll" && O("scroll", r);
          }
          switch (n) {
            case "input":
              ur(r), Jo(r, i, !0);
              break;
            case "textarea":
              ur(r), es(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Vr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = za(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Ae] = t, e[Qn] = r, qu(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = ui(n, r), n) {
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
                for (l = 0; l < En.length; l++) O(En[l], e);
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
                Zo(e, r), l = ri(e, r), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = U({}, r, { value: void 0 }), O("invalid", e);
                break;
              case "textarea":
                qo(e, r), l = oi(e, r), O("invalid", e);
                break;
              default:
                l = r;
            }
            ai(n, l), a = l;
            for (i in a) if (a.hasOwnProperty(i)) {
              var u = a[i];
              i === "style" ? Ra(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Pa(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && On(e, u) : typeof u == "number" && On(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (In.hasOwnProperty(i) ? u != null && i === "onScroll" && O("scroll", e) : u != null && Zi(e, i, u, s));
            }
            switch (n) {
              case "input":
                ur(e), Jo(e, r, !1);
                break;
              case "textarea":
                ur(e), es(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Kt(e, !!r.multiple, i, !1) : r.defaultValue != null && Kt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Vr);
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
      if (e && t.stateNode != null) tc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (n = Et(Xn.current), Et(Be.current), vr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ae] = t, (i = r.nodeValue !== n) && (e = ve, e !== null)) switch (e.tag) {
            case 3:
              xr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && xr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ae] = t, t.stateNode = r;
      }
      return le(t), null;
    case 13:
      if (D(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && xe !== null && t.mode & 1 && !(t.flags & 128)) yu(), rn(), t.flags |= 98560, i = !1;
        else if (i = vr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(w(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(w(317));
            i[Ae] = t;
          } else rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          le(t), i = !1;
        } else Me !== null && (Ui(Me), Me = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? K === 0 && (K = 3) : Fo())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
    case 4:
      return on(), bi(e, t), e === null && Vn(t.stateNode.containerInfo), le(t), null;
    case 10:
      return xo(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Hr(), le(t), null;
    case 19:
      if (D(B), i = t.memoizedState, i === null) return le(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) wn(i, !1);
      else {
        if (K !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Jr(e), s !== null) {
            for (t.flags |= 128, wn(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return I(B, B.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Q() > an && (t.flags |= 128, r = !0, wn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Jr(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wn(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !$) return le(t), null;
        } else 2 * Q() - i.renderingStartTime > an && n !== 1073741824 && (t.flags |= 128, r = !0, wn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Q(), t.sibling = null, n = B.current, I(B, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
    case 22:
    case 23:
      return Mo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function If(e, t) {
  switch (po(t), t.tag) {
    case 1:
      return he(t.type) && Hr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return on(), D(pe), D(oe), jo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ko(t), null;
    case 13:
      if (D(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(w(340));
        rn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return D(B), null;
    case 4:
      return on(), null;
    case 10:
      return xo(t.type._context), null;
    case 22:
    case 23:
      return Mo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var kr = !1, ie = !1, Of = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function Yt(e, t) {
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
var Us = !1;
function Df(e, t) {
  if (yi = Br, e = ou(), co(e)) {
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
  for (wi = { focusedElem: e, selectionRange: n }, Br = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
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
            var k = y.memoizedProps, _ = y.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Te(t.type, k), _);
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
  return y = Us, Us = !1, y;
}
function Mn(e, t, n) {
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
function ml(e, t) {
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
function Oi(e) {
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
function nc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, nc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ae], delete t[Qn], delete t[Ni], delete t[wf], delete t[kf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function rc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vs(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || rc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Di(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Vr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Di(e, t, n), e = e.sibling; e !== null; ) Di(e, t, n), e = e.sibling;
}
function Ai(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ai(e, t, n), e = e.sibling; e !== null; ) Ai(e, t, n), e = e.sibling;
}
var ee = null, Re = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) lc(e, t, n), n = n.sibling;
}
function lc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function") try {
    $e.onCommitFiberUnmount(sl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ie || Yt(n, t);
    case 6:
      var r = ee, l = Re;
      ee = null, Je(e, t, n), ee = r, Re = l, ee !== null && (Re ? (e = ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null && (Re ? (e = ee, n = n.stateNode, e.nodeType === 8 ? Bl(e.parentNode, n) : e.nodeType === 1 && Bl(e, n), Bn(e)) : Bl(ee, n.stateNode));
      break;
    case 4:
      r = ee, l = Re, ee = n.stateNode.containerInfo, Re = !0, Je(e, t, n), ee = r, Re = l;
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
      Je(e, t, n);
      break;
    case 1:
      if (!ie && (Yt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        V(n, t, a);
      }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ie = (r = ie) || n.memoizedState !== null, Je(e, t, n), ie = r) : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Hs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Of()), t.forEach(function(r) {
      var l = Yf.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            ee = a.stateNode, Re = !1;
            break e;
          case 3:
            ee = a.stateNode.containerInfo, Re = !0;
            break e;
          case 4:
            ee = a.stateNode.containerInfo, Re = !0;
            break e;
        }
        a = a.return;
      }
      if (ee === null) throw Error(w(160));
      lc(i, s, l), ee = null, Re = !1;
      var u = l.alternate;
      u !== null && (u.return = null), l.return = null;
    } catch (f) {
      V(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ic(t, e), t = t.sibling;
}
function ic(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Pe(t, e), Oe(e), r & 4) {
        try {
          Mn(3, e, e.return), ml(3, e);
        } catch (k) {
          V(e, e.return, k);
        }
        try {
          Mn(5, e, e.return);
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 1:
      Pe(t, e), Oe(e), r & 512 && n !== null && Yt(n, n.return);
      break;
    case 5:
      if (Pe(t, e), Oe(e), r & 512 && n !== null && Yt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          On(l, "");
        } catch (k) {
          V(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          a === "input" && i.type === "radio" && i.name != null && _a(l, i), ui(a, s);
          var f = ui(a, i);
          for (s = 0; s < u.length; s += 2) {
            var g = u[s], m = u[s + 1];
            g === "style" ? Ra(l, m) : g === "dangerouslySetInnerHTML" ? Pa(l, m) : g === "children" ? On(l, m) : Zi(l, g, m, f);
          }
          switch (a) {
            case "input":
              li(l, i);
              break;
            case "textarea":
              La(l, i);
              break;
            case "select":
              var h = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? Kt(l, !!i.multiple, v, !1) : h !== !!i.multiple && (i.defaultValue != null ? Kt(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Kt(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Qn] = i;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Pe(t, e), Oe(e), r & 4) {
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
      if (Pe(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Bn(t.containerInfo);
      } catch (k) {
        V(e, e.return, k);
      }
      break;
    case 4:
      Pe(t, e), Oe(e);
      break;
    case 13:
      Pe(t, e), Oe(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (To = Q())), r & 4 && Hs(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (ie = (f = ie) || g, Pe(t, e), ie = f) : Pe(t, e), Oe(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !g && e.mode & 1) for (N = e, g = e.child; g !== null; ) {
          for (m = N = g; N !== null; ) {
            switch (h = N, v = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Mn(4, h, h.return);
                break;
              case 1:
                Yt(h, h.return);
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
                Yt(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  Ys(m);
                  continue;
                }
            }
            v !== null ? (v.return = h, N = v) : Ys(m);
          }
          g = g.sibling;
        }
        e: for (g = null, m = e; ; ) {
          if (m.tag === 5) {
            if (g === null) {
              g = m;
              try {
                l = m.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = m.stateNode, u = m.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null, a.style.display = Ta("display", s));
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
      Pe(t, e), Oe(e), r & 4 && Hs(e);
      break;
    case 21:
      break;
    default:
      Pe(
        t,
        e
      ), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rc(n)) {
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
          r.flags & 32 && (On(l, ""), r.flags &= -33);
          var i = Vs(e);
          Ai(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = Vs(e);
          Di(e, a, s);
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
function Af(e, t, n) {
  N = e, oc(e);
}
function oc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || kr;
      if (!s) {
        var a = l.alternate, u = a !== null && a.memoizedState !== null || ie;
        a = kr;
        var f = ie;
        if (kr = s, (ie = u) && !f) for (N = l; N !== null; ) s = N, u = s.child, s.tag === 22 && s.memoizedState !== null ? Xs(l) : u !== null ? (u.return = s, N = u) : Xs(l);
        for (; i !== null; ) N = i, oc(i), i = i.sibling;
        N = l, kr = a, ie = f;
      }
      Qs(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, N = i) : Qs(e);
  }
}
function Qs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ie || ml(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ie) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Te(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Ps(t, i, r);
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
              Ps(t, s, n);
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
                  m !== null && Bn(m);
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
        ie || t.flags & 512 && Oi(t);
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
function Ys(e) {
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
function Xs(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ml(4, t);
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
            Oi(t);
          } catch (u) {
            V(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Oi(t);
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
var $f = Math.ceil, tl = Ze.ReactCurrentDispatcher, zo = Ze.ReactCurrentOwner, Ce = Ze.ReactCurrentBatchConfig, F = 0, J = null, Y = null, te = 0, ge = 0, Xt = gt(0), K = 0, Jn = null, Tt = 0, gl = 0, Po = 0, Fn = null, de = null, To = 0, an = 1 / 0, We = null, nl = !1, $i = null, ct = null, jr = !1, lt = null, rl = 0, bn = 0, Bi = null, Mr = -1, Fr = 0;
function ae() {
  return F & 6 ? Q() : Mr !== -1 ? Mr : Mr = Q();
}
function dt(e) {
  return e.mode & 1 ? F & 2 && te !== 0 ? te & -te : Nf.transition !== null ? (Fr === 0 && (Fr = Va()), Fr) : (e = b, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Za(e.type)), e) : 1;
}
function be(e, t, n, r) {
  if (50 < bn) throw bn = 0, Bi = null, Error(w(185));
  er(e, n, r), (!(F & 2) || e !== J) && (e === J && (!(F & 2) && (gl |= n), K === 4 && nt(e, te)), me(e, r), n === 1 && F === 0 && !(t.mode & 1) && (an = Q() + 500, fl && xt()));
}
function me(e, t) {
  var n = e.callbackNode;
  jd(e, t);
  var r = $r(e, e === J ? te : 0);
  if (r === 0) n !== null && rs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && rs(n), t === 1) e.tag === 0 ? jf(Ks.bind(null, e)) : gu(Ks.bind(null, e)), vf(function() {
      !(F & 6) && xt();
    }), n = null;
    else {
      switch (Ha(r)) {
        case 1:
          n = no;
          break;
        case 4:
          n = Wa;
          break;
        case 16:
          n = Ar;
          break;
        case 536870912:
          n = Ua;
          break;
        default:
          n = Ar;
      }
      n = hc(n, sc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function sc(e, t) {
  if (Mr = -1, Fr = 0, F & 6) throw Error(w(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = $r(e, e === J ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ll(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var i = uc();
    (J !== e || te !== t) && (We = null, an = Q() + 500, Ct(e, t));
    do
      try {
        Uf();
        break;
      } catch (a) {
        ac(e, a);
      }
    while (!0);
    go(), tl.current = i, F = l, Y !== null ? t = 0 : (J = null, te = 0, t = K);
  }
  if (t !== 0) {
    if (t === 2 && (l = hi(e), l !== 0 && (r = l, t = Wi(e, l))), t === 1) throw n = Jn, Ct(e, 0), nt(e, r), me(e, Q()), n;
    if (t === 6) nt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Bf(l) && (t = ll(e, r), t === 2 && (i = hi(e), i !== 0 && (r = i, t = Wi(e, i))), t === 1)) throw n = Jn, Ct(e, 0), nt(e, r), me(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          kt(e, de, We);
          break;
        case 3:
          if (nt(e, r), (r & 130023424) === r && (t = To + 500 - Q(), 10 < t)) {
            if ($r(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ae(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = ji(kt.bind(null, e, de, We), t);
            break;
          }
          kt(e, de, We);
          break;
        case 4:
          if (nt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - Fe(r);
            i = 1 << s, s = t[s], s > l && (l = s), r &= ~i;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $f(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ji(kt.bind(null, e, de, We), r);
            break;
          }
          kt(e, de, We);
          break;
        case 5:
          kt(e, de, We);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return me(e, Q()), e.callbackNode === n ? sc.bind(null, e) : null;
}
function Wi(e, t) {
  var n = Fn;
  return e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256), e = ll(e, t), e !== 2 && (t = de, de = n, t !== null && Ui(t)), e;
}
function Ui(e) {
  de === null ? de = e : de.push.apply(de, e);
}
function Bf(e) {
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
function nt(e, t) {
  for (t &= ~Po, t &= ~gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Fe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ks(e) {
  if (F & 6) throw Error(w(327));
  en();
  var t = $r(e, 0);
  if (!(t & 1)) return me(e, Q()), null;
  var n = ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hi(e);
    r !== 0 && (t = r, n = Wi(e, r));
  }
  if (n === 1) throw n = Jn, Ct(e, 0), nt(e, t), me(e, Q()), n;
  if (n === 6) throw Error(w(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, kt(e, de, We), me(e, Q()), null;
}
function Ro(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (an = Q() + 500, fl && xt());
  }
}
function Rt(e) {
  lt !== null && lt.tag === 0 && !(F & 6) && en();
  var t = F;
  F |= 1;
  var n = Ce.transition, r = b;
  try {
    if (Ce.transition = null, b = 1, e) return e();
  } finally {
    b = r, Ce.transition = n, F = t, !(F & 6) && xt();
  }
}
function Mo() {
  ge = Xt.current, D(Xt);
}
function Ct(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, xf(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (po(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Hr();
        break;
      case 3:
        on(), D(pe), D(oe), jo();
        break;
      case 5:
        ko(r);
        break;
      case 4:
        on();
        break;
      case 13:
        D(B);
        break;
      case 19:
        D(B);
        break;
      case 10:
        xo(r.type._context);
        break;
      case 22:
      case 23:
        Mo();
    }
    n = n.return;
  }
  if (J = e, Y = e = ft(e.current, null), te = ge = t, K = 0, Jn = null, Po = gl = Tt = 0, de = Fn = null, St !== null) {
    for (t = 0; t < St.length; t++) if (n = St[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = l, r.next = s;
      }
      n.pending = r;
    }
    St = null;
  }
  return e;
}
function ac(e, t) {
  do {
    var n = Y;
    try {
      if (go(), Pr.current = el, qr) {
        for (var r = W.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        qr = !1;
      }
      if (Pt = 0, Z = X = W = null, Rn = !1, Kn = 0, zo.current = null, n === null || n.return === null) {
        K = 1, Jn = t, Y = null;
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
            v.flags &= -257, Os(v, s, a, i, t), v.mode & 1 && bs(i, f, t), t = v, u = f;
            var y = t.updateQueue;
            if (y === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(u), t.updateQueue = k;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              bs(i, f, t), Fo();
              break e;
            }
            u = Error(w(426));
          }
        } else if ($ && a.mode & 1) {
          var _ = Is(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), Os(_, s, a, i, t), ho(sn(u, a));
            break e;
          }
        }
        i = u = sn(u, a), K !== 4 && (K = 2), Fn === null ? Fn = [i] : Fn.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Hu(i, u, t);
              zs(i, d);
              break e;
            case 1:
              a = u;
              var c = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ct === null || !ct.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var x = Qu(i, a, t);
                zs(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      dc(n);
    } catch (j) {
      t = j, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function uc() {
  var e = tl.current;
  return tl.current = el, e === null ? el : e;
}
function Fo() {
  (K === 0 || K === 3 || K === 2) && (K = 4), J === null || !(Tt & 268435455) && !(gl & 268435455) || nt(J, te);
}
function ll(e, t) {
  var n = F;
  F |= 2;
  var r = uc();
  (J !== e || te !== t) && (We = null, Ct(e, t));
  do
    try {
      Wf();
      break;
    } catch (l) {
      ac(e, l);
    }
  while (!0);
  if (go(), F = n, tl.current = r, Y !== null) throw Error(w(261));
  return J = null, te = 0, K;
}
function Wf() {
  for (; Y !== null; ) cc(Y);
}
function Uf() {
  for (; Y !== null && !pd(); ) cc(Y);
}
function cc(e) {
  var t = pc(e.alternate, e, ge);
  e.memoizedProps = e.pendingProps, t === null ? dc(e) : Y = t, zo.current = null;
}
function dc(e) {
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
    } else if (n = bf(n, t, ge), n !== null) {
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
function kt(e, t, n) {
  var r = b, l = Ce.transition;
  try {
    Ce.transition = null, b = 1, Vf(e, t, n, r);
  } finally {
    Ce.transition = l, b = r;
  }
  return null;
}
function Vf(e, t, n, r) {
  do
    en();
  while (lt !== null);
  if (F & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(w(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Nd(e, i), e === J && (Y = J = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jr || (jr = !0, hc(Ar, function() {
    return en(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ce.transition, Ce.transition = null;
    var s = b;
    b = 1;
    var a = F;
    F |= 4, zo.current = null, Df(e, n), ic(n, e), cf(wi), Br = !!yi, wi = yi = null, e.current = n, Af(n), hd(), F = a, b = s, Ce.transition = i;
  } else e.current = n;
  if (jr && (jr = !1, lt = e, rl = l), i = e.pendingLanes, i === 0 && (ct = null), xd(n.stateNode), me(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (nl) throw nl = !1, e = $i, $i = null, e;
  return rl & 1 && e.tag !== 0 && en(), i = e.pendingLanes, i & 1 ? e === Bi ? bn++ : (bn = 0, Bi = e) : bn = 0, xt(), null;
}
function en() {
  if (lt !== null) {
    var e = Ha(rl), t = Ce.transition, n = b;
    try {
      if (Ce.transition = null, b = 16 > e ? 16 : e, lt === null) var r = !1;
      else {
        if (e = lt, lt = null, rl = 0, F & 6) throw Error(w(331));
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
                      Mn(8, g, i);
                  }
                  var m = g.child;
                  if (m !== null) m.return = g, N = m;
                  else for (; N !== null; ) {
                    g = N;
                    var h = g.sibling, v = g.return;
                    if (nc(g), g === f) {
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
                Mn(9, i, i.return);
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
                  ml(9, a);
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
        if (F = l, xt(), $e && typeof $e.onPostCommitFiberRoot == "function") try {
          $e.onPostCommitFiberRoot(sl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      b = n, Ce.transition = t;
    }
  }
  return !1;
}
function Gs(e, t, n) {
  t = sn(n, t), t = Hu(e, t, 1), e = ut(e, t, 1), t = ae(), e !== null && (er(e, 1, t), me(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) Gs(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Gs(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ct === null || !ct.has(r))) {
        e = sn(n, e), e = Qu(t, e, 1), t = ut(t, e, 1), e = ae(), t !== null && (er(t, 1, e), me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Hf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ae(), e.pingedLanes |= e.suspendedLanes & n, J === e && (te & n) === n && (K === 4 || K === 3 && (te & 130023424) === te && 500 > Q() - To ? Ct(e, 0) : Po |= n), me(e, t);
}
function fc(e, t) {
  t === 0 && (e.mode & 1 ? (t = fr, fr <<= 1, !(fr & 130023424) && (fr = 4194304)) : t = 1);
  var n = ae();
  e = Ke(e, t), e !== null && (er(e, t, n), me(e, n));
}
function Qf(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), fc(e, n);
}
function Yf(e, t) {
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
  r !== null && r.delete(t), fc(e, n);
}
var pc;
pc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, Ff(e, t, n);
    fe = !!(e.flags & 131072);
  }
  else fe = !1, $ && t.flags & 1048576 && xu(t, Xr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Rr(e, t), e = t.pendingProps;
      var l = nn(t, oe.current);
      qt(t, n), l = So(null, t, r, e, l, n);
      var i = Eo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, he(r) ? (i = !0, Qr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, yo(t), l.updater = hl, t.stateNode = l, l._reactInternals = t, zi(t, r, e, n), t = Ri(null, t, r, !0, i, n)) : (t.tag = 0, $ && i && fo(t), se(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Rr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Kf(r), e = Te(r, e), l) {
          case 0:
            t = Ti(null, t, r, e, n);
            break e;
          case 1:
            t = $s(null, t, r, e, n);
            break e;
          case 11:
            t = Ds(null, t, r, e, n);
            break e;
          case 14:
            t = As(null, t, r, Te(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Ti(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), $s(e, t, r, l, n);
    case 3:
      e: {
        if (Gu(t), e === null) throw Error(w(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Nu(e, t), Zr(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = sn(Error(w(423)), t), t = Bs(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = sn(Error(w(424)), t), t = Bs(e, t, r, n, l);
          break e;
        } else for (xe = at(t.stateNode.containerInfo.firstChild), ve = t, $ = !0, Me = null, n = ku(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (rn(), r === l) {
            t = Ge(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Su(t), e === null && Ci(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = l.children, ki(r, l) ? s = null : i !== null && ki(r, i) && (t.flags |= 32), Ku(e, t), se(e, t, s, n), t.child;
    case 6:
      return e === null && Ci(t), null;
    case 13:
      return Zu(e, t, n);
    case 4:
      return wo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ln(t, null, r, n) : se(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Ds(e, t, r, l, n);
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, s = l.value, I(Kr, r._currentValue), r._currentValue = s, i !== null) if (Ie(i.value, s)) {
          if (i.children === l.children && !pe.current) {
            t = Ge(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var a = i.dependencies;
          if (a !== null) {
            s = i.child;
            for (var u = a.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = Qe(-1, n & -n), u.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var g = f.pending;
                    g === null ? u.next = u : (u.next = g.next, g.next = u), f.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), _i(
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
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), _i(s, n, t), s = i.sibling;
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
      return l = t.type, r = t.pendingProps.children, qt(t, n), l = _e(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Te(r, t.pendingProps), l = Te(r.type, l), As(e, t, r, l, n);
    case 15:
      return Yu(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Rr(e, t), t.tag = 1, he(r) ? (e = !0, Qr(t)) : e = !1, qt(t, n), Vu(t, r, l), zi(t, r, l, n), Ri(null, t, r, !0, e, n);
    case 19:
      return Ju(e, t, n);
    case 22:
      return Xu(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function hc(e, t) {
  return Ba(e, t);
}
function Xf(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ee(e, t, n, r) {
  return new Xf(e, t, n, r);
}
function bo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Kf(e) {
  if (typeof e == "function") return bo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === qi) return 11;
    if (e === eo) return 14;
  }
  return 2;
}
function ft(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ee(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function br(e, t, n, r, l, i) {
  var s = 2;
  if (r = e, typeof e == "function") bo(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Dt:
      return _t(n.children, l, i, t);
    case Ji:
      s = 8, l |= 8;
      break;
    case ql:
      return e = Ee(12, n, t, l | 2), e.elementType = ql, e.lanes = i, e;
    case ei:
      return e = Ee(13, n, t, l), e.elementType = ei, e.lanes = i, e;
    case ti:
      return e = Ee(19, n, t, l), e.elementType = ti, e.lanes = i, e;
    case Sa:
      return xl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ja:
          s = 10;
          break e;
        case Na:
          s = 9;
          break e;
        case qi:
          s = 11;
          break e;
        case eo:
          s = 14;
          break e;
        case qe:
          s = 16, r = null;
          break e;
      }
      throw Error(w(130, e == null ? e : typeof e, ""));
  }
  return t = Ee(s, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function _t(e, t, n, r) {
  return e = Ee(7, e, r, t), e.lanes = n, e;
}
function xl(e, t, n, r) {
  return e = Ee(22, e, r, t), e.elementType = Sa, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Kl(e, t, n) {
  return e = Ee(6, e, null, t), e.lanes = n, e;
}
function Gl(e, t, n) {
  return t = Ee(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Gf(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pl(0), this.expirationTimes = Pl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Io(e, t, n, r, l, i, s, a, u) {
  return e = new Gf(e, t, n, a, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ee(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yo(i), e;
}
function Zf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ot, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function mc(e) {
  if (!e) return ht;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1) throw Error(w(170));
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
    if (he(n)) return mu(e, n, t);
  }
  return t;
}
function gc(e, t, n, r, l, i, s, a, u) {
  return e = Io(n, r, !0, e, l, i, s, a, u), e.context = mc(null), n = e.current, r = ae(), l = dt(n), i = Qe(r, l), i.callback = t ?? null, ut(n, i, l), e.current.lanes = l, er(e, l, r), me(e, r), e;
}
function vl(e, t, n, r) {
  var l = t.current, i = ae(), s = dt(l);
  return n = mc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qe(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ut(l, t, s), e !== null && (be(e, l, s, i), zr(e, l, s)), s;
}
function il(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Oo(e, t) {
  Zs(e, t), (e = e.alternate) && Zs(e, t);
}
function Jf() {
  return null;
}
var xc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Do(e) {
  this._internalRoot = e;
}
yl.prototype.render = Do.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  vl(e, t, null, null);
};
yl.prototype.unmount = Do.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rt(function() {
      vl(null, e, null, null);
    }), t[Xe] = null;
  }
};
function yl(e) {
  this._internalRoot = e;
}
yl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Xa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++) ;
    tt.splice(n, 0, e), n === 0 && Ga(e);
  }
};
function Ao(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function wl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Js() {
}
function qf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = il(s);
        i.call(f);
      };
    }
    var s = gc(t, r, e, 0, null, !1, !1, "", Js);
    return e._reactRootContainer = s, e[Xe] = s.current, Vn(e.nodeType === 8 ? e.parentNode : e), Rt(), s;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var f = il(u);
      a.call(f);
    };
  }
  var u = Io(e, 0, !1, null, null, !1, !1, "", Js);
  return e._reactRootContainer = u, e[Xe] = u.current, Vn(e.nodeType === 8 ? e.parentNode : e), Rt(function() {
    vl(t, u, n, r);
  }), u;
}
function kl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == "function") {
      var a = l;
      l = function() {
        var u = il(s);
        a.call(u);
      };
    }
    vl(t, s, e, l);
  } else s = qf(n, t, e, l, r);
  return il(s);
}
Qa = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sn(t.pendingLanes);
        n !== 0 && (ro(t, n | 1), me(t, Q()), !(F & 6) && (an = Q() + 500, xt()));
      }
      break;
    case 13:
      Rt(function() {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = ae();
          be(r, e, 1, l);
        }
      }), Oo(e, 1);
  }
};
lo = function(e) {
  if (e.tag === 13) {
    var t = Ke(e, 134217728);
    if (t !== null) {
      var n = ae();
      be(t, e, 134217728, n);
    }
    Oo(e, 134217728);
  }
};
Ya = function(e) {
  if (e.tag === 13) {
    var t = dt(e), n = Ke(e, t);
    if (n !== null) {
      var r = ae();
      be(n, e, t, r);
    }
    Oo(e, t);
  }
};
Xa = function() {
  return b;
};
Ka = function(e, t) {
  var n = b;
  try {
    return b = e, t();
  } finally {
    b = n;
  }
};
di = function(e, t, n) {
  switch (t) {
    case "input":
      if (li(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = dl(r);
            if (!l) throw Error(w(90));
            Ca(r), li(r, l);
          }
        }
      }
      break;
    case "textarea":
      La(e, n);
      break;
    case "select":
      t = n.value, t != null && Kt(e, !!n.multiple, t, !1);
  }
};
ba = Ro;
Ia = Rt;
var ep = { usingClientEntryPoint: !1, Events: [nr, Wt, dl, Ma, Fa, Ro] }, kn = { findFiberByHostInstance: Nt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, tp = { bundleType: kn.bundleType, version: kn.version, rendererPackageName: kn.rendererPackageName, rendererConfig: kn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Aa(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: kn.findFiberByHostInstance || Jf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nr.isDisabled && Nr.supportsFiber) try {
    sl = Nr.inject(tp), $e = Nr;
  } catch {
  }
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ep;
ke.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ao(t)) throw Error(w(200));
  return Zf(e, t, null, n);
};
ke.createRoot = function(e, t) {
  if (!Ao(e)) throw Error(w(299));
  var n = !1, r = "", l = xc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Io(e, 1, !1, null, null, n, !1, r, l), e[Xe] = t.current, Vn(e.nodeType === 8 ? e.parentNode : e), new Do(t);
};
ke.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(w(188)) : (e = Object.keys(e).join(","), Error(w(268, e)));
  return e = Aa(t), e = e === null ? null : e.stateNode, e;
};
ke.flushSync = function(e) {
  return Rt(e);
};
ke.hydrate = function(e, t, n) {
  if (!wl(t)) throw Error(w(200));
  return kl(null, e, t, !0, n);
};
ke.hydrateRoot = function(e, t, n) {
  if (!Ao(e)) throw Error(w(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", s = xc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = gc(t, null, e, 1, n ?? null, l, !1, i, s), e[Xe] = t.current, Vn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new yl(t);
};
ke.render = function(e, t, n) {
  if (!wl(t)) throw Error(w(200));
  return kl(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function(e) {
  if (!wl(e)) throw Error(w(40));
  return e._reactRootContainer ? (Rt(function() {
    kl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Xe] = null;
    });
  }), !0) : !1;
};
ke.unstable_batchedUpdates = Ro;
ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!wl(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return kl(e, t, n, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function vc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vc);
    } catch (e) {
      console.error(e);
    }
}
vc(), va.exports = ke;
var np = va.exports, yc, qs = np;
yc = qs.createRoot, qs.hydrateRoot;
const rp = `
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
function lp(e) {
  const [t, n] = z.useState(e), r = z.useCallback((l, i) => {
    const s = typeof l == "object" && l !== null ? l : { [l]: i };
    n((a) => ({ ...a, ...s })), window.parent.postMessage({ type: "__edit_mode_set_keys", edits: s }, "*"), window.dispatchEvent(new CustomEvent("tweakchange", { detail: s }));
  }, []);
  return [t, r];
}
function ip({ title: e = "Tweaks", noDeckControls: t = !1, children: n }) {
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
    /* @__PURE__ */ o.jsx("style", { children: rp }),
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
            s && a && !t && /* @__PURE__ */ o.jsx(jt, { label: "Deck", children: /* @__PURE__ */ o.jsx(Cn, { label: "Thumbnail rail", value: f, onChange: m }) })
          ] })
        ]
      }
    )
  ] }) : null;
}
function jt({ label: e, children: t }) {
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: "twk-sect", children: e }),
    t
  ] });
}
function lr({ label: e, value: t, children: n, inline: r = !1 }) {
  return /* @__PURE__ */ o.jsxs("div", { className: r ? "twk-row twk-row-h" : "twk-row", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "twk-lbl", children: [
      /* @__PURE__ */ o.jsx("span", { children: e }),
      t != null && /* @__PURE__ */ o.jsx("span", { className: "twk-val", children: t })
    ] }),
    n
  ] });
}
function It({ label: e, value: t, min: n = 0, max: r = 100, step: l = 1, unit: i = "", onChange: s }) {
  return /* @__PURE__ */ o.jsx(lr, { label: e, value: `${t}${i}`, children: /* @__PURE__ */ o.jsx(
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
function Cn({ label: e, value: t, onChange: n }) {
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
function Zl({ label: e, value: t, options: n, onChange: r }) {
  const l = z.useRef(null), [i, s] = z.useState(!1), a = z.useRef(t);
  a.current = t;
  const u = (_) => String(typeof _ == "object" ? _.label : _).length;
  if (!(n.reduce((_, d) => Math.max(_, u(d)), 0) <= ({ 2: 16, 3: 10 }[n.length] ?? 0))) {
    const _ = (d) => {
      const c = n.find((p) => String(typeof p == "object" ? p.value : p) === d);
      return c === void 0 ? d : typeof c == "object" ? c.value : c;
    };
    return /* @__PURE__ */ o.jsx(
      wc,
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
  return /* @__PURE__ */ o.jsx(lr, { label: e, children: /* @__PURE__ */ o.jsxs(
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
function wc({ label: e, value: t, options: n, onChange: r }) {
  return /* @__PURE__ */ o.jsx(lr, { label: e, children: /* @__PURE__ */ o.jsx("select", { className: "twk-field", value: t, onChange: (l) => r(l.target.value), children: n.map((l) => {
    const i = typeof l == "object" ? l.value : l, s = typeof l == "object" ? l.label : l;
    return /* @__PURE__ */ o.jsx("option", { value: i, children: s }, i);
  }) }) });
}
function ea({ label: e, value: t, placeholder: n, onChange: r }) {
  return /* @__PURE__ */ o.jsx(lr, { label: e, children: /* @__PURE__ */ o.jsx(
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
function op(e) {
  const t = String(e).replace("#", ""), n = t.length === 3 ? t.replace(/./g, (a) => a + a) : t.padEnd(6, "0"), r = parseInt(n.slice(0, 6), 16);
  if (Number.isNaN(r)) return !0;
  const l = r >> 16 & 255, i = r >> 8 & 255, s = r & 255;
  return l * 299 + i * 587 + s * 114 > 148e3;
}
const sp = ({ light: e }) => /* @__PURE__ */ o.jsx("svg", { viewBox: "0 0 14 14", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx(
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
function ta({ label: e, value: t, options: n, onChange: r }) {
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
  return /* @__PURE__ */ o.jsx(lr, { label: e, children: /* @__PURE__ */ o.jsx("div", { className: "twk-chips", role: "radiogroup", children: n.map((s, a) => {
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
          h && /* @__PURE__ */ o.jsx(sp, { light: op(f) })
        ]
      },
      a
    );
  }) }) });
}
const we = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, ap = (
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
), up = [
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
], cp = ["#FFFFFF", "#F6F6F8", "#F0F0F5", "#0c0c0e"], dp = [
  "Frank Ruhl Libre",
  "Inter",
  "Heebo",
  "Manrope",
  "Space Grotesk",
  "Plus Jakarta Sans",
  "DM Sans"
];
function kc({ variant: e = "light" }) {
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
function $o({ size: e = 14 }) {
  return /* @__PURE__ */ o.jsx("svg", { width: e, height: e, viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M9 3L3 9M3 9V4M3 9H8", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function jc() {
  return /* @__PURE__ */ o.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }) });
}
function Nc() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "6" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "2" })
  ] });
}
function Sc() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ o.jsx("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ o.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
    /* @__PURE__ */ o.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" })
  ] });
}
function Ec() {
  return /* @__PURE__ */ o.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) });
}
function fp() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("rect", { x: "2", y: "2", width: "20", height: "8", rx: "2" }),
    /* @__PURE__ */ o.jsx("rect", { x: "2", y: "14", width: "20", height: "8", rx: "2" }),
    /* @__PURE__ */ o.jsx("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }),
    /* @__PURE__ */ o.jsx("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" })
  ] });
}
function Bo() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ o.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
  ] });
}
function pp() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
  ] });
}
function Cc() {
  return /* @__PURE__ */ o.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }) });
}
function Wo() {
  return /* @__PURE__ */ o.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function hp() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("polyline", { points: "23 6 13.5 15.5 8.5 10.5 1 18" }),
    /* @__PURE__ */ o.jsx("polyline", { points: "17 6 23 6 23 12" })
  ] });
}
function na() {
  return /* @__PURE__ */ o.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("polyline", { points: "20 6 9 17 4 12" }) });
}
function mp() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ o.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] });
}
function gp() {
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
  const t = z.useRef(null), [n, r] = z.useState(we);
  return z.useEffect(() => {
    if (we) return;
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
function _c(e, t, n = 1200) {
  const [r, l] = z.useState(we ? e : 0);
  return z.useEffect(() => {
    if (we) {
      l(e);
      return;
    }
    if (!t || e <= 0) return;
    const i = Date.now(), s = () => {
      const a = Date.now() - i, u = Math.min(a / n, 1), f = 1 - Math.pow(1 - u, 3);
      l(Math.round(f * e)), u < 1 && requestAnimationFrame(s);
    };
    requestAnimationFrame(s);
  }, [t, e, n]), r;
}
function Uo(e, t, n = 90) {
  z.useEffect(() => {
    const r = e.current;
    if (!r) return;
    const l = Array.from(r.querySelectorAll(t));
    if (we) {
      l.forEach((a) => a.classList.add("in-view"));
      return;
    }
    const i = new IntersectionObserver(
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
function xp() {
  const e = gp();
  return /* @__PURE__ */ o.jsx("div", { className: "scroll-progress", style: { width: `${e}%` } });
}
function vp() {
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
    /* @__PURE__ */ o.jsx(kc, {})
  ] }) });
}
const yp = [
  { n: "01", name: "אתר תדמית", desc: "עמוד הבית של העסק שלכם. בהיר, מקצועי, ומסביר במשפט אחד מה אתם עושים. 5 עמודים בליבה, מותאם לנייד מהיום הראשון.", tag: "₪2,500" },
  { n: "02", name: "דף נחיתה", desc: "דף ממוקד אחד שמייצר לידים לקמפיין בלי הסחות, רק מסר ופעולה. כולל 3 עמודים, חיבור לפיקסל ו CRM.", tag: "₪1,500" }
];
function wp({ tweaks: e }) {
  const t = z.useRef(null);
  Uo(t, ".num-row", 110);
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
    /* @__PURE__ */ o.jsx("ul", { ref: t, className: "num-list", children: yp.map(
      (l) => /* @__PURE__ */ o.jsxs("li", { className: "num-row", children: [
        /* @__PURE__ */ o.jsx("span", { className: "num-row-n", children: l.n }),
        /* @__PURE__ */ o.jsxs("div", { className: "num-row-body", children: [
          /* @__PURE__ */ o.jsx("h3", { className: "num-row-name", children: l.name }),
          /* @__PURE__ */ o.jsx("p", { className: "num-row-desc", children: l.desc })
        ] }),
        e.showPrices && /* @__PURE__ */ o.jsx("span", { className: "num-row-tag", children: l.tag }),
        /* @__PURE__ */ o.jsx("a", { href: "#contact", className: "num-row-link", "aria-label": `התחל עם ${l.name}`, children: /* @__PURE__ */ o.jsx($o, { size: 18 }) })
      ] }, l.n)
    ) })
  ] }) });
}
const kp = [
  { n: "01", name: "שיחה", desc: "30 דקות בזום או טלפון. מבינים מה צריך, מה לא, ולמי זה מדבר.", icon: Wo },
  { n: "02", name: "עיצוב", desc: "מקבלים מוקאפ ראשון תוך 48 שעות לא פאוורפוינט, אלא קישור חי.", icon: Sc },
  { n: "03", name: "בנייה", desc: "בונים את האתר בצד שלנו. אתם רואים את ההתקדמות, מעירים, מאשרים.", icon: Cc },
  { n: "04", name: "השקה", desc: "מעלים לדומיין, מסירים לידיים שלכם.", icon: Bo }
];
function jp() {
  const e = z.useRef(null);
  Uo(e, ".process-card", 110);
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
        /* @__PURE__ */ o.jsx($o, {})
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("ol", { ref: e, className: "process-cards", children: kp.map((r) => {
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
const Np = `
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
    /* bottom stop kept at >=72% ink so the faded edge still passes 4.5:1 on white */
    background: linear-gradient(180deg, var(--color-foreground) 0%, color-mix(in srgb, var(--color-foreground) 72%, transparent) 100%);
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
function Sp() {
  const e = z.useRef(null), t = z.useRef(null), n = z.useRef(null), r = z.useRef(null);
  return z.useEffect(() => {
    if (we || !window.gsap) return;
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
    if (we || !window.gsap) {
      const s = e.current;
      if (!s) return;
      s.querySelectorAll(".text-track, .text-days").forEach((a) => {
        a.style.visibility = "visible";
      }), s.querySelectorAll(".main-card, .cta-wrapper").forEach((a) => {
        a.style.display = "none";
      });
      return;
    }
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
        /* @__PURE__ */ o.jsx("style", { dangerouslySetInnerHTML: { __html: Np } }),
        /* @__PURE__ */ o.jsx("div", { className: "film-grain", "aria-hidden": "true" }),
        /* @__PURE__ */ o.jsx("div", { className: "bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50", "aria-hidden": "true" }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-full px-4 will-change-transform",
            style: { transformStyle: "preserve-3d" },
            children: /* @__PURE__ */ o.jsxs("h1", { className: "m-0", children: [
              /* @__PURE__ */ o.jsx("span", { className: "text-track gsap-reveal text-3d-matte block text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2", children: "עיצוב ופיתוח" }),
              /* @__PURE__ */ o.jsx("span", { className: "text-days gsap-reveal text-silver-matte block text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter", children: "שמביא לקוחות" })
            ] })
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
const ra = [
  { n: "01", client: "זיו חשמל+", kind: "אתר תדמית", line: "ציוד חשמלי לבית ולמקצוע. 3,000+ מוצרים במלאי, משלוח תוך 24 שעות וייעוץ טכני חינם.", metric: "3,000+ מוצרים במלאי", palette: ["#0f172a", "#1e3a5f", "#3b82f6"], url: "https://smoke-spkh.vercel.app", domain: "ziv-electrical.co.il", thumb: "assets/work/ziv.webp" },
  { n: "02", client: "סלי לוגו", kind: "דף נחיתה", line: "סטודיו לעיצוב לוגואים ומיתוג. עיצוב מודרני ונועז לעסקים שרוצים להיזכר.", metric: "80+ מותגים", palette: ["#0d0d0d", "#1a0a0e", "#e8445a"], url: "clients/sali-logo.html", domain: "sali-logo.co.il", thumb: "assets/work/sali.webp" },
  { n: "03", client: "Jack 3D", kind: "פורטפוליו", line: "יוצר תלת-ממד ומעצב תנועה. אנימציות, גרפיקה בתנועה ואמנות דיגיטלית שדוחפת את גבולות היצירתיות.", metric: "60+ פרויקטים", palette: ["#0c0c0c", "#111a00", "#bfff00"], url: "/clients/jack/index.html", domain: "jack-3d.co.il", thumb: "assets/work/jack.webp" }
];
function Ep({ raw: e, inView: t }) {
  const n = e.match(/(\d+)/), r = n ? parseInt(n[1], 10) : 0, l = _c(r, t, 1400);
  if (!n) return /* @__PURE__ */ o.jsx("span", { className: "work-card-metric", children: e });
  const i = e.replace(n[1], t ? String(l) : "0");
  return /* @__PURE__ */ o.jsx("span", { className: "work-card-metric", children: i });
}
function Cp({ project: e, index: t, total: n, sticky: r }) {
  const l = z.useRef(null), [i, s] = q(0.3), [a, u] = z.useState(1), [f, g] = z.useState({ x: 0, y: 0, glow: !1 }), m = 1 - (n - 1 - t) * 0.04;
  z.useEffect(() => {
    if (!r || we) {
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
    if (we) return;
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
                /* @__PURE__ */ o.jsx($o, {})
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
          /* @__PURE__ */ o.jsx(Ep, { raw: e.metric, inView: s })
        ] })
      ]
    }
  ) });
}
function _p({ tweaks: e }) {
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
    /* @__PURE__ */ o.jsx("div", { className: `work-stack ${e.stickyStack ? "work-stack-sticky" : "work-stack-flat"}`, children: ra.map(
      (l, i) => /* @__PURE__ */ o.jsx(Cp, { project: l, index: i, total: ra.length, sticky: e.stickyStack }, l.n)
    ) })
  ] }) });
}
const Lp = [
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
function zp({ item: e, index: t }) {
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
            "aria-controls": `faq-panel-${t}`,
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
        /* @__PURE__ */ o.jsx("div", { id: `faq-panel-${t}`, role: "region", "aria-hidden": !n, style: {
          maxHeight: n ? "320px" : "0",
          overflow: "hidden",
          transition: we ? "none" : "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
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
function Pp() {
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
    /* @__PURE__ */ o.jsx("div", { style: { maxWidth: 700, margin: "0 auto" }, children: Lp.map((n, r) => /* @__PURE__ */ o.jsx(zp, { item: n, index: r }, r)) })
  ] }) });
}
const Tp = [
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
], Rp = [
  { label: "אתר רגיל", value: "עד 3%", w: 12 },
  { label: "דף נחיתה ממוקד", value: "עד 26%", w: 100, strong: !0 }
];
function Mp({ stat: e }) {
  const [t, n] = q(), r = _c(e.target || 0, n), l = e.target ? r + "%" : e.display;
  return /* @__PURE__ */ o.jsxs("div", { ref: t, className: `whyx-stat reveal${n ? " in-view" : ""}`, children: [
    /* @__PURE__ */ o.jsx("span", { className: "whyx-stat-num", children: l }),
    /* @__PURE__ */ o.jsx("h3", { className: "whyx-stat-title", children: e.title }),
    /* @__PURE__ */ o.jsx("p", { className: "whyx-stat-body", children: e.body })
  ] });
}
function Fp() {
  const [e, t] = q();
  return /* @__PURE__ */ o.jsxs("div", { ref: e, className: `whyx-conv reveal${t ? " in-view" : ""}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "whyx-conv-head", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "whyx-conv-title", children: "אותו תקציב פרסום, פי כמה לקוחות" }),
      /* @__PURE__ */ o.jsx("p", { className: "whyx-conv-sub", children: "אתר תדמית בונה אמון. דף נחיתה ממוקד גורם לפעולה. כשמסירים את כל הסחות הדעת ומשאירים מסר אחד ופעולה אחת, אחוזי ההמרה מזנקים:" })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "whyx-bars", children: Rp.map((n, r) => /* @__PURE__ */ o.jsxs("div", { className: "whyx-bar-row", children: [
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
function bp() {
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
    /* @__PURE__ */ o.jsx("div", { className: "whyx-stats", children: Tp.map((l, i) => /* @__PURE__ */ o.jsx(Mp, { stat: l }, i)) }),
    /* @__PURE__ */ o.jsx(Fp, {}),
    /* @__PURE__ */ o.jsx("div", { ref: n, className: `need-cta reveal${r ? " in-view" : ""}`, children: /* @__PURE__ */ o.jsx("a", { href: "#contact", className: "need-cta-link", children: "רוצים אתר שמביא לקוחות? דברו איתי ←" }) })
  ] }) });
}
const Ip = [
  {
    icon: /* @__PURE__ */ o.jsx(Wo, {}),
    title: "תקשורת ישירה",
    body: "מדברים ישירות עם מי שבונה את האתר. לא מנהל חשבון, לא מתווך."
  },
  {
    icon: /* @__PURE__ */ o.jsx(jc, {}),
    title: "קוד מקצועי",
    body: "React ו-Tailwind, לא Wix. אתר שנטען מהר ועובד בכל מכשיר."
  },
  {
    icon: /* @__PURE__ */ o.jsx(Nc, {}),
    title: "5 ימים בממוצע",
    body: "מתחילים, בונים, משיקים. בלי שבועות של המתנה."
  },
  {
    icon: /* @__PURE__ */ o.jsx(Bo, {}),
    title: "ישראלי ומקומי",
    body: "מכיר את השוק, זמין בוואטסאפ, מדבר בשפה שלכם."
  },
  {
    icon: /* @__PURE__ */ o.jsx(Ec, {}),
    title: "מחיר שקוף",
    body: "אין 'תתקשרו לקבל מחיר'. הכל כתוב, בלי הפתעות בדרך."
  },
  {
    icon: /* @__PURE__ */ o.jsx(hp, {}),
    title: "מותאם לנייד",
    body: "נבנה ראשית למובייל, לא מותאם בדיעבד. 100% מהיום הראשון."
  }
], Op = [
  "אנימציות תנועה ומעברים חלקים בגלילה",
  "עיצוב מותאם אישית, לא תבנית מוכנה",
  "טעינה מהירה (React + Tailwind, לא Wix)",
  "100% מותאם לנייד מהיום הראשון",
  "טופס לידים וכפתור וואטסאפ ישיר מהאתר"
], Dp = [
  "תבנית מוכנה שנראית כמו כולם",
  "סטטי, בלי תנועה או חיים",
  "איטי לטעינה",
  "אתה לבד מול תמיכה אוטומטית",
  '"מספיק טוב", לא בלתי-נשכח'
], Ap = [
  "עיצוב ייחודי שנבנה רק לכם",
  "אנימציות תנועה חיות שמושכות את העין",
  "נטען מהיר (React + Tailwind)",
  "מדברים ישירות איתי, בלי מתווכים",
  "חוויה שלקוחות זוכרים וחוזרים אליה"
];
function $p() {
  const [e, t] = q(), [n, r] = q(), [l, i] = q(), s = z.useRef(null);
  return Uo(s, ".why-card", 80), /* @__PURE__ */ o.jsx("section", { id: "about", className: "section section-why", "data-screen-label": "05 About", children: /* @__PURE__ */ o.jsxs("div", { className: "container", children: [
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
      /* @__PURE__ */ o.jsx("ul", { className: "includes-list", children: Op.map((a, u) => /* @__PURE__ */ o.jsxs("li", { className: "includes-item", children: [
        /* @__PURE__ */ o.jsx("span", { className: "includes-check", children: /* @__PURE__ */ o.jsx(na, {}) }),
        a
      ] }, u)) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { ref: l, className: `compare-block reveal${i ? " in-view" : ""}`, children: [
      /* @__PURE__ */ o.jsx("h3", { className: "compare-title", children: "ההבדל בין אתר רגיל לאתר של Motion" }),
      /* @__PURE__ */ o.jsxs("div", { className: "compare-cols", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "compare-col compare-col-bad", children: [
          /* @__PURE__ */ o.jsx("span", { className: "compare-col-title", children: "אתר תבנית רגיל" }),
          /* @__PURE__ */ o.jsx("ul", { className: "compare-list", children: Dp.map((a, u) => /* @__PURE__ */ o.jsxs("li", { className: "compare-item", children: [
            /* @__PURE__ */ o.jsx("span", { className: "compare-mark", children: /* @__PURE__ */ o.jsx(mp, {}) }),
            a
          ] }, u)) })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "compare-col compare-col-good", children: [
          /* @__PURE__ */ o.jsx("span", { className: "compare-col-title", children: "אתר של Motion" }),
          /* @__PURE__ */ o.jsx("ul", { className: "compare-list", children: Ap.map((a, u) => /* @__PURE__ */ o.jsxs("li", { className: "compare-item", children: [
            /* @__PURE__ */ o.jsx("span", { className: "compare-mark", children: /* @__PURE__ */ o.jsx(na, {}) }),
            a
          ] }, u)) })
        ] })
      ] })
    ] })
  ] }) });
}
const Bp = [
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
function Wp({ plan: e, withMaintenance: t }) {
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
const Up = [
  { n: "01", name: "אפיון", h: 56 },
  { n: "02", name: "עיצוב", h: 84 },
  { n: "03", name: "פיתוח", h: 112 },
  { n: "04", name: "בדיקות", h: 140 },
  { n: "05", name: "עלייה לאוויר", h: 168 }
];
function Vp() {
  const [e, t] = q(0.3);
  return /* @__PURE__ */ o.jsxs("div", { ref: e, className: `pricing-process-strip${t ? " in-view" : ""}`, children: [
    /* @__PURE__ */ o.jsx("div", { className: "pricing-process-label", children: "תהליך העבודה" }),
    /* @__PURE__ */ o.jsx("div", { className: "pricing-process-chart", role: "list", children: Up.map((n, r) => /* @__PURE__ */ o.jsxs("div", { className: "pricing-process-pillar", role: "listitem", children: [
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
const la = [
  { icon: /* @__PURE__ */ o.jsx(fp, {}), label: "אחסון מאובטח" },
  { icon: /* @__PURE__ */ o.jsx(Bo, {}), label: "דומיין שנה ראשונה" },
  { icon: /* @__PURE__ */ o.jsx(pp, {}), label: "SSL מוגן" },
  { icon: /* @__PURE__ */ o.jsx(Cc, {}), label: "תיקוני באגים קטנים" },
  { icon: /* @__PURE__ */ o.jsx(Wo, {}), label: "תמיכה טכנית" }
];
function Hp({ withMaintenance: e }) {
  return e ? /* @__PURE__ */ o.jsxs("div", { className: "pricing-monthly-box", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "pricing-monthly-header", children: [
      /* @__PURE__ */ o.jsx("span", { className: "pricing-monthly-price-big", children: "₪300" }),
      /* @__PURE__ */ o.jsx("span", { className: "pricing-monthly-price-per", children: "/חודש" }),
      /* @__PURE__ */ o.jsx("span", { className: "pricing-monthly-title", children: "מה כולל?" })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "pricing-monthly-grid", children: la.map((t, n) => /* @__PURE__ */ o.jsxs("div", { className: "pricing-monthly-item", children: [
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
    /* @__PURE__ */ o.jsx("div", { className: "pricing-no-maint-grid", children: la.map((t, n) => /* @__PURE__ */ o.jsxs("div", { className: "pricing-no-maint-item", children: [
      /* @__PURE__ */ o.jsx("span", { className: "pricing-no-maint-item-icon", children: t.icon }),
      /* @__PURE__ */ o.jsx("span", { children: t.label })
    ] }, n)) }),
    /* @__PURE__ */ o.jsx("p", { className: "pricing-no-maint-note", children: "מומלץ למי שכבר יש לו אחסון ומכיר את התחום. תצטרכו לנהל את כל אלה בעצמכם." })
  ] });
}
function Qp() {
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
        /* @__PURE__ */ o.jsx("div", { className: "pricing-dark-cards", children: Bp.map((l, i) => /* @__PURE__ */ o.jsx(Wp, { plan: l, withMaintenance: n }, i)) }),
        /* @__PURE__ */ o.jsx(Hp, { withMaintenance: n }),
        /* @__PURE__ */ o.jsx(Vp, {}),
        /* @__PURE__ */ o.jsx("p", { className: "pricing-disclaimer", children: "* המחיר הסופי עשוי להשתנות בהתאם לדרישות הפרויקט, היקף העבודה וזמן הפיתוח." })
      ] })
    }
  );
}
function Yp() {
  return /* @__PURE__ */ o.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M13.6 2.3A8 8 0 0 0 0 8a7.9 7.9 0 0 0 1.1 4L0 16l4.1-1.1A8 8 0 0 0 16 8a7.9 7.9 0 0 0-2.4-5.7zM8 14.7a6.7 6.7 0 0 1-3.4-.9l-.3-.1-2.5.6.7-2.4-.2-.3A6.7 6.7 0 1 1 8 14.7zm3.7-5a4.1 4.1 0 0 1-2-.5 4.5 4.5 0 0 1-1.8-1.6 4.1 4.1 0 0 1-.8-2c0-.6.3-1 .6-1.2.1-.1.3-.2.4-.2H8.5c.2 0 .3 0 .4.3l.4 1c0 .1 0 .2-.1.3l-.2.2-.3.3v.2a4.2 4.2 0 0 0 .8 1c.5.5 1 .7 1.2.8.1 0 .2 0 .3-.1l.6-.7c.1-.1.2-.1.3-.1l1.1.5c.2.1.3.1.3.2v.8c-.1.3-.6.6-.9.7z" }) });
}
function Xp() {
  return /* @__PURE__ */ o.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: [
    /* @__PURE__ */ o.jsx("rect", { x: "1.5", y: "3", width: "13", height: "10", rx: "2", stroke: "currentColor", strokeWidth: "1.4" }),
    /* @__PURE__ */ o.jsx("path", { d: "M2 4l6 4 6-4", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
const Kp = [
  { icon: /* @__PURE__ */ o.jsx(jc, {}), text: "חזרה תוך 24 שעות בימי עסקים" },
  { icon: /* @__PURE__ */ o.jsx(Nc, {}), text: "שיחת ייעוץ ראשונה, בחינם לחלוטין" },
  { icon: /* @__PURE__ */ o.jsx(Sc, {}), text: "הצעת מחיר מפורטת ללא התחייבות" },
  { icon: /* @__PURE__ */ o.jsx(Ec, {}), text: "פרטיות מלאה, המידע שלכם אצלנו בלבד" }
];
function Gp() {
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
      /* @__PURE__ */ o.jsx("div", { className: "contact-left", children: /* @__PURE__ */ o.jsx("ul", { className: "contact-promise-list", children: Kp.map((y, k) => /* @__PURE__ */ o.jsxs("li", { className: "contact-promise-item", children: [
        /* @__PURE__ */ o.jsx("span", { className: "contact-promise-icon", children: y.icon }),
        /* @__PURE__ */ o.jsx("span", { children: y.text })
      ] }, k)) }) }),
      /* @__PURE__ */ o.jsx("div", { ref: n, className: `contact-form reveal${r ? " in-view" : ""}`, children: l ? /* @__PURE__ */ o.jsxs("div", { className: "contact-success", role: "status", children: [
        /* @__PURE__ */ o.jsx("div", { className: "contact-success-icon", "aria-hidden": "true", children: "✓" }),
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
                autoComplete: "name",
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
                autoComplete: "tel",
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
        /* @__PURE__ */ o.jsx("button", { type: "submit", className: "contact-submit", disabled: u, "aria-busy": u, children: u ? "שולח..." : "שלחו פנייה →" }),
        /* @__PURE__ */ o.jsx("p", { className: "contact-form-note", children: "* שדות חובה · לא שולחים ספאם, לעולם לא." }),
        s && /* @__PURE__ */ o.jsx("p", { role: "alert", style: { color: "#C03736", fontSize: 13, marginTop: 8 }, children: "משהו השתבש. נסו שוב או כתבו לנו ישירות." })
      ] }) })
    ] })
  ] }) });
}
function ia({ href: e, children: t, variant: n, onClick: r }) {
  const l = z.useRef(null);
  z.useEffect(() => {
    const s = window.gsap;
    if (!s || we) return;
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
const oa = [
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
function Zp() {
  const e = z.useRef(null), t = z.useRef(null), n = z.useRef(null), r = z.useRef(null);
  z.useEffect(() => {
    const i = window.gsap, s = window.ScrollTrigger;
    if (!i || !s || we) return;
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
    window.scrollTo({ top: 0, behavior: we ? "auto" : "smooth" });
  }
  return /* @__PURE__ */ o.jsx("div", { ref: e, className: "cf2-wrapper", children: /* @__PURE__ */ o.jsxs("footer", { className: "cf2-footer", children: [
    /* @__PURE__ */ o.jsx("div", { className: "cf2-aurora", "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx("div", { className: "cf2-bg-grid", "aria-hidden": "true" }),
    /* @__PURE__ */ o.jsx("div", { ref: t, className: "cf2-giant-text", "aria-hidden": "true", children: "MOTION" }),
    /* @__PURE__ */ o.jsx("div", { className: "cf2-marquee-strip", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("div", { className: "cf2-marquee-track", children: [...oa, ...oa].map((i, s) => /* @__PURE__ */ o.jsx("span", { className: i === "✦" ? "cf2-sep" : "", children: i }, s)) }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "cf2-content", children: [
      /* @__PURE__ */ o.jsx("p", { className: "cf2-eyebrow", children: "בואו נדבר" }),
      /* @__PURE__ */ o.jsx("h2", { ref: n, className: "cf2-headline", children: "מוכנים להתחיל?" }),
      /* @__PURE__ */ o.jsx("p", { className: "cf2-sub", children: "שיחת היכרות בחינם, ללא התחייבות." }),
      /* @__PURE__ */ o.jsxs("div", { ref: r, className: "cf2-buttons", children: [
        /* @__PURE__ */ o.jsxs(ia, { href: "https://wa.me/972535406691", variant: "primary", children: [
          /* @__PURE__ */ o.jsx(Yp, {}),
          /* @__PURE__ */ o.jsx("span", { children: "WhatsApp" })
        ] }),
        /* @__PURE__ */ o.jsxs(ia, { href: "mailto:eliyaelmedwy555@gmail.com", children: [
          /* @__PURE__ */ o.jsx(Xp, {}),
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
      /* @__PURE__ */ o.jsx(kc, { variant: "dark" }),
      /* @__PURE__ */ o.jsxs("div", { className: "cf2-badge", children: [
        /* @__PURE__ */ o.jsx("span", { children: "נבנה עם" }),
        /* @__PURE__ */ o.jsx("span", { className: "cf2-heart", "aria-label": "אהבה", children: /* @__PURE__ */ o.jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" }) }) }),
        /* @__PURE__ */ o.jsx("span", { children: "על ידי Motion" })
      ] }),
      /* @__PURE__ */ o.jsx("button", { className: "cf2-top-btn", onClick: l, "aria-label": "חזרה למעלה", children: /* @__PURE__ */ o.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M5 10l7-7m0 0l7 7m-7-7v18" }) }) })
    ] })
  ] }) });
}
function Jp() {
  const [e, t] = lp(ap);
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
    /* @__PURE__ */ o.jsx(xp, {}),
    /* @__PURE__ */ o.jsx(vp, {}),
    /* @__PURE__ */ o.jsxs("main", { id: "main", tabIndex: -1, children: [
      /* @__PURE__ */ o.jsx(Sp, {}),
      /* @__PURE__ */ o.jsx(bp, {}),
      /* @__PURE__ */ o.jsx(wp, { tweaks: e }),
      /* @__PURE__ */ o.jsx(jp, {}),
      /* @__PURE__ */ o.jsx(_p, { tweaks: e }),
      /* @__PURE__ */ o.jsx($p, {}),
      /* @__PURE__ */ o.jsx(Pp, {}),
      /* @__PURE__ */ o.jsx(Qp, {}),
      /* @__PURE__ */ o.jsx(Gp, {})
    ] }),
    /* @__PURE__ */ o.jsx(Zp, {}),
    /* @__PURE__ */ o.jsxs(ip, { title: "Tweaks", children: [
      /* @__PURE__ */ o.jsx(jt, { label: "צבע" }),
      /* @__PURE__ */ o.jsx(
        ta,
        {
          label: "Accent",
          value: e.accent,
          options: up,
          onChange: (n) => t("accent", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        ta,
        {
          label: "רקע אתר",
          value: e.bg,
          options: cp,
          onChange: (n) => t("bg", n)
        }
      ),
      /* @__PURE__ */ o.jsx(jt, { label: "טיפוגרפיה" }),
      /* @__PURE__ */ o.jsx(
        wc,
        {
          label: "גופן תצוגה",
          value: e.displayFont,
          options: dp,
          onChange: (n) => t("displayFont", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Zl,
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
      /* @__PURE__ */ o.jsx(jt, { label: "מבנה" }),
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
      /* @__PURE__ */ o.jsx(jt, { label: "הירו" }),
      /* @__PURE__ */ o.jsx(
        Zl,
        {
          label: "הדגשה",
          value: e.hlMode,
          options: ["accent", "underline", "block"],
          onChange: (n) => t("hlMode", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        ea,
        {
          label: "כותרת",
          value: e.headline,
          onChange: (n) => t("headline", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        ea,
        {
          label: "תת-כותרת",
          value: e.subhead,
          onChange: (n) => t("subhead", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Cn,
        {
          label: "מספרי אמון",
          value: e.showStats,
          onChange: (n) => t("showStats", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Cn,
        {
          label: "תגית 'זמין'",
          value: e.showHeroBadge,
          onChange: (n) => t("showHeroBadge", n)
        }
      ),
      /* @__PURE__ */ o.jsx(jt, { label: "שירותים" }),
      /* @__PURE__ */ o.jsx(
        Cn,
        {
          label: "הצג תגי מחיר",
          value: e.showPrices,
          onChange: (n) => t("showPrices", n)
        }
      ),
      /* @__PURE__ */ o.jsx(jt, { label: "עבודות" }),
      /* @__PURE__ */ o.jsx(
        Cn,
        {
          label: "הצמדה ודחיסה",
          value: e.stickyStack,
          onChange: (n) => t("stickyStack", n)
        }
      ),
      /* @__PURE__ */ o.jsx(
        Zl,
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
yc(document.getElementById("root")).render(/* @__PURE__ */ o.jsx(Jp, {}));
