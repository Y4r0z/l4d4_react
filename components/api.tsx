'use server'
const apiBase = process.env.API;

type PlayerRaw = {
    score : number,
    time : number
}
type Player = {
    name : string,
    raw : PlayerRaw
}
export type Server = {
    serverId : number,
    name : string,
    maxplaers : number,
    connect : string,
    timestamp : string
}

export async function getServers()
{
    try{
        const response = await fetch(`${apiBase}/v1/server/0`);
        if(!response.ok) throw new Error("Api недоступен!");
        const data : Server[] = await response.json();
        return data;
    } catch(e) {
        console.error(`Ошибка при получении серверов: {}`);
        return null;
    }
}