// 运用数组的方法构造栈
class Stack {
    constructor() {
        this.item = []

    }
    push(element) {
        this.item.push(elemnt)
    }
    pop(element) {
        return this.item.pop()
    }
    peek() {
        return this.item[this.item.length - 1]
    }
    isEmpty() {
        return this.item.length === 0
    }
    size() {
        return this.item.length
    }
    clear() {
        this.item = []
    }
}
// 不用数组方法创建栈
class Stack {
    constructor() {
        this.item = []
        this.count = 0

    }
    size() {
        return this.count
    }
    isEmpty() {
        return this.count === 0
    }
    push(element) {
        this.item[this.count] = element
        this.count++
    }
    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
            const result = this.item[this.count]
        delete this.item[this.count]
        return result
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.item[this.count - 1]
    }
    clear() {
        this.item = []
        this.count = 0
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.item[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.item[i]}`;
        }
        return objString;
    }
}