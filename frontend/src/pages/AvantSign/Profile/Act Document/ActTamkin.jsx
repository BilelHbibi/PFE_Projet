import React, { useState } from 'react';
import { jsPDF } from "jspdf";

const ActTamkin = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    product: '',
    choice: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you can add more customization to the PDF
    const doc = new jsPDF();
    
    doc.text(`Name: ${formState.name}`, 10, 10);
    doc.text(`Email: ${formState.email}`, 10, 20);
    doc.text(`Phone Number: ${formState.phoneNumber}`, 10, 30);
    doc.text(`Product: ${formState.product}`, 10, 40);
    doc.text(`Choice: ${formState.choice}`, 10, 50);
    
    // Save the PDF
    doc.save('ActTamkinForm.pdf');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formState.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formState.email} onChange={handleChange} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={formState.phoneNumber} onChange={handleChange} />
      </div>
      <div>
        <label>Product:</label>
        <input type="text" name="product" value={formState.product} onChange={handleChange} />
      </div>
      <div>
        <label>Choice:</label>
        <select name="choice" value={formState.choice} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          {/* Add more options here */}
        </select>
      </div>
      <button type="submit">OK</button>
    </form>
  );
};

export default ActTamkin;