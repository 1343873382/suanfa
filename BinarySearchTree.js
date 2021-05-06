class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null
    }

}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insertNode(node, key) {
        let node1 = new Node(node)
        if (key < node1) {
            if (node1.left === null) {
                node1.left = new Node(key)
            } else {
                this.insertNode(node1.left, key)
            }
        }
        if (key > node1) {
            if (node1.right === null) {
                node1.right = new Node(key)
            } else {
                this.insertNode(node1.right, key)
            }
        }
    }
    insert(key) {

        if (this.root = null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }
}
let tree = new BinarySearchTree()

tree.insert(11)
console.log(tree);