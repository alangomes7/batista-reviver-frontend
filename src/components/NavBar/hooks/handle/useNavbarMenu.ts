import { useState, useRef, useCallback, useEffect } from "react";
import { NavbarMenuHandlers } from "../../types";

const ANIMATION_DURATION = 500;

export const useNavbarMenu = (mounted: boolean): NavbarMenuHandlers => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIgrejaOpen, setIsIgrejaOpen] = useState(false);
  const [isMissoesOpen, setIsMissoesOpen] = useState(false);
  const [isConteudoOpen, setIsConteudoOpen] = useState(false);

  // State for closing animation
  const [isClosing, setIsClosing] = useState(false);

  const igrejaMenuRef = useRef<HTMLDivElement>(null);
  const missoesMenuRef = useRef<HTMLDivElement>(null);
  const conteudoMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleCloseMenu = useCallback(() => {
    if (isClosing) return;

    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setIsIgrejaOpen(false);
      setIsMissoesOpen(false);
      setIsConteudoOpen(false);
    }, ANIMATION_DURATION);
  }, [isClosing]);

  // Handle click outside (for menus)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        igrejaMenuRef.current &&
        !igrejaMenuRef.current.contains(event.target as Node)
      ) {
        setIsIgrejaOpen(false);
      }
      if (
        missoesMenuRef.current &&
        !missoesMenuRef.current.contains(event.target as Node)
      ) {
        setIsMissoesOpen(false);
      }
      if (
        conteudoMenuRef.current &&
        !conteudoMenuRef.current.contains(event.target as Node)
      ) {
        setIsConteudoOpen(false);
      }
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        handleCloseMenu();
      }
    }

    if (mounted) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [mounted, isOpen, handleCloseMenu]);

  return {
    isOpen,
    isIgrejaOpen,
    isMissoesOpen,
    isConteudoOpen,
    isClosing,
    navRef,
    igrejaMenuRef,
    missoesMenuRef,
    conteudoMenuRef,
    setIsOpen,
    setIsIgrejaOpen,
    setIsMissoesOpen,
    setIsConteudoOpen,
    handleCloseMenu,
  };
};
