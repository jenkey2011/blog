/*!
 * VERSION: 0.1.2
 * DATE: 2017-01-09
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";

        function e(e, t, r, o, i, n) {
            return r = (parseFloat(r) - parseFloat(e)) * i, o = (parseFloat(o) - parseFloat(t)) * n, Math.sqrt(r * r + o * o)
        }

        function t(e) {
            return "string" != typeof e && e.nodeType || (e = _gsScope.TweenLite.selector(e), e.length && (e = e[0])), e
        }

        function r(e, t, r) {
            var o, i, n = e.indexOf(" ");
            return -1 === n ? (o = void 0 !== r ? r + "" : e, i = e) : (o = e.substr(0, n), i = e.substr(n + 1)), o = -1 !== o.indexOf("%") ? parseFloat(o) / 100 * t : parseFloat(o), i = -1 !== i.indexOf("%") ? parseFloat(i) / 100 * t : parseFloat(i), o > i ? [i, o] : [o, i]
        }

        function o(r) {
            if (!r) return 0;
            r = t(r);
            var o, i, n, s, h, f, d, l = r.tagName.toLowerCase(),
                g = 1,
                u = 1;
            "non-scaling-stroke" === r.getAttribute("vector-effect") && (u = r.getScreenCTM(), g = u.a, u = u.d);
            try {
                i = r.getBBox()
            } catch (c) {}
            if (i && (i.width || i.height) || "rect" !== l && "circle" !== l && "ellipse" !== l || (i = {
                    width: parseFloat(r.getAttribute("rect" === l ? "width" : "circle" === l ? "r" : "rx")),
                    height: parseFloat(r.getAttribute("rect" === l ? "height" : "circle" === l ? "r" : "ry"))
                }, "rect" !== l && (i.width *= 2, i.height *= 2)), "path" === l) s = r.style.strokeDasharray, r.style.strokeDasharray = "none", o = r.getTotalLength() || 0, g !== u && console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), o *= (g + u) / 2, r.style.strokeDasharray = s;
            else if ("rect" === l) o = 2 * i.width * g + 2 * i.height * u;
            else if ("line" === l) o = e(r.getAttribute("x1"), r.getAttribute("y1"), r.getAttribute("x2"), r.getAttribute("y2"), g, u);
            else if ("polyline" === l || "polygon" === l)
                for (n = r.getAttribute("points").match(a) || [], "polygon" === l && n.push(n[0], n[1]), o = 0, h = 2; h < n.length; h += 2) o += e(n[h - 2], n[h - 1], n[h], n[h + 1], g, u) || 0;
            else("circle" === l || "ellipse" === l) && (f = i.width / 2 * g, d = i.height / 2 * u, o = Math.PI * (3 * (f + d) - Math.sqrt((3 * f + d) * (f + 3 * d))));
            return o || 0
        }

        function i(e, r) {
            if (!e) return [0, 0];
            e = t(e), r = r || o(e) + 1;
            var i = s(e),
                n = i.strokeDasharray || "",
                a = parseFloat(i.strokeDashoffset),
                h = n.indexOf(",");
            return 0 > h && (h = n.indexOf(" ")), n = 0 > h ? r : parseFloat(n.substr(0, h)) || 1e-5, n > r && (n = r), [Math.max(0, -a), Math.max(0, n - a)]
        }
        var n, s = document.defaultView ? document.defaultView.getComputedStyle : function() {},
            a = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            h = "codepen",
            f = "DrawSVGPlugin",
            d = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
            l = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
            g = function(e) {
                for (var t = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), r = [d, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], o = r.length; --o > -1;)
                    if (-1 !== e.indexOf(r[o])) return !0;
                return t && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + f + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), t
            }(window ? "codepen.io" : "");
        n = _gsScope._gsDefine.plugin({
            propName: "drawSVG",
            API: 2,
            version: "0.1.1",
            global: !0,
            overwriteProps: ["drawSVG"],
            init: function(e, t, n, s) {
                if (!e.getBBox) return !1;
                if (!g) return window.location.href = "http://" + d + l + "?plugin=" + f + "&source=" + h, !1;
                var a, u, c, p = o(e) + 1;
                return this._style = e.style, "function" == typeof t && (t = t(s, e)), t === !0 || "true" === t ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", a = i(e, p), u = r(t, p, a[0]), this._length = p + 10, 0 === a[0] && 0 === u[0] ? (c = Math.max(1e-5, u[1] - p), this._dash = p + c, this._offset = p - a[1] + c, this._addTween(this, "_offset", this._offset, p - u[1] + c, "drawSVG")) : (this._dash = a[1] - a[0] || 1e-6, this._offset = -a[0], this._addTween(this, "_dash", this._dash, u[1] - u[0] || 1e-5, "drawSVG"), this._addTween(this, "_offset", this._offset, -u[0], "drawSVG")), g
            },
            set: function(e) {
                this._firstPT && (this._super.setRatio.call(this, e), this._style.strokeDashoffset = this._offset, this._style.strokeDasharray = 1 === e || 0 === e ? this._offset < .001 && this._length - this._dash <= 10 ? "none" : this._offset === this._dash ? "0px, 999999px" : this._dash + "px," + this._length + "px" : this._dash + "px," + this._length + "px")
            }
        }), n.getLength = o, n.getPosition = i
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[e]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], t) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = t())
    }("DrawSVGPlugin");