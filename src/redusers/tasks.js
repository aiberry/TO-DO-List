const initState = [
    {
        name: 'some2',
        status: 'undone',
        key: 86
    },
    {
        name: 'some',
        status: 'undone',
        key: 87
    }
];

export default function tasks(state = initState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'TASK_CLICKED': {
            let newTasks = state.map((element) => {
                if (element.name === action.payload) {
                    return {
                        ...element,
                        status:
                            element.status === 'undone'
                                ? (element.status = 'done')
                                : (element.status = 'undone')
                    };
                } else {
                    return element;
                }
            });
            return newTasks;
        }
        default:
            return state;
    }
}
