function FS(q) {
  return q && q.__esModule && Object.prototype.hasOwnProperty.call(q, "default") ? q.default : q;
}
var cg = { exports: {} }, dp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U1;
function IS() {
  if (U1) return dp;
  U1 = 1;
  var q = Symbol.for("react.transitional.element"), te = Symbol.for("react.fragment");
  function Ce(C, Se, Oe) {
    var it = null;
    if (Oe !== void 0 && (it = "" + Oe), Se.key !== void 0 && (it = "" + Se.key), "key" in Se) {
      Oe = {};
      for (var yt in Se)
        yt !== "key" && (Oe[yt] = Se[yt]);
    } else Oe = Se;
    return Se = Oe.ref, {
      $$typeof: q,
      type: C,
      key: it,
      ref: Se !== void 0 ? Se : null,
      props: Oe
    };
  }
  return dp.Fragment = te, dp.jsx = Ce, dp.jsxs = Ce, dp;
}
var hp = {}, og = { exports: {} }, $e = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C1;
function PS() {
  if (C1) return $e;
  C1 = 1;
  var q = Symbol.for("react.transitional.element"), te = Symbol.for("react.portal"), Ce = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), Se = Symbol.for("react.profiler"), Oe = Symbol.for("react.consumer"), it = Symbol.for("react.context"), yt = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), W = Symbol.iterator;
  function M(g) {
    return g === null || typeof g != "object" ? null : (g = W && g[W] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var ne = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _e = Object.assign, At = {};
  function Xe(g, N, Z) {
    this.props = g, this.context = N, this.refs = At, this.updater = Z || ne;
  }
  Xe.prototype.isReactComponent = {}, Xe.prototype.setState = function(g, N) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, N, "setState");
  }, Xe.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function Fe() {
  }
  Fe.prototype = Xe.prototype;
  function Ft(g, N, Z) {
    this.props = g, this.context = N, this.refs = At, this.updater = Z || ne;
  }
  var lt = Ft.prototype = new Fe();
  lt.constructor = Ft, _e(lt, Xe.prototype), lt.isPureReactComponent = !0;
  var Nt = Array.isArray, Me = { H: null, A: null, T: null, S: null, V: null }, vt = Object.prototype.hasOwnProperty;
  function Le(g, N, Z, I, ue, Ee) {
    return Z = Ee.ref, {
      $$typeof: q,
      type: g,
      key: N,
      ref: Z !== void 0 ? Z : null,
      props: Ee
    };
  }
  function gt(g, N) {
    return Le(
      g.type,
      N,
      void 0,
      void 0,
      void 0,
      g.props
    );
  }
  function fe(g) {
    return typeof g == "object" && g !== null && g.$$typeof === q;
  }
  function St(g) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(Z) {
      return N[Z];
    });
  }
  var pe = /\/+/g;
  function Te(g, N) {
    return typeof g == "object" && g !== null && g.key != null ? St("" + g.key) : N.toString(36);
  }
  function Tt() {
  }
  function Ut(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(Tt, Tt) : (g.status = "pending", g.then(
          function(N) {
            g.status === "pending" && (g.status = "fulfilled", g.value = N);
          },
          function(N) {
            g.status === "pending" && (g.status = "rejected", g.reason = N);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function ct(g, N, Z, I, ue) {
    var Ee = typeof g;
    (Ee === "undefined" || Ee === "boolean") && (g = null);
    var ie = !1;
    if (g === null) ie = !0;
    else
      switch (Ee) {
        case "bigint":
        case "string":
        case "number":
          ie = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case q:
            case te:
              ie = !0;
              break;
            case oe:
              return ie = g._init, ct(
                ie(g._payload),
                N,
                Z,
                I,
                ue
              );
          }
      }
    if (ie)
      return ue = ue(g), ie = I === "" ? "." + Te(g, 0) : I, Nt(ue) ? (Z = "", ie != null && (Z = ie.replace(pe, "$&/") + "/"), ct(ue, N, Z, "", function(wt) {
        return wt;
      })) : ue != null && (fe(ue) && (ue = gt(
        ue,
        Z + (ue.key == null || g && g.key === ue.key ? "" : ("" + ue.key).replace(
          pe,
          "$&/"
        ) + "/") + ie
      )), N.push(ue)), 1;
    ie = 0;
    var nl = I === "" ? "." : I + ":";
    if (Nt(g))
      for (var Ue = 0; Ue < g.length; Ue++)
        I = g[Ue], Ee = nl + Te(I, Ue), ie += ct(
          I,
          N,
          Z,
          Ee,
          ue
        );
    else if (Ue = M(g), typeof Ue == "function")
      for (g = Ue.call(g), Ue = 0; !(I = g.next()).done; )
        I = I.value, Ee = nl + Te(I, Ue++), ie += ct(
          I,
          N,
          Z,
          Ee,
          ue
        );
    else if (Ee === "object") {
      if (typeof g.then == "function")
        return ct(
          Ut(g),
          N,
          Z,
          I,
          ue
        );
      throw N = String(g), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ie;
  }
  function A(g, N, Z) {
    if (g == null) return g;
    var I = [], ue = 0;
    return ct(g, I, "", "", function(Ee) {
      return N.call(Z, Ee, ue++);
    }), I;
  }
  function K(g) {
    if (g._status === -1) {
      var N = g._result;
      N = N(), N.then(
        function(Z) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = Z);
        },
        function(Z) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = Z);
        }
      ), g._status === -1 && (g._status = 0, g._result = N);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var F = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  };
  function me() {
  }
  return $e.Children = {
    map: A,
    forEach: function(g, N, Z) {
      A(
        g,
        function() {
          N.apply(this, arguments);
        },
        Z
      );
    },
    count: function(g) {
      var N = 0;
      return A(g, function() {
        N++;
      }), N;
    },
    toArray: function(g) {
      return A(g, function(N) {
        return N;
      }) || [];
    },
    only: function(g) {
      if (!fe(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  }, $e.Component = Xe, $e.Fragment = Ce, $e.Profiler = Se, $e.PureComponent = Ft, $e.StrictMode = C, $e.Suspense = j, $e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Me, $e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return Me.H.useMemoCache(g);
    }
  }, $e.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, $e.cloneElement = function(g, N, Z) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var I = _e({}, g.props), ue = g.key, Ee = void 0;
    if (N != null)
      for (ie in N.ref !== void 0 && (Ee = void 0), N.key !== void 0 && (ue = "" + N.key), N)
        !vt.call(N, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && N.ref === void 0 || (I[ie] = N[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) I.children = Z;
    else if (1 < ie) {
      for (var nl = Array(ie), Ue = 0; Ue < ie; Ue++)
        nl[Ue] = arguments[Ue + 2];
      I.children = nl;
    }
    return Le(g.type, ue, void 0, void 0, Ee, I);
  }, $e.createContext = function(g) {
    return g = {
      $$typeof: it,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: Oe,
      _context: g
    }, g;
  }, $e.createElement = function(g, N, Z) {
    var I, ue = {}, Ee = null;
    if (N != null)
      for (I in N.key !== void 0 && (Ee = "" + N.key), N)
        vt.call(N, I) && I !== "key" && I !== "__self" && I !== "__source" && (ue[I] = N[I]);
    var ie = arguments.length - 2;
    if (ie === 1) ue.children = Z;
    else if (1 < ie) {
      for (var nl = Array(ie), Ue = 0; Ue < ie; Ue++)
        nl[Ue] = arguments[Ue + 2];
      ue.children = nl;
    }
    if (g && g.defaultProps)
      for (I in ie = g.defaultProps, ie)
        ue[I] === void 0 && (ue[I] = ie[I]);
    return Le(g, Ee, void 0, void 0, null, ue);
  }, $e.createRef = function() {
    return { current: null };
  }, $e.forwardRef = function(g) {
    return { $$typeof: yt, render: g };
  }, $e.isValidElement = fe, $e.lazy = function(g) {
    return {
      $$typeof: oe,
      _payload: { _status: -1, _result: g },
      _init: K
    };
  }, $e.memo = function(g, N) {
    return {
      $$typeof: k,
      type: g,
      compare: N === void 0 ? null : N
    };
  }, $e.startTransition = function(g) {
    var N = Me.T, Z = {};
    Me.T = Z;
    try {
      var I = g(), ue = Me.S;
      ue !== null && ue(Z, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(me, F);
    } catch (Ee) {
      F(Ee);
    } finally {
      Me.T = N;
    }
  }, $e.unstable_useCacheRefresh = function() {
    return Me.H.useCacheRefresh();
  }, $e.use = function(g) {
    return Me.H.use(g);
  }, $e.useActionState = function(g, N, Z) {
    return Me.H.useActionState(g, N, Z);
  }, $e.useCallback = function(g, N) {
    return Me.H.useCallback(g, N);
  }, $e.useContext = function(g) {
    return Me.H.useContext(g);
  }, $e.useDebugValue = function() {
  }, $e.useDeferredValue = function(g, N) {
    return Me.H.useDeferredValue(g, N);
  }, $e.useEffect = function(g, N, Z) {
    var I = Me.H;
    if (typeof Z == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return I.useEffect(g, N);
  }, $e.useId = function() {
    return Me.H.useId();
  }, $e.useImperativeHandle = function(g, N, Z) {
    return Me.H.useImperativeHandle(g, N, Z);
  }, $e.useInsertionEffect = function(g, N) {
    return Me.H.useInsertionEffect(g, N);
  }, $e.useLayoutEffect = function(g, N) {
    return Me.H.useLayoutEffect(g, N);
  }, $e.useMemo = function(g, N) {
    return Me.H.useMemo(g, N);
  }, $e.useOptimistic = function(g, N) {
    return Me.H.useOptimistic(g, N);
  }, $e.useReducer = function(g, N, Z) {
    return Me.H.useReducer(g, N, Z);
  }, $e.useRef = function(g) {
    return Me.H.useRef(g);
  }, $e.useState = function(g) {
    return Me.H.useState(g);
  }, $e.useSyncExternalStore = function(g, N, Z) {
    return Me.H.useSyncExternalStore(
      g,
      N,
      Z
    );
  }, $e.useTransition = function() {
    return Me.H.useTransition();
  }, $e.version = "19.1.0", $e;
}
var pp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
pp.exports;
var _1;
function eT() {
  return _1 || (_1 = 1, function(q, te) {
    process.env.NODE_ENV !== "production" && function() {
      function Ce(m, D) {
        Object.defineProperty(Oe.prototype, m, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              D[0],
              D[1]
            );
          }
        });
      }
      function C(m) {
        return m === null || typeof m != "object" ? null : (m = An && m[An] || m["@@iterator"], typeof m == "function" ? m : null);
      }
      function Se(m, D) {
        m = (m = m.constructor) && (m.displayName || m.name) || "ReactClass";
        var ee = m + "." + D;
        Gi[ee] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          D,
          m
        ), Gi[ee] = !0);
      }
      function Oe(m, D, ee) {
        this.props = m, this.context = D, this.refs = df, this.updater = ee || On;
      }
      function it() {
      }
      function yt(m, D, ee) {
        this.props = m, this.context = D, this.refs = df, this.updater = ee || On;
      }
      function j(m) {
        return "" + m;
      }
      function k(m) {
        try {
          j(m);
          var D = !1;
        } catch {
          D = !0;
        }
        if (D) {
          D = console;
          var ee = D.error, ae = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return ee.call(
            D,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ae
          ), j(m);
        }
      }
      function oe(m) {
        if (m == null) return null;
        if (typeof m == "function")
          return m.$$typeof === Ir ? null : m.displayName || m.name || null;
        if (typeof m == "string") return m;
        switch (m) {
          case g:
            return "Fragment";
          case Z:
            return "Profiler";
          case N:
            return "StrictMode";
          case ie:
            return "Suspense";
          case nl:
            return "SuspenseList";
          case la:
            return "Activity";
        }
        if (typeof m == "object")
          switch (typeof m.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), m.$$typeof) {
            case me:
              return "Portal";
            case ue:
              return (m.displayName || "Context") + ".Provider";
            case I:
              return (m._context.displayName || "Context") + ".Consumer";
            case Ee:
              var D = m.render;
              return m = m.displayName, m || (m = D.displayName || D.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
            case Ue:
              return D = m.displayName || null, D !== null ? D : oe(m.type) || "Memo";
            case wt:
              D = m._payload, m = m._init;
              try {
                return oe(m(D));
              } catch {
              }
          }
        return null;
      }
      function W(m) {
        if (m === g) return "<>";
        if (typeof m == "object" && m !== null && m.$$typeof === wt)
          return "<...>";
        try {
          var D = oe(m);
          return D ? "<" + D + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function M() {
        var m = Qe.A;
        return m === null ? null : m.getOwner();
      }
      function ne() {
        return Error("react-stack-top-frame");
      }
      function _e(m) {
        if (Dn.call(m, "key")) {
          var D = Object.getOwnPropertyDescriptor(m, "key").get;
          if (D && D.isReactWarning) return !1;
        }
        return m.key !== void 0;
      }
      function At(m, D) {
        function ee() {
          pu || (pu = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            D
          ));
        }
        ee.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: ee,
          configurable: !0
        });
      }
      function Xe() {
        var m = oe(this.type);
        return hf[m] || (hf[m] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), m = this.props.ref, m !== void 0 ? m : null;
      }
      function Fe(m, D, ee, ae, ye, He, Be, at) {
        return ee = He.ref, m = {
          $$typeof: F,
          type: m,
          key: D,
          props: He,
          _owner: ye
        }, (ee !== void 0 ? ee : null) !== null ? Object.defineProperty(m, "ref", {
          enumerable: !1,
          get: Xe
        }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(m, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(m, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Be
        }), Object.defineProperty(m, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: at
        }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
      }
      function Ft(m, D) {
        return D = Fe(
          m.type,
          D,
          void 0,
          void 0,
          m._owner,
          m.props,
          m._debugStack,
          m._debugTask
        ), m._store && (D._store.validated = m._store.validated), D;
      }
      function lt(m) {
        return typeof m == "object" && m !== null && m.$$typeof === F;
      }
      function Nt(m) {
        var D = { "=": "=0", ":": "=2" };
        return "$" + m.replace(/[=:]/g, function(ee) {
          return D[ee];
        });
      }
      function Me(m, D) {
        return typeof m == "object" && m !== null && m.key != null ? (k(m.key), Nt("" + m.key)) : D.toString(36);
      }
      function vt() {
      }
      function Le(m) {
        switch (m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
          default:
            switch (typeof m.status == "string" ? m.then(vt, vt) : (m.status = "pending", m.then(
              function(D) {
                m.status === "pending" && (m.status = "fulfilled", m.value = D);
              },
              function(D) {
                m.status === "pending" && (m.status = "rejected", m.reason = D);
              }
            )), m.status) {
              case "fulfilled":
                return m.value;
              case "rejected":
                throw m.reason;
            }
        }
        throw m;
      }
      function gt(m, D, ee, ae, ye) {
        var He = typeof m;
        (He === "undefined" || He === "boolean") && (m = null);
        var Be = !1;
        if (m === null) Be = !0;
        else
          switch (He) {
            case "bigint":
            case "string":
            case "number":
              Be = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case F:
                case me:
                  Be = !0;
                  break;
                case wt:
                  return Be = m._init, gt(
                    Be(m._payload),
                    D,
                    ee,
                    ae,
                    ye
                  );
              }
          }
        if (Be) {
          Be = m, ye = ye(Be);
          var at = ae === "" ? "." + Me(Be, 0) : ae;
          return $u(ye) ? (ee = "", at != null && (ee = at.replace(Rl, "$&/") + "/"), gt(ye, D, ee, "", function(el) {
            return el;
          })) : ye != null && (lt(ye) && (ye.key != null && (Be && Be.key === ye.key || k(ye.key)), ee = Ft(
            ye,
            ee + (ye.key == null || Be && Be.key === ye.key ? "" : ("" + ye.key).replace(
              Rl,
              "$&/"
            ) + "/") + at
          ), ae !== "" && Be != null && lt(Be) && Be.key == null && Be._store && !Be._store.validated && (ee._store.validated = 2), ye = ee), D.push(ye)), 1;
        }
        if (Be = 0, at = ae === "" ? "." : ae + ":", $u(m))
          for (var we = 0; we < m.length; we++)
            ae = m[we], He = at + Me(ae, we), Be += gt(
              ae,
              D,
              ee,
              He,
              ye
            );
        else if (we = C(m), typeof we == "function")
          for (we === m.entries && (Ba || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Ba = !0), m = we.call(m), we = 0; !(ae = m.next()).done; )
            ae = ae.value, He = at + Me(ae, we++), Be += gt(
              ae,
              D,
              ee,
              He,
              ye
            );
        else if (He === "object") {
          if (typeof m.then == "function")
            return gt(
              Le(m),
              D,
              ee,
              ae,
              ye
            );
          throw D = String(m), Error(
            "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return Be;
      }
      function fe(m, D, ee) {
        if (m == null) return m;
        var ae = [], ye = 0;
        return gt(m, ae, "", "", function(He) {
          return D.call(ee, He, ye++);
        }), ae;
      }
      function St(m) {
        if (m._status === -1) {
          var D = m._result;
          D = D(), D.then(
            function(ee) {
              (m._status === 0 || m._status === -1) && (m._status = 1, m._result = ee);
            },
            function(ee) {
              (m._status === 0 || m._status === -1) && (m._status = 2, m._result = ee);
            }
          ), m._status === -1 && (m._status = 0, m._result = D);
        }
        if (m._status === 1)
          return D = m._result, D === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            D
          ), "default" in D || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            D
          ), D.default;
        throw m._result;
      }
      function pe() {
        var m = Qe.H;
        return m === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), m;
      }
      function Te() {
      }
      function Tt(m) {
        if ($c === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7);
            $c = (q && q[D]).call(
              q,
              "timers"
            ).setImmediate;
          } catch {
            $c = function(ae) {
              yf === !1 && (yf = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var ye = new MessageChannel();
              ye.port1.onmessage = ae, ye.port2.postMessage(void 0);
            };
          }
        return $c(m);
      }
      function Ut(m) {
        return 1 < m.length && typeof AggregateError == "function" ? new AggregateError(m) : m[0];
      }
      function ct(m, D) {
        D !== ln - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), ln = D;
      }
      function A(m, D, ee) {
        var ae = Qe.actQueue;
        if (ae !== null)
          if (ae.length !== 0)
            try {
              K(ae), Tt(function() {
                return A(m, D, ee);
              });
              return;
            } catch (ye) {
              Qe.thrownErrors.push(ye);
            }
          else Qe.actQueue = null;
        0 < Qe.thrownErrors.length ? (ae = Ut(Qe.thrownErrors), Qe.thrownErrors.length = 0, ee(ae)) : D(m);
      }
      function K(m) {
        if (!Al) {
          Al = !0;
          var D = 0;
          try {
            for (; D < m.length; D++) {
              var ee = m[D];
              do {
                Qe.didUsePromise = !1;
                var ae = ee(!1);
                if (ae !== null) {
                  if (Qe.didUsePromise) {
                    m[D] = ee, m.splice(0, D);
                    return;
                  }
                  ee = ae;
                } else break;
              } while (!0);
            }
            m.length = 0;
          } catch (ye) {
            m.splice(0, D + 1), Qe.thrownErrors.push(ye);
          } finally {
            Al = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var F = Symbol.for("react.transitional.element"), me = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), ue = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), nl = Symbol.for("react.suspense_list"), Ue = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), la = Symbol.for("react.activity"), An = Symbol.iterator, Gi = {}, On = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(m) {
          Se(m, "forceUpdate");
        },
        enqueueReplaceState: function(m) {
          Se(m, "replaceState");
        },
        enqueueSetState: function(m) {
          Se(m, "setState");
        }
      }, Kc = Object.assign, df = {};
      Object.freeze(df), Oe.prototype.isReactComponent = {}, Oe.prototype.setState = function(m, D) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, m, D, "setState");
      }, Oe.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      var Pt = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, hl;
      for (hl in Pt)
        Pt.hasOwnProperty(hl) && Ce(hl, Pt[hl]);
      it.prototype = Oe.prototype, Pt = yt.prototype = new it(), Pt.constructor = yt, Kc(Pt, Oe.prototype), Pt.isPureReactComponent = !0;
      var $u = Array.isArray, Ir = Symbol.for("react.client.reference"), Qe = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Dn = Object.prototype.hasOwnProperty, Jc = console.createTask ? console.createTask : function() {
        return null;
      };
      Pt = {
        "react-stack-bottom-frame": function(m) {
          return m();
        }
      };
      var pu, Pr, hf = {}, Wu = Pt["react-stack-bottom-frame"].bind(Pt, ne)(), El = Jc(W(ne)), Ba = !1, Rl = /\/+/g, kc = typeof reportError == "function" ? reportError : function(m) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var D = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
            error: m
          });
          if (!window.dispatchEvent(D)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", m);
          return;
        }
        console.error(m);
      }, yf = !1, $c = null, ln = 0, aa = !1, Al = !1, an = typeof queueMicrotask == "function" ? function(m) {
        queueMicrotask(function() {
          return queueMicrotask(m);
        });
      } : Tt;
      Pt = Object.freeze({
        __proto__: null,
        c: function(m) {
          return pe().useMemoCache(m);
        }
      }), te.Children = {
        map: fe,
        forEach: function(m, D, ee) {
          fe(
            m,
            function() {
              D.apply(this, arguments);
            },
            ee
          );
        },
        count: function(m) {
          var D = 0;
          return fe(m, function() {
            D++;
          }), D;
        },
        toArray: function(m) {
          return fe(m, function(D) {
            return D;
          }) || [];
        },
        only: function(m) {
          if (!lt(m))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return m;
        }
      }, te.Component = Oe, te.Fragment = g, te.Profiler = Z, te.PureComponent = yt, te.StrictMode = N, te.Suspense = ie, te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Qe, te.__COMPILER_RUNTIME = Pt, te.act = function(m) {
        var D = Qe.actQueue, ee = ln;
        ln++;
        var ae = Qe.actQueue = D !== null ? D : [], ye = !1;
        try {
          var He = m();
        } catch (we) {
          Qe.thrownErrors.push(we);
        }
        if (0 < Qe.thrownErrors.length)
          throw ct(D, ee), m = Ut(Qe.thrownErrors), Qe.thrownErrors.length = 0, m;
        if (He !== null && typeof He == "object" && typeof He.then == "function") {
          var Be = He;
          return an(function() {
            ye || aa || (aa = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(we, el) {
              ye = !0, Be.then(
                function(nn) {
                  if (ct(D, ee), ee === 0) {
                    try {
                      K(ae), Tt(function() {
                        return A(
                          nn,
                          we,
                          el
                        );
                      });
                    } catch (Rh) {
                      Qe.thrownErrors.push(Rh);
                    }
                    if (0 < Qe.thrownErrors.length) {
                      var es = Ut(
                        Qe.thrownErrors
                      );
                      Qe.thrownErrors.length = 0, el(es);
                    }
                  } else we(nn);
                },
                function(nn) {
                  ct(D, ee), 0 < Qe.thrownErrors.length && (nn = Ut(
                    Qe.thrownErrors
                  ), Qe.thrownErrors.length = 0), el(nn);
                }
              );
            }
          };
        }
        var at = He;
        if (ct(D, ee), ee === 0 && (K(ae), ae.length !== 0 && an(function() {
          ye || aa || (aa = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Qe.actQueue = null), 0 < Qe.thrownErrors.length)
          throw m = Ut(Qe.thrownErrors), Qe.thrownErrors.length = 0, m;
        return {
          then: function(we, el) {
            ye = !0, ee === 0 ? (Qe.actQueue = ae, Tt(function() {
              return A(
                at,
                we,
                el
              );
            })) : we(at);
          }
        };
      }, te.cache = function(m) {
        return function() {
          return m.apply(null, arguments);
        };
      }, te.captureOwnerStack = function() {
        var m = Qe.getCurrentStack;
        return m === null ? null : m();
      }, te.cloneElement = function(m, D, ee) {
        if (m == null)
          throw Error(
            "The argument must be a React element, but you passed " + m + "."
          );
        var ae = Kc({}, m.props), ye = m.key, He = m._owner;
        if (D != null) {
          var Be;
          e: {
            if (Dn.call(D, "ref") && (Be = Object.getOwnPropertyDescriptor(
              D,
              "ref"
            ).get) && Be.isReactWarning) {
              Be = !1;
              break e;
            }
            Be = D.ref !== void 0;
          }
          Be && (He = M()), _e(D) && (k(D.key), ye = "" + D.key);
          for (at in D)
            !Dn.call(D, at) || at === "key" || at === "__self" || at === "__source" || at === "ref" && D.ref === void 0 || (ae[at] = D[at]);
        }
        var at = arguments.length - 2;
        if (at === 1) ae.children = ee;
        else if (1 < at) {
          Be = Array(at);
          for (var we = 0; we < at; we++)
            Be[we] = arguments[we + 2];
          ae.children = Be;
        }
        for (ae = Fe(
          m.type,
          ye,
          void 0,
          void 0,
          He,
          ae,
          m._debugStack,
          m._debugTask
        ), ye = 2; ye < arguments.length; ye++)
          He = arguments[ye], lt(He) && He._store && (He._store.validated = 1);
        return ae;
      }, te.createContext = function(m) {
        return m = {
          $$typeof: ue,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, m.Provider = m, m.Consumer = {
          $$typeof: I,
          _context: m
        }, m._currentRenderer = null, m._currentRenderer2 = null, m;
      }, te.createElement = function(m, D, ee) {
        for (var ae = 2; ae < arguments.length; ae++) {
          var ye = arguments[ae];
          lt(ye) && ye._store && (ye._store.validated = 1);
        }
        if (ae = {}, ye = null, D != null)
          for (we in Pr || !("__self" in D) || "key" in D || (Pr = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), _e(D) && (k(D.key), ye = "" + D.key), D)
            Dn.call(D, we) && we !== "key" && we !== "__self" && we !== "__source" && (ae[we] = D[we]);
        var He = arguments.length - 2;
        if (He === 1) ae.children = ee;
        else if (1 < He) {
          for (var Be = Array(He), at = 0; at < He; at++)
            Be[at] = arguments[at + 2];
          Object.freeze && Object.freeze(Be), ae.children = Be;
        }
        if (m && m.defaultProps)
          for (we in He = m.defaultProps, He)
            ae[we] === void 0 && (ae[we] = He[we]);
        ye && At(
          ae,
          typeof m == "function" ? m.displayName || m.name || "Unknown" : m
        );
        var we = 1e4 > Qe.recentlyCreatedOwnerStacks++;
        return Fe(
          m,
          ye,
          void 0,
          void 0,
          M(),
          ae,
          we ? Error("react-stack-top-frame") : Wu,
          we ? Jc(W(m)) : El
        );
      }, te.createRef = function() {
        var m = { current: null };
        return Object.seal(m), m;
      }, te.forwardRef = function(m) {
        m != null && m.$$typeof === Ue ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof m != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          m === null ? "null" : typeof m
        ) : m.length !== 0 && m.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), m != null && m.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var D = { $$typeof: Ee, render: m }, ee;
        return Object.defineProperty(D, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ee;
          },
          set: function(ae) {
            ee = ae, m.name || m.displayName || (Object.defineProperty(m, "name", { value: ae }), m.displayName = ae);
          }
        }), D;
      }, te.isValidElement = lt, te.lazy = function(m) {
        return {
          $$typeof: wt,
          _payload: { _status: -1, _result: m },
          _init: St
        };
      }, te.memo = function(m, D) {
        m == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          m === null ? "null" : typeof m
        ), D = {
          $$typeof: Ue,
          type: m,
          compare: D === void 0 ? null : D
        };
        var ee;
        return Object.defineProperty(D, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ee;
          },
          set: function(ae) {
            ee = ae, m.name || m.displayName || (Object.defineProperty(m, "name", { value: ae }), m.displayName = ae);
          }
        }), D;
      }, te.startTransition = function(m) {
        var D = Qe.T, ee = {};
        Qe.T = ee, ee._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var ae = m(), ye = Qe.S;
          ye !== null && ye(ee, ae), typeof ae == "object" && ae !== null && typeof ae.then == "function" && ae.then(Te, kc);
        } catch (He) {
          kc(He);
        } finally {
          D === null && ee._updatedFibers && (m = ee._updatedFibers.size, ee._updatedFibers.clear(), 10 < m && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), Qe.T = D;
        }
      }, te.unstable_useCacheRefresh = function() {
        return pe().useCacheRefresh();
      }, te.use = function(m) {
        return pe().use(m);
      }, te.useActionState = function(m, D, ee) {
        return pe().useActionState(
          m,
          D,
          ee
        );
      }, te.useCallback = function(m, D) {
        return pe().useCallback(m, D);
      }, te.useContext = function(m) {
        var D = pe();
        return m.$$typeof === I && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), D.useContext(m);
      }, te.useDebugValue = function(m, D) {
        return pe().useDebugValue(m, D);
      }, te.useDeferredValue = function(m, D) {
        return pe().useDeferredValue(m, D);
      }, te.useEffect = function(m, D, ee) {
        m == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var ae = pe();
        if (typeof ee == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return ae.useEffect(m, D);
      }, te.useId = function() {
        return pe().useId();
      }, te.useImperativeHandle = function(m, D, ee) {
        return pe().useImperativeHandle(m, D, ee);
      }, te.useInsertionEffect = function(m, D) {
        return m == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), pe().useInsertionEffect(m, D);
      }, te.useLayoutEffect = function(m, D) {
        return m == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), pe().useLayoutEffect(m, D);
      }, te.useMemo = function(m, D) {
        return pe().useMemo(m, D);
      }, te.useOptimistic = function(m, D) {
        return pe().useOptimistic(m, D);
      }, te.useReducer = function(m, D, ee) {
        return pe().useReducer(m, D, ee);
      }, te.useRef = function(m) {
        return pe().useRef(m);
      }, te.useState = function(m) {
        return pe().useState(m);
      }, te.useSyncExternalStore = function(m, D, ee) {
        return pe().useSyncExternalStore(
          m,
          D,
          ee
        );
      }, te.useTransition = function() {
        return pe().useTransition();
      }, te.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(pp, pp.exports)), pp.exports;
}
var H1;
function Eh() {
  return H1 || (H1 = 1, process.env.NODE_ENV === "production" ? og.exports = PS() : og.exports = eT()), og.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x1;
function tT() {
  return x1 || (x1 = 1, process.env.NODE_ENV !== "production" && function() {
    function q(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === St ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case At:
          return "Fragment";
        case Fe:
          return "Profiler";
        case Xe:
          return "StrictMode";
        case Me:
          return "Suspense";
        case vt:
          return "SuspenseList";
        case fe:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case _e:
            return "Portal";
          case lt:
            return (g.displayName || "Context") + ".Provider";
          case Ft:
            return (g._context.displayName || "Context") + ".Consumer";
          case Nt:
            var N = g.render;
            return g = g.displayName, g || (g = N.displayName || N.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case Le:
            return N = g.displayName || null, N !== null ? N : q(g.type) || "Memo";
          case gt:
            N = g._payload, g = g._init;
            try {
              return q(g(N));
            } catch {
            }
        }
      return null;
    }
    function te(g) {
      return "" + g;
    }
    function Ce(g) {
      try {
        te(g);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var Z = N.error, I = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return Z.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), te(g);
      }
    }
    function C(g) {
      if (g === At) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === gt)
        return "<...>";
      try {
        var N = q(g);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Se() {
      var g = pe.A;
      return g === null ? null : g.getOwner();
    }
    function Oe() {
      return Error("react-stack-top-frame");
    }
    function it(g) {
      if (Te.call(g, "key")) {
        var N = Object.getOwnPropertyDescriptor(g, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function yt(g, N) {
      function Z() {
        ct || (ct = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      Z.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: Z,
        configurable: !0
      });
    }
    function j() {
      var g = q(this.type);
      return A[g] || (A[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function k(g, N, Z, I, ue, Ee, ie, nl) {
      return Z = Ee.ref, g = {
        $$typeof: ne,
        type: g,
        key: N,
        props: Ee,
        _owner: ue
      }, (Z !== void 0 ? Z : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: j
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: nl
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function oe(g, N, Z, I, ue, Ee, ie, nl) {
      var Ue = N.children;
      if (Ue !== void 0)
        if (I)
          if (Tt(Ue)) {
            for (I = 0; I < Ue.length; I++)
              W(Ue[I]);
            Object.freeze && Object.freeze(Ue);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else W(Ue);
      if (Te.call(N, "key")) {
        Ue = q(g);
        var wt = Object.keys(N).filter(function(An) {
          return An !== "key";
        });
        I = 0 < wt.length ? "{key: someKey, " + wt.join(": ..., ") + ": ...}" : "{key: someKey}", me[Ue + I] || (wt = 0 < wt.length ? "{" + wt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          Ue,
          wt,
          Ue
        ), me[Ue + I] = !0);
      }
      if (Ue = null, Z !== void 0 && (Ce(Z), Ue = "" + Z), it(N) && (Ce(N.key), Ue = "" + N.key), "key" in N) {
        Z = {};
        for (var la in N)
          la !== "key" && (Z[la] = N[la]);
      } else Z = N;
      return Ue && yt(
        Z,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), k(
        g,
        Ue,
        Ee,
        ue,
        Se(),
        Z,
        ie,
        nl
      );
    }
    function W(g) {
      typeof g == "object" && g !== null && g.$$typeof === ne && g._store && (g._store.validated = 1);
    }
    var M = Eh(), ne = Symbol.for("react.transitional.element"), _e = Symbol.for("react.portal"), At = Symbol.for("react.fragment"), Xe = Symbol.for("react.strict_mode"), Fe = Symbol.for("react.profiler"), Ft = Symbol.for("react.consumer"), lt = Symbol.for("react.context"), Nt = Symbol.for("react.forward_ref"), Me = Symbol.for("react.suspense"), vt = Symbol.for("react.suspense_list"), Le = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), St = Symbol.for("react.client.reference"), pe = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Te = Object.prototype.hasOwnProperty, Tt = Array.isArray, Ut = console.createTask ? console.createTask : function() {
      return null;
    };
    M = {
      "react-stack-bottom-frame": function(g) {
        return g();
      }
    };
    var ct, A = {}, K = M["react-stack-bottom-frame"].bind(
      M,
      Oe
    )(), F = Ut(C(Oe)), me = {};
    hp.Fragment = At, hp.jsx = function(g, N, Z, I, ue) {
      var Ee = 1e4 > pe.recentlyCreatedOwnerStacks++;
      return oe(
        g,
        N,
        Z,
        !1,
        I,
        ue,
        Ee ? Error("react-stack-top-frame") : K,
        Ee ? Ut(C(g)) : F
      );
    }, hp.jsxs = function(g, N, Z, I, ue) {
      var Ee = 1e4 > pe.recentlyCreatedOwnerStacks++;
      return oe(
        g,
        N,
        Z,
        !0,
        I,
        ue,
        Ee ? Error("react-stack-top-frame") : K,
        Ee ? Ut(C(g)) : F
      );
    };
  }()), hp;
}
var N1;
function lT() {
  return N1 || (N1 = 1, process.env.NODE_ENV === "production" ? cg.exports = IS() : cg.exports = tT()), cg.exports;
}
var Zl = lT(), aT = Eh(), fg = { exports: {} }, yp = {}, rg = { exports: {} }, U0 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w1;
function nT() {
  return w1 || (w1 = 1, function(q) {
    function te(A, K) {
      var F = A.length;
      A.push(K);
      e: for (; 0 < F; ) {
        var me = F - 1 >>> 1, g = A[me];
        if (0 < Se(g, K))
          A[me] = K, A[F] = g, F = me;
        else break e;
      }
    }
    function Ce(A) {
      return A.length === 0 ? null : A[0];
    }
    function C(A) {
      if (A.length === 0) return null;
      var K = A[0], F = A.pop();
      if (F !== K) {
        A[0] = F;
        e: for (var me = 0, g = A.length, N = g >>> 1; me < N; ) {
          var Z = 2 * (me + 1) - 1, I = A[Z], ue = Z + 1, Ee = A[ue];
          if (0 > Se(I, F))
            ue < g && 0 > Se(Ee, I) ? (A[me] = Ee, A[ue] = F, me = ue) : (A[me] = I, A[Z] = F, me = Z);
          else if (ue < g && 0 > Se(Ee, F))
            A[me] = Ee, A[ue] = F, me = ue;
          else break e;
        }
      }
      return K;
    }
    function Se(A, K) {
      var F = A.sortIndex - K.sortIndex;
      return F !== 0 ? F : A.id - K.id;
    }
    if (q.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Oe = performance;
      q.unstable_now = function() {
        return Oe.now();
      };
    } else {
      var it = Date, yt = it.now();
      q.unstable_now = function() {
        return it.now() - yt;
      };
    }
    var j = [], k = [], oe = 1, W = null, M = 3, ne = !1, _e = !1, At = !1, Xe = !1, Fe = typeof setTimeout == "function" ? setTimeout : null, Ft = typeof clearTimeout == "function" ? clearTimeout : null, lt = typeof setImmediate < "u" ? setImmediate : null;
    function Nt(A) {
      for (var K = Ce(k); K !== null; ) {
        if (K.callback === null) C(k);
        else if (K.startTime <= A)
          C(k), K.sortIndex = K.expirationTime, te(j, K);
        else break;
        K = Ce(k);
      }
    }
    function Me(A) {
      if (At = !1, Nt(A), !_e)
        if (Ce(j) !== null)
          _e = !0, vt || (vt = !0, Te());
        else {
          var K = Ce(k);
          K !== null && ct(Me, K.startTime - A);
        }
    }
    var vt = !1, Le = -1, gt = 5, fe = -1;
    function St() {
      return Xe ? !0 : !(q.unstable_now() - fe < gt);
    }
    function pe() {
      if (Xe = !1, vt) {
        var A = q.unstable_now();
        fe = A;
        var K = !0;
        try {
          e: {
            _e = !1, At && (At = !1, Ft(Le), Le = -1), ne = !0;
            var F = M;
            try {
              t: {
                for (Nt(A), W = Ce(j); W !== null && !(W.expirationTime > A && St()); ) {
                  var me = W.callback;
                  if (typeof me == "function") {
                    W.callback = null, M = W.priorityLevel;
                    var g = me(
                      W.expirationTime <= A
                    );
                    if (A = q.unstable_now(), typeof g == "function") {
                      W.callback = g, Nt(A), K = !0;
                      break t;
                    }
                    W === Ce(j) && C(j), Nt(A);
                  } else C(j);
                  W = Ce(j);
                }
                if (W !== null) K = !0;
                else {
                  var N = Ce(k);
                  N !== null && ct(
                    Me,
                    N.startTime - A
                  ), K = !1;
                }
              }
              break e;
            } finally {
              W = null, M = F, ne = !1;
            }
            K = void 0;
          }
        } finally {
          K ? Te() : vt = !1;
        }
      }
    }
    var Te;
    if (typeof lt == "function")
      Te = function() {
        lt(pe);
      };
    else if (typeof MessageChannel < "u") {
      var Tt = new MessageChannel(), Ut = Tt.port2;
      Tt.port1.onmessage = pe, Te = function() {
        Ut.postMessage(null);
      };
    } else
      Te = function() {
        Fe(pe, 0);
      };
    function ct(A, K) {
      Le = Fe(function() {
        A(q.unstable_now());
      }, K);
    }
    q.unstable_IdlePriority = 5, q.unstable_ImmediatePriority = 1, q.unstable_LowPriority = 4, q.unstable_NormalPriority = 3, q.unstable_Profiling = null, q.unstable_UserBlockingPriority = 2, q.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, q.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : gt = 0 < A ? Math.floor(1e3 / A) : 5;
    }, q.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, q.unstable_next = function(A) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = M;
      }
      var F = M;
      M = K;
      try {
        return A();
      } finally {
        M = F;
      }
    }, q.unstable_requestPaint = function() {
      Xe = !0;
    }, q.unstable_runWithPriority = function(A, K) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var F = M;
      M = A;
      try {
        return K();
      } finally {
        M = F;
      }
    }, q.unstable_scheduleCallback = function(A, K, F) {
      var me = q.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? me + F : me) : F = me, A) {
        case 1:
          var g = -1;
          break;
        case 2:
          g = 250;
          break;
        case 5:
          g = 1073741823;
          break;
        case 4:
          g = 1e4;
          break;
        default:
          g = 5e3;
      }
      return g = F + g, A = {
        id: oe++,
        callback: K,
        priorityLevel: A,
        startTime: F,
        expirationTime: g,
        sortIndex: -1
      }, F > me ? (A.sortIndex = F, te(k, A), Ce(j) === null && A === Ce(k) && (At ? (Ft(Le), Le = -1) : At = !0, ct(Me, F - me))) : (A.sortIndex = g, te(j, A), _e || ne || (_e = !0, vt || (vt = !0, Te()))), A;
    }, q.unstable_shouldYield = St, q.unstable_wrapCallback = function(A) {
      var K = M;
      return function() {
        var F = M;
        M = K;
        try {
          return A.apply(this, arguments);
        } finally {
          M = F;
        }
      };
    };
  }(U0)), U0;
}
var C0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B1;
function uT() {
  return B1 || (B1 = 1, function(q) {
    process.env.NODE_ENV !== "production" && function() {
      function te() {
        if (Me = !1, fe) {
          var A = q.unstable_now();
          Te = A;
          var K = !0;
          try {
            e: {
              lt = !1, Nt && (Nt = !1, Le(St), St = -1), Ft = !0;
              var F = Fe;
              try {
                t: {
                  for (it(A), Xe = C(ne); Xe !== null && !(Xe.expirationTime > A && j()); ) {
                    var me = Xe.callback;
                    if (typeof me == "function") {
                      Xe.callback = null, Fe = Xe.priorityLevel;
                      var g = me(
                        Xe.expirationTime <= A
                      );
                      if (A = q.unstable_now(), typeof g == "function") {
                        Xe.callback = g, it(A), K = !0;
                        break t;
                      }
                      Xe === C(ne) && Se(ne), it(A);
                    } else Se(ne);
                    Xe = C(ne);
                  }
                  if (Xe !== null) K = !0;
                  else {
                    var N = C(_e);
                    N !== null && k(
                      yt,
                      N.startTime - A
                    ), K = !1;
                  }
                }
                break e;
              } finally {
                Xe = null, Fe = F, Ft = !1;
              }
              K = void 0;
            }
          } finally {
            K ? Tt() : fe = !1;
          }
        }
      }
      function Ce(A, K) {
        var F = A.length;
        A.push(K);
        e: for (; 0 < F; ) {
          var me = F - 1 >>> 1, g = A[me];
          if (0 < Oe(g, K))
            A[me] = K, A[F] = g, F = me;
          else break e;
        }
      }
      function C(A) {
        return A.length === 0 ? null : A[0];
      }
      function Se(A) {
        if (A.length === 0) return null;
        var K = A[0], F = A.pop();
        if (F !== K) {
          A[0] = F;
          e: for (var me = 0, g = A.length, N = g >>> 1; me < N; ) {
            var Z = 2 * (me + 1) - 1, I = A[Z], ue = Z + 1, Ee = A[ue];
            if (0 > Oe(I, F))
              ue < g && 0 > Oe(Ee, I) ? (A[me] = Ee, A[ue] = F, me = ue) : (A[me] = I, A[Z] = F, me = Z);
            else if (ue < g && 0 > Oe(Ee, F))
              A[me] = Ee, A[ue] = F, me = ue;
            else break e;
          }
        }
        return K;
      }
      function Oe(A, K) {
        var F = A.sortIndex - K.sortIndex;
        return F !== 0 ? F : A.id - K.id;
      }
      function it(A) {
        for (var K = C(_e); K !== null; ) {
          if (K.callback === null) Se(_e);
          else if (K.startTime <= A)
            Se(_e), K.sortIndex = K.expirationTime, Ce(ne, K);
          else break;
          K = C(_e);
        }
      }
      function yt(A) {
        if (Nt = !1, it(A), !lt)
          if (C(ne) !== null)
            lt = !0, fe || (fe = !0, Tt());
          else {
            var K = C(_e);
            K !== null && k(
              yt,
              K.startTime - A
            );
          }
      }
      function j() {
        return Me ? !0 : !(q.unstable_now() - Te < pe);
      }
      function k(A, K) {
        St = vt(function() {
          A(q.unstable_now());
        }, K);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), q.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var oe = performance;
        q.unstable_now = function() {
          return oe.now();
        };
      } else {
        var W = Date, M = W.now();
        q.unstable_now = function() {
          return W.now() - M;
        };
      }
      var ne = [], _e = [], At = 1, Xe = null, Fe = 3, Ft = !1, lt = !1, Nt = !1, Me = !1, vt = typeof setTimeout == "function" ? setTimeout : null, Le = typeof clearTimeout == "function" ? clearTimeout : null, gt = typeof setImmediate < "u" ? setImmediate : null, fe = !1, St = -1, pe = 5, Te = -1;
      if (typeof gt == "function")
        var Tt = function() {
          gt(te);
        };
      else if (typeof MessageChannel < "u") {
        var Ut = new MessageChannel(), ct = Ut.port2;
        Ut.port1.onmessage = te, Tt = function() {
          ct.postMessage(null);
        };
      } else
        Tt = function() {
          vt(te, 0);
        };
      q.unstable_IdlePriority = 5, q.unstable_ImmediatePriority = 1, q.unstable_LowPriority = 4, q.unstable_NormalPriority = 3, q.unstable_Profiling = null, q.unstable_UserBlockingPriority = 2, q.unstable_cancelCallback = function(A) {
        A.callback = null;
      }, q.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : pe = 0 < A ? Math.floor(1e3 / A) : 5;
      }, q.unstable_getCurrentPriorityLevel = function() {
        return Fe;
      }, q.unstable_next = function(A) {
        switch (Fe) {
          case 1:
          case 2:
          case 3:
            var K = 3;
            break;
          default:
            K = Fe;
        }
        var F = Fe;
        Fe = K;
        try {
          return A();
        } finally {
          Fe = F;
        }
      }, q.unstable_requestPaint = function() {
        Me = !0;
      }, q.unstable_runWithPriority = function(A, K) {
        switch (A) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            A = 3;
        }
        var F = Fe;
        Fe = A;
        try {
          return K();
        } finally {
          Fe = F;
        }
      }, q.unstable_scheduleCallback = function(A, K, F) {
        var me = q.unstable_now();
        switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? me + F : me) : F = me, A) {
          case 1:
            var g = -1;
            break;
          case 2:
            g = 250;
            break;
          case 5:
            g = 1073741823;
            break;
          case 4:
            g = 1e4;
            break;
          default:
            g = 5e3;
        }
        return g = F + g, A = {
          id: At++,
          callback: K,
          priorityLevel: A,
          startTime: F,
          expirationTime: g,
          sortIndex: -1
        }, F > me ? (A.sortIndex = F, Ce(_e, A), C(ne) === null && A === C(_e) && (Nt ? (Le(St), St = -1) : Nt = !0, k(yt, F - me))) : (A.sortIndex = g, Ce(ne, A), lt || Ft || (lt = !0, fe || (fe = !0, Tt()))), A;
      }, q.unstable_shouldYield = j, q.unstable_wrapCallback = function(A) {
        var K = Fe;
        return function() {
          var F = Fe;
          Fe = K;
          try {
            return A.apply(this, arguments);
          } finally {
            Fe = F;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(C0)), C0;
}
var Y1;
function Q1() {
  return Y1 || (Y1 = 1, process.env.NODE_ENV === "production" ? rg.exports = nT() : rg.exports = uT()), rg.exports;
}
var sg = { exports: {} }, ba = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q1;
function iT() {
  if (q1) return ba;
  q1 = 1;
  var q = Eh();
  function te(j) {
    var k = "https://react.dev/errors/" + j;
    if (1 < arguments.length) {
      k += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var oe = 2; oe < arguments.length; oe++)
        k += "&args[]=" + encodeURIComponent(arguments[oe]);
    }
    return "Minified React error #" + j + "; visit " + k + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ce() {
  }
  var C = {
    d: {
      f: Ce,
      r: function() {
        throw Error(te(522));
      },
      D: Ce,
      C: Ce,
      L: Ce,
      m: Ce,
      X: Ce,
      S: Ce,
      M: Ce
    },
    p: 0,
    findDOMNode: null
  }, Se = Symbol.for("react.portal");
  function Oe(j, k, oe) {
    var W = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Se,
      key: W == null ? null : "" + W,
      children: j,
      containerInfo: k,
      implementation: oe
    };
  }
  var it = q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function yt(j, k) {
    if (j === "font") return "";
    if (typeof k == "string")
      return k === "use-credentials" ? k : "";
  }
  return ba.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C, ba.createPortal = function(j, k) {
    var oe = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!k || k.nodeType !== 1 && k.nodeType !== 9 && k.nodeType !== 11)
      throw Error(te(299));
    return Oe(j, k, null, oe);
  }, ba.flushSync = function(j) {
    var k = it.T, oe = C.p;
    try {
      if (it.T = null, C.p = 2, j) return j();
    } finally {
      it.T = k, C.p = oe, C.d.f();
    }
  }, ba.preconnect = function(j, k) {
    typeof j == "string" && (k ? (k = k.crossOrigin, k = typeof k == "string" ? k === "use-credentials" ? k : "" : void 0) : k = null, C.d.C(j, k));
  }, ba.prefetchDNS = function(j) {
    typeof j == "string" && C.d.D(j);
  }, ba.preinit = function(j, k) {
    if (typeof j == "string" && k && typeof k.as == "string") {
      var oe = k.as, W = yt(oe, k.crossOrigin), M = typeof k.integrity == "string" ? k.integrity : void 0, ne = typeof k.fetchPriority == "string" ? k.fetchPriority : void 0;
      oe === "style" ? C.d.S(
        j,
        typeof k.precedence == "string" ? k.precedence : void 0,
        {
          crossOrigin: W,
          integrity: M,
          fetchPriority: ne
        }
      ) : oe === "script" && C.d.X(j, {
        crossOrigin: W,
        integrity: M,
        fetchPriority: ne,
        nonce: typeof k.nonce == "string" ? k.nonce : void 0
      });
    }
  }, ba.preinitModule = function(j, k) {
    if (typeof j == "string")
      if (typeof k == "object" && k !== null) {
        if (k.as == null || k.as === "script") {
          var oe = yt(
            k.as,
            k.crossOrigin
          );
          C.d.M(j, {
            crossOrigin: oe,
            integrity: typeof k.integrity == "string" ? k.integrity : void 0,
            nonce: typeof k.nonce == "string" ? k.nonce : void 0
          });
        }
      } else k == null && C.d.M(j);
  }, ba.preload = function(j, k) {
    if (typeof j == "string" && typeof k == "object" && k !== null && typeof k.as == "string") {
      var oe = k.as, W = yt(oe, k.crossOrigin);
      C.d.L(j, oe, {
        crossOrigin: W,
        integrity: typeof k.integrity == "string" ? k.integrity : void 0,
        nonce: typeof k.nonce == "string" ? k.nonce : void 0,
        type: typeof k.type == "string" ? k.type : void 0,
        fetchPriority: typeof k.fetchPriority == "string" ? k.fetchPriority : void 0,
        referrerPolicy: typeof k.referrerPolicy == "string" ? k.referrerPolicy : void 0,
        imageSrcSet: typeof k.imageSrcSet == "string" ? k.imageSrcSet : void 0,
        imageSizes: typeof k.imageSizes == "string" ? k.imageSizes : void 0,
        media: typeof k.media == "string" ? k.media : void 0
      });
    }
  }, ba.preloadModule = function(j, k) {
    if (typeof j == "string")
      if (k) {
        var oe = yt(k.as, k.crossOrigin);
        C.d.m(j, {
          as: typeof k.as == "string" && k.as !== "script" ? k.as : void 0,
          crossOrigin: oe,
          integrity: typeof k.integrity == "string" ? k.integrity : void 0
        });
      } else C.d.m(j);
  }, ba.requestFormReset = function(j) {
    C.d.r(j);
  }, ba.unstable_batchedUpdates = function(j, k) {
    return j(k);
  }, ba.useFormState = function(j, k, oe) {
    return it.H.useFormState(j, k, oe);
  }, ba.useFormStatus = function() {
    return it.H.useHostTransitionStatus();
  }, ba.version = "19.1.0", ba;
}
var Sa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j1;
function cT() {
  return j1 || (j1 = 1, process.env.NODE_ENV !== "production" && function() {
    function q() {
    }
    function te(W) {
      return "" + W;
    }
    function Ce(W, M, ne) {
      var _e = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        te(_e);
        var At = !1;
      } catch {
        At = !0;
      }
      return At && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && _e[Symbol.toStringTag] || _e.constructor.name || "Object"
      ), te(_e)), {
        $$typeof: k,
        key: _e == null ? null : "" + _e,
        children: W,
        containerInfo: M,
        implementation: ne
      };
    }
    function C(W, M) {
      if (W === "font") return "";
      if (typeof M == "string")
        return M === "use-credentials" ? M : "";
    }
    function Se(W) {
      return W === null ? "`null`" : W === void 0 ? "`undefined`" : W === "" ? "an empty string" : 'something with type "' + typeof W + '"';
    }
    function Oe(W) {
      return W === null ? "`null`" : W === void 0 ? "`undefined`" : W === "" ? "an empty string" : typeof W == "string" ? JSON.stringify(W) : typeof W == "number" ? "`" + W + "`" : 'something with type "' + typeof W + '"';
    }
    function it() {
      var W = oe.H;
      return W === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), W;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var yt = Eh(), j = {
      d: {
        f: q,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: q,
        C: q,
        L: q,
        m: q,
        X: q,
        S: q,
        M: q
      },
      p: 0,
      findDOMNode: null
    }, k = Symbol.for("react.portal"), oe = yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Sa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, Sa.createPortal = function(W, M) {
      var ne = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!M || M.nodeType !== 1 && M.nodeType !== 9 && M.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return Ce(W, M, null, ne);
    }, Sa.flushSync = function(W) {
      var M = oe.T, ne = j.p;
      try {
        if (oe.T = null, j.p = 2, W)
          return W();
      } finally {
        oe.T = M, j.p = ne, j.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Sa.preconnect = function(W, M) {
      typeof W == "string" && W ? M != null && typeof M != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        Oe(M)
      ) : M != null && typeof M.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        Se(M.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Se(W)
      ), typeof W == "string" && (M ? (M = M.crossOrigin, M = typeof M == "string" ? M === "use-credentials" ? M : "" : void 0) : M = null, j.d.C(W, M));
    }, Sa.prefetchDNS = function(W) {
      if (typeof W != "string" || !W)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          Se(W)
        );
      else if (1 < arguments.length) {
        var M = arguments[1];
        typeof M == "object" && M.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Oe(M)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Oe(M)
        );
      }
      typeof W == "string" && j.d.D(W);
    }, Sa.preinit = function(W, M) {
      if (typeof W == "string" && W ? M == null || typeof M != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        Oe(M)
      ) : M.as !== "style" && M.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        Oe(M.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Se(W)
      ), typeof W == "string" && M && typeof M.as == "string") {
        var ne = M.as, _e = C(ne, M.crossOrigin), At = typeof M.integrity == "string" ? M.integrity : void 0, Xe = typeof M.fetchPriority == "string" ? M.fetchPriority : void 0;
        ne === "style" ? j.d.S(
          W,
          typeof M.precedence == "string" ? M.precedence : void 0,
          {
            crossOrigin: _e,
            integrity: At,
            fetchPriority: Xe
          }
        ) : ne === "script" && j.d.X(W, {
          crossOrigin: _e,
          integrity: At,
          fetchPriority: Xe,
          nonce: typeof M.nonce == "string" ? M.nonce : void 0
        });
      }
    }, Sa.preinitModule = function(W, M) {
      var ne = "";
      if (typeof W == "string" && W || (ne += " The `href` argument encountered was " + Se(W) + "."), M !== void 0 && typeof M != "object" ? ne += " The `options` argument encountered was " + Se(M) + "." : M && "as" in M && M.as !== "script" && (ne += " The `as` option encountered was " + Oe(M.as) + "."), ne)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          ne
        );
      else
        switch (ne = M && typeof M.as == "string" ? M.as : "script", ne) {
          case "script":
            break;
          default:
            ne = Oe(ne), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              ne,
              W
            );
        }
      typeof W == "string" && (typeof M == "object" && M !== null ? (M.as == null || M.as === "script") && (ne = C(
        M.as,
        M.crossOrigin
      ), j.d.M(W, {
        crossOrigin: ne,
        integrity: typeof M.integrity == "string" ? M.integrity : void 0,
        nonce: typeof M.nonce == "string" ? M.nonce : void 0
      })) : M == null && j.d.M(W));
    }, Sa.preload = function(W, M) {
      var ne = "";
      if (typeof W == "string" && W || (ne += " The `href` argument encountered was " + Se(W) + "."), M == null || typeof M != "object" ? ne += " The `options` argument encountered was " + Se(M) + "." : typeof M.as == "string" && M.as || (ne += " The `as` option encountered was " + Se(M.as) + "."), ne && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ne
      ), typeof W == "string" && typeof M == "object" && M !== null && typeof M.as == "string") {
        ne = M.as;
        var _e = C(
          ne,
          M.crossOrigin
        );
        j.d.L(W, ne, {
          crossOrigin: _e,
          integrity: typeof M.integrity == "string" ? M.integrity : void 0,
          nonce: typeof M.nonce == "string" ? M.nonce : void 0,
          type: typeof M.type == "string" ? M.type : void 0,
          fetchPriority: typeof M.fetchPriority == "string" ? M.fetchPriority : void 0,
          referrerPolicy: typeof M.referrerPolicy == "string" ? M.referrerPolicy : void 0,
          imageSrcSet: typeof M.imageSrcSet == "string" ? M.imageSrcSet : void 0,
          imageSizes: typeof M.imageSizes == "string" ? M.imageSizes : void 0,
          media: typeof M.media == "string" ? M.media : void 0
        });
      }
    }, Sa.preloadModule = function(W, M) {
      var ne = "";
      typeof W == "string" && W || (ne += " The `href` argument encountered was " + Se(W) + "."), M !== void 0 && typeof M != "object" ? ne += " The `options` argument encountered was " + Se(M) + "." : M && "as" in M && typeof M.as != "string" && (ne += " The `as` option encountered was " + Se(M.as) + "."), ne && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ne
      ), typeof W == "string" && (M ? (ne = C(
        M.as,
        M.crossOrigin
      ), j.d.m(W, {
        as: typeof M.as == "string" && M.as !== "script" ? M.as : void 0,
        crossOrigin: ne,
        integrity: typeof M.integrity == "string" ? M.integrity : void 0
      })) : j.d.m(W));
    }, Sa.requestFormReset = function(W) {
      j.d.r(W);
    }, Sa.unstable_batchedUpdates = function(W, M) {
      return W(M);
    }, Sa.useFormState = function(W, M, ne) {
      return it().useFormState(W, M, ne);
    }, Sa.useFormStatus = function() {
      return it().useHostTransitionStatus();
    }, Sa.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Sa;
}
var G1;
function Z1() {
  if (G1) return sg.exports;
  G1 = 1;
  function q() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q);
      } catch (te) {
        console.error(te);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (q(), sg.exports = iT()) : sg.exports = cT(), sg.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L1;
function oT() {
  if (L1) return yp;
  L1 = 1;
  var q = Q1(), te = Eh(), Ce = Z1();
  function C(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Se(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Oe(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function it(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function yt(l) {
    if (Oe(l) !== l)
      throw Error(C(188));
  }
  function j(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Oe(l), n === null) throw Error(C(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var r = u.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (c = r.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === u) return yt(r), l;
          if (s === c) return yt(r), n;
          s = s.sibling;
        }
        throw Error(C(188));
      }
      if (u.return !== c.return) u = r, c = s;
      else {
        for (var y = !1, p = r.child; p; ) {
          if (p === u) {
            y = !0, u = r, c = s;
            break;
          }
          if (p === c) {
            y = !0, c = r, u = s;
            break;
          }
          p = p.sibling;
        }
        if (!y) {
          for (p = s.child; p; ) {
            if (p === u) {
              y = !0, u = s, c = r;
              break;
            }
            if (p === c) {
              y = !0, c = s, u = r;
              break;
            }
            p = p.sibling;
          }
          if (!y) throw Error(C(189));
        }
      }
      if (u.alternate !== c) throw Error(C(190));
    }
    if (u.tag !== 3) throw Error(C(188));
    return u.stateNode.current === u ? l : n;
  }
  function k(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = k(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var oe = Object.assign, W = Symbol.for("react.element"), M = Symbol.for("react.transitional.element"), ne = Symbol.for("react.portal"), _e = Symbol.for("react.fragment"), At = Symbol.for("react.strict_mode"), Xe = Symbol.for("react.profiler"), Fe = Symbol.for("react.provider"), Ft = Symbol.for("react.consumer"), lt = Symbol.for("react.context"), Nt = Symbol.for("react.forward_ref"), Me = Symbol.for("react.suspense"), vt = Symbol.for("react.suspense_list"), Le = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), St = Symbol.for("react.memo_cache_sentinel"), pe = Symbol.iterator;
  function Te(l) {
    return l === null || typeof l != "object" ? null : (l = pe && l[pe] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Tt = Symbol.for("react.client.reference");
  function Ut(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Tt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case _e:
        return "Fragment";
      case Xe:
        return "Profiler";
      case At:
        return "StrictMode";
      case Me:
        return "Suspense";
      case vt:
        return "SuspenseList";
      case fe:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ne:
          return "Portal";
        case lt:
          return (l.displayName || "Context") + ".Provider";
        case Ft:
          return (l._context.displayName || "Context") + ".Consumer";
        case Nt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Le:
          return n = l.displayName || null, n !== null ? n : Ut(l.type) || "Memo";
        case gt:
          n = l._payload, l = l._init;
          try {
            return Ut(l(n));
          } catch {
          }
      }
    return null;
  }
  var ct = Array.isArray, A = te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, me = [], g = -1;
  function N(l) {
    return { current: l };
  }
  function Z(l) {
    0 > g || (l.current = me[g], me[g] = null, g--);
  }
  function I(l, n) {
    g++, me[g] = l.current, l.current = n;
  }
  var ue = N(null), Ee = N(null), ie = N(null), nl = N(null);
  function Ue(l, n) {
    switch (I(ie, n), I(Ee, l), I(ue, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? qu(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = qu(n), l = Lo(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    Z(ue), I(ue, l);
  }
  function wt() {
    Z(ue), Z(Ee), Z(ie);
  }
  function la(l) {
    l.memoizedState !== null && I(nl, l);
    var n = ue.current, u = Lo(n, l.type);
    n !== u && (I(Ee, l), I(ue, u));
  }
  function An(l) {
    Ee.current === l && (Z(ue), Z(Ee)), nl.current === l && (Z(nl), va._currentValue = F);
  }
  var Gi = Object.prototype.hasOwnProperty, On = q.unstable_scheduleCallback, Kc = q.unstable_cancelCallback, df = q.unstable_shouldYield, Pt = q.unstable_requestPaint, hl = q.unstable_now, $u = q.unstable_getCurrentPriorityLevel, Ir = q.unstable_ImmediatePriority, Qe = q.unstable_UserBlockingPriority, Dn = q.unstable_NormalPriority, Jc = q.unstable_LowPriority, pu = q.unstable_IdlePriority, Pr = q.log, hf = q.unstable_setDisableYieldValue, Wu = null, El = null;
  function Ba(l) {
    if (typeof Pr == "function" && hf(l), El && typeof El.setStrictMode == "function")
      try {
        El.setStrictMode(Wu, l);
      } catch {
      }
  }
  var Rl = Math.clz32 ? Math.clz32 : $c, kc = Math.log, yf = Math.LN2;
  function $c(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (kc(l) / yf | 0) | 0;
  }
  var ln = 256, aa = 4194304;
  function Al(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function an(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var r = 0, s = l.suspendedLanes, y = l.pingedLanes;
    l = l.warmLanes;
    var p = c & 134217727;
    return p !== 0 ? (c = p & ~s, c !== 0 ? r = Al(c) : (y &= p, y !== 0 ? r = Al(y) : u || (u = p & ~l, u !== 0 && (r = Al(u))))) : (p = c & ~s, p !== 0 ? r = Al(p) : y !== 0 ? r = Al(y) : u || (u = c & ~l, u !== 0 && (r = Al(u)))), r === 0 ? 0 : n !== 0 && n !== r && (n & s) === 0 && (s = r & -r, u = n & -n, s >= u || s === 32 && (u & 4194048) !== 0) ? n : r;
  }
  function m(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function D(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ee() {
    var l = ln;
    return ln <<= 1, (ln & 4194048) === 0 && (ln = 256), l;
  }
  function ae() {
    var l = aa;
    return aa <<= 1, (aa & 62914560) === 0 && (aa = 4194304), l;
  }
  function ye(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function He(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Be(l, n, u, c, r, s) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var p = l.entanglements, S = l.expirationTimes, _ = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var Q = 31 - Rl(u), $ = 1 << Q;
      p[Q] = 0, S[Q] = -1;
      var x = _[Q];
      if (x !== null)
        for (_[Q] = null, Q = 0; Q < x.length; Q++) {
          var B = x[Q];
          B !== null && (B.lane &= -536870913);
        }
      u &= ~$;
    }
    c !== 0 && at(l, c, 0), s !== 0 && r === 0 && l.tag !== 0 && (l.suspendedLanes |= s & ~(y & ~n));
  }
  function at(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Rl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function we(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Rl(u), r = 1 << c;
      r & n | l[c] & n && (l[c] |= n), u &= ~r;
    }
  }
  function el(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function nn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function es() {
    var l = K.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : zm(l.type));
  }
  function Rh(l, n) {
    var u = K.p;
    try {
      return K.p = l, n();
    } finally {
      K.p = u;
    }
  }
  var ul = Math.random().toString(36).slice(2), yl = "__reactFiber$" + ul, Kl = "__reactProps$" + ul, Wc = "__reactContainer$" + ul, ts = "__reactEvents$" + ul, vp = "__reactListeners$" + ul, ls = "__reactHandles$" + ul, gp = "__reactResources$" + ul, se = "__reactMarker$" + ul;
  function mf(l) {
    delete l[yl], delete l[Kl], delete l[ts], delete l[vp], delete l[ls];
  }
  function Ol(l) {
    var n = l[yl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Wc] || u[yl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Hl(l); l !== null; ) {
            if (u = l[yl]) return u;
            l = Hl(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Li(l) {
    if (l = l[yl] || l[Wc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function pf(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(C(33));
  }
  function vu(l) {
    var n = l[gp];
    return n || (n = l[gp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function il(l) {
    l[se] = !0;
  }
  var vf = /* @__PURE__ */ new Set(), Ta = {};
  function Fu(l, n) {
    Iu(l, n), Iu(l + "Capture", n);
  }
  function Iu(l, n) {
    for (Ta[l] = n, l = 0; l < n.length; l++)
      vf.add(n[l]);
  }
  var bp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), as = {}, Ah = {};
  function Sp(l) {
    return Gi.call(Ah, l) ? !0 : Gi.call(as, l) ? !1 : bp.test(l) ? Ah[l] = !0 : (as[l] = !0, !1);
  }
  function gu(l, n, u) {
    if (Sp(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function gf(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function zn(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var ns, Oh;
  function Vi(l) {
    if (ns === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        ns = n && n[1] || "", Oh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ns + l + Oh;
  }
  var Jl = !1;
  function Pu(l, n) {
    if (!l || Jl) return "";
    Jl = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (B) {
                  var x = B;
                }
                Reflect.construct(l, [], $);
              } else {
                try {
                  $.call();
                } catch (B) {
                  x = B;
                }
                l.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (B) {
                x = B;
              }
              ($ = l()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (B) {
            if (B && x && typeof B.stack == "string")
              return [B.stack, x.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = c.DetermineComponentFrameRoot(), y = s[0], p = s[1];
      if (y && p) {
        var S = y.split(`
`), _ = p.split(`
`);
        for (r = c = 0; c < S.length && !S[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < _.length && !_[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === S.length || r === _.length)
          for (c = S.length - 1, r = _.length - 1; 1 <= c && 0 <= r && S[c] !== _[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (S[c] !== _[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || S[c] !== _[r]) {
                  var Q = `
` + S[c].replace(" at new ", " at ");
                  return l.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", l.displayName)), Q;
                }
              while (1 <= c && 0 <= r);
            break;
          }
      }
    } finally {
      Jl = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Vi(u) : "";
  }
  function Xi(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Vi(l.type);
      case 16:
        return Vi("Lazy");
      case 13:
        return Vi("Suspense");
      case 19:
        return Vi("SuspenseList");
      case 0:
      case 15:
        return Pu(l.type, !1);
      case 11:
        return Pu(l.type.render, !1);
      case 1:
        return Pu(l.type, !0);
      case 31:
        return Vi("Activity");
      default:
        return "";
    }
  }
  function Dh(l) {
    try {
      var n = "";
      do
        n += Xi(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function Yl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function bf(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function zh(l) {
    var n = bf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var r = u.get, s = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(y) {
          c = "" + y, s.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function ei(l) {
    l._valueTracker || (l._valueTracker = zh(l));
  }
  function Qi(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = bf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Fc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var dg = /[\n"\\]/g;
  function Ya(l) {
    return l.replace(
      dg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function us(l, n, u, c, r, s, y, p) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Yl(n)) : l.value !== "" + Yl(n) && (l.value = "" + Yl(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? Sf(l, y, Yl(n)) : u != null ? Sf(l, y, Yl(u)) : c != null && l.removeAttribute("value"), r == null && s != null && (l.defaultChecked = !!s), r != null && (l.checked = r && typeof r != "function" && typeof r != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? l.name = "" + Yl(p) : l.removeAttribute("name");
  }
  function is(l, n, u, c, r, s, y, p) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (l.type = s), n != null || u != null) {
      if (!(s !== "submit" && s !== "reset" || n != null))
        return;
      u = u != null ? "" + Yl(u) : "", n = n != null ? "" + Yl(n) : u, p || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? r, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = p ? l.checked : !!c, l.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function Sf(l, n, u) {
    n === "number" && Fc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Zi(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var r = 0; r < u.length; r++)
        n["$" + u[r]] = !0;
      for (u = 0; u < l.length; u++)
        r = n.hasOwnProperty("$" + l[u].value), l[u].selected !== r && (l[u].selected = r), r && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Yl(u), n = null, r = 0; r < l.length; r++) {
        if (l[r].value === u) {
          l[r].selected = !0, c && (l[r].defaultSelected = !0);
          return;
        }
        n !== null || l[r].disabled || (n = l[r]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Mh(l, n, u) {
    if (n != null && (n = "" + Yl(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Yl(u) : "";
  }
  function Uh(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(C(92));
        if (ct(c)) {
          if (1 < c.length) throw Error(C(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Yl(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Ic(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Tp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function cs(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Tp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Tf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(C(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var r in n)
        c = n[r], n.hasOwnProperty(r) && u[r] !== c && cs(l, r, c);
    } else
      for (var s in n)
        n.hasOwnProperty(s) && cs(l, s, n[s]);
  }
  function Ki(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var hg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Ep = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ef(l) {
    return Ep.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Ji = null;
  function os(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Pc = null, eo = null;
  function Rp(l) {
    var n = Li(l);
    if (n && (l = n.stateNode)) {
      var u = l[Kl] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (us(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Ya(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var r = c[Kl] || null;
                if (!r) throw Error(C(90));
                us(
                  c,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Qi(c);
          }
          break e;
        case "textarea":
          Mh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Zi(l, !!u.multiple, n, !1);
      }
    }
  }
  var Ch = !1;
  function to(l, n, u) {
    if (Ch) return l(n, u);
    Ch = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Ch = !1, (Pc !== null || eo !== null) && (Oc(), Pc && (n = Pc, l = eo, eo = Pc = null, Rp(n), l)))
        for (n = 0; n < l.length; n++) Rp(l[n]);
    }
  }
  function ki(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Kl] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        C(231, n, typeof u)
      );
    return u;
  }
  var Mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fs = !1;
  if (Mn)
    try {
      var bu = {};
      Object.defineProperty(bu, "passive", {
        get: function() {
          fs = !0;
        }
      }), window.addEventListener("test", bu, bu), window.removeEventListener("test", bu, bu);
    } catch {
      fs = !1;
    }
  var Su = null, lo = null, $i = null;
  function _h() {
    if ($i) return $i;
    var l, n = lo, u = n.length, c, r = "value" in Su ? Su.value : Su.textContent, s = r.length;
    for (l = 0; l < u && n[l] === r[l]; l++) ;
    var y = u - l;
    for (c = 1; c <= y && n[u - c] === r[s - c]; c++) ;
    return $i = r.slice(l, 1 < c ? 1 - c : void 0);
  }
  function Dl(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function rs() {
    return !0;
  }
  function ss() {
    return !1;
  }
  function kl(l) {
    function n(u, c, r, s, y) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = s, this.target = y, this.currentTarget = null;
      for (var p in l)
        l.hasOwnProperty(p) && (u = l[p], this[p] = u ? u(s) : s[p]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? rs : ss, this.isPropagationStopped = ss, this;
    }
    return oe(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = rs);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = rs);
      },
      persist: function() {
      },
      isPersistent: rs
    }), n;
  }
  var ti = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ds = kl(ti), Rf = oe({}, ti, { view: 0, detail: 0 }), Ap = kl(Rf), Hh, hs, Af, Wi = oe({}, Rf, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Tu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Af && (Af && l.type === "mousemove" ? (Hh = l.screenX - Af.screenX, hs = l.screenY - Af.screenY) : hs = Hh = 0, Af = l), Hh);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : hs;
    }
  }), xh = kl(Wi), Op = oe({}, Wi, { dataTransfer: 0 }), Dp = kl(Op), yg = oe({}, Rf, { relatedTarget: 0 }), Nh = kl(yg), mg = oe({}, ti, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), pg = kl(mg), vg = oe({}, ti, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Of = kl(vg), zp = oe({}, ti, { data: 0 }), wh = kl(zp), Mp = {
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
  }, Up = {
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
  }, Bh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Cp(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Bh[l]) ? !!n[l] : !1;
  }
  function Tu() {
    return Cp;
  }
  var Fi = oe({}, Rf, {
    key: function(l) {
      if (l.key) {
        var n = Mp[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = Dl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Up[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tu,
    charCode: function(l) {
      return l.type === "keypress" ? Dl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Dl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), un = kl(Fi), Ea = oe({}, Wi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Df = kl(Ea), ys = oe({}, Rf, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tu
  }), Yh = kl(ys), na = oe({}, ti, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), _p = kl(na), ms = oe({}, Wi, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ii = kl(ms), qh = oe({}, ti, {
    newState: 0,
    oldState: 0
  }), Hp = kl(qh), xp = [9, 13, 27, 32], zf = Mn && "CompositionEvent" in window, Mf = null;
  Mn && "documentMode" in document && (Mf = document.documentMode);
  var jh = Mn && "TextEvent" in window && !Mf, Un = Mn && (!zf || Mf && 8 < Mf && 11 >= Mf), Gh = " ", ps = !1;
  function Uf(l, n) {
    switch (l) {
      case "keyup":
        return xp.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function li(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ai = !1;
  function Lh(l, n) {
    switch (l) {
      case "compositionend":
        return li(n);
      case "keypress":
        return n.which !== 32 ? null : (ps = !0, Gh);
      case "textInput":
        return l = n.data, l === Gh && ps ? null : l;
      default:
        return null;
    }
  }
  function Pi(l, n) {
    if (ai)
      return l === "compositionend" || !zf && Uf(l, n) ? (l = _h(), $i = lo = Su = null, ai = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Un && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Np = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function vs(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Np[l.type] : n === "textarea";
  }
  function gs(l, n, u, c) {
    Pc ? eo ? eo.push(c) : eo = [c] : Pc = c, n = Go(n, "onChange"), 0 < n.length && (u = new ds(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var cn = null, on = null;
  function Vh(l) {
    Uc(l, 0);
  }
  function Cn(l) {
    var n = pf(l);
    if (Qi(n)) return l;
  }
  function Xh(l, n) {
    if (l === "change") return n;
  }
  var Qh = !1;
  if (Mn) {
    var ec;
    if (Mn) {
      var tc = "oninput" in document;
      if (!tc) {
        var Zh = document.createElement("div");
        Zh.setAttribute("oninput", "return;"), tc = typeof Zh.oninput == "function";
      }
      ec = tc;
    } else ec = !1;
    Qh = ec && (!document.documentMode || 9 < document.documentMode);
  }
  function ao() {
    cn && (cn.detachEvent("onpropertychange", Kh), on = cn = null);
  }
  function Kh(l) {
    if (l.propertyName === "value" && Cn(on)) {
      var n = [];
      gs(
        n,
        on,
        l,
        os(l)
      ), to(Vh, n);
    }
  }
  function bs(l, n, u) {
    l === "focusin" ? (ao(), cn = n, on = u, cn.attachEvent("onpropertychange", Kh)) : l === "focusout" && ao();
  }
  function ni(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Cn(on);
  }
  function Eu(l, n) {
    if (l === "click") return Cn(n);
  }
  function Jh(l, n) {
    if (l === "input" || l === "change")
      return Cn(n);
  }
  function kh(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var zl = typeof Object.is == "function" ? Object.is : kh;
  function ui(l, n) {
    if (zl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var r = u[c];
      if (!Gi.call(n, r) || !zl(l[r], n[r]))
        return !1;
    }
    return !0;
  }
  function ii(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function _t(l, n) {
    var u = ii(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ii(u);
    }
  }
  function Cf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Cf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function $h(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Fc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Fc(l.document);
    }
    return n;
  }
  function _f(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var lc = Mn && "documentMode" in document && 11 >= document.documentMode, _n = null, fn = null, ci = null, ac = !1;
  function Ss(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    ac || _n == null || _n !== Fc(c) || (c = _n, "selectionStart" in c && _f(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), ci && ui(ci, c) || (ci = c, c = Go(fn, "onSelect"), 0 < c.length && (n = new ds(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = _n)));
  }
  function Ru(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var nc = {
    animationend: Ru("Animation", "AnimationEnd"),
    animationiteration: Ru("Animation", "AnimationIteration"),
    animationstart: Ru("Animation", "AnimationStart"),
    transitionrun: Ru("Transition", "TransitionRun"),
    transitionstart: Ru("Transition", "TransitionStart"),
    transitioncancel: Ru("Transition", "TransitionCancel"),
    transitionend: Ru("Transition", "TransitionEnd")
  }, qa = {}, rn = {};
  Mn && (rn = document.createElement("div").style, "AnimationEvent" in window || (delete nc.animationend.animation, delete nc.animationiteration.animation, delete nc.animationstart.animation), "TransitionEvent" in window || delete nc.transitionend.transition);
  function Hn(l) {
    if (qa[l]) return qa[l];
    if (!nc[l]) return l;
    var n = nc[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in rn)
        return qa[l] = n[u];
    return l;
  }
  var wp = Hn("animationend"), Wh = Hn("animationiteration"), Bp = Hn("animationstart"), Fh = Hn("transitionrun"), Ts = Hn("transitionstart"), Yp = Hn("transitioncancel"), Ih = Hn("transitionend"), Ph = /* @__PURE__ */ new Map(), no = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  no.push("scrollEnd");
  function ja(l, n) {
    Ph.set(l, n), Fu(n, [l]);
  }
  var ey = /* @__PURE__ */ new WeakMap();
  function Ra(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = ey.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Dh(n)
      }, ey.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Dh(n)
    };
  }
  var ua = [], oi = 0, xn = 0;
  function sn() {
    for (var l = oi, n = xn = oi = 0; n < l; ) {
      var u = ua[n];
      ua[n++] = null;
      var c = ua[n];
      ua[n++] = null;
      var r = ua[n];
      ua[n++] = null;
      var s = ua[n];
      if (ua[n++] = null, c !== null && r !== null) {
        var y = c.pending;
        y === null ? r.next = r : (r.next = y.next, y.next = r), c.pending = r;
      }
      s !== 0 && io(u, r, s);
    }
  }
  function fi(l, n, u, c) {
    ua[oi++] = l, ua[oi++] = n, ua[oi++] = u, ua[oi++] = c, xn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function uo(l, n, u, c) {
    return fi(l, n, u, c), Hf(l);
  }
  function Nn(l, n) {
    return fi(l, null, null, n), Hf(l);
  }
  function io(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var r = !1, s = l.return; s !== null; )
      s.childLanes |= u, c = s.alternate, c !== null && (c.childLanes |= u), s.tag === 22 && (l = s.stateNode, l === null || l._visibility & 1 || (r = !0)), l = s, s = s.return;
    return l.tag === 3 ? (s = l.stateNode, r && n !== null && (r = 31 - Rl(u), l = s.hiddenUpdates, c = l[r], c === null ? l[r] = [n] : c.push(n), n.lane = u | 536870912), s) : null;
  }
  function Hf(l) {
    if (50 < No)
      throw No = 0, em = null, Error(C(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var co = {};
  function qp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ia(l, n, u, c) {
    return new qp(l, n, u, c);
  }
  function xf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function dn(l, n) {
    var u = l.alternate;
    return u === null ? (u = ia(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Ke(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function P(l, n, u, c, r, s) {
    var y = 0;
    if (c = l, typeof l == "function") xf(l) && (y = 1);
    else if (typeof l == "string")
      y = gv(
        l,
        u,
        ue.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case fe:
          return l = ia(31, u, n, r), l.elementType = fe, l.lanes = s, l;
        case _e:
          return Ga(u.children, r, s, n);
        case At:
          y = 8, r |= 24;
          break;
        case Xe:
          return l = ia(12, u, n, r | 2), l.elementType = Xe, l.lanes = s, l;
        case Me:
          return l = ia(13, u, n, r), l.elementType = Me, l.lanes = s, l;
        case vt:
          return l = ia(19, u, n, r), l.elementType = vt, l.lanes = s, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Fe:
              case lt:
                y = 10;
                break e;
              case Ft:
                y = 9;
                break e;
              case Nt:
                y = 11;
                break e;
              case Le:
                y = 14;
                break e;
              case gt:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            C(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = ia(y, u, n, r), n.elementType = l, n.type = c, n.lanes = s, n;
  }
  function Ga(l, n, u, c) {
    return l = ia(7, l, c, n), l.lanes = u, l;
  }
  function oo(l, n, u) {
    return l = ia(6, l, null, n), l.lanes = u, l;
  }
  function Gt(l, n, u) {
    return n = ia(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var ri = [], si = 0, Nf = null, fo = 0, La = [], ca = 0, Au = null, hn = 1, Xt = "";
  function nt(l, n) {
    ri[si++] = fo, ri[si++] = Nf, Nf = l, fo = n;
  }
  function Es(l, n, u) {
    La[ca++] = hn, La[ca++] = Xt, La[ca++] = Au, Au = l;
    var c = hn;
    l = Xt;
    var r = 32 - Rl(c) - 1;
    c &= ~(1 << r), u += 1;
    var s = 32 - Rl(n) + r;
    if (30 < s) {
      var y = r - r % 5;
      s = (c & (1 << y) - 1).toString(32), c >>= y, r -= y, hn = 1 << 32 - Rl(n) + r | u << r | c, Xt = s + l;
    } else
      hn = 1 << s | u << r | c, Xt = l;
  }
  function uc(l) {
    l.return !== null && (nt(l, 1), Es(l, 1, 0));
  }
  function wn(l) {
    for (; l === Nf; )
      Nf = ri[--si], ri[si] = null, fo = ri[--si], ri[si] = null;
    for (; l === Au; )
      Au = La[--ca], La[ca] = null, Xt = La[--ca], La[ca] = null, hn = La[--ca], La[ca] = null;
  }
  var It = null, rt = null, ft = !1, Va = null, Xa = !1, ic = Error(C(519));
  function Ou(l) {
    var n = Error(C(418, ""));
    throw ho(Ra(n, l)), ic;
  }
  function wf(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[yl] = l, n[Kl] = c, u) {
      case "dialog":
        qe("cancel", n), qe("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        qe("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Sr.length; u++)
          qe(Sr[u], n);
        break;
      case "source":
        qe("error", n);
        break;
      case "img":
      case "image":
      case "link":
        qe("error", n), qe("load", n);
        break;
      case "details":
        qe("toggle", n);
        break;
      case "input":
        qe("invalid", n), is(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), ei(n);
        break;
      case "select":
        qe("invalid", n);
        break;
      case "textarea":
        qe("invalid", n), Uh(n, c.value, c.defaultValue, c.children), ei(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || ym(n.textContent, u) ? (c.popover != null && (qe("beforetoggle", n), qe("toggle", n)), c.onScroll != null && qe("scroll", n), c.onScrollEnd != null && qe("scrollend", n), c.onClick != null && (n.onclick = Hd), n = !0) : n = !1, n || Ou(l);
  }
  function ty(l) {
    for (It = l.return; It; )
      switch (It.tag) {
        case 5:
        case 13:
          Xa = !1;
          return;
        case 27:
        case 3:
          Xa = !0;
          return;
        default:
          It = It.return;
      }
  }
  function ro(l) {
    if (l !== It) return !1;
    if (!ft) return ty(l), ft = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || tu(l.type, l.memoizedProps)), u = !u), u && rt && Ou(l), ty(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(C(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                rt = bn(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        rt = null;
      }
    } else
      n === 27 ? (n = rt, Ui(l.type) ? (l = Ci, Ci = null, rt = l) : rt = n) : rt = It ? bn(l.stateNode.nextSibling) : null;
    return !0;
  }
  function so() {
    rt = It = null, ft = !1;
  }
  function ly() {
    var l = Va;
    return l !== null && (ha === null ? ha = l : ha.push.apply(
      ha,
      l
    ), Va = null), l;
  }
  function ho(l) {
    Va === null ? Va = [l] : Va.push(l);
  }
  var Bf = N(null), Du = null, yn = null;
  function zu(l, n, u) {
    I(Bf, n._currentValue), n._currentValue = u;
  }
  function Bn(l) {
    l._currentValue = Bf.current, Z(Bf);
  }
  function Rs(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function ay(l, n, u, c) {
    var r = l.child;
    for (r !== null && (r.return = l); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var y = r.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var p = s;
          s = r;
          for (var S = 0; S < n.length; S++)
            if (p.context === n[S]) {
              s.lanes |= u, p = s.alternate, p !== null && (p.lanes |= u), Rs(
                s.return,
                u,
                l
              ), c || (y = null);
              break e;
            }
          s = p.next;
        }
      } else if (r.tag === 18) {
        if (y = r.return, y === null) throw Error(C(341));
        y.lanes |= u, s = y.alternate, s !== null && (s.lanes |= u), Rs(y, u, l), y = null;
      } else y = r.child;
      if (y !== null) y.return = r;
      else
        for (y = r; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (r = y.sibling, r !== null) {
            r.return = y.return, y = r;
            break;
          }
          y = y.return;
        }
      r = y;
    }
  }
  function yo(l, n, u, c) {
    l = null;
    for (var r = n, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var y = r.alternate;
        if (y === null) throw Error(C(387));
        if (y = y.memoizedProps, y !== null) {
          var p = r.type;
          zl(r.pendingProps.value, y.value) || (l !== null ? l.push(p) : l = [p]);
        }
      } else if (r === nl.current) {
        if (y = r.alternate, y === null) throw Error(C(387));
        y.memoizedState.memoizedState !== r.memoizedState.memoizedState && (l !== null ? l.push(va) : l = [va]);
      }
      r = r.return;
    }
    l !== null && ay(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Yf(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!zl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function di(l) {
    Du = l, yn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function ml(l) {
    return ny(Du, l);
  }
  function qf(l, n) {
    return Du === null && di(l), ny(l, n);
  }
  function ny(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, yn === null) {
      if (l === null) throw Error(C(308));
      yn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else yn = yn.next = n;
    return u;
  }
  var mo = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, As = q.unstable_scheduleCallback, jp = q.unstable_NormalPriority, cl = {
    $$typeof: lt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function po() {
    return {
      controller: new mo(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Yn(l) {
    l.refCount--, l.refCount === 0 && As(jp, function() {
      l.controller.abort();
    });
  }
  var hi = null, jf = 0, Qa = 0, ol = null;
  function Os(l, n) {
    if (hi === null) {
      var u = hi = [];
      jf = 0, Qa = Mc(), ol = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return jf++, n.then(Ds, Ds), n;
  }
  function Ds() {
    if (--jf === 0 && hi !== null) {
      ol !== null && (ol.status = "fulfilled");
      var l = hi;
      hi = null, Qa = 0, ol = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Gp(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        u.push(r);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var r = 0; r < u.length; r++) (0, u[r])(n);
      },
      function(r) {
        for (c.status = "rejected", c.reason = r, r = 0; r < u.length; r++)
          (0, u[r])(void 0);
      }
    ), c;
  }
  var zs = A.S;
  A.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Os(l, n), zs !== null && zs(l, n);
  };
  var qn = N(null);
  function Gf() {
    var l = qn.current;
    return l !== null ? l : Mt.pooledCache;
  }
  function cc(l, n) {
    n === null ? I(qn, qn.current) : I(qn, n.pool);
  }
  function Ms() {
    var l = Gf();
    return l === null ? null : { parent: cl._currentValue, pool: l };
  }
  var yi = Error(C(460)), Us = Error(C(474)), Lf = Error(C(542)), Cs = { then: function() {
  } };
  function _s(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Vf() {
  }
  function uy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Vf, Vf), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, cy(l), l;
      default:
        if (typeof n.status == "string") n.then(Vf, Vf);
        else {
          if (l = Mt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(C(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "fulfilled", r.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "rejected", r.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, cy(l), l;
        }
        throw oc = n, yi;
    }
  }
  var oc = null;
  function iy() {
    if (oc === null) throw Error(C(459));
    var l = oc;
    return oc = null, l;
  }
  function cy(l) {
    if (l === yi || l === Lf)
      throw Error(C(483));
  }
  var jn = !1;
  function Hs(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function xs(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function oa(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Gn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (pt & 2) !== 0) {
      var r = c.pending;
      return r === null ? n.next = n : (n.next = r.next, r.next = n), c.pending = n, n = Hf(l), io(l, null, u), n;
    }
    return fi(l, c, n, u), Hf(l);
  }
  function fc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, we(l, u);
    }
  }
  function oy(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var r = null, s = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          s === null ? r = s = y : s = s.next = y, u = u.next;
        } while (u !== null);
        s === null ? r = s = n : s = s.next = n;
      } else r = s = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var fy = !1;
  function vo() {
    if (fy) {
      var l = ol;
      if (l !== null) throw l;
    }
  }
  function Mu(l, n, u, c) {
    fy = !1;
    var r = l.updateQueue;
    jn = !1;
    var s = r.firstBaseUpdate, y = r.lastBaseUpdate, p = r.shared.pending;
    if (p !== null) {
      r.shared.pending = null;
      var S = p, _ = S.next;
      S.next = null, y === null ? s = _ : y.next = _, y = S;
      var Q = l.alternate;
      Q !== null && (Q = Q.updateQueue, p = Q.lastBaseUpdate, p !== y && (p === null ? Q.firstBaseUpdate = _ : p.next = _, Q.lastBaseUpdate = S));
    }
    if (s !== null) {
      var $ = r.baseState;
      y = 0, Q = _ = S = null, p = s;
      do {
        var x = p.lane & -536870913, B = x !== p.lane;
        if (B ? (Pe & x) === x : (c & x) === x) {
          x !== 0 && x === Qa && (fy = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          e: {
            var ge = l, be = p;
            x = n;
            var dt = u;
            switch (be.tag) {
              case 1:
                if (ge = be.payload, typeof ge == "function") {
                  $ = ge.call(dt, $, x);
                  break e;
                }
                $ = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = be.payload, x = typeof ge == "function" ? ge.call(dt, $, x) : ge, x == null) break e;
                $ = oe({}, $, x);
                break e;
              case 2:
                jn = !0;
            }
          }
          x = p.callback, x !== null && (l.flags |= 64, B && (l.flags |= 8192), B = r.callbacks, B === null ? r.callbacks = [x] : B.push(x));
        } else
          B = {
            lane: x,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, Q === null ? (_ = Q = B, S = $) : Q = Q.next = B, y |= x;
        if (p = p.next, p === null) {
          if (p = r.shared.pending, p === null)
            break;
          B = p, p = B.next, B.next = null, r.lastBaseUpdate = B, r.shared.pending = null;
        }
      } while (!0);
      Q === null && (S = $), r.baseState = S, r.firstBaseUpdate = _, r.lastBaseUpdate = Q, s === null && (r.shared.lanes = 0), wu |= y, l.lanes = y, l.memoizedState = $;
    }
  }
  function Ns(l, n) {
    if (typeof l != "function")
      throw Error(C(191, l));
    l.call(n);
  }
  function Xf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Ns(u[l], n);
  }
  var rc = N(null), Qf = N(0);
  function pl(l, n) {
    l = Nu, I(Qf, l), I(rc, n), Nu = l | n.baseLanes;
  }
  function go() {
    I(Qf, Nu), I(rc, rc.current);
  }
  function bo() {
    Nu = Qf.current, Z(rc), Z(Qf);
  }
  var Za = 0, Ye = null, mt = null, Lt = null, Zf = !1, Aa = !1, mi = !1, mn = 0, Oa = 0, Uu = null, ry = 0;
  function Vt() {
    throw Error(C(321));
  }
  function ws(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!zl(l[u], n[u])) return !1;
    return !0;
  }
  function Bs(l, n, u, c, r, s) {
    return Za = s, Ye = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, A.H = l === null || l.memoizedState === null ? Oy : Dy, mi = !1, s = u(c, r), mi = !1, Aa && (s = sy(
      n,
      u,
      c,
      r
    )), pi(l), s;
  }
  function pi(l) {
    A.H = Ps;
    var n = mt !== null && mt.next !== null;
    if (Za = 0, Lt = mt = Ye = null, Zf = !1, Oa = 0, Uu = null, n) throw Error(C(300));
    l === null || fl || (l = l.dependencies, l !== null && Yf(l) && (fl = !0));
  }
  function sy(l, n, u, c) {
    Ye = l;
    var r = 0;
    do {
      if (Aa && (Uu = null), Oa = 0, Aa = !1, 25 <= r) throw Error(C(301));
      if (r += 1, Lt = mt = null, l.updateQueue != null) {
        var s = l.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      A.H = Cu, s = n(u, c);
    } while (Aa);
    return s;
  }
  function Lp() {
    var l = A.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Jf(n) : n, l = l.useState()[0], (mt !== null ? mt.memoizedState : null) !== l && (Ye.flags |= 1024), n;
  }
  function Ys() {
    var l = mn !== 0;
    return mn = 0, l;
  }
  function So(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function qs(l) {
    if (Zf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Zf = !1;
    }
    Za = 0, Lt = mt = Ye = null, Aa = !1, Oa = mn = 0, Uu = null;
  }
  function ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Lt === null ? Ye.memoizedState = Lt = l : Lt = Lt.next = l, Lt;
  }
  function Qt() {
    if (mt === null) {
      var l = Ye.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = mt.next;
    var n = Lt === null ? Ye.memoizedState : Lt.next;
    if (n !== null)
      Lt = n, mt = l;
    else {
      if (l === null)
        throw Ye.alternate === null ? Error(C(467)) : Error(C(310));
      mt = l, l = {
        memoizedState: mt.memoizedState,
        baseState: mt.baseState,
        baseQueue: mt.baseQueue,
        queue: mt.queue,
        next: null
      }, Lt === null ? Ye.memoizedState = Lt = l : Lt = Lt.next = l;
    }
    return Lt;
  }
  function Kf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Jf(l) {
    var n = Oa;
    return Oa += 1, Uu === null && (Uu = []), l = uy(Uu, l, n), n = Ye, (Lt === null ? n.memoizedState : Lt.next) === null && (n = n.alternate, A.H = n === null || n.memoizedState === null ? Oy : Dy), l;
  }
  function tl(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Jf(l);
      if (l.$$typeof === lt) return ml(l);
    }
    throw Error(C(438, String(l)));
  }
  function js(l) {
    var n = null, u = Ye.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Ye.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Kf(), Ye.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = St;
    return n.index++, u;
  }
  function Ln(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function kf(l) {
    var n = Qt();
    return Gs(n, mt, l);
  }
  function Gs(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(C(311));
    c.lastRenderedReducer = u;
    var r = l.baseQueue, s = c.pending;
    if (s !== null) {
      if (r !== null) {
        var y = r.next;
        r.next = s.next, s.next = y;
      }
      n.baseQueue = r = s, c.pending = null;
    }
    if (s = l.baseState, r === null) l.memoizedState = s;
    else {
      n = r.next;
      var p = y = null, S = null, _ = n, Q = !1;
      do {
        var $ = _.lane & -536870913;
        if ($ !== _.lane ? (Pe & $) === $ : (Za & $) === $) {
          var x = _.revertLane;
          if (x === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), $ === Qa && (Q = !0);
          else if ((Za & x) === x) {
            _ = _.next, x === Qa && (Q = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: _.revertLane,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, S === null ? (p = S = $, y = s) : S = S.next = $, Ye.lanes |= x, wu |= x;
          $ = _.action, mi && u(s, $), s = _.hasEagerState ? _.eagerState : u(s, $);
        } else
          x = {
            lane: $,
            revertLane: _.revertLane,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, S === null ? (p = S = x, y = s) : S = S.next = x, Ye.lanes |= $, wu |= $;
        _ = _.next;
      } while (_ !== null && _ !== n);
      if (S === null ? y = s : S.next = p, !zl(s, l.memoizedState) && (fl = !0, Q && (u = ol, u !== null)))
        throw u;
      l.memoizedState = s, l.baseState = y, l.baseQueue = S, c.lastRenderedState = s;
    }
    return r === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Ls(l) {
    var n = Qt(), u = n.queue;
    if (u === null) throw Error(C(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, r = u.pending, s = n.memoizedState;
    if (r !== null) {
      u.pending = null;
      var y = r = r.next;
      do
        s = l(s, y.action), y = y.next;
      while (y !== r);
      zl(s, n.memoizedState) || (fl = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), u.lastRenderedState = s;
    }
    return [s, c];
  }
  function $f(l, n, u) {
    var c = Ye, r = Qt(), s = ft;
    if (s) {
      if (u === void 0) throw Error(C(407));
      u = u();
    } else u = n();
    var y = !zl(
      (mt || r).memoizedState,
      u
    );
    y && (r.memoizedState = u, fl = !0), r = r.queue;
    var p = hy.bind(null, c, r, l);
    if (Ot(2048, 8, p, [l]), r.getSnapshot !== n || y || Lt !== null && Lt.memoizedState.tag & 1) {
      if (c.flags |= 2048, fa(
        9,
        If(),
        dy.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), Mt === null) throw Error(C(349));
      s || (Za & 124) !== 0 || Vs(c, n, u);
    }
    return u;
  }
  function Vs(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Ye.updateQueue, n === null ? (n = Kf(), Ye.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function dy(l, n, u, c) {
    n.value = u, n.getSnapshot = c, yy(n) && Xs(l);
  }
  function hy(l, n, u) {
    return u(function() {
      yy(n) && Xs(l);
    });
  }
  function yy(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !zl(l, u);
    } catch {
      return !0;
    }
  }
  function Xs(l) {
    var n = Nn(l, 2);
    n !== null && Ma(n, l, 2);
  }
  function Wf(l) {
    var n = ql();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), mi) {
        Ba(!0);
        try {
          u();
        } finally {
          Ba(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ln,
      lastRenderedState: l
    }, n;
  }
  function Qs(l, n, u, c) {
    return l.baseState = u, Gs(
      l,
      mt,
      typeof c == "function" ? c : Ln
    );
  }
  function Vp(l, n, u, c, r) {
    if (yc(l)) throw Error(C(485));
    if (l = n.action, l !== null) {
      var s = {
        payload: r,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          s.listeners.push(y);
        }
      };
      A.T !== null ? u(!0) : s.isTransition = !1, c(s), u = n.pending, u === null ? (s.next = n.pending = s, Zs(n, s)) : (s.next = u.next, n.pending = u.next = s);
    }
  }
  function Zs(l, n) {
    var u = n.action, c = n.payload, r = l.state;
    if (n.isTransition) {
      var s = A.T, y = {};
      A.T = y;
      try {
        var p = u(r, c), S = A.S;
        S !== null && S(y, p), Ff(l, n, p);
      } catch (_) {
        Js(l, n, _);
      } finally {
        A.T = s;
      }
    } else
      try {
        s = u(r, c), Ff(l, n, s);
      } catch (_) {
        Js(l, n, _);
      }
  }
  function Ff(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Ks(l, n, c);
      },
      function(c) {
        return Js(l, n, c);
      }
    ) : Ks(l, n, u);
  }
  function Ks(l, n, u) {
    n.status = "fulfilled", n.value = u, my(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Zs(l, u)));
  }
  function Js(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, my(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function my(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function ks(l, n) {
    return n;
  }
  function py(l, n) {
    if (ft) {
      var u = Mt.formState;
      if (u !== null) {
        e: {
          var c = Ye;
          if (ft) {
            if (rt) {
              t: {
                for (var r = rt, s = Xa; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break t;
                  }
                  if (r = bn(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                rt = bn(
                  r.nextSibling
                ), c = r.data === "F!";
                break e;
              }
            }
            Ou(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = ql(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ks,
      lastRenderedState: n
    }, u.queue = c, u = Ry.bind(
      null,
      Ye,
      c
    ), c.dispatch = u, c = Wf(!1), s = tr.bind(
      null,
      Ye,
      !1,
      c.queue
    ), c = ql(), r = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = r, u = Vp.bind(
      null,
      Ye,
      r,
      s,
      u
    ), r.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Vn(l) {
    var n = Qt();
    return $s(n, mt, l);
  }
  function $s(l, n, u) {
    if (n = Gs(
      l,
      n,
      ks
    )[0], l = kf(Ln)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Jf(n);
      } catch (y) {
        throw y === yi ? Lf : y;
      }
    else c = n;
    n = Qt();
    var r = n.queue, s = r.dispatch;
    return u !== n.memoizedState && (Ye.flags |= 2048, fa(
      9,
      If(),
      gg.bind(null, r, u),
      null
    )), [c, s, l];
  }
  function gg(l, n) {
    l.action = n;
  }
  function Ws(l) {
    var n = Qt(), u = mt;
    if (u !== null)
      return $s(n, u, l);
    Qt(), n = n.memoizedState, u = Qt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function fa(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Ye.updateQueue, n === null && (n = Kf(), Ye.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function If() {
    return { destroy: void 0, resource: void 0 };
  }
  function Pf() {
    return Qt().memoizedState;
  }
  function vi(l, n, u, c) {
    var r = ql();
    c = c === void 0 ? null : c, Ye.flags |= l, r.memoizedState = fa(
      1 | n,
      If(),
      u,
      c
    );
  }
  function Ot(l, n, u, c) {
    var r = Qt();
    c = c === void 0 ? null : c;
    var s = r.memoizedState.inst;
    mt !== null && c !== null && ws(c, mt.memoizedState.deps) ? r.memoizedState = fa(n, s, u, c) : (Ye.flags |= l, r.memoizedState = fa(
      1 | n,
      s,
      u,
      c
    ));
  }
  function Xp(l, n) {
    vi(8390656, 8, l, n);
  }
  function Qp(l, n) {
    Ot(2048, 8, l, n);
  }
  function vy(l, n) {
    return Ot(4, 2, l, n);
  }
  function pn(l, n) {
    return Ot(4, 4, l, n);
  }
  function gy(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Fs(l, n, u) {
    u = u != null ? u.concat([l]) : null, Ot(4, 4, gy.bind(null, n, l), u);
  }
  function sc() {
  }
  function dc(l, n) {
    var u = Qt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && ws(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function by(l, n) {
    var u = Qt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && ws(n, c[1]))
      return c[0];
    if (c = l(), mi) {
      Ba(!0);
      try {
        l();
      } finally {
        Ba(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function er(l, n, u) {
    return u === void 0 || (Za & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = tm(), Ye.lanes |= l, wu |= l, u);
  }
  function Sy(l, n, u, c) {
    return zl(u, n) ? u : rc.current !== null ? (l = er(l, u, c), zl(l, n) || (fl = !0), l) : (Za & 42) === 0 ? (fl = !0, l.memoizedState = u) : (l = tm(), Ye.lanes |= l, wu |= l, n);
  }
  function Zp(l, n, u, c, r) {
    var s = K.p;
    K.p = s !== 0 && 8 > s ? s : 8;
    var y = A.T, p = {};
    A.T = p, tr(l, !1, n, u);
    try {
      var S = r(), _ = A.S;
      if (_ !== null && _(p, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var Q = Gp(
          S,
          c
        );
        hc(
          l,
          n,
          Q,
          za(l)
        );
      } else
        hc(
          l,
          n,
          c,
          za(l)
        );
    } catch ($) {
      hc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: $ },
        za()
      );
    } finally {
      K.p = s, A.T = y;
    }
  }
  function bg() {
  }
  function Is(l, n, u, c) {
    if (l.tag !== 5) throw Error(C(476));
    var r = Kp(l).queue;
    Zp(
      l,
      r,
      n,
      F,
      u === null ? bg : function() {
        return To(l), u(c);
      }
    );
  }
  function Kp(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ln,
        lastRenderedState: F
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ln,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function To(l) {
    var n = Kp(l).next.queue;
    hc(l, n, {}, za());
  }
  function Ka() {
    return ml(va);
  }
  function Ty() {
    return Qt().memoizedState;
  }
  function Jp() {
    return Qt().memoizedState;
  }
  function kp(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = za();
          l = oa(u);
          var c = Gn(n, l, u);
          c !== null && (Ma(c, n, u), fc(c, n, u)), n = { cache: po() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Ey(l, n, u) {
    var c = za();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yc(l) ? $p(n, u) : (u = uo(l, n, u, c), u !== null && (Ma(u, l, c), Ay(u, n, c)));
  }
  function Ry(l, n, u) {
    var c = za();
    hc(l, n, u, c);
  }
  function hc(l, n, u, c) {
    var r = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (yc(l)) $p(n, r);
    else {
      var s = l.alternate;
      if (l.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null))
        try {
          var y = n.lastRenderedState, p = s(y, u);
          if (r.hasEagerState = !0, r.eagerState = p, zl(p, y))
            return fi(l, n, r, 0), Mt === null && sn(), !1;
        } catch {
        } finally {
        }
      if (u = uo(l, n, r, c), u !== null)
        return Ma(u, l, c), Ay(u, n, c), !0;
    }
    return !1;
  }
  function tr(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Mc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, yc(l)) {
      if (n) throw Error(C(479));
    } else
      n = uo(
        l,
        u,
        c,
        2
      ), n !== null && Ma(n, l, 2);
  }
  function yc(l) {
    var n = l.alternate;
    return l === Ye || n !== null && n === Ye;
  }
  function $p(l, n) {
    Aa = Zf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Ay(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, we(l, u);
    }
  }
  var Ps = {
    readContext: ml,
    use: tl,
    useCallback: Vt,
    useContext: Vt,
    useEffect: Vt,
    useImperativeHandle: Vt,
    useLayoutEffect: Vt,
    useInsertionEffect: Vt,
    useMemo: Vt,
    useReducer: Vt,
    useRef: Vt,
    useState: Vt,
    useDebugValue: Vt,
    useDeferredValue: Vt,
    useTransition: Vt,
    useSyncExternalStore: Vt,
    useId: Vt,
    useHostTransitionStatus: Vt,
    useFormState: Vt,
    useActionState: Vt,
    useOptimistic: Vt,
    useMemoCache: Vt,
    useCacheRefresh: Vt
  }, Oy = {
    readContext: ml,
    use: tl,
    useCallback: function(l, n) {
      return ql().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: ml,
    useEffect: Xp,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, vi(
        4194308,
        4,
        gy.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return vi(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      vi(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = ql();
      n = n === void 0 ? null : n;
      var c = l();
      if (mi) {
        Ba(!0);
        try {
          l();
        } finally {
          Ba(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = ql();
      if (u !== void 0) {
        var r = u(n);
        if (mi) {
          Ba(!0);
          try {
            u(n);
          } finally {
            Ba(!1);
          }
        }
      } else r = n;
      return c.memoizedState = c.baseState = r, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: r
      }, c.queue = l, l = l.dispatch = Ey.bind(
        null,
        Ye,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = ql();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Wf(l);
      var n = l.queue, u = Ry.bind(null, Ye, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: sc,
    useDeferredValue: function(l, n) {
      var u = ql();
      return er(u, l, n);
    },
    useTransition: function() {
      var l = Wf(!1);
      return l = Zp.bind(
        null,
        Ye,
        l.queue,
        !0,
        !1
      ), ql().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Ye, r = ql();
      if (ft) {
        if (u === void 0)
          throw Error(C(407));
        u = u();
      } else {
        if (u = n(), Mt === null)
          throw Error(C(349));
        (Pe & 124) !== 0 || Vs(c, n, u);
      }
      r.memoizedState = u;
      var s = { value: u, getSnapshot: n };
      return r.queue = s, Xp(hy.bind(null, c, s, l), [
        l
      ]), c.flags |= 2048, fa(
        9,
        If(),
        dy.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = ql(), n = Mt.identifierPrefix;
      if (ft) {
        var u = Xt, c = hn;
        u = (c & ~(1 << 32 - Rl(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = mn++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = ry++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ka,
    useFormState: py,
    useActionState: py,
    useOptimistic: function(l) {
      var n = ql();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = tr.bind(
        null,
        Ye,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: js,
    useCacheRefresh: function() {
      return ql().memoizedState = kp.bind(
        null,
        Ye
      );
    }
  }, Dy = {
    readContext: ml,
    use: tl,
    useCallback: dc,
    useContext: ml,
    useEffect: Qp,
    useImperativeHandle: Fs,
    useInsertionEffect: vy,
    useLayoutEffect: pn,
    useMemo: by,
    useReducer: kf,
    useRef: Pf,
    useState: function() {
      return kf(Ln);
    },
    useDebugValue: sc,
    useDeferredValue: function(l, n) {
      var u = Qt();
      return Sy(
        u,
        mt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = kf(Ln)[0], n = Qt().memoizedState;
      return [
        typeof l == "boolean" ? l : Jf(l),
        n
      ];
    },
    useSyncExternalStore: $f,
    useId: Ty,
    useHostTransitionStatus: Ka,
    useFormState: Vn,
    useActionState: Vn,
    useOptimistic: function(l, n) {
      var u = Qt();
      return Qs(u, mt, l, n);
    },
    useMemoCache: js,
    useCacheRefresh: Jp
  }, Cu = {
    readContext: ml,
    use: tl,
    useCallback: dc,
    useContext: ml,
    useEffect: Qp,
    useImperativeHandle: Fs,
    useInsertionEffect: vy,
    useLayoutEffect: pn,
    useMemo: by,
    useReducer: Ls,
    useRef: Pf,
    useState: function() {
      return Ls(Ln);
    },
    useDebugValue: sc,
    useDeferredValue: function(l, n) {
      var u = Qt();
      return mt === null ? er(u, l, n) : Sy(
        u,
        mt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Ls(Ln)[0], n = Qt().memoizedState;
      return [
        typeof l == "boolean" ? l : Jf(l),
        n
      ];
    },
    useSyncExternalStore: $f,
    useId: Ty,
    useHostTransitionStatus: Ka,
    useFormState: Ws,
    useActionState: Ws,
    useOptimistic: function(l, n) {
      var u = Qt();
      return mt !== null ? Qs(u, mt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: js,
    useCacheRefresh: Jp
  }, mc = null, Eo = 0;
  function ed(l) {
    var n = Eo;
    return Eo += 1, mc === null && (mc = []), uy(mc, l, n);
  }
  function pc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function jl(l, n) {
    throw n.$$typeof === W ? Error(C(525)) : (l = Object.prototype.toString.call(n), Error(
      C(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function zy(l) {
    var n = l._init;
    return n(l._payload);
  }
  function ra(l) {
    function n(z, O) {
      if (l) {
        var U = z.deletions;
        U === null ? (z.deletions = [O], z.flags |= 16) : U.push(O);
      }
    }
    function u(z, O) {
      if (!l) return null;
      for (; O !== null; )
        n(z, O), O = O.sibling;
      return null;
    }
    function c(z) {
      for (var O = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? O.set(z.key, z) : O.set(z.index, z), z = z.sibling;
      return O;
    }
    function r(z, O) {
      return z = dn(z, O), z.index = 0, z.sibling = null, z;
    }
    function s(z, O, U) {
      return z.index = U, l ? (U = z.alternate, U !== null ? (U = U.index, U < O ? (z.flags |= 67108866, O) : U) : (z.flags |= 67108866, O)) : (z.flags |= 1048576, O);
    }
    function y(z) {
      return l && z.alternate === null && (z.flags |= 67108866), z;
    }
    function p(z, O, U, J) {
      return O === null || O.tag !== 6 ? (O = oo(U, z.mode, J), O.return = z, O) : (O = r(O, U), O.return = z, O);
    }
    function S(z, O, U, J) {
      var re = U.type;
      return re === _e ? Q(
        z,
        O,
        U.props.children,
        J,
        U.key
      ) : O !== null && (O.elementType === re || typeof re == "object" && re !== null && re.$$typeof === gt && zy(re) === O.type) ? (O = r(O, U.props), pc(O, U), O.return = z, O) : (O = P(
        U.type,
        U.key,
        U.props,
        null,
        z.mode,
        J
      ), pc(O, U), O.return = z, O);
    }
    function _(z, O, U, J) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== U.containerInfo || O.stateNode.implementation !== U.implementation ? (O = Gt(U, z.mode, J), O.return = z, O) : (O = r(O, U.children || []), O.return = z, O);
    }
    function Q(z, O, U, J, re) {
      return O === null || O.tag !== 7 ? (O = Ga(
        U,
        z.mode,
        J,
        re
      ), O.return = z, O) : (O = r(O, U), O.return = z, O);
    }
    function $(z, O, U) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return O = oo(
          "" + O,
          z.mode,
          U
        ), O.return = z, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case M:
            return U = P(
              O.type,
              O.key,
              O.props,
              null,
              z.mode,
              U
            ), pc(U, O), U.return = z, U;
          case ne:
            return O = Gt(
              O,
              z.mode,
              U
            ), O.return = z, O;
          case gt:
            var J = O._init;
            return O = J(O._payload), $(z, O, U);
        }
        if (ct(O) || Te(O))
          return O = Ga(
            O,
            z.mode,
            U,
            null
          ), O.return = z, O;
        if (typeof O.then == "function")
          return $(z, ed(O), U);
        if (O.$$typeof === lt)
          return $(
            z,
            qf(z, O),
            U
          );
        jl(z, O);
      }
      return null;
    }
    function x(z, O, U, J) {
      var re = O !== null ? O.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return re !== null ? null : p(z, O, "" + U, J);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case M:
            return U.key === re ? S(z, O, U, J) : null;
          case ne:
            return U.key === re ? _(z, O, U, J) : null;
          case gt:
            return re = U._init, U = re(U._payload), x(z, O, U, J);
        }
        if (ct(U) || Te(U))
          return re !== null ? null : Q(z, O, U, J, null);
        if (typeof U.then == "function")
          return x(
            z,
            O,
            ed(U),
            J
          );
        if (U.$$typeof === lt)
          return x(
            z,
            O,
            qf(z, U),
            J
          );
        jl(z, U);
      }
      return null;
    }
    function B(z, O, U, J, re) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return z = z.get(U) || null, p(O, z, "" + J, re);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case M:
            return z = z.get(
              J.key === null ? U : J.key
            ) || null, S(O, z, J, re);
          case ne:
            return z = z.get(
              J.key === null ? U : J.key
            ) || null, _(O, z, J, re);
          case gt:
            var Je = J._init;
            return J = Je(J._payload), B(
              z,
              O,
              U,
              J,
              re
            );
        }
        if (ct(J) || Te(J))
          return z = z.get(U) || null, Q(O, z, J, re, null);
        if (typeof J.then == "function")
          return B(
            z,
            O,
            U,
            ed(J),
            re
          );
        if (J.$$typeof === lt)
          return B(
            z,
            O,
            U,
            qf(O, J),
            re
          );
        jl(O, J);
      }
      return null;
    }
    function ge(z, O, U, J) {
      for (var re = null, Je = null, ve = O, Ae = O = 0, bl = null; ve !== null && Ae < U.length; Ae++) {
        ve.index > Ae ? (bl = ve, ve = null) : bl = ve.sibling;
        var ot = x(
          z,
          ve,
          U[Ae],
          J
        );
        if (ot === null) {
          ve === null && (ve = bl);
          break;
        }
        l && ve && ot.alternate === null && n(z, ve), O = s(ot, O, Ae), Je === null ? re = ot : Je.sibling = ot, Je = ot, ve = bl;
      }
      if (Ae === U.length)
        return u(z, ve), ft && nt(z, Ae), re;
      if (ve === null) {
        for (; Ae < U.length; Ae++)
          ve = $(z, U[Ae], J), ve !== null && (O = s(
            ve,
            O,
            Ae
          ), Je === null ? re = ve : Je.sibling = ve, Je = ve);
        return ft && nt(z, Ae), re;
      }
      for (ve = c(ve); Ae < U.length; Ae++)
        bl = B(
          ve,
          z,
          Ae,
          U[Ae],
          J
        ), bl !== null && (l && bl.alternate !== null && ve.delete(
          bl.key === null ? Ae : bl.key
        ), O = s(
          bl,
          O,
          Ae
        ), Je === null ? re = bl : Je.sibling = bl, Je = bl);
      return l && ve.forEach(function(wi) {
        return n(z, wi);
      }), ft && nt(z, Ae), re;
    }
    function be(z, O, U, J) {
      if (U == null) throw Error(C(151));
      for (var re = null, Je = null, ve = O, Ae = O = 0, bl = null, ot = U.next(); ve !== null && !ot.done; Ae++, ot = U.next()) {
        ve.index > Ae ? (bl = ve, ve = null) : bl = ve.sibling;
        var wi = x(z, ve, ot.value, J);
        if (wi === null) {
          ve === null && (ve = bl);
          break;
        }
        l && ve && wi.alternate === null && n(z, ve), O = s(wi, O, Ae), Je === null ? re = wi : Je.sibling = wi, Je = wi, ve = bl;
      }
      if (ot.done)
        return u(z, ve), ft && nt(z, Ae), re;
      if (ve === null) {
        for (; !ot.done; Ae++, ot = U.next())
          ot = $(z, ot.value, J), ot !== null && (O = s(ot, O, Ae), Je === null ? re = ot : Je.sibling = ot, Je = ot);
        return ft && nt(z, Ae), re;
      }
      for (ve = c(ve); !ot.done; Ae++, ot = U.next())
        ot = B(ve, z, Ae, ot.value, J), ot !== null && (l && ot.alternate !== null && ve.delete(ot.key === null ? Ae : ot.key), O = s(ot, O, Ae), Je === null ? re = ot : Je.sibling = ot, Je = ot);
      return l && ve.forEach(function(_g) {
        return n(z, _g);
      }), ft && nt(z, Ae), re;
    }
    function dt(z, O, U, J) {
      if (typeof U == "object" && U !== null && U.type === _e && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case M:
            e: {
              for (var re = U.key; O !== null; ) {
                if (O.key === re) {
                  if (re = U.type, re === _e) {
                    if (O.tag === 7) {
                      u(
                        z,
                        O.sibling
                      ), J = r(
                        O,
                        U.props.children
                      ), J.return = z, z = J;
                      break e;
                    }
                  } else if (O.elementType === re || typeof re == "object" && re !== null && re.$$typeof === gt && zy(re) === O.type) {
                    u(
                      z,
                      O.sibling
                    ), J = r(O, U.props), pc(J, U), J.return = z, z = J;
                    break e;
                  }
                  u(z, O);
                  break;
                } else n(z, O);
                O = O.sibling;
              }
              U.type === _e ? (J = Ga(
                U.props.children,
                z.mode,
                J,
                U.key
              ), J.return = z, z = J) : (J = P(
                U.type,
                U.key,
                U.props,
                null,
                z.mode,
                J
              ), pc(J, U), J.return = z, z = J);
            }
            return y(z);
          case ne:
            e: {
              for (re = U.key; O !== null; ) {
                if (O.key === re)
                  if (O.tag === 4 && O.stateNode.containerInfo === U.containerInfo && O.stateNode.implementation === U.implementation) {
                    u(
                      z,
                      O.sibling
                    ), J = r(O, U.children || []), J.return = z, z = J;
                    break e;
                  } else {
                    u(z, O);
                    break;
                  }
                else n(z, O);
                O = O.sibling;
              }
              J = Gt(U, z.mode, J), J.return = z, z = J;
            }
            return y(z);
          case gt:
            return re = U._init, U = re(U._payload), dt(
              z,
              O,
              U,
              J
            );
        }
        if (ct(U))
          return ge(
            z,
            O,
            U,
            J
          );
        if (Te(U)) {
          if (re = Te(U), typeof re != "function") throw Error(C(150));
          return U = re.call(U), be(
            z,
            O,
            U,
            J
          );
        }
        if (typeof U.then == "function")
          return dt(
            z,
            O,
            ed(U),
            J
          );
        if (U.$$typeof === lt)
          return dt(
            z,
            O,
            qf(z, U),
            J
          );
        jl(z, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, O !== null && O.tag === 6 ? (u(z, O.sibling), J = r(O, U), J.return = z, z = J) : (u(z, O), J = oo(U, z.mode, J), J.return = z, z = J), y(z)) : u(z, O);
    }
    return function(z, O, U, J) {
      try {
        Eo = 0;
        var re = dt(
          z,
          O,
          U,
          J
        );
        return mc = null, re;
      } catch (ve) {
        if (ve === yi || ve === Lf) throw ve;
        var Je = ia(29, ve, null, z.mode);
        return Je.lanes = J, Je.return = z, Je;
      } finally {
      }
    };
  }
  var vc = ra(!0), Xn = ra(!1), Da = N(null), Gl = null;
  function _u(l) {
    var n = l.alternate;
    I(Dt, Dt.current & 1), I(Da, l), Gl === null && (n === null || rc.current !== null || n.memoizedState !== null) && (Gl = l);
  }
  function Qn(l) {
    if (l.tag === 22) {
      if (I(Dt, Dt.current), I(Da, l), Gl === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Gl = l);
      }
    } else Zn();
  }
  function Zn() {
    I(Dt, Dt.current), I(Da, Da.current);
  }
  function vn(l) {
    Z(Da), Gl === l && (Gl = null), Z(Dt);
  }
  var Dt = N(0);
  function lr(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Or(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function gi(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : oe({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var td = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = za(), r = oa(c);
      r.payload = n, u != null && (r.callback = u), n = Gn(l, r, c), n !== null && (Ma(n, l, c), fc(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = za(), r = oa(c);
      r.tag = 1, r.payload = n, u != null && (r.callback = u), n = Gn(l, r, c), n !== null && (Ma(n, l, c), fc(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = za(), c = oa(u);
      c.tag = 2, n != null && (c.callback = n), n = Gn(l, c, u), n !== null && (Ma(n, l, u), fc(n, l, u));
    }
  };
  function Ro(l, n, u, c, r, s, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, s, y) : n.prototype && n.prototype.isPureReactComponent ? !ui(u, c) || !ui(r, s) : !0;
  }
  function gc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && td.enqueueReplaceState(n, n.state, null);
  }
  function bi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = oe({}, u));
      for (var r in l)
        u[r] === void 0 && (u[r] = l[r]);
    }
    return u;
  }
  var ar = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function Ao(l) {
    ar(l);
  }
  function My(l) {
    console.error(l);
  }
  function nr(l) {
    ar(l);
  }
  function ur(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Uy(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Cy(l, n, u) {
    return u = oa(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      ur(l, n);
    }, u;
  }
  function _y(l) {
    return l = oa(l), l.tag = 3, l;
  }
  function sa(l, n, u, c) {
    var r = u.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = c.value;
      l.payload = function() {
        return r(s);
      }, l.callback = function() {
        Uy(n, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      Uy(n, u, c), typeof r != "function" && (Ri === null ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var p = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function Wp(l, n, u, c, r) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && yo(
        n,
        u,
        r,
        !0
      ), u = Da.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Gl === null ? zc() : u.alternate === null && kt === 0 && (kt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = r, c === Cs ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), zd(l, c, r)), !1;
          case 22:
            return u.flags |= 65536, c === Cs ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), zd(l, c, r)), !1;
        }
        throw Error(C(435, u.tag));
      }
      return zd(l, c, r), zc(), !1;
    }
    if (ft)
      return n = Da.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = r, c !== ic && (l = Error(C(422), { cause: c }), ho(Ra(l, u)))) : (c !== ic && (n = Error(C(423), {
        cause: c
      }), ho(
        Ra(n, u)
      )), l = l.current.alternate, l.flags |= 65536, r &= -r, l.lanes |= r, c = Ra(c, u), r = Cy(
        l.stateNode,
        c,
        r
      ), oy(l, r), kt !== 4 && (kt = 2)), !1;
    var s = Error(C(520), { cause: c });
    if (s = Ra(s, u), _o === null ? _o = [s] : _o.push(s), kt !== 4 && (kt = 2), n === null) return !0;
    c = Ra(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = r & -r, u.lanes |= l, l = Cy(u.stateNode, c, l), oy(u, l), !1;
        case 1:
          if (n = u.type, s = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Ri === null || !Ri.has(s))))
            return u.flags |= 65536, r &= -r, u.lanes |= r, r = _y(r), sa(
              r,
              l,
              u,
              c
            ), oy(u, r), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Zt = Error(C(461)), fl = !1;
  function vl(l, n, u, c) {
    n.child = l === null ? Xn(n, null, u, c) : vc(
      n,
      l.child,
      u,
      c
    );
  }
  function Fp(l, n, u, c, r) {
    u = u.render;
    var s = n.ref;
    if ("ref" in c) {
      var y = {};
      for (var p in c)
        p !== "ref" && (y[p] = c[p]);
    } else y = c;
    return di(n), c = Bs(
      l,
      n,
      u,
      y,
      s,
      r
    ), p = Ys(), l !== null && !fl ? (So(l, n, r), Kn(l, n, r)) : (ft && p && uc(n), n.flags |= 1, vl(l, n, c, r), n.child);
  }
  function Hu(l, n, u, c, r) {
    if (l === null) {
      var s = u.type;
      return typeof s == "function" && !xf(s) && s.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = s, bc(
        l,
        n,
        s,
        c,
        r
      )) : (l = P(
        u.type,
        null,
        c,
        n,
        n.mode,
        r
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (s = l.child, !sd(l, r)) {
      var y = s.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ui, u(y, c) && l.ref === n.ref)
        return Kn(l, n, r);
    }
    return n.flags |= 1, l = dn(s, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function bc(l, n, u, c, r) {
    if (l !== null) {
      var s = l.memoizedProps;
      if (ui(s, c) && l.ref === n.ref)
        if (fl = !1, n.pendingProps = c = s, sd(l, r))
          (l.flags & 131072) !== 0 && (fl = !0);
        else
          return n.lanes = l.lanes, Kn(l, n, r);
    }
    return ad(
      l,
      n,
      u,
      c,
      r
    );
  }
  function ld(l, n, u) {
    var c = n.pendingProps, r = c.children, s = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = s !== null ? s.baseLanes | u : u, l !== null) {
          for (r = n.child = l.child, s = 0; r !== null; )
            s = s | r.lanes | r.childLanes, r = r.sibling;
          n.childLanes = s & ~c;
        } else n.childLanes = 0, n.child = null;
        return Sc(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && cc(
          n,
          s !== null ? s.cachePool : null
        ), s !== null ? pl(n, s) : go(), Qn(n);
      else
        return n.lanes = n.childLanes = 536870912, Sc(
          l,
          n,
          s !== null ? s.baseLanes | u : u,
          u
        );
    } else
      s !== null ? (cc(n, s.cachePool), pl(n, s), Zn(), n.memoizedState = null) : (l !== null && cc(n, null), go(), Zn());
    return vl(l, n, r, u), n.child;
  }
  function Sc(l, n, u, c) {
    var r = Gf();
    return r = r === null ? null : { parent: cl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && cc(n, null), go(), Qn(n), l !== null && yo(l, n, c, !0), null;
  }
  function ir(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(C(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function ad(l, n, u, c, r) {
    return di(n), u = Bs(
      l,
      n,
      u,
      c,
      void 0,
      r
    ), c = Ys(), l !== null && !fl ? (So(l, n, r), Kn(l, n, r)) : (ft && c && uc(n), n.flags |= 1, vl(l, n, u, r), n.child);
  }
  function Hy(l, n, u, c, r, s) {
    return di(n), n.updateQueue = null, u = sy(
      n,
      c,
      u,
      r
    ), pi(l), c = Ys(), l !== null && !fl ? (So(l, n, s), Kn(l, n, s)) : (ft && c && uc(n), n.flags |= 1, vl(l, n, u, s), n.child);
  }
  function nd(l, n, u, c, r) {
    if (di(n), n.stateNode === null) {
      var s = co, y = u.contextType;
      typeof y == "object" && y !== null && (s = ml(y)), s = new u(c, s), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = td, n.stateNode = s, s._reactInternals = n, s = n.stateNode, s.props = c, s.state = n.memoizedState, s.refs = {}, Hs(n), y = u.contextType, s.context = typeof y == "object" && y !== null ? ml(y) : co, s.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (gi(
        n,
        u,
        y,
        c
      ), s.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (y = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), y !== s.state && td.enqueueReplaceState(s, s.state, null), Mu(n, c, s, r), vo(), s.state = n.memoizedState), typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      s = n.stateNode;
      var p = n.memoizedProps, S = bi(u, p);
      s.props = S;
      var _ = s.context, Q = u.contextType;
      y = co, typeof Q == "object" && Q !== null && (y = ml(Q));
      var $ = u.getDerivedStateFromProps;
      Q = typeof $ == "function" || typeof s.getSnapshotBeforeUpdate == "function", p = n.pendingProps !== p, Q || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (p || _ !== y) && gc(
        n,
        s,
        c,
        y
      ), jn = !1;
      var x = n.memoizedState;
      s.state = x, Mu(n, c, s, r), vo(), _ = n.memoizedState, p || x !== _ || jn ? (typeof $ == "function" && (gi(
        n,
        u,
        $,
        c
      ), _ = n.memoizedState), (S = jn || Ro(
        n,
        u,
        S,
        c,
        x,
        _,
        y
      )) ? (Q || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = _), s.props = c, s.state = _, s.context = y, c = S) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      s = n.stateNode, xs(l, n), y = n.memoizedProps, Q = bi(u, y), s.props = Q, $ = n.pendingProps, x = s.context, _ = u.contextType, S = co, typeof _ == "object" && _ !== null && (S = ml(_)), p = u.getDerivedStateFromProps, (_ = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (y !== $ || x !== S) && gc(
        n,
        s,
        c,
        S
      ), jn = !1, x = n.memoizedState, s.state = x, Mu(n, c, s, r), vo();
      var B = n.memoizedState;
      y !== $ || x !== B || jn || l !== null && l.dependencies !== null && Yf(l.dependencies) ? (typeof p == "function" && (gi(
        n,
        u,
        p,
        c
      ), B = n.memoizedState), (Q = jn || Ro(
        n,
        u,
        Q,
        c,
        x,
        B,
        S
      ) || l !== null && l.dependencies !== null && Yf(l.dependencies)) ? (_ || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, B, S), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        B,
        S
      )), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = B), s.props = c, s.state = B, s.context = S, c = Q) : (typeof s.componentDidUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return s = c, ir(l, n), c = (n.flags & 128) !== 0, s || c ? (s = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), n.flags |= 1, l !== null && c ? (n.child = vc(
      n,
      l.child,
      null,
      r
    ), n.child = vc(
      n,
      null,
      u,
      r
    )) : vl(l, n, u, r), n.memoizedState = s.state, l = n.child) : l = Kn(
      l,
      n,
      r
    ), l;
  }
  function ud(l, n, u, c) {
    return so(), n.flags |= 256, vl(l, n, u, c), n.child;
  }
  var id = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function xy(l) {
    return { baseLanes: l, cachePool: Ms() };
  }
  function Ny(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= $a), l;
  }
  function wy(l, n, u) {
    var c = n.pendingProps, r = !1, s = (n.flags & 128) !== 0, y;
    if ((y = s) || (y = l !== null && l.memoizedState === null ? !1 : (Dt.current & 2) !== 0), y && (r = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (ft) {
        if (r ? _u(n) : Zn(), ft) {
          var p = rt, S;
          if (S = p) {
            e: {
              for (S = p, p = Xa; S.nodeType !== 8; ) {
                if (!p) {
                  p = null;
                  break e;
                }
                if (S = bn(
                  S.nextSibling
                ), S === null) {
                  p = null;
                  break e;
                }
              }
              p = S;
            }
            p !== null ? (n.memoizedState = {
              dehydrated: p,
              treeContext: Au !== null ? { id: hn, overflow: Xt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, S = ia(
              18,
              null,
              null,
              0
            ), S.stateNode = p, S.return = n, n.child = S, It = n, rt = null, S = !0) : S = !1;
          }
          S || Ou(n);
        }
        if (p = n.memoizedState, p !== null && (p = p.dehydrated, p !== null))
          return Or(p) ? n.lanes = 32 : n.lanes = 536870912, null;
        vn(n);
      }
      return p = c.children, c = c.fallback, r ? (Zn(), r = n.mode, p = od(
        { mode: "hidden", children: p },
        r
      ), c = Ga(
        c,
        r,
        u,
        null
      ), p.return = n, c.return = n, p.sibling = c, n.child = p, r = n.child, r.memoizedState = xy(u), r.childLanes = Ny(
        l,
        y,
        u
      ), n.memoizedState = id, c) : (_u(n), cd(n, p));
    }
    if (S = l.memoizedState, S !== null && (p = S.dehydrated, p !== null)) {
      if (s)
        n.flags & 256 ? (_u(n), n.flags &= -257, n = Si(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Zn(), n.child = l.child, n.flags |= 128, n = null) : (Zn(), r = c.fallback, p = n.mode, c = od(
          { mode: "visible", children: c.children },
          p
        ), r = Ga(
          r,
          p,
          u,
          null
        ), r.flags |= 2, c.return = n, r.return = n, c.sibling = r, n.child = c, vc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = xy(u), c.childLanes = Ny(
          l,
          y,
          u
        ), n.memoizedState = id, n = r);
      else if (_u(n), Or(p)) {
        if (y = p.nextSibling && p.nextSibling.dataset, y) var _ = y.dgst;
        y = _, c = Error(C(419)), c.stack = "", c.digest = y, ho({ value: c, source: null, stack: null }), n = Si(
          l,
          n,
          u
        );
      } else if (fl || yo(l, n, u, !1), y = (u & l.childLanes) !== 0, fl || y) {
        if (y = Mt, y !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : el(c), c = (c & (y.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== S.retryLane))
          throw S.retryLane = c, Nn(l, c), Ma(y, l, c), Zt;
        p.data === "$?" || zc(), n = Si(
          l,
          n,
          u
        );
      } else
        p.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = S.treeContext, rt = bn(
          p.nextSibling
        ), It = n, ft = !0, Va = null, Xa = !1, l !== null && (La[ca++] = hn, La[ca++] = Xt, La[ca++] = Au, hn = l.id, Xt = l.overflow, Au = n), n = cd(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return r ? (Zn(), r = c.fallback, p = n.mode, S = l.child, _ = S.sibling, c = dn(S, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = S.subtreeFlags & 65011712, _ !== null ? r = dn(_, r) : (r = Ga(
      r,
      p,
      u,
      null
    ), r.flags |= 2), r.return = n, c.return = n, c.sibling = r, n.child = c, c = r, r = n.child, p = l.child.memoizedState, p === null ? p = xy(u) : (S = p.cachePool, S !== null ? (_ = cl._currentValue, S = S.parent !== _ ? { parent: _, pool: _ } : S) : S = Ms(), p = {
      baseLanes: p.baseLanes | u,
      cachePool: S
    }), r.memoizedState = p, r.childLanes = Ny(
      l,
      y,
      u
    ), n.memoizedState = id, c) : (_u(n), u = l.child, l = u.sibling, u = dn(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function cd(l, n) {
    return n = od(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function od(l, n) {
    return l = ia(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function Si(l, n, u) {
    return vc(n, l.child, null, u), l = cd(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function cr(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Rs(l.return, n, u);
  }
  function fd(l, n, u, c, r) {
    var s = l.memoizedState;
    s === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: r
    } : (s.isBackwards = n, s.rendering = null, s.renderingStartTime = 0, s.last = c, s.tail = u, s.tailMode = r);
  }
  function rd(l, n, u) {
    var c = n.pendingProps, r = c.revealOrder, s = c.tail;
    if (vl(l, n, c.children, u), c = Dt.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && cr(l, u, n);
          else if (l.tag === 19)
            cr(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (I(Dt, c), r) {
      case "forwards":
        for (u = n.child, r = null; u !== null; )
          l = u.alternate, l !== null && lr(l) === null && (r = u), u = u.sibling;
        u = r, u === null ? (r = n.child, n.child = null) : (r = u.sibling, u.sibling = null), fd(
          n,
          !1,
          r,
          u,
          s
        );
        break;
      case "backwards":
        for (u = null, r = n.child, n.child = null; r !== null; ) {
          if (l = r.alternate, l !== null && lr(l) === null) {
            n.child = r;
            break;
          }
          l = r.sibling, r.sibling = u, u = r, r = l;
        }
        fd(
          n,
          !0,
          u,
          null,
          s
        );
        break;
      case "together":
        fd(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Kn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), wu |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (yo(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(C(153));
    if (n.child !== null) {
      for (l = n.child, u = dn(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = dn(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function sd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Yf(l)));
  }
  function Ip(l, n, u) {
    switch (n.tag) {
      case 3:
        Ue(n, n.stateNode.containerInfo), zu(n, cl, l.memoizedState.cache), so();
        break;
      case 27:
      case 5:
        la(n);
        break;
      case 4:
        Ue(n, n.stateNode.containerInfo);
        break;
      case 10:
        zu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (_u(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? wy(l, n, u) : (_u(n), l = Kn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        _u(n);
        break;
      case 19:
        var r = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (yo(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), r) {
          if (c)
            return rd(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (r = n.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), I(Dt, Dt.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, ld(l, n, u);
      case 24:
        zu(n, cl, l.memoizedState.cache);
    }
    return Kn(l, n, u);
  }
  function Pp(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        fl = !0;
      else {
        if (!sd(l, u) && (n.flags & 128) === 0)
          return fl = !1, Ip(
            l,
            n,
            u
          );
        fl = (l.flags & 131072) !== 0;
      }
    else
      fl = !1, ft && (n.flags & 1048576) !== 0 && Es(n, fo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, r = c._init;
          if (c = r(c._payload), n.type = c, typeof c == "function")
            xf(c) ? (l = bi(c, l), n.tag = 1, n = nd(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = ad(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (r = c.$$typeof, r === Nt) {
                n.tag = 11, n = Fp(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (r === Le) {
                n.tag = 14, n = Hu(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = Ut(c) || c, Error(C(306, n, ""));
          }
        }
        return n;
      case 0:
        return ad(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, r = bi(
          c,
          n.pendingProps
        ), nd(
          l,
          n,
          c,
          r,
          u
        );
      case 3:
        e: {
          if (Ue(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(C(387));
          c = n.pendingProps;
          var s = n.memoizedState;
          r = s.element, xs(l, n), Mu(n, c, null, u);
          var y = n.memoizedState;
          if (c = y.cache, zu(n, cl, c), c !== s.cache && ay(
            n,
            [cl],
            u,
            !0
          ), vo(), c = y.element, s.isDehydrated)
            if (s = {
              element: c,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = ud(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== r) {
              r = Ra(
                Error(C(424)),
                n
              ), ho(r), n = ud(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (rt = bn(l.firstChild), It = n, ft = !0, Va = null, Xa = !0, u = Xn(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (so(), c === r) {
              n = Kn(
                l,
                n,
                u
              );
              break e;
            }
            vl(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return ir(l, n), l === null ? (u = mv(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : ft || (u = n.type, l = n.pendingProps, c = Fa(
          ie.current
        ).createElement(u), c[yl] = n, c[Kl] = l, De(c, u, l), il(c), n.stateNode = c) : n.memoizedState = mv(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return la(n), l === null && ft && (c = n.stateNode = ce(
          n.type,
          n.pendingProps,
          ie.current
        ), It = n, Xa = !0, r = rt, Ui(n.type) ? (Ci = r, rt = bn(
          c.firstChild
        )) : rt = r), vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), ir(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && ft && ((r = c = rt) && (c = Xo(
          c,
          n.type,
          n.pendingProps,
          Xa
        ), c !== null ? (n.stateNode = c, It = n, rt = bn(
          c.firstChild
        ), Xa = !1, r = !0) : r = !1), r || Ou(n)), la(n), r = n.type, s = n.pendingProps, y = l !== null ? l.memoizedProps : null, c = s.children, tu(r, s) ? c = null : y !== null && tu(r, y) && (n.flags |= 32), n.memoizedState !== null && (r = Bs(
          l,
          n,
          Lp,
          null,
          null,
          u
        ), va._currentValue = r), ir(l, n), vl(l, n, c, u), n.child;
      case 6:
        return l === null && ft && ((l = u = rt) && (u = Mg(
          u,
          n.pendingProps,
          Xa
        ), u !== null ? (n.stateNode = u, It = n, rt = null, l = !0) : l = !1), l || Ou(n)), null;
      case 13:
        return wy(l, n, u);
      case 4:
        return Ue(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = vc(
          n,
          null,
          c,
          u
        ) : vl(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return Fp(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return vl(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, zu(n, n.type, c.value), vl(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return r = n.type._context, c = n.pendingProps.children, di(n), r = ml(r), c = c(r), n.flags |= 1, vl(l, n, c, u), n.child;
      case 14:
        return Hu(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return bc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return rd(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = od(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = dn(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return ld(l, n, u);
      case 24:
        return di(n), c = ml(cl), l === null ? (r = Gf(), r === null && (r = Mt, s = po(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= u), r = s), n.memoizedState = {
          parent: c,
          cache: r
        }, Hs(n), zu(n, cl, r)) : ((l.lanes & u) !== 0 && (xs(l, n), Mu(n, null, null, u), vo()), r = l.memoizedState, s = n.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, n.memoizedState = r, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = r), zu(n, cl, c)) : (c = s.cache, zu(n, cl, c), c !== r.cache && ay(
          n,
          [cl],
          u,
          !0
        ))), vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(C(156, n.tag));
  }
  function Jn(l) {
    l.flags |= 4;
  }
  function Oo(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !gm(n)) {
      if (n = Da.current, n !== null && ((Pe & 4194048) === Pe ? Gl !== null : (Pe & 62914560) !== Pe && (Pe & 536870912) === 0 || n !== Gl))
        throw oc = Cs, Us;
      l.flags |= 8192;
    }
  }
  function or(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ae() : 536870912, l.lanes |= n, Co |= n);
  }
  function Do(l, n) {
    if (!ft)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Re(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 65011712, c |= r.flags & 65011712, r.return = l, r = r.sibling;
    else
      for (r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = l, r = r.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function By(l, n, u) {
    var c = n.pendingProps;
    switch (wn(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Re(n), null;
      case 1:
        return Re(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Bn(cl), wt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ro(n) ? Jn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, ly())), Re(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Jn(n), u !== null ? (Re(n), Oo(n, u)) : (Re(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Jn(n), Re(n), Oo(n, u)) : (Re(n), n.flags &= -16777217) : (l.memoizedProps !== c && Jn(n), Re(n), n.flags &= -16777217), null;
      case 27:
        An(n), u = ie.current;
        var r = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Jn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(C(166));
            return Re(n), null;
          }
          l = ue.current, ro(n) ? wf(n) : (l = ce(r, c, u), n.stateNode = l, Jn(n));
        }
        return Re(n), null;
      case 5:
        if (An(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Jn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(C(166));
            return Re(n), null;
          }
          if (l = ue.current, ro(n))
            wf(n);
          else {
            switch (r = Fa(
              ie.current
            ), l) {
              case 1:
                l = r.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = r.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = r.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = r.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? r.createElement("select", { is: c.is }) : r.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? r.createElement(u, { is: c.is }) : r.createElement(u);
                }
            }
            l[yl] = n, l[Kl] = c;
            e: for (r = n.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6)
                l.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === n) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === n)
                  break e;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
            n.stateNode = l;
            e: switch (De(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Jn(n);
          }
        }
        return Re(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Jn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(C(166));
          if (l = ie.current, ro(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, r = It, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            l[yl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || ym(l.nodeValue, u)), l || Ou(n);
          } else
            l = Fa(l).createTextNode(
              c
            ), l[yl] = n, n.stateNode = l;
        }
        return Re(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (r = ro(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!r) throw Error(C(318));
              if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(C(317));
              r[yl] = n;
            } else
              so(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Re(n), r = !1;
          } else
            r = ly(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return n.flags & 256 ? (vn(n), n) : (vn(n), null);
        }
        if (vn(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool);
          var s = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== r && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), or(n, n.updateQueue), Re(n), null;
      case 4:
        return wt(), l === null && dm(n.stateNode.containerInfo), Re(n), null;
      case 10:
        return Bn(n.type), Re(n), null;
      case 19:
        if (Z(Dt), r = n.memoizedState, r === null) return Re(n), null;
        if (c = (n.flags & 128) !== 0, s = r.rendering, s === null)
          if (c) Do(r, !1);
          else {
            if (kt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (s = lr(l), s !== null) {
                  for (n.flags |= 128, Do(r, !1), l = s.updateQueue, n.updateQueue = l, or(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Ke(u, l), u = u.sibling;
                  return I(
                    Dt,
                    Dt.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            r.tail !== null && hl() > Sd && (n.flags |= 128, c = !0, Do(r, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = lr(s), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, or(n, l), Do(r, !0), r.tail === null && r.tailMode === "hidden" && !s.alternate && !ft)
                return Re(n), null;
            } else
              2 * hl() - r.renderingStartTime > Sd && u !== 536870912 && (n.flags |= 128, c = !0, Do(r, !1), n.lanes = 4194304);
          r.isBackwards ? (s.sibling = n.child, n.child = s) : (l = r.last, l !== null ? l.sibling = s : n.child = s, r.last = s);
        }
        return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.renderingStartTime = hl(), n.sibling = null, l = Dt.current, I(Dt, c ? l & 1 | 2 : l & 1), n) : (Re(n), null);
      case 22:
      case 23:
        return vn(n), bo(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Re(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Re(n), u = n.updateQueue, u !== null && or(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && Z(qn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Bn(cl), Re(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(C(156, n.tag));
  }
  function Sg(l, n) {
    switch (wn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Bn(cl), wt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return An(n), null;
      case 13:
        if (vn(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(C(340));
          so();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return Z(Dt), null;
      case 4:
        return wt(), null;
      case 10:
        return Bn(n.type), null;
      case 22:
      case 23:
        return vn(n), bo(), l !== null && Z(qn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Bn(cl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Yy(l, n) {
    switch (wn(n), n.tag) {
      case 3:
        Bn(cl), wt();
        break;
      case 26:
      case 27:
      case 5:
        An(n);
        break;
      case 4:
        wt();
        break;
      case 13:
        vn(n);
        break;
      case 19:
        Z(Dt);
        break;
      case 10:
        Bn(n.type);
        break;
      case 22:
      case 23:
        vn(n), bo(), l !== null && Z(qn);
        break;
      case 24:
        Bn(cl);
    }
  }
  function fr(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var r = c.next;
        u = r;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var s = u.create, y = u.inst;
            c = s(), y.destroy = c;
          }
          u = u.next;
        } while (u !== r);
      }
    } catch (p) {
      Et(n, n.return, p);
    }
  }
  function Ti(l, n, u) {
    try {
      var c = n.updateQueue, r = c !== null ? c.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        c = s;
        do {
          if ((c.tag & l) === l) {
            var y = c.inst, p = y.destroy;
            if (p !== void 0) {
              y.destroy = void 0, r = n;
              var S = u, _ = p;
              try {
                _();
              } catch (Q) {
                Et(
                  r,
                  S,
                  Q
                );
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    } catch (Q) {
      Et(n, n.return, Q);
    }
  }
  function dd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Xf(n, u);
      } catch (c) {
        Et(l, l.return, c);
      }
    }
  }
  function qy(l, n, u) {
    u.props = bi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Et(l, n, c);
    }
  }
  function zo(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (r) {
      Et(l, n, r);
    }
  }
  function gn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (r) {
          Et(l, n, r);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (r) {
          Et(l, n, r);
        }
      else u.current = null;
  }
  function Mo(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (r) {
      Et(l, l.return, r);
    }
  }
  function jy(l, n, u) {
    try {
      var c = l.stateNode;
      Og(c, l.type, u, n), c[Kl] = n;
    } catch (r) {
      Et(l, l.return, r);
    }
  }
  function ev(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Ui(l.type) || l.tag === 4;
  }
  function Ja(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || ev(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Ui(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Tc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Hd));
    else if (c !== 4 && (c === 27 && Ui(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Tc(l, n, u), l = l.sibling; l !== null; )
        Tc(l, n, u), l = l.sibling;
  }
  function hd(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Ui(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (hd(l, n, u), l = l.sibling; l !== null; )
        hd(l, n, u), l = l.sibling;
  }
  function yd(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, r = n.attributes; r.length; )
        n.removeAttributeNode(r[0]);
      De(n, c, u), n[yl] = l, n[Kl] = u;
    } catch (s) {
      Et(l, l.return, s);
    }
  }
  var kn = !1, Kt = !1, md = !1, pd = typeof WeakSet == "function" ? WeakSet : Set, rl = null;
  function Gy(l, n) {
    if (l = l.containerInfo, Er = Mr, l = $h(l), _f(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var r = c.anchorOffset, s = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, s.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, p = -1, S = -1, _ = 0, Q = 0, $ = l, x = null;
            t: for (; ; ) {
              for (var B; $ !== u || r !== 0 && $.nodeType !== 3 || (p = y + r), $ !== s || c !== 0 && $.nodeType !== 3 || (S = y + c), $.nodeType === 3 && (y += $.nodeValue.length), (B = $.firstChild) !== null; )
                x = $, $ = B;
              for (; ; ) {
                if ($ === l) break t;
                if (x === u && ++_ === r && (p = y), x === s && ++Q === c && (S = y), (B = $.nextSibling) !== null) break;
                $ = x, x = $.parentNode;
              }
              $ = B;
            }
            u = p === -1 || S === -1 ? null : { start: p, end: S };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Rr = { focusedElem: l, selectionRange: u }, Mr = !1, rl = n; rl !== null; )
      if (n = rl, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, rl = l;
      else
        for (; rl !== null; ) {
          switch (n = rl, s = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && s !== null) {
                l = void 0, u = n, r = s.memoizedProps, s = s.memoizedState, c = u.stateNode;
                try {
                  var ge = bi(
                    u.type,
                    r,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ge,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (be) {
                  Et(
                    u,
                    u.return,
                    be
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Ar(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ar(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(C(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, rl = l;
            break;
          }
          rl = n.return;
        }
  }
  function Ly(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Wn(l, u), c & 4 && fr(5, u);
        break;
      case 1:
        if (Wn(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (y) {
              Et(u, u.return, y);
            }
          else {
            var r = bi(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                r,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              Et(
                u,
                u.return,
                y
              );
            }
          }
        c & 64 && dd(u), c & 512 && zo(u, u.return);
        break;
      case 3:
        if (Wn(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Xf(l, n);
          } catch (y) {
            Et(u, u.return, y);
          }
        }
        break;
      case 27:
        n === null && c & 4 && yd(u);
      case 26:
      case 5:
        Wn(l, u), n === null && c & 4 && Mo(u), c & 512 && zo(u, u.return);
        break;
      case 12:
        Wn(l, u);
        break;
      case 13:
        Wn(l, u), c & 4 && vd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Tg.bind(
          null,
          u
        ), Ug(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || kn, !c) {
          n = n !== null && n.memoizedState !== null || Kt, r = kn;
          var s = Kt;
          kn = c, (Kt = n) && !s ? Ei(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Wn(l, u), kn = r, Kt = s;
        }
        break;
      case 30:
        break;
      default:
        Wn(l, u);
    }
  }
  function Vy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Vy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && mf(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Bt = null, Ml = !1;
  function $n(l, n, u) {
    for (u = u.child; u !== null; )
      We(l, n, u), u = u.sibling;
  }
  function We(l, n, u) {
    if (El && typeof El.onCommitFiberUnmount == "function")
      try {
        El.onCommitFiberUnmount(Wu, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Kt || gn(u, n), $n(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Kt || gn(u, n);
        var c = Bt, r = Ml;
        Ui(u.type) && (Bt = u.stateNode, Ml = !1), $n(
          l,
          n,
          u
        ), ma(u.stateNode), Bt = c, Ml = r;
        break;
      case 5:
        Kt || gn(u, n);
      case 6:
        if (c = Bt, r = Ml, Bt = null, $n(
          l,
          n,
          u
        ), Bt = c, Ml = r, Bt !== null)
          if (Ml)
            try {
              (Bt.nodeType === 9 ? Bt.body : Bt.nodeName === "HTML" ? Bt.ownerDocument.body : Bt).removeChild(u.stateNode);
            } catch (s) {
              Et(
                u,
                n,
                s
              );
            }
          else
            try {
              Bt.removeChild(u.stateNode);
            } catch (s) {
              Et(
                u,
                n,
                s
              );
            }
        break;
      case 18:
        Bt !== null && (Ml ? (l = Bt, Nd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), nu(l)) : Nd(Bt, u.stateNode));
        break;
      case 4:
        c = Bt, r = Ml, Bt = u.stateNode.containerInfo, Ml = !0, $n(
          l,
          n,
          u
        ), Bt = c, Ml = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Kt || Ti(2, u, n), Kt || Ti(4, u, n), $n(
          l,
          n,
          u
        );
        break;
      case 1:
        Kt || (gn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && qy(
          u,
          n,
          c
        )), $n(
          l,
          n,
          u
        );
        break;
      case 21:
        $n(
          l,
          n,
          u
        );
        break;
      case 22:
        Kt = (c = Kt) || u.memoizedState !== null, $n(
          l,
          n,
          u
        ), Kt = c;
        break;
      default:
        $n(
          l,
          n,
          u
        );
    }
  }
  function vd(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        nu(l);
      } catch (u) {
        Et(n, n.return, u);
      }
  }
  function Xy(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new pd()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new pd()), n;
      default:
        throw Error(C(435, l.tag));
    }
  }
  function gd(l, n) {
    var u = Xy(l);
    n.forEach(function(c) {
      var r = Eg.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(r, r));
    });
  }
  function $l(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var r = u[c], s = l, y = n, p = y;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Ui(p.type)) {
                Bt = p.stateNode, Ml = !1;
                break e;
              }
              break;
            case 5:
              Bt = p.stateNode, Ml = !1;
              break e;
            case 3:
            case 4:
              Bt = p.stateNode.containerInfo, Ml = !0;
              break e;
          }
          p = p.return;
        }
        if (Bt === null) throw Error(C(160));
        We(s, y, r), Bt = null, Ml = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        rr(n, l), n = n.sibling;
  }
  var Wl = null;
  function rr(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $l(n, l), gl(l), c & 4 && (Ti(3, l, l.return), fr(3, l), Ti(5, l, l.return));
        break;
      case 1:
        $l(n, l), gl(l), c & 512 && (Kt || u === null || gn(u, u.return)), c & 64 && kn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = Wl;
        if ($l(n, l), gl(l), c & 512 && (Kt || u === null || gn(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, r = r.ownerDocument || r;
                  t: switch (c) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[se] || s[yl] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(c), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), De(s, c, u), s[yl] = l, il(s), c = s;
                      break e;
                    case "link":
                      var y = pm(
                        "link",
                        "href",
                        r
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var p = 0; p < y.length; p++)
                          if (s = y[p], s.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && s.getAttribute("rel") === (u.rel == null ? null : u.rel) && s.getAttribute("title") === (u.title == null ? null : u.title) && s.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(p, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), De(s, c, u), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (y = pm(
                        "meta",
                        "content",
                        r
                      ).get(c + (u.content || ""))) {
                        for (p = 0; p < y.length; p++)
                          if (s = y[p], s.getAttribute("content") === (u.content == null ? null : "" + u.content) && s.getAttribute("name") === (u.name == null ? null : u.name) && s.getAttribute("property") === (u.property == null ? null : u.property) && s.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && s.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(p, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), De(s, c, u), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(C(468, c));
                  }
                  s[yl] = l, il(s), c = s;
                }
                l.stateNode = c;
              } else
                vm(
                  r,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = vv(
                r,
                c,
                l.memoizedProps
              );
          else
            s !== c ? (s === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : s.count--, c === null ? vm(
              r,
              l.type,
              l.stateNode
            ) : vv(
              r,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && jy(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        $l(n, l), gl(l), c & 512 && (Kt || u === null || gn(u, u.return)), u !== null && c & 4 && jy(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if ($l(n, l), gl(l), c & 512 && (Kt || u === null || gn(u, u.return)), l.flags & 32) {
          r = l.stateNode;
          try {
            Ic(r, "");
          } catch (B) {
            Et(l, l.return, B);
          }
        }
        c & 4 && l.stateNode != null && (r = l.memoizedProps, jy(
          l,
          r,
          u !== null ? u.memoizedProps : r
        )), c & 1024 && (md = !0);
        break;
      case 6:
        if ($l(n, l), gl(l), c & 4) {
          if (l.stateNode === null)
            throw Error(C(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (B) {
            Et(l, l.return, B);
          }
        }
        break;
      case 3:
        if (xi = null, r = Wl, Wl = wd(n.containerInfo), $l(n, l), Wl = r, gl(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            nu(n.containerInfo);
          } catch (B) {
            Et(l, l.return, B);
          }
        md && (md = !1, Qy(l));
        break;
      case 4:
        c = Wl, Wl = wd(
          l.stateNode.containerInfo
        ), $l(n, l), gl(l), Wl = c;
        break;
      case 12:
        $l(n, l), gl(l);
        break;
      case 13:
        $l(n, l), gl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Iy = hl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, gd(l, c)));
        break;
      case 22:
        r = l.memoizedState !== null;
        var S = u !== null && u.memoizedState !== null, _ = kn, Q = Kt;
        if (kn = _ || r, Kt = Q || S, $l(n, l), Kt = Q, kn = _, gl(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = r ? n._visibility & -2 : n._visibility | 1, r && (u === null || S || kn || Kt || Yt(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                S = u = n;
                try {
                  if (s = S.stateNode, r)
                    y = s.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    p = S.stateNode;
                    var $ = S.memoizedProps.style, x = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    p.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (B) {
                  Et(S, S.return, B);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                S = n;
                try {
                  S.stateNode.nodeValue = r ? "" : S.memoizedProps;
                } catch (B) {
                  Et(S, S.return, B);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, gd(l, u))));
        break;
      case 19:
        $l(n, l), gl(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, gd(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        $l(n, l), gl(l);
    }
  }
  function gl(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (ev(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(C(160));
        switch (u.tag) {
          case 27:
            var r = u.stateNode, s = Ja(l);
            hd(l, s, r);
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (Ic(y, ""), u.flags &= -33);
            var p = Ja(l);
            hd(l, p, y);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, _ = Ja(l);
            Tc(
              l,
              _,
              S
            );
            break;
          default:
            throw Error(C(161));
        }
      } catch (Q) {
        Et(l, l.return, Q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Qy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Qy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Wn(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Ly(l, n.alternate, n), n = n.sibling;
  }
  function Yt(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ti(4, n, n.return), Yt(n);
          break;
        case 1:
          gn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && qy(
            n,
            n.return,
            u
          ), Yt(n);
          break;
        case 27:
          ma(n.stateNode);
        case 26:
        case 5:
          gn(n, n.return), Yt(n);
          break;
        case 22:
          n.memoizedState === null && Yt(n);
          break;
        case 30:
          Yt(n);
          break;
        default:
          Yt(n);
      }
      l = l.sibling;
    }
  }
  function Ei(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, r = l, s = n, y = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Ei(
            r,
            s,
            u
          ), fr(4, s);
          break;
        case 1:
          if (Ei(
            r,
            s,
            u
          ), c = s, r = c.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (_) {
              Et(c, c.return, _);
            }
          if (c = s, r = c.updateQueue, r !== null) {
            var p = c.stateNode;
            try {
              var S = r.shared.hiddenCallbacks;
              if (S !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < S.length; r++)
                  Ns(S[r], p);
            } catch (_) {
              Et(c, c.return, _);
            }
          }
          u && y & 64 && dd(s), zo(s, s.return);
          break;
        case 27:
          yd(s);
        case 26:
        case 5:
          Ei(
            r,
            s,
            u
          ), u && c === null && y & 4 && Mo(s), zo(s, s.return);
          break;
        case 12:
          Ei(
            r,
            s,
            u
          );
          break;
        case 13:
          Ei(
            r,
            s,
            u
          ), u && y & 4 && vd(r, s);
          break;
        case 22:
          s.memoizedState === null && Ei(
            r,
            s,
            u
          ), zo(s, s.return);
          break;
        case 30:
          break;
        default:
          Ei(
            r,
            s,
            u
          );
      }
      n = n.sibling;
    }
  }
  function ka(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Yn(u));
  }
  function bd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yn(l));
  }
  function Ul(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Zy(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Zy(l, n, u, c) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ul(
          l,
          n,
          u,
          c
        ), r & 2048 && fr(9, n);
        break;
      case 1:
        Ul(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        Ul(
          l,
          n,
          u,
          c
        ), r & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yn(l)));
        break;
      case 12:
        if (r & 2048) {
          Ul(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var s = n.memoizedProps, y = s.id, p = s.onPostCommit;
            typeof p == "function" && p(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (S) {
            Et(n, n.return, S);
          }
        } else
          Ul(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        Ul(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        s = n.stateNode, y = n.alternate, n.memoizedState !== null ? s._visibility & 2 ? Ul(
          l,
          n,
          u,
          c
        ) : st(l, n) : s._visibility & 2 ? Ul(
          l,
          n,
          u,
          c
        ) : (s._visibility |= 2, xu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), r & 2048 && ka(y, n);
        break;
      case 24:
        Ul(
          l,
          n,
          u,
          c
        ), r & 2048 && bd(n.alternate, n);
        break;
      default:
        Ul(
          l,
          n,
          u,
          c
        );
    }
  }
  function xu(l, n, u, c, r) {
    for (r = r && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var s = l, y = n, p = u, S = c, _ = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          xu(
            s,
            y,
            p,
            S,
            r
          ), fr(8, y);
          break;
        case 23:
          break;
        case 22:
          var Q = y.stateNode;
          y.memoizedState !== null ? Q._visibility & 2 ? xu(
            s,
            y,
            p,
            S,
            r
          ) : st(
            s,
            y
          ) : (Q._visibility |= 2, xu(
            s,
            y,
            p,
            S,
            r
          )), r && _ & 2048 && ka(
            y.alternate,
            y
          );
          break;
        case 24:
          xu(
            s,
            y,
            p,
            S,
            r
          ), r && _ & 2048 && bd(y.alternate, y);
          break;
        default:
          xu(
            s,
            y,
            p,
            S,
            r
          );
      }
      n = n.sibling;
    }
  }
  function st(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, r = c.flags;
        switch (c.tag) {
          case 22:
            st(u, c), r & 2048 && ka(
              c.alternate,
              c
            );
            break;
          case 24:
            st(u, c), r & 2048 && bd(c.alternate, c);
            break;
          default:
            st(u, c);
        }
        n = n.sibling;
      }
  }
  var Ec = 8192;
  function Jt(l) {
    if (l.subtreeFlags & Ec)
      for (l = l.child; l !== null; )
        tv(l), l = l.sibling;
  }
  function tv(l) {
    switch (l.tag) {
      case 26:
        Jt(l), l.flags & Ec && l.memoizedState !== null && Sv(
          Wl,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Jt(l);
        break;
      case 3:
      case 4:
        var n = Wl;
        Wl = wd(l.stateNode.containerInfo), Jt(l), Wl = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = Ec, Ec = 16777216, Jt(l), Ec = n) : Jt(l));
        break;
      default:
        Jt(l);
    }
  }
  function Ky(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Rc(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          rl = c, ky(
            c,
            l
          );
        }
      Ky(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Jy(l), l = l.sibling;
  }
  function Jy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Rc(l), l.flags & 2048 && Ti(9, l, l.return);
        break;
      case 3:
        Rc(l);
        break;
      case 12:
        Rc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Fl(l)) : Rc(l);
        break;
      default:
        Rc(l);
    }
  }
  function Fl(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          rl = c, ky(
            c,
            l
          );
        }
      Ky(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Ti(8, n, n.return), Fl(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Fl(n));
          break;
        default:
          Fl(n);
      }
      l = l.sibling;
    }
  }
  function ky(l, n) {
    for (; rl !== null; ) {
      var u = rl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ti(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Yn(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, rl = c;
      else
        e: for (u = l; rl !== null; ) {
          c = rl;
          var r = c.sibling, s = c.return;
          if (Vy(c), c === u) {
            rl = null;
            break e;
          }
          if (r !== null) {
            r.return = s, rl = r;
            break e;
          }
          rl = s;
        }
    }
  }
  var $y = {
    getCacheForType: function(l) {
      var n = ml(cl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, lv = typeof WeakMap == "function" ? WeakMap : Map, pt = 0, Mt = null, Ie = null, Pe = 0, bt = 0, da = null, Fn = !1, Uo = !1, Wy = !1, Nu = 0, kt = 0, wu = 0, Ac = 0, In = 0, $a = 0, Co = 0, _o = null, ha = null, Fy = !1, Iy = 0, Sd = 1 / 0, Ho = null, Ri = null, Cl = 0, Pn = null, xo = null, _l = 0, Td = 0, Ed = null, Py = null, No = 0, em = null;
  function za() {
    if ((pt & 2) !== 0 && Pe !== 0)
      return Pe & -Pe;
    if (A.T !== null) {
      var l = Qa;
      return l !== 0 ? l : Mc();
    }
    return es();
  }
  function tm() {
    $a === 0 && ($a = (Pe & 536870912) === 0 || ft ? ee() : 536870912);
    var l = Da.current;
    return l !== null && (l.flags |= 32), $a;
  }
  function Ma(l, n, u) {
    (l === Mt && (bt === 2 || bt === 9) || l.cancelPendingCommit !== null) && (eu(l, 0), Bu(
      l,
      Pe,
      $a,
      !1
    )), He(l, u), ((pt & 2) === 0 || l !== Mt) && (l === Mt && ((pt & 2) === 0 && (Ac |= u), kt === 4 && Bu(
      l,
      Pe,
      $a,
      !1
    )), ya(l));
  }
  function wo(l, n, u) {
    if ((pt & 6) !== 0) throw Error(C(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || m(l, n), r = c ? am(l, n) : Rd(l, n, !0), s = c;
    do {
      if (r === 0) {
        Uo && !c && Bu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, s && !av(u)) {
          r = Rd(l, n, !1), s = !1;
          continue;
        }
        if (r === 2) {
          if (s = n, l.errorRecoveryDisabledLanes & s)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var p = l;
              r = _o;
              var S = p.current.memoizedState.isDehydrated;
              if (S && (eu(p, y).flags |= 256), y = Rd(
                p,
                y,
                !1
              ), y !== 2) {
                if (Wy && !S) {
                  p.errorRecoveryDisabledLanes |= s, Ac |= s, r = 4;
                  break e;
                }
                s = ha, ha = r, s !== null && (ha === null ? ha = s : ha.push.apply(
                  ha,
                  s
                ));
              }
              r = y;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          eu(l, 0), Bu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s = r, s) {
            case 0:
            case 1:
              throw Error(C(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Bu(
                c,
                n,
                $a,
                !Fn
              );
              break e;
            case 2:
              ha = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(C(329));
          }
          if ((n & 62914560) === n && (r = Iy + 300 - hl(), 10 < r)) {
            if (Bu(
              c,
              n,
              $a,
              !Fn
            ), an(c, 0, !0) !== 0) break e;
            c.timeoutHandle = xd(
              sr.bind(
                null,
                c,
                u,
                ha,
                Ho,
                Fy,
                n,
                $a,
                Ac,
                Co,
                Fn,
                s,
                2,
                -0,
                0
              ),
              r
            );
            break e;
          }
          sr(
            c,
            u,
            ha,
            Ho,
            Fy,
            n,
            $a,
            Ac,
            Co,
            Fn,
            s,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ya(l);
  }
  function sr(l, n, u, c, r, s, y, p, S, _, Q, $, x, B) {
    if (l.timeoutHandle = -1, $ = n.subtreeFlags, ($ & 8192 || ($ & 16785408) === 16785408) && (Jo = { stylesheets: null, count: 0, unsuspend: bv }, tv(n), $ = bm(), $ !== null)) {
      l.cancelPendingCommit = $(
        iv.bind(
          null,
          l,
          n,
          s,
          u,
          c,
          r,
          y,
          p,
          S,
          Q,
          1,
          x,
          B
        )
      ), Bu(l, s, y, !_);
      return;
    }
    iv(
      l,
      n,
      s,
      u,
      c,
      r,
      y,
      p,
      S
    );
  }
  function av(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var r = u[c], s = r.getSnapshot;
          r = r.value;
          try {
            if (!zl(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Bu(l, n, u, c) {
    n &= ~In, n &= ~Ac, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var r = n; 0 < r; ) {
      var s = 31 - Rl(r), y = 1 << s;
      c[s] = -1, r &= ~y;
    }
    u !== 0 && at(l, u, n);
  }
  function Oc() {
    return (pt & 6) === 0 ? (mr(0), !1) : !0;
  }
  function Ai() {
    if (Ie !== null) {
      if (bt === 0)
        var l = Ie.return;
      else
        l = Ie, yn = Du = null, qs(l), mc = null, Eo = 0, l = Ie;
      for (; l !== null; )
        Yy(l.alternate, l), l = l.return;
      Ie = null;
    }
  }
  function eu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Dg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ai(), Mt = l, Ie = u = dn(l.current, null), Pe = n, bt = 0, da = null, Fn = !1, Uo = m(l, n), Wy = !1, Co = $a = In = Ac = wu = kt = 0, ha = _o = null, Fy = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var r = 31 - Rl(c), s = 1 << r;
        n |= l[r], c &= ~s;
      }
    return Nu = n, sn(), u;
  }
  function lm(l, n) {
    Ye = null, A.H = Ps, n === yi || n === Lf ? (n = iy(), bt = 3) : n === Us ? (n = iy(), bt = 4) : bt = n === Zt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, da = n, Ie === null && (kt = 1, ur(
      l,
      Ra(n, l.current)
    ));
  }
  function nv() {
    var l = A.H;
    return A.H = Ps, l === null ? Ps : l;
  }
  function Dc() {
    var l = A.A;
    return A.A = $y, l;
  }
  function zc() {
    kt = 4, Fn || (Pe & 4194048) !== Pe && Da.current !== null || (Uo = !0), (wu & 134217727) === 0 && (Ac & 134217727) === 0 || Mt === null || Bu(
      Mt,
      Pe,
      $a,
      !1
    );
  }
  function Rd(l, n, u) {
    var c = pt;
    pt |= 2;
    var r = nv(), s = Dc();
    (Mt !== l || Pe !== n) && (Ho = null, eu(l, n)), n = !1;
    var y = kt;
    e: do
      try {
        if (bt !== 0 && Ie !== null) {
          var p = Ie, S = da;
          switch (bt) {
            case 8:
              Ai(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Da.current === null && (n = !0);
              var _ = bt;
              if (bt = 0, da = null, Bo(l, p, S, _), u && Uo) {
                y = 0;
                break e;
              }
              break;
            default:
              _ = bt, bt = 0, da = null, Bo(l, p, S, _);
          }
        }
        Ad(), y = kt;
        break;
      } catch (Q) {
        lm(l, Q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, yn = Du = null, pt = c, A.H = r, A.A = s, Ie === null && (Mt = null, Pe = 0, sn()), y;
  }
  function Ad() {
    for (; Ie !== null; ) um(Ie);
  }
  function am(l, n) {
    var u = pt;
    pt |= 2;
    var c = nv(), r = Dc();
    Mt !== l || Pe !== n ? (Ho = null, Sd = hl() + 500, eu(l, n)) : Uo = m(
      l,
      n
    );
    e: do
      try {
        if (bt !== 0 && Ie !== null) {
          n = Ie;
          var s = da;
          t: switch (bt) {
            case 1:
              bt = 0, da = null, Bo(l, n, s, 1);
              break;
            case 2:
            case 9:
              if (_s(s)) {
                bt = 0, da = null, im(n);
                break;
              }
              n = function() {
                bt !== 2 && bt !== 9 || Mt !== l || (bt = 7), ya(l);
              }, s.then(n, n);
              break e;
            case 3:
              bt = 7;
              break e;
            case 4:
              bt = 5;
              break e;
            case 7:
              _s(s) ? (bt = 0, da = null, im(n)) : (bt = 0, da = null, Bo(l, n, s, 7));
              break;
            case 5:
              var y = null;
              switch (Ie.tag) {
                case 26:
                  y = Ie.memoizedState;
                case 5:
                case 27:
                  var p = Ie;
                  if (!y || gm(y)) {
                    bt = 0, da = null;
                    var S = p.sibling;
                    if (S !== null) Ie = S;
                    else {
                      var _ = p.return;
                      _ !== null ? (Ie = _, dr(_)) : Ie = null;
                    }
                    break t;
                  }
              }
              bt = 0, da = null, Bo(l, n, s, 5);
              break;
            case 6:
              bt = 0, da = null, Bo(l, n, s, 6);
              break;
            case 8:
              Ai(), kt = 6;
              break e;
            default:
              throw Error(C(462));
          }
        }
        nm();
        break;
      } catch (Q) {
        lm(l, Q);
      }
    while (!0);
    return yn = Du = null, A.H = c, A.A = r, pt = u, Ie !== null ? 0 : (Mt = null, Pe = 0, sn(), kt);
  }
  function nm() {
    for (; Ie !== null && !df(); )
      um(Ie);
  }
  function um(l) {
    var n = Pp(l.alternate, l, Nu);
    l.memoizedProps = l.pendingProps, n === null ? dr(l) : Ie = n;
  }
  function im(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Hy(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Pe
        );
        break;
      case 11:
        n = Hy(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Pe
        );
        break;
      case 5:
        qs(n);
      default:
        Yy(u, n), n = Ie = Ke(n, Nu), n = Pp(u, n, Nu);
    }
    l.memoizedProps = l.pendingProps, n === null ? dr(l) : Ie = n;
  }
  function Bo(l, n, u, c) {
    yn = Du = null, qs(n), mc = null, Eo = 0;
    var r = n.return;
    try {
      if (Wp(
        l,
        r,
        n,
        u,
        Pe
      )) {
        kt = 1, ur(
          l,
          Ra(u, l.current)
        ), Ie = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw Ie = r, s;
      kt = 1, ur(
        l,
        Ra(u, l.current)
      ), Ie = null;
      return;
    }
    n.flags & 32768 ? (ft || c === 1 ? l = !0 : Uo || (Pe & 536870912) !== 0 ? l = !1 : (Fn = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = Da.current, c !== null && c.tag === 13 && (c.flags |= 16384))), uv(n, l)) : dr(n);
  }
  function dr(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        uv(
          n,
          Fn
        );
        return;
      }
      l = n.return;
      var u = By(
        n.alternate,
        n,
        Nu
      );
      if (u !== null) {
        Ie = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ie = n;
        return;
      }
      Ie = n = l;
    } while (n !== null);
    kt === 0 && (kt = 5);
  }
  function uv(l, n) {
    do {
      var u = Sg(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Ie = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Ie = l;
        return;
      }
      Ie = l = u;
    } while (l !== null);
    kt = 6, Ie = null;
  }
  function iv(l, n, u, c, r, s, y, p, S) {
    l.cancelPendingCommit = null;
    do
      Dd();
    while (Cl !== 0);
    if ((pt & 6) !== 0) throw Error(C(327));
    if (n !== null) {
      if (n === l.current) throw Error(C(177));
      if (s = n.lanes | n.childLanes, s |= xn, Be(
        l,
        u,
        s,
        y,
        p,
        S
      ), l === Mt && (Ie = Mt = null, Pe = 0), xo = n, Pn = l, _l = u, Td = s, Ed = r, Py = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Rg(Dn, function() {
        return cm(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = A.T, A.T = null, r = K.p, K.p = 2, y = pt, pt |= 4;
        try {
          Gy(l, n, u);
        } finally {
          pt = y, K.p = r, A.T = c;
        }
      }
      Cl = 1, cv(), hr(), Od();
    }
  }
  function cv() {
    if (Cl === 1) {
      Cl = 0;
      var l = Pn, n = xo, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = A.T, A.T = null;
        var c = K.p;
        K.p = 2;
        var r = pt;
        pt |= 4;
        try {
          rr(n, l);
          var s = Rr, y = $h(l.containerInfo), p = s.focusedElem, S = s.selectionRange;
          if (y !== p && p && p.ownerDocument && Cf(
            p.ownerDocument.documentElement,
            p
          )) {
            if (S !== null && _f(p)) {
              var _ = S.start, Q = S.end;
              if (Q === void 0 && (Q = _), "selectionStart" in p)
                p.selectionStart = _, p.selectionEnd = Math.min(
                  Q,
                  p.value.length
                );
              else {
                var $ = p.ownerDocument || document, x = $ && $.defaultView || window;
                if (x.getSelection) {
                  var B = x.getSelection(), ge = p.textContent.length, be = Math.min(S.start, ge), dt = S.end === void 0 ? be : Math.min(S.end, ge);
                  !B.extend && be > dt && (y = dt, dt = be, be = y);
                  var z = _t(
                    p,
                    be
                  ), O = _t(
                    p,
                    dt
                  );
                  if (z && O && (B.rangeCount !== 1 || B.anchorNode !== z.node || B.anchorOffset !== z.offset || B.focusNode !== O.node || B.focusOffset !== O.offset)) {
                    var U = $.createRange();
                    U.setStart(z.node, z.offset), B.removeAllRanges(), be > dt ? (B.addRange(U), B.extend(O.node, O.offset)) : (U.setEnd(O.node, O.offset), B.addRange(U));
                  }
                }
              }
            }
            for ($ = [], B = p; B = B.parentNode; )
              B.nodeType === 1 && $.push({
                element: B,
                left: B.scrollLeft,
                top: B.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < $.length; p++) {
              var J = $[p];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          Mr = !!Er, Rr = Er = null;
        } finally {
          pt = r, K.p = c, A.T = u;
        }
      }
      l.current = n, Cl = 2;
    }
  }
  function hr() {
    if (Cl === 2) {
      Cl = 0;
      var l = Pn, n = xo, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = A.T, A.T = null;
        var c = K.p;
        K.p = 2;
        var r = pt;
        pt |= 4;
        try {
          Ly(l, n.alternate, n);
        } finally {
          pt = r, K.p = c, A.T = u;
        }
      }
      Cl = 3;
    }
  }
  function Od() {
    if (Cl === 4 || Cl === 3) {
      Cl = 0, Pt();
      var l = Pn, n = xo, u = _l, c = Py;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Cl = 5 : (Cl = 0, xo = Pn = null, ov(l, l.pendingLanes));
      var r = l.pendingLanes;
      if (r === 0 && (Ri = null), nn(u), n = n.stateNode, El && typeof El.onCommitFiberRoot == "function")
        try {
          El.onCommitFiberRoot(
            Wu,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = A.T, r = K.p, K.p = 2, A.T = null;
        try {
          for (var s = l.onRecoverableError, y = 0; y < c.length; y++) {
            var p = c[y];
            s(p.value, {
              componentStack: p.stack
            });
          }
        } finally {
          A.T = n, K.p = r;
        }
      }
      (_l & 3) !== 0 && Dd(), ya(l), r = l.pendingLanes, (u & 4194090) !== 0 && (r & 42) !== 0 ? l === em ? No++ : (No = 0, em = l) : No = 0, mr(0);
    }
  }
  function ov(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Yn(n)));
  }
  function Dd(l) {
    return cv(), hr(), Od(), cm();
  }
  function cm() {
    if (Cl !== 5) return !1;
    var l = Pn, n = Td;
    Td = 0;
    var u = nn(_l), c = A.T, r = K.p;
    try {
      K.p = 32 > u ? 32 : u, A.T = null, u = Ed, Ed = null;
      var s = Pn, y = _l;
      if (Cl = 0, xo = Pn = null, _l = 0, (pt & 6) !== 0) throw Error(C(331));
      var p = pt;
      if (pt |= 4, Jy(s.current), Zy(
        s,
        s.current,
        y,
        u
      ), pt = p, mr(0, !1), El && typeof El.onPostCommitFiberRoot == "function")
        try {
          El.onPostCommitFiberRoot(Wu, s);
        } catch {
        }
      return !0;
    } finally {
      K.p = r, A.T = c, ov(l, n);
    }
  }
  function om(l, n, u) {
    n = Ra(u, n), n = Cy(l.stateNode, n, 2), l = Gn(l, n, 2), l !== null && (He(l, 2), ya(l));
  }
  function Et(l, n, u) {
    if (l.tag === 3)
      om(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          om(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Ri === null || !Ri.has(c))) {
            l = Ra(u, l), u = _y(2), c = Gn(n, u, 2), c !== null && (sa(
              u,
              c,
              n,
              l
            ), He(c, 2), ya(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function zd(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new lv();
      var r = /* @__PURE__ */ new Set();
      c.set(n, r);
    } else
      r = c.get(n), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(n, r));
    r.has(u) || (Wy = !0, r.add(u), l = fm.bind(null, l, n, u), n.then(l, l));
  }
  function fm(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Mt === l && (Pe & u) === u && (kt === 4 || kt === 3 && (Pe & 62914560) === Pe && 300 > hl() - Iy ? (pt & 2) === 0 && eu(l, 0) : In |= u, Co === Pe && (Co = 0)), ya(l);
  }
  function rm(l, n) {
    n === 0 && (n = ae()), l = Nn(l, n), l !== null && (He(l, n), ya(l));
  }
  function Tg(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), rm(l, u);
  }
  function Eg(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, r = l.memoizedState;
        r !== null && (u = r.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(C(314));
    }
    c !== null && c.delete(n), rm(l, u);
  }
  function Rg(l, n) {
    return On(l, n);
  }
  var Md = null, Oi = null, yr = !1, Yo = !1, Ud = !1, Di = 0;
  function ya(l) {
    l !== Oi && l.next === null && (Oi === null ? Md = Oi = l : Oi = Oi.next = l), Yo = !0, yr || (yr = !0, sv());
  }
  function mr(l, n) {
    if (!Ud && Yo) {
      Ud = !0;
      do
        for (var u = !1, c = Md; c !== null; ) {
          if (l !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var y = c.suspendedLanes, p = c.pingedLanes;
              s = (1 << 31 - Rl(42 | l) + 1) - 1, s &= r & ~(y & ~p), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, vr(c, s));
          } else
            s = Pe, s = an(
              c,
              c === Mt ? s : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (s & 3) === 0 || m(c, s) || (u = !0, vr(c, s));
          c = c.next;
        }
      while (u);
      Ud = !1;
    }
  }
  function fv() {
    pr();
  }
  function pr() {
    Yo = yr = !1;
    var l = 0;
    Di !== 0 && (ju() && (l = Di), Di = 0);
    for (var n = hl(), u = null, c = Md; c !== null; ) {
      var r = c.next, s = sm(c, n);
      s === 0 ? (c.next = null, u === null ? Md = r : u.next = r, r === null && (Oi = u)) : (u = c, (l !== 0 || (s & 3) !== 0) && (Yo = !0)), c = r;
    }
    mr(l);
  }
  function sm(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, r = l.expirationTimes, s = l.pendingLanes & -62914561; 0 < s; ) {
      var y = 31 - Rl(s), p = 1 << y, S = r[y];
      S === -1 ? ((p & u) === 0 || (p & c) !== 0) && (r[y] = D(p, n)) : S <= n && (l.expiredLanes |= p), s &= ~p;
    }
    if (n = Mt, u = Pe, u = an(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (bt === 2 || bt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Kc(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || m(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Kc(c), nn(u)) {
        case 2:
        case 8:
          u = Qe;
          break;
        case 32:
          u = Dn;
          break;
        case 268435456:
          u = pu;
          break;
        default:
          u = Dn;
      }
      return c = rv.bind(null, l), u = On(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Kc(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function rv(l, n) {
    if (Cl !== 0 && Cl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Dd() && l.callbackNode !== u)
      return null;
    var c = Pe;
    return c = an(
      l,
      l === Mt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (wo(l, c, n), sm(l, hl()), l.callbackNode != null && l.callbackNode === u ? rv.bind(null, l) : null);
  }
  function vr(l, n) {
    if (Dd()) return null;
    wo(l, n, !0);
  }
  function sv() {
    zg(function() {
      (pt & 6) !== 0 ? On(
        Ir,
        fv
      ) : pr();
    });
  }
  function Mc() {
    return Di === 0 && (Di = ee()), Di;
  }
  function Cd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ef("" + l);
  }
  function gr(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function dv(l, n, u, c, r) {
    if (n === "submit" && u && u.stateNode === r) {
      var s = Cd(
        (r[Kl] || null).action
      ), y = c.submitter;
      y && (n = (n = y[Kl] || null) ? Cd(n.formAction) : y.getAttribute("formAction"), n !== null && (s = n, y = null));
      var p = new ds(
        "action",
        "action",
        null,
        c,
        r
      );
      l.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (Di !== 0) {
                  var S = y ? gr(r, y) : new FormData(r);
                  Is(
                    u,
                    {
                      pending: !0,
                      data: S,
                      method: r.method,
                      action: s
                    },
                    null,
                    S
                  );
                }
              } else
                typeof s == "function" && (p.preventDefault(), S = y ? gr(r, y) : new FormData(r), Is(
                  u,
                  {
                    pending: !0,
                    data: S,
                    method: r.method,
                    action: s
                  },
                  s,
                  S
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var $t = 0; $t < no.length; $t++) {
    var br = no[$t], Ag = br.toLowerCase(), Ze = br[0].toUpperCase() + br.slice(1);
    ja(
      Ag,
      "on" + Ze
    );
  }
  ja(wp, "onAnimationEnd"), ja(Wh, "onAnimationIteration"), ja(Bp, "onAnimationStart"), ja("dblclick", "onDoubleClick"), ja("focusin", "onFocus"), ja("focusout", "onBlur"), ja(Fh, "onTransitionRun"), ja(Ts, "onTransitionStart"), ja(Yp, "onTransitionCancel"), ja(Ih, "onTransitionEnd"), Iu("onMouseEnter", ["mouseout", "mouseover"]), Iu("onMouseLeave", ["mouseout", "mouseover"]), Iu("onPointerEnter", ["pointerout", "pointerover"]), Iu("onPointerLeave", ["pointerout", "pointerover"]), Fu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Fu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Fu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Fu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Fu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Fu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), zi = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sr)
  );
  function Uc(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], r = c.event;
      c = c.listeners;
      e: {
        var s = void 0;
        if (n)
          for (var y = c.length - 1; 0 <= y; y--) {
            var p = c[y], S = p.instance, _ = p.currentTarget;
            if (p = p.listener, S !== s && r.isPropagationStopped())
              break e;
            s = p, r.currentTarget = _;
            try {
              s(r);
            } catch (Q) {
              ar(Q);
            }
            r.currentTarget = null, s = S;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (p = c[y], S = p.instance, _ = p.currentTarget, p = p.listener, S !== s && r.isPropagationStopped())
              break e;
            s = p, r.currentTarget = _;
            try {
              s(r);
            } catch (Q) {
              ar(Q);
            }
            r.currentTarget = null, s = S;
          }
      }
    }
  }
  function qe(l, n) {
    var u = n[ts];
    u === void 0 && (u = n[ts] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (_d(n, l, 2, !1), u.add(c));
  }
  function qo(l, n, u) {
    var c = 0;
    n && (c |= 4), _d(
      u,
      l,
      c,
      n
    );
  }
  var jo = "_reactListening" + Math.random().toString(36).slice(2);
  function dm(l) {
    if (!l[jo]) {
      l[jo] = !0, vf.forEach(function(u) {
        u !== "selectionchange" && (zi.has(u) || qo(u, !1, l), qo(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[jo] || (n[jo] = !0, qo("selectionchange", !1, n));
    }
  }
  function _d(l, n, u, c) {
    switch (zm(n)) {
      case 2:
        var r = Tv;
        break;
      case 8:
        r = Ev;
        break;
      default:
        r = Om;
    }
    u = r.bind(
      null,
      n,
      u,
      l
    ), r = void 0, !fs || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (r = !0), c ? r !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: r
    }) : l.addEventListener(n, u, !0) : r !== void 0 ? l.addEventListener(n, u, {
      passive: r
    }) : l.addEventListener(n, u, !1);
  }
  function Wa(l, n, u, c, r) {
    var s = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var p = c.stateNode.containerInfo;
          if (p === r) break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var S = y.tag;
              if ((S === 3 || S === 4) && y.stateNode.containerInfo === r)
                return;
              y = y.return;
            }
          for (; p !== null; ) {
            if (y = Ol(p), y === null) return;
            if (S = y.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              c = s = y;
              continue e;
            }
            p = p.parentNode;
          }
        }
        c = c.return;
      }
    to(function() {
      var _ = s, Q = os(u), $ = [];
      e: {
        var x = Ph.get(l);
        if (x !== void 0) {
          var B = ds, ge = l;
          switch (l) {
            case "keypress":
              if (Dl(u) === 0) break e;
            case "keydown":
            case "keyup":
              B = un;
              break;
            case "focusin":
              ge = "focus", B = Nh;
              break;
            case "focusout":
              ge = "blur", B = Nh;
              break;
            case "beforeblur":
            case "afterblur":
              B = Nh;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = xh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = Dp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = Yh;
              break;
            case wp:
            case Wh:
            case Bp:
              B = pg;
              break;
            case Ih:
              B = _p;
              break;
            case "scroll":
            case "scrollend":
              B = Ap;
              break;
            case "wheel":
              B = Ii;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = Of;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = Df;
              break;
            case "toggle":
            case "beforetoggle":
              B = Hp;
          }
          var be = (n & 4) !== 0, dt = !be && (l === "scroll" || l === "scrollend"), z = be ? x !== null ? x + "Capture" : null : x;
          be = [];
          for (var O = _, U; O !== null; ) {
            var J = O;
            if (U = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || U === null || z === null || (J = ki(O, z), J != null && be.push(
              Yu(O, J, U)
            )), dt) break;
            O = O.return;
          }
          0 < be.length && (x = new B(
            x,
            ge,
            null,
            u,
            Q
          ), $.push({ event: x, listeners: be }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (x = l === "mouseover" || l === "pointerover", B = l === "mouseout" || l === "pointerout", x && u !== Ji && (ge = u.relatedTarget || u.fromElement) && (Ol(ge) || ge[Wc]))
            break e;
          if ((B || x) && (x = Q.window === Q ? Q : (x = Q.ownerDocument) ? x.defaultView || x.parentWindow : window, B ? (ge = u.relatedTarget || u.toElement, B = _, ge = ge ? Ol(ge) : null, ge !== null && (dt = Oe(ge), be = ge.tag, ge !== dt || be !== 5 && be !== 27 && be !== 6) && (ge = null)) : (B = null, ge = _), B !== ge)) {
            if (be = xh, J = "onMouseLeave", z = "onMouseEnter", O = "mouse", (l === "pointerout" || l === "pointerover") && (be = Df, J = "onPointerLeave", z = "onPointerEnter", O = "pointer"), dt = B == null ? x : pf(B), U = ge == null ? x : pf(ge), x = new be(
              J,
              O + "leave",
              B,
              u,
              Q
            ), x.target = dt, x.relatedTarget = U, J = null, Ol(Q) === _ && (be = new be(
              z,
              O + "enter",
              ge,
              u,
              Q
            ), be.target = U, be.relatedTarget = dt, J = be), dt = J, B && ge)
              t: {
                for (be = B, z = ge, O = 0, U = be; U; U = Mi(U))
                  O++;
                for (U = 0, J = z; J; J = Mi(J))
                  U++;
                for (; 0 < O - U; )
                  be = Mi(be), O--;
                for (; 0 < U - O; )
                  z = Mi(z), U--;
                for (; O--; ) {
                  if (be === z || z !== null && be === z.alternate)
                    break t;
                  be = Mi(be), z = Mi(z);
                }
                be = null;
              }
            else be = null;
            B !== null && Tr(
              $,
              x,
              B,
              be,
              !1
            ), ge !== null && dt !== null && Tr(
              $,
              dt,
              ge,
              be,
              !0
            );
          }
        }
        e: {
          if (x = _ ? pf(_) : window, B = x.nodeName && x.nodeName.toLowerCase(), B === "select" || B === "input" && x.type === "file")
            var re = Xh;
          else if (vs(x))
            if (Qh)
              re = Jh;
            else {
              re = ni;
              var Je = bs;
            }
          else
            B = x.nodeName, !B || B.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? _ && Ki(_.elementType) && (re = Xh) : re = Eu;
          if (re && (re = re(l, _))) {
            gs(
              $,
              re,
              u,
              Q
            );
            break e;
          }
          Je && Je(l, x, _), l === "focusout" && _ && x.type === "number" && _.memoizedProps.value != null && Sf(x, "number", x.value);
        }
        switch (Je = _ ? pf(_) : window, l) {
          case "focusin":
            (vs(Je) || Je.contentEditable === "true") && (_n = Je, fn = _, ci = null);
            break;
          case "focusout":
            ci = fn = _n = null;
            break;
          case "mousedown":
            ac = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ac = !1, Ss($, u, Q);
            break;
          case "selectionchange":
            if (lc) break;
          case "keydown":
          case "keyup":
            Ss($, u, Q);
        }
        var ve;
        if (zf)
          e: {
            switch (l) {
              case "compositionstart":
                var Ae = "onCompositionStart";
                break e;
              case "compositionend":
                Ae = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ae = "onCompositionUpdate";
                break e;
            }
            Ae = void 0;
          }
        else
          ai ? Uf(l, u) && (Ae = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ae = "onCompositionStart");
        Ae && (Un && u.locale !== "ko" && (ai || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && ai && (ve = _h()) : (Su = Q, lo = "value" in Su ? Su.value : Su.textContent, ai = !0)), Je = Go(_, Ae), 0 < Je.length && (Ae = new wh(
          Ae,
          l,
          null,
          u,
          Q
        ), $.push({ event: Ae, listeners: Je }), ve ? Ae.data = ve : (ve = li(u), ve !== null && (Ae.data = ve)))), (ve = jh ? Lh(l, u) : Pi(l, u)) && (Ae = Go(_, "onBeforeInput"), 0 < Ae.length && (Je = new wh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Q
        ), $.push({
          event: Je,
          listeners: Ae
        }), Je.data = ve)), dv(
          $,
          l,
          _,
          u,
          Q
        );
      }
      Uc($, n);
    });
  }
  function Yu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Go(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var r = l, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = ki(l, u), r != null && c.unshift(
        Yu(l, r, s)
      ), r = ki(l, n), r != null && c.push(
        Yu(l, r, s)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Mi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Tr(l, n, u, c, r) {
    for (var s = n._reactName, y = []; u !== null && u !== c; ) {
      var p = u, S = p.alternate, _ = p.stateNode;
      if (p = p.tag, S !== null && S === c) break;
      p !== 5 && p !== 26 && p !== 27 || _ === null || (S = _, r ? (_ = ki(u, s), _ != null && y.unshift(
        Yu(u, _, S)
      )) : r || (_ = ki(u, s), _ != null && y.push(
        Yu(u, _, S)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var Ua = /\r\n?/g, hm = /\u0000|\uFFFD/g;
  function hv(l) {
    return (typeof l == "string" ? l : "" + l).replace(Ua, `
`).replace(hm, "");
  }
  function ym(l, n) {
    return n = hv(n), hv(l) === n;
  }
  function Hd() {
  }
  function xe(l, n, u, c, r, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Ic(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Ic(l, "" + c);
        break;
      case "className":
        gf(l, "class", c);
        break;
      case "tabIndex":
        gf(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        gf(l, u, c);
        break;
      case "style":
        Tf(l, c, s);
        break;
      case "data":
        if (n !== "object") {
          gf(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Ef("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (u === "formAction" ? (n !== "input" && xe(l, n, "name", r.name, r, null), xe(
            l,
            n,
            "formEncType",
            r.formEncType,
            r,
            null
          ), xe(
            l,
            n,
            "formMethod",
            r.formMethod,
            r,
            null
          ), xe(
            l,
            n,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (xe(l, n, "encType", r.encType, r, null), xe(l, n, "method", r.method, r, null), xe(l, n, "target", r.target, r, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Ef("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Hd);
        break;
      case "onScroll":
        c != null && qe("scroll", l);
        break;
      case "onScrollEnd":
        c != null && qe("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(C(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(C(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Ef("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        qe("beforetoggle", l), qe("toggle", l), gu(l, "popover", c);
        break;
      case "xlinkActuate":
        zn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        zn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        zn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        zn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        zn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        zn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        zn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        zn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        zn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        gu(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = hg.get(u) || u, gu(l, u, c));
    }
  }
  function Y(l, n, u, c, r, s) {
    switch (u) {
      case "style":
        Tf(l, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(C(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(C(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Ic(l, c) : (typeof c == "number" || typeof c == "bigint") && Ic(l, "" + c);
        break;
      case "onScroll":
        c != null && qe("scroll", l);
        break;
      case "onScrollEnd":
        c != null && qe("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Hd);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ta.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (r = u.endsWith("Capture"), n = u.slice(2, r ? u.length - 7 : void 0), s = l[Kl] || null, s = s != null ? s[u] : null, typeof s == "function" && l.removeEventListener(n, s, r), typeof c == "function")) {
              typeof s != "function" && s !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, r);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : gu(l, u, c);
          }
    }
  }
  function De(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        qe("error", l), qe("load", l);
        var c = !1, r = !1, s;
        for (s in u)
          if (u.hasOwnProperty(s)) {
            var y = u[s];
            if (y != null)
              switch (s) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(C(137, n));
                default:
                  xe(l, n, s, y, u, null);
              }
          }
        r && xe(l, n, "srcSet", u.srcSet, u, null), c && xe(l, n, "src", u.src, u, null);
        return;
      case "input":
        qe("invalid", l);
        var p = s = y = r = null, S = null, _ = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var Q = u[c];
            if (Q != null)
              switch (c) {
                case "name":
                  r = Q;
                  break;
                case "type":
                  y = Q;
                  break;
                case "checked":
                  S = Q;
                  break;
                case "defaultChecked":
                  _ = Q;
                  break;
                case "value":
                  s = Q;
                  break;
                case "defaultValue":
                  p = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(C(137, n));
                  break;
                default:
                  xe(l, n, c, Q, u, null);
              }
          }
        is(
          l,
          s,
          p,
          S,
          _,
          y,
          r,
          !1
        ), ei(l);
        return;
      case "select":
        qe("invalid", l), c = y = s = null;
        for (r in u)
          if (u.hasOwnProperty(r) && (p = u[r], p != null))
            switch (r) {
              case "value":
                s = p;
                break;
              case "defaultValue":
                y = p;
                break;
              case "multiple":
                c = p;
              default:
                xe(l, n, r, p, u, null);
            }
        n = s, u = y, l.multiple = !!c, n != null ? Zi(l, !!c, n, !1) : u != null && Zi(l, !!c, u, !0);
        return;
      case "textarea":
        qe("invalid", l), s = r = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (p = u[y], p != null))
            switch (y) {
              case "value":
                c = p;
                break;
              case "defaultValue":
                r = p;
                break;
              case "children":
                s = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(C(91));
                break;
              default:
                xe(l, n, y, p, u, null);
            }
        Uh(l, c, r, s), ei(l);
        return;
      case "option":
        for (S in u)
          if (u.hasOwnProperty(S) && (c = u[S], c != null))
            switch (S) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                xe(l, n, S, c, u, null);
            }
        return;
      case "dialog":
        qe("beforetoggle", l), qe("toggle", l), qe("cancel", l), qe("close", l);
        break;
      case "iframe":
      case "object":
        qe("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Sr.length; c++)
          qe(Sr[c], l);
        break;
      case "image":
        qe("error", l), qe("load", l);
        break;
      case "details":
        qe("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        qe("error", l), qe("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in u)
          if (u.hasOwnProperty(_) && (c = u[_], c != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(C(137, n));
              default:
                xe(l, n, _, c, u, null);
            }
        return;
      default:
        if (Ki(n)) {
          for (Q in u)
            u.hasOwnProperty(Q) && (c = u[Q], c !== void 0 && Y(
              l,
              n,
              Q,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (p in u)
      u.hasOwnProperty(p) && (c = u[p], c != null && xe(l, n, p, c, u, null));
  }
  function Og(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, s = null, y = null, p = null, S = null, _ = null, Q = null;
        for (B in u) {
          var $ = u[B];
          if (u.hasOwnProperty(B) && $ != null)
            switch (B) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = $;
              default:
                c.hasOwnProperty(B) || xe(l, n, B, null, c, $);
            }
        }
        for (var x in c) {
          var B = c[x];
          if ($ = u[x], c.hasOwnProperty(x) && (B != null || $ != null))
            switch (x) {
              case "type":
                s = B;
                break;
              case "name":
                r = B;
                break;
              case "checked":
                _ = B;
                break;
              case "defaultChecked":
                Q = B;
                break;
              case "value":
                y = B;
                break;
              case "defaultValue":
                p = B;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(C(137, n));
                break;
              default:
                B !== $ && xe(
                  l,
                  n,
                  x,
                  B,
                  c,
                  $
                );
            }
        }
        us(
          l,
          y,
          p,
          S,
          _,
          Q,
          s,
          r
        );
        return;
      case "select":
        B = y = p = x = null;
        for (s in u)
          if (S = u[s], u.hasOwnProperty(s) && S != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                B = S;
              default:
                c.hasOwnProperty(s) || xe(
                  l,
                  n,
                  s,
                  null,
                  c,
                  S
                );
            }
        for (r in c)
          if (s = c[r], S = u[r], c.hasOwnProperty(r) && (s != null || S != null))
            switch (r) {
              case "value":
                x = s;
                break;
              case "defaultValue":
                p = s;
                break;
              case "multiple":
                y = s;
              default:
                s !== S && xe(
                  l,
                  n,
                  r,
                  s,
                  c,
                  S
                );
            }
        n = p, u = y, c = B, x != null ? Zi(l, !!u, x, !1) : !!c != !!u && (n != null ? Zi(l, !!u, n, !0) : Zi(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        B = x = null;
        for (p in u)
          if (r = u[p], u.hasOwnProperty(p) && r != null && !c.hasOwnProperty(p))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                xe(l, n, p, null, c, r);
            }
        for (y in c)
          if (r = c[y], s = u[y], c.hasOwnProperty(y) && (r != null || s != null))
            switch (y) {
              case "value":
                x = r;
                break;
              case "defaultValue":
                B = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(C(91));
                break;
              default:
                r !== s && xe(l, n, y, r, c, s);
            }
        Mh(l, x, B);
        return;
      case "option":
        for (var ge in u)
          if (x = u[ge], u.hasOwnProperty(ge) && x != null && !c.hasOwnProperty(ge))
            switch (ge) {
              case "selected":
                l.selected = !1;
                break;
              default:
                xe(
                  l,
                  n,
                  ge,
                  null,
                  c,
                  x
                );
            }
        for (S in c)
          if (x = c[S], B = u[S], c.hasOwnProperty(S) && x !== B && (x != null || B != null))
            switch (S) {
              case "selected":
                l.selected = x && typeof x != "function" && typeof x != "symbol";
                break;
              default:
                xe(
                  l,
                  n,
                  S,
                  x,
                  c,
                  B
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var be in u)
          x = u[be], u.hasOwnProperty(be) && x != null && !c.hasOwnProperty(be) && xe(l, n, be, null, c, x);
        for (_ in c)
          if (x = c[_], B = u[_], c.hasOwnProperty(_) && x !== B && (x != null || B != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(C(137, n));
                break;
              default:
                xe(
                  l,
                  n,
                  _,
                  x,
                  c,
                  B
                );
            }
        return;
      default:
        if (Ki(n)) {
          for (var dt in u)
            x = u[dt], u.hasOwnProperty(dt) && x !== void 0 && !c.hasOwnProperty(dt) && Y(
              l,
              n,
              dt,
              void 0,
              c,
              x
            );
          for (Q in c)
            x = c[Q], B = u[Q], !c.hasOwnProperty(Q) || x === B || x === void 0 && B === void 0 || Y(
              l,
              n,
              Q,
              x,
              c,
              B
            );
          return;
        }
    }
    for (var z in u)
      x = u[z], u.hasOwnProperty(z) && x != null && !c.hasOwnProperty(z) && xe(l, n, z, null, c, x);
    for ($ in c)
      x = c[$], B = u[$], !c.hasOwnProperty($) || x === B || x == null && B == null || xe(l, n, $, x, c, B);
  }
  var Er = null, Rr = null;
  function Fa(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function qu(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Lo(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function tu(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Vo = null;
  function ju() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Vo ? !1 : (Vo = l, !0) : (Vo = null, !1);
  }
  var xd = typeof setTimeout == "function" ? setTimeout : void 0, Dg = typeof clearTimeout == "function" ? clearTimeout : void 0, yv = typeof Promise == "function" ? Promise : void 0, zg = typeof queueMicrotask == "function" ? queueMicrotask : typeof yv < "u" ? function(l) {
    return yv.resolve(null).then(l).catch(lu);
  } : xd;
  function lu(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Ui(l) {
    return l === "head";
  }
  function Nd(l, n) {
    var u = n, c = 0, r = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var y = l.ownerDocument;
            if (u & 1 && ma(y.documentElement), u & 2 && ma(y.body), u & 4)
              for (u = y.head, ma(u), y = u.firstChild; y; ) {
                var p = y.nextSibling, S = y.nodeName;
                y[se] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && y.rel.toLowerCase() === "stylesheet" || u.removeChild(y), y = p;
              }
          }
          if (r === 0) {
            l.removeChild(s), nu(n);
            return;
          }
          r--;
        } else
          u === "$" || u === "$?" || u === "$!" ? r++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = s;
    } while (u);
    nu(n);
  }
  function Ar(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ar(u), mf(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Xo(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var r = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[se])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (s = l.getAttribute("rel"), s === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (s !== r.rel || l.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || l.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (s = l.getAttribute("src"), (s !== (r.src == null ? null : r.src) || l.getAttribute("type") !== (r.type == null ? null : r.type) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && s && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var s = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && l.getAttribute("name") === s)
          return l;
      } else return l;
      if (l = bn(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Mg(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = bn(l.nextSibling), l === null)) return null;
    return l;
  }
  function Or(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Ug(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function bn(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var Ci = null;
  function Hl(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ce(l, n, u) {
    switch (n = Fa(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(C(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(C(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(C(454));
        return l;
      default:
        throw Error(C(451));
    }
  }
  function ma(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    mf(l);
  }
  var Wt = /* @__PURE__ */ new Map(), Ll = /* @__PURE__ */ new Set();
  function wd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Gu = K.d;
  K.d = {
    f: Bd,
    r: Yd,
    D: Lu,
    C: qd,
    L: _i,
    m: Vl,
    X: Hi,
    S: pa,
    M: mm
  };
  function Bd() {
    var l = Gu.f(), n = Oc();
    return l || n;
  }
  function Yd(l) {
    var n = Li(l);
    n !== null && n.tag === 5 && n.type === "form" ? To(n) : Gu.r(l);
  }
  var xl = typeof document > "u" ? null : document;
  function Sn(l, n, u) {
    var c = xl;
    if (c && typeof n == "string" && n) {
      var r = Ya(n);
      r = 'link[rel="' + l + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), Ll.has(r) || (Ll.add(r), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(r) === null && (n = c.createElement("link"), De(n, "link", l), il(n), c.head.appendChild(n)));
    }
  }
  function Lu(l) {
    Gu.D(l), Sn("dns-prefetch", l, null);
  }
  function qd(l, n) {
    Gu.C(l, n), Sn("preconnect", l, n);
  }
  function _i(l, n, u) {
    Gu.L(l, n, u);
    var c = xl;
    if (c && l && n) {
      var r = 'link[rel="preload"][as="' + Ya(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (r += '[imagesrcset="' + Ya(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (r += '[imagesizes="' + Ya(
        u.imageSizes
      ) + '"]')) : r += '[href="' + Ya(l) + '"]';
      var s = r;
      switch (n) {
        case "style":
          s = Qo(l);
          break;
        case "script":
          s = Ia(l);
      }
      Wt.has(s) || (l = oe(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Wt.set(s, l), c.querySelector(r) !== null || n === "style" && c.querySelector(Zo(s)) || n === "script" && c.querySelector(Cc(s)) || (n = c.createElement("link"), De(n, "link", l), il(n), c.head.appendChild(n)));
    }
  }
  function Vl(l, n) {
    Gu.m(l, n);
    var u = xl;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", r = 'link[rel="modulepreload"][as="' + Ya(c) + '"][href="' + Ya(l) + '"]', s = r;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Ia(l);
      }
      if (!Wt.has(s) && (l = oe({ rel: "modulepreload", href: l }, n), Wt.set(s, l), u.querySelector(r) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Cc(s)))
              return;
        }
        c = u.createElement("link"), De(c, "link", l), il(c), u.head.appendChild(c);
      }
    }
  }
  function pa(l, n, u) {
    Gu.S(l, n, u);
    var c = xl;
    if (c && l) {
      var r = vu(c).hoistableStyles, s = Qo(l);
      n = n || "default";
      var y = r.get(s);
      if (!y) {
        var p = { loading: 0, preload: null };
        if (y = c.querySelector(
          Zo(s)
        ))
          p.loading = 5;
        else {
          l = oe(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Wt.get(s)) && Gd(l, u);
          var S = y = c.createElement("link");
          il(S), De(S, "link", l), S._p = new Promise(function(_, Q) {
            S.onload = _, S.onerror = Q;
          }), S.addEventListener("load", function() {
            p.loading |= 1;
          }), S.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, jd(y, n, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: p
        }, r.set(s, y);
      }
    }
  }
  function Hi(l, n) {
    Gu.X(l, n);
    var u = xl;
    if (u && l) {
      var c = vu(u).hoistableScripts, r = Ia(l), s = c.get(r);
      s || (s = u.querySelector(Cc(r)), s || (l = oe({ src: l, async: !0 }, n), (n = Wt.get(r)) && Ld(l, n), s = u.createElement("script"), il(s), De(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function mm(l, n) {
    Gu.M(l, n);
    var u = xl;
    if (u && l) {
      var c = vu(u).hoistableScripts, r = Ia(l), s = c.get(r);
      s || (s = u.querySelector(Cc(r)), s || (l = oe({ src: l, async: !0, type: "module" }, n), (n = Wt.get(r)) && Ld(l, n), s = u.createElement("script"), il(s), De(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function mv(l, n, u, c) {
    var r = (r = ie.current) ? wd(r) : null;
    if (!r) throw Error(C(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Qo(u.href), u = vu(
          r
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Qo(u.href);
          var s = vu(
            r
          ).hoistableStyles, y = s.get(l);
          if (y || (r = r.ownerDocument || r, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(l, y), (s = r.querySelector(
            Zo(l)
          )) && !s._p && (y.instance = s, y.state.loading = 5), Wt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Wt.set(l, u), s || pv(
            r,
            l,
            u,
            y.state
          ))), n && c === null)
            throw Error(C(528, ""));
          return y;
        }
        if (n && c !== null)
          throw Error(C(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ia(u), u = vu(
          r
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(C(444, l));
    }
  }
  function Qo(l) {
    return 'href="' + Ya(l) + '"';
  }
  function Zo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Ko(l) {
    return oe({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function pv(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), De(n, "link", u), il(n), l.head.appendChild(n));
  }
  function Ia(l) {
    return '[src="' + Ya(l) + '"]';
  }
  function Cc(l) {
    return "script[async]" + l;
  }
  function vv(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Ya(u.href) + '"]'
          );
          if (c)
            return n.instance = c, il(c), c;
          var r = oe({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), il(c), De(c, "style", r), jd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          r = Qo(u.href);
          var s = l.querySelector(
            Zo(r)
          );
          if (s)
            return n.state.loading |= 4, n.instance = s, il(s), s;
          c = Ko(u), (r = Wt.get(r)) && Gd(c, r), s = (l.ownerDocument || l).createElement("link"), il(s);
          var y = s;
          return y._p = new Promise(function(p, S) {
            y.onload = p, y.onerror = S;
          }), De(s, "link", c), n.state.loading |= 4, jd(s, u.precedence, l), n.instance = s;
        case "script":
          return s = Ia(u.src), (r = l.querySelector(
            Cc(s)
          )) ? (n.instance = r, il(r), r) : (c = u, (r = Wt.get(s)) && (c = oe({}, u), Ld(c, r)), l = l.ownerDocument || l, r = l.createElement("script"), il(r), De(r, "link", c), l.head.appendChild(r), n.instance = r);
        case "void":
          return null;
        default:
          throw Error(C(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, jd(c, u.precedence, l));
    return n.instance;
  }
  function jd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = c.length ? c[c.length - 1] : null, s = r, y = 0; y < c.length; y++) {
      var p = c[y];
      if (p.dataset.precedence === n) s = p;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(l, s.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Gd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Ld(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var xi = null;
  function pm(l, n, u) {
    if (xi === null) {
      var c = /* @__PURE__ */ new Map(), r = xi = /* @__PURE__ */ new Map();
      r.set(u, c);
    } else
      r = xi, c = r.get(u), c || (c = /* @__PURE__ */ new Map(), r.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), r = 0; r < u.length; r++) {
      var s = u[r];
      if (!(s[se] || s[yl] || l === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = s.getAttribute(n) || "";
        y = l + y;
        var p = c.get(y);
        p ? p.push(s) : c.set(y, [s]);
      }
    }
    return c;
  }
  function vm(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function gv(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function gm(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Jo = null;
  function bv() {
  }
  function Sv(l, n, u) {
    if (Jo === null) throw Error(C(475));
    var c = Jo;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var r = Qo(u.href), s = l.querySelector(
          Zo(r)
        );
        if (s) {
          l = s._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Dr.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = s, il(s);
          return;
        }
        s = l.ownerDocument || l, u = Ko(u), (r = Wt.get(r)) && Gd(u, r), s = s.createElement("link"), il(s);
        var y = s;
        y._p = new Promise(function(p, S) {
          y.onload = p, y.onerror = S;
        }), De(s, "link", u), n.instance = s;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = Dr.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function bm() {
    if (Jo === null) throw Error(C(475));
    var l = Jo;
    return l.stylesheets && l.count === 0 && zr(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && zr(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Dr() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) zr(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var ko = null;
  function zr(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, ko = /* @__PURE__ */ new Map(), n.forEach(Ca, l), ko = null, Dr.call(l));
  }
  function Ca(l, n) {
    if (!(n.state.loading & 4)) {
      var u = ko.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), ko.set(l, u);
        for (var r = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var y = r[s];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      r = n.instance, y = r.getAttribute("data-precedence"), s = u.get(y) || c, s === c && u.set(null, r), u.set(y, r), this.count++, c = Dr.bind(this), r.addEventListener("load", c), r.addEventListener("error", c), s ? s.parentNode.insertBefore(r, s.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(r, l.firstChild)), n.state.loading |= 4;
    }
  }
  var va = {
    $$typeof: lt,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0
  };
  function Cg(l, n, u, c, r, s, y, p) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ye(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ye(0), this.hiddenUpdates = ye(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Sm(l, n, u, c, r, s, y, p, S, _, Q, $) {
    return l = new Cg(
      l,
      n,
      u,
      y,
      p,
      S,
      _,
      $
    ), n = 1, s === !0 && (n |= 24), s = ia(3, null, null, n), l.current = s, s.stateNode = l, n = po(), n.refCount++, l.pooledCache = n, n.refCount++, s.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Hs(s), l;
  }
  function Tm(l) {
    return l ? (l = co, l) : co;
  }
  function Em(l, n, u, c, r, s) {
    r = Tm(r), c.context === null ? c.context = r : c.pendingContext = r, c = oa(n), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = Gn(l, c, n), u !== null && (Ma(u, l, n), fc(u, l, n));
  }
  function Rm(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Vd(l, n) {
    Rm(l, n), (l = l.alternate) && Rm(l, n);
  }
  function Am(l) {
    if (l.tag === 13) {
      var n = Nn(l, 67108864);
      n !== null && Ma(n, l, 67108864), Vd(l, 67108864);
    }
  }
  var Mr = !0;
  function Tv(l, n, u, c) {
    var r = A.T;
    A.T = null;
    var s = K.p;
    try {
      K.p = 2, Om(l, n, u, c);
    } finally {
      K.p = s, A.T = r;
    }
  }
  function Ev(l, n, u, c) {
    var r = A.T;
    A.T = null;
    var s = K.p;
    try {
      K.p = 8, Om(l, n, u, c);
    } finally {
      K.p = s, A.T = r;
    }
  }
  function Om(l, n, u, c) {
    if (Mr) {
      var r = Xd(c);
      if (r === null)
        Wa(
          l,
          n,
          c,
          Qd,
          u
        ), _c(l, c);
      else if (Av(
        r,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (_c(l, c), n & 4 && -1 < Rv.indexOf(l)) {
        for (; r !== null; ) {
          var s = Li(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var y = Al(s.pendingLanes);
                  if (y !== 0) {
                    var p = s;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; y; ) {
                      var S = 1 << 31 - Rl(y);
                      p.entanglements[1] |= S, y &= ~S;
                    }
                    ya(s), (pt & 6) === 0 && (Sd = hl() + 500, mr(0));
                  }
                }
                break;
              case 13:
                p = Nn(s, 2), p !== null && Ma(p, s, 2), Oc(), Vd(s, 2);
            }
          if (s = Xd(c), s === null && Wa(
            l,
            n,
            c,
            Qd,
            u
          ), s === r) break;
          r = s;
        }
        r !== null && c.stopPropagation();
      } else
        Wa(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Xd(l) {
    return l = os(l), Dm(l);
  }
  var Qd = null;
  function Dm(l) {
    if (Qd = null, l = Ol(l), l !== null) {
      var n = Oe(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = it(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Qd = l, null;
  }
  function zm(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch ($u()) {
          case Ir:
            return 2;
          case Qe:
            return 8;
          case Dn:
          case Jc:
            return 32;
          case pu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var $o = !1, au = null, Vu = null, Xu = null, Ur = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), Ni = [], Rv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function _c(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        au = null;
        break;
      case "dragenter":
      case "dragleave":
        Vu = null;
        break;
      case "mouseover":
      case "mouseout":
        Xu = null;
        break;
      case "pointerover":
      case "pointerout":
        Ur.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cr.delete(n.pointerId);
    }
  }
  function Hc(l, n, u, c, r, s) {
    return l === null || l.nativeEvent !== s ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: s,
      targetContainers: [r]
    }, n !== null && (n = Li(n), n !== null && Am(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, r !== null && n.indexOf(r) === -1 && n.push(r), l);
  }
  function Av(l, n, u, c, r) {
    switch (n) {
      case "focusin":
        return au = Hc(
          au,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "dragenter":
        return Vu = Hc(
          Vu,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "mouseover":
        return Xu = Hc(
          Xu,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return Ur.set(
          s,
          Hc(
            Ur.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, Cr.set(
          s,
          Hc(
            Cr.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
    }
    return !1;
  }
  function Mm(l) {
    var n = Ol(l.target);
    if (n !== null) {
      var u = Oe(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = it(u), n !== null) {
            l.blockedOn = n, Rh(l.priority, function() {
              if (u.tag === 13) {
                var c = za();
                c = el(c);
                var r = Nn(u, c);
                r !== null && Ma(r, u, c), Vd(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function _r(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Xd(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Ji = c, u.target.dispatchEvent(c), Ji = null;
      } else
        return n = Li(u), n !== null && Am(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Hr(l, n, u) {
    _r(l) && u.delete(n);
  }
  function Wo() {
    $o = !1, au !== null && _r(au) && (au = null), Vu !== null && _r(Vu) && (Vu = null), Xu !== null && _r(Xu) && (Xu = null), Ur.forEach(Hr), Cr.forEach(Hr);
  }
  function Zd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, $o || ($o = !0, q.unstable_scheduleCallback(
      q.unstable_NormalPriority,
      Wo
    )));
  }
  var xc = null;
  function Um(l) {
    xc !== l && (xc = l, q.unstable_scheduleCallback(
      q.unstable_NormalPriority,
      function() {
        xc === l && (xc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], r = l[n + 2];
          if (typeof c != "function") {
            if (Dm(c || u) === null)
              continue;
            break;
          }
          var s = Li(u);
          s !== null && (l.splice(n, 3), n -= 3, Is(
            s,
            {
              pending: !0,
              data: r,
              method: u.method,
              action: c
            },
            c,
            r
          ));
        }
      }
    ));
  }
  function nu(l) {
    function n(S) {
      return Zd(S, l);
    }
    au !== null && Zd(au, l), Vu !== null && Zd(Vu, l), Xu !== null && Zd(Xu, l), Ur.forEach(n), Cr.forEach(n);
    for (var u = 0; u < Ni.length; u++) {
      var c = Ni[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ni.length && (u = Ni[0], u.blockedOn === null); )
      Mm(u), u.blockedOn === null && Ni.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], s = u[c + 1], y = r[Kl] || null;
        if (typeof s == "function")
          y || Um(u);
        else if (y) {
          var p = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, y = s[Kl] || null)
              p = y.formAction;
            else if (Dm(r) !== null) continue;
          } else p = y.action;
          typeof p == "function" ? u[c + 1] = p : (u.splice(c, 3), c -= 3), Um(u);
        }
      }
  }
  function Cm(l) {
    this._internalRoot = l;
  }
  Kd.prototype.render = Cm.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(C(409));
    var u = n.current, c = za();
    Em(u, c, l, n, null, null);
  }, Kd.prototype.unmount = Cm.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Em(l.current, 2, null, l, null, null), Oc(), n[Wc] = null;
    }
  };
  function Kd(l) {
    this._internalRoot = l;
  }
  Kd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = es();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ni.length && n !== 0 && n < Ni[u].priority; u++) ;
      Ni.splice(u, 0, l), u === 0 && Mm(l);
    }
  };
  var _m = te.version;
  if (_m !== "19.1.0")
    throw Error(
      C(
        527,
        _m,
        "19.1.0"
      )
    );
  K.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(C(188)) : (l = Object.keys(l).join(","), Error(C(268, l)));
    return l = j(n), l = l !== null ? k(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Il = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xr.isDisabled && xr.supportsFiber)
      try {
        Wu = xr.inject(
          Il
        ), El = xr;
      } catch {
      }
  }
  return yp.createRoot = function(l, n) {
    if (!Se(l)) throw Error(C(299));
    var u = !1, c = "", r = Ao, s = My, y = nr, p = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (p = n.unstable_transitionCallbacks)), n = Sm(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      r,
      s,
      y,
      p,
      null
    ), l[Wc] = n.current, dm(l), new Cm(n);
  }, yp.hydrateRoot = function(l, n, u) {
    if (!Se(l)) throw Error(C(299));
    var c = !1, r = "", s = Ao, y = My, p = nr, S = null, _ = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (p = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (S = u.unstable_transitionCallbacks), u.formState !== void 0 && (_ = u.formState)), n = Sm(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      r,
      s,
      y,
      p,
      S,
      _
    ), n.context = Tm(null), u = n.current, c = za(), c = el(c), r = oa(c), r.callback = null, Gn(u, r, c), u = c, n.current.lanes = u, He(n, u), ya(n), l[Wc] = n.current, dm(l), new Kd(n);
  }, yp.version = "19.1.0", yp;
}
var mp = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V1;
function fT() {
  return V1 || (V1 = 1, process.env.NODE_ENV !== "production" && function() {
    function q(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function te(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = xe(e) ? e.slice() : Ze({}, e);
      return f[o] = te(e[o], t, a + 1, i), f;
    }
    function Ce(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return C(e, t, a, 0);
      }
    }
    function C(e, t, a, i) {
      var o = t[i], f = xe(e) ? e.slice() : Ze({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], xe(f) ? f.splice(o, 1) : delete f[o]) : f[o] = C(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Se(e, t, a) {
      var i = t[a], o = xe(e) ? e.slice() : Ze({}, e);
      return a + 1 === t.length ? (xe(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Se(e[i], t, a + 1), o);
    }
    function Oe() {
      return !1;
    }
    function it() {
      return null;
    }
    function yt() {
    }
    function j() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function k() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function oe() {
    }
    function W(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function M(e, t, a, i) {
      return new Mf(e, t, a, i);
    }
    function ne(e, t) {
      e.context === Fo && (Et(e.current, 2, t, e, null, null), bc());
    }
    function _e(e, t) {
      if (iu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, Oo(), zf(
          e.current,
          t,
          a
        ), bc();
      }
    }
    function At(e) {
      iu = e;
    }
    function Xe(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Fe(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function Ft(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function lt(e) {
      if (Fe(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Nt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Fe(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return lt(o), e;
            if (f === i) return lt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Me(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Me(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function vt(e) {
      return e === null || typeof e != "object" ? null : (e = ym && e[ym] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Le(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Hd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case qe:
          return "Fragment";
        case jo:
          return "Profiler";
        case qo:
          return "StrictMode";
        case Go:
          return "Suspense";
        case Mi:
          return "SuspenseList";
        case hm:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Uc:
            return "Portal";
          case Wa:
            return (e.displayName || "Context") + ".Provider";
          case _d:
            return (e._context.displayName || "Context") + ".Consumer";
          case Yu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Tr:
            return t = e.displayName || null, t !== null ? t : Le(e.type) || "Memo";
          case Ua:
            t = e._payload, e = e._init;
            try {
              return Le(e(t));
            } catch {
            }
        }
      return null;
    }
    function gt(e) {
      return typeof e.tag == "number" ? fe(e) : typeof e.name == "string" ? e.name : null;
    }
    function fe(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Le(t);
        case 8:
          return t === qo ? "StrictMode" : "Mode";
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
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return fe(e.return);
      }
      return null;
    }
    function St(e) {
      return { current: e };
    }
    function pe(e, t) {
      0 > Fa ? console.error("Unexpected pop.") : (t !== Rr[Fa] && console.error("Unexpected Fiber popped."), e.current = Er[Fa], Er[Fa] = null, Rr[Fa] = null, Fa--);
    }
    function Te(e, t, a) {
      Fa++, Er[Fa] = e.current, Rr[Fa] = a, e.current = t;
    }
    function Tt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Ut(e, t) {
      Te(tu, t, e), Te(Lo, e, e), Te(qu, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? bt(t) : Xc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = bt(t), t = da(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Sh;
                break;
              case "math":
                t = eg;
                break;
              default:
                t = Xc;
            }
      }
      a = a.toLowerCase(), a = Mh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, pe(qu, e), Te(qu, a, e);
    }
    function ct(e) {
      pe(qu, e), pe(Lo, e), pe(tu, e);
    }
    function A() {
      return Tt(qu.current);
    }
    function K(e) {
      e.memoizedState !== null && Te(Vo, e, e);
      var t = Tt(qu.current), a = e.type, i = da(t.context, a);
      a = Mh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Te(Lo, e, e), Te(qu, i, e));
    }
    function F(e) {
      Lo.current === e && (pe(qu, e), pe(Lo, e)), Vo.current === e && (pe(Vo, e), fp._currentValue = Fr);
    }
    function me(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function g(e) {
      try {
        return N(e), !1;
      } catch {
        return !0;
      }
    }
    function N(e) {
      return "" + e;
    }
    function Z(e, t) {
      if (g(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          me(e)
        ), N(e);
    }
    function I(e, t) {
      if (g(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          me(e)
        ), N(e);
    }
    function ue(e) {
      if (g(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          me(e)
        ), N(e);
    }
    function Ee(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Ci = t.inject(e), Hl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ie(e) {
      if (typeof Ug == "function" && bn(e), Hl && typeof Hl.setStrictMode == "function")
        try {
          Hl.setStrictMode(Ci, e);
        } catch (t) {
          ma || (ma = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function nl(e) {
      ce = e;
    }
    function Ue() {
      ce !== null && typeof ce.markCommitStopped == "function" && ce.markCommitStopped();
    }
    function wt(e) {
      ce !== null && typeof ce.markComponentRenderStarted == "function" && ce.markComponentRenderStarted(e);
    }
    function la() {
      ce !== null && typeof ce.markComponentRenderStopped == "function" && ce.markComponentRenderStopped();
    }
    function An(e) {
      ce !== null && typeof ce.markRenderStarted == "function" && ce.markRenderStarted(e);
    }
    function Gi() {
      ce !== null && typeof ce.markRenderStopped == "function" && ce.markRenderStopped();
    }
    function On(e, t) {
      ce !== null && typeof ce.markStateUpdateScheduled == "function" && ce.markStateUpdateScheduled(e, t);
    }
    function Kc(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (wd(e) / Gu | 0) | 0;
    }
    function df(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Pt(e) {
      var t = e & 42;
      if (t !== 0) return t;
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
          return 64;
        case 128:
          return 128;
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
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function hl(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Pt(i) : (d &= h, d !== 0 ? o = Pt(d) : a || (a = h & ~e, a !== 0 && (o = Pt(a))))) : (h = i & ~f, h !== 0 ? o = Pt(h) : d !== 0 ? o = Pt(d) : a || (a = i & ~e, a !== 0 && (o = Pt(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function $u(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Ir(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
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
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Qe() {
      var e = Bd;
      return Bd <<= 1, (Bd & 4194048) === 0 && (Bd = 256), e;
    }
    function Dn() {
      var e = Yd;
      return Yd <<= 1, (Yd & 62914560) === 0 && (Yd = 4194304), e;
    }
    function Jc(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function pu(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Pr(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, v = e.expirationTimes, b = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var w = 31 - Ll(a), L = 1 << w;
        h[w] = 0, v[w] = -1;
        var H = b[w];
        if (H !== null)
          for (b[w] = null, w = 0; w < H.length; w++) {
            var V = H[w];
            V !== null && (V.lane &= -536870913);
          }
        a &= ~L;
      }
      i !== 0 && hf(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function hf(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Ll(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function Wu(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Ll(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function El(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
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
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Ba(e, t, a) {
      if (Wt)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Ll(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Rl(e, t) {
      if (Wt)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Ll(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function kc(e) {
      return e &= -e, xl < e ? Sn < e ? (e & 134217727) !== 0 ? Lu : qd : Sn : xl;
    }
    function yf() {
      var e = De.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Lu : Ud(e.type));
    }
    function $c(e, t) {
      var a = De.p;
      try {
        return De.p = e, t();
      } finally {
        De.p = a;
      }
    }
    function ln(e) {
      delete e[Vl], delete e[pa], delete e[mm], delete e[mv], delete e[Qo];
    }
    function aa(e) {
      var t = e[Vl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Hi] || a[Vl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = No(e); e !== null; ) {
              if (a = e[Vl])
                return a;
              e = No(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Al(e) {
      if (e = e[Vl] || e[Hi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function an(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function m(e) {
      var t = e[Zo];
      return t || (t = e[Zo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function D(e) {
      e[Ko] = !0;
    }
    function ee(e, t) {
      ae(e, t), ae(e + "Capture", t);
    }
    function ae(e, t) {
      Ia[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ia[e] = t;
      var a = e.toLowerCase();
      for (Cc[a] = e, e === "onDoubleClick" && (Cc.ondblclick = e), e = 0; e < t.length; e++)
        pv.add(t[e]);
    }
    function ye(e, t) {
      vv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function He(e) {
      return ju.call(Ld, e) ? !0 : ju.call(Gd, e) ? !1 : jd.test(e) ? Ld[e] = !0 : (Gd[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Be(e, t, a) {
      if (He(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (Z(a, t), e === "" + a ? a : e);
      }
    }
    function at(e, t, a) {
      if (He(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          Z(a, t), e.setAttribute(t, "" + a);
        }
    }
    function we(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        Z(a, t), e.setAttribute(t, "" + a);
      }
    }
    function el(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        Z(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function nn() {
    }
    function es() {
      if (xi === 0) {
        pm = console.log, vm = console.info, gv = console.warn, gm = console.error, Jo = console.group, bv = console.groupCollapsed, Sv = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: nn,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      xi++;
    }
    function Rh() {
      if (xi--, xi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ze({}, e, { value: pm }),
          info: Ze({}, e, { value: vm }),
          warn: Ze({}, e, { value: gv }),
          error: Ze({}, e, { value: gm }),
          group: Ze({}, e, { value: Jo }),
          groupCollapsed: Ze({}, e, { value: bv }),
          groupEnd: Ze({}, e, { value: Sv })
        });
      }
      0 > xi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function ul(e) {
      if (bm === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          bm = t && t[1] || "", Dr = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + bm + e + Dr;
    }
    function yl(e, t) {
      if (!e || ko) return "";
      var a = zr.get(e);
      if (a !== void 0) return a;
      ko = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = Y.H, Y.H = null, es();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var H = function() {
                  throw Error();
                };
                if (Object.defineProperty(H.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(H, []);
                  } catch (de) {
                    var V = de;
                  }
                  Reflect.construct(e, [], H);
                } else {
                  try {
                    H.call();
                  } catch (de) {
                    V = de;
                  }
                  e.call(H.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (de) {
                  V = de;
                }
                (H = e()) && typeof H.catch == "function" && H.catch(function() {
                });
              }
            } catch (de) {
              if (de && V && typeof de.stack == "string")
                return [de.stack, V.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], v = d[1];
        if (h && v) {
          var b = h.split(`
`), w = v.split(`
`);
          for (d = f = 0; f < b.length && !b[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < w.length && !w[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === b.length || d === w.length)
            for (f = b.length - 1, d = w.length - 1; 1 <= f && 0 <= d && b[f] !== w[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (b[f] !== w[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || b[f] !== w[d]) {
                    var L = `
` + b[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && zr.set(e, L), L;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        ko = !1, Y.H = i, Rh(), Error.prepareStackTrace = a;
      }
      return b = (b = e ? e.displayName || e.name : "") ? ul(b) : "", typeof e == "function" && zr.set(e, b), b;
    }
    function Kl(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function Wc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ul(e.type);
        case 16:
          return ul("Lazy");
        case 13:
          return ul("Suspense");
        case 19:
          return ul("SuspenseList");
        case 0:
        case 15:
          return yl(e.type, !1);
        case 11:
          return yl(e.type.render, !1);
        case 1:
          return yl(e.type, !0);
        case 31:
          return ul("Activity");
        default:
          return "";
      }
    }
    function ts(e) {
      try {
        var t = "";
        do {
          t += Wc(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = ul(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (v) {
        return `
Error generating stack: ` + v.message + `
` + v.stack;
      }
    }
    function vp(e) {
      return (e = e ? e.displayName || e.name : "") ? ul(e) : "";
    }
    function ls() {
      if (Ca === null) return null;
      var e = Ca._debugOwner;
      return e != null ? gt(e) : null;
    }
    function gp() {
      if (Ca === null) return "";
      var e = Ca;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += ul(e.type);
            break;
          case 13:
            t += ul("Suspense");
            break;
          case 19:
            t += ul("SuspenseList");
            break;
          case 31:
            t += ul("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += vp(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += vp(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = Kl(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Kl(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function se(e, t, a, i, o, f, d) {
      var h = Ca;
      mf(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        mf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function mf(e) {
      Y.getCurrentStack = e === null ? null : gp, va = !1, Ca = e;
    }
    function Ol(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return ue(e), e;
        default:
          return "";
      }
    }
    function Li(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function pf(e) {
      var t = Li(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      ue(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            ue(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            ue(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function vu(e) {
      e._valueTracker || (e._valueTracker = pf(e));
    }
    function il(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Li(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function vf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Ta(e) {
      return e.replace(
        Cg,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Fu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Tm || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ls() || "A component",
        t.type
      ), Tm = !0), t.value === void 0 || t.defaultValue === void 0 || Sm || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ls() || "A component",
        t.type
      ), Sm = !0);
    }
    function Iu(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (Z(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ol(t)) : e.value !== "" + Ol(t) && (e.value = "" + Ol(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? as(e, d, Ol(t)) : a != null ? as(e, d, Ol(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (Z(h, "name"), e.name = "" + Ol(h)) : e.removeAttribute("name");
    }
    function bp(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (Z(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + Ol(a) : "", t = t != null ? "" + Ol(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (Z(d, "name"), e.name = d);
    }
    function as(e, t, a) {
      t === "number" && vf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Ah(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? br.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || Rm || (Rm = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Vd || (Vd = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Em || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Em = !0);
    }
    function Sp() {
      var e = ls();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function gu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Ol(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function gf(e, t) {
      for (e = 0; e < Mr.length; e++) {
        var a = Mr[e];
        if (t[a] != null) {
          var i = xe(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Sp()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Sp()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Am || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Am = !0);
    }
    function zn(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || Tv || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ls() || "A component"
      ), Tv = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function ns(e, t, a) {
      if (t != null && (t = "" + Ol(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Ol(a) : "";
    }
    function Oh(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (xe(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Ol(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Vi(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Vi(e.children[0], t) : e;
    }
    function Jl(e) {
      return "  " + "  ".repeat(e);
    }
    function Pu(e) {
      return "+ " + "  ".repeat(e);
    }
    function Xi(e) {
      return "- " + "  ".repeat(e);
    }
    function Dh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Yl(e, t) {
      return Ev.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function bf(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Pu(a) + Yl(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Pu(a) + Yl(e, i) + `
` + Xi(a) + Yl(t, i) + `
`;
      }
      return Jl(a) + Yl(e, i) + `
`;
    }
    function zh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function ei(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (xe(e)) return "[...]";
          if (e.$$typeof === zi)
            return (t = Le(e.type)) ? "<" + t + ">" : "<...>";
          var a = zh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = ei(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Qi(e, t) {
      return typeof e != "string" || Ev.test(e) ? "{" + ei(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Fc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Qi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function dg(e, t, a) {
      var i = "", o = Ze({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = ei(e[f], d);
          t.hasOwnProperty(f) ? (d = ei(t[f], d), i += Pu(a) + f + ": " + h + `
`, i += Xi(a) + f + ": " + d + `
`) : i += Pu(a) + f + ": " + h + `
`;
        }
      for (var v in o)
        o.hasOwnProperty(v) && (e = ei(
          o[v],
          120 - 2 * a - v.length - 2
        ), i += Xi(a) + v + ": " + e + `
`);
      return i;
    }
    function Ya(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (b in a)
        a.hasOwnProperty(b) && f.set(
          b.toLowerCase(),
          b
        );
      if (f.size === 1 && f.has("children"))
        o += Fc(
          e,
          t,
          Jl(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, v = f.get(d.toLowerCase());
            if (v !== void 0) {
              f.delete(d.toLowerCase());
              var b = t[d];
              v = a[v];
              var w = Qi(
                b,
                h
              );
              h = Qi(
                v,
                h
              ), typeof b == "object" && b !== null && typeof v == "object" && v !== null && zh(b) === "Object" && zh(v) === "Object" && (2 < Object.keys(b).length || 2 < Object.keys(v).length || -1 < w.indexOf("...") || -1 < h.indexOf("...")) ? o += Jl(i + 1) + d + `={{
` + dg(
                b,
                v,
                i + 2
              ) + Jl(i + 1) + `}}
` : (o += Pu(i + 1) + d + "=" + w + `
`, o += Xi(i + 1) + d + "=" + h + `
`);
            } else
              o += Jl(i + 1) + d + "=" + Qi(t[d], h) + `
`;
          }
        f.forEach(function(L) {
          if (L !== "children") {
            var H = 120 - 2 * (i + 1) - L.length - 1;
            o += Xi(i + 1) + L + "=" + Qi(a[L], H) + `
`;
          }
        }), o = o === "" ? Jl(i) + "<" + e + `>
` : Jl(i) + "<" + e + `
` + o + Jl(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += bf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + bf("" + t, null, i + 1) : o + bf("" + t, void 0, i + 1)), o;
    }
    function us(e, t) {
      var a = Dh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += us(e, t), e = e.sibling;
        return a;
      }
      return Jl(t) + "<" + a + `>
`;
    }
    function is(e, t) {
      var a = Vi(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Jl(t) + `...
` + is(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Jl(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = bf(o, e.serverProps, t), t++;
      else if (f = Dh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (b in o)
            if (o.hasOwnProperty(b) && b !== "children") {
              var v = Qi(o[b], 15);
              if (d -= b.length + v.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + b + "=" + v;
            }
          i = Jl(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Fc(
            f,
            o,
            Pu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Ya(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var b = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (b += is(d, t), f++) : b += us(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (b += Jl(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], b = typeof f == "string" ? b + (Xi(t) + Yl(f, 120 - 2 * t) + `
`) : b + Fc(
          f.type,
          f.props,
          Xi(t)
        );
      return a + i + b;
    }
    function Sf(e) {
      try {
        return `

` + is(e, 0);
      } catch {
        return "";
      }
    }
    function Zi(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Sf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Mh(e, t) {
      var a = Ze({}, e || zm), i = { tag: t };
      return Xd.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Qd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Om.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Uh(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return Dm.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Ic(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Tp(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function cs(e, t) {
      t = t || zm;
      var a = t.current;
      if (t = (a = Uh(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Ic(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, $o[t]) return !1;
      $o[t] = !0;
      var o = (t = Ca) ? Tp(t.return, i) : null, f = t !== null && o !== null ? Zi(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || se(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Tf(e, t, a) {
      if (a || Uh("#text", t, !1))
        return !0;
      if (a = "#text|" + t, $o[a]) return !1;
      $o[a] = !0;
      var i = (a = Ca) ? Tp(a, t) : null;
      return a = a !== null && i !== null ? Zi(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Ki(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function hg(e) {
      return e.replace(Ni, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Ep(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? _c.hasOwnProperty(t) && _c[t] || (_c[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        hg(t.replace(Cr, "ms-"))
      )) : Ur.test(t) ? _c.hasOwnProperty(t) && _c[t] || (_c[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !Rv.test(a) || Hc.hasOwnProperty(a) && Hc[a] || (Hc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(Rv, "")
      )), typeof a == "number" && (isNaN(a) ? Av || (Av = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || Mm || (Mm = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || _r.has(t) ? t === "float" ? e.cssFloat = a : (I(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Ef(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = au[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = au[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var v in t)
            for (o = au[v] || [v], f = 0; f < o.length; f++)
              h[o[f]] = v;
          v = {};
          for (var b in i)
            if (o = i[b], (f = h[b]) && o !== f && (d = o + "," + f, !v[d])) {
              v[d] = !0, d = console;
              var w = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                w == null || typeof w == "boolean" || w === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var L in a)
          !a.hasOwnProperty(L) || t != null && t.hasOwnProperty(L) || (L.indexOf("--") === 0 ? e.setProperty(L, "") : L === "float" ? e.cssFloat = "" : e[L] = "");
        for (var H in t)
          b = t[H], t.hasOwnProperty(H) && a[H] !== b && Ep(e, H, b);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Ep(e, i, t[i]);
    }
    function Ji(e) {
      if (e.indexOf("-") === -1) return !1;
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
    function os(e) {
      return Zd.get(e) || e;
    }
    function Pc(e, t) {
      if (ju.call(nu, t) && nu[t])
        return !0;
      if (Kd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Um.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), nu[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), nu[t] = !0;
      }
      if (Cm.test(t)) {
        if (e = t.toLowerCase(), e = Um.hasOwnProperty(e) ? e : null, e == null) return nu[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), nu[t] = !0);
      }
      return !0;
    }
    function eo(e, t) {
      var a = [], i;
      for (i in t)
        Pc(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Rp(e, t, a, i) {
      if (ju.call(Il, t) && Il[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Il[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Il[t] = !0;
        if (xr.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Il[t] = !0;
      } else if (xr.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Il[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Il[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Il[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Il[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Il[t] = !0;
      if (xc.hasOwnProperty(o)) {
        if (o = xc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Il[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Il[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Il[t] = !0);
          }
        case "function":
        case "symbol":
          return Il[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Il[t] = !0;
          }
      }
      return !0;
    }
    function Ch(e, t, a) {
      var i = [], o;
      for (o in t)
        Rp(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function to(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function ki(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function Mn(e) {
      var t = Al(e);
      if (t && (e = t.stateNode)) {
        var a = e[pa] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Iu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (Z(t, "name"), a = a.querySelectorAll(
                'input[name="' + Ta(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[pa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Iu(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && il(i);
            }
            break e;
          case "textarea":
            ns(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && gu(e, !!a.multiple, t, !1);
        }
      }
    }
    function fs(e, t, a) {
      if (p) return e(t, a);
      p = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (p = !1, (s !== null || y !== null) && (bc(), s && (t = s, e = y, y = s = null, Mn(t), e)))
          for (t = 0; t < e.length; t++) Mn(e[t]);
      }
    }
    function bu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[pa] || null;
      if (i === null) return null;
      a = i[t];
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
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Su() {
      if (B) return B;
      var e, t = x, a = t.length, i, o = "value" in $ ? $.value : $.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return B = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function lo(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function $i() {
      return !0;
    }
    function _h() {
      return !1;
    }
    function Dl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? $i : _h, this.isPropagationStopped = _h, this;
      }
      return Ze(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = $i);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = $i);
        },
        persist: function() {
        },
        isPersistent: $i
      }), t;
    }
    function rs(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = I1[e]) ? !!t[e] : !1;
    }
    function ss() {
      return rs;
    }
    function kl(e, t) {
      switch (e) {
        case "keyup":
          return rS.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== x0;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ti(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function ds(e, t) {
      switch (e) {
        case "compositionend":
          return ti(t);
        case "keypress":
          return t.which !== w0 ? null : (Y0 = !0, B0);
        case "textInput":
          return e = t.data, e === B0 && Y0 ? null : e;
        default:
          return null;
      }
    }
    function Rf(e, t) {
      if (Jd)
        return e === "compositionend" || !Hg && kl(e, t) ? (e = Su(), B = x = $ = null, Jd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return N0 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Ap(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!dS[e.type] : t === "textarea";
    }
    function Hh(e) {
      if (!S) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function hs(e, t, a, i) {
      s ? y ? y.push(i) : y = [i] : s = i, t = rr(t, "onChange"), 0 < t.length && (a = new be(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Af(e) {
      $n(e, 0);
    }
    function Wi(e) {
      var t = an(e);
      if (il(t)) return e;
    }
    function xh(e, t) {
      if (e === "change") return t;
    }
    function Op() {
      xm && (xm.detachEvent("onpropertychange", Dp), Nm = xm = null);
    }
    function Dp(e) {
      if (e.propertyName === "value" && Wi(Nm)) {
        var t = [];
        hs(
          t,
          Nm,
          e,
          ki(e)
        ), fs(Af, t);
      }
    }
    function yg(e, t, a) {
      e === "focusin" ? (Op(), xm = t, Nm = a, xm.attachEvent("onpropertychange", Dp)) : e === "focusout" && Op();
    }
    function Nh(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Wi(Nm);
    }
    function mg(e, t) {
      if (e === "click") return Wi(t);
    }
    function pg(e, t) {
      if (e === "input" || e === "change")
        return Wi(t);
    }
    function vg(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Of(e, t) {
      if (_a(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!ju.call(t, o) || !_a(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function zp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function wh(e, t) {
      var a = zp(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = zp(a);
      }
    }
    function Mp(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Mp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Up(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = vf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = vf(e.document);
      }
      return t;
    }
    function Bh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Cp(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      Ng || kd == null || kd !== vf(i) || (i = kd, "selectionStart" in i && Bh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), wm && Of(wm, i) || (wm = i, i = rr(xg, "onSelect"), 0 < i.length && (t = new be(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = kd)));
    }
    function Tu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Fi(e) {
      if (wg[e]) return wg[e];
      if (!$d[e]) return e;
      var t = $d[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in j0)
          return wg[e] = t[a];
      return e;
    }
    function un(e, t) {
      Q0.set(e, t), ee(t, [e]);
    }
    function Ea(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Yg.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: ts(t)
        }, Yg.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: ts(t)
      };
    }
    function Df() {
      for (var e = Wd, t = qg = Wd = 0; t < e; ) {
        var a = uu[t];
        uu[t++] = null;
        var i = uu[t];
        uu[t++] = null;
        var o = uu[t];
        uu[t++] = null;
        var f = uu[t];
        if (uu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && _p(a, o, f);
      }
    }
    function ys(e, t, a, i) {
      uu[Wd++] = e, uu[Wd++] = t, uu[Wd++] = a, uu[Wd++] = i, qg |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Yh(e, t, a, i) {
      return ys(e, t, a, i), ms(e);
    }
    function na(e, t) {
      return ys(e, null, null, t), ms(e);
    }
    function _p(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Ov || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Ll(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function ms(e) {
      if (ap > wS)
        throw Kr = ap = 0, np = y0 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Kr > BS && (Kr = 0, np = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && gn(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && gn(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Ii(e) {
      if (iu === null) return e;
      var t = iu(e);
      return t === void 0 ? e : t.current;
    }
    function qh(e) {
      if (iu === null) return e;
      var t = iu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Ii(e.render), e.render !== t) ? (t = { $$typeof: Yu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Hp(e, t) {
      if (iu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === Ua) && (i = !0);
          break;
        case 11:
          (o === Yu || o === Ua) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Tr || o === Ua) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = iu(a), e !== void 0 && e === iu(t)));
    }
    function xp(e) {
      iu !== null && typeof WeakSet == "function" && (Fd === null && (Fd = /* @__PURE__ */ new WeakSet()), Fd.add(e));
    }
    function zf(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, v = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          v = h;
          break;
        case 11:
          v = h.render;
      }
      if (iu === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var b = !1;
      h = !1, v !== null && (v = iu(v), v !== void 0 && (a.has(v) ? h = !0 : t.has(v) && (d === 1 ? h = !0 : b = !0))), Fd !== null && (Fd.has(e) || i !== null && Fd.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || b) && (i = na(e, 2), i !== null && Zt(i, e, 2)), o === null || h || zf(
        o,
        t,
        a
      ), f !== null && zf(
        f,
        t,
        a
      );
    }
    function Mf(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, K0 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function jh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Un(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = M(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Ii(e.type);
          break;
        case 1:
          a.type = Ii(e.type);
          break;
        case 11:
          a.type = qh(e.type);
      }
      return a;
    }
    function Gh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function ps(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        jh(e) && (d = 1), h = Ii(h);
      else if (typeof e == "string")
        d = A(), d = Bo(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case hm:
            return t = M(31, a, t, o), t.elementType = hm, t.lanes = f, t;
          case qe:
            return li(
              a.children,
              o,
              f,
              t
            );
          case qo:
            d = 8, o |= ga, o |= Qu;
            break;
          case jo:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = M(12, e, t, i | Pl), t.elementType = jo, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Go:
            return t = M(13, a, t, o), t.elementType = Go, t.lanes = f, t;
          case Mi:
            return t = M(19, a, t, o), t.elementType = Mi, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case dm:
                case Wa:
                  d = 10;
                  break e;
                case _d:
                  d = 9;
                  break e;
                case Yu:
                  d = 11, h = qh(h);
                  break e;
                case Tr:
                  d = 14;
                  break e;
                case Ua:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : xe(e) ? a = "array" : e !== void 0 && e.$$typeof === zi ? (a = "<" + (Le(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? gt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = M(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Uf(e, t, a) {
      return t = ps(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function li(e, t, a, i) {
      return e = M(7, e, i, t), e.lanes = a, e;
    }
    function ai(e, t, a) {
      return e = M(6, e, null, t), e.lanes = a, e;
    }
    function Lh(e, t, a) {
      return t = M(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Pi(e, t) {
      cn(), Id[Pd++] = zv, Id[Pd++] = Dv, Dv = e, zv = t;
    }
    function Np(e, t, a) {
      cn(), cu[ou++] = wc, cu[ou++] = Bc, cu[ou++] = Nr, Nr = e;
      var i = wc;
      e = Bc;
      var o = 32 - Ll(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Ll(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, wc = 1 << 32 - Ll(t) + o | a << o | i, Bc = f + e;
      } else
        wc = 1 << f | a << o | i, Bc = e;
    }
    function vs(e) {
      cn(), e.return !== null && (Pi(e, 1), Np(e, 1, 0));
    }
    function gs(e) {
      for (; e === Dv; )
        Dv = Id[--Pd], Id[Pd] = null, zv = Id[--Pd], Id[Pd] = null;
      for (; e === Nr; )
        Nr = cu[--ou], cu[ou] = null, Bc = cu[--ou], cu[ou] = null, wc = cu[--ou], cu[ou] = null;
    }
    function cn() {
      ht || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function on(e, t) {
      if (e.return === null) {
        if (fu === null)
          fu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (fu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          fu.distanceFromLeaf > t && (fu.distanceFromLeaf = t);
        }
        return fu;
      }
      var a = on(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Vh(e, t) {
      Yc || (e = on(e, 0), e.serverProps = null, t !== null && (t = Td(t), e.serverTail.push(t)));
    }
    function Cn(e) {
      var t = "", a = fu;
      throw a !== null && (fu = null, t = Sf(a)), ao(
        Ea(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), jg;
    }
    function Xh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Vl] = e, t[pa] = i, Wn(a, i), a) {
        case "dialog":
          We("cancel", t), We("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          We("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < up.length; a++)
            We(up[a], t);
          break;
        case "source":
          We("error", t);
          break;
        case "img":
        case "image":
        case "link":
          We("error", t), We("load", t);
          break;
        case "details":
          We("toggle", t);
          break;
        case "input":
          ye("input", i), We("invalid", t), Fu(t, i), bp(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), vu(t);
          break;
        case "option":
          Ah(t, i);
          break;
        case "select":
          ye("select", i), We("invalid", t), gf(t, i);
          break;
        case "textarea":
          ye("textarea", i), We("invalid", t), zn(t, i), Oh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), vu(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Zy(t.textContent, a) ? (i.popover != null && (We("beforetoggle", t), We("toggle", t)), i.onScroll != null && We("scroll", t), i.onScrollEnd != null && We("scrollend", t), i.onClick != null && (t.onclick = xu), t = !0) : t = !1, t || Cn(e);
    }
    function Qh(e) {
      for (Ha = e.return; Ha; )
        switch (Ha.tag) {
          case 5:
          case 13:
            Bi = !1;
            return;
          case 27:
          case 3:
            Bi = !0;
            return;
          default:
            Ha = Ha.return;
        }
    }
    function ec(e) {
      if (e !== Ha) return !1;
      if (!ht)
        return Qh(e), ht = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Fn(e.type, e.memoizedProps)), a = !a), a && ll) {
        for (a = ll; a; ) {
          var i = on(e, 0), o = Td(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Py(a) : _l(a.nextSibling);
        }
        Cn(e);
      }
      if (Qh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        ll = Py(e);
      } else
        t === 27 ? (t = ll, In(e.type) ? (e = D0, D0 = null, ll = e) : ll = t) : ll = Ha ? _l(e.stateNode.nextSibling) : null;
      return !0;
    }
    function tc() {
      ll = Ha = null, Yc = ht = !1;
    }
    function Zh() {
      var e = wr;
      return e !== null && (wa === null ? wa = e : wa.push.apply(
        wa,
        e
      ), wr = null), e;
    }
    function ao(e) {
      wr === null ? wr = [e] : wr.push(e);
    }
    function Kh() {
      var e = fu;
      if (e !== null) {
        fu = null;
        for (var t = Sf(e); 0 < e.children.length; )
          e = e.children[0];
        se(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function bs() {
      eh = Mv = null, th = !1;
    }
    function ni(e, t, a) {
      Te(Gg, t._currentValue, e), t._currentValue = a, Te(Lg, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== W0 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = W0;
    }
    function Eu(e, t) {
      e._currentValue = Gg.current;
      var a = Lg.current;
      pe(Lg, t), e._currentRenderer = a, pe(Gg, t);
    }
    function Jh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function kh(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var v = 0; v < t.length; v++)
              if (h.context === t[v]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Jh(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Jh(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function zl(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            _a(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Vo.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(fp) : e = [fp]);
        }
        o = o.return;
      }
      e !== null && kh(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function ui(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!_a(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function ii(e) {
      Mv = e, eh = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function _t(e) {
      return th && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), $h(Mv, e);
    }
    function Cf(e, t) {
      return Mv === null && ii(e), $h(e, t);
    }
    function $h(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, eh === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        eh = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else eh = eh.next = t;
      return a;
    }
    function _f() {
      return {
        controller: new SS(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function lc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function _n(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && TS(ES, function() {
        e.controller.abort();
      });
    }
    function fn() {
      var e = Br;
      return Br = 0, e;
    }
    function ci(e) {
      var t = Br;
      return Br = e, t;
    }
    function ac(e) {
      var t = Br;
      return Br += e, t;
    }
    function Ss(e) {
      Pa = lh(), 0 > e.actualStartTime && (e.actualStartTime = Pa);
    }
    function Ru(e) {
      if (0 <= Pa) {
        var t = lh() - Pa;
        e.actualDuration += t, e.selfBaseDuration = t, Pa = -1;
      }
    }
    function nc(e) {
      if (0 <= Pa) {
        var t = lh() - Pa;
        e.actualDuration += t, Pa = -1;
      }
    }
    function qa() {
      if (0 <= Pa) {
        var e = lh() - Pa;
        Pa = -1, Br += e;
      }
    }
    function rn() {
      Pa = lh();
    }
    function Hn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function wp(e, t) {
      if (Bm === null) {
        var a = Bm = [];
        Vg = 0, Yr = Gy(), ah = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return Vg++, t.then(Wh, Wh), t;
    }
    function Wh() {
      if (--Vg === 0 && Bm !== null) {
        ah !== null && (ah.status = "fulfilled");
        var e = Bm;
        Bm = null, Yr = 0, ah = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Bp(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Fh() {
      var e = qr.current;
      return e !== null ? e : Ht.pooledCache;
    }
    function Ts(e, t) {
      t === null ? Te(qr, qr.current, e) : Te(qr, t.pool, e);
    }
    function Yp() {
      var e = Fh();
      return e === null ? null : { parent: Nl._currentValue, pool: e };
    }
    function Ih() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Ph(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function no() {
    }
    function ja(e, t, a) {
      Y.actQueue !== null && (Y.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(no, no), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Ra(e), e;
        default:
          if (typeof t.status == "string")
            t.then(no, no);
          else {
            if (e = Ht, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Ra(e), e;
          }
          throw Qm = t, Nv = !0, Xm;
      }
    }
    function ey() {
      if (Qm === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Qm;
      return Qm = null, Nv = !1, e;
    }
    function Ra(e) {
      if (e === Xm || e === xv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function ua(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function oi(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function xn(e) {
      return {
        lane: e,
        tag: tb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function sn(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, Zg === i && !nb) {
        var o = fe(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), nb = !0;
      }
      return (Rt & Na) !== Tn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = ms(e), _p(e, null, a), t) : (ys(e, i, t, a), ms(e));
    }
    function fi(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Wu(e, a);
      }
    }
    function uo(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Nn() {
      if (Kg) {
        var e = ah;
        if (e !== null) throw e;
      }
    }
    function io(e, t, a, i) {
      Kg = !1;
      var o = e.updateQueue;
      Io = !1, Zg = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var v = h, b = v.next;
        v.next = null, d === null ? f = b : d.next = b, d = v;
        var w = e.alternate;
        w !== null && (w = w.updateQueue, h = w.lastBaseUpdate, h !== d && (h === null ? w.firstBaseUpdate = b : h.next = b, w.lastBaseUpdate = v));
      }
      if (f !== null) {
        var L = o.baseState;
        d = 0, w = b = v = null, h = f;
        do {
          var H = h.lane & -536870913, V = H !== h.lane;
          if (V ? (tt & H) === H : (i & H) === H) {
            H !== 0 && H === Yr && (Kg = !0), w !== null && (w = w.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              H = e;
              var de = h, ze = t, xt = a;
              switch (de.tag) {
                case lb:
                  if (de = de.payload, typeof de == "function") {
                    th = !0;
                    var ut = de.call(
                      xt,
                      L,
                      ze
                    );
                    if (H.mode & ga) {
                      ie(!0);
                      try {
                        de.call(xt, L, ze);
                      } finally {
                        ie(!1);
                      }
                    }
                    th = !1, L = ut;
                    break e;
                  }
                  L = de;
                  break e;
                case Qg:
                  H.flags = H.flags & -65537 | 128;
                case tb:
                  if (ut = de.payload, typeof ut == "function") {
                    if (th = !0, de = ut.call(
                      xt,
                      L,
                      ze
                    ), H.mode & ga) {
                      ie(!0);
                      try {
                        ut.call(xt, L, ze);
                      } finally {
                        ie(!1);
                      }
                    }
                    th = !1;
                  } else de = ut;
                  if (de == null) break e;
                  L = Ze({}, L, de);
                  break e;
                case ab:
                  Io = !0;
              }
            }
            H = h.callback, H !== null && (e.flags |= 64, V && (e.flags |= 8192), V = o.callbacks, V === null ? o.callbacks = [H] : V.push(H));
          } else
            V = {
              lane: H,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, w === null ? (b = w = V, v = L) : w = w.next = V, d |= H;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            V = h, h = V.next, V.next = null, o.lastBaseUpdate = V, o.shared.pending = null;
          }
        } while (!0);
        w === null && (v = L), o.baseState = v, o.firstBaseUpdate = b, o.lastBaseUpdate = w, f === null && (o.shared.lanes = 0), lf |= d, e.lanes = d, e.memoizedState = L;
      }
      Zg = null;
    }
    function Hf(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function co(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Hf(a[e], t);
    }
    function qp(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Hf(a[e], t);
    }
    function ia(e, t) {
      var a = ji;
      Te(wv, a, e), Te(nh, t, e), ji = a | t.baseLanes;
    }
    function xf(e) {
      Te(wv, ji, e), Te(
        nh,
        nh.current,
        e
      );
    }
    function dn(e) {
      ji = wv.current, pe(nh, e), pe(wv, e);
    }
    function Ke() {
      var e = G;
      du === null ? du = [e] : du.push(e);
    }
    function P() {
      var e = G;
      if (du !== null && (jc++, du[jc] !== e)) {
        var t = fe(Ne);
        if (!ub.has(t) && (ub.add(t), du !== null)) {
          for (var a = "", i = 0; i <= jc; i++) {
            var o = du[i], f = i === jc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Ga(e) {
      e == null || xe(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        G,
        typeof e
      );
    }
    function oo() {
      var e = fe(Ne);
      cb.has(e) || (cb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function Gt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function ri(e, t) {
      if (Km) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          G
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        G,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!_a(e[a], t[a])) return !1;
      return !0;
    }
    function si(e, t, a, i, o, f) {
      Po = f, Ne = t, du = e !== null ? e._debugHookTypes : null, jc = -1, Km = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = fe(Ne), Jg.has(f) || (Jg.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e !== null && e.memoizedState !== null ? $g : du !== null ? ob : kg, Gr = f = (t.mode & ga) !== qt;
      var d = Wg(a, i, o);
      if (Gr = !1, ih && (d = fo(
        t,
        a,
        i,
        o
      )), f) {
        ie(!0);
        try {
          d = fo(
            t,
            a,
            i,
            o
          );
        } finally {
          ie(!1);
        }
      }
      return Nf(e, t), d;
    }
    function Nf(e, t) {
      t._debugHookTypes = du, t.dependencies === null ? qc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: qc
      }) : t.dependencies._debugThenableState = qc, Y.H = qv;
      var a = Ct !== null && Ct.next !== null;
      if (Po = 0, du = G = Sl = Ct = Ne = null, jc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Bv = !1, Zm = 0, qc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Xl || (e = e.dependencies, e !== null && ui(e) && (Xl = !0)), Nv ? (Nv = !1, e = !0) : e = !1, e && (t = fe(t) || "Unknown", ib.has(t) || Jg.has(t) || (ib.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function fo(e, t, a, i) {
      Ne = e;
      var o = 0;
      do {
        if (ih && (qc = null), Zm = 0, ih = !1, o >= AS)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Km = !1, Sl = Ct = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        jc = -1, Y.H = fb, f = Wg(t, a, i);
      } while (ih);
      return f;
    }
    function La() {
      var e = Y.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? uc(t) : t, e = e.useState()[0], (Ct !== null ? Ct.memoizedState : null) !== e && (Ne.flags |= 1024), t;
    }
    function ca() {
      var e = Yv !== 0;
      return Yv = 0, e;
    }
    function Au(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Qu) !== qt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function hn(e) {
      if (Bv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Bv = !1;
      }
      Po = 0, du = Sl = Ct = Ne = null, jc = -1, G = null, ih = !1, Zm = Yv = 0, qc = null;
    }
    function Xt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sl === null ? Ne.memoizedState = Sl = e : Sl = Sl.next = e, Sl;
    }
    function nt() {
      if (Ct === null) {
        var e = Ne.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ct.next;
      var t = Sl === null ? Ne.memoizedState : Sl.next;
      if (t !== null)
        Sl = t, Ct = e;
      else {
        if (e === null)
          throw Ne.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Ct = e, e = {
          memoizedState: Ct.memoizedState,
          baseState: Ct.baseState,
          baseQueue: Ct.baseQueue,
          queue: Ct.queue,
          next: null
        }, Sl === null ? Ne.memoizedState = Sl = e : Sl = Sl.next = e;
      }
      return Sl;
    }
    function Es() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function uc(e) {
      var t = Zm;
      return Zm += 1, qc === null && (qc = Ih()), e = ja(qc, e, t), t = Ne, (Sl === null ? t.memoizedState : Sl.next) === null && (t = t.alternate, Y.H = t !== null && t.memoizedState !== null ? $g : kg), e;
    }
    function wn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return uc(e);
        if (e.$$typeof === Wa) return _t(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function It(e) {
      var t = null, a = Ne.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Ne.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Es(), Ne.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Km)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = hv;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function rt(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function ft(e, t, a) {
      var i = Xt();
      if (a !== void 0) {
        var o = a(t);
        if (Gr) {
          ie(!0);
          try {
            a(t);
          } finally {
            ie(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = fy.bind(
        null,
        Ne,
        e
      ), [i.memoizedState, e];
    }
    function Va(e) {
      var t = nt();
      return Xa(t, Ct, e);
    }
    function Xa(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, v = null, b = t, w = !1;
        do {
          var L = b.lane & -536870913;
          if (L !== b.lane ? (tt & L) === L : (Po & L) === L) {
            var H = b.revertLane;
            if (H === 0)
              v !== null && (v = v.next = {
                lane: 0,
                revertLane: 0,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }), L === Yr && (w = !0);
            else if ((Po & H) === H) {
              b = b.next, H === Yr && (w = !0);
              continue;
            } else
              L = {
                lane: 0,
                revertLane: b.revertLane,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }, v === null ? (h = v = L, d = f) : v = v.next = L, Ne.lanes |= H, lf |= H;
            L = b.action, Gr && a(f, L), f = b.hasEagerState ? b.eagerState : a(f, L);
          } else
            H = {
              lane: L,
              revertLane: b.revertLane,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, v === null ? (h = v = H, d = f) : v = v.next = H, Ne.lanes |= L, lf |= L;
          b = b.next;
        } while (b !== null && b !== t);
        if (v === null ? d = f : v.next = h, !_a(f, e.memoizedState) && (Xl = !0, w && (a = ah, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = v, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function ic(e) {
      var t = nt(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        _a(f, t.memoizedState) || (Xl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Ou(e, t, a) {
      var i = Ne, o = Xt();
      if (ht) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        uh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), uh = !0);
      } else {
        if (f = t(), uh || (a = t(), _a(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), uh = !0)), Ht === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (tt & 124) !== 0 || ty(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Os(
        so.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Yn(
        su | wl,
        hi(),
        ro.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function wf(e, t, a) {
      var i = Ne, o = nt(), f = ht;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !uh) {
        var d = t();
        _a(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), uh = !0);
      }
      (d = !_a(
        (Ct || o).memoizedState,
        a
      )) && (o.memoizedState = a, Xl = !0), o = o.queue;
      var h = so.bind(null, i, o, e);
      if (ol(2048, wl, h, [e]), o.getSnapshot !== t || d || Sl !== null && Sl.memoizedState.tag & su) {
        if (i.flags |= 2048, Yn(
          su | wl,
          hi(),
          ro.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Ht === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Po & 124) !== 0 || ty(i, t, a);
      }
      return a;
    }
    function ty(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ne.updateQueue, t === null ? (t = Es(), Ne.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ro(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ly(t) && ho(e);
    }
    function so(e, t, a) {
      return a(function() {
        ly(t) && ho(e);
      });
    }
    function ly(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !_a(e, a);
      } catch {
        return !0;
      }
    }
    function ho(e) {
      var t = na(e, 2);
      t !== null && Zt(t, e, 2);
    }
    function Bf(e) {
      var t = Xt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Gr) {
          ie(!0);
          try {
            a();
          } finally {
            ie(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rt,
        lastRenderedState: e
      }, t;
    }
    function Du(e) {
      e = Bf(e);
      var t = e.queue, a = vo.bind(null, Ne, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function yn(e) {
      var t = Xt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Ns.bind(
        null,
        Ne,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function zu(e, t) {
      var a = nt();
      return Bn(a, Ct, e, t);
    }
    function Bn(e, t, a, i) {
      return e.baseState = a, Xa(
        e,
        Ct,
        typeof i == "function" ? i : rt
      );
    }
    function Rs(e, t) {
      var a = nt();
      return Ct !== null ? Bn(a, Ct, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function ay(e, t, a, i, o) {
      if (Xf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        Y.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, yo(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function yo(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = Y.T, d = {};
        Y.T = d, Y.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), v = Y.S;
          v !== null && v(d, h), Yf(e, t, h);
        } catch (b) {
          ml(e, t, b);
        } finally {
          Y.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Yf(e, t, d);
        } catch (b) {
          ml(e, t, b);
        }
    }
    function Yf(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          di(e, t, i);
        },
        function(i) {
          return ml(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : di(e, t, a);
    }
    function di(e, t, a) {
      t.status = "fulfilled", t.value = a, qf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, yo(e, a)));
    }
    function ml(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, qf(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function qf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function ny(e, t) {
      return t;
    }
    function mo(e, t) {
      if (ht) {
        var a = Ht.formState;
        if (a !== null) {
          e: {
            var i = Ne;
            if (ht) {
              if (ll) {
                t: {
                  for (var o = ll, f = Bi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = _l(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === E0 || f === c1 ? o : null;
                }
                if (o) {
                  ll = _l(
                    o.nextSibling
                  ), i = o.data === E0;
                  break e;
                }
              }
              Cn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Xt(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ny,
        lastRenderedState: t
      }, a.queue = i, a = vo.bind(
        null,
        Ne,
        i
      ), i.dispatch = a, i = Bf(!1), f = Ns.bind(
        null,
        Ne,
        !1,
        i.queue
      ), i = Xt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = ay.bind(
        null,
        Ne,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function As(e) {
      var t = nt();
      return jp(t, Ct, e);
    }
    function jp(e, t, a) {
      if (t = Xa(
        e,
        t,
        ny
      )[0], e = Va(rt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = uc(t);
        } catch (d) {
          throw d === Xm ? xv : d;
        }
      else i = t;
      t = nt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Ne.flags |= 2048, Yn(
        su | wl,
        hi(),
        cl.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function cl(e, t) {
      e.action = t;
    }
    function po(e) {
      var t = nt(), a = Ct;
      if (a !== null)
        return jp(t, a, e);
      nt(), t = t.memoizedState, a = nt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Yn(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = Ne.updateQueue, t === null && (t = Es(), Ne.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function hi() {
      return { destroy: void 0, resource: void 0 };
    }
    function jf(e) {
      var t = Xt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Qa(e, t, a, i) {
      var o = Xt();
      i = i === void 0 ? null : i, Ne.flags |= e, o.memoizedState = Yn(
        su | t,
        hi(),
        a,
        i
      );
    }
    function ol(e, t, a, i) {
      var o = nt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Ct !== null && i !== null && ri(i, Ct.memoizedState.deps) ? o.memoizedState = Yn(t, f, a, i) : (Ne.flags |= e, o.memoizedState = Yn(
        su | t,
        f,
        a,
        i
      ));
    }
    function Os(e, t) {
      (Ne.mode & Qu) !== qt && (Ne.mode & Z0) === qt ? Qa(276826112, wl, e, t) : Qa(8390656, wl, e, t);
    }
    function Ds(e, t) {
      var a = 4194308;
      return (Ne.mode & Qu) !== qt && (a |= 134217728), Qa(a, ea, e, t);
    }
    function Gp(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function zs(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Ne.mode & Qu) !== qt && (i |= 134217728), Qa(
        i,
        ea,
        Gp.bind(null, t, e),
        a
      );
    }
    function qn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, ol(
        4,
        ea,
        Gp.bind(null, t, e),
        a
      );
    }
    function Gf(e, t) {
      return Xt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function cc(e, t) {
      var a = nt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && ri(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function Ms(e, t) {
      var a = Xt();
      t = t === void 0 ? null : t;
      var i = e();
      if (Gr) {
        ie(!0);
        try {
          e();
        } finally {
          ie(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function yi(e, t) {
      var a = nt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && ri(t, i[1]))
        return i[0];
      if (i = e(), Gr) {
        ie(!0);
        try {
          e();
        } finally {
          ie(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Us(e, t) {
      var a = Xt();
      return _s(a, e, t);
    }
    function Lf(e, t) {
      var a = nt();
      return Vf(
        a,
        Ct.memoizedState,
        e,
        t
      );
    }
    function Cs(e, t) {
      var a = nt();
      return Ct === null ? _s(a, e, t) : Vf(
        a,
        Ct.memoizedState,
        e,
        t
      );
    }
    function _s(e, t, a) {
      return a === void 0 || (Po & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Wp(), Ne.lanes |= e, lf |= e, a);
    }
    function Vf(e, t, a, i) {
      return _a(a, t) ? a : nh.current !== null ? (e = _s(e, a, i), _a(e, t) || (Xl = !0), e) : (Po & 42) === 0 ? (Xl = !0, e.memoizedState = a) : (e = Wp(), Ne.lanes |= e, lf |= e, t);
    }
    function uy(e, t, a, i, o) {
      var f = De.p;
      De.p = f !== 0 && f < Sn ? f : Sn;
      var d = Y.T, h = {};
      Y.T = h, Ns(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var v = o(), b = Y.S;
        if (b !== null && b(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
          var w = Bp(
            v,
            i
          );
          Mu(
            e,
            t,
            w,
            sa(e)
          );
        } else
          Mu(
            e,
            t,
            i,
            sa(e)
          );
      } catch (L) {
        Mu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: L },
          sa(e)
        );
      } finally {
        De.p = f, Y.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function oc(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = iy(e).queue;
      uy(
        e,
        o,
        t,
        Fr,
        a === null ? oe : function() {
          return cy(e), a(i);
        }
      );
    }
    function iy(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Fr,
        baseState: Fr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rt,
          lastRenderedState: Fr
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: rt,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function cy(e) {
      Y.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = iy(e).next.queue;
      Mu(
        e,
        t,
        {},
        sa(e)
      );
    }
    function jn() {
      var e = Bf(!1);
      return e = uy.bind(
        null,
        Ne,
        e.queue,
        !0,
        !1
      ), Xt().memoizedState = e, [!1, e];
    }
    function Hs() {
      var e = Va(rt)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : uc(e),
        t
      ];
    }
    function xs() {
      var e = ic(rt)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : uc(e),
        t
      ];
    }
    function oa() {
      return _t(fp);
    }
    function Gn() {
      var e = Xt(), t = Ht.identifierPrefix;
      if (ht) {
        var a = Bc, i = wc;
        a = (i & ~(1 << 32 - Ll(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Yv++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = RS++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function fc() {
      return Xt().memoizedState = oy.bind(
        null,
        Ne
      );
    }
    function oy(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = sa(a);
            e = xn(i);
            var o = sn(a, e, i);
            o !== null && (Zt(o, a, i), fi(o, a, i)), a = _f(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function fy(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = sa(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Xf(e) ? rc(t, o) : (o = Yh(e, t, o, i), o !== null && (Zt(o, e, i), Qf(o, t, i))), On(e, i);
    }
    function vo(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = sa(e), Mu(e, t, a, i), On(e, i);
    }
    function Mu(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Xf(e)) rc(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = Y.H;
          Y.H = Ku;
          try {
            var h = t.lastRenderedState, v = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = v, _a(v, h))
              return ys(e, t, o, 0), Ht === null && Df(), !1;
          } catch {
          } finally {
            Y.H = d;
          }
        }
        if (a = Yh(e, t, o, i), a !== null)
          return Zt(a, e, i), Qf(a, t, i), !0;
      }
      return !1;
    }
    function Ns(e, t, a, i) {
      if (Y.T === null && Yr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Gy(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Xf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Yh(
          e,
          a,
          i,
          2
        ), t !== null && Zt(t, e, 2);
      On(e, 2);
    }
    function Xf(e) {
      var t = e.alternate;
      return e === Ne || t !== null && t === Ne;
    }
    function rc(e, t) {
      ih = Bv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Qf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Wu(e, a);
      }
    }
    function pl(e) {
      var t = ke;
      return e != null && (ke = t === null ? e : t.concat(e)), t;
    }
    function go(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Uf(e, a.mode, 0), t._debugInfo = ke, t.return = a), se(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function bo(e) {
      var t = Jm;
      return Jm += 1, ch === null && (ch = Ih()), ja(ch, e, t);
    }
    function Za(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Ye(e, t) {
      throw t.$$typeof === Sr ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function mt(e, t) {
      var a = fe(e) || "Component";
      Ab[a] || (Ab[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Lt(e, t) {
      var a = fe(e) || "Component";
      Ob[a] || (Ob[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Zf(e) {
      function t(T, E) {
        if (e) {
          var R = T.deletions;
          R === null ? (T.deletions = [E], T.flags |= 16) : R.push(E);
        }
      }
      function a(T, E) {
        if (!e) return null;
        for (; E !== null; )
          t(T, E), E = E.sibling;
        return null;
      }
      function i(T) {
        for (var E = /* @__PURE__ */ new Map(); T !== null; )
          T.key !== null ? E.set(T.key, T) : E.set(T.index, T), T = T.sibling;
        return E;
      }
      function o(T, E) {
        return T = Un(T, E), T.index = 0, T.sibling = null, T;
      }
      function f(T, E, R) {
        return T.index = R, e ? (R = T.alternate, R !== null ? (R = R.index, R < E ? (T.flags |= 67108866, E) : R) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
      }
      function d(T) {
        return e && T.alternate === null && (T.flags |= 67108866), T;
      }
      function h(T, E, R, X) {
        return E === null || E.tag !== 6 ? (E = ai(
          R,
          T.mode,
          X
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = ke, E) : (E = o(E, R), E.return = T, E._debugInfo = ke, E);
      }
      function v(T, E, R, X) {
        var le = R.type;
        return le === qe ? (E = w(
          T,
          E,
          R.props.children,
          X,
          R.key
        ), go(R, E, T), E) : E !== null && (E.elementType === le || Hp(E, R) || typeof le == "object" && le !== null && le.$$typeof === Ua && ef(le) === E.type) ? (E = o(E, R.props), Za(E, R), E.return = T, E._debugOwner = R._owner, E._debugInfo = ke, E) : (E = Uf(R, T.mode, X), Za(E, R), E.return = T, E._debugInfo = ke, E);
      }
      function b(T, E, R, X) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== R.containerInfo || E.stateNode.implementation !== R.implementation ? (E = Lh(R, T.mode, X), E.return = T, E._debugInfo = ke, E) : (E = o(E, R.children || []), E.return = T, E._debugInfo = ke, E);
      }
      function w(T, E, R, X, le) {
        return E === null || E.tag !== 7 ? (E = li(
          R,
          T.mode,
          X,
          le
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = ke, E) : (E = o(E, R), E.return = T, E._debugInfo = ke, E);
      }
      function L(T, E, R) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = ai(
            "" + E,
            T.mode,
            R
          ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = ke, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case zi:
              return R = Uf(
                E,
                T.mode,
                R
              ), Za(R, E), R.return = T, T = pl(E._debugInfo), R._debugInfo = ke, ke = T, R;
            case Uc:
              return E = Lh(
                E,
                T.mode,
                R
              ), E.return = T, E._debugInfo = ke, E;
            case Ua:
              var X = pl(E._debugInfo);
              return E = ef(E), T = L(T, E, R), ke = X, T;
          }
          if (xe(E) || vt(E))
            return R = li(
              E,
              T.mode,
              R,
              null
            ), R.return = T, R._debugOwner = T, R._debugTask = T._debugTask, T = pl(E._debugInfo), R._debugInfo = ke, ke = T, R;
          if (typeof E.then == "function")
            return X = pl(E._debugInfo), T = L(
              T,
              bo(E),
              R
            ), ke = X, T;
          if (E.$$typeof === Wa)
            return L(
              T,
              Cf(T, E),
              R
            );
          Ye(T, E);
        }
        return typeof E == "function" && mt(T, E), typeof E == "symbol" && Lt(T, E), null;
      }
      function H(T, E, R, X) {
        var le = E !== null ? E.key : null;
        if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
          return le !== null ? null : h(T, E, "" + R, X);
        if (typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case zi:
              return R.key === le ? (le = pl(R._debugInfo), T = v(
                T,
                E,
                R,
                X
              ), ke = le, T) : null;
            case Uc:
              return R.key === le ? b(T, E, R, X) : null;
            case Ua:
              return le = pl(R._debugInfo), R = ef(R), T = H(
                T,
                E,
                R,
                X
              ), ke = le, T;
          }
          if (xe(R) || vt(R))
            return le !== null ? null : (le = pl(R._debugInfo), T = w(
              T,
              E,
              R,
              X,
              null
            ), ke = le, T);
          if (typeof R.then == "function")
            return le = pl(R._debugInfo), T = H(
              T,
              E,
              bo(R),
              X
            ), ke = le, T;
          if (R.$$typeof === Wa)
            return H(
              T,
              E,
              Cf(T, R),
              X
            );
          Ye(T, R);
        }
        return typeof R == "function" && mt(T, R), typeof R == "symbol" && Lt(T, R), null;
      }
      function V(T, E, R, X, le) {
        if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
          return T = T.get(R) || null, h(E, T, "" + X, le);
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case zi:
              return R = T.get(
                X.key === null ? R : X.key
              ) || null, T = pl(X._debugInfo), E = v(
                E,
                R,
                X,
                le
              ), ke = T, E;
            case Uc:
              return T = T.get(
                X.key === null ? R : X.key
              ) || null, b(E, T, X, le);
            case Ua:
              var je = pl(X._debugInfo);
              return X = ef(X), E = V(
                T,
                E,
                R,
                X,
                le
              ), ke = je, E;
          }
          if (xe(X) || vt(X))
            return R = T.get(R) || null, T = pl(X._debugInfo), E = w(
              E,
              R,
              X,
              le,
              null
            ), ke = T, E;
          if (typeof X.then == "function")
            return je = pl(X._debugInfo), E = V(
              T,
              E,
              R,
              bo(X),
              le
            ), ke = je, E;
          if (X.$$typeof === Wa)
            return V(
              T,
              E,
              R,
              Cf(E, X),
              le
            );
          Ye(E, X);
        }
        return typeof X == "function" && mt(E, X), typeof X == "symbol" && Lt(E, X), null;
      }
      function de(T, E, R, X) {
        if (typeof R != "object" || R === null) return X;
        switch (R.$$typeof) {
          case zi:
          case Uc:
            yt(T, E, R);
            var le = R.key;
            if (typeof le != "string") break;
            if (X === null) {
              X = /* @__PURE__ */ new Set(), X.add(le);
              break;
            }
            if (!X.has(le)) {
              X.add(le);
              break;
            }
            se(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                le
              );
            });
            break;
          case Ua:
            R = ef(R), de(T, E, R, X);
        }
        return X;
      }
      function ze(T, E, R, X) {
        for (var le = null, je = null, he = null, Ge = E, Ve = E = 0, jt = null; Ge !== null && Ve < R.length; Ve++) {
          Ge.index > Ve ? (jt = Ge, Ge = null) : jt = Ge.sibling;
          var dl = H(
            T,
            Ge,
            R[Ve],
            X
          );
          if (dl === null) {
            Ge === null && (Ge = jt);
            break;
          }
          le = de(
            T,
            dl,
            R[Ve],
            le
          ), e && Ge && dl.alternate === null && t(T, Ge), E = f(dl, E, Ve), he === null ? je = dl : he.sibling = dl, he = dl, Ge = jt;
        }
        if (Ve === R.length)
          return a(T, Ge), ht && Pi(T, Ve), je;
        if (Ge === null) {
          for (; Ve < R.length; Ve++)
            Ge = L(T, R[Ve], X), Ge !== null && (le = de(
              T,
              Ge,
              R[Ve],
              le
            ), E = f(
              Ge,
              E,
              Ve
            ), he === null ? je = Ge : he.sibling = Ge, he = Ge);
          return ht && Pi(T, Ve), je;
        }
        for (Ge = i(Ge); Ve < R.length; Ve++)
          jt = V(
            Ge,
            T,
            Ve,
            R[Ve],
            X
          ), jt !== null && (le = de(
            T,
            jt,
            R[Ve],
            le
          ), e && jt.alternate !== null && Ge.delete(
            jt.key === null ? Ve : jt.key
          ), E = f(
            jt,
            E,
            Ve
          ), he === null ? je = jt : he.sibling = jt, he = jt);
        return e && Ge.forEach(function(Zc) {
          return t(T, Zc);
        }), ht && Pi(T, Ve), je;
      }
      function xt(T, E, R, X) {
        if (R == null)
          throw Error("An iterable object provided no iterator.");
        for (var le = null, je = null, he = E, Ge = E = 0, Ve = null, jt = null, dl = R.next(); he !== null && !dl.done; Ge++, dl = R.next()) {
          he.index > Ge ? (Ve = he, he = null) : Ve = he.sibling;
          var Zc = H(T, he, dl.value, X);
          if (Zc === null) {
            he === null && (he = Ve);
            break;
          }
          jt = de(
            T,
            Zc,
            dl.value,
            jt
          ), e && he && Zc.alternate === null && t(T, he), E = f(Zc, E, Ge), je === null ? le = Zc : je.sibling = Zc, je = Zc, he = Ve;
        }
        if (dl.done)
          return a(T, he), ht && Pi(T, Ge), le;
        if (he === null) {
          for (; !dl.done; Ge++, dl = R.next())
            he = L(T, dl.value, X), he !== null && (jt = de(
              T,
              he,
              dl.value,
              jt
            ), E = f(
              he,
              E,
              Ge
            ), je === null ? le = he : je.sibling = he, je = he);
          return ht && Pi(T, Ge), le;
        }
        for (he = i(he); !dl.done; Ge++, dl = R.next())
          Ve = V(
            he,
            T,
            Ge,
            dl.value,
            X
          ), Ve !== null && (jt = de(
            T,
            Ve,
            dl.value,
            jt
          ), e && Ve.alternate !== null && he.delete(
            Ve.key === null ? Ge : Ve.key
          ), E = f(
            Ve,
            E,
            Ge
          ), je === null ? le = Ve : je.sibling = Ve, je = Ve);
        return e && he.forEach(function(WS) {
          return t(T, WS);
        }), ht && Pi(T, Ge), le;
      }
      function ut(T, E, R, X) {
        if (typeof R == "object" && R !== null && R.type === qe && R.key === null && (go(R, null, T), R = R.props.children), typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case zi:
              var le = pl(R._debugInfo);
              e: {
                for (var je = R.key; E !== null; ) {
                  if (E.key === je) {
                    if (je = R.type, je === qe) {
                      if (E.tag === 7) {
                        a(
                          T,
                          E.sibling
                        ), X = o(
                          E,
                          R.props.children
                        ), X.return = T, X._debugOwner = R._owner, X._debugInfo = ke, go(R, X, T), T = X;
                        break e;
                      }
                    } else if (E.elementType === je || Hp(
                      E,
                      R
                    ) || typeof je == "object" && je !== null && je.$$typeof === Ua && ef(je) === E.type) {
                      a(
                        T,
                        E.sibling
                      ), X = o(E, R.props), Za(X, R), X.return = T, X._debugOwner = R._owner, X._debugInfo = ke, T = X;
                      break e;
                    }
                    a(T, E);
                    break;
                  } else t(T, E);
                  E = E.sibling;
                }
                R.type === qe ? (X = li(
                  R.props.children,
                  T.mode,
                  X,
                  R.key
                ), X.return = T, X._debugOwner = T, X._debugTask = T._debugTask, X._debugInfo = ke, go(R, X, T), T = X) : (X = Uf(
                  R,
                  T.mode,
                  X
                ), Za(X, R), X.return = T, X._debugInfo = ke, T = X);
              }
              return T = d(T), ke = le, T;
            case Uc:
              e: {
                for (le = R, R = le.key; E !== null; ) {
                  if (E.key === R)
                    if (E.tag === 4 && E.stateNode.containerInfo === le.containerInfo && E.stateNode.implementation === le.implementation) {
                      a(
                        T,
                        E.sibling
                      ), X = o(
                        E,
                        le.children || []
                      ), X.return = T, T = X;
                      break e;
                    } else {
                      a(T, E);
                      break;
                    }
                  else t(T, E);
                  E = E.sibling;
                }
                X = Lh(
                  le,
                  T.mode,
                  X
                ), X.return = T, T = X;
              }
              return d(T);
            case Ua:
              return le = pl(R._debugInfo), R = ef(R), T = ut(
                T,
                E,
                R,
                X
              ), ke = le, T;
          }
          if (xe(R))
            return le = pl(R._debugInfo), T = ze(
              T,
              E,
              R,
              X
            ), ke = le, T;
          if (vt(R)) {
            if (le = pl(R._debugInfo), je = vt(R), typeof je != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var he = je.call(R);
            return he === R ? (T.tag !== 0 || Object.prototype.toString.call(T.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(he) !== "[object Generator]") && (Eb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), Eb = !0) : R.entries !== je || Ig || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Ig = !0), T = xt(
              T,
              E,
              he,
              X
            ), ke = le, T;
          }
          if (typeof R.then == "function")
            return le = pl(R._debugInfo), T = ut(
              T,
              E,
              bo(R),
              X
            ), ke = le, T;
          if (R.$$typeof === Wa)
            return ut(
              T,
              E,
              Cf(T, R),
              X
            );
          Ye(T, R);
        }
        return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (le = "" + R, E !== null && E.tag === 6 ? (a(
          T,
          E.sibling
        ), X = o(E, le), X.return = T, T = X) : (a(T, E), X = ai(
          le,
          T.mode,
          X
        ), X.return = T, X._debugOwner = T, X._debugTask = T._debugTask, X._debugInfo = ke, T = X), d(T)) : (typeof R == "function" && mt(T, R), typeof R == "symbol" && Lt(T, R), a(T, E));
      }
      return function(T, E, R, X) {
        var le = ke;
        ke = null;
        try {
          Jm = 0;
          var je = ut(
            T,
            E,
            R,
            X
          );
          return ch = null, je;
        } catch (jt) {
          if (jt === Xm || jt === xv) throw jt;
          var he = M(29, jt, null, T.mode);
          he.lanes = X, he.return = T;
          var Ge = he._debugInfo = ke;
          if (he._debugOwner = T._debugOwner, he._debugTask = T._debugTask, Ge != null) {
            for (var Ve = Ge.length - 1; 0 <= Ve; Ve--)
              if (typeof Ge[Ve].stack == "string") {
                he._debugOwner = Ge[Ve], he._debugTask = Ge[Ve].debugTask;
                break;
              }
          }
          return he;
        } finally {
          ke = le;
        }
      };
    }
    function Aa(e) {
      var t = e.alternate;
      Te(
        Bl,
        Bl.current & fh,
        e
      ), Te(hu, e, e), qi === null && (t === null || nh.current !== null || t.memoizedState !== null) && (qi = e);
    }
    function mi(e) {
      if (e.tag === 22) {
        if (Te(Bl, Bl.current, e), Te(hu, e, e), qi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (qi = e);
        }
      } else mn(e);
    }
    function mn(e) {
      Te(Bl, Bl.current, e), Te(
        hu,
        hu.current,
        e
      );
    }
    function Oa(e) {
      pe(hu, e), qi === e && (qi = null), pe(Bl, e);
    }
    function Uu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Vc || Pn(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
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
    function ry(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Yb.has(t) || (Yb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Vt(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & ga) {
        ie(!0);
        try {
          f = a(i, o);
        } finally {
          ie(!1);
        }
      }
      f === void 0 && (t = Le(t) || "Component", xb.has(t) || (xb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Ze({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function ws(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & ga) {
          ie(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            ie(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Le(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Of(a, i) || !Of(o, f) : !0;
    }
    function Bs(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = fe(e) || "Component", Mb.has(e) || (Mb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), Pg.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function pi(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Ze({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function sy(e) {
      e0(e), console.warn(
        `%s

%s
`,
        rh ? "An error occurred in the <" + rh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Lp(e) {
      var t = rh ? "The above error occurred in the <" + rh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((t0 || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          m1 + e[0],
          p1,
          ag + i + ag,
          v1
        ) : e.splice(
          0,
          0,
          m1,
          p1,
          ag + i + ag,
          v1
        ), e.unshift(console), i = kS.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function Ys(e) {
      e0(e);
    }
    function So(e, t) {
      try {
        rh = t.source ? fe(t.source) : null, t0 = null;
        var a = t.value;
        if (Y.actQueue !== null)
          Y.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function qs(e, t, a) {
      try {
        rh = a.source ? fe(a.source) : null, t0 = fe(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function ql(e, t, a) {
      return a = xn(a), a.tag = Qg, a.payload = { element: null }, a.callback = function() {
        se(t.source, So, e, t);
      }, a;
    }
    function Qt(e) {
      return e = xn(e), e.tag = Qg, e;
    }
    function Kf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          xp(a), se(
            i.source,
            qs,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        xp(a), se(
          i.source,
          qs,
          t,
          a,
          i
        ), typeof o != "function" && (nf === null ? nf = /* @__PURE__ */ new Set([this]) : nf.add(this)), OS(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          fe(a) || "Unknown"
        );
      });
    }
    function Jf(e, t, a, i, o) {
      if (a.flags |= 32768, Wt && Mo(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && zl(
          t,
          a,
          o,
          !0
        ), ht && (Yc = !0), a = hu.current, a !== null) {
          switch (a.tag) {
            case 13:
              return qi === null ? nd() : a.alternate === null && al === Lc && (al = u0), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === Xg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), By(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === Xg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), By(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return By(e, i, o), nd(), !1;
      }
      if (ht)
        return Yc = !0, t = hu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== jg && ao(
          Ea(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== jg && ao(
          Ea(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Ea(i, a), o = ql(
          e.stateNode,
          i,
          o
        ), uo(e, o), al !== Lr && (al = yh)), !1;
      var f = Ea(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (tp === null ? tp = [f] : tp.push(f), al !== Lr && (al = yh), t === null) return !0;
      i = Ea(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = ql(
              a.stateNode,
              i,
              e
            ), uo(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (nf === null || !nf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Qt(o), Kf(
                o,
                e,
                a,
                i
              ), uo(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function tl(e, t, a, i) {
      t.child = e === null ? Db(t, null, a, i) : oh(
        t,
        e.child,
        a,
        i
      );
    }
    function js(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return ii(t), wt(t), i = si(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = ca(), la(), e !== null && !Xl ? (Au(e, t, o), Vn(e, t, o)) : (ht && h && vs(t), t.flags |= 1, tl(e, t, i, o), t.child);
    }
    function Ln(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !jh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Ii(f), t.tag = 15, t.type = a, Xs(t, f), kf(
          e,
          t,
          a,
          i,
          o
        )) : (e = ps(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !$s(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Of, a(d, i) && e.ref === t.ref)
          return Vn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = Un(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function kf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Of(f, i) && e.ref === t.ref && t.type === e.type)
          if (Xl = !1, t.pendingProps = i = f, $s(e, o))
            (e.flags & 131072) !== 0 && (Xl = !0);
          else
            return t.lanes = e.lanes, Vn(e, t, o);
      }
      return Vs(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Gs(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Ls(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ts(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? ia(t, f) : xf(t), mi(t);
        else
          return t.lanes = t.childLanes = 536870912, Ls(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (Ts(t, f.cachePool), ia(t, f), mn(t), t.memoizedState = null) : (e !== null && Ts(t, null), xf(t), mn(t));
      return tl(e, t, o, a), t.child;
    }
    function Ls(e, t, a, i) {
      var o = Fh();
      return o = o === null ? null : {
        parent: Nl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && Ts(t, null), xf(t), mi(t), e !== null && zl(e, t, i, !0), null;
    }
    function $f(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Vs(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Le(a) || "Unknown";
        jb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), jb[f] = !0);
      }
      return t.mode & ga && Zu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Xs(t, t.type), a.contextTypes && (f = Le(a) || "Unknown", Lb[f] || (Lb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), ii(t), wt(t), a = si(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = ca(), la(), e !== null && !Xl ? (Au(e, t, o), Vn(e, t, o)) : (ht && i && vs(t), t.flags |= 1, tl(e, t, a, o), t.child);
    }
    function dy(e, t, a, i, o, f) {
      return ii(t), wt(t), jc = -1, Km = e !== null && e.type !== t.type, t.updateQueue = null, a = fo(
        t,
        i,
        a,
        o
      ), Nf(e, t), i = ca(), la(), e !== null && !Xl ? (Au(e, t, f), Vn(e, t, f)) : (ht && i && vs(t), t.flags |= 1, tl(e, t, a, f), t.child);
    }
    function hy(e, t, a, i, o) {
      switch (it(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Ht, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Qt(h), Kf(
            h,
            d,
            t,
            Ea(f, t)
          ), uo(t, h);
      }
      if (ii(t), t.stateNode === null) {
        if (d = Fo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Wa) && !Bb.has(a) && (Bb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === _d ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Le(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = _t(f)), f = new a(i, d), t.mode & ga) {
          ie(!0);
          try {
            f = new a(i, d);
          } finally {
            ie(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Pg, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = zb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Le(a) || "Component", Ub.has(d) || (Ub.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var v = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? v = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (v = "UNSAFE_componentWillUpdate"), d !== null || h !== null || v !== null) {
            f = Le(a) || "Component";
            var b = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            _b.has(f) || (_b.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              b,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              v !== null ? `
  ` + v : ""
            ));
          }
        }
        f = t.stateNode, d = Le(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !wb.has(a) && (wb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Nb.has(a) && (Nb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Le(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Cb.has(a) || (Cb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Le(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || xe(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, ua(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? _t(d) : Fo, f.state === i && (d = Le(a) || "Component", Hb.has(d) || (Hb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & ga && Zu.recordLegacyContextWarning(
          t,
          f
        ), Zu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Vt(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          fe(t) || "Component"
        ), Pg.enqueueReplaceState(
          f,
          f.state,
          null
        )), io(t, i, f, o), Nn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Qu) !== qt && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var w = t.memoizedProps;
        h = pi(a, w), f.props = h;
        var L = f.context;
        v = a.contextType, d = Fo, typeof v == "object" && v !== null && (d = _t(v)), b = a.getDerivedStateFromProps, v = typeof b == "function" || typeof f.getSnapshotBeforeUpdate == "function", w = t.pendingProps !== w, v || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (w || L !== d) && Bs(
          t,
          f,
          i,
          d
        ), Io = !1;
        var H = t.memoizedState;
        f.state = H, io(t, i, f, o), Nn(), L = t.memoizedState, w || H !== L || Io ? (typeof b == "function" && (Vt(
          t,
          a,
          b,
          i
        ), L = t.memoizedState), (h = Io || ws(
          t,
          a,
          h,
          i,
          H,
          L,
          d
        )) ? (v || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Qu) !== qt && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Qu) !== qt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = L), f.props = i, f.state = L, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Qu) !== qt && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, oi(e, t), d = t.memoizedProps, v = pi(a, d), f.props = v, b = t.pendingProps, H = f.context, L = a.contextType, h = Fo, typeof L == "object" && L !== null && (h = _t(L)), w = a.getDerivedStateFromProps, (L = typeof w == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== b || H !== h) && Bs(
          t,
          f,
          i,
          h
        ), Io = !1, H = t.memoizedState, f.state = H, io(t, i, f, o), Nn();
        var V = t.memoizedState;
        d !== b || H !== V || Io || e !== null && e.dependencies !== null && ui(e.dependencies) ? (typeof w == "function" && (Vt(
          t,
          a,
          w,
          i
        ), V = t.memoizedState), (v = Io || ws(
          t,
          a,
          v,
          i,
          H,
          V,
          h
        ) || e !== null && e.dependencies !== null && ui(e.dependencies)) ? (L || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, V, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          V,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = V), f.props = i, f.state = V, f.context = h, f = v) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, $f(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, mf(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Pa = -1;
        else {
          if (wt(t), a = db(h), t.mode & ga) {
            ie(!0);
            try {
              db(h);
            } finally {
              ie(!1);
            }
          }
          la();
        }
        t.flags |= 1, e !== null && d ? (t.child = oh(
          t,
          e.child,
          null,
          o
        ), t.child = oh(
          t,
          null,
          a,
          o
        )) : tl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Vn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (sh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        fe(t) || "a component"
      ), sh = !0), e;
    }
    function yy(e, t, a, i) {
      return tc(), t.flags |= 256, tl(e, t, a, i), t.child;
    }
    function Xs(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Le(t) || "Unknown", Vb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Vb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Le(t) || "Unknown", Gb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), Gb[t] = !0));
    }
    function Wf(e) {
      return { baseLanes: e, cachePool: Yp() };
    }
    function Qs(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Rn), e;
    }
    function Vp(e, t, a) {
      var i, o = t.pendingProps;
      Oe(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Bl.current & km) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ht) {
          if (f ? Aa(t) : mn(t), ht) {
            var h = ll, v;
            if (!(v = !h)) {
              e: {
                var b = h;
                for (v = Bi; b.nodeType !== 8; ) {
                  if (!v) {
                    v = null;
                    break e;
                  }
                  if (b = _l(b.nextSibling), b === null) {
                    v = null;
                    break e;
                  }
                }
                v = b;
              }
              v !== null ? (cn(), t.memoizedState = {
                dehydrated: v,
                treeContext: Nr !== null ? { id: wc, overflow: Bc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, b = M(18, null, null, qt), b.stateNode = v, b.return = t, t.child = b, Ha = t, ll = null, v = !0) : v = !1, v = !v;
            }
            v && (Vh(
              t,
              h
            ), Cn(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return Pn(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          Oa(t);
        }
        return h = o.children, o = o.fallback, f ? (mn(t), f = t.mode, h = Ff(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = li(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = Wf(a), f.childLanes = Qs(
          e,
          i,
          a
        ), t.memoizedState = a0, o) : (Aa(t), Zs(
          t,
          h
        ));
      }
      var w = e.memoizedState;
      if (w !== null && (h = w.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (Aa(t), t.flags &= -257, t = Ks(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (mn(t), t.child = e.child, t.flags |= 128, t = null) : (mn(t), f = o.fallback, h = t.mode, o = Ff(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = li(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, oh(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = Wf(a), o.childLanes = Qs(
            e,
            i,
            a
          ), t.memoizedState = a0, t = f);
        else if (Aa(t), ht && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Pn(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            v = i.dgst;
            var L = i.msg;
            b = i.stck;
            var H = i.cstck;
          }
          h = L, i = v, o = b, v = f = H, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = v === void 0 ? null : v, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && Yg.set(
            f,
            o
          ), ao(o), t = Ks(
            e,
            t,
            a
          );
        } else if (Xl || zl(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Xl || i) {
          if (i = Ht, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : El(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== w.retryLane))
            throw w.retryLane = o, na(
              e,
              o
            ), Zt(
              i,
              e,
              o
            ), qb;
          h.data === Vc || nd(), t = Ks(
            e,
            t,
            a
          );
        } else
          h.data === Vc ? (t.flags |= 192, t.child = e.child, t = null) : (e = w.treeContext, ll = _l(
            h.nextSibling
          ), Ha = t, ht = !0, wr = null, Yc = !1, fu = null, Bi = !1, e !== null && (cn(), cu[ou++] = wc, cu[ou++] = Bc, cu[ou++] = Nr, wc = e.id, Bc = e.overflow, Nr = t), t = Zs(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (mn(t), f = o.fallback, h = t.mode, v = e.child, b = v.sibling, o = Un(
        v,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = v.subtreeFlags & 65011712, b !== null ? f = Un(
        b,
        f
      ) : (f = li(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = Wf(a) : (v = h.cachePool, v !== null ? (b = Nl._currentValue, v = v.parent !== b ? { parent: b, pool: b } : v) : v = Yp(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: v
      }), f.memoizedState = h, f.childLanes = Qs(
        e,
        i,
        a
      ), t.memoizedState = a0, o) : (Aa(t), a = e.child, e = a.sibling, a = Un(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Zs(e, t) {
      return t = Ff(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Ff(e, t) {
      return e = M(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: Ov,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Ks(e, t, a) {
      return oh(t, e.child, null, a), e = Zs(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Js(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Jh(
        e.return,
        t,
        a
      );
    }
    function my(e, t) {
      var a = xe(e);
      return e = !a && typeof vt(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function ks(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function py(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !Xb[o])
        if (Xb[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || l0[f] || (f !== "collapsed" && f !== "hidden" ? (l0[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (l0[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (xe(i)) {
          for (var d = 0; d < i.length; d++)
            if (!my(i[d], d)) break e;
        } else if (d = vt(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), v = 0; !h.done; h = d.next()) {
              if (!my(h.value, v)) break e;
              v++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (tl(e, t, i, a), i = Bl.current, (i & km) !== 0)
        i = i & fh | km, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Js(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Js(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= fh;
      }
      switch (Te(Bl, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Uu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), ks(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Uu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          ks(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          ks(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Vn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Pa = -1, lf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (zl(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = Un(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = Un(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function $s(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ui(e)));
    }
    function gg(e, t, a) {
      switch (t.tag) {
        case 3:
          Ut(
            t,
            t.stateNode.containerInfo
          ), ni(
            t,
            Nl,
            e.memoizedState.cache
          ), tc();
          break;
        case 27:
        case 5:
          K(t);
          break;
        case 4:
          Ut(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          ni(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (Aa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Vp(
              e,
              t,
              a
            ) : (Aa(t), e = Vn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          Aa(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (zl(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return py(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Te(
            Bl,
            Bl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, Gs(e, t, a);
        case 24:
          ni(
            t,
            Nl,
            e.memoizedState.cache
          );
      }
      return Vn(e, t, a);
    }
    function Ws(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = ps(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Xl = !0;
        else {
          if (!$s(e, a) && (t.flags & 128) === 0)
            return Xl = !1, gg(
              e,
              t,
              a
            );
          Xl = (e.flags & 131072) !== 0;
        }
      else
        Xl = !1, (i = ht) && (cn(), i = (t.flags & 1048576) !== 0), i && (i = t.index, cn(), Np(t, zv, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = ef(t.elementType), t.type = e, typeof e == "function")
            jh(e) ? (i = pi(
              e,
              i
            ), t.tag = 1, t.type = e = Ii(e), t = hy(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, Xs(t, e), t.type = e = Ii(e), t = Vs(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Yu) {
                t.tag = 11, t.type = e = qh(e), t = js(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Tr) {
                t.tag = 14, t = Ln(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Ua && (t = " Did you wrap a component in React.lazy() more than once?"), e = Le(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Vs(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = pi(
            i,
            t.pendingProps
          ), hy(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Ut(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, oi(e, t), io(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, ni(t, Nl, i), i !== f.cache && kh(
              t,
              [Nl],
              a,
              !0
            ), Nn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = yy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = Ea(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), ao(o), t = yy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (ll = _l(e.firstChild), Ha = t, ht = !0, wr = null, Yc = !1, fu = null, Bi = !0, e = Db(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (tc(), i === o) {
                t = Vn(
                  e,
                  t,
                  a
                );
                break e;
              }
              tl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return $f(e, t), e === null ? (e = Bu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : ht || (e = t.type, a = t.pendingProps, i = Tt(
            tu.current
          ), i = Pe(
            i
          ).createElement(e), i[Vl] = t, i[pa] = a, Jt(i, e, a), D(i), t.stateNode = i) : t.memoizedState = Bu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return K(t), e === null && ht && (i = Tt(tu.current), o = A(), i = t.stateNode = tm(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Yc || (o = Mt(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (on(t, 0).serverProps = o)), Ha = t, Bi = !0, o = ll, In(t.type) ? (D0 = o, ll = _l(
            i.firstChild
          )) : ll = o), tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), $f(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ht && (f = A(), i = cs(
            t.type,
            f.ancestorInfo
          ), o = ll, (d = !o) || (d = Ri(
            o,
            t.type,
            t.pendingProps,
            Bi
          ), d !== null ? (t.stateNode = d, Yc || (f = Mt(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (on(t, 0).serverProps = f)), Ha = t, ll = _l(
            d.firstChild
          ), Bi = !1, f = !0) : f = !1, d = !f), d && (i && Vh(t, o), Cn(t))), K(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Fn(o, f) ? i = null : d !== null && Fn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = si(
            e,
            t,
            La,
            null,
            null,
            a
          ), fp._currentValue = o), $f(e, t), tl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && ht && (e = t.pendingProps, a = A(), i = a.ancestorInfo.current, e = i != null ? Tf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = ll, (i = !a) || (i = Cl(
            a,
            t.pendingProps,
            Bi
          ), i !== null ? (t.stateNode = i, Ha = t, ll = null, i = !0) : i = !1, i = !i), i && (e && Vh(t, a), Cn(t))), null;
        case 13:
          return Vp(e, t, a);
        case 4:
          return Ut(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = oh(
            t,
            null,
            i,
            a
          ) : tl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return js(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return tl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || Qb || (Qb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), ni(t, i, f), tl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), ii(t), o = _t(o), wt(t), i = Wg(
            i,
            o,
            void 0
          ), la(), t.flags |= 1, tl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Ln(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return kf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return py(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = Ff(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = Un(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return Gs(e, t, a);
        case 24:
          return ii(t), i = _t(Nl), e === null ? (o = Fh(), o === null && (o = Ht, f = _f(), o.pooledCache = f, lc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, ua(t), ni(t, Nl, o)) : ((e.lanes & a) !== 0 && (oi(e, t), io(t, null, null, a), Nn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ni(t, Nl, i)) : (i = f.cache, ni(t, Nl, i), i !== o.cache && kh(
            t,
            [Nl],
            a,
            !0
          ))), tl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function fa(e) {
      e.flags |= 4;
    }
    function If(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & yu) !== Wr)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !dr(t)) {
        if (t = hu.current, t !== null && ((tt & 4194048) === tt ? qi !== null : (tt & 62914560) !== tt && (tt & 536870912) === 0 || t !== qi))
          throw Qm = Xg, eb;
        e.flags |= 8192;
      }
    }
    function Pf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Dn() : 536870912, e.lanes |= t, Qr |= t);
    }
    function vi(e, t) {
      if (!ht)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Ot(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Pl) !== qt) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Pl) !== qt) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Xp(e, t, a) {
      var i = t.pendingProps;
      switch (gs(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ot(t), null;
        case 1:
          return Ot(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Eu(Nl, t), ct(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ec(t) ? (Kh(), fa(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Zh())), Ot(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (fa(t), a !== null ? (Ot(t), If(
            t,
            a
          )) : (Ot(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (fa(t), Ot(t), If(
            t,
            a
          )) : (Ot(t), t.flags &= -16777217) : (e.memoizedProps !== i && fa(t), Ot(t), t.flags &= -16777217), null;
        case 27:
          F(t), a = Tt(tu.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && fa(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ot(t), null;
            }
            e = A(), ec(t) ? Xh(t) : (e = tm(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, fa(t));
          }
          return Ot(t), null;
        case 5:
          if (F(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && fa(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ot(t), null;
            }
            if (o = A(), ec(t))
              Xh(t);
            else {
              switch (e = Tt(tu.current), cs(a, o.ancestorInfo), o = o.context, e = Pe(e), o) {
                case Sh:
                  e = e.createElementNS(Wo, a);
                  break;
                case eg:
                  e = e.createElementNS(
                    Hr,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        Wo,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Hr,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || ju.call(
                        f1,
                        a
                      ) || (f1[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Vl] = t, e[pa] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Jt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && fa(t);
            }
          }
          return Ot(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && fa(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Tt(tu.current), a = A(), ec(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Yc, i = null;
              var f = Ha;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Ed(
                      e,
                      a,
                      i
                    ), o !== null && (on(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Ed(
                      e,
                      a,
                      i
                    ), o !== null && (on(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Vl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Zy(e.nodeValue, a)), e || Cn(t);
            } else
              o = a.ancestorInfo.current, o != null && Tf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Pe(e).createTextNode(
                i
              ), e[Vl] = t, t.stateNode = e;
          }
          return Ot(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = ec(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Vl] = t, Ot(t), (t.mode & Pl) !== qt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Kh(), tc(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, Ot(t), (t.mode & Pl) !== qt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Zh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Oa(t), t) : (Oa(t), null);
          }
          return Oa(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Pl) !== qt && Hn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Pf(t, t.updateQueue), Ot(t), (t.mode & Pl) !== qt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return ct(t), e === null && Xy(
            t.stateNode.containerInfo
          ), Ot(t), null;
        case 10:
          return Eu(t.type, t), Ot(t), null;
        case 19:
          if (pe(Bl, t), o = t.memoizedState, o === null) return Ot(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) vi(o, !1);
            else {
              if (al !== Lc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Uu(e), f !== null) {
                    for (t.flags |= 128, vi(o, !1), e = f.updateQueue, t.updateQueue = e, Pf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Gh(a, e), a = a.sibling;
                    return Te(
                      Bl,
                      Bl.current & fh | km,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && lu() > Vv && (t.flags |= 128, i = !0, vi(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = Uu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Pf(t, e), vi(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !ht)
                  return Ot(t), null;
              } else
                2 * lu() - o.renderingStartTime > Vv && a !== 536870912 && (t.flags |= 128, i = !0, vi(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = lu(), e.sibling = null, a = Bl.current, a = i ? a & fh | km : a & fh, Te(Bl, a, t), e) : (Ot(t), null);
        case 22:
        case 23:
          return Oa(t), dn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ot(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ot(t), a = t.updateQueue, a !== null && Pf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && pe(qr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Eu(Nl, t), Ot(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Qp(e, t) {
      switch (gs(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Pl) !== qt && Hn(t), t) : null;
        case 3:
          return Eu(Nl, t), ct(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return F(t), null;
        case 13:
          if (Oa(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            tc();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Pl) !== qt && Hn(t), t) : null;
        case 19:
          return pe(Bl, t), null;
        case 4:
          return ct(t), null;
        case 10:
          return Eu(t.type, t), null;
        case 22:
        case 23:
          return Oa(t), dn(t), e !== null && pe(qr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Pl) !== qt && Hn(t), t) : null;
        case 24:
          return Eu(Nl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function vy(e, t) {
      switch (gs(t), t.tag) {
        case 3:
          Eu(Nl, t), ct(t);
          break;
        case 26:
        case 27:
        case 5:
          F(t);
          break;
        case 4:
          ct(t);
          break;
        case 13:
          Oa(t);
          break;
        case 19:
          pe(Bl, t);
          break;
        case 10:
          Eu(t.type, t);
          break;
        case 22:
        case 23:
          Oa(t), dn(t), e !== null && pe(qr, t);
          break;
        case 24:
          Eu(Nl, t);
      }
    }
    function pn(e) {
      return (e.mode & Pl) !== qt;
    }
    function gy(e, t) {
      pn(e) ? (rn(), sc(t, e), qa()) : sc(t, e);
    }
    function Fs(e, t, a) {
      pn(e) ? (rn(), dc(
        a,
        e,
        t
      ), qa()) : dc(
        a,
        e,
        t
      );
    }
    function sc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & wl) !== ru ? ce !== null && typeof ce.markComponentPassiveEffectMountStarted == "function" && ce.markComponentPassiveEffectMountStarted(
              t
            ) : (e & ea) !== ru && ce !== null && typeof ce.markComponentLayoutEffectMountStarted == "function" && ce.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & xa) !== ru && (gh = !0), i = se(
              t,
              DS,
              a
            ), (e & xa) !== ru && (gh = !1), (e & wl) !== ru ? ce !== null && typeof ce.markComponentPassiveEffectMountStopped == "function" && ce.markComponentPassiveEffectMountStopped() : (e & ea) !== ru && ce !== null && typeof ce.markComponentLayoutEffectMountStopped == "function" && ce.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & ea) !== 0 ? "useLayoutEffect" : (a.tag & xa) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, se(
                t,
                function(h, v) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    v
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Re(t, t.return, h);
      }
    }
    function dc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & wl) !== ru ? ce !== null && typeof ce.markComponentPassiveEffectUnmountStarted == "function" && ce.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & ea) !== ru && ce !== null && typeof ce.markComponentLayoutEffectUnmountStarted == "function" && ce.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & xa) !== ru && (gh = !0), o = t, se(
                o,
                zS,
                o,
                a,
                h
              ), (e & xa) !== ru && (gh = !1), (e & wl) !== ru ? ce !== null && typeof ce.markComponentPassiveEffectUnmountStopped == "function" && ce.markComponentPassiveEffectUnmountStopped() : (e & ea) !== ru && ce !== null && typeof ce.markComponentLayoutEffectUnmountStopped == "function" && ce.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (v) {
        Re(t, t.return, v);
      }
    }
    function by(e, t) {
      pn(e) ? (rn(), sc(t, e), qa()) : sc(t, e);
    }
    function er(e, t, a) {
      pn(e) ? (rn(), dc(
        a,
        e,
        t
      ), qa()) : dc(
        a,
        e,
        t
      );
    }
    function Sy(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || sh || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          fe(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          fe(e) || "instance"
        ));
        try {
          se(
            e,
            qp,
            t,
            a
          );
        } catch (i) {
          Re(e, e.return, i);
        }
      }
    }
    function Zp(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function bg(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || sh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        fe(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        fe(e) || "instance"
      ));
      try {
        var o = pi(
          e.type,
          a,
          e.elementType === e.type
        ), f = se(
          e,
          Zp,
          t,
          o,
          i
        );
        a = Zb, f !== void 0 || a.has(e.type) || (a.add(e.type), se(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            fe(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Re(e, e.return, d);
      }
    }
    function Is(e, t, a) {
      a.props = pi(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, pn(e) ? (rn(), se(
        e,
        gb,
        e,
        t,
        a
      ), qa()) : se(
        e,
        gb,
        e,
        t,
        a
      );
    }
    function Kp(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (pn(e))
            try {
              rn(), e.refCleanup = t(a);
            } finally {
              qa();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            fe(e)
          ), t.current = a;
      }
    }
    function To(e, t) {
      try {
        se(e, Kp, e);
      } catch (a) {
        Re(e, t, a);
      }
    }
    function Ka(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (pn(e))
              try {
                rn(), se(e, i);
              } finally {
                qa(e);
              }
            else se(e, i);
          } catch (o) {
            Re(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (pn(e))
              try {
                rn(), se(e, a, null);
              } finally {
                qa(e);
              }
            else se(e, a, null);
          } catch (o) {
            Re(e, t, o);
          }
        else a.current = null;
    }
    function Ty(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", Cv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function Jp(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", Cv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function kp(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        se(
          e,
          Nu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Re(e, e.return, o);
      }
    }
    function Ey(e, t, a) {
      try {
        se(
          e,
          kt,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Re(e, e.return, i);
      }
    }
    function Ry(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && In(e.type) || e.tag === 4;
    }
    function hc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ry(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && In(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function tr(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = xu));
      else if (i !== 4 && (i === 27 && In(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (tr(e, t, a), e = e.sibling; e !== null; )
          tr(e, t, a), e = e.sibling;
    }
    function yc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && In(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (yc(e, t, a), e = e.sibling; e !== null; )
          yc(e, t, a), e = e.sibling;
    }
    function $p(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Ry(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = hc(e), yc(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (wu(a), t.flags &= -33), t = hc(e), yc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = hc(e), tr(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Ay(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        se(
          e,
          Ma,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Re(e, e.return, i);
      }
    }
    function Ps(e, t) {
      if (e = e.containerInfo, R0 = ng, e = Up(e), Bh(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, v = -1, b = 0, w = 0, L = e, H = null;
              t: for (; ; ) {
                for (var V; L !== a || o !== 0 && L.nodeType !== 3 || (h = d + o), L !== f || i !== 0 && L.nodeType !== 3 || (v = d + i), L.nodeType === 3 && (d += L.nodeValue.length), (V = L.firstChild) !== null; )
                  H = L, L = V;
                for (; ; ) {
                  if (L === e) break t;
                  if (H === a && ++b === o && (h = d), H === f && ++w === i && (v = d), (V = L.nextSibling) !== null) break;
                  L = H, H = L.parentNode;
                }
                L = V;
              }
              a = h === -1 || v === -1 ? null : { start: h, end: v };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (A0 = {
        focusedElem: e,
        selectionRange: a
      }, ng = !1, Ql = t; Ql !== null; )
        if (t = Ql, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Ql = e;
        else
          for (; Ql !== null; ) {
            switch (e = t = Ql, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && bg(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Ho(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Ho(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Ql = e;
              break;
            }
            Ql = t.return;
          }
    }
    function Oy(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Xn(e, a), i & 4 && gy(a, ea | su);
          break;
        case 1:
          if (Xn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || sh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                fe(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                fe(a) || "instance"
              )), pn(a) ? (rn(), se(
                a,
                Fg,
                a,
                e
              ), qa()) : se(
                a,
                Fg,
                a,
                e
              );
            else {
              var o = pi(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || sh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                fe(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                fe(a) || "instance"
              )), pn(a) ? (rn(), se(
                a,
                mb,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), qa()) : se(
                a,
                mb,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && Sy(a), i & 512 && To(a, a.return);
          break;
        case 3:
          if (t = fn(), Xn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              se(
                a,
                qp,
                i,
                o
              );
            } catch (d) {
              Re(a, a.return, d);
            }
          }
          e.effectDuration += ci(t);
          break;
        case 27:
          t === null && i & 4 && Ay(a);
        case 26:
        case 5:
          Xn(e, a), t === null && i & 4 && kp(a), i & 512 && To(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = fn(), Xn(e, a), e = a.stateNode, e.effectDuration += ac(i);
            try {
              se(
                a,
                Ty,
                a,
                t,
                Uv,
                e.effectDuration
              );
            } catch (d) {
              Re(a, a.return, d);
            }
          } else Xn(e, a);
          break;
        case 13:
          Xn(e, a), i & 4 && Eo(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = fr.bind(
            null,
            a
          ), xo(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || Gc, !i) {
            t = t !== null && t.memoizedState !== null || sl, o = Gc;
            var f = sl;
            Gc = i, (sl = t) && !f ? Qn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Xn(e, a), Gc = o, sl = f;
          }
          break;
        case 30:
          break;
        default:
          Xn(e, a);
      }
    }
    function Dy(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Dy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ln(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Cu(e, t, a) {
      for (a = a.child; a !== null; )
        mc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function mc(e, t, a) {
      if (Hl && typeof Hl.onCommitFiberUnmount == "function")
        try {
          Hl.onCommitFiberUnmount(Ci, a);
        } catch (f) {
          ma || (ma = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          sl || Ka(a, t), Cu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          sl || Ka(a, t);
          var i = Tl, o = en;
          In(a.type) && (Tl = a.stateNode, en = !1), Cu(
            e,
            t,
            a
          ), se(
            a,
            wo,
            a.stateNode
          ), Tl = i, en = o;
          break;
        case 5:
          sl || Ka(a, t);
        case 6:
          if (i = Tl, o = en, Tl = null, Cu(
            e,
            t,
            a
          ), Tl = i, en = o, Tl !== null)
            if (en)
              try {
                se(
                  a,
                  Co,
                  Tl,
                  a.stateNode
                );
              } catch (f) {
                Re(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                se(
                  a,
                  $a,
                  Tl,
                  a.stateNode
                );
              } catch (f) {
                Re(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          Tl !== null && (en ? (e = Tl, _o(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Mc(e)) : _o(Tl, a.stateNode));
          break;
        case 4:
          i = Tl, o = en, Tl = a.stateNode.containerInfo, en = !0, Cu(
            e,
            t,
            a
          ), Tl = i, en = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          sl || dc(
            xa,
            a,
            t
          ), sl || Fs(
            a,
            t,
            ea
          ), Cu(
            e,
            t,
            a
          );
          break;
        case 1:
          sl || (Ka(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && Is(
            a,
            t,
            i
          )), Cu(
            e,
            t,
            a
          );
          break;
        case 21:
          Cu(
            e,
            t,
            a
          );
          break;
        case 22:
          sl = (i = sl) || a.memoizedState !== null, Cu(
            e,
            t,
            a
          ), sl = i;
          break;
        default:
          Cu(
            e,
            t,
            a
          );
      }
    }
    function Eo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          se(
            t,
            za,
            e
          );
        } catch (a) {
          Re(t, t.return, a);
        }
    }
    function ed(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Kb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Kb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function pc(e, t) {
      var a = ed(e);
      t.forEach(function(i) {
        var o = Ti.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Wt)
            if (dh !== null && hh !== null)
              Mo(hh, dh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function jl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (In(h.type)) {
                  Tl = h.stateNode, en = !1;
                  break e;
                }
                break;
              case 5:
                Tl = h.stateNode, en = !1;
                break e;
              case 3:
              case 4:
                Tl = h.stateNode.containerInfo, en = !0;
                break e;
            }
            h = h.return;
          }
          if (Tl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          mc(o, f, d), Tl = null, en = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          zy(t, e), t = t.sibling;
    }
    function zy(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          jl(t, e), ra(e), i & 4 && (dc(
            xa | su,
            e,
            e.return
          ), sc(xa | su, e), Fs(
            e,
            e.return,
            ea | su
          ));
          break;
        case 1:
          jl(t, e), ra(e), i & 512 && (sl || a === null || Ka(a, a.return)), i & 64 && Gc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Ju;
          if (jl(t, e), ra(e), i & 512 && (sl || a === null || Ka(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Ko] || o[Vl] || o.namespaceURI === Wo || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Jt(o, i, a), o[Vl] = e, D(o), i = o;
                        break e;
                      case "link":
                        var f = um(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Jt(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = um(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], Z(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Jt(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Vl] = e, D(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  im(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Rd(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? im(
                o,
                e.type,
                e.stateNode
              ) : Rd(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Ey(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          jl(t, e), ra(e), i & 512 && (sl || a === null || Ka(a, a.return)), a !== null && i & 4 && Ey(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (jl(t, e), ra(e), i & 512 && (sl || a === null || Ka(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              se(e, wu, t);
            } catch (w) {
              Re(e, e.return, w);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Ey(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (n0 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (jl(t, e), ra(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              se(
                e,
                Ac,
                t,
                a,
                i
              );
            } catch (w) {
              Re(e, e.return, w);
            }
          }
          break;
        case 3:
          if (o = fn(), tg = null, f = Ju, Ju = sr(t.containerInfo), jl(t, e), Ju = f, ra(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              se(
                e,
                em,
                t.containerInfo
              );
            } catch (w) {
              Re(e, e.return, w);
            }
          n0 && (n0 = !1, vc(e)), t.effectDuration += ci(o);
          break;
        case 4:
          i = Ju, Ju = sr(
            e.stateNode.containerInfo
          ), jl(t, e), ra(e), Ju = i;
          break;
        case 12:
          i = fn(), jl(t, e), ra(e), e.stateNode.effectDuration += ac(i);
          break;
        case 13:
          jl(t, e), ra(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (r0 = lu()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, pc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, v = Gc, b = sl;
          if (Gc = v || o, sl = b || h, jl(t, e), sl = b, Gc = v, ra(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~Ov : t._visibility | Ov, o && (a === null || h || Gc || sl || Gl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? se(h, ha, f) : se(
                      h,
                      Iy,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (w) {
                    Re(h, h.return, w);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? se(h, Fy, d) : se(
                      h,
                      Sd,
                      d,
                      h.memoizedProps
                    );
                  } catch (w) {
                    Re(h, h.return, w);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, pc(e, a))));
          break;
        case 19:
          jl(t, e), ra(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, pc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          jl(t, e), ra(e);
      }
    }
    function ra(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          se(e, $p, e);
        } catch (a) {
          Re(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function vc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          vc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Xn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Oy(e, t.alternate, t), t = t.sibling;
    }
    function Da(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Fs(
            e,
            e.return,
            ea
          ), Gl(e);
          break;
        case 1:
          Ka(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Is(
            e,
            e.return,
            t
          ), Gl(e);
          break;
        case 27:
          se(
            e,
            wo,
            e.stateNode
          );
        case 26:
        case 5:
          Ka(e, e.return), Gl(e);
          break;
        case 22:
          e.memoizedState === null && Gl(e);
          break;
        case 30:
          Gl(e);
          break;
        default:
          Gl(e);
      }
    }
    function Gl(e) {
      for (e = e.child; e !== null; )
        Da(e), e = e.sibling;
    }
    function _u(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Qn(
            e,
            a,
            i
          ), gy(a, ea);
          break;
        case 1:
          if (Qn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && se(
            a,
            Fg,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              se(
                a,
                co,
                t,
                e
              );
            } catch (f) {
              Re(a, a.return, f);
            }
          }
          i && o & 64 && Sy(a), To(a, a.return);
          break;
        case 27:
          Ay(a);
        case 26:
        case 5:
          Qn(
            e,
            a,
            i
          ), i && t === null && o & 4 && kp(a), To(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = fn(), Qn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += ac(o);
            try {
              se(
                a,
                Ty,
                a,
                t,
                Uv,
                i.effectDuration
              );
            } catch (f) {
              Re(a, a.return, f);
            }
          } else
            Qn(
              e,
              a,
              i
            );
          break;
        case 13:
          Qn(
            e,
            a,
            i
          ), i && o & 4 && Eo(e, a);
          break;
        case 22:
          a.memoizedState === null && Qn(
            e,
            a,
            i
          ), To(a, a.return);
          break;
        case 30:
          break;
        default:
          Qn(
            e,
            a,
            i
          );
      }
    }
    function Qn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        _u(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Zn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && lc(e), a != null && _n(a));
    }
    function vn(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (lc(t), e != null && _n(e));
    }
    function Dt(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          lr(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function lr(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Dt(
            e,
            t,
            a,
            i
          ), o & 2048 && by(t, wl | su);
          break;
        case 1:
          Dt(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = fn();
          Dt(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (lc(t), a != null && _n(a))), e.passiveEffectDuration += ci(f);
          break;
        case 12:
          if (o & 2048) {
            o = fn(), Dt(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += ac(o);
            try {
              se(
                t,
                Jp,
                t,
                t.alternate,
                Uv,
                e.passiveEffectDuration
              );
            } catch (h) {
              Re(t, t.return, h);
            }
          } else
            Dt(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          Dt(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & Nc ? Dt(
            e,
            t,
            a,
            i
          ) : Ro(
            e,
            t
          ) : f._visibility & Nc ? Dt(
            e,
            t,
            a,
            i
          ) : (f._visibility |= Nc, gi(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Zn(d, t);
          break;
        case 24:
          Dt(
            e,
            t,
            a,
            i
          ), o & 2048 && vn(t.alternate, t);
          break;
        default:
          Dt(
            e,
            t,
            a,
            i
          );
      }
    }
    function gi(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        td(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function td(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          gi(
            e,
            t,
            a,
            i,
            o
          ), by(t, wl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & Nc ? gi(
            e,
            t,
            a,
            i,
            o
          ) : Ro(
            e,
            t
          ) : (d._visibility |= Nc, gi(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && Zn(
            t.alternate,
            t
          );
          break;
        case 24:
          gi(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && vn(t.alternate, t);
          break;
        default:
          gi(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function Ro(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              Ro(
                a,
                i
              ), o & 2048 && Zn(
                i.alternate,
                i
              );
              break;
            case 24:
              Ro(
                a,
                i
              ), o & 2048 && vn(
                i.alternate,
                i
              );
              break;
            default:
              Ro(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function gc(e) {
      if (e.subtreeFlags & $m)
        for (e = e.child; e !== null; )
          bi(e), e = e.sibling;
    }
    function bi(e) {
      switch (e.tag) {
        case 26:
          gc(e), e.flags & $m && e.memoizedState !== null && iv(
            Ju,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          gc(e);
          break;
        case 3:
        case 4:
          var t = Ju;
          Ju = sr(
            e.stateNode.containerInfo
          ), gc(e), Ju = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = $m, $m = 16777216, gc(e), $m = t) : gc(e));
          break;
        default:
          gc(e);
      }
    }
    function ar(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Ao(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Ql = i, Uy(
              i,
              e
            );
          }
        ar(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          My(e), e = e.sibling;
    }
    function My(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ao(e), e.flags & 2048 && er(
            e,
            e.return,
            wl | su
          );
          break;
        case 3:
          var t = fn();
          Ao(e), e.stateNode.passiveEffectDuration += ci(t);
          break;
        case 12:
          t = fn(), Ao(e), e.stateNode.passiveEffectDuration += ac(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & Nc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~Nc, nr(e)) : Ao(e);
          break;
        default:
          Ao(e);
      }
    }
    function nr(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Ql = i, Uy(
              i,
              e
            );
          }
        ar(e);
      }
      for (e = e.child; e !== null; )
        ur(e), e = e.sibling;
    }
    function ur(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          er(
            e,
            e.return,
            wl
          ), nr(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & Nc && (t._visibility &= ~Nc, nr(e));
          break;
        default:
          nr(e);
      }
    }
    function Uy(e, t) {
      for (; Ql !== null; ) {
        var a = Ql, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            er(
              i,
              t,
              wl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && lc(i));
            break;
          case 24:
            _n(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Ql = i;
        else
          e: for (a = e; Ql !== null; ) {
            i = Ql;
            var o = i.sibling, f = i.return;
            if (Dy(i), i === a) {
              Ql = null;
              break e;
            }
            if (o !== null) {
              o.return = f, Ql = o;
              break e;
            }
            Ql = f;
          }
      }
    }
    function Cy() {
      US.forEach(function(e) {
        return e();
      });
    }
    function _y() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || Y.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function sa(e) {
      if ((Rt & Na) !== Tn && tt !== 0)
        return tt & -tt;
      var t = Y.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Yr, e !== 0 ? e : Gy()) : yf();
    }
    function Wp() {
      Rn === 0 && (Rn = (tt & 536870912) === 0 || ht ? Qe() : 536870912);
      var e = hu.current;
      return e !== null && (e.flags |= 32), Rn;
    }
    function Zt(e, t, a) {
      if (gh && console.error("useInsertionEffect must not schedule updates."), m0 && (Xv = !0), (e === Ht && (zt === Vr || zt === Xr) || e.cancelPendingCommit !== null) && (Sc(e, 0), Hu(
        e,
        tt,
        Rn,
        !1
      )), pu(e, a), (Rt & Na) !== 0 && e === Ht) {
        if (va)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = et && fe(et) || "Unknown", l1.has(e) || (l1.add(e), t = fe(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              t1 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), t1 = !0);
          }
      } else
        Wt && Ba(e, t, a), ev(t), e === Ht && ((Rt & Na) === Tn && (af |= a), al === Lr && Hu(
          e,
          tt,
          Rn,
          !1
        )), Ja(e);
    }
    function fl(e, t, a) {
      if ((Rt & (Na | ku)) !== Tn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || $u(e, t), o = i ? xy(e, t) : ud(e, t, !0), f = i;
      do {
        if (o === Lc) {
          ph && !i && Hu(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !Fp(a)) {
            o = ud(e, t, !1), f = !1;
            continue;
          }
          if (o === yh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = tp;
                var v = o.current.memoizedState.isDehydrated;
                if (v && (Sc(
                  o,
                  h
                ).flags |= 256), h = ud(
                  o,
                  h,
                  !1
                ), h !== yh) {
                  if (o0 && !v) {
                    o.errorRecoveryDisabledLanes |= f, af |= f, o = Lr;
                    break e;
                  }
                  o = wa, wa = d, o !== null && (wa === null ? wa = o : wa.push.apply(
                    wa,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== yh) continue;
            }
          }
          if (o === Fm) {
            Sc(e, 0), Hu(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Lc:
              case Fm:
                throw Error("Root did not complete. This is a bug in React.");
              case Lr:
                if ((t & 4194048) !== t) break;
              case Gv:
                Hu(
                  i,
                  t,
                  Rn,
                  !tf
                );
                break e;
              case yh:
                wa = null;
                break;
              case u0:
              case Jb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (Y.actQueue !== null)
              rd(
                i,
                a,
                t,
                wa,
                lp,
                Lv,
                Rn,
                af,
                Qr
              );
            else {
              if ((t & 62914560) === t && (f = r0 + $b - lu(), 10 < f)) {
                if (Hu(
                  i,
                  t,
                  Rn,
                  !tf
                ), hl(i, 0, !0) !== 0) break e;
                i.timeoutHandle = r1(
                  vl.bind(
                    null,
                    i,
                    a,
                    wa,
                    lp,
                    Lv,
                    t,
                    Rn,
                    af,
                    Qr,
                    tf,
                    o,
                    xS,
                    F0,
                    0
                  ),
                  f
                );
                break e;
              }
              vl(
                i,
                a,
                wa,
                lp,
                Lv,
                t,
                Rn,
                af,
                Qr,
                tf,
                o,
                _S,
                F0,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Ja(e);
    }
    function vl(e, t, a, i, o, f, d, h, v, b, w, L, H, V) {
      if (e.timeoutHandle = $r, L = t.subtreeFlags, (L & 8192 || (L & 16785408) === 16785408) && (op = { stylesheets: null, count: 0, unsuspend: uv }, bi(t), L = cv(), L !== null)) {
        e.cancelPendingCommit = L(
          rd.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            v,
            w,
            HS,
            H,
            V
          )
        ), Hu(
          e,
          f,
          d,
          !b
        );
        return;
      }
      rd(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        v
      );
    }
    function Fp(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!_a(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
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
    function Hu(e, t, a, i) {
      t &= ~f0, t &= ~af, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Ll(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && hf(e, a, t);
    }
    function bc() {
      return (Rt & (Na | ku)) === Tn ? (Tc(0), !1) : !0;
    }
    function ld() {
      if (et !== null) {
        if (zt === tn)
          var e = et.return;
        else
          e = et, bs(), hn(e), ch = null, Jm = 0, e = et;
        for (; e !== null; )
          vy(e.alternate, e), e = e.return;
        et = null;
      }
    }
    function Sc(e, t) {
      var a = e.timeoutHandle;
      a !== $r && (e.timeoutHandle = $r, KS(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), ld(), Ht = e, et = a = Un(e.current, null), tt = t, zt = tn, En = null, tf = !1, ph = $u(e, t), o0 = !1, al = Lc, Qr = Rn = f0 = af = lf = 0, wa = tp = null, Lv = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Ll(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return ji = t, Df(), t = $0(), 1e3 < t - k0 && (Y.recentlyCreatedOwnerStacks = 0, k0 = t), Zu.discardPendingWarnings(), a;
    }
    function ir(e, t) {
      Ne = null, Y.H = qv, Y.getCurrentStack = null, va = !1, Ca = null, t === Xm || t === xv ? (t = ey(), zt = Pm) : t === eb ? (t = ey(), zt = kb) : zt = t === qb ? c0 : t !== null && typeof t == "object" && typeof t.then == "function" ? mh : Im, En = t;
      var a = et;
      if (a === null)
        al = Fm, So(
          e,
          Ea(t, e.current)
        );
      else
        switch (a.mode & Pl && Ru(a), la(), zt) {
          case Im:
            ce !== null && typeof ce.markComponentErrored == "function" && ce.markComponentErrored(
              a,
              t,
              tt
            );
            break;
          case Vr:
          case Xr:
          case Pm:
          case mh:
          case ep:
            ce !== null && typeof ce.markComponentSuspended == "function" && ce.markComponentSuspended(
              a,
              t,
              tt
            );
        }
    }
    function ad() {
      var e = Y.H;
      return Y.H = qv, e === null ? qv : e;
    }
    function Hy() {
      var e = Y.A;
      return Y.A = MS, e;
    }
    function nd() {
      al = Lr, tf || (tt & 4194048) !== tt && hu.current !== null || (ph = !0), (lf & 134217727) === 0 && (af & 134217727) === 0 || Ht === null || Hu(
        Ht,
        tt,
        Rn,
        !1
      );
    }
    function ud(e, t, a) {
      var i = Rt;
      Rt |= Na;
      var o = ad(), f = Hy();
      if (Ht !== e || tt !== t) {
        if (Wt) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Mo(e, tt), d.clear()), Rl(e, t);
        }
        lp = null, Sc(e, t);
      }
      An(t), t = !1, d = al;
      e: do
        try {
          if (zt !== tn && et !== null) {
            var h = et, v = En;
            switch (zt) {
              case c0:
                ld(), d = Gv;
                break e;
              case Pm:
              case Vr:
              case Xr:
              case mh:
                hu.current === null && (t = !0);
                var b = zt;
                if (zt = tn, En = null, Si(e, h, v, b), a && ph) {
                  d = Lc;
                  break e;
                }
                break;
              default:
                b = zt, zt = tn, En = null, Si(e, h, v, b);
            }
          }
          id(), d = al;
          break;
        } catch (w) {
          ir(e, w);
        }
      while (!0);
      return t && e.shellSuspendCounter++, bs(), Rt = i, Y.H = o, Y.A = f, Gi(), et === null && (Ht = null, tt = 0, Df()), d;
    }
    function id() {
      for (; et !== null; ) wy(et);
    }
    function xy(e, t) {
      var a = Rt;
      Rt |= Na;
      var i = ad(), o = Hy();
      if (Ht !== e || tt !== t) {
        if (Wt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Mo(e, tt), f.clear()), Rl(e, t);
        }
        lp = null, Vv = lu() + Wb, Sc(e, t);
      } else
        ph = $u(
          e,
          t
        );
      An(t);
      e: do
        try {
          if (zt !== tn && et !== null)
            t: switch (t = et, f = En, zt) {
              case Im:
                zt = tn, En = null, Si(
                  e,
                  t,
                  f,
                  Im
                );
                break;
              case Vr:
              case Xr:
                if (Ph(f)) {
                  zt = tn, En = null, cd(t);
                  break;
                }
                t = function() {
                  zt !== Vr && zt !== Xr || Ht !== e || (zt = ep), Ja(e);
                }, f.then(t, t);
                break e;
              case Pm:
                zt = ep;
                break e;
              case kb:
                zt = i0;
                break e;
              case ep:
                Ph(f) ? (zt = tn, En = null, cd(t)) : (zt = tn, En = null, Si(
                  e,
                  t,
                  f,
                  ep
                ));
                break;
              case i0:
                var d = null;
                switch (et.tag) {
                  case 26:
                    d = et.memoizedState;
                  case 5:
                  case 27:
                    var h = et;
                    if (!d || dr(d)) {
                      zt = tn, En = null;
                      var v = h.sibling;
                      if (v !== null) et = v;
                      else {
                        var b = h.return;
                        b !== null ? (et = b, cr(b)) : et = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                zt = tn, En = null, Si(
                  e,
                  t,
                  f,
                  i0
                );
                break;
              case mh:
                zt = tn, En = null, Si(
                  e,
                  t,
                  f,
                  mh
                );
                break;
              case c0:
                ld(), al = Gv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          Y.actQueue !== null ? id() : Ny();
          break;
        } catch (w) {
          ir(e, w);
        }
      while (!0);
      return bs(), Y.H = i, Y.A = o, Rt = a, et !== null ? (ce !== null && typeof ce.markRenderYielded == "function" && ce.markRenderYielded(), Lc) : (Gi(), Ht = null, tt = 0, Df(), al);
    }
    function Ny() {
      for (; et !== null && !yv(); )
        wy(et);
    }
    function wy(e) {
      var t = e.alternate;
      (e.mode & Pl) !== qt ? (Ss(e), t = se(
        e,
        Ws,
        t,
        e,
        ji
      ), Ru(e)) : t = se(
        e,
        Ws,
        t,
        e,
        ji
      ), e.memoizedProps = e.pendingProps, t === null ? cr(e) : et = t;
    }
    function cd(e) {
      var t = se(e, od, e);
      e.memoizedProps = e.pendingProps, t === null ? cr(e) : et = t;
    }
    function od(e) {
      var t = e.alternate, a = (e.mode & Pl) !== qt;
      switch (a && Ss(e), e.tag) {
        case 15:
        case 0:
          t = dy(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            tt
          );
          break;
        case 11:
          t = dy(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            tt
          );
          break;
        case 5:
          hn(e);
        default:
          vy(t, e), e = et = Gh(e, ji), t = Ws(t, e, ji);
      }
      return a && Ru(e), t;
    }
    function Si(e, t, a, i) {
      bs(), hn(t), ch = null, Jm = 0;
      var o = t.return;
      try {
        if (Jf(
          e,
          o,
          t,
          a,
          tt
        )) {
          al = Fm, So(
            e,
            Ea(a, e.current)
          ), et = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw et = o, f;
        al = Fm, So(
          e,
          Ea(a, e.current)
        ), et = null;
        return;
      }
      t.flags & 32768 ? (ht || i === Im ? e = !0 : ph || (tt & 536870912) !== 0 ? e = !1 : (tf = e = !0, (i === Vr || i === Xr || i === Pm || i === mh) && (i = hu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), fd(t, e)) : cr(t);
    }
    function cr(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          fd(
            t,
            tf
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, Ss(t), a = se(
          t,
          Xp,
          a,
          t,
          ji
        ), (t.mode & Pl) !== qt && nc(t), a !== null) {
          et = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          et = t;
          return;
        }
        et = t = e;
      } while (t !== null);
      al === Lc && (al = Jb);
    }
    function fd(e, t) {
      do {
        var a = Qp(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, et = a;
          return;
        }
        if ((e.mode & Pl) !== qt) {
          nc(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          et = e;
          return;
        }
        et = e = a;
      } while (e !== null);
      al = Gv, et = null;
    }
    function rd(e, t, a, i, o, f, d, h, v) {
      e.cancelPendingCommit = null;
      do
        Oo();
      while (ta !== Zr);
      if (Zu.flushLegacyContextWarning(), Zu.flushPendingUnsafeLifecycleWarnings(), (Rt & (Na | ku)) !== Tn)
        throw Error("Should not already be working.");
      if (ce !== null && typeof ce.markCommitStarted == "function" && ce.markCommitStarted(a), t === null) Ue();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= qg, Pr(
          e,
          a,
          f,
          d,
          h,
          v
        ), e === Ht && (et = Ht = null, tt = 0), vh = t, uf = e, cf = a, d0 = f, h0 = o, e1 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, jy(Xo, function() {
          return or(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Uv = lh(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = Y.T, Y.T = null, o = De.p, De.p = xl, d = Rt, Rt |= ku;
          try {
            Ps(e, t, a);
          } finally {
            Rt = d, De.p = o, Y.T = i;
          }
        }
        ta = Fb, Kn(), sd(), Ip();
      }
    }
    function Kn() {
      if (ta === Fb) {
        ta = Zr;
        var e = uf, t = vh, a = cf, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = Y.T, Y.T = null;
          var o = De.p;
          De.p = xl;
          var f = Rt;
          Rt |= ku;
          try {
            dh = a, hh = e, zy(t, e), hh = dh = null, a = A0;
            var d = Up(e.containerInfo), h = a.focusedElem, v = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Mp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (v !== null && Bh(h)) {
                var b = v.start, w = v.end;
                if (w === void 0 && (w = b), "selectionStart" in h)
                  h.selectionStart = b, h.selectionEnd = Math.min(
                    w,
                    h.value.length
                  );
                else {
                  var L = h.ownerDocument || document, H = L && L.defaultView || window;
                  if (H.getSelection) {
                    var V = H.getSelection(), de = h.textContent.length, ze = Math.min(
                      v.start,
                      de
                    ), xt = v.end === void 0 ? ze : Math.min(v.end, de);
                    !V.extend && ze > xt && (d = xt, xt = ze, ze = d);
                    var ut = wh(
                      h,
                      ze
                    ), T = wh(
                      h,
                      xt
                    );
                    if (ut && T && (V.rangeCount !== 1 || V.anchorNode !== ut.node || V.anchorOffset !== ut.offset || V.focusNode !== T.node || V.focusOffset !== T.offset)) {
                      var E = L.createRange();
                      E.setStart(ut.node, ut.offset), V.removeAllRanges(), ze > xt ? (V.addRange(E), V.extend(T.node, T.offset)) : (E.setEnd(T.node, T.offset), V.addRange(E));
                    }
                  }
                }
              }
              for (L = [], V = h; V = V.parentNode; )
                V.nodeType === 1 && L.push({
                  element: V,
                  left: V.scrollLeft,
                  top: V.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < L.length; h++) {
                var R = L[h];
                R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
              }
            }
            ng = !!R0, A0 = R0 = null;
          } finally {
            Rt = f, De.p = o, Y.T = i;
          }
        }
        e.current = t, ta = Ib;
      }
    }
    function sd() {
      if (ta === Ib) {
        ta = Zr;
        var e = uf, t = vh, a = cf, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = Y.T, Y.T = null;
          var o = De.p;
          De.p = xl;
          var f = Rt;
          Rt |= ku;
          try {
            ce !== null && typeof ce.markLayoutEffectsStarted == "function" && ce.markLayoutEffectsStarted(a), dh = a, hh = e, Oy(
              e,
              t.alternate,
              t
            ), hh = dh = null, ce !== null && typeof ce.markLayoutEffectsStopped == "function" && ce.markLayoutEffectsStopped();
          } finally {
            Rt = f, De.p = o, Y.T = i;
          }
        }
        ta = Pb;
      }
    }
    function Ip() {
      if (ta === NS || ta === Pb) {
        ta = Zr, zg();
        var e = uf, t = vh, a = cf, i = e1, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? ta = s0 : (ta = Zr, vh = uf = null, Jn(e, e.pendingLanes), Kr = 0, np = null);
        var f = e.pendingLanes;
        if (f === 0 && (nf = null), o || zo(e), o = kc(a), t = t.stateNode, Hl && typeof Hl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case xl:
                var h = Nd;
                break;
              case Sn:
                h = Ar;
                break;
              case Lu:
                h = Xo;
                break;
              case qd:
                h = Or;
                break;
              default:
                h = Xo;
            }
            Hl.onCommitFiberRoot(
              Ci,
              t,
              h,
              d
            );
          } catch (L) {
            ma || (ma = !0, console.error(
              "React instrumentation encountered an error: %s",
              L
            ));
          }
        if (Wt && e.memoizedUpdaters.clear(), Cy(), i !== null) {
          d = Y.T, h = De.p, De.p = xl, Y.T = null;
          try {
            var v = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var b = i[t], w = Pp(b.stack);
              se(
                b.source,
                v,
                b.value,
                w
              );
            }
          } finally {
            Y.T = d, De.p = h;
          }
        }
        (cf & 3) !== 0 && Oo(), Ja(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (_v = !0, e === y0 ? ap++ : (ap = 0, y0 = e)) : ap = 0, Tc(0), Ue();
      }
    }
    function Pp(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Jn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, _n(t)));
    }
    function Oo(e) {
      return Kn(), sd(), Ip(), or();
    }
    function or() {
      if (ta !== s0) return !1;
      var e = uf, t = d0;
      d0 = 0;
      var a = kc(cf), i = Lu > a ? Lu : a;
      a = Y.T;
      var o = De.p;
      try {
        De.p = i, Y.T = null, i = h0, h0 = null;
        var f = uf, d = cf;
        if (ta = Zr, vh = uf = null, cf = 0, (Rt & (Na | ku)) !== Tn)
          throw Error("Cannot flush passive effects while already rendering.");
        m0 = !0, Xv = !1, ce !== null && typeof ce.markPassiveEffectsStarted == "function" && ce.markPassiveEffectsStarted(d);
        var h = Rt;
        if (Rt |= ku, My(f.current), lr(
          f,
          f.current,
          d,
          i
        ), ce !== null && typeof ce.markPassiveEffectsStopped == "function" && ce.markPassiveEffectsStopped(), zo(f), Rt = h, Tc(0, !1), Xv ? f === np ? Kr++ : (Kr = 0, np = f) : Kr = 0, Xv = m0 = !1, Hl && typeof Hl.onPostCommitFiberRoot == "function")
          try {
            Hl.onPostCommitFiberRoot(Ci, f);
          } catch (b) {
            ma || (ma = !0, console.error(
              "React instrumentation encountered an error: %s",
              b
            ));
          }
        var v = f.current.stateNode;
        return v.effectDuration = 0, v.passiveEffectDuration = 0, !0;
      } finally {
        De.p = o, Y.T = a, Jn(e, t);
      }
    }
    function Do(e, t, a) {
      t = Ea(a, t), t = ql(e.stateNode, t, 2), e = sn(e, t, 2), e !== null && (pu(e, 2), Ja(e));
    }
    function Re(e, t, a) {
      if (gh = !1, e.tag === 3)
        Do(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Do(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (nf === null || !nf.has(i))) {
              e = Ea(a, e), a = Qt(2), i = sn(t, a, 2), i !== null && (Kf(
                a,
                i,
                t,
                e
              ), pu(i, 2), Ja(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function By(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new CS();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (o0 = !0, o.add(a), i = Sg.bind(null, e, t, a), Wt && Mo(e, a), t.then(i, i));
    }
    function Sg(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, _y() && Y.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Ht === e && (tt & a) === a && (al === Lr || al === u0 && (tt & 62914560) === tt && lu() - r0 < $b ? (Rt & Na) === Tn && Sc(e, 0) : f0 |= a, Qr === tt && (Qr = 0)), Ja(e);
    }
    function Yy(e, t) {
      t === 0 && (t = Dn()), e = na(e, t), e !== null && (pu(e, t), Ja(e));
    }
    function fr(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Yy(e, a);
    }
    function Ti(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Yy(e, a);
    }
    function dd(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === qo;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && se(
            o,
            qy,
            i,
            o,
            (o.mode & Z0) === qt
          ) : dd(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? se(
            o,
            qy,
            i,
            o
          ) : o.subtreeFlags & 67108864 && se(
            o,
            dd,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function qy(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      ie(!0);
      try {
        Da(t), a && ur(t), _u(e, t.alternate, t, !1), a && td(e, t, 0, null, !1, 0);
      } finally {
        ie(!1);
      }
    }
    function zo(e) {
      var t = !0;
      e.current.mode & (ga | Qu) || (t = !1), dd(
        e,
        e.current,
        t
      );
    }
    function gn(e) {
      if ((Rt & Na) === Tn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = fe(e) || "ReactComponent", Qv !== null) {
            if (Qv.has(t)) return;
            Qv.add(t);
          } else Qv = /* @__PURE__ */ new Set([t]);
          se(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Mo(e, t) {
      Wt && e.memoizedUpdaters.forEach(function(a) {
        Ba(e, a, t);
      });
    }
    function jy(e, t) {
      var a = Y.actQueue;
      return a !== null ? (a.push(t), YS) : xd(e, t);
    }
    function ev(e) {
      _y() && Y.actQueue === null && se(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          fe(e)
        );
      });
    }
    function Ja(e) {
      e !== bh && e.next === null && (bh === null ? Zv = bh = e : bh = bh.next = e), Kv = !0, Y.actQueue !== null ? v0 || (v0 = !0, rl()) : p0 || (p0 = !0, rl());
    }
    function Tc(e, t) {
      if (!g0 && Kv) {
        g0 = !0;
        do
          for (var a = !1, i = Zv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Ll(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, md(i, f));
            } else
              f = tt, f = hl(
                i,
                i === Ht ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== $r
              ), (f & 3) === 0 || $u(i, f) || (a = !0, md(i, f));
            i = i.next;
          }
        while (a);
        g0 = !1;
      }
    }
    function hd() {
      yd();
    }
    function yd() {
      Kv = v0 = p0 = !1;
      var e = 0;
      Jr !== 0 && (Uo() && (e = Jr), Jr = 0);
      for (var t = lu(), a = null, i = Zv; i !== null; ) {
        var o = i.next, f = kn(i, t);
        f === 0 ? (i.next = null, a === null ? Zv = o : a.next = o, o === null && (bh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Kv = !0)), i = o;
      }
      Tc(e);
    }
    function kn(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Ll(f), h = 1 << d, v = o[d];
        v === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Ir(h, t)) : v <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Ht, a = tt, a = hl(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== $r
      ), i = e.callbackNode, a === 0 || e === t && (zt === Vr || zt === Xr) || e.cancelPendingCommit !== null)
        return i !== null && pd(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || $u(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || Y.actQueue !== null && i !== b0)
          pd(i);
        else return t;
        switch (kc(a)) {
          case xl:
          case Sn:
            a = Ar;
            break;
          case Lu:
            a = Xo;
            break;
          case qd:
            a = Or;
            break;
          default:
            a = Xo;
        }
        return i = Kt.bind(null, e), Y.actQueue !== null ? (Y.actQueue.push(i), a = b0) : a = xd(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && pd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Kt(e, t) {
      if (_v = Cv = !1, ta !== Zr && ta !== s0)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Oo() && e.callbackNode !== a)
        return null;
      var i = tt;
      return i = hl(
        e,
        e === Ht ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== $r
      ), i === 0 ? null : (fl(
        e,
        i,
        t
      ), kn(e, lu()), e.callbackNode != null && e.callbackNode === a ? Kt.bind(null, e) : null);
    }
    function md(e, t) {
      if (Oo()) return null;
      Cv = _v, _v = !1, fl(e, t, !0);
    }
    function pd(e) {
      e !== b0 && e !== null && Dg(e);
    }
    function rl() {
      Y.actQueue !== null && Y.actQueue.push(function() {
        return yd(), null;
      }), JS(function() {
        (Rt & (Na | ku)) !== Tn ? xd(
          Nd,
          hd
        ) : yd();
      });
    }
    function Gy() {
      return Jr === 0 && (Jr = Qe()), Jr;
    }
    function Ly(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (Z(e, "action"), to("" + e));
    }
    function Vy(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Bt(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Ly(
          (o[pa] || null).action
        ), d = i.submitter;
        d && (t = (t = d[pa] || null) ? Ly(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new be(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Jr !== 0) {
                    var v = d ? Vy(
                      o,
                      d
                    ) : new FormData(o), b = {
                      pending: !0,
                      data: v,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(b), oc(
                      a,
                      b,
                      null,
                      v
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), v = d ? Vy(
                    o,
                    d
                  ) : new FormData(o), b = {
                    pending: !0,
                    data: v,
                    method: o.method,
                    action: f
                  }, Object.freeze(b), oc(
                    a,
                    b,
                    f,
                    v
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function Ml(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        e0(i);
      }
      e.currentTarget = null;
    }
    function $n(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], v = h.instance, b = h.currentTarget;
              if (h = h.listener, v !== o && f.isPropagationStopped())
                break e;
              v !== null ? se(
                v,
                Ml,
                f,
                h,
                b
              ) : Ml(f, h, b), o = v;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], v = h.instance, b = h.currentTarget, h = h.listener, v !== o && f.isPropagationStopped())
                break e;
              v !== null ? se(
                v,
                Ml,
                f,
                h,
                b
              ) : Ml(f, h, b), o = v;
            }
        }
      }
    }
    function We(e, t) {
      S0.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[mm];
      a === void 0 && (a = t[mm] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (gd(t, e, 2, !1), a.add(i));
    }
    function vd(e, t, a) {
      S0.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), gd(
        a,
        e,
        i,
        t
      );
    }
    function Xy(e) {
      if (!e[Jv]) {
        e[Jv] = !0, pv.forEach(function(a) {
          a !== "selectionchange" && (S0.has(a) || vd(a, !1, e), vd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Jv] || (t[Jv] = !0, vd("selectionchange", !1, t));
      }
    }
    function gd(e, t, a, i) {
      switch (Ud(t)) {
        case xl:
          var o = Rg;
          break;
        case Sn:
          o = Md;
          break;
        default:
          o = Oi;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !_ || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function $l(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var v = d.tag;
                if ((v === 3 || v === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = aa(h), d === null) return;
              if (v = d.tag, v === 5 || v === 6 || v === 26 || v === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      fs(function() {
        var b = f, w = ki(a), L = [];
        e: {
          var H = Q0.get(e);
          if (H !== void 0) {
            var V = be, de = e;
            switch (e) {
              case "keypress":
                if (lo(a) === 0) break e;
              case "keydown":
              case "keyup":
                V = eS;
                break;
              case "focusin":
                de = "focus", V = ot;
                break;
              case "focusout":
                de = "blur", V = ot;
                break;
              case "beforeblur":
              case "afterblur":
                V = ot;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                V = Je;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                V = Ae;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                V = aS;
                break;
              case G0:
              case L0:
              case V0:
                V = _g;
                break;
              case X0:
                V = uS;
                break;
              case "scroll":
              case "scrollend":
                V = z;
                break;
              case "wheel":
                V = cS;
                break;
              case "copy":
              case "cut":
              case "paste":
                V = J1;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                V = H0;
                break;
              case "toggle":
              case "beforetoggle":
                V = fS;
            }
            var ze = (t & 4) !== 0, xt = !ze && (e === "scroll" || e === "scrollend"), ut = ze ? H !== null ? H + "Capture" : null : H;
            ze = [];
            for (var T = b, E; T !== null; ) {
              var R = T;
              if (E = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || E === null || ut === null || (R = bu(T, ut), R != null && ze.push(
                Wl(
                  T,
                  R,
                  E
                )
              )), xt) break;
              T = T.return;
            }
            0 < ze.length && (H = new V(
              H,
              de,
              null,
              a,
              w
            ), L.push({
              event: H,
              listeners: ze
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (H = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", H && a !== r && (de = a.relatedTarget || a.fromElement) && (aa(de) || de[Hi]))
              break e;
            if ((V || H) && (H = w.window === w ? w : (H = w.ownerDocument) ? H.defaultView || H.parentWindow : window, V ? (de = a.relatedTarget || a.toElement, V = b, de = de ? aa(de) : null, de !== null && (xt = Fe(de), ze = de.tag, de !== xt || ze !== 5 && ze !== 27 && ze !== 6) && (de = null)) : (V = null, de = b), V !== de)) {
              if (ze = Je, R = "onMouseLeave", ut = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ze = H0, R = "onPointerLeave", ut = "onPointerEnter", T = "pointer"), xt = V == null ? H : an(V), E = de == null ? H : an(de), H = new ze(
                R,
                T + "leave",
                V,
                a,
                w
              ), H.target = xt, H.relatedTarget = E, R = null, aa(w) === b && (ze = new ze(
                ut,
                T + "enter",
                de,
                a,
                w
              ), ze.target = E, ze.relatedTarget = xt, R = ze), xt = R, V && de)
                t: {
                  for (ze = V, ut = de, T = 0, E = ze; E; E = gl(E))
                    T++;
                  for (E = 0, R = ut; R; R = gl(R))
                    E++;
                  for (; 0 < T - E; )
                    ze = gl(ze), T--;
                  for (; 0 < E - T; )
                    ut = gl(ut), E--;
                  for (; T--; ) {
                    if (ze === ut || ut !== null && ze === ut.alternate)
                      break t;
                    ze = gl(ze), ut = gl(ut);
                  }
                  ze = null;
                }
              else ze = null;
              V !== null && Qy(
                L,
                H,
                V,
                ze,
                !1
              ), de !== null && xt !== null && Qy(
                L,
                xt,
                de,
                ze,
                !0
              );
            }
          }
          e: {
            if (H = b ? an(b) : window, V = H.nodeName && H.nodeName.toLowerCase(), V === "select" || V === "input" && H.type === "file")
              var X = xh;
            else if (Ap(H))
              if (q0)
                X = pg;
              else {
                X = Nh;
                var le = yg;
              }
            else
              V = H.nodeName, !V || V.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? b && Ji(b.elementType) && (X = xh) : X = mg;
            if (X && (X = X(e, b))) {
              hs(
                L,
                X,
                a,
                w
              );
              break e;
            }
            le && le(e, H, b), e === "focusout" && b && H.type === "number" && b.memoizedProps.value != null && as(H, "number", H.value);
          }
          switch (le = b ? an(b) : window, e) {
            case "focusin":
              (Ap(le) || le.contentEditable === "true") && (kd = le, xg = b, wm = null);
              break;
            case "focusout":
              wm = xg = kd = null;
              break;
            case "mousedown":
              Ng = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Ng = !1, Cp(
                L,
                a,
                w
              );
              break;
            case "selectionchange":
              if (hS) break;
            case "keydown":
            case "keyup":
              Cp(
                L,
                a,
                w
              );
          }
          var je;
          if (Hg)
            e: {
              switch (e) {
                case "compositionstart":
                  var he = "onCompositionStart";
                  break e;
                case "compositionend":
                  he = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  he = "onCompositionUpdate";
                  break e;
              }
              he = void 0;
            }
          else
            Jd ? kl(e, a) && (he = "onCompositionEnd") : e === "keydown" && a.keyCode === x0 && (he = "onCompositionStart");
          he && (N0 && a.locale !== "ko" && (Jd || he !== "onCompositionStart" ? he === "onCompositionEnd" && Jd && (je = Su()) : ($ = w, x = "value" in $ ? $.value : $.textContent, Jd = !0)), le = rr(
            b,
            he
          ), 0 < le.length && (he = new _0(
            he,
            e,
            null,
            a,
            w
          ), L.push({
            event: he,
            listeners: le
          }), je ? he.data = je : (je = ti(a), je !== null && (he.data = je)))), (je = sS ? ds(e, a) : Rf(e, a)) && (he = rr(
            b,
            "onBeforeInput"
          ), 0 < he.length && (le = new $1(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            w
          ), L.push({
            event: le,
            listeners: he
          }), le.data = je)), Bt(
            L,
            e,
            b,
            a,
            w
          );
        }
        $n(L, t);
      });
    }
    function Wl(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function rr(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = bu(e, a), o != null && i.unshift(
          Wl(e, o, f)
        ), o = bu(e, t), o != null && i.push(
          Wl(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function gl(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Qy(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, v = h.alternate, b = h.stateNode;
        if (h = h.tag, v !== null && v === i) break;
        h !== 5 && h !== 26 && h !== 27 || b === null || (v = b, o ? (b = bu(a, f), b != null && d.unshift(
          Wl(a, b, v)
        )) : o || (b = bu(a, f), b != null && d.push(
          Wl(a, b, v)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Wn(e, t) {
      eo(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || _m || (_m = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Ia,
        possibleRegistrationNames: Cc
      };
      Ji(e) || typeof t.is == "string" || Ch(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Yt(e, t, a, i) {
      t !== a && (a = Ul(a), Ul(t) !== a && (i[e] = t));
    }
    function Ei(e, t, a) {
      t.forEach(function(i) {
        a[Ky(i)] = i === "style" ? Rc(e) : e.getAttribute(i);
      });
    }
    function ka(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function bd(e, t) {
      return e = e.namespaceURI === Hr || e.namespaceURI === Wo ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Ul(e) {
      return g(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        me(e)
      ), N(e)), (typeof e == "string" ? e : "" + e).replace(qS, `
`).replace(jS, "");
    }
    function Zy(e, t) {
      return t = Ul(t), Ul(e) === t;
    }
    function xu() {
    }
    function st(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Tf(i, t, !1), t === "body" || t === "textarea" && i === "" || Ki(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Tf("" + i, t, !1), t !== "body" && Ki(e, "" + i));
          break;
        case "className":
          we(e, "class", i);
          break;
        case "tabIndex":
          we(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          we(e, a, i);
          break;
        case "style":
          Ef(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            we(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Z(i, a), i = to("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Wv || (Wv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || $v || ($v = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || kv ? t !== "button" || o.type == null || o.type === "submit" || kv ? typeof i == "function" && (o.name == null || u1 || (u1 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Wv || (Wv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || $v || ($v = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (kv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (kv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && st(e, t, "name", o.name, o, null), st(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), st(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), st(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (st(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), st(e, t, "method", o.method, o, null), st(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Z(i, a), i = to("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && ka(a, i), e.onclick = xu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && ka(a, i), We("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && ka(a, i), We("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          Z(i, a), a = to("" + i), e.setAttributeNS(kr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (Z(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Fv[a] || (Fv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (Z(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (Z(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (Z(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          We("beforetoggle", e), We("toggle", e), at(e, "popover", i);
          break;
        case "xlinkActuate":
          el(
            e,
            kr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          el(
            e,
            kr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          el(
            e,
            kr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          el(
            e,
            kr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          el(
            e,
            kr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          el(
            e,
            kr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          el(
            e,
            T0,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          el(
            e,
            T0,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          el(
            e,
            T0,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), at(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          i1 || i == null || typeof i != "object" || (i1 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = os(a), at(e, a, i)) : Ia.hasOwnProperty(a) && i != null && typeof i != "function" && ka(a, i);
      }
    }
    function Ec(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Ef(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Ki(e, i) : (typeof i == "number" || typeof i == "bigint") && Ki(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && ka(a, i), We("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && ka(a, i), We("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && ka(a, i), e.onclick = xu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Ia.hasOwnProperty(a))
            i != null && typeof i != "function" && ka(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[pa] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : at(e, a, i);
            }
      }
    }
    function Jt(e, t, a) {
      switch (Wn(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          We("error", e), We("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    st(e, t, f, d, a, null);
                }
            }
          o && st(e, t, "srcSet", a.srcSet, a, null), i && st(e, t, "src", a.src, a, null);
          return;
        case "input":
          ye("input", a), We("invalid", e);
          var h = f = d = o = null, v = null, b = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var w = a[i];
              if (w != null)
                switch (i) {
                  case "name":
                    o = w;
                    break;
                  case "type":
                    d = w;
                    break;
                  case "checked":
                    v = w;
                    break;
                  case "defaultChecked":
                    b = w;
                    break;
                  case "value":
                    f = w;
                    break;
                  case "defaultValue":
                    h = w;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (w != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    st(e, t, i, w, a, null);
                }
            }
          Fu(e, a), bp(
            e,
            f,
            h,
            v,
            b,
            d,
            o,
            !1
          ), vu(e);
          return;
        case "select":
          ye("select", a), We("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  st(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          gf(e, a), t = f, a = d, e.multiple = !!i, t != null ? gu(e, !!i, t, !1) : a != null && gu(e, !!i, a, !0);
          return;
        case "textarea":
          ye("textarea", a), We("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  st(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          zn(e, a), Oh(e, i, o, f), vu(e);
          return;
        case "option":
          Ah(e, a);
          for (v in a)
            if (a.hasOwnProperty(v) && (i = a[v], i != null))
              switch (v) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  st(e, t, v, i, a, null);
              }
          return;
        case "dialog":
          We("beforetoggle", e), We("toggle", e), We("cancel", e), We("close", e);
          break;
        case "iframe":
        case "object":
          We("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < up.length; i++)
            We(up[i], e);
          break;
        case "image":
          We("error", e), We("load", e);
          break;
        case "details":
          We("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          We("error", e), We("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (b in a)
            if (a.hasOwnProperty(b) && (i = a[b], i != null))
              switch (b) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  st(e, t, b, i, a, null);
              }
          return;
        default:
          if (Ji(t)) {
            for (w in a)
              a.hasOwnProperty(w) && (i = a[w], i !== void 0 && Ec(
                e,
                t,
                w,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && st(e, t, h, i, a, null));
    }
    function tv(e, t, a, i) {
      switch (Wn(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, v = null, b = null, w = null;
          for (V in a) {
            var L = a[V];
            if (a.hasOwnProperty(V) && L != null)
              switch (V) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  v = L;
                default:
                  i.hasOwnProperty(V) || st(
                    e,
                    t,
                    V,
                    null,
                    i,
                    L
                  );
              }
          }
          for (var H in i) {
            var V = i[H];
            if (L = a[H], i.hasOwnProperty(H) && (V != null || L != null))
              switch (H) {
                case "type":
                  f = V;
                  break;
                case "name":
                  o = V;
                  break;
                case "checked":
                  b = V;
                  break;
                case "defaultChecked":
                  w = V;
                  break;
                case "value":
                  d = V;
                  break;
                case "defaultValue":
                  h = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  V !== L && st(
                    e,
                    t,
                    H,
                    V,
                    i,
                    L
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || n1 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), n1 = !0), !t || i || a1 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), a1 = !0), Iu(
            e,
            d,
            h,
            v,
            b,
            w,
            f,
            o
          );
          return;
        case "select":
          V = d = h = H = null;
          for (f in a)
            if (v = a[f], a.hasOwnProperty(f) && v != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  V = v;
                default:
                  i.hasOwnProperty(f) || st(
                    e,
                    t,
                    f,
                    null,
                    i,
                    v
                  );
              }
          for (o in i)
            if (f = i[o], v = a[o], i.hasOwnProperty(o) && (f != null || v != null))
              switch (o) {
                case "value":
                  H = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== v && st(
                    e,
                    t,
                    o,
                    f,
                    i,
                    v
                  );
              }
          i = h, t = d, a = V, H != null ? gu(e, !!t, H, !1) : !!a != !!t && (i != null ? gu(e, !!t, i, !0) : gu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          V = H = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  st(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  H = o;
                  break;
                case "defaultValue":
                  V = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && st(e, t, d, o, i, f);
              }
          ns(e, H, V);
          return;
        case "option":
          for (var de in a)
            if (H = a[de], a.hasOwnProperty(de) && H != null && !i.hasOwnProperty(de))
              switch (de) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  st(
                    e,
                    t,
                    de,
                    null,
                    i,
                    H
                  );
              }
          for (v in i)
            if (H = i[v], V = a[v], i.hasOwnProperty(v) && H !== V && (H != null || V != null))
              switch (v) {
                case "selected":
                  e.selected = H && typeof H != "function" && typeof H != "symbol";
                  break;
                default:
                  st(
                    e,
                    t,
                    v,
                    H,
                    i,
                    V
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var ze in a)
            H = a[ze], a.hasOwnProperty(ze) && H != null && !i.hasOwnProperty(ze) && st(
              e,
              t,
              ze,
              null,
              i,
              H
            );
          for (b in i)
            if (H = i[b], V = a[b], i.hasOwnProperty(b) && H !== V && (H != null || V != null))
              switch (b) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  st(
                    e,
                    t,
                    b,
                    H,
                    i,
                    V
                  );
              }
          return;
        default:
          if (Ji(t)) {
            for (var xt in a)
              H = a[xt], a.hasOwnProperty(xt) && H !== void 0 && !i.hasOwnProperty(xt) && Ec(
                e,
                t,
                xt,
                void 0,
                i,
                H
              );
            for (w in i)
              H = i[w], V = a[w], !i.hasOwnProperty(w) || H === V || H === void 0 && V === void 0 || Ec(
                e,
                t,
                w,
                H,
                i,
                V
              );
            return;
          }
      }
      for (var ut in a)
        H = a[ut], a.hasOwnProperty(ut) && H != null && !i.hasOwnProperty(ut) && st(e, t, ut, null, i, H);
      for (L in i)
        H = i[L], V = a[L], !i.hasOwnProperty(L) || H === V || H == null && V == null || st(e, t, L, H, i, V);
    }
    function Ky(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Rc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Jy(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (I(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || _r.has(f) ? (I(d, f), i += o + f.replace(Vu, "-$1").toLowerCase().replace(Xu, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Vu, "-$1").toLowerCase().replace(Xu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Ul(i), Ul(t) !== i && (a.style = Rc(e)));
      }
    }
    function Fl(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Z(i, t), e === "" + i)
              return;
        }
      Yt(t, e, i, f);
    }
    function ky(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Yt(t, e, i, f);
    }
    function $y(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (Z(i, a), e === "" + i)
              return;
        }
      Yt(t, e, i, f);
    }
    function lv(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (Z(i, t), e === "" + i))
              return;
        }
      Yt(t, e, i, f);
    }
    function pt(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Z(i, t), a = to("" + i), e === a)
              return;
        }
      Yt(t, e, i, f);
    }
    function Mt(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Ji(t)) {
        for (var v in a)
          if (a.hasOwnProperty(v)) {
            var b = a[v];
            if (b != null) {
              if (Ia.hasOwnProperty(v))
                typeof b != "function" && ka(v, b);
              else if (a.suppressHydrationWarning !== !0)
                switch (v) {
                  case "children":
                    typeof b != "string" && typeof b != "number" || Yt(
                      "children",
                      e.textContent,
                      b,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, b = b ? b.__html : void 0, b != null && (b = bd(e, b), Yt(
                      v,
                      d,
                      b,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(v), Jy(e, b, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(v.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      v
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Be(
                      e,
                      "class",
                      b
                    ), Yt(
                      "className",
                      d,
                      b,
                      o
                    );
                    continue;
                  default:
                    i.context === Xc && t !== "svg" && t !== "math" ? f.delete(v.toLowerCase()) : f.delete(v), d = Be(
                      e,
                      v,
                      b
                    ), Yt(
                      v,
                      d,
                      b,
                      o
                    );
                }
            }
          }
      } else
        for (b in a)
          if (a.hasOwnProperty(b) && (v = a[b], v != null)) {
            if (Ia.hasOwnProperty(b))
              typeof v != "function" && ka(b, v);
            else if (a.suppressHydrationWarning !== !0)
              switch (b) {
                case "children":
                  typeof v != "string" && typeof v != "number" || Yt(
                    "children",
                    e.textContent,
                    v,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = bd(e, v), d !== v && (o[b] = { __html: d }));
                  continue;
                case "className":
                  Fl(
                    e,
                    b,
                    "class",
                    v,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Fl(
                    e,
                    b,
                    "tabindex",
                    v,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(b), Jy(e, v, o);
                  continue;
                case "multiple":
                  f.delete(b), Yt(
                    b,
                    e.multiple,
                    v,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(b), Yt(
                    b,
                    e.muted,
                    v,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Yt(
                    b,
                    e.autofocus,
                    v,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(b), d = e.getAttribute("data"), Yt(
                      b,
                      d,
                      v,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(v !== "" || t === "a" && b === "href" || t === "object" && b === "data")) {
                    console.error(
                      b === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      b,
                      b
                    );
                    continue;
                  }
                  pt(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(b), typeof v == "function") {
                    f.delete(b.toLowerCase()), b === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === GS) {
                    f.delete(b.toLowerCase()), Yt(
                      b,
                      "function",
                      v,
                      o
                    );
                    continue;
                  }
                  pt(
                    e,
                    b,
                    b.toLowerCase(),
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  pt(
                    e,
                    b,
                    "xlink:href",
                    v,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  $y(
                    e,
                    b,
                    "contenteditable",
                    v,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  $y(
                    e,
                    b,
                    "spellcheck",
                    v,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  $y(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  ky(
                    e,
                    b,
                    b.toLowerCase(),
                    v,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var w = d = b, L = o;
                    if (f.delete(w), h = h.getAttribute(w), h === null)
                      switch (typeof v) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (v === !1) break e;
                      }
                    else if (v != null)
                      switch (typeof v) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (v === !0 && h === "") break e;
                          break;
                        default:
                          if (Z(v, d), h === "" + v)
                            break e;
                      }
                    Yt(
                      d,
                      h,
                      v,
                      L
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, w = d = b, L = o, f.delete(w), h = h.getAttribute(w), h === null)
                      switch (typeof v) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(v) || 1 > v) break e;
                      }
                    else if (v != null)
                      switch (typeof v) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(v) || 1 > v) && (Z(v, d), h === "" + v))
                            break e;
                      }
                    Yt(
                      d,
                      h,
                      v,
                      L
                    );
                  }
                  continue;
                case "rowSpan":
                  lv(
                    e,
                    b,
                    "rowspan",
                    v,
                    f,
                    o
                  );
                  continue;
                case "start":
                  lv(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Fl(
                    e,
                    b,
                    "x-height",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Fl(
                    e,
                    b,
                    "xlink:actuate",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Fl(
                    e,
                    b,
                    "xlink:arcrole",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Fl(
                    e,
                    b,
                    "xlink:role",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Fl(
                    e,
                    b,
                    "xlink:show",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Fl(
                    e,
                    b,
                    "xlink:title",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Fl(
                    e,
                    b,
                    "xlink:type",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Fl(
                    e,
                    b,
                    "xml:base",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Fl(
                    e,
                    b,
                    "xml:lang",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Fl(
                    e,
                    b,
                    "xml:space",
                    v,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  v !== "" || Fv[b] || (Fv[b] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    b
                  )), ky(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N") {
                    h = os(b), d = !1, i.context === Xc && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (w = b.toLowerCase(), w = xc.hasOwnProperty(
                      w
                    ) && xc[w] || null, w !== null && w !== b && (d = !0, f.delete(w)), f.delete(h));
                    e: if (w = e, L = h, h = v, He(L))
                      if (w.hasAttribute(L))
                        w = w.getAttribute(
                          L
                        ), Z(
                          h,
                          L
                        ), h = w === "" + h ? h : w;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (w = L.toLowerCase().slice(0, 5), w !== "data-" && w !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Yt(
                      b,
                      h,
                      v,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Ei(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Ie(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Pe(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function bt(e) {
      switch (e) {
        case Wo:
          return Sh;
        case Hr:
          return eg;
        default:
          return Xc;
      }
    }
    function da(e, t) {
      if (e === Xc)
        switch (t) {
          case "svg":
            return Sh;
          case "math":
            return eg;
          default:
            return Xc;
        }
      return e === Sh && t === "foreignObject" ? Xc : e;
    }
    function Fn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Uo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === O0 ? !1 : (O0 = e, !0) : (O0 = null, !1);
    }
    function Wy(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Nu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function kt(e, t, a, i) {
      tv(e, t, a, i), e[pa] = i;
    }
    function wu(e) {
      Ki(e, "");
    }
    function Ac(e, t, a) {
      e.nodeValue = a;
    }
    function In(e) {
      return e === "head";
    }
    function $a(e, t) {
      e.removeChild(t);
    }
    function Co(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function _o(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === Pv) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & VS && wo(d.documentElement), a & XS && wo(d.body), a & QS)
                for (a = d.head, wo(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, v = d.nodeName;
                  d[Ko] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), Mc(t);
              return;
            }
            o--;
          } else
            a === Iv || a === Vc || a === ip ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      Mc(t);
    }
    function ha(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Fy(e) {
      e.nodeValue = "";
    }
    function Iy(e, t) {
      t = t[ZS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Sd(e, t) {
      e.nodeValue = t;
    }
    function Ho(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Ho(a), ln(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Ri(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Ko])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          Z(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = _l(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Cl(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = _l(e.nextSibling), e === null)) return null;
      return e;
    }
    function Pn(e) {
      return e.data === ip || e.data === Vc && e.ownerDocument.readyState === o1;
    }
    function xo(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Vc || a.readyState === o1)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function _l(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Iv || t === ip || t === Vc || t === E0 || t === c1)
            break;
          if (t === Pv) return null;
        }
      }
      return e;
    }
    function Td(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Ky(f.name)] = f.name.toLowerCase() === "style" ? Rc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Ed(e, t, a) {
      return a === null || a[LS] !== !0 ? (e.nodeValue === t ? e = null : (t = Ul(t), e = Ul(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Py(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Pv) {
            if (t === 0)
              return _l(e.nextSibling);
            t--;
          } else
            a !== Iv && a !== ip && a !== Vc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function No(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Iv || a === ip || a === Vc) {
            if (t === 0) return e;
            t--;
          } else a === Pv && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function em(e) {
      Mc(e);
    }
    function za(e) {
      Mc(e);
    }
    function tm(e, t, a, i, o) {
      switch (o && cs(e, i.ancestorInfo), t = Pe(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Ma(e, t, a, i) {
      if (!a[Hi] && Al(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Jt(a, e, t), a[Vl] = i, a[pa] = t;
    }
    function wo(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      ln(e);
    }
    function sr(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function av(e, t, a) {
      var i = Th;
      if (i && typeof t == "string" && t) {
        var o = Ta(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), y1.has(o) || (y1.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Jt(t, "link", e), D(t), i.head.appendChild(t)));
      }
    }
    function Bu(e, t, a, i) {
      var o = (o = tu.current) ? sr(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Ai(a.href), t = m(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = Ai(a.href);
            var f = m(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Wr, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              eu(e)
            )) && !f._p && (d.instance = f, d.state.loading = cp | yu), !mu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              mu.set(e, h), f || nv(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Oc(t) + `
  + ` + Oc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Oc(t) + `
  + ` + Oc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Dc(a), t = m(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Oc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : ju.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : ju.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : ju.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Ai(e) {
      return 'href="' + Ta(e) + '"';
    }
    function eu(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function lm(e) {
      return Ze({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function nv(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = cp : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= cp;
      }), t.addEventListener("error", function() {
        return i.loading |= d1;
      }), Jt(t, "link", a), D(t), e.head.appendChild(t));
    }
    function Dc(e) {
      return '[src="' + Ta(e) + '"]';
    }
    function zc(e) {
      return "script[async]" + e;
    }
    function Rd(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Ta(a.href) + '"]'
            );
            if (i)
              return t.instance = i, D(i), i;
            var o = Ze({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), D(i), Jt(i, "style", o), Ad(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = Ai(a.href);
            var f = e.querySelector(
              eu(o)
            );
            if (f)
              return t.state.loading |= yu, t.instance = f, D(f), f;
            i = lm(a), (o = mu.get(o)) && am(i, o), f = (e.ownerDocument || e).createElement("link"), D(f);
            var d = f;
            return d._p = new Promise(function(h, v) {
              d.onload = h, d.onerror = v;
            }), Jt(f, "link", i), t.state.loading |= yu, Ad(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Dc(a.src), (o = e.querySelector(
              zc(f)
            )) ? (t.instance = o, D(o), o) : (i = a, (o = mu.get(f)) && (i = Ze({}, a), nm(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), D(o), Jt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & yu) === Wr && (i = t.instance, t.state.loading |= yu, Ad(i, a.precedence, e));
      return t.instance;
    }
    function Ad(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function am(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function nm(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function um(e, t, a) {
      if (tg === null) {
        var i = /* @__PURE__ */ new Map(), o = tg = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = tg, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Ko] || f[Vl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Wo) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function im(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Bo(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === Sh || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Ie(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function dr(e) {
      return !(e.type === "stylesheet" && (e.state.loading & h1) === Wr);
    }
    function uv() {
    }
    function iv(e, t, a) {
      if (op === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = op;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & yu) === Wr) {
        if (t.instance === null) {
          var o = Ai(a.href), f = e.querySelector(
            eu(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = hr.bind(i), e.then(i, i)), t.state.loading |= yu, t.instance = f, D(f);
            return;
          }
          f = e.ownerDocument || e, a = lm(a), (o = mu.get(o)) && am(a, o), f = f.createElement("link"), D(f);
          var d = f;
          d._p = new Promise(function(h, v) {
            d.onload = h, d.onerror = v;
          }), Jt(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & h1) === Wr && (i.count++, t = hr.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function cv() {
      if (op === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = op;
      return e.stylesheets && e.count === 0 && Od(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && Od(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function hr() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Od(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Od(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, lg = /* @__PURE__ */ new Map(), t.forEach(ov, e), lg = null, hr.call(e));
    }
    function ov(e, t) {
      if (!(t.state.loading & yu)) {
        var a = lg.get(e);
        if (a) var i = a.get(z0);
        else {
          a = /* @__PURE__ */ new Map(), lg.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(z0, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(z0, o), a.set(d, o), this.count++, i = hr.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= yu;
      }
    }
    function Dd(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = $r, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jc(0), this.hiddenUpdates = Jc(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function cm(e, t, a, i, o, f, d, h, v, b, w, L) {
      return e = new Dd(
        e,
        t,
        a,
        d,
        h,
        v,
        b,
        L
      ), t = vS, f === !0 && (t |= ga | Qu), Wt && (t |= Pl), f = M(3, null, null, t), e.current = f, f.stateNode = e, t = _f(), lc(t), e.pooledCache = t, lc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, ua(f), e;
    }
    function om(e) {
      return e ? (e = Fo, e) : Fo;
    }
    function Et(e, t, a, i, o, f) {
      if (Hl && typeof Hl.onScheduleFiberRoot == "function")
        try {
          Hl.onScheduleFiberRoot(Ci, i, a);
        } catch (d) {
          ma || (ma = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      ce !== null && typeof ce.markRenderScheduled == "function" && ce.markRenderScheduled(t), o = om(o), i.context === null ? i.context = o : i.pendingContext = o, va && Ca !== null && !g1 && (g1 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        fe(Ca) || "Unknown"
      )), i = xn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = sn(e, i, t), a !== null && (Zt(a, e, t), fi(a, e, t));
    }
    function zd(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function fm(e, t) {
      zd(e, t), (e = e.alternate) && zd(e, t);
    }
    function rm(e) {
      if (e.tag === 13) {
        var t = na(e, 67108864);
        t !== null && Zt(t, e, 67108864), fm(e, 67108864);
      }
    }
    function Tg() {
      return Ca;
    }
    function Eg() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = df(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function Rg(e, t, a, i) {
      var o = Y.T;
      Y.T = null;
      var f = De.p;
      try {
        De.p = xl, Oi(e, t, a, i);
      } finally {
        De.p = f, Y.T = o;
      }
    }
    function Md(e, t, a, i) {
      var o = Y.T;
      Y.T = null;
      var f = De.p;
      try {
        De.p = Sn, Oi(e, t, a, i);
      } finally {
        De.p = f, Y.T = o;
      }
    }
    function Oi(e, t, a, i) {
      if (ng) {
        var o = yr(i);
        if (o === null)
          $l(
            e,
            t,
            i,
            ug,
            a
          ), Di(e, i);
        else if (mr(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Di(e, i), t & 4 && -1 < $S.indexOf(e)) {
          for (; o !== null; ) {
            var f = Al(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Pt(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var v = 1 << 31 - Ll(d);
                        h.entanglements[1] |= v, d &= ~v;
                      }
                      Ja(f), (Rt & (Na | ku)) === Tn && (Vv = lu() + Wb, Tc(0));
                    }
                  }
                  break;
                case 13:
                  h = na(f, 2), h !== null && Zt(h, f, 2), bc(), fm(f, 2);
              }
            if (f = yr(i), f === null && $l(
              e,
              t,
              i,
              ug,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          $l(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function yr(e) {
      return e = ki(e), Yo(e);
    }
    function Yo(e) {
      if (ug = null, e = aa(e), e !== null) {
        var t = Fe(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Ft(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ug = e, null;
    }
    function Ud(e) {
      switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
          return xl;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Sn;
        case "message":
          switch (Ui()) {
            case Nd:
              return xl;
            case Ar:
              return Sn;
            case Xo:
            case Mg:
              return Lu;
            case Or:
              return qd;
            default:
              return Lu;
          }
        default:
          return Lu;
      }
    }
    function Di(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          of = null;
          break;
        case "dragenter":
        case "dragleave":
          ff = null;
          break;
        case "mouseover":
        case "mouseout":
          rf = null;
          break;
        case "pointerover":
        case "pointerout":
          rp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          sp.delete(t.pointerId);
      }
    }
    function ya(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = Al(t), t !== null && rm(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function mr(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return of = ya(
            of,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return ff = ya(
            ff,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return rf = ya(
            rf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return rp.set(
            f,
            ya(
              rp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, sp.set(
            f,
            ya(
              sp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function fv(e) {
      var t = aa(e.target);
      if (t !== null) {
        var a = Fe(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Ft(a), t !== null) {
              e.blockedOn = t, $c(e.priority, function() {
                if (a.tag === 13) {
                  var i = sa(a);
                  i = El(i);
                  var o = na(
                    a,
                    i
                  );
                  o !== null && Zt(o, a, i), fm(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function pr(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = yr(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          r !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), r = o, a.target.dispatchEvent(i), r === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), r = null;
        } else
          return t = Al(a), t !== null && rm(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function sm(e, t, a) {
      pr(e) && a.delete(t);
    }
    function rv() {
      M0 = !1, of !== null && pr(of) && (of = null), ff !== null && pr(ff) && (ff = null), rf !== null && pr(rf) && (rf = null), rp.forEach(sm), sp.forEach(sm);
    }
    function vr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, M0 || (M0 = !0, $t.unstable_scheduleCallback(
        $t.unstable_NormalPriority,
        rv
      )));
    }
    function sv(e) {
      ig !== e && (ig = e, $t.unstable_scheduleCallback(
        $t.unstable_NormalPriority,
        function() {
          ig === e && (ig = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Yo(i || a) === null)
                continue;
              break;
            }
            var f = Al(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), oc(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Mc(e) {
      function t(v) {
        return vr(v, e);
      }
      of !== null && vr(of, e), ff !== null && vr(ff, e), rf !== null && vr(rf, e), rp.forEach(t), sp.forEach(t);
      for (var a = 0; a < sf.length; a++) {
        var i = sf[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < sf.length && (a = sf[0], a.blockedOn === null); )
        fv(a), a.blockedOn === null && sf.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[pa] || null;
          if (typeof f == "function")
            d || sv(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[pa] || null)
                h = d.formAction;
              else if (Yo(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), sv(a);
          }
        }
    }
    function Cd(e) {
      this._internalRoot = e;
    }
    function gr(e) {
      this._internalRoot = e;
    }
    function dv(e) {
      e[Hi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var $t = Q1(), br = Eh(), Ag = Z1(), Ze = Object.assign, Sr = Symbol.for("react.element"), zi = Symbol.for("react.transitional.element"), Uc = Symbol.for("react.portal"), qe = Symbol.for("react.fragment"), qo = Symbol.for("react.strict_mode"), jo = Symbol.for("react.profiler"), dm = Symbol.for("react.provider"), _d = Symbol.for("react.consumer"), Wa = Symbol.for("react.context"), Yu = Symbol.for("react.forward_ref"), Go = Symbol.for("react.suspense"), Mi = Symbol.for("react.suspense_list"), Tr = Symbol.for("react.memo"), Ua = Symbol.for("react.lazy"), hm = Symbol.for("react.activity"), hv = Symbol.for("react.memo_cache_sentinel"), ym = Symbol.iterator, Hd = Symbol.for("react.client.reference"), xe = Array.isArray, Y = br.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, De = Ag.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Og = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Er = [], Rr = [], Fa = -1, qu = St(null), Lo = St(null), tu = St(null), Vo = St(null), ju = Object.prototype.hasOwnProperty, xd = $t.unstable_scheduleCallback, Dg = $t.unstable_cancelCallback, yv = $t.unstable_shouldYield, zg = $t.unstable_requestPaint, lu = $t.unstable_now, Ui = $t.unstable_getCurrentPriorityLevel, Nd = $t.unstable_ImmediatePriority, Ar = $t.unstable_UserBlockingPriority, Xo = $t.unstable_NormalPriority, Mg = $t.unstable_LowPriority, Or = $t.unstable_IdlePriority, Ug = $t.log, bn = $t.unstable_setDisableYieldValue, Ci = null, Hl = null, ce = null, ma = !1, Wt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Ll = Math.clz32 ? Math.clz32 : Kc, wd = Math.log, Gu = Math.LN2, Bd = 256, Yd = 4194304, xl = 2, Sn = 8, Lu = 32, qd = 268435456, _i = Math.random().toString(36).slice(2), Vl = "__reactFiber$" + _i, pa = "__reactProps$" + _i, Hi = "__reactContainer$" + _i, mm = "__reactEvents$" + _i, mv = "__reactListeners$" + _i, Qo = "__reactHandles$" + _i, Zo = "__reactResources$" + _i, Ko = "__reactMarker$" + _i, pv = /* @__PURE__ */ new Set(), Ia = {}, Cc = {}, vv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, jd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Gd = {}, Ld = {}, xi = 0, pm, vm, gv, gm, Jo, bv, Sv;
    nn.__reactDisabledLog = !0;
    var bm, Dr, ko = !1, zr = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ca = null, va = !1, Cg = /[\n"\\]/g, Sm = !1, Tm = !1, Em = !1, Rm = !1, Vd = !1, Am = !1, Mr = ["value", "defaultValue"], Tv = !1, Ev = /["'&<>\n\t]|^\s|\s$/, Om = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Xd = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Qd = Xd.concat(["button"]), Dm = "dd dt li option optgroup p rp rt".split(" "), zm = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, $o = {}, au = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Vu = /([A-Z])/g, Xu = /^ms-/, Ur = /^(?:webkit|moz|o)[A-Z]/, Cr = /^-ms-/, Ni = /-(.)/g, Rv = /;\s*$/, _c = {}, Hc = {}, Av = !1, Mm = !1, _r = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Hr = "http://www.w3.org/1998/Math/MathML", Wo = "http://www.w3.org/2000/svg", Zd = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), xc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Um = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, nu = {}, Cm = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Kd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), _m = !1, Il = {}, xr = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, r = null, s = null, y = null, p = !1, S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _ = !1;
    if (S)
      try {
        var Q = {};
        Object.defineProperty(Q, "passive", {
          get: function() {
            _ = !0;
          }
        }), window.addEventListener("test", Q, Q), window.removeEventListener("test", Q, Q);
      } catch {
        _ = !1;
      }
    var $ = null, x = null, B = null, ge = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, be = Dl(ge), dt = Ze({}, ge, { view: 0, detail: 0 }), z = Dl(dt), O, U, J, re = Ze({}, dt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ss,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== J && (J && e.type === "mousemove" ? (O = e.screenX - J.screenX, U = e.screenY - J.screenY) : U = O = 0, J = e), O);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : U;
      }
    }), Je = Dl(re), ve = Ze({}, re, { dataTransfer: 0 }), Ae = Dl(ve), bl = Ze({}, dt, { relatedTarget: 0 }), ot = Dl(bl), wi = Ze({}, ge, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), _g = Dl(wi), K1 = Ze({}, ge, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), J1 = Dl(K1), k1 = Ze({}, ge, { data: 0 }), _0 = Dl(
      k1
    ), $1 = _0, W1 = {
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
    }, F1 = {
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
    }, I1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, P1 = Ze({}, dt, {
      key: function(e) {
        if (e.key) {
          var t = W1[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = lo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? F1[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ss,
      charCode: function(e) {
        return e.type === "keypress" ? lo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), eS = Dl(P1), tS = Ze({}, re, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), H0 = Dl(tS), lS = Ze({}, dt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ss
    }), aS = Dl(lS), nS = Ze({}, ge, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uS = Dl(nS), iS = Ze({}, re, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), cS = Dl(iS), oS = Ze({}, ge, {
      newState: 0,
      oldState: 0
    }), fS = Dl(oS), rS = [9, 13, 27, 32], x0 = 229, Hg = S && "CompositionEvent" in window, Hm = null;
    S && "documentMode" in document && (Hm = document.documentMode);
    var sS = S && "TextEvent" in window && !Hm, N0 = S && (!Hg || Hm && 8 < Hm && 11 >= Hm), w0 = 32, B0 = String.fromCharCode(w0), Y0 = !1, Jd = !1, dS = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, xm = null, Nm = null, q0 = !1;
    S && (q0 = Hh("input") && (!document.documentMode || 9 < document.documentMode));
    var _a = typeof Object.is == "function" ? Object.is : vg, hS = S && "documentMode" in document && 11 >= document.documentMode, kd = null, xg = null, wm = null, Ng = !1, $d = {
      animationend: Tu("Animation", "AnimationEnd"),
      animationiteration: Tu("Animation", "AnimationIteration"),
      animationstart: Tu("Animation", "AnimationStart"),
      transitionrun: Tu("Transition", "TransitionRun"),
      transitionstart: Tu("Transition", "TransitionStart"),
      transitioncancel: Tu("Transition", "TransitionCancel"),
      transitionend: Tu("Transition", "TransitionEnd")
    }, wg = {}, j0 = {};
    S && (j0 = document.createElement("div").style, "AnimationEvent" in window || (delete $d.animationend.animation, delete $d.animationiteration.animation, delete $d.animationstart.animation), "TransitionEvent" in window || delete $d.transitionend.transition);
    var G0 = Fi("animationend"), L0 = Fi("animationiteration"), V0 = Fi("animationstart"), yS = Fi("transitionrun"), mS = Fi("transitionstart"), pS = Fi("transitioncancel"), X0 = Fi("transitionend"), Q0 = /* @__PURE__ */ new Map(), Bg = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    Bg.push("scrollEnd");
    var Yg = /* @__PURE__ */ new WeakMap(), Ov = 1, Nc = 2, uu = [], Wd = 0, qg = 0, Fo = {};
    Object.freeze(Fo);
    var iu = null, Fd = null, qt = 0, vS = 1, Pl = 2, ga = 8, Qu = 16, Z0 = 64, K0 = !1;
    try {
      var J0 = Object.preventExtensions({});
    } catch {
      K0 = !0;
    }
    var Id = [], Pd = 0, Dv = null, zv = 0, cu = [], ou = 0, Nr = null, wc = 1, Bc = "", Ha = null, ll = null, ht = !1, Yc = !1, fu = null, wr = null, Bi = !1, jg = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), k0 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var gS = performance, $0 = function() {
        return gS.now();
      };
    else {
      var bS = Date;
      $0 = function() {
        return bS.now();
      };
    }
    var Gg = St(null), Lg = St(null), W0 = {}, Mv = null, eh = null, th = !1, SS = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, TS = $t.unstable_scheduleCallback, ES = $t.unstable_NormalPriority, Nl = {
      $$typeof: Wa,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, lh = $t.unstable_now, F0 = -0, Uv = -0, Pa = -1.1, Br = -0, Cv = !1, _v = !1, Bm = null, Vg = 0, Yr = 0, ah = null, I0 = Y.S;
    Y.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && wp(e, t), I0 !== null && I0(e, t);
    };
    var qr = St(null), Zu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Ym = [], qm = [], jm = [], Gm = [], Lm = [], Vm = [], jr = /* @__PURE__ */ new Set();
    Zu.recordUnsafeLifecycleWarnings = function(e, t) {
      jr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Ym.push(e), e.mode & ga && typeof t.UNSAFE_componentWillMount == "function" && qm.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && jm.push(e), e.mode & ga && typeof t.UNSAFE_componentWillReceiveProps == "function" && Gm.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Lm.push(e), e.mode & ga && typeof t.UNSAFE_componentWillUpdate == "function" && Vm.push(e));
    }, Zu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Ym.length && (Ym.forEach(function(h) {
        e.add(
          fe(h) || "Component"
        ), jr.add(h.type);
      }), Ym = []);
      var t = /* @__PURE__ */ new Set();
      0 < qm.length && (qm.forEach(function(h) {
        t.add(
          fe(h) || "Component"
        ), jr.add(h.type);
      }), qm = []);
      var a = /* @__PURE__ */ new Set();
      0 < jm.length && (jm.forEach(function(h) {
        a.add(
          fe(h) || "Component"
        ), jr.add(h.type);
      }), jm = []);
      var i = /* @__PURE__ */ new Set();
      0 < Gm.length && (Gm.forEach(
        function(h) {
          i.add(
            fe(h) || "Component"
          ), jr.add(h.type);
        }
      ), Gm = []);
      var o = /* @__PURE__ */ new Set();
      0 < Lm.length && (Lm.forEach(function(h) {
        o.add(
          fe(h) || "Component"
        ), jr.add(h.type);
      }), Lm = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Vm.length && (Vm.forEach(function(h) {
        f.add(
          fe(h) || "Component"
        ), jr.add(h.type);
      }), Vm = []), 0 < t.size) {
        var d = W(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = W(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = W(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = W(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = W(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = W(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Hv = /* @__PURE__ */ new Map(), P0 = /* @__PURE__ */ new Set();
    Zu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & ga && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !P0.has(e.type) && (i = Hv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Hv.set(a, i)), i.push(e));
    }, Zu.flushLegacyContextWarning = function() {
      Hv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(fe(o) || "Component"), P0.add(o.type);
          });
          var i = W(a);
          se(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Zu.discardPendingWarnings = function() {
      Ym = [], qm = [], jm = [], Gm = [], Lm = [], Vm = [], Hv = /* @__PURE__ */ new Map();
    };
    var Xm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), eb = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), xv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), Xg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Qm = null, Nv = !1, ru = 0, su = 1, xa = 2, ea = 4, wl = 8, tb = 0, lb = 1, ab = 2, Qg = 3, Io = !1, nb = !1, Zg = null, Kg = !1, nh = St(null), wv = St(0), uh, ub = /* @__PURE__ */ new Set(), ib = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), cb = /* @__PURE__ */ new Set(), Po = 0, Ne = null, Ct = null, Sl = null, Bv = !1, ih = !1, Gr = !1, Yv = 0, Zm = 0, qc = null, RS = 0, AS = 25, G = null, du = null, jc = -1, Km = !1, qv = {
      readContext: _t,
      use: wn,
      useCallback: Gt,
      useContext: Gt,
      useEffect: Gt,
      useImperativeHandle: Gt,
      useLayoutEffect: Gt,
      useInsertionEffect: Gt,
      useMemo: Gt,
      useReducer: Gt,
      useRef: Gt,
      useState: Gt,
      useDebugValue: Gt,
      useDeferredValue: Gt,
      useTransition: Gt,
      useSyncExternalStore: Gt,
      useId: Gt,
      useHostTransitionStatus: Gt,
      useFormState: Gt,
      useActionState: Gt,
      useOptimistic: Gt,
      useMemoCache: Gt,
      useCacheRefresh: Gt
    }, kg = null, ob = null, $g = null, fb = null, Yi = null, Ku = null, jv = null;
    kg = {
      readContext: function(e) {
        return _t(e);
      },
      use: wn,
      useCallback: function(e, t) {
        return G = "useCallback", Ke(), Ga(t), Gf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Ke(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Ke(), Ga(t), Os(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", Ke(), Ga(a), zs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", Ke(), Ga(t), Qa(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Ke(), Ga(t), Ds(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Ke(), Ga(t);
        var a = Y.H;
        Y.H = Yi;
        try {
          return Ms(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", Ke();
        var i = Y.H;
        Y.H = Yi;
        try {
          return ft(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", Ke(), jf(e);
      },
      useState: function(e) {
        G = "useState", Ke();
        var t = Y.H;
        Y.H = Yi;
        try {
          return Du(e);
        } finally {
          Y.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", Ke();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", Ke(), Us(e, t);
      },
      useTransition: function() {
        return G = "useTransition", Ke(), jn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", Ke(), Ou(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", Ke(), Gn();
      },
      useFormState: function(e, t) {
        return G = "useFormState", Ke(), oo(), mo(e, t);
      },
      useActionState: function(e, t) {
        return G = "useActionState", Ke(), mo(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", Ke(), yn(e);
      },
      useHostTransitionStatus: oa,
      useMemoCache: It,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", Ke(), fc();
      }
    }, ob = {
      readContext: function(e) {
        return _t(e);
      },
      use: wn,
      useCallback: function(e, t) {
        return G = "useCallback", P(), Gf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", P(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", P(), Os(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", P(), zs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", P(), Qa(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", P(), Ds(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", P();
        var a = Y.H;
        Y.H = Yi;
        try {
          return Ms(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", P();
        var i = Y.H;
        Y.H = Yi;
        try {
          return ft(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", P(), jf(e);
      },
      useState: function(e) {
        G = "useState", P();
        var t = Y.H;
        Y.H = Yi;
        try {
          return Du(e);
        } finally {
          Y.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", P(), Us(e, t);
      },
      useTransition: function() {
        return G = "useTransition", P(), jn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", P(), Ou(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", P(), Gn();
      },
      useActionState: function(e, t) {
        return G = "useActionState", P(), mo(e, t);
      },
      useFormState: function(e, t) {
        return G = "useFormState", P(), oo(), mo(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", P(), yn(e);
      },
      useHostTransitionStatus: oa,
      useMemoCache: It,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", P(), fc();
      }
    }, $g = {
      readContext: function(e) {
        return _t(e);
      },
      use: wn,
      useCallback: function(e, t) {
        return G = "useCallback", P(), cc(e, t);
      },
      useContext: function(e) {
        return G = "useContext", P(), _t(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", P(), ol(2048, wl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", P(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", P(), ol(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", P(), ol(4, ea, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", P();
        var a = Y.H;
        Y.H = Ku;
        try {
          return yi(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", P();
        var i = Y.H;
        Y.H = Ku;
        try {
          return Va(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", P(), nt().memoizedState;
      },
      useState: function() {
        G = "useState", P();
        var e = Y.H;
        Y.H = Ku;
        try {
          return Va(rt);
        } finally {
          Y.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", P(), Lf(e, t);
      },
      useTransition: function() {
        return G = "useTransition", P(), Hs();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", P(), wf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", P(), nt().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", P(), oo(), As(e);
      },
      useActionState: function(e) {
        return G = "useActionState", P(), As(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", P(), zu(e, t);
      },
      useHostTransitionStatus: oa,
      useMemoCache: It,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", P(), nt().memoizedState;
      }
    }, fb = {
      readContext: function(e) {
        return _t(e);
      },
      use: wn,
      useCallback: function(e, t) {
        return G = "useCallback", P(), cc(e, t);
      },
      useContext: function(e) {
        return G = "useContext", P(), _t(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", P(), ol(2048, wl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", P(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", P(), ol(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", P(), ol(4, ea, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", P();
        var a = Y.H;
        Y.H = jv;
        try {
          return yi(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", P();
        var i = Y.H;
        Y.H = jv;
        try {
          return ic(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", P(), nt().memoizedState;
      },
      useState: function() {
        G = "useState", P();
        var e = Y.H;
        Y.H = jv;
        try {
          return ic(rt);
        } finally {
          Y.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", P(), Cs(e, t);
      },
      useTransition: function() {
        return G = "useTransition", P(), xs();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", P(), wf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", P(), nt().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", P(), oo(), po(e);
      },
      useActionState: function(e) {
        return G = "useActionState", P(), po(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", P(), Rs(e, t);
      },
      useHostTransitionStatus: oa,
      useMemoCache: It,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", P(), nt().memoizedState;
      }
    }, Yi = {
      readContext: function(e) {
        return k(), _t(e);
      },
      use: function(e) {
        return j(), wn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", j(), Ke(), Gf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", j(), Ke(), _t(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", j(), Ke(), Os(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", j(), Ke(), zs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", j(), Ke(), Qa(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", j(), Ke(), Ds(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", j(), Ke();
        var a = Y.H;
        Y.H = Yi;
        try {
          return Ms(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", j(), Ke();
        var i = Y.H;
        Y.H = Yi;
        try {
          return ft(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", j(), Ke(), jf(e);
      },
      useState: function(e) {
        G = "useState", j(), Ke();
        var t = Y.H;
        Y.H = Yi;
        try {
          return Du(e);
        } finally {
          Y.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", j(), Ke();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", j(), Ke(), Us(e, t);
      },
      useTransition: function() {
        return G = "useTransition", j(), Ke(), jn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", j(), Ke(), Ou(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", j(), Ke(), Gn();
      },
      useFormState: function(e, t) {
        return G = "useFormState", j(), Ke(), mo(e, t);
      },
      useActionState: function(e, t) {
        return G = "useActionState", j(), Ke(), mo(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", j(), Ke(), yn(e);
      },
      useMemoCache: function(e) {
        return j(), It(e);
      },
      useHostTransitionStatus: oa,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", Ke(), fc();
      }
    }, Ku = {
      readContext: function(e) {
        return k(), _t(e);
      },
      use: function(e) {
        return j(), wn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", j(), P(), cc(e, t);
      },
      useContext: function(e) {
        return G = "useContext", j(), P(), _t(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", j(), P(), ol(2048, wl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", j(), P(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", j(), P(), ol(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", j(), P(), ol(4, ea, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", j(), P();
        var a = Y.H;
        Y.H = Ku;
        try {
          return yi(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", j(), P();
        var i = Y.H;
        Y.H = Ku;
        try {
          return Va(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", j(), P(), nt().memoizedState;
      },
      useState: function() {
        G = "useState", j(), P();
        var e = Y.H;
        Y.H = Ku;
        try {
          return Va(rt);
        } finally {
          Y.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", j(), P();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", j(), P(), Lf(e, t);
      },
      useTransition: function() {
        return G = "useTransition", j(), P(), Hs();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", j(), P(), wf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", j(), P(), nt().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", j(), P(), As(e);
      },
      useActionState: function(e) {
        return G = "useActionState", j(), P(), As(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", j(), P(), zu(e, t);
      },
      useMemoCache: function(e) {
        return j(), It(e);
      },
      useHostTransitionStatus: oa,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", P(), nt().memoizedState;
      }
    }, jv = {
      readContext: function(e) {
        return k(), _t(e);
      },
      use: function(e) {
        return j(), wn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", j(), P(), cc(e, t);
      },
      useContext: function(e) {
        return G = "useContext", j(), P(), _t(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", j(), P(), ol(2048, wl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", j(), P(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", j(), P(), ol(4, xa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", j(), P(), ol(4, ea, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", j(), P();
        var a = Y.H;
        Y.H = Ku;
        try {
          return yi(e, t);
        } finally {
          Y.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", j(), P();
        var i = Y.H;
        Y.H = Ku;
        try {
          return ic(e, t, a);
        } finally {
          Y.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", j(), P(), nt().memoizedState;
      },
      useState: function() {
        G = "useState", j(), P();
        var e = Y.H;
        Y.H = Ku;
        try {
          return ic(rt);
        } finally {
          Y.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", j(), P();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", j(), P(), Cs(e, t);
      },
      useTransition: function() {
        return G = "useTransition", j(), P(), xs();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", j(), P(), wf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", j(), P(), nt().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", j(), P(), po(e);
      },
      useActionState: function(e) {
        return G = "useActionState", j(), P(), po(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", j(), P(), Rs(e, t);
      },
      useMemoCache: function(e) {
        return j(), It(e);
      },
      useHostTransitionStatus: oa,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", P(), nt().memoizedState;
      }
    };
    var rb = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = va;
        va = !0;
        try {
          return e(t, a);
        } finally {
          va = i;
        }
      }
    }, Wg = rb["react-stack-bottom-frame"].bind(rb), sb = {
      "react-stack-bottom-frame": function(e) {
        var t = va;
        va = !0;
        try {
          return e.render();
        } finally {
          va = t;
        }
      }
    }, db = sb["react-stack-bottom-frame"].bind(sb), hb = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Re(e, e.return, a);
        }
      }
    }, Fg = hb["react-stack-bottom-frame"].bind(hb), yb = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Re(e, e.return, f);
        }
      }
    }, mb = yb["react-stack-bottom-frame"].bind(yb), pb = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, OS = pb["react-stack-bottom-frame"].bind(pb), vb = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Re(e, t, i);
        }
      }
    }, gb = vb["react-stack-bottom-frame"].bind(vb), bb = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, DS = bb["react-stack-bottom-frame"].bind(bb), Sb = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          Re(e, t, i);
        }
      }
    }, zS = Sb["react-stack-bottom-frame"].bind(Sb), Tb = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, ef = Tb["react-stack-bottom-frame"].bind(Tb), ch = null, Jm = 0, ke = null, Ig, Eb = Ig = !1, Rb = {}, Ab = {}, Ob = {};
    yt = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = fe(e), o = i || "null";
        if (!Rb[o]) {
          Rb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = fe(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = fe(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), se(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var oh = Zf(!0), Db = Zf(!1), hu = St(null), qi = null, fh = 1, km = 2, Bl = St(0), zb = {}, Mb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), xb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), wb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set(), Yb = /* @__PURE__ */ new Set();
    Object.freeze(zb);
    var Pg = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = sa(e), o = xn(i);
        o.payload = t, a != null && (ry(a), o.callback = a), t = sn(e, o, i), t !== null && (Zt(t, e, i), fi(t, e, i)), On(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = sa(e), o = xn(i);
        o.tag = lb, o.payload = t, a != null && (ry(a), o.callback = a), t = sn(e, o, i), t !== null && (Zt(t, e, i), fi(t, e, i)), On(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = sa(e), i = xn(a);
        i.tag = ab, t != null && (ry(t), i.callback = t), t = sn(e, i, a), t !== null && (Zt(t, e, a), fi(t, e, a)), ce !== null && typeof ce.markForceUpdateScheduled == "function" && ce.markForceUpdateScheduled(e, a);
      }
    }, e0 = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, rh = null, t0 = null, qb = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Xl = !1, jb = {}, Gb = {}, Lb = {}, Vb = {}, sh = !1, Xb = {}, l0 = {}, a0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Qb = !1, Zb = null;
    Zb = /* @__PURE__ */ new Set();
    var Gc = !1, sl = !1, n0 = !1, Kb = typeof WeakSet == "function" ? WeakSet : Set, Ql = null, dh = null, hh = null, Tl = null, en = !1, Ju = null, $m = 8192, MS = {
      getCacheForType: function(e) {
        var t = _t(Nl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return Ca;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Wm = Symbol.for;
      Wm("selector.component"), Wm("selector.has_pseudo_class"), Wm("selector.role"), Wm("selector.test_id"), Wm("selector.text");
    }
    var US = [], CS = typeof WeakMap == "function" ? WeakMap : Map, Tn = 0, Na = 2, ku = 4, Lc = 0, Fm = 1, yh = 2, u0 = 3, Lr = 4, Gv = 6, Jb = 5, Rt = Tn, Ht = null, et = null, tt = 0, tn = 0, Im = 1, Vr = 2, Pm = 3, kb = 4, i0 = 5, mh = 6, ep = 7, c0 = 8, Xr = 9, zt = tn, En = null, tf = !1, ph = !1, o0 = !1, ji = 0, al = Lc, lf = 0, af = 0, f0 = 0, Rn = 0, Qr = 0, tp = null, wa = null, Lv = !1, r0 = 0, $b = 300, Vv = 1 / 0, Wb = 500, lp = null, nf = null, _S = 0, HS = 1, xS = 2, Zr = 0, Fb = 1, Ib = 2, Pb = 3, NS = 4, s0 = 5, ta = 0, uf = null, vh = null, cf = 0, d0 = 0, h0 = null, e1 = null, wS = 50, ap = 0, y0 = null, m0 = !1, Xv = !1, BS = 50, Kr = 0, np = null, gh = !1, Qv = null, t1 = !1, l1 = /* @__PURE__ */ new Set(), YS = {}, Zv = null, bh = null, p0 = !1, v0 = !1, Kv = !1, g0 = !1, Jr = 0, b0 = {};
    (function() {
      for (var e = 0; e < Bg.length; e++) {
        var t = Bg[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), un(a, "on" + t);
      }
      un(G0, "onAnimationEnd"), un(L0, "onAnimationIteration"), un(V0, "onAnimationStart"), un("dblclick", "onDoubleClick"), un("focusin", "onFocus"), un("focusout", "onBlur"), un(yS, "onTransitionRun"), un(mS, "onTransitionStart"), un(pS, "onTransitionCancel"), un(X0, "onTransitionEnd");
    })(), ae("onMouseEnter", ["mouseout", "mouseover"]), ae("onMouseLeave", ["mouseout", "mouseover"]), ae("onPointerEnter", ["pointerout", "pointerover"]), ae("onPointerLeave", ["pointerout", "pointerover"]), ee(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), ee(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), ee("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ee(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), ee(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), ee(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var up = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), S0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(up)
    ), Jv = "_reactListening" + Math.random().toString(36).slice(2), a1 = !1, n1 = !1, kv = !1, u1 = !1, $v = !1, Wv = !1, i1 = !1, Fv = {}, qS = /\r\n?/g, jS = /\u0000|\uFFFD/g, kr = "http://www.w3.org/1999/xlink", T0 = "http://www.w3.org/XML/1998/namespace", GS = "javascript:throw new Error('React form unexpectedly submitted.')", LS = "suppressHydrationWarning", Iv = "$", Pv = "/$", Vc = "$?", ip = "$!", VS = 1, XS = 2, QS = 4, E0 = "F!", c1 = "F", o1 = "complete", ZS = "style", Xc = 0, Sh = 1, eg = 2, R0 = null, A0 = null, f1 = { dialog: !0, webview: !0 }, O0 = null, r1 = typeof setTimeout == "function" ? setTimeout : void 0, KS = typeof clearTimeout == "function" ? clearTimeout : void 0, $r = -1, s1 = typeof Promise == "function" ? Promise : void 0, JS = typeof queueMicrotask == "function" ? queueMicrotask : typeof s1 < "u" ? function(e) {
      return s1.resolve(null).then(e).catch(Wy);
    } : r1, D0 = null, Wr = 0, cp = 1, d1 = 2, h1 = 3, yu = 4, mu = /* @__PURE__ */ new Map(), y1 = /* @__PURE__ */ new Set(), Qc = De.d;
    De.d = {
      f: function() {
        var e = Qc.f(), t = bc();
        return e || t;
      },
      r: function(e) {
        var t = Al(e);
        t !== null && t.tag === 5 && t.type === "form" ? cy(t) : Qc.r(e);
      },
      D: function(e) {
        Qc.D(e), av("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Qc.C(e, t), av("preconnect", e, t);
      },
      L: function(e, t, a) {
        Qc.L(e, t, a);
        var i = Th;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Ta(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Ta(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Ta(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Ta(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = Ai(e);
              break;
            case "script":
              f = Dc(e);
          }
          mu.has(f) || (e = Ze(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), mu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            eu(f)
          ) || t === "script" && i.querySelector(zc(f)) || (t = i.createElement("link"), Jt(t, "link", e), D(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Qc.m(e, t);
        var a = Th;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Ta(i) + '"][href="' + Ta(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Dc(e);
          }
          if (!mu.has(f) && (e = Ze({ rel: "modulepreload", href: e }, t), mu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(zc(f)))
                  return;
            }
            i = a.createElement("link"), Jt(i, "link", e), D(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Qc.X(e, t);
        var a = Th;
        if (a && e) {
          var i = m(a).hoistableScripts, o = Dc(e), f = i.get(o);
          f || (f = a.querySelector(
            zc(o)
          ), f || (e = Ze({ src: e, async: !0 }, t), (t = mu.get(o)) && nm(e, t), f = a.createElement("script"), D(f), Jt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Qc.S(e, t, a);
        var i = Th;
        if (i && e) {
          var o = m(i).hoistableStyles, f = Ai(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Wr, preload: null };
            if (d = i.querySelector(
              eu(f)
            ))
              h.loading = cp | yu;
            else {
              e = Ze(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = mu.get(f)) && am(e, a);
              var v = d = i.createElement("link");
              D(v), Jt(v, "link", e), v._p = new Promise(function(b, w) {
                v.onload = b, v.onerror = w;
              }), v.addEventListener("load", function() {
                h.loading |= cp;
              }), v.addEventListener("error", function() {
                h.loading |= d1;
              }), h.loading |= yu, Ad(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Qc.M(e, t);
        var a = Th;
        if (a && e) {
          var i = m(a).hoistableScripts, o = Dc(e), f = i.get(o);
          f || (f = a.querySelector(
            zc(o)
          ), f || (e = Ze({ src: e, async: !0, type: "module" }, t), (t = mu.get(o)) && nm(e, t), f = a.createElement("script"), D(f), Jt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Th = typeof document > "u" ? null : document, tg = null, op = null, z0 = null, lg = null, Fr = Og, fp = {
      $$typeof: Wa,
      Provider: null,
      Consumer: null,
      _currentValue: Fr,
      _currentValue2: Fr,
      _threadCount: 0
    }, m1 = "%c%s%c ", p1 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", v1 = "", ag = " ", kS = Function.prototype.bind, g1 = !1, b1 = null, S1 = null, T1 = null, E1 = null, R1 = null, A1 = null, O1 = null, D1 = null, z1 = null;
    b1 = function(e, t, a, i) {
      t = q(e, t), t !== null && (a = te(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = na(e, 2), a !== null && Zt(a, e, 2));
    }, S1 = function(e, t, a) {
      t = q(e, t), t !== null && (a = Se(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = na(e, 2), a !== null && Zt(a, e, 2));
    }, T1 = function(e, t, a, i) {
      t = q(e, t), t !== null && (a = Ce(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ze({}, e.memoizedProps), a = na(e, 2), a !== null && Zt(a, e, 2));
    }, E1 = function(e, t, a) {
      e.pendingProps = te(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = na(e, 2), t !== null && Zt(t, e, 2);
    }, R1 = function(e, t) {
      e.pendingProps = Se(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = na(e, 2), t !== null && Zt(t, e, 2);
    }, A1 = function(e, t, a) {
      e.pendingProps = Ce(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = na(e, 2), t !== null && Zt(t, e, 2);
    }, O1 = function(e) {
      var t = na(e, 2);
      t !== null && Zt(t, e, 2);
    }, D1 = function(e) {
      it = e;
    }, z1 = function(e) {
      Oe = e;
    };
    var ng = !0, ug = null, M0 = !1, of = null, ff = null, rf = null, rp = /* @__PURE__ */ new Map(), sp = /* @__PURE__ */ new Map(), sf = [], $S = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), ig = null;
    if (gr.prototype.render = Cd.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Xe(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = sa(i);
      Et(i, o, a, t, null, null);
    }, gr.prototype.unmount = Cd.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (Rt & (Na | ku)) !== Tn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Et(e.current, 2, null, e, null, null), bc(), t[Hi] = null;
      }
    }, gr.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = yf();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < sf.length && t !== 0 && t < sf[a].priority; a++) ;
        sf.splice(a, 0, e), a === 0 && fv(e);
      }
    }, function() {
      var e = br.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), De.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Nt(t), e = e !== null ? Me(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: Y,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = b1, e.overrideHookStateDeletePath = S1, e.overrideHookStateRenamePath = T1, e.overrideProps = E1, e.overridePropsDeletePath = R1, e.overridePropsRenamePath = A1, e.scheduleUpdate = O1, e.setErrorHandler = D1, e.setSuspenseHandler = z1, e.scheduleRefresh = _e, e.scheduleRoot = ne, e.setRefreshHandler = At, e.getCurrentFiber = Tg, e.getLaneLabelMap = Eg, e.injectProfilingHooks = nl, Ee(e);
    }() && S && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var M1 = window.location.protocol;
      /^(https?|file):$/.test(M1) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (M1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    mp.createRoot = function(e, t) {
      if (!Xe(e))
        throw Error("Target container is not a DOM element.");
      dv(e);
      var a = !1, i = "", o = sy, f = Lp, d = Ys, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === zi && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = cm(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[Hi] = t.current, Xy(e), new Cd(t);
    }, mp.hydrateRoot = function(e, t, a) {
      if (!Xe(e))
        throw Error("Target container is not a DOM element.");
      dv(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = sy, d = Lp, h = Ys, v = null, b = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (v = a.unstable_transitionCallbacks), a.formState !== void 0 && (b = a.formState)), t = cm(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        v,
        b
      ), t.context = om(null), a = t.current, i = sa(a), i = El(i), o = xn(i), o.callback = null, sn(a, o, i), a = i, t.current.lanes = a, pu(t, a), Ja(t), e[Hi] = t.current, Xy(e), new gr(t);
    }, mp.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), mp;
}
var X1;
function rT() {
  if (X1) return fg.exports;
  X1 = 1;
  function q() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q);
      } catch (te) {
        console.error(te);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (q(), fg.exports = oT()) : fg.exports = fT(), fg.exports;
}
var sT = rT();
const dT = /* @__PURE__ */ FS(sT);
function hT({ config: q, onClose: te }) {
  var C, Se, Oe, it, yt, j, k, oe, W, M, ne, _e, At, Xe, Fe, Ft, lt, Nt, Me, vt, Le, gt, fe, St, pe, Te, Tt, Ut, ct, A, K, F, me;
  const Ce = {
    position: "fixed",
    bottom: (((Se = (C = q.theme) == null ? void 0 : C.button) == null ? void 0 : Se.bottom) || 20) + 60,
    right: ((it = (Oe = q.theme) == null ? void 0 : Oe.button) == null ? void 0 : it.right) || 20,
    width: ((j = (yt = q.theme) == null ? void 0 : yt.chatWindow) == null ? void 0 : j.width) || 400,
    height: ((oe = (k = q.theme) == null ? void 0 : k.chatWindow) == null ? void 0 : oe.height) || 600,
    backgroundColor: ((M = (W = q.theme) == null ? void 0 : W.chatWindow) == null ? void 0 : M.backgroundColor) || "#fff",
    borderRadius: 10,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    zIndex: 1001,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    fontSize: ((_e = (ne = q.theme) == null ? void 0 : ne.chatWindow) == null ? void 0 : _e.fontSize) || 16
  };
  return /* @__PURE__ */ Zl.jsxs("div", { style: Ce, children: [
    /* @__PURE__ */ Zl.jsxs("div", { style: {
      padding: "10px",
      backgroundColor: "#f36539",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ Zl.jsxs("div", { style: { display: "flex", alignItems: "center" }, children: [
        /* @__PURE__ */ Zl.jsx(
          "img",
          {
            src: (Xe = (At = q.theme) == null ? void 0 : At.chatWindow) == null ? void 0 : Xe.titleAvatarSrc,
            alt: "avatar",
            style: { width: 30, height: 30, borderRadius: 20, marginRight: 10 }
          }
        ),
        /* @__PURE__ */ Zl.jsx("strong", { children: ((Ft = (Fe = q.theme) == null ? void 0 : Fe.chatWindow) == null ? void 0 : Ft.title) || "BotStitch" })
      ] }),
      /* @__PURE__ */ Zl.jsx("button", { onClick: te, style: { background: "none", border: "none", color: "white", fontSize: 20 }, children: "×" })
    ] }),
    /* @__PURE__ */ Zl.jsx("div", { style: { flex: 1, padding: 10, overflowY: "auto" }, children: /* @__PURE__ */ Zl.jsx("div", { style: { color: "#888" }, children: ((Nt = (lt = q.theme) == null ? void 0 : lt.chatWindow) == null ? void 0 : Nt.welcomeMessage) || "Welcome!" }) }),
    /* @__PURE__ */ Zl.jsxs("div", { style: { padding: 10, borderTop: "1px solid #eee" }, children: [
      /* @__PURE__ */ Zl.jsx(
        "input",
        {
          type: "text",
          placeholder: ((Le = (vt = (Me = q.theme) == null ? void 0 : Me.chatWindow) == null ? void 0 : vt.textInput) == null ? void 0 : Le.placeholder) || "Type a message...",
          maxLength: ((St = (fe = (gt = q.theme) == null ? void 0 : gt.chatWindow) == null ? void 0 : fe.textInput) == null ? void 0 : St.maxChars) || 100,
          style: {
            width: "calc(100% - 50px)",
            padding: 8,
            borderRadius: ((Tt = (Te = (pe = q.theme) == null ? void 0 : pe.chatWindow) == null ? void 0 : Te.textInput) == null ? void 0 : Tt.borderRadius) || 6,
            border: "1px solid #ccc"
          }
        }
      ),
      /* @__PURE__ */ Zl.jsx(
        "button",
        {
          style: {
            marginLeft: 5,
            backgroundColor: ((A = (ct = (Ut = q.theme) == null ? void 0 : Ut.chatWindow) == null ? void 0 : ct.textInput) == null ? void 0 : A.sendButtonColor) || "#e5a38f",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: ((me = (F = (K = q.theme) == null ? void 0 : K.chatWindow) == null ? void 0 : F.textInput) == null ? void 0 : me.sendButtonBorderRadius) || 20
          },
          children: "Send"
        }
      )
    ] })
  ] });
}
function yT({ config: q = {}, onClick: te }) {
  const Ce = {
    position: "fixed",
    right: q.right || 20,
    bottom: q.bottom || 20,
    width: q.size || 50,
    height: q.size || 50,
    backgroundColor: q.backgroundColor || "#6f4fe3",
    borderRadius: q.borderRadius === "rounded" ? "50%" : "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 1e3
  }, C = {
    width: q.customIconSize || 30,
    height: q.customIconSize || 30,
    borderRadius: q.customIconBorderRadius || 8
  };
  return /* @__PURE__ */ Zl.jsx("div", { style: Ce, onClick: te, title: "Open chat", children: /* @__PURE__ */ Zl.jsx(
    "img",
    {
      src: q.customIconSrc || "https://www.svgrepo.com/show/339963/chat-bot.svg",
      style: C,
      alt: "chatbot icon"
    }
  ) });
}
function mT({ config: q }) {
  var Se;
  const [te, Ce] = aT.useState(!1), C = () => Ce(!te);
  return /* @__PURE__ */ Zl.jsxs(Zl.Fragment, { children: [
    /* @__PURE__ */ Zl.jsx(yT, { config: (Se = q.theme) == null ? void 0 : Se.button, onClick: C }),
    te && /* @__PURE__ */ Zl.jsx(hT, { config: q, onClose: C })
  ] });
}
const pT = {
  init: (q) => {
    const te = document.createElement("div");
    te.id = "botstitch-chatbot-root", document.body.appendChild(te), dT.createRoot(te).render(/* @__PURE__ */ Zl.jsx(mT, { config: q }));
  }
};
export {
  pT as default
};
