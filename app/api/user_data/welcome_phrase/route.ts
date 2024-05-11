import { getWelcomePhrase, setWelcomePhrase } from "@/lib/prisma";
import { NextRequest } from "next/server";
import { getPlayerInfo, PrivilegeToString } from "@/components/api";
import { BadRequest, canChangeWelcomePhrase, Created, getSteamID, NoPermissions, NotFound, Ok, Unauthorized } from "@/lib/api_tools";

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
    if(!(await canChangeWelcomePhrase(steam_id))) return NoPermissions();
    const phrase = request.nextUrl.searchParams.get("phrase");
    if(phrase === null) return BadRequest("Query <phrase> not found in search params");
    await setWelcomePhrase(steam_id, phrase);
    return Created();
}