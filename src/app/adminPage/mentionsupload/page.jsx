"use client";

import { useState } from "react";

const MentionForm = () => {
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mentionData = { platform, url, excerpt, title, image };

    try {
      const response = await fetch("/api/mentions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mentionData),
      });

      const data = await response.json();
      alert(data.message);

      // Clear form fields after submission
      setPlatform("");
      setUrl("");
      setExcerpt("");
      setTitle("");
      setImage("");
    } catch (error) {
      console.error("Error submitting mention:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Submit a Mention</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Platform"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Submit Mention
        </button>
      </form>
    </div>
  );
};

export default MentionForm;
