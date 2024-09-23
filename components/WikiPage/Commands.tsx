import React from 'react';
import { 
  FaUser, FaShoppingCart, FaCoins, FaHandHoldingUsd, FaExchangeAlt, 
  FaUserShield, FaSkull, FaEye, FaGhost, FaVolumeUp, FaHatCowboy, 
  FaSkullCrossbones, FaVoteYea 
} from 'react-icons/fa';

interface CommandItemProps {
  command: string;
  description: string;
  icon: React.ReactElement;
  isPrivileged?: boolean;
}

const CommandItem: React.FC<CommandItemProps> = ({ command, description, icon, isPrivileged = false }) => (
  <li className={`mb-3 p-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex items-center ${isPrivileged ? 'bg-gray-800/30 border-l-4 border-yellow-500' : 'bg-stone-800 border-l-4 border-red-700'}`}>
    <div className="mr-4 text-2xl text-yellow-500">{icon}</div>
    <div>
      <span className={`font-bold ${isPrivileged ? 'text-yellow-400' : 'text-yellow-500'}`}>{command}</span>
      <span className="text-stone-300"> - {description}</span>
    </div>
  </li>
);

const CommandsPage: React.FC = () => {
  return (
    <div className="px-8 md:px-16 lg:px-32 py-4 my-4 mx-0 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 bg-background-100 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-500 border-b-2 border-red-500 pb-2">Команды на серверах Vortex</h1>
       
        <ul className="space-y-2 mb-8">
          <CommandItem icon={<FaUserShield />} command="!perks" description="Выбор перков (специальных навыков)" />
          <CommandItem icon={<FaShoppingCart />} command="!w" description="Покупка оружия за коины" />
          <CommandItem icon={<FaCoins />} command="!coins" description="Текущий баланс" />
          <CommandItem icon={<FaHandHoldingUsd />} command="!tip" description="Поделиться коинами с игроком" />
          <CommandItem icon={<FaExchangeAlt />} command="!pass" description="Передать танка другому игроку" />
          <CommandItem icon={<FaUser />} command="!js" description="Перейти за выживших" />
          <CommandItem icon={<FaSkull />} command="!ji" description="Перейти за зараженных" />
          <CommandItem icon={<FaEye />} command="!afk" description="Перейти за наблюдателей" />
          <CommandItem icon={<FaGhost />} command="R" description="Полет призраком для VIP/Premium/Legend" isPrivileged={true} />
          <CommandItem icon={<FaVolumeUp />} command="!sp" description="Набор звуковых эффектов для Premium/Legend" isPrivileged={true} />
          <CommandItem icon={<FaHatCowboy />} command="!hat" description="Коллекция шапок для Legend" isPrivileged={true} />
          <CommandItem icon={<FaSkullCrossbones />} command="!kill" description="Чтобы выбрать лёгкий путь" />
          <CommandItem icon={<FaVoteYea />} command="!votemap" description="Выбор следующей кампании" />
        </ul>
       
        <div className="bg-stone-800 p-4 border-t-4 border-red-500 rounded-lg">
          <p className="text-lg leading-relaxed text-stone-300">
            Любую команду можно забиндить, вписав её в консоль, например: <code className="bg-stone-700 p-1 rounded">bind P sm_perks</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommandsPage;