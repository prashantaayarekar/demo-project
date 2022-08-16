import "./register.css"; //rfc
import axios from "axios";
import { useState } from "react";

export default function Register() {
  //useState setName("musaddik")
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [adress, setAdress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [password, setPassword] = useState();

  const changeHandler = (e) => {
    if (e.target.id == "name") {
      setName(e.target.value);
    }
    if (e.target.id == "email") {
      setEmail(e.target.value);
    }
    if (e.target.id == "adress") {
      setAdress(e.target.value);
    }
    if (e.target.id == "city") {
      setCity(e.target.value);
    }
    if (e.target.id == "state") {
      setState(e.target.value);
    }
    if (e.target.id == "mobile") {
      setMobile(e.target.value);
    }
    if (e.target.id == "password") {
      setPassword(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("mobile", mobile);
    formdata.append("address", adress);
    formdata.append("city", city);
    formdata.append("state", state);
    formdata.append("password", password);
    axios
      .post("http://localhost:8080/user", formdata)
      .then((response) => {
        if (response.data == "success") {
          alert("User Registered Successfully!");
        } else {
          alert("oops..something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="register-box-out">
      <div className="register-box-in">
        <h1 className="heading">Register</h1>
        <form onSubmit={submitHandler}>
          <div className="input-box">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="User Name"
              onChange={changeHandler}
              value={name}
            />
          </div>
          <div className="input-box">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="User Email"
              onChange={changeHandler}
              value={email}
            />
          </div>
          <div className="input-box">
            <label for="adress">Address</label>
            <input
              type="adress"
              id="adress"
              placeholder="User adress"
              onChange={changeHandler}
              value={adress}
            />
          </div>
          <div className="input-box">
            <label for="city">City</label>
            <input
              type="city"
              id="city"
              placeholder="User City"
              onChange={changeHandler}
              value={city}
            />
          </div>
          <div className="input-box">
            <label for="state">State</label>
            <input
              type="state"
              id="state"
              placeholder="User State"
              onChange={changeHandler}
              value={state}
            />
          </div>
          <div className="input-box">
            <label for="mobile">Mobile</label>
            <input
              type="number"
              id="mobile"
              placeholder="User mobile"
              onChange={changeHandler}
              value={mobile}
            />
          </div>
          <div className="input-box">
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="User password"
              id="password"
              onChange={changeHandler}
              value={password}
            />
          </div>
          <div className="input-box-button">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
