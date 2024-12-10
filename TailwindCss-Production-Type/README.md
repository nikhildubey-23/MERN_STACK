```markdown
# Setting Up Tailwind CSS Project

This guide explains the steps to set up a basic Tailwind CSS project with a clear directory structure.

---

## Project Structure

- **Root Directory**  
  Contains the `tailwind.config.js` file and is where global configurations are managed.

- **Folders**  
  - `src`: Contains the `input.css` file where Tailwind directives are included.  
  - `dist`: Contains the `index.html` and `style.css` files. This folder is prepared for production.

---

## Step-by-Step Setup

### 1. Initialize the Project
1. Create two folders named `src` and `dist` in your project root.
2. Run the following command in the root directory to initialize Tailwind CSS:
   ```bash
   npx tailwindcss init
   ```
   This creates a `tailwind.config.js` file in the root directory.

---

### 2. Configure the Input CSS
1. Inside the `src` folder, create a file named `input.css`.
2. Add the following lines to `input.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

### 3. Set Up the Output CSS
1. Inside the `dist` folder, create the following files:
   - `index.html`: Your main HTML file.
   - `style.css`: The compiled CSS file for production.

---

### 4. Configure Tailwind to Detect HTML
1. Open the `tailwind.config.js` file located in the root directory.
2. Modify the `content` property to enable Tailwind CSS to locate all HTML files:
   ```javascript
   content: ["./dist/*.html"]
   ```

---

### 5. Compile Tailwind CSS
1. Run the following command from the root directory to compile `input.css` into `style.css`:
   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch
   ```
   - `-i`: Specifies the input CSS file.  
   - `-o`: Specifies the output CSS file.  
   - `--watch`: Automatically updates `style.css` whenever changes are made to `input.css`.

---

## Notes
- The `dist` folder is ready for production after running the above steps.
- Always run the compile command before starting work to ensure Tailwind CSS changes are reflected.

---
