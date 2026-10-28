import type { Metadata } from "next";
import {
  GlobalHrManagementBlog,
  BLOG_SEO_TITLE,
  BLOG_DESCRIPTION,
  BLOG_CANONICAL,
} from "@/components/blog/GlobalHrManagementBlog";

export const metadata: Metadata = {
  title: `${BLOG_SEO_TITLE} | Zoiko HR`,
  description: BLOG_DESCRIPTION,
  alternates: { canonical: BLOG_CANONICAL },
  openGraph: {
    type: "article",
    title: BLOG_SEO_TITLE,
    description: BLOG_DESCRIPTION,
    url: BLOG_CANONICAL,
    images: ["/images/blog/global-hr-management-platform-header.jpg"],
  },
};

export default function GlobalHrManagementBlogPage() {
  return <GlobalHrManagementBlog />;
}
