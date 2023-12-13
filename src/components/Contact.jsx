import React from "react";
import Resume from '../files/ChanceSeniorResume v7.pdf';
const Contact = () => {


    return (
        <>
        <div className="container">
         <div className="content">
        <h2>
            Contact

        </h2>
        <p>
            Email: printfchanceabenes@gmail.com 
            </p>
            <p>
            Phone: 904-629-8193
       </p>
       <p>
        <a href="https://www.linkedin.com/in/chance-abenes-748b7b223/" target="_blank" rel="noopener noreferrer">
        <button type="button"> LinkedIn</button>
        </a>
       </p>
        <p><a href="https://www.instagram.com/marche_la_lune/" target="_blank" rel="noopener noreferrer">
        <button type="button"> Instagram</button>
        </a>

            </p>

            <p><a href="https://github.com/CrispinWah" target="_blank" rel="noopener noreferrer">
            <button type="button">GitHub</button>
            </a>

</p>
<p><a href={Resume} target="_blank" rel="noopener noreferrer">
<button type="button">Resume</button>
</a>

</p>
         </div>
        </div>
        </>
    )
};

export default Contact;