import axios from "axios"


// Оголосіть у файлі .env змінну NEXT_PUBLIC_API_URL.
//  Під час локальної розробки вона має містити http://localhost:3000,
// а після деплою — адресу вашого сайту на Vercel.
// Це потрібно, щоб у файлі lib/api/api.ts до baseURL
// (const baseURL = process.env.NEXT_PUBLIC_API_URL + '/api';) 
// запити завжди йшли на правильний сервер, незалежно від середовища.


const baseUrl =
  (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000') + '/api';

export const nextServer = axios.create({
  baseURL: baseUrl,
  withCredentials: true, 
});



// import type { NewNote, Note } from "../../types/note";
// import { Category } from "@/types/category";


// const perPage = 12;

// axios.defaults.baseURL = 'https://notehub-public.goit.study/api';

// axios.defaults.headers.common.Authorization=`Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`

// interface NoteSearch{
//     notes: Note[],
//     totalPages: number
// }




// export async function fetchNotes (searchQuery: string, pageNumber:number, tag?:string):Promise<NoteSearch>{
//     const   params= {
//             page:  pageNumber ,
//             search: searchQuery,
//             perPage: perPage,
//             tag: tag,
//         }
//     const { data } = await axios.get<NoteSearch>('/notes', { params });
//     console.log("CATEGORY SENT:", tag);
//    return data
// }


// export async function createNote(newNoteContent: NewNote) {
//     const {data} = await axios.post<Note>('/notes',newNoteContent);
//     return data
// }


// export async function deleteNote(noteToDeleteId: Note['id']) {
//     const { data } = await axios.delete<Note>(`/notes/${noteToDeleteId}`);
//     return data
// }

// export async function fetchNoteById(id: Note['id']) {
//     const { data } = await axios.get<Note>(`/notes/${id}`);
//     return data
    
// }

