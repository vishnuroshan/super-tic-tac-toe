import OnlineGameLoader from "../../../components/online/OnlineGameloader";

interface RoomPageProps {
  params: Promise<{ roomCode: string }>;
}
// You must await props.params because it’s now a Promise in async functions in dynamic routes.
export default async function RoomPage(props: RoomPageProps) {
  const { roomCode } = await props.params;

  return <OnlineGameLoader roomCode={roomCode} />;
}
