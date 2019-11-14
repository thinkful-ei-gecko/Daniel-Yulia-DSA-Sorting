//implementation of a generic node class
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
//The linked list has a head to indicate the beginning of the list
//The head always contains the 1st node.
class LinkedList {
  constructor() {
    this.head = null;
  }
  // Create a new node item
  // Point the head to that new node
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  //Create a new node item
  //Check to see if the list is empty, if it is, then insert the new item as the only item in the list
  //Start at the beginning of the list and move through the list until you reach the end of the list
  //Set the end node's next pointer to the new node
  //The new node's next pointer is null (indicating that the new node now is the last node on the list)
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  //Traverse the list, comparing the value stored in each node with the value you are searching.
  //When the item is found, return the node.
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
           and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  // The 1st item in a list indicates the start of the list, which is indicated by head.
  // If you delete the 1st item in a list, you need to change the head to indicate the new 1st item on the list.
  // Otherwise, you find the node before the node you are removing and update its next pointer to skip over the removed node.
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  insertBefore(item, key) {
    if (this.head === null) {
      console.log('Key is not found');
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && key !== currNode.value) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Key is not found');
      return;
    }
    previousNode.next = new _Node(item, currNode);
  }

  mergeSort(list) {
    if (list.next === null) {
      return list;
    }

    //get the size and mid

    let middle = Math.floor(size(list));

    let count = 0;
    let left = list;
    let leftnext = list;
    let rightnext = null;
    let right = null;

    while (count < middle) {
      count++;
      leftnext = leftnext.next;
    }

    right = new LinkedList(left.next);
    leftnext.next = null;

    return this.mergeSort(this.merge(left), this.mergeSort(right.head));
  }
  merge(left, right) {
    //It's split, so join it back.
    let sorted = new LinkedList();

    let spointer = sorted.head;
    let lpointer = left;
    let rpointer = right;

    while (lpointer && rpointer) {
      let tempNode = null;

      if (lpointer.node > rpointer.node) {
        tempNode = rpointer.node;
        rpointer = rpointer.next;
      } else {
        tempNode = lpointer.node;
        lpointer = lpointer.next;
      }

      if (sorted.head == null) {
        sorted.head = new Node(tempNode);
        spointer = sorted.head;
      } else {
        spointer.next = new Node(tempNode);
        spointer = spointer.next;
      }
    }

    spointer.next = lpointer;
    while (spointer.next) spointer = spointer.next;

    spointer.next = rpointer;

    return sorted.head;
  }
}

function size(list) {
  let nodeCounter = 1;
  if (list.head === null) {
    return console.log('Empty list');
  }
  let currentNode = list.head;
  while (currentNode !== undefined && currentNode.next !== null) {
    currentNode = currentNode.next;
    nodeCounter++;
  }
  return nodeCounter;
}

function main() {
  let SLL = new LinkedList();
  SLL.insertFirst(5);
  SLL.insertFirst(1);
  SLL.insertFirst(26);
  SLL.insertFirst(38);
  SLL.insertFirst(2);
  SLL.insertFirst(15);
  SLL.insertFirst(11);
  SLL.insertFirst(6);
  SLL.insertFirst(8);
  SLL.insertFirst(23);

  // return SLL;

  SLL.mergeSort(SLL.head);
  console.log(SLL);
}

main();

// function mSort(lst) {

//   let llsize = size(lst);
//   const middlePoint = Math.floor(llsize / 2);
//   let i = 1;
//   let middleNode = lst.head;
//   let leftHead = lst.head;
//   while(i< middlePoint && llsize > 1) {
//     console.log('while loop');
//     middleNode  = middleNode.next;
//     i++;
//   }
//   let rightHead = middleNode.next;
//   middleNode.next = null;
//   let left = leftHead;
//   let right = rightHead;
//   console.log(right);
//   console.log(left);

//   left = mSort(left);
//   right = mSort(right);
//   return merge(left, right, []);
// }

// function merge(left, right, array) {
//   let leftIndex = 0;
//   let rightIndex = 0;
//   let outputIndex = 0;
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       array[outputIndex++] = left[leftIndex++];
//     }
//     else {
//       array[outputIndex++] = right[rightIndex++];
//     }
//   }

//   for (let i = leftIndex; i < left.length; i++) {
//     array[outputIndex++] = left[i];
//   }

//   for (let i = rightIndex; i < right.length; i++) {
//     array[outputIndex++] = right[i];
//   }
//   return array;
// }

// console.log(mSort(main()));
//
