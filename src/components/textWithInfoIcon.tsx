import { memo } from "react"


function TextWithInfoIcon({text, classname}:{text: string, classname?: string}) {
  return(
    <>
    <span className={`flex items-center text-[#44475B] + ${classname}`}>
        <h1 className="mb-5 font-semibold text-sm">{text}</h1>
        <svg
          width="18"
          height="20"
          viewBox="0 0 27 10"
          className="-mt-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_663)">
            <path
              d="M16.04 2.46362C11.44 2.46362 7.70667 6.19696 7.70667 10.797C7.70667 15.397 11.44 19.1303 16.04 19.1303C20.64 19.1303 24.3733 15.397 24.3733 10.797C24.3733 6.19696 20.64 2.46362 16.04 2.46362ZM16.8733 14.9636H15.2067V9.96362H16.8733V14.9636ZM16.8733 8.29696H15.2067V6.63029H16.8733V8.29696Z"
              fill="#ABB9BF"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_663">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(6.03998 0.796875)"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
    </>
  )
}


export default memo(TextWithInfoIcon)