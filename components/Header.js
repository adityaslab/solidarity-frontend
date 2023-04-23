const Header = ({ name }) => {
  return (
    <div className="flex flex-col flex-intial mt-5 mb-2 pl-8">
      <h2 className="w-full text-taskDo-backGray text-5xl font-semiBold leading-normal">
        hello {name}
      </h2>
      <h6 className="w-full text-gray-500 text-2xl">
        You have 3 tasks past deadline
      </h6>
    </div>
  );
};

export default Header;
