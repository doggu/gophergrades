import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function Card({
  children,
  href = "",
  style,
  isSummary,
  ...props
}) {
  const extraStyles = style || {};
  const hoverStyles = href
    ? {
        cursor: "pointer",
        boxShadow: "0px 0px 4px rgba(111, 19, 29, 0.175)",
        background: "rgba(255,255,255,0.95)",
        transition: "opacity 0.1s",
      }
    : {};

  const summaryStyles = isSummary
    ? {
        background: "rgba(255,255,255,0.85)",
        boxShadow: "0px 0px 6px rgba(111, 19, 29, 0.175)",
        padding: "36px 20px",
      }
    : {};
  const card = (
    <Box
      background={"rgba(255,255,255,0.35)"}
      boxShadow={"0px 0px 4px rgba(111, 19, 29, 0.1)"}
      style={{
        borderRadius: 8,
        width: "100%",
        padding: "12px 20px",
        backdropFilter: "blur(10px)",
        ...summaryStyles,
        ...extraStyles,
      }}
      _hover={hoverStyles}
      {...props}
    >
      {children}
    </Box>
  );

  if (href)
    return (
      <Link
        href={href}
        style={{
          width: "100%",
        }}
      >
        {card}
      </Link>
    );
  return card;
}