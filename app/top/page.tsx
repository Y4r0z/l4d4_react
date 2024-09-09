import { getTopPlayers } from "@/components/api";
import PlayersTop from "@/components/PlayersTop/PlayersTop";

export default async function TopPlayersPage(){
    const players = await getTopPlayers(0, 32);
    return(
        <div className="px-0 py-0 md:py-4 md:px-16 lg:px-32 xl:px-64">
            {/* <PlayersTopWithSearch playersList={players}/> */}
            <PlayersTop players={players}/>
        </div>
    );
}