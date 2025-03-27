/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function aa(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Te = {}, en = [], Ct = () => {
}, Zd = () => !1, Ji = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), la = (e) => e.startsWith("onUpdate:"), Be = Object.assign, ca = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, ep = Object.prototype.hasOwnProperty, he = (e, t) => ep.call(e, t), J = Array.isArray, tn = (e) => Zi(e) === "[object Map]", Mu = (e) => Zi(e) === "[object Set]", ee = (e) => typeof e == "function", Ue = (e) => typeof e == "string", Sr = (e) => typeof e == "symbol", Pe = (e) => e !== null && typeof e == "object", Fu = (e) => (Pe(e) || ee(e)) && ee(e.then) && ee(e.catch), Vu = Object.prototype.toString, Zi = (e) => Vu.call(e), tp = (e) => Zi(e).slice(8, -1), es = (e) => Zi(e) === "[object Object]", ua = (e) => Ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vn = /* @__PURE__ */ aa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ts = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, rp = /-(\w)/g, Rt = ts(
  (e) => e.replace(rp, (t, r) => r ? r.toUpperCase() : "")
), np = /\B([A-Z])/g, yt = ts(
  (e) => e.replace(np, "-$1").toLowerCase()
), ju = ts((e) => e.charAt(0).toUpperCase() + e.slice(1)), Os = ts(
  (e) => e ? `on${ju(e)}` : ""
), vr = (e, t) => !Object.is(e, t), Ts = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Uu = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, ip = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ul = (e) => {
  const t = Ue(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let fl;
const rs = () => fl || (fl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fa(e) {
  if (J(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Ue(n) ? lp(n) : fa(n);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (Ue(e) || Pe(e))
    return e;
}
const sp = /;(?![^(]*\))/g, op = /:([^]+)/, ap = /\/\*[^]*?\*\//g;
function lp(e) {
  const t = {};
  return e.replace(ap, "").split(sp).forEach((r) => {
    if (r) {
      const n = r.split(op);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ha(e) {
  let t = "";
  if (Ue(e))
    t = e;
  else if (J(e))
    for (let r = 0; r < e.length; r++) {
      const n = ha(e[r]);
      n && (t += n + " ");
    }
  else if (Pe(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const cp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", up = /* @__PURE__ */ aa(cp);
function qu(e) {
  return !!e || e === "";
}
const $u = (e) => !!(e && e.__v_isRef === !0), ct = (e) => Ue(e) ? e : e == null ? "" : J(e) || Pe(e) && (e.toString === Vu || !ee(e.toString)) ? $u(e) ? ct(e.value) : JSON.stringify(e, Wu, 2) : String(e), Wu = (e, t) => $u(t) ? Wu(e, t.value) : tn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], s) => (r[Is(n, s) + " =>"] = i, r),
    {}
  )
} : Mu(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Is(r))
} : Sr(t) ? Is(t) : Pe(t) && !J(t) && !es(t) ? String(t) : t, Is = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Sr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
var fp = { NVM_INC: "/Users/agarwalh/.nvm/versions/node/v20.17.0/include/node", TERM_PROGRAM: "vscode", NODE: "/Users/agarwalh/.nvm/versions/node/v20.17.0/bin/node", INIT_CWD: "/Users/agarwalh/learning/web-components/vue-web-components", NVM_CD_FLAGS: "-q", TERM: "xterm-256color", SHELL: "/bin/zsh", TMPDIR: "/var/folders/98/kmt8cq9j53qdfhqm_npm7yv40000gn/T/", npm_config_global_prefix: "/Users/agarwalh/.nvm/versions/node/v20.17.0", TERM_PROGRAM_VERSION: "1.98.2", ZDOTDIR: "/Users/agarwalh", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/agarwalh/learning/web-components/vue-web-components", NVM_DIR: "/Users/agarwalh/.nvm", USER: "agarwalh", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/agarwalh/.nvm/versions/node/v20.17.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.MgZI78xKYq/Listeners", VSCODE_PROFILE_INITIALIZED: "1", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/agarwalh/.nvm/versions/node/v20.17.0/lib/node_modules/npm/bin/npm-cli.js", NPM_TOKEN: "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", PATH: "/Users/agarwalh/learning/web-components/vue-web-components/node_modules/.bin:/Users/agarwalh/learning/web-components/node_modules/.bin:/Users/agarwalh/learning/node_modules/.bin:/Users/agarwalh/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/agarwalh/.nvm/versions/node/v20.17.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/agarwalh/.nvm/versions/node/v20.17.0/bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/Library/Frameworks/Python.framework/Versions/3.13/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Users/agarwalh/.nvm/versions/node/v20.17.0/bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/Library/Frameworks/Python.framework/Versions/3.13/bin:/opt/homebrew/bin:/Users/agarwalh/Library/Application Support/Code/User/globalStorage/github.copilot-chat/debugCommand:/opt/homebrew/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin", npm_package_json: "/Users/agarwalh/learning/web-components/vue-web-components/package.json", _: "/Users/agarwalh/learning/web-components/vue-web-components/node_modules/.bin/vite", npm_config_userconfig: "/Users/agarwalh/.npmrc", npm_config_init_module: "/Users/agarwalh/.npm-init.js", USER_ZDOTDIR: "/Users/agarwalh", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/agarwalh/learning/web-components/vue-web-components", npm_lifecycle_event: "build:wc", EDITOR: "vi", npm_package_name: "vue-web-components", LANG: "en_US.UTF-8", npm_config_npm_version: "10.8.2", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/agarwalh/.nvm/versions/node/v20.17.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.0.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/agarwalh", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", npm_config_cache: "/Users/agarwalh/.npm", LOGNAME: "agarwalh", npm_lifecycle_script: "vite build --config vite.wc.config.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/98/kmt8cq9j53qdfhqm_npm7yv40000gn/T/vscode-git-c54c73559a.sock", NVM_BIN: "/Users/agarwalh/.nvm/versions/node/v20.17.0/bin", npm_config_user_agent: "npm/10.8.2 node/v20.17.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", npm_node_execpath: "/Users/agarwalh/.nvm/versions/node/v20.17.0/bin/node", npm_config_prefix: "/Users/agarwalh/.nvm/versions/node/v20.17.0", COLORTERM: "truecolor", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
let nt;
class Qu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = nt, !t && nt && (this.index = (nt.scopes || (nt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = nt;
      try {
        return nt = this, t();
      } finally {
        nt = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    nt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    nt = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Hu(e) {
  return new Qu(e);
}
function da() {
  return nt;
}
function pa(e, t = !1) {
  nt && nt.cleanups.push(e);
}
let we;
const Cs = /* @__PURE__ */ new WeakSet();
class Bu {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, nt && nt.active && nt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Cs.has(this) && (Cs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, hl(this), Ku(this);
    const t = we, r = kt;
    we = this, kt = !0;
    try {
      return this.fn();
    } finally {
      Yu(this), we = t, kt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ga(t);
      this.deps = this.depsTail = void 0, hl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Cs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    oo(this) && this.run();
  }
  get dirty() {
    return oo(this);
  }
}
let Gu = 0, jn, Un;
function zu(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Un, Un = e;
    return;
  }
  e.next = jn, jn = e;
}
function ma() {
  Gu++;
}
function va() {
  if (--Gu > 0)
    return;
  if (Un) {
    let t = Un;
    for (Un = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; jn; ) {
    let t = jn;
    for (jn = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function Ku(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Yu(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), ga(n), hp(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function oo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Xu(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Xu(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zn))
    return;
  e.globalVersion = Zn;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !oo(e)) {
    e.flags &= -3;
    return;
  }
  const r = we, n = kt;
  we = e, kt = !0;
  try {
    Ku(e);
    const i = e.fn(e._value);
    (t.version === 0 || vr(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    we = r, kt = n, Yu(e), e.flags &= -3;
  }
}
function ga(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let s = r.computed.deps; s; s = s.nextDep)
      ga(s, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function hp(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let kt = !0;
const Ju = [];
function tr() {
  Ju.push(kt), kt = !1;
}
function rr() {
  const e = Ju.pop();
  kt = e === void 0 ? !0 : e;
}
function hl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = we;
    we = void 0;
    try {
      t();
    } finally {
      we = r;
    }
  }
}
let Zn = 0;
class dp {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ya {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!we || !kt || we === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== we)
      r = this.activeLink = new dp(we, this), we.deps ? (r.prevDep = we.depsTail, we.depsTail.nextDep = r, we.depsTail = r) : we.deps = we.depsTail = r, Zu(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = we.depsTail, r.nextDep = void 0, we.depsTail.nextDep = r, we.depsTail = r, we.deps === r && (we.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, Zn++, this.notify(t);
  }
  notify(t) {
    ma();
    try {
      fp.NODE_ENV;
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      va();
    }
  }
}
function Zu(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Zu(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const ao = /* @__PURE__ */ new WeakMap(), Lr = Symbol(
  ""
), lo = Symbol(
  ""
), ei = Symbol(
  ""
);
function Ze(e, t, r) {
  if (kt && we) {
    let n = ao.get(e);
    n || ao.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new ya()), i.map = n, i.key = r), i.track();
  }
}
function Kt(e, t, r, n, i, s) {
  const o = ao.get(e);
  if (!o) {
    Zn++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (ma(), t === "clear")
    o.forEach(a);
  else {
    const l = J(e), c = l && ua(r);
    if (l && r === "length") {
      const u = Number(n);
      o.forEach((f, h) => {
        (h === "length" || h === ei || !Sr(h) && h >= u) && a(f);
      });
    } else
      switch ((r !== void 0 || o.has(void 0)) && a(o.get(r)), c && a(o.get(ei)), t) {
        case "add":
          l ? c && a(o.get("length")) : (a(o.get(Lr)), tn(e) && a(o.get(lo)));
          break;
        case "delete":
          l || (a(o.get(Lr)), tn(e) && a(o.get(lo)));
          break;
        case "set":
          tn(e) && a(o.get(Lr));
          break;
      }
  }
  va();
}
function $r(e) {
  const t = ue(e);
  return t === e ? t : (Ze(t, "iterate", ei), Dt(e) ? t : t.map(it));
}
function _a(e) {
  return Ze(e = ue(e), "iterate", ei), e;
}
const pp = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rs(this, Symbol.iterator, it);
  },
  concat(...e) {
    return $r(this).concat(
      ...e.map((t) => J(t) ? $r(t) : t)
    );
  },
  entries() {
    return Rs(this, "entries", (e) => (e[1] = it(e[1]), e));
  },
  every(e, t) {
    return Qt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Qt(this, "filter", e, t, (r) => r.map(it), arguments);
  },
  find(e, t) {
    return Qt(this, "find", e, t, it, arguments);
  },
  findIndex(e, t) {
    return Qt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Qt(this, "findLast", e, t, it, arguments);
  },
  findLastIndex(e, t) {
    return Qt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Qt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ks(this, "includes", e);
  },
  indexOf(...e) {
    return ks(this, "indexOf", e);
  },
  join(e) {
    return $r(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return ks(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Qt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Cn(this, "pop");
  },
  push(...e) {
    return Cn(this, "push", e);
  },
  reduce(e, ...t) {
    return dl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return dl(this, "reduceRight", e, t);
  },
  shift() {
    return Cn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Qt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Cn(this, "splice", e);
  },
  toReversed() {
    return $r(this).toReversed();
  },
  toSorted(e) {
    return $r(this).toSorted(e);
  },
  toSpliced(...e) {
    return $r(this).toSpliced(...e);
  },
  unshift(...e) {
    return Cn(this, "unshift", e);
  },
  values() {
    return Rs(this, "values", it);
  }
};
function Rs(e, t, r) {
  const n = _a(e), i = n[t]();
  return n !== e && !Dt(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.value && (s.value = r(s.value)), s;
  }), i;
}
const mp = Array.prototype;
function Qt(e, t, r, n, i, s) {
  const o = _a(e), a = o !== e && !Dt(e), l = o[t];
  if (l !== mp[t]) {
    const f = l.apply(e, s);
    return a ? it(f) : f;
  }
  let c = r;
  o !== e && (a ? c = function(f, h) {
    return r.call(this, it(f), h, e);
  } : r.length > 2 && (c = function(f, h) {
    return r.call(this, f, h, e);
  }));
  const u = l.call(o, c, n);
  return a && i ? i(u) : u;
}
function dl(e, t, r, n) {
  const i = _a(e);
  let s = r;
  return i !== e && (Dt(e) ? r.length > 3 && (s = function(o, a, l) {
    return r.call(this, o, a, l, e);
  }) : s = function(o, a, l) {
    return r.call(this, o, it(a), l, e);
  }), i[t](s, ...n);
}
function ks(e, t, r) {
  const n = ue(e);
  Ze(n, "iterate", ei);
  const i = n[t](...r);
  return (i === -1 || i === !1) && ba(r[0]) ? (r[0] = ue(r[0]), n[t](...r)) : i;
}
function Cn(e, t, r = []) {
  tr(), ma();
  const n = ue(e)[t].apply(e, r);
  return va(), rr(), n;
}
const vp = /* @__PURE__ */ aa("__proto__,__v_isRef,__isVue"), ef = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Sr)
);
function gp(e) {
  Sr(e) || (e = String(e));
  const t = ue(this);
  return Ze(t, "has", e), t.hasOwnProperty(e);
}
class tf {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return s;
    if (r === "__v_raw")
      return n === (i ? s ? lf : af : s ? of : sf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = J(t);
    if (!i) {
      let l;
      if (o && (l = pp[r]))
        return l;
      if (r === "hasOwnProperty")
        return gp;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      qe(t) ? t : n
    );
    return (Sr(r) ? ef.has(r) : vp(r)) || (i || Ze(t, "get", r), s) ? a : qe(a) ? o && ua(r) ? a : a.value : Pe(a) ? i ? uf(a) : bn(a) : a;
  }
}
class rf extends tf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let s = t[r];
    if (!this._isShallow) {
      const l = Mr(s);
      if (!Dt(n) && !Mr(n) && (s = ue(s), n = ue(n)), !J(t) && qe(s) && !qe(n))
        return l ? !1 : (s.value = n, !0);
    }
    const o = J(t) && ua(r) ? Number(r) < t.length : he(t, r), a = Reflect.set(
      t,
      r,
      n,
      qe(t) ? t : i
    );
    return t === ue(i) && (o ? vr(n, s) && Kt(t, "set", r, n) : Kt(t, "add", r, n)), a;
  }
  deleteProperty(t, r) {
    const n = he(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Kt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Sr(r) || !ef.has(r)) && Ze(t, "has", r), n;
  }
  ownKeys(t) {
    return Ze(
      t,
      "iterate",
      J(t) ? "length" : Lr
    ), Reflect.ownKeys(t);
  }
}
class nf extends tf {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const yp = /* @__PURE__ */ new rf(), _p = /* @__PURE__ */ new nf(), bp = /* @__PURE__ */ new rf(!0), Ep = /* @__PURE__ */ new nf(!0), co = (e) => e, Ei = (e) => Reflect.getPrototypeOf(e);
function Sp(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, s = ue(i), o = tn(s), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, c = i[e](...n), u = r ? co : t ? uo : it;
    return !t && Ze(
      s,
      "iterate",
      l ? lo : Lr
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = c.next();
        return h ? { value: f, done: h } : {
          value: a ? [u(f[0]), u(f[1])] : u(f),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Si(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wp(e, t) {
  const r = {
    get(i) {
      const s = this.__v_raw, o = ue(s), a = ue(i);
      e || (vr(i, a) && Ze(o, "get", i), Ze(o, "get", a));
      const { has: l } = Ei(o), c = t ? co : e ? uo : it;
      if (l.call(o, i))
        return c(s.get(i));
      if (l.call(o, a))
        return c(s.get(a));
      s !== o && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ze(ue(i), "iterate", Lr), Reflect.get(i, "size", i);
    },
    has(i) {
      const s = this.__v_raw, o = ue(s), a = ue(i);
      return e || (vr(i, a) && Ze(o, "has", i), Ze(o, "has", a)), i === a ? s.has(i) : s.has(i) || s.has(a);
    },
    forEach(i, s) {
      const o = this, a = o.__v_raw, l = ue(a), c = t ? co : e ? uo : it;
      return !e && Ze(l, "iterate", Lr), a.forEach((u, f) => i.call(s, c(u), c(f), o));
    }
  };
  return Be(
    r,
    e ? {
      add: Si("add"),
      set: Si("set"),
      delete: Si("delete"),
      clear: Si("clear")
    } : {
      add(i) {
        !t && !Dt(i) && !Mr(i) && (i = ue(i));
        const s = ue(this);
        return Ei(s).has.call(s, i) || (s.add(i), Kt(s, "add", i, i)), this;
      },
      set(i, s) {
        !t && !Dt(s) && !Mr(s) && (s = ue(s));
        const o = ue(this), { has: a, get: l } = Ei(o);
        let c = a.call(o, i);
        c || (i = ue(i), c = a.call(o, i));
        const u = l.call(o, i);
        return o.set(i, s), c ? vr(s, u) && Kt(o, "set", i, s) : Kt(o, "add", i, s), this;
      },
      delete(i) {
        const s = ue(this), { has: o, get: a } = Ei(s);
        let l = o.call(s, i);
        l || (i = ue(i), l = o.call(s, i)), a && a.call(s, i);
        const c = s.delete(i);
        return l && Kt(s, "delete", i, void 0), c;
      },
      clear() {
        const i = ue(this), s = i.size !== 0, o = i.clear();
        return s && Kt(
          i,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    r[i] = Sp(i, e, t);
  }), r;
}
function ns(e, t) {
  const r = wp(e, t);
  return (n, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    he(r, i) && i in n ? r : n,
    i,
    s
  );
}
const Op = {
  get: /* @__PURE__ */ ns(!1, !1)
}, Tp = {
  get: /* @__PURE__ */ ns(!1, !0)
}, Ip = {
  get: /* @__PURE__ */ ns(!0, !1)
}, Cp = {
  get: /* @__PURE__ */ ns(!0, !0)
}, sf = /* @__PURE__ */ new WeakMap(), of = /* @__PURE__ */ new WeakMap(), af = /* @__PURE__ */ new WeakMap(), lf = /* @__PURE__ */ new WeakMap();
function Rp(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function kp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Rp(tp(e));
}
function bn(e) {
  return Mr(e) ? e : is(
    e,
    !1,
    yp,
    Op,
    sf
  );
}
function cf(e) {
  return is(
    e,
    !1,
    bp,
    Tp,
    of
  );
}
function uf(e) {
  return is(
    e,
    !0,
    _p,
    Ip,
    af
  );
}
function wi(e) {
  return is(
    e,
    !0,
    Ep,
    Cp,
    lf
  );
}
function is(e, t, r, n, i) {
  if (!Pe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const o = kp(e);
  if (o === 0)
    return e;
  const a = new Proxy(
    e,
    o === 2 ? n : r
  );
  return i.set(e, a), a;
}
function qn(e) {
  return Mr(e) ? qn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Mr(e) {
  return !!(e && e.__v_isReadonly);
}
function Dt(e) {
  return !!(e && e.__v_isShallow);
}
function ba(e) {
  return e ? !!e.__v_raw : !1;
}
function ue(e) {
  const t = e && e.__v_raw;
  return t ? ue(t) : e;
}
function Dp(e) {
  return !he(e, "__v_skip") && Object.isExtensible(e) && Uu(e, "__v_skip", !0), e;
}
const it = (e) => Pe(e) ? bn(e) : e, uo = (e) => Pe(e) ? uf(e) : e;
function qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ye(e) {
  return ff(e, !1);
}
function $n(e) {
  return ff(e, !0);
}
function ff(e, t) {
  return qe(e) ? e : new Pp(e, t);
}
class Pp {
  constructor(t, r) {
    this.dep = new ya(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : ue(t), this._value = r ? t : it(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || Dt(t) || Mr(t);
    t = n ? t : ue(t), vr(t, r) && (this._rawValue = t, this._value = n ? t : it(t), this.dep.trigger());
  }
}
function bt(e) {
  return qe(e) ? e.value : e;
}
const Np = {
  get: (e, t, r) => t === "__v_raw" ? e : bt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return qe(i) && !qe(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function hf(e) {
  return qn(e) ? e : new Proxy(e, Np);
}
class Ap {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new ya(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    we !== this)
      return zu(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Xu(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Lp(e, t, r = !1) {
  let n, i;
  return ee(e) ? n = e : (n = e.get, i = e.set), new Ap(n, i, r);
}
const Oi = {}, ji = /* @__PURE__ */ new WeakMap();
let Rr;
function xp(e, t = !1, r = Rr) {
  if (r) {
    let n = ji.get(r);
    n || ji.set(r, n = []), n.push(e);
  }
}
function Mp(e, t, r = Te) {
  const { immediate: n, deep: i, once: s, scheduler: o, augmentJob: a, call: l } = r, c = (b) => i ? b : Dt(b) || i === !1 || i === 0 ? mr(b, 1) : mr(b);
  let u, f, h, d, E = !1, v = !1;
  if (qe(e) ? (f = () => e.value, E = Dt(e)) : qn(e) ? (f = () => c(e), E = !0) : J(e) ? (v = !0, E = e.some((b) => qn(b) || Dt(b)), f = () => e.map((b) => {
    if (qe(b))
      return b.value;
    if (qn(b))
      return c(b);
    if (ee(b))
      return l ? l(b, 2) : b();
  })) : ee(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
    if (h) {
      tr();
      try {
        h();
      } finally {
        rr();
      }
    }
    const b = Rr;
    Rr = u;
    try {
      return l ? l(e, 3, [d]) : e(d);
    } finally {
      Rr = b;
    }
  } : f = Ct, t && i) {
    const b = f, T = i === !0 ? 1 / 0 : i;
    f = () => mr(b(), T);
  }
  const w = da(), p = () => {
    u.stop(), w && w.active && ca(w.effects, u);
  };
  if (s && t) {
    const b = t;
    t = (...T) => {
      b(...T), p();
    };
  }
  let y = v ? new Array(e.length).fill(Oi) : Oi;
  const _ = (b) => {
    if (!(!(u.flags & 1) || !u.dirty && !b))
      if (t) {
        const T = u.run();
        if (i || E || (v ? T.some((D, P) => vr(D, y[P])) : vr(T, y))) {
          h && h();
          const D = Rr;
          Rr = u;
          try {
            const P = [
              T,
              // pass undefined as the old value when it's changed for the first time
              y === Oi ? void 0 : v && y[0] === Oi ? [] : y,
              d
            ];
            l ? l(t, 3, P) : (
              // @ts-expect-error
              t(...P)
            ), y = T;
          } finally {
            Rr = D;
          }
        }
      } else
        u.run();
  };
  return a && a(_), u = new Bu(f), u.scheduler = o ? () => o(_, !1) : _, d = (b) => xp(b, !1, u), h = u.onStop = () => {
    const b = ji.get(u);
    if (b) {
      if (l)
        l(b, 4);
      else
        for (const T of b) T();
      ji.delete(u);
    }
  }, t ? n ? _(!0) : y = u.run() : o ? o(_.bind(null, !0), !0) : u.run(), p.pause = u.pause.bind(u), p.resume = u.resume.bind(u), p.stop = p, p;
}
function mr(e, t = 1 / 0, r) {
  if (t <= 0 || !Pe(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Set(), r.has(e)))
    return e;
  if (r.add(e), t--, qe(e))
    mr(e.value, t, r);
  else if (J(e))
    for (let n = 0; n < e.length; n++)
      mr(e[n], t, r);
  else if (Mu(e) || tn(e))
    e.forEach((n) => {
      mr(n, t, r);
    });
  else if (es(e)) {
    for (const n in e)
      mr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && mr(e[n], t, r);
  }
  return e;
}
var lr = { NVM_INC: "/Users/agarwalh/.nvm/versions/node/v20.17.0/include/node", TERM_PROGRAM: "vscode", NODE: "/Users/agarwalh/.nvm/versions/node/v20.17.0/bin/node", INIT_CWD: "/Users/agarwalh/learning/web-components/vue-web-components", NVM_CD_FLAGS: "-q", TERM: "xterm-256color", SHELL: "/bin/zsh", TMPDIR: "/var/folders/98/kmt8cq9j53qdfhqm_npm7yv40000gn/T/", npm_config_global_prefix: "/Users/agarwalh/.nvm/versions/node/v20.17.0", TERM_PROGRAM_VERSION: "1.98.2", ZDOTDIR: "/Users/agarwalh", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/agarwalh/learning/web-components/vue-web-components", NVM_DIR: "/Users/agarwalh/.nvm", USER: "agarwalh", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/agarwalh/.nvm/versions/node/v20.17.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.MgZI78xKYq/Listeners", VSCODE_PROFILE_INITIALIZED: "1", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/agarwalh/.nvm/versions/node/v20.17.0/lib/node_modules/npm/bin/npm-cli.js", NPM_TOKEN: "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", PATH: "/Users/agarwalh/learning/web-components/vue-web-components/node_modules/.bin:/Users/agarwalh/learning/web-components/node_modules/.bin:/Users/agarwalh/learning/node_modules/.bin:/Users/agarwalh/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/agarwalh/.nvm/versions/node/v20.17.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/agarwalh/.nvm/versions/node/v20.17.0/bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/Library/Frameworks/Python.framework/Versions/3.13/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Users/agarwalh/.nvm/versions/node/v20.17.0/bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/Library/Frameworks/Python.framework/Versions/3.13/bin:/opt/homebrew/bin:/Users/agarwalh/Library/Application Support/Code/User/globalStorage/github.copilot-chat/debugCommand:/opt/homebrew/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin", npm_package_json: "/Users/agarwalh/learning/web-components/vue-web-components/package.json", _: "/Users/agarwalh/learning/web-components/vue-web-components/node_modules/.bin/vite", npm_config_userconfig: "/Users/agarwalh/.npmrc", npm_config_init_module: "/Users/agarwalh/.npm-init.js", USER_ZDOTDIR: "/Users/agarwalh", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/agarwalh/learning/web-components/vue-web-components", npm_lifecycle_event: "build:wc", EDITOR: "vi", npm_package_name: "vue-web-components", LANG: "en_US.UTF-8", npm_config_npm_version: "10.8.2", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/agarwalh/.nvm/versions/node/v20.17.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.0.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/agarwalh", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", npm_config_cache: "/Users/agarwalh/.npm", LOGNAME: "agarwalh", npm_lifecycle_script: "vite build --config vite.wc.config.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/98/kmt8cq9j53qdfhqm_npm7yv40000gn/T/vscode-git-c54c73559a.sock", NVM_BIN: "/Users/agarwalh/.nvm/versions/node/v20.17.0/bin", npm_config_user_agent: "npm/10.8.2 node/v20.17.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", npm_node_execpath: "/Users/agarwalh/.nvm/versions/node/v20.17.0/bin/node", npm_config_prefix: "/Users/agarwalh/.nvm/versions/node/v20.17.0", COLORTERM: "truecolor", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
const Wn = [];
let Ds = !1;
function Fp(e, ...t) {
  if (Ds) return;
  Ds = !0, tr();
  const r = Wn.length ? Wn[Wn.length - 1].component : null, n = r && r.appContext.config.warnHandler, i = Vp();
  if (n)
    En(
      n,
      r,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var o, a;
          return (a = (o = s.toString) == null ? void 0 : o.call(s)) != null ? a : JSON.stringify(s);
        }).join(""),
        r && r.proxy,
        i.map(
          ({ vnode: s }) => `at <${Hf(r, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    i.length && s.push(`
`, ...jp(i)), console.warn(...s);
  }
  rr(), Ds = !1;
}
function Vp() {
  let e = Wn[Wn.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const r = t[0];
    r && r.vnode === e ? r.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function jp(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push(...n === 0 ? [] : [`
`], ...Up(r));
  }), t;
}
function Up({ vnode: e, recurseCount: t }) {
  const r = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, i = ` at <${Hf(
    e.component,
    e.type,
    n
  )}`, s = ">" + r;
  return e.props ? [i, ...qp(e.props), s] : [i + s];
}
function qp(e) {
  const t = [], r = Object.keys(e);
  return r.slice(0, 3).forEach((n) => {
    t.push(...df(n, e[n]));
  }), r.length > 3 && t.push(" ..."), t;
}
function df(e, t, r) {
  return Ue(t) ? (t = JSON.stringify(t), r ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? r ? t : [`${e}=${t}`] : qe(t) ? (t = df(e, ue(t.value), !0), r ? t : [`${e}=Ref<`, t, ">"]) : ee(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = ue(t), r ? t : [`${e}=`, t]);
}
function En(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    ss(i, t, r);
  }
}
function qt(e, t, r, n) {
  if (ee(e)) {
    const i = En(e, t, r, n);
    return i && Fu(i) && i.catch((s) => {
      ss(s, t, r);
    }), i;
  }
  if (J(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(qt(e[s], t, r, n));
    return i;
  }
}
function ss(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Te;
  if (t) {
    let a = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; a; ) {
      const u = a.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, l, c) === !1)
            return;
      }
      a = a.parent;
    }
    if (s) {
      tr(), En(s, null, 10, [
        e,
        l,
        c
      ]), rr();
      return;
    }
  }
  $p(e, r, i, n, o);
}
function $p(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const st = [];
let Vt = -1;
const rn = [];
let cr = null, Hr = 0;
const pf = /* @__PURE__ */ Promise.resolve();
let Ui = null;
function Pr(e) {
  const t = Ui || pf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wp(e) {
  let t = Vt + 1, r = st.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = st[n], s = ti(i);
    s < e || s === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Ea(e) {
  if (!(e.flags & 1)) {
    const t = ti(e), r = st[st.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ti(r) ? st.push(e) : st.splice(Wp(t), 0, e), e.flags |= 1, mf();
  }
}
function mf() {
  Ui || (Ui = pf.then(gf));
}
function Qp(e) {
  J(e) ? rn.push(...e) : cr && e.id === -1 ? cr.splice(Hr + 1, 0, e) : e.flags & 1 || (rn.push(e), e.flags |= 1), mf();
}
function pl(e, t, r = Vt + 1) {
  for (; r < st.length; r++) {
    const n = st[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      st.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function vf(e) {
  if (rn.length) {
    const t = [...new Set(rn)].sort(
      (r, n) => ti(r) - ti(n)
    );
    if (rn.length = 0, cr) {
      cr.push(...t);
      return;
    }
    for (cr = t, Hr = 0; Hr < cr.length; Hr++) {
      const r = cr[Hr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    cr = null, Hr = 0;
  }
}
const ti = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function gf(e) {
  const t = Ct;
  try {
    for (Vt = 0; Vt < st.length; Vt++) {
      const r = st[Vt];
      r && !(r.flags & 8) && (lr.NODE_ENV !== "production" && t(r), r.flags & 4 && (r.flags &= -2), En(
        r,
        r.i,
        r.i ? 15 : 14
      ), r.flags & 4 || (r.flags &= -2));
    }
  } finally {
    for (; Vt < st.length; Vt++) {
      const r = st[Vt];
      r && (r.flags &= -2);
    }
    Vt = -1, st.length = 0, vf(), Ui = null, (st.length || rn.length) && gf();
  }
}
let _t = null, yf = null;
function qi(e) {
  const t = _t;
  return _t = e, yf = e && e.type.__scopeId || null, t;
}
function fo(e, t = _t, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && wl(-1);
    const s = qi(t);
    let o;
    try {
      o = e(...i);
    } finally {
      qi(s), n._d && wl(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ir(e, t, r, n) {
  const i = e.dirs, s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    s && (a.oldValue = s[o].value);
    let l = a.dir[n];
    l && (tr(), qt(l, r, 8, [
      e.el,
      a,
      e,
      t
    ]), rr());
  }
}
const Hp = Symbol("_vte"), Bp = (e) => e.__isTeleport;
function Sa(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Sa(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Sn(e, t) {
  return ee(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Be({ name: e.name }, t, { setup: e })
  ) : e;
}
function _f(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function $i(e, t, r, n, i = !1) {
  if (J(e)) {
    e.forEach(
      (E, v) => $i(
        E,
        t && (J(t) ? t[v] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (Qn(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && $i(e, t, r, n.component.subTree);
    return;
  }
  const s = n.shapeFlag & 4 ? Ia(n.component) : n.el, o = i ? null : s, { i: a, r: l } = e, c = t && t.r, u = a.refs === Te ? a.refs = {} : a.refs, f = a.setupState, h = ue(f), d = f === Te ? () => !1 : (E) => he(h, E);
  if (c != null && c !== l && (Ue(c) ? (u[c] = null, d(c) && (f[c] = null)) : qe(c) && (c.value = null)), ee(l))
    En(l, a, 12, [o, u]);
  else {
    const E = Ue(l), v = qe(l);
    if (E || v) {
      const w = () => {
        if (e.f) {
          const p = E ? d(l) ? f[l] : u[l] : l.value;
          i ? J(p) && ca(p, s) : J(p) ? p.includes(s) || p.push(s) : E ? (u[l] = [s], d(l) && (f[l] = u[l])) : (l.value = [s], e.k && (u[e.k] = l.value));
        } else E ? (u[l] = o, d(l) && (f[l] = o)) : v && (l.value = o, e.k && (u[e.k] = o));
      };
      o ? (w.id = -1, dt(w, r)) : w();
    }
  }
}
rs().requestIdleCallback;
rs().cancelIdleCallback;
const Qn = (e) => !!e.type.__asyncLoader, bf = (e) => e.type.__isKeepAlive;
function Gp(e, t) {
  Ef(e, "a", t);
}
function zp(e, t) {
  Ef(e, "da", t);
}
function Ef(e, t, r = Qe) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (os(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      bf(i.parent.vnode) && Kp(n, t, r, i), i = i.parent;
  }
}
function Kp(e, t, r, n) {
  const i = os(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  wa(() => {
    ca(n[t], i);
  }, r);
}
function os(e, t, r = Qe, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), s = t.__weh || (t.__weh = (...o) => {
      tr();
      const a = vi(r), l = qt(t, r, e, o);
      return a(), rr(), l;
    });
    return n ? i.unshift(s) : i.push(s), s;
  }
}
const nr = (e) => (t, r = Qe) => {
  (!ii || e === "sp") && os(e, (...n) => t(...n), r);
}, Yp = nr("bm"), Sf = nr("m"), Xp = nr(
  "bu"
), Jp = nr("u"), Zp = nr(
  "bum"
), wa = nr("um"), wf = nr(
  "sp"
), em = nr("rtg"), tm = nr("rtc");
function rm(e, t = Qe) {
  os("ec", e, t);
}
const nm = Symbol.for("v-ndc"), ho = (e) => e ? Wf(e) ? Ia(e) : ho(e.parent) : null, Hn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Be(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ho(e.parent),
    $root: (e) => ho(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Tf(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ea(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pr.bind(e.proxy)),
    $watch: (e) => Tm.bind(e)
  })
), Ps = (e, t) => e !== Te && !e.__isScriptSetup && he(e, t), im = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: s, accessCache: o, type: a, appContext: l } = e;
    let c;
    if (t[0] !== "$") {
      const d = o[t];
      if (d !== void 0)
        switch (d) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return r[t];
          case 3:
            return s[t];
        }
      else {
        if (Ps(n, t))
          return o[t] = 1, n[t];
        if (i !== Te && he(i, t))
          return o[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && he(c, t)
        )
          return o[t] = 3, s[t];
        if (r !== Te && he(r, t))
          return o[t] = 4, r[t];
        po && (o[t] = 0);
      }
    }
    const u = Hn[t];
    let f, h;
    if (u)
      return t === "$attrs" && Ze(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (f = a.__cssModules) && (f = f[t])
    )
      return f;
    if (r !== Te && he(r, t))
      return o[t] = 4, r[t];
    if (
      // global properties
      h = l.config.globalProperties, he(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: s } = e;
    return Ps(i, t) ? (i[t] = r, !0) : n !== Te && he(n, t) ? (n[t] = r, !0) : he(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, propsOptions: s }
  }, o) {
    let a;
    return !!r[o] || e !== Te && he(e, o) || Ps(t, o) || (a = s[0]) && he(a, o) || he(n, o) || he(Hn, o) || he(i.config.globalProperties, o);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : he(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function ml(e) {
  return J(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let po = !0;
function sm(e) {
  const t = Tf(e), r = e.proxy, n = e.ctx;
  po = !1, t.beforeCreate && vl(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: d,
    updated: E,
    activated: v,
    deactivated: w,
    beforeDestroy: p,
    beforeUnmount: y,
    destroyed: _,
    unmounted: b,
    render: T,
    renderTracked: D,
    renderTriggered: P,
    errorCaptured: q,
    serverPrefetch: z,
    // public API
    expose: W,
    inheritAttrs: ie,
    // assets
    components: te,
    directives: Z,
    filters: xe
  } = t;
  if (c && om(c, n, null), o)
    for (const se in o) {
      const re = o[se];
      ee(re) && (n[se] = re.bind(r));
    }
  if (i) {
    const se = i.call(r, r);
    Pe(se) && (e.data = bn(se));
  }
  if (po = !0, s)
    for (const se in s) {
      const re = s[se], oe = ee(re) ? re.bind(r, r) : ee(re.get) ? re.get.bind(r, r) : Ct, Ge = !ee(re) && ee(re.set) ? re.set.bind(r) : Ct, Me = Ve({
        get: oe,
        set: Ge
      });
      Object.defineProperty(n, se, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (Ee) => Me.value = Ee
      });
    }
  if (a)
    for (const se in a)
      Of(a[se], n, r, se);
  if (l) {
    const se = ee(l) ? l.call(r) : l;
    Reflect.ownKeys(se).forEach((re) => {
      nn(re, se[re]);
    });
  }
  u && vl(u, e, "c");
  function ye(se, re) {
    J(re) ? re.forEach((oe) => se(oe.bind(r))) : re && se(re.bind(r));
  }
  if (ye(Yp, f), ye(Sf, h), ye(Xp, d), ye(Jp, E), ye(Gp, v), ye(zp, w), ye(rm, q), ye(tm, D), ye(em, P), ye(Zp, y), ye(wa, b), ye(wf, z), J(W))
    if (W.length) {
      const se = e.exposed || (e.exposed = {});
      W.forEach((re) => {
        Object.defineProperty(se, re, {
          get: () => r[re],
          set: (oe) => r[re] = oe
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === Ct && (e.render = T), ie != null && (e.inheritAttrs = ie), te && (e.components = te), Z && (e.directives = Z), z && _f(e);
}
function om(e, t, r = Ct) {
  J(e) && (e = mo(e));
  for (const n in e) {
    const i = e[n];
    let s;
    Pe(i) ? "default" in i ? s = Et(
      i.from || n,
      i.default,
      !0
    ) : s = Et(i.from || n) : s = Et(i), qe(s) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[n] = s;
  }
}
function vl(e, t, r) {
  qt(
    J(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Of(e, t, r, n) {
  let i = n.includes(".") ? jf(r, n) : () => r[n];
  if (Ue(e)) {
    const s = t[e];
    ee(s) && ot(i, s);
  } else if (ee(e))
    ot(i, e.bind(r));
  else if (Pe(e))
    if (J(e))
      e.forEach((s) => Of(s, t, r, n));
    else {
      const s = ee(e.handler) ? e.handler.bind(r) : t[e.handler];
      ee(s) && ot(i, s, e);
    }
}
function Tf(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Wi(l, c, o, !0)
  ), Wi(l, t, o)), Pe(t) && s.set(t, l), l;
}
function Wi(e, t, r, n = !1) {
  const { mixins: i, extends: s } = t;
  s && Wi(e, s, r, !0), i && i.forEach(
    (o) => Wi(e, o, r, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const a = am[o] || r && r[o];
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const am = {
  data: gl,
  props: yl,
  emits: yl,
  // objects
  methods: xn,
  computed: xn,
  // lifecycle
  beforeCreate: tt,
  created: tt,
  beforeMount: tt,
  mounted: tt,
  beforeUpdate: tt,
  updated: tt,
  beforeDestroy: tt,
  beforeUnmount: tt,
  destroyed: tt,
  unmounted: tt,
  activated: tt,
  deactivated: tt,
  errorCaptured: tt,
  serverPrefetch: tt,
  // assets
  components: xn,
  directives: xn,
  // watch
  watch: cm,
  // provide / inject
  provide: gl,
  inject: lm
};
function gl(e, t) {
  return t ? e ? function() {
    return Be(
      ee(e) ? e.call(this, this) : e,
      ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function lm(e, t) {
  return xn(mo(e), mo(t));
}
function mo(e) {
  if (J(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function tt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function xn(e, t) {
  return e ? Be(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yl(e, t) {
  return e ? J(e) && J(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Be(
    /* @__PURE__ */ Object.create(null),
    ml(e),
    ml(t ?? {})
  ) : t;
}
function cm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = Be(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = tt(e[n], t[n]);
  return r;
}
function If() {
  return {
    app: null,
    config: {
      isNativeTag: Zd,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let um = 0;
function fm(e, t) {
  return function(n, i = null) {
    ee(n) || (n = Be({}, n)), i != null && !Pe(i) && (i = null);
    const s = If(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = s.app = {
      _uid: um++,
      _component: n,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Km,
      get config() {
        return s.config;
      },
      set config(u) {
      },
      use(u, ...f) {
        return o.has(u) || (u && ee(u.install) ? (o.add(u), u.install(c, ...f)) : ee(u) && (o.add(u), u(c, ...f))), c;
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), c;
      },
      component(u, f) {
        return f ? (s.components[u] = f, c) : s.components[u];
      },
      directive(u, f) {
        return f ? (s.directives[u] = f, c) : s.directives[u];
      },
      mount(u, f, h) {
        if (!l) {
          const d = c._ceVNode || ke(n, i);
          return d.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(d, u, h), l = !0, c._container = u, u.__vue_app__ = c, Ia(d.component);
        }
      },
      onUnmount(u) {
        a.push(u);
      },
      unmount() {
        l && (qt(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, f) {
        return s.provides[u] = f, c;
      },
      runWithContext(u) {
        const f = xr;
        xr = c;
        try {
          return u();
        } finally {
          xr = f;
        }
      }
    };
    return c;
  };
}
let xr = null;
function nn(e, t) {
  if (Qe) {
    let r = Qe.provides;
    const n = Qe.parent && Qe.parent.provides;
    n === r && (r = Qe.provides = Object.create(n)), r[e] = t;
  }
}
function Et(e, t, r = !1) {
  const n = Qe || _t;
  if (n || xr) {
    const i = xr ? xr._context.provides : n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && ee(t) ? t.call(n && n.proxy) : t;
  }
}
function hm() {
  return !!(Qe || _t || xr);
}
const Cf = {}, Rf = () => Object.create(Cf), kf = (e) => Object.getPrototypeOf(e) === Cf;
function dm(e, t, r, n = !1) {
  const i = {}, s = Rf();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Df(e, t, i, s);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  r ? e.props = n ? i : cf(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function pm(e, t, r, n) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, a = ue(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if (as(e.emitsOptions, h))
          continue;
        const d = t[h];
        if (l)
          if (he(s, h))
            d !== s[h] && (s[h] = d, c = !0);
          else {
            const E = Rt(h);
            i[E] = vo(
              l,
              a,
              E,
              d,
              e,
              !1
            );
          }
        else
          d !== s[h] && (s[h] = d, c = !0);
      }
    }
  } else {
    Df(e, t, i, s) && (c = !0);
    let u;
    for (const f in a)
      (!t || // for camelCase
      !he(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = yt(f)) === f || !he(t, u))) && (l ? r && // for camelCase
      (r[f] !== void 0 || // for kebab-case
      r[u] !== void 0) && (i[f] = vo(
        l,
        a,
        f,
        void 0,
        e,
        !0
      )) : delete i[f]);
    if (s !== a)
      for (const f in s)
        (!t || !he(t, f)) && (delete s[f], c = !0);
  }
  c && Kt(e.attrs, "set", "");
}
function Df(e, t, r, n) {
  const [i, s] = e.propsOptions;
  let o = !1, a;
  if (t)
    for (let l in t) {
      if (Vn(l))
        continue;
      const c = t[l];
      let u;
      i && he(i, u = Rt(l)) ? !s || !s.includes(u) ? r[u] = c : (a || (a = {}))[u] = c : as(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, o = !0);
    }
  if (s) {
    const l = ue(r), c = a || Te;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      r[f] = vo(
        i,
        l,
        f,
        c[f],
        e,
        !he(c, f)
      );
    }
  }
  return o;
}
function vo(e, t, r, n, i, s) {
  const o = e[r];
  if (o != null) {
    const a = he(o, "default");
    if (a && n === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ee(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const u = vi(i);
          n = c[r] = l.call(
            null,
            t
          ), u();
        }
      } else
        n = l;
      i.ce && i.ce._setProp(r, n);
    }
    o[
      0
      /* shouldCast */
    ] && (s && !a ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === yt(r)) && (n = !0));
  }
  return n;
}
const mm = /* @__PURE__ */ new WeakMap();
function Pf(e, t, r = !1) {
  const n = r ? mm : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const s = e.props, o = {}, a = [];
  let l = !1;
  if (!ee(e)) {
    const u = (f) => {
      l = !0;
      const [h, d] = Pf(f, t, !0);
      Be(o, h), d && a.push(...d);
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return Pe(e) && n.set(e, en), en;
  if (J(s))
    for (let u = 0; u < s.length; u++) {
      const f = Rt(s[u]);
      _l(f) && (o[f] = Te);
    }
  else if (s)
    for (const u in s) {
      const f = Rt(u);
      if (_l(f)) {
        const h = s[u], d = o[f] = J(h) || ee(h) ? { type: h } : Be({}, h), E = d.type;
        let v = !1, w = !0;
        if (J(E))
          for (let p = 0; p < E.length; ++p) {
            const y = E[p], _ = ee(y) && y.name;
            if (_ === "Boolean") {
              v = !0;
              break;
            } else _ === "String" && (w = !1);
          }
        else
          v = ee(E) && E.name === "Boolean";
        d[
          0
          /* shouldCast */
        ] = v, d[
          1
          /* shouldCastTrue */
        ] = w, (v || he(d, "default")) && a.push(f);
      }
    }
  const c = [o, a];
  return Pe(e) && n.set(e, c), c;
}
function _l(e) {
  return e[0] !== "$" && !Vn(e);
}
const Nf = (e) => e[0] === "_" || e === "$stable", Oa = (e) => J(e) ? e.map(jt) : [jt(e)], vm = (e, t, r) => {
  if (t._n)
    return t;
  const n = fo((...i) => (lr.NODE_ENV !== "production" && Qe && (!r || (r.root, Qe.root)), Oa(t(...i))), r);
  return n._c = !1, n;
}, Af = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Nf(i)) continue;
    const s = e[i];
    if (ee(s))
      t[i] = vm(i, s, n);
    else if (s != null) {
      const o = Oa(s);
      t[i] = () => o;
    }
  }
}, Lf = (e, t) => {
  const r = Oa(t);
  e.slots.default = () => r;
}, xf = (e, t, r) => {
  for (const n in t)
    (r || n !== "_") && (e[n] = t[n]);
}, gm = (e, t, r) => {
  const n = e.slots = Rf();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (xf(n, t, r), r && Uu(n, "_", i, !0)) : Af(t, n);
  } else t && Lf(e, t);
}, ym = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let s = !0, o = Te;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? s = !1 : xf(i, t, r) : (s = !t.$stable, Af(t, i)), o = t;
  } else t && (Lf(e, t), o = { default: 1 });
  if (s)
    for (const a in i)
      !Nf(a) && o[a] == null && delete i[a];
}, dt = Nm;
function _m(e) {
  return bm(e);
}
function bm(e, t) {
  const r = rs();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: h,
    setScopeId: d = Ct,
    insertStaticContent: E
  } = e, v = (S, O, R, x = null, V = null, F = null, m = void 0, g = null, I = !!O.dynamicChildren) => {
    if (S === O)
      return;
    S && !Rn(S, O) && (x = M(S), Ee(S, V, F, !0), S = null), O.patchFlag === -2 && (I = !1, O.dynamicChildren = null);
    const { type: N, ref: H, shapeFlag: j } = O;
    switch (N) {
      case mi:
        w(S, O, R, x);
        break;
      case ri:
        p(S, O, R, x);
        break;
      case As:
        S == null && y(O, R, x, m);
        break;
      case vt:
        te(
          S,
          O,
          R,
          x,
          V,
          F,
          m,
          g,
          I
        );
        break;
      default:
        j & 1 ? T(
          S,
          O,
          R,
          x,
          V,
          F,
          m,
          g,
          I
        ) : j & 6 ? Z(
          S,
          O,
          R,
          x,
          V,
          F,
          m,
          g,
          I
        ) : (j & 64 || j & 128) && N.process(
          S,
          O,
          R,
          x,
          V,
          F,
          m,
          g,
          I,
          G
        );
    }
    H != null && V && $i(H, S && S.ref, F, O || S, !O);
  }, w = (S, O, R, x) => {
    if (S == null)
      n(
        O.el = a(O.children),
        R,
        x
      );
    else {
      const V = O.el = S.el;
      O.children !== S.children && c(V, O.children);
    }
  }, p = (S, O, R, x) => {
    S == null ? n(
      O.el = l(O.children || ""),
      R,
      x
    ) : O.el = S.el;
  }, y = (S, O, R, x) => {
    [S.el, S.anchor] = E(
      S.children,
      O,
      R,
      x,
      S.el,
      S.anchor
    );
  }, _ = ({ el: S, anchor: O }, R, x) => {
    let V;
    for (; S && S !== O; )
      V = h(S), n(S, R, x), S = V;
    n(O, R, x);
  }, b = ({ el: S, anchor: O }) => {
    let R;
    for (; S && S !== O; )
      R = h(S), i(S), S = R;
    i(O);
  }, T = (S, O, R, x, V, F, m, g, I) => {
    O.type === "svg" ? m = "svg" : O.type === "math" && (m = "mathml"), S == null ? D(
      O,
      R,
      x,
      V,
      F,
      m,
      g,
      I
    ) : z(
      S,
      O,
      V,
      F,
      m,
      g,
      I
    );
  }, D = (S, O, R, x, V, F, m, g) => {
    let I, N;
    const { props: H, shapeFlag: j, transition: C, dirs: A } = S;
    if (I = S.el = o(
      S.type,
      F,
      H && H.is,
      H
    ), j & 8 ? u(I, S.children) : j & 16 && q(
      S.children,
      I,
      null,
      x,
      V,
      Ns(S, F),
      m,
      g
    ), A && Ir(S, null, x, "created"), P(I, S, S.scopeId, m, x), H) {
      for (const U in H)
        U !== "value" && !Vn(U) && s(I, U, null, H[U], F, x);
      "value" in H && s(I, "value", null, H.value, F), (N = H.onVnodeBeforeMount) && Mt(N, x, S);
    }
    A && Ir(S, null, x, "beforeMount");
    const L = Em(V, C);
    L && C.beforeEnter(I), n(I, O, R), ((N = H && H.onVnodeMounted) || L || A) && dt(() => {
      N && Mt(N, x, S), L && C.enter(I), A && Ir(S, null, x, "mounted");
    }, V);
  }, P = (S, O, R, x, V) => {
    if (R && d(S, R), x)
      for (let F = 0; F < x.length; F++)
        d(S, x[F]);
    if (V) {
      let F = V.subTree;
      if (O === F || qf(F.type) && (F.ssContent === O || F.ssFallback === O)) {
        const m = V.vnode;
        P(
          S,
          m,
          m.scopeId,
          m.slotScopeIds,
          V.parent
        );
      }
    }
  }, q = (S, O, R, x, V, F, m, g, I = 0) => {
    for (let N = I; N < S.length; N++) {
      const H = S[N] = g ? ur(S[N]) : jt(S[N]);
      v(
        null,
        H,
        O,
        R,
        x,
        V,
        F,
        m,
        g
      );
    }
  }, z = (S, O, R, x, V, F, m) => {
    const g = O.el = S.el;
    let { patchFlag: I, dynamicChildren: N, dirs: H } = O;
    I |= S.patchFlag & 16;
    const j = S.props || Te, C = O.props || Te;
    let A;
    if (R && Cr(R, !1), (A = C.onVnodeBeforeUpdate) && Mt(A, R, O, S), H && Ir(O, S, R, "beforeUpdate"), R && Cr(R, !0), (j.innerHTML && C.innerHTML == null || j.textContent && C.textContent == null) && u(g, ""), N ? W(
      S.dynamicChildren,
      N,
      g,
      R,
      x,
      Ns(O, V),
      F
    ) : m || re(
      S,
      O,
      g,
      null,
      R,
      x,
      Ns(O, V),
      F,
      !1
    ), I > 0) {
      if (I & 16)
        ie(g, j, C, R, V);
      else if (I & 2 && j.class !== C.class && s(g, "class", null, C.class, V), I & 4 && s(g, "style", j.style, C.style, V), I & 8) {
        const L = O.dynamicProps;
        for (let U = 0; U < L.length; U++) {
          const Y = L[U], ce = j[Y], _e = C[Y];
          (_e !== ce || Y === "value") && s(g, Y, ce, _e, V, R);
        }
      }
      I & 1 && S.children !== O.children && u(g, O.children);
    } else !m && N == null && ie(g, j, C, R, V);
    ((A = C.onVnodeUpdated) || H) && dt(() => {
      A && Mt(A, R, O, S), H && Ir(O, S, R, "updated");
    }, x);
  }, W = (S, O, R, x, V, F, m) => {
    for (let g = 0; g < O.length; g++) {
      const I = S[g], N = O[g], H = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        I.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (I.type === vt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Rn(I, N) || // - In the case of a component, it could contain anything.
        I.shapeFlag & 70) ? f(I.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          R
        )
      );
      v(
        I,
        N,
        H,
        null,
        x,
        V,
        F,
        m,
        !0
      );
    }
  }, ie = (S, O, R, x, V) => {
    if (O !== R) {
      if (O !== Te)
        for (const F in O)
          !Vn(F) && !(F in R) && s(
            S,
            F,
            O[F],
            null,
            V,
            x
          );
      for (const F in R) {
        if (Vn(F)) continue;
        const m = R[F], g = O[F];
        m !== g && F !== "value" && s(S, F, g, m, V, x);
      }
      "value" in R && s(S, "value", O.value, R.value, V);
    }
  }, te = (S, O, R, x, V, F, m, g, I) => {
    const N = O.el = S ? S.el : a(""), H = O.anchor = S ? S.anchor : a("");
    let { patchFlag: j, dynamicChildren: C, slotScopeIds: A } = O;
    A && (g = g ? g.concat(A) : A), S == null ? (n(N, R, x), n(H, R, x), q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      R,
      H,
      V,
      F,
      m,
      g,
      I
    )) : j > 0 && j & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    S.dynamicChildren ? (W(
      S.dynamicChildren,
      C,
      R,
      V,
      F,
      m,
      g
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || V && O === V.subTree) && Mf(
      S,
      O,
      !0
      /* shallow */
    )) : re(
      S,
      O,
      R,
      H,
      V,
      F,
      m,
      g,
      I
    );
  }, Z = (S, O, R, x, V, F, m, g, I) => {
    O.slotScopeIds = g, S == null ? O.shapeFlag & 512 ? V.ctx.activate(
      O,
      R,
      x,
      m,
      I
    ) : xe(
      O,
      R,
      x,
      V,
      F,
      m,
      I
    ) : $e(S, O, I);
  }, xe = (S, O, R, x, V, F, m) => {
    const g = S.component = Um(
      S,
      x,
      V
    );
    if (bf(S) && (g.ctx.renderer = G), qm(g, !1, m), g.asyncDep) {
      if (V && V.registerDep(g, ye, m), !S.el) {
        const I = g.subTree = ke(ri);
        p(null, I, O, R);
      }
    } else
      ye(
        g,
        S,
        O,
        R,
        V,
        F,
        m
      );
  }, $e = (S, O, R) => {
    const x = O.component = S.component;
    if (Dm(S, O, R))
      if (x.asyncDep && !x.asyncResolved) {
        se(x, O, R);
        return;
      } else
        x.next = O, x.update();
    else
      O.el = S.el, x.vnode = O;
  }, ye = (S, O, R, x, V, F, m) => {
    const g = () => {
      if (S.isMounted) {
        let { next: j, bu: C, u: A, parent: L, vnode: U } = S;
        {
          const Re = Ff(S);
          if (Re) {
            j && (j.el = U.el, se(S, j, m)), Re.asyncDep.then(() => {
              S.isUnmounted || g();
            });
            return;
          }
        }
        let Y = j, ce;
        Cr(S, !1), j ? (j.el = U.el, se(S, j, m)) : j = U, C && Ts(C), (ce = j.props && j.props.onVnodeBeforeUpdate) && Mt(ce, L, j, U), Cr(S, !0);
        const _e = El(S), Xe = S.subTree;
        S.subTree = _e, v(
          Xe,
          _e,
          // parent may have changed if it's in a teleport
          f(Xe.el),
          // anchor may have changed if it's in a fragment
          M(Xe),
          S,
          V,
          F
        ), j.el = _e.el, Y === null && Pm(S, _e.el), A && dt(A, V), (ce = j.props && j.props.onVnodeUpdated) && dt(
          () => Mt(ce, L, j, U),
          V
        );
      } else {
        let j;
        const { el: C, props: A } = O, { bm: L, m: U, parent: Y, root: ce, type: _e } = S, Xe = Qn(O);
        Cr(S, !1), L && Ts(L), !Xe && (j = A && A.onVnodeBeforeMount) && Mt(j, Y, O), Cr(S, !0);
        {
          ce.ce && ce.ce._injectChildStyle(_e);
          const Re = S.subTree = El(S);
          v(
            null,
            Re,
            R,
            x,
            S,
            V,
            F
          ), O.el = Re.el;
        }
        if (U && dt(U, V), !Xe && (j = A && A.onVnodeMounted)) {
          const Re = O;
          dt(
            () => Mt(j, Y, Re),
            V
          );
        }
        (O.shapeFlag & 256 || Y && Qn(Y.vnode) && Y.vnode.shapeFlag & 256) && S.a && dt(S.a, V), S.isMounted = !0, O = R = x = null;
      }
    };
    S.scope.on();
    const I = S.effect = new Bu(g);
    S.scope.off();
    const N = S.update = I.run.bind(I), H = S.job = I.runIfDirty.bind(I);
    H.i = S, H.id = S.uid, I.scheduler = () => Ea(H), Cr(S, !0), N();
  }, se = (S, O, R) => {
    O.component = S;
    const x = S.vnode.props;
    S.vnode = O, S.next = null, pm(S, O.props, x, R), ym(S, O.children, R), tr(), pl(S), rr();
  }, re = (S, O, R, x, V, F, m, g, I = !1) => {
    const N = S && S.children, H = S ? S.shapeFlag : 0, j = O.children, { patchFlag: C, shapeFlag: A } = O;
    if (C > 0) {
      if (C & 128) {
        Ge(
          N,
          j,
          R,
          x,
          V,
          F,
          m,
          g,
          I
        );
        return;
      } else if (C & 256) {
        oe(
          N,
          j,
          R,
          x,
          V,
          F,
          m,
          g,
          I
        );
        return;
      }
    }
    A & 8 ? (H & 16 && Fe(N, V, F), j !== N && u(R, j)) : H & 16 ? A & 16 ? Ge(
      N,
      j,
      R,
      x,
      V,
      F,
      m,
      g,
      I
    ) : Fe(N, V, F, !0) : (H & 8 && u(R, ""), A & 16 && q(
      j,
      R,
      x,
      V,
      F,
      m,
      g,
      I
    ));
  }, oe = (S, O, R, x, V, F, m, g, I) => {
    S = S || en, O = O || en;
    const N = S.length, H = O.length, j = Math.min(N, H);
    let C;
    for (C = 0; C < j; C++) {
      const A = O[C] = I ? ur(O[C]) : jt(O[C]);
      v(
        S[C],
        A,
        R,
        null,
        V,
        F,
        m,
        g,
        I
      );
    }
    N > H ? Fe(
      S,
      V,
      F,
      !0,
      !1,
      j
    ) : q(
      O,
      R,
      x,
      V,
      F,
      m,
      g,
      I,
      j
    );
  }, Ge = (S, O, R, x, V, F, m, g, I) => {
    let N = 0;
    const H = O.length;
    let j = S.length - 1, C = H - 1;
    for (; N <= j && N <= C; ) {
      const A = S[N], L = O[N] = I ? ur(O[N]) : jt(O[N]);
      if (Rn(A, L))
        v(
          A,
          L,
          R,
          null,
          V,
          F,
          m,
          g,
          I
        );
      else
        break;
      N++;
    }
    for (; N <= j && N <= C; ) {
      const A = S[j], L = O[C] = I ? ur(O[C]) : jt(O[C]);
      if (Rn(A, L))
        v(
          A,
          L,
          R,
          null,
          V,
          F,
          m,
          g,
          I
        );
      else
        break;
      j--, C--;
    }
    if (N > j) {
      if (N <= C) {
        const A = C + 1, L = A < H ? O[A].el : x;
        for (; N <= C; )
          v(
            null,
            O[N] = I ? ur(O[N]) : jt(O[N]),
            R,
            L,
            V,
            F,
            m,
            g,
            I
          ), N++;
      }
    } else if (N > C)
      for (; N <= j; )
        Ee(S[N], V, F, !0), N++;
    else {
      const A = N, L = N, U = /* @__PURE__ */ new Map();
      for (N = L; N <= C; N++) {
        const ht = O[N] = I ? ur(O[N]) : jt(O[N]);
        ht.key != null && U.set(ht.key, N);
      }
      let Y, ce = 0;
      const _e = C - L + 1;
      let Xe = !1, Re = 0;
      const Wt = new Array(_e);
      for (N = 0; N < _e; N++) Wt[N] = 0;
      for (N = A; N <= j; N++) {
        const ht = S[N];
        if (ce >= _e) {
          Ee(ht, V, F, !0);
          continue;
        }
        let xt;
        if (ht.key != null)
          xt = U.get(ht.key);
        else
          for (Y = L; Y <= C; Y++)
            if (Wt[Y - L] === 0 && Rn(ht, O[Y])) {
              xt = Y;
              break;
            }
        xt === void 0 ? Ee(ht, V, F, !0) : (Wt[xt - L] = N + 1, xt >= Re ? Re = xt : Xe = !0, v(
          ht,
          O[xt],
          R,
          null,
          V,
          F,
          m,
          g,
          I
        ), ce++);
      }
      const ll = Xe ? Sm(Wt) : en;
      for (Y = ll.length - 1, N = _e - 1; N >= 0; N--) {
        const ht = L + N, xt = O[ht], cl = ht + 1 < H ? O[ht + 1].el : x;
        Wt[N] === 0 ? v(
          null,
          xt,
          R,
          cl,
          V,
          F,
          m,
          g,
          I
        ) : Xe && (Y < 0 || N !== ll[Y] ? Me(xt, R, cl, 2) : Y--);
      }
    }
  }, Me = (S, O, R, x, V = null) => {
    const { el: F, type: m, transition: g, children: I, shapeFlag: N } = S;
    if (N & 6) {
      Me(S.component.subTree, O, R, x);
      return;
    }
    if (N & 128) {
      S.suspense.move(O, R, x);
      return;
    }
    if (N & 64) {
      m.move(S, O, R, G);
      return;
    }
    if (m === vt) {
      n(F, O, R);
      for (let j = 0; j < I.length; j++)
        Me(I[j], O, R, x);
      n(S.anchor, O, R);
      return;
    }
    if (m === As) {
      _(S, O, R);
      return;
    }
    if (x !== 2 && N & 1 && g)
      if (x === 0)
        g.beforeEnter(F), n(F, O, R), dt(() => g.enter(F), V);
      else {
        const { leave: j, delayLeave: C, afterLeave: A } = g, L = () => n(F, O, R), U = () => {
          j(F, () => {
            L(), A && A();
          });
        };
        C ? C(F, L, U) : U();
      }
    else
      n(F, O, R);
  }, Ee = (S, O, R, x = !1, V = !1) => {
    const {
      type: F,
      props: m,
      ref: g,
      children: I,
      dynamicChildren: N,
      shapeFlag: H,
      patchFlag: j,
      dirs: C,
      cacheIndex: A
    } = S;
    if (j === -2 && (V = !1), g != null && $i(g, null, R, S, !0), A != null && (O.renderCache[A] = void 0), H & 256) {
      O.ctx.deactivate(S);
      return;
    }
    const L = H & 1 && C, U = !Qn(S);
    let Y;
    if (U && (Y = m && m.onVnodeBeforeUnmount) && Mt(Y, O, S), H & 6)
      mt(S.component, R, x);
    else {
      if (H & 128) {
        S.suspense.unmount(R, x);
        return;
      }
      L && Ir(S, null, O, "beforeUnmount"), H & 64 ? S.type.remove(
        S,
        O,
        R,
        G,
        x
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== vt || j > 0 && j & 64) ? Fe(
        N,
        O,
        R,
        !1,
        !0
      ) : (F === vt && j & 384 || !V && H & 16) && Fe(I, O, R), x && ze(S);
    }
    (U && (Y = m && m.onVnodeUnmounted) || L) && dt(() => {
      Y && Mt(Y, O, S), L && Ir(S, null, O, "unmounted");
    }, R);
  }, ze = (S) => {
    const { type: O, el: R, anchor: x, transition: V } = S;
    if (O === vt) {
      We(R, x);
      return;
    }
    if (O === As) {
      b(S);
      return;
    }
    const F = () => {
      i(R), V && !V.persisted && V.afterLeave && V.afterLeave();
    };
    if (S.shapeFlag & 1 && V && !V.persisted) {
      const { leave: m, delayLeave: g } = V, I = () => m(R, F);
      g ? g(S.el, F, I) : I();
    } else
      F();
  }, We = (S, O) => {
    let R;
    for (; S !== O; )
      R = h(S), i(S), S = R;
    i(O);
  }, mt = (S, O, R) => {
    const { bum: x, scope: V, job: F, subTree: m, um: g, m: I, a: N } = S;
    bl(I), bl(N), x && Ts(x), V.stop(), F && (F.flags |= 8, Ee(m, S, O, R)), g && dt(g, O), dt(() => {
      S.isUnmounted = !0;
    }, O), O && O.pendingBranch && !O.isUnmounted && S.asyncDep && !S.asyncResolved && S.suspenseId === O.pendingId && (O.deps--, O.deps === 0 && O.resolve());
  }, Fe = (S, O, R, x = !1, V = !1, F = 0) => {
    for (let m = F; m < S.length; m++)
      Ee(S[m], O, R, x, V);
  }, M = (S) => {
    if (S.shapeFlag & 6)
      return M(S.component.subTree);
    if (S.shapeFlag & 128)
      return S.suspense.next();
    const O = h(S.anchor || S.el), R = O && O[Hp];
    return R ? h(R) : O;
  };
  let Q = !1;
  const $ = (S, O, R) => {
    S == null ? O._vnode && Ee(O._vnode, null, null, !0) : v(
      O._vnode || null,
      S,
      O,
      null,
      null,
      null,
      R
    ), O._vnode = S, Q || (Q = !0, pl(), vf(), Q = !1);
  }, G = {
    p: v,
    um: Ee,
    m: Me,
    r: ze,
    mt: xe,
    mc: q,
    pc: re,
    pbc: W,
    n: M,
    o: e
  };
  return {
    render: $,
    hydrate: void 0,
    createApp: fm($)
  };
}
function Ns({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Cr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Em(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mf(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (J(n) && J(i))
    for (let s = 0; s < n.length; s++) {
      const o = n[s];
      let a = i[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[s] = ur(i[s]), a.el = o.el), !r && a.patchFlag !== -2 && Mf(o, a)), a.type === mi && (a.el = o.el);
    }
}
function Sm(e) {
  const t = e.slice(), r = [0];
  let n, i, s, o, a;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (i = r[r.length - 1], e[i] < c) {
        t[n] = i, r.push(n);
        continue;
      }
      for (s = 0, o = r.length - 1; s < o; )
        a = s + o >> 1, e[r[a]] < c ? s = a + 1 : o = a;
      c < e[r[s]] && (s > 0 && (t[n] = r[s - 1]), r[s] = n);
    }
  }
  for (s = r.length, o = r[s - 1]; s-- > 0; )
    r[s] = o, o = t[o];
  return r;
}
function Ff(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ff(t);
}
function bl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const wm = Symbol.for("v-scx"), Om = () => Et(wm);
function ot(e, t, r) {
  return Vf(e, t, r);
}
function Vf(e, t, r = Te) {
  const { immediate: n, deep: i, flush: s, once: o } = r, a = Be({}, r), l = t && n || !t && s !== "post";
  let c;
  if (ii) {
    if (s === "sync") {
      const d = Om();
      c = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!l) {
      const d = () => {
      };
      return d.stop = Ct, d.resume = Ct, d.pause = Ct, d;
    }
  }
  const u = Qe;
  a.call = (d, E, v) => qt(d, u, E, v);
  let f = !1;
  s === "post" ? a.scheduler = (d) => {
    dt(d, u && u.suspense);
  } : s !== "sync" && (f = !0, a.scheduler = (d, E) => {
    E ? d() : Ea(d);
  }), a.augmentJob = (d) => {
    t && (d.flags |= 4), f && (d.flags |= 2, u && (d.id = u.uid, d.i = u));
  };
  const h = Mp(e, t, a);
  return ii && (c ? c.push(h) : l && h()), h;
}
function Tm(e, t, r) {
  const n = this.proxy, i = Ue(e) ? e.includes(".") ? jf(n, e) : () => n[e] : e.bind(n, n);
  let s;
  ee(t) ? s = t : (s = t.handler, r = t);
  const o = vi(this), a = Vf(i, s.bind(n), r);
  return o(), a;
}
function jf(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Im = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${yt(t)}Modifiers`];
function Cm(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Te;
  let i = r;
  const s = t.startsWith("update:"), o = s && Im(n, t.slice(7));
  o && (o.trim && (i = r.map((u) => Ue(u) ? u.trim() : u)), o.number && (i = r.map(ip)));
  let a, l = n[a = Os(t)] || // also try camelCase event handler (#2249)
  n[a = Os(Rt(t))];
  !l && s && (l = n[a = Os(yt(t))]), l && qt(
    l,
    e,
    6,
    i
  );
  const c = n[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, qt(
      c,
      e,
      6,
      i
    );
  }
}
function Uf(e, t, r = !1) {
  const n = t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let o = {}, a = !1;
  if (!ee(e)) {
    const l = (c) => {
      const u = Uf(c, t, !0);
      u && (a = !0, Be(o, u));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (Pe(e) && n.set(e, null), null) : (J(s) ? s.forEach((l) => o[l] = null) : Be(o, s), Pe(e) && n.set(e, o), o);
}
function as(e, t) {
  return !e || !Ji(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), he(e, t[0].toLowerCase() + t.slice(1)) || he(e, yt(t)) || he(e, t));
}
function El(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [s],
    slots: o,
    attrs: a,
    emit: l,
    render: c,
    renderCache: u,
    props: f,
    data: h,
    setupState: d,
    ctx: E,
    inheritAttrs: v
  } = e, w = qi(e);
  let p, y;
  try {
    if (r.shapeFlag & 4) {
      const b = i || n, T = lr.NODE_ENV !== "production" && d.__isScriptSetup ? new Proxy(b, {
        get(D, P, q) {
          return Fp(
            `Property '${String(
              P
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(D, P, q);
        }
      }) : b;
      p = jt(
        c.call(
          T,
          b,
          u,
          lr.NODE_ENV !== "production" ? wi(f) : f,
          d,
          h,
          E
        )
      ), y = a;
    } else {
      const b = t;
      lr.NODE_ENV, p = jt(
        b.length > 1 ? b(
          lr.NODE_ENV !== "production" ? wi(f) : f,
          lr.NODE_ENV !== "production" ? {
            get attrs() {
              return wi(a);
            },
            slots: o,
            emit: l
          } : { attrs: a, slots: o, emit: l }
        ) : b(
          lr.NODE_ENV !== "production" ? wi(f) : f,
          null
        )
      ), y = t.props ? a : Rm(a);
    }
  } catch (b) {
    Bn.length = 0, ss(b, e, 1), p = ke(ri);
  }
  let _ = p;
  if (y && v !== !1) {
    const b = Object.keys(y), { shapeFlag: T } = _;
    b.length && T & 7 && (s && b.some(la) && (y = km(
      y,
      s
    )), _ = cn(_, y, !1, !0));
  }
  return r.dirs && (_ = cn(_, null, !1, !0), _.dirs = _.dirs ? _.dirs.concat(r.dirs) : r.dirs), r.transition && Sa(_, r.transition), p = _, qi(w), p;
}
const Rm = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Ji(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, km = (e, t) => {
  const r = {};
  for (const n in e)
    (!la(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Dm(e, t, r) {
  const { props: n, children: i, component: s } = e, { props: o, children: a, patchFlag: l } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Sl(n, o, c) : !!o;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (o[h] !== n[h] && !as(c, h))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === o ? !1 : n ? o ? Sl(n, o, c) : !0 : !!o;
  return !1;
}
function Sl(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    if (t[s] !== e[s] && !as(r, s))
      return !0;
  }
  return !1;
}
function Pm({ vnode: e, parent: t }, r) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
}
const qf = (e) => e.__isSuspense;
function Nm(e, t) {
  t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : Qp(e);
}
const vt = Symbol.for("v-fgt"), mi = Symbol.for("v-txt"), ri = Symbol.for("v-cmt"), As = Symbol.for("v-stc"), Bn = [];
let pt = null;
function Ot(e = !1) {
  Bn.push(pt = e ? null : []);
}
function Am() {
  Bn.pop(), pt = Bn[Bn.length - 1] || null;
}
let ni = 1;
function wl(e, t = !1) {
  ni += e, e < 0 && pt && t && (pt.hasOnce = !0);
}
function Lm(e) {
  return e.dynamicChildren = ni > 0 ? pt || en : null, Am(), ni > 0 && pt && pt.push(e), e;
}
function Tt(e, t, r, n, i, s) {
  return Lm(
    Ce(
      e,
      t,
      r,
      n,
      i,
      s,
      !0
    )
  );
}
function Qi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Rn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const $f = ({ key: e }) => e ?? null, Pi = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Ue(e) || qe(e) || ee(e) ? { i: _t, r: e, k: t, f: !!r } : e : null);
function Ce(e, t = null, r = null, n = 0, i = null, s = e === vt ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $f(t),
    ref: t && Pi(t),
    scopeId: yf,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: _t
  };
  return a ? (Ta(l, r), s & 128 && e.normalize(l)) : r && (l.shapeFlag |= Ue(r) ? 8 : 16), ni > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  pt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && pt.push(l), l;
}
const ke = xm;
function xm(e, t = null, r = null, n = 0, i = null, s = !1) {
  if ((!e || e === nm) && (e = ri), Qi(e)) {
    const a = cn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Ta(a, r), ni > 0 && !s && pt && (a.shapeFlag & 6 ? pt[pt.indexOf(e)] = a : pt.push(a)), a.patchFlag = -2, a;
  }
  if (zm(e) && (e = e.__vccOpts), t) {
    t = Mm(t);
    let { class: a, style: l } = t;
    a && !Ue(a) && (t.class = ha(a)), Pe(l) && (ba(l) && !J(l) && (l = Be({}, l)), t.style = fa(l));
  }
  const o = Ue(e) ? 1 : qf(e) ? 128 : Bp(e) ? 64 : Pe(e) ? 4 : ee(e) ? 2 : 0;
  return Ce(
    e,
    t,
    r,
    n,
    i,
    o,
    s,
    !0
  );
}
function Mm(e) {
  return e ? ba(e) || kf(e) ? Be({}, e) : e : null;
}
function cn(e, t, r = !1, n = !1) {
  const { props: i, ref: s, patchFlag: o, children: a, transition: l } = e, c = t ? Fm(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && $f(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && s ? J(s) ? s.concat(Pi(t)) : [s, Pi(t)] : Pi(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== vt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && cn(e.ssContent),
    ssFallback: e.ssFallback && cn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Sa(
    u,
    l.clone(u)
  ), u;
}
function go(e = " ", t = 0) {
  return ke(mi, null, e, t);
}
function jt(e) {
  return e == null || typeof e == "boolean" ? ke(ri) : J(e) ? ke(
    vt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qi(e) ? ur(e) : ke(mi, null, String(e));
}
function ur(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : cn(e);
}
function Ta(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (J(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ta(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !kf(t) ? t._ctx = _t : i === 3 && _t && (_t.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ee(t) ? (t = { default: t, _ctx: _t }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [go(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Fm(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = ha([t.class, n.class]));
      else if (i === "style")
        t.style = fa([t.style, n.style]);
      else if (Ji(i)) {
        const s = t[i], o = n[i];
        o && s !== o && !(J(s) && s.includes(o)) && (t[i] = s ? [].concat(s, o) : o);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Mt(e, t, r, n = null) {
  qt(e, t, 7, [
    r,
    n
  ]);
}
const Vm = If();
let jm = 0;
function Um(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Vm, s = {
    uid: jm++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Qu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Pf(n, i),
    emitsOptions: Uf(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Te,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Te,
    data: Te,
    props: Te,
    attrs: Te,
    slots: Te,
    refs: Te,
    setupState: Te,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Cm.bind(null, s), e.ce && e.ce(s), s;
}
let Qe = null;
const un = () => Qe || _t;
let Hi, yo;
{
  const e = rs(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  Hi = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => Qe = r
  ), yo = t(
    "__VUE_SSR_SETTERS__",
    (r) => ii = r
  );
}
const vi = (e) => {
  const t = Qe;
  return Hi(e), e.scope.on(), () => {
    e.scope.off(), Hi(t);
  };
}, Ol = () => {
  Qe && Qe.scope.off(), Hi(null);
};
function Wf(e) {
  return e.vnode.shapeFlag & 4;
}
let ii = !1;
function qm(e, t = !1, r = !1) {
  t && yo(t);
  const { props: n, children: i } = e.vnode, s = Wf(e);
  dm(e, n, s, t), gm(e, i, r);
  const o = s ? $m(e, t) : void 0;
  return t && yo(!1), o;
}
function $m(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, im);
  const { setup: n } = r;
  if (n) {
    tr();
    const i = e.setupContext = n.length > 1 ? Qm(e) : null, s = vi(e), o = En(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = Fu(o);
    if (rr(), s(), (a || e.sp) && !Qn(e) && _f(e), a) {
      if (o.then(Ol, Ol), t)
        return o.then((l) => {
          Tl(e, l);
        }).catch((l) => {
          ss(l, e, 0);
        });
      e.asyncDep = o;
    } else
      Tl(e, o);
  } else
    Qf(e);
}
function Tl(e, t, r) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Pe(t) && (e.setupState = hf(t)), Qf(e);
}
function Qf(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Ct);
  {
    const i = vi(e);
    tr();
    try {
      sm(e);
    } finally {
      rr(), i();
    }
  }
}
const Wm = {
  get(e, t) {
    return Ze(e, "get", ""), e[t];
  }
};
function Qm(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Wm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ia(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hf(Dp(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Hn)
        return Hn[r](e);
    },
    has(t, r) {
      return r in t || r in Hn;
    }
  })) : e.proxy;
}
const Hm = /(?:^|[-_])(\w)/g, Bm = (e) => e.replace(Hm, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Gm(e, t = !0) {
  return ee(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Hf(e, t, r = !1) {
  let n = Gm(t);
  if (!n && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (n = i[1]);
  }
  if (!n && e && e.parent) {
    const i = (s) => {
      for (const o in s)
        if (s[o] === t)
          return o;
    };
    n = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return n ? Bm(n) : r ? "App" : "Anonymous";
}
function zm(e) {
  return ee(e) && "__vccOpts" in e;
}
const Ve = (e, t) => Lp(e, t, ii);
function ls(e, t, r) {
  const n = arguments.length;
  return n === 2 ? Pe(t) && !J(t) ? Qi(t) ? ke(e, null, [t]) : ke(e, t) : ke(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Qi(r) && (r = [r]), ke(e, t, r));
}
const Km = "3.5.13";
let _o;
const Il = typeof window < "u" && window.trustedTypes;
if (Il)
  try {
    _o = /* @__PURE__ */ Il.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Bf = _o ? (e) => _o.createHTML(e) : (e) => e, Ym = "http://www.w3.org/2000/svg", Xm = "http://www.w3.org/1998/Math/MathML", Gt = typeof document < "u" ? document : null, Cl = Gt && /* @__PURE__ */ Gt.createElement("template"), Jm = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Gt.createElementNS(Ym, e) : t === "mathml" ? Gt.createElementNS(Xm, e) : r ? Gt.createElement(e, { is: r }) : Gt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Gt.createTextNode(e),
  createComment: (e) => Gt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Gt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, s) {
    const o = r ? r.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Cl.innerHTML = Bf(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Cl.content;
      if (n === "svg" || n === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, r);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Zm = Symbol("_vtc");
function ev(e, t, r) {
  const n = e[Zm];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Rl = Symbol("_vod"), tv = Symbol("_vsh"), rv = Symbol(""), nv = /(^|;)\s*display\s*:/;
function iv(e, t, r) {
  const n = e.style, i = Ue(r);
  let s = !1;
  if (r && !i) {
    if (t)
      if (Ue(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          r[a] == null && Ni(n, a, "");
        }
      else
        for (const o in t)
          r[o] == null && Ni(n, o, "");
    for (const o in r)
      o === "display" && (s = !0), Ni(n, o, r[o]);
  } else if (i) {
    if (t !== r) {
      const o = n[rv];
      o && (r += ";" + o), n.cssText = r, s = nv.test(r);
    }
  } else t && e.removeAttribute("style");
  Rl in e && (e[Rl] = s ? n.display : "", e[tv] && (n.display = "none"));
}
const kl = /\s*!important$/;
function Ni(e, t, r) {
  if (J(r))
    r.forEach((n) => Ni(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = sv(e, t);
    kl.test(r) ? e.setProperty(
      yt(n),
      r.replace(kl, ""),
      "important"
    ) : e[n] = r;
  }
}
const Dl = ["Webkit", "Moz", "ms"], Ls = {};
function sv(e, t) {
  const r = Ls[t];
  if (r)
    return r;
  let n = Rt(t);
  if (n !== "filter" && n in e)
    return Ls[t] = n;
  n = ju(n);
  for (let i = 0; i < Dl.length; i++) {
    const s = Dl[i] + n;
    if (s in e)
      return Ls[t] = s;
  }
  return t;
}
const Pl = "http://www.w3.org/1999/xlink";
function Nl(e, t, r, n, i, s = up(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Pl, t.slice(6, t.length)) : e.setAttributeNS(Pl, t, r) : r == null || s && !qu(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Sr(r) ? String(r) : r
  );
}
function Al(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Bf(r) : r);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const a = s === "OPTION" ? e.getAttribute("value") || "" : e.value, l = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (a !== l || !("_value" in e)) && (e.value = l), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let o = !1;
  if (r === "" || r == null) {
    const a = typeof e[t];
    a === "boolean" ? r = qu(r) : r == null && a === "string" ? (r = "", o = !0) : a === "number" && (r = 0, o = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function ov(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function av(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Ll = Symbol("_vei");
function lv(e, t, r, n, i = null) {
  const s = e[Ll] || (e[Ll] = {}), o = s[t];
  if (n && o)
    o.value = n;
  else {
    const [a, l] = cv(t);
    if (n) {
      const c = s[t] = hv(
        n,
        i
      );
      ov(e, a, c, l);
    } else o && (av(e, a, o, l), s[t] = void 0);
  }
}
const xl = /(?:Once|Passive|Capture)$/;
function cv(e) {
  let t;
  if (xl.test(e)) {
    t = {};
    let n;
    for (; n = e.match(xl); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : yt(e.slice(2)), t];
}
let xs = 0;
const uv = /* @__PURE__ */ Promise.resolve(), fv = () => xs || (uv.then(() => xs = 0), xs = Date.now());
function hv(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    qt(
      dv(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = fv(), r;
}
function dv(e, t) {
  if (J(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const Ml = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pv = (e, t, r, n, i, s) => {
  const o = i === "svg";
  t === "class" ? ev(e, n, o) : t === "style" ? iv(e, r, n) : Ji(t) ? la(t) || lv(e, t, r, n, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mv(e, t, n, o)) ? (Al(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Nl(e, t, n, o, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ue(n)) ? Al(e, Rt(t), n, s, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Nl(e, t, n, o));
};
function mv(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ml(t) && ee(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ml(t) && Ue(r) ? !1 : t in e;
}
const Fl = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gi(e, t, r) {
  const n = /* @__PURE__ */ Sn(e, t);
  es(n) && Be(n, t);
  class i extends Ca {
    constructor(o) {
      super(n, o, r);
    }
  }
  return i.def = n, i;
}
const vv = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ca extends vv {
  constructor(t, r = {}, n = jl) {
    super(), this._def = t, this._props = r, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && n !== jl ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this, this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Ca) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, Pr(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver((n) => {
      for (const i of n)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: s, styles: o } = n;
      let a;
      if (s && !J(s))
        for (const l in s) {
          const c = s[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = ul(this._props[l])), (a || (a = /* @__PURE__ */ Object.create(null)))[Rt(l)] = !0);
        }
      this._numberProps = a, i && this._resolveProps(n), this.shadowRoot && this._applyStyles(o), this._mount(n);
    }, r = this._def.__asyncLoader;
    r ? this._pendingResolve = r().then(
      (n) => t(this._def = n, !0)
    ) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const r = this._instance && this._instance.exposed;
    if (r)
      for (const n in r)
        he(this, n) || Object.defineProperty(this, n, {
          // unwrap ref to be consistent with public instance behavior
          get: () => bt(r[n])
        });
  }
  _resolveProps(t) {
    const { props: r } = t, n = J(r) ? r : Object.keys(r || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && n.includes(i) && this._setProp(i, this[i]);
    for (const i of n.map(Rt))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(s) {
          this._setProp(i, s, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const r = this.hasAttribute(t);
    let n = r ? this.getAttribute(t) : Fl;
    const i = Rt(t);
    r && this._numberProps && this._numberProps[i] && (n = ul(n)), this._setProp(i, n, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, r, n = !0, i = !1) {
    if (r !== this._props[t] && (r === Fl ? delete this._props[t] : (this._props[t] = r, t === "key" && this._app && (this._app._ceVNode.key = r)), i && this._instance && this._update(), n)) {
      const s = this._ob;
      s && s.disconnect(), r === !0 ? this.setAttribute(yt(t), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(yt(t), r + "") : r || this.removeAttribute(yt(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    yv(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const r = ke(this._def, Be(t, this._props));
    return this._instance || (r.ce = (n) => {
      this._instance = n, n.ce = this, n.isCE = !0;
      const i = (s, o) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            es(o[0]) ? Be({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      n.emit = (s, ...o) => {
        i(s, o), yt(s) !== s && i(yt(s), o);
      }, this._setParent();
    }), r;
  }
  _applyStyles(t, r) {
    if (!t) return;
    if (r) {
      if (r === this._def || this._styleChildren.has(r))
        return;
      this._styleChildren.add(r);
    }
    const n = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const s = document.createElement("style");
      n && s.setAttribute("nonce", n), s.textContent = t[i], this.shadowRoot.prepend(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let r;
    for (; r = this.firstChild; ) {
      const n = r.nodeType === 1 && r.getAttribute("slot") || "default";
      (t[n] || (t[n] = [])).push(r), this.removeChild(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), r = this._instance.type.__scopeId;
    for (let n = 0; n < t.length; n++) {
      const i = t[n], s = i.getAttribute("name") || "default", o = this._slots[s], a = i.parentNode;
      if (o)
        for (const l of o) {
          if (r && l.nodeType === 1) {
            const c = r + "-s", u = document.createTreeWalker(l, 1);
            l.setAttribute(c, "");
            let f;
            for (; f = u.nextNode(); )
              f.setAttribute(c, "");
          }
          a.insertBefore(l, i);
        }
      else
        for (; i.firstChild; ) a.insertBefore(i.firstChild, i);
      a.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const gv = /* @__PURE__ */ Be({ patchProp: pv }, Jm);
let Vl;
function Gf() {
  return Vl || (Vl = _m(gv));
}
const yv = (...e) => {
  Gf().render(...e);
}, jl = (...e) => {
  const t = Gf().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = bv(n);
    if (!i) return;
    const s = t._component;
    !ee(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = r(i, !1, _v(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
};
function _v(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bv(e) {
  return Ue(e) ? document.querySelector(e) : e;
}
const Vr = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Ev = {
  name: "ChangeLanguage",
  methods: {
    changeLanguage(e) {
      this.$i18n.locale = e;
    }
  }
};
function Sv(e, t, r, n, i, s) {
  return Ot(), Tt("div", null, [
    t[3] || (t[3] = Ce("h1", null, "Change Language", -1)),
    Ce("button", {
      onClick: t[0] || (t[0] = (o) => s.changeLanguage("en"))
    }, "English"),
    Ce("button", {
      onClick: t[1] || (t[1] = (o) => s.changeLanguage("de"))
    }, "German"),
    Ce("button", {
      onClick: t[2] || (t[2] = (o) => s.changeLanguage("es"))
    }, "Spanish")
  ]);
}
const zf = /* @__PURE__ */ Vr(Ev, [["render", Sv]]);
function Kf(e, t, r) {
  var n = r || {}, i = n.noTrailing, s = i === void 0 ? !1 : i, o = n.noLeading, a = o === void 0 ? !1 : o, l = n.debounceMode, c = l === void 0 ? void 0 : l, u, f = !1, h = 0;
  function d() {
    u && clearTimeout(u);
  }
  function E(w) {
    var p = w || {}, y = p.upcomingOnly, _ = y === void 0 ? !1 : y;
    d(), f = !_;
  }
  function v() {
    for (var w = arguments.length, p = new Array(w), y = 0; y < w; y++)
      p[y] = arguments[y];
    var _ = this, b = Date.now() - h;
    if (f)
      return;
    function T() {
      h = Date.now(), t.apply(_, p);
    }
    function D() {
      u = void 0;
    }
    !a && c && !u && T(), d(), c === void 0 && b > e ? a ? (h = Date.now(), s || (u = setTimeout(c ? D : T, e))) : T() : s !== !0 && (u = setTimeout(c ? D : T, c === void 0 ? e - b : e));
  }
  return v.cancel = E, v;
}
function wv(e, t, r) {
  var n = {}, i = n.atBegin, s = i === void 0 ? !1 : i;
  return Kf(e, t, {
    debounceMode: s !== !1
  });
}
var bo = function(e, t) {
  return bo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, bo(e, t);
};
function At(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  bo(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var k = function() {
  return k = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, k.apply(this, arguments);
};
function Jt(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function fr(e, t, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (f) {
        o(f);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (f) {
        o(f);
      }
    }
    function c(u) {
      u.done ? s(u.value) : i(u.value).then(a, l);
    }
    c((n = n.apply(e, t || [])).next());
  });
}
function hr(e, t) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = a(0), o.throw = a(1), o.return = a(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (r = 0)), r; ) try {
      if (n = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done) return s;
      switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
        case 0:
        case 1:
          s = c;
          break;
        case 4:
          return r.label++, { value: c[1], done: !1 };
        case 5:
          r.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            r = 0;
            continue;
          }
          if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
            r.label = c[1];
            break;
          }
          if (c[0] === 6 && r.label < s[1]) {
            r.label = s[1], s = c;
            break;
          }
          if (s && r.label < s[2]) {
            r.label = s[2], r.ops.push(c);
            break;
          }
          s[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      c = t.call(e, r);
    } catch (u) {
      c = [6, u], i = 0;
    } finally {
      n = s = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function et(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, s; n < i; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Ms = "Invariant Violation", Ul = Object.setPrototypeOf, Ov = Ul === void 0 ? function(e, t) {
  return e.__proto__ = t, e;
} : Ul, Yf = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r) {
      r === void 0 && (r = Ms);
      var n = e.call(this, typeof r == "number" ? Ms + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = Ms, Ov(n, t.prototype), n;
    }
    return t;
  }(Error)
);
function Dr(e, t) {
  if (!e)
    throw new Yf(t);
}
var Xf = ["debug", "log", "warn", "error", "silent"], Tv = Xf.indexOf("log");
function Ti(e) {
  return function() {
    if (Xf.indexOf(e) >= Tv) {
      var t = console[e] || console.log;
      return t.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = Ti("debug"), e.log = Ti("log"), e.warn = Ti("warn"), e.error = Ti("error");
})(Dr || (Dr = {}));
var Ra = "3.13.5";
function wt(e) {
  try {
    return e();
  } catch {
  }
}
const Eo = wt(function() {
  return globalThis;
}) || wt(function() {
  return window;
}) || wt(function() {
  return self;
}) || wt(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
wt(function() {
  return wt.constructor("return this")();
});
var ql = /* @__PURE__ */ new Map();
function So(e) {
  var t = ql.get(e) || 1;
  return ql.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2));
}
function Jf(e, t) {
  t === void 0 && (t = 0);
  var r = So("stringifyForDisplay");
  return JSON.stringify(e, function(n, i) {
    return i === void 0 ? r : i;
  }, t).split(JSON.stringify(r)).join("<undefined>");
}
function Ii(e) {
  return function(t) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (typeof t == "number") {
      var i = t;
      t = ka(i), t || (t = Da(i, r), r = []);
    }
    e.apply(void 0, [t].concat(r));
  };
}
var X = Object.assign(function(t, r) {
  for (var n = [], i = 2; i < arguments.length; i++)
    n[i - 2] = arguments[i];
  t || Dr(t, ka(r, n) || Da(r, n));
}, {
  debug: Ii(Dr.debug),
  log: Ii(Dr.log),
  warn: Ii(Dr.warn),
  error: Ii(Dr.error)
});
function at(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return new Yf(ka(e, t) || Da(e, t));
}
var $l = Symbol.for("ApolloErrorMessageHandler_" + Ra);
function Zf(e) {
  if (typeof e == "string")
    return e;
  try {
    return Jf(e, 2).slice(0, 1e3);
  } catch {
    return "<non-serializable>";
  }
}
function ka(e, t) {
  if (t === void 0 && (t = []), !!e)
    return Eo[$l] && Eo[$l](e, t.map(Zf));
}
function Da(e, t) {
  if (t === void 0 && (t = []), !!e)
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: Ra,
      message: e,
      args: t.map(Zf)
    })));
}
function Iv(e, t) {
  if (!!!e)
    throw new Error(t);
}
const eh = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, Cv = new Set(Object.keys(eh));
function Wl(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && Cv.has(t);
}
var Ql;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(Ql || (Ql = {}));
var Ie;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(Ie || (Ie = {}));
function Hl(e) {
  return e === 9 || e === 32;
}
function Rv(e, t) {
  const r = e.replace(/"""/g, '\\"""'), n = r.split(/\r\n|[\n\r]/g), i = n.length === 1, s = n.length > 1 && n.slice(1).every((d) => d.length === 0 || Hl(d.charCodeAt(0))), o = r.endsWith('\\"""'), a = e.endsWith('"') && !o, l = e.endsWith("\\"), c = a || l, u = (
    // add leading and trailing new lines only if it improves readability
    !i || e.length > 70 || c || s || o
  );
  let f = "";
  const h = i && Hl(e.charCodeAt(0));
  return (u && !h || s) && (f += `
`), f += r, (u || c) && (f += `
`), '"""' + f + '"""';
}
const kv = 10, th = 2;
function Dv(e) {
  return cs(e, []);
}
function cs(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return Pv(e, t);
    default:
      return String(e);
  }
}
function Pv(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const r = [...t, e];
  if (Nv(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : cs(n, r);
  } else if (Array.isArray(e))
    return Lv(e, r);
  return Av(e, r);
}
function Nv(e) {
  return typeof e.toJSON == "function";
}
function Av(e, t) {
  const r = Object.entries(e);
  return r.length === 0 ? "{}" : t.length > th ? "[" + xv(e) + "]" : "{ " + r.map(
    ([i, s]) => i + ": " + cs(s, t)
  ).join(", ") + " }";
}
function Lv(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > th)
    return "[Array]";
  const r = Math.min(kv, e.length), n = e.length - r, i = [];
  for (let s = 0; s < r; ++s)
    i.push(cs(e[s], t));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push(`... ${n} more items`), "[" + i.join(", ") + "]";
}
function xv(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const r = e.constructor.name;
    if (typeof r == "string" && r !== "")
      return r;
  }
  return t;
}
function Mv(e) {
  return `"${e.replace(Fv, Vv)}"`;
}
const Fv = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Vv(e) {
  return jv[e.charCodeAt(0)];
}
const jv = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
], us = Object.freeze({});
function Pt(e, t, r = eh) {
  const n = /* @__PURE__ */ new Map();
  for (const p of Object.values(Ie))
    n.set(p, Uv(t, p));
  let i, s = Array.isArray(e), o = [e], a = -1, l = [], c = e, u, f;
  const h = [], d = [];
  do {
    a++;
    const p = a === o.length, y = p && l.length !== 0;
    if (p) {
      if (u = d.length === 0 ? void 0 : h[h.length - 1], c = f, f = d.pop(), y)
        if (s) {
          c = c.slice();
          let b = 0;
          for (const [T, D] of l) {
            const P = T - b;
            D === null ? (c.splice(P, 1), b++) : c[P] = D;
          }
        } else {
          c = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(c)
          );
          for (const [b, T] of l)
            c[b] = T;
        }
      a = i.index, o = i.keys, l = i.edits, s = i.inArray, i = i.prev;
    } else if (f) {
      if (u = s ? a : o[a], c = f[u], c == null)
        continue;
      h.push(u);
    }
    let _;
    if (!Array.isArray(c)) {
      var E, v;
      Wl(c) || Iv(!1, `Invalid AST Node: ${Dv(c)}.`);
      const b = p ? (E = n.get(c.kind)) === null || E === void 0 ? void 0 : E.leave : (v = n.get(c.kind)) === null || v === void 0 ? void 0 : v.enter;
      if (_ = b == null ? void 0 : b.call(t, c, u, f, h, d), _ === us)
        break;
      if (_ === !1) {
        if (!p) {
          h.pop();
          continue;
        }
      } else if (_ !== void 0 && (l.push([u, _]), !p))
        if (Wl(_))
          c = _;
        else {
          h.pop();
          continue;
        }
    }
    if (_ === void 0 && y && l.push([u, c]), p)
      h.pop();
    else {
      var w;
      i = {
        inArray: s,
        index: a,
        keys: o,
        edits: l,
        prev: i
      }, s = Array.isArray(c), o = s ? c : (w = r[c.kind]) !== null && w !== void 0 ? w : [], a = -1, l = [], f && d.push(f), f = c;
    }
  } while (i !== void 0);
  return l.length !== 0 ? l[l.length - 1][1] : e;
}
function Uv(e, t) {
  const r = e[t];
  return typeof r == "object" ? r : typeof r == "function" ? {
    enter: r,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function qv(e) {
  return Pt(e, Wv);
}
const $v = 80, Wv = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => K(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const t = ae("(", K(e.variableDefinitions, ", "), ")"), r = K(
        [
          e.operation,
          K([e.name, t]),
          K(e.directives, " ")
        ],
        " "
      );
      return (r === "query" ? "" : r + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: t, defaultValue: r, directives: n }) => e + ": " + t + ae(" = ", r) + ae(" ", K(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => St(e)
  },
  Field: {
    leave({ alias: e, name: t, arguments: r, directives: n, selectionSet: i }) {
      const s = ae("", e, ": ") + t;
      let o = s + ae("(", K(r, ", "), ")");
      return o.length > $v && (o = s + ae(`(
`, Ai(K(r, `
`)), `
)`)), K([o, K(n, " "), i], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: t }) => "..." + e + ae(" ", K(t, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: t, selectionSet: r }) => K(
      [
        "...",
        ae("on ", e),
        K(t, " "),
        r
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: t, variableDefinitions: r, directives: n, selectionSet: i }) => (
      // or removed in the future.
      `fragment ${e}${ae("(", K(r, ", "), ")")} on ${t} ${ae("", K(n, " "), " ")}` + i
    )
  },
  // Value
  IntValue: {
    leave: ({ value: e }) => e
  },
  FloatValue: {
    leave: ({ value: e }) => e
  },
  StringValue: {
    leave: ({ value: e, block: t }) => t ? Rv(e) : Mv(e)
  },
  BooleanValue: {
    leave: ({ value: e }) => e ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: e }) => e
  },
  ListValue: {
    leave: ({ values: e }) => "[" + K(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + K(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: t }) => e + ": " + t
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: t }) => "@" + e + ae("(", K(t, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: e }) => e
  },
  ListType: {
    leave: ({ type: e }) => "[" + e + "]"
  },
  NonNullType: {
    leave: ({ type: e }) => e + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: e, directives: t, operationTypes: r }) => ae("", e, `
`) + K(["schema", K(t, " "), St(r)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: t }) => e + ": " + t
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: t, directives: r }) => ae("", e, `
`) + K(["scalar", t, K(r, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => ae("", e, `
`) + K(
      [
        "type",
        t,
        ae("implements ", K(r, " & ")),
        K(n, " "),
        St(i)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: t, arguments: r, type: n, directives: i }) => ae("", e, `
`) + t + (Bl(r) ? ae(`(
`, Ai(K(r, `
`)), `
)`) : ae("(", K(r, ", "), ")")) + ": " + n + ae(" ", K(i, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: t, type: r, defaultValue: n, directives: i }) => ae("", e, `
`) + K(
      [t + ": " + r, ae("= ", n), K(i, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: t, interfaces: r, directives: n, fields: i }) => ae("", e, `
`) + K(
      [
        "interface",
        t,
        ae("implements ", K(r, " & ")),
        K(n, " "),
        St(i)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, types: n }) => ae("", e, `
`) + K(
      ["union", t, K(r, " "), ae("= ", K(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, values: n }) => ae("", e, `
`) + K(["enum", t, K(r, " "), St(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: t, directives: r }) => ae("", e, `
`) + K([t, K(r, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: t, directives: r, fields: n }) => ae("", e, `
`) + K(["input", t, K(r, " "), St(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: t, arguments: r, repeatable: n, locations: i }) => ae("", e, `
`) + "directive @" + t + (Bl(r) ? ae(`(
`, Ai(K(r, `
`)), `
)`) : ae("(", K(r, ", "), ")")) + (n ? " repeatable" : "") + " on " + K(i, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: t }) => K(
      ["extend schema", K(e, " "), St(t)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: t }) => K(["extend scalar", e, K(t, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => K(
      [
        "extend type",
        e,
        ae("implements ", K(t, " & ")),
        K(r, " "),
        St(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: t, directives: r, fields: n }) => K(
      [
        "extend interface",
        e,
        ae("implements ", K(t, " & ")),
        K(r, " "),
        St(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: t, types: r }) => K(
      [
        "extend union",
        e,
        K(t, " "),
        ae("= ", K(r, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: t, values: r }) => K(["extend enum", e, K(t, " "), St(r)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: t, fields: r }) => K(["extend input", e, K(t, " "), St(r)], " ")
  }
};
function K(e, t = "") {
  var r;
  return (r = e == null ? void 0 : e.filter((n) => n).join(t)) !== null && r !== void 0 ? r : "";
}
function St(e) {
  return ae(`{
`, Ai(K(e, `
`)), `
}`);
}
function ae(e, t, r = "") {
  return t != null && t !== "" ? e + t + r : "";
}
function Ai(e) {
  return ae("  ", e.replace(/\n/g, `
  `));
}
function Bl(e) {
  var t;
  return (t = e == null ? void 0 : e.some((r) => r.includes(`
`))) !== null && t !== void 0 ? t : !1;
}
function Gl(e) {
  return e.kind === Ie.FIELD || e.kind === Ie.FRAGMENT_SPREAD || e.kind === Ie.INLINE_FRAGMENT;
}
function yi(e, t) {
  var r = e.directives;
  return !r || !r.length ? !0 : Bv(r).every(function(n) {
    var i = n.directive, s = n.ifArgument, o = !1;
    return s.value.kind === "Variable" ? (o = t && t[s.value.name.value], X(o !== void 0, 78, i.name.value)) : o = s.value.value, i.name.value === "skip" ? !o : o;
  });
}
function si(e, t, r) {
  var n = new Set(e), i = n.size;
  return Pt(t, {
    Directive: function(s) {
      if (n.delete(s.name.value) && (!r || !n.size))
        return us;
    }
  }), r ? !n.size : n.size < i;
}
function Qv(e) {
  return e && si(["client", "export"], e, !0);
}
function Hv(e) {
  var t = e.name.value;
  return t === "skip" || t === "include";
}
function Bv(e) {
  var t = [];
  return e && e.length && e.forEach(function(r) {
    if (Hv(r)) {
      var n = r.arguments, i = r.name.value;
      X(n && n.length === 1, 79, i);
      var s = n[0];
      X(s.name && s.name.value === "if", 80, i);
      var o = s.value;
      X(o && (o.kind === "Variable" || o.kind === "BooleanValue"), 81, i), t.push({ directive: r, ifArgument: s });
    }
  }), t;
}
function Gv(e) {
  var t, r, n = (t = e.directives) === null || t === void 0 ? void 0 : t.find(function(s) {
    var o = s.name;
    return o.value === "unmask";
  });
  if (!n)
    return "mask";
  var i = (r = n.arguments) === null || r === void 0 ? void 0 : r.find(function(s) {
    var o = s.name;
    return o.value === "mode";
  });
  return globalThis.__DEV__ !== !1 && i && (i.value.kind === Ie.VARIABLE ? globalThis.__DEV__ !== !1 && X.warn(82) : i.value.kind !== Ie.STRING ? globalThis.__DEV__ !== !1 && X.warn(83) : i.value.value !== "migrate" && globalThis.__DEV__ !== !1 && X.warn(84, i.value.value)), i && "value" in i.value && i.value.value === "migrate" ? "migrate" : "unmask";
}
const zv = () => /* @__PURE__ */ Object.create(null), { forEach: Kv, slice: zl } = Array.prototype, { hasOwnProperty: Yv } = Object.prototype;
class ir {
  constructor(t = !0, r = zv) {
    this.weakness = t, this.makeData = r;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(t) {
    let r = this;
    return Kv.call(t, (n) => r = r.getChildTrie(n)), Yv.call(r, "data") ? r.data : r.data = this.makeData(zl.call(t));
  }
  peek() {
    return this.peekArray(arguments);
  }
  peekArray(t) {
    let r = this;
    for (let n = 0, i = t.length; r && n < i; ++n) {
      const s = r.mapFor(t[n], !1);
      r = s && s.get(t[n]);
    }
    return r && r.data;
  }
  remove() {
    return this.removeArray(arguments);
  }
  removeArray(t) {
    let r;
    if (t.length) {
      const n = t[0], i = this.mapFor(n, !1), s = i && i.get(n);
      s && (r = s.removeArray(zl.call(t, 1)), !s.data && !s.weak && !(s.strong && s.strong.size) && i.delete(n));
    } else
      r = this.data, delete this.data;
    return r;
  }
  getChildTrie(t) {
    const r = this.mapFor(t, !0);
    let n = r.get(t);
    return n || r.set(t, n = new ir(this.weakness, this.makeData)), n;
  }
  mapFor(t, r) {
    return this.weakness && Xv(t) ? this.weak || (r ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (r ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
}
function Xv(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    // Fall through to return true...
    case "function":
      return !0;
  }
  return !1;
}
var Jv = wt(function() {
  return navigator.product;
}) == "ReactNative", jr = typeof WeakMap == "function" && !(Jv && !global.HermesInternal), Pa = typeof WeakSet == "function", rh = typeof Symbol == "function" && typeof Symbol.for == "function", fs = rh && Symbol.asyncIterator;
wt(function() {
  return window.document.createElement;
});
wt(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function Ne(e) {
  return e !== null && typeof e == "object";
}
function Zv(e, t) {
  var r = t, n = [];
  e.definitions.forEach(function(s) {
    if (s.kind === "OperationDefinition")
      throw at(
        85,
        s.operation,
        s.name ? " named '".concat(s.name.value, "'") : ""
      );
    s.kind === "FragmentDefinition" && n.push(s);
  }), typeof r > "u" && (X(n.length === 1, 86, n.length), r = n[0].name.value);
  var i = k(k({}, e), { definitions: et([
    {
      kind: "OperationDefinition",
      // OperationTypeNode is an enum
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: r
            }
          }
        ]
      }
    }
  ], e.definitions, !0) });
  return i;
}
function wn(e) {
  e === void 0 && (e = []);
  var t = {};
  return e.forEach(function(r) {
    t[r.name.value] = r;
  }), t;
}
function hs(e, t) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var r = e.name.value;
      if (typeof t == "function")
        return t(r);
      var n = t && t[r];
      return X(n, 87, r), n || null;
    }
    default:
      return null;
  }
}
function eg(e) {
  var t = !0;
  return Pt(e, {
    FragmentSpread: function(r) {
      if (t = !!r.directives && r.directives.some(function(n) {
        return n.name.value === "unmask";
      }), !t)
        return us;
    }
  }), t;
}
function tg() {
}
class wo {
  constructor(t = 1 / 0, r = tg) {
    this.max = t, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
  }
  has(t) {
    return this.map.has(t);
  }
  get(t) {
    const r = this.getNode(t);
    return r && r.value;
  }
  get size() {
    return this.map.size;
  }
  getNode(t) {
    const r = this.map.get(t);
    if (r && r !== this.newest) {
      const { older: n, newer: i } = r;
      i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
    }
    return r;
  }
  set(t, r) {
    let n = this.getNode(t);
    return n ? n.value = r : (n = {
      key: t,
      value: r,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(t, n), n.value);
  }
  clean() {
    for (; this.oldest && this.map.size > this.max; )
      this.delete(this.oldest.key);
  }
  delete(t) {
    const r = this.map.get(t);
    return r ? (r === this.newest && (this.newest = r.older), r === this.oldest && (this.oldest = r.newer), r.newer && (r.newer.older = r.older), r.older && (r.older.newer = r.newer), this.map.delete(t), this.dispose(r.value, t), !0) : !1;
  }
}
function Oo() {
}
const rg = Oo, ng = typeof WeakRef < "u" ? WeakRef : function(e) {
  return { deref: () => e };
}, ig = typeof WeakMap < "u" ? WeakMap : Map, sg = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
  return {
    register: Oo,
    unregister: Oo
  };
}, og = 10024;
class Bi {
  constructor(t = 1 / 0, r = rg) {
    this.max = t, this.dispose = r, this.map = new ig(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
      const n = this.unfinalizedNodes.values();
      for (let i = 0; i < og; i++) {
        const s = n.next().value;
        if (!s)
          break;
        this.unfinalizedNodes.delete(s);
        const o = s.key;
        delete s.key, s.keyRef = new ng(o), this.registry.register(o, s, s);
      }
      this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
    }, this.registry = new sg(this.deleteNode.bind(this));
  }
  has(t) {
    return this.map.has(t);
  }
  get(t) {
    const r = this.getNode(t);
    return r && r.value;
  }
  getNode(t) {
    const r = this.map.get(t);
    if (r && r !== this.newest) {
      const { older: n, newer: i } = r;
      i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
    }
    return r;
  }
  set(t, r) {
    let n = this.getNode(t);
    return n ? n.value = r : (n = {
      key: t,
      value: r,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.scheduleFinalization(n), this.map.set(t, n), this.size++, n.value);
  }
  clean() {
    for (; this.oldest && this.size > this.max; )
      this.deleteNode(this.oldest);
  }
  deleteNode(t) {
    t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.size--;
    const r = t.key || t.keyRef && t.keyRef.deref();
    this.dispose(t.value, r), t.keyRef ? this.registry.unregister(t) : this.unfinalizedNodes.delete(t), r && this.map.delete(r);
  }
  delete(t) {
    const r = this.map.get(t);
    return r ? (this.deleteNode(r), !0) : !1;
  }
  scheduleFinalization(t) {
    this.unfinalizedNodes.add(t), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize));
  }
}
var Fs = /* @__PURE__ */ new WeakSet();
function nh(e) {
  e.size <= (e.max || -1) || Fs.has(e) || (Fs.add(e), setTimeout(function() {
    e.clean(), Fs.delete(e);
  }, 100));
}
var ih = function(e, t) {
  var r = new Bi(e, t);
  return r.set = function(n, i) {
    var s = Bi.prototype.set.call(this, n, i);
    return nh(this), s;
  }, r;
}, ag = function(e, t) {
  var r = new wo(e, t);
  return r.set = function(n, i) {
    var s = wo.prototype.set.call(this, n, i);
    return nh(this), s;
  }, r;
}, lg = Symbol.for("apollo.cacheSize"), Zt = k({}, Eo[lg]), kr = {};
function sh(e, t) {
  kr[e] = t;
}
var cg = globalThis.__DEV__ !== !1 ? dg : void 0, ug = globalThis.__DEV__ !== !1 ? pg : void 0, fg = globalThis.__DEV__ !== !1 ? oh : void 0;
function hg() {
  var e = {
    parser: 1e3,
    canonicalStringify: 1e3,
    print: 2e3,
    "documentTransform.cache": 2e3,
    "queryManager.getDocumentInfo": 2e3,
    "PersistedQueryLink.persistedQueryHashes": 2e3,
    "fragmentRegistry.transform": 2e3,
    "fragmentRegistry.lookup": 1e3,
    "fragmentRegistry.findFragmentSpreads": 4e3,
    "cache.fragmentQueryDocuments": 1e3,
    "removeTypenameFromVariables.getVariableDefinitions": 2e3,
    "inMemoryCache.maybeBroadcastWatch": 5e3,
    "inMemoryCache.executeSelectionSet": 5e4,
    "inMemoryCache.executeSubSelectedArray": 1e4
  };
  return Object.fromEntries(Object.entries(e).map(function(t) {
    var r = t[0], n = t[1];
    return [
      r,
      Zt[r] || n
    ];
  }));
}
function dg() {
  var e, t, r, n, i;
  if (globalThis.__DEV__ === !1)
    throw new Error("only supported in development mode");
  return {
    limits: hg(),
    sizes: k({ print: (e = kr.print) === null || e === void 0 ? void 0 : e.call(kr), parser: (t = kr.parser) === null || t === void 0 ? void 0 : t.call(kr), canonicalStringify: (r = kr.canonicalStringify) === null || r === void 0 ? void 0 : r.call(kr), links: Io(this.link), queryManager: {
      getDocumentInfo: this.queryManager.transformCache.size,
      documentTransforms: lh(this.queryManager.documentTransform)
    } }, (i = (n = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(n))
  };
}
function oh() {
  return {
    cache: {
      fragmentQueryDocuments: dr(this.getFragmentDoc)
    }
  };
}
function pg() {
  var e = this.config.fragments;
  return k(k({}, oh.apply(this)), { addTypenameDocumentTransform: lh(this.addTypenameTransform), inMemoryCache: {
    executeSelectionSet: dr(this.storeReader.executeSelectionSet),
    executeSubSelectedArray: dr(this.storeReader.executeSubSelectedArray),
    maybeBroadcastWatch: dr(this.maybeBroadcastWatch)
  }, fragmentRegistry: {
    findFragmentSpreads: dr(e == null ? void 0 : e.findFragmentSpreads),
    lookup: dr(e == null ? void 0 : e.lookup),
    transform: dr(e == null ? void 0 : e.transform)
  } });
}
function mg(e) {
  return !!e && "dirtyKey" in e;
}
function dr(e) {
  return mg(e) ? e.size : void 0;
}
function ah(e) {
  return e != null;
}
function lh(e) {
  return To(e).map(function(t) {
    return { cache: t };
  });
}
function To(e) {
  return e ? et(et([
    dr(e == null ? void 0 : e.performWork)
  ], To(e == null ? void 0 : e.left), !0), To(e == null ? void 0 : e.right), !0).filter(ah) : [];
}
function Io(e) {
  var t;
  return e ? et(et([
    (t = e == null ? void 0 : e.getMemoryInternals) === null || t === void 0 ? void 0 : t.call(e)
  ], Io(e == null ? void 0 : e.left), !0), Io(e == null ? void 0 : e.right), !0).filter(ah) : [];
}
var gr = Object.assign(function(t) {
  return JSON.stringify(t, vg);
}, {
  reset: function() {
    Yr = new ag(
      Zt.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
globalThis.__DEV__ !== !1 && sh("canonicalStringify", function() {
  return Yr.size;
});
var Yr;
gr.reset();
function vg(e, t) {
  if (t && typeof t == "object") {
    var r = Object.getPrototypeOf(t);
    if (r === Object.prototype || r === null) {
      var n = Object.keys(t);
      if (n.every(gg))
        return t;
      var i = JSON.stringify(n), s = Yr.get(i);
      if (!s) {
        n.sort();
        var o = JSON.stringify(n);
        s = Yr.get(o) || n, Yr.set(i, s), Yr.set(o, s);
      }
      var a = Object.create(r);
      return s.forEach(function(l) {
        a[l] = t[l];
      }), a;
    }
  }
  return t;
}
function gg(e, t, r) {
  return t === 0 || r[t - 1] <= e;
}
function sn(e) {
  return { __ref: String(e) };
}
function ve(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function yg(e) {
  return Ne(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function _g(e) {
  return e.kind === "StringValue";
}
function bg(e) {
  return e.kind === "BooleanValue";
}
function Eg(e) {
  return e.kind === "IntValue";
}
function Sg(e) {
  return e.kind === "FloatValue";
}
function wg(e) {
  return e.kind === "Variable";
}
function Og(e) {
  return e.kind === "ObjectValue";
}
function Tg(e) {
  return e.kind === "ListValue";
}
function Ig(e) {
  return e.kind === "EnumValue";
}
function Cg(e) {
  return e.kind === "NullValue";
}
function fn(e, t, r, n) {
  if (Eg(r) || Sg(r))
    e[t.value] = Number(r.value);
  else if (bg(r) || _g(r))
    e[t.value] = r.value;
  else if (Og(r)) {
    var i = {};
    r.fields.map(function(o) {
      return fn(i, o.name, o.value, n);
    }), e[t.value] = i;
  } else if (wg(r)) {
    var s = (n || {})[r.name.value];
    e[t.value] = s;
  } else if (Tg(r))
    e[t.value] = r.values.map(function(o) {
      var a = {};
      return fn(a, t, o, n), a[t.value];
    });
  else if (Ig(r))
    e[t.value] = r.value;
  else if (Cg(r))
    e[t.value] = null;
  else
    throw at(96, t.value, r.kind);
}
function Rg(e, t) {
  var r = null;
  e.directives && (r = {}, e.directives.forEach(function(i) {
    r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(s) {
      var o = s.name, a = s.value;
      return fn(r[i.name.value], o, a, t);
    });
  }));
  var n = null;
  return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(i) {
    var s = i.name, o = i.value;
    return fn(n, s, o, t);
  })), ch(e.name.value, n, r);
}
var kg = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], kn = gr, ch = Object.assign(function(e, t, r) {
  if (t && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var i = {};
      return n.forEach(function(a) {
        i[a] = t[a];
      }), "".concat(r.connection.key, "(").concat(kn(i), ")");
    } else
      return r.connection.key;
  var s = e;
  if (t) {
    var o = kn(t);
    s += "(".concat(o, ")");
  }
  return r && Object.keys(r).forEach(function(a) {
    kg.indexOf(a) === -1 && (r[a] && Object.keys(r[a]).length ? s += "@".concat(a, "(").concat(kn(r[a]), ")") : s += "@".concat(a));
  }), s;
}, {
  setStringify: function(e) {
    var t = kn;
    return kn = e, t;
  }
});
function ds(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {};
    return e.arguments.forEach(function(n) {
      var i = n.name, s = n.value;
      return fn(r, i, s, t);
    }), r;
  }
  return null;
}
function er(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function Co(e, t, r) {
  for (var n, i = 0, s = t.selections; i < s.length; i++) {
    var o = s[i];
    if (yr(o)) {
      if (o.name.value === "__typename")
        return e[er(o)];
    } else n ? n.push(o) : n = [o];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (n)
    for (var a = 0, l = n; a < l.length; a++) {
      var o = l[a], c = Co(e, hs(o, r).selectionSet, r);
      if (typeof c == "string")
        return c;
    }
}
function yr(e) {
  return e.kind === "Field";
}
function Dg(e) {
  return e.kind === "InlineFragment";
}
function On(e) {
  X(e && e.kind === "Document", 88);
  var t = e.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw at(89, r.kind);
    return r;
  });
  return X(t.length <= 1, 90, t.length), e;
}
function Fr(e) {
  return On(e), e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition";
  })[0];
}
function Mn(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "OperationDefinition" && !!t.name;
  }).map(function(t) {
    return t.name.value;
  })[0] || null;
}
function Tn(e) {
  return e.definitions.filter(function(t) {
    return t.kind === "FragmentDefinition";
  });
}
function uh(e) {
  var t = Fr(e);
  return X(t && t.operation === "query", 91), t;
}
function fh(e) {
  X(e.kind === "Document", 92), X(e.definitions.length <= 1, 93);
  var t = e.definitions[0];
  return X(t.kind === "FragmentDefinition", 94), t;
}
function _i(e) {
  On(e);
  for (var t, r = 0, n = e.definitions; r < n.length; r++) {
    var i = n[r];
    if (i.kind === "OperationDefinition") {
      var s = i.operation;
      if (s === "query" || s === "mutation" || s === "subscription")
        return i;
    }
    i.kind === "FragmentDefinition" && !t && (t = i);
  }
  if (t)
    return t;
  throw at(95);
}
function Na(e) {
  var t = /* @__PURE__ */ Object.create(null), r = e && e.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && fn(t, n.variable.name, n.defaultValue);
  }), t;
}
let Je = null;
const Kl = {};
let Pg = 1;
const Ng = () => class {
  constructor() {
    this.id = [
      "slot",
      Pg++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let t = Je; t; t = t.parent)
      if (this.id in t.slots) {
        const r = t.slots[this.id];
        if (r === Kl)
          break;
        return t !== Je && (Je.slots[this.id] = r), !0;
      }
    return Je && (Je.slots[this.id] = Kl), !1;
  }
  getValue() {
    if (this.hasValue())
      return Je.slots[this.id];
  }
  withValue(t, r, n, i) {
    const s = {
      __proto__: null,
      [this.id]: t
    }, o = Je;
    Je = { parent: o, slots: s };
    try {
      return r.apply(i, n);
    } finally {
      Je = o;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(t) {
    const r = Je;
    return function() {
      const n = Je;
      try {
        return Je = r, t.apply(this, arguments);
      } finally {
        Je = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(t, r, n) {
    if (Je) {
      const i = Je;
      try {
        return Je = null, t.apply(n, r);
      } finally {
        Je = i;
      }
    } else
      return t.apply(n, r);
  }
};
function Yl(e) {
  try {
    return e();
  } catch {
  }
}
const Vs = "@wry/context:Slot", Ag = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Yl(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Yl(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), Xl = Ag, ps = Xl[Vs] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Vs] || function(e) {
  try {
    Object.defineProperty(Xl, Vs, {
      value: e,
      enumerable: !1,
      writable: !1,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: !0
    });
  } finally {
    return e;
  }
}(Ng()), { bind: ew, noContext: tw } = ps, ms = new ps(), { hasOwnProperty: Lg } = Object.prototype, Aa = Array.from || function(e) {
  const t = [];
  return e.forEach((r) => t.push(r)), t;
};
function La(e) {
  const { unsubscribe: t } = e;
  typeof t == "function" && (e.unsubscribe = void 0, t());
}
const oi = [], xg = 100;
function hn(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function hh(e, t) {
  const r = e.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === t.length && // The underlying value or exception must be the same.
    e[r - 1] === t[r - 1]
  );
}
function dh(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function ph(e) {
  return e.slice(0);
}
class vs {
  constructor(t) {
    this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++vs.count;
  }
  peek() {
    if (this.value.length === 1 && !_r(this))
      return Jl(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(t) {
    return hn(!this.recomputing, "already recomputing"), Jl(this), _r(this) ? Mg(this, t) : dh(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, mh(this), La(this));
  }
  dispose() {
    this.setDirty(), bh(this), xa(this, (t, r) => {
      t.setDirty(), Eh(t, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(t) {
    t.add(this), this.deps || (this.deps = oi.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
  }
  forgetDeps() {
    this.deps && (Aa(this.deps).forEach((t) => t.delete(this)), this.deps.clear(), oi.push(this.deps), this.deps = null);
  }
}
vs.count = 0;
function Jl(e) {
  const t = ms.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), _r(e) ? gh(t, e) : yh(t, e), t;
}
function Mg(e, t) {
  return bh(e), ms.withValue(e, Fg, [e, t]), jg(e, t) && Vg(e), dh(e.value);
}
function Fg(e, t) {
  e.recomputing = !0;
  const { normalizeResult: r } = e;
  let n;
  r && e.value.length === 1 && (n = ph(e.value)), e.value.length = 0;
  try {
    if (e.value[0] = e.fn.apply(null, t), r && n && !hh(n, e.value))
      try {
        e.value[0] = r(e.value[0], n[0]);
      } catch {
      }
  } catch (i) {
    e.value[1] = i;
  }
  e.recomputing = !1;
}
function _r(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function Vg(e) {
  e.dirty = !1, !_r(e) && vh(e);
}
function mh(e) {
  xa(e, gh);
}
function vh(e) {
  xa(e, yh);
}
function xa(e, t) {
  const r = e.parents.size;
  if (r) {
    const n = Aa(e.parents);
    for (let i = 0; i < r; ++i)
      t(n[i], e);
  }
}
function gh(e, t) {
  hn(e.childValues.has(t)), hn(_r(t));
  const r = !_r(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = oi.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), r && mh(e);
}
function yh(e, t) {
  hn(e.childValues.has(t)), hn(!_r(t));
  const r = e.childValues.get(t);
  r.length === 0 ? e.childValues.set(t, ph(t.value)) : hh(r, t.value) || e.setDirty(), _h(e, t), !_r(e) && vh(e);
}
function _h(e, t) {
  const r = e.dirtyChildren;
  r && (r.delete(t), r.size === 0 && (oi.length < xg && oi.push(r), e.dirtyChildren = null));
}
function bh(e) {
  e.childValues.size > 0 && e.childValues.forEach((t, r) => {
    Eh(e, r);
  }), e.forgetDeps(), hn(e.dirtyChildren === null);
}
function Eh(e, t) {
  t.parents.delete(e), e.childValues.delete(t), _h(e, t);
}
function jg(e, t) {
  if (typeof e.subscribe == "function")
    try {
      La(e), e.unsubscribe = e.subscribe.apply(null, t);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
const Ug = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function Sh(e) {
  const t = /* @__PURE__ */ new Map();
  function r(n) {
    const i = ms.getValue();
    if (i) {
      let s = t.get(n);
      s || t.set(n, s = /* @__PURE__ */ new Set()), i.dependOn(s);
    }
  }
  return r.dirty = function(i, s) {
    const o = t.get(i);
    if (o) {
      const a = s && Lg.call(Ug, s) ? s : "setDirty";
      Aa(o).forEach((l) => l[a]()), t.delete(i), La(o);
    }
  }, r;
}
let Zl;
function qg(...e) {
  return (Zl || (Zl = new ir(typeof WeakMap == "function"))).lookupArray(e);
}
const js = /* @__PURE__ */ new Set();
function ai(e, { max: t = Math.pow(2, 16), keyArgs: r, makeCacheKey: n = qg, normalizeResult: i, subscribe: s, cache: o = wo } = /* @__PURE__ */ Object.create(null)) {
  const a = typeof o == "function" ? new o(t, (h) => h.dispose()) : o, l = function() {
    const h = n.apply(null, r ? r.apply(null, arguments) : arguments);
    if (h === void 0)
      return e.apply(null, arguments);
    let d = a.get(h);
    d || (a.set(h, d = new vs(e)), d.normalizeResult = i, d.subscribe = s, d.forget = () => a.delete(h));
    const E = d.recompute(Array.prototype.slice.call(arguments));
    return a.set(h, d), js.add(a), ms.hasValue() || (js.forEach((v) => v.clean()), js.clear()), E;
  };
  Object.defineProperty(l, "size", {
    get: () => a.size,
    configurable: !1,
    enumerable: !1
  }), Object.freeze(l.options = {
    max: t,
    keyArgs: r,
    makeCacheKey: n,
    normalizeResult: i,
    subscribe: s,
    cache: a
  });
  function c(h) {
    const d = h && a.get(h);
    d && d.setDirty();
  }
  l.dirtyKey = c, l.dirty = function() {
    c(n.apply(null, arguments));
  };
  function u(h) {
    const d = h && a.get(h);
    if (d)
      return d.peek();
  }
  l.peekKey = u, l.peek = function() {
    return u(n.apply(null, arguments));
  };
  function f(h) {
    return h ? a.delete(h) : !1;
  }
  return l.forgetKey = f, l.forget = function() {
    return f(n.apply(null, arguments));
  }, l.makeCacheKey = n, l.getKey = r ? function() {
    return n.apply(null, r.apply(null, arguments));
  } : n, Object.freeze(l);
}
function $g(e) {
  return e;
}
var wh = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = /* @__PURE__ */ Object.create(null)), this.resultCache = Pa ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = t, r.getCacheKey && (this.getCacheKey = r.getCacheKey), this.cached = r.cache !== !1, this.resetCache();
    }
    return e.prototype.getCacheKey = function(t) {
      return [t];
    }, e.identity = function() {
      return new e($g, { cache: !1 });
    }, e.split = function(t, r, n) {
      return n === void 0 && (n = e.identity()), Object.assign(new e(
        function(i) {
          var s = t(i) ? r : n;
          return s.transformDocument(i);
        },
        // Reasonably assume both `left` and `right` transforms handle their own caching
        { cache: !1 }
      ), { left: r, right: n });
    }, e.prototype.resetCache = function() {
      var t = this;
      if (this.cached) {
        var r = new ir(jr);
        this.performWork = ai(e.prototype.performWork.bind(this), {
          makeCacheKey: function(n) {
            var i = t.getCacheKey(n);
            if (i)
              return X(Array.isArray(i), 77), r.lookupArray(i);
          },
          max: Zt["documentTransform.cache"],
          cache: Bi
        });
      }
    }, e.prototype.performWork = function(t) {
      return On(t), this.transform(t);
    }, e.prototype.transformDocument = function(t) {
      if (this.resultCache.has(t))
        return t;
      var r = this.performWork(t);
      return this.resultCache.add(r), r;
    }, e.prototype.concat = function(t) {
      var r = this;
      return Object.assign(new e(
        function(n) {
          return t.transformDocument(r.transformDocument(n));
        },
        // Reasonably assume both transforms handle their own caching
        { cache: !1 }
      ), {
        left: this,
        right: t
      });
    }, e;
  }()
), Gn, Nr = Object.assign(function(e) {
  var t = Gn.get(e);
  return t || (t = qv(e), Gn.set(e, t)), t;
}, {
  reset: function() {
    Gn = new ih(
      Zt.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
Nr.reset();
globalThis.__DEV__ !== !1 && sh("print", function() {
  return Gn ? Gn.size : 0;
});
var Ae = Array.isArray;
function $t(e) {
  return Array.isArray(e) && e.length > 0;
}
var ec = {
  kind: Ie.FIELD,
  name: {
    kind: Ie.NAME,
    value: "__typename"
  }
};
function Oh(e, t) {
  return !e || e.selectionSet.selections.every(function(r) {
    return r.kind === Ie.FRAGMENT_SPREAD && Oh(t[r.name.value], t);
  });
}
function Wg(e) {
  return Oh(Fr(e) || fh(e), wn(Tn(e))) ? null : e;
}
function Qg(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  return e.forEach(function(n) {
    n && (n.name ? t.set(n.name, n) : n.test && r.set(n.test, n));
  }), function(n) {
    var i = t.get(n.name.value);
    return !i && r.size && r.forEach(function(s, o) {
      o(n) && (i = s);
    }), i;
  };
}
function tc(e) {
  var t = /* @__PURE__ */ new Map();
  return function(n) {
    n === void 0 && (n = e);
    var i = t.get(n);
    return i || t.set(n, i = {
      // Variable and fragment spread names used directly within this
      // operation or fragment definition, as identified by key. These sets
      // will be populated during the first traversal of the document in
      // removeDirectivesFromDocument below.
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), i;
  };
}
function Th(e, t) {
  On(t);
  for (var r = tc(""), n = tc(""), i = function(p) {
    for (var y = 0, _ = void 0; y < p.length && (_ = p[y]); ++y)
      if (!Ae(_)) {
        if (_.kind === Ie.OPERATION_DEFINITION)
          return r(_.name && _.name.value);
        if (_.kind === Ie.FRAGMENT_DEFINITION)
          return n(_.name.value);
      }
    return globalThis.__DEV__ !== !1 && X.error(97), null;
  }, s = 0, o = t.definitions.length - 1; o >= 0; --o)
    t.definitions[o].kind === Ie.OPERATION_DEFINITION && ++s;
  var a = Qg(e), l = function(p) {
    return $t(p) && p.map(a).some(function(y) {
      return y && y.remove;
    });
  }, c = /* @__PURE__ */ new Map(), u = !1, f = {
    enter: function(p) {
      if (l(p.directives))
        return u = !0, null;
    }
  }, h = Pt(t, {
    // These two AST node types share the same implementation, defined above.
    Field: f,
    InlineFragment: f,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(p, y, _, b, T) {
        var D = i(T);
        D && D.variables.add(p.name.value);
      }
    },
    FragmentSpread: {
      enter: function(p, y, _, b, T) {
        if (l(p.directives))
          return u = !0, null;
        var D = i(T);
        D && D.fragmentSpreads.add(p.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(p, y, _, b) {
        c.set(JSON.stringify(b), p);
      },
      leave: function(p, y, _, b) {
        var T = c.get(JSON.stringify(b));
        if (p === T)
          return p;
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          s > 0 && p.selectionSet.selections.every(function(D) {
            return D.kind === Ie.FIELD && D.name.value === "__typename";
          })
        )
          return n(p.name.value).removed = !0, u = !0, null;
      }
    },
    Directive: {
      leave: function(p) {
        if (a(p))
          return u = !0, null;
      }
    }
  });
  if (!u)
    return t;
  var d = function(p) {
    return p.transitiveVars || (p.transitiveVars = new Set(p.variables), p.removed || p.fragmentSpreads.forEach(function(y) {
      d(n(y)).transitiveVars.forEach(function(_) {
        p.transitiveVars.add(_);
      });
    })), p;
  }, E = /* @__PURE__ */ new Set();
  h.definitions.forEach(function(p) {
    p.kind === Ie.OPERATION_DEFINITION ? d(r(p.name && p.name.value)).fragmentSpreads.forEach(function(y) {
      E.add(y);
    }) : p.kind === Ie.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    s === 0 && !n(p.name.value).removed && E.add(p.name.value);
  }), E.forEach(function(p) {
    d(n(p)).fragmentSpreads.forEach(function(y) {
      E.add(y);
    });
  });
  var v = function(p) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!E.has(p) || n(p).removed);
  }, w = {
    enter: function(p) {
      if (v(p.name.value))
        return null;
    }
  };
  return Wg(Pt(h, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: w,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: w,
    OperationDefinition: {
      leave: function(p) {
        if (p.variableDefinitions) {
          var y = d(
            // If an operation is anonymous, we use the empty string as its key.
            r(p.name && p.name.value)
          ).transitiveVars;
          if (y.size < p.variableDefinitions.length)
            return k(k({}, p), { variableDefinitions: p.variableDefinitions.filter(function(_) {
              return y.has(_.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Ma = Object.assign(function(e) {
  return Pt(e, {
    SelectionSet: {
      enter: function(t, r, n) {
        if (!(n && n.kind === Ie.OPERATION_DEFINITION)) {
          var i = t.selections;
          if (i) {
            var s = i.some(function(a) {
              return yr(a) && (a.name.value === "__typename" || a.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!s) {
              var o = n;
              if (!(yr(o) && o.directives && o.directives.some(function(a) {
                return a.name.value === "export";
              })))
                return k(k({}, t), { selections: et(et([], i, !0), [ec], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(e) {
    return e === ec;
  }
});
function Hg(e) {
  var t = _i(e), r = t.operation;
  if (r === "query")
    return e;
  var n = Pt(e, {
    OperationDefinition: {
      enter: function(i) {
        return k(k({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function Ih(e) {
  On(e);
  var t = Th([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return t;
}
function Bg(e) {
  return On(e), Pt(e, {
    FragmentSpread: function(t) {
      var r;
      if (!(!((r = t.directives) === null || r === void 0) && r.some(function(n) {
        return n.name.value === "unmask";
      })))
        return k(k({}, t), { directives: et(et([], t.directives || [], !0), [
          {
            kind: Ie.DIRECTIVE,
            name: { kind: Ie.NAME, value: "nonreactive" }
          }
        ], !1) });
    }
  });
}
var Gg = Object.prototype.hasOwnProperty;
function rc() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return gs(e);
}
function gs(e) {
  var t = e[0] || {}, r = e.length;
  if (r > 1)
    for (var n = new br(), i = 1; i < r; ++i)
      t = n.merge(t, e[i]);
  return t;
}
var zg = function(e, t, r) {
  return this.merge(e[r], t[r]);
}, br = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = zg), this.reconciler = t, this.isObject = Ne, this.pastCopies = /* @__PURE__ */ new Set();
    }
    return e.prototype.merge = function(t, r) {
      for (var n = this, i = [], s = 2; s < arguments.length; s++)
        i[s - 2] = arguments[s];
      return Ne(r) && Ne(t) ? (Object.keys(r).forEach(function(o) {
        if (Gg.call(t, o)) {
          var a = t[o];
          if (r[o] !== a) {
            var l = n.reconciler.apply(n, et([
              t,
              r,
              o
            ], i, !1));
            l !== a && (t = n.shallowCopyForMerge(t), t[o] = l);
          }
        } else
          t = n.shallowCopyForMerge(t), t[o] = r[o];
      }), t) : r;
    }, e.prototype.shallowCopyForMerge = function(t) {
      return Ne(t) && (this.pastCopies.has(t) || (Array.isArray(t) ? t = t.slice(0) : t = k({ __proto__: Object.getPrototypeOf(t) }, t), this.pastCopies.add(t))), t;
    }, e;
  }()
);
function Kg(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r) return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Yg(e)) || t) {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yg(e, t) {
  if (e) {
    if (typeof e == "string") return nc(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nc(e, t);
  }
}
function nc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ic(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Fa(e, t, r) {
  return t && ic(e.prototype, t), r && ic(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Va = function() {
  return typeof Symbol == "function";
}, ja = function(e) {
  return Va() && !!Symbol[e];
}, Ua = function(e) {
  return ja(e) ? Symbol[e] : "@@" + e;
};
Va() && !ja("observable") && (Symbol.observable = Symbol("observable"));
var Xg = Ua("iterator"), Ro = Ua("observable"), Ch = Ua("species");
function Gi(e, t) {
  var r = e[t];
  if (r != null) {
    if (typeof r != "function") throw new TypeError(r + " is not a function");
    return r;
  }
}
function Dn(e) {
  var t = e.constructor;
  return t !== void 0 && (t = t[Ch], t === null && (t = void 0)), t !== void 0 ? t : Se;
}
function Jg(e) {
  return e instanceof Se;
}
function dn(e) {
  dn.log ? dn.log(e) : setTimeout(function() {
    throw e;
  });
}
function Li(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (t) {
      dn(t);
    }
  });
}
function Rh(e) {
  var t = e._cleanup;
  if (t !== void 0 && (e._cleanup = void 0, !!t))
    try {
      if (typeof t == "function")
        t();
      else {
        var r = Gi(t, "unsubscribe");
        r && r.call(t);
      }
    } catch (n) {
      dn(n);
    }
}
function ko(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function Zg(e) {
  var t = e._queue;
  if (t) {
    e._queue = void 0, e._state = "ready";
    for (var r = 0; r < t.length && (kh(e, t[r].type, t[r].value), e._state !== "closed"); ++r)
      ;
  }
}
function kh(e, t, r) {
  e._state = "running";
  var n = e._observer;
  try {
    var i = Gi(n, t);
    switch (t) {
      case "next":
        i && i.call(n, r);
        break;
      case "error":
        if (ko(e), i) i.call(n, r);
        else throw r;
        break;
      case "complete":
        ko(e), i && i.call(n);
        break;
    }
  } catch (s) {
    dn(s);
  }
  e._state === "closed" ? Rh(e) : e._state === "running" && (e._state = "ready");
}
function Us(e, t, r) {
  if (e._state !== "closed") {
    if (e._state === "buffering") {
      e._queue.push({
        type: t,
        value: r
      });
      return;
    }
    if (e._state !== "ready") {
      e._state = "buffering", e._queue = [{
        type: t,
        value: r
      }], Li(function() {
        return Zg(e);
      });
      return;
    }
    kh(e, t, r);
  }
}
var ey = /* @__PURE__ */ function() {
  function e(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var i = new ty(this);
    try {
      this._cleanup = n.call(void 0, i);
    } catch (s) {
      i.error(s);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var t = e.prototype;
  return t.unsubscribe = function() {
    this._state !== "closed" && (ko(this), Rh(this));
  }, Fa(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
}(), ty = /* @__PURE__ */ function() {
  function e(r) {
    this._subscription = r;
  }
  var t = e.prototype;
  return t.next = function(n) {
    Us(this._subscription, "next", n);
  }, t.error = function(n) {
    Us(this._subscription, "error", n);
  }, t.complete = function() {
    Us(this._subscription, "complete");
  }, Fa(e, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), e;
}(), Se = /* @__PURE__ */ function() {
  function e(r) {
    if (!(this instanceof e)) throw new TypeError("Observable cannot be called as a function");
    if (typeof r != "function") throw new TypeError("Observable initializer must be a function");
    this._subscriber = r;
  }
  var t = e.prototype;
  return t.subscribe = function(n) {
    return (typeof n != "object" || n === null) && (n = {
      next: n,
      error: arguments[1],
      complete: arguments[2]
    }), new ey(n, this._subscriber);
  }, t.forEach = function(n) {
    var i = this;
    return new Promise(function(s, o) {
      if (typeof n != "function") {
        o(new TypeError(n + " is not a function"));
        return;
      }
      function a() {
        l.unsubscribe(), s();
      }
      var l = i.subscribe({
        next: function(c) {
          try {
            n(c, a);
          } catch (u) {
            o(u), l.unsubscribe();
          }
        },
        error: o,
        complete: s
      });
    });
  }, t.map = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var s = Dn(this);
    return new s(function(o) {
      return i.subscribe({
        next: function(a) {
          try {
            a = n(a);
          } catch (l) {
            return o.error(l);
          }
          o.next(a);
        },
        error: function(a) {
          o.error(a);
        },
        complete: function() {
          o.complete();
        }
      });
    });
  }, t.filter = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var s = Dn(this);
    return new s(function(o) {
      return i.subscribe({
        next: function(a) {
          try {
            if (!n(a)) return;
          } catch (l) {
            return o.error(l);
          }
          o.next(a);
        },
        error: function(a) {
          o.error(a);
        },
        complete: function() {
          o.complete();
        }
      });
    });
  }, t.reduce = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var s = Dn(this), o = arguments.length > 1, a = !1, l = arguments[1], c = l;
    return new s(function(u) {
      return i.subscribe({
        next: function(f) {
          var h = !a;
          if (a = !0, !h || o)
            try {
              c = n(c, f);
            } catch (d) {
              return u.error(d);
            }
          else
            c = f;
        },
        error: function(f) {
          u.error(f);
        },
        complete: function() {
          if (!a && !o) return u.error(new TypeError("Cannot reduce an empty sequence"));
          u.next(c), u.complete();
        }
      });
    });
  }, t.concat = function() {
    for (var n = this, i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    var a = Dn(this);
    return new a(function(l) {
      var c, u = 0;
      function f(h) {
        c = h.subscribe({
          next: function(d) {
            l.next(d);
          },
          error: function(d) {
            l.error(d);
          },
          complete: function() {
            u === s.length ? (c = void 0, l.complete()) : f(a.from(s[u++]));
          }
        });
      }
      return f(n), function() {
        c && (c.unsubscribe(), c = void 0);
      };
    });
  }, t.flatMap = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var s = Dn(this);
    return new s(function(o) {
      var a = [], l = i.subscribe({
        next: function(u) {
          if (n)
            try {
              u = n(u);
            } catch (h) {
              return o.error(h);
            }
          var f = s.from(u).subscribe({
            next: function(h) {
              o.next(h);
            },
            error: function(h) {
              o.error(h);
            },
            complete: function() {
              var h = a.indexOf(f);
              h >= 0 && a.splice(h, 1), c();
            }
          });
          a.push(f);
        },
        error: function(u) {
          o.error(u);
        },
        complete: function() {
          c();
        }
      });
      function c() {
        l.closed && a.length === 0 && o.complete();
      }
      return function() {
        a.forEach(function(u) {
          return u.unsubscribe();
        }), l.unsubscribe();
      };
    });
  }, t[Ro] = function() {
    return this;
  }, e.from = function(n) {
    var i = typeof this == "function" ? this : e;
    if (n == null) throw new TypeError(n + " is not an object");
    var s = Gi(n, Ro);
    if (s) {
      var o = s.call(n);
      if (Object(o) !== o) throw new TypeError(o + " is not an object");
      return Jg(o) && o.constructor === i ? o : new i(function(a) {
        return o.subscribe(a);
      });
    }
    if (ja("iterator") && (s = Gi(n, Xg), s))
      return new i(function(a) {
        Li(function() {
          if (!a.closed) {
            for (var l = Kg(s.call(n)), c; !(c = l()).done; ) {
              var u = c.value;
              if (a.next(u), a.closed) return;
            }
            a.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new i(function(a) {
        Li(function() {
          if (!a.closed) {
            for (var l = 0; l < n.length; ++l)
              if (a.next(n[l]), a.closed) return;
            a.complete();
          }
        });
      });
    throw new TypeError(n + " is not observable");
  }, e.of = function() {
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    var o = typeof this == "function" ? this : e;
    return new o(function(a) {
      Li(function() {
        if (!a.closed) {
          for (var l = 0; l < i.length; ++l)
            if (a.next(i[l]), a.closed) return;
          a.complete();
        }
      });
    });
  }, Fa(e, null, [{
    key: Ch,
    get: function() {
      return this;
    }
  }]), e;
}();
Va() && Object.defineProperty(Se, Symbol("extensions"), {
  value: {
    symbol: Ro,
    hostReportError: dn
  },
  configurable: !0
});
function ry(e) {
  var t, r = e.Symbol;
  if (typeof r == "function")
    if (r.observable)
      t = r.observable;
    else {
      typeof r.for == "function" ? t = r.for("https://github.com/benlesh/symbol-observable") : t = r("https://github.com/benlesh/symbol-observable");
      try {
        r.observable = t;
      } catch {
      }
    }
  else
    t = "@@observable";
  return t;
}
var Br;
typeof self < "u" ? Br = self : typeof window < "u" ? Br = window : typeof global < "u" ? Br = global : typeof module < "u" ? Br = module : Br = Function("return this")();
ry(Br);
var sc = Se.prototype, oc = "@@observable";
sc[oc] || (sc[oc] = function() {
  return this;
});
function ny(e) {
  return e.catch(function() {
  }), e;
}
var iy = Object.prototype.toString;
function Dh(e) {
  return Do(e);
}
function Do(e, t) {
  switch (iy.call(e)) {
    case "[object Array]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var r = e.slice(0);
      return t.set(e, r), r.forEach(function(i, s) {
        r[s] = Do(i, t);
      }), r;
    }
    case "[object Object]": {
      if (t = t || /* @__PURE__ */ new Map(), t.has(e))
        return t.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return t.set(e, n), Object.keys(e).forEach(function(i) {
        n[i] = Do(e[i], t);
      }), n;
    }
    default:
      return e;
  }
}
function sy(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(r) {
    Ne(r) && oy(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      Ne(r[n]) && t.add(r[n]);
    });
  }), e;
}
function oy(e) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e))
    try {
      Object.freeze(e);
    } catch (t) {
      if (t instanceof TypeError)
        return null;
      throw t;
    }
  return e;
}
function zi(e) {
  return globalThis.__DEV__ !== !1 && sy(e), e;
}
function zn(e, t, r) {
  var n = [];
  e.forEach(function(i) {
    return i[t] && n.push(i);
  }), n.forEach(function(i) {
    return i[t](r);
  });
}
function qs(e, t, r) {
  return new Se(function(n) {
    var i = {
      // Normally we would initialize promiseQueue to Promise.resolve(), but
      // in this case, for backwards compatibility, we need to be careful to
      // invoke the first callback synchronously.
      then: function(l) {
        return new Promise(function(c) {
          return c(l());
        });
      }
    };
    function s(l, c) {
      return function(u) {
        if (l) {
          var f = function() {
            return n.closed ? (
              /* will be swallowed */
              0
            ) : l(u);
          };
          i = i.then(f, f).then(function(h) {
            return n.next(h);
          }, function(h) {
            return n.error(h);
          });
        } else
          n[c](u);
      };
    }
    var o = {
      next: s(t, "next"),
      error: s(r, "error"),
      complete: function() {
        i.then(function() {
          return n.complete();
        });
      }
    }, a = e.subscribe(o);
    return function() {
      return a.unsubscribe();
    };
  });
}
function Ph(e) {
  function t(r) {
    Object.defineProperty(e, r, { value: Se });
  }
  return rh && Symbol.species && t(Symbol.species), t("@@species"), e;
}
function ac(e) {
  return e && typeof e.then == "function";
}
var Gr = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r) {
      var n = e.call(this, function(i) {
        return n.addObserver(i), function() {
          return n.removeObserver(i);
        };
      }) || this;
      return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(i, s) {
        n.resolve = i, n.reject = s;
      }), n.handlers = {
        next: function(i) {
          n.sub !== null && (n.latest = ["next", i], n.notify("next", i), zn(n.observers, "next", i));
        },
        error: function(i) {
          var s = n.sub;
          s !== null && (s && setTimeout(function() {
            return s.unsubscribe();
          }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), zn(n.observers, "error", i));
        },
        complete: function() {
          var i = n, s = i.sub, o = i.sources, a = o === void 0 ? [] : o;
          if (s !== null) {
            var l = a.shift();
            l ? ac(l) ? l.then(function(c) {
              return n.sub = c.subscribe(n.handlers);
            }, n.handlers.error) : n.sub = l.subscribe(n.handlers) : (s && setTimeout(function() {
              return s.unsubscribe();
            }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), zn(n.observers, "complete"));
          }
        }
      }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(i) {
        n.reject(i), n.sources = [], n.handlers.error(i);
      }, n.promise.catch(function(i) {
      }), typeof r == "function" && (r = [new Se(r)]), ac(r) ? r.then(function(i) {
        return n.start(i);
      }, n.handlers.error) : n.start(r), n;
    }
    return t.prototype.start = function(r) {
      this.sub === void 0 && (this.sources = Array.from(r), this.handlers.complete());
    }, t.prototype.deliverLastMessage = function(r) {
      if (this.latest) {
        var n = this.latest[0], i = r[n];
        i && i.call(r, this.latest[1]), this.sub === null && n === "next" && r.complete && r.complete();
      }
    }, t.prototype.addObserver = function(r) {
      this.observers.has(r) || (this.deliverLastMessage(r), this.observers.add(r));
    }, t.prototype.removeObserver = function(r) {
      this.observers.delete(r) && this.observers.size < 1 && this.handlers.complete();
    }, t.prototype.notify = function(r, n) {
      var i = this.nextResultListeners;
      i.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), i.forEach(function(s) {
        return s(r, n);
      }));
    }, t.prototype.beforeNext = function(r) {
      var n = !1;
      this.nextResultListeners.add(function(i, s) {
        n || (n = !0, r(i, s));
      });
    }, t;
  }(Se)
);
Ph(Gr);
function on(e) {
  return "incremental" in e;
}
function ay(e) {
  return "hasNext" in e && "data" in e;
}
function ly(e) {
  return on(e) || ay(e);
}
function cy(e) {
  return Ne(e) && "payload" in e;
}
function Nh(e, t) {
  var r = e, n = new br();
  return on(t) && $t(t.incremental) && t.incremental.forEach(function(i) {
    for (var s = i.data, o = i.path, a = o.length - 1; a >= 0; --a) {
      var l = o[a], c = !isNaN(+l), u = c ? [] : {};
      u[l] = s, s = u;
    }
    r = n.merge(r, s);
  }), r;
}
function xi(e) {
  var t = Po(e);
  return $t(t);
}
function Po(e) {
  var t = $t(e.errors) ? e.errors.slice(0) : [];
  return on(e) && $t(e.incremental) && e.incremental.forEach(function(r) {
    r.errors && t.push.apply(t, r.errors);
  }), t;
}
function pn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = /* @__PURE__ */ Object.create(null);
  return e.forEach(function(n) {
    n && Object.keys(n).forEach(function(i) {
      var s = n[i];
      s !== void 0 && (r[i] = s);
    });
  }), r;
}
function $s(e, t) {
  return pn(e, t, t.variables && {
    variables: pn(k(k({}, e && e.variables), t.variables))
  });
}
function Ws(e) {
  return new Se(function(t) {
    t.error(e);
  });
}
var Ah = function(e, t, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n;
};
function uy(e) {
  for (var t = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(e); r < n.length; r++) {
    var i = n[r];
    if (t.indexOf(i) < 0)
      throw at(46, i);
  }
  return e;
}
function fy(e, t) {
  var r = k({}, e), n = function(s) {
    typeof s == "function" ? r = k(k({}, r), s(r)) : r = k(k({}, r), s);
  }, i = function() {
    return k({}, r);
  };
  return Object.defineProperty(t, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(t, "getContext", {
    enumerable: !1,
    value: i
  }), t;
}
function hy(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return t.operationName || (t.operationName = typeof t.query != "string" ? Mn(t.query) || void 0 : ""), t;
}
function dy(e, t) {
  var r = k({}, e), n = new Set(Object.keys(e));
  return Pt(t, {
    Variable: function(i, s, o) {
      o && o.kind !== "VariableDefinition" && n.delete(i.name.value);
    }
  }), n.forEach(function(i) {
    delete r[i];
  }), r;
}
function lc(e, t) {
  return t ? t(e) : Se.of();
}
function Pn(e) {
  return typeof e == "function" ? new Ur(e) : e;
}
function Ci(e) {
  return e.request.length <= 1;
}
var Ur = (
  /** @class */
  function() {
    function e(t) {
      t && (this.request = t);
    }
    return e.empty = function() {
      return new e(function() {
        return Se.of();
      });
    }, e.from = function(t) {
      return t.length === 0 ? e.empty() : t.map(Pn).reduce(function(r, n) {
        return r.concat(n);
      });
    }, e.split = function(t, r, n) {
      var i = Pn(r), s = Pn(n || new e(lc)), o;
      return Ci(i) && Ci(s) ? o = new e(function(a) {
        return t(a) ? i.request(a) || Se.of() : s.request(a) || Se.of();
      }) : o = new e(function(a, l) {
        return t(a) ? i.request(a, l) || Se.of() : s.request(a, l) || Se.of();
      }), Object.assign(o, { left: i, right: s });
    }, e.execute = function(t, r) {
      return t.request(fy(r.context, hy(uy(r)))) || Se.of();
    }, e.concat = function(t, r) {
      var n = Pn(t);
      if (Ci(n))
        return globalThis.__DEV__ !== !1 && X.warn(38, n), n;
      var i = Pn(r), s;
      return Ci(i) ? s = new e(function(o) {
        return n.request(o, function(a) {
          return i.request(a) || Se.of();
        }) || Se.of();
      }) : s = new e(function(o, a) {
        return n.request(o, function(l) {
          return i.request(l, a) || Se.of();
        }) || Se.of();
      }), Object.assign(s, { left: n, right: i });
    }, e.prototype.split = function(t, r, n) {
      return this.concat(e.split(t, r, n || new e(lc)));
    }, e.prototype.concat = function(t) {
      return e.concat(this, t);
    }, e.prototype.request = function(t, r) {
      throw at(39);
    }, e.prototype.onError = function(t, r) {
      if (r && r.error)
        return r.error(t), !1;
      throw t;
    }, e.prototype.setOnError = function(t) {
      return this.onError = t, this;
    }, e;
  }()
), No = Ur.execute;
function py(e) {
  var t, r = e[Symbol.asyncIterator]();
  return t = {
    next: function() {
      return r.next();
    }
  }, t[Symbol.asyncIterator] = function() {
    return this;
  }, t;
}
function my(e) {
  var t = null, r = null, n = !1, i = [], s = [];
  function o(f) {
    if (!r) {
      if (s.length) {
        var h = s.shift();
        if (Array.isArray(h) && h[0])
          return h[0]({ value: f, done: !1 });
      }
      i.push(f);
    }
  }
  function a(f) {
    r = f;
    var h = s.slice();
    h.forEach(function(d) {
      d[1](f);
    }), !t || t();
  }
  function l() {
    n = !0;
    var f = s.slice();
    f.forEach(function(h) {
      h[0]({ value: void 0, done: !0 });
    }), !t || t();
  }
  t = function() {
    t = null, e.removeListener("data", o), e.removeListener("error", a), e.removeListener("end", l), e.removeListener("finish", l), e.removeListener("close", l);
  }, e.on("data", o), e.on("error", a), e.on("end", l), e.on("finish", l), e.on("close", l);
  function c() {
    return new Promise(function(f, h) {
      if (r)
        return h(r);
      if (i.length)
        return f({ value: i.shift(), done: !1 });
      if (n)
        return f({ value: void 0, done: !0 });
      s.push([f, h]);
    });
  }
  var u = {
    next: function() {
      return c();
    }
  };
  return fs && (u[Symbol.asyncIterator] = function() {
    return this;
  }), u;
}
function vy(e) {
  var t = !1, r = {
    next: function() {
      return t ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (t = !0, new Promise(function(n, i) {
        e.then(function(s) {
          n({ value: s, done: !1 });
        }).catch(i);
      }));
    }
  };
  return fs && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function cc(e) {
  var t = {
    next: function() {
      return e.read();
    }
  };
  return fs && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function gy(e) {
  return !!e.body;
}
function yy(e) {
  return !!e.getReader;
}
function _y(e) {
  return !!(fs && e[Symbol.asyncIterator]);
}
function by(e) {
  return !!e.stream;
}
function Ey(e) {
  return !!e.arrayBuffer;
}
function Sy(e) {
  return !!e.pipe;
}
function wy(e) {
  var t = e;
  if (gy(e) && (t = e.body), _y(t))
    return py(t);
  if (yy(t))
    return cc(t.getReader());
  if (by(t))
    return cc(t.stream().getReader());
  if (Ey(t))
    return vy(t.arrayBuffer());
  if (Sy(t))
    return my(t);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var ys = Symbol();
function Lh(e) {
  return e.extensions ? Array.isArray(e.extensions[ys]) : !1;
}
function qa(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var Oy = function(e) {
  var t = et(et(et([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && t.push(e.networkError), t.map(function(r) {
    return Ne(r) && r.message || "Error message not found.";
  }).join(`
`);
}, Ut = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r) {
      var n = r.graphQLErrors, i = r.protocolErrors, s = r.clientErrors, o = r.networkError, a = r.errorMessage, l = r.extraInfo, c = e.call(this, a) || this;
      return c.name = "ApolloError", c.graphQLErrors = n || [], c.protocolErrors = i || [], c.clientErrors = s || [], c.networkError = o || null, c.message = a || Oy(c), c.extraInfo = l, c.cause = et(et(et([
        o
      ], n || [], !0), i || [], !0), s || [], !0).find(function(u) {
        return !!u;
      }) || null, c.__proto__ = t.prototype, c;
    }
    return t;
  }(Error)
), uc = Object.prototype.hasOwnProperty;
function Ty(e, t) {
  return fr(this, void 0, void 0, function() {
    var r, n, i, s, o, a, l, c, u, f, h, d, E, v, w, p, y, _, b, T, D, P, q, z;
    return hr(this, function(W) {
      switch (W.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          r = new TextDecoder("utf-8"), n = (z = e.headers) === null || z === void 0 ? void 0 : z.get("content-type"), i = "boundary=", s = n != null && n.includes(i) ? n == null ? void 0 : n.substring((n == null ? void 0 : n.indexOf(i)) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--`.concat(s), a = "", l = wy(e), c = !0, W.label = 1;
        case 1:
          return c ? [4, l.next()] : [3, 3];
        case 2:
          for (u = W.sent(), f = u.value, h = u.done, d = typeof f == "string" ? f : r.decode(f), E = a.length - o.length + 1, c = !h, a += d, v = a.indexOf(o, E); v > -1; ) {
            if (w = void 0, P = [
              a.slice(0, v),
              a.slice(v + o.length)
            ], w = P[0], a = P[1], p = w.indexOf(`\r
\r
`), y = Iy(w.slice(0, p)), _ = y["content-type"], _ && _.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (b = w.slice(p), b) {
              if (T = xh(e, b), Object.keys(T).length > 1 || "data" in T || "incremental" in T || "errors" in T || "payload" in T)
                if (cy(T)) {
                  if (D = {}, "payload" in T) {
                    if (Object.keys(T).length === 1 && T.payload === null)
                      return [
                        2
                        /*return*/
                      ];
                    D = k({}, T.payload);
                  }
                  "errors" in T && (D = k(k({}, D), { extensions: k(k({}, "extensions" in D ? D.extensions : null), (q = {}, q[ys] = T.errors, q)) })), t(D);
                } else
                  t(T);
              else if (
                // If the chunk contains only a "hasNext: false", we can call
                // observer.complete() immediately.
                Object.keys(T).length === 1 && "hasNext" in T && !T.hasNext
              )
                return [
                  2
                  /*return*/
                ];
            }
            v = a.indexOf(o);
          }
          return [3, 1];
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function Iy(e) {
  var t = {};
  return e.split(`
`).forEach(function(r) {
    var n = r.indexOf(":");
    if (n > -1) {
      var i = r.slice(0, n).trim().toLowerCase(), s = r.slice(n + 1).trim();
      t[i] = s;
    }
  }), t;
}
function xh(e, t) {
  if (e.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    };
    Ah(e, r(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(t);
  } catch (i) {
    var n = i;
    throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, n;
  }
}
function Cy(e, t) {
  e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e);
}
function Ry(e) {
  return function(t) {
    return t.text().then(function(r) {
      return xh(t, r);
    }).then(function(r) {
      return !Array.isArray(r) && !uc.call(r, "data") && !uc.call(r, "errors") && Ah(t, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(n) {
        return n.operationName;
      }) : e.operationName, "'.")), r;
    });
  };
}
var Ao = function(e, t) {
  var r;
  try {
    r = JSON.stringify(e);
  } catch (i) {
    var n = at(42, t, i.message);
    throw n.parseError = i, n;
  }
  return r;
}, ky = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, Dy = {
  // headers are case insensitive (https://stackoverflow.com/a/5259004)
  accept: "*/*",
  // The content-type header describes the type of the body of the request, and
  // so it typically only is sent with requests that actually have bodies. One
  // could imagine that Apollo Client would remove this header when constructing
  // a GET request (which has no body), but we historically have not done that.
  // This means that browsers will preflight all Apollo Client requests (even
  // GET requests). Apollo Server's CSRF prevention feature (introduced in
  // AS3.7) takes advantage of this fact and does not block requests with this
  // header. If you want to drop this header from GET requests, then you should
  // probably replace it with a `apollo-require-preflight` header, or servers
  // with CSRF prevention enabled might block your GET request. See
  // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
  // for more details.
  "content-type": "application/json"
}, Py = {
  method: "POST"
}, Ny = {
  http: ky,
  headers: Dy,
  options: Py
}, Ay = function(e, t) {
  return t(e);
};
function Ly(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = {}, s = {};
  r.forEach(function(f) {
    i = k(k(k({}, i), f.options), { headers: k(k({}, i.headers), f.headers) }), f.credentials && (i.credentials = f.credentials), s = k(k({}, s), f.http);
  }), i.headers && (i.headers = xy(i.headers, s.preserveHeaderCase));
  var o = e.operationName, a = e.extensions, l = e.variables, c = e.query, u = { operationName: o, variables: l };
  return s.includeExtensions && (u.extensions = a), s.includeQuery && (u.query = t(c, Nr)), {
    options: i,
    body: u
  };
}
function xy(e, t) {
  if (!t) {
    var r = {};
    return Object.keys(Object(e)).forEach(function(s) {
      r[s.toLowerCase()] = e[s];
    }), r;
  }
  var n = {};
  Object.keys(Object(e)).forEach(function(s) {
    n[s.toLowerCase()] = {
      originalName: s,
      value: e[s]
    };
  });
  var i = {};
  return Object.keys(n).forEach(function(s) {
    i[n[s].originalName] = n[s].value;
  }), i;
}
var My = function(e) {
  if (!e && typeof fetch > "u")
    throw at(40);
}, Fy = function(e, t) {
  var r = e.getContext(), n = r.uri;
  return n || (typeof t == "function" ? t(e) : t || "/graphql");
};
function Vy(e, t) {
  var r = [], n = function(f, h) {
    r.push("".concat(f, "=").concat(encodeURIComponent(h)));
  };
  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
    var i = void 0;
    try {
      i = Ao(t.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    n("variables", i);
  }
  if (t.extensions) {
    var s = void 0;
    try {
      s = Ao(t.extensions, "Extensions map");
    } catch (f) {
      return { parseError: f };
    }
    n("extensions", s);
  }
  var o = "", a = e, l = e.indexOf("#");
  l !== -1 && (o = e.substr(l), a = e.substr(0, l));
  var c = a.indexOf("?") === -1 ? "?" : "&", u = a + c + r.join("&") + o;
  return { newURI: u };
}
var fc = wt(function() {
  return fetch;
}), jy = function(e) {
  e === void 0 && (e = {});
  var t = e.uri, r = t === void 0 ? "/graphql" : t, n = e.fetch, i = e.print, s = i === void 0 ? Ay : i, o = e.includeExtensions, a = e.preserveHeaderCase, l = e.useGETForQueries, c = e.includeUnusedVariables, u = c === void 0 ? !1 : c, f = Jt(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && My(n || fc);
  var h = {
    http: { includeExtensions: o, preserveHeaderCase: a },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new Ur(function(d) {
    var E = Fy(d, r), v = d.getContext(), w = {};
    if (v.clientAwareness) {
      var p = v.clientAwareness, y = p.name, _ = p.version;
      y && (w["apollographql-client-name"] = y), _ && (w["apollographql-client-version"] = _);
    }
    var b = k(k({}, w), v.headers), T = {
      http: v.http,
      options: v.fetchOptions,
      credentials: v.credentials,
      headers: b
    };
    if (si(["client"], d.query)) {
      var D = Ih(d.query);
      if (!D)
        return Ws(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      d.query = D;
    }
    var P = Ly(d, s, Ny, h, T), q = P.options, z = P.body;
    z.variables && !u && (z.variables = dy(z.variables, d.query));
    var W;
    !q.signal && typeof AbortController < "u" && (W = new AbortController(), q.signal = W.signal);
    var ie = function(oe) {
      return oe.kind === "OperationDefinition" && oe.operation === "mutation";
    }, te = function(oe) {
      return oe.kind === "OperationDefinition" && oe.operation === "subscription";
    }, Z = te(_i(d.query)), xe = si(["defer"], d.query);
    if (l && !d.query.definitions.some(ie) && (q.method = "GET"), xe || Z) {
      q.headers = q.headers || {};
      var $e = "multipart/mixed;";
      Z && xe && globalThis.__DEV__ !== !1 && X.warn(41), Z ? $e += "boundary=graphql;subscriptionSpec=1.0,application/json" : xe && ($e += "deferSpec=20220824,application/json"), q.headers.accept = $e;
    }
    if (q.method === "GET") {
      var ye = Vy(E, z), se = ye.newURI, re = ye.parseError;
      if (re)
        return Ws(re);
      E = se;
    } else
      try {
        q.body = Ao(z, "Payload");
      } catch (oe) {
        return Ws(oe);
      }
    return new Se(function(oe) {
      var Ge = n || wt(function() {
        return fetch;
      }) || fc, Me = oe.next.bind(oe);
      return Ge(E, q).then(function(Ee) {
        var ze;
        d.setContext({ response: Ee });
        var We = (ze = Ee.headers) === null || ze === void 0 ? void 0 : ze.get("content-type");
        return We !== null && /^multipart\/mixed/i.test(We) ? Ty(Ee, Me) : Ry(d)(Ee).then(Me);
      }).then(function() {
        W = void 0, oe.complete();
      }).catch(function(Ee) {
        W = void 0, Cy(Ee, oe);
      }), function() {
        W && W.abort();
      };
    });
  });
}, Mh = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r) {
      r === void 0 && (r = {});
      var n = e.call(this, jy(r).request) || this;
      return n.options = r, n;
    }
    return t;
  }(Ur)
);
const { toString: hc, hasOwnProperty: Uy } = Object.prototype, dc = Function.prototype.toString, Lo = /* @__PURE__ */ new Map();
function Oe(e, t) {
  try {
    return xo(e, t);
  } finally {
    Lo.clear();
  }
}
function xo(e, t) {
  if (e === t)
    return !0;
  const r = hc.call(e), n = hc.call(t);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (e.length !== t.length)
        return !1;
    // Fall through to object case...
    case "[object Object]": {
      if (mc(e, t))
        return !0;
      const i = pc(e), s = pc(t), o = i.length;
      if (o !== s.length)
        return !1;
      for (let a = 0; a < o; ++a)
        if (!Uy.call(t, i[a]))
          return !1;
      for (let a = 0; a < o; ++a) {
        const l = i[a];
        if (!xo(e[l], t[l]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return e.name === t.name && e.message === t.message;
    case "[object Number]":
      if (e !== e)
        return t !== t;
    // Fall through to shared +a === +b case...
    case "[object Boolean]":
    case "[object Date]":
      return +e == +t;
    case "[object RegExp]":
    case "[object String]":
      return e == `${t}`;
    case "[object Map]":
    case "[object Set]": {
      if (e.size !== t.size)
        return !1;
      if (mc(e, t))
        return !0;
      const i = e.entries(), s = r === "[object Map]";
      for (; ; ) {
        const o = i.next();
        if (o.done)
          break;
        const [a, l] = o.value;
        if (!t.has(a) || s && !xo(l, t.get(a)))
          return !1;
      }
      return !0;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    // Buffer, in Node.js.
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      e = new Uint8Array(e), t = new Uint8Array(t);
    // Fall through...
    case "[object DataView]": {
      let i = e.byteLength;
      if (i === t.byteLength)
        for (; i-- && e[i] === t[i]; )
          ;
      return i === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const i = dc.call(e);
      return i !== dc.call(t) ? !1 : !Wy(i, $y);
    }
  }
  return !1;
}
function pc(e) {
  return Object.keys(e).filter(qy, e);
}
function qy(e) {
  return this[e] !== void 0;
}
const $y = "{ [native code] }";
function Wy(e, t) {
  const r = e.length - t.length;
  return r >= 0 && e.indexOf(t, r) === r;
}
function mc(e, t) {
  let r = Lo.get(e);
  if (r) {
    if (r.has(t))
      return !0;
  } else
    Lo.set(e, r = /* @__PURE__ */ new Set());
  return r.add(t), !1;
}
function Fh(e, t, r, n) {
  var i = t.data, s = Jt(t, ["data"]), o = r.data, a = Jt(r, ["data"]);
  return Oe(s, a) && Mi(_i(e).selectionSet, i, o, {
    fragmentMap: wn(Tn(e)),
    variables: n
  });
}
function Mi(e, t, r, n) {
  if (t === r)
    return !0;
  var i = /* @__PURE__ */ new Set();
  return e.selections.every(function(s) {
    if (i.has(s) || (i.add(s), !yi(s, n.variables)) || vc(s))
      return !0;
    if (yr(s)) {
      var o = er(s), a = t && t[o], l = r && r[o], c = s.selectionSet;
      if (!c)
        return Oe(a, l);
      var u = Array.isArray(a), f = Array.isArray(l);
      if (u !== f)
        return !1;
      if (u && f) {
        var h = a.length;
        if (l.length !== h)
          return !1;
        for (var d = 0; d < h; ++d)
          if (!Mi(c, a[d], l[d], n))
            return !1;
        return !0;
      }
      return Mi(c, a, l, n);
    } else {
      var E = hs(s, n.fragmentMap);
      if (E)
        return vc(E) ? !0 : Mi(
          E.selectionSet,
          // Notice that we reuse the same aResult and bResult values here,
          // since the fragment ...spread does not specify a field name, but
          // consists of multiple fields (within the fragment's selection set)
          // that should be applied to the current result value(s).
          t,
          r,
          n
        );
    }
  });
}
function vc(e) {
  return !!e.directives && e.directives.some(Qy);
}
function Qy(e) {
  return e.name.value === "nonreactive";
}
var Vh = jr ? WeakMap : Map, jh = Pa ? WeakSet : Set, $a = new ps(), gc = !1;
function Uh() {
  gc || (gc = !0, globalThis.__DEV__ !== !1 && X.warn(52));
}
function qh(e, t, r) {
  return $a.withValue(!0, function() {
    var n = Fn(e, t, r, !1);
    return Object.isFrozen(e) && zi(n), n;
  });
}
function Hy(e, t) {
  if (t.has(e))
    return t.get(e);
  var r = Array.isArray(e) ? [] : /* @__PURE__ */ Object.create(null);
  return t.set(e, r), r;
}
function Fn(e, t, r, n, i) {
  var s, o = r.knownChanged, a = Hy(e, r.mutableTargets);
  if (Array.isArray(e)) {
    for (var l = 0, c = Array.from(e.entries()); l < c.length; l++) {
      var u = c[l], f = u[0], h = u[1];
      if (h === null) {
        a[f] = null;
        continue;
      }
      var d = Fn(h, t, r, n, globalThis.__DEV__ !== !1 ? "".concat(i || "", "[").concat(f, "]") : void 0);
      o.has(d) && o.add(a), a[f] = d;
    }
    return o.has(a) ? a : e;
  }
  for (var E = 0, v = t.selections; E < v.length; E++) {
    var w = v[E], p = void 0;
    if (n && o.add(a), w.kind === Ie.FIELD) {
      var y = er(w), _ = w.selectionSet;
      if (p = a[y] || e[y], p === void 0)
        continue;
      if (_ && p !== null) {
        var d = Fn(e[y], _, r, n, globalThis.__DEV__ !== !1 ? "".concat(i || "", ".").concat(y) : void 0);
        o.has(d) && (p = d);
      }
      globalThis.__DEV__ === !1 && (a[y] = p), globalThis.__DEV__ !== !1 && (n && y !== "__typename" && // either the field is not present in the memo object
      // or it has a `get` descriptor, not a `value` descriptor
      // => it is a warning accessor and we can overwrite it
      // with another accessor
      !(!((s = Object.getOwnPropertyDescriptor(a, y)) === null || s === void 0) && s.value) ? Object.defineProperty(a, y, By(y, p, i || "", r.operationName, r.operationType)) : (delete a[y], a[y] = p));
    }
    if (w.kind === Ie.INLINE_FRAGMENT && (!w.typeCondition || r.cache.fragmentMatches(w, e.__typename)) && (p = Fn(e, w.selectionSet, r, n, i)), w.kind === Ie.FRAGMENT_SPREAD) {
      var b = w.name.value, T = r.fragmentMap[b] || (r.fragmentMap[b] = r.cache.lookupFragment(b));
      X(T, 47, b);
      var D = Gv(w);
      D !== "mask" && (p = Fn(e, T.selectionSet, r, D === "migrate", i));
    }
    o.has(p) && o.add(a);
  }
  return "__typename" in e && !("__typename" in a) && (a.__typename = e.__typename), Object.keys(a).length !== Object.keys(e).length && o.add(a), o.has(a) ? a : e;
}
function By(e, t, r, n, i) {
  var s = function() {
    return $a.getValue() || (globalThis.__DEV__ !== !1 && X.warn(48, n ? "".concat(i, " '").concat(n, "'") : "anonymous ".concat(i), "".concat(r, ".").concat(e).replace(/^\./, "")), s = function() {
      return t;
    }), t;
  };
  return {
    get: function() {
      return s();
    },
    set: function(o) {
      s = function() {
        return o;
      };
    },
    enumerable: !0,
    configurable: !0
  };
}
function $h(e, t, r, n) {
  if (!r.fragmentMatches)
    return globalThis.__DEV__ !== !1 && Uh(), e;
  var i = t.definitions.filter(function(o) {
    return o.kind === Ie.FRAGMENT_DEFINITION;
  });
  typeof n > "u" && (X(i.length === 1, 49, i.length), n = i[0].name.value);
  var s = i.find(function(o) {
    return o.name.value === n;
  });
  return X(!!s, 50, n), e == null || Oe(e, {}) ? e : qh(e, s.selectionSet, {
    operationType: "fragment",
    operationName: s.name.value,
    fragmentMap: wn(Tn(t)),
    cache: r,
    mutableTargets: new Vh(),
    knownChanged: new jh()
  });
}
function Gy(e, t, r) {
  var n;
  if (!r.fragmentMatches)
    return globalThis.__DEV__ !== !1 && Uh(), e;
  var i = Fr(t);
  return X(i, 51), e == null ? e : qh(e, i.selectionSet, {
    operationType: i.operation,
    operationName: (n = i.name) === null || n === void 0 ? void 0 : n.value,
    fragmentMap: wn(Tn(t)),
    cache: r,
    mutableTargets: new Vh(),
    knownChanged: new jh()
  });
}
var Wh = (
  /** @class */
  function() {
    function e() {
      this.assumeImmutableResults = !1, this.getFragmentDoc = ai(Zv, {
        max: Zt["cache.fragmentQueryDocuments"] || 1e3,
        cache: Bi
      });
    }
    return e.prototype.lookupFragment = function(t) {
      return null;
    }, e.prototype.batch = function(t) {
      var r = this, n = typeof t.optimistic == "string" ? t.optimistic : t.optimistic === !1 ? null : void 0, i;
      return this.performTransaction(function() {
        return i = t.update(r);
      }, n), i;
    }, e.prototype.recordOptimisticTransaction = function(t, r) {
      this.performTransaction(t, r);
    }, e.prototype.transformDocument = function(t) {
      return t;
    }, e.prototype.transformForLink = function(t) {
      return t;
    }, e.prototype.identify = function(t) {
    }, e.prototype.gc = function() {
      return [];
    }, e.prototype.modify = function(t) {
      return !1;
    }, e.prototype.readQuery = function(t, r) {
      return r === void 0 && (r = !!t.optimistic), this.read(k(k({}, t), { rootId: t.id || "ROOT_QUERY", optimistic: r }));
    }, e.prototype.watchFragment = function(t) {
      var r = this, n = t.fragment, i = t.fragmentName, s = t.from, o = t.optimistic, a = o === void 0 ? !0 : o, l = Jt(t, ["fragment", "fragmentName", "from", "optimistic"]), c = this.getFragmentDoc(n, i), u = typeof s > "u" || typeof s == "string" ? s : this.identify(s), f = !!t[Symbol.for("apollo.dataMasking")];
      if (globalThis.__DEV__ !== !1) {
        var h = i || fh(n).name.value;
        u || globalThis.__DEV__ !== !1 && X.warn(1, h);
      }
      var d = k(k({}, l), { returnPartialData: !0, id: u, query: c, optimistic: a }), E;
      return new Se(function(v) {
        return r.watch(k(k({}, d), { immediate: !0, callback: function(w) {
          var p = f ? $h(w.result, n, r, i) : w.result;
          if (
            // Always ensure we deliver the first result
            !(E && Fh(
              c,
              { data: E.result },
              { data: p },
              // TODO: Fix the type on WatchFragmentOptions so that TVars
              // extends OperationVariables
              t.variables
            ))
          ) {
            var y = {
              data: p,
              complete: !!w.complete
            };
            w.missing && (y.missing = gs(w.missing.map(function(_) {
              return _.missing;
            }))), E = k(k({}, w), { result: p }), v.next(y);
          }
        } }));
      });
    }, e.prototype.readFragment = function(t, r) {
      return r === void 0 && (r = !!t.optimistic), this.read(k(k({}, t), { query: this.getFragmentDoc(t.fragment, t.fragmentName), rootId: t.id, optimistic: r }));
    }, e.prototype.writeQuery = function(t) {
      var r = t.id, n = t.data, i = Jt(t, ["id", "data"]);
      return this.write(Object.assign(i, {
        dataId: r || "ROOT_QUERY",
        result: n
      }));
    }, e.prototype.writeFragment = function(t) {
      var r = t.id, n = t.data, i = t.fragment, s = t.fragmentName, o = Jt(t, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(o, {
        query: this.getFragmentDoc(i, s),
        dataId: r,
        result: n
      }));
    }, e.prototype.updateQuery = function(t, r) {
      return this.batch({
        update: function(n) {
          var i = n.readQuery(t), s = r(i);
          return s == null ? i : (n.writeQuery(k(k({}, t), { data: s })), s);
        }
      });
    }, e.prototype.updateFragment = function(t, r) {
      return this.batch({
        update: function(n) {
          var i = n.readFragment(t), s = r(i);
          return s == null ? i : (n.writeFragment(k(k({}, t), { data: s })), s);
        }
      });
    }, e;
  }()
);
globalThis.__DEV__ !== !1 && (Wh.prototype.getMemoryInternals = fg);
var Qh = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r, n, i, s) {
      var o, a = e.call(this, r) || this;
      if (a.message = r, a.path = n, a.query = i, a.variables = s, Array.isArray(a.path)) {
        a.missing = a.message;
        for (var l = a.path.length - 1; l >= 0; --l)
          a.missing = (o = {}, o[a.path[l]] = a.missing, o);
      } else
        a.missing = a.path;
      return a.__proto__ = t.prototype, a;
    }
    return t;
  }(Error)
), Ke = Object.prototype.hasOwnProperty;
function Nn(e) {
  return e == null;
}
function Hh(e, t) {
  var r = e.__typename, n = e.id, i = e._id;
  if (typeof r == "string" && (t && (t.keyObject = Nn(n) ? Nn(i) ? void 0 : { _id: i } : { id: n }), Nn(n) && !Nn(i) && (n = i), !Nn(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var Bh = {
  dataIdFromObject: Hh,
  addTypename: !0,
  resultCaching: !0,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: !1
};
function zy(e) {
  return pn(Bh, e);
}
function Gh(e) {
  var t = e.canonizeResults;
  return t === void 0 ? Bh.canonizeResults : t;
}
function Ky(e, t) {
  return ve(t) ? e.get(t.__ref, "__typename") : t && t.__typename;
}
var zh = /^[_a-z][_0-9a-z]*/i;
function Er(e) {
  var t = e.match(zh);
  return t ? t[0] : e;
}
function Mo(e, t, r) {
  return Ne(t) ? Ae(t) ? t.every(function(n) {
    return Mo(e, n, r);
  }) : e.selections.every(function(n) {
    if (yr(n) && yi(n, r)) {
      var i = er(n);
      return Ke.call(t, i) && (!n.selectionSet || Mo(n.selectionSet, t[i], r));
    }
    return !0;
  }) : !1;
}
function Xr(e) {
  return Ne(e) && !ve(e) && !Ae(e);
}
function Yy() {
  return new br();
}
function Kh(e, t) {
  var r = wn(Tn(e));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var i = r[n];
      return !i && t && (i = t.lookup(n)), i || null;
    }
  };
}
var Fi = /* @__PURE__ */ Object.create(null), Qs = function() {
  return Fi;
}, yc = /* @__PURE__ */ Object.create(null), li = (
  /** @class */
  function() {
    function e(t, r) {
      var n = this;
      this.policies = t, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, s) {
        return zi(ve(i) ? n.get(i.__ref, s) : i && i[s]);
      }, this.canRead = function(i) {
        return ve(i) ? n.has(i.__ref) : typeof i == "object";
      }, this.toReference = function(i, s) {
        if (typeof i == "string")
          return sn(i);
        if (ve(i))
          return i;
        var o = n.policies.identify(i)[0];
        if (o) {
          var a = sn(o);
          return s && n.merge(o, i), a;
        }
      };
    }
    return e.prototype.toObject = function() {
      return k({}, this.data);
    }, e.prototype.has = function(t) {
      return this.lookup(t, !0) !== void 0;
    }, e.prototype.get = function(t, r) {
      if (this.group.depend(t, r), Ke.call(this.data, t)) {
        var n = this.data[t];
        if (n && Ke.call(n, r))
          return n[r];
      }
      if (r === "__typename" && Ke.call(this.policies.rootTypenamesById, t))
        return this.policies.rootTypenamesById[t];
      if (this instanceof ar)
        return this.parent.get(t, r);
    }, e.prototype.lookup = function(t, r) {
      if (r && this.group.depend(t, "__exists"), Ke.call(this.data, t))
        return this.data[t];
      if (this instanceof ar)
        return this.parent.lookup(t, r);
      if (this.policies.rootTypenamesById[t])
        return /* @__PURE__ */ Object.create(null);
    }, e.prototype.merge = function(t, r) {
      var n = this, i;
      ve(t) && (t = t.__ref), ve(r) && (r = r.__ref);
      var s = typeof t == "string" ? this.lookup(i = t) : t, o = typeof r == "string" ? this.lookup(i = r) : r;
      if (o) {
        X(typeof i == "string", 2);
        var a = new br(Jy).merge(s, o);
        if (this.data[i] = a, a !== s && (delete this.refs[i], this.group.caching)) {
          var l = /* @__PURE__ */ Object.create(null);
          s || (l.__exists = 1), Object.keys(o).forEach(function(c) {
            if (!s || s[c] !== a[c]) {
              l[c] = 1;
              var u = Er(c);
              u !== c && !n.policies.hasKeyArgs(a.__typename, u) && (l[u] = 1), a[c] === void 0 && !(n instanceof ar) && delete a[c];
            }
          }), l.__typename && !(s && s.__typename) && // Since we return default root __typename strings
          // automatically from store.get, we don't need to dirty the
          // ROOT_QUERY.__typename field if merged.__typename is equal
          // to the default string (usually "Query").
          this.policies.rootTypenamesById[i] === a.__typename && delete l.__typename, Object.keys(l).forEach(function(c) {
            return n.group.dirty(i, c);
          });
        }
      }
    }, e.prototype.modify = function(t, r) {
      var n = this, i = this.lookup(t);
      if (i) {
        var s = /* @__PURE__ */ Object.create(null), o = !1, a = !0, l = {
          DELETE: Fi,
          INVALIDATE: yc,
          isReference: ve,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(c, u) {
            return n.policies.readField(typeof c == "string" ? {
              fieldName: c,
              from: u || sn(t)
            } : c, { store: n });
          }
        };
        if (Object.keys(i).forEach(function(c) {
          var u = Er(c), f = i[c];
          if (f !== void 0) {
            var h = typeof r == "function" ? r : r[c] || r[u];
            if (h) {
              var d = h === Qs ? Fi : h(zi(f), k(k({}, l), { fieldName: u, storeFieldName: c, storage: n.getStorage(t, c) }));
              if (d === yc)
                n.group.dirty(t, c);
              else if (d === Fi && (d = void 0), d !== f && (s[c] = d, o = !0, f = d, globalThis.__DEV__ !== !1)) {
                var E = function(T) {
                  if (n.lookup(T.__ref) === void 0)
                    return globalThis.__DEV__ !== !1 && X.warn(3, T), !0;
                };
                if (ve(d))
                  E(d);
                else if (Array.isArray(d))
                  for (var v = !1, w = void 0, p = 0, y = d; p < y.length; p++) {
                    var _ = y[p];
                    if (ve(_)) {
                      if (v = !0, E(_))
                        break;
                    } else if (typeof _ == "object" && _) {
                      var b = n.policies.identify(_)[0];
                      b && (w = _);
                    }
                    if (v && w !== void 0) {
                      globalThis.__DEV__ !== !1 && X.warn(4, w);
                      break;
                    }
                  }
              }
            }
            f !== void 0 && (a = !1);
          }
        }), o)
          return this.merge(t, s), a && (this instanceof ar ? this.data[t] = void 0 : delete this.data[t], this.group.dirty(t, "__exists")), !0;
      }
      return !1;
    }, e.prototype.delete = function(t, r, n) {
      var i, s = this.lookup(t);
      if (s) {
        var o = this.getFieldValue(s, "__typename"), a = r && n ? this.policies.getStoreFieldName({ typename: o, fieldName: r, args: n }) : r;
        return this.modify(t, a ? (i = {}, i[a] = Qs, i) : Qs);
      }
      return !1;
    }, e.prototype.evict = function(t, r) {
      var n = !1;
      return t.id && (Ke.call(this.data, t.id) && (n = this.delete(t.id, t.fieldName, t.args)), this instanceof ar && this !== r && (n = this.parent.evict(t, r) || n), (t.fieldName || n) && this.group.dirty(t.id, t.fieldName || "__exists")), n;
    }, e.prototype.clear = function() {
      this.replace(null);
    }, e.prototype.extract = function() {
      var t = this, r = this.toObject(), n = [];
      return this.getRootIdSet().forEach(function(i) {
        Ke.call(t.policies.rootTypenamesById, i) || n.push(i);
      }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
    }, e.prototype.replace = function(t) {
      var r = this;
      if (Object.keys(this.data).forEach(function(s) {
        t && Ke.call(t, s) || r.delete(s);
      }), t) {
        var n = t.__META, i = Jt(t, ["__META"]);
        Object.keys(i).forEach(function(s) {
          r.merge(s, i[s]);
        }), n && n.extraRootIds.forEach(this.retain, this);
      }
    }, e.prototype.retain = function(t) {
      return this.rootIds[t] = (this.rootIds[t] || 0) + 1;
    }, e.prototype.release = function(t) {
      if (this.rootIds[t] > 0) {
        var r = --this.rootIds[t];
        return r || delete this.rootIds[t], r;
      }
      return 0;
    }, e.prototype.getRootIdSet = function(t) {
      return t === void 0 && (t = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(t.add, t), this instanceof ar ? this.parent.getRootIdSet(t) : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t), t;
    }, e.prototype.gc = function() {
      var t = this, r = this.getRootIdSet(), n = this.toObject();
      r.forEach(function(o) {
        Ke.call(n, o) && (Object.keys(t.findChildRefIds(o)).forEach(r.add, r), delete n[o]);
      });
      var i = Object.keys(n);
      if (i.length) {
        for (var s = this; s instanceof ar; )
          s = s.parent;
        i.forEach(function(o) {
          return s.delete(o);
        });
      }
      return i;
    }, e.prototype.findChildRefIds = function(t) {
      if (!Ke.call(this.refs, t)) {
        var r = this.refs[t] = /* @__PURE__ */ Object.create(null), n = this.data[t];
        if (!n)
          return r;
        var i = /* @__PURE__ */ new Set([n]);
        i.forEach(function(s) {
          ve(s) && (r[s.__ref] = !0), Ne(s) && Object.keys(s).forEach(function(o) {
            var a = s[o];
            Ne(a) && i.add(a);
          });
        });
      }
      return this.refs[t];
    }, e.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    }, e;
  }()
), Yh = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = null), this.caching = t, this.parent = r, this.d = null, this.resetCaching();
    }
    return e.prototype.resetCaching = function() {
      this.d = this.caching ? Sh() : null, this.keyMaker = new ir(jr);
    }, e.prototype.depend = function(t, r) {
      if (this.d) {
        this.d(Hs(t, r));
        var n = Er(r);
        n !== r && this.d(Hs(t, n)), this.parent && this.parent.depend(t, r);
      }
    }, e.prototype.dirty = function(t, r) {
      this.d && this.d.dirty(
        Hs(t, r),
        // When storeFieldName === "__exists", that means the entity identified
        // by dataId has either disappeared from the cache or was newly added,
        // so the result caching system would do well to "forget everything it
        // knows" about that object. To achieve that kind of invalidation, we
        // not only dirty the associated result cache entry, but also remove it
        // completely from the dependency graph. For the optimism implementation
        // details, see https://github.com/benjamn/optimism/pull/195.
        r === "__exists" ? "forget" : "setDirty"
      );
    }, e;
  }()
);
function Hs(e, t) {
  return t + "#" + e;
}
function _c(e, t) {
  Kn(e) && e.group.depend(t, "__exists");
}
(function(e) {
  var t = (
    /** @class */
    function(r) {
      At(n, r);
      function n(i) {
        var s = i.policies, o = i.resultCaching, a = o === void 0 ? !0 : o, l = i.seed, c = r.call(this, s, new Yh(a)) || this;
        return c.stump = new Xy(c), c.storageTrie = new ir(jr), l && c.replace(l), c;
      }
      return n.prototype.addLayer = function(i, s) {
        return this.stump.addLayer(i, s);
      }, n.prototype.removeLayer = function() {
        return this;
      }, n.prototype.getStorage = function() {
        return this.storageTrie.lookupArray(arguments);
      }, n;
    }(e)
  );
  e.Root = t;
})(li || (li = {}));
var ar = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r, n, i, s) {
      var o = e.call(this, n.policies, s) || this;
      return o.id = r, o.parent = n, o.replay = i, o.group = s, i(o), o;
    }
    return t.prototype.addLayer = function(r, n) {
      return new t(r, this, n, this.group);
    }, t.prototype.removeLayer = function(r) {
      var n = this, i = this.parent.removeLayer(r);
      return r === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(s) {
        var o = n.data[s], a = i.lookup(s);
        a ? o ? o !== a && Object.keys(o).forEach(function(l) {
          Oe(o[l], a[l]) || n.group.dirty(s, l);
        }) : (n.group.dirty(s, "__exists"), Object.keys(a).forEach(function(l) {
          n.group.dirty(s, l);
        })) : n.delete(s);
      }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
    }, t.prototype.toObject = function() {
      return k(k({}, this.parent.toObject()), this.data);
    }, t.prototype.findChildRefIds = function(r) {
      var n = this.parent.findChildRefIds(r);
      return Ke.call(this.data, r) ? k(k({}, n), e.prototype.findChildRefIds.call(this, r)) : n;
    }, t.prototype.getStorage = function() {
      for (var r = this.parent; r.parent; )
        r = r.parent;
      return r.getStorage.apply(
        r,
        // @ts-expect-error
        arguments
      );
    }, t;
  }(li)
), Xy = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r) {
      return e.call(this, "EntityStore.Stump", r, function() {
      }, new Yh(r.group.caching, r.group)) || this;
    }
    return t.prototype.removeLayer = function() {
      return this;
    }, t.prototype.merge = function(r, n) {
      return this.parent.merge(r, n);
    }, t;
  }(ar)
);
function Jy(e, t, r) {
  var n = e[r], i = t[r];
  return Oe(n, i) ? n : i;
}
function Kn(e) {
  return !!(e instanceof li && e.group.caching);
}
function Zy(e) {
  return Ne(e) ? Ae(e) ? e.slice(0) : k({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var bc = (
  /** @class */
  function() {
    function e() {
      this.known = new (Pa ? WeakSet : Set)(), this.pool = new ir(jr), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
    }
    return e.prototype.isKnown = function(t) {
      return Ne(t) && this.known.has(t);
    }, e.prototype.pass = function(t) {
      if (Ne(t)) {
        var r = Zy(t);
        return this.passes.set(r, t), r;
      }
      return t;
    }, e.prototype.admit = function(t) {
      var r = this;
      if (Ne(t)) {
        var n = this.passes.get(t);
        if (n)
          return n;
        var i = Object.getPrototypeOf(t);
        switch (i) {
          case Array.prototype: {
            if (this.known.has(t))
              return t;
            var s = t.map(this.admit, this), o = this.pool.lookupArray(s);
            return o.array || (this.known.add(o.array = s), globalThis.__DEV__ !== !1 && Object.freeze(s)), o.array;
          }
          case null:
          case Object.prototype: {
            if (this.known.has(t))
              return t;
            var a = Object.getPrototypeOf(t), l = [a], c = this.sortedKeys(t);
            l.push(c.json);
            var u = l.length;
            c.sorted.forEach(function(d) {
              l.push(r.admit(t[d]));
            });
            var o = this.pool.lookupArray(l);
            if (!o.object) {
              var f = o.object = Object.create(a);
              this.known.add(f), c.sorted.forEach(function(d, E) {
                f[d] = l[u + E];
              }), globalThis.__DEV__ !== !1 && Object.freeze(f);
            }
            return o.object;
          }
        }
      }
      return t;
    }, e.prototype.sortedKeys = function(t) {
      var r = Object.keys(t), n = this.pool.lookupArray(r);
      if (!n.keys) {
        r.sort();
        var i = JSON.stringify(r);
        (n.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, n.keys = { sorted: r, json: i });
      }
      return n.keys;
    }, e;
  }()
);
function Ec(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    e.context.canonizeResults
  ];
}
var e_ = (
  /** @class */
  function() {
    function e(t) {
      var r = this;
      this.knownResults = new (jr ? WeakMap : Map)(), this.config = pn(t, {
        addTypename: t.addTypename !== !1,
        canonizeResults: Gh(t)
      }), this.canon = t.canon || new bc(), this.executeSelectionSet = ai(function(n) {
        var i, s = n.context.canonizeResults, o = Ec(n);
        o[3] = !s;
        var a = (i = r.executeSelectionSet).peek.apply(i, o);
        return a ? s ? k(k({}, a), {
          // If we previously read this result without canonizing it, we can
          // reuse that result simply by canonizing it now.
          result: r.canon.admit(a.result)
        }) : a : (_c(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
      }, {
        max: this.config.resultCacheMaxSize || Zt["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: Ec,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(n, i, s, o) {
          if (Kn(s.store))
            return s.store.makeCacheKey(n, ve(i) ? i.__ref : i, s.varString, o);
        }
      }), this.executeSubSelectedArray = ai(function(n) {
        return _c(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
      }, {
        max: this.config.resultCacheMaxSize || Zt["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(n) {
          var i = n.field, s = n.array, o = n.context;
          if (Kn(o.store))
            return o.store.makeCacheKey(i, s, o.varString);
        }
      });
    }
    return e.prototype.resetCanon = function() {
      this.canon = new bc();
    }, e.prototype.diffQueryAgainstStore = function(t) {
      var r = t.store, n = t.query, i = t.rootId, s = i === void 0 ? "ROOT_QUERY" : i, o = t.variables, a = t.returnPartialData, l = a === void 0 ? !0 : a, c = t.canonizeResults, u = c === void 0 ? this.config.canonizeResults : c, f = this.config.cache.policies;
      o = k(k({}, Na(uh(n))), o);
      var h = sn(s), d = this.executeSelectionSet({
        selectionSet: _i(n).selectionSet,
        objectOrReference: h,
        enclosingRef: h,
        context: k({ store: r, query: n, policies: f, variables: o, varString: gr(o), canonizeResults: u }, Kh(n, this.config.fragments))
      }), E;
      if (d.missing && (E = [
        new Qh(t_(d.missing), d.missing, n, o)
      ], !l))
        throw E[0];
      return {
        result: d.result,
        complete: !E,
        missing: E
      };
    }, e.prototype.isFresh = function(t, r, n, i) {
      if (Kn(i.store) && this.knownResults.get(t) === n) {
        var s = this.executeSelectionSet.peek(
          n,
          r,
          i,
          // If result is canonical, then it could only have been previously
          // cached by the canonizing version of executeSelectionSet, so we can
          // avoid checking both possibilities here.
          this.canon.isKnown(t)
        );
        if (s && t === s.result)
          return !0;
      }
      return !1;
    }, e.prototype.execSelectionSetImpl = function(t) {
      var r = this, n = t.selectionSet, i = t.objectOrReference, s = t.enclosingRef, o = t.context;
      if (ve(i) && !o.policies.rootTypenamesById[i.__ref] && !o.store.has(i.__ref))
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(i.__ref, " object")
        };
      var a = o.variables, l = o.policies, c = o.store, u = c.getFieldValue(i, "__typename"), f = [], h, d = new br();
      this.config.addTypename && typeof u == "string" && !l.rootIdsByTypename[u] && f.push({ __typename: u });
      function E(_, b) {
        var T;
        return _.missing && (h = d.merge(h, (T = {}, T[b] = _.missing, T))), _.result;
      }
      var v = new Set(n.selections);
      v.forEach(function(_) {
        var b, T;
        if (yi(_, a))
          if (yr(_)) {
            var D = l.readField({
              fieldName: _.name.value,
              field: _,
              variables: o.variables,
              from: i
            }, o), P = er(_);
            D === void 0 ? Ma.added(_) || (h = d.merge(h, (b = {}, b[P] = "Can't find field '".concat(_.name.value, "' on ").concat(ve(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), b))) : Ae(D) ? D.length > 0 && (D = E(r.executeSubSelectedArray({
              field: _,
              array: D,
              enclosingRef: s,
              context: o
            }), P)) : _.selectionSet ? D != null && (D = E(r.executeSelectionSet({
              selectionSet: _.selectionSet,
              objectOrReference: D,
              enclosingRef: ve(D) ? D : s,
              context: o
            }), P)) : o.canonizeResults && (D = r.canon.pass(D)), D !== void 0 && f.push((T = {}, T[P] = D, T));
          } else {
            var q = hs(_, o.lookupFragment);
            if (!q && _.kind === Ie.FRAGMENT_SPREAD)
              throw at(10, _.name.value);
            q && l.fragmentMatches(q, u) && q.selectionSet.selections.forEach(v.add, v);
          }
      });
      var w = gs(f), p = { result: w, missing: h }, y = o.canonizeResults ? this.canon.admit(p) : zi(p);
      return y.result && this.knownResults.set(y.result, n), y;
    }, e.prototype.execSubSelectedArrayImpl = function(t) {
      var r = this, n = t.field, i = t.array, s = t.enclosingRef, o = t.context, a, l = new br();
      function c(u, f) {
        var h;
        return u.missing && (a = l.merge(a, (h = {}, h[f] = u.missing, h))), u.result;
      }
      return n.selectionSet && (i = i.filter(o.store.canRead)), i = i.map(function(u, f) {
        return u === null ? null : Ae(u) ? c(r.executeSubSelectedArray({
          field: n,
          array: u,
          enclosingRef: s,
          context: o
        }), f) : n.selectionSet ? c(r.executeSelectionSet({
          selectionSet: n.selectionSet,
          objectOrReference: u,
          enclosingRef: ve(u) ? u : s,
          context: o
        }), f) : (globalThis.__DEV__ !== !1 && r_(o.store, n, u), u);
      }), {
        result: o.canonizeResults ? this.canon.admit(i) : i,
        missing: a
      };
    }, e;
  }()
);
function t_(e) {
  try {
    JSON.stringify(e, function(t, r) {
      if (typeof r == "string")
        throw r;
      return r;
    });
  } catch (t) {
    return t;
  }
}
function r_(e, t, r) {
  if (!t.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(i) {
      Ne(i) && (X(
        !ve(i),
        11,
        Ky(e, i),
        t.name.value
      ), Object.values(i).forEach(n.add, n));
    });
  }
}
var Wa = new ps(), Sc = /* @__PURE__ */ new WeakMap();
function Yn(e) {
  var t = Sc.get(e);
  return t || Sc.set(e, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: Sh()
  }), t;
}
function wc(e) {
  Yn(e).vars.forEach(function(t) {
    return t.forgetCache(e);
  });
}
function n_(e) {
  Yn(e).vars.forEach(function(t) {
    return t.attachCache(e);
  });
}
function i_(e) {
  var t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(s) {
    if (arguments.length > 0) {
      if (e !== s) {
        e = s, t.forEach(function(l) {
          Yn(l).dep.dirty(n), s_(l);
        });
        var o = Array.from(r);
        r.clear(), o.forEach(function(l) {
          return l(e);
        });
      }
    } else {
      var a = Wa.getValue();
      a && (i(a), Yn(a).dep(n));
    }
    return e;
  };
  n.onNextChange = function(s) {
    return r.add(s), function() {
      r.delete(s);
    };
  };
  var i = n.attachCache = function(s) {
    return t.add(s), Yn(s).vars.add(n), n;
  };
  return n.forgetCache = function(s) {
    return t.delete(s);
  }, n;
}
function s_(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var Oc = /* @__PURE__ */ Object.create(null);
function Qa(e) {
  var t = JSON.stringify(e);
  return Oc[t] || (Oc[t] = /* @__PURE__ */ Object.create(null));
}
function Tc(e) {
  var t = Qa(e);
  return t.keyFieldsFn || (t.keyFieldsFn = function(r, n) {
    var i = function(o, a) {
      return n.readField(a, o);
    }, s = n.keyObject = Ha(e, function(o) {
      var a = an(
        n.storeObject,
        o,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        i
      );
      return a === void 0 && r !== n.storeObject && Ke.call(r, o[0]) && (a = an(r, o, Jh)), X(a !== void 0, 5, o.join("."), r), a;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(s));
  });
}
function Ic(e) {
  var t = Qa(e);
  return t.keyArgsFn || (t.keyArgsFn = function(r, n) {
    var i = n.field, s = n.variables, o = n.fieldName, a = Ha(e, function(c) {
      var u = c[0], f = u.charAt(0);
      if (f === "@") {
        if (i && $t(i.directives)) {
          var h = u.slice(1), d = i.directives.find(function(p) {
            return p.name.value === h;
          }), E = d && ds(d, s);
          return E && an(
            E,
            // If keyPath.length === 1, this code calls extractKeyPath with an
            // empty path, which works because it uses directiveArgs as the
            // extracted value.
            c.slice(1)
          );
        }
        return;
      }
      if (f === "$") {
        var v = u.slice(1);
        if (s && Ke.call(s, v)) {
          var w = c.slice(0);
          return w[0] = v, an(s, w);
        }
        return;
      }
      if (r)
        return an(r, c);
    }), l = JSON.stringify(a);
    return (r || l !== "{}") && (o += ":" + l), o;
  });
}
function Ha(e, t) {
  var r = new br();
  return Xh(e).reduce(function(n, i) {
    var s, o = t(i);
    if (o !== void 0) {
      for (var a = i.length - 1; a >= 0; --a)
        o = (s = {}, s[i[a]] = o, s);
      n = r.merge(n, o);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function Xh(e) {
  var t = Qa(e);
  if (!t.paths) {
    var r = t.paths = [], n = [];
    e.forEach(function(i, s) {
      Ae(i) ? (Xh(i).forEach(function(o) {
        return r.push(n.concat(o));
      }), n.length = 0) : (n.push(i), Ae(e[s + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return t.paths;
}
function Jh(e, t) {
  return e[t];
}
function an(e, t, r) {
  return r = r || Jh, Zh(t.reduce(function n(i, s) {
    return Ae(i) ? i.map(function(o) {
      return n(o, s);
    }) : i && r(i, s);
  }, e));
}
function Zh(e) {
  return Ne(e) ? Ae(e) ? e.map(Zh) : Ha(Object.keys(e).sort(), function(t) {
    return an(e, t);
  }) : e;
}
function Fo(e) {
  return e.args !== void 0 ? e.args : e.field ? ds(e.field, e.variables) : null;
}
var o_ = function() {
}, Cc = function(e, t) {
  return t.fieldName;
}, Rc = function(e, t, r) {
  var n = r.mergeObjects;
  return n(e, t);
}, kc = function(e, t) {
  return t;
}, a_ = (
  /** @class */
  function() {
    function e(t) {
      this.config = t, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = k({ dataIdFromObject: Hh }, t), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), t.possibleTypes && this.addPossibleTypes(t.possibleTypes), t.typePolicies && this.addTypePolicies(t.typePolicies);
    }
    return e.prototype.identify = function(t, r) {
      var n, i = this, s = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || t.__typename;
      if (s === this.rootTypenamesById.ROOT_QUERY)
        return ["ROOT_QUERY"];
      var o = r && r.storeObject || t, a = k(k({}, r), { typename: s, storeObject: o, readField: r && r.readField || function() {
        var f = Ba(arguments, o);
        return i.readField(f, {
          store: i.cache.data,
          variables: f.variables
        });
      } }), l, c = s && this.getTypePolicy(s), u = c && c.keyFn || this.config.dataIdFromObject;
      return $a.withValue(!0, function() {
        for (; u; ) {
          var f = u(k(k({}, t), o), a);
          if (Ae(f))
            u = Tc(f);
          else {
            l = f;
            break;
          }
        }
      }), l = l ? String(l) : void 0, a.keyObject ? [l, a.keyObject] : [l];
    }, e.prototype.addTypePolicies = function(t) {
      var r = this;
      Object.keys(t).forEach(function(n) {
        var i = t[n], s = i.queryType, o = i.mutationType, a = i.subscriptionType, l = Jt(i, ["queryType", "mutationType", "subscriptionType"]);
        s && r.setRootTypename("Query", n), o && r.setRootTypename("Mutation", n), a && r.setRootTypename("Subscription", n), Ke.call(r.toBeAdded, n) ? r.toBeAdded[n].push(l) : r.toBeAdded[n] = [l];
      });
    }, e.prototype.updateTypePolicy = function(t, r) {
      var n = this, i = this.getTypePolicy(t), s = r.keyFields, o = r.fields;
      function a(l, c) {
        l.merge = typeof c == "function" ? c : c === !0 ? Rc : c === !1 ? kc : l.merge;
      }
      a(i, r.merge), i.keyFn = // Pass false to disable normalization for this typename.
      s === !1 ? o_ : Ae(s) ? Tc(s) : typeof s == "function" ? s : i.keyFn, o && Object.keys(o).forEach(function(l) {
        var c = n.getFieldPolicy(t, l, !0), u = o[l];
        if (typeof u == "function")
          c.read = u;
        else {
          var f = u.keyArgs, h = u.read, d = u.merge;
          c.keyFn = // Pass false to disable argument-based differentiation of
          // field identities.
          f === !1 ? Cc : Ae(f) ? Ic(f) : typeof f == "function" ? f : c.keyFn, typeof h == "function" && (c.read = h), a(c, d);
        }
        c.read && c.merge && (c.keyFn = c.keyFn || Cc);
      });
    }, e.prototype.setRootTypename = function(t, r) {
      r === void 0 && (r = t);
      var n = "ROOT_" + t.toUpperCase(), i = this.rootTypenamesById[n];
      r !== i && (X(!i || i === t, 6, t), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
    }, e.prototype.addPossibleTypes = function(t) {
      var r = this;
      this.usingPossibleTypes = !0, Object.keys(t).forEach(function(n) {
        r.getSupertypeSet(n, !0), t[n].forEach(function(i) {
          r.getSupertypeSet(i, !0).add(n);
          var s = i.match(zh);
          (!s || s[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
        });
      });
    }, e.prototype.getTypePolicy = function(t) {
      var r = this;
      if (!Ke.call(this.typePolicies, t)) {
        var n = this.typePolicies[t] = /* @__PURE__ */ Object.create(null);
        n.fields = /* @__PURE__ */ Object.create(null);
        var i = this.supertypeMap.get(t);
        !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(t, !0), this.fuzzySubtypes.forEach(function(o, a) {
          if (o.test(t)) {
            var l = r.supertypeMap.get(a);
            l && l.forEach(function(c) {
              return i.add(c);
            });
          }
        })), i && i.size && i.forEach(function(o) {
          var a = r.getTypePolicy(o), l = a.fields, c = Jt(a, ["fields"]);
          Object.assign(n, c), Object.assign(n.fields, l);
        });
      }
      var s = this.toBeAdded[t];
      return s && s.length && s.splice(0).forEach(function(o) {
        r.updateTypePolicy(t, o);
      }), this.typePolicies[t];
    }, e.prototype.getFieldPolicy = function(t, r, n) {
      if (t) {
        var i = this.getTypePolicy(t).fields;
        return i[r] || n && (i[r] = /* @__PURE__ */ Object.create(null));
      }
    }, e.prototype.getSupertypeSet = function(t, r) {
      var n = this.supertypeMap.get(t);
      return !n && r && this.supertypeMap.set(t, n = /* @__PURE__ */ new Set()), n;
    }, e.prototype.fragmentMatches = function(t, r, n, i) {
      var s = this;
      if (!t.typeCondition)
        return !0;
      if (!r)
        return !1;
      var o = t.typeCondition.name.value;
      if (r === o)
        return !0;
      if (this.usingPossibleTypes && this.supertypeMap.has(o))
        for (var a = this.getSupertypeSet(r, !0), l = [a], c = function(E) {
          var v = s.getSupertypeSet(E, !1);
          v && v.size && l.indexOf(v) < 0 && l.push(v);
        }, u = !!(n && this.fuzzySubtypes.size), f = !1, h = 0; h < l.length; ++h) {
          var d = l[h];
          if (d.has(o))
            return a.has(o) || (f && globalThis.__DEV__ !== !1 && X.warn(7, r, o), a.add(o)), !0;
          d.forEach(c), u && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          h === l.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          Mo(t.selectionSet, n, i) && (u = !1, f = !0, this.fuzzySubtypes.forEach(function(E, v) {
            var w = r.match(E);
            w && w[0] === r && c(v);
          }));
        }
      return !1;
    }, e.prototype.hasKeyArgs = function(t, r) {
      var n = this.getFieldPolicy(t, r, !1);
      return !!(n && n.keyFn);
    }, e.prototype.getStoreFieldName = function(t) {
      var r = t.typename, n = t.fieldName, i = this.getFieldPolicy(r, n, !1), s, o = i && i.keyFn;
      if (o && r)
        for (var a = {
          typename: r,
          fieldName: n,
          field: t.field || null,
          variables: t.variables
        }, l = Fo(t); o; ) {
          var c = o(l, a);
          if (Ae(c))
            o = Ic(c);
          else {
            s = c || n;
            break;
          }
        }
      return s === void 0 && (s = t.field ? Rg(t.field, t.variables) : ch(n, Fo(t))), s === !1 ? n : n === Er(s) ? s : n + ":" + s;
    }, e.prototype.readField = function(t, r) {
      var n = t.from;
      if (n) {
        var i = t.field || t.fieldName;
        if (i) {
          if (t.typename === void 0) {
            var s = r.store.getFieldValue(n, "__typename");
            s && (t.typename = s);
          }
          var o = this.getStoreFieldName(t), a = Er(o), l = r.store.getFieldValue(n, o), c = this.getFieldPolicy(t.typename, a, !1), u = c && c.read;
          if (u) {
            var f = Dc(this, n, t, r, r.store.getStorage(ve(n) ? n.__ref : n, o));
            return Wa.withValue(this.cache, u, [
              l,
              f
            ]);
          }
          return l;
        }
      }
    }, e.prototype.getReadFunction = function(t, r) {
      var n = this.getFieldPolicy(t, r, !1);
      return n && n.read;
    }, e.prototype.getMergeFunction = function(t, r, n) {
      var i = this.getFieldPolicy(t, r, !1), s = i && i.merge;
      return !s && n && (i = this.getTypePolicy(n), s = i && i.merge), s;
    }, e.prototype.runMergeFunction = function(t, r, n, i, s) {
      var o = n.field, a = n.typename, l = n.merge;
      return l === Rc ? ed(i.store)(t, r) : l === kc ? r : (i.overwrite && (t = void 0), l(t, r, Dc(
        this,
        // Unlike options.readField for read functions, we do not fall
        // back to the current object if no foreignObjOrRef is provided,
        // because it's not clear what the current object should be for
        // merge functions: the (possibly undefined) existing object, or
        // the incoming object? If you think your merge function needs
        // to read sibling fields in order to produce a new value for
        // the current field, you might want to rethink your strategy,
        // because that's a recipe for making merge behavior sensitive
        // to the order in which fields are written into the cache.
        // However, readField(name, ref) is useful for merge functions
        // that need to deduplicate child objects and references.
        void 0,
        {
          typename: a,
          fieldName: o.name.value,
          field: o,
          variables: i.variables
        },
        i,
        s || /* @__PURE__ */ Object.create(null)
      )));
    }, e;
  }()
);
function Dc(e, t, r, n, i) {
  var s = e.getStoreFieldName(r), o = Er(s), a = r.variables || n.variables, l = n.store, c = l.toReference, u = l.canRead;
  return {
    args: Fo(r),
    field: r.field || null,
    fieldName: o,
    storeFieldName: s,
    variables: a,
    isReference: ve,
    toReference: c,
    storage: i,
    cache: e.cache,
    canRead: u,
    readField: function() {
      return e.readField(Ba(arguments, t, a), n);
    },
    mergeObjects: ed(n.store)
  };
}
function Ba(e, t, r) {
  var n = e[0], i = e[1], s = e.length, o;
  return typeof n == "string" ? o = {
    fieldName: n,
    // Default to objectOrReference only when no second argument was
    // passed for the from parameter, not when undefined is explicitly
    // passed as the second argument.
    from: s > 1 ? i : t
  } : (o = k({}, n), Ke.call(o, "from") || (o.from = t)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && X.warn(8, Jf(Array.from(e))), o.variables === void 0 && (o.variables = r), o;
}
function ed(e) {
  return function(r, n) {
    if (Ae(r) || Ae(n))
      throw at(9);
    if (Ne(r) && Ne(n)) {
      var i = e.getFieldValue(r, "__typename"), s = e.getFieldValue(n, "__typename"), o = i && s && i !== s;
      if (o)
        return n;
      if (ve(r) && Xr(n))
        return e.merge(r.__ref, n), r;
      if (Xr(r) && ve(n))
        return e.merge(r, n.__ref), n;
      if (Xr(r) && Xr(n))
        return k(k({}, r), n);
    }
    return n;
  };
}
function Bs(e, t, r) {
  var n = "".concat(t).concat(r), i = e.flavors.get(n);
  return i || e.flavors.set(n, i = e.clientOnly === t && e.deferred === r ? e : k(k({}, e), { clientOnly: t, deferred: r })), i;
}
var l_ = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.cache = t, this.reader = r, this.fragments = n;
    }
    return e.prototype.writeToStore = function(t, r) {
      var n = this, i = r.query, s = r.result, o = r.dataId, a = r.variables, l = r.overwrite, c = Fr(i), u = Yy();
      a = k(k({}, Na(c)), a);
      var f = k(k({ store: t, written: /* @__PURE__ */ Object.create(null), merge: function(d, E) {
        return u.merge(d, E);
      }, variables: a, varString: gr(a) }, Kh(i, this.fragments)), { overwrite: !!l, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), h = this.processSelectionSet({
        result: s || /* @__PURE__ */ Object.create(null),
        dataId: o,
        selectionSet: c.selectionSet,
        mergeTree: { map: /* @__PURE__ */ new Map() },
        context: f
      });
      if (!ve(h))
        throw at(12, s);
      return f.incomingById.forEach(function(d, E) {
        var v = d.storeObject, w = d.mergeTree, p = d.fieldNodeSet, y = sn(E);
        if (w && w.map.size) {
          var _ = n.applyMerges(w, y, v, f);
          if (ve(_))
            return;
          v = _;
        }
        if (globalThis.__DEV__ !== !1 && !f.overwrite) {
          var b = /* @__PURE__ */ Object.create(null);
          p.forEach(function(P) {
            P.selectionSet && (b[P.name.value] = !0);
          });
          var T = function(P) {
            return b[Er(P)] === !0;
          }, D = function(P) {
            var q = w && w.map.get(P);
            return !!(q && q.info && q.info.merge);
          };
          Object.keys(v).forEach(function(P) {
            T(P) && !D(P) && c_(y, v, P, f.store);
          });
        }
        t.merge(E, v);
      }), t.retain(h.__ref), h;
    }, e.prototype.processSelectionSet = function(t) {
      var r = this, n = t.dataId, i = t.result, s = t.selectionSet, o = t.context, a = t.mergeTree, l = this.cache.policies, c = /* @__PURE__ */ Object.create(null), u = n && l.rootTypenamesById[n] || Co(i, s, o.fragmentMap) || n && o.store.get(n, "__typename");
      typeof u == "string" && (c.__typename = u);
      var f = function() {
        var _ = Ba(arguments, c, o.variables);
        if (ve(_.from)) {
          var b = o.incomingById.get(_.from.__ref);
          if (b) {
            var T = l.readField(k(k({}, _), { from: b.storeObject }), o);
            if (T !== void 0)
              return T;
          }
        }
        return l.readField(_, o);
      }, h = /* @__PURE__ */ new Set();
      this.flattenFields(
        s,
        i,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        o,
        u
      ).forEach(function(_, b) {
        var T, D = er(b), P = i[D];
        if (h.add(b), P !== void 0) {
          var q = l.getStoreFieldName({
            typename: u,
            fieldName: b.name.value,
            field: b,
            variables: _.variables
          }), z = Pc(a, q), W = r.processFieldValue(
            P,
            b,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            b.selectionSet ? Bs(_, !1, !1) : _,
            z
          ), ie = void 0;
          b.selectionSet && (ve(W) || Xr(W)) && (ie = f("__typename", W));
          var te = l.getMergeFunction(u, b.name.value, ie);
          te ? z.info = {
            // TODO Check compatibility against any existing childTree.field?
            field: b,
            typename: u,
            merge: te
          } : Nc(a, q), c = _.merge(c, (T = {}, T[q] = W, T));
        } else globalThis.__DEV__ !== !1 && !_.clientOnly && !_.deferred && !Ma.added(b) && // If the field has a read function, it may be a synthetic field or
        // provide a default value, so its absence from the written data should
        // not be cause for alarm.
        !l.getReadFunction(u, b.name.value) && globalThis.__DEV__ !== !1 && X.error(13, er(b), i);
      });
      try {
        var d = l.identify(i, {
          typename: u,
          selectionSet: s,
          fragmentMap: o.fragmentMap,
          storeObject: c,
          readField: f
        }), E = d[0], v = d[1];
        n = n || E, v && (c = o.merge(c, v));
      } catch (_) {
        if (!n)
          throw _;
      }
      if (typeof n == "string") {
        var w = sn(n), p = o.written[n] || (o.written[n] = []);
        if (p.indexOf(s) >= 0 || (p.push(s), this.reader && this.reader.isFresh(i, w, s, o)))
          return w;
        var y = o.incomingById.get(n);
        return y ? (y.storeObject = o.merge(y.storeObject, c), y.mergeTree = Vo(y.mergeTree, a), h.forEach(function(_) {
          return y.fieldNodeSet.add(_);
        })) : o.incomingById.set(n, {
          storeObject: c,
          // Save a reference to mergeTree only if it is not empty, because
          // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
          // reused for entirely different parts of the result tree.
          mergeTree: Ki(a) ? void 0 : a,
          fieldNodeSet: h
        }), w;
      }
      return c;
    }, e.prototype.processFieldValue = function(t, r, n, i) {
      var s = this;
      return !r.selectionSet || t === null ? globalThis.__DEV__ !== !1 ? Dh(t) : t : Ae(t) ? t.map(function(o, a) {
        var l = s.processFieldValue(o, r, n, Pc(i, a));
        return Nc(i, a), l;
      }) : this.processSelectionSet({
        result: t,
        selectionSet: r.selectionSet,
        context: n,
        mergeTree: i
      });
    }, e.prototype.flattenFields = function(t, r, n, i) {
      i === void 0 && (i = Co(r, t, n.fragmentMap));
      var s = /* @__PURE__ */ new Map(), o = this.cache.policies, a = new ir(!1);
      return function l(c, u) {
        var f = a.lookup(
          c,
          // Because we take inheritedClientOnly and inheritedDeferred into
          // consideration here (in addition to selectionSet), it's possible for
          // the same selection set to be flattened more than once, if it appears
          // in the query with different @client and/or @directive configurations.
          u.clientOnly,
          u.deferred
        );
        f.visited || (f.visited = !0, c.selections.forEach(function(h) {
          if (yi(h, n.variables)) {
            var d = u.clientOnly, E = u.deferred;
            if (
              // Since the presence of @client or @defer on this field can only
              // cause clientOnly or deferred to become true, we can skip the
              // forEach loop if both clientOnly and deferred are already true.
              !(d && E) && $t(h.directives) && h.directives.forEach(function(p) {
                var y = p.name.value;
                if (y === "client" && (d = !0), y === "defer") {
                  var _ = ds(p, n.variables);
                  (!_ || _.if !== !1) && (E = !0);
                }
              }), yr(h)
            ) {
              var v = s.get(h);
              v && (d = d && v.clientOnly, E = E && v.deferred), s.set(h, Bs(n, d, E));
            } else {
              var w = hs(h, n.lookupFragment);
              if (!w && h.kind === Ie.FRAGMENT_SPREAD)
                throw at(14, h.name.value);
              w && o.fragmentMatches(w, i, r, n.variables) && l(w.selectionSet, Bs(n, d, E));
            }
          }
        }));
      }(t, n), s;
    }, e.prototype.applyMerges = function(t, r, n, i, s) {
      var o, a = this;
      if (t.map.size && !ve(n)) {
        var l = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !Ae(n) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (ve(r) || Xr(r)) ? r : void 0
        ), c = n;
        l && !s && (s = [ve(l) ? l.__ref : l]);
        var u, f = function(h, d) {
          return Ae(h) ? typeof d == "number" ? h[d] : void 0 : i.store.getFieldValue(h, String(d));
        };
        t.map.forEach(function(h, d) {
          var E = f(l, d), v = f(c, d);
          if (v !== void 0) {
            s && s.push(d);
            var w = a.applyMerges(h, E, v, i, s);
            w !== v && (u = u || /* @__PURE__ */ new Map(), u.set(d, w)), s && X(s.pop() === d);
          }
        }), u && (n = Ae(c) ? c.slice(0) : k({}, c), u.forEach(function(h, d) {
          n[d] = h;
        }));
      }
      return t.info ? this.cache.policies.runMergeFunction(r, n, t.info, i, s && (o = i.store).getStorage.apply(o, s)) : n;
    }, e;
  }()
), td = [];
function Pc(e, t) {
  var r = e.map;
  return r.has(t) || r.set(t, td.pop() || { map: /* @__PURE__ */ new Map() }), r.get(t);
}
function Vo(e, t) {
  if (e === t || !t || Ki(t))
    return e;
  if (!e || Ki(e))
    return t;
  var r = e.info && t.info ? k(k({}, e.info), t.info) : e.info || t.info, n = e.map.size && t.map.size, i = n ? /* @__PURE__ */ new Map() : e.map.size ? e.map : t.map, s = { info: r, map: i };
  if (n) {
    var o = new Set(t.map.keys());
    e.map.forEach(function(a, l) {
      s.map.set(l, Vo(a, t.map.get(l))), o.delete(l);
    }), o.forEach(function(a) {
      s.map.set(a, Vo(t.map.get(a), e.map.get(a)));
    });
  }
  return s;
}
function Ki(e) {
  return !e || !(e.info || e.map.size);
}
function Nc(e, t) {
  var r = e.map, n = r.get(t);
  n && Ki(n) && (td.push(n), r.delete(t));
}
var Ac = /* @__PURE__ */ new Set();
function c_(e, t, r, n) {
  var i = function(f) {
    var h = n.getFieldValue(f, r);
    return typeof h == "object" && h;
  }, s = i(e);
  if (s) {
    var o = i(t);
    if (o && !ve(s) && !Oe(s, o) && !Object.keys(s).every(function(f) {
      return n.getFieldValue(o, f) !== void 0;
    })) {
      var a = n.getFieldValue(e, "__typename") || n.getFieldValue(t, "__typename"), l = Er(r), c = "".concat(a, ".").concat(l);
      if (!Ac.has(c)) {
        Ac.add(c);
        var u = [];
        !Ae(s) && !Ae(o) && [s, o].forEach(function(f) {
          var h = n.getFieldValue(f, "__typename");
          typeof h == "string" && !u.includes(h) && u.push(h);
        }), globalThis.__DEV__ !== !1 && X.warn(15, l, a, u.length ? "either ensure all objects of type " + u.join(" and ") + " have an ID or a custom merge function, or " : "", c, k({}, s), k({}, o));
      }
    }
  }
}
var rd = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r) {
      r === void 0 && (r = {});
      var n = e.call(this) || this;
      return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new wh(Ma), n.assumeImmutableResults = !0, n.makeVar = i_, n.txCount = 0, n.config = zy(r), n.addTypename = !!n.config.addTypename, n.policies = new a_({
        cache: n,
        dataIdFromObject: n.config.dataIdFromObject,
        possibleTypes: n.config.possibleTypes,
        typePolicies: n.config.typePolicies
      }), n.init(), n;
    }
    return t.prototype.init = function() {
      var r = this.data = new li.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = r.stump, this.resetResultCache();
    }, t.prototype.resetResultCache = function(r) {
      var n = this, i = this.storeReader, s = this.config.fragments;
      this.storeWriter = new l_(this, this.storeReader = new e_({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: Gh(this.config),
        canon: r ? void 0 : i && i.canon,
        fragments: s
      }), s), this.maybeBroadcastWatch = ai(function(o, a) {
        return n.broadcastWatch(o, a);
      }, {
        max: this.config.resultCacheMaxSize || Zt["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(o) {
          var a = o.optimistic ? n.optimisticData : n.data;
          if (Kn(a)) {
            var l = o.optimistic, c = o.id, u = o.variables;
            return a.makeCacheKey(
              o.query,
              // Different watches can have the same query, optimistic
              // status, rootId, and variables, but if their callbacks are
              // different, the (identical) result needs to be delivered to
              // each distinct callback. The easiest way to achieve that
              // separation is to include c.callback in the cache key for
              // maybeBroadcastWatch calls. See issue #5733.
              o.callback,
              gr({ optimistic: l, id: c, variables: u })
            );
          }
        }
      }), (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(o) {
        return o.resetCaching();
      });
    }, t.prototype.restore = function(r) {
      return this.init(), r && this.data.replace(r), this;
    }, t.prototype.extract = function(r) {
      return r === void 0 && (r = !1), (r ? this.optimisticData : this.data).extract();
    }, t.prototype.read = function(r) {
      var n = r.returnPartialData, i = n === void 0 ? !1 : n;
      try {
        return this.storeReader.diffQueryAgainstStore(k(k({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
      } catch (s) {
        if (s instanceof Qh)
          return null;
        throw s;
      }
    }, t.prototype.write = function(r) {
      try {
        return ++this.txCount, this.storeWriter.writeToStore(this.data, r);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, t.prototype.modify = function(r) {
      if (Ke.call(r, "id") && !r.id)
        return !1;
      var n = r.optimistic ? this.optimisticData : this.data;
      try {
        return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, t.prototype.diff = function(r) {
      return this.storeReader.diffQueryAgainstStore(k(k({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
    }, t.prototype.watch = function(r) {
      var n = this;
      return this.watches.size || n_(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
        n.watches.delete(r) && !n.watches.size && wc(n), n.maybeBroadcastWatch.forget(r);
      };
    }, t.prototype.gc = function(r) {
      var n;
      gr.reset(), Nr.reset(), this.addTypenameTransform.resetCache(), (n = this.config.fragments) === null || n === void 0 || n.resetCaches();
      var i = this.optimisticData.gc();
      return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), i;
    }, t.prototype.retain = function(r, n) {
      return (n ? this.optimisticData : this.data).retain(r);
    }, t.prototype.release = function(r, n) {
      return (n ? this.optimisticData : this.data).release(r);
    }, t.prototype.identify = function(r) {
      if (ve(r))
        return r.__ref;
      try {
        return this.policies.identify(r)[0];
      } catch (n) {
        globalThis.__DEV__ !== !1 && X.warn(n);
      }
    }, t.prototype.evict = function(r) {
      if (!r.id) {
        if (Ke.call(r, "id"))
          return !1;
        r = k(k({}, r), { id: "ROOT_QUERY" });
      }
      try {
        return ++this.txCount, this.optimisticData.evict(r, this.data);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, t.prototype.reset = function(r) {
      var n = this;
      return this.init(), gr.reset(), r && r.discardWatches ? (this.watches.forEach(function(i) {
        return n.maybeBroadcastWatch.forget(i);
      }), this.watches.clear(), wc(this)) : this.broadcastWatches(), Promise.resolve();
    }, t.prototype.removeOptimistic = function(r) {
      var n = this.optimisticData.removeLayer(r);
      n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
    }, t.prototype.batch = function(r) {
      var n = this, i = r.update, s = r.optimistic, o = s === void 0 ? !0 : s, a = r.removeOptimistic, l = r.onWatchUpdated, c, u = function(h) {
        var d = n, E = d.data, v = d.optimisticData;
        ++n.txCount, h && (n.data = n.optimisticData = h);
        try {
          return c = i(n);
        } finally {
          --n.txCount, n.data = E, n.optimisticData = v;
        }
      }, f = /* @__PURE__ */ new Set();
      return l && !this.txCount && this.broadcastWatches(k(k({}, r), { onWatchUpdated: function(h) {
        return f.add(h), !1;
      } })), typeof o == "string" ? this.optimisticData = this.optimisticData.addLayer(o, u) : o === !1 ? u(this.data) : u(), typeof a == "string" && (this.optimisticData = this.optimisticData.removeLayer(a)), l && f.size ? (this.broadcastWatches(k(k({}, r), { onWatchUpdated: function(h, d) {
        var E = l.call(this, h, d);
        return E !== !1 && f.delete(h), E;
      } })), f.size && f.forEach(function(h) {
        return n.maybeBroadcastWatch.dirty(h);
      })) : this.broadcastWatches(r), c;
    }, t.prototype.performTransaction = function(r, n) {
      return this.batch({
        update: r,
        optimistic: n || n !== null
      });
    }, t.prototype.transformDocument = function(r) {
      return this.addTypenameToDocument(this.addFragmentsToDocument(r));
    }, t.prototype.fragmentMatches = function(r, n) {
      return this.policies.fragmentMatches(r, n);
    }, t.prototype.lookupFragment = function(r) {
      var n;
      return ((n = this.config.fragments) === null || n === void 0 ? void 0 : n.lookup(r)) || null;
    }, t.prototype.broadcastWatches = function(r) {
      var n = this;
      this.txCount || this.watches.forEach(function(i) {
        return n.maybeBroadcastWatch(i, r);
      });
    }, t.prototype.addFragmentsToDocument = function(r) {
      var n = this.config.fragments;
      return n ? n.transform(r) : r;
    }, t.prototype.addTypenameToDocument = function(r) {
      return this.addTypename ? this.addTypenameTransform.transformDocument(r) : r;
    }, t.prototype.broadcastWatch = function(r, n) {
      var i = r.lastDiff, s = this.diff(r);
      n && (r.optimistic && typeof n.optimistic == "string" && (s.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, s, i) === !1) || (!i || !Oe(i.result, s.result)) && r.callback(r.lastDiff = s, i);
    }, t;
  }(Wh)
);
globalThis.__DEV__ !== !1 && (rd.prototype.getMemoryInternals = ug);
var me;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(me || (me = {}));
function ln(e) {
  return e ? e < 7 : !1;
}
var Lc = Object.assign, u_ = Object.hasOwnProperty, jo = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r) {
      var n = r.queryManager, i = r.queryInfo, s = r.options, o = e.call(this, function(w) {
        try {
          var p = w._subscription._observer;
          p && !p.error && (p.error = f_);
        } catch {
        }
        var y = !o.observers.size;
        o.observers.add(w);
        var _ = o.last;
        return _ && _.error ? w.error && w.error(_.error) : _ && _.result && w.next && w.next(o.maskResult(_.result)), y && o.reobserve().catch(function() {
        }), function() {
          o.observers.delete(w) && !o.observers.size && o.tearDownQuery();
        };
      }) || this;
      o.observers = /* @__PURE__ */ new Set(), o.subscriptions = /* @__PURE__ */ new Set(), o.queryInfo = i, o.queryManager = n, o.waitForOwnResult = Gs(s.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o), o.maskResult = o.maskResult.bind(o);
      var a = n.defaultOptions.watchQuery, l = a === void 0 ? {} : a, c = l.fetchPolicy, u = c === void 0 ? "cache-first" : c, f = s.fetchPolicy, h = f === void 0 ? u : f, d = s.initialFetchPolicy, E = d === void 0 ? h === "standby" ? u : h : d;
      o.options = k(k({}, s), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy: E,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy: h
      }), o.queryId = i.queryId || n.generateQueryId();
      var v = Fr(o.query);
      return o.queryName = v && v.name && v.name.value, o;
    }
    return Object.defineProperty(t.prototype, "query", {
      // The `query` computed property will always reflect the document transformed
      // by the last run query. `this.options.query` will always reflect the raw
      // untransformed query to ensure document transforms with runtime conditionals
      // are run on the original document.
      get: function() {
        return this.lastQuery || this.options.query;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "variables", {
      // Computed shorthand for this.options.variables, preserved for
      // backwards compatibility.
      /**
       * An object containing the variables that were provided for the query.
       */
      get: function() {
        return this.options.variables;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.result = function() {
      var r = this;
      return new Promise(function(n, i) {
        var s = {
          next: function(a) {
            n(a), r.observers.delete(s), r.observers.size || r.queryManager.removeQuery(r.queryId), setTimeout(function() {
              o.unsubscribe();
            }, 0);
          },
          error: i
        }, o = r.subscribe(s);
      });
    }, t.prototype.resetDiff = function() {
      this.queryInfo.resetDiff();
    }, t.prototype.getCurrentFullResult = function(r) {
      r === void 0 && (r = !0);
      var n = this.getLastResult(!0), i = this.queryInfo.networkStatus || n && n.networkStatus || me.ready, s = k(k({}, n), { loading: ln(i), networkStatus: i }), o = this.options.fetchPolicy, a = o === void 0 ? "cache-first" : o;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        !(Gs(a) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
      ) if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var l = this.queryInfo.getDiff();
        (l.complete || this.options.returnPartialData) && (s.data = l.result), Oe(s.data, {}) && (s.data = void 0), l.complete ? (delete s.partial, l.complete && s.networkStatus === me.loading && (a === "cache-first" || a === "cache-only") && (s.networkStatus = me.ready, s.loading = !1)) : s.partial = !0, s.networkStatus === me.ready && (s.error || s.errors) && (s.networkStatus = me.error), globalThis.__DEV__ !== !1 && !l.complete && !this.options.partialRefetch && !s.loading && !s.data && !s.error && id(l.missing);
      }
      return r && this.updateLastResult(s), s;
    }, t.prototype.getCurrentResult = function(r) {
      return r === void 0 && (r = !0), this.maskResult(this.getCurrentFullResult(r));
    }, t.prototype.isDifferentFromLastResult = function(r, n) {
      if (!this.last)
        return !0;
      var i = this.queryManager.getDocumentInfo(this.query), s = this.queryManager.dataMasking, o = s ? i.nonReactiveQuery : this.query, a = s || i.hasNonreactiveDirective ? !Fh(o, this.last.result, r, this.variables) : !Oe(this.last.result, r);
      return a || n && !Oe(this.last.variables, n);
    }, t.prototype.getLast = function(r, n) {
      var i = this.last;
      if (i && i[r] && (!n || Oe(i.variables, this.variables)))
        return i[r];
    }, t.prototype.getLastResult = function(r) {
      return this.getLast("result", r);
    }, t.prototype.getLastError = function(r) {
      return this.getLast("error", r);
    }, t.prototype.resetLastResults = function() {
      delete this.last, this.isTornDown = !1;
    }, t.prototype.resetQueryStoreErrors = function() {
      this.queryManager.resetErrors(this.queryId);
    }, t.prototype.refetch = function(r) {
      var n, i = {
        // Always disable polling for refetches.
        pollInterval: 0
      }, s = this.options.fetchPolicy;
      if (s === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && r && u_.call(r, "variables")) {
        var o = uh(this.query), a = o.variableDefinitions;
        (!a || !a.some(function(l) {
          return l.variable.name.value === "variables";
        })) && globalThis.__DEV__ !== !1 && X.warn(
          21,
          r,
          ((n = o.name) === null || n === void 0 ? void 0 : n.value) || o
        );
      }
      return r && !Oe(this.options.variables, r) && (i.variables = this.options.variables = k(k({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, me.refetch);
    }, t.prototype.fetchMore = function(r) {
      var n = this, i = k(k({}, r.query ? r : k(k(k(k({}, this.options), { query: this.options.query }), r), { variables: k(k({}, this.options.variables), r.variables) })), {
        // The fetchMore request goes immediately to the network and does
        // not automatically write its result to the cache (hence no-cache
        // instead of network-only), because we allow the caller of
        // fetchMore to provide an updateQuery callback that determines how
        // the data gets written to the cache.
        fetchPolicy: "no-cache"
      });
      i.query = this.transformDocument(i.query);
      var s = this.queryManager.generateQueryId();
      this.lastQuery = r.query ? this.transformDocument(this.options.query) : i.query;
      var o = this.queryInfo, a = o.networkStatus;
      o.networkStatus = me.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
      var l = /* @__PURE__ */ new Set(), c = r == null ? void 0 : r.updateQuery, u = this.options.fetchPolicy !== "no-cache";
      return u || X(c, 22), this.queryManager.fetchQuery(s, i, me.fetchMore).then(function(f) {
        if (n.queryManager.removeQuery(s), o.networkStatus === me.fetchMore && (o.networkStatus = a), u)
          n.queryManager.cache.batch({
            update: function(E) {
              var v = r.updateQuery;
              v ? E.updateQuery({
                query: n.query,
                variables: n.variables,
                returnPartialData: !0,
                optimistic: !1
              }, function(w) {
                return v(w, {
                  fetchMoreResult: f.data,
                  variables: i.variables
                });
              }) : E.writeQuery({
                query: i.query,
                variables: i.variables,
                data: f.data
              });
            },
            onWatchUpdated: function(E) {
              l.add(E.query);
            }
          });
        else {
          var h = n.getLast("result"), d = c(h.data, {
            fetchMoreResult: f.data,
            variables: i.variables
          });
          n.reportResult(k(k({}, h), { networkStatus: a, loading: ln(a), data: d }), n.variables);
        }
        return n.maskResult(f);
      }).finally(function() {
        u && !l.has(n.query) && nd(n);
      });
    }, t.prototype.subscribeToMore = function(r) {
      var n = this, i = this.queryManager.startGraphQLSubscription({
        query: r.document,
        variables: r.variables,
        context: r.context
      }).subscribe({
        next: function(s) {
          var o = r.updateQuery;
          o && n.updateQuery(function(a, l) {
            return o(a, k({ subscriptionData: s }, l));
          });
        },
        error: function(s) {
          if (r.onError) {
            r.onError(s);
            return;
          }
          globalThis.__DEV__ !== !1 && X.error(23, s);
        }
      });
      return this.subscriptions.add(i), function() {
        n.subscriptions.delete(i) && i.unsubscribe();
      };
    }, t.prototype.setOptions = function(r) {
      return this.reobserve(r);
    }, t.prototype.silentSetOptions = function(r) {
      var n = pn(this.options, r || {});
      Lc(this.options, n);
    }, t.prototype.setVariables = function(r) {
      return Oe(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables: r
      }, me.setVariables) : Promise.resolve());
    }, t.prototype.updateQuery = function(r) {
      var n = this.queryManager, i = n.cache.diff({
        query: this.options.query,
        variables: this.variables,
        returnPartialData: !0,
        optimistic: !1
      }), s = i.result, o = i.complete, a = r(s, {
        variables: this.variables,
        complete: !!o,
        previousData: s
      });
      a && (n.cache.writeQuery({
        query: this.options.query,
        data: a,
        variables: this.variables
      }), n.broadcastQueries());
    }, t.prototype.startPolling = function(r) {
      this.options.pollInterval = r, this.updatePolling();
    }, t.prototype.stopPolling = function() {
      this.options.pollInterval = 0, this.updatePolling();
    }, t.prototype.applyNextFetchPolicy = function(r, n) {
      if (n.nextFetchPolicy) {
        var i = n.fetchPolicy, s = i === void 0 ? "cache-first" : i, o = n.initialFetchPolicy, a = o === void 0 ? s : o;
        s === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy(s, {
          reason: r,
          options: n,
          observable: this,
          initialFetchPolicy: a
        }) : r === "variables-changed" ? n.fetchPolicy = a : n.fetchPolicy = n.nextFetchPolicy);
      }
      return n.fetchPolicy;
    }, t.prototype.fetch = function(r, n, i) {
      return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, r, n, i);
    }, t.prototype.updatePolling = function() {
      var r = this;
      if (!this.queryManager.ssrMode) {
        var n = this, i = n.pollingInfo, s = n.options.pollInterval;
        if (!s || !this.hasObservers()) {
          i && (clearTimeout(i.timeout), delete this.pollingInfo);
          return;
        }
        if (!(i && i.interval === s)) {
          X(s, 24);
          var o = i || (this.pollingInfo = {});
          o.interval = s;
          var a = function() {
            var c, u;
            r.pollingInfo && (!ln(r.queryInfo.networkStatus) && !(!((u = (c = r.options).skipPollAttempt) === null || u === void 0) && u.call(c)) ? r.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, me.poll).then(l, l) : l());
          }, l = function() {
            var c = r.pollingInfo;
            c && (clearTimeout(c.timeout), c.timeout = setTimeout(a, c.interval));
          };
          l();
        }
      }
    }, t.prototype.updateLastResult = function(r, n) {
      n === void 0 && (n = this.variables);
      var i = this.getLastError();
      return i && this.last && !Oe(n, this.last.variables) && (i = void 0), this.last = k({ result: this.queryManager.assumeImmutableResults ? r : Dh(r), variables: n }, i ? { error: i } : null);
    }, t.prototype.reobserveAsConcast = function(r, n) {
      var i = this;
      this.isTornDown = !1;
      var s = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        n === me.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        n === me.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        n === me.poll
      ), o = this.options.variables, a = this.options.fetchPolicy, l = pn(this.options, r || {}), c = s ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        l
      ) : Lc(this.options, l), u = this.transformDocument(c.query);
      this.lastQuery = u, s || (this.updatePolling(), r && r.variables && !Oe(r.variables, o) && // Don't mess with the fetchPolicy if it's currently "standby".
      c.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
      // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
      (c.fetchPolicy === a || // A `nextFetchPolicy` function has even higher priority, though,
      // so in that case `applyNextFetchPolicy` must be called.
      typeof c.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", c), n === void 0 && (n = me.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Gs(c.fetchPolicy));
      var f = function() {
        i.concast === E && (i.waitForOwnResult = !1);
      }, h = c.variables && k({}, c.variables), d = this.fetch(c, n, u), E = d.concast, v = d.fromLink, w = {
        next: function(p) {
          Oe(i.variables, h) && (f(), i.reportResult(p, h));
        },
        error: function(p) {
          Oe(i.variables, h) && (qa(p) || (p = new Ut({ networkError: p })), f(), i.reportError(p, h));
        }
      };
      return !s && (v || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = E, this.observer = w), E.addObserver(w), E;
    }, t.prototype.reobserve = function(r, n) {
      return ny(this.reobserveAsConcast(r, n).promise.then(this.maskResult));
    }, t.prototype.resubscribeAfterError = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      var i = this.last;
      this.resetLastResults();
      var s = this.subscribe.apply(this, r);
      return this.last = i, s;
    }, t.prototype.observe = function() {
      this.reportResult(
        // Passing false is important so that this.getCurrentResult doesn't
        // save the fetchMore result as this.lastResult, causing it to be
        // ignored due to the this.isDifferentFromLastResult check in
        // this.reportResult.
        this.getCurrentFullResult(!1),
        this.variables
      );
    }, t.prototype.reportResult = function(r, n) {
      var i = this.getLastError(), s = this.isDifferentFromLastResult(r, n);
      (i || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), (i || s) && zn(this.observers, "next", this.maskResult(r));
    }, t.prototype.reportError = function(r, n) {
      var i = k(k({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: me.error, loading: !1 });
      this.updateLastResult(i, n), zn(this.observers, "error", this.last.error = r);
    }, t.prototype.hasObservers = function() {
      return this.observers.size > 0;
    }, t.prototype.tearDownQuery = function() {
      this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
        return r.unsubscribe();
      }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
    }, t.prototype.transformDocument = function(r) {
      return this.queryManager.transform(r);
    }, t.prototype.maskResult = function(r) {
      return r && "data" in r ? k(k({}, r), { data: this.queryManager.maskOperation({
        document: this.query,
        data: r.data,
        fetchPolicy: this.options.fetchPolicy,
        id: this.queryId
      }) }) : r;
    }, t;
  }(Se)
);
Ph(jo);
function nd(e) {
  var t = e.options, r = t.fetchPolicy, n = t.nextFetchPolicy;
  return r === "cache-and-network" || r === "network-only" ? e.reobserve({
    fetchPolicy: "cache-first",
    // Use a temporary nextFetchPolicy function that replaces itself with the
    // previous nextFetchPolicy value and returns the original fetchPolicy.
    nextFetchPolicy: function(i, s) {
      return this.nextFetchPolicy = n, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(i, s) : r;
    }
  }) : e.reobserve();
}
function f_(e) {
  globalThis.__DEV__ !== !1 && X.error(25, e.message, e.stack);
}
function id(e) {
  globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && X.debug(26, e);
}
function Gs(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var Jr = new (jr ? WeakMap : Map)();
function zs(e, t) {
  var r = e[t];
  typeof r == "function" && (e[t] = function() {
    return Jr.set(
      e,
      // The %1e15 allows the count to wrap around to 0 safely every
      // quadrillion evictions, so there's no risk of overflow. To be
      // clear, this is more of a pedantic principle than something
      // that matters in any conceivable practical scenario.
      (Jr.get(e) + 1) % 1e15
    ), r.apply(this, arguments);
  });
}
function xc(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0);
}
var Ks = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = t.generateQueryId()), this.queryId = r, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
      var n = this.cache = t.cache;
      Jr.has(n) || (Jr.set(n, 0), zs(n, "evict"), zs(n, "modify"), zs(n, "reset"));
    }
    return e.prototype.init = function(t) {
      var r = t.networkStatus || me.loading;
      return this.variables && this.networkStatus !== me.loading && !Oe(this.variables, t.variables) && (r = me.setVariables), Oe(t.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
        document: t.document,
        variables: t.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus: r
      }), t.observableQuery && this.setObservableQuery(t.observableQuery), t.lastRequestId && (this.lastRequestId = t.lastRequestId), this;
    }, e.prototype.reset = function() {
      xc(this), this.dirty = !1;
    }, e.prototype.resetDiff = function() {
      this.lastDiff = void 0;
    }, e.prototype.getDiff = function() {
      var t = this.getDiffOptions();
      if (this.lastDiff && Oe(t, this.lastDiff.options))
        return this.lastDiff.diff;
      this.updateWatch(this.variables);
      var r = this.observableQuery;
      if (r && r.options.fetchPolicy === "no-cache")
        return { complete: !1 };
      var n = this.cache.diff(t);
      return this.updateLastDiff(n, t), n;
    }, e.prototype.updateLastDiff = function(t, r) {
      this.lastDiff = t ? {
        diff: t,
        options: r || this.getDiffOptions()
      } : void 0;
    }, e.prototype.getDiffOptions = function(t) {
      var r;
      return t === void 0 && (t = this.variables), {
        query: this.document,
        variables: t,
        returnPartialData: !0,
        optimistic: !0,
        canonizeResults: (r = this.observableQuery) === null || r === void 0 ? void 0 : r.options.canonizeResults
      };
    }, e.prototype.setDiff = function(t) {
      var r = this, n, i = this.lastDiff && this.lastDiff.diff;
      t && !t.complete && (!((n = this.observableQuery) === null || n === void 0) && n.getLastError()) || (this.updateLastDiff(t), !this.dirty && !Oe(i && i.result, t && t.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
        return r.notify();
      }, 0))));
    }, e.prototype.setObservableQuery = function(t) {
      var r = this;
      t !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = t, t ? (t.queryInfo = this, this.listeners.add(this.oqListener = function() {
        var n = r.getDiff();
        n.fromOptimisticTransaction ? t.observe() : nd(t);
      })) : delete this.oqListener);
    }, e.prototype.notify = function() {
      var t = this;
      xc(this), this.shouldNotify() && this.listeners.forEach(function(r) {
        return r(t);
      }), this.dirty = !1;
    }, e.prototype.shouldNotify = function() {
      if (!this.dirty || !this.listeners.size)
        return !1;
      if (ln(this.networkStatus) && this.observableQuery) {
        var t = this.observableQuery.options.fetchPolicy;
        if (t !== "cache-only" && t !== "cache-and-network")
          return !1;
      }
      return !0;
    }, e.prototype.stop = function() {
      if (!this.stopped) {
        this.stopped = !0, this.reset(), this.cancel();
        var t = this.observableQuery;
        t && t.stopPolling();
      }
    }, e.prototype.cancel = function() {
      var t;
      (t = this.cancelWatch) === null || t === void 0 || t.call(this), this.cancelWatch = void 0;
    }, e.prototype.updateWatch = function(t) {
      var r = this;
      t === void 0 && (t = this.variables);
      var n = this.observableQuery;
      if (!(n && n.options.fetchPolicy === "no-cache")) {
        var i = k(k({}, this.getDiffOptions(t)), { watcher: this, callback: function(s) {
          return r.setDiff(s);
        } });
        (!this.lastWatch || !Oe(i, this.lastWatch)) && (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = i));
      }
    }, e.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    }, e.prototype.shouldWrite = function(t, r) {
      var n = this.lastWrite;
      return !(n && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      n.dmCount === Jr.get(this.cache) && Oe(r, n.variables) && Oe(t.data, n.result.data));
    }, e.prototype.markResult = function(t, r, n, i) {
      var s = this, o = new br(), a = $t(t.errors) ? t.errors.slice(0) : [];
      if (this.reset(), "incremental" in t && $t(t.incremental)) {
        var l = Nh(this.getDiff().result, t);
        t.data = l;
      } else if ("hasNext" in t && t.hasNext) {
        var c = this.getDiff();
        t.data = o.merge(c.result, t.data);
      }
      this.graphQLErrors = a, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: t.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (Uo(t, n.errorPolicy) ? this.cache.performTransaction(function(u) {
        if (s.shouldWrite(t, n.variables))
          u.writeQuery({
            query: r,
            data: t.data,
            variables: n.variables,
            overwrite: i === 1
          }), s.lastWrite = {
            result: t,
            variables: n.variables,
            dmCount: Jr.get(s.cache)
          };
        else if (s.lastDiff && s.lastDiff.diff.complete) {
          t.data = s.lastDiff.diff.result;
          return;
        }
        var f = s.getDiffOptions(n.variables), h = u.diff(f);
        !s.stopped && Oe(s.variables, n.variables) && s.updateWatch(n.variables), s.updateLastDiff(h, f), h.complete && (t.data = h.result);
      }) : this.lastWrite = void 0);
    }, e.prototype.markReady = function() {
      return this.networkError = null, this.networkStatus = me.ready;
    }, e.prototype.markError = function(t) {
      return this.networkStatus = me.error, this.lastWrite = void 0, this.reset(), t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors), t.networkError && (this.networkError = t.networkError), t;
    }, e;
  }()
);
function Uo(e, t) {
  t === void 0 && (t = "none");
  var r = t === "ignore" || t === "all", n = !xi(e);
  return !n && r && e.data && (n = !0), n;
}
var h_ = Object.prototype.hasOwnProperty, Mc = /* @__PURE__ */ Object.create(null), d_ = (
  /** @class */
  function() {
    function e(t) {
      var r = this;
      this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new ih(
        Zt["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new ir(!1), this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
      var n = new wh(
        function(s) {
          return r.cache.transformDocument(s);
        },
        // Allow the apollo cache to manage its own transform caches
        { cache: !1 }
      );
      this.cache = t.cache, this.link = t.link, this.defaultOptions = t.defaultOptions, this.queryDeduplication = t.queryDeduplication, this.clientAwareness = t.clientAwareness, this.localState = t.localState, this.ssrMode = t.ssrMode, this.assumeImmutableResults = t.assumeImmutableResults, this.dataMasking = t.dataMasking;
      var i = t.documentTransform;
      this.documentTransform = i ? n.concat(i).concat(n) : n, this.defaultContext = t.defaultContext || /* @__PURE__ */ Object.create(null), (this.onBroadcast = t.onBroadcast) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
    }
    return e.prototype.stop = function() {
      var t = this;
      this.queries.forEach(function(r, n) {
        t.stopQueryNoBroadcast(n);
      }), this.cancelPendingFetches(at(27));
    }, e.prototype.cancelPendingFetches = function(t) {
      this.fetchCancelFns.forEach(function(r) {
        return r(t);
      }), this.fetchCancelFns.clear();
    }, e.prototype.mutate = function(t) {
      return fr(this, arguments, void 0, function(r) {
        var n, i, s, o, a, l, c, u = r.mutation, f = r.variables, h = r.optimisticResponse, d = r.updateQueries, E = r.refetchQueries, v = E === void 0 ? [] : E, w = r.awaitRefetchQueries, p = w === void 0 ? !1 : w, y = r.update, _ = r.onQueryUpdated, b = r.fetchPolicy, T = b === void 0 ? ((l = this.defaultOptions.mutate) === null || l === void 0 ? void 0 : l.fetchPolicy) || "network-only" : b, D = r.errorPolicy, P = D === void 0 ? ((c = this.defaultOptions.mutate) === null || c === void 0 ? void 0 : c.errorPolicy) || "none" : D, q = r.keepRootFields, z = r.context;
        return hr(this, function(W) {
          switch (W.label) {
            case 0:
              return X(u, 28), X(T === "network-only" || T === "no-cache", 29), n = this.generateMutationId(), u = this.cache.transformForLink(this.transform(u)), i = this.getDocumentInfo(u).hasClientExports, f = this.getVariables(u, f), i ? [4, this.localState.addExportedVariables(u, f, z)] : [3, 2];
            case 1:
              f = W.sent(), W.label = 2;
            case 2:
              return s = this.mutationStore && (this.mutationStore[n] = {
                mutation: u,
                variables: f,
                loading: !0,
                error: null
              }), o = h && this.markMutationOptimistic(h, {
                mutationId: n,
                document: u,
                variables: f,
                fetchPolicy: T,
                errorPolicy: P,
                context: z,
                updateQueries: d,
                update: y,
                keepRootFields: q
              }), this.broadcastQueries(), a = this, [2, new Promise(function(ie, te) {
                return qs(a.getObservableFromLink(u, k(k({}, z), { optimisticResponse: o ? h : void 0 }), f, {}, !1), function(Z) {
                  if (xi(Z) && P === "none")
                    throw new Ut({
                      graphQLErrors: Po(Z)
                    });
                  s && (s.loading = !1, s.error = null);
                  var xe = k({}, Z);
                  return typeof v == "function" && (v = v(xe)), P === "ignore" && xi(xe) && delete xe.errors, a.markMutationResult({
                    mutationId: n,
                    result: xe,
                    document: u,
                    variables: f,
                    fetchPolicy: T,
                    errorPolicy: P,
                    context: z,
                    update: y,
                    updateQueries: d,
                    awaitRefetchQueries: p,
                    refetchQueries: v,
                    removeOptimistic: o ? n : void 0,
                    onQueryUpdated: _,
                    keepRootFields: q
                  });
                }).subscribe({
                  next: function(Z) {
                    a.broadcastQueries(), (!("hasNext" in Z) || Z.hasNext === !1) && ie(k(k({}, Z), { data: a.maskOperation({
                      document: u,
                      data: Z.data,
                      fetchPolicy: T,
                      id: n
                    }) }));
                  },
                  error: function(Z) {
                    s && (s.loading = !1, s.error = Z), o && a.cache.removeOptimistic(n), a.broadcastQueries(), te(Z instanceof Ut ? Z : new Ut({
                      networkError: Z
                    }));
                  }
                });
              })];
          }
        });
      });
    }, e.prototype.markMutationResult = function(t, r) {
      var n = this;
      r === void 0 && (r = this.cache);
      var i = t.result, s = [], o = t.fetchPolicy === "no-cache";
      if (!o && Uo(i, t.errorPolicy)) {
        if (on(i) || s.push({
          result: i.data,
          dataId: "ROOT_MUTATION",
          query: t.document,
          variables: t.variables
        }), on(i) && $t(i.incremental)) {
          var a = r.diff({
            id: "ROOT_MUTATION",
            // The cache complains if passed a mutation where it expects a
            // query, so we transform mutations and subscriptions to queries
            // (only once, thanks to this.transformCache).
            query: this.getDocumentInfo(t.document).asQuery,
            variables: t.variables,
            optimistic: !1,
            returnPartialData: !0
          }), l = void 0;
          a.result && (l = Nh(a.result, i)), typeof l < "u" && (i.data = l, s.push({
            result: l,
            dataId: "ROOT_MUTATION",
            query: t.document,
            variables: t.variables
          }));
        }
        var c = t.updateQueries;
        c && this.queries.forEach(function(f, h) {
          var d = f.observableQuery, E = d && d.queryName;
          if (!(!E || !h_.call(c, E))) {
            var v = c[E], w = n.queries.get(h), p = w.document, y = w.variables, _ = r.diff({
              query: p,
              variables: y,
              returnPartialData: !0,
              optimistic: !1
            }), b = _.result, T = _.complete;
            if (T && b) {
              var D = v(b, {
                mutationResult: i,
                queryName: p && Mn(p) || void 0,
                queryVariables: y
              });
              D && s.push({
                result: D,
                dataId: "ROOT_QUERY",
                query: p,
                variables: y
              });
            }
          }
        });
      }
      if (s.length > 0 || (t.refetchQueries || "").length > 0 || t.update || t.onQueryUpdated || t.removeOptimistic) {
        var u = [];
        if (this.refetchQueries({
          updateCache: function(f) {
            o || s.forEach(function(v) {
              return f.write(v);
            });
            var h = t.update, d = !ly(i) || on(i) && !i.hasNext;
            if (h) {
              if (!o) {
                var E = f.diff({
                  id: "ROOT_MUTATION",
                  // The cache complains if passed a mutation where it expects a
                  // query, so we transform mutations and subscriptions to queries
                  // (only once, thanks to this.transformCache).
                  query: n.getDocumentInfo(t.document).asQuery,
                  variables: t.variables,
                  optimistic: !1,
                  returnPartialData: !0
                });
                E.complete && (i = k(k({}, i), { data: E.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
              }
              d && h(f, i, {
                context: t.context,
                variables: t.variables
              });
            }
            !o && !t.keepRootFields && d && f.modify({
              id: "ROOT_MUTATION",
              fields: function(v, w) {
                var p = w.fieldName, y = w.DELETE;
                return p === "__typename" ? v : y;
              }
            });
          },
          include: t.refetchQueries,
          // Write the final mutation.result to the root layer of the cache.
          optimistic: !1,
          // Remove the corresponding optimistic layer at the same time as we
          // write the final non-optimistic result.
          removeOptimistic: t.removeOptimistic,
          // Let the caller of client.mutate optionally determine the refetching
          // behavior for watched queries after the mutation.update function runs.
          // If no onQueryUpdated function was provided for this mutation, pass
          // null instead of undefined to disable the default refetching behavior.
          onQueryUpdated: t.onQueryUpdated || null
        }).forEach(function(f) {
          return u.push(f);
        }), t.awaitRefetchQueries || t.onQueryUpdated)
          return Promise.all(u).then(function() {
            return i;
          });
      }
      return Promise.resolve(i);
    }, e.prototype.markMutationOptimistic = function(t, r) {
      var n = this, i = typeof t == "function" ? t(r.variables, { IGNORE: Mc }) : t;
      return i === Mc ? !1 : (this.cache.recordOptimisticTransaction(function(s) {
        try {
          n.markMutationResult(k(k({}, r), { result: { data: i } }), s);
        } catch (o) {
          globalThis.__DEV__ !== !1 && X.error(o);
        }
      }, r.mutationId), !0);
    }, e.prototype.fetchQuery = function(t, r, n) {
      return this.fetchConcastWithInfo(t, r, n).concast.promise;
    }, e.prototype.getQueryStore = function() {
      var t = /* @__PURE__ */ Object.create(null);
      return this.queries.forEach(function(r, n) {
        t[n] = {
          variables: r.variables,
          networkStatus: r.networkStatus,
          networkError: r.networkError,
          graphQLErrors: r.graphQLErrors
        };
      }), t;
    }, e.prototype.resetErrors = function(t) {
      var r = this.queries.get(t);
      r && (r.networkError = void 0, r.graphQLErrors = []);
    }, e.prototype.transform = function(t) {
      return this.documentTransform.transformDocument(t);
    }, e.prototype.getDocumentInfo = function(t) {
      var r = this.transformCache;
      if (!r.has(t)) {
        var n = {
          // TODO These three calls (hasClientExports, shouldForceResolvers, and
          // usesNonreactiveDirective) are performing independent full traversals
          // of the transformed document. We should consider merging these
          // traversals into a single pass in the future, though the work is
          // cached after the first time.
          hasClientExports: Qv(t),
          hasForcedResolvers: this.localState.shouldForceResolvers(t),
          hasNonreactiveDirective: si(["nonreactive"], t),
          nonReactiveQuery: Bg(t),
          clientQuery: this.localState.clientQuery(t),
          serverQuery: Th([
            { name: "client", remove: !0 },
            { name: "connection" },
            { name: "nonreactive" },
            { name: "unmask" }
          ], t),
          defaultVars: Na(Fr(t)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: k(k({}, t), { definitions: t.definitions.map(function(i) {
            return i.kind === "OperationDefinition" && i.operation !== "query" ? k(k({}, i), { operation: "query" }) : i;
          }) })
        };
        r.set(t, n);
      }
      return r.get(t);
    }, e.prototype.getVariables = function(t, r) {
      return k(k({}, this.getDocumentInfo(t).defaultVars), r);
    }, e.prototype.watchQuery = function(t) {
      var r = this.transform(t.query);
      t = k(k({}, t), { variables: this.getVariables(r, t.variables) }), typeof t.notifyOnNetworkStatusChange > "u" && (t.notifyOnNetworkStatusChange = !1);
      var n = new Ks(this), i = new jo({
        queryManager: this,
        queryInfo: n,
        options: t
      });
      return i.lastQuery = r, this.queries.set(i.queryId, n), n.init({
        document: r,
        observableQuery: i,
        variables: i.variables
      }), i;
    }, e.prototype.query = function(t, r) {
      var n = this;
      r === void 0 && (r = this.generateQueryId()), X(t.query, 30), X(t.query.kind === "Document", 31), X(!t.returnPartialData, 32), X(!t.pollInterval, 33);
      var i = this.transform(t.query);
      return this.fetchQuery(r, k(k({}, t), { query: i })).then(function(s) {
        return s && k(k({}, s), { data: n.maskOperation({
          document: i,
          data: s.data,
          fetchPolicy: t.fetchPolicy,
          id: r
        }) });
      }).finally(function() {
        return n.stopQuery(r);
      });
    }, e.prototype.generateQueryId = function() {
      return String(this.queryIdCounter++);
    }, e.prototype.generateRequestId = function() {
      return this.requestIdCounter++;
    }, e.prototype.generateMutationId = function() {
      return String(this.mutationIdCounter++);
    }, e.prototype.stopQueryInStore = function(t) {
      this.stopQueryInStoreNoBroadcast(t), this.broadcastQueries();
    }, e.prototype.stopQueryInStoreNoBroadcast = function(t) {
      var r = this.queries.get(t);
      r && r.stop();
    }, e.prototype.clearStore = function(t) {
      return t === void 0 && (t = {
        discardWatches: !0
      }), this.cancelPendingFetches(at(34)), this.queries.forEach(function(r) {
        r.observableQuery ? r.networkStatus = me.loading : r.stop();
      }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(t);
    }, e.prototype.getObservableQueries = function(t) {
      var r = this;
      t === void 0 && (t = "active");
      var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
      return Array.isArray(t) && t.forEach(function(a) {
        if (typeof a == "string")
          i.set(a, a), s.set(a, !1);
        else if (yg(a)) {
          var l = Nr(r.transform(a));
          i.set(l, Mn(a)), s.set(l, !1);
        } else Ne(a) && a.query && o.add(a);
      }), this.queries.forEach(function(a, l) {
        var c = a.observableQuery, u = a.document;
        if (c) {
          if (t === "all") {
            n.set(l, c);
            return;
          }
          var f = c.queryName, h = c.options.fetchPolicy;
          if (h === "standby" || t === "active" && !c.hasObservers())
            return;
          (t === "active" || f && s.has(f) || u && s.has(Nr(u))) && (n.set(l, c), f && s.set(f, !0), u && s.set(Nr(u), !0));
        }
      }), o.size && o.forEach(function(a) {
        var l = So("legacyOneTimeQuery"), c = r.getQuery(l).init({
          document: a.query,
          variables: a.variables
        }), u = new jo({
          queryManager: r,
          queryInfo: c,
          options: k(k({}, a), { fetchPolicy: "network-only" })
        });
        X(u.queryId === l), c.setObservableQuery(u), n.set(l, u);
      }), globalThis.__DEV__ !== !1 && s.size && s.forEach(function(a, l) {
        if (!a) {
          var c = i.get(l);
          c ? globalThis.__DEV__ !== !1 && X.warn(35, c) : globalThis.__DEV__ !== !1 && X.warn(36);
        }
      }), n;
    }, e.prototype.reFetchObservableQueries = function(t) {
      var r = this;
      t === void 0 && (t = !1);
      var n = [];
      return this.getObservableQueries(t ? "all" : "active").forEach(function(i, s) {
        var o = i.options.fetchPolicy;
        i.resetLastResults(), (t || o !== "standby" && o !== "cache-only") && n.push(i.refetch()), r.getQuery(s).setDiff(null);
      }), this.broadcastQueries(), Promise.all(n);
    }, e.prototype.setObservableQuery = function(t) {
      this.getQuery(t.queryId).setObservableQuery(t);
    }, e.prototype.startGraphQLSubscription = function(t) {
      var r = this, n = t.query, i = t.variables, s = t.fetchPolicy, o = t.errorPolicy, a = o === void 0 ? "none" : o, l = t.context, c = l === void 0 ? {} : l, u = t.extensions, f = u === void 0 ? {} : u;
      n = this.transform(n), i = this.getVariables(n, i);
      var h = function(E) {
        return r.getObservableFromLink(n, c, E, f).map(function(v) {
          s !== "no-cache" && (Uo(v, a) && r.cache.write({
            query: n,
            result: v.data,
            dataId: "ROOT_SUBSCRIPTION",
            variables: E
          }), r.broadcastQueries());
          var w = xi(v), p = Lh(v);
          if (w || p) {
            var y = {};
            if (w && (y.graphQLErrors = v.errors), p && (y.protocolErrors = v.extensions[ys]), a === "none" || p)
              throw new Ut(y);
          }
          return a === "ignore" && delete v.errors, v;
        });
      };
      if (this.getDocumentInfo(n).hasClientExports) {
        var d = this.localState.addExportedVariables(n, i, c).then(h);
        return new Se(function(E) {
          var v = null;
          return d.then(function(w) {
            return v = w.subscribe(E);
          }, E.error), function() {
            return v && v.unsubscribe();
          };
        });
      }
      return h(i);
    }, e.prototype.stopQuery = function(t) {
      this.stopQueryNoBroadcast(t), this.broadcastQueries();
    }, e.prototype.stopQueryNoBroadcast = function(t) {
      this.stopQueryInStoreNoBroadcast(t), this.removeQuery(t);
    }, e.prototype.removeQuery = function(t) {
      this.fetchCancelFns.delete(t), this.queries.has(t) && (this.getQuery(t).stop(), this.queries.delete(t));
    }, e.prototype.broadcastQueries = function() {
      this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(t) {
        return t.notify();
      });
    }, e.prototype.getLocalState = function() {
      return this.localState;
    }, e.prototype.getObservableFromLink = function(t, r, n, i, s) {
      var o = this, a;
      s === void 0 && (s = (a = r == null ? void 0 : r.queryDeduplication) !== null && a !== void 0 ? a : this.queryDeduplication);
      var l, c = this.getDocumentInfo(t), u = c.serverQuery, f = c.clientQuery;
      if (u) {
        var h = this, d = h.inFlightLinkObservables, E = h.link, v = {
          query: u,
          variables: n,
          operationName: Mn(u) || void 0,
          context: this.prepareContext(k(k({}, r), { forceFetch: !s })),
          extensions: i
        };
        if (r = v.context, s) {
          var w = Nr(u), p = gr(n), y = d.lookup(w, p);
          if (l = y.observable, !l) {
            var _ = new Gr([
              No(E, v)
            ]);
            l = y.observable = _, _.beforeNext(function b(T, D) {
              T === "next" && "hasNext" in D && D.hasNext ? _.beforeNext(b) : d.remove(w, p);
            });
          }
        } else
          l = new Gr([
            No(E, v)
          ]);
      } else
        l = new Gr([Se.of({ data: {} })]), r = this.prepareContext(r);
      return f && (l = qs(l, function(b) {
        return o.localState.runResolvers({
          document: f,
          remoteResult: b,
          context: r,
          variables: n
        });
      })), l;
    }, e.prototype.getResultsFromLink = function(t, r, n) {
      var i = t.lastRequestId = this.generateRequestId(), s = this.cache.transformForLink(n.query);
      return qs(this.getObservableFromLink(s, n.context, n.variables), function(o) {
        var a = Po(o), l = a.length > 0, c = n.errorPolicy;
        if (i >= t.lastRequestId) {
          if (l && c === "none")
            throw t.markError(new Ut({
              graphQLErrors: a
            }));
          t.markResult(o, s, n, r), t.markReady();
        }
        var u = {
          data: o.data,
          loading: !1,
          networkStatus: me.ready
        };
        return l && c === "none" && (u.data = void 0), l && c !== "ignore" && (u.errors = a, u.networkStatus = me.error), u;
      }, function(o) {
        var a = qa(o) ? o : new Ut({ networkError: o });
        throw i >= t.lastRequestId && t.markError(a), a;
      });
    }, e.prototype.fetchConcastWithInfo = function(t, r, n, i) {
      var s = this;
      n === void 0 && (n = me.loading), i === void 0 && (i = r.query);
      var o = this.getVariables(i, r.variables), a = this.getQuery(t), l = this.defaultOptions.watchQuery, c = r.fetchPolicy, u = c === void 0 ? l && l.fetchPolicy || "cache-first" : c, f = r.errorPolicy, h = f === void 0 ? l && l.errorPolicy || "none" : f, d = r.returnPartialData, E = d === void 0 ? !1 : d, v = r.notifyOnNetworkStatusChange, w = v === void 0 ? !1 : v, p = r.context, y = p === void 0 ? {} : p, _ = Object.assign({}, r, {
        query: i,
        variables: o,
        fetchPolicy: u,
        errorPolicy: h,
        returnPartialData: E,
        notifyOnNetworkStatusChange: w,
        context: y
      }), b = function(z) {
        _.variables = z;
        var W = s.fetchQueryByPolicy(a, _, n);
        return (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          _.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          W.sources.length > 0 && a.observableQuery && a.observableQuery.applyNextFetchPolicy("after-fetch", r), W
        );
      }, T = function() {
        return s.fetchCancelFns.delete(t);
      };
      this.fetchCancelFns.set(t, function(z) {
        T(), setTimeout(function() {
          return D.cancel(z);
        });
      });
      var D, P;
      if (this.getDocumentInfo(_.query).hasClientExports)
        D = new Gr(this.localState.addExportedVariables(_.query, _.variables, _.context).then(b).then(function(z) {
          return z.sources;
        })), P = !0;
      else {
        var q = b(_.variables);
        P = q.fromLink, D = new Gr(q.sources);
      }
      return D.promise.then(T, T), {
        concast: D,
        fromLink: P
      };
    }, e.prototype.refetchQueries = function(t) {
      var r = this, n = t.updateCache, i = t.include, s = t.optimistic, o = s === void 0 ? !1 : s, a = t.removeOptimistic, l = a === void 0 ? o ? So("refetchQueries") : void 0 : a, c = t.onQueryUpdated, u = /* @__PURE__ */ new Map();
      i && this.getObservableQueries(i).forEach(function(h, d) {
        u.set(d, {
          oq: h,
          lastDiff: r.getQuery(d).getDiff()
        });
      });
      var f = /* @__PURE__ */ new Map();
      return n && this.cache.batch({
        update: n,
        // Since you can perform any combination of cache reads and/or writes in
        // the cache.batch update function, its optimistic option can be either
        // a boolean or a string, representing three distinct modes of
        // operation:
        //
        // * false: read/write only the root layer
        // * true: read/write the topmost layer
        // * string: read/write a fresh optimistic layer with that ID string
        //
        // When typeof optimistic === "string", a new optimistic layer will be
        // temporarily created within cache.batch with that string as its ID. If
        // we then pass that same string as the removeOptimistic option, we can
        // make cache.batch immediately remove the optimistic layer after
        // running the updateCache function, triggering only one broadcast.
        //
        // However, the refetchQueries method accepts only true or false for its
        // optimistic option (not string). We interpret true to mean a temporary
        // optimistic layer should be created, to allow efficiently rolling back
        // the effect of the updateCache function, which involves passing a
        // string instead of true as the optimistic option to cache.batch, when
        // refetchQueries receives optimistic: true.
        //
        // In other words, we are deliberately not supporting the use case of
        // writing to an *existing* optimistic layer (using the refetchQueries
        // updateCache function), since that would potentially interfere with
        // other optimistic updates in progress. Instead, you can read/write
        // only the root layer by passing optimistic: false to refetchQueries,
        // or you can read/write a brand new optimistic layer that will be
        // automatically removed by passing optimistic: true.
        optimistic: o && l || !1,
        // The removeOptimistic option can also be provided by itself, even if
        // optimistic === false, to remove some previously-added optimistic
        // layer safely and efficiently, like we do in markMutationResult.
        //
        // If an explicit removeOptimistic string is provided with optimistic:
        // true, the removeOptimistic string will determine the ID of the
        // temporary optimistic layer, in case that ever matters.
        removeOptimistic: l,
        onWatchUpdated: function(h, d, E) {
          var v = h.watcher instanceof Ks && h.watcher.observableQuery;
          if (v) {
            if (c) {
              u.delete(v.queryId);
              var w = c(v, d, E);
              return w === !0 && (w = v.refetch()), w !== !1 && f.set(v, w), w;
            }
            c !== null && u.set(v.queryId, { oq: v, lastDiff: E, diff: d });
          }
        }
      }), u.size && u.forEach(function(h, d) {
        var E = h.oq, v = h.lastDiff, w = h.diff, p;
        if (c) {
          if (!w) {
            var y = E.queryInfo;
            y.reset(), w = y.getDiff();
          }
          p = c(E, w, v);
        }
        (!c || p === !0) && (p = E.refetch()), p !== !1 && f.set(E, p), d.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(d);
      }), l && this.cache.removeOptimistic(l), f;
    }, e.prototype.maskOperation = function(t) {
      var r, n, i, s = t.document, o = t.data;
      if (globalThis.__DEV__ !== !1) {
        var a = t.fetchPolicy, l = t.id, c = (r = Fr(s)) === null || r === void 0 ? void 0 : r.operation, u = ((n = c == null ? void 0 : c[0]) !== null && n !== void 0 ? n : "o") + l;
        this.dataMasking && a === "no-cache" && !eg(s) && !this.noCacheWarningsByQueryId.has(u) && (this.noCacheWarningsByQueryId.add(u), globalThis.__DEV__ !== !1 && X.warn(
          37,
          (i = Mn(s)) !== null && i !== void 0 ? i : "Unnamed ".concat(c ?? "operation")
        ));
      }
      return this.dataMasking ? Gy(o, s, this.cache) : o;
    }, e.prototype.maskFragment = function(t) {
      var r = t.data, n = t.fragment, i = t.fragmentName;
      return this.dataMasking ? $h(r, n, this.cache, i) : r;
    }, e.prototype.fetchQueryByPolicy = function(t, r, n) {
      var i = this, s = r.query, o = r.variables, a = r.fetchPolicy, l = r.refetchWritePolicy, c = r.errorPolicy, u = r.returnPartialData, f = r.context, h = r.notifyOnNetworkStatusChange, d = t.networkStatus;
      t.init({
        document: s,
        variables: o,
        networkStatus: n
      });
      var E = function() {
        return t.getDiff();
      }, v = function(b, T) {
        T === void 0 && (T = t.networkStatus || me.loading);
        var D = b.result;
        globalThis.__DEV__ !== !1 && !u && !Oe(D, {}) && id(b.missing);
        var P = function(q) {
          return Se.of(k({ data: q, loading: ln(T), networkStatus: T }, b.complete ? null : { partial: !0 }));
        };
        return D && i.getDocumentInfo(s).hasForcedResolvers ? i.localState.runResolvers({
          document: s,
          remoteResult: { data: D },
          context: f,
          variables: o,
          onlyRunForcedResolvers: !0
        }).then(function(q) {
          return P(q.data || void 0);
        }) : c === "none" && T === me.refetch && Array.isArray(b.missing) ? P(void 0) : P(D);
      }, w = a === "no-cache" ? 0 : n === me.refetch && l !== "merge" ? 1 : 2, p = function() {
        return i.getResultsFromLink(t, w, {
          query: s,
          variables: o,
          context: f,
          fetchPolicy: a,
          errorPolicy: c
        });
      }, y = h && typeof d == "number" && d !== n && ln(n);
      switch (a) {
        default:
        case "cache-first": {
          var _ = E();
          return _.complete ? {
            fromLink: !1,
            sources: [v(_, t.markReady())]
          } : u || y ? {
            fromLink: !0,
            sources: [v(_), p()]
          } : { fromLink: !0, sources: [p()] };
        }
        case "cache-and-network": {
          var _ = E();
          return _.complete || u || y ? {
            fromLink: !0,
            sources: [v(_), p()]
          } : { fromLink: !0, sources: [p()] };
        }
        case "cache-only":
          return {
            fromLink: !1,
            sources: [v(E(), t.markReady())]
          };
        case "network-only":
          return y ? {
            fromLink: !0,
            sources: [v(E()), p()]
          } : { fromLink: !0, sources: [p()] };
        case "no-cache":
          return y ? {
            fromLink: !0,
            // Note that queryInfo.getDiff() for no-cache queries does not call
            // cache.diff, but instead returns a { complete: false } stub result
            // when there is no queryInfo.diff already defined.
            sources: [v(t.getDiff()), p()]
          } : { fromLink: !0, sources: [p()] };
        case "standby":
          return { fromLink: !1, sources: [] };
      }
    }, e.prototype.getQuery = function(t) {
      return t && !this.queries.has(t) && this.queries.set(t, new Ks(this, t)), this.queries.get(t);
    }, e.prototype.prepareContext = function(t) {
      t === void 0 && (t = {});
      var r = this.localState.prepareContext(t);
      return k(k(k({}, this.defaultContext), r), { clientAwareness: this.clientAwareness });
    }, e;
  }()
), p_ = (
  /** @class */
  function() {
    function e(t) {
      var r = t.cache, n = t.client, i = t.resolvers, s = t.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), i && this.addResolvers(i), s && this.setFragmentMatcher(s);
    }
    return e.prototype.addResolvers = function(t) {
      var r = this;
      this.resolvers = this.resolvers || {}, Array.isArray(t) ? t.forEach(function(n) {
        r.resolvers = rc(r.resolvers, n);
      }) : this.resolvers = rc(this.resolvers, t);
    }, e.prototype.setResolvers = function(t) {
      this.resolvers = {}, this.addResolvers(t);
    }, e.prototype.getResolvers = function() {
      return this.resolvers || {};
    }, e.prototype.runResolvers = function(t) {
      return fr(this, arguments, void 0, function(r) {
        var n = r.document, i = r.remoteResult, s = r.context, o = r.variables, a = r.onlyRunForcedResolvers, l = a === void 0 ? !1 : a;
        return hr(this, function(c) {
          return n ? [2, this.resolveDocument(n, i.data, s, o, this.fragmentMatcher, l).then(function(u) {
            return k(k({}, i), { data: u.result });
          })] : [2, i];
        });
      });
    }, e.prototype.setFragmentMatcher = function(t) {
      this.fragmentMatcher = t;
    }, e.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    }, e.prototype.clientQuery = function(t) {
      return si(["client"], t) && this.resolvers ? t : null;
    }, e.prototype.serverQuery = function(t) {
      return Ih(t);
    }, e.prototype.prepareContext = function(t) {
      var r = this.cache;
      return k(k({}, t), {
        cache: r,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(n) {
          return r.identify(n);
        }
      });
    }, e.prototype.addExportedVariables = function(t) {
      return fr(this, arguments, void 0, function(r, n, i) {
        return n === void 0 && (n = {}), i === void 0 && (i = {}), hr(this, function(s) {
          return r ? [2, this.resolveDocument(r, this.buildRootValueFromCache(r, n) || {}, this.prepareContext(i), n).then(function(o) {
            return k(k({}, n), o.exportedVariables);
          })] : [2, k({}, n)];
        });
      });
    }, e.prototype.shouldForceResolvers = function(t) {
      var r = !1;
      return Pt(t, {
        Directive: {
          enter: function(n) {
            if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(i) {
              return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
            }), r))
              return us;
          }
        }
      }), r;
    }, e.prototype.buildRootValueFromCache = function(t, r) {
      return this.cache.diff({
        query: Hg(t),
        variables: r,
        returnPartialData: !0,
        optimistic: !1
      }).result;
    }, e.prototype.resolveDocument = function(t, r) {
      return fr(this, arguments, void 0, function(n, i, s, o, a, l) {
        var c, u, f, h, d, E, v, w, p, y, _;
        return s === void 0 && (s = {}), o === void 0 && (o = {}), a === void 0 && (a = function() {
          return !0;
        }), l === void 0 && (l = !1), hr(this, function(b) {
          return c = _i(n), u = Tn(n), f = wn(u), h = this.collectSelectionsToResolve(c, f), d = c.operation, E = d ? d.charAt(0).toUpperCase() + d.slice(1) : "Query", v = this, w = v.cache, p = v.client, y = {
            fragmentMap: f,
            context: k(k({}, s), { cache: w, client: p }),
            variables: o,
            fragmentMatcher: a,
            defaultOperationType: E,
            exportedVariables: {},
            selectionsToResolve: h,
            onlyRunForcedResolvers: l
          }, _ = !1, [2, this.resolveSelectionSet(c.selectionSet, _, i, y).then(function(T) {
            return {
              result: T,
              exportedVariables: y.exportedVariables
            };
          })];
        });
      });
    }, e.prototype.resolveSelectionSet = function(t, r, n, i) {
      return fr(this, void 0, void 0, function() {
        var s, o, a, l, c, u = this;
        return hr(this, function(f) {
          return s = i.fragmentMap, o = i.context, a = i.variables, l = [n], c = function(h) {
            return fr(u, void 0, void 0, function() {
              var d, E;
              return hr(this, function(v) {
                return !r && !i.selectionsToResolve.has(h) ? [
                  2
                  /*return*/
                ] : yi(h, a) ? yr(h) ? [2, this.resolveField(h, r, n, i).then(function(w) {
                  var p;
                  typeof w < "u" && l.push((p = {}, p[er(h)] = w, p));
                })] : (Dg(h) ? d = h : (d = s[h.name.value], X(d, 19, h.name.value)), d && d.typeCondition && (E = d.typeCondition.name.value, i.fragmentMatcher(n, E, o)) ? [2, this.resolveSelectionSet(d.selectionSet, r, n, i).then(function(w) {
                  l.push(w);
                })] : [
                  2
                  /*return*/
                ]) : [
                  2
                  /*return*/
                ];
              });
            });
          }, [2, Promise.all(t.selections.map(c)).then(function() {
            return gs(l);
          })];
        });
      });
    }, e.prototype.resolveField = function(t, r, n, i) {
      return fr(this, void 0, void 0, function() {
        var s, o, a, l, c, u, f, h, d, E = this;
        return hr(this, function(v) {
          return n ? (s = i.variables, o = t.name.value, a = er(t), l = o !== a, c = n[a] || n[o], u = Promise.resolve(c), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(t)) && (f = n.__typename || i.defaultOperationType, h = this.resolvers && this.resolvers[f], h && (d = h[l ? o : a], d && (u = Promise.resolve(
            // In case the resolve function accesses reactive variables,
            // set cacheSlot to the current cache instance.
            Wa.withValue(this.cache, d, [
              n,
              ds(t, s),
              i.context,
              { field: t, fragmentMap: i.fragmentMap }
            ])
          )))), [2, u.then(function(w) {
            var p, y;
            if (w === void 0 && (w = c), t.directives && t.directives.forEach(function(b) {
              b.name.value === "export" && b.arguments && b.arguments.forEach(function(T) {
                T.name.value === "as" && T.value.kind === "StringValue" && (i.exportedVariables[T.value.value] = w);
              });
            }), !t.selectionSet || w == null)
              return w;
            var _ = (y = (p = t.directives) === null || p === void 0 ? void 0 : p.some(function(b) {
              return b.name.value === "client";
            })) !== null && y !== void 0 ? y : !1;
            if (Array.isArray(w))
              return E.resolveSubSelectedArray(t, r || _, w, i);
            if (t.selectionSet)
              return E.resolveSelectionSet(t.selectionSet, r || _, w, i);
          })]) : [2, null];
        });
      });
    }, e.prototype.resolveSubSelectedArray = function(t, r, n, i) {
      var s = this;
      return Promise.all(n.map(function(o) {
        if (o === null)
          return null;
        if (Array.isArray(o))
          return s.resolveSubSelectedArray(t, r, o, i);
        if (t.selectionSet)
          return s.resolveSelectionSet(t.selectionSet, r, o, i);
      }));
    }, e.prototype.collectSelectionsToResolve = function(t, r) {
      var n = function(o) {
        return !Array.isArray(o);
      }, i = this.selectionsToResolveCache;
      function s(o) {
        if (!i.has(o)) {
          var a = /* @__PURE__ */ new Set();
          i.set(o, a), Pt(o, {
            Directive: function(l, c, u, f, h) {
              l.name.value === "client" && h.forEach(function(d) {
                n(d) && Gl(d) && a.add(d);
              });
            },
            FragmentSpread: function(l, c, u, f, h) {
              var d = r[l.name.value];
              X(d, 20, l.name.value);
              var E = s(d);
              E.size > 0 && (h.forEach(function(v) {
                n(v) && Gl(v) && a.add(v);
              }), a.add(l), E.forEach(function(v) {
                a.add(v);
              }));
            }
          });
        }
        return i.get(o);
      }
      return s(t);
    }, e;
  }()
), Fc = !1, sd = (
  /** @class */
  function() {
    function e(t) {
      var r = this, n;
      if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !t.cache)
        throw at(16);
      var i = t.uri, s = t.credentials, o = t.headers, a = t.cache, l = t.documentTransform, c = t.ssrMode, u = c === void 0 ? !1 : c, f = t.ssrForceFetchDelay, h = f === void 0 ? 0 : f, d = t.connectToDevTools, E = t.queryDeduplication, v = E === void 0 ? !0 : E, w = t.defaultOptions, p = t.defaultContext, y = t.assumeImmutableResults, _ = y === void 0 ? a.assumeImmutableResults : y, b = t.resolvers, T = t.typeDefs, D = t.fragmentMatcher, P = t.name, q = t.version, z = t.devtools, W = t.dataMasking, ie = t.link;
      ie || (ie = i ? new Mh({ uri: i, credentials: s, headers: o }) : Ur.empty()), this.link = ie, this.cache = a, this.disableNetworkFetches = u || h > 0, this.queryDeduplication = v, this.defaultOptions = w || /* @__PURE__ */ Object.create(null), this.typeDefs = T, this.devtoolsConfig = k(k({}, z), { enabled: (n = z == null ? void 0 : z.enabled) !== null && n !== void 0 ? n : d }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), h && setTimeout(function() {
        return r.disableNetworkFetches = !1;
      }, h), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = Ra, this.localState = new p_({
        cache: a,
        client: this,
        resolvers: b,
        fragmentMatcher: D
      }), this.queryManager = new d_({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext: p,
        documentTransform: l,
        queryDeduplication: v,
        ssrMode: u,
        dataMasking: !!W,
        clientAwareness: {
          name: P,
          version: q
        },
        localState: this.localState,
        assumeImmutableResults: _,
        onBroadcast: this.devtoolsConfig.enabled ? function() {
          r.devToolsHookCb && r.devToolsHookCb({
            action: {},
            state: {
              queries: r.queryManager.getQueryStore(),
              mutations: r.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: r.cache.extract(!0)
          });
        } : void 0
      }), this.devtoolsConfig.enabled && this.connectToDevTools();
    }
    return e.prototype.connectToDevTools = function() {
      if (!(typeof window > "u")) {
        var t = window, r = Symbol.for("apollo.devtools");
        (t[r] = t[r] || []).push(this), t.__APOLLO_CLIENT__ = this, !Fc && globalThis.__DEV__ !== !1 && (Fc = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
          if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
            var n = window.navigator, i = n && n.userAgent, s = void 0;
            typeof i == "string" && (i.indexOf("Chrome/") > -1 ? s = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : i.indexOf("Firefox/") > -1 && (s = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), s && globalThis.__DEV__ !== !1 && X.log("Download the Apollo DevTools for a better development experience: %s", s);
          }
        }, 1e4));
      }
    }, Object.defineProperty(e.prototype, "documentTransform", {
      /**
       * The `DocumentTransform` used to modify GraphQL documents before a request
       * is made. If a custom `DocumentTransform` is not provided, this will be the
       * default document transform.
       */
      get: function() {
        return this.queryManager.documentTransform;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.stop = function() {
      this.queryManager.stop();
    }, e.prototype.watchQuery = function(t) {
      return this.defaultOptions.watchQuery && (t = $s(this.defaultOptions.watchQuery, t)), this.disableNetworkFetches && (t.fetchPolicy === "network-only" || t.fetchPolicy === "cache-and-network") && (t = k(k({}, t), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(t);
    }, e.prototype.query = function(t) {
      return this.defaultOptions.query && (t = $s(this.defaultOptions.query, t)), X(t.fetchPolicy !== "cache-and-network", 17), this.disableNetworkFetches && t.fetchPolicy === "network-only" && (t = k(k({}, t), { fetchPolicy: "cache-first" })), this.queryManager.query(t);
    }, e.prototype.mutate = function(t) {
      return this.defaultOptions.mutate && (t = $s(this.defaultOptions.mutate, t)), this.queryManager.mutate(t);
    }, e.prototype.subscribe = function(t) {
      var r = this, n = this.queryManager.generateQueryId();
      return this.queryManager.startGraphQLSubscription(t).map(function(i) {
        return k(k({}, i), { data: r.queryManager.maskOperation({
          document: t.query,
          data: i.data,
          fetchPolicy: t.fetchPolicy,
          id: n
        }) });
      });
    }, e.prototype.readQuery = function(t, r) {
      return r === void 0 && (r = !1), this.cache.readQuery(t, r);
    }, e.prototype.watchFragment = function(t) {
      var r;
      return this.cache.watchFragment(k(k({}, t), (r = {}, r[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, r)));
    }, e.prototype.readFragment = function(t, r) {
      return r === void 0 && (r = !1), this.cache.readFragment(t, r);
    }, e.prototype.writeQuery = function(t) {
      var r = this.cache.writeQuery(t);
      return t.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
    }, e.prototype.writeFragment = function(t) {
      var r = this.cache.writeFragment(t);
      return t.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
    }, e.prototype.__actionHookForDevTools = function(t) {
      this.devToolsHookCb = t;
    }, e.prototype.__requestRaw = function(t) {
      return No(this.link, t);
    }, e.prototype.resetStore = function() {
      var t = this;
      return Promise.resolve().then(function() {
        return t.queryManager.clearStore({
          discardWatches: !1
        });
      }).then(function() {
        return Promise.all(t.resetStoreCallbacks.map(function(r) {
          return r();
        }));
      }).then(function() {
        return t.reFetchObservableQueries();
      });
    }, e.prototype.clearStore = function() {
      var t = this;
      return Promise.resolve().then(function() {
        return t.queryManager.clearStore({
          discardWatches: !0
        });
      }).then(function() {
        return Promise.all(t.clearStoreCallbacks.map(function(r) {
          return r();
        }));
      });
    }, e.prototype.onResetStore = function(t) {
      var r = this;
      return this.resetStoreCallbacks.push(t), function() {
        r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function(n) {
          return n !== t;
        });
      };
    }, e.prototype.onClearStore = function(t) {
      var r = this;
      return this.clearStoreCallbacks.push(t), function() {
        r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function(n) {
          return n !== t;
        });
      };
    }, e.prototype.reFetchObservableQueries = function(t) {
      return this.queryManager.reFetchObservableQueries(t);
    }, e.prototype.refetchQueries = function(t) {
      var r = this.queryManager.refetchQueries(t), n = [], i = [];
      r.forEach(function(o, a) {
        n.push(a), i.push(o);
      });
      var s = Promise.all(i);
      return s.queries = n, s.results = i, s.catch(function(o) {
        globalThis.__DEV__ !== !1 && X.debug(18, o);
      }), s;
    }, e.prototype.getObservableQueries = function(t) {
      return t === void 0 && (t = "active"), this.queryManager.getObservableQueries(t);
    }, e.prototype.extract = function(t) {
      return this.cache.extract(t);
    }, e.prototype.restore = function(t) {
      return this.cache.restore(t);
    }, e.prototype.addResolvers = function(t) {
      this.localState.addResolvers(t);
    }, e.prototype.setResolvers = function(t) {
      this.localState.setResolvers(t);
    }, e.prototype.getResolvers = function() {
      return this.localState.getResolvers();
    }, e.prototype.setLocalStateFragmentMatcher = function(t) {
      this.localState.setFragmentMatcher(t);
    }, e.prototype.setLink = function(t) {
      this.link = this.queryManager.link = t;
    }, Object.defineProperty(e.prototype, "defaultContext", {
      get: function() {
        return this.queryManager.defaultContext;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }()
);
globalThis.__DEV__ !== !1 && (sd.prototype.getMemoryInternals = cg);
var m_ = Symbol("default-apollo-client"), od = Symbol("apollo-clients");
function Ys(e, t) {
  return e ? e.default : t ?? void 0;
}
function Xs(e, t) {
  return e == null ? void 0 : e[t];
}
function v_(e) {
  let t;
  const r = g_;
  if (!hm())
    t = (i) => i ? Xs(r, i) : Ys(r, r.default);
  else {
    const i = Et(od, null), s = Et(m_, null);
    t = (o) => {
      if (o) {
        const l = Xs(i, o);
        return l || Xs(r, o);
      }
      const a = Ys(i, s);
      return a || Ys(r, r.default);
    };
  }
  function n(i = e) {
    const s = t(i);
    if (!s)
      throw new Error(
        `Apollo client with id ${i ?? "default"} not found. Use an app.runWithContext() or provideApolloClient() if you are outside of a component setup.`
      );
    return s;
  }
  return {
    resolveClient: n,
    get client() {
      return n();
    }
  };
}
var g_ = {}, zt = typeof window > "u", Zr = {
  queries: Ye(0),
  mutations: Ye(0),
  subscriptions: Ye(0),
  components: /* @__PURE__ */ new Map()
};
function y_() {
  const e = da();
  if (!e)
    return {};
  let t;
  return zt ? (t = {
    queries: Ye(0),
    mutations: Ye(0),
    subscriptions: Ye(0)
  }, { tracking: t }) : (Zr.components.has(e) ? t = Zr.components.get(e) : (Zr.components.set(e, t = {
    queries: Ye(0),
    mutations: Ye(0),
    subscriptions: Ye(0)
  }), pa(() => {
    Zr.components.delete(e);
  })), {
    tracking: t
  });
}
function __(e, t) {
  if (zt)
    return;
  const { tracking: r } = y_();
  ot(e, (n, i) => {
    if (i != null && n !== i) {
      const s = n ? 1 : -1;
      r && (r[t].value += s), Zr[t].value += s;
    }
  }, {
    immediate: !0
  }), pa(() => {
    e.value && (r && r[t].value--, Zr[t].value--);
  });
}
function b_(e) {
  __(e, "queries");
}
function E_(e) {
  return qe(e) ? e : typeof e == "function" ? Ve(e) : e && bn(e);
}
function Js(e) {
  return qe(e) ? e : typeof e == "function" ? Ve(e) : Ye(e);
}
function S_(e) {
  return e instanceof Error ? qa(e) ? e : new Ut({ networkError: e, errorMessage: e.message }) : new Ut({
    networkError: Object.assign(new Error(e == null ? void 0 : e.message), { originalError: e }),
    errorMessage: String(e)
  });
}
function w_(e) {
  return new Ut({
    graphQLErrors: e,
    errorMessage: `GraphQL response contains errors: ${e.map((t) => t.message).join(" | ")}`
  });
}
function Vc() {
  const e = [];
  function t(s) {
    return e.push(s), {
      off: () => r(s)
    };
  }
  function r(s) {
    const o = e.indexOf(s);
    o !== -1 && e.splice(o, 1);
  }
  function n(...s) {
    for (const o of e)
      o(...s);
  }
  function i() {
    return e.length;
  }
  return {
    on: t,
    off: r,
    trigger: n,
    getCount: i
  };
}
function O_(e, t, r) {
  return T_(e, t, r);
}
function T_(e, t, r = {}, n = !1) {
  var i;
  const s = da(), o = un(), a = Ye(), l = Js(e), c = Js(t), u = E_(r), f = $n(), h = Vc(), d = $n(null), E = Vc(), v = Ye(!1);
  s && b_(v);
  const w = Ye();
  let p, y = !1, _, b;
  const T = () => {
    y = !0, p && p();
  }, D = (L) => {
    b = L, _ && _(L);
  }, P = () => {
    p = void 0, _ = void 0, y = !1, b = void 0;
  };
  o && ((i = wf) == null || i(() => {
    var L;
    if (!(!R.value || zt && ((L = a.value) == null ? void 0 : L.prefetch) === !1))
      return new Promise((U, Y) => {
        p = () => {
          P(), U();
        }, _ = (ce) => {
          P(), Y(ce);
        }, y ? p() : b && _(b);
      }).finally(We);
  }));
  const { resolveClient: q } = v_();
  function z() {
    var L;
    return q((L = a.value) == null ? void 0 : L.clientId);
  }
  const W = $n();
  let ie, te = !1, Z = !1, xe = !0;
  function $e() {
    var L, U, Y, ce, _e;
    if (te || !R.value || zt && ((L = a.value) == null ? void 0 : L.prefetch) === !1 || !le) {
      T();
      return;
    }
    zt && (V(l.value), g(c.value), x(bt(u))), te = !0, d.value = null, v.value = !0;
    const Xe = z();
    if (W.value = Xe.watchQuery({
      query: le,
      variables: F ?? {},
      ...a.value,
      ...zt && ((U = a.value) == null ? void 0 : U.fetchPolicy) !== "no-cache" ? {
        fetchPolicy: "network-only"
      } : {}
    }), ye(), !zt && (xe || !((Y = a.value) != null && Y.keepPreviousResult)) && (((ce = a.value) == null ? void 0 : ce.fetchPolicy) !== "no-cache" || a.value.notifyOnNetworkStatusChange)) {
      const Re = W.value.getCurrentResult(!1);
      !Re.loading || Re.partial || (_e = a.value) != null && _e.notifyOnNetworkStatusChange ? (re(Re), Z = !Re.loading) : Re.error && (Ge(Re.error), Z = !0);
    }
    if (!zt)
      for (const Re of j)
        A(Re);
    xe = !1;
  }
  function ye() {
    ie && !ie.closed || W.value && (Z = !1, ie = W.value.subscribe({
      next: re,
      error: Ge
    }));
  }
  function se() {
    var L, U, Y, ce;
    const _e = q((L = a.value) == null ? void 0 : L.clientId);
    return ((U = a.value) == null ? void 0 : U.errorPolicy) || ((ce = (Y = _e.defaultOptions) == null ? void 0 : Y.watchQuery) == null ? void 0 : ce.errorPolicy);
  }
  function re(L) {
    var U;
    if (Z) {
      Z = !1;
      return;
    }
    d.value = null, oe(L);
    const Y = se();
    Y && Y === "all" && !L.error && ((U = L.errors) != null && U.length) && Me(w_(L.errors)), T();
  }
  function oe(L) {
    var U, Y;
    f.value = L.data && Object.keys(L.data).length === 0 ? L.error && !((U = a.value) != null && U.returnPartialData) && ((Y = a.value) == null ? void 0 : Y.errorPolicy) === "none" ? void 0 : f.value : L.data, v.value = L.loading, w.value = L.networkStatus, Pr(() => {
      h.trigger(L, {
        client: z()
      });
    });
  }
  function Ge(L) {
    if (Z) {
      Z = !1;
      return;
    }
    const U = S_(L), Y = se();
    Y && Y !== "none" && oe(W.value.getCurrentResult()), Me(U), D(U), Ee();
  }
  function Me(L) {
    d.value = L, v.value = !1, w.value = 8, Pr(() => {
      E.trigger(L, {
        client: z()
      });
    });
  }
  function Ee() {
    if (!W.value)
      return;
    const L = W.value.getLastError(), U = W.value.getLastResult();
    W.value.resetLastResults(), ye(), Object.assign(W.value, { lastError: L, lastResult: U });
  }
  let ze = [];
  function We() {
    T(), te && (te = !1, v.value = !1, ze.forEach((L) => L()), ze = [], W.value && (W.value.stopPolling(), W.value = null), ie && (ie.unsubscribe(), ie = void 0));
  }
  let mt = !1;
  function Fe() {
    !te || mt || (mt = !0, Pr(() => {
      te && (We(), $e()), mt = !1;
    }));
  }
  let M, Q = !1;
  function $() {
    var L, U;
    a.value ? ((L = a.value) != null && L.throttle ? M = Kf(a.value.throttle, Fe) : (U = a.value) != null && U.debounce ? M = wv(a.value.debounce, Fe) : M = Fe, Q = !0) : M = Fe;
  }
  function G() {
    !te || mt || (Q || $(), M());
  }
  let le = l.value;
  const S = Ye(n), O = Ve(() => !a.value || a.value.enabled == null || a.value.enabled), R = Ve(() => O.value && !S.value && !!l.value);
  ot(() => bt(u), x, {
    deep: !0,
    immediate: !0
  });
  function x(L) {
    a.value && (a.value.throttle !== L.throttle || a.value.debounce !== L.debounce) && $(), a.value = L, G();
  }
  ot(l, V);
  function V(L) {
    le = L, G();
  }
  let F, m;
  ot(() => {
    if (R.value)
      return c.value;
  }, g, {
    deep: !0,
    immediate: !0
  });
  function g(L) {
    const U = JSON.stringify([L, R.value]);
    U !== m && (F = L, G()), m = U;
  }
  function I(L = void 0) {
    if (W.value)
      return L && (F = L), d.value = null, v.value = !0, W.value.refetch(L).then((U) => {
        var Y;
        const ce = (Y = W.value) == null ? void 0 : Y.getCurrentResult();
        return ce && oe(ce), U;
      });
  }
  function N(L) {
    W.value && W.value.updateQuery(L);
  }
  function H(L) {
    if (W.value)
      return d.value = null, v.value = !0, W.value.fetchMore(L).then((U) => {
        var Y;
        const ce = (Y = W.value) == null ? void 0 : Y.getCurrentResult();
        return ce && oe(ce), U;
      });
  }
  const j = [];
  function C(L) {
    if (zt)
      return;
    const U = Js(L);
    ot(U, (Y, ce, _e) => {
      const Xe = j.findIndex((Wt) => Wt.options === ce);
      Xe !== -1 && j.splice(Xe, 1);
      const Re = {
        options: Y,
        unsubscribeFns: []
      };
      j.push(Re), A(Re), _e(() => {
        Re.unsubscribeFns.forEach((Wt) => Wt()), Re.unsubscribeFns = [];
      });
    }, {
      immediate: !0
    });
  }
  function A(L) {
    if (!te)
      return;
    if (!W.value)
      throw new Error("Query is not defined");
    const U = W.value.subscribeToMore(L.options);
    ze.push(U), L.unsubscribeFns.push(U);
  }
  return ot(R, (L) => {
    L ? Pr(() => {
      $e();
    }) : We();
  }), R.value && $e(), s ? pa(() => {
    We(), j.length = 0;
  }) : console.warn("[Vue apollo] useQuery() is called outside of an active effect scope and the query will not be automatically stopped."), {
    result: f,
    loading: v,
    networkStatus: w,
    error: d,
    start: $e,
    stop: We,
    restart: G,
    forceDisabled: S,
    document: l,
    variables: c,
    options: u,
    query: W,
    refetch: I,
    fetchMore: H,
    subscribeToMore: C,
    updateQuery: N,
    onResult: h.on,
    onError: E.on
  };
}
function I_() {
  return ad().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ad() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const C_ = typeof Proxy == "function", R_ = "devtools-plugin:setup", k_ = "plugin:settings:set";
let Wr, qo;
function D_() {
  var e;
  return Wr !== void 0 || (typeof window < "u" && window.performance ? (Wr = !0, qo = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Wr = !0, qo = globalThis.perf_hooks.performance) : Wr = !1), Wr;
}
function P_() {
  return D_() ? qo.now() : Date.now();
}
class N_ {
  constructor(t, r) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = r;
    const n = {};
    if (t.settings)
      for (const o in t.settings) {
        const a = t.settings[o];
        n[o] = a.defaultValue;
      }
    const i = `__vue-devtools-plugin-settings__${t.id}`;
    let s = Object.assign({}, n);
    try {
      const o = localStorage.getItem(i), a = JSON.parse(o);
      Object.assign(s, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(o) {
        try {
          localStorage.setItem(i, JSON.stringify(o));
        } catch {
        }
        s = o;
      },
      now() {
        return P_();
      }
    }, r && r.on(k_, (o, a) => {
      o === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (o, a) => this.target ? this.target.on[a] : (...l) => {
        this.onQueue.push({
          method: a,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (o, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...l) => (this.targetQueue.push({
        method: a,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[a](...l)) : (...l) => new Promise((c) => {
        this.targetQueue.push({
          method: a,
          args: l,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const r of this.onQueue)
      this.target.on[r.method](...r.args);
    for (const r of this.targetQueue)
      r.resolve(await this.target[r.method](...r.args));
  }
}
function A_(e, t) {
  const r = e, n = ad(), i = I_(), s = C_ && r.enableEarlyProxy;
  if (i && (n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    i.emit(R_, e, t);
  else {
    const o = s ? new N_(r, i) : null;
    (n.__VUE_DEVTOOLS_PLUGINS__ = n.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: r,
      setupFn: t,
      proxy: o
    }), o && t(o.proxiedTarget);
  }
}
var L_ = { NODE_ENV: "production" }, x_ = "store";
function In(e, t) {
  Object.keys(e).forEach(function(r) {
    return t(e[r], r);
  });
}
function ld(e) {
  return e !== null && typeof e == "object";
}
function M_(e) {
  return e && typeof e.then == "function";
}
function F_(e, t) {
  return function() {
    return e(t);
  };
}
function cd(e, t, r) {
  return t.indexOf(e) < 0 && (r && r.prepend ? t.unshift(e) : t.push(e)), function() {
    var n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  };
}
function ud(e, t) {
  e._actions = /* @__PURE__ */ Object.create(null), e._mutations = /* @__PURE__ */ Object.create(null), e._wrappedGetters = /* @__PURE__ */ Object.create(null), e._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var r = e.state;
  _s(e, r, [], e._modules.root, !0), Ga(e, r, t);
}
function Ga(e, t, r) {
  var n = e._state, i = e._scope;
  e.getters = {}, e._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
  var s = e._wrappedGetters, o = {}, a = {}, l = Hu(!0);
  l.run(function() {
    In(s, function(c, u) {
      o[u] = F_(c, e), a[u] = Ve(function() {
        return o[u]();
      }), Object.defineProperty(e.getters, u, {
        get: function() {
          return a[u].value;
        },
        enumerable: !0
        // for local getters
      });
    });
  }), e._state = bn({
    data: t
  }), e._scope = l, e.strict && $_(e), n && r && e._withCommit(function() {
    n.data = null;
  }), i && i.stop();
}
function _s(e, t, r, n, i) {
  var s = !r.length, o = e._modules.getNamespace(r);
  if (n.namespaced && (e._modulesNamespaceMap[o] && L_.NODE_ENV, e._modulesNamespaceMap[o] = n), !s && !i) {
    var a = za(t, r.slice(0, -1)), l = r[r.length - 1];
    e._withCommit(function() {
      a[l] = n.state;
    });
  }
  var c = n.context = V_(e, o, r);
  n.forEachMutation(function(u, f) {
    var h = o + f;
    j_(e, h, u, c);
  }), n.forEachAction(function(u, f) {
    var h = u.root ? f : o + f, d = u.handler || u;
    U_(e, h, d, c);
  }), n.forEachGetter(function(u, f) {
    var h = o + f;
    q_(e, h, u, c);
  }), n.forEachChild(function(u, f) {
    _s(e, t, r.concat(f), u, i);
  });
}
function V_(e, t, r) {
  var n = t === "", i = {
    dispatch: n ? e.dispatch : function(s, o, a) {
      var l = Yi(s, o, a), c = l.payload, u = l.options, f = l.type;
      return (!u || !u.root) && (f = t + f), e.dispatch(f, c);
    },
    commit: n ? e.commit : function(s, o, a) {
      var l = Yi(s, o, a), c = l.payload, u = l.options, f = l.type;
      (!u || !u.root) && (f = t + f), e.commit(f, c, u);
    }
  };
  return Object.defineProperties(i, {
    getters: {
      get: n ? function() {
        return e.getters;
      } : function() {
        return fd(e, t);
      }
    },
    state: {
      get: function() {
        return za(e.state, r);
      }
    }
  }), i;
}
function fd(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var r = {}, n = t.length;
    Object.keys(e.getters).forEach(function(i) {
      if (i.slice(0, n) === t) {
        var s = i.slice(n);
        Object.defineProperty(r, s, {
          get: function() {
            return e.getters[i];
          },
          enumerable: !0
        });
      }
    }), e._makeLocalGettersCache[t] = r;
  }
  return e._makeLocalGettersCache[t];
}
function j_(e, t, r, n) {
  var i = e._mutations[t] || (e._mutations[t] = []);
  i.push(function(o) {
    r.call(e, n.state, o);
  });
}
function U_(e, t, r, n) {
  var i = e._actions[t] || (e._actions[t] = []);
  i.push(function(o) {
    var a = r.call(e, {
      dispatch: n.dispatch,
      commit: n.commit,
      getters: n.getters,
      state: n.state,
      rootGetters: e.getters,
      rootState: e.state
    }, o);
    return M_(a) || (a = Promise.resolve(a)), e._devtoolHook ? a.catch(function(l) {
      throw e._devtoolHook.emit("vuex:error", l), l;
    }) : a;
  });
}
function q_(e, t, r, n) {
  e._wrappedGetters[t] || (e._wrappedGetters[t] = function(s) {
    return r(
      n.state,
      // local state
      n.getters,
      // local getters
      s.state,
      // root state
      s.getters
      // root getters
    );
  });
}
function $_(e) {
  ot(function() {
    return e._state.data;
  }, function() {
  }, { deep: !0, flush: "sync" });
}
function za(e, t) {
  return t.reduce(function(r, n) {
    return r[n];
  }, e);
}
function Yi(e, t, r) {
  return ld(e) && e.type && (r = t, t = e, e = e.type), { type: e, payload: t, options: r };
}
var W_ = "vuex bindings", jc = "vuex:mutations", Zs = "vuex:actions", Qr = "vuex", Q_ = 0;
function H_(e, t) {
  A_(
    {
      id: "org.vuejs.vuex",
      app: e,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [W_]
    },
    function(r) {
      r.addTimelineLayer({
        id: jc,
        label: "Vuex Mutations",
        color: Uc
      }), r.addTimelineLayer({
        id: Zs,
        label: "Vuex Actions",
        color: Uc
      }), r.addInspector({
        id: Qr,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      }), r.on.getInspectorTree(function(n) {
        if (n.app === e && n.inspectorId === Qr)
          if (n.filter) {
            var i = [];
            md(i, t._modules.root, n.filter, ""), n.rootNodes = i;
          } else
            n.rootNodes = [
              pd(t._modules.root, "")
            ];
      }), r.on.getInspectorState(function(n) {
        if (n.app === e && n.inspectorId === Qr) {
          var i = n.nodeId;
          fd(t, i), n.state = z_(
            Y_(t._modules, i),
            i === "root" ? t.getters : t._makeLocalGettersCache,
            i
          );
        }
      }), r.on.editInspectorState(function(n) {
        if (n.app === e && n.inspectorId === Qr) {
          var i = n.nodeId, s = n.path;
          i !== "root" && (s = i.split("/").filter(Boolean).concat(s)), t._withCommit(function() {
            n.set(t._state.data, s, n.state.value);
          });
        }
      }), t.subscribe(function(n, i) {
        var s = {};
        n.payload && (s.payload = n.payload), s.state = i, r.notifyComponentUpdate(), r.sendInspectorTree(Qr), r.sendInspectorState(Qr), r.addTimelineEvent({
          layerId: jc,
          event: {
            time: Date.now(),
            title: n.type,
            data: s
          }
        });
      }), t.subscribeAction({
        before: function(n, i) {
          var s = {};
          n.payload && (s.payload = n.payload), n._id = Q_++, n._time = Date.now(), s.state = i, r.addTimelineEvent({
            layerId: Zs,
            event: {
              time: n._time,
              title: n.type,
              groupId: n._id,
              subtitle: "start",
              data: s
            }
          });
        },
        after: function(n, i) {
          var s = {}, o = Date.now() - n._time;
          s.duration = {
            _custom: {
              type: "duration",
              display: o + "ms",
              tooltip: "Action duration",
              value: o
            }
          }, n.payload && (s.payload = n.payload), s.state = i, r.addTimelineEvent({
            layerId: Zs,
            event: {
              time: Date.now(),
              title: n.type,
              groupId: n._id,
              subtitle: "end",
              data: s
            }
          });
        }
      });
    }
  );
}
var Uc = 8702998, B_ = 6710886, G_ = 16777215, hd = {
  label: "namespaced",
  textColor: G_,
  backgroundColor: B_
};
function dd(e) {
  return e && e !== "root" ? e.split("/").slice(-2, -1)[0] : "Root";
}
function pd(e, t) {
  return {
    id: t || "root",
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: dd(t),
    tags: e.namespaced ? [hd] : [],
    children: Object.keys(e._children).map(
      function(r) {
        return pd(
          e._children[r],
          t + r + "/"
        );
      }
    )
  };
}
function md(e, t, r, n) {
  n.includes(r) && e.push({
    id: n || "root",
    label: n.endsWith("/") ? n.slice(0, n.length - 1) : n || "Root",
    tags: t.namespaced ? [hd] : []
  }), Object.keys(t._children).forEach(function(i) {
    md(e, t._children[i], r, n + i + "/");
  });
}
function z_(e, t, r) {
  t = r === "root" ? t : t[r];
  var n = Object.keys(t), i = {
    state: Object.keys(e.state).map(function(o) {
      return {
        key: o,
        editable: !0,
        value: e.state[o]
      };
    })
  };
  if (n.length) {
    var s = K_(t);
    i.getters = Object.keys(s).map(function(o) {
      return {
        key: o.endsWith("/") ? dd(o) : o,
        editable: !1,
        value: $o(function() {
          return s[o];
        })
      };
    });
  }
  return i;
}
function K_(e) {
  var t = {};
  return Object.keys(e).forEach(function(r) {
    var n = r.split("/");
    if (n.length > 1) {
      var i = t, s = n.pop();
      n.forEach(function(o) {
        i[o] || (i[o] = {
          _custom: {
            value: {},
            display: o,
            tooltip: "Module",
            abstract: !0
          }
        }), i = i[o]._custom.value;
      }), i[s] = $o(function() {
        return e[r];
      });
    } else
      t[r] = $o(function() {
        return e[r];
      });
  }), t;
}
function Y_(e, t) {
  var r = t.split("/").filter(function(n) {
    return n;
  });
  return r.reduce(
    function(n, i, s) {
      var o = n[i];
      if (!o)
        throw new Error('Missing module "' + i + '" for path "' + t + '".');
      return s === r.length - 1 ? o : o._children;
    },
    t === "root" ? e : e.root._children
  );
}
function $o(e) {
  try {
    return e();
  } catch (t) {
    return t;
  }
}
var Lt = function(t, r) {
  this.runtime = r, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = t;
  var n = t.state;
  this.state = (typeof n == "function" ? n() : n) || {};
}, vd = { namespaced: { configurable: !0 } };
vd.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Lt.prototype.addChild = function(t, r) {
  this._children[t] = r;
};
Lt.prototype.removeChild = function(t) {
  delete this._children[t];
};
Lt.prototype.getChild = function(t) {
  return this._children[t];
};
Lt.prototype.hasChild = function(t) {
  return t in this._children;
};
Lt.prototype.update = function(t) {
  this._rawModule.namespaced = t.namespaced, t.actions && (this._rawModule.actions = t.actions), t.mutations && (this._rawModule.mutations = t.mutations), t.getters && (this._rawModule.getters = t.getters);
};
Lt.prototype.forEachChild = function(t) {
  In(this._children, t);
};
Lt.prototype.forEachGetter = function(t) {
  this._rawModule.getters && In(this._rawModule.getters, t);
};
Lt.prototype.forEachAction = function(t) {
  this._rawModule.actions && In(this._rawModule.actions, t);
};
Lt.prototype.forEachMutation = function(t) {
  this._rawModule.mutations && In(this._rawModule.mutations, t);
};
Object.defineProperties(Lt.prototype, vd);
var qr = function(t) {
  this.register([], t, !1);
};
qr.prototype.get = function(t) {
  return t.reduce(function(r, n) {
    return r.getChild(n);
  }, this.root);
};
qr.prototype.getNamespace = function(t) {
  var r = this.root;
  return t.reduce(function(n, i) {
    return r = r.getChild(i), n + (r.namespaced ? i + "/" : "");
  }, "");
};
qr.prototype.update = function(t) {
  gd([], this.root, t);
};
qr.prototype.register = function(t, r, n) {
  var i = this;
  n === void 0 && (n = !0);
  var s = new Lt(r, n);
  if (t.length === 0)
    this.root = s;
  else {
    var o = this.get(t.slice(0, -1));
    o.addChild(t[t.length - 1], s);
  }
  r.modules && In(r.modules, function(a, l) {
    i.register(t.concat(l), a, n);
  });
};
qr.prototype.unregister = function(t) {
  var r = this.get(t.slice(0, -1)), n = t[t.length - 1], i = r.getChild(n);
  i && i.runtime && r.removeChild(n);
};
qr.prototype.isRegistered = function(t) {
  var r = this.get(t.slice(0, -1)), n = t[t.length - 1];
  return r ? r.hasChild(n) : !1;
};
function gd(e, t, r) {
  if (t.update(r), r.modules)
    for (var n in r.modules) {
      if (!t.getChild(n))
        return;
      gd(
        e.concat(n),
        t.getChild(n),
        r.modules[n]
      );
    }
}
function X_(e) {
  return new ft(e);
}
var ft = function(t) {
  var r = this;
  t === void 0 && (t = {});
  var n = t.plugins;
  n === void 0 && (n = []);
  var i = t.strict;
  i === void 0 && (i = !1);
  var s = t.devtools;
  this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new qr(t), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null), this._scope = null, this._devtools = s;
  var o = this, a = this, l = a.dispatch, c = a.commit;
  this.dispatch = function(h, d) {
    return l.call(o, h, d);
  }, this.commit = function(h, d, E) {
    return c.call(o, h, d, E);
  }, this.strict = i;
  var u = this._modules.root.state;
  _s(this, u, [], this._modules.root), Ga(this, u), n.forEach(function(f) {
    return f(r);
  });
}, Ka = { state: { configurable: !0 } };
ft.prototype.install = function(t, r) {
  t.provide(r || x_, this), t.config.globalProperties.$store = this;
  var n = this._devtools !== void 0 ? this._devtools : !1;
  n && H_(t, this);
};
Ka.state.get = function() {
  return this._state.data;
};
Ka.state.set = function(e) {
};
ft.prototype.commit = function(t, r, n) {
  var i = this, s = Yi(t, r, n), o = s.type, a = s.payload, l = { type: o, payload: a }, c = this._mutations[o];
  c && (this._withCommit(function() {
    c.forEach(function(f) {
      f(a);
    });
  }), this._subscribers.slice().forEach(function(u) {
    return u(l, i.state);
  }));
};
ft.prototype.dispatch = function(t, r) {
  var n = this, i = Yi(t, r), s = i.type, o = i.payload, a = { type: s, payload: o }, l = this._actions[s];
  if (l) {
    try {
      this._actionSubscribers.slice().filter(function(u) {
        return u.before;
      }).forEach(function(u) {
        return u.before(a, n.state);
      });
    } catch {
    }
    var c = l.length > 1 ? Promise.all(l.map(function(u) {
      return u(o);
    })) : l[0](o);
    return new Promise(function(u, f) {
      c.then(function(h) {
        try {
          n._actionSubscribers.filter(function(d) {
            return d.after;
          }).forEach(function(d) {
            return d.after(a, n.state);
          });
        } catch {
        }
        u(h);
      }, function(h) {
        try {
          n._actionSubscribers.filter(function(d) {
            return d.error;
          }).forEach(function(d) {
            return d.error(a, n.state, h);
          });
        } catch {
        }
        f(h);
      });
    });
  }
};
ft.prototype.subscribe = function(t, r) {
  return cd(t, this._subscribers, r);
};
ft.prototype.subscribeAction = function(t, r) {
  var n = typeof t == "function" ? { before: t } : t;
  return cd(n, this._actionSubscribers, r);
};
ft.prototype.watch = function(t, r, n) {
  var i = this;
  return ot(function() {
    return t(i.state, i.getters);
  }, r, Object.assign({}, n));
};
ft.prototype.replaceState = function(t) {
  var r = this;
  this._withCommit(function() {
    r._state.data = t;
  });
};
ft.prototype.registerModule = function(t, r, n) {
  n === void 0 && (n = {}), typeof t == "string" && (t = [t]), this._modules.register(t, r), _s(this, this.state, t, this._modules.get(t), n.preserveState), Ga(this, this.state);
};
ft.prototype.unregisterModule = function(t) {
  var r = this;
  typeof t == "string" && (t = [t]), this._modules.unregister(t), this._withCommit(function() {
    var n = za(r.state, t.slice(0, -1));
    delete n[t[t.length - 1]];
  }), ud(this);
};
ft.prototype.hasModule = function(t) {
  return typeof t == "string" && (t = [t]), this._modules.isRegistered(t);
};
ft.prototype.hotUpdate = function(t) {
  this._modules.update(t), ud(this, !0);
};
ft.prototype._withCommit = function(t) {
  var r = this._committing;
  this._committing = !0, t(), this._committing = r;
};
Object.defineProperties(ft.prototype, Ka);
var J_ = _d(function(e, t) {
  var r = {};
  return yd(t).forEach(function(n) {
    var i = n.key, s = n.val;
    s = e + s, r[i] = function() {
      if (!(e && !bd(this.$store, "mapGetters", e)))
        return this.$store.getters[s];
    }, r[i].vuex = !0;
  }), r;
}), Z_ = _d(function(e, t) {
  var r = {};
  return yd(t).forEach(function(n) {
    var i = n.key, s = n.val;
    r[i] = function() {
      for (var a = [], l = arguments.length; l--; ) a[l] = arguments[l];
      var c = this.$store.dispatch;
      if (e) {
        var u = bd(this.$store, "mapActions", e);
        if (!u)
          return;
        c = u.context.dispatch;
      }
      return typeof s == "function" ? s.apply(this, [c].concat(a)) : c.apply(this.$store, [s].concat(a));
    };
  }), r;
});
function yd(e) {
  return eb(e) ? Array.isArray(e) ? e.map(function(t) {
    return { key: t, val: t };
  }) : Object.keys(e).map(function(t) {
    return { key: t, val: e[t] };
  }) : [];
}
function eb(e) {
  return Array.isArray(e) || ld(e);
}
function _d(e) {
  return function(t, r) {
    return typeof t != "string" ? (r = t, t = "") : t.charAt(t.length - 1) !== "/" && (t += "/"), e(t, r);
  };
}
function bd(e, t, r) {
  var n = e._modulesNamespaceMap[r];
  return n;
}
const tb = X_({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    increment(e) {
      e.count++;
    }
  },
  getters: {
    count: (e) => e.count
  },
  actions: {
    increment(e) {
      e.commit("increment");
    }
  }
});
/*!
  * shared v10.0.6
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Xi = typeof window < "u", wr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), rb = (e, t, r) => nb({ l: e, k: t, s: r }), nb = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), je = (e) => typeof e == "number" && isFinite(e), ib = (e) => Ya(e) === "[object Date]", mn = (e) => Ya(e) === "[object RegExp]", bs = (e) => ne(e) && Object.keys(e).length === 0, He = Object.assign, sb = Object.create, be = (e = null) => sb(e);
let qc;
const Ar = () => qc || (qc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : be());
function $c(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const ob = Object.prototype.hasOwnProperty;
function It(e, t) {
  return ob.call(e, t);
}
const Le = Array.isArray, De = (e) => typeof e == "function", B = (e) => typeof e == "string", fe = (e) => typeof e == "boolean", de = (e) => e !== null && typeof e == "object", ab = (e) => de(e) && De(e.then) && De(e.catch), Ed = Object.prototype.toString, Ya = (e) => Ed.call(e), ne = (e) => Ya(e) === "[object Object]", lb = (e) => e == null ? "" : Le(e) || ne(e) && e.toString === Ed ? JSON.stringify(e, null, 2) : String(e);
function Xa(e, t = "") {
  return e.reduce((r, n, i) => i === 0 ? r + n : r + t + n, "");
}
function cb(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Ri = (e) => !de(e) || Le(e);
function Vi(e, t) {
  if (Ri(e) || Ri(t))
    throw new Error("Invalid value");
  const r = [{ src: e, des: t }];
  for (; r.length; ) {
    const { src: n, des: i } = r.pop();
    Object.keys(n).forEach((s) => {
      s !== "__proto__" && (de(n[s]) && !de(i[s]) && (i[s] = Array.isArray(n[s]) ? [] : be()), Ri(i[s]) || Ri(n[s]) ? i[s] = n[s] : r.push({ src: n[s], des: i[s] }));
    });
  }
}
function ub(e, t, r) {
  return { line: e, column: t, offset: r };
}
function Wo(e, t, r) {
  return { start: e, end: t };
}
const ge = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14
}, fb = 17;
function Es(e, t, r = {}) {
  const { domain: n, messages: i, args: s } = r, o = e, a = new SyntaxError(String(o));
  return a.code = e, t && (a.location = t), a.domain = n, a;
}
function hb(e) {
  throw e;
}
const Ht = " ", db = "\r", rt = `
`, pb = "\u2028", mb = "\u2029";
function vb(e) {
  const t = e;
  let r = 0, n = 1, i = 1, s = 0;
  const o = (P) => t[P] === db && t[P + 1] === rt, a = (P) => t[P] === rt, l = (P) => t[P] === mb, c = (P) => t[P] === pb, u = (P) => o(P) || a(P) || l(P) || c(P), f = () => r, h = () => n, d = () => i, E = () => s, v = (P) => o(P) || l(P) || c(P) ? rt : t[P], w = () => v(r), p = () => v(r + s);
  function y() {
    return s = 0, u(r) && (n++, i = 0), o(r) && r++, r++, i++, t[r];
  }
  function _() {
    return o(r + s) && s++, s++, t[r + s];
  }
  function b() {
    r = 0, n = 1, i = 1, s = 0;
  }
  function T(P = 0) {
    s = P;
  }
  function D() {
    const P = r + s;
    for (; P !== r; )
      y();
    s = 0;
  }
  return {
    index: f,
    line: h,
    column: d,
    peekOffset: E,
    charAt: v,
    currentChar: w,
    currentPeek: p,
    next: y,
    peek: _,
    reset: b,
    resetPeek: T,
    skipToPeek: D
  };
}
const sr = void 0, gb = ".", Wc = "'", yb = "tokenizer";
function _b(e, t = {}) {
  const r = t.location !== !1, n = vb(e), i = () => n.index(), s = () => ub(n.line(), n.column(), n.index()), o = s(), a = i(), l = {
    currentType: 13,
    offset: a,
    startLoc: o,
    endLoc: o,
    lastType: 13,
    lastOffset: a,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => l, { onError: u } = t;
  function f(m, g, I, ...N) {
    const H = c();
    if (g.column += I, g.offset += I, u) {
      const j = r ? Wo(H.startLoc, g) : null, C = Es(m, j, {
        domain: yb,
        args: N
      });
      u(C);
    }
  }
  function h(m, g, I) {
    m.endLoc = s(), m.currentType = g;
    const N = { type: g };
    return r && (N.loc = Wo(m.startLoc, m.endLoc)), I != null && (N.value = I), N;
  }
  const d = (m) => h(
    m,
    13
    /* TokenTypes.EOF */
  );
  function E(m, g) {
    return m.currentChar() === g ? (m.next(), g) : (f(ge.EXPECTED_TOKEN, s(), 0, g), "");
  }
  function v(m) {
    let g = "";
    for (; m.currentPeek() === Ht || m.currentPeek() === rt; )
      g += m.currentPeek(), m.peek();
    return g;
  }
  function w(m) {
    const g = v(m);
    return m.skipToPeek(), g;
  }
  function p(m) {
    if (m === sr)
      return !1;
    const g = m.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g === 95;
  }
  function y(m) {
    if (m === sr)
      return !1;
    const g = m.charCodeAt(0);
    return g >= 48 && g <= 57;
  }
  function _(m, g) {
    const { currentType: I } = g;
    if (I !== 2)
      return !1;
    v(m);
    const N = p(m.currentPeek());
    return m.resetPeek(), N;
  }
  function b(m, g) {
    const { currentType: I } = g;
    if (I !== 2)
      return !1;
    v(m);
    const N = m.currentPeek() === "-" ? m.peek() : m.currentPeek(), H = y(N);
    return m.resetPeek(), H;
  }
  function T(m, g) {
    const { currentType: I } = g;
    if (I !== 2)
      return !1;
    v(m);
    const N = m.currentPeek() === Wc;
    return m.resetPeek(), N;
  }
  function D(m, g) {
    const { currentType: I } = g;
    if (I !== 7)
      return !1;
    v(m);
    const N = m.currentPeek() === ".";
    return m.resetPeek(), N;
  }
  function P(m, g) {
    const { currentType: I } = g;
    if (I !== 8)
      return !1;
    v(m);
    const N = p(m.currentPeek());
    return m.resetPeek(), N;
  }
  function q(m, g) {
    const { currentType: I } = g;
    if (!(I === 7 || I === 11))
      return !1;
    v(m);
    const N = m.currentPeek() === ":";
    return m.resetPeek(), N;
  }
  function z(m, g) {
    const { currentType: I } = g;
    if (I !== 9)
      return !1;
    const N = () => {
      const j = m.currentPeek();
      return j === "{" ? p(m.peek()) : j === "@" || j === "|" || j === ":" || j === "." || j === Ht || !j ? !1 : j === rt ? (m.peek(), N()) : ie(m, !1);
    }, H = N();
    return m.resetPeek(), H;
  }
  function W(m) {
    v(m);
    const g = m.currentPeek() === "|";
    return m.resetPeek(), g;
  }
  function ie(m, g = !0) {
    const I = (H = !1, j = "") => {
      const C = m.currentPeek();
      return C === "{" || C === "@" || !C ? H : C === "|" ? !(j === Ht || j === rt) : C === Ht ? (m.peek(), I(!0, Ht)) : C === rt ? (m.peek(), I(!0, rt)) : !0;
    }, N = I();
    return g && m.resetPeek(), N;
  }
  function te(m, g) {
    const I = m.currentChar();
    return I === sr ? sr : g(I) ? (m.next(), I) : null;
  }
  function Z(m) {
    const g = m.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g >= 48 && g <= 57 || // 0-9
    g === 95 || // _
    g === 36;
  }
  function xe(m) {
    return te(m, Z);
  }
  function $e(m) {
    const g = m.charCodeAt(0);
    return g >= 97 && g <= 122 || // a-z
    g >= 65 && g <= 90 || // A-Z
    g >= 48 && g <= 57 || // 0-9
    g === 95 || // _
    g === 36 || // $
    g === 45;
  }
  function ye(m) {
    return te(m, $e);
  }
  function se(m) {
    const g = m.charCodeAt(0);
    return g >= 48 && g <= 57;
  }
  function re(m) {
    return te(m, se);
  }
  function oe(m) {
    const g = m.charCodeAt(0);
    return g >= 48 && g <= 57 || // 0-9
    g >= 65 && g <= 70 || // A-F
    g >= 97 && g <= 102;
  }
  function Ge(m) {
    return te(m, oe);
  }
  function Me(m) {
    let g = "", I = "";
    for (; g = re(m); )
      I += g;
    return I;
  }
  function Ee(m) {
    let g = "";
    for (; ; ) {
      const I = m.currentChar();
      if (I === "{" || I === "}" || I === "@" || I === "|" || !I)
        break;
      if (I === Ht || I === rt)
        if (ie(m))
          g += I, m.next();
        else {
          if (W(m))
            break;
          g += I, m.next();
        }
      else
        g += I, m.next();
    }
    return g;
  }
  function ze(m) {
    w(m);
    let g = "", I = "";
    for (; g = ye(m); )
      I += g;
    return m.currentChar() === sr && f(ge.UNTERMINATED_CLOSING_BRACE, s(), 0), I;
  }
  function We(m) {
    w(m);
    let g = "";
    return m.currentChar() === "-" ? (m.next(), g += `-${Me(m)}`) : g += Me(m), m.currentChar() === sr && f(ge.UNTERMINATED_CLOSING_BRACE, s(), 0), g;
  }
  function mt(m) {
    return m !== Wc && m !== rt;
  }
  function Fe(m) {
    w(m), E(m, "'");
    let g = "", I = "";
    for (; g = te(m, mt); )
      g === "\\" ? I += M(m) : I += g;
    const N = m.currentChar();
    return N === rt || N === sr ? (f(ge.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), N === rt && (m.next(), E(m, "'")), I) : (E(m, "'"), I);
  }
  function M(m) {
    const g = m.currentChar();
    switch (g) {
      case "\\":
      case "'":
        return m.next(), `\\${g}`;
      case "u":
        return Q(m, g, 4);
      case "U":
        return Q(m, g, 6);
      default:
        return f(ge.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, g), "";
    }
  }
  function Q(m, g, I) {
    E(m, g);
    let N = "";
    for (let H = 0; H < I; H++) {
      const j = Ge(m);
      if (!j) {
        f(ge.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${g}${N}${m.currentChar()}`);
        break;
      }
      N += j;
    }
    return `\\${g}${N}`;
  }
  function $(m) {
    return m !== "{" && m !== "}" && m !== Ht && m !== rt;
  }
  function G(m) {
    w(m);
    let g = "", I = "";
    for (; g = te(m, $); )
      I += g;
    return I;
  }
  function le(m) {
    let g = "", I = "";
    for (; g = xe(m); )
      I += g;
    return I;
  }
  function S(m) {
    const g = (I) => {
      const N = m.currentChar();
      return N === "{" || N === "@" || N === "|" || N === "(" || N === ")" || !N || N === Ht ? I : (I += N, m.next(), g(I));
    };
    return g("");
  }
  function O(m) {
    w(m);
    const g = E(
      m,
      "|"
      /* TokenChars.Pipe */
    );
    return w(m), g;
  }
  function R(m, g) {
    let I = null;
    switch (m.currentChar()) {
      case "{":
        return g.braceNest >= 1 && f(ge.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), m.next(), I = h(
          g,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), w(m), g.braceNest++, I;
      case "}":
        return g.braceNest > 0 && g.currentType === 2 && f(ge.EMPTY_PLACEHOLDER, s(), 0), m.next(), I = h(
          g,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), g.braceNest--, g.braceNest > 0 && w(m), g.inLinked && g.braceNest === 0 && (g.inLinked = !1), I;
      case "@":
        return g.braceNest > 0 && f(ge.UNTERMINATED_CLOSING_BRACE, s(), 0), I = x(m, g) || d(g), g.braceNest = 0, I;
      default: {
        let H = !0, j = !0, C = !0;
        if (W(m))
          return g.braceNest > 0 && f(ge.UNTERMINATED_CLOSING_BRACE, s(), 0), I = h(g, 1, O(m)), g.braceNest = 0, g.inLinked = !1, I;
        if (g.braceNest > 0 && (g.currentType === 4 || g.currentType === 5 || g.currentType === 6))
          return f(ge.UNTERMINATED_CLOSING_BRACE, s(), 0), g.braceNest = 0, V(m, g);
        if (H = _(m, g))
          return I = h(g, 4, ze(m)), w(m), I;
        if (j = b(m, g))
          return I = h(g, 5, We(m)), w(m), I;
        if (C = T(m, g))
          return I = h(g, 6, Fe(m)), w(m), I;
        if (!H && !j && !C)
          return I = h(g, 12, G(m)), f(ge.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, I.value), w(m), I;
        break;
      }
    }
    return I;
  }
  function x(m, g) {
    const { currentType: I } = g;
    let N = null;
    const H = m.currentChar();
    switch ((I === 7 || I === 8 || I === 11 || I === 9) && (H === rt || H === Ht) && f(ge.INVALID_LINKED_FORMAT, s(), 0), H) {
      case "@":
        return m.next(), N = h(
          g,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), g.inLinked = !0, N;
      case ".":
        return w(m), m.next(), h(
          g,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return w(m), m.next(), h(
          g,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return W(m) ? (N = h(g, 1, O(m)), g.braceNest = 0, g.inLinked = !1, N) : D(m, g) || q(m, g) ? (w(m), x(m, g)) : P(m, g) ? (w(m), h(g, 11, le(m))) : z(m, g) ? (w(m), H === "{" ? R(m, g) || N : h(g, 10, S(m))) : (I === 7 && f(ge.INVALID_LINKED_FORMAT, s(), 0), g.braceNest = 0, g.inLinked = !1, V(m, g));
    }
  }
  function V(m, g) {
    let I = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (g.braceNest > 0)
      return R(m, g) || d(g);
    if (g.inLinked)
      return x(m, g) || d(g);
    switch (m.currentChar()) {
      case "{":
        return R(m, g) || d(g);
      case "}":
        return f(ge.UNBALANCED_CLOSING_BRACE, s(), 0), m.next(), h(
          g,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return x(m, g) || d(g);
      default: {
        if (W(m))
          return I = h(g, 1, O(m)), g.braceNest = 0, g.inLinked = !1, I;
        if (ie(m))
          return h(g, 0, Ee(m));
        break;
      }
    }
    return I;
  }
  function F() {
    const { currentType: m, offset: g, startLoc: I, endLoc: N } = l;
    return l.lastType = m, l.lastOffset = g, l.lastStartLoc = I, l.lastEndLoc = N, l.offset = i(), l.startLoc = s(), n.currentChar() === sr ? h(
      l,
      13
      /* TokenTypes.EOF */
    ) : V(n, l);
  }
  return {
    nextToken: F,
    currentOffset: i,
    currentPosition: s,
    context: c
  };
}
const bb = "parser", Eb = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Sb(e, t, r) {
  switch (e) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const n = parseInt(t || r, 16);
      return n <= 55295 || n >= 57344 ? String.fromCodePoint(n) : "�";
    }
  }
}
function wb(e = {}) {
  const t = e.location !== !1, { onError: r } = e;
  function n(p, y, _, b, ...T) {
    const D = p.currentPosition();
    if (D.offset += b, D.column += b, r) {
      const P = t ? Wo(_, D) : null, q = Es(y, P, {
        domain: bb,
        args: T
      });
      r(q);
    }
  }
  function i(p, y, _) {
    const b = { type: p };
    return t && (b.start = y, b.end = y, b.loc = { start: _, end: _ }), b;
  }
  function s(p, y, _, b) {
    t && (p.end = y, p.loc && (p.loc.end = _));
  }
  function o(p, y) {
    const _ = p.context(), b = i(3, _.offset, _.startLoc);
    return b.value = y, s(b, p.currentOffset(), p.currentPosition()), b;
  }
  function a(p, y) {
    const _ = p.context(), { lastOffset: b, lastStartLoc: T } = _, D = i(5, b, T);
    return D.index = parseInt(y, 10), p.nextToken(), s(D, p.currentOffset(), p.currentPosition()), D;
  }
  function l(p, y) {
    const _ = p.context(), { lastOffset: b, lastStartLoc: T } = _, D = i(4, b, T);
    return D.key = y, p.nextToken(), s(D, p.currentOffset(), p.currentPosition()), D;
  }
  function c(p, y) {
    const _ = p.context(), { lastOffset: b, lastStartLoc: T } = _, D = i(9, b, T);
    return D.value = y.replace(Eb, Sb), p.nextToken(), s(D, p.currentOffset(), p.currentPosition()), D;
  }
  function u(p) {
    const y = p.nextToken(), _ = p.context(), { lastOffset: b, lastStartLoc: T } = _, D = i(8, b, T);
    return y.type !== 11 ? (n(p, ge.UNEXPECTED_EMPTY_LINKED_MODIFIER, _.lastStartLoc, 0), D.value = "", s(D, b, T), {
      nextConsumeToken: y,
      node: D
    }) : (y.value == null && n(p, ge.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ft(y)), D.value = y.value || "", s(D, p.currentOffset(), p.currentPosition()), {
      node: D
    });
  }
  function f(p, y) {
    const _ = p.context(), b = i(7, _.offset, _.startLoc);
    return b.value = y, s(b, p.currentOffset(), p.currentPosition()), b;
  }
  function h(p) {
    const y = p.context(), _ = i(6, y.offset, y.startLoc);
    let b = p.nextToken();
    if (b.type === 8) {
      const T = u(p);
      _.modifier = T.node, b = T.nextConsumeToken || p.nextToken();
    }
    switch (b.type !== 9 && n(p, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ft(b)), b = p.nextToken(), b.type === 2 && (b = p.nextToken()), b.type) {
      case 10:
        b.value == null && n(p, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ft(b)), _.key = f(p, b.value || "");
        break;
      case 4:
        b.value == null && n(p, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ft(b)), _.key = l(p, b.value || "");
        break;
      case 5:
        b.value == null && n(p, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ft(b)), _.key = a(p, b.value || "");
        break;
      case 6:
        b.value == null && n(p, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ft(b)), _.key = c(p, b.value || "");
        break;
      default: {
        n(p, ge.UNEXPECTED_EMPTY_LINKED_KEY, y.lastStartLoc, 0);
        const T = p.context(), D = i(7, T.offset, T.startLoc);
        return D.value = "", s(D, T.offset, T.startLoc), _.key = D, s(_, T.offset, T.startLoc), {
          nextConsumeToken: b,
          node: _
        };
      }
    }
    return s(_, p.currentOffset(), p.currentPosition()), {
      node: _
    };
  }
  function d(p) {
    const y = p.context(), _ = y.currentType === 1 ? p.currentOffset() : y.offset, b = y.currentType === 1 ? y.endLoc : y.startLoc, T = i(2, _, b);
    T.items = [];
    let D = null;
    do {
      const z = D || p.nextToken();
      switch (D = null, z.type) {
        case 0:
          z.value == null && n(p, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ft(z)), T.items.push(o(p, z.value || ""));
          break;
        case 5:
          z.value == null && n(p, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ft(z)), T.items.push(a(p, z.value || ""));
          break;
        case 4:
          z.value == null && n(p, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ft(z)), T.items.push(l(p, z.value || ""));
          break;
        case 6:
          z.value == null && n(p, ge.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, Ft(z)), T.items.push(c(p, z.value || ""));
          break;
        case 7: {
          const W = h(p);
          T.items.push(W.node), D = W.nextConsumeToken || null;
          break;
        }
      }
    } while (y.currentType !== 13 && y.currentType !== 1);
    const P = y.currentType === 1 ? y.lastOffset : p.currentOffset(), q = y.currentType === 1 ? y.lastEndLoc : p.currentPosition();
    return s(T, P, q), T;
  }
  function E(p, y, _, b) {
    const T = p.context();
    let D = b.items.length === 0;
    const P = i(1, y, _);
    P.cases = [], P.cases.push(b);
    do {
      const q = d(p);
      D || (D = q.items.length === 0), P.cases.push(q);
    } while (T.currentType !== 13);
    return D && n(p, ge.MUST_HAVE_MESSAGES_IN_PLURAL, _, 0), s(P, p.currentOffset(), p.currentPosition()), P;
  }
  function v(p) {
    const y = p.context(), { offset: _, startLoc: b } = y, T = d(p);
    return y.currentType === 13 ? T : E(p, _, b, T);
  }
  function w(p) {
    const y = _b(p, He({}, e)), _ = y.context(), b = i(0, _.offset, _.startLoc);
    return t && b.loc && (b.loc.source = p), b.body = v(y), e.onCacheKey && (b.cacheKey = e.onCacheKey(p)), _.currentType !== 13 && n(y, ge.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, p[_.offset] || ""), s(b, y.currentOffset(), y.currentPosition()), b;
  }
  return { parse: w };
}
function Ft(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Ob(e, t = {}) {
  const r = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => r, helper: (s) => (r.helpers.add(s), s) };
}
function Qc(e, t) {
  for (let r = 0; r < e.length; r++)
    Ja(e[r], t);
}
function Ja(e, t) {
  switch (e.type) {
    case 1:
      Qc(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Qc(e.items, t);
      break;
    case 6: {
      Ja(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function Tb(e, t = {}) {
  const r = Ob(e);
  r.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ja(e.body, r);
  const n = r.context();
  e.helpers = Array.from(n.helpers);
}
function Ib(e) {
  const t = e.body;
  return t.type === 2 ? Hc(t) : t.cases.forEach((r) => Hc(r)), e;
}
function Hc(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let r = 0; r < e.items.length; r++) {
      const n = e.items[r];
      if (!(n.type === 3 || n.type === 9) || n.value == null)
        break;
      t.push(n.value);
    }
    if (t.length === e.items.length) {
      e.static = Xa(t);
      for (let r = 0; r < e.items.length; r++) {
        const n = e.items[r];
        (n.type === 3 || n.type === 9) && delete n.value;
      }
    }
  }
}
function zr(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      zr(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, r = t.cases;
      for (let n = 0; n < r.length; n++)
        zr(r[n]);
      t.c = r, delete t.cases;
      break;
    }
    case 2: {
      const t = e, r = t.items;
      for (let n = 0; n < r.length; n++)
        zr(r[n]);
      t.i = r, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      zr(t.key), t.k = t.key, delete t.key, t.modifier && (zr(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
  }
  delete e.type;
}
function Cb(e, t) {
  const { filename: r, breakLineCode: n, needIndent: i } = t, s = t.location !== !1, o = {
    filename: r,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: n,
    needIndent: i,
    indentLevel: 0
  };
  s && e.loc && (o.source = e.loc.source);
  const a = () => o;
  function l(v, w) {
    o.code += v;
  }
  function c(v, w = !0) {
    const p = w ? n : "";
    l(i ? p + "  ".repeat(v) : p);
  }
  function u(v = !0) {
    const w = ++o.indentLevel;
    v && c(w);
  }
  function f(v = !0) {
    const w = --o.indentLevel;
    v && c(w);
  }
  function h() {
    c(o.indentLevel);
  }
  return {
    context: a,
    push: l,
    indent: u,
    deindent: f,
    newline: h,
    helper: (v) => `_${v}`,
    needIndent: () => o.needIndent
  };
}
function Rb(e, t) {
  const { helper: r } = e;
  e.push(`${r(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), vn(e, t.key), t.modifier ? (e.push(", "), vn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function kb(e, t) {
  const { helper: r, needIndent: n } = e;
  e.push(`${r(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(n());
  const i = t.items.length;
  for (let s = 0; s < i && (vn(e, t.items[s]), s !== i - 1); s++)
    e.push(", ");
  e.deindent(n()), e.push("])");
}
function Db(e, t) {
  const { helper: r, needIndent: n } = e;
  if (t.cases.length > 1) {
    e.push(`${r(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(n());
    const i = t.cases.length;
    for (let s = 0; s < i && (vn(e, t.cases[s]), s !== i - 1); s++)
      e.push(", ");
    e.deindent(n()), e.push("])");
  }
}
function Pb(e, t) {
  t.body ? vn(e, t.body) : e.push("null");
}
function vn(e, t) {
  const { helper: r } = e;
  switch (t.type) {
    case 0:
      Pb(e, t);
      break;
    case 1:
      Db(e, t);
      break;
    case 2:
      kb(e, t);
      break;
    case 6:
      Rb(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${r(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${r(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${r(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${r(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
  }
}
const Nb = (e, t = {}) => {
  const r = B(t.mode) ? t.mode : "normal", n = B(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const i = t.breakLineCode != null ? t.breakLineCode : r === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : r !== "arrow", o = e.helpers || [], a = Cb(e, {
    filename: n,
    breakLineCode: i,
    needIndent: s
  });
  a.push(r === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), a.indent(s), o.length > 0 && (a.push(`const { ${Xa(o.map((u) => `${u}: _${u}`), ", ")} } = ctx`), a.newline()), a.push("return "), vn(a, e), a.deindent(s), a.push("}"), delete e.helpers;
  const { code: l, map: c } = a.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function Ab(e, t = {}) {
  const r = He({}, t), n = !!r.jit, i = !!r.minify, s = r.optimize == null ? !0 : r.optimize, a = wb(r).parse(e);
  return n ? (s && Ib(a), i && zr(a), { ast: a, code: "" }) : (Tb(a, r), Nb(a, r));
}
var Lb = { NODE_ENV: "production" };
function xb() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ar().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ar().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function eo(e) {
  return (r) => Mb(r, e);
}
function Mb(e, t) {
  const r = Vb(t);
  if (r == null)
    throw ci(
      0
      /* NodeTypes.Resource */
    );
  if (Za(r) === 1) {
    const s = Ub(r);
    return e.plural(s.reduce((o, a) => [
      ...o,
      Bc(e, a)
    ], []));
  } else
    return Bc(e, r);
}
const Fb = ["b", "body"];
function Vb(e) {
  return Or(e, Fb);
}
const jb = ["c", "cases"];
function Ub(e) {
  return Or(e, jb, []);
}
function Bc(e, t) {
  const r = $b(t);
  if (r != null)
    return e.type === "text" ? r : e.normalize([r]);
  {
    const n = Qb(t).reduce((i, s) => [...i, Qo(e, s)], []);
    return e.normalize(n);
  }
}
const qb = ["s", "static"];
function $b(e) {
  return Or(e, qb);
}
const Wb = ["i", "items"];
function Qb(e) {
  return Or(e, Wb, []);
}
function Qo(e, t) {
  const r = Za(t);
  switch (r) {
    case 3:
      return ki(t, r);
    case 9:
      return ki(t, r);
    case 4: {
      const n = t;
      if (It(n, "k") && n.k)
        return e.interpolate(e.named(n.k));
      if (It(n, "key") && n.key)
        return e.interpolate(e.named(n.key));
      throw ci(r);
    }
    case 5: {
      const n = t;
      if (It(n, "i") && je(n.i))
        return e.interpolate(e.list(n.i));
      if (It(n, "index") && je(n.index))
        return e.interpolate(e.list(n.index));
      throw ci(r);
    }
    case 6: {
      const n = t, i = zb(n), s = Yb(n);
      return e.linked(Qo(e, s), i ? Qo(e, i) : void 0, e.type);
    }
    case 7:
      return ki(t, r);
    case 8:
      return ki(t, r);
    default:
      throw new Error(`unhandled node on format message part: ${r}`);
  }
}
const Hb = ["t", "type"];
function Za(e) {
  return Or(e, Hb);
}
const Bb = ["v", "value"];
function ki(e, t) {
  const r = Or(e, Bb);
  if (r)
    return r;
  throw ci(t);
}
const Gb = ["m", "modifier"];
function zb(e) {
  return Or(e, Gb);
}
const Kb = ["k", "key"];
function Yb(e) {
  const t = Or(e, Kb);
  if (t)
    return t;
  throw ci(
    6
    /* NodeTypes.Linked */
  );
}
function Or(e, t, r) {
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (It(e, i) && e[i] != null)
      return e[i];
  }
  return r;
}
function ci(e) {
  return new Error(`unhandled node type: ${e}`);
}
const Xb = (e) => e;
let Di = be();
function gn(e) {
  return de(e) && Za(e) === 0 && (It(e, "b") || It(e, "body"));
}
function Jb(e, t = {}) {
  let r = !1;
  const n = t.onError || hb;
  return t.onError = (i) => {
    r = !0, n(i);
  }, { ...Ab(e, t), detectError: r };
}
// @__NO_SIDE_EFFECTS__
function Zb(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && B(e)) {
    fe(t.warnHtmlMessage) && t.warnHtmlMessage;
    const n = (t.onCacheKey || Xb)(e), i = Di[n];
    if (i)
      return i;
    const { ast: s, detectError: o } = Jb(e, {
      ...t,
      location: Lb.NODE_ENV !== "production",
      jit: !0
    }), a = eo(s);
    return o ? a : Di[n] = a;
  } else {
    const r = e.cacheKey;
    if (r) {
      const n = Di[r];
      return n || (Di[r] = eo(e));
    } else
      return eo(e);
  }
}
let ui = null;
function e0(e) {
  ui = e;
}
function t0(e, t, r) {
  ui && ui.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: r
  });
}
const r0 = /* @__PURE__ */ n0("function:translate");
function n0(e) {
  return (t) => ui && ui.emit(e, t);
}
const Yt = {
  INVALID_ARGUMENT: fb,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, i0 = 24;
function Xt(e) {
  return Es(e, null, void 0);
}
function el(e, t) {
  return t.locale != null ? Gc(t.locale) : Gc(e.locale);
}
let to;
function Gc(e) {
  if (B(e))
    return e;
  if (De(e)) {
    if (e.resolvedOnce && to != null)
      return to;
    if (e.constructor.name === "Function") {
      const t = e();
      if (ab(t))
        throw Xt(Yt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return to = t;
    } else
      throw Xt(Yt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Xt(Yt.NOT_SUPPORT_LOCALE_TYPE);
}
function s0(e, t, r) {
  return [.../* @__PURE__ */ new Set([
    r,
    ...Le(t) ? t : de(t) ? Object.keys(t) : B(t) ? [t] : [r]
  ])];
}
function Sd(e, t, r) {
  const n = B(r) ? r : fi, i = e;
  i.__localeChainCache || (i.__localeChainCache = /* @__PURE__ */ new Map());
  let s = i.__localeChainCache.get(n);
  if (!s) {
    s = [];
    let o = [r];
    for (; Le(o); )
      o = zc(s, o, t);
    const a = Le(t) || !ne(t) ? t : t.default ? t.default : null;
    o = B(a) ? [a] : a, Le(o) && zc(s, o, !1), i.__localeChainCache.set(n, s);
  }
  return s;
}
function zc(e, t, r) {
  let n = !0;
  for (let i = 0; i < t.length && fe(n); i++) {
    const s = t[i];
    B(s) && (n = o0(e, t[i], r));
  }
  return n;
}
function o0(e, t, r) {
  let n;
  const i = t.split("-");
  do {
    const s = i.join("-");
    n = a0(e, s, r), i.splice(-1, 1);
  } while (i.length && n === !0);
  return n;
}
function a0(e, t, r) {
  let n = !1;
  if (!e.includes(t) && (n = !0, t)) {
    n = t[t.length - 1] !== "!";
    const i = t.replace(/!/g, "");
    e.push(i), (Le(r) || ne(r)) && r[i] && (n = r[i]);
  }
  return n;
}
const Tr = [];
Tr[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Tr[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
Tr[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
Tr[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
Tr[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
Tr[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
Tr[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const l0 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function c0(e) {
  return l0.test(e);
}
function u0(e) {
  const t = e.charCodeAt(0), r = e.charCodeAt(e.length - 1);
  return t === r && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function f0(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return e;
    case 95:
    // _
    case 36:
    // $
    case 45:
      return "i";
    case 9:
    // Tab (HT)
    case 10:
    // Newline (LF)
    case 13:
    // Return (CR)
    case 160:
    // No-break space (NBSP)
    case 65279:
    // Byte Order Mark (BOM)
    case 8232:
    // Line Separator (LS)
    case 8233:
      return "w";
  }
  return "i";
}
function h0(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : c0(t) ? u0(t) : "*" + t;
}
function d0(e) {
  const t = [];
  let r = -1, n = 0, i = 0, s, o, a, l, c, u, f;
  const h = [];
  h[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = a : o += a;
  }, h[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (t.push(o), o = void 0);
  }, h[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    h[
      0
      /* Actions.APPEND */
    ](), i++;
  }, h[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (i > 0)
      i--, n = 4, h[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (i = 0, o === void 0 || (o = h0(o), o === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function d() {
    const E = e[r + 1];
    if (n === 5 && E === "'" || n === 6 && E === '"')
      return r++, a = "\\" + E, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; n !== null; )
    if (r++, s = e[r], !(s === "\\" && d())) {
      if (l = f0(s), f = Tr[n], c = f[l] || f.l || 8, c === 8 || (n = c[0], c[1] !== void 0 && (u = h[c[1]], u && (a = s, u() === !1))))
        return;
      if (n === 7)
        return t;
    }
}
const Kc = /* @__PURE__ */ new Map();
function p0(e, t) {
  return de(e) ? e[t] : null;
}
function m0(e, t) {
  if (!de(e))
    return null;
  let r = Kc.get(t);
  if (r || (r = d0(t), r && Kc.set(t, r)), !r)
    return null;
  const n = r.length;
  let i = e, s = 0;
  for (; s < n; ) {
    const o = i[r[s]];
    if (o === void 0 || De(i))
      return null;
    i = o, s++;
  }
  return i;
}
const v0 = "10.0.6", Ss = -1, fi = "en-US", Yc = "", Xc = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function g0() {
  return {
    upper: (e, t) => t === "text" && B(e) ? e.toUpperCase() : t === "vnode" && de(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && B(e) ? e.toLowerCase() : t === "vnode" && de(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && B(e) ? Xc(e) : t === "vnode" && de(e) && "__v_isVNode" in e ? Xc(e.children) : e
  };
}
let wd;
function y0(e) {
  wd = e;
}
let Od;
function _0(e) {
  Od = e;
}
let Td;
function b0(e) {
  Td = e;
}
let Id = null;
const E0 = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Id = e;
}, S0 = /* @__NO_SIDE_EFFECTS__ */ () => Id;
let Cd = null;
const Jc = (e) => {
  Cd = e;
}, w0 = () => Cd;
let Zc = 0;
function O0(e = {}) {
  const t = De(e.onWarn) ? e.onWarn : cb, r = B(e.version) ? e.version : v0, n = B(e.locale) || De(e.locale) ? e.locale : fi, i = De(n) ? fi : n, s = Le(e.fallbackLocale) || ne(e.fallbackLocale) || B(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = ne(e.messages) ? e.messages : ro(i), a = ne(e.datetimeFormats) ? e.datetimeFormats : ro(i), l = ne(e.numberFormats) ? e.numberFormats : ro(i), c = He(be(), e.modifiers, g0()), u = e.pluralRules || be(), f = De(e.missing) ? e.missing : null, h = fe(e.missingWarn) || mn(e.missingWarn) ? e.missingWarn : !0, d = fe(e.fallbackWarn) || mn(e.fallbackWarn) ? e.fallbackWarn : !0, E = !!e.fallbackFormat, v = !!e.unresolving, w = De(e.postTranslation) ? e.postTranslation : null, p = ne(e.processor) ? e.processor : null, y = fe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, _ = !!e.escapeParameter, b = De(e.messageCompiler) ? e.messageCompiler : wd, T = De(e.messageResolver) ? e.messageResolver : Od || p0, D = De(e.localeFallbacker) ? e.localeFallbacker : Td || s0, P = de(e.fallbackContext) ? e.fallbackContext : void 0, q = e, z = de(q.__datetimeFormatters) ? q.__datetimeFormatters : /* @__PURE__ */ new Map(), W = de(q.__numberFormatters) ? q.__numberFormatters : /* @__PURE__ */ new Map(), ie = de(q.__meta) ? q.__meta : {};
  Zc++;
  const te = {
    version: r,
    cid: Zc,
    locale: n,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: h,
    fallbackWarn: d,
    fallbackFormat: E,
    unresolving: v,
    postTranslation: w,
    processor: p,
    warnHtmlMessage: y,
    escapeParameter: _,
    messageCompiler: b,
    messageResolver: T,
    localeFallbacker: D,
    fallbackContext: P,
    onWarn: t,
    __meta: ie
  };
  return te.datetimeFormats = a, te.numberFormats = l, te.__datetimeFormatters = z, te.__numberFormatters = W, __INTLIFY_PROD_DEVTOOLS__ && t0(te, r, ie), te;
}
const ro = (e) => ({ [e]: be() });
function tl(e, t, r, n, i) {
  const { missing: s, onWarn: o } = e;
  if (s !== null) {
    const a = s(e, r, t, i);
    return B(a) ? a : t;
  } else
    return t;
}
function An(e, t, r) {
  const n = e;
  n.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, r, t);
}
function T0(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function I0(e, t) {
  const r = t.indexOf(e);
  if (r === -1)
    return !1;
  for (let n = r + 1; n < t.length; n++)
    if (T0(e, t[n]))
      return !0;
  return !1;
}
function eu(e, ...t) {
  const { datetimeFormats: r, unresolving: n, fallbackLocale: i, onWarn: s, localeFallbacker: o } = e, { __datetimeFormatters: a } = e, [l, c, u, f] = Ho(...t), h = fe(u.missingWarn) ? u.missingWarn : e.missingWarn;
  fe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const d = !!u.part, E = el(e, u), v = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    i,
    E
  );
  if (!B(l) || l === "")
    return new Intl.DateTimeFormat(E, f).format(c);
  let w = {}, p, y = null;
  const _ = "datetime format";
  for (let D = 0; D < v.length && (p = v[D], w = r[p] || {}, y = w[l], !ne(y)); D++)
    tl(e, l, p, h, _);
  if (!ne(y) || !B(p))
    return n ? Ss : l;
  let b = `${p}__${l}`;
  bs(f) || (b = `${b}__${JSON.stringify(f)}`);
  let T = a.get(b);
  return T || (T = new Intl.DateTimeFormat(p, He({}, y, f)), a.set(b, T)), d ? T.formatToParts(c) : T.format(c);
}
const Rd = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function Ho(...e) {
  const [t, r, n, i] = e, s = be();
  let o = be(), a;
  if (B(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Xt(Yt.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    a = new Date(c);
    try {
      a.toISOString();
    } catch {
      throw Xt(Yt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (ib(t)) {
    if (isNaN(t.getTime()))
      throw Xt(Yt.INVALID_DATE_ARGUMENT);
    a = t;
  } else if (je(t))
    a = t;
  else
    throw Xt(Yt.INVALID_ARGUMENT);
  return B(r) ? s.key = r : ne(r) && Object.keys(r).forEach((l) => {
    Rd.includes(l) ? o[l] = r[l] : s[l] = r[l];
  }), B(n) ? s.locale = n : ne(n) && (o = n), ne(i) && (o = i), [s.key || "", a, s, o];
}
function tu(e, t, r) {
  const n = e;
  for (const i in r) {
    const s = `${t}__${i}`;
    n.__datetimeFormatters.has(s) && n.__datetimeFormatters.delete(s);
  }
}
function ru(e, ...t) {
  const { numberFormats: r, unresolving: n, fallbackLocale: i, onWarn: s, localeFallbacker: o } = e, { __numberFormatters: a } = e, [l, c, u, f] = Bo(...t), h = fe(u.missingWarn) ? u.missingWarn : e.missingWarn;
  fe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const d = !!u.part, E = el(e, u), v = o(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    i,
    E
  );
  if (!B(l) || l === "")
    return new Intl.NumberFormat(E, f).format(c);
  let w = {}, p, y = null;
  const _ = "number format";
  for (let D = 0; D < v.length && (p = v[D], w = r[p] || {}, y = w[l], !ne(y)); D++)
    tl(e, l, p, h, _);
  if (!ne(y) || !B(p))
    return n ? Ss : l;
  let b = `${p}__${l}`;
  bs(f) || (b = `${b}__${JSON.stringify(f)}`);
  let T = a.get(b);
  return T || (T = new Intl.NumberFormat(p, He({}, y, f)), a.set(b, T)), d ? T.formatToParts(c) : T.format(c);
}
const kd = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function Bo(...e) {
  const [t, r, n, i] = e, s = be();
  let o = be();
  if (!je(t))
    throw Xt(Yt.INVALID_ARGUMENT);
  const a = t;
  return B(r) ? s.key = r : ne(r) && Object.keys(r).forEach((l) => {
    kd.includes(l) ? o[l] = r[l] : s[l] = r[l];
  }), B(n) ? s.locale = n : ne(n) && (o = n), ne(i) && (o = i), [s.key || "", a, s, o];
}
function nu(e, t, r) {
  const n = e;
  for (const i in r) {
    const s = `${t}__${i}`;
    n.__numberFormatters.has(s) && n.__numberFormatters.delete(s);
  }
}
const C0 = (e) => e, R0 = (e) => "", k0 = "text", D0 = (e) => e.length === 0 ? "" : Xa(e), P0 = lb;
function iu(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function N0(e) {
  const t = je(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (je(e.named.count) || je(e.named.n)) ? je(e.named.count) ? e.named.count : je(e.named.n) ? e.named.n : t : t;
}
function A0(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function L0(e = {}) {
  const t = e.locale, r = N0(e), n = de(e.pluralRules) && B(t) && De(e.pluralRules[t]) ? e.pluralRules[t] : iu, i = de(e.pluralRules) && B(t) && De(e.pluralRules[t]) ? iu : void 0, s = (p) => p[n(r, p.length, i)], o = e.list || [], a = (p) => o[p], l = e.named || be();
  je(e.pluralIndex) && A0(r, l);
  const c = (p) => l[p];
  function u(p, y) {
    const _ = De(e.messages) ? e.messages(p, !!y) : de(e.messages) ? e.messages[p] : !1;
    return _ || (e.parent ? e.parent.message(p) : R0);
  }
  const f = (p) => e.modifiers ? e.modifiers[p] : C0, h = ne(e.processor) && De(e.processor.normalize) ? e.processor.normalize : D0, d = ne(e.processor) && De(e.processor.interpolate) ? e.processor.interpolate : P0, E = ne(e.processor) && B(e.processor.type) ? e.processor.type : k0, w = {
    list: a,
    named: c,
    plural: s,
    linked: (p, ...y) => {
      const [_, b] = y;
      let T = "text", D = "";
      y.length === 1 ? de(_) ? (D = _.modifier || D, T = _.type || T) : B(_) && (D = _ || D) : y.length === 2 && (B(_) && (D = _ || D), B(b) && (T = b || T));
      const P = u(p, !0)(w), q = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && Le(P) && D ? P[0] : P
      );
      return D ? f(D)(q, T) : q;
    },
    message: u,
    type: E,
    interpolate: d,
    normalize: h,
    values: He(be(), o, l)
  };
  return w;
}
const su = () => "", gt = (e) => De(e);
function ou(e, ...t) {
  const { fallbackFormat: r, postTranslation: n, unresolving: i, messageCompiler: s, fallbackLocale: o, messages: a } = e, [l, c] = Go(...t), u = fe(c.missingWarn) ? c.missingWarn : e.missingWarn, f = fe(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, h = fe(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, d = !!c.resolvedMessage, E = B(c.default) || fe(c.default) ? fe(c.default) ? s ? l : () => l : c.default : r ? s ? l : () => l : null, v = r || E != null && (B(E) || De(E)), w = el(e, c);
  h && x0(c);
  let [p, y, _] = d ? [
    l,
    w,
    a[w] || be()
  ] : Dd(e, l, w, o, f, u), b = p, T = l;
  if (!d && !(B(b) || gn(b) || gt(b)) && v && (b = E, T = b), !d && (!(B(b) || gn(b) || gt(b)) || !B(y)))
    return i ? Ss : l;
  let D = !1;
  const P = () => {
    D = !0;
  }, q = gt(b) ? b : Pd(e, l, y, b, T, P);
  if (D)
    return b;
  const z = V0(e, y, _, c), W = L0(z), ie = M0(e, q, W), te = n ? n(ie, l) : ie;
  if (__INTLIFY_PROD_DEVTOOLS__) {
    const Z = {
      timestamp: Date.now(),
      key: B(l) ? l : gt(b) ? b.key : "",
      locale: y || (gt(b) ? b.locale : ""),
      format: B(b) ? b : gt(b) ? b.source : "",
      message: te
    };
    Z.meta = He({}, e.__meta, /* @__PURE__ */ S0() || {}), r0(Z);
  }
  return te;
}
function x0(e) {
  Le(e.list) ? e.list = e.list.map((t) => B(t) ? $c(t) : t) : de(e.named) && Object.keys(e.named).forEach((t) => {
    B(e.named[t]) && (e.named[t] = $c(e.named[t]));
  });
}
function Dd(e, t, r, n, i, s) {
  const { messages: o, onWarn: a, messageResolver: l, localeFallbacker: c } = e, u = c(e, n, r);
  let f = be(), h, d = null;
  const E = "translate";
  for (let v = 0; v < u.length && (h = u[v], f = o[h] || be(), (d = l(f, t)) === null && (d = f[t]), !(B(d) || gn(d) || gt(d))); v++)
    if (!I0(h, u)) {
      const w = tl(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        s,
        E
      );
      w !== t && (d = w);
    }
  return [d, h, f];
}
function Pd(e, t, r, n, i, s) {
  const { messageCompiler: o, warnHtmlMessage: a } = e;
  if (gt(n)) {
    const c = n;
    return c.locale = c.locale || r, c.key = c.key || t, c;
  }
  if (o == null) {
    const c = () => n;
    return c.locale = r, c.key = t, c;
  }
  const l = o(n, F0(e, r, i, n, a, s));
  return l.locale = r, l.key = t, l.source = n, l;
}
function M0(e, t, r) {
  return t(r);
}
function Go(...e) {
  const [t, r, n] = e, i = be();
  if (!B(t) && !je(t) && !gt(t) && !gn(t))
    throw Xt(Yt.INVALID_ARGUMENT);
  const s = je(t) ? String(t) : (gt(t), t);
  return je(r) ? i.plural = r : B(r) ? i.default = r : ne(r) && !bs(r) ? i.named = r : Le(r) && (i.list = r), je(n) ? i.plural = n : B(n) ? i.default = n : ne(n) && He(i, n), [s, i];
}
function F0(e, t, r, n, i, s) {
  return {
    locale: t,
    key: r,
    warnHtmlMessage: i,
    onError: (o) => {
      throw s && s(o), o;
    },
    onCacheKey: (o) => rb(t, r, o)
  };
}
function V0(e, t, r, n) {
  const { modifiers: i, pluralRules: s, messageResolver: o, fallbackLocale: a, fallbackWarn: l, missingWarn: c, fallbackContext: u } = e, h = {
    locale: t,
    modifiers: i,
    pluralRules: s,
    messages: (d, E) => {
      let v = o(r, d);
      if (v == null && (u || E)) {
        const [, , w] = Dd(
          u || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          d,
          t,
          a,
          l,
          c
        );
        v = o(w, d);
      }
      if (B(v) || gn(v)) {
        let w = !1;
        const y = Pd(e, d, t, v, d, () => {
          w = !0;
        });
        return w ? su : y;
      } else return gt(v) ? v : su;
    }
  };
  return e.processor && (h.processor = e.processor), n.list && (h.list = n.list), n.named && (h.named = n.named), je(n.plural) && (h.pluralIndex = n.plural), h;
}
xb();
var j0 = { NVM_INC: "/Users/agarwalh/.nvm/versions/node/v20.17.0/include/node", TERM_PROGRAM: "vscode", NODE: "/Users/agarwalh/.nvm/versions/node/v20.17.0/bin/node", INIT_CWD: "/Users/agarwalh/learning/web-components/vue-web-components", NVM_CD_FLAGS: "-q", TERM: "xterm-256color", SHELL: "/bin/zsh", TMPDIR: "/var/folders/98/kmt8cq9j53qdfhqm_npm7yv40000gn/T/", npm_config_global_prefix: "/Users/agarwalh/.nvm/versions/node/v20.17.0", TERM_PROGRAM_VERSION: "1.98.2", ZDOTDIR: "/Users/agarwalh", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/agarwalh/learning/web-components/vue-web-components", NVM_DIR: "/Users/agarwalh/.nvm", USER: "agarwalh", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/agarwalh/.nvm/versions/node/v20.17.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.MgZI78xKYq/Listeners", VSCODE_PROFILE_INITIALIZED: "1", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/agarwalh/.nvm/versions/node/v20.17.0/lib/node_modules/npm/bin/npm-cli.js", NPM_TOKEN: "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", PATH: "/Users/agarwalh/learning/web-components/vue-web-components/node_modules/.bin:/Users/agarwalh/learning/web-components/node_modules/.bin:/Users/agarwalh/learning/node_modules/.bin:/Users/agarwalh/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/agarwalh/.nvm/versions/node/v20.17.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/agarwalh/.nvm/versions/node/v20.17.0/bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/Library/Frameworks/Python.framework/Versions/3.13/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/usr/local/share/dotnet:~/.dotnet/tools:/Users/agarwalh/.nvm/versions/node/v20.17.0/bin:/Library/Frameworks/Python.framework/Versions/2.7/bin:/Library/Frameworks/Python.framework/Versions/3.13/bin:/opt/homebrew/bin:/Users/agarwalh/Library/Application Support/Code/User/globalStorage/github.copilot-chat/debugCommand:/opt/homebrew/bin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin", npm_package_json: "/Users/agarwalh/learning/web-components/vue-web-components/package.json", _: "/Users/agarwalh/learning/web-components/vue-web-components/node_modules/.bin/vite", npm_config_userconfig: "/Users/agarwalh/.npmrc", npm_config_init_module: "/Users/agarwalh/.npm-init.js", USER_ZDOTDIR: "/Users/agarwalh", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/agarwalh/learning/web-components/vue-web-components", npm_lifecycle_event: "build:wc", EDITOR: "vi", npm_package_name: "vue-web-components", LANG: "en_US.UTF-8", npm_config_npm_version: "10.8.2", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/agarwalh/.nvm/versions/node/v20.17.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.0.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/agarwalh", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", npm_config_cache: "/Users/agarwalh/.npm", LOGNAME: "agarwalh", npm_lifecycle_script: "vite build --config vite.wc.config.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/98/kmt8cq9j53qdfhqm_npm7yv40000gn/T/vscode-git-c54c73559a.sock", NVM_BIN: "/Users/agarwalh/.nvm/versions/node/v20.17.0/bin", npm_config_user_agent: "npm/10.8.2 node/v20.17.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", npm_node_execpath: "/Users/agarwalh/.nvm/versions/node/v20.17.0/bin/node", npm_config_prefix: "/Users/agarwalh/.nvm/versions/node/v20.17.0", COLORTERM: "truecolor", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
const U0 = "10.0.6";
function q0() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ar().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ar().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ar().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ar().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const lt = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: i0,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: 25,
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: 26,
  NOT_INSTALLED: 27,
  // directive module errors
  REQUIRED_VALUE: 28,
  INVALID_VALUE: 29,
  NOT_INSTALLED_WITH_PROVIDE: 31,
  // unexpected error
  UNEXPECTED_ERROR: 32
};
function ut(e, ...t) {
  return Es(e, null, void 0);
}
const zo = /* @__PURE__ */ wr("__translateVNode"), Ko = /* @__PURE__ */ wr("__datetimeParts"), Yo = /* @__PURE__ */ wr("__numberParts"), Nd = wr("__setPluralRules"), Ad = /* @__PURE__ */ wr("__injectWithOption"), Xo = /* @__PURE__ */ wr("__dispose");
function hi(e) {
  if (!de(e))
    return e;
  for (const t in e)
    if (It(e, t))
      if (!t.includes("."))
        de(e[t]) && hi(e[t]);
      else {
        const r = t.split("."), n = r.length - 1;
        let i = e, s = !1;
        for (let o = 0; o < n; o++) {
          if (r[o] === "__proto__")
            throw new Error(`unsafe key: ${r[o]}`);
          if (r[o] in i || (i[r[o]] = be()), !de(i[r[o]])) {
            s = !0;
            break;
          }
          i = i[r[o]];
        }
        s || (i[r[n]] = e[t], delete e[t]), de(i[r[n]]) && hi(i[r[n]]);
      }
  return e;
}
function rl(e, t) {
  const { messages: r, __i18n: n, messageResolver: i, flatJson: s } = t, o = ne(r) ? r : Le(n) ? be() : { [e]: be() };
  if (Le(n) && n.forEach((a) => {
    if ("locale" in a && "resource" in a) {
      const { locale: l, resource: c } = a;
      l ? (o[l] = o[l] || be(), Vi(c, o[l])) : Vi(c, o);
    } else
      B(a) && Vi(JSON.parse(a), o);
  }), i == null && s)
    for (const a in o)
      It(o, a) && hi(o[a]);
  return o;
}
function Ld(e) {
  return e.type;
}
function xd(e, t, r) {
  let n = de(t.messages) ? t.messages : be();
  "__i18nGlobal" in r && (n = rl(e.locale.value, {
    messages: n,
    __i18n: r.__i18nGlobal
  }));
  const i = Object.keys(n);
  i.length && i.forEach((s) => {
    e.mergeLocaleMessage(s, n[s]);
  });
  {
    if (de(t.datetimeFormats)) {
      const s = Object.keys(t.datetimeFormats);
      s.length && s.forEach((o) => {
        e.mergeDateTimeFormat(o, t.datetimeFormats[o]);
      });
    }
    if (de(t.numberFormats)) {
      const s = Object.keys(t.numberFormats);
      s.length && s.forEach((o) => {
        e.mergeNumberFormat(o, t.numberFormats[o]);
      });
    }
  }
}
function au(e) {
  return ke(mi, null, e, 0);
}
const lu = "__INTLIFY_META__", cu = () => [], $0 = () => !1;
let uu = 0;
function fu(e) {
  return (t, r, n, i) => e(r, n, un() || void 0, i);
}
const W0 = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = un();
  let t = null;
  return e && (t = Ld(e)[lu]) ? { [lu]: t } : null;
};
function nl(e = {}) {
  const { __root: t, __injectWithOption: r } = e, n = t === void 0, i = e.flatJson, s = Xi ? Ye : $n;
  let o = fe(e.inheritLocale) ? e.inheritLocale : !0;
  const a = s(
    // prettier-ignore
    t && o ? t.locale.value : B(e.locale) ? e.locale : fi
  ), l = s(
    // prettier-ignore
    t && o ? t.fallbackLocale.value : B(e.fallbackLocale) || Le(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value
  ), c = s(rl(a.value, e)), u = s(ne(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }), f = s(ne(e.numberFormats) ? e.numberFormats : { [a.value]: {} });
  let h = t ? t.missingWarn : fe(e.missingWarn) || mn(e.missingWarn) ? e.missingWarn : !0, d = t ? t.fallbackWarn : fe(e.fallbackWarn) || mn(e.fallbackWarn) ? e.fallbackWarn : !0, E = t ? t.fallbackRoot : fe(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, w = De(e.missing) ? e.missing : null, p = De(e.missing) ? fu(e.missing) : null, y = De(e.postTranslation) ? e.postTranslation : null, _ = t ? t.warnHtmlMessage : fe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter;
  const T = t ? t.modifiers : ne(e.modifiers) ? e.modifiers : {};
  let D = e.pluralRules || t && t.pluralRules, P;
  P = (() => {
    n && Jc(null);
    const C = {
      version: U0,
      locale: a.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: T,
      pluralRules: D,
      missing: p === null ? void 0 : p,
      missingWarn: h,
      fallbackWarn: d,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: y === null ? void 0 : y,
      warnHtmlMessage: _,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    C.datetimeFormats = u.value, C.numberFormats = f.value, C.__datetimeFormatters = ne(P) ? P.__datetimeFormatters : void 0, C.__numberFormatters = ne(P) ? P.__numberFormatters : void 0;
    const A = O0(C);
    return n && Jc(A), A;
  })(), An(P, a.value, l.value);
  function z() {
    return [
      a.value,
      l.value,
      c.value,
      u.value,
      f.value
    ];
  }
  const W = Ve({
    get: () => a.value,
    set: (C) => {
      a.value = C, P.locale = a.value;
    }
  }), ie = Ve({
    get: () => l.value,
    set: (C) => {
      l.value = C, P.fallbackLocale = l.value, An(P, a.value, C);
    }
  }), te = Ve(() => c.value), Z = /* @__PURE__ */ Ve(() => u.value), xe = /* @__PURE__ */ Ve(() => f.value);
  function $e() {
    return De(y) ? y : null;
  }
  function ye(C) {
    y = C, P.postTranslation = C;
  }
  function se() {
    return w;
  }
  function re(C) {
    C !== null && (p = fu(C)), w = C, P.missing = p;
  }
  const oe = (C, A, L, U, Y, ce) => {
    z();
    let _e;
    try {
      j0.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, n || (P.fallbackContext = t ? w0() : void 0), _e = C(P);
    } finally {
      __INTLIFY_PROD_DEVTOOLS__, n || (P.fallbackContext = void 0);
    }
    if (L !== "translate exists" && // for not `te` (e.g `t`)
    je(_e) && _e === Ss || L === "translate exists" && !_e) {
      const [Xe, Re] = A();
      return t && E ? U(t) : Y(Xe);
    } else {
      if (ce(_e))
        return _e;
      throw ut(lt.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Ge(...C) {
    return oe((A) => Reflect.apply(ou, null, [A, ...C]), () => Go(...C), "translate", (A) => Reflect.apply(A.t, A, [...C]), (A) => A, (A) => B(A));
  }
  function Me(...C) {
    const [A, L, U] = C;
    if (U && !de(U))
      throw ut(lt.INVALID_ARGUMENT);
    return Ge(A, L, He({ resolvedMessage: !0 }, U || {}));
  }
  function Ee(...C) {
    return oe((A) => Reflect.apply(eu, null, [A, ...C]), () => Ho(...C), "datetime format", (A) => Reflect.apply(A.d, A, [...C]), () => Yc, (A) => B(A));
  }
  function ze(...C) {
    return oe((A) => Reflect.apply(ru, null, [A, ...C]), () => Bo(...C), "number format", (A) => Reflect.apply(A.n, A, [...C]), () => Yc, (A) => B(A));
  }
  function We(C) {
    return C.map((A) => B(A) || je(A) || fe(A) ? au(String(A)) : A);
  }
  const Fe = {
    normalize: We,
    interpolate: (C) => C,
    type: "vnode"
  };
  function M(...C) {
    return oe((A) => {
      let L;
      const U = A;
      try {
        U.processor = Fe, L = Reflect.apply(ou, null, [U, ...C]);
      } finally {
        U.processor = null;
      }
      return L;
    }, () => Go(...C), "translate", (A) => A[zo](...C), (A) => [au(A)], (A) => Le(A));
  }
  function Q(...C) {
    return oe((A) => Reflect.apply(ru, null, [A, ...C]), () => Bo(...C), "number format", (A) => A[Yo](...C), cu, (A) => B(A) || Le(A));
  }
  function $(...C) {
    return oe((A) => Reflect.apply(eu, null, [A, ...C]), () => Ho(...C), "datetime format", (A) => A[Ko](...C), cu, (A) => B(A) || Le(A));
  }
  function G(C) {
    D = C, P.pluralRules = D;
  }
  function le(C, A) {
    return oe(() => {
      if (!C)
        return !1;
      const L = B(A) ? A : a.value, U = R(L), Y = P.messageResolver(U, C);
      return gn(Y) || gt(Y) || B(Y);
    }, () => [C], "translate exists", (L) => Reflect.apply(L.te, L, [C, A]), $0, (L) => fe(L));
  }
  function S(C) {
    let A = null;
    const L = Sd(P, l.value, a.value);
    for (let U = 0; U < L.length; U++) {
      const Y = c.value[L[U]] || {}, ce = P.messageResolver(Y, C);
      if (ce != null) {
        A = ce;
        break;
      }
    }
    return A;
  }
  function O(C) {
    const A = S(C);
    return A ?? (t ? t.tm(C) || {} : {});
  }
  function R(C) {
    return c.value[C] || {};
  }
  function x(C, A) {
    if (i) {
      const L = { [C]: A };
      for (const U in L)
        It(L, U) && hi(L[U]);
      A = L[C];
    }
    c.value[C] = A, P.messages = c.value;
  }
  function V(C, A) {
    c.value[C] = c.value[C] || {};
    const L = { [C]: A };
    if (i)
      for (const U in L)
        It(L, U) && hi(L[U]);
    A = L[C], Vi(A, c.value[C]), P.messages = c.value;
  }
  function F(C) {
    return u.value[C] || {};
  }
  function m(C, A) {
    u.value[C] = A, P.datetimeFormats = u.value, tu(P, C, A);
  }
  function g(C, A) {
    u.value[C] = He(u.value[C] || {}, A), P.datetimeFormats = u.value, tu(P, C, A);
  }
  function I(C) {
    return f.value[C] || {};
  }
  function N(C, A) {
    f.value[C] = A, P.numberFormats = f.value, nu(P, C, A);
  }
  function H(C, A) {
    f.value[C] = He(f.value[C] || {}, A), P.numberFormats = f.value, nu(P, C, A);
  }
  uu++, t && Xi && (ot(t.locale, (C) => {
    o && (a.value = C, P.locale = C, An(P, a.value, l.value));
  }), ot(t.fallbackLocale, (C) => {
    o && (l.value = C, P.fallbackLocale = C, An(P, a.value, l.value));
  }));
  const j = {
    id: uu,
    locale: W,
    fallbackLocale: ie,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(C) {
      o = C, C && t && (a.value = t.locale.value, l.value = t.fallbackLocale.value, An(P, a.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: te,
    get modifiers() {
      return T;
    },
    get pluralRules() {
      return D || {};
    },
    get isGlobal() {
      return n;
    },
    get missingWarn() {
      return h;
    },
    set missingWarn(C) {
      h = C, P.missingWarn = h;
    },
    get fallbackWarn() {
      return d;
    },
    set fallbackWarn(C) {
      d = C, P.fallbackWarn = d;
    },
    get fallbackRoot() {
      return E;
    },
    set fallbackRoot(C) {
      E = C;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(C) {
      v = C, P.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return _;
    },
    set warnHtmlMessage(C) {
      _ = C, P.warnHtmlMessage = C;
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(C) {
      b = C, P.escapeParameter = C;
    },
    t: Ge,
    getLocaleMessage: R,
    setLocaleMessage: x,
    mergeLocaleMessage: V,
    getPostTranslationHandler: $e,
    setPostTranslationHandler: ye,
    getMissingHandler: se,
    setMissingHandler: re,
    [Nd]: G
  };
  return j.datetimeFormats = Z, j.numberFormats = xe, j.rt = Me, j.te = le, j.tm = O, j.d = Ee, j.n = ze, j.getDateTimeFormat = F, j.setDateTimeFormat = m, j.mergeDateTimeFormat = g, j.getNumberFormat = I, j.setNumberFormat = N, j.mergeNumberFormat = H, j[Ad] = r, j[zo] = M, j[Ko] = $, j[Yo] = Q, j;
}
function Q0(e) {
  const t = B(e.locale) ? e.locale : fi, r = B(e.fallbackLocale) || Le(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, n = De(e.missing) ? e.missing : void 0, i = fe(e.silentTranslationWarn) || mn(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, s = fe(e.silentFallbackWarn) || mn(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = fe(e.fallbackRoot) ? e.fallbackRoot : !0, a = !!e.formatFallbackMessages, l = ne(e.modifiers) ? e.modifiers : {}, c = e.pluralizationRules, u = De(e.postTranslation) ? e.postTranslation : void 0, f = B(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, h = !!e.escapeParameterHtml, d = fe(e.sync) ? e.sync : !0;
  let E = e.messages;
  if (ne(e.sharedMessages)) {
    const T = e.sharedMessages;
    E = Object.keys(T).reduce((P, q) => {
      const z = P[q] || (P[q] = {});
      return He(z, T[q]), P;
    }, E || {});
  }
  const { __i18n: v, __root: w, __injectWithOption: p } = e, y = e.datetimeFormats, _ = e.numberFormats, b = e.flatJson;
  return {
    locale: t,
    fallbackLocale: r,
    messages: E,
    flatJson: b,
    datetimeFormats: y,
    numberFormats: _,
    missing: n,
    missingWarn: i,
    fallbackWarn: s,
    fallbackRoot: o,
    fallbackFormat: a,
    modifiers: l,
    pluralRules: c,
    postTranslation: u,
    warnHtmlMessage: f,
    escapeParameter: h,
    messageResolver: e.messageResolver,
    inheritLocale: d,
    __i18n: v,
    __root: w,
    __injectWithOption: p
  };
}
function Jo(e = {}) {
  const t = nl(Q0(e)), { __extender: r } = e, n = {
    // id
    id: t.id,
    // locale
    get locale() {
      return t.locale.value;
    },
    set locale(i) {
      t.locale.value = i;
    },
    // fallbackLocale
    get fallbackLocale() {
      return t.fallbackLocale.value;
    },
    set fallbackLocale(i) {
      t.fallbackLocale.value = i;
    },
    // messages
    get messages() {
      return t.messages.value;
    },
    // datetimeFormats
    get datetimeFormats() {
      return t.datetimeFormats.value;
    },
    // numberFormats
    get numberFormats() {
      return t.numberFormats.value;
    },
    // availableLocales
    get availableLocales() {
      return t.availableLocales;
    },
    // missing
    get missing() {
      return t.getMissingHandler();
    },
    set missing(i) {
      t.setMissingHandler(i);
    },
    // silentTranslationWarn
    get silentTranslationWarn() {
      return fe(t.missingWarn) ? !t.missingWarn : t.missingWarn;
    },
    set silentTranslationWarn(i) {
      t.missingWarn = fe(i) ? !i : i;
    },
    // silentFallbackWarn
    get silentFallbackWarn() {
      return fe(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
    },
    set silentFallbackWarn(i) {
      t.fallbackWarn = fe(i) ? !i : i;
    },
    // modifiers
    get modifiers() {
      return t.modifiers;
    },
    // formatFallbackMessages
    get formatFallbackMessages() {
      return t.fallbackFormat;
    },
    set formatFallbackMessages(i) {
      t.fallbackFormat = i;
    },
    // postTranslation
    get postTranslation() {
      return t.getPostTranslationHandler();
    },
    set postTranslation(i) {
      t.setPostTranslationHandler(i);
    },
    // sync
    get sync() {
      return t.inheritLocale;
    },
    set sync(i) {
      t.inheritLocale = i;
    },
    // warnInHtmlMessage
    get warnHtmlInMessage() {
      return t.warnHtmlMessage ? "warn" : "off";
    },
    set warnHtmlInMessage(i) {
      t.warnHtmlMessage = i !== "off";
    },
    // escapeParameterHtml
    get escapeParameterHtml() {
      return t.escapeParameter;
    },
    set escapeParameterHtml(i) {
      t.escapeParameter = i;
    },
    // pluralizationRules
    get pluralizationRules() {
      return t.pluralRules || {};
    },
    // for internal
    __composer: t,
    // t
    t(...i) {
      return Reflect.apply(t.t, t, [...i]);
    },
    // rt
    rt(...i) {
      return Reflect.apply(t.rt, t, [...i]);
    },
    // tc
    tc(...i) {
      const [s, o, a] = i, l = { plural: 1 };
      let c = null, u = null;
      if (!B(s))
        throw ut(lt.INVALID_ARGUMENT);
      const f = s;
      return B(o) ? l.locale = o : je(o) ? l.plural = o : Le(o) ? c = o : ne(o) && (u = o), B(a) ? l.locale = a : Le(a) ? c = a : ne(a) && (u = a), Reflect.apply(t.t, t, [
        f,
        c || u || {},
        l
      ]);
    },
    // te
    te(i, s) {
      return t.te(i, s);
    },
    // tm
    tm(i) {
      return t.tm(i);
    },
    // getLocaleMessage
    getLocaleMessage(i) {
      return t.getLocaleMessage(i);
    },
    // setLocaleMessage
    setLocaleMessage(i, s) {
      t.setLocaleMessage(i, s);
    },
    // mergeLocaleMessage
    mergeLocaleMessage(i, s) {
      t.mergeLocaleMessage(i, s);
    },
    // d
    d(...i) {
      return Reflect.apply(t.d, t, [...i]);
    },
    // getDateTimeFormat
    getDateTimeFormat(i) {
      return t.getDateTimeFormat(i);
    },
    // setDateTimeFormat
    setDateTimeFormat(i, s) {
      t.setDateTimeFormat(i, s);
    },
    // mergeDateTimeFormat
    mergeDateTimeFormat(i, s) {
      t.mergeDateTimeFormat(i, s);
    },
    // n
    n(...i) {
      return Reflect.apply(t.n, t, [...i]);
    },
    // getNumberFormat
    getNumberFormat(i) {
      return t.getNumberFormat(i);
    },
    // setNumberFormat
    setNumberFormat(i, s) {
      t.setNumberFormat(i, s);
    },
    // mergeNumberFormat
    mergeNumberFormat(i, s) {
      t.mergeNumberFormat(i, s);
    }
  };
  return n.__extender = r, n;
}
function H0(e, t, r) {
  return {
    beforeCreate() {
      const n = un();
      if (!n)
        throw ut(lt.UNEXPECTED_ERROR);
      const i = this.$options;
      if (i.i18n) {
        const s = i.i18n;
        if (i.__i18n && (s.__i18n = i.__i18n), s.__root = t, this === this.$root)
          this.$i18n = hu(e, s);
        else {
          s.__injectWithOption = !0, s.__extender = r.__vueI18nExtend, this.$i18n = Jo(s);
          const o = this.$i18n;
          o.__extender && (o.__disposer = o.__extender(this.$i18n));
        }
      } else if (i.__i18n)
        if (this === this.$root)
          this.$i18n = hu(e, i);
        else {
          this.$i18n = Jo({
            __i18n: i.__i18n,
            __injectWithOption: !0,
            __extender: r.__vueI18nExtend,
            __root: t
          });
          const s = this.$i18n;
          s.__extender && (s.__disposer = s.__extender(this.$i18n));
        }
      else
        this.$i18n = e;
      i.__i18nGlobal && xd(t, i, i), this.$t = (...s) => this.$i18n.t(...s), this.$rt = (...s) => this.$i18n.rt(...s), this.$tc = (...s) => this.$i18n.tc(...s), this.$te = (s, o) => this.$i18n.te(s, o), this.$d = (...s) => this.$i18n.d(...s), this.$n = (...s) => this.$i18n.n(...s), this.$tm = (s) => this.$i18n.tm(s), r.__setInstance(n, this.$i18n);
    },
    mounted() {
    },
    unmounted() {
      const n = un();
      if (!n)
        throw ut(lt.UNEXPECTED_ERROR);
      const i = this.$i18n;
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, i.__disposer && (i.__disposer(), delete i.__disposer, delete i.__extender), r.__deleteInstance(n), delete this.$i18n;
    }
  };
}
function hu(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Nd](t.pluralizationRules || e.pluralizationRules);
  const r = rl(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(r).forEach((n) => e.mergeLocaleMessage(n, r[n])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((n) => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach((n) => e.mergeNumberFormat(n, t.numberFormats[n])), e;
}
const il = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function B0({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((n, i) => [
    ...n,
    // prettier-ignore
    ...i.type === vt ? i.children : [i]
  ], []) : t.reduce((r, n) => {
    const i = e[n];
    return i && (r[n] = i()), r;
  }, be());
}
function Md() {
  return vt;
}
const G0 = /* @__PURE__ */ Sn({
  /* eslint-disable */
  name: "i18n-t",
  props: He({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => je(e) || !isNaN(e)
    }
  }, il),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const { slots: r, attrs: n } = t, i = e.i18n || sl({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const s = Object.keys(r).filter((f) => f !== "_"), o = be();
      e.locale && (o.locale = e.locale), e.plural !== void 0 && (o.plural = B(e.plural) ? +e.plural : e.plural);
      const a = B0(t, s), l = i[zo](e.keypath, a, o), c = He(be(), n), u = B(e.tag) || de(e.tag) ? e.tag : Md();
      return ls(u, c, l);
    };
  }
}), du = G0;
function z0(e) {
  return Le(e) && !B(e[0]);
}
function Fd(e, t, r, n) {
  const { slots: i, attrs: s } = t;
  return () => {
    const o = { part: !0 };
    let a = be();
    e.locale && (o.locale = e.locale), B(e.format) ? o.key = e.format : de(e.format) && (B(e.format.key) && (o.key = e.format.key), a = Object.keys(e.format).reduce((h, d) => r.includes(d) ? He(be(), h, { [d]: e.format[d] }) : h, be()));
    const l = n(e.value, o, a);
    let c = [o.key];
    Le(l) ? c = l.map((h, d) => {
      const E = i[h.type], v = E ? E({ [h.type]: h.value, index: d, parts: l }) : [h.value];
      return z0(v) && (v[0].key = `${h.type}-${d}`), v;
    }) : B(l) && (c = [l]);
    const u = He(be(), s), f = B(e.tag) || de(e.tag) ? e.tag : Md();
    return ls(f, u, c);
  };
}
const K0 = /* @__PURE__ */ Sn({
  /* eslint-disable */
  name: "i18n-n",
  props: He({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, il),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const r = e.i18n || sl({
      useScope: e.scope,
      __useComponent: !0
    });
    return Fd(e, t, kd, (...n) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      r[Yo](...n)
    ));
  }
}), pu = K0, Y0 = /* @__PURE__ */ Sn({
  /* eslint-disable */
  name: "i18n-d",
  props: He({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, il),
  /* eslint-enable */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(e, t) {
    const r = e.i18n || sl({
      useScope: e.scope,
      __useComponent: !0
    });
    return Fd(e, t, Rd, (...n) => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      r[Ko](...n)
    ));
  }
}), mu = Y0;
function X0(e, t) {
  const r = e;
  if (e.mode === "composition")
    return r.__getInstance(t) || e.global;
  {
    const n = r.__getInstance(t);
    return n != null ? n.__composer : e.global.__composer;
  }
}
function J0(e) {
  const t = (o) => {
    const { instance: a, value: l } = o;
    if (!a || !a.$)
      throw ut(lt.UNEXPECTED_ERROR);
    const c = X0(e, a.$), u = vu(l);
    return [
      Reflect.apply(c.t, c, [...gu(u)]),
      c
    ];
  };
  return {
    created: (o, a) => {
      const [l, c] = t(a);
      Xi && e.global === c && (o.__i18nWatcher = ot(c.locale, () => {
        a.instance && a.instance.$forceUpdate();
      })), o.__composer = c, o.textContent = l;
    },
    unmounted: (o) => {
      Xi && o.__i18nWatcher && (o.__i18nWatcher(), o.__i18nWatcher = void 0, delete o.__i18nWatcher), o.__composer && (o.__composer = void 0, delete o.__composer);
    },
    beforeUpdate: (o, { value: a }) => {
      if (o.__composer) {
        const l = o.__composer, c = vu(a);
        o.textContent = Reflect.apply(l.t, l, [
          ...gu(c)
        ]);
      }
    },
    getSSRProps: (o) => {
      const [a] = t(o);
      return { textContent: a };
    }
  };
}
function vu(e) {
  if (B(e))
    return { path: e };
  if (ne(e)) {
    if (!("path" in e))
      throw ut(lt.REQUIRED_VALUE, "path");
    return e;
  } else
    throw ut(lt.INVALID_VALUE);
}
function gu(e) {
  const { path: t, locale: r, args: n, choice: i, plural: s } = e, o = {}, a = n || {};
  return B(r) && (o.locale = r), je(i) && (o.plural = i), je(s) && (o.plural = s), [t, a, o];
}
function Z0(e, t, ...r) {
  const n = ne(r[0]) ? r[0] : {};
  (fe(n.globalInstall) ? n.globalInstall : !0) && ([du.name, "I18nT"].forEach((s) => e.component(s, du)), [pu.name, "I18nN"].forEach((s) => e.component(s, pu)), [mu.name, "I18nD"].forEach((s) => e.component(s, mu))), e.directive("t", J0(t));
}
const eE = /* @__PURE__ */ wr("global-vue-i18n");
function tE(e = {}, t) {
  const r = __VUE_I18N_LEGACY_API__ && fe(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, n = fe(e.globalInjection) ? e.globalInjection : !0, i = /* @__PURE__ */ new Map(), [s, o] = rE(e, r), a = /* @__PURE__ */ wr("");
  function l(h) {
    return i.get(h) || null;
  }
  function c(h, d) {
    i.set(h, d);
  }
  function u(h) {
    i.delete(h);
  }
  const f = {
    // mode
    get mode() {
      return __VUE_I18N_LEGACY_API__ && r ? "legacy" : "composition";
    },
    // install plugin
    async install(h, ...d) {
      if (h.__VUE_I18N_SYMBOL__ = a, h.provide(h.__VUE_I18N_SYMBOL__, f), ne(d[0])) {
        const w = d[0];
        f.__composerExtend = w.__composerExtend, f.__vueI18nExtend = w.__vueI18nExtend;
      }
      let E = null;
      !r && n && (E = uE(h, f.global)), __VUE_I18N_FULL_INSTALL__ && Z0(h, f, ...d), __VUE_I18N_LEGACY_API__ && r && h.mixin(H0(o, o.__composer, f));
      const v = h.unmount;
      h.unmount = () => {
        E && E(), f.dispose(), v();
      };
    },
    // global accessor
    get global() {
      return o;
    },
    dispose() {
      s.stop();
    },
    // @internal
    __instances: i,
    // @internal
    __getInstance: l,
    // @internal
    __setInstance: c,
    // @internal
    __deleteInstance: u
  };
  return f;
}
function sl(e = {}) {
  const t = un();
  if (t == null)
    throw ut(lt.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw ut(lt.NOT_INSTALLED);
  const r = nE(t), n = sE(r), i = Ld(t), s = iE(e, i);
  if (s === "global")
    return xd(n, e, i), n;
  if (s === "parent") {
    let l = oE(r, t, e.__useComponent);
    return l == null && (l = n), l;
  }
  const o = r;
  let a = o.__getInstance(t);
  if (a == null) {
    const l = He({}, e);
    "__i18n" in i && (l.__i18n = i.__i18n), n && (l.__root = n), a = nl(l), o.__composerExtend && (a[Xo] = o.__composerExtend(a)), lE(o, t, a), o.__setInstance(t, a);
  }
  return a;
}
function rE(e, t, r) {
  const n = Hu(), i = __VUE_I18N_LEGACY_API__ && t ? n.run(() => Jo(e)) : n.run(() => nl(e));
  if (i == null)
    throw ut(lt.UNEXPECTED_ERROR);
  return [n, i];
}
function nE(e) {
  const t = Et(e.isCE ? eE : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw ut(e.isCE ? lt.NOT_INSTALLED_WITH_PROVIDE : lt.UNEXPECTED_ERROR);
  return t;
}
function iE(e, t) {
  return bs(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function sE(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function oE(e, t, r = !1) {
  let n = null;
  const i = t.root;
  let s = aE(t, r);
  for (; s != null; ) {
    const o = e;
    if (e.mode === "composition")
      n = o.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const a = o.__getInstance(s);
      a != null && (n = a.__composer, r && n && !n[Ad] && (n = null));
    }
    if (n != null || i === s)
      break;
    s = s.parent;
  }
  return n;
}
function aE(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function lE(e, t, r) {
  Sf(() => {
  }, t), wa(() => {
    const n = r;
    e.__deleteInstance(t);
    const i = n[Xo];
    i && (i(), delete n[Xo]);
  }, t);
}
const cE = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], yu = ["t", "rt", "d", "n", "tm", "te"];
function uE(e, t) {
  const r = /* @__PURE__ */ Object.create(null);
  return cE.forEach((i) => {
    const s = Object.getOwnPropertyDescriptor(t, i);
    if (!s)
      throw ut(lt.UNEXPECTED_ERROR);
    const o = qe(s.value) ? {
      get() {
        return s.value.value;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      set(a) {
        s.value.value = a;
      }
    } : {
      get() {
        return s.get && s.get();
      }
    };
    Object.defineProperty(r, i, o);
  }), e.config.globalProperties.$i18n = r, yu.forEach((i) => {
    const s = Object.getOwnPropertyDescriptor(t, i);
    if (!s || !s.value)
      throw ut(lt.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${i}`, s);
  }), () => {
    delete e.config.globalProperties.$i18n, yu.forEach((i) => {
      delete e.config.globalProperties[`$${i}`];
    });
  };
}
q0();
y0(Zb);
_0(m0);
b0(Sd);
if (__INTLIFY_PROD_DEVTOOLS__) {
  const e = Ar();
  e.__INTLIFY__ = !0, e0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
const fE = tE({
  locale: "en",
  messages: {
    de: {
      increment: "Erhöhen"
    },
    en: {
      increment: "Increment"
    },
    es: {
      increment: "Incrementar"
    }
  }
}), Kr = typeof document < "u";
function Vd(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function hE(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && Vd(e.default);
}
const pe = Object.assign;
function no(e, t) {
  const r = {};
  for (const n in t) {
    const i = t[n];
    r[n] = Nt(i) ? i.map(e) : e(i);
  }
  return r;
}
const Xn = () => {
}, Nt = Array.isArray, jd = /#/g, dE = /&/g, pE = /\//g, mE = /=/g, vE = /\?/g, Ud = /\+/g, gE = /%5B/g, yE = /%5D/g, qd = /%5E/g, _E = /%60/g, $d = /%7B/g, bE = /%7C/g, Wd = /%7D/g, EE = /%20/g;
function ol(e) {
  return encodeURI("" + e).replace(bE, "|").replace(gE, "[").replace(yE, "]");
}
function SE(e) {
  return ol(e).replace($d, "{").replace(Wd, "}").replace(qd, "^");
}
function Zo(e) {
  return ol(e).replace(Ud, "%2B").replace(EE, "+").replace(jd, "%23").replace(dE, "%26").replace(_E, "`").replace($d, "{").replace(Wd, "}").replace(qd, "^");
}
function wE(e) {
  return Zo(e).replace(mE, "%3D");
}
function OE(e) {
  return ol(e).replace(jd, "%23").replace(vE, "%3F");
}
function TE(e) {
  return e == null ? "" : OE(e).replace(pE, "%2F");
}
function di(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const IE = /\/$/, CE = (e) => e.replace(IE, "");
function io(e, t, r = "/") {
  let n, i = {}, s = "", o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return a < l && a >= 0 && (l = -1), l > -1 && (n = t.slice(0, l), s = t.slice(l + 1, a > -1 ? a : t.length), i = e(s)), a > -1 && (n = n || t.slice(0, a), o = t.slice(a, t.length)), n = PE(n ?? t, r), {
    fullPath: n + (s && "?") + s + o,
    path: n,
    query: i,
    hash: di(o)
  };
}
function RE(e, t) {
  const r = t.query ? e(t.query) : "";
  return t.path + (r && "?") + r + (t.hash || "");
}
function _u(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function kE(e, t, r) {
  const n = t.matched.length - 1, i = r.matched.length - 1;
  return n > -1 && n === i && yn(t.matched[n], r.matched[i]) && Qd(t.params, r.params) && e(t.query) === e(r.query) && t.hash === r.hash;
}
function yn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Qd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (!DE(e[r], t[r]))
      return !1;
  return !0;
}
function DE(e, t) {
  return Nt(e) ? bu(e, t) : Nt(t) ? bu(t, e) : e === t;
}
function bu(e, t) {
  return Nt(t) ? e.length === t.length && e.every((r, n) => r === t[n]) : e.length === 1 && e[0] === t;
}
function PE(e, t) {
  if (e.startsWith("/"))
    return e;
  if (!e)
    return t;
  const r = t.split("/"), n = e.split("/"), i = n[n.length - 1];
  (i === ".." || i === ".") && n.push("");
  let s = r.length - 1, o, a;
  for (o = 0; o < n.length; o++)
    if (a = n[o], a !== ".")
      if (a === "..")
        s > 1 && s--;
      else
        break;
  return r.slice(0, s).join("/") + "/" + n.slice(o).join("/");
}
const or = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var pi;
(function(e) {
  e.pop = "pop", e.push = "push";
})(pi || (pi = {}));
var Jn;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Jn || (Jn = {}));
function NE(e) {
  if (!e)
    if (Kr) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), CE(e);
}
const AE = /^[^#]+#/;
function LE(e, t) {
  return e.replace(AE, "#") + t;
}
function xE(e, t) {
  const r = document.documentElement.getBoundingClientRect(), n = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: n.left - r.left - (t.left || 0),
    top: n.top - r.top - (t.top || 0)
  };
}
const ws = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function ME(e) {
  let t;
  if ("el" in e) {
    const r = e.el, n = typeof r == "string" && r.startsWith("#"), i = typeof r == "string" ? n ? document.getElementById(r.slice(1)) : document.querySelector(r) : r;
    if (!i)
      return;
    t = xE(i, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Eu(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ea = /* @__PURE__ */ new Map();
function FE(e, t) {
  ea.set(e, t);
}
function VE(e) {
  const t = ea.get(e);
  return ea.delete(e), t;
}
let jE = () => location.protocol + "//" + location.host;
function Hd(e, t) {
  const { pathname: r, search: n, hash: i } = t, s = e.indexOf("#");
  if (s > -1) {
    let a = i.includes(e.slice(s)) ? e.slice(s).length : 1, l = i.slice(a);
    return l[0] !== "/" && (l = "/" + l), _u(l, "");
  }
  return _u(r, e) + n + i;
}
function UE(e, t, r, n) {
  let i = [], s = [], o = null;
  const a = ({ state: h }) => {
    const d = Hd(e, location), E = r.value, v = t.value;
    let w = 0;
    if (h) {
      if (r.value = d, t.value = h, o && o === E) {
        o = null;
        return;
      }
      w = v ? h.position - v.position : 0;
    } else
      n(d);
    i.forEach((p) => {
      p(r.value, E, {
        delta: w,
        type: pi.pop,
        direction: w ? w > 0 ? Jn.forward : Jn.back : Jn.unknown
      });
    });
  };
  function l() {
    o = r.value;
  }
  function c(h) {
    i.push(h);
    const d = () => {
      const E = i.indexOf(h);
      E > -1 && i.splice(E, 1);
    };
    return s.push(d), d;
  }
  function u() {
    const { history: h } = window;
    h.state && h.replaceState(pe({}, h.state, { scroll: ws() }), "");
  }
  function f() {
    for (const h of s)
      h();
    s = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: l,
    listen: c,
    destroy: f
  };
}
function Su(e, t, r, n = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: r,
    replaced: n,
    position: window.history.length,
    scroll: i ? ws() : null
  };
}
function qE(e) {
  const { history: t, location: r } = window, n = {
    value: Hd(e, r)
  }, i = { value: t.state };
  i.value || s(n.value, {
    back: null,
    current: n.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function s(l, c, u) {
    const f = e.indexOf("#"), h = f > -1 ? (r.host && document.querySelector("base") ? e : e.slice(f)) + l : jE() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", h), i.value = c;
    } catch (d) {
      console.error(d), r[u ? "replace" : "assign"](h);
    }
  }
  function o(l, c) {
    const u = pe({}, t.state, Su(
      i.value.back,
      // keep back and forward entries but override current position
      l,
      i.value.forward,
      !0
    ), c, { position: i.value.position });
    s(l, u, !0), n.value = l;
  }
  function a(l, c) {
    const u = pe(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      i.value,
      t.state,
      {
        forward: l,
        scroll: ws()
      }
    );
    s(u.current, u, !0);
    const f = pe({}, Su(n.value, l, null), { position: u.position + 1 }, c);
    s(l, f, !1), n.value = l;
  }
  return {
    location: n,
    state: i,
    push: a,
    replace: o
  };
}
function $E(e) {
  e = NE(e);
  const t = qE(e), r = UE(e, t.state, t.location, t.replace);
  function n(s, o = !0) {
    o || r.pauseListeners(), history.go(s);
  }
  const i = pe({
    // it's overridden right after
    location: "",
    base: e,
    go: n,
    createHref: LE.bind(null, e)
  }, t, r);
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), i;
}
function WE(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Bd(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Gd = Symbol("");
var wu;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(wu || (wu = {}));
function _n(e, t) {
  return pe(new Error(), {
    type: e,
    [Gd]: !0
  }, t);
}
function Bt(e, t) {
  return e instanceof Error && Gd in e && (t == null || !!(e.type & t));
}
const Ou = "[^/]+?", QE = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, HE = /[.+*?^${}()[\]/\\]/g;
function BE(e, t) {
  const r = pe({}, QE, t), n = [];
  let i = r.start ? "^" : "";
  const s = [];
  for (const c of e) {
    const u = c.length ? [] : [
      90
      /* PathScore.Root */
    ];
    r.strict && !c.length && (i += "/");
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let d = 40 + (r.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (i += "/"), i += h.value.replace(HE, "\\$&"), d += 40;
      else if (h.type === 1) {
        const { value: E, repeatable: v, optional: w, regexp: p } = h;
        s.push({
          name: E,
          repeatable: v,
          optional: w
        });
        const y = p || Ou;
        if (y !== Ou) {
          d += 10;
          try {
            new RegExp(`(${y})`);
          } catch (b) {
            throw new Error(`Invalid custom RegExp for param "${E}" (${y}): ` + b.message);
          }
        }
        let _ = v ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        f || (_ = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        w && c.length < 2 ? `(?:/${_})` : "/" + _), w && (_ += "?"), i += _, d += 20, w && (d += -8), v && (d += -20), y === ".*" && (d += -50);
      }
      u.push(d);
    }
    n.push(u);
  }
  if (r.strict && r.end) {
    const c = n.length - 1;
    n[c][n[c].length - 1] += 0.7000000000000001;
  }
  r.strict || (i += "/?"), r.end ? i += "$" : r.strict && !i.endsWith("/") && (i += "(?:/|$)");
  const o = new RegExp(i, r.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(o), f = {};
    if (!u)
      return null;
    for (let h = 1; h < u.length; h++) {
      const d = u[h] || "", E = s[h - 1];
      f[E.name] = d && E.repeatable ? d.split("/") : d;
    }
    return f;
  }
  function l(c) {
    let u = "", f = !1;
    for (const h of e) {
      (!f || !u.endsWith("/")) && (u += "/"), f = !1;
      for (const d of h)
        if (d.type === 0)
          u += d.value;
        else if (d.type === 1) {
          const { value: E, repeatable: v, optional: w } = d, p = E in c ? c[E] : "";
          if (Nt(p) && !v)
            throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);
          const y = Nt(p) ? p.join("/") : p;
          if (!y)
            if (w)
              h.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
            else
              throw new Error(`Missing required param "${E}"`);
          u += y;
        }
    }
    return u || "/";
  }
  return {
    re: o,
    score: n,
    keys: s,
    parse: a,
    stringify: l
  };
}
function GE(e, t) {
  let r = 0;
  for (; r < e.length && r < t.length; ) {
    const n = t[r] - e[r];
    if (n)
      return n;
    r++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function zd(e, t) {
  let r = 0;
  const n = e.score, i = t.score;
  for (; r < n.length && r < i.length; ) {
    const s = GE(n[r], i[r]);
    if (s)
      return s;
    r++;
  }
  if (Math.abs(i.length - n.length) === 1) {
    if (Tu(n))
      return 1;
    if (Tu(i))
      return -1;
  }
  return i.length - n.length;
}
function Tu(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const zE = {
  type: 0,
  value: ""
}, KE = /[a-zA-Z0-9_]/;
function YE(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[zE]];
  if (!e.startsWith("/"))
    throw new Error(`Invalid path "${e}"`);
  function t(d) {
    throw new Error(`ERR (${r})/"${c}": ${d}`);
  }
  let r = 0, n = r;
  const i = [];
  let s;
  function o() {
    s && i.push(s), s = [];
  }
  let a = 0, l, c = "", u = "";
  function f() {
    c && (r === 0 ? s.push({
      type: 0,
      value: c
    }) : r === 1 || r === 2 || r === 3 ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), s.push({
      type: 1,
      value: c,
      regexp: u,
      repeatable: l === "*" || l === "+",
      optional: l === "*" || l === "?"
    })) : t("Invalid state to consume buffer"), c = "");
  }
  function h() {
    c += l;
  }
  for (; a < e.length; ) {
    if (l = e[a++], l === "\\" && r !== 2) {
      n = r, r = 4;
      continue;
    }
    switch (r) {
      case 0:
        l === "/" ? (c && f(), o()) : l === ":" ? (f(), r = 1) : h();
        break;
      case 4:
        h(), r = n;
        break;
      case 1:
        l === "(" ? r = 2 : KE.test(l) ? h() : (f(), r = 0, l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : r = 3 : u += l;
        break;
      case 3:
        f(), r = 0, l !== "*" && l !== "?" && l !== "+" && a--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return r === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), o(), i;
}
function XE(e, t, r) {
  const n = BE(YE(e.path), r), i = pe(n, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function JE(e, t) {
  const r = [], n = /* @__PURE__ */ new Map();
  t = ku({ strict: !1, end: !0, sensitive: !1 }, t);
  function i(f) {
    return n.get(f);
  }
  function s(f, h, d) {
    const E = !d, v = Cu(f);
    v.aliasOf = d && d.record;
    const w = ku(t, f), p = [v];
    if ("alias" in f) {
      const b = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const T of b)
        p.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          Cu(pe({}, v, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: d ? d.record.components : v.components,
            path: T,
            // we might be the child of an alias
            aliasOf: d ? d.record : v
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let y, _;
    for (const b of p) {
      const { path: T } = b;
      if (h && T[0] !== "/") {
        const D = h.record.path, P = D[D.length - 1] === "/" ? "" : "/";
        b.path = h.record.path + (T && P + T);
      }
      if (y = XE(b, h, w), d ? d.alias.push(y) : (_ = _ || y, _ !== y && _.alias.push(y), E && f.name && !Ru(y) && o(f.name)), Kd(y) && l(y), v.children) {
        const D = v.children;
        for (let P = 0; P < D.length; P++)
          s(D[P], y, d && d.children[P]);
      }
      d = d || y;
    }
    return _ ? () => {
      o(_);
    } : Xn;
  }
  function o(f) {
    if (Bd(f)) {
      const h = n.get(f);
      h && (n.delete(f), r.splice(r.indexOf(h), 1), h.children.forEach(o), h.alias.forEach(o));
    } else {
      const h = r.indexOf(f);
      h > -1 && (r.splice(h, 1), f.record.name && n.delete(f.record.name), f.children.forEach(o), f.alias.forEach(o));
    }
  }
  function a() {
    return r;
  }
  function l(f) {
    const h = tS(f, r);
    r.splice(h, 0, f), f.record.name && !Ru(f) && n.set(f.record.name, f);
  }
  function c(f, h) {
    let d, E = {}, v, w;
    if ("name" in f && f.name) {
      if (d = n.get(f.name), !d)
        throw _n(1, {
          location: f
        });
      w = d.record.name, E = pe(
        // paramsFromLocation is a new object
        Iu(
          h.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          d.keys.filter((_) => !_.optional).concat(d.parent ? d.parent.keys.filter((_) => _.optional) : []).map((_) => _.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        f.params && Iu(f.params, d.keys.map((_) => _.name))
      ), v = d.stringify(E);
    } else if (f.path != null)
      v = f.path, d = r.find((_) => _.re.test(v)), d && (E = d.parse(v), w = d.record.name);
    else {
      if (d = h.name ? n.get(h.name) : r.find((_) => _.re.test(h.path)), !d)
        throw _n(1, {
          location: f,
          currentLocation: h
        });
      w = d.record.name, E = pe({}, h.params, f.params), v = d.stringify(E);
    }
    const p = [];
    let y = d;
    for (; y; )
      p.unshift(y.record), y = y.parent;
    return {
      name: w,
      path: v,
      params: E,
      matched: p,
      meta: eS(p)
    };
  }
  e.forEach((f) => s(f));
  function u() {
    r.length = 0, n.clear();
  }
  return {
    addRoute: s,
    resolve: c,
    removeRoute: o,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: i
  };
}
function Iu(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function Cu(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: ZE(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", {
    value: {}
  }), t;
}
function ZE(e) {
  const t = {}, r = e.props || !1;
  if ("component" in e)
    t.default = r;
  else
    for (const n in e.components)
      t[n] = typeof r == "object" ? r[n] : r;
  return t;
}
function Ru(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function eS(e) {
  return e.reduce((t, r) => pe(t, r.meta), {});
}
function ku(e, t) {
  const r = {};
  for (const n in e)
    r[n] = n in t ? t[n] : e[n];
  return r;
}
function tS(e, t) {
  let r = 0, n = t.length;
  for (; r !== n; ) {
    const s = r + n >> 1;
    zd(e, t[s]) < 0 ? n = s : r = s + 1;
  }
  const i = rS(e);
  return i && (n = t.lastIndexOf(i, n - 1)), n;
}
function rS(e) {
  let t = e;
  for (; t = t.parent; )
    if (Kd(t) && zd(e, t) === 0)
      return t;
}
function Kd({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function nS(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let i = 0; i < n.length; ++i) {
    const s = n[i].replace(Ud, " "), o = s.indexOf("="), a = di(o < 0 ? s : s.slice(0, o)), l = o < 0 ? null : di(s.slice(o + 1));
    if (a in t) {
      let c = t[a];
      Nt(c) || (c = t[a] = [c]), c.push(l);
    } else
      t[a] = l;
  }
  return t;
}
function Du(e) {
  let t = "";
  for (let r in e) {
    const n = e[r];
    if (r = wE(r), n == null) {
      n !== void 0 && (t += (t.length ? "&" : "") + r);
      continue;
    }
    (Nt(n) ? n.map((s) => s && Zo(s)) : [n && Zo(n)]).forEach((s) => {
      s !== void 0 && (t += (t.length ? "&" : "") + r, s != null && (t += "=" + s));
    });
  }
  return t;
}
function iS(e) {
  const t = {};
  for (const r in e) {
    const n = e[r];
    n !== void 0 && (t[r] = Nt(n) ? n.map((i) => i == null ? null : "" + i) : n == null ? n : "" + n);
  }
  return t;
}
const sS = Symbol(""), Pu = Symbol(""), al = Symbol(""), Yd = Symbol(""), ta = Symbol("");
function Ln() {
  let e = [];
  function t(n) {
    return e.push(n), () => {
      const i = e.indexOf(n);
      i > -1 && e.splice(i, 1);
    };
  }
  function r() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: r
  };
}
function pr(e, t, r, n, i, s = (o) => o()) {
  const o = n && // name is defined if record is because of the function overload
  (n.enterCallbacks[i] = n.enterCallbacks[i] || []);
  return () => new Promise((a, l) => {
    const c = (h) => {
      h === !1 ? l(_n(4, {
        from: r,
        to: t
      })) : h instanceof Error ? l(h) : WE(h) ? l(_n(2, {
        from: t,
        to: h
      })) : (o && // since enterCallbackArray is truthy, both record and name also are
      n.enterCallbacks[i] === o && typeof h == "function" && o.push(h), a());
    }, u = s(() => e.call(n && n.instances[i], t, r, c));
    let f = Promise.resolve(u);
    e.length < 3 && (f = f.then(c)), f.catch((h) => l(h));
  });
}
function so(e, t, r, n, i = (s) => s()) {
  const s = [];
  for (const o of e)
    for (const a in o.components) {
      let l = o.components[a];
      if (!(t !== "beforeRouteEnter" && !o.instances[a]))
        if (Vd(l)) {
          const u = (l.__vccOpts || l)[t];
          u && s.push(pr(u, r, n, o, a, i));
        } else {
          let c = l();
          s.push(() => c.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);
            const f = hE(u) ? u.default : u;
            o.mods[a] = u, o.components[a] = f;
            const d = (f.__vccOpts || f)[t];
            return d && pr(d, r, n, o, a, i)();
          }));
        }
    }
  return s;
}
function Nu(e) {
  const t = Et(al), r = Et(Yd), n = Ve(() => {
    const l = bt(e.to);
    return t.resolve(l);
  }), i = Ve(() => {
    const { matched: l } = n.value, { length: c } = l, u = l[c - 1], f = r.matched;
    if (!u || !f.length)
      return -1;
    const h = f.findIndex(yn.bind(null, u));
    if (h > -1)
      return h;
    const d = Au(l[c - 2]);
    return (
      // we are dealing with nested routes
      c > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Au(u) === d && // avoid comparing the child with its parent
      f[f.length - 1].path !== d ? f.findIndex(yn.bind(null, l[c - 2])) : h
    );
  }), s = Ve(() => i.value > -1 && cS(r.params, n.value.params)), o = Ve(() => i.value > -1 && i.value === r.matched.length - 1 && Qd(r.params, n.value.params));
  function a(l = {}) {
    if (lS(l)) {
      const c = t[bt(e.replace) ? "replace" : "push"](
        bt(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(Xn);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => c), c;
    }
    return Promise.resolve();
  }
  return {
    route: n,
    href: Ve(() => n.value.href),
    isActive: s,
    isExactActive: o,
    navigate: a
  };
}
function oS(e) {
  return e.length === 1 ? e[0] : e;
}
const aS = /* @__PURE__ */ Sn({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: Nu,
  setup(e, { slots: t }) {
    const r = bn(Nu(e)), { options: n } = Et(al), i = Ve(() => ({
      [Lu(e.activeClass, n.linkActiveClass, "router-link-active")]: r.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Lu(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
    }));
    return () => {
      const s = t.default && oS(t.default(r));
      return e.custom ? s : ls("a", {
        "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
        href: r.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: r.navigate,
        class: i.value
      }, s);
    };
  }
}), ra = aS;
function lS(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function cS(e, t) {
  for (const r in t) {
    const n = t[r], i = e[r];
    if (typeof n == "string") {
      if (n !== i)
        return !1;
    } else if (!Nt(i) || i.length !== n.length || n.some((s, o) => s !== i[o]))
      return !1;
  }
  return !0;
}
function Au(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Lu = (e, t, r) => e ?? t ?? r, uS = /* @__PURE__ */ Sn({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: r }) {
    const n = Et(ta), i = Ve(() => e.route || n.value), s = Et(Pu, 0), o = Ve(() => {
      let c = bt(s);
      const { matched: u } = i.value;
      let f;
      for (; (f = u[c]) && !f.components; )
        c++;
      return c;
    }), a = Ve(() => i.value.matched[o.value]);
    nn(Pu, Ve(() => o.value + 1)), nn(sS, a), nn(ta, i);
    const l = Ye();
    return ot(() => [l.value, a.value, e.name], ([c, u, f], [h, d, E]) => {
      u && (u.instances[f] = c, d && d !== u && c && c === h && (u.leaveGuards.size || (u.leaveGuards = d.leaveGuards), u.updateGuards.size || (u.updateGuards = d.updateGuards))), c && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!d || !yn(u, d) || !h) && (u.enterCallbacks[f] || []).forEach((v) => v(c));
    }, { flush: "post" }), () => {
      const c = i.value, u = e.name, f = a.value, h = f && f.components[u];
      if (!h)
        return xu(r.default, { Component: h, route: c });
      const d = f.props[u], E = d ? d === !0 ? c.params : typeof d == "function" ? d(c) : d : null, w = ls(h, pe({}, E, t, {
        onVnodeUnmounted: (p) => {
          p.component.isUnmounted && (f.instances[u] = null);
        },
        ref: l
      }));
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        xu(r.default, { Component: w, route: c }) || w
      );
    };
  }
});
function xu(e, t) {
  if (!e)
    return null;
  const r = e(t);
  return r.length === 1 ? r[0] : r;
}
const Xd = uS;
function fS(e) {
  const t = JE(e.routes, e), r = e.parseQuery || nS, n = e.stringifyQuery || Du, i = e.history, s = Ln(), o = Ln(), a = Ln(), l = $n(or);
  let c = or;
  Kr && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = no.bind(null, (M) => "" + M), f = no.bind(null, TE), h = (
    // @ts-expect-error: intentionally avoid the type check
    no.bind(null, di)
  );
  function d(M, Q) {
    let $, G;
    return Bd(M) ? ($ = t.getRecordMatcher(M), G = Q) : G = M, t.addRoute(G, $);
  }
  function E(M) {
    const Q = t.getRecordMatcher(M);
    Q && t.removeRoute(Q);
  }
  function v() {
    return t.getRoutes().map((M) => M.record);
  }
  function w(M) {
    return !!t.getRecordMatcher(M);
  }
  function p(M, Q) {
    if (Q = pe({}, Q || l.value), typeof M == "string") {
      const R = io(r, M, Q.path), x = t.resolve({ path: R.path }, Q), V = i.createHref(R.fullPath);
      return pe(R, x, {
        params: h(x.params),
        hash: di(R.hash),
        redirectedFrom: void 0,
        href: V
      });
    }
    let $;
    if (M.path != null)
      $ = pe({}, M, {
        path: io(r, M.path, Q.path).path
      });
    else {
      const R = pe({}, M.params);
      for (const x in R)
        R[x] == null && delete R[x];
      $ = pe({}, M, {
        params: f(R)
      }), Q.params = f(Q.params);
    }
    const G = t.resolve($, Q), le = M.hash || "";
    G.params = u(h(G.params));
    const S = RE(n, pe({}, M, {
      hash: SE(le),
      path: G.path
    })), O = i.createHref(S);
    return pe({
      fullPath: S,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: le,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        n === Du ? iS(M.query) : M.query || {}
      )
    }, G, {
      redirectedFrom: void 0,
      href: O
    });
  }
  function y(M) {
    return typeof M == "string" ? io(r, M, l.value.path) : pe({}, M);
  }
  function _(M, Q) {
    if (c !== M)
      return _n(8, {
        from: Q,
        to: M
      });
  }
  function b(M) {
    return P(M);
  }
  function T(M) {
    return b(pe(y(M), { replace: !0 }));
  }
  function D(M) {
    const Q = M.matched[M.matched.length - 1];
    if (Q && Q.redirect) {
      const { redirect: $ } = Q;
      let G = typeof $ == "function" ? $(M) : $;
      return typeof G == "string" && (G = G.includes("?") || G.includes("#") ? G = y(G) : (
        // force empty params
        { path: G }
      ), G.params = {}), pe({
        query: M.query,
        hash: M.hash,
        // avoid transferring params if the redirect has a path
        params: G.path != null ? {} : M.params
      }, G);
    }
  }
  function P(M, Q) {
    const $ = c = p(M), G = l.value, le = M.state, S = M.force, O = M.replace === !0, R = D($);
    if (R)
      return P(
        pe(y(R), {
          state: typeof R == "object" ? pe({}, le, R.state) : le,
          force: S,
          replace: O
        }),
        // keep original redirectedFrom if it exists
        Q || $
      );
    const x = $;
    x.redirectedFrom = Q;
    let V;
    return !S && kE(n, G, $) && (V = _n(16, { to: x, from: G }), Me(
      G,
      G,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (V ? Promise.resolve(V) : W(x, G)).catch((F) => Bt(F) ? (
      // navigation redirects still mark the router as ready
      Bt(
        F,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? F : Ge(F)
    ) : (
      // reject any unknown error
      re(F, x, G)
    )).then((F) => {
      if (F) {
        if (Bt(
          F,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return P(
            // keep options
            pe({
              // preserve an existing replacement but allow the redirect to override it
              replace: O
            }, y(F.to), {
              state: typeof F.to == "object" ? pe({}, le, F.to.state) : le,
              force: S
            }),
            // preserve the original redirectedFrom if any
            Q || x
          );
      } else
        F = te(x, G, !0, O, le);
      return ie(x, G, F), F;
    });
  }
  function q(M, Q) {
    const $ = _(M, Q);
    return $ ? Promise.reject($) : Promise.resolve();
  }
  function z(M) {
    const Q = We.values().next().value;
    return Q && typeof Q.runWithContext == "function" ? Q.runWithContext(M) : M();
  }
  function W(M, Q) {
    let $;
    const [G, le, S] = hS(M, Q);
    $ = so(G.reverse(), "beforeRouteLeave", M, Q);
    for (const R of G)
      R.leaveGuards.forEach((x) => {
        $.push(pr(x, M, Q));
      });
    const O = q.bind(null, M, Q);
    return $.push(O), Fe($).then(() => {
      $ = [];
      for (const R of s.list())
        $.push(pr(R, M, Q));
      return $.push(O), Fe($);
    }).then(() => {
      $ = so(le, "beforeRouteUpdate", M, Q);
      for (const R of le)
        R.updateGuards.forEach((x) => {
          $.push(pr(x, M, Q));
        });
      return $.push(O), Fe($);
    }).then(() => {
      $ = [];
      for (const R of S)
        if (R.beforeEnter)
          if (Nt(R.beforeEnter))
            for (const x of R.beforeEnter)
              $.push(pr(x, M, Q));
          else
            $.push(pr(R.beforeEnter, M, Q));
      return $.push(O), Fe($);
    }).then(() => (M.matched.forEach((R) => R.enterCallbacks = {}), $ = so(S, "beforeRouteEnter", M, Q, z), $.push(O), Fe($))).then(() => {
      $ = [];
      for (const R of o.list())
        $.push(pr(R, M, Q));
      return $.push(O), Fe($);
    }).catch((R) => Bt(
      R,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? R : Promise.reject(R));
  }
  function ie(M, Q, $) {
    a.list().forEach((G) => z(() => G(M, Q, $)));
  }
  function te(M, Q, $, G, le) {
    const S = _(M, Q);
    if (S)
      return S;
    const O = Q === or, R = Kr ? history.state : {};
    $ && (G || O ? i.replace(M.fullPath, pe({
      scroll: O && R && R.scroll
    }, le)) : i.push(M.fullPath, le)), l.value = M, Me(M, Q, $, O), Ge();
  }
  let Z;
  function xe() {
    Z || (Z = i.listen((M, Q, $) => {
      if (!mt.listening)
        return;
      const G = p(M), le = D(G);
      if (le) {
        P(pe(le, { replace: !0, force: !0 }), G).catch(Xn);
        return;
      }
      c = G;
      const S = l.value;
      Kr && FE(Eu(S.fullPath, $.delta), ws()), W(G, S).catch((O) => Bt(
        O,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? O : Bt(
        O,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (P(
        pe(y(O.to), {
          force: !0
        }),
        G
        // avoid an uncaught rejection, let push call triggerError
      ).then((R) => {
        Bt(
          R,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !$.delta && $.type === pi.pop && i.go(-1, !1);
      }).catch(Xn), Promise.reject()) : ($.delta && i.go(-$.delta, !1), re(O, G, S))).then((O) => {
        O = O || te(
          // after navigation, all matched components are resolved
          G,
          S,
          !1
        ), O && ($.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Bt(
          O,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? i.go(-$.delta, !1) : $.type === pi.pop && Bt(
          O,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && i.go(-1, !1)), ie(G, S, O);
      }).catch(Xn);
    }));
  }
  let $e = Ln(), ye = Ln(), se;
  function re(M, Q, $) {
    Ge(M);
    const G = ye.list();
    return G.length ? G.forEach((le) => le(M, Q, $)) : console.error(M), Promise.reject(M);
  }
  function oe() {
    return se && l.value !== or ? Promise.resolve() : new Promise((M, Q) => {
      $e.add([M, Q]);
    });
  }
  function Ge(M) {
    return se || (se = !M, xe(), $e.list().forEach(([Q, $]) => M ? $(M) : Q()), $e.reset()), M;
  }
  function Me(M, Q, $, G) {
    const { scrollBehavior: le } = e;
    if (!Kr || !le)
      return Promise.resolve();
    const S = !$ && VE(Eu(M.fullPath, 0)) || (G || !$) && history.state && history.state.scroll || null;
    return Pr().then(() => le(M, Q, S)).then((O) => O && ME(O)).catch((O) => re(O, M, Q));
  }
  const Ee = (M) => i.go(M);
  let ze;
  const We = /* @__PURE__ */ new Set(), mt = {
    currentRoute: l,
    listening: !0,
    addRoute: d,
    removeRoute: E,
    clearRoutes: t.clearRoutes,
    hasRoute: w,
    getRoutes: v,
    resolve: p,
    options: e,
    push: b,
    replace: T,
    go: Ee,
    back: () => Ee(-1),
    forward: () => Ee(1),
    beforeEach: s.add,
    beforeResolve: o.add,
    afterEach: a.add,
    onError: ye.add,
    isReady: oe,
    install(M) {
      const Q = this;
      M.component("RouterLink", ra), M.component("RouterView", Xd), M.config.globalProperties.$router = Q, Object.defineProperty(M.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => bt(l)
      }), Kr && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !ze && l.value === or && (ze = !0, b(i.location).catch((le) => {
      }));
      const $ = {};
      for (const le in or)
        Object.defineProperty($, le, {
          get: () => l.value[le],
          enumerable: !0
        });
      M.provide(al, Q), M.provide(Yd, cf($)), M.provide(ta, l);
      const G = M.unmount;
      We.add(M), M.unmount = function() {
        We.delete(M), We.size < 1 && (c = or, Z && Z(), Z = null, l.value = or, ze = !1, se = !1), G();
      };
    }
  };
  function Fe(M) {
    return M.reduce((Q, $) => Q.then(() => z($)), Promise.resolve());
  }
  return mt;
}
function hS(e, t) {
  const r = [], n = [], i = [], s = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < s; o++) {
    const a = t.matched[o];
    a && (e.matched.find((c) => yn(c, a)) ? n.push(a) : r.push(a));
    const l = e.matched[o];
    l && (t.matched.find((c) => yn(c, l)) || i.push(l));
  }
  return [r, n, i];
}
const dS = {
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  watch: {
    count: {
      immediate: !0,
      handler(e) {
        this.localCount = e;
      }
    }
  },
  data() {
    return {
      localCount: 0
    };
  },
  methods: {
    handleClick() {
      this.localCount++;
    }
  }
};
function pS(e, t, r, n, i, s) {
  return Ot(), Tt("div", null, [
    Ce("h1", null, "LocalCount: " + ct(i.localCount), 1),
    Ce("button", {
      onClick: t[0] || (t[0] = (...o) => s.handleClick && s.handleClick(...o))
    }, ct(e.$t("increment")), 1)
  ]);
}
const na = /* @__PURE__ */ Vr(dS, [["render", pS]]), mS = `query GetPostById($id: ID!) {
  post(id: $id) {
    id
    title
    body
  }
}
`, vS = { kind: "Document", definitions: [{ kind: "OperationDefinition", operation: "query", name: { kind: "Name", value: "GetPostById" }, variableDefinitions: [{ kind: "VariableDefinition", variable: { kind: "Variable", name: { kind: "Name", value: "id" } }, type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } }, directives: [] }], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "post" }, arguments: [{ kind: "Argument", name: { kind: "Name", value: "id" }, value: { kind: "Variable", name: { kind: "Name", value: "id" } } }], directives: [], selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "title" }, arguments: [], directives: [] }, { kind: "Field", name: { kind: "Name", value: "body" }, arguments: [], directives: [] }] } }] } }], loc: { start: 0, end: 118, source: { name: "GraphQL request", locationOffset: { line: 1, column: 1 }, body: mS } } }, gS = ".post[data-v-8bd3a5c6]{min-width:500px;box-shadow:5px 5px 10px #000;padding:10px;margin:20px 0;min-height:220px}", yS = ".post{background-color:bisque}", _S = {
  props: {
    id: {
      type: Number,
      required: !1,
      default: 1
    }
  },
  setup({ id: e }) {
    const { result: t, loading: r, error: n } = O_(vS, {
      id: e
    });
    return {
      result: t,
      loading: r,
      error: n
    };
  },
  computed: {
    post() {
      var e;
      return ((e = this.result) == null ? void 0 : e.post) || {};
    }
  }
}, bS = { class: "post" }, ES = { key: 0 }, SS = { key: 1 }, wS = { key: 2 };
function OS(e, t, r, n, i, s) {
  return Ot(), Tt("main", bS, [
    Ce("h1", null, "Post Id: " + ct(r.id), 1),
    n.loading ? (Ot(), Tt("div", ES, "Loading...")) : n.error ? (Ot(), Tt("div", SS, ct(n.error.message), 1)) : (Ot(), Tt("div", wS, [
      Ce("p", null, "Id: " + ct(s.post.id), 1),
      Ce("h2", null, "Title: " + ct(s.post.title), 1),
      Ce("p", null, "Body: " + ct(s.post.body), 1)
    ]))
  ]);
}
const ia = /* @__PURE__ */ Vr(_S, [["render", OS], ["styles", [gS, yS]], ["__scopeId", "data-v-8bd3a5c6"]]), TS = {
  computed: {
    ...J_(["count"])
  },
  methods: {
    ...Z_(["increment"]),
    handleClick() {
      this.increment();
    }
  }
};
function IS(e, t, r, n, i, s) {
  return Ot(), Tt("div", null, [
    Ce("h1", null, "GlobalCount: " + ct(e.count), 1),
    Ce("button", {
      onClick: t[0] || (t[0] = (...o) => s.handleClick && s.handleClick(...o))
    }, ct(e.$t("increment")), 1)
  ]);
}
const sa = /* @__PURE__ */ Vr(TS, [["render", IS]]), CS = ".user[data-v-9cc0d0e3]{margin:20px 0;padding:20px;background-color:bisque;box-shadow:5px 5px 8px #6e3d02cc;min-width:200px;min-height:150px}.user button[data-v-9cc0d0e3]{margin-top:10px;padding:5px 10px;background-color:#f0f0f0;border:1px solid #ccc;cursor:pointer}.user button[data-v-9cc0d0e3]:hover{background-color:#e0e0e0}", RS = {
  inject: ["user", "updateUserInfo"],
  computed: {
    userInfo() {
      return this.user || {
        name: "Not Provided",
        email: "Not Provided"
      };
    }
  },
  methods: {
    handleBtnClick() {
      const e = prompt("Enter your name"), t = prompt("Enter your email");
      this.updateUserInfo({ name: e, email: t });
    }
  }
}, kS = { class: "user" };
function DS(e, t, r, n, i, s) {
  return Ot(), Tt("div", kS, [
    t[1] || (t[1] = Ce("h1", null, "User Info", -1)),
    Ce("p", null, "Name: " + ct(s.userInfo.name), 1),
    Ce("p", null, "Email: " + ct(s.userInfo.email), 1),
    Ce("button", {
      onClick: t[0] || (t[0] = (...o) => s.handleBtnClick && s.handleBtnClick(...o))
    }, "Update Info")
  ]);
}
const PS = /* @__PURE__ */ Vr(RS, [["render", DS], ["styles", [CS]], ["__scopeId", "data-v-9cc0d0e3"]]), NS = ".app[data-v-7d02c714]{margin:20px 0;padding:20px;background-color:bisque;box-shadow:5px 5px 8px #6e3d02cc;min-width:200px;min-height:150px}.app button[data-v-7d02c714]{margin-top:10px;padding:5px 10px;background-color:#f0f0f0;border:1px solid #ccc;cursor:pointer}.app button[data-v-7d02c714]:hover{background-color:#e0e0e0}", AS = {
  inject: ["app", "updateAppInfo"],
  computed: {
    appInfo() {
      return this.app || {
        version: "Not Provided",
        author: "Not Provided"
      };
    }
  },
  methods: {
    handleBtnClick() {
      const e = prompt("Enter the version"), t = prompt("Enter the author");
      this.updateAppInfo({ version: e, author: t });
    }
  }
}, LS = { class: "app" };
function xS(e, t, r, n, i, s) {
  return Ot(), Tt("div", LS, [
    t[1] || (t[1] = Ce("h1", null, "App Info", -1)),
    Ce("p", null, "Version: " + ct(s.appInfo.version), 1),
    Ce("p", null, "Author: " + ct(s.appInfo.author), 1),
    Ce("button", {
      onClick: t[0] || (t[0] = (...o) => s.handleBtnClick && s.handleBtnClick(...o))
    }, "Update Info")
  ]);
}
const MS = /* @__PURE__ */ Vr(AS, [["render", xS], ["styles", [NS]], ["__scopeId", "data-v-7d02c714"]]), FS = {
  __name: "HomeView",
  setup(e) {
    return (t, r) => (Ot(), Tt("main", null, [
      r[0] || (r[0] = Ce("h1", null, "Home", -1)),
      ke(na),
      ke(na),
      ke(zf),
      ke(sa),
      ke(sa),
      ke(ia, { id: 1 }),
      ke(ia, { id: 2 }),
      ke(PS),
      ke(MS)
    ]));
  }
}, VS = fS({
  history: $E("/wc-usage/index.html"),
  routes: [
    {
      path: "/",
      name: "home",
      component: FS
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./AboutView-CtvQq3sw.js")
    }
  ]
});
function Jd(e) {
  return new Ur(function(t, r) {
    return new Se(function(n) {
      var i, s, o;
      try {
        i = r(t).subscribe({
          next: function(a) {
            if (a.errors ? o = e({
              graphQLErrors: a.errors,
              response: a,
              operation: t,
              forward: r
            }) : Lh(a) && (o = e({
              protocolErrors: a.extensions[ys],
              response: a,
              operation: t,
              forward: r
            })), o) {
              s = o.subscribe({
                next: n.next.bind(n),
                error: n.error.bind(n),
                complete: n.complete.bind(n)
              });
              return;
            }
            n.next(a);
          },
          error: function(a) {
            if (o = e({
              operation: t,
              networkError: a,
              //Network errors can return GraphQL errors on for example a 403
              graphQLErrors: a && a.result && a.result.errors || void 0,
              forward: r
            }), o) {
              s = o.subscribe({
                next: n.next.bind(n),
                error: n.error.bind(n),
                complete: n.complete.bind(n)
              });
              return;
            }
            n.error(a);
          },
          complete: function() {
            o || n.complete.bind(n)();
          }
        });
      } catch (a) {
        e({ networkError: a, operation: t, forward: r }), n.error(a);
      }
      return function() {
        i && i.unsubscribe(), s && i.unsubscribe();
      };
    });
  });
}
(function(e) {
  At(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.link = Jd(r), n;
  }
  return t.prototype.request = function(r, n) {
    return this.link.request(r, n);
  }, t;
})(Ur);
function jS(e) {
  const t = {
    ...e,
    "Content-Type": "application/json"
  }, r = window.localStorage.getItem("apollo-token");
  return r && (t.Authorization = `Bearer ${r}`), t;
}
const US = new Mh({
  uri: "https://graphqlzero.almansi.me/api",
  fetch: (e, t) => (t.headers = jS(t.headers || {}), fetch(e, t))
}), qS = Jd((e) => {
  console.error(e);
}), $S = new sd({
  cache: new rd(),
  link: qS.concat(US)
}), oa = Ye({
  version: "1.0.0",
  author: "John Doe"
}), WS = (e) => {
  oa.value = {
    ...oa.value,
    ...e
  };
}, bi = (e) => {
  e.use(tb), e.use(fE), e.use(VS), e.provide("app", oa), e.provide("updateAppInfo", WS), e.provide(od, {
    default: $S
  });
}, QS = /* @__PURE__ */ gi(zf, {
  configureApp: bi
});
customElements.define("wc-change-language", QS);
const HS = /* @__PURE__ */ gi(na, {
  configureApp: bi
});
customElements.define("wc-counter", HS);
const BS = /* @__PURE__ */ gi(ia, {
  configureApp: bi
});
customElements.define("wc-user-post", BS);
const GS = /* @__PURE__ */ gi(sa, {
  configureApp: bi
});
customElements.define("wc-global-counter", GS);
const zS = "#app{max-width:1280px;margin:0 auto;padding:2rem;font-weight:400}a,.green{text-decoration:none;color:#00bd7e;transition:.4s;padding:3px}", KS = { class: "wrapper" }, YS = {
  __name: "PageRouter",
  setup(e) {
    const t = Ye({
      name: "John Doe",
      email: "johndoe@gmail.com"
    }), r = (n) => {
      t.value = {
        ...t.value,
        ...n
      };
    };
    return nn("user", t), nn("updateUserInfo", r), (n, i) => (Ot(), Tt(vt, null, [
      Ce("header", null, [
        Ce("div", KS, [
          Ce("nav", null, [
            ke(bt(ra), { to: "/" }, {
              default: fo(() => i[0] || (i[0] = [
                go("Home")
              ])),
              _: 1
            }),
            ke(bt(ra), { to: "/about" }, {
              default: fo(() => i[1] || (i[1] = [
                go("About")
              ])),
              _: 1
            })
          ])
        ])
      ]),
      ke(bt(Xd))
    ], 64));
  }
}, XS = /* @__PURE__ */ Vr(YS, [["styles", [zS]]]), JS = /* @__PURE__ */ gi(XS, {
  configureApp: bi
});
customElements.define("wc-page-router", JS);
export {
  Vr as _,
  Ce as a,
  Tt as c,
  Ot as o
};
