import { NextFunction, Request, Response } from "express";
function RequestLogger(req: Request, _res: Response, next: NextFunction) {
  const date = new Date();
  console.log(
    `> {request} : ${req.method} ;  {path}: ${req.path} ;  {time}: ${date.toLocaleString()}`
  );
  next();
  return;
}

export default RequestLogger;
