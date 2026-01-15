export default function Banner() {
  const startDate = new Date("2021-04-01");
  const now = new Date();
  const experienceYears =
    now.getFullYear() -
    startDate.getFullYear() -
    (now < new Date(now.getFullYear(), startDate.getMonth()) ? 1 : 0);

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Full Stack Developer
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
          {experienceYears}+ years of experience building scalable, high-performance
          web applications using <span className="text-white">Next.js</span>,
          <span className="text-white"> Spring Boot</span>, and
          <span className="text-white"> AWS</span>.  
          Experienced in designing end-to-end systems and owning features from
          architecture to production.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-700 rounded-lg
                       text-white hover:bg-gray-800 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-lg
                       hover:bg-gray-200 transition"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 border border-gray-700 rounded-lg
                       text-white hover:bg-gray-800 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
