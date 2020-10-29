import logo from '../img/logo.svg';
import '../css/header.css';

function Header() {
    return (
        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="title">TODO</div>
        </div>
    );
}

export default Header;
