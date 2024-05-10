'use client'

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export function Providers({children} : {children : React.ReactNode})
{
    return(
        <NextUIProvider>
            <ThemeProvider attribute="class" defaultTheme="dark">
                <SessionProvider>
                    {children}
                </SessionProvider>
            </ThemeProvider>
        </NextUIProvider>
    )
}
