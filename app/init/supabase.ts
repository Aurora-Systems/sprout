import { createClient } from '@supabase/supabase-js';

const supabase_url = process.env.SUPABASE_URL as string
const supabase_key = process.env.SUPABASE_KEY as string

const db = createClient("https://wydajmnykbvjicgnncqz.supabase.co", "d")

export default db