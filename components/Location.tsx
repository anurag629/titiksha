"use client";
import React from 'react';

const Location: React.FC = () => {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-lg">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=iet khandari agra&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    className=' shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-lg'
                ></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quae fugit debitis assumenda molestiae ad, nulla ea voluptate vel, voluptatibus inventore maiores. Temporibus explicabo animi vero quia odit placeat esse?</p>
                    ?
                    {/* <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
                    <p className="text-xs text-gray-500 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </section>
    );
};

export default Location;
