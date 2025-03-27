"use client";

const TextGlitch = ({ text }) => {
  text;
  return (
    <div className="group relative overflow-hidden">
      <span className="invisible">Text Glitch Effect</span>
      <span className="absolute text-center left-0 top-0 transition duration-300 ease-in-out group-hover:-translate-y-full ">
        {text}
      </span>
      <span className="absolute text-center underline underline-offset-4 left-0 top-0 translate-y-full transition duration-300 ease-in-out group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );
};

export default TextGlitch;
