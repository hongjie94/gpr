import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { PrismaClient } from '@prisma/client';
import { prisma } from '../../../../prisma/db';
import { resolvers } from '../../../graphql/resolvers';
import { typeDefs } from '../../../graphql/schema';

export type Context = {
  prisma: PrismaClient
};

const apolloServer = new ApolloServer<Context>({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({
    req, res, prisma
  })
});

export { handler as GET, handler as POST };