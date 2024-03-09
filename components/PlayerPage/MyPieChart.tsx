'use client'
import { Season } from "../types";
import { PieChart } from "react-minimal-pie-chart";

type DataEntry = {
    color: string;
    value: number;
    key?: string | number;
    title?: string | number;
    [key: string]: any;
  };

export default function MyPieChart({seasons} : {seasons : Season[]}){

    const CreateLabel = (
        x : number,
        y : number,
        dx : number,
        dy : number,
        dataEntry : DataEntry
    ) =>
    {
        return(
            <text
                x={x} y={y}
                dx={dx} dy={dy}
                dominantBaseline="central"
                textAnchor="middle"
                className="text-sm"
            >asd</text>
        )
    }

    return(
        <div>
            <PieChart
                label={CreateLabel as any}
                data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                ]}
            />
        </div>
    );
}