const getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: 'First Post',
        content: 'This is the first post!',
      },
      {
        title: 'Second Post',
        content: 'This is the second post!',
      },
    ],
  });
};

const createPost = (req, res, next) => {
  const { title, content } = req.body;

  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};

export { getPosts, createPost };
