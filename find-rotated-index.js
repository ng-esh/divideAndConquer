function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if we've found the number
        if (arr[mid] === num) {
            return mid; // Return the index if found
        }

        // Determine which side is sorted
        if (arr[left] <= arr[mid]) { // Left side is sorted
            if (num >= arr[left] && num < arr[mid]) {
                right = mid - 1; // Search in the left sorted side
            } else {
                left = mid + 1; // Search in the right side
            }
        } else { // Right side is sorted
            if (num > arr[mid] && num <= arr[right]) {
                left = mid + 1; // Search in the right sorted side
            } else {
                right = mid - 1; // Search in the left side
            }
        }
    }

    return -1; // If the number is not found
}

module.exports = findRotatedIndex
