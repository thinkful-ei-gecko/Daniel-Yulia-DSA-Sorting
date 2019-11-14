//After the first partition, the array is in the following order:
// 3 9 1 14 17 24 22 20
//
// 2. In this case, 14 or 17 could have been chosen as the pivot, as the partition function arranges the values in the array such that the values that are lower than the pivot are assigned to indexes before the pivot, and values larger than the pivot are assigned to indexes after the pivot. In the case of 14 or 17, this would be true given the array.
//
// Given the numbers 14 17 13 15 19 10 3 16 9 12 show the resulting list after the second partioning according to the quicksort algorithm.
//
// When using the last item on the list as pivot.
//
// 10  17 13 15 19 14 3 16 9 12
// 			j             i        p
//
// 10 3 13  15  19  14 17  16 9 12
//       j                    i
//
// 10  3  9   15  19  14 17  16  13 12
//             j                  i
//
// 10  3  9   12  19  14 17   16   13 15
//
// return j = 3
//
// First partiion done. Call quicksort
//
// middle = 3
//
// quicksort array
//
// 10 3  9  12
//
// j     p
//
// 3  10 9  12
//
//     j p
//
// 3 9 10  12
//
//
//
// Array after 2nd partition: 3 9 10 12 19 14 17 16 13 15
//
//
// Now use the first item as a pivot 14 17 13 15 19 10 3 16 9 12
//
//
// 14  17 13 15 19 10 3 16 9 12
//
// p    j  i
//
//
// 14  13  17  15  19 10 3 16 9 12
// p       j           i
//
// 14  13   10   15  19  17 3 16 9 12
// p              j         i
//
// 14   13  10   3   19   17  15  16  9 12
//
// p                  j               i
//
// 14  13 10  3  9  17  15  16  19  12
//
// p                 j               i
//
// 14  13  10  3  9  12  15  16  19  17
//
// p                      j            i
//
// 12 13 10 3 9 14 15 16 19 17
//                  j
// return j =6
//
//
//second partition
//
//12 13 10  3  9  14 15
//
//p  j   i
//
//12 10 13 3 9  14  15
//p      j i
//
//12  10 3 13 9 14 15
//p         j i
//
//12  10  3 9 13 14 15
//p            j     i
//
//
//Array after second partition using first index: 10 3 9 12 13 14 15 16 19 17
//

//3. Implementing quicksort

const values =
  '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

const data = values.split(' ');

let sortData = [];

for (let i = 0; i < data.length; i++) {
  sortData.push(parseInt(data[i]));
}

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

console.log(qSort(sortData));
