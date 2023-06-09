import { CustomNode, LinkedList } from "../src";

test("Custom node Class", () => {
  const nodeOne = new CustomNode("one");
  const nodeTwo = new CustomNode("Two");
  const nodeThree = new CustomNode("Three");
  const nodeFour = new CustomNode("Four");

  nodeOne.nextNode = nodeTwo;
  nodeTwo.nextNode = nodeThree;
  nodeThree.nextNode = nodeFour;

  expect(nodeOne.nextNode).toEqual(nodeTwo);
  expect(nodeFour.nextNode).toBeNull();
});

test("CustomNode class with previousNode", () => {
  const nodeOne = new CustomNode("Bob");
  const nodeTwo = new CustomNode("Jill");
  const nodeThree = new CustomNode("Emily");

  nodeOne.nextNode = nodeTwo;
  nodeTwo.previousNode = nodeOne;
  nodeTwo.nextNode = nodeThree;
  nodeThree.previousNode = nodeTwo;

  expect(nodeOne.previousNode).toBeNull();
  expect(nodeOne.nextNode).toEqual(nodeTwo);
  expect(nodeTwo.previousNode).toEqual(nodeOne);
  expect(nodeThree.nextNode).toBeNull();
});

test("LinkedList", () => {
  const nodeOne = new CustomNode("once");
  const nodeTwo = new CustomNode("upon");
  const nodeThree = new CustomNode("a");
  const nodeFour = new CustomNode("time");

  nodeOne.nextNode = nodeTwo;
  nodeTwo.nextNode = nodeThree;
  nodeThree.nextNode = nodeFour;

  const list = new LinkedList(nodeOne);

  // Read
  expect(list.read(10)).toBeNull();
  expect(list.read(1)).toBe(nodeTwo.data);

  // Search
  expect(list.indexOf("history")).toBeNull();
  expect(list.indexOf("time")).toBe(3);
  expect(list.read(3)).toBe("time");

  // Insert
  list.insertAtIndex(3, "purple");
  expect(list.indexOf("purple")).toBe(3);
  expect(list.read(3)).toBe("purple");

  list.insertAtIndex(0, "red");
  expect(list.indexOf("red")).toBe(0);
  expect(list.read(0)).toBe("red");

  list.insertAtIndex(11, "blue");
  expect(list.indexOf("blue")).toBe(6);
  expect(list.read(6)).toBe("blue");
  expect(list.read(7)).toBeNull();

  // Delete
  list.deleteAtIndex(6);
  expect(list.indexOf("blue")).toBeNull();
  expect(list.read(6)).toBeNull();

  expect(list.indexOf("red")).toBe(0);
  expect(list.read(0)).toBe("red");
  expect(list.indexOf("once")).toBe(1);
  expect(list.read(1)).toBe("once");

  list.deleteAtIndex(0);
  expect(list.indexOf("red")).toBeNull();
  expect(list.read(0)).toBe("once");
});
