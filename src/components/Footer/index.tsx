import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="py-3 md:px-8 md:py-0 dark:bg-stone-950 bg-zinc-100">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by
            <Link
              href="https://zackzhang.dev"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 px-2"
            >
              Hongjie Zhang.
            </Link>
             The source code is available on
            <Link
              href="https://github.com/hongjie94/gpr"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 px-2"
            >
              GitHub.
            </Link>
            
          </p>
        </div>
      </footer>
    </>
  );
}
