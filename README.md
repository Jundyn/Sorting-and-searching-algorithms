---
# Insertion Sort in JavaScript

## Overview

Insertion Sort is a simple sorting algorithm that works similarly to how we sort playing cards in our hands. At each step, it takes an element from the unsorted portion of the array and inserts it into the correct position in the sorted portion of the array. The process is repeated until the entire array is sorted.

### Key Concept:
- The algorithm works by iterating through each element of the array and inserting it into the correct position in the already sorted sublist (from index 0 to i-1).
  
## How it Works

1. The algorithm starts by iterating through the array from index 1.
2. For each element `arr[i]`, the algorithm compares it to elements in the sorted portion of the array (`arr[0..i-1]`) and finds the correct position to insert it.
3. It shifts elements greater than `arr[i]` to the right and places `arr[i]` in the correct position.

### Instructions:
- Work only with the first `i-1` elements from the array.
- Pick the element `arr[i]` and insert it into the sorted sequence from `arr[0]` to `arr[i-1]`.

## Code Implementation

```javascript
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
```

## Time and Space Complexity

### Time Complexity:
- **Best Case**: O(n) — When the array is already sorted.
- **Average and Worst Case**: O(n²) — When the array is randomly ordered or in reverse order.

### Space Complexity:
- **O(1)** — Since the sorting is done in place with no additional memory required except for a few temporary variables.

## Example Walkthrough

Consider the array `[12, 11, 13, 5, 6]`:

- **Pass 1**: Compare `11` with `12` → Insert `11` in its correct position: `[11, 12, 13, 5, 6]`
- **Pass 2**: `13` is already in its correct position: `[11, 12, 13, 5, 6]`
- **Pass 3**: Compare `5` with `13`, `12`, and `11` → Insert `5`: `[5, 11, 12, 13, 6]`
- **Pass 4**: Compare `6` with `13`, `12`, and `11` → Insert `6`: `[5, 6, 11, 12, 13]`

After these passes, the array is sorted as `[5, 6, 11, 12, 13]`.

## Usage

1. Clone or download the repository.
2. Open the JavaScript file in your preferred editor.
3. You can test the sorting algorithm by modifying the `arr` variable or passing your own array to the `insertionSort()` function.
4. Run the script in a browser console or Node.js to see the sorted result.

## Conclusion

Insertion Sort is a simple and intuitive sorting algorithm that performs well for small datasets or nearly sorted arrays. However, its quadratic time complexity makes it inefficient for large datasets compared to algorithms like Merge Sort or Quick Sort. 

For educational purposes or when working with small arrays, Insertion Sort is an excellent choice due to its simplicity.

---
