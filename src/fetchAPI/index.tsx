import { async } from "q";
import { FC, useEffect, useState } from "react";

type Props = {
  title: string;
};

const FetchAPI: FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  //function login
  async function _login() {
    setLoading(true);
    try {
      const login = await (
        await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "cityslicka",
          }),
        })
      ).json();

      //save token to localStorage
      localStorage.setItem("token", login.token);
      console.log(login);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  //callback
  useEffect(() => {
    console.log("Get Data");

    const getUser = async () => {
      try {
        const singleUser = await (
          await fetch("https://reqres.in/api/users/2")
        ).json();
        setUser(singleUser.data);
        console.log(singleUser.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [JSON.stringify(user)]);

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={_login}>{loading ? "Loading ..." : "Login"} </button>
      <br />
      {/* show image avatar */}
      <img src={user.avatar} alt="avatar" />
    </div>
  );
};

export default FetchAPI;
