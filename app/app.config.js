export const GlobalConfig = {
    hostname: "l4d2perks.ru",
    sitename: "Guardians",
    boosty: "https://boosty.to/guardiansperkmod",
    tg: undefined, //"https://t.me/EnduranceSupport_bot"
    steam: "https://steamcommunity.com/groups/guardiansperkmod",
    discord: "https://discord.gg/RNVGsk6AFe",
    vk: undefined, //"https://vk.com/endurancel4d2"
    bans: "https://ban.l4d2perks.ru/",
    wiki: "https://wiki.l4d2perks.ru/ru/home",
    api: "https://l4d2perks.ru/api",
    api2: "https://api2.l4d2perks.ru"
}

export const DependsOn = (variable, element ) =>{
    return variable ? element : <></>
}

// Слайдер с QR кодами на главной странице.
// Формат:
// Весь блок окружен квадратными скобками
// Каждая страничка в квадратных скобках:
// внутри 3 параметра в кавычках: [ путь до картинки из папки `public`, ссылка, описание ]
// можно убирать или добавлять новые
export const imageCarouselData = [
    ["/slides/guardians/ds.png", GlobalConfig.discord, "Ссылка на дискорд"],
    //["/slides/vk.png", "https://vk.com/endurancel4d2", "Ссылка на ВК"],
    //["/slides/tg.png", "https://t.me/EnduranceSupport_bot'", "Ссылка на телегу"],
    ["/slides/guardians/boosty.png", GlobalConfig.boosty, "Ссылка на бусти"]
]