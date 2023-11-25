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

export { getPosts };
