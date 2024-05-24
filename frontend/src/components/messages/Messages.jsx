import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {

	const {loading,messages}= useGetMessages();
	const lastMessage=useRef();
	useEffect(()=>{
		setTimeout(()=>{lastMessage.current.scrollIntoView({behavior:"smooth"})},100)
		

	},[messages])
	
	return (
		<div className='px-4 flex-1 overflow-auto'>

			{!loading && messages.length>0 && messages.map((message)=>(
				<div key={message._id} ref={lastMessage}>
					<Message message={message} />
				</div>
			))}


			{loading  && (<>
			 <div className="flex flex-col gap-4 w-52 justify-begin">
			<div className="skeleton h-4 w-full bg-gray-800"></div>
			<div className="skeleton h-4 w-28 "></div>
			<div className="skeleton h-4 w-full bg-gray-800"></div>
			<div className="skeleton h-4 w-full "></div>
			</div>
			<br></br>
			<div className="flex flex-col gap-4 w-52 justify-end">
			<div className="skeleton h-4 w-full bg-gray-800"></div>
			<div className="skeleton h-4 w-28"></div>
			<div className="skeleton h-4 w-full bg-gray-800"></div>
			<div className="skeleton h-4 w-full"></div>
			<div className="skeleton h-4 w-full bg-gray-800"></div>
			<div className="skeleton h-4 w-full"></div>
		  	</div>
		

		  </>)}

		  {!loading && messages.length === 0 &&(
			<p className="text-center text-gray-400">No messages yet...</p>
		  )}
		  </div>
			
		
	);
}
export default Messages;