import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
          <Image
            src="/rotary.svg"
            alt="Rotary Logo"
            width={180}
            height={38}
            priority
          /><h1>Club of Karur Central</h1>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Copyright &copy; 2025
      </footer>
    </div>
  );
}
