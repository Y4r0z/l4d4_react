import { BadRequest, canChangePerks, Created, getSteamID, NoPermissions, NotFound, Unauthorized } from "@/lib/api_tools";
import { checkPerkPickFormat, PerkPick } from "@/lib/l4d2/perks";
import { getPerkPick, setPerkPick } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const steam_id = await getSteamID();
    if(steam_id === null) return Unauthorized();
    const pick = await getPerkPick(steam_id);
    if(pick === null) return NotFound();
    return NextResponse.json(pick);
}

// perks=1,1,1,1,1,1,1,1,1,1,1
export async function POST(request : NextRequest) {
    const steam_id = await getSteamID();
    if(steam_id === null) return Unauthorized();
    if(!(await canChangePerks(steam_id))) return NoPermissions();
    const perksRaw = request.nextUrl.searchParams.get("perks");
    if(perksRaw === null) return BadRequest("Field <perks> required in search params!");
    const perks : number[] = [];
    perksRaw.split(",").forEach(x => perks.push(Number(x)));
    if(!(checkPerkPickFormat(perks))) return BadRequest(`<perks> format invalid! Got ${perks.length} fields`);
    await setPerkPick(steam_id, perks as PerkPick);
    return Created();
}