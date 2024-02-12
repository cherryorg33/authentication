// logService.js
export async function fetchLogs(serviceName) {
    try {
      const response = await fetch(`https://www.ossec.net/docs/log_samples/${serviceName}.json`);
      const data = await response.json();
      return data.logs;
    } catch (error) {
      console.error('Error fetching logs:', error);
      return [];
    }
  }
  