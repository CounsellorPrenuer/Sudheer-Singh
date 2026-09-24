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

  const packagesData = [
    // 8-9 STUDENTS
    {
      standard: {
        name: "Discover",
        price: "5,500",
        features: [
          { text: "Psychometric assessment to measure your interests", included: true },
          { text: "1 career counselling session with Mentoria's expert career coaches", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Invites to live webinars by industry experts", included: true },
          { text: "Customised reports after each session with education pathways", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV building during internships/graduation", included: false }
        ]
      },
      premium: {
        name: "Discover plus+",
        price: "15,000",
        features: [
          { text: "Psychometric assessments to measure your interests, personality and abilities", included: true },
          { text: "8 career counselling sessions (1 every year) with Mentoria's expert career coaches until graduation", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Invites to live webinars by industry experts", included: true },
          { text: "Customised reports after each session with education pathways", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV building during internships/graduation", included: true }
        ]
      }
    },
    // 10-12 STUDENTS
    {
      standard: {
        name: "Achieve Online",
        price: "5,999",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "1 career counselling session", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Pre-recorded webinars by industry experts", included: true },
          { text: "Customised reports after each session with education pathways", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV reviews during internships/graduation", included: false }
        ]
      },
      premium: {
        name: "Achieve Plus+",
        price: "10,599",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "4 career counselling sessions", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Attend live webinars by industry experts", included: true },
          { text: "Customised reports after each session with education pathways", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV reviews during internships/graduation", included: true }
        ]
      }
    },
    // COLLEGE GRADUATES
    {
      standard: {
        name: "Ascend Online",
        price: "6,499",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "1 career counselling session", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Pre-recorded webinars by industry experts", included: true },
          { text: "Customised reports after each session with information on certificate/online courses", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV reviews for job application", included: false }
        ]
      },
      premium: {
        name: "Ascend Plus+",
        price: "10,599",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "3 career counselling sessions", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Attend live webinars by industry experts", included: true },
          { text: "Customised reports after each session with information on certificate/online courses", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV reviews for job application", included: true }
        ]
      }
    },
    // WORKING PROFESSIONALS
    {
      standard: {
        name: "Ascend Online",
        price: "6,499",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "1 career counselling session", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Pre-recorded webinars by industry experts", included: true },
          { text: "Customised reports after each session with information on certificate/online courses", included: false },
          { text: "Guidance on studying abroad", included: false },
          { text: "CV reviews for job application", included: false }
        ]
      },
      premium: {
        name: "Ascend Plus+",
        price: "10,599",
        features: [
          { text: "Psychometric assessment to measure your interests, personality and abilities", included: true },
          { text: "3 career counselling sessions", included: true },
          { text: "Lifetime access to Knowledge Gateway", included: true },
          { text: "Attend live webinars by industry experts", included: true },
          { text: "Customised reports after each session with information on certificate/online courses", included: true },
          { text: "Guidance on studying abroad", included: true },
          { text: "CV reviews for job application", included: true }
        ]
      }
    }
  ];

  const customisablePlans = [
    { title: "CV Building", price: "₹2000", desc: "Is your CV making a great first impression on your behalf? Our HR experts will help you build the kind of CV that stands out from the crowd and increases your chances of getting interview calls." },
    { title: "LinkedIn Profile Building", price: "₹2000", desc: "Revamp your LinkedIn profile with recommendations from recruitment experts to showcase your career journey and increase your chances of interview calls." },
    { title: "LinkedIn Profile + CV Building", price: "₹3500", desc: "Build the kind of profile recruiters would love to spend time on. Get your CV and LinkedIn profile built by our HR/Recruitment experts." },
    { title: "Job Application Strategy", price: "₹4000", desc: "Build the right pipeline for job interviews through a customised job application tracker with information on companies, job postings and steps you need to follow to land your dream job." },
    { title: "Career Report", price: "₹2500", desc: "Get a detailed report of your psychometric assessment for a scientific analysis of your interests, personality and abilities. Find out where your interests lie and which future paths you can potentially consider." },
    { title: "Career Report + Career Counselling", price: "₹4000", desc: "Connect with India's top career coaches to analyse your psychometric report, get a detailed action plan for your development areas and shortlist the top three career paths you're most likely to enjoy and excel at." },
    { title: "Knowledge Gateway + Career Helpline Access", price: "₹250/month", desc: "Unlock holistic information on your career paths and get direct access to Mentoria's experts, who will resolve your career-related queries through our dedicated Career Helpline. Validate your career decisions from now until you land a job you love." },
    { title: "One-to-One Session with a Career Expert", price: "₹3500 per interaction for 1 hour", desc: "Resolve your career queries and glimpse into your future world through a one-on-one session with an expert from your chosen field." },
    { title: "Overseas Admission Planner", price: "₹3000 for a planner with top 10 colleges in India OR any 1 country abroad", desc: "Planning your masters studies? Get unbiased recommendations and details on your future college options in India and abroad, organised in one resourceful planner." },
    { title: "Overseas Admission: SOP Brainstorm", price: "₹3000 for a one-hour session", desc: "Increase your chances of getting admissions in your dream college by structuring your SOP in the most ideal manner through discussions with an overseas admissions expert." },
    { title: "Overseas Admission: SOP Review", price: "₹2500", desc: "Is your SOP/Essay good enough to get you shortlisted? Get it reviewed by our team of overseas admissions experts to make sure you make the cut." },
    { title: "Interview Prep Session", price: "₹2000", desc: "Ace your upcoming interviews with guidance from India's top HR experts and increase your chances of landing your dream job." }
  ];

  return (
    <section id="mentoria" className="p-8 md:p-16 bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Mentoria's Plans</h2>
      
      {/* Toggle Bar */}
      <div className="flex flex-wrap bg-white rounded-md shadow max-w-6xl w-full mb-12 overflow-hidden text-sm md:text-base font-semibold border border-gray-200">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 min-w-[140px] text-center py-4 px-2 cursor-pointer border-l first:border-l-0 transition-colors ${
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
            <h3 className="text-blue-500 font-bold text-2xl text-center">{packagesData[activeTab].standard.name}</h3>
            <div className="text-center text-blue-500 font-bold text-4xl my-4">
              <span className="text-lg">₹</span> {packagesData[activeTab].standard.price}
            </div>
            
            <ul className="flex-1 mt-6 space-y-4 text-sm text-gray-600">
              {packagesData[activeTab].standard.features.map((feature, idx) => (
                <li key={idx} className={`flex items-start gap-2 ${feature.included ? '' : 'opacity-50 line-through'}`}>
                  {feature.included ? (
                    <span className="text-blue-500 font-bold">✓</span>
                  ) : (
                    <span className="text-blue-500 font-bold">✕</span>
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>
            
            <button className="mt-8 w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-3 rounded-full transition-colors">
              BUY NOW
            </button>
          </div>

          {/* Premium Card */}
          <div className="flex-1 bg-white border border-blue-200 rounded-xl p-8 shadow-lg flex flex-col relative transition-transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">POPULAR</div>
            <div className="text-blue-500 font-bold mb-4 tracking-wider text-sm">PREMIUM</div>
            <h3 className="text-blue-600 font-bold text-2xl text-center">{packagesData[activeTab].premium.name}</h3>
            <div className="text-center text-blue-600 font-bold text-4xl my-4">
              <span className="text-lg">₹</span> {packagesData[activeTab].premium.price}
            </div>
            
            <ul className="flex-1 mt-6 space-y-4 text-sm text-gray-600">
              {packagesData[activeTab].premium.features.map((feature, idx) => (
                <li key={idx} className={`flex items-start gap-2 ${feature.included ? '' : 'opacity-50 line-through'}`}>
                  {feature.included ? (
                    <span className="text-blue-600 font-bold">✓</span>
                  ) : (
                    <span className="text-blue-600 font-bold">✕</span>
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>
            
            <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full transition-colors">
              BUY NOW
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl w-full animate-fade-in flex flex-col items-center">
          <h3 className="text-blue-900 font-bold text-2xl mb-2 text-center">Want To Customise Your Mentorship Plan?</h3>
          <p className="text-gray-600 mb-10 text-center max-w-3xl">If you want to subscribe to specific services from Mentoria that resolve your career challenges, you can choose one or more of the following:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {customisablePlans.map((plan, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <h4 className="font-bold text-blue-900 text-lg">{plan.title}</h4>
                <div className="text-blue-600 font-bold text-sm mb-4">{plan.price}</div>
                <p className="text-gray-600 text-sm flex-1 mb-6">{plan.desc}</p>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors text-sm">
                  BUY NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
