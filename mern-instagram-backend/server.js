import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Pusher from 'pusher';
import dbModel from './dbModel.js';

// App Configuration
const app = express();
const port = process.env.PORT || 8080;

// const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1435214",
  key: "8cb573f68c342fdab500",
  secret: "3a3064bdb090ebed5c3c",
  cluster: "mt1",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});

// Middlewares
app.use(express.json());
app.use(cors());

// Database Configuration
const connection_url = 'mongodb+srv://admin:fiL3tMig404@cluster0.2qjwr8h.mongodb.net/instagram-clone?retryWrites=true&w=majority';
mongoose.connect(connection_url, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
    console.log('Connected to database.');

    const changeStream = mongoose.connection.collection('posts').watch();

    changeStream.on('change', (change) => {
        console.log('Change triggered on Pusher...');
        console.log(change);
        console.log('End of change.');

        if (change.operationType === 'insert') {
            console.log ('Triggering image upload for Pusher...');

            const postDetails = change.fullDocument;
            pusher.trigger('posts', 'inserted', {
                user: postDetails.user,
                caption: postDetails.caption,
                image: postDetails.image
            });
        } else {
            console.log('An error has been triggered in Pusher.');
        }
    })
})

// API Routes
app.get('/', (req, res) => res.status(200).send('hello world!'));

app.post('/upload', (req, res) => {
    const body = req.body;

    dbModel.create(body, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/sync', (req, res) => {
    dbModel.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});

// Listen...
app.listen(port, () => console.log(`listening on localhost:${port}`));