import Image from "next/image";
import { memo } from "react";

const profiles = [
  {
    name: "John Smith",
    designation: "Designation here",
    src: "/profile1.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    name: "Elina Williams",
    designation: "Designation here",
    src: "/profile2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    name: "John Smith",
    designation: "Designation here",
    src: "/profile3.png",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
];

function Team() {
  return (
    <>
      <h1 className="mb-5 font-semibold">Team</h1>
      <p className=" text-[#3E424A] text-sm ">
      Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
      </p>
      <div className="p-10 flex flex-col gap-10">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            designation={profile.designation}
            description={profile.description}
            src={profile.src}
          />
        ))}
      </div>
    </>
  );
}

const ProfileCard = memo(function ProfileCard({
  name,
  designation,
  description,
  src,
}: {
  name: string;
  designation: string;
  description: string;
  src: string;
}) {
  return (
    <div className="flex gap-10">
      <span className="flex flex-col shrink-0 " >
        <Image src={src} alt={name} width={100} height={100} className="object-cover rounded-md w-30 h-18"/>
        <span className="flex flex-col items-center">
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-xs text-[#788F9B]">{designation}</p>
        </span>
      </span>
      <span className="flex items-center justify-center">
        <p className=" text-[#0F1629] text-xs ">{description}</p>
      </span>
    </div>
  );
});

export default memo(Team);
