# React + TypeScript + Vite

This project provides a minimal setup to get **React** working with **Vite** and **TypeScript**, including ESLint configuration for high-quality production-ready applications.

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

Or create a new project using Vite:

```bash
npm create vite@latest mobiusEngine -- --template react-ts
cd mobiusEngine
```

---

### 2. Install Dependencies

```bash
npm install
```
or
```bash
yarn install
```
or
```bash
pnpm install
```

---

### 3. Install ESLint and Plugins (Optional for Advanced Linting)

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react-x eslint-plugin-react-dom
```

Ensure TypeScript is installed:

```bash
npm install -D typescript
```

---

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 📦 Available Scripts

| Command             | Description                      |
| ------------------- | --------------------------------- |
| `npm run dev`        | Run the development server       |
| `npm run build`      | Build for production             |
| `npm run preview`    | Preview the production build     |
| `npm run lint`       | Check for linting errors         |

---

## 🔧 ESLint Configuration

Enable type-aware and stricter linting by updating your `eslint.config.js`:

```javascript
import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

---

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [ESLint Documentation](https://eslint.org/)
