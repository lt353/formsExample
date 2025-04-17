import { useState } from "react";

function RegistrationForm() {
   const [inputs, setInputs] = useState({
      shirtSize: "Medium",
      notifications: true
   });

   function handleSubmit(event) {
      event.preventDefault();
      alert(`User Registration Summary\n-------------------------\n` +
            `Username: ${inputs.username}\n` +
            `Email: ${inputs.email}\n` +
            `Shirt size: ${inputs.shirtSize}\n` +
            `Notifications: ${inputs.notifications}\n` +
            `Bio: ${inputs.bio}\n` +
            `Birthdate: ${inputs.birthdate}`);
   }

   function handleChange(event) {
      const name = event.target.name;
      const value = event.target.type === "checkbox" ?
         event.target.checked : event.target.value;
      setInputs(values => ({...values, [name]: value}));
   }

   return (
      <form onSubmit={handleSubmit}>
         <p>
            <label htmlFor="username">
               Username?
            </label>
            <input 
               type="text" 
               id="username"
               name="username"
               value={inputs.username || ""}
               onChange={handleChange} />
         </p>
         <p>
            <label htmlFor="email">
               Email?
            </label>
            <input 
               type="text" 
               id="email"
               name="email"
               value={inputs.email || ""}
               onChange={handleChange} />
         </p>
         <p>
            <label htmlFor="shirtSize">
               Shirt size?
            </label>
            <select id="shirtSize" name="shirtSize" 
               value={inputs.shirtSize} onChange={handleChange}>
               <option value="Small">Small</option>
               <option value="Medium">Medium</option>
               <option value="Large">Large</option>
            </select>
         </p>
         <p>
            <label htmlFor="notifications">
               Receive notifications?
            </label>
            <input type="checkbox" id="notifications" name="notifications"
               checked={inputs.notifications} onChange={handleChange} />
         </p>
         <p>
            <label htmlFor="bio">
               Short bio?
            </label>
            <textarea id="bio" name="bio" 
               value={inputs.bio} onChange={handleChange} />
         </p>
         <p>
            <label htmlFor="birthdate">
               Birthdate?
            </label>
            <input type="date" id="birthdate" name="birthdate"
               value={inputs.birthdate} onChange={handleChange} />
         </p>
         <input type="submit" value="Register" />
      </form>
   );
}

export default RegistrationForm;