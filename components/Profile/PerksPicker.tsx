'use client'

import { GlobalConfig } from "@/app/app.config";
import { NameBoomerPerk, NameChargerPerk, NameHunterPerk, NameJockeyPerk, NameSmokerPerk, NameSpitterPerk, NameSurvivorAddonPerk, NameSurvivorMainPerk, NameSurvivorTeamPerk, NameSurvivorWeaponPerk, NameTankPerk, PerkPick, SurvivorWeaponPerk } from "@/lib/l4d2/perks";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { Key } from "react-stately";
import { useMap } from "usehooks-ts";

const mapsAreEqual = (m1: Omit<Map<string, number>, "set" | "clear" | "delete">, m2: Map<string,number>) =>
     m1.size === m2.size && Array.from(m1.keys()).every((key) => m1.get(key) === m2.get(key));

export default function PerkPicker({initialPerks} : {initialPerks : PerkPick})
{
    const perkTypes = ["weapon", "main", "addon", "team",
        "boomer", "tank", "smoker", "hunter", "jockey", "spitter", "charger"]

    const [savedMap, setSavedMap] = useState(new Map(perkTypes.map((x, idx) => [x, initialPerks[idx]])));
    const [perksGetter, perksSetter] = useMap<string, number>(savedMap);
    const [loading, setLoading] = useState(false);

    const selects : [label:string, names:string[], key:string][] = [
        ["Оружейный перк", NameSurvivorWeaponPerk, perkTypes[0]],
        ["Мощный перк", NameSurvivorMainPerk, perkTypes[1]],
        ["Спомогательный перк", NameSurvivorAddonPerk, perkTypes[2]],
        ["Командный перк", NameSurvivorTeamPerk, perkTypes[3]],
        ["Толстяк", NameBoomerPerk, perkTypes[4]],
        ["Курильщик", NameSmokerPerk, perkTypes[6]],
        ["Охотник", NameHunterPerk, perkTypes[7]],
        ["Жокей", NameJockeyPerk, perkTypes[8]],
        ["Плевальщица", NameSpitterPerk, perkTypes[9]],
        ["Громила", NameChargerPerk, perkTypes[10]],
        ["Танк", NameTankPerk, perkTypes[5]]
    ]
    const survivorSelects = selects.slice(0, 4)
    const infectedSelects = selects.slice(4, 10)

    function createSelect(label:string, perkNames : string[], mapKey : string)
    {
        const items : {id:number, name:string}[] = perkNames.map((x, idx) => ({id:idx, name:x})).slice(1);
        return <Select
            key={label}
            label={label} 
            items={items}
            selectionMode="single"
            selectedKeys={[(perksGetter.get(mapKey) || 1)?.toString()]}
            onSelectionChange={(x : Set<string|number> | "all") => 
                {if(x!="all" && x.size == 1) perksSetter.set(mapKey, Number(x.keys().next().value))}}
            classNames={{
                label: "text-md",
                value:"text-lg",
                trigger: perksGetter.get(mapKey) == savedMap.get(mapKey) ? "border-0" : "border-1 border-background-500"
            }}
        >
            {(item) => <SelectItem key={item.id}>{item.name}</SelectItem>}
        </Select>
    }

    return(
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl">Набор перков</h1>
            <div className="flex flex-col text-lg gap-4">
                <div className="flex flex-col gap-2 p-4 rounded-xl border-background-300 border-1">
                    <h3 className="text-xl">Перки выживших</h3>
                    {survivorSelects.map((x) => createSelect(x[0], x[1], x[2]))}
                </div>
                <div className="flex flex-col gap-2 p-4 rounded-xl border-background-300 border-1">
                    <h3 className="text-xl">Перки зараженных</h3>
                    {infectedSelects.map((x) => createSelect(x[0], x[1], x[2]))}
                </div>
            </div>

            <div className="flex flex-row gap-4">
                <Button onClick={() => perksSetter.setAll(savedMap)}>Сбросить</Button>
                <Button
                    isDisabled={mapsAreEqual(perksGetter, savedMap)}
                    isLoading={loading}
                    onClick={async () =>{
                        setLoading(true);
                        const pick : number[] = [];
                        perksGetter.forEach((value, key) => pick.push(value));
                        const pickStr = pick.join(",");
                        await fetch(`${GlobalConfig.localURL}/api/user_data/perks?perks=${pickStr}`,
                                {method: 'POST'});
                        const newMap : Map<string, number> = new Map();
                        perksGetter.forEach((v, k) => newMap.set(k, v));
                        setSavedMap(newMap);
                        console.log(savedMap)
                        setLoading(false);
                    }}
                >
                    Применить
                </Button>
            </div>
        </div>
    )
}