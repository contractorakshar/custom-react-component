import React, { useState } from 'react';
import CustomButton from './Component/Button';

function App() {
  const [user] = useState(window.init);

  return (
    <div className="App">
      <CustomButton bg={user.bg} icon={user.icon} {...user} />
    </div>
  );
}

export default App;
