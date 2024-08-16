import { cookies } from "next/headers";

export function getServerUser() {
  try {
    const userCookie = cookies().get("user");
    return userCookie?.value ? JSON.parse(userCookie.value) : undefined;
  } catch (e) {
    console.error(e);
    cookies().delete("user");
    return undefined;
  }
}
