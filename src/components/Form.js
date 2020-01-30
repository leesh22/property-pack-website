import React from 'react';
import { toast } from 'react-toastify';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.showNotification = this.showNotification.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.showNotification(false))
      .catch(error => this.showNotification(error));

    this.clearForm();
    e.preventDefault();
  };

  clearForm() {
    this.setState({
      name: "",
      email: "",
      message: ""
    })
  }

  showNotification(error) {
    if(!error) {
      toast("Thanks for reaching out, we'll be in touch soon!", {type: toast.TYPE.SUCCESS});
    } else {
      toast("Whoops, looks like something went wrong, please try again.", {type: toast.TYPE.ERROR});
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
        <div className="fields">
          <p className="field half">
            <label htmlFor="name">Name</label>
            <input required type="text" name="name" id="name" value={name} onChange={this.handleChange}/>
          </p>
          <p className="field half">
            <label htmlFor="email">Email</label>
            <input required type="text" name="email" id="email" value={email} onChange={this.handleChange}/>
          </p>
          <p className="field">
            <label htmlFor="message">Message</label>
            <textarea required name="message" id="message" rows="5" value={message} onChange={this.handleChange}/>
          </p>
        </div>
        <ul className="actions">
          <li>
            <button type="submit" className="button submit" >Send Message</button>
          </li>
        </ul>
        <input type="hidden" name="form-name" value="contact" />
      </form>
    );
  }
}

export default Form;
