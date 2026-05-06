export default function Signup()
{
   const [userForm, setUserForm] = useState({
    fname: '',
    mname: '',
    lname: '',
    gender: '',
    dob: '',
    phoneno: 0
});

const sendData = (e) => {
    e.preventDefault();
    console.log(userForm);
    //axios.post(URL, { userForm }).then().catch();
}

return (
    <>
        <h2>Signup with us</h2>
        <div className="container-fluid py-5">
            <div className="container">
} 