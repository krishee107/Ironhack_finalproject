import { createClient } from '@supabase/supabase-js'

let user_id;
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export const register = async (email, password) =>{
    const response = await supabase.auth.signUp({
          email,
          password
        })   
    
    if(response.error == null){
      user_id = response.data.user.id;
      return response;
    } 
    else if(response.error == 422){
      //422 - la contraseña tiene que tener +6 caracteres
      console.log("La contraseña tiene que ser mayor de 6 caracteres");
      return false
    }
    else if(response.error == 429){
      //429"For security purposes, you can only request this after 60 seconds."
      console.log("For security purposes, you can only request this after 60 seconds");
      return false
    }else if(response.error == 500){
      console.log("Ya existe un usuario con ese correo o tiene un correo no permitido")
      return false;
    }
    else
      console.log(response.error)
  }

export const login = async (email, password) =>{
    const response = await supabase.auth.signInWithPassword({
          email,
          password
    })
    if(response){
      user_id = response.data.user.id;
      return user_id;
    }
    return false
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
        .select(`change`)
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
