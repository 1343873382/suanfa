let chooseSort = (arr) => {
    let lengths = arr.length;
    if (!Array.isArray(array) || length <= 1) return;
    for (let i = 0; i < lengths - 1; i++) {
        let min = i;
        for (let j = i; j < lengths; j++) {
            if (arr[j] < arr[min]) {
                min = j

            }

        }
        [arr[min], arr[i]] = [arr[i], arr[min]]
    }
    return arr
}
let arr1 = [23, 56, 24, 89, 56, 45, 78, 55];
chooseSort(arr1)