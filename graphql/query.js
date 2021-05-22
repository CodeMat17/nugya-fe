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

export const executiveQuery = gql `
query executiveQuery($slug: String!) {
    executive(slug: $slug) {
        id
        slug
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