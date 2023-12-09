import "next-auth";

declare module "next-auth" {
  /**
   * Extending the built-in session and user types
   */
  interface Session {
    user: {
      githubUsername?: string;
    } & DefaultSession["user"];
  }

  interface User {
    githubUsername?: string;
  }
}
