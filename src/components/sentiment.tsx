"use client";

import { memo, useRef, useState } from "react";
import TextWithInfoIcon from "./textWithInfoIcon";
import { log } from "console";

const keyEvents = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
  },
];

function Sentiment() {
  const caraousel=useRef<HTMLDivElement>(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  function handleLeftCarousel(){
    if(caraousel.current){
      caraousel.current.scrollLeft -= 320;
      setIsLeftDisabled(caraousel?.current?.scrollLeft <= 0);
      setIsRightDisabled(caraousel?.current?.scrollLeft >= caraousel?.current?.scrollWidth - caraousel?.current?.clientWidth - 1)
    }
  }
  function handleRightCarousel(){
    if(caraousel.current){
      caraousel.current.scrollLeft += 320;
      setIsLeftDisabled(caraousel?.current?.scrollLeft <= 0);
      setIsRightDisabled(caraousel?.current?.scrollLeft >= caraousel?.current?.scrollWidth - caraousel?.current?.clientWidth - 1)
    }
  }
  return (
    <>
      <h1 className="mt-10 mb-4 font-semibold">Sentiment</h1>
      <TextWithInfoIcon text="Key Events" />
      <div className="relative group w-full">
        <div ref={caraousel} className="w-full flex gap-4 overflow-x-hidden scroll-smooth transition-transform duration-300 ease-in-out">
          {keyEvents.map((event, index) => (
            <Event
              key={index}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
        <div className="">
          <button
            type="button"
            aria-label="previous button"
            disabled={isLeftDisabled}
            onClick={handleLeftCarousel}
            className="absolute top-0 left-1 h-full w-12 flex justify-center items-center disabled:hidden disabled:cursor-default"
          >
            <div className="w-8 md:w-10 h-8 md:h-10 bg-white flex justify-center items-center rounded-full text-xl md:text-3xl hover:bg-slate-100">
              <svg
                className="rotate-180"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.455999 2.32321L4.9508 6.74071L0.455999 11.1581C0.00419936 11.6021 0.00419936 12.3194 0.455999 12.7634C0.907799 13.2074 1.6377 13.2074 2.0895 12.7634L7.4068 7.53761C7.8586 7.09361 7.8586 6.37641 7.4068 5.93231L2.0895 0.70661C1.6377 0.26251 0.907799 0.26251 0.455999 0.70661C0.0157993 1.15061 0.00419936 1.87921 0.455999 2.32321Z"
                  fill="#757779"
                />
              </svg>
            </div>
          </button>

          <button
            type="button"
            onClick={handleRightCarousel}
            disabled={isRightDisabled}
            className="absolute top-0 right-1 h-full w-12 flex justify-center items-center disabled:hidden disabled:cursor-default"
          >
            <div className="w-8 md:w-10 h-8 md:h-10 bg-white flex justify-center items-center rounded-full text-xl md:text-3xl hover:bg-slate-100">
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.455999 2.32321L4.9508 6.74071L0.455999 11.1581C0.00419936 11.6021 0.00419936 12.3194 0.455999 12.7634C0.907799 13.2074 1.6377 13.2074 2.0895 12.7634L7.4068 7.53761C7.8586 7.09361 7.8586 6.37641 7.4068 5.93231L2.0895 0.70661C1.6377 0.26251 0.907799 0.26251 0.455999 0.70661C0.0157993 1.15061 0.00419936 1.87921 0.455999 2.32321Z"
                  fill="#757779"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

const Event = memo(function Event({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex-shrink-0 p-4 md:p-8 rounded-lg bg-[#E8F4FD] max-w-xl w-full flex gap-2">
      <span className="flex-shrink-0 w-11 h-11 rounded-full bg-[#0082FF] flex items-center justify-center">
        <svg
          width="24"
          height="19"
          viewBox="0 0 24 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13.2569V10.4569H7.8V13.2569H5ZM19 2.74846C18.9978 2.19296 18.7755 1.66097 18.382 1.26896C17.9884 0.876952 17.4555 0.656856 16.9 0.65686H2.7922C2.23525 0.65686 1.7011 0.87811 1.30728 1.27194C0.913449 1.66576 0.6922 2.19991 0.6922 2.75686V15.3569C0.6922 16.2851 1.06095 17.1754 1.71733 17.8317C2.3737 18.4881 3.26394 18.8569 4.1922 18.8569H19.8078C20.7361 18.8569 21.6263 18.4881 22.2827 17.8317C22.939 17.1754 23.3078 16.2851 23.3078 15.3569V6.95686C23.3078 6.39991 23.0865 5.86576 22.6927 5.47194C22.2989 5.07811 21.7648 4.85686 21.2078 4.85686H20.4V14.9789C20.4 15.1645 20.3263 15.3426 20.195 15.4738C20.0637 15.6051 19.8857 15.6789 19.7 15.6789C19.5143 15.6789 19.3363 15.6051 19.205 15.4738C19.0737 15.3426 19 15.1645 19 14.9789V2.74846ZM3.6 5.55686C3.6 5.37121 3.67375 5.19316 3.80503 5.06189C3.9363 4.93061 4.11435 4.85686 4.3 4.85686H15.5C15.6857 4.85686 15.8637 4.93061 15.995 5.06189C16.1262 5.19316 16.2 5.37121 16.2 5.55686C16.2 5.74251 16.1262 5.92056 15.995 6.05184C15.8637 6.18311 15.6857 6.25686 15.5 6.25686H4.3C4.11435 6.25686 3.9363 6.18311 3.80503 6.05184C3.67375 5.92056 3.6 5.74251 3.6 5.55686ZM11.3 9.05686H15.5C15.6857 9.05686 15.8637 9.13061 15.995 9.26189C16.1262 9.39316 16.2 9.57121 16.2 9.75686C16.2 9.94251 16.1262 10.1206 15.995 10.2518C15.8637 10.3831 15.6857 10.4569 15.5 10.4569H11.3C11.1143 10.4569 10.9363 10.3831 10.805 10.2518C10.6737 10.1206 10.6 9.94251 10.6 9.75686C10.6 9.57121 10.6737 9.39316 10.805 9.26189C10.9363 9.13061 11.1143 9.05686 11.3 9.05686ZM10.6 13.9569C10.6 13.7712 10.6737 13.5932 10.805 13.4619C10.9363 13.3306 11.1143 13.2569 11.3 13.2569H15.5C15.6857 13.2569 15.8637 13.3306 15.995 13.4619C16.1262 13.5932 16.2 13.7712 16.2 13.9569C16.2 14.1425 16.1262 14.3206 15.995 14.4518C15.8637 14.5831 15.6857 14.6569 15.5 14.6569H11.3C11.1143 14.6569 10.9363 14.5831 10.805 14.4518C10.6737 14.3206 10.6 14.1425 10.6 13.9569ZM4.3 9.05686H8.5C8.68565 9.05686 8.8637 9.13061 8.99497 9.26189C9.12625 9.39316 9.2 9.57121 9.2 9.75686V13.9569C9.2 14.1425 9.12625 14.3206 8.99497 14.4518C8.8637 14.5831 8.68565 14.6569 8.5 14.6569H4.3C4.11435 14.6569 3.9363 14.5831 3.80503 14.4518C3.67375 14.3206 3.6 14.1425 3.6 13.9569V9.75686C3.6 9.57121 3.67375 9.39316 3.80503 9.26189C3.9363 9.13061 4.11435 9.05686 4.3 9.05686Z"
            fill="white"
          />
        </svg>
      </span>
      <span className="">
        <h4 className="text-xs md:text-sm text-[#191C1F] font-medium mb-2">
          {title}
        </h4>
        <p className="text-[10px] md:text-sm text-[#3E5765]">{description}</p>
      </span>
    </div>
  );
});

export default memo(Sentiment);
