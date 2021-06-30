import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const SummaryForm = () => {
    const [checked, setChecked] = useState(false);

    const popover = (
      <Popover id="popover-basic">
        <Popover.Content>No ice cream will actually be delievered</Popover.Content>
      </Popover>
    );  

    const checkboxLabel = (
      <span>
        I agree to 
        <OverlayTrigger placement="right" overlay={popover}>
        <span style={{color: 'blue'}}>Terms and conditions</span>
        </OverlayTrigger>
      </span>
    )  

  return (
    <Form>
      <Form.Group>
        <Form.Check type ='checkbox' 
        id='terms' 
        onChange = {(e) => setChecked(e.target.checked)}
        label = { checkboxLabel }
         />
      </Form.Group>
      <Button type='submit' disabled = {!checked}>Confirm order</Button>
    </Form>
  )
};

export default SummaryForm;