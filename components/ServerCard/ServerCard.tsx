import Image from "next/image";
import { Server } from "../api";
import { Button, Card, Progress, Skeleton, Tooltip, CardHeader, CardBody } from "@nextui-org/react";
import './styles.css'
import { FaPlay, FaRegCopy } from "react-icons/fa6";

export default function({server} : {server : Server | null}){

    let isLoaded : boolean = true;

    function getServerMapImage(){
        return "/maps/c1m1_hotel.jpg"
    } 
    function getServerName()
    {
        return "Server Name"
    }
    function getServerOnlineString()
    {
        return "0/8"
    }
    function getServerOnlineColor() 
    {
        return "bg-red-500"
    }
    function getServerOnlineValue()
    {
        return 60
    }
    function getServerMapRaw()
    {
        return "sm_map_map"
    }
    function getServerMapRus()
    {
        return "Название карты"
    }

    return(
        <div className="">
            <Card className="col-span-12 sm:col-span-4 h-[300px] h-32 card-main">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <Skeleton className="rounded-full" isLoaded={isLoaded}>
                        <h1 className="text-otext text-lg">{getServerName()}</h1>
                    </Skeleton>
                </CardHeader>
                <Image
                    alt="Card background"
                    className="z-0 w-full h-full object-cover card-image"
                    fill={true}
                    src={getServerMapImage()}
                />
                <CardBody className="flex flex-row">
                    <Progress 
                        label={
                        <Skeleton className="rounded-full" isLoaded={isLoaded}>
                            <p>{getServerOnlineString()} {getServerMapRaw()} | {getServerMapRus()}</p>
                        </Skeleton>}
                        isIndeterminate={!isLoaded}
                        className="flex justify-end pr-4"
                        classNames={{
                            indicator: getServerOnlineColor()
                        }}
                        value={getServerOnlineValue()}/>
                    <div className="z-20 right-0 top-0 bottom-0 flex flex-col justify-between">
                        <Tooltip 
                            content="Скопировать адрес"
                            color="foreground"
                            placement="left"
                            closeDelay={200}>
                            <Button isIconOnly variant="flat" size="lg"><FaRegCopy size={20}/></Button>
                        </Tooltip>
                        <Tooltip 
                            content="Подключиться"
                            color="foreground"
                            placement="left"
                            closeDelay={200}>
                            <Button isIconOnly variant="flat" size="lg"><FaPlay size={20}/></Button>
                        </Tooltip>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}