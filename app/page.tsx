import { client } from "@/lib/sanity";
import Image from "next/image";
import MentoriaPackages from "@/components/MentoriaPackages";

export default async function Home() {
  const hero = await client.fetch(`*[_type == "hero"][0]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const services = await client.fetch(`*[_type == "services"][0]`);
  const testimonials = await client.fetch(`*[_type == "testimonials"][0]`);
  const contact = await client.fetch(`*[_type == "contact"][0]`);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <nav className="px-8 py-4 bg-white shadow flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center">
          <Image src="/assets/logo.jpg" alt="Logo" width={50} height={50} className="rounded-md object-contain mr-4" />
          <span className="font-bold text-xl text-blue-800">Sudheer Singh</span>
        </div>
        <div className="flex gap-6 font-semibold text-gray-700">
          <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About Founder</a>
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#mentoria" className="hover:text-blue-600 transition-colors">Mentoria Packages</a>
          <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact Us</a>
        </div>
      </nav>

      <section id="home" className="px-8 py-24 text-center bg-gradient-to-br from-blue-50 to-white min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="max-w-4xl z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 tracking-tight mb-6">
            {hero?.title || "Unlock Your True Potential"}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            {hero?.subtitle || "Expert counselling and entrepreneurship mentoring tailored to guide you towards a successful and fulfilling career."}
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:-translate-y-1">Explore Services</a>
            <a href="#contact" className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 px-8 py-4 rounded-full font-bold text-lg shadow-sm transition-all hover:-translate-y-1">Get in Touch</a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 w-full flex justify-center md:justify-end relative">
          <div className="absolute inset-0 bg-blue-100 rounded-full transform -translate-x-4 translate-y-4 -z-10" style={{ width: "400px", height: "400px" }}></div>
          <Image src="/assets/founder.jpg" alt="Founder" width={400} height={400} className="rounded-full shadow-2xl object-cover border-4 border-white z-10" />
        </div>
        <div className="flex-1 w-full text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-6 text-blue-900">{about?.title || "Meet Sudheer Singh"}</h2>
          <div className="w-20 h-1 bg-blue-600 mb-8 mx-auto md:mx-0 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {about?.description || "Sudheer Singh is a renowned counsellor and entrepreneur dedicated to helping individuals discover their path. With years of experience guiding students, graduates, and professionals, Sudheer brings a wealth of practical knowledge and empathetic mentoring to every session."}
          </p>
        </div>
      </section>

      <section id="services" className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-blue-900">{services?.title || "Our Services"}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(services?.items || ["Personal Counseling", "Career Guidance", "Entrepreneurship Mentoring", "Skill Development", "Profile Building", "Study Abroad Consultation"]).map((item: string, i: number) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-blue-200 group">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item}</h3>
                <p className="text-gray-600">Tailored support and expert guidance to help you excel in this domain.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MentoriaPackages />

      <section id="testimonials" className="py-24 px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-blue-900">{testimonials?.title || "What People Say"}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(testimonials?.items || [
              { text: "Great experience! The guidance was exactly what I needed to launch my career.", name: "John Doe" },
              { text: "Highly recommended. Extremely professional and insightful mentoring sessions.", name: "Jane Smith" },
              { text: "Sudheer transformed my approach to entrepreneurship. I am now confident and prepared.", name: "Alex Johnson" }
            ]).map((t: any, i: number) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <div className="text-blue-200 absolute top-4 right-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" /></svg>
                </div>
                <p className="text-gray-700 italic mb-6 relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-8 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-12">Get in touch with us today and let's discuss how we can help you achieve your goals.</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <div className="bg-gray-800 p-8 rounded-2xl flex-1 border border-gray-700 flex flex-col items-center">
              <svg className="w-8 h-8 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <h3 className="text-gray-400 mb-2">Email Us</h3>
              <p className="font-bold text-xl">{contact?.email || "contact@sudheersingh.com"}</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl flex-1 border border-gray-700 flex flex-col items-center">
              <svg className="w-8 h-8 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <h3 className="text-gray-400 mb-2">Call Us</h3>
              <p className="font-bold text-xl">{contact?.phone || "+91 98765 43210"}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

