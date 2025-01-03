// import { useState } from "react";
// import React from "react";

// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };

// export const Contact = (props) => {
//   const [{ name, email, message }, setState] = useState(initialState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const clearState = () => setState({ ...initialState });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(name, email, message);
//     clearState();
//     alert("Form submitted (no backend integration yet).");
//   };

//   return (
//     <div>
//       <div id="contact">
//         <div className="container">
//           <div className="col-md-8">
//             <div className="row">
//               <div className="section-title">
//                 <h2>Get In Touch</h2>
//                 <p>
//                   Please fill out the form below to send us a message, and we will
//                   get back to you as soon as possible.
//                 </p>
//               </div>
//               <form name="sentMessage" onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                     <input type="hidden" name="access_key" value="82065f12-46c3-4e8e-a447-e06abca908bb"/>
//                       <input
//                         type="text"
//                         name="name"
//                         className="form-control"
//                         placeholder="Name"
//                         required
//                         value={name}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="email"
//                         name="email"
//                         className="form-control"
//                         placeholder="Email"
//                         required
//                         value={email}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     name="message"
//                     className="form-control"
//                     rows="4"
//                     placeholder="Message"
//                     required
//                     value={message}
//                     onChange={handleChange}
//                   ></textarea>
//                 </div>
//                 <button type="submit" className="btn btn-custom btn-lg">
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>

//           <div className="col-md-3 col-md-offset-1 contact-info">
//             <div className="contact-item">
//               <h3>Contact Info</h3>
//               <p>
//                 <span><i className="fa fa-map-marker"></i> Address</span>
//                 {props.data ? props.data.address : "loading"}
//               </p>
//             </div>
//             <div className="contact-item">
//               <p>
//                 <span><i className="fa fa-phone"></i> Phone</span>
//                 {props.data ? props.data.phone : "loading"}
//               </p>
//             </div>
//             <div className="contact-item">
//               <p>
//                 <span><i className="fa fa-envelope-o"></i> Email</span>
//                 {props.data ? props.data.email : "loading"}
//               </p>
//             </div>
//           </div>

//           <div className="col-md-12">
//             <div className="row">
//               <div className="social">
//                 <ul>
//                   <li><a href={props.data ? props.data.facebook : "/"}><i className="fa fa-facebook"></i></a></li>
//                   <li><a href={props.data ? props.data.twitter : "/"}><i className="fa fa-twitter"></i></a></li>
//                   <li><a href={props.data ? props.data.youtube : "/"}><i className="fa fa-youtube"></i></a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div id="footer">
//         <div className="container text-center">
//           <p>&copy; 2024 <a href="/">meditricbiosciences.com</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };
import { useState } from "react";
import React from "react";

// Popup Component
const Popup = ({ onClose }) => {
  return (
    <div style={popupStyles.overlay}>
      <div style={popupStyles.container}>
        <h2>Thank You!</h2>
        <p>Your message has been sent successfully.</p>
        <button onClick={onClose} style={popupStyles.button}>
          Close
        </button>
      </div>
    </div>
  );
};

const popupStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  container: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    maxWidth: "400px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    border: "none",
    background: "#007BFF",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      access_key: "82065f12-46c3-4e8e-a447-e06abca908bb",
      name,
      email,
      message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        clearState();
        setShowPopup(true); // Show popup after successful submission
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while sending your message.");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us a message, and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span><i className="fa fa-map-marker"></i> Address</span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span><i className="fa fa-phone"></i> Phone</span>
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span><i className="fa fa-envelope-o"></i> Email</span>
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li><a href={props.data ? props.data.facebook : "/"}><i className="fa fa-facebook"></i></a></li>
                  <li><a href={props.data ? props.data.twitter : "/"}><i className="fa fa-twitter"></i></a></li>
                  <li><a href={props.data ? props.data.youtube : "/"}><i className="fa fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 <a href="/">meditricbiosciences.com</a></p>
        </div>
      </div>

      {/* Popup */}
      {showPopup && <Popup onClose={closePopup} />}
    </div>
  );
};


