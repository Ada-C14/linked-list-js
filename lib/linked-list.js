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
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    addFirst(value) {
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
        while (!!current && current.value !== value) {
            current = current.next;
        }

        return !!current; //in js, null is only falsey if coerced into a boolean
    }

    /*
    method to return the max value in the linked list
    returns the data value and not the node
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    findMax() {
        let max = null;
        let current = this.#head;

        while (!!current) {
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
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    findMin() {
        let min = null;
        let current = this.#head;

        while (!!current) {
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
        let length = 0;
        let current = this.#head;

        while (!!current) {
            length++;
            current = current.next;
        }

        return length;
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    getAtIndex(index) {
        let count = 0;
        let current = this.#head;

        while (!!current && count < index) {
            count++;
            current = current.next;
        }
        if (count < index || !this.#head) {
            return null;
        } else {
            return current.value;
        }
    }

    /*
    method to print all the values in the linked list
    Time Complexity: O(n)
    Space Complexity: O(n)? Since each console.log call gets added to the call stack?
    */
    visit() {
        let current = this.#head;

        while (!!current) {
            console.log(current.value);
        }
    }

    /*
    method to delete the first node found with specified value
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    delete(value) {
        let current = this.#head;
        let prev = null;

        while (!!current && current.value !== value) {
            prev = current;
            current = current.next;
        }
        if (!!current && current.value === value) {
            if (!!prev) {
                prev.next = current.next;
            } else {
                this.#head = current.next;
            }
            //is garbage collection necessary in JS? No, right?
        }
    }

    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    reverse() {
        let prev = null;
        let current = this.#head;
        let next = current.next;

        while (!!current) {
            current.next = prev;
            prev = current;
            current = next;
            if (!!next) {
                next = next.next;
            }
        }
        this.#head = prev;
    }


    // Advanced Exercises

    /*
    returns the value at the middle element in the singly linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    findMiddleValue() {
        let slow = this.#head;
        let fast = this.#head;
        while (!!fast && !!fast.next) { //if even number of nodes, exit with !fast else exit with !fast.next
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow.value;
    }

    /*
    find the nth node from the end and return its value
    assume indexing starts at 0 while counting to n
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    findNthFromEnd(n) {
        let count = 1; //start at one so count can be used as length as well
        let trailing = this.#head;
        let current = this.#head;
        while (!!current && !!current.next) {
            current = current.next;
            count++;

            if (count > n) {
                trailing = trailing.next;
            }
        }
        if (n > count) { 
            return null;
        } else {
            return trailing.value;
        }
    }

    /*
    checks if the linked list has a cycle. A cycle exists if any node in the
    linked list links to a node already visited.
    returns true if a cycle is found, false otherwise.
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    // hasCycle() {
    //     let current = this.#head;
    //     while (!!current) { 
    //         current = current.next;
    //         if (current == this.#head) {
    //             return true
    //         }
    //     }

    //     return false;
    // }

    hasCycle() {
        let slow = this.#head;
        let fast = this.#head;
        while (!!fast && !!fast.next) { 
            slow = slow.next;
            fast = fast.next.next;
            if (fast == slow) {
                return true
            }
        }

        return false;
    }

    // Additional Exercises 

    /*
    returns the value in the first node
    returns nil if the list is empty
    Time Complexity: O(1)
    Space Complexity: O(1)
    */
    getFirst() {
        return this.#head.value;
    }

    /*
    method that inserts a given value as a new last node in the linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    addLast(value) {
        let current = this.#head;
        
        if (!current) {
            this.#head = new Node(value, null);
            // could also call this.addFirst(value);
        } else {
            while (!!current.next) {
                current = current.next;
            }
            current.next = new Node(value, null);
        }
    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    getLast() {
        let current = this.#head;
        
        while (!!current.next) {
            current = current.next;
        }
        
        return current.value;
    }

    /*
    method to insert a new node with specific data value, assuming the linked
    list is sorted in ascending order
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    insertAscending(value) {
        let current = this.#head;

        if (!current || current.value > value) {
            this.#head = new Node(value, this.#head);
            // could also call this.addFirst(value);
        } else {
            while (!!current && !!current.next && current.next.value < value) {
                current = current.next;
            }

            current.next = new Node(value, current.next);
        }
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