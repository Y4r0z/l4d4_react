import PlayersTop from "@/components/PlayersTop/PlayersTop";
import { getTopPlayers } from "@/components/api";

export default async function TopPlayersPage(){
    const players = await getTopPlayers(0, 32);
    return(
        <div className="px-0 py-0 md:py-8 md:px-16 lg:px-32 xl:px-64">
            <PlayersTop players={players} textProps="text-md md:text-lg"/>
        </div>
    )
}