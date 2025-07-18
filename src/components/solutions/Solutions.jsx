import React from 'react';

function Solutions() {
  const collabApps = [
    { id: '1', icon: '/robotic-process-automation_14511501 1.png', name: 'Automation' },
    { id: '2', icon: '/automation_7096309 1.png', name: 'Bot' },
    { id: '3', icon: '/build_17352824 1.png', name: 'Build' },
    { id: '4', icon: '/clock_15258668 1.png', name: 'Clock' },
    { id: '5', icon: '/cloud-computing_291553 1.png', name: 'Cloud' },
    { id: '6', icon: '/web-coding_4834819 1.png', name: 'Coding' },
  ];

  return (
    <section className="px-6 lg:px-35">
      <div className="grid grid-cols-2 items-center">
        <div
          style={{
            boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
          }}
          className="bg-[#ECEDF1] col-span-2 lg:col-span-1 py-15 flex flex-col px-7 gap-8 justify-center items-center rounded-3xl"
        >
          <div className="relative w-[316px] aspect-square rounded-xl flex items-center justify-center">
            <div
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              className="w-20 h-20 rounded-xl flex items-center justify-center z-10"
            >
              <img
                src={'/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg.png'}
                alt="brainwave"
                className="w-16 h-16"
              />
            </div>
            <ul className="absolute inset-0">
              {collabApps.map((item, index) => {
                const angle = index * (360 / collabApps.length);
                return (
                  <li
                    key={item.id}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg) translate(-50%, -50%)`,
                    }}
                  >
                    <div
                      style={{
                        boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
                      }}
                      className="flex w-12 h-12 rounded-xl items-center justify-center"
                    >
                      <img className="w-8 h-8" src={item.icon} alt={item.name} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl font-semibold">Process automation</p>
            <p className="text-base">
              We analyze your processes and implement tailored workflows to automate tasks and
              optimize operations efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
