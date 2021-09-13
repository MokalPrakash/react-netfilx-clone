import { Spinner,Picture,LockBody,ReleaseBody } from "./styles/loading"

function Loading({src,...restProps}) {
    return (
        <Spinner {...restProps}>
            <LockBody/>
            <Picture src={`/images/users/${src}.png`}alt='profile'/>
        </Spinner>
    )
}

// Loading.Picture = function LoadingPicture({...restProps}){
//     return <Picture {...restProps}/>
// }

Loading.ReleaseBody = function LoadingReleaseBody({...restProps}){
    return <ReleaseBody{...restProps}/>
}

Loading.LockBody = function LoadingLockBody({...restProps}){
    return <LockBody{...restProps}/>
}

export default Loading
