# Lobe.ai clone
> Fully responsive Lobe.ai clone MVP.
> Live demo [_here_](https://pieroguerrero.github.io/lobe-clone/).

## Clean Architecture
📦src
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┣ 📂images
 ┃ ┗ 📂videos
 ┣ 📂components
 ┣ 📂configs
 ┣ 📂hooks
 ┣ 📂layouts
 ┃ ┣ 📂Footer
 ┃ ┣ 📂Header
 ┃ ┗ 📂Skeleton
 ┣ 📂pages
 ┃ ┣ 📂examples
 ┃ ┣ 📂overview
 ┃ ┣ 📂tour
 ┣ 📂services
 ┣ 📂utilities


## Optimization Techniques used:
- Lazy Loading for Images and Components with Lazy, Suspense and the react-lazy-load-image-component library.
- Font import optimization with .... font-display (swap) https://web.dev/optimize-webfont-loading/
- CDN ready for the files.. (I have to get the URL for the files in a function or component)
- Intersection Observer for the video playback.
- Video preload="metadata" to download some metadata before the full video is downloaded. With this the application will have some information ahead of time


