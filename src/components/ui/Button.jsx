const Button = ({titulo}) => {
  return (
    <button className="w-64 h-10 p-2 bg-transparent border border-purple-400 rounded-md">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-base font-bold hover:underline decoration-2">
          <span>{titulo}</span>
        </div>
        <svg
          className="w-8 hover:-rotate-90 duration-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default Button;
