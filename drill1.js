//21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

/**
 * 1. Call mergeSort with the provided dataset
 * middle = 8
 * left = [21, 1, 26, 45, 29, 28, 2, 9]
 * right = [16, 49, 39, 27, 43, 34, 46, 40]
 * 
 * first recursive call - 
 * left = mergeSort([21, 1, 26, 45, 29, 28, 2, 9])
 *  right = mergeSort([16, 49, 39, 27, 43, 34, 46, 40])
 * 2. middle = 4
 * left = [21, 1, 26, 45]
 * right = [ 29, 28, 2, 9]
 * second recursive call
 * left = mergeSort([21, 1, 26, 45])
 * right = mergeSort([[ 29, 28, 2, 9]])
 * 
 * 3.  middle = 2
 * left = [21, 1]
 * right = [26, 45]
 * third recursive call
 * left = mergeSort([21, 1])
 *  rigth = mergeSort ([26, 45])
 * 4. middle = 1
 * left = [21]
 * right = [1]
 * forth recursive call 
 * left = mergeSort([21]) 5. array.length <= 1 return [21]
 * fifth recursive
 * right = mergeSort9[1]  6. array.length <= 1 return [1]
 * 
 * 7. merge([21], [1], [21, 1])
 * leftIndex = 0;
 * rightIndex = 0;
 * outputIndex = 0;
 *  while 
 *    else array[0] (21) = 1 array [1, 1] outputIndex = 1 rightIndex = 1
 *    first for loop i = 0
 *    array[1] (1) = 21  [1, 21] outputIndex = 2
 *    return [1, 21]
 *    getting back to step 3 - sixth recursive call- rigth = mergeSort ([26, 45])
 * 
 * 8. middle = 1
 * left = [26]
 * rigth = [45]
 *
 * 7th recursive 
 * left = mergeSort([26]) 9.  array.length <= 1 return [26]
 * 
 * 8th recursive call
 * rigth = mergeSort ([45]) 10.  array.length <= 1 return [45]
 * 
 * 9. merge([26], [45], [26, 45])
 * leftIndex = 0;
 * rightIndex = 0;
 * outputIndex = 0;
 * if array[0] (26) = 26 [26, 45] outputIndex = 1 leftIndex = 1
 * i=0
 * second for loop array[1] (45) = 45 [26, 45]
 * return [26, 45]
 * getting back to step to step 3 = merge two arrays [1, 21] and [26, 45]
 * 
 * 10. merge([1, 21], [26, 45], [21, 1, 26, 45])
 *  let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
 * while - if -array[0] (21) = 1 [1, 1, 26, 45] outputIndex = 1 leftIndex = 1
 * second while iteration - if - array[1] (1) = 21 [1, 21, 26, 45] outputIndex = 2 leftIndex = 2
 * secod for loop - array[2] (26) = 26 outputIndex = 3 i=1
 * secod iteration in secod for loop - arry[3] (45) = 45
 * return [1, 21, 26, 45]
 * getting back to step 2-  right = mergeSort([[ 29, 28, 2, 9]])
 * 
 * 11. 9th recursive call - right = mergeSort([[ 29, 28, 2, 9]])
 * and so on
 * 

 *
 *
 */

//What is the resulting list that will be sorted after 
//3 recursive calls to mergesort? [21, 1]

//What is the resulting list that will be sorted after 16 recursive 
//calls to mergesort?right = mergeSort([16, 49, 39, 27, 43, 34, 46, 40])

//What are the first 2 lists to be merged? [21] and [1]

//Which two lists would be merged on the 7th merge?
// [1, 21, 26, 45] and [2, 9, 28, 29]