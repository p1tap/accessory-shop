import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DataTable from './components/DataTable';
import productList from './product-list.json';
import AppNavbar from './components/Navbar';  // Import the Navbar


function App() {
  const productRef = useRef();
  const quantityRef = useRef();

  const [price, setPrice] = useState(productList[0].price);
  const [selectedItem, setSelectedItem] = useState([]);
  const [fileteredItems, setFileteredItems] = useState([]);

  const handleSelect = () => {
    const pid = parseInt(productRef.current.value);
    const product = productList.find(p => p.id === pid);
    setPrice(product.price);
  };

  const handleAdd = () => {
    const pid = parseInt(productRef.current.value);
    const product = productList.find(p => p.id === pid);
    const q = quantityRef.current.value;

    selectedItem.push({
      id: pid,
      name: product.name,
      price: product.price,
      quantity: q
    });

    setSelectedItem([...selectedItem]);
    setFileteredItems([...selectedItem]);
  };

  const filter = (keyword) => {
    const filtered = selectedItem.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
    setFileteredItems(filtered);
  };

  const handleDelete = (index) => {
    const newItems = [...selectedItem];
    newItems.splice(index, 1);
    setSelectedItem(newItems);
    setFileteredItems(newItems);
  };

  const handleSortAsc = () => {
    const sortedItems = [...fileteredItems].sort((a, b) => a.name.localeCompare(b.name));
    setFileteredItems(sortedItems);
  };

  const handleSortDesc = () => {
    const sortedItems = [...fileteredItems].sort((a, b) => b.name.localeCompare(a.name));
    setFileteredItems(sortedItems);
  };

  return (
    <Container>
      <AppNavbar />
      <Row>
        <Col xs={6}>
          <Form.Label htmlFor="inputProductName">Product Name</Form.Label>
          <Form.Select id="inputProductName" ref={productRef} onChange={handleSelect}>
            {
              productList.map(product => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))
            }
          </Form.Select>

          <Form.Label htmlFor="inputPrice">Price</Form.Label>
          <Form.Control type="number" id="inputPrice" readOnly value={price} />

          <Form.Label htmlFor="inputQuantity">Quantity</Form.Label>
          <Form.Control type="number" id="inputQuantity" defaultValue={1} ref={quantityRef} />

          <Button variant="success" onClick={handleAdd}>Add</Button>
        </Col>
        <Col>
          <DataTable 
            data={fileteredItems} 
            onDelete={handleDelete}
            onSearch={filter}
            onSortAsc={handleSortAsc}
            onSortDesc={handleSortDesc}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
