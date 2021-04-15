// Defines a node in the singly linked list
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
// Defines the singly linked list
class LinkedList {
    // keep the head private. Not accessible outside this class
    // note that this language feature is only available from Node 12 on
    #head;
    constructor() {
        this.#head = null;
    }

    /*
    method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: o(1)
    Space Complexity: O(1)
    */
    addFirst(value) {

        let newNode = new Node(value);

        newNode.next = this.head;
        
        this.head = newNode;
        
        return this.head;
        
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: ?
    Space Complexity: ?
    */
    search(value) {

        let node = this.head;
        let length = this.length();
        for (let i = 0; i < length; i++) {
            if (node.value === value) {
                return true;
            }
            else {
                node = node.next;
            }
        }
        return false;
    }
    

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: ?
    Space Complexity: ?
    */
   findMax() {
    let max = null;
    if (this.head === null) {
        return null
    }
    let current = this.head;

    while (current) {
        if (current.value > max || !max) {
            max = current.value;
        }
        current = current.next;
    }
    return max;
}
    /*
    method to return the min value in the linked list
    returns the data value and not the node
    Time Complexity: O()
    Space Complexity: ?
     */
    findMin() {
        let min = null;
        if (this.head === null) {
            return null
        }
        let current = this.head;

        while (current) {
            if (current.value < min || !min) {
                min = current.value;
            }
            current = current.next;
        }
        return min;
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    length() {
        let count = 0
        let node = this.head
        if (node == null) {
        return 0}
        else {
            while (node != null) {
                count += 1
                node = node.next
            }
        }
        return count

    };

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: ?
    Space Complexity: ?
     */
    getAtIndex(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node.value;
            }
            counter++;
            node = node.next;
        }
        return null;
    };

    /*
    method to print all the values in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    visit() {let current = this.head;

    while (!!current) {
        console.log(current.value);
    }
}
    /*
    method to delete the first node found with specified value
    Time Complexity: ?
    Space Complexity: ?
    */
   delete(value) {
    let current = this.head;
    let previous = null;

    while (current && current.value !== value) {
        previous = current;
        current = current.next;
    }
    if (current && current.value === value) {
        if (previous) {
            previous.next = current.next;
        } else {
            this.head = current.next;
        }
    }
}

    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: ?
    Space Complexity: ?
    */
    reverse() {
        let previous = null;
        let current = this.head;
        let next = current.next;

        while (current != null) {
            current.next = previous;
            previous = current;
            current = next;
            if (next != null) {
                next = next.next;
            }
        }
        this.head = previous;
    }

    // Advanced Exercises

    /*
    returns the value at the middle element in the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    findMiddleValue() {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    find the nth node from the end and return its value
    assume indexing starts at 0 while counting to n
    Time Complexity: ?
    Space Complexity: ?
    */
    findNthFromEnd(n) {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    checks if the linked list has a cycle. A cycle exists if any node in the
    linked list links to a node already visited.
    returns true if a cycle is found, false otherwise.
    Time Complexity: ?
    Space Complexity: ?
    */
    hasCycle() {
        throw new Error("This method hasn't been implemented yet!");
    }


    // Additional Exercises 

    /*
    returns the value in the first node
    returns nil if the list is empty
    Time Complexity: ?
    Space Complexity: ?
    */
    getFirst() {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    addLast(value) {
        // A newNode object is created with property data and next=null
    
    let newNode = new Node(value);
    // When head = null i.e. the list is empty, then head itself will point to the newNode.
        if(!this.head){
            this.head = newNode;
            return this.head;
        }
        let tail = this.head;
        while(tail.next !== null){
            tail = tail.next;
        }

        tail.next = newNode;
        return this.head;
    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: ?
    Space Complexity: ?
    */
    getLast() {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    method to insert a new node with specific data value, assuming the linked
    list is sorted in ascending order
    Time Complexity: ?
    Space Complexity: ?
    */
    insertAscending(value) {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    Helper method for tests
    Creates a cycle in the linked list for testing purposes
    Assumes the linked list has at least one node
    */
    createCycle() {

}
}

module.exports = LinkedList;