import clsx from "clsx";
import Image from "next/image";
type LogoProps = {
  className: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo/Batista_Reviver-Logo_Sticker_2026_png35.png"
      alt="Logo"
      width={2160}
      height={520}
      className={clsx(className)}
    />
  );
}
