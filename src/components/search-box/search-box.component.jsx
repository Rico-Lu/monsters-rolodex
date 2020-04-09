import React from 'react';
import './search-box.styles.css';

//functional components, dont have access to state because they dont have access to 
//constructor which is a class method, and they dont have access to lifecycle method
//because we dont always have to use them, sometimes, all we wanna do is render some 
//html, 
//a functional components just gets some props and returns some html



export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input
            className='search'
            type='search'
            placeholder={placeholder}
            onChange={handleChange}/>
    )
};


// export const SearchBox = (props) => {
//     return (
//         <input
//             className='search'
//             type='search'
//             placeholder={props.placeholder}
//             onChange={props.handleChange}/>
//     )
// };

