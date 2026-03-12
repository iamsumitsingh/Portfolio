'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Section 2: 22% to 42%
  const opacity2 = useTransform(
    scrollYProgress,
    [0.22, 0.32, 0.42],
    [0, 1, 0]
  );
  const y2 = useTransform(scrollYProgress, [0.22, 0.42], [100, -100]);

  // Section 3: 45% to 65%
  const opacity3 = useTransform(
    scrollYProgress,
    [0.45, 0.55, 0.65],
    [0, 1, 0]
  );
  const y3 = useTransform(scrollYProgress, [0.45, 0.65], [100, -100]);

  // Section 4 (Skills): 68% to 90%
  const opacity4 = useTransform(
    scrollYProgress,
    [0.68, 0.78, 0.85, 0.95],
    [0, 1, 1, 0]
  );
  const y4 = useTransform(scrollYProgress, [0.68, 0.95], [100, -100]);

  const skills = [
    'PYTHON', 'SQL', 'SPARK', 'PYSPARK', 'DATABRICKS', 'AWS', 
    'MONGO DB', 'AIRFLOW', 'KAFKA', 'SNOWFLAKE', 'DATA MODELLING'
  ];

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-10 h-[500vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-2xl">
            Sumit Singh
          </h1>
          <p className="mt-4 text-xl font-medium tracking-wide text-zinc-300 md:text-3xl drop-shadow-md">
            Data Engineer.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
        >
          <h2 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-6xl text-balance drop-shadow-2xl">
            Building scalable data pipelines and ETL systems.
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center p-8 text-right md:p-24"
        >
          <h2 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-6xl text-balance drop-shadow-2xl">
            Working with Python, SQL, Spark, and Cloud Data Platforms.
          </h2>
        </motion.div>

        {/* Section 4: Skills */}
        <motion.div
          style={{ opacity: opacity4, y: y4 }}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        >
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-xl">
            Technical Skills
          </h2>
          <div className="flex max-w-4xl flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm md:text-base font-medium text-zinc-200 backdrop-blur-md shadow-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
