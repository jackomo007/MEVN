var express = require("express")
var router =  express.Router()
const Task = require("../model/Task")

/*
*Get all Task
 */
router.get("/tasks", (req, res) => {
    Task.findAll()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.send("error: " + err)
        })
})

/*
*Add new task
 */
router.post("/task", (req, res) => {
    if(!req.body.name) {
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    } else {
            Task.create(req.body)
                .then(() =>{
                    res.send("Task Added")
                })
                .catch(err => {
                    res.send("Error: " + err)
                })
        }
})

/*
*Delete a task
 */
router.delete("/task/:id", (req, res) => {
        Task.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                res.send("Task Deleted!")
            })
            .catch(err => {
                res.send("error: " + err)
            })
})

/*
*Update a task
 */
router.put("/task/:id", (req, res) => {
    if(!req.body.name){
        res.status(400)
        res.json({
            error: "Mistake in Data"
        })
    } else {
        Task.update(
            { name: req.body.name },
            { where: { id: req.params.id }}
        )
            .then(() => {
                res.send("Task Updated!")
            })
            .error(err => res.send(err))
    }
})
module.exports = router