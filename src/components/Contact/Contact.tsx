import "./Contact.scss"

const Contact: React.FC = () => {


    return (

        <section className="contact">

            <h1 className="contact-title" id="contact">Contact</h1>

            <form className="form" action="get">

                <label htmlFor="name"></label>
                <input className="form-name" type="name" name="name" id="name" placeholder="Name" required/>

                <label htmlFor="email"></label>
                <input className="form-email" type="email" name="email" id="email" placeholder="Email" required/>

                
                <label htmlFor="message"></label>
                <textarea className="form-message" name="message" id="message" rows={7} placeholder="Ecrivez votre message" required></textarea>

                <button className="form-button" type="submit">Send</button>
            </form>
        </section>

        
    )
}

export default Contact