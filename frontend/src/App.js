import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/news')
            .then(response => setNews(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>News List</h1>
            <ul>
                {news.map(item => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.category}</p>
                        <p>{item.summary}</p>
                        <p>Keywords: {item.keywords}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
