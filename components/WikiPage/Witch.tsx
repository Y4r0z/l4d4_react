import React from 'react';

const InfoSection = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-4 text-red-500">{title}</h2>
    <div className="space-y-3 text-stone-300">{children}</div>
  </div>
);

const Witch: React.FC = () => {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-500">Ведьма (Witch)</h1>
        <p className="mb-8 text-lg leading-relaxed">
          Ведьма — одно из самых опасных существ в игре. Она спокойно сидит, пока выжившие не подойдут слишком близко или не начнут её атаковать. Если выживший разозлит ведьму, она моментально начнёт его атаковать и убьёт практически мгновенно, нанеся огромный урон.
        </p>

        <InfoSection title="Как взаимодействовать с ведьмой">
          <ul className="list-disc list-inside space-y-2">
            <li>Избегайте яркого света и шума, чтобы не привлечь её внимание.</li>
            <li>Если ведьма злится, постарайтесь убежать или использовать союзников для отвлечения.</li>
            <li>Слаженная команда может убить ведьму, но это требует большого количества урона и быстрой реакции.</li>
          </ul>
        </InfoSection>

        <InfoSection title="Тактики против ведьмы">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong className="text-red-400">Огнестрельное оружие:</strong> Лучший способ быстро убить ведьму — это плотная стрельба из автоматического оружия.
            </li>
            <li>
              <strong className="text-red-400">Молотов:</strong> Если ведьма горит, это замедляет её и наносит урон со временем, что может позволить выжившим её добить.
            </li>
            <li>
              <strong className="text-red-400">Кооперация:</strong> Лучше всего атаковать ведьму всей командой, так как она фокусируется на одном выжившем.
            </li>
          </ul>
        </InfoSection>
      </div>
    </div>
  );
};

export default Witch;