"use client";

import clsx from "clsx";
import { AnimationProps } from "../types";
import AnimatedJson from "../../AnimatedJson";

export default function DotsAnimation({ className = "" }: AnimationProps) {
  return (
    <AnimatedJson
      path="/animations/Dots-Loading.json"
      className={clsx(className)}
    />
  );
}
