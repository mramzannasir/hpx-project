import React from "react";

const Location = () => {
  return (
    <>
      <section className="text-white py-28">
        <div>
          <h1 className="text-2xl font-semibold text-center">Our Locations</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 ">
          <div className="grid grid-cols-2 gap-4 p-2 rounded-xl justify-between bg-[#13161b] ">
            <div className="flex flex-col xl:ml-6 ml-2 justify-between">
              <div>
                <h1 className="text-xl">75116 Paris</h1>
                <p className="mt-1 opacity-70">Paris, France</p>
              </div>
              <div className="justify-end">
                <h1 className="text-base font-bold fancy-text cursor-pointer">
                  Go with map
                </h1>
              </div>
            </div>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=75116  Paris&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-2 rounded-xl justify-between bg-[#13161b] ">
            <div className="flex flex-col xl:ml-6 ml-2 justify-between">
              <div>
                <h1 className="text-xl">Rzeszow</h1>
                <p className="mt- opacity-70">
                  35-330 Rzeszow, <br /> Poland
                </p>
              </div>
              <div className="justify-end">
                <h1 className="text-base font-bold fancy-text cursor-pointer">
                  Go with map
                </h1>
              </div>
            </div>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=75116  Pakistan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </section>
    </>
  );
};

export default Location;
