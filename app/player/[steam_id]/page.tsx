'use server'
import { getSteam, getPlayerInfo, getOldSeasons, getAchievement, getAllTimeScore, PrivilegeToString, PrivilegeToBorder, PrivilegeToBackground } from "@/components/api";
import {Privileges } from "@/components/types";
import { Avatar } from "@nextui-org/avatar";
import { Badge } from "@nextui-org/badge";
import { User } from "@nextui-org/user";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import SeasonsList from "@/components/PlayerPage/SeasonsList";


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
    data.oldSeasons.reverse();
    
    const secToDate = (seconds : number) =>{
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        if (hours == 0) return `${minutes} мин.`;
        return `${hours} ч., ${minutes} мин.`;
    }
    
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

    return(
        <div className="m-16 p-8 flex items-center flex-col xl:flex-row justify-center space-y-4 space-x-8
            bg-background-200 rounded-3xl">
            <div className="flex flex-col items-center">
                <p className="text-2xl m-2">{PrivilegeToString(data.playerInfo.Privileges)}</p>
                <Avatar
                    isBordered
                    src={data.steamInfo.avatarfull}
                    className="w-64 h-63"
                />
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
        </div>
    );
}