import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Skull, Ghost, Music, DoorOpen } from 'lucide-react';

interface FeatureSectionProps {
  title: string;
  children: React.ReactNode;
}

interface ExpandableFeatureProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-6 text-accent-500 border-b-2 border-accent-500 pb-2">{title}</h2>
    {children}
  </div>
);

const ExpandableFeature: React.FC<ExpandableFeatureProps> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-6 bg-stone-800 hover:bg-background-300 rounded-xl transition-all duration-300 flex justify-between items-center shadow-md hover:shadow-lg"
      >
        <span className="font-semibold text-accent-500 text-xl flex items-center">
          {icon}
          <span className="ml-3">{title}</span>
        </span>
        <span className="text-accent-500">{isOpen ? '▲' : '▼'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 p-6 bg-background-100 rounded-xl shadow-inner"
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
      <FeatureSection title="Уникальные механики серверов Vortex">
        <ExpandableFeature title="Endgame" icon={<Clock className="w-6 h-6" />}>
          <p className="mb-4 text-lg">Динамичная концовка каждого раунда с волнами зомби, модификацией способностей и обратным отсчетом до авиаудара. <br />Это создает напряженную атмосферу и требует от игроков максимальной концентрации.</p>
          <h4 className="font-semibold mt-4 mb-3 text-xl text-accent-500">Стадии Endgame:</h4>
          <ul className="space-y-3 ml-4">
            <li><strong className="text-green-500">Таймер:</strong> Начинается, когда выжившие прошли более 80% карты или остался последний выживший. Запускается музыкальное сопровождение, а таймер в верхнем правом углу показывает время до обстрела. Особые зараженные получают повышенную скорость передвижения.</li>
            <li><strong className="text-green-500">Овертайм:</strong> Начинается, когда таймер доходит до нуля. Это последний шанс для выживших закончить уровень или продолжить борьбу. <br />При определенных условиях (оживление выжившего, убийство особого зараженного или множества обычных) может вернуться к стадии обратного отсчета.</li>
            <li><strong className="text-green-500">Аннигиляция:</strong> Финальная стадия, где начинается обстрел военными. Истребители запускают ракеты по выжившим и зараженным вне убежища.</li>
          </ul>
          <p className="mt-4 text-lg font-medium text-red-600">За каждого съеденного выжившего заражённые получают по 25 очков, а выжившие по 25 за спасённого!</p>
        </ExpandableFeature>

        <ExpandableFeature title="Последний герой" icon={<Skull className="w-6 h-6" />}>
          <p className="mb-4 text-lg">Уникальная механика, позволяющая поддерживать игровой ритм, даже если в живых остался только один выживший. <br />Это дает шанс на эпическое возвращение и держит в напряжении до последней секунды.</p>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li>Последнего выжившего нельзя схватить. Если он был схвачен до этого, то вырвется из захвата.</li>
            <li>Хватающие способности зараженных отключаются (Охотник, Жокей, Громила, Курильщик).</li>
            <li>Способности зараженных без хватающей особенности остаются активными (Толстяк, Плевальщица, Танк).</li>
            <li>Активируется механика Endgame.</li>
            <li>100 бонусных очков за успешное прохождение карты последним выжившим.</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-3 text-xl text-accent-500">Советы:</h4>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li><strong className="text-blue-500">Выжившим:</strong> используйте холодное оружие для эффективного отражения атак зараженных.</li>
            <li><strong className="text-red-500">Зараженным:</strong> координируйте атаки, чтобы остановить последнего выжившего.</li>
          </ul>
        </ExpandableFeature>

        <ExpandableFeature title="Ведьма-босс" icon={<Ghost className="w-6 h-6" />}>
          <p className="mb-4 text-lg">Обновленная Ведьма представляет повышенную угрозу, устойчива к урону и меняет цели! <br />Это делает встречи с ней более опасными и непредсказуемыми.</p>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li>Максимальный урон от оружия уменьшен до 22.5 единиц, делая её более живучей.</li>
            <li>Агрессивна как к зараженным, так и к выжившим.</li>
            <li>Если атакована зараженным, преследует его до потери цели или его смерти.</li>
            <li>При атаке выжившим, меняет цели каждые несколько секунд.</li>
            <li>Не убегает после убийства выжившего, а садится на его место.</li>
          </ul>
          <h4 className="font-semibold mt-4 mb-3 text-xl text-accent-500">Стратегии:</h4>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li><strong className="text-blue-500">Выжившим:</strong> Старайтесь обходить Ведьму. Используйте Авиаудар или светошумовую гранату для эффективной атаки.</li>
            <li><strong className="text-red-500">Зараженным:</strong> Используйте агрессию Ведьмы, чтобы привести её к выжившим.</li>
          </ul>
        </ExpandableFeature>

        <ExpandableFeature title="Проигрыватель (Vortex Jukebox)" icon={<Music className="w-6 h-6" />}>
          <p className="mb-4 text-lg">Настраивайте атмосферу игры с помощью встроенного проигрывателя, расположенного в каждом убежище и финале кампании. Это добавляет персонализации и веселья в игровой процесс.</p>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li>Большой выбор песен от поддержавших проект игроков.</li>
            <li>Плейлист меняется каждый месяц, обеспечивая свежесть звучания.</li>
            <li>Стоимость включения трека: 1000 токенов (500 для PREMIUM, 100 для LEGEND).</li>
            <li>Перезарядка проигрывателя: 30 секунд.</li>
            <li>Игроки с привилегиями Legend или Moderator могут добавлять свои песни.</li>
          </ul>
          <div className="mt-4 p-4 text-red-600">
            <h4 className="font-semibold mb-2 text-lg">Если нет музыки:</h4>
            <p>Введите команды <code className="bg-red-900 text-gray-400 px-1 rounded">cl_downloadfilter all</code> и <code className="bg-red-900 text-gray-400 px-1 rounded">cl_allowdownload 1</code> в консоли. За тем перезайдите на сервер или перезапустите игру.</p>
          </div>
        </ExpandableFeature>

        <ExpandableFeature title="Дверь убежища" icon={<DoorOpen className="w-6 h-6" />}>
          <p className="mb-4 text-lg">Зараженные могут открыть дверь убежища, ударив по ней! <br />Это добавляет дополнительный уровень сложности и стратегии в игру.</p>
          <ul className="list-disc list-inside space-y-3 ml-4">
            <li><strong className="text-blue-500">Выжившим:</strong> Прислушивайтесь к звукам ударов по двери. Ликвидируйте зараженных, простреливая дверь и стены.</li>
            <li><strong className="text-red-500">Зараженным:</strong> Используйте эту механику, чтобы попасть в убежище и помешать выжившим завершить раунд.</li>
          </ul>
        </ExpandableFeature>
      </FeatureSection>
    </div>
  );
};

export default ServerFeatures;