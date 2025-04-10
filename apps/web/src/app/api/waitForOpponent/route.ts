export async function GET() {
  await new Promise((res) => setTimeout(res, 5000));
  console.log("Waiting for opponent...");
  return Response.json({ ready: true });
}
