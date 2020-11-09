let arr1 = [1, 2, 2, 2, 2, 2, 4];
let arr2 = [2, 2, 2, 2, 2, 4];
let arr3 = [1, 3, 5, 7, 1];
let arr4 = [1, 2, 3, 5, 7];
let arrOfObj = [
    {title: "inspector", first: 'Elie', last: 'Schoppik'},
    {title: "inspector", first: 'Tim', last: 'Garcia', isCatOwner: true},
    {title: "inspector", first: 'Matt', last: 'Lane'},
    {title: "inspector", first: 'Colt', last: 'Steele', isCatOwner: true},
]

function havesOddNumbers(arr){
    return arr.some(function(val){
        return val % 2 !== 0
    })
}

function havesAZero(num){
    let arr = num.toString().split('')
    return arr.some(function(val){
        return Number(val) === 0
    })
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val % 2 !== 0
    })
}

function havesNoDuplicates(arr){
    return arr.every(function(val){
        console.log(arr.indexOf(val) + ' ' + arr.lastIndexOf(val))
        return arr.indexOf(val) === arr.lastIndexOf(val)
    })
}

function hasCertainKey(arr, str){
    return arr.every(function(val){
        return val[str] !== undefined
    })
}

function hasCertenValue(arr, key, value){
    return arr.every(function(val){
        return val[key] === value;
    })
}