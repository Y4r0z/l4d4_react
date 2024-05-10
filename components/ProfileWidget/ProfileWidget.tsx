'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Spinner, User } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam } from "@fortawesome/free-brands-svg-icons";
import { SteamProfile } from "next-auth-steam";
import { ConvertSteamID } from "../tools/funcs";
import Link from "next/link";

export default function ProfileWidget()
{
    // session.data.user.steam : SteamProfile
    const session = useSession();
    
    const buildUser = (profile : SteamProfile) =>
    {
        return(
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <User
                        name={profile.personaname}
                        as="button"
                        avatarProps={{
                            src:profile.avatarmedium
                        }}
                    />
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem key="profile" href="/profile">Профиль</DropdownItem>
                    <DropdownItem key="signout" onClick={() => signOut()}>Выйти</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }

    return(
        <span>
            {session.status == 'loading' ?
            <Spinner/>
            :
            <>
                {session.data?.user ? 
                // @ts-expect-error
                buildUser(session.data.user.steam as SteamProfile)
                : 
                <Button 
                    className="text-xl bg-background-200"
                    onClick={() => signIn('steam')} 
                    startContent={<FontAwesomeIcon icon={faSteam}/>}
                    >
                        Вход
                    </Button>
                }
            </>
            }
            
        </span>
    )
}