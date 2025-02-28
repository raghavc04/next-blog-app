import { assets } from "@/assets/assets";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }){
return (
    <>
    <div className="flex">
        <ToastContainer theme="dark" position="top-right" autoClose={5000} />
     <Sidebar/>
     <div className="flex flex-col w-full">
        <div className="flex justify-between items-center py-3 w-full max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
      <Image src={assets.profile_icon} width={40} alt=''/>
        </div>
        {children}

     </div>
    </div>
   
    </>
)

}