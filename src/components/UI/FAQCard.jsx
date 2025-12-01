import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export const FAQCard = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className="faq-card  p-3 rounded-md bg-zinc-100 cursor-pointer transition-all duration-300"
      onClick={onToggle}
    >
      <div className="question flex justify-between items-center">
        <p className="font-semibold text-slate-800 text-lg">{question}</p>
        <span className="arrow text-4xl text-blue-600">
          {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </span>
      </div>

      <div
        className={`answer overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[300px] mt-3" : "max-h-0"
        }`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};
