import React from 'react'

export const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.heroName}!
            </h1>
            {props.children}
        </div>
    );
}
// ^ this syntax is more streamlined, but is imported differently (see App.js)

// export default Greet
// ^ this syntax is a little more but more explicit or obvious
