import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import pg from "pg";
import {
  blogPosts, type InsertBlogPost, type BlogPost,
  contactSubmissions, type InsertContact, type ContactSubmission,
  campusSignups, type InsertCampusSignup, type CampusSignup,
  newsletterSubscriptions, type InsertNewsletter, type NewsletterSubscription,
} from "@shared/schema";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);

export interface IStorage {
  getBlogPosts(): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  createContactSubmission(submission: InsertContact): Promise<ContactSubmission>;
  createCampusSignup(signup: InsertCampusSignup): Promise<CampusSignup>;
  createNewsletterSubscription(sub: InsertNewsletter): Promise<NewsletterSubscription>;
}

export class DatabaseStorage implements IStorage {
  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [result] = await db.insert(blogPosts).values(post).returning();
    return result;
  }

  async createContactSubmission(submission: InsertContact): Promise<ContactSubmission> {
    const [result] = await db.insert(contactSubmissions).values(submission).returning();
    return result;
  }

  async createCampusSignup(signup: InsertCampusSignup): Promise<CampusSignup> {
    const [result] = await db.insert(campusSignups).values(signup).returning();
    return result;
  }

  async createNewsletterSubscription(sub: InsertNewsletter): Promise<NewsletterSubscription> {
    const [result] = await db.insert(newsletterSubscriptions).values(sub).returning();
    return result;
  }
}

export const storage = new DatabaseStorage();
