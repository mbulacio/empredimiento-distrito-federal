import "./Promos.scss"
function Promos(){
return(
<div id="fondo-promos">
    <p className="title-promos">Promociones</p>
    <div className="container-fluid">
        <div className="row mx-1 justify-content-center">
            <div className="card col-5 m-1 me-2 p-4 first-row">
                <div className="card-body">
                    <p className="card-title">Martes de Tacos</p>
                    <p className="card-text">Compra 3 tacos + limonada de panela por</p>
                    <p className="card-subtitle">$10.000</p>
                </div>
            </div>
            <div className="card col-5 m-1 ms-2 p-4 first-row">
                <div className="card-body">
                    <p className="card-title">Miercoles</p>
                    <p className="card-text">2 Chavela Burgers + 4 Club Colombia a</p>
                    <p className="card-subtitle">$50.000</p>
                </div>
            </div>
        </div>
        <div className="row  mx-1 justify-content-center">
            <div className="card col-3 m-1">
                <div className="card-body">
                    <p className="card-title">Happy Hour en Coctelería Clásica</p>
                    <p className="card-text">Lunes a viernes de</p>
                    <p className="card-subtitle">14 p.m. a 18 p.m.</p>
                </div>
            </div>
            <div className="card col-3 m-1">
                <div className="card-body p-xxl p-5">
                    <p className="card-title">Jueves</p>
                    <p className="card-subtitle">2 x 1</p>
                    <p className="card-text "> Burritos</p>
                </div>
            </div>
            <div className="card col-4 m-1">
                <div className="card-body p-4">
                    <p className="card-title">Viernes y Sábados Cubetaco</p>
                    <p className="card-text">Compra 5 Chelas</p>
                    <p className="card-subtitle">gratis la 6ta + 2 tacos</p>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Promos;