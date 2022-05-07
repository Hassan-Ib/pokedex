import React from "react";

type Props = {};

const useSearchPokemon = (props: Props) => {
  const [openSearchModal, setOpenSearchModal] = React.useState(false);

  const toggleSearchModal = () => {
    setOpenSearchModal(!openSearchModal);
  };

  return { openSearchModal, toggleSearchModal };
};

export default useSearchPokemon;
