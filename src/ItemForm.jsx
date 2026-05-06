import { useState } from "react";

export default function ItemForm() {
  const [formData, setFormData] = useState({
    itemName: "",
    price: "",
    category: "",
    mfgDate: "",
    expDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.itemName ||
      !formData.price ||
      !formData.category ||
      !formData.mfgDate ||
      !formData.expDate
    ) {
      alert("All fields are required!");
      return;
    }

    alert("Form submitted!");
    console.log(formData);
  };

  return (
   
  <form onSubmit={handleSubmit} style={{ width: "300px", margin: "20px auto" }}>
    <h2>Item Form</h2>

    <div style={{ marginBottom: "10px" }}>
      <label>Item Name:</label><br />
      <input
        type="text"
        name="itemName"
        value={formData.itemName}
        onChange={handleChange}
        required
      />
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>Price:</label><br />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>Category:</label><br />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      />
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>Manufacturing Date:</label><br />
      <input
        type="date"
        name="mfgDate"
        value={formData.mfgDate}
        onChange={handleChange}
        required
      />
    </div>

    <div style={{ marginBottom: "10px" }}>
      <label>Expiry Date:</label><br />
      <input
        type="date"
        name="expDate"
        value={formData.expDate}
        onChange={handleChange}
        required
      />
    </div>

    <br />
    <button type="submit">Submit</button>
  </form>

  );
}