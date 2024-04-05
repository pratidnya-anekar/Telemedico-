import React, { useState } from 'react';

function ResearchPaper() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      });
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
       <div>
          <h1 className=" text-4xl font-semibold text-center  lg:text-center lg: pb-10">
          Medical Literature Search
          </h1>
        
        </div>

    <div className="max-w-7xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mb-16">
      <h2 className="text-2xl font-semibold mb-4">Research Paper Search</h2>
      <div className="mb-4">
        <label className="block mb-2">Enter your query:</label>
        <input 
          type="text" 
          value={query} 
          onChange={e => setQuery(e.target.value)} 
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button 
        onClick={handleSearch} 
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
      <div className="mt-6 overflow-y-auto max-h-80">
        {results.map((result, index) => (
          <div key={index} className="mb-4">
            <p className="text-lg font-semibold mb-2">Abstract:</p>
            <p className="text-gray-700">{result.abstract}</p>
            <p className="text-lg font-semibold mt-2 mb-2">Link:</p>
            <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">{result.link}</a>
            <hr className="my-4" />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default ResearchPaper;
