# React Apprenticeship: Advanced Patterns

Code reuse is one of the greatest things about React. Same code can be used for many use cases. Creating a code that meets every use case can make our code a nightmare, so we need a way to let our users(developers) handle these implementation details.

## Instructions

Follow the list in each pattern. These patterns use Inversion of Control, which means giving the control of the abstraction to the implementation. The amount of control given to the user increments in each pattern.

## Compound Components

Avoid complex component APIs.

1. Connect the components `Decrement`, `Count`, and `Increment` to the component `Counter`.
2. Create a context to share the Counter's logic with subcomponents.
3. Consume context from subcomponents.
4. Refactor `App.jsx` using Compound Components.

## Control Props

Make a component controllable.

1. Add the props `value` and `onChange` to the component `Counter`.
2. Add two variables to know if the component is mounted and controlled.
3. Add two functions to get and change the correct(either external or internal) value.
4. Refactor the functions `decrement` and `increment`.
5. Add a `useEffect` to call the function `onChange` only if the component is uncontrolled.
6. Create a state and handle the state change in `App.jsx`.

## Custom Hook

Extract the logic from a component.

1. Create custom hook and extract the state and functions from `Counter.jsx`.
2. Add the custom hook to `App.jsx`.
3. Pass the prop `onClick` to the components `Decrement` and `Increment`.
4. Refactor the components `Decrement` and `Increment` to add the prop `onClick`.
