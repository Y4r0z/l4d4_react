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
import { useState, useEffect, ReactNode, SetStateAction, Dispatch } from "react";
import { motion, useAnimate, AnimatePresence} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { GlobalConfig } from "@/app/app.config";

export default function ServerCard(
    {
        server,
        size,
        openedMap,
        openedActions,
        isHidden = false}
    :
    {
        server : Server | null, 
        size: "md" | "lg", 
        openedMap : Omit<Map<number, boolean>, "set" | "clear" | "delete">, 
        openedActions : any, 
        isHidden? : boolean
    }
)
    {
    const [scope, animate] : [any, any] = useAnimate();
    
    const duration = 0.3;
    // Анимация исчезновения 
    const displayVariants = {
        show: {
            display: 'block',
            opacity: 1,
            transition: {
                opacity: {
                    ease: "easeInOut",
                    duration: duration
                }
            }
        },
        hide: {
            display: 'none',
            opacity: 0,
            transition: {
                display: {
                    delay: duration
                },
                opacity: {
                    ease: "easeInOut",
                    duration: duration
                }
            }
        }
    }

    
    useEffect(() => {
        if(server == null) return;
        const open = openedMap.get(server.serverId);
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
      }, [openedMap, server]);
      
    
    let isLoaded : boolean = server != null;

    let mapName = server == null ? "l4d4_map" : server.map.toLowerCase();
    let mapRus = server == null ? "Неизвестная карта" : findChapterById(server.map).chapterName;
    let mapImage = server == null ? "/placeholder-image.jpg" : `/maps/${server.map}.jpg`
    let name = server == null ? `${GlobalConfig.sitename} Server` : server.name.replace('|', ' ');
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

    const progressSize = size == "lg" ? "md" : "sm";
    const btnSize = size == "lg" ? "lg" : "sm";
    const tableStyle = size == "lg" ? "text-lg w-[100%]" : "text-sm w-[100%]"
    
    return(
        <motion.div 
            suppressHydrationWarning
            initial={false}
            className="rounded-2xl overflow-hidden shadow-md bg-background-50"
            variants={displayVariants}
            animate={isHidden ? 'hide' : 'show'}
        >
            <motion.div 
                initial={false}
                onClick={() => {
                    if(server == null) return;
                    const flag = !openedMap.get(server.serverId) && server.players.length > 0;
                    openedActions.set(server.serverId, flag);
                }} 
                animate={{
                    height : size == "lg" ? '8rem' : '6rem'
                }}
            >
                <Card className="card-main rounded-none h-full">
                    <CardHeader className="absolute z-10 top-0 flex-col !items-start">
                        <Skeleton isLoaded={isLoaded}>
                            <motion.h1 
                                initial={false}
                                className="font-futurot text-otext text-xl"
                                animate={{
                                    fontSize: size == 'lg' ? '1.5rem' : '1.25rem',
                                    lineHeight: size == 'lg' ? '2rem' : '1.75rem'
                                }}
                            >
                                {name}
                            </motion.h1>
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
                            <Skeleton isLoaded={isLoaded}>
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
                                                <Button isDisabled={!isLoaded} isIconOnly variant="flat" size={btnSize} onClick={copyConnect}>
                                                    <motion.div animate={{fontSize: size=='lg' ? '1.25rem' : '1rem'}}>
                                                        <FontAwesomeIcon icon={faCopy}/>
                                                    </motion.div>
                                                </Button>
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
                                <Button as={Link} target="_blank" isDisabled={!isLoaded} isIconOnly variant="flat" size={btnSize} href={`steam://connect/${server?.connect}`}>
                                    <motion.div animate={{fontSize: size=='lg' ? '1.25rem' : '1rem'}}>
                                        <FontAwesomeIcon icon={faPlay}/>
                                    </motion.div>
                                </Button>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
            </motion.div>
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
        </motion.div>
    )
}