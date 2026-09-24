"use client";

import React, { useState } from "react";

export default function MentoriaPackages() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "8-9 STUDENTS",
    "10-12 STUDENTS",
    "COLLEGE GRADUATES",
    "WORKING PROFESSIONALS",
    "CUSTOMISABLE PLANS"
  ];

  return (
    <section id="mentoria" className="p-16 bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Mentoria's Plans</h2>
      
      {/* Toggle Bar */}
      <div className="flex flex-wrap bg-white rounded-md shadow max-w-5xl w-full mb-8 overflow-hidden text-sm md:text-base font-semibold border border-gray-200">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 min-w-[150px] text-center py-4 cursor-pointer border-l first:border-l-0 transition-colors ${
              activeTab === index
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-gray-50"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Content Area */}
      {activeTab !== 4 ? (
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full justify-center animate-fade-in">
          {/* Standard Card */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col relative transition-transform hover:-translate-y-1">
            <div className="text-blue-400 font-bold mb-4 tracking-wider text-sm">STANDARD</div>
            <h3 className="text-blue-500 font-bold text-2xl text-center">Discover</h3>
            <div className="text-center text-blue-500 font-bold text-4xl my-4">
              <span className="text-lg">₹</span> 5,500
            </div>
            
            <ul className="flex-1 mt-6 space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✓</span> Psychometric assessment to measure your interests</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✓</span> 1 career counselling session with Mentoria's expert career coaches</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✓</span> Lifetime access to Knowledge Gateway</li>
              <li className="flex items-start gap-2"><span className="text-blue-500 font-bold">✓</span> Invites to live webinars by industry experts</li>
              <li className="flex items-start gap-2 opacity-50 line-through"><span className="text-blue-500 font-bold">✕</span> Customised reports after each session with education pathways</li>
              <li className="flex items-start gap-2 opacity-50 line-through"><span className="text-blue-500 font-bold">✕</span> Guidance on studying abroad</li>
              <li className="flex items-start gap-2 opacity-50 line-through"><span className="text-blue-500 font-bold">✕</span> CV building during internships/graduation</li>
            </ul>
            
            <button className="mt-8 w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 rounded-full transition-colors">
              BUY NOW
            </button>
          </div>

          {/* Premium Card */}
          <div className="flex-1 bg-white border border-blue-200 rounded-xl p-8 shadow-lg flex flex-col relative transition-transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">POPULAR</div>
            <div className="text-blue-500 font-bold mb-4 tracking-wider text-sm">PREMIUM</div>
            <h3 className="text-blue-600 font-bold text-2xl text-center">Discover plus+</h3>
            <div className="text-center text-blue-600 font-bold text-4xl my-4">
              <span className="text-lg">₹</span> 15,000
            </div>
            
            <ul className="flex-1 mt-6 space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Psychometric assessments to measure your interests, personality and abilities</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> 8 career counselling sessions (1 every year) with Mentoria's expert career coaches until graduation</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Lifetime access to Knowledge Gateway</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Invites to live webinars by industry experts</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Customised reports after each session with education pathways</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> Guidance on studying abroad</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 font-bold">✓</span> CV building during internships/graduation</li>
            </ul>
            
            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full transition-colors">
              BUY NOW
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl w-full bg-white border border-gray-200 rounded-xl p-10 shadow-sm text-center animate-fade-in">
          <h3 className="text-blue-600 font-bold text-2xl mb-4">Create Your Own Plan</h3>
          <p className="text-gray-600 mb-8">Not finding exactly what you need? We offer highly customisable plans tailored to your unique requirements. Get in touch with us to design a Mentoria package specifically for you.</p>
          <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
            CONTACT US FOR CUSTOM PLANS
          </a>
        </div>
      )}
    </section>
  );
}
