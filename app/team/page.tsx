'use server'
import { getAdmins, getSteam } from "@/components/api"
import { SteamInfo } from "@/components/types";
import { Image } from "@nextui-org/image";

export default async function TeamPage()
{
    const admins = await getAdmins();

    return(
        <div className="px-8 md:px-16 lg:px-32 py-4 my-4 mx-0 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 bg-background-100 rounded-xl">
            <div className="flex flex-col items-center text-xl gap-4">
                <h2 className="text-3xl">Кто мы?</h2>
                <p>Небольшая команда игроков, желающих создать новый и разнообразный опыт в Left 4 Dead 2.</p>
            </div>
            <h2 className="text-4xl flex flex-col items-center font-semibold mt-12 mb-8">Команда проекта</h2>
            <div className="flex flex-wrap justify-center items-center gap-20">
                {
                admins?.map(async (STEAM_ID) => {
                    const p = await getSteam(STEAM_ID);
                    if (p == null) return <></>
                    return(
                        <div key={p.steamid}  className="flex flex-col justify-center text-lg items-center">
                            <a href={p.profileurl} target="_blank" className="overflow-hidden rounded-full border-4 border-neutral-700">
                                <Image
                                    className="object-cover"
                                    width={200}
                                    height={200}
                                    alt="Профиль"
                                    src={p.avatarfull}
                                />
                            </a>
                            <div className="text-xl mt-4 font-bold">{p.personaname}</div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}