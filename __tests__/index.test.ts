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
