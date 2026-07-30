import "./EmailPart.css"
function EmailPart(){
    return(
        <section className="EmailPart">
            <h1 className="title">Pronto para circular?</h1>
            <span className="infoEmail">Cadastre-se com seu e-mail institucional e comece a trocar hoje <p>mesmo.</p></span>
            <div className="emailcomeco">
                <span className="email">seuemail@universidade.edu</span>
                <button className="comeco">Começar Grátis</button>
            </div>
            <span className="exclusive">Exclusivo para estudantes e professores verificados.</span>
        </section>
    )
}
export default EmailPart