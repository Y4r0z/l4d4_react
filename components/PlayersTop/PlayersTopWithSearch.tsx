'use client'

import { useEffect, useState } from "react";
import { TopPlayer } from "../types";
import { Input } from "@nextui-org/input";
import { Button, ButtonGroup } from "@nextui-org/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import PlayersTop from "./PlayersTop";
import { searchPlayer } from "../api";
import { Divider } from "@nextui-org/divider";
export default function PlayersTopWithSearch({playersList} : {playersList : TopPlayer[] | null})
{
    const [players, setPlayers] = useState(playersList);
    const [loading, setLoading] = useState(false);
    const [searchMode, setSearchMode] = useState(false);
    const [value, setValue] = useState("");

    const startPlayerSearch = async () =>{
        if(value.length < 2) return;
        setSearchMode(true);
        setLoading(true);
        var p = await searchPlayer(value);
        console.log(p?.length);
        setPlayers(p);
        setLoading(false);
    };

    const getTopControl = () => {
        if(searchMode)
        {
            if(players != undefined && players?.length > 0) return <PlayersTop players={players} textProps="text-md md:text-lg rounded-xl" pagination={false}/>
            else return <div className="text-3xl flex justify-center">Ничего не найдено...</div>
        }
        else
            return <PlayersTop players={players} textProps="text-md md:text-lg rounded-xl"/>
    }

    return(
        <div className="flex flex-col space-y-8 bg-background-100 rounded-xl p-0 sm:p-0 md:p-8">
                <div className="flex flex-row items-center">
                    <Input
                        value={value}
                        onValueChange={setValue}
                        label="Поиск игрока"
                        classNames={{
                            label: "text-lg",
                            input: "text-lg hover:bg-transparent",
                            innerWrapper:"hover:bg-transparent",
                            inputWrapper:"rounded-l-xl rounded-r-none h-14"
                        }}
                    />
                    <div className="overflow-hidden rounded-r-xl flex flex-row items-center h-14 bg-[#3F3F46] w-32 justify-between">
                    <Button className="rounded-none w-14 h-14" isIconOnly onClick={async () => {setSearchMode(false); setValue("");}}>
                        <FontAwesomeIcon icon={faXmark} size="xl"/>
                    </Button>
                    <Divider orientation="vertical" className="h-9"/>
                    <Button className="rounded-none w-14 h-14" isIconOnly isLoading={loading} onClick={async () => await startPlayerSearch()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/>
                    </Button>
                    </div>
                </div>
                {getTopControl()}
            </div> 
    )
} 