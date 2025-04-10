"use client";

import { useState } from "react";
import { IconButton } from "./IconButton";
import { Info } from "./icons/Info";
import { Settings } from "./icons/Settings";
import { Rules } from "./dialogs/Rules";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
  const [showRules, setShowRules] = useState<boolean>(false);
  const router = useRouter();

  const pathname = usePathname();
  const handleTitleClick = () => {
    console.log("inGame");
    const inGame =
      pathname?.startsWith("/room/") || pathname?.startsWith("/local");
    if (inGame) {
      const confirmed = window.confirm(
        "Are you sure you want to leave? Your current game progress will be lost.",
      );
      if (!confirmed) return;
    }
    router.push("/");
  };

  return (
    <>
      {showRules && <Rules onClose={() => setShowRules(false)} />}

      <header className="bg-gradient-to-r from-primary/90 via-primary to-secondary shadow-md py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={handleTitleClick}
          >
            {/* <Link href="/" className="text-white"> */}
            Super Tic Tac Toe
            {/* </Link> */}
          </h1>
          <div className="flex items-center space-x-4">
            <IconButton icon={<Settings />} />
            <IconButton
              icon={<Info />}
              onClick={() => {
                setShowRules(true);
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
}
