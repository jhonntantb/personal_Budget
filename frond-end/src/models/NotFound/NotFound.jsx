import { useNavigate } from "react-router-dom"

export default function NotFound() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div className="not-found text-center" style={{marginTop:"233px"}}>
      <img
        className="not-found"
        src="https://sabuss.com/404.png"
        alt="404 - No se encontró la Página solicitada"
      />
      {/* <Link to='/Home' style={{ textDecoration: 'none' }}> */}
      <button
        className="btn btn-block btn-black rm-border"
        onClick={handleClick}
      >
        Volver al Inicio!
      </button>
      {/* </Link> */}
    </div>
  );
}
