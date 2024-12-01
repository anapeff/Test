import React, {useState} from "react";

function SubscribeForm () {
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        number:"",
    });

const handleChange = (event) => {
const {name, value } = event.target;
setFormData ({
    ...formData,
    [name]: value,

    });
};

const handleSubmit = (event) => {
event.preventDefault();
console.log("Form data submitted", formData);
};

    return (
<form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">Enter your name : </label>
        <input 
          type="text"
          name="name" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          required
         />
    </div>
    <div>
        <label htmlFor="email">Enter your email : </label>
        <input 
         type="email"
         name="email"
         id="eamil" 
         value={formData.email}
         onChange={handleChange}
         required
         />
    </div>
    <div>
        <label htmlFor="number">Enter yout phone :</label>
        <input
        type="number"
        name="number"
        id="number"
        value={formData.number}
        onChange={handleChange}
        required
        />
    </div>
    <div>
        <input type="submit" value="Subscribe!" />
    </div>
</form>

    );
}
export default SubscribeForm;