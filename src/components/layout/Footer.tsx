import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold">RentalVista</p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} RentalVista. All rights
              reserved.{" "}
              <span >
                Developed by{" "}
                <a className="underline" target="_blank" href="https://sabbirmms.github.io">Sabbir MMS.</a>
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://twitter.com/sabbirmms"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https:github.com/sabbirmms"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/sabbirmms"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
