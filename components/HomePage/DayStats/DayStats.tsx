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
                {DependsOn(GlobalConfig.steam, <a className="ml-1 font-bold text-oaccent" href={GlobalConfig.steam}>Steam</a>)}
            </div>
            <div className="text-xl pt-0">
                <Tooltip 
                    content="Всего игроков" 
                    placement="right" 
                    size="lg" 
                    closeDelay={200} 
                    offset={-290 + (data.members.length > 3 ? 20 : 0)} 
                    className="bg-background-200"
                >
                    <div><span className="circle pulse-black"/> {data.members}</div>
                </Tooltip> 
                <Tooltip 
                    content="Игроков онлайн" 
                    placement="right" 
                    size="lg" 
                    closeDelay={200} 
                    offset={-290 + (data.online.length > 3 ? 20 : 0)} 
                    className="bg-background-200"
                >
                    <div><span className="circle pulse-blue"/> {data.online}</div>
                </Tooltip> 
                <Tooltip 
                    content="Игроков в игре" 
                    placement="right" 
                    size="lg" 
                    closeDelay={200} 
                    offset={-290 + (data.inGame.length > 3 ? 20 : 0)} 
                    className="bg-background-200"
                >
                    <div><span className="circle pulse-green"/> {data.inGame}</div>
                </Tooltip> 
            </div>
        </div>
    );
}