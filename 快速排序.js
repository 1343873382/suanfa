let quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    let left = [];
    let right = [];
    let middle = Math.floor(arr.length / 2);
    let middleitem = arr.splice(middle,1)[0]    //let middleitem=arr[middle]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < middleitem) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(middleitem, quickSort(right))
}
let arr1 = [23, 56, 24, 89, 56, 45, 78, 55]
quickSort(arr1)