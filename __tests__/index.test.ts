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
