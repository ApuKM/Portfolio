import { ObjectId } from "mongodb";

export interface Project {
  _id: ObjectId | string;
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  futurePlans: string[];
}