import Link from "next/link";

export type BreadcrumbItem = { name: string; path: string };

/**
 * Visible breadcrumb trail. Pair it with `breadcrumbSchema(items)` in the
 * route's server component so Google renders
 * "Dubai Buildings › Services › Asset Management" in results.
 */
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="px-4 sm:px-6 md:px-50 pt-6 text-sm text-gray-500 bg-white"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-gray-900">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-black transition">
                  {item.name}
                </Link>
              )}
              {!isLast && <span aria-hidden="true">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
