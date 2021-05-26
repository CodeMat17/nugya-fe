import gql from 'graphql-tag';

export const executivesQuery = gql `
query executivesQuery {
    executives {
        id
        slug
        post
        name
        image
    }
}
`

export const usersQuery = gql `
query usersQuery {
    users {
        id
        username
    }
}
`