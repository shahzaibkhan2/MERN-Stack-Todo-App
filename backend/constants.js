// Database Name
export const DB_NAME = String(process.env.MONGODB_NAME);

// Custom HTTP Protocol Options
export const httpOptions = {
  httpOnly: true,
  samesite: "strict",
  maxAge: 1 * 24 * 60 * 60 * 1000,
  secure: true,
};
