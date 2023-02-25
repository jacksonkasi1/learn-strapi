module.exports = {
  routes: [
    {
      method: "GET",
      path: "/posts/example",
      handler: ()=>{"d"},
      config: {
        // some config
        auth: false,
      },
    },
  ],
};
