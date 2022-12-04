import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xqfkchdlylsnwzikglhl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxZmtjaGRseWxzbnd6aWtnbGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAxMTM3MjQsImV4cCI6MTk4NTY4OTcyNH0.veN_49yZ1Nd7qiH-ZEjeW7U3aO3KLyLxM0IPD0LYAcg";

export const supabase = createClient(supabaseUrl, supabaseKey);
