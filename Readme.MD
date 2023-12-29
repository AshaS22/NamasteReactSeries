1. 


2. Igniting App (npx parcel index.html)
Parcel (Makes Dev Experience smooth)
- Creates DEv Build
- Hosts it on the local Server
- HMR - Hot module Replacement : Uses file watching algorithm (Writeen in c++) to keep track of all the changes you make in your file.
- Because of Caching, It gives us faster builds
- Image Optimization
- Minification of file for prod build
- Files compression
- Bundling
- Consistent hashing - Read about it 
- Code Splitting
- Differential bundling - Support for older browsers (Difft bundles for difft types of browsers)
- Option to host on HTTPS (npx parcel build index.html --https)
- Tree Shaking - Remove unused code for you
- Diffrent build for dev and production


// Header
//  - Logo
//  - Navitems
// Body
//  - Search bar
//  - Restaurant list container
// Footer
//  - Copyright, Link, Address