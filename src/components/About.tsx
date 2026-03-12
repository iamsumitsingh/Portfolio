import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-[#121212] px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Me
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>
                I’m a data engineering enthusiast with a strong foundation in Python and SQL, passionate about building scalable data pipelines and modern data platforms.
              </p>
              <p>
                I work with tools like <strong>Apache Spark</strong>, <strong>Apache Airflow</strong>, <strong>Delta Lake</strong>, and <strong>dbt</strong> to design reliable ETL workflows. I also have experience building cloud-based data solutions on Amazon Web Services using services like <strong>Amazon S3</strong> and <strong>AWS Glue</strong>.
              </p>
              <p>
                I enjoy transforming raw data into structured, analytics-ready datasets that drive insights.
              </p>
            </div>
          </div>

          {/* Decorative Visual element */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative h-64 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm sm:h-80">
               {/* Abstract decorative graphic representing data flow */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M0,50 Q25,10 50,50 T100,50" className="animate-[dash_3s_linear_infinite] [stroke-dasharray:10_10]" />
                  <path d="M0,30 Q25,70 50,30 T100,30" className="animate-[dash_4s_linear_infinite] [stroke-dasharray:15_15] opacity-50" />
                  <path d="M0,70 Q25,-10 50,70 T100,70" className="animate-[dash_5s_linear_infinite] [stroke-dasharray:5_5] opacity-70" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
