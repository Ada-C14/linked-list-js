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
    // # before the variable head denotes a private field
    #head;
    constructor() {
        this.#head = null;
    }

    /*
    method to add a new node with the specific data value in the linked list
    insert the new node at the beginning of the linked list
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    addFirst(value) {
        // const newNode = new Node(value);
        // newNode.next = this.#head; //assigns the value of this.#head to the newNode's next
        // this.#head = newNode; // assigns the head to be the newNode

        //same as above but a one liner: 
        this.#head = new Node(value, this.#head); 
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    search(value) {
        let current = this.#head;

        while (current) {
            if (current.value == value) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    findMax() {
        // return null if list is empty, must check separately b/c #head.value won't exist
        let current = this.#head;
        if (!current) return null;
        let max = this.#head.value;

        while (current) {
            if (current.value > max) {
                max = current.value;
            }
            current = current.next;
        }

        return max;
    }
    /*
    method to return the min value in the linked list
    returns the data value and not the node
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    findMin() {
        let current = this.#head;
        if (!current) return null;
        let min = this.#head.value;

        while (current) {
            if (current.value < min) {
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
        let current = this.#head;
        let count = 0;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    getAtIndex(index) {
        let counter = 0; 
        let current = this.#head;

        while (current) {
            if (counter === index) {
                return current.value;
            }

            current = current.next;
            counter ++;
        }

        return null;
    }

    /*
    method to print all the values in the linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    visit() {
        let current = this.#head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    /*
    method to delete the first node found with specified value
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    delete(value) {
        let current = this.#head;
        let previous = null;

        while (current) {
            if (current.value == value) {
                if (!previous) { // it's the first elem of the list
                    this.#head = current.next;
                    return;
                } else if (!current.next) { // it's the last elem
                    previous.next = null;
                    return;
                } else { // it's in the middle
                    previous.next = previous.next.next;
                    return;
                }
                
            } else {
                previous = current;
                current = current.next;
            }
        }

        return null; // if it's not found, return null
    }

    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    // ****** Iterative solution ****** //
    reverse() {
        // iterative solution:
        let current = this.#head;
        let previous = null;
        let nextTemp = null;

        // nothing to reverse if the list is empty or only 1 node
        if (!current || !current.next) return;

        while (current) {
            // hold the next node temporarily
            nextTemp = current.next;
            // change current to point at the previous node
            current.next = previous;
            // increment previous and current each by one
            previous = current;
            current = nextTemp;
        }

        // when the loop is finished, previous points to the new head
        this.#head = previous;
        return this;
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
        throw new Error("This method hasn't been implemented yet!");
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