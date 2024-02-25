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

export function NavLink({href, text} : {href: string, text: string})
{
    const pathname = usePathname();
    return(
        <NavbarItem>
            <Link href={href} className={`${pathname === href ? 'text-accent-600' : ''}`}>{text}</Link>
        </NavbarItem>
    )
}
export default function Header()
{
    return(
        <Navbar className="bg-background-100 data-[active=true]:after:text-blue-600" isBordered={true}>
            <NavbarBrand>
                <Link href="/" className="italic font-bold text-accent-500 text-2xl">ENDURANCE</Link>
            </NavbarBrand>
            <NavbarContent className="text-lg text-otext">
                <NavLink href="/" text="Убежище"/>
                <NavLink href="/servers" text="Сервера"/>
                <NavLink href="/top" text="Рейтинг"/>
                <NavLink href="/donate" text="Поддержка"/>
            </NavbarContent>
        </Navbar>
    )
}