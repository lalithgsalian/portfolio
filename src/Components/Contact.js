
import '../CSS/Contact.css'
import insta from '../images/insta.svg'
import linkedin from '../images/linkedin.svg'
import Github from '../images/Github.svg'
import phone from '../images/phone.svg'
import gear from '../images/Gear.gif'
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm('service_np9ba1n', 'template_uhxjpnm', form.current, 'wGZGP8zTS5WpuYSNf')
      .then((result) => {
          alert("Form submitted sucessfully");
          setLoading(false);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>

      <div className='forms'>
        <form ref={form} onSubmit={sendEmail}>
          <table align="center ">
            <caption>For any quieries</caption><br></br>
            <tr>
              <td><label>Name:</label></td>
              <td><input type="text" placeholder='Enter your Name' name='name'></input></td>
            </tr><br></br>
            <tr>
            <td><label>Phone Number:</label></td>
            <td><input type="number" placeholder='Enter your mobile number' name='phno'></input></td>
            </tr><br></br>
            <tr>
            <td><label>Email ID:</label></td>
            <td><input type="email" placeholder='Enter youur Email' name='email'></input></td>
            </tr><br></br>
            <tr>
            <td><label>Suggestions</label></td>
            <td><textarea name='suggestions' placeholder='Enter suggestions' rows="4" columns="20"></textarea></td>
            </tr><br></br>
            <td>
              {
                loading?
                (<img src={gear} alt='loading animation'/>)
                :
                (<button type="submit" value="Submit" className='Submit'>Submit</button>)
              }
            </td>
          </table>
        </form>

      </div>
          <div className="contact">
            
            <h2>Contact</h2>
            <a href="https://instagram.com/_____lalith._____" alt="" target='blank'>
            <img src={insta} alt='' className='insta'></img>
            </a>
            <a href="https://linkedin.com/lalithsalian" alt="" target='blank'>
            <img src={linkedin} alt='' className='linkedin'></img>
            </a>
            <img src={phone} alt='' className='phone'></img>
            <a href="https://github.com/lalithgsalian" alt="" target='blank'>
            <img src={Github} alt="" className='Github'></img>
            </a>
            <p>Phone: 9148273470</p>
            <p>Email: 53lalith@gmail.com</p>
            <p>GitHub:github.com/lalithgsalian</p>
            <p>LinkedIn: linkedin.com/in/lalithsalian</p>
          </div>
    
        {/* <div class="footer">
            <p>&copy; 2023 Lalith. All rights reserved.</p>
        </div>   */}
    </div>
  )
}

export default Contact