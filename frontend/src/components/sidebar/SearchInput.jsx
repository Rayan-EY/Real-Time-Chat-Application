import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
	const [search,setSearch]=useState("");
	const {setSelectedConversation}=useConversation();
	const {conversations}=useGetConversations();

	const handleSubmit=async (e)=>{
		e.preventDefault();
		if(!search)	return;

		if(search.length<3){
			toast.error("Atleast 3 characters needed for search")
		}
		else {
		const conversation = conversations.find((c)=> c.name.toLowerCase().includes(search.toLowerCase()));

		if(conversation){
			setSelectedConversation(conversation);
			setSearch('');

		}
	
		else toast.error("No conversation found!!")
	}}
	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' value={search} onChange={(e)=> setSearch(e.target.value)} />
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoIosSearch className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;