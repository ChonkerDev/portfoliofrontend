import { useForm as useSpreeForm, ValidationError} from '@formspree/react';
import classes from './ContactForm.module.css';
import {Button, TextareaAutosize, TextField} from "@mui/material";

export default function ContactForm() {
    const [state, handleSubmit] = useSpreeForm<ContactFormFields>("mnnvlvzn")

    if (state.succeeded) {
        return <div>
            <img src="/logo.png" alt="Logo" className={classes.responsiveImage}/>
            <p className={classes.responseText}>Thanks for your message!</p>
        </div>;
    }

    return (
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

            <TextareaAutosize
                id="message"
                name="message"
                required
                minRows={3}
                className={classes.textareaField}
                style={{
                        resize: 'vertical',
                        width: '50vw',
                        maxWidth: 600,
                        minWidth: 300,
                        margin: '0 auto',
                        display: 'block',
                        boxSizing: 'border-box',
                }}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors}/>

            <div className={classes.buttonGroup}>
                <Button type="submit" disabled={state.submitting}>
                    Submit
                </Button>
            </div>
        </form>
    );
}

type ContactFormFields = {
    name: string;
    email: string;
    message: string;
};

