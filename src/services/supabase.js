import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qnpglgilsrdqopqnfynb.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFucGdsZ2lsc3JkcW9wcW5meW5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNDEyMTAsImV4cCI6MjA0MjgxNzIxMH0.fS7thuFvVQue3lWol1OYBirRibE1PLB3L2MJf17d7lY`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
