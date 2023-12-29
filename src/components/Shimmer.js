const Shimmer = () => {
  return (
    <div className="shimmer_container">
      {[...Array(10)].map(() => {
        return <div className="shimmer_cards"></div>;
      })}
    </div>
  );
};

export default Shimmer;
