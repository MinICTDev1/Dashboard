/*
 Highmaps JS v5.0.11 (2017-05-04)

 (c) 2011-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (J, S) {
    "object" === typeof module && module.exports ? module.exports = J.document ? S(J) : S : J.Highcharts = S(J)
})("undefined" !== typeof window ? window : this, function (J) {
    J = function () {
        var a = window,
            z = a.document,
            B = a.navigator && a.navigator.userAgent || "",
            C = z && z.createElementNS && !!z.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            A = /(edge|msie|trident)/i.test(B) && !window.opera,
            f = !C,
            e = /Firefox/.test(B),
            t = e && 4 > parseInt(B.split("Firefox/")[1], 10);
        return a.Highcharts ? a.Highcharts.error(16, !0) : {
            product: "Highmaps",
            version: "5.0.11",
            deg2rad: 2 * Math.PI / 360,
            doc: z,
            hasBidiBug: t,
            hasTouch: z && void 0 !== z.documentElement.ontouchstart,
            isMS: A,
            isWebKit: /AppleWebKit/.test(B),
            isFirefox: e,
            isTouchDevice: /(Mobile|Android|Windows Phone)/.test(B),
            SVG_NS: "http://www.w3.org/2000/svg",
            chartCount: 0,
            seriesTypes: {},
            symbolSizes: {},
            svg: C,
            vml: f,
            win: a,
            marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
            noop: function () {},
            charts: []
        }
    }();
    (function (a) {
        var z = [],
            B = a.charts,
            C = a.doc,
            A = a.win;
        a.error = function (f, e) {
            f = a.isNumber(f) ? "Highcharts error #" +
                f + ": www.highcharts.com/errors/" + f : f;
            if (e) throw Error(f);
            A.console && console.log(f)
        };
        a.Fx = function (a, e, t) {
            this.options = e;
            this.elem = a;
            this.prop = t
        };
        a.Fx.prototype = {
            dSetter: function () {
                var a = this.paths[0],
                    e = this.paths[1],
                    t = [],
                    r = this.now,
                    q = a.length,
                    h;
                if (1 === r) t = this.toD;
                else if (q === e.length && 1 > r)
                    for (; q--;) h = parseFloat(a[q]), t[q] = isNaN(h) ? a[q] : r * parseFloat(e[q] - h) + h;
                else t = e;
                this.elem.attr("d", t, null, !0)
            },
            update: function () {
                var a = this.elem,
                    e = this.prop,
                    t = this.now,
                    r = this.options.step;
                if (this[e + "Setter"]) this[e +
                    "Setter"]();
                else a.attr ? a.element && a.attr(e, t, null, !0) : a.style[e] = t + this.unit;
                r && r.call(a, t, this)
            },
            run: function (a, e, t) {
                var f = this,
                    q = function (a) {
                        return q.stopped ? !1 : f.step(a)
                    },
                    h;
                this.startTime = +new Date;
                this.start = a;
                this.end = e;
                this.unit = t;
                this.now = this.start;
                this.pos = 0;
                q.elem = this.elem;
                q.prop = this.prop;
                q() && 1 === z.push(q) && (q.timerId = setInterval(function () {
                    for (h = 0; h < z.length; h++) z[h]() || z.splice(h--, 1);
                    z.length || clearInterval(q.timerId)
                }, 13))
            },
            step: function (f) {
                var e = +new Date,
                    t, r = this.options,
                    q = this.elem,
                    h = r.complete,
                    g = r.duration,
                    x = r.curAnim;
                q.attr && !q.element ? f = !1 : f || e >= g + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), t = x[this.prop] = !0, a.objectEach(x, function (a) {
                    !0 !== a && (t = !1)
                }), t && h && h.call(q), f = !1) : (this.pos = r.easing((e - this.startTime) / g), this.now = this.start + (this.end - this.start) * this.pos, this.update(), f = !0);
                return f
            },
            initPath: function (f, e, t) {
                function r(a) {
                    var b, d;
                    for (c = a.length; c--;) b = "M" === a[c] || "L" === a[c], d = /[a-zA-Z]/.test(a[c + 3]), b && d && a.splice(c + 1, 0, a[c + 1], a[c + 2], a[c + 1], a[c + 2])
                }

                function q(a, d) {
                    for (; a.length < k;) {
                        a[0] = d[k - a.length];
                        var n = a.slice(0, b);
                        [].splice.apply(a, [0, 0].concat(n));
                        D && (n = a.slice(a.length - b), [].splice.apply(a, [a.length, 0].concat(n)), c--)
                    }
                    a[0] = "M"
                }

                function h(a, c) {
                    for (var n = (k - a.length) / b; 0 < n && n--;) d = a.slice().splice(a.length / H - b, b * H), d[0] = c[k - b - n * b], u && (d[b - 6] = d[b - 2], d[b - 5] = d[b - 1]), [].splice.apply(a, [a.length / H, 0].concat(d)), D && n--
                }
                e = e || "";
                var g, x = f.startX,
                    l = f.endX,
                    u = -1 < e.indexOf("C"),
                    b = u ? 7 : 3,
                    k, d, c;
                e = e.split(" ");
                t = t.slice();
                var D = f.isArea,
                    H = D ? 2 : 1,
                    n;
                u && (r(e),
                    r(t));
                if (x && l) {
                    for (c = 0; c < x.length; c++)
                        if (x[c] === l[0]) {
                            g = c;
                            break
                        } else if (x[0] === l[l.length - x.length + c]) {
                        g = c;
                        n = !0;
                        break
                    }
                    void 0 === g && (e = [])
                }
                e.length && a.isNumber(g) && (k = t.length + g * H * b, n ? (q(e, t), h(t, e)) : (q(t, e), h(e, t)));
                return [e, t]
            }
        };
        a.extend = function (a, e) {
            var f;
            a || (a = {});
            for (f in e) a[f] = e[f];
            return a
        };
        a.merge = function () {
            var f, e = arguments,
                t, r = {},
                q = function (f, g) {
                    "object" !== typeof f && (f = {});
                    a.objectEach(g, function (h, l) {
                        !a.isObject(h, !0) || a.isClass(h) || a.isDOMElement(h) ? f[l] = g[l] : f[l] = q(f[l] || {}, h)
                    });
                    return f
                };
            !0 === e[0] && (r = e[1], e = Array.prototype.slice.call(e, 2));
            t = e.length;
            for (f = 0; f < t; f++) r = q(r, e[f]);
            return r
        };
        a.pInt = function (a, e) {
            return parseInt(a, e || 10)
        };
        a.isString = function (a) {
            return "string" === typeof a
        };
        a.isArray = function (a) {
            a = Object.prototype.toString.call(a);
            return "[object Array]" === a || "[object Array Iterator]" === a
        };
        a.isObject = function (f, e) {
            return !!f && "object" === typeof f && (!e || !a.isArray(f))
        };
        a.isDOMElement = function (f) {
            return a.isObject(f) && "number" === typeof f.nodeType
        };
        a.isClass = function (f) {
            var e =
                f && f.constructor;
            return !(!a.isObject(f, !0) || a.isDOMElement(f) || !e || !e.name || "Object" === e.name)
        };
        a.isNumber = function (a) {
            return "number" === typeof a && !isNaN(a)
        };
        a.erase = function (a, e) {
            for (var f = a.length; f--;)
                if (a[f] === e) {
                    a.splice(f, 1);
                    break
                }
        };
        a.defined = function (a) {
            return void 0 !== a && null !== a
        };
        a.attr = function (f, e, t) {
            var r;
            a.isString(e) ? a.defined(t) ? f.setAttribute(e, t) : f && f.getAttribute && (r = f.getAttribute(e)) : a.defined(e) && a.isObject(e) && a.objectEach(e, function (a, h) {
                f.setAttribute(h, a)
            });
            return r
        };
        a.splat =
            function (f) {
                return a.isArray(f) ? f : [f]
            };
        a.syncTimeout = function (a, e, t) {
            if (e) return setTimeout(a, e, t);
            a.call(0, t)
        };
        a.pick = function () {
            var a = arguments,
                e, t, r = a.length;
            for (e = 0; e < r; e++)
                if (t = a[e], void 0 !== t && null !== t) return t
        };
        a.css = function (f, e) {
            a.isMS && !a.svg && e && void 0 !== e.opacity && (e.filter = "alpha(opacity\x3d" + 100 * e.opacity + ")");
            a.extend(f.style, e)
        };
        a.createElement = function (f, e, t, r, q) {
            f = C.createElement(f);
            var h = a.css;
            e && a.extend(f, e);
            q && h(f, {
                padding: 0,
                border: "none",
                margin: 0
            });
            t && h(f, t);
            r && r.appendChild(f);
            return f
        };
        a.extendClass = function (f, e) {
            var t = function () {};
            t.prototype = new f;
            a.extend(t.prototype, e);
            return t
        };
        a.pad = function (a, e, t) {
            return Array((e || 2) + 1 - String(a).length).join(t || 0) + a
        };
        a.relativeLength = function (a, e) {
            return /%$/.test(a) ? e * parseFloat(a) / 100 : parseFloat(a)
        };
        a.wrap = function (a, e, t) {
            var f = a[e];
            a[e] = function () {
                var a = Array.prototype.slice.call(arguments),
                    h = arguments,
                    g = this;
                g.proceed = function () {
                    f.apply(g, arguments.length ? arguments : h)
                };
                a.unshift(f);
                a = t.apply(this, a);
                g.proceed = null;
                return a
            }
        };
        a.getTZOffset = function (f) {
            var e = a.Date;
            return 6E4 * (e.hcGetTimezoneOffset && e.hcGetTimezoneOffset(f) || e.hcTimezoneOffset || 0)
        };
        a.dateFormat = function (f, e, t) {
            if (!a.defined(e) || isNaN(e)) return a.defaultOptions.lang.invalidDate || "";
            f = a.pick(f, "%Y-%m-%d %H:%M:%S");
            var r = a.Date,
                q = new r(e - a.getTZOffset(e)),
                h = q[r.hcGetHours](),
                g = q[r.hcGetDay](),
                x = q[r.hcGetDate](),
                l = q[r.hcGetMonth](),
                u = q[r.hcGetFullYear](),
                b = a.defaultOptions.lang,
                k = b.weekdays,
                d = b.shortWeekdays,
                c = a.pad,
                r = a.extend({
                    a: d ? d[g] : k[g].substr(0, 3),
                    A: k[g],
                    d: c(x),
                    e: c(x, 2, " "),
                    w: g,
                    b: b.shortMonths[l],
                    B: b.months[l],
                    m: c(l + 1),
                    y: u.toString().substr(2, 2),
                    Y: u,
                    H: c(h),
                    k: h,
                    I: c(h % 12 || 12),
                    l: h % 12 || 12,
                    M: c(q[r.hcGetMinutes]()),
                    p: 12 > h ? "AM" : "PM",
                    P: 12 > h ? "am" : "pm",
                    S: c(q.getSeconds()),
                    L: c(Math.round(e % 1E3), 3)
                }, a.dateFormats);
            a.objectEach(r, function (a, b) {
                for (; - 1 !== f.indexOf("%" + b);) f = f.replace("%" + b, "function" === typeof a ? a(e) : a)
            });
            return t ? f.substr(0, 1).toUpperCase() + f.substr(1) : f
        };
        a.formatSingle = function (f, e) {
            var t = /\.([0-9])/,
                r = a.defaultOptions.lang;
            /f$/.test(f) ? (t = (t =
                f.match(t)) ? t[1] : -1, null !== e && (e = a.numberFormat(e, t, r.decimalPoint, -1 < f.indexOf(",") ? r.thousandsSep : ""))) : e = a.dateFormat(f, e);
            return e
        };
        a.format = function (f, e) {
            for (var t = "{", r = !1, q, h, g, x, l = [], u; f;) {
                t = f.indexOf(t);
                if (-1 === t) break;
                q = f.slice(0, t);
                if (r) {
                    q = q.split(":");
                    h = q.shift().split(".");
                    x = h.length;
                    u = e;
                    for (g = 0; g < x; g++) u = u[h[g]];
                    q.length && (u = a.formatSingle(q.join(":"), u));
                    l.push(u)
                } else l.push(q);
                f = f.slice(t + 1);
                t = (r = !r) ? "}" : "{"
            }
            l.push(f);
            return l.join("")
        };
        a.getMagnitude = function (a) {
            return Math.pow(10,
                Math.floor(Math.log(a) / Math.LN10))
        };
        a.normalizeTickInterval = function (f, e, t, r, q) {
            var h, g = f;
            t = a.pick(t, 1);
            h = f / t;
            e || (e = q ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === r && (1 === t ? e = a.grep(e, function (a) {
                return 0 === a % 1
            }) : .1 >= t && (e = [1 / t])));
            for (r = 0; r < e.length && !(g = e[r], q && g * t >= f || !q && h <= (e[r] + (e[r + 1] || e[r])) / 2); r++);
            return g = a.correctFloat(g * t, -Math.round(Math.log(.001) / Math.LN10))
        };
        a.stableSort = function (a, e) {
            var f = a.length,
                r, q;
            for (q = 0; q < f; q++) a[q].safeI = q;
            a.sort(function (a, g) {
                r = e(a, g);
                return 0 === r ?
                    a.safeI - g.safeI : r
            });
            for (q = 0; q < f; q++) delete a[q].safeI
        };
        a.arrayMin = function (a) {
            for (var e = a.length, f = a[0]; e--;) a[e] < f && (f = a[e]);
            return f
        };
        a.arrayMax = function (a) {
            for (var e = a.length, f = a[0]; e--;) a[e] > f && (f = a[e]);
            return f
        };
        a.destroyObjectProperties = function (f, e) {
            a.objectEach(f, function (a, r) {
                a && a !== e && a.destroy && a.destroy();
                delete f[r]
            })
        };
        a.discardElement = function (f) {
            var e = a.garbageBin;
            e || (e = a.createElement("div"));
            f && e.appendChild(f);
            e.innerHTML = ""
        };
        a.correctFloat = function (a, e) {
            return parseFloat(a.toPrecision(e ||
                14))
        };
        a.setAnimation = function (f, e) {
            e.renderer.globalAnimation = a.pick(f, e.options.chart.animation, !0)
        };
        a.animObject = function (f) {
            return a.isObject(f) ? a.merge(f) : {
                duration: f ? 500 : 0
            }
        };
        a.timeUnits = {
            millisecond: 1,
            second: 1E3,
            minute: 6E4,
            hour: 36E5,
            day: 864E5,
            week: 6048E5,
            month: 24192E5,
            year: 314496E5
        };
        a.numberFormat = function (f, e, t, r) {
            f = +f || 0;
            e = +e;
            var q = a.defaultOptions.lang,
                h = (f.toString().split(".")[1] || "").length,
                g, x; - 1 === e ? e = Math.min(h, 20) : a.isNumber(e) || (e = 2);
            x = (Math.abs(f) + Math.pow(10, -Math.max(e, h) - 1)).toFixed(e);
            h = String(a.pInt(x));
            g = 3 < h.length ? h.length % 3 : 0;
            t = a.pick(t, q.decimalPoint);
            r = a.pick(r, q.thousandsSep);
            f = (0 > f ? "-" : "") + (g ? h.substr(0, g) + r : "");
            f += h.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + r);
            e && (f += t + x.slice(-e));
            return f
        };
        Math.easeInOutSine = function (a) {
            return -.5 * (Math.cos(Math.PI * a) - 1)
        };
        a.getStyle = function (f, e, t) {
            if ("width" === e) return Math.min(f.offsetWidth, f.scrollWidth) - a.getStyle(f, "padding-left") - a.getStyle(f, "padding-right");
            if ("height" === e) return Math.min(f.offsetHeight, f.scrollHeight) - a.getStyle(f,
                "padding-top") - a.getStyle(f, "padding-bottom");
            if (f = A.getComputedStyle(f, void 0)) f = f.getPropertyValue(e), a.pick(t, !0) && (f = a.pInt(f));
            return f
        };
        a.inArray = function (a, e) {
            return e.indexOf ? e.indexOf(a) : [].indexOf.call(e, a)
        };
        a.grep = function (a, e) {
            return [].filter.call(a, e)
        };
        a.find = function (a, e) {
            return [].find.call(a, e)
        };
        a.map = function (a, e) {
            for (var f = [], r = 0, q = a.length; r < q; r++) f[r] = e.call(a[r], a[r], r, a);
            return f
        };
        a.offset = function (a) {
            var e = C.documentElement;
            a = a.getBoundingClientRect();
            return {
                top: a.top + (A.pageYOffset ||
                    e.scrollTop) - (e.clientTop || 0),
                left: a.left + (A.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }
        };
        a.stop = function (a, e) {
            for (var f = z.length; f--;) z[f].elem !== a || e && e !== z[f].prop || (z[f].stopped = !0)
        };
        a.each = function (a, e, t) {
            return Array.prototype.forEach.call(a, e, t)
        };
        a.objectEach = function (a, e, t) {
            for (var f in a) a.hasOwnProperty(f) && e.call(t, a[f], f, a)
        };
        a.addEvent = function (f, e, t) {
            function r(a) {
                a.target = a.srcElement || A;
                t.call(f, a)
            }
            var q = f.hcEvents = f.hcEvents || {};
            f.addEventListener ? f.addEventListener(e, t, !1) : f.attachEvent &&
                (f.hcEventsIE || (f.hcEventsIE = {}), f.hcEventsIE[t.toString()] = r, f.attachEvent("on" + e, r));
            q[e] || (q[e] = []);
            q[e].push(t);
            return function () {
                a.removeEvent(f, e, t)
            }
        };
        a.removeEvent = function (f, e, t) {
            function r(a, g) {
                f.removeEventListener ? f.removeEventListener(a, g, !1) : f.attachEvent && (g = f.hcEventsIE[g.toString()], f.detachEvent("on" + a, g))
            }

            function q() {
                var l, u;
                f.nodeName && (e ? (l = {}, l[e] = !0) : l = g, a.objectEach(l, function (a, k) {
                    if (g[k])
                        for (u = g[k].length; u--;) r(k, g[k][u])
                }))
            }
            var h, g = f.hcEvents,
                x;
            g && (e ? (h = g[e] || [], t ? (x = a.inArray(t,
                h), -1 < x && (h.splice(x, 1), g[e] = h), r(e, t)) : (q(), g[e] = [])) : (q(), f.hcEvents = {}))
        };
        a.fireEvent = function (f, e, t, r) {
            var q;
            q = f.hcEvents;
            var h, g;
            t = t || {};
            if (C.createEvent && (f.dispatchEvent || f.fireEvent)) q = C.createEvent("Events"), q.initEvent(e, !0, !0), a.extend(q, t), f.dispatchEvent ? f.dispatchEvent(q) : f.fireEvent(e, q);
            else if (q)
                for (q = q[e] || [], h = q.length, t.target || a.extend(t, {
                        preventDefault: function () {
                            t.defaultPrevented = !0
                        },
                        target: f,
                        type: e
                    }), e = 0; e < h; e++)(g = q[e]) && !1 === g.call(f, t) && t.preventDefault();
            r && !t.defaultPrevented &&
                r(t)
        };
        a.animate = function (f, e, t) {
            var r, q = "",
                h, g, x;
            a.isObject(t) || (x = arguments, t = {
                duration: x[2],
                easing: x[3],
                complete: x[4]
            });
            a.isNumber(t.duration) || (t.duration = 400);
            t.easing = "function" === typeof t.easing ? t.easing : Math[t.easing] || Math.easeInOutSine;
            t.curAnim = a.merge(e);
            a.objectEach(e, function (l, u) {
                a.stop(f, u);
                g = new a.Fx(f, t, u);
                h = null;
                "d" === u ? (g.paths = g.initPath(f, f.d, e.d), g.toD = e.d, r = 0, h = 1) : f.attr ? r = f.attr(u) : (r = parseFloat(a.getStyle(f, u)) || 0, "opacity" !== u && (q = "px"));
                h || (h = l);
                h && h.match && h.match("px") &&
                    (h = h.replace(/px/g, ""));
                g.run(r, h, q)
            })
        };
        a.seriesType = function (f, e, t, r, q) {
            var h = a.getOptions(),
                g = a.seriesTypes;
            h.plotOptions[f] = a.merge(h.plotOptions[e], t);
            g[f] = a.extendClass(g[e] || function () {}, r);
            g[f].prototype.type = f;
            q && (g[f].prototype.pointClass = a.extendClass(a.Point, q));
            return g[f]
        };
        a.uniqueKey = function () {
            var a = Math.random().toString(36).substring(2, 9),
                e = 0;
            return function () {
                return "highcharts-" + a + "-" + e++
            }
        }();
        A.jQuery && (A.jQuery.fn.highcharts = function () {
            var f = [].slice.call(arguments);
            if (this[0]) return f[0] ?
                (new(a[a.isString(f[0]) ? f.shift() : "Chart"])(this[0], f[0], f[1]), this) : B[a.attr(this[0], "data-highcharts-chart")]
        });
        C && !C.defaultView && (a.getStyle = function (f, e) {
            var t = {
                width: "clientWidth",
                height: "clientHeight"
            }[e];
            if (f.style[e]) return a.pInt(f.style[e]);
            "opacity" === e && (e = "filter");
            if (t) return f.style.zoom = 1, Math.max(f[t] - 2 * a.getStyle(f, "padding"), 0);
            f = f.currentStyle[e.replace(/\-(\w)/g, function (a, e) {
                return e.toUpperCase()
            })];
            "filter" === e && (f = f.replace(/alpha\(opacity=([0-9]+)\)/, function (a, e) {
                return e /
                    100
            }));
            return "" === f ? 1 : a.pInt(f)
        });
        Array.prototype.forEach || (a.each = function (a, e, t) {
            for (var f = 0, q = a.length; f < q; f++)
                if (!1 === e.call(t, a[f], f, a)) return f
        });
        Array.prototype.indexOf || (a.inArray = function (a, e) {
            var f, r = 0;
            if (e)
                for (f = e.length; r < f; r++)
                    if (e[r] === a) return r;
            return -1
        });
        Array.prototype.filter || (a.grep = function (a, e) {
            for (var f = [], r = 0, q = a.length; r < q; r++) e(a[r], r) && f.push(a[r]);
            return f
        });
        Array.prototype.find || (a.find = function (a, e) {
            var f, r = a.length;
            for (f = 0; f < r; f++)
                if (e(a[f], f)) return a[f]
        })
    })(J);
    (function (a) {
        var z =
            a.each,
            B = a.isNumber,
            C = a.map,
            A = a.merge,
            f = a.pInt;
        a.Color = function (e) {
            if (!(this instanceof a.Color)) return new a.Color(e);
            this.init(e)
        };
        a.Color.prototype = {
            parsers: [{
                regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                parse: function (a) {
                    return [f(a[1]), f(a[2]), f(a[3]), parseFloat(a[4], 10)]
                }
            }, {
                regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                parse: function (a) {
                    return [f(a[1]), f(a[2]), f(a[3]), 1]
                }
            }],
            names: {
                white: "#ffffff",
                black: "#000000"
            },
            init: function (e) {
                var f, r, q, h;
                if ((this.input = e = this.names[e && e.toLowerCase ? e.toLowerCase() : ""] || e) && e.stops) this.stops = C(e.stops, function (g) {
                    return new a.Color(g[1])
                });
                else if (e && "#" === e[0] && (f = e.length, e = parseInt(e.substr(1), 16), 7 === f ? r = [(e & 16711680) >> 16, (e & 65280) >> 8, e & 255, 1] : 4 === f && (r = [(e & 3840) >> 4 | (e & 3840) >> 8, (e & 240) >> 4 | e & 240, (e & 15) << 4 | e & 15, 1])), !r)
                    for (q = this.parsers.length; q-- && !r;) h = this.parsers[q], (f = h.regex.exec(e)) && (r = h.parse(f));
                this.rgba = r || []
            },
            get: function (a) {
                var e = this.input,
                    f = this.rgba,
                    q;
                this.stops ? (q = A(e), q.stops = [].concat(q.stops), z(this.stops, function (h, g) {
                    q.stops[g] = [q.stops[g][0], h.get(a)]
                })) : q = f && B(f[0]) ? "rgb" === a || !a && 1 === f[3] ? "rgb(" + f[0] + "," + f[1] + "," + f[2] + ")" : "a" === a ? f[3] : "rgba(" + f.join(",") + ")" : e;
                return q
            },
            brighten: function (a) {
                var e, r = this.rgba;
                if (this.stops) z(this.stops, function (e) {
                    e.brighten(a)
                });
                else if (B(a) && 0 !== a)
                    for (e = 0; 3 > e; e++) r[e] += f(255 * a), 0 > r[e] && (r[e] = 0), 255 < r[e] && (r[e] = 255);
                return this
            },
            setOpacity: function (a) {
                this.rgba[3] = a;
                return this
            }
        };
        a.color = function (e) {
            return new a.Color(e)
        }
    })(J);
    (function (a) {
        function z() {
            var e = a.defaultOptions.global,
                h = r.moment;
            if (e.timezone) {
                if (h) return function (a) {
                    return -h.tz(a, e.timezone).utcOffset()
                };
                a.error(25)
            }
            return e.useUTC && e.getTimezoneOffset
        }

        function B() {
            var e = a.defaultOptions.global,
                h, g = e.useUTC,
                x = g ? "getUTC" : "get",
                l = g ? "setUTC" : "set";
            a.Date = h = e.Date || r.Date;
            h.hcTimezoneOffset = g && e.timezoneOffset;
            h.hcGetTimezoneOffset = z();
            h.hcMakeTime = function (a, b, k, d, c, e) {
                var u;
                g ? (u = h.UTC.apply(0, arguments), u += f(u)) : u = (new h(a, b, t(k, 1), t(d, 0), t(c, 0), t(e, 0))).getTime();
                return u
            };
            A("Minutes Hours Day Date Month FullYear".split(" "), function (a) {
                h["hcGet" + a] = x + a
            });
            A("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "), function (a) {
                h["hcSet" + a] = l + a
            })
        }
        var C = a.color,
            A = a.each,
            f = a.getTZOffset,
            e = a.merge,
            t = a.pick,
            r = a.win;
        a.defaultOptions = {
            colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
            symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
            lang: {
                loading: "Loading...",
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                decimalPoint: ".",
                numericSymbols: "kMGTPE".split(""),
                resetZoom: "Reset zoom",
                resetZoomTitle: "Reset zoom level 1:1",
                thousandsSep: " "
            },
            global: {
                useUTC: !0,
                VMLRadialGradientURL: "http://code.highcharts.com/5.0.11/gfx/vml-radial-gradient.png"
            },
            chart: {
                borderRadius: 0,
                defaultSeriesType: "line",
                ignoreHiddenSeries: !0,
                spacing: [10, 10, 15, 10],
                resetZoomButton: {
                    theme: {
                        zIndex: 20
                    },
                    position: {
                        align: "right",
                        x: -10,
                        y: 10
                    }
                },
                width: null,
                height: null,
                borderColor: "#335cad",
                backgroundColor: "#ffffff",
                plotBorderColor: "#cccccc"
            },
            title: {
                text: "Chart title",
                align: "center",
                margin: 15,
                widthAdjust: -44
            },
            subtitle: {
                text: "",
                align: "center",
                widthAdjust: -44
            },
            plotOptions: {},
            labels: {
                style: {
                    position: "absolute",
                    color: "#333333"
                }
            },
            legend: {
                enabled: !0,
                align: "center",
                layout: "horizontal",
                labelFormatter: function () {
                    return this.name
                },
                borderColor: "#999999",
                borderRadius: 0,
                navigation: {
                    activeColor: "#003399",
                    inactiveColor: "#cccccc"
                },
                itemStyle: {
                    color: "#333333",
                    fontSize: "12px",
                    fontWeight: "bold"
                },
                itemHoverStyle: {
                    color: "#000000"
                },
                itemHiddenStyle: {
                    color: "#cccccc"
                },
                shadow: !1,
                itemCheckboxStyle: {
                    position: "absolute",
                    width: "13px",
                    height: "13px"
                },
                squareSymbol: !0,
                symbolPadding: 5,
                verticalAlign: "bottom",
                x: 0,
                y: 0,
                title: {
                    style: {
                        fontWeight: "bold"
                    }
                }
            },
            loading: {
                labelStyle: {
                    fontWeight: "bold",
                    position: "relative",
                    top: "45%"
                },
                style: {
                    position: "absolute",
                    backgroundColor: "#ffffff",
                    opacity: .5,
                    textAlign: "center"
                }
            },
            tooltip: {
                enabled: !0,
                animation: a.svg,
                borderRadius: 3,
                dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L",
                    second: "%A, %b %e, %H:%M:%S",
                    minute: "%A, %b %e, %H:%M",
                    hour: "%A, %b %e, %H:%M",
                    day: "%A, %b %e, %Y",
                    week: "Week from %A, %b %e, %Y",
                    month: "%B %Y",
                    year: "%Y"
                },
                footerFormat: "",
                padding: 8,
                snap: a.isTouchDevice ? 25 : 10,
                backgroundColor: C("#f7f7f7").setOpacity(.85).get(),
                borderWidth: 1,
                headerFormat: '\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',
                shadow: !0,
                style: {
                    color: "#333333",
                    cursor: "default",
                    fontSize: "12px",
                    pointerEvents: "none",
                    whiteSpace: "nowrap"
                }
            },
            credits: {
                enabled: !0,
                href: "http://www.highcharts.com",
                position: {
                    align: "right",
                    x: -10,
                    verticalAlign: "bottom",
                    y: -5
                },
                style: {
                    cursor: "pointer",
                    color: "#999999",
                    fontSize: "9px"
                },
                text: "Highcharts.com"
            }
        };
        a.setOptions = function (f) {
            a.defaultOptions = e(!0, a.defaultOptions, f);
            B();
            return a.defaultOptions
        };
        a.getOptions = function () {
            return a.defaultOptions
        };
        a.defaultPlotOptions = a.defaultOptions.plotOptions;
        B()
    })(J);
    (function (a) {
        var z, B, C = a.addEvent,
            A = a.animate,
            f = a.attr,
            e = a.charts,
            t = a.color,
            r = a.css,
            q = a.createElement,
            h = a.defined,
            g = a.deg2rad,
            x = a.destroyObjectProperties,
            l = a.doc,
            u = a.each,
            b = a.extend,
            k = a.erase,
            d = a.grep,
            c = a.hasTouch,
            D = a.inArray,
            H = a.isArray,
            n = a.isFirefox,
            I = a.isMS,
            E = a.isObject,
            w = a.isString,
            L = a.isWebKit,
            m = a.merge,
            K = a.noop,
            G = a.objectEach,
            M = a.pick,
            p = a.pInt,
            y = a.removeEvent,
            O = a.stop,
            F = a.svg,
            N = a.SVG_NS,
            R = a.symbolSizes,
            P = a.win;
        z = a.SVGElement = function () {
            return this
        };
        z.prototype = {
            opacity: 1,
            SVG_NS: N,
            textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
            init: function (a, b) {
                this.element = "span" === b ? q(b) : l.createElementNS(this.SVG_NS, b);
                this.renderer = a
            },
            animate: function (v, b, p) {
                b = a.animObject(M(b, this.renderer.globalAnimation, !0));
                0 !== b.duration ? (p && (b.complete = p), A(this, v, b)) : (this.attr(v, null, p), b.step && b.step.call(this));
                return this
            },
            colorGradient: function (v, b, p) {
                var d = this.renderer,
                    y, c, n, k, g, Q, E, I, F, e, l = [],
                    w;
                v.radialGradient ? c = "radialGradient" : v.linearGradient && (c = "linearGradient");
                c && (n = v[c], g = d.gradients, E = v.stops, e = p.radialReference, H(n) && (v[c] =
                    n = {
                        x1: n[0],
                        y1: n[1],
                        x2: n[2],
                        y2: n[3],
                        gradientUnits: "userSpaceOnUse"
                    }), "radialGradient" === c && e && !h(n.gradientUnits) && (k = n, n = m(n, d.getRadialAttr(e, k), {
                    gradientUnits: "userSpaceOnUse"
                })), G(n, function (a, v) {
                    "id" !== v && l.push(v, a)
                }), G(E, function (a) {
                    l.push(a)
                }), l = l.join(","), g[l] ? e = g[l].attr("id") : (n.id = e = a.uniqueKey(), g[l] = Q = d.createElement(c).attr(n).add(d.defs), Q.radAttr = k, Q.stops = [], u(E, function (v) {
                    0 === v[1].indexOf("rgba") ? (y = a.color(v[1]), I = y.get("rgb"), F = y.get("a")) : (I = v[1], F = 1);
                    v = d.createElement("stop").attr({
                        offset: v[0],
                        "stop-color": I,
                        "stop-opacity": F
                    }).add(Q);
                    Q.stops.push(v)
                })), w = "url(" + d.url + "#" + e + ")", p.setAttribute(b, w), p.gradient = l, v.toString = function () {
                    return w
                })
            },
            applyTextOutline: function (v) {
                var b = this.element,
                    p, d, y, c, n; - 1 !== v.indexOf("contrast") && (v = v.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
                v = v.split(" ");
                d = v[v.length - 1];
                if ((y = v[0]) && "none" !== y && a.svg) {
                    this.fakeTS = !0;
                    v = [].slice.call(b.getElementsByTagName("tspan"));
                    this.ySetter = this.xSetter;
                    y = y.replace(/(^[\d\.]+)(.*?)$/g, function (a,
                        v, b) {
                        return 2 * v + b
                    });
                    for (n = v.length; n--;) p = v[n], "highcharts-text-outline" === p.getAttribute("class") && k(v, b.removeChild(p));
                    c = b.firstChild;
                    u(v, function (a, v) {
                        0 === v && (a.setAttribute("x", b.getAttribute("x")), v = b.getAttribute("y"), a.setAttribute("y", v || 0), null === v && b.setAttribute("y", 0));
                        a = a.cloneNode(1);
                        f(a, {
                            "class": "highcharts-text-outline",
                            fill: d,
                            stroke: d,
                            "stroke-width": y,
                            "stroke-linejoin": "round"
                        });
                        b.insertBefore(a, c)
                    })
                }
            },
            attr: function (a, b, p, d) {
                var v, y = this.element,
                    n, c = this,
                    m, k;
                "string" === typeof a &&
                    void 0 !== b && (v = a, a = {}, a[v] = b);
                "string" === typeof a ? c = (this[a + "Getter"] || this._defaultGetter).call(this, a, y) : (G(a, function (v, b) {
                        m = !1;
                        d || O(this, b);
                        this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(b) && (n || (this.symbolAttr(a), n = !0), m = !0);
                        !this.rotation || "x" !== b && "y" !== b || (this.doTransform = !0);
                        m || (k = this[b + "Setter"] || this._defaultSetter, k.call(this, v, b, y), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(b) && this.updateShadows(b, v, k))
                    }, this), this.doTransform &&
                    (this.updateTransform(), this.doTransform = !1));
                p && p();
                return c
            },
            updateShadows: function (a, b, p) {
                for (var v = this.shadows, d = v.length; d--;) p.call(v[d], "height" === a ? Math.max(b - (v[d].cutHeight || 0), 0) : "d" === a ? this.d : b, a, v[d])
            },
            addClass: function (a, b) {
                var v = this.attr("class") || ""; - 1 === v.indexOf(a) && (b || (a = (v + (v ? " " : "") + a).replace("  ", " ")), this.attr("class", a));
                return this
            },
            hasClass: function (a) {
                return -1 !== f(this.element, "class").indexOf(a)
            },
            removeClass: function (a) {
                f(this.element, "class", (f(this.element, "class") ||
                    "").replace(a, ""));
                return this
            },
            symbolAttr: function (a) {
                var v = this;
                u("x y r start end width height innerR anchorX anchorY".split(" "), function (b) {
                    v[b] = M(a[b], v[b])
                });
                v.attr({
                    d: v.renderer.symbols[v.symbolName](v.x, v.y, v.width, v.height, v)
                })
            },
            clip: function (a) {
                return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none")
            },
            crisp: function (a, b) {
                var v = this,
                    p = {},
                    d;
                b = b || a.strokeWidth || 0;
                d = Math.round(b) % 2 / 2;
                a.x = Math.floor(a.x || v.x || 0) + d;
                a.y = Math.floor(a.y || v.y || 0) + d;
                a.width = Math.floor((a.width ||
                    v.width || 0) - 2 * d);
                a.height = Math.floor((a.height || v.height || 0) - 2 * d);
                h(a.strokeWidth) && (a.strokeWidth = b);
                G(a, function (a, b) {
                    v[b] !== a && (v[b] = p[b] = a)
                });
                return p
            },
            css: function (a) {
                var v = this.styles,
                    d = {},
                    y = this.element,
                    n, c = "",
                    m, k = !v,
                    g = ["textOutline", "textOverflow", "width"];
                a && a.color && (a.fill = a.color);
                v && G(a, function (a, b) {
                    a !== v[b] && (d[b] = a, k = !0)
                });
                k && (v && (a = b(v, d)), n = this.textWidth = a && a.width && "auto" !== a.width && "text" === y.nodeName.toLowerCase() && p(a.width), this.styles = a, n && !F && this.renderer.forExport && delete a.width,
                    I && !F ? r(this.element, a) : (m = function (a, v) {
                        return "-" + v.toLowerCase()
                    }, G(a, function (a, v) {
                        -1 === D(v, g) && (c += v.replace(/([A-Z])/g, m) + ":" + a + ";")
                    }), c && f(y, "style", c)), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline)));
                return this
            },
            strokeWidth: function () {
                return this["stroke-width"] || 0
            },
            on: function (a, b) {
                var v = this,
                    p = v.element;
                c && "click" === a ? (p.ontouchstart = function (a) {
                        v.touchEventFired = Date.now();
                        a.preventDefault();
                        b.call(p, a)
                    },
                    p.onclick = function (a) {
                        (-1 === P.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (v.touchEventFired || 0)) && b.call(p, a)
                    }) : p["on" + a] = b;
                return this
            },
            setRadialReference: function (a) {
                var v = this.renderer.gradients[this.element.gradient];
                this.element.radialReference = a;
                v && v.radAttr && v.animate(this.renderer.getRadialAttr(a, v.radAttr));
                return this
            },
            translate: function (a, b) {
                return this.attr({
                    translateX: a,
                    translateY: b
                })
            },
            invert: function (a) {
                this.inverted = a;
                this.updateTransform();
                return this
            },
            updateTransform: function () {
                var a =
                    this.translateX || 0,
                    b = this.translateY || 0,
                    p = this.scaleX,
                    d = this.scaleY,
                    y = this.inverted,
                    c = this.rotation,
                    n = this.element;
                y && (a += this.width, b += this.height);
                a = ["translate(" + a + "," + b + ")"];
                y ? a.push("rotate(90) scale(-1,1)") : c && a.push("rotate(" + c + " " + (n.getAttribute("x") || 0) + " " + (n.getAttribute("y") || 0) + ")");
                (h(p) || h(d)) && a.push("scale(" + M(p, 1) + " " + M(d, 1) + ")");
                a.length && n.setAttribute("transform", a.join(" "))
            },
            toFront: function () {
                var a = this.element;
                a.parentNode.appendChild(a);
                return this
            },
            align: function (a, b, p) {
                var v,
                    d, y, n, c = {};
                d = this.renderer;
                y = d.alignedObjects;
                var m, g;
                if (a) {
                    if (this.alignOptions = a, this.alignByTranslate = b, !p || w(p)) this.alignTo = v = p || "renderer", k(y, this), y.push(this), p = null
                } else a = this.alignOptions, b = this.alignByTranslate, v = this.alignTo;
                p = M(p, d[v], d);
                v = a.align;
                d = a.verticalAlign;
                y = (p.x || 0) + (a.x || 0);
                n = (p.y || 0) + (a.y || 0);
                "right" === v ? m = 1 : "center" === v && (m = 2);
                m && (y += (p.width - (a.width || 0)) / m);
                c[b ? "translateX" : "x"] = Math.round(y);
                "bottom" === d ? g = 1 : "middle" === d && (g = 2);
                g && (n += (p.height - (a.height || 0)) / g);
                c[b ?
                    "translateY" : "y"] = Math.round(n);
                this[this.placed ? "animate" : "attr"](c);
                this.placed = !0;
                this.alignAttr = c;
                return this
            },
            getBBox: function (a, p) {
                var v, d = this.renderer,
                    y, c = this.element,
                    n = this.styles,
                    m, k = this.textStr,
                    E, I = d.cache,
                    Q = d.cacheKeys,
                    F;
                p = M(p, this.rotation);
                y = p * g;
                m = n && n.fontSize;
                void 0 !== k && (F = k.toString(), -1 === F.indexOf("\x3c") && (F = F.replace(/[0-9]/g, "0")), F += ["", p || 0, m, n && n.width, n && n.textOverflow].join());
                F && !a && (v = I[F]);
                if (!v) {
                    if (c.namespaceURI === this.SVG_NS || d.forExport) {
                        try {
                            (E = this.fakeTS && function (a) {
                                u(c.querySelectorAll(".highcharts-text-outline"),
                                    function (v) {
                                        v.style.display = a
                                    })
                            }) && E("none"), v = c.getBBox ? b({}, c.getBBox()) : {
                                width: c.offsetWidth,
                                height: c.offsetHeight
                            }, E && E("")
                        } catch (V) {}
                        if (!v || 0 > v.width) v = {
                            width: 0,
                            height: 0
                        }
                    } else v = this.htmlGetBBox();
                    d.isSVG && (a = v.width, d = v.height, n && "11px" === n.fontSize && 17 === Math.round(d) && (v.height = d = 14), p && (v.width = Math.abs(d * Math.sin(y)) + Math.abs(a * Math.cos(y)), v.height = Math.abs(d * Math.cos(y)) + Math.abs(a * Math.sin(y))));
                    if (F && 0 < v.height) {
                        for (; 250 < Q.length;) delete I[Q.shift()];
                        I[F] || Q.push(F);
                        I[F] = v
                    }
                }
                return v
            },
            show: function (a) {
                return this.attr({
                    visibility: a ? "inherit" : "visible"
                })
            },
            hide: function () {
                return this.attr({
                    visibility: "hidden"
                })
            },
            fadeOut: function (a) {
                var v = this;
                v.animate({
                    opacity: 0
                }, {
                    duration: a || 150,
                    complete: function () {
                        v.attr({
                            y: -9999
                        })
                    }
                })
            },
            add: function (a) {
                var v = this.renderer,
                    b = this.element,
                    p;
                a && (this.parentGroup = a);
                this.parentInverted = a && a.inverted;
                void 0 !== this.textStr && v.buildText(this);
                this.added = !0;
                if (!a || a.handleZ || this.zIndex) p = this.zIndexSetter();
                p || (a ? a.element : v.box).appendChild(b);
                if (this.onAdd) this.onAdd();
                return this
            },
            safeRemoveChild: function (a) {
                var v = a.parentNode;
                v && v.removeChild(a)
            },
            destroy: function () {
                var a = this,
                    b = a.element || {},
                    p = a.renderer.isSVG && "SPAN" === b.nodeName && a.parentGroup,
                    d = b.ownerSVGElement;
                b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
                O(a);
                a.clipPath && d && (u(d.querySelectorAll("[clip-path]"), function (b) {
                    -1 < b.getAttribute("clip-path").indexOf(a.clipPath.element.id + ")") && b.removeAttribute("clip-path")
                }), a.clipPath = a.clipPath.destroy());
                if (a.stops) {
                    for (d = 0; d < a.stops.length; d++) a.stops[d] =
                        a.stops[d].destroy();
                    a.stops = null
                }
                a.safeRemoveChild(b);
                for (a.destroyShadows(); p && p.div && 0 === p.div.childNodes.length;) b = p.parentGroup, a.safeRemoveChild(p.div), delete p.div, p = b;
                a.alignTo && k(a.renderer.alignedObjects, a);
                G(a, function (b, v) {
                    delete a[v]
                });
                return null
            },
            shadow: function (a, b, p) {
                var v = [],
                    d, y, n = this.element,
                    c, m, k, g;
                if (!a) this.destroyShadows();
                else if (!this.shadows) {
                    m = M(a.width, 3);
                    k = (a.opacity || .15) / m;
                    g = this.parentInverted ? "(-1,-1)" : "(" + M(a.offsetX, 1) + ", " + M(a.offsetY, 1) + ")";
                    for (d = 1; d <= m; d++) y =
                        n.cloneNode(0), c = 2 * m + 1 - 2 * d, f(y, {
                            isShadow: "true",
                            stroke: a.color || "#000000",
                            "stroke-opacity": k * d,
                            "stroke-width": c,
                            transform: "translate" + g,
                            fill: "none"
                        }), p && (f(y, "height", Math.max(f(y, "height") - c, 0)), y.cutHeight = c), b ? b.element.appendChild(y) : n.parentNode.insertBefore(y, n), v.push(y);
                    this.shadows = v
                }
                return this
            },
            destroyShadows: function () {
                u(this.shadows || [], function (a) {
                    this.safeRemoveChild(a)
                }, this);
                this.shadows = void 0
            },
            xGetter: function (a) {
                "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));
                return this._defaultGetter(a)
            },
            _defaultGetter: function (a) {
                a = M(this[a], this.element ? this.element.getAttribute(a) : null, 0);
                /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
                return a
            },
            dSetter: function (a, b, p) {
                a && a.join && (a = a.join(" "));
                /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
                p.setAttribute(b, a);
                this[b] = a
            },
            dashstyleSetter: function (a) {
                var b, v = this["stroke-width"];
                "inherit" === v && (v = 1);
                if (a = a && a.toLowerCase()) {
                    a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash",
                        "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                    for (b = a.length; b--;) a[b] = p(a[b]) * v;
                    a = a.join(",").replace(/NaN/g, "none");
                    this.element.setAttribute("stroke-dasharray", a)
                }
            },
            alignSetter: function (a) {
                this.element.setAttribute("text-anchor", {
                    left: "start",
                    center: "middle",
                    right: "end"
                }[a])
            },
            opacitySetter: function (a, b, p) {
                this[b] = a;
                p.setAttribute(b, a)
            },
            titleSetter: function (a) {
                var b = this.element.getElementsByTagName("title")[0];
                b || (b = l.createElementNS(this.SVG_NS,
                    "title"), this.element.appendChild(b));
                b.firstChild && b.removeChild(b.firstChild);
                b.appendChild(l.createTextNode(String(M(a), "").replace(/<[^>]*>/g, "")))
            },
            textSetter: function (a) {
                a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this))
            },
            fillSetter: function (a, b, p) {
                "string" === typeof a ? p.setAttribute(b, a) : a && this.colorGradient(a, b, p)
            },
            visibilitySetter: function (a, b, p) {
                "inherit" === a ? p.removeAttribute(b) : p.setAttribute(b, a)
            },
            zIndexSetter: function (a, b) {
                var d = this.renderer,
                    v = this.parentGroup,
                    y = (v || d).element || d.box,
                    n, c = this.element,
                    m;
                n = this.added;
                var k;
                h(a) && (c.zIndex = a, a = +a, this[b] === a && (n = !1), this[b] = a);
                if (n) {
                    (a = this.zIndex) && v && (v.handleZ = !0);
                    b = y.childNodes;
                    for (k = 0; k < b.length && !m; k++) v = b[k], n = v.zIndex, v !== c && (p(n) > a || !h(a) && h(n) || 0 > a && !h(n) && y !== d.box) && (y.insertBefore(c, v), m = !0);
                    m || y.appendChild(c)
                }
                return m
            },
            _defaultSetter: function (a, b, p) {
                p.setAttribute(b, a)
            }
        };
        z.prototype.yGetter = z.prototype.xGetter;
        z.prototype.translateXSetter = z.prototype.translateYSetter = z.prototype.rotationSetter =
            z.prototype.verticalAlignSetter = z.prototype.scaleXSetter = z.prototype.scaleYSetter = function (a, b) {
                this[b] = a;
                this.doTransform = !0
            };
        z.prototype["stroke-widthSetter"] = z.prototype.strokeSetter = function (a, b, p) {
            this[b] = a;
            this.stroke && this["stroke-width"] ? (z.prototype.fillSetter.call(this, this.stroke, "stroke", p), p.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke && (p.removeAttribute("stroke"), this.hasStroke = !1)
        };
        B = a.SVGRenderer = function () {
            this.init.apply(this,
                arguments)
        };
        B.prototype = {
            Element: z,
            SVG_NS: N,
            init: function (a, b, p, d, y, c) {
                var v;
                d = this.createElement("svg").attr({
                    version: "1.1",
                    "class": "highcharts-root"
                }).css(this.getStyle(d));
                v = d.element;
                a.appendChild(v); - 1 === a.innerHTML.indexOf("xmlns") && f(v, "xmlns", this.SVG_NS);
                this.isSVG = !0;
                this.box = v;
                this.boxWrapper = d;
                this.alignedObjects = [];
                this.url = (n || L) && l.getElementsByTagName("base").length ? P.location.href.replace(/#.*?$/, "").replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
                this.createElement("desc").add().element.appendChild(l.createTextNode("Created with Highmaps 5.0.11"));
                this.defs = this.createElement("defs").add();
                this.allowHTML = c;
                this.forExport = y;
                this.gradients = {};
                this.cache = {};
                this.cacheKeys = [];
                this.imgCount = 0;
                this.setSize(b, p, !1);
                var m;
                n && a.getBoundingClientRect && (b = function () {
                    r(a, {
                        left: 0,
                        top: 0
                    });
                    m = a.getBoundingClientRect();
                    r(a, {
                        left: Math.ceil(m.left) - m.left + "px",
                        top: Math.ceil(m.top) - m.top + "px"
                    })
                }, b(), this.unSubPixelFix = C(P, "resize", b))
            },
            getStyle: function (a) {
                return this.style = b({
                        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                        fontSize: "12px"
                    },
                    a)
            },
            setStyle: function (a) {
                this.boxWrapper.css(this.getStyle(a))
            },
            isHidden: function () {
                return !this.boxWrapper.getBBox().width
            },
            destroy: function () {
                var a = this.defs;
                this.box = null;
                this.boxWrapper = this.boxWrapper.destroy();
                x(this.gradients || {});
                this.gradients = null;
                a && (this.defs = a.destroy());
                this.unSubPixelFix && this.unSubPixelFix();
                return this.alignedObjects = null
            },
            createElement: function (a) {
                var b = new this.Element;
                b.init(this, a);
                return b
            },
            draw: K,
            getRadialAttr: function (a, b) {
                return {
                    cx: a[0] - a[2] / 2 + b.cx * a[2],
                    cy: a[1] -
                        a[2] / 2 + b.cy * a[2],
                    r: b.r * a[2]
                }
            },
            getSpanWidth: function (a, b) {
                var p = a.getBBox(!0).width;
                !F && this.forExport && (p = this.measureSpanWidth(b.firstChild.data, a.styles));
                return p
            },
            applyEllipsis: function (a, b, p, d) {
                var v = this.getSpanWidth(a, b),
                    y = v > d,
                    v = p,
                    n, c = 0,
                    m = p.length,
                    k = function (a) {
                        b.removeChild(b.firstChild);
                        a && b.appendChild(l.createTextNode(a))
                    };
                if (y) {
                    for (; c <= m;) n = Math.ceil((c + m) / 2), v = p.substring(0, n) + "\u2026", k(v), v = this.getSpanWidth(a, b), c === m ? c = m + 1 : v > d ? m = n - 1 : c = n;
                    0 === m && k("")
                }
                return y
            },
            buildText: function (a) {
                var b =
                    a.element,
                    y = this,
                    n = y.forExport,
                    c = M(a.textStr, "").toString(),
                    v = -1 !== c.indexOf("\x3c"),
                    m = b.childNodes,
                    k, g, E, I, e = f(b, "x"),
                    w = a.styles,
                    h = a.textWidth,
                    G = w && w.lineHeight,
                    x = w && w.textOutline,
                    K = w && "ellipsis" === w.textOverflow,
                    D = w && "nowrap" === w.whiteSpace,
                    O = w && w.fontSize,
                    q, H, L = m.length,
                    w = h && !a.added && this.box,
                    t = function (a) {
                        var d;
                        d = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : O || y.style.fontSize || 12;
                        return G ? p(G) : y.fontMetrics(d, a.getAttribute("style") ? a : b).h
                    };
                q = [c, K, D, G, x, O, h].join();
                if (q !== a.textCache) {
                    for (a.textCache =
                        q; L--;) b.removeChild(m[L]);
                    v || x || K || h || -1 !== c.indexOf(" ") ? (k = /<.*class="([^"]+)".*>/, g = /<.*style="([^"]+)".*>/, E = /<.*href="(http[^"]+)".*>/, w && w.appendChild(b), c = v ? c.replace(/<(b|strong)>/g, '\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g, '\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g, "\x3cspan").replace(/<\/(b|strong|i|em|a)>/g, "\x3c/span\x3e").split(/<br.*?>/g) : [c], c = d(c, function (a) {
                        return "" !== a
                    }), u(c, function (p, d) {
                        var c, v = 0;
                        p = p.replace(/^\s+|\s+$/g, "").replace(/<span/g,
                            "|||\x3cspan").replace(/<\/span>/g, "\x3c/span\x3e|||");
                        c = p.split("|||");
                        u(c, function (p) {
                            if ("" !== p || 1 === c.length) {
                                var m = {},
                                    w = l.createElementNS(y.SVG_NS, "tspan"),
                                    u, G;
                                k.test(p) && (u = p.match(k)[1], f(w, "class", u));
                                g.test(p) && (G = p.match(g)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), f(w, "style", G));
                                E.test(p) && !n && (f(w, "onclick", 'location.href\x3d"' + p.match(E)[1] + '"'), r(w, {
                                    cursor: "pointer"
                                }));
                                p = (p.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e");
                                if (" " !== p) {
                                    w.appendChild(l.createTextNode(p));
                                    v ? m.dx = 0 : d && null !== e && (m.x = e);
                                    f(w, m);
                                    b.appendChild(w);
                                    !v && H && (!F && n && r(w, {
                                        display: "block"
                                    }), f(w, "dy", t(w)));
                                    if (h) {
                                        m = p.replace(/([^\^])-/g, "$1- ").split(" ");
                                        u = 1 < c.length || d || 1 < m.length && !D;
                                        var x = [],
                                            O, Q = t(w),
                                            q = a.rotation;
                                        for (K && (I = y.applyEllipsis(a, w, p, h)); !K && u && (m.length || x.length);) a.rotation = 0, O = y.getSpanWidth(a, w), p = O > h, void 0 === I && (I = p), p && 1 !== m.length ? (w.removeChild(w.firstChild), x.unshift(m.pop())) : (m = x, x = [], m.length && !D && (w = l.createElementNS(N, "tspan"), f(w, {
                                                dy: Q,
                                                x: e
                                            }), G && f(w, "style", G), b.appendChild(w)),
                                            O > h && (h = O)), m.length && w.appendChild(l.createTextNode(m.join(" ").replace(/- /g, "-")));
                                        a.rotation = q
                                    }
                                    v++
                                }
                            }
                        });
                        H = H || b.childNodes.length
                    }), I && a.attr("title", a.textStr), w && w.removeChild(b), x && a.applyTextOutline && a.applyTextOutline(x)) : b.appendChild(l.createTextNode(c.replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e")))
                }
            },
            getContrast: function (a) {
                a = t(a).rgba;
                return 510 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF"
            },
            button: function (a, p, d, y, c, n, k, g, E) {
                var v = this.label(a, p, d, E, null, null, null, null, "button"),
                    w = 0;
                v.attr(m({
                    padding: 8,
                    r: 2
                }, c));
                var F, u, e, l;
                c = m({
                    fill: "#f7f7f7",
                    stroke: "#cccccc",
                    "stroke-width": 1,
                    style: {
                        color: "#333333",
                        cursor: "pointer",
                        fontWeight: "normal"
                    }
                }, c);
                F = c.style;
                delete c.style;
                n = m(c, {
                    fill: "#e6e6e6"
                }, n);
                u = n.style;
                delete n.style;
                k = m(c, {
                    fill: "#e6ebf5",
                    style: {
                        color: "#000000",
                        fontWeight: "bold"
                    }
                }, k);
                e = k.style;
                delete k.style;
                g = m(c, {
                    style: {
                        color: "#cccccc"
                    }
                }, g);
                l = g.style;
                delete g.style;
                C(v.element, I ? "mouseover" : "mouseenter", function () {
                    3 !== w && v.setState(1)
                });
                C(v.element, I ? "mouseout" : "mouseleave", function () {
                    3 !== w && v.setState(w)
                });
                v.setState = function (a) {
                    1 !== a && (v.state = w = a);
                    v.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);
                    v.attr([c, n, k, g][a || 0]).css([F, u, e, l][a || 0])
                };
                v.attr(c).css(b({
                    cursor: "default"
                }, F));
                return v.on("click", function (a) {
                    3 !== w && y.call(v, a)
                })
            },
            crispLine: function (a, b) {
                a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - b % 2 / 2);
                a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + b % 2 / 2);
                return a
            },
            path: function (a) {
                var p = {
                    fill: "none"
                };
                H(a) ? p.d =
                    a : E(a) && b(p, a);
                return this.createElement("path").attr(p)
            },
            circle: function (a, b, p) {
                a = E(a) ? a : {
                    x: a,
                    y: b,
                    r: p
                };
                b = this.createElement("circle");
                b.xSetter = b.ySetter = function (a, b, p) {
                    p.setAttribute("c" + b, a)
                };
                return b.attr(a)
            },
            arc: function (a, b, p, d, c, y) {
                E(a) ? (d = a, b = d.y, p = d.r, a = d.x) : d = {
                    innerR: d,
                    start: c,
                    end: y
                };
                a = this.symbol("arc", a, b, p, p, d);
                a.r = p;
                return a
            },
            rect: function (a, b, p, d, c, y) {
                c = E(a) ? a.r : c;
                var n = this.createElement("rect");
                a = E(a) ? a : void 0 === a ? {} : {
                    x: a,
                    y: b,
                    width: Math.max(p, 0),
                    height: Math.max(d, 0)
                };
                void 0 !== y &&
                    (a.strokeWidth = y, a = n.crisp(a));
                a.fill = "none";
                c && (a.r = c);
                n.rSetter = function (a, b, p) {
                    f(p, {
                        rx: a,
                        ry: a
                    })
                };
                return n.attr(a)
            },
            setSize: function (a, b, p) {
                var d = this.alignedObjects,
                    c = d.length;
                this.width = a;
                this.height = b;
                for (this.boxWrapper.animate({
                        width: a,
                        height: b
                    }, {
                        step: function () {
                            this.attr({
                                viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                            })
                        },
                        duration: M(p, !0) ? void 0 : 0
                    }); c--;) d[c].align()
            },
            g: function (a) {
                var b = this.createElement("g");
                return a ? b.attr({
                    "class": "highcharts-" + a
                }) : b
            },
            image: function (a, p, d, c,
                y) {
                var n = {
                    preserveAspectRatio: "none"
                };
                1 < arguments.length && b(n, {
                    x: p,
                    y: d,
                    width: c,
                    height: y
                });
                n = this.createElement("image").attr(n);
                n.element.setAttributeNS ? n.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : n.element.setAttribute("hc-svg-href", a);
                return n
            },
            symbol: function (a, p, d, c, y, n) {
                var m = this,
                    v, k = /^url\((.*?)\)$/,
                    g = k.test(a),
                    E = !g && (this.symbols[a] ? a : "circle"),
                    w = E && this.symbols[E],
                    I = h(p) && w && w.call(this.symbols, Math.round(p), Math.round(d), c, y, n),
                    F, G;
                w ? (v = this.path(I), v.attr("fill", "none"),
                    b(v, {
                        symbolName: E,
                        x: p,
                        y: d,
                        width: c,
                        height: y
                    }), n && b(v, n)) : g && (F = a.match(k)[1], v = this.image(F), v.imgwidth = M(R[F] && R[F].width, n && n.width), v.imgheight = M(R[F] && R[F].height, n && n.height), G = function () {
                    v.attr({
                        width: v.width,
                        height: v.height
                    })
                }, u(["width", "height"], function (a) {
                    v[a + "Setter"] = function (a, b) {
                        var p = {},
                            d = this["img" + b],
                            c = "width" === b ? "translateX" : "translateY";
                        this[b] = a;
                        h(d) && (this.element && this.element.setAttribute(b, d), this.alignByTranslate || (p[c] = ((this[b] || 0) - d) / 2, this.attr(p)))
                    }
                }), h(p) && v.attr({
                    x: p,
                    y: d
                }), v.isImg = !0, h(v.imgwidth) && h(v.imgheight) ? G() : (v.attr({
                    width: 0,
                    height: 0
                }), q("img", {
                    onload: function () {
                        var a = e[m.chartIndex];
                        0 === this.width && (r(this, {
                            position: "absolute",
                            top: "-999em"
                        }), l.body.appendChild(this));
                        R[F] = {
                            width: this.width,
                            height: this.height
                        };
                        v.imgwidth = this.width;
                        v.imgheight = this.height;
                        v.element && G();
                        this.parentNode && this.parentNode.removeChild(this);
                        m.imgCount--;
                        if (!m.imgCount && a && a.onload) a.onload()
                    },
                    src: F
                }), this.imgCount++));
                return v
            },
            symbols: {
                circle: function (a, b, p, d) {
                    return this.arc(a +
                        p / 2, b + d / 2, p / 2, d / 2, {
                            start: 0,
                            end: 2 * Math.PI,
                            open: !1
                        })
                },
                square: function (a, b, p, d) {
                    return ["M", a, b, "L", a + p, b, a + p, b + d, a, b + d, "Z"]
                },
                triangle: function (a, b, p, d) {
                    return ["M", a + p / 2, b, "L", a + p, b + d, a, b + d, "Z"]
                },
                "triangle-down": function (a, b, p, d) {
                    return ["M", a, b, "L", a + p, b, a + p / 2, b + d, "Z"]
                },
                diamond: function (a, b, p, d) {
                    return ["M", a + p / 2, b, "L", a + p, b + d / 2, a + p / 2, b + d, a, b + d / 2, "Z"]
                },
                arc: function (a, b, p, d, c) {
                    var n = c.start,
                        y = c.r || p,
                        m = c.r || d || p,
                        v = c.end - .001;
                    p = c.innerR;
                    d = c.open;
                    var k = Math.cos(n),
                        g = Math.sin(n),
                        E = Math.cos(v),
                        v = Math.sin(v);
                    c = c.end - n < Math.PI ? 0 : 1;
                    y = ["M", a + y * k, b + m * g, "A", y, m, 0, c, 1, a + y * E, b + m * v];
                    h(p) && y.push(d ? "M" : "L", a + p * E, b + p * v, "A", p, p, 0, c, 0, a + p * k, b + p * g);
                    y.push(d ? "" : "Z");
                    return y
                },
                callout: function (a, b, p, d, c) {
                    var y = Math.min(c && c.r || 0, p, d),
                        n = y + 6,
                        m = c && c.anchorX;
                    c = c && c.anchorY;
                    var v;
                    v = ["M", a + y, b, "L", a + p - y, b, "C", a + p, b, a + p, b, a + p, b + y, "L", a + p, b + d - y, "C", a + p, b + d, a + p, b + d, a + p - y, b + d, "L", a + y, b + d, "C", a, b + d, a, b + d, a, b + d - y, "L", a, b + y, "C", a, b, a, b, a + y, b];
                    m && m > p ? c > b + n && c < b + d - n ? v.splice(13, 3, "L", a + p, c - 6, a + p + 6, c, a + p, c + 6, a + p, b + d - y) : v.splice(13,
                        3, "L", a + p, d / 2, m, c, a + p, d / 2, a + p, b + d - y) : m && 0 > m ? c > b + n && c < b + d - n ? v.splice(33, 3, "L", a, c + 6, a - 6, c, a, c - 6, a, b + y) : v.splice(33, 3, "L", a, d / 2, m, c, a, d / 2, a, b + y) : c && c > d && m > a + n && m < a + p - n ? v.splice(23, 3, "L", m + 6, b + d, m, b + d + 6, m - 6, b + d, a + y, b + d) : c && 0 > c && m > a + n && m < a + p - n && v.splice(3, 3, "L", m - 6, b, m, b - 6, m + 6, b, p - y, b);
                    return v
                }
            },
            clipRect: function (b, p, d, c) {
                var y = a.uniqueKey(),
                    n = this.createElement("clipPath").attr({
                        id: y
                    }).add(this.defs);
                b = this.rect(b, p, d, c, 0).add(n);
                b.id = y;
                b.clipPath = n;
                b.count = 0;
                return b
            },
            text: function (a, b, p, d) {
                var c = !F && this.forExport,
                    y = {};
                if (d && (this.allowHTML || !this.forExport)) return this.html(a, b, p);
                y.x = Math.round(b || 0);
                p && (y.y = Math.round(p));
                if (a || 0 === a) y.text = a;
                a = this.createElement("text").attr(y);
                c && a.css({
                    position: "absolute"
                });
                d || (a.xSetter = function (a, b, p) {
                    var d = p.getElementsByTagName("tspan"),
                        c, y = p.getAttribute(b),
                        n;
                    for (n = 0; n < d.length; n++) c = d[n], c.getAttribute(b) === y && c.setAttribute(b, a);
                    p.setAttribute(b, a)
                });
                return a
            },
            fontMetrics: function (a, b) {
                a = a || b && b.style && b.style.fontSize || this.style && this.style.fontSize;
                a = /px/.test(a) ? p(a) : /em/.test(a) ? parseFloat(a) * (b ? this.fontMetrics(null, b.parentNode).f : 16) : 12;
                b = 24 > a ? a + 3 : Math.round(1.2 * a);
                return {
                    h: b,
                    b: Math.round(.8 * b),
                    f: a
                }
            },
            rotCorr: function (a, b, p) {
                var d = a;
                b && p && (d = Math.max(d * Math.cos(b * g), 4));
                return {
                    x: -a / 3 * Math.sin(b * g),
                    y: d
                }
            },
            label: function (p, d, c, n, k, g, E, w, I) {
                var v = this,
                    F = v.g("button" !== I && "label"),
                    e = F.text = v.text("", 0, 0, E).attr({
                        zIndex: 1
                    }),
                    l, G, f = 0,
                    x = 3,
                    K = 0,
                    D, O, r, q, H, N = {},
                    M, L, t = /^url\((.*?)\)$/.test(n),
                    Q = t,
                    R, U, T, P;
                I && F.addClass("highcharts-" + I);
                Q = t;
                R = function () {
                    return (M ||
                        0) % 2 / 2
                };
                U = function () {
                    var a = e.element.style,
                        p = {};
                    G = (void 0 === D || void 0 === O || H) && h(e.textStr) && e.getBBox();
                    F.width = (D || G.width || 0) + 2 * x + K;
                    F.height = (O || G.height || 0) + 2 * x;
                    L = x + v.fontMetrics(a && a.fontSize, e).b;
                    Q && (l || (F.box = l = v.symbols[n] || t ? v.symbol(n) : v.rect(), l.addClass(("button" === I ? "" : "highcharts-label-box") + (I ? " highcharts-" + I + "-box" : "")), l.add(F), a = R(), p.x = a, p.y = (w ? -L : 0) + a), p.width = Math.round(F.width), p.height = Math.round(F.height), l.attr(b(p, N)), N = {})
                };
                T = function () {
                    var a = K + x,
                        b;
                    b = w ? 0 : L;
                    h(D) && G && ("center" ===
                        H || "right" === H) && (a += {
                        center: .5,
                        right: 1
                    }[H] * (D - G.width));
                    if (a !== e.x || b !== e.y) e.attr("x", a), void 0 !== b && e.attr("y", b);
                    e.x = a;
                    e.y = b
                };
                P = function (a, b) {
                    l ? l.attr(a, b) : N[a] = b
                };
                F.onAdd = function () {
                    e.add(F);
                    F.attr({
                        text: p || 0 === p ? p : "",
                        x: d,
                        y: c
                    });
                    l && h(k) && F.attr({
                        anchorX: k,
                        anchorY: g
                    })
                };
                F.widthSetter = function (b) {
                    D = a.isNumber(b) ? b : null
                };
                F.heightSetter = function (a) {
                    O = a
                };
                F["text-alignSetter"] = function (a) {
                    H = a
                };
                F.paddingSetter = function (a) {
                    h(a) && a !== x && (x = F.padding = a, T())
                };
                F.paddingLeftSetter = function (a) {
                    h(a) && a !== K &&
                        (K = a, T())
                };
                F.alignSetter = function (a) {
                    a = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[a];
                    a !== f && (f = a, G && F.attr({
                        x: r
                    }))
                };
                F.textSetter = function (a) {
                    void 0 !== a && e.textSetter(a);
                    U();
                    T()
                };
                F["stroke-widthSetter"] = function (a, b) {
                    a && (Q = !0);
                    M = this["stroke-width"] = a;
                    P(b, a)
                };
                F.strokeSetter = F.fillSetter = F.rSetter = function (a, b) {
                    "fill" === b && a && (Q = !0);
                    P(b, a)
                };
                F.anchorXSetter = function (a, b) {
                    k = F.anchorX = a;
                    P(b, Math.round(a) - R() - r)
                };
                F.anchorYSetter = function (a, b) {
                    g = F.anchorY = a;
                    P(b, a - q)
                };
                F.xSetter = function (a) {
                    F.x = a;
                    f && (a -= f * ((D || G.width) + 2 *
                        x));
                    r = Math.round(a);
                    F.attr("translateX", r)
                };
                F.ySetter = function (a) {
                    q = F.y = Math.round(a);
                    F.attr("translateY", q)
                };
                var A = F.css;
                return b(F, {
                    css: function (a) {
                        if (a) {
                            var b = {};
                            a = m(a);
                            u(F.textProps, function (p) {
                                void 0 !== a[p] && (b[p] = a[p], delete a[p])
                            });
                            e.css(b)
                        }
                        return A.call(F, a)
                    },
                    getBBox: function () {
                        return {
                            width: G.width + 2 * x,
                            height: G.height + 2 * x,
                            x: G.x - x,
                            y: G.y - x
                        }
                    },
                    shadow: function (a) {
                        a && (U(), l && l.shadow(a));
                        return F
                    },
                    destroy: function () {
                        y(F.element, "mouseenter");
                        y(F.element, "mouseleave");
                        e && (e = e.destroy());
                        l && (l = l.destroy());
                        z.prototype.destroy.call(F);
                        F = v = U = T = P = null
                    }
                })
            }
        };
        a.Renderer = B
    })(J);
    (function (a) {
        var z = a.attr,
            B = a.createElement,
            C = a.css,
            A = a.defined,
            f = a.each,
            e = a.extend,
            t = a.isFirefox,
            r = a.isMS,
            q = a.isWebKit,
            h = a.pInt,
            g = a.SVGRenderer,
            x = a.win,
            l = a.wrap;
        e(a.SVGElement.prototype, {
            htmlCss: function (a) {
                var b = this.element;
                if (b = a && "SPAN" === b.tagName && a.width) delete a.width, this.textWidth = b, this.updateTransform();
                a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden");
                this.styles = e(this.styles, a);
                C(this.element,
                    a);
                return this
            },
            htmlGetBBox: function () {
                var a = this.element;
                "text" === a.nodeName && (a.style.position = "absolute");
                return {
                    x: a.offsetLeft,
                    y: a.offsetTop,
                    width: a.offsetWidth,
                    height: a.offsetHeight
                }
            },
            htmlUpdateTransform: function () {
                if (this.added) {
                    var a = this.renderer,
                        b = this.element,
                        k = this.translateX || 0,
                        d = this.translateY || 0,
                        c = this.x || 0,
                        g = this.y || 0,
                        e = this.textAlign || "left",
                        n = {
                            left: 0,
                            center: .5,
                            right: 1
                        }[e],
                        I = this.styles;
                    C(b, {
                        marginLeft: k,
                        marginTop: d
                    });
                    this.shadows && f(this.shadows, function (a) {
                        C(a, {
                            marginLeft: k + 1,
                            marginTop: d +
                                1
                        })
                    });
                    this.inverted && f(b.childNodes, function (d) {
                        a.invertChild(d, b)
                    });
                    if ("SPAN" === b.tagName) {
                        var E = this.rotation,
                            w = h(this.textWidth),
                            l = I && I.whiteSpace,
                            m = [E, e, b.innerHTML, this.textWidth, this.textAlign].join();
                        m !== this.cTT && (I = a.fontMetrics(b.style.fontSize).b, A(E) && this.setSpanRotation(E, n, I), C(b, {
                            width: "",
                            whiteSpace: l || "nowrap"
                        }), b.offsetWidth > w && /[ \-]/.test(b.textContent || b.innerText) && C(b, {
                            width: w + "px",
                            display: "block",
                            whiteSpace: l || "normal"
                        }), this.getSpanCorrection(b.offsetWidth, I, n, E, e));
                        C(b, {
                            left: c +
                                (this.xCorr || 0) + "px",
                            top: g + (this.yCorr || 0) + "px"
                        });
                        q && (I = b.offsetHeight);
                        this.cTT = m
                    }
                } else this.alignOnAdd = !0
            },
            setSpanRotation: function (a, b, k) {
                var d = {},
                    c = r ? "-ms-transform" : q ? "-webkit-transform" : t ? "MozTransform" : x.opera ? "-o-transform" : "";
                d[c] = d.transform = "rotate(" + a + "deg)";
                d[c + (t ? "Origin" : "-origin")] = d.transformOrigin = 100 * b + "% " + k + "px";
                C(this.element, d)
            },
            getSpanCorrection: function (a, b, k) {
                this.xCorr = -a * k;
                this.yCorr = -b
            }
        });
        e(g.prototype, {
            html: function (a, b, k) {
                var d = this.createElement("span"),
                    c = d.element,
                    g = d.renderer,
                    h = g.isSVG,
                    n = function (a, b) {
                        f(["opacity", "visibility"], function (d) {
                            l(a, d + "Setter", function (a, d, c, n) {
                                a.call(this, d, c, n);
                                b[c] = d
                            })
                        })
                    };
                d.textSetter = function (a) {
                    a !== c.innerHTML && delete this.bBox;
                    c.innerHTML = this.textStr = a;
                    d.htmlUpdateTransform()
                };
                h && n(d, d.element.style);
                d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function (a, b) {
                    "align" === b && (b = "textAlign");
                    d[b] = a;
                    d.htmlUpdateTransform()
                };
                d.attr({
                    text: a,
                    x: Math.round(b),
                    y: Math.round(k)
                }).css({
                    fontFamily: this.style.fontFamily,
                    fontSize: this.style.fontSize,
                    position: "absolute"
                });
                c.style.whiteSpace = "nowrap";
                d.css = d.htmlCss;
                h && (d.add = function (a) {
                    var b, k = g.box.parentNode,
                        I = [];
                    if (this.parentGroup = a) {
                        if (b = a.div, !b) {
                            for (; a;) I.push(a), a = a.parentGroup;
                            f(I.reverse(), function (a) {
                                var c, m = z(a.element, "class");
                                m && (m = {
                                    className: m
                                });
                                b = a.div = a.div || B("div", m, {
                                    position: "absolute",
                                    left: (a.translateX || 0) + "px",
                                    top: (a.translateY || 0) + "px",
                                    display: a.display,
                                    opacity: a.opacity,
                                    pointerEvents: a.styles && a.styles.pointerEvents
                                }, b || k);
                                c = b.style;
                                e(a, {
                                    on: function () {
                                        d.on.apply({
                                                element: I[0].div
                                            },
                                            arguments);
                                        return a
                                    },
                                    translateXSetter: function (b, p) {
                                        c.left = b + "px";
                                        a[p] = b;
                                        a.doTransform = !0
                                    },
                                    translateYSetter: function (b, p) {
                                        c.top = b + "px";
                                        a[p] = b;
                                        a.doTransform = !0
                                    }
                                });
                                n(a, c)
                            })
                        }
                    } else b = k;
                    b.appendChild(c);
                    d.added = !0;
                    d.alignOnAdd && d.htmlUpdateTransform();
                    return d
                });
                return d
            }
        })
    })(J);
    (function (a) {
        var z, B, C = a.createElement,
            A = a.css,
            f = a.defined,
            e = a.deg2rad,
            t = a.discardElement,
            r = a.doc,
            q = a.each,
            h = a.erase,
            g = a.extend;
        z = a.extendClass;
        var x = a.isArray,
            l = a.isNumber,
            u = a.isObject,
            b = a.merge;
        B = a.noop;
        var k = a.pick,
            d = a.pInt,
            c = a.SVGElement,
            D = a.SVGRenderer,
            H = a.win;
        a.svg || (B = {
            docMode8: r && 8 === r.documentMode,
            init: function (a, b) {
                var d = ["\x3c", b, ' filled\x3d"f" stroked\x3d"f"'],
                    c = ["position: ", "absolute", ";"],
                    n = "div" === b;
                ("shape" === b || n) && c.push("left:0;top:0;width:1px;height:1px;");
                c.push("visibility: ", n ? "hidden" : "visible");
                d.push(' style\x3d"', c.join(""), '"/\x3e');
                b && (d = n || "span" === b || "img" === b ? d.join("") : a.prepVML(d), this.element = C(d));
                this.renderer = a
            },
            add: function (a) {
                var b = this.renderer,
                    d = this.element,
                    c = b.box,
                    n = a && a.inverted,
                    c = a ? a.element || a : c;
                a && (this.parentGroup = a);
                n && b.invertChild(d, c);
                c.appendChild(d);
                this.added = !0;
                this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
                if (this.onAdd) this.onAdd();
                this.className && this.attr("class", this.className);
                return this
            },
            updateTransform: c.prototype.htmlUpdateTransform,
            setSpanRotation: function () {
                var a = this.rotation,
                    b = Math.cos(a * e),
                    d = Math.sin(a * e);
                A(this.element, {
                    filter: a ? ["progid:DXImageTransform.Microsoft.Matrix(M11\x3d", b, ", M12\x3d", -d, ", M21\x3d", d, ", M22\x3d",
                        b, ", sizingMethod\x3d'auto expand')"
                    ].join("") : "none"
                })
            },
            getSpanCorrection: function (a, b, d, c, g) {
                var n = c ? Math.cos(c * e) : 1,
                    E = c ? Math.sin(c * e) : 0,
                    w = k(this.elemHeight, this.element.offsetHeight),
                    l;
                this.xCorr = 0 > n && -a;
                this.yCorr = 0 > E && -w;
                l = 0 > n * E;
                this.xCorr += E * b * (l ? 1 - d : d);
                this.yCorr -= n * b * (c ? l ? d : 1 - d : 1);
                g && "left" !== g && (this.xCorr -= a * d * (0 > n ? -1 : 1), c && (this.yCorr -= w * d * (0 > E ? -1 : 1)), A(this.element, {
                    textAlign: g
                }))
            },
            pathToVML: function (a) {
                for (var b = a.length, d = []; b--;) l(a[b]) ? d[b] = Math.round(10 * a[b]) - 5 : "Z" === a[b] ? d[b] = "x" :
                    (d[b] = a[b], !a.isArc || "wa" !== a[b] && "at" !== a[b] || (d[b + 5] === d[b + 7] && (d[b + 7] += a[b + 7] > a[b + 5] ? 1 : -1), d[b + 6] === d[b + 8] && (d[b + 8] += a[b + 8] > a[b + 6] ? 1 : -1)));
                return d.join(" ") || "x"
            },
            clip: function (a) {
                var b = this,
                    d;
                a ? (d = a.members, h(d, b), d.push(b), b.destroyClip = function () {
                    h(d, b)
                }, a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = {
                    clip: b.docMode8 ? "inherit" : "rect(auto)"
                });
                return b.css(a)
            },
            css: c.prototype.htmlCss,
            safeRemoveChild: function (a) {
                a.parentNode && t(a)
            },
            destroy: function () {
                this.destroyClip && this.destroyClip();
                return c.prototype.destroy.apply(this)
            },
            on: function (a, b) {
                this.element["on" + a] = function () {
                    var a = H.event;
                    a.target = a.srcElement;
                    b(a)
                };
                return this
            },
            cutOffPath: function (a, b) {
                var c;
                a = a.split(/[ ,]/);
                c = a.length;
                if (9 === c || 11 === c) a[c - 4] = a[c - 2] = d(a[c - 2]) - 10 * b;
                return a.join(" ")
            },
            shadow: function (a, b, c) {
                var n = [],
                    g, m = this.element,
                    e = this.renderer,
                    E, l = m.style,
                    p, y = m.path,
                    h, F, f, x;
                y && "string" !== typeof y.value && (y = "x");
                F = y;
                if (a) {
                    f = k(a.width, 3);
                    x = (a.opacity || .15) / f;
                    for (g = 1; 3 >= g; g++) h = 2 * f + 1 - 2 * g, c && (F = this.cutOffPath(y.value, h + .5)), p = ['\x3cshape isShadow\x3d"true" strokeweight\x3d"',
                        h, '" filled\x3d"false" path\x3d"', F, '" coordsize\x3d"10 10" style\x3d"', m.style.cssText, '" /\x3e'
                    ], E = C(e.prepVML(p), null, {
                        left: d(l.left) + k(a.offsetX, 1),
                        top: d(l.top) + k(a.offsetY, 1)
                    }), c && (E.cutOff = h + 1), p = ['\x3cstroke color\x3d"', a.color || "#000000", '" opacity\x3d"', x * g, '"/\x3e'], C(e.prepVML(p), null, null, E), b ? b.element.appendChild(E) : m.parentNode.insertBefore(E, m), n.push(E);
                    this.shadows = n
                }
                return this
            },
            updateShadows: B,
            setAttr: function (a, b) {
                this.docMode8 ? this.element[a] = b : this.element.setAttribute(a, b)
            },
            classSetter: function (a) {
                (this.added ? this.element : this).className = a
            },
            dashstyleSetter: function (a, b, d) {
                (d.getElementsByTagName("stroke")[0] || C(this.renderer.prepVML(["\x3cstroke/\x3e"]), null, null, d))[b] = a || "solid";
                this[b] = a
            },
            dSetter: function (a, b, d) {
                var c = this.shadows;
                a = a || [];
                this.d = a.join && a.join(" ");
                d.path = a = this.pathToVML(a);
                if (c)
                    for (d = c.length; d--;) c[d].path = c[d].cutOff ? this.cutOffPath(a, c[d].cutOff) : a;
                this.setAttr(b, a)
            },
            fillSetter: function (a, b, d) {
                var c = d.nodeName;
                "SPAN" === c ? d.style.color = a : "IMG" !==
                    c && (d.filled = "none" !== a, this.setAttr("fillcolor", this.renderer.color(a, d, b, this)))
            },
            "fill-opacitySetter": function (a, b, d) {
                C(this.renderer.prepVML(["\x3c", b.split("-")[0], ' opacity\x3d"', a, '"/\x3e']), null, null, d)
            },
            opacitySetter: B,
            rotationSetter: function (a, b, d) {
                d = d.style;
                this[b] = d[b] = a;
                d.left = -Math.round(Math.sin(a * e) + 1) + "px";
                d.top = Math.round(Math.cos(a * e)) + "px"
            },
            strokeSetter: function (a, b, d) {
                this.setAttr("strokecolor", this.renderer.color(a, d, b, this))
            },
            "stroke-widthSetter": function (a, b, d) {
                d.stroked = !!a;
                this[b] = a;
                l(a) && (a += "px");
                this.setAttr("strokeweight", a)
            },
            titleSetter: function (a, b) {
                this.setAttr(b, a)
            },
            visibilitySetter: function (a, b, d) {
                "inherit" === a && (a = "visible");
                this.shadows && q(this.shadows, function (d) {
                    d.style[b] = a
                });
                "DIV" === d.nodeName && (a = "hidden" === a ? "-999em" : 0, this.docMode8 || (d.style[b] = a ? "visible" : "hidden"), b = "top");
                d.style[b] = a
            },
            xSetter: function (a, b, d) {
                this[b] = a;
                "x" === b ? b = "left" : "y" === b && (b = "top");
                this.updateClipping ? (this[b] = a, this.updateClipping()) : d.style[b] = a
            },
            zIndexSetter: function (a,
                b, d) {
                d.style[b] = a
            }
        }, B["stroke-opacitySetter"] = B["fill-opacitySetter"], a.VMLElement = B = z(c, B), B.prototype.ySetter = B.prototype.widthSetter = B.prototype.heightSetter = B.prototype.xSetter, B = {
            Element: B,
            isIE8: -1 < H.navigator.userAgent.indexOf("MSIE 8.0"),
            init: function (a, b, d) {
                var c, n;
                this.alignedObjects = [];
                c = this.createElement("div").css({
                    position: "relative"
                });
                n = c.element;
                a.appendChild(c.element);
                this.isVML = !0;
                this.box = n;
                this.boxWrapper = c;
                this.gradients = {};
                this.cache = {};
                this.cacheKeys = [];
                this.imgCount = 0;
                this.setSize(b,
                    d, !1);
                if (!r.namespaces.hcv) {
                    r.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    try {
                        r.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    } catch (m) {
                        r.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                    }
                }
            },
            isHidden: function () {
                return !this.box.offsetWidth
            },
            clipRect: function (a, b, d, c) {
                var n = this.createElement(),
                    m = u(a);
                return g(n, {
                    members: [],
                    count: 0,
                    left: (m ? a.x : a) + 1,
                    top: (m ? a.y : b) + 1,
                    width: (m ? a.width : d) - 1,
                    height: (m ? a.height : c) - 1,
                    getCSS: function (a) {
                        var b = a.element,
                            d = b.nodeName,
                            p = a.inverted,
                            c = this.top - ("shape" === d ? b.offsetTop : 0),
                            m = this.left,
                            b = m + this.width,
                            n = c + this.height,
                            c = {
                                clip: "rect(" + Math.round(p ? m : c) + "px," + Math.round(p ? n : b) + "px," + Math.round(p ? b : n) + "px," + Math.round(p ? c : m) + "px)"
                            };
                        !p && a.docMode8 && "DIV" === d && g(c, {
                            width: b + "px",
                            height: n + "px"
                        });
                        return c
                    },
                    updateClipping: function () {
                        q(n.members, function (a) {
                            a.element && a.css(n.getCSS(a))
                        })
                    }
                })
            },
            color: function (b,
                d, c, k) {
                var n = this,
                    m, g = /^rgba/,
                    e, l, p = "none";
                b && b.linearGradient ? l = "gradient" : b && b.radialGradient && (l = "pattern");
                if (l) {
                    var y, h, F = b.linearGradient || b.radialGradient,
                        w, f, x, v, E, u = "";
                    b = b.stops;
                    var D, r = [],
                        I = function () {
                            e = ['\x3cfill colors\x3d"' + r.join(",") + '" opacity\x3d"', x, '" o:opacity2\x3d"', f, '" type\x3d"', l, '" ', u, 'focus\x3d"100%" method\x3d"any" /\x3e'];
                            C(n.prepVML(e), null, null, d)
                        };
                    w = b[0];
                    D = b[b.length - 1];
                    0 < w[0] && b.unshift([0, w[1]]);
                    1 > D[0] && b.push([1, D[1]]);
                    q(b, function (b, d) {
                        g.test(b[1]) ? (m = a.color(b[1]),
                            y = m.get("rgb"), h = m.get("a")) : (y = b[1], h = 1);
                        r.push(100 * b[0] + "% " + y);
                        d ? (x = h, v = y) : (f = h, E = y)
                    });
                    if ("fill" === c)
                        if ("gradient" === l) c = F.x1 || F[0] || 0, b = F.y1 || F[1] || 0, w = F.x2 || F[2] || 0, F = F.y2 || F[3] || 0, u = 'angle\x3d"' + (90 - 180 * Math.atan((F - b) / (w - c)) / Math.PI) + '"', I();
                        else {
                            var p = F.r,
                                H = 2 * p,
                                t = 2 * p,
                                A = F.cx,
                                z = F.cy,
                                B = d.radialReference,
                                J, p = function () {
                                    B && (J = k.getBBox(), A += (B[0] - J.x) / J.width - .5, z += (B[1] - J.y) / J.height - .5, H *= B[2] / J.width, t *= B[2] / J.height);
                                    u = 'src\x3d"' + a.getOptions().global.VMLRadialGradientURL + '" size\x3d"' + H + "," +
                                        t + '" origin\x3d"0.5,0.5" position\x3d"' + A + "," + z + '" color2\x3d"' + E + '" ';
                                    I()
                                };
                            k.added ? p() : k.onAdd = p;
                            p = v
                        }
                    else p = y
                } else g.test(b) && "IMG" !== d.tagName ? (m = a.color(b), k[c + "-opacitySetter"](m.get("a"), c, d), p = m.get("rgb")) : (p = d.getElementsByTagName(c), p.length && (p[0].opacity = 1, p[0].type = "solid"), p = b);
                return p
            },
            prepVML: function (a) {
                var b = this.isIE8;
                a = a.join("");
                b ? (a = a.replace("/\x3e", ' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'), a = -1 === a.indexOf('style\x3d"') ? a.replace("/\x3e", ' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e') :
                    a.replace('style\x3d"', 'style\x3d"display:inline-block;behavior:url(#default#VML);')) : a = a.replace("\x3c", "\x3chcv:");
                return a
            },
            text: D.prototype.html,
            path: function (a) {
                var b = {
                    coordsize: "10 10"
                };
                x(a) ? b.d = a : u(a) && g(b, a);
                return this.createElement("shape").attr(b)
            },
            circle: function (a, b, d) {
                var c = this.symbol("circle");
                u(a) && (d = a.r, b = a.y, a = a.x);
                c.isCircle = !0;
                c.r = d;
                return c.attr({
                    x: a,
                    y: b
                })
            },
            g: function (a) {
                var b;
                a && (b = {
                    className: "highcharts-" + a,
                    "class": "highcharts-" + a
                });
                return this.createElement("div").attr(b)
            },
            image: function (a, b, d, c, k) {
                var m = this.createElement("img").attr({
                    src: a
                });
                1 < arguments.length && m.attr({
                    x: b,
                    y: d,
                    width: c,
                    height: k
                });
                return m
            },
            createElement: function (a) {
                return "rect" === a ? this.symbol(a) : D.prototype.createElement.call(this, a)
            },
            invertChild: function (a, b) {
                var c = this;
                b = b.style;
                var k = "IMG" === a.tagName && a.style;
                A(a, {
                    flip: "x",
                    left: d(b.width) - (k ? d(k.top) : 1),
                    top: d(b.height) - (k ? d(k.left) : 1),
                    rotation: -90
                });
                q(a.childNodes, function (b) {
                    c.invertChild(b, a)
                })
            },
            symbols: {
                arc: function (a, b, d, c, k) {
                    var m = k.start,
                        g = k.end,
                        n = k.r || d || c;
                    d = k.innerR;
                    c = Math.cos(m);
                    var e = Math.sin(m),
                        p = Math.cos(g),
                        y = Math.sin(g);
                    if (0 === g - m) return ["x"];
                    m = ["wa", a - n, b - n, a + n, b + n, a + n * c, b + n * e, a + n * p, b + n * y];
                    k.open && !d && m.push("e", "M", a, b);
                    m.push("at", a - d, b - d, a + d, b + d, a + d * p, b + d * y, a + d * c, b + d * e, "x", "e");
                    m.isArc = !0;
                    return m
                },
                circle: function (a, b, d, c, k) {
                    k && f(k.r) && (d = c = 2 * k.r);
                    k && k.isCircle && (a -= d / 2, b -= c / 2);
                    return ["wa", a, b, a + d, b + c, a + d, b + c / 2, a + d, b + c / 2, "e"]
                },
                rect: function (a, b, d, c, k) {
                    return D.prototype.symbols[f(k) && k.r ? "callout" : "square"].call(0, a, b,
                        d, c, k)
                }
            }
        }, a.VMLRenderer = z = function () {
            this.init.apply(this, arguments)
        }, z.prototype = b(D.prototype, B), a.Renderer = z);
        D.prototype.measureSpanWidth = function (a, b) {
            var d = r.createElement("span");
            a = r.createTextNode(a);
            d.appendChild(a);
            A(d, b);
            this.box.appendChild(d);
            b = d.offsetWidth;
            t(d);
            return b
        }
    })(J);
    (function (a) {
        var z = a.correctFloat,
            B = a.defined,
            C = a.destroyObjectProperties,
            A = a.isNumber,
            f = a.merge,
            e = a.pick,
            t = a.deg2rad;
        a.Tick = function (a, e, h, g) {
            this.axis = a;
            this.pos = e;
            this.type = h || "";
            this.isNew = !0;
            h || g || this.addLabel()
        };
        a.Tick.prototype = {
            addLabel: function () {
                var a = this.axis,
                    q = a.options,
                    h = a.chart,
                    g = a.categories,
                    x = a.names,
                    l = this.pos,
                    u = q.labels,
                    b = a.tickPositions,
                    k = l === b[0],
                    d = l === b[b.length - 1],
                    x = g ? e(g[l], x[l], l) : l,
                    g = this.label,
                    b = b.info,
                    c;
                a.isDatetimeAxis && b && (c = q.dateTimeLabelFormats[b.higherRanks[l] || b.unitName]);
                this.isFirst = k;
                this.isLast = d;
                q = a.labelFormatter.call({
                    axis: a,
                    chart: h,
                    isFirst: k,
                    isLast: d,
                    dateTimeLabelFormat: c,
                    value: a.isLog ? z(a.lin2log(x)) : x
                });
                B(g) ? g && g.attr({
                    text: q
                }) : (this.labelLength = (this.label = g = B(q) &&
                    u.enabled ? h.renderer.text(q, 0, 0, u.useHTML).css(f(u.style)).add(a.labelGroup) : null) && g.getBBox().width, this.rotation = 0)
            },
            getLabelSize: function () {
                return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
            },
            handleOverflow: function (a) {
                var f = this.axis,
                    h = a.x,
                    g = f.chart.chartWidth,
                    x = f.chart.spacing,
                    l = e(f.labelLeft, Math.min(f.pos, x[3])),
                    x = e(f.labelRight, Math.max(f.pos + f.len, g - x[1])),
                    u = this.label,
                    b = this.rotation,
                    k = {
                        left: 0,
                        center: .5,
                        right: 1
                    }[f.labelAlign],
                    d = u.getBBox().width,
                    c = f.getSlotWidth(),
                    D = c,
                    r = 1,
                    n, I = {};
                if (b) 0 > b && h - k * d < l ? n = Math.round(h / Math.cos(b * t) - l) : 0 < b && h + k * d > x && (n = Math.round((g - h) / Math.cos(b * t)));
                else if (g = h + (1 - k) * d, h - k * d < l ? D = a.x + D * (1 - k) - l : g > x && (D = x - a.x + D * k, r = -1), D = Math.min(c, D), D < c && "center" === f.labelAlign && (a.x += r * (c - D - k * (c - Math.min(d, D)))), d > D || f.autoRotation && (u.styles || {}).width) n = D;
                n && (I.width = n, (f.options.labels.style || {}).textOverflow || (I.textOverflow = "ellipsis"), u.css(I))
            },
            getPosition: function (a, e, f, g) {
                var h = this.axis,
                    l = h.chart,
                    u = g && l.oldChartHeight || l.chartHeight;
                return {
                    x: a ?
                        h.translate(e + f, null, null, g) + h.transB : h.left + h.offset + (h.opposite ? (g && l.oldChartWidth || l.chartWidth) - h.right - h.left : 0),
                    y: a ? u - h.bottom + h.offset - (h.opposite ? h.height : 0) : u - h.translate(e + f, null, null, g) - h.transB
                }
            },
            getLabelPosition: function (a, e, h, g, f, l, u, b) {
                var k = this.axis,
                    d = k.transA,
                    c = k.reversed,
                    x = k.staggerLines,
                    r = k.tickRotCorr || {
                        x: 0,
                        y: 0
                    },
                    n = f.y;
                B(n) || (n = 0 === k.side ? h.rotation ? -8 : -h.getBBox().height : 2 === k.side ? r.y + 8 : Math.cos(h.rotation * t) * (r.y - h.getBBox(!1, 0).height / 2));
                a = a + f.x + r.x - (l && g ? l * d * (c ? -1 : 1) : 0);
                e = e + n - (l && !g ? l * d * (c ? 1 : -1) : 0);
                x && (h = u / (b || 1) % x, k.opposite && (h = x - h - 1), e += k.labelOffset / x * h);
                return {
                    x: a,
                    y: Math.round(e)
                }
            },
            getMarkPath: function (a, e, h, g, f, l) {
                return l.crispLine(["M", a, e, "L", a + (f ? 0 : -h), e + (f ? h : 0)], g)
            },
            renderGridLine: function (a, e, h) {
                var g = this.axis,
                    f = g.options,
                    l = this.gridLine,
                    u = {},
                    b = this.pos,
                    k = this.type,
                    d = g.tickmarkOffset,
                    c = g.chart.renderer,
                    D = k ? k + "Grid" : "grid",
                    r = f[D + "LineWidth"],
                    n = f[D + "LineColor"],
                    f = f[D + "LineDashStyle"];
                l || (u.stroke = n, u["stroke-width"] = r, f && (u.dashstyle = f), k || (u.zIndex = 1),
                    a && (u.opacity = 0), this.gridLine = l = c.path().attr(u).addClass("highcharts-" + (k ? k + "-" : "") + "grid-line").add(g.gridGroup));
                if (!a && l && (a = g.getPlotLinePath(b + d, l.strokeWidth() * h, a, !0))) l[this.isNew ? "attr" : "animate"]({
                    d: a,
                    opacity: e
                })
            },
            renderMark: function (a, f, h) {
                var g = this.axis,
                    x = g.options,
                    l = g.chart.renderer,
                    u = this.type,
                    b = u ? u + "Tick" : "tick",
                    k = g.tickSize(b),
                    d = this.mark,
                    c = !d,
                    D = a.x;
                a = a.y;
                var r = e(x[b + "Width"], !u && g.isXAxis ? 1 : 0),
                    x = x[b + "Color"];
                k && (g.opposite && (k[0] = -k[0]), c && (this.mark = d = l.path().addClass("highcharts-" +
                    (u ? u + "-" : "") + "tick").add(g.axisGroup), d.attr({
                    stroke: x,
                    "stroke-width": r
                })), d[c ? "attr" : "animate"]({
                    d: this.getMarkPath(D, a, k[0], d.strokeWidth() * h, g.horiz, l),
                    opacity: f
                }))
            },
            renderLabel: function (a, f, h, g) {
                var x = this.axis,
                    l = x.horiz,
                    u = x.options,
                    b = this.label,
                    k = u.labels,
                    d = k.step,
                    c = x.tickmarkOffset,
                    D = !0,
                    H = a.x;
                a = a.y;
                b && A(H) && (b.xy = a = this.getLabelPosition(H, a, b, l, k, c, g, d), this.isFirst && !this.isLast && !e(u.showFirstLabel, 1) || this.isLast && !this.isFirst && !e(u.showLastLabel, 1) ? D = !1 : !l || x.isRadial || k.step || k.rotation ||
                    f || 0 === h || this.handleOverflow(a), d && g % d && (D = !1), D && A(a.y) ? (a.opacity = h, b[this.isNew ? "attr" : "animate"](a)) : b.attr("y", -9999), this.isNew = !1)
            },
            render: function (a, f, h) {
                var g = this.axis,
                    x = g.horiz,
                    l = this.getPosition(x, this.pos, g.tickmarkOffset, f),
                    u = l.x,
                    b = l.y,
                    g = x && u === g.pos + g.len || !x && b === g.pos ? -1 : 1;
                h = e(h, 1);
                this.isActive = !0;
                this.renderGridLine(f, h, g);
                this.renderMark(l, h, g);
                this.renderLabel(l, f, h, a)
            },
            destroy: function () {
                C(this, this.axis)
            }
        }
    })(J);
    var S = function (a) {
        var z = a.addEvent,
            B = a.animObject,
            C = a.arrayMax,
            A = a.arrayMin,
            f = a.color,
            e = a.correctFloat,
            t = a.defaultOptions,
            r = a.defined,
            q = a.deg2rad,
            h = a.destroyObjectProperties,
            g = a.each,
            x = a.extend,
            l = a.fireEvent,
            u = a.format,
            b = a.getMagnitude,
            k = a.grep,
            d = a.inArray,
            c = a.isArray,
            D = a.isNumber,
            H = a.isString,
            n = a.merge,
            I = a.normalizeTickInterval,
            E = a.objectEach,
            w = a.pick,
            L = a.removeEvent,
            m = a.splat,
            K = a.syncTimeout,
            G = a.Tick,
            M = function () {
                this.init.apply(this, arguments)
            };
        a.extend(M.prototype, {
            defaultOptions: {
                dateTimeLabelFormats: {
                    millisecond: "%H:%M:%S.%L",
                    second: "%H:%M:%S",
                    minute: "%H:%M",
                    hour: "%H:%M",
                    day: "%e. %b",
                    week: "%e. %b",
                    month: "%b '%y",
                    year: "%Y"
                },
                endOnTick: !1,
                labels: {
                    enabled: !0,
                    style: {
                        color: "#666666",
                        cursor: "default",
                        fontSize: "11px"
                    },
                    x: 0
                },
                minPadding: .01,
                maxPadding: .01,
                minorTickLength: 2,
                minorTickPosition: "outside",
                startOfWeek: 1,
                startOnTick: !1,
                tickLength: 10,
                tickmarkPlacement: "between",
                tickPixelInterval: 100,
                tickPosition: "outside",
                title: {
                    align: "middle",
                    style: {
                        color: "#666666"
                    }
                },
                type: "linear",
                minorGridLineColor: "#f2f2f2",
                minorGridLineWidth: 1,
                minorTickColor: "#999999",
                lineColor: "#ccd6eb",
                lineWidth: 1,
                gridLineColor: "#e6e6e6",
                tickColor: "#ccd6eb"
            },
            defaultYAxisOptions: {
                endOnTick: !0,
                tickPixelInterval: 72,
                showLastLabel: !0,
                labels: {
                    x: -8
                },
                maxPadding: .05,
                minPadding: .05,
                startOnTick: !0,
                title: {
                    rotation: 270,
                    text: "Values"
                },
                stackLabels: {
                    enabled: !1,
                    formatter: function () {
                        return a.numberFormat(this.total, -1)
                    },
                    style: {
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: "#000000",
                        textOutline: "1px contrast"
                    }
                },
                gridLineWidth: 1,
                lineWidth: 0
            },
            defaultLeftAxisOptions: {
                labels: {
                    x: -15
                },
                title: {
                    rotation: 270
                }
            },
            defaultRightAxisOptions: {
                labels: {
                    x: 15
                },
                title: {
                    rotation: 90
                }
            },
            defaultBottomAxisOptions: {
                labels: {
                    autoRotation: [-45],
                    x: 0
                },
                title: {
                    rotation: 0
                }
            },
            defaultTopAxisOptions: {
                labels: {
                    autoRotation: [-45],
                    x: 0
                },
                title: {
                    rotation: 0
                }
            },
            init: function (a, b) {
                var p = b.isX,
                    c = this;
                c.chart = a;
                c.horiz = a.inverted ? !p : p;
                c.isXAxis = p;
                c.coll = c.coll || (p ? "xAxis" : "yAxis");
                c.opposite = b.opposite;
                c.side = b.side || (c.horiz ? c.opposite ? 0 : 2 : c.opposite ? 1 : 3);
                c.setOptions(b);
                var y = this.options,
                    k = y.type;
                c.labelFormatter = y.labels.formatter || c.defaultLabelFormatter;
                c.userOptions = b;
                c.minPixelPadding =
                    0;
                c.reversed = y.reversed;
                c.visible = !1 !== y.visible;
                c.zoomEnabled = !1 !== y.zoomEnabled;
                c.hasNames = "category" === k || !0 === y.categories;
                c.categories = y.categories || c.hasNames;
                c.names = c.names || [];
                c.plotLinesAndBandsGroups = {};
                c.isLog = "logarithmic" === k;
                c.isDatetimeAxis = "datetime" === k;
                c.positiveValuesOnly = c.isLog && !c.allowNegativeLog;
                c.isLinked = r(y.linkedTo);
                c.ticks = {};
                c.labelEdge = [];
                c.minorTicks = {};
                c.plotLinesAndBands = [];
                c.alternateBands = {};
                c.len = 0;
                c.minRange = c.userMinRange = y.minRange || y.maxZoom;
                c.range = y.range;
                c.offset = y.offset || 0;
                c.stacks = {};
                c.oldStacks = {};
                c.stacksTouched = 0;
                c.max = null;
                c.min = null;
                c.crosshair = w(y.crosshair, m(a.options.tooltip.crosshairs)[p ? 0 : 1], !1);
                b = c.options.events; - 1 === d(c, a.axes) && (p ? a.axes.splice(a.xAxis.length, 0, c) : a.axes.push(c), a[c.coll].push(c));
                c.series = c.series || [];
                a.inverted && p && void 0 === c.reversed && (c.reversed = !0);
                E(b, function (a, b) {
                    z(c, b, a)
                });
                c.lin2log = y.linearToLogConverter || c.lin2log;
                c.isLog && (c.val2lin = c.log2lin, c.lin2val = c.lin2log)
            },
            setOptions: function (a) {
                this.options = n(this.defaultOptions,
                    "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], n(t[this.coll], a))
            },
            defaultLabelFormatter: function () {
                var b = this.axis,
                    d = this.value,
                    c = b.categories,
                    m = this.dateTimeLabelFormat,
                    k = t.lang,
                    g = k.numericSymbols,
                    k = k.numericSymbolMagnitude || 1E3,
                    n = g && g.length,
                    v, e = b.options.labels.format,
                    b = b.isLog ? Math.abs(d) : b.tickInterval;
                if (e) v = u(e, this);
                else if (c) v = d;
                else if (m) v = a.dateFormat(m, d);
                else if (n &&
                    1E3 <= b)
                    for (; n-- && void 0 === v;) c = Math.pow(k, n + 1), b >= c && 0 === 10 * d % c && null !== g[n] && 0 !== d && (v = a.numberFormat(d / c, -1) + g[n]);
                void 0 === v && (v = 1E4 <= Math.abs(d) ? a.numberFormat(d, -1) : a.numberFormat(d, -1, void 0, ""));
                return v
            },
            getSeriesExtremes: function () {
                var a = this,
                    b = a.chart;
                a.hasVisibleSeries = !1;
                a.dataMin = a.dataMax = a.threshold = null;
                a.softThreshold = !a.isXAxis;
                a.buildStacks && a.buildStacks();
                g(a.series, function (d) {
                    if (d.visible || !b.options.chart.ignoreHiddenSeries) {
                        var c = d.options,
                            p = c.threshold,
                            y;
                        a.hasVisibleSeries = !0;
                        a.positiveValuesOnly && 0 >= p && (p = null);
                        if (a.isXAxis) c = d.xData, c.length && (d = A(c), D(d) || d instanceof Date || (c = k(c, function (a) {
                            return D(a)
                        }), d = A(c)), a.dataMin = Math.min(w(a.dataMin, c[0]), d), a.dataMax = Math.max(w(a.dataMax, c[0]), C(c)));
                        else if (d.getExtremes(), y = d.dataMax, d = d.dataMin, r(d) && r(y) && (a.dataMin = Math.min(w(a.dataMin, d), d), a.dataMax = Math.max(w(a.dataMax, y), y)), r(p) && (a.threshold = p), !c.softThreshold || a.positiveValuesOnly) a.softThreshold = !1
                    }
                })
            },
            translate: function (a, b, d, c, m, k) {
                var p = this.linkedParent ||
                    this,
                    y = 1,
                    g = 0,
                    n = c ? p.oldTransA : p.transA;
                c = c ? p.oldMin : p.min;
                var e = p.minPixelPadding;
                m = (p.isOrdinal || p.isBroken || p.isLog && m) && p.lin2val;
                n || (n = p.transA);
                d && (y *= -1, g = p.len);
                p.reversed && (y *= -1, g -= y * (p.sector || p.len));
                b ? (a = (a * y + g - e) / n + c, m && (a = p.lin2val(a))) : (m && (a = p.val2lin(a)), a = y * (a - c) * n + g + y * e + (D(k) ? n * k : 0));
                return a
            },
            toPixels: function (a, b) {
                return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
            },
            toValue: function (a, b) {
                return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
            },
            getPlotLinePath: function (a,
                b, d, c, m) {
                var p = this.chart,
                    y = this.left,
                    k = this.top,
                    g, n, e = d && p.oldChartHeight || p.chartHeight,
                    f = d && p.oldChartWidth || p.chartWidth,
                    l;
                g = this.transB;
                var h = function (a, b, d) {
                    if (a < b || a > d) c ? a = Math.min(Math.max(b, a), d) : l = !0;
                    return a
                };
                m = w(m, this.translate(a, null, null, d));
                a = d = Math.round(m + g);
                g = n = Math.round(e - m - g);
                D(m) ? this.horiz ? (g = k, n = e - this.bottom, a = d = h(a, y, y + this.width)) : (a = y, d = f - this.right, g = n = h(g, k, k + this.height)) : l = !0;
                return l && !c ? null : p.renderer.crispLine(["M", a, g, "L", d, n], b || 1)
            },
            getLinearTickPositions: function (a,
                b, d) {
                var c, p = e(Math.floor(b / a) * a);
                d = e(Math.ceil(d / a) * a);
                var y = [];
                if (this.single) return [b];
                for (b = p; b <= d;) {
                    y.push(b);
                    b = e(b + a);
                    if (b === c) break;
                    c = b
                }
                return y
            },
            getMinorTickPositions: function () {
                var a = this,
                    b = a.options,
                    d = a.tickPositions,
                    c = a.minorTickInterval,
                    m = [],
                    k = a.pointRangePadding || 0,
                    n = a.min - k,
                    k = a.max + k,
                    v = k - n;
                if (v && v / c < a.len / 3)
                    if (a.isLog) g(this.paddedTicks, function (b, d, p) {
                        d && m.push.apply(m, a.getLogTickPositions(c, p[d - 1], p[d], !0))
                    });
                    else if (a.isDatetimeAxis && "auto" === b.minorTickInterval) m = m.concat(a.getTimeTicks(a.normalizeTimeTickInterval(c),
                    n, k, b.startOfWeek));
                else
                    for (b = n + (d[0] - n) % c; b <= k && b !== m[0]; b += c) m.push(b);
                0 !== m.length && a.trimTicks(m);
                return m
            },
            adjustForMinRange: function () {
                var a = this.options,
                    b = this.min,
                    d = this.max,
                    c, m = this.dataMax - this.dataMin >= this.minRange,
                    k, n, v, e, f, l;
                this.isXAxis && void 0 === this.minRange && !this.isLog && (r(a.min) || r(a.max) ? this.minRange = null : (g(this.series, function (a) {
                    e = a.xData;
                    for (n = f = a.xIncrement ? 1 : e.length - 1; 0 < n; n--)
                        if (v = e[n] - e[n - 1], void 0 === k || v < k) k = v
                }), this.minRange = Math.min(5 * k, this.dataMax - this.dataMin)));
                d - b < this.minRange && (l = this.minRange, c = (l - d + b) / 2, c = [b - c, w(a.min, b - c)], m && (c[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), b = C(c), d = [b + l, w(a.max, b + l)], m && (d[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), d = A(d), d - b < l && (c[0] = d - l, c[1] = w(a.min, d - l), b = C(c)));
                this.min = b;
                this.max = d
            },
            getClosest: function () {
                var a;
                this.categories ? a = 1 : g(this.series, function (b) {
                    var d = b.closestPointRange,
                        c = b.visible || !b.chart.options.chart.ignoreHiddenSeries;
                    !b.noSharedTooltip && r(d) && c && (a = r(a) ? Math.min(a, d) : d)
                });
                return a
            },
            nameToX: function (a) {
                var b = c(this.categories),
                    p = b ? this.categories : this.names,
                    m = a.options.x,
                    k;
                a.series.requireSorting = !1;
                r(m) || (m = !1 === this.options.uniqueNames ? a.series.autoIncrement() : d(a.name, p)); - 1 === m ? b || (k = p.length) : k = m;
                void 0 !== k && (this.names[k] = a.name);
                return k
            },
            updateNames: function () {
                var a = this;
                0 < this.names.length && (this.names.length = 0, this.minRange = void 0, g(this.series || [], function (b) {
                    b.xIncrement = null;
                    if (!b.points || b.isDirtyData) b.processData(), b.generatePoints();
                    g(b.points, function (d,
                        c) {
                        var p;
                        d.options && (p = a.nameToX(d), void 0 !== p && p !== d.x && (d.x = p, b.xData[c] = p))
                    })
                }))
            },
            setAxisTranslation: function (a) {
                var b = this,
                    d = b.max - b.min,
                    c = b.axisPointRange || 0,
                    p, m = 0,
                    k = 0,
                    n = b.linkedParent,
                    e = !!b.categories,
                    l = b.transA,
                    f = b.isXAxis;
                if (f || e || c) p = b.getClosest(), n ? (m = n.minPointOffset, k = n.pointRangePadding) : g(b.series, function (a) {
                        var d = e ? 1 : f ? w(a.options.pointRange, p, 0) : b.axisPointRange || 0;
                        a = a.options.pointPlacement;
                        c = Math.max(c, d);
                        b.single || (m = Math.max(m, H(a) ? 0 : d / 2), k = Math.max(k, "on" === a ? 0 : d))
                    }), n = b.ordinalSlope &&
                    p ? b.ordinalSlope / p : 1, b.minPointOffset = m *= n, b.pointRangePadding = k *= n, b.pointRange = Math.min(c, d), f && (b.closestPointRange = p);
                a && (b.oldTransA = l);
                b.translationSlope = b.transA = l = b.options.staticScale || b.len / (d + k || 1);
                b.transB = b.horiz ? b.left : b.bottom;
                b.minPixelPadding = l * m
            },
            minFromRange: function () {
                return this.max - this.range
            },
            setTickInterval: function (d) {
                var c = this,
                    p = c.chart,
                    m = c.options,
                    k = c.isLog,
                    n = c.log2lin,
                    f = c.isDatetimeAxis,
                    v = c.isXAxis,
                    h = c.isLinked,
                    u = m.maxPadding,
                    G = m.minPadding,
                    x = m.tickInterval,
                    E = m.tickPixelInterval,
                    K = c.categories,
                    H = c.threshold,
                    q = c.softThreshold,
                    M, t, L, A;
                f || K || h || this.getTickAmount();
                L = w(c.userMin, m.min);
                A = w(c.userMax, m.max);
                h ? (c.linkedParent = p[c.coll][m.linkedTo], p = c.linkedParent.getExtremes(), c.min = w(p.min, p.dataMin), c.max = w(p.max, p.dataMax), m.type !== c.linkedParent.options.type && a.error(11, 1)) : (!q && r(H) && (c.dataMin >= H ? (M = H, G = 0) : c.dataMax <= H && (t = H, u = 0)), c.min = w(L, M, c.dataMin), c.max = w(A, t, c.dataMax));
                k && (c.positiveValuesOnly && !d && 0 >= Math.min(c.min, w(c.dataMin, c.min)) && a.error(10, 1), c.min = e(n(c.min),
                    15), c.max = e(n(c.max), 15));
                c.range && r(c.max) && (c.userMin = c.min = L = Math.max(c.min, c.minFromRange()), c.userMax = A = c.max, c.range = null);
                l(c, "foundExtremes");
                c.beforePadding && c.beforePadding();
                c.adjustForMinRange();
                !(K || c.axisPointRange || c.usePercentage || h) && r(c.min) && r(c.max) && (n = c.max - c.min) && (!r(L) && G && (c.min -= n * G), !r(A) && u && (c.max += n * u));
                D(m.softMin) && (c.min = Math.min(c.min, m.softMin));
                D(m.softMax) && (c.max = Math.max(c.max, m.softMax));
                D(m.floor) && (c.min = Math.max(c.min, m.floor));
                D(m.ceiling) && (c.max = Math.min(c.max,
                    m.ceiling));
                q && r(c.dataMin) && (H = H || 0, !r(L) && c.min < H && c.dataMin >= H ? c.min = H : !r(A) && c.max > H && c.dataMax <= H && (c.max = H));
                c.tickInterval = c.min === c.max || void 0 === c.min || void 0 === c.max ? 1 : h && !x && E === c.linkedParent.options.tickPixelInterval ? x = c.linkedParent.tickInterval : w(x, this.tickAmount ? (c.max - c.min) / Math.max(this.tickAmount - 1, 1) : void 0, K ? 1 : (c.max - c.min) * E / Math.max(c.len, E));
                v && !d && g(c.series, function (a) {
                    a.processData(c.min !== c.oldMin || c.max !== c.oldMax)
                });
                c.setAxisTranslation(!0);
                c.beforeSetTickPositions &&
                    c.beforeSetTickPositions();
                c.postProcessTickInterval && (c.tickInterval = c.postProcessTickInterval(c.tickInterval));
                c.pointRange && !x && (c.tickInterval = Math.max(c.pointRange, c.tickInterval));
                d = w(m.minTickInterval, c.isDatetimeAxis && c.closestPointRange);
                !x && c.tickInterval < d && (c.tickInterval = d);
                f || k || x || (c.tickInterval = I(c.tickInterval, null, b(c.tickInterval), w(m.allowDecimals, !(.5 < c.tickInterval && 5 > c.tickInterval && 1E3 < c.max && 9999 > c.max)), !!this.tickAmount));
                this.tickAmount || (c.tickInterval = c.unsquish());
                this.setTickPositions()
            },
            setTickPositions: function () {
                var a = this.options,
                    b, c = a.tickPositions,
                    d = a.tickPositioner,
                    m = a.startOnTick,
                    k = a.endOnTick;
                this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
                this.minorTickInterval = "auto" === a.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : a.minorTickInterval;
                this.single = this.min === this.max && r(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals);
                this.tickPositions = b = c && c.slice();
                !b && (b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()]), this.tickPositions = b, d && (d = d.apply(this, [this.min, this.max]))) && (this.tickPositions = b = d);
                this.paddedTicks = b.slice(0);
                this.trimTicks(b, m, k);
                this.isLinked ||
                    (this.single && (this.min -= .5, this.max += .5), c || d || this.adjustTickAmount())
            },
            trimTicks: function (a, b, c) {
                var d = a[0],
                    p = a[a.length - 1],
                    m = this.minPointOffset || 0;
                if (!this.isLinked) {
                    if (b && -Infinity !== d) this.min = d;
                    else
                        for (; this.min - m > a[0];) a.shift();
                    if (c) this.max = p;
                    else
                        for (; this.max + m < a[a.length - 1];) a.pop();
                    0 === a.length && r(d) && a.push((p + d) / 2)
                }
            },
            alignToOthers: function () {
                var a = {},
                    b, c = this.options;
                !1 === this.chart.options.chart.alignTicks || !1 === c.alignTicks || this.isLog || g(this.chart[this.coll], function (c) {
                    var d =
                        c.options,
                        d = [c.horiz ? d.left : d.top, d.width, d.height, d.pane].join();
                    c.series.length && (a[d] ? b = !0 : a[d] = 1)
                });
                return b
            },
            getTickAmount: function () {
                var a = this.options,
                    b = a.tickAmount,
                    c = a.tickPixelInterval;
                !r(a.tickInterval) && this.len < c && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
                !b && this.alignToOthers() && (b = Math.ceil(this.len / c) + 1);
                4 > b && (this.finalTickAmt = b, b = 5);
                this.tickAmount = b
            },
            adjustTickAmount: function () {
                var a = this.tickInterval,
                    b = this.tickPositions,
                    c = this.tickAmount,
                    d = this.finalTickAmt,
                    m = b && b.length;
                if (m < c) {
                    for (; b.length < c;) b.push(e(b[b.length - 1] + a));
                    this.transA *= (m - 1) / (c - 1);
                    this.max = b[b.length - 1]
                } else m > c && (this.tickInterval *= 2, this.setTickPositions());
                if (r(d)) {
                    for (a = c = b.length; a--;)(3 === d && 1 === a % 2 || 2 >= d && 0 < a && a < c - 1) && b.splice(a, 1);
                    this.finalTickAmt = void 0
                }
            },
            setScale: function () {
                var a, b;
                this.oldMin = this.min;
                this.oldMax = this.max;
                this.oldAxisLength = this.len;
                this.setAxisSize();
                b = this.len !== this.oldAxisLength;
                g(this.series, function (b) {
                    if (b.isDirtyData || b.isDirty || b.xAxis.isDirty) a = !0
                });
                b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
            },
            setExtremes: function (a, b, c, d, m) {
                var p = this,
                    k = p.chart;
                c = w(c, !0);
                g(p.series, function (a) {
                    delete a.kdTree
                });
                m = x(m, {
                    min: a,
                    max: b
                });
                l(p, "setExtremes", m, function () {
                    p.userMin = a;
                    p.userMax = b;
                    p.eventArgs = m;
                    c && k.redraw(d)
                })
            },
            zoom: function (a, b) {
                var c = this.dataMin,
                    d = this.dataMax,
                    p = this.options,
                    m = Math.min(c, w(p.min, c)),
                    p = Math.max(d, w(p.max, d));
                if (a !== this.min || b !== this.max) this.allowZoomOutside || (r(c) && (a < m && (a = m), a > p && (a = p)), r(d) && (b < m && (b = m), b > p && (b = p))), this.displayBtn = void 0 !== a || void 0 !== b, this.setExtremes(a, b, !1, void 0, {
                    trigger: "zoom"
                });
                return !0
            },
            setAxisSize: function () {
                var a = this.chart,
                    b = this.options,
                    c = b.offsets || [0, 0, 0, 0],
                    d = this.horiz,
                    m = w(b.width, a.plotWidth - c[3] + c[1]),
                    k = w(b.height, a.plotHeight - c[0] + c[2]),
                    n = w(b.top, a.plotTop + c[0]),
                    b = w(b.left, a.plotLeft + c[3]),
                    c = /%$/;
                c.test(k) && (k = Math.round(parseFloat(k) / 100 * a.plotHeight));
                c.test(n) && (n = Math.round(parseFloat(n) / 100 * a.plotHeight + a.plotTop));
                this.left = b;
                this.top = n;
                this.width = m;
                this.height = k;
                this.bottom = a.chartHeight - k - n;
                this.right = a.chartWidth - m - b;
                this.len = Math.max(d ? m : k, 0);
                this.pos = d ? b : n
            },
            getExtremes: function () {
                var a = this.isLog,
                    b = this.lin2log;
                return {
                    min: a ?
                        e(b(this.min)) : this.min,
                    max: a ? e(b(this.max)) : this.max,
                    dataMin: this.dataMin,
                    dataMax: this.dataMax,
                    userMin: this.userMin,
                    userMax: this.userMax
                }
            },
            getThreshold: function (a) {
                var b = this.isLog,
                    c = this.lin2log,
                    d = b ? c(this.min) : this.min,
                    b = b ? c(this.max) : this.max;
                null === a ? a = d : d > a ? a = d : b < a && (a = b);
                return this.translate(a, 0, 1, 0, 1)
            },
            autoLabelAlign: function (a) {
                a = (w(a, 0) - 90 * this.side + 720) % 360;
                return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center"
            },
            tickSize: function (a) {
                var b = this.options,
                    c = b[a + "Length"],
                    d = w(b[a + "Width"],
                        "tick" === a && this.isXAxis ? 1 : 0);
                if (d && c) return "inside" === b[a + "Position"] && (c = -c), [c, d]
            },
            labelMetrics: function () {
                return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label)
            },
            unsquish: function () {
                var a = this.options.labels,
                    b = this.horiz,
                    c = this.tickInterval,
                    d = c,
                    m = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / c),
                    k, n = a.rotation,
                    v = this.labelMetrics(),
                    e, l = Number.MAX_VALUE,
                    f, h = function (a) {
                        a /= m || 1;
                        a = 1 < a ? Math.ceil(a) : 1;
                        return a * c
                    };
                b ? (f = !a.staggerLines && !a.step && (r(n) ? [n] : m < w(a.autoRotationLimit, 80) && a.autoRotation)) && g(f, function (a) {
                    var b;
                    if (a === n || a && -90 <= a && 90 >= a) e = h(Math.abs(v.h / Math.sin(q * a))), b = e + Math.abs(a / 360), b < l && (l = b, k = a, d = e)
                }) : a.step || (d = h(v.h));
                this.autoRotation = f;
                this.labelRotation = w(k, n);
                return d
            },
            getSlotWidth: function () {
                var a = this.chart,
                    b = this.horiz,
                    c = this.options.labels,
                    d = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                    m = a.margin[3];
                return b && 2 > (c.step || 0) && !c.rotation && (this.staggerLines || 1) * this.len /
                    d || !b && (m && m - a.spacing[3] || .33 * a.chartWidth)
            },
            renderUnsquish: function () {
                var a = this.chart,
                    b = a.renderer,
                    c = this.tickPositions,
                    d = this.ticks,
                    m = this.options.labels,
                    k = this.horiz,
                    e = this.getSlotWidth(),
                    v = Math.max(1, Math.round(e - 2 * (m.padding || 5))),
                    l = {},
                    f = this.labelMetrics(),
                    h = m.style && m.style.textOverflow,
                    u, G = 0,
                    w, x;
                H(m.rotation) || (l.rotation = m.rotation || 0);
                g(c, function (a) {
                    (a = d[a]) && a.labelLength > G && (G = a.labelLength)
                });
                this.maxLabelLength = G;
                if (this.autoRotation) G > v && G > f.h ? l.rotation = this.labelRotation : this.labelRotation =
                    0;
                else if (e && (u = {
                        width: v + "px"
                    }, !h))
                    for (u.textOverflow = "clip", w = c.length; !k && w--;)
                        if (x = c[w], v = d[x].label) v.styles && "ellipsis" === v.styles.textOverflow ? v.css({
                            textOverflow: "clip"
                        }) : d[x].labelLength > e && v.css({
                            width: e + "px"
                        }), v.getBBox().height > this.len / c.length - (f.h - f.f) && (v.specCss = {
                            textOverflow: "ellipsis"
                        });
                l.rotation && (u = {
                    width: (G > .5 * a.chartHeight ? .33 * a.chartHeight : a.chartHeight) + "px"
                }, h || (u.textOverflow = "ellipsis"));
                if (this.labelAlign = m.align || this.autoLabelAlign(this.labelRotation)) l.align = this.labelAlign;
                g(c, function (a) {
                    var b = (a = d[a]) && a.label;
                    b && (b.attr(l), u && b.css(n(u, b.specCss)), delete b.specCss, a.rotation = l.rotation)
                });
                this.tickRotCorr = b.rotCorr(f.b, this.labelRotation || 0, 0 !== this.side)
            },
            hasData: function () {
                return this.hasVisibleSeries || r(this.min) && r(this.max) && !!this.tickPositions
            },
            addTitle: function (a) {
                var b = this.chart.renderer,
                    c = this.horiz,
                    d = this.opposite,
                    p = this.options.title,
                    m;
                this.axisTitle || ((m = p.textAlign) || (m = (c ? {
                    low: "left",
                    middle: "center",
                    high: "right"
                } : {
                    low: d ? "right" : "left",
                    middle: "center",
                    high: d ? "left" : "right"
                })[p.align]), this.axisTitle = b.text(p.text, 0, 0, p.useHTML).attr({
                    zIndex: 7,
                    rotation: p.rotation || 0,
                    align: m
                }).addClass("highcharts-axis-title").css(p.style).add(this.axisGroup), this.axisTitle.isNew = !0);
                this.axisTitle[a ? "show" : "hide"](!0)
            },
            generateTick: function (a) {
                var b = this.ticks;
                b[a] ? b[a].addLabel() : b[a] = new G(this, a)
            },
            getOffset: function () {
                var a = this,
                    b = a.chart,
                    c = b.renderer,
                    d = a.options,
                    m = a.tickPositions,
                    k = a.ticks,
                    n = a.horiz,
                    v = a.side,
                    e = b.inverted ? [1, 0, 3, 2][v] : v,
                    l, f, h = 0,
                    u, G = 0,
                    x = d.title,
                    D = d.labels,
                    K = 0,
                    H = b.axisOffset,
                    b = b.clipOffset,
                    I = [-1, 1, 1, -1][v],
                    q = d.className,
                    M = a.axisParent,
                    t = this.tickSize("tick");
                l = a.hasData();
                a.showAxis = f = l || w(d.showEmpty, !0);
                a.staggerLines = a.horiz && D.staggerLines;
                a.axisGroup || (a.gridGroup = c.g("grid").attr({
                    zIndex: d.gridZIndex || 1
                }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (q || "")).add(M), a.axisGroup = c.g("axis").attr({
                    zIndex: d.zIndex || 2
                }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (q || "")).add(M), a.labelGroup = c.g("axis-labels").attr({
                    zIndex: D.zIndex ||
                        7
                }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (q || "")).add(M));
                l || a.isLinked ? (g(m, function (b, c) {
                    a.generateTick(b, c)
                }), a.renderUnsquish(), !1 === D.reserveSpace || 0 !== v && 2 !== v && {
                    1: "left",
                    3: "right"
                }[v] !== a.labelAlign && "center" !== a.labelAlign || g(m, function (a) {
                    K = Math.max(k[a].getLabelSize(), K)
                }), a.staggerLines && (K *= a.staggerLines, a.labelOffset = K * (a.opposite ? -1 : 1))) : E(k, function (a, b) {
                    a.destroy();
                    delete k[b]
                });
                x && x.text && !1 !== x.enabled && (a.addTitle(f), f && !1 !== x.reserveSpace && (a.titleOffset = h = a.axisTitle.getBBox()[n ?
                    "height" : "width"], u = x.offset, G = r(u) ? 0 : w(x.margin, n ? 5 : 10)));
                a.renderLine();
                a.offset = I * w(d.offset, H[v]);
                a.tickRotCorr = a.tickRotCorr || {
                    x: 0,
                    y: 0
                };
                c = 0 === v ? -a.labelMetrics().h : 2 === v ? a.tickRotCorr.y : 0;
                G = Math.abs(K) + G;
                K && (G = G - c + I * (n ? w(D.y, a.tickRotCorr.y + 8 * I) : D.x));
                a.axisTitleMargin = w(u, G);
                H[v] = Math.max(H[v], a.axisTitleMargin + h + I * a.offset, G, l && m.length && t ? t[0] + I * a.offset : 0);
                d = d.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2);
                b[e] = Math.max(b[e], d)
            },
            getLinePath: function (a) {
                var b = this.chart,
                    c = this.opposite,
                    d = this.offset,
                    m = this.horiz,
                    p = this.left + (c ? this.width : 0) + d,
                    d = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
                c && (a *= -1);
                return b.renderer.crispLine(["M", m ? this.left : p, m ? d : this.top, "L", m ? b.chartWidth - this.right : p, m ? d : b.chartHeight - this.bottom], a)
            },
            renderLine: function () {
                this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.axisLine.attr({
                    stroke: this.options.lineColor,
                    "stroke-width": this.options.lineWidth,
                    zIndex: 7
                }))
            },
            getTitlePosition: function () {
                var a =
                    this.horiz,
                    b = this.left,
                    c = this.top,
                    d = this.len,
                    m = this.options.title,
                    k = a ? b : c,
                    n = this.opposite,
                    g = this.offset,
                    e = m.x || 0,
                    l = m.y || 0,
                    f = this.chart.renderer.fontMetrics(m.style && m.style.fontSize, this.axisTitle).f,
                    d = {
                        low: k + (a ? 0 : d),
                        middle: k + d / 2,
                        high: k + (a ? d : 0)
                    }[m.align],
                    b = (a ? c + this.height : b) + (a ? 1 : -1) * (n ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? f : 0);
                return {
                    x: a ? d + e : b + (n ? this.width : 0) + g + e,
                    y: a ? b + l - (n ? this.height : 0) + g : d + l
                }
            },
            renderMinorTick: function (a) {
                var b = this.chart.hasRendered && D(this.oldMin),
                    c = this.minorTicks;
                c[a] ||
                    (c[a] = new G(this, a, "minor"));
                b && c[a].isNew && c[a].render(null, !0);
                c[a].render(null, !1, 1)
            },
            renderTick: function (a, b) {
                var c = this.isLinked,
                    d = this.ticks,
                    m = this.chart.hasRendered && D(this.oldMin);
                if (!c || a >= this.min && a <= this.max) d[a] || (d[a] = new G(this, a)), m && d[a].isNew && d[a].render(b, !0, .1), d[a].render(b)
            },
            render: function () {
                var b = this,
                    c = b.chart,
                    d = b.options,
                    m = b.isLog,
                    k = b.lin2log,
                    n = b.isLinked,
                    e = b.tickPositions,
                    v = b.axisTitle,
                    l = b.ticks,
                    f = b.minorTicks,
                    h = b.alternateBands,
                    u = d.stackLabels,
                    x = d.alternateGridColor,
                    w =
                    b.tickmarkOffset,
                    D = b.axisLine,
                    H = b.showAxis,
                    I = B(c.renderer.globalAnimation),
                    r, q;
                b.labelEdge.length = 0;
                b.overlap = !1;
                g([l, f, h], function (a) {
                    E(a, function (a) {
                        a.isActive = !1
                    })
                });
                if (b.hasData() || n) b.minorTickInterval && !b.categories && g(b.getMinorTickPositions(), function (a) {
                    b.renderMinorTick(a)
                }), e.length && (g(e, function (a, c) {
                    b.renderTick(a, c)
                }), w && (0 === b.min || b.single) && (l[-1] || (l[-1] = new G(b, -1, null, !0)), l[-1].render(-1))), x && g(e, function (d, p) {
                    q = void 0 !== e[p + 1] ? e[p + 1] + w : b.max - w;
                    0 === p % 2 && d < b.max && q <= b.max + (c.polar ?
                        -w : w) && (h[d] || (h[d] = new a.PlotLineOrBand(b)), r = d + w, h[d].options = {
                        from: m ? k(r) : r,
                        to: m ? k(q) : q,
                        color: x
                    }, h[d].render(), h[d].isActive = !0)
                }), b._addedPlotLB || (g((d.plotLines || []).concat(d.plotBands || []), function (a) {
                    b.addPlotBandOrLine(a)
                }), b._addedPlotLB = !0);
                g([l, f, h], function (a) {
                    var b, d = [],
                        m = I.duration;
                    E(a, function (a, b) {
                        a.isActive || (a.render(b, !1, 0), a.isActive = !1, d.push(b))
                    });
                    K(function () {
                        for (b = d.length; b--;) a[d[b]] && !a[d[b]].isActive && (a[d[b]].destroy(), delete a[d[b]])
                    }, a !== h && c.hasRendered && m ? m : 0)
                });
                D &&
                    (D[D.isPlaced ? "animate" : "attr"]({
                        d: this.getLinePath(D.strokeWidth())
                    }), D.isPlaced = !0, D[H ? "show" : "hide"](!0));
                v && H && (v[v.isNew ? "attr" : "animate"](b.getTitlePosition()), v.isNew = !1);
                u && u.enabled && b.renderStackTotals();
                b.isDirty = !1
            },
            redraw: function () {
                this.visible && (this.render(), g(this.plotLinesAndBands, function (a) {
                    a.render()
                }));
                g(this.series, function (a) {
                    a.isDirty = !0
                })
            },
            keepProps: "extKey hcEvents names series userMax userMin".split(" "),
            destroy: function (a) {
                var b = this,
                    c = b.stacks,
                    m = b.plotLinesAndBands,
                    k;
                a || L(b);
                E(c, function (a, b) {
                    h(a);
                    c[b] = null
                });
                g([b.ticks, b.minorTicks, b.alternateBands], function (a) {
                    h(a)
                });
                if (m)
                    for (a = m.length; a--;) m[a].destroy();
                g("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function (a) {
                    b[a] && (b[a] = b[a].destroy())
                });
                for (k in b.plotLinesAndBandsGroups) b.plotLinesAndBandsGroups[k] = b.plotLinesAndBandsGroups[k].destroy();
                E(b, function (a, c) {
                    -1 === d(c, b.keepProps) && delete b[c]
                })
            },
            drawCrosshair: function (a, b) {
                var c, d = this.crosshair,
                    m = w(d.snap, !0),
                    k, p =
                    this.cross;
                a || (a = this.cross && this.cross.e);
                this.crosshair && !1 !== (r(b) || !m) ? (m ? r(b) && (k = this.isXAxis ? b.plotX : this.len - b.plotY) : k = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos), r(k) && (c = this.getPlotLinePath(b && (this.isXAxis ? b.x : w(b.stackY, b.y)), null, null, null, k) || null), r(c) ? (b = this.categories && !this.isRadial, p || (this.cross = p = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (b ? "category " : "thin ") + d.className).attr({
                    zIndex: w(d.zIndex, 2)
                }).add(), p.attr({
                    stroke: d.color ||
                        (b ? f("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                    "stroke-width": w(d.width, 1)
                }), d.dashStyle && p.attr({
                    dashstyle: d.dashStyle
                })), p.show().attr({
                    d: c
                }), b && !d.width && p.attr({
                    "stroke-width": this.transA
                }), this.cross.e = a) : this.hideCrosshair()) : this.hideCrosshair()
            },
            hideCrosshair: function () {
                this.cross && this.cross.hide()
            }
        });
        return a.Axis = M
    }(J);
    (function (a) {
        var z = a.Axis,
            B = a.getMagnitude,
            C = a.map,
            A = a.normalizeTickInterval,
            f = a.pick;
        z.prototype.getLogTickPositions = function (a, t, r, q) {
            var e = this.options,
                g = this.len,
                x =
                this.lin2log,
                l = this.log2lin,
                u = [];
            q || (this._minorAutoInterval = null);
            if (.5 <= a) a = Math.round(a), u = this.getLinearTickPositions(a, t, r);
            else if (.08 <= a)
                for (var g = Math.floor(t), b, k, d, c, D, e = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; g < r + 1 && !D; g++)
                    for (k = e.length, b = 0; b < k && !D; b++) d = l(x(g) * e[b]), d > t && (!q || c <= r) && void 0 !== c && u.push(c), c > r && (D = !0), c = d;
            else t = x(t), r = x(r), a = e[q ? "minorTickInterval" : "tickInterval"], a = f("auto" === a ? null : a, this._minorAutoInterval, e.tickPixelInterval / (q ? 5 : 1) * (r - t) / ((q ? g / this.tickPositions.length :
                g) || 1)), a = A(a, null, B(a)), u = C(this.getLinearTickPositions(a, t, r), l), q || (this._minorAutoInterval = a / 5);
            q || (this.tickInterval = a);
            return u
        };
        z.prototype.log2lin = function (a) {
            return Math.log(a) / Math.LN10
        };
        z.prototype.lin2log = function (a) {
            return Math.pow(10, a)
        }
    })(J);
    (function (a, z) {
        var B = a.arrayMax,
            C = a.arrayMin,
            A = a.defined,
            f = a.destroyObjectProperties,
            e = a.each,
            t = a.erase,
            r = a.merge,
            q = a.pick;
        a.PlotLineOrBand = function (a, g) {
            this.axis = a;
            g && (this.options = g, this.id = g.id)
        };
        a.PlotLineOrBand.prototype = {
            render: function () {
                var e =
                    this,
                    g = e.axis,
                    f = g.horiz,
                    l = e.options,
                    u = l.label,
                    b = e.label,
                    k = l.to,
                    d = l.from,
                    c = l.value,
                    D = A(d) && A(k),
                    H = A(c),
                    n = e.svgElem,
                    I = !n,
                    E = [],
                    w = l.color,
                    t = q(l.zIndex, 0),
                    m = l.events,
                    E = {
                        "class": "highcharts-plot-" + (D ? "band " : "line ") + (l.className || "")
                    },
                    K = {},
                    G = g.chart.renderer,
                    M = D ? "bands" : "lines",
                    p = g.log2lin;
                g.isLog && (d = p(d), k = p(k), c = p(c));
                H ? (E = {
                    stroke: w,
                    "stroke-width": l.width
                }, l.dashStyle && (E.dashstyle = l.dashStyle)) : D && (w && (E.fill = w), l.borderWidth && (E.stroke = l.borderColor, E["stroke-width"] = l.borderWidth));
                K.zIndex = t;
                M +=
                    "-" + t;
                (w = g.plotLinesAndBandsGroups[M]) || (g.plotLinesAndBandsGroups[M] = w = G.g("plot-" + M).attr(K).add());
                I && (e.svgElem = n = G.path().attr(E).add(w));
                if (H) E = g.getPlotLinePath(c, n.strokeWidth());
                else if (D) E = g.getPlotBandPath(d, k, l);
                else return;
                I && E && E.length ? (n.attr({
                    d: E
                }), m && a.objectEach(m, function (a, b) {
                    n.on(b, function (a) {
                        m[b].apply(e, [a])
                    })
                })) : n && (E ? (n.show(), n.animate({
                    d: E
                })) : (n.hide(), b && (e.label = b = b.destroy())));
                u && A(u.text) && E && E.length && 0 < g.width && 0 < g.height && !E.flat ? (u = r({
                    align: f && D && "center",
                    x: f ?
                        !D && 4 : 10,
                    verticalAlign: !f && D && "middle",
                    y: f ? D ? 16 : 10 : D ? 6 : -4,
                    rotation: f && !D && 90
                }, u), this.renderLabel(u, E, D, t)) : b && b.hide();
                return e
            },
            renderLabel: function (a, g, e, l) {
                var f = this.label,
                    b = this.axis.chart.renderer;
                f || (f = {
                    align: a.textAlign || a.align,
                    rotation: a.rotation,
                    "class": "highcharts-plot-" + (e ? "band" : "line") + "-label " + (a.className || "")
                }, f.zIndex = l, this.label = f = b.text(a.text, 0, 0, a.useHTML).attr(f).add(), f.css(a.style));
                l = [g[1], g[4], e ? g[6] : g[1]];
                g = [g[2], g[5], e ? g[7] : g[2]];
                e = C(l);
                b = C(g);
                f.align(a, !1, {
                    x: e,
                    y: b,
                    width: B(l) - e,
                    height: B(g) - b
                });
                f.show()
            },
            destroy: function () {
                t(this.axis.plotLinesAndBands, this);
                delete this.axis;
                f(this)
            }
        };
        a.extend(z.prototype, {
            getPlotBandPath: function (a, g) {
                var e = this.getPlotLinePath(g, null, null, !0),
                    f = this.getPlotLinePath(a, null, null, !0),
                    h = this.horiz,
                    b = 1;
                a = a < this.min && g < this.min || a > this.max && g > this.max;
                f && e ? (a && (f.flat = f.toString() === e.toString(), b = 0), f.push(h && e[4] === f[4] ? e[4] + b : e[4], h || e[5] !== f[5] ? e[5] : e[5] + b, h && e[1] === f[1] ? e[1] + b : e[1], h || e[2] !== f[2] ? e[2] : e[2] + b)) : f = null;
                return f
            },
            addPlotBand: function (a) {
                return this.addPlotBandOrLine(a, "plotBands")
            },
            addPlotLine: function (a) {
                return this.addPlotBandOrLine(a, "plotLines")
            },
            addPlotBandOrLine: function (e, g) {
                var f = (new a.PlotLineOrBand(this, e)).render(),
                    l = this.userOptions;
                f && (g && (l[g] = l[g] || [], l[g].push(e)), this.plotLinesAndBands.push(f));
                return f
            },
            removePlotBandOrLine: function (a) {
                for (var g = this.plotLinesAndBands, f = this.options, l = this.userOptions, h = g.length; h--;) g[h].id === a && g[h].destroy();
                e([f.plotLines || [], l.plotLines || [], f.plotBands || [], l.plotBands || []], function (b) {
                    for (h = b.length; h--;) b[h].id === a && t(b, b[h])
                })
            },
            removePlotBand: function (a) {
                this.removePlotBandOrLine(a)
            },
            removePlotLine: function (a) {
                this.removePlotBandOrLine(a)
            }
        })
    })(J, S);
    (function (a) {
        var z = a.dateFormat,
            B = a.each,
            C = a.extend,
            A = a.format,
            f = a.isNumber,
            e = a.map,
            t = a.merge,
            r = a.pick,
            q = a.splat,
            h = a.syncTimeout,
            g = a.timeUnits;
        a.Tooltip = function () {
            this.init.apply(this, arguments)
        };
        a.Tooltip.prototype = {
            init: function (a, g) {
                this.chart = a;
                this.options = g;
                this.crosshairs = [];
                this.now = {
                    x: 0,
                    y: 0
                };
                this.isHidden = !0;
                this.split = g.split && !a.inverted;
                this.shared = g.shared || this.split
            },
            cleanSplit: function (a) {
                B(this.chart.series, function (g) {
                    var e = g && g.tt;
                    e && (!e.isActive || a ? g.tt = e.destroy() : e.isActive = !1)
                })
            },
            getLabel: function () {
                var a = this.chart.renderer,
                    g = this.options;
                this.label || (this.split ? this.label = a.g("tooltip") : (this.label = a.label("", 0, 0, g.shape || "callout", null, null, g.useHTML, null, "tooltip").attr({
                        padding: g.padding,
                        r: g.borderRadius
                    }), this.label.attr({
                        fill: g.backgroundColor,
                        "stroke-width": g.borderWidth
                    }).css(g.style).shadow(g.shadow)),
                    this.label.attr({
                        zIndex: 8
                    }).add());
                return this.label
            },
            update: function (a) {
                this.destroy();
                t(!0, this.chart.options.tooltip.userOptions, a);
                this.init(this.chart, t(!0, this.options, a))
            },
            destroy: function () {
                this.label && (this.label = this.label.destroy());
                this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
                clearTimeout(this.hideTimer);
                clearTimeout(this.tooltipTimeout)
            },
            move: function (a, g, e, b) {
                var k = this,
                    d = k.now,
                    c = !1 !== k.options.animation && !k.isHidden && (1 < Math.abs(a - d.x) || 1 < Math.abs(g -
                        d.y)),
                    f = k.followPointer || 1 < k.len;
                C(d, {
                    x: c ? (2 * d.x + a) / 3 : a,
                    y: c ? (d.y + g) / 2 : g,
                    anchorX: f ? void 0 : c ? (2 * d.anchorX + e) / 3 : e,
                    anchorY: f ? void 0 : c ? (d.anchorY + b) / 2 : b
                });
                k.getLabel().attr(d);
                c && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                    k && k.move(a, g, e, b)
                }, 32))
            },
            hide: function (a) {
                var g = this;
                clearTimeout(this.hideTimer);
                a = r(a, this.options.hideDelay, 500);
                this.isHidden || (this.hideTimer = h(function () {
                    g.getLabel()[a ? "fadeOut" : "hide"]();
                    g.isHidden = !0
                }, a))
            },
            getAnchor: function (a, g) {
                var f, b = this.chart,
                    k = b.inverted,
                    d = b.plotTop,
                    c = b.plotLeft,
                    l = 0,
                    h = 0,
                    n, x;
                a = q(a);
                f = a[0].tooltipPos;
                this.followPointer && g && (void 0 === g.chartX && (g = b.pointer.normalize(g)), f = [g.chartX - b.plotLeft, g.chartY - d]);
                f || (B(a, function (a) {
                    n = a.series.yAxis;
                    x = a.series.xAxis;
                    l += a.plotX + (!k && x ? x.left - c : 0);
                    h += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!k && n ? n.top - d : 0)
                }), l /= a.length, h /= a.length, f = [k ? b.plotWidth - h : l, this.shared && !k && 1 < a.length && g ? g.chartY - d : k ? b.plotHeight - l : h]);
                return e(f, Math.round)
            },
            getPosition: function (a, g, e) {
                var b = this.chart,
                    k = this.distance,
                    d = {},
                    c = e.h || 0,
                    f, l = ["y", b.chartHeight, g, e.plotY + b.plotTop, b.plotTop, b.plotTop + b.plotHeight],
                    n = ["x", b.chartWidth, a, e.plotX + b.plotLeft, b.plotLeft, b.plotLeft + b.plotWidth],
                    h = !this.followPointer && r(e.ttBelow, !b.inverted === !!e.negative),
                    u = function (a, b, m, p, g, n) {
                        var e = m < p - k,
                            f = p + k + m < b,
                            l = p - k - m;
                        p += k;
                        if (h && f) d[a] = p;
                        else if (!h && e) d[a] = l;
                        else if (e) d[a] = Math.min(n - m, 0 > l - c ? l : l - c);
                        else if (f) d[a] = Math.max(g, p + c + m > b ? p : p + c);
                        else return !1
                    },
                    w = function (a, b, c, m) {
                        var g;
                        m < k || m > b - k ? g = !1 : d[a] = m < c / 2 ? 1 : m > b - c / 2 ?
                            b - c - 2 : m - c / 2;
                        return g
                    },
                    x = function (a) {
                        var b = l;
                        l = n;
                        n = b;
                        f = a
                    },
                    m = function () {
                        !1 !== u.apply(0, l) ? !1 !== w.apply(0, n) || f || (x(!0), m()) : f ? d.x = d.y = 0 : (x(!0), m())
                    };
                (b.inverted || 1 < this.len) && x();
                m();
                return d
            },
            defaultFormatter: function (a) {
                var g = this.points || q(this),
                    e;
                e = [a.tooltipFooterHeaderFormatter(g[0])];
                e = e.concat(a.bodyFormatter(g));
                e.push(a.tooltipFooterHeaderFormatter(g[0], !0));
                return e
            },
            refresh: function (a, g) {
                var e, b = this.options,
                    k, d = a,
                    c, f = {},
                    l = [];
                e = b.formatter || this.defaultFormatter;
                var f = this.shared,
                    n;
                clearTimeout(this.hideTimer);
                this.followPointer = q(d)[0].series.tooltipOptions.followPointer;
                c = this.getAnchor(d, g);
                g = c[0];
                k = c[1];
                !f || d.series && d.series.noSharedTooltip ? f = d.getLabelConfig() : (B(d, function (a) {
                    a.setState("hover");
                    l.push(a.getLabelConfig())
                }), f = {
                    x: d[0].category,
                    y: d[0].y
                }, f.points = l, d = d[0]);
                this.len = l.length;
                f = e.call(f, this);
                n = d.series;
                this.distance = r(n.tooltipOptions.distance, 16);
                !1 === f ? this.hide() : (e = this.getLabel(), this.isHidden && e.attr({
                    opacity: 1
                }).show(), this.split ? this.renderSplit(f, a) : (e.attr({
                    text: f && f.join ?
                        f.join("") : f
                }), e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + r(d.colorIndex, n.colorIndex)), e.attr({
                    stroke: b.borderColor || d.color || n.color || "#666666"
                }), this.updatePosition({
                    plotX: g,
                    plotY: k,
                    negative: d.negative,
                    ttBelow: d.ttBelow,
                    h: c[2] || 0
                })), this.isHidden = !1)
            },
            renderSplit: function (g, e) {
                var f = this,
                    b = [],
                    k = this.chart,
                    d = k.renderer,
                    c = !0,
                    l = this.options,
                    h, n = this.getLabel();
                B(g.slice(0, e.length + 1), function (a, g) {
                    g = e[g - 1] || {
                        isHeader: !0,
                        plotX: e[0].plotX
                    };
                    var w = g.series || f,
                        u = w.tt,
                        m = g.series || {},
                        E = "highcharts-color-" + r(g.colorIndex, m.colorIndex, "none");
                    u || (w.tt = u = d.label(null, null, null, "callout").addClass("highcharts-tooltip-box " + E).attr({
                        padding: l.padding,
                        r: l.borderRadius,
                        fill: l.backgroundColor,
                        stroke: g.color || m.color || "#333333",
                        "stroke-width": l.borderWidth
                    }).add(n));
                    u.isActive = !0;
                    u.attr({
                        text: a
                    });
                    u.css(l.style);
                    a = u.getBBox();
                    m = a.width + u.strokeWidth();
                    g.isHeader ? (h = a.height, m = Math.max(0, Math.min(g.plotX + k.plotLeft - m / 2, k.chartWidth - m))) : m = g.plotX + k.plotLeft - r(l.distance, 16) - m;
                    0 > m && (c = !1);
                    a = (g.series && g.series.yAxis && g.series.yAxis.pos) + (g.plotY || 0);
                    a -= k.plotTop;
                    b.push({
                        target: g.isHeader ? k.plotHeight + h : a,
                        rank: g.isHeader ? 1 : 0,
                        size: w.tt.getBBox().height + 1,
                        point: g,
                        x: m,
                        tt: u
                    })
                });
                this.cleanSplit();
                a.distribute(b, k.plotHeight + h);
                B(b, function (a) {
                    var b = a.point,
                        d = b.series;
                    a.tt.attr({
                        visibility: void 0 === a.pos ? "hidden" : "inherit",
                        x: c || b.isHeader ? a.x : b.plotX + k.plotLeft + r(l.distance, 16),
                        y: a.pos + k.plotTop,
                        anchorX: b.isHeader ? b.plotX + k.plotLeft : b.plotX + d.xAxis.pos,
                        anchorY: b.isHeader ? a.pos + k.plotTop -
                            15 : b.plotY + d.yAxis.pos
                    })
                })
            },
            updatePosition: function (a) {
                var g = this.chart,
                    e = this.getLabel(),
                    e = (this.options.positioner || this.getPosition).call(this, e.width, e.height, a);
                this.move(Math.round(e.x), Math.round(e.y || 0), a.plotX + g.plotLeft, a.plotY + g.plotTop)
            },
            getDateFormat: function (a, e, f, b) {
                var k = z("%m-%d %H:%M:%S.%L", e),
                    d, c, l = {
                        millisecond: 15,
                        second: 12,
                        minute: 9,
                        hour: 6,
                        day: 3
                    },
                    h = "millisecond";
                for (c in g) {
                    if (a === g.week && +z("%w", e) === f && "00:00:00.000" === k.substr(6)) {
                        c = "week";
                        break
                    }
                    if (g[c] > a) {
                        c = h;
                        break
                    }
                    if (l[c] &&
                        k.substr(l[c]) !== "01-01 00:00:00.000".substr(l[c])) break;
                    "week" !== c && (h = c)
                }
                c && (d = b[c]);
                return d
            },
            getXDateFormat: function (a, g, e) {
                g = g.dateTimeLabelFormats;
                var b = e && e.closestPointRange;
                return (b ? this.getDateFormat(b, a.x, e.options.startOfWeek, g) : g.day) || g.year
            },
            tooltipFooterHeaderFormatter: function (a, g) {
                var e = g ? "footer" : "header";
                g = a.series;
                var b = g.tooltipOptions,
                    k = b.xDateFormat,
                    d = g.xAxis,
                    c = d && "datetime" === d.options.type && f(a.key),
                    e = b[e + "Format"];
                c && !k && (k = this.getXDateFormat(a, b, d));
                c && k && (e = e.replace("{point.key}",
                    "{point.key:" + k + "}"));
                return A(e, {
                    point: a,
                    series: g
                })
            },
            bodyFormatter: function (a) {
                return e(a, function (a) {
                    var g = a.series.tooltipOptions;
                    return (g.pointFormatter || a.point.tooltipFormatter).call(a.point, g.pointFormat)
                })
            }
        }
    })(J);
    (function (a) {
        var z = a.addEvent,
            B = a.attr,
            C = a.charts,
            A = a.color,
            f = a.css,
            e = a.defined,
            t = a.doc,
            r = a.each,
            q = a.extend,
            h = a.fireEvent,
            g = a.offset,
            x = a.pick,
            l = a.removeEvent,
            u = a.splat,
            b = a.Tooltip,
            k = a.win;
        a.Pointer = function (a, b) {
            this.init(a, b)
        };
        a.Pointer.prototype = {
            init: function (a, c) {
                this.options =
                    c;
                this.chart = a;
                this.runChartClick = c.chart.events && !!c.chart.events.click;
                this.pinchDown = [];
                this.lastValidTouch = {};
                b && c.tooltip.enabled && (a.tooltip = new b(a, c.tooltip), this.followTouchMove = x(c.tooltip.followTouchMove, !0));
                this.setDOMEvents()
            },
            zoomOption: function (a) {
                var b = this.chart,
                    d = b.options.chart,
                    k = d.zoomType || "",
                    b = b.inverted;
                /touch/.test(a.type) && (k = x(d.pinchType, k));
                this.zoomX = a = /x/.test(k);
                this.zoomY = k = /y/.test(k);
                this.zoomHor = a && !b || k && b;
                this.zoomVert = k && !b || a && b;
                this.hasZoom = a || k
            },
            normalize: function (a,
                b) {
                var c, d;
                a = a || k.event;
                a.target || (a.target = a.srcElement);
                d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
                b || (this.chartPosition = b = g(this.chart.container));
                void 0 === d.pageX ? (c = Math.max(a.x, a.clientX - b.left), b = a.y) : (c = d.pageX - b.left, b = d.pageY - b.top);
                return q(a, {
                    chartX: Math.round(c),
                    chartY: Math.round(b)
                })
            },
            getCoordinates: function (a) {
                var b = {
                    xAxis: [],
                    yAxis: []
                };
                r(this.chart.axes, function (c) {
                    b[c.isXAxis ? "xAxis" : "yAxis"].push({
                        axis: c,
                        value: c.toValue(a[c.horiz ? "chartX" : "chartY"])
                    })
                });
                return b
            },
            getKDPoints: function (a, b, k) {
                var c = [],
                    d, g, e;
                r(a, function (a) {
                    d = a.noSharedTooltip && b;
                    g = !b && a.directTouch;
                    a.visible && !g && x(a.options.enableMouseTracking, !0) && (e = a.searchPoint(k, !d && 0 > a.options.findNearestPointBy.indexOf("y"))) && e.series && c.push(e)
                });
                c.sort(function (a, c) {
                    var d = a.distX - c.distX,
                        k = a.dist - c.dist,
                        g = (c.series.group && c.series.group.zIndex) - (a.series.group && a.series.group.zIndex);
                    return 0 !== d && b ? d : 0 !== k ? k : 0 !== g ? g : a.series.index > c.series.index ? -1 : 1
                });
                if (b && c[0] && !c[0].series.noSharedTooltip)
                    for (a =
                        c.length; a--;)(c[a].x !== c[0].x || c[a].series.noSharedTooltip) && c.splice(a, 1);
                return c
            },
            getPointFromEvent: function (a) {
                a = a.target;
                for (var b; a && !b;) b = a.point, a = a.parentNode;
                return b
            },
            getHoverData: function (b, c, k, g, e, f) {
                var d = b,
                    n = c,
                    h;
                g ? e ? (h = [], r(k, function (a) {
                        var b = a.noSharedTooltip && e,
                            c = !e && a.directTouch;
                        a.visible && !b && !c && x(a.options.enableMouseTracking, !0) && (a = a.searchKDTree({
                            clientX: d.clientX,
                            plotY: d.plotY
                        }, !b && 1 === a.kdDimensions)) && a.series && h.push(a)
                    }), 0 === h.length && (h = [d])) : h = [d] : n && !n.stickyTracking ?
                    (e || (k = [n]), h = this.getKDPoints(k, e, f), d = a.find(h, function (a) {
                        return a.series === n
                    })) : (b = a.grep(k, function (a) {
                        return a.stickyTracking
                    }), h = this.getKDPoints(b, e, f), n = (d = h[0]) && d.series, e && (h = this.getKDPoints(k, e, f)));
                h.sort(function (a, b) {
                    return a.series.index - b.series.index
                });
                return {
                    hoverPoint: d,
                    hoverSeries: n,
                    hoverPoints: h
                }
            },
            runPointActions: function (b, c) {
                var d = this.chart,
                    k = d.tooltip,
                    g = k ? k.shared : !1,
                    e = c || d.hoverPoint,
                    f = e && e.series || d.hoverSeries;
                c = this.getHoverData(e, f, d.series, !!c || f && f.directTouch, g,
                    b);
                var h, l, e = c.hoverPoint;
                h = (f = c.hoverSeries) && f.tooltipOptions.followPointer;
                l = (g = g && e && !e.series.noSharedTooltip) ? c.hoverPoints : e ? [e] : [];
                if (e && (e !== d.hoverPoint || k && k.isHidden)) {
                    r(d.hoverPoints || [], function (b) {
                        -1 === a.inArray(b, l) && b.setState()
                    });
                    r(l || [], function (a) {
                        a.setState("hover")
                    });
                    if (d.hoverSeries !== f) f.onMouseOver();
                    f && !f.directTouch && (d.hoverPoint && d.hoverPoint.firePointEvent("mouseOut"), e.firePointEvent("mouseOver"));
                    d.hoverPoints = l;
                    d.hoverPoint = e;
                    k && k.refresh(g ? l : e, b)
                } else h && k && !k.isHidden &&
                    (f = k.getAnchor([{}], b), k.updatePosition({
                        plotX: f[0],
                        plotY: f[1]
                    }));
                this.unDocMouseMove || (this.unDocMouseMove = z(t, "mousemove", function (b) {
                    var c = C[a.hoverChartIndex];
                    if (c) c.pointer.onDocumentMouseMove(b)
                }));
                r(d.axes, function (c) {
                    x(c.crosshair.snap, !0) ? a.find(l, function (a) {
                        return a.series[c.coll] === c
                    }) ? c.drawCrosshair(b, e) : c.hideCrosshair() : c.drawCrosshair(b)
                })
            },
            reset: function (a, b) {
                var c = this.chart,
                    d = c.hoverSeries,
                    k = c.hoverPoint,
                    g = c.hoverPoints,
                    e = c.tooltip,
                    f = e && e.shared ? g : k;
                a && f && r(u(f), function (b) {
                    b.series.isCartesian &&
                        void 0 === b.plotX && (a = !1)
                });
                if (a) e && f && (e.refresh(f), k && (k.setState(k.state, !0), r(c.axes, function (a) {
                    a.crosshair && a.drawCrosshair(null, k)
                })));
                else {
                    if (k) k.onMouseOut();
                    g && r(g, function (a) {
                        a.setState()
                    });
                    if (d) d.onMouseOut();
                    e && e.hide(b);
                    this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
                    r(c.axes, function (a) {
                        a.hideCrosshair()
                    });
                    this.hoverX = c.hoverPoints = c.hoverPoint = null
                }
            },
            scaleGroups: function (a, b) {
                var c = this.chart,
                    d;
                r(c.series, function (k) {
                    d = a || k.getPlotBox();
                    k.xAxis && k.xAxis.zoomEnabled &&
                        k.group && (k.group.attr(d), k.markerGroup && (k.markerGroup.attr(d), k.markerGroup.clip(b ? c.clipRect : null)), k.dataLabelsGroup && k.dataLabelsGroup.attr(d))
                });
                c.clipRect.attr(b || c.clipBox)
            },
            dragStart: function (a) {
                var b = this.chart;
                b.mouseIsDown = a.type;
                b.cancelClick = !1;
                b.mouseDownX = this.mouseDownX = a.chartX;
                b.mouseDownY = this.mouseDownY = a.chartY
            },
            drag: function (a) {
                var b = this.chart,
                    d = b.options.chart,
                    k = a.chartX,
                    g = a.chartY,
                    e = this.zoomHor,
                    f = this.zoomVert,
                    h = b.plotLeft,
                    l = b.plotTop,
                    m = b.plotWidth,
                    u = b.plotHeight,
                    G, x = this.selectionMarker,
                    p = this.mouseDownX,
                    y = this.mouseDownY,
                    r = d.panKey && a[d.panKey + "Key"];
                x && x.touch || (k < h ? k = h : k > h + m && (k = h + m), g < l ? g = l : g > l + u && (g = l + u), this.hasDragged = Math.sqrt(Math.pow(p - k, 2) + Math.pow(y - g, 2)), 10 < this.hasDragged && (G = b.isInsidePlot(p - h, y - l), b.hasCartesianSeries && (this.zoomX || this.zoomY) && G && !r && !x && (this.selectionMarker = x = b.renderer.rect(h, l, e ? 1 : m, f ? 1 : u, 0).attr({
                    fill: d.selectionMarkerFill || A("#335cad").setOpacity(.25).get(),
                    "class": "highcharts-selection-marker",
                    zIndex: 7
                }).add()), x && e && (k -= p, x.attr({
                    width: Math.abs(k),
                    x: (0 < k ? 0 : k) + p
                })), x && f && (k = g - y, x.attr({
                    height: Math.abs(k),
                    y: (0 < k ? 0 : k) + y
                })), G && !x && d.panning && b.pan(a, d.panning)))
            },
            drop: function (a) {
                var b = this,
                    d = this.chart,
                    k = this.hasPinched;
                if (this.selectionMarker) {
                    var g = {
                            originalEvent: a,
                            xAxis: [],
                            yAxis: []
                        },
                        l = this.selectionMarker,
                        u = l.attr ? l.attr("x") : l.x,
                        w = l.attr ? l.attr("y") : l.y,
                        x = l.attr ? l.attr("width") : l.width,
                        m = l.attr ? l.attr("height") : l.height,
                        K;
                    if (this.hasDragged || k) r(d.axes, function (c) {
                        if (c.zoomEnabled && e(c.min) && (k || b[{
                                xAxis: "zoomX",
                                yAxis: "zoomY"
                            }[c.coll]])) {
                            var d =
                                c.horiz,
                                p = "touchend" === a.type ? c.minPixelPadding : 0,
                                f = c.toValue((d ? u : w) + p),
                                d = c.toValue((d ? u + x : w + m) - p);
                            g[c.coll].push({
                                axis: c,
                                min: Math.min(f, d),
                                max: Math.max(f, d)
                            });
                            K = !0
                        }
                    }), K && h(d, "selection", g, function (a) {
                        d.zoom(q(a, k ? {
                            animation: !1
                        } : null))
                    });
                    this.selectionMarker = this.selectionMarker.destroy();
                    k && this.scaleGroups()
                }
                d && (f(d.container, {
                    cursor: d._cursor
                }), d.cancelClick = 10 < this.hasDragged, d.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
            },
            onContainerMouseDown: function (a) {
                a = this.normalize(a);
                this.zoomOption(a);
                a.preventDefault && a.preventDefault();
                this.dragStart(a)
            },
            onDocumentMouseUp: function (b) {
                C[a.hoverChartIndex] && C[a.hoverChartIndex].pointer.drop(b)
            },
            onDocumentMouseMove: function (a) {
                var b = this.chart,
                    d = this.chartPosition;
                a = this.normalize(a, d);
                !d || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset()
            },
            onContainerMouseLeave: function (b) {
                var c = C[a.hoverChartIndex];
                c && (b.relatedTarget || b.toElement) && (c.pointer.reset(), c.pointer.chartPosition =
                    null)
            },
            onContainerMouseMove: function (b) {
                var c = this.chart;
                e(a.hoverChartIndex) && C[a.hoverChartIndex] && C[a.hoverChartIndex].mouseIsDown || (a.hoverChartIndex = c.index);
                b = this.normalize(b);
                b.returnValue = !1;
                "mousedown" === c.mouseIsDown && this.drag(b);
                !this.inClass(b.target, "highcharts-tracker") && !c.isInsidePlot(b.chartX - c.plotLeft, b.chartY - c.plotTop) || c.openMenu || this.runPointActions(b)
            },
            inClass: function (a, b) {
                for (var c; a;) {
                    if (c = B(a, "class")) {
                        if (-1 !== c.indexOf(b)) return !0;
                        if (-1 !== c.indexOf("highcharts-container")) return !1
                    }
                    a =
                        a.parentNode
                }
            },
            onTrackerMouseOut: function (a) {
                var b = this.chart.hoverSeries;
                a = a.relatedTarget || a.toElement;
                if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut()
            },
            onContainerClick: function (a) {
                var b = this.chart,
                    d = b.hoverPoint,
                    k = b.plotLeft,
                    g = b.plotTop;
                a = this.normalize(a);
                b.cancelClick || (d && this.inClass(a.target, "highcharts-tracker") ? (h(d.series, "click", q(a, {
                    point: d
                })), b.hoverPoint && d.firePointEvent("click",
                    a)) : (q(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - k, a.chartY - g) && h(b, "click", a)))
            },
            setDOMEvents: function () {
                var b = this,
                    c = b.chart.container;
                c.onmousedown = function (a) {
                    b.onContainerMouseDown(a)
                };
                c.onmousemove = function (a) {
                    b.onContainerMouseMove(a)
                };
                c.onclick = function (a) {
                    b.onContainerClick(a)
                };
                z(c, "mouseleave", b.onContainerMouseLeave);
                1 === a.chartCount && z(t, "mouseup", b.onDocumentMouseUp);
                a.hasTouch && (c.ontouchstart = function (a) {
                        b.onContainerTouchStart(a)
                    }, c.ontouchmove = function (a) {
                        b.onContainerTouchMove(a)
                    },
                    1 === a.chartCount && z(t, "touchend", b.onDocumentTouchEnd))
            },
            destroy: function () {
                var b = this;
                b.unDocMouseMove && b.unDocMouseMove();
                l(b.chart.container, "mouseleave", b.onContainerMouseLeave);
                a.chartCount || (l(t, "mouseup", b.onDocumentMouseUp), l(t, "touchend", b.onDocumentTouchEnd));
                clearInterval(b.tooltipTimeout);
                a.objectEach(b, function (a, d) {
                    b[d] = null
                })
            }
        }
    })(J);
    (function (a) {
        var z = a.charts,
            B = a.each,
            C = a.extend,
            A = a.map,
            f = a.noop,
            e = a.pick;
        C(a.Pointer.prototype, {
            pinchTranslate: function (a, e, f, h, g, x) {
                this.zoomHor && this.pinchTranslateDirection(!0,
                    a, e, f, h, g, x);
                this.zoomVert && this.pinchTranslateDirection(!1, a, e, f, h, g, x)
            },
            pinchTranslateDirection: function (a, e, f, h, g, x, l, u) {
                var b = this.chart,
                    k = a ? "x" : "y",
                    d = a ? "X" : "Y",
                    c = "chart" + d,
                    r = a ? "width" : "height",
                    q = b["plot" + (a ? "Left" : "Top")],
                    n, t, E = u || 1,
                    w = b.inverted,
                    L = b.bounds[a ? "h" : "v"],
                    m = 1 === e.length,
                    K = e[0][c],
                    G = f[0][c],
                    M = !m && e[1][c],
                    p = !m && f[1][c],
                    y;
                f = function () {
                    !m && 20 < Math.abs(K - M) && (E = u || Math.abs(G - p) / Math.abs(K - M));
                    t = (q - G) / E + K;
                    n = b["plot" + (a ? "Width" : "Height")] / E
                };
                f();
                e = t;
                e < L.min ? (e = L.min, y = !0) : e + n > L.max && (e =
                    L.max - n, y = !0);
                y ? (G -= .8 * (G - l[k][0]), m || (p -= .8 * (p - l[k][1])), f()) : l[k] = [G, p];
                w || (x[k] = t - q, x[r] = n);
                x = w ? 1 / E : E;
                g[r] = n;
                g[k] = e;
                h[w ? a ? "scaleY" : "scaleX" : "scale" + d] = E;
                h["translate" + d] = x * q + (G - x * K)
            },
            pinch: function (a) {
                var r = this,
                    q = r.chart,
                    h = r.pinchDown,
                    g = a.touches,
                    x = g.length,
                    l = r.lastValidTouch,
                    u = r.hasZoom,
                    b = r.selectionMarker,
                    k = {},
                    d = 1 === x && (r.inClass(a.target, "highcharts-tracker") && q.runTrackerClick || r.runChartClick),
                    c = {};
                1 < x && (r.initiated = !0);
                u && r.initiated && !d && a.preventDefault();
                A(g, function (a) {
                    return r.normalize(a)
                });
                "touchstart" === a.type ? (B(g, function (a, b) {
                    h[b] = {
                        chartX: a.chartX,
                        chartY: a.chartY
                    }
                }), l.x = [h[0].chartX, h[1] && h[1].chartX], l.y = [h[0].chartY, h[1] && h[1].chartY], B(q.axes, function (a) {
                    if (a.zoomEnabled) {
                        var b = q.bounds[a.horiz ? "h" : "v"],
                            c = a.minPixelPadding,
                            d = a.toPixels(e(a.options.min, a.dataMin)),
                            k = a.toPixels(e(a.options.max, a.dataMax)),
                            g = Math.max(d, k);
                        b.min = Math.min(a.pos, Math.min(d, k) - c);
                        b.max = Math.max(a.pos + a.len, g + c)
                    }
                }), r.res = !0) : r.followTouchMove && 1 === x ? this.runPointActions(r.normalize(a)) : h.length && (b ||
                    (r.selectionMarker = b = C({
                        destroy: f,
                        touch: !0
                    }, q.plotBox)), r.pinchTranslate(h, g, k, b, c, l), r.hasPinched = u, r.scaleGroups(k, c), r.res && (r.res = !1, this.reset(!1, 0)))
            },
            touch: function (f, r) {
                var q = this.chart,
                    h, g;
                if (q.index !== a.hoverChartIndex) this.onContainerMouseLeave({
                    relatedTarget: !0
                });
                a.hoverChartIndex = q.index;
                1 === f.touches.length ? (f = this.normalize(f), (g = q.isInsidePlot(f.chartX - q.plotLeft, f.chartY - q.plotTop)) && !q.openMenu ? (r && this.runPointActions(f), "touchmove" === f.type && (r = this.pinchDown, h = r[0] ? 4 <= Math.sqrt(Math.pow(r[0].chartX -
                    f.chartX, 2) + Math.pow(r[0].chartY - f.chartY, 2)) : !1), e(h, !0) && this.pinch(f)) : r && this.reset()) : 2 === f.touches.length && this.pinch(f)
            },
            onContainerTouchStart: function (a) {
                this.zoomOption(a);
                this.touch(a, !0)
            },
            onContainerTouchMove: function (a) {
                this.touch(a)
            },
            onDocumentTouchEnd: function (e) {
                z[a.hoverChartIndex] && z[a.hoverChartIndex].pointer.drop(e)
            }
        })
    })(J);
    (function (a) {
        var z = a.addEvent,
            B = a.charts,
            C = a.css,
            A = a.doc,
            f = a.extend,
            e = a.noop,
            t = a.Pointer,
            r = a.removeEvent,
            q = a.win,
            h = a.wrap;
        if (!a.hasTouch && (q.PointerEvent || q.MSPointerEvent)) {
            var g = {},
                x = !!q.PointerEvent,
                l = function () {
                    var b = [];
                    b.item = function (a) {
                        return this[a]
                    };
                    a.objectEach(g, function (a) {
                        b.push({
                            pageX: a.pageX,
                            pageY: a.pageY,
                            target: a.target
                        })
                    });
                    return b
                },
                u = function (b, k, d, c) {
                    "touch" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_TOUCH || !B[a.hoverChartIndex] || (c(b), c = B[a.hoverChartIndex].pointer, c[k]({
                        type: d,
                        target: b.currentTarget,
                        preventDefault: e,
                        touches: l()
                    }))
                };
            f(t.prototype, {
                onContainerPointerDown: function (a) {
                    u(a, "onContainerTouchStart", "touchstart", function (a) {
                        g[a.pointerId] = {
                            pageX: a.pageX,
                            pageY: a.pageY,
                            target: a.currentTarget
                        }
                    })
                },
                onContainerPointerMove: function (a) {
                    u(a, "onContainerTouchMove", "touchmove", function (a) {
                        g[a.pointerId] = {
                            pageX: a.pageX,
                            pageY: a.pageY
                        };
                        g[a.pointerId].target || (g[a.pointerId].target = a.currentTarget)
                    })
                },
                onDocumentPointerUp: function (a) {
                    u(a, "onDocumentTouchEnd", "touchend", function (a) {
                        delete g[a.pointerId]
                    })
                },
                batchMSEvents: function (a) {
                    a(this.chart.container, x ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                    a(this.chart.container, x ? "pointermove" :
                        "MSPointerMove", this.onContainerPointerMove);
                    a(A, x ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                }
            });
            h(t.prototype, "init", function (a, k, d) {
                a.call(this, k, d);
                this.hasZoom && C(k.container, {
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                })
            });
            h(t.prototype, "setDOMEvents", function (a) {
                a.apply(this);
                (this.hasZoom || this.followTouchMove) && this.batchMSEvents(z)
            });
            h(t.prototype, "destroy", function (a) {
                this.batchMSEvents(r);
                a.call(this)
            })
        }
    })(J);
    (function (a) {
        var z, B = a.addEvent,
            C = a.css,
            A = a.discardElement,
            f = a.defined,
            e = a.each,
            t = a.isFirefox,
            r = a.marginNames,
            q = a.merge,
            h = a.pick,
            g = a.setAnimation,
            x = a.stableSort,
            l = a.win,
            u = a.wrap;
        z = a.Legend = function (a, k) {
            this.init(a, k)
        };
        z.prototype = {
            init: function (a, k) {
                this.chart = a;
                this.setOptions(k);
                k.enabled && (this.render(), B(this.chart, "endResize", function () {
                    this.legend.positionCheckboxes()
                }))
            },
            setOptions: function (a) {
                var b = h(a.padding, 8);
                this.options = a;
                this.itemStyle = a.itemStyle;
                this.itemHiddenStyle = q(this.itemStyle, a.itemHiddenStyle);
                this.itemMarginTop = a.itemMarginTop || 0;
                this.padding =
                    b;
                this.initialItemY = b - 5;
                this.itemHeight = this.maxItemWidth = 0;
                this.symbolWidth = h(a.symbolWidth, 16);
                this.pages = []
            },
            update: function (a, k) {
                var b = this.chart;
                this.setOptions(q(!0, this.options, a));
                this.destroy();
                b.isDirtyLegend = b.isDirtyBox = !0;
                h(k, !0) && b.redraw()
            },
            colorizeItem: function (b, k) {
                b.legendGroup[k ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                var d = this.options,
                    c = b.legendItem,
                    g = b.legendLine,
                    e = b.legendSymbol,
                    f = this.itemHiddenStyle.color,
                    d = k ? d.itemStyle.color : f,
                    h = k ? b.color || f : f,
                    l = b.options &&
                    b.options.marker,
                    w = {
                        fill: h
                    };
                c && c.css({
                    fill: d,
                    color: d
                });
                g && g.attr({
                    stroke: h
                });
                e && (l && e.isMarker && (w = b.pointAttribs(), k || a.objectEach(w, function (a, b) {
                    w[b] = f
                })), e.attr(w))
            },
            positionItem: function (a) {
                var b = this.options,
                    d = b.symbolPadding,
                    b = !b.rtl,
                    c = a._legendItemPos,
                    g = c[0],
                    c = c[1],
                    e = a.checkbox;
                (a = a.legendGroup) && a.element && a.translate(b ? g : this.legendWidth - g - 2 * d - 4, c);
                e && (e.x = g, e.y = c)
            },
            destroyItem: function (a) {
                var b = a.checkbox;
                e(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function (b) {
                    a[b] && (a[b] =
                        a[b].destroy())
                });
                b && A(a.checkbox)
            },
            destroy: function () {
                function a(a) {
                    this[a] && (this[a] = this[a].destroy())
                }
                e(this.getAllItems(), function (b) {
                    e(["legendItem", "legendGroup"], a, b)
                });
                e("clipRect up down pager nav box title group".split(" "), a, this);
                this.display = null
            },
            positionCheckboxes: function (a) {
                var b = this.group && this.group.alignAttr,
                    d, c = this.clipHeight || this.legendHeight,
                    g = this.titleHeight;
                b && (d = b.translateY, e(this.allItems, function (k) {
                    var e = k.checkbox,
                        f;
                    e && (f = d + g + e.y + (a || 0) + 3, C(e, {
                        left: b.translateX +
                            k.checkboxOffset + e.x - 20 + "px",
                        top: f + "px",
                        display: f > d - 6 && f < d + c - 6 ? "" : "none"
                    }))
                }))
            },
            renderTitle: function () {
                var a = this.options,
                    g = this.padding,
                    d = a.title,
                    c = 0;
                d.text && (this.title || (this.title = this.chart.renderer.label(d.text, g - 3, g - 4, null, null, null, a.useHTML, null, "legend-title").attr({
                    zIndex: 1
                }).css(d.style).add(this.group)), a = this.title.getBBox(), c = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
                    translateY: c
                }));
                this.titleHeight = c
            },
            setText: function (b) {
                var g = this.options;
                b.legendItem.attr({
                    text: g.labelFormat ?
                        a.format(g.labelFormat, b) : g.labelFormatter.call(b)
                })
            },
            renderItem: function (a) {
                var b = this.chart,
                    d = b.renderer,
                    c = this.options,
                    g = "horizontal" === c.layout,
                    e = this.symbolWidth,
                    f = c.symbolPadding,
                    l = this.itemStyle,
                    u = this.itemHiddenStyle,
                    w = this.padding,
                    x = g ? h(c.itemDistance, 20) : 0,
                    m = !c.rtl,
                    K = c.width,
                    G = c.itemMarginBottom || 0,
                    r = this.itemMarginTop,
                    p = a.legendItem,
                    y = !a.series,
                    t = !y && a.series.drawLegendSymbol ? a.series : a,
                    F = t.options,
                    F = this.createCheckboxForItem && F && F.showCheckbox,
                    A = c.useHTML,
                    z = a.options.className;
                p || (a.legendGroup =
                    d.g("legend-item").addClass("highcharts-" + t.type + "-series highcharts-color-" + a.colorIndex + (z ? " " + z : "") + (y ? " highcharts-series-" + a.index : "")).attr({
                        zIndex: 1
                    }).add(this.scrollGroup), a.legendItem = p = d.text("", m ? e + f : -f, this.baseline || 0, A).css(q(a.visible ? l : u)).attr({
                        align: m ? "left" : "right",
                        zIndex: 2
                    }).add(a.legendGroup), this.baseline || (l = l.fontSize, this.fontMetrics = d.fontMetrics(l, p), this.baseline = this.fontMetrics.f + 3 + r, p.attr("y", this.baseline)), this.symbolHeight = c.symbolHeight || this.fontMetrics.f, t.drawLegendSymbol(this,
                        a), this.setItemEvents && this.setItemEvents(a, p, A), F && this.createCheckboxForItem(a));
                this.colorizeItem(a, a.visible);
                this.setText(a);
                d = p.getBBox();
                e = a.checkboxOffset = c.itemWidth || a.legendItemWidth || e + f + d.width + x + (F ? 20 : 0);
                this.itemHeight = f = Math.round(a.legendItemHeight || d.height || this.symbolHeight);
                g && this.itemX - w + e > (K || b.spacingBox.width - 2 * w - c.x) && (this.itemX = w, this.itemY += r + this.lastLineHeight + G, this.lastLineHeight = 0);
                this.maxItemWidth = Math.max(this.maxItemWidth, e);
                this.lastItemY = r + this.itemY + G;
                this.lastLineHeight =
                    Math.max(f, this.lastLineHeight);
                a._legendItemPos = [this.itemX, this.itemY];
                g ? this.itemX += e : (this.itemY += r + f + G, this.lastLineHeight = f);
                this.offsetWidth = K || Math.max((g ? this.itemX - w - x : e) + w, this.offsetWidth)
            },
            getAllItems: function () {
                var a = [];
                e(this.chart.series, function (b) {
                    var d = b && b.options;
                    b && h(d.showInLegend, f(d.linkedTo) ? !1 : void 0, !0) && (a = a.concat(b.legendItems || ("point" === d.legendType ? b.data : b)))
                });
                return a
            },
            adjustMargins: function (a, g) {
                var b = this.chart,
                    c = this.options,
                    k = c.align.charAt(0) + c.verticalAlign.charAt(0) +
                    c.layout.charAt(0);
                c.floating || e([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function (d, e) {
                    d.test(k) && !f(a[e]) && (b[r[e]] = Math.max(b[r[e]], b.legend[(e + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][e] * c[e % 2 ? "x" : "y"] + h(c.margin, 12) + g[e]))
                })
            },
            render: function () {
                var a = this,
                    g = a.chart,
                    d = g.renderer,
                    c = a.group,
                    f, h, n, l, u = a.box,
                    w = a.options,
                    r = a.padding;
                a.itemX = r;
                a.itemY = a.initialItemY;
                a.offsetWidth = 0;
                a.lastItemY = 0;
                c || (a.group = c = d.g("legend").attr({
                        zIndex: 7
                    }).add(), a.contentGroup = d.g().attr({
                        zIndex: 1
                    }).add(c),
                    a.scrollGroup = d.g().add(a.contentGroup));
                a.renderTitle();
                f = a.getAllItems();
                x(f, function (a, b) {
                    return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
                });
                w.reversed && f.reverse();
                a.allItems = f;
                a.display = h = !!f.length;
                a.lastLineHeight = 0;
                e(f, function (b) {
                    a.renderItem(b)
                });
                n = (w.width || a.offsetWidth) + r;
                l = a.lastItemY + a.lastLineHeight + a.titleHeight;
                l = a.handleOverflow(l);
                l += r;
                u || (a.box = u = d.rect().addClass("highcharts-legend-box").attr({
                    r: w.borderRadius
                }).add(c), u.isNew = !0);
                u.attr({
                    stroke: w.borderColor,
                    "stroke-width": w.borderWidth || 0,
                    fill: w.backgroundColor || "none"
                }).shadow(w.shadow);
                0 < n && 0 < l && (u[u.isNew ? "attr" : "animate"](u.crisp({
                    x: 0,
                    y: 0,
                    width: n,
                    height: l
                }, u.strokeWidth())), u.isNew = !1);
                u[h ? "show" : "hide"]();
                a.legendWidth = n;
                a.legendHeight = l;
                e(f, function (b) {
                    a.positionItem(b)
                });
                h && c.align(q(w, {
                    width: n,
                    height: l
                }), !0, "spacingBox");
                g.isResizing || this.positionCheckboxes()
            },
            handleOverflow: function (a) {
                var b = this,
                    d = this.chart,
                    c = d.renderer,
                    g = this.options,
                    f = g.y,
                    n = this.padding,
                    d = d.spacingBox.height + ("top" === g.verticalAlign ?
                        -f : f) - n,
                    f = g.maxHeight,
                    l, u = this.clipRect,
                    w = g.navigation,
                    x = h(w.animation, !0),
                    m = w.arrowSize || 12,
                    K = this.nav,
                    G = this.pages,
                    r, p = this.allItems,
                    y = function (a) {
                        "number" === typeof a ? u.attr({
                            height: a
                        }) : u && (b.clipRect = u.destroy(), b.contentGroup.clip());
                        b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + n + "px,9999px," + (n + a) + "px,0)" : "auto")
                    };
                "horizontal" !== g.layout || "middle" === g.verticalAlign || g.floating || (d /= 2);
                f && (d = Math.min(d, f));
                G.length = 0;
                a > d && !1 !== w.enabled ? (this.clipHeight = l = Math.max(d - 20 - this.titleHeight -
                    n, 0), this.currentPage = h(this.currentPage, 1), this.fullHeight = a, e(p, function (a, b) {
                    var c = a._legendItemPos[1];
                    a = Math.round(a.legendItem.getBBox().height);
                    var d = G.length;
                    if (!d || c - G[d - 1] > l && (r || c) !== G[d - 1]) G.push(r || c), d++;
                    b === p.length - 1 && c + a - G[d - 1] > l && G.push(c);
                    c !== r && (r = c)
                }), u || (u = b.clipRect = c.clipRect(0, n, 9999, 0), b.contentGroup.clip(u)), y(l), K || (this.nav = K = c.g().attr({
                    zIndex: 1
                }).add(this.group), this.up = c.symbol("triangle", 0, 0, m, m).on("click", function () {
                    b.scroll(-1, x)
                }).add(K), this.pager = c.text("", 15,
                    10).addClass("highcharts-legend-navigation").css(w.style).add(K), this.down = c.symbol("triangle-down", 0, 0, m, m).on("click", function () {
                    b.scroll(1, x)
                }).add(K)), b.scroll(0), a = d) : K && (y(), this.nav = K.destroy(), this.scrollGroup.attr({
                    translateY: 1
                }), this.clipHeight = 0);
                return a
            },
            scroll: function (a, e) {
                var b = this.pages,
                    c = b.length;
                a = this.currentPage + a;
                var k = this.clipHeight,
                    f = this.options.navigation,
                    n = this.pager,
                    l = this.padding;
                a > c && (a = c);
                0 < a && (void 0 !== e && g(e, this.chart), this.nav.attr({
                        translateX: l,
                        translateY: k + this.padding +
                            7 + this.titleHeight,
                        visibility: "visible"
                    }), this.up.attr({
                        "class": 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                    }), n.attr({
                        text: a + "/" + c
                    }), this.down.attr({
                        x: 18 + this.pager.getBBox().width,
                        "class": a === c ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                    }), this.up.attr({
                        fill: 1 === a ? f.inactiveColor : f.activeColor
                    }).css({
                        cursor: 1 === a ? "default" : "pointer"
                    }), this.down.attr({
                        fill: a === c ? f.inactiveColor : f.activeColor
                    }).css({
                        cursor: a === c ? "default" : "pointer"
                    }), e = -b[a - 1] + this.initialItemY,
                    this.scrollGroup.animate({
                        translateY: e
                    }), this.currentPage = a, this.positionCheckboxes(e))
            }
        };
        a.LegendSymbolMixin = {
            drawRectangle: function (a, g) {
                var b = a.symbolHeight,
                    c = a.options.squareSymbol;
                g.legendSymbol = this.chart.renderer.rect(c ? (a.symbolWidth - b) / 2 : 0, a.baseline - b + 1, c ? b : a.symbolWidth, b, h(a.options.symbolRadius, b / 2)).addClass("highcharts-point").attr({
                    zIndex: 3
                }).add(g.legendGroup)
            },
            drawLineMarker: function (a) {
                var b = this.options,
                    d = b.marker,
                    c = a.symbolWidth,
                    g = a.symbolHeight,
                    e = g / 2,
                    f = this.chart.renderer,
                    l =
                    this.legendGroup;
                a = a.baseline - Math.round(.3 * a.fontMetrics.b);
                var u;
                u = {
                    "stroke-width": b.lineWidth || 0
                };
                b.dashStyle && (u.dashstyle = b.dashStyle);
                this.legendLine = f.path(["M", 0, a, "L", c, a]).addClass("highcharts-graph").attr(u).add(l);
                d && !1 !== d.enabled && (b = Math.min(h(d.radius, e), e), 0 === this.symbol.indexOf("url") && (d = q(d, {
                    width: g,
                    height: g
                }), b = 0), this.legendSymbol = d = f.symbol(this.symbol, c / 2 - b, a - b, 2 * b, 2 * b, d).addClass("highcharts-point").add(l), d.isMarker = !0)
            }
        };
        (/Trident\/7\.0/.test(l.navigator.userAgent) || t) &&
        u(z.prototype, "positionItem", function (a, g) {
            var b = this,
                c = function () {
                    g._legendItemPos && a.call(b, g)
                };
            c();
            setTimeout(c)
        })
    })(J);
    (function (a) {
        var z = a.addEvent,
            B = a.animate,
            C = a.animObject,
            A = a.attr,
            f = a.doc,
            e = a.Axis,
            t = a.createElement,
            r = a.defaultOptions,
            q = a.discardElement,
            h = a.charts,
            g = a.css,
            x = a.defined,
            l = a.each,
            u = a.extend,
            b = a.find,
            k = a.fireEvent,
            d = a.getStyle,
            c = a.grep,
            D = a.isNumber,
            H = a.isObject,
            n = a.isString,
            I = a.Legend,
            E = a.marginNames,
            w = a.merge,
            L = a.objectEach,
            m = a.Pointer,
            K = a.pick,
            G = a.pInt,
            M = a.removeEvent,
            p = a.seriesTypes,
            y = a.splat,
            O = a.svg,
            F = a.syncTimeout,
            N = a.win,
            R = a.Renderer,
            P = a.Chart = function () {
                this.getArgs.apply(this, arguments)
            };
        a.chart = function (a, b, c) {
            return new P(a, b, c)
        };
        u(P.prototype, {
            callbacks: [],
            getArgs: function () {
                var a = [].slice.call(arguments);
                if (n(a[0]) || a[0].nodeName) this.renderTo = a.shift();
                this.init(a[0], a[1])
            },
            init: function (b, c) {
                var d, g, m = b.series,
                    e = b.plotOptions || {};
                b.series = null;
                d = w(r, b);
                for (g in d.plotOptions) d.plotOptions[g].tooltip = e[g] && w(e[g].tooltip) || void 0;
                d.tooltip.userOptions = b.chart && b.chart.forExport &&
                    b.tooltip.userOptions || b.tooltip;
                d.series = b.series = m;
                this.userOptions = b;
                b = d.chart;
                g = b.events;
                this.margin = [];
                this.spacing = [];
                this.bounds = {
                    h: {},
                    v: {}
                };
                this.callback = c;
                this.isResizing = 0;
                this.options = d;
                this.axes = [];
                this.series = [];
                this.hasCartesianSeries = b.showAxes;
                var k = this;
                k.index = h.length;
                h.push(k);
                a.chartCount++;
                g && L(g, function (a, b) {
                    z(k, b, a)
                });
                k.xAxis = [];
                k.yAxis = [];
                k.pointCount = k.colorCounter = k.symbolCounter = 0;
                k.firstRender()
            },
            initSeries: function (b) {
                var c = this.options.chart;
                (c = p[b.type || c.type || c.defaultSeriesType]) ||
                a.error(17, !0);
                c = new c;
                c.init(this, b);
                return c
            },
            orderSeries: function (a) {
                var b = this.series;
                for (a = a || 0; a < b.length; a++) b[a] && (b[a].index = a, b[a].name = b[a].name || "Series " + (b[a].index + 1))
            },
            isInsidePlot: function (a, b, c) {
                var d = c ? b : a;
                a = c ? a : b;
                return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight
            },
            redraw: function (b) {
                var c = this.axes,
                    d = this.series,
                    g = this.pointer,
                    m = this.legend,
                    e = this.isDirtyLegend,
                    f, p, n = this.hasCartesianSeries,
                    h = this.isDirtyBox,
                    v, G = this.renderer,
                    w = G.isHidden(),
                    y = [];
                this.setResponsive && this.setResponsive(!1);
                a.setAnimation(b, this);
                w && this.temporaryDisplay();
                this.layOutTitles();
                for (b = d.length; b--;)
                    if (v = d[b], v.options.stacking && (f = !0, v.isDirty)) {
                        p = !0;
                        break
                    }
                if (p)
                    for (b = d.length; b--;) v = d[b], v.options.stacking && (v.isDirty = !0);
                l(d, function (a) {
                    a.isDirty && "point" === a.options.legendType && (a.updateTotals && a.updateTotals(), e = !0);
                    a.isDirtyData && k(a, "updatedData")
                });
                e && m.options.enabled && (m.render(), this.isDirtyLegend = !1);
                f && this.getStacks();
                n && l(c, function (a) {
                    a.updateNames();
                    a.setScale()
                });
                this.getMargins();
                n && (l(c,
                    function (a) {
                        a.isDirty && (h = !0)
                    }), l(c, function (a) {
                    var b = a.min + "," + a.max;
                    a.extKey !== b && (a.extKey = b, y.push(function () {
                        k(a, "afterSetExtremes", u(a.eventArgs, a.getExtremes()));
                        delete a.eventArgs
                    }));
                    (h || f) && a.redraw()
                }));
                h && this.drawChartBox();
                k(this, "predraw");
                l(d, function (a) {
                    (h || a.isDirty) && a.visible && a.redraw();
                    a.isDirtyData = !1
                });
                g && g.reset(!0);
                G.draw();
                k(this, "redraw");
                k(this, "render");
                w && this.temporaryDisplay(!0);
                l(y, function (a) {
                    a.call()
                })
            },
            get: function (a) {
                function c(b) {
                    return b.id === a || b.options && b.options.id ===
                        a
                }
                var d, g = this.series,
                    m;
                d = b(this.axes, c) || b(this.series, c);
                for (m = 0; !d && m < g.length; m++) d = b(g[m].points || [], c);
                return d
            },
            getAxes: function () {
                var a = this,
                    b = this.options,
                    c = b.xAxis = y(b.xAxis || {}),
                    b = b.yAxis = y(b.yAxis || {});
                l(c, function (a, b) {
                    a.index = b;
                    a.isX = !0
                });
                l(b, function (a, b) {
                    a.index = b
                });
                c = c.concat(b);
                l(c, function (b) {
                    new e(a, b)
                })
            },
            getSelectedPoints: function () {
                var a = [];
                l(this.series, function (b) {
                    a = a.concat(c(b.data || [], function (a) {
                        return a.selected
                    }))
                });
                return a
            },
            getSelectedSeries: function () {
                return c(this.series,
                    function (a) {
                        return a.selected
                    })
            },
            setTitle: function (a, b, c) {
                var d = this,
                    g = d.options,
                    m;
                m = g.title = w({
                    style: {
                        color: "#333333",
                        fontSize: g.isStock ? "16px" : "18px"
                    }
                }, g.title, a);
                g = g.subtitle = w({
                    style: {
                        color: "#666666"
                    }
                }, g.subtitle, b);
                l([
                    ["title", a, m],
                    ["subtitle", b, g]
                ], function (a, b) {
                    var c = a[0],
                        g = d[c],
                        m = a[1];
                    a = a[2];
                    g && m && (d[c] = g = g.destroy());
                    a && a.text && !g && (d[c] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
                        align: a.align,
                        "class": "highcharts-" + c,
                        zIndex: a.zIndex || 4
                    }).add(), d[c].update = function (a) {
                        d.setTitle(!b && a, b &&
                            a)
                    }, d[c].css(a.style))
                });
                d.layOutTitles(c)
            },
            layOutTitles: function (a) {
                var b = 0,
                    c, d = this.renderer,
                    g = this.spacingBox;
                l(["title", "subtitle"], function (a) {
                    var c = this[a],
                        m = this.options[a];
                    a = "title" === a ? -3 : m.verticalAlign ? 0 : b + 2;
                    var e;
                    c && (e = m.style.fontSize, e = d.fontMetrics(e, c).b, c.css({
                        width: (m.width || g.width + m.widthAdjust) + "px"
                    }).align(u({
                        y: a + e
                    }, m), !1, "spacingBox"), m.floating || m.verticalAlign || (b = Math.ceil(b + c.getBBox(m.useHTML).height)))
                }, this);
                c = this.titleOffset !== b;
                this.titleOffset = b;
                !this.isDirtyBox &&
                    c && (this.isDirtyBox = c, this.hasRendered && K(a, !0) && this.isDirtyBox && this.redraw())
            },
            getChartSize: function () {
                var b = this.options.chart,
                    c = b.width,
                    b = b.height,
                    g = this.renderTo;
                x(c) || (this.containerWidth = d(g, "width"));
                x(b) || (this.containerHeight = d(g, "height"));
                this.chartWidth = Math.max(0, c || this.containerWidth || 600);
                this.chartHeight = Math.max(0, a.relativeLength(b, this.chartWidth) || this.containerHeight || 400)
            },
            temporaryDisplay: function (b) {
                var c = this.renderTo;
                if (b)
                    for (; c && c.style;) c.hcOrigStyle && (a.css(c, c.hcOrigStyle),
                        delete c.hcOrigStyle), c = c.parentNode;
                else
                    for (; c && c.style;) "none" === d(c, "display", !1) && (c.hcOrigStyle = {
                        display: c.style.display,
                        height: c.style.height,
                        overflow: c.style.overflow
                    }, a.css(c, {
                        display: "block",
                        height: 0,
                        overflow: "hidden"
                    }), c.style.setProperty && c.style.setProperty("display", "block", "important")), c = c.parentNode
            },
            setClassName: function (a) {
                this.container.className = "highcharts-container " + (a || "")
            },
            getContainer: function () {
                var b, c = this.options,
                    d = c.chart,
                    g, m;
                b = this.renderTo;
                var e = a.uniqueKey(),
                    k;
                b ||
                    (this.renderTo = b = d.renderTo);
                n(b) && (this.renderTo = b = f.getElementById(b));
                b || a.error(13, !0);
                g = G(A(b, "data-highcharts-chart"));
                D(g) && h[g] && h[g].hasRendered && h[g].destroy();
                A(b, "data-highcharts-chart", this.index);
                b.innerHTML = "";
                d.skipClone || b.offsetWidth || this.temporaryDisplay();
                this.getChartSize();
                g = this.chartWidth;
                m = this.chartHeight;
                k = u({
                    position: "relative",
                    overflow: "hidden",
                    width: g + "px",
                    height: m + "px",
                    textAlign: "left",
                    lineHeight: "normal",
                    zIndex: 0,
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                }, d.style);
                this.container = b = t("div", {
                    id: e
                }, k, b);
                this._cursor = b.style.cursor;
                this.renderer = new(a[d.renderer] || R)(b, g, m, null, d.forExport, c.exporting && c.exporting.allowHTML);
                this.setClassName(d.className);
                this.renderer.setStyle(d.style);
                this.renderer.chartIndex = this.index
            },
            getMargins: function (a) {
                var b = this.spacing,
                    c = this.margin,
                    d = this.titleOffset;
                this.resetMargins();
                d && !x(c[0]) && (this.plotTop = Math.max(this.plotTop, d + this.options.title.margin + b[0]));
                this.legend.display && this.legend.adjustMargins(c, b);
                this.extraMargin &&
                    (this[this.extraMargin.type] = (this[this.extraMargin.type] || 0) + this.extraMargin.value);
                this.extraTopMargin && (this.plotTop += this.extraTopMargin);
                a || this.getAxisMargins()
            },
            getAxisMargins: function () {
                var a = this,
                    b = a.axisOffset = [0, 0, 0, 0],
                    c = a.margin;
                a.hasCartesianSeries && l(a.axes, function (a) {
                    a.visible && a.getOffset()
                });
                l(E, function (d, g) {
                    x(c[g]) || (a[d] += b[g])
                });
                a.setChartSize()
            },
            reflow: function (a) {
                var b = this,
                    c = b.options.chart,
                    g = b.renderTo,
                    m = x(c.width),
                    e = c.width || d(g, "width"),
                    c = c.height || d(g, "height"),
                    g = a ? a.target :
                    N;
                if (!m && !b.isPrinting && e && c && (g === N || g === f)) {
                    if (e !== b.containerWidth || c !== b.containerHeight) clearTimeout(b.reflowTimeout), b.reflowTimeout = F(function () {
                        b.container && b.setSize(void 0, void 0, !1)
                    }, a ? 100 : 0);
                    b.containerWidth = e;
                    b.containerHeight = c
                }
            },
            initReflow: function () {
                var a = this,
                    b;
                b = z(N, "resize", function (b) {
                    a.reflow(b)
                });
                z(a, "destroy", b)
            },
            setSize: function (b, c, d) {
                var m = this,
                    e = m.renderer;
                m.isResizing += 1;
                a.setAnimation(d, m);
                m.oldChartHeight = m.chartHeight;
                m.oldChartWidth = m.chartWidth;
                void 0 !== b && (m.options.chart.width =
                    b);
                void 0 !== c && (m.options.chart.height = c);
                m.getChartSize();
                b = e.globalAnimation;
                (b ? B : g)(m.container, {
                    width: m.chartWidth + "px",
                    height: m.chartHeight + "px"
                }, b);
                m.setChartSize(!0);
                e.setSize(m.chartWidth, m.chartHeight, d);
                l(m.axes, function (a) {
                    a.isDirty = !0;
                    a.setScale()
                });
                m.isDirtyLegend = !0;
                m.isDirtyBox = !0;
                m.layOutTitles();
                m.getMargins();
                m.redraw(d);
                m.oldChartHeight = null;
                k(m, "resize");
                F(function () {
                    m && k(m, "endResize", null, function () {
                        --m.isResizing
                    })
                }, C(b).duration)
            },
            setChartSize: function (a) {
                var b = this.inverted,
                    c = this.renderer,
                    d = this.chartWidth,
                    g = this.chartHeight,
                    m = this.options.chart,
                    e = this.spacing,
                    k = this.clipOffset,
                    f, p, n, h;
                this.plotLeft = f = Math.round(this.plotLeft);
                this.plotTop = p = Math.round(this.plotTop);
                this.plotWidth = n = Math.max(0, Math.round(d - f - this.marginRight));
                this.plotHeight = h = Math.max(0, Math.round(g - p - this.marginBottom));
                this.plotSizeX = b ? h : n;
                this.plotSizeY = b ? n : h;
                this.plotBorderWidth = m.plotBorderWidth || 0;
                this.spacingBox = c.spacingBox = {
                    x: e[3],
                    y: e[0],
                    width: d - e[3] - e[1],
                    height: g - e[0] - e[2]
                };
                this.plotBox =
                    c.plotBox = {
                        x: f,
                        y: p,
                        width: n,
                        height: h
                    };
                d = 2 * Math.floor(this.plotBorderWidth / 2);
                b = Math.ceil(Math.max(d, k[3]) / 2);
                c = Math.ceil(Math.max(d, k[0]) / 2);
                this.clipBox = {
                    x: b,
                    y: c,
                    width: Math.floor(this.plotSizeX - Math.max(d, k[1]) / 2 - b),
                    height: Math.max(0, Math.floor(this.plotSizeY - Math.max(d, k[2]) / 2 - c))
                };
                a || l(this.axes, function (a) {
                    a.setAxisSize();
                    a.setAxisTranslation()
                })
            },
            resetMargins: function () {
                var a = this,
                    b = a.options.chart;
                l(["margin", "spacing"], function (c) {
                    var d = b[c],
                        g = H(d) ? d : [d, d, d, d];
                    l(["Top", "Right", "Bottom", "Left"],
                        function (d, m) {
                            a[c][m] = K(b[c + d], g[m])
                        })
                });
                l(E, function (b, c) {
                    a[b] = K(a.margin[c], a.spacing[c])
                });
                a.axisOffset = [0, 0, 0, 0];
                a.clipOffset = [0, 0, 0, 0]
            },
            drawChartBox: function () {
                var a = this.options.chart,
                    b = this.renderer,
                    c = this.chartWidth,
                    d = this.chartHeight,
                    g = this.chartBackground,
                    m = this.plotBackground,
                    e = this.plotBorder,
                    k, f = this.plotBGImage,
                    p = a.backgroundColor,
                    n = a.plotBackgroundColor,
                    l = a.plotBackgroundImage,
                    h, G = this.plotLeft,
                    u = this.plotTop,
                    w = this.plotWidth,
                    y = this.plotHeight,
                    x = this.plotBox,
                    K = this.clipRect,
                    r = this.clipBox,
                    q = "animate";
                g || (this.chartBackground = g = b.rect().addClass("highcharts-background").add(), q = "attr");
                k = a.borderWidth || 0;
                h = k + (a.shadow ? 8 : 0);
                p = {
                    fill: p || "none"
                };
                if (k || g["stroke-width"]) p.stroke = a.borderColor, p["stroke-width"] = k;
                g.attr(p).shadow(a.shadow);
                g[q]({
                    x: h / 2,
                    y: h / 2,
                    width: c - h - k % 2,
                    height: d - h - k % 2,
                    r: a.borderRadius
                });
                q = "animate";
                m || (q = "attr", this.plotBackground = m = b.rect().addClass("highcharts-plot-background").add());
                m[q](x);
                m.attr({
                    fill: n || "none"
                }).shadow(a.plotShadow);
                l && (f ? f.animate(x) : this.plotBGImage =
                    b.image(l, G, u, w, y).add());
                K ? K.animate({
                    width: r.width,
                    height: r.height
                }) : this.clipRect = b.clipRect(r);
                q = "animate";
                e || (q = "attr", this.plotBorder = e = b.rect().addClass("highcharts-plot-border").attr({
                    zIndex: 1
                }).add());
                e.attr({
                    stroke: a.plotBorderColor,
                    "stroke-width": a.plotBorderWidth || 0,
                    fill: "none"
                });
                e[q](e.crisp({
                    x: G,
                    y: u,
                    width: w,
                    height: y
                }, -e.strokeWidth()));
                this.isDirtyBox = !1
            },
            propFromSeries: function () {
                var a = this,
                    b = a.options.chart,
                    c, d = a.options.series,
                    g, m;
                l(["inverted", "angular", "polar"], function (e) {
                    c = p[b.type ||
                        b.defaultSeriesType];
                    m = b[e] || c && c.prototype[e];
                    for (g = d && d.length; !m && g--;)(c = p[d[g].type]) && c.prototype[e] && (m = !0);
                    a[e] = m
                })
            },
            linkSeries: function () {
                var a = this,
                    b = a.series;
                l(b, function (a) {
                    a.linkedSeries.length = 0
                });
                l(b, function (b) {
                    var c = b.options.linkedTo;
                    n(c) && (c = ":previous" === c ? a.series[b.index - 1] : a.get(c)) && c.linkedParent !== b && (c.linkedSeries.push(b), b.linkedParent = c, b.visible = K(b.options.visible, c.options.visible, b.visible))
                })
            },
            renderSeries: function () {
                l(this.series, function (a) {
                    a.translate();
                    a.render()
                })
            },
            renderLabels: function () {
                var a = this,
                    b = a.options.labels;
                b.items && l(b.items, function (c) {
                    var d = u(b.style, c.style),
                        g = G(d.left) + a.plotLeft,
                        m = G(d.top) + a.plotTop + 12;
                    delete d.left;
                    delete d.top;
                    a.renderer.text(c.html, g, m).attr({
                        zIndex: 2
                    }).css(d).add()
                })
            },
            render: function () {
                var a = this.axes,
                    b = this.renderer,
                    c = this.options,
                    d, g, m;
                this.setTitle();
                this.legend = new I(this, c.legend);
                this.getStacks && this.getStacks();
                this.getMargins(!0);
                this.setChartSize();
                c = this.plotWidth;
                d = this.plotHeight -= 21;
                l(a, function (a) {
                    a.setScale()
                });
                this.getAxisMargins();
                g = 1.1 < c / this.plotWidth;
                m = 1.05 < d / this.plotHeight;
                if (g || m) l(a, function (a) {
                    (a.horiz && g || !a.horiz && m) && a.setTickInterval(!0)
                }), this.getMargins();
                this.drawChartBox();
                this.hasCartesianSeries && l(a, function (a) {
                    a.visible && a.render()
                });
                this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({
                    zIndex: 3
                }).add());
                this.renderSeries();
                this.renderLabels();
                this.addCredits();
                this.setResponsive && this.setResponsive();
                this.hasRendered = !0
            },
            addCredits: function (a) {
                var b = this;
                a = w(!0, this.options.credits,
                    a);
                a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
                    a.href && (N.location.href = a.href)
                }).attr({
                    align: a.position.align,
                    zIndex: 8
                }).css(a.style).add().align(a.position), this.credits.update = function (a) {
                    b.credits = b.credits.destroy();
                    b.addCredits(a)
                })
            },
            destroy: function () {
                var b = this,
                    c = b.axes,
                    d = b.series,
                    g = b.container,
                    m, e = g && g.parentNode;
                k(b, "destroy");
                b.renderer.forExport ? a.erase(h, b) : h[b.index] = void 0;
                a.chartCount--;
                b.renderTo.removeAttribute("data-highcharts-chart");
                M(b);
                for (m = c.length; m--;) c[m] = c[m].destroy();
                this.scroller && this.scroller.destroy && this.scroller.destroy();
                for (m = d.length; m--;) d[m] = d[m].destroy();
                l("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function (a) {
                    var c = b[a];
                    c && c.destroy && (b[a] = c.destroy())
                });
                g && (g.innerHTML = "", M(g), e && q(g));
                L(b, function (a, c) {
                    delete b[c]
                })
            },
            isReadyToRender: function () {
                var a =
                    this;
                return O || N != N.top || "complete" === f.readyState ? !0 : (f.attachEvent("onreadystatechange", function () {
                    f.detachEvent("onreadystatechange", a.firstRender);
                    "complete" === f.readyState && a.firstRender()
                }), !1)
            },
            firstRender: function () {
                var a = this,
                    b = a.options;
                if (a.isReadyToRender()) {
                    a.getContainer();
                    k(a, "init");
                    a.resetMargins();
                    a.setChartSize();
                    a.propFromSeries();
                    a.getAxes();
                    l(b.series || [], function (b) {
                        a.initSeries(b)
                    });
                    a.linkSeries();
                    k(a, "beforeRender");
                    m && (a.pointer = new m(a, b));
                    a.render();
                    if (!a.renderer.imgCount &&
                        a.onload) a.onload();
                    a.temporaryDisplay(!0)
                }
            },
            onload: function () {
                l([this.callback].concat(this.callbacks), function (a) {
                    a && void 0 !== this.index && a.apply(this, [this])
                }, this);
                k(this, "load");
                k(this, "render");
                x(this.index) && !1 !== this.options.chart.reflow && this.initReflow();
                this.onload = null
            }
        })
    })(J);
    (function (a) {
        var z, B = a.each,
            C = a.extend,
            A = a.erase,
            f = a.fireEvent,
            e = a.format,
            t = a.isArray,
            r = a.isNumber,
            q = a.pick,
            h = a.removeEvent;
        z = a.Point = function () {};
        z.prototype = {
            init: function (a, e, f) {
                this.series = a;
                this.color = a.color;
                this.applyOptions(e, f);
                a.options.colorByPoint ? (e = a.options.colors || a.chart.options.colors, this.color = this.color || e[a.colorCounter], e = e.length, f = a.colorCounter, a.colorCounter++, a.colorCounter === e && (a.colorCounter = 0)) : f = a.colorIndex;
                this.colorIndex = q(this.colorIndex, f);
                a.chart.pointCount++;
                return this
            },
            applyOptions: function (a, e) {
                var g = this.series,
                    f = g.options.pointValKey || g.pointValKey;
                a = z.prototype.optionsToObject.call(this, a);
                C(this, a);
                this.options = this.options ? C(this.options, a) : a;
                a.group && delete this.group;
                f && (this.y = this[f]);
                this.isNull = q(this.isValid && !this.isValid(), null === this.x || !r(this.y, !0));
                this.selected && (this.state = "select");
                "name" in this && void 0 === e && g.xAxis && g.xAxis.hasNames && (this.x = g.xAxis.nameToX(this));
                void 0 === this.x && g && (this.x = void 0 === e ? g.autoIncrement(this) : e);
                return this
            },
            optionsToObject: function (a) {
                var g = {},
                    e = this.series,
                    f = e.options.keys,
                    b = f || e.pointArrayMap || ["y"],
                    k = b.length,
                    d = 0,
                    c = 0;
                if (r(a) || null === a) g[b[0]] = a;
                else if (t(a))
                    for (!f && a.length > k && (e = typeof a[0], "string" === e ? g.name =
                            a[0] : "number" === e && (g.x = a[0]), d++); c < k;) f && void 0 === a[d] || (g[b[c]] = a[d]), d++, c++;
                else "object" === typeof a && (g = a, a.dataLabels && (e._hasPointLabels = !0), a.marker && (e._hasPointMarkers = !0));
                return g
            },
            getClassName: function () {
                return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone &&
                    this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
            },
            getZone: function () {
                var a = this.series,
                    e = a.zones,
                    a = a.zoneAxis || "y",
                    f = 0,
                    h;
                for (h = e[f]; this[a] >= h.value;) h = e[++f];
                h && h.color && !this.options.color && (this.color = h.color);
                return h
            },
            destroy: function () {
                var a = this.series.chart,
                    e = a.hoverPoints,
                    f;
                a.pointCount--;
                e && (this.setState(), A(e, this), e.length || (a.hoverPoints = null));
                if (this === a.hoverPoint) this.onMouseOut();
                if (this.graphic || this.dataLabel) h(this), this.destroyElements();
                this.legendItem &&
                    a.legend.destroyItem(this);
                for (f in this) this[f] = null
            },
            destroyElements: function () {
                for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], e, f = 6; f--;) e = a[f], this[e] && (this[e] = this[e].destroy())
            },
            getLabelConfig: function () {
                return {
                    x: this.category,
                    y: this.y,
                    color: this.color,
                    colorIndex: this.colorIndex,
                    key: this.name || this.category,
                    series: this.series,
                    point: this,
                    percentage: this.percentage,
                    total: this.total || this.stackTotal
                }
            },
            tooltipFormatter: function (a) {
                var g = this.series,
                    f = g.tooltipOptions,
                    h = q(f.valueDecimals, ""),
                    b = f.valuePrefix || "",
                    k = f.valueSuffix || "";
                B(g.pointArrayMap || ["y"], function (d) {
                    d = "{point." + d;
                    if (b || k) a = a.replace(d + "}", b + d + "}" + k);
                    a = a.replace(d + "}", d + ":,." + h + "f}")
                });
                return e(a, {
                    point: this,
                    series: this.series
                })
            },
            firePointEvent: function (a, e, h) {
                var g = this,
                    b = this.series.options;
                (b.point.events[a] || g.options && g.options.events && g.options.events[a]) && this.importEvents();
                "click" === a && b.allowPointSelect && (h = function (a) {
                    g.select && g.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
                });
                f(this,
                    a, e, h)
            },
            visible: !0
        }
    })(J);
    (function (a) {
        var z = a.addEvent,
            B = a.animObject,
            C = a.arrayMax,
            A = a.arrayMin,
            f = a.correctFloat,
            e = a.Date,
            t = a.defaultOptions,
            r = a.defaultPlotOptions,
            q = a.defined,
            h = a.each,
            g = a.erase,
            x = a.extend,
            l = a.fireEvent,
            u = a.grep,
            b = a.isArray,
            k = a.isNumber,
            d = a.isString,
            c = a.merge,
            D = a.objectEach,
            H = a.pick,
            n = a.removeEvent,
            I = a.splat,
            E = a.SVGElement,
            w = a.syncTimeout,
            L = a.win;
        a.Series = a.seriesType("line", null, {
            lineWidth: 2,
            allowPointSelect: !1,
            showCheckbox: !1,
            animation: {
                duration: 1E3
            },
            events: {},
            marker: {
                lineWidth: 0,
                lineColor: "#ffffff",
                radius: 4,
                states: {
                    hover: {
                        animation: {
                            duration: 50
                        },
                        enabled: !0,
                        radiusPlus: 2,
                        lineWidthPlus: 1
                    },
                    select: {
                        fillColor: "#cccccc",
                        lineColor: "#000000",
                        lineWidth: 2
                    }
                }
            },
            point: {
                events: {}
            },
            dataLabels: {
                align: "center",
                formatter: function () {
                    return null === this.y ? "" : a.numberFormat(this.y, -1)
                },
                style: {
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "contrast",
                    textOutline: "1px contrast"
                },
                verticalAlign: "bottom",
                x: 0,
                y: 0,
                padding: 5
            },
            cropThreshold: 300,
            pointRange: 0,
            softThreshold: !0,
            states: {
                hover: {
                    animation: {
                        duration: 50
                    },
                    lineWidthPlus: 1,
                    marker: {},
                    halo: {
                        size: 10,
                        opacity: .25
                    }
                },
                select: {
                    marker: {}
                }
            },
            stickyTracking: !0,
            turboThreshold: 1E3,
            findNearestPointBy: "x"
        }, {
            isCartesian: !0,
            pointClass: a.Point,
            sorted: !0,
            requireSorting: !0,
            directTouch: !1,
            axisTypes: ["xAxis", "yAxis"],
            colorCounter: 0,
            parallelArrays: ["x", "y"],
            coll: "series",
            init: function (a, b) {
                var c = this,
                    d, m = a.series,
                    g;
                c.chart = a;
                c.options = b = c.setOptions(b);
                c.linkedSeries = [];
                c.bindAxes();
                x(c, {
                    name: b.name,
                    state: "",
                    visible: !1 !== b.visible,
                    selected: !0 === b.selected
                });
                d = b.events;
                D(d, function (a,
                    b) {
                    z(c, b, a)
                });
                if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
                c.getColor();
                c.getSymbol();
                h(c.parallelArrays, function (a) {
                    c[a + "Data"] = []
                });
                c.setData(b.data, !1);
                c.isCartesian && (a.hasCartesianSeries = !0);
                m.length && (g = m[m.length - 1]);
                c._i = H(g && g._i, -1) + 1;
                a.orderSeries(this.insert(m))
            },
            insert: function (a) {
                var b = this.options.index,
                    c;
                if (k(b)) {
                    for (c = a.length; c--;)
                        if (b >= H(a[c].options.index, a[c]._i)) {
                            a.splice(c + 1, 0, this);
                            break
                        } - 1 === c && a.unshift(this);
                    c += 1
                } else a.push(this);
                return H(c, a.length - 1)
            },
            bindAxes: function () {
                var b = this,
                    c = b.options,
                    d = b.chart,
                    g;
                h(b.axisTypes || [], function (m) {
                    h(d[m], function (a) {
                        g = a.options;
                        if (c[m] === g.index || void 0 !== c[m] && c[m] === g.id || void 0 === c[m] && 0 === g.index) b.insert(a.series), b[m] = a, a.isDirty = !0
                    });
                    b[m] || b.optionalAxis === m || a.error(18, !0)
                })
            },
            updateParallelArrays: function (a, b) {
                var c = a.series,
                    d = arguments,
                    g = k(b) ? function (d) {
                        var g = "y" === d && c.toYData ? c.toYData(a) : a[d];
                        c[d + "Data"][b] = g
                    } : function (a) {
                        Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d,
                            2))
                    };
                h(c.parallelArrays, g)
            },
            autoIncrement: function () {
                var a = this.options,
                    b = this.xIncrement,
                    c, d = a.pointIntervalUnit,
                    b = H(b, a.pointStart, 0);
                this.pointInterval = c = H(this.pointInterval, a.pointInterval, 1);
                d && (a = new e(b), "day" === d ? a = +a[e.hcSetDate](a[e.hcGetDate]() + c) : "month" === d ? a = +a[e.hcSetMonth](a[e.hcGetMonth]() + c) : "year" === d && (a = +a[e.hcSetFullYear](a[e.hcGetFullYear]() + c)), c = a - b);
                this.xIncrement = b + c;
                return b
            },
            setOptions: function (a) {
                var b = this.chart,
                    d = b.options,
                    g = d.plotOptions,
                    e = (b.userOptions || {}).plotOptions || {},
                    m = g[this.type];
                this.userOptions = a;
                b = c(m, g.series, a);
                this.tooltipOptions = c(t.tooltip, t.plotOptions.series && t.plotOptions.series.tooltip, t.plotOptions[this.type].tooltip, d.tooltip.userOptions, g.series && g.series.tooltip, g[this.type].tooltip, a.tooltip);
                this.stickyTracking = H(a.stickyTracking, e[this.type] && e[this.type].stickyTracking, e.series && e.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : b.stickyTracking);
                null === m.marker && delete b.marker;
                this.zoneAxis = b.zoneAxis;
                a = this.zones =
                    (b.zones || []).slice();
                !b.negativeColor && !b.negativeFillColor || b.zones || a.push({
                    value: b[this.zoneAxis + "Threshold"] || b.threshold || 0,
                    className: "highcharts-negative",
                    color: b.negativeColor,
                    fillColor: b.negativeFillColor
                });
                a.length && q(a[a.length - 1].value) && a.push({
                    color: this.color,
                    fillColor: this.fillColor
                });
                return b
            },
            getCyclic: function (a, b, c) {
                var d, g = this.chart,
                    e = this.userOptions,
                    m = a + "Index",
                    f = a + "Counter",
                    k = c ? c.length : H(g.options.chart[a + "Count"], g[a + "Count"]);
                b || (d = H(e[m], e["_" + m]), q(d) || (g.series.length ||
                    (g[f] = 0), e["_" + m] = d = g[f] % k, g[f] += 1), c && (b = c[d]));
                void 0 !== d && (this[m] = d);
                this[a] = b
            },
            getColor: function () {
                this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || r[this.type].color, this.chart.options.colors)
            },
            getSymbol: function () {
                this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
            },
            drawLegendSymbol: a.LegendSymbolMixin.drawLineMarker,
            setData: function (c, g, e, f) {
                var m = this,
                    n = m.points,
                    l = n && n.length || 0,
                    w, u = m.options,
                    r = m.chart,
                    q = null,
                    x = m.xAxis,
                    G = u.turboThreshold,
                    E = this.xData,
                    K = this.yData,
                    t = (w = m.pointArrayMap) && w.length;
                c = c || [];
                w = c.length;
                g = H(g, !0);
                if (!1 !== f && w && l === w && !m.cropped && !m.hasGroupedData && m.visible) h(c, function (a, b) {
                    n[b].update && a !== u.data[b] && n[b].update(a, !1, null, !1)
                });
                else {
                    m.xIncrement = null;
                    m.colorCounter = 0;
                    h(this.parallelArrays, function (a) {
                        m[a + "Data"].length = 0
                    });
                    if (G && w > G) {
                        for (e = 0; null === q && e < w;) q = c[e], e++;
                        if (k(q))
                            for (e = 0; e < w; e++) E[e] = this.autoIncrement(), K[e] = c[e];
                        else if (b(q))
                            if (t)
                                for (e = 0; e < w; e++) q = c[e], E[e] = q[0], K[e] = q.slice(1,
                                    t + 1);
                            else
                                for (e = 0; e < w; e++) q = c[e], E[e] = q[0], K[e] = q[1];
                        else a.error(12)
                    } else
                        for (e = 0; e < w; e++) void 0 !== c[e] && (q = {
                            series: m
                        }, m.pointClass.prototype.applyOptions.apply(q, [c[e]]), m.updateParallelArrays(q, e));
                    d(K[0]) && a.error(14, !0);
                    m.data = [];
                    m.options.data = m.userOptions.data = c;
                    for (e = l; e--;) n[e] && n[e].destroy && n[e].destroy();
                    x && (x.minRange = x.userMinRange);
                    m.isDirty = r.isDirtyBox = !0;
                    m.isDirtyData = !!n;
                    e = !1
                }
                "point" === u.legendType && (this.processData(), this.generatePoints());
                g && r.redraw(e)
            },
            processData: function (b) {
                var c =
                    this.xData,
                    d = this.yData,
                    g = c.length,
                    e;
                e = 0;
                var m, f, k = this.xAxis,
                    n, h = this.options;
                n = h.cropThreshold;
                var l = this.getExtremesFromAll || h.getExtremesFromAll,
                    w = this.isCartesian,
                    h = k && k.val2lin,
                    u = k && k.isLog,
                    q, r;
                if (w && !this.isDirty && !k.isDirty && !this.yAxis.isDirty && !b) return !1;
                k && (b = k.getExtremes(), q = b.min, r = b.max);
                if (w && this.sorted && !l && (!n || g > n || this.forceCrop))
                    if (c[g - 1] < q || c[0] > r) c = [], d = [];
                    else if (c[0] < q || c[g - 1] > r) e = this.cropData(this.xData, this.yData, q, r), c = e.xData, d = e.yData, e = e.start, m = !0;
                for (n = c.length ||
                    1; --n;) g = u ? h(c[n]) - h(c[n - 1]) : c[n] - c[n - 1], 0 < g && (void 0 === f || g < f) ? f = g : 0 > g && this.requireSorting && a.error(15);
                this.cropped = m;
                this.cropStart = e;
                this.processedXData = c;
                this.processedYData = d;
                this.closestPointRange = f
            },
            cropData: function (a, b, c, d) {
                var g = a.length,
                    e = 0,
                    m = g,
                    f = H(this.cropShoulder, 1),
                    k;
                for (k = 0; k < g; k++)
                    if (a[k] >= c) {
                        e = Math.max(0, k - f);
                        break
                    }
                for (c = k; c < g; c++)
                    if (a[c] > d) {
                        m = c + f;
                        break
                    }
                return {
                    xData: a.slice(e, m),
                    yData: b.slice(e, m),
                    start: e,
                    end: m
                }
            },
            generatePoints: function () {
                var a = this.options,
                    b = a.data,
                    c = this.data,
                    d, g = this.processedXData,
                    e = this.processedYData,
                    f = this.pointClass,
                    k = g.length,
                    n = this.cropStart || 0,
                    h, l = this.hasGroupedData,
                    a = a.keys,
                    w, u = [],
                    q;
                c || l || (c = [], c.length = b.length, c = this.data = c);
                a && l && (this.options.keys = !1);
                for (q = 0; q < k; q++) h = n + q, l ? (w = (new f).init(this, [g[q]].concat(I(e[q]))), w.dataGroup = this.groupMap[q]) : (w = c[h]) || void 0 === b[h] || (c[h] = w = (new f).init(this, b[h], g[q])), w && (w.index = h, u[q] = w);
                this.options.keys = a;
                if (c && (k !== (d = c.length) || l))
                    for (q = 0; q < d; q++) q !== n || l || (q += k), c[q] && (c[q].destroyElements(),
                        c[q].plotX = void 0);
                this.data = c;
                this.points = u
            },
            getExtremes: function (a) {
                var c = this.yAxis,
                    d = this.processedXData,
                    g, e = [],
                    m = 0;
                g = this.xAxis.getExtremes();
                var f = g.min,
                    n = g.max,
                    h, l, w, u;
                a = a || this.stackedYData || this.processedYData || [];
                g = a.length;
                for (u = 0; u < g; u++)
                    if (l = d[u], w = a[u], h = (k(w, !0) || b(w)) && (!c.positiveValuesOnly || w.length || 0 < w), l = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (d[u] || l) >= f && (d[u] || l) <= n, h && l)
                        if (h = w.length)
                            for (; h--;) null !== w[h] && (e[m++] = w[h]);
                        else e[m++] = w;
                this.dataMin =
                    A(e);
                this.dataMax = C(e)
            },
            translate: function () {
                this.processedXData || this.processData();
                this.generatePoints();
                var a = this.options,
                    b = a.stacking,
                    c = this.xAxis,
                    d = c.categories,
                    g = this.yAxis,
                    e = this.points,
                    n = e.length,
                    h = !!this.modifyValue,
                    l = a.pointPlacement,
                    w = "between" === l || k(l),
                    u = a.threshold,
                    r = a.startFromThreshold ? u : 0,
                    x, E, t, I, D = Number.MAX_VALUE;
                "between" === l && (l = .5);
                k(l) && (l *= H(a.pointRange || c.pointRange));
                for (a = 0; a < n; a++) {
                    var L = e[a],
                        A = L.x,
                        z = L.y;
                    E = L.low;
                    var C = b && g.stacks[(this.negStacks && z < (r ? 0 : u) ? "-" : "") + this.stackKey],
                        B;
                    g.positiveValuesOnly && null !== z && 0 >= z && (L.isNull = !0);
                    L.plotX = x = f(Math.min(Math.max(-1E5, c.translate(A, 0, 0, 0, 1, l, "flags" === this.type)), 1E5));
                    b && this.visible && !L.isNull && C && C[A] && (I = this.getStackIndicator(I, A, this.index), B = C[A], z = B.points[I.key], E = z[0], z = z[1], E === r && I.key === C[A].base && (E = H(u, g.min)), g.positiveValuesOnly && 0 >= E && (E = null), L.total = L.stackTotal = B.total, L.percentage = B.total && L.y / B.total * 100, L.stackY = z, B.setOffset(this.pointXOffset || 0, this.barW || 0));
                    L.yBottom = q(E) ? g.translate(E, 0, 1, 0, 1) :
                        null;
                    h && (z = this.modifyValue(z, L));
                    L.plotY = E = "number" === typeof z && Infinity !== z ? Math.min(Math.max(-1E5, g.translate(z, 0, 1, 0, 1)), 1E5) : void 0;
                    L.isInside = void 0 !== E && 0 <= E && E <= g.len && 0 <= x && x <= c.len;
                    L.clientX = w ? f(c.translate(A, 0, 0, 0, 1, l)) : x;
                    L.negative = L.y < (u || 0);
                    L.category = d && void 0 !== d[L.x] ? d[L.x] : L.x;
                    L.isNull || (void 0 !== t && (D = Math.min(D, Math.abs(x - t))), t = x);
                    L.zone = this.zones.length && L.getZone()
                }
                this.closestPointRangePx = D
            },
            getValidPoints: function (a, b) {
                var c = this.chart;
                return u(a || this.points || [], function (a) {
                    return b &&
                        !c.isInsidePlot(a.plotX, a.plotY, c.inverted) ? !1 : !a.isNull
                })
            },
            setClip: function (a) {
                var b = this.chart,
                    c = this.options,
                    d = b.renderer,
                    g = b.inverted,
                    e = this.clipBox,
                    m = e || b.clipBox,
                    f = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, m.height, c.xAxis, c.yAxis].join(),
                    k = b[f],
                    n = b[f + "m"];
                k || (a && (m.width = 0, b[f + "m"] = n = d.clipRect(-99, g ? -b.plotLeft : -b.plotTop, 99, g ? b.chartWidth : b.chartHeight)), b[f] = k = d.clipRect(m), k.count = {
                    length: 0
                });
                a && !k.count[this.index] && (k.count[this.index] = !0, k.count.length += 1);
                !1 !== c.clip &&
                    (this.group.clip(a || e ? k : b.clipRect), this.markerGroup.clip(n), this.sharedClipKey = f);
                a || (k.count[this.index] && (delete k.count[this.index], --k.count.length), 0 === k.count.length && f && b[f] && (e || (b[f] = b[f].destroy()), b[f + "m"] && (b[f + "m"] = b[f + "m"].destroy())))
            },
            animate: function (a) {
                var b = this.chart,
                    c = B(this.options.animation),
                    d;
                a ? this.setClip(c) : (d = this.sharedClipKey, (a = b[d]) && a.animate({
                    width: b.plotSizeX
                }, c), b[d + "m"] && b[d + "m"].animate({
                    width: b.plotSizeX + 99
                }, c), this.animate = null)
            },
            afterAnimate: function () {
                this.setClip();
                l(this, "afterAnimate")
            },
            drawPoints: function () {
                var a = this.points,
                    b = this.chart,
                    c, d, g, e, f = this.options.marker,
                    n, h, l, w, u = this[this.specialGroup] || this.markerGroup,
                    q = H(f.enabled, this.xAxis.isRadial ? !0 : null, this.closestPointRangePx >= 2 * f.radius);
                if (!1 !== f.enabled || this._hasPointMarkers)
                    for (d = 0; d < a.length; d++) g = a[d], c = g.plotY, e = g.graphic, n = g.marker || {}, h = !!g.marker, l = q && void 0 === n.enabled || n.enabled, w = g.isInside, l && k(c) && null !== g.y ? (c = H(n.symbol, this.symbol), g.hasImage = 0 === c.indexOf("url"), l = this.markerAttribs(g,
                        g.selected && "select"), e ? e[w ? "show" : "hide"](!0).animate(l) : w && (0 < l.width || g.hasImage) && (g.graphic = e = b.renderer.symbol(c, l.x, l.y, l.width, l.height, h ? n : f).add(u)), e && e.attr(this.pointAttribs(g, g.selected && "select")), e && e.addClass(g.getClassName(), !0)) : e && (g.graphic = e.destroy())
            },
            markerAttribs: function (a, b) {
                var c = this.options.marker,
                    d = a.marker || {},
                    g = H(d.radius, c.radius);
                b && (c = c.states[b], b = d.states && d.states[b], g = H(b && b.radius, c && c.radius, g + (c && c.radiusPlus || 0)));
                a.hasImage && (g = 0);
                a = {
                    x: Math.floor(a.plotX) -
                        g,
                    y: a.plotY - g
                };
                g && (a.width = a.height = 2 * g);
                return a
            },
            pointAttribs: function (a, b) {
                var c = this.options.marker,
                    d = a && a.options,
                    g = d && d.marker || {},
                    e = this.color,
                    f = d && d.color,
                    m = a && a.color,
                    d = H(g.lineWidth, c.lineWidth);
                a = a && a.zone && a.zone.color;
                e = f || a || m || e;
                a = g.fillColor || c.fillColor || e;
                e = g.lineColor || c.lineColor || e;
                b && (c = c.states[b], b = g.states && g.states[b] || {}, d = H(b.lineWidth, c.lineWidth, d + H(b.lineWidthPlus, c.lineWidthPlus, 0)), a = b.fillColor || c.fillColor || a, e = b.lineColor || c.lineColor || e);
                return {
                    stroke: e,
                    "stroke-width": d,
                    fill: a
                }
            },
            destroy: function () {
                var a = this,
                    b = a.chart,
                    c = /AppleWebKit\/533/.test(L.navigator.userAgent),
                    d, e, f = a.data || [],
                    k, w;
                l(a, "destroy");
                n(a);
                h(a.axisTypes || [], function (b) {
                    (w = a[b]) && w.series && (g(w.series, a), w.isDirty = w.forceRedraw = !0)
                });
                a.legendItem && a.chart.legend.destroyItem(a);
                for (e = f.length; e--;)(k = f[e]) && k.destroy && k.destroy();
                a.points = null;
                clearTimeout(a.animationTimeout);
                D(a, function (a, b) {
                    a instanceof E && !a.survive && (d = c && "group" === b ? "hide" : "destroy", a[d]())
                });
                b.hoverSeries === a && (b.hoverSeries =
                    null);
                g(b.series, a);
                b.orderSeries();
                D(a, function (b, c) {
                    delete a[c]
                })
            },
            getGraphPath: function (a, b, c) {
                var d = this,
                    g = d.options,
                    e = g.step,
                    f, k = [],
                    m = [],
                    n;
                a = a || d.points;
                (f = a.reversed) && a.reverse();
                (e = {
                    right: 1,
                    center: 2
                }[e] || e && 3) && f && (e = 4 - e);
                !g.connectNulls || b || c || (a = this.getValidPoints(a));
                h(a, function (f, h) {
                    var p = f.plotX,
                        l = f.plotY,
                        w = a[h - 1];
                    (f.leftCliff || w && w.rightCliff) && !c && (n = !0);
                    f.isNull && !q(b) && 0 < h ? n = !g.connectNulls : f.isNull && !b ? n = !0 : (0 === h || n ? h = ["M", f.plotX, f.plotY] : d.getPointSpline ? h = d.getPointSpline(a,
                        f, h) : e ? (h = 1 === e ? ["L", w.plotX, l] : 2 === e ? ["L", (w.plotX + p) / 2, w.plotY, "L", (w.plotX + p) / 2, l] : ["L", p, w.plotY], h.push("L", p, l)) : h = ["L", p, l], m.push(f.x), e && m.push(f.x), k.push.apply(k, h), n = !1)
                });
                k.xMap = m;
                return d.graphPath = k
            },
            drawGraph: function () {
                var a = this,
                    b = this.options,
                    c = (this.gappedPath || this.getGraphPath).call(this),
                    d = [
                        ["graph", "highcharts-graph", b.lineColor || this.color, b.dashStyle]
                    ];
                h(this.zones, function (c, g) {
                    d.push(["zone-graph-" + g, "highcharts-graph highcharts-zone-graph-" + g + " " + (c.className || ""), c.color ||
                        a.color, c.dashStyle || b.dashStyle
                    ])
                });
                h(d, function (d, g) {
                    var e = d[0],
                        f = a[e];
                    f ? (f.endX = c.xMap, f.animate({
                        d: c
                    })) : c.length && (a[e] = a.chart.renderer.path(c).addClass(d[1]).attr({
                        zIndex: 1
                    }).add(a.group), f = {
                        stroke: d[2],
                        "stroke-width": b.lineWidth,
                        fill: a.fillGraph && a.color || "none"
                    }, d[3] ? f.dashstyle = d[3] : "square" !== b.linecap && (f["stroke-linecap"] = f["stroke-linejoin"] = "round"), f = a[e].attr(f).shadow(2 > g && b.shadow));
                    f && (f.startX = c.xMap, f.isArea = c.isArea)
                })
            },
            applyZones: function () {
                var a = this,
                    b = this.chart,
                    c = b.renderer,
                    d = this.zones,
                    g, e, f = this.clips || [],
                    k, n = this.graph,
                    l = this.area,
                    w = Math.max(b.chartWidth, b.chartHeight),
                    u = this[(this.zoneAxis || "y") + "Axis"],
                    q, r, x = b.inverted,
                    E, t, I, D, L = !1;
                d.length && (n || l) && u && void 0 !== u.min && (r = u.reversed, E = u.horiz, n && n.hide(), l && l.hide(), q = u.getExtremes(), h(d, function (d, m) {
                    g = r ? E ? b.plotWidth : 0 : E ? 0 : u.toPixels(q.min);
                    g = Math.min(Math.max(H(e, g), 0), w);
                    e = Math.min(Math.max(Math.round(u.toPixels(H(d.value, q.max), !0)), 0), w);
                    L && (g = e = u.toPixels(q.max));
                    t = Math.abs(g - e);
                    I = Math.min(g, e);
                    D = Math.max(g,
                        e);
                    u.isXAxis ? (k = {
                        x: x ? D : I,
                        y: 0,
                        width: t,
                        height: w
                    }, E || (k.x = b.plotHeight - k.x)) : (k = {
                        x: 0,
                        y: x ? D : I,
                        width: w,
                        height: t
                    }, E && (k.y = b.plotWidth - k.y));
                    x && c.isVML && (k = u.isXAxis ? {
                        x: 0,
                        y: r ? I : D,
                        height: k.width,
                        width: b.chartWidth
                    } : {
                        x: k.y - b.plotLeft - b.spacingBox.x,
                        y: 0,
                        width: k.height,
                        height: b.chartHeight
                    });
                    f[m] ? f[m].animate(k) : (f[m] = c.clipRect(k), n && a["zone-graph-" + m].clip(f[m]), l && a["zone-area-" + m].clip(f[m]));
                    L = d.value > q.max
                }), this.clips = f)
            },
            invertGroups: function (a) {
                function b() {
                    h(["group", "markerGroup"], function (b) {
                        c[b] &&
                            (d.renderer.isVML && c[b].attr({
                                width: c.yAxis.len,
                                height: c.xAxis.len
                            }), c[b].width = c.yAxis.len, c[b].height = c.xAxis.len, c[b].invert(a))
                    })
                }
                var c = this,
                    d = c.chart,
                    g;
                c.xAxis && (g = z(d, "resize", b), z(c, "destroy", g), b(a), c.invertGroups = b)
            },
            plotGroup: function (a, b, c, d, g) {
                var e = this[a],
                    f = !e;
                f && (this[a] = e = this.chart.renderer.g().attr({
                    zIndex: d || .1
                }).add(g));
                e.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series highcharts-color-" + this.colorIndex + " " + (this.options.className || ""), !0);
                e.attr({
                    visibility: c
                })[f ? "attr" : "animate"](this.getPlotBox());
                return e
            },
            getPlotBox: function () {
                var a = this.chart,
                    b = this.xAxis,
                    c = this.yAxis;
                a.inverted && (b = c, c = this.xAxis);
                return {
                    translateX: b ? b.left : a.plotLeft,
                    translateY: c ? c.top : a.plotTop,
                    scaleX: 1,
                    scaleY: 1
                }
            },
            render: function () {
                var a = this,
                    b = a.chart,
                    c, d = a.options,
                    g = !!a.animate && b.renderer.isSVG && B(d.animation).duration,
                    e = a.visible ? "inherit" : "hidden",
                    f = d.zIndex,
                    k = a.hasRendered,
                    n = b.seriesGroup,
                    h = b.inverted;
                c = a.plotGroup("group", "series", e, f, n);
                a.markerGroup =
                    a.plotGroup("markerGroup", "markers", e, f, n);
                g && a.animate(!0);
                c.inverted = a.isCartesian ? h : !1;
                a.drawGraph && (a.drawGraph(), a.applyZones());
                a.drawDataLabels && a.drawDataLabels();
                a.visible && a.drawPoints();
                a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
                a.invertGroups(h);
                !1 === d.clip || a.sharedClipKey || k || c.clip(b.clipRect);
                g && a.animate();
                k || (a.animationTimeout = w(function () {
                    a.afterAnimate()
                }, g));
                a.isDirty = !1;
                a.hasRendered = !0
            },
            redraw: function () {
                var a = this.chart,
                    b = this.isDirty || this.isDirtyData,
                    c = this.group,
                    d = this.xAxis,
                    g = this.yAxis;
                c && (a.inverted && c.attr({
                    width: a.plotWidth,
                    height: a.plotHeight
                }), c.animate({
                    translateX: H(d && d.left, a.plotLeft),
                    translateY: H(g && g.top, a.plotTop)
                }));
                this.translate();
                this.render();
                b && delete this.kdTree
            },
            kdAxisArray: ["clientX", "plotY"],
            searchPoint: function (a, b) {
                var c = this.xAxis,
                    d = this.yAxis,
                    g = this.chart.inverted;
                return this.searchKDTree({
                    clientX: g ? c.len - a.chartY + c.pos : a.chartX - c.pos,
                    plotY: g ? d.len - a.chartX + d.pos : a.chartY - d.pos
                }, b)
            },
            buildKDTree: function () {
                function a(c,
                    d, g) {
                    var e, f;
                    if (f = c && c.length) return e = b.kdAxisArray[d % g], c.sort(function (a, b) {
                        return a[e] - b[e]
                    }), f = Math.floor(f / 2), {
                        point: c[f],
                        left: a(c.slice(0, f), d + 1, g),
                        right: a(c.slice(f + 1), d + 1, g)
                    }
                }
                this.buildingKdTree = !0;
                var b = this,
                    c = -1 < b.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                delete b.kdTree;
                w(function () {
                    b.kdTree = a(b.getValidPoints(null, !b.directTouch), c, c);
                    b.buildingKdTree = !1
                }, b.options.kdNow ? 0 : 1)
            },
            searchKDTree: function (a, b) {
                function c(a, b, k, m) {
                    var n = b.point,
                        h = d.kdAxisArray[k % m],
                        l, p, w = n;
                    p = q(a[g]) && q(n[g]) ?
                        Math.pow(a[g] - n[g], 2) : null;
                    l = q(a[e]) && q(n[e]) ? Math.pow(a[e] - n[e], 2) : null;
                    l = (p || 0) + (l || 0);
                    n.dist = q(l) ? Math.sqrt(l) : Number.MAX_VALUE;
                    n.distX = q(p) ? Math.sqrt(p) : Number.MAX_VALUE;
                    h = a[h] - n[h];
                    l = 0 > h ? "left" : "right";
                    p = 0 > h ? "right" : "left";
                    b[l] && (l = c(a, b[l], k + 1, m), w = l[f] < w[f] ? l : n);
                    b[p] && Math.sqrt(h * h) < w[f] && (a = c(a, b[p], k + 1, m), w = a[f] < w[f] ? a : w);
                    return w
                }
                var d = this,
                    g = this.kdAxisArray[0],
                    e = this.kdAxisArray[1],
                    f = b ? "distX" : "dist";
                b = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                this.kdTree || this.buildingKdTree ||
                    this.buildKDTree();
                if (this.kdTree) return c(a, this.kdTree, b, b)
            }
        })
    })(J);
    (function (a) {
        var z = a.addEvent,
            B = a.animate,
            C = a.Axis,
            A = a.createElement,
            f = a.css,
            e = a.defined,
            t = a.each,
            r = a.erase,
            q = a.extend,
            h = a.fireEvent,
            g = a.inArray,
            x = a.isNumber,
            l = a.isObject,
            u = a.isArray,
            b = a.merge,
            k = a.objectEach,
            d = a.pick,
            c = a.Point,
            D = a.Series,
            H = a.seriesTypes,
            n = a.setAnimation,
            I = a.splat;
        q(a.Chart.prototype, {
            addSeries: function (a, b, c) {
                var g, e = this;
                a && (b = d(b, !0), h(e, "addSeries", {
                    options: a
                }, function () {
                    g = e.initSeries(a);
                    e.isDirtyLegend = !0;
                    e.linkSeries();
                    b && e.redraw(c)
                }));
                return g
            },
            addAxis: function (a, c, g, e) {
                var f = c ? "xAxis" : "yAxis",
                    k = this.options;
                a = b(a, {
                    index: this[f].length,
                    isX: c
                });
                new C(this, a);
                k[f] = I(k[f] || {});
                k[f].push(a);
                d(g, !0) && this.redraw(e)
            },
            showLoading: function (a) {
                var b = this,
                    c = b.options,
                    d = b.loadingDiv,
                    g = c.loading,
                    e = function () {
                        d && f(d, {
                            left: b.plotLeft + "px",
                            top: b.plotTop + "px",
                            width: b.plotWidth + "px",
                            height: b.plotHeight + "px"
                        })
                    };
                d || (b.loadingDiv = d = A("div", {
                        className: "highcharts-loading highcharts-loading-hidden"
                    }, null, b.container),
                    b.loadingSpan = A("span", {
                        className: "highcharts-loading-inner"
                    }, null, d), z(b, "redraw", e));
                d.className = "highcharts-loading";
                b.loadingSpan.innerHTML = a || c.lang.loading;
                f(d, q(g.style, {
                    zIndex: 10
                }));
                f(b.loadingSpan, g.labelStyle);
                b.loadingShown || (f(d, {
                    opacity: 0,
                    display: ""
                }), B(d, {
                    opacity: g.style.opacity || .5
                }, {
                    duration: g.showDuration || 0
                }));
                b.loadingShown = !0;
                e()
            },
            hideLoading: function () {
                var a = this.options,
                    b = this.loadingDiv;
                b && (b.className = "highcharts-loading highcharts-loading-hidden", B(b, {
                    opacity: 0
                }, {
                    duration: a.loading.hideDuration ||
                        100,
                    complete: function () {
                        f(b, {
                            display: "none"
                        })
                    }
                }));
                this.loadingShown = !1
            },
            propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
            propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),
            update: function (a,
                c) {
                var f = this,
                    m = {
                        credits: "addCredits",
                        title: "setTitle",
                        subtitle: "setSubtitle"
                    },
                    n = a.chart,
                    h, l;
                if (n) {
                    b(!0, f.options.chart, n);
                    "className" in n && f.setClassName(n.className);
                    if ("inverted" in n || "polar" in n) f.propFromSeries(), h = !0;
                    "alignTicks" in n && (h = !0);
                    k(n, function (a, b) {
                        -1 !== g("chart." + b, f.propsRequireUpdateSeries) && (l = !0); - 1 !== g(b, f.propsRequireDirtyBox) && (f.isDirtyBox = !0)
                    });
                    "style" in n && f.renderer.setStyle(n.style)
                }
                a.colors && (this.options.colors = a.colors);
                a.plotOptions && b(!0, this.options.plotOptions,
                    a.plotOptions);
                k(a, function (a, b) {
                    if (f[b] && "function" === typeof f[b].update) f[b].update(a, !1);
                    else if ("function" === typeof f[m[b]]) f[m[b]](a);
                    "chart" !== b && -1 !== g(b, f.propsRequireUpdateSeries) && (l = !0)
                });
                t("xAxis yAxis zAxis series colorAxis pane".split(" "), function (b) {
                    a[b] && t(I(a[b]), function (a, c) {
                        (c = e(a.id) && f.get(a.id) || f[b][c]) && c.coll === b && c.update(a, !1)
                    })
                });
                h && t(f.axes, function (a) {
                    a.update({}, !1)
                });
                l && t(f.series, function (a) {
                    a.update({}, !1)
                });
                a.loading && b(!0, f.options.loading, a.loading);
                h = n && n.width;
                n = n && n.height;
                x(h) && h !== f.chartWidth || x(n) && n !== f.chartHeight ? f.setSize(h, n) : d(c, !0) && f.redraw()
            },
            setSubtitle: function (a) {
                this.setTitle(void 0, a)
            }
        });
        q(c.prototype, {
            update: function (a, b, c, g) {
                function e() {
                    f.applyOptions(a);
                    null === f.y && m && (f.graphic = m.destroy());
                    l(a, !0) && (m && m.element && a && a.marker && a.marker.symbol && (f.graphic = m.destroy()), a && a.dataLabels && f.dataLabel && (f.dataLabel = f.dataLabel.destroy()));
                    n = f.index;
                    k.updateParallelArrays(f, n);
                    w.data[n] = l(w.data[n], !0) || l(a, !0) ? f.options : a;
                    k.isDirty = k.isDirtyData = !0;
                    !k.fixedBox && k.hasCartesianSeries && (h.isDirtyBox = !0);
                    "point" === w.legendType && (h.isDirtyLegend = !0);
                    b && h.redraw(c)
                }
                var f = this,
                    k = f.series,
                    m = f.graphic,
                    n, h = k.chart,
                    w = k.options;
                b = d(b, !0);
                !1 === g ? e() : f.firePointEvent("update", {
                    options: a
                }, e)
            },
            remove: function (a, b) {
                this.series.removePoint(g(this, this.series.data), a, b)
            }
        });
        q(D.prototype, {
            addPoint: function (a, b, c, g) {
                var e = this.options,
                    f = this.data,
                    k = this.chart,
                    n = this.xAxis,
                    n = n && n.hasNames && n.names,
                    m = e.data,
                    h, l, w = this.xData,
                    u, q;
                b = d(b, !0);
                h = {
                    series: this
                };
                this.pointClass.prototype.applyOptions.apply(h, [a]);
                q = h.x;
                u = w.length;
                if (this.requireSorting && q < w[u - 1])
                    for (l = !0; u && w[u - 1] > q;) u--;
                this.updateParallelArrays(h, "splice", u, 0, 0);
                this.updateParallelArrays(h, u);
                n && h.name && (n[q] = h.name);
                m.splice(u, 0, a);
                l && (this.data.splice(u, 0, null), this.processData());
                "point" === e.legendType && this.generatePoints();
                c && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(h, "shift"), m.shift()));
                this.isDirtyData = this.isDirty = !0;
                b && k.redraw(g)
            },
            removePoint: function (a, b, c) {
                var g = this,
                    e = g.data,
                    f = e[a],
                    k = g.points,
                    h = g.chart,
                    l = function () {
                        k && k.length === e.length && k.splice(a, 1);
                        e.splice(a, 1);
                        g.options.data.splice(a, 1);
                        g.updateParallelArrays(f || {
                            series: g
                        }, "splice", a, 1);
                        f && f.destroy();
                        g.isDirty = !0;
                        g.isDirtyData = !0;
                        b && h.redraw()
                    };
                n(c, h);
                b = d(b, !0);
                f ? f.firePointEvent("remove", null, l) : l()
            },
            remove: function (a, b, c) {
                function g() {
                    e.destroy();
                    f.isDirtyLegend = f.isDirtyBox = !0;
                    f.linkSeries();
                    d(a, !0) && f.redraw(b)
                }
                var e = this,
                    f = e.chart;
                !1 !== c ? h(e, "remove", null, g) : g()
            },
            update: function (a, c) {
                var g = this,
                    e = g.chart,
                    f = g.userOptions,
                    k =
                    g.oldType || g.type,
                    n = a.type || f.type || e.options.chart.type,
                    h = H[k].prototype,
                    l = ["group", "markerGroup", "dataLabelsGroup"],
                    u;
                if (n && n !== k || void 0 !== a.zIndex) l.length = 0;
                t(l, function (a) {
                    l[a] = g[a];
                    delete g[a]
                });
                a = b(f, {
                    animation: !1,
                    index: g.index,
                    pointStart: g.xData[0]
                }, {
                    data: g.options.data
                }, a);
                g.remove(!1, null, !1);
                for (u in h) g[u] = void 0;
                q(g, H[n || k].prototype);
                t(l, function (a) {
                    g[a] = l[a]
                });
                g.init(e, a);
                g.oldType = k;
                e.linkSeries();
                d(c, !0) && e.redraw(!1)
            }
        });
        q(C.prototype, {
            update: function (a, c) {
                var g = this.chart;
                a = g.options[this.coll][this.options.index] =
                    b(this.userOptions, a);
                this.destroy(!0);
                this.init(g, q(a, {
                    events: void 0
                }));
                g.isDirtyBox = !0;
                d(c, !0) && g.redraw()
            },
            remove: function (a) {
                for (var b = this.chart, c = this.coll, g = this.series, e = g.length; e--;) g[e] && g[e].remove(!1);
                r(b.axes, this);
                r(b[c], this);
                u(b.options[c]) ? b.options[c].splice(this.options.index, 1) : delete b.options[c];
                t(b[c], function (a, b) {
                    a.options.index = b
                });
                this.destroy();
                b.isDirtyBox = !0;
                d(a, !0) && b.redraw()
            },
            setTitle: function (a, b) {
                this.update({
                    title: a
                }, b)
            },
            setCategories: function (a, b) {
                this.update({
                        categories: a
                    },
                    b)
            }
        })
    })(J);
    (function (a) {
        var z = a.animObject,
            B = a.color,
            C = a.each,
            A = a.extend,
            f = a.isNumber,
            e = a.merge,
            t = a.pick,
            r = a.Series,
            q = a.seriesType,
            h = a.svg;
        q("column", "line", {
            borderRadius: 0,
            crisp: !0,
            groupPadding: .2,
            marker: null,
            pointPadding: .1,
            minPointLength: 0,
            cropThreshold: 50,
            pointRange: null,
            states: {
                hover: {
                    halo: !1,
                    brightness: .1,
                    shadow: !1
                },
                select: {
                    color: "#cccccc",
                    borderColor: "#000000",
                    shadow: !1
                }
            },
            dataLabels: {
                align: null,
                verticalAlign: null,
                y: null
            },
            softThreshold: !1,
            startFromThreshold: !0,
            stickyTracking: !1,
            tooltip: {
                distance: 6
            },
            threshold: 0,
            borderColor: "#ffffff"
        }, {
            cropShoulder: 0,
            directTouch: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            negStacks: !0,
            init: function () {
                r.prototype.init.apply(this, arguments);
                var a = this,
                    e = a.chart;
                e.hasRendered && C(e.series, function (g) {
                    g.type === a.type && (g.isDirty = !0)
                })
            },
            getColumnMetrics: function () {
                var a = this,
                    e = a.options,
                    f = a.xAxis,
                    h = a.yAxis,
                    b = f.reversed,
                    k, d = {},
                    c = 0;
                !1 === e.grouping ? c = 1 : C(a.chart.series, function (b) {
                    var g = b.options,
                        e = b.yAxis,
                        f;
                    b.type === a.type && b.visible && h.len === e.len && h.pos === e.pos && (g.stacking ?
                        (k = b.stackKey, void 0 === d[k] && (d[k] = c++), f = d[k]) : !1 !== g.grouping && (f = c++), b.columnIndex = f)
                });
                var q = Math.min(Math.abs(f.transA) * (f.ordinalSlope || e.pointRange || f.closestPointRange || f.tickInterval || 1), f.len),
                    r = q * e.groupPadding,
                    n = (q - 2 * r) / (c || 1),
                    e = Math.min(e.maxPointWidth || f.len, t(e.pointWidth, n * (1 - 2 * e.pointPadding)));
                a.columnMetrics = {
                    width: e,
                    offset: (n - e) / 2 + (r + ((a.columnIndex || 0) + (b ? 1 : 0)) * n - q / 2) * (b ? -1 : 1)
                };
                return a.columnMetrics
            },
            crispCol: function (a, e, f, h) {
                var b = this.chart,
                    g = this.borderWidth,
                    d = -(g % 2 ? .5 :
                        0),
                    g = g % 2 ? .5 : 1;
                b.inverted && b.renderer.isVML && (g += 1);
                this.options.crisp && (f = Math.round(a + f) + d, a = Math.round(a) + d, f -= a);
                h = Math.round(e + h) + g;
                d = .5 >= Math.abs(e) && .5 < h;
                e = Math.round(e) + g;
                h -= e;
                d && h && (--e, h += 1);
                return {
                    x: a,
                    y: e,
                    width: f,
                    height: h
                }
            },
            translate: function () {
                var a = this,
                    e = a.chart,
                    f = a.options,
                    h = a.dense = 2 > a.closestPointRange * a.xAxis.transA,
                    h = a.borderWidth = t(f.borderWidth, h ? 0 : 1),
                    b = a.yAxis,
                    k = a.translatedThreshold = b.getThreshold(f.threshold),
                    d = t(f.minPointLength, 5),
                    c = a.getColumnMetrics(),
                    q = c.width,
                    H = a.barW =
                    Math.max(q, 1 + 2 * h),
                    n = a.pointXOffset = c.offset;
                e.inverted && (k -= .5);
                f.pointPadding && (H = Math.ceil(H));
                r.prototype.translate.apply(a);
                C(a.points, function (c) {
                    var g = t(c.yBottom, k),
                        f = 999 + Math.abs(g),
                        f = Math.min(Math.max(-f, c.plotY), b.len + f),
                        h = c.plotX + n,
                        m = H,
                        l = Math.min(f, g),
                        u, r = Math.max(f, g) - l;
                    Math.abs(r) < d && d && (r = d, u = !b.reversed && !c.negative || b.reversed && c.negative, l = Math.abs(l - k) > d ? g - d : k - (u ? d : 0));
                    c.barX = h;
                    c.pointWidth = q;
                    c.tooltipPos = e.inverted ? [b.len + b.pos - e.plotLeft - f, a.xAxis.len - h - m / 2, r] : [h + m / 2, f + b.pos - e.plotTop,
                        r
                    ];
                    c.shapeType = "rect";
                    c.shapeArgs = a.crispCol.apply(a, c.isNull ? [h, k, m, 0] : [h, l, m, r])
                })
            },
            getSymbol: a.noop,
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle,
            drawGraph: function () {
                this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
            },
            pointAttribs: function (a, f) {
                var g = this.options,
                    h, b = this.pointAttrToOptions || {};
                h = b.stroke || "borderColor";
                var k = b["stroke-width"] || "borderWidth",
                    d = a && a.color || this.color,
                    c = a[h] || g[h] || this.color || d,
                    q = a[k] || g[k] || this[k] || 0,
                    b = g.dashStyle;
                a && this.zones.length &&
                    (d = a.getZone(), d = a.options.color || d && d.color || this.color);
                f && (a = e(g.states[f], a.options.states && a.options.states[f] || {}), f = a.brightness, d = a.color || void 0 !== f && B(d).brighten(a.brightness).get() || d, c = a[h] || c, q = a[k] || q, b = a.dashStyle || b);
                h = {
                    fill: d,
                    stroke: c,
                    "stroke-width": q
                };
                g.borderRadius && (h.r = g.borderRadius);
                b && (h.dashstyle = b);
                return h
            },
            drawPoints: function () {
                var a = this,
                    h = this.chart,
                    l = a.options,
                    u = h.renderer,
                    b = l.animationLimit || 250,
                    k;
                C(a.points, function (d) {
                    var c = d.graphic;
                    if (f(d.plotY) && null !== d.y) {
                        k =
                            d.shapeArgs;
                        if (c) c[h.pointCount < b ? "animate" : "attr"](e(k));
                        else d.graphic = c = u[d.shapeType](k).add(d.group || a.group);
                        c.attr(a.pointAttribs(d, d.selected && "select")).shadow(l.shadow, null, l.stacking && !l.borderRadius);
                        c.addClass(d.getClassName(), !0)
                    } else c && (d.graphic = c.destroy())
                })
            },
            animate: function (a) {
                var e = this,
                    g = this.yAxis,
                    f = e.options,
                    b = this.chart.inverted,
                    k = {};
                h && (a ? (k.scaleY = .001, a = Math.min(g.pos + g.len, Math.max(g.pos, g.toPixels(f.threshold))), b ? k.translateX = a - g.len : k.translateY = a, e.group.attr(k)) :
                    (k[b ? "translateX" : "translateY"] = g.pos, e.group.animate(k, A(z(e.options.animation), {
                        step: function (a, b) {
                            e.group.attr({
                                scaleY: Math.max(.001, b.pos)
                            })
                        }
                    })), e.animate = null))
            },
            remove: function () {
                var a = this,
                    e = a.chart;
                e.hasRendered && C(e.series, function (e) {
                    e.type === a.type && (e.isDirty = !0)
                });
                r.prototype.remove.apply(a, arguments)
            }
        })
    })(J);
    (function (a) {
        var z = a.Series;
        a = a.seriesType;
        a("scatter", "line", {
            lineWidth: 0,
            findNearestPointBy: "xy",
            marker: {
                enabled: !0
            },
            tooltip: {
                headerFormat: '\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
                pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"
            }
        }, {
            sorted: !1,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
            takeOrdinalPosition: !1,
            drawGraph: function () {
                this.options.lineWidth && z.prototype.drawGraph.call(this)
            }
        })
    })(J);
    (function (a) {
        var z = a.addEvent,
            B = a.arrayMax,
            C = a.defined,
            A = a.each,
            f = a.extend,
            e = a.format,
            t = a.map,
            r = a.merge,
            q = a.noop,
            h = a.pick,
            g = a.relativeLength,
            x = a.Series,
            l = a.seriesTypes,
            u = a.stableSort;
        a.distribute =
            function (a, e) {
                function b(a, b) {
                    return a.target - b.target
                }
                var c, g = !0,
                    f = a,
                    k = [],
                    h;
                h = 0;
                for (c = a.length; c--;) h += a[c].size;
                if (h > e) {
                    u(a, function (a, b) {
                        return (b.rank || 0) - (a.rank || 0)
                    });
                    for (h = c = 0; h <= e;) h += a[c].size, c++;
                    k = a.splice(c - 1, a.length)
                }
                u(a, b);
                for (a = t(a, function (a) {
                        return {
                            size: a.size,
                            targets: [a.target]
                        }
                    }); g;) {
                    for (c = a.length; c--;) g = a[c], h = (Math.min.apply(0, g.targets) + Math.max.apply(0, g.targets)) / 2, g.pos = Math.min(Math.max(0, h - g.size / 2), e - g.size);
                    c = a.length;
                    for (g = !1; c--;) 0 < c && a[c - 1].pos + a[c - 1].size > a[c].pos &&
                        (a[c - 1].size += a[c].size, a[c - 1].targets = a[c - 1].targets.concat(a[c].targets), a[c - 1].pos + a[c - 1].size > e && (a[c - 1].pos = e - a[c - 1].size), a.splice(c, 1), g = !0)
                }
                c = 0;
                A(a, function (a) {
                    var b = 0;
                    A(a.targets, function () {
                        f[c].pos = a.pos + b;
                        b += f[c].size;
                        c++
                    })
                });
                f.push.apply(f, k);
                u(f, b)
            };
        x.prototype.drawDataLabels = function () {
            var b = this,
                g = b.options,
                d = g.dataLabels,
                c = b.points,
                f, l, n = b.hasRendered || 0,
                u, q, w = h(d.defer, !0),
                x = b.chart.renderer;
            if (d.enabled || b._hasPointLabels) b.dlProcessOptions && b.dlProcessOptions(d), q = b.plotGroup("dataLabelsGroup",
                "data-labels", w && !n ? "hidden" : "visible", d.zIndex || 6), w && (q.attr({
                opacity: +n
            }), n || z(b, "afterAnimate", function () {
                b.visible && q.show(!0);
                q[g.animation ? "animate" : "attr"]({
                    opacity: 1
                }, {
                    duration: 200
                })
            })), l = d, A(c, function (c) {
                var k, n = c.dataLabel,
                    m, p, w = c.connector,
                    t = !n,
                    E;
                f = c.dlOptions || c.options && c.options.dataLabels;
                if (k = h(f && f.enabled, l.enabled) && null !== c.y) d = r(l, f), m = c.getLabelConfig(), u = d.format ? e(d.format, m) : d.formatter.call(m, d), E = d.style, m = d.rotation, E.color = h(d.color, E.color, b.color, "#000000"), "contrast" ===
                    E.color && (c.contrastColor = x.getContrast(c.color || b.color), E.color = d.inside || 0 > h(c.labelDistance, d.distance) || g.stacking ? c.contrastColor : "#000000"), g.cursor && (E.cursor = g.cursor), p = {
                        fill: d.backgroundColor,
                        stroke: d.borderColor,
                        "stroke-width": d.borderWidth,
                        r: d.borderRadius || 0,
                        rotation: m,
                        padding: d.padding,
                        zIndex: 1
                    }, a.objectEach(p, function (a, b) {
                        void 0 === a && delete p[b]
                    });
                !n || k && C(u) ? k && C(u) && (n ? p.text = u : (n = c.dataLabel = x[m ? "text" : "label"](u, 0, -9999, d.shape, null, null, d.useHTML, null, "data-label"), n.addClass("highcharts-data-label-color-" +
                    c.colorIndex + " " + (d.className || "") + (d.useHTML ? "highcharts-tracker" : ""))), n.attr(p), n.css(E).shadow(d.shadow), n.added || n.add(q), b.alignDataLabel(c, n, d, null, t)) : (c.dataLabel = n = n.destroy(), w && (c.connector = w.destroy()))
            })
        };
        x.prototype.alignDataLabel = function (a, e, d, c, g) {
            var b = this.chart,
                k = b.inverted,
                l = h(a.plotX, -9999),
                u = h(a.plotY, -9999),
                q = e.getBBox(),
                r, m = d.rotation,
                x = d.align,
                t = this.visible && (a.series.forceDL || b.isInsidePlot(l, Math.round(u), k) || c && b.isInsidePlot(l, k ? c.x + 1 : c.y + c.height - 1, k)),
                D = "justify" ===
                h(d.overflow, "justify");
            if (t && (r = d.style.fontSize, r = b.renderer.fontMetrics(r, e).b, c = f({
                    x: k ? b.plotWidth - u : l,
                    y: Math.round(k ? b.plotHeight - l : u),
                    width: 0,
                    height: 0
                }, c), f(d, {
                    width: q.width,
                    height: q.height
                }), m ? (D = !1, l = b.renderer.rotCorr(r, m), l = {
                    x: c.x + d.x + c.width / 2 + l.x,
                    y: c.y + d.y + {
                        top: 0,
                        middle: .5,
                        bottom: 1
                    }[d.verticalAlign] * c.height
                }, e[g ? "attr" : "animate"](l).attr({
                    align: x
                }), u = (m + 720) % 360, u = 180 < u && 360 > u, "left" === x ? l.y -= u ? q.height : 0 : "center" === x ? (l.x -= q.width / 2, l.y -= q.height / 2) : "right" === x && (l.x -= q.width, l.y -= u ?
                    0 : q.height)) : (e.align(d, null, c), l = e.alignAttr), D ? a.isLabelJustified = this.justifyDataLabel(e, d, l, q, c, g) : h(d.crop, !0) && (t = b.isInsidePlot(l.x, l.y) && b.isInsidePlot(l.x + q.width, l.y + q.height)), d.shape && !m)) e[g ? "attr" : "animate"]({
                anchorX: k ? b.plotWidth - a.plotY : a.plotX,
                anchorY: k ? b.plotHeight - a.plotX : a.plotY
            });
            t || (e.attr({
                y: -9999
            }), e.placed = !1)
        };
        x.prototype.justifyDataLabel = function (a, e, d, c, g, f) {
            var b = this.chart,
                k = e.align,
                h = e.verticalAlign,
                l, u, m = a.box ? 0 : a.padding || 0;
            l = d.x + m;
            0 > l && ("right" === k ? e.align = "left" :
                e.x = -l, u = !0);
            l = d.x + c.width - m;
            l > b.plotWidth && ("left" === k ? e.align = "right" : e.x = b.plotWidth - l, u = !0);
            l = d.y + m;
            0 > l && ("bottom" === h ? e.verticalAlign = "top" : e.y = -l, u = !0);
            l = d.y + c.height - m;
            l > b.plotHeight && ("top" === h ? e.verticalAlign = "bottom" : e.y = b.plotHeight - l, u = !0);
            u && (a.placed = !f, a.align(e, null, g));
            return u
        };
        l.pie && (l.pie.prototype.drawDataLabels = function () {
                var b = this,
                    e = b.data,
                    d, c = b.chart,
                    g = b.options.dataLabels,
                    f = h(g.connectorPadding, 10),
                    n = h(g.connectorWidth, 1),
                    l = c.plotWidth,
                    u = c.plotHeight,
                    q, r = b.center,
                    m = r[2] /
                    2,
                    t = r[1],
                    z, M, p, y, O = [
                        [],
                        []
                    ],
                    F, N, J, P, v = [0, 0, 0, 0];
                b.visible && (g.enabled || b._hasPointLabels) && (A(e, function (a) {
                        a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({
                            width: "auto"
                        }).css({
                            width: "auto",
                            textOverflow: "clip"
                        }), a.dataLabel.shortened = !1)
                    }), x.prototype.drawDataLabels.apply(b), A(e, function (a) {
                        a.dataLabel && a.visible && (O[a.half].push(a), a.dataLabel._pos = null)
                    }), A(O, function (e, k) {
                        var h, n, q = e.length,
                            w = [],
                            x;
                        if (q)
                            for (b.sortByAngle(e, k - .5), 0 < b.maxLabelDistance && (h = Math.max(0, t - m - b.maxLabelDistance),
                                    n = Math.min(t + m + b.maxLabelDistance, c.plotHeight), A(e, function (a) {
                                        0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, t - m - a.labelDistance), a.bottom = Math.min(t + m + a.labelDistance, c.plotHeight), x = a.dataLabel.getBBox().height || 21, a.positionsIndex = w.push({
                                            target: a.labelPos[1] - a.top + x / 2,
                                            size: x,
                                            rank: a.y
                                        }) - 1)
                                    }), a.distribute(w, n + x - h)), P = 0; P < q; P++) d = e[P], n = d.positionsIndex, p = d.labelPos, z = d.dataLabel, J = !1 === d.visible ? "hidden" : "inherit", h = p[1], w && C(w[n]) ? void 0 === w[n].pos ? J = "hidden" : (y = w[n].size, N = d.top + w[n].pos) :
                                N = h, delete d.positionIndex, F = g.justify ? r[0] + (k ? -1 : 1) * (m + d.labelDistance) : b.getX(N < d.top + 2 || N > d.bottom - 2 ? h : N, k, d), z._attr = {
                                    visibility: J,
                                    align: p[6]
                                }, z._pos = {
                                    x: F + g.x + ({
                                        left: f,
                                        right: -f
                                    }[p[6]] || 0),
                                    y: N + g.y - 10
                                }, p.x = F, p.y = N, null === b.options.size && (M = z.getBBox().width, h = null, F - M < f ? (h = Math.round(M - F + f), v[3] = Math.max(h, v[3])) : F + M > l - f && (h = Math.round(F + M - l + f), v[1] = Math.max(h, v[1])), 0 > N - y / 2 ? v[0] = Math.max(Math.round(-N + y / 2), v[0]) : N + y / 2 > u && (v[2] = Math.max(Math.round(N + y / 2 - u), v[2])), z.sideOverflow = h)
                    }), 0 === B(v) || this.verifyDataLabelOverflow(v)) &&
                    (this.placeDataLabels(), n && A(this.points, function (a) {
                        var d;
                        q = a.connector;
                        if ((z = a.dataLabel) && z._pos && a.visible && 0 < a.labelDistance) {
                            J = z._attr.visibility;
                            if (d = !q) a.connector = q = c.renderer.path().addClass("highcharts-data-label-connector highcharts-color-" + a.colorIndex).add(b.dataLabelsGroup), q.attr({
                                "stroke-width": n,
                                stroke: g.connectorColor || a.color || "#666666"
                            });
                            q[d ? "attr" : "animate"]({
                                d: b.connectorPath(a.labelPos)
                            });
                            q.attr("visibility", J)
                        } else q && (a.connector = q.destroy())
                    }))
            }, l.pie.prototype.connectorPath =
            function (a) {
                var b = a.x,
                    d = a.y;
                return h(this.options.dataLabels.softConnector, !0) ? ["M", b + ("left" === a[6] ? 5 : -5), d, "C", b, d, 2 * a[2] - a[4], 2 * a[3] - a[5], a[2], a[3], "L", a[4], a[5]] : ["M", b + ("left" === a[6] ? 5 : -5), d, "L", a[2], a[3], "L", a[4], a[5]]
            }, l.pie.prototype.placeDataLabels = function () {
                A(this.points, function (a) {
                    var b = a.dataLabel;
                    b && a.visible && ((a = b._pos) ? (b.sideOverflow && (b._attr.width = b.getBBox().width - b.sideOverflow, b.css({
                        width: b._attr.width + "px",
                        textOverflow: "ellipsis"
                    }), b.shortened = !0), b.attr(b._attr), b[b.moved ?
                        "animate" : "attr"](a), b.moved = !0) : b && b.attr({
                        y: -9999
                    }))
                }, this)
            }, l.pie.prototype.alignDataLabel = q, l.pie.prototype.verifyDataLabelOverflow = function (a) {
                var b = this.center,
                    d = this.options,
                    c = d.center,
                    e = d.minSize || 80,
                    f, h;
                null !== c[0] ? f = Math.max(b[2] - Math.max(a[1], a[3]), e) : (f = Math.max(b[2] - a[1] - a[3], e), b[0] += (a[3] - a[1]) / 2);
                null !== c[1] ? f = Math.max(Math.min(f, b[2] - Math.max(a[0], a[2])), e) : (f = Math.max(Math.min(f, b[2] - a[0] - a[2]), e), b[1] += (a[0] - a[2]) / 2);
                f < b[2] ? (b[2] = f, b[3] = Math.min(g(d.innerSize || 0, f), f), this.translate(b),
                    this.drawDataLabels && this.drawDataLabels()) : h = !0;
                return h
            });
        l.column && (l.column.prototype.alignDataLabel = function (a, e, d, c, g) {
            var b = this.chart.inverted,
                f = a.series,
                k = a.dlBox || a.shapeArgs,
                l = h(a.below, a.plotY > h(this.translatedThreshold, f.yAxis.len)),
                u = h(d.inside, !!this.options.stacking);
            k && (c = r(k), 0 > c.y && (c.height += c.y, c.y = 0), k = c.y + c.height - f.yAxis.len, 0 < k && (c.height -= k), b && (c = {
                x: f.yAxis.len - c.y - c.height,
                y: f.xAxis.len - c.x - c.width,
                width: c.height,
                height: c.width
            }), u || (b ? (c.x += l ? 0 : c.width, c.width = 0) : (c.y +=
                l ? c.height : 0, c.height = 0)));
            d.align = h(d.align, !b || u ? "center" : l ? "right" : "left");
            d.verticalAlign = h(d.verticalAlign, b || u ? "middle" : l ? "top" : "bottom");
            x.prototype.alignDataLabel.call(this, a, e, d, c, g);
            a.isLabelJustified && a.contrastColor && a.dataLabel.css({
                color: a.contrastColor
            })
        })
    })(J);
    (function (a) {
        var z = a.Chart,
            B = a.each,
            C = a.pick,
            A = a.addEvent;
        z.prototype.callbacks.push(function (a) {
            function e() {
                var e = [];
                B(a.series || [], function (a) {
                    var f = a.options.dataLabels,
                        h = a.dataLabelCollections || ["dataLabel"];
                    (f.enabled ||
                        a._hasPointLabels) && !f.allowOverlap && a.visible && B(h, function (g) {
                        B(a.points, function (a) {
                            a[g] && (a[g].labelrank = C(a.labelrank, a.shapeArgs && a.shapeArgs.height), e.push(a[g]))
                        })
                    })
                });
                a.hideOverlappingLabels(e)
            }
            e();
            A(a, "redraw", e)
        });
        z.prototype.hideOverlappingLabels = function (a) {
            var e = a.length,
                f, r, q, h, g, x, l, u, b, k = function (a, b, e, g, f, k, h, l) {
                    return !(f > a + e || f + h < a || k > b + g || k + l < b)
                };
            for (r = 0; r < e; r++)
                if (f = a[r]) f.oldOpacity = f.opacity, f.newOpacity = 1;
            a.sort(function (a, b) {
                return (b.labelrank || 0) - (a.labelrank || 0)
            });
            for (r =
                0; r < e; r++)
                for (q = a[r], f = r + 1; f < e; ++f)
                    if (h = a[f], q && h && q !== h && q.placed && h.placed && 0 !== q.newOpacity && 0 !== h.newOpacity && (g = q.alignAttr, x = h.alignAttr, l = q.parentGroup, u = h.parentGroup, b = 2 * (q.box ? 0 : q.padding), g = k(g.x + l.translateX, g.y + l.translateY, q.width - b, q.height - b, x.x + u.translateX, x.y + u.translateY, h.width - b, h.height - b)))(q.labelrank < h.labelrank ? q : h).newOpacity = 0;
            B(a, function (a) {
                var b, d;
                a && (d = a.newOpacity, a.oldOpacity !== d && a.placed && (d ? a.show(!0) : b = function () {
                    a.hide()
                }, a.alignAttr.opacity = d, a[a.isOld ? "animate" :
                    "attr"](a.alignAttr, null, b)), a.isOld = !0)
            })
        }
    })(J);
    (function (a) {
        var z = a.addEvent,
            B = a.Chart,
            C = a.createElement,
            A = a.css,
            f = a.defaultOptions,
            e = a.defaultPlotOptions,
            t = a.each,
            r = a.extend,
            q = a.fireEvent,
            h = a.hasTouch,
            g = a.inArray,
            x = a.isObject,
            l = a.Legend,
            u = a.merge,
            b = a.pick,
            k = a.Point,
            d = a.Series,
            c = a.seriesTypes,
            D = a.svg,
            H;
        H = a.TrackerMixin = {
            drawTrackerPoint: function () {
                var a = this,
                    b = a.chart.pointer,
                    c = function (a) {
                        var c = b.getPointFromEvent(a);
                        if (void 0 !== c) c.onMouseOver(a)
                    };
                t(a.points, function (a) {
                    a.graphic && (a.graphic.element.point =
                        a);
                    a.dataLabel && (a.dataLabel.div ? a.dataLabel.div.point = a : a.dataLabel.element.point = a)
                });
                a._hasTracking || (t(a.trackerGroups, function (d) {
                    if (a[d]) {
                        a[d].addClass("highcharts-tracker").on("mouseover", c).on("mouseout", function (a) {
                            b.onTrackerMouseOut(a)
                        });
                        if (h) a[d].on("touchstart", c);
                        a.options.cursor && a[d].css(A).css({
                            cursor: a.options.cursor
                        })
                    }
                }), a._hasTracking = !0)
            },
            drawTrackerGraph: function () {
                var a = this,
                    b = a.options,
                    c = b.trackByArea,
                    d = [].concat(c ? a.areaPath : a.graphPath),
                    e = d.length,
                    g = a.chart,
                    f = g.pointer,
                    k =
                    g.renderer,
                    l = g.options.tooltip.snap,
                    p = a.tracker,
                    u, q = function () {
                        if (g.hoverSeries !== a) a.onMouseOver()
                    },
                    r = "rgba(192,192,192," + (D ? .0001 : .002) + ")";
                if (e && !c)
                    for (u = e + 1; u--;) "M" === d[u] && d.splice(u + 1, 0, d[u + 1] - l, d[u + 2], "L"), (u && "M" === d[u] || u === e) && d.splice(u, 0, "L", d[u - 2] + l, d[u - 1]);
                p ? p.attr({
                    d: d
                }) : a.graph && (a.tracker = k.path(d).attr({
                    "stroke-linejoin": "round",
                    visibility: a.visible ? "visible" : "hidden",
                    stroke: r,
                    fill: c ? r : "none",
                    "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * l),
                    zIndex: 2
                }).add(a.group), t([a.tracker, a.markerGroup],
                    function (a) {
                        a.addClass("highcharts-tracker").on("mouseover", q).on("mouseout", function (a) {
                            f.onTrackerMouseOut(a)
                        });
                        b.cursor && a.css({
                            cursor: b.cursor
                        });
                        if (h) a.on("touchstart", q)
                    }))
            }
        };
        c.column && (c.column.prototype.drawTracker = H.drawTrackerPoint);
        c.pie && (c.pie.prototype.drawTracker = H.drawTrackerPoint);
        c.scatter && (c.scatter.prototype.drawTracker = H.drawTrackerPoint);
        r(l.prototype, {
            setItemEvents: function (a, b, c) {
                var d = this,
                    e = d.chart.renderer.boxWrapper,
                    g = "highcharts-legend-" + (a.series ? "point" : "series") + "-active";
                (c ? b : a.legendGroup).on("mouseover", function () {
                    a.setState("hover");
                    e.addClass(g);
                    b.css(d.options.itemHoverStyle)
                }).on("mouseout", function () {
                    b.css(u(a.visible ? d.itemStyle : d.itemHiddenStyle));
                    e.removeClass(g);
                    a.setState()
                }).on("click", function (b) {
                    var c = function () {
                        a.setVisible && a.setVisible()
                    };
                    b = {
                        browserEvent: b
                    };
                    a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : q(a, "legendItemClick", b, c)
                })
            },
            createCheckboxForItem: function (a) {
                a.checkbox = C("input", {
                        type: "checkbox",
                        checked: a.selected,
                        defaultChecked: a.selected
                    },
                    this.options.itemCheckboxStyle, this.chart.container);
                z(a.checkbox, "click", function (b) {
                    q(a.series || a, "checkboxClick", {
                        checked: b.target.checked,
                        item: a
                    }, function () {
                        a.select()
                    })
                })
            }
        });
        f.legend.itemStyle.cursor = "pointer";
        r(B.prototype, {
            showResetZoom: function () {
                var a = this,
                    b = f.lang,
                    c = a.options.chart.resetZoomButton,
                    d = c.theme,
                    e = d.states,
                    g = "chart" === c.relativeTo ? null : "plotBox";
                this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function () {
                    a.zoomOut()
                }, d, e && e.hover).attr({
                    align: c.position.align,
                    title: b.resetZoomTitle
                }).addClass("highcharts-reset-zoom").add().align(c.position, !1, g)
            },
            zoomOut: function () {
                var a = this;
                q(a, "selection", {
                    resetSelection: !0
                }, function () {
                    a.zoom()
                })
            },
            zoom: function (a) {
                var c, d = this.pointer,
                    e = !1,
                    g;
                !a || a.resetSelection ? t(this.axes, function (a) {
                    c = a.zoom()
                }) : t(a.xAxis.concat(a.yAxis), function (a) {
                    var b = a.axis;
                    d[b.isXAxis ? "zoomX" : "zoomY"] && (c = b.zoom(a.min, a.max), b.displayBtn && (e = !0))
                });
                g = this.resetZoomButton;
                e && !g ? this.showResetZoom() : !e && x(g) && (this.resetZoomButton = g.destroy());
                c && this.redraw(b(this.options.chart.animation, a && a.animation, 100 > this.pointCount))
            },
            pan: function (a, b) {
                var c = this,
                    d = c.hoverPoints,
                    e;
                d && t(d, function (a) {
                    a.setState()
                });
                t("xy" === b ? [1, 0] : [1], function (b) {
                    b = c[b ? "xAxis" : "yAxis"][0];
                    var d = b.horiz,
                        g = a[d ? "chartX" : "chartY"],
                        d = d ? "mouseDownX" : "mouseDownY",
                        f = c[d],
                        k = (b.pointRange || 0) / 2,
                        h = b.getExtremes(),
                        l = b.toValue(f - g, !0) + k,
                        k = b.toValue(f + b.len - g, !0) - k,
                        n = k < l,
                        f = n ? k : l,
                        l = n ? l : k,
                        k = Math.min(h.dataMin, b.toValue(b.toPixels(h.min) - b.minPixelPadding)),
                        n = Math.max(h.dataMax, b.toValue(b.toPixels(h.max) + b.minPixelPadding)),
                        m;
                    m = k - f;
                    0 < m && (l += m, f = k);
                    m = l - n;
                    0 < m &&
                        (l = n, f -= m);
                    b.series.length && f !== h.min && l !== h.max && (b.setExtremes(f, l, !1, !1, {
                        trigger: "pan"
                    }), e = !0);
                    c[d] = g
                });
                e && c.redraw(!1);
                A(c.container, {
                    cursor: "move"
                })
            }
        });
        r(k.prototype, {
            select: function (a, c) {
                var d = this,
                    e = d.series,
                    f = e.chart;
                a = b(a, !d.selected);
                d.firePointEvent(a ? "select" : "unselect", {
                    accumulate: c
                }, function () {
                    d.selected = d.options.selected = a;
                    e.options.data[g(d, e.data)] = d.options;
                    d.setState(a && "select");
                    c || t(f.getSelectedPoints(), function (a) {
                        a.selected && a !== d && (a.selected = a.options.selected = !1, e.options.data[g(a,
                            e.data)] = a.options, a.setState(""), a.firePointEvent("unselect"))
                    })
                })
            },
            onMouseOver: function (a) {
                var b = this.series.chart.pointer;
                this.firePointEvent("mouseOver");
                b.runPointActions(a, this)
            },
            onMouseOut: function () {
                var a = this.series.chart;
                this.firePointEvent("mouseOut");
                t(a.hoverPoints || [], function (a) {
                    a.setState()
                });
                a.hoverPoints = a.hoverPoint = null
            },
            importEvents: function () {
                if (!this.hasImportedEvents) {
                    var b = this,
                        c = u(b.series.options.point, b.options).events;
                    b.events = c;
                    a.objectEach(c, function (a, c) {
                        z(b, c, a)
                    });
                    this.hasImportedEvents = !0
                }
            },
            setState: function (a, c) {
                var d = Math.floor(this.plotX),
                    g = this.plotY,
                    f = this.series,
                    k = f.options.states[a] || {},
                    h = e[f.type].marker && f.options.marker,
                    l = h && !1 === h.enabled,
                    n = h && h.states && h.states[a] || {},
                    u = !1 === n.enabled,
                    q = f.stateMarkerGraphic,
                    x = this.marker || {},
                    t = f.chart,
                    D = f.halo,
                    A, H = h && f.markerAttribs;
                a = a || "";
                if (!(a === this.state && !c || this.selected && "select" !== a || !1 === k.enabled || a && (u || l && !1 === n.enabled) || a && x.states && x.states[a] && !1 === x.states[a].enabled)) {
                    H && (A = f.markerAttribs(this,
                        a));
                    if (this.graphic) this.state && this.graphic.removeClass("highcharts-point-" + this.state), a && this.graphic.addClass("highcharts-point-" + a), this.graphic.attr(f.pointAttribs(this, a)), A && this.graphic.animate(A, b(t.options.chart.animation, n.animation, h.animation)), q && q.hide();
                    else {
                        if (a && n) {
                            h = x.symbol || f.symbol;
                            q && q.currentSymbol !== h && (q = q.destroy());
                            if (q) q[c ? "animate" : "attr"]({
                                x: A.x,
                                y: A.y
                            });
                            else h && (f.stateMarkerGraphic = q = t.renderer.symbol(h, A.x, A.y, A.width, A.height).add(f.markerGroup), q.currentSymbol =
                                h);
                            q && q.attr(f.pointAttribs(this, a))
                        }
                        q && (q[a && t.isInsidePlot(d, g, t.inverted) ? "show" : "hide"](), q.element.point = this)
                    }(d = k.halo) && d.size ? (D || (f.halo = D = t.renderer.path().add(H ? f.markerGroup : f.group)), D[c ? "animate" : "attr"]({
                        d: this.haloPath(d.size)
                    }), D.attr({
                        "class": "highcharts-halo highcharts-color-" + b(this.colorIndex, f.colorIndex)
                    }), D.point = this, D.attr(r({
                        fill: this.color || f.color,
                        "fill-opacity": d.opacity,
                        zIndex: -1
                    }, d.attributes))) : D && D.point && D.point.haloPath && D.animate({
                        d: D.point.haloPath(0)
                    });
                    this.state =
                        a
                }
            },
            haloPath: function (a) {
                return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a)
            }
        });
        r(d.prototype, {
            onMouseOver: function () {
                var a = this.chart,
                    b = a.hoverSeries;
                if (b && b !== this) b.onMouseOut();
                this.options.events.mouseOver && q(this, "mouseOver");
                this.setState("hover");
                a.hoverSeries = this
            },
            onMouseOut: function () {
                var a = this.options,
                    b = this.chart,
                    c = b.tooltip,
                    d = b.hoverPoint;
                b.hoverSeries = null;
                if (d) d.onMouseOut();
                this && a.events.mouseOut && q(this, "mouseOut");
                !c || this.stickyTracking ||
                    c.shared && !this.noSharedTooltip || c.hide();
                this.setState()
            },
            setState: function (a) {
                var c = this,
                    d = c.options,
                    e = c.graph,
                    g = d.states,
                    f = d.lineWidth,
                    d = 0;
                a = a || "";
                if (c.state !== a && (t([c.group, c.markerGroup, c.dataLabelsGroup], function (b) {
                        b && (c.state && b.removeClass("highcharts-series-" + c.state), a && b.addClass("highcharts-series-" + a))
                    }), c.state = a, !g[a] || !1 !== g[a].enabled) && (a && (f = g[a].lineWidth || f + (g[a].lineWidthPlus || 0)), e && !e.dashstyle))
                    for (f = {
                            "stroke-width": f
                        }, e.animate(f, b(c.chart.options.chart.animation, g[a] &&
                            g[a].animation)); c["zone-graph-" + d];) c["zone-graph-" + d].attr(f), d += 1
            },
            setVisible: function (a, b) {
                var c = this,
                    d = c.chart,
                    e = c.legendItem,
                    g, f = d.options.chart.ignoreHiddenSeries,
                    k = c.visible;
                g = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !k : a) ? "show" : "hide";
                t(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function (a) {
                    if (c[a]) c[a][g]()
                });
                if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();
                e && d.legend.colorizeItem(c, a);
                c.isDirty = !0;
                c.options.stacking && t(d.series,
                    function (a) {
                        a.options.stacking && a.visible && (a.isDirty = !0)
                    });
                t(c.linkedSeries, function (b) {
                    b.setVisible(a, !1)
                });
                f && (d.isDirtyBox = !0);
                !1 !== b && d.redraw();
                q(c, g)
            },
            show: function () {
                this.setVisible(!0)
            },
            hide: function () {
                this.setVisible(!1)
            },
            select: function (a) {
                this.selected = a = void 0 === a ? !this.selected : a;
                this.checkbox && (this.checkbox.checked = a);
                q(this, a ? "select" : "unselect")
            },
            drawTracker: H.drawTrackerGraph
        })
    })(J);
    (function (a) {
        var z = a.Chart,
            B = a.each,
            C = a.inArray,
            A = a.isArray,
            f = a.isObject,
            e = a.pick,
            t = a.splat;
        z.prototype.setResponsive =
            function (e) {
                var f = this.options.responsive,
                    h = [],
                    g = this.currentResponsive;
                f && f.rules && B(f.rules, function (g) {
                    void 0 === g._id && (g._id = a.uniqueKey());
                    this.matchResponsiveRule(g, h, e)
                }, this);
                var r = a.merge.apply(0, a.map(h, function (e) {
                        return a.find(f.rules, function (a) {
                            return a._id === e
                        }).chartOptions
                    })),
                    h = h.toString() || void 0;
                h !== (g && g.ruleIds) && (g && this.update(g.undoOptions, e), h ? (this.currentResponsive = {
                    ruleIds: h,
                    mergedOptions: r,
                    undoOptions: this.currentOptions(r)
                }, this.update(r, e)) : this.currentResponsive = void 0)
            };
        z.prototype.matchResponsiveRule = function (a, f) {
            var h = a.condition;
            (h.callback || function () {
                return this.chartWidth <= e(h.maxWidth, Number.MAX_VALUE) && this.chartHeight <= e(h.maxHeight, Number.MAX_VALUE) && this.chartWidth >= e(h.minWidth, 0) && this.chartHeight >= e(h.minHeight, 0)
            }).call(this) && f.push(a._id)
        };
        z.prototype.currentOptions = function (e) {
            function q(e, h, l, u) {
                var b;
                a.objectEach(e, function (a, d) {
                    if (!u && -1 < C(d, ["series", "xAxis", "yAxis"]))
                        for (e[d] = t(e[d]), l[d] = [], b = 0; b < e[d].length; b++) h[d][b] && (l[d][b] = {}, q(a[b],
                            h[d][b], l[d][b], u + 1));
                    else f(a) ? (l[d] = A(a) ? [] : {}, q(a, h[d] || {}, l[d], u + 1)) : l[d] = h[d] || null
                })
            }
            var h = {};
            q(e, this.options, h, 0);
            return h
        }
    })(J);
    (function (a) {
        var z = a.Axis,
            B = a.each,
            C = a.pick;
        a = a.wrap;
        a(z.prototype, "getSeriesExtremes", function (a) {
            var f = this.isXAxis,
                e, t, r = [],
                q;
            f && B(this.series, function (a, e) {
                a.useMapGeometry && (r[e] = a.xData, a.xData = [])
            });
            a.call(this);
            f && (e = C(this.dataMin, Number.MAX_VALUE), t = C(this.dataMax, -Number.MAX_VALUE), B(this.series, function (a, g) {
                a.useMapGeometry && (e = Math.min(e, C(a.minX, e)),
                    t = Math.max(t, C(a.maxX, e)), a.xData = r[g], q = !0)
            }), q && (this.dataMin = e, this.dataMax = t))
        });
        a(z.prototype, "setAxisTranslation", function (a) {
            var f = this.chart,
                e = f.plotWidth / f.plotHeight,
                f = f.xAxis[0],
                t;
            a.call(this);
            "yAxis" === this.coll && void 0 !== f.transA && B(this.series, function (a) {
                a.preserveAspectRatio && (t = !0)
            });
            if (t && (this.transA = f.transA = Math.min(this.transA, f.transA), a = e / ((f.max - f.min) / (this.max - this.min)), a = 1 > a ? this : f, e = (a.max - a.min) * a.transA, a.pixelPadding = a.len - e, a.minPixelPadding = a.pixelPadding / 2, e = a.fixTo)) {
                e =
                    e[1] - a.toValue(e[0], !0);
                e *= a.transA;
                if (Math.abs(e) > a.minPixelPadding || a.min === a.dataMin && a.max === a.dataMax) e = 0;
                a.minPixelPadding -= e
            }
        });
        a(z.prototype, "render", function (a) {
            a.call(this);
            this.fixTo = null
        })
    })(J);
    (function (a) {
        var z = a.Axis,
            B = a.Chart,
            C = a.color,
            A, f = a.each,
            e = a.extend,
            t = a.isNumber,
            r = a.Legend,
            q = a.LegendSymbolMixin,
            h = a.noop,
            g = a.merge,
            x = a.pick,
            l = a.wrap;
        A = a.ColorAxis = function () {
            this.init.apply(this, arguments)
        };
        e(A.prototype, z.prototype);
        e(A.prototype, {
            defaultColorAxisOptions: {
                lineWidth: 0,
                minPadding: 0,
                maxPadding: 0,
                gridLineWidth: 1,
                tickPixelInterval: 72,
                startOnTick: !0,
                endOnTick: !0,
                offset: 0,
                marker: {
                    animation: {
                        duration: 50
                    },
                    width: .01,
                    color: "#999999"
                },
                labels: {
                    overflow: "justify",
                    rotation: 0
                },
                minColor: "#e6ebf5",
                maxColor: "#003399",
                tickLength: 5,
                showInLegend: !0
            },
            keepProps: ["legendGroup", "legendItemHeight", "legendItemWidth", "legendItem", "legendSymbol"].concat(z.prototype.keepProps),
            init: function (a, b) {
                var e = "vertical" !== a.options.legend.layout,
                    d;
                this.coll = "colorAxis";
                d = g(this.defaultColorAxisOptions, {
                    side: e ?
                        2 : 1,
                    reversed: !e
                }, b, {
                    opposite: !e,
                    showEmpty: !1,
                    title: null
                });
                z.prototype.init.call(this, a, d);
                b.dataClasses && this.initDataClasses(b);
                this.initStops(b);
                this.horiz = e;
                this.zoomEnabled = !1;
                this.defaultLegendLength = 200
            },
            tweenColors: function (a, b, e) {
                var d;
                b.rgba.length && a.rgba.length ? (a = a.rgba, b = b.rgba, d = 1 !== b[3] || 1 !== a[3], a = (d ? "rgba(" : "rgb(") + Math.round(b[0] + (a[0] - b[0]) * (1 - e)) + "," + Math.round(b[1] + (a[1] - b[1]) * (1 - e)) + "," + Math.round(b[2] + (a[2] - b[2]) * (1 - e)) + (d ? "," + (b[3] + (a[3] - b[3]) * (1 - e)) : "") + ")") : a = b.input || "none";
                return a
            },
            initDataClasses: function (a) {
                var b = this,
                    e = this.chart,
                    d, c = 0,
                    h = e.options.chart.colorCount,
                    l = this.options,
                    n = a.dataClasses.length;
                this.dataClasses = d = [];
                this.legendItems = [];
                f(a.dataClasses, function (a, f) {
                    a = g(a);
                    d.push(a);
                    a.color || ("category" === l.dataClassColor ? (f = e.options.colors, h = f.length, a.color = f[c], a.colorIndex = c, c++, c === h && (c = 0)) : a.color = b.tweenColors(C(l.minColor), C(l.maxColor), 2 > n ? .5 : f / (n - 1)))
                })
            },
            initStops: function (a) {
                this.stops = a.stops || [
                    [0, this.options.minColor],
                    [1, this.options.maxColor]
                ];
                f(this.stops, function (a) {
                    a.color = C(a[1])
                })
            },
            setOptions: function (a) {
                z.prototype.setOptions.call(this, a);
                this.options.crosshair = this.options.marker
            },
            setAxisSize: function () {
                var a = this.legendSymbol,
                    b = this.chart,
                    e = b.options.legend || {},
                    d, c;
                a ? (this.left = e = a.attr("x"), this.top = d = a.attr("y"), this.width = c = a.attr("width"), this.height = a = a.attr("height"), this.right = b.chartWidth - e - c, this.bottom = b.chartHeight - d - a, this.len = this.horiz ? c : a, this.pos = this.horiz ? e : d) : this.len = (this.horiz ? e.symbolWidth : e.symbolHeight) ||
                    this.defaultLegendLength
            },
            toColor: function (a, b) {
                var e = this.stops,
                    d, c, g = this.dataClasses,
                    f, h;
                if (g)
                    for (h = g.length; h--;) {
                        if (f = g[h], d = f.from, e = f.to, (void 0 === d || a >= d) && (void 0 === e || a <= e)) {
                            c = f.color;
                            b && (b.dataClass = h, b.colorIndex = f.colorIndex);
                            break
                        }
                    } else {
                        this.isLog && (a = this.val2lin(a));
                        a = 1 - (this.max - a) / (this.max - this.min || 1);
                        for (h = e.length; h-- && !(a > e[h][0]););
                        d = e[h] || e[h + 1];
                        e = e[h + 1] || d;
                        a = 1 - (e[0] - a) / (e[0] - d[0] || 1);
                        c = this.tweenColors(d.color, e.color, a)
                    }
                return c
            },
            getOffset: function () {
                var a = this.legendGroup,
                    b = this.chart.axisOffset[this.side];
                a && (this.axisParent = a, z.prototype.getOffset.call(this), this.added || (this.added = !0, this.labelLeft = 0, this.labelRight = this.width), this.chart.axisOffset[this.side] = b)
            },
            setLegendColor: function () {
                var a, b = this.options,
                    e = this.reversed;
                a = e ? 1 : 0;
                e = e ? 0 : 1;
                a = this.horiz ? [a, 0, e, 0] : [0, e, 0, a];
                this.legendColor = {
                    linearGradient: {
                        x1: a[0],
                        y1: a[1],
                        x2: a[2],
                        y2: a[3]
                    },
                    stops: b.stops || [
                        [0, b.minColor],
                        [1, b.maxColor]
                    ]
                }
            },
            drawLegendSymbol: function (a, b) {
                var e = a.padding,
                    d = a.options,
                    c = this.horiz,
                    g =
                    x(d.symbolWidth, c ? this.defaultLegendLength : 12),
                    f = x(d.symbolHeight, c ? 12 : this.defaultLegendLength),
                    h = x(d.labelPadding, c ? 16 : 30),
                    d = x(d.itemDistance, 10);
                this.setLegendColor();
                b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 11, g, f).attr({
                    zIndex: 1
                }).add(b.legendGroup);
                this.legendItemWidth = g + e + (c ? d : h);
                this.legendItemHeight = f + e + (c ? h : 0)
            },
            setState: h,
            visible: !0,
            setVisible: h,
            getSeriesExtremes: function () {
                var a = this.series,
                    b = a.length;
                this.dataMin = Infinity;
                for (this.dataMax = -Infinity; b--;) void 0 !== a[b].valueMin &&
                    (this.dataMin = Math.min(this.dataMin, a[b].valueMin), this.dataMax = Math.max(this.dataMax, a[b].valueMax))
            },
            drawCrosshair: function (a, b) {
                var e = b && b.plotX,
                    d = b && b.plotY,
                    c, g = this.pos,
                    f = this.len;
                b && (c = this.toPixels(b[b.series.colorKey]), c < g ? c = g - 2 : c > g + f && (c = g + f + 2), b.plotX = c, b.plotY = this.len - c, z.prototype.drawCrosshair.call(this, a, b), b.plotX = e, b.plotY = d, this.cross && (this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup), this.cross.attr({
                    fill: this.crosshair.color
                })))
            },
            getPlotLinePath: function (a,
                b, e, d, c) {
                return t(c) ? this.horiz ? ["M", c - 4, this.top - 6, "L", c + 4, this.top - 6, c, this.top, "Z"] : ["M", this.left, c, "L", this.left - 6, c + 6, this.left - 6, c - 6, "Z"] : z.prototype.getPlotLinePath.call(this, a, b, e, d)
            },
            update: function (a, b) {
                var e = this.chart,
                    d = e.legend;
                f(this.series, function (a) {
                    a.isDirtyData = !0
                });
                a.dataClasses && d.allItems && (f(d.allItems, function (a) {
                    a.isDataClass && a.legendGroup && a.legendGroup.destroy()
                }), e.isDirtyLegend = !0);
                e.options[this.coll] = g(this.userOptions, a);
                z.prototype.update.call(this, a, b);
                this.legendItem &&
                    (this.setLegendColor(), d.colorizeItem(this, !0))
            },
            remove: function () {
                this.legendItem && this.chart.legend.destroyItem(this);
                z.prototype.remove.call(this)
            },
            getDataClassLegendSymbols: function () {
                var g = this,
                    b = this.chart,
                    k = this.legendItems,
                    d = b.options.legend,
                    c = d.valueDecimals,
                    l = d.valueSuffix || "",
                    r;
                k.length || f(this.dataClasses, function (d, u) {
                    var n = !0,
                        x = d.from,
                        t = d.to;
                    r = "";
                    void 0 === x ? r = "\x3c " : void 0 === t && (r = "\x3e ");
                    void 0 !== x && (r += a.numberFormat(x, c) + l);
                    void 0 !== x && void 0 !== t && (r += " - ");
                    void 0 !== t && (r += a.numberFormat(t,
                        c) + l);
                    k.push(e({
                        chart: b,
                        name: r,
                        options: {},
                        drawLegendSymbol: q.drawRectangle,
                        visible: !0,
                        setState: h,
                        isDataClass: !0,
                        setVisible: function () {
                            n = this.visible = !n;
                            f(g.series, function (a) {
                                f(a.points, function (a) {
                                    a.dataClass === u && a.setVisible(n)
                                })
                            });
                            b.legend.colorizeItem(this, n)
                        }
                    }, d))
                });
                return k
            },
            name: ""
        });
        f(["fill", "stroke"], function (e) {
            a.Fx.prototype[e + "Setter"] = function () {
                this.elem.attr(e, A.prototype.tweenColors(C(this.start), C(this.end), this.pos), null, !0)
            }
        });
        l(B.prototype, "getAxes", function (a) {
            var b = this.options.colorAxis;
            a.call(this);
            this.colorAxis = [];
            b && new A(this, b)
        });
        l(r.prototype, "getAllItems", function (a) {
            var b = [],
                e = this.chart.colorAxis[0];
            e && e.options && (e.options.showInLegend && (e.options.dataClasses ? b = b.concat(e.getDataClassLegendSymbols()) : b.push(e)), f(e.series, function (a) {
                a.options.showInLegend = !1
            }));
            return b.concat(a.call(this))
        });
        l(r.prototype, "colorizeItem", function (a, b, e) {
            a.call(this, b, e);
            e && b.legendColor && b.legendSymbol.attr({
                fill: b.legendColor
            })
        })
    })(J);
    (function (a) {
        var z = a.defined,
            B = a.each,
            C = a.noop,
            A =
            a.seriesTypes;
        a.colorPointMixin = {
            isValid: function () {
                return null !== this.value
            },
            setVisible: function (a) {
                var e = this,
                    f = a ? "show" : "hide";
                B(["graphic", "dataLabel"], function (a) {
                    if (e[a]) e[a][f]()
                })
            },
            setState: function (f) {
                a.Point.prototype.setState.call(this, f);
                this.graphic && this.graphic.attr({
                    zIndex: "hover" === f ? 1 : 0
                })
            }
        };
        a.colorSeriesMixin = {
            pointArrayMap: ["value"],
            axisTypes: ["xAxis", "yAxis", "colorAxis"],
            optionalAxis: "colorAxis",
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
            getSymbol: C,
            parallelArrays: ["x",
                "y", "value"
            ],
            colorKey: "value",
            pointAttribs: A.column.prototype.pointAttribs,
            translateColors: function () {
                var a = this,
                    e = this.options.nullColor,
                    t = this.colorAxis,
                    r = this.colorKey;
                B(this.data, function (f) {
                    var h = f[r];
                    if (h = f.options.color || (f.isNull ? e : t && void 0 !== h ? t.toColor(h, f) : f.color || a.color)) f.color = h
                })
            },
            colorAttribs: function (a) {
                var e = {};
                z(a.color) && (e[this.colorProp || "fill"] = a.color);
                return e
            }
        }
    })(J);
    (function (a) {
        function z(a) {
            a && (a.preventDefault && a.preventDefault(), a.stopPropagation && a.stopPropagation(),
                a.cancelBubble = !0)
        }

        function B(a) {
            this.init(a)
        }
        var C = a.addEvent,
            A = a.Chart,
            f = a.doc,
            e = a.each,
            t = a.extend,
            r = a.merge,
            q = a.pick,
            h = a.wrap;
        B.prototype.init = function (a) {
            this.chart = a;
            a.mapNavButtons = []
        };
        B.prototype.update = function (e) {
            var g = this.chart,
                f = g.options.mapNavigation,
                h, b, k, d, c, D = function (a) {
                    this.handler.call(g, a);
                    z(a)
                },
                A = g.mapNavButtons;
            e && (f = g.options.mapNavigation = r(g.options.mapNavigation, e));
            for (; A.length;) A.pop().destroy();
            q(f.enableButtons, f.enabled) && !g.renderer.forExport && a.objectEach(f.buttons,
                function (a, e) {
                    h = r(f.buttonOptions, a);
                    b = h.theme;
                    b.style = r(h.theme.style, h.style);
                    d = (k = b.states) && k.hover;
                    c = k && k.select;
                    a = g.renderer.button(h.text, 0, 0, D, b, d, c, 0, "zoomIn" === e ? "topbutton" : "bottombutton").addClass("highcharts-map-navigation").attr({
                        width: h.width,
                        height: h.height,
                        title: g.options.lang[e],
                        padding: h.padding,
                        zIndex: 5
                    }).add();
                    a.handler = h.onclick;
                    a.align(t(h, {
                        width: a.width,
                        height: 2 * a.height
                    }), null, h.alignTo);
                    C(a.element, "dblclick", z);
                    A.push(a)
                });
            this.updateEvents(f)
        };
        B.prototype.updateEvents =
            function (a) {
                var e = this.chart;
                q(a.enableDoubleClickZoom, a.enabled) || a.enableDoubleClickZoomTo ? this.unbindDblClick = this.unbindDblClick || C(e.container, "dblclick", function (a) {
                    e.pointer.onContainerDblClick(a)
                }) : this.unbindDblClick && (this.unbindDblClick = this.unbindDblClick());
                q(a.enableMouseWheelZoom, a.enabled) ? this.unbindMouseWheel = this.unbindMouseWheel || C(e.container, void 0 === f.onmousewheel ? "DOMMouseScroll" : "mousewheel", function (a) {
                        e.pointer.onContainerMouseWheel(a);
                        z(a);
                        return !1
                    }) : this.unbindMouseWheel &&
                    (this.unbindMouseWheel = this.unbindMouseWheel())
            };
        t(A.prototype, {
            fitToBox: function (a, f) {
                e([
                    ["x", "width"],
                    ["y", "height"]
                ], function (e) {
                    var g = e[0];
                    e = e[1];
                    a[g] + a[e] > f[g] + f[e] && (a[e] > f[e] ? (a[e] = f[e], a[g] = f[g]) : a[g] = f[g] + f[e] - a[e]);
                    a[e] > f[e] && (a[e] = f[e]);
                    a[g] < f[g] && (a[g] = f[g])
                });
                return a
            },
            mapZoom: function (a, e, f, h, b) {
                var g = this.xAxis[0],
                    d = g.max - g.min,
                    c = q(e, g.min + d / 2),
                    l = d * a,
                    d = this.yAxis[0],
                    r = d.max - d.min,
                    n = q(f, d.min + r / 2),
                    r = r * a,
                    c = this.fitToBox({
                        x: c - l * (h ? (h - g.pos) / g.len : .5),
                        y: n - r * (b ? (b - d.pos) / d.len : .5),
                        width: l,
                        height: r
                    }, {
                        x: g.dataMin,
                        y: d.dataMin,
                        width: g.dataMax - g.dataMin,
                        height: d.dataMax - d.dataMin
                    }),
                    l = c.x <= g.dataMin && c.width >= g.dataMax - g.dataMin && c.y <= d.dataMin && c.height >= d.dataMax - d.dataMin;
                h && (g.fixTo = [h - g.pos, e]);
                b && (d.fixTo = [b - d.pos, f]);
                void 0 === a || l ? (g.setExtremes(void 0, void 0, !1), d.setExtremes(void 0, void 0, !1)) : (g.setExtremes(c.x, c.x + c.width, !1), d.setExtremes(c.y, c.y + c.height, !1));
                this.redraw()
            }
        });
        h(A.prototype, "render", function (a) {
            this.mapNavigation = new B(this);
            this.mapNavigation.update();
            a.call(this)
        })
    })(J);
    (function (a) {
        var z = a.extend,
            B = a.pick,
            C = a.Pointer;
        a = a.wrap;
        z(C.prototype, {
            onContainerDblClick: function (a) {
                var f = this.chart;
                a = this.normalize(a);
                f.options.mapNavigation.enableDoubleClickZoomTo ? f.pointer.inClass(a.target, "highcharts-tracker") && f.hoverPoint && f.hoverPoint.zoomTo() : f.isInsidePlot(a.chartX - f.plotLeft, a.chartY - f.plotTop) && f.mapZoom(.5, f.xAxis[0].toValue(a.chartX), f.yAxis[0].toValue(a.chartY), a.chartX, a.chartY)
            },
            onContainerMouseWheel: function (a) {
                var f = this.chart,
                    e;
                a = this.normalize(a);
                e = a.detail ||
                    -(a.wheelDelta / 120);
                f.isInsidePlot(a.chartX - f.plotLeft, a.chartY - f.plotTop) && f.mapZoom(Math.pow(f.options.mapNavigation.mouseWheelSensitivity, e), f.xAxis[0].toValue(a.chartX), f.yAxis[0].toValue(a.chartY), a.chartX, a.chartY)
            }
        });
        a(C.prototype, "zoomOption", function (a) {
            var f = this.chart.options.mapNavigation;
            B(f.enableTouchZoom, f.enabled) && (this.chart.options.chart.pinchType = "xy");
            a.apply(this, [].slice.call(arguments, 1))
        });
        a(C.prototype, "pinchTranslate", function (a, f, e, t, r, q, h) {
            a.call(this, f, e, t, r, q, h);
            "map" ===
            this.chart.options.chart.type && this.hasZoom && (a = t.scaleX > t.scaleY, this.pinchTranslateDirection(!a, f, e, t, r, q, h, a ? t.scaleX : t.scaleY))
        })
    })(J);
    (function (a) {
        var z = a.color,
            B = a.ColorAxis,
            C = a.colorPointMixin,
            A = a.each,
            f = a.extend,
            e = a.isNumber,
            t = a.map,
            r = a.merge,
            q = a.noop,
            h = a.pick,
            g = a.isArray,
            x = a.Point,
            l = a.Series,
            u = a.seriesType,
            b = a.seriesTypes,
            k = a.splat,
            d = void 0 !== a.doc.documentElement.style.vectorEffect;
        u("map", "scatter", {
            allAreas: !0,
            animation: !1,
            nullColor: "#f7f7f7",
            borderColor: "#cccccc",
            borderWidth: 1,
            marker: null,
            stickyTracking: !1,
            joinBy: "hc-key",
            dataLabels: {
                formatter: function () {
                    return this.point.value
                },
                inside: !0,
                verticalAlign: "middle",
                crop: !1,
                overflow: !1,
                padding: 0
            },
            turboThreshold: 0,
            tooltip: {
                followPointer: !0,
                pointFormat: "{point.name}: {point.value}\x3cbr/\x3e"
            },
            states: {
                normal: {
                    animation: !0
                },
                hover: {
                    brightness: .2,
                    halo: null
                },
                select: {
                    color: "#cccccc"
                }
            }
        }, r(a.colorSeriesMixin, {
            type: "map",
            supportsDrilldown: !0,
            getExtremesFromAll: !0,
            useMapGeometry: !0,
            forceDL: !0,
            searchPoint: q,
            directTouch: !0,
            preserveAspectRatio: !0,
            pointArrayMap: ["value"],
            getBox: function (b) {
                var c = Number.MAX_VALUE,
                    d = -c,
                    f = c,
                    g = -c,
                    k = c,
                    l = c,
                    q = this.xAxis,
                    m = this.yAxis,
                    r;
                A(b || [], function (b) {
                    if (b.path) {
                        "string" === typeof b.path && (b.path = a.splitPath(b.path));
                        var m = b.path || [],
                            n = m.length,
                            q = !1,
                            u = -c,
                            t = c,
                            x = -c,
                            w = c,
                            D = b.properties;
                        if (!b._foundBox) {
                            for (; n--;) e(m[n]) && (q ? (u = Math.max(u, m[n]), t = Math.min(t, m[n])) : (x = Math.max(x, m[n]), w = Math.min(w, m[n])), q = !q);
                            b._midX = t + (u - t) * (b.middleX || D && D["hc-middle-x"] || .5);
                            b._midY = w + (x - w) * (b.middleY || D && D["hc-middle-y"] || .5);
                            b._maxX = u;
                            b._minX = t;
                            b._maxY =
                                x;
                            b._minY = w;
                            b.labelrank = h(b.labelrank, (u - t) * (x - w));
                            b._foundBox = !0
                        }
                        d = Math.max(d, b._maxX);
                        f = Math.min(f, b._minX);
                        g = Math.max(g, b._maxY);
                        k = Math.min(k, b._minY);
                        l = Math.min(b._maxX - b._minX, b._maxY - b._minY, l);
                        r = !0
                    }
                });
                r && (this.minY = Math.min(k, h(this.minY, c)), this.maxY = Math.max(g, h(this.maxY, -c)), this.minX = Math.min(f, h(this.minX, c)), this.maxX = Math.max(d, h(this.maxX, -c)), q && void 0 === q.options.minRange && (q.minRange = Math.min(5 * l, (this.maxX - this.minX) / 5, q.minRange || c)), m && void 0 === m.options.minRange && (m.minRange =
                    Math.min(5 * l, (this.maxY - this.minY) / 5, m.minRange || c)))
            },
            getExtremes: function () {
                l.prototype.getExtremes.call(this, this.valueData);
                this.chart.hasRendered && this.isDirtyData && this.getBox(this.options.data);
                this.valueMin = this.dataMin;
                this.valueMax = this.dataMax;
                this.dataMin = this.minY;
                this.dataMax = this.maxY
            },
            translatePath: function (a) {
                var b = !1,
                    c = this.xAxis,
                    d = this.yAxis,
                    f = c.min,
                    g = c.transA,
                    c = c.minPixelPadding,
                    h = d.min,
                    k = d.transA,
                    d = d.minPixelPadding,
                    l, q = [];
                if (a)
                    for (l = a.length; l--;) e(a[l]) ? (q[l] = b ? (a[l] - f) * g + c :
                        (a[l] - h) * k + d, b = !b) : q[l] = a[l];
                return q
            },
            setData: function (b, d, f, h) {
                var c = this.options,
                    n = this.chart.options.chart,
                    q = n && n.map,
                    u = c.mapData,
                    m = c.joinBy,
                    x = null === m,
                    D = c.keys || this.pointArrayMap,
                    z = [],
                    p = {},
                    y = this.chart.mapTransforms;
                !u && q && (u = "string" === typeof q ? a.maps[q] : q);
                x && (m = "_i");
                m = this.joinBy = k(m);
                m[1] || (m[1] = m[0]);
                b && A(b, function (a, d) {
                    var f = 0;
                    if (e(a)) b[d] = {
                        value: a
                    };
                    else if (g(a)) {
                        b[d] = {};
                        !c.keys && a.length > D.length && "string" === typeof a[0] && (b[d]["hc-key"] = a[0], ++f);
                        for (var h = 0; h < D.length; ++h, ++f) D[h] &&
                            (b[d][D[h]] = a[f])
                    }
                    x && (b[d]._i = d)
                });
                this.getBox(b);
                (this.chart.mapTransforms = y = n && n.mapTransforms || u && u["hc-transform"] || y) && a.objectEach(y, function (a) {
                    a.rotation && (a.cosAngle = Math.cos(a.rotation), a.sinAngle = Math.sin(a.rotation))
                });
                if (u) {
                    "FeatureCollection" === u.type && (this.mapTitle = u.title, u = a.geojson(u, this.type, this));
                    this.mapData = u;
                    this.mapMap = {};
                    for (y = 0; y < u.length; y++) n = u[y], q = n.properties, n._i = y, m[0] && q && q[m[0]] && (n[m[0]] = q[m[0]]), p[n[m[0]]] = n;
                    this.mapMap = p;
                    b && m[1] && A(b, function (a) {
                        p[a[m[1]]] &&
                            z.push(p[a[m[1]]])
                    });
                    c.allAreas ? (this.getBox(u), b = b || [], m[1] && A(b, function (a) {
                        z.push(a[m[1]])
                    }), z = "|" + t(z, function (a) {
                        return a && a[m[0]]
                    }).join("|") + "|", A(u, function (a) {
                        m[0] && -1 !== z.indexOf("|" + a[m[0]] + "|") || (b.push(r(a, {
                            value: null
                        })), h = !1)
                    })) : this.getBox(z)
                }
                l.prototype.setData.call(this, b, d, f, h)
            },
            drawGraph: q,
            drawDataLabels: q,
            doFullTranslate: function () {
                return this.isDirtyData || this.chart.isResizing || this.chart.renderer.isVML || !this.baseTrans
            },
            translate: function () {
                var a = this,
                    b = a.xAxis,
                    d = a.yAxis,
                    e = a.doFullTranslate();
                a.generatePoints();
                A(a.data, function (c) {
                    c.plotX = b.toPixels(c._midX, !0);
                    c.plotY = d.toPixels(c._midY, !0);
                    e && (c.shapeType = "path", c.shapeArgs = {
                        d: a.translatePath(c.path)
                    })
                });
                a.translateColors()
            },
            pointAttribs: function (a, e) {
                e = b.column.prototype.pointAttribs.call(this, a, e);
                a.isFading && delete e.fill;
                d ? e["vector-effect"] = "non-scaling-stroke" : e["stroke-width"] = "inherit";
                return e
            },
            drawPoints: function () {
                var a = this,
                    e = a.xAxis,
                    f = a.yAxis,
                    g = a.group,
                    h = a.chart,
                    k = h.renderer,
                    l, q, m, r, u = this.baseTrans,
                    t, p, x, z, C;
                a.transformGroup ||
                    (a.transformGroup = k.g().attr({
                        scaleX: 1,
                        scaleY: 1
                    }).add(g), a.transformGroup.survive = !0);
                a.doFullTranslate() ? (h.hasRendered && A(a.points, function (b) {
                        b.shapeArgs && (b.shapeArgs.fill = a.pointAttribs(b, b.state).fill)
                    }), a.group = a.transformGroup, b.column.prototype.drawPoints.apply(a), a.group = g, A(a.points, function (a) {
                        a.graphic && (a.name && a.graphic.addClass("highcharts-name-" + a.name.replace(/ /g, "-").toLowerCase()), a.properties && a.properties["hc-key"] && a.graphic.addClass("highcharts-key-" + a.properties["hc-key"].toLowerCase()))
                    }),
                    this.baseTrans = {
                        originX: e.min - e.minPixelPadding / e.transA,
                        originY: f.min - f.minPixelPadding / f.transA + (f.reversed ? 0 : f.len / f.transA),
                        transAX: e.transA,
                        transAY: f.transA
                    }, this.transformGroup.animate({
                        translateX: 0,
                        translateY: 0,
                        scaleX: 1,
                        scaleY: 1
                    })) : (l = e.transA / u.transAX, q = f.transA / u.transAY, m = e.toPixels(u.originX, !0), r = f.toPixels(u.originY, !0), .99 < l && 1.01 > l && .99 < q && 1.01 > q && (q = l = 1, m = Math.round(m), r = Math.round(r)), t = this.transformGroup, h.renderer.globalAnimation ? (p = t.attr("translateX"), x = t.attr("translateY"),
                    z = t.attr("scaleX"), C = t.attr("scaleY"), t.attr({
                        animator: 0
                    }).animate({
                        animator: 1
                    }, {
                        step: function (a, b) {
                            t.attr({
                                translateX: p + (m - p) * b.pos,
                                translateY: x + (r - x) * b.pos,
                                scaleX: z + (l - z) * b.pos,
                                scaleY: C + (q - C) * b.pos
                            })
                        }
                    })) : t.attr({
                    translateX: m,
                    translateY: r,
                    scaleX: l,
                    scaleY: q
                }));
                d || a.group.element.setAttribute("stroke-width", a.options[a.pointAttrToOptions && a.pointAttrToOptions["stroke-width"] || "borderWidth"] / (l || 1));
                this.drawMapDataLabels()
            },
            drawMapDataLabels: function () {
                l.prototype.drawDataLabels.call(this);
                this.dataLabelsGroup &&
                    this.dataLabelsGroup.clip(this.chart.clipRect)
            },
            render: function () {
                var a = this,
                    b = l.prototype.render;
                a.chart.renderer.isVML && 3E3 < a.data.length ? setTimeout(function () {
                    b.call(a)
                }) : b.call(a)
            },
            animate: function (a) {
                var b = this.options.animation,
                    c = this.group,
                    d = this.xAxis,
                    e = this.yAxis,
                    f = d.pos,
                    g = e.pos;
                this.chart.renderer.isSVG && (!0 === b && (b = {
                    duration: 1E3
                }), a ? c.attr({
                    translateX: f + d.len / 2,
                    translateY: g + e.len / 2,
                    scaleX: .001,
                    scaleY: .001
                }) : (c.animate({
                    translateX: f,
                    translateY: g,
                    scaleX: 1,
                    scaleY: 1
                }, b), this.animate = null))
            },
            animateDrilldown: function (a) {
                var b = this.chart.plotBox,
                    c = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1],
                    d = c.bBox,
                    e = this.chart.options.drilldown.animation;
                a || (a = Math.min(d.width / b.width, d.height / b.height), c.shapeArgs = {
                    scaleX: a,
                    scaleY: a,
                    translateX: d.x,
                    translateY: d.y
                }, A(this.points, function (a) {
                    a.graphic && a.graphic.attr(c.shapeArgs).animate({
                        scaleX: 1,
                        scaleY: 1,
                        translateX: 0,
                        translateY: 0
                    }, e)
                }), this.animate = null)
            },
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle,
            animateDrillupFrom: function (a) {
                b.column.prototype.animateDrillupFrom.call(this,
                    a)
            },
            animateDrillupTo: function (a) {
                b.column.prototype.animateDrillupTo.call(this, a)
            }
        }), f({
            applyOptions: function (a, b) {
                a = x.prototype.applyOptions.call(this, a, b);
                b = this.series;
                var c = b.joinBy;
                b.mapData && ((c = void 0 !== a[c[1]] && b.mapMap[a[c[1]]]) ? (b.xyFromShape && (a.x = c._midX, a.y = c._midY), f(a, c)) : a.value = a.value || null);
                return a
            },
            onMouseOver: function (a) {
                clearTimeout(this.colorInterval);
                if (null !== this.value || this.series.options.nullInteraction) x.prototype.onMouseOver.call(this, a);
                else this.series.onMouseOut(a)
            },
            onMouseOut: function () {
                var a = this,
                    b = +new Date,
                    d = z(this.series.pointAttribs(a).fill),
                    e = z(this.series.pointAttribs(a, "hover").fill),
                    f = a.series.options.states.normal.animation,
                    g = f && (f.duration || 500);
                g && 4 === d.rgba.length && 4 === e.rgba.length && "select" !== a.state && (clearTimeout(a.colorInterval), a.colorInterval = setInterval(function () {
                    var c = (new Date - b) / g,
                        f = a.graphic;
                    1 < c && (c = 1);
                    f && f.attr("fill", B.prototype.tweenColors.call(0, e, d, c));
                    1 <= c && clearTimeout(a.colorInterval)
                }, 13), a.isFading = !0);
                x.prototype.onMouseOut.call(a);
                a.isFading = null
            },
            zoomTo: function () {
                var a = this.series;
                a.xAxis.setExtremes(this._minX, this._maxX, !1);
                a.yAxis.setExtremes(this._minY, this._maxY, !1);
                a.chart.redraw()
            }
        }, C))
    })(J);
    (function (a) {
        var z = a.seriesType,
            B = a.seriesTypes;
        z("mapline", "map", {
            lineWidth: 1,
            fillColor: "none"
        }, {
            type: "mapline",
            colorProp: "stroke",
            pointAttrToOptions: {
                stroke: "color",
                "stroke-width": "lineWidth"
            },
            pointAttribs: function (a, z) {
                a = B.map.prototype.pointAttribs.call(this, a, z);
                a.fill = this.options.fillColor;
                return a
            },
            drawLegendSymbol: B.line.prototype.drawLegendSymbol
        })
    })(J);
    (function (a) {
        var z = a.merge,
            B = a.Point;
        a = a.seriesType;
        a("mappoint", "scatter", {
            dataLabels: {
                enabled: !0,
                formatter: function () {
                    return this.point.name
                },
                crop: !1,
                defer: !1,
                overflow: !1,
                style: {
                    color: "#000000"
                }
            }
        }, {
            type: "mappoint",
            forceDL: !0
        }, {
            applyOptions: function (a, A) {
                a = void 0 !== a.lat && void 0 !== a.lon ? z(a, this.series.chart.fromLatLonToPoint(a)) : a;
                return B.prototype.applyOptions.call(this, a, A)
            }
        })
    })(J);
    (function (a) {
        var z = a.arrayMax,
            B = a.arrayMin,
            C = a.Axis,
            A = a.color,
            f = a.each,
            e = a.isNumber,
            t = a.noop,
            r = a.pick,
            q = a.pInt,
            h = a.Point,
            g = a.Series,
            x = a.seriesType,
            l = a.seriesTypes;
        x("bubble", "scatter", {
            dataLabels: {
                formatter: function () {
                    return this.point.z
                },
                inside: !0,
                verticalAlign: "middle"
            },
            marker: {
                lineColor: null,
                lineWidth: 1,
                radius: null,
                states: {
                    hover: {
                        radiusPlus: 0
                    }
                },
                symbol: "circle"
            },
            minSize: 8,
            maxSize: "20%",
            softThreshold: !1,
            states: {
                hover: {
                    halo: {
                        size: 5
                    }
                }
            },
            tooltip: {
                pointFormat: "({point.x}, {point.y}), Size: {point.z}"
            },
            turboThreshold: 0,
            zThreshold: 0,
            zoneAxis: "z"
        }, {
            pointArrayMap: ["y", "z"],
            parallelArrays: ["x", "y", "z"],
            trackerGroups: ["group",
                "dataLabelsGroup"
            ],
            specialGroup: "group",
            bubblePadding: !0,
            zoneAxis: "z",
            directTouch: !0,
            pointAttribs: function (a, b) {
                var e = r(this.options.marker.fillOpacity, .5);
                a = g.prototype.pointAttribs.call(this, a, b);
                1 !== e && (a.fill = A(a.fill).setOpacity(e).get("rgba"));
                return a
            },
            getRadii: function (a, b, e, d) {
                var c, f, g, h = this.zData,
                    k = [],
                    l = this.options,
                    q = "width" !== l.sizeBy,
                    r = l.zThreshold,
                    m = b - a;
                f = 0;
                for (c = h.length; f < c; f++) g = h[f], l.sizeByAbsoluteValue && null !== g && (g = Math.abs(g - r), b = Math.max(b - r, Math.abs(a - r)), a = 0), null === g ? g =
                    null : g < a ? g = e / 2 - 1 : (g = 0 < m ? (g - a) / m : .5, q && 0 <= g && (g = Math.sqrt(g)), g = Math.ceil(e + g * (d - e)) / 2), k.push(g);
                this.radii = k
            },
            animate: function (a) {
                var b = this.options.animation;
                a || (f(this.points, function (a) {
                    var d = a.graphic,
                        c;
                    d && d.width && (c = {
                        x: d.x,
                        y: d.y,
                        width: d.width,
                        height: d.height
                    }, d.attr({
                        x: a.plotX,
                        y: a.plotY,
                        width: 1,
                        height: 1
                    }), d.animate(c, b))
                }), this.animate = null)
            },
            translate: function () {
                var f, b = this.data,
                    g, d, c = this.radii;
                l.scatter.prototype.translate.call(this);
                for (f = b.length; f--;) g = b[f], d = c ? c[f] : 0, e(d) && d >= this.minPxSize /
                    2 ? (g.marker = a.extend(g.marker, {
                        radius: d,
                        width: 2 * d,
                        height: 2 * d
                    }), g.dlBox = {
                        x: g.plotX - d,
                        y: g.plotY - d,
                        width: 2 * d,
                        height: 2 * d
                    }) : g.shapeArgs = g.plotY = g.dlBox = void 0
            },
            alignDataLabel: l.column.prototype.alignDataLabel,
            buildKDTree: t,
            applyZones: t
        }, {
            haloPath: function (a) {
                return h.prototype.haloPath.call(this, 0 === a ? 0 : (this.marker ? this.marker.radius || 0 : 0) + a)
            },
            ttBelow: !1
        });
        C.prototype.beforePadding = function () {
            var a = this,
                b = this.len,
                g = this.chart,
                d = 0,
                c = b,
                h = this.isXAxis,
                l = h ? "xData" : "yData",
                n = this.min,
                t = {},
                x = Math.min(g.plotWidth,
                    g.plotHeight),
                w = Number.MAX_VALUE,
                A = -Number.MAX_VALUE,
                m = this.max - n,
                C = b / m,
                G = [];
            f(this.series, function (b) {
                var c = b.options;
                !b.bubblePadding || !b.visible && g.options.chart.ignoreHiddenSeries || (a.allowZoomOutside = !0, G.push(b), h && (f(["minSize", "maxSize"], function (a) {
                    var b = c[a],
                        d = /%$/.test(b),
                        b = q(b);
                    t[a] = d ? x * b / 100 : b
                }), b.minPxSize = t.minSize, b.maxPxSize = Math.max(t.maxSize, t.minSize), b = b.zData, b.length && (w = r(c.zMin, Math.min(w, Math.max(B(b), !1 === c.displayNegative ? c.zThreshold : -Number.MAX_VALUE))), A = r(c.zMax, Math.max(A,
                    z(b))))))
            });
            f(G, function (b) {
                var g = b[l],
                    f = g.length,
                    k;
                h && b.getRadii(w, A, b.minPxSize, b.maxPxSize);
                if (0 < m)
                    for (; f--;) e(g[f]) && a.dataMin <= g[f] && g[f] <= a.dataMax && (k = b.radii[f], d = Math.min((g[f] - n) * C - k, d), c = Math.max((g[f] - n) * C + k, c))
            });
            G.length && 0 < m && !this.isLog && (c -= b, C *= (b + d - c) / b, f([
                ["min", "userMin", d],
                ["max", "userMax", c]
            ], function (b) {
                void 0 === r(a.options[b[0]], a[b[1]]) && (a[b[0]] += b[2] / C)
            }))
        }
    })(J);
    (function (a) {
        var z = a.merge,
            B = a.Point,
            C = a.seriesType,
            A = a.seriesTypes;
        A.bubble && C("mapbubble", "bubble", {
            animationLimit: 500,
            tooltip: {
                pointFormat: "{point.name}: {point.z}"
            }
        }, {
            xyFromShape: !0,
            type: "mapbubble",
            pointArrayMap: ["z"],
            getMapData: A.map.prototype.getMapData,
            getBox: A.map.prototype.getBox,
            setData: A.map.prototype.setData
        }, {
            applyOptions: function (a, e) {
                return a && void 0 !== a.lat && void 0 !== a.lon ? B.prototype.applyOptions.call(this, z(a, this.series.chart.fromLatLonToPoint(a)), e) : A.map.prototype.pointClass.prototype.applyOptions.call(this, a, e)
            },
            ttBelow: !1
        })
    })(J);
    (function (a) {
        var z = a.colorPointMixin,
            B = a.each,
            C = a.merge,
            A = a.noop,
            f = a.pick,
            e = a.Series,
            t = a.seriesType,
            r = a.seriesTypes;
        t("heatmap", "scatter", {
            animation: !1,
            borderWidth: 0,
            nullColor: "#f7f7f7",
            dataLabels: {
                formatter: function () {
                    return this.point.value
                },
                inside: !0,
                verticalAlign: "middle",
                crop: !1,
                overflow: !1,
                padding: 0
            },
            marker: null,
            pointRange: null,
            tooltip: {
                pointFormat: "{point.x}, {point.y}: {point.value}\x3cbr/\x3e"
            },
            states: {
                normal: {
                    animation: !0
                },
                hover: {
                    halo: !1,
                    brightness: .2
                }
            }
        }, C(a.colorSeriesMixin, {
            pointArrayMap: ["y", "value"],
            hasPointSpecificOptions: !0,
            supportsDrilldown: !0,
            getExtremesFromAll: !0,
            directTouch: !0,
            init: function () {
                var a;
                r.scatter.prototype.init.apply(this, arguments);
                a = this.options;
                a.pointRange = f(a.pointRange, a.colsize || 1);
                this.yAxis.axisPointRange = a.rowsize || 1
            },
            translate: function () {
                var a = this.options,
                    e = this.xAxis,
                    g = this.yAxis,
                    f = function (a, e, b) {
                        return Math.min(Math.max(e, a), b)
                    };
                this.generatePoints();
                B(this.points, function (h) {
                    var l = (a.colsize || 1) / 2,
                        b = (a.rowsize || 1) / 2,
                        k = f(Math.round(e.len - e.translate(h.x - l, 0, 1, 0, 1)), -e.len, 2 * e.len),
                        l = f(Math.round(e.len - e.translate(h.x +
                            l, 0, 1, 0, 1)), -e.len, 2 * e.len),
                        d = f(Math.round(g.translate(h.y - b, 0, 1, 0, 1)), -g.len, 2 * g.len),
                        b = f(Math.round(g.translate(h.y + b, 0, 1, 0, 1)), -g.len, 2 * g.len);
                    h.plotX = h.clientX = (k + l) / 2;
                    h.plotY = (d + b) / 2;
                    h.shapeType = "rect";
                    h.shapeArgs = {
                        x: Math.min(k, l),
                        y: Math.min(d, b),
                        width: Math.abs(l - k),
                        height: Math.abs(b - d)
                    }
                });
                this.translateColors()
            },
            drawPoints: function () {
                r.column.prototype.drawPoints.call(this);
                B(this.points, function (a) {
                    a.graphic.attr(this.colorAttribs(a))
                }, this)
            },
            animate: A,
            getBox: A,
            drawLegendSymbol: a.LegendSymbolMixin.drawRectangle,
            alignDataLabel: r.column.prototype.alignDataLabel,
            getExtremes: function () {
                e.prototype.getExtremes.call(this, this.valueData);
                this.valueMin = this.dataMin;
                this.valueMax = this.dataMax;
                e.prototype.getExtremes.call(this)
            }
        }), z)
    })(J);
    (function (a) {
        function z(a, e) {
            var g, f, h, q = !1,
                b = a.x,
                k = a.y;
            a = 0;
            for (g = e.length - 1; a < e.length; g = a++) f = e[a][1] > k, h = e[g][1] > k, f !== h && b < (e[g][0] - e[a][0]) * (k - e[a][1]) / (e[g][1] - e[a][1]) + e[a][0] && (q = !q);
            return q
        }
        var B = a.Chart,
            C = a.each,
            A = a.extend,
            f = a.format,
            e = a.merge,
            t = a.win,
            r = a.wrap;
        B.prototype.transformFromLatLon =
            function (e, f) {
                if (void 0 === t.proj4) return a.error(21), {
                    x: 0,
                    y: null
                };
                e = t.proj4(f.crs, [e.lon, e.lat]);
                var g = f.cosAngle || f.rotation && Math.cos(f.rotation),
                    h = f.sinAngle || f.rotation && Math.sin(f.rotation);
                e = f.rotation ? [e[0] * g + e[1] * h, -e[0] * h + e[1] * g] : e;
                return {
                    x: ((e[0] - (f.xoffset || 0)) * (f.scale || 1) + (f.xpan || 0)) * (f.jsonres || 1) + (f.jsonmarginX || 0),
                    y: (((f.yoffset || 0) - e[1]) * (f.scale || 1) + (f.ypan || 0)) * (f.jsonres || 1) - (f.jsonmarginY || 0)
                }
            };
        B.prototype.transformToLatLon = function (e, f) {
            if (void 0 === t.proj4) a.error(21);
            else {
                e = {
                    x: ((e.x - (f.jsonmarginX || 0)) / (f.jsonres || 1) - (f.xpan || 0)) / (f.scale || 1) + (f.xoffset || 0),
                    y: ((-e.y - (f.jsonmarginY || 0)) / (f.jsonres || 1) + (f.ypan || 0)) / (f.scale || 1) + (f.yoffset || 0)
                };
                var g = f.cosAngle || f.rotation && Math.cos(f.rotation),
                    h = f.sinAngle || f.rotation && Math.sin(f.rotation);
                f = t.proj4(f.crs, "WGS84", f.rotation ? {
                    x: e.x * g + e.y * -h,
                    y: e.x * h + e.y * g
                } : e);
                return {
                    lat: f.y,
                    lon: f.x
                }
            }
        };
        B.prototype.fromPointToLatLon = function (e) {
            var f = this.mapTransforms,
                g;
            if (f) {
                for (g in f)
                    if (f.hasOwnProperty(g) && f[g].hitZone && z({
                                x: e.x,
                                y: -e.y
                            },
                            f[g].hitZone.coordinates[0])) return this.transformToLatLon(e, f[g]);
                return this.transformToLatLon(e, f["default"])
            }
            a.error(22)
        };
        B.prototype.fromLatLonToPoint = function (e) {
            var f = this.mapTransforms,
                g, q;
            if (!f) return a.error(22), {
                x: 0,
                y: null
            };
            for (g in f)
                if (f.hasOwnProperty(g) && f[g].hitZone && (q = this.transformFromLatLon(e, f[g]), z({
                        x: q.x,
                        y: -q.y
                    }, f[g].hitZone.coordinates[0]))) return q;
            return this.transformFromLatLon(e, f["default"])
        };
        a.geojson = function (a, e, g) {
            var h = [],
                l = [],
                q = function (a) {
                    var b, d = a.length;
                    l.push("M");
                    for (b = 0; b < d; b++) 1 === b && l.push("L"), l.push(a[b][0], -a[b][1])
                };
            e = e || "map";
            C(a.features, function (a) {
                var b = a.geometry,
                    d = b.type,
                    b = b.coordinates;
                a = a.properties;
                var c;
                l = [];
                "map" === e || "mapbubble" === e ? ("Polygon" === d ? (C(b, q), l.push("Z")) : "MultiPolygon" === d && (C(b, function (a) {
                    C(a, q)
                }), l.push("Z")), l.length && (c = {
                    path: l
                })) : "mapline" === e ? ("LineString" === d ? q(b) : "MultiLineString" === d && C(b, q), l.length && (c = {
                    path: l
                })) : "mappoint" === e && "Point" === d && (c = {
                    x: b[0],
                    y: -b[1]
                });
                c && h.push(A(c, {
                    name: a.name || a.NAME,
                    properties: a
                }))
            });
            g && a.copyrightShort && (g.chart.mapCredits = f(g.chart.options.credits.mapText, {
                geojson: a
            }), g.chart.mapCreditsFull = f(g.chart.options.credits.mapTextFull, {
                geojson: a
            }));
            return h
        };
        r(B.prototype, "addCredits", function (a, f) {
            f = e(!0, this.options.credits, f);
            this.mapCredits && (f.href = null);
            a.call(this, f);
            this.credits && this.mapCreditsFull && this.credits.attr({
                title: this.mapCreditsFull
            })
        })
    })(J);
    (function (a) {
        function z(a, e, f, h, b, k, d, c) {
            return ["M", a + b, e, "L", a + f - k, e, "C", a + f - k / 2, e, a + f, e + k / 2, a + f, e + k, "L", a + f, e + h - d, "C", a +
                f, e + h - d / 2, a + f - d / 2, e + h, a + f - d, e + h, "L", a + c, e + h, "C", a + c / 2, e + h, a, e + h - c / 2, a, e + h - c, "L", a, e + b, "C", a, e + b / 2, a + b / 2, e, a + b, e, "Z"
            ]
        }
        var B = a.Chart,
            C = a.defaultOptions,
            A = a.each,
            f = a.extend,
            e = a.merge,
            t = a.pick,
            r = a.Renderer,
            q = a.SVGRenderer,
            h = a.VMLRenderer;
        f(C.lang, {
            zoomIn: "Zoom in",
            zoomOut: "Zoom out"
        });
        C.mapNavigation = {
            buttonOptions: {
                alignTo: "plotBox",
                align: "left",
                verticalAlign: "top",
                x: 0,
                width: 18,
                height: 18,
                padding: 5,
                style: {
                    fontSize: "15px",
                    fontWeight: "bold"
                },
                theme: {
                    "stroke-width": 1,
                    "text-align": "center"
                }
            },
            buttons: {
                zoomIn: {
                    onclick: function () {
                        this.mapZoom(.5)
                    },
                    text: "+",
                    y: 0
                },
                zoomOut: {
                    onclick: function () {
                        this.mapZoom(2)
                    },
                    text: "-",
                    y: 28
                }
            },
            mouseWheelSensitivity: 1.1
        };
        a.splitPath = function (a) {
            var e;
            a = a.replace(/([A-Za-z])/g, " $1 ");
            a = a.replace(/^\s*/, "").replace(/\s*$/, "");
            a = a.split(/[ ,]+/);
            for (e = 0; e < a.length; e++) /[a-zA-Z]/.test(a[e]) || (a[e] = parseFloat(a[e]));
            return a
        };
        a.maps = {};
        q.prototype.symbols.topbutton = function (a, e, f, h, b) {
            return z(a - 1, e - 1, f, h, b.r, b.r, 0, 0)
        };
        q.prototype.symbols.bottombutton = function (a, e, f, h, b) {
            return z(a - 1, e - 1, f, h, 0, 0, b.r, b.r)
        };
        r === h && A(["topbutton",
            "bottombutton"
        ], function (a) {
            h.prototype.symbols[a] = q.prototype.symbols[a]
        });
        a.Map = a.mapChart = function (f, h, l) {
            var g = "string" === typeof f || f.nodeName,
                b = arguments[g ? 1 : 0],
                k = {
                    endOnTick: !1,
                    visible: !1,
                    minPadding: 0,
                    maxPadding: 0,
                    startOnTick: !1
                },
                d, c = a.getOptions().credits;
            d = b.series;
            b.series = null;
            b = e({
                chart: {
                    panning: "xy",
                    type: "map"
                },
                credits: {
                    mapText: t(c.mapText, ' \u00a9 \x3ca href\x3d"{geojson.copyrightUrl}"\x3e{geojson.copyrightShort}\x3c/a\x3e'),
                    mapTextFull: t(c.mapTextFull, "{geojson.copyright}")
                },
                tooltip: {
                    followTouchMove: !1
                },
                xAxis: k,
                yAxis: e(k, {
                    reversed: !0
                })
            }, b, {
                chart: {
                    inverted: !1,
                    alignTicks: !1
                }
            });
            b.series = d;
            return g ? new B(f, b, l) : new B(b, h)
        }
    })(J);
    return J
});