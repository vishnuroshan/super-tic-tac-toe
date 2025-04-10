import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useSafeBeforeUnload(shouldBlock: boolean) {
  const pathname = usePathname();

  useEffect(() => {
    if (!shouldBlock) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = ""; // This triggers the native browser confirm dialog
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [shouldBlock, pathname]); // ✅ re-run properly on route changes
}
