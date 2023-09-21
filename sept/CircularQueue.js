class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return this.currentLength == this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if (!this.isFull) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength++;

            if (this.front === -1) {
                this.front = this.rear;
            }

            return false;
        }

        return false;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        const item = this.items[this.front];

        this.items[this.front] = null;

        this.front = (this.front + 1) % this.capacity;

        this.currentLength -= 1;

        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }

        return item;
    }


    peek () {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }

        return null;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is Empty');
        } else {
            let i, str = '';

            for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + "";
            }

            str += this.items[i];

            console.log(str);
            
        }

    }
}


const queue = new CircularQueue(5);

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