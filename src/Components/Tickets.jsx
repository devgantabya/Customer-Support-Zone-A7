import TicketCard from './TicketCard/TicketCard';



const Tickets = ({ stock, inProgress, resolved, addToProgress, addToResolved}) => {
    return (
        <div className='flex flex-col md:flex-row justify-between gap-4 w-full container mx-auto mb-5 px-4 md:px-0 md:mb-15'>
            <div className='md:w-3/4'>
                <h2 className='text-2xl font-semibold text-[#34485A] mb-2'>Customer Tickets</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {stock.length === 0 ? (
                        <p className="text-[#627382]">No more customer tickets.</p>
                    ) : (
                        stock.map((ticket) => (
                        <TicketCard 
                        key={ticket.id} 
                        ticket={ticket} 
                        addToProgress={()=>addToProgress(ticket.id)}
                        />
                        ))  
                    )}

                </div>
            </div>


            <div className='md:w-1/4 space-y-6'>
                <div>
                    <h2 className='text-2xl font-semibold text-[#34485A] mb-2'>Task Status</h2>

                    {
                        inProgress.length === 0 ? (<p className='text-[#627382]'>Select a ticket to add to Task Status</p>
                        ) : (
                            inProgress.map((task) => (
                                <div key={task.id} className='bg-white p-4 rounded space-y-3 shadow my-4'>
                        <h3 className='text-lg font-medium text-[#001931]'>{task.title}</h3>
                        <div className='bg-[#02A53B] rounded text-center cursor-pointer py-2' onClick={() => addToResolved(task.id)}>
                            <button className='text-white font-semibold cursor-pointer'>Complete</button>
                        </div>
                    </div>

                            ))
                        )}
                    </div>


                <div>
                    <h2 className='text-2xl font-semibold text-[#34485A] mb-2'>Resolved Task</h2>

                    {resolved.length === 0 ? (<p className='text-[#627382]'>No resolved tasks yet.</p>
                    ) : (
                        resolved.map((task) => (
                            <div 
                            key={task.id}
                            className='bg-[#E0E7FF] p-4 rounded space-y-3 shadow my-4'>
                        <h3 className='text-lg font-medium text-[#001931]'>{task.title}</h3>
                    </div>
                        ))
                    )} 
                </div>
            </div>
        </div>
    );
};

export default Tickets;