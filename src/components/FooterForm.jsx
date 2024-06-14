import "./FooterForm.scss";
import { useState } from "react";
const FooterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const response = await fetch("https://formspree.io/f/xleqqbvo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent!");
        setModalMessage("Your message has been sent successfully! ✔✔✔");
        setShowModal(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Error sending message.");
        setModalMessage(
          "There was an error sending your message. Please try again later."
        );
        setShowModal(true);
      }
    } catch (error) {
      setStatus("Error sending message.");
      setModalMessage(
        "There was an error sending your message. Please try again later."
      );
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="FooterForm">
      <form onSubmit={handleSubmit}>
        <label>
          <span className="Input-Title"> Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          <span className="Input-Title"> Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          <span className="Input-Title">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      <span className="Status">{status}</span>
      {showModal && (
        <div
          className="modal"
          style={{ display: showModal ? "block" : "none" }}
        >
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p className="Status">{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterForm;
