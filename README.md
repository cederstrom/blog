# My blog

## Build and run it

Build with [11ty](https://www.11ty.dev/) static site generator and [this 11ty template](https://github.com/ixartz/Eleventy-Starter-Boilerplate). Big thanks!

### Requirements

- Node.js and npm

### Getting started

Clone this repo.

Then run `npm run dev`

Open http://localhost:8080 with your favorite browser to see the blog.

### Project structure

```
.
├── public             # Static files
│   └── assets
│       └── images     # Images not needed by Webpack
└── src
    ├── _data          # Eleventy data folder
    ├── _includes
    │   └── layouts    # HTML layout files
    ├── assets         # Assets folder that needs to be processed by Webpack
    │   ├── images
    │   │   └── posts  # Images used in blog posts (will be compressed by Webpack)
    │   └── styles     # CSS files
    └── posts          # Blog posts
```

### Deploy to production

You can see the results locally in production mode with `npm run serve`.

You can create an optimized production build with:

```
npm run build
```

Now, your blog is ready to be deployed. All generated files are located at `_site` folder, which you can deploy with any hosting service.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.
