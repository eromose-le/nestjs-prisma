import {CallHandler, ExecutionContext, NestInterceptor} from "@nestjs/common";
import { map } from "rxjs";

export class CustomInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext, handler: CallHandler
  ) {
    // intercepting request (incomming)
    console.log('context', context);

    return handler.handle().pipe(
      map((data)=>{
        //  intercepting response (outgoing)
        console.log('data', data);
        const response = {
          ...data,
          createdAt: data.created_at
        };

        delete response.updated_at;
        delete response.created_at;

        console.log('response', response);

        return response;
      })
    )
  }
}