import { useState } from "react";

const Home = () => {
  //   let name = "amit";
  const [name, setName] = useState("amit");
  const [age, setAge] = useState("25");

  const handleClick = () => {
    setName("eilam");
    setAge(28);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
