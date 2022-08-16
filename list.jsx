import axios from "axios";
import { useState } from "react";
import "./list.css";

export default function List() {
  const [arr, setArr] = useState([]);
  axios
    .get("http://localhost:8080/user")
    .then((response) => {
      setArr(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className="list-page">
      <div className="list-box">
        <div className="heading-user">
          <h1>List Of User</h1>
        </div>
        <div className="scrollable">
          {arr.map((item) => (
            <div className="single-user" key={item.id}>
              <h3>Name: {item.name}</h3>
              <h4>Email: {item.email}</h4>
              <h4>Mobile-Number:{item.mobile}</h4>
              <h4>
                Address: {item.adress + "," + item.city + "," + item.state}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
