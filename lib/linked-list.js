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
    Time Complexity: O(1), there are no loops
    Space Complexity: O(1), created one node and moved the head.
    */
    addFirst(value) {
        // create a new node
        const newNode = new Node(value);

        // move the head
        newNode.next = this.#head;

        // set the head to be the new node (this is how the new node gets added first)
        this.#head = newNode;

        return this.#head;
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity*: O(n), n nodes to iterate through
    Space Complexity*: O(1), space required is constant
    * Search calls on the length method (outside the for loop) which has O(n) time complexity and O(1) space complexity
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
    Time Complexity*: O(n), for loop will iterate over n nodes
    Space Complexity*: O(1), space required is constant
    * findMax invokes the length method (outside the for loop) which has O(n) time complexity and O(1) space complexity
    */
    findMax() {
        let max = -Infinity;
        let len = this.length();
        let node = this.#head;
        for (let i = 0; i < len; i++) {
            if (node.value > max) {
                max = node.value
            }
            node = node.next;
        }

        if (max === -Infinity) {
            return null
        } else {
            return max
        }
    }
    /*
    method to return the min value in the linked list
    returns the data value and not the node
    Time Complexity*: O(n), for loop will iterate over n nodes
    Space Complexity*: O(1), space required is constant
    * findMin invokes the length method (outside the for loop) which has O(n) time complexity and O(1) space complexity
     */
    findMin() {
        let min = Infinity;
        let len = this.length();
        let node = this.#head;
        for (let i = 0; i < len; i++) {
            if (node.value < min) {
                min = node.value
            }
            node = node.next;
        }
        if (min === Infinity) {
            return null
        } else {
            return min
        }
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: O(n), while loop will iterate over n nodes
    Space Complexity: O(1), space required is constant
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
    returns null if there are fewer nodes in the linked list than the index value
    Time Complexity: O(n), while loop will iterate over n nodes
    Space Complexity: O(1), space required is constant
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
    Time Complexity: O(n), while loop will iterate over n nodes
    Space Complexity: O(1), space required is constant
    */
    visit() {
        let currNode = this.#head;
        while (currNode) {
            console.log(`${currNode.value}`);
            currNode = currNode.next;
        }
    }
    /*
    method to delete the first node found with specified value
    Time Complexity: O(n), while loop will iterate over n nodes
    Space Complexity: O(1), space required is constant
    */
    delete(value) {
        // store the head node
        let currNode = this.#head;
        let previousNode = null;

        // if the value of the head node is equal to the input value, delete in place
        if (currNode) {
            if (currNode.value === value) {
                this.#head = currNode.next;
                currNode = null;
                return;
            }
        }

        // otherwise, search for the value to be deleted, keep track of teh previous node
        while (currNode) {
            if (currNode.value === value) {
                break;
            }
            previousNode = currNode;
            currNode = currNode.next;
        }

        // if the value was never found in the list
        if (!currNode) {
            return;
        }
        
        // otherwise, unlink the node from the linked list
        previousNode.next = currNode.next;
        currNode = null;
    }

    /*
    method to reverse the singly linked list
    note: the nodes should be moved and not just the values in the nodes
    Time Complexity: O(n), while loop will iterate over n nodes
    Space Complexity: O(1), space required is constant
    */
    reverse() {
        let currNode = this.#head;
        let prevNode = null;
        let nextNode = null;

        // if the list is empty or there is only one node, there is nothing to reverse
        if (!currNode || !currNode.next) {
            return;
        }
        
        while (currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }

        this.#head = prevNode;
        return this;

    }

    // Advanced Exercises

    /*
    returns the value at the middle element in the singly linked list
    Time Complexity: O(n), the length and getAtIndex methods are invoked separately. These each have an O(n) time complexity
    Space Complexity: O(1), space required is constant
     */
    findMiddleValue() {
        let midIndex = parseInt(this.length() / 2);
        let midValue = this.getAtIndex(midIndex);
        return midValue;
    }

    /*
    find the nth node from the end and return its value
    assume indexing starts at 0 while counting to n
    Time Complexity: O(n), the length and getAtIndex methods are invoked separately. These each have an O(n) time complexity
    Space Complexity: O(1), space required is constant
    */
    findNthFromEnd(n) {
        let len = this.length()
        let value = this.getAtIndex(len - n);
        return value;
    }

    /*
    checks if the linked list has a cycle. A cycle exists if any node in the
    linked list links to a node already visited.
    returns true if a cycle is found, false otherwise.
    Time Complexity: O(n), there is one while loop and it has an order of n iterations
    Space Complexity: O(n), the Set object will be of length n, we don't know how many nodes are in the linked list
    */
    hasCycle() {
        let currNode = this.#head;

        if (!currNode) {
            return false;
        }
        else {
            let seen = new Set();
            while (currNode.next) {
                if (seen.has(currNode)) {
                    return true;
                } 
                seen.add(currNode);
                currNode = currNode.next
            }
            return false;
        }
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
    Time Complexity: O(n), n nodes to iterate through
    Space Complexity: O(1), space required is constant
    */
    addLast(value) {
        // create a new node
        let node = new Node(value);
        // variable will be used to store current node
        let current = this.#head;
        
        // if the list is empty add the element and make it the head, otherwise set current to be where the head is
        
        if (!current) {
            this.#head = node;
            return;
        }
        else {
            // iterate to the end of the list
            while (current.next) {
                current = current.next;
            }
            // add node
            current.next = node;
        }
    }

    /*
    method that returns the value of the last node in the linked list
    returns nil if the linked list is empty
    Time Complexity: O(n), n nodes to iterate through
    Space Complexity: O(1), space required is constant
    */
    getLast() {
        // variable will be used to store current node
        let current = this.#head;
        
        if (!current) {
            return;
        }
        else {
            // iterate to the end of the list
            while (current.next) {
                current = current.next;
            }
            // return last node
            return current.value;
        }
    }

    /*
    method to insert a new node with specific data value, assuming the linked
    list is sorted in ascending order
    Time Complexity*: O(n), n nodes to iterate through
    Space Complexity*: O(1), space required is constant
    *This method calls on the findMin, findMax, addFirst, and addLast methods - this won't change the overall space/time complexity.
    */
    insertAscending(value) {
        let min = this.findMin();
        let max = this.findMax();
        
        // first check to see if the new value is less/greater than the list's current minimum/maximum - is so, invoke the addFirst or addLast methods, respectively
        if (value <= min) {
            this.addFirst(value);
            return;
        }
        else if (value >= max) {
            this.addLast(value);
            return;
        }
        // if the new node will not be a start/endpoint:
        else {
            let newNode = new Node(value);
            let currNode = this.#head;
            let nextNode = currNode.next;

            if (!currNode) {
                this.#head = newNode;
                return;
            }
            else {
                while (nextNode) {
                    if (currNode.value <= value && nextNode.value >= value) {
                        currNode.next = newNode;
                    }
                    currNode = nextNode;
                    nextNode = currNode.next;
                }
            }
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