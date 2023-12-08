import React, { useState } from 'react'

const Home = () => {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const handleChange = (event) => {
        setPrompt(event.target.value);
    }  
    const handleSubmit = async () => {
        try {
            setLoading(true);
            const data = await fetch (
                `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=$PALM_API_KEY`
            )
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
  return (
    <div>
        <h2>Ask something</h2>
        <input type="text" className='border border-black'  onChange={handleChange}/>
        <button onSubmit={}></button>
    </div>
  )
}

export default Home