import type { Metadata } from "next";
import './globals.css';

import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';

import { auth } from '@/auth';
import { Modals } from '@/components/modals';
import { Providers } from '@/components/providers';
import { Toaster } from '@/components/ui/sonner';
import { SubscriptionAlert } from '@/features/subscriptions/components/subscription-alert';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artizen",
  description: "A quick platform for lazy nerds",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Toaster />
            <Modals />
            <SubscriptionAlert />
            {children}
          </Providers>
        </body>
      </html>
    </SessionProvider>
  );
}
