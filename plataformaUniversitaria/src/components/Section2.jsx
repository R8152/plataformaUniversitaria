import "./Section2.css"
function Section2(btn){
    return(
        <section className="Section2">
            <main className="itens-trocados">
                <img src="" alt="" className="Balde"/>
                <h1 className="title-main">1450+</h1>
                <h2 className="subtitle-main">Itens Trocados</h2>
                <span className="info-main">Livros e equipamentos que ganharam <p>uma nova vida útil este semestre.</p></span>
            </main>
            <main className="co2-evitado">
                <img src="" alt="" className="Folha"/>
                <h1 className="title-main">12.4t</h1>
                <h2 className="subtitle-main">CO2 Evitado</h2>
                <span className="info-main">Impacto ambiental reduzido através da <p>reutilização de eletrônicos e papel.</p></span>
            </main>
            <main className="dinheiro-aluno">
                <img src="" alt="" className="Money"/>
                <h1 className="title-main">R$ 85k+</h1>
                <h2 className="subtitle-main">Economia Aluna</h2>
                <span className="info-main">Total economizado pelos estudantes ao <p>optar pela economia circular.</p></span>
            </main>
        </section>
    )
}
export default Section2