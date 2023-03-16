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
    this.nextNode = node;
  }

  public get prevNode(): CustomNode<T> | null {
    return this._prevNode;
  }

  public set prevNode(node: CustomNode<T> | null) {
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
}


