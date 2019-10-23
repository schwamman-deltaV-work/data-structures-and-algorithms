# Blog Notes: Quick Sort
Quicksort, like merge sort, is an divide and conquer approach to sorting. However, unlike merge sort a quicksort divides the data around a random pivot element. Smaller elements are moved to the left side of the pivot element and the larger ones stay to the right.

## Learning Objectives
* What are the advantages of an quick sort?
* What are the disadvantages?

## Information Flow
### What are the advantages?
* On average it is significantly more efficent than other sort methods, can handle large data sets
* Sorting is done in place so no additional storage is needed

### What are the disadvantages?
* Performance can vary, at worst it will still perform similarly to a bubble or insertion sort

## Diagram
![Diagram](https://i2.wp.com/www.techiedelight.com/wp-content/uploads/Quicksort.png?zoom=1.5&w=1100&ssl=1)

## Algorithm
The merge sort works by continually dividing the data set into smaller chunks around a pivot element. The other elements are compared to the value of the pivot element and if smaller they are moved to the left of the pivot element. All the larger elements stay to the right. The data set will continually be split into smaller and smaller chunks until all the elements have been sorted.

## Pseudocode

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

## Readings and References
### Watch
[Quick sort in 4 minutes](https://www.youtube.com/watch?v=Hoixgm4-P4M)

### Read
[Techie Delight - Quicksort](https://www.techiedelight.com/quicksort/)  
[Hacker Earth - Quick Sort](https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/tutorial/)  

