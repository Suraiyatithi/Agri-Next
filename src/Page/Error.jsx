import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-6"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      <div className="bg-black/70 p-10 rounded-2xl text-center max-w-2xl">
        <h1 className="text-7xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">404</h1>
        <h2 className="text-3xl font-bold mb-4">Oops! Page not found</h2>
        <p className="text-lg mb-6">
          The page you're looking for doesn't exist or has been moved. Let's bring you back home.
        </p>
        <Link to="/" className="inline-block">
          <button className="px-6 py-3 text-lg rounded-full bg-gradient-to-r from-green-400 via-lime-500 to-yellow-400 hover:scale-105 transition transform font-semibold shadow-md">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
