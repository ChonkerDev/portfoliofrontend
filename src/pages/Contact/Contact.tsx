import {TextField, Button, TextareaAutosize} from "@mui/material";
import classes from './ContactForm.module.css';
import {ValidationError} from "@formspree/react";
import {useForm} from '@formspree/react';

export default function Contact() {
    const [state, handleSubmit] = useForm("mnnvlvzn");

    return (
        <div>
            <h1 style={{textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>
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
                        className={classes.inputField}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>

                    <div style={{padding: '1rem 0', width: '100%'}}>
                        <label htmlFor="message" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 'bold'}}>
                            Your Message
                        </label>
                        <TextareaAutosize
                            id="message"
                            name="message"
                            required
                            minRows={3}
                            style={{
                                resize: 'vertical',
                                width: '100%',
                                minWidth: 300,
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

