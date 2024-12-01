import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target; // Récupère le nom et la valeur du champ modifié
    setFormData({
      ...formData, // Conserve les autres valeurs
      [name]: value, // Met à jour uniquement le champ modifié
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le comportement par défaut
    console.log("Données du formulaire :", formData);
    alert("Formulaire soumis !");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;
