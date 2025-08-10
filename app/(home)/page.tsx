import Herosec from "@/components/herosec";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { LoginButton, LogoutButton } from "@/components/auth";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  return (
    <>
      {/* <pre> {JSON.stringify(session)} </pre> */}
      
      <Herosec />
    </>
  );
}
