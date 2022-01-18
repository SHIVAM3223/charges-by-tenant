import Image from "next/image";
import Tenant from "../../public/images/tenant.png";
import Home_fill from "../../public/images/Home_fill.png";
import Ellipse47 from "../../public/images/Ellipse47.png";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";

function tenant_signin() {
  const router = useRouter();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  /* 	"email":"rishabhborn2win@gmail.com",
  "password": "Rishu@123" */

  // function getPath() {
  //   return "/landing/tenant";
  // }

  async function tenantSignIn() {
    console.log("success");
  }

  async function signIn() {
    let email = state.username;
    let password = state.password;

    let item = { email, password };

    let result = await fetch("http://localhost:3000/api/auth/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    console.log(item);
    result = await result.json();
    console.warn("result: " + JSON.stringify(result));

    if (result.sucess == true) {
      console.log("success");
      router.push("/landing/tenant");
    }
    // result.sucess == true ? router.push("/landing/tenant") : alert("Enter correct credential");

  }

  function yourInput() {
    if (state.username.length == 0) {
      alert("Enter Username");
    } else if (state.password.length == 0) {
      alert("Enter Password");
    } else {
      alert("Username: " + state.username + "\nPassword: " + state.password);
      signIn();
    }
  }

  return (
    <>
      <div className="main1">
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous" />
        <link rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <section className="sign-in">
          <div className="container pr_container prj">
            <div className="fish1">
              <img src={Home_fill} alt="sub" />
            </div>
            <div className="fishes1">
              <img src={Ellipse47} alt="sub" />
            </div>
            <div className="signin-content">
              <div className="signin-image">
                <figure><img src={Tenant} height={428} width={500} alt="sign up image" /></figure>
              </div>
              <div className="signin-form">
                <h2 className="form-title pr_form-title">Tenant Sign In</h2>
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group pr_form-group">
                    <label className="pr_label" htmlFor="your_name">
                      <i className="fas fa-user"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="text"
                      name="username"
                      value={state.username}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group pr_form-group">
                    <label className="pr_label" htmlFor="your_pass">
                      <i className="fas fa-lock"></i>
                    </label>
                    <input
                      className="pa_input"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={state.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="custom-control custom-checkbox pt-5">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label p_remember" htmlFor="customCheck1"><span className="disable">Remember Me</span></label>
                  </div>
                  <div>
                    <div className="form-group pr_form-group form-button pr_form-button">
                      {/* <Link href="/landing/tenant"> */}
                      <button
                        type="submit"
                        name="signin"
                        className=" btn btn-primary pr_form-submit"
                        value="Sign In"
                        onClick={tenantSignIn}
                      >
                        Sign In
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                  <div className='p_mem'>Not a member? <a href='#'>Sign Up</a></div>
                </form>
                <div className="social-login">
                  <span className="social-label">Or login with</span>
                  <ul className="socials">
                    <li><a href="#"><i className=" fab fa-facebook-square fa-3x "></i></a></li>
                    <li><a href="#"><i className=" fab fa-twitter fa-3x"></i></a></li>
                    <li><a href="#"><i className="zmdi-google fab fa-google fa-3x"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default tenant_signin;
