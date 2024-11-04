'use server'

import { PrivilegeToString, getDonatePlayers, getSteam } from "@/components/api"
import Image from "next/image.js";
import {GlobalConfig, DependsOn} from "../app.config.js"


const PrivilegeToBorder = (p : number) => {
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
const PrivilegeToTextColor = (p : number) => {
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


export default async function DonatePage(){

    const players = await getDonatePlayers();

    function getTimeAndMessage(unixTime : number) {
        if (unixTime === 2000000000) {
          return 'Почетный дон';
        } else if (unixTime === -1) {
          return 'До конца';
        } else {
          const currentTime = new Date(unixTime * 1000); // Преобразуем unix time в миллисекунды
          const day = currentTime.getDate();
          const month = currentTime.getMonth() + 1; // Месяцы начинаются с 0
          const year = currentTime.getFullYear();
          return `Привилегия до ${day}.${month}.${year}`;
        }
    }

    return(
        <div className="px-8 md:px-16 lg:px-32 py-4 my-4 mx-0 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 bg-background-100 rounded-xl">
            <div className="flex flex-col items-center text-xl mb-16 gap-4">
                <h2 className="text-3xl">Пантеон славы 🏛️</h2>
                <p>Спасибо за поддержку нашего проекта ❤️</p>
                {DependsOn(GlobalConfig.boosty, <p>Присоединяйся к нашей тусовке на <span className="text-amber-600 font-bold text-xl"><a href={GlobalConfig.boosty}>Boosty</a></span>!</p>)}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-16">
                {
                players && players.map((dp) => {
                    const p = dp.steamInfo;
                    if (p == null) return <></>
                    return(
                        <div key={p.steamid}  className="flex flex-col justify-center text-lg items-center">
                            <div className={"mb-3 text-2xl font-bold" + ` ${PrivilegeToTextColor(dp.privilege.id)}`}>{PrivilegeToString(dp.privilege.id)}</div>
                            <a href={p.profileurl} target="_blank" className={"overflow-hidden rounded-full border-2" + ` ${PrivilegeToBorder(dp.privilege.id)}`}>
                                <Image
                                    className="object-cover"
                                    width={200}
                                    height={200}
                                    alt="Профиль"
                                    src={p.avatarfull}
                                />
                            </a>
                            <div className="text-xl mt-4 font-bold">{p.personaname}</div>
                            {/* <div>{getTimeAndMessage(dp.UnixTime_Until)}</div> */}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}