Function.prototype.myCall = function(context) {
    let context = context || window
    context.fn = this
    let args = [...arguments].slice(1)
    let result = context.fn(args)
    delete context.fn
    return result
}
Function.prototype.myApply = function(context) {
    let context = context || window
    context.fn = this
    let result
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        resulet = contxet.fn
    }
    delete context.fn
    return result

}
Function.prototype.myBind = function(context) {
    let that = this
    let args = [...arguments].slice(1)
    return function() {
        return that.apply(context, args.concat([...arguments]))


    }
}