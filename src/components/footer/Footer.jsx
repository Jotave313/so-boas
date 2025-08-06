export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h4>So boas</h4>
                    <p>Sua fonte confiável para notícias sustentáveis e conscientes. Informação que faz a diferença para um mundo melhor.</p>
                    <div>
                        <a href="">📘</a>
                        <a href="">🐦</a>
                        <a href="">📷</a>
                        <a href="">💼</a>
                    </div>
                </div>
            </div>

            <div className="footer-section">
                <h4>Sobre</h4>
                <ul>
                    <li>
                        <a href="">Mundo</a>
                        <a href="">Equipe</a>
                        <a href="">Contato</a>
                        <a href="">Política de Privacidade</a>
                    </li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>Nesletter</h4>
                <p>Receba as últimas diretamente no seu e-mail!</p>
                
                <div>
                    <input type="email" placeholder="Seu e-mail"/>
                    <button>Inscrever</button>
                </div>
            </div>
        </footer>
    )
}