import { useState } from "react";

export default function TimePicker(props: { limit: number; start: number }) {
  const [time, setTime] = useState(0);

  const up = () => {
    time + 1 > props.limit ? setTime(props.start) : setTime(time + 1);
  };
  const down = () => {
    time - 1 < props.start ? setTime(props.limit) : setTime(time - 1);
  };

  return (
    <div className="flex flex-col items-center cursor-pointer">
      <div onClick={up}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          className="fill-white hover:fill-purple-600 transition"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </div>
      <p className="text-purple-600 text-4xl select-none">
        {String(time).length === 1 ? 0 + String(time) : time}
      </p>
      <div onClick={down} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          className="fill-white hover:fill-purple-600 transition"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
  );
}
