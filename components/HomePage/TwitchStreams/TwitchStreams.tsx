import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { getTwitchStreams } from "@/components/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye } from "@fortawesome/free-solid-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import "./styles.css"
import { TwitchStream } from "@/components/types";

export default async function TwitchStreams({streams} : {streams:TwitchStream[] | null})
{
    return(
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {streams && streams.map((s) => (
                <Card key={s.id + s.streamLink}>
                    <CardBody className="stream-body">
                        <a href={s.streamLink} className="relative">
                        <div className="absolute top-1 left-1 rounded-xl bg-red-500 py-1 px-2">LIVE</div>
                        <div className="absolute flex items-center justify-center left-1/2 right-1/2 top-1/2 bottom-1/2 stream-icon">
                            <FontAwesomeIcon icon={faTwitch} size="6x"/>
                        </div>
                        <Image
                            alt="Стрим"
                            className="object-cover rounded-xl w-full h-full stream-image"
                            src={s.thumbnailUrl.replace('{width}x{height}', '576x324')}
                            width={400}
                            height={400}
                            priority
                        />
                        </a>
                    </CardBody>
                    <CardFooter>
                        <div className="flex flex-col w-full">
                            <div className="flex items-baseline justify-between w-full text-2xl">
                                <span className="hover:underline"><a href={s.streamLink}>{s.userName}</a></span>
                                <div className="flex flex-row gap-1 items-center text-lg">
                                    <span>{s.viewerCount}</span>
                                    <span><FontAwesomeIcon icon={faEye} width={20} height={20}/></span>
                                </div>
                            </div>
                            <div className="text-xl text-neutral-400">
                                <p>{s.title}</p>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}