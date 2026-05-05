export default function ChildHome(props)
 {
    return(
        <>
         <h1>This is child of Home Page</h1>
         <p>{props.name}</p>
         <p>{props.desgn}</p>

        </>
    )
 }