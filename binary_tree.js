//Looking at binary tree depth first treversal

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

//The binary checker
const isBinaryValid = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] === null) {
      continue;
    }
    if (2 * i + 1 < n && arr[2 * i + 1] !== null && arr[i] >= arr[2 * i + 1]) {
      return false;
    }
    if (2 * i + 2 < n && arr[2 * i + 2] !== null && arr[i] >= arr[2 * i + 2]) {
      return false;
    }
  }
  return true;
};

// The fnction to get a visual presentation of a binary tree.

const printBinaryTree = (arr) => {
  //calculating the maximum height of the tree
  const MAX_HEIGHT = Math.floor(Math.log2(arr.length));

  //The space betwen notes
  const nodeSpace = " ".repeat(4);

  //calculate the maximum space between the tree
  const maxWidth = 2 ** (MAX_HEIGHT + 1) - 1;

  //string presentation of the level
  const getBinaryTreeStructure = (level, levelWidth, isConnectionLevel) => {
    let levelString = "";
    let gapSize = Math.floor((maxWidth - levelWidth) / 2);

    for (let i = 0; i < level.length; i++) {
      let leftPad = i === 0 ? " ".repeat(gapSize) : nodeSpace;
      let rightPad = nodeSpace;

      if (isConnectionLevel) {
        let connector = level[i] === "/" || level[i] === "\\" ? level[i] : " ";
        levelString += leftPad + connector + rightPad;
      } else {
        levelString += leftPad + (level[i] || " ") + rightPad;
      }
    }
    return levelString;
  };

  //Geneate and print each level of the tree
  for (let i = 0; i <= MAX_HEIGHT; i++) {
    let CalLevelWith = 2 ** i;

    //get a node for this level
    let levelNodes = arr.slice(2 ** i - 1, 2 ** (i + 1) - 1);
    let levelStr = getBinaryTreeStructure(levelNodes, CalLevelWith, false);
    console.log(levelStr);

    //if htis is not last level, add connector char
    if (i < MAX_HEIGHT) {
      let connectorLevel = [];
      for (let j = 0; j < CalLevelWith; j++) {
        connectorLevel.push(levelNodes[j] != null ? "/" : " ");
        connectorLevel.push(levelNodes[j] != null ? "\\" : " ");
      }
      let connectorString = getBinaryTreeStructure(
        connectorLevel,
        CalLevelWith * 2,
        true
      );
      console.log(connectorString);
    }
  }
};

console.log("Right-Leaning Tree (Skewed Right):");
const treeArrayRight = [
  1,
  null,
  2,
  null,
  null,
  null,
  3,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  4,
];
printBinaryTree(treeArrayRight);

console.log("\nLeft-Leaning Tree (Skewed Left):");
const treeArrayLeft = [
  1,
  2,
  null,
  3,
  null,
  null,
  null,
  4,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];
printBinaryTree(treeArrayLeft);

console.log("\nSparse Tree:");
const treeArraySparse = [
  1,
  2,
  3,
  null,
  5,
  6,
  null,
  null,
  null,
  null,
  11,
  null,
  null,
  null,
  null,
];
printBinaryTree(treeArraySparse);

console.log("\nComplete Tree:");
const treeArrayComplete = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
printBinaryTree(treeArrayComplete);
