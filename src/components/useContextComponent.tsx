import UserContext, { UserState } from '../store';
import {useState, useContext} from 'react'

// Use Context to avoid prop drilling hell.

function ConsumerComponent() {
    const user = useContext<UserState>(UserContext);

    return (
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    );
}

function UseContextComponent() {
    const [user, setUser] = useState<UserState>({
        first: "Jane",
        last: "Smith"
    });

    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent />
            <button onClick={() => setUser({
                first: "NaNashi",
                last: "Nakamura"
            })}>Change context</button>
        </UserContext.Provider>
    );
}

export default UseContextComponent;