import {useState, useEffect } from 'react';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function useFetchData<PayLoad>(url: string): {
    // Use <T>(PayLoad) to make the function generic, instead of specific name like Todo.
    data: PayLoad | null;
    done: boolean;
} {
    const [data, setData] = useState<PayLoad | null>(null);
    const [done, setDone] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            const firstFive = data.slice(0, 5);
            setData(firstFive);
            setDone(true);
        }
        fetchData();
    }, [url]);

    return {
        data,
        done
    };
}

function CustomHookComponent() {
    const {data, done} = useFetchData<Todo[]>('https://jsonplaceholder.typicode.com/todos');

    return (
        <div>
            {done && (
                <div>
                    {data!.map((todo) =>
                    (<p>{todo.title}</p>))
                    }
                </div>
            )}
        </div>
    );
}

export default CustomHookComponent;