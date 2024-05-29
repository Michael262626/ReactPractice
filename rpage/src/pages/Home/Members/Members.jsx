import style from "../../../components/navbar/index.module.css";
import Icon1 from "../../../asset/Icon1.png";
import Icon2 from "../../../asset/Icon2.png";
import Icon3 from "../../../asset/Icon3.png";


const Members = () => {
    return(
        <>
            <div className={style.paragraph2}>
                <div style={{alignItems: "center", display: "flex"}}>
                    <h2>Manage your entire community<span style={{display: "block", textAlign: "center"}}></span> in a
                        single system <span style={{textAlign: "center", display: "block", fontSize: "small"}}><p>who is nextcent suitable for?</p></span>
                    </h2>
                    <p style={{textAlign: "center"}}/>
                </div>
                <div className={style.logos}>
                    <div>
                        <img src={Icon1} alt="logo"/>
                        <h2>Membership<br/>Organisation<span
                            style={{textAlign: "center", color: "#959595", display: "block", fontSize: "small"}}><p>Our membership management<br/> software provides full automation of<br/> membership renewals and payment</p></span>
                        </h2>
                    </div>
                    <div>
                        <img src={Icon2} alt="logo2"/>
                        <h2>National<br/>Associations<span
                            style={{textAlign: "center", color: "#959595", display: "block", fontSize: "small"}}><p>Our membership management<br/> software provides full automation of<br/> membership renewals and<br/> payment</p></span>
                        </h2>
                    </div>
                    <div>
                        <img src={Icon3} alt=""/>
                        <h2>Clubs And<br/>Groups<span
                            style={{textAlign: "center", color: "#959595", display: "block", fontSize: "small"}}><p>Our membership management<br/> software provides full automation of<br/> membership renewals and payment</p></span>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Members