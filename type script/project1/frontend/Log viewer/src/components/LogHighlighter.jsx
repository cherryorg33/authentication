// LogHighlighter.js
import PropTypes from 'prop-types';

function LogHighlighter({ log }) {
  const getColorByLogLevel = (level) => {
    switch (level.toLowerCase()) {
      case 'error':
        return 'red';
      case 'info':
        return 'blue';
      case 'warning':
        return 'yellow';
      default:
        return 'inherit';
    }
  };

  return (
    <div style={{ color: getColorByLogLevel(log.level) }}>
      {log.timestamp}: {log.message}
    </div>
  );
}

LogHighlighter.propTypes = {
  log: PropTypes.shape({
    timestamp: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default LogHighlighter;
