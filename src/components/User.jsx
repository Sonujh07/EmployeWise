import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Users = ({ token, onLogout }) => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState()
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchUsers(page);
    }, [page]);
  
    const fetchUsers = async (page) => {
      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages)
        console.log("User Data:::::", response.data)
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
  
    const handleDelete = async (id) => {
      try {
        await axios.delete(`https://reqres.in/api/users/${id}`);
        setUsers(users.filter(user => user.id !== id));
        alert("User deleted successfully");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    };
  
    return (
      <div className=" flex flex-col h-screen bg-[#f0f7ff] mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center ">User List</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center ">
          {users.map((user) => (
            <div key={user.id} className="bg-white p-4 shadow-md rounded">
              <img src={user.avatar} alt={user.first_name} className="w-16 h-16 rounded-full mx-auto" />
              <h3 className="text-center mt-2">{user.first_name} {user.last_name}</h3>
              <p className="text-center text-gray-500">{user.email}</p>
              <div className="flex justify-center gap-2 mt-3">
                <button onClick={() => navigate(`/edit-user/${user.id}`)} className="px-3 py-1 bg-green-500 text-white rounded">Edit</button>
                <button onClick={() => handleDelete(user.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
           {/* Disable Prev button on first page */}
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1} 
          className={`px-4 py-2 rounded mr-2 ${page === 1 ? 'bg-gray-200 ' : 'bg-gray-300'}`}
        >
          Prev
        </button>
        


        {/* Hide Next button on last page */}
        {page < totalPages && (
          <button 
            onClick={() => setPage(page + 1)} 
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next
          </button>
        )}
        </div>

       <div className="flex justify-center ">
       <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 mt-10 w-[20%] rounded">
          Logout
        </button>   
       </div>

      </div>
    );
  };
  
  export default Users;
  





