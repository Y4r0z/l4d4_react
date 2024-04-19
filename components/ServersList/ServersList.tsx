'use client'
import { useEffect, useRef, useState } from "react";
import ServerCard from "../ServerCard/ServerCard";
import { getServers } from "../api";
import {Server} from "../types";
import { Button, ButtonGroup, Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faGrip, faExpand, faCompress, faEye, faEyeSlash, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useMap } from "usehooks-ts";
import { setCookie } from 'cookies-next';

export default function ServersList
(
    {
        servers,
        states,
    } 
    : 
    {
        servers : Server[] | null,
        states : {listMode : number, sizeMode : number, hideMode : number}
    }
)
{

    const [data, setData] : [Server[] | null, any] = useState(servers);
    const [listMode, setListMode] : [number, any] = useState(states.listMode);
    const [sizeMode, setSizeMode] : [number, any] = useState(states.sizeMode);
    const [hideMode, setHideMode] : [number, any] = useState(states.hideMode);
    const [isLoading, setisLoading] : [boolean, any] = useState(false);
    const [opened, openedActions] = useMap<number, boolean>(); 

    const updateServers = () => {
        setisLoading(true);
        getServers().then(lst => {
            setData(lst);
            setisLoading(false);;
        });
    }
    useEffect(() => {
        const i = setInterval(() => updateServers(), 10000);
        return () =>{
            clearInterval(i);
        }
    }, []);

    useEffect(() => {
        setCookie("servers_listMode", listMode.toString(), {sameSite:'none', secure:true});
        setCookie("servers_sizeMode", sizeMode.toString(), {sameSite:'none', secure:true});
        setCookie("servers_hideMode", hideMode.toString(), {sameSite:'none', secure:true});
    }, [listMode, sizeMode, hideMode])

    function buildServers(servers : Server[] | null)
    {
        const size = sizeMode == 0 ? "lg" : "md";
        if (servers == null) return Array.from(Array(10).keys()).map((s) => <ServerCard key={s} server={null} openedMap={opened} openedActions={openedActions} size={size}/>);
        return servers.map((s : Server, idx) => <ServerCard key={idx} server={s} size={size} openedMap={opened} openedActions={openedActions} isHidden={s.players.length == 0 && hideMode == 1}/>)
    }

    const listBtnStyle = (key : number, mode : number) => {
        if(key == mode) return "bg-background-300";
        else return "bg-background-200";
    }
    const lstStyle = () =>
    {
        if(listMode == 0) return "w-full gap-4 flex flex-col"
        else return "w-full gap-4 grid grid-cols-1 xl:grid-cols-2 min-[1720px]:grid-cols-3"
    }

    return(
    <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between my-4 gap-4 ">
            <div className="flex flex-row gap-4">
                <ButtonGroup className="hidden lg:flex">
                    <Tooltip content="Список">
                        <Button key={0} className={listBtnStyle(0, listMode)} onClick={() => setListMode(0)}><FontAwesomeIcon icon={faList} size="lg"/></Button>
                    </Tooltip>
                    <Tooltip content="Сетка">
                        <Button key={1} className={listBtnStyle(1, listMode)} onClick={() => setListMode(1)}><FontAwesomeIcon icon={faGrip} size="lg"/></Button>
                    </Tooltip>
                </ButtonGroup>
                <ButtonGroup>
                    <Tooltip content="Обычный размер">
                        <Button key={0} className={listBtnStyle(0, sizeMode)} onClick={() => setSizeMode(0)}><FontAwesomeIcon icon={faExpand} size="lg"/></Button>
                    </Tooltip>
                    <Tooltip content="Компактный размер">
                        <Button key={1} className={listBtnStyle(1, sizeMode)} onClick={() => setSizeMode(1)}><FontAwesomeIcon icon={faCompress} size="lg"/></Button>
                    </Tooltip>
                </ButtonGroup>
                <ButtonGroup>
                    <Tooltip content="Показать пустные сервера">
                        <Button key={0} className={listBtnStyle(0, hideMode)} onClick={() => setHideMode(0)}>
                            <FontAwesomeIcon icon={faEye} size="lg"/>
                            </Button>
                    </Tooltip>
                    <Tooltip content="Скрыть пустные сервера">
                        <Button key={1} className={listBtnStyle(1, hideMode)} onClick={() => setHideMode(1)}>
                            <FontAwesomeIcon icon={faEyeSlash} size="lg"/>
                            </Button>
                    </Tooltip>
                </ButtonGroup>
            </div>
            <div className="hidden lg:flex">
                <Tooltip content="Обновить список серверов">
                    <Button className="bg-background-200" isLoading={isLoading} onClick={() => updateServers()}><FontAwesomeIcon icon={faArrowsRotate} size="lg"/></Button>
                </Tooltip>
            </div>
        </div>
        <div className={lstStyle()}>
            {buildServers(data)}
        </div>
    </div>
    );

}