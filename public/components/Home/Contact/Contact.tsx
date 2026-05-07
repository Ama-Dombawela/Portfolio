"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_savor7m",
        "template_eqn27sm",
        form.current,
        "4Oj4UKTYP0ijFROrm"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3000,
          });

          form.current?.reset();
        },
        (error) => {
          console.log(error);

          toast.error("Failed to send message.Please Try again!", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div
      id="contact"
      className="pt-16 pb-16 relative z-10 w-11/12 md:w-4/5 mx-auto mb-20"
    >
      {/* Toast container (IMPORTANT - must be inside component or layout) */}
      <ToastContainer />

      <h1 className="text-center text-3xl md:text-5xl font-bold text-white mb-8">
        Get in <span className="text-emerald-400">Touch</span>
      </h1>

      <h2 className="text-center text-gray-300 font-semibold tracking-widest uppercase text-sm mb-10 max-w-5xl mx-auto">
        Have a question or opportunity in mind? Feel free to reach out — I’ll
        get back to you as soon as possible
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Contact Information
          </h2>

          <p className="text-gray-300 mb-8">
            Feel free to reach out if you have any internship opportunities or
            projects. I’m eager to learn and grow, and I’ll get back to you as
            soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-900/40 p-3 rounded-full shrink-0">
                <FaPhone className="w-5 h-5 text-emerald-400" />
              </div>

              <div className="text-white">
                <p className="font-semibold">Phone</p>
                <p className="text-gray-400 text-sm">+(94) 76 199 2006</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-emerald-900/40 p-3 rounded-full shrink-0">
                <FaEnvelope className="w-5 h-5 text-emerald-400" />
              </div>

              <div className="text-white">
                <p className="font-semibold">Email</p>
                <p className="text-gray-400 text-sm">
                  amadombawela@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-emerald-900/40 p-3 rounded-full shrink-0">
                <FaMapMarkerAlt className="w-5 h-5 text-emerald-400" />
              </div>

              <div className="text-white">
                <p className="font-semibold">Location</p>
                <p className="text-gray-400 text-sm">Negombo, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors"
                required
              />

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors resize-none"
              required
            />

            <button
              type="submit"
              className="mt-4 px-8 py-4 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg font-medium transition-all hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;