import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavbarData } from "../../types";

export const useNavbarData = (): NavbarData => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    // Defer state updates to the next macro-task
    // This avoids the "synchronous setState in effect" lint warning
    const id = setTimeout(() => {
      setMounted(true);
      handleResize(); // Set initial mobile state
    }, 0);

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      clearTimeout(id); // Clear the timeout
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array runs this once on client mount

  // --- Base and Active Link Styles ---
  const navLinkClass =
    "text-xs sm:text-sm md:text-medium lg:text-base font-medium text-muted-foreground hover:text-foreground transition-all px-3 py-2 rounded-md hover:bg-muted";

  const menuItemClass =
    "block px-4 py-2 text-xs sm:text-sm md:text-medium lg:text-base text-foreground hover:bg-muted rounded-md";

  const activeNavLinkClass =
    "text-xs sm:text-sm md:text-medium lg:text-base font-medium text-primary font-semibold transition-all bg-muted px-3 py-2 rounded-md";

  const activeMenuItemClass =
    "block px-4 py-2 text-xs sm:text-sm md:text-medium lg:text-base text-primary bg-muted rounded-md";

  // --- Logic for active dropdowns ---
  const isIgrejaActive = pathname.startsWith("/igreja");
  const isMissoesActive = pathname.startsWith("/missoes");
  const isConteudoActive = pathname.startsWith("/conteudo");

  return {
    pathname,
    mounted,
    isMobile,
    activeStates: {
      isIgrejaActive,
      isMissoesActive,
      isConteudoActive,
    },
    linkClasses: {
      navLinkClass,
      menuItemClass,
      activeNavLinkClass,
      activeMenuItemClass,
    },
  };
};
