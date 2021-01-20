
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // Return always the last value
    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;
        return this;
    }


    // delete the last value
    pop(){
        // En caso de que sea solo 1 elemento
        if (this.top === this.bottom){
            this.bottom = null;
        }
        // Asigno como top al que está bajo del top que estoy sacando
        this.top = this.top.next;
        this.length--;

        return this;
    }
}

const myStack = new Stack();

