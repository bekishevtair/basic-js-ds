const { NotImplementedError, ListNode } = require("../extensions/index.js")
const { Node } = require("../extensions/list-tree.js")

/**
 * Implementation of a simple binary search tree.
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }
  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = addToTree(this.rootNode, data)

    function addToTree(node, value) {
      if (!node) {
        return new Node(value)
      }

      if (value === node.data) {
        return node
      }

      if (value < node.data) {
        node.left = addToTree(node.left, value)
      } else {
        node.right = addToTree(node.right, value)
      }

      return node
    }
  }

  has(data) {
    let curNode = this.rootNode
    while (curNode) {
      if (data === curNode.data) {
        return true
      }

      curNode = data < curNode.data ? curNode.left : curNode.right
    }
    return false
  }

  find() {}

  remove() {}

  min() {
    return findMin(this.rootNode)

    function findMin(node) {
      while (node && node.left) {
        node = node.left
      }
      return node ? node.data : undefined
    }
  }

  max() {
    return findMax(this.rootNode)

    function findMax(node) {
      while (node && node.right) {
        node = node.right
      }
      return node ? node.data : undefined
    }
  }
}

// Example usage
const tree = new BinarySearchTree()
tree.add(12)
tree.add(11)
console.log(tree)

module.exports = {
  BinarySearchTree
}
