import Link from "next/link";
import { Facebook, Instagram, Youtube, MapPin, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    icon: Facebook,
    title: "Facebook",
    href: "https://www.facebook.com/batistareviver.tg",
  },
  {
    icon: Instagram,
    title: "Instagram",
    href: "https://www.instagram.com/batistareviver.tg/",
  },
  {
    icon: Youtube,
    title: "YouTube",
    href: "https://www.youtube.com/@igreviver",
  },
];

const contactLinks = [
  {
    icon: MapPin,
    title: "Endereço",
    text: "Rua Av. Dulce Lopes Garcia, 980 - Centro, Tanguá - RJ",
    href: "https://maps.app.goo.gl/7n6tHRhpt8akXrWKA",
  },
  // {
  //   icon: Phone,
  //   title: "Telefone",
  //   text: "+55 (21) 99999-9999",
  //   href: "tel:+5521999999999",
  // },
];

/**
 * A responsive 3-column footer for the website.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const FooterLink = ({
    href,
    icon: Icon,
    title,
    text,
  }: {
    href: string;
    icon: React.ElementType;
    title: string;
    text?: string;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 group text-muted-foreground hover:text-foreground transition-colors"
    >
      <Icon className="w-5 h-5 shrink-0" />
      <div className="flex flex-col">
        <span className="font-medium text-foreground group-hover:underline">
          {title}
        </span>
        {text && <span className="text-sm">{text}</span>}
      </div>
    </a>
  );

  return (
    <footer className={cn("w-full bg-background border-t border-border mt-16")}>
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* === [COLUMN 1: LOGO] === */}
          <div className="flex flex-col space-y-4 justify-center items-center">
            <Link href="/" aria-label="Voltar para a página inicial">
              <Logo className="h-20 w-auto" />
            </Link>
            <div className="text-sm text-muted-foreground text-center whitespace-nowrap">
              <p>Batista Reviver &copy; {currentYear}.</p>
              <p>Todos os direitos reservados.</p>
            </div>
          </div>

          {/* === [COLUMN 2: LINKS] === */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Links</h3>
            <div className="space-y-3 whitespace-nowrap text-sm">
              {contactLinks.map((link) => (
                <FooterLink
                  key={link.title}
                  href={link.href}
                  icon={link.icon}
                  title={link.title}
                  text={link.text}
                />
              ))}
            </div>
          </div>

          {/* === [COLUMN 3: SOCIAL NETWORK] === */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-lg">
              Mídias Sociais
            </h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <FooterLink
                  key={link.title}
                  href={link.href}
                  icon={link.icon}
                  title={link.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
