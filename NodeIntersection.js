class Node{
    next = null;
    constructor(value){
        this.value = value;
    }
    getValue = () => {
        return this.value
    }
    setValue = (value) => {
        this.value = value;
    }
    getNext = () => {
        return this.next;
    }
    setNext = (next) => {
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head;
    }
    size = () => {
        let tally = 0;
        let node = this.head; // start from first node
        while(node){
            tally++;
            node = node.next
        }
        return tally;
    }
    getHead = () => {
        return this.head;
    }
    setHead = (head) => {
        this.head = head;
    }
    nodeIntersect = (linkedList) =>{
        // grab head of each list as starting point
        let tgtA = this.getHead();
        let tgtB = linkedList.getHead();
        // null as "no intersection" if either list has no nodes
        if(tgtA == null || tgtB == null) return null;
        // while current nodes aren't equal
        while(tgtA !== tgtB){
            // SET CURRENTS
            //      if the current node is null
            //      make each the heads
            //      else make each the next node in the LinkedList
            tgtA = !tgtA ? linkedList.getHead() : tgtA.next;
            tgtB = !tgtB ? this.getHead() : tgtB.next;
        }
        // once the current nodes ARE equal, return one of them
        return tgtA;
    }
}

// List 1
let nodeA = new Node("a");
let nodeB = new Node("b");
let nodeC = new Node("c");
let nodeD = new Node("d");
let nodeE = new Node("e");
nodeA.setNext(nodeB)
nodeB.setNext(nodeC)
nodeC.setNext(nodeD)
nodeD.setNext(nodeE)
let nodeSetA = new LinkedList(nodeA);
//List 2, intersects List 1 @ nodeC
let nodeG = new Node("g");
let nodeH = new Node("h");
let nodeI = new Node("i");
let nodeJ = new Node("j");
nodeG.setNext(nodeH);
nodeH.setNext(nodeI);
nodeI.setNext(nodeJ);
nodeJ.setNext(nodeC);
let nodeSetB = new LinkedList(nodeG);

// CALL
console.log(nodeSetA.nodeIntersect(nodeSetB)); // expected nodeC