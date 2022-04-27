import React from 'react'

export default function List() {
    const numbers = [1,2,3,4,5];
    return (
        <ul>
            {numbers.map(item => 
                <li key={item}>{item}</li>
            )}
        </ul>
    )
}
