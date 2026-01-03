"use client";

import { useEffect, useState, useMemo } from "react";
import AdminLayout from "../components/layout";
import {
  Download,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  User,
  Calendar,
  FileSpreadsheet,
  Eye,
  Trash2,
  RefreshCw,
  CheckCircle,
  XCircle
} from "lucide-react";

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterInterest, setFilterInterest] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "desc"
  });
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/getcontacts`);
      const data = await res.json();
      setContacts(data.contacts || []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc"
    }));
  };

  const filteredAndSortedContacts = useMemo(() => {
    let filtered = contacts.filter(contact => {
      const matchesSearch =
        contact.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.phone?.includes(searchTerm) ||
        contact.message?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesInterest = filterInterest === "all" || contact.interest === filterInterest;

      return matchesSearch && matchesInterest;
    });

    filtered.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    return filtered;
  }, [contacts, searchTerm, filterInterest, sortConfig]);

  const totalPages = Math.ceil(filteredAndSortedContacts.length / itemsPerPage);
  const paginatedContacts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedContacts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedContacts, currentPage, itemsPerPage]);

  const interests = ["all", ...new Set(contacts.map(c => c.interest).filter(Boolean))];

  const exportToExcel = () => {
    const headers = ["Name", "Email", "Phone", "Interest", "Message", "Date"];
    const data = filteredAndSortedContacts.map(c => [
      c.name,
      c.email,
      c.phone,
      c.interest,
      c.message,
      new Date(c.createdAt).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(","),
      ...data.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `contacts_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async (id) => {
    if (!id) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact/deletecontact/${id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setContacts(prev => prev.filter(c => c._id !== id));
        setDeleteConfirm(null);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };


  const toggleSelectContact = (id) => {
    setSelectedContacts(prev =>
      prev.includes(id)
        ? prev.filter(contactId => contactId !== id)
        : [...prev, id]
    );
  };

  const selectAllContacts = () => {
    if (selectedContacts.length === paginatedContacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(paginatedContacts.map(c => c._id));
    }
  };

  const deleteSelected = async () => {
    if (window.confirm(`Delete ${selectedContacts.length} selected contact(s)?`)) {
      try {
        await Promise.all(
          selectedContacts.map(id =>
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/deletecontact/${id}`, {
              method: "DELETE"
            })
          )
        );
        setContacts(prev => prev.filter(c => !selectedContacts.includes(c._id)));
        setSelectedContacts([]);
      } catch (error) {
        console.error("Error deleting contacts:", error);
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <RefreshCw className="w-8 h-8 animate-spin text-blue-600" />
          <span className="ml-3 text-gray-600">Loading contacts...</span>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Contact Requests</h1>
            <p className="text-gray-600">
              Total: {contacts.length} contact{contacts.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={exportToExcel}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <FileSpreadsheet className="w-4 h-4" />
              Export CSV
            </button>
            <button
              onClick={fetchContacts}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={filterInterest}
                  onChange={(e) => setFilterInterest(e.target.value)}
                  className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {interests.map(interest => (
                    <option key={interest} value={interest}>
                      {interest === "all" ? "All Interests" : interest}
                    </option>
                  ))}
                </select>
              </div>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {[5, 10, 25, 50].map(num => (
                  <option key={num} value={num}>
                    Show {num}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Selected Actions */}
        {selectedContacts.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between">
            <span className="text-blue-700 font-medium">
              {selectedContacts.length} contact{selectedContacts.length !== 1 ? "s" : ""} selected
            </span>
            <div className="flex gap-3">
              <button
                onClick={deleteSelected}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Delete Selected
              </button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4">
                    <input
                      type="checkbox"
                      checked={
                        paginatedContacts.length > 0 &&
                        selectedContacts.length === paginatedContacts.length
                      }
                      onChange={selectAllContacts}
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th
                    className="p-4 text-left font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Name {sortConfig.key === "name" && (
                        sortConfig.direction === "asc" ? "↑" : "↓"
                      )}
                    </div>
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact
                    </div>
                  </th>
                  <th
                    className="p-4 text-left font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort("interest")}
                  >
                    Interest {sortConfig.key === "interest" && (
                      sortConfig.direction === "asc" ? "↑" : "↓"
                    )}
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    Message
                  </th>
                  <th
                    className="p-4 text-left font-semibold text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort("createdAt")}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date {sortConfig.key === "createdAt" && (
                        sortConfig.direction === "asc" ? "↑" : "↓"
                      )}
                    </div>
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedContacts.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="p-8 text-center text-gray-500">
                      No contact requests found
                    </td>
                  </tr>
                ) : (
                  paginatedContacts.map((contact) => (
                    <tr
                      key={contact._id}
                      className={`border-b hover:bg-gray-50 transition-colors ${selectedContacts.includes(contact._id) ? "bg-blue-50" : ""
                        }`}
                    >
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={selectedContacts.includes(contact._id)}
                          onChange={() => toggleSelectContact(contact._id)}
                          className="rounded border-gray-300"
                        />
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-gray-900">{contact.name}</div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Mail className="w-4 h-4" />
                            <a
                              href={`mailto:${contact.email}`}
                              className="hover:text-blue-600 hover:underline"
                            >
                              {contact.email}
                            </a>
                          </div>
                          {contact.phone && (
                            <div className="flex items-center gap-2 text-gray-700">
                              <Phone className="w-4 h-4" />
                              <a
                                href={`tel:${contact.phone}`}
                                className="hover:text-blue-600"
                              >
                                {contact.phone}
                              </a>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${contact.interest === "Partnership"
                          ? "bg-purple-100 text-purple-800"
                          : contact.interest === "Support"
                            ? "bg-green-100 text-green-800"
                            : contact.interest === "General Inquiry"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                          }`}>
                          {contact.interest || "N/A"}
                        </span>
                      </td>
                      <td className="p-4 max-w-xs">
                        <div className="truncate">
                          {contact.message}
                        </div>
                        {contact.message && contact.message.length > 50 && (
                          <button
                            onClick={() => {
                              setSelectedMessage(contact.message);
                              setShowMessageModal(true);
                            }}
                            className="mt-1 text-sm text-blue-600 hover:text-blue-800"
                          >
                            View full
                          </button>
                        )}
                      </td>
                      <td className="p-4 text-gray-600 text-sm">
                        {formatDate(contact.createdAt)}
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedMessage(contact.message);
                              setShowMessageModal(true);
                            }}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="View message"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(contact._id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between p-4 border-t">
              <div className="text-gray-600 text-sm mb-4 sm:mb-0">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedContacts.length)} of {filteredAndSortedContacts.length} entries
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-3 py-1 rounded-lg ${currentPage === pageNum
                        ? "bg-blue-600 text-white"
                        : "border hover:bg-gray-50"
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Full Message</h3>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage}</p>
            </div>
            <div className="p-6 border-t flex justify-end">
              <button
                onClick={() => setShowMessageModal(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-red-100 rounded-full">
                  <Trash2 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Delete Contact</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this contact request? This action cannot be undone.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}