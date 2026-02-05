import { useEffect, useState } from "react";
import { LoadContent } from "../utils/LoadContent";
import { X } from "lucide-react";

export default function Notice() {
  const [notices, setNotices] = useState([]);
  const [activeNotice, setActiveNotice] = useState(null);

  useEffect(() => {
    LoadContent("notices")
      .then((data) => {
        // Sort by date descending (latest first) and take only 3
        const sorted = data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3);
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

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-serif text-[#006747] mb-10">
          Latest Notices
        </h2>

        {/* NOTICE GRID */}
        {notices.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {notices.map((notice, index) => {
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
                      <p className="text-sm text-gray-500 mt-2">{notice.date}</p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="text-center py-32 text-gray-500">
            <h3 className="text-2xl font-semibold text-[#006747] mb-2">
              No notices available
            </h3>
            <p>Please check back later for updates.</p>
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
                activeNotice.image || activeNotice.file || activeNotice.pdf;
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
                  <span className="inline-block mb-4 px-5 py-1 text-sm
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