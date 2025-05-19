import { useState, useEffect } from 'react';
import { getFormResponses } from '@/integrations/supabase/api';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type FormResponse = Database['public']['Tables']['form_responses']['Row'];

function FormResponses() {
  const [responses, setResponses] = useState<FormResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState<string>('Checking connection...');

  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log('Testing Supabase connection...');
        const { data, error } = await supabase.from('form_responses').select('*').limit(1);
        
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
    const fetchResponses = async () => {
      try {
        console.log('Fetching form responses...');
        const { data, error } = await getFormResponses();
        
        if (error) {
          console.error('Error fetching form responses:', error);
          setError(`Error al cargar las respuestas: ${error.message}`);
          setLoading(false);
          return;
        }
        
        console.log('Form responses fetched:', data);
        setResponses(data || []);
        setLoading(false);
      } catch (err) {
        console.error('Exception fetching form responses:', err);
        setError(`Error al cargar las respuestas: ${err instanceof Error ? err.message : String(err)}`);
        setLoading(false);
      }
    };

    fetchResponses();
  }, []);

  if (loading) return <div className="p-4">Cargando respuestas...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Respuestas del Formulario</h2>
      
      <div className="mb-4 p-3 border rounded">
        <h3 className="font-semibold mb-2">Estado de la conexión:</h3>
        <div className={connectionStatus.includes('error') ? 'text-red-500' : 'text-green-500'}>
          {connectionStatus}
        </div>
      </div>
      
      {responses.length === 0 ? (
        <div className="p-4 bg-gray-100 rounded">No hay respuestas todavía</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Nombre</th>
                <th className="border p-2">Cédula</th>
                <th className="border p-2">Departamento</th>
                <th className="border p-2">Ciudad</th>
                <th className="border p-2">Barrio</th>
                <th className="border p-2">Fuente de Orden</th>
              </tr>
            </thead>
            <tbody>
              {responses.map((response) => (
                <tr key={response.id}>
                  <td className="border p-2">{response.nombrecompleto}</td>
                  <td className="border p-2">{response.cedula}</td>
                  <td className="border p-2">{response.departamento}</td>
                  <td className="border p-2">{response.ciudad}</td>
                  <td className="border p-2">{response.barrio}</td>
                  <td className="border p-2">{response.fuenteorden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default FormResponses;
