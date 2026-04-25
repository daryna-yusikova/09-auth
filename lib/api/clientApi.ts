// fetchNotes
// fetchNoteById
// createNote
// deleteNote
// register
// login
// logout
// checkSession
// getMe
// updateMe

import { NextServer } from "next/dist/server/next";


import type { NewNote, Note } from "../../types/note";
import { Category } from "@/types/category";
import { nextServer } from "./api";
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
    const { data } = await nextServer.get<NoteSearch>('/notes', { params });
    console.log("CATEGORY SENT:", tag);
   return data
}


export async function createNote(newNoteContent: NewNote) {
    const {data} = await nextServer.post<Note>('/notes',newNoteContent);
    return data
}


export async function deleteNote(noteToDeleteId: Note['id']) {
    const { data } = await nextServer.delete<Note>(`/notes/${noteToDeleteId}`);
    return data
}

export async function fetchNoteById(id: Note['id']) {
    const { data } = await nextServer.get<Note>(`/notes/${id}`);
    return data
    
}


export interface userData{
    email: string,
    password: string,
}

export async function login(userData:userData):Promise<User> {
    const { data } = await nextServer.post<User>('/auth/login', userData);
    return data
}



export async function register(userData:userData):Promise<User> {
    const { data } = await nextServer.post<User>('/auth/register', userData);
    return data
}

export const getMe = async () => {
  const { data } = await nextServer.get<User>('/users/me');
  return data;
};


type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const res = await nextServer.get<CheckSessionRequest>('/auth/session');
  return res.data.success;
};


export const logout = async (): Promise<void> => {
  await nextServer.post('/auth/logout');
};

export const updateMe = async (data: { username: string }): Promise<User> => {
  const { data: res } = await nextServer.patch<User>('/users/me', data);
  return res;
};