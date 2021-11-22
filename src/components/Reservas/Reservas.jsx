import "./Reservas.scss"

function Reservas(){
    return(
        <div id="fondo-reservas" >
            <p><strong>🡣</strong> Reserva tu lugar <strong>🡣</strong></p>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <a href="https://wa.me/+573118651831" className="btn btn-lg" role="button" target="_blank">
                        Haz Click aqui para comer la mejor comida Mexicana
                    </a>
                </div>
        </div>
    )
}

export default Reservas;