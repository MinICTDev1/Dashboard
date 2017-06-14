(function () {
    var a = "\n//# sourceURL=",
        k = "' of type ",
        n = '<script type="text/javascript" src="',
        p = "SCRIPT",
        r = "array",
        t = "complete",
        u = "function",
        v = "google.charts.load",
        w = "hasOwnProperty",
        x = "number",
        y = "object",
        z = "pre-45",
        A = "propertyIsEnumerable",
        B = "string",
        C = "text/javascript",
        D = "toLocaleString";

    function E() {
        return function (b) {
            return b
        }
    }

    function F() {
        return function () {}
    }

    function G(b) {
        return function () {
            return this[b]
        }
    }
    var I, J = J || {};
    J.scope = {};
    J.Qp = function (b, c, d) {
        if (null == b) throw new TypeError("The 'this' value for String.prototype." + d + " must not be null or undefined");
        if (c instanceof RegExp) throw new TypeError("First argument to String.prototype." + d + " must not be a regular expression");
        return b + ""
    };
    J.Dh = !1;
    J.cm = !1;
    J.dm = !1;
    J.defineProperty = J.Dh || typeof Object.defineProperties == u ? Object.defineProperty : function (b, c, d) {
        b != Array.prototype && b != Object.prototype && (b[c] = d.value)
    };
    J.Fj = function (b) {
        return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b
    };
    J.global = J.Fj(this);
    J.Qk = function (b) {
        if (b) {
            for (var c = J.global, d = ["Promise"], e = 0; e < d.length - 1; e++) {
                var f = d[e];
                f in c || (c[f] = {});
                c = c[f]
            }
            d = d[d.length - 1];
            e = c[d];
            b = b(e);
            b != e && null != b && J.defineProperty(c, d, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
    J.Bq = function (b, c, d) {
        b instanceof String && (b = String(b));
        for (var e = b.length, f = 0; f < e; f++) {
            var g = b[f];
            if (c.call(d, g, f, b)) return {
                Wj: f,
                Il: g
            }
        }
        return {
            Wj: -1,
            Il: void 0
        }
    };
    J.vi = "jscomp_symbol_";
    J.pg = function () {
        J.pg = F();
        J.global.Symbol || (J.global.Symbol = J.Symbol)
    };
    J.tl = 0;
    J.Symbol = function (b) {
        return J.vi + (b || "") + J.tl++
    };
    J.Gd = function () {
        J.pg();
        var b = J.global.Symbol.iterator;
        b || (b = J.global.Symbol.iterator = J.global.Symbol("iterator"));
        typeof Array.prototype[b] != u && J.defineProperty(Array.prototype, b, {
            configurable: !0,
            writable: !0,
            value: function () {
                return J.cf(this)
            }
        });
        J.Gd = F()
    };
    J.cf = function (b) {
        var c = 0;
        return J.rk(function () {
            return c < b.length ? {
                done: !1,
                value: b[c++]
            } : {
                done: !0
            }
        })
    };
    J.rk = function (b) {
        J.Gd();
        b = {
            next: b
        };
        b[J.global.Symbol.iterator] = function () {
            return this
        };
        return b
    };
    J.Pg = function (b) {
        J.Gd();
        var c = b[Symbol.iterator];
        return c ? c.call(b) : J.cf(b)
    };
    J.Vh = !1;
    J.Qk(function (b) {
        function c(b) {
            this.$ = g.wa;
            this.ia = void 0;
            this.Xb = [];
            var c = this.hd();
            try {
                b(c.resolve, c.reject)
            } catch (q) {
                c.reject(q)
            }
        }

        function d() {
            this.La = null
        }

        function e(b) {
            return b instanceof c ? b : new c(function (c) {
                c(b)
            })
        }
        if (b && !J.Vh) return b;
        d.prototype.df = function (b) {
            null == this.La && (this.La = [], this.Ki());
            this.La.push(b)
        };
        d.prototype.Ki = function () {
            var b = this;
            this.ef(function () {
                b.rj()
            })
        };
        var f = J.global.setTimeout;
        d.prototype.ef = function (b) {
            f(b, 0)
        };
        d.prototype.rj = function () {
            for (; this.La && this.La.length;) {
                var b =
                    this.La;
                this.La = [];
                for (var c = 0; c < b.length; ++c) {
                    var d = b[c];
                    delete b[c];
                    try {
                        d()
                    } catch (H) {
                        this.Li(H)
                    }
                }
            }
            this.La = null
        };
        d.prototype.Li = function (b) {
            this.ef(function () {
                throw b;
            })
        };
        var g = {
            wa: 0,
            Ja: 1,
            ja: 2
        };
        c.prototype.hd = function () {
            function b(b) {
                return function (e) {
                    d || (d = !0, b.call(c, e))
                }
            }
            var c = this,
                d = !1;
            return {
                resolve: b(this.Vk),
                reject: b(this.Yd)
            }
        };
        c.prototype.Vk = function (b) {
            if (b === this) this.Yd(new TypeError("A Promise cannot resolve to itself"));
            else if (b instanceof c) this.ll(b);
            else {
                a: switch (typeof b) {
                    case y:
                        var d =
                            null != b;
                        break a;
                    case u:
                        d = !0;
                        break a;
                    default:
                        d = !1
                }
                d ? this.Uk(b) : this.Gf(b)
            }
        };
        c.prototype.Uk = function (b) {
            var c = void 0;
            try {
                c = b.then
            } catch (q) {
                this.Yd(q);
                return
            }
            typeof c == u ? this.ml(c, b) : this.Gf(b)
        };
        c.prototype.Yd = function (b) {
            this.lh(g.ja, b)
        };
        c.prototype.Gf = function (b) {
            this.lh(g.Ja, b)
        };
        c.prototype.lh = function (b, c) {
            if (this.$ != g.wa) throw Error("Cannot settle(" + b + ", " + c | "): Promise already settled in state" + this.$);
            this.$ = b;
            this.ia = c;
            this.tj()
        };
        c.prototype.tj = function () {
            if (null != this.Xb) {
                for (var b = this.Xb,
                        c = 0; c < b.length; ++c) b[c].call(), b[c] = null;
                this.Xb = null
            }
        };
        var h = new d;
        c.prototype.ll = function (b) {
            var c = this.hd();
            b.ic(c.resolve, c.reject)
        };
        c.prototype.ml = function (b, c) {
            var d = this.hd();
            try {
                b.call(c, d.resolve, d.reject)
            } catch (H) {
                d.reject(H)
            }
        };
        c.prototype.then = function (b, d) {
            function e(b, c) {
                return typeof b == u ? function (c) {
                    try {
                        f(b(c))
                    } catch (ca) {
                        g(ca)
                    }
                } : c
            }
            var f, g, h = new c(function (b, c) {
                f = b;
                g = c
            });
            this.ic(e(b, f), e(d, g));
            return h
        };
        c.prototype["catch"] = function (b) {
            return this.then(void 0, b)
        };
        c.prototype.ic = function (b,
            c) {
            function d() {
                switch (e.$) {
                    case g.Ja:
                        b(e.ia);
                        break;
                    case g.ja:
                        c(e.ia);
                        break;
                    default:
                        throw Error("Unexpected state: " + e.$);
                }
            }
            var e = this;
            null == this.Xb ? h.df(d) : this.Xb.push(function () {
                h.df(d)
            })
        };
        c.resolve = e;
        c.reject = function (b) {
            return new c(function (c, d) {
                d(b)
            })
        };
        c.race = function (b) {
            return new c(function (c, d) {
                for (var f = J.Pg(b), g = f.next(); !g.done; g = f.next()) e(g.value).ic(c, d)
            })
        };
        c.all = function (b) {
            var d = J.Pg(b),
                f = d.next();
            return f.done ? e([]) : new c(function (b, c) {
                function g(c) {
                    return function (d) {
                        h[c] = d;
                        l--;
                        0 == l && b(h)
                    }
                }
                var h = [],
                    l = 0;
                do h.push(void 0), l++, e(f.value).ic(g(h.length - 1), c), f = d.next(); while (!f.done)
            })
        };
        return c
    });
    var K = K || {};
    K.global = this;
    K.P = function (b) {
        return void 0 !== b
    };
    K.L = function (b) {
        return typeof b == B
    };
    K.$j = function (b) {
        return "boolean" == typeof b
    };
    K.Ub = function (b) {
        return typeof b == x
    };
    K.nd = function (b, c, d) {
        b = b.split(".");
        d = d || K.global;
        b[0] in d || !d.execScript || d.execScript("var " + b[0]);
        for (var e; b.length && (e = b.shift());) !b.length && K.P(c) ? d[e] = c : d = d[e] && d[e] !== Object.prototype[e] ? d[e] : d[e] = {}
    };
    K.define = function (b, c) {
        K.nd(b, c)
    };
    K.ea = !0;
    K.ba = "en";
    K.ad = !0;
    K.ti = !1;
    K.Rh = !K.ea;
    K.Fe = !1;
    K.zs = function (b) {
        if (K.Ld()) throw Error("goog.provide can not be used within a goog.module.");
        K.pf(b)
    };
    K.pf = function (b, c) {
        K.nd(b, c)
    };
    K.Ai = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
    K.Td = function (b) {
        if (!K.L(b) || !b || -1 == b.search(K.Ai)) throw Error("Invalid module identifier");
        if (!K.Ld()) throw Error("Module " + b + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
        if (K.ma.Ud) throw Error("goog.module may only be called once per module.");
        K.ma.Ud = b
    };
    K.Td.get = function () {
        return null
    };
    K.Td.Vq = function () {
        return null
    };
    K.ma = null;
    K.Ld = function () {
        return null != K.ma
    };
    K.Td.kd = function () {
        K.ma.kd = !0
    };
    K.qt = function (b) {
        if (K.Rh) throw b = b || "", Error("Importing test-only code into non-debug environment" + (b ? ": " + b : "."));
    };
    K.Gq = F();
    K.vb = function (b) {
        b = b.split(".");
        for (var c = K.global, d; d = b.shift();)
            if (K.fb(c[d])) c = c[d];
            else return null;
        return c
    };
    K.er = function (b, c) {
        c = c || K.global;
        for (var d in b) c[d] = b[d]
    };
    K.ep = function (b, c, d, e) {
        if (K.Ce) {
            var f;
            b = b.replace(/\\/g, "/");
            var g = K.ka;
            e && "boolean" !== typeof e || (e = e ? {
                module: "goog"
            } : {});
            for (var h = 0; f = c[h]; h++) g.Vb[f] = b, g.Pd[b] = e;
            for (e = 0; c = d[e]; e++) b in g.hb || (g.hb[b] = {}), g.hb[b][c] = !0
        }
    };
    K.Tt = !1;
    K.Um = !0;
    K.Ck = function (b) {
        K.global.console && K.global.console.error(b)
    };
    K.Ls = F();
    K.Ka = "";
    K.Ra = F();
    K.cp = function () {
        throw Error("unimplemented abstract method");
    };
    K.fp = function (b) {
        b.Hd = void 0;
        b.Uq = function () {
            if (b.Hd) return b.Hd;
            K.ea && (K.ug[K.ug.length] = b);
            return b.Hd = new b
        }
    };
    K.ug = [];
    K.bi = !0;
    K.pi = K.ea;
    K.Ak = {};
    K.Ce = !1;
    K.We = "detect";
    K.wi = "transpile.js";
    K.Ce && (K.ka = {
            Pd: {},
            Vb: {},
            hb: {},
            wh: {},
            le: {},
            tb: {}
        }, K.og = function () {
            var b = K.global.document;
            return null != b && "write" in b
        }, K.uj = function () {
            if (K.P(K.global.Ae) && K.L(K.global.Ae)) K.Ka = K.global.Ae;
            else if (K.og()) {
                var b = K.global.document;
                var c = b.currentScript;
                b = c ? [c] : b.getElementsByTagName(p);
                for (c = b.length - 1; 0 <= c; --c) {
                    var d = b[c].src,
                        e = d.lastIndexOf("?"),
                        e = -1 == e ? d.length : e;
                    if ("base.js" == d.substr(e - 7, 7)) {
                        K.Ka = d.substr(0, e - 7);
                        break
                    }
                }
            }
        }, K.Fd = function (b, c) {
            (K.global.wm || K.Ql)(b, c) && (K.ka.le[b] = !0)
        }, K.$h = !(K.global.atob ||
            !K.global.document || !K.global.document.all), K.Zg = !1, K.Yj = function (b, c, d) {
            K.Fd("", 'goog.retrieveAndExec_("' + b + '", ' + c + ", " + d + ");")
        }, K.Wd = [], K.Xt = function (b, c) {
            return K.bi && K.P(K.global.JSON) ? "goog.loadModule(" + K.global.JSON.stringify(c + a + b + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + b + "\n"
        }, K.yk = function () {
            var b = K.Wd.length;
            if (0 < b) {
                var c = K.Wd;
                K.Wd = [];
                for (var d = 0; d < b; d++) K.Sg(c[d])
            }
            K.Zg = !1
        }, K.es = function (b) {
            K.zg(b) && K.Gi(b) && K.Sg(K.Ka + K.Ad(b))
        },
        K.zg = function (b) {
            var c = (b = K.Ad(b)) && K.ka.Pd[b] || {},
                d = c.lang || "es3";
            return b && ("goog" == c.module || K.Wg(d)) ? K.Ka + b in K.ka.tb : !1
        }, K.Gi = function (b) {
            if ((b = K.Ad(b)) && b in K.ka.hb)
                for (var c in K.ka.hb[b])
                    if (!K.jk(c) && !K.zg(c)) return !1;
            return !0
        }, K.Sg = function (b) {
            if (b in K.ka.tb) {
                var c = K.ka.tb[b];
                delete K.ka.tb[b];
                K.Qj(c)
            }
        }, K.$r = F(), K.Pl = function (b) {
            K.global.document.write(n + b + '">\x3c/script>')
        }, K.Hi = function (b) {
            var c = K.global.document,
                d = c.createElement("script");
            d.type = C;
            d.src = b;
            d.defer = !1;
            d.async = !1;
            c.head.appendChild(d)
        },
        K.Ql = function (b, c) {
            if (K.og()) {
                var d = K.global.document;
                if (!K.Fe && d.readyState == t) {
                    if (/\bdeps.js$/.test(b)) return !1;
                    throw Error('Cannot write "' + b + '" after document load');
                }
                void 0 === c ? K.$h ? (K.Zg = !0, c = " onreadystatechange='goog.onScriptLoad_(this, " + ++K.Ng + ")' ", d.write(n + b + '"' + c + ">\x3c/script>")) : K.Fe ? K.Hi(b) : K.Pl(b) : d.write('<script type="text/javascript">' + K.Rk(c) + "\x3c/script>");
                return !0
            }
            return !1
        }, K.Rk = function (b) {
            return b.replace(/<\/(SCRIPT)/ig, "\\x3c/$1")
        }, K.Wg = function (b) {
            if ("always" == K.We) return !0;
            if ("never" == K.We) return !1;
            K.Gc || (K.Gc = K.bj());
            if (b in K.Gc) return K.Gc[b];
            throw Error("Unknown language mode: " + b);
        }, K.Gc = null, K.Ng = 0, K.ts = function (b, c) {
            b.readyState == t && K.Ng == c && K.yk();
            return !0
        }, K.Yt = function (b) {
            function c(b) {
                if (!(b in f.le || b in f.wh)) {
                    f.wh[b] = !0;
                    if (b in f.hb)
                        for (var g in f.hb[b])
                            if (!K.jk(g))
                                if (g in f.Vb) c(f.Vb[g]);
                                else throw Error("Undefined nameToPath for " + g);
                    b in e || (e[b] = !0, d.push(b))
                }
            }
            var d = [],
                e = {},
                f = K.ka;
            c(b);
            for (var g = 0; g < d.length; g++) b = d[g], K.ka.le[b] = !0;
            var h = K.ma;
            K.ma =
                null;
            for (g = 0; g < d.length; g++)
                if (b = d[g]) {
                    var l = f.Pd[b] || {},
                        m = K.Wg(l.lang || "es3");
                    "goog" == l.module || m ? K.Yj(K.Ka + b, "goog" == l.module, m) : K.Fd(K.Ka + b)
                } else throw K.ma = h, Error("Undefined script input");
            K.ma = h
        }, K.Ad = function (b) {
            return b in K.ka.Vb ? K.ka.Vb[b] : null
        }, K.uj(), K.global.xm || K.Fd(K.Ka + "deps.js"));
    K.Dd = null;
    K.Gl = function () {
        if (null == K.Dd) {
            try {
                var b = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";')
            } catch (c) {
                b = !1
            }
            K.Dd = b
        }
        return K.Dd
    };
    K.Nl = function (b) {
        return "(function(){" + b + "\n;})();\n"
    };
    K.Zr = function (b) {
        var c = K.ma;
        try {
            K.ma = {
                Ud: void 0,
                kd: !1
            };
            if (K.ya(b)) var d = b.call(void 0, {});
            else if (K.L(b)) K.Gl() && (b = K.Nl(b)), d = K.xk.call(void 0, b);
            else throw Error("Invalid module definition");
            var e = K.ma.Ud;
            if (!K.L(e) || !e) throw Error('Invalid module name "' + e + '"');
            K.ma.kd ? K.pf(e, d) : K.pi && Object.seal && typeof d == y && null != d && Object.seal(d);
            K.Ak[e] = d
        } finally {
            K.ma = c
        }
    };
    K.xk = function (b) {
        eval(b);
        return {}
    };
    K.ms = function (b) {
        b = b.split("/");
        for (var c = 0; c < b.length;) "." == b[c] ? b.splice(c, 1) : c && ".." == b[c] && b[c - 1] && ".." != b[c - 1] ? b.splice(--c, 2) : c++;
        return b.join("/")
    };
    K.uk = function (b) {
        if (K.global.Mh) return K.global.Mh(b);
        try {
            var c = new K.global.XMLHttpRequest;
            c.open("get", b, !1);
            c.send();
            return 0 == c.status || 200 == c.status ? c.responseText : null
        } catch (d) {
            return null
        }
    };
    K.Ns = F();
    K.Kt = function (b, c) {
        var d = K.global.$jscomp;
        d || (K.global.$jscomp = d = {});
        var e = d.he;
        if (!e) {
            var f = K.Ka + K.wi,
                g = K.uk(f);
            if (g) {
                eval(g + a + f);
                if (K.global.$gwtExport && K.global.$gwtExport.$jscomp && !K.global.$gwtExport.$jscomp.transpile) throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(K.global.$gwtExport));
                K.global.$jscomp.he = K.global.$gwtExport.$jscomp.transpile;
                d = K.global.$jscomp;
                e = d.he
            }
        }
        if (!e) var h = " requires transpilation but no transpiler was found.",
            h = h + ' Please add "//javascript/closure:transpiler" as a data dependency to ensure it is included.',
            e = d.he = function (b, c) {
                K.Ck(c + h);
                return b
            };
        return e(b, c)
    };
    K.aa = function (b) {
        var c = typeof b;
        if (c == y)
            if (b) {
                if (b instanceof Array) return r;
                if (b instanceof Object) return c;
                var d = Object.prototype.toString.call(b);
                if ("[object Window]" == d) return y;
                if ("[object Array]" == d || typeof b.length == x && "undefined" != typeof b.splice && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("splice")) return r;
                if ("[object Function]" == d || "undefined" != typeof b.call && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("call")) return u
            } else return "null";
        else if (c == u && "undefined" == typeof b.call) return y;
        return c
    };
    K.Kr = function (b) {
        return null === b
    };
    K.fb = function (b) {
        return null != b
    };
    K.isArray = function (b) {
        return K.aa(b) == r
    };
    K.Qb = function (b) {
        var c = K.aa(b);
        return c == r || c == y && typeof b.length == x
    };
    K.wr = function (b) {
        return K.ha(b) && typeof b.getFullYear == u
    };
    K.ya = function (b) {
        return K.aa(b) == u
    };
    K.ha = function (b) {
        var c = typeof b;
        return c == y && null != b || c == u
    };
    K.ig = function (b) {
        return b[K.Xa] || (b[K.Xa] = ++K.zl)
    };
    K.ir = function (b) {
        return !!b[K.Xa]
    };
    K.Sk = function (b) {
        null !== b && "removeAttribute" in b && b.removeAttribute(K.Xa);
        try {
            delete b[K.Xa]
        } catch (c) {}
    };
    K.Xa = "closure_uid_" + (1E9 * Math.random() >>> 0);
    K.zl = 0;
    K.Tq = K.ig;
    K.Hs = K.Sk;
    K.Yi = function (b) {
        var c = K.aa(b);
        if (c == y || c == r) {
            if (b.clone) return b.clone();
            var c = c == r ? [] : {},
                d;
            for (d in b) c[d] = K.Yi(b[d]);
            return c
        }
        return b
    };
    K.Pi = function (b, c, d) {
        return b.call.apply(b.bind, arguments)
    };
    K.Oi = function (b, c, d) {
        if (!b) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function () {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, e);
                return b.apply(c, d)
            }
        }
        return function () {
            return b.apply(c, arguments)
        }
    };
    K.bind = function (b, c, d) {
        K.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? K.Pi : K.Oi;
        return K.bind.apply(null, arguments)
    };
    K.gb = function (b, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function () {
            var c = d.slice();
            c.push.apply(c, arguments);
            return b.apply(this, c)
        }
    };
    K.gs = function (b, c) {
        for (var d in c) b[d] = c[d]
    };
    K.now = K.ad && Date.now || function () {
        return +new Date
    };
    K.Qj = function (b) {
        if (K.global.execScript) K.global.execScript(b, "JavaScript");
        else if (K.global.eval) {
            if (null == K.oc)
                if (K.global.eval("var _evalTest_ = 1;"), "undefined" != typeof K.global._evalTest_) {
                    try {
                        delete K.global._evalTest_
                    } catch (e) {}
                    K.oc = !0
                } else K.oc = !1;
            if (K.oc) K.global.eval(b);
            else {
                var c = K.global.document,
                    d = c.createElement(p);
                d.type = C;
                d.defer = !1;
                d.appendChild(c.createTextNode(b));
                c.body.appendChild(d);
                c.body.removeChild(d)
            }
        } else throw Error("goog.globalEval not available");
    };
    K.oc = null;
    K.Rq = function (b, c) {
        function d(b) {
            b = b.split("-");
            for (var c = [], d = 0; d < b.length; d++) c.push(e(b[d]));
            return c.join("-")
        }

        function e(b) {
            return K.tf[b] || b
        }
        if ("." == String(b).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + b);
        var f = K.tf ? "BY_WHOLE" == K.hj ? e : d : E();
        b = c ? b + "-" + f(c) : f(b);
        return K.global.Lh ? K.global.Lh(b) : b
    };
    K.$s = function (b, c) {
        K.tf = b;
        K.hj = c
    };
    K.Wq = function (b, c) {
        c && (b = b.replace(/\{\$([^}]+)}/g, function (b, e) {
            return null != c && e in c ? c[e] : b
        }));
        return b
    };
    K.Xq = E();
    K.yf = function (b, c) {
        K.nd(b, c, void 0)
    };
    K.Aq = function (b, c, d) {
        b[c] = d
    };
    K.cb = function (b, c) {
        function d() {}
        d.prototype = c.prototype;
        b.Mc = c.prototype;
        b.prototype = new d;
        b.prototype.constructor = b;
        b.Ni = function (b, d, g) {
            for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f];
            return c.prototype[d].apply(b, e)
        }
    };
    K.Ni = function (b, c, d) {
        var e = arguments.callee.caller;
        if (K.ti || K.ea && !e) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
        if (e.Mc) {
            for (var f = Array(arguments.length - 1), g = 1; g < arguments.length; g++) f[g - 1] = arguments[g];
            return e.Mc.constructor.apply(b, f)
        }
        f = Array(arguments.length - 2);
        for (g = 2; g < arguments.length; g++) f[g - 2] = arguments[g];
        for (var g = !1, h = b.constructor; h; h = h.Mc && h.Mc.constructor)
            if (h.prototype[c] ===
                e) g = !0;
            else if (g) return h.prototype[c].apply(b, f);
        if (b[c] === e) return b.constructor.prototype[c].apply(b, f);
        throw Error("goog.base called from a method of one name to a method of a different name");
    };
    K.scope = function (b) {
        if (K.Ld()) throw Error("goog.scope is not supported within a goog.module.");
        b.call(K.global)
    };
    K.pa = function (b, c) {
        var d = c.constructor,
            e = c.ql;
        d && d != Object.prototype.constructor || (d = function () {
            throw Error("cannot instantiate an interface (no constructor defined).");
        });
        d = K.pa.cj(d, b);
        b && K.cb(d, b);
        delete c.constructor;
        delete c.ql;
        K.pa.bf(d.prototype, c);
        null != e && (e instanceof Function ? e(d) : K.pa.bf(d, e));
        return d
    };
    K.pa.oi = K.ea;
    K.pa.cj = function (b, c) {
        function d() {
            var c = b.apply(this, arguments) || this;
            c[K.Xa] = c[K.Xa];
            this.constructor === d && e && Object.seal instanceof Function && Object.seal(c);
            return c
        }
        if (!K.pa.oi) return b;
        var e = !K.pa.mk(c);
        return d
    };
    K.pa.mk = function (b) {
        return b && b.prototype && b.prototype[K.yi]
    };
    K.pa.Oe = ["constructor", w, "isPrototypeOf", A, D, "toString", "valueOf"];
    K.pa.bf = function (b, c) {
        for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]);
        for (var e = 0; e < K.pa.Oe.length; e++) d = K.pa.Oe[e], Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d])
    };
    K.Dt = F();
    K.yi = "goog_defineClass_legacy_unsealable";
    K.bj = function () {
        function b(b, c) {
            e ? d[b] = !0 : c() ? d[b] = !1 : e = d[b] = !0
        }

        function c(b) {
            try {
                return !!eval(b)
            } catch (h) {
                return !1
            }
        }
        var d = {
                es3: !1
            },
            e = !1,
            f = K.global.navigator && K.global.navigator.userAgent ? K.global.navigator.userAgent : "";
        b("es5", function () {
            return c("[1,].length==1")
        });
        b("es6", function () {
            var b = f.match(/Edge\/(\d+)(\.\d)*/i);
            return b && 15 > Number(b[1]) ? !1 : c('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()')
        });
        b("es6-impl", function () {
            return !0
        });
        b("es7", function () {
            return c("2 ** 2 == 4")
        });
        b("es8", function () {
            return c("async () => 1, true")
        });
        return d
    };
    K.debug = {};
    K.debug.Error = function (b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, K.debug.Error);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        b && (this.message = String(b))
    };
    K.cb(K.debug.Error, Error);
    K.debug.Error.prototype.name = "CustomError";
    K.a = {};
    K.a.fa = {
        Ia: 1,
        em: 2,
        fc: 3,
        tm: 4,
        Wm: 5,
        Vm: 6,
        lo: 7,
        Cm: 8,
        Yc: 9,
        Om: 10,
        Sh: 11,
        Zn: 12
    };
    K.f = {};
    K.f.Xc = !1;
    K.f.Uh = !1;
    K.f.Ye = {
        Me: "\u00a0"
    };
    K.f.startsWith = function (b, c) {
        return 0 == b.lastIndexOf(c, 0)
    };
    K.f.endsWith = function (b, c) {
        var d = b.length - c.length;
        return 0 <= d && b.indexOf(c, d) == d
    };
    K.f.Wi = function (b) {
        return 0 == K.f.hf("tel:", b.substr(0, 4))
    };
    K.f.Op = function (b, c) {
        return 0 == K.f.hf(c, b.substr(b.length - c.length, c.length))
    };
    K.f.Pp = function (b, c) {
        return b.toLowerCase() == c.toLowerCase()
    };
    K.f.sl = function (b, c) {
        for (var d = b.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < d.length;) e += d.shift() + f.shift();
        return e + d.join("%s")
    };
    K.f.Vp = function (b) {
        return b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
    };
    K.f.Jd = function (b) {
        return /^[\s\xa0]*$/.test(b)
    };
    K.f.zr = function (b) {
        return 0 == b.length
    };
    K.f.Tb = K.f.Jd;
    K.f.bk = function (b) {
        return K.f.Jd(K.f.Hk(b))
    };
    K.f.yr = K.f.bk;
    K.f.ur = function (b) {
        return !/[^\t\n\r ]/.test(b)
    };
    K.f.rr = function (b) {
        return !/[^a-zA-Z]/.test(b)
    };
    K.f.Lr = function (b) {
        return !/[^0-9]/.test(b)
    };
    K.f.sr = function (b) {
        return !/[^a-zA-Z0-9]/.test(b)
    };
    K.f.Rr = function (b) {
        return " " == b
    };
    K.f.Sr = function (b) {
        return 1 == b.length && " " <= b && "~" >= b || "\u0080" <= b && "\ufffd" >= b
    };
    K.f.Bt = function (b) {
        return b.replace(/(\r\n|\r|\n)+/g, " ")
    };
    K.f.Vi = function (b) {
        return b.replace(/(\r\n|\r|\n)/g, "\n")
    };
    K.f.os = function (b) {
        return b.replace(/\xa0|\s/g, " ")
    };
    K.f.ns = function (b) {
        return b.replace(/\xa0|[ \t]+/g, " ")
    };
    K.f.Up = function (b) {
        return b.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    K.f.trim = K.ad && String.prototype.trim ? function (b) {
        return b.trim()
    } : function (b) {
        return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    K.f.trimLeft = function (b) {
        return b.replace(/^[\s\xa0]+/, "")
    };
    K.f.trimRight = function (b) {
        return b.replace(/[\s\xa0]+$/, "")
    };
    K.f.hf = function (b, c) {
        b = String(b).toLowerCase();
        c = String(c).toLowerCase();
        return b < c ? -1 : b == c ? 0 : 1
    };
    K.f.Yg = function (b, c, d) {
        if (b == c) return 0;
        if (!b) return -1;
        if (!c) return 1;
        for (var e = b.toLowerCase().match(d), f = c.toLowerCase().match(d), g = Math.min(e.length, f.length), h = 0; h < g; h++) {
            d = e[h];
            var l = f[h];
            if (d != l) return b = parseInt(d, 10), !isNaN(b) && (c = parseInt(l, 10), !isNaN(c) && b - c) ? b - c : d < l ? -1 : 1
        }
        return e.length != f.length ? e.length - f.length : b < c ? -1 : 1
    };
    K.f.pr = function (b, c) {
        return K.f.Yg(b, c, /\d+|\D+/g)
    };
    K.f.xj = function (b, c) {
        return K.f.Yg(b, c, /\d+|\.\d+|\D+/g)
    };
    K.f.rs = K.f.xj;
    K.f.St = function (b) {
        return encodeURIComponent(String(b))
    };
    K.f.Rt = function (b) {
        return decodeURIComponent(b.replace(/\+/g, " "))
    };
    K.f.Xg = function (b, c) {
        return b.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>")
    };
    K.f.ua = function (b, c) {
        if (c) b = b.replace(K.f.me, "&amp;").replace(K.f.Le, "&lt;").replace(K.f.Ie, "&gt;").replace(K.f.Se, "&quot;").replace(K.f.Ue, "&#39;").replace(K.f.Ne, "&#0;"), K.f.Xc && (b = b.replace(K.f.Ge, "&#101;"));
        else {
            if (!K.f.Bh.test(b)) return b; - 1 != b.indexOf("&") && (b = b.replace(K.f.me, "&amp;")); - 1 != b.indexOf("<") && (b = b.replace(K.f.Le, "&lt;")); - 1 != b.indexOf(">") && (b = b.replace(K.f.Ie, "&gt;")); - 1 != b.indexOf('"') && (b = b.replace(K.f.Se, "&quot;")); - 1 != b.indexOf("'") && (b = b.replace(K.f.Ue, "&#39;")); - 1 != b.indexOf("\x00") &&
                (b = b.replace(K.f.Ne, "&#0;"));
            K.f.Xc && -1 != b.indexOf("e") && (b = b.replace(K.f.Ge, "&#101;"))
        }
        return b
    };
    K.f.me = /&/g;
    K.f.Le = /</g;
    K.f.Ie = />/g;
    K.f.Se = /"/g;
    K.f.Ue = /'/g;
    K.f.Ne = /\x00/g;
    K.f.Ge = /e/g;
    K.f.Bh = K.f.Xc ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
    K.f.th = function (b) {
        return K.f.contains(b, "&") ? !K.f.Uh && "document" in K.global ? K.f.uh(b) : K.f.Cl(b) : b
    };
    K.f.Ot = function (b, c) {
        return K.f.contains(b, "&") ? K.f.uh(b, c) : b
    };
    K.f.uh = function (b, c) {
        var d = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var e = c ? c.createElement("div") : K.global.document.createElement("div");
        return b.replace(K.f.Yh, function (b, c) {
            var f = d[b];
            if (f) return f;
            "#" == c.charAt(0) && (c = Number("0" + c.substr(1)), isNaN(c) || (f = String.fromCharCode(c)));
            f || (e.innerHTML = b + " ", f = e.firstChild.nodeValue.slice(0, -1));
            return d[b] = f
        })
    };
    K.f.Cl = function (b) {
        return b.replace(/&([^;]+);/g, function (b, d) {
            switch (d) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" != d.charAt(0) || (d = Number("0" + d.substr(1)), isNaN(d)) ? b : String.fromCharCode(d)
            }
        })
    };
    K.f.Yh = /&([^;\s<&]+);?/g;
    K.f.Ll = function (b) {
        return K.f.Xg(b.replace(/  /g, " &#160;"), void 0)
    };
    K.f.ys = function (b) {
        return b.replace(/(^|[\n ]) /g, "$1" + K.f.Ye.Me)
    };
    K.f.Ct = function (b, c) {
        for (var d = c.length, e = 0; e < d; e++) {
            var f = 1 == d ? c : c.charAt(e);
            if (b.charAt(0) == f && b.charAt(b.length - 1) == f) return b.substring(1, b.length - 1)
        }
        return b
    };
    K.f.truncate = function (b, c, d) {
        d && (b = K.f.th(b));
        b.length > c && (b = b.substring(0, c - 3) + "...");
        d && (b = K.f.ua(b));
        return b
    };
    K.f.Mt = function (b, c, d, e) {
        d && (b = K.f.th(b));
        e && b.length > c ? (e > c && (e = c), b = b.substring(0, c - e) + "..." + b.substring(b.length - e)) : b.length > c && (e = Math.floor(c / 2), b = b.substring(0, e + c % 2) + "..." + b.substring(b.length - e));
        d && (b = K.f.ua(b));
        return b
    };
    K.f.de = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\",
        "<": "<"
    };
    K.f.yc = {
        "'": "\\'"
    };
    K.f.quote = function (b) {
        b = String(b);
        for (var c = ['"'], d = 0; d < b.length; d++) {
            var e = b.charAt(d),
                f = e.charCodeAt(0);
            c[d + 1] = K.f.de[e] || (31 < f && 127 > f ? e : K.f.wf(e))
        }
        c.push('"');
        return c.join("")
    };
    K.f.zq = function (b) {
        for (var c = [], d = 0; d < b.length; d++) c[d] = K.f.wf(b.charAt(d));
        return c.join("")
    };
    K.f.wf = function (b) {
        if (b in K.f.yc) return K.f.yc[b];
        if (b in K.f.de) return K.f.yc[b] = K.f.de[b];
        var c = b.charCodeAt(0);
        if (31 < c && 127 > c) var d = b;
        else {
            if (256 > c) {
                if (d = "\\x", 16 > c || 256 < c) d += "0"
            } else d = "\\u", 4096 > c && (d += "0");
            d += c.toString(16).toUpperCase()
        }
        return K.f.yc[b] = d
    };
    K.f.contains = function (b, c) {
        return -1 != b.indexOf(c)
    };
    K.f.jf = function (b, c) {
        return K.f.contains(b.toLowerCase(), c.toLowerCase())
    };
    K.f.bq = function (b, c) {
        return b && c ? b.split(c).length - 1 : 0
    };
    K.f.Cb = function (b, c, d) {
        var e = b;
        0 <= c && c < b.length && 0 < d && (e = b.substr(0, c) + b.substr(c + d, b.length - c - d));
        return e
    };
    K.f.remove = function (b, c) {
        return b.replace(c, "")
    };
    K.f.Es = function (b, c) {
        c = new RegExp(K.f.Xd(c), "g");
        return b.replace(c, "")
    };
    K.f.Ks = function (b, c, d) {
        c = new RegExp(K.f.Xd(c), "g");
        return b.replace(c, d.replace(/\$/g, "$$$$"))
    };
    K.f.Xd = function (b) {
        return String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    };
    K.f.repeat = String.prototype.repeat ? function (b, c) {
        return b.repeat(c)
    } : function (b, c) {
        return Array(c + 1).join(b)
    };
    K.f.ws = function (b, c, d) {
        b = K.P(d) ? b.toFixed(d) : String(b);
        d = b.indexOf("."); - 1 == d && (d = b.length);
        return K.f.repeat("0", Math.max(0, c - d)) + b
    };
    K.f.Hk = function (b) {
        return null == b ? "" : String(b)
    };
    K.f.Jp = function (b) {
        return Array.prototype.join.call(arguments, "")
    };
    K.f.$q = function () {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ K.now()).toString(36)
    };
    K.f.Jb = function (b, c) {
        var d = 0;
        b = K.f.trim(String(b)).split(".");
        c = K.f.trim(String(c)).split(".");
        for (var e = Math.max(b.length, c.length), f = 0; 0 == d && f < e; f++) {
            var g = b[f] || "",
                h = c[f] || "";
            do {
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == g[0].length && 0 == h[0].length) break;
                d = K.f.ed(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || K.f.ed(0 == g[2].length, 0 == h[2].length) || K.f.ed(g[2], h[2]);
                g = g[3];
                h = h[3]
            } while (0 == d)
        }
        return d
    };
    K.f.ed = function (b, c) {
        return b < c ? -1 : b > c ? 1 : 0
    };
    K.f.jr = function (b) {
        for (var c = 0, d = 0; d < b.length; ++d) c = 31 * c + b.charCodeAt(d) >>> 0;
        return c
    };
    K.f.Dl = 2147483648 * Math.random() | 0;
    K.f.lq = function () {
        return "goog_" + K.f.Dl++
    };
    K.f.Gt = function (b) {
        var c = Number(b);
        return 0 == c && K.f.Jd(b) ? NaN : c
    };
    K.f.Er = function (b) {
        return /^[a-z]+([A-Z][a-z]*)*$/.test(b)
    };
    K.f.Tr = function (b) {
        return /^([A-Z][a-z]*)+$/.test(b)
    };
    K.f.Ft = function (b) {
        return String(b).replace(/\-([a-z])/g, function (b, d) {
            return d.toUpperCase()
        })
    };
    K.f.It = function (b) {
        return String(b).replace(/([A-Z])/g, "-$1").toLowerCase()
    };
    K.f.Jt = function (b, c) {
        c = K.L(c) ? K.f.Xd(c) : "\\s";
        return b.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function (b, c, f) {
            return c + f.toUpperCase()
        })
    };
    K.f.Np = function (b) {
        return String(b.charAt(0)).toUpperCase() + String(b.substr(1)).toLowerCase()
    };
    K.f.parseInt = function (b) {
        isFinite(b) && (b = String(b));
        return K.L(b) ? /^\s*-?0x/i.test(b) ? parseInt(b, 16) : parseInt(b, 10) : NaN
    };
    K.f.wt = function (b, c, d) {
        b = b.split(c);
        for (var e = []; 0 < d && b.length;) e.push(b.shift()), d--;
        b.length && e.push(b.join(c));
        return e
    };
    K.f.Wr = function (b, c) {
        if (c) typeof c == B && (c = [c]);
        else return b;
        for (var d = -1, e = 0; e < c.length; e++)
            if ("" != c[e]) {
                var f = b.lastIndexOf(c[e]);
                f > d && (d = f)
            }
        return -1 == d ? b : b.slice(d + 1)
    };
    K.f.tq = function (b, c) {
        var d = [],
            e = [];
        if (b == c) return 0;
        if (!b.length || !c.length) return Math.max(b.length, c.length);
        for (var f = 0; f < c.length + 1; f++) d[f] = f;
        for (f = 0; f < b.length; f++) {
            e[0] = f + 1;
            for (var g = 0; g < c.length; g++) e[g + 1] = Math.min(e[g] + 1, d[g + 1] + 1, d[g] + Number(b[f] != c[g]));
            for (g = 0; g < d.length; g++) d[g] = e[g]
        }
        return e[c.length]
    };
    K.m = {};
    K.m.na = K.ea;
    K.m.$b = function (b, c) {
        c.unshift(b);
        K.debug.Error.call(this, K.f.sl.apply(null, c));
        c.shift()
    };
    K.cb(K.m.$b, K.debug.Error);
    K.m.$b.prototype.name = "AssertionError";
    K.m.Ph = function (b) {
        throw b;
    };
    K.m.ld = K.m.Ph;
    K.m.Fa = function (b, c, d, e) {
        var f = "Assertion failed";
        if (d) {
            f += ": " + d;
            var g = e
        } else b && (f += ": " + b, g = c);
        b = new K.m.$b("" + f, g || []);
        K.m.ld(b)
    };
    K.m.dt = function (b) {
        K.m.na && (K.m.ld = b)
    };
    K.m.assert = function (b, c, d) {
        K.m.na && !b && K.m.Fa("", null, c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    K.m.la = function (b, c) {
        K.m.na && K.m.ld(new K.m.$b("Failure" + (b ? ": " + b : ""), Array.prototype.slice.call(arguments, 1)))
    };
    K.m.Ap = function (b, c, d) {
        K.m.na && !K.Ub(b) && K.m.Fa("Expected number but got %s: %s.", [K.aa(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    K.m.Dp = function (b, c, d) {
        K.m.na && !K.L(b) && K.m.Fa("Expected string but got %s: %s.", [K.aa(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    K.m.op = function (b, c, d) {
        K.m.na && !K.ya(b) && K.m.Fa("Expected function but got %s: %s.", [K.aa(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    K.m.Bp = function (b, c, d) {
        K.m.na && !K.ha(b) && K.m.Fa("Expected object but got %s: %s.", [K.aa(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    K.m.lp = function (b, c, d) {
        K.m.na && !K.isArray(b) && K.m.Fa("Expected array but got %s: %s.", [K.aa(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    K.m.mp = function (b, c, d) {
        K.m.na && !K.$j(b) && K.m.Fa("Expected boolean but got %s: %s.", [K.aa(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    K.m.np = function (b, c, d) {
        !K.m.na || K.ha(b) && b.nodeType == K.a.fa.Ia || K.m.Fa("Expected Element but got %s: %s.", [K.aa(b), b], c, Array.prototype.slice.call(arguments, 2));
        return b
    };
    K.m.pp = function (b, c, d, e) {
        !K.m.na || b instanceof c || K.m.Fa("Expected instanceof %s but got %s.", [K.m.hg(c), K.m.hg(b)], d, Array.prototype.slice.call(arguments, 3));
        return b
    };
    K.m.Cp = function () {
        for (var b in Object.prototype) K.m.la(b + " should not be enumerable in Object.prototype.")
    };
    K.m.hg = function (b) {
        return b instanceof Function ? b.displayName || b.name || "unknown type name" : b instanceof Object ? b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b) : null === b ? "null" : typeof b
    };
    K.f.Vo = F();
    K.f.H = function () {
        this.Lc = "";
        this.ui = K.f.H.Xe
    };
    K.f.H.prototype.xa = !0;
    K.f.H.prototype.qa = G("Lc");
    K.f.H.prototype.toString = function () {
        return "Const{" + this.Lc + "}"
    };
    K.f.H.s = function (b) {
        if (b instanceof K.f.H && b.constructor === K.f.H && b.ui === K.f.H.Xe) return b.Lc;
        K.m.la("expected object of type Const, got '" + b + "'");
        return "type_error:Const"
    };
    K.f.H.from = function (b) {
        return K.f.H.gj(b)
    };
    K.f.H.Xe = {};
    K.f.H.gj = function (b) {
        var c = new K.f.H;
        c.Lc = b;
        return c
    };
    K.f.H.EMPTY = K.f.H.from("");
    K.j = {};
    K.Ba = K.ad;
    K.j.za = !1;
    K.j.Pk = function (b) {
        return b[b.length - 1]
    };
    K.j.Vr = K.j.Pk;
    K.j.indexOf = K.Ba && (K.j.za || Array.prototype.indexOf) ? function (b, c, d) {
        return Array.prototype.indexOf.call(b, c, d)
    } : function (b, c, d) {
        d = null == d ? 0 : 0 > d ? Math.max(0, b.length + d) : d;
        if (K.L(b)) return K.L(c) && 1 == c.length ? b.indexOf(c, d) : -1;
        for (; d < b.length; d++)
            if (d in b && b[d] === c) return d;
        return -1
    };
    K.j.lastIndexOf = K.Ba && (K.j.za || Array.prototype.lastIndexOf) ? function (b, c, d) {
        return Array.prototype.lastIndexOf.call(b, c, null == d ? b.length - 1 : d)
    } : function (b, c, d) {
        d = null == d ? b.length - 1 : d;
        0 > d && (d = Math.max(0, b.length + d));
        if (K.L(b)) return K.L(c) && 1 == c.length ? b.lastIndexOf(c, d) : -1;
        for (; 0 <= d; d--)
            if (d in b && b[d] === c) return d;
        return -1
    };
    K.j.forEach = K.Ba && (K.j.za || Array.prototype.forEach) ? function (b, c, d) {
        Array.prototype.forEach.call(b, c, d)
    } : function (b, c, d) {
        for (var e = b.length, f = K.L(b) ? b.split("") : b, g = 0; g < e; g++) g in f && c.call(d, f[g], g, b)
    };
    K.j.Ff = function (b, c) {
        for (var d = K.L(b) ? b.split("") : b, e = b.length - 1; 0 <= e; --e) e in d && c.call(void 0, d[e], e, b)
    };
    K.j.filter = K.Ba && (K.j.za || Array.prototype.filter) ? function (b, c, d) {
        return Array.prototype.filter.call(b, c, d)
    } : function (b, c, d) {
        for (var e = b.length, f = [], g = 0, h = K.L(b) ? b.split("") : b, l = 0; l < e; l++)
            if (l in h) {
                var m = h[l];
                c.call(d, m, l, b) && (f[g++] = m)
            }
        return f
    };
    K.j.map = K.Ba && (K.j.za || Array.prototype.map) ? function (b, c, d) {
        return Array.prototype.map.call(b, c, d)
    } : function (b, c, d) {
        for (var e = b.length, f = Array(e), g = K.L(b) ? b.split("") : b, h = 0; h < e; h++) h in g && (f[h] = c.call(d, g[h], h, b));
        return f
    };
    K.j.reduce = K.Ba && (K.j.za || Array.prototype.reduce) ? function (b, c, d, e) {
        e && (c = K.bind(c, e));
        return Array.prototype.reduce.call(b, c, d)
    } : function (b, c, d, e) {
        var f = d;
        K.j.forEach(b, function (d, h) {
            f = c.call(e, f, d, h, b)
        });
        return f
    };
    K.j.reduceRight = K.Ba && (K.j.za || Array.prototype.reduceRight) ? function (b, c, d, e) {
        e && (c = K.bind(c, e));
        return Array.prototype.reduceRight.call(b, c, d)
    } : function (b, c, d, e) {
        var f = d;
        K.j.Ff(b, function (d, h) {
            f = c.call(e, f, d, h, b)
        });
        return f
    };
    K.j.some = K.Ba && (K.j.za || Array.prototype.some) ? function (b, c, d) {
        return Array.prototype.some.call(b, c, d)
    } : function (b, c, d) {
        for (var e = b.length, f = K.L(b) ? b.split("") : b, g = 0; g < e; g++)
            if (g in f && c.call(d, f[g], g, b)) return !0;
        return !1
    };
    K.j.every = K.Ba && (K.j.za || Array.prototype.every) ? function (b, c, d) {
        return Array.prototype.every.call(b, c, d)
    } : function (b, c, d) {
        for (var e = b.length, f = K.L(b) ? b.split("") : b, g = 0; g < e; g++)
            if (g in f && !c.call(d, f[g], g, b)) return !1;
        return !0
    };
    K.j.count = function (b, c, d) {
        var e = 0;
        K.j.forEach(b, function (b, g, h) {
            c.call(d, b, g, h) && ++e
        }, d);
        return e
    };
    K.j.find = function (b, c, d) {
        c = K.j.findIndex(b, c, d);
        return 0 > c ? null : K.L(b) ? b.charAt(c) : b[c]
    };
    K.j.findIndex = function (b, c, d) {
        for (var e = b.length, f = K.L(b) ? b.split("") : b, g = 0; g < e; g++)
            if (g in f && c.call(d, f[g], g, b)) return g;
        return -1
    };
    K.j.Cq = function (b, c, d) {
        c = K.j.vj(b, c, d);
        return 0 > c ? null : K.L(b) ? b.charAt(c) : b[c]
    };
    K.j.vj = function (b, c, d) {
        for (var e = K.L(b) ? b.split("") : b, f = b.length - 1; 0 <= f; f--)
            if (f in e && c.call(d, e[f], f, b)) return f;
        return -1
    };
    K.j.contains = function (b, c) {
        return 0 <= K.j.indexOf(b, c)
    };
    K.j.Tb = function (b) {
        return 0 == b.length
    };
    K.j.clear = function (b) {
        if (!K.isArray(b))
            for (var c = b.length - 1; 0 <= c; c--) delete b[c];
        b.length = 0
    };
    K.j.mr = function (b, c) {
        K.j.contains(b, c) || b.push(c)
    };
    K.j.qg = function (b, c, d) {
        K.j.splice(b, d, 0, c)
    };
    K.j.or = function (b, c, d) {
        K.gb(K.j.splice, b, d, 0).apply(null, c)
    };
    K.j.insertBefore = function (b, c, d) {
        var e;
        2 == arguments.length || 0 > (e = K.j.indexOf(b, d)) ? b.push(c) : K.j.qg(b, c, e)
    };
    K.j.remove = function (b, c) {
        c = K.j.indexOf(b, c);
        var d;
        (d = 0 <= c) && K.j.Cb(b, c);
        return d
    };
    K.j.Js = function (b, c) {
        c = K.j.lastIndexOf(b, c);
        return 0 <= c ? (K.j.Cb(b, c), !0) : !1
    };
    K.j.Cb = function (b, c) {
        return 1 == Array.prototype.splice.call(b, c, 1).length
    };
    K.j.Is = function (b, c, d) {
        c = K.j.findIndex(b, c, d);
        return 0 <= c ? (K.j.Cb(b, c), !0) : !1
    };
    K.j.Fs = function (b, c, d) {
        var e = 0;
        K.j.Ff(b, function (f, g) {
            c.call(d, f, g, b) && K.j.Cb(b, g) && e++
        });
        return e
    };
    K.j.concat = function (b) {
        return Array.prototype.concat.apply([], arguments)
    };
    K.j.join = function (b) {
        return Array.prototype.concat.apply([], arguments)
    };
    K.j.rh = function (b) {
        var c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            return d
        }
        return []
    };
    K.j.clone = K.j.rh;
    K.j.extend = function (b, c) {
        for (var d = 1; d < arguments.length; d++) {
            var e = arguments[d];
            if (K.Qb(e)) {
                var f = b.length || 0,
                    g = e.length || 0;
                b.length = f + g;
                for (var h = 0; h < g; h++) b[f + h] = e[h]
            } else b.push(e)
        }
    };
    K.j.splice = function (b, c, d, e) {
        return Array.prototype.splice.apply(b, K.j.slice(arguments, 1))
    };
    K.j.slice = function (b, c, d) {
        return 2 >= arguments.length ? Array.prototype.slice.call(b, c) : Array.prototype.slice.call(b, c, d)
    };
    K.j.Gs = function (b, c, d) {
        function e(b) {
            return K.ha(b) ? "o" + K.ig(b) : (typeof b).charAt(0) + b
        }
        c = c || b;
        d = d || e;
        for (var f = {}, g = 0, h = 0; h < b.length;) {
            var l = b[h++],
                m = d(l);
            Object.prototype.hasOwnProperty.call(f, m) || (f[m] = !0, c[g++] = l)
        }
        c.length = g
    };
    K.j.ff = function (b, c, d) {
        return K.j.gf(b, d || K.j.Oa, !1, c)
    };
    K.j.Gp = function (b, c, d) {
        return K.j.gf(b, c, !0, void 0, d)
    };
    K.j.gf = function (b, c, d, e, f) {
        for (var g = 0, h = b.length, l; g < h;) {
            var m = g + h >> 1;
            var q = d ? c.call(f, b[m], m, b) : c(e, b[m]);
            0 < q ? g = m + 1 : (h = m, l = !q)
        }
        return l ? g : ~g
    };
    K.j.sort = function (b, c) {
        b.sort(c || K.j.Oa)
    };
    K.j.yt = function (b, c) {
        for (var d = Array(b.length), e = 0; e < b.length; e++) d[e] = {
            index: e,
            value: b[e]
        };
        var f = c || K.j.Oa;
        K.j.sort(d, function (b, c) {
            return f(b.value, c.value) || b.index - c.index
        });
        for (e = 0; e < b.length; e++) b[e] = d[e].value
    };
    K.j.ol = function (b, c, d) {
        var e = d || K.j.Oa;
        K.j.sort(b, function (b, d) {
            return e(c(b), c(d))
        })
    };
    K.j.vt = function (b, c, d) {
        K.j.ol(b, function (b) {
            return b[c]
        }, d)
    };
    K.j.Qr = function (b, c, d) {
        c = c || K.j.Oa;
        for (var e = 1; e < b.length; e++) {
            var f = c(b[e - 1], b[e]);
            if (0 < f || 0 == f && d) return !1
        }
        return !0
    };
    K.j.Lb = function (b, c, d) {
        if (!K.Qb(b) || !K.Qb(c) || b.length != c.length) return !1;
        var e = b.length;
        d = d || K.j.ij;
        for (var f = 0; f < e; f++)
            if (!d(b[f], c[f])) return !1;
        return !0
    };
    K.j.Wp = function (b, c, d) {
        d = d || K.j.Oa;
        for (var e = Math.min(b.length, c.length), f = 0; f < e; f++) {
            var g = d(b[f], c[f]);
            if (0 != g) return g
        }
        return K.j.Oa(b.length, c.length)
    };
    K.j.Oa = function (b, c) {
        return b > c ? 1 : b < c ? -1 : 0
    };
    K.j.qr = function (b, c) {
        return -K.j.Oa(b, c)
    };
    K.j.ij = function (b, c) {
        return b === c
    };
    K.j.Ep = function (b, c, d) {
        d = K.j.ff(b, c, d);
        return 0 > d ? (K.j.qg(b, c, -(d + 1)), !0) : !1
    };
    K.j.Fp = function (b, c, d) {
        c = K.j.ff(b, c, d);
        return 0 <= c ? K.j.Cb(b, c) : !1
    };
    K.j.Ip = function (b, c, d) {
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f],
                h = c.call(d, g, f, b);
            K.P(h) && (e[h] || (e[h] = [])).push(g)
        }
        return e
    };
    K.j.Ht = function (b, c, d) {
        var e = {};
        K.j.forEach(b, function (f, g) {
            e[c.call(d, f, g, b)] = f
        });
        return e
    };
    K.j.Bs = function (b, c, d) {
        var e = [],
            f = 0,
            g = b;
        d = d || 1;
        void 0 !== c && (f = b, g = c);
        if (0 > d * (g - f)) return [];
        if (0 < d)
            for (b = f; b < g; b += d) e.push(b);
        else
            for (b = f; b > g; b += d) e.push(b);
        return e
    };
    K.j.repeat = function (b, c) {
        for (var d = [], e = 0; e < c; e++) d[e] = b;
        return d
    };
    K.j.flatten = function (b) {
        for (var c = [], d = 0; d < arguments.length; d++) {
            var e = arguments[d];
            if (K.isArray(e))
                for (var f = 0; f < e.length; f += 8192)
                    for (var g = K.j.flatten.apply(null, K.j.slice(e, f, f + 8192)), h = 0; h < g.length; h++) c.push(g[h]);
            else c.push(e)
        }
        return c
    };
    K.j.rotate = function (b, c) {
        b.length && (c %= b.length, 0 < c ? Array.prototype.unshift.apply(b, b.splice(-c, c)) : 0 > c && Array.prototype.push.apply(b, b.splice(0, -c)));
        return b
    };
    K.j.js = function (b, c, d) {
        c = Array.prototype.splice.call(b, c, 1);
        Array.prototype.splice.call(b, d, 0, c[0])
    };
    K.j.Zt = function (b) {
        if (!arguments.length) return [];
        for (var c = [], d = arguments[0].length, e = 1; e < arguments.length; e++) arguments[e].length < d && (d = arguments[e].length);
        for (e = 0; e < d; e++) {
            for (var f = [], g = 0; g < arguments.length; g++) f.push(arguments[g][e]);
            c.push(f)
        }
        return c
    };
    K.j.ut = function (b, c) {
        c = c || Math.random;
        for (var d = b.length - 1; 0 < d; d--) {
            var e = Math.floor(c() * (d + 1)),
                f = b[d];
            b[d] = b[e];
            b[e] = f
        }
    };
    K.j.aq = function (b, c) {
        var d = [];
        K.j.forEach(c, function (c) {
            d.push(b[c])
        });
        return d
    };
    K.j.Yp = function (b, c, d) {
        return K.j.concat.apply([], K.j.map(b, c, d))
    };
    K.h = {};
    K.h.i = {};
    K.h.i.Wh = !1;
    K.h.i.Ke = K.h.i.Wh || ("ar" == K.ba.substring(0, 2).toLowerCase() || "fa" == K.ba.substring(0, 2).toLowerCase() || "he" == K.ba.substring(0, 2).toLowerCase() || "iw" == K.ba.substring(0, 2).toLowerCase() || "ps" == K.ba.substring(0, 2).toLowerCase() || "sd" == K.ba.substring(0, 2).toLowerCase() || "ug" == K.ba.substring(0, 2).toLowerCase() || "ur" == K.ba.substring(0, 2).toLowerCase() || "yi" == K.ba.substring(0, 2).toLowerCase()) && (2 == K.ba.length || "-" == K.ba.substring(2, 3) || "_" == K.ba.substring(2, 3)) || 3 <= K.ba.length && "ckb" == K.ba.substring(0, 3).toLowerCase() &&
        (3 == K.ba.length || "-" == K.ba.substring(3, 4) || "_" == K.ba.substring(3, 4));
    K.h.i.nb = {
        ci: "\u202a",
        fi: "\u202b",
        Qe: "\u202c",
        di: "\u200e",
        gi: "\u200f"
    };
    K.h.i.O = {
        Va: 1,
        Wa: -1,
        sa: 0
    };
    K.h.i.ec = "right";
    K.h.i.cc = "left";
    K.h.i.vn = K.h.i.Ke ? K.h.i.cc : K.h.i.ec;
    K.h.i.un = K.h.i.Ke ? K.h.i.ec : K.h.i.cc;
    K.h.i.xl = function (b) {
        return typeof b == x ? 0 < b ? K.h.i.O.Va : 0 > b ? K.h.i.O.Wa : K.h.i.O.sa : null == b ? null : b ? K.h.i.O.Wa : K.h.i.O.Va
    };
    K.h.i.zb = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
    K.h.i.Eb = "\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc";
    K.h.i.Vj = /<[^>]*>|&[^;]+;/g;
    K.h.i.Ta = function (b, c) {
        return c ? b.replace(K.h.i.Vj, "") : b
    };
    K.h.i.Yk = new RegExp("[" + K.h.i.Eb + "]");
    K.h.i.Dk = new RegExp("[" + K.h.i.zb + "]");
    K.h.i.Cd = function (b, c) {
        return K.h.i.Yk.test(K.h.i.Ta(b, c))
    };
    K.h.i.gr = K.h.i.Cd;
    K.h.i.mg = function (b) {
        return K.h.i.Dk.test(K.h.i.Ta(b, void 0))
    };
    K.h.i.Gk = new RegExp("^[" + K.h.i.zb + "]");
    K.h.i.cl = new RegExp("^[" + K.h.i.Eb + "]");
    K.h.i.kk = function (b) {
        return K.h.i.cl.test(b)
    };
    K.h.i.gk = function (b) {
        return K.h.i.Gk.test(b)
    };
    K.h.i.Ir = function (b) {
        return !K.h.i.gk(b) && !K.h.i.kk(b)
    };
    K.h.i.Ek = new RegExp("^[^" + K.h.i.Eb + "]*[" + K.h.i.zb + "]");
    K.h.i.$k = new RegExp("^[^" + K.h.i.zb + "]*[" + K.h.i.Eb + "]");
    K.h.i.mh = function (b, c) {
        return K.h.i.$k.test(K.h.i.Ta(b, c))
    };
    K.h.i.Or = K.h.i.mh;
    K.h.i.pl = function (b, c) {
        return K.h.i.Ek.test(K.h.i.Ta(b, c))
    };
    K.h.i.Gr = K.h.i.pl;
    K.h.i.Hg = /^http:\/\/.*/;
    K.h.i.Jr = function (b, c) {
        b = K.h.i.Ta(b, c);
        return K.h.i.Hg.test(b) || !K.h.i.mg(b) && !K.h.i.Cd(b)
    };
    K.h.i.Fk = new RegExp("[" + K.h.i.zb + "][^" + K.h.i.Eb + "]*$");
    K.h.i.al = new RegExp("[" + K.h.i.Eb + "][^" + K.h.i.zb + "]*$");
    K.h.i.oj = function (b, c) {
        return K.h.i.Fk.test(K.h.i.Ta(b, c))
    };
    K.h.i.Fr = K.h.i.oj;
    K.h.i.pj = function (b, c) {
        return K.h.i.al.test(K.h.i.Ta(b, c))
    };
    K.h.i.Mr = K.h.i.pj;
    K.h.i.bl = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    K.h.i.Nr = function (b) {
        return K.h.i.bl.test(b)
    };
    K.h.i.Ri = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
    K.h.i.fr = function (b, c) {
        c = (void 0 === c ? K.h.i.Cd(b) : c) ? K.h.i.nb.gi : K.h.i.nb.di;
        return b.replace(K.h.i.Ri, c + "$&" + c)
    };
    K.h.i.wq = function (b) {
        return "<" == b.charAt(0) ? b.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + b + "</span>"
    };
    K.h.i.xq = function (b) {
        return K.h.i.nb.fi + b + K.h.i.nb.Qe
    };
    K.h.i.uq = function (b) {
        return "<" == b.charAt(0) ? b.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + b + "</span>"
    };
    K.h.i.vq = function (b) {
        return K.h.i.nb.ci + b + K.h.i.nb.Qe
    };
    K.h.i.mj = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
    K.h.i.sk = /left/gi;
    K.h.i.Xk = /right/gi;
    K.h.i.vl = /%%%%/g;
    K.h.i.fs = function (b) {
        return b.replace(K.h.i.mj, ":$1 $4 $3 $2").replace(K.h.i.sk, "%%%%").replace(K.h.i.Xk, K.h.i.cc).replace(K.h.i.vl, K.h.i.ec)
    };
    K.h.i.nj = /([\u0591-\u05f2])"/g;
    K.h.i.nl = /([\u0591-\u05f2])'/g;
    K.h.i.ls = function (b) {
        return b.replace(K.h.i.nj, "$1\u05f4").replace(K.h.i.nl, "$1\u05f3")
    };
    K.h.i.Ml = /\s+/;
    K.h.i.Uj = /[\d\u06f0-\u06f9]/;
    K.h.i.Zk = .4;
    K.h.i.xf = function (b, c) {
        var d = 0,
            e = 0,
            f = !1;
        b = K.h.i.Ta(b, c).split(K.h.i.Ml);
        for (c = 0; c < b.length; c++) {
            var g = b[c];
            K.h.i.mh(g) ? (d++, e++) : K.h.i.Hg.test(g) ? f = !0 : K.h.i.mg(g) ? e++ : K.h.i.Uj.test(g) && (f = !0)
        }
        return 0 == e ? f ? K.h.i.O.Va : K.h.i.O.sa : d / e > K.h.i.Zk ? K.h.i.O.Wa : K.h.i.O.Va
    };
    K.h.i.pq = function (b, c) {
        return K.h.i.xf(b, c) == K.h.i.O.Wa
    };
    K.h.i.at = function (b, c) {
        b && (c = K.h.i.xl(c)) && (b.style.textAlign = c == K.h.i.O.Wa ? K.h.i.ec : K.h.i.cc, b.dir = c == K.h.i.O.Wa ? "rtl" : "ltr")
    };
    K.h.i.bt = function (b, c) {
        switch (K.h.i.xf(c)) {
            case K.h.i.O.Va:
                b.dir = "ltr";
                break;
            case K.h.i.O.Wa:
                b.dir = "rtl";
                break;
            default:
                b.removeAttribute("dir")
        }
    };
    K.h.i.Qm = F();
    K.b = {};
    K.b.D = function () {
        this.Ec = "";
        this.xi = K.b.D.ca
    };
    K.b.D.prototype.xa = !0;
    K.b.D.prototype.qa = G("Ec");
    K.b.D.prototype.Ed = !0;
    K.b.D.prototype.bb = function () {
        return K.h.i.O.Va
    };
    K.ea && (K.b.D.prototype.toString = function () {
        return "TrustedResourceUrl{" + this.Ec + "}"
    });
    K.b.D.s = function (b) {
        if (b instanceof K.b.D && b.constructor === K.b.D && b.xi === K.b.D.ca) return b.Ec;
        K.m.la("expected object of type TrustedResourceUrl, got '" + b + k + K.aa(b));
        return "type_error:TrustedResourceUrl"
    };
    K.b.D.format = function (b, c) {
        var d = K.f.H.s(b);
        if (!K.b.D.Fh.test(d)) throw Error("Invalid TrustedResourceUrl format: " + d);
        b = d.replace(K.b.D.Xh, function (b, f) {
            if (!Object.prototype.hasOwnProperty.call(c, f)) throw Error('Found marker, "' + f + '", in format string, "' + d + '", but no valid label mapping found in args: ' + JSON.stringify(c));
            b = c[f];
            return b instanceof K.f.H ? K.f.H.s(b) : encodeURIComponent(String(b))
        });
        return K.b.D.Kb(b)
    };
    K.b.D.Xh = /%{(\w+)}/g;
    K.b.D.Fh = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i;
    K.b.D.pc = function (b) {
        return K.b.D.Kb(K.f.H.s(b))
    };
    K.b.D.Iq = function (b) {
        for (var c = "", d = 0; d < b.length; d++) c += K.f.H.s(b[d]);
        return K.b.D.Kb(c)
    };
    K.b.D.ca = {};
    K.b.D.Kb = function (b) {
        var c = new K.b.D;
        c.Ec = b;
        return c
    };
    K.async = {};
    K.async.bc = function (b, c, d) {
        this.tk = d;
        this.fj = b;
        this.Tk = c;
        this.Ac = 0;
        this.wc = null
    };
    K.async.bc.prototype.get = function () {
        if (0 < this.Ac) {
            this.Ac--;
            var b = this.wc;
            this.wc = b.next;
            b.next = null
        } else b = this.fj();
        return b
    };
    K.async.bc.prototype.put = function (b) {
        this.Tk(b);
        this.Ac < this.tk && (this.Ac++, b.next = this.wc, this.wc = b)
    };
    K.debug.Z = {};
    K.debug.Xm = F();
    K.debug.Z.Bb = [];
    K.debug.Z.Vd = [];
    K.debug.Z.Vg = !1;
    K.debug.Z.register = function (b) {
        K.debug.Z.Bb[K.debug.Z.Bb.length] = b;
        if (K.debug.Z.Vg)
            for (var c = K.debug.Z.Vd, d = 0; d < c.length; d++) b(K.bind(c[d].Ol, c[d]))
    };
    K.debug.Z.hs = function (b) {
        K.debug.Z.Vg = !0;
        for (var c = K.bind(b.Ol, b), d = 0; d < K.debug.Z.Bb.length; d++) K.debug.Z.Bb[d](c);
        K.debug.Z.Vd.push(b)
    };
    K.debug.Z.Qt = function (b) {
        var c = K.debug.Z.Vd;
        b = K.bind(b.s, b);
        for (var d = 0; d < K.debug.Z.Bb.length; d++) K.debug.Z.Bb[d](b);
        c.length--
    };
    K.a.sn = F();
    K.a.c = function (b) {
        this.ul = b
    };
    K.a.c.prototype.toString = G("ul");
    K.a.c.Rl = new K.a.c("A");
    K.a.c.Sl = new K.a.c("ABBR");
    K.a.c.Ul = new K.a.c("ACRONYM");
    K.a.c.Vl = new K.a.c("ADDRESS");
    K.a.c.Zl = new K.a.c("APPLET");
    K.a.c.$l = new K.a.c("AREA");
    K.a.c.am = new K.a.c("ARTICLE");
    K.a.c.bm = new K.a.c("ASIDE");
    K.a.c.fm = new K.a.c("AUDIO");
    K.a.c.gm = new K.a.c("B");
    K.a.c.hm = new K.a.c("BASE");
    K.a.c.im = new K.a.c("BASEFONT");
    K.a.c.jm = new K.a.c("BDI");
    K.a.c.km = new K.a.c("BDO");
    K.a.c.nm = new K.a.c("BIG");
    K.a.c.om = new K.a.c("BLOCKQUOTE");
    K.a.c.pm = new K.a.c("BODY");
    K.a.c.ye = new K.a.c("BR");
    K.a.c.qm = new K.a.c("BUTTON");
    K.a.c.rm = new K.a.c("CANVAS");
    K.a.c.sm = new K.a.c("CAPTION");
    K.a.c.um = new K.a.c("CENTER");
    K.a.c.vm = new K.a.c("CITE");
    K.a.c.ym = new K.a.c("CODE");
    K.a.c.zm = new K.a.c("COL");
    K.a.c.Am = new K.a.c("COLGROUP");
    K.a.c.Bm = new K.a.c("COMMAND");
    K.a.c.Dm = new K.a.c("DATA");
    K.a.c.Em = new K.a.c("DATALIST");
    K.a.c.Fm = new K.a.c("DD");
    K.a.c.Gm = new K.a.c("DEL");
    K.a.c.Hm = new K.a.c("DETAILS");
    K.a.c.Im = new K.a.c("DFN");
    K.a.c.Jm = new K.a.c("DIALOG");
    K.a.c.Km = new K.a.c("DIR");
    K.a.c.Lm = new K.a.c("DIV");
    K.a.c.Mm = new K.a.c("DL");
    K.a.c.Pm = new K.a.c("DT");
    K.a.c.Sm = new K.a.c("EM");
    K.a.c.Tm = new K.a.c("EMBED");
    K.a.c.Zm = new K.a.c("FIELDSET");
    K.a.c.$m = new K.a.c("FIGCAPTION");
    K.a.c.an = new K.a.c("FIGURE");
    K.a.c.bn = new K.a.c("FONT");
    K.a.c.cn = new K.a.c("FOOTER");
    K.a.c.dn = new K.a.c("FORM");
    K.a.c.en = new K.a.c("FRAME");
    K.a.c.fn = new K.a.c("FRAMESET");
    K.a.c.gn = new K.a.c("H1");
    K.a.c.hn = new K.a.c("H2");
    K.a.c.jn = new K.a.c("H3");
    K.a.c.kn = new K.a.c("H4");
    K.a.c.ln = new K.a.c("H5");
    K.a.c.mn = new K.a.c("H6");
    K.a.c.nn = new K.a.c("HEAD");
    K.a.c.on = new K.a.c("HEADER");
    K.a.c.pn = new K.a.c("HGROUP");
    K.a.c.qn = new K.a.c("HR");
    K.a.c.rn = new K.a.c("HTML");
    K.a.c.tn = new K.a.c("I");
    K.a.c.wn = new K.a.c("IFRAME");
    K.a.c.xn = new K.a.c("IMG");
    K.a.c.yn = new K.a.c("INPUT");
    K.a.c.zn = new K.a.c("INS");
    K.a.c.En = new K.a.c("ISINDEX");
    K.a.c.Gn = new K.a.c("KBD");
    K.a.c.Hn = new K.a.c("KEYGEN");
    K.a.c.In = new K.a.c("LABEL");
    K.a.c.Kn = new K.a.c("LEGEND");
    K.a.c.Ln = new K.a.c("LI");
    K.a.c.Mn = new K.a.c("LINK");
    K.a.c.Pn = new K.a.c("MAP");
    K.a.c.Qn = new K.a.c("MARK");
    K.a.c.Rn = new K.a.c("MATH");
    K.a.c.Sn = new K.a.c("MENU");
    K.a.c.Tn = new K.a.c("META");
    K.a.c.Un = new K.a.c("METER");
    K.a.c.Wn = new K.a.c("NAV");
    K.a.c.Xn = new K.a.c("NOFRAMES");
    K.a.c.Yn = new K.a.c("NOSCRIPT");
    K.a.c.ao = new K.a.c("OBJECT");
    K.a.c.bo = new K.a.c("OL");
    K.a.c.co = new K.a.c("OPTGROUP");
    K.a.c.eo = new K.a.c("OPTION");
    K.a.c.fo = new K.a.c("OUTPUT");
    K.a.c.ho = new K.a.c("P");
    K.a.c.io = new K.a.c("PARAM");
    K.a.c.ko = new K.a.c("PRE");
    K.a.c.mo = new K.a.c("PROGRESS");
    K.a.c.Q = new K.a.c("Q");
    K.a.c.no = new K.a.c("RP");
    K.a.c.oo = new K.a.c("RT");
    K.a.c.po = new K.a.c("RUBY");
    K.a.c.ro = new K.a.c("S");
    K.a.c.to = new K.a.c("SAMP");
    K.a.c.uo = new K.a.c(p);
    K.a.c.vo = new K.a.c("SECTION");
    K.a.c.wo = new K.a.c("SELECT");
    K.a.c.xo = new K.a.c("SMALL");
    K.a.c.yo = new K.a.c("SOURCE");
    K.a.c.zo = new K.a.c("SPAN");
    K.a.c.Ao = new K.a.c("STRIKE");
    K.a.c.Bo = new K.a.c("STRONG");
    K.a.c.Co = new K.a.c("STYLE");
    K.a.c.Do = new K.a.c("SUB");
    K.a.c.Eo = new K.a.c("SUMMARY");
    K.a.c.Fo = new K.a.c("SUP");
    K.a.c.Go = new K.a.c("SVG");
    K.a.c.Ho = new K.a.c("TABLE");
    K.a.c.Io = new K.a.c("TBODY");
    K.a.c.Jo = new K.a.c("TD");
    K.a.c.Ko = new K.a.c("TEMPLATE");
    K.a.c.Lo = new K.a.c("TEXTAREA");
    K.a.c.Mo = new K.a.c("TFOOT");
    K.a.c.No = new K.a.c("TH");
    K.a.c.Oo = new K.a.c("THEAD");
    K.a.c.Po = new K.a.c("TIME");
    K.a.c.Qo = new K.a.c("TITLE");
    K.a.c.Ro = new K.a.c("TR");
    K.a.c.So = new K.a.c("TRACK");
    K.a.c.Uo = new K.a.c("TT");
    K.a.c.Wo = new K.a.c("U");
    K.a.c.Xo = new K.a.c("UL");
    K.a.c.Yo = new K.a.c("VAR");
    K.a.c.Zo = new K.a.c("VIDEO");
    K.a.c.$o = new K.a.c("WBR");
    K.I = {};
    K.I.lc = function (b) {
        return function () {
            return b
        }
    };
    K.I.Ym = K.I.lc(!1);
    K.I.To = K.I.lc(!0);
    K.I.$n = K.I.lc(null);
    K.I.Xj = E();
    K.I.error = function (b) {
        return function () {
            throw Error(b);
        }
    };
    K.I.la = function (b) {
        return function () {
            throw b;
        }
    };
    K.I.lock = function (b, c) {
        c = c || 0;
        return function () {
            return b.apply(this, Array.prototype.slice.call(arguments, 0, c))
        }
    };
    K.I.qs = function (b) {
        return function () {
            return arguments[b]
        }
    };
    K.I.xs = function (b, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            c.push.apply(c, d);
            return b.apply(this, c)
        }
    };
    K.I.Wt = function (b, c) {
        return K.I.hl(b, K.I.lc(c))
    };
    K.I.yq = function (b, c) {
        return function (d) {
            return c ? b == d : b === d
        }
    };
    K.I.Xp = function (b, c) {
        var d = arguments,
            e = d.length;
        return function () {
            var b;
            e && (b = d[e - 1].apply(this, arguments));
            for (var c = e - 2; 0 <= c; c--) b = d[c].call(this, b);
            return b
        }
    };
    K.I.hl = function (b) {
        var c = arguments,
            d = c.length;
        return function () {
            for (var b, f = 0; f < d; f++) b = c[f].apply(this, arguments);
            return b
        }
    };
    K.I.hp = function (b) {
        var c = arguments,
            d = c.length;
        return function () {
            for (var b = 0; b < d; b++)
                if (!c[b].apply(this, arguments)) return !1;
            return !0
        }
    };
    K.I.vs = function (b) {
        var c = arguments,
            d = c.length;
        return function () {
            for (var b = 0; b < d; b++)
                if (c[b].apply(this, arguments)) return !0;
            return !1
        }
    };
    K.I.ps = function (b) {
        return function () {
            return !b.apply(this, arguments)
        }
    };
    K.I.create = function (b, c) {
        function d() {}
        d.prototype = b.prototype;
        var e = new d;
        b.apply(e, Array.prototype.slice.call(arguments, 1));
        return e
    };
    K.I.Hh = !0;
    K.I.Kp = function (b) {
        var c = !1,
            d;
        return function () {
            if (!K.I.Hh) return b();
            c || (d = b(), c = !0);
            return d
        }
    };
    K.I.once = function (b) {
        var c = b;
        return function () {
            if (c) {
                var b = c;
                c = null;
                b()
            }
        }
    };
    K.I.nq = function (b, c, d) {
        var e = 0;
        return function (f) {
            K.global.clearTimeout(e);
            var g = arguments;
            e = K.global.setTimeout(function () {
                b.apply(d, g)
            }, c)
        }
    };
    K.I.Et = function (b, c, d) {
        function e() {
            g = K.global.setTimeout(f, c);
            b.apply(d, l)
        }

        function f() {
            g = 0;
            h && (h = !1, e())
        }
        var g = 0,
            h = !1,
            l = [];
        return function (b) {
            l = arguments;
            g ? h = !0 : e()
        }
    };
    K.I.Cs = function (b, c, d) {
        function e() {
            f = 0
        }
        var f = 0;
        return function (g) {
            f || (f = K.global.setTimeout(e, c), b.apply(d, arguments))
        }
    };
    K.g = {};
    K.g.userAgent = {};
    K.g.userAgent.A = {};
    K.g.userAgent.A.Vf = function () {
        var b = K.g.userAgent.A.Hj();
        return b && (b = b.userAgent) ? b : ""
    };
    K.g.userAgent.A.Hj = function () {
        return K.global.navigator
    };
    K.g.userAgent.A.vh = K.g.userAgent.A.Vf();
    K.g.userAgent.A.st = function (b) {
        K.g.userAgent.A.vh = b || K.g.userAgent.A.Vf()
    };
    K.g.userAgent.A.wb = function () {
        return K.g.userAgent.A.vh
    };
    K.g.userAgent.A.J = function (b) {
        return K.f.contains(K.g.userAgent.A.wb(), b)
    };
    K.g.userAgent.A.Nk = function () {
        return K.f.jf(K.g.userAgent.A.wb(), "WebKit")
    };
    K.g.userAgent.A.zf = function (b) {
        for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e; e = c.exec(b);) d.push([e[1], e[2], e[3] || void 0]);
        return d
    };
    K.object = {};
    K.object.is = function (b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    };
    K.object.forEach = function (b, c, d) {
        for (var e in b) c.call(d, b[e], e, b)
    };
    K.object.filter = function (b, c, d) {
        var e = {},
            f;
        for (f in b) c.call(d, b[f], f, b) && (e[f] = b[f]);
        return e
    };
    K.object.map = function (b, c, d) {
        var e = {},
            f;
        for (f in b) e[f] = c.call(d, b[f], f, b);
        return e
    };
    K.object.some = function (b, c, d) {
        for (var e in b)
            if (c.call(d, b[e], e, b)) return !0;
        return !1
    };
    K.object.every = function (b, c, d) {
        for (var e in b)
            if (!c.call(d, b[e], e, b)) return !1;
        return !0
    };
    K.object.Qq = function (b) {
        var c = 0,
            d;
        for (d in b) c++;
        return c
    };
    K.object.Oq = function (b) {
        for (var c in b) return c
    };
    K.object.Pq = function (b) {
        for (var c in b) return b[c]
    };
    K.object.contains = function (b, c) {
        return K.object.$i(b, c)
    };
    K.object.dr = function (b) {
        var c = [],
            d = 0,
            e;
        for (e in b) c[d++] = b[e];
        return c
    };
    K.object.Tf = function (b) {
        var c = [],
            d = 0,
            e;
        for (e in b) c[d++] = e;
        return c
    };
    K.object.cr = function (b, c) {
        for (var d = K.Qb(c), e = d ? c : arguments, d = d ? 0 : 1; d < e.length && (b = b[e[d]], K.P(b)); d++);
        return b
    };
    K.object.Zi = function (b, c) {
        return null !== b && c in b
    };
    K.object.$i = function (b, c) {
        for (var d in b)
            if (b[d] == c) return !0;
        return !1
    };
    K.object.wj = function (b, c, d) {
        for (var e in b)
            if (c.call(d, b[e], e, b)) return e
    };
    K.object.Dq = function (b, c, d) {
        return (c = K.object.wj(b, c, d)) && b[c]
    };
    K.object.Tb = function (b) {
        for (var c in b) return !1;
        return !0
    };
    K.object.clear = function (b) {
        for (var c in b) delete b[c]
    };
    K.object.remove = function (b, c) {
        var d;
        (d = c in b) && delete b[c];
        return d
    };
    K.object.add = function (b, c, d) {
        if (null !== b && c in b) throw Error('The object already contains the key "' + c + '"');
        K.object.set(b, c, d)
    };
    K.object.get = function (b, c, d) {
        return null !== b && c in b ? b[c] : d
    };
    K.object.set = function (b, c, d) {
        b[c] = d
    };
    K.object.ft = function (b, c, d) {
        return c in b ? b[c] : b[c] = d
    };
    K.object.tt = function (b, c, d) {
        if (c in b) return b[c];
        d = d();
        return b[c] = d
    };
    K.object.Lb = function (b, c) {
        for (var d in b)
            if (!(d in c) || b[d] !== c[d]) return !1;
        for (d in c)
            if (!(d in b)) return !1;
        return !0
    };
    K.object.clone = function (b) {
        var c = {},
            d;
        for (d in b) c[d] = b[d];
        return c
    };
    K.object.El = function (b) {
        var c = K.aa(b);
        if (c == y || c == r) {
            if (K.ya(b.clone)) return b.clone();
            var c = c == r ? [] : {},
                d;
            for (d in b) c[d] = K.object.El(b[d]);
            return c
        }
        return b
    };
    K.object.Lt = function (b) {
        var c = {},
            d;
        for (d in b) c[b[d]] = d;
        return c
    };
    K.object.Re = ["constructor", w, "isPrototypeOf", A, D, "toString", "valueOf"];
    K.object.extend = function (b, c) {
        for (var d, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (d in e) b[d] = e[d];
            for (var g = 0; g < K.object.Re.length; g++) d = K.object.Re[g], Object.prototype.hasOwnProperty.call(e, d) && (b[d] = e[d])
        }
    };
    K.object.create = function (b) {
        var c = arguments.length;
        if (1 == c && K.isArray(arguments[0])) return K.object.create.apply(null, arguments[0]);
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = {}, e = 0; e < c; e += 2) d[arguments[e]] = arguments[e + 1];
        return d
    };
    K.object.dj = function (b) {
        var c = arguments.length;
        if (1 == c && K.isArray(arguments[0])) return K.object.dj.apply(null, arguments[0]);
        for (var d = {}, e = 0; e < c; e++) d[arguments[e]] = !0;
        return d
    };
    K.object.eq = function (b) {
        var c = b;
        Object.isFrozen && !Object.isFrozen(b) && (c = Object.create(b), Object.freeze(c));
        return c
    };
    K.object.Br = function (b) {
        return !!Object.isFrozen && Object.isFrozen(b)
    };
    K.object.Nq = function (b, c, d) {
        if (!b) return [];
        if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return K.object.Tf(b);
        for (var e = {}; b && (b !== Object.prototype || c) && (b !== Function.prototype || d);) {
            for (var f = Object.getOwnPropertyNames(b), g = 0; g < f.length; g++) e[f[g]] = !0;
            b = Object.getPrototypeOf(b)
        }
        return K.object.Tf(e)
    };
    K.g.userAgent.v = {};
    K.g.userAgent.v.Qg = function () {
        return K.g.userAgent.A.J("Opera")
    };
    K.g.userAgent.v.Lk = function () {
        return K.g.userAgent.A.J("Trident") || K.g.userAgent.A.J("MSIE")
    };
    K.g.userAgent.v.Sd = function () {
        return K.g.userAgent.A.J("Edge")
    };
    K.g.userAgent.v.Kk = function () {
        return K.g.userAgent.A.J("Firefox")
    };
    K.g.userAgent.v.Rg = function () {
        return K.g.userAgent.A.J("Safari") && !(K.g.userAgent.v.Qd() || K.g.userAgent.v.Rd() || K.g.userAgent.v.Qg() || K.g.userAgent.v.Sd() || K.g.userAgent.v.Ig() || K.g.userAgent.A.J("Android"))
    };
    K.g.userAgent.v.Rd = function () {
        return K.g.userAgent.A.J("Coast")
    };
    K.g.userAgent.v.Mk = function () {
        return (K.g.userAgent.A.J("iPad") || K.g.userAgent.A.J("iPhone")) && !K.g.userAgent.v.Rg() && !K.g.userAgent.v.Qd() && !K.g.userAgent.v.Rd() && K.g.userAgent.A.J("AppleWebKit")
    };
    K.g.userAgent.v.Qd = function () {
        return (K.g.userAgent.A.J("Chrome") || K.g.userAgent.A.J("CriOS")) && !K.g.userAgent.v.Sd()
    };
    K.g.userAgent.v.Jk = function () {
        return K.g.userAgent.A.J("Android") && !(K.g.userAgent.v.xg() || K.g.userAgent.v.ck() || K.g.userAgent.v.Od() || K.g.userAgent.v.Ig())
    };
    K.g.userAgent.v.Od = K.g.userAgent.v.Qg;
    K.g.userAgent.v.xc = K.g.userAgent.v.Lk;
    K.g.userAgent.v.Qa = K.g.userAgent.v.Sd;
    K.g.userAgent.v.ck = K.g.userAgent.v.Kk;
    K.g.userAgent.v.Pr = K.g.userAgent.v.Rg;
    K.g.userAgent.v.vr = K.g.userAgent.v.Rd;
    K.g.userAgent.v.Dr = K.g.userAgent.v.Mk;
    K.g.userAgent.v.xg = K.g.userAgent.v.Qd;
    K.g.userAgent.v.tr = K.g.userAgent.v.Jk;
    K.g.userAgent.v.Ig = function () {
        return K.g.userAgent.A.J("Silk")
    };
    K.g.userAgent.v.Ob = function () {
        function b(b) {
            b = K.j.find(b, e);
            return d[b] || ""
        }
        var c = K.g.userAgent.A.wb();
        if (K.g.userAgent.v.xc()) return K.g.userAgent.v.Gj(c);
        var c = K.g.userAgent.A.zf(c),
            d = {};
        K.j.forEach(c, function (b) {
            d[b[0]] = b[1]
        });
        var e = K.gb(K.object.Zi, d);
        return K.g.userAgent.v.Od() ? b(["Version", "Opera"]) : K.g.userAgent.v.Qa() ? b(["Edge"]) : K.g.userAgent.v.xg() ? b(["Chrome", "CriOS"]) : (c = c[2]) && c[1] || ""
    };
    K.g.userAgent.v.va = function (b) {
        return 0 <= K.f.Jb(K.g.userAgent.v.Ob(), b)
    };
    K.g.userAgent.v.Gj = function (b) {
        var c = /rv: *([\d\.]*)/.exec(b);
        if (c && c[1]) return c[1];
        var c = "",
            d = /MSIE +([\d\.]+)/.exec(b);
        if (d && d[1])
            if (b = /Trident\/(\d.\d)/.exec(b), "7.0" == d[1])
                if (b && b[1]) switch (b[1]) {
                    case "4.0":
                        c = "8.0";
                        break;
                    case "5.0":
                        c = "9.0";
                        break;
                    case "6.0":
                        c = "10.0";
                        break;
                    case "7.0":
                        c = "11.0"
                } else c = "7.0";
                else c = d[1];
        return c
    };
    K.g.userAgent.U = {};
    K.g.userAgent.U.ik = function () {
        return K.g.userAgent.A.J("Presto")
    };
    K.g.userAgent.U.lk = function () {
        return K.g.userAgent.A.J("Trident") || K.g.userAgent.A.J("MSIE")
    };
    K.g.userAgent.U.Qa = function () {
        return K.g.userAgent.A.J("Edge")
    };
    K.g.userAgent.U.Kg = function () {
        return K.g.userAgent.A.Nk() && !K.g.userAgent.U.Qa()
    };
    K.g.userAgent.U.dk = function () {
        return K.g.userAgent.A.J("Gecko") && !K.g.userAgent.U.Kg() && !K.g.userAgent.U.lk() && !K.g.userAgent.U.Qa()
    };
    K.g.userAgent.U.Ob = function () {
        var b = K.g.userAgent.A.wb();
        if (b) {
            var b = K.g.userAgent.A.zf(b),
                c = K.g.userAgent.U.Ej(b);
            if (c) return "Gecko" == c[0] ? K.g.userAgent.U.Oj(b) : c[1];
            var b = b[0],
                d;
            if (b && (d = b[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) return d[1]
        }
        return ""
    };
    K.g.userAgent.U.Ej = function (b) {
        if (!K.g.userAgent.U.Qa()) return b[1];
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            if ("Edge" == d[0]) return d
        }
    };
    K.g.userAgent.U.va = function (b) {
        return 0 <= K.f.Jb(K.g.userAgent.U.Ob(), b)
    };
    K.g.userAgent.U.Oj = function (b) {
        return (b = K.j.find(b, function (b) {
            return "Firefox" == b[0]
        })) && b[1] || ""
    };
    K.async.ph = function (b) {
        K.global.setTimeout(function () {
            throw b;
        }, 0)
    };
    K.async.ra = function (b, c, d) {
        var e = b;
        c && (e = K.bind(b, c));
        e = K.async.ra.xh(e);
        K.ya(K.global.setImmediate) && (d || K.async.ra.Hl()) ? K.global.setImmediate(e) : (K.async.ra.jh || (K.async.ra.jh = K.async.ra.Kj()), K.async.ra.jh(e))
    };
    K.async.ra.Hl = function () {
        return K.global.Window && K.global.Window.prototype && !K.g.userAgent.v.Qa() && K.global.Window.prototype.setImmediate == K.global.setImmediate ? !1 : !0
    };
    K.async.ra.Kj = function () {
        var b = K.global.MessageChannel;
        "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && !K.g.userAgent.U.ik() && (b = function () {
            var b = document.createElement("IFRAME");
            b.style.display = "none";
            b.src = "";
            document.documentElement.appendChild(b);
            var c = b.contentWindow,
                b = c.document;
            b.open();
            b.write("");
            b.close();
            var d = "callImmediate" + Math.random(),
                e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host,
                b = K.bind(function (b) {
                    if (("*" ==
                            e || b.origin == e) && b.data == d) this.port1.onmessage()
                }, this);
            c.addEventListener("message", b, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    c.postMessage(d, e)
                }
            }
        });
        if ("undefined" !== typeof b && !K.g.userAgent.v.xc()) {
            var c = new b,
                d = {},
                e = d;
            c.port1.onmessage = function () {
                if (K.P(d.next)) {
                    d = d.next;
                    var b = d.kf;
                    d.kf = null;
                    b()
                }
            };
            return function (b) {
                e.next = {
                    kf: b
                };
                e = e.next;
                c.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement(p) ? function (b) {
            var c = document.createElement(p);
            c.onreadystatechange = function () {
                c.onreadystatechange = null;
                c.parentNode.removeChild(c);
                c = null;
                b();
                b = null
            };
            document.documentElement.appendChild(c)
        } : function (b) {
            K.global.setTimeout(b, 0)
        }
    };
    K.async.ra.xh = K.I.Xj;
    K.debug.Z.register(function (b) {
        K.async.ra.xh = b
    });
    K.async.Da = function () {
        this.Rc = this.Fb = null
    };
    K.async.Da.Wc = 100;
    K.async.Da.Nb = new K.async.bc(function () {
        return new K.async.bd
    }, function (b) {
        b.reset()
    }, K.async.Da.Wc);
    K.async.Da.prototype.add = function (b, c) {
        var d = K.async.Da.Nb.get();
        d.set(b, c);
        this.Rc ? this.Rc.next = d : this.Fb = d;
        this.Rc = d
    };
    K.async.Da.prototype.remove = function () {
        var b = null;
        this.Fb && (b = this.Fb, this.Fb = this.Fb.next, this.Fb || (this.Rc = null), b.next = null);
        return b
    };
    K.async.bd = function () {
        this.next = this.scope = this.pd = null
    };
    K.async.bd.prototype.set = function (b, c) {
        this.pd = b;
        this.scope = c;
        this.next = null
    };
    K.async.bd.prototype.reset = function () {
        this.next = this.scope = this.pd = null
    };
    K.async.N = function (b, c) {
        K.async.N.Ic || K.async.N.Zj();
        K.async.N.Qc || (K.async.N.Ic(), K.async.N.Qc = !0);
        K.async.N.ke.add(b, c)
    };
    K.async.N.Zj = function () {
        if (-1 != String(K.global.Promise).indexOf("[native code]")) {
            var b = K.global.Promise.resolve(void 0);
            K.async.N.Ic = function () {
                b.then(K.async.N.Fc)
            }
        } else K.async.N.Ic = function () {
            K.async.ra(K.async.N.Fc)
        }
    };
    K.async.N.Fq = function (b) {
        K.async.N.Ic = function () {
            K.async.ra(K.async.N.Fc);
            b && b(K.async.N.Fc)
        }
    };
    K.async.N.Qc = !1;
    K.async.N.ke = new K.async.Da;
    K.ea && (K.async.N.Ms = function () {
        K.async.N.Qc = !1;
        K.async.N.ke = new K.async.Da
    });
    K.async.N.Fc = function () {
        for (var b; b = K.async.N.ke.remove();) {
            try {
                b.pd.call(b.scope)
            } catch (c) {
                K.async.ph(c)
            }
            K.async.Da.Nb.put(b)
        }
        K.async.N.Qc = !1
    };
    K.a.m = {};
    K.a.m.yp = F();
    K.a.m.qp = F();
    K.a.m.vp = F();
    K.a.m.up = F();
    K.a.m.rp = F();
    K.a.m.sp = F();
    K.a.m.tp = F();
    K.a.m.wp = F();
    K.a.m.xp = F();
    K.a.m.oq = function (b) {
        return K.ha(b) ? b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b) : void 0 === b ? "undefined" : null === b ? "null" : typeof b
    };
    K.a.m.tc = function (b) {
        return (b = b && b.ownerDocument) && (b.defaultView || b.parentWindow) || window
    };
    K.g.userAgent.platform = {};
    K.g.userAgent.platform.wg = function () {
        return K.g.userAgent.A.J("Android")
    };
    K.g.userAgent.platform.Fg = function () {
        return K.g.userAgent.A.J("iPod")
    };
    K.g.userAgent.platform.Eg = function () {
        return K.g.userAgent.A.J("iPhone") && !K.g.userAgent.A.J("iPod") && !K.g.userAgent.A.J("iPad")
    };
    K.g.userAgent.platform.Dg = function () {
        return K.g.userAgent.A.J("iPad")
    };
    K.g.userAgent.platform.Cg = function () {
        return K.g.userAgent.platform.Eg() || K.g.userAgent.platform.Dg() || K.g.userAgent.platform.Fg()
    };
    K.g.userAgent.platform.Gg = function () {
        return K.g.userAgent.A.J("Macintosh")
    };
    K.g.userAgent.platform.fk = function () {
        return K.g.userAgent.A.J("Linux")
    };
    K.g.userAgent.platform.Mg = function () {
        return K.g.userAgent.A.J("Windows")
    };
    K.g.userAgent.platform.yg = function () {
        return K.g.userAgent.A.J("CrOS")
    };
    K.g.userAgent.platform.Ob = function () {
        var b = K.g.userAgent.A.wb();
        var c = "";
        K.g.userAgent.platform.Mg() ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (b = c.exec(b)) ? b[1] : "0.0") : K.g.userAgent.platform.Cg() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (b = c.exec(b)) && b[1].replace(/_/g, ".")) : K.g.userAgent.platform.Gg() ? (c = /Mac OS X ([0-9_.]+)/, c = (b = c.exec(b)) ? b[1].replace(/_/g, ".") : "10") : K.g.userAgent.platform.wg() ? (c = /Android\s+([^\);]+)(\)|;)/, c = (b = c.exec(b)) && b[1]) : K.g.userAgent.platform.yg() && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
            c = (b = c.exec(b)) && b[1]);
        return c || ""
    };
    K.g.userAgent.platform.va = function (b) {
        return 0 <= K.f.Jb(K.g.userAgent.platform.Ob(), b)
    };
    K.Ha = {};
    K.Ha.object = function (b, c) {
        return c
    };
    K.Ha.ce = function (b) {
        K.Ha.ce[" "](b);
        return b
    };
    K.Ha.ce[" "] = K.Ra;
    K.Ha.Lp = function (b, c) {
        try {
            return K.Ha.ce(b[c]), !0
        } catch (d) {}
        return !1
    };
    K.Ha.cache = function (b, c, d, e) {
        e = e ? e(c) : c;
        return Object.prototype.hasOwnProperty.call(b, e) ? b[e] : b[e] = d(c)
    };
    K.userAgent = {};
    K.userAgent.qe = !1;
    K.userAgent.oe = !1;
    K.userAgent.pe = !1;
    K.userAgent.ve = !1;
    K.userAgent.Vc = !1;
    K.userAgent.te = !1;
    K.userAgent.Ch = !1;
    K.userAgent.Gb = K.userAgent.qe || K.userAgent.oe || K.userAgent.pe || K.userAgent.Vc || K.userAgent.ve || K.userAgent.te;
    K.userAgent.Nj = function () {
        return K.g.userAgent.A.wb()
    };
    K.userAgent.Wf = function () {
        return K.global.navigator || null
    };
    K.userAgent.Pe = K.userAgent.Gb ? K.userAgent.te : K.g.userAgent.v.Od();
    K.userAgent.Y = K.userAgent.Gb ? K.userAgent.qe : K.g.userAgent.v.xc();
    K.userAgent.Ee = K.userAgent.Gb ? K.userAgent.oe : K.g.userAgent.U.Qa();
    K.userAgent.Rm = K.userAgent.Ee || K.userAgent.Y;
    K.userAgent.Zc = K.userAgent.Gb ? K.userAgent.pe : K.g.userAgent.U.dk();
    K.userAgent.Hb = K.userAgent.Gb ? K.userAgent.ve || K.userAgent.Vc : K.g.userAgent.U.Kg();
    K.userAgent.hk = function () {
        return K.userAgent.Hb && K.g.userAgent.A.J("Mobile")
    };
    K.userAgent.Vn = K.userAgent.Vc || K.userAgent.hk();
    K.userAgent.so = K.userAgent.Hb;
    K.userAgent.kj = function () {
        var b = K.userAgent.Wf();
        return b && b.platform || ""
    };
    K.userAgent.jo = K.userAgent.kj();
    K.userAgent.se = !1;
    K.userAgent.we = !1;
    K.userAgent.re = !1;
    K.userAgent.xe = !1;
    K.userAgent.ne = !1;
    K.userAgent.Tc = !1;
    K.userAgent.Sc = !1;
    K.userAgent.Uc = !1;
    K.userAgent.Ca = K.userAgent.se || K.userAgent.we || K.userAgent.re || K.userAgent.xe || K.userAgent.ne || K.userAgent.Tc || K.userAgent.Sc || K.userAgent.Uc;
    K.userAgent.On = K.userAgent.Ca ? K.userAgent.se : K.g.userAgent.platform.Gg();
    K.userAgent.ap = K.userAgent.Ca ? K.userAgent.we : K.g.userAgent.platform.Mg();
    K.userAgent.ek = function () {
        return K.g.userAgent.platform.fk() || K.g.userAgent.platform.yg()
    };
    K.userAgent.Nn = K.userAgent.Ca ? K.userAgent.re : K.userAgent.ek();
    K.userAgent.qk = function () {
        var b = K.userAgent.Wf();
        return !!b && K.f.contains(b.appVersion || "", "X11")
    };
    K.userAgent.bp = K.userAgent.Ca ? K.userAgent.xe : K.userAgent.qk();
    K.userAgent.Yl = K.userAgent.Ca ? K.userAgent.ne : K.g.userAgent.platform.wg();
    K.userAgent.Cn = K.userAgent.Ca ? K.userAgent.Tc : K.g.userAgent.platform.Eg();
    K.userAgent.Bn = K.userAgent.Ca ? K.userAgent.Sc : K.g.userAgent.platform.Dg();
    K.userAgent.Dn = K.userAgent.Ca ? K.userAgent.Uc : K.g.userAgent.platform.Fg();
    K.userAgent.An = K.userAgent.Ca ? K.userAgent.Tc || K.userAgent.Sc || K.userAgent.Uc : K.g.userAgent.platform.Cg();
    K.userAgent.lj = function () {
        var b = "",
            c = K.userAgent.Pj();
        c && (b = c ? c[1] : "");
        return K.userAgent.Y && (c = K.userAgent.Mf(), null != c && c > parseFloat(b)) ? String(c) : b
    };
    K.userAgent.Pj = function () {
        var b = K.userAgent.Nj();
        if (K.userAgent.Zc) return /rv\:([^\);]+)(\)|;)/.exec(b);
        if (K.userAgent.Ee) return /Edge\/([\d\.]+)/.exec(b);
        if (K.userAgent.Y) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(b);
        if (K.userAgent.Hb) return /WebKit\/(\S+)/.exec(b);
        if (K.userAgent.Pe) return /(?:Version)[ \/]?(\S+)/.exec(b)
    };
    K.userAgent.Mf = function () {
        var b = K.global.document;
        return b ? b.documentMode : void 0
    };
    K.userAgent.VERSION = K.userAgent.lj();
    K.userAgent.compare = function (b, c) {
        return K.f.Jb(b, c)
    };
    K.userAgent.nk = {};
    K.userAgent.va = function (b) {
        return K.userAgent.Ch || K.Ha.cache(K.userAgent.nk, b, function () {
            return 0 <= K.f.Jb(K.userAgent.VERSION, b)
        })
    };
    K.userAgent.Ur = K.userAgent.va;
    K.userAgent.Sb = function (b) {
        return Number(K.userAgent.Th) >= b
    };
    K.userAgent.xr = K.userAgent.Sb;
    var L;
    var M = K.global.document,
        aa = K.userAgent.Mf();
    L = M && K.userAgent.Y ? aa || ("CSS1Compat" == M.compatMode ? parseInt(K.userAgent.VERSION, 10) : 5) : void 0;
    K.userAgent.Th = L;
    K.a.jb = {
        Ih: !K.userAgent.Y || K.userAgent.Sb(9),
        Jh: !K.userAgent.Zc && !K.userAgent.Y || K.userAgent.Y && K.userAgent.Sb(9) || K.userAgent.Zc && K.userAgent.va("1.9.1"),
        ze: K.userAgent.Y && !K.userAgent.va("9"),
        Kh: K.userAgent.Y || K.userAgent.Pe || K.userAgent.Hb,
        Zh: K.userAgent.Y,
        Jn: K.userAgent.Y && !K.userAgent.Sb(9)
    };
    K.a.Nc = {};
    K.a.Nc.Ei = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    K.a.Nc.pk = function (b) {
        return !0 === K.a.Nc.Ei[b]
    };
    K.b.V = function () {
        this.Bc = "";
        this.ji = K.b.V.ca
    };
    K.b.V.prototype.xa = !0;
    K.b.V.ca = {};
    K.b.V.pc = function (b) {
        b = K.f.H.s(b);
        return 0 === b.length ? K.b.V.EMPTY : K.b.V.jd(b)
    };
    K.b.V.prototype.qa = G("Bc");
    K.ea && (K.b.V.prototype.toString = function () {
        return "SafeScript{" + this.Bc + "}"
    });
    K.b.V.s = function (b) {
        if (b instanceof K.b.V && b.constructor === K.b.V && b.ji === K.b.V.ca) return b.Bc;
        K.m.la("expected object of type SafeScript, got '" + b + k + K.aa(b));
        return "type_error:SafeScript"
    };
    K.b.V.jd = function (b) {
        return (new K.b.V).eb(b)
    };
    K.b.V.prototype.eb = function (b) {
        this.Bc = b;
        return this
    };
    K.b.V.EMPTY = K.b.V.jd("");
    K.b.F = function () {
        this.Dc = "";
        this.li = K.b.F.ca
    };
    K.b.F.prototype.xa = !0;
    K.b.F.ca = {};
    K.b.F.pc = function (b) {
        b = K.f.H.s(b);
        return 0 === b.length ? K.b.F.EMPTY : K.b.F.rb(b)
    };
    K.b.F.Rp = F();
    K.b.F.prototype.qa = G("Dc");
    K.ea && (K.b.F.prototype.toString = function () {
        return "SafeStyle{" + this.Dc + "}"
    });
    K.b.F.s = function (b) {
        if (b instanceof K.b.F && b.constructor === K.b.F && b.li === K.b.F.ca) return b.Dc;
        K.m.la("expected object of type SafeStyle, got '" + b + k + K.aa(b));
        return "type_error:SafeStyle"
    };
    K.b.F.rb = function (b) {
        return (new K.b.F).eb(b)
    };
    K.b.F.prototype.eb = function (b) {
        this.Dc = b;
        return this
    };
    K.b.F.EMPTY = K.b.F.rb("");
    K.b.F.Ua = "zClosurez";
    K.b.F.create = function (b) {
        var c = "",
            d;
        for (d in b) {
            if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
            var e = b[d];
            null != e && (e instanceof K.f.H ? e = K.f.H.s(e) : K.b.F.Bi.test(e) ? K.b.F.Sj(e) || (K.m.la("String value requires balanced quotes, got: " + e), e = K.b.F.Ua) : (K.m.la("String value allows only [-,.\"'%_!# a-zA-Z0-9] and simple functions, got: " + e), e = K.b.F.Ua), c += d + ":" + e + ";")
        }
        return c ? K.b.F.rb(c) : K.b.F.EMPTY
    };
    K.b.F.Sj = function (b) {
        for (var c = !0, d = !0, e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            "'" == f && d ? c = !c : '"' == f && c && (d = !d)
        }
        return c && d
    };
    K.b.F.Bi = /^([-,."'%_!# a-zA-Z0-9]+|(hsl|hsla|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-0-9a-z.%, ]+\))$/;
    K.b.F.concat = function (b) {
        function c(b) {
            K.isArray(b) ? K.j.forEach(b, c) : d += K.b.F.s(b)
        }
        var d = "";
        K.j.forEach(arguments, c);
        return d ? K.b.F.rb(d) : K.b.F.EMPTY
    };
    K.b.M = function () {
        this.Cc = "";
        this.ki = K.b.M.ca
    };
    K.b.M.prototype.xa = !0;
    K.b.M.ca = {};
    K.b.M.gq = function (b, c) {
        if (K.f.contains(b, "<")) throw Error("Selector does not allow '<', got: " + b);
        var d = b.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(d)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + b);
        if (!K.b.M.Rj(d)) throw Error("() and [] in selector must be balanced, got: " + b);
        c instanceof K.b.F || (c = K.b.F.create(c));
        b = b + "{" + K.b.F.s(c) + "}";
        return K.b.M.sb(b)
    };
    K.b.M.Rj = function (b) {
        for (var c = {
                "(": ")",
                "[": "]"
            }, d = [], e = 0; e < b.length; e++) {
            var f = b[e];
            if (c[f]) d.push(c[f]);
            else if (K.object.contains(c, f) && d.pop() != f) return !1
        }
        return 0 == d.length
    };
    K.b.M.concat = function (b) {
        function c(b) {
            K.isArray(b) ? K.j.forEach(b, c) : d += K.b.M.s(b)
        }
        var d = "";
        K.j.forEach(arguments, c);
        return K.b.M.sb(d)
    };
    K.b.M.pc = function (b) {
        b = K.f.H.s(b);
        return 0 === b.length ? K.b.M.EMPTY : K.b.M.sb(b)
    };
    K.b.M.prototype.qa = G("Cc");
    K.ea && (K.b.M.prototype.toString = function () {
        return "SafeStyleSheet{" + this.Cc + "}"
    });
    K.b.M.s = function (b) {
        if (b instanceof K.b.M && b.constructor === K.b.M && b.ki === K.b.M.ca) return b.Cc;
        K.m.la("expected object of type SafeStyleSheet, got '" + b + k + K.aa(b));
        return "type_error:SafeStyleSheet"
    };
    K.b.M.sb = function (b) {
        return (new K.b.M).eb(b)
    };
    K.b.M.prototype.eb = function (b) {
        this.Cc = b;
        return this
    };
    K.b.M.EMPTY = K.b.M.sb("");
    K.ta = {};
    K.ta.url = {};
    K.ta.url.aj = function (b) {
        return K.ta.url.jg().createObjectURL(b)
    };
    K.ta.url.Os = function (b) {
        K.ta.url.jg().revokeObjectURL(b)
    };
    K.ta.url.jg = function () {
        var b = K.ta.url.Df();
        if (null != b) return b;
        throw Error("This browser doesn't seem to support blob URLs");
    };
    K.ta.url.Df = function () {
        return K.P(K.global.URL) && K.P(K.global.URL.createObjectURL) ? K.global.URL : K.P(K.global.webkitURL) && K.P(K.global.webkitURL.createObjectURL) ? K.global.webkitURL : K.P(K.global.createObjectURL) ? K.global : null
    };
    K.ta.url.Hp = function () {
        return null != K.ta.url.Df()
    };
    K.b.u = function () {
        this.Ga = "";
        this.ni = K.b.u.ca
    };
    K.b.u.Ua = "about:invalid#zClosurez";
    K.b.u.prototype.xa = !0;
    K.b.u.prototype.qa = G("Ga");
    K.b.u.prototype.Ed = !0;
    K.b.u.prototype.bb = function () {
        return K.h.i.O.Va
    };
    K.ea && (K.b.u.prototype.toString = function () {
        return "SafeUrl{" + this.Ga + "}"
    });
    K.b.u.s = function (b) {
        if (b instanceof K.b.u && b.constructor === K.b.u && b.ni === K.b.u.ca) return b.Ga;
        K.m.la("expected object of type SafeUrl, got '" + b + k + K.aa(b));
        return "type_error:SafeUrl"
    };
    K.b.u.pc = function (b) {
        return K.b.u.Ea(K.f.H.s(b))
    };
    K.b.Te = /^(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm))$/i;
    K.b.u.Hq = function (b) {
        b = K.b.Te.test(b.type) ? K.ta.url.aj(b) : K.b.u.Ua;
        return K.b.u.Ea(b)
    };
    K.b.Oh = /^data:([^;,]*);base64,[a-z0-9+\/]+=*$/i;
    K.b.u.Jq = function (b) {
        var c = b.match(K.b.Oh),
            c = c && K.b.Te.test(c[1]);
        return K.b.u.Ea(c ? b : K.b.u.Ua)
    };
    K.b.u.Lq = function (b) {
        K.f.Wi(b) || (b = K.b.u.Ua);
        return K.b.u.Ea(b)
    };
    K.b.u.Mq = function (b) {
        return K.b.u.Ea(K.b.D.s(b))
    };
    K.b.mi = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    K.b.u.Sa = function (b) {
        if (b instanceof K.b.u) return b;
        b = b.xa ? b.qa() : String(b);
        K.b.mi.test(b) || (b = K.b.u.Ua);
        return K.b.u.Ea(b)
    };
    K.b.u.ca = {};
    K.b.u.Ea = function (b) {
        var c = new K.b.u;
        c.Ga = b;
        return c
    };
    K.b.u.Tl = K.b.u.Ea("about:blank");
    K.b.l = function () {
        this.Ga = "";
        this.ii = K.b.l.ca;
        this.nc = null
    };
    K.b.l.prototype.Ed = !0;
    K.b.l.prototype.bb = G("nc");
    K.b.l.prototype.xa = !0;
    K.b.l.prototype.qa = G("Ga");
    K.ea && (K.b.l.prototype.toString = function () {
        return "SafeHtml{" + this.Ga + "}"
    });
    K.b.l.s = function (b) {
        if (b instanceof K.b.l && b.constructor === K.b.l && b.ii === K.b.l.ca) return b.Ga;
        K.m.la("expected object of type SafeHtml, got '" + b + k + K.aa(b));
        return "type_error:SafeHtml"
    };
    K.b.l.ua = function (b) {
        if (b instanceof K.b.l) return b;
        var c = null;
        b.Ed && (c = b.bb());
        return K.b.l.oa(K.f.ua(b.xa ? b.qa() : String(b)), c)
    };
    K.b.l.kr = function (b) {
        if (b instanceof K.b.l) return b;
        b = K.b.l.ua(b);
        return K.b.l.oa(K.f.Xg(K.b.l.s(b)), b.bb())
    };
    K.b.l.lr = function (b) {
        if (b instanceof K.b.l) return b;
        b = K.b.l.ua(b);
        return K.b.l.oa(K.f.Ll(K.b.l.s(b)), b.bb())
    };
    K.b.l.from = K.b.l.ua;
    K.b.l.Ze = /^[a-zA-Z0-9-]+$/;
    K.b.l.zi = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    K.b.l.ei = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    K.b.l.create = function (b, c, d) {
        K.b.l.Jl(String(b));
        return K.b.l.$a(String(b), c, d)
    };
    K.b.l.Jl = function (b) {
        if (!K.b.l.Ze.test(b)) throw Error("Invalid tag name <" + b + ">.");
        if (b.toUpperCase() in K.b.l.ei) throw Error("Tag name <" + b + "> is not allowed for SafeHtml.");
    };
    K.b.l.cq = function (b, c, d, e) {
        b && K.b.D.s(b);
        var f = {};
        f.src = b || null;
        f.srcdoc = c && K.b.l.s(c);
        b = K.b.l.kc(f, {
            sandbox: ""
        }, d);
        return K.b.l.$a("iframe", b, e)
    };
    K.b.l.hq = function (b, c, d, e) {
        if (!K.b.l.Ti()) throw Error("The browser does not support sandboxed iframes.");
        var f = {};
        f.src = b ? K.b.u.s(K.b.u.Sa(b)) : null;
        f.srcdoc = c || null;
        f.sandbox = "";
        b = K.b.l.kc(f, {}, d);
        return K.b.l.$a("iframe", b, e)
    };
    K.b.l.Ti = function () {
        return K.global.HTMLIFrameElement && "sandbox" in K.global.HTMLIFrameElement.prototype
    };
    K.b.l.jq = function (b, c) {
        K.b.D.s(b);
        b = K.b.l.kc({
            src: b
        }, {}, c);
        return K.b.l.$a("script", b)
    };
    K.b.l.iq = function (b, c) {
        for (var d in c) {
            var e = d.toLowerCase();
            if ("language" == e || "src" == e || "text" == e || "type" == e) throw Error('Cannot set "' + e + '" attribute');
        }
        d = "";
        b = K.j.concat(b);
        for (e = 0; e < b.length; e++) d += K.b.V.s(b[e]);
        b = K.b.l.oa(d, K.h.i.O.sa);
        return K.b.l.$a("script", c, b)
    };
    K.b.l.kq = function (b, c) {
        c = K.b.l.kc({
            type: "text/css"
        }, {}, c);
        var d = "";
        b = K.j.concat(b);
        for (var e = 0; e < b.length; e++) d += K.b.M.s(b[e]);
        b = K.b.l.oa(d, K.h.i.O.sa);
        return K.b.l.$a("style", c, b)
    };
    K.b.l.fq = function (b, c) {
        b = K.b.u.s(K.b.u.Sa(b));
        (K.g.userAgent.v.xc() || K.g.userAgent.v.Qa()) && K.f.contains(b, ";") && (b = "'" + b.replace(/'/g, "%27") + "'");
        return K.b.l.$a("meta", {
            "http-equiv": "refresh",
            content: (c || 0) + "; url=" + b
        })
    };
    K.b.l.zj = function (b, c, d) {
        if (d instanceof K.f.H) d = K.f.H.s(d);
        else if ("style" == c.toLowerCase()) d = K.b.l.Lj(d);
        else {
            if (/^on/i.test(c)) throw Error('Attribute "' + c + '" requires goog.string.Const value, "' + d + '" given.');
            if (c.toLowerCase() in K.b.l.zi)
                if (d instanceof K.b.D) d = K.b.D.s(d);
                else if (d instanceof K.b.u) d = K.b.u.s(d);
            else if (K.L(d)) d = K.b.u.Sa(d).qa();
            else throw Error('Attribute "' + c + '" on tag "' + b + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + d + '" given.');
        }
        d.xa && (d = d.qa());
        return c + '="' + K.f.ua(String(d)) + '"'
    };
    K.b.l.Lj = function (b) {
        if (!K.ha(b)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof b + " given: " + b);
        b instanceof K.b.F || (b = K.b.F.create(b));
        return K.b.F.s(b)
    };
    K.b.l.mq = function (b, c, d, e) {
        c = K.b.l.create(c, d, e);
        c.nc = b;
        return c
    };
    K.b.l.concat = function (b) {
        function c(b) {
            K.isArray(b) ? K.j.forEach(b, c) : (b = K.b.l.ua(b), e += K.b.l.s(b), b = b.bb(), d == K.h.i.O.sa ? d = b : b != K.h.i.O.sa && d != b && (d = null))
        }
        var d = K.h.i.O.sa,
            e = "";
        K.j.forEach(arguments, c);
        return K.b.l.oa(e, d)
    };
    K.b.l.Zp = function (b, c) {
        var d = K.b.l.concat(K.j.slice(arguments, 1));
        d.nc = b;
        return d
    };
    K.b.l.ca = {};
    K.b.l.oa = function (b, c) {
        return (new K.b.l).eb(b, c)
    };
    K.b.l.prototype.eb = function (b, c) {
        this.Ga = b;
        this.nc = c;
        return this
    };
    K.b.l.$a = function (b, c, d) {
        var e = null;
        var f = "<" + b + K.b.l.rl(b, c);
        K.fb(d) ? K.isArray(d) || (d = [d]) : d = [];
        K.a.Nc.pk(b.toLowerCase()) ? f += ">" : (e = K.b.l.concat(d), f += ">" + K.b.l.s(e) + "</" + b + ">", e = e.bb());
        (b = c && c.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? K.h.i.O.sa : null);
        return K.b.l.oa(f, e)
    };
    K.b.l.rl = function (b, c) {
        var d = "";
        if (c)
            for (var e in c) {
                if (!K.b.l.Ze.test(e)) throw Error('Invalid attribute name "' + e + '".');
                var f = c[e];
                K.fb(f) && (d += " " + K.b.l.zj(b, e, f))
            }
        return d
    };
    K.b.l.kc = function (b, c, d) {
        var e = {},
            f;
        for (f in b) e[f] = b[f];
        for (f in c) e[f] = c[f];
        for (f in d) {
            var g = f.toLowerCase();
            if (g in b) throw Error('Cannot override "' + g + '" attribute, got "' + f + '" with value "' + d[f] + '"');
            g in c && delete e[g];
            e[f] = d[f]
        }
        return e
    };
    K.b.l.Nm = K.b.l.oa("<!DOCTYPE html>", K.h.i.O.sa);
    K.b.l.EMPTY = K.b.l.oa("", K.h.i.O.sa);
    K.b.l.ye = K.b.l.oa("<br>", K.h.i.O.sa);
    K.a.S = {};
    K.a.S.Fn = {
        Wl: "afterbegin",
        Xl: "afterend",
        lm: "beforebegin",
        mm: "beforeend"
    };
    K.a.S.nr = function (b, c, d) {
        b.insertAdjacentHTML(c, K.b.l.s(d))
    };
    K.a.S.ri = {
        MATH: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    K.a.S.kh = function (b, c) {
        if (K.m.na && K.a.S.ri[b.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + b.tagName + ".");
        b.innerHTML = K.b.l.s(c)
    };
    K.a.S.mt = function (b, c) {
        b.outerHTML = K.b.l.s(c)
    };
    K.a.S.pt = function (b, c) {
        b.style.cssText = K.b.F.s(c)
    };
    K.a.S.sq = function (b, c) {
        b.write(K.b.l.s(c))
    };
    K.a.S.Zs = function (b, c) {
        c = c instanceof K.b.u ? c : K.b.u.Sa(c);
        b.href = K.b.u.s(c)
    };
    K.a.S.it = function (b, c) {
        c = c instanceof K.b.u ? c : K.b.u.Sa(c);
        b.src = K.b.u.s(c)
    };
    K.a.S.ct = function (b, c) {
        b.src = K.b.D.s(c)
    };
    K.a.S.et = function (b, c) {
        b.src = K.b.D.s(c)
    };
    K.a.S.gt = function (b, c) {
        b.src = K.b.D.s(c)
    };
    K.a.S.ht = function (b, c) {
        b.srcdoc = K.b.l.s(c)
    };
    K.a.S.jt = function (b, c, d) {
        b.rel = d;
        K.f.jf(d, "stylesheet") ? b.href = K.b.D.s(c) : b.href = c instanceof K.b.D ? K.b.D.s(c) : c instanceof K.b.u ? K.b.u.s(c) : K.b.u.Sa(c).qa()
    };
    K.a.S.lt = function (b, c) {
        b.data = K.b.D.s(c)
    };
    K.a.S.kl = function (b, c) {
        b.src = K.b.D.s(c)
    };
    K.a.S.ot = function (b, c) {
        b.text = K.b.V.s(c)
    };
    K.a.S.kt = function (b, c) {
        c = c instanceof K.b.u ? c : K.b.u.Sa(c);
        b.href = K.b.u.s(c)
    };
    K.a.S.us = function (b, c, d, e, f) {
        b = b instanceof K.b.u ? b : K.b.u.Sa(b);
        return (c || window).open(K.b.u.s(b), d ? K.f.H.s(d) : "", e, f)
    };
    K.b.ib = {};
    K.b.ib.dl = function (b, c) {
        return K.b.l.oa(c, null)
    };
    K.b.ib.Ss = function (b, c) {
        return K.b.V.jd(c)
    };
    K.b.ib.Us = function (b, c) {
        return K.b.F.rb(c)
    };
    K.b.ib.Ws = function (b, c) {
        return K.b.M.sb(c)
    };
    K.b.ib.Ys = function (b, c) {
        return K.b.u.Ea(c)
    };
    K.b.ib.Nt = function (b, c) {
        return K.b.D.Kb(c)
    };
    K.o = {};
    K.o.As = function (b) {
        return Math.floor(Math.random() * b)
    };
    K.o.Pt = function (b, c) {
        return b + Math.random() * (c - b)
    };
    K.o.Sp = function (b, c, d) {
        return Math.min(Math.max(b, c), d)
    };
    K.o.Ug = function (b, c) {
        b %= c;
        return 0 > b * c ? b + c : b
    };
    K.o.Xr = function (b, c, d) {
        return b + d * (c - b)
    };
    K.o.ks = function (b, c, d) {
        return Math.abs(b - c) <= (d || 1E-6)
    };
    K.o.fe = function (b) {
        return K.o.Ug(b, 360)
    };
    K.o.zt = function (b) {
        return K.o.Ug(b, 2 * Math.PI)
    };
    K.o.sh = function (b) {
        return b * Math.PI / 180
    };
    K.o.wl = function (b) {
        return 180 * b / Math.PI
    };
    K.o.jp = function (b, c) {
        return c * Math.cos(K.o.sh(b))
    };
    K.o.kp = function (b, c) {
        return c * Math.sin(K.o.sh(b))
    };
    K.o.angle = function (b, c, d, e) {
        return K.o.fe(K.o.wl(Math.atan2(e - c, d - b)))
    };
    K.o.ip = function (b, c) {
        b = K.o.fe(c) - K.o.fe(b);
        180 < b ? b -= 360 : -180 >= b && (b = 360 + b);
        return b
    };
    K.o.sign = function (b) {
        return 0 < b ? 1 : 0 > b ? -1 : b
    };
    K.o.bs = function (b, c, d, e) {
        d = d || function (b, c) {
            return b == c
        };
        e = e || function (c) {
            return b[c]
        };
        for (var f = b.length, g = c.length, h = [], l = 0; l < f + 1; l++) h[l] = [], h[l][0] = 0;
        for (var m = 0; m < g + 1; m++) h[0][m] = 0;
        for (l = 1; l <= f; l++)
            for (m = 1; m <= g; m++) d(b[l - 1], c[m - 1]) ? h[l][m] = h[l - 1][m - 1] + 1 : h[l][m] = Math.max(h[l - 1][m], h[l][m - 1]);
        for (var q = [], l = f, m = g; 0 < l && 0 < m;) d(b[l - 1], c[m - 1]) ? (q.unshift(e(l - 1, m - 1)), l--, m--) : h[l - 1][m] > h[l][m - 1] ? l-- : m--;
        return q
    };
    K.o.ge = function (b) {
        return K.j.reduce(arguments, function (b, d) {
            return b + d
        }, 0)
    };
    K.o.Mi = function (b) {
        return K.o.ge.apply(null, arguments) / arguments.length
    };
    K.o.fl = function (b) {
        var c = arguments.length;
        if (2 > c) return 0;
        var d = K.o.Mi.apply(null, arguments);
        return K.o.ge.apply(null, K.j.map(arguments, function (b) {
            return Math.pow(b - d, 2)
        })) / (c - 1)
    };
    K.o.At = function (b) {
        return Math.sqrt(K.o.fl.apply(null, arguments))
    };
    K.o.Cr = function (b) {
        return isFinite(b) && 0 == b % 1
    };
    K.o.Ar = function (b) {
        return isFinite(b)
    };
    K.o.Hr = function (b) {
        return 0 == b && 0 > 1 / b
    };
    K.o.as = function (b) {
        if (0 < b) {
            var c = Math.round(Math.log(b) * Math.LOG10E);
            return c - (parseFloat("1e" + c) > b ? 1 : 0)
        }
        return 0 == b ? -Infinity : NaN
    };
    K.o.Qs = function (b, c) {
        return Math.floor(b + (c || 2E-15))
    };
    K.o.Ps = function (b, c) {
        return Math.ceil(b - (c || 2E-15))
    };
    K.o.W = function (b, c) {
        this.x = K.P(b) ? b : 0;
        this.y = K.P(c) ? c : 0
    };
    K.o.W.prototype.clone = function () {
        return new K.o.W(this.x, this.y)
    };
    K.ea && (K.o.W.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")"
    });
    K.o.W.prototype.Lb = function (b) {
        return b instanceof K.o.W && K.o.W.Lb(this, b)
    };
    K.o.W.Lb = function (b, c) {
        return b == c ? !0 : b && c ? b.x == c.x && b.y == c.y : !1
    };
    K.o.W.rq = function (b, c) {
        var d = b.x - c.x;
        b = b.y - c.y;
        return Math.sqrt(d * d + b * b)
    };
    K.o.W.cs = function (b) {
        return Math.sqrt(b.x * b.x + b.y * b.y)
    };
    K.o.W.azimuth = function (b) {
        return K.o.angle(0, 0, b.x, b.y)
    };
    K.o.W.xt = function (b, c) {
        var d = b.x - c.x;
        b = b.y - c.y;
        return d * d + b * b
    };
    K.o.W.qq = function (b, c) {
        return new K.o.W(b.x - c.x, b.y - c.y)
    };
    K.o.W.ge = function (b, c) {
        return new K.o.W(b.x + c.x, b.y + c.y)
    };
    I = K.o.W.prototype;
    I.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    I.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    I.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    I.translate = function (b, c) {
        b instanceof K.o.W ? (this.x += b.x, this.y += b.y) : (this.x += Number(b), K.Ub(c) && (this.y += c));
        return this
    };
    I.scale = function (b, c) {
        c = K.Ub(c) ? c : b;
        this.x *= b;
        this.y *= c;
        return this
    };
    K.o.pb = function (b, c) {
        this.width = b;
        this.height = c
    };
    K.o.pb.Lb = function (b, c) {
        return b == c ? !0 : b && c ? b.width == c.width && b.height == c.height : !1
    };
    K.o.pb.prototype.clone = function () {
        return new K.o.pb(this.width, this.height)
    };
    K.ea && (K.o.pb.prototype.toString = function () {
        return "(" + this.width + " x " + this.height + ")"
    });
    I = K.o.pb.prototype;
    I.Ii = function () {
        return this.width * this.height
    };
    I.aspectRatio = function () {
        return this.width / this.height
    };
    I.Tb = function () {
        return !this.Ii()
    };
    I.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    I.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    I.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    I.scale = function (b, c) {
        c = K.Ub(c) ? c : b;
        this.width *= b;
        this.height *= c;
        return this
    };
    K.a.Eh = !1;
    K.a.ue = !1;
    K.a.Nh = K.a.Eh || K.a.ue;
    K.a.ud = function (b) {
        return b ? new K.a.mb(K.a.Pa(b)) : K.a.jj || (K.a.jj = new K.a.mb)
    };
    K.a.Aj = function () {
        return document
    };
    K.a.vd = function (b) {
        return K.a.yd(document, b)
    };
    K.a.yd = function (b, c) {
        return K.L(c) ? b.getElementById(c) : c
    };
    K.a.Ij = function (b) {
        return K.a.gg(document, b)
    };
    K.a.gg = function (b, c) {
        return K.a.yd(b, c)
    };
    K.a.yh = K.a.vd;
    K.a.getElementsByTagName = function (b, c) {
        return (c || document).getElementsByTagName(String(b))
    };
    K.a.zd = function (b, c, d) {
        return K.a.qc(document, b, c, d)
    };
    K.a.Dj = function (b, c, d) {
        return K.a.xd(document, b, c, d)
    };
    K.a.Pf = function (b, c) {
        var d = c || document;
        return K.a.dd(d) ? d.querySelectorAll("." + b) : K.a.qc(document, "*", b, c)
    };
    K.a.wd = function (b, c) {
        var d = c || document;
        return (d.getElementsByClassName ? d.getElementsByClassName(b)[0] : K.a.xd(document, "*", b, c)) || null
    };
    K.a.fg = function (b, c) {
        return K.a.wd(b, c)
    };
    K.a.dd = function (b) {
        return !(!b.querySelectorAll || !b.querySelector)
    };
    K.a.qc = function (b, c, d, e) {
        b = e || b;
        var f = c && "*" != c ? String(c).toUpperCase() : "";
        if (K.a.dd(b) && (f || d)) return b.querySelectorAll(f + (d ? "." + d : ""));
        if (d && b.getElementsByClassName) {
            e = b.getElementsByClassName(d);
            if (f) {
                b = {};
                for (var g = c = 0, h; h = e[g]; g++) f == h.nodeName && (b[c++] = h);
                b.length = c;
                return b
            }
            return e
        }
        e = b.getElementsByTagName(f || "*");
        if (d) {
            b = {};
            for (g = c = 0; h = e[g]; g++) f = h.className, typeof f.split == u && K.j.contains(f.split(/\s+/), d) && (b[c++] = h);
            b.length = c;
            return b
        }
        return e
    };
    K.a.xd = function (b, c, d, e) {
        var f = e || b,
            g = c && "*" != c ? String(c).toUpperCase() : "";
        return K.a.dd(f) && (g || d) ? f.querySelector(g + (d ? "." + d : "")) : K.a.qc(b, c, d, e)[0] || null
    };
    K.a.zh = K.a.zd;
    K.a.Kc = function (b, c) {
        K.object.forEach(c, function (c, e) {
            c && c.xa && (c = c.qa());
            "style" == e ? b.style.cssText = c : "class" == e ? b.className = c : "for" == e ? b.htmlFor = c : K.a.De.hasOwnProperty(e) ? b.setAttribute(K.a.De[e], c) : K.f.startsWith(e, "aria-") || K.f.startsWith(e, "data-") ? b.setAttribute(e, c) : b[e] = c
        })
    };
    K.a.De = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    K.a.kg = function (b) {
        return K.a.lg(b || window)
    };
    K.a.lg = function (b) {
        b = b.document;
        b = K.a.Rb(b) ? b.documentElement : b.body;
        return new K.o.pb(b.clientWidth, b.clientHeight)
    };
    K.a.Bj = function () {
        return K.a.sd(window)
    };
    K.a.Sq = function (b) {
        return K.a.sd(b)
    };
    K.a.sd = function (b) {
        var c = b.document,
            d = 0;
        if (c) {
            var d = c.body,
                e = c.documentElement;
            if (!e || !d) return 0;
            b = K.a.lg(b).height;
            if (K.a.Rb(c) && e.scrollHeight) d = e.scrollHeight != b ? e.scrollHeight : e.offsetHeight;
            else {
                var c = e.scrollHeight,
                    f = e.offsetHeight;
                e.clientHeight != f && (c = d.scrollHeight, f = d.offsetHeight);
                d = c > b ? c > f ? c : f : c < f ? c : f
            }
        }
        return d
    };
    K.a.Yq = function (b) {
        return K.a.ud((b || K.global || window).document).Nf()
    };
    K.a.Nf = function () {
        return K.a.Of(document)
    };
    K.a.Of = function (b) {
        var c = K.a.td(b);
        b = K.a.tc(b);
        return K.userAgent.Y && K.userAgent.va("10") && b.pageYOffset != c.scrollTop ? new K.o.W(c.scrollLeft, c.scrollTop) : new K.o.W(b.pageXOffset || c.scrollLeft, b.pageYOffset || c.scrollTop)
    };
    K.a.Cj = function () {
        return K.a.td(document)
    };
    K.a.td = function (b) {
        return b.scrollingElement ? b.scrollingElement : !K.userAgent.Hb && K.a.Rb(b) ? b.documentElement : b.body || b.documentElement
    };
    K.a.xb = function (b) {
        return b ? K.a.tc(b) : window
    };
    K.a.tc = function (b) {
        return b.parentWindow || b.defaultView
    };
    K.a.gd = function (b, c, d) {
        return K.a.rf(document, arguments)
    };
    K.a.rf = function (b, c) {
        var d = String(c[0]),
            e = c[1];
        if (!K.a.jb.Ih && e && (e.name || e.type)) {
            d = ["<", d];
            e.name && d.push(' name="', K.f.ua(e.name), '"');
            if (e.type) {
                d.push(' type="', K.f.ua(e.type), '"');
                var f = {};
                K.object.extend(f, e);
                delete f.type;
                e = f
            }
            d.push(">");
            d = d.join("")
        }
        d = b.createElement(d);
        e && (K.L(e) ? d.className = e : K.isArray(e) ? d.className = e.join(" ") : K.a.Kc(d, e));
        2 < c.length && K.a.af(b, d, c, 2);
        return d
    };
    K.a.af = function (b, c, d, e) {
        function f(d) {
            d && c.appendChild(K.L(d) ? b.createTextNode(d) : d)
        }
        for (; e < d.length; e++) {
            var g = d[e];
            K.Qb(g) && !K.a.Md(g) ? K.j.forEach(K.a.Nd(g) ? K.j.rh(g) : g, f) : f(g)
        }
    };
    K.a.Ah = K.a.gd;
    K.a.createElement = function (b) {
        return K.a.Na(document, b)
    };
    K.a.Na = function (b, c) {
        return b.createElement(String(c))
    };
    K.a.createTextNode = function (b) {
        return document.createTextNode(String(b))
    };
    K.a.ej = function (b, c, d) {
        return K.a.sf(document, b, c, !!d)
    };
    K.a.sf = function (b, c, d, e) {
        for (var f = K.a.Na(b, "TABLE"), g = f.appendChild(K.a.Na(b, "TBODY")), h = 0; h < c; h++) {
            for (var l = K.a.Na(b, "TR"), m = 0; m < d; m++) {
                var q = K.a.Na(b, "TD");
                e && K.a.ae(q, K.f.Ye.Me);
                l.appendChild(q)
            }
            g.appendChild(l)
        }
        return f
    };
    K.a.$p = function (b) {
        var c = K.j.map(arguments, K.f.H.s),
            c = K.b.ib.dl(K.f.H.from("Constant HTML string, that gets turned into a Node later, so it will be automatically balanced."), c.join(""));
        return K.a.dh(c)
    };
    K.a.dh = function (b) {
        return K.a.eh(document, b)
    };
    K.a.eh = function (b, c) {
        var d = K.a.Na(b, "DIV");
        K.a.jb.Zh ? (K.a.S.kh(d, K.b.l.concat(K.b.l.ye, c)), d.removeChild(d.firstChild)) : K.a.S.kh(d, c);
        return K.a.Xi(b, d)
    };
    K.a.Xi = function (b, c) {
        if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
        for (b = b.createDocumentFragment(); c.firstChild;) b.appendChild(c.firstChild);
        return b
    };
    K.a.ak = function () {
        return K.a.Rb(document)
    };
    K.a.Rb = function (b) {
        return K.a.Nh ? K.a.ue : "CSS1Compat" == b.compatMode
    };
    K.a.canHaveChildren = function (b) {
        if (b.nodeType != K.a.fa.Ia) return !1;
        switch (b.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case p:
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    K.a.appendChild = function (b, c) {
        b.appendChild(c)
    };
    K.a.append = function (b, c) {
        K.a.af(K.a.Pa(b), b, arguments, 1)
    };
    K.a.Zd = function (b) {
        for (var c; c = b.firstChild;) b.removeChild(c)
    };
    K.a.tg = function (b, c) {
        c.parentNode && c.parentNode.insertBefore(b, c)
    };
    K.a.sg = function (b, c) {
        c.parentNode && c.parentNode.insertBefore(b, c.nextSibling)
    };
    K.a.rg = function (b, c, d) {
        b.insertBefore(c, b.childNodes[d] || null)
    };
    K.a.removeNode = function (b) {
        return b && b.parentNode ? b.parentNode.removeChild(b) : null
    };
    K.a.bh = function (b, c) {
        var d = c.parentNode;
        d && d.replaceChild(b, c)
    };
    K.a.Ef = function (b) {
        var c, d = b.parentNode;
        if (d && d.nodeType != K.a.fa.Sh) {
            if (b.removeNode) return b.removeNode(!1);
            for (; c = b.firstChild;) d.insertBefore(c, b);
            return K.a.removeNode(b)
        }
    };
    K.a.Lf = function (b) {
        return K.a.jb.Jh && void 0 != b.children ? b.children : K.j.filter(b.childNodes, function (b) {
            return b.nodeType == K.a.fa.Ia
        })
    };
    K.a.Qf = function (b) {
        return K.P(b.firstElementChild) ? b.firstElementChild : K.a.rc(b.firstChild, !0)
    };
    K.a.Uf = function (b) {
        return K.P(b.lastElementChild) ? b.lastElementChild : K.a.rc(b.lastChild, !1)
    };
    K.a.Xf = function (b) {
        return K.P(b.nextElementSibling) ? b.nextElementSibling : K.a.rc(b.nextSibling, !0)
    };
    K.a.dg = function (b) {
        return K.P(b.previousElementSibling) ? b.previousElementSibling : K.a.rc(b.previousSibling, !1)
    };
    K.a.rc = function (b, c) {
        for (; b && b.nodeType != K.a.fa.Ia;) b = c ? b.nextSibling : b.previousSibling;
        return b
    };
    K.a.Yf = function (b) {
        if (!b) return null;
        if (b.firstChild) return b.firstChild;
        for (; b && !b.nextSibling;) b = b.parentNode;
        return b ? b.nextSibling : null
    };
    K.a.eg = function (b) {
        if (!b) return null;
        if (!b.previousSibling) return b.parentNode;
        for (b = b.previousSibling; b && b.lastChild;) b = b.lastChild;
        return b
    };
    K.a.Md = function (b) {
        return K.ha(b) && 0 < b.nodeType
    };
    K.a.Id = function (b) {
        return K.ha(b) && b.nodeType == K.a.fa.Ia
    };
    K.a.Lg = function (b) {
        return K.ha(b) && b.window == b
    };
    K.a.cg = function (b) {
        var c;
        if (K.a.jb.Kh && !(K.userAgent.Y && K.userAgent.va("9") && !K.userAgent.va("10") && K.global.SVGElement && b instanceof K.global.SVGElement) && (c = b.parentElement)) return c;
        c = b.parentNode;
        return K.a.Id(c) ? c : null
    };
    K.a.contains = function (b, c) {
        if (!b || !c) return !1;
        if (b.contains && c.nodeType == K.a.fa.Ia) return b == c || b.contains(c);
        if ("undefined" != typeof b.compareDocumentPosition) return b == c || !!(b.compareDocumentPosition(c) & 16);
        for (; c && b != c;) c = c.parentNode;
        return c == b
    };
    K.a.lf = function (b, c) {
        if (b == c) return 0;
        if (b.compareDocumentPosition) return b.compareDocumentPosition(c) & 2 ? 1 : -1;
        if (K.userAgent.Y && !K.userAgent.Sb(9)) {
            if (b.nodeType == K.a.fa.Yc) return -1;
            if (c.nodeType == K.a.fa.Yc) return 1
        }
        if ("sourceIndex" in b || b.parentNode && "sourceIndex" in b.parentNode) {
            var d = b.nodeType == K.a.fa.Ia,
                e = c.nodeType == K.a.fa.Ia;
            if (d && e) return b.sourceIndex - c.sourceIndex;
            var f = b.parentNode,
                g = c.parentNode;
            return f == g ? K.a.nf(b, c) : !d && K.a.contains(f, c) ? -1 * K.a.mf(b, c) : !e && K.a.contains(g, b) ? K.a.mf(c,
                b) : (d ? b.sourceIndex : f.sourceIndex) - (e ? c.sourceIndex : g.sourceIndex)
        }
        e = K.a.Pa(b);
        d = e.createRange();
        d.selectNode(b);
        d.collapse(!0);
        b = e.createRange();
        b.selectNode(c);
        b.collapse(!0);
        return d.compareBoundaryPoints(K.global.Range.START_TO_END, b)
    };
    K.a.mf = function (b, c) {
        var d = b.parentNode;
        if (d == c) return -1;
        for (; c.parentNode != d;) c = c.parentNode;
        return K.a.nf(c, b)
    };
    K.a.nf = function (b, c) {
        for (; c = c.previousSibling;)
            if (c == b) return -1;
        return 1
    };
    K.a.Af = function (b) {
        var c, d = arguments.length;
        if (!d) return null;
        if (1 == d) return arguments[0];
        var e = [],
            f = Infinity;
        for (c = 0; c < d; c++) {
            for (var g = [], h = arguments[c]; h;) g.unshift(h), h = h.parentNode;
            e.push(g);
            f = Math.min(f, g.length)
        }
        g = null;
        for (c = 0; c < f; c++) {
            for (var h = e[0][c], l = 1; l < d; l++)
                if (h != e[l][c]) return g;
            g = h
        }
        return g
    };
    K.a.Pa = function (b) {
        return b.nodeType == K.a.fa.Yc ? b : b.ownerDocument || b.document
    };
    K.a.Rf = function (b) {
        return b.contentDocument || b.contentWindow.document
    };
    K.a.Sf = function (b) {
        try {
            return b.contentWindow || (b.contentDocument ? K.a.xb(b.contentDocument) : null)
        } catch (c) {}
        return null
    };
    K.a.ae = function (b, c) {
        if ("textContent" in b) b.textContent = c;
        else if (b.nodeType == K.a.fa.fc) b.data = c;
        else if (b.firstChild && b.firstChild.nodeType == K.a.fa.fc) {
            for (; b.lastChild != b.firstChild;) b.removeChild(b.lastChild);
            b.firstChild.data = c
        } else {
            K.a.Zd(b);
            var d = K.a.Pa(b);
            b.appendChild(d.createTextNode(String(c)))
        }
    };
    K.a.bg = function (b) {
        if ("outerHTML" in b) return b.outerHTML;
        var c = K.a.Pa(b),
            c = K.a.Na(c, "DIV");
        c.appendChild(b.cloneNode(!0));
        return c.innerHTML
    };
    K.a.Bf = function (b, c) {
        var d = [];
        return K.a.od(b, c, d, !0) ? d[0] : void 0
    };
    K.a.Cf = function (b, c) {
        var d = [];
        K.a.od(b, c, d, !1);
        return d
    };
    K.a.od = function (b, c, d, e) {
        if (null != b)
            for (b = b.firstChild; b;) {
                if (c(b) && (d.push(b), e) || K.a.od(b, c, d, e)) return !0;
                b = b.nextSibling
            }
        return !1
    };
    K.a.Ve = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    };
    K.a.dc = {
        IMG: " ",
        BR: "\n"
    };
    K.a.Kd = function (b) {
        return K.a.ng(b) && K.a.Jg(b)
    };
    K.a.ih = function (b, c) {
        c ? b.tabIndex = 0 : (b.tabIndex = -1, b.removeAttribute("tabIndex"))
    };
    K.a.Ag = function (b) {
        var c;
        return (c = K.a.Ok(b) ? !b.disabled && (!K.a.ng(b) || K.a.Jg(b)) : K.a.Kd(b)) && K.userAgent.Y ? K.a.Tj(b) : c
    };
    K.a.ng = function (b) {
        return K.userAgent.Y && !K.userAgent.va("9") ? (b = b.getAttributeNode("tabindex"), K.fb(b) && b.specified) : b.hasAttribute("tabindex")
    };
    K.a.Jg = function (b) {
        b = b.tabIndex;
        return K.Ub(b) && 0 <= b && 32768 > b
    };
    K.a.Ok = function (b) {
        return "A" == b.tagName || "INPUT" == b.tagName || "TEXTAREA" == b.tagName || "SELECT" == b.tagName || "BUTTON" == b.tagName
    };
    K.a.Tj = function (b) {
        b = !K.ya(b.getBoundingClientRect) || K.userAgent.Y && null == b.parentElement ? {
            height: b.offsetHeight,
            width: b.offsetWidth
        } : b.getBoundingClientRect();
        return K.fb(b) && 0 < b.height && 0 < b.width
    };
    K.a.sc = function (b) {
        if (K.a.jb.ze && null !== b && "innerText" in b) b = K.f.Vi(b.innerText);
        else {
            var c = [];
            K.a.Bd(b, c, !0);
            b = c.join("")
        }
        b = b.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        b = b.replace(/\u200B/g, "");
        K.a.jb.ze || (b = b.replace(/ +/g, " "));
        " " != b && (b = b.replace(/^\s*/, ""));
        return b
    };
    K.a.ar = function (b) {
        var c = [];
        K.a.Bd(b, c, !1);
        return c.join("")
    };
    K.a.Bd = function (b, c, d) {
        if (!(b.nodeName in K.a.Ve))
            if (b.nodeType == K.a.fa.fc) d ? c.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(b.nodeValue);
            else if (b.nodeName in K.a.dc) c.push(K.a.dc[b.nodeName]);
        else
            for (b = b.firstChild; b;) K.a.Bd(b, c, d), b = b.nextSibling
    };
    K.a.$f = function (b) {
        return K.a.sc(b).length
    };
    K.a.ag = function (b, c) {
        c = c || K.a.Pa(b).body;
        for (var d = []; b && b != c;) {
            for (var e = b; e = e.previousSibling;) d.unshift(K.a.sc(e));
            b = b.parentNode
        }
        return K.f.trimLeft(d.join("")).replace(/ +/g, " ").length
    };
    K.a.Zf = function (b, c, d) {
        b = [b];
        for (var e = 0, f = null; 0 < b.length && e < c;)
            if (f = b.pop(), !(f.nodeName in K.a.Ve))
                if (f.nodeType == K.a.fa.fc) var g = f.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " "),
                    e = e + g.length;
                else if (f.nodeName in K.a.dc) e += K.a.dc[f.nodeName].length;
        else
            for (g = f.childNodes.length - 1; 0 <= g; g--) b.push(f.childNodes[g]);
        K.ha(d) && (d.Ds = f ? f.nodeValue.length + c - e - 1 : 0, d.node = f);
        return f
    };
    K.a.Nd = function (b) {
        if (b && typeof b.length == x) {
            if (K.ha(b)) return typeof b.item == u || typeof b.item == B;
            if (K.ya(b)) return typeof b.item == u
        }
        return !1
    };
    K.a.rd = function (b, c, d, e) {
        if (!c && !d) return null;
        var f = c ? String(c).toUpperCase() : null;
        return K.a.qd(b, function (b) {
            return (!f || b.nodeName == f) && (!d || K.L(b.className) && K.j.contains(b.className.split(/\s+/), d))
        }, !0, e)
    };
    K.a.If = function (b, c, d) {
        return K.a.rd(b, null, c, d)
    };
    K.a.qd = function (b, c, d, e) {
        b && !d && (b = b.parentNode);
        for (d = 0; b && (null == e || d <= e);) {
            if (c(b)) return b;
            b = b.parentNode;
            d++
        }
        return null
    };
    K.a.Hf = function (b) {
        try {
            return b && b.activeElement
        } catch (c) {}
        return null
    };
    K.a.Zq = function () {
        var b = K.a.xb();
        return K.P(b.devicePixelRatio) ? b.devicePixelRatio : b.matchMedia ? K.a.zc(3) || K.a.zc(2) || K.a.zc(1.5) || K.a.zc(1) || .75 : 1
    };
    K.a.zc = function (b) {
        return K.a.xb().matchMedia("(min-resolution: " + b + "dppx),(min--moz-device-pixel-ratio: " + b + "),(min-resolution: " + 96 * b + "dpi)").matches ? b : 0
    };
    K.a.Kf = function (b) {
        return b.getContext("2d")
    };
    K.a.mb = function (b) {
        this.X = b || K.global.document || document
    };
    I = K.a.mb.prototype;
    I.ud = K.a.ud;
    I.Aj = G("X");
    I.vd = function (b) {
        return K.a.yd(this.X, b)
    };
    I.Ij = function (b) {
        return K.a.gg(this.X, b)
    };
    I.yh = K.a.mb.prototype.vd;
    I.getElementsByTagName = function (b, c) {
        return (c || this.X).getElementsByTagName(String(b))
    };
    I.zd = function (b, c, d) {
        return K.a.qc(this.X, b, c, d)
    };
    I.Dj = function (b, c, d) {
        return K.a.xd(this.X, b, c, d)
    };
    I.Pf = function (b, c) {
        return K.a.Pf(b, c || this.X)
    };
    I.wd = function (b, c) {
        return K.a.wd(b, c || this.X)
    };
    I.fg = function (b, c) {
        return K.a.fg(b, c || this.X)
    };
    I.zh = K.a.mb.prototype.zd;
    I.Kc = K.a.Kc;
    I.kg = function (b) {
        return K.a.kg(b || this.xb())
    };
    I.Bj = function () {
        return K.a.sd(this.xb())
    };
    I.gd = function (b, c, d) {
        return K.a.rf(this.X, arguments)
    };
    I.Ah = K.a.mb.prototype.gd;
    I.createElement = function (b) {
        return K.a.Na(this.X, b)
    };
    I.createTextNode = function (b) {
        return this.X.createTextNode(String(b))
    };
    I.ej = function (b, c, d) {
        return K.a.sf(this.X, b, c, !!d)
    };
    I.dh = function (b) {
        return K.a.eh(this.X, b)
    };
    I.ak = function () {
        return K.a.Rb(this.X)
    };
    I.xb = function () {
        return K.a.tc(this.X)
    };
    I.Cj = function () {
        return K.a.td(this.X)
    };
    I.Nf = function () {
        return K.a.Of(this.X)
    };
    I.Hf = function (b) {
        return K.a.Hf(b || this.X)
    };
    I.appendChild = K.a.appendChild;
    I.append = K.a.append;
    I.canHaveChildren = K.a.canHaveChildren;
    I.Zd = K.a.Zd;
    I.tg = K.a.tg;
    I.sg = K.a.sg;
    I.rg = K.a.rg;
    I.removeNode = K.a.removeNode;
    I.bh = K.a.bh;
    I.Ef = K.a.Ef;
    I.Lf = K.a.Lf;
    I.Qf = K.a.Qf;
    I.Uf = K.a.Uf;
    I.Xf = K.a.Xf;
    I.dg = K.a.dg;
    I.Yf = K.a.Yf;
    I.eg = K.a.eg;
    I.Md = K.a.Md;
    I.Id = K.a.Id;
    I.Lg = K.a.Lg;
    I.cg = K.a.cg;
    I.contains = K.a.contains;
    I.lf = K.a.lf;
    I.Af = K.a.Af;
    I.Pa = K.a.Pa;
    I.Rf = K.a.Rf;
    I.Sf = K.a.Sf;
    I.ae = K.a.ae;
    I.bg = K.a.bg;
    I.Bf = K.a.Bf;
    I.Cf = K.a.Cf;
    I.Kd = K.a.Kd;
    I.ih = K.a.ih;
    I.Ag = K.a.Ag;
    I.sc = K.a.sc;
    I.$f = K.a.$f;
    I.ag = K.a.ag;
    I.Zf = K.a.Zf;
    I.Nd = K.a.Nd;
    I.rd = K.a.rd;
    I.If = K.a.If;
    I.qd = K.a.qd;
    I.Kf = K.a.Kf;
    K.b.ga = {};
    K.b.ga.Rs = function (b) {
        K.b.ga.Db();
        return K.b.l.oa(b, null)
    };
    K.b.ga.Ts = function (b) {
        K.b.ga.Db();
        return K.b.F.rb(b)
    };
    K.b.ga.Vs = function (b) {
        K.b.ga.Db();
        return K.b.M.sb(b)
    };
    K.b.ga.Xs = function (b) {
        K.b.ga.Db();
        return K.b.u.Ea(b)
    };
    K.b.ga.ie = function (b) {
        K.b.ga.Db();
        return K.b.D.Kb(b)
    };
    K.b.ga.Db = K.Ra;
    K.b.ga.nt = function (b) {
        K.b.ga.Db = b
    };
    K.ah = {};
    K.ah.qo = F();
    K.Thenable = F();
    K.Thenable.prototype.then = F();
    K.Thenable.Je = "$goog_Thenable";
    K.Thenable.$e = function (b) {
        b.prototype.then = b.prototype.then;
        b.prototype[K.Thenable.Je] = !0
    };
    K.Thenable.Bg = function (b) {
        if (!b) return !1;
        try {
            return !!b[K.Thenable.Je]
        } catch (c) {
            return !1
        }
    };
    K.Promise = function (b, c) {
        this.$ = K.Promise.R.wa;
        this.ia = void 0;
        this.qb = this.Ma = this.da = null;
        this.md = !1;
        0 < K.Promise.Ya ? this.Pc = 0 : 0 == K.Promise.Ya && (this.uc = !1);
        K.Promise.Aa && (this.ee = [], N(this, Error("created")), this.uf = 0);
        if (b != K.Ra) try {
            var d = this;
            b.call(c, function (b) {
                O(d, K.Promise.R.Ja, b)
            }, function (b) {
                if (K.ea && !(b instanceof K.Promise.lb)) try {
                    if (b instanceof Error) throw b;
                    throw Error("Promise rejected.");
                } catch (f) {}
                O(d, K.Promise.R.ja, b)
            })
        } catch (e) {
            O(this, K.Promise.R.ja, e)
        }
    };
    K.Promise.Aa = !1;
    K.Promise.Ya = 0;
    K.Promise.R = {
        wa: 0,
        Gh: 1,
        Ja: 2,
        ja: 3
    };
    K.Promise.Be = function () {
        this.next = this.context = this.Ab = this.Wb = this.Za = null;
        this.gc = !1
    };
    K.Promise.Be.prototype.reset = function () {
        this.context = this.Ab = this.Wb = this.Za = null;
        this.gc = !1
    };
    K.Promise.Wc = 100;
    K.Promise.Nb = new K.async.bc(function () {
        return new K.Promise.Be
    }, function (b) {
        b.reset()
    }, K.Promise.Wc);
    K.Promise.Jf = function (b, c, d) {
        var e = K.Promise.Nb.get();
        e.Wb = b;
        e.Ab = c;
        e.context = d;
        return e
    };
    K.Promise.Wk = function (b) {
        K.Promise.Nb.put(b)
    };
    K.Promise.resolve = function (b) {
        if (b instanceof K.Promise) return b;
        var c = new K.Promise(K.Ra);
        O(c, K.Promise.R.Ja, b);
        return c
    };
    K.Promise.reject = function (b) {
        return new K.Promise(function (c, d) {
            d(b)
        })
    };
    K.Promise.Hc = function (b, c, d) {
        K.Promise.Tg(b, c, d, null) || K.async.N(K.gb(c, b))
    };
    K.Promise.race = function (b) {
        return new K.Promise(function (c, d) {
            b.length || c(void 0);
            for (var e = 0, f; e < b.length; e++) f = b[e], K.Promise.Hc(f, c, d)
        })
    };
    K.Promise.all = function (b) {
        return new K.Promise(function (c, d) {
            var e = b.length,
                f = [];
            if (e)
                for (var g = function (b, d) {
                        e--;
                        f[b] = d;
                        0 == e && c(f)
                    }, h = function (b) {
                        d(b)
                    }, l = 0, m; l < b.length; l++) m = b[l], K.Promise.Hc(m, K.gb(g, l), h);
            else c(f)
        })
    };
    K.Promise.gp = function (b) {
        return new K.Promise(function (c) {
            var d = b.length,
                e = [];
            if (d)
                for (var f = function (b, f, g) {
                        d--;
                        e[b] = f ? {
                            yj: !0,
                            value: g
                        } : {
                            yj: !1,
                            reason: g
                        };
                        0 == d && c(e)
                    }, g = 0, h; g < b.length; g++) h = b[g], K.Promise.Hc(h, K.gb(f, g, !0), K.gb(f, g, !1));
            else c(e)
        })
    };
    K.Promise.Eq = function (b) {
        return new K.Promise(function (c, d) {
            var e = b.length,
                f = [];
            if (e)
                for (var g = function (b) {
                        c(b)
                    }, h = function (b, c) {
                        e--;
                        f[b] = c;
                        0 == e && d(f)
                    }, l = 0, m; l < b.length; l++) m = b[l], K.Promise.Hc(m, g, K.gb(h, l));
            else c(void 0)
        })
    };
    K.Promise.Vt = function () {
        var b, c, d = new K.Promise(function (d, f) {
            b = d;
            c = f
        });
        return new K.Promise.hi(d, b, c)
    };
    K.Promise.prototype.then = function (b, c, d) {
        K.Promise.Aa && N(this, Error("then"));
        return ba(this, K.ya(b) ? b : null, K.ya(c) ? c : null, d)
    };
    K.Thenable.$e(K.Promise);
    K.Promise.prototype.cancel = function (b) {
        this.$ == K.Promise.R.wa && K.async.N(function () {
            var c = new K.Promise.lb(b);
            P(this, c)
        }, this)
    };

    function P(b, c) {
        if (b.$ == K.Promise.R.wa)
            if (b.da) {
                var d = b.da;
                if (d.Ma) {
                    for (var e = 0, f = null, g = null, h = d.Ma; h && (h.gc || (e++, h.Za == b && (f = h), !(f && 1 < e))); h = h.next) f || (g = h);
                    f && (d.$ == K.Promise.R.wa && 1 == e ? P(d, c) : (g ? (e = g, e.next == d.qb && (d.qb = e), e.next = e.next.next) : Q(d), R(d, f, K.Promise.R.ja, c)))
                }
                b.da = null
            } else O(b, K.Promise.R.ja, c)
    }

    function S(b, c) {
        b.Ma || b.$ != K.Promise.R.Ja && b.$ != K.Promise.R.ja || T(b);
        b.qb ? b.qb.next = c : b.Ma = c;
        b.qb = c
    }

    function ba(b, c, d, e) {
        var f = K.Promise.Jf(null, null, null);
        f.Za = new K.Promise(function (b, h) {
            f.Wb = c ? function (d) {
                try {
                    var f = c.call(e, d);
                    b(f)
                } catch (q) {
                    h(q)
                }
            } : b;
            f.Ab = d ? function (c) {
                try {
                    var f = d.call(e, c);
                    !K.P(f) && c instanceof K.Promise.lb ? h(c) : b(f)
                } catch (q) {
                    h(q)
                }
            } : h
        });
        f.Za.da = b;
        S(b, f);
        return f.Za
    }
    K.Promise.prototype.Al = function (b) {
        this.$ = K.Promise.R.wa;
        O(this, K.Promise.R.Ja, b)
    };
    K.Promise.prototype.Bl = function (b) {
        this.$ = K.Promise.R.wa;
        O(this, K.Promise.R.ja, b)
    };

    function O(b, c, d) {
        b.$ == K.Promise.R.wa && (b === d && (c = K.Promise.R.ja, d = new TypeError("Promise cannot resolve to itself")), b.$ = K.Promise.R.Gh, K.Promise.Tg(d, b.Al, b.Bl, b) || (b.ia = d, b.$ = c, b.da = null, T(b), c != K.Promise.R.ja || d instanceof K.Promise.lb || K.Promise.Fi(b, d)))
    }
    K.Promise.Tg = function (b, c, d, e) {
        if (b instanceof K.Promise) return K.Promise.Aa && N(b, Error("then")), S(b, K.Promise.Jf(c || K.Ra, d || null, e)), !0;
        if (K.Thenable.Bg(b)) return b.then(c, d, e), !0;
        if (K.ha(b)) try {
            var f = b.then;
            if (K.ya(f)) return K.Promise.yl(b, f, c, d, e), !0
        } catch (g) {
            return d.call(e, g), !0
        }
        return !1
    };
    K.Promise.yl = function (b, c, d, e, f) {
        function g(b) {
            l || (l = !0, e.call(f, b))
        }

        function h(b) {
            l || (l = !0, d.call(f, b))
        }
        var l = !1;
        try {
            c.call(b, h, g)
        } catch (m) {
            g(m)
        }
    };

    function T(b) {
        b.md || (b.md = !0, K.async.N(b.sj, b))
    }

    function Q(b) {
        var c = null;
        b.Ma && (c = b.Ma, b.Ma = c.next, c.next = null);
        b.Ma || (b.qb = null);
        return c
    }
    K.Promise.prototype.sj = function () {
        for (var b; b = Q(this);) K.Promise.Aa && this.uf++, R(this, b, this.$, this.ia);
        this.md = !1
    };

    function R(b, c, d, e) {
        if (d == K.Promise.R.ja && c.Ab && !c.gc)
            if (0 < K.Promise.Ya)
                for (; b && b.Pc; b = b.da) K.global.clearTimeout(b.Pc), b.Pc = 0;
            else if (0 == K.Promise.Ya)
            for (; b && b.uc; b = b.da) b.uc = !1;
        if (c.Za) c.Za.da = null, K.Promise.vg(c, d, e);
        else try {
            c.gc ? c.Wb.call(c.context) : K.Promise.vg(c, d, e)
        } catch (f) {
            K.Promise.vc.call(null, f)
        }
        K.Promise.Wk(c)
    }
    K.Promise.vg = function (b, c, d) {
        c == K.Promise.R.Ja ? b.Wb.call(b.context, d) : b.Ab && b.Ab.call(b.context, d)
    };

    function N(b, c) {
        if (K.Promise.Aa && K.L(c.stack)) {
            var d = c.stack.split("\n", 4)[3];
            c = c.message;
            c += Array(11 - c.length).join(" ");
            b.ee.push(c + d)
        }
    }

    function U(b, c) {
        if (K.Promise.Aa && c && K.L(c.stack) && b.ee.length) {
            for (var d = ["Promise trace:"], e = b; e; e = e.da) {
                for (var f = b.uf; 0 <= f; f--) d.push(e.ee[f]);
                d.push("Value: [" + (e.$ == K.Promise.R.ja ? "REJECTED" : "FULFILLED") + "] <" + String(e.ia) + ">")
            }
            c.stack += "\n\n" + d.join("\n")
        }
    }
    K.Promise.Fi = function (b, c) {
        0 < K.Promise.Ya ? b.Pc = K.global.setTimeout(function () {
            U(b, c);
            K.Promise.vc.call(null, c)
        }, K.Promise.Ya) : 0 == K.Promise.Ya && (b.uc = !0, K.async.N(function () {
            b.uc && (U(b, c), K.Promise.vc.call(null, c))
        }))
    };
    K.Promise.vc = K.async.ph;
    K.Promise.rt = function (b) {
        K.Promise.vc = b
    };
    K.Promise.lb = function (b) {
        K.debug.Error.call(this, b)
    };
    K.cb(K.Promise.lb, K.debug.Error);
    K.Promise.lb.prototype.name = "cancel";
    K.Promise.hi = function (b, c, d) {
        this.ah = b;
        this.resolve = c;
        this.reject = d
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    K.async.w = function (b, c) {
        this.Jc = [];
        this.$g = b;
        this.vf = c || null;
        this.yb = this.ub = !1;
        this.ia = void 0;
        this.be = this.Qi = this.cd = !1;
        this.Oc = 0;
        this.da = null;
        this.hc = 0;
        K.async.w.Aa && (this.fd = null, Error.captureStackTrace && (b = {
            stack: ""
        }, Error.captureStackTrace(b, K.async.w), typeof b.stack == B && (this.fd = b.stack.replace(/^[^\n]*\n/, ""))))
    };
    K.async.w.si = !1;
    K.async.w.Aa = !1;
    I = K.async.w.prototype;
    I.cancel = function (b) {
        if (this.ub) this.ia instanceof K.async.w && this.ia.cancel();
        else {
            if (this.da) {
                var c = this.da;
                delete this.da;
                b ? c.cancel(b) : (c.hc--, 0 >= c.hc && c.cancel())
            }
            this.$g ? this.$g.call(this.vf, this) : this.be = !0;
            this.ub || this.ab(new K.async.w.kb(this))
        }
    };
    I.qf = function (b, c) {
        this.cd = !1;
        V(this, b, c)
    };

    function V(b, c, d) {
        b.ub = !0;
        b.ia = d;
        b.yb = !c;
        W(b)
    }

    function X(b) {
        if (b.ub) {
            if (!b.be) throw new K.async.w.Zb(b);
            b.be = !1
        }
    }
    I.Ib = function (b) {
        X(this);
        V(this, !0, b)
    };
    I.ab = function (b) {
        X(this);
        da(this, b);
        V(this, !1, b)
    };

    function da(b, c) {
        K.async.w.Aa && b.fd && K.ha(c) && c.stack && /^[^\n]+(\n   [^\n]+)+/.test(c.stack) && (c.stack = c.stack + "\nDEFERRED OPERATION:\n" + b.fd)
    }

    function Y(b, c, d) {
        return Z(b, c, null, d)
    }

    function ea(b, c) {
        Z(b, null, c, void 0)
    }

    function Z(b, c, d, e) {
        b.Jc.push([c, d, e]);
        b.ub && W(b);
        return b
    }
    I.then = function (b, c, d) {
        var e, f, g = new K.Promise(function (b, c) {
            e = b;
            f = c
        });
        Z(this, e, function (b) {
            b instanceof K.async.w.kb ? g.cancel() : f(b)
        });
        return g.then(b, c, d)
    };
    K.Thenable.$e(K.async.w);
    K.async.w.prototype.Si = function () {
        var b = new K.async.w;
        Z(this, b.Ib, b.ab, b);
        b.da = this;
        this.hc++;
        return b
    };

    function fa(b) {
        return K.j.some(b.Jc, function (b) {
            return K.ya(b[1])
        })
    }

    function W(b) {
        b.Oc && b.ub && fa(b) && (K.async.w.Fl(b.Oc), b.Oc = 0);
        b.da && (b.da.hc--, delete b.da);
        for (var c = b.ia, d = !1, e = !1; b.Jc.length && !b.cd;) {
            var f = b.Jc.shift(),
                g = f[0],
                h = f[1],
                f = f[2];
            if (g = b.yb ? h : g) try {
                var l = g.call(f || b.vf, c);
                K.P(l) && (b.yb = b.yb && (l == c || l instanceof Error), b.ia = c = l);
                if (K.Thenable.Bg(c) || typeof K.global.Promise === u && c instanceof K.global.Promise) e = !0, b.cd = !0
            } catch (m) {
                c = m, b.yb = !0, da(b, c), fa(b) || (d = !0)
            }
        }
        b.ia = c;
        e ? (e = K.bind(b.qf, b, !0), l = K.bind(b.qf, b, !1), c instanceof K.async.w ? (Z(c, e, l), c.Qi = !0) : c.then(e, l)) : K.async.w.si && c instanceof Error && !(c instanceof K.async.w.kb) && (d = b.yb = !0);
        d && (b.Oc = K.async.w.gl(c))
    }
    K.async.w.nh = function (b) {
        var c = new K.async.w;
        c.Ib(b);
        return c
    };
    K.async.w.Kq = function (b) {
        var c = new K.async.w;
        c.Ib();
        Y(c, function () {
            return b
        });
        return c
    };
    K.async.w.la = function (b) {
        var c = new K.async.w;
        c.ab(b);
        return c
    };
    K.async.w.Mp = function () {
        var b = new K.async.w;
        b.cancel();
        return b
    };
    K.async.w.Ut = function (b, c, d) {
        return b instanceof K.async.w ? Y(b.Si(), c, d) : Y(K.async.w.nh(b), c, d)
    };
    K.async.w.Zb = function (b) {
        K.debug.Error.call(this);
        this.tb = b
    };
    K.cb(K.async.w.Zb, K.debug.Error);
    K.async.w.Zb.prototype.message = "Deferred has already fired";
    K.async.w.Zb.prototype.name = "AlreadyCalledError";
    K.async.w.kb = function (b) {
        K.debug.Error.call(this);
        this.tb = b
    };
    K.cb(K.async.w.kb, K.debug.Error);
    K.async.w.kb.prototype.message = "Deferred was canceled";
    K.async.w.kb.prototype.name = "CanceledError";
    K.async.w.He = function (b) {
        this.Pb = K.global.setTimeout(K.bind(this.oh, this), 0);
        this.qj = b
    };
    K.async.w.He.prototype.oh = function () {
        delete K.async.w.Mb[this.Pb];
        throw this.qj;
    };
    K.async.w.Mb = {};
    K.async.w.gl = function (b) {
        b = new K.async.w.He(b);
        K.async.w.Mb[b.Pb] = b;
        return b.Pb
    };
    K.async.w.Fl = function (b) {
        var c = K.async.w.Mb[b];
        c && (K.global.clearTimeout(c.Pb), delete K.async.w.Mb[b])
    };
    K.async.w.zp = function () {
        var b = K.async.w.Mb,
            c;
        for (c in b) {
            var d = b[c];
            K.global.clearTimeout(d.Pb);
            d.oh()
        }
    };
    K.B = {};
    K.B.C = {};
    K.B.C.$c = "closure_verification";
    K.B.C.Qh = 5E3;
    K.B.C.$d = [];
    K.B.C.wk = function (b, c) {
        b = K.j.map(b, K.b.ga.ie);
        return K.B.C.fh(b, c)
    };
    K.B.C.fh = function (b, c) {
        function d() {
            var e = b.shift(),
                e = K.B.C.Yb(e, c);
            b.length && Z(e, d, d, void 0);
            return e
        }
        if (!b.length) return K.async.w.nh(null);
        var e = K.B.C.$d.length;
        K.j.extend(K.B.C.$d, b);
        if (e) return K.B.C.gh;
        b = K.B.C.$d;
        K.B.C.gh = d();
        return K.B.C.gh
    };
    K.B.C.load = function (b, c) {
        b = K.b.ga.ie(b);
        return K.B.C.Yb(b, c)
    };
    K.B.C.Yb = function (b, c) {
        var d = c || {};
        c = d.document || document;
        var e = K.b.D.s(b),
            f = K.a.createElement(p),
            g = {
                hh: f,
                qh: void 0
            },
            h = new K.async.w(K.B.C.Ui, g),
            l = null,
            m = K.fb(d.timeout) ? d.timeout : K.B.C.Qh;
        0 < m && (l = window.setTimeout(function () {
            K.B.C.jc(f, !0);
            h.ab(new K.B.C.Error(K.B.C.ac.TIMEOUT, "Timeout reached for loading script " + e))
        }, m), g.qh = l);
        f.onload = f.onreadystatechange = function () {
            f.readyState && "loaded" != f.readyState && f.readyState != t || (K.B.C.jc(f, d.Tp || !1, l), h.Ib(null))
        };
        f.onerror = function () {
            K.B.C.jc(f, !0,
                l);
            h.ab(new K.B.C.Error(K.B.C.ac.ai, "Error while loading script " + e))
        };
        g = d.attributes || {};
        K.object.extend(g, {
            type: C,
            charset: "UTF-8"
        });
        K.a.Kc(f, g);
        K.a.S.kl(f, b);
        K.B.C.Jj(c).appendChild(f);
        return h
    };
    K.B.C.Yr = function (b, c, d) {
        b = K.b.ga.ie(b);
        return K.B.C.el(b, c, d)
    };
    K.B.C.el = function (b, c, d) {
        K.global[K.B.C.$c] || (K.global[K.B.C.$c] = {});
        var e = K.global[K.B.C.$c],
            f = K.b.D.s(b);
        if (K.P(e[c])) return K.async.w.la(new K.B.C.Error(K.B.C.ac.Di, "Verification object " + c + " already defined."));
        b = K.B.C.Yb(b, d);
        var g = new K.async.w(K.bind(b.cancel, b));
        Y(b, function () {
            var b = e[c];
            K.P(b) ? (g.Ib(b), delete e[c]) : g.ab(new K.B.C.Error(K.B.C.ac.Ci, "Script " + f + " loaded, but verification object " + c + " was not defined."))
        });
        ea(b, function (b) {
            K.P(e[c]) && delete e[c];
            g.ab(b)
        });
        return g
    };
    K.B.C.Jj = function (b) {
        var c = K.a.getElementsByTagName("HEAD", b);
        return !c || K.j.Tb(c) ? b.documentElement : c[0]
    };
    K.B.C.Ui = function () {
        if (this && this.hh) {
            var b = this.hh;
            b && b.tagName == p && K.B.C.jc(b, !0, this.qh)
        }
    };
    K.B.C.jc = function (b, c, d) {
        K.fb(d) && K.global.clearTimeout(d);
        b.onload = K.Ra;
        b.onerror = K.Ra;
        b.onreadystatechange = K.Ra;
        c && window.setTimeout(function () {
            K.a.removeNode(b)
        }, 0)
    };
    K.B.C.ac = {
        ai: 0,
        TIMEOUT: 1,
        Ci: 2,
        Di: 3
    };
    K.B.C.Error = function (b, c) {
        var d = "Jsloader error (code #" + b + ")";
        c && (d += ": " + c);
        K.debug.Error.call(this, d);
        this.code = b
    };
    K.cb(K.B.C.Error, K.debug.Error);
    var google = {
        G: {}
    };
    google.G.K = {};
    google.G.K.ob = {};
    google.G.K.ob.ds = function (b, c) {
        return {
            format: b,
            Ji: c
        }
    };
    google.G.K.ob.Mj = function (b) {
        return K.b.D.format(b.format, b.Ji)
    };
    google.G.K.ob.load = function (b, c) {
        b = K.b.D.format(b, c);
        var d = K.B.C.Yb(b, {
            attributes: {
                async: !1,
                defer: !1
            }
        });
        return new Promise(function (b) {
            Y(d, b)
        })
    };
    google.G.K.ob.wk = function (b) {
        b = K.j.map(b, google.G.K.ob.Mj);
        if (K.j.Tb(b)) return Promise.resolve();
        var c = {
                attributes: {
                    async: !1,
                    defer: !1
                }
            },
            d;
        !K.userAgent.Y || K.userAgent.va(11) ? K.j.forEach(b, function (b) {
            d = K.B.C.Yb(b, c)
        }) : d = K.B.C.fh(b, c);
        return new Promise(function (b) {
            Y(d, b)
        })
    };
    google.G.K.T = {};
    if (K.vb(v)) throw Error("Google Charts loader.js can only be loaded once.");
    google.G.K.T.Kl = {
        41: z,
        42: z,
        43: z,
        44: z,
        1: "1.0",
        "1.0": "current",
        "1.1": "upcoming",
        current: "45.1",
        upcoming: "45.1"
    };
    google.G.K.T.Ik = function (b) {
        var c, d = b,
            e = b.match(/^testing-/);
        e && (d = d.replace(/^testing-/, ""));
        b = d;
        do(c = google.G.K.T.Kl[d]) && (d = c); while (c);
        c = (e ? "testing-" : "") + d;
        return {
            version: d == z ? b : c,
            Bk: c
        }
    };
    google.G.K.T.je = null;
    google.G.K.T.zk = function (b) {
        var c = google.G.K.T.Ik(b),
            d = K.f.H.from("https://www.gstatic.com/charts/%{version}/loader.js");
        return google.G.K.ob.load(d, {
            version: c.Bk
        }).then(function () {
            var d = K.vb("google.charts.loader.VersionSpecific.load") || K.vb("google.charts.loader.publicLoad") || K.vb("google.charts.versionSpecific.load");
            if (!d) throw Error("Bad version: " + b);
            google.G.K.T.je = function (b) {
                b = d(c.version, b);
                if (null == b || null == b.then) {
                    var e = K.vb("google.charts.loader.publicSetOnLoadCallback") || K.vb("google.charts.versionSpecific.setOnLoadCallback");
                    b = new Promise(function (b) {
                        e(b)
                    });
                    b.then = e
                }
                return b
            }
        })
    };
    google.G.K.T.Og = null;
    google.G.K.T.mc = null;
    google.G.K.T.vk = function (b, c) {
        google.G.K.T.je || (google.G.K.T.Og = google.G.K.T.zk(b));
        return google.G.K.T.mc = google.G.K.T.Og.then(function () {
            return google.G.K.T.je(c)
        })
    };
    google.G.K.T.jl = function (b) {
        if (!google.G.K.T.mc) throw Error("Must call google.charts.load before google.charts.setOnLoadCallback");
        return b ? google.G.K.T.mc.then(b) : google.G.K.T.mc
    };
    google.G.load = function (b) {
        for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
        d = 0;
        "visualization" === c[d] && d++;
        var e = "current";
        K.L(c[d]) && (e = c[d], d++);
        var f = {};
        K.ha(c[d]) && (f = c[d]);
        return google.G.K.T.vk(e, f)
    };
    K.yf(v, google.G.load);
    google.G.il = google.G.K.T.jl;
    K.yf("google.charts.setOnLoadCallback", google.G.il);
}).call(this);