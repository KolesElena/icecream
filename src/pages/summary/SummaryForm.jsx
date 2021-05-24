import React, { useState } from 'react';

const SummaryForm = () => {
    const [checked, setChecked] = useState(false);

  return (
    <form>
        <input type ='checkbox' id='terms' onChange = {(e) => setChecked(e.target.checked)} /><label htmlFor='terms'>Terms and conditions</label>
        <button type='submit' disabled = {!checked}>Send order</button>
    </form>
  )
};

export default SummaryForm;