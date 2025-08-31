import { useEffect, useState } from 'react';
import notesRaw from '../../../assets/notes';

interface NoteEL {
  id: number;
  title: string;
  content: string;
}

function useLoadNotes(id: number) {
  const [notes, setNotes] = useState<NoteEL[]>([]);
  useEffect(() => {
    const noteList = notesRaw.flatMap((e) =>
      e.workspace_id === id
        ? [
            {
              id: e.id,
              title: e.title,
              content: e.content,
            },
          ]
        : []
    );
    setNotes(noteList);
  }, [id]);

  return [notes, setNotes] as const;
}

export default useLoadNotes;
