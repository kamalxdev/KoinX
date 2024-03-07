import { memo } from "react";

function Tokenomics() {
  return (
    <>
      <h1 className="mb-5 font-semibold">Tokenomics</h1>
      <span>
        <h3 className="text-[#1D1D1D]">Initial Distribution</h3>
        <span className="flex gap-10 my-5">
          <span>
            <svg
              width="179"
              height="180"
              viewBox="0 0 179 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="89.5"
                cy="89.7969"
                r="74.5"
                stroke="#0082FF"
                strokeWidth="30"
              />
              <mask id="path-2-inside-1_1_922" fill="white">
                <path d="M89.5 0.296875C74.3468 0.296875 59.4417 4.14426 46.1817 11.4784C32.9217 18.8126 21.7409 29.3935 13.6873 42.2293C5.63363 55.065 0.970851 69.7355 0.135952 84.8657C-0.698948 99.9958 2.32137 115.09 8.91382 128.734L89.5 89.7969V0.296875Z" />
              </mask>
              <path
                d="M89.5 0.296875C74.3468 0.296875 59.4417 4.14426 46.1817 11.4784C32.9217 18.8126 21.7409 29.3935 13.6873 42.2293C5.63363 55.065 0.970851 69.7355 0.135952 84.8657C-0.698948 99.9958 2.32137 115.09 8.91382 128.734L89.5 89.7969V0.296875Z"
                stroke="#FAA002"
                strokeWidth="60"
                mask="url(#path-2-inside-1_1_922)"
              />
              <circle cx="89.5" cy="89.5" r="59.5" fill="white" />
              <circle cx="89.5" cy="89.5" r="59.5" stroke="#0082FF" />
            </svg>
          </span>
          <span className="flex flex-col items-start justify-center gap-2">
            <span className="before:block before:content-[''] before:absolute before:w-2 before:-ml-4 before:mt-2  before:h-2 before:rounded-full before:bg-[#0082FF]">
              Crowdsale investors: 80%
            </span>
            <span className="before:block before:content-[''] before:absolute before:w-2 before:-ml-4 before:mt-2  before:h-2 before:rounded-full before:bg-[#FAA002]">
              Foundation: 20%
            </span>
          </span>
        </span>
      </span>
      <p className=" text-[#3E424A] text-xs ">
      Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus. 
      </p>
    </>
  );
}

export default memo(Tokenomics);
