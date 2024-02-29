export const HeaderTable = () => {
  return (
    <div className="headerTable md:flex">
      <div className="w-21p">
        <p className="titleTable">Car</p>
      </div>
      <div className="w-24p containerTitleTable">
        <p className="titleTable">Next Reservation</p>
      </div>
      <div className="w-24p containerTitleTable">
        <p className="titleTable">Status</p>
      </div>
      <div className="w-24p containerTitleTable">
        <p className="titleTable">Rating</p>
      </div>
      <div className="w-7p containerTitleTable flex justify-center">
        <p className="titleTable">Actions</p>
      </div>
    </div>
  );
};
