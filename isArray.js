let arr = [1, 2, 3, 4, 5]
console.log('arr', Array.isArray(arr))

Array.myisArray = (arg) => {
    return ({}).toString.call(arg) === '[object Array]'
}
console.log('myarr', Array.myisArray(arr))