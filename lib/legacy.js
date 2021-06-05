var hasOwnProperty = Object.hasOwnProperty
var hasOwn = function (self, key) {
    return hasOwnProperty.call(self, key)
}
var forIn = function (self, method, context) {
    for (var key in self) if (method.call(context, self[key], key, self) === false) break
    return self
}
var forOwn = function (self, method, context) {
    forIn(self, function (value, key) {
        if (hasOwn(self, key)) return method.call(context, value, key, self)
    })
    return self
}
var filter = function (self, method, context) {
    var results = {}
    forIn(self, function (value, key) {
        if (method.call(context, value, key, self)) results[key] = value
    })
    return results
}
var toString = Object.prototype.toString,
    types = /number|object|array|string|function|date|regexp|boolean/

var type = function (object) {
    if (object == null) return "null"
    var string = toString.call(object).slice(8, -1).toLowerCase()
    if (string === "number" && isNaN(object)) return "null"
    if (types.test(string)) return string
    return "object"
}

module.exports = {
    hasOwn: hasOwn,
    forIn: forIn,
    forOwn: forOwn,
    filter: filter,
    type: type
}