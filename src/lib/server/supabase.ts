import { createClient } from '@supabase/supabase-js';
import dotenv from '@dotenvx/dotenvx';
dotenv.config();

// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

// import { PRIVATE_SUPABASE_URL, PRIVATE_SUPABASE_ANON_KEY } from '$env/static/private';

const PUBLIC_SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL ?? '';
const PUBLIC_SUPABASE_ANON_KEY = process.env.PUBLIC_SUPABASE_ANON_KEY ?? '';

const supabaseUrl = PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = PUBLIC_SUPABASE_ANON_KEY ?? '';

console.log(supabaseUrl);
console.log(supabaseAnonKey);

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be set');
}

export default createClient(supabaseUrl, supabaseAnonKey);
