import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { Account, NextAuthConfig } from "next-auth";
import { prisma } from "./prisma";

export const { handlers, auth } = NextAuth({
  providers: [Github, Google],
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (!account || !user) {
          throw new Error("Account or user data is missing");
        }

        const {
          provider,
          providerAccountId,
          type = "",
          access_token = "",
          expires_in = null,
          refresh_token = null,
          refresh_token_expires_in,
          token_type = null,
          scope = null,
          expires_at = null,
        } = account as Account;
        await prisma.user.upsert({
          where: {
            email: user.email ?? "",
          },
          create: {
            id: user.id,
            name: user.name ?? "",
            email: user.email ?? "",
            image: user.image ?? "",
          },
          update: {
            name: user.name ?? "",
            email: user.email ?? "",
            image: user.image ?? "",
          },
        });
        await prisma.account.upsert({
          where: {
            provider_providerAccountId: {
              providerAccountId: providerAccountId,
              // @ts-ignore
              provider: provider,
            },
          },
          create: {
            email: user.email ?? "",
            provider,
            providerAccountId,
            type,
            access_token,
            expires_in,
            refresh_token,
            refresh_token_expires_in: Number(refresh_token_expires_in),
            token_type,
            scope,
            expires_at,
          },
          update: {
            email: user.email ?? "",
            access_token,
            expires_in,
            refresh_token,
            refresh_token_expires_in: Number(refresh_token_expires_in),
            token_type,
            scope,
            expires_at,
          },
        });
        return true;
      } catch (error) {
        return false;
      }
    },
  },
} satisfies NextAuthConfig);
