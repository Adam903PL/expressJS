import { useEffect,useState } from "react"

const Person: React.FC = () => {
    const [data,setData]:any = useState([{}])

    useEffect(()=>{
      fetch('http://localhost:5000/api')
      .then((response) => response.json())
      .then((data) =>{
        setData(data)
      })
    },[])
    return (
      <>
        <button>Go to /inne</button>
      </>
    )
}


export default Person