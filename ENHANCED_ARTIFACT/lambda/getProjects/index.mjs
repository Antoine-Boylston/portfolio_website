import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.PROJECTS_TABLE || "PortfolioProjects";

export const handler = async () => {
  try {
    const command = new ScanCommand({
      TableName: TABLE_NAME
    });

    const result = await docClient.send(command);

    const projects = (result.Items || []).sort((a, b) => {
      const orderA = a.displayOrder ?? 9999;
      const orderB = b.displayOrder ?? 9999;
      return orderA - orderB;
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(projects)
    };
  } catch (error) {
    console.error("Error retrieving projects:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        message: "Failed to retrieve projects",
        error: error.message
      })
    };
  }
};
