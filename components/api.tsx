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
    let data = await myFetch<Server[]>('info/server/all', {next:{revalidate: 15}});
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