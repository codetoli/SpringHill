import { useEffect, useState } from "react";
import { LoadContent } from "../utils/LoadContent";
import { Search, X } from "lucide-react";

const ITEMS_PER_LOAD = 5;

export default function Notice() {
  const [notices, setNotices] = useState([]);
  const [activeNotice, setActiveNotice] = useState(null);
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  useEffect(() => {
    LoadContent("notices")
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setNotices(sorted);
      })
      .catch(console.error);
  }, []);

  const getFileType = (url) => {
    if (!url) return "none";
    const ext = url.split(".").pop().toLowerCase();
    if (ext === "pdf") return "pdf";
    if (["jpg", "jpeg", "png", "webp"].includes(ext)) return "image";
    return "none";
  };

  const filteredNotices = notices.filter((n) =>
    n.title?.toLowerCase().includes(query.toLowerCase())
  );

  const visibleNotices = query ? filteredNotices.slice(0, ITEMS_PER_LOAD) : filteredNotices.slice(0, visibleCount);

  return (
    <>
      <section className="max-w-7xl mx-auto px-7 py-30">
        {/* TITLE */}
        <div className="mb-12">
          <h2
            className="text-5xl font-serif font-bold
                       bg-gradient-to-r from-[#006747] via-emerald-600 to-teal-500
                       bg-clip-text text-transparent inline-block"
          >
            Notices
          </h2>
          <div
            className="mt-3 w-24 h-1 rounded-full
                       bg-gradient-to-r from-[#006747] to-emerald-400"
          />
        </div>

        {/* SEARCH */}
        <div className="max-w-md mb-10 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search notices..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border rounded-md
                       focus:outline-none focus:border-[#006747]"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>

        {/* GRID */}
        {visibleNotices.length > 0 ? (
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {visibleNotices.map((notice, index) => {
                const file = notice.image || notice.file || notice.pdf;
                const type = getFileType(file);

                return (
                  <article
                    key={index}
                    onClick={() => setActiveNotice(notice)}
                    className="cursor-pointer group border rounded-xl overflow-hidden
                               bg-white hover:shadow-xl transition"
                  >
                    {/* PREVIEW */}
                    <div className="h-56 bg-gray-100 relative flex items-center justify-center">
                      {type === "image" && (
                        <img
                          src={file}
                          alt={notice.title}
                          className="absolute inset-0 w-full h-full object-cover
                                     group-hover:scale-105 transition"
                        />
                      )}

                      {type === "pdf" && (
                        <iframe
                          src={`${file}#page=1&zoom=80`}
                          className="w-full h-full"
                          title="PDF Preview"
                        />
                      )}

                      {type === "none" && (
                        <div className="h-full w-full flex flex-col items-center justify-center
                                        bg-gradient-to-br from-gray-50 to-gray-200">
                          <span className="mb-4 px-4 py-1 text-xs font-semibold
                                           rounded-full bg-[#006747] text-white">
                            NOTICE
                          </span>
                          <p className="px-6 text-center font-medium text-gray-700 line-clamp-3">
                            {notice.title}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#006747] line-clamp-2">
                        {notice.title}
                      </h3>
                      {notice.date && (
                        <p className="text-sm text-gray-500 mt-2">
                          {notice.date}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            {/* LOAD MORE */}
            {visibleCount < filteredNotices.length && (
              <div className="flex justify-center mt-14">
                <button
                  onClick={() =>
                    setVisibleCount((prev) => prev + ITEMS_PER_LOAD)
                  }
                  className="px-10 py-3 rounded-full font-semibold
                             bg-gradient-to-r from-[#006747] to-emerald-500
                             text-white shadow-lg
                             hover:scale-105 transition"
                >
                  Load More Notices
                </button>
              </div>
            )}
          </>
        ) : (
          /* EMPTY STATE */
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100
                            flex items-center justify-center mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-[#006747] mb-2">
              No notices found
            </h3>
            <p className="text-gray-500 max-w-md">
              We couldn’t find any notices matching
              <span className="font-semibold text-gray-700">
                {" "}“{query}”
              </span>.
            </p>
            <button
              onClick={() => setQuery("")}
              className="mt-6 px-6 py-3 rounded-full border
                         border-[#006747] text-[#006747]
                         hover:bg-[#006747] hover:text-white transition"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* MODAL */}
      {activeNotice && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
          onClick={() => setActiveNotice(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-3xl w-full rounded-xl p-8 relative"
          >
            <button
              onClick={() => setActiveNotice(null)}
              className="absolute top-4 right-4"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <h2 className="text-2xl font-bold text-[#006747] mb-6">
              {activeNotice.title}
            </h2>

            {(() => {
              const file =
                activeNotice.image ||
                activeNotice.file ||
                activeNotice.pdf;
              const type = getFileType(file);

              if (type === "image") {
                return (
                  <img
                    src={file}
                    alt={activeNotice.title}
                    className="w-full rounded-lg"
                  />
                );
              }

              if (type === "pdf") {
                return (
                  <iframe
                    src={file}
                    className="w-full h-[450px] border rounded-lg"
                    title="Notice PDF"
                  />
                );
              }

              return (
                <div className="p-10 rounded-xl bg-gray-50 border text-center">
                  <span className="inline-block mb-20 px-5 py-1 text-sm
                                   rounded-full bg-[#006747] text-white">
                    NOTICE
                  </span>
                  <p className="text-gray-700 text-lg">
                    This notice does not include any attached file.
                  </p>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}
