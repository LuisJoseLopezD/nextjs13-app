import React from 'react';
import { Listado, Usuario } from '../interfaces/ReqListado';
// import axios from 'axios';
// import FetchData from '@/components/fetchdata';

async function Home() {

    async function fetchUsers(): Promise<any> {
        try {
            const res = await fetch('https://reqres.in/api/users');
            const data: Listado = await res.json();
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }

    const users = await fetchUsers();

    const renderItem = (user: Usuario) => {
        return (
            <div key={user.id.toString()} className="w-full px-4">
                <div className="flex cursor-pointer my-2 hover:bg-blue-lightest rounded">
                    <div className="w-12 h-10 text-center py-1">
                        <img className="w-9 h-9 rounded-full object-cover" src={user.avatar} alt="Rounded avatar" />
                    </div>
                    <div className="w-4/5 h-10 py-2.5 px-2">
                        <p className="hover:text-blue-dark">{user.first_name}</p>
                    </div>
                    <div className="w-1/5 h-10 text-right p-3">
                        <p className="text-sm text-grey-dark">{user.id}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <main>
            {Object.keys(users).length === 0 ?
                <p className="font-normal p-2">No users added</p>
                :
                users?.map?.((user: Usuario) => renderItem(user))
            }
        </main>
    )
}

export default Home;