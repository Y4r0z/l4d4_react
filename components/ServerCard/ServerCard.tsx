'use client'
import Image from "next/image";
import {getServerById } from "../api";
import { Server, Player } from "../types";
import {
    Button,
    Card, CardHeader, CardBody,
    Progress,
    Skeleton,
    Tooltip,
    Popover, PopoverTrigger, PopoverContent,
    Table, TableBody, TableRow, TableCell, TableHeader, TableColumn} from "@nextui-org/react";
import './styles.css'
import { findChapterById } from "../tools/campaign";
import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";
import { motion, useAnimate, AnimatePresence} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

export default function ServerCard({server, size} : {server : Server | null, size: "sm" | "md" | "lg"}){

    const [open, setOpened] : [any, any] = useState(false);
    const [scope, animate] : [any, any] = useAnimate();

    
    useEffect(() => {
        animate(
          scope.current,
          {
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
            margin: open ? 16 : 0
          },
          {
            type: "spring",
            bounce: 0,
            duration: 0.4
          }
        );     
      }, [open]);
      
    
    let isLoaded : boolean = server != null;

    let mapName = server == null ? "l4d4_map" : server.map.toLowerCase();
    let mapRus = server == null ? "Неизвестная карта" : findChapterById(server.map).chapterName;
    let mapImage = server == null ? "/placeholder-image.jpg" : `/maps/${server.map}.jpg`
    let name = server == null ? "Endurance Server" : server.name.replace('|', ' ');
    let onlineStr = server == null ? "0/0" : `${server.players.length}/${server.maxplayers}`;
    let onlineValue : number = server == null ? 0 : Math.round((server.players.length/server.maxplayers) * 100);
    const chooseColor = (v : number) => {
        if(v < 50) return "bg-green-600";
        else if (v <= 75) return "bg-yellow-600";
        else return "bg-red-600";
    }
    let onlineColor = server == null ? "bg-purple-600" : chooseColor(onlineValue);

    const copyConnect = () => {if (server != null) navigator.clipboard.writeText(server.connect)};

    function buildPlayer(player : Player){
        if(player.raw.time === undefined) return <tr key={player.name}><td>Загружается...</td><td>0 сек</td></tr>
        const s = player.raw.time;
        const ftime = [
            s >= 3600 ? `${Math.floor(s/3600)} ч, ` : null,
            s >= 60 ? `${Math.floor((s%3600)/60)} мин, ` : null,
            `${(s%60).toFixed(0)} сек`]
        return <tr key={player.name}><td>{player.name}</td><td>{ftime.join('')}</td></tr>
    }

    const cardStyle = "card-main rounded-none " + (size == "lg" ? "h-32" : (size == "md" ? "h-24" : "h-16"))
    const progressSize = size == "lg" ? "md" : "sm";
    const headerStyle = "font-futurot text-otext " + (size == "lg" ? "text-2xl" : (size == "md" ? "text-xl" : "text-lg"));
    const btnSize = size == "lg" ? "lg" : "sm";
    const tableStyle = size == "lg" ? "text-lg w-[100%]" : "text-sm w-[100%]"
    
    return(
        <div className="rounded-2xl overflow-hidden shadow-md bg-background-50" suppressHydrationWarning>
            <div onClick={() => setOpened(!open && server != null && server.players.length > 0)}>
                <Card className={cardStyle}>
                    <CardHeader className="absolute z-10 top-0 flex-col !items-start">
                        <Skeleton className="rounded-full" isLoaded={isLoaded}>
                            <h1 className={headerStyle}>{name}</h1>
                        </Skeleton>
                    </CardHeader>
                    <Image
                        alt="Card background"
                        className="z-0 w-full h-full object-cover card-image"
                        fill={true}
                        priority
                        src={mapImage}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
                    />
                    <CardBody className="flex flex-row">
                        <Progress 
                            size={progressSize}
                            value={onlineValue}
                            label={
                            <Skeleton className="rounded-full" isLoaded={isLoaded}>
                                <p>{onlineStr} {mapName} | {mapRus}</p>
                            </Skeleton>}
                            isIndeterminate={!isLoaded}
                            className="flex justify-end pr-4 z-10"
                            classNames={{
                                indicator: `${onlineColor}`
                            }}/>
                        <div className="z-20 right-0 top-0 bottom-0 flex flex-col justify-between">
                            <Popover placement="top">
                                <Tooltip 
                                    content="Скопировать адрес"
                                    placement="left"
                                    closeDelay={200}>
                                    <span> 
                                        <PopoverTrigger>
                                                <Button isDisabled={!isLoaded} isIconOnly variant="flat" size={btnSize} onClick={copyConnect}><FontAwesomeIcon icon={faCopy} size="lg"/></Button>
                                        </PopoverTrigger>
                                    </span>
                                </Tooltip>
                                <PopoverContent>
                                    <div>Скопировано!</div>
                                </PopoverContent>
                            </Popover>
                            <Tooltip 
                                content="Подключиться"
                                placement="left"
                                closeDelay={200}>
                                <Button as={Link} target="_blank" isDisabled={!isLoaded} isIconOnly variant="flat" size={btnSize} href={`steam://connect/${server?.connect}`}><FontAwesomeIcon icon={faPlay} size="lg"/></Button>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div></div>
            <AnimatePresence>
                <motion.div ref={scope} className="hidden">
                    <table className={tableStyle}>
                        <tbody>
                        {server?.players.map((p) =>{
                            return buildPlayer(p)
                        })}
                        </tbody>
                    </table>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}