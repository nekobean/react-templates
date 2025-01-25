import React from "react";
import { cn } from "./utils";

export interface TextProps {
  indent: string;
}

export const Text: React.FC<TextProps> = ({ indent, ...props }) => {
  return (
    <div className="max-w-[300px] border-gray-300 bg-red-300">
      <p className={cn(indent)} {...props}>
        So I started to walk into the water. I won't lie to you boys, I was
        terrified. But I pressed on, and as I made my way past the breakers a
        strange calm came over me. I don't know if it was divine intervention or
        the kinship of all living things but I tell you Jerry at that moment, I{" "}
        <em>was</em> a marine biologist.
      </p>
    </div>
  );
};
