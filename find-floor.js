function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    // If x is less than the smallest element
    if (x < arr[left]) return -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // If mid is the floor of x
        if (arr[mid] === x) {
            return arr[mid]; // x is found, return it as the floor
        }

        // If arr[mid] is less than x, look right
        if (arr[mid] < x) {
            left = mid + 1;
        } else {
            // If arr[mid] is greater than x, look left
            right = mid - 1;
        }
    }

    // After the loop, right will be at the floor value
    return arr[right]; // If right is out of bounds, the floor does not exist
}

module.exports = findFloor
