import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureSection = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-semibold mb-6 text-accent-500 border-b-2 border-accent-500 pb-2">{title}</h2>
    {children}
  </div>
);

const ExpandableFeature = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-3 px-4 bg-background-200 hover:bg-background-300 rounded-x1 transition-colors duration-200 flex justify-between items-center"
      >
        <span className="font-medium text-yellow-500">{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 p-4 bg-background-100 rounded-x1"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServerFeatures: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 mx-auto bg-background-100 rounded-xl max-w-[1400px]">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-accent-500 border-b-2 border-accent-500 pb-2 text-center">Особенности сервера Vortex Left 4 Dead 2</h1>
      
      <p className="mb-8 text-base sm:text-lg leading-relaxed text-primary-900">
        Добро пожаловать в Vortex Left 4 Dead 2! Если вы здесь, значит, вы готовы погрузиться в новое измерение Left 4 Dead 2. Vortex - это не просто модификация, это наша общая страсть, воплощенная в игре. Мы создали этот проект, чтобы подарить вам незабываемые эмоции и новый взгляд на любимую игру.
      </p>

      <FeatureSection title="Ключевые особенности">
        <ul className="list-disc list-inside space-y-4 text-primary-900">
          <li><strong className="text-green-600">Система перков:</strong> Выбирайте уникальные способности перед каждым раундом, кардинально меняющие ваш стиль игры. Эта система позволяет настроить вашего персонажа под ваш уникальный стиль, делая каждый раунд неповторимым.</li>
          <li><strong className="text-green-600">Динамичные убежища:</strong> Двери больше не гарантируют безопасность - зараженные могут их открыть! Это добавляет напряжения и требует постоянной бдительности от выживших.</li>
          <li><strong className="text-green-600">Продвинутая аналитика:</strong> Передовые системы анализа игры каждого игрока обеспечивают справедливый геймплей и точную статистику. Вы всегда можете отследить свой прогресс и сравнить свои результаты с другими игроками.</li>
          <li><strong className="text-green-600">Единая система баланса и рейтинга:</strong> Интегрированная система, работающая как в игре, так и в Discord, для точного отражения навыков игроков. Ваши достижения будут видны всему сообществу!</li>
          <li><strong className="text-green-600">Автоматическая система безопасности:</strong> Система, которая обнаруживает некомпетентных игроков и автоматически банит их. Это обеспечивает честную игру для всех, даже для привилегированных игроков.</li>
          <li><strong className="text-green-600">Актуальность и развитие:</strong> Наш проект - это отдушина комьюнити, и каждый вкладывает душу в работу над ним. Мы не перестаём развиваться и приглашаем вас присоединиться к нам!</li>
        </ul>
      </FeatureSection>

      <FeatureSection title="Уникальные механики">
        <ExpandableFeature title="Endgame">
          <p className="mb-4">Динамичная концовка каждого раунда с волнами зомби, модификацией способностей и обратным отсчетом до авиаудара. Это создает напряженную атмосферу и требует от игроков максимальной концентрации.</p>
          <h4 className="font-semibold mt-2 mb-3 text-yellow-600">Стадии Endgame:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-green-600">Обратный отсчет:</strong> Начинается, когда выжившие прошли более 80% карты или остался последний выживший. Запускается музыкальное сопровождение, а таймер в верхнем правом углу показывает время до обстрела. Особые зараженные получают повышенную скорость передвижения.</li>
            <li><strong className="text-green-600">Overtime:</strong> Начинается, когда таймер доходит до нуля. Это последний шанс для выживших закончить уровень или продолжить борьбу. При определенных условиях (оживление выжившего, убийство особого зараженного или множества обычных) может вернуться к стадии обратного отсчета.</li>
            <li><strong className="text-green-600">Annihilation:</strong> Финальная стадия, где начинается обстрел военными. Истребители запускают ракеты по выжившим и зараженным вне убежища.</li>
          </ul>
          <p className="mt-4">За каждого добравшегося до убежища выжившего команда получает 25 очков (максимум 100 за всех четверых).</p>
        </ExpandableFeature>

        <ExpandableFeature title="Последний герой">
          <p className="mb-4">Уникальная механика, позволяющая поддерживать игровой ритм, даже если в живых остался только один выживший. Это дает шанс на эпическое возвращение и держит в напряжении до последней секунды.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Последнего выжившего нельзя схватить. Если он был схвачен до этого, то вырвется из захвата.</li>
            <li>"Хватающие" способности зараженных отключаются (Охотник, Жокей, Громила, Курильщик).</li>
            <li>Способности зараженных без "хватающей" особенности остаются активными (Толстяк, Плевальщица, Танк).</li>
            <li>Активируется механика Endgame.</li>
            <li>100 бонусных очков за успешное прохождение карты последним выжившим.</li>
          </ul>
          <p className="mt-4 text-yellow-600">Советы:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Зараженным: координируйте атаки, чтобы остановить последнего выжившего.</li>
            <li>Выжившим: используйте холодное оружие для эффективного отражения атак зараженных.</li>
          </ul>
        </ExpandableFeature>

        <ExpandableFeature title="Ведьма-босс">
          <p className="mb-4">Обновленная Ведьма представляет повышенную угрозу, устойчива к урону и меняет цели! Это делает встречи с ней более опасными и непредсказуемыми.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Максимальный урон от оружия уменьшен до 22.5 единиц, делая её более живучей.</li>
            <li>Агрессивна как к зараженным, так и к выжившим.</li>
            <li>Если атакована зараженным, преследует его до потери цели или его смерти.</li>
            <li>При атаке выжившим, меняет цели каждые несколько секунд.</li>
            <li>Не убегает после убийства выжившего, а садится на его место.</li>
          </ul>
          <p className="mt-4 text-yellow-600">Стратегии:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Выжившим: Старайтесь обходить Ведьму. Используйте Авиаудар или светошумовую гранату для эффективной атаки.</li>
            <li>Зараженным: Используйте агрессию Ведьмы, чтобы привести её к выжившим.</li>
          </ul>
        </ExpandableFeature>

        <ExpandableFeature title="Проигрыватель (Vortex Jukebox)">
          <p className="mb-4">Настраивайте атмосферу игры с помощью встроенного проигрывателя, расположенного в каждом убежище и финале кампании. Это добавляет персонализации и веселья в игровой процесс.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Большой выбор песен от поддержавших проект игроков.</li>
            <li>Плейлист меняется каждый месяц, обеспечивая свежесть звучания.</li>
            <li>Стоимость включения трека: 1000 токенов (500 для PREMIUM, 100 для LEGEND).</li>
            <li>Перезарядка проигрывателя: 30 секунд.</li>
            <li>Игроки с привилегиями "Legend" или "Moderator" могут добавлять свои песни.</li>
          </ul>
          <p className="mt-4 text-yellow-600">Если нет музыки:</p>
          <p>Проверьте команды cl_downloadfilter и cl_allowdownload в консоли. Установите значения "all" и "1" соответственно, затем перезапустите игру.</p>
        </ExpandableFeature>

        <ExpandableFeature title="Дверь убежища">
          <p className="mb-4">Зараженные могут открыть дверь убежища, ударив по ней. Это добавляет дополнительный уровень сложности и стратегии в игру.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Выжившим: Прислушивайтесь к звукам ударов по двери. Ликвидируйте зараженных, простреливая дверь и стены.</li>
            <li>Зараженным: Используйте эту механику, чтобы попасть в убежище и помешать выжившим завершить раунд.</li>
          </ul>
        </ExpandableFeature>
      </FeatureSection>

      <FeatureSection title="Станьте частью нашего сообщества">
        <p className="text-primary-900 mb-4">
          Vortex L4D2 - это не просто игра, это сообщество единомышленников. Здесь каждый найдет свое место: будь вы стратег, любитель экшена или просто ищете новых друзей.
        </p>
        <p className="text-primary-900 mb-4">
          Мы создаем историю вместе, и ваш следующий великий момент может случиться именно здесь, на наших серверах!
        </p>
        <p className="text-primary-900">
          Присоединяйтесь к нам, делитесь своими идеями и давайте вместе сделаем Vortex L4D2 еще лучше. Ведь в конце концов, именно вы, игроки, делаете этот проект особенным.
        </p>
      </FeatureSection>

      <FeatureSection title="Благодарности">
        <p className="text-primary-900 mb-4">
          Наш проект вдохновлён ныне закрытым Endurance, который подарил админам и многим игрокам Vortex множество смешных и приятных моментов. Мы благодарим всех, кто внёс вклад в создание и развитие проекта!
        </p>
        <ul className="list-disc list-inside text-primary-900 space-y-2">
          <li><span className="text-yellow-600">Viper и Sandy</span> за предоставленные наработки, части кода, поддержку и наставления в изучении языка Sourcepawn.</li>
          <li><span className="text-yellow-600">Yaroz</span> за гениальные решения по части WEB.</li>
          <li>Всем бустерам и неравнодушным игрокам за поддержку проекта в начале его пути, когда было неясно, может ли он вообще воплотиться в жизнь.</li>
        </ul>
      </FeatureSection>

      <p className="mt-8 text-center text-primary-900 italic">
        P.S. Эта wiki - наше общее детище. Не стесняйтесь вносить свой вклад! Вместе мы создадим лучший ресурс для нашего сообщества!
      </p>
    </div>
  );
};

export default ServerFeatures;