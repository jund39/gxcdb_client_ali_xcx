const wx2my = require('../wx2my');
//const Behavior = require('../Behavior');
const Behavior = '';
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