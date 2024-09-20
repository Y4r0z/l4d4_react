export const GlobalConfig = {
    hostname: "vortexl4d4.ru",
    sitename: "Vortex Left4Dead2",
    boosty: "https://boosty.to/vortexl4d2",
    tg: undefined, //"https://t.me/EnduranceSupport_bot"
    steam: "https://steamcommunity.com/groups/vortexl4d4",
    discord: "https://discord.gg/RNVGsk6AFe",
    vk: undefined, //"https://vk.com/endurancel4d2"
    bans: "https://bans.vortexl4d4.ru/",
    wiki: "https://vortex-l4d2.fandom.com/ru/wiki/Vortex_Left_4_Dead_2",
    api: "https://api.vortexl4d4.ru"
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