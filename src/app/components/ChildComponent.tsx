import Image from "next/image"
const ChildComponent = (props:any) => {
    return(
        <div className="justify-between text-center mb-6">
            <div className=" justify-center relative w-full h-28">
            <Image
                    src={props.image} // Pass the image path relative to 'public'
                    alt={props.name} // Alt text for accessibility
                    layout="intrinsic" // Image fills the container
                    width={200} // Ensures proper cropping
                    height={160}
                    className="rounded-md"
                />    
                
                </div>
                <h1 className="text-blue-700 font-semibold">{props.name}</h1>
                <h1 className="text-green-500 text-sm">{props.price}</h1>
                <h1 className="text-xs">{props.review}</h1>
              
        </div>
    )
}
export default ChildComponent