import React from 'react';

const EffectCategory = ({ title, effects, bgColor, borderColor }) => (
  <div className="mb-8">
    <h2 className={`text-2xl font-semibold mb-4 ${borderColor} pb-2 border-b-2`}>{title}</h2>
    <ul className="space-y-3">
      {effects.map((effect, index) => (
        <li key={index} className={`${bgColor} rounded-x1 p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}>
          <h3 className={`text-lg font-medium mb-2 ${borderColor}`}>{effect.name}</h3>
          <p className="text-stone-200">{effect.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

const Effects = () => {
  const positiveEffects = [
    { name: "Ярость", description: "Все, кто наносят Вам урон, будут отлетать в сторону, а Ваши атаки ускорятся!" },
    { name: "Упорство", description: "Уменьшает входящий урон от противников на определённый процент." },
    { name: "Спешка", description: "Увеличение скорости передвижения на определённый процент." },
    { name: "Стойкость", description: "Этот эффект может спасти от выведения из строя." },
  ];

  const negativeEffects = [
    { name: "Замедление", description: "Уменьшает скорость передвижения на определённый процент." },
    { name: "Уязвимость", description: "Увеличивает наносимый вам урон. Снимается после лечения или ранения." },
    { name: "Отравление", description: "Постоянное здоровье под этим эффектом переходит во временное." },
    { name: "Усталость", description: "Не позволяет использовать некоторые перки, такие как 'Спринтер'." },
    { name: "Глубокая Рана", description: "От неё вы постепенно истекаете кровью и скоро упадёте, не зависимо от HP." },
  ];

  return (
    <div className="px-8 md:px-16 lg:px-32 py-4 my-4 mx-0 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 bg-background-100 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-accent-500 border-b-2 border-accent-500 pb-2">Эффекты от перков</h1>
       
        <p className="mb-8 text-lg leading-relaxed text-primary-900">
          Перки могут накладывать как положительные, так и отрицательные эффекты. Ниже представлен список возможных эффектов:
        </p>

        <EffectCategory 
          title="Положительные эффекты" 
          effects={positiveEffects} 
          bgColor="bg-green-800/30"
          borderColor="text-green-500"
        />

        <EffectCategory 
          title="Отрицательные эффекты" 
          effects={negativeEffects} 
          bgColor="bg-red-800/30"
          borderColor="text-red-500"
        />
      </div>
    </div>
  );
};

export default Effects;