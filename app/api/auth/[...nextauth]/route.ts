import { getAuthOptions } from "@/app/auth"
import NextAuth, { AuthOptions } from "next-auth"
import SteamProvider from "next-auth-steam"
import { PROVIDER_ID } from 'next-auth-steam'
import { SteamProfile } from "next-auth-steam"
import type { NextRequest } from "next/server"

async function handler(
    req : NextRequest,
    ctx: {
        params : {
            nextauth : string[]
        }
    }
){
    return NextAuth(req, ctx, getAuthOptions(req))
}

export { handler as GET, handler as POST }