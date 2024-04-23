'use client'
import Link from "next/link";
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Divider,
    Dropdown,
    DropdownTrigger,
    Button,
    DropdownMenu,
    DropdownItem
  } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GlobalConfig } from "@/app/app.config";

export function NavLink({href, text, className = '', onclick=null} : {href: string, text: string, className? : string, onclick?:any})
{
    const pathname = usePathname();
    return(
        <NavbarItem onClick={onclick}>
            <Link href={href} className={className + " font-bold border-b-0 transition-[border-width] hover:border-b-3 border-oaccent" + ` ${pathname === href ? 'text-red-500' : 'text-text-900'}`}>{text}</Link>
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
      ];
    const dropdownItems = [
        {text: 'Команда', href: '/team'},
        {text: 'Правила', href: '/rules'}
    ]
    const allItems = menuItems.concat(dropdownItems);

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
                <Dropdown showArrow={true}>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button disableRipple className="p-0 bg-transparent text-xl font-bold text-text-900">Прочее</Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu>
                        {dropdownItems.map((i) => (<DropdownItem key={i.href}><NavLink className="text-xl" href={i.href} text={i.text}/></DropdownItem>))}
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarContent className="flex md:hidden" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu className="flex items-center space-y-4">
                {allItems.map((i) => (<NavLink key={i.href} className="text-3xl" href={i.href} text={i.text} onclick={() => setIsMenuOpen(false)}/>))}
            </NavbarMenu>
        </Navbar>
    )
}