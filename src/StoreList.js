import React from 'react';
import { Pagination,List, Datagrid, TextField, EditButton, Create, Edit,SimpleForm,SelectInput,TextInput,ReferenceInput, UrlField } from 'react-admin';


const PostPagination = props => <Pagination rowsPerPageOptions={[]} {...props} />;

export const StoreList = (props) => (
    <List {...props} title="Stores" pagination={<PostPagination/>} >
        <Datagrid >
            <TextField source="name" />
            <TextField source="adress" />
        </Datagrid>
    </List>
);

