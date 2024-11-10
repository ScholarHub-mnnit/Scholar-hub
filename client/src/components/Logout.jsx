import React from 'react'
import { persistor } from '../store';
import userService from '../api/userApiService';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate=useNavigate();
    const logitout=async()=>{
        //logout logic
        try {
            await userService.logout();
            persistor.purge();
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={logitout}>
                Log out
            </button>
        </div>
    )
}

export default Logout