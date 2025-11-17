"use client";

import { useRouter } from "next/navigation";
import clsx from "clsx";
import ErrorLayout from "../components/ErrorLayout";
import { NotFoundAnimation } from "../components/Animations";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <ErrorLayout
      title="404"
      subtitle="The page you are trying to access does not exist on this website."
      animation={<NotFoundAnimation />}
      animationSize={{ width: 256, height: 256 }}
      actions={
        <>
          <button
            onClick={() => router.back()}
            className={clsx(
              "inline-block",
              "px-4 py-2 rounded-lg font-semibold",
              "bg-primary text-primary-foreground",
              "hover:bg-primary/90 transition"
            )}
          >
            Go Back
          </button>

          {/* Outline Button — uses theme 'border' + foreground */}
          <button
            onClick={() => router.push("/")}
            className={clsx(
              "inline-block",
              "px-4 py-2 rounded-lg font-semibold",
              "border border-border text-foreground",
              "hover:bg-muted transition"
            )}
          >
            Go Home
          </button>
        </>
      }
    />
  );
}
