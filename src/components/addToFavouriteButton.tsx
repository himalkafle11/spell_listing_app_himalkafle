import React from 'react';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";


interface AddToFavouriteButtonProps {
  onClick: () => void;
}

const AddToFavouriteButton: React.FC<AddToFavouriteButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="flex items-center p-2 rounded-md bg-[#0000ff3d] cursor-pointer" onClick={handleClick}>
      <AddCircleOutlineIcon /> <span>Add to Favourites</span>
    </div>
  );
};

export default AddToFavouriteButton;
