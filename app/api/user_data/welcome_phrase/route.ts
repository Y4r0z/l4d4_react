import { getWelcomePhrase, setWelcomePhrase } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { RedirectType } from "next/navigation";
import { NextRequest } from "next/server";
import { getAuthOptions } from "@/app/auth"
import { ConvertSteamID } from "@/components/tools/funcs";
import { SteamProfile } from "next-auth-steam";
import { getPlayerInfo, PrivilegeToString } from "@/components/api";

const BadRequest = (mes : string) => new Response(mes, {status:400}); 
const Unauthorized = (mes? : string) => new Response(mes || "Unauthorized", {status:401}); 
const NoPermissions = (mes? : string) => new Response(mes || "Unauthorized", {status:401}); 
const NotFound = (mes : string) => new Response(mes, {status:404}); 
const Ok = (mes : string) => new Response(mes, {status:200}); 
const Created = (mes? : string) => new Response(mes || "Created", {status:201}); 

async function getSteamProfile(){
    const session = await getServerSession(getAuthOptions()); // session.user.steam
    // @ts-expect-error
    const profile : SteamProfile = session?.user.steam;
    if(profile === null || profile === undefined) return null;
    return profile;
}
async function getSteamID() {
    const profile = await getSteamProfile();
    if(profile === null) return null;
    return ConvertSteamID(profile.steamid);
}

export async function GET(){
    const steam_id = await getSteamID();
    if(steam_id === null) return Unauthorized();
    const phrase = await getWelcomePhrase(steam_id);
    if(phrase === undefined) return NotFound(`User with steam_id=${steam_id} not found!`);
    return Ok(phrase);
}

export async function POST(request : NextRequest){
    const steam_id = await getSteamID();
    if(steam_id === null) return Unauthorized();
    const pi = await getPlayerInfo(steam_id);
    if(pi == null || PrivilegeToString(pi.Privileges) == "Player") return NoPermissions("Player don't have privileges");
    const phrase = request.nextUrl.searchParams.get("phrase");
    if(phrase === null) return BadRequest("Query <phrase> not found in search params");
    await setWelcomePhrase(steam_id, phrase);
    return Created();
}