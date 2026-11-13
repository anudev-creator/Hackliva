import type { ReviewsSectionProps } from "../_components/reviews-section";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";

// PLACEHOLDER CONTENT from the design mockup. Replace the reviews, the rating
// and the review count with real, verifiable data before launch.
export const customerReviews: ReviewsSectionProps = {
  id: "reviews",
  title: "Reviews from real people",
  summary: { score: "4.5/5", source: "Trustpilot", note: "Based on 3,987 reviews" },
  intro: "What our\ncustomers are\nsaying",
  reviews: [
    { name: "Ryan Almeida", when: "1 day ago", rating: 5, text: lorem },
    { name: "Blossom Menezes", when: "3 days ago", rating: 5, text: lorem },
    { name: "Jason Miller", when: "1 week ago", rating: 5, text: lorem },
    { name: "Anjali Nair", when: "2 weeks ago", rating: 5, text: lorem },
    { name: "Rahul Menon", when: "3 weeks ago", rating: 4, text: lorem },
    { name: "Priya Thomas", when: "1 month ago", rating: 5, text: lorem },
  ],
};
