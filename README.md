# pokemon-graphql

This was a project to demonstrate how Apollo Client / React-Apollo works.

## Client Side

In terms of how I structured the appliation, I believe this setup allows for a lot of separation between our graphql queries and the Query component provided by Apollo. 

Queries live inside a container directory mainly because these exact queries will not be reused and are specific to the container.

Technologies / Libraries Used:

```
Apollo Client
React Apollo
Styled-components
React Navigation 2
```