import React from 'react';
import './style.css'
function Contact(){
    return <section className="Contact">
        <img src="https://randomuser.me/api/portraits/men/70.jpg" alt="test"></img>
        <div>
        <h4>Arnold Robinson</h4>
        <div  className="status">
        <div className="status-online"></div>
        <p>Online</p>
        </div>
        </div>
    </section>
}

export default Contact;