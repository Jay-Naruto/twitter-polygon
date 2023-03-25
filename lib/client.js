import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '0dr9g8qs',
  dataset: 'production',
  apiVersion: 'v1',
  token: 'sk8O4PPDNuQIHr3b7TZxJaHTE6mBdMwEfH871NnzjLmz3nH8JTkpFKvBeZNDWBJuIY8qdMwBLBIf5V0RqsxIBbVDX4JGChvQIvFIlgaamKcDWUvOzcAo5HyrEkdZrpOHwOQfCNTNY71MsG5WLfEJTsnN9yBrxg2vL2sTsQOU0TwVpGqPomYP',
  useCdn: false,
})
