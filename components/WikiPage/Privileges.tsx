import React from 'react';
import { FaGhost, FaShieldAlt, FaCoins, FaRocket, FaComments, FaVolumeUp, FaSave, FaHatCowboy, FaMusic, FaLightbulb } from 'react-icons/fa';

interface PrivilegeRowProps {
  benefit: string;
  icon: React.ReactNode;
  vip: boolean | string;
  premium: boolean | string;
  legend: boolean | string;
}

const PrivilegeRow: React.FC<PrivilegeRowProps> = ({ benefit, icon, vip, premium, legend }) => (
  <tr className="border-b border-stone-700">
    <td className="py-3 px-4 flex items-center">
      <span className="mr-2 text-yellow-500">{icon}</span>
      {benefit}
    </td>
    <td className="py-3 px-4 text-center">{vip}</td>
    <td className="py-3 px-4 text-center">{premium}</td>
    <td className="py-3 px-4 text-center">{legend}</td>
  </tr>
);

const PrivilegesPage: React.FC = () => {
  const privileges = [
    { benefit: "Полёт призраком", icon: <FaGhost />, vip: "✔", premium: "✔", legend: "✔" },
    { benefit: "Защита от кика", icon: <FaShieldAlt />, vip: "LVL-1", premium: "LVL-2", legend: "LVL-3" },
    { benefit: "Коины каждого раунда", icon: <FaCoins />, vip: "500", premium: "1000", legend: "1500" },
    { benefit: "Бустер Vortex коинов", icon: <FaRocket />, vip: "+25%", premium: "+50%", legend: "+100%" },
    { benefit: "Визуальное обозначение в чате", icon: <FaComments />, vip: "✔", premium: "✔", legend: "✔" },
    { benefit: "Доступ к мемному саундпаду", icon: <FaVolumeUp />, vip: "-", premium: "✔", legend: "✔" },
    { benefit: "Сохранение перков при выходе из игры", icon: <FaSave />, vip: "-", premium: "✔", legend: "✔" },
    { benefit: "Возможность носить шапки", icon: <FaHatCowboy />, vip: "-", premium: "-", legend: "✔" },
    { benefit: "Возможность добавить трек в Jukebox", icon: <FaMusic />, vip: "-", premium: "-", legend: "✔" },
    { benefit: "Новые возможности (в разработке)", icon: <FaLightbulb />, vip: "-", premium: "-", legend: "✔" },
  ];

  return (
    <div className="px-8 md:px-16 lg:px-32 py-4 my-4 mx-0 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 bg-background-100 rounded-xl">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-500 border-b-2 border-red-500 pb-2">Привилегии</h1>
       
        <div className="mb-8 text-lg leading-relaxed bg-stone-800 p-4 border-l-4 border-red-500 rounded-l">
          <p className="mb-4">
            На проекте действует система привилегий, каждую из них возможно приобрести на{' '}
            <a href="https://boosty.to/vortexl4d2" className="text-red-400 hover:underline">
              Boosty
            </a>.
          </p>
         
          <p>
            На серверах Vortex есть 3 основные привилегии: VIP, PREMIUM, LEGEND.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg">
          <table className="w-full bg-stone-800 shadow-xl border border-stone-700">
            <thead>
              <tr className="bg-stone-700">
                <th className="py-3 px-4 text-left text-yellow-500 border-b border-stone-600">Преимущества</th>
                <th className="py-3 px-4 text-center text-yellow-500 border-b border-l border-stone-600">VIP</th>
                <th className="py-3 px-4 text-center text-yellow-500 border-b border-l border-stone-600">PREMIUM</th>
                <th className="py-3 px-4 text-center text-yellow-500 border-b border-l border-stone-600">LEGENDARY</th>
              </tr>
            </thead>
            <tbody>
              {privileges.map((privilege, index) => (
                <PrivilegeRow key={index} {...privilege} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PrivilegesPage;