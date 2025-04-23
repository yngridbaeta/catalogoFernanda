import estilos from './Modal.module.css';
//estrutura basica
export function Modal({movie, onClose}){
    //Se clicado fora de um card, não quero que o codigo seja executado
    if(!movie){
        return null;
    }

    console.log("Modal renderizada");
    console.log(movie);

    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalConteiner}>
                <div className={estilos.modalHeader}>
                    <h2>{movie.title}</h2>
                    <button onClick={onClose}>x</button>
                </div>  
                <div className={estilos.imgDetails}>
                    <img className={estilos.imgModal} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.overview}/>
                    <ul className={estilos.movieDetails} >
                        <li>{`Popularidade: ${movie.popularity ?? 'Não disponível no momento, aguarde'}`}</li>
                        <li>{`Data de Lançamento: ${movie.release_date}`}</li>
                        <li>{`Quantidade de Votos: ${movie.vote_count}`}</li>
                        <li>{`Sinopse: ${movie.overview}`}</li>

                    </ul>
                </div>              
            </div>
        </div>
    )

}