console.log("Hello");

export class CustomNode<T> {
  private _data: T;
  private _nextNode: CustomNode<T> | null = null;
  private _prevNode: CustomNode<T> | null = null;
  constructor(data: T) {
    this._data = data;
  }

  public get data() {
    return this._data;
  }

  public get nextNode(): CustomNode<T> | null {
    return this._nextNode;
  }

  public set nextNode(node: CustomNode<T> | null) {
    this._nextNode = node;
  }

  public get previousNode(): CustomNode<T> | null {
    return this._prevNode;
  }

  public set previousNode(node: CustomNode<T> | null) {
    this._prevNode = node;
  }
}

export class LinkedList<T> {
  private _firstNode: CustomNode<T> | null;
  constructor(node: CustomNode<T>) {
    this._firstNode = node;
  }
  public read(index: number) {
    // check if first node is there
    if (!this._firstNode) return null;
    let currentIndex = 0;
    let currentNode = this._firstNode;
    while (currentIndex < index) {
      if (!currentNode.nextNode) return null;
      console.log(currentNode.data);
      currentNode = currentNode.nextNode;
      currentIndex = currentIndex + 1;
    }
    return currentNode.data;
  }

  public indexOf(value: T) {
    if (!this._firstNode) return null;
    let currentIndex = 0;
    let currentNode = this._firstNode;
    do {
      if (currentNode.data === value) return currentIndex;
      if (!currentNode.nextNode) return null;
      currentNode = currentNode.nextNode;
      currentIndex = currentIndex + 1;
    } while (currentNode);
  }

  public insertAtIndex(index: number, value: T) {
    if (!this._firstNode) return null;
    const newNode = new CustomNode(value);
    if (index === 0) {
      newNode.nextNode = this._firstNode;
      this._firstNode = newNode;
      return;
    }
    let currentIndex = 0;
    let currentNode = this._firstNode;

    while (currentNode.nextNode && currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex = currentIndex + 1;
    }
    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  }
}
