import { useEffect, useState } from "react";
import { LoadContent } from "../utils/LoadContent";
import { Search, X, Maximize, Download } from "lucide-react";
import Banner from "../components/Banner";

const ITEMS_PER_LOAD = 6; // Changed to 6 for grid symmetry

const formatDate = (dateString) => {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
};

export default function Notice() {
  const [notices, setNotices] = useState([]);
  const [activeNotice, setActiveNotice] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  useEffect(() => {
    LoadContent("notices")
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNotices(sorted);
      })
      .catch(console.error);
  }, []);

  const getFileType = (url) => {
    if (!url) return "none";
    const ext = url.split(".").pop().toLowerCase().split("?")[0]; // Handle URLs with params
    if (ext === "pdf") return "pdf";
    if (["jpg", "jpeg", "png", "webp", "gif"].includes(ext)) return "image";
    return "none";
  };

  const filteredNotices = notices.filter((n) =>
    n.title?.toLowerCase().includes(query.toLowerCase()),
  );

  const visibleNotices = filteredNotices.slice(0, visibleCount);

  // Helper to close modal
  const closeModal = () => {
    setActiveNotice(null);
    setIsFullScreen(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <Banner
        title="News and"
        highlightText="Notices"
        breadcrumb="News & Notices"
        subtitle="Stay updated with the latest announcements, events, and circulars from SHEBS."
      />

      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* HEADER & SEARCH */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="text-4xl font-bold text-[#1C3F82] uppercase tracking-tight">
            Latest Updates
            <div className="h-1 w-20 bg-[#FF6B34] mt-2" />
          </h2>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search notices..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-[#1C3F82] transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </button>
            )}
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleNotices.map((notice, index) => {
            const file = notice.image || notice.file || notice.pdf;
            const type = getFileType(file);

            return (
              <article
                key={index}
                onClick={() => setActiveNotice(notice)}
                className="group cursor-pointer bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* PREVIEW THUMBNAIL */}
                <div className="h-52 bg-gray-50 relative overflow-hidden">
                  {type === "image" ? (
                    <img
                      src={file}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : type === "pdf" ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-red-50 text-red-500">
                      <span className="text-4xl mb-2">📄</span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        View PDF Notice
                      </span>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#1C3F82]/5 p-6 text-center">
                      <p className="text-[#1C3F82] font-semibold text-sm line-clamp-3">
                        {notice.title}
                      </p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#1C3F82]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      <Maximize className="w-6 h-6 text-[#1C3F82]" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded-full mb-3">
                    {type === "pdf" ? "Circular" : "General News"}
                  </span>
                  <h3 className="text-lg font-bold text-[#1C3F82] leading-snug line-clamp-2 mb-4 group-hover:text-[#FF6B34] transition-colors">
                    {notice.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium">
                    {formatDate(notice.date)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* LOAD MORE */}
        {visibleCount < filteredNotices.length && (
          <div className="flex justify-center mt-20">
            <button
              onClick={() => setVisibleCount((p) => p + ITEMS_PER_LOAD)}
              className="px-12 py-4 rounded-full font-bold bg-[#1C3F82] text-white hover:bg-[#FF6B34] hover:shadow-xl transition-all duration-300"
            >
              Load More News
            </button>
          </div>
        )}
      </section>

      {/* ================== NOTICE PREVIEW MODAL ================== */}
      {activeNotice && (
        <div
          className="fixed inset-0 w-full h-full z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          {/* Close & Action Buttons */}
          <div className="absolute top-6 right-6 flex items-center gap-4 z-[10000]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFullScreen(!isFullScreen);
              }}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
              title="Toggle Fullscreen"
            >
              <Maximize size={24} />
            </button>
            <button
              onClick={closeModal}
              className="p-3 bg-[#FF6B34] hover:bg-[#e55a28] rounded-full text-white transition-all"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Content */}
          <div
            className={`bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${isFullScreen ? "w-full h-full" : "max-w-4xl w-full max-h-[90vh]"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <div>
                <h3 className="text-xl font-bold text-[#1C3F82] pr-10">
                  {activeNotice.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {formatDate(activeNotice.date)}
                </p>
              </div>
              <a
                href={
                  activeNotice.image || activeNotice.file || activeNotice.pdf
                }
                download
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 bg-[#1C3F82] text-white px-4 py-2 rounded-lg text-sm font-bold"
              >
                <Download size={18} /> Download
              </a>
            </div>

            {/* Modal Body (Scrollable) */}
            <div
              className={`overflow-auto p-4 flex justify-center bg-gray-200 ${isFullScreen ? "h-[calc(100%-88px)]" : "h-[60vh] md:h-[70vh]"}`}
            >
              {getFileType(
                activeNotice.image || activeNotice.file || activeNotice.pdf,
              ) === "image" ? (
                <img
                  src={
                    activeNotice.image || activeNotice.file || activeNotice.pdf
                  }
                  alt="Notice"
                  className="max-w-full h-auto object-contain rounded-lg shadow-lg"
                />
              ) : getFileType(
                  activeNotice.image || activeNotice.file || activeNotice.pdf,
                ) === "pdf" ? (
                <iframe
                  src={`${activeNotice.pdf || activeNotice.file}#toolbar=0`}
                  className="w-full h-full rounded-lg"
                  title="Notice Detail"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  No preview available for this notice.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
