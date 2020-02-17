

exports.cToF = function (c) {
    return (c * 9 / 5 + 32).toFixed(2)
}

exports.fToC = function (f) {
    return ((f - 32) / 9 * 5).toFixed(2)
}
