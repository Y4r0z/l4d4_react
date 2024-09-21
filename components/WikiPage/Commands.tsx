import React from 'react';

const CommandItem = ({ command, description }) => (
  <li className="mb-3 bg-stone-800 p-3 border-l-4 border-red-500">
    <span className="font-bold text-yellow-500">{command}</span> - {description}
  </li>
);

const CommandsPage: React.FC = () => {
  return (
    <div className="px-8 md:px-16 lg:px-32 py-4 my-4 mx-0 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 bg-background-100 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-500 border-b-2 border-red-500 pb-2">Команды на серверах Vortex</h1>
        
        <ul className="space-y-2 mb-8">
          <CommandItem command="!perks" description="Выбор перков (специальных навыков)" />
          <CommandItem command="!w" description="Покупка оружия за коины" />
          <CommandItem command="!coins" description="Текущий баланс" />
          <CommandItem command="!tip" description="Поделиться коинами с игроком" />
          <CommandItem command="!pass" description="Передать танка другому игроку" />
          <CommandItem command="!js" description="Перейти за выживших" />
          <CommandItem command="!ji" description="Перейти за зараженных" />
          <CommandItem command="!afk" description="Перейти за наблюдателей" />
          <CommandItem command="R (зажать)" description="Полет призраком для VIP/Premium/Legend" />
          <CommandItem command="!sp" description="Набор звуковых эффектов для Premium/Legend" />
          <CommandItem command="!hat" description="Коллекция шапок для Legend" />
          <CommandItem command="!kill" description="Чтобы выбрать лёгкий путь" />
          <CommandItem command="!votemap" description="Выбор следующей кампании" />
        </ul>
        
        <div className="bg-stone-800 p-4 border-t-4 border-red-500">
          <p className="text-lg leading-relaxed">
            Любую команду можно забиндить, вписав её в консоль, например: <code className="p-4"> bind "P" "sm_perks" </code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommandsPage;