import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <section className="py-24 opacity-[.9999999]">
        <div>
          <h1 className="text-3xl font-semibold text-center text-white">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="grid grid-cols-1 items-center justify-center text-white xl:px-44 mt-12">
          <div className="gf md:p-2 px-1 " id="boxf">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <div className={`${open === 1 ? "bg-[#13161b]" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  Who is responsible for developing HPX?
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-base">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Wre constantly making mistakes. Were
                    constantly trying <br /> to express ourselves and actualize
                    our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
          </div>
          <div className="gf md:p-2 px-1 mt-4 " id="boxf">
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <div className={`${open === 2 ? "bg-[#13161b]" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  So... how do i get my $Hpx?
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-base">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Were constantly trying <br /> to express
                    ourselves and actualize our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
          </div>
          <div className="gf md:p-2 px-1 mt-4 " id="boxf">
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <div className={`${open === 3 ? "bg-[#13161b]" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  When will $Hpx will be release?
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-base">
                    Were not always in the position that we want to be at. Were
                    consng. Were constantly trying <br /> to express ourselve
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
          </div>
          <div className="gf md:p-2 px-1 mt-4 " id="boxf">
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
              <div className={`${open === 4 ? "bg-[#13161b]" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                  Where can i see your NFT platform?
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-base">
                    Were not always in the position that we want to be at.
                    Atantly trying <br /> to express ourselves and actualize our
                    dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
          </div>
          <div className="gf md:p-2 px-1 mt-4 " id="boxf">
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
              <div className={`${open === 5 ? "bg-[#13161b]" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                  Which coins are supported?
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-base">
                    The offcial list of supported coins is available on
                    Hpx.sx/info after the start of the Sacrifice Phase.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
          </div>
          <div className="gf md:p-2 px-1 mt-4 " id="boxf">
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
              <div className={`${open === 6 ? "bg-[#13161b]" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(6)}>
                  Will i be able to store my $Hpx in Mate Mask?
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-base">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Were constantly trying <br /> to express
                    ourselves and actualize our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
          </div>
          <div className="gf md:p-2 px-1 mt-4 " id="boxf">
            <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
              <div className={`${open === 7 ? "bg-[#13161b]" : ""}`}>
                <AccordionHeader onClick={() => handleOpen(7)}>
                  I still have questions! Where can I talk about HPX?
                </AccordionHeader>
                <AccordionBody>
                  <p className="text-base">
                    Were not always in the position that we want to be at. Were
                    constantly growing. Were constantly trying <br /> to express
                    ourselves and actualize our dreams.
                  </p>
                </AccordionBody>
              </div>
            </Accordion>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
