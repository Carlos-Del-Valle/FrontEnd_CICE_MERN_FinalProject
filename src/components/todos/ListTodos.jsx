import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import Todo from "./Todo"
import { getTodos } from "../../store/actions/todoActions"



const useStyles = makeStyles({
    todosStyle: {
        margin: "20px auto",
        padding: "20px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000"
    }
})

const ListTodos= ({setTodo}) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)


    useEffect(()=>{
        dispatch(getTodos())
    }, [dispatch]) // to avoid perpetual getting the todos list

    return (
        <>
        <div className = { classes.todosStyle }>
            <Typography variant="h5">
                { todos.length > 0 ? "To do's list" : "No to dos yet ¯\\_(ツ)_/¯" }
            </Typography>
            { todos && todos.map((todo) => {
                return (
                    <Todo
                        todo={ todo }
                        key={ todo._id }
                        setTodo = { setTodo }
                    />

                )
            })}
        </div>

        </>
    )
}

export default ListTodos