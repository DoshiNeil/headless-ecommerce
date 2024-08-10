# Major design changes in the project code

### Change 1 : Moving away from REST to GraphQL.

> In a system like REST, you can only pass a single set of arguments - the query parameters and URL segments in your request. But in GraphQL, every field and nested object can get its own set of arguments, making GraphQL a complete replacement for making multiple API fetches. You can even pass arguments into scalar fields, to implement data transformations once on the server, instead of on every client separately. [ref](https://graphql.org/learn/queries/#:~:text=In%20a%20system,every%20client%20separately.)

The product schema exploration itself has made me realize the need for a better solution than a simple REST API. As we get into finer ways to query data on products and their attributes; both nested and conditional, we are better of with choosing graphql compared to REST.

