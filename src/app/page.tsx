import Link from "next/link";



const links=[
  {
    name:'Bitcoin',
    url:'/bitcoin'
  },
  {
    name:'Ethereum',
    url:'/ethereum'
  },
  {
    name:'solana',
    url:'/solana'
  }

]
export default function Home() {
  return (
   <div className="flex flex-col ">
    {links.map((link,index)=>{
      return <Link href={link.url} key={index}>{link.name}</Link>
    })}
   </div>
  );
}
