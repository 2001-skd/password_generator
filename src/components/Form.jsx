import { FaRegCopy } from "react-icons/fa";

const Form = () => {
  
  return (
    <div className="flex items-center bg-[#24232B] h-14 justify-between w-96 p-3 my-5">
      <input type='text' placeholder='Generate Password' className="h-full w-full font-primaryFont text-white text-2xl outline-none bg-[#24232B]"/>
      <FaRegCopy className="text-white text-2xl cursor-pointer"/>
    </div>
  )
}

export default Form
