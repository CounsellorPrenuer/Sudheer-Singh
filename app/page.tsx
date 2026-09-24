import { client } from "@/lib/sanity";
import Image from "next/image";

export default async function Home() {
  const hero = await client.fetch(`*[_type == "hero"][0]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const services = await client.fetch(`*[_type == "services"][0]`);
  const testimonials = await client.fetch(`*[_type == "testimonials"][0]`);
  const contact = await client.fetch(`*[_type == "contact"][0]`);

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="p-4 bg-white shadow flex gap-4 sticky top-0 z-50">
        <a href="#home">Home</a>
        <a href="#about">About Founder</a>
        <a href="#services">Services</a>
        <a href="#mentoria">Mentoria Packages</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact Us</a>
      </nav>

      <section id="home" className="p-8 text-center bg-blue-100 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">{hero?.title || "Sudheer Singh"}</h1>
        <p className="text-xl mt-4">{hero?.subtitle || "Counsellor & Entrepreneur"}</p>
        <Image src="/assets/founder.jpg" alt="Founder" width={400} height={400} className="mt-8 rounded-full" />
      </section>

      <section id="about" className="p-16">
        <h2 className="text-3xl font-bold mb-4">{about?.title || "About Founder"}</h2>
        <p>{about?.description || "Sudheer Singh is a dedicated counsellor."}</p>
      </section>

      <section id="services" className="p-16 bg-white">
        <h2 className="text-3xl font-bold mb-4">{services?.title || "Services"}</h2>
        <ul className="list-disc pl-8">
          {services?.items?.map((item: string, i: number) => <li key={i}>{item}</li>)}
        </ul>
      </section>

      <section id="mentoria" className="p-16 bg-gray-50 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">Mentoria's Plans</h2>
        
        {/* Toggle Bar */}
        <div className="flex bg-white rounded-md shadow max-w-4xl w-full mb-8 overflow-hidden text-sm md:text-base font-semibold border border-gray-200">
          <div className="flex-1 bg-blue-600 text-white text-center py-4 cursor-pointer">8-9 STUDENTS</div>
          <div className="flex-1 text-blue-600 text-center py-4 border-l cursor-pointer hover:bg-gray-50">10-12 STUDENTS</div>
          <div className="flex-1 text-blue-600 text-center py-4 border-l cursor-pointer hover:bg-gray-50">COLLEGE GRADUATES</div>
          <div className="flex-1 text-blue-600 text-center py-4 border-l cursor-pointer hover:bg-gray-50">WORKING PROFESSIONALS</div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full justify-center">
          
          {/* Standard Card */}
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col relative">
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
          <div className="flex-1 bg-white border border-gray-200 rounded-xl p-8 shadow-lg flex flex-col relative">
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
      </section>

      <section id="testimonials" className="p-16 bg-white">
        <h2 className="text-3xl font-bold mb-4">{testimonials?.title || "Testimonials"}</h2>
        <div className="flex gap-4">
          {testimonials?.items?.map((t: any, i: number) => (
            <div key={i} className="p-4 border rounded">
              <p>"{t.text}"</p>
              <p className="font-bold mt-2">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="p-16 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p>Email: {contact?.email || "contact@sudheersingh.com"}</p>
        <p>Phone: {contact?.phone || "+91 0000000000"}</p>
      </section>
    </main>
  );
}
