import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../../components/ChangePassword";

const ProfilePage = (props) => {
  const [modal, setModal] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const { email } = location.state;
  //console.log(props.name);
  const handleLogout = () => {
    console.log("im here in logout session");
    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className={styles.wrapper}>
              <h1 className="text-center">Good Reads Account</h1>
              <hr />
              {/* <h3>Welcome {name} !</h3> */}
              <br />
              <p>EmailID : {email}</p>
              <div>
                {modal && <ChangePassword modal={modal} setModal={setModal} />}{" "}
                <button
                  className="btn-primary btn-block"
                  onClick={(e) => {
                    e.preventDefault();
                    setModal(true);
                  }}
                >
                  Change Password
                </button>
                <button
                  onClick={handleLogout}
                  className="btn-primary btn-block"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
