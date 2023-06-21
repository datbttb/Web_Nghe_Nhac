import React, {Component, useEffect} from 'react';
import { ACCESS_TOKEN } from './constants';
import { useNavigate,useLocation} from 'react-router-dom'
import {getCurrentUser} from "./util/APIUtils";

function OAuth2RedirectHandler(props) {
    let location = useLocation();
    console.log("location",location)
    const getUrlParameter=(name)=> {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    const navigate = useNavigate();
    useEffect( ()=>{
        const accessToken= getUrlParameter(ACCESS_TOKEN);
        if(accessToken){
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            getCurrentUser().then(response=>{
                console.log("res",response)

                navigate("/",{state:{userProfile:response}})
            });
            // console.log("data",state);

        }
        else{
            navigate("/login");
        }

    },[])
    return <div>a</div>
}


export default OAuth2RedirectHandler;