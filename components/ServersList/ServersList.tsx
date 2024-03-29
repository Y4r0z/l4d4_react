'use client'
import { useEffect, useRef, useState } from "react";
import ServerCard from "../ServerCard/ServerCard";
import { getServers } from "../api";
import {Server} from "../types";
import { Button, ButtonGroup, Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faGrip, faExpand, faCompress, faEye, faEyeSlash, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function ServersList
(
    {
        servers,
    } 
    : 
    {
        servers : Server[] | null,
    }
)
{
    const [data, setData] : [Server[] | null, any] = useState(servers);
    const [listMode, setListMode] : [any, any] = useState(0);
    const [sizeMode, setSizeMode] : [any, any] = useState(0);
    const [hideMode, setHideMode] : [any, any] = useState(0);
    const [isLoading, setisLoading] : [any, any] = useState(false);

    const updateServers = () => {
        setisLoading(true);
        getServers().then(lst => {
            setData(lst);
            setisLoading(false);
        });
    }
    useEffect(() => {
        const i = setInterval(() => updateServers(), 10000)
        return () =>{
            clearInterval(i);
        }
    }, []);

    function buildServers(servers : Server[] | null)
    {
        const size = sizeMode == 0 ? "lg" : "md";
        if (servers == null) return Array.from(Array(10).keys()).map((s) => <ServerCard key={s} server={null} size={size}/>);
        return servers.map((s : Server, idx) => <ServerCard key={idx} server={s} size={size} isHidden={s.players.length == 0 && hideMode}/>)
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