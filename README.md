# lobe-clone

## Clean Architecture
- assets: media files
- components: common components that are used in multiple parts of the project.
- contexts: state management recommended for states that are in a particular view. They do not need to live across multiple pages.
- hooks: Custom hooks
- interceptors: Middlewares for Axios calls.
- models: entity representation, this is also where the typescript interfaces are defined.
- pages: Web site views (Login, Landing, Sigup, etc)
- redux: unique source of thru, stores the states that are needed globally in the project
- services: api call implementations. It could be to web services or to other type of interaction with the environment.
- utilities: functions or logic that is used in several parts of the project.
- layouts: Common layout section that are present across the across the pages, such as Navigation bar or footer. They form the general layout of the page.
- configs: Configuration files for the App, testing, databses, BAAS, etc


## Optimization Techniques used:
- Lazy Loading for Images and Components with Lazy, Suspense and the react-lazy-load-image-component library.
- Font import optimization with .... font-display (swap) https://web.dev/optimize-webfont-loading/
- CDN ready for the files.. (I have to get the URL for the files in a function or component)
- Intersection Observer for the video playback.
