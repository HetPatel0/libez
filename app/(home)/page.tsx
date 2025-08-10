import Herosec from "@/components/herosec";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  return (
    <>
      {/* <pre> {JSON.stringify(session)} </pre> */}

      <Herosec />
    </>
  );
}
