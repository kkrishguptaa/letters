import { gql, GraphQLClient } from 'graphql-request';
import { env } from './env';

export const client = new GraphQLClient(
  `https://cloud.caisy.io/api/v3/e/${env.CAISY_PROJECT_ID}/graphql`,
  {
    headers: {
      'x-caisy-apikey': env.CAISY_API_KEY
    }
  }
);

export async function fetchAllLetters() {
  const res = await client.request(gql`
query allLetter {
  allLetter {
    edges {
      node {
        id
        slug
        title
        authLock
        _meta {
          publishedAt
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
      startCursor
    }
    totalCount
  }
}`)

  return res.allLetter as {
    edges: {
      node: {
        id: string;
        slug: string;
        title: string;
        authLock: string;
        _meta: {
          publishedAt: string;
        }
      }
    }[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
      startCursor: string;
    };
    totalCount: number;
  }
}

export async function fetchLetterBySlug(id: string) {
  const res = await client.request(gql`
query Letter($id: ID!) {
  Letter(id: $id) {
    id
    authLock
    slug
    title
    content {
      json
      connections {
        __typename
        ... on Asset {
          src
          height
          width
          id
          description
        }
      }
    }
    _meta {
      publishedAt
    }
  }
}
`, {
    id
  })

  return res.Letter as {
    id: string;
    authLock: string;
    slug: string;
    title: string;
    content: {
      json: any;
      connections: any
    };
    _meta: {
      publishedAt: string;
    }
  }
}
