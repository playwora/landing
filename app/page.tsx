import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col justify-between p-8 lg:py-24 items-start">
        <div className="h-8" />
        <div className="flex flex-col items-start gap-2">
          <h1 className="max-w-x items-center flex text-2xl gap-2 font-medium leading-0 tracking-tight text-white">
            <Image
              className="-ml-2"
              src="/logo.png"
              alt="Next.js logo"
              width={36}
              height={36}
              priority
            />{" "}
            Wora
          </h1>
          <p className="max-w-md text-sm text-white opacity-70">
            An elegant lossless music player for your machine.
          </p>
        </div>
        <div className="flex gap-4 text-base font-medium items-center flex-row">
          <a
            className="flex h-8 w-fit items-center justify-center text-xs gap-2 rounded-2xl px-5 bg-white text-black  dark:hover:bg-[#ccc]"
            href="https://github.com/playwora/wora/releases/tag/v0.4.0-beta1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.png"
              className="invert"
              alt="wora logo"
              width={16}
              height={16}
            />
            Download
          </a>
          <p className="max-w-md text-xs text-white opacity-70 font-mono">
            v0.4.0 [Beta 1]
          </p>
        </div>
      </main>
    </div>
  );
}
