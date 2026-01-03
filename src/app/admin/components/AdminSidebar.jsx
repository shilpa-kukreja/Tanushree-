"use client";
import Link from "next/link";
import { FiUsers } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-wide">
          TanuShree Admin
        </h2>
      </div>

      <nav>
        <Link
          href="/admin/contacts"
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
            ${
              pathname === "/admin/contacts"
                ? "bg-[#a13045]"
                : "hover:bg-gray-800"
            }`}
        >
          <FiUsers />
          Contacts
        </Link>
      </nav>
    </aside>
  );
}
