function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    // Binary search to find the first occurrence of 0
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // If we found a 0, check if it's the first occurrence
        if (arr[mid] === 0) {
            // Check if it's the first 0
            if (mid === 0 || arr[mid - 1] === 1) {
                return arr.length - mid; // Return count of zeroes
            } else {
                right = mid - 1; // Look left
            }
        } else {
            left = mid + 1; // Look right
        }
    }

    return 0;
}

module.exports = countZeroes