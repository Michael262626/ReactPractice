import pana from "../../../asset/pana.png"
import style from "../Calendar/index.module.css"

const Calendar = () => {
    return(
        <>
            <div className={style.container1}>
                <div className="pass4" style={{alignItems: "center", display: "flex"}}>
                    <img src={pana} alt="picture"/>
                        <h2>How to design your side footer<br/> like we did<span style={{fontSize: "small", color: "#4d4d4d"}}><br/>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt<br/> molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at <br/>libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta
                            <br/> nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                            <br/> in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi
                            <br/> ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                        </span><br/><br/><button style={{color: "#ffffff", background:" #4caf4f", padding: "10px", borderRadius: "4px", border: "none"}}>Learn more</button></h2>
                </div>
            </div>
        </>
    )
}
export default Calendar