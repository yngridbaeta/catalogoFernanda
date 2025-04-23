//crio um apelido para o arquivo de CSS e chamo no componente
import estilos from './Card.module.css';
//precisamos colocar a estrutura para fazer o componente
export function Card({ movie, onOpenModal }){
    return(
        <div className={estilos.conteiner}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}onClick={()=> onOpenModal(movie)}/>
            <p>{movie.overview}</p>
        </div>
    );
}