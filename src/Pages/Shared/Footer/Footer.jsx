

const Footer = () => {
    return (
      <footer>
        <div className="text-center text-white flex items-center justify-center">
          <div className=" bg-[#1F2937] p-20 md:pl-96">
            <h3>Contact Us</h3>
            <p>
              123 ABS Street, Uni 21, Bangladesh <br />
              +88 123456789 Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
          <div className="bg-[#111827] p-20 md:pr-96">
            <h3>Contact Us</h3>
            <p>
              123 ABS Street, Uni 21, Bangladesh <br />
              +88 123456789 Mon - Fri: 08:00 - 22:00 <br />
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
        <div className="footer sm:footer-horizontal footer-center bg-[#151515] text-[#FFFFFF] p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Bluebird City
            </p>
          </aside>
        </div>
      </footer>
    );
};

export default Footer;