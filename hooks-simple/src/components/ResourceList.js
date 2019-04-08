import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({resource}) =>  {

    const [resources, setResources] = useState([]);

    const fetchResource = async(resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    }

    useEffect(() => {
        fetchResource(resource);
    }, [resource])    

    return (
        <div className="ui bulleted list">
            {resources.map((data) => <div className="item" key={data.id}>{data.title}</div>)}
        </div>
    );
}

export default ResourceList;