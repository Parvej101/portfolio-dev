"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import ContactInfo from "./ContactInfo";
import GlobalContact from "./GlobalContact";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sz0okmc", // Replace with your EmailJS Service ID
        "template_cif3jjt", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "QUxP6858qm0Ej6wNw" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-10 bg-gray-800 text-white ">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center py-5">Connect Me</h2>
        <ContactInfo></ContactInfo>
        <GlobalContact></GlobalContact>
        <div className=" mx-auto px-6 py-3">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="btn bg-white text-black px-4 sm:px-6 py-2 rounded-md hover:bg-gray-300 transition w-full"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center">{status}</p>}
        </div>
      </div>
    </section>
  );
}
