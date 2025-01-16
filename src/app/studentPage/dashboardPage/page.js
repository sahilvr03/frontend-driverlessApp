"use client";
import ProfileCard from '@/app/components/BlogPage/ProfileCard';
import { FaDownload, FaEye } from 'react-icons/fa';

const DataPage = () => {
  // Sample data
  const dataItems = [
    {
      id: 1,
      title: 'Project Report - 2024',
      description: 'Comprehensive project report covering analysis, findings, and recommendations.',
      downloadLink: '/files/report-2024.pdf',
      previewLink: '/preview/report-2024'
    },
    {
      id: 2,
      title: 'Data Analysis - Survey Results',
      description: 'Detailed analysis of survey data collected in Q1.',
      downloadLink: '/files/survey-results.pdf',
      previewLink: '/preview/survey-results'
    },
    {
      id: 3,
      title: 'Research Findings - Environmental Impact',
      description: 'In-depth findings on environmental impacts of recent studies.',
      downloadLink: '/files/environmental-impact.pdf',
      previewLink: '/preview/environmental-impact'
    },
  ];

  return (<div className="container mx-auto flex">
    <aside
      className={`fixed inset-y-0 left-0 transform  'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 w-64 bg-gray-100 p-4 transition-transform duration-300 ease-in-out z-40 `}
    >



      <ProfileCard />


    </aside>
    <section className="py-6 bg-gray-100 container mx-auto flex">

      <div className="container mx-auto px-4">
        <h4 className="text-2xl font-bold text-center text-gray-800 mb-6">Available Data</h4>
        <div className="space-y-6">
          {dataItems.map((item) => (
            <DataItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section></div>
  );
};

const DataItem = ({ item }) => (
  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div>
      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
    <div className="flex space-x-4">
      {/* Preview Button */}
      <a
        href={item.previewLink}
        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEye className="mr-1" /> Preview
      </a>

      {/* Download Button */}
      <a
        href={item.downloadLink}
        className="flex items-center text-green-600 hover:text-green-800 transition-colors"
        download
      >
        <FaDownload className="mr-1" /> Download
      </a>
    </div>
  </div>
);

export default DataPage;
