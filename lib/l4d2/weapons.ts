export enum Weapon {
    Knife = 'Knife',
    Katana = 'Katana',
    Machete = 'Machete',
    Axe = 'Axe',
    Shovel = 'Shovel',
    GolfClub = 'GolfClub',
    Guitar = 'Guitar',
    Crowbar = 'Crowbar',
    FryingPan = 'FryingPan',
    Pitchfork = 'Pitchfork',
    BaseballBat = 'BaseballBat',
    CricketBat = 'CricketBat',
    Nightstick = 'Nightstick',
    SG = 'SG',
    SSG = 'SSG',
    MP5 = 'MP5',
    Scout = 'Scout',
    HuntingRifle = 'HuntingRifle',
    SniperRifle = 'SniperRifle',
    TacticalShotgun = 'TacticalShotgun',
    CombatShotgun = 'CombatShotgun',
    PumpShotgun = 'PumpShotgun',
    ChromeShotgun = 'ChromeShotgun',
    SG552 = 'SG552',
    M16 = 'M16',
    CombatRifle = 'CombatRifle',
    AK47 = 'AK47',
    Magnum = 'Magnum',
    P220 = 'P220',
    Laser = 'Laser',
    EncendiaryAmmo = 'EncendiaryAmmo',
    ExplosiveAmmo = 'ExplosiveAmmo',
    Chainsaw = 'Chainsaw',
    M60 = 'M60',
    GrenadeLauncher = 'GrenadeLauncher',
    AWP = 'AWP'
}

export const MeleeWeapons =
    [ Weapon.Knife
    , Weapon.Katana
    , Weapon.Machete
    , Weapon.Axe
    , Weapon.Shovel
    , Weapon.GolfClub
    , Weapon.Guitar
    , Weapon.Crowbar
    , Weapon.FryingPan
    , Weapon.Pitchfork
    , Weapon.BaseballBat
    , Weapon.CricketBat
    , Weapon.Nightstick] as const;
export type MeleeWeapon = typeof MeleeWeapons[number];

export const Tier1Weapons =
    [ Weapon.SG
    , Weapon.SSG
    , Weapon.MP5
    , Weapon.Scout
    , Weapon.HuntingRifle
    , Weapon.ChromeShotgun
    , Weapon.PumpShotgun] as const;
export type Tier1Weapon = typeof Tier1Weapons[number];

export const Tier2Weapons =
    [ Weapon.TacticalShotgun
    , Weapon.CombatShotgun
    , Weapon.SG552
    , Weapon.M16
    , Weapon.CombatRifle
    , Weapon.AK47
    , Weapon.SniperRifle] as const;
export type Tier2Weapon = typeof Tier2Weapons[number];

export const Tier3Weapons =
    [ Weapon.M60
    , Weapon.AWP
    , Weapon.GrenadeLauncher
    , Weapon.Chainsaw] as const;
export type Tier3Weapon = typeof Tier3Weapons[number];

export const Pistols = [Weapon.Magnum , Weapon.P220] as const;
export type Pistol = typeof Pistols[number];

export const Upgrades = 
    [ Weapon.Laser
    , Weapon.ExplosiveAmmo
    , Weapon.EncendiaryAmmo] as const;
export type Upgrade = typeof Upgrades[number];

export const CanBuyWithToken = (w : Weapon) => {
  return Tier1Weapons.includes(w as Tier1Weapon)
    || Pistols.includes(w as Pistol)
    || MeleeWeapons.includes(w as MeleeWeapon)
    || w == Weapon.Chainsaw || w == Weapon.Laser;
}