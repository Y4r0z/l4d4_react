// pages/wiki/edcoins.tsx
import React from 'react';

const Edcoins: React.FC = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6">EdCoins</h1>

      <p className="mb-4">
        Играя на наших серверах, вы не только получаете очки рейтинга, но и зарабатываете внутриигровую валюту под названием EdCoins. 
        EdCoins нельзя купить, их можно только заработать, играя на сервере.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Как заработать EdCoins?</h2>
      <p className="mb-4">
        EdCoins начисляются в соотношении 1 к 5 от счёта в раунде. Чем выше ваш результат в раунде, тем больше EdCoins вы получите.
      </p>

      <h2 className="text-2xl font-semibold mt-8">На что можно потратить EdCoins?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Покупка привилегий на сервере.</li>
        <li>Покупка оружия в Left 4 Dead 2 через команду <code>!w</code>.</li>
        <li>Участие в жизни сервера Discord.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">Как узнать баланс EdCoins?</h2>
      <p className="mb-4">
        Проверить свой баланс EdCoins можно командами <code>!priv</code>, <code>!coins</code>, или <code>!balance</code>.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Пример использования команд</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>!w:</strong> Покупка оружия в магазине.</li>
        <li><strong>!priv:</strong> Проверка привилегий и доступных возможностей.</li>
        <li><strong>!balance:</strong> Проверка баланса EdCoins.</li>
      </ul>

      <p className="text-right text-sm italic">Для более подробной информации посетите наш <a href="https://wiki.l4d4.com">сайт</a>.</p>
    </div>
  );
};

export default Edcoins;