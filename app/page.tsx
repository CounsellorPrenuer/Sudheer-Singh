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

      <section id="mentoria" className="p-16">
        <h2 className="text-3xl font-bold mb-4">Mentoria Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="border p-4 rounded shadow bg-white flex flex-col items-center">
              <Image src={`/assets/Mentoria${i}.png`} alt={`Package ${i}`} width={300} height={400} />
              <h3 className="text-xl font-bold mt-4">Package {i}</h3>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Buy Now</button>
            </div>
          ))}
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
