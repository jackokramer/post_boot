import React, {useState} from 'react';

const AngularCount = () =>{
    //const value = useState(1)[0]
    //const handler = useState(1)[1]
    const [value, setvalue]= useState(0);
    console.log(value)
return (
    <>
<section style={{margin: '0rem 0'}} className="text-center jumbotron">
    <h2>De La Fuente Guerra/ West</h2>
            <h3>Indpendent Party</h3>
    <h3>{value}</h3>
    <button className="btn btn-primary" onClick={()=> setvalue(value+1)}>+</button>
    <button className="btn">reset</button>
</section>
    </>
    )
}

export default AngularCount