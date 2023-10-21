import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { PrismaClient } from '@prisma/client';
import { prisma } from '../../../../prisma/db';
import { resolvers } from '@/graphql/resolvers';
import { typeDefs } from '@/graphql/schema';
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';

export type Context = {
  prisma: PrismaClient
};

const apolloServer = new ApolloServer<Context>({
  resolvers,
  typeDefs,
  plugins: [
    // Install a landing page plugin based on NODE_ENV
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageProductionDefault({
          graphRef: 'my-graph-id@my-graph-variant',
          footer: false,
        })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({
    req, res, prisma
  })
});

export { handler as GET, handler as POST };