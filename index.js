function insertionSort(arr) {
    // Iterate through elements from the second to the last element
    for (let i = 1; i < arr.length; i++) {
        // Pick the element to be inserted into the sorted sequence
        let current = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current, one position ahead
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        // Place the current element at its correct position
        arr[j + 1] = current;
    }

    return arr;
}

// Example usage:
let arr = [12, 11, 13, 5, 6];
console.log("Sorted array:", insertionSort(arr));
