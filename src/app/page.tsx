import { redirect } from "next/navigation";
import { getServerUser } from "@/utils/user";

export default function Home() {
  const user = getServerUser();

  if (user) {
    redirect("/dashboard");
  } else {
    redirect("/signup");
  }
}
