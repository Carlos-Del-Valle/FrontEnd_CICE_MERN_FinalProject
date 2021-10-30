import React from 'react'
import { useDispatch, useSelector } from "react-redux"

import { AppBar, Typography, Toolbar, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { Link, useHistory} from "react-router-dom"
import { signOut } from "../../store/actions/authActions"

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
    const auth =useSelector(state => state.auth)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signOut())
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
                { auth._id ? (
                <>
                <Typography variant="subtitle2" className={ classes.root }>
                    Logged in as {auth.name}
                </Typography>
                <Button
                    color= "inherit"
                    onClick={() => handleSignOut()}>
                    Sign Out
                </Button>
                </>
                ) : (
                <>
                <Button color="inherit">
                    <Link className = { classes.linkStyle } to="/signin">
                    Sign In

                    </Link>
                </Button>
                <Button color="inherit">
                    <Link className = { classes.linkStyle } to="/signup">
                    Sign Up
                    </Link>
                </Button>
                </>
                    )
                }

                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar

