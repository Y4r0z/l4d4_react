'use server'
import { ConvertSteamID } from "@/components/tools/funcs";
import { WelcomPhraseInput } from "@/components/Profile/WelcomePhraseInput";
import { canChangePerks, canChangeWelcomePhrase, getSteamProfile } from "@/lib/api_tools";
import { getPerkPick, getWelcomePhrase } from "@/lib/prisma";
import PerkPicker from "@/components/Profile/PerksPicker";
import { PerkPick } from "@/lib/l4d2/perks";


export default async function ProfilePage()
{
    const profile = await getSteamProfile();
    if(profile === null) return(<div className="text-3xl flex flex-col items-center justify-center">Невозможно получить профиль</div>);
    const steam_id = ConvertSteamID(profile.steamid);
    var initialWelcomePhrase = await getWelcomePhrase(steam_id) || "";
    var initialPerkPick = await getPerkPick(steam_id) || [1,1,1,1,1,1,1,1,1,1,1] as PerkPick;

    return(
        <div className="px-8 md:px-16 lg:px-32 py-4 my-4 mx-0 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 bg-background-100 rounded-xl
                        flex flex-col gap-4">
            <h1 className="text-2xl">Профиль игрока {profile.personaname}</h1>
            {await canChangeWelcomePhrase(steam_id) ? <WelcomPhraseInput initialPhrase={initialWelcomePhrase || ""}/> : <></>}
            {await canChangePerks(steam_id) ? <PerkPicker initialPerks={initialPerkPick}/> : <></>}
        </div>
    )
}