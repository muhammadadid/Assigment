import './style.css'

const Faq = () => {
    return (
        <section id="Contact" >
                <div className="container-faq">
                    <div className="section-heading">
                        <h4 className="heading-primary">Contact</h4>
                        <h2 className="heading-secondary">Hubungi Kami</h2>
                    </div>
                    <form>
                        <div className="form-container">
                            <div className="form-group">
                                <label for="name">Nama</label>
                                <input type="text" id="name" name="name"></input>
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email"></input>
                            </div>
                            <div className="form-group">
                                <label for="message">Pesan</label>
                                <textarea id="message" name="message" rows="4"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit">Kirim</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
    )
}

export default Faq