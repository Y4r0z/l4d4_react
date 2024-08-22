'use server'
import { Tooltip } from "@nextui-org/tooltip";
import { getSteamGroupStats } from "../../api";
import { SteamGroupStats } from "@/components/types";
import "./styles.css"
import { GlobalConfig, DependsOn } from "@/app/app.config";

export default async function DayStats()
{
    const data = await getSteamGroupStats();
    if (data == null) return <div></div>
    return(
        <div className="flex flex-col justify-start p-2 cursor-default">
            <div className="text-2xl flex justify-center align-middle">Статистика   
                {DependsOn(GlobalConfig.steam, 
                    <a className="ml-1 font-bold text-oaccent" href={GlobalConfig.steam}>Steam</a>
                )}
            </div>
            <div className="text-xl pt-0">
                <Tooltip 
                    content="Всего игроков" 
                    placement="right" 
                    size="lg" 
                    closeDelay={200} 
                    offset={-290 + (data.membersCount.length > 3 ? 20 : 0)} 
                    className="bg-background-200"
                >
                    <div><span className="circle pulse-black"/> {data.membersCount}</div>
                </Tooltip> 
                <Tooltip 
                    content="Игроков онлайн" 
                    placement="right" 
                    size="lg" 
                    closeDelay={200} 
                    offset={-290 + (data.membersOnline.length > 3 ? 20 : 0)} 
                    className="bg-background-200"
                >
                    <div><span className="circle pulse-blue"/> {data.membersOnline}</div>
                </Tooltip> 
                <Tooltip 
                    content="Игроков в игре" 
                    placement="right" 
                    size="lg" 
                    closeDelay={200} 
                    offset={-290 + (data.membersInGame.length > 3 ? 20 : 0)} 
                    className="bg-background-200"
                >
                    <div><span className="circle pulse-green"/> {data.membersInGame}</div>
                </Tooltip> 
            </div>
        </div>
    );
}