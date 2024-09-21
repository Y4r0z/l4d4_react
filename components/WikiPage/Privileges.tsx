import React from 'react';

const PrivilegeRow = ({ benefit, vip, premium, legend }) => (
  <tr className="border-b border-stone-700">
    <td className="py-3 px-4">{benefit}</td>
    <td className="py-3 px-4 text-center">{vip}</td>
    <td className="py-3 px-4 text-center">{premium}</td>
    <td className="py-3 px-4 text-center">{legend}</td>
  </tr>
);

const PrivilegesPage: React.FC = () => {
  return (
    <div className="px-8 md:px-16 lg:px-32 py-4 my-4 mx-0 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 bg-background-100 rounded-xl">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-500 border-b-2 border-red-500 pb-2">Привилегии</h1>
        
        <div className="mb-8 text-lg leading-relaxed bg-stone-800 p-4 border-l-4 border-red-500">
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

        <div className="overflow-x-auto">
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
              <PrivilegeRow benefit="Полёт призраком" vip="✔" premium="✔" legend="✔" />
              <PrivilegeRow benefit="Защита от кика" vip="LVL-1" premium="LVL-2" legend="LVL-3" />
              <PrivilegeRow benefit="Коины каждого раунда" vip="500" premium="1000" legend="1500" />
              <PrivilegeRow benefit="Бустер Vortex коинов" vip="+25%" premium="+50%" legend="+100%" />
              <PrivilegeRow benefit="Визуальное обозначение в чате" vip="✔" premium="✔" legend="✔" />
              <PrivilegeRow benefit="Доступ к мемному саундпаду" vip="-" premium="✔" legend="✔" />
              <PrivilegeRow benefit="Сохранение перков при выходе из игры" vip="-" premium="✔" legend="✔" />
              <PrivilegeRow benefit="Возможность носить шапки" vip="-" premium="-" legend="✔" />
              <PrivilegeRow benefit="Возможность добавить трек в Jukebox" vip="-" premium="-" legend="✔" />
              <PrivilegeRow benefit="Новые возможности (в разработке)" vip="-" premium="-" legend="✔" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PrivilegesPage;