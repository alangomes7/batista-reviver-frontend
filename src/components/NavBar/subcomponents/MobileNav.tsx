import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { MobileNavProps } from "../types";
import { useRouter } from "next/navigation";
import Logo from "../../Logo";
import clsx from "clsx";

export const MobileNav = ({ data, handlers, className }: MobileNavProps) => {
  const router = useRouter();
  const { mounted, pathname, activeStates, linkClasses } = data;
  const {
    isOpen,
    isClosing,
    isIgrejaOpen,
    isMissoesOpen,
    isConteudoOpen,
    igrejaMenuRef,
    missoesMenuRef,
    conteudoMenuRef,
    setIsOpen,
    setIsIgrejaOpen,
    setIsMissoesOpen,
    setIsConteudoOpen,
    handleCloseMenu,
  } = handlers;

  const { isIgrejaActive, isMissoesActive, isConteudoActive } = activeStates;
  const { menuItemClass, activeMenuItemClass } = linkClasses;

  const mainLinkStyle =
    "w-full text-left font-medium px-4 py-3 transition-colors duration-150";

  const getLinkClasses = (isActive: boolean) => {
    return isActive
      ? "bg-muted text-primary border-primary/40"
      : "text-muted-foreground hover:bg-muted hover:text-foreground";
  };

  // Submenu wrapper animation — slide down + fade
  const submenuClass =
    "pl-4 space-y-1 animate-dropdown-in origin-top overflow-hidden";

  return (
    <>
      <div className={clsx(className)}>
        {/* CENTER: LOGO */}
        <div className="">
          <Link href="/">
            <Logo className={clsx("h-8 w-auto", "mt-1 mb-1")} />
          </Link>
        </div>

        {/* RIGHT: HAMBURGER BUTTON */}
        <div className="absolute right-1 top-1 mt-1 mb-1 flex items-center justify-center">
          {!mounted ? (
            // placeholder to prevent layout shift
            <div className="h-6 w-6" />
          ) : (
            <button
              onClick={() => (isOpen ? handleCloseMenu() : setIsOpen(true))}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Drawer */}
      {mounted && (isOpen || isClosing) && (
        <div
          className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-xs flex justify-end ${
            isClosing ? "animate-fade-out" : "animate-fade-in"
          }`}
        >
          <div className="flex-1" onClick={handleCloseMenu} />

          <div
            className={`w-3/4 sm:w-2/5 h-full bg-background border-l border-border shadow-xl p-4 space-y-3 overflow-y-auto ${
              isClosing ? "animate-slide-out" : "animate-slide-in"
            }`}
          >
            {/* ---------------- 1. IGREJA ---------------- */}
            <div ref={igrejaMenuRef} className="border-b border-border pb-1">
              <button
                onClick={() => setIsIgrejaOpen(!isIgrejaOpen)}
                className={`${mainLinkStyle} ${getLinkClasses(isIgrejaActive)}`}
              >
                A Igreja
              </button>

              {isIgrejaOpen && (
                <div className={submenuClass}>
                  <Link
                    href="/igreja/trilha-reviver"
                    className={
                      pathname === "/igreja/trilha-reviver"
                        ? activeMenuItemClass
                        : menuItemClass
                    }
                    onClick={handleCloseMenu}
                  >
                    Trilha Reviver
                  </Link>

                  <Link
                    href="/igreja/quem-somos"
                    className={
                      pathname === "/igreja/quem-somos"
                        ? activeMenuItemClass
                        : menuItemClass
                    }
                    onClick={handleCloseMenu}
                  >
                    Quem somos
                  </Link>

                  <Link
                    href="/igreja/ministerios"
                    className={
                      pathname === "/igreja/ministerios"
                        ? activeMenuItemClass
                        : menuItemClass
                    }
                    onClick={handleCloseMenu}
                  >
                    Ministérios
                  </Link>

                  <Link
                    href="/igreja/visao-fe-cruz"
                    className={
                      pathname === "/igreja/visao-fe-cruz"
                        ? activeMenuItemClass
                        : menuItemClass
                    }
                    onClick={handleCloseMenu}
                  >
                    Visão, fé e cruz
                  </Link>
                </div>
              )}
            </div>
            {/* ---------------- 2. PROGRAMAÇÃO ---------------- */}
            <div className="border-b border-border pb-1 overflow-visible">
              <button
                className={`${mainLinkStyle} ${getLinkClasses(
                  pathname.startsWith("/programacao")
                )}`}
                onClick={() => {
                  router.push("/programacao");
                  handleCloseMenu();
                }}
              >
                Programação
              </button>
            </div>
            {/* ---------------- 3. MISSÕES ---------------- */}
            <div ref={missoesMenuRef} className="border-b border-border pb-1">
              <button
                onClick={() => setIsMissoesOpen(!isMissoesOpen)}
                className={`${mainLinkStyle} ${getLinkClasses(
                  isMissoesActive
                )}`}
              >
                Missões
              </button>

              {isMissoesOpen && (
                <div className={submenuClass}>
                  <Link
                    href="/missoes/celulas"
                    className={
                      pathname === "/missoes/celulas"
                        ? activeMenuItemClass
                        : menuItemClass
                    }
                    onClick={handleCloseMenu}
                  >
                    Células
                  </Link>

                  <Link
                    href="/missoes/uma-nova-chance"
                    className={
                      pathname === "/missoes/uma-nova-chance"
                        ? activeMenuItemClass
                        : menuItemClass
                    }
                    onClick={handleCloseMenu}
                  >
                    Uma Nova Chance
                  </Link>

                  <Link
                    href="/missoes/encontro-com-deus"
                    className={
                      pathname === "/missoes/encontro-com-deus"
                        ? activeMenuItemClass
                        : menuItemClass
                    }
                    onClick={handleCloseMenu}
                  >
                    Encontro com Deus
                  </Link>
                </div>
              )}
            </div>
            {/* ---------------- 4. CONTRIBUIÇÃO ---------------- */}
            <div className="border-b border-border pb-1 overflow-visible">
              <button
                className={`${mainLinkStyle} ${getLinkClasses(
                  pathname.startsWith("/contribuicao")
                )}`}
                onClick={() => {
                  router.push("/contribuicao");
                  handleCloseMenu();
                }}
              >
                Contribuição
              </button>
            </div>

            {/* ---------------- 5. CONTEÚDO ---------------- */}
            <div ref={conteudoMenuRef} className="border-b border-border pb-1">
              <button
                onClick={() => setIsConteudoOpen(!isConteudoOpen)}
                className={`${mainLinkStyle} ${getLinkClasses(
                  isConteudoActive
                )}`}
              >
                Conteúdo
              </button>

              {isConteudoOpen && (
                <div className={submenuClass}>
                  <Link
                    href="/conteudo/estudo-semanal"
                    className={
                      pathname === "/conteudo/estudo-semanal"
                        ? activeMenuItemClass
                        : menuItemClass
                    }
                    onClick={handleCloseMenu}
                  >
                    Estudo semanal
                  </Link>

                  <Link
                    href="/conteudo/midias"
                    className={
                      pathname === "/conteudo/midias"
                        ? activeMenuItemClass
                        : menuItemClass
                    }
                    onClick={handleCloseMenu}
                  >
                    Mídias
                  </Link>
                </div>
              )}
            </div>
            {/* ---------------- 6. LOJA ---------------- */}
            <div className="border-border pb-1">
              <a
                href="https://store.igbatistareviver.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${mainLinkStyle} text-muted-foreground hover:bg-muted hover:text-foreground`}
                onClick={handleCloseMenu}
              >
                Loja Use Reviver
              </a>{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
