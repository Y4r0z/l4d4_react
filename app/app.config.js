export const GlobalConfig = {
    hostname: "l4d4.com",
    sitename: "Endurance",
    boosty: "https://boosty.to/endurancel4d2",
    tg: "https://t.me/EnduranceSupport_bot",
    steam: "https://steamcommunity.com/groups/Endurance_l4d2",
    discord: "https://discord.com/invite/tdrRDat",
    vk: "https://vk.com/endurancel4d2",
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
    ["/slides/ds.png", "https://discord.com/invite/tdrRDat", "Ссылка на дискорд"],
    ["/slides/vk.png", "https://vk.com/endurancel4d2", "Ссылка на ВК"],
    ["/slides/tg.png", "https://t.me/EnduranceSupport_bot'", "Ссылка на телегу"],
    ["/slides/boosty.png", "https://boosty.to/endurancel4d2", "Ссылка на бусти"]
]