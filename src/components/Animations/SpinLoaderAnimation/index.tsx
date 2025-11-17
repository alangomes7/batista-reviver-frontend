"use client";

import clsx from "clsx";
import { AnimationProps } from "../types";
import AnimatedJson from "../../AnimatedJson";

export default function SpinLoaderAnimation({
  className = "",
}: AnimationProps) {
  return (
    <AnimatedJson
      path="/animations/Spin-Loading-colors.json"
      className={clsx(className)}
    />
  );
}
