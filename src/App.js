import React, { useState } from 'react';
import CustomButton from './Component/Button';

function App() {
  const [user] = useState(window.init);
  console.log(user);
  return (
    <div className="App">
      <CustomButton bg={user.bg} icon={'🎯'} />
    </div>
  );
}

export default App;
