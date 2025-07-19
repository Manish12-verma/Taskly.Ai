# Taskly.AI 

**Intelligent Tools for Limitless Creation**

Taskly.AI is a comprehensive AI-powered platform that provides intelligent tools for content creation, image generation, and document processing. Experience the power of artificial intelligence to generate, elevate, and perfect your content like never before.

![Taskly.AI Logo](public/taskly_logo.png)

##  Features

### AI-Powered Tools
- **AI Article Writer** - Generate high-quality, engaging articles on any topic
- **Blog Title Generator** - Create catchy, SEO-optimized titles for your blog posts
- **AI Image Generation** - Create stunning visuals with advanced AI technology
- **Background Removal** - Effortlessly remove backgrounds from images
- **Object Removal** - Seamlessly remove unwanted objects from photos
- **Resume Reviewer** - Get AI-powered feedback to improve your resume

### Core Features
-  **Secure Authentication** - Powered by Clerk for seamless user management
-  **Responsive Design** - Beautiful UI that works on all devices
-  **Fast Performance** - Built with Vite for lightning-fast development and builds
-  **Modern UI** - Sleek design with Tailwind CSS and Radix UI components
-  **Real-time Updates** - Live feedback and notifications
-  **Community** - Connect with other creators and share experiences

##  Technology Stack

### Frontend
- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.4** - Next-generation frontend build tool
- **React Router Dom 7.6.3** - Declarative routing for React
- **Tailwind CSS 4.1.11** - Utility-first CSS framework

### UI Components & Libraries
- **Radix UI** - Low-level UI primitives
- **Lucide React** - Beautiful & consistent icon toolkit
- **React Markdown** - Markdown component for React
- **React Hot Toast** - Notifications for React

### Authentication & Security
- **Clerk** - Complete user management and authentication

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Vite Plugins** - React and Tailwind CSS integration

##  Project Structure

```
Client/
├── public/                 # Static assets
│   ├── taskly_logo.png
│   ├── taskly_icon.png
│   └── gradientBackground.jpg
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── AiTools.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/             # Application pages
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── WriteArticle.jsx
│   │   ├── BlogTitles.jsx
│   │   ├── GenerateImages.jsx
│   │   ├── RemoveBackground.jsx
│   │   ├── RemoveObject.jsx
│   │   ├── ReviewResume.jsx
│   │   └── Community.jsx
│   ├── assets/            # Images and static files
│   ├── lib/               # Utility functions
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Application entry point
├── package.json
├── vite.config.js
└── tailwind.config.js
```

##  Application Routes

### Public Routes
- `/` - Home page with landing content and AI tools overview

### Protected Routes (Requires Authentication)
- `/ai` - Main dashboard layout
- `/ai/` - Dashboard with user statistics and recent creations
- `/ai/write-article` - AI Article Writer tool
- `/ai/blog-titles` - Blog Title Generator
- `/ai/generate-images` - AI Image Generation tool
- `/ai/remove-background` - Background Removal tool
- `/ai/remove-object` - Object Removal tool
- `/ai/review-resume` - Resume Review tool
- `/ai/community` - Community page for user interaction

##  Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manish12-verma/Taskly.Ai.git
   cd Taskly.Ai/Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your Clerk keys:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

##  UI Components

The application uses a modern design system with:
- **Custom UI Components** - Built with Radix UI primitives
- **Responsive Grid Layouts** - Flexible layouts that adapt to screen sizes
- **Gradient Backgrounds** - Beautiful visual elements
- **Icon Integration** - Consistent iconography with Lucide React
- **Toast Notifications** - User feedback with React Hot Toast

##  Authentication

Taskly.AI uses Clerk for authentication, providing:
- **Social Login** - Sign in with Google, GitHub, and more
- **Email/Password** - Traditional authentication methods
- **Protected Routes** - Secure access to AI tools
- **User Management** - Complete user profile management

##  Contributing

We welcome contributions to Taskly.AI! Here's how you can help:

### Getting Started
1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

### Types of Contributions
-  **Bug Fixes** - Help us squash bugs
-  **New Features** - Add new AI tools or functionality
-  **Documentation** - Improve our docs
-  **UI/UX** - Enhance the user experience
-  **Performance** - Optimize the application


---

**Built with ❤️ by MANISH VERMA**

