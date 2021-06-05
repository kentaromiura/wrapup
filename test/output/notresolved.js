(function (modules, global) {
    var cache = {}, require = function (id) {
        var module = cache[id];
        if (!module) {
            module = cache[id] = {};
            var exports = module.exports = {};
            modules[id].call(exports, require, module, exports, global);
        }
        return module.exports;
    };
    require('0');
}({
    '0': function (require, module, exports, global) {
        'use strict';
        null;
        null;
    }
}, this));