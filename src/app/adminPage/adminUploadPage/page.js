"use client";


import { useState, useEffect } from 'react';

const AdminUploadPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [uploadProgress, setUploadProgress] = useState(0);
    const [files, setFiles] = useState([]);
    const [editingFileId, setEditingFileId] = useState(null);

    const fetchFiles = async () => {
        const response = await fetch("http://127.0.0.1:5000/api/data");
        const data = await response.json();
        
        // Sort files by 'created_at' in descending order (latest first)
        const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        
        setFiles(sortedData);
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    const handleFileUpload = async (e) => {
        e.preventDefault();
        if (!file || !title) {
            setMessage("Title and file are required");
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('file', file);

        try {
            const xhr = new XMLHttpRequest();
            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const progress = Math.round((event.loaded / event.total) * 100);
                    setUploadProgress(progress);
                }
            };

            xhr.onload = () => {
                if (xhr.status === 201) {
                    setMessage("File uploaded successfully");
                    setTitle('');
                    setDescription('');
                    setFile(null);
                    setUploadProgress(0);
                    fetchFiles(); // Refresh the file list
                } else {
                    const response = JSON.parse(xhr.responseText);
                    setMessage(response.error || "File upload failed");
                }
            };

            xhr.onerror = () => {
                setMessage("Error uploading file");
                setUploadProgress(0);
            };

            xhr.open("POST", "http://127.0.0.1:5000/api/data/upload", true);
            xhr.send(formData);
        } catch (error) {
            setMessage("Error uploading file");
        }
    };

    const handleDelete = async (fileId) => {
        const response = await fetch(`http://127.0.0.1:5000/api/data/delete/${fileId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setMessage("File deleted successfully");
            fetchFiles(); // Refresh the file list
        } else {
            const data = await response.json();
            setMessage(data.error || "Error deleting file");
        }
    };

    const handleUpdate = async (fileId) => {
        const response = await fetch(`http://127.0.0.1:5000/api/data/update/${fileId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description }),
        });

        if (response.ok) {
            setMessage("File updated successfully");
            setEditingFileId(null);
            setTitle('');
            setDescription('');
            fetchFiles(); // Refresh the file list
        } else {
            const data = await response.json();
            setMessage(data.error || "Error updating file");
        }
    };
    
    return (
        <>
            <section className="flex flex-col lg:flex-row bg-gray-100 min-h-screen p-8">
                {message && <p className="mt-4 text-gray-500">{message}</p>}

                <div className="lg:flex-1 mb-6 lg:mb-0 m-3">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Admin - Upload Data</h2>
                    <form onSubmit={handleFileUpload} className="bg-white shadow-md rounded-lg p-6 space-y-4">
                        <label className="block">
                            <span className="text-gray-700">Title</span>
                            <input
                                type="text"
                                className="block w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Description</span>
                            <textarea
                                className="block w-full mt-1 p-2 border border-gray-300 rounded focus:ring focus:ring-blue-300"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">File</span>
                            <input
                                type="file"
                                className="block w-full mt-1 text-gray-500"
                                onChange={(e) => setFile(e.target.files[0])}
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
                        >
                            Upload
                        </button>
                    </form>

                    {uploadProgress > 0 && (
                        <div className="mt-4">
                            <div className="w-full bg-gray-300 rounded">
                                <div
                                    className="bg-blue-600 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l"
                                    style={{ width: `${uploadProgress}%` }}
                                >
                                    {uploadProgress}%
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-full lg:w-1/3">
                    <h2 className="text-2xl font-bold mt-6 mb-4 text-gray-800">Uploaded Files</h2>
                    <div className="max-h-[400px] overflow-y-auto border border-gray-300 rounded-lg bg-white shadow">
                        <ul>
                            {files.map((uploadedFile) => (
                                <li key={uploadedFile.id} className="border-b border-gray-300 p-4 last:border-b-0">
                                    <h3 className="font-bold text-lg">{uploadedFile.title}</h3>
                                    <p className="text-gray-700">{uploadedFile.description}</p>
                                    <p className="text-gray-500 text-sm">Uploaded on: {uploadedFile.created_at}</p>
                                    <div className="flex space-x-4 mt-2">
                                        <button
                                            className="text-blue-500 hover:underline"
                                            onClick={() => {
                                                setEditingFileId(uploadedFile.id);
                                                setTitle(uploadedFile.title);
                                                setDescription(uploadedFile.description);
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="text-red-500 hover:underline"
                                            onClick={() => handleDelete(uploadedFile.id)}
                                        >
                                            Delete
                                        </button>
                                        <a href={`http://127.0.0.1:5000/api/data/download/${uploadedFile.id}`} className="text-green-500 hover:underline">
                                            Download
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {editingFileId && (
                            <div className="mt-4">
                                <h3 className="font-bold">Editing File ID: {editingFileId}</h3>
                                <button onClick={() => handleUpdate(editingFileId)} className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
                                    Update
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminUploadPage;