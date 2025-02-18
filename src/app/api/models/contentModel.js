import mongoose from "mongoose";

// Post Schema
const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now }
});

// News Schema
const NewsSchema = new mongoose.Schema({
  headline: String,
  body: String,
  source: String,
  createdAt: { type: Date, default: Date.now }
});

// Mentions Schema
const MentionSchema = new mongoose.Schema({
  referencedUser: String,
  mentionText: String,
  mentionedBy: String,
  createdAt: { type: Date, default: Date.now }
});

// Blog Schema
const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  createdAt: { type: Date, default: Date.now }
});

// Export models
export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
export const News = mongoose.models.News || mongoose.model("News", NewsSchema);
export const Mention = mongoose.models.Mention || mongoose.model("Mention", MentionSchema);
export const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
