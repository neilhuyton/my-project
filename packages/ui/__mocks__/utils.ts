import { HttpResponse } from "msw";

export const createTRPCErrorResponse = (
  id: number,
  message: string,
  code: number,
  status: number,
  path: string
) => {
  return HttpResponse.json(
    {
      id,
      error: {
        message,
        code,
        data: {
          code: "BAD_REQUEST",
          httpStatus: status,
          path,
        },
      },
    },
    { status }
  );
};