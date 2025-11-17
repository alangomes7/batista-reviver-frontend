"use client";

import clsx from "clsx";
import { AnimationProps } from "../types";
import AnimatedJson from "../../AnimatedJson";

export default function NotFoundAnimation({ className = "" }: AnimationProps) {
  return (
    <AnimatedJson
      path="/animations/Error-Fail-animation.json"
      className={clsx(className)}
    />
  );
}
