import React from 'react';
import { FaGamepad, FaUsers, FaHeart } from 'react-icons/fa';

const FeatureSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="mb-12 bg-stone-800 rounded-xl p-4 shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-accent-500 flex items-center">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    {children}
  </div>
);

const AboutServer: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 mx-auto bg-background-100 rounded-xl max-w-[1400px]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-accent-500 border-b-2 border-accent-500 pb-2 text-left">
        Самое основное о Vortex!
      </h1>
      
      <div className="mb-8 text-base sm:text-lg leading-relaxed text-primary-900 bg-stone-800 rounded-xl p-4 shadow-md">
        <p className="mb-4">
          Раз ты здесь и читаешь это сообщение, то не испугался нового и решил попробовать поиграть у нас - это круто!
        </p>
        <p>
          Vortex - это не просто модификация, это отдушина комьюнити, наша общая страсть. <br />Мы создали этот проект, чтобы вместе испытать новые незабываемые эмоции от любимой игры!
        </p>
      </div>

      <FeatureSection title="Ключевые особенности" icon={<FaGamepad className="text-accent-500" size={24} />}>
        <ul className="space-y-4 text-primary-900">
          <li>
            <strong className="text-accent-500">Система перков:</strong> Специальные способности, которые позволяют сделать игру динамичнее и разнообразнее. 
            <p className="mt-1 text-sm">Настрой персонажа под свой стиль игры, делая каждый раунд неповторимым!</p>
          </li>
          <li>
            <strong className="text-accent-500">Единая система баланса и рейтинга:</strong> Наши серверы - это единая сеть! 
            <p className="mt-1 text-sm">Достижения, баланс, статус - доступны на каждом сервере, в Discord и на сайте.</p>
          </li>
          <li>
            <strong className="text-accent-500">Продвинутая аналитика:</strong> Передовые системы анализа игры каждого игрока. 
            <p className="mt-1 text-sm">Отслеживайте свой прогресс и сравнивайте результаты с другими игроками!</p>
          </li>
          <li>
            <strong className="text-accent-500">Автоматическая система безопасности:</strong> Обнаруживает и банит некомпетентных игроков. 
            <p className="mt-1 text-sm">Честная игра для всех, минимум столкновений с неадекватами.</p>
          </li>
          <li>
            <strong className="text-accent-500">Актуальность и развитие:</strong> Наш проект постоянно развивается. 
            <p className="mt-1 text-sm">Присоединяйтесь и станьте частью нашего растущего сообщества!</p>
          </li>
        </ul>
      </FeatureSection>

      <FeatureSection title="Стань частью нашего сообщества" icon={<FaUsers className="text-accent-500" size={24} />}>
        <p className="text-primary-900 mb-4">
          Vortex - это сообщество единомышленников. Здесь каждый найдет свое место:
        </p>
        <ul className="list-disc list-inside text-primary-900 mb-4 space-y-2">
          <li>Новички игры</li>
          <li>Бывалые воины</li>
          <li>Любители экшена</li>
          <li>Те, кто ищет новых друзей</li>
        </ul>
        <p className="text-primary-900 mb-4">
          Мы все здесь очень любим Left4Dead2 и его уникальный дух. Вот в какой ещё игре могут кикнуть за предательство соперников?
        </p>
        <p className="text-primary-900 mt-4 font-semibold">
          Мы создаем историю вместе, и следующий великий момент может случиться вместе с тобой &lt;3
        </p>
      </FeatureSection>

      <FeatureSection title="Благодарности" icon={<FaHeart className="text-accent-500" size={24} />}>
        <p className="text-primary-900 mb-4">
          Наш проект вдохновлён ныне закрытым Endurance, который подарил админам и многим игрокам Vortex множество смешных и приятных моментов.
        </p>
        <p className="text-primary-900 mb-4 font-semibold">
          Благодарим всех, кто внёс вклад в создание и развитие проекта!
        </p>
        <h3 className="text-xl font-semibold mb-2 text-accent-500">Отдельная благодарность:</h3>
        <ul className="list-disc list-inside text-primary-900 space-y-2">
          <li><strong>Viper и Sandy</strong> за предоставленные наработки, части кода, поддержку и наставления в изучении языка Sourcepawn.</li>
          <li><strong>Yaroz</strong> за гениальные решения по части WEB и backend разработки.</li>
          <li><strong>Всем бустерам и неравнодушным игрокам</strong> за поддержку проекта в начале его пути, когда было неясно, может ли он жить.</li>
        </ul>
      </FeatureSection>
    </div>
  );
};

export default AboutServer;