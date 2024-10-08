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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function NavLink({href, text, className = '', onclick=null, border=true} : {href: string, text: string, className? : string, onclick?:any, border?:boolean})
{
    const pathname = usePathname();
    const borderStyle = border ? "border-b-0 transition-[border-width] hover:border-b-3 border-oaccent" : "";
    return(
        <NavbarItem onClick={onclick}>
            <Link href={href} className={className + " font-bold" + ` ${pathname === href ? 'text-red-500' : 'text-text-900'} ${borderStyle}`}>{text}</Link>
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
        {text: 'Правила', href: '/rules'},
        {text: 'Баны', href: GlobalConfig.bans},
        {text: 'Вики проекта', href: GlobalConfig.wiki}
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
                <Link href="/" className="font-extrabold text-accent-500 text-xl md:text-2xl lg:text-3xl">
                    {(GlobalConfig.sitename as string).toUpperCase()}
                </Link>
            </NavbarBrand>

            <NavbarContent justify="end" className="hidden md:flex">
                {menuItems.map((i) => (<NavLink key={i.href} className="text-xl" href={i.href} text={i.text}/>))}
                <Dropdown showArrow={true}>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button disableRipple className="p-0 bg-transparent text-xl font-bold text-text-900">
                                Прочее<FontAwesomeIcon icon={faChevronDown} size="2xs" className="ml-[-0.25rem]"/>
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu>
                        {dropdownItems.map((i) => (<DropdownItem key={i.href} className="p-0"><NavLink className="text-xl flex p-2" href={i.href} text={i.text} border={false}/></DropdownItem>))}
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