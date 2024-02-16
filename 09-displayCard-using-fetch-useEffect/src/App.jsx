import { useState, useEffect,useRef } from 'react';


function App() {
  const [data, setdata] = useState([]);
  const bgcolor = [
    "text-bg-primary", "text-bg-secondary", "text-bg-success", "text-bg-danger", "text-bg-warning", "text-bg-info", "text-bg-light", "text-bg-dark"
  ];

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      }).then((response) => {
        setdata(response);
      }).catch((error) => {
        console.error(error);
      });

  }, [])
  const RefOfBg = useRef(-1);


  return (




    <div className='container-fluid p-5' style={{ "display": "flex", "flexWrap": "wrap", "gap": "10px" }}>


      {
        data.map((item, index) => {
         
          while (RefOfBg.current <= bgcolor.length) {
           
            RefOfBg.current = RefOfBg.current+1;
            
            RefOfBg.current === bgcolor.length? RefOfBg.current=-1:null;

           
            return (
              <div key={index} className={`card ${bgcolor[RefOfBg.current]} mb-3`} style={{ "maxWidth": "18rem" }}>
                <div className="card-header" style={{ "display": "flex", "justifyContent": "space-between" }}>
                  <h5 className='mt-3'>user id : {item.id}</h5>
                  <img src="https://picsum.photos/seed/picsum/200/200" width={"50px"} height={"50px"} style={{ "borderRadius": "50%" }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.title} : {RefOfBg.current}</h5>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
             
            );
           
            
            }
        })
      }


    </div>


  )
}

export default App
