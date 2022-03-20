import Raect, { FC, useState } from "react";

type Props = {
  title: string;
};

const FuncComp: FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0);

  //add
  function addCounter(param: number): void {
    setCount(param + 1);
  }

  //remove
  function removeCounter(param: number): void {
    setCount(param - 1);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={removeCounter.bind(removeCounter, count)}>Remove</button>
      <h2>{count}</h2>
      <button onClick={addCounter.bind(addCounter, count)}>Click me</button>
    </div>
  );
};

export default FuncComp;
