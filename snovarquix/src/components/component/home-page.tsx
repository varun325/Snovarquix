import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { CardContent, Card } from "@/components/ui/card";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { JSX, SVGProps } from "react";

export function HomePage() {
  return (
    <div key="1" className="flex flex-col min-h-screen">
      <header className="flex h-14 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="left">
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              <DropdownMenuItem>Action</DropdownMenuItem>
              <DropdownMenuItem>Comedy</DropdownMenuItem>
              <DropdownMenuItem>Drama</DropdownMenuItem>
              <DropdownMenuItem>Horror</DropdownMenuItem>
              <DropdownMenuItem>Romance</DropdownMenuItem>
              <DropdownMenuItem>Sci-Fi</DropdownMenuItem>
              <DropdownMenuItem>Thriller</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                <GlobeIcon className="h-6 w-6" />
                <span className="sr-only">Toggle language menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="left">
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>German</DropdownMenuItem>
              <DropdownMenuItem>Italian</DropdownMenuItem>
              <DropdownMenuItem>Japanese</DropdownMenuItem>
              <DropdownMenuItem>Chinese</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-4">
          <form className="flex lg:flex">
            <Input
              className="max-w-[300px] flex-1"
              placeholder="Search movies..."
              type="search"
            />
          </form>
          <Button className="lg:hidden" size="icon" variant="outline">
            <SearchIcon className="h-6 w-6" />
            <span className="sr-only">Search</span>
          </Button>
          <Switch className="mr-4" id="theme-switch">
            <div className="sr-only">Toggle Theme</div>
            <div className="h-4 w-4" />
            <div className="h-4 w-4" />
          </Switch>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <UserIcon className="h-6 w-6" />
                <span className="sr-only">Profile</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6 justify-start">
                <Link
                  className="group grid h-auto w-full justify-start gap-1"
                  href="#"
                >
                  <SettingsIcon className="h-6 w-6" />
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Settings
                  </div>
                </Link>
                <Link
                  className="group grid h-auto w-full justify-start gap-1"
                  href="#"
                >
                  <BarChartIcon className="h-6 w-6" />
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Bar Charts
                  </div>
                </Link>
                <Link
                  className="group grid h-auto w-full justify-start gap-1"
                  href="#"
                >
                  <LogOutIcon className="h-6 w-6" />
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Logout
                  </div>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-36 bg-gray-200">
          <div className="container grid items-center justify-start gap-4 px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="flex flex-col gap-2 min-[400px]:flex-col">
                <Button>Play</Button>
                <Button variant="outline">More Info</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-6 md:py-12 lg:py-16">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Trending Movies
              </h2>
            </div>
            <Carousel className="w-full max-w-4xl">
              <CarouselContent>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="group">
                    <CardContent className="p-4">
                      <img
                        alt="Movie"
                        className="aspect-video overflow-hidden rounded-lg object-cover object-center w-full h-auto"
                        height="400"
                        src="/placeholder.svg"
                        width="300"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold">Movie Title</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Movie Description
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="group">
                    <CardContent className="p-4">
                      <img
                        alt="Movie"
                        className="aspect-video overflow-hidden rounded-lg object-cover object-center w-full h-auto"
                        height="400"
                        src="/placeholder.svg"
                        width="300"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold">Movie Title</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Movie Description
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="group">
                    <CardContent className="p-4">
                      <img
                        alt="Movie"
                        className="aspect-video overflow-hidden rounded-lg object-cover object-center w-full h-auto"
                        height="400"
                        src="/placeholder.svg"
                        width="300"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold">Movie Title</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Movie Description
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="group">
                    <CardContent className="p-4">
                      <img
                        alt="Movie"
                        className="aspect-video overflow-hidden rounded-lg object-cover object-center w-full h-auto"
                        height="400"
                        src="/placeholder.svg"
                        width="300"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold">Movie Title</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Movie Description
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="group">
                    <CardContent className="p-4">
                      <img
                        alt="Movie"
                        className="aspect-video overflow-hidden rounded-lg object-cover object-center w-full h-auto"
                        height="400"
                        src="/placeholder.svg"
                        width="300"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold">Movie Title</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Movie Description
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function GlobeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UserIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function SettingsIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function BarChartIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function LogOutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}
