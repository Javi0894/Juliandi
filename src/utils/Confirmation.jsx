import React from 'react';

export default function Confirmation ()
{
    const handleConfirmation = (e) => {
        e.preventDefault();
        console.log(e.target)
    }

    return(
        <section style={{ backgroundColor: 'green', minHeight: 200, justifyContent: 'center' }}>
            
            <form className="confirmation" method='post' onSubmit={handleConfirmation}>
                <h2>Confirmation</h2>
                <aside style={{ margin: 10 }}>
                    <label htmlFor="username"><b>Username:&nbsp;</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required/>
                </aside>
                <aside style={{ margin: 10 }}>
                    <label htmlFor="password"><b>Password:&nbsp;</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required/>
                </aside>
                <button type="submit">Login</button>
            </form>
        </section>
    );
}; 