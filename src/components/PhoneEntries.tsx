import React from 'react';
import { useState, useEffect } from 'react';
import { getPhoneEntries } from '@/integrations/supabase/api';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type PhoneEntry = Database['public']['Tables']['phone_entries']['Row'];

function PhoneEntries() {
  const [phoneEntries, setPhoneEntries] = useState<PhoneEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<string>('Checking connection...');

  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log('Testing Supabase connection...');
        const { data, error } = await supabase.from('phone_entries').select('*').limit(1);
        
        if (error) {
          console.error('Supabase connection error:', error);
          setConnectionStatus(`Connection error: ${error.message || 'Unknown error'}`);
        } else {
          console.log('Supabase connection successful');
          setConnectionStatus('Connected to Supabase successfully');
        }
      } catch (err) {
        console.error('Supabase connection test error:', err);
        setConnectionStatus(`Connection test error: ${err instanceof Error ? err.message : String(err)}`);
      }
    };
    
    testConnection();
  }, []);

  useEffect(() => {
    const fetchPhoneEntries = async () => {
      try {
        console.log('Fetching phone entries...');
        const { data, error } = await getPhoneEntries();
        
        if (error) {
          console.error('Error fetching phone entries:', error);
          setError(`Error al cargar los números de teléfono: ${error.message}`);
          setLoading(false);
          return;
        }
        
        console.log('Phone entries fetched:', data);
        setPhoneEntries(data || []);
        setLoading(false);
      } catch (err) {
        console.error('Exception fetching phone entries:', err);
        setError(`Error al cargar los números de teléfono: ${err instanceof Error ? err.message : String(err)}`);
        setLoading(false);
      }
    };

    fetchPhoneEntries();
  }, []);

  if (loading) return <div className="p-4">Cargando números de teléfono...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Números de Teléfono Registrados</h2>
      
      <div className="mb-4 p-3 border rounded">
        <h3 className="font-semibold mb-2">Estado de la conexión:</h3>
        <div className={connectionStatus.includes('error') ? 'text-red-500' : 'text-green-500'}>
          {connectionStatus}
        </div>
      </div>
      
      {phoneEntries.length === 0 ? (
        <div className="p-4 bg-gray-100 rounded">No hay números de teléfono registrados todavía</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">ID</th>
                <th className="border p-2">Número de Teléfono</th>
                <th className="border p-2">Fecha de Registro</th>
              </tr>
            </thead>
            <tbody>
              {phoneEntries.map((entry) => (
                <tr key={entry.id}>
                  <td className="border p-2">{entry.id}</td>
                  <td className="border p-2">{entry.phone}</td>
                  <td className="border p-2">{new Date(entry.created_at || '').toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PhoneEntries;
