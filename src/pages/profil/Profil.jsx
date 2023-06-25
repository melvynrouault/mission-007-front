import { useState } from "react"

export default function Profil() {
    //state
    const [user, setUser] = useState([
        {id: 1, username: "Anna", email: "annamahe9@gmail.com", password: "MelvynQueJaime"} 
    ]);

    //behavior
    //render
    return (
        <div>
            <p>Profil</p>
        </div>
    )
}