import { supabase } from './client';
import type { Database } from './types';

type FormResponseInsert = Database['public']['Tables']['form_responses']['Insert'];
type FormResponseRow = Database['public']['Tables']['form_responses']['Row'];

/**
 * Insert a new form response into the database
 * @param formData The form data to insert
 * @returns The inserted data or error
 */
export const insertFormResponse = async (formData: FormResponseInsert) => {
  const { data, error } = await supabase
    .from('form_responses')
    .insert(formData)
    .select()
    .single();
  
  if (error) {
    console.error('Error inserting form response:', error);
    return { data: null, error };
  }
  
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
