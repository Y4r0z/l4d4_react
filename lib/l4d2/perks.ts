export enum SurvivorWeaponPerk{
    Unbreakable = 1,
    DoubleTap,
    DesperateThrow,
    PackRat,
    StunGrenade,
    MacedonianStyle,
    __LENGTH
}
export const NameSurvivorWeaponPerk =[
    "Неизвестный перк", "Неостановимый", "Двойное нажатие", "Отчаянный бросок",
    "Барахольщик", "Светошумовая граната", "По-македонски"
]

export enum SurvivorMainPerk{
    Unbreakable = 1,
    DecisiveStrike,
    Sprinter,
    Adrenaline,
    FightBack,
    AirStrike,
    __LENGTH
}
export const NameSurvivorMainPerk = [
    "Неизвестный перк", "Несокружимый", "Решающий удар", "Спринтер",
    "Адреналин", "Отпор", "Авиаудар"
]

export enum SurvivorAddonPerk{
    Tenacity = 1,
    InnerStrength,
    IronWill,
    LastPush,
    SixthSense,
    Counterforce,
    __LENGTH
}
export const NameSurvivorAddonPerk = [
    "Неизвестный перк", "Выдержка", "Внутренняя сила", "Железная воля",
    "Последний рывок", "Шестое чувство", "Противодействие"
]

export enum SurvivorTeamPerk{
    Empathy = 1,
    Leader,
    BorrowedTime,
    ForThePeople,
    LoneWolf,
    TogetherToTheEnd,
    __LENGTH
}
export const NameSurvivorTeamPerk = [
    "Неизвестный перк", "Эмпатия", "Лидер", "Одолженное время",
    "Ради людей", "Одинокий волк", "Вместе до конца"
]


export enum BoomberPerk{
    DeadWreckening = 1,
    MotionSickness,
    DragonBreath,
    Spray,
    __LENGTH
}
export const NameBoomerPerk = [
    "Неизвестный перк", "Гнев толпы", "Подвижность", "Дыхание дракона",
    "Спрей"
]

export enum TankPerk{
    Supression = 1,
    Union,
    Goliath,
    Rancor,
    Bombardier,
    Regeneration,
    __LENGTH
}
export const NameTankPerk = [
    "Неизвестный перк", "Подавление", "Единство", "Голиаф",
    "Ненависть", "Бомбардир", "Регенерация"
]

export enum SmokerPerk{
    TongueTwister = 1,
    DragAndDrop,
    SmokeIt,
    GasLeak,
    __LENGTH
}
export const NameSmokerPerk = [
    "Неизвестный перк", "Рыбак", "Тяни - Бросай", "Тащи его",
    "Утечка газа"
]

export enum HunterPerk{
    BodySlam = 1,
    EfficientKiller,
    SpeedDemon,
    FatalBlow,
    IronGrasp,
    __LENGTH
}
export const NameHunterPerk = [
    "Неизвестный перк", "Бросок зверя", "Искусный хищник", "Демон скорости",
    "Смертельное ранение", "Железная хватка"
]

export enum JockeyPerk{
    Counterattack = 1,
    Frogger,
    Stealth,
    Pilferer,
    Acrobat,
    __LENGTH
}
export const NameJockeyPerk = [
    "Неизвестный перк", "Контратака", "Попрыгунчик", "Стелс",
    "Воришка", "Акробат"
]

export enum SpitterPerk{
    Spitbomb = 1,
    MegaAdhesive,
    RememberMe,
    CarpetBombing,
    __LENGTH
}
export const NameSpitterPerk = [
    "Неизвестный перк", "Кислотная бомба", "Суперклей", "Помни меня",
    "Ковровая босбардировка"
]

export enum ChargerPerk{
    ScatteringRam = 1,
    Steering,
    Overcharge,
    HeadOn,
    __LENGTH
}
export const NameChargerPerk = [
    "Неизвестный перк", "Таран", "Рулевой", "Перезаряд",
    "Напролом"
]

export type PerkPick = [
    weaponPerk : SurvivorWeaponPerk,
    mainPerk : SurvivorMainPerk,
    addonPerk : SurvivorAddonPerk,
    teamPerk : SurvivorTeamPerk,

    boomberPerk : BoomberPerk,
    tankPerk : TankPerk,
    smokerPerk : SmokerPerk,
    hunterPerk : HunterPerk,
    jockeyPerk : JockeyPerk,
    spitterPerk : SpitterPerk,
    chargerPerk : ChargerPerk
]

const PerksCount = 11;

const PerkPickMaxValues : PerkPick = [
    SurvivorWeaponPerk.__LENGTH - 1,
    SurvivorMainPerk.__LENGTH - 1,
    SurvivorAddonPerk.__LENGTH - 1,
    SurvivorTeamPerk.__LENGTH - 1,
    BoomberPerk.__LENGTH - 1,
    TankPerk.__LENGTH - 1,
    SmokerPerk.__LENGTH - 1,
    HunterPerk.__LENGTH - 1,
    JockeyPerk.__LENGTH - 1,
    SpitterPerk.__LENGTH - 1,
    ChargerPerk.__LENGTH - 1
] as const;

export const checkPerkPickFormat = (pick : PerkPick | number[]) => {
    if(pick.length != PerksCount) return false;
    for (let i = 0; i < pick.length; i++)
        if (pick[i] < 1 || pick[i] > PerkPickMaxValues[i]) return false;
    return true;
}

/*

SurvivorWeaponPerk = Surv_Perk1
SurvivorMainPerk = Surv_Perk2
SurvicorAddonPerk = Surv_Perk3
SurvivorTeamPerk = Surv_Perk4

BoomerPerk = Inf_Perk1
TankPerk = Inf_Perk2
SmokerPerk = Inf_Perk3
HunterPerk = Inf_Perk4
JockeyPerk = Inf_Perk5
SpitterPerk = Inf_Perk6
ChargerPerk = Inf_Perk7
*/