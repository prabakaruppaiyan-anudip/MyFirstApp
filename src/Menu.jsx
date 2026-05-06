import AdminMenu from './AdminMenu'
import CustomerMenu from './CustomerMenu'
export default function Menu(props)
 {
    if(props.usertype==="admin")
     return <AdminMenu />
    else 
     return <CustomerMenu />
 }