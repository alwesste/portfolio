import React, { useState } from 'react';
import "./Contact.scss";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const recipientEmail = "leopolddag@gmail.com";

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:${recipientEmail}?subject=Contact&body=${formData.message}`;
    }

    return (
        <section className="contact">
            <h1 className="contact-title" id="contact">Contact</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <label htmlFor="name">Nom</label>
                <input
                    className="form-name"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nom"
                    required
                    onChange={handleInputChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    className="form-email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                />

                <label htmlFor="message">Message</label>
                <textarea
                    className="form-message"
                    name="message"
                    id="message"
                    rows={7}
                    placeholder="Ecrivez votre message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                />

                <button className="form-button" type="submit">Envoyer</button>
            </form>
        </section>
    )
}

export default Contact;
