import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("");

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(a + b);
        break;
      case "sub":
        setResult(a - b);
        break;
      case "mul":
        setResult(a * b);
        break;
      case "div":
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        setResult("Choose an operation");
    }
  };

  return (
    <div className="bg-green-100 p-6 rounded-xl shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4 text-lime-700">🧮 Farmer's Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        className="w-full p-2 mb-3 rounded border"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        className="w-full p-2 mb-3 rounded border"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="flex justify-between gap-2 mb-4">
        <button onClick={() => setOperation("add")} className="bg-lime-500 text-white px-3 py-1 rounded">+</button>
        <button onClick={() => setOperation("sub")} className="bg-lime-500 text-white px-3 py-1 rounded">−</button>
        <button onClick={() => setOperation("mul")} className="bg-lime-500 text-white px-3 py-1 rounded">×</button>
        <button onClick={() => setOperation("div")} className="bg-lime-500 text-white px-3 py-1 rounded">÷</button>
      </div>
      <button
        onClick={calculate}
        className="w-full bg-lime-700 text-white font-semibold py-2 rounded"
      >
        Calculate
      </button>
      {result !== null && (
        <div className="mt-4 text-center text-lg font-semibold text-lime-800">
          Result: {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;
