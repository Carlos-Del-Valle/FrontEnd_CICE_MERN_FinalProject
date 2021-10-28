import React from 'react'
import { useSelector } from "react-redux"

import { AppBar, Typography, Toolbar, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { Link, useHistory} from "react-router-dom"

// Styles from Material UI
const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },

    linkStyle: {
        color: "#fafafa",
        textDecoration: "none"
    }

})

const NavBar= () => {
    const classes = useStyles()
    const state =useSelector(state => state)
    console.log(state)
    const history = useHistory()

    const handleSignOut = () => {
     //signOut the user
        history.push("/signin")
    }

    return (
        <>
            <AppBar position= "static">
                <Toolbar>
                <Typography variant="h4" className={ classes.root }>
                    <Link className = { classes.linkStyle } to="/">
                        Slacker's List
                    </Link>
                </Typography>
                <Typography variant="subtitle2" className={ classes.root }>
                    Logged in as Carlos
                </Typography>
                <Button
                    color= "inherit"
                    onClick={() => handleSignOut()}>
                    SignOut
                </Button>
                <Button color="inherit">
                    <Link className = { classes.linkStyle } to="/signin">
                    SignIn

                    </Link>
                </Button>
                <Button color="inherit">
                    <Link className = { classes.linkStyle } to="/signup">
                    SignUp
                    </Link>
                </Button>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar