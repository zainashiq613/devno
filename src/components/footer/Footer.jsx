function Footer() {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-7 items-center">
        <img className="max-w-[160px]" src="/devno-logo.png" alt="" />
        <div className="flex flex-col md:flex-row items-center gap-13">
          <a
            href="#"
            className="lg:text-[22px] text-text-dark hover:text-primary transition-all duration-200 text-lg"
          >
            Process
          </a>
          <a
            href="#"
            className="lg:text-[22px] text-text-dark hover:text-primary transition-all duration-200 text-lg"
          >
            Services
          </a>
          <a
            href="#"
            className="lg:text-[22px] text-text-dark hover:text-primary transition-all duration-200 text-lg"
          >
            Benefits
          </a>
          <a
            href="#"
            className="lg:text-[22px] text-text-dark hover:text-primary transition-all duration-200 text-lg"
          >
            Plans
          </a>
          <a
            href="#"
            className="lg:text-[22px] text-text-dark hover:text-primary transition-all duration-200 text-lg"
          >
            Testimonials
          </a>
        </div>
        <p className="text-text-dark text-xl">Create Future with us!</p>
        <div className="w-full flex flex-col md:flex-row gap-7 items-center justify-between">
          <p className="text-lg text-text-dark">© Copyright 2021 Devno Sol.</p>
          <div className="flex items-center gap-5">
            <a
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              href="#"
              className="bg-[#ECEDF1] px-4 py-4 rounded-lg transition-all transform hover:scale-120 duration-300"
            >
              <img src="/linkedin 1.png" alt="" />
            </a>
            <a
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              href="#"
              className="bg-[#ECEDF1] px-4 py-4 rounded-lg transition-all transform hover:scale-120 duration-300"
            >
              <img src="/instagram 1.png" alt="" />
            </a>
            <a
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              href="#"
              className="bg-[#ECEDF1] px-4 py-4 rounded-lg transition-all transform hover:scale-120 duration-300"
            >
              <img src="/facebook 1.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
