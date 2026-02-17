// In your page.js or layout.js file
export const metadata = {
  title: 'Our Services | Data Solutions',
  description: 'Explore our range of data services including annotation, cleaning, formatting, and raw data provisioning.',
};

import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6 md:px-16 mt-20">
      <h1 className="text-5xl font-bold text-red-600 mb-12 text-center">Our Professional Services</h1>
      <p className="text-lg text-red-800 mb-16 text-center max-w-3xl">
        At Data Solutions, we offer a comprehensive suite of data services tailored to meet your unique business needs. From data annotation to raw data provisioning, our experts are here to help you transform your data into actionable insights.
      </p>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          title="Data Annotation"
          description="Enhance your AI models with precise and accurate data annotation services. Our team ensures that your data is properly labeled for machine learning applications."
          icon="📌"
          link="/services/data-annotation"
        />
        <ServiceCard
          title="Data Cleaning"
          description="Ensure your data is clean, consistent, and ready for analysis. We eliminate errors, fill missing values, and standardize your datasets for optimal performance."
          icon="🧹"
          link="/services/data-cleaning"
        />
        {/* <ServiceCard
          title="Data Formatting"
          description="Transform your raw data into structured formats that are easy to use and understand. Our formatting services help you organize your data efficiently."
          icon="🗃️"
          link="/services/data-formatting"
        /> */}
        <ServiceCard
          title="Raw Data Provisioning"
          description="Access high-quality raw datasets tailored to your industry. We provide reliable data sources to help you kickstart your projects with valuable insights."
          icon="📊"
          link="/services/raw-data"
        />
        <ServiceCard
          title="Custom Data Solutions"
          description="We offer customized data solutions to address specific business challenges. Let us know your requirements, and we’ll provide tailored services."
          icon="⚙️"
          link="/services/custom-solutions"
        />
        <ServiceCard
          title="Consulting Services"
          description="Our data experts provide consulting services to help you maximize the value of your data. From strategy to implementation, we guide you every step of the way."
          icon="💼"
          link="/services/consulting"
        />
      </div>
    </div>
  );
}

function ServiceCard({ title, description, icon, link }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col justify-between text-center hover:shadow-2xl transition-shadow duration-300">
      <div className="text-6xl mb-4 text-blue-500">{icon}</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      <Link href={link} className="text-blue-600 font-semibold flex justify-center items-center gap-2 hover:underline">
        Learn More <span>➡️</span>
      </Link>
    </div>
  );
}
