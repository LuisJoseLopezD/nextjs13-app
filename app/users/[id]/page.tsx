import { Listado, Usuario } from '.././../../interfaces/ReqListado';

async function getUser(id: any): Promise<any> {
    try {
        const res = await fetch(`https://reqres.in/api/users/${id}`);
        const data: Listado = await res.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

async function Users({ params }: any) {

    const user = await getUser(params.id);

    return (
        <div className="container p-4">
            <h1 className="text-2xl">Users Details</h1>

            {/* {JSON.stringify(user)} */}

            <div key={user.id.toString()}>
                <p>ID: {user.id}</p>
                <p>Nombre: {user.first_name}</p>
                <p>Apellido: {user.last_name}</p>
                <img src={user.avatar} className="h-9 w-9 rounded object-cover" alt="userInfo"/>
            </div>

        </div>
    )
}

export default Users;
