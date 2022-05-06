import React, { useState } from "react";
import "./popup.css"

const Popup = (props: any) => {
    const [user, setUser] = useState(props.item)

    return (
        <div className="popup-box">
            <div className="box text-center">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <form action="#">
                    <input className="mb-2" type="text" placeholder="New first name" value={user.first_name} onChange={(event) =>
                        setUser({ ...user, first_name: event.target.value })
                    } /><br />
                    <input className="mb-2" type="text" placeholder="New last name" value={user.last_name} onChange={(event) =>
                        setUser({ ...user, last_name: event.target.value })
                    } /><br />
                    <input className="mb-2" type="text" placeholder="New email" value={user.email} onChange={(event) =>
                        setUser({ ...user, email: event.target.value })
                    } /><br />

                    <button className="btn btn-primary" onClick={()=>
                        props.handleSave(user)
                    }>Save</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;