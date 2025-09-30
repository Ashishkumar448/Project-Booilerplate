import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            trim: true,
        },
        description:{
            type: String,
            required: true,
            trim: true,
        },
        projectURL:{
            type: String,
            required: true,
            trim: true,
        },
        repoURL:{
            type: String,
            trim: true,
            default: '',
        },
        imageURL:{
            type: String,
            trim: true,
            default: '',
        },

    }
);

export default mongoose.model('Project', ProjectSchema);