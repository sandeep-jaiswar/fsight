import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { ReactNode } from "react";

const SessionWrapper = ({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null;
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionWrapper;
