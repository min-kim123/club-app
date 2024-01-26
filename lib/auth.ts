
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";


function CustomPrismaAdapter(p: typeof prisma) {
  return {
    ...PrismaAdapter(p),
    createUser: (data) => {
      return p.user.create({
        data: {
          ...data,
          
        }
      })
      const username = use
    }
  }
}

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
    async jwt({ token, user }) {
      console.log("b")
      console.log("JWT token details:", token);
      return token;
    },
    async session({ token, session }) {
      console.log("c")
      console.log("session: ", session);
      console.log("token ", token);
      // if (token) {
      //   session.user.id = token.id;
      //   session.user.name = token.name;
      //   session.user.email = token.email;
      //   session.user.image = token.picture;
      // }
      return session;
    },
  },
} satisfies NextAuthOptions;


export const getAuthSession = () => getServerSession(authOptions);