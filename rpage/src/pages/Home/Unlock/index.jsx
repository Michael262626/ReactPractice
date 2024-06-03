import Frame from "../../../asset/Frame.png"
import styles from "../../Home/Unlock/index.module.css"

const Unlock = () => {
    return(
        <>
        <div className={styles.paragraph3}>
            <div className={styles.pass}>
                <img src={Frame} alt="frame"/>
                    <h2>The unseen of spending three<br/>years at Pixelgrade<span className={styles.text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br/>
                              laccumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed<br/>
                              la porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet pretium auctor. Etiam<br/>
                              st quis massa pulvinar, aliquam quam vitae, tempus. Donec elementum pulvinar odio.  </p>
                    </span><span><button style={{padding: "10px", borderRadius: "4px", background: "#4caf4f", color: "#fff", border: "none"}}>Learn more</button></span></h2>
                </div>
            </div>
        </>
    )
}
export default Unlock