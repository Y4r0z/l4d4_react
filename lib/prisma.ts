import { PrismaClient } from '@prisma/client'
import { PerkPick } from './l4d2/perks';

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

export const getPerkPick = async (steam_id : string) => {
    const obj = await prisma.perks_LastSequence.findUnique({
        where:{
            steamID:steam_id
        }
    });
    if (obj === null) return null;
    const pick : PerkPick = [
        obj.Surv_Perk1, obj.Surv_Perk2, obj.Surv_Perk3, obj.Surv_Perk4,
        obj.Inf_Perk1, obj.Inf_Perk2, obj.Inf_Perk3, obj.Inf_Perk4,
        obj.Inf_Perk5 || 1, obj.Inf_Perk6, obj.Inf_Perk7
    ]
    return pick;
}

export const setPerkPick = async (steam_id : string, pick : PerkPick) => {
    await prisma.perks_LastSequence.update({
        where:{steamID: steam_id},
        data:{
            Surv_Perk1: pick[0], Surv_Perk2:pick[1], Surv_Perk3:pick[2],Surv_Perk4:pick[3],
            Inf_Perk1: pick[4], Inf_Perk2: pick[5], Inf_Perk3: pick[6], Inf_Perk4: pick[7],
            Inf_Perk5: pick[8], Inf_Perk6: pick[9], Inf_Perk7: pick[10],
        }
    })
}
export default prisma;