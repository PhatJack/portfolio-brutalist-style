import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface HighLightTextProps {
  text: string;
  link?: string;
  target?: "_blank" | "_self";
  className?: string;
  backgroundColor?:
    | "red"
    | "blue"
    | "yellow"
    | "purple"
    | "green"
    | "orange"
    | "pink"
    | "teal";
}

const HighLightText = (props: HighLightTextProps) => {
  const {
    text,
    link,
    className = "",
    backgroundColor,
    target = "_blank",
  } = props;

  const baseClassname = "px-1";

  const getBgColorClass = (color?: string) => {
    switch (color) {
      // Bauhaus primary colors
      case "red":
        return "bg-bauhaus-red";
      case "blue":
        return "bg-bauhaus-blue";
      case "yellow":
        return "bg-bauhaus-yellow";
      // Brutalist secondary colors
      case "purple":
        return "bg-brutalist-purple";
      case "green":
        return "bg-brutalist-green";
      case "orange":
        return "bg-brutalist-orange";
      case "pink":
        return "bg-brutalist-pink";
      case "teal":
        return "bg-brutalist-teal";
      default:
        return "";
    }
  };

  if (link) {
    return (
      <Link
        href={link}
        target={target}
        className={cn(
          baseClassname,
          getBgColorClass(backgroundColor),
          className,
          "no-underline"
        )}
      >
        {text}
      </Link>
    );
  }

  return (
    <span
      className={cn(baseClassname, getBgColorClass(backgroundColor), className)}
    >
      {text}
    </span>
  );
};

export default HighLightText;
