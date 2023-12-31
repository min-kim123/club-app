'use client'
import NavBar from "./NavBar";
import { usePathname } from 'next/navigation'

export default function Layout() {
  const pathname = usePathname();

  return (
    <div>
      {pathname !== '/' && pathname !== '/sign-up' && <NavBar/>}
    </div>
  )
}