"use client";

import Link from "next/link";

type Props = {
  name: string;
  href: string;
};

export function ItemFooter({ name, href }: Props) {
  return (
    <li>
      <Link href={href} className="hover:underline">
        {name}
      </Link>
    </li>
  );
}
