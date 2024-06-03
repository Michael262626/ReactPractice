import Icon4 from "../../../asset/Icon4.png"
import Icon6 from "../../../asset/Icon6.png"
import Icon5 from "../../../asset/Icon5.png"
import Icon7 from "../../../asset/Icon7.png"
import styles from ".././Achievenments/index.module.css"


const Achievements = () => {
    return(
        <>
            <div className={styles.paragraph4}>
                <div className={styles.pass1} style={{display: "flex", alignItems: "center"}}>
                    <h2>Helping a local<span style={{display: "flex", color:" #4caf4f"}}> business reinvent itself</span><span style={{fontSize: "small"}}>we reached here with our hard work and dedication</span> </h2>
                </div>
                <div className={styles.container}>
                    <div className="pass" style={{display: "flex", alignItems: "center", gap: "25px"}}>
                        <img src={Icon4} alt="logo5" style={{width: "35px"}}/>
                            <h2>2, 245, 341<span style={{fontSize: "small", color: "#A2A3A4"}}><br/>Members</span></h2>
                            <img src={Icon6} alt="logo6" style={{width: "35px"}}/>
                                <h2>46, 328<span style={{fontSize: "small", color: "#A2A3A4"}}><br/>Clubs</span></h2>
                    </div>
                    <div className="pass3" style={{display: "flex", alignItems: "center", gap: "25px"}}>
                        <img src={Icon5} alt="logo5" style={{width: "35px"}}/>
                            <h2>828, 867<span style={{fontSize: "small", color: "#A2A3A4"}}><br/>Event bookings</span></h2>
                        <div style={{display: 'flex', alignItems: 'center', marginLeft: "5px", gap: "25px"}}>
                            <img src={Icon7} alt="logo6" style={{width: "35px"}} />
                                <h2>1, 926, 436<span style={{fontSize: "small", color: "#A2A3A4"}}><br/>Payments</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Achievements