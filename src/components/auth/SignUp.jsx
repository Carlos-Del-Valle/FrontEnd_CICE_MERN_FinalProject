import React from 'react'

import { Typography , TextField, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    formStyle: {
        margin: "0px auto",
        padding: "30px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000"
    },
    spacing: {
        marginTop: "20px"
    }
})

const SignUp= () => {
    const classes = useStyles()
    return (
        <>
            <form
                className={ classes.formStyle }
                noValidate="off"
                autoComplete="off"
            >
                <Typography variant="h5"> signUp </Typography>
                <TextField
                    className={classes.spacing}
                    id="enter-name"
                    label="enterName"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    className={classes.spacing}
                    id="enter-email"
                    label="enterEmail"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    className={classes.spacing}
                    id="enter-password"
                    type="password"
                    label="enterPassword"
                    variant="outlined"
                    fullWidth
                />
                <Button
                    className={classes.spacing}
                    variant="contained"
                    color="primary"
                    type="submit">
                    SignUp
                </Button>
            </form>
        </>
    )
}

export default SignUp