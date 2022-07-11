import mongoose from 'mongoose';

const instance = mongoose.Schema({
    caption: String,
    user: String,
    image: String,
    // image: {
    //     data: Buffer,
    //     contentType: String
    // },
    comments: []
});

// export default mongoose.model('posts', instance);
export default mongoose.model('posts', instance);