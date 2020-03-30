import * as winston from "winston";
import { TransformableInfo } from "logform";


const alignedWithColorsAndTime = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info: TransformableInfo) => {
        const {
            timestamp, level, message, ...args
        } = info;

        const ts = timestamp.slice(0, 19).replace('T', ' ');
        return `${ts} ${level}: ${message} ${Object.keys (args).length ? JSON.stringify(args, null, 2) : ''}`;
        // return `${level}: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
    }),
);

export const logger = winston.createLogger({
    // level: 'info',
    format: alignedWithColorsAndTime,
    // defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        // new winston.transports.File({ filename: 'error.log', level: 'error' }),
        // new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console({ format: alignedWithColorsAndTime })
    ],
    exitOnError: false
});
