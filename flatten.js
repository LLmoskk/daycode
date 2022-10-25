let arr = [1, 2, 3, [4, 5, 6]]
console.log('arr', arr.flat(1))

// Array.prototype.concat 既可以连接数组又可以连接单项
const flatten = list => list.reduce((a, b) => a.concat(b), [])
console.log('flatten', flatten([1, 2, 3, [4, 5, 6]]));

// 使用展开运算符
const flatten1 = list => [].concat(...list)
console.log('flatten1', flatten1([1, 2, 3, [4, 5, 6]]));

// 深层级打平 [1,2,3,[4,5,6,[7,8]]]
const flattendep = list => list.reduce((a, b) => a.concat(Array.isArray(b) ? flattendep(b) : b),[])
console.log('flatten2', flattendep([1,2,3,[4,5,6,[7,8]]]))

const flattendep1 = (list,depth = 1) => {
    if(depth === 0 ) return list;
    return list.reduce((a,b)=> a.concat(Array.isArray(b) ? flattendep1(b,depth - 1) : b), [])
}