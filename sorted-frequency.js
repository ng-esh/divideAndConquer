function sortedFrequency(arr, num) {
    const firstIndex = findFirstIndex(arr, num);
    if (firstIndex === -1) return -1; // If the number is not found

    const lastIndex = findLastIndex(arr, num);
    return lastIndex - firstIndex + 1; // Calculate the frequency
}

function findFirstIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) {
            result = mid; // Record the index
            right = mid - 1; // Search to the left for the first occurrence
        } else if (arr[mid] < num) {
            left = mid + 1; // Search to the right
        } else {
            right = mid - 1; // Search to the left
        }
    }
    return result; // Return the first occurrence index or -1
}

function findLastIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) {
            result = mid; // Record the index
            left = mid + 1; // Search to the right for the last occurrence
        } else if (arr[mid] < num) {
            left = mid + 1; // Search to the right
        } else {
            right = mid - 1; // Search to the left
        }
    }
    return result; // Return the last occurrence index or -1
}

module.exports = sortedFrequency
