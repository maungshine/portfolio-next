"use client";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const response = await fetch(
      "https://blog.maungshine.site/wp-json/contact-form/v1/submit-personal",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      }
    );

    setLoading(false);
    const result = await response.json();
    if (result.success) {
      setSuccess("Your message has been sent successfully.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setError("Failed to send your message. Please try again later.");
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center flex-1 bg-[#F8F7FF] dark:bg-[#040309] py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 xl:px-0 w-full">
        <h2 className="text-4xl text-start md:text-6xl xl:text-8xl inline-block font-bold mb-12 text-gray-900 dark:text-gray-100">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#B6B8C3] dark:border-[#110f1f]">
          {/* Contact Form */}
          <div className="dark:bg-[#06050F] p-6 md:p- bg-cardBackground">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-800 dark:text-[#f1f0f2]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-3 w-full dark:bg-[#040309] placeholder:text-[#3d3c47] rounded-md border border-gray-300 dark:border-[#110f1f] dark:text-gray-200 dark:focus:border-[#241A7F] dark:focus:border-2 dark:focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800 dark:text-[#f1f0f2]"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-3 w-full dark:bg-[#040309] placeholder:text-[#3d3c47] rounded-md border border-gray-300 dark:border-[#110f1f] dark:text-gray-200 dark:focus:border-[#241A7F] dark:focus:border-2 dark:focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-800 dark:text-[#f1f0f2]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-1 p-3 w-full dark:bg-[#040309] placeholder:text-[#3d3c47] rounded-md border border-gray-300 dark:border-[#110f1f] dark:text-gray-200 dark:focus:border-[#241A7F] dark:focus:border-2 dark:focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800 dark:text-[#f1f0f2]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 p-3 w-full dark:bg-[#040309] placeholder:text-[#3d3c47] rounded-md border border-gray-300 dark:border-[#110f1f] dark:text-gray-200 dark:focus:border-[#241A7F] dark:focus:border-2 dark:focus:outline-none"
                  placeholder="Your Message"
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#241a7f] text-[#c4c2db] rounded-md shadow-md hover:bg-btnDarkBlue/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="bg-btnDarkBlue dark:bg-[#040309] p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-white dark:text-gray-100 mb-6">
              Contact Information
            </h3>
            <div className="flex flex-col space-y-3">
              <p className="text-sm text-white dark:text-gray-200">
                Email:{" "}
                <a
                  href="mailto:your-email@example.com"
                  className="text-white hover:underline"
                >
                  devmaungshine@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
