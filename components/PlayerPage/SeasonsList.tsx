'use client'
import { Season } from "../types";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function SeasonsList({seasons} : {seasons : Season[]})
{
    const secToDate = (seconds : number) =>{
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        if (hours == 0) return `${minutes} мин.`;
        return `${hours} ч., ${minutes} мин.`;
    }
    const parseDate = (str : string) => {
        const s = str.split('.');
        const d = s[0].length == 1 ? `0${s[0]}` : s[0];
        const m = s[1].length == 1 ? `0${s[1]}` : s[1];
        return `${d}.${m}.${s[2]}`;
    }

    return(
        <Table aria-label="Таблица сезонов" isHeaderSticky className="overflow-scroll h-[21rem]">
                <TableHeader>
                    <TableColumn>Сезон</TableColumn>
                    <TableColumn>Ранг</TableColumn>
                    <TableColumn>Поинты</TableColumn>
                    <TableColumn>Время</TableColumn>
                </TableHeader>
                <TableBody items={seasons}>
                {
                (s) => (
                    <TableRow key={s.Season}>
                        <TableCell className="tabular-nums">{parseDate(s.Season)}</TableCell>
                        <TableCell className="tabular-nums">{s.rang}</TableCell>
                        <TableCell className="tabular-nums">{s.TotalScore}</TableCell>
                        <TableCell className="tabular-nums">{secToDate(s.GameTime)}</TableCell>
                    </TableRow>
                )
                }
                </TableBody>
            </Table>
    )
}