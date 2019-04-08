import React from 'react';
import useResource from './useResources';

const ResourceList = ({resource}) =>  {
    const resources = useResource(resource);

    return (
        <div className="ui bulleted list">
            {resources.map((data) => <div className="item" key={data.id}>{data.title}</div>)}
        </div>
    );
}

export default ResourceList;