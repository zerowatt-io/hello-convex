import { Doc } from "./_generated/dataModel";
import { addSystemFields, queryWithZod } from "./lib/withZod";
import { z } from "zod";

export default queryWithZod(
  {}, // We don't have any args to validate
  async ({ db }): Promise<Doc<"messages">[]> => {
    return await db.query("messages").collect();
  },
  z.array(
    z.object(
      addSystemFields("messages", { body: z.string(), author: z.string() })
    )
  )
);
