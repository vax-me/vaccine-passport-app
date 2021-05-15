import {configLoggerType, fileAsyncTransport, logger} from 'react-native-logs';
import RNFS from 'react-native-fs';

const defaultConfig: configLoggerType = {
  severity: 'debug',
  transport: fileAsyncTransport,
  transportOptions: {
    FS: RNFS,
    fileName: `log.txt`,
  },
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
