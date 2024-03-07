import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const paraData = [
  {
    title: "What is Bitcoin?",
    description:
      "Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  <br/>Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.<br/>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui",
  },
];

// main component

function AboutStock() {
  return (
    <div>
      <h1 className="font-semibold mb-5">About Bitcoin</h1>
      {paraData.map((data, index) => (
        <Paragraph
          key={index}
          title={data.title}
          description={data.description}
        />
      ))}
      <span>
        <h1 className="font-semibold my-5">Already Holding Bitcoin?</h1>
        <span className="flex gap-10">
          <Calulators
            title="Calculate your Profits"
            image="/profits.jpg"
            href="/"
            bg="linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%)"
          />
          <Calulators
            title="Calculate your tax liability"
            image="/liability.jpg"
            href="/"
            bg="linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%)"
          />
        </span>
        <p className=" text-[#3E424A] text-xs mb-5">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
      </span>
    </div>
  );
}

// paragraph componenet
const Paragraph = memo(function Paragraph({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <span className="relative w-full h-auto text-sm mb-10">
      <h3 className="font-semibold mb-3">{title}</h3>
      <p className="text-[#3E424A] text-xs mb-5">{description}</p>
    </span>
  );
});

//  CalulatedData component
const Calulators = memo(function Calulators({
  title,
  image,
  href,
  bg,
}: {
  title: string;
  image: string;
  href: string;
  bg: string;
}) {
  return (
    <span
      className="w-full  text-sm mb-10 flex gap-6 p-3 rounded-md pr-16"
      style={{ background: bg }}
    >
      <span>
        <Image
          src={image}
          width={100}
          height={100}
          alt={title}
          className="rounded-md w-32 h-24"
        />
      </span>
      <span className="text-white flex flex-col items-start justify-center gap-3 p-1">
        <h3 className="font-semibold text-[0.95rem]">{title}</h3>
        <Link
          href={href}
          className="flex items-center font-semibold justify-center text-[0.60rem] bg-white text-[#0F1629] px-4 p-1 rounded-md"
        >
          Check Now &nbsp;{" "}
          <svg
            width="15"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0658 9.77144H4.56577"
              stroke="#0F1629"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0243 4.7511L17.0659 9.7711L12.0243 14.7919"
              stroke="#0F1629"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </span>
    </span>
  );
});

export default memo(AboutStock);
