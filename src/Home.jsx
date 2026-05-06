import { useState } from "react";
import ChildHome from "./ChildHome";
import Menu from "./Menu";   // ✅ add this

export default function Home() {
  const [msg, setMsg] = useState("");  // ✅ use state

  function setmsgvalue() {
    setMsg("hello how are you ");  // ✅ update state
  }

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container"> 

          <h1>Home page of our application</h1>

          <ChildHome name="Praba K" desgn="Sr.Faculty" />

          <Menu usertype="customer" />

          <input
            type="button"
            onClick={setmsgvalue}
            value="Click to set msg"
          />

          <p>
            Here you will see the message when you click on button <br />
            {msg.length > 0 && msg}
          </p>

        </div>
      </div>
    </>
  );
}