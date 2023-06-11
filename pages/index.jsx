import React from 'react';
import Link from 'next/link';
const Child = () => {
  return <a>Move to '/tomato'</a>;
};
function App() {
  return (
    <div>
      <h2>Link to 'potato' Page</h2>
      <Link href="/vegetable/potato">Move to '/vegetable/potato'</Link>
    </div>
  );
}
export default App;
