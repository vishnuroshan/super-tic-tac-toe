export function WaitingRoom({ roomCode }: { roomCode: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">
        Waiting for your opponent to join...
      </h2>
      <p className="text-gray-500 text-sm">
        Share your room code to start playing.
      </p>
      <div
        className="mt-4 text-center text-sm text-gray-500 cursor-pointer group"
        onClick={() => {
          navigator.clipboard.writeText(roomCode.toString());
          // TODO: add toaster message like “Copied to clipboard”
        }}
        title="Click to copy"
      >
        Room Code:&nbsp;
        <span className="font-mono text-base font-semibold text-blue-600 group-hover:underline">
          {roomCode}
        </span>
      </div>
    </div>
  );
}
