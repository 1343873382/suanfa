let insertSort = (arr) => {
    let lengths = arr.length;
    if (!Array.isArray(arr) || lengths <= 1) return;
    for (let i = 1; i < lengths; i++) {
        let temp = arr[i];
        let j = i;
        while (j - 1 >= 0 && temp < arr[j - 1]) {

            arr[j] = arr[j - 1]

            j--;
        }
        arr[j] = temp
    }
    return arr
}
let arr1 = [23, 56, 24, 89, 56, 45, 78, 55]
insertSort(arr1)