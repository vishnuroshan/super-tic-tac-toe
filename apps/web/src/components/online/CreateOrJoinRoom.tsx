import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";

export default function CreateOrJoinRoom() {
  return (
    <div className="w-full max-w-md mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-6">Play Online</h2>
      <CreateRoom />
      <div className="my-6 text-gray-400 text-sm">or join a room</div>
      <JoinRoom />
    </div>
  );
}
