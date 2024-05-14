'use client';
import { NavbarContent, Navbar, NavbarMenuToggle, NavbarBrand, NavbarItem, Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react"
import { useState } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { usePathname } from "next/navigation";


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
    const pathname = usePathname();
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
                        <Link color="foreground" href={item.url} className={`${pathname === item.url && 'border-b-2 border-primary-500'} hover:border-b hover:border-primary-500`}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                )}

            </NavbarContent>
            <NavbarContent justify="end" >
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
                <NavbarItem className="flex items-center">

                    <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_balnk">
                        <AiFillLinkedin className="text-2xl text-default-800 dark:text-default-500" />
                    </Link>
                </NavbarItem >
                <NavbarItem className="flex items-center">
                    <Link href="https://github.com/maungshine" target="_blank">
                        <AiFillGithub className="text-2xl dark:text-default-500 text-default-800" />
                    </Link>
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