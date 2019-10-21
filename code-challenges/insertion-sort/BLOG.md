# Blog Notes: Insertion Sort
Insertion sort is a simple sorting algorithm that builds a sorted list by inserting one item at a time. While an insertion sort is not the most efficient for large data sets it does have some advantages, which are explained in detail below.

## Learning Objectives
* What is an insertion sort?
* What are the advantages of an insertion sort?
* How can an insertion sort be implemented?

## Information Flow
### What is an insertion sort?
An insertion sort can best be understood in terms of sorting playing cards. Imagine pulling a new card from the deck one at a time and then inserting it in you hand in the correct order. As you insert cards any lower numbered cards will stay to the left of where the new card is inserted. And all the higher numbered cards will slide over to make room for the new card.

### What are the advantages?
* Simple implementation
* Efficient for very small data sets, much like other quadratic sorting algorithms
* More efficient in practice than most other simple algorithms such as selection sort or bubble sort
* Adaptive, i.e., efficient for data sets that are already substantially sorted
* Stable; i.e., does not change the relative order of elements with equal keys
* In-place; i.e., only requires a constant amount O(1) of additional memory space
* Online; i.e., can sort a list as it receives it

## Diagram
![Diagram](https://he-s3.s3.amazonaws.com/media/uploads/46bfac9.png)

## Algorithm
This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. For example, the lower part of an array is maintained to be sorted. An element which is to be inserted in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, insertion sort.

The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array.

## Pseudocode

```
InsertionSort(int[] arr) {
  
  FOR i = 1 to arr.length {
  
    int j <-- i - 1
    int temp <-- arr[i]
    
    WHILE j >= 0 AND temp < arr[j] {
      arr[j + 1] <-- arr[j]
      j <-- j - 1
    }
      
    arr[j + 1] <-- temp
  }
}
```

## Readings and References
### Watch
[Insertion Sort Explained In 2 Minutes](https://www.youtube.com/watch?v=pmDnM9gUxNc)

### Read
[Khan Academy - Insertion Sort](https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort)



