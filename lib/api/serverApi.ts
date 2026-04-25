// fetchNotes
// fetchNoteById
// getMe
// checkSession

import { cookies } from "next/headers";
import { nextServer } from "./api";
import { Note } from "@/types/note";
import { User } from "@/types/user";


const perPage = 12;


interface NoteSearch{
    notes: Note[],
    totalPages: number
}



export async function fetchNotes (searchQuery: string, pageNumber:number, tag?:string):Promise<NoteSearch>{
    const   params= {
            page:  pageNumber ,
            search: searchQuery,
            perPage: perPage,
            tag: tag,
    }
    const cookieStore = await cookies();
    const { data } = await nextServer.get<NoteSearch>('/notes', { params, headers:{Cookie:cookieStore.toString()} });
    console.log("CATEGORY SENT:", tag);
   return data
}


export async function fetchNoteById(id: Note['id']) {
    const cookieStore = await cookies();
    const { data } = await nextServer.get<Note>(`/notes/${id}`,{headers:{Cookie:cookieStore.toString()}});
    return data
    
}


export const getMe = async () => {
  const cookieStore = await cookies();
  const { data } = await nextServer.get<User>('/users/me',{headers:{Cookie:cookieStore.toString()}});
  return data;
};



// lib/api/serverApi.ts



export const checkServerSession = async () => {
  // Дістаємо поточні cookie
  const cookieStore = await cookies();
  const res = await nextServer.get('/auth/session', {
    headers: {
      // передаємо кукі далі
      Cookie: cookieStore.toString(),
    },
  });
  // Повертаємо повний респонс, щоб proxy мав доступ до нових cookie
  return res;
};




