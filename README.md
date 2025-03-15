# @trangla/ui

A modern React component library built with Radix UI and Tailwind CSS.

## Features

- 🎨 Modern and clean design system
- 🚀 Built with React + TypeScript + Vite
- 📦 30+ components built with Radix UI primitives
- 🎯 Fully typed with TypeScript
- 🎨 Customizable with Tailwind CSS
- 📚 Storybook documentation
- ✅ Comprehensive testing setup

## Prerequisites

- Node.js 18.x or higher
- pnpm 9.x or higher

### Installing pnpm

```bash
# Install pnpm globally
npm install -g pnpm

# Verify installation
pnpm --version
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/trangla/ui.git
cd ui
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open Storybook to view components:

```bash
pnpm storybook
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build the library
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm storybook` - Start Storybook development server
- `pnpm build-storybook` - Build Storybook for production
- `pnpm test` - Run tests

## Project Structure

```
src/
  ├── components/     # UI components
  │   └── ui/         # Base UI components
  ├── hooks/          # Custom React hooks
  ├── lib/            # Utility functions
  └── styles/         # Global styles and Tailwind config
```

## Creating New Components

1. Create a new component in `src/components/ui`
2. Follow the existing component structure:
   - Use TypeScript
   - Include proper prop types
   - Add Storybook documentation
   - Follow the project's code style

Example component structure:

```tsx
// Button.tsx
import { type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, ...props }: ButtonProps) {
  // Component implementation
}
```

## Development Guidelines

- Use TypeScript for all new code
- Follow the established code style (ESLint + Prettier)
- Write Storybook documentation for components
- Add tests for new components
- Use Radix UI primitives when possible
- Follow semantic versioning

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT
