
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


class Stack<T>{
    
    private items:T[] = [];

    push(item: T): void{
        this.items.push(item);
    }

    pop(): T | undefined{
       return this.items.pop();
    }

    peek():T | undefined{
       return this.items.length > 0 ? this.items[this.items.length - 1] : undefined 
    }

    isEmpety(): boolean{
       return this.items.length === 0;
    }

};

const newStack = new Stack<number>();

newStack.push(1);
newStack.push(2);
console.log(newStack.peek());     // OUTPUT: 2
console.log(newStack.pop());      // OUTPUT: 2
console.log(newStack.pop());     // OUTPUT: 1
console.log(newStack.isEmpety());// OUTPUT: true


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


class Queue<T>{
    
    private items:T[] = [];

    enqueue(item: T): void{
        this.items.push(item);
    }

    dequeue(): T | undefined{
       return this.items.shift();
    }

    peek():T | undefined{
        return this.items[0]
    }

    isEmpety(): boolean{
       return this.items.length === 0;
    }

};

const newQueue1 = new Queue<string>();

newQueue1.enqueue("a");
newQueue1.enqueue("b");
console.log(newQueue1.peek());     // OUTPUT: a
console.log(newQueue1.dequeue());      // OUTPUT: a
console.log(newQueue1.dequeue());     // OUTPUT: b
console.log(newQueue1.isEmpety());// OUTPUT: true




