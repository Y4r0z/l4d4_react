'use server'
import { Tooltip } from "@nextui-org/tooltip";
import { getSteamGroupStats } from "../../api";
import "./styles.css"
import { GlobalConfig, DependsOn } from "@/app/app.config";

export default async function DayStats() {
  const data = await getSteamGroupStats();
  if (data == null) return <div></div>
  return (
    <div className="flex flex-col justify-center items-center bg-background-100 p-4 rounded-lg">
      <div className="text-2xl font-bold">Статистика
          {DependsOn(GlobalConfig.steam, 
              <a className="ml-1 font-bold text-oaccent" href={GlobalConfig.steam}> STEAM</a>
          )}
      </div>
      <div className="flex flex-row stat-row justify-center items-center gap-4 mt-2">
        <div className="stat">
          <span className="text-color-black stat-number pulse pulse-black">{data.membersCount}</span>
          <span className="stat-label">УЧАСТНИКИ</span>
        </div>
        <div className="stat">
          <span className="text-color-green stat-number pulse pulse-green">{data.membersInGame}</span>
          <span className="stat-label">В ИГРЕ</span>
        </div>
        <div className="stat">
          <span className="text-color-blue stat-number pulse pulse-blue">{data.membersOnline}</span>
          <span className="stat-label">ОНЛАЙН</span>
        </div>
      </div>
    </div>
  );
}