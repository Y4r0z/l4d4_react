import React from 'react';

const PerkCategory = ({ title, perks }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 text-red-500">{title}</h2>
    <ul className="space-y-3">
      {perks.map((perk, index) => (
        <li key={index} className="bg-stone-800 rounded-x1 p-4 shadow-md">
          <h3 className="text-lg font-medium text-red-400 mb-2">{perk.name}</h3>
          <p className="text-stone-300">{perk.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

const InfectedPerks = () => {
  const perksData = {
    "Толстяк": [
      { name: "Атлетичный", description: "Атлетичное прошлое толстяка даёт ему возможность бегать во время заблёва, а также перемещаться на 25% быстрее!" },
      { name: "Гнев толпы", description: "Урон орды Толстяка увеличивается на 50%, удары Толстяка отталкивают жертву!" },
      { name: "Фонтан", description: "Во время заблёва или после удара по толстяку, он начинает разбрызгивать рвоту вокруг себя!" },
      { name: "Пухленький бунтарь", description: "Вы можете призывать огромную орду, если заблевать 3 и более выживших!" }
    ],
    "Громила": [
      { name: "Напролом", description: "Скорость ударов рукой +60%, скорость бега +40%." },
      { name: "Перезаряд", description: "Позволяет Громиле толкать предметы, врезаясь в них. Толкаемые предметы подсвечиваются красной аурой. При толчке предмета громила получает урон в 100 HP." },
      { name: "Настоящий Таран", description: "Скорость и дистанция разбега +50%, разбрасывает выживших дальше +30%, HP +300." },
      { name: "Рулевой", description: "Позволяет менять направление во время разбега. Чтобы менять направление бега, воспользуйтесь мышкой." }
    ],
    "Охотник": [
      { name: "Бэтмэн младший", description: "Может совершить дополнительный прыжок в воздухе, при нажатии левой кнопки мыши во время полёта." },
      { name: "Бросок зверя", description: "Дистанция прыжка увеличена на 50%, наносит дополнительный урон от высоты падения на жертву." },
      { name: "Иcкycный xищник", description: "Урон при терзании жертвы увеличен на 200%, но урон от одиночного удара когтей не увеличивается." },
      { name: "Глубокая Рана", description: "Жертва охотника с этим перком получает эффект 'Глубокая рана', если её основное HP будет меньше 10 во время удара!" },
      { name: "Железный захват", description: "Урон по охотнику, во время захвата жертвы уменьшен на 80%." },
      { name: "Демон скорости", description: "Удар когтями наносит урон в 15 HP. Урон при удержании жертвы классический. Скорость бега увеличена на 40%. Не умеет прыгать." }
    ],
    "Жокей": [
      { name: "Акробат", description: "Может прыгать с одной жертвы на другую, если нажимать на пробел во время езды." },
      { name: "Попрыгунчик", description: "Может прыгать вместе с жертвой, если нажимать на пробел во время езды." },
      { name: "Воришка", description: "Вырывает оружие из рук жертвы и забирает заряженные патроны, если запрыгивает на жертву." },
      { name: "Жокейский сюрприз", description: "Закрывает глаза жертвы руками, не давая ей видеть. Быстрее двигается с жертвой." }
    ],
    "Курильщик": [
      { name: "Тяни-бросай", description: "Быстро перезаряжает способность языка, умеет отпускать жертву. Чтобы отпустить жертву, нужно нажать колёсико мыши во время захвата." },
      { name: "Утечка газа", description: "Пускает газовое облако при нажатии на правую кнопку мыши, при захвате жертвы или после смерти. Газ наносит урон вдыхающим." },
      { name: "Подвижность", description: "Умеет ходить, удерживая жертву. Язык рвётся, если отойти слишком далеко." },
      { name: "Сталкер", description: "Этот курильщик бесшумен. Когда хватает жертву, душит её так сильно, что жертва практически не может издавать звуки." },
      { name: "Язык без костей", description: "Длина языка +75%, скорость притягивания жертвы +50%." }
    ],
    "Плевальщица": [
      { name: "Клейкость", description: "Её кислота замедляет жертву на 30% и накладывает эффект 'Усталость'." },
      { name: "Мис Бумбастик", description: "После смерти плевальщица взрывается, разбрызгивая вокруг себя кислоту и покрывая ей большую площадь." },
      { name: "Ковровая бомбардировка", description: "Кислота растекается по всей траектории полёта, но урон снижен на 25%." }
    ],
    "Танк": [
      { name: "Бомбардир", description: "После уничтожения, его камни взрываются и наносят урон всем вокруг. Каждый 5-й камень взрывается на ещё 3 камня вокруг." },
      { name: "Единство", description: "Разделяет Танка на два, второму Танку передаётся половина HP первого танка." },
      { name: "Ненависть", description: "Его удары не наносят урона, но дают эффект 'Глубокая рана'. Попадание по жертве даёт танку жетоны, каждый жетон даёт танку +2% к скорости и +2% защите от урона." },
      { name: "Регенерация", description: "Танк постепенно восстанавливает своё здоровье. После получения урона регенерация приостанавливается на 10 секунд." },
      { name: "Рык", description: "Издаёт рык, после которого все заражённые получают эффекты 'Спешки' и 'Упорства' при каждом спавне в течение 30 секунд. Кулдаун - 60 секунд." },
      { name: "Подавление", description: "Танк быстро бъёт рукой и кидает камни. У танка нет перезарядки на бросок камней." }
    ]
  };

  return (
    <div className="px-8 md:px-16 lg:px-32 py-4 my-4 mx-0 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 bg-background-100 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-500">Перки для заражённых</h1>
        <p className="mb-8 text-lg leading-relaxed">
          На этой странице вы можете ознакомиться с перечнем перков для игры за заражённых.
        </p>
        {Object.keys(perksData).map((category) => (
          <PerkCategory key={category} title={category} perks={perksData[category]} />
        ))}
      </div>
    </div>
  );
};

export default InfectedPerks;