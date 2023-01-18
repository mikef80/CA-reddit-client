import React from 'react';
import Posts from '../Posts/Posts';
import { SearchBar } from '../SearchBar/SearchBar';

export const Main = () => {
    return (
        <main className='p-2 border-[1px] border-black bg-slate-200'>
            <div className='p-2 border-[1px] border-black bg-white'>
                <SearchBar />
                <Posts />
            </div>
        </main>
    );
};