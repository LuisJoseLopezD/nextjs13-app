// Fetchdata con axios, useEffect y useState con typescript

// import React, { useEffect, useState } from 'react';
// import { Listado, Usuario } from '../interfaces/ReqListado';
// import axios from 'axios';

// const FetchData = () => {

//     const [users, setUsers] = useState<Usuario[]>([]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get<Listado>('https://reqres.in/api/users');
//                 setUsers(response.data.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchUsers();
//     }, []);

//     return users;
// };

// export default FetchData;

