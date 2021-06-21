import React from 'react';

function Form() {
    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            <form name="reply" method="POST" data-netlify="true">
            <p>
                    <label>Your Name: <input type="text" name="name" /></label>   
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
            </form>
        </div>
    )
}

export default Form;