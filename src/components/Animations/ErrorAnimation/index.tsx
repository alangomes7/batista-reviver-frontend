"use client";

import clsx from "clsx";
import { AnimationProps } from "../types";
import AnimatedJson from "../../AnimatedJson";

export default function ErrorAnimation({ className = "" }: AnimationProps) {
  return (
    <AnimatedJson
      path="/animations/Error-animation.json"
      className={clsx(className)}
    />
  );
}
