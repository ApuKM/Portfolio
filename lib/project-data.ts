import { ObjectId } from "mongodb";
import clientPromise, { DB_NAME, PROJECTS_COLLECTION } from "@/lib/mongodb";
import { demoProjects } from "@/lib/demo-projects";
import { Project } from "@/lib/types/project";

async function getProjectCollection() {
  try {
    const client = await clientPromise;
    return client.db(DB_NAME).collection<Project>(PROJECTS_COLLECTION);
  } catch (error) {
    console.error("[project-data] MongoDB unavailable:", error);
    return null;
  }
}

function fallbackProjects(limit?: number): Project[] {
  if (typeof limit === "number") {
    return demoProjects.slice(0, Math.min(limit, demoProjects.length));
  }

  return demoProjects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const collection = await getProjectCollection();

    if (!collection) {
      return fallbackProjects(3);
    }

    const projects = await collection
      .find({})
      .sort({ order: 1 })
      .limit(3)
      .toArray();

    if (!projects || projects.length === 0) {
      return fallbackProjects(3);
    }

    return projects;
  } catch (error) {
    console.error("[project-data] Failed to load featured projects:", error);
    return fallbackProjects(3);
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const collection = await getProjectCollection();

    if (!collection) {
      return fallbackProjects();
    }

    const projects = await collection.find({}).sort({ order: 1 }).toArray();

    if (!projects || projects.length === 0) {
      return fallbackProjects();
    }

    return projects;
  } catch (error) {
    console.error("[project-data] Failed to load all projects:", error);
    return fallbackProjects();
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const collection = await getProjectCollection();

    if (!collection) {
      return demoProjects.find((project) => project._id.toString() === id) ?? null;
    }

    const projectByStringId = await collection.findOne({ _id: id });
    if (projectByStringId) {
      return projectByStringId;
    }

    if (ObjectId.isValid(id)) {
      const projectByObjectId = await collection.findOne({ _id: new ObjectId(id) });
      if (projectByObjectId) {
        return projectByObjectId;
      }
    }

    return demoProjects.find((project) => project._id.toString() === id) ?? null;
  } catch (error) {
    console.error(`[project-data] Failed to find project ${id}:`, error);
    return demoProjects.find((project) => project._id.toString() === id) ?? null;
  }
}
