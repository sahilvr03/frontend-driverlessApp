import Head from 'next/head';

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Data Solutions</title>
        <meta name="description" content="Review the official terms and conditions for utilizing Data Solutions' services." />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6 md:px-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">Terms and Conditions</h1>

        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Data Solutions. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before engaging with our offerings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Use of Services</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are designed to provide data solutions tailored to your business needs. Users are expected to utilize our services responsibly and in compliance with all applicable laws and regulations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any misuse of our services, including but not limited to unauthorized data manipulation or distribution, may result in suspension or termination of access.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              At Data Solutions, we are committed to safeguarding your privacy. Please refer to our Privacy Policy for detailed information on how we collect, use, and protect your personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              Data Solutions shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use of our services. Users assume full responsibility for their interactions with our data solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While we strive to ensure the accuracy and reliability of our services, we cannot guarantee that they will be free from errors or interruptions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update these terms and conditions at any time. Updates will be posted on our website, and it is your responsibility to review them periodically.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Continued use of our services after any modifications indicates your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns regarding these terms and conditions, please contact us at <a href="mailto:support@datasolutions.com" className="text-blue-600 hover:underline">support@datasolutions.com</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
