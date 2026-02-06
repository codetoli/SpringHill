import { useEffect, useState } from "react";
import { LoadContent } from "../utils/LoadContent";
import { Link } from "react-router-dom";

export default function Notice() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    LoadContent("notices")
      .then((data) => {
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* HEADER SECTION - Adjusted padding for mobile */}
        <section className="bg-white mb-12">
          <div className="flex justify-center text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C3F82] relative inline-block">
              Latest News and Notices
              <span
                className="absolute left-1/2 -translate-x-1/2 -bottom-3
                   h-[3px] bg-[#FF6B34]
                   w-full animate-[underline_1.2s_ease-out]"
              />
            </h2>
          </div>
        </section>

        {notices.length > 0 ? (
          /* RESPONSIVE GRID: 1 col on mobile, 2 on tablet, 3 on desktop */
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {notices.map((notice, index) => {
              const file = notice.image || notice.file || notice.pdf;
              const type = getFileType(file);

              return (
                <Link
                  key={index}
                  to="/notice"
                  className="group border overflow-hidden bg-white
                             hover:shadow-xl transition
                             rounded-tl-[80px] rounded-br-[80px]"
                >
                  {/* IMAGE PREVIEW - Container remains identical */}
                  <div className="h-64 bg-gray-100 relative overflow-hidden">
                    {type === "image" && (
                      <img
                        src={file}
                        alt={notice.title}
                        className="absolute inset-0 w-full h-full object-cover
                                   group-hover:scale-105 transition-transform duration-300"
                      />
                    )}

                    {type === "pdf" && (
                      <iframe
                        src={`${file}#page=1&zoom=80`}
                        className="w-full h-full pointer-events-none"
                        title="PDF Preview"
                      />
                    )}

                    {type === "none" && (
                      <div className="h-full w-full flex flex-col items-center justify-center bg-gray-100">
                        <span className="mb-4 px-4 py-1 text-xs font-semibold rounded-full bg-[#006747] text-white">
                          NOTICE
                        </span>
                        <p className="px-6 text-center font-medium text-gray-700 line-clamp-3">
                          {notice.title}
                        </p>
                      </div>
                    )}

                    {/* TITLE OVERLAY - UI preserved */}
                    <div
                      className="absolute bottom-0 left-0 w-full bg-black/40
                                 px-4 py-2 opacity-0 group-hover:opacity-100
                                 transform translate-y-4 group-hover:translate-y-0
                                 transition-all duration-300"
                    >
                      <h3 className="text-white text-lg font-semibold line-clamp-2">
                        {notice.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <h3 className="text-xl font-semibold text-[#006747] mb-2">
              No notices available
            </h3>
            <p>Please check back later for updates.</p>
          </div>
        )}
      </section>

      {/* READ ALL BUTTON - Responsive font/padding */}
      <div className="text-center mt-8 mb-16 px-4">
        <Link
          to="/notice"
          className="inline-block border-2 border-[#1C3F82] text-[#1C3F82]
                     px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold
                     hover:bg-[#1C3F82] hover:text-white
                     hover:-translate-y-1 transition-all"
        >
          Read All News
        </Link>
      </div>
    </>
  );
}
