const express = require('express')
const app = express()
const PORT = 5000

const seed = require('./seed')
const { db } = require('./db')
const { User } = require('./Models/index') 
const { Show } = require('./Models/index')


seed()


// Find all users 
app.get('/user', async (req, res) => {
    let allPeople = await User.findAll()
    res.json({allpeople})
})

// Find all shows
app.get('/show', async (req, res) => {
    let allShows = await Show.findAll()
    res.json({allShows})
})


// Add Show
app.post('/show', async (req, res) => {
    await Show.create({name: 'The Maid', genre: 'Drama', seasons: 1, ratings: 97  })
    res.send(`New Show added`)  
})

// Add a user 
app.post('/user', async (req, res)  => {
    await User.create({ name: 'Titan'})
    res.send('New User Added')
})

// delete a show
app.delete('/show/:id', async (req, res) => {
    await Show.destroy({
        where: {id: req.params.id}
    })
        res. send("Show has been removed");
})

//display all of what user has watched
app.get('/show/:userId', async (req, res) =>{
    const { userId } = req.params;

    const show = await Show.findAll({
      include: [
        {
          model: User,
          required: true,
        },
      ],
        where: {
            UserId: userId,
      },
    })
        res.json(show);
  })












app.listen( PORT, () => {
    console.log(` Your server is now listening to port ${PORT}`)
})


