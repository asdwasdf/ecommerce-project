import styles from "@style/my-account/MyAccount.module.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MyAccountComponents = () => {
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
    navigate("/");
    return;
  }

  if (!isLoggedIn)
    return (
      <div className={styles.box}>
        <div className="container">
          <LoginForm />
          <RegisterForm />
        </div>
      </div>
    );
};

export default MyAccountComponents;
