import { FaCircle } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";



const TicketCard = ({ ticket, addToProgress}) => {

    return (
        <div onClick={addToProgress}
            className="bg-white p-4 rounded space-y-3 cursor-pointer shadow">
            <div className='flex flex-col-reverse md:flex-row justify-between md:items-center gap-2'>
                <h3 className='text-lg font-medium text-[#001931]'>{ticket.title}</h3>
                <button className={`text-[#0B5E06] font-medium bg-[#B9F8CF] px-3 py-1 rounded-2xl flex self-start items-center gap-1 ${ticket.status === "In Progress" ? "text-[#9C7700] bg-[#F8F3B9]" : ""}`}><span className={`text-[#02A53B] ${ticket.status === "In Progress" ? "text-[#FEBB0C]" : ""}`}><FaCircle /></span>{ticket.status === "In Progress" ? "In Progress" : ticket.status}</button>
            </div>
            <p className='text-[#627382]'>{ticket.description}</p>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col md:flex-row md:items-center gap-2'>
                    <p className='text-[#627382] font-medium text-sm'>#{ticket.id}</p>
                    <p className='text-[#F83044] font-medium text-sm'>{ticket.priority}</p>
                </div>
                <div className='flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-4'>
                    <p className='text-[#627382] font-medium text-sm'>{ticket.customer}</p>
                    <p className='text-[#627382] font-medium text-sm flex items-center gap-2'><span className='font-semibold text-xl'><SlCalender /></span>{ticket.createdAt}</p>
                </div>
            </div>

        </div>
    );
};

export default TicketCard;