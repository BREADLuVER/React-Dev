import { useState } from 'react';

export default function HiddenHint() {
  const [showHint, setShowHint] = useState(false);
  return (
    <div>
      {showHint && <p><i>Your Favorite City</i></p>}
      <Form />
      {showHint ? (
        <button onClick={() => {
          setShowHint(false)
        }}>Hide Hint</button>
      ) : (
        <button onClick={() => {
          setShowHint(true)
        }}>Show Hint</button>
      )}
    </div>
  )
}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
