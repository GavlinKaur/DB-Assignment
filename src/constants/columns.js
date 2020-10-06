
export const constantsColumns = [
    {
        title: 'S.No',
        dataIndex: 'id',
        defaultSortOrder: 'ascend',
        sorter: (a, b) => a > b ? 1 : -1,

    },
    {
        title: 'First Name',
        dataIndex: 'first_name',
        editable: true,

    },
    {
        title: 'Last Name',
        dataIndex: 'last_name',
        editable: true,

    },
    {
        title: 'Email',
        dataIndex: 'emailId',

    },
    {
        title: 'Gender',
        dataIndex: 'gender',

    },
    {
        title: 'Age',
        dataIndex: 'age',

    },
    {
        title: 'Address',
        dataIndex: 'address',

    },
    {
        title: 'Country',
        dataIndex: 'country',
        responsive: ['md'],
    },

]