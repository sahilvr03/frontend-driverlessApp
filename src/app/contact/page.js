
"use client"
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="relative block ">
      {/* Introductory Message */}
     

      {/* Contact Form */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <form
              onSubmit={handleSubmit}
              className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-1-00"
            >
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">Contact Us</h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                  Complete this form and we will get back to you in 24 hours.
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Full Name"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Email"
                    style={{ transition: "all .15s ease" }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    cols={80}
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Type a message..."
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    style={{ transition: "all .15s ease" }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center">
          <div className="bg-blue-100 text-blue-800 border border-blue-200 rounded-lg shadow-md p-6 max-w-3xl">
            <h2 className="text-xl font-semibold mb-2 text-center">We’re here to help</h2>
            <p className="text-center leading-relaxed">
            Your feedback is important to us. Whether you have a question or want to report an issue, our team wants to hear from you. 
            Complete the form below to get in touch with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
