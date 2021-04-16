class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.item = []
    }
    isEmpty() {
        return this.count - this.lowestCount === 0
    }
    size() {
        return this.count - this.lowestCount
    }
    push(e) {
        this.item[this.count] = e;
        this.count++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        let result = this.item[this.lowestCount]
        delete this.item[this.lowestCount];
        this.lowestCount++;
        return result
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.item[this.lowestCount]
    }
}