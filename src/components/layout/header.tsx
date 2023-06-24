const MainNavigation = () => {
  return <div>Navigation</div>;
};

export const Header = () => {
  return (
    <header className="flex justify-between p-4">
      <span>Logo</span>
      <MainNavigation />
    </header>
  );
};
