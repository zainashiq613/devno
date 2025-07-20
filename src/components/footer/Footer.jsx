function Footer() {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-7 items-center">
        <img src="/public/Frame 1000004543.png" alt="" />
        <div className="flex items-center gap-13">
          <a
            href="#"
            className="text-[22px] text-text-dark hover:text-primary transition-all duration-200"
          >
            Process
          </a>
          <a
            href="#"
            className="text-[22px] text-text-dark hover:text-primary transition-all duration-200"
          >
            Services
          </a>
          <a
            href="#"
            className="text-[22px] text-text-dark hover:text-primary transition-all duration-200"
          >
            Benefits
          </a>
          <a
            href="#"
            className="text-[22px] text-text-dark hover:text-primary transition-all duration-200"
          >
            Plans
          </a>
          <a
            href="#"
            className="text-[22px] text-text-dark hover:text-primary transition-all duration-200"
          >
            Testimonials
          </a>
        </div>
        <p className="text-text-dark text-xl">Create Future with us!</p>
        <div className="w-full flex items-center justify-between">
          <p className="text-lg text-text-dark">© Copyright 2024 Devno</p>
          <div className="flex items-center gap-5">
            <a
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              href="#"
              className="bg-[#ECEDF1] px-4 py-4 rounded-lg"
            >
              <img src="/linkedin 1.png" alt="" />
            </a>
            <a
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              href="#"
              className="bg-[#ECEDF1] px-4 py-4 rounded-lg"
            >
              <img src="/instagram 1.png" alt="" />
            </a>
            <a
              style={{
                boxShadow: '10px 10px 20px 0px #A6ABBD40, -10px -10px 20px 0px #FAFBFF',
              }}
              href="#"
              className="bg-[#ECEDF1] px-4 py-4 rounded-lg"
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
