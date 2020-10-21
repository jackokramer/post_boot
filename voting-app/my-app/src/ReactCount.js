import React, {useState} from 'react';

const ReactCount = () =>{
    //const value = useState(1)[0]
    //const handler = useState(1)[1]
    const [value, setvalue]= useState(0);
    console.log(value)
    const reset = () =>{
        setvalue(0);
    }
return (
    <>
<section style={{margin: '0rem 0'}} className="text-center jumbotron">
    <h2>Biden/Harris</h2>
        <h3>Democratic Party</h3>
    <h3>{value}</h3>
    <button className="btn btn-primary" onClick={()=> setvalue(value+1)}>+</button>
    <button className="btn" onClick={reset}>reset</button>
</section>
    </>
    )
}

export default ReactCount