import React, { useEffect, useState } from 'react';
import logo from '../assets/icons/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/user/userThunks';
import {
    selectUser,
    selectUserLoading,
    selectUserError,
} from '../features/user/userSelectors';
import { AppDispatch } from '../store/root';
import { User } from '../features/user/userTypes';

export const Header = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector(selectUser);
    const loading = useSelector(selectUserLoading);
    const error = useSelector(selectUserError);
    const [userData, setUserData] = useState<User>();

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    useEffect(() => {
        setUserData(user?.results?.[0]);
    }, [user]);

    return (
        <header className="w-full h-20 bg-[#2A57A5] flex justify-between items-center px-10">
            <div className="h-full flex items-center">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="h-full flex items-center gap-3">
                <p className="text-white font-medium text-xl">
                    {userData?.name?.first} {userData?.name?.last}
                </p>
                <img
                    src={userData?.picture?.thumbnail ?? ''}
                    className="rounded-full"
                    alt="UserImage"
                />
            </div>
        </header>
    );
};
