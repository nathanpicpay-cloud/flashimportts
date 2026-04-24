import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_fCv1SaQ3Xov1E4KHDg2FWw_sTitXCYv';

export const supabase = createClient(supabaseUrl, supabaseKey);
