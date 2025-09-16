import Button from '../small/Button';

function Footer() {
  const date = new Date();
  console.log(date.getFullYear());
  return (
    <div className="py-10">
      <div className="flex flex-col gap-7 items-center">
        <img className="max-w-[160px]" src="/devno-logo.png" alt="" />
        <p className="text-text-dark text-xl">We Build What Matters!</p>
        <div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{
            boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
          }}
          className="lg:w-[70%] w-full bg-white rounded-2xl md:p-7 p-5 flex flex-col gap-7 items-center"
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
                className="bg-white text-text-secondary text-base border border-[#E4E4E7] py-3 px-4 rounded-md outline-none"
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
                className="bg-white text-text-secondary text-base border border-[#E4E4E7] py-3 px-4 rounded-md outline-none"
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
                className="bg-white text-text-secondary text-base border border-[#E4E4E7] py-3 px-4 rounded-md outline-none"
              />
            </div>
          </div>
          <div>
            <Button text={'Submit'} />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-7 items-center justify-between">
          <p className="text-lg text-text-dark">© Copyright {date.getFullYear()} Devno Sol.</p>
          <div className="flex items-center gap-5">
            <a
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              href="https://www.linkedin.com/company/devnosol/"
              className="bg-white px-4 py-4 rounded-lg transition-all transform hover:scale-120 duration-300"
            >
              <img src="/linkedin 1.png" alt="" />
            </a>
            <a
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              href="https://www.behance.net/tetraintech"
              className="bg-white px-4 py-4 rounded-lg transition-all transform hover:scale-120 duration-300"
            >
              <img className="w-9" src="/behance-icon.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
