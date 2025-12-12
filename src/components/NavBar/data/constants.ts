export interface NavLink {
  label: string;
  href?: string;
  external?: boolean;
  landing?: boolean;
  subLinks?: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
  // --- A IGREJA ---
  {
    label: 'A Igreja',
    subLinks: [
      {
        href: '/igreja/trilha_reviver',
        label: 'Trilha Reviver',
        external: false,
        landing: true,
      },
      {
        href: '/igreja/quem_somos',
        label: 'Quem somos',
        external: false,
        landing: true,
      },
      {
        href: '/igreja/ministerios',
        label: 'Ministérios',
        external: false,
        landing: true,
      },
      {
        href: '/igreja/visao-fe-e-cruz',
        label: 'Visão, fé e cruz',
        external: false,
        landing: true,
      },
    ],
  },

  // --- PROGRAMAÇÃO ---
  {
    label: 'Programação',
    subLinks: [
      {
        href: '/programacao',
        label: 'Programação',
        external: false,
        landing: true,
      },
    ],
  },

  // --- MISSÕES ---
  {
    label: 'Missões',
    subLinks: [
      {
        href: '/missoes/celulas',
        label: 'Células',
        external: false,
        landing: true,
      },
      {
        href: '/missoes/nova_chance',
        label: 'Uma Nova Chance',
        external: false,
        landing: true,
      },
      {
        href: '/missoes/encontro_deus',
        label: 'Encontro com Deus',
        external: false,
        landing: true,
      },
    ],
  },

  // --- CONTRIBUIÇÃO ---
  {
    label: 'Contribuição',
    subLinks: [
      {
        href: '/contribuicao',
        label: 'Contribuição',
        external: false,
        landing: true,
      },
    ],
  },

  // --- CONTEÚDO ---
  {
    label: 'Conteúdo',
    subLinks: [
      {
        href: '/conteudo/estudo_semanal',
        label: 'Estudo semanal',
        external: false,
        landing: true,
      },
      {
        href: '/conteudo/midias',
        label: 'Mídias',
        external: false,
        landing: true,
      },
    ],
  },

  // --- LOJA ---
  {
    label: 'Loja',
    subLinks: [
      {
        href: 'https://store.igbatistareviver.com.br/',
        label: 'Loja Use Reviver',
        external: true,
        landing: false,
      },
    ],
  },
];

export const STYLES = {
  // Base Links
  navLink:
    'text-sm font-medium text-foreground/80 hover:text-foreground transition-all px-3 py-2 rounded-md hover:bg-foreground/5 flex items-center gap-1',
  activeNavLink:
    'text-sm font-medium text-primary font-semibold transition-all bg-primary/10 px-3 py-2 rounded-md flex items-center gap-1',

  // Mobile Items
  menuItem:
    'block px-4 py-3 text-sm text-foreground hover:bg-foreground/5 rounded-md w-full text-left flex justify-between items-center',
  activeMenuItem:
    'block px-4 py-3 text-sm text-primary bg-primary/10 rounded-md w-full text-left flex justify-between items-center',

  // Mobile Sub-items
  mobileSubLink:
    'block px-4 py-2 text-sm text-foreground/70 hover:text-foreground pl-8 border-l border-foreground/10 ml-4',
  mobileSubLinkActive:
    'block px-4 py-2 text-sm text-primary font-semibold pl-8 border-l-2 border-primary ml-4 bg-primary/5',

  // Desktop Dropdown
  dropdownTrigger: 'relative group cursor-pointer',
  dropdownContainer:
    'absolute top-full left-0 min-w-[200px] bg-background border border-border shadow-lg rounded-md overflow-hidden p-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0',
  dropdownItem:
    'block px-4 py-2 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-foreground rounded-sm',
  dropdownItemActive:
    'block px-4 py-2 text-sm text-primary bg-primary/5 font-semibold rounded-sm',
};
