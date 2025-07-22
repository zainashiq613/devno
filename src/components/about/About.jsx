import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../small/Button';

function About({ showContactForm, setShowContactForm }) {
  return (
    <div className="py-13" id="contact">
      <div
        style={{
          boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
        }}
        className="flex rounded-2xl flex-col gap-7 items-center py-10 px-5"
      >
        <h1 className="lg:text-[40px] text-3xl text-center text-text-dark font-semibold">
          Ready to{' '}
          <span className="text-primary">
            Transform Your <br /> Business
          </span>
          ?
        </h1>
        <p className="text-text-secondary text-lg lg:text-[22px]">
          Schedule a consultation with us
        </p>

        {/* Animate layout change on flex direction */}
        <motion.div
          layout
          className={`flex gap-7 ${showContactForm ? 'flex-col-reverse' : 'flex-col'} items-center`}
        >
          <Button text={'Send a Message'} onClick={() => setShowContactForm(true)} />
          <span className="text-text-secondary text-lg lg:text-[22px]">
            It's <span className="text-primary">100% free</span>
          </span>
        </motion.div>

        {/* Animate presence of contact form */}
        <AnimatePresence>
          {showContactForm && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              className="lg:w-[70%] w-full bg-[#ECEDF1] rounded-2xl md:p-7 p-5 flex flex-col gap-7 items-center"
            >
              <h3 className="text-text-dark text-center text-3xl font-semibold">Contact</h3>
              <div className="w-full grid grid-cols-2 gap-7">
                <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
                  <label htmlFor="name" className="text-lg text-text-secondary">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Smith"
                    className="bg-white text-text-secondary text-base border border-[#E4E4E7] py-5 px-4 rounded-xl"
                  />
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
                  <label htmlFor="email" className="text-lg text-text-secondary">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@mail.com"
                    className="bg-white text-text-secondary text-base border border-[#E4E4E7] py-5 px-4 rounded-xl"
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <label htmlFor="message" className="text-lg text-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    className="bg-white text-text-secondary text-base border border-[#E4E4E7] py-5 px-4 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <Button text={'Submit'} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default About;
