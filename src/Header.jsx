import {Link} from 'react-router-dom';
export default function Header()
{
    return(
     
    <div className="container-fluid nav-bar p-0">
        <div className="container-lg p-0">
            <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
                <a href="index.html" className="navbar-brand">
                    <h1 className="m-0 text-white display-4"><span className="text-primary">D</span>ot<span className="text-primary">C</span>om</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                         <Link to="/" className="nav-item nav-link active">Home</Link>

              
                         <Link to='/' className="nav-item nav-link active">Aboutus</Link>
                         <Link to='/' className="nav-item nav-link active">Services</Link>
                         <Link to='/itemform' className="nav-item nav-link active">Pricing</Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu border-0 rounded-0 m-0">
                                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                <a href="single.html" className="dropdown-item">Blog Detail</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
   
    )
}