// Stack - Last In First Our LIFO
class Stack {

    constructor() {
        this.items = [];
    }


    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty () {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        return this.items.toString();
    }

}

const stack = new Stack();


stack.push(5);
stack.push(10);

console.log(stack.isEmpty());

stack.push(12);

console.log(stack.size());

console.log(stack.pop());

console.log(stack.size());
console.log(stack.print());
console.log(stack.pop());

console.log(stack.print());