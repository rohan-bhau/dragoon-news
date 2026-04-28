
export const metadata = {
  title: "Dragon News | career",
};
export default function CareersPage() {
  const jobs = [
    {
      title: "News Writer",
      location: "Remote",
      type: "Full-time",
      description:
        "Research, write, and publish timely news articles across multiple categories.",
    },
    {
      title: "Editor",
      location: "Remote",
      type: "Full-time",
      description:
        "Review and refine articles to ensure accuracy, clarity, and quality.",
    },
    {
      title: "Social Media Manager",
      location: "Remote",
      type: "Part-time",
      description:
        "Manage and grow our presence across social media platforms.",
    },
  ];

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Careers at Dragoon News</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Join our team and help shape the future of modern journalism.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Work With Us?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          At Dragoon News, we believe in impactful storytelling, innovation, and
          collaboration. We offer a flexible work environment, opportunities for
          growth, and a chance to make a real difference in how news is
          delivered.
        </p>
      </section>

      {/* Job Listings */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Open Positions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {job.location} • {job.type}
              </p>
              <p className="text-gray-600 mb-4">{job.description}</p>

              <a
                href="mailto:careers@dragoonnews.com"
                className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-3">
          Don’t see a role that fits?
        </h2>
        <p className="text-gray-600 mb-6">
          We’re always looking for talented people. Send us your resume anytime.
        </p>
        <a
          href="mailto:careers@dragoonnews.com"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Send Your Resume
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Dragoon News. All rights reserved.
      </footer>
    </main>
  );
}
