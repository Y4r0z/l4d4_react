'use client'
import { Avatar } from "@nextui-org/avatar";
import { getTopPlayers, myFetch } from "../api"
import { TopPlayer } from "../types";
import { Table, TableBody, TableCell, TableRow, TableColumn, TableHeader, Spinner, Badge } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useAsyncList } from "react-stately";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import './styles.css'

export default function PlayersTop(
    {
        players,
        loadCount = 16,
        showPoints = true,
        showTime = false,
        pagination = true,
        textProps = "text-xl",
        className = "max-h-[92vh] md:max-h-[85vh]"
    }
    : 
    {
        players : TopPlayer[] | null,
        loadCount? : number,
        showPoints? : boolean,
        showTime? : boolean,
        pagination? : boolean,
        textProps? : string,
        className? : string
    }
)
{
    const count = loadCount;
    const [data, setData] : [any, any] = useState(players);
    const [isLoading, setIsLoading] : [any, any] = useState(data == null);
    const [hasMore, setHasMore] : [any, any] = useState(false);
    useEffect(() => {
        if(players == null) getTopPlayers(0, count).then((p) => setData(p));
    });

    let list = useAsyncList(
        {
            async load({signal, cursor}) {
                if(cursor) setIsLoading(false);
                const res : any = await getTopPlayers(cursor || 0, count);
                setHasMore(res != null && res.length == count)
                return{
                    items: res,
                    cursor: `${Number(cursor || 0) + count}`
                };
            },
            
        } 
    );
    const [loaderRef, scrollRef] = useInfiniteScroll(
        {
            hasMore,
            onLoadMore: list.loadMore,
        }
    );

    const secToDate = (seconds : number) =>{
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours} ч., ${minutes} мин.`;
    } ;
    const isPlayerOnline = (p : TopPlayer) => {
        //const date = new Date(p.LastConnectionTime).getTime();
        //return ((new Date()).getTime() - date) < 30 * 60 * 1000;
        return false;
    };

    const getColumns = () => {
        const cols = [<TableColumn key={1} className={textProps}>Никнейм</TableColumn>];
        if (showPoints) cols.push(<TableColumn key={2} className={textProps + (showTime ? "" : " text-right")}>Поинты</TableColumn>);
        if (showTime) cols.push(<TableColumn key={3} className={textProps}>Время</TableColumn>);
        return cols;
    }

    const openSteamProfile = (steamId: string) => {
        window.open(`https://steamcommunity.com/profiles/${steamId}`, '_blank');
    };

    const getRowCells = (p : TopPlayer) => {
        const cells = [
            <TableCell key={1} className="flex flex-row items-center gap-4">
                <Badge color="success" content=" " isInvisible={!isPlayerOnline(p)} placement="bottom-right" size="sm">
                    <Avatar src={p.steamInfo.avatarmedium} name={p.steamInfo.personaname} isBordered/>
                </Badge>
                <div className={`${textProps} truncate max-w-[120px] md:max-w-[200px] cursor-pointer`} title={p.steamInfo.personaname}>
                    {p.steamInfo.personaname}
                </div>
            </TableCell>
        ]
        if(showPoints) cells.push(<TableCell key={2} className={`${textProps} text-right`}>{p.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>);
        if(showTime) cells.push(<TableCell key={3} className={textProps}>{secToDate(p.GameTime)}</TableCell>);                       
        return cells;
    }

    return(
        <Table
            isHeaderSticky
            className={`my-table min-w-[14rem] overflow-y-hidden ${className}`}
            aria-label="Топ игроков"
            baseRef={pagination ? scrollRef : null}
            bottomContent={
                (hasMore && pagination) ? (
                    <div className="flex w-full justify-center">
                        <Spinner ref={loaderRef} color="white" />
                    </div>
                ) : null
            }
            classNames={{
                'wrapper': 'my-table overflow-x-hidden p-4',
                'td': 'whitespace-nowrap',
                'tr': 'cursor-pointer transition-colors hover:bg-gray-700'
            }}
        >
            <TableHeader>
                {getColumns()}
            </TableHeader>
            <TableBody 
                isLoading={isLoading}
                items={pagination ? list.items as TopPlayer[] : (players != null ? players : list.items as TopPlayer[])}
                loadingContent={<Spinner color="white" />}
            >
            {
                (p) => (
                    <TableRow 
                        key={p.steamId} 
                        className="hover:bg-gray-800"
                        onClick={() => openSteamProfile(p.steamId)}
                    >
                        {getRowCells(p)}
                    </TableRow>
                )
            }
            </TableBody>
        </Table>
    );
}