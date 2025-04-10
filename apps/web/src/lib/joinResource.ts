import { WaitForOpponentResponse } from "../types/server";

function createJoinResource() {
  let status = "pending";
  let result: WaitForOpponentResponse;
  const suspender = fetch("/api/waitForOpponent")
    .then((res) => res.json())
    .then((data) => {
      status = "success";
      result = data.ready;
    });

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
}

export const joinResource = createJoinResource();
