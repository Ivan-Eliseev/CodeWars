Merge two sorted arrays into one

unction mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
Examples

arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];
mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


_____________________________________________________________________________________________________________________________________________________________________________________


function mergeArrays(arr1, arr2) {
  if (!arr1 && !arr2) return [];
  
  const newArray = arr1.concat(arr2);
  
  newArray.sort((a, b) => a - b);
  
  return [... new Set(newArray)] ;
}
