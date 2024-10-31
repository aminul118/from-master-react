const SimpleForm = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Submitted");
    console.log(e.target.text.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="text" placeholder="Write Anything" id="" />
        <br />
        <input type="email" name="email" id="" placeholder="Email " />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;

/****
 * 1. এখানে console করলে event পাবো।
 * 2. Event এর ভেতর গেলে target
 * 3. Target এর ভেতরে গেলে form পাবো
 * 4. form এর ভেতরে যেই input field এর ভ্যালু দরকার সেইটাকে সিলেক্ট করবো। ex  console.log(e.target.email.value);
 */
