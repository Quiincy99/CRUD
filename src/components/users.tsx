import React, { useEffect, useState } from "react";
import Data from "../data.json"
import Popup from "./popup";

function Users() {

    const [items, setItems] = useState(Data);
    const [user, setUser] = useState({
        id: items.length,
        email: "",
        first_name: "",
        last_name: "",
        avatar: "https://yt3.ggpht.com/a/AATXAJwvicERKKyzjy9e717zoqf97Jkvvo9z8dkvpw=s900-c-k-c0xffffffff-no-rj-mo",
    });

    const [hide, setHide] = useState("hidden")
    const [isOpen, setIsOpen] = useState(false);

    const [user_2, setUser_2] = useState({
        id: items.length,
        email: "",
        first_name: "",
        last_name: "",
        avatar: "https://yt3.ggpht.com/a/AATXAJwvicERKKyzjy9e717zoqf97Jkvvo9z8dkvpw=s900-c-k-c0xffffffff-no-rj-mo",
    });

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
    }, [items])


    return (
        <div className="text-center">
            <div className="row">
                <h1 className="pb-4">Form homework</h1>
                <form action="#" className="border btn border-3 bg-dark text-white border-bottom-0 border-top-0 border-end-0">
                    <fieldset>
                        <label className="me-2" htmlFor="#fname">First name</label> <br />
                        <input id="fname" type="text" value={user.first_name} onChange={(event) => {
                            setUser({
                                id: items.length,
                                first_name: event.target.value,
                                last_name: user.last_name,
                                email: user.email,
                                avatar: user.avatar
                            })
                        }}></input>
                        <br />
                        <label className="me-2" htmlFor="#lname">Last name</label> <br />
                        <input id="fname" type="text" value={user.last_name} onChange={(event) => {
                            setUser({
                                id: items.length,
                                first_name: user.first_name,
                                last_name: event.target.value,
                                email: user.email,
                                avatar: user.avatar
                            })
                        }}></input>
                        <br />
                        <label className="me-2 mt-2" htmlFor="#email">Email</label> <br />
                        <input id="fname" type="text" value={user.email} onChange={(event) => {
                            setUser({
                                id: items.length,
                                first_name: user.first_name,
                                last_name: user.last_name,
                                email: event.target.value,
                                avatar: user.avatar
                            })
                        }}></input>
                        <br />
                        <button className="btn btn-primary mt-2" onClick={() => {
                            setItems([...items, user])
                            console.log(user)
                        }}>Add</button>
                    </fieldset>
                </form>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2 ms-5 ps-5">
                {
                    items.map((item: any, index) => {
                        return (
                            <div className="card m-3" style={
                                { width: "18rem" }
                            }>
                                <img src={item.avatar} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <h4>{item.first_name} {item.last_name}</h4>
                                    <p>{item.email}</p>

                                    <br />
                                    <button className="btn btn-primary me-2" onClick={togglePopup}>Update</button>

                                    {isOpen && <Popup
                                        content={<>
                                            <div>
                                                <input className="mb-2" type="text" placeholder="New first name" value={user_2.first_name} onChange={(event) => {
                                                    setUser_2({
                                                        id: item.id,
                                                        first_name: event.target.value,
                                                        last_name: user_2.last_name,
                                                        email: user_2.email,
                                                        avatar: item.avatar
                                                    })
                                                }} /> <br />
                                                <input className="mb-2" type="text" placeholder="New last name" value={user_2.last_name} onChange={(event) => {
                                                    setUser_2({
                                                        id: item.id,
                                                        first_name: user_2.first_name,
                                                        last_name: event.target.value,
                                                        email: user_2.email,
                                                        avatar: item.avatar
                                                    })
                                                }} /> <br />
                                                <input className="mb-2" type="text" placeholder="New email" value={user_2.email} onChange={(event) => {
                                                    setUser_2({
                                                        id: item.id,
                                                        first_name: user_2.first_name,
                                                        last_name: user_2.last_name,
                                                        email: event.target.value,
                                                        avatar: item.avatar
                                                    })
                                                }} /> <br />
                                                <button className="btn btn-success mt-2" onClick={() => {
                                                    const temp = {
                                                        id: item.id,
                                                        email: user_2.email,
                                                        first_name: user_2.first_name,
                                                        last_name: user_2.last_name,
                                                        avatar: item.avatar,
                                                    }
                                                    
                                                    let arr = items
                                                    arr.map(e => e.id !== temp.id?e:temp)
                                                    setItems(arr)
                                                    
                                                    togglePopup()
                                                }}>Save</button>
                                            </div>
                                        </>}
                                        handleClose={togglePopup}
                                    />}

                                    <button onClick={() => {
                                        setItems(items.filter(e => e.id !== item.id))
                                    }} className="btn btn-danger ms-2">Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Users;