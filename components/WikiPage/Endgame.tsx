import React from 'react';

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, content }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 text-red-500">{title}</h2>
    <div className="space-y-3 text-stone-300">{content}</div>
  </div>
);

const Endgame = () => {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-500">Механика Endgame</h1>
        
        <p className="mb-8 text-lg leading-relaxed">
          Когда выжившие прошли более 80% карты или остался последний выживший, запускается обратный отсчёт. 
          Актуальное состояние таймера отображается в центре экрана у каждой из команд.
        </p>

        <Section 
          title="Стадии Endgame"
          content={
            <>
              <div>
                <h3 className="text-xl font-semibold text-red-400">Стадия обратного отсчёта</h3>
                <p>На этой стадии игроки видят таймер. Если выживший будет выведен из строя, ход таймера будет слегка замедлен, 
                а на экране возле таймера появится значок ▼. Как только таймер доходит до 0, начинается следующая стадия.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-400">Стадия овертайма</h3>
                <p>Игроки видят в центре экрана надпись OVERTIME. Экран становится черно-белым. Угловые скобки подсказывают, 
                сколько осталось до конца стадии. Время заканчивается — Endgame переходит в финальную стадию, но может вернуться на стадию обратного отсчёта.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-400">Endgame Collapse</h3>
                <p>Все выжившие начинают стремительно терять здоровье. Чем дальше выживший от убежища, тем больше урон, вплоть до мгновенной гибели. 
                Выведение из строя на этой стадии означает гибель.</p>
              </div>
            </>
          }
        />

        <Section 
          title="Когда возможен возврат на стадию обратного отсчёта"
          content={
            <ul className="list-disc list-inside space-y-2">
              <li>Игрок оживил другого выжившего.</li>
              <li>Был убит особый заражённый.</li>
              <li>Было убито много обычных заражённых.</li>
            </ul>
          }
        />

        <Section 
          title="Последний выживший"
          content={
            <ul className="list-disc list-inside space-y-2">
              <li>Когда остаётся один выживший, его больше нельзя схватить.</li>
              <li>Все хватающие способности заражённых отключены.</li>
              <li>Если последний выживший успешно проходит карту, его команда получает 150 бонусных очков.</li>
            </ul>
          }
        />

        <Section 
          title="Дверь убежища"
          content={
            <p>На серверах Vortex дверь убежища нельзя использовать для защиты от заражённых. 
            Заражённые могут открыть её, ударив по двери, особенно это важно во время стадии Endgame.</p>
          }
        />
      </div>
    </div>
  );
};

export default Endgame;