import { getCollection } from "@/services/getCollection";
export const GET = async (req, res) => {
  try {
    const data = await getCollection();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch from DB", { status: 500 });
  }
};
