import { Link } from "react-router-dom";

export default function SquareBlock({ stock }) {
  return (
    <div className="border rounded-xl border-black w-2/12">
      <Link to={`stockDetail/${stock.name}`}>
        <div className="mx-6 my-4">
          <div className="bold">{stock.name}</div>
          <div className="font-bold text-lg">{stock.price}</div>
          <div
            className={`${
              stock.isPositive ? "text-red-500" : "text-blue-400"
            } flex justify-between text-xl`}
          >
            <div>{(stock.isPositive ? "+" : "-") + stock.percentage + "%"}</div>
            <div>{stock.decreaseByWon + "₩"}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
