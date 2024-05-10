import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getWelcomePhrase = async (steam_id : string) =>{
    const obj = await prisma.amd_phrases.findUnique({
        where:{
            steamID: steam_id
        },
        select:{
            welcome_phrase:true,
            steamID: false
        }
    })
    return obj?.welcome_phrase;
}

export const setWelcomePhrase = async (steam_id:string, phrase : string) => {
    await prisma.amd_phrases.upsert({
        where:{
            steamID:steam_id
        },
        update: {
            welcome_phrase: phrase
        },
        create: {
            steamID: steam_id,
            welcome_phrase: phrase
        }
    })
}

export default prisma;