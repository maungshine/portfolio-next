import axios from "axios";

const WP_API_URL = "https://blog.maungshine.site/wp-json/custom/v1/sync-user";

interface User {
  email: string;
  name: string;
}

export async function syncUser(user: User, token: string): Promise<void> {
  try {
    const response = await axios.post(WP_API_URL, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to sync user");
    }

    return response.data;
  } catch (error) {
    console.error("Error syncing user:", error);
    throw error;
  }
}
