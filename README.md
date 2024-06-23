# Burgers Menu

This is the repository of the Web application of Burgers Menu and this is what you can find here:

- [Live project](#live-project)
- [Prerequisites](#prerequisites);
- [Running app](#running-app);
  - [Run as development](#run-as-development);
  - [Run as storybook](#run-as-storybook);
  - [Run as tests](#run-as-test-jest);
- [Architecture](#architecture);
- [Component Structure](#component-structure);
  - [File naming](#file-naming);
  - [Code Standard](#code-standard);
- [Definitions](#definitions);
  - [Next.js instead of Vite](#nextjs-instead-of-vite);
- [Final remarks](#final-remarks);


## Live project

- [burgers menu](https://burgers-menu.vercel.app/)

### Prerequisites

- [Node.js](https://nodejs.org/en/) >= 20.9.0 (npm >= 10.1.0)
- Clone the repository to your machine.

## Running app

### Run as development

```bash
# Install dependencies
$ npm install
# Run project
$ npm run dev
```

### Run as storybook

```bash
# Install dependencies
$ npm install
# Run storybook
$ npm run storybook
```

### Run as test jest

```bash
# Install dependencies
$ npm install
# Run tests
$ npm test
```

## Architecture

```
├── .storybook
├── node_modules
├── public
│   ├── img
│   │   ├── **/*.svg
│   │   ├── **/*.png
│   ├── fonts
│   ├── favicons
│   ├── robots.txt
│   ├── sitemap.xml
├── src
│   ├── common
│   │   ├── components
│   │   ├── utils
│   │   ├── services
│   │   ├── hooks
│   │   ├── interface
│   │   ├── providers
│   │   ├── redux
│   ├── modules
│   │   ├── name page
│   ├── app
│   │   ├── **/*.tsx
├── .eslintrc.json
├── .gitignore
├── babel.config.js
├── next-env.d.ts
├── next.config.js
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

Let's talk about each folder:

- **common**: Contains all generic resources that can be reused, including:
`components`: Reusable components.
`hooks`: Custom hooks.
`utils`: Utility functions.
`services`: Services and APIs.
`interfaces`: TypeScript types and interfaces.
`providers`: Context providers and context configuration.
`redux`: Redux configuration.

- **modules**: Contains a folder for each page/route of the application, separating the page construction code from the `app folder`. This structure ensures that each module is independent and only imports resources from `common`, without exporting anything to other modules folders.

- **app**: Used to consume the latest resources from Next.js 13, in the production-ready version.

## Component Structure

```
├── component_name
│   ├── sub_components
│   │   ├── **/*.tsx
│   ├── stories
│   │   ├── **/*.stories.tsx
│   ├── utils
│   │   ├── **/*.ts
│   ├── hooks
│   │   ├── **/*.tsx
│   ├── component_name.interface.ts
│   ├── index.tsx
│   ├── style.ts
│   ├── consts.ts
```

Let's talk about each folder:

- **component_name:** This is the name of the component, intended to be clear for better understanding, with attention to overly long names.
- **stories:** This folder is designated to store the storybook (stories) files of the component and its subcomponents. If there's only a single story file, it can be left at the component's root, named as: `component_name.stories.tsx`.
- **sub_components:** This should store the subcomponents that the main component consists of.
- **utils:** All functions that will not be shared outside the component can be created here.
- **hooks:** If there is only a single hook for the component and it will not be shared elsewhere outside its `component_name`, it can be created in the root of the `component_name` folder. If there are two or more hooks that will not be shared, group them inside the `hooks` folder for better organization.

### File naming

Folder and file names: [snake_case](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/)
Components: [pascal case](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/)
Everything else: [camel case](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/)

### Code Standard

The adopted standard is the composition pattern, with methodologies focused on clean code and the principles of SOLID.
Adopting best practices to make the code cleaner, easier to maintain, and highly reusable.

## Definitions

- **react-redux**: For global state management, although I prefer `zustand` for this purpose, Redux is required for this specific task.
- **styled-components**: Framework chosen for creating styled components. `TailwindCSS` could have been chosen, which has more affinity with Next.js, but styled-components is closer to CSS in terms of development.
- **Storybook and Jest**: for component documentation and unit testing.

### Next.js instead of Vite
Vite has a very powerful build processor because it is based on ES modules. However, Next.js focuses on Server-Side Rendering (SSR), which significantly improves the project's communication with SEO bots. Although Google can read the content of dynamic projects, its performance is not guaranteed, and other search engine bots have limitations in this regard.
Since this is a restaurant menu, it is crucial that the site is easily found and well-ranked in SEO searches, making Next.js the ideal partner for React.js in this case.

## Final remarks

Regarding the internationalization of texts and currency, there are three approaches:
- Mock on the frontend. However, it is a requirement of the task to receive data via API. Mocking the translation on the frontend would overlook this feature.
- Translation provided via API, but the current API response for the challenge does not provide the translation.
- Using a third-party API/framework to perform the service; however, these APIs and frameworks are paid, and free subscriptions have a relatively low monthly limit, which could compromise the final delivery of this challenge.

Considering these points, I opted to faithfully follow what is in Figma, instead of attempting to internationalize this data.
Regarding date and time, in the current challenge, in Figma, there is no place that uses this type of information. However, it would be the only one possible to include for free and definitively, if there were.

This activity was carried out in 30 hours. Due to the deadline, I was unable to finish implementing unit and integration tests across the entire project, but there is good test coverage and documentation.