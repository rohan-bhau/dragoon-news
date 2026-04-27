import React from 'react'

const AboutUsPAge = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">About Dragoon News</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Delivering fast, factual, and meaningful news that keeps you informed.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="mb-12">
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-semibold">Dragoon News</span>, your
            trusted source for timely, accurate, and insightful news from around
            the world. We focus on delivering stories that matter — without
            noise, without bias, and without delay.
          </p>
        </div>

        {/* Grid Sections */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To inform, educate, and empower readers through high-quality
              journalism. We provide balanced perspectives and meaningful
              analysis to help you understand complex issues.
            </p>
          </div>

          {/* Coverage */}
          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-3">What We Cover</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Breaking News & Current Events</li>
              <li>• Technology & Innovation</li>
              <li>• Business & Economy</li>
              <li>• Politics & Global Affairs</li>
              <li>• Culture & Lifestyle</li>
            </ul>
          </div>
        </div>

        {/* Team */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Dragoon News is powered by a passionate team of writers, editors,
            and contributors dedicated to delivering reliable and impactful
            news.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-16 text-center bg-gray-100 p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Have questions, feedback, or story tips?
          </p>
          <a
            href="mailto:contact@dragoonnews.com"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            contact@dragoonnews.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Dragoon News. All rights reserved.
      </footer>
    </main>
  );
}

export default AboutUsPAge
