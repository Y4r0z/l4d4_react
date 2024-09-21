import React from 'react';

interface PerkCategoryProps {
  title: string;
  perks: { name: string; description: string }[];
}

const PerkCategory: React.FC<PerkCategoryProps> = ({ title, perks }) => (
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

const SurvivorPerks = () => {
  const weaponPerks = [
    { name: "В яблочко", description: "При прицельном убийстве из снайперской винтовки, вы получаете патрон. Увеличивает урон снайперских винтовок, при прицеливании, на 20%." },
    { name: "Отчаянный бросок", description: "Даёт возможность метнуть любое холодное оружие и нанести урон. Брошеное оружие светится красной аурой некоторое время." },
    { name: "По-македонски", description: "Увеличивает урон и скорость перезарядки парных пистолетов на 50%." },
    { name: "Трансформатор боли", description: "За каждый потерянный HP, урон игрока растёт на 1%, а при выводе игрока из строя урон увеличивается на 100%." },
    { name: "Дробь за дробью", description: "Скорость перезарядки дробовиков +30%. Скорость выстрела помповых дробовиков +40%, а автоматических +10%." },
    { name: "Светошумовая граната", description: "Позволяет кидать светошумовую гранату, которая ослепляет всех вокруг." }
  ];

  const mainPerks = [
    { name: "Адреналин", description: "Когда появляется Танк, злится Ведьма, раунд подходит к концу или вы остались одни — игрок мгновенно встаёт, если лежал, оглушает нападающего и получает эффект шприца адреналина." },
    { name: "Авиaудар", description: "Позволяет бросать сигнальную шашку, в которую через несколько секунд военные истребители начинают авиаобстрел бомбами." },
    { name: "Берсерк", description: "При убийствах заражённых игрок получает токены. При достижении 50 токенов, игрок получает эффект \"Ярость\"." },
    { name: "Решающий удар", description: "Позволяет самостоятельно сбросить напавшего, пройдя проверку реакции. Чтобы пройти проверку, нужно нажать ПРОБЕЛ, когда стрелка укажет на квадратики." },
    { name: "Отпор", description: "Возвращает нападающему урон в пятикратном размере. Лёжа, игрок получает по 20 хп за убийство обычного заражённого и мгновенно встаёт при убийстве особого." },
    { name: "Спринтер", description: "Позволяет игроку получить неуязвимость и ускорение на срок до 5 секунд за раз, нажав Shift во время бега." },
    { name: "Несокрушимый", description: "Позволяет игроку самостоятельно встать с инкапа, удерживая кнопку прыжка во время инкапа." }
  ];

  const supportPerks = [
    { name: "Жажда крови", description: "Игрок получает по 10 хп за убийство особого заражённого. Больше 120 хп набрать нельзя." },
    { name: "Ползучий", description: "Позволяет ползти по земле при падении." },
    { name: "Внутренняя сила", description: "Вдвое уменьшает негативные эффекты и постепенно преобразует временное здоровье в постоянное." },
    { name: "Железная воля", description: "Увеличивает запас здоровья до 120 и даёт бонусное здоровье при лечении и подъёме с инкапа." },
    { name: "Шестое чувство", description: "Подсвечивает предметы вокруг игрока и раскрывает ауры особых заражённых раз в 15 секунд." }
  ];

  const teamPerks = [
    { name: "Эмпатия", description: "За каждое поднятие или лечение напарников даётся жетон. Каждый жетон увеличивает эффективность лечения." },
    { name: "Ради людей", description: "Позволяет мгновенно поднять раненого выжившего, если у вас более 50 постоянного HP. Вы делите 50% здоровья с поднятым." },
    { name: "Лидер", description: "Даёт спешку 10%. Во время поднятия выжившего, заражённые не наносят ему урон." },
    { name: "Одна судьба", description: "Связывает вас с поднятым игроком, получая только 50% урона, остальные 50% переходят вам." },
    { name: "Солидарность", description: "После лечения напарника аптечкой вы получите 50% восстановленного ему HP." },
    { name: "Вместе до конца", description: "Связывает вас с поднятым игроком, когда связные выжившие рядом, они получают эффект 'Упорство' и 'Стойкость'." }
  ];

  return (
    <div className="px-8 md:px-16 lg:px-32 py-4 my-4 mx-0 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 bg-background-100 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-500">Перки для выживших</h1>
        
        <p className="mb-8 text-lg leading-relaxed">
          Перечень используемых перков при игре за выживших. В отличие от перков для заражённых такое, что они не привязаны к определённым выжившим и могут быть выбраны на любом персонаже.
          Использовать в игре можно только 1 перк из каждой категории.
        </p>

        <PerkCategory title="Оружейные перки" perks={weaponPerks} />
        <PerkCategory title="Основные перки" perks={mainPerks} />
        <PerkCategory title="Вспомогательные перки" perks={supportPerks} />
        <PerkCategory title="Командные перки" perks={teamPerks} />
      </div>
    </div>
  );
};

export default SurvivorPerks;