# Blog Notes: Merge Sort
Merge sort is an efficient, general purpose, comparison based sorting algorithm.

## Learning Objectives
* What are the advantages of an merge sort?
* What are the disadvantages?

## Information Flow
### What are the advantages?
* Quick for larger lists since it does not have to cycle through the list several times
* Consistent Run Times

### What are the disadvantages?
* Relatively slow for small lists
* Will continue through the whole list even if already sorted
* Uses additional memory space to store the split lists

## Diagram
![Diagram](https://www.geeksforgeeks.org/wp-content/uploads/Merge-Sort-Tutorial.png)

## Algorithm
The merge sort works by continually dividing the array into halves until it is split into single elements. Each element is then sorted and merged back together into larger and larger chunks until the whole list had been merged back together.

## Pseudocode

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

```

## Readings and References
### Watch
[Merge Sort in 3 Minutes](https://www.youtube.com/watch?v=4VqmGXwpLqc)

### Read
[Medium - Merge Sort Algorithm](https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060)  
[Geeks for Geeks - Quick Sort vs Merge Sort](https://www.geeksforgeeks.org/quick-sort-vs-merge-sort/)  
[Wikipedia - Merge Sort](https://en.wikipedia.org/wiki/Merge_sort#Top-down_implementation_using_lists)  


