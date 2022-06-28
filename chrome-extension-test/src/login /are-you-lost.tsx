import { useEffect } from "react";

interface Props {
    setShow: any;
    user: any;
}

const AreYouLost = ({ setShow, user } : Props) => {

  return (
    <div className="z-10 absolute w-1/2 top-1/4 left-1/4 m-auto p-4 rounded-xl bg-slate-200 transition ease-in-out">
        <p className="mb-4 text-slate text-center">Are you lost {user.name}?</p>
        <div className="flex justify-around">
            <button className="px-8 py-2 bg-red-500 transition-all hover:bg-red-200 rounded-full"
            onClick={() => window.open("https://help.nickelled.com/en/")}>Yes</button>
            <button className="px-8 py-2 bg-green-500 transition-all hover:bg-green-200 rounded-full"
            onClick={() => {setShow(false)}} 
            >No</button>
        </div>
    </div>
  )
}

export default AreYouLost