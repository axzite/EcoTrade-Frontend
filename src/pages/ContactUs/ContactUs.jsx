// ContactUs.jsx
import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from "lucide-react";
import emailjs from "emailjs-com"; // ✅ Import EmailJS
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    errors: {},
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Invalid email format";
    if (!formData.phone.trim()) errors.phone = "Phone is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({ ...prev, errors }));
      return;
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true, errors: {} }));

    try {
      // ✅ Replace simulation with actual EmailJS sending
      await emailjs.send(
        "service_hay9zb9", // 🔹 service id
        "template_tjhniru", // 🔹 template id
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
            time: new Date().toLocaleString(),
        },
        "6Y2ehsJLYr8iwEdWK" // 🔹 Replace this
      );

      setFormState((prev) => ({ ...prev, isSubmitted: true }));
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setFormState((prev) => ({
        ...prev,
        errors: { submit: "Failed to send message. Please try again." },
      }));
    } finally {
      setFormState((prev) => ({ ...prev, isSubmitting: false }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formState.errors[name]) {
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: undefined },
      }));
    }
  };

  return (
    <div className={`contact-page ${isVisible ? "visible" : ""}`}>
      {/* Hero Banner */}
      <div className="contact-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content"></div>
      </div>

      {/* Contact Info */}
      <div className="contact-info-container">
        {[
          {
            icon: <MapPin className="contact-icon" />,
            title: "Our Location",
            lines: [
              "Ramchandra Bada, Infront of Grampanchayat, Village Khara, Tehsil Kirnapur, District Balaghat (MP), INDIA, Pin 481226",
            ],
          },
          {
            icon: <Phone className="contact-icon" />,
            title: "Phone Number",
            lines: ["+91 9174207069"],
          },
          {
            icon: <Mail className="contact-icon" />,
            title: "Email Address",
            lines: ["kharaagrotech@gmail.com"],
          },
          {
            icon: <Clock className="contact-icon" />,
            title: "Working Hours",
            lines: ["24*7 Hour's Available"],
          },
        ].map((card, index) => (
          <div
            key={index}
            className="contact-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="icon-wrapper">{card.icon}</div>
            <h3>{card.title}</h3>
            {card.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <div className="form-content">
          <div className="form-header">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you shortly</p>
          </div>

          {formState.isSubmitted ? (
            <div className="success-message">
              <svg viewBox="0 0 24 24" className="success-icon">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              Message sent successfully! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div
                  className={`form-group ${
                    formState.errors.name ? "error" : ""
                  }`}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="input-field"
                  />
                  {formState.errors.name && (
                    <div className="error-message">
                      <AlertCircle size={16} />
                      {formState.errors.name}
                    </div>
                  )}
                </div>
                <div
                  className={`form-group ${
                    formState.errors.email ? "error" : ""
                  }`}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="input-field"
                  />
                  {formState.errors.email && (
                    <div className="error-message">
                      <AlertCircle size={16} />
                      {formState.errors.email}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div
                  className={`form-group ${
                    formState.errors.phone ? "error" : ""
                  }`}
                >
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="input-field"
                  />
                  {formState.errors.phone && (
                    <div className="error-message">
                      <AlertCircle size={16} />
                      {formState.errors.phone}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="input-field"
                  />
                </div>
              </div>

              <div
                className={`form-group ${
                  formState.errors.message ? "error" : ""
                }`}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  className="input-field"
                ></textarea>
                {formState.errors.message && (
                  <div className="error-message">
                    <AlertCircle size={16} />
                    {formState.errors.message}
                  </div>
                )}
              </div>

              {formState.errors.submit && (
                <div className="error-message submit-error">
                  <AlertCircle size={16} />
                  {formState.errors.submit}
                </div>
              )}

              <button
                type="submit"
                className={`submit-button ${
                  formState.isSubmitting ? "submitting" : ""
                }`}
                disabled={formState.isSubmitting}
              >
                <span className="button-content">
                  {formState.isSubmitting ? (
                    <>
                      <span className="loading-spinner"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="send-icon" size={18} />
                    </>
                  )}
                </span>
              </button>
            </form>
          )}
        </div>

        {/* Map */}
        <div className="map-container">
          <iframe
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29662.95144675069!2d80.17153590481121!3d21.668955452531485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a5167501e9d7d%3A0xa0bc4f505d654de5!2sKhara%2C%20Madhya%20Pradesh%20481226!5e0!3m2!1sen!2sin!4v1737529814015!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
