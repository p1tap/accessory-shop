import React, { useRef } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const DataTable = ({ data, onDelete, onSearch, onSortAsc, onSortDesc }) => {
    const sRef = useRef();

    const handleSearch = () => {
        const keyword = sRef.current.value;
        onSearch(keyword);
    }

    return (
        <Container>
            <input type='text' placeholder='Search...' ref={sRef} />{' '}
            <Button onClick={handleSearch} variant='online-dark'>Search</Button>{' '}
            <Button onClick={onSortAsc} variant='secondary'>Sort Asc </Button>{' '}
            <Button onClick={onSortDesc} variant='secondary'>Sort Desc </Button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <Button variant='danger' onClick={() => onDelete(index)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default DataTable;
