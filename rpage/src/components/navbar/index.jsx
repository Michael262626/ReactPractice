import Icon from "../../asset/Icon.png"
import style from "./index.module.css"


const Navbar = ()=>{
    return(
        <>
            <div className="mainContainer">
                <div className={style.nav}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={Icon} alt="logo"/>
                        <h2 style={{color: "#263238", fontSize: "30px"}}>Nexcent</h2>
                    </div>
                    <div className={style.midSection}>
                        <p>Home</p>
                        <p>Features</p>
                        <p>Community</p>
                        <p>Blog</p>
                        <p>Price</p>
                    </div>
                    <div style = {{display: "flex", alignItems: "center"}}>
                        <button style ={{color: " #4caf4f", background: "none", border: "none", fontSize: "16px", fontWeight: "500"}}>Login</button>
                        <button style={{padding: "10px", borderRadius: "4px", background: "#4caf4f", color:" #fff", border: "none"}}>SignUp</button>
                    </div>
                </div>
                </div>
        </>
    )
}
            
export default Navbar;