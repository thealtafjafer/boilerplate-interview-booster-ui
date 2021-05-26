import { BiggerNumber } from "./Number/BiggerNumber";
import { Bigger3Number } from "./Number/Bigger3Number";
import { Cart } from "./Number/Cart";

export const Home = () => (
  <div className="App">
    <h1>Home</h1>
    <Cart />
    <BiggerNumber />
    <Bigger3Number />
  </div>
);
