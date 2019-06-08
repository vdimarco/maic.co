function AlgoliaExplainResults(t, e, n) {
    function i(t, e) {
        var n = [];
        if ("object" == typeof t && "matchedWords" in t && "value" in t) {
            for (var r = !1, o = 0; o < t.matchedWords.length; ++o) {
                var s = t.matchedWords[o];
                s in e || (e[s] = 1, r = !0)
            }
            r && n.push(t.value)
        } else if ("[object Array]" === Object.prototype.toString.call(t))
            for (var a = 0; a < t.length; ++a) {
                var u = i(t[a], e);
                n = n.concat(u)
            } else if ("object" == typeof t)
                for (var l in t) t.hasOwnProperty(l) && (n = n.concat(i(t[l], e)));
        return n
    }

    function r(t, e, n) {
        var o = t._highlightResult || t;
        if (-1 === n.indexOf(".")) return n in o ? i(o[n], e) : [];
        for (var s = n.split("."), a = o, u = 0; u < s.length; ++u) {
            if ("[object Array]" === Object.prototype.toString.call(a)) {
                for (var l = [], c = 0; c < a.length; ++c) l = l.concat(r(a[c], e, s.slice(u).join(".")));
                return l
            }
            if (!(s[u] in a)) return [];
            a = a[s[u]]
        }
        return i(a, e)
    }
    var o = {},
        s = {},
        a = r(t, s, e);
    if (o.title = a.length > 0 ? a[0] : "", o.subtitles = [], "undefined" != typeof n)
        for (var u = 0; u < n.length; ++u)
            for (var l = r(t, s, n[u]), c = 0; c < l.length; ++c) o.subtitles.push({
                attr: n[u],
                value: l[c]
            });
    return o
}

function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
        return n
    }
    return Array.from(t)
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
            n = dt.type(t);
        return "function" === n || dt.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (dt.isFunction(e)) return dt.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return dt.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (Ct.test(e)) return dt.filter(e, t, n);
            e = dt.filter(e, t)
        }
        return dt.grep(t, function(t) {
            return dt.inArray(t, e) > -1 !== n
        })
    }

    function r(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = {};
        return dt.each(t.match(_t) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        it.addEventListener ? (it.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (it.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (s(), dt.ready())
    }

    function u(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Ot, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Dt.test(n) ? dt.parseJSON(n) : n
                } catch (r) {}
                dt.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function l(t) {
        var e;
        for (e in t)
            if (("data" !== e || !dt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, n, i) {
        if (Rt(t)) {
            var r, o, s = dt.expando,
                a = t.nodeType,
                u = a ? dt.cache : t,
                l = a ? t[s] : t[s] && s;
            if (l && u[l] && (i || u[l].data) || void 0 !== n || "string" != typeof e) return l || (l = a ? t[s] = nt.pop() || dt.guid++ : s), u[l] || (u[l] = a ? {} : {
                toJSON: dt.noop
            }), ("object" == typeof e || "function" == typeof e) && (i ? u[l] = dt.extend(u[l], e) : u[l].data = dt.extend(u[l].data, e)), o = u[l], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[dt.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[dt.camelCase(e)])) : r = o, r
        }
    }

    function f(t, e, n) {
        if (Rt(t)) {
            var i, r, o = t.nodeType,
                s = o ? dt.cache : t,
                a = o ? t[dt.expando] : dt.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    dt.isArray(e) ? e = e.concat(dt.map(e, dt.camelCase)) : e in i ? e = [e] : (e = dt.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                    for (; r--;) delete i[e[r]];
                    if (n ? !l(i) : !dt.isEmptyObject(i)) return
                }(n || (delete s[a].data, l(s[a]))) && (o ? dt.cleanData([t], !0) : ft.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
            }
        }
    }

    function h(t, e, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return dt.css(t, e, "")
            },
            u = a(),
            l = n && n[3] || (dt.cssNumber[e] ? "" : "px"),
            c = (dt.cssNumber[e] || "px" !== l && +u) && qt.exec(dt.css(t, e));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do o = o || ".5", c /= o, dt.style(t, e, c + l); while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (c = +c || +u || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = c, i.end = r)), r
    }

    function d(t) {
        var e = Vt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function p(t, e) {
        var n, i, r = 0,
            o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || dt.nodeName(i, e) ? o.push(i) : dt.merge(o, p(i, e));
        return void 0 === e || e && dt.nodeName(t, e) ? dt.merge([t], o) : o
    }

    function m(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) dt._data(n, "globalEval", !e || dt._data(e[i], "globalEval"))
    }

    function g(t) {
        Mt.test(t.type) && (t.defaultChecked = t.checked)
    }

    function v(t, e, n, i, r) {
        for (var o, s, a, u, l, c, f, h = t.length, v = d(e), y = [], $ = 0; h > $; $++)
            if (s = t[$], s || 0 === s)
                if ("object" === dt.type(s)) dt.merge(y, s.nodeType ? [s] : s);
                else if (Wt.test(s)) {
            for (u = u || v.appendChild(e.createElement("div")), l = (Ft.exec(s) || ["", ""])[1].toLowerCase(), f = zt[l] || zt._default, u.innerHTML = f[1] + dt.htmlPrefilter(s) + f[2], o = f[0]; o--;) u = u.lastChild;
            if (!ft.leadingWhitespace && Bt.test(s) && y.push(e.createTextNode(Bt.exec(s)[0])), !ft.tbody)
                for (s = "table" !== l || Kt.test(s) ? "<table>" !== f[1] || Kt.test(s) ? 0 : u : u.firstChild, o = s && s.childNodes.length; o--;) dt.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
            for (dt.merge(y, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = v.lastChild
        } else y.push(e.createTextNode(s));
        for (u && v.removeChild(u), ft.appendChecked || dt.grep(p(y, "input"), g), $ = 0; s = y[$++];)
            if (i && dt.inArray(s, i) > -1) r && r.push(s);
            else if (a = dt.contains(s.ownerDocument, s), u = p(v.appendChild(s), "script"), a && m(u), n)
            for (o = 0; s = u[o++];) Ut.test(s.type || "") && n.push(s);
        return u = null, v
    }

    function y() {
        return !0
    }

    function $() {
        return !1
    }

    function b() {
        try {
            return it.activeElement
        } catch (t) {}
    }

    function w(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e) w(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = $;
        else if (!r) return t;
        return 1 === o && (s = r, r = function(t) {
            return dt().off(t), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = dt.guid++)), t.each(function() {
            dt.event.add(this, e, r, i, n)
        })
    }

    function x(t, e) {
        return dt.nodeName(t, "table") && dt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function C(t) {
        return t.type = (null !== dt.find.attr(t, "type")) + "/" + t.type, t
    }

    function S(t) {
        var e = re.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function T(t, e) {
        if (1 === e.nodeType && dt.hasData(t)) {
            var n, i, r, o = dt._data(t),
                s = dt._data(e, o),
                a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, r = a[n].length; r > i; i++) dt.event.add(e, n, a[n][i])
            }
            s.data && (s.data = dt.extend({}, s.data))
        }
    }

    function k(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ft.noCloneEvent && e[dt.expando]) {
                r = dt._data(e);
                for (i in r.events) dt.removeEvent(e, i, r.handle);
                e.removeAttribute(dt.expando)
            }
            "script" === n && e.text !== t.text ? (C(e).text = t.text, S(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ft.html5Clone && t.innerHTML && !dt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Mt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function E(t, e, n, i) {
        e = ot.apply([], e);
        var r, o, s, a, u, l, c = 0,
            f = t.length,
            h = f - 1,
            d = e[0],
            m = dt.isFunction(d);
        if (m || f > 1 && "string" == typeof d && !ft.checkClone && ie.test(d)) return t.each(function(r) {
            var o = t.eq(r);
            m && (e[0] = d.call(this, r, o.html())), E(o, e, n, i)
        });
        if (f && (l = v(e, t[0].ownerDocument, !1, t, i), r = l.firstChild, 1 === l.childNodes.length && (l = r), r || i)) {
            for (a = dt.map(p(l, "script"), C), s = a.length; f > c; c++) o = l, c !== h && (o = dt.clone(o, !0, !0), s && dt.merge(a, p(o, "script"))), n.call(t[c], o, c);
            if (s)
                for (u = a[a.length - 1].ownerDocument, dt.map(a, S), c = 0; s > c; c++) o = a[c], Ut.test(o.type || "") && !dt._data(o, "globalEval") && dt.contains(u, o) && (o.src ? dt._evalUrl && dt._evalUrl(o.src) : dt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(oe, "")));
            l = r = null
        }
        return t
    }

    function A(t, e, n) {
        for (var i, r = e ? dt.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || dt.cleanData(p(i)), i.parentNode && (n && dt.contains(i.ownerDocument, i) && m(p(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function _(t, e) {
        var n = dt(e.createElement(t)).appendTo(e.body),
            i = dt.css(n[0], "display");
        return n.detach(), i
    }

    function j(t) {
        var e = it,
            n = le[t];
        return n || (n = _(t, e), "none" !== n && n || (ue = (ue || dt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (ue[0].contentWindow || ue[0].contentDocument).document, e.write(), e.close(), n = _(t, e), ue.detach()), le[t] = n), n
    }

    function N(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function R(t) {
        if (t in Se) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--;)
            if (t = Ce[n] + e, t in Se) return t
    }

    function D(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = dt._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pt(i) && (o[s] = dt._data(i, "olddisplay", j(i.nodeName)))) : (r = Pt(i), (n && "none" !== n || !r) && dt._data(i, "olddisplay", r ? n : dt.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function O(t, e, n) {
        var i = be.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function I(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += dt.css(t, n + Ht[o], !0, r)), i ? ("content" === n && (s -= dt.css(t, "padding" + Ht[o], !0, r)), "margin" !== n && (s -= dt.css(t, "border" + Ht[o] + "Width", !0, r))) : (s += dt.css(t, "padding" + Ht[o], !0, r), "padding" !== n && (s += dt.css(t, "border" + Ht[o] + "Width", !0, r)));
        return s
    }

    function q(e, n, i) {
        var r = !0,
            o = "width" === n ? e.offsetWidth : e.offsetHeight,
            s = pe(e),
            a = ft.boxSizing && "border-box" === dt.css(e, "boxSizing", !1, s);
        if (it.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if (o = me(e, n, s), (0 > o || null == o) && (o = e.style[n]), fe.test(o)) return o;
            r = a && (ft.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
        }
        return o + I(e, n, i || (a ? "border" : "content"), r, s) + "px"
    }

    function H(t, e, n, i, r) {
        return new H.prototype.init(t, e, n, i, r)
    }

    function P() {
        return t.setTimeout(function() {
            Te = void 0
        }), Te = dt.now()
    }

    function L(t, e) {
        var n, i = {
                height: t
            },
            r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Ht[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function M(t, e, n) {
        for (var i, r = (B.tweeners[e] || []).concat(B.tweeners["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function F(t, e, n) {
        var i, r, o, s, a, u, l, c, f = this,
            h = {},
            d = t.style,
            p = t.nodeType && Pt(t),
            m = dt._data(t, "fxshow");
        n.queue || (a = dt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--, dt.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = dt.css(t, "display"), c = "none" === l ? dt._data(t, "olddisplay") || j(t.nodeName) : l, "inline" === c && "none" === dt.css(t, "float") && (ft.inlineBlockNeedsLayout && "inline" !== j(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ft.shrinkWrapBlocks() || f.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (r = e[i], Ee.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    p = !0
                }
                h[i] = m && m[i] || dt.style(t, i)
            } else l = void 0;
        if (dt.isEmptyObject(h)) "inline" === ("none" === l ? j(t.nodeName) : l) && (d.display = l);
        else {
            m ? "hidden" in m && (p = m.hidden) : m = dt._data(t, "fxshow", {}), o && (m.hidden = !p), p ? dt(t).show() : f.done(function() {
                dt(t).hide()
            }), f.done(function() {
                var e;
                dt._removeData(t, "fxshow");
                for (e in h) dt.style(t, e, h[e])
            });
            for (i in h) s = M(p ? m[i] : 0, i, f), i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function U(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = dt.camelCase(n), r = e[i], o = t[n], dt.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = dt.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
    }

    function B(t, e, n) {
        var i, r, o = 0,
            s = B.prefilters.length,
            a = dt.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (r) return !1;
                for (var e = Te || P(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, o = 1 - i, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
                return a.notifyWith(t, [l, o, n]), 1 > o && u ? n : (a.resolveWith(t, [l]), !1)
            },
            l = a.promise({
                elem: t,
                props: dt.extend({}, e),
                opts: dt.extend(!0, {
                    specialEasing: {},
                    easing: dt.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Te || P(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = dt.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? l.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) l.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l, e])) : a.rejectWith(t, [l, e]), this
                }
            }),
            c = l.props;
        for (U(c, l.opts.specialEasing); s > o; o++)
            if (i = B.prefilters[o].call(l, t, c, l.opts)) return dt.isFunction(i.stop) && (dt._queueHooks(l.elem, l.opts.queue).stop = dt.proxy(i.stop, i)), i;
        return dt.map(c, M, l), dt.isFunction(l.opts.start) && l.opts.start.call(t, l), dt.fx.timer(dt.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function V(t) {
        return dt.attr(t, "class") || ""
    }

    function z(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match(_t) || [];
            if (dt.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function W(t, e, n, i) {
        function r(a) {
            var u;
            return o[a] = !0, dt.each(t[a] || [], function(t, a) {
                var l = a(e, n, i);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (e.dataTypes.unshift(l), r(l), !1)
            }), u
        }
        var o = {},
            s = t === Je;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function K(t, e) {
        var n, i, r = dt.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && dt.extend(!0, t, n), t
    }

    function X(t, e, n) {
        for (var i, r, o, s, a = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (s in a)
                if (a[s] && a[s].test(r)) {
                    u.unshift(s);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (s in n) {
                if (!u[0] || t.converters[s + " " + u[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function Q(t, e, n, i) {
        var r, o, s, a, u, l = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)
                for (r in l)
                    if (a = r.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        s === !0 ? s = l[r] : l[r] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: s ? f : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function G(t) {
        return t.style && t.style.display || dt.css(t, "display")
    }

    function J(t) {
        for (; t && 1 === t.nodeType;) {
            if ("none" === G(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function Y(t, e, n, i) {
        var r;
        if (dt.isArray(e)) dt.each(e, function(e, r) {
            n || nn.test(t) ? i(t, r) : Y(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== dt.type(e)) i(t, e);
        else
            for (r in e) Y(t + "[" + r + "]", e[r], n, i)
    }

    function Z() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function et(t) {
        return dt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var nt = [],
        it = t.document,
        rt = nt.slice,
        ot = nt.concat,
        st = nt.push,
        at = nt.indexOf,
        ut = {},
        lt = ut.toString,
        ct = ut.hasOwnProperty,
        ft = {},
        ht = "1.12.0",
        dt = function(t, e) {
            return new dt.fn.init(t, e)
        },
        pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mt = /^-ms-/,
        gt = /-([\da-z])/gi,
        vt = function(t, e) {
            return e.toUpperCase()
        };
    dt.fn = dt.prototype = {
        jquery: ht,
        constructor: dt,
        selector: "",
        length: 0,
        toArray: function() {
            return rt.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : rt.call(this)
        },
        pushStack: function(t) {
            var e = dt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return dt.each(this, t)
        },
        map: function(t) {
            return this.pushStack(dt.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(rt.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: st,
        sort: nt.sort,
        splice: nt.splice
    }, dt.extend = dt.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || dt.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)
            if (null != (r = arguments[a]))
                for (i in r) t = s[i], n = r[i], s !== n && (l && n && (dt.isPlainObject(n) || (e = dt.isArray(n))) ? (e ? (e = !1, o = t && dt.isArray(t) ? t : []) : o = t && dt.isPlainObject(t) ? t : {}, s[i] = dt.extend(l, o, n)) : void 0 !== n && (s[i] = n));
        return s
    }, dt.extend({
        expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === dt.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === dt.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !dt.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== dt.type(t) || t.nodeType || dt.isWindow(t)) return !1;
            try {
                if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!ft.ownFirst)
                for (e in t) return ct.call(t, e);
            for (e in t);
            return void 0 === e || ct.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ut[lt.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && dt.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(mt, "ms-").replace(gt, vt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var i, r = 0;
            if (n(t))
                for (i = t.length; i > r && e.call(t[r], r, t[r]) !== !1; r++);
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(pt, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? dt.merge(i, "string" == typeof t ? [t] : t) : st.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (at) return at.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i;) t[r++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];) t[r++] = e[i++];
            return t.length = r, t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o, s = 0,
                a = [];
            if (n(t))
                for (r = t.length; r > s; s++) o = e(t[s], s, i), null != o && a.push(o);
            else
                for (s in t) o = e(t[s], s, i), null != o && a.push(o);
            return ot.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), dt.isFunction(t) ? (n = rt.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(rt.call(arguments)))
            }, i.guid = t.guid = t.guid || dt.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ft
    }), "function" == typeof Symbol && (dt.fn[Symbol.iterator] = nt[Symbol.iterator]), dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        ut["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, u, l, f, d, p = e && e.ownerDocument,
                m = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((e ? e.ownerDocument || e : M) !== R && N(e), e = e || R, O)) {
                if (11 !== m && (l = vt.exec(t)))
                    if (r = l[1]) {
                        if (9 === m) {
                            if (!(s = e.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (p && (s = p.getElementById(r)) && P(e, s) && s.id === r) return n.push(s), n
                    } else {
                        if (l[2]) return Y.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = l[3]) && w.getElementsByClassName && e.getElementsByClassName) return Y.apply(n, e.getElementsByClassName(r)), n
                    }
                if (w.qsa && !z[t + " "] && (!I || !I.test(t))) {
                    if (1 !== m) p = e, d = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace($t, "\\$&") : e.setAttribute("id", a = L), f = T(t), o = f.length, u = ht.test(a) ? "#" + a : "[id='" + a + "']"; o--;) f[o] = u + " " + h(f[o]);
                        d = f.join(","), p = yt.test(t) && c(e.parentNode) || e
                    }
                    if (d) try {
                        return Y.apply(n, p.querySelectorAll(d)), n
                    } catch (g) {} finally {
                        a === L && e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(at, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[L] = !0, t
        }

        function r(t) {
            var e = R.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || K) - (~t.sourceIndex || K);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function l(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function f() {}

        function h(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function d(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = U++;
            return e.first ? function(e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, o)
            } : function(e, n, s) {
                var a, u, l, c = [F, o];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if (l = e[L] || (e[L] = {}), u = l[e.uniqueID] || (l[e.uniqueID] = {}), (a = u[i]) && a[0] === F && a[1] === o) return c[2] = a[2];
                            if (u[i] = c, c[2] = t(e, n, s)) return !0
                        }
            }
        }

        function p(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function m(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
            return i
        }

        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; u > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), l && e.push(a));
            return s
        }

        function v(t, e, n, r, o, s) {
            return r && !r[L] && (r = v(r)), o && !o[L] && (o = v(o, s)), i(function(i, s, a, u) {
                var l, c, f, h = [],
                    d = [],
                    p = s.length,
                    v = i || m(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? v : g(v, h, t, a, u),
                    $ = n ? o || (i ? t : p || r) ? [] : s : y;
                if (n && n(y, $, a, u), r)
                    for (l = g($, d), r(l, [], a, u), c = l.length; c--;)(f = l[c]) && ($[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (l = [], c = $.length; c--;)(f = $[c]) && l.push(y[c] = f);
                            o(null, $ = [], l, u)
                        }
                        for (c = $.length; c--;)(f = $[c]) && (l = o ? tt(i, f) : h[c]) > -1 && (i[l] = !(s[l] = f))
                    }
                } else $ = g($ === s ? $.splice(p, $.length) : $), o ? o(null, s, $, u) : Y.apply(s, $)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, u = d(function(t) {
                    return t === e
                }, s, !0), l = d(function(t) {
                    return tt(e, t) > -1
                }, s, !0), c = [function(t, n, i) {
                    var r = !o && (i || n !== A) || ((e = n).nodeType ? u(t, n, i) : l(t, n, i));
                    return e = null, r
                }]; r > a; a++)
                if (n = x.relative[t[a].type]) c = [d(p(c), n)];
                else {
                    if (n = x.filter[t[a].type].apply(null, t[a].matches), n[L]) {
                        for (i = ++a; r > i && !x.relative[t[i].type]; i++);
                        return v(a > 1 && p(c), a > 1 && h(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && h(t))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function $(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                s = function(i, s, a, u, l) {
                    var c, f, h, d = 0,
                        p = "0",
                        m = i && [],
                        v = [],
                        y = A,
                        $ = i || o && x.find.TAG("*", l),
                        b = F += null == y ? 1 : Math.random() || .1,
                        w = $.length;
                    for (l && (A = s === R || s || l); p !== w && null != (c = $[p]); p++) {
                        if (o && c) {
                            for (f = 0, s || c.ownerDocument === R || (N(c), a = !O); h = t[f++];)
                                if (h(c, s || R, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (F = b)
                        }
                        r && ((c = !h && c) && d--, i && m.push(c))
                    }
                    if (d += p, r && p !== d) {
                        for (f = 0; h = n[f++];) h(m, v, s, a);
                        if (i) {
                            if (d > 0)
                                for (; p--;) m[p] || v[p] || (v[p] = G.call(u));
                            v = g(v)
                        }
                        Y.apply(u, v), l && !i && v.length > 0 && d + n.length > 1 && e.uniqueSort(u)
                    }
                    return l && (F = b, A = y), m
                };
            return r ? i(s) : s
        }
        var b, w, x, C, S, T, k, E, A, _, j, N, R, D, O, I, q, H, P, L = "sizzle" + 1 * new Date,
            M = t.document,
            F = 0,
            U = 0,
            B = n(),
            V = n(),
            z = n(),
            W = function(t, e) {
                return t === e && (j = !0), 0
            },
            K = 1 << 31,
            X = {}.hasOwnProperty,
            Q = [],
            G = Q.pop,
            J = Q.push,
            Y = Q.push,
            Z = Q.slice,
            tt = function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            st = new RegExp(nt + "+", "g"),
            at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ut = new RegExp("^" + nt + "*," + nt + "*"),
            lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            ft = new RegExp(ot),
            ht = new RegExp("^" + it + "$"),
            dt = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            pt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            $t = /'|\\/g,
            bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            wt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xt = function() {
                N()
            };
        try {
            Y.apply(Q = Z.call(M.childNodes), M.childNodes), Q[M.childNodes.length].nodeType
        } catch (Ct) {
            Y = {
                apply: Q.length ? function(t, e) {
                    J.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        w = e.support = {}, S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, N = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : M;
            return i !== R && 9 === i.nodeType && i.documentElement ? (R = i, D = R.documentElement, O = !S(R), (n = R.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xt, !1) : n.attachEvent && n.attachEvent("onunload", xt)), w.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = r(function(t) {
                return t.appendChild(R.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = gt.test(R.getElementsByClassName), w.getById = r(function(t) {
                return D.appendChild(t).id = L, !R.getElementsByName || !R.getElementsByName(L).length
            }), w.getById ? (x.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && O) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, x.filter.ID = function(t) {
                var e = t.replace(bt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function(t) {
                var e = t.replace(bt, wt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                return "undefined" != typeof e.getElementsByClassName && O ? e.getElementsByClassName(t) : void 0
            }, q = [], I = [], (w.qsa = gt.test(R.querySelectorAll)) && (r(function(t) {
                D.appendChild(t).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + L + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + L + "+*").length || I.push(".#.+[+~]")
            }), r(function(t) {
                var e = R.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
            })), (w.matchesSelector = gt.test(H = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(t) {
                w.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), q.push("!=", ot)
            }), I = I.length && new RegExp(I.join("|")), q = q.length && new RegExp(q.join("|")), e = gt.test(D.compareDocumentPosition), P = e || gt.test(D.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, W = e ? function(t, e) {
                if (t === e) return j = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === R || t.ownerDocument === M && P(M, t) ? -1 : e === R || e.ownerDocument === M && P(M, e) ? 1 : _ ? tt(_, t) - tt(_, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return j = !0, 0;
                var n, i = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    u = [e];
                if (!r || !o) return t === R ? -1 : e === R ? 1 : r ? -1 : o ? 1 : _ ? tt(_, t) - tt(_, e) : 0;
                if (r === o) return s(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (; a[i] === u[i];) i++;
                return i ? s(a[i], u[i]) : a[i] === M ? -1 : u[i] === M ? 1 : 0
            }, R) : R
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== R && N(t), n = n.replace(ct, "='$1']"), w.matchesSelector && O && !z[n + " "] && (!q || !q.test(n)) && (!I || !I.test(n))) try {
                var i = H.call(t, n);
                if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, R, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== R && N(t), P(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== R && N(t);
            var n = x.attrHandle[e.toLowerCase()],
                i = n && X.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !O) : void 0;
            return void 0 !== i ? i : w.attributes || !O ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (j = !w.detectDuplicates, _ = !w.sortStable && t.slice(0), t.sort(W), j) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return _ = null, t
        }, C = e.getText = function(t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += C(e);
            return n
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(bt, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, u) {
                        var l, c, f, h, d, p, m = o !== s ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !u && !a,
                            $ = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (h = e; h = h[m];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = m = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                for (h = g, f = h[L] || (h[L] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), l = c[t] || [], d = l[0] === F && l[1], $ = d && l[2], h = d && g.childNodes[d]; h = ++d && h && h[m] || ($ = d = 0) || p.pop();)
                                    if (1 === h.nodeType && ++$ && h === e) {
                                        c[t] = [F, d, $];
                                        break
                                    }
                            } else if (y && (h = e, f = h[L] || (h[L] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), l = c[t] || [], d = l[0] === F && l[1], $ = d), $ === !1)
                                for (;
                                    (h = ++d && h && h[m] || ($ = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++$ || (y && (f = h[L] || (h[L] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), c[t] = [F, $]), h !== e)););
                            return $ -= r, $ === i || $ % i === 0 && $ / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[L] ? o(n) : o.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;) i = tt(t, r[s]), t[i] = !(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        r = k(t.replace(at, "$1"));
                    return r[L] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(bt, wt),
                        function(e) {
                            return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function(t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === D
                },
                focus: function(t) {
                    return t === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !x.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(t, e) {
                    return [e - 1]
                }),
                eq: l(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: l(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: l(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: l(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: l(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) x.pseudos[b] = u(b);
        return f.prototype = x.filters = x.pseudos, x.setFilters = new f, T = e.tokenize = function(t, n) {
            var i, r, o, s, a, u, l, c = V[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, u = [], l = x.preFilter; a;) {
                (!i || (r = ut.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), i = !1, (r = lt.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(at, " ")
                }), a = a.slice(i.length));
                for (s in x.filter) !(r = dt[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : V(t, u).slice(0)
        }, k = e.compile = function(t, e) {
            var n, i = [],
                r = [],
                o = z[t + " "];
            if (!o) {
                for (e || (e = T(t)), n = e.length; n--;) o = y(e[n]), o[L] ? i.push(o) : r.push(o);
                o = z(t, $(r, i)), o.selector = t
            }
            return o
        }, E = e.select = function(t, e, n, i) {
            var r, o, s, a, u, l = "function" == typeof t && t,
                f = !i && T(t = l.selector || t);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && O && x.relative[o[1].type]) {
                    if (e = (x.find.ID(s.matches[0].replace(bt, wt), e) || [])[0], !e) return n;
                    l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = dt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                    if ((u = x.find[a]) && (i = u(s.matches[0].replace(bt, wt), yt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = i.length && h(o), !t) return Y.apply(n, i), n;
                        break
                    }
            }
            return (l || k(t, f))(i, e, !O, n, !e || yt.test(t) && c(e.parentNode) || e), n
        }, w.sortStable = L.split("").sort(W).join("") === L, w.detectDuplicates = !!j, N(), w.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(R.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    dt.find = yt, dt.expr = yt.selectors, dt.expr[":"] = dt.expr.pseudos, dt.uniqueSort = dt.unique = yt.uniqueSort, dt.text = yt.getText, dt.isXMLDoc = yt.isXML, dt.contains = yt.contains;
    var $t = function(t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && dt(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        bt = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        wt = dt.expr.match.needsContext,
        xt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ct = /^.[^:#\[\.,]*$/;
    dt.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? dt.find.matchesSelector(i, t) ? [i] : [] : dt.find.matches(t, dt.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, dt.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof t) return this.pushStack(dt(t).filter(function() {
                for (e = 0; r > e; e++)
                    if (dt.contains(i[e], this)) return !0
            }));
            for (e = 0; r > e; e++) dt.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? dt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && wt.test(t) ? dt(t) : t || [], !1).length
        }
    });
    var St, Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        kt = dt.fn.init = function(t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || St, "string" == typeof t) {
                if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Tt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof dt ? e[0] : e, dt.merge(this, dt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), xt.test(i[1]) && dt.isPlainObject(e))
                        for (i in e) dt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                if (r = it.getElementById(i[2]), r && r.parentNode) {
                    if (r.id !== i[2]) return St.find(t);
                    this.length = 1, this[0] = r
                }
                return this.context = it, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : dt.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(dt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), dt.makeArray(t, this))
        };
    kt.prototype = dt.fn, St = dt(it);
    var Et = /^(?:parents|prev(?:Until|All))/,
        At = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    dt.fn.extend({
        has: function(t) {
            var e, n = dt(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (dt.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, o = [], s = wt.test(t) || "string" != typeof t ? dt(t, e || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && dt.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? dt.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? dt.inArray(this[0], dt(t)) : dt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), dt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return $t(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return $t(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return $t(t, "nextSibling")
        },
        prevAll: function(t) {
            return $t(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return $t(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return $t(t, "previousSibling", n)
        },
        siblings: function(t) {
            return bt((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return bt(t.firstChild)
        },
        contents: function(t) {
            return dt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : dt.merge([], t.childNodes)
        }
    }, function(t, e) {
        dt.fn[t] = function(n, i) {
            var r = dt.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = dt.filter(i, r)), this.length > 1 && (At[t] || (r = dt.uniqueSort(r)), Et.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var _t = /\S+/g;
    dt.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : dt.extend({}, t);
        var e, n, i, r, s = [],
            a = [],
            u = -1,
            l = function() {
                for (r = t.once, i = e = !0; a.length; u = -1)
                    for (n = a.shift(); ++u < s.length;) s[u].apply(n[0], n[1]) === !1 && t.stopOnFalse && (u = s.length, n = !1);
                t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
            },
            c = {
                add: function() {
                    return s && (n && !e && (u = s.length - 1, a.push(n)), function i(e) {
                        dt.each(e, function(e, n) {
                            dt.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== dt.type(n) && i(n)
                        })
                    }(arguments), n && !e && l()), this
                },
                remove: function() {
                    return dt.each(arguments, function(t, e) {
                        for (var n;
                            (n = dt.inArray(e, s, n)) > -1;) s.splice(n, 1), u >= n && u--
                    }), this
                },
                has: function(t) {
                    return t ? dt.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return r = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return r = !0, n || c.disable(), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(t, n) {
                    return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, dt.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", dt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", dt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", dt.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return dt.Deferred(function(n) {
                            dt.each(e, function(e, o) {
                                var s = dt.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && dt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? dt.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, dt.each(e, function(t, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, n, i, r = 0,
                o = rt.call(arguments),
                s = o.length,
                a = 1 !== s || t && dt.isFunction(t.promise) ? s : 0,
                u = 1 === a ? t : dt.Deferred(),
                l = function(t, n, i) {
                    return function(r) {
                        n[t] = this, i[t] = arguments.length > 1 ? rt.call(arguments) : r, i === e ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && dt.isFunction(o[r].promise) ? o[r].promise().progress(l(r, n, e)).done(l(r, i, o)).fail(u.reject) : --a;
            return a || u.resolveWith(i, o), u.promise()
        }
    });
    var jt;
    dt.fn.ready = function(t) {
        return dt.ready.promise().done(t), this
    }, dt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? dt.readyWait++ : dt.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --dt.readyWait : dt.isReady) || (dt.isReady = !0, t !== !0 && --dt.readyWait > 0 || (jt.resolveWith(it, [dt]), dt.fn.triggerHandler && (dt(it).triggerHandler("ready"), dt(it).off("ready"))))
        }
    }), dt.ready.promise = function(e) {
        if (!jt)
            if (jt = dt.Deferred(), "complete" === it.readyState) t.setTimeout(dt.ready);
            else if (it.addEventListener) it.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
        else {
            it.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && it.documentElement
            } catch (i) {}
            n && n.doScroll && ! function r() {
                if (!dt.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return t.setTimeout(r, 50)
                    }
                    s(), dt.ready()
                }
            }()
        }
        return jt.promise(e)
    }, dt.ready.promise();
    var Nt;
    for (Nt in dt(ft)) break;
    ft.ownFirst = "0" === Nt, ft.inlineBlockNeedsLayout = !1, dt(function() {
            var t, e, n, i;
            n = it.getElementsByTagName("body")[0], n && n.style && (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ft.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var t = it.createElement("div");
            ft.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ft.deleteExpando = !1
            }
            t = null
        }();
    var Rt = function(t) {
            var e = dt.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        },
        Dt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ot = /([A-Z])/g;
    dt.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? dt.cache[t[dt.expando]] : t[dt.expando], !!t && !l(t)
            },
            data: function(t, e, n) {
                return c(t, e, n)
            },
            removeData: function(t, e) {
                return f(t, e)
            },
            _data: function(t, e, n) {
                return c(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return f(t, e, !0)
            }
        }), dt.fn.extend({
            data: function(t, e) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = dt.data(o), 1 === o.nodeType && !dt._data(o, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = dt.camelCase(i.slice(5)), u(o, i, r[i])));
                        dt._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    dt.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    dt.data(this, t, e)
                }) : o ? u(o, t, dt.data(o, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    dt.removeData(this, t)
                })
            }
        }), dt.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = dt._data(t, e), n && (!i || dt.isArray(n) ? i = dt._data(t, e, dt.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = dt.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = dt._queueHooks(t, e),
                    s = function() {
                        dt.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return dt._data(t, n) || dt._data(t, n, {
                    empty: dt.Callbacks("once memory").add(function() {
                        dt._removeData(t, e + "queue"), dt._removeData(t, n)
                    })
                })
            }
        }), dt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? dt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = dt.queue(this, t, e);
                    dt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && dt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    dt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    r = dt.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = dt._data(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        }),
        function() {
            var t;
            ft.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, n, i;
                return n = it.getElementsByTagName("body")[0], n && n.style ? (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(it.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
    var It = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        qt = new RegExp("^(?:([+-])=|)(" + It + ")([a-z%]*)$", "i"),
        Ht = ["Top", "Right", "Bottom", "Left"],
        Pt = function(t, e) {
            return t = e || t, "none" === dt.css(t, "display") || !dt.contains(t.ownerDocument, t)
        },
        Lt = function(t, e, n, i, r, o, s) {
            var a = 0,
                u = t.length,
                l = null == n;
            if ("object" === dt.type(n)) {
                r = !0;
                for (a in n) Lt(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, dt.isFunction(i) || (s = !0), l && (s ? (e.call(t, i), e = null) : (l = e, e = function(t, e, n) {
                    return l.call(dt(t), n)
                })), e))
                for (; u > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : l ? e.call(t) : u ? e(t[0], n) : o
        },
        Mt = /^(?:checkbox|radio)$/i,
        Ft = /<([\w:-]+)/,
        Ut = /^$|\/(?:java|ecma)script/i,
        Bt = /^\s+/,
        Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var t = it.createElement("div"),
            e = it.createDocumentFragment(),
            n = it.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ft.leadingWhitespace = 3 === t.firstChild.nodeType, ft.tbody = !t.getElementsByTagName("tbody").length, ft.htmlSerialize = !!t.getElementsByTagName("link").length, ft.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), ft.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", ft.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), n = it.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ft.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ft.noCloneEvent = !!t.addEventListener, t[dt.expando] = 1, ft.attributes = !t.getAttribute(dt.expando)
    }();
    var zt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ft.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
    var Wt = /<|&#?\w+;/,
        Kt = /<tbody/i;
    ! function() {
        var e, n, i = it.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (ft[e] = n in t) || (i.setAttribute(n, "t"), ft[e] = i.attributes[n].expando === !1);
        i = null
    }();
    var Xt = /^(?:input|select|textarea)$/i,
        Qt = /^key/,
        Gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Jt = /^(?:focusinfocus|focusoutblur)$/,
        Yt = /^([^.]*)(?:\.(.+)|)/;
    dt.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, u, l, c, f, h, d, p, m, g = dt._data(t);
            if (g) {
                for (n.handler && (u = n, n = u.handler, r = u.selector), n.guid || (n.guid = dt.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                        return "undefined" == typeof dt || t && dt.event.triggered === t.type ? void 0 : dt.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(_t) || [""], a = e.length; a--;) o = Yt.exec(e[a]) || [], d = m = o[1], p = (o[2] || "").split(".").sort(), d && (l = dt.event.special[d] || {}, d = (r ? l.delegateType : l.bindType) || d, l = dt.event.special[d] || {}, f = dt.extend({
                    type: d,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && dt.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, u), (h = s[d]) || (h = s[d] = [], h.delegateCount = 0, l.setup && l.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(d, c, !1) : t.attachEvent && t.attachEvent("on" + d, c))), l.add && (l.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, f) : h.push(f), dt.event.global[d] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, u, l, c, f, h, d, p, m, g = dt.hasData(t) && dt._data(t);
            if (g && (c = g.events)) {
                for (e = (e || "").match(_t) || [""], l = e.length; l--;)
                    if (a = Yt.exec(e[l]) || [], d = m = a[1], p = (a[2] || "").split(".").sort(), d) {
                        for (f = dt.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, h = c[d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = h.length; o--;) s = h[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, f.remove && f.remove.call(t, s));
                        u && !h.length && (f.teardown && f.teardown.call(t, p, g.handle) !== !1 || dt.removeEvent(t, d, g.handle), delete c[d])
                    } else
                        for (d in c) dt.event.remove(t, d + e[l], n, i, !0);
                dt.isEmptyObject(c) && (delete g.handle, dt._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, s, a, u, l, c, f, h = [i || it],
                d = ct.call(e, "type") ? e.type : e,
                p = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = i = i || it, 3 !== i.nodeType && 8 !== i.nodeType && !Jt.test(d + dt.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), d = p.shift(), p.sort()), s = d.indexOf(":") < 0 && "on" + d, e = e[dt.expando] ? e : new dt.Event(d, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : dt.makeArray(n, [e]), l = dt.event.special[d] || {}, r || !l.trigger || l.trigger.apply(i, n) !== !1)) {
                if (!r && !l.noBubble && !dt.isWindow(i)) {
                    for (u = l.delegateType || d, Jt.test(u + d) || (a = a.parentNode); a; a = a.parentNode) h.push(a), c = a;
                    c === (i.ownerDocument || it) && h.push(c.defaultView || c.parentWindow || t)
                }
                for (f = 0;
                    (a = h[f++]) && !e.isPropagationStopped();) e.type = f > 1 ? u : l.bindType || d, o = (dt._data(a, "events") || {})[e.type] && dt._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && Rt(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = d, !r && !e.isDefaultPrevented() && (!l._default || l._default.apply(h.pop(), n) === !1) && Rt(i) && s && i[d] && !dt.isWindow(i)) {
                    c = i[s], c && (i[s] = null), dt.event.triggered = d;
                    try {
                        i[d]()
                    } catch (m) {}
                    dt.event.triggered = void 0, c && (i[s] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = dt.event.fix(t);
            var e, n, i, r, o, s = [],
                a = rt.call(arguments),
                u = (dt._data(this, "events") || {})[t.type] || [],
                l = dt.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                for (s = dt.event.handlers.call(this, t, u), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((dt.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [],
                a = e.delegateCount,
                u = t.target;
            if (a && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? dt(r, this).index(u) > -1 : dt.find(r, this, null, [u]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        fix: function(t) {
            if (t[dt.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Gt.test(r) ? this.mouseHooks : Qt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new dt.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button,
                    s = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || it, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== b() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === b() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return dt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return dt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var i = dt.extend(new dt.Event, n, {
                type: t,
                isSimulated: !0
            });
            dt.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
        }
    }, dt.removeEvent = it.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
    }, dt.Event = function(t, e) {
        return this instanceof dt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : $) : this.type = t, e && dt.extend(this, e), this.timeStamp = t && t.timeStamp || dt.now(), void(this[dt.expando] = !0)) : new dt.Event(t, e)
    }, dt.Event.prototype = {
        constructor: dt.Event,
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = y, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = y, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, dt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        dt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== i && !dt.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ft.submit || (dt.event.special.submit = {
        setup: function() {
            return dt.nodeName(this, "form") ? !1 : void dt.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = dt.nodeName(e, "input") || dt.nodeName(e, "button") ? dt.prop(e, "form") : void 0;
                n && !dt._data(n, "submit") && (dt.event.add(n, "submit._submit", function(t) {
                    t._submitBubble = !0
                }), dt._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && dt.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            return dt.nodeName(this, "form") ? !1 : void dt.event.remove(this, "._submit")
        }
    }), ft.change || (dt.event.special.change = {
        setup: function() {
            return Xt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (dt.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), dt.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), dt.event.simulate("change", this, t)
            })), !1) : void dt.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Xt.test(e.nodeName) && !dt._data(e, "change") && (dt.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || dt.event.simulate("change", this.parentNode, t)
                }), dt._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return dt.event.remove(this, "._change"), !Xt.test(this.nodeName)
        }
    }), ft.focusin || dt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            dt.event.simulate(e, t.target, dt.event.fix(t))
        };
        dt.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = dt._data(i, e);
                r || i.addEventListener(t, n, !0), dt._data(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = dt._data(i, e) - 1;
                r ? dt._data(i, e, r) : (i.removeEventListener(t, n, !0), dt._removeData(i, e))
            }
        }
    }), dt.fn.extend({
        on: function(t, e, n, i) {
            return w(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return w(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, dt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = $), this.each(function() {
                dt.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                dt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? dt.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Zt = / jQuery\d+="(?:null|\d+)"/g,
        te = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
        ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ne = /<script|<style|<link/i,
        ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        re = /^true\/(.*)/,
        oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        se = d(it),
        ae = se.appendChild(it.createElement("div"));
    dt.extend({
        htmlPrefilter: function(t) {
            return t.replace(ee, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, r, o, s, a, u = dt.contains(t.ownerDocument, t);
            if (ft.html5Clone || dt.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML, ae.removeChild(o = ae.firstChild)), !(ft.noCloneEvent && ft.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t)))
                for (i = p(o), a = p(t), s = 0; null != (r = a[s]); ++s) i[s] && k(r, i[s]);
            if (e)
                if (n)
                    for (a = a || p(t), i = i || p(o), s = 0; null != (r = a[s]); s++) T(r, i[s]);
                else T(t, o);
            return i = p(o, "script"), i.length > 0 && m(i, !u && p(t, "script")), i = a = r = null, o
        },
        cleanData: function(t, e) {
            for (var n, i, r, o, s = 0, a = dt.expando, u = dt.cache, l = ft.attributes, c = dt.event.special; null != (n = t[s]); s++)
                if ((e || Rt(n)) && (r = n[a], o = r && u[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? dt.event.remove(n, i) : dt.removeEvent(n, i, o.handle);
                    u[r] && (delete u[r], l || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), nt.push(r))
                }
        }
    }), dt.fn.extend({
        domManip: E,
        detach: function(t) {
            return A(this, t, !0)
        },
        remove: function(t) {
            return A(this, t)
        },
        text: function(t) {
            return Lt(this, function(t) {
                return void 0 === t ? dt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return E(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = x(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return E(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = x(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return E(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return E(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && dt.cleanData(p(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && dt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return dt.clone(this, t, e)
            })
        },
        html: function(t) {
            return Lt(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
                if ("string" == typeof t && !ne.test(t) && (ft.htmlSerialize || !te.test(t)) && (ft.leadingWhitespace || !Bt.test(t)) && !zt[(Ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = dt.htmlPrefilter(t);
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (dt.cleanData(p(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return E(this, arguments, function(e) {
                var n = this.parentNode;
                dt.inArray(this, t) < 0 && (dt.cleanData(p(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), dt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        dt.fn[t] = function(t) {
            for (var n, i = 0, r = [], o = dt(t), s = o.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), dt(o[i])[e](n), st.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var ue, le = {
            HTML: "block",
            BODY: "block"
        },
        ce = /^margin/,
        fe = new RegExp("^(" + It + ")(?!px)[a-z%]+$", "i"),
        he = function(t, e, n, i) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e) t.style[o] = s[o];
            return r
        },
        de = it.documentElement;
    ! function() {
        function e() {
            var e, c, f = it.documentElement;
            f.appendChild(u), l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = a = !1, i = s = !0, t.getComputedStyle && (c = t.getComputedStyle(l), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                width: "4px"
            }).width, l.style.marginRight = "50%", i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, e = l.appendChild(it.createElement("div")), e.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", l.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), l.removeChild(e)), l.style.display = "none", o = 0 === l.getClientRects().length, o && (l.style.display = "", l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), f.removeChild(u)
        }
        var n, i, r, o, s, a, u = it.createElement("div"),
            l = it.createElement("div");
        l.style && (l.style.cssText = "float:left;opacity:.5", ft.opacity = "0.5" === l.style.opacity, ft.cssFloat = !!l.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ft.clearCloneStyle = "content-box" === l.style.backgroundClip, u = it.createElement("div"), u.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.innerHTML = "", u.appendChild(l), ft.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing, dt.extend(ft, {
            reliableHiddenOffsets: function() {
                return null == n && e(), o
            },
            boxSizingReliable: function() {
                return null == n && e(), r
            },
            pixelMarginRight: function() {
                return null == n && e(), i
            },
            pixelPosition: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                return null == n && e(), s
            },
            reliableMarginLeft: function() {
                return null == n && e(), a
            }
        }))
    }();
    var pe, me, ge = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (pe = function(e) {
        var n = e.ownerDocument.defaultView;
        return n.opener || (n = t), n.getComputedStyle(e)
    }, me = function(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || pe(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || dt.contains(t.ownerDocument, t) || (s = dt.style(t, e)), !ft.pixelMarginRight() && fe.test(s) && ce.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
    }) : de.currentStyle && (pe = function(t) {
        return t.currentStyle
    }, me = function(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || pe(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), fe.test(s) && !ge.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
    });
    var ve = /alpha\([^)]*\)/i,
        ye = /opacity\s*=\s*([^)]*)/i,
        $e = /^(none|table(?!-c[ea]).+)/,
        be = new RegExp("^(" + It + ")(.*)$", "i"),
        we = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        xe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ce = ["Webkit", "O", "Moz", "ms"],
        Se = it.createElement("div").style;
    dt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = me(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ft.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = dt.camelCase(e),
                    u = t.style;
                if (e = dt.cssProps[a] || (dt.cssProps[a] = R(a) || a), s = dt.cssHooks[e] || dt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e];
                if (o = typeof n, "string" === o && (r = qt.exec(n)) && r[1] && (n = h(t, e, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (dt.cssNumber[a] ? "" : "px")), ft.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                    u[e] = n
                } catch (l) {}
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = dt.camelCase(e);
            return e = dt.cssProps[a] || (dt.cssProps[a] = R(a) || a), s = dt.cssHooks[e] || dt.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = me(t, e, i)), "normal" === o && e in xe && (o = xe[e]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), dt.each(["height", "width"], function(t, e) {
        dt.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? $e.test(dt.css(t, "display")) && 0 === t.offsetWidth ? he(t, we, function() {
                    return q(t, e, i)
                }) : q(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && pe(t);
                return O(t, n, i ? I(t, e, i, ft.boxSizing && "border-box" === dt.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), ft.opacity || (dt.cssHooks.opacity = {
        get: function(t, e) {
            return ye.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                r = dt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === dt.trim(o.replace(ve, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ve.test(o) ? o.replace(ve, r) : o + " " + r)
        }
    }), dt.cssHooks.marginRight = N(ft.reliableMarginRight, function(t, e) {
        return e ? he(t, {
            display: "inline-block"
        }, me, [t, "marginRight"]) : void 0
    }), dt.cssHooks.marginLeft = N(ft.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(me(t, "marginLeft")) || (dt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - he(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), dt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        dt.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Ht[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, ce.test(t) || (dt.cssHooks[t + e].set = O)
    }), dt.fn.extend({
        css: function(t, e) {
            return Lt(this, function(t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (dt.isArray(e)) {
                    for (i = pe(t), r = e.length; r > s; s++) o[e[s]] = dt.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? dt.style(t, e, n) : dt.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Pt(this) ? dt(this).show() : dt(this).hide()
            })
        }
    }), dt.Tween = H, H.prototype = {
        constructor: H,
        init: function(t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || dt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (dt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = H.propHooks[this.prop];
            return t && t.get ? t.get(this) : H.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : dt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, dt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, dt.fx = H.prototype.init, dt.fx.step = {};
    var Te, ke, Ee = /^(?:toggle|show|hide)$/,
        Ae = /queueHooks$/;
    dt.Animation = dt.extend(B, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return h(n.elem, t, qt.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                dt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(_t);
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(e)
            },
            prefilters: [F],
            prefilter: function(t, e) {
                e ? B.prefilters.unshift(t) : B.prefilters.push(t)
            }
        }), dt.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? dt.extend({}, t) : {
                complete: n || !n && e || dt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !dt.isFunction(e) && e
            };
            return i.duration = dt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in dt.fx.speeds ? dt.fx.speeds[i.duration] : dt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                dt.isFunction(i.old) && i.old.call(this), i.queue && dt.dequeue(this, i.queue)
            }, i
        }, dt.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Pt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = dt.isEmptyObject(t),
                    o = dt.speed(e, n, i),
                    s = function() {
                        var e = B(this, dt.extend({}, t), o);
                        (r || dt._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = dt.timers,
                        s = dt._data(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && Ae.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    (e || !n) && dt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = dt._data(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = dt.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, dt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), dt.each(["toggle", "show", "hide"], function(t, e) {
            var n = dt.fn[e];
            dt.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(L(e, !0), t, i, r)
            }
        }), dt.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            dt.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), dt.timers = [], dt.fx.tick = function() {
            var t, e = dt.timers,
                n = 0;
            for (Te = dt.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || dt.fx.stop(), Te = void 0
        }, dt.fx.timer = function(t) {
            dt.timers.push(t), t() ? dt.fx.start() : dt.timers.pop()
        }, dt.fx.interval = 13, dt.fx.start = function() {
            ke || (ke = t.setInterval(dt.fx.tick, dt.fx.interval))
        }, dt.fx.stop = function() {
            t.clearInterval(ke), ke = null
        }, dt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, dt.fn.delay = function(e, n) {
            return e = dt.fx ? dt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function() {
                    t.clearTimeout(r)
                }
            })
        },
        function() {
            var t, e = it.createElement("input"),
                n = it.createElement("div"),
                i = it.createElement("select"),
                r = i.appendChild(it.createElement("option"));
            n = it.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), t = n.getElementsByTagName("a")[0], t.style.cssText = "top:1px", ft.getSetAttribute = "t" !== n.className, ft.style = /top/.test(t.getAttribute("style")), ft.hrefNormalized = "/a" === t.getAttribute("href"), ft.checkOn = !!e.value, ft.optSelected = r.selected, ft.enctype = !!it.createElement("form").enctype, i.disabled = !0, ft.optDisabled = !r.disabled, e = it.createElement("input"), e.setAttribute("value", ""), ft.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ft.radioValue = "t" === e.value
        }();
    var _e = /\r/g;
    dt.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0]; {
                if (arguments.length) return i = dt.isFunction(t), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, dt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : dt.isArray(r) && (r = dt.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), e = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                });
                if (r) return e = dt.valHooks[r.type] || dt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(_e, "") : null == n ? "" : n)
            }
        }
    }), dt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = dt.find.attr(t, "value");
                    return null != e ? e : dt.trim(dt.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++)
                        if (n = i[u], (n.selected || u === r) && (ft.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !dt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = dt(n).val(), o) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, o = dt.makeArray(e), s = r.length; s--;)
                        if (i = r[s], dt.inArray(dt.valHooks.option.get(i), o) >= 0) try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), dt.each(["radio", "checkbox"], function() {
        dt.valHooks[this] = {
            set: function(t, e) {
                return dt.isArray(e) ? t.checked = dt.inArray(dt(t).val(), e) > -1 : void 0
            }
        }, ft.checkOn || (dt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var je, Ne, Re = dt.expr.attrHandle,
        De = /^(?:checked|selected)$/i,
        Oe = ft.getSetAttribute,
        Ie = ft.input;
    dt.fn.extend({
        attr: function(t, e) {
            return Lt(this, dt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                dt.removeAttr(this, t)
            })
        }
    }), dt.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? dt.prop(t, e, n) : (1 === o && dt.isXMLDoc(t) || (e = e.toLowerCase(), r = dt.attrHooks[e] || (dt.expr.match.bool.test(e) ? Ne : je)), void 0 !== n ? null === n ? void dt.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = dt.find.attr(t, e), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!ft.radioValue && "radio" === e && dt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
                o = e && e.match(_t);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = dt.propFix[n] || n, dt.expr.match.bool.test(n) ? Ie && Oe || !De.test(n) ? t[i] = !1 : t[dt.camelCase("default-" + n)] = t[i] = !1 : dt.attr(t, n, ""), t.removeAttribute(Oe ? n : i)
        }
    }), Ne = {
        set: function(t, e, n) {
            return e === !1 ? dt.removeAttr(t, n) : Ie && Oe || !De.test(n) ? t.setAttribute(!Oe && dt.propFix[n] || n, n) : t[dt.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, dt.each(dt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = Re[e] || dt.find.attr;
        Ie && Oe || !De.test(e) ? Re[e] = function(t, e, i) {
            var r, o;
            return i || (o = Re[e], Re[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Re[e] = o), r
        } : Re[e] = function(t, e, n) {
            return n ? void 0 : t[dt.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Ie && Oe || (dt.attrHooks.value = {
        set: function(t, e, n) {
            return dt.nodeName(t, "input") ? void(t.defaultValue = e) : je && je.set(t, e, n)
        }
    }), Oe || (je = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, Re.id = Re.name = Re.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, dt.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: je.set
    }, dt.attrHooks.contenteditable = {
        set: function(t, e, n) {
            je.set(t, "" === e ? !1 : e, n)
        }
    }, dt.each(["width", "height"], function(t, e) {
        dt.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), ft.style || (dt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var qe = /^(?:input|select|textarea|button|object)$/i,
        He = /^(?:a|area)$/i;
    dt.fn.extend({
        prop: function(t, e) {
            return Lt(this, dt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = dt.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), dt.extend({
        prop: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && dt.isXMLDoc(t) || (e = dt.propFix[e] || e, r = dt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = dt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : qe.test(t.nodeName) || He.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ft.hrefNormalized || dt.each(["href", "src"], function(t, e) {
        dt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), ft.optSelected || (dt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        dt.propFix[this.toLowerCase()] = this
    }), ft.enctype || (dt.propFix.enctype = "encoding");
    var Pe = /[\t\r\n\f]/g;
    dt.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, u = 0;
            if (dt.isFunction(t)) return this.each(function(e) {
                dt(this).addClass(t.call(this, e, V(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(_t) || []; n = this[u++];)
                    if (r = V(n), i = 1 === n.nodeType && (" " + r + " ").replace(Pe, " ")) {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = dt.trim(i), r !== a && dt.attr(n, "class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, u = 0;
            if (dt.isFunction(t)) return this.each(function(e) {
                dt(this).removeClass(t.call(this, e, V(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(_t) || []; n = this[u++];)
                    if (r = V(n), i = 1 === n.nodeType && (" " + r + " ").replace(Pe, " ")) {
                        for (s = 0; o = e[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        a = dt.trim(i), r !== a && dt.attr(n, "class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : dt.isFunction(t) ? this.each(function(n) {
                dt(this).toggleClass(t.call(this, n, V(this), e), e)
            }) : this.each(function() {
                var e, i, r, o;
                if ("string" === n)
                    for (i = 0, r = dt(this), o = t.match(_t) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(void 0 === t || "boolean" === n) && (e = V(this), e && dt._data(this, "__className__", e), dt.attr(this, "class", e || t === !1 ? "" : dt._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + V(n) + " ").replace(Pe, " ").indexOf(e) > -1) return !0;
            return !1
        }
    }), dt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        dt.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), dt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Le = t.location,
        Me = dt.now(),
        Fe = /\?/,
        Ue = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    dt.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
            r = dt.trim(e + "");
        return r && !dt.trim(r.replace(Ue, function(t, e, r, o) {
            return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
        })) ? Function("return " + r)() : dt.error("Invalid JSON: " + e)
    }, dt.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + e), n
    };
    var Be = /#.*$/,
        Ve = /([?&])_=[^&]*/,
        ze = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        We = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ke = /^(?:GET|HEAD)$/,
        Xe = /^\/\//,
        Qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ge = {},
        Je = {},
        Ye = "*/".concat("*"),
        Ze = Le.href,
        tn = Qe.exec(Ze.toLowerCase()) || [];
    dt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ze,
            type: "GET",
            isLocal: We.test(tn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ye,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": dt.parseJSON,
                "text xml": dt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? K(K(t, dt.ajaxSettings), e) : K(dt.ajaxSettings, t)
        },
        ajaxPrefilter: z(Ge),
        ajaxTransport: z(Je),
        ajax: function(e, n) {
            function i(e, n, i, r) {
                var o, f, y, $, w, C = n;
                2 !== b && (b = 2, u && t.clearTimeout(u), c = void 0, a = r || "", x.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && ($ = X(h, x, i)), $ = Q(h, $, x, o), o ? (h.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (dt.lastModified[s] = w), w = x.getResponseHeader("etag"), w && (dt.etag[s] = w)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = $.state, f = $.data, y = $.error, o = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || C) + "", o ? m.resolveWith(d, [f, C, x]) : m.rejectWith(d, [x, C, y]), x.statusCode(v), v = void 0, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, h, o ? f : y]), g.fireWith(d, [x, C]), l && (p.trigger("ajaxComplete", [x, h]), --dt.active || dt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, o, s, a, u, l, c, f, h = dt.ajaxSetup({}, n),
                d = h.context || h,
                p = h.context && (d.nodeType || d.jquery) ? dt(d) : dt.event,
                m = dt.Deferred(),
                g = dt.Callbacks("once memory"),
                v = h.statusCode || {},
                y = {},
                $ = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!f)
                                for (f = {}; e = ze.exec(a);) f[e[1].toLowerCase()] = e[2];
                            e = f[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = $[n] = $[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (h.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) v[e] = [v[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return c && c.abort(e), i(0, e), this
                    }
                };
            if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, h.url = ((e || h.url || Ze) + "").replace(Be, "").replace(Xe, tn[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = dt.trim(h.dataType || "*").toLowerCase().match(_t) || [""], null == h.crossDomain && (r = Qe.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === tn[1] && r[2] === tn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = dt.param(h.data, h.traditional)), W(Ge, h, n, x), 2 === b) return x;
            l = dt.event && h.global, l && 0 === dt.active++ && dt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ke.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (Fe.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Ve.test(s) ? s.replace(Ve, "$1_=" + Me++) : s + (Fe.test(s) ? "&" : "?") + "_=" + Me++)), h.ifModified && (dt.lastModified[s] && x.setRequestHeader("If-Modified-Since", dt.lastModified[s]), dt.etag[s] && x.setRequestHeader("If-None-Match", dt.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ye + "; q=0.01" : "") : h.accepts["*"]);
            for (o in h.headers) x.setRequestHeader(o, h.headers[o]);
            if (h.beforeSend && (h.beforeSend.call(d, x, h) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](h[o]);
            if (c = W(Je, h, n, x)) {
                if (x.readyState = 1, l && p.trigger("ajaxSend", [x, h]), 2 === b) return x;
                h.async && h.timeout > 0 && (u = t.setTimeout(function() {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    b = 1, c.send(y, i)
                } catch (C) {
                    if (!(2 > b)) throw C;
                    i(-1, C)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return dt.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return dt.get(t, void 0, e, "script")
        }
    }), dt.each(["get", "post"], function(t, e) {
        dt[e] = function(t, n, i, r) {
            return dt.isFunction(n) && (r = r || i, i = n, n = void 0), dt.ajax(dt.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, dt.isPlainObject(t) && t))
        }
    }), dt._evalUrl = function(t) {
        return dt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, dt.fn.extend({
        wrapAll: function(t) {
            if (dt.isFunction(t)) return this.each(function(e) {
                dt(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = dt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return dt.isFunction(t) ? this.each(function(e) {
                dt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = dt(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = dt.isFunction(t);
            return this.each(function(n) {
                dt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                dt.nodeName(this, "body") || dt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), dt.expr.filters.hidden = function(t) {
        return ft.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : J(t)
    }, dt.expr.filters.visible = function(t) {
        return !dt.expr.filters.hidden(t)
    };
    var en = /%20/g,
        nn = /\[\]$/,
        rn = /\r?\n/g,
        on = /^(?:submit|button|image|reset|file)$/i,
        sn = /^(?:input|select|textarea|keygen)/i;
    dt.param = function(t, e) {
        var n, i = [],
            r = function(t, e) {
                e = dt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = dt.ajaxSettings && dt.ajaxSettings.traditional), dt.isArray(t) || t.jquery && !dt.isPlainObject(t)) dt.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (n in t) Y(n, t[n], e, r);
        return i.join("&").replace(en, "+")
    }, dt.fn.extend({
        serialize: function() {
            return dt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = dt.prop(this, "elements");
                return t ? dt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !dt(this).is(":disabled") && sn.test(this.nodeName) && !on.test(t) && (this.checked || !Mt.test(t))
            }).map(function(t, e) {
                var n = dt(this).val();
                return null == n ? null : dt.isArray(n) ? dt.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(rn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(rn, "\r\n")
                }
            }).get()
        }
    }), dt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return this.isLocal ? tt() : it.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    } : Z;
    var an = 0,
        un = {},
        ln = dt.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in un) un[t](void 0, !0)
    }), ft.cors = !!ln && "withCredentials" in ln, ln = ft.ajax = !!ln, ln && dt.ajaxTransport(function(e) {
        if (!e.crossDomain || ft.cors) {
            var n;
            return {
                send: function(i, r) {
                    var o, s = e.xhr(),
                        a = ++an;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) s[o] = e.xhrFields[o];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) void 0 !== i[o] && s.setRequestHeader(o, i[o] + "");
                    s.send(e.hasContent && e.data || null), n = function(t, i) {
                        var o, u, l;
                        if (n && (i || 4 === s.readyState))
                            if (delete un[a], n = void 0, s.onreadystatechange = dt.noop, i) 4 !== s.readyState && s.abort();
                            else {
                                l = {}, o = s.status, "string" == typeof s.responseText && (l.text = s.responseText);
                                try {
                                    u = s.statusText
                                } catch (c) {
                                    u = ""
                                }
                                o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                            }
                        l && r(o, u, l, s.getAllResponseHeaders())
                    }, e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = un[a] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), dt.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), dt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return dt.globalEval(t), t
            }
        }
    }), dt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), dt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = it.head || dt("head")[0] || it.documentElement;
            return {
                send: function(i, r) {
                    e = it.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var cn = [],
        fn = /(=)\?(?=&|$)|\?\?/;
    dt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = cn.pop() || dt.expando + "_" + Me++;
            return this[t] = !0, t
        }
    }), dt.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && (fn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && fn.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = dt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(fn, "$1" + r) : e.jsonp !== !1 && (e.url += (Fe.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || dt.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? dt(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, cn.push(r)), s && dt.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), ft.createHTMLDocument = function() {
        if (!it.implementation.createHTMLDocument) return !1;
        var t = it.implementation.createHTMLDocument("");
        return t.body.innerHTML = "<form></form><form></form>", 2 === t.body.childNodes.length
    }(), dt.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || (ft.createHTMLDocument ? it.implementation.createHTMLDocument("") : it);
        var i = xt.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = v([t], e, r), r && r.length && dt(r).remove(), dt.merge([], i.childNodes))
    };
    var hn = dt.fn.load;
    dt.fn.load = function(t, e, n) {
        if ("string" != typeof t && hn) return hn.apply(this, arguments);
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return a > -1 && (i = dt.trim(t.slice(a, t.length)), t = t.slice(0, a)), dt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && dt.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(i ? dt("<div>").append(dt.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(s, o || [t.responseText, e, t])
            })
        }), this
    }, dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        dt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), dt.expr.filters.animated = function(t) {
        return dt.grep(dt.timers, function(e) {
            return t === e.elem
        }).length
    }, dt.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, u, l, c = dt.css(t, "position"),
                f = dt(t),
                h = {};
            "static" === c && (t.style.position = "relative"), a = f.offset(), o = dt.css(t, "top"), u = dt.css(t, "left"), l = ("absolute" === c || "fixed" === c) && dt.inArray("auto", [o, u]) > -1, l ? (i = f.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0), dt.isFunction(e) && (e = e.call(t, n, dt.extend({}, a))), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + r), "using" in e ? e.using.call(t, h) : f.css(h)
        }
    }, dt.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                dt.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            if (o) return e = o.documentElement, dt.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = et(o), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === dt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), dt.nodeName(t[0], "html") || (n = t.offset()), n.top += dt.css(t[0], "borderTopWidth", !0) - t.scrollTop(), n.left += dt.css(t[0], "borderLeftWidth", !0) - t.scrollLeft()), {
                    top: e.top - n.top - dt.css(i, "marginTop", !0),
                    left: e.left - n.left - dt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !dt.nodeName(t, "html") && "static" === dt.css(t, "position");) t = t.offsetParent;
                return t || de
            })
        }
    }), dt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        dt.fn[t] = function(i) {
            return Lt(this, function(t, i, r) {
                var o = et(t);
                return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? dt(o).scrollLeft() : r, n ? r : dt(o).scrollTop()) : t[i] = r)
            }, t, i, arguments.length, null)
        }
    }), dt.each(["top", "left"], function(t, e) {
        dt.cssHooks[e] = N(ft.pixelPosition, function(t, n) {
            return n ? (n = me(t, e), fe.test(n) ? dt(t).position()[e] + "px" : n) : void 0
        })
    }), dt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        dt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            dt.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return Lt(this, function(e, n, i) {
                    var r;
                    return dt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? dt.css(e, n, s) : dt.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), dt.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), dt.fn.size = function() {
        return this.length
    }, dt.fn.andSelf = dt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return dt
    });
    var dn = t.jQuery,
        pn = t.$;
    return dt.noConflict = function(e) {
        return t.$ === dt && (t.$ = pn), e && t.jQuery === dt && (t.jQuery = dn), dt
    }, e || (t.jQuery = t.$ = dt), dt
}),
function(t, e) {
    "use strict";
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return t("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return t("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(t) {
            var e = n.csrfToken();
            e && t.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function() {
            t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), r.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t[0].href
        },
        isRemote: function(t) {
            return t.data("remote") !== e && t.data("remote") !== !1
        },
        handleRemote: function(i) {
            var r, o, s, a, u, l;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, u = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.data("ujs:submit-button-formmethod") || i.attr("method"), o = i.data("ujs:submit-button-formaction") || i.attr("action"), s = t(i[0].elements).serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (s.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                return l = {
                    type: r || "GET",
                    data: s,
                    dataType: u,
                    beforeSend: function(t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r]) ? void i.trigger("ajax:send", t) : !1
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, a && (l.xhrFields = {
                    withCredentials: a
                }), o && (l.url = o), n.ajax(l)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function(i) {
            var r = n.href(i),
                o = i.data("method"),
                s = i.attr("target"),
                a = n.csrfToken(),
                u = n.csrfParam(),
                l = t('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            u === e || a === e || n.isCrossDomain(r) || (c += '<input name="' + u + '" value="' + a + '" type="hidden" />'), s && l.attr("target", s), l.hide().append(c).appendTo("body"), l.submit()
        },
        formElements: function(e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        },
        disableFormElements: function(e) {
            n.formElements(e, n.disableSelector).each(function() {
                n.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var n, i;
            n = t.is("button") ? "html" : "val", i = t.data("disable-with"), i !== e && (t.data("ujs:enable-with", t[n]()), t[n](i)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
        },
        enableFormElements: function(e) {
            n.formElements(e, n.enableSelector).each(function() {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var n = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") !== e && (t[n](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
        },
        allowAction: function(t) {
            var e, i = t.data("confirm"),
                r = !1;
            if (!i) return !0;
            if (n.fire(t, "confirm")) {
                try {
                    r = n.confirm(i)
                } catch (o) {
                    (console.error || console.log).call(console, o.stack || o)
                }
                e = n.fire(t, "confirm:complete", [r])
            }
            return r && e
        },
        blankInputs: function(e, n, i) {
            var r, o, s = t(),
                a = n || "input,textarea",
                u = e.find(a);
            return u.each(function() {
                if (r = t(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val(), o === i) {
                    if (r.is("input[type=radio]") && u.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                    s = s.add(r)
                }
            }), s.length ? s : !1
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var i = t.data("disable-with");
            i !== e && (t.data("ujs:enable-with", t.html()), t.html(i)), t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            }), t.data("ujs:disabled", !0)
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), t(window).on("pageshow.rails", function() {
        t(t.rails.enableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableFormElement(e)
        }), t(t.rails.linkDisableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableElement(e)
        })
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(t(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
        n.enableFormElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function(e) {
        var i = t(this),
            r = i.data("method"),
            o = i.data("params"),
            s = e.metaKey || e.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(e);
        if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (s && (!r || "GET" === r) && !o) return !0;
            var a = n.handleRemote(i);
            return a === !1 ? n.enableElement(i) : a.fail(function() {
                n.enableElement(i)
            }), !1
        }
        return r ? (n.handleMethod(i), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r === !1 ? n.enableFormElement(i) : r.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function(e) {
        var i = t(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var r, o, s = t(this),
            a = n.isRemote(s);
        if (!n.allowAction(s)) return n.stopEverything(i);
        if (s.attr("novalidate") === e)
            if (s.data("ujs:formnovalidate-button") === e) {
                if (r = n.blankInputs(s, n.requiredInputSelector, !1), r && n.fire(s, "ajax:aborted:required", [r])) return n.stopEverything(i)
            } else s.data("ujs:formnovalidate-button", e);
        if (a) {
            if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(s)
                }, 13);
                var u = n.fire(s, "ajax:aborted:file", [o]);
                return u || setTimeout(function() {
                    n.enableFormElements(s)
                }, 13), u
            }
            return n.handleRemote(s), !1
        }
        setTimeout(function() {
            n.disableFormElements(s)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        var r = i.attr("name"),
            o = r ? {
                name: r,
                value: i.val()
            } : null,
            s = i.closest("form");
        0 === s.length && (s = t("#" + i.attr("form"))), s.data("ujs:submit-button", o), s.data("ujs:formnovalidate-button", i.attr("formnovalidate")), s.data("ujs:submit-button-formaction", i.attr("formaction")), s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(e) {
        this === e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
        this === e.target && n.enableFormElements(t(this))
    }), t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery);
var ALGOLIA_VERSION = "2.9.7",
    AlgoliaSearch = function(t, e, n, i, r) {
        var o = this;
        this.applicationID = t, this.apiKey = e, this.dsn = !0, this.dsnHost = null, this.hosts = [], this.currentHostIndex = 0, this.requestTimeoutInMs = 2e3, this.extraHeaders = [], this.jsonp = null, this.options = {}, this.cache = {};
        var s, a = "net";
        if ("string" == typeof n) s = n;
        else {
            var u = n || {};
            this.options = u, this._isUndefined(u.method) || (s = u.method), this._isUndefined(u.tld) || (a = u.tld), this._isUndefined(u.dsn) || (this.dsn = u.dsn), this._isUndefined(u.hosts) || (r = u.hosts), this._isUndefined(u.dsnHost) || (this.dsnHost = u.dsnHost), this._isUndefined(u.requestTimeoutInMs) || (this.requestTimeoutInMs = +u.requestTimeoutInMs), this._isUndefined(u.jsonp) || (this.jsonp = u.jsonp)
        }
        this._isUndefined(r) && (r = [this.applicationID + "-1.algolianet.com", this.applicationID + "-2.algolianet.com", this.applicationID + "-3.algolianet.com"]), this.host_protocol = "http://", this._isUndefined(s) || null === s ? this.host_protocol = ("https:" == document.location.protocol ? "https" : "http") + "://" : ("https" === s || "HTTPS" === s) && (this.host_protocol = "https://");
        for (var l = 0; l < r.length; ++l) this.hosts.push(this.host_protocol + r[l]);
        (this.dsn || null != this.dsnHost) && (this.dsnHost ? this.hosts.unshift(this.host_protocol + this.dsnHost) : this.hosts.unshift(this.host_protocol + this.applicationID + "-dsn.algolia." + a)), this.options.angular && this.options.angular.$injector.invoke(["$http", "$q", function(t, e) {
            o.options.angular.$q = e, o.options.angular.$http = t
        }]), this._ua = this.options._ua || "Algolia for vanilla JavaScript " + window.ALGOLIA_VERSION
    };
AlgoliaSearch.JSONPCounter = 0, AlgoliaSearch.prototype = {
        deleteIndex: function(t, e) {
            return this._jsonRequest({
                method: "DELETE",
                url: "/1/indexes/" + encodeURIComponent(t),
                callback: e
            })
        },
        moveIndex: function(t, e, n) {
            var i = {
                operation: "move",
                destination: e
            };
            return this._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(t) + "/operation",
                body: i,
                callback: n
            })
        },
        copyIndex: function(t, e, n) {
            var i = {
                operation: "copy",
                destination: e
            };
            return this._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(t) + "/operation",
                body: i,
                callback: n
            })
        },
        getLogs: function(t, e, n) {
            return this._isUndefined(e) && (e = 0), this._isUndefined(n) && (n = 10), this._jsonRequest({
                method: "GET",
                url: "/1/logs?offset=" + e + "&length=" + n,
                callback: t
            })
        },
        listIndexes: function(t, e) {
            var n = "undefined" != typeof e ? "?page=" + e : "";
            return this._jsonRequest({
                method: "GET",
                url: "/1/indexes" + n,
                callback: t
            })
        },
        initIndex: function(t) {
            return new this.Index(this, t)
        },
        listUserKeys: function(t) {
            return this._jsonRequest({
                method: "GET",
                url: "/1/keys",
                callback: t
            })
        },
        getUserKeyACL: function(t, e) {
            return this._jsonRequest({
                method: "GET",
                url: "/1/keys/" + t,
                callback: e
            })
        },
        deleteUserKey: function(t, e) {
            return this._jsonRequest({
                method: "DELETE",
                url: "/1/keys/" + t,
                callback: e
            })
        },
        addUserKey: function(t, e) {
            return this.addUserKeyWithValidity(t, 0, 0, 0, e)
        },
        addUserKeyWithValidity: function(t, e, n, i, r) {
            var o = {};
            return o.acl = t, o.validity = e, o.maxQueriesPerIPPerHour = n, o.maxHitsPerQuery = i, this._jsonRequest({
                method: "POST",
                url: "/1/keys",
                body: o,
                callback: r
            })
        },
        setSecurityTags: function(t) {
            if ("[object Array]" === Object.prototype.toString.call(t)) {
                for (var e = [], n = 0; n < t.length; ++n)
                    if ("[object Array]" === Object.prototype.toString.call(t[n])) {
                        for (var i = [], r = 0; r < t[n].length; ++r) i.push(t[n][r]);
                        e.push("(" + i.join(",") + ")")
                    } else e.push(t[n]);
                t = e.join(",")
            }
            this.tagFilters = t
        },
        setUserToken: function(t) {
            this.userToken = t
        },
        startQueriesBatch: function() {
            this.batch = []
        },
        addQueryInBatch: function(t, e, n) {
            var i = "query=" + encodeURIComponent(e);
            this._isUndefined(n) || null === n || (i = this._getSearchParams(n, i)), this.batch.push({
                indexName: t,
                params: i
            })
        },
        clearCache: function() {
            this.cache = {}
        },
        sendQueriesBatch: function(t, e) {
            for (var n = this, i = {
                    requests: []
                }, r = 0; r < n.batch.length; ++r) i.requests.push(n.batch[r]);
            if (window.clearTimeout(n.onDelayTrigger), this._isUndefined(e) || null === e || !(e > 0)) return this._sendQueriesBatch(i, t);
            var o = window.setTimeout(function() {
                n._sendQueriesBatch(i, t)
            }, e);
            n.onDelayTrigger = o
        },
        setRequestTimeout: function(t) {
            t && (this.requestTimeoutInMs = parseInt(t, 10))
        },
        Index: function(t, e) {
            this.indexName = e, this.as = t, this.typeAheadArgs = null, this.typeAheadValueOption = null, this.cache = {}
        },
        setExtraHeader: function(t, e) {
            this.extraHeaders.push({
                key: t,
                value: e
            })
        },
        _sendQueriesBatch: function(t, e) {
            if (null === this.jsonp) {
                var n = this;
                return this._jsonRequest({
                    cache: this.cache,
                    method: "POST",
                    url: "/1/indexes/*/queries",
                    body: t,
                    callback: function(i, r) {
                        i ? (n.jsonp = !1, e && e(i, r)) : (n.jsonp = !0, n._sendQueriesBatch(t, e))
                    }
                })
            }
            if (this.jsonp) {
                for (var i = "", r = 0; r < t.requests.length; ++r) {
                    var o = "/1/indexes/" + encodeURIComponent(t.requests[r].indexName) + "?" + t.requests[r].params;
                    i += r + "=" + encodeURIComponent(o) + "&"
                }
                var s = {
                    params: i
                };
                return this._jsonRequest({
                    cache: this.cache,
                    method: "GET",
                    url: "/1/indexes/*",
                    body: s,
                    callback: e
                })
            }
            return this._jsonRequest({
                cache: this.cache,
                method: "POST",
                url: "/1/indexes/*/queries",
                body: t,
                callback: e
            })
        },
        _jsonRequest: function(t) {
            var e = this,
                n = t.callback,
                i = null,
                r = t.url,
                o = null;
            if (this.options.jQuery ? (o = this.options.jQuery.$.Deferred(), o.promise = o.promise()) : this.options.angular && (o = this.options.angular.$q.defer()), this._isUndefined(t.body) || (r = t.url + "_body_" + JSON.stringify(t.body)), !this._isUndefined(t.cache) && (i = t.cache, !this._isUndefined(i[r]))) return !this._isUndefined(n) && n && setTimeout(function() {
                n(!0, i[r])
            }, 1), o && o.resolve(i[r]), o && o.promise;
            t.successiveRetryCount = 0;
            var s = function() {
                if (t.successiveRetryCount >= e.hosts.length) {
                    var a = {
                        message: "Cannot connect the Algolia's Search API. Please send an email to support@algolia.com to report the issue."
                    };
                    return !e._isUndefined(n) && n && (t.successiveRetryCount = 0, n(!1, a)), void(o && o.reject(a))
                }
                t.callback = function(a, u, l) {
                    u && !e._isUndefined(t.cache) && (i[r] = l), !u && a ? (e.currentHostIndex = ++e.currentHostIndex % e.hosts.length, t.successiveRetryCount += 1, s()) : (t.successiveRetryCount = 0, o && (u ? o.resolve(l) : o.reject(l)), !e._isUndefined(n) && n && n(u, l))
                }, t.hostname = e.hosts[e.currentHostIndex], e._jsonRequestByHost(t)
            };
            return s(), o && o.promise
        },
        _jsonRequestByHost: function(t) {
            var e = t.hostname + t.url;
            this.jsonp ? this._makeJsonpRequestByHost(e, t) : this.options.jQuery ? this._makejQueryRequestByHost(e, t) : this.options.angular ? this._makeAngularRequestByHost(e, t) : this._makeXmlHttpRequestByHost(e, t)
        },
        _makeAngularRequestByHost: function(t, e) {
            var n = null;
            this._isUndefined(e.body) || (n = JSON.stringify(e.body)), t += (-1 === t.indexOf("?") ? "?" : "&") + "X-Algolia-API-Key=" + this.apiKey, t += "&X-Algolia-Application-Id=" + this.applicationID, this.userToken && (t += "&X-Algolia-UserToken=" + encodeURIComponent(this.userToken)), this.tagFilters && (t += "&X-Algolia-TagFilters=" + encodeURIComponent(this.tagFilters)), t += "&X-Algolia-Agent=" + encodeURIComponent(this._ua);
            for (var i = 0; i < this.extraHeaders.length; ++i) t += "&" + this.extraHeaders[i].key + "=" + this.extraHeaders[i].value;
            this.options.angular.$http({
                url: t,
                method: e.method,
                data: n,
                cache: !1,
                timeout: this.requestTimeoutInMs * (e.successiveRetryCount + 1)
            }).then(function(t) {
                e.callback(!1, !0, t.data)
            }, function(t) {
                0 === t.status ? e.callback(!0, !1, t.data) : 400 == t.status || 403 === t.status || 404 === t.status ? e.callback(!1, !1, t.data) : e.callback(!0, !1, t.data)
            })
        },
        _makejQueryRequestByHost: function(t, e) {
            var n = null;
            this._isUndefined(e.body) || (n = JSON.stringify(e.body)), t += (-1 === t.indexOf("?") ? "?" : "&") + "X-Algolia-API-Key=" + this.apiKey, t += "&X-Algolia-Application-Id=" + this.applicationID, this.userToken && (t += "&X-Algolia-UserToken=" + encodeURIComponent(this.userToken)), this.tagFilters && (t += "&X-Algolia-TagFilters=" + encodeURIComponent(this.tagFilters)), t += "&X-Algolia-Agent=" + encodeURIComponent(this._ua);
            for (var i = 0; i < this.extraHeaders.length; ++i) t += "&" + this.extraHeaders[i].key + "=" + this.extraHeaders[i].value;
            this.options.jQuery.$.ajax(t, {
                type: e.method,
                timeout: this.requestTimeoutInMs * (e.successiveRetryCount + 1),
                dataType: "json",
                data: n,
                error: function(n, i, r) {
                    "timeout" === i ? e.callback(!0, !1, {
                        message: "Timeout - Could not connect to endpoint " + t
                    }) : 400 === n.status || 403 === n.status || 404 === n.status ? e.callback(!1, !1, n.responseJSON) : e.callback(!0, !1, {
                        message: r
                    })
                },
                success: function(t, n, i) {
                    e.callback(!1, !0, t)
                }
            })
        },
        _makeJsonpRequestByHost: function(t, e) {
            if ("GET" !== e.method) return void e.callback(!0, !1, {
                message: "Method " + e.method + " " + t + " is not supported by JSONP."
            });
            var n = !1,
                i = !1;
            AlgoliaSearch.JSONPCounter += 1;
            var r, o, s, a = document.getElementsByTagName("head")[0],
                u = document.createElement("script"),
                l = "algoliaJSONP_" + AlgoliaSearch.JSONPCounter,
                c = !1;
            window[l] = function(t) {
                try {
                    delete window[l]
                } catch (r) {
                    window[l] = void 0
                }
                if (!i) {
                    var o = t && t.message && t.status || t && 200,
                        s = 200 === o,
                        a = !s && 400 !== o && 403 !== o && 404 !== o;
                    n = !0, e.callback(a, s, t)
                }
            }, u.type = "text/javascript", t += "?callback=" + l + "&X-Algolia-Application-Id=" + this.applicationID + "&X-Algolia-API-Key=" + this.apiKey, this.tagFilters && (t += "&X-Algolia-TagFilters=" + encodeURIComponent(this.tagFilters)), this.userToken && (t += "&X-Algolia-UserToken=" + encodeURIComponent(this.userToken)), t += "&X-Algolia-Agent=" + encodeURIComponent(this._ua);
            for (var f = 0; f < this.extraHeaders.length; ++f) t += "&" + this.extraHeaders[f].key + "=" + this.extraHeaders[f].value;
            e.body && e.body.params && (t += "&" + e.body.params), r = setTimeout(function() {
                i = !0, s(), e.callback(!0, !1, {
                    message: "Timeout - Failed to load JSONP script."
                })
            }, this.requestTimeoutInMs * (e.successiveRetryCount + 1)), o = function() {
                c || i || (c = !0, s(), n || e.callback(!0, !1, {
                    message: "Failed to load JSONP script."
                }))
            }, s = function() {
                clearTimeout(r), u.onload = null, u.onreadystatechange = null, u.onerror = null, a.removeChild(u);
                try {
                    delete window[l], delete window[l + "_loaded"]
                } catch (t) {
                    window[l] = null, window[l + "_loaded"] = null
                }
            }, u.onreadystatechange = function() {
                ("loaded" === this.readyState || "complete" === this.readyState) && o()
            }, u.onload = function() {
                o()
            }, u.onerror = function() {
                c || i || (s(), e.callback(!0, !1, {
                    message: "Failed to load JSONP script."
                }))
            }, u.async = !0, u.defer = !0, u.src = t, a.appendChild(u)
        },
        _makeXmlHttpRequestByHost: function(t, e) {
            if (!this._support.cors && !this._support.hasXDomainRequest) return void e.callback(!1, !1, {
                message: "CORS not supported"
            });
            var n, i, r, o = null,
                s = this._support.cors ? new XMLHttpRequest : new XDomainRequest,
                a = this;
            this._isUndefined(e.body) || (o = JSON.stringify(e.body)), t += (-1 === t.indexOf("?") ? "?" : "&") + "X-Algolia-API-Key=" + this.apiKey, t += "&X-Algolia-Application-Id=" + this.applicationID, this.userToken && (t += "&X-Algolia-UserToken=" + encodeURIComponent(this.userToken)), this.tagFilters && (t += "&X-Algolia-TagFilters=" + encodeURIComponent(this.tagFilters)), t += "&X-Algolia-Agent=" + encodeURIComponent(this._ua);
            for (var u = 0; u < this.extraHeaders.length; ++u) t += "&" + this.extraHeaders[u].key + "=" + this.extraHeaders[u].value;
            r = function() {
                a._support.timeout || (i = !0, s.abort()), e.callback(!0, !1, {
                    message: "Timeout - Could not connect to endpoint " + t
                })
            }, s instanceof XMLHttpRequest ? s.open(e.method, t, !0) : s.open(e.method, t), this._support.cors && null !== o && "GET" !== e.method && s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), s.onload = function() {
                if (!i) {
                    a._support.timeout || clearTimeout(n);
                    var t = null;
                    try {
                        t = JSON.parse(s.responseText)
                    } catch (r) {}
                    var o = s.status || t && t.message && t.status || t && 200,
                        u = 200 === o || 201 === o,
                        l = !u && 400 !== o && 403 !== o && 404 !== o;
                    e.callback(l, u, t)
                }
            }, s.onprogress = function() {}, this._support.timeout ? (s.timeout = this.requestTimeoutInMs * (e.successiveRetryCount + 1), s.ontimeout = r) : n = setTimeout(r, this.requestTimeoutInMs * (e.successiveRetryCount + 1)), s.onerror = function(t) {
                i || (a._support.timeout || clearTimeout(n), e.callback(!0, !1, {
                    message: "Could not connect to host",
                    error: t
                }))
            }, s.send(o)
        },
        _getSearchParams: function(t, e) {
            if (this._isUndefined(t) || null === t) return e;
            for (var n in t) null !== n && t.hasOwnProperty(n) && (e += 0 === e.length ? "?" : "&", e += n + "=" + encodeURIComponent("[object Array]" === Object.prototype.toString.call(t[n]) ? JSON.stringify(t[n]) : t[n]));
            return e
        },
        _isUndefined: function(t) {
            return void 0 === t
        },
        _support: {
            hasXMLHttpRequest: "XMLHttpRequest" in window,
            hasXDomainRequest: "XDomainRequest" in window,
            cors: "withCredentials" in new XMLHttpRequest,
            timeout: "timeout" in new XMLHttpRequest
        }
    }, AlgoliaSearch.prototype.Index.prototype = {
        clearCache: function() {
            this.cache = {}
        },
        addObject: function(t, e, n) {
            var i = this;
            return this.as._isUndefined(n) ? this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(i.indexName),
                body: t,
                callback: e
            }) : this.as._jsonRequest({
                method: "PUT",
                url: "/1/indexes/" + encodeURIComponent(i.indexName) + "/" + encodeURIComponent(n),
                body: t,
                callback: e
            })
        },
        addObjects: function(t, e) {
            for (var n = this, i = {
                    requests: []
                }, r = 0; r < t.length; ++r) {
                var o = {
                    action: "addObject",
                    body: t[r]
                };
                i.requests.push(o)
            }
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/batch",
                body: i,
                callback: e
            })
        },
        getObject: function(t, e, n) {
            "[object Array]" !== Object.prototype.toString.call(e) || n || (n = e, e = null);
            var i = this,
                r = "";
            if (!this.as._isUndefined(n)) {
                r = "?attributes=";
                for (var o = 0; o < n.length; ++o) 0 !== o && (r += ","), r += n[o]
            }
            return this.as._jsonRequest({
                method: "GET",
                url: "/1/indexes/" + encodeURIComponent(i.indexName) + "/" + encodeURIComponent(t) + r,
                callback: e
            })
        },
        partialUpdateObject: function(t, e) {
            var n = this;
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/" + encodeURIComponent(t.objectID) + "/partial",
                body: t,
                callback: e
            })
        },
        partialUpdateObjects: function(t, e) {
            for (var n = this, i = {
                    requests: []
                }, r = 0; r < t.length; ++r) {
                var o = {
                    action: "partialUpdateObject",
                    objectID: t[r].objectID,
                    body: t[r]
                };
                i.requests.push(o)
            }
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/batch",
                body: i,
                callback: e
            })
        },
        saveObject: function(t, e) {
            var n = this;
            return this.as._jsonRequest({
                method: "PUT",
                url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/" + encodeURIComponent(t.objectID),
                body: t,
                callback: e
            })
        },
        saveObjects: function(t, e) {
            for (var n = this, i = {
                    requests: []
                }, r = 0; r < t.length; ++r) {
                var o = {
                    action: "updateObject",
                    objectID: t[r].objectID,
                    body: t[r]
                };
                i.requests.push(o)
            }
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/batch",
                body: i,
                callback: e
            })
        },
        deleteObject: function(t, e) {
            if (null === t || 0 === t.length) return void e(!1, {
                message: "empty objectID"
            });
            var n = this;
            return this.as._jsonRequest({
                method: "DELETE",
                url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/" + encodeURIComponent(t),
                callback: e
            })
        },
        search: function(t, e, n, i) {
            (void 0 === t || null === t) && (t = ""), "function" == typeof t && (e = t, t = ""), "object" != typeof e || !this.as._isUndefined(n) && n || (n = e, e = null);
            var r = this,
                o = "query=" + encodeURIComponent(t);
            if (this.as._isUndefined(n) || null === n || (o = this.as._getSearchParams(n, o)), window.clearTimeout(r.onDelayTrigger), this.as._isUndefined(i) || null === i || !(i > 0)) return this._search(o, e);
            var s = window.setTimeout(function() {
                r._search(o, e)
            }, i);
            r.onDelayTrigger = s
        },
        browse: function(t, e, n) {
            +e > 0 && (this.as._isUndefined(n) || !n) && (n = e, e = null);
            var i = this,
                r = "?page=" + t;
            return this.as._isUndefined(n) || (r += "&hitsPerPage=" + n), this.as._jsonRequest({
                method: "GET",
                url: "/1/indexes/" + encodeURIComponent(i.indexName) + "/browse" + r,
                callback: e
            })
        },
        ttAdapter: function(t) {
            var e = this;
            return function(n, i) {
                e.search(n, function(t, e) {
                    i(t ? e.hits : e && e.message)
                }, t)
            }
        },
        waitTask: function(t, e) {
            var n = this;
            return this.as._jsonRequest({
                method: "GET",
                url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/task/" + t,
                callback: function(i, r) {
                    i ? "published" === r.status ? e(!0, r) : setTimeout(function() {
                        n.waitTask(t, e)
                    }, 100) : e(!1, r)
                }
            })
        },
        clearIndex: function(t) {
            var e = this;
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(e.indexName) + "/clear",
                callback: t
            })
        },
        getSettings: function(t) {
            var e = this;
            return this.as._jsonRequest({
                method: "GET",
                url: "/1/indexes/" + encodeURIComponent(e.indexName) + "/settings",
                callback: t
            })
        },
        setSettings: function(t, e) {
            var n = this;
            return this.as._jsonRequest({
                method: "PUT",
                url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/settings",
                body: t,
                callback: e
            })
        },
        listUserKeys: function(t) {
            var e = this;
            return this.as._jsonRequest({
                method: "GET",
                url: "/1/indexes/" + encodeURIComponent(e.indexName) + "/keys",
                callback: t
            })
        },
        getUserKeyACL: function(t, e) {
            var n = this;
            return this.as._jsonRequest({
                method: "GET",
                url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/keys/" + t,
                callback: e
            })
        },
        deleteUserKey: function(t, e) {
            var n = this;
            return this.as._jsonRequest({
                method: "DELETE",
                url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/keys/" + t,
                callback: e
            })
        },
        addUserKey: function(t, e) {
            var n = this,
                i = {};
            return i.acl = t, this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(n.indexName) + "/keys",
                body: i,
                callback: e
            })
        },
        addUserKeyWithValidity: function(t, e, n, i, r) {
            var o = this,
                s = {};
            return s.acl = t, s.validity = e, s.maxQueriesPerIPPerHour = n, s.maxHitsPerQuery = i, this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(o.indexName) + "/keys",
                body: s,
                callback: r
            })
        },
        _search: function(t, e) {
            var n = {
                params: t
            };
            if (null === this.as.jsonp) {
                var i = this;
                return this.as._jsonRequest({
                    cache: this.cache,
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
                    body: n,
                    callback: function(n, r) {
                        var o = r && r.status;
                        n || o && 4 === Math.floor(o / 100) || 1 === Math.floor(o / 100) ? (i.as.jsonp = !1, e && e(n, r)) : (i.as.jsonp = !0, i._search(t, e))
                    }
                })
            }
            return this.as.jsonp ? this.as._jsonRequest({
                cache: this.cache,
                method: "GET",
                url: "/1/indexes/" + encodeURIComponent(this.indexName),
                body: n,
                callback: e
            }) : this.as._jsonRequest({
                cache: this.cache,
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
                body: n,
                callback: e
            })
        },
        as: null,
        indexName: null,
        typeAheadArgs: null,
        typeAheadValueOption: null
    },
    function(t) {
        var e = function(t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var n in arguments[e]) arguments[e].hasOwnProperty(n) && (t[n] = arguments[e][n]);
            return t
        };
        window.AlgoliaSearchHelper = function(t, n, i) {
            var r = {
                facets: [],
                disjunctiveFacets: [],
                hitsPerPage: 20,
                defaultFacetFilters: []
            };
            this.init(t, n, e({}, r, i))
        }, AlgoliaSearchHelper.prototype = {
            init: function(t, e, n) {
                this.client = t, this.index = e, this.options = n, this.page = 0, this.refinements = {}, this.excludes = {}, this.disjunctiveRefinements = {}, this.extraQueries = []
            },
            search: function(t, e, n) {
                this.q = t, this.searchCallback = e, this.searchParams = n || {}, this.page = this.page || 0, this.refinements = this.refinements || {}, this.disjunctiveRefinements = this.disjunctiveRefinements || {}, this._search()
            },
            clearRefinements: function() {
                this.disjunctiveRefinements = {}, this.refinements = {}
            },
            addDisjunctiveRefine: function(t, e) {
                this.disjunctiveRefinements = this.disjunctiveRefinements || {}, this.disjunctiveRefinements[t] = this.disjunctiveRefinements[t] || {}, this.disjunctiveRefinements[t][e] = !0
            },
            removeDisjunctiveRefine: function(t, e) {
                this.disjunctiveRefinements = this.disjunctiveRefinements || {}, this.disjunctiveRefinements[t] = this.disjunctiveRefinements[t] || {};
                try {
                    delete this.disjunctiveRefinements[t][e]
                } catch (n) {
                    this.disjunctiveRefinements[t][e] = void 0
                }
            },
            addRefine: function(t, e) {
                var n = t + ":" + e;
                this.refinements = this.refinements || {}, this.refinements[n] = !0
            },
            removeRefine: function(t, e) {
                var n = t + ":" + e;
                this.refinements = this.refinements || {}, this.refinements[n] = !1
            },
            addExclude: function(t, e) {
                var n = t + ":-" + e;
                this.excludes = this.excludes || {}, this.excludes[n] = !0
            },
            removeExclude: function(t, e) {
                var n = t + ":-" + e;
                this.excludes = this.excludes || {}, this.excludes[n] = !1
            },
            toggleExclude: function(t, e) {
                for (var n = 0; n < this.options.facets.length; ++n)
                    if (this.options.facets[n] == t) {
                        var i = t + ":-" + e;
                        return this.excludes[i] = !this.excludes[i], this.page = 0, this._search(), !0
                    }
                return !1
            },
            toggleRefine: function(t, e) {
                for (var n = 0; n < this.options.facets.length; ++n)
                    if (this.options.facets[n] == t) {
                        var i = t + ":" + e;
                        return this.refinements[i] = !this.refinements[i], this.page = 0, this._search(), !0
                    }
                this.disjunctiveRefinements[t] = this.disjunctiveRefinements[t] || {};
                for (var r = 0; r < this.options.disjunctiveFacets.length; ++r)
                    if (this.options.disjunctiveFacets[r] == t) return this.disjunctiveRefinements[t][e] = !this.disjunctiveRefinements[t][e], this.page = 0, this._search(), !0;
                return !1
            },
            isRefined: function(t, e) {
                var n = t + ":" + e;
                return this.refinements[n] ? !0 : this.disjunctiveRefinements[t] && this.disjunctiveRefinements[t][e] ? !0 : !1
            },
            isExcluded: function(t, e) {
                var n = t + ":-" + e;
                return this.excludes[n] ? !0 : !1
            },
            nextPage: function() {
                this._gotoPage(this.page + 1)
            },
            previousPage: function() {
                this.page > 0 && this._gotoPage(this.page - 1)
            },
            gotoPage: function(t) {
                this._gotoPage(t)
            },
            setPage: function(t) {
                this.page = t
            },
            setIndex: function(t) {
                this.index = t
            },
            getIndex: function() {
                return this.index
            },
            clearExtraQueries: function() {
                this.extraQueries = []
            },
            addExtraQuery: function(t, e, n) {
                this.extraQueries.push({
                    index: t,
                    query: e,
                    params: n || {}
                })
            },
            _gotoPage: function(t) {
                this.page = t, this._search()
            },
            _search: function() {
                this.client.startQueriesBatch(), this.client.addQueryInBatch(this.index, this.q, this._getHitsSearchParams());
                var t = [],
                    e = {},
                    n = 0;
                for (n = 0; n < this.options.disjunctiveFacets.length; ++n) {
                    var i = this.options.disjunctiveFacets[n];
                    this._hasDisjunctiveRefinements(i) ? t.push(i) : e[i] = !0
                }
                for (n = 0; n < t.length; ++n) this.client.addQueryInBatch(this.index, this.q, this._getDisjunctiveFacetSearchParams(t[n]));
                for (n = 0; n < this.extraQueries.length; ++n) this.client.addQueryInBatch(this.extraQueries[n].index, this.extraQueries[n].query, this.extraQueries[n].params);
                var r = this;
                this.client.sendQueriesBatch(function(i, o) {
                    if (!i) return void r.searchCallback(!1, o);
                    var s = o.results[0];
                    s.disjunctiveFacets = s.disjunctiveFacets || {}, s.facets_stats = s.facets_stats || {};
                    for (var a in e)
                        if (s.facets[a] && !s.disjunctiveFacets[a]) {
                            s.disjunctiveFacets[a] = s.facets[a];
                            try {
                                delete s.facets[a]
                            } catch (u) {
                                s.facets[a] = void 0
                            }
                        }
                    for (n = 0; n < t.length; ++n) {
                        for (var l in o.results[n + 1].facets)
                            if (s.disjunctiveFacets[l] = o.results[n + 1].facets[l], r.disjunctiveRefinements[l])
                                for (var c in r.disjunctiveRefinements[l]) !s.disjunctiveFacets[l][c] && r.disjunctiveRefinements[l][c] && (s.disjunctiveFacets[l][c] = 0);
                        for (var f in o.results[n + 1].facets_stats) s.facets_stats[f] = o.results[n + 1].facets_stats[f]
                    }
                    s.facetStats = s.facets_stats;
                    for (var h in r.excludes)
                        if (r.excludes[h]) {
                            var u = h.indexOf(":-"),
                                a = h.slice(0, u),
                                c = h.slice(u + 2);
                            s.facets[a] = s.facets[a] || {}, s.facets[a][c] || (s.facets[a][c] = 0)
                        }
                    if (0 === r.extraQueries.length) r.searchCallback(!0, s);
                    else {
                        var d = {
                            results: [s]
                        };
                        for (n = 0; n < r.extraQueries.length; ++n) d.results.push(o.results[1 + t.length + n]);
                        r.searchCallback(!0, d)
                    }
                })
            },
            _getHitsSearchParams: function() {
                var t = [],
                    n = 0;
                for (n = 0; n < this.options.facets.length; ++n) t.push(this.options.facets[n]);
                for (n = 0; n < this.options.disjunctiveFacets.length; ++n) {
                    var i = this.options.disjunctiveFacets[n];
                    this._hasDisjunctiveRefinements(i) || t.push(i)
                }
                return e({}, {
                    hitsPerPage: this.options.hitsPerPage,
                    page: this.page,
                    facets: t,
                    facetFilters: this._getFacetFilters()
                }, this.searchParams)
            },
            _getDisjunctiveFacetSearchParams: function(t) {
                return e({}, this.searchParams, {
                    hitsPerPage: 1,
                    page: 0,
                    attributesToRetrieve: [],
                    attributesToHighlight: [],
                    attributesToSnippet: [],
                    facets: t,
                    facetFilters: this._getFacetFilters(t),
                    analytics: !1
                })
            },
            _hasDisjunctiveRefinements: function(t) {
                for (var e in this.disjunctiveRefinements[t])
                    if (this.disjunctiveRefinements[t][e]) return !0;
                return !1
            },
            _getFacetFilters: function(t) {
                var e = [];
                if (this.options.defaultFacetFilters)
                    for (var n = 0; n < this.options.defaultFacetFilters.length; ++n) e.push(this.options.defaultFacetFilters[n]);
                for (var i in this.refinements) this.refinements[i] && e.push(i);
                for (var i in this.excludes) this.excludes[i] && e.push(i);
                for (var r in this.disjunctiveRefinements)
                    if (r != t) {
                        var o = [];
                        for (var s in this.disjunctiveRefinements[r]) this.disjunctiveRefinements[r][s] && o.push(r + ":" + s);
                        o.length > 0 && e.push(o)
                    }
                return e
            }
        }
    }(),
    function(t) {
        window.AlgoliaPlaces = function(t, e) {
            this.init(t, e)
        }, AlgoliaPlaces.prototype = {
            init: function(t, e) {
                this.client = new AlgoliaSearch(t, e, "http", !0, ["places-1.algolia.io", "places-2.algolia.io", "places-3.algolia.io"]), this.cache = {}
            },
            search: function(t, e, n) {
                var i = "query=" + encodeURIComponent(t);
                this.client._isUndefined(n) || null == n || (i = this.client._getSearchParams(n, i));
                var r = {
                    params: i,
                    apiKey: this.client.apiKey,
                    appID: this.client.applicationID
                };
                this.client._jsonRequest({
                    cache: this.cache,
                    method: "POST",
                    url: "/1/places/query",
                    body: r,
                    callback: e,
                    removeCustomHTTPHeaders: !0
                })
            }
        }
    }(), "object" != typeof JSON && (JSON = {}),
    function() {
        "use strict";

        function f(t) {
            return 10 > t ? "0" + t : t
        }

        function quote(t) {
            return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                var e = meta[t];
                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + t + '"'
        }

        function str(t, e) {
            var n, i, r, o, s, a = gap,
                u = e[t];
            switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(t)), "function" == typeof rep && (u = rep.call(e, t, u)), typeof u) {
                case "string":
                    return quote(u);
                case "number":
                    return isFinite(u) ? String(u) : "null";
                case "boolean":
                case "null":
                    return String(u);
                case "object":
                    if (!u) return "null";
                    if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(u)) {
                        for (o = u.length, n = 0; o > n; n += 1) s[n] = str(n, u) || "null";
                        return r = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, r
                    }
                    if (rep && "object" == typeof rep)
                        for (o = rep.length, n = 0; o > n; n += 1) "string" == typeof rep[n] && (i = rep[n], r = str(i, u), r && s.push(quote(i) + (gap ? ": " : ":") + r));
                    else
                        for (i in u) Object.prototype.hasOwnProperty.call(u, i) && (r = str(i, u), r && s.push(quote(i) + (gap ? ": " : ":") + r));
                    return r = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, r
            }
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        });
        var cx, escapable, gap, indent, meta, rep;
        "function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, JSON.stringify = function(t, e, n) {
            var i;
            if (gap = "", indent = "", "number" == typeof n)
                for (i = 0; n > i; i += 1) indent += " ";
            else "string" == typeof n && (indent = n);
            if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
            return str("", {
                "": t
            })
        }), "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function(text, reviver) {
            function walk(t, e) {
                var n, i, r = t[e];
                if (r && "object" == typeof r)
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (i = walk(r, n), void 0 !== i ? r[n] = i : delete r[n]);
                return reviver.call(t, e, r)
            }
            var j;
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                    return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), ! function(t) {
        var e = function() {
                "use strict";
                return {
                    isMsie: function() {
                        return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
                    },
                    isBlankString: function(t) {
                        return !t || /^\s*$/.test(t)
                    },
                    escapeRegExChars: function(t) {
                        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    },
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isNumber: function(t) {
                        return "number" == typeof t
                    },
                    isArray: t.isArray,
                    isFunction: t.isFunction,
                    isObject: t.isPlainObject,
                    isUndefined: function(t) {
                        return "undefined" == typeof t
                    },
                    toStr: function(t) {
                        return e.isUndefined(t) || null === t ? "" : t + ""
                    },
                    bind: t.proxy,
                    each: function(e, n) {
                        function i(t, e) {
                            return n(e, t)
                        }
                        t.each(e, i)
                    },
                    map: t.map,
                    filter: t.grep,
                    every: function(e, n) {
                        var i = !0;
                        return e ? (t.each(e, function(t, r) {
                            return (i = n.call(null, r, t, e)) ? void 0 : !1
                        }), !!i) : i
                    },
                    some: function(e, n) {
                        var i = !1;
                        return e ? (t.each(e, function(t, r) {
                            return (i = n.call(null, r, t, e)) ? !1 : void 0
                        }), !!i) : i
                    },
                    mixin: t.extend,
                    getUniqueId: function() {
                        var t = 0;
                        return function() {
                            return t++
                        }
                    }(),
                    templatify: function(e) {
                        function n() {
                            return String(e)
                        }
                        return t.isFunction(e) ? e : n
                    },
                    defer: function(t) {
                        setTimeout(t, 0)
                    },
                    debounce: function(t, e, n) {
                        var i, r;
                        return function() {
                            var o, s, a = this,
                                u = arguments;
                            return o = function() {
                                i = null, n || (r = t.apply(a, u))
                            }, s = n && !i, clearTimeout(i), i = setTimeout(o, e), s && (r = t.apply(a, u)), r
                        }
                    },
                    throttle: function(t, e) {
                        var n, i, r, o, s, a;
                        return s = 0, a = function() {
                                s = new Date, r = null, o = t.apply(n, i)
                            },
                            function() {
                                var u = new Date,
                                    l = e - (u - s);
                                return n = this, i = arguments, 0 >= l ? (clearTimeout(r), r = null, s = u, o = t.apply(n, i)) : r || (r = setTimeout(a, l)), o
                            }
                    },
                    noop: function() {}
                }
            }(),
            n = "0.10.4",
            i = function() {
                "use strict";

                function t(t) {
                    return t = e.toStr(t), t ? t.split(/\s+/) : []
                }

                function n(t) {
                    return t = e.toStr(t), t ? t.split(/\W+/) : []
                }

                function i(t) {
                    return function() {
                        var n = [].slice.call(arguments, 0);
                        return function(i) {
                            var r = [];
                            return e.each(n, function(n) {
                                r = r.concat(t(e.toStr(i[n])))
                            }), r
                        }
                    }
                }
                return {
                    nonword: n,
                    whitespace: t,
                    obj: {
                        nonword: i(n),
                        whitespace: i(t)
                    }
                }
            }(),
            r = function() {
                "use strict";

                function n(n) {
                    this.maxSize = e.isNumber(n) ? n : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = t.noop)
                }

                function i() {
                    this.head = this.tail = null
                }

                function r(t, e) {
                    this.key = t, this.val = e, this.prev = this.next = null
                }
                return e.mixin(n.prototype, {
                    set: function(t, e) {
                        var n, i = this.list.tail;
                        this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key]), (n = this.hash[t]) ? (n.val = e, this.list.moveToFront(n)) : (n = new r(t, e), this.list.add(n), this.hash[t] = n, this.size++)
                    },
                    get: function(t) {
                        var e = this.hash[t];
                        return e ? (this.list.moveToFront(e), e.val) : void 0
                    },
                    reset: function() {
                        this.size = 0, this.hash = {}, this.list = new i
                    }
                }), e.mixin(i.prototype, {
                    add: function(t) {
                        this.head && (t.next = this.head, this.head.prev = t), this.head = t, this.tail = this.tail || t
                    },
                    remove: function(t) {
                        t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev
                    },
                    moveToFront: function(t) {
                        this.remove(t), this.add(t)
                    }
                }), n
            }(),
            o = function() {
                "use strict";

                function t(t) {
                    this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + e.escapeRegExChars(this.prefix))
                }

                function n() {
                    return (new Date).getTime()
                }

                function i(t) {
                    return JSON.stringify(e.isUndefined(t) ? null : t)
                }

                function r(t) {
                    return JSON.parse(t)
                }
                var o, s;
                try {
                    o = window.localStorage, o.setItem("~~~", "!"), o.removeItem("~~~")
                } catch (a) {
                    o = null
                }
                return s = o && window.JSON ? {
                    _prefix: function(t) {
                        return this.prefix + t
                    },
                    _ttlKey: function(t) {
                        return this._prefix(t) + this.ttlKey
                    },
                    get: function(t) {
                        return this.isExpired(t) && this.remove(t), r(o.getItem(this._prefix(t)))
                    },
                    set: function(t, r, s) {
                        return e.isNumber(s) ? o.setItem(this._ttlKey(t), i(n() + s)) : o.removeItem(this._ttlKey(t)), o.setItem(this._prefix(t), i(r))
                    },
                    remove: function(t) {
                        return o.removeItem(this._ttlKey(t)), o.removeItem(this._prefix(t)), this
                    },
                    clear: function() {
                        var t, e, n = [],
                            i = o.length;
                        for (t = 0; i > t; t++)(e = o.key(t)).match(this.keyMatcher) && n.push(e.replace(this.keyMatcher, ""));
                        for (t = n.length; t--;) this.remove(n[t]);
                        return this
                    },
                    isExpired: function(t) {
                        var i = r(o.getItem(this._ttlKey(t)));
                        return e.isNumber(i) && n() > i ? !0 : !1
                    }
                } : {
                    get: e.noop,
                    set: e.noop,
                    remove: e.noop,
                    clear: e.noop,
                    isExpired: e.noop
                }, e.mixin(t.prototype, s), t
            }(),
            s = function() {
                "use strict";

                function n(e) {
                    e = e || {}, this.cancelled = !1, this.lastUrl = null, this._send = e.transport ? i(e.transport) : t.ajax, this._get = e.rateLimiter ? e.rateLimiter(this._get) : this._get, this._cache = e.cache === !1 ? new r(0) : u
                }

                function i(n) {
                    return function(i, r) {
                        function o(t) {
                            e.defer(function() {
                                a.resolve(t)
                            })
                        }

                        function s(t) {
                            e.defer(function() {
                                a.reject(t)
                            })
                        }
                        var a = t.Deferred();
                        return n(i, r, o, s), a
                    }
                }
                var o = 0,
                    s = {},
                    a = 6,
                    u = new r(10);
                return n.setMaxPendingRequests = function(t) {
                    a = t
                }, n.resetCache = function() {
                    u.reset()
                }, e.mixin(n.prototype, {
                    _get: function(t, e, n) {
                        function i(e) {
                            n && n(null, e), c._cache.set(t, e)
                        }

                        function r() {
                            n && n(!0)
                        }

                        function u() {
                            o--, delete s[t], c.onDeckRequestArgs && (c._get.apply(c, c.onDeckRequestArgs), c.onDeckRequestArgs = null)
                        }
                        var l, c = this;
                        this.cancelled || t !== this.lastUrl || ((l = s[t]) ? l.done(i).fail(r) : a > o ? (o++, s[t] = this._send(t, e).done(i).fail(r).always(u)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                    },
                    get: function(t, n, i) {
                        var r;
                        return e.isFunction(n) && (i = n, n = {}), this.cancelled = !1, this.lastUrl = t, (r = this._cache.get(t)) ? e.defer(function() {
                            i && i(null, r)
                        }) : this._get(t, n, i), !!r
                    },
                    cancel: function() {
                        this.cancelled = !0
                    }
                }), n
            }(),
            a = function() {
                "use strict";

                function n(e) {
                    e = e || {}, e.datumTokenizer && e.queryTokenizer || t.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = e.datumTokenizer, this.queryTokenizer = e.queryTokenizer, this.reset()
                }

                function i(t) {
                    return t = e.filter(t, function(t) {
                        return !!t
                    }), t = e.map(t, function(t) {
                        return t.toLowerCase()
                    })
                }

                function r() {
                    return {
                        ids: [],
                        children: {}
                    }
                }

                function o(t) {
                    for (var e = {}, n = [], i = 0, r = t.length; r > i; i++) e[t[i]] || (e[t[i]] = !0, n.push(t[i]));
                    return n
                }

                function s(t, e) {
                    function n(t, e) {
                        return t - e
                    }
                    var i = 0,
                        r = 0,
                        o = [];
                    t = t.sort(n), e = e.sort(n);
                    for (var s = t.length, a = e.length; s > i && a > r;) t[i] < e[r] ? i++ : t[i] > e[r] ? r++ : (o.push(t[i]), i++, r++);
                    return o
                }
                return e.mixin(n.prototype, {
                    bootstrap: function(t) {
                        this.datums = t.datums, this.trie = t.trie
                    },
                    add: function(t) {
                        var n = this;
                        t = e.isArray(t) ? t : [t], e.each(t, function(t) {
                            var o, s;
                            o = n.datums.push(t) - 1, s = i(n.datumTokenizer(t)), e.each(s, function(t) {
                                var e, i, s;
                                for (e = n.trie, i = t.split(""); s = i.shift();) e = e.children[s] || (e.children[s] = r()), e.ids.push(o)
                            })
                        })
                    },
                    get: function(t) {
                        var n, r, a = this;
                        return n = i(this.queryTokenizer(t)), e.each(n, function(t) {
                            var e, n, i, o;
                            if (r && 0 === r.length) return !1;
                            for (e = a.trie, n = t.split(""); e && (i = n.shift());) e = e.children[i];
                            return e && 0 === n.length ? (o = e.ids.slice(0), void(r = r ? s(r, o) : o)) : (r = [], !1)
                        }), r ? e.map(o(r), function(t) {
                            return a.datums[t]
                        }) : []
                    },
                    reset: function() {
                        this.datums = [], this.trie = r()
                    },
                    serialize: function() {
                        return {
                            datums: this.datums,
                            trie: this.trie
                        }
                    }
                }), n
            }(),
            u = function() {
                "use strict";

                function i(t) {
                    return t.local || null
                }

                function r(i) {
                    var r, o;
                    return o = {
                        url: null,
                        thumbprint: "",
                        ttl: 864e5,
                        filter: null,
                        ajax: {}
                    }, (r = i.prefetch || null) && (r = e.isString(r) ? {
                        url: r
                    } : r, r = e.mixin(o, r), r.thumbprint = n + r.thumbprint, r.ajax.type = r.ajax.type || "GET", r.ajax.dataType = r.ajax.dataType || "json", !r.url && t.error("prefetch requires url to be set")), r
                }

                function o(n) {
                    function i(t) {
                        return function(n) {
                            return e.debounce(n, t)
                        }
                    }

                    function r(t) {
                        return function(n) {
                            return e.throttle(n, t)
                        }
                    }
                    var o, s;
                    return s = {
                        url: null,
                        cache: !0,
                        wildcard: "%QUERY",
                        replace: null,
                        rateLimitBy: "debounce",
                        rateLimitWait: 300,
                        send: null,
                        filter: null,
                        ajax: {}
                    }, (o = n.remote || null) && (o = e.isString(o) ? {
                        url: o
                    } : o, o = e.mixin(s, o), o.rateLimiter = /^throttle$/i.test(o.rateLimitBy) ? r(o.rateLimitWait) : i(o.rateLimitWait), o.ajax.type = o.ajax.type || "GET", o.ajax.dataType = o.ajax.dataType || "json", delete o.rateLimitBy, delete o.rateLimitWait, !o.url && t.error("remote requires url to be set")), o
                }
                return {
                    local: i,
                    prefetch: r,
                    remote: o
                }
            }();
        ! function(n) {
            "use strict";

            function r(e) {
                e && (e.local || e.prefetch || e.remote) || t.error("one of local, prefetch, or remote is required"), this.limit = e.limit || 5, this.sorter = l(e.sorter), this.dupDetector = e.dupDetector || c, this.local = u.local(e), this.prefetch = u.prefetch(e), this.remote = u.remote(e), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new a({
                    datumTokenizer: e.datumTokenizer,
                    queryTokenizer: e.queryTokenizer
                }), this.storage = this.cacheKey ? new o(this.cacheKey) : null
            }

            function l(t) {
                function n(e) {
                    return e.sort(t)
                }

                function i(t) {
                    return t
                }
                return e.isFunction(t) ? n : i
            }

            function c() {
                return !1
            }
            var f, h;
            return f = n.Bloodhound, h = {
                data: "data",
                protocol: "protocol",
                thumbprint: "thumbprint"
            }, n.Bloodhound = r, r.noConflict = function() {
                return n.Bloodhound = f, r
            }, r.tokenizers = i, e.mixin(r.prototype, {
                _loadPrefetch: function(e) {
                    function n(t) {
                        o.clear(), o.add(e.filter ? e.filter(t) : t), o._saveToStorage(o.index.serialize(), e.thumbprint, e.ttl)
                    }
                    var i, r, o = this;
                    return (i = this._readFromStorage(e.thumbprint)) ? (this.index.bootstrap(i), r = t.Deferred().resolve()) : r = t.ajax(e.url, e.ajax).done(n), r
                },
                _getFromRemote: function(t, e) {
                    function n(t, n) {
                        e(t ? [] : o.remote.filter ? o.remote.filter(n) : n)
                    }
                    var i, r, o = this;
                    return this.transport ? (t = t || "", r = encodeURIComponent(t), i = this.remote.replace ? this.remote.replace(this.remote.url, t) : this.remote.url.replace(this.remote.wildcard, r), this.transport.get(i, this.remote.ajax, n)) : void 0
                },
                _cancelLastRemoteRequest: function() {
                    this.transport && this.transport.cancel()
                },
                _saveToStorage: function(t, e, n) {
                    this.storage && (this.storage.set(h.data, t, n), this.storage.set(h.protocol, location.protocol, n), this.storage.set(h.thumbprint, e, n))
                },
                _readFromStorage: function(t) {
                    var e, n = {};
                    return this.storage && (n.data = this.storage.get(h.data), n.protocol = this.storage.get(h.protocol), n.thumbprint = this.storage.get(h.thumbprint)), e = n.thumbprint !== t || n.protocol !== location.protocol, n.data && !e ? n.data : null
                },
                _initialize: function() {
                    function n() {
                        r.add(e.isFunction(o) ? o() : o)
                    }
                    var i, r = this,
                        o = this.local;
                    return i = this.prefetch ? this._loadPrefetch(this.prefetch) : t.Deferred().resolve(), o && i.done(n), this.transport = this.remote ? new s(this.remote) : null, this.initPromise = i.promise()
                },
                initialize: function(t) {
                    return !this.initPromise || t ? this._initialize() : this.initPromise
                },
                add: function(t) {
                    this.index.add(t)
                },
                get: function(t, n) {
                    function i(t) {
                        var i = o.slice(0);
                        e.each(t, function(t) {
                            var n;
                            return n = e.some(i, function(e) {
                                return r.dupDetector(t, e)
                            }), !n && i.push(t), i.length < r.limit
                        }), n && n(r.sorter(i))
                    }
                    var r = this,
                        o = [],
                        s = !1;
                    o = this.index.get(t), o = this.sorter(o).slice(0, this.limit), o.length < this.limit ? s = this._getFromRemote(t, i) : this._cancelLastRemoteRequest(), s || (o.length > 0 || !this.transport) && n && n(o)
                },
                clear: function() {
                    this.index.reset()
                },
                clearPrefetchCache: function() {
                    this.storage && this.storage.clear()
                },
                clearRemoteCache: function() {
                    this.transport && s.resetCache()
                },
                ttAdapter: function() {
                    return e.bind(this.get, this)
                }
            }), r
        }(this);
        var l = function() {
                return {
                    wrapper: '<span class="twitter-typeahead"></span>',
                    dropdown: '<span class="tt-dropdown-menu"></span>',
                    dataset: '<div class="tt-dataset-%CLASS%"></div>',
                    suggestions: '<span class="tt-suggestions"></span>',
                    suggestion: '<div class="tt-suggestion"></div>'
                }
            }(),
            c = function() {
                "use strict";
                var t = {
                    wrapper: {
                        position: "relative",
                        display: "inline-block"
                    },
                    hint: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        borderColor: "transparent",
                        boxShadow: "none",
                        opacity: "1"
                    },
                    input: {
                        position: "relative",
                        verticalAlign: "top",
                        backgroundColor: "transparent"
                    },
                    inputWithNoHint: {
                        position: "relative",
                        verticalAlign: "top"
                    },
                    dropdown: {
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: "100",
                        display: "none"
                    },
                    suggestions: {
                        display: "block"
                    },
                    suggestion: {
                        whiteSpace: "nowrap",
                        cursor: "pointer"
                    },
                    suggestionChild: {
                        whiteSpace: "normal"
                    },
                    ltr: {
                        left: "0",
                        right: "auto"
                    },
                    rtl: {
                        left: "auto",
                        right: " 0"
                    }
                };
                return e.isMsie() && e.mixin(t.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                }), e.isMsie() && e.isMsie() <= 7 && e.mixin(t.input, {
                    marginTop: "-1px"
                }), t
            }(),
            f = function() {
                "use strict";

                function n(e) {
                    e && e.el || t.error("EventBus initialized without el"), this.$el = t(e.el)
                }
                var i = "typeahead:";
                return e.mixin(n.prototype, {
                    trigger: function(t) {
                        var e = [].slice.call(arguments, 1);
                        this.$el.trigger(i + t, e)
                    }
                }), n
            }(),
            h = function() {
                "use strict";

                function t(t, e, n, i) {
                    var r;
                    if (!n) return this;
                    for (e = e.split(u), n = i ? a(n, i) : n, this._callbacks = this._callbacks || {}; r = e.shift();) this._callbacks[r] = this._callbacks[r] || {
                        sync: [],
                        async: []
                    }, this._callbacks[r][t].push(n);
                    return this
                }

                function e(e, n, i) {
                    return t.call(this, "async", e, n, i)
                }

                function n(e, n, i) {
                    return t.call(this, "sync", e, n, i)
                }

                function i(t) {
                    var e;
                    if (!this._callbacks) return this;
                    for (t = t.split(u); e = t.shift();) delete this._callbacks[e];
                    return this
                }

                function r(t) {
                    var e, n, i, r, s;
                    if (!this._callbacks) return this;
                    for (t = t.split(u), i = [].slice.call(arguments, 1);
                        (e = t.shift()) && (n = this._callbacks[e]);) r = o(n.sync, this, [e].concat(i)), s = o(n.async, this, [e].concat(i)), r() && l(s);
                    return this
                }

                function o(t, e, n) {
                    function i() {
                        for (var i, r = 0, o = t.length; !i && o > r; r += 1) i = t[r].apply(e, n) === !1;
                        return !i
                    }
                    return i
                }

                function s() {
                    var t;
                    return t = window.setImmediate ? function(t) {
                        setImmediate(function() {
                            t()
                        })
                    } : function(t) {
                        setTimeout(function() {
                            t()
                        }, 0)
                    }
                }

                function a(t, e) {
                    return t.bind ? t.bind(e) : function() {
                        t.apply(e, [].slice.call(arguments, 0))
                    }
                }
                var u = /\s+/,
                    l = s();
                return {
                    onSync: n,
                    onAsync: e,
                    off: i,
                    trigger: r
                }
            }(),
            d = function(t) {
                "use strict";

                function n(t, n, i) {
                    for (var r, o = [], s = 0, a = t.length; a > s; s++) o.push(e.escapeRegExChars(t[s]));
                    return r = i ? "\\b(" + o.join("|") + ")\\b" : "(" + o.join("|") + ")", n ? new RegExp(r) : new RegExp(r, "i")
                }
                var i = {
                    node: null,
                    pattern: null,
                    tagName: "strong",
                    className: null,
                    wordsOnly: !1,
                    caseSensitive: !1
                };
                return function(r) {
                    function o(e) {
                        var n, i, o;
                        return (n = a.exec(e.data)) && (o = t.createElement(r.tagName), r.className && (o.className = r.className), i = e.splitText(n.index), i.splitText(n[0].length), o.appendChild(i.cloneNode(!0)), e.parentNode.replaceChild(o, i)), !!n
                    }

                    function s(t, e) {
                        for (var n, i = 3, r = 0; r < t.childNodes.length; r++) n = t.childNodes[r], n.nodeType === i ? r += e(n) ? 1 : 0 : s(n, e)
                    }
                    var a;
                    r = e.mixin({}, i, r), r.node && r.pattern && (r.pattern = e.isArray(r.pattern) ? r.pattern : [r.pattern], a = n(r.pattern, r.caseSensitive, r.wordsOnly), s(r.node, o))
                }
            }(window.document),
            p = function() {
                "use strict";

                function n(n) {
                    var r, o, a, u, l = this;
                    n = n || {}, n.input || t.error("input is missing"), r = e.bind(this._onBlur, this), o = e.bind(this._onFocus, this), a = e.bind(this._onKeydown, this), u = e.bind(this._onInput, this), this.$hint = t(n.hint), this.$input = t(n.input).on("blur.tt", r).on("focus.tt", o).on("keydown.tt", a), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = e.noop), e.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(t) {
                        s[t.which || t.keyCode] || e.defer(e.bind(l._onInput, l, t))
                    }) : this.$input.on("input.tt", u), this.query = this.$input.val(), this.$overflowHelper = i(this.$input)
                }

                function i(e) {
                    return t('<pre aria-hidden="true"></pre>').css({
                        position: "absolute",
                        visibility: "hidden",
                        whiteSpace: "pre",
                        fontFamily: e.css("font-family"),
                        fontSize: e.css("font-size"),
                        fontStyle: e.css("font-style"),
                        fontVariant: e.css("font-variant"),
                        fontWeight: e.css("font-weight"),
                        wordSpacing: e.css("word-spacing"),
                        letterSpacing: e.css("letter-spacing"),
                        textIndent: e.css("text-indent"),
                        textRendering: e.css("text-rendering"),
                        textTransform: e.css("text-transform")
                    }).insertAfter(e)
                }

                function r(t, e) {
                    return n.normalizeQuery(t) === n.normalizeQuery(e)
                }

                function o(t) {
                    return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
                }
                var s;
                return s = {
                    9: "tab",
                    27: "esc",
                    37: "left",
                    39: "right",
                    13: "enter",
                    38: "up",
                    40: "down"
                }, n.normalizeQuery = function(t) {
                    return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
                }, e.mixin(n.prototype, h, {
                    _onBlur: function() {
                        this.resetInputValue(), this.trigger("blurred")
                    },
                    _onFocus: function() {
                        this.trigger("focused")
                    },
                    _onKeydown: function(t) {
                        var e = s[t.which || t.keyCode];
                        this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t)
                    },
                    _onInput: function() {
                        this._checkInputValue()
                    },
                    _managePreventDefault: function(t, e) {
                        var n, i, r;
                        switch (t) {
                            case "tab":
                                i = this.getHint(), r = this.getInputValue(), n = i && i !== r && !o(e);
                                break;
                            case "up":
                            case "down":
                                n = !o(e);
                                break;
                            default:
                                n = !1
                        }
                        n && e.preventDefault()
                    },
                    _shouldTrigger: function(t, e) {
                        var n;
                        switch (t) {
                            case "tab":
                                n = !o(e);
                                break;
                            default:
                                n = !0
                        }
                        return n
                    },
                    _checkInputValue: function() {
                        var t, e, n;
                        t = this.getInputValue(), e = r(t, this.query), n = e ? this.query.length !== t.length : !1, this.query = t, e ? n && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                    },
                    focus: function() {
                        this.$input.focus()
                    },
                    blur: function() {
                        this.$input.blur()
                    },
                    getQuery: function() {
                        return this.query
                    },
                    setQuery: function(t) {
                        this.query = t
                    },
                    getInputValue: function() {
                        return this.$input.val()
                    },
                    setInputValue: function(t, e) {
                        this.$input.val(t), e ? this.clearHint() : this._checkInputValue()
                    },
                    resetInputValue: function() {
                        this.setInputValue(this.query, !0)
                    },
                    getHint: function() {
                        return this.$hint.val()
                    },
                    setHint: function(t) {
                        this.$hint.val(t)
                    },
                    clearHint: function() {
                        this.setHint("")
                    },
                    clearHintIfInvalid: function() {
                        var t, e, n, i;
                        t = this.getInputValue(), e = this.getHint(), n = t !== e && 0 === e.indexOf(t), i = "" !== t && n && !this.hasOverflow(), !i && this.clearHint()
                    },
                    getLanguageDirection: function() {
                        return (this.$input.css("direction") || "ltr").toLowerCase()
                    },
                    hasOverflow: function() {
                        var t = this.$input.width() - 2;
                        return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t
                    },
                    isCursorAtEnd: function() {
                        var t, n, i;
                        return t = this.$input.val().length, n = this.$input[0].selectionStart, e.isNumber(n) ? n === t : document.selection ? (i = document.selection.createRange(), i.moveStart("character", -t), t === i.text.length) : !0
                    },
                    destroy: function() {
                        this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
                    }
                }), n
            }(),
            m = function() {
                "use strict";

                function n(n) {
                    n = n || {}, n.templates = n.templates || {}, n.source || t.error("missing source"), n.name && !o(n.name) && t.error("invalid dataset name: " + n.name), this.query = null, this.highlight = !!n.highlight, this.name = n.name || e.getUniqueId(), this.source = n.source, this.displayFn = i(n.display || n.displayKey), this.templates = r(n.templates, this.displayFn), this.$el = t(l.dataset.replace("%CLASS%", this.name))
                }

                function i(t) {
                    function n(e) {
                        return e[t]
                    }
                    return t = t || "value", e.isFunction(t) ? t : n
                }

                function r(t, n) {
                    function i(t) {
                        return "<p>" + n(t) + "</p>"
                    }
                    return {
                        empty: t.empty && e.templatify(t.empty),
                        header: t.header && e.templatify(t.header),
                        footer: t.footer && e.templatify(t.footer),
                        suggestion: t.suggestion || i
                    }
                }

                function o(t) {
                    return /^[_a-zA-Z0-9-]+$/.test(t)
                }
                var s = "ttDataset",
                    a = "ttValue",
                    u = "ttDatum";
                return n.extractDatasetName = function(e) {
                    return t(e).data(s)
                }, n.extractValue = function(e) {
                    return t(e).data(a)
                }, n.extractDatum = function(e) {
                    return t(e).data(u)
                }, e.mixin(n.prototype, h, {
                    _render: function(n, i) {
                        function r() {
                            return m.templates.empty({
                                query: n,
                                isEmpty: !0
                            })
                        }

                        function o() {
                            function r(e) {
                                var n;
                                return n = t(l.suggestion).append(m.templates.suggestion(e)).data(s, m.name).data(a, m.displayFn(e)).data(u, e), n.children().each(function() {
                                    t(this).css(c.suggestionChild)
                                }), n
                            }
                            var o, f;
                            return o = t(l.suggestions).css(c.suggestions), f = e.map(i, r), o.append.apply(o, f), m.highlight && d({
                                className: "tt-highlight",
                                node: o[0],
                                pattern: n
                            }), o
                        }

                        function f() {
                            return m.templates.header({
                                query: n,
                                isEmpty: !p
                            })
                        }

                        function h() {
                            return m.templates.footer({
                                query: n,
                                isEmpty: !p
                            })
                        }
                        if (this.$el) {
                            var p, m = this;
                            this.$el.empty(), p = i && i.length, !p && this.templates.empty ? this.$el.html(r()).prepend(m.templates.header ? f() : null).append(m.templates.footer ? h() : null) : p && this.$el.html(o()).prepend(m.templates.header ? f() : null).append(m.templates.footer ? h() : null), this.trigger("rendered")
                        }
                    },
                    getRoot: function() {
                        return this.$el
                    },
                    update: function(t) {
                        function e(e) {
                            n.canceled || t !== n.query || n._render(t, e)
                        }
                        var n = this;
                        this.query = t, this.canceled = !1, this.source(t, e)
                    },
                    cancel: function() {
                        this.canceled = !0
                    },
                    clear: function() {
                        this.cancel(), this.$el.empty(), this.trigger("rendered")
                    },
                    isEmpty: function() {
                        return this.$el.is(":empty")
                    },
                    destroy: function() {
                        this.$el = null
                    }
                }), n
            }(),
            g = function() {
                "use strict";

                function n(n) {
                    var r, o, s, a = this;
                    n = n || {}, n.menu || t.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = e.map(n.datasets, i), r = e.bind(this._onSuggestionClick, this), o = e.bind(this._onSuggestionMouseEnter, this), s = e.bind(this._onSuggestionMouseLeave, this), this.$menu = t(n.menu).on("click.tt", ".tt-suggestion", r).on("mouseenter.tt", ".tt-suggestion", o).on("mouseleave.tt", ".tt-suggestion", s), e.each(this.datasets, function(t) {
                        a.$menu.append(t.getRoot()), t.onSync("rendered", a._onRendered, a)
                    })
                }

                function i(t) {
                    return new m(t)
                }
                return e.mixin(n.prototype, h, {
                    _onSuggestionClick: function(e) {
                        this.trigger("suggestionClicked", t(e.currentTarget))
                    },
                    _onSuggestionMouseEnter: function(e) {
                        this._removeCursor(), this._setCursor(t(e.currentTarget), !0)
                    },
                    _onSuggestionMouseLeave: function() {
                        this._removeCursor()
                    },
                    _onRendered: function() {
                        function t(t) {
                            return t.isEmpty()
                        }
                        this.isEmpty = e.every(this.datasets, t), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
                    },
                    _hide: function() {
                        this.$menu.hide()
                    },
                    _show: function() {
                        this.$menu.css("display", "block")
                    },
                    _getSuggestions: function() {
                        return this.$menu.find(".tt-suggestion")
                    },
                    _getCursor: function() {
                        return this.$menu.find(".tt-cursor").first()
                    },
                    _setCursor: function(t, e) {
                        t.first().addClass("tt-cursor"), !e && this.trigger("cursorMoved")
                    },
                    _removeCursor: function() {
                        this._getCursor().removeClass("tt-cursor")
                    },
                    _moveCursor: function(t) {
                        var e, n, i, r;
                        if (this.isOpen) {
                            if (n = this._getCursor(), e = this._getSuggestions(), this._removeCursor(), i = e.index(n) + t, i = (i + 1) % (e.length + 1) - 1, -1 === i) return void this.trigger("cursorRemoved"); - 1 > i && (i = e.length - 1), this._setCursor(r = e.eq(i)), this._ensureVisible(r)
                        }
                    },
                    _ensureVisible: function(t) {
                        var e, n, i, r;
                        e = t.position().top, n = e + t.outerHeight(!0), i = this.$menu.scrollTop(), r = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), 0 > e ? this.$menu.scrollTop(i + e) : n > r && this.$menu.scrollTop(i + (n - r))
                    },
                    close: function() {
                        this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
                    },
                    open: function() {
                        this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
                    },
                    setLanguageDirection: function(t) {
                        this.$menu.css("ltr" === t ? c.ltr : c.rtl)
                    },
                    moveCursorUp: function() {
                        this._moveCursor(-1)
                    },
                    moveCursorDown: function() {
                        this._moveCursor(1)
                    },
                    getDatumForSuggestion: function(t) {
                        var e = null;
                        return t.length && (e = {
                            raw: m.extractDatum(t),
                            value: m.extractValue(t),
                            datasetName: m.extractDatasetName(t)
                        }), e
                    },
                    getDatumForCursor: function() {
                        return this.getDatumForSuggestion(this._getCursor().first())
                    },
                    getDatumForTopSuggestion: function() {
                        return this.getDatumForSuggestion(this._getSuggestions().first())
                    },
                    update: function(t) {
                        function n(e) {
                            e.update(t)
                        }
                        e.each(this.datasets, n)
                    },
                    empty: function() {
                        function t(t) {
                            t.clear()
                        }
                        e.each(this.datasets, t), this.isEmpty = !0
                    },
                    isVisible: function() {
                        return this.isOpen && !this.isEmpty
                    },
                    destroy: function() {
                        function t(t) {
                            t.destroy()
                        }
                        this.$menu.off(".tt"), this.$menu = null, e.each(this.datasets, t)
                    }
                }), n
            }(),
            v = function() {
                "use strict";

                function n(n) {
                    var r, o, s;
                    n = n || {}, n.input || t.error("missing input"), this.isActivated = !1, this.autoselect = !!n.autoselect, this.minLength = e.isNumber(n.minLength) ? n.minLength : 1, this.$node = i(n.input, n.withHint), r = this.$node.find(".tt-dropdown-menu"), o = this.$node.find(".tt-input"), s = this.$node.find(".tt-hint"), o.on("blur.tt", function(t) {
                        var n, i, s;
                        n = document.activeElement, i = r.is(n), s = r.has(n).length > 0, e.isMsie() && (i || s) && (t.preventDefault(), t.stopImmediatePropagation(), e.defer(function() {
                            o.focus()
                        }))
                    }), r.on("mousedown.tt", function(t) {
                        t.preventDefault()
                    }), this.eventBus = n.eventBus || new f({
                        el: o
                    }), this.dropdown = new g({
                        menu: r,
                        datasets: n.datasets
                    }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new p({
                        input: o,
                        hint: s
                    }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
                }

                function i(e, n) {
                    var i, o, a, u;
                    i = t(e), o = t(l.wrapper).css(c.wrapper), a = t(l.dropdown).css(c.dropdown), u = i.clone().css(c.hint).css(r(i)), u.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
                        autocomplete: "off",
                        spellcheck: "false",
                        tabindex: -1
                    }), i.data(s, {
                        dir: i.attr("dir"),
                        autocomplete: i.attr("autocomplete"),
                        spellcheck: i.attr("spellcheck"),
                        style: i.attr("style")
                    }), i.addClass("tt-input").attr({
                        autocomplete: "off",
                        spellcheck: !1
                    }).css(n ? c.input : c.inputWithNoHint);
                    try {
                        !i.attr("dir") && i.attr("dir", "auto")
                    } catch (f) {}
                    return i.wrap(o).parent().prepend(n ? u : null).append(a)
                }

                function r(t) {
                    return {
                        backgroundAttachment: t.css("background-attachment"),
                        backgroundClip: t.css("background-clip"),
                        backgroundColor: t.css("background-color"),
                        backgroundImage: t.css("background-image"),
                        backgroundOrigin: t.css("background-origin"),
                        backgroundPosition: t.css("background-position"),
                        backgroundRepeat: t.css("background-repeat"),
                        backgroundSize: t.css("background-size")
                    }
                }

                function o(t) {
                    var n = t.find(".tt-input");
                    e.each(n.data(s), function(t, i) {
                        e.isUndefined(t) ? n.removeAttr(i) : n.attr(i, t)
                    }), n.detach().removeData(s).removeClass("tt-input").insertAfter(t), t.remove()
                }
                var s = "ttAttrs";
                return e.mixin(n.prototype, {
                    _onSuggestionClicked: function(t, e) {
                        var n;
                        (n = this.dropdown.getDatumForSuggestion(e)) && this._select(n)
                    },
                    _onCursorMoved: function() {
                        var t = this.dropdown.getDatumForCursor();
                        this.input.setInputValue(t.value, !0), this.eventBus.trigger("cursorchanged", t.raw, t.datasetName)
                    },
                    _onCursorRemoved: function() {
                        this.input.resetInputValue(), this._updateHint()
                    },
                    _onDatasetRendered: function() {
                        this._updateHint()
                    },
                    _onOpened: function() {
                        this._updateHint(), this.eventBus.trigger("opened")
                    },
                    _onClosed: function() {
                        this.input.clearHint(), this.eventBus.trigger("closed")
                    },
                    _onFocused: function() {
                        this.isActivated = !0, this.dropdown.open()
                    },
                    _onBlurred: function() {
                        this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()
                    },
                    _onEnterKeyed: function(t, e) {
                        var n, i;
                        n = this.dropdown.getDatumForCursor(), i = this.dropdown.getDatumForTopSuggestion(), n ? (this._select(n), e.preventDefault()) : this.autoselect && i && (this._select(i), e.preventDefault())
                    },
                    _onTabKeyed: function(t, e) {
                        var n;
                        (n = this.dropdown.getDatumForCursor()) ? (this._select(n), e.preventDefault()) : this._autocomplete(!0)
                    },
                    _onEscKeyed: function() {
                        this.dropdown.close(), this.input.resetInputValue()
                    },
                    _onUpKeyed: function() {
                        var t = this.input.getQuery();
                        this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open()
                    },
                    _onDownKeyed: function() {
                        var t = this.input.getQuery();
                        this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open()
                    },
                    _onLeftKeyed: function() {
                        "rtl" === this.dir && this._autocomplete()
                    },
                    _onRightKeyed: function() {
                        "ltr" === this.dir && this._autocomplete()
                    },
                    _onQueryChanged: function(t, e) {
                        this.input.clearHintIfInvalid(), e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
                    },
                    _onWhitespaceChanged: function() {
                        this._updateHint(), this.dropdown.open()
                    },
                    _setLanguageDirection: function() {
                        var t;
                        this.dir !== (t = this.input.getLanguageDirection()) && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t))
                    },
                    _updateHint: function() {
                        var t, n, i, r, o, s;
                        t = this.dropdown.getDatumForTopSuggestion(), t && this.dropdown.isVisible() && !this.input.hasOverflow() ? (n = this.input.getInputValue(), i = p.normalizeQuery(n), r = e.escapeRegExChars(i), o = new RegExp("^(?:" + r + ")(.+$)", "i"), s = o.exec(t.value), s ? this.input.setHint(n + s[1]) : this.input.clearHint()) : this.input.clearHint()
                    },
                    _autocomplete: function(t) {
                        var e, n, i, r;
                        e = this.input.getHint(), n = this.input.getQuery(), i = t || this.input.isCursorAtEnd(), e && n !== e && i && (r = this.dropdown.getDatumForTopSuggestion(), r && this.input.setInputValue(r.value), this.eventBus.trigger("autocompleted", r.raw, r.datasetName))
                    },
                    _select: function(t) {
                        this.input.setQuery(t.value), this.input.setInputValue(t.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", t.raw, t.datasetName), this.dropdown.close(), e.defer(e.bind(this.dropdown.empty, this.dropdown))
                    },
                    open: function() {
                        this.dropdown.open()
                    },
                    close: function() {
                        this.dropdown.close()
                    },
                    setVal: function(t) {
                        t = e.toStr(t), this.isActivated ? this.input.setInputValue(t) : (this.input.setQuery(t), this.input.setInputValue(t, !0)), this._setLanguageDirection()
                    },
                    getVal: function() {
                        return this.input.getQuery()
                    },
                    destroy: function() {
                        this.input.destroy(), this.dropdown.destroy(), o(this.$node), this.$node = null
                    }
                }), n
            }();
        ! function() {
            "use strict";
            var n, i, r;
            n = t.fn.typeahead, i = "ttTypeahead", r = {
                initialize: function(n, r) {
                    function o() {
                        var o, s, a = t(this);
                        e.each(r, function(t) {
                            t.highlight = !!n.highlight
                        }), s = new v({
                            input: a,
                            eventBus: o = new f({
                                el: a
                            }),
                            withHint: e.isUndefined(n.hint) ? !0 : !!n.hint,
                            minLength: n.minLength,
                            autoselect: n.autoselect,
                            datasets: r
                        }), a.data(i, s)
                    }
                    return r = e.isArray(r) ? r : [].slice.call(arguments, 1), n = n || {}, this.each(o)
                },
                open: function() {
                    function e() {
                        var e, n = t(this);
                        (e = n.data(i)) && e.open()
                    }
                    return this.each(e)
                },
                close: function() {
                    function e() {
                        var e, n = t(this);
                        (e = n.data(i)) && e.close()
                    }
                    return this.each(e)
                },
                val: function(e) {
                    function n() {
                        var n, r = t(this);
                        (n = r.data(i)) && n.setVal(e)
                    }

                    function r(t) {
                        var e, n;
                        return (e = t.data(i)) && (n = e.getVal()), n
                    }
                    return arguments.length ? this.each(n) : r(this.first())
                },
                destroy: function() {
                    function e() {
                        var e, n = t(this);
                        (e = n.data(i)) && (e.destroy(), n.removeData(i))
                    }
                    return this.each(e)
                }
            }, t.fn.typeahead = function(e) {
                var n;
                return r[e] && "initialize" !== e ? (n = this.filter(function() {
                    return !!t(this).data(i)
                }), r[e].apply(n, [].slice.call(arguments, 1))) : r.initialize.apply(this, arguments)
            }, t.fn.typeahead.noConflict = function() {
                return t.fn.typeahead = n, this
            }
        }()
    }(window.jQuery);
var Hogan = {};
! function(t) {
    function e(t, e, n) {
        var i;
        return e && "object" == typeof e && (null != e[t] ? i = e[t] : n && e.get && "function" == typeof e.get && (i = e.get(t))), i
    }

    function n(t, e, n, i, r, o) {
        function s() {}

        function a() {}
        s.prototype = t, a.prototype = t.subs;
        var u, l = new s;
        l.subs = new a, l.subsText = {}, l.buf = "", i = i || {}, l.stackSubs = i, l.subsText = o;
        for (u in e) i[u] || (i[u] = e[u]);
        for (u in i) l.subs[u] = i[u];
        r = r || {}, l.stackPartials = r;
        for (u in n) r[u] || (r[u] = n[u]);
        for (u in r) l.partials[u] = r[u];
        return l
    }

    function i(t) {
        return String(null === t || void 0 === t ? "" : t)
    }

    function r(t) {
        return t = i(t), c.test(t) ? t.replace(o, "&amp;").replace(s, "&lt;").replace(a, "&gt;").replace(u, "&#39;").replace(l, "&quot;") : t
    }
    t.Template = function(t, e, n, i) {
        t = t || {}, this.r = t.code || this.r, this.c = n, this.options = i || {}, this.text = e || "", this.partials = t.partials || {}, this.subs = t.subs || {}, this.buf = ""
    }, window.Hogan = t, t.Template.prototype = {
        r: function(t, e, n) {
            return ""
        },
        v: r,
        t: i,
        render: function(t, e, n) {
            return this.ri([t], e || {}, n)
        },
        ri: function(t, e, n) {
            return this.r(t, e, n)
        },
        ep: function(t, e) {
            var i = this.partials[t],
                r = e[i.name];
            if (i.instance && i.base == r) return i.instance;
            if ("string" == typeof r) {
                if (!this.c) throw new Error("No compiler available.");
                r = this.c.compile(r, this.options)
            }
            if (!r) return null;
            if (this.partials[t].base = r, i.subs) {
                e.stackText || (e.stackText = {});
                for (key in i.subs) e.stackText[key] || (e.stackText[key] = void 0 !== this.activeSub && e.stackText[this.activeSub] ? e.stackText[this.activeSub] : this.text);
                r = n(r, i.subs, i.partials, this.stackSubs, this.stackPartials, e.stackText)
            }
            return this.partials[t].instance = r, r
        },
        rp: function(t, e, n, i) {
            var r = this.ep(t, n);
            return r ? r.ri(e, n, i) : ""
        },
        rs: function(t, e, n) {
            var i = t[t.length - 1];
            if (!f(i)) return void n(t, e, this);
            for (var r = 0; r < i.length; r++) t.push(i[r]), n(t, e, this), t.pop()
        },
        s: function(t, e, n, i, r, o, s) {
            var a;
            return f(t) && 0 === t.length ? !1 : ("function" == typeof t && (t = this.ms(t, e, n, i, r, o, s)), a = !!t, !i && a && e && e.push("object" == typeof t ? t : e[e.length - 1]), a)
        },
        d: function(t, n, i, r) {
            var o, s = t.split("."),
                a = this.f(s[0], n, i, r),
                u = this.options.modelGet,
                l = null;
            if ("." === t && f(n[n.length - 2])) a = n[n.length - 1];
            else
                for (var c = 1; c < s.length; c++) o = e(s[c], a, u), null != o ? (l = a, a = o) : a = "";
            return r && !a ? !1 : (r || "function" != typeof a || (n.push(l), a = this.mv(a, n, i), n.pop()), a)
        },
        f: function(t, n, i, r) {
            for (var o = !1, s = null, a = !1, u = this.options.modelGet, l = n.length - 1; l >= 0; l--)
                if (s = n[l], o = e(t, s, u), null != o) {
                    a = !0;
                    break
                }
            return a ? (r || "function" != typeof o || (o = this.mv(o, n, i)), o) : r ? !1 : ""
        },
        ls: function(t, e, n, r, o) {
            var s = this.options.delimiters;
            return this.options.delimiters = o, this.b(this.ct(i(t.call(e, r)), e, n)), this.options.delimiters = s, !1
        },
        ct: function(t, e, n) {
            if (this.options.disableLambda) throw new Error("Lambda features disabled.");
            return this.c.compile(t, this.options).render(e, n)
        },
        b: function(t) {
            this.buf += t
        },
        fl: function() {
            var t = this.buf;
            return this.buf = "", t
        },
        ms: function(t, e, n, i, r, o, s) {
            var a, u = e[e.length - 1],
                l = t.call(u);
            return "function" == typeof l ? i ? !0 : (a = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(l, u, n, a.substring(r, o), s)) : l
        },
        mv: function(t, e, n) {
            var r = e[e.length - 1],
                o = t.call(r);
            return "function" == typeof o ? this.ct(i(o.call(r)), r, n) : o
        },
        sub: function(t, e, n, i) {
            var r = this.subs[t];
            r && (this.activeSub = t, r(e, n, this, i), this.activeSub = !1)
        }
    };
    var o = /&/g,
        s = /</g,
        a = />/g,
        u = /\'/g,
        l = /\"/g,
        c = /[&<>\"\']/,
        f = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
}("undefined" != typeof exports ? exports : Hogan),
function(t) {
    function e(t) {
        "}" === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1))
    }

    function n(t) {
        return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "")
    }

    function i(t, e, n) {
        if (e.charAt(n) != t.charAt(0)) return !1;
        for (var i = 1, r = t.length; r > i; i++)
            if (e.charAt(n + i) != t.charAt(i)) return !1;
        return !0
    }

    function r(e, n, i, a) {
        var u = [],
            l = null,
            c = null,
            f = null;
        for (c = i[i.length - 1]; e.length > 0;) {
            if (f = e.shift(), c && "<" == c.tag && !(f.tag in $)) throw new Error("Illegal content in < super tag.");
            if (t.tags[f.tag] <= t.tags.$ || o(f, a)) i.push(f), f.nodes = r(e, f.tag, i, a);
            else {
                if ("/" == f.tag) {
                    if (0 === i.length) throw new Error("Closing tag without opener: /" + f.n);
                    if (l = i.pop(), f.n != l.n && !s(f.n, l.n, a)) throw new Error("Nesting error: " + l.n + " vs. " + f.n);
                    return l.end = f.i, u
                }
                "\n" == f.tag && (f.last = 0 == e.length || "\n" == e[0].tag)
            }
            u.push(f)
        }
        if (i.length > 0) throw new Error("missing closing tag: " + i.pop().n);
        return u
    }

    function o(t, e) {
        for (var n = 0, i = e.length; i > n; n++)
            if (e[n].o == t.n) return t.tag = "#", !0
    }

    function s(t, e, n) {
        for (var i = 0, r = n.length; r > i; i++)
            if (n[i].c == t && n[i].o == e) return !0
    }

    function a(t) {
        var e = [];
        for (var n in t) e.push('"' + l(n) + '": function(c,p,t,i) {' + t[n] + "}");
        return "{ " + e.join(",") + " }"
    }

    function u(t) {
        var e = [];
        for (var n in t.partials) e.push('"' + l(n) + '":{name:"' + l(t.partials[n].name) + '", ' + u(t.partials[n]) + "}");
        return "partials: {" + e.join(",") + "}, subs: " + a(t.subs)
    }

    function l(t) {
        return t.replace(y, "\\\\").replace(m, '\\"').replace(g, "\\n").replace(v, "\\r")
    }

    function c(t) {
        return ~t.indexOf(".") ? "d" : "f"
    }

    function f(t, e) {
        var n = "<" + (e.prefix || ""),
            i = n + t.n + b++;
        return e.partials[i] = {
            name: t.n,
            partials: {}
        }, e.code += 't.b(t.rp("' + l(i) + '",c,p,"' + (t.indent || "") + '"));', i
    }

    function h(t, e) {
        e.code += "t.b(t.t(t." + c(t.n) + '("' + l(t.n) + '",c,p,0)));'
    }

    function d(t) {
        return "t.b(" + t + ");"
    }
    var p = /\S/,
        m = /\"/g,
        g = /\n/g,
        v = /\r/g,
        y = /\\/g;
    t.tags = {
        "#": 1,
        "^": 2,
        "<": 3,
        $: 4,
        "/": 5,
        "!": 6,
        ">": 7,
        "=": 8,
        _v: 9,
        "{": 10,
        "&": 11,
        _t: 12
    }, t.scan = function(r, o) {
        function s() {
            y.length > 0 && ($.push({
                tag: "_t",
                text: new String(y)
            }), y = "")
        }

        function a() {
            for (var e = !0, n = x; n < $.length; n++)
                if (e = t.tags[$[n].tag] < t.tags._v || "_t" == $[n].tag && null === $[n].text.match(p), !e) return !1;
            return e
        }

        function u(t, e) {
            if (s(), t && a())
                for (var n, i = x; i < $.length; i++) $[i].text && ((n = $[i + 1]) && ">" == n.tag && (n.indent = $[i].text.toString()), $.splice(i, 1));
            else e || $.push({
                tag: "\n"
            });
            b = !1, x = $.length
        }

        function l(t, e) {
            var i = "=" + S,
                r = t.indexOf(i, e),
                o = n(t.substring(t.indexOf("=", e) + 1, r)).split(" ");
            return C = o[0], S = o[o.length - 1], r + i.length - 1
        }
        var c = r.length,
            f = 0,
            h = 1,
            d = 2,
            m = f,
            g = null,
            v = null,
            y = "",
            $ = [],
            b = !1,
            w = 0,
            x = 0,
            C = "{{",
            S = "}}";
        for (o && (o = o.split(" "), C = o[0], S = o[1]), w = 0; c > w; w++) m == f ? i(C, r, w) ? (--w, s(), m = h) : "\n" == r.charAt(w) ? u(b) : y += r.charAt(w) : m == h ? (w += C.length - 1, v = t.tags[r.charAt(w + 1)], g = v ? r.charAt(w + 1) : "_v", "=" == g ? (w = l(r, w), m = f) : (v && w++, m = d), b = w) : i(S, r, w) ? ($.push({
            tag: g,
            n: n(y),
            otag: C,
            ctag: S,
            i: "/" == g ? b - C.length : w + S.length
        }), y = "", w += S.length - 1, m = f, "{" == g && ("}}" == S ? w++ : e($[$.length - 1]))) : y += r.charAt(w);
        return u(b, !0), $
    };
    var $ = {
        _t: !0,
        "\n": !0,
        $: !0,
        "/": !0
    };
    t.stringify = function(e, n, i) {
        return "{code: function (c,p,i) { " + t.wrapMain(e.code) + " }," + u(e) + "}"
    };
    var b = 0;
    t.generate = function(e, n, i) {
        b = 0;
        var r = {
            code: "",
            subs: {},
            partials: {}
        };
        return t.walk(e, r), i.asString ? this.stringify(r, n, i) : this.makeTemplate(r, n, i)
    }, t.wrapMain = function(t) {
        return 'var t=this;t.b(i=i||"");' + t + "return t.fl();"
    }, t.template = t.Template, t.makeTemplate = function(t, e, n) {
        var i = this.makePartials(t);
        return i.code = new Function("c", "p", "i", this.wrapMain(t.code)), new this.template(i, e, this, n)
    }, t.makePartials = function(t) {
        var e, n = {
            subs: {},
            partials: t.partials,
            name: t.name
        };
        for (e in n.partials) n.partials[e] = this.makePartials(n.partials[e]);
        for (e in t.subs) n.subs[e] = new Function("c", "p", "t", "i", t.subs[e]);
        return n
    }, t.codegen = {
        "#": function(e, n) {
            n.code += "if(t.s(t." + c(e.n) + '("' + l(e.n) + '",c,p,1),c,p,0,' + e.i + "," + e.end + ',"' + e.otag + " " + e.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(e.nodes, n), n.code += "});c.pop();}"
        },
        "^": function(e, n) {
            n.code += "if(!t.s(t." + c(e.n) + '("' + l(e.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(e.nodes, n), n.code += "};"
        },
        ">": f,
        "<": function(e, n) {
            var i = {
                partials: {},
                code: "",
                subs: {},
                inPartial: !0
            };
            t.walk(e.nodes, i);
            var r = n.partials[f(e, n)];
            r.subs = i.subs, r.partials = i.partials
        },
        $: function(e, n) {
            var i = {
                subs: {},
                code: "",
                partials: n.partials,
                prefix: e.n
            };
            t.walk(e.nodes, i), n.subs[e.n] = i.code, n.inPartial || (n.code += 't.sub("' + l(e.n) + '",c,p,i);')
        },
        "\n": function(t, e) {
            e.code += d('"\\n"' + (t.last ? "" : " + i"))
        },
        _v: function(t, e) {
            e.code += "t.b(t.v(t." + c(t.n) + '("' + l(t.n) + '",c,p,0)));'
        },
        _t: function(t, e) {
            e.code += d('"' + l(t.text) + '"')
        },
        "{": h,
        "&": h
    }, t.walk = function(e, n) {
        for (var i, r = 0, o = e.length; o > r; r++) i = t.codegen[e[r].tag], i && i(e[r], n);
        return n
    }, t.parse = function(t, e, n) {
        return n = n || {}, r(t, "", [], n.sectionTags || [])
    }, t.cache = {}, t.cacheKey = function(t, e) {
        return [t, !!e.asString, !!e.disableLambda, e.delimiters, !!e.modelGet].join("||")
    }, t.compile = function(e, n) {
        n = n || {};
        var i = t.cacheKey(e, n),
            r = this.cache[i];
        if (r) {
            var o = r.partials;
            for (var s in o) delete o[s].instance;
            return r
        }
        return r = this.generate(this.parse(this.scan(e, n.delimiters), e, n), e, n), this.cache[i] = r
    }
}("undefined" != typeof exports ? exports : Hogan), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.affix"),
                o = "object" == typeof e && e;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof e && r[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return n > r ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? r + this.unpin <= o.top ? !1 : "bottom" : t - i >= r + s ? !1 : "bottom";
        var a = null == this.affixed,
            u = a ? r : o.top,
            l = a ? s : e;
        return null != n && n >= r ? "top" : null != i && u + l >= t - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                r = i.top,
                o = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(s, e, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (a ? "-" + a : ""),
                    l = t.Event(u + ".bs.affix");
                if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(u.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - o
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof e && r[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(o);
        e && e.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.button"),
                o = "object" == typeof e && e;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.5", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            o = i.data();
        e += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(t.proxy(function() {
            i[r](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.carousel"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof e ? r.to(e) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var r = "prev" == t ? -1 : 1,
            o = (n + r) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var r = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(e, r),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            u = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var l = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: l,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(o)]);
                f && f.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: l,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function() {
                o.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), u.sliding = !1, setTimeout(function() {
                    u.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var r = function(n) {
        var i, r = t(this),
            o = t(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = t.extend({}, o.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.collapse"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !r && o.toggle && /show|hide/.test(e) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof e && r[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), e || r.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var u = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][u])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var r = t(i);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var r = t(this);
        r.attr("data-target") || i.preventDefault();
        var o = e(r),
            s = o.data("bs.collapse"),
            a = s ? "toggle" : r.data();
        n.call(o, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(r).remove(), t(o).each(function() {
            var i = t(this),
                r = e(i),
                o = {
                    relatedTarget: this
                };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r[0], n.target) || (r.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger("hidden.bs.dropdown", o))))
        }))
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var r = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.5", s.prototype.toggle = function(i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = e(r),
                s = o.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = e(i),
                    s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    u = r.find(".dropdown-menu" + a);
                if (u.length) {
                    var l = u.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < u.length - 1 && l++, ~l || (l = 0), u.eq(l).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof e && r[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        var s = i.find("> .active"),
            a = r && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var r = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var r = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                r = e.data("target") || e.attr("href"),
                o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [
                [o[n]().top + i, r]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < r[0]) return this.activeTarget = null, this.clear();
        for (t = r.length; t--;) s != o[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var r = t(this),
                o = r.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
            o || r.data("bs.modal", o = new n(this, s)), "string" == typeof e ? o[e](i) : s.show && o.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            r = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var r = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            r = i.attr("href"),
            o = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(o, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.tooltip"),
                o = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    u = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var r = this,
                o = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                u = /\s?auto?\s?/i,
                l = u.test(a);
            l && (a = a.replace(u, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                f = o[0].offsetWidth,
                h = o[0].offsetHeight;
            if (l) {
                var d = a,
                    p = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + h > p.bottom ? "top" : "top" == a && c.top - h < p.top ? "bottom" : "right" == a && c.right + f > p.width ? "left" : "left" == a && c.left - f < p.left ? "right" : a, o.removeClass(d).addClass(a)
            }
            var m = this.getCalculatedOffset(a, c, f, h);
            this.applyPlacement(m, a);
            var g = function() {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var u = i[0].offsetWidth,
            l = i[0].offsetHeight;
        "top" == n && l != o && (e.top = e.top + o - l);
        var c = this.getViewportAdjustedDelta(n, e, u, l);
        c.left ? e.left += c.left : e.top += c.top;
        var f = /top|bottom/.test(n),
            h = f ? 2 * c.left - r + u : 2 * c.top - o + l,
            d = f ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(h, i[0][d], f)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function i() {
            "in" != r.hoverState && o.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
        }
        var r = this,
            o = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = i ? {
                top: 0,
                left: 0
            } : e.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, r, s, a, o)
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll,
                u = e.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a : u > s.top + s.height && (r.top = s.top + s.height - u)
        } else {
            var l = e.left - o,
                c = e.left + o + n;
            l < s.left ? r.left = s.left - l : c > s.right && (r.left = s.left + s.width - c)
        }
        return r
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.popover"),
                o = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.5", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery),
function(t, e, n) {
    "use strict";

    function i(t, e) {
        return e = e || Error,
            function() {
                var n, i, r = arguments[0],
                    o = "[" + (t ? t + ":" : "") + r + "] ",
                    s = arguments[1],
                    a = arguments;
                for (n = o + s.replace(/\{\d+\}/g, function(t) {
                        var e = +t.slice(1, -1);
                        return e + 2 < a.length ? ht(a[e + 2]) : t
                    }), n = n + "\nhttp://errors.angularjs.org/1.3.8/" + (t ? t + "/" : "") + r, i = 2; i < arguments.length; i++) n = n + (2 == i ? "?" : "&") + "p" + (i - 2) + "=" + encodeURIComponent(ht(arguments[i]));
                return new e(n)
            }
    }

    function r(t) {
        if (null == t || T(t)) return !1;
        var e = t.length;
        return t.nodeType === vi && e ? !0 : b(t) || ci(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function o(t, e, n) {
        var i, s;
        if (t)
            if (C(t))
                for (i in t) "prototype" == i || "length" == i || "name" == i || t.hasOwnProperty && !t.hasOwnProperty(i) || e.call(n, t[i], i, t);
            else if (ci(t) || r(t)) {
            var a = "object" != typeof t;
            for (i = 0, s = t.length; s > i; i++)(a || i in t) && e.call(n, t[i], i, t)
        } else if (t.forEach && t.forEach !== o) t.forEach(e, n, t);
        else
            for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t);
        return t
    }

    function s(t) {
        return Object.keys(t).sort()
    }

    function a(t, e, n) {
        for (var i = s(t), r = 0; r < i.length; r++) e.call(n, t[i[r]], i[r]);
        return i
    }

    function u(t) {
        return function(e, n) {
            t(n, e)
        }
    }

    function l() {
        return ++ui
    }

    function c(t, e) {
        e ? t.$$hashKey = e : delete t.$$hashKey
    }

    function f(t) {
        for (var e = t.$$hashKey, n = 1, i = arguments.length; i > n; n++) {
            var r = arguments[n];
            if (r)
                for (var o = Object.keys(r), s = 0, a = o.length; a > s; s++) {
                    var u = o[s];
                    t[u] = r[u]
                }
        }
        return c(t, e), t
    }

    function h(t) {
        return parseInt(t, 10)
    }

    function d(t, e) {
        return f(Object.create(t), e)
    }

    function p() {}

    function m(t) {
        return t
    }

    function g(t) {
        return function() {
            return t
        }
    }

    function v(t) {
        return "undefined" == typeof t
    }

    function y(t) {
        return "undefined" != typeof t
    }

    function $(t) {
        return null !== t && "object" == typeof t
    }

    function b(t) {
        return "string" == typeof t
    }

    function w(t) {
        return "number" == typeof t
    }

    function x(t) {
        return "[object Date]" === oi.call(t)
    }

    function C(t) {
        return "function" == typeof t
    }

    function S(t) {
        return "[object RegExp]" === oi.call(t)
    }

    function T(t) {
        return t && t.window === t
    }

    function k(t) {
        return t && t.$evalAsync && t.$watch
    }

    function E(t) {
        return "[object File]" === oi.call(t)
    }

    function A(t) {
        return "[object FormData]" === oi.call(t)
    }

    function _(t) {
        return "[object Blob]" === oi.call(t)
    }

    function j(t) {
        return "boolean" == typeof t
    }

    function N(t) {
        return t && C(t.then)
    }

    function R(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
    }

    function D(t) {
        var e, n = {},
            i = t.split(",");
        for (e = 0; e < i.length; e++) n[i[e]] = !0;
        return n
    }

    function O(t) {
        return Kn(t.nodeName || t[0] && t[0].nodeName)
    }

    function I(t, e) {
        var n = t.indexOf(e);
        return n >= 0 && t.splice(n, 1), e
    }

    function q(t, e, n, i) {
        if (T(t) || k(t)) throw si("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (e) {
            if (t === e) throw si("cpi", "Can't copy! Source and destination are identical.");
            if (n = n || [], i = i || [], $(t)) {
                var r = n.indexOf(t);
                if (-1 !== r) return i[r];
                n.push(t), i.push(e)
            }
            var s;
            if (ci(t)) {
                e.length = 0;
                for (var a = 0; a < t.length; a++) s = q(t[a], null, n, i), $(t[a]) && (n.push(t[a]), i.push(s)), e.push(s)
            } else {
                var u = e.$$hashKey;
                ci(e) ? e.length = 0 : o(e, function(t, n) {
                    delete e[n]
                });
                for (var l in t) t.hasOwnProperty(l) && (s = q(t[l], null, n, i), $(t[l]) && (n.push(t[l]), i.push(s)), e[l] = s);
                c(e, u)
            }
        } else if (e = t, t)
            if (ci(t)) e = q(t, [], n, i);
            else if (x(t)) e = new Date(t.getTime());
        else if (S(t)) e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex;
        else if ($(t)) {
            var f = Object.create(Object.getPrototypeOf(t));
            e = q(t, f, n, i)
        }
        return e
    }

    function H(t, e) {
        if (ci(t)) {
            e = e || [];
            for (var n = 0, i = t.length; i > n; n++) e[n] = t[n]
        } else if ($(t)) {
            e = e || {};
            for (var r in t)("$" !== r.charAt(0) || "$" !== r.charAt(1)) && (e[r] = t[r])
        }
        return e || t
    }

    function P(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t !== t && e !== e) return !0;
        var i, r, o, s = typeof t,
            a = typeof e;
        if (s == a && "object" == s) {
            if (!ci(t)) {
                if (x(t)) return x(e) ? P(t.getTime(), e.getTime()) : !1;
                if (S(t) && S(e)) return t.toString() == e.toString();
                if (k(t) || k(e) || T(t) || T(e) || ci(e)) return !1;
                o = {};
                for (r in t)
                    if ("$" !== r.charAt(0) && !C(t[r])) {
                        if (!P(t[r], e[r])) return !1;
                        o[r] = !0
                    }
                for (r in e)
                    if (!o.hasOwnProperty(r) && "$" !== r.charAt(0) && e[r] !== n && !C(e[r])) return !1;
                return !0
            }
            if (!ci(e)) return !1;
            if ((i = t.length) == e.length) {
                for (r = 0; i > r; r++)
                    if (!P(t[r], e[r])) return !1;
                return !0
            }
        }
        return !1
    }

    function L(t, e, n) {
        return t.concat(ni.call(e, n))
    }

    function M(t, e) {
        return ni.call(t, e || 0)
    }

    function F(t, e) {
        var n = arguments.length > 2 ? M(arguments, 2) : [];
        return !C(e) || e instanceof RegExp ? e : n.length ? function() {
            return arguments.length ? e.apply(t, L(n, arguments, 0)) : e.apply(t, n)
        } : function() {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }

    function U(t, i) {
        var r = i;
        return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? r = n : T(i) ? r = "$WINDOW" : i && e === i ? r = "$DOCUMENT" : k(i) && (r = "$SCOPE"), r
    }

    function B(t, e) {
        return "undefined" == typeof t ? n : (w(e) || (e = e ? 2 : null), JSON.stringify(t, U, e))
    }

    function V(t) {
        return b(t) ? JSON.parse(t) : t
    }

    function z(t) {
        t = Zn(t).clone();
        try {
            t.empty()
        } catch (e) {}
        var n = Zn("<div>").append(t).html();
        try {
            return t[0].nodeType === yi ? Kn(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(t, e) {
                return "<" + Kn(e)
            })
        } catch (e) {
            return Kn(n)
        }
    }

    function W(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {}
    }

    function K(t) {
        var e, n, i = {};
        return o((t || "").split("&"), function(t) {
            if (t && (e = t.replace(/\+/g, "%20").split("="), n = W(e[0]), y(n))) {
                var r = y(e[1]) ? W(e[1]) : !0;
                Xn.call(i, n) ? ci(i[n]) ? i[n].push(r) : i[n] = [i[n], r] : i[n] = r
            }
        }), i
    }

    function X(t) {
        var e = [];
        return o(t, function(t, n) {
            ci(t) ? o(t, function(t) {
                e.push(G(n, !0) + (t === !0 ? "" : "=" + G(t, !0)))
            }) : e.push(G(n, !0) + (t === !0 ? "" : "=" + G(t, !0)))
        }), e.length ? e.join("&") : ""
    }

    function Q(t) {
        return G(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function G(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
    }

    function J(t, e) {
        var n, i, r = pi.length;
        for (t = Zn(t), i = 0; r > i; ++i)
            if (n = pi[i] + e, b(n = t.attr(n))) return n;
        return null
    }

    function Y(t, e) {
        var n, i, r = {};
        o(pi, function(e) {
            var r = e + "app";
            !n && t.hasAttribute && t.hasAttribute(r) && (n = t, i = t.getAttribute(r))
        }), o(pi, function(e) {
            var r, o = e + "app";
            !n && (r = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = r, i = r.getAttribute(o))
        }), n && (r.strictDi = null !== J(n, "strict-di"), e(n, i ? [i] : [], r))
    }

    function Z(n, i, r) {
        $(r) || (r = {});
        var s = {
            strictDi: !1
        };
        r = f(s, r);
        var a = function() {
                if (n = Zn(n), n.injector()) {
                    var t = n[0] === e ? "document" : z(n);
                    throw si("btstrpd", "App Already Bootstrapped with this Element '{0}'", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                i = i || [], i.unshift(["$provide", function(t) {
                    t.value("$rootElement", n)
                }]), r.debugInfoEnabled && i.push(["$compileProvider", function(t) {
                    t.debugInfoEnabled(!0)
                }]), i.unshift("ng");
                var o = Vt(i, r.strictDi);
                return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(t, e, n, i) {
                    t.$apply(function() {
                        e.data("$injector", i), n(e)(t)
                    })
                }]), o
            },
            u = /^NG_ENABLE_DEBUG_INFO!/,
            l = /^NG_DEFER_BOOTSTRAP!/;
        return t && u.test(t.name) && (r.debugInfoEnabled = !0, t.name = t.name.replace(u, "")), t && !l.test(t.name) ? a() : (t.name = t.name.replace(l, ""), void(ai.resumeBootstrap = function(t) {
            o(t, function(t) {
                i.push(t)
            }), a()
        }))
    }

    function tt() {
        t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
    }

    function et(t) {
        var e = ai.element(t).injector();
        if (!e) throw si("test", "no injector found for element argument to getTestability");
        return e.get("$$testability")
    }

    function nt(t, e) {
        return e = e || "_", t.replace(mi, function(t, n) {
            return (n ? e : "") + t.toLowerCase()
        })
    }

    function it() {
        var e;
        gi || (ti = t.jQuery, ti && ti.fn.on ? (Zn = ti, f(ti.fn, {
            scope: qi.scope,
            isolateScope: qi.isolateScope,
            controller: qi.controller,
            injector: qi.injector,
            inheritedData: qi.inheritedData
        }), e = ti.cleanData, ti.cleanData = function(t) {
            var n;
            if (li) li = !1;
            else
                for (var i, r = 0; null != (i = t[r]); r++) n = ti._data(i, "events"), n && n.$destroy && ti(i).triggerHandler("$destroy");
            e(t)
        }) : Zn = bt, ai.element = Zn, gi = !0)
    }

    function rt(t, e, n) {
        if (!t) throw si("areq", "Argument '{0}' is {1}", e || "?", n || "required");
        return t
    }

    function ot(t, e, n) {
        return n && ci(t) && (t = t[t.length - 1]), rt(C(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
    }

    function st(t, e) {
        if ("hasOwnProperty" === t) throw si("badname", "hasOwnProperty is not a valid {0} name", e)
    }

    function at(t, e, n) {
        if (!e) return t;
        for (var i, r = e.split("."), o = t, s = r.length, a = 0; s > a; a++) i = r[a], t && (t = (o = t)[i]);
        return !n && C(t) ? F(o, t) : t
    }

    function ut(t) {
        var e = t[0],
            n = t[t.length - 1],
            i = [e];
        do {
            if (e = e.nextSibling, !e) break;
            i.push(e)
        } while (e !== n);
        return Zn(i)
    }

    function lt() {
        return Object.create(null)
    }

    function ct(t) {
        function e(t, e, n) {
            return t[e] || (t[e] = n())
        }
        var n = i("$injector"),
            r = i("ng"),
            o = e(t, "angular", Object);
        return o.$$minErr = o.$$minErr || i, e(o, "module", function() {
            var t = {};
            return function(i, o, s) {
                var a = function(t, e) {
                    if ("hasOwnProperty" === t) throw r("badname", "hasOwnProperty is not a valid {0} name", e)
                };
                return a(i, "module"), o && t.hasOwnProperty(i) && (t[i] = null), e(t, i, function() {
                    function t(t, n, i, r) {
                        return r || (r = e),
                            function() {
                                return r[i || "push"]([t, n, arguments]), l
                            }
                    }
                    if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", i);
                    var e = [],
                        r = [],
                        a = [],
                        u = t("$injector", "invoke", "push", r),
                        l = {
                            _invokeQueue: e,
                            _configBlocks: r,
                            _runBlocks: a,
                            requires: o,
                            name: i,
                            provider: t("$provide", "provider"),
                            factory: t("$provide", "factory"),
                            service: t("$provide", "service"),
                            value: t("$provide", "value"),
                            constant: t("$provide", "constant", "unshift"),
                            animation: t("$animateProvider", "register"),
                            filter: t("$filterProvider", "register"),
                            controller: t("$controllerProvider", "register"),
                            directive: t("$compileProvider", "directive"),
                            config: u,
                            run: function(t) {
                                return a.push(t), this
                            }
                        };
                    return s && u(s), l
                })
            }
        })
    }

    function ft(t) {
        var e = [];
        return JSON.stringify(t, function(t, n) {
            if (n = U(t, n), $(n)) {
                if (e.indexOf(n) >= 0) return "<<already seen>>";
                e.push(n)
            }
            return n
        })
    }

    function ht(t) {
        return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof t ? "undefined" : "string" != typeof t ? ft(t) : t
    }

    function dt(e) {
        f(e, {
            bootstrap: Z,
            copy: q,
            extend: f,
            equals: P,
            element: Zn,
            forEach: o,
            injector: Vt,
            noop: p,
            bind: F,
            toJson: B,
            fromJson: V,
            identity: m,
            isUndefined: v,
            isDefined: y,
            isString: b,
            isFunction: C,
            isObject: $,
            isNumber: w,
            isElement: R,
            isArray: ci,
            version: xi,
            isDate: x,
            lowercase: Kn,
            uppercase: Qn,
            callbacks: {
                counter: 0
            },
            getTestability: et,
            $$minErr: i,
            $$csp: di,
            reloadWithDebugInfo: tt
        }), ei = ct(t);
        try {
            ei("ngLocale")
        } catch (n) {
            ei("ngLocale", []).provider("$locale", ge)
        }
        ei("ng", ["ngLocale"], ["$provide", function(t) {
            t.provider({
                $$sanitizeUri: Xe
            }), t.provider("$compile", Jt).directive({
                a: Er,
                input: Wr,
                textarea: Wr,
                form: Rr,
                script: Po,
                select: Fo,
                style: Bo,
                option: Uo,
                ngBind: fo,
                ngBindHtml: po,
                ngBindTemplate: ho,
                ngClass: mo,
                ngClassEven: vo,
                ngClassOdd: go,
                ngCloak: yo,
                ngController: $o,
                ngForm: Dr,
                ngHide: Ro,
                ngIf: xo,
                ngInclude: Co,
                ngInit: To,
                ngNonBindable: ko,
                ngPluralize: Eo,
                ngRepeat: Ao,
                ngShow: No,
                ngStyle: Do,
                ngSwitch: Oo,
                ngSwitchWhen: Io,
                ngSwitchDefault: qo,
                ngOptions: Mo,
                ngTransclude: Ho,
                ngModel: eo,
                ngList: ao,
                ngChange: no,
                pattern: ro,
                ngPattern: ro,
                required: io,
                ngRequired: io,
                minlength: so,
                ngMinlength: so,
                maxlength: oo,
                ngMaxlength: oo,
                ngValue: lo,
                ngModelOptions: co
            }).directive({
                ngInclude: So
            }).directive(Ar).directive(bo), t.provider({
                $anchorScroll: zt,
                $animate: Wi,
                $browser: Xt,
                $cacheFactory: Qt,
                $controller: ee,
                $document: ne,
                $exceptionHandler: ie,
                $filter: an,
                $interpolate: pe,
                $interval: me,
                $http: ce,
                $httpBackend: he,
                $location: je,
                $log: Ne,
                $parse: Ue,
                $rootScope: Ke,
                $q: Be,
                $$q: Ve,
                $sce: Ye,
                $sceDelegate: Je,
                $sniffer: Ze,
                $templateCache: Gt,
                $templateRequest: tn,
                $$testability: en,
                $timeout: nn,
                $window: sn,
                $$rAF: We,
                $$asyncCallback: Wt,
                $$jqLite: Lt
            })
        }])
    }

    function pt() {
        return ++Si
    }

    function mt(t) {
        return t.replace(Ei, function(t, e, n, i) {
            return i ? n.toUpperCase() : n
        }).replace(Ai, "Moz$1")
    }

    function gt(t) {
        return !Ri.test(t)
    }

    function vt(t) {
        var e = t.nodeType;
        return e === vi || !e || e === bi
    }

    function yt(t, e) {
        var n, i, r, s, a = e.createDocumentFragment(),
            u = [];
        if (gt(t)) u.push(e.createTextNode(t));
        else {
            for (n = n || a.appendChild(e.createElement("div")), i = (Di.exec(t) || ["", ""])[1].toLowerCase(), r = Ii[i] || Ii._default, n.innerHTML = r[1] + t.replace(Oi, "<$1></$2>") + r[2], s = r[0]; s--;) n = n.lastChild;
            u = L(u, n.childNodes), n = a.firstChild, n.textContent = ""
        }
        return a.textContent = "", a.innerHTML = "", o(u, function(t) {
            a.appendChild(t)
        }), a
    }

    function $t(t, n) {
        n = n || e;
        var i;
        return (i = Ni.exec(t)) ? [n.createElement(i[1])] : (i = yt(t, n)) ? i.childNodes : []
    }

    function bt(t) {
        if (t instanceof bt) return t;
        var e;
        if (b(t) && (t = fi(t), e = !0), !(this instanceof bt)) {
            if (e && "<" != t.charAt(0)) throw ji("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new bt(t)
        }
        e ? jt(this, $t(t)) : jt(this, t)
    }

    function wt(t) {
        return t.cloneNode(!0)
    }

    function xt(t, e) {
        if (e || St(t), t.querySelectorAll)
            for (var n = t.querySelectorAll("*"), i = 0, r = n.length; r > i; i++) St(n[i])
    }

    function Ct(t, e, n, i) {
        if (y(i)) throw ji("offargs", "jqLite#off() does not support the `selector` argument");
        var r = Tt(t),
            s = r && r.events,
            a = r && r.handle;
        if (a)
            if (e) o(e.split(" "), function(e) {
                if (y(n)) {
                    var i = s[e];
                    if (I(i || [], n), i && i.length > 0) return
                }
                ki(t, e, a), delete s[e]
            });
            else
                for (e in s) "$destroy" !== e && ki(t, e, a), delete s[e]
    }

    function St(t, e) {
        var i = t.ng339,
            r = i && Ci[i];
        if (r) {
            if (e) return void delete r.data[e];
            r.handle && (r.events.$destroy && r.handle({}, "$destroy"), Ct(t)), delete Ci[i], t.ng339 = n
        }
    }

    function Tt(t, e) {
        var i = t.ng339,
            r = i && Ci[i];
        return e && !r && (t.ng339 = i = pt(), r = Ci[i] = {
            events: {},
            data: {},
            handle: n
        }), r
    }

    function kt(t, e, n) {
        if (vt(t)) {
            var i = y(n),
                r = !i && e && !$(e),
                o = !e,
                s = Tt(t, !r),
                a = s && s.data;
            if (i) a[e] = n;
            else {
                if (o) return a;
                if (r) return a && a[e];
                f(a, e)
            }
        }
    }

    function Et(t, e) {
        return t.getAttribute ? (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1 : !1
    }

    function At(t, e) {
        e && t.setAttribute && o(e.split(" "), function(e) {
            t.setAttribute("class", fi((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + fi(e) + " ", " ")))
        })
    }

    function _t(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(e.split(" "), function(t) {
                t = fi(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
            }), t.setAttribute("class", fi(n))
        }
    }

    function jt(t, e) {
        if (e)
            if (e.nodeType) t[t.length++] = e;
            else {
                var n = e.length;
                if ("number" == typeof n && e.window !== e) {
                    if (n)
                        for (var i = 0; n > i; i++) t[t.length++] = e[i]
                } else t[t.length++] = e
            }
    }

    function Nt(t, e) {
        return Rt(t, "$" + (e || "ngController") + "Controller")
    }

    function Rt(t, e, i) {
        t.nodeType == bi && (t = t.documentElement);
        for (var r = ci(e) ? e : [e]; t;) {
            for (var o = 0, s = r.length; s > o; o++)
                if ((i = Zn.data(t, r[o])) !== n) return i;
            t = t.parentNode || t.nodeType === wi && t.host
        }
    }

    function Dt(t) {
        for (xt(t, !0); t.firstChild;) t.removeChild(t.firstChild)
    }

    function Ot(t, e) {
        e || xt(t);
        var n = t.parentNode;
        n && n.removeChild(t)
    }

    function It(e, n) {
        n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : Zn(n).on("load", e)
    }

    function qt(t, e) {
        var n = Hi[e.toLowerCase()];
        return n && Pi[O(t)] && n
    }

    function Ht(t, e) {
        var n = t.nodeName;
        return ("INPUT" === n || "TEXTAREA" === n) && Li[e]
    }

    function Pt(t, e) {
        var n = function(n, i) {
            n.isDefaultPrevented = function() {
                return n.defaultPrevented
            };
            var r = e[i || n.type],
                o = r ? r.length : 0;
            if (o) {
                if (v(n.immediatePropagationStopped)) {
                    var s = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function() {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), s && s.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function() {
                    return n.immediatePropagationStopped === !0
                }, o > 1 && (r = H(r));
                for (var a = 0; o > a; a++) n.isImmediatePropagationStopped() || r[a].call(t, n)
            }
        };
        return n.elem = t, n
    }

    function Lt() {
        this.$get = function() {
            return f(bt, {
                hasClass: function(t, e) {
                    return t.attr && (t = t[0]), Et(t, e)
                },
                addClass: function(t, e) {
                    return t.attr && (t = t[0]), _t(t, e)
                },
                removeClass: function(t, e) {
                    return t.attr && (t = t[0]), At(t, e)
                }
            })
        }
    }

    function Mt(t, e) {
        var n = t && t.$$hashKey;
        if (n) return "function" == typeof n && (n = t.$$hashKey()), n;
        var i = typeof t;
        return n = "function" == i || "object" == i && null !== t ? t.$$hashKey = i + ":" + (e || l)() : i + ":" + t
    }

    function Ft(t, e) {
        if (e) {
            var n = 0;
            this.nextUid = function() {
                return ++n
            }
        }
        o(t, this.put, this)
    }

    function Ut(t) {
        var e = t.toString().replace(Bi, ""),
            n = e.match(Mi);
        return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Bt(t, e, n) {
        var i, r, s, a;
        if ("function" == typeof t) {
            if (!(i = t.$inject)) {
                if (i = [], t.length) {
                    if (e) throw b(n) && n || (n = t.name || Ut(t)), Vi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                    r = t.toString().replace(Bi, ""), s = r.match(Mi), o(s[1].split(Fi), function(t) {
                        t.replace(Ui, function(t, e, n) {
                            i.push(n)
                        })
                    })
                }
                t.$inject = i
            }
        } else ci(t) ? (a = t.length - 1, ot(t[a], "fn"), i = t.slice(0, a)) : ot(t, "fn", !0);
        return i
    }

    function Vt(t, e) {
        function i(t) {
            return function(e, n) {
                return $(e) ? void o(e, u(t)) : t(e, n)
            }
        }

        function r(t, e) {
            if (st(t, "service"), (C(e) || ci(e)) && (e = k.instantiate(e)), !e.$get) throw Vi("pget", "Provider '{0}' must define $get factory method.", t);
            return T[t + w] = e
        }

        function s(t, e) {
            return function() {
                var n = A.invoke(e, this);
                if (v(n)) throw Vi("undef", "Provider '{0}' must return a value from $get factory method.", t);
                return n
            }
        }

        function a(t, e, n) {
            return r(t, {
                $get: n !== !1 ? s(t, e) : e
            })
        }

        function l(t, e) {
            return a(t, ["$injector", function(t) {
                return t.instantiate(e)
            }])
        }

        function c(t, e) {
            return a(t, g(e), !1)
        }

        function f(t, e) {
            st(t, "constant"), T[t] = e, E[t] = e
        }

        function h(t, e) {
            var n = k.get(t + w),
                i = n.$get;
            n.$get = function() {
                var t = A.invoke(i, n);
                return A.invoke(e, null, {
                    $delegate: t
                })
            }
        }

        function d(t) {
            var e, n = [];
            return o(t, function(t) {
                function i(t) {
                    var e, n;
                    for (e = 0, n = t.length; n > e; e++) {
                        var i = t[e],
                            r = k.get(i[0]);
                        r[i[1]].apply(r, i[2])
                    }
                }
                if (!S.get(t)) {
                    S.put(t, !0);
                    try {
                        b(t) ? (e = ei(t), n = n.concat(d(e.requires)).concat(e._runBlocks), i(e._invokeQueue), i(e._configBlocks)) : C(t) ? n.push(k.invoke(t)) : ci(t) ? n.push(k.invoke(t)) : ot(t, "module")
                    } catch (r) {
                        throw ci(t) && (t = t[t.length - 1]), r.message && r.stack && -1 == r.stack.indexOf(r.message) && (r = r.message + "\n" + r.stack), Vi("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, r.stack || r.message || r)
                    }
                }
            }), n
        }

        function m(t, n) {
            function i(e, i) {
                if (t.hasOwnProperty(e)) {
                    if (t[e] === y) throw Vi("cdep", "Circular dependency found: {0}", e + " <- " + x.join(" <- "));
                    return t[e]
                }
                try {
                    return x.unshift(e), t[e] = y, t[e] = n(e, i)
                } catch (r) {
                    throw t[e] === y && delete t[e], r
                } finally {
                    x.shift()
                }
            }

            function r(t, n, r, o) {
                "string" == typeof r && (o = r, r = null);
                var s, a, u, l = [],
                    c = Bt(t, e, o);
                for (a = 0, s = c.length; s > a; a++) {
                    if (u = c[a], "string" != typeof u) throw Vi("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
                    l.push(r && r.hasOwnProperty(u) ? r[u] : i(u, o))
                }
                return ci(t) && (t = t[s]), t.apply(n, l)
            }

            function o(t, e, n) {
                var i = Object.create((ci(t) ? t[t.length - 1] : t).prototype),
                    o = r(t, i, e, n);
                return $(o) || C(o) ? o : i
            }
            return {
                invoke: r,
                instantiate: o,
                get: i,
                annotate: Bt,
                has: function(e) {
                    return T.hasOwnProperty(e + w) || t.hasOwnProperty(e)
                }
            }
        }
        e = e === !0;
        var y = {},
            w = "Provider",
            x = [],
            S = new Ft([], !0),
            T = {
                $provide: {
                    provider: i(r),
                    factory: i(a),
                    service: i(l),
                    value: i(c),
                    constant: i(f),
                    decorator: h
                }
            },
            k = T.$injector = m(T, function(t, e) {
                throw ai.isString(e) && x.push(e), Vi("unpr", "Unknown provider: {0}", x.join(" <- "))
            }),
            E = {},
            A = E.$injector = m(E, function(t, e) {
                var i = k.get(t + w, e);
                return A.invoke(i.$get, i, n, t)
            });
        return o(d(t), function(t) {
            A.invoke(t || p)
        }), A
    }

    function zt() {
        var t = !0;
        this.disableAutoScrolling = function() {
            t = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(e, n, i) {
            function r(t) {
                var e = null;
                return Array.prototype.some.call(t, function(t) {
                    return "a" === O(t) ? (e = t, !0) : void 0
                }), e
            }

            function o() {
                var t = a.yOffset;
                if (C(t)) t = t();
                else if (R(t)) {
                    var n = t[0],
                        i = e.getComputedStyle(n);
                    t = "fixed" !== i.position ? 0 : n.getBoundingClientRect().bottom
                } else w(t) || (t = 0);
                return t
            }

            function s(t) {
                if (t) {
                    t.scrollIntoView();
                    var n = o();
                    if (n) {
                        var i = t.getBoundingClientRect().top;
                        e.scrollBy(0, i - n)
                    }
                } else e.scrollTo(0, 0)
            }

            function a() {
                var t, e = n.hash();
                e ? (t = u.getElementById(e)) ? s(t) : (t = r(u.getElementsByName(e))) ? s(t) : "top" === e && s(null) : s(null)
            }
            var u = e.document;
            return t && i.$watch(function() {
                return n.hash()
            }, function(t, e) {
                (t !== e || "" !== t) && It(function() {
                    i.$evalAsync(a)
                })
            }), a
        }]
    }

    function Wt() {
        this.$get = ["$$rAF", "$timeout", function(t, e) {
            return t.supported ? function(e) {
                return t(e)
            } : function(t) {
                return e(t, 0, !1)
            }
        }]
    }

    function Kt(t, e, i, r) {
        function s(t) {
            try {
                t.apply(null, M(arguments, 1))
            } finally {
                if (C--, 0 === C)
                    for (; S.length;) try {
                        S.pop()()
                    } catch (e) {
                        i.error(e)
                    }
            }
        }

        function a(t) {
            var e = t.indexOf("#");
            return -1 === e ? "" : t.substr(e + 1)
        }

        function u(t, e) {
            ! function n() {
                o(k, function(t) {
                    t()
                }), T = e(n, t)
            }()
        }

        function l() {
            c(), f()
        }

        function c() {
            E = t.history.state, E = v(E) ? null : E, P(E, O) && (E = O), O = E
        }

        function f() {
            (_ !== d.url() || A !== E) && (_ = d.url(), A = E, o(R, function(t) {
                t(d.url(), E)
            }))
        }

        function h(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        }
        var d = this,
            m = e[0],
            g = t.location,
            y = t.history,
            $ = t.setTimeout,
            w = t.clearTimeout,
            x = {};
        d.isMock = !1;
        var C = 0,
            S = [];
        d.$$completeOutstandingRequest = s, d.$$incOutstandingRequestCount = function() {
            C++
        }, d.notifyWhenNoOutstandingRequests = function(t) {
            o(k, function(t) {
                t()
            }), 0 === C ? t() : S.push(t)
        };
        var T, k = [];
        d.addPollFn = function(t) {
            return v(T) && u(100, $), k.push(t), t
        };
        var E, A, _ = g.href,
            j = e.find("base"),
            N = null;
        c(), A = E, d.url = function(e, n, i) {
            if (v(i) && (i = null), g !== t.location && (g = t.location), y !== t.history && (y = t.history), e) {
                var o = A === i;
                if (_ === e && (!r.history || o)) return d;
                var s = _ && we(_) === we(e);
                return _ = e, A = i, !r.history || s && o ? (s || (N = e), n ? g.replace(e) : s ? g.hash = a(e) : g.href = e) : (y[n ? "replaceState" : "pushState"](i, "", e), c(), A = E), d
            }
            return N || g.href.replace(/%27/g, "'")
        }, d.state = function() {
            return E
        };
        var R = [],
            D = !1,
            O = null;
        d.onUrlChange = function(e) {
            return D || (r.history && Zn(t).on("popstate", l), Zn(t).on("hashchange", l), D = !0), R.push(e), e
        }, d.$$checkUrlChange = f, d.baseHref = function() {
            var t = j.attr("href");
            return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var I = {},
            q = "",
            H = d.baseHref();
        d.cookies = function(t, e) {
            var r, o, s, a, u;
            if (!t) {
                if (m.cookie !== q)
                    for (q = m.cookie, o = q.split("; "), I = {}, a = 0; a < o.length; a++) s = o[a], u = s.indexOf("="), u > 0 && (t = h(s.substring(0, u)), I[t] === n && (I[t] = h(s.substring(u + 1))));
                return I
            }
            e === n ? m.cookie = encodeURIComponent(t) + "=;path=" + H + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : b(e) && (r = (m.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + ";path=" + H).length + 1, r > 4096 && i.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + r + " > 4096 bytes)!"))
        }, d.defer = function(t, e) {
            var n;
            return C++, n = $(function() {
                delete x[n], s(t)
            }, e || 0), x[n] = !0, n
        }, d.defer.cancel = function(t) {
            return x[t] ? (delete x[t], w(t), s(p), !0) : !1
        }
    }

    function Xt() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(t, e, n, i) {
            return new Kt(t, i, e, n)
        }]
    }

    function Qt() {
        this.$get = function() {
            function t(t, n) {
                function r(t) {
                    t != h && (d ? d == t && (d = t.n) : d = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
                }

                function o(t, e) {
                    t != e && (t && (t.p = e), e && (e.n = t))
                }
                if (t in e) throw i("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
                var s = 0,
                    a = f({}, n, {
                        id: t
                    }),
                    u = {},
                    l = n && n.capacity || Number.MAX_VALUE,
                    c = {},
                    h = null,
                    d = null;
                return e[t] = {
                    put: function(t, e) {
                        if (l < Number.MAX_VALUE) {
                            var n = c[t] || (c[t] = {
                                key: t
                            });
                            r(n)
                        }
                        if (!v(e)) return t in u || s++, u[t] = e, s > l && this.remove(d.key), e
                    },
                    get: function(t) {
                        if (l < Number.MAX_VALUE) {
                            var e = c[t];
                            if (!e) return;
                            r(e)
                        }
                        return u[t]
                    },
                    remove: function(t) {
                        if (l < Number.MAX_VALUE) {
                            var e = c[t];
                            if (!e) return;
                            e == h && (h = e.p), e == d && (d = e.n), o(e.n, e.p), delete c[t]
                        }
                        delete u[t], s--
                    },
                    removeAll: function() {
                        u = {}, s = 0, c = {}, h = d = null
                    },
                    destroy: function() {
                        u = null, a = null, c = null, delete e[t]
                    },
                    info: function() {
                        return f({}, a, {
                            size: s
                        })
                    }
                }
            }
            var e = {};
            return t.info = function() {
                var t = {};
                return o(e, function(e, n) {
                    t[n] = e.info()
                }), t
            }, t.get = function(t) {
                return e[t]
            }, t
        }
    }

    function Gt() {
        this.$get = ["$cacheFactory", function(t) {
            return t("templates")
        }]
    }

    function Jt(t, i) {
        function r(t, e) {
            var n = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                i = {};
            return o(t, function(t, r) {
                var o = t.match(n);
                if (!o) throw Ki("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, r, t);
                i[r] = {
                    mode: o[1][0],
                    collection: "*" === o[2],
                    optional: "?" === o[3],
                    attrName: o[4] || r
                }
            }), i
        }
        var s = {},
            a = "Directive",
            l = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            c = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            h = D("ngSrc,ngSrcset,src,srcset"),
            v = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            w = /^(on[a-z]+|formaction)$/;
        this.directive = function S(e, n) {
            return st(e, "directive"), b(e) ? (rt(n, "directiveFactory"), s.hasOwnProperty(e) || (s[e] = [], t.factory(e + a, ["$injector", "$exceptionHandler", function(t, n) {
                var i = [];
                return o(s[e], function(o, s) {
                    try {
                        var a = t.invoke(o);
                        C(a) ? a = {
                            compile: g(a)
                        } : !a.compile && a.link && (a.compile = g(a.link)), a.priority = a.priority || 0, a.index = s, a.name = a.name || e, a.require = a.require || a.controller && a.name, a.restrict = a.restrict || "EA", $(a.scope) && (a.$$isolateBindings = r(a.scope, a.name)), i.push(a)
                    } catch (u) {
                        n(u)
                    }
                }), i
            }])), s[e].push(n)) : o(e, u(S)), this
        }, this.aHrefSanitizationWhitelist = function(t) {
            return y(t) ? (i.aHrefSanitizationWhitelist(t), this) : i.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(t) {
            return y(t) ? (i.imgSrcSanitizationWhitelist(t), this) : i.imgSrcSanitizationWhitelist()
        };
        var x = !0;
        this.debugInfoEnabled = function(t) {
            return y(t) ? (x = t, this) : x
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(t, i, r, u, g, y, S, T, E, A, _) {
            function j(t, e) {
                try {
                    t.addClass(e)
                } catch (n) {}
            }

            function N(t, e, n, i, r) {
                t instanceof Zn || (t = Zn(t)), o(t, function(e, n) {
                    e.nodeType == yi && e.nodeValue.match(/\S+/) && (t[n] = Zn(e).wrap("<span></span>").parent()[0])
                });
                var s = D(t, e, t, n, i, r);
                N.$$addScopeClass(t);
                var a = null;
                return function(e, n, i) {
                    rt(e, "scope"), i = i || {};
                    var r = i.parentBoundTranscludeFn,
                        o = i.transcludeControllers,
                        u = i.futureParentElement;
                    r && r.$$boundTransclude && (r = r.$$boundTransclude), a || (a = R(u));
                    var l;
                    if (l = "html" !== a ? Zn(Y(a, Zn("<div>").append(t).html())) : n ? qi.clone.call(t) : t, o)
                        for (var c in o) l.data("$" + c + "Controller", o[c].instance);
                    return N.$$addScopeInfo(l, e), n && n(l, e), s && s(e, l, l, r), l
                }
            }

            function R(t) {
                var e = t && t[0];
                return e && "foreignobject" !== O(e) && e.toString().match(/SVG/) ? "svg" : "html"
            }

            function D(t, e, i, r, o, s) {
                function a(t, i, r, o) {
                    var s, a, u, l, c, f, h, d, g;
                    if (p) {
                        var v = i.length;
                        for (g = new Array(v), c = 0; c < m.length; c += 3) h = m[c], g[h] = i[h]
                    } else g = i;
                    for (c = 0, f = m.length; f > c;) u = g[m[c++]], s = m[c++], a = m[c++], s ? (s.scope ? (l = t.$new(), N.$$addScopeInfo(Zn(u), l)) : l = t, d = s.transcludeOnThisElement ? q(t, s.transclude, o, s.elementTranscludeOnThisElement) : !s.templateOnThisElement && o ? o : !o && e ? q(t, e) : null, s(a, l, u, r, d)) : a && a(t, u.childNodes, n, o)
                }
                for (var u, l, c, f, h, d, p, m = [], g = 0; g < t.length; g++) u = new st, l = H(t[g], [], u, 0 === g ? r : n, o), c = l.length ? U(l, t[g], u, e, i, null, [], [], s) : null, c && c.scope && N.$$addScopeClass(u.$$element), h = c && c.terminal || !(f = t[g].childNodes) || !f.length ? null : D(f, c ? (c.transcludeOnThisElement || !c.templateOnThisElement) && c.transclude : e), (c || h) && (m.push(g, c, h), d = !0, p = p || c), s = null;
                return d ? a : null
            }

            function q(t, e, n, i) {
                var r = function(i, r, o, s, a) {
                    return i || (i = t.$new(!1, a), i.$$transcluded = !0), e(i, r, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: s
                    })
                };
                return r
            }

            function H(t, e, n, i, r) {
                var o, s, a = t.nodeType,
                    u = n.$attr;
                switch (a) {
                    case vi:
                        V(e, Yt(O(t)), "E", i, r);
                        for (var f, h, d, p, m, g, v = t.attributes, y = 0, $ = v && v.length; $ > y; y++) {
                            var w = !1,
                                x = !1;
                            f = v[y], h = f.name, m = fi(f.value), p = Yt(h), (g = ft.test(p)) && (h = h.replace(Xi, "").substr(8).replace(/_(.)/g, function(t, e) {
                                return e.toUpperCase()
                            }));
                            var C = p.replace(/(Start|End)$/, "");
                            W(C) && p === C + "Start" && (w = h, x = h.substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6)), d = Yt(h.toLowerCase()), u[d] = h, (g || !n.hasOwnProperty(d)) && (n[d] = m, qt(t, d) && (n[d] = !0)), tt(t, e, m, d, g), V(e, d, "A", i, r, w, x)
                        }
                        if (s = t.className, b(s) && "" !== s)
                            for (; o = c.exec(s);) d = Yt(o[2]), V(e, d, "C", i, r) && (n[d] = fi(o[3])), s = s.substr(o.index + o[0].length);
                        break;
                    case yi:
                        J(e, t.nodeValue);
                        break;
                    case $i:
                        try {
                            o = l.exec(t.nodeValue), o && (d = Yt(o[1]), V(e, d, "M", i, r) && (n[d] = fi(o[2])))
                        } catch (S) {}
                }
                return e.sort(Q), e
            }

            function L(t, e, n) {
                var i = [],
                    r = 0;
                if (e && t.hasAttribute && t.hasAttribute(e)) {
                    do {
                        if (!t) throw Ki("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
                        t.nodeType == vi && (t.hasAttribute(e) && r++, t.hasAttribute(n) && r--), i.push(t), t = t.nextSibling
                    } while (r > 0)
                } else i.push(t);
                return Zn(i)
            }

            function F(t, e, n) {
                return function(i, r, o, s, a) {
                    return r = L(r[0], e, n), t(i, r, o, s, a)
                }
            }

            function U(t, s, a, u, l, c, f, h, d) {
                function p(t, e, n, i) {
                    t && (n && (t = F(t, n, i)), t.require = T.require, t.directiveName = E, (O === T || T.$$isolateScope) && (t = it(t, {
                        isolateScope: !0
                    })), f.push(t)), e && (n && (e = F(e, n, i)), e.require = T.require, e.directiveName = E, (O === T || T.$$isolateScope) && (e = it(e, {
                        isolateScope: !0
                    })), h.push(e))
                }

                function m(t, e, n, i) {
                    var r, s, a = "data",
                        u = !1,
                        l = n;
                    if (b(e)) {
                        if (s = e.match(v), e = e.substring(s[0].length), s[3] && (s[1] ? s[3] = null : s[1] = s[3]), "^" === s[1] ? a = "inheritedData" : "^^" === s[1] && (a = "inheritedData", l = n.parent()), "?" === s[2] && (u = !0), r = null, i && "data" === a && (r = i[e]) && (r = r.instance), r = r || l[a]("$" + e + "Controller"), !r && !u) throw Ki("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", e, t);
                        return r || null
                    }
                    return ci(e) && (r = [], o(e, function(e) {
                        r.push(m(t, e, n, i))
                    })), r
                }

                function w(t, e, r, u, l) {
                    function c(t, e, i) {
                        var r;
                        return k(t) || (i = e, e = t, t = n), W && (r = w), i || (i = W ? C.parent() : C), l(t, e, r, i, _)
                    }
                    var d, p, v, $, b, w, x, C, T;
                    if (s === r ? (T = a, C = a.$$element) : (C = Zn(r), T = new st(C, a)), O && (b = e.$new(!0)), l && (x = c, x.$$boundTransclude = l), D && (S = {}, w = {}, o(D, function(t) {
                            var n, i = {
                                $scope: t === O || t.$$isolateScope ? b : e,
                                $element: C,
                                $attrs: T,
                                $transclude: x
                            };
                            $ = t.controller, "@" == $ && ($ = T[t.name]), n = y($, i, !0, t.controllerAs), w[t.name] = n, W || C.data("$" + t.name + "Controller", n.instance), S[t.name] = n
                        })), O) {
                        N.$$addScopeInfo(C, b, !0, !(I && (I === O || I === O.$$originalDirective))), N.$$addScopeClass(C, !0);
                        var E = S && S[O.name],
                            A = b;
                        E && E.identifier && O.bindToController === !0 && (A = E.instance), o(b.$$isolateBindings = O.$$isolateBindings, function(t, n) {
                            var r, o, s, a, u = t.attrName,
                                l = t.optional,
                                c = t.mode;
                            switch (c) {
                                case "@":
                                    T.$observe(u, function(t) {
                                        A[n] = t
                                    }), T.$$observers[u].$$scope = e, T[u] && (A[n] = i(T[u])(e));
                                    break;
                                case "=":
                                    if (l && !T[u]) return;
                                    o = g(T[u]), a = o.literal ? P : function(t, e) {
                                        return t === e || t !== t && e !== e
                                    }, s = o.assign || function() {
                                        throw r = A[n] = o(e), Ki("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", T[u], O.name)
                                    }, r = A[n] = o(e);
                                    var f = function(t) {
                                        return a(t, A[n]) || (a(t, r) ? s(e, t = A[n]) : A[n] = t), r = t
                                    };
                                    f.$stateful = !0;
                                    var h;
                                    h = t.collection ? e.$watchCollection(T[u], f) : e.$watch(g(T[u], f), null, o.literal), b.$on("$destroy", h);
                                    break;
                                case "&":
                                    o = g(T[u]), A[n] = function(t) {
                                        return o(e, t)
                                    }
                            }
                        })
                    }
                    for (S && (o(S, function(t) {
                            t()
                        }), S = null), d = 0, p = f.length; p > d; d++) v = f[d], ot(v, v.isolateScope ? b : e, C, T, v.require && m(v.directiveName, v.require, C, w), x);
                    var _ = e;
                    for (O && (O.template || null === O.templateUrl) && (_ = b), t && t(_, r.childNodes, n, l), d = h.length - 1; d >= 0; d--) v = h[d], ot(v, v.isolateScope ? b : e, C, T, v.require && m(v.directiveName, v.require, C, w), x)
                }
                d = d || {};
                for (var x, S, T, E, A, _, j, R = -Number.MAX_VALUE, D = d.controllerDirectives, O = d.newIsolateScopeDirective, I = d.templateDirective, q = d.nonTlbTranscludeDirective, U = !1, V = !1, W = d.hasElementTranscludeDirective, Q = a.$$element = Zn(s), J = c, Z = u, tt = 0, nt = t.length; nt > tt; tt++) {
                    T = t[tt];
                    var rt = T.$$start,
                        at = T.$$end;
                    if (rt && (Q = L(s, rt, at)), A = n, R > T.priority) break;
                    if ((j = T.scope) && (T.templateUrl || ($(j) ? (G("new/isolated scope", O || x, T, Q), O = T) : G("new/isolated scope", O, T, Q)), x = x || T), E = T.name, !T.templateUrl && T.controller && (j = T.controller, D = D || {}, G("'" + E + "' controller", D[E], T, Q), D[E] = T), (j = T.transclude) && (U = !0, T.$$tlb || (G("transclusion", q, T, Q), q = T), "element" == j ? (W = !0, R = T.priority, A = Q, Q = a.$$element = Zn(e.createComment(" " + E + ": " + a[E] + " ")), s = Q[0], et(l, M(A), s), Z = N(A, u, R, J && J.name, {
                            nonTlbTranscludeDirective: q
                        })) : (A = Zn(wt(s)).contents(), Q.empty(), Z = N(A, u))), T.template)
                        if (V = !0, G("template", I, T, Q), I = T, j = C(T.template) ? T.template(Q, a) : T.template, j = ct(j), T.replace) {
                            if (J = T, A = gt(j) ? [] : te(Y(T.templateNamespace, fi(j))), s = A[0], 1 != A.length || s.nodeType !== vi) throw Ki("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", E, "");
                            et(l, Q, s);
                            var ut = {
                                    $attr: {}
                                },
                                lt = H(s, [], ut),
                                ft = t.splice(tt + 1, t.length - (tt + 1));
                            O && B(lt), t = t.concat(lt).concat(ft), K(a, ut), nt = t.length
                        } else Q.html(j);
                    if (T.templateUrl) V = !0, G("template", I, T, Q), I = T, T.replace && (J = T), w = X(t.splice(tt, t.length - tt), Q, a, l, U && Z, f, h, {
                        controllerDirectives: D,
                        newIsolateScopeDirective: O,
                        templateDirective: I,
                        nonTlbTranscludeDirective: q
                    }), nt = t.length;
                    else if (T.compile) try {
                        _ = T.compile(Q, a, Z), C(_) ? p(null, _, rt, at) : _ && p(_.pre, _.post, rt, at)
                    } catch (ht) {
                        r(ht, z(Q))
                    }
                    T.terminal && (w.terminal = !0, R = Math.max(R, T.priority))
                }
                return w.scope = x && x.scope === !0, w.transcludeOnThisElement = U, w.elementTranscludeOnThisElement = W, w.templateOnThisElement = V, w.transclude = Z, d.hasElementTranscludeDirective = W, w
            }

            function B(t) {
                for (var e = 0, n = t.length; n > e; e++) t[e] = d(t[e], {
                    $$isolateScope: !0
                })
            }

            function V(e, i, o, u, l, c, f) {
                if (i === l) return null;
                var h = null;
                if (s.hasOwnProperty(i))
                    for (var p, m = t.get(i + a), g = 0, v = m.length; v > g; g++) try {
                        p = m[g], (u === n || u > p.priority) && -1 != p.restrict.indexOf(o) && (c && (p = d(p, {
                            $$start: c,
                            $$end: f
                        })), e.push(p), h = p)
                    } catch (y) {
                        r(y)
                    }
                return h
            }

            function W(e) {
                if (s.hasOwnProperty(e))
                    for (var n, i = t.get(e + a), r = 0, o = i.length; o > r; r++)
                        if (n = i[r], n.multiElement) return !0;
                return !1
            }

            function K(t, e) {
                var n = e.$attr,
                    i = t.$attr,
                    r = t.$$element;
                o(t, function(i, r) {
                    "$" != r.charAt(0) && (e[r] && e[r] !== i && (i += ("style" === r ? ";" : " ") + e[r]), t.$set(r, i, !0, n[r]))
                }), o(e, function(e, o) {
                    "class" == o ? (j(r, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (r.attr("style", r.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, i[o] = n[o])
                })
            }

            function X(t, e, n, i, r, s, a, l) {
                var c, h, d = [],
                    p = e[0],
                    m = t.shift(),
                    g = f({}, m, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: m
                    }),
                    v = C(m.templateUrl) ? m.templateUrl(e, n) : m.templateUrl,
                    y = m.templateNamespace;
                return e.empty(), u(E.getTrustedResourceUrl(v)).then(function(u) {
                        var f, b, w, x;
                        if (u = ct(u), m.replace) {
                            if (w = gt(u) ? [] : te(Y(y, fi(u))), f = w[0], 1 != w.length || f.nodeType !== vi) throw Ki("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", m.name, v);
                            b = {
                                $attr: {}
                            }, et(i, e, f);
                            var C = H(f, [], b);
                            $(m.scope) && B(C), t = C.concat(t), K(n, b)
                        } else f = p, e.html(u);
                        for (t.unshift(g), c = U(t, f, n, r, e, m, s, a, l), o(i, function(t, n) {
                                t == f && (i[n] = e[0])
                            }), h = D(e[0].childNodes, r); d.length;) {
                            var S = d.shift(),
                                T = d.shift(),
                                k = d.shift(),
                                E = d.shift(),
                                A = e[0];
                            if (!S.$$destroyed) {
                                if (T !== p) {
                                    var _ = T.className;
                                    l.hasElementTranscludeDirective && m.replace || (A = wt(f)), et(k, Zn(T), A), j(Zn(A), _)
                                }
                                x = c.transcludeOnThisElement ? q(S, c.transclude, E) : E, c(h, S, A, i, x)
                            }
                        }
                        d = null
                    }),
                    function(t, e, n, i, r) {
                        var o = r;
                        e.$$destroyed || (d ? d.push(e, n, i, o) : (c.transcludeOnThisElement && (o = q(e, c.transclude, r)), c(h, e, n, i, o)))
                    }
            }

            function Q(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
            }

            function G(t, e, n, i) {
                if (e) throw Ki("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", e.name, n.name, t, z(i))
            }

            function J(t, e) {
                var n = i(e, !0);
                n && t.push({
                    priority: 0,
                    compile: function(t) {
                        var e = t.parent(),
                            i = !!e.length;
                        return i && N.$$addBindingClass(e),
                            function(t, e) {
                                var r = e.parent();
                                i || N.$$addBindingClass(r), N.$$addBindingInfo(r, n.expressions), t.$watch(n, function(t) {
                                    e[0].nodeValue = t
                                })
                            }
                    }
                })
            }

            function Y(t, n) {
                switch (t = Kn(t || "html")) {
                    case "svg":
                    case "math":
                        var i = e.createElement("div");
                        return i.innerHTML = "<" + t + ">" + n + "</" + t + ">", i.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function Z(t, e) {
                if ("srcdoc" == e) return E.HTML;
                var n = O(t);
                return "xlinkHref" == e || "form" == n && "action" == e || "img" != n && ("src" == e || "ngSrc" == e) ? E.RESOURCE_URL : void 0
            }

            function tt(t, e, n, r, o) {
                var s = Z(t, r);
                o = h[r] || o;
                var a = i(n, !0, s, o);
                if (a) {
                    if ("multiple" === r && "select" === O(t)) throw Ki("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", z(t));
                    e.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(t, e, u) {
                                    var l = u.$$observers || (u.$$observers = {});
                                    if (w.test(r)) throw Ki("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var c = u[r];
                                    c !== n && (a = c && i(c, !0, s, o), n = c), a && (u[r] = a(t), (l[r] || (l[r] = [])).$$inter = !0, (u.$$observers && u.$$observers[r].$$scope || t).$watch(a, function(t, e) {
                                        "class" === r && t != e ? u.$updateClass(t, e) : u.$set(r, t)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function et(t, n, i) {
                var r, o, s = n[0],
                    a = n.length,
                    u = s.parentNode;
                if (t)
                    for (r = 0, o = t.length; o > r; r++)
                        if (t[r] == s) {
                            t[r++] = i;
                            for (var l = r, c = l + a - 1, f = t.length; f > l; l++, c++) f > c ? t[l] = t[c] : delete t[l];
                            t.length -= a - 1, t.context === s && (t.context = i);
                            break
                        }
                u && u.replaceChild(i, s);
                var h = e.createDocumentFragment();
                h.appendChild(s), Zn(i).data(Zn(s).data()), ti ? (li = !0, ti.cleanData([s])) : delete Zn.cache[s[Zn.expando]];
                for (var d = 1, p = n.length; p > d; d++) {
                    var m = n[d];
                    Zn(m).remove(), h.appendChild(m), delete n[d]
                }
                n[0] = i, n.length = 1
            }

            function it(t, e) {
                return f(function() {
                    return t.apply(null, arguments)
                }, t, e)
            }

            function ot(t, e, n, i, o, s) {
                try {
                    t(e, n, i, o, s)
                } catch (a) {
                    r(a, z(n))
                }
            }
            var st = function(t, e) {
                if (e) {
                    var n, i, r, o = Object.keys(e);
                    for (n = 0, i = o.length; i > n; n++) r = o[n], this[r] = e[r]
                } else this.$attr = {};
                this.$$element = t
            };
            st.prototype = {
                $normalize: Yt,
                $addClass: function(t) {
                    t && t.length > 0 && A.addClass(this.$$element, t)
                },
                $removeClass: function(t) {
                    t && t.length > 0 && A.removeClass(this.$$element, t)
                },
                $updateClass: function(t, e) {
                    var n = Zt(t, e);
                    n && n.length && A.addClass(this.$$element, n);
                    var i = Zt(e, t);
                    i && i.length && A.removeClass(this.$$element, i)
                },
                $set: function(t, e, i, s) {
                    var a, u = this.$$element[0],
                        l = qt(u, t),
                        c = Ht(u, t),
                        f = t;
                    if (l ? (this.$$element.prop(t, e), s = l) : c && (this[c] = e, f = c), this[t] = e, s ? this.$attr[t] = s : (s = this.$attr[t], s || (this.$attr[t] = s = nt(t, "-"))), a = O(this.$$element), "a" === a && "href" === t || "img" === a && "src" === t) this[t] = e = _(e, "src" === t);
                    else if ("img" === a && "srcset" === t) {
                        for (var h = "", d = fi(e), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, m = /\s/.test(d) ? p : /(,)/, g = d.split(m), v = Math.floor(g.length / 2), y = 0; v > y; y++) {
                            var $ = 2 * y;
                            h += _(fi(g[$]), !0), h += " " + fi(g[$ + 1])
                        }
                        var b = fi(g[2 * y]).split(/\s/);
                        h += _(fi(b[0]), !0), 2 === b.length && (h += " " + fi(b[1])), this[t] = e = h
                    }
                    i !== !1 && (null === e || e === n ? this.$$element.removeAttr(s) : this.$$element.attr(s, e));
                    var w = this.$$observers;
                    w && o(w[f], function(t) {
                        try {
                            t(e)
                        } catch (n) {
                            r(n)
                        }
                    })
                },
                $observe: function(t, e) {
                    var n = this,
                        i = n.$$observers || (n.$$observers = lt()),
                        r = i[t] || (i[t] = []);
                    return r.push(e), S.$evalAsync(function() {
                            !r.$$inter && n.hasOwnProperty(t) && e(n[t])
                        }),
                        function() {
                            I(r, e)
                        }
                }
            };
            var at = i.startSymbol(),
                ut = i.endSymbol(),
                ct = "{{" == at || "}}" == ut ? m : function(t) {
                    return t.replace(/\{\{/g, at).replace(/}}/g, ut)
                },
                ft = /^ngAttr[A-Z]/;
            return N.$$addBindingInfo = x ? function(t, e) {
                var n = t.data("$binding") || [];
                ci(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
            } : p, N.$$addBindingClass = x ? function(t) {
                j(t, "ng-binding")
            } : p, N.$$addScopeInfo = x ? function(t, e, n, i) {
                var r = n ? i ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                t.data(r, e)
            } : p, N.$$addScopeClass = x ? function(t, e) {
                j(t, e ? "ng-isolate-scope" : "ng-scope")
            } : p, N
        }]
    }

    function Yt(t) {
        return mt(t.replace(Xi, ""))
    }

    function Zt(t, e) {
        var n = "",
            i = t.split(/\s+/),
            r = e.split(/\s+/);
        t: for (var o = 0; o < i.length; o++) {
            for (var s = i[o], a = 0; a < r.length; a++)
                if (s == r[a]) continue t;
            n += (n.length > 0 ? " " : "") + s
        }
        return n
    }

    function te(t) {
        t = Zn(t);
        var e = t.length;
        if (1 >= e) return t;
        for (; e--;) {
            var n = t[e];
            n.nodeType === $i && ii.call(t, e, 1)
        }
        return t
    }

    function ee() {
        var t = {},
            e = !1,
            r = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(e, n) {
            st(e, "controller"), $(e) ? f(t, e) : t[e] = n
        }, this.allowGlobals = function() {
            e = !0
        }, this.$get = ["$injector", "$window", function(o, s) {
            function a(t, e, n, r) {
                if (!t || !$(t.$scope)) throw i("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", r, e);
                t.$scope[e] = n
            }
            return function(i, u, l, c) {
                var h, d, p, m;
                if (l = l === !0, c && b(c) && (m = c), b(i) && (d = i.match(r), p = d[1], m = m || d[3], i = t.hasOwnProperty(p) ? t[p] : at(u.$scope, p, !0) || (e ? at(s, p, !0) : n), ot(i, p, !0)), l) {
                    var g = (ci(i) ? i[i.length - 1] : i).prototype;
                    return h = Object.create(g), m && a(u, m, h, p || i.name), f(function() {
                        return o.invoke(i, h, u, p), h
                    }, {
                        instance: h,
                        identifier: m
                    })
                }
                return h = o.instantiate(i, u, p), m && a(u, m, h, p || i.name), h
            }
        }]
    }

    function ne() {
        this.$get = ["$window", function(t) {
            return Zn(t.document)
        }]
    }

    function ie() {
        this.$get = ["$log", function(t) {
            return function(e, n) {
                t.error.apply(t, arguments)
            }
        }]
    }

    function re(t, e) {
        if (b(t)) {
            var n = t.replace(Zi, "").trim();
            if (n) {
                var i = e("Content-Type");
                (i && 0 === i.indexOf(Qi) || oe(n)) && (t = V(n))
            }
        }
        return t
    }

    function oe(t) {
        var e = t.match(Ji);
        return e && Yi[e[0]].test(t)
    }

    function se(t) {
        var e, n, i, r = lt();
        return t ? (o(t.split("\n"), function(t) {
            i = t.indexOf(":"), e = Kn(fi(t.substr(0, i))), n = fi(t.substr(i + 1)), e && (r[e] = r[e] ? r[e] + ", " + n : n)
        }), r) : r
    }

    function ae(t) {
        var e = $(t) ? t : n;
        return function(n) {
            if (e || (e = se(t)), n) {
                var i = e[Kn(n)];
                return void 0 === i && (i = null), i
            }
            return e
        }
    }

    function ue(t, e, n, i) {
        return C(i) ? i(t, e, n) : (o(i, function(i) {
            t = i(t, e, n)
        }), t)
    }

    function le(t) {
        return t >= 200 && 300 > t
    }

    function ce() {
        var t = this.defaults = {
                transformResponse: [re],
                transformRequest: [function(t) {
                    return !$(t) || E(t) || _(t) || A(t) ? t : B(t)
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: H(Gi),
                    put: H(Gi),
                    patch: H(Gi)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            e = !1;
        this.useApplyAsync = function(t) {
            return y(t) ? (e = !!t, this) : e
        };
        var r = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(s, u, l, c, h, d) {
            function p(e) {
                function r(t) {
                    var e = f({}, t);
                    return t.data ? e.data = ue(t.data, t.headers, t.status, u.transformResponse) : e.data = t.data, le(t.status) ? e : h.reject(e)
                }

                function s(t) {
                    var e, n = {};
                    return o(t, function(t, i) {
                        C(t) ? (e = t(), null != e && (n[i] = e)) : n[i] = t
                    }), n
                }

                function a(e) {
                    var n, i, r, o = t.headers,
                        a = f({}, e.headers);
                    o = f({}, o.common, o[Kn(e.method)]);
                    t: for (n in o) {
                        i = Kn(n);
                        for (r in a)
                            if (Kn(r) === i) continue t;
                        a[n] = o[n]
                    }
                    return s(a)
                }
                if (!ai.isObject(e)) throw i("$http")("badreq", "Http request configuration must be an object.  Received: {0}", e);
                var u = f({
                    method: "get",
                    transformRequest: t.transformRequest,
                    transformResponse: t.transformResponse
                }, e);
                u.headers = a(e), u.method = Qn(u.method);
                var l = function(e) {
                        var i = e.headers,
                            s = ue(e.data, ae(i), n, e.transformRequest);
                        return v(s) && o(i, function(t, e) {
                            "content-type" === Kn(e) && delete i[e]
                        }), v(e.withCredentials) && !v(t.withCredentials) && (e.withCredentials = t.withCredentials), w(e, s).then(r, r)
                    },
                    c = [l, n],
                    d = h.when(u);
                for (o(k, function(t) {
                        (t.request || t.requestError) && c.unshift(t.request, t.requestError), (t.response || t.responseError) && c.push(t.response, t.responseError)
                    }); c.length;) {
                    var p = c.shift(),
                        m = c.shift();
                    d = d.then(p, m)
                }
                return d.success = function(t) {
                    return d.then(function(e) {
                        t(e.data, e.status, e.headers, u)
                    }), d
                }, d.error = function(t) {
                    return d.then(null, function(e) {
                        t(e.data, e.status, e.headers, u)
                    }), d
                }, d
            }

            function m(t) {
                o(arguments, function(t) {
                    p[t] = function(e, n) {
                        return p(f(n || {}, {
                            method: t,
                            url: e
                        }))
                    }
                })
            }

            function g(t) {
                o(arguments, function(t) {
                    p[t] = function(e, n, i) {
                        return p(f(i || {}, {
                            method: t,
                            url: e,
                            data: n
                        }))
                    }
                })
            }

            function w(i, r) {
                function o(t, n, i, r) {
                    function o() {
                        a(n, t, i, r)
                    }
                    d && (le(t) ? d.put(x, [t, n, se(i), r]) : d.remove(x)), e ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply())
                }

                function a(t, e, n, r) {
                    e = Math.max(e, 0), (le(e) ? g.resolve : g.reject)({
                        data: t,
                        status: e,
                        headers: ae(n),
                        config: i,
                        statusText: r
                    })
                }

                function l(t) {
                    a(t.data, t.status, H(t.headers()), t.statusText)
                }

                function f() {
                    var t = p.pendingRequests.indexOf(i); - 1 !== t && p.pendingRequests.splice(t, 1)
                }
                var d, m, g = h.defer(),
                    b = g.promise,
                    w = i.headers,
                    x = S(i.url, i.params);
                if (p.pendingRequests.push(i), b.then(f, f), !i.cache && !t.cache || i.cache === !1 || "GET" !== i.method && "JSONP" !== i.method || (d = $(i.cache) ? i.cache : $(t.cache) ? t.cache : T), d && (m = d.get(x), y(m) ? N(m) ? m.then(l, l) : ci(m) ? a(m[1], m[0], H(m[2]), m[3]) : a(m, 200, {}, "OK") : d.put(x, b)), v(m)) {
                    var C = on(i.url) ? u.cookies()[i.xsrfCookieName || t.xsrfCookieName] : n;
                    C && (w[i.xsrfHeaderName || t.xsrfHeaderName] = C), s(i.method, x, r, o, w, i.timeout, i.withCredentials, i.responseType)
                }
                return b
            }

            function S(t, e) {
                if (!e) return t;
                var n = [];
                return a(e, function(t, e) {
                    null === t || v(t) || (ci(t) || (t = [t]), o(t, function(t) {
                        $(t) && (t = x(t) ? t.toISOString() : B(t)), n.push(G(e) + "=" + G(t))
                    }))
                }), n.length > 0 && (t += (-1 == t.indexOf("?") ? "?" : "&") + n.join("&")), t
            }
            var T = l("$http"),
                k = [];
            return o(r, function(t) {
                k.unshift(b(t) ? d.get(t) : d.invoke(t))
            }), p.pendingRequests = [], m("get", "delete", "head", "jsonp"), g("post", "put", "patch"), p.defaults = t, p
        }]
    }

    function fe() {
        return new t.XMLHttpRequest
    }

    function he() {
        this.$get = ["$browser", "$window", "$document", function(t, e, n) {
            return de(t, fe, t.defer, e.angular.callbacks, n[0])
        }]
    }

    function de(t, e, i, r, s) {
        function a(t, e, n) {
            var i = s.createElement("script"),
                o = null;
            return i.type = "text/javascript", i.src = t, i.async = !0, o = function(t) {
                ki(i, "load", o), ki(i, "error", o), s.body.removeChild(i), i = null;
                var a = -1,
                    u = "unknown";
                t && ("load" !== t.type || r[e].called || (t = {
                    type: "error"
                }), u = t.type, a = "error" === t.type ? 404 : 200), n && n(a, u)
            }, Ti(i, "load", o), Ti(i, "error", o), s.body.appendChild(i), o
        }
        return function(s, u, l, c, f, h, d, m) {
            function g() {
                b && b(), w && w.abort()
            }

            function v(e, r, o, s, a) {
                S !== n && i.cancel(S), b = w = null, e(r, o, s, a), t.$$completeOutstandingRequest(p)
            }
            if (t.$$incOutstandingRequestCount(), u = u || t.url(), "jsonp" == Kn(s)) {
                var $ = "_" + (r.counter++).toString(36);
                r[$] = function(t) {
                    r[$].data = t, r[$].called = !0
                };
                var b = a(u.replace("JSON_CALLBACK", "angular.callbacks." + $), $, function(t, e) {
                    v(c, t, r[$].data, "", e), r[$] = p
                })
            } else {
                var w = e();
                w.open(s, u, !0), o(f, function(t, e) {
                    y(t) && w.setRequestHeader(e, t)
                }), w.onload = function() {
                    var t = w.statusText || "",
                        e = "response" in w ? w.response : w.responseText,
                        n = 1223 === w.status ? 204 : w.status;
                    0 === n && (n = e ? 200 : "file" == rn(u).protocol ? 404 : 0), v(c, n, e, w.getAllResponseHeaders(), t)
                };
                var x = function() {
                    v(c, -1, null, null, "")
                };
                if (w.onerror = x, w.onabort = x, d && (w.withCredentials = !0), m) try {
                    w.responseType = m
                } catch (C) {
                    if ("json" !== m) throw C
                }
                w.send(l || null)
            }
            if (h > 0) var S = i(g, h);
            else N(h) && h.then(g)
        }
    }

    function pe() {
        var t = "{{",
            e = "}}";
        this.startSymbol = function(e) {
            return e ? (t = e, this) : t
        }, this.endSymbol = function(t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, i, r) {
            function o(t) {
                return "\\\\\\" + t
            }

            function s(o, s, h, d) {
                function p(n) {
                    return n.replace(l, t).replace(c, e)
                }

                function m(t) {
                    try {
                        return t = _(t), d && !y(t) ? t : j(t)
                    } catch (e) {
                        var n = tr("interr", "Can't interpolate: {0}\n{1}", o, e.toString());
                        i(n)
                    }
                }
                d = !!d;
                for (var g, $, b, w = 0, x = [], S = [], T = o.length, k = [], E = []; T > w;) {
                    if (-1 == (g = o.indexOf(t, w)) || -1 == ($ = o.indexOf(e, g + a))) {
                        w !== T && k.push(p(o.substring(w)));
                        break
                    }
                    w !== g && k.push(p(o.substring(w, g))), b = o.substring(g + a, $), x.push(b), S.push(n(b, m)), w = $ + u, E.push(k.length), k.push("")
                }
                if (h && k.length > 1) throw tr("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
                if (!s || x.length) {
                    var A = function(t) {
                            for (var e = 0, n = x.length; n > e; e++) {
                                if (d && v(t[e])) return;
                                k[E[e]] = t[e]
                            }
                            return k.join("")
                        },
                        _ = function(t) {
                            return h ? r.getTrusted(h, t) : r.valueOf(t)
                        },
                        j = function(t) {
                            if (null == t) return "";
                            switch (typeof t) {
                                case "string":
                                    break;
                                case "number":
                                    t = "" + t;
                                    break;
                                default:
                                    t = B(t)
                            }
                            return t
                        };
                    return f(function(t) {
                        var e = 0,
                            n = x.length,
                            r = new Array(n);
                        try {
                            for (; n > e; e++) r[e] = S[e](t);
                            return A(r)
                        } catch (s) {
                            var a = tr("interr", "Can't interpolate: {0}\n{1}", o, s.toString());
                            i(a)
                        }
                    }, {
                        exp: o,
                        expressions: x,
                        $$watchDelegate: function(t, e, n) {
                            var i;
                            return t.$watchGroup(S, function(n, r) {
                                var o = A(n);
                                C(e) && e.call(this, o, n !== r ? i : o, t), i = o
                            }, n)
                        }
                    })
                }
            }
            var a = t.length,
                u = e.length,
                l = new RegExp(t.replace(/./g, o), "g"),
                c = new RegExp(e.replace(/./g, o), "g");
            return s.startSymbol = function() {
                return t
            }, s.endSymbol = function() {
                return e
            }, s
        }]
    }

    function me() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(t, e, n, i) {
            function r(r, s, a, u) {
                var l = e.setInterval,
                    c = e.clearInterval,
                    f = 0,
                    h = y(u) && !u,
                    d = (h ? i : n).defer(),
                    p = d.promise;
                return a = y(a) ? a : 0, p.then(null, null, r), p.$$intervalId = l(function() {
                    d.notify(f++), a > 0 && f >= a && (d.resolve(f), c(p.$$intervalId), delete o[p.$$intervalId]), h || t.$apply()
                }, s), o[p.$$intervalId] = d, p
            }
            var o = {};
            return r.cancel = function(t) {
                return t && t.$$intervalId in o ? (o[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete o[t.$$intervalId], !0) : !1
            }, r
        }]
    }

    function ge() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\xa4",
                        posSuf: "",
                        negPre: "(\xa4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(t) {
                    return 1 === t ? "one" : "other"
                }
            }
        }
    }

    function ve(t) {
        for (var e = t.split("/"), n = e.length; n--;) e[n] = Q(e[n]);
        return e.join("/")
    }

    function ye(t, e) {
        var n = rn(t);
        e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = h(n.port) || nr[n.protocol] || null
    }

    function $e(t, e) {
        var n = "/" !== t.charAt(0);
        n && (t = "/" + t);
        var i = rn(t);
        e.$$path = decodeURIComponent(n && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname), e.$$search = K(i.search), e.$$hash = decodeURIComponent(i.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }

    function be(t, e) {
        return 0 === e.indexOf(t) ? e.substr(t.length) : void 0
    }

    function we(t) {
        var e = t.indexOf("#");
        return -1 == e ? t : t.substr(0, e)
    }

    function xe(t) {
        return t.replace(/(#.+)|#$/, "$1")
    }

    function Ce(t) {
        return t.substr(0, we(t).lastIndexOf("/") + 1)
    }

    function Se(t) {
        return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
    }

    function Te(t, e) {
        this.$$html5 = !0, e = e || "";
        var i = Ce(t);
        ye(t, this), this.$$parse = function(t) {
            var e = be(i, t);
            if (!b(e)) throw ir("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, i);
            $e(e, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var t = X(this.$$search),
                e = this.$$hash ? "#" + Q(this.$$hash) : "";
            this.$$url = ve(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = i + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(r, o) {
            if (o && "#" === o[0]) return this.hash(o.slice(1)), !0;
            var s, a, u;
            return (s = be(t, r)) !== n ? (a = s, u = (s = be(e, s)) !== n ? i + (be("/", s) || s) : t + a) : (s = be(i, r)) !== n ? u = i + s : i == r + "/" && (u = i), u && this.$$parse(u), !!u
        }
    }

    function ke(t, e) {
        var n = Ce(t);
        ye(t, this), this.$$parse = function(i) {
            function r(t, e, n) {
                var i, r = /^\/[A-Z]:(\/.*)/;
                return 0 === e.indexOf(n) && (e = e.replace(n, "")), r.exec(e) ? t : (i = r.exec(t), i ? i[1] : t)
            }
            var o, s = be(t, i) || be(n, i);
            "#" === s.charAt(0) ? (o = be(e, s), v(o) && (o = s)) : o = this.$$html5 ? s : "", $e(o, this), this.$$path = r(this.$$path, o, t), this.$$compose()
        }, this.$$compose = function() {
            var n = X(this.$$search),
                i = this.$$hash ? "#" + Q(this.$$hash) : "";
            this.$$url = ve(this.$$path) + (n ? "?" + n : "") + i, this.$$absUrl = t + (this.$$url ? e + this.$$url : "")
        }, this.$$parseLinkUrl = function(e, n) {
            return we(t) == we(e) ? (this.$$parse(e), !0) : !1
        }
    }

    function Ee(t, e) {
        this.$$html5 = !0, ke.apply(this, arguments);
        var n = Ce(t);
        this.$$parseLinkUrl = function(i, r) {
            if (r && "#" === r[0]) return this.hash(r.slice(1)), !0;
            var o, s;
            return t == we(i) ? o = i : (s = be(n, i)) ? o = t + e + s : n === i + "/" && (o = n), o && this.$$parse(o), !!o
        }, this.$$compose = function() {
            var n = X(this.$$search),
                i = this.$$hash ? "#" + Q(this.$$hash) : "";
            this.$$url = ve(this.$$path) + (n ? "?" + n : "") + i, this.$$absUrl = t + e + this.$$url
        }
    }

    function Ae(t) {
        return function() {
            return this[t]
        }
    }

    function _e(t, e) {
        return function(n) {
            return v(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
    }

    function je() {
        var t = "",
            e = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(e) {
            return y(e) ? (t = e, this) : t
        }, this.html5Mode = function(t) {
            return j(t) ? (e.enabled = t, this) : $(t) ? (j(t.enabled) && (e.enabled = t.enabled), j(t.requireBase) && (e.requireBase = t.requireBase), j(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this) : e
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, i, r, o, s) {
            function a(t, e, n) {
                var r = l.url(),
                    o = l.$$state;
                try {
                    i.url(t, e, n), l.$$state = i.state()
                } catch (s) {
                    throw l.url(r), l.$$state = o, s
                }
            }

            function u(t, e) {
                n.$broadcast("$locationChangeSuccess", l.absUrl(), t, l.$$state, e)
            }
            var l, c, f, h = i.baseHref(),
                d = i.url();
            if (e.enabled) {
                if (!h && e.requireBase) throw ir("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                f = Se(d) + (h || "/"), c = r.history ? Te : Ee
            } else f = we(d), c = ke;
            l = new c(f, "#" + t), l.$$parseLinkUrl(d, d), l.$$state = i.state();
            var p = /^\s*(javascript|mailto):/i;
            o.on("click", function(t) {
                if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && 2 != t.which) {
                    for (var r = Zn(t.target);
                        "a" !== O(r[0]);)
                        if (r[0] === o[0] || !(r = r.parent())[0]) return;
                    var a = r.prop("href"),
                        u = r.attr("href") || r.attr("xlink:href");
                    $(a) && "[object SVGAnimatedString]" === a.toString() && (a = rn(a.animVal).href), p.test(a) || !a || r.attr("target") || t.isDefaultPrevented() || l.$$parseLinkUrl(a, u) && (t.preventDefault(), l.absUrl() != i.url() && (n.$apply(), s.angular["ff-684208-preventDefault"] = !0))
                }
            }), l.absUrl() != d && i.url(l.absUrl(), !0);
            var m = !0;
            return i.onUrlChange(function(t, e) {
                n.$evalAsync(function() {
                    var i, r = l.absUrl(),
                        o = l.$$state;
                    l.$$parse(t), l.$$state = e, i = n.$broadcast("$locationChangeStart", t, r, e, o).defaultPrevented, l.absUrl() === t && (i ? (l.$$parse(r), l.$$state = o, a(r, !1, o)) : (m = !1, u(r, o)))
                }), n.$$phase || n.$digest()
            }), n.$watch(function() {
                var t = xe(i.url()),
                    e = xe(l.absUrl()),
                    o = i.state(),
                    s = l.$$replace,
                    c = t !== e || l.$$html5 && r.history && o !== l.$$state;
                (m || c) && (m = !1, n.$evalAsync(function() {
                    var e = l.absUrl(),
                        i = n.$broadcast("$locationChangeStart", e, t, l.$$state, o).defaultPrevented;
                    l.absUrl() === e && (i ? (l.$$parse(t), l.$$state = o) : (c && a(e, s, o === l.$$state ? null : l.$$state), u(t, o)))
                })), l.$$replace = !1
            }), l
        }]
    }

    function Ne() {
        var t = !0,
            e = this;
        this.debugEnabled = function(e) {
            return y(e) ? (t = e, this) : t
        }, this.$get = ["$window", function(n) {
            function i(t) {
                return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
            }

            function r(t) {
                var e = n.console || {},
                    r = e[t] || e.log || p,
                    s = !1;
                try {
                    s = !!r.apply
                } catch (a) {}
                return s ? function() {
                    var t = [];
                    return o(arguments, function(e) {
                        t.push(i(e))
                    }), r.apply(e, t)
                } : function(t, e) {
                    r(t, null == e ? "" : e)
                }
            }
            return {
                log: r("log"),
                info: r("info"),
                warn: r("warn"),
                error: r("error"),
                debug: function() {
                    var n = r("debug");
                    return function() {
                        t && n.apply(e, arguments)
                    }
                }()
            }
        }]
    }

    function Re(t, e) {
        if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t) throw or("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
        return t
    }

    function De(t, e) {
        if (t) {
            if (t.constructor === t) throw or("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
            if (t.window === t) throw or("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
            if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw or("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
            if (t === Object) throw or("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e)
        }
        return t
    }

    function Oe(t, e) {
        if (t) {
            if (t.constructor === t) throw or("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
            if (t === sr || t === ar || t === ur) throw or("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e);
        }
    }

    function Ie(t) {
        return t.constant
    }

    function qe(t, e, n, i) {
        De(t, i);
        for (var r, o = e.split("."), s = 0; o.length > 1; s++) {
            r = Re(o.shift(), i);
            var a = De(t[r], i);
            a || (a = {}, t[r] = a), t = a
        }
        return r = Re(o.shift(), i), De(t[r], i), t[r] = n, n
    }

    function He(t) {
        return "constructor" == t
    }

    function Pe(t, e, i, r, o, s, a) {
        Re(t, s), Re(e, s), Re(i, s), Re(r, s), Re(o, s);
        var u = function(t) {
                return De(t, s)
            },
            l = a || He(t) ? u : m,
            c = a || He(e) ? u : m,
            f = a || He(i) ? u : m,
            h = a || He(r) ? u : m,
            d = a || He(o) ? u : m;
        return function(s, a) {
            var u = a && a.hasOwnProperty(t) ? a : s;
            return null == u ? u : (u = l(u[t]), e ? null == u ? n : (u = c(u[e]), i ? null == u ? n : (u = f(u[i]), r ? null == u ? n : (u = h(u[r]), o ? null == u ? n : u = d(u[o]) : u) : u) : u) : u)
        }
    }

    function Le(t, e) {
        return function(n, i) {
            return t(n, i, De, e)
        }
    }

    function Me(t, e, i) {
        var r = e.expensiveChecks,
            s = r ? mr : pr,
            a = s[t];
        if (a) return a;
        var u = t.split("."),
            l = u.length;
        if (e.csp) a = 6 > l ? Pe(u[0], u[1], u[2], u[3], u[4], i, r) : function(t, e) {
            var o, s = 0;
            do o = Pe(u[s++], u[s++], u[s++], u[s++], u[s++], i, r)(t, e), e = n, t = o; while (l > s);
            return o
        };
        else {
            var c = "";
            r && (c += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var f = r;
            o(u, function(t, e) {
                Re(t, i);
                var n = (e ? "s" : '((l&&l.hasOwnProperty("' + t + '"))?l:s)') + "." + t;
                (r || He(t)) && (n = "eso(" + n + ", fe)", f = !0), c += "if(s == null) return undefined;\ns=" + n + ";\n"
            }), c += "return s;";
            var h = new Function("s", "l", "eso", "fe", c);
            h.toString = g(c), f && (h = Le(h, i)), a = h
        }
        return a.sharedGetter = !0, a.assign = function(e, n) {
            return qe(e, t, n, t)
        }, s[t] = a, a
    }

    function Fe(t) {
        return C(t.valueOf) ? t.valueOf() : gr.call(t)
    }

    function Ue() {
        var t = lt(),
            e = lt();
        this.$get = ["$filter", "$sniffer", function(n, i) {
            function r(t) {
                var e = t;
                return t.sharedGetter && (e = function(e, n) {
                    return t(e, n)
                }, e.literal = t.literal, e.constant = t.constant, e.assign = t.assign), e
            }

            function s(t, e) {
                for (var n = 0, i = t.length; i > n; n++) {
                    var r = t[n];
                    r.constant || (r.inputs ? s(r.inputs, e) : -1 === e.indexOf(r) && e.push(r))
                }
                return e
            }

            function a(t, e) {
                return null == t || null == e ? t === e : "object" == typeof t && (t = Fe(t), "object" == typeof t) ? !1 : t === e || t !== t && e !== e
            }

            function u(t, e, n, i) {
                var r, o = i.$$inputs || (i.$$inputs = s(i.inputs, []));
                if (1 === o.length) {
                    var u = a;
                    return o = o[0], t.$watch(function(t) {
                        var e = o(t);
                        return a(e, u) || (r = i(t), u = e && Fe(e)), r
                    }, e, n)
                }
                for (var l = [], c = 0, f = o.length; f > c; c++) l[c] = a;
                return t.$watch(function(t) {
                    for (var e = !1, n = 0, s = o.length; s > n; n++) {
                        var u = o[n](t);
                        (e || (e = !a(u, l[n]))) && (l[n] = u && Fe(u))
                    }
                    return e && (r = i(t)), r
                }, e, n)
            }

            function l(t, e, n, i) {
                var r, o;
                return r = t.$watch(function(t) {
                    return i(t)
                }, function(t, n, i) {
                    o = t, C(e) && e.apply(this, arguments), y(t) && i.$$postDigest(function() {
                        y(o) && r()
                    })
                }, n)
            }

            function c(t, e, n, i) {
                function r(t) {
                    var e = !0;
                    return o(t, function(t) {
                        y(t) || (e = !1)
                    }), e
                }
                var s, a;
                return s = t.$watch(function(t) {
                    return i(t)
                }, function(t, n, i) {
                    a = t, C(e) && e.call(this, t, n, i), r(t) && i.$$postDigest(function() {
                        r(a) && s()
                    })
                }, n)
            }

            function f(t, e, n, i) {
                var r;
                return r = t.$watch(function(t) {
                    return i(t)
                }, function(t, n, i) {
                    C(e) && e.apply(this, arguments), r()
                }, n)
            }

            function h(t, e) {
                if (!e) return t;
                var n = t.$$watchDelegate,
                    i = n !== c && n !== l,
                    r = i ? function(n, i) {
                        var r = t(n, i);
                        return e(r, n, i)
                    } : function(n, i) {
                        var r = t(n, i),
                            o = e(r, n, i);
                        return y(r) ? o : r
                    };
                return t.$$watchDelegate && t.$$watchDelegate !== u ? r.$$watchDelegate = t.$$watchDelegate : e.$stateful || (r.$$watchDelegate = u, r.inputs = [t]), r
            }
            var d = {
                    csp: i.csp,
                    expensiveChecks: !1
                },
                m = {
                    csp: i.csp,
                    expensiveChecks: !0
                };
            return function(i, o, s) {
                var a, g, v;
                switch (typeof i) {
                    case "string":
                        v = i = i.trim();
                        var y = s ? e : t;
                        if (a = y[v], !a) {
                            ":" === i.charAt(0) && ":" === i.charAt(1) && (g = !0, i = i.substring(2));
                            var $ = s ? m : d,
                                b = new hr($),
                                w = new dr(b, n, $);
                            a = w.parse(i), a.constant ? a.$$watchDelegate = f : g ? (a = r(a), a.$$watchDelegate = a.literal ? c : l) : a.inputs && (a.$$watchDelegate = u), y[v] = a
                        }
                        return h(a, o);
                    case "function":
                        return h(i, o);
                    default:
                        return h(p, o)
                }
            }
        }]
    }

    function Be() {
        this.$get = ["$rootScope", "$exceptionHandler", function(t, e) {
            return ze(function(e) {
                t.$evalAsync(e)
            }, e)
        }]
    }

    function Ve() {
        this.$get = ["$browser", "$exceptionHandler", function(t, e) {
            return ze(function(e) {
                t.defer(e)
            }, e)
        }]
    }

    function ze(t, e) {
        function r(t, e, n) {
            function i(e) {
                return function(n) {
                    r || (r = !0, e.call(t, n))
                }
            }
            var r = !1;
            return [i(e), i(n)]
        }

        function s() {
            this.$$state = {
                status: 0
            }
        }

        function a(t, e) {
            return function(n) {
                e.call(t, n)
            }
        }

        function u(t) {
            var i, r, o;
            o = t.pending, t.processScheduled = !1, t.pending = n;
            for (var s = 0, a = o.length; a > s; ++s) {
                r = o[s][0], i = o[s][t.status];
                try {
                    C(i) ? r.resolve(i(t.value)) : 1 === t.status ? r.resolve(t.value) : r.reject(t.value)
                } catch (u) {
                    r.reject(u), e(u)
                }
            }
        }

        function l(e) {
            !e.processScheduled && e.pending && (e.processScheduled = !0, t(function() {
                u(e)
            }))
        }

        function c() {
            this.promise = new s, this.resolve = a(this, this.resolve), this.reject = a(this, this.reject), this.notify = a(this, this.notify)
        }

        function f(t) {
            var e = new c,
                n = 0,
                i = ci(t) ? [] : {};
            return o(t, function(t, r) {
                n++, v(t).then(function(t) {
                    i.hasOwnProperty(r) || (i[r] = t, --n || e.resolve(i))
                }, function(t) {
                    i.hasOwnProperty(r) || e.reject(t)
                })
            }), 0 === n && e.resolve(i), e.promise
        }
        var h = i("$q", TypeError),
            d = function() {
                return new c
            };
        s.prototype = {
            then: function(t, e, n) {
                var i = new c;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([i, t, e, n]), this.$$state.status > 0 && l(this.$$state), i.promise
            },
            "catch": function(t) {
                return this.then(null, t)
            },
            "finally": function(t, e) {
                return this.then(function(e) {
                    return g(e, !0, t)
                }, function(e) {
                    return g(e, !1, t)
                }, e)
            }
        }, c.prototype = {
            resolve: function(t) {
                this.promise.$$state.status || (t === this.promise ? this.$$reject(h("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : this.$$resolve(t))
            },
            $$resolve: function(t) {
                var n, i;
                i = r(this, this.$$resolve, this.$$reject);
                try {
                    ($(t) || C(t)) && (n = t && t.then), C(n) ? (this.promise.$$state.status = -1, n.call(t, i[0], i[1], this.notify)) : (this.promise.$$state.value = t, this.promise.$$state.status = 1, l(this.promise.$$state))
                } catch (o) {
                    i[1](o), e(o)
                }
            },
            reject: function(t) {
                this.promise.$$state.status || this.$$reject(t)
            },
            $$reject: function(t) {
                this.promise.$$state.value = t, this.promise.$$state.status = 2, l(this.promise.$$state)
            },
            notify: function(n) {
                var i = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && i && i.length && t(function() {
                    for (var t, r, o = 0, s = i.length; s > o; o++) {
                        r = i[o][0], t = i[o][3];
                        try {
                            r.notify(C(t) ? t(n) : n)
                        } catch (a) {
                            e(a)
                        }
                    }
                })
            }
        };
        var p = function(t) {
                var e = new c;
                return e.reject(t), e.promise
            },
            m = function(t, e) {
                var n = new c;
                return e ? n.resolve(t) : n.reject(t), n.promise
            },
            g = function(t, e, n) {
                var i = null;
                try {
                    C(n) && (i = n())
                } catch (r) {
                    return m(r, !1)
                }
                return N(i) ? i.then(function() {
                    return m(t, e)
                }, function(t) {
                    return m(t, !1)
                }) : m(t, e)
            },
            v = function(t, e, n, i) {
                var r = new c;
                return r.resolve(t), r.promise.then(e, n, i)
            },
            y = function b(t) {
                function e(t) {
                    i.resolve(t)
                }

                function n(t) {
                    i.reject(t)
                }
                if (!C(t)) throw h("norslvr", "Expected resolverFn, got '{0}'", t);
                if (!(this instanceof b)) return new b(t);
                var i = new c;
                return t(e, n), i.promise
            };
        return y.defer = d, y.reject = p, y.when = v, y.all = f, y
    }

    function We() {
        this.$get = ["$window", "$timeout", function(t, e) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
                i = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
                r = !!n,
                o = r ? function(t) {
                    var e = n(t);
                    return function() {
                        i(e)
                    }
                } : function(t) {
                    var n = e(t, 16.66, !1);
                    return function() {
                        e.cancel(n)
                    }
                };
            return o.supported = r, o
        }]
    }

    function Ke() {
        var t = 10,
            e = i("$rootScope"),
            n = null,
            s = null;
        this.digestTtl = function(e) {
            return arguments.length && (t = e), t
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(i, a, u, c) {
            function f() {
                this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
            }

            function h(t) {
                if (w.$$phase) throw e("inprog", "{0} already in progress", w.$$phase);
                w.$$phase = t
            }

            function d() {
                w.$$phase = null
            }

            function m(t, e, n) {
                do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
            }

            function g() {}

            function y() {
                for (; T.length;) try {
                    T.shift()()
                } catch (t) {
                    a(t)
                }
                s = null
            }

            function b() {
                null === s && (s = c.defer(function() {
                    w.$apply(y)
                }))
            }
            f.prototype = {
                constructor: f,
                $new: function(t, e) {
                    function n() {
                        i.$$destroyed = !0
                    }
                    var i;
                    return e = e || this, t ? (i = new f, i.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = l(), this.$$ChildScope = null
                    }, this.$$ChildScope.prototype = this), i = new this.$$ChildScope), i.$parent = e, i.$$prevSibling = e.$$childTail, e.$$childHead ? (e.$$childTail.$$nextSibling = i, e.$$childTail = i) : e.$$childHead = e.$$childTail = i, (t || e != this) && i.$on("$destroy", n), i
                },
                $watch: function(t, e, i) {
                    var r = u(t);
                    if (r.$$watchDelegate) return r.$$watchDelegate(this, e, i, r);
                    var o = this,
                        s = o.$$watchers,
                        a = {
                            fn: e,
                            last: g,
                            get: r,
                            exp: t,
                            eq: !!i
                        };
                    return n = null, C(e) || (a.fn = p), s || (s = o.$$watchers = []), s.unshift(a),
                        function() {
                            I(s, a), n = null
                        }
                },
                $watchGroup: function(t, e) {
                    function n() {
                        u = !1, l ? (l = !1, e(r, r, a)) : e(r, i, a)
                    }
                    var i = new Array(t.length),
                        r = new Array(t.length),
                        s = [],
                        a = this,
                        u = !1,
                        l = !0;
                    if (!t.length) {
                        var c = !0;
                        return a.$evalAsync(function() {
                                c && e(r, r, a)
                            }),
                            function() {
                                c = !1
                            }
                    }
                    return 1 === t.length ? this.$watch(t[0], function(t, n, o) {
                        r[0] = t, i[0] = n, e(r, t === n ? r : i, o)
                    }) : (o(t, function(t, e) {
                        var o = a.$watch(t, function(t, o) {
                            r[e] = t, i[e] = o, u || (u = !0, a.$evalAsync(n))
                        });
                        s.push(o)
                    }), function() {
                        for (; s.length;) s.shift()()
                    })
                },
                $watchCollection: function(t, e) {
                    function n(t) {
                        o = t;
                        var e, n, i, a, u;
                        if (!v(o)) {
                            if ($(o))
                                if (r(o)) {
                                    s !== d && (s = d, g = s.length = 0, f++), e = o.length, g !== e && (f++, s.length = g = e);
                                    for (var l = 0; e > l; l++) u = s[l], a = o[l], i = u !== u && a !== a, i || u === a || (f++, s[l] = a)
                                } else {
                                    s !== p && (s = p = {}, g = 0, f++), e = 0;
                                    for (n in o) o.hasOwnProperty(n) && (e++, a = o[n], u = s[n], n in s ? (i = u !== u && a !== a, i || u === a || (f++, s[n] = a)) : (g++, s[n] = a, f++));
                                    if (g > e) {
                                        f++;
                                        for (n in s) o.hasOwnProperty(n) || (g--, delete s[n])
                                    }
                                } else s !== o && (s = o, f++);
                            return f
                        }
                    }

                    function i() {
                        if (m ? (m = !1, e(o, o, l)) : e(o, a, l), c)
                            if ($(o))
                                if (r(o)) {
                                    a = new Array(o.length);
                                    for (var t = 0; t < o.length; t++) a[t] = o[t]
                                } else {
                                    a = {};
                                    for (var n in o) Xn.call(o, n) && (a[n] = o[n])
                                } else a = o
                    }
                    n.$stateful = !0;
                    var o, s, a, l = this,
                        c = e.length > 1,
                        f = 0,
                        h = u(t, n),
                        d = [],
                        p = {},
                        m = !0,
                        g = 0;
                    return this.$watch(h, i)
                },
                $digest: function() {
                    var i, r, o, u, l, f, p, m, v, $, b = t,
                        T = this,
                        k = [];
                    h("$digest"), c.$$checkUrlChange(), this === w && null !== s && (c.defer.cancel(s), y()), n = null;
                    do {
                        for (f = !1, m = T; x.length;) {
                            try {
                                $ = x.shift(), $.scope.$eval($.expression, $.locals)
                            } catch (E) {
                                a(E)
                            }
                            n = null
                        }
                        t: do {
                            if (u = m.$$watchers)
                                for (l = u.length; l--;) try {
                                    if (i = u[l])
                                        if ((r = i.get(m)) === (o = i.last) || (i.eq ? P(r, o) : "number" == typeof r && "number" == typeof o && isNaN(r) && isNaN(o))) {
                                            if (i === n) {
                                                f = !1;
                                                break t
                                            }
                                        } else f = !0, n = i, i.last = i.eq ? q(r, null) : r, i.fn(r, o === g ? r : o, m), 5 > b && (v = 4 - b, k[v] || (k[v] = []), k[v].push({
                                            msg: C(i.exp) ? "fn: " + (i.exp.name || i.exp.toString()) : i.exp,
                                            newVal: r,
                                            oldVal: o
                                        }))
                                } catch (E) {
                                    a(E)
                                }
                            if (!(p = m.$$childHead || m !== T && m.$$nextSibling))
                                for (; m !== T && !(p = m.$$nextSibling);) m = m.$parent
                        } while (m = p);
                        if ((f || x.length) && !b--) throw d(), e("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, k)
                    } while (f || x.length);
                    for (d(); S.length;) try {
                        S.shift()()
                    } catch (E) {
                        a(E)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== w) {
                            for (var e in this.$$listenerCount) m(this, this.$$listenerCount[e], e);
                            t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function() {
                                return p
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                },
                $eval: function(t, e) {
                    return u(t)(this, e)
                },
                $evalAsync: function(t, e) {
                    w.$$phase || x.length || c.defer(function() {
                        x.length && w.$digest()
                    }), x.push({
                        scope: this,
                        expression: t,
                        locals: e
                    })
                },
                $$postDigest: function(t) {
                    S.push(t)
                },
                $apply: function(t) {
                    try {
                        return h("$apply"), this.$eval(t)
                    } catch (e) {
                        a(e)
                    } finally {
                        d();
                        try {
                            w.$digest()
                        } catch (e) {
                            throw a(e), e
                        }
                    }
                },
                $applyAsync: function(t) {
                    function e() {
                        n.$eval(t)
                    }
                    var n = this;
                    t && T.push(e), b()
                },
                $on: function(t, e) {
                    var n = this.$$listeners[t];
                    n || (this.$$listeners[t] = n = []), n.push(e);
                    var i = this;
                    do i.$$listenerCount[t] || (i.$$listenerCount[t] = 0), i.$$listenerCount[t]++; while (i = i.$parent);
                    var r = this;
                    return function() {
                        var i = n.indexOf(e); - 1 !== i && (n[i] = null, m(r, 1, t))
                    }
                },
                $emit: function(t, e) {
                    var n, i, r, o = [],
                        s = this,
                        u = !1,
                        l = {
                            name: t,
                            targetScope: s,
                            stopPropagation: function() {
                                u = !0
                            },
                            preventDefault: function() {
                                l.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        c = L([l], arguments, 1);
                    do {
                        for (n = s.$$listeners[t] || o, l.currentScope = s, i = 0, r = n.length; r > i; i++)
                            if (n[i]) try {
                                n[i].apply(null, c)
                            } catch (f) {
                                a(f)
                            } else n.splice(i, 1), i--, r--;
                        if (u) return l.currentScope = null, l;
                        s = s.$parent
                    } while (s);
                    return l.currentScope = null, l
                },
                $broadcast: function(t, e) {
                    var n = this,
                        i = n,
                        r = n,
                        o = {
                            name: t,
                            targetScope: n,
                            preventDefault: function() {
                                o.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!n.$$listenerCount[t]) return o;
                    for (var s, u, l, c = L([o], arguments, 1); i = r;) {
                        for (o.currentScope = i, s = i.$$listeners[t] || [], u = 0, l = s.length; l > u; u++)
                            if (s[u]) try {
                                s[u].apply(null, c)
                            } catch (f) {
                                a(f)
                            } else s.splice(u, 1), u--, l--;
                        if (!(r = i.$$listenerCount[t] && i.$$childHead || i !== n && i.$$nextSibling))
                            for (; i !== n && !(r = i.$$nextSibling);) i = i.$parent
                    }
                    return o.currentScope = null, o
                }
            };
            var w = new f,
                x = w.$$asyncQueue = [],
                S = w.$$postDigestQueue = [],
                T = w.$$applyAsyncQueue = [];
            return w
        }]
    }

    function Xe() {
        var t = /^\s*(https?|ftp|mailto|tel|file):/,
            e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(e) {
            return y(e) ? (t = e, this) : t
        }, this.imgSrcSanitizationWhitelist = function(t) {
            return y(t) ? (e = t, this) : e
        }, this.$get = function() {
            return function(n, i) {
                var r, o = i ? e : t;
                return r = rn(n).href, "" === r || r.match(o) ? n : "unsafe:" + r
            }
        }
    }

    function Qe(t) {
        if ("self" === t) return t;
        if (b(t)) {
            if (t.indexOf("***") > -1) throw vr("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
            return t = hi(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
        }
        if (S(t)) return new RegExp("^" + t.source + "$");
        throw vr("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Ge(t) {
        var e = [];
        return y(t) && o(t, function(t) {
            e.push(Qe(t))
        }), e
    }

    function Je() {
        this.SCE_CONTEXTS = yr;
        var t = ["self"],
            e = [];
        this.resourceUrlWhitelist = function(e) {
            return arguments.length && (t = Ge(e)), t
        }, this.resourceUrlBlacklist = function(t) {
            return arguments.length && (e = Ge(t)), e
        }, this.$get = ["$injector", function(i) {
            function r(t, e) {
                return "self" === t ? on(e) : !!t.exec(e.href)
            }

            function o(n) {
                var i, o, s = rn(n.toString()),
                    a = !1;
                for (i = 0, o = t.length; o > i; i++)
                    if (r(t[i], s)) {
                        a = !0;
                        break
                    }
                if (a)
                    for (i = 0, o = e.length; o > i; i++)
                        if (r(e[i], s)) {
                            a = !1;
                            break
                        }
                return a
            }

            function s(t) {
                var e = function(t) {
                    this.$$unwrapTrustedValue = function() {
                        return t
                    }
                };
                return t && (e.prototype = new t), e.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, e.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, e
            }

            function a(t, e) {
                var i = h.hasOwnProperty(t) ? h[t] : null;
                if (!i) throw vr("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
                if (null === e || e === n || "" === e) return e;
                if ("string" != typeof e) throw vr("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
                return new i(e)
            }

            function u(t) {
                return t instanceof f ? t.$$unwrapTrustedValue() : t
            }

            function l(t, e) {
                if (null === e || e === n || "" === e) return e;
                var i = h.hasOwnProperty(t) ? h[t] : null;
                if (i && e instanceof i) return e.$$unwrapTrustedValue();
                if (t === yr.RESOURCE_URL) {
                    if (o(e)) return e;
                    throw vr("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
                }
                if (t === yr.HTML) return c(e);
                throw vr("unsafe", "Attempting to use an unsafe value in a safe context.")
            }
            var c = function(t) {
                throw vr("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            i.has("$sanitize") && (c = i.get("$sanitize"));
            var f = s(),
                h = {};
            return h[yr.HTML] = s(f), h[yr.CSS] = s(f), h[yr.URL] = s(f), h[yr.JS] = s(f), h[yr.RESOURCE_URL] = s(h[yr.URL]), {
                trustAs: a,
                getTrusted: l,
                valueOf: u
            }
        }]
    }

    function Ye() {
        var t = !0;
        this.enabled = function(e) {
            return arguments.length && (t = !!e), t
        }, this.$get = ["$parse", "$sceDelegate", function(e, n) {
            if (t && 8 > Yn) throw vr("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var i = H(yr);
            i.isEnabled = function() {
                return t
            }, i.trustAs = n.trustAs, i.getTrusted = n.getTrusted, i.valueOf = n.valueOf, t || (i.trustAs = i.getTrusted = function(t, e) {
                return e
            }, i.valueOf = m), i.parseAs = function(t, n) {
                var r = e(n);
                return r.literal && r.constant ? r : e(n, function(e) {
                    return i.getTrusted(t, e)
                })
            };
            var r = i.parseAs,
                s = i.getTrusted,
                a = i.trustAs;
            return o(yr, function(t, e) {
                var n = Kn(e);
                i[mt("parse_as_" + n)] = function(e) {
                    return r(t, e)
                }, i[mt("get_trusted_" + n)] = function(e) {
                    return s(t, e)
                }, i[mt("trust_as_" + n)] = function(e) {
                    return a(t, e)
                }
            }), i
        }]
    }

    function Ze() {
        this.$get = ["$window", "$document", function(t, e) {
            var n, i, r = {},
                o = h((/android (\d+)/.exec(Kn((t.navigator || {}).userAgent)) || [])[1]),
                s = /Boxee/i.test((t.navigator || {}).userAgent),
                a = e[0] || {},
                u = /^(Moz|webkit|ms)(?=[A-Z])/,
                l = a.body && a.body.style,
                c = !1,
                f = !1;
            if (l) {
                for (var d in l)
                    if (i = u.exec(d)) {
                        n = i[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                        break
                    }
                n || (n = "WebkitOpacity" in l && "webkit"), c = !!("transition" in l || n + "Transition" in l), f = !!("animation" in l || n + "Animation" in l), !o || c && f || (c = b(a.body.style.webkitTransition), f = b(a.body.style.webkitAnimation))
            }
            return {
                history: !(!t.history || !t.history.pushState || 4 > o || s),
                hasEvent: function(t) {
                    if ("input" === t && 11 >= Yn) return !1;
                    if (v(r[t])) {
                        var e = a.createElement("div");
                        r[t] = "on" + t in e
                    }
                    return r[t]
                },
                csp: di(),
                vendorPrefix: n,
                transitions: c,
                animations: f,
                android: o
            }
        }]
    }

    function tn() {
        this.$get = ["$templateCache", "$http", "$q", function(t, e, n) {
            function i(r, o) {
                function s(t) {
                    if (a.totalPendingRequests--, !o) throw Ki("tpload", "Failed to load template: {0}", r);
                    return n.reject(t)
                }
                var a = i;
                a.totalPendingRequests++;
                var u = e.defaults && e.defaults.transformResponse;
                ci(u) ? u = u.filter(function(t) {
                    return t !== re
                }) : u === re && (u = null);
                var l = {
                    cache: t,
                    transformResponse: u
                };
                return e.get(r, l).then(function(t) {
                    return a.totalPendingRequests--, t.data
                }, s)
            }
            return i.totalPendingRequests = 0, i
        }]
    }

    function en() {
        this.$get = ["$rootScope", "$browser", "$location", function(t, e, n) {
            var i = {};
            return i.findBindings = function(t, e, n) {
                var i = t.getElementsByClassName("ng-binding"),
                    r = [];
                return o(i, function(t) {
                    var i = ai.element(t).data("$binding");
                    i && o(i, function(i) {
                        if (n) {
                            var o = new RegExp("(^|\\s)" + hi(e) + "(\\s|\\||$)");
                            o.test(i) && r.push(t)
                        } else -1 != i.indexOf(e) && r.push(t)
                    })
                }), r
            }, i.findModels = function(t, e, n) {
                for (var i = ["ng-", "data-ng-", "ng\\:"], r = 0; r < i.length; ++r) {
                    var o = n ? "=" : "*=",
                        s = "[" + i[r] + "model" + o + '"' + e + '"]',
                        a = t.querySelectorAll(s);
                    if (a.length) return a
                }
            }, i.getLocation = function() {
                return n.url()
            }, i.setLocation = function(e) {
                e !== n.url() && (n.url(e), t.$digest())
            }, i.whenStable = function(t) {
                e.notifyWhenNoOutstandingRequests(t)
            }, i
        }]
    }

    function nn() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(t, e, n, i, r) {
            function o(o, a, u) {
                var l, c = y(u) && !u,
                    f = (c ? i : n).defer(),
                    h = f.promise;
                return l = e.defer(function() {
                    try {
                        f.resolve(o())
                    } catch (e) {
                        f.reject(e), r(e)
                    } finally {
                        delete s[h.$$timeoutId]
                    }
                    c || t.$apply()
                }, a), h.$$timeoutId = l, s[l] = f, h
            }
            var s = {};
            return o.cancel = function(t) {
                return t && t.$$timeoutId in s ? (s[t.$$timeoutId].reject("canceled"), delete s[t.$$timeoutId], e.defer.cancel(t.$$timeoutId)) : !1
            }, o
        }]
    }

    function rn(t) {
        var e = t;
        return Yn && ($r.setAttribute("href", e), e = $r.href), $r.setAttribute("href", e), {
            href: $r.href,
            protocol: $r.protocol ? $r.protocol.replace(/:$/, "") : "",
            host: $r.host,
            search: $r.search ? $r.search.replace(/^\?/, "") : "",
            hash: $r.hash ? $r.hash.replace(/^#/, "") : "",
            hostname: $r.hostname,
            port: $r.port,
            pathname: "/" === $r.pathname.charAt(0) ? $r.pathname : "/" + $r.pathname
        }
    }

    function on(t) {
        var e = b(t) ? rn(t) : t;
        return e.protocol === br.protocol && e.host === br.host
    }

    function sn() {
        this.$get = g(t)
    }

    function an(t) {
        function e(i, r) {
            if ($(i)) {
                var s = {};
                return o(i, function(t, n) {
                    s[n] = e(n, t)
                }), s
            }
            return t.factory(i + n, r)
        }
        var n = "Filter";
        this.register = e, this.$get = ["$injector", function(t) {
            return function(e) {
                return t.get(e + n)
            }
        }], e("currency", fn), e("date", xn), e("filter", un), e("json", Cn), e("limitTo", Sn), e("lowercase", Tr), e("number", hn), e("orderBy", Tn), e("uppercase", kr)
    }

    function un() {
        return function(t, e, n) {
            if (!ci(t)) return t;
            var i, r;
            switch (typeof e) {
                case "function":
                    i = e;
                    break;
                case "boolean":
                case "number":
                case "string":
                    r = !0;
                case "object":
                    i = ln(e, n, r);
                    break;
                default:
                    return t
            }
            return t.filter(i)
        }
    }

    function ln(t, e, n) {
        var i, r = $(t) && "$" in t;
        return e === !0 ? e = P : C(e) || (e = function(t, e) {
            return $(t) || $(e) ? !1 : (t = Kn("" + t), e = Kn("" + e), -1 !== t.indexOf(e))
        }), i = function(i) {
            return r && !$(i) ? cn(i, t.$, e, !1) : cn(i, t, e, n)
        }
    }

    function cn(t, e, n, i, r) {
        var o = typeof t,
            s = typeof e;
        if ("string" === s && "!" === e.charAt(0)) return !cn(t, e.substring(1), n, i);
        if ("array" === o) return t.some(function(t) {
            return cn(t, e, n, i)
        });
        switch (o) {
            case "object":
                var a;
                if (i) {
                    for (a in t)
                        if ("$" !== a.charAt(0) && cn(t[a], e, n, !0)) return !0;
                    return r ? !1 : cn(t, e, n, !1)
                }
                if ("object" === s) {
                    for (a in e) {
                        var u = e[a];
                        if (!C(u)) {
                            var l = "$" === a,
                                c = l ? t : t[a];
                            if (!cn(c, u, n, l, l)) return !1
                        }
                    }
                    return !0
                }
                return n(t, e);
            case "function":
                return !1;
            default:
                return n(t, e)
        }
    }

    function fn(t) {
        var e = t.NUMBER_FORMATS;
        return function(t, n, i) {
            return v(n) && (n = e.CURRENCY_SYM), v(i) && (i = e.PATTERNS[1].maxFrac), null == t ? t : dn(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, i).replace(/\u00A4/g, n)
        }
    }

    function hn(t) {
        var e = t.NUMBER_FORMATS;
        return function(t, n) {
            return null == t ? t : dn(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
        }
    }

    function dn(t, e, n, i, r) {
        if (!isFinite(t) || $(t)) return "";
        var o = 0 > t;
        t = Math.abs(t);
        var s = t + "",
            a = "",
            u = [],
            l = !1;
        if (-1 !== s.indexOf("e")) {
            var c = s.match(/([\d\.]+)e(-?)(\d+)/);
            c && "-" == c[2] && c[3] > r + 1 ? t = 0 : (a = s, l = !0)
        }
        if (l) r > 0 && 1 > t && (a = t.toFixed(r), t = parseFloat(a));
        else {
            var f = (s.split(wr)[1] || "").length;
            v(r) && (r = Math.min(Math.max(e.minFrac, f), e.maxFrac)), t = +(Math.round(+(t.toString() + "e" + r)).toString() + "e" + -r);
            var h = ("" + t).split(wr),
                d = h[0];
            h = h[1] || "";
            var p, m = 0,
                g = e.lgSize,
                y = e.gSize;
            if (d.length >= g + y)
                for (m = d.length - g, p = 0; m > p; p++)(m - p) % y === 0 && 0 !== p && (a += n), a += d.charAt(p);
            for (p = m; p < d.length; p++)(d.length - p) % g === 0 && 0 !== p && (a += n), a += d.charAt(p);
            for (; h.length < r;) h += "0";
            r && "0" !== r && (a += i + h.substr(0, r))
        }
        return 0 === t && (o = !1), u.push(o ? e.negPre : e.posPre, a, o ? e.negSuf : e.posSuf), u.join("")
    }

    function pn(t, e, n) {
        var i = "";
        for (0 > t && (i = "-", t = -t), t = "" + t; t.length < e;) t = "0" + t;
        return n && (t = t.substr(t.length - e)), i + t
    }

    function mn(t, e, n, i) {
        return n = n || 0,
            function(r) {
                var o = r["get" + t]();
                return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), pn(o, e, i)
            }
    }

    function gn(t, e) {
        return function(n, i) {
            var r = n["get" + t](),
                o = Qn(e ? "SHORT" + t : t);
            return i[o][r]
        }
    }

    function vn(t) {
        var e = -1 * t.getTimezoneOffset(),
            n = e >= 0 ? "+" : "";
        return n += pn(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + pn(Math.abs(e % 60), 2)
    }

    function yn(t) {
        var e = new Date(t, 0, 1).getDay();
        return new Date(t, 0, (4 >= e ? 5 : 12) - e)
    }

    function $n(t) {
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))
    }

    function bn(t) {
        return function(e) {
            var n = yn(e.getFullYear()),
                i = $n(e),
                r = +i - +n,
                o = 1 + Math.round(r / 6048e5);
            return pn(o, t)
        }
    }

    function wn(t, e) {
        return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
    }

    function xn(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                var i = new Date(0),
                    r = 0,
                    o = 0,
                    s = e[8] ? i.setUTCFullYear : i.setFullYear,
                    a = e[8] ? i.setUTCHours : i.setHours;
                e[9] && (r = h(e[9] + e[10]), o = h(e[9] + e[11])), s.call(i, h(e[1]), h(e[2]) - 1, h(e[3]));
                var u = h(e[4] || 0) - r,
                    l = h(e[5] || 0) - o,
                    c = h(e[6] || 0),
                    f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                return a.call(i, u, l, c, f), i
            }
            return t
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, i, r) {
            var s, a, u = "",
                l = [];
            if (i = i || "mediumDate", i = t.DATETIME_FORMATS[i] || i, b(n) && (n = Sr.test(n) ? h(n) : e(n)), w(n) && (n = new Date(n)), !x(n)) return n;
            for (; i;) a = Cr.exec(i), a ? (l = L(l, a, 1), i = l.pop()) : (l.push(i), i = null);
            return r && "UTC" === r && (n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + n.getTimezoneOffset())), o(l, function(e) {
                s = xr[e], u += s ? s(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), u
        }
    }

    function Cn() {
        return function(t, e) {
            return v(e) && (e = 2), B(t, e)
        }
    }

    function Sn() {
        return function(t, e) {
            if (w(t) && (t = t.toString()), !ci(t) && !b(t)) return t;
            if (e = Math.abs(Number(e)) === 1 / 0 ? Number(e) : h(e), b(t)) return e ? e >= 0 ? t.slice(0, e) : t.slice(e, t.length) : "";
            var n, i;
            if (e > t.length ? e = t.length : e < -t.length && (e = -t.length), e > 0) n = 0, i = e;
            else {
                if (!e) return [];
                n = t.length + e, i = t.length
            }
            return t.slice(n, i)
        }
    }

    function Tn(t) {
        return function(e, n, i) {
            function o(t, e) {
                for (var i = 0; i < n.length; i++) {
                    var r = n[i](t, e);
                    if (0 !== r) return r
                }
                return 0
            }

            function s(t, e) {
                return e ? function(e, n) {
                    return t(n, e)
                } : t
            }

            function a(t) {
                switch (typeof t) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function u(t) {
                return null === t ? "null" : "function" == typeof t.valueOf && (t = t.valueOf(), a(t)) ? t : "function" == typeof t.toString && (t = t.toString(), a(t)) ? t : ""
            }

            function l(t, e) {
                var n = typeof t,
                    i = typeof e;
                return n === i && "object" === n && (t = u(t), e = u(e)), n === i ? ("string" === n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : e > t ? -1 : 1) : i > n ? -1 : 1
            }
            return r(e) ? (n = ci(n) ? n : [n], 0 === n.length && (n = ["+"]), n = n.map(function(e) {
                var n = !1,
                    i = e || m;
                if (b(e)) {
                    if (("+" == e.charAt(0) || "-" == e.charAt(0)) && (n = "-" == e.charAt(0), e = e.substring(1)), "" === e) return s(l, n);
                    if (i = t(e), i.constant) {
                        var r = i();
                        return s(function(t, e) {
                            return l(t[r], e[r])
                        }, n)
                    }
                }
                return s(function(t, e) {
                    return l(i(t), i(e))
                }, n)
            }), ni.call(e).sort(s(o, i))) : e
        }
    }

    function kn(t) {
        return C(t) && (t = {
            link: t
        }), t.restrict = t.restrict || "AC", g(t)
    }

    function En(t, e) {
        t.$name = e
    }

    function An(t, e, i, r, s) {
        var a = this,
            u = [],
            l = a.$$parentForm = t.parent().controller("form") || _r;
        a.$error = {}, a.$$success = {}, a.$pending = n, a.$name = s(e.name || e.ngForm || "")(i), a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, a.$submitted = !1, l.$addControl(a), a.$rollbackViewValue = function() {
            o(u, function(t) {
                t.$rollbackViewValue()
            })
        }, a.$commitViewValue = function() {
            o(u, function(t) {
                t.$commitViewValue()
            })
        }, a.$addControl = function(t) {
            st(t.$name, "input"), u.push(t), t.$name && (a[t.$name] = t)
        }, a.$$renameControl = function(t, e) {
            var n = t.$name;
            a[n] === t && delete a[n], a[e] = t, t.$name = e
        }, a.$removeControl = function(t) {
            t.$name && a[t.$name] === t && delete a[t.$name], o(a.$pending, function(e, n) {
                a.$setValidity(n, null, t)
            }), o(a.$error, function(e, n) {
                a.$setValidity(n, null, t)
            }), I(u, t)
        }, Un({
            ctrl: this,
            $element: t,
            set: function(t, e, n) {
                var i = t[e];
                if (i) {
                    var r = i.indexOf(n); - 1 === r && i.push(n)
                } else t[e] = [n]
            },
            unset: function(t, e, n) {
                var i = t[e];
                i && (I(i, n), 0 === i.length && delete t[e])
            },
            parentForm: l,
            $animate: r
        }), a.$setDirty = function() {
            r.removeClass(t, Qr), r.addClass(t, Gr), a.$dirty = !0, a.$pristine = !1, l.$setDirty()
        }, a.$setPristine = function() {
            r.setClass(t, Qr, Gr + " " + jr), a.$dirty = !1, a.$pristine = !0, a.$submitted = !1, o(u, function(t) {
                t.$setPristine()
            })
        }, a.$setUntouched = function() {
            o(u, function(t) {
                t.$setUntouched()
            })
        }, a.$setSubmitted = function() {
            r.addClass(t, jr), a.$submitted = !0, l.$setSubmitted()
        }
    }

    function _n(t) {
        t.$formatters.push(function(e) {
            return t.$isEmpty(e) ? e : e.toString()
        })
    }

    function jn(t, e, n, i, r, o) {
        Nn(t, e, n, i, r, o), _n(i)
    }

    function Nn(t, e, n, i, r, o) {
        var s = Kn(e[0].type);
        if (!r.android) {
            var a = !1;
            e.on("compositionstart", function(t) {
                a = !0
            }), e.on("compositionend", function() {
                a = !1, u()
            })
        }
        var u = function(t) {
            if (l && (o.defer.cancel(l), l = null), !a) {
                var r = e.val(),
                    u = t && t.type;
                "password" === s || n.ngTrim && "false" === n.ngTrim || (r = fi(r)), (i.$viewValue !== r || "" === r && i.$$hasNativeValidators) && i.$setViewValue(r, u)
            }
        };
        if (r.hasEvent("input")) e.on("input", u);
        else {
            var l, c = function(t, e, n) {
                l || (l = o.defer(function() {
                    l = null, e && e.value === n || u(t)
                }))
            };
            e.on("keydown", function(t) {
                var e = t.keyCode;
                91 === e || e > 15 && 19 > e || e >= 37 && 40 >= e || c(t, this, this.value)
            }), r.hasEvent("paste") && e.on("paste cut", c)
        }
        e.on("change", u), i.$render = function() {
            e.val(i.$isEmpty(i.$viewValue) ? "" : i.$viewValue)
        }
    }

    function Rn(t, e) {
        if (x(t)) return t;
        if (b(t)) {
            Mr.lastIndex = 0;
            var n = Mr.exec(t);
            if (n) {
                var i = +n[1],
                    r = +n[2],
                    o = 0,
                    s = 0,
                    a = 0,
                    u = 0,
                    l = yn(i),
                    c = 7 * (r - 1);
                return e && (o = e.getHours(), s = e.getMinutes(), a = e.getSeconds(), u = e.getMilliseconds()), new Date(i, 0, l.getDate() + c, o, s, a, u)
            }
        }
        return NaN
    }

    function Dn(t, e) {
        return function(n, i) {
            var r, s;
            if (x(n)) return n;
            if (b(n)) {
                if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Or.test(n)) return new Date(n);
                if (t.lastIndex = 0, r = t.exec(n)) return r.shift(), s = i ? {
                    yyyy: i.getFullYear(),
                    MM: i.getMonth() + 1,
                    dd: i.getDate(),
                    HH: i.getHours(),
                    mm: i.getMinutes(),
                    ss: i.getSeconds(),
                    sss: i.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, o(r, function(t, n) {
                    n < e.length && (s[e[n]] = +t)
                }), new Date(s.yyyy, s.MM - 1, s.dd, s.HH, s.mm, s.ss || 0, 1e3 * s.sss || 0)
            }
            return NaN
        }
    }

    function On(t, e, i, r) {
        return function(o, s, a, u, l, c, f) {
            function h(t) {
                return t && !(t.getTime && t.getTime() !== t.getTime())
            }

            function d(t) {
                return y(t) ? x(t) ? t : i(t) : n
            }
            In(o, s, a, u), Nn(o, s, a, u, l, c);
            var p, m = u && u.$options && u.$options.timezone;
            if (u.$$parserName = t, u.$parsers.push(function(t) {
                    if (u.$isEmpty(t)) return null;
                    if (e.test(t)) {
                        var r = i(t, p);
                        return "UTC" === m && r.setMinutes(r.getMinutes() - r.getTimezoneOffset()), r
                    }
                    return n
                }), u.$formatters.push(function(t) {
                    if (t && !x(t)) throw Vr("datefmt", "Expected `{0}` to be a date", t);
                    if (h(t)) {
                        if (p = t, p && "UTC" === m) {
                            var e = 6e4 * p.getTimezoneOffset();
                            p = new Date(p.getTime() + e)
                        }
                        return f("date")(t, r, m)
                    }
                    return p = null, ""
                }), y(a.min) || a.ngMin) {
                var g;
                u.$validators.min = function(t) {
                    return !h(t) || v(g) || i(t) >= g
                }, a.$observe("min", function(t) {
                    g = d(t), u.$validate()
                })
            }
            if (y(a.max) || a.ngMax) {
                var $;
                u.$validators.max = function(t) {
                    return !h(t) || v($) || i(t) <= $
                }, a.$observe("max", function(t) {
                    $ = d(t), u.$validate()
                })
            }
        }
    }

    function In(t, e, i, r) {
        var o = e[0],
            s = r.$$hasNativeValidators = $(o.validity);
        s && r.$parsers.push(function(t) {
            var i = e.prop(Wn) || {};
            return i.badInput && !i.typeMismatch ? n : t
        })
    }

    function qn(t, e, i, r, o, s) {
        if (In(t, e, i, r), Nn(t, e, i, r, o, s), r.$$parserName = "number", r.$parsers.push(function(t) {
                return r.$isEmpty(t) ? null : Hr.test(t) ? parseFloat(t) : n
            }), r.$formatters.push(function(t) {
                if (!r.$isEmpty(t)) {
                    if (!w(t)) throw Vr("numfmt", "Expected `{0}` to be a number", t);
                    t = t.toString()
                }
                return t
            }), i.min || i.ngMin) {
            var a;
            r.$validators.min = function(t) {
                return r.$isEmpty(t) || v(a) || t >= a
            }, i.$observe("min", function(t) {
                y(t) && !w(t) && (t = parseFloat(t, 10)), a = w(t) && !isNaN(t) ? t : n, r.$validate()
            })
        }
        if (i.max || i.ngMax) {
            var u;
            r.$validators.max = function(t) {
                return r.$isEmpty(t) || v(u) || u >= t
            }, i.$observe("max", function(t) {
                y(t) && !w(t) && (t = parseFloat(t, 10)), u = w(t) && !isNaN(t) ? t : n, r.$validate()
            })
        }
    }

    function Hn(t, e, n, i, r, o) {
        Nn(t, e, n, i, r, o), _n(i), i.$$parserName = "url", i.$validators.url = function(t, e) {
            var n = t || e;
            return i.$isEmpty(n) || Ir.test(n)
        }
    }

    function Pn(t, e, n, i, r, o) {
        Nn(t, e, n, i, r, o), _n(i), i.$$parserName = "email", i.$validators.email = function(t, e) {
            var n = t || e;
            return i.$isEmpty(n) || qr.test(n)
        }
    }

    function Ln(t, e, n, i) {
        v(n.name) && e.attr("name", l());
        var r = function(t) {
            e[0].checked && i.$setViewValue(n.value, t && t.type)
        };
        e.on("click", r), i.$render = function() {
            var t = n.value;
            e[0].checked = t == i.$viewValue
        }, n.$observe("value", i.$render)
    }

    function Mn(t, e, n, r, o) {
        var s;
        if (y(r)) {
            if (s = t(r), !s.constant) throw i("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
            return s(e)
        }
        return o
    }

    function Fn(t, e, n, i, r, o, s, a) {
        var u = Mn(a, t, "ngTrueValue", n.ngTrueValue, !0),
            l = Mn(a, t, "ngFalseValue", n.ngFalseValue, !1),
            c = function(t) {
                i.$setViewValue(e[0].checked, t && t.type)
            };
        e.on("click", c), i.$render = function() {
            e[0].checked = i.$viewValue
        }, i.$isEmpty = function(t) {
            return t === !1
        }, i.$formatters.push(function(t) {
            return P(t, u)
        }), i.$parsers.push(function(t) {
            return t ? u : l
        })
    }

    function Un(t) {
        function e(t, e, u) {
            e === n ? i("$pending", t, u) : r("$pending", t, u), j(e) ? e ? (f(a.$error, t, u), c(a.$$success, t, u)) : (c(a.$error, t, u), f(a.$$success, t, u)) : (f(a.$error, t, u), f(a.$$success, t, u)), a.$pending ? (o(Zr, !0), a.$valid = a.$invalid = n, s("", null)) : (o(Zr, !1), a.$valid = Bn(a.$error), a.$invalid = !a.$valid, s("", a.$valid));
            var l;
            l = a.$pending && a.$pending[t] ? n : a.$error[t] ? !1 : a.$$success[t] ? !0 : null, s(t, l), h.$setValidity(t, l, a)
        }

        function i(t, e, n) {
            a[t] || (a[t] = {}), c(a[t], e, n)
        }

        function r(t, e, i) {
            a[t] && f(a[t], e, i), Bn(a[t]) && (a[t] = n)
        }

        function o(t, e) {
            e && !l[t] ? (d.addClass(u, t), l[t] = !0) : !e && l[t] && (d.removeClass(u, t), l[t] = !1)
        }

        function s(t, e) {
            t = t ? "-" + nt(t, "-") : "", o(Kr + t, e === !0), o(Xr + t, e === !1)
        }
        var a = t.ctrl,
            u = t.$element,
            l = {},
            c = t.set,
            f = t.unset,
            h = t.parentForm,
            d = t.$animate;
        l[Xr] = !(l[Kr] = u.hasClass(Kr)), a.$setValidity = e
    }

    function Bn(t) {
        if (t)
            for (var e in t) return !1;
        return !0
    }

    function Vn(t, e) {
        return t = "ngClass" + t, ["$animate", function(n) {
            function i(t, e) {
                var n = [];
                t: for (var i = 0; i < t.length; i++) {
                    for (var r = t[i], o = 0; o < e.length; o++)
                        if (r == e[o]) continue t;
                    n.push(r)
                }
                return n
            }

            function r(t) {
                if (ci(t)) return t;
                if (b(t)) return t.split(" ");
                if ($(t)) {
                    var e = [];
                    return o(t, function(t, n) {
                        t && (e = e.concat(n.split(" ")))
                    }), e
                }
                return t
            }
            return {
                restrict: "AC",
                link: function(s, a, u) {
                    function l(t) {
                        var e = f(t, 1);
                        u.$addClass(e)
                    }

                    function c(t) {
                        var e = f(t, -1);
                        u.$removeClass(e)
                    }

                    function f(t, e) {
                        var n = a.data("$classCounts") || {},
                            i = [];
                        return o(t, function(t) {
                            (e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && i.push(t))
                        }), a.data("$classCounts", n), i.join(" ")
                    }

                    function h(t, e) {
                        var r = i(e, t),
                            o = i(t, e);
                        r = f(r, 1), o = f(o, -1), r && r.length && n.addClass(a, r), o && o.length && n.removeClass(a, o)
                    }

                    function d(t) {
                        if (e === !0 || s.$index % 2 === e) {
                            var n = r(t || []);
                            if (p) {
                                if (!P(t, p)) {
                                    var i = r(p);
                                    h(i, n)
                                }
                            } else l(n)
                        }
                        p = H(t)
                    }
                    var p;
                    s.$watch(u[t], d, !0), u.$observe("class", function(e) {
                        d(s.$eval(u[t]))
                    }), "ngClass" !== t && s.$watch("$index", function(n, i) {
                        var o = 1 & n;
                        if (o !== (1 & i)) {
                            var a = r(s.$eval(u[t]));
                            o === e ? l(a) : c(a)
                        }
                    })
                }
            }
        }]
    }
    var zn = /^\/(.+)\/([a-z]*)$/,
        Wn = "validity",
        Kn = function(t) {
            return b(t) ? t.toLowerCase() : t
        },
        Xn = Object.prototype.hasOwnProperty,
        Qn = function(t) {
            return b(t) ? t.toUpperCase() : t
        },
        Gn = function(t) {
            return b(t) ? t.replace(/[A-Z]/g, function(t) {
                return String.fromCharCode(32 | t.charCodeAt(0))
            }) : t
        },
        Jn = function(t) {
            return b(t) ? t.replace(/[a-z]/g, function(t) {
                return String.fromCharCode(-33 & t.charCodeAt(0))
            }) : t
        };
    "i" !== "I".toLowerCase() && (Kn = Gn, Qn = Jn);
    var Yn, Zn, ti, ei, ni = [].slice,
        ii = [].splice,
        ri = [].push,
        oi = Object.prototype.toString,
        si = i("ng"),
        ai = t.angular || (t.angular = {}),
        ui = 0;
    Yn = e.documentMode, p.$inject = [], m.$inject = [];
    var li, ci = Array.isArray,
        fi = function(t) {
            return b(t) ? t.trim() : t
        },
        hi = function(t) {
            return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        di = function() {
            if (y(di.isActive_)) return di.isActive_;
            var t = !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"));
            if (!t) try {
                new Function("")
            } catch (n) {
                t = !0
            }
            return di.isActive_ = t
        },
        pi = ["ng-", "data-ng-", "ng:", "x-ng-"],
        mi = /[A-Z]/g,
        gi = !1,
        vi = 1,
        yi = 3,
        $i = 8,
        bi = 9,
        wi = 11,
        xi = {
            full: "1.3.8",
            major: 1,
            minor: 3,
            dot: 8,
            codeName: "prophetic-narwhal"
        };
    bt.expando = "ng339";
    var Ci = bt.cache = {},
        Si = 1,
        Ti = function(t, e, n) {
            t.addEventListener(e, n, !1)
        },
        ki = function(t, e, n) {
            t.removeEventListener(e, n, !1)
        };
    bt._data = function(t) {
        return this.cache[t[this.expando]] || {}
    };
    var Ei = /([\:\-\_]+(.))/g,
        Ai = /^moz([A-Z])/,
        _i = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        ji = i("jqLite"),
        Ni = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Ri = /<|&#?\w+;/,
        Di = /<([\w:]+)/,
        Oi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ii = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ii.optgroup = Ii.option, Ii.tbody = Ii.tfoot = Ii.colgroup = Ii.caption = Ii.thead, Ii.th = Ii.td;
    var qi = bt.prototype = {
            ready: function(n) {
                function i() {
                    r || (r = !0, n())
                }
                var r = !1;
                "complete" === e.readyState ? setTimeout(i) : (this.on("DOMContentLoaded", i), bt(t).on("load", i))
            },
            toString: function() {
                var t = [];
                return o(this, function(e) {
                    t.push("" + e)
                }), "[" + t.join(", ") + "]"
            },
            eq: function(t) {
                return Zn(t >= 0 ? this[t] : this[this.length + t])
            },
            length: 0,
            push: ri,
            sort: [].sort,
            splice: [].splice
        },
        Hi = {};
    o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(t) {
        Hi[Kn(t)] = t
    });
    var Pi = {};
    o("input,select,option,textarea,button,form,details".split(","), function(t) {
        Pi[t] = !0
    });
    var Li = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    o({
        data: kt,
        removeData: St
    }, function(t, e) {
        bt[e] = t
    }), o({
        data: kt,
        inheritedData: Rt,
        scope: function(t) {
            return Zn.data(t, "$scope") || Rt(t.parentNode || t, ["$isolateScope", "$scope"])
        },
        isolateScope: function(t) {
            return Zn.data(t, "$isolateScope") || Zn.data(t, "$isolateScopeNoTemplate")
        },
        controller: Nt,
        injector: function(t) {
            return Rt(t, "$injector")
        },
        removeAttr: function(t, e) {
            t.removeAttribute(e)
        },
        hasClass: Et,
        css: function(t, e, n) {
            return e = mt(e), y(n) ? void(t.style[e] = n) : t.style[e]
        },
        attr: function(t, e, i) {
            var r = Kn(e);
            if (Hi[r]) {
                if (!y(i)) return t[e] || (t.attributes.getNamedItem(e) || p).specified ? r : n;
                i ? (t[e] = !0, t.setAttribute(e, r)) : (t[e] = !1, t.removeAttribute(r))
            } else if (y(i)) t.setAttribute(e, i);
            else if (t.getAttribute) {
                var o = t.getAttribute(e, 2);
                return null === o ? n : o
            }
        },
        prop: function(t, e, n) {
            return y(n) ? void(t[e] = n) : t[e]
        },
        text: function() {
            function t(t, e) {
                if (v(e)) {
                    var n = t.nodeType;
                    return n === vi || n === yi ? t.textContent : ""
                }
                t.textContent = e
            }
            return t.$dv = "", t
        }(),
        val: function(t, e) {
            if (v(e)) {
                if (t.multiple && "select" === O(t)) {
                    var n = [];
                    return o(t.options, function(t) {
                        t.selected && n.push(t.value || t.text)
                    }), 0 === n.length ? null : n
                }
                return t.value
            }
            t.value = e
        },
        html: function(t, e) {
            return v(e) ? t.innerHTML : (xt(t, !0), void(t.innerHTML = e))
        },
        empty: Dt
    }, function(t, e) {
        bt.prototype[e] = function(e, i) {
            var r, o, s = this.length;
            if (t !== Dt && (2 == t.length && t !== Et && t !== Nt ? e : i) === n) {
                if ($(e)) {
                    for (r = 0; s > r; r++)
                        if (t === kt) t(this[r], e);
                        else
                            for (o in e) t(this[r], o, e[o]);
                    return this
                }
                for (var a = t.$dv, u = a === n ? Math.min(s, 1) : s, l = 0; u > l; l++) {
                    var c = t(this[l], e, i);
                    a = a ? a + c : c
                }
                return a
            }
            for (r = 0; s > r; r++) t(this[r], e, i);
            return this
        }
    }), o({
        removeData: St,
        on: function Vo(t, e, n, i) {
            if (y(i)) throw ji("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (vt(t)) {
                var r = Tt(t, !0),
                    o = r.events,
                    s = r.handle;
                s || (s = r.handle = Pt(t, o));
                for (var a = e.indexOf(" ") >= 0 ? e.split(" ") : [e], u = a.length; u--;) {
                    e = a[u];
                    var l = o[e];
                    l || (o[e] = [], "mouseenter" === e || "mouseleave" === e ? Vo(t, _i[e], function(t) {
                        var n = this,
                            i = t.relatedTarget;
                        (!i || i !== n && !n.contains(i)) && s(t, e)
                    }) : "$destroy" !== e && Ti(t, e, s), l = o[e]), l.push(n)
                }
            }
        },
        off: Ct,
        one: function(t, e, n) {
            t = Zn(t), t.on(e, function i() {
                t.off(e, n), t.off(e, i)
            }), t.on(e, n)
        },
        replaceWith: function(t, e) {
            var n, i = t.parentNode;
            xt(t), o(new bt(e), function(e) {
                n ? i.insertBefore(e, n.nextSibling) : i.replaceChild(e, t), n = e
            })
        },
        children: function(t) {
            var e = [];
            return o(t.childNodes, function(t) {
                t.nodeType === vi && e.push(t)
            }), e
        },
        contents: function(t) {
            return t.contentDocument || t.childNodes || []
        },
        append: function(t, e) {
            var n = t.nodeType;
            if (n === vi || n === wi) {
                e = new bt(e);
                for (var i = 0, r = e.length; r > i; i++) {
                    var o = e[i];
                    t.appendChild(o)
                }
            }
        },
        prepend: function(t, e) {
            if (t.nodeType === vi) {
                var n = t.firstChild;
                o(new bt(e), function(e) {
                    t.insertBefore(e, n)
                })
            }
        },
        wrap: function(t, e) {
            e = Zn(e).eq(0).clone()[0];
            var n = t.parentNode;
            n && n.replaceChild(e, t), e.appendChild(t)
        },
        remove: Ot,
        detach: function(t) {
            Ot(t, !0)
        },
        after: function(t, e) {
            var n = t,
                i = t.parentNode;
            e = new bt(e);
            for (var r = 0, o = e.length; o > r; r++) {
                var s = e[r];
                i.insertBefore(s, n.nextSibling), n = s
            }
        },
        addClass: _t,
        removeClass: At,
        toggleClass: function(t, e, n) {
            e && o(e.split(" "), function(e) {
                var i = n;
                v(i) && (i = !Et(t, e)), (i ? _t : At)(t, e)
            })
        },
        parent: function(t) {
            var e = t.parentNode;
            return e && e.nodeType !== wi ? e : null
        },
        next: function(t) {
            return t.nextElementSibling
        },
        find: function(t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : []
        },
        clone: wt,
        triggerHandler: function(t, e, n) {
            var i, r, s, a = e.type || e,
                u = Tt(t),
                l = u && u.events,
                c = l && l[a];
            c && (i = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return this.defaultPrevented === !0
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return this.immediatePropagationStopped === !0
                },
                stopPropagation: p,
                type: a,
                target: t
            }, e.type && (i = f(i, e)), r = H(c), s = n ? [i].concat(n) : [i], o(r, function(e) {
                i.isImmediatePropagationStopped() || e.apply(t, s)
            }))
        }
    }, function(t, e) {
        bt.prototype[e] = function(e, n, i) {
            for (var r, o = 0, s = this.length; s > o; o++) v(r) ? (r = t(this[o], e, n, i), y(r) && (r = Zn(r))) : jt(r, t(this[o], e, n, i));
            return y(r) ? r : this
        }, bt.prototype.bind = bt.prototype.on, bt.prototype.unbind = bt.prototype.off
    }), Ft.prototype = {
        put: function(t, e) {
            this[Mt(t, this.nextUid)] = e
        },
        get: function(t) {
            return this[Mt(t, this.nextUid)]
        },
        remove: function(t) {
            var e = this[t = Mt(t, this.nextUid)];
            return delete this[t], e
        }
    };
    var Mi = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        Fi = /,/,
        Ui = /^\s*(_?)(\S+?)\1\s*$/,
        Bi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Vi = i("$injector");
    Vt.$$annotate = Bt;
    var zi = i("$animate"),
        Wi = ["$provide", function(t) {
            this.$$selectors = {}, this.register = function(e, n) {
                var i = e + "-animation";
                if (e && "." != e.charAt(0)) throw zi("notcsel", "Expecting class selector starting with '.' got '{0}'.", e);
                this.$$selectors[e.substr(1)] = i, t.factory(i, n)
            }, this.classNameFilter = function(t) {
                return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null), this.$$classNameFilter
            }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(t, e, n) {
                function i(e) {
                    var i, r = t.defer();
                    return r.promise.$$cancelFn = function() {
                        i && i()
                    }, n.$$postDigest(function() {
                        i = e(function() {
                            r.resolve()
                        })
                    }), r.promise
                }

                function r(t, e) {
                    var n = [],
                        i = [],
                        r = lt();
                    return o((t.attr("class") || "").split(/\s+/), function(t) {
                        r[t] = !0
                    }), o(e, function(t, e) {
                        var o = r[e];
                        t === !1 && o ? i.push(e) : t !== !0 || o || n.push(e)
                    }), n.length + i.length > 0 && [n.length ? n : null, i.length ? i : null]
                }

                function s(t, e, n) {
                    for (var i = 0, r = e.length; r > i; ++i) {
                        var o = e[i];
                        t[o] = n
                    }
                }

                function a() {
                    return l || (l = t.defer(), e(function() {
                        l.resolve(), l = null
                    })), l.promise
                }

                function u(t, e) {
                    if (ai.isObject(e)) {
                        var n = f(e.from || {}, e.to || {});
                        t.css(n)
                    }
                }
                var l;
                return {
                    animate: function(t, e, n) {
                        return u(t, {
                            from: e,
                            to: n
                        }), a()
                    },
                    enter: function(t, e, n, i) {
                        return u(t, i), n ? n.after(t) : e.prepend(t), a()
                    },
                    leave: function(t, e) {
                        return t.remove(), a()
                    },
                    move: function(t, e, n, i) {
                        return this.enter(t, e, n, i)
                    },
                    addClass: function(t, e, n) {
                        return this.setClass(t, e, [], n)
                    },
                    $$addClassImmediately: function(t, e, n) {
                        return t = Zn(t), e = b(e) ? e : ci(e) ? e.join(" ") : "", o(t, function(t) {
                            _t(t, e)
                        }), u(t, n), a()
                    },
                    removeClass: function(t, e, n) {
                        return this.setClass(t, [], e, n)
                    },
                    $$removeClassImmediately: function(t, e, n) {
                        return t = Zn(t), e = b(e) ? e : ci(e) ? e.join(" ") : "", o(t, function(t) {
                            At(t, e)
                        }), u(t, n), a()
                    },
                    setClass: function(t, e, n, o) {
                        var a = this,
                            u = "$$animateClasses",
                            l = !1;
                        t = Zn(t);
                        var c = t.data(u);
                        c ? o && c.options && (c.options = ai.extend(c.options || {}, o)) : (c = {
                            classes: {},
                            options: o
                        }, l = !0);
                        var f = c.classes;
                        return e = ci(e) ? e : e.split(" "), n = ci(n) ? n : n.split(" "), s(f, e, !0), s(f, n, !1), l && (c.promise = i(function(e) {
                            var n = t.data(u);
                            if (t.removeData(u), n) {
                                var i = r(t, n.classes);
                                i && a.$$setClassImmediately(t, i[0], i[1], n.options)
                            }
                            e()
                        }), t.data(u, c)), c.promise
                    },
                    $$setClassImmediately: function(t, e, n, i) {
                        return e && this.$$addClassImmediately(t, e), n && this.$$removeClassImmediately(t, n), u(t, i), a()
                    },
                    enabled: p,
                    cancel: p
                }
            }]
        }],
        Ki = i("$compile");
    Jt.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Xi = /^((?:x|data)[\:\-_])/i,
        Qi = "application/json",
        Gi = {
            "Content-Type": Qi + ";charset=utf-8"
        },
        Ji = /^\[|^\{(?!\{)/,
        Yi = {
            "[": /]$/,
            "{": /}$/
        },
        Zi = /^\)\]\}',?\n/,
        tr = i("$interpolate"),
        er = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        nr = {
            http: 80,
            https: 443,
            ftp: 21
        },
        ir = i("$location"),
        rr = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Ae("$$absUrl"),
            url: function(t) {
                if (v(t)) return this.$$url;
                var e = er.exec(t);
                return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
            },
            protocol: Ae("$$protocol"),
            host: Ae("$$host"),
            port: Ae("$$port"),
            path: _e("$$path", function(t) {
                return t = null !== t ? t.toString() : "", "/" == t.charAt(0) ? t : "/" + t
            }),
            search: function(t, e) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (b(t) || w(t)) t = t.toString(), this.$$search = K(t);
                        else {
                            if (!$(t)) throw ir("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                            t = q(t, {}), o(t, function(e, n) {
                                null == e && delete t[n]
                            }), this.$$search = t
                        }
                        break;
                    default:
                        v(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
                }
                return this.$$compose(), this
            },
            hash: _e("$$hash", function(t) {
                return null !== t ? t.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    o([Ee, ke, Te], function(t) {
        t.prototype = Object.create(rr), t.prototype.state = function(e) {
            if (!arguments.length) return this.$$state;
            if (t !== Te || !this.$$html5) throw ir("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = v(e) ? null : e, this
        }
    });
    var or = i("$parse"),
        sr = Function.prototype.call,
        ar = Function.prototype.apply,
        ur = Function.prototype.bind,
        lr = lt();
    o({
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: function() {}
    }, function(t, e) {
        t.constant = t.literal = t.sharedGetter = !0, lr[e] = t
    }), lr["this"] = function(t) {
        return t
    }, lr["this"].sharedGetter = !0;
    var cr = f(lt(), {
            "+": function(t, e, i, r) {
                return i = i(t, e), r = r(t, e), y(i) ? y(r) ? i + r : i : y(r) ? r : n
            },
            "-": function(t, e, n, i) {
                return n = n(t, e), i = i(t, e), (y(n) ? n : 0) - (y(i) ? i : 0)
            },
            "*": function(t, e, n, i) {
                return n(t, e) * i(t, e)
            },
            "/": function(t, e, n, i) {
                return n(t, e) / i(t, e)
            },
            "%": function(t, e, n, i) {
                return n(t, e) % i(t, e)
            },
            "===": function(t, e, n, i) {
                return n(t, e) === i(t, e)
            },
            "!==": function(t, e, n, i) {
                return n(t, e) !== i(t, e)
            },
            "==": function(t, e, n, i) {
                return n(t, e) == i(t, e)
            },
            "!=": function(t, e, n, i) {
                return n(t, e) != i(t, e)
            },
            "<": function(t, e, n, i) {
                return n(t, e) < i(t, e)
            },
            ">": function(t, e, n, i) {
                return n(t, e) > i(t, e)
            },
            "<=": function(t, e, n, i) {
                return n(t, e) <= i(t, e)
            },
            ">=": function(t, e, n, i) {
                return n(t, e) >= i(t, e)
            },
            "&&": function(t, e, n, i) {
                return n(t, e) && i(t, e)
            },
            "||": function(t, e, n, i) {
                return n(t, e) || i(t, e)
            },
            "!": function(t, e, n) {
                return !n(t, e)
            },
            "=": !0,
            "|": !0
        }),
        fr = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "",
            "'": "'",
            '"': '"'
        },
        hr = function(t) {
            this.options = t
        };
    hr.prototype = {
        constructor: hr,
        lex: function(t) {
            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var e = this.text.charAt(this.index);
                if ('"' === e || "'" === e) this.readString(e);
                else if (this.isNumber(e) || "." === e && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(e)) this.readIdent();
                else if (this.is(e, "(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: e
                }), this.index++;
                else if (this.isWhitespace(e)) this.index++;
                else {
                    var n = e + this.peek(),
                        i = n + this.peek(2),
                        r = cr[e],
                        o = cr[n],
                        s = cr[i];
                    if (r || o || s) {
                        var a = s ? i : o ? n : e;
                        this.tokens.push({
                            index: this.index,
                            text: a,
                            operator: !0
                        }), this.index += a.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        },
        is: function(t, e) {
            return -1 !== e.indexOf(t)
        },
        peek: function(t) {
            var e = t || 1;
            return this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
        },
        isNumber: function(t) {
            return t >= "0" && "9" >= t && "string" == typeof t
        },
        isWhitespace: function(t) {
            return " " === t || "\r" === t || "	" === t || "\n" === t || "" === t || "\xa0" === t
        },
        isIdent: function(t) {
            return t >= "a" && "z" >= t || t >= "A" && "Z" >= t || "_" === t || "$" === t
        },
        isExpOperator: function(t) {
            return "-" === t || "+" === t || this.isNumber(t)
        },
        throwError: function(t, e, n) {
            n = n || this.index;
            var i = y(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
            throw or("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, i, this.text)
        },
        readNumber: function() {
            for (var t = "", e = this.index; this.index < this.text.length;) {
                var n = Kn(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) t += n;
                else {
                    var i = this.peek();
                    if ("e" == n && this.isExpOperator(i)) t += n;
                    else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" == t.charAt(t.length - 1)) t += n;
                    else {
                        if (!this.isExpOperator(n) || i && this.isNumber(i) || "e" != t.charAt(t.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: e,
                text: t,
                constant: !0,
                value: Number(t)
            })
        },
        readIdent: function() {
            for (var t = this.index; this.index < this.text.length;) {
                var e = this.text.charAt(this.index);
                if (!this.isIdent(e) && !this.isNumber(e)) break;
                this.index++
            }
            this.tokens.push({
                index: t,
                text: this.text.slice(t, this.index),
                identifier: !0
            })
        },
        readString: function(t) {
            var e = this.index;
            this.index++;
            for (var n = "", i = t, r = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index);
                if (i += o, r) {
                    if ("u" === o) {
                        var s = this.text.substring(this.index + 1, this.index + 5);
                        s.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + s + "]"), this.index += 4, n += String.fromCharCode(parseInt(s, 16))
                    } else {
                        var a = fr[o];
                        n += a || o
                    }
                    r = !1
                } else if ("\\" === o) r = !0;
                else {
                    if (o === t) return this.index++, void this.tokens.push({
                        index: e,
                        text: i,
                        constant: !0,
                        value: n
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", e)
        }
    };
    var dr = function(t, e, n) {
        this.lexer = t, this.$filter = e, this.options = n
    };
    dr.ZERO = f(function() {
        return 0
    }, {
        sharedGetter: !0,
        constant: !0
    }), dr.prototype = {
        constructor: dr,
        parse: function(t) {
            this.text = t, this.tokens = this.lexer.lex(t);
            var e = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e
        },
        primary: function() {
            var t;
            this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.peek().identifier && this.peek().text in lr ? t = lr[this.consume().text] : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var e, n; e = this.expect("(", "[", ".");) "(" === e.text ? (t = this.functionCall(t, n), n = null) : "[" === e.text ? (n = t, t = this.objectIndex(t)) : "." === e.text ? (n = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
            return t
        },
        throwError: function(t, e) {
            throw or("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw or("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        },
        peek: function(t, e, n, i) {
            return this.peekAhead(0, t, e, n, i)
        },
        peekAhead: function(t, e, n, i, r) {
            if (this.tokens.length > t) {
                var o = this.tokens[t],
                    s = o.text;
                if (s === e || s === n || s === i || s === r || !e && !n && !i && !r) return o
            }
            return !1
        },
        expect: function(t, e, n, i) {
            var r = this.peek(t, e, n, i);
            return r ? (this.tokens.shift(), r) : !1
        },
        consume: function(t) {
            if (0 === this.tokens.length) throw or("ueoe", "Unexpected end of expression: {0}", this.text);
            var e = this.expect(t);
            return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
        },
        unaryFn: function(t, e) {
            var n = cr[t];
            return f(function(t, i) {
                return n(t, i, e)
            }, {
                constant: e.constant,
                inputs: [e]
            })
        },
        binaryFn: function(t, e, n, i) {
            var r = cr[e];
            return f(function(e, i) {
                return r(e, i, t, n)
            }, {
                constant: t.constant && n.constant,
                inputs: !i && [t, n]
            })
        },
        identifier: function() {
            for (var t = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) t += this.consume().text + this.consume().text;
            return Me(t, this.options, this.text)
        },
        constant: function() {
            var t = this.consume().value;
            return f(function() {
                return t
            }, {
                constant: !0,
                literal: !0
            })
        },
        statements: function() {
            for (var t = [];;)
                if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";")) return 1 === t.length ? t[0] : function(e, n) {
                    for (var i, r = 0, o = t.length; o > r; r++) i = t[r](e, n);
                    return i
                }
        },
        filterChain: function() {
            for (var t, e = this.expression(); t = this.expect("|");) e = this.filter(e);
            return e
        },
        filter: function(t) {
            var e, i, r = this.$filter(this.consume().text);
            if (this.peek(":"))
                for (e = [], i = []; this.expect(":");) e.push(this.expression());
            var o = [t].concat(e || []);
            return f(function(o, s) {
                var a = t(o, s);
                if (i) {
                    i[0] = a;
                    for (var u = e.length; u--;) i[u + 1] = e[u](o, s);
                    return r.apply(n, i)
                }
                return r(a)
            }, {
                constant: !r.$stateful && o.every(Ie),
                inputs: !r.$stateful && o
            })
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var t, e, n = this.ternary();
            return (e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(), f(function(e, i) {
                return n.assign(e, t(e, i), i)
            }, {
                inputs: [n, t]
            })) : n
        },
        ternary: function() {
            var t, e, n = this.logicalOR();
            if ((e = this.expect("?")) && (t = this.assignment(), this.consume(":"))) {
                var i = this.assignment();
                return f(function(e, r) {
                    return n(e, r) ? t(e, r) : i(e, r)
                }, {
                    constant: n.constant && t.constant && i.constant
                })
            }
            return n
        },
        logicalOR: function() {
            for (var t, e = this.logicalAND(); t = this.expect("||");) e = this.binaryFn(e, t.text, this.logicalAND(), !0);
            return e
        },
        logicalAND: function() {
            for (var t, e = this.equality(); t = this.expect("&&");) e = this.binaryFn(e, t.text, this.equality(), !0);
            return e
        },
        equality: function() {
            for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");) e = this.binaryFn(e, t.text, this.relational());
            return e
        },
        relational: function() {
            for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");) e = this.binaryFn(e, t.text, this.additive());
            return e
        },
        additive: function() {
            for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = this.binaryFn(e, t.text, this.multiplicative());
            return e
        },
        multiplicative: function() {
            for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = this.binaryFn(e, t.text, this.unary());
            return e
        },
        unary: function() {
            var t;
            return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(dr.ZERO, t.text, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.text, this.unary()) : this.primary()
        },
        fieldAccess: function(t) {
            var e = this.identifier();
            return f(function(i, r, o) {
                var s = o || t(i, r);
                return null == s ? n : e(s)
            }, {
                assign: function(n, i, r) {
                    var o = t(n, r);
                    return o || t.assign(n, o = {}), e.assign(o, i)
                }
            })
        },
        objectIndex: function(t) {
            var e = this.text,
                i = this.expression();
            return this.consume("]"), f(function(r, o) {
                var s, a = t(r, o),
                    u = i(r, o);
                return Re(u, e), a ? s = De(a[u], e) : n
            }, {
                assign: function(n, r, o) {
                    var s = Re(i(n, o), e),
                        a = De(t(n, o), e);
                    return a || t.assign(n, a = {}), a[s] = r
                }
            })
        },
        functionCall: function(t, e) {
            var i = [];
            if (")" !== this.peekToken().text)
                do i.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var r = this.text,
                o = i.length ? [] : null;
            return function(s, a) {
                var u = e ? e(s, a) : y(e) ? n : s,
                    l = t(s, a, u) || p;
                if (o)
                    for (var c = i.length; c--;) o[c] = De(i[c](s, a), r);
                De(u, r), Oe(l, r);
                var f = l.apply ? l.apply(u, o) : l(o[0], o[1], o[2], o[3], o[4]);
                return De(f, r)
            }
        },
        arrayDeclaration: function() {
            var t = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    t.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), f(function(e, n) {
                for (var i = [], r = 0, o = t.length; o > r; r++) i.push(t[r](e, n));
                return i
            }, {
                literal: !0,
                constant: t.every(Ie),
                inputs: t
            })
        },
        object: function() {
            var t = [],
                e = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    var n = this.consume();
                    n.constant ? t.push(n.value) : n.identifier ? t.push(n.text) : this.throwError("invalid key", n), this.consume(":"), e.push(this.expression())
                } while (this.expect(","));
            return this.consume("}"), f(function(n, i) {
                for (var r = {}, o = 0, s = e.length; s > o; o++) r[t[o]] = e[o](n, i);
                return r
            }, {
                literal: !0,
                constant: e.every(Ie),
                inputs: e
            })
        }
    };
    var pr = lt(),
        mr = lt(),
        gr = Object.prototype.valueOf,
        vr = i("$sce"),
        yr = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Ki = i("$compile"),
        $r = e.createElement("a"),
        br = rn(t.location.href);
    an.$inject = ["$provide"], fn.$inject = ["$locale"], hn.$inject = ["$locale"];
    var wr = ".",
        xr = {
            yyyy: mn("FullYear", 4),
            yy: mn("FullYear", 2, 0, !0),
            y: mn("FullYear", 1),
            MMMM: gn("Month"),
            MMM: gn("Month", !0),
            MM: mn("Month", 2, 1),
            M: mn("Month", 1, 1),
            dd: mn("Date", 2),
            d: mn("Date", 1),
            HH: mn("Hours", 2),
            H: mn("Hours", 1),
            hh: mn("Hours", 2, -12),
            h: mn("Hours", 1, -12),
            mm: mn("Minutes", 2),
            m: mn("Minutes", 1),
            ss: mn("Seconds", 2),
            s: mn("Seconds", 1),
            sss: mn("Milliseconds", 3),
            EEEE: gn("Day"),
            EEE: gn("Day", !0),
            a: wn,
            Z: vn,
            ww: bn(2),
            w: bn(1)
        },
        Cr = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
        Sr = /^\-?\d+$/;
    xn.$inject = ["$locale"];
    var Tr = g(Kn),
        kr = g(Qn);
    Tn.$inject = ["$parse"];
    var Er = g({
            restrict: "E",
            compile: function(t, e) {
                return e.href || e.xlinkHref || e.name ? void 0 : function(t, e) {
                    var n = "[object SVGAnimatedString]" === oi.call(e.prop("href")) ? "xlink:href" : "href";
                    e.on("click", function(t) {
                        e.attr(n) || t.preventDefault()
                    })
                }
            }
        }),
        Ar = {};
    o(Hi, function(t, e) {
        if ("multiple" != t) {
            var n = Yt("ng-" + e);
            Ar[n] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: function(t, i, r) {
                        t.$watch(r[n], function(t) {
                            r.$set(e, !!t)
                        })
                    }
                }
            }
        }
    }), o(Li, function(t, e) {
        Ar[e] = function() {
            return {
                priority: 100,
                link: function(t, n, i) {
                    if ("ngPattern" === e && "/" == i.ngPattern.charAt(0)) {
                        var r = i.ngPattern.match(zn);
                        if (r) return void i.$set("ngPattern", new RegExp(r[1], r[2]))
                    }
                    t.$watch(i[e], function(t) {
                        i.$set(e, t)
                    })
                }
            }
        }
    }), o(["src", "srcset", "href"], function(t) {
        var e = Yt("ng-" + t);
        Ar[e] = function() {
            return {
                priority: 99,
                link: function(n, i, r) {
                    var o = t,
                        s = t;
                    "href" === t && "[object SVGAnimatedString]" === oi.call(i.prop("href")) && (s = "xlinkHref", r.$attr[s] = "xlink:href", o = null), r.$observe(e, function(e) {
                        return e ? (r.$set(s, e), void(Yn && o && i.prop(o, r[s]))) : void("href" === t && r.$set(s, null))
                    })
                }
            }
        }
    });
    var _r = {
            $addControl: p,
            $$renameControl: En,
            $removeControl: p,
            $setValidity: p,
            $setDirty: p,
            $setPristine: p,
            $setSubmitted: p
        },
        jr = "ng-submitted";
    An.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Nr = function(t) {
            return ["$timeout", function(e) {
                var i = {
                    name: "form",
                    restrict: t ? "EAC" : "E",
                    controller: An,
                    compile: function(t) {
                        return t.addClass(Qr).addClass(Kr), {
                            pre: function(t, i, r, o) {
                                if (!("action" in r)) {
                                    var s = function(e) {
                                        t.$apply(function() {
                                            o.$commitViewValue(), o.$setSubmitted()
                                        }), e.preventDefault()
                                    };
                                    Ti(i[0], "submit", s), i.on("$destroy", function() {
                                        e(function() {
                                            ki(i[0], "submit", s)
                                        }, 0, !1)
                                    })
                                }
                                var a = o.$$parentForm,
                                    u = o.$name;
                                u && (qe(t, u, o, u), r.$observe(r.name ? "name" : "ngForm", function(e) {
                                    u !== e && (qe(t, u, n, u), u = e, qe(t, u, o, u), a.$$renameControl(o, u))
                                })), i.on("$destroy", function() {
                                    a.$removeControl(o), u && qe(t, u, n, u), f(o, _r)
                                })
                            }
                        }
                    }
                };
                return i
            }]
        },
        Rr = Nr(),
        Dr = Nr(!0),
        Or = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        Ir = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        qr = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Hr = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        Pr = /^(\d{4})-(\d{2})-(\d{2})$/,
        Lr = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Mr = /^(\d{4})-W(\d\d)$/,
        Fr = /^(\d{4})-(\d\d)$/,
        Ur = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Br = /(\s+|^)default(\s+|$)/,
        Vr = new i("ngModel"),
        zr = {
            text: jn,
            date: On("date", Pr, Dn(Pr, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": On("datetimelocal", Lr, Dn(Lr, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: On("time", Ur, Dn(Ur, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: On("week", Mr, Rn, "yyyy-Www"),
            month: On("month", Fr, Dn(Fr, ["yyyy", "MM"]), "yyyy-MM"),
            number: qn,
            url: Hn,
            email: Pn,
            radio: Ln,
            checkbox: Fn,
            hidden: p,
            button: p,
            submit: p,
            reset: p,
            file: p
        },
        Wr = ["$browser", "$sniffer", "$filter", "$parse", function(t, e, n, i) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(r, o, s, a) {
                        a[0] && (zr[Kn(s.type)] || zr.text)(r, o, s, a[0], e, t, n, i)
                    }
                }
            }
        }],
        Kr = "ng-valid",
        Xr = "ng-invalid",
        Qr = "ng-pristine",
        Gr = "ng-dirty",
        Jr = "ng-untouched",
        Yr = "ng-touched",
        Zr = "ng-pending",
        to = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(t, e, i, r, s, a, u, l, c, f) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(i.name || "", !1)(t);
            var h = s(i.ngModel),
                d = h.assign,
                m = h,
                g = d,
                $ = null,
                b = this;
            this.$$setOptions = function(t) {
                if (b.$options = t, t && t.getterSetter) {
                    var e = s(i.ngModel + "()"),
                        n = s(i.ngModel + "($$$p)");
                    m = function(t) {
                        var n = h(t);
                        return C(n) && (n = e(t)), n
                    }, g = function(t, e) {
                        C(h(t)) ? n(t, {
                            $$$p: b.$modelValue
                        }) : d(t, b.$modelValue)
                    }
                } else if (!h.assign) throw Vr("nonassign", "Expression '{0}' is non-assignable. Element: {1}", i.ngModel, z(r))
            }, this.$render = p, this.$isEmpty = function(t) {
                return v(t) || "" === t || null === t || t !== t
            };
            var x = r.inheritedData("$formController") || _r,
                S = 0;
            Un({
                ctrl: this,
                $element: r,
                set: function(t, e) {
                    t[e] = !0
                },
                unset: function(t, e) {
                    delete t[e]
                },
                parentForm: x,
                $animate: a
            }), this.$setPristine = function() {
                b.$dirty = !1, b.$pristine = !0, a.removeClass(r, Gr), a.addClass(r, Qr)
            }, this.$setDirty = function() {
                b.$dirty = !0, b.$pristine = !1, a.removeClass(r, Qr), a.addClass(r, Gr), x.$setDirty()
            }, this.$setUntouched = function() {
                b.$touched = !1, b.$untouched = !0, a.setClass(r, Jr, Yr)
            }, this.$setTouched = function() {
                b.$touched = !0, b.$untouched = !1, a.setClass(r, Yr, Jr)
            }, this.$rollbackViewValue = function() {
                u.cancel($), b.$viewValue = b.$$lastCommittedViewValue, b.$render()
            }, this.$validate = function() {
                if (!w(b.$modelValue) || !isNaN(b.$modelValue)) {
                    var t = b.$$lastCommittedViewValue,
                        e = b.$$rawModelValue,
                        i = b.$$parserName || "parse",
                        r = b.$error[i] ? !1 : n,
                        o = b.$valid,
                        s = b.$modelValue,
                        a = b.$options && b.$options.allowInvalid;
                    b.$$runValidators(r, e, t, function(t) {
                        a || o === t || (b.$modelValue = t ? e : n, b.$modelValue !== s && b.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function(t, e, i, r) {
                function s(t) {
                    var e = b.$$parserName || "parse";
                    if (t === n) l(e, null);
                    else if (l(e, t), !t) return o(b.$validators, function(t, e) {
                        l(e, null)
                    }), o(b.$asyncValidators, function(t, e) {
                        l(e, null)
                    }), !1;
                    return !0
                }

                function a() {
                    var t = !0;
                    return o(b.$validators, function(n, r) {
                        var o = n(e, i);
                        t = t && o, l(r, o)
                    }), t ? !0 : (o(b.$asyncValidators, function(t, e) {
                        l(e, null)
                    }), !1)
                }

                function u() {
                    var t = [],
                        r = !0;
                    o(b.$asyncValidators, function(o, s) {
                        var a = o(e, i);
                        if (!N(a)) throw Vr("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", a);
                        l(s, n), t.push(a.then(function() {
                            l(s, !0)
                        }, function(t) {
                            r = !1, l(s, !1)
                        }))
                    }), t.length ? c.all(t).then(function() {
                        f(r)
                    }, p) : f(!0)
                }

                function l(t, e) {
                    h === S && b.$setValidity(t, e)
                }

                function f(t) {
                    h === S && r(t)
                }
                S++;
                var h = S;
                return s(t) && a() ? void u() : void f(!1)
            }, this.$commitViewValue = function() {
                var t = b.$viewValue;
                u.cancel($), (b.$$lastCommittedViewValue !== t || "" === t && b.$$hasNativeValidators) && (b.$$lastCommittedViewValue = t, b.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function() {
                function e() {
                    b.$modelValue !== a && b.$$writeModelToScope()
                }
                var i = b.$$lastCommittedViewValue,
                    r = i,
                    o = v(r) ? n : !0;
                if (o)
                    for (var s = 0; s < b.$parsers.length; s++)
                        if (r = b.$parsers[s](r), v(r)) {
                            o = !1;
                            break
                        }
                w(b.$modelValue) && isNaN(b.$modelValue) && (b.$modelValue = m(t));
                var a = b.$modelValue,
                    u = b.$options && b.$options.allowInvalid;
                b.$$rawModelValue = r, u && (b.$modelValue = r, e()), b.$$runValidators(o, r, b.$$lastCommittedViewValue, function(t) {
                    u || (b.$modelValue = t ? r : n, e())
                })
            }, this.$$writeModelToScope = function() {
                g(t, b.$modelValue), o(b.$viewChangeListeners, function(t) {
                    try {
                        t()
                    } catch (n) {
                        e(n)
                    }
                })
            }, this.$setViewValue = function(t, e) {
                b.$viewValue = t, (!b.$options || b.$options.updateOnDefault) && b.$$debounceViewValueCommit(e)
            }, this.$$debounceViewValueCommit = function(e) {
                var n, i = 0,
                    r = b.$options;
                r && y(r.debounce) && (n = r.debounce, w(n) ? i = n : w(n[e]) ? i = n[e] : w(n["default"]) && (i = n["default"])), u.cancel($), i ? $ = u(function() {
                    b.$commitViewValue()
                }, i) : l.$$phase ? b.$commitViewValue() : t.$apply(function() {
                    b.$commitViewValue()
                })
            }, t.$watch(function() {
                var e = m(t);
                if (e !== b.$modelValue) {
                    b.$modelValue = b.$$rawModelValue = e;
                    for (var i = b.$formatters, r = i.length, o = e; r--;) o = i[r](o);
                    b.$viewValue !== o && (b.$viewValue = b.$$lastCommittedViewValue = o, b.$render(), b.$$runValidators(n, e, o, p))
                }
                return e
            })
        }],
        eo = ["$rootScope", function(t) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: to,
                priority: 1,
                compile: function(e) {
                    return e.addClass(Qr).addClass(Jr).addClass(Kr), {
                        pre: function(t, e, n, i) {
                            var r = i[0],
                                o = i[1] || _r;
                            r.$$setOptions(i[2] && i[2].$options), o.$addControl(r), n.$observe("name", function(t) {
                                r.$name !== t && o.$$renameControl(r, t)
                            }), t.$on("$destroy", function() {
                                o.$removeControl(r)
                            })
                        },
                        post: function(e, n, i, r) {
                            var o = r[0];
                            o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function(t) {
                                o.$$debounceViewValueCommit(t && t.type)
                            }), n.on("blur", function(n) {
                                o.$touched || (t.$$phase ? e.$evalAsync(o.$setTouched) : e.$apply(o.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        no = g({
            restrict: "A",
            require: "ngModel",
            link: function(t, e, n, i) {
                i.$viewChangeListeners.push(function() {
                    t.$eval(n.ngChange)
                })
            }
        }),
        io = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, i) {
                    i && (n.required = !0, i.$validators.required = function(t, e) {
                        return !n.required || !i.$isEmpty(e)
                    }, n.$observe("required", function() {
                        i.$validate()
                    }))
                }
            }
        },
        ro = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, r, o) {
                    if (o) {
                        var s, a = r.ngPattern || r.pattern;
                        r.$observe("pattern", function(t) {
                            if (b(t) && t.length > 0 && (t = new RegExp("^" + t + "$")), t && !t.test) throw i("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", a, t, z(e));
                            s = t || n, o.$validate()
                        }), o.$validators.pattern = function(t) {
                            return o.$isEmpty(t) || v(s) || s.test(t)
                        }
                    }
                }
            }
        },
        oo = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, i) {
                    if (i) {
                        var r = -1;
                        n.$observe("maxlength", function(t) {
                            var e = h(t);
                            r = isNaN(e) ? -1 : e, i.$validate()
                        }), i.$validators.maxlength = function(t, e) {
                            return 0 > r || i.$isEmpty(t) || e.length <= r
                        }
                    }
                }
            }
        },
        so = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(t, e, n, i) {
                    if (i) {
                        var r = 0;
                        n.$observe("minlength", function(t) {
                            r = h(t) || 0, i.$validate()
                        }), i.$validators.minlength = function(t, e) {
                            return i.$isEmpty(e) || e.length >= r
                        }
                    }
                }
            }
        },
        ao = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(t, e, i, r) {
                    var s = e.attr(i.$attr.ngList) || ", ",
                        a = "false" !== i.ngTrim,
                        u = a ? fi(s) : s,
                        l = function(t) {
                            if (!v(t)) {
                                var e = [];
                                return t && o(t.split(u), function(t) {
                                    t && e.push(a ? fi(t) : t)
                                }), e
                            }
                        };
                    r.$parsers.push(l), r.$formatters.push(function(t) {
                        return ci(t) ? t.join(s) : n
                    }), r.$isEmpty = function(t) {
                        return !t || !t.length
                    }
                }
            }
        },
        uo = /^(true|false|\d+)$/,
        lo = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(t, e) {
                    return uo.test(e.ngValue) ? function(t, e, n) {
                        n.$set("value", t.$eval(n.ngValue))
                    } : function(t, e, n) {
                        t.$watch(n.ngValue, function(t) {
                            n.$set("value", t)
                        })
                    }
                }
            }
        },
        co = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(t, e) {
                    var i = this;
                    this.$options = t.$eval(e.ngModelOptions), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = fi(this.$options.updateOn.replace(Br, function() {
                        return i.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        fo = ["$compile", function(t) {
            return {
                restrict: "AC",
                compile: function(e) {
                    return t.$$addBindingClass(e),
                        function(e, i, r) {
                            t.$$addBindingInfo(i, r.ngBind), i = i[0], e.$watch(r.ngBind, function(t) {
                                i.textContent = t === n ? "" : t
                            })
                        }
                }
            }
        }],
        ho = ["$interpolate", "$compile", function(t, e) {
            return {
                compile: function(i) {
                    return e.$$addBindingClass(i),
                        function(i, r, o) {
                            var s = t(r.attr(o.$attr.ngBindTemplate));
                            e.$$addBindingInfo(r, s.expressions), r = r[0], o.$observe("ngBindTemplate", function(t) {
                                r.textContent = t === n ? "" : t
                            })
                        }
                }
            }
        }],
        po = ["$sce", "$parse", "$compile", function(t, e, n) {
            return {
                restrict: "A",
                compile: function(i, r) {
                    var o = e(r.ngBindHtml),
                        s = e(r.ngBindHtml, function(t) {
                            return (t || "").toString()
                        });
                    return n.$$addBindingClass(i),
                        function(e, i, r) {
                            n.$$addBindingInfo(i, r.ngBindHtml), e.$watch(s, function() {
                                i.html(t.getTrustedHtml(o(e)) || "")
                            })
                        }
                }
            }
        }],
        mo = Vn("", !0),
        go = Vn("Odd", 0),
        vo = Vn("Even", 1),
        yo = kn({
            compile: function(t, e) {
                e.$set("ngCloak", n), t.removeClass("ng-cloak")
            }
        }),
        $o = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        bo = {},
        wo = {
            blur: !0,
            focus: !0
        };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(t) {
        var e = Yt("ng-" + t);
        bo[e] = ["$parse", "$rootScope", function(n, i) {
            return {
                restrict: "A",
                compile: function(r, o) {
                    var s = n(o[e], null, !0);
                    return function(e, n) {
                        n.on(t, function(n) {
                            var r = function() {
                                s(e, {
                                    $event: n
                                })
                            };
                            wo[t] && i.$$phase ? e.$evalAsync(r) : e.$apply(r)
                        })
                    }
                }
            }
        }]
    });
    var xo = ["$animate", function(t) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(n, i, r, o, s) {
                    var a, u, l;
                    n.$watch(r.ngIf, function(n) {
                        n ? u || s(function(n, o) {
                            u = o, n[n.length++] = e.createComment(" end ngIf: " + r.ngIf + " "), a = {
                                clone: n
                            }, t.enter(n, i.parent(), i)
                        }) : (l && (l.remove(), l = null), u && (u.$destroy(), u = null), a && (l = ut(a.clone), t.leave(l).then(function() {
                            l = null
                        }), a = null))
                    })
                }
            }
        }],
        Co = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function(t, e, n, i) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ai.noop,
                compile: function(r, o) {
                    var s = o.ngInclude || o.src,
                        a = o.onload || "",
                        u = o.autoscroll;
                    return function(r, o, l, c, f) {
                        var h, d, p, m = 0,
                            g = function() {
                                d && (d.remove(), d = null), h && (h.$destroy(), h = null), p && (n.leave(p).then(function() {
                                    d = null
                                }), d = p, p = null)
                            };
                        r.$watch(i.parseAsResourceUrl(s), function(i) {
                            var s = function() {
                                    !y(u) || u && !r.$eval(u) || e()
                                },
                                l = ++m;
                            i ? (t(i, !0).then(function(t) {
                                if (l === m) {
                                    var e = r.$new();
                                    c.template = t;
                                    var u = f(e, function(t) {
                                        g(), n.enter(t, null, o).then(s)
                                    });
                                    h = e, p = u, h.$emit("$includeContentLoaded", i), r.$eval(a)
                                }
                            }, function() {
                                l === m && (g(), r.$emit("$includeContentError", i))
                            }), r.$emit("$includeContentRequested", i)) : (g(), c.template = null)
                        })
                    }
                }
            }
        }],
        So = ["$compile", function(t) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(n, i, r, o) {
                    return /SVG/.test(i[0].toString()) ? (i.empty(), void t(yt(o.template, e).childNodes)(n, function(t) {
                        i.append(t)
                    }, {
                        futureParentElement: i
                    })) : (i.html(o.template), void t(i.contents())(n))
                }
            }
        }],
        To = kn({
            priority: 450,
            compile: function() {
                return {
                    pre: function(t, e, n) {
                        t.$eval(n.ngInit)
                    }
                }
            }
        }),
        ko = kn({
            terminal: !0,
            priority: 1e3
        }),
        Eo = ["$locale", "$interpolate", function(t, e) {
            var n = /{}/g,
                i = /^when(Minus)?(.+)$/;
            return {
                restrict: "EA",
                link: function(r, s, a) {
                    function u(t) {
                        s.text(t || "")
                    }
                    var l, c = a.count,
                        f = a.$attr.when && s.attr(a.$attr.when),
                        h = a.offset || 0,
                        d = r.$eval(f) || {},
                        p = {},
                        m = e.startSymbol(),
                        g = e.endSymbol(),
                        v = m + c + "-" + h + g,
                        y = ai.noop;
                    o(a, function(t, e) {
                        var n = i.exec(e);
                        if (n) {
                            var r = (n[1] ? "-" : "") + Kn(n[2]);
                            d[r] = s.attr(a.$attr[e])
                        }
                    }), o(d, function(t, i) {
                        p[i] = e(t.replace(n, v))
                    }), r.$watch(c, function(e) {
                        var n = parseFloat(e),
                            i = isNaN(n);
                        i || n in d || (n = t.pluralCat(n - h)), n === l || i && isNaN(l) || (y(), y = r.$watch(p[n], u), l = n)
                    })
                }
            }
        }],
        Ao = ["$parse", "$animate", function(t, s) {
            var a = "$$NG_REMOVED",
                u = i("ngRepeat"),
                l = function(t, e, n, i, r, o, s) {
                    t[n] = i, r && (t[r] = o), t.$index = e, t.$first = 0 === e, t.$last = e === s - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & e))
                },
                c = function(t) {
                    return t.clone[0]
                },
                f = function(t) {
                    return t.clone[t.clone.length - 1]
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(i, h) {
                    var d = h.ngRepeat,
                        p = e.createComment(" end ngRepeat: " + d + " "),
                        m = d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!m) throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", d);
                    var g = m[1],
                        v = m[2],
                        y = m[3],
                        $ = m[4];
                    if (m = g.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !m) throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", g);
                    var b = m[3] || m[1],
                        w = m[2];
                    if (y && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(y) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(y))) throw u("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", y);
                    var x, C, S, T, k = {
                        $id: Mt
                    };
                    return $ ? x = t($) : (S = function(t, e) {
                            return Mt(e)
                        }, T = function(t) {
                            return t
                        }),
                        function(t, e, i, h, m) {
                            x && (C = function(e, n, i) {
                                return w && (k[w] = e), k[b] = n, k.$index = i, x(t, k)
                            });
                            var g = lt();
                            t.$watchCollection(v, function(i) {
                                var h, v, $, x, k, E, A, _, j, N, R, D, O = e[0],
                                    I = lt();
                                if (y && (t[y] = i), r(i)) j = i, _ = C || S;
                                else {
                                    _ = C || T, j = [];
                                    for (var q in i) i.hasOwnProperty(q) && "$" != q.charAt(0) && j.push(q);
                                    j.sort()
                                }
                                for (x = j.length, R = new Array(x), h = 0; x > h; h++)
                                    if (k = i === j ? h : j[h], E = i[k], A = _(k, E, h), g[A]) N = g[A], delete g[A], I[A] = N, R[h] = N;
                                    else {
                                        if (I[A]) throw o(R, function(t) {
                                            t && t.scope && (g[t.id] = t)
                                        }), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", d, A, E);
                                        R[h] = {
                                            id: A,
                                            scope: n,
                                            clone: n
                                        }, I[A] = !0
                                    }
                                for (var H in g) {
                                    if (N = g[H], D = ut(N.clone), s.leave(D), D[0].parentNode)
                                        for (h = 0, v = D.length; v > h; h++) D[h][a] = !0;
                                    N.scope.$destroy()
                                }
                                for (h = 0; x > h; h++)
                                    if (k = i === j ? h : j[h], E = i[k], N = R[h], N.scope) {
                                        $ = O;
                                        do $ = $.nextSibling; while ($ && $[a]);
                                        c(N) != $ && s.move(ut(N.clone), null, Zn(O)), O = f(N), l(N.scope, h, b, E, w, k, x)
                                    } else m(function(t, e) {
                                        N.scope = e;
                                        var n = p.cloneNode(!1);
                                        t[t.length++] = n, s.enter(t, null, Zn(O)), O = n, N.clone = t, I[N.id] = N, l(N.scope, h, b, E, w, k, x)
                                    });
                                g = I
                            })
                        }
                }
            }
        }],
        _o = "ng-hide",
        jo = "ng-hide-animate",
        No = ["$animate", function(t) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(e, n, i) {
                    e.$watch(i.ngShow, function(e) {
                        t[e ? "removeClass" : "addClass"](n, _o, {
                            tempClasses: jo
                        })
                    })
                }
            }
        }],
        Ro = ["$animate", function(t) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(e, n, i) {
                    e.$watch(i.ngHide, function(e) {
                        t[e ? "addClass" : "removeClass"](n, _o, {
                            tempClasses: jo
                        })
                    })
                }
            }
        }],
        Do = kn(function(t, e, n) {
            t.$watch(n.ngStyle, function(t, n) {
                n && t !== n && o(n, function(t, n) {
                    e.css(n, "")
                }), t && e.css(t)
            }, !0)
        }),
        Oo = ["$animate", function(t) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(n, i, r, s) {
                    var a = r.ngSwitch || r.on,
                        u = [],
                        l = [],
                        c = [],
                        f = [],
                        h = function(t, e) {
                            return function() {
                                t.splice(e, 1)
                            }
                        };
                    n.$watch(a, function(n) {
                        var i, r;
                        for (i = 0, r = c.length; r > i; ++i) t.cancel(c[i]);
                        for (c.length = 0, i = 0, r = f.length; r > i; ++i) {
                            var a = ut(l[i].clone);
                            f[i].$destroy();
                            var d = c[i] = t.leave(a);
                            d.then(h(c, i))
                        }
                        l.length = 0, f.length = 0, (u = s.cases["!" + n] || s.cases["?"]) && o(u, function(n) {
                            n.transclude(function(i, r) {
                                f.push(r);
                                var o = n.element;
                                i[i.length++] = e.createComment(" end ngSwitchWhen: ");
                                var s = {
                                    clone: i
                                };
                                l.push(s), t.enter(i, o.parent(), o)
                            })
                        })
                    })
                }
            }
        }],
        Io = kn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(t, e, n, i, r) {
                i.cases["!" + n.ngSwitchWhen] = i.cases["!" + n.ngSwitchWhen] || [], i.cases["!" + n.ngSwitchWhen].push({
                    transclude: r,
                    element: e
                })
            }
        }),
        qo = kn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(t, e, n, i, r) {
                i.cases["?"] = i.cases["?"] || [], i.cases["?"].push({
                    transclude: r,
                    element: e
                })
            }
        }),
        Ho = kn({
            restrict: "EAC",
            link: function(t, e, n, r, o) {
                if (!o) throw i("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", z(e));
                o(function(t) {
                    e.empty(), e.append(t)
                })
            }
        }),
        Po = ["$templateCache", function(t) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(e, n) {
                    if ("text/ng-template" == n.type) {
                        var i = n.id,
                            r = e[0].text;
                        t.put(i, r)
                    }
                }
            }
        }],
        Lo = i("ngOptions"),
        Mo = g({
            restrict: "A",
            terminal: !0
        }),
        Fo = ["$compile", "$parse", function(t, i) {
            var r = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                a = {
                    $setViewValue: p
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function(t, e, n) {
                    var i, r, o = this,
                        s = {},
                        u = a;
                    o.databound = n.ngModel, o.init = function(t, e, n) {
                        u = t, i = e, r = n
                    }, o.addOption = function(e, n) {
                        st(e, '"option value"'), s[e] = !0, u.$viewValue == e && (t.val(e), r.parent() && r.remove()), n && n[0].hasAttribute("selected") && (n[0].selected = !0)
                    }, o.removeOption = function(t) {
                        this.hasOption(t) && (delete s[t], u.$viewValue === t && this.renderUnknownOption(t))
                    }, o.renderUnknownOption = function(e) {
                        var n = "? " + Mt(e) + " ?";
                        r.val(n), t.prepend(r), t.val(n), r.prop("selected", !0)
                    }, o.hasOption = function(t) {
                        return s.hasOwnProperty(t)
                    }, e.$on("$destroy", function() {
                        o.renderUnknownOption = p
                    })
                }],
                link: function(a, u, l, c) {
                    function f(t, e, n, i) {
                        n.$render = function() {
                            var t = n.$viewValue;
                            i.hasOption(t) ? (T.parent() && T.remove(), e.val(t), "" === t && p.prop("selected", !0)) : v(t) && p ? e.val("") : i.renderUnknownOption(t)
                        }, e.on("change", function() {
                            t.$apply(function() {
                                T.parent() && T.remove(), n.$setViewValue(e.val())
                            })
                        })
                    }

                    function h(t, e, n) {
                        var i;
                        n.$render = function() {
                            var t = new Ft(n.$viewValue);
                            o(e.find("option"), function(e) {
                                e.selected = y(t.get(e.value))
                            })
                        }, t.$watch(function() {
                            P(i, n.$viewValue) || (i = H(n.$viewValue), n.$render())
                        }), e.on("change", function() {
                            t.$apply(function() {
                                var t = [];
                                o(e.find("option"), function(e) {
                                    e.selected && t.push(e.value)
                                }), n.$setViewValue(t)
                            })
                        })
                    }

                    function d(e, a, u) {
                        function l(t, n, i) {
                            return P[E] = i, j && (P[j] = n), t(e, P)
                        }

                        function c() {
                            e.$apply(function() {
                                var t, n = D(e) || [];
                                if ($) t = [], o(a.val(), function(e) {
                                    e = I ? q[e] : e, t.push(f(e, n[e]))
                                });
                                else {
                                    var i = I ? q[a.val()] : a.val();
                                    t = f(i, n[i])
                                }
                                u.$setViewValue(t), v()
                            })
                        }

                        function f(t, e) {
                            if ("?" === t) return n;
                            if ("" === t) return null;
                            var i = _ ? _ : R;
                            return l(i, t, e)
                        }

                        function h() {
                            var t, n = D(e);
                            if (n && ci(n)) {
                                t = new Array(n.length);
                                for (var i = 0, r = n.length; r > i; i++) t[i] = l(k, i, n[i]);
                                return t
                            }
                            if (n) {
                                t = {};
                                for (var o in n) n.hasOwnProperty(o) && (t[o] = l(k, o, n[o]))
                            }
                            return t
                        }

                        function d(t) {
                            var e;
                            if ($)
                                if (I && ci(t)) {
                                    e = new Ft([]);
                                    for (var n = 0; n < t.length; n++) e.put(l(I, null, t[n]), !0)
                                } else e = new Ft(t);
                            else I && (t = l(I, null, t));
                            return function(n, i) {
                                var r;
                                return r = I ? I : _ ? _ : R, $ ? y(e.remove(l(r, n, i))) : t === l(r, n, i)
                            }
                        }

                        function p() {
                            x || (e.$$postDigest(v), x = !0)
                        }

                        function g(t, e, n) {
                            t[e] = t[e] || 0, t[e] += n ? 1 : -1
                        }

                        function v() {
                            x = !1;
                            var t, n, i, r, c, f, h, p, v, b, T, E, A, _, R, O, L, M = {
                                    "": []
                                },
                                F = [""],
                                U = u.$viewValue,
                                B = D(e) || [],
                                V = j ? s(B) : B,
                                z = {},
                                W = d(U),
                                K = !1;
                            for (q = {}, E = 0; b = V.length, b > E; E++) h = E, j && (h = V[E], "$" === h.charAt(0)) || (p = B[h], t = l(N, h, p) || "", (n = M[t]) || (n = M[t] = [], F.push(t)), A = W(h, p), K = K || A, O = l(k, h, p), O = y(O) ? O : "", L = I ? I(e, P) : j ? V[E] : E, I && (q[L] = h), n.push({
                                id: L,
                                label: O,
                                selected: A
                            }));
                            for ($ || (w || null === U ? M[""].unshift({
                                    id: "",
                                    label: "",
                                    selected: !K
                                }) : K || M[""].unshift({
                                    id: "?",
                                    label: "",
                                    selected: !0
                                })), T = 0, v = F.length; v > T; T++) {
                                for (t = F[T], n = M[t], H.length <= T ? (r = {
                                        element: S.clone().attr("label", t),
                                        label: n.label
                                    }, c = [r], H.push(c), a.append(r.element)) : (c = H[T], r = c[0], r.label != t && r.element.attr("label", r.label = t)), _ = null, E = 0, b = n.length; b > E; E++) i = n[E], (f = c[E + 1]) ? (_ = f.element, f.label !== i.label && (g(z, f.label, !1), g(z, i.label, !0), _.text(f.label = i.label), _.prop("label", f.label)), f.id !== i.id && _.val(f.id = i.id), _[0].selected !== i.selected && (_.prop("selected", f.selected = i.selected), Yn && _.prop("selected", f.selected))) : ("" === i.id && w ? R = w : (R = C.clone()).val(i.id).prop("selected", i.selected).attr("selected", i.selected).prop("label", i.label).text(i.label), c.push(f = {
                                    element: R,
                                    label: i.label,
                                    id: i.id,
                                    selected: i.selected
                                }), g(z, i.label, !0), _ ? _.after(R) : r.element.append(R), _ = R);
                                for (E++; c.length > E;) i = c.pop(), g(z, i.label, !1), i.element.remove()
                            }
                            for (; H.length > T;) {
                                for (n = H.pop(), E = 1; E < n.length; ++E) g(z, n[E].label, !1);
                                n[0].element.remove()
                            }
                            o(z, function(t, e) {
                                t > 0 ? m.addOption(e) : 0 > t && m.removeOption(e)
                            })
                        }
                        var T;
                        if (!(T = b.match(r))) throw Lo("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", b, z(a));
                        var k = i(T[2] || T[1]),
                            E = T[4] || T[6],
                            A = / as /.test(T[0]) && T[1],
                            _ = A ? i(A) : null,
                            j = T[5],
                            N = i(T[3] || ""),
                            R = i(T[2] ? T[1] : E),
                            D = i(T[7]),
                            O = T[8],
                            I = O ? i(T[8]) : null,
                            q = {},
                            H = [
                                [{
                                    element: a,
                                    label: ""
                                }]
                            ],
                            P = {};
                        w && (t(w)(e), w.removeClass("ng-scope"), w.remove()), a.empty(), a.on("change", c), u.$render = v, e.$watchCollection(D, p), e.$watchCollection(h, p), $ && e.$watchCollection(function() {
                            return u.$modelValue
                        }, p)
                    }
                    if (c[1]) {
                        for (var p, m = c[0], g = c[1], $ = l.multiple, b = l.ngOptions, w = !1, x = !1, C = Zn(e.createElement("option")), S = Zn(e.createElement("optgroup")), T = C.clone(), k = 0, E = u.children(), A = E.length; A > k; k++)
                            if ("" === E[k].value) {
                                p = w = E.eq(k);
                                break
                            }
                        m.init(g, w, T), $ && (g.$isEmpty = function(t) {
                            return !t || 0 === t.length
                        }), b ? d(a, u, g) : $ ? h(a, u, g) : f(a, u, g, m)
                    }
                }
            }
        }],
        Uo = ["$interpolate", function(t) {
            var e = {
                addOption: p,
                removeOption: p
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function(n, i) {
                    if (v(i.value)) {
                        var r = t(n.text(), !0);
                        r || i.$set("value", n.text())
                    }
                    return function(t, n, i) {
                        var o = "$selectController",
                            s = n.parent(),
                            a = s.data(o) || s.parent().data(o);
                        a && a.databound || (a = e), r ? t.$watch(r, function(t, e) {
                            i.$set("value", t), e !== t && a.removeOption(e), a.addOption(t, n)
                        }) : a.addOption(i.value, n), n.on("$destroy", function() {
                            a.removeOption(i.value)
                        })
                    }
                }
            }
        }],
        Bo = g({
            restrict: "E",
            terminal: !1
        });
    return t.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (it(), dt(ai), void Zn(e).ready(function() {
        Y(e, Z)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), ! function() {
    "use strict";
    var t = angular.module("pasvaz.bindonce", []);
    t.directive("bindonce", function() {
        var t = function(t) {
                if (t && 0 !== t.length) {
                    var e = angular.lowercase("" + t);
                    t = !("f" === e || "0" === e || "false" === e || "no" === e || "n" === e || "[]" === e)
                } else t = !1;
                return t
            },
            e = parseInt((/msie (\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1], 10);
        isNaN(e) && (e = parseInt((/trident\/.*; rv:(\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1], 10));
        var n = {
            restrict: "AM",
            controller: ["$scope", "$element", "$attrs", "$interpolate", function(n, i, r, o) {
                var s = function(e, n, i) {
                        var r = "show" === n ? "" : "none",
                            o = "hide" === n ? "" : "none";
                        e.css("display", t(i) ? r : o)
                    },
                    a = function(t, e) {
                        if (angular.isObject(e) && !angular.isArray(e)) {
                            var n = [];
                            angular.forEach(e, function(t, e) {
                                t && n.push(e)
                            }), e = n
                        }
                        e && t.addClass(angular.isArray(e) ? e.join(" ") : e)
                    },
                    u = function(t, e) {
                        t.transclude(e, function(e) {
                            var n = t.element.parent(),
                                i = t.element && t.element[t.element.length - 1],
                                r = n && n[0] || i && i.parentNode,
                                o = i && i.nextSibling || null;
                            angular.forEach(e, function(t) {
                                r.insertBefore(t, o)
                            })
                        })
                    },
                    l = {
                        watcherRemover: void 0,
                        binders: [],
                        group: r.boName,
                        element: i,
                        ran: !1,
                        addBinder: function(t) {
                            this.binders.push(t), this.ran && this.runBinders()
                        },
                        setupWatcher: function(t) {
                            var e = this;
                            this.watcherRemover = n.$watch(t, function(t) {
                                void 0 !== t && (e.removeWatcher(), e.checkBindonce(t))
                            }, !0)
                        },
                        checkBindonce: function(t) {
                            var e = this,
                                n = t.$promise ? t.$promise.then : t.then;
                            "function" == typeof n ? n(function() {
                                e.runBinders()
                            }) : e.runBinders()
                        },
                        removeWatcher: function() {
                            void 0 !== this.watcherRemover && (this.watcherRemover(), this.watcherRemover = void 0)
                        },
                        runBinders: function() {
                            for (; this.binders.length > 0;) {
                                var n = this.binders.shift();
                                if (!this.group || this.group == n.group) {
                                    var i = n.scope.$eval(n.interpolate ? o(n.value) : n.value);
                                    switch (n.attr) {
                                        case "boIf":
                                            t(i) && u(n, n.scope.$new());
                                            break;
                                        case "boSwitch":
                                            var r, l = n.controller[0];
                                            (r = l.cases["!" + i] || l.cases["?"]) && (n.scope.$eval(n.attrs.change), angular.forEach(r, function(t) {
                                                u(t, n.scope.$new())
                                            }));
                                            break;
                                        case "boSwitchWhen":
                                            var c = n.controller[0];
                                            c.cases["!" + n.attrs.boSwitchWhen] = c.cases["!" + n.attrs.boSwitchWhen] || [], c.cases["!" + n.attrs.boSwitchWhen].push({
                                                transclude: n.transclude,
                                                element: n.element
                                            });
                                            break;
                                        case "boSwitchDefault":
                                            var c = n.controller[0];
                                            c.cases["?"] = c.cases["?"] || [], c.cases["?"].push({
                                                transclude: n.transclude,
                                                element: n.element
                                            });
                                            break;
                                        case "hide":
                                        case "show":
                                            s(n.element, n.attr, i);
                                            break;
                                        case "class":
                                            a(n.element, i);
                                            break;
                                        case "text":
                                            n.element.text(i);
                                            break;
                                        case "html":
                                            n.element.html(i);
                                            break;
                                        case "style":
                                            n.element.css(i);
                                            break;
                                        case "disabled":
                                            n.element.prop("disabled", i);
                                            break;
                                        case "src":
                                            n.element.attr(n.attr, i), e && n.element.prop("src", i);
                                            break;
                                        case "attr":
                                            angular.forEach(n.attrs, function(t, e) {
                                                var i, r;
                                                e.match(/^boAttr./) && n.attrs[e] && (i = e.replace(/^boAttr/, "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), r = n.scope.$eval(n.attrs[e]), n.element.attr(i, r))
                                            });
                                            break;
                                        case "href":
                                        case "alt":
                                        case "title":
                                        case "id":
                                        case "value":
                                            n.element.attr(n.attr, i)
                                    }
                                }
                            }
                            this.ran = !0
                        }
                    };
                angular.extend(this, l)
            }],
            link: function(t, e, n, i) {
                var r = n.bindonce && t.$eval(n.bindonce);
                void 0 !== r ? i.checkBindonce(r) : (i.setupWatcher(n.bindonce), e.bind("$destroy", i.removeWatcher))
            }
        };
        return n
    }), angular.forEach([{
        directiveName: "boShow",
        attribute: "show"
    }, {
        directiveName: "boHide",
        attribute: "hide"
    }, {
        directiveName: "boClass",
        attribute: "class"
    }, {
        directiveName: "boText",
        attribute: "text"
    }, {
        directiveName: "boBind",
        attribute: "text"
    }, {
        directiveName: "boHtml",
        attribute: "html"
    }, {
        directiveName: "boSrcI",
        attribute: "src",
        interpolate: !0
    }, {
        directiveName: "boSrc",
        attribute: "src"
    }, {
        directiveName: "boHrefI",
        attribute: "href",
        interpolate: !0
    }, {
        directiveName: "boHref",
        attribute: "href"
    }, {
        directiveName: "boAlt",
        attribute: "alt"
    }, {
        directiveName: "boTitle",
        attribute: "title"
    }, {
        directiveName: "boId",
        attribute: "id"
    }, {
        directiveName: "boStyle",
        attribute: "style"
    }, {
        directiveName: "boDisabled",
        attribute: "disabled"
    }, {
        directiveName: "boValue",
        attribute: "value"
    }, {
        directiveName: "boAttr",
        attribute: "attr"
    }, {
        directiveName: "boIf",
        transclude: "element",
        terminal: !0,
        priority: 1e3
    }, {
        directiveName: "boSwitch",
        require: "boSwitch",
        controller: function() {
            this.cases = {}
        }
    }, {
        directiveName: "boSwitchWhen",
        transclude: "element",
        priority: 800,
        require: "^boSwitch"
    }, {
        directiveName: "boSwitchDefault",
        transclude: "element",
        priority: 800,
        require: "^boSwitch"
    }], function(e) {
        var n = 200;
        return t.directive(e.directiveName, function() {
            var t = {
                priority: e.priority || n,
                transclude: e.transclude || !1,
                terminal: e.terminal || !1,
                require: ["^bindonce"].concat(e.require || []),
                controller: e.controller,
                compile: function(t, n, i) {
                    return function(t, n, r, o) {
                        var s = o[0],
                            a = r.boParent;
                        if (a && s.group !== a) {
                            var u = s.element.parent();
                            s = void 0;
                            for (var l; 9 !== u[0].nodeType && u.length;) {
                                if ((l = u.data("$bindonceController")) && l.group === a) {
                                    s = l;
                                    break
                                }
                                u = u.parent()
                            }
                            if (!s) throw new Error("No bindonce controller: " + a)
                        }
                        s.addBinder({
                            element: n,
                            attr: e.attribute || e.directiveName,
                            attrs: r,
                            value: r[e.directiveName],
                            interpolate: e.interpolate,
                            group: a,
                            transclude: i,
                            controller: o.slice(1),
                            scope: t
                        })
                    }
                }
            };
            return t
        })
    })
}();
var app = angular.module("GithubSearch", ["pasvaz.bindonce"]);
app.controller("RepositoriesCtrl", ["$scope", "$http", "$location", "$timeout", function(t, e, n, i) {
    t.repositories = [];
    var r = function() {
        e.get("/repositories/all").success(function(e) {
            t.repositories = e
        })
    };
    r(), t.stats = {
            crawling: !1
        },
        function o() {
            e.get("/repositories/stats").success(function(e) {
                var n = 5e3;
                (e.crawling || t.stats.crawling != e.crawling) && (r(), n = 1e3), t.stats = e, i(o, n)
            })
        }()
}]), $(window).on("load", function() {
    setTimeout(function(t) {
        $(".gh-demo").css({
            opacity: 1,
            transform: "translateY(0)"
        })
    }, 300)
});
var communityHeader = function(t) {
    function e(t) {
        t.preventDefault(), t.stopPropagation(), y.forEach(function(t) {
            return t.classList.remove("open")
        }), t.target.parentNode.classList.toggle("open")
    }

    function n(t) {
        y.forEach(function(t) {
            return t.classList.remove("open")
        })
    }
    var i = null,
        r = null,
        o = null,
        s = document.querySelector(".algc-navigation .algc-search__input--docsearch"),
        a = !1;
    if (!a && s) throw new Error("You need to pass docSearch: { api_key, index_name, input_selector } to communityHeader function in order to initialise docSearch");
    var u = document.querySelector(".algc-dropdownroot"),
        l = document.querySelector(".algc-navigation__dropdown-holder"),
        c = document.querySelectorAll('a[data-enabledropdown="true"]'),
        f = document.querySelector(".algc-dropdownroot__dropdowncontainer"),
        h = document.querySelector(".algc-navigation__container"),
        d = document.querySelector(".algc-dropdownroot__dropdownbg"),
        p = document.querySelector(".algc-dropdownroot__dropdownarrow"),
        m = document.querySelector(".algc-dropdownroot__dropdowncontainer"),
        g = document.querySelectorAll('[data-enabledropdown="true"]'),
        v = document.querySelectorAll(".algc-menu--hassublist .algc-menu--sublistlink"),
        y = [].concat(_toConsumableArray(v)).map(function(t) {
            return t.parentNode
        }),
        $ = {
            isOpen: !1,
            isOpenMobile: !1
        },
        b = {};
    [].forEach.call(document.querySelectorAll("[data-dropdown-content]"), function(t) {
        b[t.dataset.dropdownContent] = {
            parent: t.parentNode,
            content: t
        }
    });
    var w = {
            WIDTH: 490,
            HEIGHT: 360
        },
        x = void 0,
        C = function(t) {
            var e = t.target.dataset.dropdown,
                n = b[e].content,
                i = (b[e].parent, T.calculatePosition(t.target)),
                r = T.calculatePosition(n),
                o = T.calculatePosition(h).left,
                s = {
                    X: r.realWidth / w.WIDTH,
                    Y: r.realHeight / w.HEIGHT
                };
            d.style.cssText = "\n      transform: translateX(" + (i.center - o) + "px) scale(" + s.X + ", " + s.Y + ")", p.style.cssText = "\n      transform: translateX(" + (i.center - o) + "px) rotate(45deg)", m.style.cssText = "\n      transform: translateX(" + (i.center - o) + "px);\n      width: " + r.realWidth + "px;\n      height: " + (r.realHeight + 10) + "px;", l.style.pointerEvents = "auto", Object.keys(b).forEach(function(t) {
                t === e ? b[t].parent.classList.add("active") : b[t].parent.classList.remove("active")
            }), $.isOpen || setTimeout(function() {
                u.className = "algc-dropdownroot activeDropdown"
            }, 50), window.clearTimeout(x), $.isOpen = !0
        },
        S = function(t) {
            $.isOpen = !1, x = setTimeout(function() {
                l.style.pointerEvents = "none", u.className = "algc-dropdownroot notransition"
            }, 50)
        },
        T = {};
    T.calculatePosition = function(t) {
        var e = t.getBoundingClientRect(),
            n = t.offsetWidth,
            i = t.offsetHeight;
        return {
            left: e.left,
            top: e.top,
            width: e.width,
            height: e.height,
            realWidth: n,
            realHeight: i,
            center: e.left + e.width / 2
        }
    }, T.setClassNames = function(t) {
        var e = Object.keys(refs);
        e.forEach(function(e, n) {
            var i = refs[e].nodes[1];
            t > n ? i.className = "algc-dropdownroot__section left" : n === t ? i.className = "algc-dropdownroot__section active" : i.className = "algc-dropdownroot__section right"
        })
    }, T.getCoordinates = function(t) {
        t.getBoundingClientRect()
    };
    var k = document.querySelector("#search"),
        E = document.querySelector("#cancel"),
        A = function() {
            function t() {
                searchContainer.classList.add("open"), searchInput.focus()
            }

            function e() {
                searchInput.blur(), searchContainer.classList.remove("open")
            }

            function n() {
                "" !== searchInput.value ? searchInput.value = "" : e()
            }
            searchInput.setAttribute("value", ""), k.addEventListener("click", t), E.addEventListener("click", n)
        },
        _ = function() {
            var t = {};
            document.addEventListener("keydown", function(e) {
                t[e.keyCode] = !0
            }, !1), document.addEventListener("keyup", function(e) {
                t[e.keyCode] = !1
            }, !1);
            var e = function n(e) {
                t[83] || t[191] ? (document.querySelector(".algc-search__input").parentNode.classList.add("open"), document.querySelector(o).focus(), setTimeout(function() {
                    t = {}
                }, 500)) : t[27] && (document.querySelector(".algc-search__input").parentNode.classList.remove("open"), document.querySelector(o).blur(), setTimeout(function() {
                    t = {}
                }, 500)), setTimeout(n, 5)
            };
            e()
        };
    a && (A(), _(), docsearch({
        apiKey: i,
        indexName: r,
        inputSelector: o
    })), v.forEach(function(t) {
        return t.addEventListener("click", e)
    }), g.forEach(function(t) {
        t.addEventListener("mouseenter", C), t.addEventListener("focus", C)
    }), c.forEach(function(t) {
        t.addEventListener("mouseleave", S)
    }), f.addEventListener("mouseenter", function() {
        clearTimeout(x)
    }), document.addEventListener("click", n), document.querySelector(".algc-dropdownroot__dropdowncontainer").addEventListener("mouseleave", S)
};
! function() {
    function t(t) {
        return $("<div />").text(t).html().replace(/&lt;(\/?)em&gt;/g, "<$1em>")
    }

    function e(e) {
        for (var n in e._highlightResult) e._highlightResult[n] && (e._highlightResult[n].value = t(e._highlightResult[n].value));
        for (var n in e._snippetResult) e._snippetResult[n] && (e._snippetResult[n].value = t(e._snippetResult[n].value));
        return e
    }

    function n() {
        var t = document.querySelector(".background-demo"),
            e = document.querySelector(".dropdown-demo"),
            n = document.querySelector(".awesome-autocomplete");
        n.style.left = "calc(" + t.offsetLeft + "px + 8% )", n.style.top = "calc(" + t.offsetTop + "px + 12px )", e.style.top = "calc(" + t.offsetTop + "px + 10px + 36px )", e.style.left = "calc(" + t.offsetLeft + "px + 8% )"
    }
    var i = 5,
        r = 3,
        o = new AlgoliaSearch("TLCDTR8BIO", "686cce2f5dd3c38130b303e1c842c3e3"),
        s = o.initIndex("users"),
        a = Hogan.compile('<div class="aa-suggestion aa-repo"><div class="aa-thumbnail"><img src="https://avatars.githubusercontent.com/{{ owner }}?size=30" /></div><div class="aa-infos">{{ watchers }} <i class="fa fa-star"></i></div><span class="aa-name">{{#is_fork}}<i class="fa fa-code-fork"></i>{{/is_fork}} {{^is_fork}}<i class="fa fa-{{#is_private}}lock{{/is_private}}{{^is_private}}book{{/is_private}}"></i>{{/is_fork}} <a href="https://github.com/{{ full_name }}/"><span class="aa-owner">{{{ owner }}}</span>/<span class="aa-repo-name">{{{ _highlightResult.name.value }}}</span></a></span><div class="aa-description">{{{ _snippetResult.description.value }}}</div></div>'),
        u = Hogan.compile('<div class="aa-suggestion aa-user"><div class="aa-thumbnail"><img src="https://avatars.githubusercontent.com/{{ login }}?size=30" /></div><a href="https://github.com/{{ login }}">{{#name}}<span class="aa-name">{{{ _highlightResult.name.value }}}</span> {{/name}}<span class="aa-login">{{{ _highlightResult.login.value }}}</span></a>{{#company}}<br><span class="aa-company"><i class="fa fa-organization"></i> {{{ _highlightResult.company.value }}}</span>{{/company}}</div>');
    $(document).ready(function() {
        var t = $(".awesome-autocomplete"),
            n = t.find('input[name="q"]'),
            l = $(".awesome-autocomplete .icon-delete");
        l.on("click touch", function(t) {
            t.preventDefault(), n.val(""), l.removeClass("active"), n.focus(), document.querySelector(".gh-demo").style.zIndex = 10
        });
        var c = !0;
        n.typeahead({
            highlight: !1,
            hint: !1
        }, [{
            source: function(t, e) {
                e([])
            },
            name: "default",
            templates: {
                empty: function(e) {
                    return '<div class="aa-query">Press <em>&lt;Enter&gt;</em> to <span class="aa-query-default">search for "<em>' + $("<div />").text(e.query).html() + '</em>"' + (t.hasClass("repo-scope") ? " in this repository" : "") + '</span><span class="aa-query-cursor"></span></div>'
                }
            }
        }, {
            source: function(t, n) {
                var r = {
                    attributesToSnippet: ["description:50"]
                };
                o.startQueriesBatch(), o.addQueryInBatch("repositories", t, $.extend({
                    hitsPerPage: parseInt(i / 2 + 1, 10),
                    numericFilters: "watchers>1000",
                    restrictSearchableAttributes: "name"
                }, r)), o.addQueryInBatch("repositories", t, $.extend({
                    hitsPerPage: i
                }, r)), o.sendQueriesBatch(function(r, o) {
                    var s = [];
                    if (r)
                        for (var a = {}, u = 0; u < o.results.length && s.length < i; ++u)
                            for (var l = 0; l < o.results[u].hits.length && s.length < i; ++l) {
                                var c = o.results[u].hits[l];
                                a[c.objectID] || (a[c.objectID] = !0, c.query = t, s.push(e(c)))
                            }
                    n(s)
                })
            },
            name: "repos",
            displayKey: "query",
            templates: {
                header: '<div class="aa-category">Top Repositories</div>',
                suggestion: function(t) {
                    return a.render(t)
                }
            }
        }, {
            source: function(t, n) {
                s.search(t, function(i, r) {
                    var o = [];
                    if (i)
                        for (var s = 0; s < r.hits.length; ++s) {
                            var a = r.hits[s];
                            a.query = t, o.push(e(a))
                        }
                    n(o)
                }, {
                    hitsPerPage: r,
                    attributesToRetrieve: ["login", "name", "id", "company", "followers"]
                })
            },
            name: "users",
            displayKey: "query",
            templates: {
                header: '<div class="aa-category">Last Active Users</div>',
                suggestion: function(t) {
                    return u.render(t)
                }
            }
        }]).on("typeahead:selected", function(t, e, n) {
            window.ga && window.ga("send", "event", "search", "select", n), "users" === n ? location.href = "https://github.com/" + e.login : "repos" === n && (location.href = "https://github.com/" + e.full_name)
        }).on("typeahead:cursorchanged", function(t, e, n) {
            var i = $(".aa-query");
            i.find("span").hide(), "users" === n ? i.find("span.aa-query-cursor").html("go to <strong>" + e.login + "</strong>'s profile").show() : "repos" === n ? i.find("span.aa-query-cursor").html("go to <strong>" + e.full_name + "</strong>").show() : i.find("span.aa-query-default").show()
        }).on("keyup", function() {
            c && (window.ga && window.ga("send", "event", "search", "try"), c = !1), $(this).val().length > 0 ? l.addClass("active") : l.removeClass("active")
        }).on("keypress", function(t) {
            13 === t.keyCode && (location.href = "https://github.com/search?q=" + encodeURIComponent($(this).val()))
        }).on("input", function(t) {
            t.target.value ? document.querySelector(".gh-demo").style.zIndex = 30 : document.querySelector(".gh-demo").style.zIndex = 10
        })
    }), window.addEventListener("resize", n), window.addEventListener("load", n), window.addEventListener("DOMContentLoaded", n)
}(),
function(t) {
    t(".share-link a").on("click", function(t) {
        t.preventDefault();
        var e = "https://github.algolia.com",
            n = "Add instant search capabilities to GitHub's search bar.";
        switch (this.href.split("#")[1]) {
            case "twitter":
                window.open("https://twitter.com/share?url=" + encodeURIComponent(e) + "&text=" + encodeURIComponent(n) + "&via=algolia", "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");
                break;
            case "facebook":
                window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(e) + "&t=" + encodeURIComponent(n), "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600");
                break;
            case "email":
                window.location.href = "mailto:?subject=" + encodeURIComponent(n) + "&body=" + encodeURIComponent(e)
        }
    });
    var e = "undefined" != typeof InstallTrigger,
        n = /constructor/i.test(window.HTMLElement) || function(t) {
            return "[object SafariRemoteNotification]" === t.toString()
        }(!window.safari || "undefined" != typeof safari && safari.pushNotification),
        i = !!window.chrome && !!window.chrome.webstore;
    e && document.querySelector(".button-firefox").classList.add("active-browser"), n && document.querySelector(".button-safari").classList.add("active-browser"), i && document.querySelector(".button-chrome").classList.add("active-browser")
}(window.jQuery);
const docSearch = {
        apiKey: null,
        indexName: null,
        inputSelector: null
    },
    header = new communityHeader;