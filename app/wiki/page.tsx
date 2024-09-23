'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AboutServer from '@/components/WikiPage/AboutServer';
import SurvivorPerks from '@/components/WikiPage/SurvivorPerks';
import InfectedPerks from '@/components/WikiPage/InfectedPerks';
import Effects from '@/components/WikiPage/Effects';
import Сoins from '@/components/WikiPage/Coins';
import Privileges from '@/components/WikiPage/Privileges';
import ServerFeatures from '@/components/WikiPage/ServerFeatures';
import Commands from '@/components/WikiPage/Commands';

const wikiCategories = [
  { title: 'О сервере', component: 'about-server' },
  { title: 'Перки выживших', component: 'survivor-perks' },
  { title: 'Перки заражённых', component: 'infected-perks' },
  { title: 'Эффекты от перков', component: 'effects' },
  { title: 'Команды чата', component: 'commands' },
  /* { title: 'Коины и Магазин', component: 'coins' }, */
  { title: 'Привилегии', component: 'privileges' },
  { title: 'Особые механики', component: 'server-features' }
];

const WikiMain: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const renderComponent = () => {
    switch (activeComponent) {
      default:
        return <AboutServer />;
      case 'about-server':
        return <AboutServer />;
      case 'survivor-perks':
        return <SurvivorPerks />;
      case 'infected-perks':
        return <InfectedPerks />;
      case 'effects':
        return <Effects />;
      case 'coins':
        return <Сoins />;
      case 'privileges':
        return <Privileges />;
      case 'server-features':
        return <ServerFeatures />;
      case 'commands':
        return <Commands />;
    }
  };

  return (
    <main className="flex flex-col py-4 md:py-12 px-0 md:px-4 lg:px-8 xl:px-16 gap-8">
      <div className="bg-background-100 rounded-xl p-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-accent-500 border-b-2 border-accent-500 pb-2 text-center">
          Vortex Wiki
        </h1>
       
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-2 pb-2">
            {wikiCategories.map((category) => (
              <li key={category.component}>
                <motion.button
                  className={`px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base ${
                    activeComponent === category.component
                      ? 'bg-red-500 text-stone-100'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                  onClick={() => setActiveComponent(category.component)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.title}
                </motion.button>
              </li>
            ))}
          </ul>
        </nav>

        <motion.div
          key={activeComponent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="shadow-lg"
        >
          {renderComponent()}
        </motion.div>
      </div>
    </main>
  );
};

export default WikiMain;