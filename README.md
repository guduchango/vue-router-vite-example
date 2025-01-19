# Example Project: Routing System in a Travel Website

This project is an educational example that explores advanced routing features in Vue 3 for a travel-themed website. It is structured into multiple branches (`1__step`, `2__step`, `3__step`, ..., `24__step`), where each branch represents an incremental step in development and learning.

---

## Features Implemented

Throughout the project, the following key routing concepts are covered:

1. **Lazy Loading Routes**: Performance optimization by loading routes on demand.
2. **Navigation Component**: Navigation component to explore different sections.
3. **Dynamic Routes**: Creating routes that accept dynamic parameters.
4. **Nested Routes**: Configuring nested routes for child components.
5. **Go Back Component**: Implementation of a button to go back to the previous route.
6. **Route Transition**: Animations during route changes.
7. **Handle 404**: Managing not-found routes with a custom page.
8. **Route Guards**: Protecting routes with validations before navigation.
9. **Scroll Behavior**: Controlling scroll behavior when changing routes.
10. **Route Query Params**: Handling query parameters in routes.
11. **Extending Router Link Component**: Extending `<RouterLink />` functionality.
12. **Programmatic Navigation**: Navigating using JavaScript code.
13. **Redirect**: Setting up automatic redirections between routes.
14. **Detecting Navigation Failures**: Detecting and handling navigation errors.
15. **Advanced Routes Matching Syntax**: Using advanced syntax to match routes.
16. **Dynamic Routing**: Dynamically creating routes from external data.

---

## How to Navigate Between Branches

Each branch is numbered and represents a development step:

```bash
# Switch to a specific branch
$ git checkout 1__step
```

Follow the order of branches to understand the project's progression.

---

## Installation and Execution

1. Clone the repository:

   ```bash
   git clone <REPOSITORY-URL>
   cd <PROJECT-NAME>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the project:

   ```bash
   npm run dev
   ```

4. Open in your browser:

   ```
   http://localhost:5173
   ```

---

## Project Structure

The project uses the following basic structure:

```plaintext
src/
├── components/          # Reusable components
├── views/               # Main views
├── router/              # Routes configuration
│   └── index.js         # Main router file
├── assets/              # Images and static resources
└── App.vue              # Root component
```

---

## Space for Images

Below you can include screenshots or diagrams of the project:

- **Images**

  ![Home](https://images.edgardoponce.com/vue3-travel/img_1.png)
  ![Description](https://images.edgardoponce.com/vue3-travel/img_2.png)
  ![Login](https://images.edgardoponce.com/vue3-travel/img_3.png)
  ![Dashboard](https://images.edgardoponce.com/vue3-travel/img_4.png)
  

---

## Resources

- [Vue Router Official Documentation](https://router.vuejs.org/)
- [Vue 3 Guide](https://vuejs.org/guide/introduction.html)

---

## Contributions

This project is educational, but contributions are welcome. Please create a pull request or open an issue for suggestions.

---

## License

MIT License. This project is open for use and modification under the terms of the MIT license.
