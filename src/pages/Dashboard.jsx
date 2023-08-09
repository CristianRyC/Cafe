import Header from "../componentes/atomos/Header";
import DescripcionGeneral from "../componentes/moleculas/DescripcionGeneral";
import Carousel from "../componentes/moleculas/Carousel";
import Footer from "../componentes/moleculas/Footer";
function Dashboard() {
    return (
        <div>
            <Header></Header>
            <DescripcionGeneral></DescripcionGeneral>
            <Carousel></Carousel>
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;