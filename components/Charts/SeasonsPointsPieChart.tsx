'use client'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import { Pie } from "react-chartjs-2";
import { Season } from "../types";

const strToDate = (s : string) =>{
    const a = s.split('.'); //d m y
    return Date.parse(`${a[1]} ${a[0]} ${a[2]}`);
};
const parseDate = (str : string) => {
    const s = str.split('.');
    const d = s[0].length == 1 ? `0${s[0]}` : s[0];
    const m = s[1].length == 1 ? `0${s[1]}` : s[1];
    return `${d}.${m}.${s[2]}`;
}
const generateColors = (n : number) =>{
    const colors : string[] = []
    for (let i = 0; i < n; i++) colors.push(`hsl(${(i/n)*255}, 75%, 65%)`);
    return colors;
};

export default function SeasonsPointsPieChart({seasons} : {seasons : Season[]})
{
    ChartJS.register(ArcElement, Tooltip);

    const data = seasons.sort((a, b) => b.TotalScore - a.TotalScore)
        .slice(0, Math.min(seasons.length, 10))
        .sort((a, b ) => strToDate(b.Season) - strToDate(a.Season))
        .filter(x => x.TotalScore > 0);
    var colors = generateColors(data.length);
    colors = colors.filter((el, i, a) => i%2==0).concat(colors.filter((el, i, a) => i%2==1))

    const dataset_time = data.map((x) => x.TotalScore);
    const dataset_labels = data.map(x => `Сезон: ${parseDate(x.Season)}`);
    const dataset = {
        labels: dataset_labels,
        datasets:[{
            label:"Поинты",
            data: dataset_time,
            backgroundColor: colors,
            borderWidth: 2,
        }]
    }

    return(
        <div>
            <Pie
                data={dataset}
            />
        </div>
    )
}