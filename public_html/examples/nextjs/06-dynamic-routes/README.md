# Dynamic routing with static pre-rendering

This is an example showing how we can:

* Construct dynamic routes depending on data. We have several posts, each post
  has an ID. Then paths `/posts/{id}` are generated, where a specific post with
  given ID will be accessible.
* Statically pre-render the different pages. I.e., each post page will be
  actually pre-rendered and cached. This is achieved by providing
  function `getStaticPaths` which specifies all the available post ID values.

P.S. This works only if your data is really static. If the posts could be edited
or deleted, you would not use static pre-rendering.
