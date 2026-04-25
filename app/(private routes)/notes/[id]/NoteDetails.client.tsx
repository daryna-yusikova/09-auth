'use client';
import { useParams } from 'next/navigation';
import css from './NoteDetails.module.css';
import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api/clientApi';
import Loader from '@/components/Loader/Loader';
export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <div className={css.container}>
      <div className={css.item}>
        {isLoading && <Loader label="Loading note details..." />}
        {error && <p>Something went wrong.</p>}
        {data && (
          <>
            <div className={css.header}>
              <h2>{data.title}</h2>
            </div>
            <p className={css.tag}>{data.tag}</p>
            <p className={css.content}>{data.content}</p>
            <p className={css.date}>{data.createdAt}</p>
          </>
        )}
      </div>
    </div>
  );
}
