import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
  src="/icons/auth-image.png"
  alt="Auth image"
  width={1000}
  height={1000}
  className="w-full h-[400px] rounded-l-xl"
/>
        </div>
      </div>
    </main>
  );
}
