export type Privileges = 'o' | 'p' | 'q' | 's' | '' | null

export type SteamGroupStats = {
    members : string,
    inGame : string,
    online: string
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
    STEAM_ID : string,
    TotalScore : number,
    GameTime : number,
    LastConnectionTime : string,
    Name : string,
    Avatar_url : string
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
export type PlayerRaw = {
    score : number,
    time : number
}
export type Player = {
    name : string,
    raw : PlayerRaw
}
export type Server = {
    serverId : number,
    name : string,
    map : string
    maxplayers : number,
    players : Player[],
    connect : string,
    timestamp : string
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