import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p1o98r1la401z4gc2jhjjy/master',
    cache: new InMemoryCache()
})