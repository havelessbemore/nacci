/*! nacci
https://github.com/havelessbemore/nacci

Copyright (C) 2023-2024 Michael Rojas <dev.michael.rojas@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */
var R = Object.defineProperty;
var G = (o, t, s) => t in o ? R(o, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[t] = s;
var h = (o, t, s) => G(o, typeof t != "symbol" ? t + "" : t, s);
class _ extends RangeError {
  constructor(t, s, e = "!=") {
    const n = Array.isArray(t) ? t.join("x") : `${t}`, i = Array.isArray(s) ? s.join("x") : `${s}`;
    super(`Dimension mismatch. ${n} ${e} ${i}`);
  }
}
class C extends TypeError {
  constructor(t, s = "Value") {
    super(`Not an integer. ${s}: ${String(t)}`);
  }
}
class c extends RangeError {
  constructor(t, s, e, n = "index", i = "Out of bounds") {
    const r = [i];
    (s != null || e != null) && (r.push(". Expected"), s != null && r.push(` ${String(s)} <=`), r.push(` ${n}`), e != null && r.push(` <= ${String(e)}`)), r.push(`. ${n}: ${String(t)}`), super(r.join(""));
  }
}
const b = 2, q = Number.MAX_SAFE_INTEGER, T = Number.MIN_SAFE_INTEGER;
class N extends c {
  constructor(t) {
    super(t, T, q, "value", "Unsafe value");
  }
}
function Z(o) {
  return Number.isInteger(o);
}
function k(o) {
  return o >= T && o <= q;
}
function y(o) {
  if (!Z(o))
    throw new C(o, "K");
  if (o < b)
    throw new c(o, b, void 0, "K");
  return o;
}
function p(o, t) {
  if (t.length > o)
    throw new _(t.length, o, "<=");
  return t;
}
function g(o) {
  if (!k(o))
    throw new N(o);
  return o;
}
class v {
  constructor(t, s, e, n = !0) {
    h(this, "cached");
    h(this, "keyOps");
    h(this, "valOps");
    h(this, "pows");
    this.cached = n, this.keyOps = s, this.pows = [t], this.valOps = e;
  }
  get size() {
    return this.pows.length;
  }
  clear() {
    this.pows.length = 1;
  }
  get(t) {
    const s = this.keyOps, e = this.valOps, n = this.cached ? this.pows : [this.pows[0]];
    let i;
    for (let r = 0; s.sign(t) > 0; ++r)
      n[r] == null && (n[r] = e.square(n[r - 1])), s.isOdd(t) && (i == null ? i = n[r] : i = e.times(i, n[r])), t = s.trunc(s.half(t));
    if (i == null)
      throw new c(t, s.cast(1));
    return i;
  }
  getCached() {
    return this.cached;
  }
  setCached(t) {
    this.cached = t, t || this.clear();
  }
  setValue(t) {
    t !== this.pows[0] && (this.pows = [t], this.clear());
  }
}
class W {
  constructor(t, s) {
    h(this, "cached");
    h(this, "customs");
    h(this, "encoding");
    h(this, "indexOps");
    h(this, "isStd");
    h(this, "_K");
    h(this, "neg");
    h(this, "pos");
    h(this, "v0");
    h(this, "zero");
    y(t);
    const e = s.cached ?? !0, n = s.customs ?? [], i = s.encoding, r = s.indexOps ?? s.ops;
    if (i == null)
      throw new TypeError("Missing encoding");
    if (r == null)
      throw new TypeError("Missing index operations");
    this.cached = e, this.customs = n, this.encoding = i, this.indexOps = r, this.isStd = !1, this._K = t, this.neg = new v(i.genNegK(t), r, i, e), this.pos = new v(i.genK(t), r, i, e), this.zero = i.genZero(t), this.v0 = i.toValue(this.zero, 0), this.setCustoms(n);
  }
  get K() {
    return this._K;
  }
  get(t) {
    const s = this.indexOps, e = s.cast(this.customs.length - 1);
    if (s.sign(t) >= 0 && s.smallerEq(t, e))
      return this.customs[s.toNumber(t)];
    let n, i;
    t = s.minus(t, e);
    const r = s.cast(this.K);
    if (s.sign(t) > 0) {
      const l = s.mod(s.minus1(t), r);
      i = s.minus1(r), t = s.trunc(s.dividedBy(t, r)), t = s.equal(l, i) ? t : s.plus1(t), i = s.plus(s.negative(i), l), n = this.pos.get(t);
    } else s.larger(t, s.negative(r)) ? (i = t, n = this.zero) : (i = s.mod(t, r), t = s.negative(t), t = s.trunc(s.dividedBy(t, r)), n = this.neg.get(t));
    const u = this.isStd ? void 0 : this.customs;
    return this.encoding.toValue(n, s.toNumber(i), u);
  }
  getCached() {
    return this.cached;
  }
  getCustoms() {
    return this.customs;
  }
  setCached(t) {
    this.cached = t, this.neg.setCached(t), this.pos.setCached(t);
  }
  setCustoms(t) {
    t == null || t.length < 1 ? (this.isStd = !0, this.customs = [this.v0]) : (p(this.K, t), this.isStd = !1, this.customs = t);
  }
}
class S {
  constructor(t, s) {
    h(this, "cached");
    h(this, "customs");
    h(this, "encoding");
    h(this, "indexOps");
    h(this, "isStd");
    h(this, "_K");
    h(this, "neg");
    h(this, "pos");
    h(this, "v0");
    y(t);
    const e = s.cached ?? !0, n = s.customs ?? [], i = s.encoding, r = s.indexOps ?? s.ops;
    if (i == null)
      throw new TypeError("Missing encoding");
    if (r == null)
      throw new TypeError("Missing index operations");
    this.cached = e, this.customs = [], this.encoding = i, this.indexOps = r, this.isStd = !1, this._K = t, this.neg = new v(i.genNegOne(t), r, i, e);
    const u = i.genOne(t);
    this.pos = new v(u, r, i, e), this.v0 = i.toValue(u, -1), this.setCustoms(n);
  }
  get K() {
    return this._K;
  }
  get(t) {
    const s = this.indexOps, e = s.cast(this.customs.length - 1);
    if (s.sign(t) >= 0 && s.smallerEq(t, e))
      return this.customs[s.toNumber(t)];
    t = s.minus(t, e);
    const n = s.sign(t) > 0 ? this.pos.get(t) : this.neg.get(s.negative(t)), i = this.isStd ? void 0 : this.customs;
    return this.encoding.toValue(n, 0, i);
  }
  getCached() {
    return this.cached;
  }
  getCustoms() {
    return this.customs;
  }
  setCached(t) {
    this.cached = t, this.neg.setCached(t), this.pos.setCached(t);
  }
  setCustoms(t) {
    t == null || t.length < 1 ? (this.isStd = !0, this.customs = [this.v0]) : (p(this.K, t), this.isStd = !1, this.customs = t);
  }
}
function B(o, t, s = 0, e = 0, n = o.length) {
  if (o === t)
    return o.copyWithin(s, e, n);
  for (s < 0 && (s = Math.max(0, t.length + s)), e < 0 && (e = Math.max(0, o.length + e)), n < 0 && (n = Math.max(0, o.length + n)), n = e + Math.max(0, Math.min(t.length - s, n - e)); e < n; )
    t[s++] = o[e++];
  return t;
}
function $(o, t) {
  const s = o.length;
  if (s < 1)
    return;
  let e = o[0];
  for (let n = 1; n < s; ++n)
    e = t.plus(e, o[n]);
  return e;
}
function D(o, t, s) {
  if (t <= o.length)
    return;
  const e = o.length, n = t - e;
  o.length = t, o.fill(s, e, n), o.copyWithin(n, 0, e), o.fill(s, 0, Math.min(n, e));
}
class U {
  constructor(t, s) {
    h(this, "delta");
    h(this, "indexOps");
    h(this, "_K");
    h(this, "minN");
    h(this, "next");
    h(this, "valueOps");
    h(this, "values");
    y(t);
    let e = s.customs ?? [];
    const n = s.indexOps ?? s.ops, i = s.valueOps ?? s.ops;
    if (n == null)
      throw new TypeError("Missing index operations");
    if (i == null)
      throw new TypeError("Missing value operations");
    const r = i.cast(0);
    if (e == null || e.length < 1) {
      const u = i.cast(1);
      e = [r, u];
    } else
      p(t, e);
    this.delta = 0, this.indexOps = n, this._K = t, this.valueOps = i, this.minN = n.minus(n.cast(e.length), n.cast(t)), this.next = $(e, i) ?? r, this.values = Array.from(e), D(this.values, t, r);
  }
  get K() {
    return this._K;
  }
  get(t) {
    const s = this.indexOps;
    if (s.smaller(t, this.minN))
      this.reverse(s.minus(this.minN, t));
    else {
      const n = s.plus(this.minN, s.cast(this.K));
      s.largerEq(t, n) && this.forward(s.plus1(s.minus(t, n)));
    }
    const e = s.plus(s.minus(t, this.minN), s.cast(this.delta));
    return this.values[s.toNumber(e) % this.K];
  }
  forward(t) {
    const s = this.indexOps, e = this.valueOps;
    for (; s.sign(t) > 0; ) {
      const n = this.values[this.delta];
      this.values[this.delta] = this.next, this.next = e.plus(this.next, e.minus(this.next, n)), this.delta = (this.delta + 1) % this.K, this.minN = s.plus1(this.minN), t = s.minus1(t);
    }
  }
  reverse(t) {
    const s = this.indexOps, e = this.valueOps;
    for (; s.sign(t) > 0; ) {
      const n = (this.delta - 1 + this.K) % this.K, i = this.values[n], r = e.plus(e.minus(i, this.next), i);
      this.minN = s.minus1(this.minN), this.next = i, this.delta = n, this.values[n] = r, t = s.minus1(t);
    }
  }
}
const L = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KPowerGen: W,
  PowerGen: S,
  SlidingWindowGen: U
}, Symbol.toStringTag, { value: "Module" }));
function m(o, t = o) {
  const s = new Array(o);
  for (let e = 0; e < o; ++e)
    s[e] = new Array(t);
  return s;
}
function j(o, t, s, e = s.cast(0)) {
  var l, a;
  const n = o.length, i = ((l = o[0]) == null ? void 0 : l.length) ?? 0, r = ((a = t[0]) == null ? void 0 : a.length) ?? 0;
  if (i !== t.length)
    throw new _([n, i], [t.length, r]);
  const u = m(n, r);
  for (let f = 0; f < n; ++f)
    for (let d = 0; d < r; ++d) {
      let x = e;
      for (let w = 0; w < i; ++w) {
        const F = s.times(o[f][w], t[w][d]);
        x = s.plus(x, F);
      }
      u[f][d] = x;
    }
  return u;
}
const O = {
  Matrix: "mat",
  RevSum: "rsum",
  Sum: "sum",
  Term: "term"
};
class X {
  constructor(t) {
    h(this, "format", O.Matrix);
    h(this, "_neg1");
    h(this, "_0");
    h(this, "_1");
    h(this, "_2");
    this.ops = t, this._neg1 = t.cast(-1), this._0 = t.cast(0), this._1 = t.cast(1), this._2 = t.cast(2);
  }
  genK(t) {
    const s = m(t);
    if (--t < 0)
      return s;
    let e = this._0;
    const n = this.ops;
    s[0][0] = this._1;
    for (let i = 1; i <= t; ++i)
      e = n.plus(e, s[0][i - 1]), s[0][i] = e;
    for (let i = 1; i <= t; ++i) {
      s[i][0] = this._1;
      for (let r = 1; r <= t; ++r)
        s[i][r] = n.plus(s[i - 1][r - 1], s[0][r]);
    }
    return s;
  }
  genNegK(t) {
    const s = m(t);
    if (--t < 0)
      return s;
    s[0][0] = this._2, s[0].fill(this._0, 1, t), s[0][t] = this._neg1;
    for (let e = 1; e <= t; ++e)
      s[e].fill(this._0), s[e][e - 1] = this._neg1, s[e][e] = this._2, s[e][t] = this._neg1;
    return s[t][t] = this._1, s;
  }
  genNegOne(t) {
    const s = m(t);
    if (--t < 0)
      return s;
    for (let e = 0; e < t; ++e)
      s[e][0] = this._neg1, s[e].fill(this._0, 1), s[e][e + 1] = this._1;
    return s[t][0] = this._1, s[t].fill(this._0, 1), s;
  }
  genOne(t) {
    const s = m(t);
    if (--t < 0)
      return s;
    s[0].fill(this._0), s[0][t] = this._1;
    for (let e = 1; e <= t; ++e)
      s[e].fill(this._0), s[e][e - 1] = this._1, s[e][t] = this._1;
    return s;
  }
  genZero(t) {
    const s = m(t);
    for (let e = 0; e < t; ++e)
      s[e].fill(this._0), s[e][e] = this._1;
    return s;
  }
  /*
  get(A: Matrix<T>, y: number, x: number): T {
    return A[y][x];
  }
  */
  pow(t, s) {
    if (this.ops.smaller(s, this._1))
      throw new c(s, this._1, void 0, "N");
    let e;
    for (; this.ops.larger(s, this._1); )
      this.ops.isOdd(s) && (e = e == null ? t : this.times(e, t)), t = this.times(t, t), s = this.ops.half(s), s = this.ops.trunc(s);
    return e == null ? t : this.times(e, t);
  }
  shift(t, s) {
    if (s === 0)
      return t;
    const e = t.length;
    if (s <= -e || s > 0)
      throw new c(s, 1 - e, 0, "delta");
    s = -s;
    const n = e - s, i = m(e);
    for (let r = 0; r < e; ++r)
      i[r].fill(this._0, 0, s), B(t[r], i[r], s, 0, n);
    for (const r = this.ops; s > 0; --s) {
      const u = i[0][s];
      for (let l = 1; l < e; ++l)
        i[l - 1][s - 1] = r.minus(i[l][s], u);
      i[e - 1][s - 1] = u;
    }
    return i;
  }
  square(t) {
    return this.times(t, t);
  }
  times(t, s) {
    return j(t, s, this.ops, this._0);
  }
  toValue(t, s = 0, e) {
    const n = t.length, i = n - 1 + s;
    if (i < 0 || i >= n)
      throw new c(s, 1 - n, 0, "delta");
    if (e == null)
      return t[0][i];
    p(n, e);
    let r = this._0;
    const u = n - e.length;
    for (let l = u; l < n; ++l) {
      const a = this.ops.times(e[l - u], t[l][i]);
      r = this.ops.plus(r, a);
    }
    return r;
  }
}
class Y {
  constructor(t) {
    h(this, "format", O.RevSum);
    h(this, "_neg1");
    h(this, "_0");
    h(this, "_1");
    this.ops = t, this._neg1 = t.cast(-1), this._0 = t.cast(0), this._1 = t.cast(1);
  }
  genK(t) {
    const s = new Array(t).fill(this._1);
    for (let e = t - 2; e > 0; --e)
      s[e - 1] = this.ops.plus(s[e], s[e]);
    for (let e = 1; e < t; ++e)
      s[e] = this.ops.plus(s[e], s[e - 1]);
    return s;
  }
  genNegK(t) {
    const s = new Array(t).fill(this._neg1);
    return t > 0 && (s[t - 1] = this._1), s;
  }
  genNegOne(t) {
    const s = new Array(t).fill(this._0);
    return t > 0 && (s[Math.max(0, t - 2)] = this._1), s;
  }
  genOne(t) {
    return new Array(t).fill(this._1);
  }
  genZero(t) {
    const s = new Array(t).fill(this._0);
    return t > 0 && (s[t - 1] = this._1), s;
  }
  get(t, s, e) {
    const n = t.length - ++e;
    let i;
    if (s < e)
      i = t[n + s];
    else {
      const r = s - e;
      i = t[r - 1] ?? this._0, i = this.ops.minus(t[r], i), i = this.ops.plus(t[r], i);
    }
    return this.ops.minus(i, t[n - 1] ?? this._0);
  }
  pow(t, s) {
    if (this.ops.smaller(s, this._1))
      throw new c(s, this._1, void 0, "N");
    let e;
    for (; this.ops.larger(s, this._1); )
      this.ops.isOdd(s) && (e = e == null ? t : this.times(e, t)), t = this.times(t, t), s = this.ops.half(s), s = this.ops.trunc(s);
    return e == null ? t : this.times(e, t);
  }
  shift(t, s) {
    if (s === 0)
      return t;
    const e = t.length, n = e - 1 + s;
    if (n < 0 || n >= e)
      throw new c(s, 1 - e, 0, "delta");
    const i = new Array(e);
    for (let r = 0; r < e; ++r)
      i[r] = this.get(t, r, n);
    return i;
  }
  square(t) {
    return this.times(t, t);
  }
  times(t, s) {
    const e = t.length;
    if (e !== s.length)
      throw new _(e, s.length);
    const n = new Array(e);
    for (let i = 0; i < e; ++i) {
      let r = this._0;
      for (let u = 0; u < e; ++u) {
        const l = this.ops.times(this.get(t, i, u), s[u]);
        r = this.ops.plus(r, l);
      }
      n[i] = r;
    }
    return n;
  }
  toValue(t, s = 0, e) {
    const n = t.length, i = n - 1 + s;
    if (i < 0 || i >= n)
      throw new c(s, 1 - n, 0, "delta");
    if (e == null)
      return this.get(t, 0, i);
    p(n, e);
    let r = this._0;
    const u = n - e.length;
    for (let l = u; l < n; ++l) {
      const a = this.ops.times(e[l - u], this.get(t, l, i));
      r = this.ops.plus(r, a);
    }
    return r;
  }
}
class E {
  constructor(t) {
    h(this, "format", O.Sum);
    h(this, "_neg1");
    h(this, "_0");
    h(this, "_1");
    h(this, "_2");
    this.ops = t, this._neg1 = t.cast(-1), this._0 = t.cast(0), this._1 = t.cast(1), this._2 = t.cast(2);
  }
  genK(t) {
    const s = new Array(t);
    if (t < 1)
      return s;
    s[0] = this._1;
    for (let e = 1; e < t; ++e)
      s[e] = this.ops.plus(s[e - 1], s[e - 1]);
    return s;
  }
  genNegK(t) {
    const s = new Array(t).fill(this._2);
    return t > 0 && (s[t - 1] = this._1), s;
  }
  genNegOne(t) {
    const s = new Array(t).fill(this._0);
    return t > 1 ? s[0] = this._neg1 : t > 0 && (s[0] = this._1), s;
  }
  genOne(t) {
    const s = new Array(t).fill(this._0);
    return t > 0 && (s[t - 1] = this._1), s;
  }
  genZero(t) {
    return new Array(t).fill(this._1);
  }
  get(t, s, e) {
    if (s < e)
      return this.ops.minus(t[e], t[e - 1 - s]);
    if (s === e)
      return t[e];
    const n = t.length - 1 - s + e;
    let i = this.ops.plus(t[n], t[n]);
    return i = this.ops.minus(t[n + 1], i), i = this.ops.plus(i, t[e]), i;
  }
  pow(t, s) {
    if (this.ops.smaller(s, this._1))
      throw new c(s, this._1, void 0, "N");
    let e;
    for (; this.ops.larger(s, this._1); )
      this.ops.isOdd(s) && (e = e == null ? t : this.times(e, t)), t = this.times(t, t), s = this.ops.half(s), s = this.ops.trunc(s);
    return e == null ? t : this.times(e, t);
  }
  shift(t, s) {
    if (s === 0)
      return t;
    const e = t.length - 1, n = e + 1 + s;
    if (n <= 0 || n > e)
      throw new c(s, -e, 0, "delta");
    const i = this.ops, r = new Array(e + 1), u = i.times(this._2, this.get(t, 0, n));
    for (let l = 0; l <= e; ++l)
      r[l] = i.minus(u, this.get(t, e - l, n));
    return r;
  }
  square(t) {
    return this.times(t, t);
  }
  times(t, s) {
    const e = t.length;
    if (e !== s.length)
      throw new _(e, s.length);
    const n = new Array(e);
    for (let i = 0; i < e; ++i) {
      let r = this._0;
      for (let u = 0; u < e; ++u) {
        const l = this.ops.times(this.get(t, i, u), this.get(s, u, i));
        r = this.ops.plus(r, l);
      }
      n[i] = r;
    }
    return n;
  }
  toValue(t, s = 0, e) {
    const n = t.length, i = n - 1 + s;
    if (i < 0 || i >= n)
      throw new c(s, 1 - n, 0, "delta");
    if (e == null)
      return this.get(t, 0, i);
    p(n, e);
    let r = this._0;
    const u = n - e.length;
    for (let l = u; l < n; ++l) {
      const a = this.ops.times(e[l - u], this.get(t, l, i));
      r = this.ops.plus(r, a);
    }
    return r;
  }
}
class H {
  constructor(t) {
    h(this, "format", O.Term);
    h(this, "_neg1");
    h(this, "_0");
    h(this, "_1");
    h(this, "_2");
    this.ops = t, this._neg1 = t.cast(-1), this._0 = t.cast(0), this._1 = t.cast(1), this._2 = t.cast(2);
  }
  genK(t) {
    const s = new Array(t).fill(this._1);
    for (let e = 2; e < t; ++e)
      s[e] = this.ops.plus(s[e - 1], s[e - 1]);
    return s;
  }
  genNegK(t) {
    const s = new Array(t).fill(this._0);
    return t >= 2 ? (s[0] = this._2, s[t - 1] = this._neg1) : t > 0 && (s[0] = this._1), s;
  }
  genNegOne(t) {
    const s = new Array(t).fill(this._0);
    return t > 0 && (s[0] = this._neg1, s[Math.min(1, t - 1)] = this._1), s;
  }
  genOne(t) {
    const s = new Array(t).fill(this._0);
    return t > 0 && (s[t - 1] = this._1), s;
  }
  genZero(t) {
    const s = new Array(t).fill(this._0);
    return t > 0 && (s[0] = this._1), s;
  }
  pow(t, s) {
    if (this.ops.smaller(s, this._1))
      throw new c(s, this._1, void 0, "N");
    let e;
    for (; this.ops.larger(s, this._1); )
      this.ops.isOdd(s) && (e = e == null ? t : this.times(e, t)), t = this.times(t, t), s = this.ops.half(s), s = this.ops.trunc(s);
    return e == null ? t : this.times(e, t);
  }
  shift(t, s) {
    if (s === 0)
      return t;
    const e = t.length, n = e - 1 + s;
    if (n < 0 || n >= e)
      throw new c(s, 1 - e, 0, "delta");
    s = -s;
    const i = Array.from(t);
    i.copyWithin(s, 0);
    let r = $(t, this.ops) ?? this._0;
    for (let u = e - 1; s > 0; --u) {
      let l = this.ops.plus(t[u], t[u]);
      l = this.ops.minus(l, r), i[--s] = l, r = t[u];
    }
    return i;
  }
  square(t) {
    return this.times(t, t);
  }
  times(t, s) {
    return j([t], M(s, this.ops), this.ops)[0];
  }
  toValue(t, s = 0, e) {
    const n = t.length, i = n - 1 + s;
    if (i < 0 || i >= n)
      throw new c(s, 1 - n, 0, "delta");
    if (e == null)
      return t[i];
    p(n, e);
    let r = this._0;
    const u = n - e.length, l = M(t, this.ops);
    for (let a = u; a < n; ++a) {
      const f = this.ops.times(e[a - u], l[a][i]);
      r = this.ops.plus(r, f);
    }
    return r;
  }
}
function M(o, t) {
  const s = o.length, e = m(s);
  if (s < 1)
    return e;
  e[s - 1] = o.slice(1);
  for (let n = s - 2; n > 0; --n)
    for (let i = 0; i < n; ++i)
      e[n][i] = t.minus(e[n + 1][i + 1], o[i + 1]);
  e[0] = Array.from(o);
  for (let n = 1; n < s; ++n)
    for (let i = n; i < s; ++i)
      e[n][i] = t.plus(e[n - 1][i - 1], o[i]);
  return e;
}
const K = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MatrixEncoding: X,
  RevSumEncoding: Y,
  SumEncoding: E,
  TermEncoding: H
}, Symbol.toStringTag, { value: "Module" })), A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DimensionError: _,
  IntegerError: C,
  OutOfBoundsError: c,
  UnsafeError: N
}, Symbol.toStringTag, { value: "Module" }));
class z {
  cast(t) {
    return BigInt(t);
  }
  dividedBy(t, s) {
    return t / s;
  }
  equal(t, s) {
    return t == s;
  }
  half(t) {
    return t >> 1n;
  }
  isOdd(t) {
    return (t & 1n) === 1n;
  }
  larger(t, s) {
    return t > s;
  }
  largerEq(t, s) {
    return t >= s;
  }
  minus(t, s) {
    return t - s;
  }
  minus1(t) {
    return t - 1n;
  }
  mod(t, s) {
    return t % s;
  }
  negative(t) {
    return -t;
  }
  plus(t, s) {
    return t + s;
  }
  plus1(t) {
    return t + 1n;
  }
  sign(t) {
    return t < 0n ? -1 : +(t > 0n);
  }
  smaller(t, s) {
    return t < s;
  }
  smallerEq(t, s) {
    return t <= s;
  }
  square(t) {
    return t ** 2n;
  }
  times(t, s) {
    return t * s;
  }
  toNumber(t) {
    return Number(t);
  }
  trunc(t) {
    return t;
  }
}
class J {
  cast(t) {
    return Number(t);
  }
  dividedBy(t, s) {
    return t / s;
  }
  equal(t, s) {
    return t == s;
  }
  half(t) {
    return t * 0.5;
  }
  isOdd(t) {
    return (t & 1) === 1;
  }
  larger(t, s) {
    return t > s;
  }
  largerEq(t, s) {
    return t >= s;
  }
  minus(t, s) {
    return t - s;
  }
  minus1(t) {
    return t - 1;
  }
  mod(t, s) {
    return t % s;
  }
  negative(t) {
    return -t;
  }
  plus(t, s) {
    return t + s;
  }
  plus1(t) {
    return t + 1;
  }
  sign(t) {
    return t < 0 ? -1 : +(t > 0);
  }
  smaller(t, s) {
    return t < s;
  }
  smallerEq(t, s) {
    return t <= s;
  }
  square(t) {
    return t ** 2;
  }
  times(t, s) {
    return t * s;
  }
  toNumber(t) {
    return t;
  }
  trunc(t) {
    return Math.trunc(t);
  }
}
class V {
  cast(t) {
    return g(Number(t));
  }
  dividedBy(t, s) {
    return g(t / s);
  }
  equal(t, s) {
    return t == s;
  }
  half(t) {
    return t * 0.5;
  }
  isOdd(t) {
    return (t & 1) === 1;
  }
  larger(t, s) {
    return t > s;
  }
  largerEq(t, s) {
    return t >= s;
  }
  minus(t, s) {
    return g(t - s);
  }
  minus1(t) {
    return g(t - 1);
  }
  mod(t, s) {
    return t % s;
  }
  negative(t) {
    return g(-t);
  }
  plus(t, s) {
    return g(t + s);
  }
  plus1(t) {
    return g(t + 1);
  }
  sign(t) {
    return t < 0n ? -1 : +(t > 0n);
  }
  smaller(t, s) {
    return t < s;
  }
  smallerEq(t, s) {
    return t <= s;
  }
  square(t) {
    return g(t ** 2);
  }
  times(t, s) {
    return g(t * s);
  }
  toNumber(t) {
    return t;
  }
  trunc(t) {
    return Math.trunc(t);
  }
}
const tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BigOps: z,
  NumOps: J,
  SafeNumOps: V
}, Symbol.toStringTag, { value: "Module" }));
class I {
  constructor(t, s, e = !0) {
    h(this, "customs");
    h(this, "gen");
    const n = new z(), i = new E(n);
    this.customs = s ?? [], this.gen = new S(t, { cached: e, customs: s, encoding: i, ops: n });
  }
  get K() {
    return this.gen.K;
  }
  get(t) {
    return this.gen.get(t);
  }
  getCached() {
    return this.gen.getCached();
  }
  getCustoms() {
    return this.customs;
  }
  setCached(t) {
    this.gen.setCached(t);
  }
}
class st extends I {
  constructor(t, s) {
    super(2, t, s);
  }
}
class et extends I {
  constructor(t, s) {
    super(3, t, s);
  }
}
class P {
  constructor(t, s, e = !0) {
    h(this, "customs");
    h(this, "gen");
    const n = new V(), i = new E(n);
    this.customs = s ?? [], this.gen = new S(t, { cached: e, customs: s, encoding: i, ops: n });
  }
  get K() {
    return this.gen.K;
  }
  get(t) {
    return this.gen.get(t);
  }
  getCached() {
    return this.gen.getCached();
  }
  getCustoms() {
    return this.customs;
  }
  setCached(t) {
    this.gen.setCached(t);
  }
}
class it extends P {
  constructor(t, s) {
    super(2, t, s);
  }
}
class nt extends P {
  constructor(t, s) {
    super(3, t, s);
  }
}
export {
  st as BigFibonacci,
  I as BigKbonacci,
  et as BigTribonacci,
  it as Fibonacci,
  P as Kbonacci,
  nt as Tribonacci,
  K as enc,
  A as err,
  L as gen,
  tt as ops
};
//# sourceMappingURL=nacci.min.mjs.map
