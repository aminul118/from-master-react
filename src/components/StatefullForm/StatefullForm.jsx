import { useState } from "react";

const StatefullForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);


  const handdleSubmit = (e) => {
    e.preventDefault();
        console.log(name);
    console.log(email);
    console.log(password);

  };
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handdleSubmit}>
        <input onChange={handleNameChange} type="text" name="text" placeholder="Write Anything" id="" />
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id=""
          placeholder="Email "
          required
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          id=""
          placeholder="Enter Password "
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StatefullForm;


/***
 * Indivisual State
 */
