import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
  return await {
    body: JSON.stringify({
      message: 'ok',
    }),
    statusCode: 200,
  };
}
