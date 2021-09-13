import {useEffect,useContext,useState} from 'react'
import {FirebaseContext} from '../context/firebase'

function useContent(target){
    const [content,setContent] = useState([])
    const {firebase} = useContext(FirebaseContext)

    useEffect(()=>{
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot)=>{
                const allContent = snapshot.docs.map((contentObj)=>({
                    ...contentObj.data(),
                    docId : contentObj.id,
                }))
                setContent(allContent)
            })
            .catch((error)=>{
                console.log(error.message)
            })
            // eslint-disable-next-line 
    },[])

    return { [target]: content}
}


export default useContent