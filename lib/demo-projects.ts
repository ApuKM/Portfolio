import { Project } from "./types/project";


/**
 * Realistic fallback data used whenever the MongoDB connection is
 * unavailable (e.g. MONGODB_URI not configured yet, or the DB is empty/down).
 * This lets the front end render a fully working portfolio during local
 * development or before the database has been seeded.
 */
export const demoProjects: Project[] = [
  {
    _id: "1",
    title: "TaskFlow — Team Task Manager",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80",
    shortDescription:
      "A collaborative kanban-style task manager with real-time updates and team workspaces.",
    fullDescription:
      "TaskFlow is a full-stack task management application built for small teams. It supports drag-and-drop kanban boards, real-time collaboration via WebSockets, role-based permissions, and activity timelines. The backend exposes a REST API secured with JWT auth, and the frontend is built with Next.js and Tailwind CSS for a fast, responsive experience across devices.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Socket.IO", "JWT"],
    liveUrl: "https://taskflow-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/taskflow",
    challenges: [
      "Synchronizing drag-and-drop state across multiple connected clients without race conditions",
      "Designing a MongoDB schema that kept board queries fast as task counts grew",
      "Implementing granular role-based access control (owner, editor, viewer) per workspace",
    ],
    futurePlans: [
      "Add recurring tasks and calendar view",
      "Support file attachments via S3-compatible storage",
      "Build a mobile app with React Native sharing the same API",
    ],
  },
  {
    _id: "2",
    title: "MarketPulse — Stock Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80",
    shortDescription:
      "A real-time market dashboard visualizing stock trends, watchlists, and portfolio performance.",
    fullDescription:
      "MarketPulse aggregates live and historical stock data into an interactive dashboard. Users can build custom watchlists, view candlestick and volume charts, and track simulated portfolio performance over time. Data is fetched from a third-party financial API, cached in MongoDB to reduce rate-limit pressure, and rendered with a charting library for smooth, interactive visualizations.",
    techStack: ["Next.js", "MongoDB", "Recharts", "Tailwind CSS", "Node-Cron", "REST APIs"],
    liveUrl: "https://marketpulse-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/marketpulse",
    challenges: [
      "Handling third-party API rate limits with a MongoDB-backed caching layer",
      "Rendering large historical datasets in charts without jank",
      "Designing a data-refresh strategy that balances freshness with API cost",
    ],
    futurePlans: [
      "Add price alert notifications via email/webhook",
      "Support crypto assets alongside equities",
      "Introduce a backtesting tool for simple trading strategies",
    ],
  },
  {
    _id: "3",
    title: "Trailhead — Hiking Route Explorer",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80",
    shortDescription:
      "A community-driven map app for discovering, rating, and sharing hiking trails.",
    fullDescription:
      "Trailhead lets outdoor enthusiasts search for hiking trails by difficulty, distance, and elevation gain, view interactive maps, and leave reviews with photos. Trail data and user submissions are stored in MongoDB with geospatial indexes, enabling fast 'trails near me' queries. The app is fully responsive and optimized for use on mobile devices out on the trail.",
    techStack: ["Next.js", "MongoDB", "Mapbox GL", "Tailwind CSS", "Lucide React", "Geospatial Queries"],
    liveUrl: "https://trailhead-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/trailhead",
    challenges: [
      "Setting up MongoDB 2dsphere indexes for efficient proximity search",
      "Optimizing image uploads/thumbnails for slow mobile connections",
      "Building an offline-friendly experience for areas with poor signal",
    ],
    futurePlans: [
      "Add offline map caching for downloaded trails",
      "Integrate weather data per trail",
      "Launch a companion mobile app with GPS trail recording",
    ],
  },
];