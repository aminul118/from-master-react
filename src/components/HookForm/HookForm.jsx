import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  const [name, handleNameChange] = useInputState("Rajoni hooked");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="text"
          placeholder="Write Anything"
          id=""
        />
        <br />
        <input type="email" name="email" id="" placeholder="Email " />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Enter Password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
