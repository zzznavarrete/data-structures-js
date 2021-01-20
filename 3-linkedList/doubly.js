class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        };
        this.tail = this.head;

        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;
    }

    // Add node at the beginning
    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }


    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next();
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this;
    }


    // TO DO: Implementar los otros métodos


}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
