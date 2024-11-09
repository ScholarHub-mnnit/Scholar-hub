import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading"
import { useEffect, useState } from "react"



export default function Auth({children,authentication=true}) {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(true)
    const status= useSelector(state => state.user.status)

    useEffect(()=>{
        setLoading(true);
        if(status !== authentication){
            if(authentication) navigate("/login");
            else navigate("/dashboard");
        }
        setLoading(false);
    },[status,navigate,authentication])


  return loading? <Loading/>:<>{children}</>
}