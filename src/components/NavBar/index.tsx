"use client";

import clsx from "clsx";
import { useNavbarData } from "./hooks/data/useNavbarData";
import { useNavbarMenu } from "./hooks/handle/useNavbarMenu";
import { DesktopNav } from "./subcomponents/DesktopNav";
import { MobileNav } from "./subcomponents/MobileNav";
import { NavBarProps } from "./types";

export default function NavBar({}: NavBarProps) {
  const data = useNavbarData();
  const handlers = useNavbarMenu(data.mounted);
  const { navRef } = handlers;

  return (
    <nav ref={navRef} className={clsx("fixed top-0", "w-full z-50")}>
      {/* -------- DESKTOP -------- */}
      <div className="md:flex justify-end">
        <DesktopNav
          data={data}
          handlers={handlers}
          className={clsx(
            "hidden md:flex",
            "right-0",
            "bg-background/80 dark:bg-background/30 backdrop-blur-xl",
            "shadow-xl border border-border/40",
            "px-6 py-3",
            "rounded-l-4xl rounded-r-none",
            "space-x-2"
          )}
        />
      </div>

      {/* -------- MOBILE: DRAWER -------- */}
      <div className="md:hidden">
        <MobileNav
          data={data}
          handlers={handlers}
          className={clsx(
            "h-10",
            "flex justify-center items-center",
            "bg-background border-b border-border",
            "shadow-sm"
          )}
        />
      </div>
    </nav>
  );
}
