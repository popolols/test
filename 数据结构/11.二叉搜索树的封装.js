function BinarySearchTree() {

  // 
  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }
  // 属性
  this.root = null
  // 操作方法
  // 插入数据 向外暴露的方法
  BinarySearchTree.prototype.insert = function (key) {
    // 1.创建新节点
    const newNode = new Node(key)
    // 
    if (this.root == null) {
      this.root = newNode
    } else {
      // 如果有节点 则进行
      this.insertNode(this.root, newNode)
    }

  }
  //  向内提供的方法 应该写成静态函数更合适
  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    // 向左查找
    if (node.key > newNode.key) {
      if (node.left == null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      // 向右查找
      if (node.right == null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  // 树的遍历！！！！
  // 1.树的先序遍历
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    // handler 为回调函数 主要为处理字符串的统一输出
    this.preOrderTraversalNode(this.root, handler)
  }
  // 树的先序遍历递归算法
  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    if (node != null) {
      // 1.打印key
      handler(node.key)
      // 2.先序遍历左子树
      this.preOrderTraversalNode(node.left, handler)
      // 3.先序遍历右子树
      this.preOrderTraversalNode(node.right, handler)
    }
  }

  // 2.树的中序遍历
  BinarySearchTree.prototype.midOrderTraversal = function (handler) {
    this.midOrderTraversalNode(this.root, handler)
  }
  // 树的中序遍历递归算法 其实与前面的区别不大
  BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {
    if (node != null) {
      this.midOrderTraversalNode(node.left, handler)
      handler(node.key)
      this.midOrderTraversalNode(node.right, handler)
    }
  }

  // 3.树的后序遍历
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
    this.postOrderTraversalNode(this.root, handler)
  }
  // 树的后序遍历递归算法
  BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node != null) {
      // 3.1遍历左子树
      this.postOrderTraversalNode(node.left, handler)
      // 3.2遍历右子树
      this.postOrderTraversalNode(node.right, handler)
      //  3.3打印 key值
      handler(node.key)
    }
  }

  // 获取最大值和最小值
  BinarySearchTree.prototype.min = function () {
    var node = this.root
    while (node.left != null) {
      node = node.left
    }
    return node.key
  }
  BinarySearchTree.prototype.max = function () {
    var node = this.root
    while (node.right != null) {
      node = node.right
    }
    return node.key
  }

  // 搜索特定的值 search（key）
  BinarySearchTree.prototype.search = function (key) {
    return this.searchNode(this.root, key)
  }
  // 搜索特定值的递归算法
  BinarySearchTree.prototype.searchNode = function (node, key) {
    if (node == null) return false

    if (node.key > key) {
      // 往左查找
      return this.searchNode(node.left, key)
    } else if (node.key < key) {
      // 往右查找
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  // 删除节点
  BinarySearchTree.prototype.remove = function (key) {
    // 1.寻找要删除的节点
    // 首先要找到这个节点 删除时需要找到的节点、其父节点、以及该节点是父节点的左子节点还是右子节点
    var current = this.root
    var parentNode = null
    var isLeftChild = true
    // 1.2开始寻找要删除的节点
    while (current.key !== key) {
      parentNode = current
      if (current.key > key) {
        // 往左找
        isLeftChild = true
        current = current.left
      } else {
        // 往右找
        isLeftChild = false
        current = current.right
      }
      // 当已经找到最后的节点了，依然没有找到等于key的节点 返回false
      if (current == null) return false

    }

    // 2.开始删除
    // 2.1假如是叶子节点 即左右子节点都为空
    if (current.left == null && current.right == null) {
      if (current == root) {
        this.root = null
      } else if (isLeftChild) {
        parentNode.left = null
      } else {
        parentNode.right = null
      }
    }
    // 2.2只有一个左节点 右子节点为空
    else if (current.right == null) {
      // 判断是否是跟节点
      if (current == this.root) {
        this.root = current.left
      } else if (isLeftChild) {
        // 假如current是父节点的左子节点
        parentNode.left = current.left
      } else {
        // 假如current是父节点的右子节点
        parentNode.right = current.left
      }
    } else if (current.left == null) { //只有一个右节点 左子节点为空
      // 判断是否是跟节点
      if (current == this.root) {
        this.root = current.right
      } else if (isLeftChild) {
        // 假如current是父节点的左子节点
        parentNode.left = current.right
      } else {
        // 假如current是父节点的右子节点
        parentNode.right = current.right
      }
    }else{
      let successor=this.getSuccessor(current)
      // 判断是否是根节点
      if(this.root==current){
        this.root=successor
      }else if(isLeftChild){
        parentNode.left=successor
      
      }else{
        parentNode.right=successor
      }
      successor.left=current.left
    }
  }
  // 找后继节点
  BinarySearchTree.prototype.getSuccessor = function (delNode) {
    var successorParent = delNode
    var successor = delNode
    var current = delNode.right
    while (curren != null) {
      successorParent = successor
      successor = current
      current = current.left
    }
    // 如果后继节点不是删除节点的有节点
    if(successor!=delNode.right){
      successorParent.left=successor.right
      successor.right=delNode.right
    }
    return successor
  }

}

// 二叉搜索树的测试
var bst = new BinarySearchTree()
// 插入数据
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
var resultStr = ''

bst.preOrderTraversal(function (key) {
  return resultStr += key + ' '
})
console.log('先序遍历', resultStr)
resultStr = ''
bst.midOrderTraversal(function (key) {
  return resultStr += key + ' '
})
console.log('中序遍历', resultStr)

resultStr = ''
bst.postOrderTraversal(function (key) {
  return resultStr += key + ' '
})
console.log('后序遍历', resultStr)

console.log('最小值', bst.min())
console.log('最大值', bst.max())

console.log('搜索函数测试', bst.search(3))
console.log('搜索函数测试', bst.search(100))