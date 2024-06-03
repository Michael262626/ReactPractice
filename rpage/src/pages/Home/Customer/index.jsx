import image9 from '../../../asset/image9.png'
import Frame14 from '../../../asset/Frame14.png'
import styles from '../../Home/Customer/index.module.css'

const Customer = () => {
    return(
        <>
            <div className={styles.container2}>
                <div className="pass5" style={{display: "flex", alignItems: "center"}}>
                    <img src={image9} alt="picture"/>
                        <h5><span style={{fontSize: "small", color: "#4d4d4d"}}>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                            <br/> tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                            <br/>enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
                            <br/> mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
                            <br/> eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                            <br/> vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum
                            <br/> id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                        </span><br/><br/><span style={{color: "#4caf4f",fontSize: "medium"}}>Tim Smith
                        </span><br/><br/><span style={{color: "#4d4d4d"}}>British Dragon Boat Racing Association
                        </span><br/><br/><img src={Frame14} alt="picture"/></h5>
                </div>
            </div>
        </>
    )
}
export default Customer