
import HeaderLeftMenu from "./HeaderLeftMenu";
import SearchHeader from "./SearchHeader";


function Header(){
    return(
        <header className="header">
            <HeaderLeftMenu />
            <SearchHeader />

        </header>
        
    )
}

export default Header