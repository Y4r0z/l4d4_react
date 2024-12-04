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
    </div>
  );
};