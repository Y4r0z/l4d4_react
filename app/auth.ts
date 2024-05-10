import { AuthOptions } from "next-auth";
import SteamProvider from "next-auth-steam"
import { PROVIDER_ID } from 'next-auth-steam'
import { SteamProfile } from "next-auth-steam"
import type { NextRequest } from "next/server";

export function getAuthOptions(req? : NextRequest) : AuthOptions{
    return {
        providers: req ?[
            SteamProvider(req, {
                clientSecret: process.env.STEAM_SECRET!,
                // какой долб*** это придумал?
                callbackUrl: `${process.env.NEXTAUTH_URL ?? "http://localhost:3000"}/api/auth/callback`
            })
        ] : [],
        callbacks:{
            jwt({token, account, profile}){
                if(account?.provider === PROVIDER_ID)
                    token.steam = profile;
                return token
            },
            session({session, token}){
                if('steam' in token)
                    // @ts-expect-error
                    session.user.steam = token.steam;
                return session
            },
            signIn({user, account, profile, email, credentials}){
                const sp = profile as SteamProfile;
                console.log(sp)
                return true;
            }
        }
    }
}