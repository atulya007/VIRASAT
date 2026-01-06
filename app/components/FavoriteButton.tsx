'use client';

import { useFavorites } from '../hooks/useFavorites';

interface FavoriteItem {
  id: string;
  name: string;
  type: string;
  city: string;
}

interface FavoriteButtonProps {
  item: FavoriteItem;
}

export function FavoriteButton({ item }: FavoriteButtonProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleClick = () => {
    if (isFavorite(item.id)) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full transition ${
        isFavorite(item.id)
          ? 'bg-red-500 text-white'
          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
      }`}
      title={isFavorite(item.id) ? 'Remove from favorites' : 'Add to favorites'}
    >
      ♥
    </button>
  );
}