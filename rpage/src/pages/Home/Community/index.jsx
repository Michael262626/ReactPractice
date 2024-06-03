import mage from '../../../asset/mage.png'
import mage2 from '../../../asset/mage2.png'
import mage3 from '../../../asset/mage3.png'
import styles from '../../Home/Community/index.module.css'



const Community = () => {
    return(
        <>
            <div className={styles.container3}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <h2><span style={{color: "#4d4d4d"}}>Caring is the new marketing</span></h2>
                </div>
            </div>
            <div className={styles.paragraph5}>
                <div style={{alignItems: "center"}}>
                    <span style={{display: "flex", textAlign: "center", fontSize: "small", color: "#959595"}}><br/>The Nextcent blog is the best place to read about the latest membership insights,<br/> trends and more. See who's joining the community, read about how our community<br/> are increasing their membership income and lot's more.</span>
                </div>
            </div>
            <div className={styles.img2}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img src={mage} alt="picture"/>
                </div>
                <div style={{alignItems: "center", display: "flex"}}>
                    <img src={mage2} alt="picture"/>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img src={mage3} alt="picture"/>
                </div>
            </div>
            <div className={styles.btn}>
                <button>Get a demo</button>
            </div>
        </>
    )
}
export default Community