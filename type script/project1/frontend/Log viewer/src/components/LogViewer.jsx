// LogViewer.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LogHighlighter from "./LogHighlighter";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { fetchLogs } from "./LogoService";

function LogViewer() {
  const { serviceName } = useParams();
  const [logs, setLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchLogs(serviceName)
      .then((data) => setLogs(data))
      .catch((error) => console.error("Error fetching logs:", error));
  }, [serviceName]);

  const filteredLogs = logs.filter((log) =>
    log.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="log-viewer">
        <h1>logviewer</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredLogs
        .slice((currentPage - 1) * 10, currentPage * 10)
        .map((log) => (
          <LogHighlighter key={log.id} log={log} />
        ))}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredLogs.length / 10)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default LogViewer;
