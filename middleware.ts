import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)", // Matches /dashboard and all subroutes
  "/profile", // Matches /profile
]);

export default clerkMiddleware(
  async (auth, req) => {
    // Protect routes that match the defined patterns
    if (isProtectedRoute(req)) {
      await auth.protect();
    }
  },
  {
    // Restrict access to specific authorized parties (optional)
    authorizedParties: ["https://islamicedu.com.au"],
  }
);

export const config = {
  matcher: [
    // Skip internal Next.js files and static assets, unless explicitly included
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
