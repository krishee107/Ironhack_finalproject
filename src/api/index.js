import { createClient } from '@supabase/supabase-js'

let user_id;
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export const register = async (email, password) =>{
    try {
      let { data, error } = await supabase.auth.signUp({
        email,
        password
      })   

      if (error) {
        throw error;
      }

      if (data) {
        user_id = data.user.id;
        return data
      }
    } catch (error) {
      alert(error.message);
      return false;
    }
  }

export const login = async (email, password) =>{
  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      throw error;
    }

    if (data) {
      user_id = data.user.id;
      return user_id;
    }
  } catch (error) {
    alert(error.message);
    return false;
  }
}

export const newTask = async (task) =>{

  try {
      let { data, error, status } = await supabase
      .from('task')
      .insert({
        user_id: task.user_id, 
        title: task.title,
        description: task.description
      })
      .select('*') 
      
      if (error) {
        throw error;
      }

      if (data) {
        return data
      }
  } catch (error) {
      alert(error.message);
      return false;
  }

  }

  export const getTasks = async (user_id) =>{
    const response = await supabase
    .from('task')
    .select('*')
    .order('status', {ascending: true})
    .order( 'id',  {ascending: false})
    .eq('user_id', user_id)
    .neq('status', 'archivada')
  
   if(response) return response.data;
   else return false
}

export const getArchivedTasks = async (user_id) =>{
  const response = await supabase
  .from('task')
  .select('*') 
  .order( 'id',  {ascending: false})
  .eq('status', 'archivada')
  .eq('user_id', user_id)

 if(response) return response.data;
 else return false
}


/*task{
      title:'Titulo modificado',
      description: 'Descripción modificada',
    }*/

export const updateTask = async (id, task)=>{
    const response = await supabase
    .from('task')
    .update(task)
    .eq('id', id)
    
    //todo identificar el return y retornar lo que nos interese
    if(response) return true;
    return false;
}

export const deleteTask = async(taskId)=>{
    const response = await supabase
    .from('task')
    .delete()
    .eq('id', taskId)

    if(response) return true;
    else return false
  }

  export async function getProfile(user_id) {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`*`)
        .eq('user_id', user_id)
        .single();
  
      if (error && status !== 406) {
        throw error;
      }
  
      if (data) {
        return data
      }
    } catch (error) {
      alert(error.message);
      return false;
    }
  }

  export async function updateProfile(user_id, username, avatar, website) {
    try {
      const updates = {
        user_id,
        username,
        avatar_url: avatar,
        website,
        updated_at: new Date(),
      };
  
      let { error } = await supabase.from('profiles').upsert(updates);
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    }
  }

  export async function getHistoric(user_id){
    try {
      let { data, error, status } = await supabase
        .from('historic')
        .select(`*`)
        .eq('user_id', user_id)
  
      if (error && status !== 406) {
        throw error;
      }
  
      if (data) {
        return data
      }
    } catch (error) {
      alert(error.message);
      return false;
    }
  }

  export async function newHistoric(user_id, task_id, change){
    try {
      let { data, error } = await supabase
      .from('historic')
      .insert({ 
        user_id: user_id, 
        task_id: task_id,
        change:  change
      })
  
      if (error) {
        throw error;
      }
  
      if (data) {
        return data
      }
    } catch (error) {
      alert(error.message);
      return false;
    }
  }
