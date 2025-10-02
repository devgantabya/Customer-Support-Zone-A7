**1. What is JSX, and why is it used?**

   **Answer:**

   **JSX** is a syntax extention for JavaScript used in **React**. The full form of **JSX** is **JavaScript XML**.
   **JSX** allows us to write **HTML-like code inside JavaScript**.

   **Why used?**
   - Make UI code easier to write and read.
   - React can **convert JSX into JavaScript Object** using `React.createElements()`.
   - Provides **cleaner code** and better **developer experience**.

<br>

**2. What is the difference between State and Props?**

   **Answer:**
   <br>
   Deferences between State and Props:
   | Feature        | State | Props |
   |----------------|-------|-------|
   | **Definition** | Data that is managed within a component | Data passed from parent to child component |
   | **Mutability** | Mutable (can be updated with `setState` / `useState`) | Immutable (cannot be modified by the child) |
   | **Ownership**  | Owned by the component itself | Owned by the parent component |
   | **Usage**      | For dynamic, interactive data | For passing data and functions to child components |
   | **Scope**      | Local to the component | Available to child components via props |
   | **Update**     | Causes the component to re-render when updated | Cannot be updated by the child, only re-passed from parent |


<br>

**3. What is the useState hook, and how does it work?**

   **Answer:**

   The `useState` hook is a **built-in React function that lets you add a stateful variable to a function component, allowing it to remember information across re-renders.**

   **How it works**
   - You must import `useState` from **react**. 
   - To use it, call `useState` with the initial state value as an argument. 
   - `useState` returns an array with two items: the current state value and a function to update it. 
   - use array destructuring to give them meaningful names, like `[count, setCount]`. `count` is the state variable that holds the current value. `setCount` is the function (setter function) you use to change the state. 
   - When you call the setter function, React re-renders the component, and the UI updates to display the new state value.

<br>


**4. How can you share state between components in React?**

   **Answer:** 

   Sharing state between components in React can be achieved through several methods:
   - **Lift state up →** Move state to the **closest common parent** and pass data via props.
   - **Context API →** For global/shared state without prop-drilling.
   - **State management libraries →** Like Redux, Zustand, Recoil, etc.
   - **URL or localStorage →** For persistence across refresh or navigation.


**5. How is event handling done in React?**

   **Answer:** 

   - React handles events using **camelCase** instead of lowercase.
   - Pass a **function** as the event handler(not a string like HTML).
   - You can define event handler functions directly inline within the JSX.
   - React uses **synthetic events** (a wrapper around native events) for cross-browser compatibility and performance.
