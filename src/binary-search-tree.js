const { NotImplementedError, ListNode } = require("../extensions/index.js")

const { Node } = require("../extensions/list-tree.js")

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    return this.rootNode
  }
  add(data) {
    this.rootNode = addIn(this.rootNode, data)

    function addIn(node, value) {
      if (!node) {
        return new Node(value)
      }

      if (node.data === value) {
        return node
      }

      if (value < node.data) {
        node.left = addIn(node.left, value)
      } else {
        node.right = addIn(node.right, value)
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

      if (data < curNode.data) {
        curNode = curNode.left
      } else {
        curNode = curNode.right
      }
    }
    return false
  }

  find(data) {}

  remove(data) {}

  min() {
    if (!this.rootNode) {
      return undefined
    }
    let curNode = this.rootNode
    while (curNode.left) {
      curNode = curNode.left
    }
    return curNode.data
  }

  max() {
    if (!this.rootNode) {
      return
    }
    let curNode = this.rootNode
    while (curNode.right) {
      curNode = curNode.right
    }
    return curNode.data
  }
}
const tree = new BinarySearchTree()
console.log(tree.add(12))
console.log((tree.rootNode.left = 11))
console.log(tree)

module.exports = {
  BinarySearchTree
}
