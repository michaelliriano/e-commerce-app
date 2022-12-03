export type NavBarProps = {
  drawer: {
    cart: {
      isOpen: boolean;
      open: () => void;
      close: () => void;
    };
  };
};
