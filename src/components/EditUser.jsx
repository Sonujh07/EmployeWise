import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const EditUser = ({ token }) => {
    const { id } = useParams();
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: ""
         });

    const navigate = useNavigate();
  
    useEffect(() => {
      fetchUser();
    }, []);
  
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
  
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
        await axios.put(`https://reqres.in/api/users/${id}`, user);
        alert("User updated successfully");
        navigate("/users");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    };
  
    return (
      <div className="h-screen mx-auto p-6 bg-[#00d4ff]">
  
        <form onSubmit={handleUpdate} className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Edit User</h2>

            <div className="space-y-4">
                <div>
                <label className="block text-gray-600 mb-1 font-medium">First Name</label>
                <input 
                    type="text" 
                    value={user.first_name} 
                    onChange={(e) => setUser({ ...user, first_name: e.target.value })} 
                    placeholder="Enter First Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                </div>

                <div>
                <label className="block text-gray-600 mb-1 font-medium">Last Name</label>
                <input 
                    type="text" 
                    value={user.last_name} 
                    onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                    placeholder="Enter Last Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                </div>

                <div>
                <label className="block text-gray-600 mb-1 font-medium">Email</label>
                <input 
                    type="email" 
                    value={user.email} 
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Enter Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                </div>
            </div>

            <button 
                type="submit" 
                className="w-full mt-6 px-4 py-3 bg-blue-500 text-white rounded-lg font-medium text-lg hover:bg-blue-600 transition-all"
            >
                Update
            </button>
        </form>

      </div>
    );
  };
  
  export default EditUser;