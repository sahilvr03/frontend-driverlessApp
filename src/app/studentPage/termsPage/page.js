"use client"

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faKey,
  faLock,
  faBalanceScale,
  faTerminal,
  faFileContract,
  faGavel,
  faExchangeAlt,
  faCheckCircle,
  
  faShieldHalved, 
  faCopyright, 
  faScaleBalanced, 
  faHandshake, 
  faScaleUnbalanced,
  faWarning,
  faBookLaw,
  faLandmark,
  faFileCircleCheck
} from '@fortawesome/free-solid-svg-icons';

const TermsPage = () => {
  

  const Section = ({ id, title, icon, children }) => (
    <section id={id} className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <FontAwesomeIcon icon={icon} className="mr-2 text-blue-600" />
        {title}
      </h2>
      {children}
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <FontAwesomeIcon icon={faFileContract} className="mr-3 text-blue-600" />
            NCAI Smart City Lab - Data Terms of Use
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-2 sticky top-8 h-fit">
            <nav className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-3">Sections</h2>
              <ul className="space-y-2">
                {['introduction', 'data-access', 'ownership', 'liability', 'termination', 'governance'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded block transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${section}`).scrollIntoView({
                          behavior: 'smooth'
                        });
                      }}
                    >
                      {section.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-sm">
            <Section id="introduction" title="1. Introduction" icon={faShieldAlt}>
              <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions the Terms govern the access to and
               use of autonomous driving vehicle data the Data provided by 
               the NCAI Smart City Lab. By accessing or using the Data, you 
               the Recipient acknowledge and agree to comply with these 
               Terms in full. Failure to adhere to these Terms may result in 
              termination of access to the Data and potential legal action.              </p>
            </Section>

            <Section id="data-access" title="2. Data Access & Use" icon={faKey}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-600" />
                    2.1 Authorized Use
                  </h3>
                  <p className="text-gray-700">
                  The Data is provided exclusively 
                  for research, development, and testing of 
                  autonomous driving technologies. Any use of the 
                  Data for purposes other than those explicitly permitted, 
                  including commercialization, redistribution, or incorporation 
                  into proprietary datasets, is strictly prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <FontAwesomeIcon icon={faLock} className="mr-2 text-purple-600" />
                    2.2 Confidentiality
                  </h3>
                  <p className="text-gray-700">
                  The Data is confidential and proprietary. The Recipient must not disclose the Data, in whole or in part, to any third party without prior written authorization from the NCAI Smart City Lab. The Recipient is responsible for ensuring all personnel with access to the Data adhere to these confidentiality requirements.

                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <FontAwesomeIcon icon={faShieldHalved } className="mr-2 text-blue-600" />
                    2.3 Security Measures
                  </h3>
                  <p className="text-gray-700">
                  The Recipient is required to implement and maintain 
                  robust security practices to protect the Data from 
                  unauthorized access, misuse, or loss. Security measures 
                  must include encrypted storage, secure access protocols
                  and regular audits. Any security breaches must 
                  be reported to the NCAI Smart City Lab immediately.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-600" />
                    2.4 Attribution
                  </h3>
                  <p className="text-gray-700">
                  The Recipient must properly attribute the 
                  NCAI Smart City Lab as the source of the Data 
                  in all publications, presentations, or derivative
                   works that incorporate or rely upon the Data. Attribution must follow the format specified by the NCAI Smart City Lab.

                  </p>
                </div>
              </div>
            </Section>

            <Section id="ownership" title="3. Data Ownership" icon={faBalanceScale}>
            <div>
                  <h3 className="text-xl font-semibold mb-3 mt-4 flex items-center">
                    <FontAwesomeIcon icon={faCopyright} className="mr-2 text-purple-600" />
                    3.1 Ownership of Data
                  </h3>
                  <p className="text-gray-700">
                  The NCAI Smart City Lab retains exclusive ownership of 
                  all rights, titles, and interests in the Data, including all 
                  associated intellectual property rights.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 mt-4 flex items-center">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-emerald-600" />
                    3.2 License for Use
                  </h3>
                  <p className="text-gray-700">
                  The Recipient is granted a limited, non-exclusive, non-transferable, and revocable license to use the Data solely for the purposes outlined in these Terms. This license does not convey ownership or any additional rights to the Data.

                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 mt-4 flex items-center">
                    <FontAwesomeIcon icon={faFileContract} className="mr-2 text-cyan-600" />
                    3.3 Derivative Works
                  </h3>
                  <p className="text-gray-700">
                  Any derivatives, models, or outputs created using the Data must remain consistent with the permitted use. Ownership of such derivatives will not extend to the original Data, which remains the sole property of the NCAI Smart City Lab.
                  </p>
                </div>

            </Section>

            <Section id="liability" title="4. Limitation of Liability" icon={faBalanceScale}>
            <div>
                  <h3 className="text-xl font-semibold mb-3 mt-4 flex items-center">
                    <FontAwesomeIcon icon={faWarning} className="mr-2 text-amber-600" />
                    4.1 No Warranty
                  </h3>
                  <p className="text-gray-700">
                  The Data is provided as is
                  without any representations or warranties, 
                  express or implied. The NCAI Smart City Lab 
                  disclaims all warranties, including but not limited to 
                  accuracy, completeness, 
                  merchantability, fitness for a particular purpose, 
                  or non-infringement
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 mt-4 flex items-center">
                    <FontAwesomeIcon icon={faGavel} className="mr-2 text-red-600" />
                    4.2 Limited Liability
                  </h3>
                  <p className="text-gray-700">
                  The NCAI Smart City Lab shall not be held liable for any direct, 
                  indirect, incidental, or consequential damages arising from the use,
                  misuse, or 
                  inability to use the Data, even if advised of the possibility of such damages.
                  </p>
                </div>
                
            </Section>

            <Section id="termination" title="5. Termination" icon={faTerminal}>
            <div>
                  <h3 className="text-xl font-semibold mb-3 mt-4 flex items-center">
                    <FontAwesomeIcon icon={faExchangeAlt} className="mr-2 text-green-600" />
                    5.1 Termination of Access
                  </h3>
                  <p className="text-gray-700">
                  The NCAI Smart City Lab reserves the right to terminate the Recipient access to the Data at any time, with or without notice, for any breach of these Terms or at the sole discretion of the NCAI Smart City Lab.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 mt-4 flex items-center">
                    <FontAwesomeIcon icon={faHandshake} className="mr-2 text-green-600" />
                    5.2 Post-Termination Obligations
                  </h3>
                  <p className="text-gray-700">
                  Upon termination, the Recipient must immediately cease using the Data, delete or destroy all copies, and certify compliance with this requirement to the NCAI Smart City Lab within [7/14] days.
                  </p>
                </div>
            </Section>
            

            <Section id="governance" title="6. Governing Law and Compliance" icon={faGavel}>
            <div>
                  <h3 className="text-xl font-semibold mb-3 mt-4 flex items-center">
                    <FontAwesomeIcon icon={faScaleUnbalanced} className="mr-2 text-indigo-600" />
                    6.1 Applicable Laws
                  </h3>
                  <p className="text-gray-700">
                  These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction, e.g., Pakistan], without regard to conflict of law principles.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 mt-4 flex items-center">
                    <FontAwesomeIcon icon={faBalanceScale} className="mr-2 text-green-600" />
                    6.2 Regulatory Compliance
                  </h3>
                  <p className="text-gray-700">
                  The Recipient must comply with all applicable laws, regulations, and ethical guidelines in their jurisdiction regarding data usage, privacy, and intellectual property rights.                  </p>
                </div>
            </Section>
            <Section id="changes" title="7. Changes to the Terms" icon={faFileCircleCheck}>
              <div>
                <h3 className="text-xl font-semibold mb-3 mt-4 flex items-center">
                  <FontAwesomeIcon icon={faExchangeAlt} className="mr-2 text-green-600" />
                  7.1 Modifications
                </h3>
                <p className="text-gray-700">
                  The NCAI Smart City Lab reserves the right to modify these Terms at any time. 
                  Continued use of the Data after changes constitutes acceptance of the revised Terms.
                </p>
              </div>
            </Section>

            <Section id="general-provisions" title="8. General Provisions" icon={faLandmark}>
              <div>
                <h3 className="text-xl font-semibold mb-3 mt-4 flex items-center">
                  <FontAwesomeIcon icon={faScaleBalanced} className="mr-2 text-indigo-600" />
                  8.1 Severability
                </h3>
                <p className="text-gray-700">
                  If any provision of these Terms is invalid or unenforceable, the remaining provisions 
                  remain in full effect.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 mt-4 flex items-center">
                  <FontAwesomeIcon icon={faHandshake} className="mr-2 text-green-600" />
                  8.2 No Waiver
                </h3>
                <p className="text-gray-700">
                  Failure to enforce any provision does not constitute a waiver of rights under these Terms.
                </p>
              </div>
            </Section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <label className="flex items-center space-x-3">
                
                <span className="text-gray-700">
                By accessing or using the Data, you confirm that you have read, understood, and agree to comply with these Terms.                </span>
              </label>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsPage;