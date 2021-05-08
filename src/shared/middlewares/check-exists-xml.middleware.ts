import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as xmlParser from 'fast-xml-parser';

@Injectable()
export class CheckExistsXmlMiddleware implements NestMiddleware<Request, Response> {
    use(req: Request, res: Response, next: NextFunction) {
        if (req.headers) {
            const contentType = req.headers['Content-Type'];
            if (contentType && contentType.indexOf('application/xml') >= 0) {
                if (req.body) {
                    req.body = this.xmlToJson(req.body);
                }
                if (req.query) {
                    req.query = this.xmlToJson(req.query);
                }
            }
        }
        next();
    }

    private xmlToJson(data: any) {
        const isXml = xmlParser.validate(data) === true;
        if (isXml) {
            return xmlParser.parse(data, { trimValues: true });
        }
        return data;
    }
}