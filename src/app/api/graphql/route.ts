import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { PrismaClient } from '@prisma/client';
import { prisma } from '../../../../prisma/db';
import { resolvers } from '@/graphql/resolvers';
import { typeDefs } from '@/graphql/schema';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
3

export type Context = {
  prisma: PrismaClient
};

const apolloServer = new ApolloServer<Context>({
  resolvers,
  typeDefs,
  introspection: true,
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ footer: false })
  ]
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({
    req, res, prisma
  })
});

export { handler as GET, handler as POST };