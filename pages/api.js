import { createClient } from '@supabase/supabase-js'

const SUPABASE_ANON_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMyNTI3MywiZXhwIjoxOTU4OTAxMjczfQ.eoQ0i9hg5vtYIVqkpM0Qrur-6Z0o_gb8xiTsDhkwOVw`
const SUPABASE_URL = `https://ddhxeomghrhnjzxbopzg.supabase.co`
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default supabaseClient