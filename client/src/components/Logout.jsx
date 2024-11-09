import React from 'react'
import { persistor } from '../store';

function Logout() {
    const logitout=()=>{
        //logout logic
        persistor.purge();
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