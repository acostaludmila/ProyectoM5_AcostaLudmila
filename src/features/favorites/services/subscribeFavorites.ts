import {
  collection,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../../../config/firebase'

export function subscribeFavorites(
  userId: string,
  onChange: (ids: Set<string>) => void,
  onError: () => void,
) {
  const reference = collection(
    db,
    'users',
    userId,
    'favorites',
  )

  return onSnapshot(
    reference,
    (snapshot) => {
      onChange(
        new Set(
          snapshot.docs.map(
            (document) => document.id,
          ),
        ),
      )
    },
    onError,
  )
}
