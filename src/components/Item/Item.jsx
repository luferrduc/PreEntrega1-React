

export const Item = ({title, platform, genres, price, images, developers }) => {
  return (
    <div className="flex flex-col gap-4 bg-slate-800 hover:bg-slate-800/30 transition-all ease-in-out hover:scale-105 duration-[0.5s] rounded-sm">
        <img src={images[1]} alt="Imagen del juego" className=""/>
        <div className="flex-grow px-4">
            <h3 className="font-bold text-white text-sm">{title}</h3>
            <p>{genres.map((genre, idx)=>{
                return <span key={genre} className="font-bold text-xs text-slate-100/50">{idx === genres.length - 1  ? genre : `${genre}, `}</span>
        })}</p>
        </div>
        <p className="font-bold text-white px-4 pb-4 text-xl"> 
            <span className="font-bold">$</span>{price.toLocaleString('es-CL', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
             })}
        </p>

    </div>

      
  )
}
