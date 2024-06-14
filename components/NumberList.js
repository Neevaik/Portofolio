import { useSpring, animated } from "@react-spring/web";


const numbers = [
  { value: 1, text: "Years of\nExperience" },
  { value: 4, text: "Projects\nCompleted" },
  { value: 5, text: "Technologies\nMastered" }
];

function NumberCounter({ value, text }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 200,
    config: { duration: 3000 },
  });

  return (
    <li className="flex items-center text-6xl font-bold">
      <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
      <span className="ml-4 text-xs text-gray-400 text-left whitespace-pre-line">
        {text}
      </span>
    </li>
  );
}

export default function NumbersList({ isLoaded }) {


  return (
    <div className={`mt-48 flex justify-center ${isLoaded ? 'transition-loaded' : 'transition-not-loaded'} transition-opacity`}>
      <ul className="flex space-x-16">
        {numbers.map((item, index) => (
          <NumberCounter key={index} value={item.value} text={item.text} />
        ))}
      </ul>
    </div>
  );
}

