const steamID64Identifier = BigInt('76561197960265728');
const two = BigInt(2);
const zero = BigInt(0);

export function ConvertSteamID(steam64 : string)
{
    const w = BigInt(steam64);
    const v = w % two == zero ? 0 : 1;
    const z = (w - steamID64Identifier) / two;
    return `STEAM_1:${v}:${z}`;
}