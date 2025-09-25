"use client";

import Loading from "@/components/auth/loading";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = "https://terrific-puma-325.convex.cloud"!;

const convex = new ConvexReactClient(convexUrl);

export default function ConvexClientProvider({
  children,
}: ConvexClientProviderProps) {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
