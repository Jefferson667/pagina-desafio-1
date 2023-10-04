import Image from "next/image"
interface FotosPagina2 {

    png: string
}

export default function pagina2card(prop:FotosPagina2) {
    return (
        <>

            <div className="hover:scale-[1.1] transition">

                <Image
                    width={500}
                    height={500}
                    src={prop.png}
                    alt={"test"}
                    
                />
            </div>

        </>
    )
}