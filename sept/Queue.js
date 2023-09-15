// Queue - First In First Out

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        return this.items.toString();
    }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(25);

console.log("Size --->", queue.size());

console.log("Peek --->", queue.peek());
console.log("Queue data --->", queue.print());

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log("Peek --->",queue.peek());

console.log("Size --->",queue.size());

console.log("Queue Data --->",queue.print());