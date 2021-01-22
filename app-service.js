const wx2my = require('./wx2my');
//const Behavior = require('./Behavior');
var __wxAppData = __wxAppData || {};

var __wxRoute = __wxRoute || "";

var __wxRouteBegin = __wxRouteBegin || "";

var __wxAppCode__ = __wxAppCode__ || {};

var global = global || {};

var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {};

var __wxAppCurrentFile__ = __wxAppCurrentFile__ || "";

var Component = Component || function () {};

var definePlugin = definePlugin || function () {};

var requirePlugin = requirePlugin || function () {};

var Behavior = Behavior || function () {};

var __vd_version_info__ = __vd_version_info__ || {};
/*v0.5vv_20190703_syb_scopedata*/


global.__wcc_version__ = 'v0.5vv_20190703_syb_scopedata';
global.__wcc_version_info__ = {
  "customComponents": true,
  "fixZeroRpx": true,
  "propValueDeepCopy": false
};
var $gwxc;
var $gaic = {};

$gwx = function (path, global) {
  if (typeof global === 'undefined') global = {};

  if (typeof __WXML_GLOBAL__ === 'undefined') {
    __WXML_GLOBAL__ = {};
  }

  __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};

  function _(a, b) {
    if (typeof b != 'undefined') a.children.push(b);
  }

  function _v(k) {
    if (typeof k != 'undefined') return {
      tag: 'virtual',
      'wxKey': k,
      children: []
    };
    return {
      tag: 'virtual',
      children: []
    };
  }

  function _n(tag) {
    $gwxc++;

    if ($gwxc >= 16000) {
      throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.';
    }

    ;
    return {
      tag: 'wx-' + tag,
      attr: {},
      children: [],
      n: [],
      raw: {},
      generics: {}
    };
  }

  function _p(a, b) {
    b && a.properities.push(b);
  }

  function _s(scope, env, key) {
    return typeof scope[key] != 'undefined' ? scope[key] : env[key];
  }

  function _wp(m) {
    console.warn("WXMLRT_$gwx:" + m);
  }

  function _wl(tname, prefix) {
    _wp(prefix + ':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.');
  }

  $gwn = console.warn;
  $gwl = console.log;

  function $gwh() {
    function x() {}

    x.prototype = {
      hn: function (obj, all) {
        if (typeof obj == 'object') {
          var cnt = 0;
          var any1 = false,
              any2 = false;

          for (var x in obj) {
            any1 = any1 | x === '__value__';
            any2 = any2 | x === '__wxspec__';
            cnt++;
            if (cnt > 2) break;
          }

          return cnt == 2 && any1 && any2 && (all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h') ? "h" : "n";
        }

        return "n";
      },
      nh: function (obj, special) {
        return {
          __value__: obj,
          __wxspec__: special ? special : true
        };
      },
      rv: function (obj) {
        return this.hn(obj, true) === 'n' ? obj : this.rv(obj.__value__);
      },
      hm: function (obj) {
        if (typeof obj == 'object') {
          var cnt = 0;
          var any1 = false,
              any2 = false;

          for (var x in obj) {
            any1 = any1 | x === '__value__';
            any2 = any2 | x === '__wxspec__';
            cnt++;
            if (cnt > 2) break;
          }

          return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__));
        }

        return false;
      }
    };
    return new x();
  }

  wh = $gwh();

  function $gstack(s) {
    var tmp = s.split('\n ' + ' ' + ' ' + ' ');

    for (var i = 0; i < tmp.length; ++i) {
      if (0 == i) continue;
      if (")" === tmp[i][tmp[i].length - 1]) tmp[i] = tmp[i].replace(/\s\(.*\)$/, "");else tmp[i] = "at anonymous function";
    }

    return tmp.join('\n ' + ' ' + ' ' + ' ');
  }

  function $gwrt(should_pass_type_info) {
    function ArithmeticEv(ops, e, s, g, o) {
      var _f = false;
      var rop = ops[0][1];

      var _a, _b, _c, _d, _aa, _bb;

      switch (rop) {
        case '?:':
          _a = rev(ops[1], e, s, g, o, _f);
          _c = should_pass_type_info && wh.hn(_a) === 'h';
          _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : rev(ops[3], e, s, g, o, _f);
          _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
          return _d;
          break;

        case '&&':
          _a = rev(ops[1], e, s, g, o, _f);
          _c = should_pass_type_info && wh.hn(_a) === 'h';
          _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
          _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
          return _d;
          break;

        case '||':
          _a = rev(ops[1], e, s, g, o, _f);
          _c = should_pass_type_info && wh.hn(_a) === 'h';
          _d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
          _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
          return _d;
          break;

        case '+':
        case '*':
        case '/':
        case '%':
        case '|':
        case '^':
        case '&':
        case '===':
        case '==':
        case '!=':
        case '!==':
        case '>=':
        case '<=':
        case '>':
        case '<':
        case '<<':
        case '>>':
          _a = rev(ops[1], e, s, g, o, _f);
          _b = rev(ops[2], e, s, g, o, _f);
          _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');

          switch (rop) {
            case '+':
              _d = wh.rv(_a) + wh.rv(_b);
              break;

            case '*':
              _d = wh.rv(_a) * wh.rv(_b);
              break;

            case '/':
              _d = wh.rv(_a) / wh.rv(_b);
              break;

            case '%':
              _d = wh.rv(_a) % wh.rv(_b);
              break;

            case '|':
              _d = wh.rv(_a) | wh.rv(_b);
              break;

            case '^':
              _d = wh.rv(_a) ^ wh.rv(_b);
              break;

            case '&':
              _d = wh.rv(_a) & wh.rv(_b);
              break;

            case '===':
              _d = wh.rv(_a) === wh.rv(_b);
              break;

            case '==':
              _d = wh.rv(_a) == wh.rv(_b);
              break;

            case '!=':
              _d = wh.rv(_a) != wh.rv(_b);
              break;

            case '!==':
              _d = wh.rv(_a) !== wh.rv(_b);
              break;

            case '>=':
              _d = wh.rv(_a) >= wh.rv(_b);
              break;

            case '<=':
              _d = wh.rv(_a) <= wh.rv(_b);
              break;

            case '>':
              _d = wh.rv(_a) > wh.rv(_b);
              break;

            case '<':
              _d = wh.rv(_a) < wh.rv(_b);
              break;

            case '<<':
              _d = wh.rv(_a) << wh.rv(_b);
              break;

            case '>>':
              _d = wh.rv(_a) >> wh.rv(_b);
              break;

            default:
              break;
          }

          return _c ? wh.nh(_d, "c") : _d;
          break;

        case '-':
          _a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
          _b = ops.length === 3 ? rev(ops[2], e, s, g, o, _f) : rev(ops[1], e, s, g, o, _f);
          _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
          _d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
          return _c ? wh.nh(_d, "c") : _d;
          break;

        case '!':
          _a = rev(ops[1], e, s, g, o, _f);
          _c = should_pass_type_info && wh.hn(_a) == 'h';
          _d = !wh.rv(_a);
          return _c ? wh.nh(_d, "c") : _d;

        case '~':
          _a = rev(ops[1], e, s, g, o, _f);
          _c = should_pass_type_info && wh.hn(_a) == 'h';
          _d = ~wh.rv(_a);
          return _c ? wh.nh(_d, "c") : _d;

        default:
          $gwn('unrecognized op' + rop);
      }
    }

    function rev(ops, e, s, g, o, newap) {
      var op = ops[0];
      var _f = false;
      if (typeof newap !== "undefined") o.ap = newap;

      if (typeof op === 'object') {
        var vop = op[0];

        var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;

        switch (vop) {
          case 2:
            return ArithmeticEv(ops, e, s, g, o);
            break;

          case 4:
            return rev(ops[1], e, s, g, o, _f);
            break;

          case 5:
            switch (ops.length) {
              case 2:
                _a = rev(ops[1], e, s, g, o, _f);
                return should_pass_type_info ? [_a] : [wh.rv(_a)];
                return [_a];
                break;

              case 1:
                return [];
                break;

              default:
                _a = rev(ops[1], e, s, g, o, _f);
                _b = rev(ops[2], e, s, g, o, _f);

                _a.push(should_pass_type_info ? _b : wh.rv(_b));

                return _a;
                break;
            }

            break;

          case 6:
            _a = rev(ops[1], e, s, g, o);
            var ap = o.ap;
            _ta = wh.hn(_a) === 'h';
            _aa = _ta ? wh.rv(_a) : _a;
            o.is_affected |= _ta;

            if (should_pass_type_info) {
              if (_aa === null || typeof _aa === 'undefined') {
                return _ta ? wh.nh(undefined, 'e') : undefined;
              }

              _b = rev(ops[2], e, s, g, o, _f);
              _tb = wh.hn(_b) === 'h';
              _bb = _tb ? wh.rv(_b) : _b;
              o.ap = ap;
              o.is_affected |= _tb;

              if (_bb === null || typeof _bb === 'undefined' || _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                return _ta || _tb ? wh.nh(undefined, 'e') : undefined;
              }

              _d = _aa[_bb];
              if (typeof _d === 'function' && !ap) _d = undefined;
              _td = wh.hn(_d) === 'h';
              o.is_affected |= _td;
              return _ta || _tb ? _td ? _d : wh.nh(_d, 'e') : _d;
            } else {
              if (_aa === null || typeof _aa === 'undefined') {
                return undefined;
              }

              _b = rev(ops[2], e, s, g, o, _f);
              _tb = wh.hn(_b) === 'h';
              _bb = _tb ? wh.rv(_b) : _b;
              o.ap = ap;
              o.is_affected |= _tb;

              if (_bb === null || typeof _bb === 'undefined' || _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                return undefined;
              }

              _d = _aa[_bb];
              if (typeof _d === 'function' && !ap) _d = undefined;
              _td = wh.hn(_d) === 'h';
              o.is_affected |= _td;
              return _td ? wh.rv(_d) : _d;
            }

          case 7:
            switch (ops[1][0]) {
              case 11:
                o.is_affected |= wh.hn(g) === 'h';
                return g;

              case 3:
                _s = wh.rv(s);
                _e = wh.rv(e);
                _b = ops[1][1];

                if (g && g.f && g.f.hasOwnProperty(_b)) {
                  _a = g.f;
                  o.ap = true;
                } else {
                  _a = _s && _s.hasOwnProperty(_b) ? s : _e && _e.hasOwnProperty(_b) ? e : undefined;
                }

                if (should_pass_type_info) {
                  if (_a) {
                    _ta = wh.hn(_a) === 'h';
                    _aa = _ta ? wh.rv(_a) : _a;
                    _d = _aa[_b];
                    _td = wh.hn(_d) === 'h';
                    o.is_affected |= _ta || _td;
                    _d = _ta && !_td ? wh.nh(_d, 'e') : _d;
                    return _d;
                  }
                } else {
                  if (_a) {
                    _ta = wh.hn(_a) === 'h';
                    _aa = _ta ? wh.rv(_a) : _a;
                    _d = _aa[_b];
                    _td = wh.hn(_d) === 'h';
                    o.is_affected |= _ta || _td;
                    return wh.rv(_d);
                  }
                }

                return undefined;
            }

            break;

          case 8:
            _a = {};
            _a[ops[1]] = rev(ops[2], e, s, g, o, _f);
            return _a;
            break;

          case 9:
            _a = rev(ops[1], e, s, g, o, _f);
            _b = rev(ops[2], e, s, g, o, _f);

            function merge(_a, _b, _ow) {
              var ka, _bbk;

              _ta = wh.hn(_a) === 'h';
              _tb = wh.hn(_b) === 'h';
              _aa = wh.rv(_a);
              _bb = wh.rv(_b);

              for (var k in _bb) {
                if (_ow || !_aa.hasOwnProperty(k)) {
                  _aa[k] = should_pass_type_info ? _tb ? wh.nh(_bb[k], 'e') : _bb[k] : wh.rv(_bb[k]);
                }
              }

              return _a;
            }

            var _c = _a;
            var _ow = true;

            if (typeof ops[1][0] === "object" && ops[1][0][0] === 10) {
              _a = _b;
              _b = _c;
              _ow = false;
            }

            if (typeof ops[1][0] === "object" && ops[1][0][0] === 10) {
              var _r = {};
              return merge(merge(_r, _a, _ow), _b, _ow);
            } else return merge(_a, _b, _ow);

            break;

          case 10:
            _a = rev(ops[1], e, s, g, o, _f);
            _a = should_pass_type_info ? _a : wh.rv(_a);
            return _a;
            break;

          case 12:
            var _r;

            _a = rev(ops[1], e, s, g, o);

            if (!o.ap) {
              return should_pass_type_info && wh.hn(_a) === 'h' ? wh.nh(_r, 'f') : _r;
            }

            var ap = o.ap;
            _b = rev(ops[2], e, s, g, o, _f);
            o.ap = ap;
            _ta = wh.hn(_a) === 'h';
            _tb = _ca(_b);
            _aa = wh.rv(_a);
            _bb = wh.rv(_b);
            snap_bb = $gdc(_bb, "nv_");

            try {
              _r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
            } catch (e) {
              e.message = e.message.replace(/nv_/g, "");
              e.stack = e.stack.substring(0, e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
              e.stack = e.stack.replace(/\snv_/g, " ");
              e.stack = $gstack(e.stack);

              if (g.debugInfo) {
                e.stack += "\n " + " " + " " + " at " + g.debugInfo[0] + ":" + g.debugInfo[1] + ":" + g.debugInfo[2];
                console.error(e);
              }

              _r = undefined;
            }

            return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, 'f') : _r;
        }
      } else {
        if (op === 3 || op === 1) return ops[1];else if (op === 11) {
          var _a = '';

          for (var i = 1; i < ops.length; i++) {
            var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
            _a += typeof xp === 'undefined' ? '' : xp;
          }

          return _a;
        }
      }
    }

    function wrapper(ops, e, s, g, o, newap) {
      if (ops[0] == '11182016') {
        g.debugInfo = ops[2];
        return rev(ops[1], e, s, g, o, newap);
      } else {
        g.debugInfo = null;
        return rev(ops, e, s, g, o, newap);
      }
    }

    return wrapper;
  }

  gra = $gwrt(true);
  grb = $gwrt(false);

  function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
    {
      var o = {
        is_affected: false
      };
      var a = gra(ops, e, s, g, o);

      if (JSON.stringify(a) != JSON.stringify(expect_a) || o.is_affected != expect_affected) {
        console.warn("A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_a) + ", " + expect_affected + " is expected");
      }
    }
    {
      var o = {
        is_affected: false
      };
      var a = grb(ops, e, s, g, o);

      if (JSON.stringify(a) != JSON.stringify(expect_b) || o.is_affected != expect_affected) {
        console.warn("B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_b) + ", " + expect_affected + " is expected");
      }
    }
  }

  function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname) {
    var _n = wh.hn(to_iter) === 'n';

    var scope = wh.rv(_s);
    var has_old_item = scope.hasOwnProperty(itemname);
    var has_old_index = scope.hasOwnProperty(indexname);
    var old_item = scope[itemname];
    var old_index = scope[indexname];
    var full = Object.prototype.toString.call(wh.rv(to_iter));
    var type = full[8];
    if (type === 'N' && full[10] === 'l') type = 'X';

    var _y;

    if (_n) {
      if (type === 'A') {
        var r_iter_item;

        for (var i = 0; i < to_iter.length; i++) {
          scope[itemname] = to_iter[i];
          scope[indexname] = _n ? i : wh.nh(i, 'h');
          r_iter_item = wh.rv(to_iter[i]);
          var key = keyname && r_iter_item ? keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname]) : undefined;
          _y = _v(key);

          _(father, _y);

          func(env, scope, _y, global);
        }
      } else if (type === 'O') {
        var i = 0;
        var r_iter_item;

        for (var k in to_iter) {
          scope[itemname] = to_iter[k];
          scope[indexname] = _n ? k : wh.nh(k, 'h');
          r_iter_item = wh.rv(to_iter[k]);
          var key = keyname && r_iter_item ? keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname]) : undefined;
          _y = _v(key);

          _(father, _y);

          func(env, scope, _y, global);
          i++;
        }
      } else if (type === 'S') {
        for (var i = 0; i < to_iter.length; i++) {
          scope[itemname] = to_iter[i];
          scope[indexname] = _n ? i : wh.nh(i, 'h');
          _y = _v(to_iter[i] + i);

          _(father, _y);

          func(env, scope, _y, global);
        }
      } else if (type === 'N') {
        for (var i = 0; i < to_iter; i++) {
          scope[itemname] = i;
          scope[indexname] = _n ? i : wh.nh(i, 'h');
          _y = _v(i);

          _(father, _y);

          func(env, scope, _y, global);
        }
      } else {}
    } else {
      var r_to_iter = wh.rv(to_iter);
      var r_iter_item, iter_item;

      if (type === 'A') {
        for (var i = 0; i < r_to_iter.length; i++) {
          iter_item = r_to_iter[i];
          iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
          r_iter_item = wh.rv(iter_item);
          scope[itemname] = iter_item;
          scope[indexname] = _n ? i : wh.nh(i, 'h');
          var key = keyname && r_iter_item ? keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname]) : undefined;
          _y = _v(key);

          _(father, _y);

          func(env, scope, _y, global);
        }
      } else if (type === 'O') {
        var i = 0;

        for (var k in r_to_iter) {
          iter_item = r_to_iter[k];
          iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
          r_iter_item = wh.rv(iter_item);
          scope[itemname] = iter_item;
          scope[indexname] = _n ? k : wh.nh(k, 'h');
          var key = keyname && r_iter_item ? keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname]) : undefined;
          _y = _v(key);

          _(father, _y);

          func(env, scope, _y, global);
          i++;
        }
      } else if (type === 'S') {
        for (var i = 0; i < r_to_iter.length; i++) {
          iter_item = wh.nh(r_to_iter[i], 'h');
          scope[itemname] = iter_item;
          scope[indexname] = _n ? i : wh.nh(i, 'h');
          _y = _v(to_iter[i] + i);

          _(father, _y);

          func(env, scope, _y, global);
        }
      } else if (type === 'N') {
        for (var i = 0; i < r_to_iter; i++) {
          iter_item = wh.nh(i, 'h');
          scope[itemname] = iter_item;
          scope[indexname] = _n ? i : wh.nh(i, 'h');
          _y = _v(i);

          _(father, _y);

          func(env, scope, _y, global);
        }
      } else {}
    }

    if (has_old_item) {
      scope[itemname] = old_item;
    } else {
      delete scope[itemname];
    }

    if (has_old_index) {
      scope[indexname] = old_index;
    } else {
      delete scope[indexname];
    }
  }

  function _ca(o) {
    if (wh.hn(o) == 'h') return true;
    if (typeof o !== "object") return false;

    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        if (_ca(o[i])) return true;
      }
    }

    return false;
  }

  function _da(node, attrname, opindex, raw, o) {
    var isaffected = false;
    var value = $gdc(raw, "", 2);

    if (o.ap && value && value.constructor === Function) {
      attrname = "$wxs:" + attrname;
      node.attr["$gdc"] = $gdc;
    }

    if (o.is_affected || _ca(raw)) {
      node.n.push(attrname);
      node.raw[attrname] = raw;
    }

    node.attr[attrname] = value;
  }

  function _r(node, attrname, opindex, env, scope, global) {
    global.opindex = opindex;

    var o = {},
        _env;

    var a = grb(z[opindex], env, scope, global, o);

    _da(node, attrname, opindex, a, o);
  }

  function _rz(z, node, attrname, opindex, env, scope, global) {
    global.opindex = opindex;

    var o = {},
        _env;

    var a = grb(z[opindex], env, scope, global, o);

    _da(node, attrname, opindex, a, o);
  }

  function _o(opindex, env, scope, global) {
    global.opindex = opindex;
    var nothing = {};
    var r = grb(z[opindex], env, scope, global, nothing);
    return r && r.constructor === Function ? undefined : r;
  }

  function _oz(z, opindex, env, scope, global) {
    global.opindex = opindex;
    var nothing = {};
    var r = grb(z[opindex], env, scope, global, nothing);
    return r && r.constructor === Function ? undefined : r;
  }

  function _1(opindex, env, scope, global, o) {
    var o = o || {};
    global.opindex = opindex;
    return gra(z[opindex], env, scope, global, o);
  }

  function _1z(z, opindex, env, scope, global, o) {
    var o = o || {};
    global.opindex = opindex;
    return gra(z[opindex], env, scope, global, o);
  }

  function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
    var o = {};

    var to_iter = _1(opindex, env, scope, global);

    wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
  }

  function _2z(z, opindex, func, env, scope, global, father, itemname, indexname, keyname) {
    var o = {};

    var to_iter = _1z(z, opindex, env, scope, global);

    wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
  }

  function _m(tag, attrs, generics, env, scope, global) {
    var tmp = _n(tag);

    var base = 0;

    for (var i = 0; i < attrs.length; i += 2) {
      if (base + attrs[i + 1] < 0) {
        tmp.attr[attrs[i]] = true;
      } else {
        _r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);

        if (base === 0) base = attrs[i + 1];
      }
    }

    for (var i = 0; i < generics.length; i += 2) {
      if (base + generics[i + 1] < 0) {
        tmp.generics[generics[i]] = "";
      } else {
        var $t = grb(z[base + generics[i + 1]], env, scope, global);
        if ($t != "") $t = "wx-" + $t;
        tmp.generics[generics[i]] = $t;
        if (base === 0) base = generics[i + 1];
      }
    }

    return tmp;
  }

  function _mz(z, tag, attrs, generics, env, scope, global) {
    var tmp = _n(tag);

    var base = 0;

    for (var i = 0; i < attrs.length; i += 2) {
      if (base + attrs[i + 1] < 0) {
        tmp.attr[attrs[i]] = true;
      } else {
        _rz(z, tmp, attrs[i], base + attrs[i + 1], env, scope, global);

        if (base === 0) base = attrs[i + 1];
      }
    }

    for (var i = 0; i < generics.length; i += 2) {
      if (base + generics[i + 1] < 0) {
        tmp.generics[generics[i]] = "";
      } else {
        var $t = grb(z[base + generics[i + 1]], env, scope, global);
        if ($t != "") $t = "wx-" + $t;
        tmp.generics[generics[i]] = $t;
        if (base === 0) base = generics[i + 1];
      }
    }

    return tmp;
  }

  var nf_init = function () {
    if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
      nf_init_Object();
      nf_init_Function();
      nf_init_Array();
      nf_init_String();
      nf_init_Boolean();
      nf_init_Number();
      nf_init_Math();
      nf_init_Date();
      nf_init_RegExp();
    }

    if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true;
  };

  var nf_init_Object = function () {
    Object.defineProperty(Object.prototype, "nv_constructor", {
      writable: true,
      value: "Object"
    });
    Object.defineProperty(Object.prototype, "nv_toString", {
      writable: true,
      value: function () {
        return "[object Object]";
      }
    });
  };

  var nf_init_Function = function () {
    Object.defineProperty(Function.prototype, "nv_constructor", {
      writable: true,
      value: "Function"
    });
    Object.defineProperty(Function.prototype, "nv_length", {
      get: function () {
        return this.length;
      },
      set: function () {}
    });
    Object.defineProperty(Function.prototype, "nv_toString", {
      writable: true,
      value: function () {
        return "[function Function]";
      }
    });
  };

  var nf_init_Array = function () {
    Object.defineProperty(Array.prototype, "nv_toString", {
      writable: true,
      value: function () {
        return this.nv_join();
      }
    });
    Object.defineProperty(Array.prototype, "nv_join", {
      writable: true,
      value: function (s) {
        s = undefined == s ? ',' : s;
        var r = "";

        for (var i = 0; i < this.length; ++i) {
          if (0 != i) r += s;
          if (null == this[i] || undefined == this[i]) r += '';else if (typeof this[i] == 'function') r += this[i].nv_toString();else if (typeof this[i] == 'object' && this[i].nv_constructor === "Array") r += this[i].nv_join();else r += this[i].toString();
        }

        return r;
      }
    });
    Object.defineProperty(Array.prototype, "nv_constructor", {
      writable: true,
      value: "Array"
    });
    Object.defineProperty(Array.prototype, "nv_concat", {
      writable: true,
      value: Array.prototype.concat
    });
    Object.defineProperty(Array.prototype, "nv_pop", {
      writable: true,
      value: Array.prototype.pop
    });
    Object.defineProperty(Array.prototype, "nv_push", {
      writable: true,
      value: Array.prototype.push
    });
    Object.defineProperty(Array.prototype, "nv_reverse", {
      writable: true,
      value: Array.prototype.reverse
    });
    Object.defineProperty(Array.prototype, "nv_shift", {
      writable: true,
      value: Array.prototype.shift
    });
    Object.defineProperty(Array.prototype, "nv_slice", {
      writable: true,
      value: Array.prototype.slice
    });
    Object.defineProperty(Array.prototype, "nv_sort", {
      writable: true,
      value: Array.prototype.sort
    });
    Object.defineProperty(Array.prototype, "nv_splice", {
      writable: true,
      value: Array.prototype.splice
    });
    Object.defineProperty(Array.prototype, "nv_unshift", {
      writable: true,
      value: Array.prototype.unshift
    });
    Object.defineProperty(Array.prototype, "nv_indexOf", {
      writable: true,
      value: Array.prototype.indexOf
    });
    Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
      writable: true,
      value: Array.prototype.lastIndexOf
    });
    Object.defineProperty(Array.prototype, "nv_every", {
      writable: true,
      value: Array.prototype.every
    });
    Object.defineProperty(Array.prototype, "nv_some", {
      writable: true,
      value: Array.prototype.some
    });
    Object.defineProperty(Array.prototype, "nv_forEach", {
      writable: true,
      value: Array.prototype.forEach
    });
    Object.defineProperty(Array.prototype, "nv_map", {
      writable: true,
      value: Array.prototype.map
    });
    Object.defineProperty(Array.prototype, "nv_filter", {
      writable: true,
      value: Array.prototype.filter
    });
    Object.defineProperty(Array.prototype, "nv_reduce", {
      writable: true,
      value: Array.prototype.reduce
    });
    Object.defineProperty(Array.prototype, "nv_reduceRight", {
      writable: true,
      value: Array.prototype.reduceRight
    });
    Object.defineProperty(Array.prototype, "nv_length", {
      get: function () {
        return this.length;
      },
      set: function (value) {
        this.length = value;
      }
    });
  };

  var nf_init_String = function () {
    Object.defineProperty(String.prototype, "nv_constructor", {
      writable: true,
      value: "String"
    });
    Object.defineProperty(String.prototype, "nv_toString", {
      writable: true,
      value: String.prototype.toString
    });
    Object.defineProperty(String.prototype, "nv_valueOf", {
      writable: true,
      value: String.prototype.valueOf
    });
    Object.defineProperty(String.prototype, "nv_charAt", {
      writable: true,
      value: String.prototype.charAt
    });
    Object.defineProperty(String.prototype, "nv_charCodeAt", {
      writable: true,
      value: String.prototype.charCodeAt
    });
    Object.defineProperty(String.prototype, "nv_concat", {
      writable: true,
      value: String.prototype.concat
    });
    Object.defineProperty(String.prototype, "nv_indexOf", {
      writable: true,
      value: String.prototype.indexOf
    });
    Object.defineProperty(String.prototype, "nv_lastIndexOf", {
      writable: true,
      value: String.prototype.lastIndexOf
    });
    Object.defineProperty(String.prototype, "nv_localeCompare", {
      writable: true,
      value: String.prototype.localeCompare
    });
    Object.defineProperty(String.prototype, "nv_match", {
      writable: true,
      value: String.prototype.match
    });
    Object.defineProperty(String.prototype, "nv_replace", {
      writable: true,
      value: String.prototype.replace
    });
    Object.defineProperty(String.prototype, "nv_search", {
      writable: true,
      value: String.prototype.search
    });
    Object.defineProperty(String.prototype, "nv_slice", {
      writable: true,
      value: String.prototype.slice
    });
    Object.defineProperty(String.prototype, "nv_split", {
      writable: true,
      value: String.prototype.split
    });
    Object.defineProperty(String.prototype, "nv_substring", {
      writable: true,
      value: String.prototype.substring
    });
    Object.defineProperty(String.prototype, "nv_toLowerCase", {
      writable: true,
      value: String.prototype.toLowerCase
    });
    Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
      writable: true,
      value: String.prototype.toLocaleLowerCase
    });
    Object.defineProperty(String.prototype, "nv_toUpperCase", {
      writable: true,
      value: String.prototype.toUpperCase
    });
    Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
      writable: true,
      value: String.prototype.toLocaleUpperCase
    });
    Object.defineProperty(String.prototype, "nv_trim", {
      writable: true,
      value: String.prototype.trim
    });
    Object.defineProperty(String.prototype, "nv_length", {
      get: function () {
        return this.length;
      },
      set: function (value) {
        this.length = value;
      }
    });
  };

  var nf_init_Boolean = function () {
    Object.defineProperty(Boolean.prototype, "nv_constructor", {
      writable: true,
      value: "Boolean"
    });
    Object.defineProperty(Boolean.prototype, "nv_toString", {
      writable: true,
      value: Boolean.prototype.toString
    });
    Object.defineProperty(Boolean.prototype, "nv_valueOf", {
      writable: true,
      value: Boolean.prototype.valueOf
    });
  };

  var nf_init_Number = function () {
    Object.defineProperty(Number, "nv_MAX_VALUE", {
      writable: false,
      value: Number.MAX_VALUE
    });
    Object.defineProperty(Number, "nv_MIN_VALUE", {
      writable: false,
      value: Number.MIN_VALUE
    });
    Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
      writable: false,
      value: Number.NEGATIVE_INFINITY
    });
    Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
      writable: false,
      value: Number.POSITIVE_INFINITY
    });
    Object.defineProperty(Number.prototype, "nv_constructor", {
      writable: true,
      value: "Number"
    });
    Object.defineProperty(Number.prototype, "nv_toString", {
      writable: true,
      value: Number.prototype.toString
    });
    Object.defineProperty(Number.prototype, "nv_toLocaleString", {
      writable: true,
      value: Number.prototype.toLocaleString
    });
    Object.defineProperty(Number.prototype, "nv_valueOf", {
      writable: true,
      value: Number.prototype.valueOf
    });
    Object.defineProperty(Number.prototype, "nv_toFixed", {
      writable: true,
      value: Number.prototype.toFixed
    });
    Object.defineProperty(Number.prototype, "nv_toExponential", {
      writable: true,
      value: Number.prototype.toExponential
    });
    Object.defineProperty(Number.prototype, "nv_toPrecision", {
      writable: true,
      value: Number.prototype.toPrecision
    });
  };

  var nf_init_Math = function () {
    Object.defineProperty(Math, "nv_E", {
      writable: false,
      value: Math.E
    });
    Object.defineProperty(Math, "nv_LN10", {
      writable: false,
      value: Math.LN10
    });
    Object.defineProperty(Math, "nv_LN2", {
      writable: false,
      value: Math.LN2
    });
    Object.defineProperty(Math, "nv_LOG2E", {
      writable: false,
      value: Math.LOG2E
    });
    Object.defineProperty(Math, "nv_LOG10E", {
      writable: false,
      value: Math.LOG10E
    });
    Object.defineProperty(Math, "nv_PI", {
      writable: false,
      value: Math.PI
    });
    Object.defineProperty(Math, "nv_SQRT1_2", {
      writable: false,
      value: Math.SQRT1_2
    });
    Object.defineProperty(Math, "nv_SQRT2", {
      writable: false,
      value: Math.SQRT2
    });
    Object.defineProperty(Math, "nv_abs", {
      writable: false,
      value: Math.abs
    });
    Object.defineProperty(Math, "nv_acos", {
      writable: false,
      value: Math.acos
    });
    Object.defineProperty(Math, "nv_asin", {
      writable: false,
      value: Math.asin
    });
    Object.defineProperty(Math, "nv_atan", {
      writable: false,
      value: Math.atan
    });
    Object.defineProperty(Math, "nv_atan2", {
      writable: false,
      value: Math.atan2
    });
    Object.defineProperty(Math, "nv_ceil", {
      writable: false,
      value: Math.ceil
    });
    Object.defineProperty(Math, "nv_cos", {
      writable: false,
      value: Math.cos
    });
    Object.defineProperty(Math, "nv_exp", {
      writable: false,
      value: Math.exp
    });
    Object.defineProperty(Math, "nv_floor", {
      writable: false,
      value: Math.floor
    });
    Object.defineProperty(Math, "nv_log", {
      writable: false,
      value: Math.log
    });
    Object.defineProperty(Math, "nv_max", {
      writable: false,
      value: Math.max
    });
    Object.defineProperty(Math, "nv_min", {
      writable: false,
      value: Math.min
    });
    Object.defineProperty(Math, "nv_pow", {
      writable: false,
      value: Math.pow
    });
    Object.defineProperty(Math, "nv_random", {
      writable: false,
      value: Math.random
    });
    Object.defineProperty(Math, "nv_round", {
      writable: false,
      value: Math.round
    });
    Object.defineProperty(Math, "nv_sin", {
      writable: false,
      value: Math.sin
    });
    Object.defineProperty(Math, "nv_sqrt", {
      writable: false,
      value: Math.sqrt
    });
    Object.defineProperty(Math, "nv_tan", {
      writable: false,
      value: Math.tan
    });
  };

  var nf_init_Date = function () {
    Object.defineProperty(Date.prototype, "nv_constructor", {
      writable: true,
      value: "Date"
    });
    Object.defineProperty(Date, "nv_parse", {
      writable: true,
      value: Date.parse
    });
    Object.defineProperty(Date, "nv_UTC", {
      writable: true,
      value: Date.UTC
    });
    Object.defineProperty(Date, "nv_now", {
      writable: true,
      value: Date.now
    });
    Object.defineProperty(Date.prototype, "nv_toString", {
      writable: true,
      value: Date.prototype.toString
    });
    Object.defineProperty(Date.prototype, "nv_toDateString", {
      writable: true,
      value: Date.prototype.toDateString
    });
    Object.defineProperty(Date.prototype, "nv_toTimeString", {
      writable: true,
      value: Date.prototype.toTimeString
    });
    Object.defineProperty(Date.prototype, "nv_toLocaleString", {
      writable: true,
      value: Date.prototype.toLocaleString
    });
    Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
      writable: true,
      value: Date.prototype.toLocaleDateString
    });
    Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
      writable: true,
      value: Date.prototype.toLocaleTimeString
    });
    Object.defineProperty(Date.prototype, "nv_valueOf", {
      writable: true,
      value: Date.prototype.valueOf
    });
    Object.defineProperty(Date.prototype, "nv_getTime", {
      writable: true,
      value: Date.prototype.getTime
    });
    Object.defineProperty(Date.prototype, "nv_getFullYear", {
      writable: true,
      value: Date.prototype.getFullYear
    });
    Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
      writable: true,
      value: Date.prototype.getUTCFullYear
    });
    Object.defineProperty(Date.prototype, "nv_getMonth", {
      writable: true,
      value: Date.prototype.getMonth
    });
    Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
      writable: true,
      value: Date.prototype.getUTCMonth
    });
    Object.defineProperty(Date.prototype, "nv_getDate", {
      writable: true,
      value: Date.prototype.getDate
    });
    Object.defineProperty(Date.prototype, "nv_getUTCDate", {
      writable: true,
      value: Date.prototype.getUTCDate
    });
    Object.defineProperty(Date.prototype, "nv_getDay", {
      writable: true,
      value: Date.prototype.getDay
    });
    Object.defineProperty(Date.prototype, "nv_getUTCDay", {
      writable: true,
      value: Date.prototype.getUTCDay
    });
    Object.defineProperty(Date.prototype, "nv_getHours", {
      writable: true,
      value: Date.prototype.getHours
    });
    Object.defineProperty(Date.prototype, "nv_getUTCHours", {
      writable: true,
      value: Date.prototype.getUTCHours
    });
    Object.defineProperty(Date.prototype, "nv_getMinutes", {
      writable: true,
      value: Date.prototype.getMinutes
    });
    Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
      writable: true,
      value: Date.prototype.getUTCMinutes
    });
    Object.defineProperty(Date.prototype, "nv_getSeconds", {
      writable: true,
      value: Date.prototype.getSeconds
    });
    Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
      writable: true,
      value: Date.prototype.getUTCSeconds
    });
    Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
      writable: true,
      value: Date.prototype.getMilliseconds
    });
    Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
      writable: true,
      value: Date.prototype.getUTCMilliseconds
    });
    Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
      writable: true,
      value: Date.prototype.getTimezoneOffset
    });
    Object.defineProperty(Date.prototype, "nv_setTime", {
      writable: true,
      value: Date.prototype.setTime
    });
    Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
      writable: true,
      value: Date.prototype.setMilliseconds
    });
    Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
      writable: true,
      value: Date.prototype.setUTCMilliseconds
    });
    Object.defineProperty(Date.prototype, "nv_setSeconds", {
      writable: true,
      value: Date.prototype.setSeconds
    });
    Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
      writable: true,
      value: Date.prototype.setUTCSeconds
    });
    Object.defineProperty(Date.prototype, "nv_setMinutes", {
      writable: true,
      value: Date.prototype.setMinutes
    });
    Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
      writable: true,
      value: Date.prototype.setUTCMinutes
    });
    Object.defineProperty(Date.prototype, "nv_setHours", {
      writable: true,
      value: Date.prototype.setHours
    });
    Object.defineProperty(Date.prototype, "nv_setUTCHours", {
      writable: true,
      value: Date.prototype.setUTCHours
    });
    Object.defineProperty(Date.prototype, "nv_setDate", {
      writable: true,
      value: Date.prototype.setDate
    });
    Object.defineProperty(Date.prototype, "nv_setUTCDate", {
      writable: true,
      value: Date.prototype.setUTCDate
    });
    Object.defineProperty(Date.prototype, "nv_setMonth", {
      writable: true,
      value: Date.prototype.setMonth
    });
    Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
      writable: true,
      value: Date.prototype.setUTCMonth
    });
    Object.defineProperty(Date.prototype, "nv_setFullYear", {
      writable: true,
      value: Date.prototype.setFullYear
    });
    Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
      writable: true,
      value: Date.prototype.setUTCFullYear
    });
    Object.defineProperty(Date.prototype, "nv_toUTCString", {
      writable: true,
      value: Date.prototype.toUTCString
    });
    Object.defineProperty(Date.prototype, "nv_toISOString", {
      writable: true,
      value: Date.prototype.toISOString
    });
    Object.defineProperty(Date.prototype, "nv_toJSON", {
      writable: true,
      value: Date.prototype.toJSON
    });
  };

  var nf_init_RegExp = function () {
    Object.defineProperty(RegExp.prototype, "nv_constructor", {
      writable: true,
      value: "RegExp"
    });
    Object.defineProperty(RegExp.prototype, "nv_exec", {
      writable: true,
      value: RegExp.prototype.exec
    });
    Object.defineProperty(RegExp.prototype, "nv_test", {
      writable: true,
      value: RegExp.prototype.test
    });
    Object.defineProperty(RegExp.prototype, "nv_toString", {
      writable: true,
      value: RegExp.prototype.toString
    });
    Object.defineProperty(RegExp.prototype, "nv_source", {
      get: function () {
        return this.source;
      },
      set: function () {}
    });
    Object.defineProperty(RegExp.prototype, "nv_global", {
      get: function () {
        return this.global;
      },
      set: function () {}
    });
    Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {
      get: function () {
        return this.ignoreCase;
      },
      set: function () {}
    });
    Object.defineProperty(RegExp.prototype, "nv_multiline", {
      get: function () {
        return this.multiline;
      },
      set: function () {}
    });
    Object.defineProperty(RegExp.prototype, "nv_lastIndex", {
      get: function () {
        return this.lastIndex;
      },
      set: function (v) {
        this.lastIndex = v;
      }
    });
  };

  nf_init();

  var nv_getDate = function () {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(Date);
    return new (Function.prototype.bind.apply(Date, args))();
  };

  var nv_getRegExp = function () {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(RegExp);
    return new (Function.prototype.bind.apply(RegExp, args))();
  };

  var nv_console = {};

  nv_console.nv_log = function () {
    var res = "WXSRT:";

    for (var i = 0; i < arguments.length; ++i) res += arguments[i] + " ";

    console.log(res);
  };

  var nv_parseInt = parseInt,
      nv_parseFloat = parseFloat,
      nv_isNaN = isNaN,
      nv_isFinite = isFinite,
      nv_decodeURI = decodeURI,
      nv_decodeURIComponent = decodeURIComponent,
      nv_encodeURI = encodeURI,
      nv_encodeURIComponent = encodeURIComponent;

  function $gdc(o, p, r) {
    o = wh.rv(o);
    if (o === null || o === undefined) return o;
    if (o.constructor === String || o.constructor === Boolean || o.constructor === Number) return o;

    if (o.constructor === Object) {
      var copy = {};

      for (var k in o) if (o.hasOwnProperty(k)) if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);else copy[p + k] = $gdc(o[k], p, r);

      return copy;
    }

    if (o.constructor === Array) {
      var copy = [];

      for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));

      return copy;
    }

    if (o.constructor === Date) {
      var copy = new Date();
      copy.setTime(o.getTime());
      return copy;
    }

    if (o.constructor === RegExp) {
      var f = "";
      if (o.global) f += "g";
      if (o.ignoreCase) f += "i";
      if (o.multiline) f += "m";
      return new RegExp(o.source, f);
    }

    if (r && o.constructor === Function) {
      if (r == 1) return $gdc(o(), undefined, 2);
      if (r == 2) return o;
    }

    return null;
  }

  var nv_JSON = {};

  nv_JSON.nv_stringify = function (o) {
    JSON.stringify(o);
    return JSON.stringify($gdc(o));
  };

  nv_JSON.nv_parse = function (o) {
    if (o === undefined) return undefined;
    var t = JSON.parse(o);
    return $gdc(t, 'nv_');
  };

  function _af(p, a, r, c) {
    p.extraAttr = {
      "t_action": a,
      "t_rawid": r
    };
    if (typeof c != 'undefined') p.extraAttr.t_cid = c;
  }

  function _ai(i, p, e, me, r, c) {
    var x = _grp(p, e, me);

    if (x) i.push(x);else {
      i.push('');

      _wp(me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.');
    }
  }

  function _grp(p, e, me) {
    if (p[0] != '/') {
      var mepart = me.split('/');
      mepart.pop();
      var ppart = p.split('/');

      for (var i = 0; i < ppart.length; i++) {
        if (ppart[i] == '..') mepart.pop();else if (!ppart[i] || ppart[i] == '.') continue;else mepart.push(ppart[i]);
      }

      p = mepart.join('/');
    }

    if (me[0] == '.' && p[0] == '/') p = '.' + p;
    if (e[p]) return p;
    if (e[p + '.wxml']) return p + '.wxml';
  }

  function _gd(p, c, e, d) {
    if (!c) return;
    if (d[p][c]) return d[p][c];

    for (var x = e[p].i.length - 1; x >= 0; x--) {
      if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c];
    }

    ;

    for (var x = e[p].ti.length - 1; x >= 0; x--) {
      var q = _grp(e[p].ti[x], e, p);

      if (q && d[q][c]) return d[q][c];
    }

    var ii = _gapi(e, p);

    for (var x = 0; x < ii.length; x++) {
      if (ii[x] && d[ii[x]][c]) return d[ii[x]][c];
    }

    for (var k = e[p].j.length - 1; k >= 0; k--) if (e[p].j[k]) {
      for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
        var pp = _grp(e[e[p].j[k]].ti[q], e, p);

        if (pp && d[pp][c]) {
          return d[pp][c];
        }
      }
    }
  }

  function _gapi(e, p) {
    if (!p) return [];

    if ($gaic[p]) {
      return $gaic[p];
    }

    ;
    var ret = [],
        q = [],
        h = 0,
        t = 0,
        put = {},
        visited = {};
    q.push(p);
    visited[p] = true;
    t++;

    while (h < t) {
      var a = q[h++];

      for (var i = 0; i < e[a].ic.length; i++) {
        var nd = e[a].ic[i];

        var np = _grp(nd, e, a);

        if (np && !visited[np]) {
          visited[np] = true;
          q.push(np);
          t++;
        }
      }

      for (var i = 0; a != p && i < e[a].ti.length; i++) {
        var ni = e[a].ti[i];

        var nm = _grp(ni, e, a);

        if (nm && !put[nm]) {
          put[nm] = true;
          ret.push(nm);
        }
      }
    }

    $gaic[p] = ret;
    return ret;
  }

  var $ixc = {};

  function _ic(p, ent, me, e, s, r, gg) {
    var x = _grp(p, ent, me);

    ent[me].j.push(x);

    if (x) {
      if ($ixc[x]) {
        _wp('-1:include:-1:-1: `' + p + '` is being included in a loop, will be stop.');

        return;
      }

      $ixc[x] = true;

      try {
        ent[x].f(e, s, r, gg);
      } catch (e) {}

      $ixc[x] = false;
    } else {
      _wp(me + ':include:-1:-1: Included path `' + p + '` not found from `' + me + '`.');
    }
  }

  function _w(tn, f, line, c) {
    _wp(f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
  }

  function _ev(dom) {
    var changed = false;
    delete dom.properities;
    delete dom.n;

    if (dom.children) {
      do {
        changed = false;
        var newch = [];

        for (var i = 0; i < dom.children.length; i++) {
          var ch = dom.children[i];

          if (ch.tag == 'virtual') {
            changed = true;

            for (var j = 0; ch.children && j < ch.children.length; j++) {
              newch.push(ch.children[j]);
            }
          } else {
            newch.push(ch);
          }
        }

        dom.children = newch;
      } while (changed);

      for (var i = 0; i < dom.children.length; i++) {
        _ev(dom.children[i]);
      }
    }

    return dom;
  }

  function _tsd(root) {
    if (root.tag == "wx-wx-scope") {
      root.tag = "virtual";
      root.wxCkey = "11";
      root['wxScopeData'] = root.attr['wx:scope-data'];
      delete root.n;
      delete root.raw;
      delete root.generics;
      delete root.attr;
    }

    for (var i = 0; root.children && i < root.children.length; i++) {
      _tsd(root.children[i]);
    }

    return root;
  }

  var e_ = {};
  if (typeof global.entrys === 'undefined') global.entrys = {};
  e_ = global.entrys;
  var d_ = {};
  if (typeof global.defines === 'undefined') global.defines = {};
  d_ = global.defines;
  var f_ = {};
  if (typeof global.modules === 'undefined') global.modules = {};
  f_ = global.modules || {};
  var p_ = {};
  __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
  __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
  __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
  var z = __WXML_GLOBAL__.ops_set.$gwx || [];

  function gz$gwx_1() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_1) return __WXML_GLOBAL__.ops_cached.$gwx_1;
    __WXML_GLOBAL__.ops_cached.$gwx_1 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }
    })(__WXML_GLOBAL__.ops_cached.$gwx_1);

    return __WXML_GLOBAL__.ops_cached.$gwx_1;
  }

  function gz$gwx_2() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_2) return __WXML_GLOBAL__.ops_cached.$gwx_2;
    __WXML_GLOBAL__.ops_cached.$gwx_2 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }

      Z([[7], [3, 'qrcode']]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_2);

    return __WXML_GLOBAL__.ops_cached.$gwx_2;
  }

  function gz$gwx_3() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_3) return __WXML_GLOBAL__.ops_cached.$gwx_3;
    __WXML_GLOBAL__.ops_cached.$gwx_3 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }
    })(__WXML_GLOBAL__.ops_cached.$gwx_3);

    return __WXML_GLOBAL__.ops_cached.$gwx_3;
  }

  function gz$gwx_4() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_4) return __WXML_GLOBAL__.ops_cached.$gwx_4;
    __WXML_GLOBAL__.ops_cached.$gwx_4 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }

      Z([[2, '=='], [[7], [3, 'total']], [1, 0]]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_4);

    return __WXML_GLOBAL__.ops_cached.$gwx_4;
  }

  function gz$gwx_5() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_5) return __WXML_GLOBAL__.ops_cached.$gwx_5;
    __WXML_GLOBAL__.ops_cached.$gwx_5 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }

      Z([3, 'chargingTime']);
      Z([[2, '>'], [[6], [[7], [3, 'swiperImg']], [3, 'length']], [1, 0]]);
      Z([[2, '!='], [[6], [[7], [3, 'info']], [3, 'sid']], [1, 0]]);
      Z([3, 'openTips']);
      Z([3, 'tips']);
      Z([[6], [[7], [3, 'info']], [3, 'free_test']]);
      Z([[7], [3, 'isShowTip']]);
      Z(z[6]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_5);

    return __WXML_GLOBAL__.ops_cached.$gwx_5;
  }

  function gz$gwx_6() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_6) return __WXML_GLOBAL__.ops_cached.$gwx_6;
    __WXML_GLOBAL__.ops_cached.$gwx_6 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }
    })(__WXML_GLOBAL__.ops_cached.$gwx_6);

    return __WXML_GLOBAL__.ops_cached.$gwx_6;
  }

  function gz$gwx_7() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_7) return __WXML_GLOBAL__.ops_cached.$gwx_7;
    __WXML_GLOBAL__.ops_cached.$gwx_7 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }

      Z([3, 'markertaps']);
      Z([3, 'regionchange']);
      Z([3, 'hideSeller']);
      Z([3, 'maps']);
      Z([3, 'myMap']);
      Z([[7], [3, 'latitude']]);
      Z([[7], [3, 'longitude']]);
      Z([[7], [3, 'markers']]);
      Z([[7], [3, 'scale']]);
      Z([3, '{width: 100vw;height: 100vh;}']);
      Z([[7], [3, 'seller_address']]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_7);

    return __WXML_GLOBAL__.ops_cached.$gwx_7;
  }

  function gz$gwx_8() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_8) return __WXML_GLOBAL__.ops_cached.$gwx_8;
    __WXML_GLOBAL__.ops_cached.$gwx_8 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }

      Z([3, 'leaseDetail']);
      Z([3, 'lease_info']);
      Z([[2, '>'], [[7], [3, 'time']], [1, 0]]);
      Z([[2, '>'], [[7], [3, 'day']], [1, 0]]);
      Z([[7], [3, 'overtime']]);
      Z([[2, '>'], [[6], [[7], [3, 'nearySeller']], [3, 'length']], [1, 0]]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_8);

    return __WXML_GLOBAL__.ops_cached.$gwx_8;
  }

  function gz$gwx_9() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_9) return __WXML_GLOBAL__.ops_cached.$gwx_9;
    __WXML_GLOBAL__.ops_cached.$gwx_9 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }

      Z([3, 'myOrder']);
      Z([[2, '!='], [[7], [3, 'total']], [1, 0]]);
      Z([[7], [3, 'list']]);
      Z([[7], [3, 'index']]);
      Z([3, 'goDetail']);
      Z([3, 'order']);
      Z([[6], [[7], [3, 'item']], [3, 'id']]);
      Z([[2, '=='], [[6], [[7], [3, 'item']], [3, 'status']], [1, 1]]);
      Z([[2, '&&'], [[2, '=='], [[6], [[7], [3, 'item']], [3, 'status']], [1, 2]], [[2, '=='], [[6], [[7], [3, 'item']], [3, 'pay_status']], [1, 0]]]);
      Z([[2, '&&'], [[2, '=='], [[6], [[7], [3, 'item']], [3, 'status']], [1, 2]], [[2, '=='], [[6], [[7], [3, 'item']], [3, 'pay_status']], [1, 1]]]);
      Z([[2, '&&'], [[2, '=='], [[6], [[7], [3, 'item']], [3, 'status']], [1, 2]], [[2, '=='], [[6], [[7], [3, 'item']], [3, 'pay_status']], [1, 2]]]);
      Z([[2, '=='], [[6], [[7], [3, 'item']], [3, 'status']], [1, 3]]);
      Z([[2, '=='], [[6], [[7], [3, 'item']], [3, 'status']], [1, 4]]);
      Z([[2, '=='], [[6], [[7], [3, 'item']], [3, 'status']], [1, 2]]);
      Z([[2, '=='], [[7], [3, 'total']], [1, 0]]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_9);

    return __WXML_GLOBAL__.ops_cached.$gwx_9;
  }

  function gz$gwx_10() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_10) return __WXML_GLOBAL__.ops_cached.$gwx_10;
    __WXML_GLOBAL__.ops_cached.$gwx_10 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }
    })(__WXML_GLOBAL__.ops_cached.$gwx_10);

    return __WXML_GLOBAL__.ops_cached.$gwx_10;
  }

  function gz$gwx_11() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_11) return __WXML_GLOBAL__.ops_cached.$gwx_11;
    __WXML_GLOBAL__.ops_cached.$gwx_11 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }
    })(__WXML_GLOBAL__.ops_cached.$gwx_11);

    return __WXML_GLOBAL__.ops_cached.$gwx_11;
  }

  function gz$gwx_12() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_12) return __WXML_GLOBAL__.ops_cached.$gwx_12;
    __WXML_GLOBAL__.ops_cached.$gwx_12 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }

      Z([3, 'refundsDeposit']);
      Z([[2, '>'], [[6], [[7], [3, 'swiperImg']], [3, 'length']], [1, 0]]);
      Z([[2, '!='], [[6], [[7], [3, 'info']], [3, 'wechat_credit']], [1, 'true']]);
      Z([[2, '=='], [[6], [[7], [3, 'info']], [3, 'wechat_credit']], [1, 'true']]);
      Z(z[3]);
      Z(z[3]);
      Z([[7], [3, 'agreement']]);
      Z(z[6]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_12);

    return __WXML_GLOBAL__.ops_cached.$gwx_12;
  }

  function gz$gwx_13() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_13) return __WXML_GLOBAL__.ops_cached.$gwx_13;
    __WXML_GLOBAL__.ops_cached.$gwx_13 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }
    })(__WXML_GLOBAL__.ops_cached.$gwx_13);

    return __WXML_GLOBAL__.ops_cached.$gwx_13;
  }

  function gz$gwx_14() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_14) return __WXML_GLOBAL__.ops_cached.$gwx_14;
    __WXML_GLOBAL__.ops_cached.$gwx_14 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }

      Z([[2, '=='], [[7], [3, 'total']], [1, 0]]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_14);

    return __WXML_GLOBAL__.ops_cached.$gwx_14;
  }

  function gz$gwx_15() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_15) return __WXML_GLOBAL__.ops_cached.$gwx_15;
    __WXML_GLOBAL__.ops_cached.$gwx_15 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }
    })(__WXML_GLOBAL__.ops_cached.$gwx_15);

    return __WXML_GLOBAL__.ops_cached.$gwx_15;
  }

  function gz$gwx_16() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_16) return __WXML_GLOBAL__.ops_cached.$gwx_16;
    __WXML_GLOBAL__.ops_cached.$gwx_16 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }

      Z([3, 'successfulPayment']);
      Z([[7], [3, 'isShowTip']]);
      Z(z[1]);
      Z([[2, '=='], [[6], [[7], [3, 'info']], [3, 'isshowGetPaw']], [1, 'dmm']]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_16);

    return __WXML_GLOBAL__.ops_cached.$gwx_16;
  }

  function gz$gwx_17() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_17) return __WXML_GLOBAL__.ops_cached.$gwx_17;
    __WXML_GLOBAL__.ops_cached.$gwx_17 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }

      Z([3, 'user']);
      Z([3, 'user_wrap']);
      Z([[2, '!='], [[6], [[7], [3, 'userInfo']], [3, 'wechat_credit']], [1, 'true']]);
      Z([[2, '=='], [[6], [[7], [3, 'userInfo']], [3, 'wechat_credit']], [1, 'true']]);
      Z([[7], [3, 'isshowbtn']]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_17);

    return __WXML_GLOBAL__.ops_cached.$gwx_17;
  }

  function gz$gwx_18() {
    if (__WXML_GLOBAL__.ops_cached.$gwx_18) return __WXML_GLOBAL__.ops_cached.$gwx_18;
    __WXML_GLOBAL__.ops_cached.$gwx_18 = [];

    (function (z) {
      var a = 11;

      function Z(ops) {
        z.push(ops);
      }

      Z([3, 'viewDetails']);
      Z([[2, '&&'], [[2, '=='], [[7], [3, 'type']], [1, 2]], [[2, '=='], [[6], [[7], [3, 'info']], [3, 'pay_status']], [1, 0]]]);
      Z([[2, '&&'], [[2, '=='], [[7], [3, 'type']], [1, 2]], [[2, '=='], [[6], [[7], [3, 'info']], [3, 'pay_status']], [1, 1]]]);
      Z([[2, '&&'], [[2, '=='], [[7], [3, 'type']], [1, 2]], [[2, '=='], [[6], [[7], [3, 'info']], [3, 'pay_status']], [1, 2]]]);
      Z([[2, '=='], [[7], [3, 'type']], [1, 3]]);
      Z(z[1]);
    })(__WXML_GLOBAL__.ops_cached.$gwx_18);

    return __WXML_GLOBAL__.ops_cached.$gwx_18;
  }

  __WXML_GLOBAL__.ops_set.$gwx = z;
  __WXML_GLOBAL__.ops_init.$gwx = true;

  var nv_require = function () {
    var nnm = {};
    var nom = {};
    return function (n) {
      return function () {
        if (!nnm[n]) return undefined;

        try {
          if (!nom[n]) nom[n] = nnm[n]();
          return nom[n];
        } catch (e) {
          e.message = e.message.replace(/nv_/g, '');
          var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
          e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
          e.stack = e.stack.replace(/\snv_/g, ' ');
          e.stack = $gstack(e.stack);
          e.stack += '\n    at ' + n.substring(2);
          console.error(e);
        }
      };
    };
  }();

  var x = ['./pages/aboutUs/aboutUs.wxml', './pages/appeal/appeal.wxml', './pages/authorization/authorization.wxml', './pages/billRecord/billRecord.wxml', './pages/chargingTime/chargingTime.wxml', './pages/commonProblem/commonProblem.wxml', './pages/indexAlipay/indexAlipay.wxml', './pages/leaseDetail/leaseDetail.wxml', './pages/myOrder/myOrder.wxml', './pages/onLoan/onLoan.wxml', './pages/problemDetail/problemDetail.wxml', './pages/refundsDeposit/refundsDeposit.wxml', './pages/returnSuccess/returnSuccess.wxml', './pages/searchNearby/searchNearby.wxml', './pages/seller/seller.wxml', './pages/successfulPayment/successfulPayment.wxml', './pages/user/user.wxml', './pages/viewDetails/viewDetails.wxml'];
  d_[x[0]] = {};

  var m0 = function (e, s, r, gg) {
    var z = gz$gwx_1();
    return r;
  };

  e_[x[0]] = {
    f: m0,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[1]] = {};

  var m1 = function (e, s, r, gg) {
    var z = gz$gwx_2();

    var xC = _v();

    _(r, xC);

    if (_oz(z, 0, e, s, gg)) {
      xC.wxVkey = 1;
    }

    xC.wxXCkey = 1;
    return r;
  };

  e_[x[1]] = {
    f: m1,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[2]] = {};

  var m2 = function (e, s, r, gg) {
    var z = gz$gwx_3();
    return r;
  };

  e_[x[2]] = {
    f: m2,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[3]] = {};

  var m3 = function (e, s, r, gg) {
    var z = gz$gwx_4();

    var cF = _v();

    _(r, cF);

    if (_oz(z, 0, e, s, gg)) {
      cF.wxVkey = 1;
    }

    cF.wxXCkey = 1;
    return r;
  };

  e_[x[3]] = {
    f: m3,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[4]] = {};

  var m4 = function (e, s, r, gg) {
    var z = gz$gwx_5();

    var oH = _n('view');

    _rz(z, oH, 'id', 0, e, s, gg);

    var cI = _v();

    _(oH, cI);

    if (_oz(z, 1, e, s, gg)) {
      cI.wxVkey = 1;
    }

    var oJ = _v();

    _(oH, oJ);

    if (_oz(z, 2, e, s, gg)) {
      oJ.wxVkey = 1;
    }

    var tM = _mz(z, 'view', ['bindtap', 3, 'class', 1], [], e, s, gg);

    var eN = _v();

    _(tM, eN);

    if (_oz(z, 5, e, s, gg)) {
      eN.wxVkey = 1;
    }

    eN.wxXCkey = 1;

    _(oH, tM);

    var lK = _v();

    _(oH, lK);

    if (_oz(z, 6, e, s, gg)) {
      lK.wxVkey = 1;
    }

    var aL = _v();

    _(oH, aL);

    if (_oz(z, 7, e, s, gg)) {
      aL.wxVkey = 1;
    }

    cI.wxXCkey = 1;
    oJ.wxXCkey = 1;
    lK.wxXCkey = 1;
    aL.wxXCkey = 1;

    _(r, oH);

    return r;
  };

  e_[x[4]] = {
    f: m4,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[5]] = {};

  var m5 = function (e, s, r, gg) {
    var z = gz$gwx_6();
    return r;
  };

  e_[x[5]] = {
    f: m5,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[6]] = {};

  var m6 = function (e, s, r, gg) {
    var z = gz$gwx_7();

    var xQ = _mz(z, 'map', ['showLocation', -1, 'bindmarkertap', 0, 'bindregionchange', 1, 'bindtap', 1, 'class', 2, 'id', 3, 'latitude', 4, 'longitude', 5, 'markers', 6, 'scale', 7, 'style', 8], [], e, s, gg);

    var oR = _v();

    _(xQ, oR);

    if (_oz(z, 10, e, s, gg)) {
      oR.wxVkey = 1;
    }

    oR.wxXCkey = 1;

    _(r, xQ);

    return r;
  };

  e_[x[6]] = {
    f: m6,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[7]] = {};

  var m7 = function (e, s, r, gg) {
    var z = gz$gwx_8();

    var cT = _n('view');

    _rz(z, cT, 'id', 0, e, s, gg);

    var oV = _n('view');

    _rz(z, oV, 'class', 1, e, s, gg);

    var cW = _v();

    _(oV, cW);

    if (_oz(z, 2, e, s, gg)) {
      cW.wxVkey = 1;

      var lY = _v();

      _(cW, lY);

      if (_oz(z, 3, e, s, gg)) {
        lY.wxVkey = 1;
      }

      lY.wxXCkey = 1;
    }

    var oX = _v();

    _(oV, oX);

    if (_oz(z, 4, e, s, gg)) {
      oX.wxVkey = 1;
    }

    cW.wxXCkey = 1;
    oX.wxXCkey = 1;

    _(cT, oV);

    var hU = _v();

    _(cT, hU);

    if (_oz(z, 5, e, s, gg)) {
      hU.wxVkey = 1;
    }

    hU.wxXCkey = 1;

    _(r, cT);

    return r;
  };

  e_[x[7]] = {
    f: m7,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[8]] = {};

  var m8 = function (e, s, r, gg) {
    var z = gz$gwx_9();

    var t1 = _n('view');

    _rz(z, t1, 'id', 0, e, s, gg);

    var e2 = _v();

    _(t1, e2);

    if (_oz(z, 1, e, s, gg)) {
      e2.wxVkey = 1;

      var o4 = _v();

      _(e2, o4);

      var x5 = function (f7, o6, c8, gg) {
        var o0 = _mz(z, 'view', ['bindtap', 4, 'class', 1, 'data-id', 2], [], f7, o6, gg);

        var cAB = _v();

        _(o0, cAB);

        if (_oz(z, 7, f7, o6, gg)) {
          cAB.wxVkey = 1;
        }

        var oBB = _v();

        _(o0, oBB);

        if (_oz(z, 8, f7, o6, gg)) {
          oBB.wxVkey = 1;
        }

        var lCB = _v();

        _(o0, lCB);

        if (_oz(z, 9, f7, o6, gg)) {
          lCB.wxVkey = 1;
        }

        var aDB = _v();

        _(o0, aDB);

        if (_oz(z, 10, f7, o6, gg)) {
          aDB.wxVkey = 1;
        }

        var tEB = _v();

        _(o0, tEB);

        if (_oz(z, 11, f7, o6, gg)) {
          tEB.wxVkey = 1;
        }

        var eFB = _v();

        _(o0, eFB);

        if (_oz(z, 12, f7, o6, gg)) {
          eFB.wxVkey = 1;
        }

        var bGB = _v();

        _(o0, bGB);

        if (_oz(z, 13, f7, o6, gg)) {
          bGB.wxVkey = 1;
        }

        cAB.wxXCkey = 1;
        oBB.wxXCkey = 1;
        lCB.wxXCkey = 1;
        aDB.wxXCkey = 1;
        tEB.wxXCkey = 1;
        eFB.wxXCkey = 1;
        bGB.wxXCkey = 1;

        _(c8, o0);

        return c8;
      };

      o4.wxXCkey = 2;

      _2z(z, 2, x5, e, s, gg, o4, 'item', 'index', '{{index}}');
    }

    var b3 = _v();

    _(t1, b3);

    if (_oz(z, 14, e, s, gg)) {
      b3.wxVkey = 1;
    }

    e2.wxXCkey = 1;
    b3.wxXCkey = 1;

    _(r, t1);

    return r;
  };

  e_[x[8]] = {
    f: m8,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[9]] = {};

  var m9 = function (e, s, r, gg) {
    var z = gz$gwx_10();
    return r;
  };

  e_[x[9]] = {
    f: m9,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[10]] = {};

  var m10 = function (e, s, r, gg) {
    var z = gz$gwx_11();
    return r;
  };

  e_[x[10]] = {
    f: m10,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[11]] = {};

  var m11 = function (e, s, r, gg) {
    var z = gz$gwx_12();

    var fKB = _n('view');

    _rz(z, fKB, 'id', 0, e, s, gg);

    var cLB = _v();

    _(fKB, cLB);

    if (_oz(z, 1, e, s, gg)) {
      cLB.wxVkey = 1;
    }

    var hMB = _v();

    _(fKB, hMB);

    if (_oz(z, 2, e, s, gg)) {
      hMB.wxVkey = 1;
    }

    var oNB = _v();

    _(fKB, oNB);

    if (_oz(z, 3, e, s, gg)) {
      oNB.wxVkey = 1;
    }

    var cOB = _v();

    _(fKB, cOB);

    if (_oz(z, 4, e, s, gg)) {
      cOB.wxVkey = 1;
    }

    var oPB = _v();

    _(fKB, oPB);

    if (_oz(z, 5, e, s, gg)) {
      oPB.wxVkey = 1;
    }

    var lQB = _v();

    _(fKB, lQB);

    if (_oz(z, 6, e, s, gg)) {
      lQB.wxVkey = 1;
    }

    var aRB = _v();

    _(fKB, aRB);

    if (_oz(z, 7, e, s, gg)) {
      aRB.wxVkey = 1;
    }

    cLB.wxXCkey = 1;
    hMB.wxXCkey = 1;
    oNB.wxXCkey = 1;
    cOB.wxXCkey = 1;
    oPB.wxXCkey = 1;
    lQB.wxXCkey = 1;
    aRB.wxXCkey = 1;

    _(r, fKB);

    return r;
  };

  e_[x[11]] = {
    f: m11,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[12]] = {};

  var m12 = function (e, s, r, gg) {
    var z = gz$gwx_13();
    return r;
  };

  e_[x[12]] = {
    f: m12,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[13]] = {};

  var m13 = function (e, s, r, gg) {
    var z = gz$gwx_14();

    var bUB = _v();

    _(r, bUB);

    if (_oz(z, 0, e, s, gg)) {
      bUB.wxVkey = 1;
    }

    bUB.wxXCkey = 1;
    return r;
  };

  e_[x[13]] = {
    f: m13,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[14]] = {};

  var m14 = function (e, s, r, gg) {
    var z = gz$gwx_15();
    return r;
  };

  e_[x[14]] = {
    f: m14,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[15]] = {};

  var m15 = function (e, s, r, gg) {
    var z = gz$gwx_16();

    var oXB = _n('view');

    _rz(z, oXB, 'id', 0, e, s, gg);

    var fYB = _v();

    _(oXB, fYB);

    if (_oz(z, 1, e, s, gg)) {
      fYB.wxVkey = 1;
    }

    var cZB = _v();

    _(oXB, cZB);

    if (_oz(z, 2, e, s, gg)) {
      cZB.wxVkey = 1;
    }

    var h1B = _v();

    _(oXB, h1B);

    if (_oz(z, 3, e, s, gg)) {
      h1B.wxVkey = 1;
    }

    fYB.wxXCkey = 1;
    cZB.wxXCkey = 1;
    h1B.wxXCkey = 1;

    _(r, oXB);

    return r;
  };

  e_[x[15]] = {
    f: m15,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[16]] = {};

  var m16 = function (e, s, r, gg) {
    var z = gz$gwx_17();

    var c3B = _n('view');

    _rz(z, c3B, 'id', 0, e, s, gg);

    var l5B = _n('view');

    _rz(z, l5B, 'class', 1, e, s, gg);

    var a6B = _v();

    _(l5B, a6B);

    if (_oz(z, 2, e, s, gg)) {
      a6B.wxVkey = 1;
    }

    var t7B = _v();

    _(l5B, t7B);

    if (_oz(z, 3, e, s, gg)) {
      t7B.wxVkey = 1;
    }

    a6B.wxXCkey = 1;
    t7B.wxXCkey = 1;

    _(c3B, l5B);

    var o4B = _v();

    _(c3B, o4B);

    if (_oz(z, 4, e, s, gg)) {
      o4B.wxVkey = 1;
    }

    o4B.wxXCkey = 1;

    _(r, c3B);

    return r;
  };

  e_[x[16]] = {
    f: m16,
    j: [],
    i: [],
    ti: [],
    ic: []
  };
  d_[x[17]] = {};

  var m17 = function (e, s, r, gg) {
    var z = gz$gwx_18();

    var b9B = _n('view');

    _rz(z, b9B, 'id', 0, e, s, gg);

    var xAC = _n('view');

    var oBC = _v();

    _(xAC, oBC);

    if (_oz(z, 1, e, s, gg)) {
      oBC.wxVkey = 1;
    }

    var fCC = _v();

    _(xAC, fCC);

    if (_oz(z, 2, e, s, gg)) {
      fCC.wxVkey = 1;
    }

    var cDC = _v();

    _(xAC, cDC);

    if (_oz(z, 3, e, s, gg)) {
      cDC.wxVkey = 1;
    }

    var hEC = _v();

    _(xAC, hEC);

    if (_oz(z, 4, e, s, gg)) {
      hEC.wxVkey = 1;
    }

    oBC.wxXCkey = 1;
    fCC.wxXCkey = 1;
    cDC.wxXCkey = 1;
    hEC.wxXCkey = 1;

    _(b9B, xAC);

    var o0B = _v();

    _(b9B, o0B);

    if (_oz(z, 5, e, s, gg)) {
      o0B.wxVkey = 1;
    }

    o0B.wxXCkey = 1;

    _(r, b9B);

    return r;
  };

  e_[x[17]] = {
    f: m17,
    j: [],
    i: [],
    ti: [],
    ic: []
  };

  if (path && e_[path]) {
    return function (env, dd, global) {
      $gwxc = 0;
      var root = {
        "tag": "wx-page"
      };
      root.children = [];
      var main = e_[path].f;
      if (typeof global === "undefined") global = {};
      global.f = $gdc(f_[path], "", 1);

      try {
        main(env, {}, root, global);

        _tsd(root);
      } catch (err) {
        console.log(err);
      }

      return root;
    };
  }
};

__wxAppCode__['pages/aboutUs/aboutUs.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/aboutUs/aboutUs.wxml'] = [$gwx, './pages/aboutUs/aboutUs.wxml'];else __wxAppCode__['pages/aboutUs/aboutUs.wxml'] = $gwx('./pages/aboutUs/aboutUs.wxml');
__wxAppCode__['pages/appeal/appeal.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/appeal/appeal.wxml'] = [$gwx, './pages/appeal/appeal.wxml'];else __wxAppCode__['pages/appeal/appeal.wxml'] = $gwx('./pages/appeal/appeal.wxml');
__wxAppCode__['pages/authorization/authorization.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/authorization/authorization.wxml'] = [$gwx, './pages/authorization/authorization.wxml'];else __wxAppCode__['pages/authorization/authorization.wxml'] = $gwx('./pages/authorization/authorization.wxml');
__wxAppCode__['pages/billRecord/billRecord.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/billRecord/billRecord.wxml'] = [$gwx, './pages/billRecord/billRecord.wxml'];else __wxAppCode__['pages/billRecord/billRecord.wxml'] = $gwx('./pages/billRecord/billRecord.wxml');
__wxAppCode__['pages/chargingTime/chargingTime.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/chargingTime/chargingTime.wxml'] = [$gwx, './pages/chargingTime/chargingTime.wxml'];else __wxAppCode__['pages/chargingTime/chargingTime.wxml'] = $gwx('./pages/chargingTime/chargingTime.wxml');
__wxAppCode__['pages/commonProblem/commonProblem.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/commonProblem/commonProblem.wxml'] = [$gwx, './pages/commonProblem/commonProblem.wxml'];else __wxAppCode__['pages/commonProblem/commonProblem.wxml'] = $gwx('./pages/commonProblem/commonProblem.wxml');
__wxAppCode__['pages/indexAlipay/indexAlipay.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/indexAlipay/indexAlipay.wxml'] = [$gwx, './pages/indexAlipay/indexAlipay.wxml'];else __wxAppCode__['pages/indexAlipay/indexAlipay.wxml'] = $gwx('./pages/indexAlipay/indexAlipay.wxml');
__wxAppCode__['pages/leaseDetail/leaseDetail.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/leaseDetail/leaseDetail.wxml'] = [$gwx, './pages/leaseDetail/leaseDetail.wxml'];else __wxAppCode__['pages/leaseDetail/leaseDetail.wxml'] = $gwx('./pages/leaseDetail/leaseDetail.wxml');
__wxAppCode__['pages/myOrder/myOrder.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/myOrder/myOrder.wxml'] = [$gwx, './pages/myOrder/myOrder.wxml'];else __wxAppCode__['pages/myOrder/myOrder.wxml'] = $gwx('./pages/myOrder/myOrder.wxml');
__wxAppCode__['pages/onLoan/onLoan.json'] = {
  "navigationBarTitleText": "租借成功",
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/onLoan/onLoan.wxml'] = [$gwx, './pages/onLoan/onLoan.wxml'];else __wxAppCode__['pages/onLoan/onLoan.wxml'] = $gwx('./pages/onLoan/onLoan.wxml');
__wxAppCode__['pages/problemDetail/problemDetail.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/problemDetail/problemDetail.wxml'] = [$gwx, './pages/problemDetail/problemDetail.wxml'];else __wxAppCode__['pages/problemDetail/problemDetail.wxml'] = $gwx('./pages/problemDetail/problemDetail.wxml');
__wxAppCode__['pages/refundsDeposit/refundsDeposit.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/refundsDeposit/refundsDeposit.wxml'] = [$gwx, './pages/refundsDeposit/refundsDeposit.wxml'];else __wxAppCode__['pages/refundsDeposit/refundsDeposit.wxml'] = $gwx('./pages/refundsDeposit/refundsDeposit.wxml');
__wxAppCode__['pages/returnSuccess/returnSuccess.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/returnSuccess/returnSuccess.wxml'] = [$gwx, './pages/returnSuccess/returnSuccess.wxml'];else __wxAppCode__['pages/returnSuccess/returnSuccess.wxml'] = $gwx('./pages/returnSuccess/returnSuccess.wxml');
__wxAppCode__['pages/searchNearby/searchNearby.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/searchNearby/searchNearby.wxml'] = [$gwx, './pages/searchNearby/searchNearby.wxml'];else __wxAppCode__['pages/searchNearby/searchNearby.wxml'] = $gwx('./pages/searchNearby/searchNearby.wxml');
__wxAppCode__['pages/seller/seller.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/seller/seller.wxml'] = [$gwx, './pages/seller/seller.wxml'];else __wxAppCode__['pages/seller/seller.wxml'] = $gwx('./pages/seller/seller.wxml');
__wxAppCode__['pages/successfulPayment/successfulPayment.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/successfulPayment/successfulPayment.wxml'] = [$gwx, './pages/successfulPayment/successfulPayment.wxml'];else __wxAppCode__['pages/successfulPayment/successfulPayment.wxml'] = $gwx('./pages/successfulPayment/successfulPayment.wxml');
__wxAppCode__['pages/user/user.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/user/user.wxml'] = [$gwx, './pages/user/user.wxml'];else __wxAppCode__['pages/user/user.wxml'] = $gwx('./pages/user/user.wxml');
__wxAppCode__['pages/viewDetails/viewDetails.json'] = {
  "usingComponents": {}
};
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/viewDetails/viewDetails.wxml'] = [$gwx, './pages/viewDetails/viewDetails.wxml'];else __wxAppCode__['pages/viewDetails/viewDetails.wxml'] = $gwx('./pages/viewDetails/viewDetails.wxml');
define("util/base64.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function r(r) {
    var e, t, h, o, c, d;

    for (h = r.length, t = 0, e = ""; t < h;) {
      if (o = 255 & r.charCodeAt(t++), t == h) {
        e += a.charAt(o >> 2), e += a.charAt((3 & o) << 4), e += "==";
        break;
      }

      if (c = r.charCodeAt(t++), t == h) {
        e += a.charAt(o >> 2), e += a.charAt((3 & o) << 4 | (240 & c) >> 4), e += a.charAt((15 & c) << 2), e += "=";
        break;
      }

      d = r.charCodeAt(t++), e += a.charAt(o >> 2), e += a.charAt((3 & o) << 4 | (240 & c) >> 4), e += a.charAt((15 & c) << 2 | (192 & d) >> 6), e += a.charAt(63 & d);
    }

    return e;
  }

  function e(r) {
    var e, a, h, o, c, d, i;

    for (d = r.length, c = 0, i = ""; c < d;) {
      do {
        e = t[255 & r.charCodeAt(c++)];
      } while (c < d && -1 == e);

      if (-1 == e) break;

      do {
        a = t[255 & r.charCodeAt(c++)];
      } while (c < d && -1 == a);

      if (-1 == a) break;
      i += String.fromCharCode(e << 2 | (48 & a) >> 4);

      do {
        if (61 == (h = 255 & r.charCodeAt(c++))) return i;
        h = t[h];
      } while (c < d && -1 == h);

      if (-1 == h) break;
      i += String.fromCharCode((15 & a) << 4 | (60 & h) >> 2);

      do {
        if (61 == (o = 255 & r.charCodeAt(c++))) return i;
        o = t[o];
      } while (c < d && -1 == o);

      if (-1 == o) break;
      i += String.fromCharCode((3 & h) << 6 | o);
    }

    return i;
  }

  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      t = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
  module.exports = {
    base64encode: r,
    base64decode: e
  };
});
define("util/md5.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function r(r) {
    return h(n(i(r), r.length * A));
  }

  function n(r, n) {
    r[n >> 5] |= 128 << n % 32, r[14 + (n + 64 >>> 9 << 4)] = n;

    for (var t = 1732584193, a = -271733879, i = -1732584194, h = 271733878, v = 0; v < r.length; v += 16) {
      var A = t,
          l = a,
          g = i,
          d = h;
      a = c(a = c(a = c(a = c(a = o(a = o(a = o(a = o(a = e(a = e(a = e(a = e(a = u(a = u(a = u(a = u(a, i = u(i, h = u(h, t = u(t, a, i, h, r[v + 0], 7, -680876936), a, i, r[v + 1], 12, -389564586), t, a, r[v + 2], 17, 606105819), h, t, r[v + 3], 22, -1044525330), i = u(i, h = u(h, t = u(t, a, i, h, r[v + 4], 7, -176418897), a, i, r[v + 5], 12, 1200080426), t, a, r[v + 6], 17, -1473231341), h, t, r[v + 7], 22, -45705983), i = u(i, h = u(h, t = u(t, a, i, h, r[v + 8], 7, 1770035416), a, i, r[v + 9], 12, -1958414417), t, a, r[v + 10], 17, -42063), h, t, r[v + 11], 22, -1990404162), i = u(i, h = u(h, t = u(t, a, i, h, r[v + 12], 7, 1804603682), a, i, r[v + 13], 12, -40341101), t, a, r[v + 14], 17, -1502002290), h, t, r[v + 15], 22, 1236535329), i = e(i, h = e(h, t = e(t, a, i, h, r[v + 1], 5, -165796510), a, i, r[v + 6], 9, -1069501632), t, a, r[v + 11], 14, 643717713), h, t, r[v + 0], 20, -373897302), i = e(i, h = e(h, t = e(t, a, i, h, r[v + 5], 5, -701558691), a, i, r[v + 10], 9, 38016083), t, a, r[v + 15], 14, -660478335), h, t, r[v + 4], 20, -405537848), i = e(i, h = e(h, t = e(t, a, i, h, r[v + 9], 5, 568446438), a, i, r[v + 14], 9, -1019803690), t, a, r[v + 3], 14, -187363961), h, t, r[v + 8], 20, 1163531501), i = e(i, h = e(h, t = e(t, a, i, h, r[v + 13], 5, -1444681467), a, i, r[v + 2], 9, -51403784), t, a, r[v + 7], 14, 1735328473), h, t, r[v + 12], 20, -1926607734), i = o(i, h = o(h, t = o(t, a, i, h, r[v + 5], 4, -378558), a, i, r[v + 8], 11, -2022574463), t, a, r[v + 11], 16, 1839030562), h, t, r[v + 14], 23, -35309556), i = o(i, h = o(h, t = o(t, a, i, h, r[v + 1], 4, -1530992060), a, i, r[v + 4], 11, 1272893353), t, a, r[v + 7], 16, -155497632), h, t, r[v + 10], 23, -1094730640), i = o(i, h = o(h, t = o(t, a, i, h, r[v + 13], 4, 681279174), a, i, r[v + 0], 11, -358537222), t, a, r[v + 3], 16, -722521979), h, t, r[v + 6], 23, 76029189), i = o(i, h = o(h, t = o(t, a, i, h, r[v + 9], 4, -640364487), a, i, r[v + 12], 11, -421815835), t, a, r[v + 15], 16, 530742520), h, t, r[v + 2], 23, -995338651), i = c(i, h = c(h, t = c(t, a, i, h, r[v + 0], 6, -198630844), a, i, r[v + 7], 10, 1126891415), t, a, r[v + 14], 15, -1416354905), h, t, r[v + 5], 21, -57434055), i = c(i, h = c(h, t = c(t, a, i, h, r[v + 12], 6, 1700485571), a, i, r[v + 3], 10, -1894986606), t, a, r[v + 10], 15, -1051523), h, t, r[v + 1], 21, -2054922799), i = c(i, h = c(h, t = c(t, a, i, h, r[v + 8], 6, 1873313359), a, i, r[v + 15], 10, -30611744), t, a, r[v + 6], 15, -1560198380), h, t, r[v + 13], 21, 1309151649), i = c(i, h = c(h, t = c(t, a, i, h, r[v + 4], 6, -145523070), a, i, r[v + 11], 10, -1120210379), t, a, r[v + 2], 15, 718787259), h, t, r[v + 9], 21, -343485551), t = f(t, A), a = f(a, l), i = f(i, g), h = f(h, d);
    }

    return Array(t, a, i, h);
  }

  function t(r, n, t, u, e, o) {
    return f(a(f(f(n, r), f(u, o)), e), t);
  }

  function u(r, n, u, e, o, c, f) {
    return t(n & u | ~n & e, r, n, o, c, f);
  }

  function e(r, n, u, e, o, c, f) {
    return t(n & e | u & ~e, r, n, o, c, f);
  }

  function o(r, n, u, e, o, c, f) {
    return t(n ^ u ^ e, r, n, o, c, f);
  }

  function c(r, n, u, e, o, c, f) {
    return t(u ^ (n | ~e), r, n, o, c, f);
  }

  function f(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
  }

  function a(r, n) {
    return r << n | r >>> 32 - n;
  }

  function i(r) {
    for (var n = Array(), t = (1 << A) - 1, u = 0; u < r.length * A; u += A) n[u >> 5] |= (r.charCodeAt(u / A) & t) << u % 32;

    return n;
  }

  function h(r) {
    for (var n = v ? "0123456789ABCDEF" : "0123456789abcdef", t = "", u = 0; u < 4 * r.length; u++) t += n.charAt(r[u >> 2] >> u % 4 * 8 + 4 & 15) + n.charAt(r[u >> 2] >> u % 4 * 8 & 15);

    return t;
  }

  var v = 0,
      A = 8;
  module.exports = {
    hexMD5: r
  };
});
define("util/util.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  function t(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zy@20200608";
    e = s.hexMD5(e);

    for (var n = 0, o = (t = r.base64decode(t)).length, a = e.length, i = "", c = "", u = 0; u < o; u++) n == a && (n = 0), i += e.substr(n, 1), n++;

    for (u = 0; u < o; u++) t.substr(u, 1).charCodeAt() < i.substr(u, 1).charCodeAt() ? c += String.fromCharCode((t.substr(u, 1) + 256).charCodeAt() - i.substr(u, 1).charCodeAt()) : c += String.fromCharCode(t.substr(u, 1).charCodeAt() - i.substr(u, 1).charCodeAt());

    return c;
  }

  function e() {
    var t = Date.parse(new Date()) / 1e3;
    return {
      timestamp: t = t.toString(),
      hash: s.hexMD5(c.headerkey + t)
    };
  }

  function n(t, n, o) {
    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {};
    wx2my.request({
      url: c.host + t,
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded",
        openid: i.globalData.openID,
        hash: e().hash,
        time: e().timestamp.toString(),
        ocode: c.ocode,
        client: "wechat"
      },
      data: n,
      dataType: "json",
      success: function (t) {
        switch (t.data || (a(), wx2my.showToast({
          title: "系统繁忙",
          icon: "none"
        })), t.data.code) {
          case 0:
            a(), wx2my.showToast({
              title: t.data.msg,
              icon: "none"
            });
            break;

          case 401:
            a(), wx2my.showToast({
              title: "未登录/未授权",
              icon: "none"
            });
            break;

          case 403:
            a(), wx2my.showToast({
              title: "非法请求",
              icon: "none"
            });
            break;

          default:
            o(t.data);
        }
      },
      fail: function (t) {
        a(), wx2my.showToast({
          title: "系统繁忙",
          icon: "none"
        });
      }
    });
  }

  function o(e, n) {
    var o = null,
        a = null,
        i = null;
    return -1 != e.indexOf("&&cineda=") ? (o = e.indexOf("&&cineda="), a = t(a = e.substring(n, o)), i = e.substring(o + 9)) : -1 != e.indexOf("&&t=") && (o = e.indexOf("&&t="), a = t(a = e.substring(n, o)), i = e.substring(o + 4)), {
      oid: a,
      type: "cab",
      qrcode: i
    };
  }

  function a(e, n) {
    var o = e.indexOf("&&t="),
        a = e.substring(n, o);
    return {
      oid: a = t(a),
      type: "line",
      qrcode: e.substring(o + 4)
    };
  }

  var i = getApp(),
      s = require("./md5.js"),
      r = require("./base64.js"),
      c = {
    oid: 18,
    ocode: "huanyujiayang",
    host: "https://www.tujiaoke.com/app",
    qrcodeurl: "https://qrcode.tujiaoke.com",
    headerkey: "zycsw@2020&8889"
  };

  module.exports = {
    config: c,
    mwdecrypt: t,
    httpRequest: n,
    getUserInfoAlipay: function (t) {
      wx2my.getLocation({
        success: function (t) {
          i.globalData.longitude = t.longitude, i.globalData.latitude = t.latitude;
        }
      }), wx2my.getSetting({
        success: function (e) {
          e.authSetting["scope.userInfo"] && my.getUserInfo({
            success: function (e) {
              console.log(e), t(e);
            }
          });
        }
      });
    },
    alipayPayment: function (t, e, o, a) {
      n("/payment/recharge", {
        amount: t,
        pay_type: "alipay",
        type: e
      }, function (t) {
        if (1 == t.code) {
          var e = t.data.params;
          my.requestPayment({
            timeStamp: e.timeStamp,
            nonceStr: e.nonceStr,
            package: e.package,
            signType: e.signType,
            paySign: e.paySign,
            success: function () {
              o(t.data.order_no);
            },
            fail: function (t) {
              wx2my.showToast({
                title: "支付失败",
                icon: "none"
              }), a();
            },
            complete: function (t) {
              wx2my.hideLoading();
            }
          });
        } else wx2my.hideLoading(), wx2my.showToast({
          title: "支付失败",
          icon: "none"
        });
      });
    },
    returnQrcode: function (t) {
      var e = c.qrcodeurl,
          n = null;
      return t.substring(0, e.length + 14) == e + "/Lease?objhxy=" ? n = o(t, e.length + 14) : t.substring(0, e.length + 9) == e + "/Lease?o=" ? n = o(t, e.length + 9) : t.substring(0, e.length + 6) == e + "/Xc?o=" && (n = a(t, e.length + 6)), n;
    },
    userAuthor: function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
      n("/user/getInfo", {}, function (n) {
        1 == n.code && (1 == n.data.is_auth ? t(n) : (e(), wx2my.navigateTo({
          url: "/pages/authorization/authorization"
        })));
      }, function () {
        e();
      });
    }
  };
});
define("app.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  App({
    onLaunch: function (o) {},
    globalData: {
      openID: "",
      uid: "130",
      userInfo: {},
      longitude: 113.97933,
      latitude: 22.540745,
      outCodeUrl: "",
      outLineUrl: ""
    }
  });
});

require("app.js");

__wxRoute = 'pages/indexAlipay/indexAlipay';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/indexAlipay/indexAlipay.js';
define("pages/indexAlipay/indexAlipay.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = getApp(),
      t = require("../../util/util.js"),
      a = 1;

  Page({
    data: {
      userinfo: {},
      longitude: 116.404556,
      latitude: 39.915156,
      seller_address: !1,
      markers: [],
      tel: "",
      scale: 16,
      isClick: !0,
      nearySeller: [],
      seller: {}
    },
    onLoad: function (i) {
      a = 1;
      var n = this;

      if (i.q) {
        var o = decodeURIComponent(i.q),
            r = t.returnQrcode(o);
        this.getAlipayOppenid(function () {
          n.getLocation(), t.userAuthor(function () {
            switch (r.type) {
              case "cab":
                e.globalData.outCodeUrl = o, n.cabinet(r.qrcode);
                break;

              case "line":
                e.globalData.outLineUrl = o, n.lineCharging(r.qrcode);
            }
          }, function () {
            wx2my.setStorage({
              key: "device",
              data: JSON.stringify(r)
            });
          });
        });
      } else this.getAlipayOppenid(function () {
        n.getUseInfo(), n.getLocation();
      });
    },
    onShow: function () {
      var t = this;
      e.globalData.openID && this.getUseInfo(), wx2my.getStorage({
        key: "device",
        success: function (e) {
          var a = JSON.parse(e.data);

          switch (wx2my.removeStorage({
            key: "device"
          }), a.type) {
            case "cab":
              t.cabinet(a.qrcode);
              break;

            case "line":
              t.lineCharging(a.qrcode);
          }
        }
      });
    },
    onReady: function () {
      this.mapCtx = my.createMapContext("myMap");
    },
    getAlipayOppenid: function (i) {
      var n = this;
      my.getAuthCode({
        scopes: 'auth_user', // 主动授权（弹框）：auth_user，静默授权（不弹框）：auth_base
        success: (res) => {
          if (res.authCode) {
            res.authCode && t.httpRequest("/Auth/alipayOpendId", {
              code: res.authCode
            }, function (t) {
              if (t.data.openid) e.globalData.openID = t.data.openid, i();else {
                if (!(a < 3)) return void wx2my.showModal({
                  title: "温馨提示",
                  content: "尊敬的用户,您的openID未获取到,请您退出程序并再次进入重新获取"
                });
                wx2my.showToast({
                  title: "openID获取失败",
                  icon: "none"
                }), n.getAlipayOppenid(i), a++;
              }
            });
          }
        },
      });
      /*my.login({
        success: function (o) {
          o.code && t.httpRequest("/Auth/wechatOpendId", {
            code: o.code
          }, function (t) {
            if (t.data.openid) e.globalData.openID = t.data.openid, i();else {
              if (!(a < 3)) return void wx2my.showModal({
                title: "温馨提示",
                content: "尊敬的用户,您的openID未获取到,请您退出程序并再次进入重新获取"
              });
              wx2my.showToast({
                title: "openID获取失败",
                icon: "none"
              }), n.getAlipayOppenid(i), a++;
            }
          });
        }
      });*/
    },
    getUseInfo: function () {
      var e = this;
      t.httpRequest("/user/getInfo", {}, function (t) {
        1 == t.code && e.setData({
          userinfo: t.data
        });
      });
    },
    getLocation: function () {
      var t = this;
      wx2my.getLocation({
        type: "gcj02",
        success: function (a) {
          t.setData({
            longitude: a.longitude,
            latitude: a.latitude
          }), e.globalData.longitude = a.longitude, e.globalData.latitude = a.latitude, t.getNearySellerInfo(a.longitude, a.latitude);
        }
      });
    },
    goUser: function () {
      this.hideSeller(), t.userAuthor(function () {
        wx2my.navigateTo({
          url: "../user/user"
        });
      });
    },
    goSeller: function () {
      var e = this;
      wx2my.navigateTo({
        url: "../seller/seller?id=" + e.data.seller.id
      });
    },
    goNearby: function () {
      this.hideSeller();
      var t = {
        longitude: e.globalData.longitude,
        latitude: e.globalData.latitude
      };
      wx2my.navigateTo({
        url: "../searchNearby/searchNearby?localtion=" + JSON.stringify(t)
      });
    },
    hideSeller: function () {
      this.setData({
        seller_address: !1
      });
    },
    regionchange: function (t) {
      var a = this;
      e.globalData.openID && "end" == t.type && a.mapCtx.getCenterLocation({
        success: function (t) {
          e.globalData.longitude = t.longitude, e.globalData.latitude = t.latitude, a.getNearySellerInfo(t.longitude, t.latitude);
        }
      });
    },
    backOriginal: function () {
      this.mapCtx.moveToLocation();
    },
    markertaps: function (e) {
      var t = this;
      t.setData({
        seller_address: !0
      });
      var a = !0,
          i = !1,
          n = void 0;

      try {
        for (var o, r = t.data.nearySeller[Symbol.iterator](); !(a = (o = r.next()).done); a = !0) {
          var l = o.value;
          if (l.id == e.markerId) return void t.setData({
            seller: l
          });
        }
      } catch (e) {
        i = !0, n = e;
      } finally {
        try {
          !a && r.return && r.return();
        } finally {
          if (i) throw n;
        }
      }
    },
    _scanCode: function () {
      var e = this;
      t.userAuthor(function () {
        wx2my.scanCode({
          scanType: ["qrCode"],
          onlyFromCamera: !0,
          success: function (a) {
            if (a.result) {
              var i = a.result,
                  n = t.returnQrcode(i);
              if (n.oid == t.config.oid) switch (n.type) {
                case "cab":
                  e.cabinet(n.qrcode);
                  break;

                case "line":
                  e.lineCharging(n.qrcode);
              }
            }
          }
        });
      });
    },
    cabinet: function (e) {
      t.httpRequest("/Lease/deviceScan", {
        device_code: e
      }, function (e) {
        switch (e.code) {
          case 1:
            wx2my.navigateTo({
              url: "../refundsDeposit/refundsDeposit?data=" + JSON.stringify(e.data)
            });
            break;

          case 2:
            1 == e.data.order_type ? wx2my.navigateTo({
              url: "../leaseDetail/leaseDetail?order_id=" + e.data.order_id
            }) : 2 == e.data.order_type && wx2my.navigateTo({
              url: "../successfulPayment/successfulPayment?order_id=" + e.data.order_id
            });
            break;

          case 3:
            wx2my.navigateTo({
              url: "../viewDetails/viewDetails?order_id=" + e.data.order_id + "&type=2"
            });
            break;

          default:
            wx2my.showToast({
              title: e.msg,
              icon: "none"
            });
        }
      });
    },
    lineCharging: function (e) {
      t.httpRequest("/lease/wiredScan", {
        qrcode: e
      }, function (e) {
        switch (e.code) {
          case 1:
            wx2my.navigateTo({
              url: "../chargingTime/chargingTime?data=" + JSON.stringify(e.data)
            });
            break;

          case 2:
            1 == e.data.order_type ? wx2my.navigateTo({
              url: "../leaseDetail/leaseDetail?order_id=" + e.data.order_id
            }) : 2 == e.data.order_type && wx2my.navigateTo({
              url: "../successfulPayment/successfulPayment?order_id=" + e.data.order_id
            });
            break;

          default:
            wx2my.showToast({
              title: e.msg,
              icon: "none"
            });
        }
      });
    },
    makePhoneCall: function (e) {
      var t = e.currentTarget.dataset.tel;
      wx2my.makePhoneCall({
        phoneNumber: t.toString()
      });
    },
    searchAddress: function () {
      var t = this;
      wx2my.chooseLocation({
        success: function (a) {
          t.setData({
            longitude: a.longitude,
            latitude: a.latitude
          }), e.globalData.longitude = a.longitude, e.globalData.latitude = a.latitude;
        }
      });
    },
    getNearySellerInfo: function (e, a) {
      var i = this;
      t.httpRequest("/Seller/sellerList", {
        longitude: e,
        latitude: a
      }, function (e) {
        if (1 == e.code) {
          i.setData({
            nearySeller: e.data.list,
            tel: e.data.tel
          });
          var t = [],
              a = !0,
              n = !1,
              o = void 0;

          try {
            for (var r, l = e.data.list[Symbol.iterator](); !(a = (r = l.next()).done); a = !0) {
              var s = r.value;
              t.push({
                id: s.id,
                width: s.width,
                height: s.height,
                longitude: s.longitude,
                latitude: s.latitude,
                iconPath: s.iconPath
              });
            }
          } catch (e) {
            n = !0, o = e;
          } finally {
            try {
              !a && l.return && l.return();
            } finally {
              if (n) throw o;
            }
          }

          i.setData({
            markers: t
          });
        }
      });
    }
  });
});

require("pages/indexAlipay/indexAlipay.js");

__wxRoute = 'pages/authorization/authorization';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/authorization/authorization.js';
define("pages/authorization/authorization.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var t = getApp(),
      e = require("../../util/util.js");

  Page({
    data: {
      isClick: !0
    },
    onLoad: function (t) {},
    back: function () {
      wx2my.navigateBack({
        delta: 1
      });
    },
    bindgetuserinfos: function (i) {
      var n = this,
          o = i.detail.userInfo;
      console.log(o), void 0 != o && e.httpRequest("/User/updateInfo", {
        openid: t.globalData.openID,
        userinfo: JSON.stringify(o)
      }, function (t) {
        1 == t.code ? n.back() : wx2my.showToast({
          title: t.msg,
          icon: "none"
        });
      });
    }
  });
});

require("pages/authorization/authorization.js");

__wxRoute = 'pages/viewDetails/viewDetails';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/viewDetails/viewDetails.js';
define("pages/viewDetails/viewDetails.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  getApp();

  var t = require("../../util/util.js");

  Page({
    data: {
      info: {},
      type: 2
    },
    onLoad: function (t) {
      this.getDetail(t.order_id), this.setData({
        type: t.type || 2
      }), wx2my.setStorage({
        key: "hui",
        data: !1
      });
    },
    onUnload: function () {
      var t = getCurrentPages(),
          e = t.length - 2;
      "pages/leaseDetail/leaseDetail" == t[e].route && wx2my.navigateBack({
        delta: e - 1
      });
    },
    getDetail: function (e) {
      var a = this;
      t.httpRequest("/order/orderInfo", {
        order_id: e
      }, function (t) {
        1 == t.code && a.setData({
          info: t.data
        });
      });
    },
    payStatus: function (e) {
      var a = e.currentTarget.dataset.id;
      t.httpRequest("/order/payStatus", {
        order_id: a
      }, function (t) {
        wx2my.showToast({
          title: t.msg,
          duration: 4e3
        }), 1 == t.data.status && setTimeout(function () {
          wx2my.navigateBack({
            delta: 1
          });
        }, 4e3);
      });
    }
  });
});

require("pages/viewDetails/viewDetails.js");

__wxRoute = 'pages/successfulPayment/successfulPayment';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/successfulPayment/successfulPayment.js';
define("pages/successfulPayment/successfulPayment.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  getApp();

  var t = require("../../util/util.js"),
      i = null;

  Page({
    data: {
      info: {},
      password: [],
      isPasClick: !0,
      isOveClick: !0,
      isShowTip: !1,
      hour: "00",
      minute: "00",
      second: "00"
    },
    onLoad: function (t) {
      this.getDetail(t.order_id);
    },
    onUnload: function () {
      clearInterval(i);
    },
    getDetail: function (i) {
      var e = this;
      t.httpRequest("/order/wiredInfo", {
        order_id: i
      }, function (t) {
        if (1 == t.code) {
          var i = {
            order_id: t.data.order_id,
            time: t.data.time,
            expire_time: t.data.expire_time,
            is_end: t.data.is_end,
            qrcode: t.data.qrcode,
            isshowGetPaw: t.data.type,
            intro: t.data.intro
          };
          e.setData({
            password: t.data.password.toString().split(""),
            info: i
          }), e.countDown(t.data.expire_time - t.data.time);
        } else wx2my.showToast({
          title: t.msg,
          icon: "none"
        });
      });
    },
    overOrder: function () {
      var i = this;
      i.data.isOveClick && (i.setData({
        isOveClick: !1
      }), t.httpRequest("/order/wiredEnd", {
        order_id: i.data.info.order_id
      }, function (t) {
        1 == t.code && (wx2my.showToast({
          title: "结束订单成功",
          icon: "none"
        }), setTimeout(function () {
          i.setData({
            isOveClick: !0
          }), wx2my.redirectTo({
            url: "../indexAlipay/indexAlipay"
          });
        }, 1500));
      }, function () {
        i.setData({
          isOveClick: !0
        });
      }));
    },
    againGetPaw: function () {
      var e = this;
      e.data.isPasClick && (e.setData({
        isPasClick: !1
      }), clearInterval(i), t.httpRequest("/order/wiredPassword", {
        order_id: e.data.info.order_id
      }, function (t) {
        1 == t.code && (e.setData({
          password: t.data.password.toString().split("")
        }), e.countDown(t.data.expire_time - t.data.time), wx2my.showToast({
          title: "密码更换成功",
          icon: "none"
        }), setTimeout(function () {
          e.setData({
            isPasClick: !0
          });
        }, 1e3));
      }, function () {
        e.setData({
          isPasClick: !0
        });
      }));
    },
    openTips: function () {
      this.setData({
        isShowTip: !0
      });
    },
    closeTips: function () {
      this.setData({
        isShowTip: !1
      });
    },
    countDown: function (t) {
      function e() {
        var e = parseInt(t / 60 / 60 % 24),
            o = parseInt(t / 60 % 60),
            n = parseInt(t % 60);
        e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), n < 10 && (n = "0" + n), t < 1 && (clearInterval(i), wx2my.showToast({
          title: "订单已结束",
          icon: "none"
        }), setTimeout(function () {
          a.overOrder();
        }, 1500)), a.setData({
          hour: e,
          minute: o,
          second: n
        });
      }

      var a = this;
      i = setInterval(function () {
        t--, e();
      }, 1e3);
    }
  });
});

require("pages/successfulPayment/successfulPayment.js");

__wxRoute = 'pages/seller/seller';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/seller/seller.js';
define("pages/seller/seller.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = getApp(),
      a = require("../../util/util.js");

  Page({
    data: {
      seller: {}
    },
    onLoad: function (t) {
      var l = this;
      a.httpRequest("/Seller/info", {
        longitude: e.globalData.longitude,
        latitude: e.globalData.latitude,
        id: t.id
      }, function (e) {
        1 == e.code && l.setData({
          seller: e.data
        });
      });
    },
    openLocation: function () {
      var e = this;
      wx2my.openLocation({
        latitude: Number(e.data.seller.latitude),
        longitude: Number(e.data.seller.longitude),
        name: e.data.seller.name,
        address: e.data.seller.area + e.data.seller.address
      });
    }
  });
});

require("pages/seller/seller.js");

__wxRoute = 'pages/searchNearby/searchNearby';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/searchNearby/searchNearby.js';
define("pages/searchNearby/searchNearby.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = getApp(),
      a = require("../../util/util.js"),
      t = {
    page: 1,
    page_size: 10
  };

  Page({
    data: {
      total: 0,
      nearySeller: []
    },
    onLoad: function () {
      t = {
        page: 1,
        page_size: 10
      }, this.getNearySellerInfo();
    },
    onReachBottom: function () {
      var e = this;
      e.data.total > e.data.nearySeller.length && (t.page++, e.getNearySellerInfo());
    },
    goSeller: function (e) {
      var a = e.currentTarget.dataset.id;
      wx2my.navigateTo({
        url: "../seller/seller?id=" + a
      });
    },
    getNearySellerInfo: function () {
      var l = this;
      wx2my.showLoading({
        title: "加载中..."
      });
      var i = [],
          r = l.data.nearySeller;
      a.httpRequest("/Seller/sellerList", {
        longitude: e.globalData.longitude,
        latitude: e.globalData.latitude,
        isList: !0,
        page_no: t.page,
        page_size: t.page_size
      }, function (e) {
        1 == e.code && (l.setData({
          total: e.data.total
        }), t.page > 1 ? (i = e.data.list, l.setData({
          nearySeller: r.concat(i)
        })) : l.setData({
          nearySeller: e.data.list
        })), wx2my.hideLoading();
      }, function () {
        wx2my.hideLoading();
      });
    }
  });
});

require("pages/searchNearby/searchNearby.js");

__wxRoute = 'pages/returnSuccess/returnSuccess';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/returnSuccess/returnSuccess.js';
define("pages/returnSuccess/returnSuccess.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  getApp(), require("../../util/util.js");
  Page({
    data: {},
    onLoad: function () {}
  });
});

require("pages/returnSuccess/returnSuccess.js");

__wxRoute = 'pages/refundsDeposit/refundsDeposit';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/refundsDeposit/refundsDeposit.js';
define("pages/refundsDeposit/refundsDeposit.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  getApp();

  var e = require("../../util/util.js"),
      t = null,
      a = !0;

  Page({
    data: {
      info: {},
      checkNum: 0,
      isPlay: !0,
      isClick: !0,
      swiperImg: [],
      interval: 5e3,
      agreeChecked: !0,
      agreement: !1,
      freezeFailBtn: !1,
      version: 100,
      order_no: ""
    },
    onLoad: function (e) {
      this.getSwiperImg(), (t = my.createInnerAudioContext()).src = "/static/mp3/lease.mp3", this.setData({
        info: JSON.parse(e.data)
      });
    },
    onShow: function () {
      a = this.data.info.wechat_credit, a = "true" == a, this.data.order_no && this.checkStatus(this.data.order_no);

      try {
        var e = wx2my.getSystemInfoSync().version.replace(/\./g, "");
        e = e.substr(0, 1), this.setData({
          version: parseInt(e)
        });
      } catch (e) {}
    },
    startFreeLease: function () {
      var a = this;
      a.data.isClick && (console.log(a.data.version), a.data.version >= 7 ? (wx2my.showLoading({
        title: "请稍后...",
        mask: !0
      }), a.setData({
        isClick: !1,
        isPlay: !0
      }), setTimeout(function () {
        a.data.isPlay && t.play();
      }, 1500), e.httpRequest("/lease/deviceLease", {
        device_code: a.data.info.device_code,
        is_credit: !0
      }, function (e) {
        switch (e.code) {
          case 1:
            setTimeout(function () {
              a.setData({
                order_no: "",
                isClick: !0
              }), wx2my.hideLoading(), wx2my.navigateTo({
                url: "../onLoan/onLoan?data=" + JSON.stringify(e.data)
              });
            }, 1e3);
            break;

          case 3:
            a.setData({
              isPlay: !1
            }), a.freezePay();
            break;

          default:
            a.setData({
              isClick: !0,
              isPlay: !1
            }), wx2my.hideLoading();
        }
      }, function () {
        a.setData({
          isClick: !0,
          isPlay: !1
        }), wx2my.hideLoading();
      })) : wx2my.showModal({
        title: "提示",
        content: "支付宝版本过低，不支持免押租借，如需使用免押请升级最新版本，即将为您切换为押金租借",
        success: function (e) {
          e.confirm && (a.setData({
            freezeFailBtn: !0
          }), a.startLease());
        }
      }));
    },
    freezePay: function () {
      var t = this;
      e.httpRequest("/payment/freeze", {
        device_code: t.data.info.device_code,
        pay_type: "alipay"
      }, function (e) {
        1 == e.code && (t.setData({
          order_no: e.data.order_no,
          isClick: !0
        }), my.openBusinessView && my.openBusinessView({
          businessType: "wxpayScoreUse",
          extraData: {
            mch_id: e.data.params.mch_id,
            package: e.data.params.package,
            timestamp: e.data.params.timestamp,
            nonce_str: e.data.params.nonce_str,
            sign_type: e.data.params.sign_type,
            sign: e.data.params.sign
          },
          envVersion: "release",
          success: function (e) {},
          fail: function (e) {
            wx2my.hideLoading();
          }
        }));
      }, function () {
        t.setData({
          isClick: !0
        }), wx2my.hideLoading();
      });
    },
    startLease: function () {
      var a = this;
      a.data.isClick && (wx2my.showLoading({
        title: "请稍后...",
        mask: !0
      }), a.setData({
        isClick: !1,
        isPlay: !0,
        order_no: ""
      }), setTimeout(function () {
        a.data.isPlay && t.play();
      }, 1500), e.httpRequest("/lease/deviceLease", {
        device_code: a.data.info.device_code,
        is_credit: !1
      }, function (t) {
        switch (t.code) {
          case 1:
            setTimeout(function () {
              a.setData({
                isClick: !0,
                order_no: ""
              }), wx2my.hideLoading(), wx2my.navigateTo({
                url: "../onLoan/onLoan?data=" + JSON.stringify(t.data)
              });
            }, 1e3);
            break;

          case 3:
            a.setData({
              isPlay: !1
            }), e.alipayPayment(t.data.amount, 1, function (e) {
              a.setData({
                isClick: !0
              }), a.checkStatus(e);
            }, function () {
              "true" == a.data.info.wechat_credit ? a.setData({
                isClick: !0,
                freezeFailBtn: !1
              }) : a.setData({
                isClick: !0
              });
            });
            break;

          default:
            a.setData({
              isClick: !0,
              isPlay: !1
            }), wx2my.hideLoading();
        }
      }, function () {
        a.setData({
          isClick: !0,
          isPlay: !1
        }), wx2my.hideLoading();
      }));
    },
    checkStatus: function (t) {
      var i = this,
          s = i.data.checkNum;
      s++, i.setData({
        checkNum: s
      }), i.data.checkNum < 10 ? e.httpRequest("/payment/orderStatus", {
        order_no: t,
        is_credit: a
      }, function (e) {
        1 == e.data.status ? (wx2my.hideLoading(), i.data.freezeFailBtn ? i.startLease() : "true" == i.data.info.wechat_credit ? i.startFreeLease() : i.startLease()) : 2 == e.data.status ? wx2my.showModal({
          title: "提示",
          content: e.msg,
          cancelText: "否",
          confirmText: "是",
          success: function (e) {
            wx2my.hideLoading(), e.confirm && (a = !1, i.setData({
              freezeFailBtn: !0
            }), i.startLease());
          }
        }) : setTimeout(function () {
          i.checkStatus(t);
        }, 1500);
      }, function () {
        wx2my.hideLoading();
      }) : (wx2my.showToast({
        title: "订单异常,请联系客服",
        duration: 2e3
      }), wx2my.hideLoading());
    },
    getSwiperImg: function () {
      var t = this;
      e.httpRequest("/index/ad", {}, function (e) {
        1 == e.code ? t.setData({
          swiperImg: e.data.list,
          interval: 1e3 * e.data.time
        }) : wx2my.showToast({
          title: e.info,
          icon: "none"
        });
      });
    },
    checkboxChange: function (e) {
      e.detail.value.length > 0 ? this.setData({
        isClick: !0
      }) : (this.setData({
        isClick: !1
      }), wx2my.showToast({
        title: "请同意委托扣款授权书，否则无法租借",
        icon: "none"
      }));
    },
    openAgree: function () {
      this.setData({
        agreement: !0
      });
    },
    closeAgree: function () {
      this.setData({
        agreement: !1
      });
    }
  });
});

require("pages/refundsDeposit/refundsDeposit.js");

__wxRoute = 'pages/problemDetail/problemDetail';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/problemDetail/problemDetail.js';
define("pages/problemDetail/problemDetail.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  getApp();

  var t = require("../../util/util.js");

  Page({
    data: {
      question: {}
    },
    onLoad: function (t) {
      this.getInfo(t.id);
    },
    getInfo: function (i) {
      var e = this;
      t.httpRequest("/index/faqDetail", {
        id: i
      }, function (t) {
        1 == t.code && (e.setData({
          question: t.data
        }), wx2my.setNavigationBarTitle({
          title: t.data.title
        }));
      });
    }
  });
});

require("pages/problemDetail/problemDetail.js");

__wxRoute = 'pages/onLoan/onLoan';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/onLoan/onLoan.js';
define("pages/onLoan/onLoan.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  getApp(), require("../../util/util.js");
  var e = null;
  Page({
    data: {
      info: {}
    },
    onLoad: function (t) {
      var a = this;
      (e = my.createInnerAudioContext()).src = "/static/mp3/success.mp3", e.play(), a.setData({
        info: JSON.parse(t.data)
      }), setTimeout(function () {
        wx2my.navigateTo({
          url: "../leaseDetail/leaseDetail?order_id=" + a.data.info.order_id
        });
      }, 2e3);
    }
  });
});

require("pages/onLoan/onLoan.js");

__wxRoute = 'pages/myOrder/myOrder';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/myOrder/myOrder.js';
define("pages/myOrder/myOrder.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  getApp();

  var t = require("../../util/util.js"),
      a = {
    page: 1,
    page_size: 10
  };

  Page({
    data: {
      total: 0,
      isClick: !0,
      status: 1,
      list: []
    },
    onLoad: function () {
      a = {
        page: 1,
        page_size: 10
      }, this.getOrderList();
    },
    onReachBottom: function () {
      var t = this;
      t.data.total > t.data.list.length && (a.page++, t.getOrderList());
    },
    getOrderList: function () {
      var e = this,
          i = [],
          s = e.data.list;
      t.httpRequest("/order/orderList", {
        page: a.page,
        page_size: a.page_size
      }, function (t) {
        1 == t.code && (e.setData({
          total: t.data.total
        }), a.page > 1 ? (i = t.data.list, e.setData({
          list: s.concat(i)
        })) : e.setData({
          list: t.data.list
        }));
      });
    },
    goDetail: function (a) {
      var e = this,
          i = a.currentTarget.dataset.id;
      e.data.isClick && (e.setData({
        isClick: !1
      }), t.httpRequest("/order/getStatus", {
        order_id: i
      }, function (t) {
        if (1 == t.code) if (e.setData({
          isClick: !0
        }), 1 == t.data.type) switch (t.data.status) {
          case 1:
            wx2my.navigateTo({
              url: "../leaseDetail/leaseDetail?order_id=" + t.data.order_id
            });
            break;

          case 2:
            wx2my.navigateTo({
              url: "../viewDetails/viewDetails?order_id=" + t.data.order_id + "&type=2"
            });
            break;

          case 3:
            wx2my.navigateTo({
              url: "../viewDetails/viewDetails?order_id=" + t.data.order_id + "&type=3"
            });
            break;

          case 4:
            wx2my.navigateTo({
              url: "../leaseDetail/leaseDetail?order_id=" + t.data.order_id
            });
        } else if (2 == t.data.type) switch (t.data.status) {
          case 1:
            wx2my.navigateTo({
              url: "../successfulPayment/successfulPayment?order_id=" + t.data.order_id
            });
            break;

          case 2:
            wx2my.navigateTo({
              url: "../viewDetails/viewDetails?order_id=" + t.data.order_id + "&type=2"
            });
            break;

          case 3:
            wx2my.navigateTo({
              url: "../viewDetails/viewDetails?order_id=" + t.data.order_id + "&type=3"
            });
        }
      }, function () {
        e.setData({
          isClick: !0
        });
      }));
    },
    payStatus: function (e) {
      var i = this,
          s = e.currentTarget.dataset.id;
      t.httpRequest("/order/payStatus", {
        order_id: s
      }, function (t) {
        wx2my.showToast({
          title: t.msg,
          duration: 5e3
        }), 1 == t.data.status && (a = {
          page: 1,
          page_size: 10
        }, i.getOrderList());
      });
    }
  });
});

require("pages/myOrder/myOrder.js");

__wxRoute = 'pages/leaseDetail/leaseDetail';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/leaseDetail/leaseDetail.js';
define("pages/leaseDetail/leaseDetail.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var e = getApp(),
      t = require("../../util/util.js"),
      a = null,
      n = null;

  Page({
    data: {
      nearySeller: [],
      time: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      order_id: "",
      overtime: !1,
      amount: 0
    },
    onLoad: function (e) {
      this.getNearySellerInfo(), this.getDetail(e.order_id), this.isReturnSuccess(e.order_id);

      try {
        wx2my.setStorageSync("hui", !0);
      } catch (e) {}
    },
    onShow: function () {
      try {
        var e = wx2my.getStorageSync("hui");
        this.data.order_id && e && (this.getDetail(this.data.order_id), this.isReturnSuccess(this.data.order_id));
      } catch (e) {}
    },
    onHide: function () {
      clearInterval(a), clearInterval(n);
    },
    onUnload: function () {
      clearInterval(a), clearInterval(n);
      var e = getCurrentPages();
      "pages/onLoan/onLoan" == e[e.length - 2].route && wx2my.navigateBack({
        delta: 2
      });
    },
    goSeller: function (e) {
      var t = e.currentTarget.dataset.id;
      wx2my.navigateTo({
        url: "../seller/seller?id=" + t
      });
    },
    getNearySellerInfo: function () {
      var a = this;
      t.httpRequest("/Seller/sellerList", {
        longitude: e.globalData.longitude,
        latitude: e.globalData.latitude
      }, function (e) {
        1 == e.code && a.setData({
          nearySeller: e.data.list
        });
      });
    },
    getDetail: function (e) {
      var n = this;
      t.httpRequest("/order/orderDetail", {
        order_id: e
      }, function (e) {
        if (1 == e.code) {
          n.setData({
            order_id: e.data.order_id,
            amount: e.data.amount,
            time: e.data.time,
            overtime: e.data.overtime
          });
          var t = e.data.time;
          a = setInterval(function () {
            t++, n.countDown(t);
          }, 1e3);
        }
      });
    },
    deviceEnd: function () {
      var e = this;
      wx2my.showModal({
        title: "温馨提示",
        content: "结束超时订单，押金不退",
        success: function (a) {
          a.confirm && t.httpRequest("/order/deviceEnd", {
            order_id: e.data.order_id
          }, function (e) {
            wx2my.showToast({
              title: e.msg,
              icon: "none"
            }), 1 == e.code && setTimeout(function () {
              wx2my.redirectTo({
                url: "../indexAlipay/indexAlipay"
              });
            }, 1500);
          });
        }
      });
    },
    isReturnSuccess: function (e) {
      function a() {
        t.httpRequest("/Order/returnDetail", {
          order_id: e
        }, function (t) {
          1 == t.code && (clearInterval(n), setTimeout(function () {
            wx2my.navigateTo({
              url: "../viewDetails/viewDetails?order_id=" + e
            });
          }, 3e3));
        });
      }

      n = setInterval(function () {
        a();
      }, 3e3);
    },
    countDown: function (e) {
      var t = this,
          a = parseInt(e / 60 / 60 / 24 % 30),
          n = parseInt(e / 60 / 60 % 24),
          r = parseInt(e / 60 % 60),
          i = parseInt(e % 60);
      a < 10 && (a = "0" + a), n < 10 && (n = "0" + n), r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), t.setData({
        day: a,
        hour: n,
        minute: r,
        second: i
      });
    }
  });
});

require("pages/leaseDetail/leaseDetail.js");

__wxRoute = 'pages/commonProblem/commonProblem';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/commonProblem/commonProblem.js';
define("pages/commonProblem/commonProblem.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  getApp();

  var t = require("../../util/util.js");

  Page({
    data: {
      question: [],
      tel: ""
    },
    onLoad: function () {
      this.getInfo();
    },
    makePhoneCall: function (t) {
      var e = t.currentTarget.dataset.tel;
      wx2my.makePhoneCall({
        phoneNumber: e.toString()
      });
    },
    getInfo: function () {
      var e = this;
      t.httpRequest("/index/faqList", {}, function (t) {
        1 == t.code && e.setData({
          question: t.data.list,
          tel: t.data.tel
        });
      });
    },
    goDetail: function (t) {
      var e = t.currentTarget.dataset.id;
      wx2my.navigateTo({
        url: "../problemDetail/problemDetail?id=" + e
      });
    }
  });
});

require("pages/commonProblem/commonProblem.js");

__wxRoute = 'pages/chargingTime/chargingTime';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/chargingTime/chargingTime.js';
define("pages/chargingTime/chargingTime.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  getApp();

  var t = require("../../util/util.js");

  Page({
    data: {
      info: {},
      leaseTime: 0,
      checkNum: 0,
      isShowTip: !1,
      isClick: !0,
      swiperImg: [],
      interval: 5e3
    },
    onLoad: function (t) {
      var e = this;
      this.getSwiperImg(), e.setData({
        info: JSON.parse(t.data)
      });
    },
    changeTime: function (t) {
      var e = this,
          a = t.currentTarget.dataset.time;
      e.setData({
        leaseTime: a
      });
    },
    goPayment: function () {
      var e = this;
      e.data.isClick && (wx2my.showLoading({
        title: "请稍后...",
        mask: !0
      }), e.setData({
        isClick: !1
      }), e.data.leaseTime ? t.httpRequest("/lease/wiredLease", {
        qrcode: e.data.info.qecode,
        time: e.data.leaseTime
      }, function (a) {
        switch (a.code) {
          case 1:
            e.setData({
              isClick: !0
            }), wx2my.hideLoading(), wx2my.navigateTo({
              url: "../successfulPayment/successfulPayment?order_id=" + a.data.order_id
            });
            break;

          case 3:
            t.alipayPayment(a.data.amount, 2, function (t) {
              e.setData({
                isClick: !0
              }), e.checkStatus(t);
            }, function () {
              e.setData({
                isClick: !0
              }), wx2my.hideLoading();
            });
            break;

          default:
            e.setData({
              isClick: !0
            }), wx2my.hideLoading();
        }
      }, function () {
        e.setData({
          isClick: !0
        }), wx2my.hideLoading();
      }) : (e.setData({
        isClick: !0
      }), wx2my.showToast({
        title: "请选择租借时长",
        icon: "none"
      })));
    },
    checkStatus: function (e) {
      var a = this,
          i = a.data.checkNum;
      i++, a.setData({
        checkNum: i
      }), a.data.checkNum < 10 ? t.httpRequest("/payment/orderStatus", {
        order_no: e
      }, function (t) {
        1 == t.data.status ? (wx2my.hideLoading(), a.goPayment()) : setTimeout(function () {
          a.checkStatus(e);
        }, 1500);
      }, function () {
        wx2my.hideLoading();
      }) : (wx2my.showToast({
        title: "[03]订单异常,请联系客服",
        duration: 2e3
      }), wx2my.hideLoading());
    },
    openTips: function () {
      this.setData({
        isShowTip: !0
      });
    },
    closeTips: function () {
      this.setData({
        isShowTip: !1
      });
    },
    getSwiperImg: function () {
      var e = this;
      t.httpRequest("/index/ad", {}, function (t) {
        1 == t.code ? e.setData({
          swiperImg: t.data.list,
          interval: 1e3 * t.data.time
        }) : wx2my.showToast({
          title: t.info,
          icon: "none"
        });
      });
    }
  });
});

require("pages/chargingTime/chargingTime.js");

__wxRoute = 'pages/billRecord/billRecord';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/billRecord/billRecord.js';
define("pages/billRecord/billRecord.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  getApp();

  var t = require("../../util/util.js"),
      a = {
    page: 1,
    page_size: 10
  };

  Page({
    data: {
      total: 0,
      list: []
    },
    onLoad: function () {
      a = {
        page: 1,
        page_size: 10
      }, this.getBillList();
    },
    getBillList: function () {
      var i = this;
      wx2my.showLoading({
        title: "加载中..."
      });
      var e = [],
          s = i.data.list;
      t.httpRequest("/payment/log", {
        page: a.page,
        page_size: a.page_size
      }, function (t) {
        1 == t.code && (i.setData({
          total: t.data.total
        }), a.page > 1 ? (e = t.data.list, i.setData({
          list: s.concat(e)
        })) : i.setData({
          list: t.data.list
        })), wx2my.hideLoading();
      }, function () {
        wx2my.hideLoading();
      });
    },
    onReachBottom: function () {
      var t = this;
      t.data.total > t.data.list.length && (a.page++, t.getBillList());
    }
  });
});

require("pages/billRecord/billRecord.js");

__wxRoute = 'pages/aboutUs/aboutUs';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/aboutUs/aboutUs.js';
define("pages/aboutUs/aboutUs.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  getApp();

  var t = require("../../util/util.js");

  Page({
    data: {
      data: {}
    },
    onLoad: function () {
      this.getInfo();
    },
    getInfo: function () {
      var a = this;
      t.httpRequest("/index/about", {}, function (t) {
        1 == t.code && a.setData({
          data: t.data
        });
      });
    }
  });
});

require("pages/aboutUs/aboutUs.js");

__wxRoute = 'pages/appeal/appeal';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/appeal/appeal.js';
define("pages/appeal/appeal.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  getApp();

  var e = require("../../util/util.js");

  Page({
    data: {
      qrcode: ""
    },
    _scanCode: function () {
      var t = this;
      wx2my.scanCode({
        scanType: ["qrCode"],
        onlyFromCamera: !0,
        success: function (o) {
          if (o.result) {
            var r = o.result,
                a = e.returnQrcode(r);
            a.oid == e.config.oid && t.setData({
              qrcode: a.qrcode
            });
          }
        }
      });
    },
    returnCheck: function () {
      var t = this;
      t.data.qrcode && (wx2my.showLoading({
        title: "请稍后..."
      }), e.httpRequest("/order/returnCheck", {
        device_code: t.data.qrcode
      }, function (e) {
        wx2my.hideLoading(), wx2my.showToast({
          title: e.msg,
          icon: "none"
        }), 1 == e.code && setTimeout(function () {
          wx2my.navigateBack({
            delta: 1
          });
        }, 1800);
      }));
    }
  });
});

require("pages/appeal/appeal.js");

__wxRoute = 'pages/user/user';
__wxRouteBegin = true;
__wxAppCurrentFile__ = 'pages/user/user.js';
define("pages/user/user.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
  "use strict";

  var t = getApp(),
      e = require("../../util/util.js"),
      n = 1;

  Page({
    data: {
      isClick: !0,
      userInfo: {},
      isshowbtn: !1
    },
    onLoad: function (t) {
      n = 1;
      var i = this;
      t.froms ? (this.setData({
        isshowbtn: !0
      }), this.getAlipayOppenid(function () {
        e.userAuthor(function (t) {
          i.setData({
            userInfo: t.data
          });
        });
      })) : this.getUserInfo();
    },
    getAlipayOppenid: function (i) {
      var o = this;
      my.getAuthCode({
        scopes: 'auth_user', // 主动授权（弹框）：auth_user，静默授权（不弹框）：auth_base
        success: (res) => {
          if (res.authCode) {
            res.authCode && t.httpRequest("/Auth/alipayOpendId", {
              code: res.authCode
            }, function (t) {
              if (t.data.openid) e.globalData.openID = t.data.openid, i();else {
                if (!(a < 3)) return void wx2my.showModal({
                  title: "温馨提示",
                  content: "尊敬的用户,您的openID未获取到,请您退出程序并再次进入重新获取"
                });
                wx2my.showToast({
                  title: "openID获取失败",
                  icon: "none"
                }), o.getAlipayOppenid(i), a++;
              }
            });
          }
        },
      });
    },
    getUserInfo: function () {
      var t = this;
      e.httpRequest("/user/getInfo", {}, function (e) {
        1 == e.code && t.setData({
          userInfo: e.data
        });
      });
    },
    returnDeposit: function () {
      var t = this;
      t.data.isClick && (t.setData({
        isClick: !1
      }), t.data.userInfo.balance <= 0 ? (wx2my.showToast({
        title: "当前账户没有余额",
        icon: "none"
      }), t.setData({
        isClick: !0
      })) : wx2my.showModal({
        title: "退款提醒",
        content: "亲,是否退款",
        confirmText: "确认",
        cancelText: "取消",
        success: function (n) {
          n.confirm && e.httpRequest("/payment/refund", {}, function (e) {
            1 == e.code && (t.setData({
              isClick: !0
            }), wx2my.showToast({
              title: "已退款" + e.data.amount + "元",
              icon: "none"
            }), t.getUserInfo());
          }, function () {
            t.setData({
              isClick: !0
            });
          });
        }
      }));
    },
    returnFreeze: function () {
      var t = this;
      t.data.isClick && (t.setData({
        isClick: !1
      }), t.data.userInfo.deposit <= 0 ? (wx2my.showToast({
        title: "当前账户没有资金",
        icon: "none"
      }), t.setData({
        isClick: !0
      })) : wx2my.showModal({
        title: "解冻提醒",
        content: "亲,是否解冻资金",
        success: function (n) {
          n.confirm && e.httpRequest("/payment/unfreeze", {}, function (e) {
            t.setData({
              isClick: !0
            }), wx2my.showToast({
              title: e.msg,
              icon: "none"
            });
          }, function () {
            t.setData({
              isClick: !0
            });
          });
        }
      }));
    }
  });
});

require("pages/user/user.js");