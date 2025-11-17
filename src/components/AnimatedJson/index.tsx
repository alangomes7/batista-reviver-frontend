import { useEffect, useState } from "react";
import clsx from "clsx";
import Lottie from "lottie-react";

type AnimatedJsonProps =
  | {
      jsonData: object;
      path?: never;
    }
  | {
      jsonData?: never;
      path: string;
    };

export default function AnimatedJson({
  className = "w-12 h-12",
  jsonData,
  path,
}: AnimatedJsonProps & { className?: string }) {
  const [animationData, setAnimationData] = useState<object | null>(
    jsonData ?? null
  );

  useEffect(() => {
    if (jsonData) {
      setAnimationData(jsonData);
      return;
    }

    let mounted = true;
    async function load(url: string) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch Lottie: ${res.status}`);
        const data = await res.json();
        if (mounted) setAnimationData(data);
      } catch (err) {
        console.error(`Lottie load error (${url}):`, err);
      }
    }

    if (path) {
      load(path);
    } else {
      setAnimationData(null);
    }

    return () => {
      mounted = false;
    };
  }, [jsonData, path]);

  return (
    <div className={clsx("flex items-center justify-center", className)}>
      {animationData && (
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
