import Header from "./component/Header";
import logo from "./image/3.jpg";

function Home(){
    return(
        <>
            <Header></Header>
            <div>
                <img src={logo}></img>
            </div>
        </>
    )
}
export default Home;
