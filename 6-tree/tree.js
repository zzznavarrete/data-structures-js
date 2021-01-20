
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    // Vamos moviendo el nodo a la izquierda
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    // Vamos moviendo el nodo a la derecha
                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(value) {
        let currentNode = this.root;
        while (true) {
            if (currentNode) {
                if (value === currentNode.value) {
                    return currentNode;
                } else if (value > currentNode.value) {
                    currentNode = currentNode.right;
                } else if (value < currentNode.value) {
                    currentNode = currentNode.left;
                }
            }else{
                return "node does not exist"
            }
        }
    }

}

const tree = new BinarySearchTree();
