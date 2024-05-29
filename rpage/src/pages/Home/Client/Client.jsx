import Clients from "../../../asset/Clients.png";
import style from "./index.module.css"
import {members} from "./data";


const Client = () => {
    return(
        <>
            <div className={style.clients}>
                <div style={{alignItems: "center"}}>
                    <h2>Our Client</h2>
                </div>
            </div>
            <div className={style.paragraph}>
                <div style={{alignItems: "center", display: "flex"}}>
                    <p>we have been working with some Feature 500+ clients</p>
                </div>
            </div>
            <div className={style.img}>
                <div className="img3" style={{alignItems: "center"}}>
                    <img src={Clients} alt=""/>
                </div>
            </div>
            <div className={style.paragraph2}>
                {members.map((member, index)=>(
                    <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <img src={member.image} alt={member.title}/>
                        <h2>{member.title1} <br/> {member.title2}</h2>
                        <p style={{width: "50%", textAlign: "center"}}>{member.text}</p>
                    </div>
                ))
                }
            </div>
        </>
    )
}
export default Client;