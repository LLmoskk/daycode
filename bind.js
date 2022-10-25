Function.prototype.myBind = function (obj, ...args) {
    return (...rest) => this.call(obj,...args,...rest);
}

function fn(a,b){
    console.log('a',a);
    console.log('b',b);
    console.log('this',this);

    return 'hello';
}

// const res = fn.bind({x:10},10,20)
const res = fn.myBind({x:10},10,20)
res();