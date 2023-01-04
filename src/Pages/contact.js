import styled from 'styled-components';
import {useAuth0} from '@auth0/auth0-react';

const Contact = () => {
  const {isAuthenticated, user} = useAuth0 ();

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          outline: none;
         

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({theme}) => theme.colors.white};
              border: 1px solid ${({theme}) => theme.colors.btn};
              color: #000;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2089498865857!2d72.9026248!3d21.2235613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045896dc759ef%3A0xfdbd3dae74da75ce!2sVraj%20Chowk%2C%20Nana%20Varachha%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1671770875886!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{border: 0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />

      <div className="container">
        <div className="contact-form">
          <form action="" method="POST" className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              value={isAuthenticated ? user.name : null}
              autocomplete="off"
            />
            <input
              type="email"
              placeholder="Email"
              name="Email"
              required
              value={isAuthenticated ? user.email : null}
              autocomplete="off"
            />

            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your Message"
              required
              autocomplete="off"
            />

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
