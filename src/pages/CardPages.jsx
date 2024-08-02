import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPostsDataSliceUser} from "../reducer/getPostsSlice.js";


const CardPages = () => {
    const {user} = useSelector((state) => state.getPostsSlice);

    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsDataSliceUser(id))
    }, []);
    console.log(user)
    return (
        <div>
            <span>{user.name}   {user.username}</span>
            <span>{user.phone}</span>
            <p>company:{user.company.catchPhrase}</p>
            <p>city:{user.address.city}</p>
            <storng>street:{user.address.street}</storng>
        </div>
    );
};

export default CardPages;