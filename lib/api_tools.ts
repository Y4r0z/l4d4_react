import { getAuthOptions } from "@/app/auth";
import { getAdmins, getPlayerInfo } from "@/components/api";
import { ConvertSteamID } from "@/components/tools/funcs";
import { getServerSession } from "next-auth";

export const BadRequest = (mes : string) => new Response(mes, {status:400}); 
export const Unauthorized = (mes? : string) => new Response(mes || "Unauthorized", {status:401}); 
export const NoPermissions = (mes? : string) => new Response(mes || "Unauthorized", {status:401}); 
export const NotFound = (mes? : string) => new Response(mes || "Not Found", {status:404}); 
export const Ok = (mes? : string) => new Response(mes || "Ok", {status:200}); 
export const Created = (mes? : string) => new Response(mes || "Created", {status:201}); 

export async function getSteamProfile(){
    const session = await getServerSession(getAuthOptions()); // session.user.steam
    // @ts-expect-error
    const profile : SteamProfile = session?.user.steam;
    if(profile === null || profile === undefined) return null;
    return profile;
}

export async function getSteamID() {
    const profile = await getSteamProfile();
    if(profile === null) return null;
    return ConvertSteamID(profile.steamid);
}

export const isPrivileged = async (steam_id : string) => {
    const playerInfo = await getPlayerInfo(steam_id);
    if(playerInfo === null) return false;
    const admins = await getAdmins() || [];
    return (playerInfo.Privileges != null && playerInfo.Privileges != "") || admins.includes(steam_id);
}

export const canChangePerks = async (steam_id : string) => {
    return await isPrivileged(steam_id);
}

export const canChangeWelcomePhrase = async (steam_id : string) => {
    return await isPrivileged(steam_id);
}

export const canChangePresets = async (steam_id : string) => {
    return await isPrivileged(steam_id);
}