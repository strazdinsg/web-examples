# Nested Context modification example

A React project showing how we can use a global Context and update it from a nested component.
To do that, the wrapper component includes a reference to a function inside the context. Then any component can access
the function and call it. The function will update state of the wrapper component and hence the state will be updated in
the context.

In the project directory, you can run:
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
