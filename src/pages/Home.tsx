// CustomPromptGenerator.tsx

import React, { useState } from 'react';

const CustomPromptGenerator: React.FC = () => {
  const [promptInput, setPromptInput] = useState('');
  const [result, setResult] = useState<any | null>(null);

  const generateCustomPrompt = async () => {
    try {
      const apiUrl = 'http://localhost:3001/generateText'; // Replace with your actual server URL
      const requestUrl = `${apiUrl}?prompt=${encodeURIComponent(promptInput)}`;

      const response = await fetch(requestUrl);
      const data = await response.json();

      console.log(data);
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Custom Prompt Generator</h1>

      <label htmlFor="promptInput">Enter a custom prompt:</label>
      <input
        type="text"
        id="promptInput"
        name="promptInput"
        value={promptInput}
        onChange={(e) => setPromptInput(e.target.value)}
        required
      />

      <button type="button" onClick={generateCustomPrompt}>
        Generate Text
      </button>

      {result && (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CustomPromptGenerator;
