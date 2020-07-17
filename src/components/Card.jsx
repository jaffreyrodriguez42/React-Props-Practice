import React from "react";
import contacts from "../contacts.js";

function Card(){
    console.log(contacts);
    return(
        <div className="card">
            <div className="top">
<h2 className="name">{contacts[0].name}</h2>
                <img className="circle-img"
                    src={contacts[0].img}
                    alt="avatar_img"
                                    />
            </div>
        <div className="bottom">
    <p className="info">{contacts[0].phone}</p>
    <p className="info">{contacts[0].email}</p>
            </div>
      </div>
    );
}

export default Card;