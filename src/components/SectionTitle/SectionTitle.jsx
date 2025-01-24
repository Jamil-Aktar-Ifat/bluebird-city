const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-10 md:w-3/12 mx-auto">
      <p className="text-[#D99904] italic">--- {subHeading} ---</p>
      <h3 className="text-3xl uppercase border-y-2 border-[#E8E8E8] py-2 mt-1    ">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
