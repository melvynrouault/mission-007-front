import { useState } from "react"
import './style.scss';

export default function Home() {
    //state
    const [tasks, setTasks] = useState([
        {id: 1, title: "Dire à mon futur mari que je l'aime", date: "23/06/2023", toCompletedBy: "Avant la fin de la journée", completed: false},
        {id: 2, title: "Lécher la joue de mon futur mari", date: "23/06/2023", toCompletedBy: "Avant la fin de la journée", completed: true},
        {id: 3, title: "Faire un bbq", date: "23/06/2023", toCompletedBy: "Avant la fin du mois", completed: false},
        {id: 4, title: "Matter un feu d'artifice", date: "23/06/2023", toCompletedBy: "Avant la fin du mois", completed: false},
        {id: 5, title: "Dire à mon futur mari que je l'aime", date: "23/06/2023", toCompletedBy: "Avant la find e la journée", completed: false},
        {id: 6, title: "Dire à mon futur mari que je l'aime", date: "23/06/2023", toCompletedBy: "Avant la find e la journée", completed: false},
    ])
    //behavior

    //render
    return(
        <div className="homeContainer">
            <p>Home</p>
            <div className="tasks">
                <div className="task">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum provident soluta, optio aspernatur reprehenderit non excepturi praesentium odio ea dolor voluptas officia aperiam exercitationem officiis, odit delectus, alias nulla dolorem.</p>
                    <button className="deleteButton">X</button>
                    <button className="checkedButton">V</button>
                </div>
                <div className="task">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum provident soluta, optio aspernatur reprehenderit non excepturi praesentium odio ea dolor voluptas officia aperiam exercitationem officiis, odit delectus, alias nulla dolorem.</p>
                    <button className="deleteButton">X</button>
                    <button className="checkedButton">V</button>
                </div>

                <div className="task">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum provident soluta, optio aspernatur reprehenderit non excepturi praesentium odio ea dolor voluptas officia aperiam exercitationem officiis, odit delectus, alias nulla dolorem.</p>
                    <button className="deleteButton">X</button>
                    <button className="checkedButton">V</button>
                </div>
                <div className="task">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum provident soluta, optio aspernatur reprehenderit non excepturi praesentium odio ea dolor voluptas officia aperiam exercitationem officiis, odit delectus, alias nulla dolorem.</p>
                    <button className="deleteButton">X</button>
                    <button className="checkedButton">V</button>
                </div>
                <div className="task">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum provident soluta, optio aspernatur reprehenderit non excepturi praesentium odio ea dolor voluptas officia aperiam exercitationem officiis, odit delectus, alias nulla dolorem.</p>
                    <button className="deleteButton">X</button>
                    <button className="checkedButton">V</button>
                </div>
                <div className="task">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum provident soluta, optio aspernatur reprehenderit non excepturi praesentium odio ea dolor voluptas officia aperiam exercitationem officiis, odit delectus, alias nulla dolorem.</p>
                    <button className="deleteButton">X</button>
                    <button className="checkedButton">V</button>
                </div>
                <div className="task">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum provident soluta, optio aspernatur reprehenderit non excepturi praesentium odio ea dolor voluptas officia aperiam exercitationem officiis, odit delectus, alias nulla dolorem.</p>
                    <button className="deleteButton">X</button>
                    <button className="checkedButton">V</button>
                </div>
                <div className="task">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum provident soluta, optio aspernatur reprehenderit non excepturi praesentium odio ea dolor voluptas officia aperiam exercitationem officiis, odit delectus, alias nulla dolorem.</p>
                    <button className="deleteButton">X</button>
                    <button className="checkedButton">V</button>
                </div>
                <div className="task">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum provident soluta, optio aspernatur reprehenderit non excepturi praesentium odio ea dolor voluptas officia aperiam exercitationem officiis, odit delectus, alias nulla dolorem.</p>
                    <button className="deleteButton">X</button>
                    <button className="checkedButton">V</button>
                </div>
            </div>

            
        </div>
    )
}