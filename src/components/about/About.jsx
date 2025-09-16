import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../small/Button';
import { FaCheckCircle, FaGlobeAmericas, FaRegClock, FaUser } from 'react-icons/fa';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { IoVideocamOutline } from 'react-icons/io5';
import { GoArrowLeft } from 'react-icons/go';
import { CiCalendar } from 'react-icons/ci';
import Calender from './Calender';
import { format } from 'date-fns';
import DetailForm from './DetailForm';

function About({ showContactForm, setShowContactForm }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableHours, setAvailableHours] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState(null);
  const [complete, setComplete] = useState(false);
  // const availableHours = selectedDate ? hoursByDate[format(selectedDate, 'yyyy-MM-dd')] || [] : [];

  console.log(availableHours);

  function generateRandomTimes(count = 7) {
    const times = [];
    const startHour = 9; // earliest start
    const endHour = 17; // latest end (5 PM)

    while (times.length < count) {
      const hour = Math.floor(Math.random() * (endHour - startHour + 1)) + startHour;
      const minute = Math.random() > 0.5 ? '00' : '30'; // only :00 or :30
      const time = `${hour.toString().padStart(2, '0')}:${minute}`;

      if (!times.includes(time)) {
        times.push(time);
      }
    }
    return times.sort(); // sorted in order
  }

  function handleDateSelection(date) {
    if (!date) return;
    setSelectedDate(date);

    // generate 7 random slots for that date
    const randomSlots = generateRandomTimes(10);
    setAvailableHours(randomSlots);
  }

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
          <span className="text-[#176aea]">
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
              className={`${selectedDate ? 'lg:w-full grid grid-cols-12' : 'h-fit'} ${
                showForm ? '!h-fit' : ''
              } w-full bg-white shadow-2xl rounded-md grid grid-cols-12`}
            >
              {complete ? (
                <div className="p-5 col-span-12 py-15 pb-30 flex flex-col gap-5 items-center">
                  <h3 className="flex items-center gap-2 text-2xl font-semibold text-[#0a0a0a]">
                    <span>
                      <FaCheckCircle fill="#038164" />
                    </span>
                    You are scheduled
                  </h3>
                  <p className="text-sm text-center text-text-secondary">
                    A calendar invitation has been sent to your email address.
                  </p>
                  <p className="cursor-pointer text-text-secondary text-sm flex gap-2 items-center border py-1 px-2 rounded-3xl">
                    Open Invitation
                    <span>
                      <FaArrowUpRightFromSquare />
                    </span>
                  </p>
                  <div className="p-5 text-text-secondary border flex flex-col gap-3 rounded-md">
                    <h3 className="text-2xl font-semibold">30 Minutes of Your IDEAS</h3>
                    <p className="flex items-center gap-2 text-sm">
                      <span>
                        <FaUser />
                      </span>
                      Devno Sol
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <span>
                        <CiCalendar />
                      </span>
                      1:00pm - 1:30pm, Saturday, September 20, 2025
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <span>
                        <FaGlobeAmericas />
                      </span>
                      Pakistan, Maldives Time
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <span>
                        <IoVideocamOutline />
                      </span>
                      Web conferencing details to follow.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className={`${
                      selectedDate ? 'col-span-12 lg:col-span-4' : 'col-span-12 lg:col-span-6'
                    } lg:border-r border-[#a1a1a1]`}
                  >
                    <div className="relative w-full flex items-center justify-center py-20 border-b border-[#a1a1a1]">
                      <p
                        onClick={() => setShowForm(false)}
                        className={`absolute cursor-pointer top-7 left-10 bg-white border border-primary p-2.5 rounded-full ${
                          showForm ? 'block' : 'hidden'
                        }`}
                      >
                        <GoArrowLeft fill="#176aea" size={20} />
                      </p>
                      <img className="w-[220px]" src="/devno-logo.png" alt="" />
                    </div>
                    <div className="p-6 flex flex-col gap-7">
                      <div className="flex flex-col gap-2">
                        <p className="text-text-secondary font-semibold">Devno Sol</p>
                        <h3 className="text-[#0a2540] text-3xl font-bold leading-7">
                          30 Minutes of Your IDEAS
                        </h3>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-text-secondary flex items-center gap-2 text-sm">
                          <span>
                            <FaRegClock size={20} />
                          </span>
                          30 min
                        </p>
                        <p className="text-text-secondary flex items-center gap-2 text-sm">
                          <span>
                            <HiOutlineVideoCamera size={24} />
                          </span>
                          Web conferencing details provided upon confirmation.
                        </p>
                      </div>
                    </div>
                  </div>
                  {showForm ? (
                    <div className="p-6 h-fit col-span-12 lg:col-span-8">
                      <DetailForm setComplete={setComplete} />
                    </div>
                  ) : (
                    <>
                      <div
                        className={`${
                          selectedDate
                            ? 'col-span-12 md:col-span-8 lg:col-span-5'
                            : 'col-span-12 lg:col-span-6'
                        } p-5 flex flex-col gap-6 pb-20`}
                      >
                        <h3 className="text-xl text-[#0a2540] font-semibold">
                          Select a Date & Time
                        </h3>
                        <Calender
                          selectedDate={selectedDate}
                          handleDateSelection={handleDateSelection}
                          setSelectedDate={setSelectedDate}
                        />
                      </div>
                      {selectedDate && (
                        <div className="col-span-12 md:col-span-4 lg:col-span-3 h-fit flex flex-col gap-3 md:pt-18 px-6">
                          <h3 className="text-xs font-medium text-[#0a2540]">
                            {selectedDate ? format(selectedDate, 'EEEE, MMMM d') : null}
                          </h3>
                          <div className="px-5 h-[50vh] overflow-auto flex flex-col gap-3">
                            {availableHours.map((item, index) => (
                              <div className="grid grid-cols-2 gap-2">
                                <button
                                  onClick={() => setId(index)}
                                  className={`border text-text-secondary hover:text-primary transition-all cursor-pointer rounded-md py-2 ${
                                    index === id ? '!text-primary' : 'col-span-2'
                                  }`}
                                  key={index}
                                >
                                  {item}
                                </button>
                                {index === id && (
                                  <button
                                    onClick={() => setShowForm(true)}
                                    className="py-2 capitalize bg-primary rounded-md text-white cursor-pointer"
                                  >
                                    next
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default About;
