'use server'
import { getSteam, getPlayerInfo, getOldSeasons, getAchievement, getAllTimeScore, PrivilegeToString, PrivilegeToBorder, PrivilegeToBackground } from "@/components/api";
import {Privileges } from "@/components/types";
import { Avatar } from "@nextui-org/avatar";
import SeasonsList from "@/components/PlayerPage/SeasonsList";
import Link from "next/link";
import SeasonsTimePieChart from "@/components/Charts/SeasonsTimePieChart";
import SeasonsPointsPieChart from "@/components/Charts/SeasonsPointsPieChart";

const secToDate = (seconds : number) =>{
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours == 0) return `${minutes} мин.`;
    return `${hours} ч., ${minutes} мин.`;
}
const strToDate = (s : string) =>{
    const a = s.split('.'); //d m y
    return Date.parse(`${a[1]} ${a[0]} ${a[2]}`);
};

const formatTime = (dateTimeString : string) => {
    const now = new Date();
    const t = new Date(dateTimeString);
    if (now.toDateString() == t.toDateString()) return 'Сегодня';
    if (Math.floor((now.getTime() - t.getTime()) / (1000 * 60 * 60 * 24)) == 1) return 'Вчера';
    return t.toLocaleDateString('ru-RU', {year:'numeric', month:'2-digit', day:'2-digit'});
}

const formatScore = (score : number | string) =>
{
    return (score ?? 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Если использовать серверную функцию, будет Hydration error
const PrivilegeToString2 : (p:Privileges) => string = (p : Privileges) => {
    switch(p)
    {
        case 'o': return "VIP";
        case 'p': return "Premium";
        case 'q': return "Legend";
        case 's': return "Legacy";
        default: return "Player";
    }
}


export default async function PlayerPage({params} : {params : {steam_id : string}})
{
    const steam_id = decodeURIComponent(params.steam_id);
    const throwErr = () => {throw new Error("Найден null")};
    let data;
    try{
    data = {
        steamInfo : await getSteam(steam_id) ?? throwErr(),
        playerInfo : await getPlayerInfo(steam_id) ?? throwErr(),
        oldSeasons : await getOldSeasons(steam_id) ?? throwErr(),
        achievement : await getAchievement(steam_id) ?? throwErr(),
        allTimeScore : await getAllTimeScore(steam_id) ?? throwErr()
    }
    }catch{return <div className="flex w-full justify-center p-64 text-3xl">Игрок не найден!</div>}
    data.oldSeasons.sort((a,b) => strToDate(b.Season) - strToDate(a.Season));

    console.log(await (await fetch('https://l4d2perks.ru/api/v1/oldseason/STEAM_1:0:63217597')).json());

    return(
        <div className="m-16 p-8 flex items-center flex-col xl:flex-row justify-center space-y-4 space-x-8
            bg-background-200 rounded-3xl">
            <div className="flex flex-col items-center">
            <p className="text-2xl m-2">{PrivilegeToString2(data.playerInfo.Privileges)}</p>
                <Link href={data.steamInfo.profileurl}>
                    <Avatar
                        isBordered
                        src={data.steamInfo.avatarfull}
                        className="w-64 h-64"
                    />
                </Link>
                <div className="m-2">
                    <p className="text-3xl">{data.steamInfo.personaname}</p>
                    <p className="text-lg text-neutral-400">{steam_id}</p>
                </div>
            </div>
            <div className="flex flex-col items-start gap-4 text-lg">
                <div>
                    <p>Ранг: {data.playerInfo.PlayerRank}</p>
                    <p>Поинтов в сезоне: {formatScore(data.playerInfo.TotalScore)}</p>
                    <p>Время игры: {secToDate(data.playerInfo.GameTime)}</p>
                </div>
                <div>
                    <p>Последний визит: {formatTime(data.playerInfo.LastConnectionTime)}</p>
                    <p>Прибыл: {formatTime(data.playerInfo.DateAdded)}</p>
                </div>
                {data.oldSeasons.length > 0 &&
                <div>
                    <p>Всего времени: {secToDate(data.allTimeScore[0].gameTimeSum)}</p>
                    <p>Всео получено поинтов: {formatScore(data.allTimeScore[0].totalScoreSum)}</p>
                </div>
                }
            </div>
            <div className="p-4">
                {data.oldSeasons.length > 0 && <SeasonsList seasons={data.oldSeasons}/>}
            </div>
            <div className="p-4"> 
                <SeasonsTimePieChart seasons={data.oldSeasons}/>
            </div>
            <div className="p-4"> 
                <SeasonsPointsPieChart seasons={data.oldSeasons}/>
            </div>
        </div>
    );
}