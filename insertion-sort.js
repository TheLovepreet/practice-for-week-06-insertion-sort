// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  let newArr = arr.concat();
  let sorted = [];
  while(newArr.length > 0){
    console.log(sorted.join(','));
    let val = newArr.pop();
    if(sorted.length == 0){
      sorted.push(val);
    }
    else{
      let i = sorted.length-1;
      while(sorted[i] > val){
        i--;
      }
      if(i == -1){
        sorted.unshift(val);
      }
      else{
        i++;
        let temp = sorted[sorted.length-1];
        for(let j = sorted.length-1; j >= i; j--){
          sorted[j] = sorted[j-1];
        }
        sorted.push(temp);
        sorted[i] = val;
      }
      }
    }
    return sorted;
    }

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  for(let i = 0; i <  arr.length; i++){
    let current = arr[i];
    let j = i-1;
    while(j > -1 && current < arr[j]){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = current;
    console.log(arr.join(','));
  }
  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];