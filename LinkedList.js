 class node {
     constructor(e) {
         this.element = e;
         this.next = undefined
     }

 };
 class LinkedList {
     constructor() {
         this.count = 0
         this.head = undefined
     }
     push(e) {
         let dd = new node(e)
         let current
         if (this.head === undefined || this.head === null) {
             this.head = dd
         } else {
             current = this.head
             while (current.next != null) {
                 current = current.next
             }
             current.next = dd
         }
         this.count++
     }
     getElementAt(index) {
         if (index >= 0 && index < this.count) {
             let node = this.head
             for (let i = 0; i < index; i++) {
                 node = node.next
             }
             return node
         }
         return undefined
     }
     insert(e, index) {
         let dd = new node(e)
         let previous = this.getElementAt(index - 1)
         let current = previous.next
         previous.next = dd
         dd.next = current
         this.count++
     }
     removeAt(index) {
         if (index === 0) {
             this.head = undefined
         } else if (index > 0) {
             let previous = this.getElementAt(index - 1)
             let current = previous.next
             previous.next = current.next
             this.count--
                 return current
         } else {
             return undefined
         }
     }
 }