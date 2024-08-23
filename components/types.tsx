export type Privileges = 
    'owner' | 'admin' | 'moderator' | 'vip' | 'premium' | 'legend' 
    | 'soundpad' | 'custom_prefix' | 'welcome_phrase' | 'media_player';

export type SteamGroupStats = {
    membersCount : string,
    membersInGame : string,
    membersOnline: string
}
export type SteamPlayer = {
    STEAM_ID : string,
    TotalScore : number,
    GameTime  : number,
    LastConnectionTime : string,
    Name : string,
    Avatar_url : string
}
export type TopPlayer = {
    steamId : string,
    score : number,
    GameTime : number,
    steamInfo: SteamInfo
}

export type PlayerInfo = {
    TotalScore : number,
    GameTime : number,
    LastConnectionTime : string,
    PlayerRank : number,
    DateAdded : string,
    Privileges : Privileges
}
export type SteamInfo = {
    steamid : string,
    communityvisibilitystate : number,
    profilestate : number,
    personaname : string,
    commentpermission : number,
    profileurl : string,
    avatar : string,
    avatarmedium : string,
    avatarfull : string,
    avatarhash : string,
    personastate : number,
    primaryclanid : string,
    timecreated : number,
    personastateflags : number

}
export type Player = {
    id: number,
    name : string,
    ip: string,
    steamId: string,
    time: number
}
export type Server = {
    id : number,
    name : string,
    map : string,
    playersCount : number,
    maxPlayersCount : number,
    players : Player[],
    ip : string,
    port: number,
    ping : number,
    keywords: string,
    time : string
}
export type AllTimeScore = {
    totalScoreSum : number,
    gameTimeSum : number
}
export type Season = {
    Season : string,
    rang : number,
    TotalScore : number,
    GameTime : number
} 
export type Achievement = {
    STEAM_ID : string,
    countRanksAbove100 : number
}

export type TwitchStream = {
    id : string,
    userName : string,
    title : string,
    viewerCount : number,
    thumbnailUrl : string,
    streamLink : string
}

export type DonatePlayer = {
    STEAM_ID : string,
    FLAGS: Privileges,
    UnixTime_Until : number
}

export type PrivilegeType = {
    id: number,
    accessLevel: number,
    name: Privileges,
    description: string | null,
}

export type UserPrivilegeInfo = {
    steamId : string,
    privilege: PrivilegeType,
    steamInfo: SteamInfo
}