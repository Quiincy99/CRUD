import React, { useEffect, useState } from "react";
import Form from "./form";
import Data from "../data.json"
import Popup from "./popup";

function Users() {

    const [items, setItems] = useState(Data);
    const [isOpen, setIsOpen] = useState(false);
    const [updated, setUpdated] = useState(1);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="row">
            <div className="col col-2">
                <Form id={items.length + 1} key={items} formAdd={(user: any) => {
                    setItems([...items, user])
                    console.log(items)
                }}></Form>
            </div>
            <div className="col">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        items.map((item: any, index) => {
                            return (
                                <div>
                                    <div className="card m-3" style={
                                        { width: "18rem" }
                                    }>
                                        <img src={item["avatar"]} className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <h4>{item["first_name"]} {item["last_name"]}</h4>
                                            <p>{item["email"]}</p>
                                            <button className="btn btn-primary me-2" onClick={()=>{
                                                setUpdated(item.id)
                                                togglePopup()
                                                }}>Update</button>

                                            {isOpen && <Popup
                                                item={items[updated - 1]}
                                                key={item}
                                                handleClose={togglePopup}
                                                handleSave={(user:any) => {
                                                    setItems(items.map((e:any) => e.id != user.id?e:user))
                                                    console.log(items)
                                                }}
                                            />}

                                            <button onClick={() => setItems(items.filter((e: any, i) => e.id !== item.id))} className="btn btn-danger ms-2">Delete</button>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default Users;