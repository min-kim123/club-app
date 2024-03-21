import { Database as DB } from "@/types/database.types";

type Group = Database["public"]["Tables"]["groups"]["Row"];
type Profile = Database["public"]["Tables"]["profiles"]["Row"];

declare global {
  type Database = DB;

}
