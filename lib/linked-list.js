// used the following sources to help solve this problem: 
// https://www.geeksforgeeks.org/implementation-linkedlist-javascript/ 
// https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3
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
    Time Complexity: ?
    Space Complexity: ?
    */
    addFirst(value) {
        // create a new node
        const newNode = new Node(value);

        newNode.next = this.#head;

        this.#head = newNode;

        return this.#head;
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: ?
    Space Complexity: ?
    */
    search(value) {
        let node = this.#head;
        let len = this.length();
        for (let i = 0; i < len; i++) {
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
        let max = -Infinity;
        let len = length();
        let node = this.#head;
        for (let i = 0; i < len; i++) {
            if (node.value > max) {
                max = node.value
            }
            node = node.next;
        }
        return max
    }
    /*
    method to return the min value in the linked list
    returns the data value and not the node
    Time Complexity: ?
    Space Complexity: ?
     */
    findMin() {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: ?
    Space Complexity: ?
     */
    length() {
        let len = 0;
        let node = this.#head;
        while (node) {
            len++;
            node = node.next;
        }
        return len;
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: ?
    Space Complexity: ?
     */
    getAtIndex(index) {
        let counter = 0;
        let node = this.#head;
        while (node) {
            if (counter === index) {
                return node.value;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    /*
    method to print all the values in the linked list
    Time Complexity: ?
    Space Complexity: ?
    */
    visit() {
        throw new Error("This method hasn't been implemented yet!");
    }
    /*
    method to delete the first node found with specified value
    Time Complexity: ?
    Space Complexity: ?
    */
    delete(value) {
        throw new Error("This method hasn't been implemented yet!");
    }

    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: ?
    Space Complexity: ?
    */
    reverse() {
        throw new Error("This method hasn't been implemented yet!");
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
        // create a new node
        let node = new Node(value);
        // variable will be used to store current node
        let current;
        
        // if the list is empty add the element and make it the head, otherwise set current to be where the head is
        
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
        
            // iterate to the end of the list
            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
        this.size++;
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
        if (!this.#head) return; // don't do anything if the linked list is empty

        // navigate to the last node
        let current = this.#head;
        while (current.next) {
            current = current.next;
        }

        current.next = this.#head;
    }

    end

}

module.exports = LinkedList;