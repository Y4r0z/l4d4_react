'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { DiscordInvite } from "@/components/DiscordPage/DiscordInvite";

const DiscordPage: React.FC = () => {
  const discordInviteLink = "https://discord.gg/MXHPFHwRm5";

  return (
    <div className="px-8 md:px-16 lg:px-32 py-4 my-4 mx-0 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48 bg-background-100 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-accent-500 border-b-2 border-accent-500 pb-2">Discord</h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <DiscordInvite inviteLink={discordInviteLink} />
        </motion.div>
      </div>
    </div>
  );
};

export default DiscordPage;