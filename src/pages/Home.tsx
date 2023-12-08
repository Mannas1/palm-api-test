// CustomPromptGenerator.tsx

import React, { useState } from 'react';

const CustomPromptGenerator: React.FC = () => {
  const [promptInput, setPromptInput] = useState('');
  const [result, setResult] = useState<any | null>(null);

  const generateCustomPrompt = async () => {
    try {
      // Ensure promptInput is defined and not an empty string
      if (!promptInput.trim()) {
        console.error('Prompt is empty');
        return;
      }
  
      const apiUrl = 'http://localhost:3001/generateText';
      const encodedPrompt = encodeURIComponent(promptInput);
      const requestUrl = `${apiUrl}?prompt=${encodedPrompt}`;
  
      const response = await fetch(requestUrl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log(data);
      setResult(data);
    } catch (error) {
      console.error('Error:', error.message);
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
          <h2>{JSON.stringify()}</h2>
        </div>
      )}
    </div>
  );
};

export default CustomPromptGenerator;
