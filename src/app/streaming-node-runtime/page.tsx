import { Suspense } from "react";
import {
  CachedDateWithLatencyNoStore,
} from "../_queries/cached";
import { unstable_noStore } from "next/cache";

export const runtime = "nodejs"

export default function Patched() {
  unstable_noStore();
  const now = new Date();
  return <div>
    Time: {now.toLocaleString("en-US", {
      timeZone: "America/New_York",
    })}
    <div>Why is the value not revalidating (when reloading):</div>
    <Suspense fallback={'loading'}>
      <CachedDateWithLatencyNoStore />
    </Suspense>
  </div>
}
