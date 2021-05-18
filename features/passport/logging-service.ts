import {configLoggerType, consoleTransport, logger} from 'react-native-logs';

const defaultConfig: configLoggerType = {
  severity: 'debug',
  transport: consoleTransport,
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  async: true,
  dateFormat: 'time',
  printLevel: true,
  printDate: true,
  enabled: true,
};
export const LoggingService = logger.createLogger(defaultConfig);
