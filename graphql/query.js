import gql from 'graphql-tag';

export const executivesQuery = gql `
query executivesQuery {
    executives {
        id
        post
        name
        image
    }
}
`

export const executiveQuery = gql `
query executiveQuery($id: ID!) {
    executive(id: $id) {
        id
        name
        image
        post
        mail
        bio
        phone
        website
    }
}
`