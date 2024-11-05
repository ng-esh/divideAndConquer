function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    // If the array is not rotated
    if (arr[left] < arr[right]) {
        return 0; // No rotations
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const next = (mid + 1) % arr.length; // Wrap around to the start
        const prev = (mid - 1 + arr.length) % arr.length; // Wrap around to the end

        // Check if mid is the minimum element
        if (arr[mid] < arr[next] && arr[mid] < arr[prev]) {
            return mid; // Found the index of the smallest element
        }

        // Decide which side to continue searching
        if (arr[mid] >= arr[left]) {
            // Left side is sorted, so search the right side
            left = mid + 1;
        } else {
            // Right side is sorted, so search the left side
            right = mid - 1;
        }
    }

    return 0; // Fallback (should not reach here if input is valid)
}

module.exports = findRotationCount
