import './style.css'
import IconWatch from '../../assets/icon/clock_hour_minute_second_time_timer_watch_icon_123193.png'
import IconWifi from '../../assets/icon/wifi_3207.png'
import IconMoney from '../../assets/icon/shoppaymentorderbuy-04_icon-icons.com_73886.png'

const Three = () => {
    return (

        <section id="features" className="features-section">
          <div className="container-three">
            <div className="feature-item-container">
              
              <div className="feature-item">
                <div className="icon-container">
                  <img src= {IconMoney} alt="Harga Terjangkau"></img>
                </div>
                <span className="description">Harga Terjangkau</span>
              </div>
              
              <div className="feature-item">
                <div className="icon-container">
                  <img src= {IconWifi} alt="Free Wifi"></img>
                </div>
                <span className="description">Free Wifi</span>
              </div>
              
              <div className="feature-item">
                <div className="icon-container">
                  <img src= {IconWatch} alt="Every Day"></img>
                </div>
                <span className="description">Every Day 11:00 - 22:00 WIB</span>
              </div>
            </div>
          </div>
        </section>
    
    )
}
export default Three