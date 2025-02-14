import React, { useState } from "react";
import backgroundImage from "../assets/image0.jpg";
import PopupMessage from "./popupMessage";

const Contact = ({ title = "Contact Us", image = backgroundImage }) => {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });
  const [loading, setLoading] = useState(false); // Loading state

  // Function to show popup
  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });

    setTimeout(() => {
      setPopup({ show: false, message: "", type: "" });
    }, 3000); // Hide popup after 3 seconds
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      showPopup("Please fill in all fields.", "error");
      return;
    }

    setLoading(true); // Start loading
    const formData = { name, email, message };

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        showPopup("Email sent successfully!", "success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        showPopup("Something went wrong. Please try again later.", "error");
      }
    } catch (error) {
      showPopup("Network error. Please try again.", "error");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        id="contact"
        aria-label="Contact Section"
        className="relative bg-cover bg-center bg-no-repeat h-[50vh] flex items-center justify-center text-blue-400"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${image})`,
        }}
      >
        <div className="relative text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mt-10">
            {title}
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with us to discuss your next project or collaboration.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <form
        className="mx-auto my-10 px-6 max-w-3xl bg-white shadow-lg rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-center text-blue-600">
            Reach Us:
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              className={`text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 flex items-center justify-center ${
                loading
                  ? "bg-blue-700 w-44 h-14 text-lg"
                  : "bg-blue-600 hover:bg-blue-700 w-52 h-12"
              }`}
              disabled={loading}
            >
              {loading ? (
                <div className="w-7 h-7 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Show Popup Message if exists */}
      {popup.show && (
        <PopupMessage
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup({ show: false, message: "", type: "" })}
        />
      )}
    </div>
  );
};

export default Contact;
