import {
  APIGatewayProxyEvent, APIGatewayProxyHandler,
  APIGatewayProxyResult
} from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => await ({
  body: JSON.stringify({ 'message': 'ok' }),
  statusCode: 200,
});