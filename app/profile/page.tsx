'use client'

import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Input, Spinner, Tooltip } from "@nextui-org/react";
import { SteamProfile } from "next-auth-steam";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GlobalConfig } from "../app.config";
import { Player, PlayerInfo, Privileges } from "@/components/types";
import { getPlayerInfo } from "@/components/api";
import { ConvertSteamID } from "@/components/tools/funcs";

const PrivilegeToString : (p:Privileges) => string = (p : Privileges) => {
    switch(p)
    {
        case 'o': return "VIP";
        case 'p': return "Premium";
        case 'q': return "Legend";
        case 's': return "Legacy";
        default: return "Player";
    }
}

function ProfilePage()
{
    const session = useSession();
    // @ts-expect-error
    const profile : SteamProfile = session.status == "authenticated"  ? session.data.user.steam : null;
    
    var savedPhrase = "";
    const [welcomePhrase, setWelcomePhrase] = useState("");
    const [isPhraseLoading, setPhraseLoading] = useState(false);
    const [playerInfo, setPlayerInfo] : [PlayerInfo | undefined | null, Dispatch<SetStateAction<PlayerInfo | undefined | null>>] = useState();

    useEffect(() => {
        fetch(`${GlobalConfig.localURL}/api/user_data/welcome_phrase`)
        .then(data => data.text()).then(text => {
            savedPhrase = text;
            setWelcomePhrase(text);
        });
    }, []);

    useEffect(() =>
    {
        if(profile !== null && profile !== undefined)
            getPlayerInfo(ConvertSteamID(profile.steamid)).then(info => setPlayerInfo(info));
    }, [session])

    if(profile === null || profile === undefined) return(<div></div>)

    return(
        <div className="px-8 md:px-16 lg:px-32 py-4 my-4 mx-0 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 bg-background-100 rounded-xl
                        flex flex-col gap-4">
            <h1 className="text-2xl">Профиль игрока {profile.personaname}</h1>
            {playerInfo ? 
            <>
            <div className="text-lg">
                    {playerInfo.Privileges ? <>Ваша привелегия: {PrivilegeToString(playerInfo.Privileges)}</> : <>У вас не имеется активной привелегии</>}
            </div>
            {playerInfo.Privileges ? 
            <div className="flex flex-row">
                <Input 
                    required 
                    value={welcomePhrase}
                    onValueChange={setWelcomePhrase}
                    label="Приветственная фраза" 
                    classNames={{
                        label: "text-md",
                        input: "text-lg hover:bg-transparent",
                        innerWrapper:"hover:bg-transparent",
                        inputWrapper:"rounded-l-xl rounded-r-none h-14"
                    }}
                />
                <div className="overflow-hidden rounded-r-xl flex flex-row items-center h-14 bg-[#3F3F46] w-32 justify-between">
                <Tooltip content="Сбросить" closeDelay={200}>    
                    <Button
                        className="rounded-none w-14 h-14"
                        isDisabled={isPhraseLoading}
                        isIconOnly
                        onClick={() => setWelcomePhrase(savedPhrase)}
                    >
                        <FontAwesomeIcon icon={faXmark} size="xl"/>
                    </Button>
                </Tooltip>
                <Divider orientation="vertical" className="h-9"/>
                <Tooltip content="Изменить фразу" closeDelay={200}>
                    <Button
                        className="rounded-none w-14 h-14"
                        isIconOnly
                        isLoading={isPhraseLoading}
                        onClick={async () => {
                            setPhraseLoading(true);
                            await fetch(`${GlobalConfig.localURL}/api/user_data/welcome_phrase?phrase=${welcomePhrase}`,
                                {method: 'POST'})
                            savedPhrase = welcomePhrase;
                            setPhraseLoading(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faCheck} size="xl"/>
                    </Button>
                </Tooltip>
                </div>
        </div> : <></>}
            </>
            : <Spinner/>}
        </div>
    )
}
export default ProfilePage;