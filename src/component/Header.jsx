import logo from '../assets/investment-calculator-logo.png';
export default function Header(props){
    return (
        <header id="header">
            <img src={logo} alt="dollar image"/>
            <h1>Investment Calculator</h1>
        </header>
    )
}