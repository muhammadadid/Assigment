import './style.css'
import ImageHome from './../../assets/image.png'
const Hiro = () => {
    return (
        <div>
            <section id="home" >
                <div className="container-hiro">
                    <div className="flex flex-wrap">
                        <div className="content-wrapper">
                            <h1 className="heading">Pedas, Gurih, Menggugah</h1>
                            <h2 className="sub-heading">Mulai dari harga Rp. 8.000 saja!</h2>
                            <a href="menu.html" className="btn">Lihat Menu</a>
                        </div>
                        <div className="image-wrapper">
                            <img src= {ImageHome} alt="Seblak" className ="image"></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Hiro