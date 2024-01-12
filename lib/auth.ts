import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from "./db";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("a")
      console.log("User profile from Google:", profile);

      return true;
    },
    async jwt({ token, user }) {
      console.log("b")
      console.log("JWT token details:", token);
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        //if it's a new user, the id is set to the id from the user object provided by  google
        token.id = user!.id;
        return token;
      }

      return {
        //returns newly constructed token
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: null,
      };
    },
    async session({ token, session }) {
      console.log("c")
      console.log("session: ", session);
      console.log("token ", token);
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
  },
} satisfies NextAuthOptions;


export const getAuthSession = () => getServerSession(authOptions);