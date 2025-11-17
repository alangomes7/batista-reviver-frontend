import { RefObject } from "react";

// Props for the main Navbar component (currently none)
export type NavBarProps = Record<string, never>;

export const navLinksMenuItem = {
  igreja: "/igreja",
} as const;

export const navLinksPages = {
  not_found: "/not-found",
  igreja_trilha_reviver: "/igreja/trilha-reviver",
  igreja_quem_somos: "/igreja/quem-somos",
  igreja_ministerios: "/igreja/ministerios",
  igreja_visao: "/igreja/visao-fe-e-cruz",
} as const;

// --- HOOK TYPES ---

// Return type for our data hook
export interface NavbarData {
  pathname: string;
  mounted: boolean;
  isMobile: boolean;
  activeStates: {
    isIgrejaActive: boolean;
    isMissoesActive: boolean;
    isConteudoActive: boolean;
  };
  linkClasses: {
    navLinkClass: string;
    menuItemClass: string;
    activeNavLinkClass: string;
    activeMenuItemClass: string;
  };
}

// Return type for our handle hook
export interface NavbarMenuHandlers {
  isOpen: boolean;
  isIgrejaOpen: boolean;
  isMissoesOpen: boolean;
  isConteudoOpen: boolean;
  isClosing: boolean;
  // --- FIX IS HERE ---
  // Allow all refs to be 'null'
  navRef: RefObject<HTMLDivElement | null>;
  igrejaMenuRef: RefObject<HTMLDivElement | null>;
  missoesMenuRef: RefObject<HTMLDivElement | null>;
  conteudoMenuRef: RefObject<HTMLDivElement | null>;
  // -------------------
  setIsOpen: (open: boolean) => void;
  setIsIgrejaOpen: (open: boolean) => void;
  setIsMissoesOpen: (open: boolean) => void;
  setIsConteudoOpen: (open: boolean) => void;
  handleCloseMenu: () => void;
}

// --- SUBCOMPONENT PROPS ---

export interface DesktopNavProps {
  data: NavbarData;
  handlers: NavbarMenuHandlers;
  className: string;
}

export interface MobileNavProps {
  data: NavbarData;
  handlers: NavbarMenuHandlers;
  className: string;
}
