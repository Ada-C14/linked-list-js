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
        const addNode = new Node(value) // create Node object
        addNode.next = this.#head // pointer 'next' is assigned to current head pointer
        this.#head = addNode; //Head is now equal to new node
        let current = this.#head //better name for head
        return current
    }

    /*
    method to find if the linked list contains a node with specified value
    returns true if found, false otherwise
    Time Complexity: O(n)
    Space Complexity: O(1)
    */
    search(value) {
        
        let current = this.#head
        if (!current) return false
        if(current.value === value) return true

        while(current != null) {
            if(current.value === value) {
                return true;
            }else {
                current = current.next;
        }
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
        let maxNum = 0 

        let current = this.#head
        if (current == null) return null

        while(current != null) {
            if(current.value > maxNum) {
                maxNum = current.value
            }else {
                current = current.next
            }
        }
        return maxNum
    }
    /*
    method to return the min value in the linked list
    returns the data value and not the node
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    findMin() {
        let current = this.#head
        if (current == null) return null;

        let minNum = current.value;
        while(current != null) {
            if(current.value < minNum) {
                minNum = current.value
            }else {
                current = current.next
            }
        }
        return minNum
    }

    /*
    method that returns the length of the singly linked list
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    length() {
        let current = this.#head
        if (current == null) return 0;
        let length = 0

        while(current != null) {
            length ++;
            current = current.next;
        }
        return length  
    }

    /*
    method that returns the value at a given index in the linked list
    index count starts at 0
    returns nil if there are fewer nodes in the linked list than the index value
    Time Complexity: O(n)
    Space Complexity: O(1)
     */
    getAtIndex(index) {
        let current = this.#head
        let count = 0
        if (current == null) return null
        while(count != null && count < index) {
            count++    
            current = current.next
        }   
        return current.value
    }

    /*
    method to print all the values in the linked list
    Time Complexity: O(n) * O(k) -- i don't know! You have to first traverse the linked list and THEN an array
    Space Complexity: ???
    */
    visit() {
        let current = this.#head
        if (current == null) return null;
        let printJob = [];

        while(current != null) {
            printJob.push(current.value);
            current = current.next;
        }
        console.log(printJob.join(' ')); //print array as string
    }
    /*
    method to delete the first node found with specified value
    Time Complexity: ?
    Space Complexity: ?
    */
    delete(value) {
        let current = this.#head;
        let previous = null;
        
        if (current === null) return null; // empty list returns null
        
        if (current.value === value) {
            this.#head = current.next; //in case first value is value to be deleted
            return
        } 
        
        while (current != null) {
            if (current.value == value) {
                previous.next = current.next; 
                return
            }
            previous = current
            current = current.next;
        }
        return "Value not found!";  
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
        let current = this.#head;
        if (current == null) return null

        return current.value
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