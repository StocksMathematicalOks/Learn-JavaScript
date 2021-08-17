class Node {
    constructor(data) {
      this.data = data;
      this.right = null;
      this.left = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
    insert(element) {
      const node = new Node(element);
      if (!this.root) {
        this.root = node;
      } else {
        this.insertNode(this.root, node);
      }
    }
    insertNode(node, newNode) {
      if (node.data > newNode.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
