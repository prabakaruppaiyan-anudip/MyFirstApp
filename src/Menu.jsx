export default function Menu(props)
 {
    if(props.usertype==="admin")
     return <AdminMenu />
    else 
     return <CustomerMenu />
 }