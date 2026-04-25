import { fetchNotes } from '@/lib/api/serverApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import css from '../[...slug]/NotesPage.module.css';
import FilteredNotesClient from '../[...slug]/Notes.client';

export default async function NotesAllPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', '', 1, undefined],
    queryFn: () => fetchNotes('', 1, undefined),
  });

  return (
    <div className={css.app}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FilteredNotesClient />
      </HydrationBoundary>
    </div>
  );
}
