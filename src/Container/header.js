import { Header } from "../Components/index"
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

function HeaderContainer({children}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt='Logo' src={logo}/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}

export default HeaderContainer
