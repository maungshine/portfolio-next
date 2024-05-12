"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiFillSun } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";



export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (

        <>

            <span onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer" >
                {theme === 'light' ? <FaMoon className="text-default-800 text-2xl" /> : <AiFillSun className="text-2xl" />}
            </span>
        </>


    )
};