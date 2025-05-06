function Buttons( {
    variant = "btn tbn-primary",
    valor = "",
    tipo = "button",
    acao = () => {}
}) {

    return(
        <>
            <button className={variant} type={tipo} onClick={acao}>
                {valor}
            </button>
        </>
    );
}

export default Buttons;