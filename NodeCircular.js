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
    toString = () => {
        return `Value: ${this.value}\nNext: ${this.next.value}`
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head;
    }
    findCircularNode = () => {
        let collect = new Set(); // use Set to avoid dupes
        let node = this.getHead();  // start w/ the head
        while(node != null){  // while the node isn't null
            // if the node is in the set, return it
            // (it's the loop start)
            if(collect.has(node)) return node;  

            // add the current node to the set
            collect.add(node);
            // move current to the next node in sequence
            node = node.getNext();
        }
        return null;
    }
    getHead = () => {
        return this.head;
    }
    setHead = (head) => {
        this.head = head;
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
nodeE.setNext(nodeC) // circular @ nodeC
let nodeSetA = new LinkedList(nodeA);

console.log(nodeSetA.findCircularNode()) // expected nodeC
