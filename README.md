# FrontEnd Card

Project has been made with [this](https://github.com/zerob4wl/sample-react-redux-typescript) boilerplate which developed by me and my friend.

I used yarn that's a reason for existing `yarn.lock` but it also should work with `npm` sorry for the inconvenience.
I also used less for styling.
```
├── src
├── components                         // all component should be here
│   │   └── BoatCard
│   │       ├── BoatCardDetail
│   │       │   ├── index.tsx
│   │       │   ├── mockData.ts
│   │       │   └── style.less
│   │       ├── BoatCardImage
│   │       │   ├── index.tsx
│   │       │   └── style.less
│   │       ├── index.tsx
│   │       └── style.less
│   │ 
│   ├── containers                       // app container for presentation
│   │   ├── DemoAssets 
│   │   │   └── boat-image.jpg
│   │   ├── app.tsx
│   │   └── style.less
│   ├── index.html
│   ├── index.tsx
│   ├── registerServiceWorker.ts 
│   └── theme
│       ├── colors.less                  // theme colors
│       ├── main.less                   // main styles and import variables
│       └── typography.less 
├── tsconfig.json
├── tslint.json
├── README.md
├── declaration.d.ts
├── package.json
├── webpack.config.js
└── yarn.lock
```

#### start dev server
`npm start`
or
`yarn start`

#### build project
`npm run build`
or
`yarn start`

#### build and serve 
`npm run build-and-serve`
or
`yarn build-and-serve`
