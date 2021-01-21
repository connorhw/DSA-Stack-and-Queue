class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top)
        this.top = node;
    }
    pop(data) {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek(stack) {
    if (!stack.top) {
        return null;
    } else {
        return stack.top.value;
    }
}

function isEmpty(stack) {
    return (stack.top === null);

}

function display() {
    let currNode = stack.top;
    if (currNode === null) console.log('empty stack');
    while (currNode.next !== null) {
        console.log(currNode.value);
        currNode = currNode.next;
    }
    console.log(currNode.value);
}

function main() {
    let starTrek = new Stack();

    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    starTrek.pop();
    starTrek.pop();

    return starTrek;
}

console.log(main());