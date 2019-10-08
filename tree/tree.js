'used strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(value = null) {
    this.root = value || value === 0 ? new Node(value) : value;
    this.size = value ? 1 : 0;
  }

  preOrder(root = this.root, values = []) {
    if(!this.root) {
      throw 'The tree is empty!';
    }
    values.push(root.value);
    if (root.left) {
      this.preOrder(root.left, values);
    }
    if(root.right) {
      this.preOrder(root.right, values);
    }
    return values;
  }

  inOrder(root = this.root, values = []) {
    if(!this.root) {
      throw 'The tree is empty!';
    }
    if (root.left) {
      this.inOrder(root.left, values);
    }
    values.push(root.value);
    if(root.right) {
      this.inOrder(root.right, values);
    }
    return values;
  }

  postOrder(root = this.root, values = []) {
    if(!this.root) {
      throw 'The tree is empty!';
    }
    if (root.left) {
      this.postOrder(root.left, values);
    }
    if(root.right) {
      this.postOrder(root.right, values);
    }
    values.push(root.value);
    return values;
  }

}

class BinarySearchTree extends BinaryTree {
  constructor(value) {
    super(value);
  }

  add(value, root = this.root) {
    if(!root) {
      this.size++;
      return this.root = new Node(value);
    } else if (value <= root.value && !root.left) {
      this.size++;
      return root.left = new Node(value);
    } else if (value > root.value && !root.right) {
      this.size++;
      return root.right = new Node(value);
    }


    if (value <= root.value) {
      this.add(value, root.left);
    } else if (value > root.value) {
      this.add(value, root.right);
    }

  }

  contains(value, root = this.root) {
    if(!root) {
      return false;
    } else if (root.value === value) {
      return true;
    }

    if (value < root.value) {
      return this.contains(value, root.left);
    } else if (value > root.value) {
      return this.contains(value, root.right);
    }
  }

}

module.exports = { BinarySearchTree, BinaryTree };
