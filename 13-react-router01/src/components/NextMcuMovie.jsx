import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



const NextMcuMovie = () => {

    const [movieSet, updatemovieSet] = useState(useLoaderData());

    

    // useEffect(() => {
    //     fetch("https://www.whenisthenextmcufilm.com/api")
    //         .then(res => console.log(res.json()))
    //         .then(res => {updatemovieSet(res)
    //         console.log(movieSet, res)})
    //         .catch(error => console.log(error));
    // }, []);


    return (
        <div className=" bg-orange-100 h-[350px] w-2/3 mx-80 my-10 rounded-lg p-10 overflow-y-scroll">
            <div className="flex mb-10">

                <div className="">
                    <img src={movieSet?.poster_url} alt={movieSet?.title} className="w-[200px] h-[290px] rounded-md" />
                </div>
                <div className="ml-5">
                    <h1 className="mb-5 font-semibold">Title : <span className="font-mono">{movieSet?.title}</span> </h1>
                    <h1 className=" font-semibold">Overview : </h1>
                    <p className="pl-10 mb-5 font-mono"> {movieSet?.overview}</p>
                    <h1 className="mb-5 font-semibold">Release Date : <span className="font-mono">{movieSet?.release_date}</span></h1>
                    <h1 className="mb-5 font-semibold">Days Until : <span className="font-mono">{movieSet?.days_until}</span></h1>
                </div>

            </div>

            <div className="flex">
                
                <div className="">
                    <img src={movieSet?.following_production?.poster_url} alt={movieSet?.following_production?.title} className="w-[200px] rounded-md" />
                </div>
                <div className="ml-5">
                    <h1 className="mb-5 font-semibold">Title : <span className="font-mono">{movieSet?.following_production?.title}</span> </h1>
                    <h1 className=" font-semibold">Overview : </h1>
                    <p className="pl-10 mb-5 font-mono"> {movieSet?.following_production?.overview}</p>
                    <h1 className="mb-5 font-semibold">Release Date : <span className="font-mono">{movieSet?.following_production?.release_date}</span></h1>
                    <h1 className="mb-5 font-semibold">Days Until : <span className="font-mono">{movieSet?.following_production?.days_until}</span></h1>
                </div>

            </div>
            
        </div>
    )
}

export default NextMcuMovie;



export const fetchWhileHover = async () =>{

    const response = await fetch("https://www.whenisthenextmcufilm.com/api");

    return response.json();
}