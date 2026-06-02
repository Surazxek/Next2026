# Project setup
- Initialized the project 
  -pnpm init

-Installed language dependencies
  - pnpm i -D typescript @types/node tsx nodemon

- Created git ignore list .gitignore
  - node_modules


 -pnpm approve-builds to avoid build scripts

  -Set up Ts config
        {
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",

    "module": "CommonJS",
    "target": "ES2020",
    "lib": ["ES2020"],
    "types": ["node"],

    "strict": true,
    "esModuleInterop": true,
    "allowJs": true,

    "isolatedModules": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
  }


  - created nodemon.json 
             commands are   {
               "watch": ["src"],
               "ext": "ts",
               "exec" : "tsx src/server.ts"}
                                          

- installed express and its types
   -# Runtime dependency (needed in production)
         pnpm add express

    # Dev dependencies (needed only during development)
       pnpm add -D typescript tsx nodemon @types/node @types/express




# Express Middleware
 -// to manipulate the incoming request
// to respond to client
// to call next middleware
// app.use((req, res, next) => {
//   console.log("I am always called");
//   next();
// });