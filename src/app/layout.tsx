import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NLW Connect - React',
  description: 'Next app built with NLW Connect mini-course',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
