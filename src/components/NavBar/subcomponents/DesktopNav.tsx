import Link from "next/link";
import { DesktopNavProps, navLinksPages } from "../types";
import clsx from "clsx";
import Logo from "../../Logo";

export const DesktopNav = ({ data, handlers, className }: DesktopNavProps) => {
  const { isMobile, pathname, activeStates, linkClasses } = data;
  const {
    isIgrejaOpen,
    isMissoesOpen,
    isConteudoOpen,
    igrejaMenuRef,
    missoesMenuRef,
    conteudoMenuRef,
    setIsIgrejaOpen,
    setIsMissoesOpen,
    setIsConteudoOpen,
  } = handlers;

  const { isIgrejaActive, isMissoesActive, isConteudoActive } = activeStates;
  const {
    navLinkClass,
    menuItemClass,
    activeNavLinkClass,
    activeMenuItemClass,
  } = linkClasses;

  return (
    <>
      {/* Desktop Menu */}
      <div className={clsx(className)}>
        {/* --- Logo --- */}
        <Link href="/">
          <Logo className="h-10 w-auto" />
        </Link>
        {/* --- A Igreja Dropdown --- */}
        <div
          ref={igrejaMenuRef}
          className="relative"
          onMouseEnter={() => !isMobile && setIsIgrejaOpen(true)}
          onMouseLeave={() => !isMobile && setIsIgrejaOpen(false)}
        >
          <button
            onClick={() => isMobile && setIsIgrejaOpen(!isIgrejaOpen)}
            className={`${
              isIgrejaActive ? activeNavLinkClass : navLinkClass
            } w-full`}
          >
            A Igreja
          </button>
          {isIgrejaOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 w-56 bg-popover text-popover-foreground border border-border rounded-md shadow-lg py-1 p-1 z-50 animate-dropdown-in">
              <Link
                href={navLinksPages.not_found}
                className={
                  pathname === "/igreja/trilha-reviver"
                    ? activeMenuItemClass
                    : menuItemClass
                }
              >
                Trilha Reviver
              </Link>
              <Link
                href={navLinksPages.igreja_quem_somos}
                className={
                  pathname === navLinksPages.igreja_quem_somos
                    ? activeMenuItemClass
                    : menuItemClass
                }
              >
                Quem somos
              </Link>
              <Link
                href={navLinksPages.not_found}
                className={
                  pathname === "/igreja/ministerios"
                    ? activeMenuItemClass
                    : menuItemClass
                }
              >
                Ministérios
              </Link>
              <Link
                href={navLinksPages.igreja_visao}
                className={
                  pathname === navLinksPages.igreja_visao
                    ? activeMenuItemClass
                    : menuItemClass
                }
              >
                Visão, fé e cruz
              </Link>
            </div>
          )}
        </div>

        <Link
          href={navLinksPages.not_found}
          className={
            pathname.startsWith("/programacao")
              ? activeNavLinkClass
              : navLinkClass
          }
        >
          Programação
        </Link>

        {/* --- Missões Dropdown --- */}
        <div
          ref={missoesMenuRef}
          className="relative"
          onMouseEnter={() => !isMobile && setIsMissoesOpen(true)}
          onMouseLeave={() => !isMobile && setIsMissoesOpen(false)}
        >
          <button
            onClick={() => isMobile && setIsMissoesOpen(!isMissoesOpen)}
            className={`${
              isMissoesActive ? activeNavLinkClass : navLinkClass
            } w-full`}
          >
            Missões
          </button>
          {isMissoesOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 w-56 bg-popover text-popover-foreground border border-border rounded-md shadow-lg py-1 p-1 z-50 animate-dropdown-in">
              <Link
                href={navLinksPages.not_found}
                className={
                  pathname === "/missoes/celulas"
                    ? activeMenuItemClass
                    : menuItemClass
                }
              >
                Células
              </Link>
              <Link
                href={navLinksPages.not_found}
                className={
                  pathname === "/missoes/uma-nova-chance"
                    ? activeMenuItemClass
                    : menuItemClass
                }
              >
                Uma Nova Chance
              </Link>
              <Link
                href={navLinksPages.not_found}
                className={
                  pathname === "/missoes/encontro-com-deus"
                    ? activeMenuItemClass
                    : menuItemClass
                }
              >
                Encontro com Deus
              </Link>
            </div>
          )}
        </div>

        <Link
          href={navLinksPages.not_found}
          className={
            pathname.startsWith("/contribuicao")
              ? activeNavLinkClass
              : navLinkClass
          }
        >
          Contribuição
        </Link>

        {/* --- Conteúdo Dropdown --- */}
        <div
          ref={conteudoMenuRef}
          className="relative"
          onMouseEnter={() => !isMobile && setIsConteudoOpen(true)}
          onMouseLeave={() => !isMobile && setIsConteudoOpen(false)}
        >
          <button
            onClick={() => isMobile && setIsConteudoOpen(!isConteudoOpen)}
            className={`${
              isConteudoActive ? activeNavLinkClass : navLinkClass
            } w-full`}
          >
            Conteúdo
          </button>
          {isConteudoOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 w-56 bg-popover text-popover-foreground border border-border rounded-md shadow-lg py-1 p-1 z-50 animate-dropdown-in">
              <Link
                href={navLinksPages.not_found}
                className={
                  pathname === "/conteudo/estudo-semanal"
                    ? activeMenuItemClass
                    : menuItemClass
                }
              >
                Estudo semanal
              </Link>
              <Link
                href={navLinksPages.not_found}
                className={
                  pathname === "/conteudo/midias"
                    ? activeMenuItemClass
                    : menuItemClass
                }
              >
                Mídias
              </Link>
            </div>
          )}
        </div>
        <a
          href="https://store.igbatistareviver.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className={navLinkClass}
        >
          Loja Use Reviver
        </a>
      </div>
    </>
  );
};
