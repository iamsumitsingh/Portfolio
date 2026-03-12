import React from 'react';

const PROJECTS = [
  {
    title: 'Data Lakehouse Pipeline',
    description: 'Built a scalable data lakehouse pipeline using Apache Spark and Delta Lake to ingest and transform batch datasets stored in AWS S3',
    tech: ['Apache Spark', 'AWS S3', 'Delta Lake', 'Python'],
  },
  {
    title: 'Automated ETL Pipeline',
    description: 'Designed a scheduled ETL pipeline orchestrated with Apache Airflow to extract data from APIs, perform transformations with Spark, and load curated datasets into a data warehouse for reporting..',
    tech: ['Python', 'Apache Airflow', 'Spark', 'SQL'],
  },
  {
    title: 'Spotify ETL Pipeline',
    description: 'Built an ETL pipeline to extract data from Spotify API, perform transformations with Python, and load curated datasets into a AWS S3 bucket and visualized using PowerBI.',
    tech: ['Python', 'PowerBI', 'Athena', 'AWS S3'],
  },
  {
    title: 'Cloud Data Platform',
    description: 'Built a cloud-based analytics pipeline on AWS using S3 for storage, Spark for processing, and Delta Lake for transactional data management, enabling efficient batch analytics workflows.',
    tech: ['Spark', 'AWS S3', 'Delta Lake', 'Python'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 bg-[#121212] px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A showcase of data platforms and pipelines built for scale and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-sm"
            >
              <h3 className="mb-4 text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-8 text-zinc-300 leading-relaxed text-balance">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
