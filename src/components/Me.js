import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default () => {
    const {token, getUserData} = useAuth();
    const [userData, setUserData] = useState(null);
    useEffect(()=> {
        getUserData()
        .then(data => setUserData(data))
    },[])

    return(
        <>
            <h2>My data!</h2>
            {
                userData && <div>
                    <div>
                        Name: {userData.name}
                    </div>
                    <div>
                        Email: {userData.email}
                    </div>
                </div>
            }
        </>
    )
}