import React, { useState } from "react";


function Form(props:any) {
    const [user, setUser] = useState({
        id:props.id,
        email:"",
        first_name:"",
        last_name:"",
        avatar:"https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty.png"
    })

    return (
        <div className="text-center mt-5 mx-4">
            <form action="#">
                <input className="mb-2" type="text" placeholder="First name" value={user.first_name} onChange={(event)=>{
                    setUser({
                        ...user,
                        first_name:event.target.value, 
                    })
                }}/><br />
                <input className="mb-2" type="text" placeholder="Last name" value={user.last_name} onChange={(event)=>{
                    setUser({
                        ...user,
                        last_name:event.target.value, 
                    })
                }}/><br />
                <input className="mb-2" type="text" placeholder="Email" value={user.email} onChange={(event)=>{
                    setUser({
                        ...user,
                        email:event.target.value, 
                    })
                }}/><br />
                <button className="btn btn-primary" onClick={
                    () => {
                        props.formAdd(user)
                    }
                }>Add user</button>
            </form>
        </div>
    )
}

export default Form;