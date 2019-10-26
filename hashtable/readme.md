# Hashtables
 A hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found.

## Challenge
Implement a Hashtable with the following methods:

1. `add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.  
2. `get`: takes in the key and returns the value from the table.  
3. `contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.  
4. `hash`: takes in an arbitrary key and returns an index in the collection.  

## Approach & Efficiency
I utilized a standard array for my hashtable which can contain any number of buckets (to be passed in when creating a new hashtable). Each bucket in the array is a linked list to allow handling of collisions.

For my hashing function I sum the ASCII values of the key, multiply it by the prime number 599, and then use the remainder operator by the bucket size to generate an index in the array.

BigO to get value from the table is O(1) if there aren't any collisions. If there are collisions then O(n) where n is the number of values in that index.

## API
* `add` - adds a key value pair to the array 
* `get` - returns the value for the passed in key, if key isn't found then returns undefined
* `contains` - returns true/false if key is in the array
* `getHash` - returns the hash(index) for a passed in key