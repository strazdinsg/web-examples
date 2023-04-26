# Server-side rendering

This example shows how we can use server-side rendering of some data, for every
request.

To server some data on server-side as `props`, export an async
function `getServerSideProps(context)`. This function then returns props which
can be fed into the component. See `index.js`.
