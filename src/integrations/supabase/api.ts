import { supabase } from './client';
import type { Database } from './types';

type FormResponseInsert = Database['public']['Tables']['form_responses']['Insert'];
type FormResponseRow = Database['public']['Tables']['form_responses']['Row'];
type PhoneEntryInsert = Database['public']['Tables']['phone_entries']['Insert'];
type PhoneEntryRow = Database['public']['Tables']['phone_entries']['Row'];

/**
 * Insert a new form response into the database
 * @param formData The form data to insert
 * @returns The inserted data or error
 */
export const insertFormResponse = async (formData: FormResponseInsert) => {
  console.log('Attempting to insert form response:', formData);
  const { data, error } = await supabase
    .from('form_responses')
    .insert(formData)
    .select()
    .single();
  
  if (error) {
    console.error('Error inserting form response:', error);
    console.error('Error code:', error.code);
    console.error('Error details:', error.details);
    return { data: null, error };
  }
  
  console.log('Successfully inserted form response:', data);
  return { data, error: null };
};

/**
 * Get all form responses
 * @returns Array of form responses or error
 */
export const getFormResponses = async () => {
  const { data, error } = await supabase
    .from('form_responses')
    .select('*');
  
  if (error) {
    console.error('Error fetching form responses:', error);
    return { data: null, error };
  }
  
  return { data, error: null };
};

/**
 * Get a form response by ID
 * @param id The ID of the form response to fetch
 * @returns The form response or error
 */
export const getFormResponseById = async (id: number) => {
  const { data, error } = await supabase
    .from('form_responses')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching form response with ID ${id}:`, error);
    return { data: null, error };
  }
  
  return { data, error: null };
};

/**
 * Insert a new phone entry into the database
 * @param phone The phone number to insert
 * @returns The inserted data or error
 */
export const insertPhoneEntry = async (phone: string) => {
  console.log('Attempting to insert phone entry:', phone);
  const { data, error } = await supabase
    .from('phone_entries')
    .insert({ phone })
    .select()
    .single();
  
  if (error) {
    console.error('Error inserting phone entry:', error);
    console.error('Error code:', error.code);
    console.error('Error details:', error.details);
    return { data: null, error };
  }
  
  console.log('Successfully inserted phone entry:', data);
  return { data, error: null };
};

/**
 * Get all phone entries
 * @returns Array of phone entries or error
 */
export const getPhoneEntries = async () => {
  const { data, error } = await supabase
    .from('phone_entries')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching phone entries:', error);
    return { data: null, error };
  }
  
  return { data, error: null };
};
