import { useParams } from "react-router-dom"

const User = () => {
    const {name,email,tel} = useParams(); // fetching data's which is passed from url

  return (
    <div className=" bg-gray-100 h-auto w-1/3 m-48 relative left-[25%] rounded-lg p-10 text-2xl font-semibold">
       
       <h1 className="text-orange-700 text-center font-bold">USER DETAILS :</h1>

       <div className="p-10">
        <h1 className="m-5">Full Name : <span className="font-mono">{name}</span></h1>
        <h1 className="m-5">Email : <span className="font-mono">{email}</span></h1>
        <h1 className="m-5">Telephone : <span className="font-mono">{tel}</span></h1>
       </div>
    </div>
  )
}

export default User