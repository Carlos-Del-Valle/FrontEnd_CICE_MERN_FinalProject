import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import Todos from './components/todos/Todos'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Navbar from './components/navBar/NavBar'

import { ToastContainer } from "react-toastify";
import"react-toastify/dist/ReactToastify.css"

const useStyles = makeStyles({
    contentStyle: {
       margin: "30px auto"
    }
})

const App = () => {
    const classes = useStyles()

  return (
      <>
        <BrowserRouter>
            <ToastContainer/>
            <Container maxWidth= "md">
            <Navbar/>
            <Container className = { classes.contentStyle} maxWidth="sm">
                <Switch>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/" component={Todos}/>
                </Switch>
            </Container>
            </Container>
        </BrowserRouter>
      </>
  )
}

export default App;
