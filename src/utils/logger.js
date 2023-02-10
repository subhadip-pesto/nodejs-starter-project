import { createLogger, format, transports } from 'winston';

function Logger(moduleName = '') {
  const enumerateErrorFormat = format((info) => {
    if (info instanceof Error) {
      Object.assign(info, { message: info.stack });
    }
    return info;
  });
  return createLogger({
    defaultMeta: {
      service: moduleName,
    },
    format: format.combine(
      enumerateErrorFormat(),
      format.timestamp(),
      process.env.NODE_ENV === 'production'
        ? format.uncolorize()
        : format.colorize(),
      format.splat(),
      format.printf(
        ({ level, message, service, timestamp }) =>
          `[${level}] [${service}] [${new Date(
            timestamp
          ).toLocaleString()}] : ${message}`
      )
    ),
    transports: [new transports.Console({})],
  });
}

export default Logger;
