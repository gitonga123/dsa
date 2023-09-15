// Queue - First In First Out

class Queue {
    constructor() {
        this.items = {};
        this.first = 0;
        this.last = 0;
    }

    enqueue(element) {
        this.items[this.last] = element;
        this.last++;
    }

    dequeue() {

        let first =  this.items[this.first];

        delete this.items[this.first];

        this.first++;
        return first;
    }

    peek() {
        return this.items[this.first];
    }

    isEmpty() {
        return (this.first - this.first) === 0;
    }

    size() {
        return (this.first - this.first)
    }

    print() {
        return this.items;
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