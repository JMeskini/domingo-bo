import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from "./dataProvider";

import { ProductList, ProductCreate,ProductEdit } from './ProductList';

const App = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="products" list={ProductList} create={ProductCreate}  edit={ProductEdit} />
    </Admin>
);

export default App;
