import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';

export default function Login() {
  const [credentials, setcredentials] = useState({
    email:"",
    password:"",
    rpassword:""
  })
  let navigate=useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        rpassword: credentials.rpassword
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.errors) {
      alert(json.errors);
    }
    else{
      alert("succesfull");
      navigate("/");
    }
  };

  const onchange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };


  return (
    <div>
      <section style={{ backgroundColor: "#259F6C", width: "100vw" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div
                      className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                      style={{ color: "#d6d6d6" }}
                    >
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </p>

                      <form className="mx-1 mx-md-4"
                       onSubmit={handlesubmit}
                       >

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="email"
                              // value={credentials.email}
                              onChange={onchange}
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                          </div>
                        </div>
 
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="password"
                              // value={credentials.password}
                              onChange={onchange}
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name="rpassword"
                              // value={credentials.rpassword}
                              onChange={onchange}
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cd"
                            >
                              Repeat your password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            // onClick={onsubmit}
                            className="btn btn-primary btn-lg mx-3"
                          >
                            Login
                          </button>
                          <Link
                            to="/createuser"
                            className="btn btn-primary btn-l mx-3"
                          >
                            I'm a New user
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://th.bing.com/th/id/OIG1.mJKfkyomuoHDc9uiSBP.?w=1024&h=1024&rs=1&pid=ImgDetMain"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
