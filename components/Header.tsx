'use client'
import Link from "next/link";
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GlobalConfig } from "@/app/app.config";

export function NavLink({href, text, className = ''} : {href: string, text: string, className? : string})
{
    const pathname = usePathname();
    return(
        <NavbarItem>
            <Link href={href} className={className + " font-bold" + ` ${pathname === href ? 'text-red-500' : 'text-text-900'}`}>{text}</Link>
        </NavbarItem>
    )
}
export default function Header()
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = [
        {text: 'Убежище', href: '/'},
        {text: 'Рейтинг', href: '/top'},
        {text: 'Поддержка', href: '/donate'},
        {text: 'Правила', href: '/rules'}
      ];
    return(
        <Navbar 
            maxWidth="xl"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="bg-background-100" 
            isBordered={true}
        >
            <NavbarBrand>
                <Link href="/" className="font-lazer text-accent-500 text-3xl">
                    {(GlobalConfig.sitename as string).toUpperCase()}
                </Link>
            </NavbarBrand>

            <NavbarContent justify="end" className="hidden md:flex">
                {menuItems.map((i) => (<NavLink key={i.href} className="text-xl" href={i.href} text={i.text}/>))}
            </NavbarContent>

            <NavbarContent className="flex md:hidden" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu className="flex items-center space-y-4">
                {menuItems.map((i) => (<NavLink key={i.href} className="text-3xl" href={i.href} text={i.text}/>))}
            </NavbarMenu>
        </Navbar>
    )
}