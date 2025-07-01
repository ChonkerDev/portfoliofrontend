import {TextField, Button, TextareaAutosize} from "@mui/material";
import classes from '../../components/contactform/ContactForm.module.css';
import {ValidationError, useForm} from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mnnvlvzn");

    return (
        <div style={{width: "70%" , margin: "0 auto", padding: "2rem", boxSizing: "border-box", alignItems: "center"}}>
            <h1 style={{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', marginTop: '3rem'}}>
                Contact
            </h1>

            {state.succeeded ? (
                <div>
                    <img src="/logo.png" alt="Logo" className={classes.responsiveImage}/>
                    <p className={classes.responseText}>Thanks for your message!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={classes.formContainer}>
                    <TextField
                        label="Email Address"
                        id="email"
                        type="email"
                        name="email"
                        required
                        style ={{width: '100%', textAlign: 'center', marginBottom: '16px'}}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>

                    <div style={{padding: '1rem 0', width: '100%'}}>
                        <label htmlFor="message" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>
                            Your Message
                        </label>
                        <TextareaAutosize
                            id="message"
                            name="message"
                            aria-label={"Your Message"}
                            required
                            minRows={3}
                            style={{
                                resize: 'vertical',
                                width: '100%',
                                margin: '0 auto',
                                display: 'block',
                                boxSizing: 'border-box',
                                padding: '0.75rem',
                                borderRadius: '4px',
                            }}
                        />
                    </div>
                    <ValidationError prefix="Message" field="message" errors={state.errors}/>

                    <div className={classes.submitButton}>
                        <Button type="submit" disabled={state.submitting} sx={{color: '#ffffff', fontWeight: 'bold'}}>
                            Submit
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
}