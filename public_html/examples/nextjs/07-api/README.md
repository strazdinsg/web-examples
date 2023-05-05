# Backend API

Next.JS can also be used to server create API for serving data endpoints:
REST API or any API in general.

To create an endpoint `/api/something`, create file `pages/api/something.js`,
see the syntax of handling HTTP request and response in `pages/api/hello.js`.

Note: Next.js is very _opinionated_. The api endpoints MUST be under the
directory `pages/api`, they can't be, for example, in `api/ddd`. You
can [configure another API path](https://github.com/vercel/next.js/discussions/22256)
though.


