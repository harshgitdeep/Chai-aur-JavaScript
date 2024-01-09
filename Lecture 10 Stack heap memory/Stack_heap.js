/*

Stack (Primitive)  ---> Copy of variable

Heap (Non-primitve ) --> Reference (CHanges are made to original value)


Variables can hold primitive and non-primitive (also known as reference) types. Let's break down how they behave in memory:

1. **Stack (Primitive):**
   - When a primitive type (like numbers, strings, booleans, etc.) is stored in a variable, that variable directly holds the actual value.
   - If you assign a primitive variable to another variable, it creates a copy of the value.

   ```javascript
   let a = 5; // 'a' holds the value 5
   let b = a; // 'b' now holds a copy of the value 5
   b = 10; // Changing 'b' does not affect 'a'
   console.log(a); // Output: 5
   console.log(b); // Output: 10
   ```

2. **Heap (Non-primitive):**
   - Non-primitive types (like objects, arrays, functions) are stored in the heap, and variables hold references to their memory locations rather than the actual values.
   - If you assign a non-primitive variable to another variable, you're actually copying the reference to the same object in memory.

   ```javascript
   let obj1 = { name: 'John' }; // 'obj1' holds a reference to an object in memory
   let obj2 = obj1; // 'obj2' now holds the same reference as 'obj1'

   obj2.name = 'Jane'; // Changing a property of 'obj2' also changes 'obj1'
   console.log(obj1.name); // Output: 'Jane'
   console.log(obj2.name); // Output: 'Jane'
   ```

   Both `obj1` and `obj2` point to the same object in memory, so modifying via one reference affects the underlying object that both references point to.
*/ 