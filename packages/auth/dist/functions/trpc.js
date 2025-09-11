var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// prisma/client/runtime/library.js
var require_library = __commonJS({
  "prisma/client/runtime/library.js"(exports, module) {
    "use strict";
    var eu = Object.create;
    var Nr = Object.defineProperty;
    var tu = Object.getOwnPropertyDescriptor;
    var ru = Object.getOwnPropertyNames;
    var nu = Object.getPrototypeOf;
    var iu = Object.prototype.hasOwnProperty;
    var Z = /* @__PURE__ */ __name((e, t2) => () => (t2 || e((t2 = { exports: {} }).exports, t2), t2.exports), "Z");
    var Ut = /* @__PURE__ */ __name((e, t2) => {
      for (var r in t2) Nr(e, r, { get: t2[r], enumerable: true });
    }, "Ut");
    var ho = /* @__PURE__ */ __name((e, t2, r, n) => {
      if (t2 && typeof t2 == "object" || typeof t2 == "function") for (let i of ru(t2)) !iu.call(e, i) && i !== r && Nr(e, i, { get: /* @__PURE__ */ __name(() => t2[i], "get"), enumerable: !(n = tu(t2, i)) || n.enumerable });
      return e;
    }, "ho");
    var k = /* @__PURE__ */ __name((e, t2, r) => (r = e != null ? eu(nu(e)) : {}, ho(t2 || !e || !e.__esModule ? Nr(r, "default", { value: e, enumerable: true }) : r, e)), "k");
    var ou = /* @__PURE__ */ __name((e) => ho(Nr({}, "__esModule", { value: true }), e), "ou");
    var jo = Z((pf, Zn) => {
      "use strict";
      var v = Zn.exports;
      Zn.exports.default = v;
      var D = "\x1B[", Ht = "\x1B]", ft = "\x07", Jr = ";", qo = process.env.TERM_PROGRAM === "Apple_Terminal";
      v.cursorTo = (e, t2) => {
        if (typeof e != "number") throw new TypeError("The `x` argument is required");
        return typeof t2 != "number" ? D + (e + 1) + "G" : D + (t2 + 1) + ";" + (e + 1) + "H";
      };
      v.cursorMove = (e, t2) => {
        if (typeof e != "number") throw new TypeError("The `x` argument is required");
        let r = "";
        return e < 0 ? r += D + -e + "D" : e > 0 && (r += D + e + "C"), t2 < 0 ? r += D + -t2 + "A" : t2 > 0 && (r += D + t2 + "B"), r;
      };
      v.cursorUp = (e = 1) => D + e + "A";
      v.cursorDown = (e = 1) => D + e + "B";
      v.cursorForward = (e = 1) => D + e + "C";
      v.cursorBackward = (e = 1) => D + e + "D";
      v.cursorLeft = D + "G";
      v.cursorSavePosition = qo ? "\x1B7" : D + "s";
      v.cursorRestorePosition = qo ? "\x1B8" : D + "u";
      v.cursorGetPosition = D + "6n";
      v.cursorNextLine = D + "E";
      v.cursorPrevLine = D + "F";
      v.cursorHide = D + "?25l";
      v.cursorShow = D + "?25h";
      v.eraseLines = (e) => {
        let t2 = "";
        for (let r = 0; r < e; r++) t2 += v.eraseLine + (r < e - 1 ? v.cursorUp() : "");
        return e && (t2 += v.cursorLeft), t2;
      };
      v.eraseEndLine = D + "K";
      v.eraseStartLine = D + "1K";
      v.eraseLine = D + "2K";
      v.eraseDown = D + "J";
      v.eraseUp = D + "1J";
      v.eraseScreen = D + "2J";
      v.scrollUp = D + "S";
      v.scrollDown = D + "T";
      v.clearScreen = "\x1Bc";
      v.clearTerminal = process.platform === "win32" ? `${v.eraseScreen}${D}0f` : `${v.eraseScreen}${D}3J${D}H`;
      v.beep = ft;
      v.link = (e, t2) => [Ht, "8", Jr, Jr, t2, ft, e, Ht, "8", Jr, Jr, ft].join("");
      v.image = (e, t2 = {}) => {
        let r = `${Ht}1337;File=inline=1`;
        return t2.width && (r += `;width=${t2.width}`), t2.height && (r += `;height=${t2.height}`), t2.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + ft;
      };
      v.iTerm = { setCwd: /* @__PURE__ */ __name((e = process.cwd()) => `${Ht}50;CurrentDir=${e}${ft}`, "setCwd"), annotation: /* @__PURE__ */ __name((e, t2 = {}) => {
        let r = `${Ht}1337;`, n = typeof t2.x < "u", i = typeof t2.y < "u";
        if ((n || i) && !(n && i && typeof t2.length < "u")) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replace(/\|/g, ""), r += t2.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t2.length > 0 ? r += (n ? [e, t2.length, t2.x, t2.y] : [t2.length, e]).join("|") : r += e, r + ft;
      }, "annotation") };
    });
    var Xn = Z((df, Vo) => {
      "use strict";
      Vo.exports = (e, t2 = process.argv) => {
        let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t2.indexOf(r + e), i = t2.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var Go = Z((mf, Uo) => {
      "use strict";
      var Gu = __require("os"), Bo = __require("tty"), de = Xn(), { env: Q } = process, Qe;
      de("no-color") || de("no-colors") || de("color=false") || de("color=never") ? Qe = 0 : (de("color") || de("colors") || de("color=true") || de("color=always")) && (Qe = 1);
      "FORCE_COLOR" in Q && (Q.FORCE_COLOR === "true" ? Qe = 1 : Q.FORCE_COLOR === "false" ? Qe = 0 : Qe = Q.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(Q.FORCE_COLOR, 10), 3));
      function ei(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      __name(ei, "ei");
      function ti(e, t2) {
        if (Qe === 0) return 0;
        if (de("color=16m") || de("color=full") || de("color=truecolor")) return 3;
        if (de("color=256")) return 2;
        if (e && !t2 && Qe === void 0) return 0;
        let r = Qe || 0;
        if (Q.TERM === "dumb") return r;
        if (process.platform === "win32") {
          let n = Gu.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in Q) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in Q) || Q.CI_NAME === "codeship" ? 1 : r;
        if ("TEAMCITY_VERSION" in Q) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Q.TEAMCITY_VERSION) ? 1 : 0;
        if (Q.COLORTERM === "truecolor") return 3;
        if ("TERM_PROGRAM" in Q) {
          let n = parseInt((Q.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (Q.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(Q.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Q.TERM) || "COLORTERM" in Q ? 1 : r;
      }
      __name(ti, "ti");
      function Qu(e) {
        let t2 = ti(e, e && e.isTTY);
        return ei(t2);
      }
      __name(Qu, "Qu");
      Uo.exports = { supportsColor: Qu, stdout: ei(ti(true, Bo.isatty(1))), stderr: ei(ti(true, Bo.isatty(2))) };
    });
    var Wo = Z((ff, Jo) => {
      "use strict";
      var Ju = Go(), gt = Xn();
      function Qo(e) {
        if (/^\d{3,4}$/.test(e)) {
          let r = /(\d{1,2})(\d{2})/.exec(e);
          return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
        }
        let t2 = (e || "").split(".").map((r) => parseInt(r, 10));
        return { major: t2[0], minor: t2[1], patch: t2[2] };
      }
      __name(Qo, "Qo");
      function ri(e) {
        let { env: t2 } = process;
        if ("FORCE_HYPERLINK" in t2) return !(t2.FORCE_HYPERLINK.length > 0 && parseInt(t2.FORCE_HYPERLINK, 10) === 0);
        if (gt("no-hyperlink") || gt("no-hyperlinks") || gt("hyperlink=false") || gt("hyperlink=never")) return false;
        if (gt("hyperlink=true") || gt("hyperlink=always") || "NETLIFY" in t2) return true;
        if (!Ju.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t2 || "TEAMCITY_VERSION" in t2) return false;
        if ("TERM_PROGRAM" in t2) {
          let r = Qo(t2.TERM_PROGRAM_VERSION);
          switch (t2.TERM_PROGRAM) {
            case "iTerm.app":
              return r.major === 3 ? r.minor >= 1 : r.major > 3;
            case "WezTerm":
              return r.major >= 20200620;
            case "vscode":
              return r.major > 1 || r.major === 1 && r.minor >= 72;
          }
        }
        if ("VTE_VERSION" in t2) {
          if (t2.VTE_VERSION === "0.50.0") return false;
          let r = Qo(t2.VTE_VERSION);
          return r.major > 0 || r.minor >= 50;
        }
        return false;
      }
      __name(ri, "ri");
      Jo.exports = { supportsHyperlink: ri, stdout: ri(process.stdout), stderr: ri(process.stderr) };
    });
    var Ko = Z((gf, Kt) => {
      "use strict";
      var Wu = jo(), ni = Wo(), Ho = /* @__PURE__ */ __name((e, t2, { target: r = "stdout", ...n } = {}) => ni[r] ? Wu.link(e, t2) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t2) : `${e} (\u200B${t2}\u200B)`, "Ho");
      Kt.exports = (e, t2, r = {}) => Ho(e, t2, r);
      Kt.exports.stderr = (e, t2, r = {}) => Ho(e, t2, { target: "stderr", ...r });
      Kt.exports.isSupported = ni.stdout;
      Kt.exports.stderr.isSupported = ni.stderr;
    });
    var oi = Z((Rf, Hu) => {
      Hu.exports = { name: "@prisma/engines-version", version: "5.22.0-44.605197351a3c8bdd595af2d2a9bc3025bca48ea2", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "605197351a3c8bdd595af2d2a9bc3025bca48ea2" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.34", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var si = Z((Wr) => {
      "use strict";
      Object.defineProperty(Wr, "__esModule", { value: true });
      Wr.enginesVersion = void 0;
      Wr.enginesVersion = oi().prisma.enginesVersion;
    });
    var Xo = Z((Gf, Yu) => {
      Yu.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
    });
    var ts = Z((Qf, Kr) => {
      "use strict";
      var Zu = __require("fs"), es = __require("path"), Xu = __require("os"), ec = Xo(), tc = ec.version, rc = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function nc(e) {
        let t2 = {}, r = e.toString();
        r = r.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = rc.exec(r)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t2[i] = o;
        }
        return t2;
      }
      __name(nc, "nc");
      function ci(e) {
        console.log(`[dotenv@${tc}][DEBUG] ${e}`);
      }
      __name(ci, "ci");
      function ic(e) {
        return e[0] === "~" ? es.join(Xu.homedir(), e.slice(1)) : e;
      }
      __name(ic, "ic");
      function oc(e) {
        let t2 = es.resolve(process.cwd(), ".env"), r = "utf8", n = !!(e && e.debug), i = !!(e && e.override);
        e && (e.path != null && (t2 = ic(e.path)), e.encoding != null && (r = e.encoding));
        try {
          let o = Hr.parse(Zu.readFileSync(t2, { encoding: r }));
          return Object.keys(o).forEach(function(s) {
            Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && ci(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
          }), { parsed: o };
        } catch (o) {
          return n && ci(`Failed to load ${t2} ${o.message}`), { error: o };
        }
      }
      __name(oc, "oc");
      var Hr = { config: oc, parse: nc };
      Kr.exports.config = Hr.config;
      Kr.exports.parse = Hr.parse;
      Kr.exports = Hr;
    });
    var as = Z((Zf, ss) => {
      "use strict";
      ss.exports = (e) => {
        let t2 = e.match(/^[ \t]*(?=\S)/gm);
        return t2 ? t2.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
      };
    });
    var us = Z((Xf, ls) => {
      "use strict";
      var uc = as();
      ls.exports = (e) => {
        let t2 = uc(e);
        if (t2 === 0) return e;
        let r = new RegExp(`^[ \\t]{${t2}}`, "gm");
        return e.replace(r, "");
      };
    });
    var fi = Z((og, cs) => {
      "use strict";
      cs.exports = (e, t2 = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t2 != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t2}\``);
        if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t2 === 0) return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t2));
      };
    });
    var fs = Z((lg, ms) => {
      "use strict";
      ms.exports = ({ onlyFirst: e = false } = {}) => {
        let t2 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t2, e ? void 0 : "g");
      };
    });
    var bi = Z((ug, gs) => {
      "use strict";
      var yc = fs();
      gs.exports = (e) => typeof e == "string" ? e.replace(yc(), "") : e;
    });
    var hs = Z((dg, Zr) => {
      "use strict";
      Zr.exports = (e = {}) => {
        let t2;
        if (e.repoUrl) t2 = e.repoUrl;
        else if (e.user && e.repo) t2 = `https://github.com/${e.user}/${e.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t2}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      Zr.exports.default = Zr.exports;
    });
    var Ai = Z((Th, $s) => {
      "use strict";
      $s.exports = /* @__PURE__ */ (function() {
        function e(t2, r, n, i, o) {
          return t2 < r || n < r ? t2 > n ? n + 1 : t2 + 1 : i === o ? r : r + 1;
        }
        __name(e, "e");
        return function(t2, r) {
          if (t2 === r) return 0;
          if (t2.length > r.length) {
            var n = t2;
            t2 = r, r = n;
          }
          for (var i = t2.length, o = r.length; i > 0 && t2.charCodeAt(i - 1) === r.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && t2.charCodeAt(s) === r.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, l, u, c, p, d, f, g, h, O, T, S, C, E = [];
          for (l = 0; l < i; l++) E.push(l + 1), E.push(t2.charCodeAt(s + l));
          for (var me = E.length - 1; a < o - 3; ) for (O = r.charCodeAt(s + (u = a)), T = r.charCodeAt(s + (c = a + 1)), S = r.charCodeAt(s + (p = a + 2)), C = r.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < me; l += 2) g = E[l], h = E[l + 1], u = e(g, u, c, O, h), c = e(u, c, p, T, h), p = e(c, p, d, S, h), f = e(p, d, f, C, h), E[l] = f, d = p, p = c, c = u, u = g;
          for (; a < o; ) for (O = r.charCodeAt(s + (u = a)), f = ++a, l = 0; l < me; l += 2) g = E[l], E[l] = f = e(g, u, f, O, E[l + 1]), u = g;
          return f;
        };
      })();
    });
    var Nm = {};
    Ut(Nm, { Debug: /* @__PURE__ */ __name(() => Gn, "Debug"), Decimal: /* @__PURE__ */ __name(() => xe, "Decimal"), Extensions: /* @__PURE__ */ __name(() => jn, "Extensions"), MetricsClient: /* @__PURE__ */ __name(() => Dt, "MetricsClient"), NotFoundError: /* @__PURE__ */ __name(() => Le, "NotFoundError"), PrismaClientInitializationError: /* @__PURE__ */ __name(() => R, "PrismaClientInitializationError"), PrismaClientKnownRequestError: /* @__PURE__ */ __name(() => V, "PrismaClientKnownRequestError"), PrismaClientRustPanicError: /* @__PURE__ */ __name(() => le, "PrismaClientRustPanicError"), PrismaClientUnknownRequestError: /* @__PURE__ */ __name(() => B, "PrismaClientUnknownRequestError"), PrismaClientValidationError: /* @__PURE__ */ __name(() => J, "PrismaClientValidationError"), Public: /* @__PURE__ */ __name(() => Vn, "Public"), Sql: /* @__PURE__ */ __name(() => oe, "Sql"), defineDmmfProperty: /* @__PURE__ */ __name(() => ua, "defineDmmfProperty"), deserializeJsonResponse: /* @__PURE__ */ __name(() => wt, "deserializeJsonResponse"), dmmfToRuntimeDataModel: /* @__PURE__ */ __name(() => la, "dmmfToRuntimeDataModel"), empty: /* @__PURE__ */ __name(() => ma, "empty"), getPrismaClient: /* @__PURE__ */ __name(() => Yl, "getPrismaClient"), getRuntime: /* @__PURE__ */ __name(() => In, "getRuntime"), join: /* @__PURE__ */ __name(() => da, "join"), makeStrictEnum: /* @__PURE__ */ __name(() => Zl, "makeStrictEnum"), makeTypedQueryFactory: /* @__PURE__ */ __name(() => ca, "makeTypedQueryFactory"), objectEnumValues: /* @__PURE__ */ __name(() => yn, "objectEnumValues"), raw: /* @__PURE__ */ __name(() => ji, "raw"), serializeJsonQuery: /* @__PURE__ */ __name(() => vn, "serializeJsonQuery"), skip: /* @__PURE__ */ __name(() => Pn, "skip"), sqltag: /* @__PURE__ */ __name(() => Vi, "sqltag"), warnEnvConflicts: /* @__PURE__ */ __name(() => Xl, "warnEnvConflicts"), warnOnce: /* @__PURE__ */ __name(() => tr, "warnOnce") });
    module.exports = ou(Nm);
    var jn = {};
    Ut(jn, { defineExtension: /* @__PURE__ */ __name(() => yo, "defineExtension"), getExtensionContext: /* @__PURE__ */ __name(() => bo, "getExtensionContext") });
    function yo(e) {
      return typeof e == "function" ? e : (t2) => t2.$extends(e);
    }
    __name(yo, "yo");
    function bo(e) {
      return e;
    }
    __name(bo, "bo");
    var Vn = {};
    Ut(Vn, { validator: /* @__PURE__ */ __name(() => Eo, "validator") });
    function Eo(...e) {
      return (t2) => t2;
    }
    __name(Eo, "Eo");
    var Mr = {};
    Ut(Mr, { $: /* @__PURE__ */ __name(() => To, "$"), bgBlack: /* @__PURE__ */ __name(() => gu, "bgBlack"), bgBlue: /* @__PURE__ */ __name(() => Eu, "bgBlue"), bgCyan: /* @__PURE__ */ __name(() => xu, "bgCyan"), bgGreen: /* @__PURE__ */ __name(() => yu, "bgGreen"), bgMagenta: /* @__PURE__ */ __name(() => wu, "bgMagenta"), bgRed: /* @__PURE__ */ __name(() => hu, "bgRed"), bgWhite: /* @__PURE__ */ __name(() => Pu, "bgWhite"), bgYellow: /* @__PURE__ */ __name(() => bu, "bgYellow"), black: /* @__PURE__ */ __name(() => pu, "black"), blue: /* @__PURE__ */ __name(() => rt, "blue"), bold: /* @__PURE__ */ __name(() => H, "bold"), cyan: /* @__PURE__ */ __name(() => De, "cyan"), dim: /* @__PURE__ */ __name(() => Oe, "dim"), gray: /* @__PURE__ */ __name(() => Gt, "gray"), green: /* @__PURE__ */ __name(() => qe, "green"), grey: /* @__PURE__ */ __name(() => fu, "grey"), hidden: /* @__PURE__ */ __name(() => uu, "hidden"), inverse: /* @__PURE__ */ __name(() => lu, "inverse"), italic: /* @__PURE__ */ __name(() => au, "italic"), magenta: /* @__PURE__ */ __name(() => du, "magenta"), red: /* @__PURE__ */ __name(() => ce, "red"), reset: /* @__PURE__ */ __name(() => su, "reset"), strikethrough: /* @__PURE__ */ __name(() => cu, "strikethrough"), underline: /* @__PURE__ */ __name(() => X, "underline"), white: /* @__PURE__ */ __name(() => mu, "white"), yellow: /* @__PURE__ */ __name(() => ke, "yellow") });
    var Bn;
    var wo;
    var xo;
    var Po;
    var vo = true;
    typeof process < "u" && ({ FORCE_COLOR: Bn, NODE_DISABLE_COLORS: wo, NO_COLOR: xo, TERM: Po } = process.env || {}, vo = process.stdout && process.stdout.isTTY);
    var To = { enabled: !wo && xo == null && Po !== "dumb" && (Bn != null && Bn !== "0" || vo) };
    function M(e, t2) {
      let r = new RegExp(`\\x1b\\[${t2}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t2}m`;
      return function(o) {
        return !To.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    __name(M, "M");
    var su = M(0, 0);
    var H = M(1, 22);
    var Oe = M(2, 22);
    var au = M(3, 23);
    var X = M(4, 24);
    var lu = M(7, 27);
    var uu = M(8, 28);
    var cu = M(9, 29);
    var pu = M(30, 39);
    var ce = M(31, 39);
    var qe = M(32, 39);
    var ke = M(33, 39);
    var rt = M(34, 39);
    var du = M(35, 39);
    var De = M(36, 39);
    var mu = M(37, 39);
    var Gt = M(90, 39);
    var fu = M(90, 39);
    var gu = M(40, 49);
    var hu = M(41, 49);
    var yu = M(42, 49);
    var bu = M(43, 49);
    var Eu = M(44, 49);
    var wu = M(45, 49);
    var xu = M(46, 49);
    var Pu = M(47, 49);
    var vu = 100;
    var Ro = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var Qt = [];
    var Co = Date.now();
    var Tu = 0;
    var Un = typeof process < "u" ? process.env : {};
    globalThis.DEBUG ??= Un.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= Un.DEBUG_COLORS ? Un.DEBUG_COLORS === "true" : true;
    var Jt = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t2 = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t2.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t2.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: /* @__PURE__ */ __name((...e) => {
      let [t2, r, ...n] = e;
      (console.warn ?? console.log)(`${t2} ${r}`, ...n);
    }, "log"), formatters: {} };
    function Ru(e) {
      let t2 = { color: Ro[Tu++ % Ro.length], enabled: Jt.enabled(e), namespace: e, log: Jt.log, extend: /* @__PURE__ */ __name(() => {
      }, "extend") }, r = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t2;
        if (n.length !== 0 && Qt.push([o, ...n]), Qt.length > vu && Qt.shift(), Jt.enabled(o) || i) {
          let l = n.map((c) => typeof c == "string" ? c : Cu(c)), u = `+${Date.now() - Co}ms`;
          Co = Date.now(), globalThis.DEBUG_COLORS ? a(Mr[s](H(o)), ...l, Mr[s](u)) : a(o, ...l, u);
        }
      }, "r");
      return new Proxy(r, { get: /* @__PURE__ */ __name((n, i) => t2[i], "get"), set: /* @__PURE__ */ __name((n, i, o) => t2[i] = o, "set") });
    }
    __name(Ru, "Ru");
    var Gn = new Proxy(Ru, { get: /* @__PURE__ */ __name((e, t2) => Jt[t2], "get"), set: /* @__PURE__ */ __name((e, t2, r) => Jt[t2] = r, "set") });
    function Cu(e, t2 = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i)) return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, t2);
    }
    __name(Cu, "Cu");
    function So(e = 7500) {
      let t2 = Qt.map(([r, ...n]) => `${r} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
      return t2.length < e ? t2 : t2.slice(-e);
    }
    __name(So, "So");
    function Ao() {
      Qt.length = 0;
    }
    __name(Ao, "Ao");
    var L = Gn;
    var Io = k(__require("fs"));
    function Qn() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && Io.default.existsSync(e)) && process.arch === "ia32") throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    __name(Qn, "Qn");
    var Jn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
    var $r = "libquery_engine";
    function qr(e, t2) {
      let r = t2 === "url";
      return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${$r}.dylib.node` : `${$r}-${e}.dylib.node` : r ? `${$r}.so.node` : `${$r}-${e}.so.node`;
    }
    __name(qr, "qr");
    var _o = k(__require("child_process"));
    var zn = k(__require("fs/promises"));
    var Gr = k(__require("os"));
    var _e = Symbol.for("@ts-pattern/matcher");
    var Su = Symbol.for("@ts-pattern/isVariadic");
    var Vr = "@ts-pattern/anonymous-select-key";
    var Wn = /* @__PURE__ */ __name((e) => !!(e && typeof e == "object"), "Wn");
    var jr = /* @__PURE__ */ __name((e) => e && !!e[_e], "jr");
    var Ee = /* @__PURE__ */ __name((e, t2, r) => {
      if (jr(e)) {
        let n = e[_e](), { matched: i, selections: o } = n.match(t2);
        return i && o && Object.keys(o).forEach((s) => r(s, o[s])), i;
      }
      if (Wn(e)) {
        if (!Wn(t2)) return false;
        if (Array.isArray(e)) {
          if (!Array.isArray(t2)) return false;
          let n = [], i = [], o = [];
          for (let s of e.keys()) {
            let a = e[s];
            jr(a) && a[Su] ? o.push(a) : o.length ? i.push(a) : n.push(a);
          }
          if (o.length) {
            if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
            if (t2.length < n.length + i.length) return false;
            let s = t2.slice(0, n.length), a = i.length === 0 ? [] : t2.slice(-i.length), l = t2.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
            return n.every((u, c) => Ee(u, s[c], r)) && i.every((u, c) => Ee(u, a[c], r)) && (o.length === 0 || Ee(o[0], l, r));
          }
          return e.length === t2.length && e.every((s, a) => Ee(s, t2[a], r));
        }
        return Object.keys(e).every((n) => {
          let i = e[n];
          return (n in t2 || jr(o = i) && o[_e]().matcherType === "optional") && Ee(i, t2[n], r);
          var o;
        });
      }
      return Object.is(t2, e);
    }, "Ee");
    var Ge = /* @__PURE__ */ __name((e) => {
      var t2, r, n;
      return Wn(e) ? jr(e) ? (t2 = (r = (n = e[_e]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? t2 : [] : Array.isArray(e) ? Wt(e, Ge) : Wt(Object.values(e), Ge) : [];
    }, "Ge");
    var Wt = /* @__PURE__ */ __name((e, t2) => e.reduce((r, n) => r.concat(t2(n)), []), "Wt");
    function pe(e) {
      return Object.assign(e, { optional: /* @__PURE__ */ __name(() => Au(e), "optional"), and: /* @__PURE__ */ __name((t2) => j(e, t2), "and"), or: /* @__PURE__ */ __name((t2) => Iu(e, t2), "or"), select: /* @__PURE__ */ __name((t2) => t2 === void 0 ? Oo(e) : Oo(t2, e), "select") });
    }
    __name(pe, "pe");
    function Au(e) {
      return pe({ [_e]: () => ({ match: /* @__PURE__ */ __name((t2) => {
        let r = {}, n = /* @__PURE__ */ __name((i, o) => {
          r[i] = o;
        }, "n");
        return t2 === void 0 ? (Ge(e).forEach((i) => n(i, void 0)), { matched: true, selections: r }) : { matched: Ee(e, t2, n), selections: r };
      }, "match"), getSelectionKeys: /* @__PURE__ */ __name(() => Ge(e), "getSelectionKeys"), matcherType: "optional" }) });
    }
    __name(Au, "Au");
    function j(...e) {
      return pe({ [_e]: () => ({ match: /* @__PURE__ */ __name((t2) => {
        let r = {}, n = /* @__PURE__ */ __name((i, o) => {
          r[i] = o;
        }, "n");
        return { matched: e.every((i) => Ee(i, t2, n)), selections: r };
      }, "match"), getSelectionKeys: /* @__PURE__ */ __name(() => Wt(e, Ge), "getSelectionKeys"), matcherType: "and" }) });
    }
    __name(j, "j");
    function Iu(...e) {
      return pe({ [_e]: () => ({ match: /* @__PURE__ */ __name((t2) => {
        let r = {}, n = /* @__PURE__ */ __name((i, o) => {
          r[i] = o;
        }, "n");
        return Wt(e, Ge).forEach((i) => n(i, void 0)), { matched: e.some((i) => Ee(i, t2, n)), selections: r };
      }, "match"), getSelectionKeys: /* @__PURE__ */ __name(() => Wt(e, Ge), "getSelectionKeys"), matcherType: "or" }) });
    }
    __name(Iu, "Iu");
    function I(e) {
      return { [_e]: () => ({ match: /* @__PURE__ */ __name((t2) => ({ matched: !!e(t2) }), "match") }) };
    }
    __name(I, "I");
    function Oo(...e) {
      let t2 = typeof e[0] == "string" ? e[0] : void 0, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
      return pe({ [_e]: () => ({ match: /* @__PURE__ */ __name((n) => {
        let i = { [t2 ?? Vr]: n };
        return { matched: r === void 0 || Ee(r, n, (o, s) => {
          i[o] = s;
        }), selections: i };
      }, "match"), getSelectionKeys: /* @__PURE__ */ __name(() => [t2 ?? Vr].concat(r === void 0 ? [] : Ge(r)), "getSelectionKeys") }) });
    }
    __name(Oo, "Oo");
    function ye(e) {
      return typeof e == "number";
    }
    __name(ye, "ye");
    function je(e) {
      return typeof e == "string";
    }
    __name(je, "je");
    function Ve(e) {
      return typeof e == "bigint";
    }
    __name(Ve, "Ve");
    var Km = pe(I(function(e) {
      return true;
    }));
    var Be = /* @__PURE__ */ __name((e) => Object.assign(pe(e), { startsWith: /* @__PURE__ */ __name((t2) => {
      return Be(j(e, (r = t2, I((n) => je(n) && n.startsWith(r)))));
      var r;
    }, "startsWith"), endsWith: /* @__PURE__ */ __name((t2) => {
      return Be(j(e, (r = t2, I((n) => je(n) && n.endsWith(r)))));
      var r;
    }, "endsWith"), minLength: /* @__PURE__ */ __name((t2) => Be(j(e, ((r) => I((n) => je(n) && n.length >= r))(t2))), "minLength"), length: /* @__PURE__ */ __name((t2) => Be(j(e, ((r) => I((n) => je(n) && n.length === r))(t2))), "length"), maxLength: /* @__PURE__ */ __name((t2) => Be(j(e, ((r) => I((n) => je(n) && n.length <= r))(t2))), "maxLength"), includes: /* @__PURE__ */ __name((t2) => {
      return Be(j(e, (r = t2, I((n) => je(n) && n.includes(r)))));
      var r;
    }, "includes"), regex: /* @__PURE__ */ __name((t2) => {
      return Be(j(e, (r = t2, I((n) => je(n) && !!n.match(r)))));
      var r;
    }, "regex") }), "Be");
    var zm = Be(I(je));
    var be = /* @__PURE__ */ __name((e) => Object.assign(pe(e), { between: /* @__PURE__ */ __name((t2, r) => be(j(e, ((n, i) => I((o) => ye(o) && n <= o && i >= o))(t2, r))), "between"), lt: /* @__PURE__ */ __name((t2) => be(j(e, ((r) => I((n) => ye(n) && n < r))(t2))), "lt"), gt: /* @__PURE__ */ __name((t2) => be(j(e, ((r) => I((n) => ye(n) && n > r))(t2))), "gt"), lte: /* @__PURE__ */ __name((t2) => be(j(e, ((r) => I((n) => ye(n) && n <= r))(t2))), "lte"), gte: /* @__PURE__ */ __name((t2) => be(j(e, ((r) => I((n) => ye(n) && n >= r))(t2))), "gte"), int: /* @__PURE__ */ __name(() => be(j(e, I((t2) => ye(t2) && Number.isInteger(t2)))), "int"), finite: /* @__PURE__ */ __name(() => be(j(e, I((t2) => ye(t2) && Number.isFinite(t2)))), "finite"), positive: /* @__PURE__ */ __name(() => be(j(e, I((t2) => ye(t2) && t2 > 0))), "positive"), negative: /* @__PURE__ */ __name(() => be(j(e, I((t2) => ye(t2) && t2 < 0))), "negative") }), "be");
    var Ym = be(I(ye));
    var Ue = /* @__PURE__ */ __name((e) => Object.assign(pe(e), { between: /* @__PURE__ */ __name((t2, r) => Ue(j(e, ((n, i) => I((o) => Ve(o) && n <= o && i >= o))(t2, r))), "between"), lt: /* @__PURE__ */ __name((t2) => Ue(j(e, ((r) => I((n) => Ve(n) && n < r))(t2))), "lt"), gt: /* @__PURE__ */ __name((t2) => Ue(j(e, ((r) => I((n) => Ve(n) && n > r))(t2))), "gt"), lte: /* @__PURE__ */ __name((t2) => Ue(j(e, ((r) => I((n) => Ve(n) && n <= r))(t2))), "lte"), gte: /* @__PURE__ */ __name((t2) => Ue(j(e, ((r) => I((n) => Ve(n) && n >= r))(t2))), "gte"), positive: /* @__PURE__ */ __name(() => Ue(j(e, I((t2) => Ve(t2) && t2 > 0))), "positive"), negative: /* @__PURE__ */ __name(() => Ue(j(e, I((t2) => Ve(t2) && t2 < 0))), "negative") }), "Ue");
    var Zm = Ue(I(Ve));
    var Xm = pe(I(function(e) {
      return typeof e == "boolean";
    }));
    var ef = pe(I(function(e) {
      return typeof e == "symbol";
    }));
    var tf = pe(I(function(e) {
      return e == null;
    }));
    var rf = pe(I(function(e) {
      return e != null;
    }));
    var Hn = { matched: false, value: void 0 };
    function mt(e) {
      return new Kn(e, Hn);
    }
    __name(mt, "mt");
    var Kn = class e {
      static {
        __name(this, "e");
      }
      constructor(t2, r) {
        this.input = void 0, this.state = void 0, this.input = t2, this.state = r;
      }
      with(...t2) {
        if (this.state.matched) return this;
        let r = t2[t2.length - 1], n = [t2[0]], i;
        t2.length === 3 && typeof t2[1] == "function" ? i = t2[1] : t2.length > 2 && n.push(...t2.slice(1, t2.length - 1));
        let o = false, s = {}, a = /* @__PURE__ */ __name((u, c) => {
          o = true, s[u] = c;
        }, "a"), l = !n.some((u) => Ee(u, this.input, a)) || i && !i(this.input) ? Hn : { matched: true, value: r(o ? Vr in s ? s[Vr] : s : this.input, this.input) };
        return new e(this.input, l);
      }
      when(t2, r) {
        if (this.state.matched) return this;
        let n = !!t2(this.input);
        return new e(this.input, n ? { matched: true, value: r(this.input, this.input) } : Hn);
      }
      otherwise(t2) {
        return this.state.matched ? this.state.value : t2(this.input);
      }
      exhaustive() {
        if (this.state.matched) return this.state.value;
        let t2;
        try {
          t2 = JSON.stringify(this.input);
        } catch {
          t2 = this.input;
        }
        throw new Error(`Pattern matching error: no pattern matches value ${t2}`);
      }
      run() {
        return this.exhaustive();
      }
      returnType() {
        return this;
      }
    };
    var Fo = __require("util");
    var Ou = { warn: ke("prisma:warn") };
    var ku = { warn: /* @__PURE__ */ __name(() => !process.env.PRISMA_DISABLE_WARNINGS, "warn") };
    function Br(e, ...t2) {
      ku.warn() && console.warn(`${Ou.warn} ${e}`, ...t2);
    }
    __name(Br, "Br");
    var Du = (0, Fo.promisify)(_o.default.exec);
    var te = L("prisma:get-platform");
    var _u = ["1.0.x", "1.1.x", "3.0.x"];
    async function Lo() {
      let e = Gr.default.platform(), t2 = process.arch;
      if (e === "freebsd") {
        let s = await Qr("freebsd-version");
        if (s && s.trim().length > 0) {
          let l = /^(\d+)\.?/.exec(s);
          if (l) return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t2 };
        }
      }
      if (e !== "linux") return { platform: e, arch: t2 };
      let r = await Lu(), n = await Uu(), i = Mu({ arch: t2, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = await $u(i);
      return { platform: "linux", libssl: o, arch: t2, archFromUname: n, ...r };
    }
    __name(Lo, "Lo");
    function Fu(e) {
      let t2 = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t2.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = mt({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
      return te(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
    }
    __name(Fu, "Fu");
    async function Lu() {
      let e = "/etc/os-release";
      try {
        let t2 = await zn.default.readFile(e, { encoding: "utf-8" });
        return Fu(t2);
      } catch {
        return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
      }
    }
    __name(Lu, "Lu");
    function Nu(e) {
      let t2 = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (t2) {
        let r = `${t2[1]}.x`;
        return No(r);
      }
    }
    __name(Nu, "Nu");
    function ko(e) {
      let t2 = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (t2) {
        let r = `${t2[1]}${t2[2] ?? ".0"}.x`;
        return No(r);
      }
    }
    __name(ko, "ko");
    function No(e) {
      let t2 = (() => {
        if ($o(e)) return e;
        let r = e.split(".");
        return r[1] = "0", r.join(".");
      })();
      if (_u.includes(t2)) return t2;
    }
    __name(No, "No");
    function Mu(e) {
      return mt(e).with({ familyDistro: "musl" }, () => (te('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t2 }) => (te('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t2}-linux-gnu`, `/lib/${t2}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (te('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t2, arch: r, archFromUname: n }) => (te(`Don't know any platform-specific paths for "${t2}" on ${r} (${n})`), []));
    }
    __name(Mu, "Mu");
    async function $u(e) {
      let t2 = 'grep -v "libssl.so.0"', r = await Do(e);
      if (r) {
        te(`Found libssl.so file using platform-specific paths: ${r}`);
        let o = ko(r);
        if (te(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "libssl-specific-path" };
      }
      te('Falling back to "ldconfig" and other generic paths');
      let n = await Qr(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t2}`);
      if (n || (n = await Do(["/lib64", "/usr/lib64", "/lib"])), n) {
        te(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
        let o = ko(n);
        if (te(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "ldconfig" };
      }
      let i = await Qr("openssl version -v");
      if (i) {
        te(`Found openssl binary with version: ${i}`);
        let o = Nu(i);
        if (te(`The parsed openssl version is: ${o}`), o) return { libssl: o, strategy: "openssl-binary" };
      }
      return te("Couldn't find any version of libssl or OpenSSL in the system"), {};
    }
    __name($u, "$u");
    async function Do(e) {
      for (let t2 of e) {
        let r = await qu(t2);
        if (r) return r;
      }
    }
    __name(Do, "Do");
    async function qu(e) {
      try {
        return (await zn.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
      } catch (t2) {
        if (t2.code === "ENOENT") return;
        throw t2;
      }
    }
    __name(qu, "qu");
    async function nt() {
      let { binaryTarget: e } = await Mo();
      return e;
    }
    __name(nt, "nt");
    function ju(e) {
      return e.binaryTarget !== void 0;
    }
    __name(ju, "ju");
    async function Yn() {
      let { memoized: e, ...t2 } = await Mo();
      return t2;
    }
    __name(Yn, "Yn");
    var Ur = {};
    async function Mo() {
      if (ju(Ur)) return Promise.resolve({ ...Ur, memoized: true });
      let e = await Lo(), t2 = Vu(e);
      return Ur = { ...e, binaryTarget: t2 }, { ...Ur, memoized: false };
    }
    __name(Mo, "Mo");
    function Vu(e) {
      let { platform: t2, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
      t2 === "linux" && !["x64", "arm64"].includes(r) && Br(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${r}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let l = "1.1.x";
      if (t2 === "linux" && i === void 0) {
        let c = mt({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        Br(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
      }
      let u = "debian";
      if (t2 === "linux" && o === void 0 && te(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), t2 === "darwin" && r === "arm64") return "darwin-arm64";
      if (t2 === "darwin") return "darwin";
      if (t2 === "win32") return "windows";
      if (t2 === "freebsd") return o;
      if (t2 === "openbsd") return "openbsd";
      if (t2 === "netbsd") return "netbsd";
      if (t2 === "linux" && o === "nixos") return "linux-nixos";
      if (t2 === "linux" && r === "arm64") return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
      if (t2 === "linux" && r === "arm") return `linux-arm-openssl-${i || l}`;
      if (t2 === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || $o(i) ? c : `${c}-openssl-${i}`;
      }
      return t2 === "linux" && o && i ? `${o}-openssl-${i}` : (t2 !== "linux" && Br(`Prisma detected unknown OS "${t2}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
    }
    __name(Vu, "Vu");
    async function Bu(e) {
      try {
        return await e();
      } catch {
        return;
      }
    }
    __name(Bu, "Bu");
    function Qr(e) {
      return Bu(async () => {
        let t2 = await Du(e);
        return te(`Command "${e}" successfully returned "${t2.stdout}"`), t2.stdout;
      });
    }
    __name(Qr, "Qr");
    async function Uu() {
      return typeof Gr.default.machine == "function" ? Gr.default.machine() : (await Qr("uname -m"))?.trim();
    }
    __name(Uu, "Uu");
    function $o(e) {
      return e.startsWith("1.");
    }
    __name($o, "$o");
    var zo = k(Ko());
    function ii(e) {
      return (0, zo.default)(e, e, { fallback: X });
    }
    __name(ii, "ii");
    var Ku = k(si());
    var $ = k(__require("path"));
    var zu = k(si());
    var Lf = L("prisma:engines");
    function Yo() {
      return $.default.join(__dirname, "../");
    }
    __name(Yo, "Yo");
    var Nf = "libquery-engine";
    $.default.join(__dirname, "../query-engine-darwin");
    $.default.join(__dirname, "../query-engine-darwin-arm64");
    $.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    $.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    $.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    $.default.join(__dirname, "../query-engine-linux-static-x64");
    $.default.join(__dirname, "../query-engine-linux-static-arm64");
    $.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    $.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    $.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    $.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    $.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    $.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    $.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    $.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    $.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    $.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    $.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    $.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    $.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    $.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    $.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    $.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    $.default.join(__dirname, "../query_engine-windows.dll.node");
    var ai = k(__require("fs"));
    var Zo = L("chmodPlusX");
    function li(e) {
      if (process.platform === "win32") return;
      let t2 = ai.default.statSync(e), r = t2.mode | 64 | 8 | 1;
      if (t2.mode === r) {
        Zo(`Execution permissions of ${e} are fine`);
        return;
      }
      let n = r.toString(8).slice(-3);
      Zo(`Have to call chmodPlusX on ${e}`), ai.default.chmodSync(e, n);
    }
    __name(li, "li");
    function ui(e) {
      let t2 = e.e, r = /* @__PURE__ */ __name((a) => `Prisma cannot find the required \`${a}\` system library in your system`, "r"), n = t2.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${ii("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Oe(e.id)}\`).`, s = mt({ message: t2.message, code: t2.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${r("libssl")}. Please install ${a} and try again.`;
      }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${t2.message}`;
    }
    __name(ui, "ui");
    var di = k(ts());
    var zr = k(__require("fs"));
    var ht = k(__require("path"));
    function rs(e) {
      let t2 = e.ignoreProcessEnv ? {} : process.env, r = /* @__PURE__ */ __name((n) => n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
        let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
        if (!a) return o;
        let l = a[1], u, c;
        if (l === "\\") c = a[0], u = c.replace("\\$", "$");
        else {
          let p = a[2];
          c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t2, p) ? t2[p] : e.parsed[p] || "", u = r(u);
        }
        return o.replace(c, u);
      }, n) ?? n, "r");
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(t2, n) ? t2[n] : e.parsed[n];
        e.parsed[n] = r(i);
      }
      for (let n in e.parsed) t2[n] = e.parsed[n];
      return e;
    }
    __name(rs, "rs");
    var pi = L("prisma:tryLoadEnv");
    function zt({ rootEnvPath: e, schemaEnvPath: t2 }, r = { conflictCheck: "none" }) {
      let n = ns(e);
      r.conflictCheck !== "none" && sc(n, t2, r.conflictCheck);
      let i = null;
      return is(n?.path, t2) || (i = ns(t2)), !n && !i && pi("No Environment variables loaded"), i?.dotenvResult.error ? console.error(ce(H("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } };
    }
    __name(zt, "zt");
    function sc(e, t2, r) {
      let n = e?.dotenvResult.parsed, i = !is(e?.path, t2);
      if (n && t2 && i && zr.default.existsSync(t2)) {
        let o = di.default.parse(zr.default.readFileSync(t2)), s = [];
        for (let a in o) n[a] === o[a] && s.push(a);
        if (s.length > 0) {
          let a = ht.default.relative(process.cwd(), e.path), l = ht.default.relative(process.cwd(), t2);
          if (r === "error") {
            let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${X(a)} and ${X(l)}
Conflicting env vars:
${s.map((c) => `  ${H(c)}`).join(`
`)}

We suggest to move the contents of ${X(l)} to ${X(a)} to consolidate your env vars.
`;
            throw new Error(u);
          } else if (r === "warn") {
            let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => H(c)).join(", ")} in ${X(a)} and ${X(l)}
Env vars from ${X(l)} overwrite the ones from ${X(a)}
      `;
            console.warn(`${ke("warn(prisma)")} ${u}`);
          }
        }
      }
    }
    __name(sc, "sc");
    function ns(e) {
      if (ac(e)) {
        pi(`Environment variables loaded from ${e}`);
        let t2 = di.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 });
        return { dotenvResult: rs(t2), message: Oe(`Environment variables loaded from ${ht.default.relative(process.cwd(), e)}`), path: e };
      } else pi(`Environment variables not found at ${e}`);
      return null;
    }
    __name(ns, "ns");
    function is(e, t2) {
      return e && t2 && ht.default.resolve(e) === ht.default.resolve(t2);
    }
    __name(is, "is");
    function ac(e) {
      return !!(e && zr.default.existsSync(e));
    }
    __name(ac, "ac");
    var os = "library";
    function Yt(e) {
      let t2 = lc();
      return t2 || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : os);
    }
    __name(Yt, "Yt");
    function lc() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    __name(lc, "lc");
    var Je;
    ((t2) => {
      let e;
      ((E) => (E.findUnique = "findUnique", E.findUniqueOrThrow = "findUniqueOrThrow", E.findFirst = "findFirst", E.findFirstOrThrow = "findFirstOrThrow", E.findMany = "findMany", E.create = "create", E.createMany = "createMany", E.createManyAndReturn = "createManyAndReturn", E.update = "update", E.updateMany = "updateMany", E.upsert = "upsert", E.delete = "delete", E.deleteMany = "deleteMany", E.groupBy = "groupBy", E.count = "count", E.aggregate = "aggregate", E.findRaw = "findRaw", E.aggregateRaw = "aggregateRaw"))(e = t2.ModelAction ||= {});
    })(Je ||= {});
    var Zt = k(__require("path"));
    function mi(e) {
      return Zt.default.sep === Zt.default.posix.sep ? e : e.split(Zt.default.sep).join(Zt.default.posix.sep);
    }
    __name(mi, "mi");
    var ps = k(fi());
    function hi(e) {
      return String(new gi(e));
    }
    __name(hi, "hi");
    var gi = class {
      static {
        __name(this, "gi");
      }
      constructor(t2) {
        this.config = t2;
      }
      toString() {
        let { config: t2 } = this, r = t2.provider.fromEnvVar ? `env("${t2.provider.fromEnvVar}")` : t2.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: cc(t2.binaryTargets) }));
        return `generator ${t2.name} {
${(0, ps.default)(pc(n), 2)}
}`;
      }
    };
    function cc(e) {
      let t2;
      if (e.length > 0) {
        let r = e.find((n) => n.fromEnvVar !== null);
        r ? t2 = `env("${r.fromEnvVar}")` : t2 = e.map((n) => n.native ? "native" : n.value);
      } else t2 = void 0;
      return t2;
    }
    __name(cc, "cc");
    function pc(e) {
      let t2 = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
      return Object.entries(e).map(([r, n]) => `${r.padEnd(t2)} = ${dc(n)}`).join(`
`);
    }
    __name(pc, "pc");
    function dc(e) {
      return JSON.parse(JSON.stringify(e, (t2, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
    }
    __name(dc, "dc");
    var er = {};
    Ut(er, { error: /* @__PURE__ */ __name(() => gc, "error"), info: /* @__PURE__ */ __name(() => fc, "info"), log: /* @__PURE__ */ __name(() => mc, "log"), query: /* @__PURE__ */ __name(() => hc, "query"), should: /* @__PURE__ */ __name(() => ds, "should"), tags: /* @__PURE__ */ __name(() => Xt, "tags"), warn: /* @__PURE__ */ __name(() => yi, "warn") });
    var Xt = { error: ce("prisma:error"), warn: ke("prisma:warn"), info: De("prisma:info"), query: rt("prisma:query") };
    var ds = { warn: /* @__PURE__ */ __name(() => !process.env.PRISMA_DISABLE_WARNINGS, "warn") };
    function mc(...e) {
      console.log(...e);
    }
    __name(mc, "mc");
    function yi(e, ...t2) {
      ds.warn() && console.warn(`${Xt.warn} ${e}`, ...t2);
    }
    __name(yi, "yi");
    function fc(e, ...t2) {
      console.info(`${Xt.info} ${e}`, ...t2);
    }
    __name(fc, "fc");
    function gc(e, ...t2) {
      console.error(`${Xt.error} ${e}`, ...t2);
    }
    __name(gc, "gc");
    function hc(e, ...t2) {
      console.log(`${Xt.query} ${e}`, ...t2);
    }
    __name(hc, "hc");
    function Yr(e, t2) {
      if (!e) throw new Error(`${t2}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
    }
    __name(Yr, "Yr");
    function Fe(e, t2) {
      throw new Error(t2);
    }
    __name(Fe, "Fe");
    function Ei(e, t2) {
      return Object.prototype.hasOwnProperty.call(e, t2);
    }
    __name(Ei, "Ei");
    var wi = /* @__PURE__ */ __name((e, t2) => e.reduce((r, n) => (r[t2(n)] = n, r), {}), "wi");
    function yt(e, t2) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t2(e[n], n);
      return r;
    }
    __name(yt, "yt");
    function xi(e, t2) {
      if (e.length === 0) return;
      let r = e[0];
      for (let n = 1; n < e.length; n++) t2(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    __name(xi, "xi");
    function w(e, t2) {
      Object.defineProperty(e, "name", { value: t2, configurable: true });
    }
    __name(w, "w");
    var ys = /* @__PURE__ */ new Set();
    var tr = /* @__PURE__ */ __name((e, t2, ...r) => {
      ys.has(e) || (ys.add(e), yi(t2, ...r));
    }, "tr");
    var V = class extends Error {
      static {
        __name(this, "V");
      }
      constructor(t2, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(t2), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    w(V, "PrismaClientKnownRequestError");
    var Le = class extends V {
      static {
        __name(this, "Le");
      }
      constructor(t2, r) {
        super(t2, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    };
    w(Le, "NotFoundError");
    var R = class e extends Error {
      static {
        __name(this, "e");
      }
      constructor(t2, r, n) {
        super(t2), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    w(R, "PrismaClientInitializationError");
    var le = class extends Error {
      static {
        __name(this, "le");
      }
      constructor(t2, r) {
        super(t2), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    w(le, "PrismaClientRustPanicError");
    var B = class extends Error {
      static {
        __name(this, "B");
      }
      constructor(t2, { clientVersion: r, batchRequestIdx: n }) {
        super(t2), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    w(B, "PrismaClientUnknownRequestError");
    var J = class extends Error {
      static {
        __name(this, "J");
      }
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    w(J, "PrismaClientValidationError");
    var bt = 9e15;
    var ze = 1e9;
    var Pi = "0123456789abcdef";
    var tn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var rn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var vi = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -bt, maxE: bt, crypto: false };
    var xs;
    var Ne;
    var x = true;
    var on = "[DecimalError] ";
    var Ke = on + "Invalid argument: ";
    var Ps = on + "Precision limit exceeded";
    var vs = on + "crypto unavailable";
    var Ts = "[object Decimal]";
    var ee = Math.floor;
    var G = Math.pow;
    var bc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var Ec = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var wc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var Rs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var ge = 1e7;
    var b = 7;
    var xc = 9007199254740991;
    var Pc = tn.length - 1;
    var Ti = rn.length - 1;
    var m = { toStringTag: Ts };
    m.absoluteValue = m.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), y(e);
    };
    m.ceil = function() {
      return y(new this.constructor(this), this.e + 1, 2);
    };
    m.clampedTo = m.clamp = function(e, t2) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t2 = new i(t2), !e.s || !t2.s) return new i(NaN);
      if (e.gt(t2)) throw Error(Ke + t2);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t2) > 0 ? t2 : new i(n);
    };
    m.comparedTo = m.cmp = function(e) {
      var t2, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a) return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
      if (l !== u) return l;
      if (o.e !== e.e) return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t2 = 0, r = n < i ? n : i; t2 < r; ++t2) if (s[t2] !== a[t2]) return s[t2] > a[t2] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    m.cosine = m.cos = function() {
      var e, t2, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t2 = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = vc(n, Os(n, r)), n.precision = e, n.rounding = t2, y(Ne == 2 || Ne == 3 ? r.neg() : r, e, t2, true)) : new n(1) : new n(NaN);
    };
    m.cubeRoot = m.cbrt = function() {
      var e, t2, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
      if (!c.isFinite() || c.isZero()) return new p(c);
      for (x = false, o = c.s * G(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = K(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = G(r, 1 / 3), e = ee((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ; ) if (a = n, l = a.times(a).times(a), u = l.plus(c), n = N(u.plus(c).times(a), u.plus(l), s + 2, 1), K(a.d).slice(0, s) === (r = K(n.d)).slice(0, s)) if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
        if (!i && (y(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          n = a;
          break;
        }
        s += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, e + 1, 1), t2 = !n.times(n).times(n).eq(c));
        break;
      }
      return x = true, y(n, e, p.rounding, t2);
    };
    m.decimalPlaces = m.dp = function() {
      var e, t2 = this.d, r = NaN;
      if (t2) {
        if (e = t2.length - 1, r = (e - ee(this.e / b)) * b, e = t2[e], e) for (; e % 10 == 0; e /= 10) r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    m.dividedBy = m.div = function(e) {
      return N(this, new this.constructor(e));
    };
    m.dividedToIntegerBy = m.divToInt = function(e) {
      var t2 = this, r = t2.constructor;
      return y(N(t2, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    m.equals = m.eq = function(e) {
      return this.cmp(e) === 0;
    };
    m.floor = function() {
      return y(new this.constructor(this), this.e + 1, 3);
    };
    m.greaterThan = m.gt = function(e) {
      return this.cmp(e) > 0;
    };
    m.greaterThanOrEqualTo = m.gte = function(e) {
      var t2 = this.cmp(e);
      return t2 == 1 || t2 === 0;
    };
    m.hyperbolicCosine = m.cosh = function() {
      var e, t2, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero()) return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t2 = (1 / an(4, e)).toString()) : (e = 16, t2 = "2.3283064365386962890625e-10"), o = Et(s, 1, o.times(t2), new s(1), true);
      for (var l, u = e, c = new s(8); u--; ) l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
      return y(o, s.precision = r, s.rounding = n, true);
    };
    m.hyperbolicSine = m.sinh = function() {
      var e, t2, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero()) return new o(i);
      if (t2 = o.precision, r = o.rounding, o.precision = t2 + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) i = Et(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / an(5, e)), i = Et(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; ) s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = t2, o.rounding = r, y(i, t2, r, true);
    };
    m.hyperbolicTangent = m.tanh = function() {
      var e, t2, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t2 = n.rounding, n.precision = e + 7, n.rounding = 1, N(r.sinh(), r.cosh(), n.precision = e, n.rounding = t2)) : new n(r.s);
    };
    m.inverseCosine = m.acos = function() {
      var e, t2 = this, r = t2.constructor, n = t2.abs().cmp(1), i = r.precision, o = r.rounding;
      return n !== -1 ? n === 0 ? t2.isNeg() ? fe(r, i, o) : new r(0) : new r(NaN) : t2.isZero() ? fe(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t2 = t2.asin(), e = fe(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t2));
    };
    m.inverseHyperbolicCosine = m.acosh = function() {
      var e, t2, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t2 = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, x = false, r = r.times(r).minus(1).sqrt().plus(r), x = true, n.precision = e, n.rounding = t2, r.ln()) : new n(r);
    };
    m.inverseHyperbolicSine = m.asinh = function() {
      var e, t2, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t2 = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, x = false, r = r.times(r).plus(1).sqrt().plus(r), x = true, n.precision = e, n.rounding = t2, r.ln());
    };
    m.inverseHyperbolicTangent = m.atanh = function() {
      var e, t2, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t2 = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? y(new o(i), e, t2, true) : (o.precision = r = n - i.e, i = N(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t2, i.times(0.5))) : new o(NaN);
    };
    m.inverseSine = m.asin = function() {
      var e, t2, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t2 = i.abs().cmp(1), r = o.precision, n = o.rounding, t2 !== -1 ? t2 === 0 ? (e = fe(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    m.inverseTangent = m.atan = function() {
      var e, t2, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
      if (u.isFinite()) {
        if (u.isZero()) return new c(u);
        if (u.abs().eq(1) && p + 4 <= Ti) return s = fe(c, p + 4, d).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s) return new c(NaN);
        if (p + 4 <= Ti) return s = fe(c, p + 4, d).times(0.5), s.s = u.s, s;
      }
      for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / b + 2 | 0), e = r; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (x = false, t2 = Math.ceil(a / b), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; ) if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t2] !== void 0) for (e = t2; s.d[e] === o.d[e] && e--; ) ;
      return r && (s = s.times(2 << r - 1)), x = true, y(s, c.precision = p, c.rounding = d, true);
    };
    m.isFinite = function() {
      return !!this.d;
    };
    m.isInteger = m.isInt = function() {
      return !!this.d && ee(this.e / b) > this.d.length - 2;
    };
    m.isNaN = function() {
      return !this.s;
    };
    m.isNegative = m.isNeg = function() {
      return this.s < 0;
    };
    m.isPositive = m.isPos = function() {
      return this.s > 0;
    };
    m.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    m.lessThan = m.lt = function(e) {
      return this.cmp(e) < 0;
    };
    m.lessThanOrEqualTo = m.lte = function(e) {
      return this.cmp(e) < 1;
    };
    m.logarithm = m.log = function(e) {
      var t2, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
      if (e == null) e = new c(10), t2 = true;
      else {
        if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) return new c(NaN);
        t2 = e.eq(10);
      }
      if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1)) return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t2) if (r.length > 1) o = true;
      else {
        for (i = r[0]; i % 10 === 0; ) i /= 10;
        o = i !== 1;
      }
      if (x = false, a = p + f, s = He(u, a), n = t2 ? nn(c, a + 10) : He(e, a), l = N(s, n, a, 1), rr(l.d, i = p, d)) do
        if (a += 10, s = He(u, a), n = t2 ? nn(c, a + 10) : He(e, a), l = N(s, n, a, 1), !o) {
          +K(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = y(l, p + 1, 0));
          break;
        }
      while (rr(l.d, i += 10, d));
      return x = true, y(l, p, d);
    };
    m.minus = m.sub = function(e) {
      var t2, r, n, i, o, s, a, l, u, c, p, d, f = this, g = f.constructor;
      if (e = new g(e), !f.d || !e.d) return !f.s || !e.s ? e = new g(NaN) : f.d ? e.s = -e.s : e = new g(e.d || f.s !== e.s ? f : NaN), e;
      if (f.s != e.s) return e.s = -e.s, f.plus(e);
      if (u = f.d, d = e.d, a = g.precision, l = g.rounding, !u[0] || !d[0]) {
        if (d[0]) e.s = -e.s;
        else if (u[0]) e = new g(f);
        else return new g(l === 3 ? -0 : 0);
        return x ? y(e, a, l) : e;
      }
      if (r = ee(e.e / b), c = ee(f.e / b), u = u.slice(), o = c - r, o) {
        for (p = o < 0, p ? (t2 = u, o = -o, s = d.length) : (t2 = d, r = c, s = u.length), n = Math.max(Math.ceil(a / b), s) + 2, o > n && (o = n, t2.length = 1), t2.reverse(), n = o; n--; ) t2.push(0);
        t2.reverse();
      } else {
        for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++) if (u[n] != d[n]) {
          p = u[n] < d[n];
          break;
        }
        o = 0;
      }
      for (p && (t2 = u, u = d, d = t2, e.s = -e.s), s = u.length, n = d.length - s; n > 0; --n) u[s++] = 0;
      for (n = d.length; n > o; ) {
        if (u[--n] < d[n]) {
          for (i = n; i && u[--i] === 0; ) u[i] = ge - 1;
          --u[i], u[n] += ge;
        }
        u[n] -= d[n];
      }
      for (; u[--s] === 0; ) u.pop();
      for (; u[0] === 0; u.shift()) --r;
      return u[0] ? (e.d = u, e.e = sn(u, r), x ? y(e, a, l) : e) : new g(l === 3 ? -0 : 0);
    };
    m.modulo = m.mod = function(e) {
      var t2, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? y(new n(r), n.precision, n.rounding) : (x = false, n.modulo == 9 ? (t2 = N(r, e.abs(), 0, 3, 1), t2.s *= e.s) : t2 = N(r, e, 0, n.modulo, 1), t2 = t2.times(e), x = true, r.minus(t2));
    };
    m.naturalExponential = m.exp = function() {
      return Ri(this);
    };
    m.naturalLogarithm = m.ln = function() {
      return He(this);
    };
    m.negated = m.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, y(e);
    };
    m.plus = m.add = function(e) {
      var t2, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
      if (e = new d(e), !p.d || !e.d) return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
      if (p.s != e.s) return e.s = -e.s, p.minus(e);
      if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0]) return c[0] || (e = new d(p)), x ? y(e, a, l) : e;
      if (o = ee(p.e / b), n = ee(e.e / b), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / b), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; ) r.push(0);
        r.reverse();
      }
      for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t2 = 0; i; ) t2 = (u[--i] = u[i] + c[i] + t2) / ge | 0, u[i] %= ge;
      for (t2 && (u.unshift(t2), ++n), s = u.length; u[--s] == 0; ) u.pop();
      return e.d = u, e.e = sn(u, n), x ? y(e, a, l) : e;
    };
    m.precision = m.sd = function(e) {
      var t2, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ke + e);
      return r.d ? (t2 = Cs(r.d), e && r.e + 1 > t2 && (t2 = r.e + 1)) : t2 = NaN, t2;
    };
    m.round = function() {
      var e = this, t2 = e.constructor;
      return y(new t2(e), e.e + 1, t2.rounding);
    };
    m.sine = m.sin = function() {
      var e, t2, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t2 = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + b, n.rounding = 1, r = Rc(n, Os(n, r)), n.precision = e, n.rounding = t2, y(Ne > 2 ? r.neg() : r, e, t2, true)) : new n(NaN);
    };
    m.squareRoot = m.sqrt = function() {
      var e, t2, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
      if (u !== 1 || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (x = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t2 = K(a), (t2.length + l) % 2 == 0 && (t2 += "0"), u = Math.sqrt(t2), l = ee((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t2 = "5e" + l : (t2 = u.toExponential(), t2 = t2.slice(0, t2.indexOf("e") + 1) + l), n = new c(t2)) : n = new c(u.toString()), r = (l = c.precision) + 3; ; ) if (o = n, n = o.plus(N(s, o, r + 2, 1)).times(0.5), K(o.d).slice(0, r) === (t2 = K(n.d)).slice(0, r)) if (t2 = t2.slice(r - 3, r + 1), t2 == "9999" || !i && t2 == "4999") {
        if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        r += 4, i = 1;
      } else {
        (!+t2 || !+t2.slice(1) && t2.charAt(0) == "5") && (y(n, l + 1, 1), e = !n.times(n).eq(s));
        break;
      }
      return x = true, y(n, l, c.rounding, e);
    };
    m.tangent = m.tan = function() {
      var e, t2, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t2 = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = N(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t2, y(Ne == 2 || Ne == 4 ? r.neg() : r, e, t2, true)) : new n(NaN);
    };
    m.times = m.mul = function(e) {
      var t2, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
      if (e.s *= c.s, !d || !d[0] || !f || !f[0]) return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
      for (r = ee(c.e / b) + ee(e.e / b), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; ) o.push(0);
      for (n = u; --n >= 0; ) {
        for (t2 = 0, i = l + n; i > n; ) a = o[i] + f[n] * d[i - n - 1] + t2, o[i--] = a % ge | 0, t2 = a / ge | 0;
        o[i] = (o[i] + t2) % ge | 0;
      }
      for (; !o[--s]; ) o.pop();
      return t2 ? ++r : o.shift(), e.d = o, e.e = sn(o, r), x ? y(e, p.precision, p.rounding) : e;
    };
    m.toBinary = function(e, t2) {
      return Si(this, 2, e, t2);
    };
    m.toDecimalPlaces = m.toDP = function(e, t2) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (ie(e, 0, ze), t2 === void 0 ? t2 = n.rounding : ie(t2, 0, 8), y(r, e + r.e + 1, t2));
    };
    m.toExponential = function(e, t2) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = we(n, true) : (ie(e, 0, ze), t2 === void 0 ? t2 = i.rounding : ie(t2, 0, 8), n = y(new i(n), e + 1, t2), r = we(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toFixed = function(e, t2) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = we(i) : (ie(e, 0, ze), t2 === void 0 ? t2 = o.rounding : ie(t2, 0, 8), n = y(new o(i), e + i.e + 1, t2), r = we(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    m.toFraction = function(e) {
      var t2, r, n, i, o, s, a, l, u, c, p, d, f = this, g = f.d, h = f.constructor;
      if (!g) return new h(f);
      if (u = r = new h(1), n = l = new h(0), t2 = new h(n), o = t2.e = Cs(g) - f.e - 1, s = o % b, t2.d[0] = G(10, s < 0 ? b + s : s), e == null) e = o > 0 ? t2 : u;
      else {
        if (a = new h(e), !a.isInt() || a.lt(u)) throw Error(Ke + a);
        e = a.gt(t2) ? o > 0 ? t2 : u : a;
      }
      for (x = false, a = new h(K(g)), c = h.precision, h.precision = o = g.length * b * 2; p = N(a, t2, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1; ) r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t2, t2 = a.minus(p.times(i)), a = i;
      return i = N(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = f.s, d = N(u, n, o, 1).minus(f).abs().cmp(N(l, r, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, r], h.precision = c, x = true, d;
    };
    m.toHexadecimal = m.toHex = function(e, t2) {
      return Si(this, 16, e, t2);
    };
    m.toNearest = function(e, t2) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d) return r;
        e = new n(1), t2 = n.rounding;
      } else {
        if (e = new n(e), t2 === void 0 ? t2 = n.rounding : ie(t2, 0, 8), !r.d) return e.s ? r : e;
        if (!e.d) return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (x = false, r = N(r, e, 0, t2, 1).times(e), x = true, y(r)) : (e.s = r.s, r = e), r;
    };
    m.toNumber = function() {
      return +this;
    };
    m.toOctal = function(e, t2) {
      return Si(this, 8, e, t2);
    };
    m.toPower = m.pow = function(e) {
      var t2, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(G(+a, u));
      if (a = new l(a), a.eq(1)) return a;
      if (n = l.precision, o = l.rounding, e.eq(1)) return y(a, n, o);
      if (t2 = ee(e.e / b), t2 >= e.d.length - 1 && (r = u < 0 ? -u : u) <= xc) return i = Ss(l, a, r, n), e.s < 0 ? new l(1).div(i) : y(i, n, o);
      if (s = a.s, s < 0) {
        if (t2 < e.d.length - 1) return new l(NaN);
        if (e.d[t2] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
      }
      return r = G(+a, u), t2 = r == 0 || !isFinite(r) ? ee(u * (Math.log("0." + K(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t2 > l.maxE + 1 || t2 < l.minE - 1 ? new l(t2 > 0 ? s / 0 : 0) : (x = false, l.rounding = a.s = 1, r = Math.min(12, (t2 + "").length), i = Ri(e.times(He(a, n + r)), n), i.d && (i = y(i, n + 5, 1), rr(i.d, n, o) && (t2 = n + 10, i = y(Ri(e.times(He(a, t2 + r)), t2), t2 + 5, 1), +K(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = y(i, n + 1, 0)))), i.s = s, x = true, l.rounding = o, y(i, n, o));
    };
    m.toPrecision = function(e, t2) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = we(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ie(e, 1, ze), t2 === void 0 ? t2 = i.rounding : ie(t2, 0, 8), n = y(new i(n), e, t2), r = we(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toSignificantDigits = m.toSD = function(e, t2) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t2 = n.rounding) : (ie(e, 1, ze), t2 === void 0 ? t2 = n.rounding : ie(t2, 0, 8)), y(new n(r), e, t2);
    };
    m.toString = function() {
      var e = this, t2 = e.constructor, r = we(e, e.e <= t2.toExpNeg || e.e >= t2.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    m.truncated = m.trunc = function() {
      return y(new this.constructor(this), this.e + 1, 1);
    };
    m.valueOf = m.toJSON = function() {
      var e = this, t2 = e.constructor, r = we(e, e.e <= t2.toExpNeg || e.e >= t2.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function K(e) {
      var t2, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t2 = 1; t2 < i; t2++) n = e[t2] + "", r = b - n.length, r && (o += We(r)), o += n;
        s = e[t2], n = s + "", r = b - n.length, r && (o += We(r));
      } else if (s === 0) return "0";
      for (; s % 10 === 0; ) s /= 10;
      return o + s;
    }
    __name(K, "K");
    function ie(e, t2, r) {
      if (e !== ~~e || e < t2 || e > r) throw Error(Ke + e);
    }
    __name(ie, "ie");
    function rr(e, t2, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10) --t2;
      return --t2 < 0 ? (t2 += b, i = 0) : (i = Math.ceil((t2 + 1) / b), t2 %= b), o = G(10, b - t2), a = e[i] % o | 0, n == null ? t2 < 3 ? (t2 == 0 ? a = a / 100 | 0 : t2 == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == G(10, t2 - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t2 < 4 ? (t2 == 0 ? a = a / 1e3 | 0 : t2 == 1 ? a = a / 100 | 0 : t2 == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == G(10, t2 - 3) - 1, s;
    }
    __name(rr, "rr");
    function en(e, t2, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; ) i[o] *= t2;
        for (i[0] += Pi.indexOf(e.charAt(s++)), n = 0; n < i.length; n++) i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    __name(en, "en");
    function vc(e, t2) {
      var r, n, i;
      if (t2.isZero()) return t2;
      n = t2.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / an(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t2 = Et(e, 1, t2.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t2.times(t2);
        t2 = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t2;
    }
    __name(vc, "vc");
    var N = /* @__PURE__ */ (function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; ) s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      __name(e, "e");
      function t2(n, i, o, s) {
        var a, l;
        if (o != s) l = o > s ? 1 : -1;
        else for (a = l = 0; a < o; a++) if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
        return l;
      }
      __name(t2, "t");
      function r(n, i, o, s) {
        for (var a = 0; o--; ) n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; ) n.shift();
      }
      __name(r, "r");
      return function(n, i, o, s, a, l) {
        var u, c, p, d, f, g, h, O, T, S, C, E, me, ae, Bt, U, ne, Ie, z, dt, Lr = n.constructor, qn = n.s == i.s ? 1 : -1, Y = n.d, _ = i.d;
        if (!Y || !Y[0] || !_ || !_[0]) return new Lr(!n.s || !i.s || (Y ? _ && Y[0] == _[0] : !_) ? NaN : Y && Y[0] == 0 || !_ ? qn * 0 : qn / 0);
        for (l ? (f = 1, c = n.e - i.e) : (l = ge, f = b, c = ee(n.e / f) - ee(i.e / f)), z = _.length, ne = Y.length, T = new Lr(qn), S = T.d = [], p = 0; _[p] == (Y[p] || 0); p++) ;
        if (_[p] > (Y[p] || 0) && c--, o == null ? (ae = o = Lr.precision, s = Lr.rounding) : a ? ae = o + (n.e - i.e) + 1 : ae = o, ae < 0) S.push(1), g = true;
        else {
          if (ae = ae / f + 2 | 0, p = 0, z == 1) {
            for (d = 0, _ = _[0], ae++; (p < ne || d) && ae--; p++) Bt = d * l + (Y[p] || 0), S[p] = Bt / _ | 0, d = Bt % _ | 0;
            g = d || p < ne;
          } else {
            for (d = l / (_[0] + 1) | 0, d > 1 && (_ = e(_, d, l), Y = e(Y, d, l), z = _.length, ne = Y.length), U = z, C = Y.slice(0, z), E = C.length; E < z; ) C[E++] = 0;
            dt = _.slice(), dt.unshift(0), Ie = _[0], _[1] >= l / 2 && ++Ie;
            do
              d = 0, u = t2(_, C, z, E), u < 0 ? (me = C[0], z != E && (me = me * l + (C[1] || 0)), d = me / Ie | 0, d > 1 ? (d >= l && (d = l - 1), h = e(_, d, l), O = h.length, E = C.length, u = t2(h, C, O, E), u == 1 && (d--, r(h, z < O ? dt : _, O, l))) : (d == 0 && (u = d = 1), h = _.slice()), O = h.length, O < E && h.unshift(0), r(C, h, E, l), u == -1 && (E = C.length, u = t2(_, C, z, E), u < 1 && (d++, r(C, z < E ? dt : _, E, l))), E = C.length) : u === 0 && (d++, C = [0]), S[p++] = d, u && C[0] ? C[E++] = Y[U] || 0 : (C = [Y[U]], E = 1);
            while ((U++ < ne || C[0] !== void 0) && ae--);
            g = C[0] !== void 0;
          }
          S[0] || S.shift();
        }
        if (f == 1) T.e = c, xs = g;
        else {
          for (p = 1, d = S[0]; d >= 10; d /= 10) p++;
          T.e = p + c * f - 1, y(T, a ? o + T.e + 1 : o, s, g);
        }
        return T;
      };
    })();
    function y(e, t2, r, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor;
      e: if (t2 != null) {
        if (p = e.d, !p) return e;
        for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
        if (o = t2 - i, o < 0) o += b, s = t2, c = p[d = 0], l = c / G(10, i - s - 1) % 10 | 0;
        else if (d = Math.ceil((o + 1) / b), a = p.length, d >= a) if (n) {
          for (; a++ <= d; ) p.push(0);
          c = l = 0, i = 1, o %= b, s = o - b + 1;
        } else break e;
        else {
          for (c = a = p[d], i = 1; a >= 10; a /= 10) i++;
          o %= b, s = o - b + i, l = s < 0 ? 0 : c / G(10, i - s - 1) % 10 | 0;
        }
        if (n = n || t2 < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % G(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / G(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t2 < 1 || !p[0]) return p.length = 0, u ? (t2 -= e.e + 1, p[0] = G(10, (b - t2 % b) % b), e.e = -t2 || 0) : p[0] = e.e = 0, e;
        if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = G(10, b - o), p[d] = s > 0 ? (c / G(10, i - s) % G(10, s) | 0) * a : 0), u) for (; ; ) if (d == 0) {
          for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
          for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, p[0] == ge && (p[0] = 1));
          break;
        } else {
          if (p[d] += a, p[d] != ge) break;
          p[d--] = 0, a = 1;
        }
        for (o = p.length; p[--o] === 0; ) p.pop();
      }
      return x && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
    }
    __name(y, "y");
    function we(e, t2, r) {
      if (!e.isFinite()) return Is(e);
      var n, i = e.e, o = K(e.d), s = o.length;
      return t2 ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + We(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + We(-i - 1) + o, r && (n = r - s) > 0 && (o += We(n))) : i >= s ? (o += We(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + We(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += We(n))), o;
    }
    __name(we, "we");
    function sn(e, t2) {
      var r = e[0];
      for (t2 *= b; r >= 10; r /= 10) t2++;
      return t2;
    }
    __name(sn, "sn");
    function nn(e, t2, r) {
      if (t2 > Pc) throw x = true, r && (e.precision = r), Error(Ps);
      return y(new e(tn), t2, 1, true);
    }
    __name(nn, "nn");
    function fe(e, t2, r) {
      if (t2 > Ti) throw Error(Ps);
      return y(new e(rn), t2, r, true);
    }
    __name(fe, "fe");
    function Cs(e) {
      var t2 = e.length - 1, r = t2 * b + 1;
      if (t2 = e[t2], t2) {
        for (; t2 % 10 == 0; t2 /= 10) r--;
        for (t2 = e[0]; t2 >= 10; t2 /= 10) r++;
      }
      return r;
    }
    __name(Cs, "Cs");
    function We(e) {
      for (var t2 = ""; e--; ) t2 += "0";
      return t2;
    }
    __name(We, "We");
    function Ss(e, t2, r, n) {
      var i, o = new e(1), s = Math.ceil(n / b + 4);
      for (x = false; ; ) {
        if (r % 2 && (o = o.times(t2), Es(o.d, s) && (i = true)), r = ee(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t2 = t2.times(t2), Es(t2.d, s);
      }
      return x = true, o;
    }
    __name(Ss, "Ss");
    function bs(e) {
      return e.d[e.d.length - 1] & 1;
    }
    __name(bs, "bs");
    function As(e, t2, r) {
      for (var n, i = new e(t2[0]), o = 0; ++o < t2.length; ) if (n = new e(t2[o]), n.s) i[r](n) && (i = n);
      else {
        i = n;
        break;
      }
      return i;
    }
    __name(As, "As");
    function Ri(e, t2) {
      var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, g = d.precision;
      if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (t2 == null ? (x = false, l = g) : l = t2, a = new d(0.03125); e.e > -2; ) e = e.times(a), p += 5;
      for (n = Math.log(G(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l; ; ) {
        if (o = y(o.times(e), l, 1), r = r.times(++c), a = s.plus(N(o, r, l, 1)), K(a.d).slice(0, l) === K(s.d).slice(0, l)) {
          for (i = p; i--; ) s = y(s.times(s), l, 1);
          if (t2 == null) if (u < 3 && rr(s.d, l - n, f, u)) d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
          else return y(s, d.precision = g, f, x = true);
          else return d.precision = g, s;
        }
        s = a;
      }
    }
    __name(Ri, "Ri");
    function He(e, t2) {
      var r, n, i, o, s, a, l, u, c, p, d, f = 1, g = 10, h = e, O = h.d, T = h.constructor, S = T.rounding, C = T.precision;
      if (h.s < 0 || !O || !O[0] || !h.e && O[0] == 1 && O.length == 1) return new T(O && !O[0] ? -1 / 0 : h.s != 1 ? NaN : O ? 0 : h);
      if (t2 == null ? (x = false, c = C) : c = t2, T.precision = c += g, r = K(O), n = r.charAt(0), Math.abs(o = h.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) h = h.times(e), r = K(h.d), n = r.charAt(0), f++;
        o = h.e, n > 1 ? (h = new T("0." + r), o++) : h = new T(n + "." + r.slice(1));
      } else return u = nn(T, c + 2, C).times(o + ""), h = He(new T(n + "." + r.slice(1)), c - g).plus(u), T.precision = C, t2 == null ? y(h, C, S, x = true) : h;
      for (p = h, l = s = h = N(h.minus(1), h.plus(1), c, 1), d = y(h.times(h), c, 1), i = 3; ; ) {
        if (s = y(s.times(d), c, 1), u = l.plus(N(s, new T(i), c, 1)), K(u.d).slice(0, c) === K(l.d).slice(0, c)) if (l = l.times(2), o !== 0 && (l = l.plus(nn(T, c + 2, C).times(o + ""))), l = N(l, new T(f), c, 1), t2 == null) if (rr(l.d, c - g, S, a)) T.precision = c += g, u = s = h = N(p.minus(1), p.plus(1), c, 1), d = y(h.times(h), c, 1), i = a = 1;
        else return y(l, T.precision = C, S, x = true);
        else return T.precision = C, l;
        l = u, i += 2;
      }
    }
    __name(He, "He");
    function Is(e) {
      return String(e.s * e.s / 0);
    }
    __name(Is, "Is");
    function Ci(e, t2) {
      var r, n, i;
      for ((r = t2.indexOf(".")) > -1 && (t2 = t2.replace(".", "")), (n = t2.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t2.slice(n + 1), t2 = t2.substring(0, n)) : r < 0 && (r = t2.length), n = 0; t2.charCodeAt(n) === 48; n++) ;
      for (i = t2.length; t2.charCodeAt(i - 1) === 48; --i) ;
      if (t2 = t2.slice(n, i), t2) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % b, r < 0 && (n += b), n < i) {
          for (n && e.d.push(+t2.slice(0, n)), i -= b; n < i; ) e.d.push(+t2.slice(n, n += b));
          t2 = t2.slice(n), n = b - t2.length;
        } else n -= i;
        for (; n--; ) t2 += "0";
        e.d.push(+t2), x && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else e.e = 0, e.d = [0];
      return e;
    }
    __name(Ci, "Ci");
    function Tc(e, t2) {
      var r, n, i, o, s, a, l, u, c;
      if (t2.indexOf("_") > -1) {
        if (t2 = t2.replace(/(\d)_(?=\d)/g, "$1"), Rs.test(t2)) return Ci(e, t2);
      } else if (t2 === "Infinity" || t2 === "NaN") return +t2 || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (Ec.test(t2)) r = 16, t2 = t2.toLowerCase();
      else if (bc.test(t2)) r = 2;
      else if (wc.test(t2)) r = 8;
      else throw Error(Ke + t2);
      for (o = t2.search(/p/i), o > 0 ? (l = +t2.slice(o + 1), t2 = t2.substring(2, o)) : t2 = t2.slice(2), o = t2.indexOf("."), s = o >= 0, n = e.constructor, s && (t2 = t2.replace(".", ""), a = t2.length, o = a - o, i = Ss(n, new n(r), o, o * 2)), u = en(t2, r, ge), c = u.length - 1, o = c; u[o] === 0; --o) u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = sn(u, c), e.d = u, x = false, s && (e = N(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? G(2, l) : it.pow(2, l))), x = true, e);
    }
    __name(Tc, "Tc");
    function Rc(e, t2) {
      var r, n = t2.d.length;
      if (n < 3) return t2.isZero() ? t2 : Et(e, 2, t2, t2);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t2 = t2.times(1 / an(5, r)), t2 = Et(e, 2, t2, t2);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; ) i = t2.times(t2), t2 = t2.times(o.plus(i.times(s.times(i).minus(a))));
      return t2;
    }
    __name(Rc, "Rc");
    function Et(e, t2, r, n, i) {
      var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / b);
      for (x = false, l = r.times(r), a = new e(n); ; ) {
        if (s = N(a.times(l), new e(t2++ * t2++), c, 1), a = i ? n.plus(s) : n.minus(s), n = N(s.times(l), new e(t2++ * t2++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
          for (o = p; s.d[o] === a.d[o] && o--; ) ;
          if (o == -1) break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return x = true, s.d.length = p + 1, s;
    }
    __name(Et, "Et");
    function an(e, t2) {
      for (var r = e; --t2; ) r *= e;
      return r;
    }
    __name(an, "an");
    function Os(e, t2) {
      var r, n = t2.s < 0, i = fe(e, e.precision, 1), o = i.times(0.5);
      if (t2 = t2.abs(), t2.lte(o)) return Ne = n ? 4 : 1, t2;
      if (r = t2.divToInt(i), r.isZero()) Ne = n ? 3 : 2;
      else {
        if (t2 = t2.minus(r.times(i)), t2.lte(o)) return Ne = bs(r) ? n ? 2 : 3 : n ? 4 : 1, t2;
        Ne = bs(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t2.minus(i).abs();
    }
    __name(Os, "Os");
    function Si(e, t2, r, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor, g = r !== void 0;
      if (g ? (ie(r, 1, ze), n === void 0 ? n = f.rounding : ie(n, 0, 8)) : (r = f.precision, n = f.rounding), !e.isFinite()) c = Is(e);
      else {
        for (c = we(e), s = c.indexOf("."), g ? (i = 2, t2 == 16 ? r = r * 4 - 3 : t2 == 8 && (r = r * 3 - 2)) : i = t2, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = en(we(d), 10, i), d.e = d.d.length), p = en(c, 10, i), o = l = p.length; p[--l] == 0; ) p.pop();
        if (!p[0]) c = g ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = N(e, d, r, n, 0, i), p = e.d, o = e.e, u = xs), s = p[r], a = i / 2, u = u || p[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u) for (; ++p[--r] > i - 1; ) p[r] = 0, r || (++o, p.unshift(1));
          for (l = p.length; !p[l - 1]; --l) ;
          for (s = 0, c = ""; s < l; s++) c += Pi.charAt(p[s]);
          if (g) {
            if (l > 1) if (t2 == 16 || t2 == 8) {
              for (s = t2 == 16 ? 4 : 3, --l; l % s; l++) c += "0";
              for (p = en(c, i, t2), l = p.length; !p[l - 1]; --l) ;
              for (s = 1, c = "1."; s < l; s++) c += Pi.charAt(p[s]);
            } else c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; ) c = "0" + c;
            c = "0." + c;
          } else if (++o > l) for (o -= l; o--; ) c += "0";
          else o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (t2 == 16 ? "0x" : t2 == 2 ? "0b" : t2 == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    __name(Si, "Si");
    function Es(e, t2) {
      if (e.length > t2) return e.length = t2, true;
    }
    __name(Es, "Es");
    function Cc(e) {
      return new this(e).abs();
    }
    __name(Cc, "Cc");
    function Sc(e) {
      return new this(e).acos();
    }
    __name(Sc, "Sc");
    function Ac(e) {
      return new this(e).acosh();
    }
    __name(Ac, "Ac");
    function Ic(e, t2) {
      return new this(e).plus(t2);
    }
    __name(Ic, "Ic");
    function Oc(e) {
      return new this(e).asin();
    }
    __name(Oc, "Oc");
    function kc(e) {
      return new this(e).asinh();
    }
    __name(kc, "kc");
    function Dc(e) {
      return new this(e).atan();
    }
    __name(Dc, "Dc");
    function _c(e) {
      return new this(e).atanh();
    }
    __name(_c, "_c");
    function Fc(e, t2) {
      e = new this(e), t2 = new this(t2);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t2.s ? r = new this(NaN) : !e.d && !t2.d ? (r = fe(this, o, 1).times(t2.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t2.d || e.isZero() ? (r = t2.s < 0 ? fe(this, n, i) : new this(0), r.s = e.s) : !e.d || t2.isZero() ? (r = fe(this, o, 1).times(0.5), r.s = e.s) : t2.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(N(e, t2, o, 1)), t2 = fe(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t2) : r.plus(t2)) : r = this.atan(N(e, t2, o, 1)), r;
    }
    __name(Fc, "Fc");
    function Lc(e) {
      return new this(e).cbrt();
    }
    __name(Lc, "Lc");
    function Nc(e) {
      return y(e = new this(e), e.e + 1, 2);
    }
    __name(Nc, "Nc");
    function Mc(e, t2, r) {
      return new this(e).clamp(t2, r);
    }
    __name(Mc, "Mc");
    function $c(e) {
      if (!e || typeof e != "object") throw Error(on + "Object expected");
      var t2, r, n, i = e.defaults === true, o = ["precision", 1, ze, "rounding", 0, 8, "toExpNeg", -bt, 0, "toExpPos", 0, bt, "maxE", 0, bt, "minE", -bt, 0, "modulo", 0, 9];
      for (t2 = 0; t2 < o.length; t2 += 3) if (r = o[t2], i && (this[r] = vi[r]), (n = e[r]) !== void 0) if (ee(n) === n && n >= o[t2 + 1] && n <= o[t2 + 2]) this[r] = n;
      else throw Error(Ke + r + ": " + n);
      if (r = "crypto", i && (this[r] = vi[r]), (n = e[r]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = true;
      else throw Error(vs);
      else this[r] = false;
      else throw Error(Ke + r + ": " + n);
      return this;
    }
    __name($c, "$c");
    function qc(e) {
      return new this(e).cos();
    }
    __name(qc, "qc");
    function jc(e) {
      return new this(e).cosh();
    }
    __name(jc, "jc");
    function ks(e) {
      var t2, r, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i)) return new i(o);
        if (u.constructor = i, ws(o)) {
          u.s = o.s, x ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10) s++;
            x ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return Ci(u, o.toString());
        } else if (l !== "string") throw Error(Ke + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), Rs.test(o) ? Ci(u, o) : Tc(u, o);
      }
      __name(i, "i");
      if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = $c, i.clone = ks, i.isDecimal = ws, i.abs = Cc, i.acos = Sc, i.acosh = Ac, i.add = Ic, i.asin = Oc, i.asinh = kc, i.atan = Dc, i.atanh = _c, i.atan2 = Fc, i.cbrt = Lc, i.ceil = Nc, i.clamp = Mc, i.cos = qc, i.cosh = jc, i.div = Vc, i.exp = Bc, i.floor = Uc, i.hypot = Gc, i.ln = Qc, i.log = Jc, i.log10 = Hc, i.log2 = Wc, i.max = Kc, i.min = zc, i.mod = Yc, i.mul = Zc, i.pow = Xc, i.random = ep, i.round = tp, i.sign = rp, i.sin = np, i.sinh = ip, i.sqrt = op, i.sub = sp, i.sum = ap, i.tan = lp, i.tanh = up, i.trunc = cp, e === void 0 && (e = {}), e && e.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t2 = 0; t2 < n.length; ) e.hasOwnProperty(r = n[t2++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    __name(ks, "ks");
    function Vc(e, t2) {
      return new this(e).div(t2);
    }
    __name(Vc, "Vc");
    function Bc(e) {
      return new this(e).exp();
    }
    __name(Bc, "Bc");
    function Uc(e) {
      return y(e = new this(e), e.e + 1, 3);
    }
    __name(Uc, "Uc");
    function Gc() {
      var e, t2, r = new this(0);
      for (x = false, e = 0; e < arguments.length; ) if (t2 = new this(arguments[e++]), t2.d) r.d && (r = r.plus(t2.times(t2)));
      else {
        if (t2.s) return x = true, new this(1 / 0);
        r = t2;
      }
      return x = true, r.sqrt();
    }
    __name(Gc, "Gc");
    function ws(e) {
      return e instanceof it || e && e.toStringTag === Ts || false;
    }
    __name(ws, "ws");
    function Qc(e) {
      return new this(e).ln();
    }
    __name(Qc, "Qc");
    function Jc(e, t2) {
      return new this(e).log(t2);
    }
    __name(Jc, "Jc");
    function Wc(e) {
      return new this(e).log(2);
    }
    __name(Wc, "Wc");
    function Hc(e) {
      return new this(e).log(10);
    }
    __name(Hc, "Hc");
    function Kc() {
      return As(this, arguments, "lt");
    }
    __name(Kc, "Kc");
    function zc() {
      return As(this, arguments, "gt");
    }
    __name(zc, "zc");
    function Yc(e, t2) {
      return new this(e).mod(t2);
    }
    __name(Yc, "Yc");
    function Zc(e, t2) {
      return new this(e).mul(t2);
    }
    __name(Zc, "Zc");
    function Xc(e, t2) {
      return new this(e).pow(t2);
    }
    __name(Xc, "Xc");
    function ep(e) {
      var t2, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : ie(e, 1, ze), n = Math.ceil(e / b), this.crypto) if (crypto.getRandomValues) for (t2 = crypto.getRandomValues(new Uint32Array(n)); o < n; ) i = t2[o], i >= 429e7 ? t2[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (t2 = crypto.randomBytes(n *= 4); o < n; ) i = t2[o] + (t2[o + 1] << 8) + (t2[o + 2] << 16) + ((t2[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t2, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else throw Error(vs);
      else for (; o < n; ) a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= b, n && e && (i = G(10, b - e), a[o] = (n / i | 0) * i); a[o] === 0; o--) a.pop();
      if (o < 0) r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= b) a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
        n < b && (r -= b - n);
      }
      return s.e = r, s.d = a, s;
    }
    __name(ep, "ep");
    function tp(e) {
      return y(e = new this(e), e.e + 1, this.rounding);
    }
    __name(tp, "tp");
    function rp(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    __name(rp, "rp");
    function np(e) {
      return new this(e).sin();
    }
    __name(np, "np");
    function ip(e) {
      return new this(e).sinh();
    }
    __name(ip, "ip");
    function op(e) {
      return new this(e).sqrt();
    }
    __name(op, "op");
    function sp(e, t2) {
      return new this(e).sub(t2);
    }
    __name(sp, "sp");
    function ap() {
      var e = 0, t2 = arguments, r = new this(t2[e]);
      for (x = false; r.s && ++e < t2.length; ) r = r.plus(t2[e]);
      return x = true, y(r, this.precision, this.rounding);
    }
    __name(ap, "ap");
    function lp(e) {
      return new this(e).tan();
    }
    __name(lp, "lp");
    function up(e) {
      return new this(e).tanh();
    }
    __name(up, "up");
    function cp(e) {
      return y(e = new this(e), e.e + 1, 1);
    }
    __name(cp, "cp");
    m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
    m[Symbol.toStringTag] = "Decimal";
    var it = m.constructor = ks(vi);
    tn = new it(tn);
    rn = new it(rn);
    var xe = it;
    function wt(e) {
      return e === null ? e : Array.isArray(e) ? e.map(wt) : typeof e == "object" ? pp(e) ? dp(e) : yt(e, wt) : e;
    }
    __name(wt, "wt");
    function pp(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    __name(pp, "pp");
    function dp({ $type: e, value: t2 }) {
      switch (e) {
        case "BigInt":
          return BigInt(t2);
        case "Bytes":
          return Buffer.from(t2, "base64");
        case "DateTime":
          return new Date(t2);
        case "Decimal":
          return new xe(t2);
        case "Json":
          return JSON.parse(t2);
        default:
          Fe(t2, "Unknown tagged value");
      }
    }
    __name(dp, "dp");
    function xt(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(xt, "xt");
    function Pt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    __name(Pt, "Pt");
    function ln(e) {
      return e.toString() !== "Invalid Date";
    }
    __name(ln, "ln");
    function vt(e) {
      return it.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    __name(vt, "vt");
    var Ms = k(fi());
    var Ns = k(__require("fs"));
    var Ds = { keyword: De, entity: De, value: /* @__PURE__ */ __name((e) => H(rt(e)), "value"), punctuation: rt, directive: De, function: De, variable: /* @__PURE__ */ __name((e) => H(rt(e)), "variable"), string: /* @__PURE__ */ __name((e) => H(qe(e)), "string"), boolean: ke, number: De, comment: Gt };
    var mp = /* @__PURE__ */ __name((e) => e, "mp");
    var un = {};
    var fp = 0;
    var P = { manual: un.Prism && un.Prism.manual, disableWorkerMessageHandler: un.Prism && un.Prism.disableWorkerMessageHandler, util: { encode: /* @__PURE__ */ __name(function(e) {
      if (e instanceof he) {
        let t2 = e;
        return new he(t2.type, P.util.encode(t2.content), t2.alias);
      } else return Array.isArray(e) ? e.map(P.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, "encode"), type: /* @__PURE__ */ __name(function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, "type"), objId: /* @__PURE__ */ __name(function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++fp }), e.__id;
    }, "objId"), clone: /* @__PURE__ */ __name(function e(t2, r) {
      let n, i, o = P.util.type(t2);
      switch (r = r || {}, o) {
        case "Object":
          if (i = P.util.objId(t2), r[i]) return r[i];
          n = {}, r[i] = n;
          for (let s in t2) t2.hasOwnProperty(s) && (n[s] = e(t2[s], r));
          return n;
        case "Array":
          return i = P.util.objId(t2), r[i] ? r[i] : (n = [], r[i] = n, t2.forEach(function(s, a) {
            n[a] = e(s, r);
          }), n);
        default:
          return t2;
      }
    }, "e") }, languages: { extend: /* @__PURE__ */ __name(function(e, t2) {
      let r = P.util.clone(P.languages[e]);
      for (let n in t2) r[n] = t2[n];
      return r;
    }, "extend"), insertBefore: /* @__PURE__ */ __name(function(e, t2, r, n) {
      n = n || P.languages;
      let i = n[e], o = {};
      for (let a in i) if (i.hasOwnProperty(a)) {
        if (a == t2) for (let l in r) r.hasOwnProperty(l) && (o[l] = r[l]);
        r.hasOwnProperty(a) || (o[a] = i[a]);
      }
      let s = n[e];
      return n[e] = o, P.languages.DFS(P.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, "insertBefore"), DFS: /* @__PURE__ */ __name(function e(t2, r, n, i) {
      i = i || {};
      let o = P.util.objId;
      for (let s in t2) if (t2.hasOwnProperty(s)) {
        r.call(t2, s, t2[s], n || s);
        let a = t2[s], l = P.util.type(a);
        l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
      }
    }, "e") }, plugins: {}, highlight: /* @__PURE__ */ __name(function(e, t2, r) {
      let n = { code: e, grammar: t2, language: r };
      return P.hooks.run("before-tokenize", n), n.tokens = P.tokenize(n.code, n.grammar), P.hooks.run("after-tokenize", n), he.stringify(P.util.encode(n.tokens), n.language);
    }, "highlight"), matchGrammar: /* @__PURE__ */ __name(function(e, t2, r, n, i, o, s) {
      for (let h in r) {
        if (!r.hasOwnProperty(h) || !r[h]) continue;
        if (h == s) return;
        let O = r[h];
        O = P.util.type(O) === "Array" ? O : [O];
        for (let T = 0; T < O.length; ++T) {
          let S = O[T], C = S.inside, E = !!S.lookbehind, me = !!S.greedy, ae = 0, Bt = S.alias;
          if (me && !S.pattern.global) {
            let U = S.pattern.toString().match(/[imuy]*$/)[0];
            S.pattern = RegExp(S.pattern.source, U + "g");
          }
          S = S.pattern || S;
          for (let U = n, ne = i; U < t2.length; ne += t2[U].length, ++U) {
            let Ie = t2[U];
            if (t2.length > e.length) return;
            if (Ie instanceof he) continue;
            if (me && U != t2.length - 1) {
              S.lastIndex = ne;
              var p = S.exec(e);
              if (!p) break;
              var c = p.index + (E ? p[1].length : 0), d = p.index + p[0].length, a = U, l = ne;
              for (let _ = t2.length; a < _ && (l < d || !t2[a].type && !t2[a - 1].greedy); ++a) l += t2[a].length, c >= l && (++U, ne = l);
              if (t2[U] instanceof he) continue;
              u = a - U, Ie = e.slice(ne, l), p.index -= ne;
            } else {
              S.lastIndex = 0;
              var p = S.exec(Ie), u = 1;
            }
            if (!p) {
              if (o) break;
              continue;
            }
            E && (ae = p[1] ? p[1].length : 0);
            var c = p.index + ae, p = p[0].slice(ae), d = c + p.length, f = Ie.slice(0, c), g = Ie.slice(d);
            let z = [U, u];
            f && (++U, ne += f.length, z.push(f));
            let dt = new he(h, C ? P.tokenize(p, C) : p, Bt, p, me);
            if (z.push(dt), g && z.push(g), Array.prototype.splice.apply(t2, z), u != 1 && P.matchGrammar(e, t2, r, U, ne, true, h), o) break;
          }
        }
      }
    }, "matchGrammar"), tokenize: /* @__PURE__ */ __name(function(e, t2) {
      let r = [e], n = t2.rest;
      if (n) {
        for (let i in n) t2[i] = n[i];
        delete t2.rest;
      }
      return P.matchGrammar(e, r, t2, 0, 0, false), r;
    }, "tokenize"), hooks: { all: {}, add: /* @__PURE__ */ __name(function(e, t2) {
      let r = P.hooks.all;
      r[e] = r[e] || [], r[e].push(t2);
    }, "add"), run: /* @__PURE__ */ __name(function(e, t2) {
      let r = P.hooks.all[e];
      if (!(!r || !r.length)) for (var n = 0, i; i = r[n++]; ) i(t2);
    }, "run") }, Token: he };
    P.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    P.languages.javascript = P.languages.extend("clike", { "class-name": [P.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    P.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    P.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: P.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: P.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: P.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: P.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    P.languages.markup && P.languages.markup.tag.addInlined("script", "javascript");
    P.languages.js = P.languages.javascript;
    P.languages.typescript = P.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    P.languages.ts = P.languages.typescript;
    function he(e, t2, r, n, i) {
      this.type = e, this.content = t2, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    __name(he, "he");
    he.stringify = function(e, t2) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
        return he.stringify(r, t2);
      }).join("") : gp(e.type)(e.content);
    };
    function gp(e) {
      return Ds[e] || mp;
    }
    __name(gp, "gp");
    function _s(e) {
      return hp(e, P.languages.javascript);
    }
    __name(_s, "_s");
    function hp(e, t2) {
      return P.tokenize(e, t2).map((n) => he.stringify(n)).join("");
    }
    __name(hp, "hp");
    var Fs = k(us());
    function Ls(e) {
      return (0, Fs.default)(e);
    }
    __name(Ls, "Ls");
    var cn = class e {
      static {
        __name(this, "e");
      }
      static read(t2) {
        let r;
        try {
          r = Ns.default.readFileSync(t2, "utf-8");
        } catch {
          return null;
        }
        return e.fromContent(r);
      }
      static fromContent(t2) {
        let r = t2.split(/\r?\n/);
        return new e(1, r);
      }
      constructor(t2, r) {
        this.firstLineNumber = t2, this.lines = r;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(t2, r) {
        if (t2 < this.firstLineNumber || t2 > this.lines.length + this.firstLineNumber) return this;
        let n = t2 - this.firstLineNumber, i = [...this.lines];
        return i[n] = r(i[n]), new e(this.firstLineNumber, i);
      }
      mapLines(t2) {
        return new e(this.firstLineNumber, this.lines.map((r, n) => t2(r, this.firstLineNumber + n)));
      }
      lineAt(t2) {
        return this.lines[t2 - this.firstLineNumber];
      }
      prependSymbolAt(t2, r) {
        return this.mapLines((n, i) => i === t2 ? `${r} ${n}` : `  ${n}`);
      }
      slice(t2, r) {
        let n = this.lines.slice(t2 - 1, r).join(`
`);
        return new e(t2, Ls(n).split(`
`));
      }
      highlight() {
        let t2 = _s(this.toString());
        return new e(this.firstLineNumber, t2.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var yp = { red: ce, gray: Gt, dim: Oe, bold: H, underline: X, highlightSource: /* @__PURE__ */ __name((e) => e.highlight(), "highlightSource") };
    var bp = { red: /* @__PURE__ */ __name((e) => e, "red"), gray: /* @__PURE__ */ __name((e) => e, "gray"), dim: /* @__PURE__ */ __name((e) => e, "dim"), bold: /* @__PURE__ */ __name((e) => e, "bold"), underline: /* @__PURE__ */ __name((e) => e, "underline"), highlightSource: /* @__PURE__ */ __name((e) => e, "highlightSource") };
    function Ep({ message: e, originalMethod: t2, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t2}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    __name(Ep, "Ep");
    function wp({ callsite: e, message: t2, originalMethod: r, isPanic: n, callArguments: i }, o) {
      let s = Ep({ message: t2, originalMethod: r, isPanic: n, callArguments: i });
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production") return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber) return s;
      let l = Math.max(1, a.lineNumber - 3), u = cn.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
      if (u && c) {
        let p = Pp(c), d = xp(c);
        if (!d) return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (g) => g.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((g, h) => o.gray(String(h).padStart(f)) + " " + g).mapLines((g) => o.dim(g)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
          let g = p + f + 1;
          g += 2, s.callArguments = (0, Ms.default)(i, g).slice(g);
        }
      }
      return s;
    }
    __name(wp, "wp");
    function xp(e) {
      let t2 = Object.keys(Je.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t2})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    __name(xp, "xp");
    function Pp(e) {
      let t2 = 0;
      for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== " ") return t2;
        t2++;
      }
      return t2;
    }
    __name(Pp, "Pp");
    function vp({ functionName: e, location: t2, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t2 ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t2 && a.push(s.underline(Tp(t2))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    __name(vp, "vp");
    function Tp(e) {
      let t2 = [e.fileName];
      return e.lineNumber && t2.push(String(e.lineNumber)), e.columnNumber && t2.push(String(e.columnNumber)), t2.join(":");
    }
    __name(Tp, "Tp");
    function Tt(e) {
      let t2 = e.showColors ? yp : bp, r;
      return r = wp(e, t2), vp(r, t2);
    }
    __name(Tt, "Tt");
    var Gs = k(Ai());
    function Vs(e, t2, r) {
      let n = Bs(e), i = Rp(n), o = Sp(i);
      o ? pn(o, t2, r) : t2.addErrorMessage(() => "Unknown error");
    }
    __name(Vs, "Vs");
    function Bs(e) {
      return e.errors.flatMap((t2) => t2.kind === "Union" ? Bs(t2) : [t2]);
    }
    __name(Bs, "Bs");
    function Rp(e) {
      let t2 = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t2.get(i);
        o ? t2.set(i, { ...n, argument: { ...n.argument, typeNames: Cp(o.argument.typeNames, n.argument.typeNames) } }) : t2.set(i, n);
      }
      return r.push(...t2.values()), r;
    }
    __name(Rp, "Rp");
    function Cp(e, t2) {
      return [...new Set(e.concat(t2))];
    }
    __name(Cp, "Cp");
    function Sp(e) {
      return xi(e, (t2, r) => {
        let n = qs(t2), i = qs(r);
        return n !== i ? n - i : js(t2) - js(r);
      });
    }
    __name(Sp, "Sp");
    function qs(e) {
      let t2 = 0;
      return Array.isArray(e.selectionPath) && (t2 += e.selectionPath.length), Array.isArray(e.argumentPath) && (t2 += e.argumentPath.length), t2;
    }
    __name(qs, "qs");
    function js(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    __name(js, "js");
    var ue = class {
      static {
        __name(this, "ue");
      }
      constructor(t2, r) {
        this.name = t2;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t2) {
        let { colors: { green: r } } = t2.context;
        t2.addMarginSymbol(r(this.isRequired ? "+" : "?")), t2.write(r(this.name)), this.isRequired || t2.write(r("?")), t2.write(r(": ")), typeof this.value == "string" ? t2.write(r(this.value)) : t2.write(this.value);
      }
    };
    var Rt = class {
      static {
        __name(this, "Rt");
      }
      constructor(t2 = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t2;
      }
      write(t2) {
        return typeof t2 == "string" ? this.currentLine += t2 : t2.write(this), this;
      }
      writeJoined(t2, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t2);
        return this;
      }
      writeLine(t2) {
        return this.write(t2).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t2 = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t2?.(), this;
      }
      withIndent(t2) {
        return this.indent(), t2(this), this.unindent(), this;
      }
      afterNextNewline(t2) {
        return this.afterNextNewLineCallback = t2, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t2) {
        return this.marginSymbol = t2, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t2 = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t2.slice(1) : t2;
      }
    };
    var dn = class {
      static {
        __name(this, "dn");
      }
      constructor(t2) {
        this.value = t2;
      }
      write(t2) {
        t2.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    var mn = /* @__PURE__ */ __name((e) => e, "mn");
    var fn = { bold: mn, red: mn, green: mn, dim: mn, enabled: false };
    var Us = { bold: H, red: ce, green: qe, dim: Oe, enabled: true };
    var Ct = { write(e) {
      e.writeLine(",");
    } };
    var Pe = class {
      static {
        __name(this, "Pe");
      }
      constructor(t2) {
        this.contents = t2;
        this.isUnderlined = false;
        this.color = (t3) => t3;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t2) {
        return this.color = t2, this;
      }
      write(t2) {
        let r = t2.getCurrentLineLength();
        t2.write(this.color(this.contents)), this.isUnderlined && t2.afterNextNewline(() => {
          t2.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var Ye = class {
      static {
        __name(this, "Ye");
      }
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var St = class extends Ye {
      static {
        __name(this, "St");
      }
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new dn(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new Pe("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(Ct, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var At = class e extends Ye {
      static {
        __name(this, "e");
      }
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o) return;
        let s = o;
        for (let a of i) {
          let l;
          if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof St && (l = s.value.getField(Number(a))), !l) return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(r) {
        return r.length === 0 ? this : this.getDeepField(r)?.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        return this.getField(r)?.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof e)) return;
          let o = n.getSubSelectionValue(i);
          if (!o) return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n) return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e)) return;
          let a = s.getSelectionParent();
          if (!a) return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select")?.value.asObject();
        if (r) return { kind: "select", value: r };
        let n = this.getField("include")?.value.asObject();
        if (n) return { kind: "include", value: n };
      }
      getSubSelectionValue(r) {
        return this.getSelectionParent()?.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      asObject() {
        return this;
      }
      writeEmpty(r) {
        let n = new Pe("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(Ct, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var W = class extends Ye {
      static {
        __name(this, "W");
      }
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new Pe(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    };
    var nr = class {
      static {
        __name(this, "nr");
      }
      constructor() {
        this.fields = [];
      }
      addField(t2, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t2}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t2) {
        let { colors: { green: r } } = t2.context;
        t2.writeLine(r("{")).withIndent(() => {
          t2.writeJoined(Ct, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function pn(e, t2, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          Ip(e, t2);
          break;
        case "IncludeOnScalar":
          Op(e, t2);
          break;
        case "EmptySelection":
          kp(e, t2, r);
          break;
        case "UnknownSelectionField":
          Lp(e, t2);
          break;
        case "InvalidSelectionValue":
          Np(e, t2);
          break;
        case "UnknownArgument":
          Mp(e, t2);
          break;
        case "UnknownInputField":
          $p(e, t2);
          break;
        case "RequiredArgumentMissing":
          qp(e, t2);
          break;
        case "InvalidArgumentType":
          jp(e, t2);
          break;
        case "InvalidArgumentValue":
          Vp(e, t2);
          break;
        case "ValueTooLarge":
          Bp(e, t2);
          break;
        case "SomeFieldsMissing":
          Up(e, t2);
          break;
        case "TooManyFieldsGiven":
          Gp(e, t2);
          break;
        case "Union":
          Vs(e, t2, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    __name(pn, "pn");
    function Ip(e, t2) {
      let r = t2.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t2.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(Ip, "Ip");
    function Op(e, t2) {
      let [r, n] = ir(e.selectionPath), i = e.outputType, o = t2.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new ue(s.name, "true"));
      t2.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${or(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    __name(Op, "Op");
    function kp(e, t2, r) {
      let n = t2.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          Dp(e, t2, i);
          return;
        }
        if (n.hasField("select")) {
          _p(e, t2);
          return;
        }
      }
      if (r?.[xt(e.outputType.name)]) {
        Fp(e, t2);
        return;
      }
      t2.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    __name(kp, "kp");
    function Dp(e, t2, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields) r.addSuggestion(new ue(n.name, "false"));
      t2.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(Dp, "Dp");
    function _p(e, t2) {
      let r = e.outputType, n = t2.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), Ws(n, r)), t2.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${or(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(_p, "_p");
    function Fp(e, t2) {
      let r = new nr();
      for (let i of e.outputType.fields) i.isRelation || r.addField(i.name, "false");
      let n = new ue("omit", r).makeRequired();
      if (e.selectionPath.length === 0) t2.arguments.addSuggestion(n);
      else {
        let [i, o] = ir(e.selectionPath), a = t2.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let l = a?.value.asObject() ?? new At();
          l.addSuggestion(n), a.value = l;
        }
      }
      t2.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(Fp, "Fp");
    function Lp(e, t2) {
      let r = Hs(e.selectionPath, t2);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            Ws(n, e.outputType);
            break;
          case "include":
            Qp(n, e.outputType);
            break;
          case "omit":
            Jp(n, e.outputType);
            break;
        }
      }
      t2.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(or(n)), i.join(" ");
      });
    }
    __name(Lp, "Lp");
    function Np(e, t2) {
      let r = Hs(e.selectionPath, t2);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t2.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    __name(Np, "Np");
    function Mp(e, t2) {
      let r = e.argumentPath[0], n = t2.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), Wp(n, e.arguments)), t2.addErrorMessage((i) => Qs(i, r, e.arguments.map((o) => o.name)));
    }
    __name(Mp, "Mp");
    function $p(e, t2) {
      let [r, n] = ir(e.argumentPath), i = t2.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && Ks(o, e.inputType);
      }
      t2.addErrorMessage((o) => Qs(o, n, e.inputType.fields.map((s) => s.name)));
    }
    __name($p, "$p");
    function Qs(e, t2, r) {
      let n = [`Unknown argument \`${e.red(t2)}\`.`], i = Kp(t2, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(or(e)), n.join(" ");
    }
    __name(Qs, "Qs");
    function qp(e, t2) {
      let r;
      t2.addErrorMessage((l) => r?.value instanceof W && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t2.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n) return;
      let [i, o] = ir(e.argumentPath), s = new nr(), a = n.getDeepFieldValue(i)?.asObject();
      if (a) if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields) s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new ue(o, s).makeRequired());
      } else {
        let l = e.inputTypes.map(Js).join(" | ");
        a.addSuggestion(new ue(o, l).makeRequired());
      }
    }
    __name(qp, "qp");
    function Js(e) {
      return e.kind === "list" ? `${Js(e.elementType)}[]` : e.name;
    }
    __name(Js, "Js");
    function jp(e, t2) {
      let r = e.argument.name, n = t2.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t2.addErrorMessage((i) => {
        let o = gn("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    __name(jp, "jp");
    function Vp(e, t2) {
      let r = e.argument.name, n = t2.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t2.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = gn("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(Vp, "Vp");
    function Bp(e, t2) {
      let r = e.argument.name, n = t2.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof W && (i = s.text);
      }
      t2.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    __name(Bp, "Bp");
    function Up(e, t2) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t2.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && Ks(i, e.inputType);
      }
      t2.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${gn("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(or(i)), o.join(" ");
      });
    }
    __name(Up, "Up");
    function Gp(e, t2) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t2.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t2.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${gn("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(Gp, "Gp");
    function Ws(e, t2) {
      for (let r of t2.fields) e.hasField(r.name) || e.addSuggestion(new ue(r.name, "true"));
    }
    __name(Ws, "Ws");
    function Qp(e, t2) {
      for (let r of t2.fields) r.isRelation && !e.hasField(r.name) && e.addSuggestion(new ue(r.name, "true"));
    }
    __name(Qp, "Qp");
    function Jp(e, t2) {
      for (let r of t2.fields) !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new ue(r.name, "true"));
    }
    __name(Jp, "Jp");
    function Wp(e, t2) {
      for (let r of t2) e.hasField(r.name) || e.addSuggestion(new ue(r.name, r.typeNames.join(" | ")));
    }
    __name(Wp, "Wp");
    function Hs(e, t2) {
      let [r, n] = ir(e), i = t2.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i) return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
      return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(Hs, "Hs");
    function Ks(e, t2) {
      if (t2.kind === "object") for (let r of t2.fields) e.hasField(r.name) || e.addSuggestion(new ue(r.name, r.typeNames.join(" | ")));
    }
    __name(Ks, "Ks");
    function ir(e) {
      let t2 = [...e], r = t2.pop();
      if (!r) throw new Error("unexpected empty path");
      return [t2, r];
    }
    __name(ir, "ir");
    function or({ green: e, enabled: t2 }) {
      return "Available options are " + (t2 ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    __name(or, "or");
    function gn(e, t2) {
      if (t2.length === 1) return t2[0];
      let r = [...t2], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    __name(gn, "gn");
    var Hp = 3;
    function Kp(e, t2) {
      let r = 1 / 0, n;
      for (let i of t2) {
        let o = (0, Gs.default)(e, i);
        o > Hp || o < r && (r = o, n = i);
      }
      return n;
    }
    __name(Kp, "Kp");
    function zs(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(zs, "zs");
    var sr = class {
      static {
        __name(this, "sr");
      }
      constructor(t2, r, n, i, o) {
        this.modelName = t2, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t2 = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t2}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function It(e) {
      return e instanceof sr;
    }
    __name(It, "It");
    var hn = Symbol();
    var Ii = /* @__PURE__ */ new WeakMap();
    var Me = class {
      static {
        __name(this, "Me");
      }
      constructor(t2) {
        t2 === hn ? Ii.set(this, `Prisma.${this._getName()}`) : Ii.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Ii.get(this);
      }
    };
    var ar = class extends Me {
      static {
        __name(this, "ar");
      }
      _getNamespace() {
        return "NullTypes";
      }
    };
    var lr = class extends ar {
      static {
        __name(this, "lr");
      }
    };
    Oi(lr, "DbNull");
    var ur = class extends ar {
      static {
        __name(this, "ur");
      }
    };
    Oi(ur, "JsonNull");
    var cr = class extends ar {
      static {
        __name(this, "cr");
      }
    };
    Oi(cr, "AnyNull");
    var yn = { classes: { DbNull: lr, JsonNull: ur, AnyNull: cr }, instances: { DbNull: new lr(hn), JsonNull: new ur(hn), AnyNull: new cr(hn) } };
    function Oi(e, t2) {
      Object.defineProperty(e, "name", { value: t2, configurable: true });
    }
    __name(Oi, "Oi");
    var Ys = ": ";
    var bn = class {
      static {
        __name(this, "bn");
      }
      constructor(t2, r) {
        this.name = t2;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Ys.length;
      }
      write(t2) {
        let r = new Pe(this.name);
        this.hasError && r.underline().setColor(t2.context.colors.red), t2.write(r).write(Ys).write(this.value);
      }
    };
    var ki = class {
      static {
        __name(this, "ki");
      }
      constructor(t2) {
        this.errorMessages = [];
        this.arguments = t2;
      }
      write(t2) {
        t2.write(this.arguments);
      }
      addErrorMessage(t2) {
        this.errorMessages.push(t2);
      }
      renderAllMessages(t2) {
        return this.errorMessages.map((r) => r(t2)).join(`
`);
      }
    };
    function Ot(e) {
      return new ki(Zs(e));
    }
    __name(Ot, "Ot");
    function Zs(e) {
      let t2 = new At();
      for (let [r, n] of Object.entries(e)) {
        let i = new bn(r, Xs(n));
        t2.addField(i);
      }
      return t2;
    }
    __name(Zs, "Zs");
    function Xs(e) {
      if (typeof e == "string") return new W(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new W(String(e));
      if (typeof e == "bigint") return new W(`${e}n`);
      if (e === null) return new W("null");
      if (e === void 0) return new W("undefined");
      if (vt(e)) return new W(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new W(`Buffer.alloc(${e.byteLength})`) : new W(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t2 = ln(e) ? e.toISOString() : "Invalid Date";
        return new W(`new Date("${t2}")`);
      }
      return e instanceof Me ? new W(`Prisma.${e._getName()}`) : It(e) ? new W(`prisma.${zs(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? zp(e) : typeof e == "object" ? Zs(e) : new W(Object.prototype.toString.call(e));
    }
    __name(Xs, "Xs");
    function zp(e) {
      let t2 = new St();
      for (let r of e) t2.addItem(Xs(r));
      return t2;
    }
    __name(zp, "zp");
    function En(e, t2) {
      let r = t2 === "pretty" ? Us : fn, n = e.renderAllMessages(r), i = new Rt(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    __name(En, "En");
    function wn({ args: e, errors: t2, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = Ot(e);
      for (let p of t2) pn(p, a, s);
      let { message: l, args: u } = En(a, r), c = Tt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new J(c, { clientVersion: o });
    }
    __name(wn, "wn");
    var ve = class {
      static {
        __name(this, "ve");
      }
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t2) {
        return this._map.get(t2)?.value;
      }
      set(t2, r) {
        this._map.set(t2, { value: r });
      }
      getOrCreate(t2, r) {
        let n = this._map.get(t2);
        if (n) return n.value;
        let i = r();
        return this.set(t2, i), i;
      }
    };
    function pr(e) {
      let t2;
      return { get() {
        return t2 || (t2 = { value: e() }), t2.value;
      } };
    }
    __name(pr, "pr");
    function Te(e) {
      return e.replace(/^./, (t2) => t2.toLowerCase());
    }
    __name(Te, "Te");
    function ta(e, t2, r) {
      let n = Te(r);
      return !t2.result || !(t2.result.$allModels || t2.result[n]) ? e : Yp({ ...e, ...ea(t2.name, e, t2.result.$allModels), ...ea(t2.name, e, t2.result[n]) });
    }
    __name(ta, "ta");
    function Yp(e) {
      let t2 = new ve(), r = /* @__PURE__ */ __name((n, i) => t2.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])), "r");
      return yt(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(Yp, "Yp");
    function ea(e, t2, r) {
      return r ? yt(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Zp(t2, o, i) })) : {};
    }
    __name(ea, "ea");
    function Zp(e, t2, r) {
      let n = e?.[t2]?.compute;
      return n ? (i) => r({ ...i, [t2]: n(i) }) : r;
    }
    __name(Zp, "Zp");
    function ra(e, t2) {
      if (!t2) return e;
      let r = { ...e };
      for (let n of Object.values(t2)) if (e[n.name]) for (let i of n.needs) r[i] = true;
      return r;
    }
    __name(ra, "ra");
    function na(e, t2) {
      if (!t2) return e;
      let r = { ...e };
      for (let n of Object.values(t2)) if (!e[n.name]) for (let i of n.needs) delete r[i];
      return r;
    }
    __name(na, "na");
    var xn = class {
      static {
        __name(this, "xn");
      }
      constructor(t2, r) {
        this.extension = t2;
        this.previous = r;
        this.computedFieldsCache = new ve();
        this.modelExtensionsCache = new ve();
        this.queryCallbacksCache = new ve();
        this.clientExtensions = pr(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
        this.batchCallbacks = pr(() => {
          let t3 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
          return r2 ? t3.concat(r2) : t3;
        });
      }
      getAllComputedFields(t2) {
        return this.computedFieldsCache.getOrCreate(t2, () => ta(this.previous?.getAllComputedFields(t2), this.extension, t2));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t2) {
        return this.modelExtensionsCache.getOrCreate(t2, () => {
          let r = Te(t2);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t2) : { ...this.previous?.getAllModelExtensions(t2), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t2, r) {
        return this.queryCallbacksCache.getOrCreate(`${t2}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t2, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t2] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t2] !== void 0 && (o[t2][r] !== void 0 && i.push(o[t2][r]), o[t2].$allOperations !== void 0 && i.push(o[t2].$allOperations)), t2 !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var kt = class e {
      static {
        __name(this, "e");
      }
      constructor(t2) {
        this.head = t2;
      }
      static empty() {
        return new e();
      }
      static single(t2) {
        return new e(new xn(t2));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t2) {
        return new e(new xn(t2, this.head));
      }
      getAllComputedFields(t2) {
        return this.head?.getAllComputedFields(t2);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t2) {
        return this.head?.getAllModelExtensions(t2);
      }
      getAllQueryCallbacks(t2, r) {
        return this.head?.getAllQueryCallbacks(t2, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    var ia = Symbol();
    var dr = class {
      static {
        __name(this, "dr");
      }
      constructor(t2) {
        if (t2 !== ia) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t2) {
        return t2 === void 0 ? Pn : t2;
      }
    };
    var Pn = new dr(ia);
    function Re(e) {
      return e instanceof dr;
    }
    __name(Re, "Re");
    var Xp = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var oa = "explicitly `undefined` values are not allowed";
    function vn({ modelName: e, action: t2, args: r, runtimeDataModel: n, extensions: i = kt.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) {
      let p = new Di({ runtimeDataModel: n, modelName: e, action: t2, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c });
      return { modelName: e, action: Xp[t2], query: mr(r, p) };
    }
    __name(vn, "vn");
    function mr({ select: e, include: t2, ...r } = {}, n) {
      let i;
      return n.isPreviewFeatureOn("omitApi") && (i = r.omit, delete r.omit), { arguments: aa(r, n), selection: ed(e, t2, i, n) };
    }
    __name(mr, "mr");
    function ed(e, t2, r, n) {
      return e ? (t2 ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.isPreviewFeatureOn("omitApi") && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), id(e, n)) : td(n, t2, r);
    }
    __name(ed, "ed");
    function td(e, t2, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t2 && rd(n, t2, e), e.isPreviewFeatureOn("omitApi") && nd(n, r, e), n;
    }
    __name(td, "td");
    function rd(e, t2, r) {
      for (let [n, i] of Object.entries(t2)) {
        if (Re(i)) continue;
        let o = r.nestSelection(n);
        if (_i(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = mr(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = mr(i, o);
      }
    }
    __name(rd, "rd");
    function nd(e, t2, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t2 }, o = na(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (Re(a)) continue;
        _i(a, r.nestSelection(s));
        let l = r.findField(s);
        n?.[s] && !l || (e[s] = !a);
      }
    }
    __name(nd, "nd");
    function id(e, t2) {
      let r = {}, n = t2.getComputedFields(), i = ra(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (Re(s)) continue;
        let a = t2.nestSelection(o);
        _i(s, a);
        let l = t2.findField(o);
        if (!(n?.[o] && !l)) {
          if (s === false || s === void 0 || Re(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            l?.kind === "object" ? r[o] = mr({}, a) : r[o] = true;
            continue;
          }
          r[o] = mr(s, a);
        }
      }
      return r;
    }
    __name(id, "id");
    function sa(e, t2) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (Pt(e)) {
        if (ln(e)) return { $type: "DateTime", value: e.toISOString() };
        t2.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t2.getSelectionPath(), argumentPath: t2.getArgumentPath(), argument: { name: t2.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (It(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return od(e, t2);
      if (ArrayBuffer.isView(e)) return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
      if (sd(e)) return e.values;
      if (vt(e)) return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Me) {
        if (e !== yn.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (ad(e)) return e.toJSON();
      if (typeof e == "object") return aa(e, t2);
      t2.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t2.getSelectionPath(), argumentPath: t2.getArgumentPath(), argument: { name: t2.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(sa, "sa");
    function aa(e, t2) {
      if (e.$type) return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t2.nestArgument(n);
        Re(i) || (i !== void 0 ? r[n] = sa(i, o) : t2.isPreviewFeatureOn("strictUndefinedChecks") && t2.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t2.getSelectionPath(), argument: { name: t2.getArgumentName(), typeNames: [] }, underlyingError: oa }));
      }
      return r;
    }
    __name(aa, "aa");
    function od(e, t2) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t2.nestArgument(String(n)), o = e[n];
        if (o === void 0 || Re(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t2.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t2.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(sa(o, i));
      }
      return r;
    }
    __name(od, "od");
    function sd(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    __name(sd, "sd");
    function ad(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    __name(ad, "ad");
    function _i(e, t2) {
      e === void 0 && t2.isPreviewFeatureOn("strictUndefinedChecks") && t2.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t2.getSelectionPath(), underlyingError: oa });
    }
    __name(_i, "_i");
    var Di = class e {
      static {
        __name(this, "e");
      }
      constructor(t2) {
        this.params = t2;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      throwValidationError(t2) {
        wn({ errors: [t2], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((t2) => ({ name: t2.name, typeName: "boolean", isRelation: t2.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t2) {
        return this.params.previewFeatures.includes(t2);
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t2) {
        return this.modelOrType?.fields.find((r) => r.name === t2);
      }
      nestSelection(t2) {
        let r = this.findField(t2), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t2) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[xt(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            Fe(this.params.action, "Unknown action");
        }
      }
      nestArgument(t2) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t2) });
      }
    };
    var Dt = class {
      static {
        __name(this, "Dt");
      }
      constructor(t2) {
        this._engine = t2;
      }
      prometheus(t2) {
        return this._engine.metrics({ format: "prometheus", ...t2 });
      }
      json(t2) {
        return this._engine.metrics({ format: "json", ...t2 });
      }
    };
    function la(e) {
      return { models: Fi(e.models), enums: Fi(e.enums), types: Fi(e.types) };
    }
    __name(la, "la");
    function Fi(e) {
      let t2 = {};
      for (let { name: r, ...n } of e) t2[r] = n;
      return t2;
    }
    __name(Fi, "Fi");
    function ua(e, t2) {
      let r = pr(() => ld(t2));
      Object.defineProperty(e, "dmmf", { get: /* @__PURE__ */ __name(() => r.get(), "get") });
    }
    __name(ua, "ua");
    function ld(e) {
      return { datamodel: { models: Li(e.models), enums: Li(e.enums), types: Li(e.types) } };
    }
    __name(ld, "ld");
    function Li(e) {
      return Object.entries(e).map(([t2, r]) => ({ name: t2, ...r }));
    }
    __name(Li, "Li");
    var Ni = /* @__PURE__ */ new WeakMap();
    var Tn = "$$PrismaTypedSql";
    var Mi = class {
      static {
        __name(this, "Mi");
      }
      constructor(t2, r) {
        Ni.set(this, { sql: t2, values: r }), Object.defineProperty(this, Tn, { value: Tn });
      }
      get sql() {
        return Ni.get(this).sql;
      }
      get values() {
        return Ni.get(this).values;
      }
    };
    function ca(e) {
      return (...t2) => new Mi(e, t2);
    }
    __name(ca, "ca");
    function pa(e) {
      return e != null && e[Tn] === Tn;
    }
    __name(pa, "pa");
    function fr(e) {
      return { ok: false, error: e, map() {
        return fr(e);
      }, flatMap() {
        return fr(e);
      } };
    }
    __name(fr, "fr");
    var $i = class {
      static {
        __name(this, "$i");
      }
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(t2) {
        return this.registeredErrors[t2];
      }
      registerNewError(t2) {
        let r = 0;
        for (; this.registeredErrors[r] !== void 0; ) r++;
        return this.registeredErrors[r] = { error: t2 }, r;
      }
    };
    var qi = /* @__PURE__ */ __name((e) => {
      let t2 = new $i(), r = Ce(t2, e.transactionContext.bind(e)), n = { adapterName: e.adapterName, errorRegistry: t2, queryRaw: Ce(t2, e.queryRaw.bind(e)), executeRaw: Ce(t2, e.executeRaw.bind(e)), provider: e.provider, transactionContext: /* @__PURE__ */ __name(async (...i) => (await r(...i)).map((s) => ud(t2, s)), "transactionContext") };
      return e.getConnectionInfo && (n.getConnectionInfo = pd(t2, e.getConnectionInfo.bind(e))), n;
    }, "qi");
    var ud = /* @__PURE__ */ __name((e, t2) => {
      let r = Ce(e, t2.startTransaction.bind(t2));
      return { adapterName: t2.adapterName, provider: t2.provider, queryRaw: Ce(e, t2.queryRaw.bind(t2)), executeRaw: Ce(e, t2.executeRaw.bind(t2)), startTransaction: /* @__PURE__ */ __name(async (...n) => (await r(...n)).map((o) => cd(e, o)), "startTransaction") };
    }, "ud");
    var cd = /* @__PURE__ */ __name((e, t2) => ({ adapterName: t2.adapterName, provider: t2.provider, options: t2.options, queryRaw: Ce(e, t2.queryRaw.bind(t2)), executeRaw: Ce(e, t2.executeRaw.bind(t2)), commit: Ce(e, t2.commit.bind(t2)), rollback: Ce(e, t2.rollback.bind(t2)) }), "cd");
    function Ce(e, t2) {
      return async (...r) => {
        try {
          return await t2(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return fr({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(Ce, "Ce");
    function pd(e, t2) {
      return (...r) => {
        try {
          return t2(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return fr({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(pd, "pd");
    var Wl = k(oi());
    var Hl = __require("async_hooks");
    var Kl = __require("events");
    var zl = k(__require("fs"));
    var Fr = k(__require("path"));
    var oe = class e {
      static {
        __name(this, "e");
      }
      constructor(t2, r) {
        if (t2.length - 1 !== r.length) throw t2.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t2.length} strings to have ${t2.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t2[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t2[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; ) this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let t2 = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t2; ) n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t2 = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t2; ) n += `:${r}${this.strings[r++]}`;
        return n;
      }
      get text() {
        let t2 = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t2; ) n += `$${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    function da(e, t2 = ",", r = "", n = "") {
      if (e.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new oe([r, ...Array(e.length - 1).fill(t2), n], e);
    }
    __name(da, "da");
    function ji(e) {
      return new oe([e], []);
    }
    __name(ji, "ji");
    var ma = ji("");
    function Vi(e, ...t2) {
      return new oe(e, t2);
    }
    __name(Vi, "Vi");
    function gr(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t2) {
        return e[t2];
      } };
    }
    __name(gr, "gr");
    function re(e, t2) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t2();
      } };
    }
    __name(re, "re");
    function ot(e) {
      let t2 = new ve();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t2.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    __name(ot, "ot");
    var Rn = { enumerable: true, configurable: true, writable: true };
    function Cn(e) {
      let t2 = new Set(e);
      return { getOwnPropertyDescriptor: /* @__PURE__ */ __name(() => Rn, "getOwnPropertyDescriptor"), has: /* @__PURE__ */ __name((r, n) => t2.has(n), "has"), set: /* @__PURE__ */ __name((r, n, i) => t2.add(n) && Reflect.set(r, n, i), "set"), ownKeys: /* @__PURE__ */ __name(() => [...t2], "ownKeys") };
    }
    __name(Cn, "Cn");
    var fa = Symbol.for("nodejs.util.inspect.custom");
    function Se(e, t2) {
      let r = dd(t2), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s)) return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = ga(Reflect.ownKeys(o), r), a = ga(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? { ...Rn, ...l?.getPropertyDescriptor(s) } : Rn : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[fa] = function() {
        let o = { ...this };
        return delete o[fa], o;
      }, i;
    }
    __name(Se, "Se");
    function dd(e) {
      let t2 = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n) t2.set(i, r);
      }
      return t2;
    }
    __name(dd, "dd");
    function ga(e, t2) {
      return e.filter((r) => t2.get(r)?.has?.(r) ?? true);
    }
    __name(ga, "ga");
    function _t(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name(_t, "_t");
    function Ft(e, t2) {
      return { batch: e, transaction: t2?.kind === "batch" ? { isolationLevel: t2.options.isolationLevel } : void 0 };
    }
    __name(Ft, "Ft");
    function ha(e) {
      if (e === void 0) return "";
      let t2 = Ot(e);
      return new Rt(0, { colors: fn }).write(t2).toString();
    }
    __name(ha, "ha");
    var md = "P2037";
    function st({ error: e, user_facing_error: t2 }, r, n) {
      return t2.error_code ? new V(fd(t2, n), { code: t2.error_code, clientVersion: r, meta: t2.meta, batchRequestIdx: t2.batch_request_idx }) : new B(e, { clientVersion: r, batchRequestIdx: t2.batch_request_idx });
    }
    __name(st, "st");
    function fd(e, t2) {
      let r = e.message;
      return (t2 === "postgresql" || t2 === "postgres" || t2 === "mysql") && e.error_code === md && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
    }
    __name(fd, "fd");
    var hr = "<unknown>";
    function ya(e) {
      var t2 = e.split(`
`);
      return t2.reduce(function(r, n) {
        var i = yd(n) || Ed(n) || Pd(n) || Cd(n) || Td(n);
        return i && r.push(i), r;
      }, []);
    }
    __name(ya, "ya");
    var gd = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var hd = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function yd(e) {
      var t2 = gd.exec(e);
      if (!t2) return null;
      var r = t2[2] && t2[2].indexOf("native") === 0, n = t2[2] && t2[2].indexOf("eval") === 0, i = hd.exec(t2[2]);
      return n && i != null && (t2[2] = i[1], t2[3] = i[2], t2[4] = i[3]), { file: r ? null : t2[2], methodName: t2[1] || hr, arguments: r ? [t2[2]] : [], lineNumber: t2[3] ? +t2[3] : null, column: t2[4] ? +t2[4] : null };
    }
    __name(yd, "yd");
    var bd = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function Ed(e) {
      var t2 = bd.exec(e);
      return t2 ? { file: t2[2], methodName: t2[1] || hr, arguments: [], lineNumber: +t2[3], column: t2[4] ? +t2[4] : null } : null;
    }
    __name(Ed, "Ed");
    var wd = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var xd = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function Pd(e) {
      var t2 = wd.exec(e);
      if (!t2) return null;
      var r = t2[3] && t2[3].indexOf(" > eval") > -1, n = xd.exec(t2[3]);
      return r && n != null && (t2[3] = n[1], t2[4] = n[2], t2[5] = null), { file: t2[3], methodName: t2[1] || hr, arguments: t2[2] ? t2[2].split(",") : [], lineNumber: t2[4] ? +t2[4] : null, column: t2[5] ? +t2[5] : null };
    }
    __name(Pd, "Pd");
    var vd = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function Td(e) {
      var t2 = vd.exec(e);
      return t2 ? { file: t2[3], methodName: t2[1] || hr, arguments: [], lineNumber: +t2[4], column: t2[5] ? +t2[5] : null } : null;
    }
    __name(Td, "Td");
    var Rd = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function Cd(e) {
      var t2 = Rd.exec(e);
      return t2 ? { file: t2[2], methodName: t2[1] || hr, arguments: [], lineNumber: +t2[3], column: t2[4] ? +t2[4] : null } : null;
    }
    __name(Cd, "Cd");
    var Bi = class {
      static {
        __name(this, "Bi");
      }
      getLocation() {
        return null;
      }
    };
    var Ui = class {
      static {
        __name(this, "Ui");
      }
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let t2 = this._error.stack;
        if (!t2) return null;
        let n = ya(t2).find((i) => {
          if (!i.file) return false;
          let o = mi(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function Ze(e) {
      return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new Bi() : new Ui();
    }
    __name(Ze, "Ze");
    var ba = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function Lt(e = {}) {
      let t2 = Ad(e);
      return Object.entries(t2).reduce((n, [i, o]) => (ba[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(Lt, "Lt");
    function Ad(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    __name(Ad, "Ad");
    function Sn(e = {}) {
      return (t2) => (typeof e._count == "boolean" && (t2._count = t2._count._all), t2);
    }
    __name(Sn, "Sn");
    function Ea(e, t2) {
      let r = Sn(e);
      return t2({ action: "aggregate", unpacker: r, argsMapper: Lt })(e);
    }
    __name(Ea, "Ea");
    function Id(e = {}) {
      let { select: t2, ...r } = e;
      return typeof t2 == "object" ? Lt({ ...r, _count: t2 }) : Lt({ ...r, _count: { _all: true } });
    }
    __name(Id, "Id");
    function Od(e = {}) {
      return typeof e.select == "object" ? (t2) => Sn(e)(t2)._count : (t2) => Sn(e)(t2)._count._all;
    }
    __name(Od, "Od");
    function wa(e, t2) {
      return t2({ action: "count", unpacker: Od(e), argsMapper: Id })(e);
    }
    __name(wa, "wa");
    function kd(e = {}) {
      let t2 = Lt(e);
      if (Array.isArray(t2.by)) for (let r of t2.by) typeof r == "string" && (t2.select[r] = true);
      else typeof t2.by == "string" && (t2.select[t2.by] = true);
      return t2;
    }
    __name(kd, "kd");
    function Dd(e = {}) {
      return (t2) => (typeof e?._count == "boolean" && t2.forEach((r) => {
        r._count = r._count._all;
      }), t2);
    }
    __name(Dd, "Dd");
    function xa(e, t2) {
      return t2({ action: "groupBy", unpacker: Dd(e), argsMapper: kd })(e);
    }
    __name(xa, "xa");
    function Pa(e, t2, r) {
      if (t2 === "aggregate") return (n) => Ea(n, r);
      if (t2 === "count") return (n) => wa(n, r);
      if (t2 === "groupBy") return (n) => xa(n, r);
    }
    __name(Pa, "Pa");
    function va(e, t2) {
      let r = t2.fields.filter((i) => !i.relationName), n = wi(r, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new sr(e, o, s.type, s.isList, s.kind === "enum");
      }, ...Cn(Object.keys(n)) });
    }
    __name(va, "va");
    var Ta = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e.split("."), "Ta");
    var Gi = /* @__PURE__ */ __name((e, t2) => Ta(t2).reduce((r, n) => r && r[n], e), "Gi");
    var Ra = /* @__PURE__ */ __name((e, t2, r) => Ta(t2).reduceRight((n, i, o, s) => Object.assign({}, Gi(e, s.slice(0, o)), { [i]: n }), r), "Ra");
    function _d(e, t2) {
      return e === void 0 || t2 === void 0 ? [] : [...t2, "select", e];
    }
    __name(_d, "_d");
    function Fd(e, t2, r) {
      return t2 === void 0 ? e ?? {} : Ra(t2, r, e || true);
    }
    __name(Fd, "Fd");
    function Qi(e, t2, r, n, i, o) {
      let a = e._runtimeDataModel.models[t2].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
      return (l) => {
        let u = Ze(e._errorFormat), c = _d(n, i), p = Fd(l, o, c), d = r({ dataPath: c, callsite: u })(p), f = Ld(e, t2);
        return new Proxy(d, { get(g, h) {
          if (!f.includes(h)) return g[h];
          let T = [a[h].type, r, h], S = [c, p];
          return Qi(e, ...T, ...S);
        }, ...Cn([...f, ...Object.getOwnPropertyNames(d)]) });
      };
    }
    __name(Qi, "Qi");
    function Ld(e, t2) {
      return e._runtimeDataModel.models[t2].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    __name(Ld, "Ld");
    function Ca(e, t2, r, n) {
      return e === Je.ModelAction.findFirstOrThrow || e === Je.ModelAction.findUniqueOrThrow ? Nd(t2, r, n) : n;
    }
    __name(Ca, "Ca");
    function Nd(e, t2, r) {
      return async (n) => {
        if ("rejectOnNotFound" in n.args) {
          let o = Tt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new J(o, { clientVersion: t2 });
        }
        return await r(n).catch((o) => {
          throw o instanceof V && o.code === "P2025" ? new Le(`No ${e} found`, t2) : o;
        });
      };
    }
    __name(Nd, "Nd");
    var Md = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var $d = ["aggregate", "count", "groupBy"];
    function Ji(e, t2) {
      let r = e._extensions.getAllModelExtensions(t2) ?? {}, n = [qd(e, t2), Vd(e, t2), gr(r), re("name", () => t2), re("$name", () => t2), re("$parent", () => e._appliedParent)];
      return Se({}, n);
    }
    __name(Ji, "Ji");
    function qd(e, t2) {
      let r = Te(t2), n = Object.keys(Je.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((l) => e._request(l), "s");
        s = Ca(o, t2, e._clientVersion, s);
        let a = /* @__PURE__ */ __name((l) => (u) => {
          let c = Ze(e._errorFormat);
          return e._createPrismaPromise((p) => {
            let d = { args: u, dataPath: [], action: o, model: t2, clientMethod: `${r}.${i}`, jsModelName: r, transaction: p, callsite: c };
            return s({ ...d, ...l });
          });
        }, "a");
        return Md.includes(o) ? Qi(e, t2, a) : jd(i) ? Pa(e, i, a) : a({});
      } };
    }
    __name(qd, "qd");
    function jd(e) {
      return $d.includes(e);
    }
    __name(jd, "jd");
    function Vd(e, t2) {
      return ot(re("fields", () => {
        let r = e._runtimeDataModel.models[t2];
        return va(t2, r);
      }));
    }
    __name(Vd, "Vd");
    function Sa(e) {
      return e.replace(/^./, (t2) => t2.toUpperCase());
    }
    __name(Sa, "Sa");
    var Wi = Symbol();
    function yr(e) {
      let t2 = [Bd(e), re(Wi, () => e), re("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t2.push(gr(r)), Se(e, t2);
    }
    __name(yr, "yr");
    function Bd(e) {
      let t2 = Object.keys(e._runtimeDataModel.models), r = t2.map(Te), n = [...new Set(t2.concat(r))];
      return ot({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Sa(i);
        if (e._runtimeDataModel.models[o] !== void 0) return Ji(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return Ji(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i)) return { enumerable: false };
      } });
    }
    __name(Bd, "Bd");
    function Aa(e) {
      return e[Wi] ? e[Wi] : e;
    }
    __name(Aa, "Aa");
    function Ia(e) {
      if (typeof e == "function") return e(this);
      if (e.client?.__AccelerateEngine) {
        let r = e.client.__AccelerateEngine;
        this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
      }
      let t2 = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return yr(t2);
    }
    __name(Ia, "Ia");
    function Oa({ result: e, modelName: t2, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t2);
      if (!o) return e;
      let s = [], a = [];
      for (let l of Object.values(o)) {
        if (n) {
          if (n[l.name]) continue;
          let u = l.needs.filter((c) => n[c]);
          u.length > 0 && a.push(_t(u));
        } else if (r) {
          if (!r[l.name]) continue;
          let u = l.needs.filter((c) => !r[c]);
          u.length > 0 && a.push(_t(u));
        }
        Ud(e, l.needs) && s.push(Gd(l, Se(e, s)));
      }
      return s.length > 0 || a.length > 0 ? Se(e, [...s, ...a]) : e;
    }
    __name(Oa, "Oa");
    function Ud(e, t2) {
      return t2.every((r) => Ei(e, r));
    }
    __name(Ud, "Ud");
    function Gd(e, t2) {
      return ot(re(e.name, () => e.compute(t2)));
    }
    __name(Gd, "Gd");
    function An({ visitor: e, result: t2, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t2)) {
        for (let s = 0; s < t2.length; s++) t2[s] = An({ result: t2[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t2;
      }
      let o = e(t2, i, r) ?? t2;
      return r.include && ka({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && ka({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    __name(An, "An");
    function ka({ includeOrSelect: e, result: t2, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t2[o] == null || Re(s)) continue;
        let l = n.models[r].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName) continue;
        let u = typeof s == "object" ? s : {};
        t2[o] = An({ visitor: i, result: t2[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    __name(ka, "ka");
    function Da({ result: e, modelName: t2, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t2] ? e : An({ result: e, args: r ?? {}, modelName: t2, runtimeDataModel: i, visitor: /* @__PURE__ */ __name((a, l, u) => {
        let c = Te(l);
        return Oa({ result: a, modelName: c, select: u.select, omit: u.select ? void 0 : { ...o?.[c], ...u.omit }, extensions: n });
      }, "visitor") });
    }
    __name(Da, "Da");
    function _a(e) {
      if (e instanceof oe) return Qd(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++) r[n] = br(e[n]);
        return r;
      }
      let t2 = {};
      for (let r in e) t2[r] = br(e[r]);
      return t2;
    }
    __name(_a, "_a");
    function Qd(e) {
      return new oe(e.strings, e.values);
    }
    __name(Qd, "Qd");
    function br(e) {
      if (typeof e != "object" || e == null || e instanceof Me || It(e)) return e;
      if (vt(e)) return new xe(e.toFixed());
      if (Pt(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let t2 = e.length, r;
        for (r = Array(t2); t2--; ) r[t2] = br(e[t2]);
        return r;
      }
      if (typeof e == "object") {
        let t2 = {};
        for (let r in e) r === "__proto__" ? Object.defineProperty(t2, r, { value: br(e[r]), configurable: true, enumerable: true, writable: true }) : t2[r] = br(e[r]);
        return t2;
      }
      Fe(e, "Unknown value");
    }
    __name(br, "br");
    function La(e, t2, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t2.customDataProxyFetch;
        return "transaction" in t2 && i !== void 0 && (t2.transaction?.kind === "batch" && t2.transaction.lock.then(), t2.transaction = i), n === r.length ? e._executeRequest(t2) : r[n]({ model: t2.model, operation: t2.model ? t2.action : t2.clientMethod, args: _a(t2.args ?? {}), __internalParams: t2, query: /* @__PURE__ */ __name((s, a = t2) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = qa(o, l), a.args = s, La(e, a, r, n + 1);
        }, "query") });
      });
    }
    __name(La, "La");
    function Na(e, t2) {
      let { jsModelName: r, action: n, clientMethod: i } = t2, o = r ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(t2);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return La(e, t2, s);
    }
    __name(Na, "Na");
    function Ma(e) {
      return (t2) => {
        let r = { requests: t2 }, n = t2[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? $a(r, n, 0, e) : e(r);
      };
    }
    __name(Ma, "Ma");
    function $a(e, t2, r, n) {
      if (r === t2.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t2[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = qa(i, l), $a(a, t2, r + 1, n);
      } });
    }
    __name($a, "$a");
    var Fa = /* @__PURE__ */ __name((e) => e, "Fa");
    function qa(e = Fa, t2 = Fa) {
      return (r) => e(t2(r));
    }
    __name(qa, "qa");
    var ja = L("prisma:client");
    var Va = { Vercel: "vercel", "Netlify CI": "netlify" };
    function Ba({ postinstall: e, ciName: t2, clientVersion: r }) {
      if (ja("checkPlatformCaching:postinstall", e), ja("checkPlatformCaching:ciName", t2), e === true && t2 && t2 in Va) {
        let n = `Prisma has detected that this project was built on ${t2}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Va[t2]}-build`;
        throw console.error(n), new R(n, r);
      }
    }
    __name(Ba, "Ba");
    function Ua(e, t2) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t2[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    __name(Ua, "Ua");
    var Jd = "Cloudflare-Workers";
    var Wd = "node";
    function Ga() {
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Jd ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === Wd ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    __name(Ga, "Ga");
    var Hd = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function In() {
      let e = Ga();
      return { id: e, prettyName: Hd[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(In, "In");
    var Ka = k(__require("fs"));
    var Er = k(__require("path"));
    function On(e) {
      let { runtimeBinaryTarget: t2 } = e;
      return `Add "${t2}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Kd(e)}`;
    }
    __name(On, "On");
    function Kd(e) {
      let { generator: t2, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i];
      return hi({ ...t2, binaryTargets: o });
    }
    __name(Kd, "Kd");
    function Xe(e) {
      let { runtimeBinaryTarget: t2 } = e;
      return `Prisma Client could not locate the Query Engine for runtime "${t2}".`;
    }
    __name(Xe, "Xe");
    function et(e) {
      let { searchedLocations: t2 } = e;
      return `The following locations have been searched:
${[...new Set(t2)].map((i) => `  ${i}`).join(`
`)}`;
    }
    __name(et, "et");
    function Qa(e) {
      let { runtimeBinaryTarget: t2 } = e;
      return `${Xe(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t2}".
${On(e)}

${et(e)}`;
    }
    __name(Qa, "Qa");
    function kn(e) {
      return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
    }
    __name(kn, "kn");
    function Dn(e) {
      let { errorStack: t2 } = e;
      return t2?.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
    }
    __name(Dn, "Dn");
    function Ja(e) {
      let { queryEngineName: t2 } = e;
      return `${Xe(e)}${Dn(e)}

This is likely caused by a bundler that has not copied "${t2}" next to the resulting bundle.
Ensure that "${t2}" has been copied next to the bundle or in "${e.expectedLocation}".

${kn("engine-not-found-bundler-investigation")}

${et(e)}`;
    }
    __name(Ja, "Ja");
    function Wa(e) {
      let { runtimeBinaryTarget: t2, generatorBinaryTargets: r } = e, n = r.find((i) => i.native);
      return `${Xe(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${t2}".
${On(e)}

${et(e)}`;
    }
    __name(Wa, "Wa");
    function Ha(e) {
      let { queryEngineName: t2 } = e;
      return `${Xe(e)}${Dn(e)}

This is likely caused by tooling that has not copied "${t2}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t2}" has been copied to "${e.expectedLocation}".

${kn("engine-not-found-tooling-investigation")}

${et(e)}`;
    }
    __name(Ha, "Ha");
    var zd = L("prisma:client:engines:resolveEnginePath");
    var Yd = /* @__PURE__ */ __name(() => new RegExp("runtime[\\\\/]library\\.m?js$"), "Yd");
    async function za(e, t2) {
      let r = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t2.prismaPath;
      if (r !== void 0) return r;
      let { enginePath: n, searchedLocations: i } = await Zd(e, t2);
      if (zd("enginePath", n), n !== void 0 && e === "binary" && li(n), n !== void 0) return t2.prismaPath = n;
      let o = await nt(), s = t2.generator?.binaryTargets ?? [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(Yd()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t2.generator, runtimeBinaryTarget: o, queryEngineName: Ya(e, o), expectedLocation: Er.default.relative(process.cwd(), t2.dirname), errorStack: new Error().stack }, p;
      throw a && l ? p = Wa(c) : l ? p = Qa(c) : u ? p = Ja(c) : p = Ha(c), new R(p, t2.clientVersion);
    }
    __name(za, "za");
    async function Zd(engineType, config) {
      let binaryTarget = await nt(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, Er.default.resolve(dirname, ".."), config.generator?.output?.value ?? dirname, Er.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
      __filename.includes("resolveEnginePath") && searchLocations.push(Yo());
      for (let e of searchLocations) {
        let t2 = Ya(engineType, binaryTarget), r = Er.default.join(e, t2);
        if (searchedLocations.push(e), Ka.default.existsSync(r)) return { enginePath: r, searchedLocations };
      }
      return { enginePath: void 0, searchedLocations };
    }
    __name(Zd, "Zd");
    function Ya(e, t2) {
      return e === "library" ? qr(t2, "fs") : `query-engine-${t2}${t2 === "windows" ? ".exe" : ""}`;
    }
    __name(Ya, "Ya");
    var Hi = k(bi());
    function Za(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t2) => `${t2[0]}5`) : "";
    }
    __name(Za, "Za");
    function Xa(e) {
      return e.split(`
`).map((t2) => t2.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    __name(Xa, "Xa");
    var el = k(hs());
    function tl({ title: e, user: t2 = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
      return (0, el.default)({ user: t2, repo: r, template: n, title: e, body: i });
    }
    __name(tl, "tl");
    function rl({ version: e, binaryTarget: t2, title: r, description: n, engineVersion: i, database: o, query: s }) {
      let a = So(6e3 - (s?.length ?? 0)), l = Xa((0, Hi.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, Hi.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t2?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? Za(s) : ""}
\`\`\`
`), p = tl({ title: r, body: c });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${X(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    __name(rl, "rl");
    function Nt({ inlineDatasources: e, overrideDatasources: t2, env: r, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = t2[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0) throw new R(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0) throw new R("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    __name(Nt, "Nt");
    var _n = class extends Error {
      static {
        __name(this, "_n");
      }
      constructor(t2, r) {
        super(t2), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var se = class extends _n {
      static {
        __name(this, "se");
      }
      constructor(t2, r) {
        super(t2, r), this.isRetryable = r.isRetryable ?? true;
      }
    };
    function A(e, t2) {
      return { ...e, isRetryable: t2 };
    }
    __name(A, "A");
    var Mt = class extends se {
      static {
        __name(this, "Mt");
      }
      constructor(r) {
        super("This request must be retried", A(r, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    };
    w(Mt, "ForcedRetryError");
    var at = class extends se {
      static {
        __name(this, "at");
      }
      constructor(r, n) {
        super(r, A(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P6001";
      }
    };
    w(at, "InvalidDatasourceError");
    var lt = class extends se {
      static {
        __name(this, "lt");
      }
      constructor(r, n) {
        super(r, A(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    };
    w(lt, "NotImplementedYetError");
    var q = class extends se {
      static {
        __name(this, "q");
      }
      constructor(t2, r) {
        super(t2, r), this.response = r.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    };
    var ut = class extends q {
      static {
        __name(this, "ut");
      }
      constructor(r) {
        super("Schema needs to be uploaded", A(r, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    };
    w(ut, "SchemaMissingError");
    var Ki = "This request could not be understood by the server";
    var wr = class extends q {
      static {
        __name(this, "wr");
      }
      constructor(r, n, i) {
        super(n || Ki, A(r, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i && (this.code = i);
      }
    };
    w(wr, "BadRequestError");
    var xr = class extends q {
      static {
        __name(this, "xr");
      }
      constructor(r, n) {
        super("Engine not started: healthcheck timeout", A(r, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    };
    w(xr, "HealthcheckTimeoutError");
    var Pr = class extends q {
      static {
        __name(this, "Pr");
      }
      constructor(r, n, i) {
        super(n, A(r, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i;
      }
    };
    w(Pr, "EngineStartupError");
    var vr = class extends q {
      static {
        __name(this, "vr");
      }
      constructor(r) {
        super("Engine version is not supported", A(r, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    };
    w(vr, "EngineVersionNotSupportedError");
    var zi = "Request timed out";
    var Tr = class extends q {
      static {
        __name(this, "Tr");
      }
      constructor(r, n = zi) {
        super(n, A(r, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    };
    w(Tr, "GatewayTimeoutError");
    var Xd = "Interactive transaction error";
    var Rr = class extends q {
      static {
        __name(this, "Rr");
      }
      constructor(r, n = Xd) {
        super(n, A(r, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    };
    w(Rr, "InteractiveTransactionError");
    var em = "Request parameters are invalid";
    var Cr = class extends q {
      static {
        __name(this, "Cr");
      }
      constructor(r, n = em) {
        super(n, A(r, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    };
    w(Cr, "InvalidRequestError");
    var Yi = "Requested resource does not exist";
    var Sr = class extends q {
      static {
        __name(this, "Sr");
      }
      constructor(r, n = Yi) {
        super(n, A(r, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    };
    w(Sr, "NotFoundError");
    var Zi = "Unknown server error";
    var $t = class extends q {
      static {
        __name(this, "$t");
      }
      constructor(r, n, i) {
        super(n || Zi, A(r, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i;
      }
    };
    w($t, "ServerError");
    var Xi = "Unauthorized, check your connection string";
    var Ar = class extends q {
      static {
        __name(this, "Ar");
      }
      constructor(r, n = Xi) {
        super(n, A(r, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    };
    w(Ar, "UnauthorizedError");
    var eo = "Usage exceeded, retry again later";
    var Ir = class extends q {
      static {
        __name(this, "Ir");
      }
      constructor(r, n = eo) {
        super(n, A(r, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    };
    w(Ir, "UsageExceededError");
    async function tm(e) {
      let t2;
      try {
        t2 = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let r = JSON.parse(t2);
        if (typeof r == "string") switch (r) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: r };
          default:
            return { type: "UnknownTextError", body: r };
        }
        if (typeof r == "object" && r !== null) {
          if ("is_panic" in r && "message" in r && "error_code" in r) return { type: "QueryEngineError", body: r };
          if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
            let n = Object.values(r)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
          }
        }
        return { type: "UnknownJsonError", body: r };
      } catch {
        return t2 === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t2 };
      }
    }
    __name(tm, "tm");
    async function Or(e, t2) {
      if (e.ok) return;
      let r = { clientVersion: t2, response: e }, n = await tm(e);
      if (n.type === "QueryEngineError") throw new V(n.body.message, { code: n.body.error_code, clientVersion: t2 });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError") throw new $t(r, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing") return new ut(r);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new vr(r);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new Pr(r, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new R(i, t2, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new xr(r, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new Rr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body) throw new Cr(r, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403) throw new Ar(r, qt(Xi, n));
      if (e.status === 404) return new Sr(r, qt(Yi, n));
      if (e.status === 429) throw new Ir(r, qt(eo, n));
      if (e.status === 504) throw new Tr(r, qt(zi, n));
      if (e.status >= 500) throw new $t(r, qt(Zi, n));
      if (e.status >= 400) throw new wr(r, qt(Ki, n));
    }
    __name(Or, "Or");
    function qt(e, t2) {
      return t2.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t2)}`;
    }
    __name(qt, "qt");
    function nl(e) {
      let t2 = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t2) - Math.ceil(t2 / 2), n = t2 + r;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    __name(nl, "nl");
    var $e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function il(e) {
      let t2 = new TextEncoder().encode(e), r = "", n = t2.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
      for (let p = 0; p < o; p = p + 3) c = t2[p] << 16 | t2[p + 1] << 8 | t2[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, r += $e[s] + $e[a] + $e[l] + $e[u];
      return i == 1 ? (c = t2[o], s = (c & 252) >> 2, a = (c & 3) << 4, r += $e[s] + $e[a] + "==") : i == 2 && (c = t2[o] << 8 | t2[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, r += $e[s] + $e[a] + $e[l] + "="), r;
    }
    __name(il, "il");
    function ol(e) {
      if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics"))) throw new R("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    __name(ol, "ol");
    function rm(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    __name(rm, "rm");
    function sl(e) {
      return new Date(rm(e));
    }
    __name(sl, "sl");
    var al = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.22.0-44.605197351a3c8bdd595af2d2a9bc3025bca48ea2", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    var kr = class extends se {
      static {
        __name(this, "kr");
      }
      constructor(r, n) {
        super(`Cannot fetch data from service:
${r}`, A(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    };
    w(kr, "RequestError");
    async function ct(e, t2, r = (n) => n) {
      let n = t2.clientVersion;
      try {
        return typeof fetch == "function" ? await r(fetch)(e, t2) : await r(to)(e, t2);
      } catch (i) {
        let o = i.message ?? "Unknown error";
        throw new kr(o, { clientVersion: n });
      }
    }
    __name(ct, "ct");
    function im(e) {
      return { ...e.headers, "Content-Type": "application/json" };
    }
    __name(im, "im");
    function om(e) {
      return { method: e.method, headers: im(e) };
    }
    __name(om, "om");
    function sm(e, t2) {
      return { text: /* @__PURE__ */ __name(() => Promise.resolve(Buffer.concat(e).toString()), "text"), json: /* @__PURE__ */ __name(() => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())), "json"), ok: t2.statusCode >= 200 && t2.statusCode <= 299, status: t2.statusCode, url: t2.url, headers: new ro(t2.headers) };
    }
    __name(sm, "sm");
    async function to(e, t2 = {}) {
      let r = am("https"), n = om(t2), i = [], { origin: o } = new URL(e);
      return new Promise((s, a) => {
        let l = r.request(e, n, (u) => {
          let { statusCode: c, headers: { location: p } } = u;
          c >= 301 && c <= 399 && p && (p.startsWith("http") === false ? s(to(`${o}${p}`, t2)) : s(to(p, t2))), u.on("data", (d) => i.push(d)), u.on("end", () => s(sm(i, u))), u.on("error", a);
        });
        l.on("error", a), l.end(t2.body ?? "");
      });
    }
    __name(to, "to");
    var am = typeof __require < "u" ? __require : () => {
    };
    var ro = class {
      static {
        __name(this, "ro");
      }
      constructor(t2 = {}) {
        this.headers = /* @__PURE__ */ new Map();
        for (let [r, n] of Object.entries(t2)) if (typeof n == "string") this.headers.set(r, n);
        else if (Array.isArray(n)) for (let i of n) this.headers.set(r, i);
      }
      append(t2, r) {
        this.headers.set(t2, r);
      }
      delete(t2) {
        this.headers.delete(t2);
      }
      get(t2) {
        return this.headers.get(t2) ?? null;
      }
      has(t2) {
        return this.headers.has(t2);
      }
      set(t2, r) {
        this.headers.set(t2, r);
      }
      forEach(t2, r) {
        for (let [n, i] of this.headers) t2.call(r, i, n, this);
      }
    };
    var lm = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var ll = L("prisma:client:dataproxyEngine");
    async function um(e, t2) {
      let r = al["@prisma/engines-version"], n = t2.clientVersion ?? "unknown";
      if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
      let [i, o] = n?.split("-") ?? [];
      if (o === void 0 && lm.test(i)) return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        if (e.startsWith("localhost") || e.startsWith("127.0.0.1")) return "0.0.0";
        let [s] = r.split("-") ?? [], [a, l, u] = s.split("."), c = cm(`<=${a}.${l}.${u}`), p = await ct(c, { clientVersion: n });
        if (!p.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
        let d = await p.text();
        ll("length of body fetched from unpkg.com", d.length);
        let f;
        try {
          f = JSON.parse(d);
        } catch (g) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), g;
        }
        return f.version;
      }
      throw new lt("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    __name(um, "um");
    async function ul(e, t2) {
      let r = await um(e, t2);
      return ll("version", r), r;
    }
    __name(ul, "ul");
    function cm(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    __name(cm, "cm");
    var cl = 3;
    var no = L("prisma:client:dataproxyEngine");
    var io = class {
      static {
        __name(this, "io");
      }
      constructor({ apiKey: t2, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t2, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t2, interactiveTransaction: r } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = t2 ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let t2 = [];
        return this.tracingHelper.isEnabled() && t2.push("tracing"), this.logLevel && t2.push(this.logLevel), this.logQueries && t2.push("query"), t2;
      }
    };
    var Dr = class {
      static {
        __name(this, "Dr");
      }
      constructor(t2) {
        this.name = "DataProxyEngine";
        ol(t2), this.config = t2, this.env = { ...t2.env, ...typeof process < "u" ? process.env : {} }, this.inlineSchema = il(t2.inlineSchema), this.inlineDatasources = t2.inlineDatasources, this.inlineSchemaHash = t2.inlineSchemaHash, this.clientVersion = t2.clientVersion, this.engineHash = t2.engineVersion, this.logEmitter = t2.logEmitter, this.tracingHelper = t2.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [t2, r] = this.extractHostAndApiKey();
          this.host = t2, this.headerBuilder = new io({ apiKey: r, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await ul(t2, this.config), no("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(t2) {
        t2?.logs?.length && t2.logs.forEach((r) => {
          switch (r.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let n = typeof r.attributes.query == "string" ? r.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [i] = n.split("/* traceparent");
                n = i;
              }
              this.logEmitter.emit("query", { query: n, timestamp: sl(r.timestamp), duration: Number(r.attributes.duration_ms), params: r.attributes.params, target: r.attributes.target });
            }
          }
        }), t2?.traces?.length && this.tracingHelper.createEngineSpan({ span: true, spans: t2.traces });
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(t2) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t2}`;
      }
      async uploadSchema() {
        let t2 = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(t2, async () => {
          let r = await ct(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          r.ok || no("schema response status", r.status);
          let n = await Or(r, this.clientVersion);
          if (n) throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(t2, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: t2, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
      }
      async requestBatch(t2, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
        let o = n?.kind === "itx" ? n.options : void 0, s = Ft(t2, n), { batchResult: a, elapsed: l } = await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r });
        return a.map((u) => "errors" in u && u.errors.length > 0 ? st(u.errors[0], this.clientVersion, this.config.activeProvider) : { data: u, elapsed: l });
      }
      requestInternal({ body: t2, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: /* @__PURE__ */ __name(async ({ logHttpCall: o }) => {
          let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
          o(s);
          let a = await ct(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t2), clientVersion: this.clientVersion }, n);
          a.ok || no("graphql response status", a.status), await this.handleError(await Or(a, this.clientVersion));
          let l = await a.json(), u = l.extensions;
          if (u && this.propagateResponseExtensions(u), l.errors) throw l.errors.length === 1 ? st(l.errors[0], this.config.clientVersion, this.config.activeProvider) : new B(l.errors, { clientVersion: this.config.clientVersion });
          return l;
        }, "callback") });
      }
      async transaction(t2, r, n) {
        let i = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i[t2]} transaction`, callback: /* @__PURE__ */ __name(async ({ logHttpCall: o }) => {
          if (t2 === "start") {
            let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
            o(a);
            let l = await ct(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
            await this.handleError(await Or(l, this.clientVersion));
            let u = await l.json(), c = u.extensions;
            c && this.propagateResponseExtensions(c);
            let p = u.id, d = u["data-proxy"].endpoint;
            return { id: p, payload: { endpoint: d } };
          } else {
            let s = `${n.payload.endpoint}/${t2}`;
            o(s);
            let a = await ct(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await Or(a, this.clientVersion));
            let u = (await a.json()).extensions;
            u && this.propagateResponseExtensions(u);
            return;
          }
        }, "callback") });
      }
      extractHostAndApiKey() {
        let t2 = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = Nt({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
        try {
          i = new URL(n);
        } catch {
          throw new at(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t2);
        }
        let { protocol: o, host: s, searchParams: a } = i;
        if (o !== "prisma:" && o !== "prisma+postgres:") throw new at(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t2);
        let l = a.get("api_key");
        if (l === null || l.length < 1) throw new at(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t2);
        return [s, l];
      }
      metrics() {
        throw new lt("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(t2) {
        for (let r = 0; ; r++) {
          let n = /* @__PURE__ */ __name((i) => {
            this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }, "n");
          try {
            return await t2.callback({ logHttpCall: n });
          } catch (i) {
            if (!(i instanceof se) || !i.isRetryable) throw i;
            if (r >= cl) throw i instanceof Mt ? i.cause : i;
            this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${cl} failed for ${t2.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let o = await nl(r);
            this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(t2) {
        if (t2 instanceof ut) throw await this.uploadSchema(), new Mt({ clientVersion: this.clientVersion, cause: t2 });
        if (t2) throw t2;
      }
      applyPendingMigrations() {
        throw new Error("Method not implemented.");
      }
    };
    function pl(e) {
      if (e?.kind === "itx") return e.options.id;
    }
    __name(pl, "pl");
    var so = k(__require("os"));
    var dl = k(__require("path"));
    var oo = Symbol("PrismaLibraryEngineCache");
    function pm() {
      let e = globalThis;
      return e[oo] === void 0 && (e[oo] = {}), e[oo];
    }
    __name(pm, "pm");
    function dm(e) {
      let t2 = pm();
      if (t2[e] !== void 0) return t2[e];
      let r = dl.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = so.default.constants.dlopen.RTLD_LAZY | so.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t2[e] = n.exports, n.exports;
    }
    __name(dm, "dm");
    var ml = { async loadLibrary(e) {
      let t2 = await Yn(), r = await za("library", e);
      try {
        return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => dm(r));
      } catch (n) {
        let i = ui({ e: n, platformInfo: t2, id: r });
        throw new R(i, e.clientVersion);
      }
    } };
    var ao;
    var fl = { async loadLibrary(e) {
      let { clientVersion: t2, adapter: r, engineWasm: n } = e;
      if (r === void 0) throw new R(`The \`adapter\` option for \`PrismaClient\` is required in this context (${In().prettyName})`, t2);
      if (n === void 0) throw new R("WASM engine was unexpectedly `undefined`", t2);
      ao === void 0 && (ao = (async () => {
        let o = n.getRuntime(), s = await n.getQueryEngineWasmModule();
        if (s == null) throw new R("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", t2);
        let a = { "./query_engine_bg.js": o }, l = new WebAssembly.Instance(s, a);
        return o.__wbg_set_wasm(l.exports), o.QueryEngine;
      })());
      let i = await ao;
      return { debugPanic() {
        return Promise.reject("{}");
      }, dmmf() {
        return Promise.resolve("{}");
      }, version() {
        return { commit: "unknown", version: "unknown" };
      }, QueryEngine: i };
    } };
    var mm = "P2036";
    var Ae = L("prisma:client:libraryEngine");
    function fm(e) {
      return e.item_type === "query" && "query" in e;
    }
    __name(fm, "fm");
    function gm(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    __name(gm, "gm");
    var gl = [...Jn, "native"];
    var _r = class {
      static {
        __name(this, "_r");
      }
      constructor(t2, r) {
        this.name = "LibraryEngine";
        this.libraryLoader = r ?? ml, t2.engineWasm !== void 0 && (this.libraryLoader = r ?? fl), this.config = t2, this.libraryStarted = false, this.logQueries = t2.logQueries ?? false, this.logLevel = t2.logLevel ?? "error", this.logEmitter = t2.logEmitter, this.datamodel = t2.inlineSchema, t2.enableDebugLogs && (this.logLevel = "debug");
        let n = Object.keys(t2.overrideDatasources)[0], i = t2.overrideDatasources[n]?.url;
        n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary();
      }
      async applyPendingMigrations() {
        throw new Error("Cannot call this method from this type of engine instance");
      }
      async transaction(t2, r, n) {
        await this.start();
        let i = JSON.stringify(r), o;
        if (t2 === "start") {
          let a = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
          o = await this.engine?.startTransaction(a, i);
        } else t2 === "commit" ? o = await this.engine?.commitTransaction(n.id, i) : t2 === "rollback" && (o = await this.engine?.rollbackTransaction(n.id, i));
        let s = this.parseEngineResponse(o);
        if (hm(s)) {
          let a = this.getExternalAdapterError(s);
          throw a ? a.error : new V(s.message, { code: s.error_code, clientVersion: this.config.clientVersion, meta: s.meta });
        }
        return s;
      }
      async instantiateLibrary() {
        if (Ae("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
        Qn(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.loadEngine(), this.version();
      }
      async getCurrentBinaryTarget() {
        {
          if (this.binaryTarget) return this.binaryTarget;
          let t2 = await nt();
          if (!gl.includes(t2)) throw new R(`Unknown ${ce("PRISMA_QUERY_ENGINE_LIBRARY")} ${ce(H(t2))}. Possible binaryTargets: ${qe(gl.join(", "))} or a path to the query engine library.
You may have to run ${qe("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
          return t2;
        }
      }
      parseEngineResponse(t2) {
        if (!t2) throw new B("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(t2);
        } catch {
          throw new B("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      async loadEngine() {
        if (!this.engine) {
          this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
          try {
            let t2 = new WeakRef(this), { adapter: r } = this.config;
            r && Ae("Using driver adapter: %O", r), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
              t2.deref()?.logger(n);
            }, r);
          } catch (t2) {
            let r = t2, n = this.parseInitError(r.message);
            throw typeof n == "string" ? r : new R(n.message, this.config.clientVersion, n.error_code);
          }
        }
      }
      logger(t2) {
        let r = this.parseEngineResponse(t2);
        if (r) {
          if ("span" in r) {
            this.config.tracingHelper.createEngineSpan(r);
            return;
          }
          r.level = r?.level.toLowerCase() ?? "unknown", fm(r) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : gm(r) ? this.loggerRustPanic = new le(lo(this, `${r.message}: ${r.reason} in ${r.file}:${r.line}:${r.column}`), this.config.clientVersion) : this.logEmitter.emit(r.level, { timestamp: /* @__PURE__ */ new Date(), message: r.message, target: r.module_path });
        }
      }
      parseInitError(t2) {
        try {
          return JSON.parse(t2);
        } catch {
        }
        return t2;
      }
      parseRequestError(t2) {
        try {
          return JSON.parse(t2);
        } catch {
        }
        return t2;
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return Ae(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted) return;
        let t2 = /* @__PURE__ */ __name(async () => {
          Ae("library starting");
          try {
            let r = { traceparent: this.config.tracingHelper.getTraceParent() };
            await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = true, Ae("library started");
          } catch (r) {
            let n = this.parseInitError(r.message);
            throw typeof n == "string" ? r : new R(n.message, this.config.clientVersion, n.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        }, "t");
        return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", t2), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return Ae("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted) return;
        let t2 = /* @__PURE__ */ __name(async () => {
          await new Promise((n) => setTimeout(n, 5)), Ae("library stopping");
          let r = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, Ae("library stopped");
        }, "t");
        return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", t2), this.libraryStoppingPromise;
      }
      version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
      }
      debugPanic(t2) {
        return this.library?.debugPanic(t2);
      }
      async request(t2, { traceparent: r, interactiveTransaction: n }) {
        Ae(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let i = JSON.stringify({ traceparent: r }), o = JSON.stringify(t2);
        try {
          await this.start(), this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
          let s = this.parseEngineResponse(await this.executingQueryPromise);
          if (s.errors) throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
          if (this.loggerRustPanic) throw this.loggerRustPanic;
          return { data: s, elapsed: 0 };
        } catch (s) {
          if (s instanceof R) throw s;
          if (s.code === "GenericFailure" && s.message?.startsWith("PANIC:")) throw new le(lo(this, s.message), this.config.clientVersion);
          let a = this.parseRequestError(s.message);
          throw typeof a == "string" ? s : new B(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(t2, { transaction: r, traceparent: n }) {
        Ae("requestBatch");
        let i = Ft(t2, r);
        await this.start(), this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), pl(r));
        let o = await this.executingQueryPromise, s = this.parseEngineResponse(o);
        if (s.errors) throw s.errors.length === 1 ? this.buildQueryError(s.errors[0]) : new B(JSON.stringify(s.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: a, errors: l } = s;
        if (Array.isArray(a)) return a.map((u) => u.errors && u.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(u.errors[0]) : { data: u, elapsed: 0 });
        throw l && l.length === 1 ? new Error(l[0].error) : new Error(JSON.stringify(s));
      }
      buildQueryError(t2) {
        if (t2.user_facing_error.is_panic) return new le(lo(this, t2.user_facing_error.message), this.config.clientVersion);
        let r = this.getExternalAdapterError(t2.user_facing_error);
        return r ? r.error : st(t2, this.config.clientVersion, this.config.activeProvider);
      }
      getExternalAdapterError(t2) {
        if (t2.error_code === mm && this.config.adapter) {
          let r = t2.meta?.id;
          Yr(typeof r == "number", "Malformed external JS error received from the engine");
          let n = this.config.adapter.errorRegistry.consumeError(r);
          return Yr(n, "External error with reported id was not registered"), n;
        }
      }
      async metrics(t2) {
        await this.start();
        let r = await this.engine.metrics(JSON.stringify(t2));
        return t2.format === "prometheus" ? r : this.parseEngineResponse(r);
      }
    };
    function hm(e) {
      return typeof e == "object" && e !== null && e.error_code !== void 0;
    }
    __name(hm, "hm");
    function lo(e, t2) {
      return rl({ binaryTarget: e.binaryTarget, title: t2, version: e.config.clientVersion, engineVersion: e.versionInfo?.commit, database: e.config.activeProvider, query: e.lastQuery });
    }
    __name(lo, "lo");
    function hl({ copyEngine: e = true }, t2) {
      let r;
      try {
        r = Nt({ inlineDatasources: t2.inlineDatasources, overrideDatasources: t2.overrideDatasources, env: { ...t2.env, ...process.env }, clientVersion: t2.clientVersion });
      } catch {
      }
      let n = !!(r?.startsWith("prisma://") || r?.startsWith("prisma+postgres://"));
      e && n && tr("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let i = Yt(t2.generator), o = n || !e, s = !!t2.adapter, a = i === "library", l = i === "binary";
      if (o && s || s && false) {
        let u;
        throw e ? r?.startsWith("prisma://") ? u = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : u = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : u = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new J(u.join(`
`), { clientVersion: t2.clientVersion });
      }
      if (o) return new Dr(t2);
      if (a) return new _r(t2);
      throw new J("Invalid client engine type, please use `library` or `binary`", { clientVersion: t2.clientVersion });
    }
    __name(hl, "hl");
    function Fn({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    __name(Fn, "Fn");
    var yl = /* @__PURE__ */ __name((e) => ({ command: e }), "yl");
    var bl = /* @__PURE__ */ __name((e) => e.strings.reduce((t2, r, n) => `${t2}@P${n}${r}`), "bl");
    function jt(e) {
      try {
        return El(e, "fast");
      } catch {
        return El(e, "slow");
      }
    }
    __name(jt, "jt");
    function El(e, t2) {
      return JSON.stringify(e.map((r) => xl(r, t2)));
    }
    __name(El, "El");
    function xl(e, t2) {
      return Array.isArray(e) ? e.map((r) => xl(r, t2)) : typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : Pt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : xe.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : ym(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t2 === "slow" ? Pl(e) : e;
    }
    __name(xl, "xl");
    function ym(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(ym, "ym");
    function Pl(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(wl);
      let t2 = {};
      for (let r of Object.keys(e)) t2[r] = wl(e[r]);
      return t2;
    }
    __name(Pl, "Pl");
    function wl(e) {
      return typeof e == "bigint" ? e.toString() : Pl(e);
    }
    __name(wl, "wl");
    var bm = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var vl = bm;
    var Em = /^(\s*alter\s)/i;
    var Tl = L("prisma:client");
    function uo(e, t2, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && Em.exec(t2)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(uo, "uo");
    var co = /* @__PURE__ */ __name(({ clientMethod: e, activeProvider: t2 }) => (r) => {
      let n = "", i;
      if (pa(r)) n = r.sql, i = { values: jt(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: jt(s || []), __prismaRawParameters__: true };
      } else switch (t2) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: jt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: jt(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = bl(r), i = { values: jt(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t2} provider does not support ${e}`);
      }
      return i?.values ? Tl(`prisma.${e}(${n}, ${i.values})`) : Tl(`prisma.${e}(${n})`), { query: n, parameters: i };
    }, "co");
    var Rl = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t2, ...r] = e;
      return new oe(t2, r);
    } };
    var Cl = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function po(e) {
      return function(r) {
        let n, i = /* @__PURE__ */ __name((o = e) => {
          try {
            return o === void 0 || o?.kind === "itx" ? n ??= Sl(r(o)) : Sl(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        }, "i");
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    __name(po, "po");
    function Sl(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    __name(Sl, "Sl");
    var Al = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, t2) {
      return t2();
    } };
    var mo = class {
      static {
        __name(this, "mo");
      }
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t2) {
        return this.getGlobalTracingHelper().getTraceParent(t2);
      }
      createEngineSpan(t2) {
        return this.getGlobalTracingHelper().createEngineSpan(t2);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t2, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t2, r);
      }
      getGlobalTracingHelper() {
        return globalThis.PRISMA_INSTRUMENTATION?.helper ?? Al;
      }
    };
    function Il(e) {
      return e.includes("tracing") ? new mo() : Al;
    }
    __name(Il, "Il");
    function Ol(e, t2 = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t2()), i?.(n);
      } };
    }
    __name(Ol, "Ol");
    function kl(e) {
      return typeof e == "string" ? e : e.reduce((t2, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t2 : t2 && (r === "info" || t2 === "info") ? "info" : n;
      }, void 0);
    }
    __name(kl, "kl");
    var Ln = class {
      static {
        __name(this, "Ln");
      }
      constructor() {
        this._middlewares = [];
      }
      use(t2) {
        this._middlewares.push(t2);
      }
      get(t2) {
        return this._middlewares[t2];
      }
      has(t2) {
        return !!this._middlewares[t2];
      }
      length() {
        return this._middlewares.length;
      }
    };
    var Fl = k(bi());
    function Nn(e) {
      return typeof e.batchRequestIdx == "number";
    }
    __name(Nn, "Nn");
    function Dl(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let t2 = [];
      return e.modelName && t2.push(e.modelName), e.query.arguments && t2.push(fo(e.query.arguments)), t2.push(fo(e.query.selection)), t2.join("");
    }
    __name(Dl, "Dl");
    function fo(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${fo(n)})` : r;
      }).join(" ")})`;
    }
    __name(fo, "fo");
    var wm = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function go(e) {
      return wm[e];
    }
    __name(go, "go");
    var Mn = class {
      static {
        __name(this, "Mn");
      }
      constructor(t2) {
        this.options = t2;
        this.tickActive = false;
        this.batches = {};
      }
      request(t2) {
        let r = this.options.batchBy(t2);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t2, resolve: n, reject: i });
        })) : this.options.singleLoader(t2);
      }
      dispatchBatches() {
        for (let t2 in this.batches) {
          let r = this.batches[t2];
          delete this.batches[t2], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
            else for (let i = 0; i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++) r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    function pt(e, t2) {
      if (t2 === null) return t2;
      switch (e) {
        case "bigint":
          return BigInt(t2);
        case "bytes":
          return Buffer.from(t2, "base64");
        case "decimal":
          return new xe(t2);
        case "datetime":
        case "date":
          return new Date(t2);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t2}Z`);
        case "bigint-array":
          return t2.map((r) => pt("bigint", r));
        case "bytes-array":
          return t2.map((r) => pt("bytes", r));
        case "decimal-array":
          return t2.map((r) => pt("decimal", r));
        case "datetime-array":
          return t2.map((r) => pt("datetime", r));
        case "date-array":
          return t2.map((r) => pt("date", r));
        case "time-array":
          return t2.map((r) => pt("time", r));
        default:
          return t2;
      }
    }
    __name(pt, "pt");
    function _l(e) {
      let t2 = [], r = xm(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++) o[e.columns[s]] = pt(e.types[s], i[s]);
        t2.push(o);
      }
      return t2;
    }
    __name(_l, "_l");
    function xm(e) {
      let t2 = {};
      for (let r = 0; r < e.columns.length; r++) t2[e.columns[r]] = null;
      return t2;
    }
    __name(xm, "xm");
    var Pm = L("prisma:client:request_handler");
    var $n = class {
      static {
        __name(this, "$n");
      }
      constructor(t2, r) {
        this.logEmitter = r, this.client = t2, this.dataloader = new Mn({ batchLoader: Ma(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => go(p.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: vm(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
            if (p instanceof Error) return p;
            try {
              return this.mapQueryEngineResult(n[d], p);
            } catch (f) {
              return f;
            }
          });
        }), singleLoader: /* @__PURE__ */ __name(async (n) => {
          let i = n.transaction?.kind === "itx" ? Ll(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: go(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, "singleLoader"), batchBy: /* @__PURE__ */ __name((n) => n.transaction?.id ? `transaction-${n.transaction.id}` : Dl(n.protocolQuery), "batchBy"), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t2) {
        try {
          return await this.dataloader.request(t2);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t2;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t2.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t2, unpacker: r }, n) {
        let i = n?.data, o = n?.elapsed, s = this.unpack(i, t2, r);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(t2) {
        try {
          this.handleRequestError(t2);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t2.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t2, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (Pm(t2), Tm(t2, i) || t2 instanceof Le) throw t2;
        if (t2 instanceof V && Rm(t2)) {
          let u = Nl(t2.meta);
          wn({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let l = t2.message;
        if (n && (l = Tt({ callsite: n, originalMethod: r, isPanic: t2.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t2.code) {
          let u = s ? { modelName: s, ...t2.meta } : t2.meta;
          throw new V(l, { code: t2.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: t2.batchRequestIdx });
        } else {
          if (t2.isPanic) throw new le(l, this.client._clientVersion);
          if (t2 instanceof B) throw new B(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t2.batchRequestIdx });
          if (t2 instanceof R) throw new R(l, this.client._clientVersion);
          if (t2 instanceof le) throw new le(l, this.client._clientVersion);
        }
        throw t2.clientVersion = this.client._clientVersion, t2;
      }
      sanitizeMessage(t2) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Fl.default)(t2) : t2;
      }
      unpack(t2, r, n) {
        if (!t2 || (t2.data && (t2 = t2.data), !t2)) return t2;
        let i = Object.keys(t2)[0], o = Object.values(t2)[0], s = r.filter((u) => u !== "select" && u !== "include"), a = Gi(o, s), l = i === "queryRaw" ? _l(a) : wt(a);
        return n ? n(l) : l;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function vm(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx") return { kind: "itx", options: Ll(e) };
        Fe(e, "Unknown transaction kind");
      }
    }
    __name(vm, "vm");
    function Ll(e) {
      return { id: e.id, payload: e.payload };
    }
    __name(Ll, "Ll");
    function Tm(e, t2) {
      return Nn(e) && t2?.kind === "batch" && e.batchRequestIdx !== t2.index;
    }
    __name(Tm, "Tm");
    function Rm(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    __name(Rm, "Rm");
    function Nl(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Nl) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t2] = e.selectionPath;
        return { ...e, selectionPath: t2 };
      }
      return e;
    }
    __name(Nl, "Nl");
    var Ml = "5.22.0";
    var $l = Ml;
    var Ul = k(Ai());
    var F = class extends Error {
      static {
        __name(this, "F");
      }
      constructor(t2) {
        super(t2 + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    w(F, "PrismaClientConstructorValidationError");
    var ql = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var jl = ["pretty", "colorless", "minimal"];
    var Vl = ["info", "query", "warn", "error"];
    var Sm = { datasources: /* @__PURE__ */ __name((e, { datasourceNames: t2 }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e)) throw new F(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t2.includes(r)) {
            let i = Vt(r, t2) || ` Available datasources: ${t2.join(", ")}`;
            throw new F(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n)) throw new F(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object") for (let [i, o] of Object.entries(n)) {
            if (i !== "url") throw new F(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string") throw new F(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
        }
      }
    }, "datasources"), adapter: /* @__PURE__ */ __name((e, t2) => {
      if (e === null) return;
      if (e === void 0) throw new F('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!Fn(t2).includes("driverAdapters")) throw new F('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (Yt() === "binary") throw new F('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, "adapter"), datasourceUrl: /* @__PURE__ */ __name((e) => {
      if (typeof e < "u" && typeof e != "string") throw new F(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, "datasourceUrl"), errorFormat: /* @__PURE__ */ __name((e) => {
      if (e) {
        if (typeof e != "string") throw new F(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!jl.includes(e)) {
          let t2 = Vt(e, jl);
          throw new F(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t2}`);
        }
      }
    }, "errorFormat"), log: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new F(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t2(r) {
        if (typeof r == "string" && !Vl.includes(r)) {
          let n = Vt(r, Vl);
          throw new F(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(t2, "t");
      for (let r of e) {
        t2(r);
        let n = { level: t2, emit: /* @__PURE__ */ __name((i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Vt(i, o);
            throw new F(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        }, "emit") };
        if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
        else throw new F(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, "log"), transactionOptions: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t2 = e.maxWait;
      if (t2 != null && t2 <= 0) throw new F(`Invalid value ${t2} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0) throw new F(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, "transactionOptions"), omit: /* @__PURE__ */ __name((e, t2) => {
      if (typeof e != "object") throw new F('"omit" option is expected to be an object.');
      if (e === null) throw new F('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = Im(n, t2.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((u) => u.name === s);
          if (!l) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new F(Om(e, r));
    }, "omit"), __internal: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t2 = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new F(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e)) if (!t2.includes(r)) {
        let n = Vt(r, t2);
        throw new F(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    }, "__internal") };
    function Gl(e, t2) {
      for (let [r, n] of Object.entries(e)) {
        if (!ql.includes(r)) {
          let i = Vt(r, ql);
          throw new F(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Sm[r](n, t2);
      }
      if (e.datasourceUrl && e.datasources) throw new F('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    __name(Gl, "Gl");
    function Vt(e, t2) {
      if (t2.length === 0 || typeof e != "string") return "";
      let r = Am(e, t2);
      return r ? ` Did you mean "${r}"?` : "";
    }
    __name(Vt, "Vt");
    function Am(e, t2) {
      if (t2.length === 0) return null;
      let r = t2.map((i) => ({ value: i, distance: (0, Ul.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(Am, "Am");
    function Im(e, t2) {
      return Bl(t2.models, e) ?? Bl(t2.types, e);
    }
    __name(Im, "Im");
    function Bl(e, t2) {
      let r = Object.keys(e).find((n) => xt(n) === t2);
      if (r) return e[r];
    }
    __name(Bl, "Bl");
    function Om(e, t2) {
      let r = Ot(e);
      for (let o of t2) switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
      let { message: n, args: i } = En(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name(Om, "Om");
    function Ql(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t2, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = /* @__PURE__ */ __name(() => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t2(n)));
        }, "a"), l = /* @__PURE__ */ __name((u) => {
          o || (o = true, r(u));
        }, "l");
        for (let u = 0; u < e.length; u++) e[u].then((c) => {
          n[u] = c, a();
        }, (c) => {
          if (!Nn(c)) {
            l(c);
            return;
          }
          c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
      });
    }
    __name(Ql, "Ql");
    var tt = L("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var km = { requestArgsToMiddlewareArgs: /* @__PURE__ */ __name((e) => e, "requestArgsToMiddlewareArgs"), middlewareArgsToRequestArgs: /* @__PURE__ */ __name((e) => e, "middlewareArgsToRequestArgs") };
    var Dm = Symbol.for("prisma.client.transaction.id");
    var _m = { id: 0, nextId() {
      return ++this.id;
    } };
    function Yl(e) {
      class t2 {
        static {
          __name(this, "t");
        }
        constructor(n) {
          this._originalClient = this;
          this._middlewares = new Ln();
          this._createPrismaPromise = po();
          this.$extends = Ia;
          e = n?.__internal?.configOverride?.(e) ?? e, Ba(e), n && Gl(n, e);
          let i = new Kl.EventEmitter().on("error", () => {
          });
          this._extensions = kt.empty(), this._previewFeatures = Fn(e), this._clientVersion = e.clientVersion ?? $l, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Il(this._previewFeatures);
          let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Fr.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Fr.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
          if (n?.adapter) {
            s = qi(n.adapter);
            let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
            if (s.provider !== l) throw new R(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0) throw new R("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = !s && zt(o, { conflictCheck: "none" }) || e.injectableEdgeEnv?.();
          try {
            let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
            c && L.enable("prisma:client");
            let p = Fr.default.resolve(e.dirname, e.relativePath);
            zl.default.existsSync(p) || (p = e.dirname), tt("dirname", e.dirname), tt("relativePath", e.relativePath), tt("cwd", p);
            let d = u.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, datamodelPath: Fr.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: d.binaryPath ?? void 0, engineEndpoint: d.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && kl(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Ua(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2e3, timeout: l.transactionOptions?.timeout ?? 5e3, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: Nt, getBatchRequestPayload: Ft, prismaGraphQLToJSError: st, PrismaClientUnknownRequestError: B, PrismaClientInitializationError: R, PrismaClientKnownRequestError: V, debug: L("prisma:client:accelerateEngine"), engineVersion: Wl.version, clientVersion: e.clientVersion } }, tt("clientVersion", e.clientVersion), this._engine = hl(e, this._engineConfig), this._requestHandler = new $n(this, i), l.log) for (let f of l.log) {
              let g = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
              g && this.$on(g, (h) => {
                er.log(`${er.tags[g] ?? ""}`, h.message || h.query);
              });
            }
            this._metrics = new Dt(this._engine);
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = yr(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i);
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Ao();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: co({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = Jl(n, i);
              return uo(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new J("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (uo(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new J(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: yl, callsite: Ze(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: co({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...Jl(n, i));
            throw new J("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql")) throw new J("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = _m.nextId(), s = Ol(n.length), a = n.map((l, u) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return l.requestTransaction?.(p) ?? l;
          });
          return Ql(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
          try {
            let u = { kind: "itx", ...a };
            l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
          } catch (u) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), u;
          }
          return l;
        }
        _createItxClient(n) {
          return yr(Se(Aa(this), [re("_appliedParent", () => this._appliedParent._createItxClient(n)), re("_createPrismaPromise", () => po(n)), re(Dm, () => n.id), _t(vl)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? km, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = /* @__PURE__ */ __name(async (u) => {
            let c = this._middlewares.get(++a);
            if (c) return this._tracingHelper.runInChildSpan(s.middleware, (O) => c(u, (T) => (O?.end(), l(T))));
            let { runInTransaction: p, args: d, ...f } = u, g = { ...n, ...f };
            d && (g.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== void 0 && p === false && delete g.transaction;
            let h = await Na(this, g);
            return g.model ? Da({ result: h, modelName: g.model, args: g.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : h;
          }, "l");
          return this._tracingHelper.runInChildSpan(s.operation, () => new Hl.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
          try {
            n = u ? u(n) : n;
            let g = { name: "serialize" }, h = this._tracingHelper.runInChildSpan(g, () => vn({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return L.enabled("prisma:client") && (tt("Prisma Client call:"), tt(`prisma.${i}(${ha(n)})`), tt("Generated request:"), tt(JSON.stringify(h, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: h, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: f });
          } catch (g) {
            throw g.clientVersion = this._clientVersion, g;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics")) throw new J("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
      }
      return t2;
    }
    __name(Yl, "Yl");
    function Jl(e, t2) {
      return Fm(e) ? [new oe(e, t2), Rl] : [e, Cl];
    }
    __name(Jl, "Jl");
    function Fm(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    __name(Fm, "Fm");
    var Lm = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Zl(e) {
      return new Proxy(e, { get(t2, r) {
        if (r in t2) return t2[r];
        if (!Lm.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    __name(Zl, "Zl");
    function Xl(e) {
      zt(e, { conflictCheck: "warn" });
    }
    __name(Xl, "Xl");
  }
});

// prisma/client/index.js
var require_client = __commonJS({
  "prisma/client/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2
    } = require_library();
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.22.0",
      engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = __require("path");
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.UserScalarFieldEnum = {
      id: "id",
      email: "email",
      password: "password",
      verificationToken: "verificationToken",
      isEmailVerified: "isEmailVerified",
      resetPasswordToken: "resetPasswordToken",
      resetPasswordTokenExpiresAt: "resetPasswordTokenExpiresAt",
      refreshToken: "refreshToken",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports2.Prisma.WeightMeasurementScalarFieldEnum = {
      id: "id",
      userId: "userId",
      weightKg: "weightKg",
      note: "note",
      createdAt: "createdAt"
    };
    exports2.Prisma.GoalScalarFieldEnum = {
      id: "id",
      userId: "userId",
      goalWeightKg: "goalWeightKg",
      goalSetAt: "goalSetAt",
      reachedAt: "reachedAt"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports2.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports2.Prisma.ModelName = {
      User: "User",
      WeightMeasurement: "WeightMeasurement",
      Goal: "Goal"
    };
    var config2 = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "/home/neil/Projects/my-project/packages/auth/prisma/client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "debian-openssl-3.0.x",
            "native": true
          },
          {
            "fromEnvVar": null,
            "value": "rhel-openssl-3.0.x"
          }
        ],
        "previewFeatures": [],
        "sourceFilePath": "/home/neil/Projects/my-project/packages/auth/prisma/schema.prisma",
        "isCustomOutput": true
      },
      "relativeEnvPaths": {
        "rootEnvPath": null
      },
      "relativePath": "..",
      "clientVersion": "5.22.0",
      "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": false,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": 'generator client {\n  provider      = "prisma-client-js"\n  output        = "./client"\n  binaryTargets = ["native", "rhel-openssl-3.0.x"]\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id                          String              @id @default(uuid())\n  email                       String              @unique\n  password                    String\n  verificationToken           String?\n  isEmailVerified             Boolean             @default(false)\n  resetPasswordToken          String?\n  resetPasswordTokenExpiresAt DateTime?\n  refreshToken                String?\n  createdAt                   DateTime            @default(now())\n  updatedAt                   DateTime            @updatedAt\n  goals                       Goal[]\n  weights                     WeightMeasurement[]\n\n  @@index([createdAt])\n}\n\nmodel WeightMeasurement {\n  id        String   @id @default(uuid())\n  userId    String\n  weightKg  Float\n  note      String?\n  createdAt DateTime @default(now())\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@index([createdAt])\n}\n\nmodel Goal {\n  id           String    @id @default(uuid())\n  userId       String\n  goalWeightKg Float\n  goalSetAt    DateTime  @default(now())\n  reachedAt    DateTime?\n  user         User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@index([goalSetAt])\n}\n',
      "inlineSchemaHash": "9af543bd5cfcbd13de46eb28dc2930aaa6e2ce098dd665557321c104aafe11bd",
      "copyEngine": true
    };
    var fs2 = __require("fs");
    config2.dirname = __dirname;
    if (!fs2.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "prisma/client",
        "client"
      ];
      const alternativePath = alternativePaths.find((altPath) => {
        return fs2.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      }) ?? alternativePaths[0];
      config2.dirname = path.join(process.cwd(), alternativePath);
      config2.isBundled = true;
    }
    config2.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"verificationToken","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"isEmailVerified","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"resetPasswordToken","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"resetPasswordTokenExpiresAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"refreshToken","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"goals","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Goal","relationName":"GoalToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"weights","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"WeightMeasurement","relationName":"UserToWeightMeasurement","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"WeightMeasurement":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"weightKg","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"note","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"UserToWeightMeasurement","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Goal":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":{"name":"uuid(4)","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"goalWeightKg","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"goalSetAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"reachedAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"GoalToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports2.Prisma, config2.runtimeDataModel);
    config2.engineWasm = void 0;
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
    warnEnvConflicts2({
      rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient2(config2);
    exports2.PrismaClient = PrismaClient2;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
    path.join(process.cwd(), "prisma/client/libquery_engine-debian-openssl-3.0.x.so.node");
    path.join(__dirname, "libquery_engine-rhel-openssl-3.0.x.so.node");
    path.join(process.cwd(), "prisma/client/libquery_engine-rhel-openssl-3.0.x.so.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "prisma/client/schema.prisma");
  }
});

// ../../node_modules/.pnpm/@trpc+server@11.5.1_typescript@5.9.2/node_modules/@trpc/server/dist/utils-DdbbrDku.mjs
var TRPC_ERROR_CODES_BY_KEY = {
  PARSE_ERROR: -32700,
  BAD_REQUEST: -32600,
  INTERNAL_SERVER_ERROR: -32603,
  NOT_IMPLEMENTED: -32603,
  BAD_GATEWAY: -32603,
  SERVICE_UNAVAILABLE: -32603,
  GATEWAY_TIMEOUT: -32603,
  UNAUTHORIZED: -32001,
  PAYMENT_REQUIRED: -32002,
  FORBIDDEN: -32003,
  NOT_FOUND: -32004,
  METHOD_NOT_SUPPORTED: -32005,
  TIMEOUT: -32008,
  CONFLICT: -32009,
  PRECONDITION_FAILED: -32012,
  PAYLOAD_TOO_LARGE: -32013,
  UNSUPPORTED_MEDIA_TYPE: -32015,
  UNPROCESSABLE_CONTENT: -32022,
  TOO_MANY_REQUESTS: -32029,
  CLIENT_CLOSED_REQUEST: -32099
};
var TRPC_ERROR_CODES_BY_NUMBER = {
  [-32700]: "PARSE_ERROR",
  [-32600]: "BAD_REQUEST",
  [-32603]: "INTERNAL_SERVER_ERROR",
  [-32001]: "UNAUTHORIZED",
  [-32002]: "PAYMENT_REQUIRED",
  [-32003]: "FORBIDDEN",
  [-32004]: "NOT_FOUND",
  [-32005]: "METHOD_NOT_SUPPORTED",
  [-32008]: "TIMEOUT",
  [-32009]: "CONFLICT",
  [-32012]: "PRECONDITION_FAILED",
  [-32013]: "PAYLOAD_TOO_LARGE",
  [-32015]: "UNSUPPORTED_MEDIA_TYPE",
  [-32022]: "UNPROCESSABLE_CONTENT",
  [-32029]: "TOO_MANY_REQUESTS",
  [-32099]: "CLIENT_CLOSED_REQUEST"
};
var retryableRpcCodes = [
  TRPC_ERROR_CODES_BY_KEY.BAD_GATEWAY,
  TRPC_ERROR_CODES_BY_KEY.SERVICE_UNAVAILABLE,
  TRPC_ERROR_CODES_BY_KEY.GATEWAY_TIMEOUT,
  TRPC_ERROR_CODES_BY_KEY.INTERNAL_SERVER_ERROR
];
function mergeWithoutOverrides(obj1, ...objs) {
  const newObj = Object.assign(/* @__PURE__ */ Object.create(null), obj1);
  for (const overrides of objs) for (const key in overrides) {
    if (key in newObj && newObj[key] !== overrides[key]) throw new Error(`Duplicate key ${key}`);
    newObj[key] = overrides[key];
  }
  return newObj;
}
__name(mergeWithoutOverrides, "mergeWithoutOverrides");
function isObject(value) {
  return !!value && !Array.isArray(value) && typeof value === "object";
}
__name(isObject, "isObject");
function isFunction(fn2) {
  return typeof fn2 === "function";
}
__name(isFunction, "isFunction");
function omitPrototype(obj) {
  return Object.assign(/* @__PURE__ */ Object.create(null), obj);
}
__name(omitPrototype, "omitPrototype");
var asyncIteratorsSupported = typeof Symbol === "function" && !!Symbol.asyncIterator;
function isAsyncIterable(value) {
  return asyncIteratorsSupported && isObject(value) && Symbol.asyncIterator in value;
}
__name(isAsyncIterable, "isAsyncIterable");
var run = /* @__PURE__ */ __name((fn2) => fn2(), "run");
function identity(it2) {
  return it2;
}
__name(identity, "identity");

// ../../node_modules/.pnpm/@trpc+server@11.5.1_typescript@5.9.2/node_modules/@trpc/server/dist/getErrorShape-Uhlrl4Bk.mjs
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __commonJS2 = /* @__PURE__ */ __name((cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, "__commonJS");
var __copyProps2 = /* @__PURE__ */ __name((to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames2(from), i = 0, n = keys.length, key; i < n; i++) {
    key = keys[i];
    if (!__hasOwnProp2.call(to2, key) && key !== except) __defProp2(to2, key, {
      get: ((k2) => from[k2]).bind(null, key),
      enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
    });
  }
  return to2;
}, "__copyProps");
var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod)), "__toESM");
var noop = /* @__PURE__ */ __name(() => {
}, "noop");
var freezeIfAvailable = /* @__PURE__ */ __name((obj) => {
  if (Object.freeze) Object.freeze(obj);
}, "freezeIfAvailable");
function createInnerProxy(callback, path, memo2) {
  var _memo$cacheKey;
  const cacheKey = path.join(".");
  (_memo$cacheKey = memo2[cacheKey]) !== null && _memo$cacheKey !== void 0 || (memo2[cacheKey] = new Proxy(noop, {
    get(_obj, key) {
      if (typeof key !== "string" || key === "then") return void 0;
      return createInnerProxy(callback, [...path, key], memo2);
    },
    apply(_1, _2, args) {
      const lastOfPath = path[path.length - 1];
      let opts = {
        args,
        path
      };
      if (lastOfPath === "call") opts = {
        args: args.length >= 2 ? [args[1]] : [],
        path: path.slice(0, -1)
      };
      else if (lastOfPath === "apply") opts = {
        args: args.length >= 2 ? args[1] : [],
        path: path.slice(0, -1)
      };
      freezeIfAvailable(opts.args);
      freezeIfAvailable(opts.path);
      return callback(opts);
    }
  }));
  return memo2[cacheKey];
}
__name(createInnerProxy, "createInnerProxy");
var createRecursiveProxy = /* @__PURE__ */ __name((callback) => createInnerProxy(callback, [], /* @__PURE__ */ Object.create(null)), "createRecursiveProxy");
var JSONRPC2_TO_HTTP_CODE = {
  PARSE_ERROR: 400,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_SUPPORTED: 405,
  TIMEOUT: 408,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
};
function getStatusCodeFromKey(code) {
  var _JSONRPC2_TO_HTTP_COD;
  return (_JSONRPC2_TO_HTTP_COD = JSONRPC2_TO_HTTP_CODE[code]) !== null && _JSONRPC2_TO_HTTP_COD !== void 0 ? _JSONRPC2_TO_HTTP_COD : 500;
}
__name(getStatusCodeFromKey, "getStatusCodeFromKey");
function getHTTPStatusCode(json) {
  const arr = Array.isArray(json) ? json : [json];
  const httpStatuses = new Set(arr.map((res) => {
    if ("error" in res && isObject(res.error.data)) {
      var _res$error$data;
      if (typeof ((_res$error$data = res.error.data) === null || _res$error$data === void 0 ? void 0 : _res$error$data["httpStatus"]) === "number") return res.error.data["httpStatus"];
      const code = TRPC_ERROR_CODES_BY_NUMBER[res.error.code];
      return getStatusCodeFromKey(code);
    }
    return 200;
  }));
  if (httpStatuses.size !== 1) return 207;
  const httpStatus = httpStatuses.values().next().value;
  return httpStatus;
}
__name(getHTTPStatusCode, "getHTTPStatusCode");
function getHTTPStatusCodeFromError(error) {
  return getStatusCodeFromKey(error.code);
}
__name(getHTTPStatusCodeFromError, "getHTTPStatusCodeFromError");
var require_typeof = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(exports2, module2) {
  function _typeof$2(o) {
    "@babel/helpers - typeof";
    return module2.exports = _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
      return typeof o$1;
    } : function(o$1) {
      return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
    }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports, _typeof$2(o);
  }
  __name(_typeof$2, "_typeof$2");
  module2.exports = _typeof$2, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var require_toPrimitive = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(exports2, module2) {
  var _typeof$1 = require_typeof()["default"];
  function toPrimitive$1(t2, r) {
    if ("object" != _typeof$1(t2) || !t2) return t2;
    var e = t2[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t2, r || "default");
      if ("object" != _typeof$1(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t2);
  }
  __name(toPrimitive$1, "toPrimitive$1");
  module2.exports = toPrimitive$1, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var require_toPropertyKey = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(exports2, module2) {
  var _typeof = require_typeof()["default"];
  var toPrimitive = require_toPrimitive();
  function toPropertyKey$1(t2) {
    var i = toPrimitive(t2, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }
  __name(toPropertyKey$1, "toPropertyKey$1");
  module2.exports = toPropertyKey$1, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var require_defineProperty = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(exports2, module2) {
  var toPropertyKey = require_toPropertyKey();
  function _defineProperty(e, r, t2) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t2,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t2, e;
  }
  __name(_defineProperty, "_defineProperty");
  module2.exports = _defineProperty, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var require_objectSpread2 = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(exports2, module2) {
  var defineProperty = require_defineProperty();
  function ownKeys(e, r) {
    var t2 = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r$1) {
        return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
      })), t2.push.apply(t2, o);
    }
    return t2;
  }
  __name(ownKeys, "ownKeys");
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t2 = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t2), true).forEach(function(r$1) {
        defineProperty(e, r$1, t2[r$1]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r$1) {
        Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t2, r$1));
      });
    }
    return e;
  }
  __name(_objectSpread2, "_objectSpread2");
  module2.exports = _objectSpread2, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var import_objectSpread2 = __toESM2(require_objectSpread2(), 1);
function getErrorShape(opts) {
  const { path, error, config: config2 } = opts;
  const { code } = opts.error;
  const shape = {
    message: error.message,
    code: TRPC_ERROR_CODES_BY_KEY[code],
    data: {
      code,
      httpStatus: getHTTPStatusCodeFromError(error)
    }
  };
  if (config2.isDev && typeof opts.error.stack === "string") shape.data.stack = opts.error.stack;
  if (typeof path === "string") shape.data.path = path;
  return config2.errorFormatter((0, import_objectSpread2.default)((0, import_objectSpread2.default)({}, opts), {}, { shape }));
}
__name(getErrorShape, "getErrorShape");

// ../../node_modules/.pnpm/@trpc+server@11.5.1_typescript@5.9.2/node_modules/@trpc/server/dist/tracked-BOPN0_Sr.mjs
var defaultFormatter = /* @__PURE__ */ __name(({ shape }) => {
  return shape;
}, "defaultFormatter");
var import_defineProperty = __toESM2(require_defineProperty(), 1);
var UnknownCauseError = class extends Error {
  static {
    __name(this, "UnknownCauseError");
  }
};
function getCauseFromUnknown(cause) {
  if (cause instanceof Error) return cause;
  const type = typeof cause;
  if (type === "undefined" || type === "function" || cause === null) return void 0;
  if (type !== "object") return new Error(String(cause));
  if (isObject(cause)) return Object.assign(new UnknownCauseError(), cause);
  return void 0;
}
__name(getCauseFromUnknown, "getCauseFromUnknown");
function getTRPCErrorFromUnknown(cause) {
  if (cause instanceof TRPCError) return cause;
  if (cause instanceof Error && cause.name === "TRPCError") return cause;
  const trpcError = new TRPCError({
    code: "INTERNAL_SERVER_ERROR",
    cause
  });
  if (cause instanceof Error && cause.stack) trpcError.stack = cause.stack;
  return trpcError;
}
__name(getTRPCErrorFromUnknown, "getTRPCErrorFromUnknown");
var TRPCError = class extends Error {
  static {
    __name(this, "TRPCError");
  }
  constructor(opts) {
    var _ref, _opts$message, _this$cause;
    const cause = getCauseFromUnknown(opts.cause);
    const message = (_ref = (_opts$message = opts.message) !== null && _opts$message !== void 0 ? _opts$message : cause === null || cause === void 0 ? void 0 : cause.message) !== null && _ref !== void 0 ? _ref : opts.code;
    super(message, { cause });
    (0, import_defineProperty.default)(this, "cause", void 0);
    (0, import_defineProperty.default)(this, "code", void 0);
    this.code = opts.code;
    this.name = "TRPCError";
    (_this$cause = this.cause) !== null && _this$cause !== void 0 || (this.cause = cause);
  }
};
var import_objectSpread2$1 = __toESM2(require_objectSpread2(), 1);
function getDataTransformer(transformer) {
  if ("input" in transformer) return transformer;
  return {
    input: transformer,
    output: transformer
  };
}
__name(getDataTransformer, "getDataTransformer");
var defaultTransformer = {
  input: {
    serialize: /* @__PURE__ */ __name((obj) => obj, "serialize"),
    deserialize: /* @__PURE__ */ __name((obj) => obj, "deserialize")
  },
  output: {
    serialize: /* @__PURE__ */ __name((obj) => obj, "serialize"),
    deserialize: /* @__PURE__ */ __name((obj) => obj, "deserialize")
  }
};
function transformTRPCResponseItem(config2, item) {
  if ("error" in item) return (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, item), {}, { error: config2.transformer.output.serialize(item.error) });
  if ("data" in item.result) return (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, item), {}, { result: (0, import_objectSpread2$1.default)((0, import_objectSpread2$1.default)({}, item.result), {}, { data: config2.transformer.output.serialize(item.result.data) }) });
  return item;
}
__name(transformTRPCResponseItem, "transformTRPCResponseItem");
function transformTRPCResponse(config2, itemOrItems) {
  return Array.isArray(itemOrItems) ? itemOrItems.map((item) => transformTRPCResponseItem(config2, item)) : transformTRPCResponseItem(config2, itemOrItems);
}
__name(transformTRPCResponse, "transformTRPCResponse");
var import_objectSpread22 = __toESM2(require_objectSpread2(), 1);
var lazyMarker = "lazyMarker";
function once(fn2) {
  const uncalled = Symbol();
  let result = uncalled;
  return () => {
    if (result === uncalled) result = fn2();
    return result;
  };
}
__name(once, "once");
function isLazy(input) {
  return typeof input === "function" && lazyMarker in input;
}
__name(isLazy, "isLazy");
function isRouter(value) {
  return isObject(value) && isObject(value["_def"]) && "router" in value["_def"];
}
__name(isRouter, "isRouter");
var emptyRouter = {
  _ctx: null,
  _errorShape: null,
  _meta: null,
  queries: {},
  mutations: {},
  subscriptions: {},
  errorFormatter: defaultFormatter,
  transformer: defaultTransformer
};
var reservedWords = [
  "then",
  "call",
  "apply"
];
function createRouterFactory(config2) {
  function createRouterInner(input) {
    const reservedWordsUsed = new Set(Object.keys(input).filter((v) => reservedWords.includes(v)));
    if (reservedWordsUsed.size > 0) throw new Error("Reserved words used in `router({})` call: " + Array.from(reservedWordsUsed).join(", "));
    const procedures = omitPrototype({});
    const lazy$1 = omitPrototype({});
    function createLazyLoader(opts) {
      return {
        ref: opts.ref,
        load: once(async () => {
          const router$1 = await opts.ref();
          const lazyPath = [...opts.path, opts.key];
          const lazyKey = lazyPath.join(".");
          opts.aggregate[opts.key] = step(router$1._def.record, lazyPath);
          delete lazy$1[lazyKey];
          for (const [nestedKey, nestedItem] of Object.entries(router$1._def.lazy)) {
            const nestedRouterKey = [...lazyPath, nestedKey].join(".");
            lazy$1[nestedRouterKey] = createLazyLoader({
              ref: nestedItem.ref,
              path: lazyPath,
              key: nestedKey,
              aggregate: opts.aggregate[opts.key]
            });
          }
        })
      };
    }
    __name(createLazyLoader, "createLazyLoader");
    function step(from, path = []) {
      const aggregate = omitPrototype({});
      for (const [key, item] of Object.entries(from !== null && from !== void 0 ? from : {})) {
        if (isLazy(item)) {
          lazy$1[[...path, key].join(".")] = createLazyLoader({
            path,
            ref: item,
            key,
            aggregate
          });
          continue;
        }
        if (isRouter(item)) {
          aggregate[key] = step(item._def.record, [...path, key]);
          continue;
        }
        if (!isProcedure(item)) {
          aggregate[key] = step(item, [...path, key]);
          continue;
        }
        const newPath = [...path, key].join(".");
        if (procedures[newPath]) throw new Error(`Duplicate key: ${newPath}`);
        procedures[newPath] = item;
        aggregate[key] = item;
      }
      return aggregate;
    }
    __name(step, "step");
    const record = step(input);
    const _def = (0, import_objectSpread22.default)((0, import_objectSpread22.default)({
      _config: config2,
      router: true,
      procedures,
      lazy: lazy$1
    }, emptyRouter), {}, { record });
    const router2 = (0, import_objectSpread22.default)((0, import_objectSpread22.default)({}, record), {}, {
      _def,
      createCaller: createCallerFactory()({ _def })
    });
    return router2;
  }
  __name(createRouterInner, "createRouterInner");
  return createRouterInner;
}
__name(createRouterFactory, "createRouterFactory");
function isProcedure(procedureOrRouter) {
  return typeof procedureOrRouter === "function";
}
__name(isProcedure, "isProcedure");
async function getProcedureAtPath(router2, path) {
  const { _def } = router2;
  let procedure = _def.procedures[path];
  while (!procedure) {
    const key = Object.keys(_def.lazy).find((key$1) => path.startsWith(key$1));
    if (!key) return null;
    const lazyRouter = _def.lazy[key];
    await lazyRouter.load();
    procedure = _def.procedures[path];
  }
  return procedure;
}
__name(getProcedureAtPath, "getProcedureAtPath");
function createCallerFactory() {
  return /* @__PURE__ */ __name(function createCallerInner(router2) {
    const { _def } = router2;
    return /* @__PURE__ */ __name(function createCaller(ctxOrCallback, opts) {
      return createRecursiveProxy(async (innerOpts) => {
        const { path, args } = innerOpts;
        const fullPath = path.join(".");
        if (path.length === 1 && path[0] === "_def") return _def;
        const procedure = await getProcedureAtPath(router2, fullPath);
        let ctx = void 0;
        try {
          if (!procedure) throw new TRPCError({
            code: "NOT_FOUND",
            message: `No procedure found on path "${path}"`
          });
          ctx = isFunction(ctxOrCallback) ? await Promise.resolve(ctxOrCallback()) : ctxOrCallback;
          return await procedure({
            path: fullPath,
            getRawInput: /* @__PURE__ */ __name(async () => args[0], "getRawInput"),
            ctx,
            type: procedure._def.type,
            signal: opts === null || opts === void 0 ? void 0 : opts.signal
          });
        } catch (cause) {
          var _opts$onError, _procedure$_def$type;
          opts === null || opts === void 0 || (_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, {
            ctx,
            error: getTRPCErrorFromUnknown(cause),
            input: args[0],
            path: fullPath,
            type: (_procedure$_def$type = procedure === null || procedure === void 0 ? void 0 : procedure._def.type) !== null && _procedure$_def$type !== void 0 ? _procedure$_def$type : "unknown"
          });
          throw cause;
        }
      });
    }, "createCaller");
  }, "createCallerInner");
}
__name(createCallerFactory, "createCallerFactory");
function mergeRouters(...routerList) {
  var _routerList$;
  const record = mergeWithoutOverrides({}, ...routerList.map((r) => r._def.record));
  const errorFormatter = routerList.reduce((currentErrorFormatter, nextRouter) => {
    if (nextRouter._def._config.errorFormatter && nextRouter._def._config.errorFormatter !== defaultFormatter) {
      if (currentErrorFormatter !== defaultFormatter && currentErrorFormatter !== nextRouter._def._config.errorFormatter) throw new Error("You seem to have several error formatters");
      return nextRouter._def._config.errorFormatter;
    }
    return currentErrorFormatter;
  }, defaultFormatter);
  const transformer = routerList.reduce((prev, current) => {
    if (current._def._config.transformer && current._def._config.transformer !== defaultTransformer) {
      if (prev !== defaultTransformer && prev !== current._def._config.transformer) throw new Error("You seem to have several transformers");
      return current._def._config.transformer;
    }
    return prev;
  }, defaultTransformer);
  const router2 = createRouterFactory({
    errorFormatter,
    transformer,
    isDev: routerList.every((r) => r._def._config.isDev),
    allowOutsideOfServer: routerList.every((r) => r._def._config.allowOutsideOfServer),
    isServer: routerList.every((r) => r._def._config.isServer),
    $types: (_routerList$ = routerList[0]) === null || _routerList$ === void 0 ? void 0 : _routerList$._def._config.$types
  })(record);
  return router2;
}
__name(mergeRouters, "mergeRouters");
var trackedSymbol = Symbol();
function isTrackedEnvelope(value) {
  return Array.isArray(value) && value[2] === trackedSymbol;
}
__name(isTrackedEnvelope, "isTrackedEnvelope");

// ../../node_modules/.pnpm/@trpc+server@11.5.1_typescript@5.9.2/node_modules/@trpc/server/dist/observable-UMO3vUa_.mjs
function isObservable(x2) {
  return typeof x2 === "object" && x2 !== null && "subscribe" in x2;
}
__name(isObservable, "isObservable");
function observableToReadableStream(observable$1, signal) {
  let unsub = null;
  const onAbort = /* @__PURE__ */ __name(() => {
    unsub === null || unsub === void 0 || unsub.unsubscribe();
    unsub = null;
    signal.removeEventListener("abort", onAbort);
  }, "onAbort");
  return new ReadableStream({
    start(controller) {
      unsub = observable$1.subscribe({
        next(data) {
          controller.enqueue({
            ok: true,
            value: data
          });
        },
        error(error) {
          controller.enqueue({
            ok: false,
            error
          });
          controller.close();
        },
        complete() {
          controller.close();
        }
      });
      if (signal.aborted) onAbort();
      else signal.addEventListener("abort", onAbort, { once: true });
    },
    cancel() {
      onAbort();
    }
  });
}
__name(observableToReadableStream, "observableToReadableStream");
function observableToAsyncIterable(observable$1, signal) {
  const stream = observableToReadableStream(observable$1, signal);
  const reader = stream.getReader();
  const iterator = {
    async next() {
      const value = await reader.read();
      if (value.done) return {
        value: void 0,
        done: true
      };
      const { value: result } = value;
      if (!result.ok) throw result.error;
      return {
        value: result.value,
        done: false
      };
    },
    async return() {
      await reader.cancel();
      return {
        value: void 0,
        done: true
      };
    }
  };
  return { [Symbol.asyncIterator]() {
    return iterator;
  } };
}
__name(observableToAsyncIterable, "observableToAsyncIterable");

// ../../node_modules/.pnpm/@trpc+server@11.5.1_typescript@5.9.2/node_modules/@trpc/server/dist/resolveResponse-BIvy2tOI.mjs
function parseConnectionParamsFromUnknown(parsed) {
  try {
    if (parsed === null) return null;
    if (!isObject(parsed)) throw new Error("Expected object");
    const nonStringValues = Object.entries(parsed).filter(([_key2, value]) => typeof value !== "string");
    if (nonStringValues.length > 0) throw new Error(`Expected connectionParams to be string values. Got ${nonStringValues.map(([key, value]) => `${key}: ${typeof value}`).join(", ")}`);
    return parsed;
  } catch (cause) {
    throw new TRPCError({
      code: "PARSE_ERROR",
      message: "Invalid connection params shape",
      cause
    });
  }
}
__name(parseConnectionParamsFromUnknown, "parseConnectionParamsFromUnknown");
function parseConnectionParamsFromString(str) {
  let parsed;
  try {
    parsed = JSON.parse(str);
  } catch (cause) {
    throw new TRPCError({
      code: "PARSE_ERROR",
      message: "Not JSON-parsable query params",
      cause
    });
  }
  return parseConnectionParamsFromUnknown(parsed);
}
__name(parseConnectionParamsFromString, "parseConnectionParamsFromString");
var import_objectSpread2$12 = __toESM2(require_objectSpread2(), 1);
function memo(fn2) {
  let promise = null;
  const sym = Symbol.for("@trpc/server/http/memo");
  let value = sym;
  return {
    read: /* @__PURE__ */ __name(async () => {
      var _promise;
      if (value !== sym) return value;
      (_promise = promise) !== null && _promise !== void 0 || (promise = fn2().catch((cause) => {
        if (cause instanceof TRPCError) throw cause;
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: cause instanceof Error ? cause.message : "Invalid input",
          cause
        });
      }));
      value = await promise;
      promise = null;
      return value;
    }, "read"),
    result: /* @__PURE__ */ __name(() => {
      return value !== sym ? value : void 0;
    }, "result")
  };
}
__name(memo, "memo");
var jsonContentTypeHandler = {
  isMatch(req) {
    var _req$headers$get;
    return !!((_req$headers$get = req.headers.get("content-type")) === null || _req$headers$get === void 0 ? void 0 : _req$headers$get.startsWith("application/json"));
  },
  async parse(opts) {
    var _types$values$next$va;
    const { req } = opts;
    const isBatchCall = opts.searchParams.get("batch") === "1";
    const paths = isBatchCall ? opts.path.split(",") : [opts.path];
    const getInputs = memo(async () => {
      let inputs = void 0;
      if (req.method === "GET") {
        const queryInput = opts.searchParams.get("input");
        if (queryInput) inputs = JSON.parse(queryInput);
      } else inputs = await req.json();
      if (inputs === void 0) return {};
      if (!isBatchCall) return { 0: opts.router._def._config.transformer.input.deserialize(inputs) };
      if (!isObject(inputs)) throw new TRPCError({
        code: "BAD_REQUEST",
        message: '"input" needs to be an object when doing a batch call'
      });
      const acc = {};
      for (const index of paths.keys()) {
        const input = inputs[index];
        if (input !== void 0) acc[index] = opts.router._def._config.transformer.input.deserialize(input);
      }
      return acc;
    });
    const calls = await Promise.all(paths.map(async (path, index) => {
      const procedure = await getProcedureAtPath(opts.router, path);
      return {
        path,
        procedure,
        getRawInput: /* @__PURE__ */ __name(async () => {
          const inputs = await getInputs.read();
          let input = inputs[index];
          if ((procedure === null || procedure === void 0 ? void 0 : procedure._def.type) === "subscription") {
            var _ref, _opts$headers$get;
            const lastEventId = (_ref = (_opts$headers$get = opts.headers.get("last-event-id")) !== null && _opts$headers$get !== void 0 ? _opts$headers$get : opts.searchParams.get("lastEventId")) !== null && _ref !== void 0 ? _ref : opts.searchParams.get("Last-Event-Id");
            if (lastEventId) if (isObject(input)) input = (0, import_objectSpread2$12.default)((0, import_objectSpread2$12.default)({}, input), {}, { lastEventId });
            else {
              var _input;
              (_input = input) !== null && _input !== void 0 || (input = { lastEventId });
            }
          }
          return input;
        }, "getRawInput"),
        result: /* @__PURE__ */ __name(() => {
          var _getInputs$result;
          return (_getInputs$result = getInputs.result()) === null || _getInputs$result === void 0 ? void 0 : _getInputs$result[index];
        }, "result")
      };
    }));
    const types = new Set(calls.map((call) => {
      var _call$procedure;
      return (_call$procedure = call.procedure) === null || _call$procedure === void 0 ? void 0 : _call$procedure._def.type;
    }).filter(Boolean));
    if (types.size > 1) throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Cannot mix procedure types in call: ${Array.from(types).join(", ")}`
    });
    const type = (_types$values$next$va = types.values().next().value) !== null && _types$values$next$va !== void 0 ? _types$values$next$va : "unknown";
    const connectionParamsStr = opts.searchParams.get("connectionParams");
    const info = {
      isBatchCall,
      accept: req.headers.get("trpc-accept"),
      calls,
      type,
      connectionParams: connectionParamsStr === null ? null : parseConnectionParamsFromString(connectionParamsStr),
      signal: req.signal,
      url: opts.url
    };
    return info;
  }
};
var formDataContentTypeHandler = {
  isMatch(req) {
    var _req$headers$get2;
    return !!((_req$headers$get2 = req.headers.get("content-type")) === null || _req$headers$get2 === void 0 ? void 0 : _req$headers$get2.startsWith("multipart/form-data"));
  },
  async parse(opts) {
    const { req } = opts;
    if (req.method !== "POST") throw new TRPCError({
      code: "METHOD_NOT_SUPPORTED",
      message: "Only POST requests are supported for multipart/form-data requests"
    });
    const getInputs = memo(async () => {
      const fd2 = await req.formData();
      return fd2;
    });
    const procedure = await getProcedureAtPath(opts.router, opts.path);
    return {
      accept: null,
      calls: [{
        path: opts.path,
        getRawInput: getInputs.read,
        result: getInputs.result,
        procedure
      }],
      isBatchCall: false,
      type: "mutation",
      connectionParams: null,
      signal: req.signal,
      url: opts.url
    };
  }
};
var octetStreamContentTypeHandler = {
  isMatch(req) {
    var _req$headers$get3;
    return !!((_req$headers$get3 = req.headers.get("content-type")) === null || _req$headers$get3 === void 0 ? void 0 : _req$headers$get3.startsWith("application/octet-stream"));
  },
  async parse(opts) {
    const { req } = opts;
    if (req.method !== "POST") throw new TRPCError({
      code: "METHOD_NOT_SUPPORTED",
      message: "Only POST requests are supported for application/octet-stream requests"
    });
    const getInputs = memo(async () => {
      return req.body;
    });
    return {
      calls: [{
        path: opts.path,
        getRawInput: getInputs.read,
        result: getInputs.result,
        procedure: await getProcedureAtPath(opts.router, opts.path)
      }],
      isBatchCall: false,
      accept: null,
      type: "mutation",
      connectionParams: null,
      signal: req.signal,
      url: opts.url
    };
  }
};
var handlers = [
  jsonContentTypeHandler,
  formDataContentTypeHandler,
  octetStreamContentTypeHandler
];
function getContentTypeHandler(req) {
  const handler2 = handlers.find((handler$1) => handler$1.isMatch(req));
  if (handler2) return handler2;
  if (!handler2 && req.method === "GET") return jsonContentTypeHandler;
  throw new TRPCError({
    code: "UNSUPPORTED_MEDIA_TYPE",
    message: req.headers.has("content-type") ? `Unsupported content-type "${req.headers.get("content-type")}` : "Missing content-type header"
  });
}
__name(getContentTypeHandler, "getContentTypeHandler");
async function getRequestInfo(opts) {
  const handler2 = getContentTypeHandler(opts.req);
  return await handler2.parse(opts);
}
__name(getRequestInfo, "getRequestInfo");
function isAbortError(error) {
  return isObject(error) && error["name"] === "AbortError";
}
__name(isAbortError, "isAbortError");
function throwAbortError(message = "AbortError") {
  throw new DOMException(message, "AbortError");
}
__name(throwAbortError, "throwAbortError");
function isObject$1(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
__name(isObject$1, "isObject$1");
function isPlainObject(o) {
  var ctor, prot;
  if (isObject$1(o) === false) return false;
  ctor = o.constructor;
  if (ctor === void 0) return true;
  prot = ctor.prototype;
  if (isObject$1(prot) === false) return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) return false;
  return true;
}
__name(isPlainObject, "isPlainObject");
var import_defineProperty2 = __toESM2(require_defineProperty(), 1);
var _Symbol$toStringTag;
var subscribableCache = /* @__PURE__ */ new WeakMap();
var NOOP = /* @__PURE__ */ __name(() => {
}, "NOOP");
_Symbol$toStringTag = Symbol.toStringTag;
var Unpromise = class Unpromise2 {
  static {
    __name(this, "Unpromise");
  }
  constructor(arg) {
    (0, import_defineProperty2.default)(this, "promise", void 0);
    (0, import_defineProperty2.default)(this, "subscribers", []);
    (0, import_defineProperty2.default)(this, "settlement", null);
    (0, import_defineProperty2.default)(this, _Symbol$toStringTag, "Unpromise");
    if (typeof arg === "function") this.promise = new Promise(arg);
    else this.promise = arg;
    const thenReturn = this.promise.then((value) => {
      const { subscribers } = this;
      this.subscribers = null;
      this.settlement = {
        status: "fulfilled",
        value
      };
      subscribers === null || subscribers === void 0 || subscribers.forEach(({ resolve }) => {
        resolve(value);
      });
    });
    if ("catch" in thenReturn) thenReturn.catch((reason) => {
      const { subscribers } = this;
      this.subscribers = null;
      this.settlement = {
        status: "rejected",
        reason
      };
      subscribers === null || subscribers === void 0 || subscribers.forEach(({ reject }) => {
        reject(reason);
      });
    });
  }
  /** Create a promise that mitigates uncontrolled subscription to a long-lived
  * Promise via .then() and .catch() - otherwise a source of memory leaks.
  *
  * The returned promise has an `unsubscribe()` method which can be called when
  * the Promise is no longer being tracked by application logic, and which
  * ensures that there is no reference chain from the original promise to the
  * new one, and therefore no memory leak.
  *
  * If original promise has not yet settled, this adds a new unique promise
  * that listens to then/catch events, along with an `unsubscribe()` method to
  * detach it.
  *
  * If original promise has settled, then creates a new Promise.resolve() or
  * Promise.reject() and provided unsubscribe is a noop.
  *
  * If you call `unsubscribe()` before the returned Promise has settled, it
  * will never settle.
  */
  subscribe() {
    let promise;
    let unsubscribe;
    const { settlement } = this;
    if (settlement === null) {
      if (this.subscribers === null) throw new Error("Unpromise settled but still has subscribers");
      const subscriber = withResolvers();
      this.subscribers = listWithMember(this.subscribers, subscriber);
      promise = subscriber.promise;
      unsubscribe = /* @__PURE__ */ __name(() => {
        if (this.subscribers !== null) this.subscribers = listWithoutMember(this.subscribers, subscriber);
      }, "unsubscribe");
    } else {
      const { status } = settlement;
      if (status === "fulfilled") promise = Promise.resolve(settlement.value);
      else promise = Promise.reject(settlement.reason);
      unsubscribe = NOOP;
    }
    return Object.assign(promise, { unsubscribe });
  }
  /** STANDARD PROMISE METHODS (but returning a SubscribedPromise) */
  then(onfulfilled, onrejected) {
    const subscribed = this.subscribe();
    const { unsubscribe } = subscribed;
    return Object.assign(subscribed.then(onfulfilled, onrejected), { unsubscribe });
  }
  catch(onrejected) {
    const subscribed = this.subscribe();
    const { unsubscribe } = subscribed;
    return Object.assign(subscribed.catch(onrejected), { unsubscribe });
  }
  finally(onfinally) {
    const subscribed = this.subscribe();
    const { unsubscribe } = subscribed;
    return Object.assign(subscribed.finally(onfinally), { unsubscribe });
  }
  /** Unpromise STATIC METHODS */
  /** Create or Retrieve the proxy Unpromise (a re-used Unpromise for the VM lifetime
  * of the provided Promise reference) */
  static proxy(promise) {
    const cached = Unpromise2.getSubscribablePromise(promise);
    return typeof cached !== "undefined" ? cached : Unpromise2.createSubscribablePromise(promise);
  }
  /** Create and store an Unpromise keyed by an original Promise. */
  static createSubscribablePromise(promise) {
    const created = new Unpromise2(promise);
    subscribableCache.set(promise, created);
    subscribableCache.set(created, created);
    return created;
  }
  /** Retrieve a previously-created Unpromise keyed by an original Promise. */
  static getSubscribablePromise(promise) {
    return subscribableCache.get(promise);
  }
  /** Promise STATIC METHODS */
  /** Lookup the Unpromise for this promise, and derive a SubscribedPromise from
  * it (that can be later unsubscribed to eliminate Memory leaks) */
  static resolve(value) {
    const promise = typeof value === "object" && value !== null && "then" in value && typeof value.then === "function" ? value : Promise.resolve(value);
    return Unpromise2.proxy(promise).subscribe();
  }
  static async any(values) {
    const valuesArray = Array.isArray(values) ? values : [...values];
    const subscribedPromises = valuesArray.map(Unpromise2.resolve);
    try {
      return await Promise.any(subscribedPromises);
    } finally {
      subscribedPromises.forEach(({ unsubscribe }) => {
        unsubscribe();
      });
    }
  }
  static async race(values) {
    const valuesArray = Array.isArray(values) ? values : [...values];
    const subscribedPromises = valuesArray.map(Unpromise2.resolve);
    try {
      return await Promise.race(subscribedPromises);
    } finally {
      subscribedPromises.forEach(({ unsubscribe }) => {
        unsubscribe();
      });
    }
  }
  /** Create a race of SubscribedPromises that will fulfil to a single winning
  * Promise (in a 1-Tuple). Eliminates memory leaks from long-lived promises
  * accumulating .then() and .catch() subscribers. Allows simple logic to
  * consume the result, like...
  * ```ts
  * const [ winner ] = await Unpromise.race([ promiseA, promiseB ]);
  * if(winner === promiseB){
  *   const result = await promiseB;
  *   // do the thing
  * }
  * ```
  * */
  static async raceReferences(promises) {
    const selfPromises = promises.map(resolveSelfTuple);
    try {
      return await Promise.race(selfPromises);
    } finally {
      for (const promise of selfPromises) promise.unsubscribe();
    }
  }
};
function resolveSelfTuple(promise) {
  return Unpromise.proxy(promise).then(() => [promise]);
}
__name(resolveSelfTuple, "resolveSelfTuple");
function withResolvers() {
  let resolve;
  let reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  return {
    promise,
    resolve,
    reject
  };
}
__name(withResolvers, "withResolvers");
function listWithMember(arr, member) {
  return [...arr, member];
}
__name(listWithMember, "listWithMember");
function listWithoutIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
__name(listWithoutIndex, "listWithoutIndex");
function listWithoutMember(arr, member) {
  const index = arr.indexOf(member);
  if (index !== -1) return listWithoutIndex(arr, index);
  return arr;
}
__name(listWithoutMember, "listWithoutMember");
var _Symbol;
var _Symbol$dispose;
var _Symbol2;
var _Symbol2$asyncDispose;
(_Symbol$dispose = (_Symbol = Symbol).dispose) !== null && _Symbol$dispose !== void 0 || (_Symbol.dispose = Symbol());
(_Symbol2$asyncDispose = (_Symbol2 = Symbol).asyncDispose) !== null && _Symbol2$asyncDispose !== void 0 || (_Symbol2.asyncDispose = Symbol());
function makeResource(thing, dispose) {
  const it2 = thing;
  const existing = it2[Symbol.dispose];
  it2[Symbol.dispose] = () => {
    dispose();
    existing === null || existing === void 0 || existing();
  };
  return it2;
}
__name(makeResource, "makeResource");
function makeAsyncResource(thing, dispose) {
  const it2 = thing;
  const existing = it2[Symbol.asyncDispose];
  it2[Symbol.asyncDispose] = async () => {
    await dispose();
    await (existing === null || existing === void 0 ? void 0 : existing());
  };
  return it2;
}
__name(makeAsyncResource, "makeAsyncResource");
var disposablePromiseTimerResult = Symbol();
function timerResource(ms) {
  let timer = null;
  return makeResource({ start() {
    if (timer) throw new Error("Timer already started");
    const promise = new Promise((resolve) => {
      timer = setTimeout(() => resolve(disposablePromiseTimerResult), ms);
    });
    return promise;
  } }, () => {
    if (timer) clearTimeout(timer);
  });
}
__name(timerResource, "timerResource");
var require_usingCtx = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/usingCtx.js"(exports2, module2) {
  function _usingCtx() {
    var r = "function" == typeof SuppressedError ? SuppressedError : function(r$1, e$1) {
      var n$1 = Error();
      return n$1.name = "SuppressedError", n$1.error = r$1, n$1.suppressed = e$1, n$1;
    }, e = {}, n = [];
    function using(r$1, e$1) {
      if (null != e$1) {
        if (Object(e$1) !== e$1) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
        if (r$1) var o = e$1[Symbol.asyncDispose || Symbol["for"]("Symbol.asyncDispose")];
        if (void 0 === o && (o = e$1[Symbol.dispose || Symbol["for"]("Symbol.dispose")], r$1)) var t2 = o;
        if ("function" != typeof o) throw new TypeError("Object is not disposable.");
        t2 && (o = /* @__PURE__ */ __name(function o$1() {
          try {
            t2.call(e$1);
          } catch (r$2) {
            return Promise.reject(r$2);
          }
        }, "o$1")), n.push({
          v: e$1,
          d: o,
          a: r$1
        });
      } else r$1 && n.push({
        d: e$1,
        a: r$1
      });
      return e$1;
    }
    __name(using, "using");
    return {
      e,
      u: using.bind(null, false),
      a: using.bind(null, true),
      d: /* @__PURE__ */ __name(function d() {
        var o, t2 = this.e, s = 0;
        function next() {
          for (; o = n.pop(); ) try {
            if (!o.a && 1 === s) return s = 0, n.push(o), Promise.resolve().then(next);
            if (o.d) {
              var r$1 = o.d.call(o.v);
              if (o.a) return s |= 2, Promise.resolve(r$1).then(next, err);
            } else s |= 1;
          } catch (r$2) {
            return err(r$2);
          }
          if (1 === s) return t2 !== e ? Promise.reject(t2) : Promise.resolve();
          if (t2 !== e) throw t2;
        }
        __name(next, "next");
        function err(n$1) {
          return t2 = t2 !== e ? new r(n$1, t2) : n$1, next();
        }
        __name(err, "err");
        return next();
      }, "d")
    };
  }
  __name(_usingCtx, "_usingCtx");
  module2.exports = _usingCtx, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var require_OverloadYield = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/OverloadYield.js"(exports2, module2) {
  function _OverloadYield(e, d) {
    this.v = e, this.k = d;
  }
  __name(_OverloadYield, "_OverloadYield");
  module2.exports = _OverloadYield, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var require_awaitAsyncGenerator = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js"(exports2, module2) {
  var OverloadYield$2 = require_OverloadYield();
  function _awaitAsyncGenerator$5(e) {
    return new OverloadYield$2(e, 0);
  }
  __name(_awaitAsyncGenerator$5, "_awaitAsyncGenerator$5");
  module2.exports = _awaitAsyncGenerator$5, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var require_wrapAsyncGenerator = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js"(exports2, module2) {
  var OverloadYield$1 = require_OverloadYield();
  function _wrapAsyncGenerator$6(e) {
    return function() {
      return new AsyncGenerator(e.apply(this, arguments));
    };
  }
  __name(_wrapAsyncGenerator$6, "_wrapAsyncGenerator$6");
  function AsyncGenerator(e) {
    var r, t2;
    function resume(r$1, t$1) {
      try {
        var n = e[r$1](t$1), o = n.value, u = o instanceof OverloadYield$1;
        Promise.resolve(u ? o.v : o).then(function(t$2) {
          if (u) {
            var i = "return" === r$1 ? "return" : "next";
            if (!o.k || t$2.done) return resume(i, t$2);
            t$2 = e[i](t$2).value;
          }
          settle(n.done ? "return" : "normal", t$2);
        }, function(e$1) {
          resume("throw", e$1);
        });
      } catch (e$1) {
        settle("throw", e$1);
      }
    }
    __name(resume, "resume");
    function settle(e$1, n) {
      switch (e$1) {
        case "return":
          r.resolve({
            value: n,
            done: true
          });
          break;
        case "throw":
          r.reject(n);
          break;
        default:
          r.resolve({
            value: n,
            done: false
          });
      }
      (r = r.next) ? resume(r.key, r.arg) : t2 = null;
    }
    __name(settle, "settle");
    this._invoke = function(e$1, n) {
      return new Promise(function(o, u) {
        var i = {
          key: e$1,
          arg: n,
          resolve: o,
          reject: u,
          next: null
        };
        t2 ? t2 = t2.next = i : (r = t2 = i, resume(e$1, n));
      });
    }, "function" != typeof e["return"] && (this["return"] = void 0);
  }
  __name(AsyncGenerator, "AsyncGenerator");
  AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
    return this;
  }, AsyncGenerator.prototype.next = function(e) {
    return this._invoke("next", e);
  }, AsyncGenerator.prototype["throw"] = function(e) {
    return this._invoke("throw", e);
  }, AsyncGenerator.prototype["return"] = function(e) {
    return this._invoke("return", e);
  };
  module2.exports = _wrapAsyncGenerator$6, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var import_usingCtx$4 = __toESM2(require_usingCtx(), 1);
var import_awaitAsyncGenerator$4 = __toESM2(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$5 = __toESM2(require_wrapAsyncGenerator(), 1);
function iteratorResource(iterable) {
  const iterator = iterable[Symbol.asyncIterator]();
  if (iterator[Symbol.asyncDispose]) return iterator;
  return makeAsyncResource(iterator, async () => {
    var _iterator$return;
    await ((_iterator$return = iterator.return) === null || _iterator$return === void 0 ? void 0 : _iterator$return.call(iterator));
  });
}
__name(iteratorResource, "iteratorResource");
function withMaxDuration(_x, _x2) {
  return _withMaxDuration.apply(this, arguments);
}
__name(withMaxDuration, "withMaxDuration");
function _withMaxDuration() {
  _withMaxDuration = (0, import_wrapAsyncGenerator$5.default)(function* (iterable, opts) {
    try {
      var _usingCtx$1 = (0, import_usingCtx$4.default)();
      const iterator = _usingCtx$1.a(iteratorResource(iterable));
      const timer = _usingCtx$1.u(timerResource(opts.maxDurationMs));
      const timerPromise = timer.start();
      let result;
      while (true) {
        result = yield (0, import_awaitAsyncGenerator$4.default)(Unpromise.race([iterator.next(), timerPromise]));
        if (result === disposablePromiseTimerResult) throwAbortError();
        if (result.done) return result;
        yield result.value;
        result = null;
      }
    } catch (_) {
      _usingCtx$1.e = _;
    } finally {
      yield (0, import_awaitAsyncGenerator$4.default)(_usingCtx$1.d());
    }
  });
  return _withMaxDuration.apply(this, arguments);
}
__name(_withMaxDuration, "_withMaxDuration");
function takeWithGrace(_x3, _x4) {
  return _takeWithGrace.apply(this, arguments);
}
__name(takeWithGrace, "takeWithGrace");
function _takeWithGrace() {
  _takeWithGrace = (0, import_wrapAsyncGenerator$5.default)(function* (iterable, opts) {
    try {
      var _usingCtx3 = (0, import_usingCtx$4.default)();
      const iterator = _usingCtx3.a(iteratorResource(iterable));
      let result;
      const timer = _usingCtx3.u(timerResource(opts.gracePeriodMs));
      let count = opts.count;
      let timerPromise = new Promise(() => {
      });
      while (true) {
        result = yield (0, import_awaitAsyncGenerator$4.default)(Unpromise.race([iterator.next(), timerPromise]));
        if (result === disposablePromiseTimerResult) throwAbortError();
        if (result.done) return result.value;
        yield result.value;
        if (--count === 0) timerPromise = timer.start();
        result = null;
      }
    } catch (_) {
      _usingCtx3.e = _;
    } finally {
      yield (0, import_awaitAsyncGenerator$4.default)(_usingCtx3.d());
    }
  });
  return _takeWithGrace.apply(this, arguments);
}
__name(_takeWithGrace, "_takeWithGrace");
function createDeferred() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return {
    promise,
    resolve,
    reject
  };
}
__name(createDeferred, "createDeferred");
var import_usingCtx$3 = __toESM2(require_usingCtx(), 1);
var import_awaitAsyncGenerator$3 = __toESM2(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$4 = __toESM2(require_wrapAsyncGenerator(), 1);
function createManagedIterator(iterable, onResult) {
  const iterator = iterable[Symbol.asyncIterator]();
  let state = "idle";
  function cleanup() {
    state = "done";
    onResult = /* @__PURE__ */ __name(() => {
    }, "onResult");
  }
  __name(cleanup, "cleanup");
  function pull() {
    if (state !== "idle") return;
    state = "pending";
    const next = iterator.next();
    next.then((result) => {
      if (result.done) {
        state = "done";
        onResult({
          status: "return",
          value: result.value
        });
        cleanup();
        return;
      }
      state = "idle";
      onResult({
        status: "yield",
        value: result.value
      });
    }).catch((cause) => {
      onResult({
        status: "error",
        error: cause
      });
      cleanup();
    });
  }
  __name(pull, "pull");
  return {
    pull,
    destroy: /* @__PURE__ */ __name(async () => {
      var _iterator$return;
      cleanup();
      await ((_iterator$return = iterator.return) === null || _iterator$return === void 0 ? void 0 : _iterator$return.call(iterator));
    }, "destroy")
  };
}
__name(createManagedIterator, "createManagedIterator");
function mergeAsyncIterables() {
  let state = "idle";
  let flushSignal = createDeferred();
  const iterables = [];
  const iterators = /* @__PURE__ */ new Set();
  const buffer = [];
  function initIterable(iterable) {
    if (state !== "pending") return;
    const iterator = createManagedIterator(iterable, (result) => {
      if (state !== "pending") return;
      switch (result.status) {
        case "yield":
          buffer.push([iterator, result]);
          break;
        case "return":
          iterators.delete(iterator);
          break;
        case "error":
          buffer.push([iterator, result]);
          iterators.delete(iterator);
          break;
      }
      flushSignal.resolve();
    });
    iterators.add(iterator);
    iterator.pull();
  }
  __name(initIterable, "initIterable");
  return {
    add(iterable) {
      switch (state) {
        case "idle":
          iterables.push(iterable);
          break;
        case "pending":
          initIterable(iterable);
          break;
        case "done":
          break;
      }
    },
    [Symbol.asyncIterator]() {
      return (0, import_wrapAsyncGenerator$4.default)(function* () {
        try {
          var _usingCtx$1 = (0, import_usingCtx$3.default)();
          if (state !== "idle") throw new Error("Cannot iterate twice");
          state = "pending";
          const _finally = _usingCtx$1.a(makeAsyncResource({}, async () => {
            state = "done";
            const errors = [];
            await Promise.all(Array.from(iterators.values()).map(async (it2) => {
              try {
                await it2.destroy();
              } catch (cause) {
                errors.push(cause);
              }
            }));
            buffer.length = 0;
            iterators.clear();
            flushSignal.resolve();
            if (errors.length > 0) throw new AggregateError(errors);
          }));
          while (iterables.length > 0) initIterable(iterables.shift());
          while (iterators.size > 0) {
            yield (0, import_awaitAsyncGenerator$3.default)(flushSignal.promise);
            while (buffer.length > 0) {
              const [iterator, result] = buffer.shift();
              switch (result.status) {
                case "yield":
                  yield result.value;
                  iterator.pull();
                  break;
                case "error":
                  throw result.error;
              }
            }
            flushSignal = createDeferred();
          }
        } catch (_) {
          _usingCtx$1.e = _;
        } finally {
          yield (0, import_awaitAsyncGenerator$3.default)(_usingCtx$1.d());
        }
      })();
    }
  };
}
__name(mergeAsyncIterables, "mergeAsyncIterables");
function readableStreamFrom(iterable) {
  const iterator = iterable[Symbol.asyncIterator]();
  return new ReadableStream({
    async cancel() {
      var _iterator$return;
      await ((_iterator$return = iterator.return) === null || _iterator$return === void 0 ? void 0 : _iterator$return.call(iterator));
    },
    async pull(controller) {
      const result = await iterator.next();
      if (result.done) {
        controller.close();
        return;
      }
      controller.enqueue(result.value);
    }
  });
}
__name(readableStreamFrom, "readableStreamFrom");
var import_usingCtx$2 = __toESM2(require_usingCtx(), 1);
var import_awaitAsyncGenerator$2 = __toESM2(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$3 = __toESM2(require_wrapAsyncGenerator(), 1);
var PING_SYM = Symbol("ping");
function withPing(_x, _x2) {
  return _withPing.apply(this, arguments);
}
__name(withPing, "withPing");
function _withPing() {
  _withPing = (0, import_wrapAsyncGenerator$3.default)(function* (iterable, pingIntervalMs) {
    try {
      var _usingCtx$1 = (0, import_usingCtx$2.default)();
      const iterator = _usingCtx$1.a(iteratorResource(iterable));
      let result;
      let nextPromise = iterator.next();
      while (true) try {
        var _usingCtx3 = (0, import_usingCtx$2.default)();
        const pingPromise = _usingCtx3.u(timerResource(pingIntervalMs));
        result = yield (0, import_awaitAsyncGenerator$2.default)(Unpromise.race([nextPromise, pingPromise.start()]));
        if (result === disposablePromiseTimerResult) {
          yield PING_SYM;
          continue;
        }
        if (result.done) return result.value;
        nextPromise = iterator.next();
        yield result.value;
        result = null;
      } catch (_) {
        _usingCtx3.e = _;
      } finally {
        _usingCtx3.d();
      }
    } catch (_) {
      _usingCtx$1.e = _;
    } finally {
      yield (0, import_awaitAsyncGenerator$2.default)(_usingCtx$1.d());
    }
  });
  return _withPing.apply(this, arguments);
}
__name(_withPing, "_withPing");
var require_asyncIterator = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(exports2, module2) {
  function _asyncIterator$2(r) {
    var n, t2, o, e = 2;
    for ("undefined" != typeof Symbol && (t2 = Symbol.asyncIterator, o = Symbol.iterator); e--; ) {
      if (t2 && null != (n = r[t2])) return n.call(r);
      if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
      t2 = "@@asyncIterator", o = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
  }
  __name(_asyncIterator$2, "_asyncIterator$2");
  function AsyncFromSyncIterator(r) {
    function AsyncFromSyncIteratorContinuation(r$1) {
      if (Object(r$1) !== r$1) return Promise.reject(new TypeError(r$1 + " is not an object."));
      var n = r$1.done;
      return Promise.resolve(r$1.value).then(function(r$2) {
        return {
          value: r$2,
          done: n
        };
      });
    }
    __name(AsyncFromSyncIteratorContinuation, "AsyncFromSyncIteratorContinuation");
    return AsyncFromSyncIterator = /* @__PURE__ */ __name(function AsyncFromSyncIterator$1(r$1) {
      this.s = r$1, this.n = r$1.next;
    }, "AsyncFromSyncIterator$1"), AsyncFromSyncIterator.prototype = {
      s: null,
      n: null,
      next: /* @__PURE__ */ __name(function next() {
        return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
      }, "next"),
      "return": /* @__PURE__ */ __name(function _return(r$1) {
        var n = this.s["return"];
        return void 0 === n ? Promise.resolve({
          value: r$1,
          done: true
        }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      }, "_return"),
      "throw": /* @__PURE__ */ __name(function _throw(r$1) {
        var n = this.s["return"];
        return void 0 === n ? Promise.reject(r$1) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
      }, "_throw")
    }, new AsyncFromSyncIterator(r);
  }
  __name(AsyncFromSyncIterator, "AsyncFromSyncIterator");
  module2.exports = _asyncIterator$2, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var import_awaitAsyncGenerator$1 = __toESM2(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$2 = __toESM2(require_wrapAsyncGenerator(), 1);
var import_usingCtx$1 = __toESM2(require_usingCtx(), 1);
var import_asyncIterator$1 = __toESM2(require_asyncIterator(), 1);
var CHUNK_VALUE_TYPE_PROMISE = 0;
var CHUNK_VALUE_TYPE_ASYNC_ITERABLE = 1;
var PROMISE_STATUS_FULFILLED = 0;
var PROMISE_STATUS_REJECTED = 1;
var ASYNC_ITERABLE_STATUS_RETURN = 0;
var ASYNC_ITERABLE_STATUS_YIELD = 1;
var ASYNC_ITERABLE_STATUS_ERROR = 2;
function isPromise(value) {
  return (isObject(value) || isFunction(value)) && typeof (value === null || value === void 0 ? void 0 : value["then"]) === "function" && typeof (value === null || value === void 0 ? void 0 : value["catch"]) === "function";
}
__name(isPromise, "isPromise");
var MaxDepthError = class extends Error {
  static {
    __name(this, "MaxDepthError");
  }
  constructor(path) {
    super("Max depth reached at path: " + path.join("."));
    this.path = path;
  }
};
function createBatchStreamProducer(_x3) {
  return _createBatchStreamProducer.apply(this, arguments);
}
__name(createBatchStreamProducer, "createBatchStreamProducer");
function _createBatchStreamProducer() {
  _createBatchStreamProducer = (0, import_wrapAsyncGenerator$2.default)(function* (opts) {
    const { data } = opts;
    let counter = 0;
    const placeholder = 0;
    const mergedIterables = mergeAsyncIterables();
    function registerAsync(callback) {
      const idx = counter++;
      const iterable$1 = callback(idx);
      mergedIterables.add(iterable$1);
      return idx;
    }
    __name(registerAsync, "registerAsync");
    function encodePromise(promise, path) {
      return registerAsync(/* @__PURE__ */ (function() {
        var _ref = (0, import_wrapAsyncGenerator$2.default)(function* (idx) {
          const error = checkMaxDepth(path);
          if (error) {
            promise.catch((cause) => {
              var _opts$onError;
              (_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, {
                error: cause,
                path
              });
            });
            promise = Promise.reject(error);
          }
          try {
            const next = yield (0, import_awaitAsyncGenerator$1.default)(promise);
            yield [
              idx,
              PROMISE_STATUS_FULFILLED,
              encode(next, path)
            ];
          } catch (cause) {
            var _opts$onError2, _opts$formatError;
            (_opts$onError2 = opts.onError) === null || _opts$onError2 === void 0 || _opts$onError2.call(opts, {
              error: cause,
              path
            });
            yield [
              idx,
              PROMISE_STATUS_REJECTED,
              (_opts$formatError = opts.formatError) === null || _opts$formatError === void 0 ? void 0 : _opts$formatError.call(opts, {
                error: cause,
                path
              })
            ];
          }
        });
        return function(_x) {
          return _ref.apply(this, arguments);
        };
      })());
    }
    __name(encodePromise, "encodePromise");
    function encodeAsyncIterable(iterable$1, path) {
      return registerAsync(/* @__PURE__ */ (function() {
        var _ref2 = (0, import_wrapAsyncGenerator$2.default)(function* (idx) {
          try {
            var _usingCtx$1 = (0, import_usingCtx$1.default)();
            const error = checkMaxDepth(path);
            if (error) throw error;
            const iterator = _usingCtx$1.a(iteratorResource(iterable$1));
            try {
              while (true) {
                const next = yield (0, import_awaitAsyncGenerator$1.default)(iterator.next());
                if (next.done) {
                  yield [
                    idx,
                    ASYNC_ITERABLE_STATUS_RETURN,
                    encode(next.value, path)
                  ];
                  break;
                }
                yield [
                  idx,
                  ASYNC_ITERABLE_STATUS_YIELD,
                  encode(next.value, path)
                ];
              }
            } catch (cause) {
              var _opts$onError3, _opts$formatError2;
              (_opts$onError3 = opts.onError) === null || _opts$onError3 === void 0 || _opts$onError3.call(opts, {
                error: cause,
                path
              });
              yield [
                idx,
                ASYNC_ITERABLE_STATUS_ERROR,
                (_opts$formatError2 = opts.formatError) === null || _opts$formatError2 === void 0 ? void 0 : _opts$formatError2.call(opts, {
                  error: cause,
                  path
                })
              ];
            }
          } catch (_) {
            _usingCtx$1.e = _;
          } finally {
            yield (0, import_awaitAsyncGenerator$1.default)(_usingCtx$1.d());
          }
        });
        return function(_x2) {
          return _ref2.apply(this, arguments);
        };
      })());
    }
    __name(encodeAsyncIterable, "encodeAsyncIterable");
    function checkMaxDepth(path) {
      if (opts.maxDepth && path.length > opts.maxDepth) return new MaxDepthError(path);
      return null;
    }
    __name(checkMaxDepth, "checkMaxDepth");
    function encodeAsync(value, path) {
      if (isPromise(value)) return [CHUNK_VALUE_TYPE_PROMISE, encodePromise(value, path)];
      if (isAsyncIterable(value)) {
        if (opts.maxDepth && path.length >= opts.maxDepth) throw new Error("Max depth reached");
        return [CHUNK_VALUE_TYPE_ASYNC_ITERABLE, encodeAsyncIterable(value, path)];
      }
      return null;
    }
    __name(encodeAsync, "encodeAsync");
    function encode(value, path) {
      if (value === void 0) return [[]];
      const reg = encodeAsync(value, path);
      if (reg) return [[placeholder], [null, ...reg]];
      if (!isPlainObject(value)) return [[value]];
      const newObj = {};
      const asyncValues = [];
      for (const [key, item] of Object.entries(value)) {
        const transformed = encodeAsync(item, [...path, key]);
        if (!transformed) {
          newObj[key] = item;
          continue;
        }
        newObj[key] = placeholder;
        asyncValues.push([key, ...transformed]);
      }
      return [[newObj], ...asyncValues];
    }
    __name(encode, "encode");
    const newHead = {};
    for (const [key, item] of Object.entries(data)) newHead[key] = encode(item, [key]);
    yield newHead;
    let iterable = mergedIterables;
    if (opts.pingMs) iterable = withPing(mergedIterables, opts.pingMs);
    var _iteratorAbruptCompletion = false;
    var _didIteratorError = false;
    var _iteratorError;
    try {
      for (var _iterator = (0, import_asyncIterator$1.default)(iterable), _step; _iteratorAbruptCompletion = !(_step = yield (0, import_awaitAsyncGenerator$1.default)(_iterator.next())).done; _iteratorAbruptCompletion = false) {
        const value = _step.value;
        yield value;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (_iteratorAbruptCompletion && _iterator.return != null) yield (0, import_awaitAsyncGenerator$1.default)(_iterator.return());
      } finally {
        if (_didIteratorError) throw _iteratorError;
      }
    }
  });
  return _createBatchStreamProducer.apply(this, arguments);
}
__name(_createBatchStreamProducer, "_createBatchStreamProducer");
function jsonlStreamProducer(opts) {
  let stream = readableStreamFrom(createBatchStreamProducer(opts));
  const { serialize } = opts;
  if (serialize) stream = stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
    if (chunk === PING_SYM) controller.enqueue(PING_SYM);
    else controller.enqueue(serialize(chunk));
  } }));
  return stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
    if (chunk === PING_SYM) controller.enqueue(" ");
    else controller.enqueue(JSON.stringify(chunk) + "\n");
  } })).pipeThrough(new TextEncoderStream());
}
__name(jsonlStreamProducer, "jsonlStreamProducer");
var require_asyncGeneratorDelegate = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncGeneratorDelegate.js"(exports2, module2) {
  var OverloadYield = require_OverloadYield();
  function _asyncGeneratorDelegate$1(t2) {
    var e = {}, n = false;
    function pump(e$1, r) {
      return n = true, r = new Promise(function(n$1) {
        n$1(t2[e$1](r));
      }), {
        done: false,
        value: new OverloadYield(r, 1)
      };
    }
    __name(pump, "pump");
    return e["undefined" != typeof Symbol && Symbol.iterator || "@@iterator"] = function() {
      return this;
    }, e.next = function(t$1) {
      return n ? (n = false, t$1) : pump("next", t$1);
    }, "function" == typeof t2["throw"] && (e["throw"] = function(t$1) {
      if (n) throw n = false, t$1;
      return pump("throw", t$1);
    }), "function" == typeof t2["return"] && (e["return"] = function(t$1) {
      return n ? (n = false, t$1) : pump("return", t$1);
    }), e;
  }
  __name(_asyncGeneratorDelegate$1, "_asyncGeneratorDelegate$1");
  module2.exports = _asyncGeneratorDelegate$1, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var import_asyncIterator = __toESM2(require_asyncIterator(), 1);
var import_awaitAsyncGenerator = __toESM2(require_awaitAsyncGenerator(), 1);
var import_wrapAsyncGenerator$1 = __toESM2(require_wrapAsyncGenerator(), 1);
var import_asyncGeneratorDelegate = __toESM2(require_asyncGeneratorDelegate(), 1);
var import_usingCtx = __toESM2(require_usingCtx(), 1);
var PING_EVENT = "ping";
var SERIALIZED_ERROR_EVENT = "serialized-error";
var CONNECTED_EVENT = "connected";
var RETURN_EVENT = "return";
function sseStreamProducer(opts) {
  var _opts$ping$enabled, _opts$ping, _opts$ping$intervalMs, _opts$ping2, _opts$client;
  const { serialize = identity } = opts;
  const ping = {
    enabled: (_opts$ping$enabled = (_opts$ping = opts.ping) === null || _opts$ping === void 0 ? void 0 : _opts$ping.enabled) !== null && _opts$ping$enabled !== void 0 ? _opts$ping$enabled : false,
    intervalMs: (_opts$ping$intervalMs = (_opts$ping2 = opts.ping) === null || _opts$ping2 === void 0 ? void 0 : _opts$ping2.intervalMs) !== null && _opts$ping$intervalMs !== void 0 ? _opts$ping$intervalMs : 1e3
  };
  const client = (_opts$client = opts.client) !== null && _opts$client !== void 0 ? _opts$client : {};
  if (ping.enabled && client.reconnectAfterInactivityMs && ping.intervalMs > client.reconnectAfterInactivityMs) throw new Error(`Ping interval must be less than client reconnect interval to prevent unnecessary reconnection - ping.intervalMs: ${ping.intervalMs} client.reconnectAfterInactivityMs: ${client.reconnectAfterInactivityMs}`);
  function generator() {
    return _generator.apply(this, arguments);
  }
  __name(generator, "generator");
  function _generator() {
    _generator = (0, import_wrapAsyncGenerator$1.default)(function* () {
      yield {
        event: CONNECTED_EVENT,
        data: JSON.stringify(client)
      };
      let iterable = opts.data;
      if (opts.emitAndEndImmediately) iterable = takeWithGrace(iterable, {
        count: 1,
        gracePeriodMs: 1
      });
      if (opts.maxDurationMs && opts.maxDurationMs > 0 && opts.maxDurationMs !== Infinity) iterable = withMaxDuration(iterable, { maxDurationMs: opts.maxDurationMs });
      if (ping.enabled && ping.intervalMs !== Infinity && ping.intervalMs > 0) iterable = withPing(iterable, ping.intervalMs);
      let value;
      let chunk;
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;
      var _iteratorError;
      try {
        for (var _iterator = (0, import_asyncIterator.default)(iterable), _step; _iteratorAbruptCompletion = !(_step = yield (0, import_awaitAsyncGenerator.default)(_iterator.next())).done; _iteratorAbruptCompletion = false) {
          value = _step.value;
          {
            if (value === PING_SYM) {
              yield {
                event: PING_EVENT,
                data: ""
              };
              continue;
            }
            chunk = isTrackedEnvelope(value) ? {
              id: value[0],
              data: value[1]
            } : { data: value };
            chunk.data = JSON.stringify(serialize(chunk.data));
            yield chunk;
            value = null;
            chunk = null;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (_iteratorAbruptCompletion && _iterator.return != null) yield (0, import_awaitAsyncGenerator.default)(_iterator.return());
        } finally {
          if (_didIteratorError) throw _iteratorError;
        }
      }
    });
    return _generator.apply(this, arguments);
  }
  __name(_generator, "_generator");
  function generatorWithErrorHandling() {
    return _generatorWithErrorHandling.apply(this, arguments);
  }
  __name(generatorWithErrorHandling, "generatorWithErrorHandling");
  function _generatorWithErrorHandling() {
    _generatorWithErrorHandling = (0, import_wrapAsyncGenerator$1.default)(function* () {
      try {
        yield* (0, import_asyncGeneratorDelegate.default)((0, import_asyncIterator.default)(generator()));
        yield {
          event: RETURN_EVENT,
          data: ""
        };
      } catch (cause) {
        var _opts$formatError, _opts$formatError2;
        if (isAbortError(cause)) return;
        const error = getTRPCErrorFromUnknown(cause);
        const data = (_opts$formatError = (_opts$formatError2 = opts.formatError) === null || _opts$formatError2 === void 0 ? void 0 : _opts$formatError2.call(opts, { error })) !== null && _opts$formatError !== void 0 ? _opts$formatError : null;
        yield {
          event: SERIALIZED_ERROR_EVENT,
          data: JSON.stringify(serialize(data))
        };
      }
    });
    return _generatorWithErrorHandling.apply(this, arguments);
  }
  __name(_generatorWithErrorHandling, "_generatorWithErrorHandling");
  const stream = readableStreamFrom(generatorWithErrorHandling());
  return stream.pipeThrough(new TransformStream({ transform(chunk, controller) {
    if ("event" in chunk) controller.enqueue(`event: ${chunk.event}
`);
    if ("data" in chunk) controller.enqueue(`data: ${chunk.data}
`);
    if ("id" in chunk) controller.enqueue(`id: ${chunk.id}
`);
    if ("comment" in chunk) controller.enqueue(`: ${chunk.comment}
`);
    controller.enqueue("\n\n");
  } })).pipeThrough(new TextEncoderStream());
}
__name(sseStreamProducer, "sseStreamProducer");
var sseHeaders = {
  "Content-Type": "text/event-stream",
  "Cache-Control": "no-cache, no-transform",
  "X-Accel-Buffering": "no",
  Connection: "keep-alive"
};
var import_wrapAsyncGenerator = __toESM2(require_wrapAsyncGenerator(), 1);
var import_objectSpread23 = __toESM2(require_objectSpread2(), 1);
function errorToAsyncIterable(err) {
  return run((0, import_wrapAsyncGenerator.default)(function* () {
    throw err;
  }));
}
__name(errorToAsyncIterable, "errorToAsyncIterable");
var TYPE_ACCEPTED_METHOD_MAP = {
  mutation: ["POST"],
  query: ["GET"],
  subscription: ["GET"]
};
var TYPE_ACCEPTED_METHOD_MAP_WITH_METHOD_OVERRIDE = {
  mutation: ["POST"],
  query: ["GET", "POST"],
  subscription: ["GET", "POST"]
};
function initResponse(initOpts) {
  var _responseMeta, _info$calls$find$proc, _info$calls$find;
  const { ctx, info, responseMeta, untransformedJSON, errors = [], headers } = initOpts;
  let status = untransformedJSON ? getHTTPStatusCode(untransformedJSON) : 200;
  const eagerGeneration = !untransformedJSON;
  const data = eagerGeneration ? [] : Array.isArray(untransformedJSON) ? untransformedJSON : [untransformedJSON];
  const meta = (_responseMeta = responseMeta === null || responseMeta === void 0 ? void 0 : responseMeta({
    ctx,
    info,
    paths: info === null || info === void 0 ? void 0 : info.calls.map((call) => call.path),
    data,
    errors,
    eagerGeneration,
    type: (_info$calls$find$proc = info === null || info === void 0 || (_info$calls$find = info.calls.find((call) => {
      var _call$procedure;
      return (_call$procedure = call.procedure) === null || _call$procedure === void 0 ? void 0 : _call$procedure._def.type;
    })) === null || _info$calls$find === void 0 || (_info$calls$find = _info$calls$find.procedure) === null || _info$calls$find === void 0 ? void 0 : _info$calls$find._def.type) !== null && _info$calls$find$proc !== void 0 ? _info$calls$find$proc : "unknown"
  })) !== null && _responseMeta !== void 0 ? _responseMeta : {};
  if (meta.headers) {
    if (meta.headers instanceof Headers) for (const [key, value] of meta.headers.entries()) headers.append(key, value);
    else
      for (const [key, value] of Object.entries(meta.headers)) if (Array.isArray(value)) for (const v of value) headers.append(key, v);
      else if (typeof value === "string") headers.set(key, value);
  }
  if (meta.status) status = meta.status;
  return { status };
}
__name(initResponse, "initResponse");
function caughtErrorToData(cause, errorOpts) {
  const { router: router2, req, onError } = errorOpts.opts;
  const error = getTRPCErrorFromUnknown(cause);
  onError === null || onError === void 0 || onError({
    error,
    path: errorOpts.path,
    input: errorOpts.input,
    ctx: errorOpts.ctx,
    type: errorOpts.type,
    req
  });
  const untransformedJSON = { error: getErrorShape({
    config: router2._def._config,
    error,
    type: errorOpts.type,
    path: errorOpts.path,
    input: errorOpts.input,
    ctx: errorOpts.ctx
  }) };
  const transformedJSON = transformTRPCResponse(router2._def._config, untransformedJSON);
  const body = JSON.stringify(transformedJSON);
  return {
    error,
    untransformedJSON,
    body
  };
}
__name(caughtErrorToData, "caughtErrorToData");
function isDataStream(v) {
  if (!isObject(v)) return false;
  if (isAsyncIterable(v)) return true;
  return Object.values(v).some(isPromise) || Object.values(v).some(isAsyncIterable);
}
__name(isDataStream, "isDataStream");
async function resolveResponse(opts) {
  var _ref, _opts$allowBatching, _opts$batching, _opts$allowMethodOver, _config$sse$enabled, _config$sse;
  const { router: router2, req } = opts;
  const headers = new Headers([["vary", "trpc-accept"]]);
  const config2 = router2._def._config;
  const url = new URL(req.url);
  if (req.method === "HEAD") return new Response(null, { status: 204 });
  const allowBatching = (_ref = (_opts$allowBatching = opts.allowBatching) !== null && _opts$allowBatching !== void 0 ? _opts$allowBatching : (_opts$batching = opts.batching) === null || _opts$batching === void 0 ? void 0 : _opts$batching.enabled) !== null && _ref !== void 0 ? _ref : true;
  const allowMethodOverride = ((_opts$allowMethodOver = opts.allowMethodOverride) !== null && _opts$allowMethodOver !== void 0 ? _opts$allowMethodOver : false) && req.method === "POST";
  const infoTuple = await run(async () => {
    try {
      return [void 0, await getRequestInfo({
        req,
        path: decodeURIComponent(opts.path),
        router: router2,
        searchParams: url.searchParams,
        headers: opts.req.headers,
        url
      })];
    } catch (cause) {
      return [getTRPCErrorFromUnknown(cause), void 0];
    }
  });
  const ctxManager = run(() => {
    let result = void 0;
    return {
      valueOrUndefined: /* @__PURE__ */ __name(() => {
        if (!result) return void 0;
        return result[1];
      }, "valueOrUndefined"),
      value: /* @__PURE__ */ __name(() => {
        const [err, ctx] = result;
        if (err) throw err;
        return ctx;
      }, "value"),
      create: /* @__PURE__ */ __name(async (info) => {
        if (result) throw new Error("This should only be called once - report a bug in tRPC");
        try {
          const ctx = await opts.createContext({ info });
          result = [void 0, ctx];
        } catch (cause) {
          result = [getTRPCErrorFromUnknown(cause), void 0];
        }
      }, "create")
    };
  });
  const methodMapper = allowMethodOverride ? TYPE_ACCEPTED_METHOD_MAP_WITH_METHOD_OVERRIDE : TYPE_ACCEPTED_METHOD_MAP;
  const isStreamCall = req.headers.get("trpc-accept") === "application/jsonl";
  const experimentalSSE = (_config$sse$enabled = (_config$sse = config2.sse) === null || _config$sse === void 0 ? void 0 : _config$sse.enabled) !== null && _config$sse$enabled !== void 0 ? _config$sse$enabled : true;
  try {
    const [infoError, info] = infoTuple;
    if (infoError) throw infoError;
    if (info.isBatchCall && !allowBatching) throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Batching is not enabled on the server`
    });
    if (isStreamCall && !info.isBatchCall) throw new TRPCError({
      message: `Streaming requests must be batched (you can do a batch of 1)`,
      code: "BAD_REQUEST"
    });
    await ctxManager.create(info);
    const rpcCalls = info.calls.map(async (call) => {
      const proc = call.procedure;
      try {
        if (opts.error) throw opts.error;
        if (!proc) throw new TRPCError({
          code: "NOT_FOUND",
          message: `No procedure found on path "${call.path}"`
        });
        if (!methodMapper[proc._def.type].includes(req.method)) throw new TRPCError({
          code: "METHOD_NOT_SUPPORTED",
          message: `Unsupported ${req.method}-request to ${proc._def.type} procedure at path "${call.path}"`
        });
        if (proc._def.type === "subscription") {
          if (info.isBatchCall) throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Cannot batch subscription calls`
          });
        }
        const data = await proc({
          path: call.path,
          getRawInput: call.getRawInput,
          ctx: ctxManager.value(),
          type: proc._def.type,
          signal: opts.req.signal
        });
        return [void 0, { data }];
      } catch (cause) {
        var _opts$onError, _call$procedure$_def$, _call$procedure2;
        const error = getTRPCErrorFromUnknown(cause);
        const input = call.result();
        (_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, {
          error,
          path: call.path,
          input,
          ctx: ctxManager.valueOrUndefined(),
          type: (_call$procedure$_def$ = (_call$procedure2 = call.procedure) === null || _call$procedure2 === void 0 ? void 0 : _call$procedure2._def.type) !== null && _call$procedure$_def$ !== void 0 ? _call$procedure$_def$ : "unknown",
          req: opts.req
        });
        return [error, void 0];
      }
    });
    if (!info.isBatchCall) {
      const [call] = info.calls;
      const [error, result] = await rpcCalls[0];
      switch (info.type) {
        case "unknown":
        case "mutation":
        case "query": {
          headers.set("content-type", "application/json");
          if (isDataStream(result === null || result === void 0 ? void 0 : result.data)) throw new TRPCError({
            code: "UNSUPPORTED_MEDIA_TYPE",
            message: "Cannot use stream-like response in non-streaming request - use httpBatchStreamLink"
          });
          const res = error ? { error: getErrorShape({
            config: config2,
            ctx: ctxManager.valueOrUndefined(),
            error,
            input: call.result(),
            path: call.path,
            type: info.type
          }) } : { result: { data: result.data } };
          const headResponse$1 = initResponse({
            ctx: ctxManager.valueOrUndefined(),
            info,
            responseMeta: opts.responseMeta,
            errors: error ? [error] : [],
            headers,
            untransformedJSON: [res]
          });
          return new Response(JSON.stringify(transformTRPCResponse(config2, res)), {
            status: headResponse$1.status,
            headers
          });
        }
        case "subscription": {
          const iterable = run(() => {
            if (error) return errorToAsyncIterable(error);
            if (!experimentalSSE) return errorToAsyncIterable(new TRPCError({
              code: "METHOD_NOT_SUPPORTED",
              message: 'Missing experimental flag "sseSubscriptions"'
            }));
            if (!isObservable(result.data) && !isAsyncIterable(result.data)) return errorToAsyncIterable(new TRPCError({
              message: `Subscription ${call.path} did not return an observable or a AsyncGenerator`,
              code: "INTERNAL_SERVER_ERROR"
            }));
            const dataAsIterable = isObservable(result.data) ? observableToAsyncIterable(result.data, opts.req.signal) : result.data;
            return dataAsIterable;
          });
          const stream = sseStreamProducer((0, import_objectSpread23.default)((0, import_objectSpread23.default)({}, config2.sse), {}, {
            data: iterable,
            serialize: /* @__PURE__ */ __name((v) => config2.transformer.output.serialize(v), "serialize"),
            formatError(errorOpts) {
              var _call$procedure$_def$2, _call$procedure3, _opts$onError2;
              const error$1 = getTRPCErrorFromUnknown(errorOpts.error);
              const input = call === null || call === void 0 ? void 0 : call.result();
              const path = call === null || call === void 0 ? void 0 : call.path;
              const type = (_call$procedure$_def$2 = call === null || call === void 0 || (_call$procedure3 = call.procedure) === null || _call$procedure3 === void 0 ? void 0 : _call$procedure3._def.type) !== null && _call$procedure$_def$2 !== void 0 ? _call$procedure$_def$2 : "unknown";
              (_opts$onError2 = opts.onError) === null || _opts$onError2 === void 0 || _opts$onError2.call(opts, {
                error: error$1,
                path,
                input,
                ctx: ctxManager.valueOrUndefined(),
                req: opts.req,
                type
              });
              const shape = getErrorShape({
                config: config2,
                ctx: ctxManager.valueOrUndefined(),
                error: error$1,
                input,
                path,
                type
              });
              return shape;
            }
          }));
          for (const [key, value] of Object.entries(sseHeaders)) headers.set(key, value);
          const headResponse$1 = initResponse({
            ctx: ctxManager.valueOrUndefined(),
            info,
            responseMeta: opts.responseMeta,
            errors: [],
            headers,
            untransformedJSON: null
          });
          return new Response(stream, {
            headers,
            status: headResponse$1.status
          });
        }
      }
    }
    if (info.accept === "application/jsonl") {
      headers.set("content-type", "application/json");
      headers.set("transfer-encoding", "chunked");
      const headResponse$1 = initResponse({
        ctx: ctxManager.valueOrUndefined(),
        info,
        responseMeta: opts.responseMeta,
        errors: [],
        headers,
        untransformedJSON: null
      });
      const stream = jsonlStreamProducer((0, import_objectSpread23.default)((0, import_objectSpread23.default)({}, config2.jsonl), {}, {
        maxDepth: Infinity,
        data: rpcCalls.map(async (res) => {
          const [error, result] = await res;
          const call = info.calls[0];
          if (error) {
            var _procedure$_def$type, _procedure;
            return { error: getErrorShape({
              config: config2,
              ctx: ctxManager.valueOrUndefined(),
              error,
              input: call.result(),
              path: call.path,
              type: (_procedure$_def$type = (_procedure = call.procedure) === null || _procedure === void 0 ? void 0 : _procedure._def.type) !== null && _procedure$_def$type !== void 0 ? _procedure$_def$type : "unknown"
            }) };
          }
          const iterable = isObservable(result.data) ? observableToAsyncIterable(result.data, opts.req.signal) : Promise.resolve(result.data);
          return { result: Promise.resolve({ data: iterable }) };
        }),
        serialize: /* @__PURE__ */ __name((data) => config2.transformer.output.serialize(data), "serialize"),
        onError: /* @__PURE__ */ __name((cause) => {
          var _opts$onError3, _info$type;
          (_opts$onError3 = opts.onError) === null || _opts$onError3 === void 0 || _opts$onError3.call(opts, {
            error: getTRPCErrorFromUnknown(cause),
            path: void 0,
            input: void 0,
            ctx: ctxManager.valueOrUndefined(),
            req: opts.req,
            type: (_info$type = info === null || info === void 0 ? void 0 : info.type) !== null && _info$type !== void 0 ? _info$type : "unknown"
          });
        }, "onError"),
        formatError(errorOpts) {
          var _call$procedure$_def$3, _call$procedure4;
          const call = info === null || info === void 0 ? void 0 : info.calls[errorOpts.path[0]];
          const error = getTRPCErrorFromUnknown(errorOpts.error);
          const input = call === null || call === void 0 ? void 0 : call.result();
          const path = call === null || call === void 0 ? void 0 : call.path;
          const type = (_call$procedure$_def$3 = call === null || call === void 0 || (_call$procedure4 = call.procedure) === null || _call$procedure4 === void 0 ? void 0 : _call$procedure4._def.type) !== null && _call$procedure$_def$3 !== void 0 ? _call$procedure$_def$3 : "unknown";
          const shape = getErrorShape({
            config: config2,
            ctx: ctxManager.valueOrUndefined(),
            error,
            input,
            path,
            type
          });
          return shape;
        }
      }));
      return new Response(stream, {
        headers,
        status: headResponse$1.status
      });
    }
    headers.set("content-type", "application/json");
    const results = (await Promise.all(rpcCalls)).map((res) => {
      const [error, result] = res;
      if (error) return res;
      if (isDataStream(result.data)) return [new TRPCError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "Cannot use stream-like response in non-streaming request - use httpBatchStreamLink"
      }), void 0];
      return res;
    });
    const resultAsRPCResponse = results.map(([error, result], index) => {
      const call = info.calls[index];
      if (error) {
        var _call$procedure$_def$4, _call$procedure5;
        return { error: getErrorShape({
          config: config2,
          ctx: ctxManager.valueOrUndefined(),
          error,
          input: call.result(),
          path: call.path,
          type: (_call$procedure$_def$4 = (_call$procedure5 = call.procedure) === null || _call$procedure5 === void 0 ? void 0 : _call$procedure5._def.type) !== null && _call$procedure$_def$4 !== void 0 ? _call$procedure$_def$4 : "unknown"
        }) };
      }
      return { result: { data: result.data } };
    });
    const errors = results.map(([error]) => error).filter(Boolean);
    const headResponse = initResponse({
      ctx: ctxManager.valueOrUndefined(),
      info,
      responseMeta: opts.responseMeta,
      untransformedJSON: resultAsRPCResponse,
      errors,
      headers
    });
    return new Response(JSON.stringify(transformTRPCResponse(config2, resultAsRPCResponse)), {
      status: headResponse.status,
      headers
    });
  } catch (cause) {
    var _info$type2;
    const [_infoError, info] = infoTuple;
    const ctx = ctxManager.valueOrUndefined();
    const { error, untransformedJSON, body } = caughtErrorToData(cause, {
      opts,
      ctx: ctxManager.valueOrUndefined(),
      type: (_info$type2 = info === null || info === void 0 ? void 0 : info.type) !== null && _info$type2 !== void 0 ? _info$type2 : "unknown"
    });
    const headResponse = initResponse({
      ctx,
      info,
      responseMeta: opts.responseMeta,
      untransformedJSON,
      errors: [error],
      headers
    });
    return new Response(body, {
      status: headResponse.status,
      headers
    });
  }
}
__name(resolveResponse, "resolveResponse");

// ../../node_modules/.pnpm/@trpc+server@11.5.1_typescript@5.9.2/node_modules/@trpc/server/dist/adapters/fetch/index.mjs
var import_objectSpread24 = __toESM2(require_objectSpread2(), 1);
var trimSlashes = /* @__PURE__ */ __name((path) => {
  path = path.startsWith("/") ? path.slice(1) : path;
  path = path.endsWith("/") ? path.slice(0, -1) : path;
  return path;
}, "trimSlashes");
async function fetchRequestHandler(opts) {
  const resHeaders = new Headers();
  const createContext = /* @__PURE__ */ __name(async (innerOpts) => {
    var _opts$createContext;
    return (_opts$createContext = opts.createContext) === null || _opts$createContext === void 0 ? void 0 : _opts$createContext.call(opts, (0, import_objectSpread24.default)({
      req: opts.req,
      resHeaders
    }, innerOpts));
  }, "createContext");
  const url = new URL(opts.req.url);
  const pathname = trimSlashes(url.pathname);
  const endpoint = trimSlashes(opts.endpoint);
  const path = trimSlashes(pathname.slice(endpoint.length));
  return await resolveResponse((0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, opts), {}, {
    req: opts.req,
    createContext,
    path,
    error: null,
    onError(o) {
      var _opts$onError;
      opts === null || opts === void 0 || (_opts$onError = opts.onError) === null || _opts$onError === void 0 || _opts$onError.call(opts, (0, import_objectSpread24.default)((0, import_objectSpread24.default)({}, o), {}, { req: opts.req }));
    },
    responseMeta(data) {
      var _opts$responseMeta;
      const meta = (_opts$responseMeta = opts.responseMeta) === null || _opts$responseMeta === void 0 ? void 0 : _opts$responseMeta.call(opts, data);
      if (meta === null || meta === void 0 ? void 0 : meta.headers) {
        if (meta.headers instanceof Headers) for (const [key, value] of meta.headers.entries()) resHeaders.append(key, value);
        else
          for (const [key, value] of Object.entries(meta.headers)) if (Array.isArray(value)) for (const v of value) resHeaders.append(key, v);
          else if (typeof value === "string") resHeaders.set(key, value);
      }
      return {
        headers: resHeaders,
        status: meta === null || meta === void 0 ? void 0 : meta.status
      };
    }
  }));
}
__name(fetchRequestHandler, "fetchRequestHandler");

// ../../node_modules/.pnpm/@trpc+server@11.5.1_typescript@5.9.2/node_modules/@trpc/server/dist/initTRPC-Bt3JfYTm.mjs
var import_objectSpread2$2 = __toESM2(require_objectSpread2(), 1);
var middlewareMarker = "middlewareMarker";
function createMiddlewareFactory() {
  function createMiddlewareInner(middlewares) {
    return {
      _middlewares: middlewares,
      unstable_pipe(middlewareBuilderOrFn) {
        const pipedMiddleware = "_middlewares" in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [middlewareBuilderOrFn];
        return createMiddlewareInner([...middlewares, ...pipedMiddleware]);
      }
    };
  }
  __name(createMiddlewareInner, "createMiddlewareInner");
  function createMiddleware(fn2) {
    return createMiddlewareInner([fn2]);
  }
  __name(createMiddleware, "createMiddleware");
  return createMiddleware;
}
__name(createMiddlewareFactory, "createMiddlewareFactory");
function createInputMiddleware(parse) {
  const inputMiddleware = /* @__PURE__ */ __name(async function inputValidatorMiddleware(opts) {
    let parsedInput;
    const rawInput = await opts.getRawInput();
    try {
      parsedInput = await parse(rawInput);
    } catch (cause) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        cause
      });
    }
    const combinedInput = isObject(opts.input) && isObject(parsedInput) ? (0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, opts.input), parsedInput) : parsedInput;
    return opts.next({ input: combinedInput });
  }, "inputValidatorMiddleware");
  inputMiddleware._type = "input";
  return inputMiddleware;
}
__name(createInputMiddleware, "createInputMiddleware");
function createOutputMiddleware(parse) {
  const outputMiddleware = /* @__PURE__ */ __name(async function outputValidatorMiddleware({ next }) {
    const result = await next();
    if (!result.ok) return result;
    try {
      const data = await parse(result.data);
      return (0, import_objectSpread2$2.default)((0, import_objectSpread2$2.default)({}, result), {}, { data });
    } catch (cause) {
      throw new TRPCError({
        message: "Output validation failed",
        code: "INTERNAL_SERVER_ERROR",
        cause
      });
    }
  }, "outputValidatorMiddleware");
  outputMiddleware._type = "output";
  return outputMiddleware;
}
__name(createOutputMiddleware, "createOutputMiddleware");
var import_defineProperty3 = __toESM2(require_defineProperty(), 1);
var StandardSchemaV1Error = class extends Error {
  static {
    __name(this, "StandardSchemaV1Error");
  }
  /**
  * Creates a schema error with useful information.
  *
  * @param issues The schema issues.
  */
  constructor(issues) {
    var _issues$;
    super((_issues$ = issues[0]) === null || _issues$ === void 0 ? void 0 : _issues$.message);
    (0, import_defineProperty3.default)(this, "issues", void 0);
    this.name = "SchemaError";
    this.issues = issues;
  }
};
function getParseFn(procedureParser) {
  const parser = procedureParser;
  const isStandardSchema = "~standard" in parser;
  if (typeof parser === "function" && typeof parser.assert === "function") return parser.assert.bind(parser);
  if (typeof parser === "function" && !isStandardSchema) return parser;
  if (typeof parser.parseAsync === "function") return parser.parseAsync.bind(parser);
  if (typeof parser.parse === "function") return parser.parse.bind(parser);
  if (typeof parser.validateSync === "function") return parser.validateSync.bind(parser);
  if (typeof parser.create === "function") return parser.create.bind(parser);
  if (typeof parser.assert === "function") return (value) => {
    parser.assert(value);
    return value;
  };
  if (isStandardSchema) return async (value) => {
    const result = await parser["~standard"].validate(value);
    if (result.issues) throw new StandardSchemaV1Error(result.issues);
    return result.value;
  };
  throw new Error("Could not find a validator fn");
}
__name(getParseFn, "getParseFn");
var require_objectWithoutPropertiesLoose = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js"(exports2, module2) {
  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t2 = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t2[n] = r[n];
    }
    return t2;
  }
  __name(_objectWithoutPropertiesLoose, "_objectWithoutPropertiesLoose");
  module2.exports = _objectWithoutPropertiesLoose, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var require_objectWithoutProperties = __commonJS2({ "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js"(exports2, module2) {
  var objectWithoutPropertiesLoose = require_objectWithoutPropertiesLoose();
  function _objectWithoutProperties$1(e, t2) {
    if (null == e) return {};
    var o, r, i = objectWithoutPropertiesLoose(e, t2);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) o = s[r], t2.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  __name(_objectWithoutProperties$1, "_objectWithoutProperties$1");
  module2.exports = _objectWithoutProperties$1, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
} });
var import_objectWithoutProperties = __toESM2(require_objectWithoutProperties(), 1);
var import_objectSpread2$13 = __toESM2(require_objectSpread2(), 1);
var _excluded = [
  "middlewares",
  "inputs",
  "meta"
];
function createNewBuilder(def1, def2) {
  const { middlewares = [], inputs, meta } = def2, rest = (0, import_objectWithoutProperties.default)(def2, _excluded);
  return createBuilder((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, mergeWithoutOverrides(def1, rest)), {}, {
    inputs: [...def1.inputs, ...inputs !== null && inputs !== void 0 ? inputs : []],
    middlewares: [...def1.middlewares, ...middlewares],
    meta: def1.meta && meta ? (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, def1.meta), meta) : meta !== null && meta !== void 0 ? meta : def1.meta
  }));
}
__name(createNewBuilder, "createNewBuilder");
function createBuilder(initDef = {}) {
  const _def = (0, import_objectSpread2$13.default)({
    procedure: true,
    inputs: [],
    middlewares: []
  }, initDef);
  const builder = {
    _def,
    input(input) {
      const parser = getParseFn(input);
      return createNewBuilder(_def, {
        inputs: [input],
        middlewares: [createInputMiddleware(parser)]
      });
    },
    output(output) {
      const parser = getParseFn(output);
      return createNewBuilder(_def, {
        output,
        middlewares: [createOutputMiddleware(parser)]
      });
    },
    meta(meta) {
      return createNewBuilder(_def, { meta });
    },
    use(middlewareBuilderOrFn) {
      const middlewares = "_middlewares" in middlewareBuilderOrFn ? middlewareBuilderOrFn._middlewares : [middlewareBuilderOrFn];
      return createNewBuilder(_def, { middlewares });
    },
    unstable_concat(builder$1) {
      return createNewBuilder(_def, builder$1._def);
    },
    concat(builder$1) {
      return createNewBuilder(_def, builder$1._def);
    },
    query(resolver) {
      return createResolver((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, _def), {}, { type: "query" }), resolver);
    },
    mutation(resolver) {
      return createResolver((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, _def), {}, { type: "mutation" }), resolver);
    },
    subscription(resolver) {
      return createResolver((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, _def), {}, { type: "subscription" }), resolver);
    },
    experimental_caller(caller) {
      return createNewBuilder(_def, { caller });
    }
  };
  return builder;
}
__name(createBuilder, "createBuilder");
function createResolver(_defIn, resolver) {
  const finalBuilder = createNewBuilder(_defIn, {
    resolver,
    middlewares: [/* @__PURE__ */ __name(async function resolveMiddleware(opts) {
      const data = await resolver(opts);
      return {
        marker: middlewareMarker,
        ok: true,
        data,
        ctx: opts.ctx
      };
    }, "resolveMiddleware")]
  });
  const _def = (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, finalBuilder._def), {}, {
    type: _defIn.type,
    experimental_caller: Boolean(finalBuilder._def.caller),
    meta: finalBuilder._def.meta,
    $types: null
  });
  const invoke = createProcedureCaller(finalBuilder._def);
  const callerOverride = finalBuilder._def.caller;
  if (!callerOverride) return invoke;
  const callerWrapper = /* @__PURE__ */ __name(async (...args) => {
    return await callerOverride({
      args,
      invoke,
      _def
    });
  }, "callerWrapper");
  callerWrapper._def = _def;
  return callerWrapper;
}
__name(createResolver, "createResolver");
var codeblock = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim();
async function callRecursive(index, _def, opts) {
  try {
    const middleware = _def.middlewares[index];
    const result = await middleware((0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts), {}, {
      meta: _def.meta,
      input: opts.input,
      next(_nextOpts) {
        var _nextOpts$getRawInput;
        const nextOpts = _nextOpts;
        return callRecursive(index + 1, _def, (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts), {}, {
          ctx: (nextOpts === null || nextOpts === void 0 ? void 0 : nextOpts.ctx) ? (0, import_objectSpread2$13.default)((0, import_objectSpread2$13.default)({}, opts.ctx), nextOpts.ctx) : opts.ctx,
          input: nextOpts && "input" in nextOpts ? nextOpts.input : opts.input,
          getRawInput: (_nextOpts$getRawInput = nextOpts === null || nextOpts === void 0 ? void 0 : nextOpts.getRawInput) !== null && _nextOpts$getRawInput !== void 0 ? _nextOpts$getRawInput : opts.getRawInput
        }));
      }
    }));
    return result;
  } catch (cause) {
    return {
      ok: false,
      error: getTRPCErrorFromUnknown(cause),
      marker: middlewareMarker
    };
  }
}
__name(callRecursive, "callRecursive");
function createProcedureCaller(_def) {
  async function procedure(opts) {
    if (!opts || !("getRawInput" in opts)) throw new Error(codeblock);
    const result = await callRecursive(0, _def, opts);
    if (!result) throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "No result from middlewares - did you forget to `return next()`?"
    });
    if (!result.ok) throw result.error;
    return result.data;
  }
  __name(procedure, "procedure");
  procedure._def = _def;
  procedure.procedure = true;
  procedure.meta = _def.meta;
  return procedure;
}
__name(createProcedureCaller, "createProcedureCaller");
var _globalThis$process;
var _globalThis$process2;
var _globalThis$process3;
var isServerDefault = typeof window === "undefined" || "Deno" in window || ((_globalThis$process = globalThis.process) === null || _globalThis$process === void 0 || (_globalThis$process = _globalThis$process.env) === null || _globalThis$process === void 0 ? void 0 : _globalThis$process["NODE_ENV"]) === "test" || !!((_globalThis$process2 = globalThis.process) === null || _globalThis$process2 === void 0 || (_globalThis$process2 = _globalThis$process2.env) === null || _globalThis$process2 === void 0 ? void 0 : _globalThis$process2["JEST_WORKER_ID"]) || !!((_globalThis$process3 = globalThis.process) === null || _globalThis$process3 === void 0 || (_globalThis$process3 = _globalThis$process3.env) === null || _globalThis$process3 === void 0 ? void 0 : _globalThis$process3["VITEST_WORKER_ID"]);
var import_objectSpread25 = __toESM2(require_objectSpread2(), 1);
var TRPCBuilder = class TRPCBuilder2 {
  static {
    __name(this, "TRPCBuilder");
  }
  /**
  * Add a context shape as a generic to the root object
  * @see https://trpc.io/docs/v11/server/context
  */
  context() {
    return new TRPCBuilder2();
  }
  /**
  * Add a meta shape as a generic to the root object
  * @see https://trpc.io/docs/v11/quickstart
  */
  meta() {
    return new TRPCBuilder2();
  }
  /**
  * Create the root object
  * @see https://trpc.io/docs/v11/server/routers#initialize-trpc
  */
  create(opts) {
    var _opts$transformer, _opts$isDev, _globalThis$process$1, _opts$allowOutsideOfS, _opts$errorFormatter, _opts$isServer;
    const config2 = (0, import_objectSpread25.default)((0, import_objectSpread25.default)({}, opts), {}, {
      transformer: getDataTransformer((_opts$transformer = opts === null || opts === void 0 ? void 0 : opts.transformer) !== null && _opts$transformer !== void 0 ? _opts$transformer : defaultTransformer),
      isDev: (_opts$isDev = opts === null || opts === void 0 ? void 0 : opts.isDev) !== null && _opts$isDev !== void 0 ? _opts$isDev : ((_globalThis$process$1 = globalThis.process) === null || _globalThis$process$1 === void 0 ? void 0 : _globalThis$process$1.env["NODE_ENV"]) !== "production",
      allowOutsideOfServer: (_opts$allowOutsideOfS = opts === null || opts === void 0 ? void 0 : opts.allowOutsideOfServer) !== null && _opts$allowOutsideOfS !== void 0 ? _opts$allowOutsideOfS : false,
      errorFormatter: (_opts$errorFormatter = opts === null || opts === void 0 ? void 0 : opts.errorFormatter) !== null && _opts$errorFormatter !== void 0 ? _opts$errorFormatter : defaultFormatter,
      isServer: (_opts$isServer = opts === null || opts === void 0 ? void 0 : opts.isServer) !== null && _opts$isServer !== void 0 ? _opts$isServer : isServerDefault,
      $types: null
    });
    {
      var _opts$isServer2;
      const isServer = (_opts$isServer2 = opts === null || opts === void 0 ? void 0 : opts.isServer) !== null && _opts$isServer2 !== void 0 ? _opts$isServer2 : isServerDefault;
      if (!isServer && (opts === null || opts === void 0 ? void 0 : opts.allowOutsideOfServer) !== true) throw new Error(`You're trying to use @trpc/server in a non-server environment. This is not supported by default.`);
    }
    return {
      _config: config2,
      procedure: createBuilder({ meta: opts === null || opts === void 0 ? void 0 : opts.defaultMeta }),
      middleware: createMiddlewareFactory(),
      router: createRouterFactory(config2),
      mergeRouters,
      createCallerFactory: createCallerFactory()
    };
  }
};
var initTRPC = new TRPCBuilder();

// src/trpc.ts
var t = initTRPC.context().create();
var router = t.router;
var publicProcedure = t.procedure;

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  __name(assertIs, "assertIs");
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  __name(assertNever, "assertNever");
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] !== "number");
    const filtered = {};
    for (const k2 of validKeys) {
      filtered[k2] = obj[k2];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  __name(joinValues, "joinValues");
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = /* @__PURE__ */ __name((data) => {
  const t2 = typeof data;
  switch (t2) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
}, "getParsedType");

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = /* @__PURE__ */ __name((obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
}, "quotelessJson");
var ZodError = class _ZodError extends Error {
  static {
    __name(this, "ZodError");
  }
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = /* @__PURE__ */ __name((error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el2 = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el2] = curr[el2] || { _errors: [] };
            } else {
              curr[el2] = curr[el2] || { _errors: [] };
              curr[el2]._errors.push(mapper(issue));
            }
            curr = curr[el2];
            i++;
          }
        }
      }
    }, "processError");
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = /* @__PURE__ */ __name((issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
}, "errorMap");
var en_default = errorMap;

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
__name(setErrorMap, "setErrorMap");
function getErrorMap() {
  return overrideErrorMap;
}
__name(getErrorMap, "getErrorMap");

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = /* @__PURE__ */ __name((params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
}, "makeIssue");
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x2) => !!x2)
  });
  ctx.common.issues.push(issue);
}
__name(addIssueToContext, "addIssueToContext");
var ParseStatus = class _ParseStatus {
  static {
    __name(this, "ParseStatus");
  }
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = /* @__PURE__ */ __name((value) => ({ status: "dirty", value }), "DIRTY");
var OK = /* @__PURE__ */ __name((value) => ({ status: "valid", value }), "OK");
var isAborted = /* @__PURE__ */ __name((x2) => x2.status === "aborted", "isAborted");
var isDirty = /* @__PURE__ */ __name((x2) => x2.status === "dirty", "isDirty");
var isValid = /* @__PURE__ */ __name((x2) => x2.status === "valid", "isValid");
var isAsync = /* @__PURE__ */ __name((x2) => typeof Promise !== "undefined" && x2 instanceof Promise, "isAsync");

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// ../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  static {
    __name(this, "ParseInputLazyPath");
  }
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = /* @__PURE__ */ __name((ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
}, "handleResult");
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = /* @__PURE__ */ __name((iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  }, "customMap");
  return { errorMap: customMap, description };
}
__name(processCreateParams, "processCreateParams");
var ZodType = class {
  static {
    __name(this, "ZodType");
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = /* @__PURE__ */ __name((val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    }, "getIssueProperties");
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = /* @__PURE__ */ __name(() => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      }), "setError");
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: /* @__PURE__ */ __name((data) => this["~validate"](data), "validate")
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
__name(timeRegexSource, "timeRegexSource");
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
__name(timeRegex, "timeRegex");
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
__name(datetimeRegex, "datetimeRegex");
function isValidIP(ip2, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip2)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip2)) {
    return true;
  }
  return false;
}
__name(isValidIP, "isValidIP");
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
__name(isValidJWT, "isValidJWT");
function isValidCidr(ip2, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip2)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip2)) {
    return true;
  }
  return false;
}
__name(isValidCidr, "isValidCidr");
var ZodString = class _ZodString extends ZodType {
  static {
    __name(this, "ZodString");
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
__name(floatSafeRemainder, "floatSafeRemainder");
var ZodNumber = class _ZodNumber extends ZodType {
  static {
    __name(this, "ZodNumber");
  }
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  static {
    __name(this, "ZodBigInt");
  }
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  static {
    __name(this, "ZodBoolean");
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  static {
    __name(this, "ZodDate");
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  static {
    __name(this, "ZodSymbol");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  static {
    __name(this, "ZodUndefined");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  static {
    __name(this, "ZodNull");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  static {
    __name(this, "ZodAny");
  }
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  static {
    __name(this, "ZodUnknown");
  }
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  static {
    __name(this, "ZodNever");
  }
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  static {
    __name(this, "ZodVoid");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  static {
    __name(this, "ZodArray");
  }
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: /* @__PURE__ */ __name(() => newShape, "shape")
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
__name(deepPartialify, "deepPartialify");
var ZodObject = class _ZodObject extends ZodType {
  static {
    __name(this, "ZodObject");
  }
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: /* @__PURE__ */ __name((issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }, "errorMap")
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => ({
        ...this._def.shape(),
        ...augmentation
      }), "shape")
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: /* @__PURE__ */ __name(() => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }), "shape"),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => shape, "shape")
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => shape, "shape")
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => newShape, "shape")
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => newShape, "shape")
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: /* @__PURE__ */ __name(() => shape, "shape"),
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: /* @__PURE__ */ __name(() => shape, "shape"),
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  static {
    __name(this, "ZodUnion");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    __name(handleResults, "handleResults");
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = /* @__PURE__ */ __name((type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
}, "getDiscriminator");
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  static {
    __name(this, "ZodDiscriminatedUnion");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b2) {
  const aType = getParsedType(a);
  const bType = getParsedType(b2);
  if (a === b2) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b2);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b2 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b2[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b2.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b2[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b2) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
__name(mergeValues, "mergeValues");
var ZodIntersection = class extends ZodType {
  static {
    __name(this, "ZodIntersection");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = /* @__PURE__ */ __name((parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    }, "handleParsed");
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  static {
    __name(this, "ZodTuple");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x2) => !!x2);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  static {
    __name(this, "ZodRecord");
  }
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  static {
    __name(this, "ZodMap");
  }
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  static {
    __name(this, "ZodSet");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    __name(finalizeSet, "finalizeSet");
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  static {
    __name(this, "ZodFunction");
  }
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    __name(makeArgsIssue, "makeArgsIssue");
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x2) => !!x2),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    __name(makeReturnsIssue, "makeReturnsIssue");
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn2 = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn2, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn2, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  static {
    __name(this, "ZodLazy");
  }
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  static {
    __name(this, "ZodLiteral");
  }
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
__name(createZodEnum, "createZodEnum");
var ZodEnum = class _ZodEnum extends ZodType {
  static {
    __name(this, "ZodEnum");
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  static {
    __name(this, "ZodNativeEnum");
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  static {
    __name(this, "ZodPromise");
  }
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  static {
    __name(this, "ZodEffects");
  }
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: /* @__PURE__ */ __name((arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      }, "addIssue"),
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = /* @__PURE__ */ __name((acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      }, "executeRefinement");
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  static {
    __name(this, "ZodOptional");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  static {
    __name(this, "ZodNullable");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  static {
    __name(this, "ZodDefault");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  static {
    __name(this, "ZodCatch");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  static {
    __name(this, "ZodNaN");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  static {
    __name(this, "ZodBranded");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  static {
    __name(this, "ZodPipeline");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = /* @__PURE__ */ __name(async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }, "handleAsync");
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b2) {
    return new _ZodPipeline({
      in: a,
      out: b2,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  static {
    __name(this, "ZodReadonly");
  }
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = /* @__PURE__ */ __name((data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    }, "freeze");
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
__name(cleanParams, "cleanParams");
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
__name(custom, "custom");
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = /* @__PURE__ */ __name((cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params), "instanceOfType");
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = /* @__PURE__ */ __name(() => stringType().optional(), "ostring");
var onumber = /* @__PURE__ */ __name(() => numberType().optional(), "onumber");
var oboolean = /* @__PURE__ */ __name(() => booleanType().optional(), "oboolean");
var coerce = {
  string: /* @__PURE__ */ __name(((arg) => ZodString.create({ ...arg, coerce: true })), "string"),
  number: /* @__PURE__ */ __name(((arg) => ZodNumber.create({ ...arg, coerce: true })), "number"),
  boolean: /* @__PURE__ */ __name(((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })), "boolean"),
  bigint: /* @__PURE__ */ __name(((arg) => ZodBigInt.create({ ...arg, coerce: true })), "bigint"),
  date: /* @__PURE__ */ __name(((arg) => ZodDate.create({ ...arg, coerce: true })), "date")
};
var NEVER = INVALID;

// ../../node_modules/.pnpm/bcryptjs@3.0.2/node_modules/bcryptjs/index.js
import nodeCrypto from "crypto";
var randomFallback = null;
function randomBytes(len) {
  try {
    return crypto.getRandomValues(new Uint8Array(len));
  } catch {
  }
  try {
    return nodeCrypto.randomBytes(len);
  } catch {
  }
  if (!randomFallback) {
    throw Error(
      "Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative"
    );
  }
  return randomFallback(len);
}
__name(randomBytes, "randomBytes");
function setRandomFallback(random) {
  randomFallback = random;
}
__name(setRandomFallback, "setRandomFallback");
function genSaltSync(rounds, seed_length) {
  rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
  if (typeof rounds !== "number")
    throw Error(
      "Illegal arguments: " + typeof rounds + ", " + typeof seed_length
    );
  if (rounds < 4) rounds = 4;
  else if (rounds > 31) rounds = 31;
  var salt = [];
  salt.push("$2b$");
  if (rounds < 10) salt.push("0");
  salt.push(rounds.toString());
  salt.push("$");
  salt.push(base64_encode(randomBytes(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN));
  return salt.join("");
}
__name(genSaltSync, "genSaltSync");
function genSalt(rounds, seed_length, callback) {
  if (typeof seed_length === "function")
    callback = seed_length, seed_length = void 0;
  if (typeof rounds === "function") callback = rounds, rounds = void 0;
  if (typeof rounds === "undefined") rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
  else if (typeof rounds !== "number")
    throw Error("illegal arguments: " + typeof rounds);
  function _async(callback2) {
    nextTick(function() {
      try {
        callback2(null, genSaltSync(rounds));
      } catch (err) {
        callback2(err);
      }
    });
  }
  __name(_async, "_async");
  if (callback) {
    if (typeof callback !== "function")
      throw Error("Illegal callback: " + typeof callback);
    _async(callback);
  } else
    return new Promise(function(resolve, reject) {
      _async(function(err, res) {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
}
__name(genSalt, "genSalt");
function hashSync(password, salt) {
  if (typeof salt === "undefined") salt = GENSALT_DEFAULT_LOG2_ROUNDS;
  if (typeof salt === "number") salt = genSaltSync(salt);
  if (typeof password !== "string" || typeof salt !== "string")
    throw Error("Illegal arguments: " + typeof password + ", " + typeof salt);
  return _hash(password, salt);
}
__name(hashSync, "hashSync");
function hash(password, salt, callback, progressCallback) {
  function _async(callback2) {
    if (typeof password === "string" && typeof salt === "number")
      genSalt(salt, function(err, salt2) {
        _hash(password, salt2, callback2, progressCallback);
      });
    else if (typeof password === "string" && typeof salt === "string")
      _hash(password, salt, callback2, progressCallback);
    else
      nextTick(
        callback2.bind(
          this,
          Error("Illegal arguments: " + typeof password + ", " + typeof salt)
        )
      );
  }
  __name(_async, "_async");
  if (callback) {
    if (typeof callback !== "function")
      throw Error("Illegal callback: " + typeof callback);
    _async(callback);
  } else
    return new Promise(function(resolve, reject) {
      _async(function(err, res) {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
}
__name(hash, "hash");
function safeStringCompare(known, unknown) {
  var diff = known.length ^ unknown.length;
  for (var i = 0; i < known.length; ++i) {
    diff |= known.charCodeAt(i) ^ unknown.charCodeAt(i);
  }
  return diff === 0;
}
__name(safeStringCompare, "safeStringCompare");
function compareSync(password, hash2) {
  if (typeof password !== "string" || typeof hash2 !== "string")
    throw Error("Illegal arguments: " + typeof password + ", " + typeof hash2);
  if (hash2.length !== 60) return false;
  return safeStringCompare(
    hashSync(password, hash2.substring(0, hash2.length - 31)),
    hash2
  );
}
__name(compareSync, "compareSync");
function compare(password, hashValue, callback, progressCallback) {
  function _async(callback2) {
    if (typeof password !== "string" || typeof hashValue !== "string") {
      nextTick(
        callback2.bind(
          this,
          Error(
            "Illegal arguments: " + typeof password + ", " + typeof hashValue
          )
        )
      );
      return;
    }
    if (hashValue.length !== 60) {
      nextTick(callback2.bind(this, null, false));
      return;
    }
    hash(
      password,
      hashValue.substring(0, 29),
      function(err, comp) {
        if (err) callback2(err);
        else callback2(null, safeStringCompare(comp, hashValue));
      },
      progressCallback
    );
  }
  __name(_async, "_async");
  if (callback) {
    if (typeof callback !== "function")
      throw Error("Illegal callback: " + typeof callback);
    _async(callback);
  } else
    return new Promise(function(resolve, reject) {
      _async(function(err, res) {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
}
__name(compare, "compare");
function getRounds(hash2) {
  if (typeof hash2 !== "string")
    throw Error("Illegal arguments: " + typeof hash2);
  return parseInt(hash2.split("$")[2], 10);
}
__name(getRounds, "getRounds");
function getSalt(hash2) {
  if (typeof hash2 !== "string")
    throw Error("Illegal arguments: " + typeof hash2);
  if (hash2.length !== 60)
    throw Error("Illegal hash length: " + hash2.length + " != 60");
  return hash2.substring(0, 29);
}
__name(getSalt, "getSalt");
function truncates(password) {
  if (typeof password !== "string")
    throw Error("Illegal arguments: " + typeof password);
  return utf8Length(password) > 72;
}
__name(truncates, "truncates");
var nextTick = typeof process !== "undefined" && process && typeof process.nextTick === "function" ? typeof setImmediate === "function" ? setImmediate : process.nextTick : setTimeout;
function utf8Length(string) {
  var len = 0, c = 0;
  for (var i = 0; i < string.length; ++i) {
    c = string.charCodeAt(i);
    if (c < 128) len += 1;
    else if (c < 2048) len += 2;
    else if ((c & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
      ++i;
      len += 4;
    } else len += 3;
  }
  return len;
}
__name(utf8Length, "utf8Length");
function utf8Array(string) {
  var offset = 0, c1, c2;
  var buffer = new Array(utf8Length(string));
  for (var i = 0, k2 = string.length; i < k2; ++i) {
    c1 = string.charCodeAt(i);
    if (c1 < 128) {
      buffer[offset++] = c1;
    } else if (c1 < 2048) {
      buffer[offset++] = c1 >> 6 | 192;
      buffer[offset++] = c1 & 63 | 128;
    } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
      c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
      ++i;
      buffer[offset++] = c1 >> 18 | 240;
      buffer[offset++] = c1 >> 12 & 63 | 128;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    } else {
      buffer[offset++] = c1 >> 12 | 224;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    }
  }
  return buffer;
}
__name(utf8Array, "utf8Array");
var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
var BASE64_INDEX = [
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  1,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  -1,
  -1,
  -1,
  -1,
  -1
];
function base64_encode(b2, len) {
  var off = 0, rs2 = [], c1, c2;
  if (len <= 0 || len > b2.length) throw Error("Illegal len: " + len);
  while (off < len) {
    c1 = b2[off++] & 255;
    rs2.push(BASE64_CODE[c1 >> 2 & 63]);
    c1 = (c1 & 3) << 4;
    if (off >= len) {
      rs2.push(BASE64_CODE[c1 & 63]);
      break;
    }
    c2 = b2[off++] & 255;
    c1 |= c2 >> 4 & 15;
    rs2.push(BASE64_CODE[c1 & 63]);
    c1 = (c2 & 15) << 2;
    if (off >= len) {
      rs2.push(BASE64_CODE[c1 & 63]);
      break;
    }
    c2 = b2[off++] & 255;
    c1 |= c2 >> 6 & 3;
    rs2.push(BASE64_CODE[c1 & 63]);
    rs2.push(BASE64_CODE[c2 & 63]);
  }
  return rs2.join("");
}
__name(base64_encode, "base64_encode");
function base64_decode(s, len) {
  var off = 0, slen = s.length, olen = 0, rs2 = [], c1, c2, c3, c4, o, code;
  if (len <= 0) throw Error("Illegal len: " + len);
  while (off < slen - 1 && olen < len) {
    code = s.charCodeAt(off++);
    c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
    code = s.charCodeAt(off++);
    c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
    if (c1 == -1 || c2 == -1) break;
    o = c1 << 2 >>> 0;
    o |= (c2 & 48) >> 4;
    rs2.push(String.fromCharCode(o));
    if (++olen >= len || off >= slen) break;
    code = s.charCodeAt(off++);
    c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
    if (c3 == -1) break;
    o = (c2 & 15) << 4 >>> 0;
    o |= (c3 & 60) >> 2;
    rs2.push(String.fromCharCode(o));
    if (++olen >= len || off >= slen) break;
    code = s.charCodeAt(off++);
    c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
    o = (c3 & 3) << 6 >>> 0;
    o |= c4;
    rs2.push(String.fromCharCode(o));
    ++olen;
  }
  var res = [];
  for (off = 0; off < olen; off++) res.push(rs2[off].charCodeAt(0));
  return res;
}
__name(base64_decode, "base64_decode");
var BCRYPT_SALT_LEN = 16;
var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
var BLOWFISH_NUM_ROUNDS = 16;
var MAX_EXECUTION_TIME = 100;
var P_ORIG = [
  608135816,
  2242054355,
  320440878,
  57701188,
  2752067618,
  698298832,
  137296536,
  3964562569,
  1160258022,
  953160567,
  3193202383,
  887688300,
  3232508343,
  3380367581,
  1065670069,
  3041331479,
  2450970073,
  2306472731
];
var S_ORIG = [
  3509652390,
  2564797868,
  805139163,
  3491422135,
  3101798381,
  1780907670,
  3128725573,
  4046225305,
  614570311,
  3012652279,
  134345442,
  2240740374,
  1667834072,
  1901547113,
  2757295779,
  4103290238,
  227898511,
  1921955416,
  1904987480,
  2182433518,
  2069144605,
  3260701109,
  2620446009,
  720527379,
  3318853667,
  677414384,
  3393288472,
  3101374703,
  2390351024,
  1614419982,
  1822297739,
  2954791486,
  3608508353,
  3174124327,
  2024746970,
  1432378464,
  3864339955,
  2857741204,
  1464375394,
  1676153920,
  1439316330,
  715854006,
  3033291828,
  289532110,
  2706671279,
  2087905683,
  3018724369,
  1668267050,
  732546397,
  1947742710,
  3462151702,
  2609353502,
  2950085171,
  1814351708,
  2050118529,
  680887927,
  999245976,
  1800124847,
  3300911131,
  1713906067,
  1641548236,
  4213287313,
  1216130144,
  1575780402,
  4018429277,
  3917837745,
  3693486850,
  3949271944,
  596196993,
  3549867205,
  258830323,
  2213823033,
  772490370,
  2760122372,
  1774776394,
  2652871518,
  566650946,
  4142492826,
  1728879713,
  2882767088,
  1783734482,
  3629395816,
  2517608232,
  2874225571,
  1861159788,
  326777828,
  3124490320,
  2130389656,
  2716951837,
  967770486,
  1724537150,
  2185432712,
  2364442137,
  1164943284,
  2105845187,
  998989502,
  3765401048,
  2244026483,
  1075463327,
  1455516326,
  1322494562,
  910128902,
  469688178,
  1117454909,
  936433444,
  3490320968,
  3675253459,
  1240580251,
  122909385,
  2157517691,
  634681816,
  4142456567,
  3825094682,
  3061402683,
  2540495037,
  79693498,
  3249098678,
  1084186820,
  1583128258,
  426386531,
  1761308591,
  1047286709,
  322548459,
  995290223,
  1845252383,
  2603652396,
  3431023940,
  2942221577,
  3202600964,
  3727903485,
  1712269319,
  422464435,
  3234572375,
  1170764815,
  3523960633,
  3117677531,
  1434042557,
  442511882,
  3600875718,
  1076654713,
  1738483198,
  4213154764,
  2393238008,
  3677496056,
  1014306527,
  4251020053,
  793779912,
  2902807211,
  842905082,
  4246964064,
  1395751752,
  1040244610,
  2656851899,
  3396308128,
  445077038,
  3742853595,
  3577915638,
  679411651,
  2892444358,
  2354009459,
  1767581616,
  3150600392,
  3791627101,
  3102740896,
  284835224,
  4246832056,
  1258075500,
  768725851,
  2589189241,
  3069724005,
  3532540348,
  1274779536,
  3789419226,
  2764799539,
  1660621633,
  3471099624,
  4011903706,
  913787905,
  3497959166,
  737222580,
  2514213453,
  2928710040,
  3937242737,
  1804850592,
  3499020752,
  2949064160,
  2386320175,
  2390070455,
  2415321851,
  4061277028,
  2290661394,
  2416832540,
  1336762016,
  1754252060,
  3520065937,
  3014181293,
  791618072,
  3188594551,
  3933548030,
  2332172193,
  3852520463,
  3043980520,
  413987798,
  3465142937,
  3030929376,
  4245938359,
  2093235073,
  3534596313,
  375366246,
  2157278981,
  2479649556,
  555357303,
  3870105701,
  2008414854,
  3344188149,
  4221384143,
  3956125452,
  2067696032,
  3594591187,
  2921233993,
  2428461,
  544322398,
  577241275,
  1471733935,
  610547355,
  4027169054,
  1432588573,
  1507829418,
  2025931657,
  3646575487,
  545086370,
  48609733,
  2200306550,
  1653985193,
  298326376,
  1316178497,
  3007786442,
  2064951626,
  458293330,
  2589141269,
  3591329599,
  3164325604,
  727753846,
  2179363840,
  146436021,
  1461446943,
  4069977195,
  705550613,
  3059967265,
  3887724982,
  4281599278,
  3313849956,
  1404054877,
  2845806497,
  146425753,
  1854211946,
  1266315497,
  3048417604,
  3681880366,
  3289982499,
  290971e4,
  1235738493,
  2632868024,
  2414719590,
  3970600049,
  1771706367,
  1449415276,
  3266420449,
  422970021,
  1963543593,
  2690192192,
  3826793022,
  1062508698,
  1531092325,
  1804592342,
  2583117782,
  2714934279,
  4024971509,
  1294809318,
  4028980673,
  1289560198,
  2221992742,
  1669523910,
  35572830,
  157838143,
  1052438473,
  1016535060,
  1802137761,
  1753167236,
  1386275462,
  3080475397,
  2857371447,
  1040679964,
  2145300060,
  2390574316,
  1461121720,
  2956646967,
  4031777805,
  4028374788,
  33600511,
  2920084762,
  1018524850,
  629373528,
  3691585981,
  3515945977,
  2091462646,
  2486323059,
  586499841,
  988145025,
  935516892,
  3367335476,
  2599673255,
  2839830854,
  265290510,
  3972581182,
  2759138881,
  3795373465,
  1005194799,
  847297441,
  406762289,
  1314163512,
  1332590856,
  1866599683,
  4127851711,
  750260880,
  613907577,
  1450815602,
  3165620655,
  3734664991,
  3650291728,
  3012275730,
  3704569646,
  1427272223,
  778793252,
  1343938022,
  2676280711,
  2052605720,
  1946737175,
  3164576444,
  3914038668,
  3967478842,
  3682934266,
  1661551462,
  3294938066,
  4011595847,
  840292616,
  3712170807,
  616741398,
  312560963,
  711312465,
  1351876610,
  322626781,
  1910503582,
  271666773,
  2175563734,
  1594956187,
  70604529,
  3617834859,
  1007753275,
  1495573769,
  4069517037,
  2549218298,
  2663038764,
  504708206,
  2263041392,
  3941167025,
  2249088522,
  1514023603,
  1998579484,
  1312622330,
  694541497,
  2582060303,
  2151582166,
  1382467621,
  776784248,
  2618340202,
  3323268794,
  2497899128,
  2784771155,
  503983604,
  4076293799,
  907881277,
  423175695,
  432175456,
  1378068232,
  4145222326,
  3954048622,
  3938656102,
  3820766613,
  2793130115,
  2977904593,
  26017576,
  3274890735,
  3194772133,
  1700274565,
  1756076034,
  4006520079,
  3677328699,
  720338349,
  1533947780,
  354530856,
  688349552,
  3973924725,
  1637815568,
  332179504,
  3949051286,
  53804574,
  2852348879,
  3044236432,
  1282449977,
  3583942155,
  3416972820,
  4006381244,
  1617046695,
  2628476075,
  3002303598,
  1686838959,
  431878346,
  2686675385,
  1700445008,
  1080580658,
  1009431731,
  832498133,
  3223435511,
  2605976345,
  2271191193,
  2516031870,
  1648197032,
  4164389018,
  2548247927,
  300782431,
  375919233,
  238389289,
  3353747414,
  2531188641,
  2019080857,
  1475708069,
  455242339,
  2609103871,
  448939670,
  3451063019,
  1395535956,
  2413381860,
  1841049896,
  1491858159,
  885456874,
  4264095073,
  4001119347,
  1565136089,
  3898914787,
  1108368660,
  540939232,
  1173283510,
  2745871338,
  3681308437,
  4207628240,
  3343053890,
  4016749493,
  1699691293,
  1103962373,
  3625875870,
  2256883143,
  3830138730,
  1031889488,
  3479347698,
  1535977030,
  4236805024,
  3251091107,
  2132092099,
  1774941330,
  1199868427,
  1452454533,
  157007616,
  2904115357,
  342012276,
  595725824,
  1480756522,
  206960106,
  497939518,
  591360097,
  863170706,
  2375253569,
  3596610801,
  1814182875,
  2094937945,
  3421402208,
  1082520231,
  3463918190,
  2785509508,
  435703966,
  3908032597,
  1641649973,
  2842273706,
  3305899714,
  1510255612,
  2148256476,
  2655287854,
  3276092548,
  4258621189,
  236887753,
  3681803219,
  274041037,
  1734335097,
  3815195456,
  3317970021,
  1899903192,
  1026095262,
  4050517792,
  356393447,
  2410691914,
  3873677099,
  3682840055,
  3913112168,
  2491498743,
  4132185628,
  2489919796,
  1091903735,
  1979897079,
  3170134830,
  3567386728,
  3557303409,
  857797738,
  1136121015,
  1342202287,
  507115054,
  2535736646,
  337727348,
  3213592640,
  1301675037,
  2528481711,
  1895095763,
  1721773893,
  3216771564,
  62756741,
  2142006736,
  835421444,
  2531993523,
  1442658625,
  3659876326,
  2882144922,
  676362277,
  1392781812,
  170690266,
  3921047035,
  1759253602,
  3611846912,
  1745797284,
  664899054,
  1329594018,
  3901205900,
  3045908486,
  2062866102,
  2865634940,
  3543621612,
  3464012697,
  1080764994,
  553557557,
  3656615353,
  3996768171,
  991055499,
  499776247,
  1265440854,
  648242737,
  3940784050,
  980351604,
  3713745714,
  1749149687,
  3396870395,
  4211799374,
  3640570775,
  1161844396,
  3125318951,
  1431517754,
  545492359,
  4268468663,
  3499529547,
  1437099964,
  2702547544,
  3433638243,
  2581715763,
  2787789398,
  1060185593,
  1593081372,
  2418618748,
  4260947970,
  69676912,
  2159744348,
  86519011,
  2512459080,
  3838209314,
  1220612927,
  3339683548,
  133810670,
  1090789135,
  1078426020,
  1569222167,
  845107691,
  3583754449,
  4072456591,
  1091646820,
  628848692,
  1613405280,
  3757631651,
  526609435,
  236106946,
  48312990,
  2942717905,
  3402727701,
  1797494240,
  859738849,
  992217954,
  4005476642,
  2243076622,
  3870952857,
  3732016268,
  765654824,
  3490871365,
  2511836413,
  1685915746,
  3888969200,
  1414112111,
  2273134842,
  3281911079,
  4080962846,
  172450625,
  2569994100,
  980381355,
  4109958455,
  2819808352,
  2716589560,
  2568741196,
  3681446669,
  3329971472,
  1835478071,
  660984891,
  3704678404,
  4045999559,
  3422617507,
  3040415634,
  1762651403,
  1719377915,
  3470491036,
  2693910283,
  3642056355,
  3138596744,
  1364962596,
  2073328063,
  1983633131,
  926494387,
  3423689081,
  2150032023,
  4096667949,
  1749200295,
  3328846651,
  309677260,
  2016342300,
  1779581495,
  3079819751,
  111262694,
  1274766160,
  443224088,
  298511866,
  1025883608,
  3806446537,
  1145181785,
  168956806,
  3641502830,
  3584813610,
  1689216846,
  3666258015,
  3200248200,
  1692713982,
  2646376535,
  4042768518,
  1618508792,
  1610833997,
  3523052358,
  4130873264,
  2001055236,
  3610705100,
  2202168115,
  4028541809,
  2961195399,
  1006657119,
  2006996926,
  3186142756,
  1430667929,
  3210227297,
  1314452623,
  4074634658,
  4101304120,
  2273951170,
  1399257539,
  3367210612,
  3027628629,
  1190975929,
  2062231137,
  2333990788,
  2221543033,
  2438960610,
  1181637006,
  548689776,
  2362791313,
  3372408396,
  3104550113,
  3145860560,
  296247880,
  1970579870,
  3078560182,
  3769228297,
  1714227617,
  3291629107,
  3898220290,
  166772364,
  1251581989,
  493813264,
  448347421,
  195405023,
  2709975567,
  677966185,
  3703036547,
  1463355134,
  2715995803,
  1338867538,
  1343315457,
  2802222074,
  2684532164,
  233230375,
  2599980071,
  2000651841,
  3277868038,
  1638401717,
  4028070440,
  3237316320,
  6314154,
  819756386,
  300326615,
  590932579,
  1405279636,
  3267499572,
  3150704214,
  2428286686,
  3959192993,
  3461946742,
  1862657033,
  1266418056,
  963775037,
  2089974820,
  2263052895,
  1917689273,
  448879540,
  3550394620,
  3981727096,
  150775221,
  3627908307,
  1303187396,
  508620638,
  2975983352,
  2726630617,
  1817252668,
  1876281319,
  1457606340,
  908771278,
  3720792119,
  3617206836,
  2455994898,
  1729034894,
  1080033504,
  976866871,
  3556439503,
  2881648439,
  1522871579,
  1555064734,
  1336096578,
  3548522304,
  2579274686,
  3574697629,
  3205460757,
  3593280638,
  3338716283,
  3079412587,
  564236357,
  2993598910,
  1781952180,
  1464380207,
  3163844217,
  3332601554,
  1699332808,
  1393555694,
  1183702653,
  3581086237,
  1288719814,
  691649499,
  2847557200,
  2895455976,
  3193889540,
  2717570544,
  1781354906,
  1676643554,
  2592534050,
  3230253752,
  1126444790,
  2770207658,
  2633158820,
  2210423226,
  2615765581,
  2414155088,
  3127139286,
  673620729,
  2805611233,
  1269405062,
  4015350505,
  3341807571,
  4149409754,
  1057255273,
  2012875353,
  2162469141,
  2276492801,
  2601117357,
  993977747,
  3918593370,
  2654263191,
  753973209,
  36408145,
  2530585658,
  25011837,
  3520020182,
  2088578344,
  530523599,
  2918365339,
  1524020338,
  1518925132,
  3760827505,
  3759777254,
  1202760957,
  3985898139,
  3906192525,
  674977740,
  4174734889,
  2031300136,
  2019492241,
  3983892565,
  4153806404,
  3822280332,
  352677332,
  2297720250,
  60907813,
  90501309,
  3286998549,
  1016092578,
  2535922412,
  2839152426,
  457141659,
  509813237,
  4120667899,
  652014361,
  1966332200,
  2975202805,
  55981186,
  2327461051,
  676427537,
  3255491064,
  2882294119,
  3433927263,
  1307055953,
  942726286,
  933058658,
  2468411793,
  3933900994,
  4215176142,
  1361170020,
  2001714738,
  2830558078,
  3274259782,
  1222529897,
  1679025792,
  2729314320,
  3714953764,
  1770335741,
  151462246,
  3013232138,
  1682292957,
  1483529935,
  471910574,
  1539241949,
  458788160,
  3436315007,
  1807016891,
  3718408830,
  978976581,
  1043663428,
  3165965781,
  1927990952,
  4200891579,
  2372276910,
  3208408903,
  3533431907,
  1412390302,
  2931980059,
  4132332400,
  1947078029,
  3881505623,
  4168226417,
  2941484381,
  1077988104,
  1320477388,
  886195818,
  18198404,
  3786409e3,
  2509781533,
  112762804,
  3463356488,
  1866414978,
  891333506,
  18488651,
  661792760,
  1628790961,
  3885187036,
  3141171499,
  876946877,
  2693282273,
  1372485963,
  791857591,
  2686433993,
  3759982718,
  3167212022,
  3472953795,
  2716379847,
  445679433,
  3561995674,
  3504004811,
  3574258232,
  54117162,
  3331405415,
  2381918588,
  3769707343,
  4154350007,
  1140177722,
  4074052095,
  668550556,
  3214352940,
  367459370,
  261225585,
  2610173221,
  4209349473,
  3468074219,
  3265815641,
  314222801,
  3066103646,
  3808782860,
  282218597,
  3406013506,
  3773591054,
  379116347,
  1285071038,
  846784868,
  2669647154,
  3771962079,
  3550491691,
  2305946142,
  453669953,
  1268987020,
  3317592352,
  3279303384,
  3744833421,
  2610507566,
  3859509063,
  266596637,
  3847019092,
  517658769,
  3462560207,
  3443424879,
  370717030,
  4247526661,
  2224018117,
  4143653529,
  4112773975,
  2788324899,
  2477274417,
  1456262402,
  2901442914,
  1517677493,
  1846949527,
  2295493580,
  3734397586,
  2176403920,
  1280348187,
  1908823572,
  3871786941,
  846861322,
  1172426758,
  3287448474,
  3383383037,
  1655181056,
  3139813346,
  901632758,
  1897031941,
  2986607138,
  3066810236,
  3447102507,
  1393639104,
  373351379,
  950779232,
  625454576,
  3124240540,
  4148612726,
  2007998917,
  544563296,
  2244738638,
  2330496472,
  2058025392,
  1291430526,
  424198748,
  50039436,
  29584100,
  3605783033,
  2429876329,
  2791104160,
  1057563949,
  3255363231,
  3075367218,
  3463963227,
  1469046755,
  985887462
];
var C_ORIG = [
  1332899944,
  1700884034,
  1701343084,
  1684370003,
  1668446532,
  1869963892
];
function _encipher(lr2, off, P2, S) {
  var n, l = lr2[off], r = lr2[off + 1];
  l ^= P2[0];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P2[1];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P2[2];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P2[3];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P2[4];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P2[5];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P2[6];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P2[7];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P2[8];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P2[9];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P2[10];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P2[11];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P2[12];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P2[13];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P2[14];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P2[15];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P2[16];
  lr2[off] = r ^ P2[BLOWFISH_NUM_ROUNDS + 1];
  lr2[off + 1] = l;
  return lr2;
}
__name(_encipher, "_encipher");
function _streamtoword(data, offp) {
  for (var i = 0, word = 0; i < 4; ++i)
    word = word << 8 | data[offp] & 255, offp = (offp + 1) % data.length;
  return { key: word, offp };
}
__name(_streamtoword, "_streamtoword");
function _key(key, P2, S) {
  var offset = 0, lr2 = [0, 0], plen = P2.length, slen = S.length, sw;
  for (var i = 0; i < plen; i++)
    sw = _streamtoword(key, offset), offset = sw.offp, P2[i] = P2[i] ^ sw.key;
  for (i = 0; i < plen; i += 2)
    lr2 = _encipher(lr2, 0, P2, S), P2[i] = lr2[0], P2[i + 1] = lr2[1];
  for (i = 0; i < slen; i += 2)
    lr2 = _encipher(lr2, 0, P2, S), S[i] = lr2[0], S[i + 1] = lr2[1];
}
__name(_key, "_key");
function _ekskey(data, key, P2, S) {
  var offp = 0, lr2 = [0, 0], plen = P2.length, slen = S.length, sw;
  for (var i = 0; i < plen; i++)
    sw = _streamtoword(key, offp), offp = sw.offp, P2[i] = P2[i] ^ sw.key;
  offp = 0;
  for (i = 0; i < plen; i += 2)
    sw = _streamtoword(data, offp), offp = sw.offp, lr2[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr2[1] ^= sw.key, lr2 = _encipher(lr2, 0, P2, S), P2[i] = lr2[0], P2[i + 1] = lr2[1];
  for (i = 0; i < slen; i += 2)
    sw = _streamtoword(data, offp), offp = sw.offp, lr2[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr2[1] ^= sw.key, lr2 = _encipher(lr2, 0, P2, S), S[i] = lr2[0], S[i + 1] = lr2[1];
}
__name(_ekskey, "_ekskey");
function _crypt(b2, salt, rounds, callback, progressCallback) {
  var cdata = C_ORIG.slice(), clen = cdata.length, err;
  if (rounds < 4 || rounds > 31) {
    err = Error("Illegal number of rounds (4-31): " + rounds);
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  if (salt.length !== BCRYPT_SALT_LEN) {
    err = Error(
      "Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN
    );
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  rounds = 1 << rounds >>> 0;
  var P2, S, i = 0, j2;
  if (typeof Int32Array === "function") {
    P2 = new Int32Array(P_ORIG);
    S = new Int32Array(S_ORIG);
  } else {
    P2 = P_ORIG.slice();
    S = S_ORIG.slice();
  }
  _ekskey(salt, b2, P2, S);
  function next() {
    if (progressCallback) progressCallback(i / rounds);
    if (i < rounds) {
      var start = Date.now();
      for (; i < rounds; ) {
        i = i + 1;
        _key(b2, P2, S);
        _key(salt, P2, S);
        if (Date.now() - start > MAX_EXECUTION_TIME) break;
      }
    } else {
      for (i = 0; i < 64; i++)
        for (j2 = 0; j2 < clen >> 1; j2++) _encipher(cdata, j2 << 1, P2, S);
      var ret = [];
      for (i = 0; i < clen; i++)
        ret.push((cdata[i] >> 24 & 255) >>> 0), ret.push((cdata[i] >> 16 & 255) >>> 0), ret.push((cdata[i] >> 8 & 255) >>> 0), ret.push((cdata[i] & 255) >>> 0);
      if (callback) {
        callback(null, ret);
        return;
      } else return ret;
    }
    if (callback) nextTick(next);
  }
  __name(next, "next");
  if (typeof callback !== "undefined") {
    next();
  } else {
    var res;
    while (true) if (typeof (res = next()) !== "undefined") return res || [];
  }
}
__name(_crypt, "_crypt");
function _hash(password, salt, callback, progressCallback) {
  var err;
  if (typeof password !== "string" || typeof salt !== "string") {
    err = Error("Invalid string / salt: Not a string");
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  var minor, offset;
  if (salt.charAt(0) !== "$" || salt.charAt(1) !== "2") {
    err = Error("Invalid salt version: " + salt.substring(0, 2));
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  if (salt.charAt(2) === "$") minor = String.fromCharCode(0), offset = 3;
  else {
    minor = salt.charAt(2);
    if (minor !== "a" && minor !== "b" && minor !== "y" || salt.charAt(3) !== "$") {
      err = Error("Invalid salt revision: " + salt.substring(2, 4));
      if (callback) {
        nextTick(callback.bind(this, err));
        return;
      } else throw err;
    }
    offset = 4;
  }
  if (salt.charAt(offset + 2) > "$") {
    err = Error("Missing salt rounds");
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10, r2 = parseInt(salt.substring(offset + 1, offset + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset + 3, offset + 25);
  password += minor >= "a" ? "\0" : "";
  var passwordb = utf8Array(password), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
  function finish(bytes) {
    var res = [];
    res.push("$2");
    if (minor >= "a") res.push(minor);
    res.push("$");
    if (rounds < 10) res.push("0");
    res.push(rounds.toString());
    res.push("$");
    res.push(base64_encode(saltb, saltb.length));
    res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
    return res.join("");
  }
  __name(finish, "finish");
  if (typeof callback == "undefined")
    return finish(_crypt(passwordb, saltb, rounds));
  else {
    _crypt(
      passwordb,
      saltb,
      rounds,
      function(err2, bytes) {
        if (err2) callback(err2, null);
        else callback(null, finish(bytes));
      },
      progressCallback
    );
  }
}
__name(_hash, "_hash");
function encodeBase64(bytes, length) {
  return base64_encode(bytes, length);
}
__name(encodeBase64, "encodeBase64");
function decodeBase64(string, length) {
  return base64_decode(string, length);
}
__name(decodeBase64, "decodeBase64");
var bcryptjs_default = {
  setRandomFallback,
  genSaltSync,
  genSalt,
  hashSync,
  hash,
  compareSync,
  compare,
  getRounds,
  getSalt,
  truncates,
  encodeBase64,
  decodeBase64
};

// src/router.ts
var loginSchema = external_exports.object({
  email: external_exports.string().email("Invalid email address"),
  password: external_exports.string().min(8, "Password must be at least 8 characters")
});
var appRouter = router({
  getUsers: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany({
      select: { email: true }
    });
    return users.map((user) => user.email);
  }),
  login: publicProcedure.input(loginSchema).mutation(async ({ input, ctx }) => {
    const user = await ctx.prisma.user.findUnique({
      where: { email: input.email }
    });
    if (!user) {
      throw new Error("Invalid email or password");
    }
    const isPasswordValid = await bcryptjs_default.compare(
      input.password,
      user.password
    );
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }
    return {
      id: user.id,
      email: user.email,
      token: "mock-jwt-token-" + user.id,
      refreshToken: "mock-refresh-" + user.id
    };
  })
});

// src/functions/trpc.ts
var import_client = __toESM(require_client(), 1);
var handler = /* @__PURE__ */ __name(async (event) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": event.headers.origin || "http://localhost:5173",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-site-id",
    "Access-Control-Allow-Credentials": "true"
  };
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: ""
    };
  }
  const siteId = event.headers["x-site-id"] || "site1";
  const dbUrlEnv = `DATABASE_URL_${siteId.toUpperCase()}`;
  const dbUrl = process.env[dbUrlEnv];
  if (!dbUrl) {
    return {
      statusCode: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({
        error: `No database configuration for site: ${siteId}`
      })
    };
  }
  let prisma;
  try {
    prisma = new import_client.PrismaClient({
      datasources: { db: { url: dbUrl } },
      log: ["query", "info", "warn", "error"]
    });
  } catch (error) {
    console.error("Failed to create PrismaClient:", error);
    return {
      statusCode: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Failed to initialize database client" })
    };
  }
  try {
    const path = event.path.replace(/^(\/\.netlify\/functions\/trpc|\/trpc)\//, "").replace(/^\/+/, "");
    const queryString = event.queryStringParameters ? new URLSearchParams(
      event.queryStringParameters
    ).toString() : "";
    const headers = {};
    for (const [key, value] of Object.entries(event.headers || {})) {
      headers[key] = Array.isArray(value) ? value.join(",") : value ?? "";
    }
    const url = `http://${headers.host || "localhost:8888"}/trpc${path ? `/${path}` : ""}${queryString ? `?${queryString}` : ""}`;
    const response = await fetchRequestHandler({
      endpoint: "/trpc",
      req: new Request(url, {
        method: event.httpMethod,
        headers,
        body: event.httpMethod !== "GET" && event.body ? event.body : void 0
      }),
      router: appRouter,
      createContext: /* @__PURE__ */ __name(() => ({
        siteId,
        prisma
      }), "createContext"),
      onError: /* @__PURE__ */ __name(({ error, path: path2 }) => {
        console.error(`tRPC handler error for path ${path2}:`, error);
      }, "onError")
    });
    const responseBody = await response.text();
    return {
      statusCode: response.status,
      headers: { ...Object.fromEntries(response.headers), ...corsHeaders },
      body: responseBody
    };
  } catch (error) {
    console.error("tRPC error:", error);
    return {
      statusCode: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Internal server error" })
    };
  } finally {
    await prisma.$disconnect();
  }
}, "handler");
export {
  handler
};
/*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.4.3
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
/*! Bundled license information:

@trpc/server/dist/resolveResponse-BIvy2tOI.mjs:
  (* istanbul ignore if -- @preserve *)
  (*!
  * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
  *
  * Copyright (c) 2014-2017, Jon Schlinkert.
  * Released under the MIT License.
  *)

@trpc/server/dist/resolveResponse-BIvy2tOI.mjs:
  (* istanbul ignore if -- @preserve *)
*/
