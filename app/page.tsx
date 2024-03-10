'use server'
import Image from "next/image";
import { getOnlineDay, getServerById, getServers, getTopPlayers} from "@/components/api"
import ServerCard from "@/components/ServerCard/ServerCard";
import ServersList from "@/components/ServersList/ServersList";
import ImageCarousel from "@/components/HomePage/ImageCarousel/ImageCarousel";
import DayStats from "@/components/HomePage/DayStats/DayStats";
import PlayersTop from "@/components/PlayersTop/PlayersTop";
import TwitchStreams from "@/components/HomePage/TwitchStreams/TwitchStreams";

export default async function Home() {
  const servers = await getServers();
  const players = await getTopPlayers(0, 6);
  const dayOnline = await getOnlineDay() ?? 0;

  return (
    <main className="flex flex-col py-12 px-8 md:px-8 lg:px-24 xl:px-48 gap-8">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-background-100 p-4 rounded-xl h-full"><ServersList servers={servers}/></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="p-4 rounded-xl bg-background-100 text-lg">Онлайн за сутки: {dayOnline.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
          <div><ImageCarousel/></div>
          <div className="bg-background-100 rounded-xl"><DayStats/></div>
          <div><PlayersTop players={players} loadCount={6} pagination={false} showTime={false} textProps="text-lg"/></div>
        </div>
      </div>
      <div className="bg-background-100 rounded-xl p-4">
        <h1 className="text-3xl mt-2 mb-4">Трансляции</h1>
        <div><TwitchStreams/></div>
      </div>
    </main>
  );
}
