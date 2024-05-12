'use client';
import { NavbarContent, Navbar, NavbarMenuToggle, NavbarBrand, NavbarItem, Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react"
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";


const menuItems = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Projects',
        url: '/projects',
    },
    {
        name: 'Contact',
        url: '/contact'
    }
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white/40 backdrop-blur-sm dark:bg-black dark:backdrop-blur-none">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" className="font-semibold text-default-900 text-2xl">M/S</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">

                {menuItems.map((item) =>

                    <NavbarItem key={item.name}>
                        <Link color="foreground" href={item.url}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                )}

            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link

                            className="w-full"
                            color="foreground"
                            href={item.url}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>

    )
}

export default NavBar