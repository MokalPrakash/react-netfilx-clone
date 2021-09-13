import { 
    Background,
    Logo,
    ButtonLink,
    Container,
    Feature,
    Text,
    FeatureCallOut,
    Link,
    Group,
    Profile,
    Picture,
    Dropdown,
    Search,
    SearchIcon,
    SearchInput,
    PlayButton
} from "./styles/header";
import {Link as ReactRouterLink} from 'react-router-dom'
import { useState } from "react";

function Header({bg= true,children,...restProps}) {
    return (
        bg?<Background {...restProps}>{children}</Background>:(children)
    )
}

Header.Frame = function HeaderFrame({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Header.Profile = function HeaderProfile({children,...restProps}){
    return <Profile {...restProps}>{children}</Profile>
}

Header.Search = function HeaderSearch({searchTerm,setSearchTerm,...restProps}){
    const [searchActive,setSearchActive] = useState(false)
    return (
    <Search {...restProps}>
        <SearchIcon onClick={()=>setSearchActive(searchActive=>!searchActive)}>
            <img src='/images/icons/search.png' alt='search'/>
        </SearchIcon>
        <SearchInput value={searchTerm} 
            onChange={({target})=>setSearchTerm(target.value)}
            placeholder = 'Search films and series'
            active = {searchActive}
        />
    </Search>)
}

Header.SearchIcon = function SearchIcon({children,...restProps}){
    return <SearchIcon {...restProps}></SearchIcon>
}

Header.SearchInput = function HeaderSearchInput({...restProps}){
    return <SearchInput {...restProps}/>
}


Header.Picture = function HeaderPicture({src,...restProps}){
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>
}

Header.Dropdown = function HeaderDropdown({children,...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Feature = function HeaderFeature({children,...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children,...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink({children,...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Header.Logo = function HeaderLogo({to,...restProps}){
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({children,...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.PlayButton = function HeaderPlayButton({children,...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}

export default Header