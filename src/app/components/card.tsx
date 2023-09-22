import { type } from "os"

type cardmotor={
    title:string,
    src:string,
}
export default function CardF(props:cardmotor) {
    return (

        <div>
            <img className='w-[400px]' src={props.src} alt="" />
            <div className='text-white justify-center flex'>
                {props.title}
            </div>
         </div>
    )
 }

//  <div>
//             <img className='w-[400px]' src="https://allthecars.files.wordpress.com/2014/02/ferrari-california-t-2.jpg" alt="" />
//             <div className='text-white justify-center flex'>
//                 motor v8 com 8 bicos injetores de alta perfomace
//             </div>
//          </div> 