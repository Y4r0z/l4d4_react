'use server'
import { GlobalConfig } from "@/app/app.config";
import { 
    Privileges,
    Server,  
    SteamGroupStats,
    SteamInfo,
    SteamPlayer,
    UserPrivilegeInfo,
    TopPlayer,
    PlayerInfo,
    Player,
    AllTimeScore,
    Season,
    Achievement,
    TwitchStream,
    DonatePlayer
} from "./types";


const apiBase = GlobalConfig.api;

export async function myFetch<Type>(href : string, settings : any = {})
{
    try{
        const response = await fetch(`${apiBase}/${href}`, settings);
        if(!response.ok) throw new Error("Api недоступен!");
        const data : Type = await response.json();
        return data;
    } catch(e) {
        console.error(`Ошибка в "${href}": ${e}`);
        return null;
    }
}



export async function getServers()
{
    let data = await myFetch<Server[]>('info/server/all', {next:{revalidate: 0}});
    if(data == null) return null; 
    data = data.filter(s => (Date.now() - Date.parse(s.time)) / 1000 / 60 / 60 < 24);
    data.sort((a, b) => b.players.length - a.players.length);
    return data;
}

export const getServerById = async (id : number) => 
    await myFetch<Server>(`v1/server/${id}`);

export const getOnlineDay = async () => 
    0;//await myFetch<number>(`v1/online_day`);

export const getSteamGroupStats = async () => 
    await myFetch<SteamGroupStats>(`info/group`);

export const getTopPlayers = async (start : number | string, limit : number | string) => 
    await myFetch<TopPlayer[]>(`score/top?offset=${start}&limit=${limit}`, {next:{revalidate: 3600}});

export const getOnlinePlayers = async () => 
    [];//await myFetch<TopPlayer[]>('v1/online_players');

export const getPlayerInfo = async (steam_id : string) => 
    await myFetch<PlayerInfo>(`v1/player_info/${steam_id}`);

export const getSteam = async (steam_id : string) => 
    await myFetch<SteamInfo>(`v1/get_steam/${steam_id}`);

export const getAdmins = async () => 
    await myFetch<UserPrivilegeInfo[]>('info/team');

export const getAllTimeScore = async (steam_id : string) => 
    [];//await myFetch<AllTimeScore[]>(`v1/alltimescore/${steam_id}`);

export const getOldSeasons = async (steam_id : string) => 
    [];//await myFetch<Season[]>(`v1/oldseason/${steam_id}`);

export const getAchievement = async (steam_id : string) => 
    await myFetch<Achievement>(`v1/achievement/${steam_id}`);

export const getTwitchStreams = async () => 
    [];//await myFetch<TwitchStream[]>('v1/streams/left4dead2');

export const getDonatePlayers = async () => 
    await myFetch<UserPrivilegeInfo[]>('info/donaters');

export const searchPlayer = async (search : string) => 
    [];//await myFetch<SteamPlayer[]>(`v1/nickname/${search}`);


export const PrivilegeToString = (p : number) => {
    switch(p)
    {
        case 6: return "VIP";
        case 7: return "Premium";
        case 8: return "Legend";
        case 3: return "Moderator";
        case 2: return "Admin";
        case 1: return "Owner";
        default: return "Player";
    }
}

export const PrivilegeToBackground = (p : number) => {
    switch(p)
    {
        case 6: return "bg-green-600";
        case 7: return "bg-red-500";
        case 8: return "bg-fuchsia-700";
        case 3: return "bg-amber-500";
        case 2: return "bg-blue-600";
        case 1: return "bg-indigo-600";
        default: return "bg-neutral-700";
    }
}

export const PrivilegeToBorder = (p : number) => {
    switch(p)
    {
        case 6: return "border-green-600";
        case 7: return "border-red-500";
        case 8: return "border-fuchsia-700";
        case 3: return "border-amber-500";
        case 2: return "border-blue-600";
        case 1: return "border-indigo-600";
        default: return "border-neutral-700";
    }
}

export const PrivilegeToTextColor = (p : number) => {
    switch(p)
    {
        case 6: return "text-green-600";
        case 7: return "text-red-500";
        case 8: return "text-fuchsia-700";
        case 3: return "text-amber-500";
        case 2: return "text-blue-600";
        case 1: return "text-indigo-600";
        default: return "text-neutral-700";
    }
}