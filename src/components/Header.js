import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";

import { auth, provider } from "../firebase";
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
} from "../features/user/userSlice";

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                setUser(user)
                navigate("/home")
            } else {
                // User is signed out
                dispatch(setSignOutState({}))
                navigate("")
            }
        });
        // eslint-disable-next-line
    }, [userName])

    const handleSignIn = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error signing in with Google: ", error);
        }
    }

    const handleSignOut = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error("Error signing in with Google: ", error);
        }
    }

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }

    return (
        <Nav>
            <Logo>
                <img src="./images/logo.svg" alt="Disney+" />
            </Logo>
            {!userName ? <Login onClick={handleSignIn}>Login</Login> :
                <WrapperNavMenuAndUserImg>
                    <NavMenu>
                        <Link to="/home" >
                            <img src="./images/icons/home-icon.svg" alt="HOME" />
                            <span>HOME</span>
                        </Link>
                        <Link to="/search" >
                            <img src="./images/icons/search-icon.svg" alt="SEARCH" />
                            <span>SEARCH</span>
                        </Link>
                        <Link to="/watchlist" >
                            <img src="./images/icons/watchlist-icon.svg" alt="WATCHLIST" />
                            <span>WATCHLIST</span>
                        </Link>
                        <Link to="/original" >
                            <img src="./images/icons/original-icon.svg" alt="ORIGINALS" />
                            <span>ORIGINALS</span>
                        </Link>
                        <Link to="/movies" >
                            <img src="./images/icons/movie-icon.svg" alt="MOVIES" />
                            <span>MOVIES</span>
                        </Link>
                        <Link to="/series" >
                            <img src="./images/icons/series-icon.svg" alt="SERIES" />
                            <span>SERIES</span>
                        </Link>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleSignOut}>Sign out</span>
                        </DropDown>
                    </SignOut>
                </WrapperNavMenuAndUserImg>
            }
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    padding: 0 36px;
    z-index: 3;
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;

    img {
        display: block;
        width: 100%;
    }
`
const NavMenu = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    @media (max-width: 768px) {
        display: none;
    }
    
    a {
        display: flex;  
        align-items: flex-end;
        padding: 0 12px;

        img {
            height: 20px;
            min-width: 20px;
            width: 20px;
        }

        span {
            color: #f9f9f9;
            font-size: 14px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 0;
            margin-left: 4px;
            white-space: nowrap;
            position: relative;

            &:before {
                content: "";
                display: block;
                width: auto;
                height: 2px;
                position: absolute;
                bottom: -6px;
                right: 0;
                left: 0;
                opacity: 0;
                background-color: #f9f9f9;
                border-radius: 0 0 4px 4px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }   
    }
`

const Login = styled.a`
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 4px; 
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
    }
`

const WrapperNavMenuAndUserImg = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        display: block;
        text-align: right;
    }
`

const UserImg = styled.img`
    height: 46px;
    width: 46px;
    margin-top: 4px;
    border-radius: 50%;
    position: relative;
`

const DropDown = styled.div`
    width: 85px;
    position: absolute;
    bottom: -36px;
    right: -20px;
    border: 1px solid #777;
    background-color: rgb(19, 19, 19);
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
    display: none;
`

const SignOut = styled.div`
    position: relative;
    cursor: pointer;

    &:hover {
        ${DropDown} {
            display: block;
        }
    }
`


export default Header;