import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"

export default function Header({ currentUser }) {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-2 py-6">
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Account
              </Link>
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Something 
              </Link>
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Something
              </Link>
              <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="#" className="mr-6 hidden lg:flex items-center" prefetch={false}>
    <TicketIcon className="w-9 h-9"/>
    <span className="font-bold text-lg flex items-center">TicketMart</span>
</Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                About
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Services
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Portfolio
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                prefetch={false}
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex gap-2">
            { !currentUser?.email ? 
            <>
            <Link href='/auth/signin'>
                <Button  variant="outline">Sign In</Button>
            </Link>
            <Link href='/auth/signup'>
                <Button>Sign Up</Button>
            </Link>
            </>
            :
            <Link href='/auth/signout'>
                <Button>Sign Out</Button>
            </Link>
            }
        </div>
      </header>
    </div>
  )
}

function MenuIcon(props) {
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
  )
}

function TicketIcon(props) {
    return (
        <svg
        {...props} 
        viewBox="0 0 1024 1024" 
        className="w-9 h-9" 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="#000000">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path 
            d="M840.9 100.9L744 866.4c-1.9 15.4-16 26.2-31.3 24.3l-370.2-46.9c-15.4-1.9-26.2-16-24.3-31.3l96.9-765.6c1.9-15.4 16-26.2 31.3-24.3l370.2 46.9c15.4 2 26.2 16 24.3 31.4z" 
            fill="#B6CDEF">
          </path>
          <path 
            d="M716.2 905.9c-1.8 0-3.7-0.1-5.5-0.3l-370.2-46.9c-11.4-1.4-21.6-7.2-28.6-16.3-7-9.1-10.1-20.4-8.7-31.8L400.1 45c3-23.5 24.6-40.3 48.1-37.3l370.2 46.9c23.5 3 40.3 24.6 37.3 48.1l-96.9 765.6c-1.4 11.4-7.2 21.6-16.3 28.6-7.6 5.9-16.8 9-26.3 9zM442.9 37.4c-6.5 0-12.1 4.8-12.9 11.4l-97 765.6c-0.4 3.5 0.5 6.9 2.6 9.6 2.1 2.8 5.2 4.5 8.7 4.9l370.2 46.9c3.4 0.4 6.9-0.5 9.6-2.6 2.8-2.1 4.5-5.2 4.9-8.7L826 99c0.9-7.1-4.2-13.7-11.3-14.6L444.6 37.5c-0.6 0-1.1-0.1-1.7-0.1z" 
            fill="#0F53A8">
          </path>
          <path 
            d="M599.8 144.7l88.7 766.6c1.8 15.4-9.2 29.3-24.6 31.1l-370.7 42.9c-15.4 1.8-29.3-9.2-31.1-24.6l-88.7-766.6c-1.8-15.4 9.2-29.3 24.6-31.1l370.7-42.9c15.4-1.8 29.3 9.3 31.1 24.6z" 
            fill="#B6CDEF">
          </path>
          <path 
            d="M290 1000.5c-21.5 0-40.2-16.2-42.7-38.1l-88.7-766.6c-2.7-23.6 14.2-45 37.8-47.7L567 105.2c23.6-2.7 45 14.2 47.7 37.8l88.7 766.6c2.7 23.6-14.2 45-37.8 47.7l-370.7 42.9c-1.6 0.2-3.3 0.3-4.9 0.3zm281.9-865.6c-0.5 0-1 0-1.5 0.1l-370.7 42.9c-3.5 0.4-6.6 2.1-8.7 4.9s-3.1 6.1-2.7 9.6L277 958.9c0.8 7.1 7.3 12.3 14.4 11.4l370.7-42.9c7.1-0.8 12.3-7.3 11.4-14.4l-88.7-766.6c-0.7-6.6-6.4-11.5-12.9-11.5z" 
            fill="#0F53A8">
          </path>
          <path 
            d="M482 788.9l10.9 94.1c1.8 15.4-9.2 29.3-24.6 31.1L374.2 925c-15.4 1.8-29.3-9.2-31.1-24.6l-10.9-94.1c-1.8-15.4 9.2-29.3 24.6-31.1l94.1-10.9c15.4-1.8 29.4 9.2 31.1 24.6z" 
            fill="#89B7F5">
          </path>
          <path 
            d="M370.9 940.2c-21.5 0-40.2-16.2-42.7-38.1L317.3 808c-2.7-23.6 14.2-45 37.8-47.7l94.1-10.9c23.6-2.7 45 14.2 47.7 37.8l10.9 94.1c2.7 23.6-14.2 45-37.8 47.7l-94.1 10.9c-1.7 0.2-3.3 0.3-5 0.3zm83.3-161.1c-0.5 0-1 0-1.5 0.1l-94.1 10.9c-7.1 0.8-12.3 7.3-11.4 14.4l10.9 94.1c0.8 7.1 7.3 12.3 14.4 11.4l94.1-10.9c7.1-0.8 12.3-7.3 11.4-14.4l-10.9-94.1c-0.7-6.6-6.4-11.5-12.9-11.5z" 
            fill="#0F53A8">
          </path>
          <path 
            d="M328.7 715.3c-7.5 0-14-5.6-14.9-13.3l-28.2-243.6c-1-8.2 4.9-15.7 13.2-16.6 8.2-1 15.7 4.9 16.6 13.2l28.2 243.6c1 8.2-4.9 15.7-13.2 16.6-0.5 0.1-1.1 0.1-1.7 0.1zM393 717.1c-7.5 0-14-5.6-14.9-13.3L340.7 381c-1-8.2 4.9-15.7 13.2-16.6 8.2-1 15.7 4.9 16.6 13.2l37.4 322.8c1 8.2-4.9 15.7-13.2 16.6-0.6 0.1-1.1 0.1-1.7 0.1zM462.3 709.1c-7.5 0-14-5.6-14.9-13.3l-23.3-201c-1-8.2 4.9-15.7 13.2-16.6 8.2-1 15.7 4.9 16.6 13.2l23.3 201c1 8.2-4.9 15.7-13.2 16.6-0.6 0.1-1.2 0.1-1.7 0.1z" 
            fill="#0F53A8">
          </path>
          <path 
            d="M234.9 250.1c-7.5 0-14-5.6-14.9-13.3-1-8.2 4.9-15.7 13.2-16.6l45.2-5.2c8.2-1 15.7 4.9 16.6 13.2s-4.9 15.7-13.2 16.6l-45.2 5.2c-0.5 0.1-1.1 0.1-1.7 0.1zM324.6 239.8c-7.5 0-14-5.6-14.9-13.3-1-8.2 4.9-15.7 13.2-16.6l45.2-5.2c8.2-1 15.7 4.9 16.6 13.2 1 8.2-4.9 15.7-13.2 16.6l-45.2 5.2c-0.5 0-1.1 0.1-1.7 0.1zM414.3 229.4c-7.5 0-14-5.6-14.9-13.3-1-8.2 4.9-15.7 13.2-16.6l45.2-5.2c8.2-1 15.7 4.9 16.6 13.2 1 8.2-4.9 15.7-13.2 16.6l-45.2 5.2c-0.5 0-1.1 0.1-1.7 0.1zM504 219c-7.5 0-14-5.6-14.9-13.3-1-8.2 4.9-15.7 13.2-16.6l45.2-5.2c8.2-0.9 15.7 4.9 16.6 13.2 1 8.2-4.9 15.7-13.2 16.6l-45.2 5.2c-0.6 0.1-1.1 0.1-1.7 0.1z" 
            fill="#0F53A8">
          </path>
        </g>
      </svg>
    );
  }
  


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}