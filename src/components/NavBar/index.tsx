"use client";

import Link from "next/link";
import Logo from "../Logo";
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
    <nav
      ref={navRef}
      className="relative bg-background border-b border-border z-50"
    >
      <div className="relative flex items-center p-4">
        {/* -------- MOBILE: CENTERED LOGO -------- */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
          <Link href="/">
            <Logo className="h-8 w-auto" />
          </Link>
        </div>

        {/* -------- DESKTOP (logo + nav together) -------- */}
        <div className="hidden md:flex items-center gap-8 mx-auto">
          <Link href="/">
            <Logo className="h-8 w-auto" />
          </Link>
          <DesktopNav data={data} handlers={handlers} />
        </div>

        {/* -------- MOBILE: DRAWER BUTTON (right) -------- */}
        <div className="md:hidden ml-auto">
          <MobileNav data={data} handlers={handlers} />
        </div>
      </div>
    </nav>
  );
}
