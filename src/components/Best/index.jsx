import './style.css'
import ImageOri from '../../assets/img/original.jpg'
import ImageSos from '../../assets/img/sosis.jpg'
const Best = () => {
    return (
    <section id="Clients" className="clients-section">
    <div className="container-best">
        <div className="clients-heading">
            <h4 className="heading-one">News</h4>
            <h2 className="heading-two">Menu Best Seller</h2>
        </div>
        <div className="clients-logos">
            <div className="clients-logo">
                <img className='image-best' src={ImageOri} alt="seblak original" />
            </div>
            <div className='text-box'>
                <div className='text'><span>Seblak Original</span>
                </div>
            </div>
            <div className="clients-logo">
                <img className='image-best' src={ImageSos} alt="seblak original" />
            </div>
            <div className='text-box'>
                <div className='text'><span>Seblak Sosis</span>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}
export default Best