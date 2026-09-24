import { client } from "./lib/sanity";

async function populateSanity() {
  const content = [
    {
      _type: "hero",
      _id: "hero",
      title: "Sudheer Singh",
      subtitle: "Counsellor & Entrepreneur",
    },
    {
      _type: "about",
      _id: "about",
      title: "About Founder",
      description: "Sudheer Singh is a renowned counsellor and entrepreneur.",
    },
    {
      _type: "services",
      _id: "services",
      title: "Our Services",
      items: ["Personal Counseling", "Career Guidance", "Entrepreneurship Mentoring"]
    },
    {
      _type: "testimonials",
      _id: "testimonials",
      title: "Testimonials",
      items: [
        { name: "John Doe", text: "Great experience!" },
        { name: "Jane Smith", text: "Highly recommended." }
      ]
    },
    {
      _type: "contact",
      _id: "contact",
      email: "contact@sudheersingh.com",
      phone: "+91 9876543210"
    }
  ];

  for (const item of content) {
    await client.createOrReplace(item as any);
  }

  console.log("Sanity populated successfully!");
}

populateSanity().catch(console.error);
