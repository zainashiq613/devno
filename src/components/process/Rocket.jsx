import React from 'react';
import { motion } from 'framer-motion';
import { RocketIcon } from 'lucide-react';

const Rocket = () => {
  return (
    <div
      style={{
        boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
      }}
      className="rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 flex flex-col justify-between">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent rounded"
            initial={{ x: 50, y: 50 }}
            animate={{ x: [50, 150], y: [50, 150] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
            style={{ position: 'absolute', left: `${i * 20 + 20}px`, top: 0 }}
          />
        ))}
      </div>

      {/* Rocket Icon */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="z-10"
      >
        <RocketIcon size={64} className="text-blue-500" />
      </motion.div>
    </div>
  );
};

export default Rocket;
