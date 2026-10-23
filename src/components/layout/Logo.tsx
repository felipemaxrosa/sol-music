import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  width = 40,
  height = 40,
  priority = false,
}: {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="SolMusic — início"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src="/logo.jpg"
        alt="SolMusic Instrumentos Musicais"
        width={width}
        height={height}
        priority={priority}
        className="rounded-xl"
      />
    </Link>
  );
}
