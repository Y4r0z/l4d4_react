'use server'
import { GlobalConfig } from "@/app/app.config";
import { 
    Privileges,
    FullPrivileges,
    Server,  
    SteamGroupStats,
    SteamInfo,
    SteamPlayer,
    TopPlayer,
    PlayerInfo,
    PlayerRaw, Player,
    AllTimeScore,
    Season,
    Achievement,
    TwitchStream,
    DonatePlayer
} from "./types";


const apiBase = GlobalConfig.api;
const apiBase2 = GlobalConfig.api2;

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
    let data = await myFetch<Server[]>('v1/server/0', {next:{revalidate: 15}});
    if(data == null) return null; 
    data = data.filter(s => (Date.now() - Date.parse(s.timestamp)) / 1000 / 60 / 60 < 24);
    data.sort((a, b) => b.players.length - a.players.length);
    return data;
}

export const getServerById = async (id : number) => await myFetch<Server>(`v1/server/${id}`);

export const getOnlineDay = async () => await myFetch<number>(`v1/online_day`);

export const getSteamGroupStats = async () => await myFetch<SteamGroupStats>(`v1/steam_group`);

export const getTopPlayers = async (start : number | string, limit : number | string) => 
    await myFetch<TopPlayer[]>(`v1/top_users/${start}/${limit}`, {next:{revalidate: 3600}});

export const getOnlinePlayers = async () => await myFetch<TopPlayer[]>('v1/online_players');

export const getPlayerInfo = async (steam_id : string) => await myFetch<PlayerInfo>(`v1/player_info/${steam_id}`);

export const getSteam = async (steam_id : string) => await myFetch<SteamInfo>(`v1/get_steam/${steam_id}`);

export const getAdmins = async () => await myFetch<string[]>('v1/admins_players', {next:{revalidate: 3600}});

export const getAllTimeScore = async (steam_id : string) => await myFetch<AllTimeScore[]>(`v1/alltimescore/${steam_id}`);

export const getOldSeasons = async (steam_id : string) => await myFetch<Season[]>(`v1/oldseason/${steam_id}`);

export const getAchievement = async (steam_id : string) => await myFetch<Achievement>(`v1/achievement/${steam_id}`);

export const getTwitchStreams = async () => await myFetch<TwitchStream[]>('v1/streams/left4dead2');

export const getDonatePlayers = async () => await myFetch<DonatePlayer[]>('v1/donate_players');

export const searchPlayer = async (search : string) => await myFetch<SteamPlayer[]>(`v1/nickname/${search}`);


export const PrivilegeToString : (p:Privileges) => FullPrivileges = (p : Privileges) => {
    switch(p)
    {
        case 'o': return "VIP";
        case 'p': return "Premium";
        case 'q': return "Legend";
        case 's': return "Legacy";
        default: return "Player";
    }
}
export const PrivilegeToBackground = (p : Privileges) => {
    switch(p)
    {
        case 'o': return "bg-green-600";
        case 'p': return "bg-red-500";
        case 'q': return "bg-fuchsia-700";
        case 's': return "bg-amber-500";
        default: return "bg-neutral-700";
    }
}

export const PrivilegeToBorder = (p : Privileges) => {
    switch(p)
    {
        case 'o': return "border-green-600";
        case 'p': return "border-red-500";
        case 'q': return "border-fuchsia-700";
        case 's': return "border-amber-500";
        default: return "border-neutral-700";
    }
}

export const PrivilegeToTextColor = (p : Privileges) => {
    switch(p)
    {
        case 'o': return "text-green-600";
        case 'p': return "text-red-500";
        case 'q': return "text-fuchsia-700";
        case 's': return "text-amber-500";
        default: return "text-neutral-700";
    }
}