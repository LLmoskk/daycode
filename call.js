Function.prototype.myCall = function() {
    // 这一步将arguments转为数组
    const args = Array.from(arguments);
    // 获取this
    const _this = args.shift();
    const self = this;
    // 改变this的指向,利用对象的this指向特性
    _this.fn = self;
    const res = _this.fn(...args);
    delete _this.fn
    return res;
}

Function.prototype.myCall2 = function(){
    const args = [...arguments];
    const _this = args.shift();
    _this.fn = this;
    const res = _this.fn(...args);
    delete _this.fn;
    return res;
}

Function.prototype.myCall3 = function(context,...args){
    if(typeof this !== 'function'){
        throw new TypeError(`${this} is not a function`)
    }
    const new_this = context || window;
    const func = Symbol('func')
    new_this[func] = this
    const res = new_this[func](...args)
    delete new_this[func]
    return res;
}

function fn(a, b) {
    console.log('a',a);
    console.log('b',b);
    console.log('this',this);
    return 'hello';
}

// const res = fn.call({x:10},10,20)
// const res = fn.myCall({x:10},10,20)
// const res = fn.myCall2({x:10},10,20)
const res = fn.myCall3({x:10},10,20)
console.log('res',res);