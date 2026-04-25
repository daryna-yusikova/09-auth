// fetchNotes
// fetchNoteById
// getMe
// checkSession

import { cookies } from "next/headers";
import { nextServer } from "./api";
import { Note } from "@/types/note";
import { User } from "@/types/user";


type CheckSessionRequest = {
  success: boolean;
};


export const checkSession = async () => {
    const cookieStore = await cookies()
  const res = await nextServer.get<CheckSessionRequest>('/auth/session', {headers: {Cookie:cookieStore.toString() }});
  return res.data.success;
};


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
    const cookieStore = cookies();
    const { data } = await nextServer.get<Note>(`/notes/${id}`,{headers:{Cookie:cookieStore.toString()}});
    return data
    
}


export const getMe = async () => {
  const cookieStore = cookies();
  const { data } = await nextServer.get<User>('/auth/me',{headers:{Cookie:cookieStore.toString()}});
  return data;
};



