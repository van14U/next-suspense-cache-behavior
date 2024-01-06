import { Suspense } from "react";
import {
  CachedDateWithLatency,
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
    <div>
      Value revalidates when the cache expires (same component as edge runtime)
    </div>
    <Suspense fallback={'loading'}>
      <CachedDateWithLatency />
    </Suspense>
  </div>
}
