import { EmptyState } from "@/components/ui/empty-state";
import { notFoundContent } from "@/content/pages";

export default function NotFound() {
  return <EmptyState {...notFoundContent} />;
}
