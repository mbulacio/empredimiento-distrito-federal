import "./Opiniones.scss"

function Opiniones (){
return (
    <div id="fondo" className="d-flex justify-content-center align-items-center">
        <blockquote className="blockquote">
            <div className="d-flex flex-row flex-wrap justify-content-evenly">
                <p className="block-p p-3 d-flex flex-column mx-3">
                    <strong>★  ★  ★  ★  ★</strong>
                    “No hay nada que los Martes de Tacos no puedan solucionar.”
                </p>
                <p className="block-p p-3 d-flex flex-column mx-3">
                    <strong>★  ★  ★  ★  ★</strong>
                    “Comer en Districto Federal es como viajar a México un ratito.”
                </p>
            </div>
        </blockquote>
    </div>
)
}

export default Opiniones;