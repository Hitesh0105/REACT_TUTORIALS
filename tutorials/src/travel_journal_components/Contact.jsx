import mrWhiskerson from "../assets/mrWhiskers.jpg";
// export default function Contact(props) {
//     return (
//         <article className="contact-card">
//             <img
//                 src="./src/assets/mrWhiskers.jpg"
//                 alt={props.alt}
//             />
//             <h3>{props.name}</h3>
//             <div className="info-group">
//                 <img
//                     src="./images/phone-icon.png"
//                     alt="phone icon"
//                 />
//                 <p>{props.phone}</p>
//             </div>
//             <div className="info-group">
//                 <img
//                     src="./images/mail-icon.png"
//                     alt="mail icon"
//                 />
//                 <p>{props.email}</p>
//             </div>
//         </article>
//     )
// }

// destructuring
export default function Contact({alt,name,phone,email}) {
    return (
        <article className="contact-card">
            <img
                src={mrWhiskerson}
                alt={alt}
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img
                    src="./images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="./images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    )
}