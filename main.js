// ### Question 1: Implement a Stack using TypeScript
// *Problem Statement:*
// Implement a stack using TypeScript. The stack should have the following methods:
// 1. push(item: T): void - Adds an item to the top of the stack.
// 2. pop(): T | undefined - Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
// 3. peek(): T | undefined - Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
// 4. isEmpty(): boolean - Returns true if the stack is empty, otherwise false.
// *Constraints:*
// - Use generics to make the stack implementation type-safe.
// - The stack should handle various data types (number, string, etc.).
// *Example Usage:*
// typescript
// const stack = new Stack<number>();
// stack.push(1);
// stack.push(2);
// console.log(stack.peek()); // Output: 2
// console.log(stack.pop());  // Output: 2
// console.log(stack.pop());  // Output: 1
// console.log(stack.isEmpty()); // Output: true
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items.length > 0 ? this.items[this.items.length - 1] : undefined;
    };
    Stack.prototype.isEmpety = function () {
        return this.items.length === 0;
    };
    return Stack;
}());
;
var newStack = new Stack();
newStack.push(1);
newStack.push(2);
console.log(newStack.peek()); // OUTPUT: 2
console.log(newStack.pop()); // OUTPUT: 2
console.log(newStack.pop()); // OUTPUT: 1
console.log(newStack.isEmpety()); // OUTPUT: true
// ### Question 2: Implement a Queue using TypeScript
// *Problem Statement:*
// Implement a queue using TypeScript. The queue should have the following methods:
// 1. enqueue(item: T): void - Adds an item to the end of the queue.
// 2. dequeue(): T | undefined - Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
// 3. peek(): T | undefined - Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
// 4. isEmpty(): boolean - Returns true if the queue is empty, otherwise false.
// *Constraints:*
// - Use generics to make the queue implementation type-safe.
// - The queue should handle various data types (number, string, etc.).
// *Example Usage:*
// typescript
// const queue = new Queue<string>();
// queue.enqueue("a");
// queue.enqueue("b");
// console.log(queue.peek()); // Output: "a"
// console.log(queue.dequeue());  // Output: "a"
// console.log(queue.dequeue());  // Output: "b"
// console.log(queue.isEmpty()); // Output: true
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    Queue.prototype.peek = function () {
        return this.items[0];
    };
    Queue.prototype.isEmpety = function () {
        return this.items.length === 0;
    };
    return Queue;
}());
;
var newQueue1 = new Queue();
newQueue1.enqueue("a");
newQueue1.enqueue("b");
console.log(newQueue1.peek()); // OUTPUT: 2
console.log(newQueue1.dequeue()); // OUTPUT: 2
console.log(newQueue1.dequeue()); // OUTPUT: 1
console.log(newQueue1.isEmpety()); // OUTPUT: true
