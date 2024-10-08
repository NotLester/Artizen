import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const font = Space_Grotesk({
  weight: ["700"],
  subsets: ["latin"]
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2 hover:opacity-75 transition h-[68px] px-4">
        <div className="size-8 relative">
          <Image src="/logo.svg" alt="Artizen" fill />
        </div>
        <h1 className={cn(font.className, "text-xl font-bold")}>
          Artizen
        </h1>
      </div>
    </Link>
  );
};
