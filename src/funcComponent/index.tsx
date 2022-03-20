import Raect, { FC, useEffect, useState } from "react";

type Props = {
  title: string;
};

const FuncComp: FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<{ firstName: string; lastName: string }>({
    firstName: "",
    lastName: "",
  });

  //add
  function addCounter(param: number): void {
    setCount(param + 1);
  }

  //remove
  function removeCounter(param: number): void {
    setCount(param - 1);
  }

  //function login
  function _login() {
    setUser({
      firstName: "John",
      lastName: "Doe",
    });
  }

  //callback
  useEffect(() => {
    console.log("Get Data");
  }, [JSON.stringify(user)]);

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={_login}>Login</button>
      <h2>
        {count} {user.firstName} {user.lastName}
      </h2>
      <button onClick={addCounter.bind(addCounter, count)}>+</button>
      <button onClick={removeCounter.bind(removeCounter, count)}>-</button>
    </div>
  );
};

export default FuncComp;
