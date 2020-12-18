import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../../shared/Notifications';
import Axios from 'axios';
import { GlobalStoreContext } from '../../shared/Globals';

import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const BookForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);

  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const handleChange = event => {
    setInputs({...inputs, [event.target.name]: event.target.value}); 
  };

  const handleSubmit = event => {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/books` ,inputs).then(()=>{
      
    }).catch(error => {
      
    });
  };

  if (redirect) return <Redirect to="/"/>;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Author</Form.Label>

      <Form.Group>
        <Form.Control 
          onChange={handleChange} 
          name="author" 
          placeholder="Mark Twain"
          value={inputs.author}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Title</Form.Label>

        <Form.Control 
          onChange={handleChange} 
          name="title" 
          placeholder="Tom Sawyer"
          defaultValue={inputs.title}
        />
      </Form.Group>

      <Form.Group>
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
}
 
export default BookForm;