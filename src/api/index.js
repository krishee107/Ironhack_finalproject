import { createClient } from '@supabase/supabase-js'


const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export const register = async (email, password) =>{
    const response = await supabase.auth.signUp({
          email,
          password
        })
    //todo identificar el return y retornar lo que nos interese
  }

export const login = async (email, password) =>{
    const response = await supabase.auth.signInWithPassword({
          email,
          password
    })
    return response.data.user.id
}

/*
task{
      user_id: id,
      title: 'Titulo',
      description: 'Descripción del task'
}
*/

export const newTask = async (task) =>{
    const response = await supabase.from('task')
    .insert(task)

    //todo identificar el return y retornar lo que nos interese
    //if(response) return true;
    //return false;
  }

export const getTasks = async () =>{
    const response = await supabase
    .from('task')
    .select('*')
    .order('id', {ascending: false})
  
    return response.data;
}


/*task{
      title:'Titulo modificado',
      description: 'Descripción modificada',
    }*/

export const updateTask = async (taskId, task)=>{
    const response = await supabase
    .from('task')
    .update()
    .eq('id', taskId)
    
    //todo identificar el return y retornar lo que nos interese
    //if(response) return true;
    //return false;
}

export const deleteTask = async(taskId)=>{
    const response = await supabase
    .from('task')
    .delete()
    .eq('id', taskId)
  }